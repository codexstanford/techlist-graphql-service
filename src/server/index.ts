import express from 'express';
import cors from 'cors';
import ProtectedApolloServer from './apollo';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { MemcachedCache } from 'apollo-server-cache-memcached';
import http from 'http';
import PrismaSchema from '../modules/prisma';
import { config } from './config';
import { prisma } from '../../generated/prisma-client';
import { getUserId } from '../modules/prisma/utils';
import bodyParser from 'body-parser';

const WS_PORT = 5000;

export const graphqlServer = new ProtectedApolloServer({
  schema: PrismaSchema,
  context: async (request) => {
    return {
      ...request,
      prisma,
      user: await getUserId(request),
    };
  },
  introspection: true,
  tracing: true,
  cacheControl: {
    defaultMaxAge: 5,
  },

  persistedQueries: {
    cache:
      config.environment === 'production'
        ? new MemcachedCache(
            ['memcached-1-memcached-svc.default.svc.cluster.local:11211'],
            { retries: 10, retry: 1000 },
          )
        : new MemcachedCache(['0.0.0.0:11211'], { retries: 10, retry: 1000 }),
  },
  formatError: (error) => {
    console.log('[ERROR:]', JSON.stringify(error));
    return error;
  },
  debug: config.environment === 'production' ? false : true,
  cache:
    config.environment === 'production'
      ? new MemcachedCache(
          ['memcached-1-memcached-svc.default.svc.cluster.local:11211'],
          { retries: 10, retry: 1000 },
        )
      : new MemcachedCache(['0.0.0.0:11211'], { retries: 10, retry: 1000 }),
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
    generateClientInfo: ({ request }) => {
      const headers = request.http && request.http.headers;
      if (headers) {
        return {
          clientName: headers.get('apollo-client-name'),
          clientVersion: headers.get('apollo-client-version'),
        };
      } else {
        return {
          clientName: 'Unknown Client',
          clientVersion: 'Unversioned',
        };
      }
    },
  },
});

const app = express();

app.use(cors());

app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

graphqlServer.applyMiddleware({ app, path: '/' });

let server;

server = http.createServer(app);

// graphqlServer.installSubscriptionHandlers(server);

export const run = () => {
  server.listen({ port: config.port }, () => {
    console.log(
      `🚀 Server ready at`,
      `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${
        graphqlServer.graphqlPath
      }`,
    );
    console.log(
      `🚀 Subscription Server ready at`,
      ` ws://${config.hostname}:${config.port}${
        graphqlServer.subscriptionsPath
      }`,
    );
  });
};

export default run;
