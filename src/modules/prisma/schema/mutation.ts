import { prismaObjectType } from 'nexus-prisma';

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields([
      {
        name: 'updatePartyAccount',
        alias: 'oldUpdatePartyAccount',
      },
      {
        name: 'createOrganization',
        alias: 'oldCreateOrganization',
      },
      // {
      //   name: 'deleteOrganization',
      //   alias: 'oldDeleteOrganization',
      // },
    ]);
    t.field('updatePartyAccount', {
      ...t.prismaType.updatePartyAccount,
      resolve: async (root, args, ctx) => {
        try {
          return await ctx.prisma.updatePartyAccount(args);
        } catch (err) {
          console.log(err);
        }
      },
    });

    t.field('createOrganization', {
      type: 'Organization',
      args: { data: 'OrganizationCreateInput' },
      resolve: async (root, args, ctx) => {
        try {
          const result = await ctx.prisma.createOrganization(
            Object.assign({}, args.data, {
              metadata: {
                create: {
                  isDraft: false,
                  isPublic: false,
                  isUnverified: false,
                  isApproved: false,
                  isPendingReview: true,
                },
              },
            }),
          );
          const psr = await ctx.pubsub.publish({
            topic: 'newuser',
            message: result,
          });
          return result;
        } catch (err) {
          console.log(err);
        }
      },
    });

    t.field('deleteOrganization', {
      type: 'Organization',
      args: { where: 'OrganizationWhereUniqueInput' },
      resolve: async (root, args, ctx, info) => {
        try {
          const result = await ctx.prisma.deleteOrganization(
            { id: args.where.id },
            info,
          );

          return result;
        } catch (err) {
          console.log(err);
        }
      },
    });
  },
});
