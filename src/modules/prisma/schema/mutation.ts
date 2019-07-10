import { prismaObjectType } from 'nexus-prisma';

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['*']);
  },
});
