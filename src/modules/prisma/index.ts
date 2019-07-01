import { makePrismaSchema, prismaObjectType } from 'nexus-prisma';
import { objectType } from 'nexus';
import * as path from 'path';
import datamodelInfo from '../../../generated/nexus-prisma';
import { prisma } from '../../../generated/prisma-client';
import { permissions } from './middleware';

const PartyAccount = prismaObjectType({
  name: 'PartyAccount',
  definition(t) {
    t.prismaFields(['*']);
  },
});

// const CompanyOperatingModel = prismaObjectType({
//   name: 'CompanyBusinessModel',
//   definition(t) {
//     t.prismaFields(['*']);
//   },
// });

// const Company = prismaObjectType({
//   name: 'Company',
//   definition(t) {
//     t.prismaFields(['*']);

//     t.field('description', {
//       ...t.prismaType.description,
//       resolve(root, args, ctx) {
//         return unescape(root.description);
//       },
//     });
//   },
// });

// const Affiliation = prismaObjectType({
//   name: 'Affiliation',
//   definition(t) {
//     t.prismaFields(['*']);
//   },
// });

// const Query = prismaObjectType({
//   name: 'Query',
//   definition(t) {
//     t.prismaFields(['*']);
//     t.field('me', {
//       type: 'User',
//       resolve: async (parent, args, ctx) => {
//         const { prisma, user } = ctx;

//         const me = await ctx.prisma.user({
//           cognitoId: user.sub,
//         });

//         if (!me) {
//           const result = await prisma.createUser({
//             cognitoId: user.sub,
//             email: user.email,
//             phone: user.phone_number,
//             name: user['cognito:username'],
//             phone_number_verified: user.phone_number_verified,
//             email_verified: user.email_verified,
//             role: 'USER',
//             person: {
//               create: {
//                 email: user.email,
//                 phone: user.phone_number,
//                 metadata: {
//                   create: {
//                     isPublic: false,
//                   },
//                 },
//               },
//             },
//           });

//           return result;
//         }
//         return me;
//       },
//     });
//     (t.field('usersConnection', {
//       ...t.prismaType.usersConnection,
//       resolve(root, args, ctx) {
//         return ctx.prisma.usersConnection()
//           .$fragment(`fragment UsConnection on UserConnection {
// 		  pageInfo {
// 		    hasNextPage
// 		    hasPreviousPage
// 		    startCursor
// 		    endCursor
// 		  }
// 		  aggregate { count }
// 		  edges {
// 		    cursor
// 		    node { id name }
// 		  }
// 	   }`);
//       },
//     }) as unknown) as UserConnection;

//     (t.field('companyTargetMarketsConnection', {
//       ...t.prismaType.companyTargetMarketsConnection,
//       resolve(root, args, ctx) {
//         return ctx.prisma.companyTargetMarketsConnection()
//           .$fragment(`fragment CTMConnection on CompanyTargetMarketConnection {
// 		  pageInfo {
// 		    hasNextPage
// 		    hasPreviousPage
// 		    startCursor
// 		    endCursor
// 		  }
// 		  aggregate { count }
// 		  edges {
// 		    cursor
// 		    node { id name }
// 		  }
// 	   }`);
//       },
//     }) as unknown) as CompanyTargetMarketConnection;

//     (t.field('companyCategoriesConnection', {
//       ...t.prismaType.companyCategoriesConnection,
//       resolve(root, args, ctx) {
//         return ctx.prisma.companyCategoriesConnection()
//           .$fragment(`fragment CCConnection on CompanyCategoryConnection {
// 		  pageInfo {
// 		    hasNextPage
// 		    hasPreviousPage
// 		    startCursor
// 		    endCursor
// 		  }
// 		  aggregate { count }
// 		  edges {
// 		    cursor
// 		    node { id name }
// 		  }
// 	   }`);
//       },
//     }) as unknown) as CompanyCategoryConnection;

//     (t.field('companyBusinessModelsConnection', {
//       ...t.prismaType.companyBusinessModelsConnection,
//       resolve(root, args, ctx) {
//         return ctx.prisma.companyBusinessModelsConnection()
//           .$fragment(`fragment CBMConnection on CompanyBusinessModelConnection {
// 		  pageInfo {
// 		    hasNextPage
// 		    hasPreviousPage
// 		    startCursor
// 		    endCursor
// 		  }
// 		  aggregate { count }
// 		  edges {
// 		    cursor
// 		    node { id name }
// 		  }
// 	   }`);
//       },
//     }) as unknown) as CompanyBusinessModelConnection;

//     (t.field('companiesConnection', {
//       ...t.prismaType.companiesConnection,
//       resolve(root, args, ctx) {
//         return ctx.prisma.companiesConnection()
//           .$fragment(`fragment CoConnection on CompanyConnection {
// 		  pageInfo {
// 		    hasNextPage
// 		    hasPreviousPage
// 		    startCursor
// 		    endCursor
// 		  }
// 		  aggregate { count }
// 		  edges {
// 		    cursor
// 		    node { id name }
// 		  }
// 	   }`);
//       },
//     }) as unknown) as CompanyConnection;

//     (t.field('affiliationsConnection', {
//       ...t.prismaType.affiliationsConnection,
//       resolve(root, args, ctx) {
//         return ctx.prisma.affiliationsConnection()
//           .$fragment(`fragment AfConnection on AffiliationConnection {
// 		  pageInfo {
// 		    hasNextPage
// 		    hasPreviousPage
// 		    startCursor
// 		    endCursor
// 		  }
// 		  aggregate { count }
// 		  edges {
// 		    cursor
// 		    node { id name }
// 		  }
// 	   }`);
//       },
//     }) as unknown) as AffiliationConnection;

//     (t.field('personsConnection', {
//       ...t.prismaType.personsConnection,
//       resolve(root, args, ctx) {
//         return ctx.prisma.personsConnection()
//           .$fragment(`fragment Connection on PersonConnection {
// 		  pageInfo {
// 		    hasNextPage
// 		    hasPreviousPage
// 		    startCursor
// 		    endCursor
// 		  }
// 		  aggregate { count }
// 		  edges {
// 		    cursor
// 		    node { id name }
// 		  }
// 	   }`);
//       },
//     }) as unknown) as PersonConnection;
//   },
// });

// const Person = prismaObjectType({
//   name: 'Person',
//   definition(t) {
//     t.prismaFields(['*']);
//   },
// });

// const Location = prismaObjectType({
//   name: 'CompanyLocation',
//   definition(t) {
//     t.prismaFields(['*']);
//   },
// });

// const Mutation = prismaObjectType({
//   name: 'Mutation',
//   definition(t) {
//     t.prismaFields(['*']);
//   },
// });

// const UserConnection = prismaObjectType({
//   name: 'UserConnection',
//   definition(t) {
//     t.prismaFields(['*']);

//     t.field('aggregate', {
//       ...t.prismaType.aggregate,
//       resolve(root, args, ctx) {
//         return root.aggregate;
//       },
//     });
//   },
// });

// const CompanyConnection = prismaObjectType({
//   name: 'CompanyConnection',
//   definition(t) {
//     t.prismaFields(['*']);

//     t.field('aggregate', {
//       ...t.prismaType.aggregate,
//       resolve(root, args, ctx) {
//         return root.aggregate;
//       },
//     });
//   },
// });

// const AffiliationConnection = prismaObjectType({
//   name: 'AffiliationConnection',
//   definition(t) {
//     t.prismaFields(['*']);

//     t.field('aggregate', {
//       ...t.prismaType.aggregate,
//       resolve(root, args, ctx) {
//         return root.aggregate;
//       },
//     });
//   },
// });

// const CompanyBusinessModelConnection = prismaObjectType({
//   name: 'CompanyBusinessModelConnection',
//   definition(t) {
//     t.prismaFields(['*']);

//     t.field('aggregate', {
//       ...t.prismaType.aggregate,
//       resolve(root, args, ctx) {
//         return root.aggregate;
//       },
//     });
//   },
// });

// const CompanyTargetMarketConnection = prismaObjectType({
//   name: 'CompanyTargetMarketConnection',
//   definition(t) {
//     t.prismaFields(['*']);

//     t.field('aggregate', {
//       ...t.prismaType.aggregate,
//       resolve(root, args, ctx) {
//         return root.aggregate;
//       },
//     });
//   },
// });

// const CompanyCategoryConnection = prismaObjectType({
//   name: 'CompanyCategoryConnection',
//   definition(t) {
//     t.prismaFields(['*']);

//     t.field('aggregate', {
//       ...t.prismaType.aggregate,
//       resolve(root, args, ctx) {
//         return root.aggregate;
//       },
//     });
//   },
// });

// const PersonConnection = prismaObjectType({
//   name: 'PersonConnection',
//   definition(t) {
//     t.prismaFields(['*']);

//     t.field('aggregate', {
//       ...t.prismaType.aggregate,
//       resolve(root, args, ctx) {
//         return root.aggregate;
//       },
//     });
//   },
// });

const CustType = objectType({
  name: 'Company',
  definition(t) {
    t.field('id', {
      type: 'ID',
    });
  },
});

const Query = prismaObjectType({
  name: 'Query',
  // Expose all generated `Todo`-queries
  definition(t) {
    t.prismaFields(['*']);
    t.field('custom', {
      type: 'Company',
    }),
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

// Customize the "Mutation" building block
const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    // Expose only the `createTodo` mutation (`updateTodo` and `deleteTodo` not exposed)
    t.prismaFields(['*']);

    // Add a custom `markAsDone` mutation
    // t.field('markAsDone', {
    //   type: 'Todo',
    //   args: { id: idArg() },
    //   nullable: true,
    //   resolve: (_, { id }, ctx) => {
    //     return ctx.prisma.updateTodo({
    //       where: { id },
    //       data: { done: true }
    //     })
    //   }
    // })
  },
});

export const schema = makePrismaSchema({
  types: [
    Query,
    Mutation,
    CustType,
    // User,
    // Company,
    // Location,
    // Affiliation,
    // Person,
    // UserConnection,
    // CompanyConnection,
    // AffiliationConnection,
    // PersonConnection,
    // CompanyOperatingModel,
    // CompanyTargetMarketConnection,
    // CompanyBusinessModelConnection,
    // CompanyCategoryConnection,
  ],
  prisma: {
    datamodelInfo,
    client: prisma,
  },
  outputs: {
    schema: path.join(__dirname, '../../../generated/schema.graphql'),
    typegen: path.join(__dirname, '../../../generated/nexus'),
  },
});

export default schema;
