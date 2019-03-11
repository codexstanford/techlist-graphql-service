import {
  Prisma,
  CompanyConnection as PrismaCompanyConnection,
  UserConnection as PrismaUserConnection,
  AffiliationConnection as PrismaAffiliationConnection,
  PersonConnection as PrismaPersonConnection,
  CompanyCategoryConnection as PrismaCompanyCategoryConnection,
  AggregateCompanyCategory,
  CompanyTargetMarketConnection as PrismaCompanyTargetMarketConnection,
  AggregateCompanyTargetMarket,
  CompanyBusinessModelConnection as PrismaCompanyBusinessModelConnection,
  AggregateCompanyBusinessModel,
  AggregatePerson,
  AggregateUser,
  AggregateCompany,
  AggregateAffiliation,
} from '../../../generated/prisma-client';

export type CompanyConnection = PrismaCompanyConnection & {
  aggregate: AggregateCompany;
};
export type UserConnection = PrismaUserConnection & {
  aggregate: AggregateUser;
};
export type AffiliationConnection = PrismaAffiliationConnection & {
  aggregate: AggregateAffiliation;
};

export type PersonConnection = PrismaPersonConnection & {
  aggregate: AggregatePerson;
};

export type CompanyTargetMarketConnection = PrismaCompanyTargetMarketConnection & {
  aggregate: AggregateCompanyTargetMarket;
};

export type CompanyCategoryConnection = PrismaCompanyCategoryConnection & {
  aggregate: AggregateCompanyCategory;
};
export type CompanyBusinessModelConnection = PrismaCompanyBusinessModelConnection & {
  aggregate: AggregateCompanyBusinessModel;
};

export interface Context {
  prisma: Prisma;
  request: any;
}
