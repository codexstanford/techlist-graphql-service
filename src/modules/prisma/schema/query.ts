import { prismaObjectType } from 'nexus-prisma';

export const Query = prismaObjectType({
  name: 'Query',
  // Expose all generated `Todo`-queries
  definition(t) {
    t.prismaFields(['*']);

    t.field('me', {
      type: 'PartyAccount',
      resolve: async (parent, ards, ctx) => {
        const { prisma, user } = ctx;

        const me = await ctx.prisma.partyAccount({
          cognitoId: user.sub,
        });

        if (!me && user) {
          const result = await prisma.createPartyAccount({
            cognitoId: user.sub,
            email: user.email,
            phone: user.phone_number,
            name: user['cognito:username'],
            phone_number_verified: user.phone_number_verified,
            email_verified: user.email_verified,
            person: {
              create: {
                metadata: {
                  create: {
                    isDraft: true,
                    isPublic: false,
                    isRejected: false,
                    isUnverified: false,
                    isVerified: true,
                    isApproved: false,
                    isPendingReview: false,
                  },
                },
                email: {
                  create: {
                    payload: user.email,
                    fromDate: new Date(),
                    isPrimary: true,
                    isPublic: true,
                  },
                },
                phone: {
                  create: {
                    payload: user.phone_number,
                    fromDate: new Date(),
                    isPrimary: true,
                    isPublic: false,
                  },
                },
              },
            },
          });
          return result;
        }
        return me;

        // const me = await ctx.prisma.user({
        //   cognitoId: user.sub,
        // });
      },
    });
  },
});
