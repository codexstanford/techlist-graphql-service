import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import compression from 'compression';
import session from 'express-session';
import bodyParser from 'body-parser';
import { MemcachedCache } from 'apollo-server-cache-memcached';
import http from 'http';
import PrismaSchema from '../modules/prisma';
import { config } from './config';
import { prisma } from '../../generated/prisma-client';
import { getUserId } from '../modules/prisma/utils';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
const logger = require('morgan');

const MemcachedStore = require('connect-memcached')(session);

const app = express();
app.use(cors());
app.use(compression());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const store =
  config.environment === 'production'
    ? new MemcachedStore({
        hosts: ['memcached-1-memcached-svc.default.svc.cluster.local:11211'],
        retries: 10,
        retry: 1000,
      })
    : new MemcachedStore({
        hosts: ['0.0.0.0:11211'],
        retries: 10,
        retry: 1000,
      });

app.use(
  session({
    secret: 'csti',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000,
      secure: config.environment === 'production' ? false : false,
    },
    store,
  }),
);

const WS_PORT = 5000;

const test = responseCachePlugin({
  cache:
    config.environment === 'production'
      ? new MemcachedCache(
          ['memcached-1-memcached-svc.default.svc.cluster.local:11211'],
          { retries: 10, retry: 1000 },
        )
      : new MemcachedCache(['0.0.0.0:11211'], { retries: 10, retry: 1000 }),
}) as any;

export const graphqlServer = new ApolloServer({
  schema: PrismaSchema,
  context: async (request) => {
    return {
      prisma,
      user: await getUserId(request),
      metrics: {},
      ...request,
    };
  },
  introspection: true,
  tracing: true,
  cacheControl: {
    defaultMaxAge: 60000,
    calculateHttpHeaders: true,
  },
  plugins: [test],
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

graphqlServer.applyMiddleware({ app, path: '/' });

// graphqlServer.installSubscriptionHandlers(server);

export const run = () => {
  app.listen({ port: config.port }, () => {
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
