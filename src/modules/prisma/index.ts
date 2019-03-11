import { makePrismaSchema, prismaObjectType } from 'nexus-prisma';
import * as path from 'path';
import datamodelInfo from '../../../generated/nexus-prisma';
import { prisma } from '../../../generated/prisma-client';
import { permissions } from './middleware';
import {
  UserConnection,
  CompanyConnection,
  AffiliationConnection,
  PersonConnection,
  CompanyTargetMarketConnection,
  CompanyBusinessModelConnection,
  CompanyCategoryConnection,
} from './types';

const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields(['*']);
  },
});

const CompanyOperatingModel = prismaObjectType({
  name: 'CompanyBusinessModel',
  definition(t) {
    t.prismaFields(['*']);
  },
});

const Company = prismaObjectType({
  name: 'Company',
  definition(t) {
    t.prismaFields(['*']);

    t.field('description', {
      ...t.prismaType.description,
      resolve(root, args, ctx) {
        return unescape(root.description);
      },
    });
  },
});

const Affiliation = prismaObjectType({
  name: 'Affiliation',
  definition(t) {
    t.prismaFields(['*']);
  },
});

const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['*']);

    (t.field('usersConnection', {
      ...t.prismaType.usersConnection,
      resolve(root, args, ctx) {
        return ctx.prisma.usersConnection()
          .$fragment(`fragment UsConnection on UserConnection {
		  pageInfo {
		    hasNextPage
		    hasPreviousPage
		    startCursor
		    endCursor
		  }
		  aggregate { count }
		  edges {
		    cursor
		    node { id name }
		  }
	   }`);
      },
    }) as unknown) as UserConnection;

    (t.field('companyTargetMarketsConnection', {
      ...t.prismaType.companyTargetMarketsConnection,
      resolve(root, args, ctx) {
        return ctx.prisma.companyTargetMarketsConnection()
          .$fragment(`fragment CTMConnection on CompanyTargetMarketConnection {
		  pageInfo {
		    hasNextPage
		    hasPreviousPage
		    startCursor
		    endCursor
		  }
		  aggregate { count }
		  edges {
		    cursor
		    node { id name }
		  }
	   }`);
      },
    }) as unknown) as CompanyTargetMarketConnection;

    (t.field('companyCategoriesConnection', {
      ...t.prismaType.companyCategoriesConnection,
      resolve(root, args, ctx) {
        return ctx.prisma.companyCategoriesConnection()
          .$fragment(`fragment CCConnection on CompanyCategoryConnection {
		  pageInfo {
		    hasNextPage
		    hasPreviousPage
		    startCursor
		    endCursor
		  }
		  aggregate { count }
		  edges {
		    cursor
		    node { id name }
		  }
	   }`);
      },
    }) as unknown) as CompanyCategoryConnection;

    (t.field('companyBusinessModelsConnection', {
      ...t.prismaType.companyBusinessModelsConnection,
      resolve(root, args, ctx) {
        return ctx.prisma.companyBusinessModelsConnection()
          .$fragment(`fragment CBMConnection on CompanyBusinessModelConnection {
		  pageInfo {
		    hasNextPage
		    hasPreviousPage
		    startCursor
		    endCursor
		  }
		  aggregate { count }
		  edges {
		    cursor
		    node { id name }
		  }
	   }`);
      },
    }) as unknown) as CompanyBusinessModelConnection;

    (t.field('companiesConnection', {
      ...t.prismaType.companiesConnection,
      resolve(root, args, ctx) {
        return ctx.prisma.companiesConnection()
          .$fragment(`fragment CoConnection on CompanyConnection {
		  pageInfo {
		    hasNextPage
		    hasPreviousPage
		    startCursor
		    endCursor
		  }
		  aggregate { count }
		  edges {
		    cursor
		    node { id name }
		  }
	   }`);
      },
    }) as unknown) as CompanyConnection;

    (t.field('affiliationsConnection', {
      ...t.prismaType.affiliationsConnection,
      resolve(root, args, ctx) {
        return ctx.prisma.affiliationsConnection()
          .$fragment(`fragment AfConnection on AffiliationConnection {
		  pageInfo {
		    hasNextPage
		    hasPreviousPage
		    startCursor
		    endCursor
		  }
		  aggregate { count }
		  edges {
		    cursor
		    node { id name }
		  }
	   }`);
      },
    }) as unknown) as AffiliationConnection;

    (t.field('personsConnection', {
      ...t.prismaType.personsConnection,
      resolve(root, args, ctx) {
        return ctx.prisma.personsConnection()
          .$fragment(`fragment Connection on PersonConnection {
		  pageInfo {
		    hasNextPage
		    hasPreviousPage
		    startCursor
		    endCursor
		  }
		  aggregate { count }
		  edges {
		    cursor
		    node { id name }
		  }
	   }`);
      },
    }) as unknown) as PersonConnection;
  },
});

const Person = prismaObjectType({
  name: 'Person',
  definition(t) {
    t.prismaFields(['*']);
  },
});

const Location = prismaObjectType({
  name: 'CompanyLocation',
  definition(t) {
    t.prismaFields(['*']);
  },
});

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['*']);
  },
});

const UserConnection = prismaObjectType({
  name: 'UserConnection',
  definition(t) {
    t.prismaFields(['*']);

    t.field('aggregate', {
      ...t.prismaType.aggregate,
      resolve(root, args, ctx) {
        return root.aggregate;
      },
    });
  },
});

const CompanyConnection = prismaObjectType({
  name: 'CompanyConnection',
  definition(t) {
    t.prismaFields(['*']);

    t.field('aggregate', {
      ...t.prismaType.aggregate,
      resolve(root, args, ctx) {
        return root.aggregate;
      },
    });
  },
});

const AffiliationConnection = prismaObjectType({
  name: 'AffiliationConnection',
  definition(t) {
    t.prismaFields(['*']);

    t.field('aggregate', {
      ...t.prismaType.aggregate,
      resolve(root, args, ctx) {
        return root.aggregate;
      },
    });
  },
});

const CompanyBusinessModelConnection = prismaObjectType({
  name: 'CompanyBusinessModelConnection',
  definition(t) {
    t.prismaFields(['*']);

    t.field('aggregate', {
      ...t.prismaType.aggregate,
      resolve(root, args, ctx) {
        return root.aggregate;
      },
    });
  },
});

const CompanyTargetMarketConnection = prismaObjectType({
  name: 'CompanyTargetMarketConnection',
  definition(t) {
    t.prismaFields(['*']);

    t.field('aggregate', {
      ...t.prismaType.aggregate,
      resolve(root, args, ctx) {
        return root.aggregate;
      },
    });
  },
});

const CompanyCategoryConnection = prismaObjectType({
  name: 'CompanyCategoryConnection',
  definition(t) {
    t.prismaFields(['*']);

    t.field('aggregate', {
      ...t.prismaType.aggregate,
      resolve(root, args, ctx) {
        return root.aggregate;
      },
    });
  },
});

const PersonConnection = prismaObjectType({
  name: 'PersonConnection',
  definition(t) {
    t.prismaFields(['*']);

    t.field('aggregate', {
      ...t.prismaType.aggregate,
      resolve(root, args, ctx) {
        return root.aggregate;
      },
    });
  },
});

export const schema = makePrismaSchema({
  types: [
    Query,
    Mutation,
    User,
    Company,
    Location,
    Affiliation,
    Person,
    UserConnection,
    CompanyConnection,
    AffiliationConnection,
    PersonConnection,
    CompanyOperatingModel,
    CompanyTargetMarketConnection,
    CompanyBusinessModelConnection,
    CompanyCategoryConnection,
  ],
  prisma: {
    datamodelInfo,
    client: prisma,
  },
  outputs: {
    schema: path.join(__dirname, '../../../generated/schema.graphql'),
    typegen: path.join(__dirname, '../../../generated/nexus.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './types.ts'),
        alias: 'types',
      },
    ],
    contextType: 'types.Context',
  },
});

export default schema;
