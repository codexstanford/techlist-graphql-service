import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import session from 'express-session';
import bodyParser from 'body-parser';
import PrismaSchema from '../modules/prisma';
import { config } from './config';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import 'apollo-cache-control';

import {
  getServerSessionConfig,
  getResponseCacheConfig,
  getDistributedCache,
  getCacheControlConfig,
  getErrorFormatter,
  getEngineConfig,
  getDistributedStore,
  getApolloResolverContext,
  getPersistedQueriesConfig,
  getApolloMiddlewareConfig,
  getServerStartCallback,
  isProduction,
} from './helpers';

const app = express();

app.use(
  '*',
  session(getServerSessionConfig(getDistributedStore())),
  compression(),
  bodyParser.urlencoded({ extended: true, limit: '10mb' }),
);

export const graphqlServer = new ApolloServer({
  schema: PrismaSchema,
  context: (req) => getApolloResolverContext(req),
  introspection: true,
  tracing: true,
  plugins: [responseCachePlugin(getResponseCacheConfig())],
  cacheControl: getCacheControlConfig(),
  persistedQueries: getPersistedQueriesConfig(),
  formatError: (err) => getErrorFormatter(err),
  debug: !isProduction,
  cache: getDistributedCache(),
  engine: getEngineConfig(),
});

graphqlServer.applyMiddleware({
  app,
  ...getApolloMiddlewareConfig(),
});

export const run = () => {
  app.listen({ port: config.port }, () =>
    getServerStartCallback(config, graphqlServer),
  );
};

export default run;
