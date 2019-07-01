import express from 'express';
import cors from 'cors';
import ProtectedApolloServer from './apollo';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { mergeSchemas } from 'graphql-tools';

import http from 'http';

import PrismaSchema from '../modules/prisma';
import { config } from './config';
import { prisma } from '../../generated/prisma-client';
import { getUserId } from '../modules/prisma/utils';

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
  cacheControl: true,
  formatError: (error) => {
    console.log('[ERROR:]', JSON.stringify(error));
    return error;
  },
  debug: true,

  // cache: new RedisCache({
  //   host:
  //     config.environment === 'production'
  //       ? `${process.env.REDIS_PRODUCTION}`
  //       : `${process.env.REDIS_DEVELOPMENT}`,
  //   port: 6379,
  // }),
  //   engine: {
  //     apiKey: process.env.ENGINE_API_KEY,
  //     generateClientInfo: ({ request }) => {
  //       const headers = request.http && request.http.headers;
  //       if (headers) {
  //         return {
  //           clientName: headers['apollo-client-name'],
  //           clientVersion: headers['apollo-client-version'],
  //         };
  //       } else {
  //         return {
  //           clientName: 'Unknown Client',
  //           clientVersion: 'Unversioned',
  //         };
  //       }
  //     },
  //   },
});

const app = express();

app.use(cors());

app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));

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
