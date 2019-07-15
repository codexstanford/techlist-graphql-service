import * as path from 'path';
import { makePrismaSchema } from 'nexus-prisma';
import datamodelInfo from '../../../generated/nexus-prisma';
import { applyMiddleware } from 'graphql-middleware';

import { prisma } from '../../../generated/prisma-client';
import { permissions } from './middleware';
import { Query, Mutation } from './schema';

export const schema = applyMiddleware(
  makePrismaSchema({
    types: [Query, Mutation],
    prisma: {
      datamodelInfo,
      client: prisma,
    },
    outputs: {
      schema: __dirname + 'generated/schema.graphql',
      typegen: __dirname + 'generated/nexus',
    },
    typegenAutoConfig: {
      sources: [
        {
          source: path.join(__dirname, './types.ts'),
          alias: 't',
        },
      ],
      contextType: 't.Context',
      debug: true,
    },
  }),
);

export default schema;
