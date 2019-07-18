import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Json: any;
  Long: any;
};

export type AggregateOrganization = {
  __typename?: 'AggregateOrganization';
  count: Scalars['Int'];
};

export type AggregateOrganizationBusinessModel = {
  __typename?: 'AggregateOrganizationBusinessModel';
  count: Scalars['Int'];
};

export type AggregateOrganizationCategory = {
  __typename?: 'AggregateOrganizationCategory';
  count: Scalars['Int'];
};

export type AggregateOrganizationContext = {
  __typename?: 'AggregateOrganizationContext';
  count: Scalars['Int'];
};

export type AggregateOrganizationContextMetaData = {
  __typename?: 'AggregateOrganizationContextMetaData';
  count: Scalars['Int'];
};

export type AggregateOrganizationLink = {
  __typename?: 'AggregateOrganizationLink';
  count: Scalars['Int'];
};

export type AggregateOrganizationLocation = {
  __typename?: 'AggregateOrganizationLocation';
  count: Scalars['Int'];
};

export type AggregateOrganizationLogo = {
  __typename?: 'AggregateOrganizationLogo';
  count: Scalars['Int'];
};

export type AggregateOrganizationMetaData = {
  __typename?: 'AggregateOrganizationMetaData';
  count: Scalars['Int'];
};

export type AggregateOrganizationName = {
  __typename?: 'AggregateOrganizationName';
  count: Scalars['Int'];
};

export type AggregateOrganizationTargetMarket = {
  __typename?: 'AggregateOrganizationTargetMarket';
  count: Scalars['Int'];
};

export type AggregatePartyAccount = {
  __typename?: 'AggregatePartyAccount';
  count: Scalars['Int'];
};

export type AggregatePartyEmail = {
  __typename?: 'AggregatePartyEmail';
  count: Scalars['Int'];
};

export type AggregatePartyPhone = {
  __typename?: 'AggregatePartyPhone';
  count: Scalars['Int'];
};

export type AggregatePartyRole = {
  __typename?: 'AggregatePartyRole';
  count: Scalars['Int'];
};

export type AggregatePartyRoleType = {
  __typename?: 'AggregatePartyRoleType';
  count: Scalars['Int'];
};

export type AggregatePerson = {
  __typename?: 'AggregatePerson';
  count: Scalars['Int'];
};

export type AggregatePersonAvatar = {
  __typename?: 'AggregatePersonAvatar';
  count: Scalars['Int'];
};

export type AggregatePersonMetaData = {
  __typename?: 'AggregatePersonMetaData';
  count: Scalars['Int'];
};

export type AggregatePersonName = {
  __typename?: 'AggregatePersonName';
  count: Scalars['Int'];
};

export type AggregatePersonOrganizationAffiliation = {
  __typename?: 'AggregatePersonOrganizationAffiliation';
  count: Scalars['Int'];
};

export type AggregatePersonOrganizationAffiliationMetaData = {
  __typename?: 'AggregatePersonOrganizationAffiliationMetaData';
  count: Scalars['Int'];
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Long'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrganization: Organization;
  createOrganizationBusinessModel: OrganizationBusinessModel;
  createOrganizationCategory: OrganizationCategory;
  createOrganizationContext: OrganizationContext;
  createOrganizationContextMetaData: OrganizationContextMetaData;
  createOrganizationLink: OrganizationLink;
  createOrganizationLocation: OrganizationLocation;
  createOrganizationLogo: OrganizationLogo;
  createOrganizationMetaData: OrganizationMetaData;
  createOrganizationName: OrganizationName;
  createOrganizationTargetMarket: OrganizationTargetMarket;
  createPartyAccount: PartyAccount;
  createPartyEmail: PartyEmail;
  createPartyPhone: PartyPhone;
  createPartyRole: PartyRole;
  createPartyRoleType: PartyRoleType;
  createPerson: Person;
  createPersonAvatar: PersonAvatar;
  createPersonMetaData: PersonMetaData;
  createPersonName: PersonName;
  createPersonOrganizationAffiliation: PersonOrganizationAffiliation;
  createPersonOrganizationAffiliationMetaData: PersonOrganizationAffiliationMetaData;
  deleteManyOrganizationBusinessModels: BatchPayload;
  deleteManyOrganizationCategories: BatchPayload;
  deleteManyOrganizationContextMetaDatas: BatchPayload;
  deleteManyOrganizationContexts: BatchPayload;
  deleteManyOrganizationLinks: BatchPayload;
  deleteManyOrganizationLocations: BatchPayload;
  deleteManyOrganizationLogoes: BatchPayload;
  deleteManyOrganizationMetaDatas: BatchPayload;
  deleteManyOrganizationNames: BatchPayload;
  deleteManyOrganizations: BatchPayload;
  deleteManyOrganizationTargetMarkets: BatchPayload;
  deleteManyPartyAccounts: BatchPayload;
  deleteManyPartyEmails: BatchPayload;
  deleteManyPartyPhones: BatchPayload;
  deleteManyPartyRoles: BatchPayload;
  deleteManyPartyRoleTypes: BatchPayload;
  deleteManyPersonAvatars: BatchPayload;
  deleteManyPersonMetaDatas: BatchPayload;
  deleteManyPersonNames: BatchPayload;
  deleteManyPersonOrganizationAffiliationMetaDatas: BatchPayload;
  deleteManyPersonOrganizationAffiliations: BatchPayload;
  deleteManyPersons: BatchPayload;
  deleteOrganization?: Maybe<Organization>;
  deleteOrganizationBusinessModel?: Maybe<OrganizationBusinessModel>;
  deleteOrganizationCategory?: Maybe<OrganizationCategory>;
  deleteOrganizationContext?: Maybe<OrganizationContext>;
  deleteOrganizationContextMetaData?: Maybe<OrganizationContextMetaData>;
  deleteOrganizationLink?: Maybe<OrganizationLink>;
  deleteOrganizationLocation?: Maybe<OrganizationLocation>;
  deleteOrganizationLogo?: Maybe<OrganizationLogo>;
  deleteOrganizationMetaData?: Maybe<OrganizationMetaData>;
  deleteOrganizationName?: Maybe<OrganizationName>;
  deleteOrganizationTargetMarket?: Maybe<OrganizationTargetMarket>;
  deletePartyAccount?: Maybe<PartyAccount>;
  deletePartyEmail?: Maybe<PartyEmail>;
  deletePartyPhone?: Maybe<PartyPhone>;
  deletePartyRole?: Maybe<PartyRole>;
  deletePartyRoleType?: Maybe<PartyRoleType>;
  deletePerson?: Maybe<Person>;
  deletePersonAvatar?: Maybe<PersonAvatar>;
  deletePersonMetaData?: Maybe<PersonMetaData>;
  deletePersonName?: Maybe<PersonName>;
  deletePersonOrganizationAffiliation?: Maybe<PersonOrganizationAffiliation>;
  deletePersonOrganizationAffiliationMetaData?: Maybe<
    PersonOrganizationAffiliationMetaData
  >;
  updateManyOrganizationBusinessModels: BatchPayload;
  updateManyOrganizationCategories: BatchPayload;
  updateManyOrganizationContextMetaDatas: BatchPayload;
  updateManyOrganizationContexts: BatchPayload;
  updateManyOrganizationLinks: BatchPayload;
  updateManyOrganizationLocations: BatchPayload;
  updateManyOrganizationLogoes: BatchPayload;
  updateManyOrganizationMetaDatas: BatchPayload;
  updateManyOrganizationNames: BatchPayload;
  updateManyOrganizations: BatchPayload;
  updateManyOrganizationTargetMarkets: BatchPayload;
  updateManyPartyAccounts: BatchPayload;
  updateManyPartyEmails: BatchPayload;
  updateManyPartyPhones: BatchPayload;
  updateManyPartyRoles: BatchPayload;
  updateManyPartyRoleTypes: BatchPayload;
  updateManyPersonAvatars: BatchPayload;
  updateManyPersonMetaDatas: BatchPayload;
  updateManyPersonNames: BatchPayload;
  updateManyPersonOrganizationAffiliationMetaDatas: BatchPayload;
  updateManyPersonOrganizationAffiliations: BatchPayload;
  updateManyPersons: BatchPayload;
  updateOrganization?: Maybe<Organization>;
  updateOrganizationBusinessModel?: Maybe<OrganizationBusinessModel>;
  updateOrganizationCategory?: Maybe<OrganizationCategory>;
  updateOrganizationContext?: Maybe<OrganizationContext>;
  updateOrganizationContextMetaData?: Maybe<OrganizationContextMetaData>;
  updateOrganizationLink?: Maybe<OrganizationLink>;
  updateOrganizationLocation?: Maybe<OrganizationLocation>;
  updateOrganizationLogo?: Maybe<OrganizationLogo>;
  updateOrganizationMetaData?: Maybe<OrganizationMetaData>;
  updateOrganizationName?: Maybe<OrganizationName>;
  updateOrganizationTargetMarket?: Maybe<OrganizationTargetMarket>;
  updatePartyAccount?: Maybe<PartyAccount>;
  updatePartyEmail?: Maybe<PartyEmail>;
  updatePartyPhone?: Maybe<PartyPhone>;
  updatePartyRole?: Maybe<PartyRole>;
  updatePartyRoleType?: Maybe<PartyRoleType>;
  updatePerson?: Maybe<Person>;
  updatePersonAvatar?: Maybe<PersonAvatar>;
  updatePersonMetaData?: Maybe<PersonMetaData>;
  updatePersonName?: Maybe<PersonName>;
  updatePersonOrganizationAffiliation?: Maybe<PersonOrganizationAffiliation>;
  updatePersonOrganizationAffiliationMetaData?: Maybe<
    PersonOrganizationAffiliationMetaData
  >;
  upsertOrganization: Organization;
  upsertOrganizationBusinessModel: OrganizationBusinessModel;
  upsertOrganizationCategory: OrganizationCategory;
  upsertOrganizationContext: OrganizationContext;
  upsertOrganizationContextMetaData: OrganizationContextMetaData;
  upsertOrganizationLink: OrganizationLink;
  upsertOrganizationLocation: OrganizationLocation;
  upsertOrganizationLogo: OrganizationLogo;
  upsertOrganizationMetaData: OrganizationMetaData;
  upsertOrganizationName: OrganizationName;
  upsertOrganizationTargetMarket: OrganizationTargetMarket;
  upsertPartyAccount: PartyAccount;
  upsertPartyEmail: PartyEmail;
  upsertPartyPhone: PartyPhone;
  upsertPartyRole: PartyRole;
  upsertPartyRoleType: PartyRoleType;
  upsertPerson: Person;
  upsertPersonAvatar: PersonAvatar;
  upsertPersonMetaData: PersonMetaData;
  upsertPersonName: PersonName;
  upsertPersonOrganizationAffiliation: PersonOrganizationAffiliation;
  upsertPersonOrganizationAffiliationMetaData: PersonOrganizationAffiliationMetaData;
};

export type MutationCreateOrganizationArgs = {
  data: OrganizationCreateInput;
};

export type MutationCreateOrganizationBusinessModelArgs = {
  data: OrganizationBusinessModelCreateInput;
};

export type MutationCreateOrganizationCategoryArgs = {
  data: OrganizationCategoryCreateInput;
};

export type MutationCreateOrganizationContextArgs = {
  data: OrganizationContextCreateInput;
};

export type MutationCreateOrganizationContextMetaDataArgs = {
  data: OrganizationContextMetaDataCreateInput;
};

export type MutationCreateOrganizationLinkArgs = {
  data: OrganizationLinkCreateInput;
};

export type MutationCreateOrganizationLocationArgs = {
  data: OrganizationLocationCreateInput;
};

export type MutationCreateOrganizationLogoArgs = {
  data: OrganizationLogoCreateInput;
};

export type MutationCreateOrganizationMetaDataArgs = {
  data: OrganizationMetaDataCreateInput;
};

export type MutationCreateOrganizationNameArgs = {
  data: OrganizationNameCreateInput;
};

export type MutationCreateOrganizationTargetMarketArgs = {
  data: OrganizationTargetMarketCreateInput;
};

export type MutationCreatePartyAccountArgs = {
  data: PartyAccountCreateInput;
};

export type MutationCreatePartyEmailArgs = {
  data: PartyEmailCreateInput;
};

export type MutationCreatePartyPhoneArgs = {
  data: PartyPhoneCreateInput;
};

export type MutationCreatePartyRoleArgs = {
  data: PartyRoleCreateInput;
};

export type MutationCreatePartyRoleTypeArgs = {
  data: PartyRoleTypeCreateInput;
};

export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};

export type MutationCreatePersonAvatarArgs = {
  data: PersonAvatarCreateInput;
};

export type MutationCreatePersonMetaDataArgs = {
  data: PersonMetaDataCreateInput;
};

export type MutationCreatePersonNameArgs = {
  data: PersonNameCreateInput;
};

export type MutationCreatePersonOrganizationAffiliationArgs = {
  data: PersonOrganizationAffiliationCreateInput;
};

export type MutationCreatePersonOrganizationAffiliationMetaDataArgs = {
  data: PersonOrganizationAffiliationMetaDataCreateInput;
};

export type MutationDeleteManyOrganizationBusinessModelsArgs = {
  where?: Maybe<OrganizationBusinessModelWhereInput>;
};

export type MutationDeleteManyOrganizationCategoriesArgs = {
  where?: Maybe<OrganizationCategoryWhereInput>;
};

export type MutationDeleteManyOrganizationContextMetaDatasArgs = {
  where?: Maybe<OrganizationContextMetaDataWhereInput>;
};

export type MutationDeleteManyOrganizationContextsArgs = {
  where?: Maybe<OrganizationContextWhereInput>;
};

export type MutationDeleteManyOrganizationLinksArgs = {
  where?: Maybe<OrganizationLinkWhereInput>;
};

export type MutationDeleteManyOrganizationLocationsArgs = {
  where?: Maybe<OrganizationLocationWhereInput>;
};

export type MutationDeleteManyOrganizationLogoesArgs = {
  where?: Maybe<OrganizationLogoWhereInput>;
};

export type MutationDeleteManyOrganizationMetaDatasArgs = {
  where?: Maybe<OrganizationMetaDataWhereInput>;
};

export type MutationDeleteManyOrganizationNamesArgs = {
  where?: Maybe<OrganizationNameWhereInput>;
};

export type MutationDeleteManyOrganizationsArgs = {
  where?: Maybe<OrganizationWhereInput>;
};

export type MutationDeleteManyOrganizationTargetMarketsArgs = {
  where?: Maybe<OrganizationTargetMarketWhereInput>;
};

export type MutationDeleteManyPartyAccountsArgs = {
  where?: Maybe<PartyAccountWhereInput>;
};

export type MutationDeleteManyPartyEmailsArgs = {
  where?: Maybe<PartyEmailWhereInput>;
};

export type MutationDeleteManyPartyPhonesArgs = {
  where?: Maybe<PartyPhoneWhereInput>;
};

export type MutationDeleteManyPartyRolesArgs = {
  where?: Maybe<PartyRoleWhereInput>;
};

export type MutationDeleteManyPartyRoleTypesArgs = {
  where?: Maybe<PartyRoleTypeWhereInput>;
};

export type MutationDeleteManyPersonAvatarsArgs = {
  where?: Maybe<PersonAvatarWhereInput>;
};

export type MutationDeleteManyPersonMetaDatasArgs = {
  where?: Maybe<PersonMetaDataWhereInput>;
};

export type MutationDeleteManyPersonNamesArgs = {
  where?: Maybe<PersonNameWhereInput>;
};

export type MutationDeleteManyPersonOrganizationAffiliationMetaDatasArgs = {
  where?: Maybe<PersonOrganizationAffiliationMetaDataWhereInput>;
};

export type MutationDeleteManyPersonOrganizationAffiliationsArgs = {
  where?: Maybe<PersonOrganizationAffiliationWhereInput>;
};

export type MutationDeleteManyPersonsArgs = {
  where?: Maybe<PersonWhereInput>;
};

export type MutationDeleteOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};

export type MutationDeleteOrganizationBusinessModelArgs = {
  where: OrganizationBusinessModelWhereUniqueInput;
};

export type MutationDeleteOrganizationCategoryArgs = {
  where: OrganizationCategoryWhereUniqueInput;
};

export type MutationDeleteOrganizationContextArgs = {
  where: OrganizationContextWhereUniqueInput;
};

export type MutationDeleteOrganizationContextMetaDataArgs = {
  where: OrganizationContextMetaDataWhereUniqueInput;
};

export type MutationDeleteOrganizationLinkArgs = {
  where: OrganizationLinkWhereUniqueInput;
};

export type MutationDeleteOrganizationLocationArgs = {
  where: OrganizationLocationWhereUniqueInput;
};

export type MutationDeleteOrganizationLogoArgs = {
  where: OrganizationLogoWhereUniqueInput;
};

export type MutationDeleteOrganizationMetaDataArgs = {
  where: OrganizationMetaDataWhereUniqueInput;
};

export type MutationDeleteOrganizationNameArgs = {
  where: OrganizationNameWhereUniqueInput;
};

export type MutationDeleteOrganizationTargetMarketArgs = {
  where: OrganizationTargetMarketWhereUniqueInput;
};

export type MutationDeletePartyAccountArgs = {
  where: PartyAccountWhereUniqueInput;
};

export type MutationDeletePartyEmailArgs = {
  where: PartyEmailWhereUniqueInput;
};

export type MutationDeletePartyPhoneArgs = {
  where: PartyPhoneWhereUniqueInput;
};

export type MutationDeletePartyRoleArgs = {
  where: PartyRoleWhereUniqueInput;
};

export type MutationDeletePartyRoleTypeArgs = {
  where: PartyRoleTypeWhereUniqueInput;
};

export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput;
};

export type MutationDeletePersonAvatarArgs = {
  where: PersonAvatarWhereUniqueInput;
};

export type MutationDeletePersonMetaDataArgs = {
  where: PersonMetaDataWhereUniqueInput;
};

export type MutationDeletePersonNameArgs = {
  where: PersonNameWhereUniqueInput;
};

export type MutationDeletePersonOrganizationAffiliationArgs = {
  where: PersonOrganizationAffiliationWhereUniqueInput;
};

export type MutationDeletePersonOrganizationAffiliationMetaDataArgs = {
  where: PersonOrganizationAffiliationMetaDataWhereUniqueInput;
};

export type MutationUpdateManyOrganizationBusinessModelsArgs = {
  data: OrganizationBusinessModelUpdateManyMutationInput;
  where?: Maybe<OrganizationBusinessModelWhereInput>;
};

export type MutationUpdateManyOrganizationCategoriesArgs = {
  data: OrganizationCategoryUpdateManyMutationInput;
  where?: Maybe<OrganizationCategoryWhereInput>;
};

export type MutationUpdateManyOrganizationContextMetaDatasArgs = {
  data: OrganizationContextMetaDataUpdateManyMutationInput;
  where?: Maybe<OrganizationContextMetaDataWhereInput>;
};

export type MutationUpdateManyOrganizationContextsArgs = {
  data: OrganizationContextUpdateManyMutationInput;
  where?: Maybe<OrganizationContextWhereInput>;
};

export type MutationUpdateManyOrganizationLinksArgs = {
  data: OrganizationLinkUpdateManyMutationInput;
  where?: Maybe<OrganizationLinkWhereInput>;
};

export type MutationUpdateManyOrganizationLocationsArgs = {
  data: OrganizationLocationUpdateManyMutationInput;
  where?: Maybe<OrganizationLocationWhereInput>;
};

export type MutationUpdateManyOrganizationLogoesArgs = {
  data: OrganizationLogoUpdateManyMutationInput;
  where?: Maybe<OrganizationLogoWhereInput>;
};

export type MutationUpdateManyOrganizationMetaDatasArgs = {
  data: OrganizationMetaDataUpdateManyMutationInput;
  where?: Maybe<OrganizationMetaDataWhereInput>;
};

export type MutationUpdateManyOrganizationNamesArgs = {
  data: OrganizationNameUpdateManyMutationInput;
  where?: Maybe<OrganizationNameWhereInput>;
};

export type MutationUpdateManyOrganizationsArgs = {
  data: OrganizationUpdateManyMutationInput;
  where?: Maybe<OrganizationWhereInput>;
};

export type MutationUpdateManyOrganizationTargetMarketsArgs = {
  data: OrganizationTargetMarketUpdateManyMutationInput;
  where?: Maybe<OrganizationTargetMarketWhereInput>;
};

export type MutationUpdateManyPartyAccountsArgs = {
  data: PartyAccountUpdateManyMutationInput;
  where?: Maybe<PartyAccountWhereInput>;
};

export type MutationUpdateManyPartyEmailsArgs = {
  data: PartyEmailUpdateManyMutationInput;
  where?: Maybe<PartyEmailWhereInput>;
};

export type MutationUpdateManyPartyPhonesArgs = {
  data: PartyPhoneUpdateManyMutationInput;
  where?: Maybe<PartyPhoneWhereInput>;
};

export type MutationUpdateManyPartyRolesArgs = {
  data: PartyRoleUpdateManyMutationInput;
  where?: Maybe<PartyRoleWhereInput>;
};

export type MutationUpdateManyPartyRoleTypesArgs = {
  data: PartyRoleTypeUpdateManyMutationInput;
  where?: Maybe<PartyRoleTypeWhereInput>;
};

export type MutationUpdateManyPersonAvatarsArgs = {
  data: PersonAvatarUpdateManyMutationInput;
  where?: Maybe<PersonAvatarWhereInput>;
};

export type MutationUpdateManyPersonMetaDatasArgs = {
  data: PersonMetaDataUpdateManyMutationInput;
  where?: Maybe<PersonMetaDataWhereInput>;
};

export type MutationUpdateManyPersonNamesArgs = {
  data: PersonNameUpdateManyMutationInput;
  where?: Maybe<PersonNameWhereInput>;
};

export type MutationUpdateManyPersonOrganizationAffiliationMetaDatasArgs = {
  data: PersonOrganizationAffiliationMetaDataUpdateManyMutationInput;
  where?: Maybe<PersonOrganizationAffiliationMetaDataWhereInput>;
};

export type MutationUpdateManyPersonOrganizationAffiliationsArgs = {
  data: PersonOrganizationAffiliationUpdateManyMutationInput;
  where?: Maybe<PersonOrganizationAffiliationWhereInput>;
};

export type MutationUpdateManyPersonsArgs = {
  data: PersonUpdateManyMutationInput;
  where?: Maybe<PersonWhereInput>;
};

export type MutationUpdateOrganizationArgs = {
  data: OrganizationUpdateInput;
  where: OrganizationWhereUniqueInput;
};

export type MutationUpdateOrganizationBusinessModelArgs = {
  data: OrganizationBusinessModelUpdateInput;
  where: OrganizationBusinessModelWhereUniqueInput;
};

export type MutationUpdateOrganizationCategoryArgs = {
  data: OrganizationCategoryUpdateInput;
  where: OrganizationCategoryWhereUniqueInput;
};

export type MutationUpdateOrganizationContextArgs = {
  data: OrganizationContextUpdateInput;
  where: OrganizationContextWhereUniqueInput;
};

export type MutationUpdateOrganizationContextMetaDataArgs = {
  data: OrganizationContextMetaDataUpdateInput;
  where: OrganizationContextMetaDataWhereUniqueInput;
};

export type MutationUpdateOrganizationLinkArgs = {
  data: OrganizationLinkUpdateInput;
  where: OrganizationLinkWhereUniqueInput;
};

export type MutationUpdateOrganizationLocationArgs = {
  data: OrganizationLocationUpdateInput;
  where: OrganizationLocationWhereUniqueInput;
};

export type MutationUpdateOrganizationLogoArgs = {
  data: OrganizationLogoUpdateInput;
  where: OrganizationLogoWhereUniqueInput;
};

export type MutationUpdateOrganizationMetaDataArgs = {
  data: OrganizationMetaDataUpdateInput;
  where: OrganizationMetaDataWhereUniqueInput;
};

export type MutationUpdateOrganizationNameArgs = {
  data: OrganizationNameUpdateInput;
  where: OrganizationNameWhereUniqueInput;
};

export type MutationUpdateOrganizationTargetMarketArgs = {
  data: OrganizationTargetMarketUpdateInput;
  where: OrganizationTargetMarketWhereUniqueInput;
};

export type MutationUpdatePartyAccountArgs = {
  data: PartyAccountUpdateInput;
  where: PartyAccountWhereUniqueInput;
};

export type MutationUpdatePartyEmailArgs = {
  data: PartyEmailUpdateInput;
  where: PartyEmailWhereUniqueInput;
};

export type MutationUpdatePartyPhoneArgs = {
  data: PartyPhoneUpdateInput;
  where: PartyPhoneWhereUniqueInput;
};

export type MutationUpdatePartyRoleArgs = {
  data: PartyRoleUpdateInput;
  where: PartyRoleWhereUniqueInput;
};

export type MutationUpdatePartyRoleTypeArgs = {
  data: PartyRoleTypeUpdateInput;
  where: PartyRoleTypeWhereUniqueInput;
};

export type MutationUpdatePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};

export type MutationUpdatePersonAvatarArgs = {
  data: PersonAvatarUpdateInput;
  where: PersonAvatarWhereUniqueInput;
};

export type MutationUpdatePersonMetaDataArgs = {
  data: PersonMetaDataUpdateInput;
  where: PersonMetaDataWhereUniqueInput;
};

export type MutationUpdatePersonNameArgs = {
  data: PersonNameUpdateInput;
  where: PersonNameWhereUniqueInput;
};

export type MutationUpdatePersonOrganizationAffiliationArgs = {
  data: PersonOrganizationAffiliationUpdateInput;
  where: PersonOrganizationAffiliationWhereUniqueInput;
};

export type MutationUpdatePersonOrganizationAffiliationMetaDataArgs = {
  data: PersonOrganizationAffiliationMetaDataUpdateInput;
  where: PersonOrganizationAffiliationMetaDataWhereUniqueInput;
};

export type MutationUpsertOrganizationArgs = {
  create: OrganizationCreateInput;
  update: OrganizationUpdateInput;
  where: OrganizationWhereUniqueInput;
};

export type MutationUpsertOrganizationBusinessModelArgs = {
  create: OrganizationBusinessModelCreateInput;
  update: OrganizationBusinessModelUpdateInput;
  where: OrganizationBusinessModelWhereUniqueInput;
};

export type MutationUpsertOrganizationCategoryArgs = {
  create: OrganizationCategoryCreateInput;
  update: OrganizationCategoryUpdateInput;
  where: OrganizationCategoryWhereUniqueInput;
};

export type MutationUpsertOrganizationContextArgs = {
  create: OrganizationContextCreateInput;
  update: OrganizationContextUpdateInput;
  where: OrganizationContextWhereUniqueInput;
};

export type MutationUpsertOrganizationContextMetaDataArgs = {
  create: OrganizationContextMetaDataCreateInput;
  update: OrganizationContextMetaDataUpdateInput;
  where: OrganizationContextMetaDataWhereUniqueInput;
};

export type MutationUpsertOrganizationLinkArgs = {
  create: OrganizationLinkCreateInput;
  update: OrganizationLinkUpdateInput;
  where: OrganizationLinkWhereUniqueInput;
};

export type MutationUpsertOrganizationLocationArgs = {
  create: OrganizationLocationCreateInput;
  update: OrganizationLocationUpdateInput;
  where: OrganizationLocationWhereUniqueInput;
};

export type MutationUpsertOrganizationLogoArgs = {
  create: OrganizationLogoCreateInput;
  update: OrganizationLogoUpdateInput;
  where: OrganizationLogoWhereUniqueInput;
};

export type MutationUpsertOrganizationMetaDataArgs = {
  create: OrganizationMetaDataCreateInput;
  update: OrganizationMetaDataUpdateInput;
  where: OrganizationMetaDataWhereUniqueInput;
};

export type MutationUpsertOrganizationNameArgs = {
  create: OrganizationNameCreateInput;
  update: OrganizationNameUpdateInput;
  where: OrganizationNameWhereUniqueInput;
};

export type MutationUpsertOrganizationTargetMarketArgs = {
  create: OrganizationTargetMarketCreateInput;
  update: OrganizationTargetMarketUpdateInput;
  where: OrganizationTargetMarketWhereUniqueInput;
};

export type MutationUpsertPartyAccountArgs = {
  create: PartyAccountCreateInput;
  update: PartyAccountUpdateInput;
  where: PartyAccountWhereUniqueInput;
};

export type MutationUpsertPartyEmailArgs = {
  create: PartyEmailCreateInput;
  update: PartyEmailUpdateInput;
  where: PartyEmailWhereUniqueInput;
};

export type MutationUpsertPartyPhoneArgs = {
  create: PartyPhoneCreateInput;
  update: PartyPhoneUpdateInput;
  where: PartyPhoneWhereUniqueInput;
};

export type MutationUpsertPartyRoleArgs = {
  create: PartyRoleCreateInput;
  update: PartyRoleUpdateInput;
  where: PartyRoleWhereUniqueInput;
};

export type MutationUpsertPartyRoleTypeArgs = {
  create: PartyRoleTypeCreateInput;
  update: PartyRoleTypeUpdateInput;
  where: PartyRoleTypeWhereUniqueInput;
};

export type MutationUpsertPersonArgs = {
  create: PersonCreateInput;
  update: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};

export type MutationUpsertPersonAvatarArgs = {
  create: PersonAvatarCreateInput;
  update: PersonAvatarUpdateInput;
  where: PersonAvatarWhereUniqueInput;
};

export type MutationUpsertPersonMetaDataArgs = {
  create: PersonMetaDataCreateInput;
  update: PersonMetaDataUpdateInput;
  where: PersonMetaDataWhereUniqueInput;
};

export type MutationUpsertPersonNameArgs = {
  create: PersonNameCreateInput;
  update: PersonNameUpdateInput;
  where: PersonNameWhereUniqueInput;
};

export type MutationUpsertPersonOrganizationAffiliationArgs = {
  create: PersonOrganizationAffiliationCreateInput;
  update: PersonOrganizationAffiliationUpdateInput;
  where: PersonOrganizationAffiliationWhereUniqueInput;
};

export type MutationUpsertPersonOrganizationAffiliationMetaDataArgs = {
  create: PersonOrganizationAffiliationMetaDataCreateInput;
  update: PersonOrganizationAffiliationMetaDataUpdateInput;
  where: PersonOrganizationAffiliationMetaDataWhereUniqueInput;
};

export type Organization = {
  __typename?: 'Organization';
  admins?: Maybe<Array<PartyAccount>>;
  affiliation?: Maybe<Array<PersonOrganizationAffiliation>>;
  categories?: Maybe<Array<OrganizationCategory>>;
  context?: Maybe<Array<OrganizationContext>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<PartyEmail>>;
  id: Scalars['ID'];
  links?: Maybe<Array<OrganizationLink>>;
  location?: Maybe<Array<OrganizationLocation>>;
  logo?: Maybe<Array<OrganizationLogo>>;
  metadata: OrganizationMetaData;
  name?: Maybe<Array<OrganizationName>>;
  parties?: Maybe<Array<PartyRole>>;
  phone?: Maybe<Array<PartyPhone>>;
  targetMarkets?: Maybe<Array<OrganizationTargetMarket>>;
  updatedAt: Scalars['DateTime'];
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationAdminsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyAccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyAccountWhereInput>;
};

export type OrganizationAffiliationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonOrganizationAffiliationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonOrganizationAffiliationWhereInput>;
};

export type OrganizationCategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationCategoryWhereInput>;
};

export type OrganizationContextArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationContextOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationContextWhereInput>;
};

export type OrganizationEmailArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyEmailOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyEmailWhereInput>;
};

export type OrganizationLinksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationLinkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationLinkWhereInput>;
};

export type OrganizationLocationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationLocationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationLocationWhereInput>;
};

export type OrganizationLogoArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationLogoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationLogoWhereInput>;
};

export type OrganizationNameArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationNameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationNameWhereInput>;
};

export type OrganizationPartiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyRoleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyRoleWhereInput>;
};

export type OrganizationPhoneArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyPhoneOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyPhoneWhereInput>;
};

export type OrganizationTargetMarketsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationTargetMarketOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationTargetMarketWhereInput>;
};

export type OrganizationBusinessModel = {
  __typename?: 'OrganizationBusinessModel';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  organizations?: Maybe<Array<Organization>>;
  payload: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OrganizationBusinessModelOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationWhereInput>;
};

export type OrganizationBusinessModelConnection = {
  __typename?: 'OrganizationBusinessModelConnection';
  aggregate: AggregateOrganizationBusinessModel;
  edges: Array<OrganizationBusinessModelEdge>;
  pageInfo: PageInfo;
};

export type OrganizationBusinessModelCreateInput = {
  id?: Maybe<Scalars['ID']>;
  organizations?: Maybe<OrganizationCreateManyInput>;
  payload: Scalars['String'];
};

export type OrganizationBusinessModelEdge = {
  __typename?: 'OrganizationBusinessModelEdge';
  cursor: Scalars['String'];
  node: OrganizationBusinessModel;
};

export enum OrganizationBusinessModelOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PayloadAsc = 'payload_ASC',
  PayloadDesc = 'payload_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OrganizationBusinessModelUpdateInput = {
  organizations?: Maybe<OrganizationUpdateManyInput>;
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationBusinessModelUpdateManyMutationInput = {
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationBusinessModelWhereInput = {
  AND?: Maybe<Array<OrganizationBusinessModelWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<OrganizationBusinessModelWhereInput>>;
  OR?: Maybe<Array<OrganizationBusinessModelWhereInput>>;
  organizations_every?: Maybe<OrganizationWhereInput>;
  organizations_none?: Maybe<OrganizationWhereInput>;
  organizations_some?: Maybe<OrganizationWhereInput>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationBusinessModelWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationCategory = {
  __typename?: 'OrganizationCategory';
  children?: Maybe<Array<OrganizationCategory>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  organizations?: Maybe<Array<Organization>>;
  parent?: Maybe<OrganizationCategory>;
  payload: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OrganizationCategoryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationCategoryWhereInput>;
};

export type OrganizationCategoryOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationWhereInput>;
};

export type OrganizationCategoryConnection = {
  __typename?: 'OrganizationCategoryConnection';
  aggregate: AggregateOrganizationCategory;
  edges: Array<OrganizationCategoryEdge>;
  pageInfo: PageInfo;
};

export type OrganizationCategoryCreateInput = {
  children?: Maybe<OrganizationCategoryCreateManyWithoutChildrenInput>;
  id?: Maybe<Scalars['ID']>;
  organizations?: Maybe<OrganizationCreateManyWithoutCategoriesInput>;
  parent?: Maybe<OrganizationCategoryCreateOneWithoutParentInput>;
  payload: Scalars['String'];
};

export type OrganizationCategoryCreateManyWithoutChildrenInput = {
  connect?: Maybe<Array<OrganizationCategoryWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCategoryCreateWithoutChildrenInput>>;
};

export type OrganizationCategoryCreateManyWithoutOrganizationsInput = {
  connect?: Maybe<Array<OrganizationCategoryWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCategoryCreateWithoutOrganizationsInput>>;
};

export type OrganizationCategoryCreateOneWithoutParentInput = {
  connect?: Maybe<OrganizationCategoryWhereUniqueInput>;
  create?: Maybe<OrganizationCategoryCreateWithoutParentInput>;
};

export type OrganizationCategoryCreateWithoutChildrenInput = {
  id?: Maybe<Scalars['ID']>;
  organizations?: Maybe<OrganizationCreateManyWithoutCategoriesInput>;
  parent?: Maybe<OrganizationCategoryCreateOneWithoutParentInput>;
  payload: Scalars['String'];
};

export type OrganizationCategoryCreateWithoutOrganizationsInput = {
  children?: Maybe<OrganizationCategoryCreateManyWithoutChildrenInput>;
  id?: Maybe<Scalars['ID']>;
  parent?: Maybe<OrganizationCategoryCreateOneWithoutParentInput>;
  payload: Scalars['String'];
};

export type OrganizationCategoryCreateWithoutParentInput = {
  children?: Maybe<OrganizationCategoryCreateManyWithoutChildrenInput>;
  id?: Maybe<Scalars['ID']>;
  organizations?: Maybe<OrganizationCreateManyWithoutCategoriesInput>;
  payload: Scalars['String'];
};

export type OrganizationCategoryEdge = {
  __typename?: 'OrganizationCategoryEdge';
  cursor: Scalars['String'];
  node: OrganizationCategory;
};

export enum OrganizationCategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PayloadAsc = 'payload_ASC',
  PayloadDesc = 'payload_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OrganizationCategoryScalarWhereInput = {
  AND?: Maybe<Array<OrganizationCategoryScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<OrganizationCategoryScalarWhereInput>>;
  OR?: Maybe<Array<OrganizationCategoryScalarWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationCategoryUpdateInput = {
  children?: Maybe<OrganizationCategoryUpdateManyWithoutChildrenInput>;
  organizations?: Maybe<OrganizationUpdateManyWithoutCategoriesInput>;
  parent?: Maybe<OrganizationCategoryUpdateOneWithoutParentInput>;
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationCategoryUpdateManyDataInput = {
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationCategoryUpdateManyMutationInput = {
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationCategoryUpdateManyWithoutChildrenInput = {
  connect?: Maybe<Array<OrganizationCategoryWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCategoryCreateWithoutChildrenInput>>;
  delete?: Maybe<Array<OrganizationCategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationCategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationCategoryWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationCategoryWhereUniqueInput>>;
  update?: Maybe<
    Array<OrganizationCategoryUpdateWithWhereUniqueWithoutChildrenInput>
  >;
  updateMany?: Maybe<Array<OrganizationCategoryUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<
    Array<OrganizationCategoryUpsertWithWhereUniqueWithoutChildrenInput>
  >;
};

export type OrganizationCategoryUpdateManyWithoutOrganizationsInput = {
  connect?: Maybe<Array<OrganizationCategoryWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCategoryCreateWithoutOrganizationsInput>>;
  delete?: Maybe<Array<OrganizationCategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationCategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationCategoryWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationCategoryWhereUniqueInput>>;
  update?: Maybe<
    Array<OrganizationCategoryUpdateWithWhereUniqueWithoutOrganizationsInput>
  >;
  updateMany?: Maybe<Array<OrganizationCategoryUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<
    Array<OrganizationCategoryUpsertWithWhereUniqueWithoutOrganizationsInput>
  >;
};

export type OrganizationCategoryUpdateManyWithWhereNestedInput = {
  data: OrganizationCategoryUpdateManyDataInput;
  where: OrganizationCategoryScalarWhereInput;
};

export type OrganizationCategoryUpdateOneWithoutParentInput = {
  connect?: Maybe<OrganizationCategoryWhereUniqueInput>;
  create?: Maybe<OrganizationCategoryCreateWithoutParentInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrganizationCategoryUpdateWithoutParentDataInput>;
  upsert?: Maybe<OrganizationCategoryUpsertWithoutParentInput>;
};

export type OrganizationCategoryUpdateWithoutChildrenDataInput = {
  organizations?: Maybe<OrganizationUpdateManyWithoutCategoriesInput>;
  parent?: Maybe<OrganizationCategoryUpdateOneWithoutParentInput>;
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationCategoryUpdateWithoutOrganizationsDataInput = {
  children?: Maybe<OrganizationCategoryUpdateManyWithoutChildrenInput>;
  parent?: Maybe<OrganizationCategoryUpdateOneWithoutParentInput>;
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationCategoryUpdateWithoutParentDataInput = {
  children?: Maybe<OrganizationCategoryUpdateManyWithoutChildrenInput>;
  organizations?: Maybe<OrganizationUpdateManyWithoutCategoriesInput>;
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationCategoryUpdateWithWhereUniqueWithoutChildrenInput = {
  data: OrganizationCategoryUpdateWithoutChildrenDataInput;
  where: OrganizationCategoryWhereUniqueInput;
};

export type OrganizationCategoryUpdateWithWhereUniqueWithoutOrganizationsInput = {
  data: OrganizationCategoryUpdateWithoutOrganizationsDataInput;
  where: OrganizationCategoryWhereUniqueInput;
};

export type OrganizationCategoryUpsertWithoutParentInput = {
  create: OrganizationCategoryCreateWithoutParentInput;
  update: OrganizationCategoryUpdateWithoutParentDataInput;
};

export type OrganizationCategoryUpsertWithWhereUniqueWithoutChildrenInput = {
  create: OrganizationCategoryCreateWithoutChildrenInput;
  update: OrganizationCategoryUpdateWithoutChildrenDataInput;
  where: OrganizationCategoryWhereUniqueInput;
};

export type OrganizationCategoryUpsertWithWhereUniqueWithoutOrganizationsInput = {
  create: OrganizationCategoryCreateWithoutOrganizationsInput;
  update: OrganizationCategoryUpdateWithoutOrganizationsDataInput;
  where: OrganizationCategoryWhereUniqueInput;
};

export type OrganizationCategoryWhereInput = {
  AND?: Maybe<Array<OrganizationCategoryWhereInput>>;
  children_every?: Maybe<OrganizationCategoryWhereInput>;
  children_none?: Maybe<OrganizationCategoryWhereInput>;
  children_some?: Maybe<OrganizationCategoryWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<OrganizationCategoryWhereInput>>;
  OR?: Maybe<Array<OrganizationCategoryWhereInput>>;
  organizations_every?: Maybe<OrganizationWhereInput>;
  organizations_none?: Maybe<OrganizationWhereInput>;
  organizations_some?: Maybe<OrganizationWhereInput>;
  parent?: Maybe<OrganizationCategoryWhereInput>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  aggregate: AggregateOrganization;
  edges: Array<OrganizationEdge>;
  pageInfo: PageInfo;
};

export type OrganizationContext = {
  __typename?: 'OrganizationContext';
  createdAt: Scalars['DateTime'];
  fromDate: Scalars['DateTime'];
  id: Scalars['ID'];
  metadata?: Maybe<OrganizationContextMetaData>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type: OrganizationContextType;
  updatedAt: Scalars['DateTime'];
};

export type OrganizationContextConnection = {
  __typename?: 'OrganizationContextConnection';
  aggregate: AggregateOrganizationContext;
  edges: Array<OrganizationContextEdge>;
  pageInfo: PageInfo;
};

export type OrganizationContextCreateInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  metadata?: Maybe<
    OrganizationContextMetaDataCreateOneWithoutOrganizationContextInput
  >;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type: OrganizationContextType;
};

export type OrganizationContextCreateManyInput = {
  connect?: Maybe<Array<OrganizationContextWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationContextCreateInput>>;
};

export type OrganizationContextCreateOneWithoutMetadataInput = {
  connect?: Maybe<OrganizationContextWhereUniqueInput>;
  create?: Maybe<OrganizationContextCreateWithoutMetadataInput>;
};

export type OrganizationContextCreateWithoutMetadataInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type: OrganizationContextType;
};

export type OrganizationContextEdge = {
  __typename?: 'OrganizationContextEdge';
  cursor: Scalars['String'];
  node: OrganizationContext;
};

export type OrganizationContextMetaData = {
  __typename?: 'OrganizationContextMetaData';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isApproved: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  isPendingReview: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  isRejected: Scalars['Boolean'];
  isUnverified: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  organizationContext: OrganizationContext;
  updatedAt: Scalars['DateTime'];
};

export type OrganizationContextMetaDataConnection = {
  __typename?: 'OrganizationContextMetaDataConnection';
  aggregate: AggregateOrganizationContextMetaData;
  edges: Array<OrganizationContextMetaDataEdge>;
  pageInfo: PageInfo;
};

export type OrganizationContextMetaDataCreateInput = {
  id?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  organizationContext: OrganizationContextCreateOneWithoutMetadataInput;
};

export type OrganizationContextMetaDataCreateOneWithoutOrganizationContextInput = {
  connect?: Maybe<OrganizationContextMetaDataWhereUniqueInput>;
  create?: Maybe<
    OrganizationContextMetaDataCreateWithoutOrganizationContextInput
  >;
};

export type OrganizationContextMetaDataCreateWithoutOrganizationContextInput = {
  id?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type OrganizationContextMetaDataEdge = {
  __typename?: 'OrganizationContextMetaDataEdge';
  cursor: Scalars['String'];
  node: OrganizationContextMetaData;
};

export enum OrganizationContextMetaDataOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsApprovedAsc = 'isApproved_ASC',
  IsApprovedDesc = 'isApproved_DESC',
  IsDraftAsc = 'isDraft_ASC',
  IsDraftDesc = 'isDraft_DESC',
  IsPendingReviewAsc = 'isPendingReview_ASC',
  IsPendingReviewDesc = 'isPendingReview_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  IsRejectedAsc = 'isRejected_ASC',
  IsRejectedDesc = 'isRejected_DESC',
  IsUnverifiedAsc = 'isUnverified_ASC',
  IsUnverifiedDesc = 'isUnverified_DESC',
  IsVerifiedAsc = 'isVerified_ASC',
  IsVerifiedDesc = 'isVerified_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OrganizationContextMetaDataUpdateInput = {
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  organizationContext?: Maybe<
    OrganizationContextUpdateOneRequiredWithoutMetadataInput
  >;
};

export type OrganizationContextMetaDataUpdateManyMutationInput = {
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type OrganizationContextMetaDataUpdateOneWithoutOrganizationContextInput = {
  connect?: Maybe<OrganizationContextMetaDataWhereUniqueInput>;
  create?: Maybe<
    OrganizationContextMetaDataCreateWithoutOrganizationContextInput
  >;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<
    OrganizationContextMetaDataUpdateWithoutOrganizationContextDataInput
  >;
  upsert?: Maybe<
    OrganizationContextMetaDataUpsertWithoutOrganizationContextInput
  >;
};

export type OrganizationContextMetaDataUpdateWithoutOrganizationContextDataInput = {
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type OrganizationContextMetaDataUpsertWithoutOrganizationContextInput = {
  create: OrganizationContextMetaDataCreateWithoutOrganizationContextInput;
  update: OrganizationContextMetaDataUpdateWithoutOrganizationContextDataInput;
};

export type OrganizationContextMetaDataWhereInput = {
  AND?: Maybe<Array<OrganizationContextMetaDataWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isApproved_not?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isDraft_not?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPendingReview_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isRejected_not?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isUnverified_not?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  isVerified_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<OrganizationContextMetaDataWhereInput>>;
  OR?: Maybe<Array<OrganizationContextMetaDataWhereInput>>;
  organizationContext?: Maybe<OrganizationContextWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationContextMetaDataWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum OrganizationContextOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FromDateAsc = 'fromDate_ASC',
  FromDateDesc = 'fromDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PayloadAsc = 'payload_ASC',
  PayloadDesc = 'payload_DESC',
  ThroughDateAsc = 'throughDate_ASC',
  ThroughDateDesc = 'throughDate_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OrganizationContextScalarWhereInput = {
  AND?: Maybe<Array<OrganizationContextScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<OrganizationContextScalarWhereInput>>;
  OR?: Maybe<Array<OrganizationContextScalarWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  type?: Maybe<OrganizationContextType>;
  type_in?: Maybe<Array<OrganizationContextType>>;
  type_not?: Maybe<OrganizationContextType>;
  type_not_in?: Maybe<Array<OrganizationContextType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export enum OrganizationContextType {
  Description = 'Description',
  FullDescription = 'FullDescription',
  ShortDescription = 'ShortDescription',
  YearFounded = 'YearFounded',
}

export type OrganizationContextUpdateDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  metadata?: Maybe<
    OrganizationContextMetaDataUpdateOneWithoutOrganizationContextInput
  >;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<OrganizationContextType>;
};

export type OrganizationContextUpdateInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  metadata?: Maybe<
    OrganizationContextMetaDataUpdateOneWithoutOrganizationContextInput
  >;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<OrganizationContextType>;
};

export type OrganizationContextUpdateManyDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<OrganizationContextType>;
};

export type OrganizationContextUpdateManyInput = {
  connect?: Maybe<Array<OrganizationContextWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationContextCreateInput>>;
  delete?: Maybe<Array<OrganizationContextWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationContextScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationContextWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationContextWhereUniqueInput>>;
  update?: Maybe<Array<OrganizationContextUpdateWithWhereUniqueNestedInput>>;
  updateMany?: Maybe<Array<OrganizationContextUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<OrganizationContextUpsertWithWhereUniqueNestedInput>>;
};

export type OrganizationContextUpdateManyMutationInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<OrganizationContextType>;
};

export type OrganizationContextUpdateManyWithWhereNestedInput = {
  data: OrganizationContextUpdateManyDataInput;
  where: OrganizationContextScalarWhereInput;
};

export type OrganizationContextUpdateOneRequiredWithoutMetadataInput = {
  connect?: Maybe<OrganizationContextWhereUniqueInput>;
  create?: Maybe<OrganizationContextCreateWithoutMetadataInput>;
  update?: Maybe<OrganizationContextUpdateWithoutMetadataDataInput>;
  upsert?: Maybe<OrganizationContextUpsertWithoutMetadataInput>;
};

export type OrganizationContextUpdateWithoutMetadataDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<OrganizationContextType>;
};

export type OrganizationContextUpdateWithWhereUniqueNestedInput = {
  data: OrganizationContextUpdateDataInput;
  where: OrganizationContextWhereUniqueInput;
};

export type OrganizationContextUpsertWithoutMetadataInput = {
  create: OrganizationContextCreateWithoutMetadataInput;
  update: OrganizationContextUpdateWithoutMetadataDataInput;
};

export type OrganizationContextUpsertWithWhereUniqueNestedInput = {
  create: OrganizationContextCreateInput;
  update: OrganizationContextUpdateDataInput;
  where: OrganizationContextWhereUniqueInput;
};

export type OrganizationContextWhereInput = {
  AND?: Maybe<Array<OrganizationContextWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  metadata?: Maybe<OrganizationContextMetaDataWhereInput>;
  NOT?: Maybe<Array<OrganizationContextWhereInput>>;
  OR?: Maybe<Array<OrganizationContextWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  type?: Maybe<OrganizationContextType>;
  type_in?: Maybe<Array<OrganizationContextType>>;
  type_not?: Maybe<OrganizationContextType>;
  type_not_in?: Maybe<Array<OrganizationContextType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationContextWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type OrganizationCreateInput = {
  admins?: Maybe<PartyAccountCreateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryCreateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextCreateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<OrganizationLinkCreateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationCreateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoCreateManyWithoutOrganizationInput>;
  metadata: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  name?: Maybe<OrganizationNameCreateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleCreateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketCreateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationCreateManyInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCreateInput>>;
};

export type OrganizationCreateManyWithoutAdminsInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCreateWithoutAdminsInput>>;
};

export type OrganizationCreateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCreateWithoutCategoriesInput>>;
};

export type OrganizationCreateManyWithoutTargetMarketsInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCreateWithoutTargetMarketsInput>>;
};

export type OrganizationCreateOneWithoutAffiliationInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutAffiliationInput>;
};

export type OrganizationCreateOneWithoutLinksInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutLinksInput>;
};

export type OrganizationCreateOneWithoutLocationInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutLocationInput>;
};

export type OrganizationCreateOneWithoutLogoInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutLogoInput>;
};

export type OrganizationCreateOneWithoutMetadataInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutMetadataInput>;
};

export type OrganizationCreateOneWithoutNameInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutNameInput>;
};

export type OrganizationCreateOneWithoutPartiesInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutPartiesInput>;
};

export type OrganizationCreateWithoutAdminsInput = {
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryCreateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextCreateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<OrganizationLinkCreateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationCreateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoCreateManyWithoutOrganizationInput>;
  metadata: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  name?: Maybe<OrganizationNameCreateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleCreateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketCreateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationCreateWithoutAffiliationInput = {
  admins?: Maybe<PartyAccountCreateManyWithoutAdminInput>;
  categories?: Maybe<OrganizationCategoryCreateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextCreateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<OrganizationLinkCreateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationCreateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoCreateManyWithoutOrganizationInput>;
  metadata: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  name?: Maybe<OrganizationNameCreateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleCreateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketCreateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationCreateWithoutCategoriesInput = {
  admins?: Maybe<PartyAccountCreateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutOrganizationInput
  >;
  context?: Maybe<OrganizationContextCreateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<OrganizationLinkCreateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationCreateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoCreateManyWithoutOrganizationInput>;
  metadata: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  name?: Maybe<OrganizationNameCreateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleCreateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketCreateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationCreateWithoutLinksInput = {
  admins?: Maybe<PartyAccountCreateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryCreateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextCreateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<OrganizationLocationCreateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoCreateManyWithoutOrganizationInput>;
  metadata: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  name?: Maybe<OrganizationNameCreateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleCreateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketCreateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationCreateWithoutLocationInput = {
  admins?: Maybe<PartyAccountCreateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryCreateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextCreateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<OrganizationLinkCreateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoCreateManyWithoutOrganizationInput>;
  metadata: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  name?: Maybe<OrganizationNameCreateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleCreateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketCreateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationCreateWithoutLogoInput = {
  admins?: Maybe<PartyAccountCreateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryCreateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextCreateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<OrganizationLinkCreateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationCreateManyWithoutOrganizationInput>;
  metadata: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  name?: Maybe<OrganizationNameCreateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleCreateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketCreateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationCreateWithoutMetadataInput = {
  admins?: Maybe<PartyAccountCreateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryCreateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextCreateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<OrganizationLinkCreateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationCreateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoCreateManyWithoutOrganizationInput>;
  name?: Maybe<OrganizationNameCreateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleCreateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketCreateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationCreateWithoutNameInput = {
  admins?: Maybe<PartyAccountCreateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryCreateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextCreateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<OrganizationLinkCreateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationCreateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoCreateManyWithoutOrganizationInput>;
  metadata: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  parties?: Maybe<PartyRoleCreateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketCreateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationCreateWithoutPartiesInput = {
  admins?: Maybe<PartyAccountCreateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryCreateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextCreateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<OrganizationLinkCreateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationCreateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoCreateManyWithoutOrganizationInput>;
  metadata: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  name?: Maybe<OrganizationNameCreateManyWithoutOrganizationInput>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketCreateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationCreateWithoutTargetMarketsInput = {
  admins?: Maybe<PartyAccountCreateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryCreateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextCreateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<OrganizationLinkCreateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationCreateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoCreateManyWithoutOrganizationInput>;
  metadata: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  name?: Maybe<OrganizationNameCreateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleCreateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String'];
  node: Organization;
};

export type OrganizationLink = {
  __typename?: 'OrganizationLink';
  createdAt: Scalars['DateTime'];
  fromDate: Scalars['DateTime'];
  id: Scalars['ID'];
  isHttps?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  organization: Organization;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
  type: OrganizationLinkType;
  updatedAt: Scalars['DateTime'];
};

export type OrganizationLinkConnection = {
  __typename?: 'OrganizationLinkConnection';
  aggregate: AggregateOrganizationLink;
  edges: Array<OrganizationLinkEdge>;
  pageInfo: PageInfo;
};

export type OrganizationLinkCreateInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  isHttps?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  organization: OrganizationCreateOneWithoutLinksInput;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
  type: OrganizationLinkType;
};

export type OrganizationLinkCreateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<OrganizationLinkWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationLinkCreateWithoutOrganizationInput>>;
};

export type OrganizationLinkCreateWithoutOrganizationInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  isHttps?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
  type: OrganizationLinkType;
};

export type OrganizationLinkEdge = {
  __typename?: 'OrganizationLinkEdge';
  cursor: Scalars['String'];
  node: OrganizationLink;
};

export enum OrganizationLinkOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FromDateAsc = 'fromDate_ASC',
  FromDateDesc = 'fromDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsHttpsAsc = 'isHttps_ASC',
  IsHttpsDesc = 'isHttps_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  PayloadAsc = 'payload_ASC',
  PayloadDesc = 'payload_DESC',
  ThroughDateAsc = 'throughDate_ASC',
  ThroughDateDesc = 'throughDate_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OrganizationLinkScalarWhereInput = {
  AND?: Maybe<Array<OrganizationLinkScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isHttps?: Maybe<Scalars['Boolean']>;
  isHttps_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<OrganizationLinkScalarWhereInput>>;
  OR?: Maybe<Array<OrganizationLinkScalarWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  type?: Maybe<OrganizationLinkType>;
  type_in?: Maybe<Array<OrganizationLinkType>>;
  type_not?: Maybe<OrganizationLinkType>;
  type_not_in?: Maybe<Array<OrganizationLinkType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export enum OrganizationLinkType {
  EmailSales = 'EmailSales',
  EmailSupport = 'EmailSupport',
  Other = 'Other',
  UrlAngellist = 'UrlAngellist',
  UrlCrunchbase = 'UrlCrunchbase',
  UrlFacebook = 'UrlFacebook',
  UrlLinkedIn = 'UrlLinkedIn',
  UrlPrivacyPolicy = 'UrlPrivacyPolicy',
  UrlSales = 'UrlSales',
  UrlSupport = 'UrlSupport',
  UrlTermsOfService = 'UrlTermsOfService',
  UrlTwitter = 'UrlTwitter',
  UrlWebsite = 'UrlWebsite',
}

export type OrganizationLinkUpdateInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isHttps?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationUpdateOneRequiredWithoutLinksInput>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<OrganizationLinkType>;
};

export type OrganizationLinkUpdateManyDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isHttps?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<OrganizationLinkType>;
};

export type OrganizationLinkUpdateManyMutationInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isHttps?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<OrganizationLinkType>;
};

export type OrganizationLinkUpdateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<OrganizationLinkWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationLinkCreateWithoutOrganizationInput>>;
  delete?: Maybe<Array<OrganizationLinkWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationLinkScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationLinkWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationLinkWhereUniqueInput>>;
  update?: Maybe<
    Array<OrganizationLinkUpdateWithWhereUniqueWithoutOrganizationInput>
  >;
  updateMany?: Maybe<Array<OrganizationLinkUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<
    Array<OrganizationLinkUpsertWithWhereUniqueWithoutOrganizationInput>
  >;
};

export type OrganizationLinkUpdateManyWithWhereNestedInput = {
  data: OrganizationLinkUpdateManyDataInput;
  where: OrganizationLinkScalarWhereInput;
};

export type OrganizationLinkUpdateWithoutOrganizationDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isHttps?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<OrganizationLinkType>;
};

export type OrganizationLinkUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: OrganizationLinkUpdateWithoutOrganizationDataInput;
  where: OrganizationLinkWhereUniqueInput;
};

export type OrganizationLinkUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: OrganizationLinkCreateWithoutOrganizationInput;
  update: OrganizationLinkUpdateWithoutOrganizationDataInput;
  where: OrganizationLinkWhereUniqueInput;
};

export type OrganizationLinkWhereInput = {
  AND?: Maybe<Array<OrganizationLinkWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isHttps?: Maybe<Scalars['Boolean']>;
  isHttps_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<OrganizationLinkWhereInput>>;
  OR?: Maybe<Array<OrganizationLinkWhereInput>>;
  organization?: Maybe<OrganizationWhereInput>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  type?: Maybe<OrganizationLinkType>;
  type_in?: Maybe<Array<OrganizationLinkType>>;
  type_not?: Maybe<OrganizationLinkType>;
  type_not_in?: Maybe<Array<OrganizationLinkType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationLinkWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type OrganizationLocation = {
  __typename?: 'OrganizationLocation';
  createdAt: Scalars['DateTime'];
  formatted_address?: Maybe<Scalars['String']>;
  geometry?: Maybe<Scalars['Json']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPrimary?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization: Organization;
  photos?: Maybe<Scalars['Json']>;
  placeId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type OrganizationLocationConnection = {
  __typename?: 'OrganizationLocationConnection';
  aggregate: AggregateOrganizationLocation;
  edges: Array<OrganizationLocationEdge>;
  pageInfo: PageInfo;
};

export type OrganizationLocationCreateInput = {
  formatted_address?: Maybe<Scalars['String']>;
  geometry?: Maybe<Scalars['Json']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization: OrganizationCreateOneWithoutLocationInput;
  photos?: Maybe<Scalars['Json']>;
  placeId?: Maybe<Scalars['String']>;
};

export type OrganizationLocationCreateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<OrganizationLocationWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationLocationCreateWithoutOrganizationInput>>;
};

export type OrganizationLocationCreateWithoutOrganizationInput = {
  formatted_address?: Maybe<Scalars['String']>;
  geometry?: Maybe<Scalars['Json']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  photos?: Maybe<Scalars['Json']>;
  placeId?: Maybe<Scalars['String']>;
};

export type OrganizationLocationEdge = {
  __typename?: 'OrganizationLocationEdge';
  cursor: Scalars['String'];
  node: OrganizationLocation;
};

export enum OrganizationLocationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FormattedAddressAsc = 'formatted_address_ASC',
  FormattedAddressDesc = 'formatted_address_DESC',
  GeometryAsc = 'geometry_ASC',
  GeometryDesc = 'geometry_DESC',
  GoogleIdAsc = 'googleId_ASC',
  GoogleIdDesc = 'googleId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsPrimaryAsc = 'isPrimary_ASC',
  IsPrimaryDesc = 'isPrimary_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhotosAsc = 'photos_ASC',
  PhotosDesc = 'photos_DESC',
  PlaceIdAsc = 'placeId_ASC',
  PlaceIdDesc = 'placeId_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OrganizationLocationScalarWhereInput = {
  AND?: Maybe<Array<OrganizationLocationScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  formatted_address?: Maybe<Scalars['String']>;
  formatted_address_contains?: Maybe<Scalars['String']>;
  formatted_address_ends_with?: Maybe<Scalars['String']>;
  formatted_address_gt?: Maybe<Scalars['String']>;
  formatted_address_gte?: Maybe<Scalars['String']>;
  formatted_address_in?: Maybe<Array<Scalars['String']>>;
  formatted_address_lt?: Maybe<Scalars['String']>;
  formatted_address_lte?: Maybe<Scalars['String']>;
  formatted_address_not?: Maybe<Scalars['String']>;
  formatted_address_not_contains?: Maybe<Scalars['String']>;
  formatted_address_not_ends_with?: Maybe<Scalars['String']>;
  formatted_address_not_in?: Maybe<Array<Scalars['String']>>;
  formatted_address_not_starts_with?: Maybe<Scalars['String']>;
  formatted_address_starts_with?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  googleId_contains?: Maybe<Scalars['String']>;
  googleId_ends_with?: Maybe<Scalars['String']>;
  googleId_gt?: Maybe<Scalars['String']>;
  googleId_gte?: Maybe<Scalars['String']>;
  googleId_in?: Maybe<Array<Scalars['String']>>;
  googleId_lt?: Maybe<Scalars['String']>;
  googleId_lte?: Maybe<Scalars['String']>;
  googleId_not?: Maybe<Scalars['String']>;
  googleId_not_contains?: Maybe<Scalars['String']>;
  googleId_not_ends_with?: Maybe<Scalars['String']>;
  googleId_not_in?: Maybe<Array<Scalars['String']>>;
  googleId_not_starts_with?: Maybe<Scalars['String']>;
  googleId_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPrimary_not?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  NOT?: Maybe<Array<OrganizationLocationScalarWhereInput>>;
  OR?: Maybe<Array<OrganizationLocationScalarWhereInput>>;
  placeId?: Maybe<Scalars['String']>;
  placeId_contains?: Maybe<Scalars['String']>;
  placeId_ends_with?: Maybe<Scalars['String']>;
  placeId_gt?: Maybe<Scalars['String']>;
  placeId_gte?: Maybe<Scalars['String']>;
  placeId_in?: Maybe<Array<Scalars['String']>>;
  placeId_lt?: Maybe<Scalars['String']>;
  placeId_lte?: Maybe<Scalars['String']>;
  placeId_not?: Maybe<Scalars['String']>;
  placeId_not_contains?: Maybe<Scalars['String']>;
  placeId_not_ends_with?: Maybe<Scalars['String']>;
  placeId_not_in?: Maybe<Array<Scalars['String']>>;
  placeId_not_starts_with?: Maybe<Scalars['String']>;
  placeId_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationLocationUpdateInput = {
  formatted_address?: Maybe<Scalars['String']>;
  geometry?: Maybe<Scalars['Json']>;
  googleId?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<OrganizationUpdateOneRequiredWithoutLocationInput>;
  photos?: Maybe<Scalars['Json']>;
  placeId?: Maybe<Scalars['String']>;
};

export type OrganizationLocationUpdateManyDataInput = {
  formatted_address?: Maybe<Scalars['String']>;
  geometry?: Maybe<Scalars['Json']>;
  googleId?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  photos?: Maybe<Scalars['Json']>;
  placeId?: Maybe<Scalars['String']>;
};

export type OrganizationLocationUpdateManyMutationInput = {
  formatted_address?: Maybe<Scalars['String']>;
  geometry?: Maybe<Scalars['Json']>;
  googleId?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  photos?: Maybe<Scalars['Json']>;
  placeId?: Maybe<Scalars['String']>;
};

export type OrganizationLocationUpdateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<OrganizationLocationWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationLocationCreateWithoutOrganizationInput>>;
  delete?: Maybe<Array<OrganizationLocationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationLocationScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationLocationWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationLocationWhereUniqueInput>>;
  update?: Maybe<
    Array<OrganizationLocationUpdateWithWhereUniqueWithoutOrganizationInput>
  >;
  updateMany?: Maybe<Array<OrganizationLocationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<
    Array<OrganizationLocationUpsertWithWhereUniqueWithoutOrganizationInput>
  >;
};

export type OrganizationLocationUpdateManyWithWhereNestedInput = {
  data: OrganizationLocationUpdateManyDataInput;
  where: OrganizationLocationScalarWhereInput;
};

export type OrganizationLocationUpdateWithoutOrganizationDataInput = {
  formatted_address?: Maybe<Scalars['String']>;
  geometry?: Maybe<Scalars['Json']>;
  googleId?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  photos?: Maybe<Scalars['Json']>;
  placeId?: Maybe<Scalars['String']>;
};

export type OrganizationLocationUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: OrganizationLocationUpdateWithoutOrganizationDataInput;
  where: OrganizationLocationWhereUniqueInput;
};

export type OrganizationLocationUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: OrganizationLocationCreateWithoutOrganizationInput;
  update: OrganizationLocationUpdateWithoutOrganizationDataInput;
  where: OrganizationLocationWhereUniqueInput;
};

export type OrganizationLocationWhereInput = {
  AND?: Maybe<Array<OrganizationLocationWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  formatted_address?: Maybe<Scalars['String']>;
  formatted_address_contains?: Maybe<Scalars['String']>;
  formatted_address_ends_with?: Maybe<Scalars['String']>;
  formatted_address_gt?: Maybe<Scalars['String']>;
  formatted_address_gte?: Maybe<Scalars['String']>;
  formatted_address_in?: Maybe<Array<Scalars['String']>>;
  formatted_address_lt?: Maybe<Scalars['String']>;
  formatted_address_lte?: Maybe<Scalars['String']>;
  formatted_address_not?: Maybe<Scalars['String']>;
  formatted_address_not_contains?: Maybe<Scalars['String']>;
  formatted_address_not_ends_with?: Maybe<Scalars['String']>;
  formatted_address_not_in?: Maybe<Array<Scalars['String']>>;
  formatted_address_not_starts_with?: Maybe<Scalars['String']>;
  formatted_address_starts_with?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  googleId_contains?: Maybe<Scalars['String']>;
  googleId_ends_with?: Maybe<Scalars['String']>;
  googleId_gt?: Maybe<Scalars['String']>;
  googleId_gte?: Maybe<Scalars['String']>;
  googleId_in?: Maybe<Array<Scalars['String']>>;
  googleId_lt?: Maybe<Scalars['String']>;
  googleId_lte?: Maybe<Scalars['String']>;
  googleId_not?: Maybe<Scalars['String']>;
  googleId_not_contains?: Maybe<Scalars['String']>;
  googleId_not_ends_with?: Maybe<Scalars['String']>;
  googleId_not_in?: Maybe<Array<Scalars['String']>>;
  googleId_not_starts_with?: Maybe<Scalars['String']>;
  googleId_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPrimary_not?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  NOT?: Maybe<Array<OrganizationLocationWhereInput>>;
  OR?: Maybe<Array<OrganizationLocationWhereInput>>;
  organization?: Maybe<OrganizationWhereInput>;
  placeId?: Maybe<Scalars['String']>;
  placeId_contains?: Maybe<Scalars['String']>;
  placeId_ends_with?: Maybe<Scalars['String']>;
  placeId_gt?: Maybe<Scalars['String']>;
  placeId_gte?: Maybe<Scalars['String']>;
  placeId_in?: Maybe<Array<Scalars['String']>>;
  placeId_lt?: Maybe<Scalars['String']>;
  placeId_lte?: Maybe<Scalars['String']>;
  placeId_not?: Maybe<Scalars['String']>;
  placeId_not_contains?: Maybe<Scalars['String']>;
  placeId_not_ends_with?: Maybe<Scalars['String']>;
  placeId_not_in?: Maybe<Array<Scalars['String']>>;
  placeId_not_starts_with?: Maybe<Scalars['String']>;
  placeId_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationLocationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type OrganizationLogo = {
  __typename?: 'OrganizationLogo';
  createdAt: Scalars['DateTime'];
  fromDate: Scalars['DateTime'];
  id: Scalars['ID'];
  isDefault?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  organization: Organization;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type OrganizationLogoConnection = {
  __typename?: 'OrganizationLogoConnection';
  aggregate: AggregateOrganizationLogo;
  edges: Array<OrganizationLogoEdge>;
  pageInfo: PageInfo;
};

export type OrganizationLogoCreateInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  organization: OrganizationCreateOneWithoutLogoInput;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationLogoCreateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<OrganizationLogoWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationLogoCreateWithoutOrganizationInput>>;
};

export type OrganizationLogoCreateWithoutOrganizationInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationLogoEdge = {
  __typename?: 'OrganizationLogoEdge';
  cursor: Scalars['String'];
  node: OrganizationLogo;
};

export enum OrganizationLogoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FromDateAsc = 'fromDate_ASC',
  FromDateDesc = 'fromDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsDefaultAsc = 'isDefault_ASC',
  IsDefaultDesc = 'isDefault_DESC',
  IsPrimaryAsc = 'isPrimary_ASC',
  IsPrimaryDesc = 'isPrimary_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  PayloadAsc = 'payload_ASC',
  PayloadDesc = 'payload_DESC',
  ThroughDateAsc = 'throughDate_ASC',
  ThroughDateDesc = 'throughDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OrganizationLogoScalarWhereInput = {
  AND?: Maybe<Array<OrganizationLogoScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  isDefault_not?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPrimary_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<OrganizationLogoScalarWhereInput>>;
  OR?: Maybe<Array<OrganizationLogoScalarWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationLogoUpdateInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationUpdateOneRequiredWithoutLogoInput>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationLogoUpdateManyDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationLogoUpdateManyMutationInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationLogoUpdateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<OrganizationLogoWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationLogoCreateWithoutOrganizationInput>>;
  delete?: Maybe<Array<OrganizationLogoWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationLogoScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationLogoWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationLogoWhereUniqueInput>>;
  update?: Maybe<
    Array<OrganizationLogoUpdateWithWhereUniqueWithoutOrganizationInput>
  >;
  updateMany?: Maybe<Array<OrganizationLogoUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<
    Array<OrganizationLogoUpsertWithWhereUniqueWithoutOrganizationInput>
  >;
};

export type OrganizationLogoUpdateManyWithWhereNestedInput = {
  data: OrganizationLogoUpdateManyDataInput;
  where: OrganizationLogoScalarWhereInput;
};

export type OrganizationLogoUpdateWithoutOrganizationDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationLogoUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: OrganizationLogoUpdateWithoutOrganizationDataInput;
  where: OrganizationLogoWhereUniqueInput;
};

export type OrganizationLogoUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: OrganizationLogoCreateWithoutOrganizationInput;
  update: OrganizationLogoUpdateWithoutOrganizationDataInput;
  where: OrganizationLogoWhereUniqueInput;
};

export type OrganizationLogoWhereInput = {
  AND?: Maybe<Array<OrganizationLogoWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  isDefault_not?: Maybe<Scalars['Boolean']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPrimary_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<OrganizationLogoWhereInput>>;
  OR?: Maybe<Array<OrganizationLogoWhereInput>>;
  organization?: Maybe<OrganizationWhereInput>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationLogoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type OrganizationMetaData = {
  __typename?: 'OrganizationMetaData';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isApproved: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  isPendingReview: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  isRejected: Scalars['Boolean'];
  isUnverified: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  organization: Organization;
  updatedAt: Scalars['DateTime'];
};

export type OrganizationMetaDataConnection = {
  __typename?: 'OrganizationMetaDataConnection';
  aggregate: AggregateOrganizationMetaData;
  edges: Array<OrganizationMetaDataEdge>;
  pageInfo: PageInfo;
};

export type OrganizationMetaDataCreateInput = {
  id?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  organization: OrganizationCreateOneWithoutMetadataInput;
};

export type OrganizationMetaDataCreateOneWithoutOrganizationInput = {
  connect?: Maybe<OrganizationMetaDataWhereUniqueInput>;
  create?: Maybe<OrganizationMetaDataCreateWithoutOrganizationInput>;
};

export type OrganizationMetaDataCreateWithoutOrganizationInput = {
  id?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type OrganizationMetaDataEdge = {
  __typename?: 'OrganizationMetaDataEdge';
  cursor: Scalars['String'];
  node: OrganizationMetaData;
};

export enum OrganizationMetaDataOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsApprovedAsc = 'isApproved_ASC',
  IsApprovedDesc = 'isApproved_DESC',
  IsDraftAsc = 'isDraft_ASC',
  IsDraftDesc = 'isDraft_DESC',
  IsPendingReviewAsc = 'isPendingReview_ASC',
  IsPendingReviewDesc = 'isPendingReview_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  IsRejectedAsc = 'isRejected_ASC',
  IsRejectedDesc = 'isRejected_DESC',
  IsUnverifiedAsc = 'isUnverified_ASC',
  IsUnverifiedDesc = 'isUnverified_DESC',
  IsVerifiedAsc = 'isVerified_ASC',
  IsVerifiedDesc = 'isVerified_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OrganizationMetaDataUpdateInput = {
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationUpdateOneRequiredWithoutMetadataInput>;
};

export type OrganizationMetaDataUpdateManyMutationInput = {
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput = {
  connect?: Maybe<OrganizationMetaDataWhereUniqueInput>;
  create?: Maybe<OrganizationMetaDataCreateWithoutOrganizationInput>;
  update?: Maybe<OrganizationMetaDataUpdateWithoutOrganizationDataInput>;
  upsert?: Maybe<OrganizationMetaDataUpsertWithoutOrganizationInput>;
};

export type OrganizationMetaDataUpdateWithoutOrganizationDataInput = {
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type OrganizationMetaDataUpsertWithoutOrganizationInput = {
  create: OrganizationMetaDataCreateWithoutOrganizationInput;
  update: OrganizationMetaDataUpdateWithoutOrganizationDataInput;
};

export type OrganizationMetaDataWhereInput = {
  AND?: Maybe<Array<OrganizationMetaDataWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isApproved_not?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isDraft_not?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPendingReview_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isRejected_not?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isUnverified_not?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  isVerified_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<OrganizationMetaDataWhereInput>>;
  OR?: Maybe<Array<OrganizationMetaDataWhereInput>>;
  organization?: Maybe<OrganizationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationMetaDataWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type OrganizationName = {
  __typename?: 'OrganizationName';
  createdAt: Scalars['DateTime'];
  fromDate: Scalars['DateTime'];
  id: Scalars['ID'];
  organization: Organization;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type OrganizationNameConnection = {
  __typename?: 'OrganizationNameConnection';
  aggregate: AggregateOrganizationName;
  edges: Array<OrganizationNameEdge>;
  pageInfo: PageInfo;
};

export type OrganizationNameCreateInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  organization: OrganizationCreateOneWithoutNameInput;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationNameCreateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<OrganizationNameWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationNameCreateWithoutOrganizationInput>>;
};

export type OrganizationNameCreateWithoutOrganizationInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationNameEdge = {
  __typename?: 'OrganizationNameEdge';
  cursor: Scalars['String'];
  node: OrganizationName;
};

export enum OrganizationNameOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FromDateAsc = 'fromDate_ASC',
  FromDateDesc = 'fromDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PayloadAsc = 'payload_ASC',
  PayloadDesc = 'payload_DESC',
  ThroughDateAsc = 'throughDate_ASC',
  ThroughDateDesc = 'throughDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OrganizationNameScalarWhereInput = {
  AND?: Maybe<Array<OrganizationNameScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<OrganizationNameScalarWhereInput>>;
  OR?: Maybe<Array<OrganizationNameScalarWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationNameUpdateInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  organization?: Maybe<OrganizationUpdateOneRequiredWithoutNameInput>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationNameUpdateManyDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationNameUpdateManyMutationInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationNameUpdateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<OrganizationNameWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationNameCreateWithoutOrganizationInput>>;
  delete?: Maybe<Array<OrganizationNameWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationNameScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationNameWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationNameWhereUniqueInput>>;
  update?: Maybe<
    Array<OrganizationNameUpdateWithWhereUniqueWithoutOrganizationInput>
  >;
  updateMany?: Maybe<Array<OrganizationNameUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<
    Array<OrganizationNameUpsertWithWhereUniqueWithoutOrganizationInput>
  >;
};

export type OrganizationNameUpdateManyWithWhereNestedInput = {
  data: OrganizationNameUpdateManyDataInput;
  where: OrganizationNameScalarWhereInput;
};

export type OrganizationNameUpdateWithoutOrganizationDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type OrganizationNameUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: OrganizationNameUpdateWithoutOrganizationDataInput;
  where: OrganizationNameWhereUniqueInput;
};

export type OrganizationNameUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: OrganizationNameCreateWithoutOrganizationInput;
  update: OrganizationNameUpdateWithoutOrganizationDataInput;
  where: OrganizationNameWhereUniqueInput;
};

export type OrganizationNameWhereInput = {
  AND?: Maybe<Array<OrganizationNameWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<OrganizationNameWhereInput>>;
  OR?: Maybe<Array<OrganizationNameWhereInput>>;
  organization?: Maybe<OrganizationWhereInput>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationNameWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum OrganizationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VisibleAsc = 'visible_ASC',
  VisibleDesc = 'visible_DESC',
  YearFoundedAsc = 'yearFounded_ASC',
  YearFoundedDesc = 'yearFounded_DESC',
}

export type OrganizationScalarWhereInput = {
  AND?: Maybe<Array<OrganizationScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<OrganizationScalarWhereInput>>;
  OR?: Maybe<Array<OrganizationScalarWhereInput>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  visible?: Maybe<Scalars['Boolean']>;
  visible_not?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
  yearFounded_gt?: Maybe<Scalars['DateTime']>;
  yearFounded_gte?: Maybe<Scalars['DateTime']>;
  yearFounded_in?: Maybe<Array<Scalars['DateTime']>>;
  yearFounded_lt?: Maybe<Scalars['DateTime']>;
  yearFounded_lte?: Maybe<Scalars['DateTime']>;
  yearFounded_not?: Maybe<Scalars['DateTime']>;
  yearFounded_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationTargetMarket = {
  __typename?: 'OrganizationTargetMarket';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  organizations?: Maybe<Array<Organization>>;
  payload: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OrganizationTargetMarketOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationWhereInput>;
};

export type OrganizationTargetMarketConnection = {
  __typename?: 'OrganizationTargetMarketConnection';
  aggregate: AggregateOrganizationTargetMarket;
  edges: Array<OrganizationTargetMarketEdge>;
  pageInfo: PageInfo;
};

export type OrganizationTargetMarketCreateInput = {
  id?: Maybe<Scalars['ID']>;
  organizations?: Maybe<OrganizationCreateManyWithoutTargetMarketsInput>;
  payload: Scalars['String'];
};

export type OrganizationTargetMarketCreateManyWithoutOrganizationsInput = {
  connect?: Maybe<Array<OrganizationTargetMarketWhereUniqueInput>>;
  create?: Maybe<
    Array<OrganizationTargetMarketCreateWithoutOrganizationsInput>
  >;
};

export type OrganizationTargetMarketCreateWithoutOrganizationsInput = {
  id?: Maybe<Scalars['ID']>;
  payload: Scalars['String'];
};

export type OrganizationTargetMarketEdge = {
  __typename?: 'OrganizationTargetMarketEdge';
  cursor: Scalars['String'];
  node: OrganizationTargetMarket;
};

export enum OrganizationTargetMarketOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PayloadAsc = 'payload_ASC',
  PayloadDesc = 'payload_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OrganizationTargetMarketScalarWhereInput = {
  AND?: Maybe<Array<OrganizationTargetMarketScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<OrganizationTargetMarketScalarWhereInput>>;
  OR?: Maybe<Array<OrganizationTargetMarketScalarWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationTargetMarketUpdateInput = {
  organizations?: Maybe<OrganizationUpdateManyWithoutTargetMarketsInput>;
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationTargetMarketUpdateManyDataInput = {
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationTargetMarketUpdateManyMutationInput = {
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationTargetMarketUpdateManyWithoutOrganizationsInput = {
  connect?: Maybe<Array<OrganizationTargetMarketWhereUniqueInput>>;
  create?: Maybe<
    Array<OrganizationTargetMarketCreateWithoutOrganizationsInput>
  >;
  delete?: Maybe<Array<OrganizationTargetMarketWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationTargetMarketScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationTargetMarketWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationTargetMarketWhereUniqueInput>>;
  update?: Maybe<
    Array<
      OrganizationTargetMarketUpdateWithWhereUniqueWithoutOrganizationsInput
    >
  >;
  updateMany?: Maybe<
    Array<OrganizationTargetMarketUpdateManyWithWhereNestedInput>
  >;
  upsert?: Maybe<
    Array<
      OrganizationTargetMarketUpsertWithWhereUniqueWithoutOrganizationsInput
    >
  >;
};

export type OrganizationTargetMarketUpdateManyWithWhereNestedInput = {
  data: OrganizationTargetMarketUpdateManyDataInput;
  where: OrganizationTargetMarketScalarWhereInput;
};

export type OrganizationTargetMarketUpdateWithoutOrganizationsDataInput = {
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationTargetMarketUpdateWithWhereUniqueWithoutOrganizationsInput = {
  data: OrganizationTargetMarketUpdateWithoutOrganizationsDataInput;
  where: OrganizationTargetMarketWhereUniqueInput;
};

export type OrganizationTargetMarketUpsertWithWhereUniqueWithoutOrganizationsInput = {
  create: OrganizationTargetMarketCreateWithoutOrganizationsInput;
  update: OrganizationTargetMarketUpdateWithoutOrganizationsDataInput;
  where: OrganizationTargetMarketWhereUniqueInput;
};

export type OrganizationTargetMarketWhereInput = {
  AND?: Maybe<Array<OrganizationTargetMarketWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<OrganizationTargetMarketWhereInput>>;
  OR?: Maybe<Array<OrganizationTargetMarketWhereInput>>;
  organizations_every?: Maybe<OrganizationWhereInput>;
  organizations_none?: Maybe<OrganizationWhereInput>;
  organizations_some?: Maybe<OrganizationWhereInput>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationTargetMarketWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  payload?: Maybe<Scalars['String']>;
};

export type OrganizationUpdateDataInput = {
  admins?: Maybe<PartyAccountUpdateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryUpdateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  links?: Maybe<OrganizationLinkUpdateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationUpdateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoUpdateManyWithoutOrganizationInput>;
  metadata?: Maybe<
    OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput
  >;
  name?: Maybe<OrganizationNameUpdateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleUpdateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketUpdateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateInput = {
  admins?: Maybe<PartyAccountUpdateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryUpdateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  links?: Maybe<OrganizationLinkUpdateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationUpdateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoUpdateManyWithoutOrganizationInput>;
  metadata?: Maybe<
    OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput
  >;
  name?: Maybe<OrganizationNameUpdateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleUpdateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketUpdateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateManyDataInput = {
  description?: Maybe<Scalars['String']>;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateManyInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCreateInput>>;
  delete?: Maybe<Array<OrganizationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationWhereUniqueInput>>;
  update?: Maybe<Array<OrganizationUpdateWithWhereUniqueNestedInput>>;
  updateMany?: Maybe<Array<OrganizationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<OrganizationUpsertWithWhereUniqueNestedInput>>;
};

export type OrganizationUpdateManyMutationInput = {
  description?: Maybe<Scalars['String']>;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateManyWithoutAdminsInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCreateWithoutAdminsInput>>;
  delete?: Maybe<Array<OrganizationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationWhereUniqueInput>>;
  update?: Maybe<Array<OrganizationUpdateWithWhereUniqueWithoutAdminsInput>>;
  updateMany?: Maybe<Array<OrganizationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<OrganizationUpsertWithWhereUniqueWithoutAdminsInput>>;
};

export type OrganizationUpdateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCreateWithoutCategoriesInput>>;
  delete?: Maybe<Array<OrganizationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationWhereUniqueInput>>;
  update?: Maybe<
    Array<OrganizationUpdateWithWhereUniqueWithoutCategoriesInput>
  >;
  updateMany?: Maybe<Array<OrganizationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<
    Array<OrganizationUpsertWithWhereUniqueWithoutCategoriesInput>
  >;
};

export type OrganizationUpdateManyWithoutTargetMarketsInput = {
  connect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  create?: Maybe<Array<OrganizationCreateWithoutTargetMarketsInput>>;
  delete?: Maybe<Array<OrganizationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrganizationScalarWhereInput>>;
  disconnect?: Maybe<Array<OrganizationWhereUniqueInput>>;
  set?: Maybe<Array<OrganizationWhereUniqueInput>>;
  update?: Maybe<
    Array<OrganizationUpdateWithWhereUniqueWithoutTargetMarketsInput>
  >;
  updateMany?: Maybe<Array<OrganizationUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<
    Array<OrganizationUpsertWithWhereUniqueWithoutTargetMarketsInput>
  >;
};

export type OrganizationUpdateManyWithWhereNestedInput = {
  data: OrganizationUpdateManyDataInput;
  where: OrganizationScalarWhereInput;
};

export type OrganizationUpdateOneRequiredWithoutAffiliationInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutAffiliationInput>;
  update?: Maybe<OrganizationUpdateWithoutAffiliationDataInput>;
  upsert?: Maybe<OrganizationUpsertWithoutAffiliationInput>;
};

export type OrganizationUpdateOneRequiredWithoutLinksInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutLinksInput>;
  update?: Maybe<OrganizationUpdateWithoutLinksDataInput>;
  upsert?: Maybe<OrganizationUpsertWithoutLinksInput>;
};

export type OrganizationUpdateOneRequiredWithoutLocationInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutLocationInput>;
  update?: Maybe<OrganizationUpdateWithoutLocationDataInput>;
  upsert?: Maybe<OrganizationUpsertWithoutLocationInput>;
};

export type OrganizationUpdateOneRequiredWithoutLogoInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutLogoInput>;
  update?: Maybe<OrganizationUpdateWithoutLogoDataInput>;
  upsert?: Maybe<OrganizationUpsertWithoutLogoInput>;
};

export type OrganizationUpdateOneRequiredWithoutMetadataInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutMetadataInput>;
  update?: Maybe<OrganizationUpdateWithoutMetadataDataInput>;
  upsert?: Maybe<OrganizationUpsertWithoutMetadataInput>;
};

export type OrganizationUpdateOneRequiredWithoutNameInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutNameInput>;
  update?: Maybe<OrganizationUpdateWithoutNameDataInput>;
  upsert?: Maybe<OrganizationUpsertWithoutNameInput>;
};

export type OrganizationUpdateOneRequiredWithoutPartiesInput = {
  connect?: Maybe<OrganizationWhereUniqueInput>;
  create?: Maybe<OrganizationCreateWithoutPartiesInput>;
  update?: Maybe<OrganizationUpdateWithoutPartiesDataInput>;
  upsert?: Maybe<OrganizationUpsertWithoutPartiesInput>;
};

export type OrganizationUpdateWithoutAdminsDataInput = {
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryUpdateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  links?: Maybe<OrganizationLinkUpdateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationUpdateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoUpdateManyWithoutOrganizationInput>;
  metadata?: Maybe<
    OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput
  >;
  name?: Maybe<OrganizationNameUpdateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleUpdateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketUpdateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateWithoutAffiliationDataInput = {
  admins?: Maybe<PartyAccountUpdateManyWithoutAdminInput>;
  categories?: Maybe<OrganizationCategoryUpdateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  links?: Maybe<OrganizationLinkUpdateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationUpdateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoUpdateManyWithoutOrganizationInput>;
  metadata?: Maybe<
    OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput
  >;
  name?: Maybe<OrganizationNameUpdateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleUpdateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketUpdateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateWithoutCategoriesDataInput = {
  admins?: Maybe<PartyAccountUpdateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput
  >;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  links?: Maybe<OrganizationLinkUpdateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationUpdateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoUpdateManyWithoutOrganizationInput>;
  metadata?: Maybe<
    OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput
  >;
  name?: Maybe<OrganizationNameUpdateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleUpdateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketUpdateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateWithoutLinksDataInput = {
  admins?: Maybe<PartyAccountUpdateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryUpdateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  location?: Maybe<OrganizationLocationUpdateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoUpdateManyWithoutOrganizationInput>;
  metadata?: Maybe<
    OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput
  >;
  name?: Maybe<OrganizationNameUpdateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleUpdateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketUpdateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateWithoutLocationDataInput = {
  admins?: Maybe<PartyAccountUpdateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryUpdateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  links?: Maybe<OrganizationLinkUpdateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoUpdateManyWithoutOrganizationInput>;
  metadata?: Maybe<
    OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput
  >;
  name?: Maybe<OrganizationNameUpdateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleUpdateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketUpdateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateWithoutLogoDataInput = {
  admins?: Maybe<PartyAccountUpdateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryUpdateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  links?: Maybe<OrganizationLinkUpdateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationUpdateManyWithoutOrganizationInput>;
  metadata?: Maybe<
    OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput
  >;
  name?: Maybe<OrganizationNameUpdateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleUpdateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketUpdateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateWithoutMetadataDataInput = {
  admins?: Maybe<PartyAccountUpdateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryUpdateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  links?: Maybe<OrganizationLinkUpdateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationUpdateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoUpdateManyWithoutOrganizationInput>;
  name?: Maybe<OrganizationNameUpdateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleUpdateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketUpdateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateWithoutNameDataInput = {
  admins?: Maybe<PartyAccountUpdateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryUpdateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  links?: Maybe<OrganizationLinkUpdateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationUpdateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoUpdateManyWithoutOrganizationInput>;
  metadata?: Maybe<
    OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput
  >;
  parties?: Maybe<PartyRoleUpdateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketUpdateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateWithoutPartiesDataInput = {
  admins?: Maybe<PartyAccountUpdateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryUpdateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  links?: Maybe<OrganizationLinkUpdateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationUpdateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoUpdateManyWithoutOrganizationInput>;
  metadata?: Maybe<
    OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput
  >;
  name?: Maybe<OrganizationNameUpdateManyWithoutOrganizationInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  targetMarkets?: Maybe<
    OrganizationTargetMarketUpdateManyWithoutOrganizationsInput
  >;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateWithoutTargetMarketsDataInput = {
  admins?: Maybe<PartyAccountUpdateManyWithoutAdminInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput
  >;
  categories?: Maybe<OrganizationCategoryUpdateManyWithoutOrganizationsInput>;
  context?: Maybe<OrganizationContextUpdateManyInput>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  links?: Maybe<OrganizationLinkUpdateManyWithoutOrganizationInput>;
  location?: Maybe<OrganizationLocationUpdateManyWithoutOrganizationInput>;
  logo?: Maybe<OrganizationLogoUpdateManyWithoutOrganizationInput>;
  metadata?: Maybe<
    OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput
  >;
  name?: Maybe<OrganizationNameUpdateManyWithoutOrganizationInput>;
  parties?: Maybe<PartyRoleUpdateManyWithoutResourceInput>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
  visible?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
};

export type OrganizationUpdateWithWhereUniqueNestedInput = {
  data: OrganizationUpdateDataInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpdateWithWhereUniqueWithoutAdminsInput = {
  data: OrganizationUpdateWithoutAdminsDataInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: OrganizationUpdateWithoutCategoriesDataInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpdateWithWhereUniqueWithoutTargetMarketsInput = {
  data: OrganizationUpdateWithoutTargetMarketsDataInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpsertWithoutAffiliationInput = {
  create: OrganizationCreateWithoutAffiliationInput;
  update: OrganizationUpdateWithoutAffiliationDataInput;
};

export type OrganizationUpsertWithoutLinksInput = {
  create: OrganizationCreateWithoutLinksInput;
  update: OrganizationUpdateWithoutLinksDataInput;
};

export type OrganizationUpsertWithoutLocationInput = {
  create: OrganizationCreateWithoutLocationInput;
  update: OrganizationUpdateWithoutLocationDataInput;
};

export type OrganizationUpsertWithoutLogoInput = {
  create: OrganizationCreateWithoutLogoInput;
  update: OrganizationUpdateWithoutLogoDataInput;
};

export type OrganizationUpsertWithoutMetadataInput = {
  create: OrganizationCreateWithoutMetadataInput;
  update: OrganizationUpdateWithoutMetadataDataInput;
};

export type OrganizationUpsertWithoutNameInput = {
  create: OrganizationCreateWithoutNameInput;
  update: OrganizationUpdateWithoutNameDataInput;
};

export type OrganizationUpsertWithoutPartiesInput = {
  create: OrganizationCreateWithoutPartiesInput;
  update: OrganizationUpdateWithoutPartiesDataInput;
};

export type OrganizationUpsertWithWhereUniqueNestedInput = {
  create: OrganizationCreateInput;
  update: OrganizationUpdateDataInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpsertWithWhereUniqueWithoutAdminsInput = {
  create: OrganizationCreateWithoutAdminsInput;
  update: OrganizationUpdateWithoutAdminsDataInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: OrganizationCreateWithoutCategoriesInput;
  update: OrganizationUpdateWithoutCategoriesDataInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationUpsertWithWhereUniqueWithoutTargetMarketsInput = {
  create: OrganizationCreateWithoutTargetMarketsInput;
  update: OrganizationUpdateWithoutTargetMarketsDataInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationWhereInput = {
  admins_every?: Maybe<PartyAccountWhereInput>;
  admins_none?: Maybe<PartyAccountWhereInput>;
  admins_some?: Maybe<PartyAccountWhereInput>;
  affiliation_every?: Maybe<PersonOrganizationAffiliationWhereInput>;
  affiliation_none?: Maybe<PersonOrganizationAffiliationWhereInput>;
  affiliation_some?: Maybe<PersonOrganizationAffiliationWhereInput>;
  AND?: Maybe<Array<OrganizationWhereInput>>;
  categories_every?: Maybe<OrganizationCategoryWhereInput>;
  categories_none?: Maybe<OrganizationCategoryWhereInput>;
  categories_some?: Maybe<OrganizationCategoryWhereInput>;
  context_every?: Maybe<OrganizationContextWhereInput>;
  context_none?: Maybe<OrganizationContextWhereInput>;
  context_some?: Maybe<OrganizationContextWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  email_every?: Maybe<PartyEmailWhereInput>;
  email_none?: Maybe<PartyEmailWhereInput>;
  email_some?: Maybe<PartyEmailWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  links_every?: Maybe<OrganizationLinkWhereInput>;
  links_none?: Maybe<OrganizationLinkWhereInput>;
  links_some?: Maybe<OrganizationLinkWhereInput>;
  location_every?: Maybe<OrganizationLocationWhereInput>;
  location_none?: Maybe<OrganizationLocationWhereInput>;
  location_some?: Maybe<OrganizationLocationWhereInput>;
  logo_every?: Maybe<OrganizationLogoWhereInput>;
  logo_none?: Maybe<OrganizationLogoWhereInput>;
  logo_some?: Maybe<OrganizationLogoWhereInput>;
  metadata?: Maybe<OrganizationMetaDataWhereInput>;
  name_every?: Maybe<OrganizationNameWhereInput>;
  name_none?: Maybe<OrganizationNameWhereInput>;
  name_some?: Maybe<OrganizationNameWhereInput>;
  NOT?: Maybe<Array<OrganizationWhereInput>>;
  OR?: Maybe<Array<OrganizationWhereInput>>;
  parties_every?: Maybe<PartyRoleWhereInput>;
  parties_none?: Maybe<PartyRoleWhereInput>;
  parties_some?: Maybe<PartyRoleWhereInput>;
  phone_every?: Maybe<PartyPhoneWhereInput>;
  phone_none?: Maybe<PartyPhoneWhereInput>;
  phone_some?: Maybe<PartyPhoneWhereInput>;
  targetMarkets_every?: Maybe<OrganizationTargetMarketWhereInput>;
  targetMarkets_none?: Maybe<OrganizationTargetMarketWhereInput>;
  targetMarkets_some?: Maybe<OrganizationTargetMarketWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  visible?: Maybe<Scalars['Boolean']>;
  visible_not?: Maybe<Scalars['Boolean']>;
  yearFounded?: Maybe<Scalars['DateTime']>;
  yearFounded_gt?: Maybe<Scalars['DateTime']>;
  yearFounded_gte?: Maybe<Scalars['DateTime']>;
  yearFounded_in?: Maybe<Array<Scalars['DateTime']>>;
  yearFounded_lt?: Maybe<Scalars['DateTime']>;
  yearFounded_lte?: Maybe<Scalars['DateTime']>;
  yearFounded_not?: Maybe<Scalars['DateTime']>;
  yearFounded_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type OrganizationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PartyAccount = {
  __typename?: 'PartyAccount';
  admin?: Maybe<Array<Organization>>;
  cognitoId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  email_verified: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  person?: Maybe<Person>;
  phone?: Maybe<Scalars['String']>;
  phone_number_verified: Scalars['Boolean'];
  roles?: Maybe<Array<PartyRole>>;
  updatedAt: Scalars['DateTime'];
};

export type PartyAccountAdminArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationWhereInput>;
};

export type PartyAccountRolesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyRoleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyRoleWhereInput>;
};

export type PartyAccountConnection = {
  __typename?: 'PartyAccountConnection';
  aggregate: AggregatePartyAccount;
  edges: Array<PartyAccountEdge>;
  pageInfo: PageInfo;
};

export type PartyAccountCreateInput = {
  admin?: Maybe<OrganizationCreateManyWithoutAdminsInput>;
  cognitoId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  person?: Maybe<PersonCreateOneWithoutAccountInput>;
  phone?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<PartyRoleCreateManyWithoutPartyInput>;
};

export type PartyAccountCreateManyWithoutAdminInput = {
  connect?: Maybe<Array<PartyAccountWhereUniqueInput>>;
  create?: Maybe<Array<PartyAccountCreateWithoutAdminInput>>;
};

export type PartyAccountCreateOneWithoutPersonInput = {
  connect?: Maybe<PartyAccountWhereUniqueInput>;
  create?: Maybe<PartyAccountCreateWithoutPersonInput>;
};

export type PartyAccountCreateOneWithoutRolesInput = {
  connect?: Maybe<PartyAccountWhereUniqueInput>;
  create?: Maybe<PartyAccountCreateWithoutRolesInput>;
};

export type PartyAccountCreateWithoutAdminInput = {
  cognitoId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  person?: Maybe<PersonCreateOneWithoutAccountInput>;
  phone?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<PartyRoleCreateManyWithoutPartyInput>;
};

export type PartyAccountCreateWithoutPersonInput = {
  admin?: Maybe<OrganizationCreateManyWithoutAdminsInput>;
  cognitoId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<PartyRoleCreateManyWithoutPartyInput>;
};

export type PartyAccountCreateWithoutRolesInput = {
  admin?: Maybe<OrganizationCreateManyWithoutAdminsInput>;
  cognitoId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  person?: Maybe<PersonCreateOneWithoutAccountInput>;
  phone?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
};

export type PartyAccountEdge = {
  __typename?: 'PartyAccountEdge';
  cursor: Scalars['String'];
  node: PartyAccount;
};

export enum PartyAccountOrderByInput {
  CognitoIdAsc = 'cognitoId_ASC',
  CognitoIdDesc = 'cognitoId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EmailVerifiedAsc = 'email_verified_ASC',
  EmailVerifiedDesc = 'email_verified_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PhoneNumberVerifiedAsc = 'phone_number_verified_ASC',
  PhoneNumberVerifiedDesc = 'phone_number_verified_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PartyAccountScalarWhereInput = {
  AND?: Maybe<Array<PartyAccountScalarWhereInput>>;
  cognitoId?: Maybe<Scalars['String']>;
  cognitoId_contains?: Maybe<Scalars['String']>;
  cognitoId_ends_with?: Maybe<Scalars['String']>;
  cognitoId_gt?: Maybe<Scalars['String']>;
  cognitoId_gte?: Maybe<Scalars['String']>;
  cognitoId_in?: Maybe<Array<Scalars['String']>>;
  cognitoId_lt?: Maybe<Scalars['String']>;
  cognitoId_lte?: Maybe<Scalars['String']>;
  cognitoId_not?: Maybe<Scalars['String']>;
  cognitoId_not_contains?: Maybe<Scalars['String']>;
  cognitoId_not_ends_with?: Maybe<Scalars['String']>;
  cognitoId_not_in?: Maybe<Array<Scalars['String']>>;
  cognitoId_not_starts_with?: Maybe<Scalars['String']>;
  cognitoId_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  email?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  email_verified_not?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  NOT?: Maybe<Array<PartyAccountScalarWhereInput>>;
  OR?: Maybe<Array<PartyAccountScalarWhereInput>>;
  phone?: Maybe<Scalars['String']>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_ends_with?: Maybe<Scalars['String']>;
  phone_gt?: Maybe<Scalars['String']>;
  phone_gte?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Scalars['String']>>;
  phone_lt?: Maybe<Scalars['String']>;
  phone_lte?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  phone_not_ends_with?: Maybe<Scalars['String']>;
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  phone_not_starts_with?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
  phone_number_verified_not?: Maybe<Scalars['Boolean']>;
  phone_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PartyAccountUpdateInput = {
  admin?: Maybe<OrganizationUpdateManyWithoutAdminsInput>;
  cognitoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  person?: Maybe<PersonUpdateOneWithoutAccountInput>;
  phone?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<PartyRoleUpdateManyWithoutPartyInput>;
};

export type PartyAccountUpdateManyDataInput = {
  cognitoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
};

export type PartyAccountUpdateManyMutationInput = {
  cognitoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
};

export type PartyAccountUpdateManyWithoutAdminInput = {
  connect?: Maybe<Array<PartyAccountWhereUniqueInput>>;
  create?: Maybe<Array<PartyAccountCreateWithoutAdminInput>>;
  delete?: Maybe<Array<PartyAccountWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PartyAccountScalarWhereInput>>;
  disconnect?: Maybe<Array<PartyAccountWhereUniqueInput>>;
  set?: Maybe<Array<PartyAccountWhereUniqueInput>>;
  update?: Maybe<Array<PartyAccountUpdateWithWhereUniqueWithoutAdminInput>>;
  updateMany?: Maybe<Array<PartyAccountUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PartyAccountUpsertWithWhereUniqueWithoutAdminInput>>;
};

export type PartyAccountUpdateManyWithWhereNestedInput = {
  data: PartyAccountUpdateManyDataInput;
  where: PartyAccountScalarWhereInput;
};

export type PartyAccountUpdateOneRequiredWithoutRolesInput = {
  connect?: Maybe<PartyAccountWhereUniqueInput>;
  create?: Maybe<PartyAccountCreateWithoutRolesInput>;
  update?: Maybe<PartyAccountUpdateWithoutRolesDataInput>;
  upsert?: Maybe<PartyAccountUpsertWithoutRolesInput>;
};

export type PartyAccountUpdateOneWithoutPersonInput = {
  connect?: Maybe<PartyAccountWhereUniqueInput>;
  create?: Maybe<PartyAccountCreateWithoutPersonInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PartyAccountUpdateWithoutPersonDataInput>;
  upsert?: Maybe<PartyAccountUpsertWithoutPersonInput>;
};

export type PartyAccountUpdateWithoutAdminDataInput = {
  cognitoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  person?: Maybe<PersonUpdateOneWithoutAccountInput>;
  phone?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<PartyRoleUpdateManyWithoutPartyInput>;
};

export type PartyAccountUpdateWithoutPersonDataInput = {
  admin?: Maybe<OrganizationUpdateManyWithoutAdminsInput>;
  cognitoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<PartyRoleUpdateManyWithoutPartyInput>;
};

export type PartyAccountUpdateWithoutRolesDataInput = {
  admin?: Maybe<OrganizationUpdateManyWithoutAdminsInput>;
  cognitoId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  person?: Maybe<PersonUpdateOneWithoutAccountInput>;
  phone?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
};

export type PartyAccountUpdateWithWhereUniqueWithoutAdminInput = {
  data: PartyAccountUpdateWithoutAdminDataInput;
  where: PartyAccountWhereUniqueInput;
};

export type PartyAccountUpsertWithoutPersonInput = {
  create: PartyAccountCreateWithoutPersonInput;
  update: PartyAccountUpdateWithoutPersonDataInput;
};

export type PartyAccountUpsertWithoutRolesInput = {
  create: PartyAccountCreateWithoutRolesInput;
  update: PartyAccountUpdateWithoutRolesDataInput;
};

export type PartyAccountUpsertWithWhereUniqueWithoutAdminInput = {
  create: PartyAccountCreateWithoutAdminInput;
  update: PartyAccountUpdateWithoutAdminDataInput;
  where: PartyAccountWhereUniqueInput;
};

export type PartyAccountWhereInput = {
  admin_every?: Maybe<OrganizationWhereInput>;
  admin_none?: Maybe<OrganizationWhereInput>;
  admin_some?: Maybe<OrganizationWhereInput>;
  AND?: Maybe<Array<PartyAccountWhereInput>>;
  cognitoId?: Maybe<Scalars['String']>;
  cognitoId_contains?: Maybe<Scalars['String']>;
  cognitoId_ends_with?: Maybe<Scalars['String']>;
  cognitoId_gt?: Maybe<Scalars['String']>;
  cognitoId_gte?: Maybe<Scalars['String']>;
  cognitoId_in?: Maybe<Array<Scalars['String']>>;
  cognitoId_lt?: Maybe<Scalars['String']>;
  cognitoId_lte?: Maybe<Scalars['String']>;
  cognitoId_not?: Maybe<Scalars['String']>;
  cognitoId_not_contains?: Maybe<Scalars['String']>;
  cognitoId_not_ends_with?: Maybe<Scalars['String']>;
  cognitoId_not_in?: Maybe<Array<Scalars['String']>>;
  cognitoId_not_starts_with?: Maybe<Scalars['String']>;
  cognitoId_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  email?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  email_verified_not?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  NOT?: Maybe<Array<PartyAccountWhereInput>>;
  OR?: Maybe<Array<PartyAccountWhereInput>>;
  person?: Maybe<PersonWhereInput>;
  phone?: Maybe<Scalars['String']>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_ends_with?: Maybe<Scalars['String']>;
  phone_gt?: Maybe<Scalars['String']>;
  phone_gte?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Scalars['String']>>;
  phone_lt?: Maybe<Scalars['String']>;
  phone_lte?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  phone_not_ends_with?: Maybe<Scalars['String']>;
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  phone_not_starts_with?: Maybe<Scalars['String']>;
  phone_number_verified?: Maybe<Scalars['Boolean']>;
  phone_number_verified_not?: Maybe<Scalars['Boolean']>;
  phone_starts_with?: Maybe<Scalars['String']>;
  roles_every?: Maybe<PartyRoleWhereInput>;
  roles_none?: Maybe<PartyRoleWhereInput>;
  roles_some?: Maybe<PartyRoleWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PartyAccountWhereUniqueInput = {
  cognitoId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type PartyEmail = {
  __typename?: 'PartyEmail';
  createdAt: Scalars['DateTime'];
  fromDate: Scalars['DateTime'];
  id: Scalars['ID'];
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type PartyEmailConnection = {
  __typename?: 'PartyEmailConnection';
  aggregate: AggregatePartyEmail;
  edges: Array<PartyEmailEdge>;
  pageInfo: PageInfo;
};

export type PartyEmailCreateInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyEmailCreateManyInput = {
  connect?: Maybe<Array<PartyEmailWhereUniqueInput>>;
  create?: Maybe<Array<PartyEmailCreateInput>>;
};

export type PartyEmailEdge = {
  __typename?: 'PartyEmailEdge';
  cursor: Scalars['String'];
  node: PartyEmail;
};

export enum PartyEmailOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FromDateAsc = 'fromDate_ASC',
  FromDateDesc = 'fromDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsPrimaryAsc = 'isPrimary_ASC',
  IsPrimaryDesc = 'isPrimary_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  PayloadAsc = 'payload_ASC',
  PayloadDesc = 'payload_DESC',
  ThroughDateAsc = 'throughDate_ASC',
  ThroughDateDesc = 'throughDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PartyEmailScalarWhereInput = {
  AND?: Maybe<Array<PartyEmailScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPrimary_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<PartyEmailScalarWhereInput>>;
  OR?: Maybe<Array<PartyEmailScalarWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PartyEmailUpdateDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyEmailUpdateInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyEmailUpdateManyDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyEmailUpdateManyInput = {
  connect?: Maybe<Array<PartyEmailWhereUniqueInput>>;
  create?: Maybe<Array<PartyEmailCreateInput>>;
  delete?: Maybe<Array<PartyEmailWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PartyEmailScalarWhereInput>>;
  disconnect?: Maybe<Array<PartyEmailWhereUniqueInput>>;
  set?: Maybe<Array<PartyEmailWhereUniqueInput>>;
  update?: Maybe<Array<PartyEmailUpdateWithWhereUniqueNestedInput>>;
  updateMany?: Maybe<Array<PartyEmailUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PartyEmailUpsertWithWhereUniqueNestedInput>>;
};

export type PartyEmailUpdateManyMutationInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyEmailUpdateManyWithWhereNestedInput = {
  data: PartyEmailUpdateManyDataInput;
  where: PartyEmailScalarWhereInput;
};

export type PartyEmailUpdateWithWhereUniqueNestedInput = {
  data: PartyEmailUpdateDataInput;
  where: PartyEmailWhereUniqueInput;
};

export type PartyEmailUpsertWithWhereUniqueNestedInput = {
  create: PartyEmailCreateInput;
  update: PartyEmailUpdateDataInput;
  where: PartyEmailWhereUniqueInput;
};

export type PartyEmailWhereInput = {
  AND?: Maybe<Array<PartyEmailWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPrimary_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<PartyEmailWhereInput>>;
  OR?: Maybe<Array<PartyEmailWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PartyEmailWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PartyPhone = {
  __typename?: 'PartyPhone';
  createdAt: Scalars['DateTime'];
  fromDate: Scalars['DateTime'];
  id: Scalars['ID'];
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type PartyPhoneConnection = {
  __typename?: 'PartyPhoneConnection';
  aggregate: AggregatePartyPhone;
  edges: Array<PartyPhoneEdge>;
  pageInfo: PageInfo;
};

export type PartyPhoneCreateInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyPhoneCreateManyInput = {
  connect?: Maybe<Array<PartyPhoneWhereUniqueInput>>;
  create?: Maybe<Array<PartyPhoneCreateInput>>;
};

export type PartyPhoneEdge = {
  __typename?: 'PartyPhoneEdge';
  cursor: Scalars['String'];
  node: PartyPhone;
};

export enum PartyPhoneOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FromDateAsc = 'fromDate_ASC',
  FromDateDesc = 'fromDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsPrimaryAsc = 'isPrimary_ASC',
  IsPrimaryDesc = 'isPrimary_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  PayloadAsc = 'payload_ASC',
  PayloadDesc = 'payload_DESC',
  ThroughDateAsc = 'throughDate_ASC',
  ThroughDateDesc = 'throughDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PartyPhoneScalarWhereInput = {
  AND?: Maybe<Array<PartyPhoneScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPrimary_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<PartyPhoneScalarWhereInput>>;
  OR?: Maybe<Array<PartyPhoneScalarWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PartyPhoneUpdateDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyPhoneUpdateInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyPhoneUpdateManyDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyPhoneUpdateManyInput = {
  connect?: Maybe<Array<PartyPhoneWhereUniqueInput>>;
  create?: Maybe<Array<PartyPhoneCreateInput>>;
  delete?: Maybe<Array<PartyPhoneWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PartyPhoneScalarWhereInput>>;
  disconnect?: Maybe<Array<PartyPhoneWhereUniqueInput>>;
  set?: Maybe<Array<PartyPhoneWhereUniqueInput>>;
  update?: Maybe<Array<PartyPhoneUpdateWithWhereUniqueNestedInput>>;
  updateMany?: Maybe<Array<PartyPhoneUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PartyPhoneUpsertWithWhereUniqueNestedInput>>;
};

export type PartyPhoneUpdateManyMutationInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyPhoneUpdateManyWithWhereNestedInput = {
  data: PartyPhoneUpdateManyDataInput;
  where: PartyPhoneScalarWhereInput;
};

export type PartyPhoneUpdateWithWhereUniqueNestedInput = {
  data: PartyPhoneUpdateDataInput;
  where: PartyPhoneWhereUniqueInput;
};

export type PartyPhoneUpsertWithWhereUniqueNestedInput = {
  create: PartyPhoneCreateInput;
  update: PartyPhoneUpdateDataInput;
  where: PartyPhoneWhereUniqueInput;
};

export type PartyPhoneWhereInput = {
  AND?: Maybe<Array<PartyPhoneWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPrimary_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<PartyPhoneWhereInput>>;
  OR?: Maybe<Array<PartyPhoneWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PartyPhoneWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PartyRole = {
  __typename?: 'PartyRole';
  createdAt: Scalars['DateTime'];
  fromDate: Scalars['DateTime'];
  id: Scalars['ID'];
  party: PartyAccount;
  resource: Organization;
  roleType: PartyRoleType;
  throughDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type PartyRoleConnection = {
  __typename?: 'PartyRoleConnection';
  aggregate: AggregatePartyRole;
  edges: Array<PartyRoleEdge>;
  pageInfo: PageInfo;
};

export type PartyRoleCreateInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  party: PartyAccountCreateOneWithoutRolesInput;
  resource: OrganizationCreateOneWithoutPartiesInput;
  roleType: PartyRoleTypeCreateOneInput;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyRoleCreateManyWithoutPartyInput = {
  connect?: Maybe<Array<PartyRoleWhereUniqueInput>>;
  create?: Maybe<Array<PartyRoleCreateWithoutPartyInput>>;
};

export type PartyRoleCreateManyWithoutResourceInput = {
  connect?: Maybe<Array<PartyRoleWhereUniqueInput>>;
  create?: Maybe<Array<PartyRoleCreateWithoutResourceInput>>;
};

export type PartyRoleCreateWithoutPartyInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  resource: OrganizationCreateOneWithoutPartiesInput;
  roleType: PartyRoleTypeCreateOneInput;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyRoleCreateWithoutResourceInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  party: PartyAccountCreateOneWithoutRolesInput;
  roleType: PartyRoleTypeCreateOneInput;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyRoleEdge = {
  __typename?: 'PartyRoleEdge';
  cursor: Scalars['String'];
  node: PartyRole;
};

export enum PartyRoleOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FromDateAsc = 'fromDate_ASC',
  FromDateDesc = 'fromDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ThroughDateAsc = 'throughDate_ASC',
  ThroughDateDesc = 'throughDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PartyRoleScalarWhereInput = {
  AND?: Maybe<Array<PartyRoleScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<PartyRoleScalarWhereInput>>;
  OR?: Maybe<Array<PartyRoleScalarWhereInput>>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PartyRoleType = {
  __typename?: 'PartyRoleType';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  payload: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PartyRoleTypeConnection = {
  __typename?: 'PartyRoleTypeConnection';
  aggregate: AggregatePartyRoleType;
  edges: Array<PartyRoleTypeEdge>;
  pageInfo: PageInfo;
};

export type PartyRoleTypeCreateInput = {
  id?: Maybe<Scalars['ID']>;
  payload: Scalars['String'];
};

export type PartyRoleTypeCreateOneInput = {
  connect?: Maybe<PartyRoleTypeWhereUniqueInput>;
  create?: Maybe<PartyRoleTypeCreateInput>;
};

export type PartyRoleTypeEdge = {
  __typename?: 'PartyRoleTypeEdge';
  cursor: Scalars['String'];
  node: PartyRoleType;
};

export enum PartyRoleTypeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PayloadAsc = 'payload_ASC',
  PayloadDesc = 'payload_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PartyRoleTypeUpdateDataInput = {
  payload?: Maybe<Scalars['String']>;
};

export type PartyRoleTypeUpdateInput = {
  payload?: Maybe<Scalars['String']>;
};

export type PartyRoleTypeUpdateManyMutationInput = {
  payload?: Maybe<Scalars['String']>;
};

export type PartyRoleTypeUpdateOneRequiredInput = {
  connect?: Maybe<PartyRoleTypeWhereUniqueInput>;
  create?: Maybe<PartyRoleTypeCreateInput>;
  update?: Maybe<PartyRoleTypeUpdateDataInput>;
  upsert?: Maybe<PartyRoleTypeUpsertNestedInput>;
};

export type PartyRoleTypeUpsertNestedInput = {
  create: PartyRoleTypeCreateInput;
  update: PartyRoleTypeUpdateDataInput;
};

export type PartyRoleTypeWhereInput = {
  AND?: Maybe<Array<PartyRoleTypeWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<PartyRoleTypeWhereInput>>;
  OR?: Maybe<Array<PartyRoleTypeWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PartyRoleTypeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  payload?: Maybe<Scalars['String']>;
};

export type PartyRoleUpdateInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  party?: Maybe<PartyAccountUpdateOneRequiredWithoutRolesInput>;
  resource?: Maybe<OrganizationUpdateOneRequiredWithoutPartiesInput>;
  roleType?: Maybe<PartyRoleTypeUpdateOneRequiredInput>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyRoleUpdateManyDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyRoleUpdateManyMutationInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyRoleUpdateManyWithoutPartyInput = {
  connect?: Maybe<Array<PartyRoleWhereUniqueInput>>;
  create?: Maybe<Array<PartyRoleCreateWithoutPartyInput>>;
  delete?: Maybe<Array<PartyRoleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PartyRoleScalarWhereInput>>;
  disconnect?: Maybe<Array<PartyRoleWhereUniqueInput>>;
  set?: Maybe<Array<PartyRoleWhereUniqueInput>>;
  update?: Maybe<Array<PartyRoleUpdateWithWhereUniqueWithoutPartyInput>>;
  updateMany?: Maybe<Array<PartyRoleUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PartyRoleUpsertWithWhereUniqueWithoutPartyInput>>;
};

export type PartyRoleUpdateManyWithoutResourceInput = {
  connect?: Maybe<Array<PartyRoleWhereUniqueInput>>;
  create?: Maybe<Array<PartyRoleCreateWithoutResourceInput>>;
  delete?: Maybe<Array<PartyRoleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PartyRoleScalarWhereInput>>;
  disconnect?: Maybe<Array<PartyRoleWhereUniqueInput>>;
  set?: Maybe<Array<PartyRoleWhereUniqueInput>>;
  update?: Maybe<Array<PartyRoleUpdateWithWhereUniqueWithoutResourceInput>>;
  updateMany?: Maybe<Array<PartyRoleUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PartyRoleUpsertWithWhereUniqueWithoutResourceInput>>;
};

export type PartyRoleUpdateManyWithWhereNestedInput = {
  data: PartyRoleUpdateManyDataInput;
  where: PartyRoleScalarWhereInput;
};

export type PartyRoleUpdateWithoutPartyDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  resource?: Maybe<OrganizationUpdateOneRequiredWithoutPartiesInput>;
  roleType?: Maybe<PartyRoleTypeUpdateOneRequiredInput>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyRoleUpdateWithoutResourceDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  party?: Maybe<PartyAccountUpdateOneRequiredWithoutRolesInput>;
  roleType?: Maybe<PartyRoleTypeUpdateOneRequiredInput>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PartyRoleUpdateWithWhereUniqueWithoutPartyInput = {
  data: PartyRoleUpdateWithoutPartyDataInput;
  where: PartyRoleWhereUniqueInput;
};

export type PartyRoleUpdateWithWhereUniqueWithoutResourceInput = {
  data: PartyRoleUpdateWithoutResourceDataInput;
  where: PartyRoleWhereUniqueInput;
};

export type PartyRoleUpsertWithWhereUniqueWithoutPartyInput = {
  create: PartyRoleCreateWithoutPartyInput;
  update: PartyRoleUpdateWithoutPartyDataInput;
  where: PartyRoleWhereUniqueInput;
};

export type PartyRoleUpsertWithWhereUniqueWithoutResourceInput = {
  create: PartyRoleCreateWithoutResourceInput;
  update: PartyRoleUpdateWithoutResourceDataInput;
  where: PartyRoleWhereUniqueInput;
};

export type PartyRoleWhereInput = {
  AND?: Maybe<Array<PartyRoleWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<PartyRoleWhereInput>>;
  OR?: Maybe<Array<PartyRoleWhereInput>>;
  party?: Maybe<PartyAccountWhereInput>;
  resource?: Maybe<OrganizationWhereInput>;
  roleType?: Maybe<PartyRoleTypeWhereInput>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PartyRoleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Person = {
  __typename?: 'Person';
  account?: Maybe<PartyAccount>;
  affiliation?: Maybe<Array<PersonOrganizationAffiliation>>;
  avatar?: Maybe<Array<PersonAvatar>>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Array<PartyEmail>>;
  id: Scalars['ID'];
  metadata: PersonMetaData;
  name?: Maybe<Array<PersonName>>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<Array<PartyPhone>>;
  updatedAt: Scalars['DateTime'];
};

export type PersonAffiliationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonOrganizationAffiliationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonOrganizationAffiliationWhereInput>;
};

export type PersonAvatarArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonAvatarOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonAvatarWhereInput>;
};

export type PersonEmailArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyEmailOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyEmailWhereInput>;
};

export type PersonNameArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonNameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonNameWhereInput>;
};

export type PersonPhoneArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyPhoneOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyPhoneWhereInput>;
};

export type PersonAvatar = {
  __typename?: 'PersonAvatar';
  createdAt: Scalars['DateTime'];
  fromDate: Scalars['DateTime'];
  id: Scalars['ID'];
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload: Scalars['String'];
  person: Person;
  throughDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type PersonAvatarConnection = {
  __typename?: 'PersonAvatarConnection';
  aggregate: AggregatePersonAvatar;
  edges: Array<PersonAvatarEdge>;
  pageInfo: PageInfo;
};

export type PersonAvatarCreateInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload: Scalars['String'];
  person: PersonCreateOneWithoutAvatarInput;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonAvatarCreateManyWithoutPersonInput = {
  connect?: Maybe<Array<PersonAvatarWhereUniqueInput>>;
  create?: Maybe<Array<PersonAvatarCreateWithoutPersonInput>>;
};

export type PersonAvatarCreateWithoutPersonInput = {
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload: Scalars['String'];
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonAvatarEdge = {
  __typename?: 'PersonAvatarEdge';
  cursor: Scalars['String'];
  node: PersonAvatar;
};

export enum PersonAvatarOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FromDateAsc = 'fromDate_ASC',
  FromDateDesc = 'fromDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsPrimaryAsc = 'isPrimary_ASC',
  IsPrimaryDesc = 'isPrimary_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  PayloadAsc = 'payload_ASC',
  PayloadDesc = 'payload_DESC',
  ThroughDateAsc = 'throughDate_ASC',
  ThroughDateDesc = 'throughDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PersonAvatarScalarWhereInput = {
  AND?: Maybe<Array<PersonAvatarScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPrimary_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<PersonAvatarScalarWhereInput>>;
  OR?: Maybe<Array<PersonAvatarScalarWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PersonAvatarUpdateInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  person?: Maybe<PersonUpdateOneRequiredWithoutAvatarInput>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonAvatarUpdateManyDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonAvatarUpdateManyMutationInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonAvatarUpdateManyWithoutPersonInput = {
  connect?: Maybe<Array<PersonAvatarWhereUniqueInput>>;
  create?: Maybe<Array<PersonAvatarCreateWithoutPersonInput>>;
  delete?: Maybe<Array<PersonAvatarWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PersonAvatarScalarWhereInput>>;
  disconnect?: Maybe<Array<PersonAvatarWhereUniqueInput>>;
  set?: Maybe<Array<PersonAvatarWhereUniqueInput>>;
  update?: Maybe<Array<PersonAvatarUpdateWithWhereUniqueWithoutPersonInput>>;
  updateMany?: Maybe<Array<PersonAvatarUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PersonAvatarUpsertWithWhereUniqueWithoutPersonInput>>;
};

export type PersonAvatarUpdateManyWithWhereNestedInput = {
  data: PersonAvatarUpdateManyDataInput;
  where: PersonAvatarScalarWhereInput;
};

export type PersonAvatarUpdateWithoutPersonDataInput = {
  fromDate?: Maybe<Scalars['DateTime']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonAvatarUpdateWithWhereUniqueWithoutPersonInput = {
  data: PersonAvatarUpdateWithoutPersonDataInput;
  where: PersonAvatarWhereUniqueInput;
};

export type PersonAvatarUpsertWithWhereUniqueWithoutPersonInput = {
  create: PersonAvatarCreateWithoutPersonInput;
  update: PersonAvatarUpdateWithoutPersonDataInput;
  where: PersonAvatarWhereUniqueInput;
};

export type PersonAvatarWhereInput = {
  AND?: Maybe<Array<PersonAvatarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isPrimary_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<PersonAvatarWhereInput>>;
  OR?: Maybe<Array<PersonAvatarWhereInput>>;
  payload?: Maybe<Scalars['String']>;
  payload_contains?: Maybe<Scalars['String']>;
  payload_ends_with?: Maybe<Scalars['String']>;
  payload_gt?: Maybe<Scalars['String']>;
  payload_gte?: Maybe<Scalars['String']>;
  payload_in?: Maybe<Array<Scalars['String']>>;
  payload_lt?: Maybe<Scalars['String']>;
  payload_lte?: Maybe<Scalars['String']>;
  payload_not?: Maybe<Scalars['String']>;
  payload_not_contains?: Maybe<Scalars['String']>;
  payload_not_ends_with?: Maybe<Scalars['String']>;
  payload_not_in?: Maybe<Array<Scalars['String']>>;
  payload_not_starts_with?: Maybe<Scalars['String']>;
  payload_starts_with?: Maybe<Scalars['String']>;
  person?: Maybe<PersonWhereInput>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PersonAvatarWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PersonConnection = {
  __typename?: 'PersonConnection';
  aggregate: AggregatePerson;
  edges: Array<PersonEdge>;
  pageInfo: PageInfo;
};

export type PersonCreateInput = {
  account?: Maybe<PartyAccountCreateOneWithoutPersonInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutPersonInput
  >;
  avatar?: Maybe<PersonAvatarCreateManyWithoutPersonInput>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  metadata: PersonMetaDataCreateOneWithoutPersonInput;
  name?: Maybe<PersonNameCreateManyWithoutPersonInput>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
};

export type PersonCreateOneWithoutAccountInput = {
  connect?: Maybe<PersonWhereUniqueInput>;
  create?: Maybe<PersonCreateWithoutAccountInput>;
};

export type PersonCreateOneWithoutAffiliationInput = {
  connect?: Maybe<PersonWhereUniqueInput>;
  create?: Maybe<PersonCreateWithoutAffiliationInput>;
};

export type PersonCreateOneWithoutAvatarInput = {
  connect?: Maybe<PersonWhereUniqueInput>;
  create?: Maybe<PersonCreateWithoutAvatarInput>;
};

export type PersonCreateOneWithoutMetadataInput = {
  connect?: Maybe<PersonWhereUniqueInput>;
  create?: Maybe<PersonCreateWithoutMetadataInput>;
};

export type PersonCreateOneWithoutNameInput = {
  connect?: Maybe<PersonWhereUniqueInput>;
  create?: Maybe<PersonCreateWithoutNameInput>;
};

export type PersonCreateWithoutAccountInput = {
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutPersonInput
  >;
  avatar?: Maybe<PersonAvatarCreateManyWithoutPersonInput>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  metadata: PersonMetaDataCreateOneWithoutPersonInput;
  name?: Maybe<PersonNameCreateManyWithoutPersonInput>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
};

export type PersonCreateWithoutAffiliationInput = {
  account?: Maybe<PartyAccountCreateOneWithoutPersonInput>;
  avatar?: Maybe<PersonAvatarCreateManyWithoutPersonInput>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  metadata: PersonMetaDataCreateOneWithoutPersonInput;
  name?: Maybe<PersonNameCreateManyWithoutPersonInput>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
};

export type PersonCreateWithoutAvatarInput = {
  account?: Maybe<PartyAccountCreateOneWithoutPersonInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutPersonInput
  >;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  metadata: PersonMetaDataCreateOneWithoutPersonInput;
  name?: Maybe<PersonNameCreateManyWithoutPersonInput>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
};

export type PersonCreateWithoutMetadataInput = {
  account?: Maybe<PartyAccountCreateOneWithoutPersonInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutPersonInput
  >;
  avatar?: Maybe<PersonAvatarCreateManyWithoutPersonInput>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<PersonNameCreateManyWithoutPersonInput>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
};

export type PersonCreateWithoutNameInput = {
  account?: Maybe<PartyAccountCreateOneWithoutPersonInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationCreateManyWithoutPersonInput
  >;
  avatar?: Maybe<PersonAvatarCreateManyWithoutPersonInput>;
  email?: Maybe<PartyEmailCreateManyInput>;
  id?: Maybe<Scalars['ID']>;
  metadata: PersonMetaDataCreateOneWithoutPersonInput;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneCreateManyInput>;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String'];
  node: Person;
};

export type PersonMetaData = {
  __typename?: 'PersonMetaData';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isApproved: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  isPendingReview: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  isRejected: Scalars['Boolean'];
  isUnverified: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  person: Person;
  updatedAt: Scalars['DateTime'];
};

export type PersonMetaDataConnection = {
  __typename?: 'PersonMetaDataConnection';
  aggregate: AggregatePersonMetaData;
  edges: Array<PersonMetaDataEdge>;
  pageInfo: PageInfo;
};

export type PersonMetaDataCreateInput = {
  id?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  person: PersonCreateOneWithoutMetadataInput;
};

export type PersonMetaDataCreateOneWithoutPersonInput = {
  connect?: Maybe<PersonMetaDataWhereUniqueInput>;
  create?: Maybe<PersonMetaDataCreateWithoutPersonInput>;
};

export type PersonMetaDataCreateWithoutPersonInput = {
  id?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type PersonMetaDataEdge = {
  __typename?: 'PersonMetaDataEdge';
  cursor: Scalars['String'];
  node: PersonMetaData;
};

export enum PersonMetaDataOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsApprovedAsc = 'isApproved_ASC',
  IsApprovedDesc = 'isApproved_DESC',
  IsDraftAsc = 'isDraft_ASC',
  IsDraftDesc = 'isDraft_DESC',
  IsPendingReviewAsc = 'isPendingReview_ASC',
  IsPendingReviewDesc = 'isPendingReview_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  IsRejectedAsc = 'isRejected_ASC',
  IsRejectedDesc = 'isRejected_DESC',
  IsUnverifiedAsc = 'isUnverified_ASC',
  IsUnverifiedDesc = 'isUnverified_DESC',
  IsVerifiedAsc = 'isVerified_ASC',
  IsVerifiedDesc = 'isVerified_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PersonMetaDataUpdateInput = {
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  person?: Maybe<PersonUpdateOneRequiredWithoutMetadataInput>;
};

export type PersonMetaDataUpdateManyMutationInput = {
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type PersonMetaDataUpdateOneRequiredWithoutPersonInput = {
  connect?: Maybe<PersonMetaDataWhereUniqueInput>;
  create?: Maybe<PersonMetaDataCreateWithoutPersonInput>;
  update?: Maybe<PersonMetaDataUpdateWithoutPersonDataInput>;
  upsert?: Maybe<PersonMetaDataUpsertWithoutPersonInput>;
};

export type PersonMetaDataUpdateWithoutPersonDataInput = {
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type PersonMetaDataUpsertWithoutPersonInput = {
  create: PersonMetaDataCreateWithoutPersonInput;
  update: PersonMetaDataUpdateWithoutPersonDataInput;
};

export type PersonMetaDataWhereInput = {
  AND?: Maybe<Array<PersonMetaDataWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isApproved_not?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isDraft_not?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPendingReview_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isRejected_not?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isUnverified_not?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  isVerified_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<PersonMetaDataWhereInput>>;
  OR?: Maybe<Array<PersonMetaDataWhereInput>>;
  person?: Maybe<PersonWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PersonMetaDataWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PersonName = {
  __typename?: 'PersonName';
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  fromDate: Scalars['DateTime'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  middleInitial?: Maybe<Scalars['String']>;
  person?: Maybe<Person>;
  suffix?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type PersonNameConnection = {
  __typename?: 'PersonNameConnection';
  aggregate: AggregatePersonName;
  edges: Array<PersonNameEdge>;
  pageInfo: PageInfo;
};

export type PersonNameCreateInput = {
  firstName: Scalars['String'];
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  lastName: Scalars['String'];
  middleInitial?: Maybe<Scalars['String']>;
  person?: Maybe<PersonCreateOneWithoutNameInput>;
  suffix?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonNameCreateManyWithoutPersonInput = {
  connect?: Maybe<Array<PersonNameWhereUniqueInput>>;
  create?: Maybe<Array<PersonNameCreateWithoutPersonInput>>;
};

export type PersonNameCreateWithoutPersonInput = {
  firstName: Scalars['String'];
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  lastName: Scalars['String'];
  middleInitial?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonNameEdge = {
  __typename?: 'PersonNameEdge';
  cursor: Scalars['String'];
  node: PersonName;
};

export enum PersonNameOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  FromDateAsc = 'fromDate_ASC',
  FromDateDesc = 'fromDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  MiddleInitialAsc = 'middleInitial_ASC',
  MiddleInitialDesc = 'middleInitial_DESC',
  SuffixAsc = 'suffix_ASC',
  SuffixDesc = 'suffix_DESC',
  ThroughDateAsc = 'throughDate_ASC',
  ThroughDateDesc = 'throughDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PersonNameScalarWhereInput = {
  AND?: Maybe<Array<PersonNameScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  firstName?: Maybe<Scalars['String']>;
  firstName_contains?: Maybe<Scalars['String']>;
  firstName_ends_with?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Scalars['String']>>;
  firstName_lt?: Maybe<Scalars['String']>;
  firstName_lte?: Maybe<Scalars['String']>;
  firstName_not?: Maybe<Scalars['String']>;
  firstName_not_contains?: Maybe<Scalars['String']>;
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  firstName_starts_with?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_contains?: Maybe<Scalars['String']>;
  lastName_ends_with?: Maybe<Scalars['String']>;
  lastName_gt?: Maybe<Scalars['String']>;
  lastName_gte?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Scalars['String']>>;
  lastName_lt?: Maybe<Scalars['String']>;
  lastName_lte?: Maybe<Scalars['String']>;
  lastName_not?: Maybe<Scalars['String']>;
  lastName_not_contains?: Maybe<Scalars['String']>;
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  lastName_starts_with?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  middleInitial_contains?: Maybe<Scalars['String']>;
  middleInitial_ends_with?: Maybe<Scalars['String']>;
  middleInitial_gt?: Maybe<Scalars['String']>;
  middleInitial_gte?: Maybe<Scalars['String']>;
  middleInitial_in?: Maybe<Array<Scalars['String']>>;
  middleInitial_lt?: Maybe<Scalars['String']>;
  middleInitial_lte?: Maybe<Scalars['String']>;
  middleInitial_not?: Maybe<Scalars['String']>;
  middleInitial_not_contains?: Maybe<Scalars['String']>;
  middleInitial_not_ends_with?: Maybe<Scalars['String']>;
  middleInitial_not_in?: Maybe<Array<Scalars['String']>>;
  middleInitial_not_starts_with?: Maybe<Scalars['String']>;
  middleInitial_starts_with?: Maybe<Scalars['String']>;
  NOT?: Maybe<Array<PersonNameScalarWhereInput>>;
  OR?: Maybe<Array<PersonNameScalarWhereInput>>;
  suffix?: Maybe<Scalars['String']>;
  suffix_contains?: Maybe<Scalars['String']>;
  suffix_ends_with?: Maybe<Scalars['String']>;
  suffix_gt?: Maybe<Scalars['String']>;
  suffix_gte?: Maybe<Scalars['String']>;
  suffix_in?: Maybe<Array<Scalars['String']>>;
  suffix_lt?: Maybe<Scalars['String']>;
  suffix_lte?: Maybe<Scalars['String']>;
  suffix_not?: Maybe<Scalars['String']>;
  suffix_not_contains?: Maybe<Scalars['String']>;
  suffix_not_ends_with?: Maybe<Scalars['String']>;
  suffix_not_in?: Maybe<Array<Scalars['String']>>;
  suffix_not_starts_with?: Maybe<Scalars['String']>;
  suffix_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PersonNameUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  person?: Maybe<PersonUpdateOneWithoutNameInput>;
  suffix?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonNameUpdateManyDataInput = {
  firstName?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonNameUpdateManyMutationInput = {
  firstName?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonNameUpdateManyWithoutPersonInput = {
  connect?: Maybe<Array<PersonNameWhereUniqueInput>>;
  create?: Maybe<Array<PersonNameCreateWithoutPersonInput>>;
  delete?: Maybe<Array<PersonNameWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PersonNameScalarWhereInput>>;
  disconnect?: Maybe<Array<PersonNameWhereUniqueInput>>;
  set?: Maybe<Array<PersonNameWhereUniqueInput>>;
  update?: Maybe<Array<PersonNameUpdateWithWhereUniqueWithoutPersonInput>>;
  updateMany?: Maybe<Array<PersonNameUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PersonNameUpsertWithWhereUniqueWithoutPersonInput>>;
};

export type PersonNameUpdateManyWithWhereNestedInput = {
  data: PersonNameUpdateManyDataInput;
  where: PersonNameScalarWhereInput;
};

export type PersonNameUpdateWithoutPersonDataInput = {
  firstName?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
};

export type PersonNameUpdateWithWhereUniqueWithoutPersonInput = {
  data: PersonNameUpdateWithoutPersonDataInput;
  where: PersonNameWhereUniqueInput;
};

export type PersonNameUpsertWithWhereUniqueWithoutPersonInput = {
  create: PersonNameCreateWithoutPersonInput;
  update: PersonNameUpdateWithoutPersonDataInput;
  where: PersonNameWhereUniqueInput;
};

export type PersonNameWhereInput = {
  AND?: Maybe<Array<PersonNameWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  firstName?: Maybe<Scalars['String']>;
  firstName_contains?: Maybe<Scalars['String']>;
  firstName_ends_with?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Scalars['String']>>;
  firstName_lt?: Maybe<Scalars['String']>;
  firstName_lte?: Maybe<Scalars['String']>;
  firstName_not?: Maybe<Scalars['String']>;
  firstName_not_contains?: Maybe<Scalars['String']>;
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  firstName_starts_with?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_contains?: Maybe<Scalars['String']>;
  lastName_ends_with?: Maybe<Scalars['String']>;
  lastName_gt?: Maybe<Scalars['String']>;
  lastName_gte?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Scalars['String']>>;
  lastName_lt?: Maybe<Scalars['String']>;
  lastName_lte?: Maybe<Scalars['String']>;
  lastName_not?: Maybe<Scalars['String']>;
  lastName_not_contains?: Maybe<Scalars['String']>;
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  lastName_starts_with?: Maybe<Scalars['String']>;
  middleInitial?: Maybe<Scalars['String']>;
  middleInitial_contains?: Maybe<Scalars['String']>;
  middleInitial_ends_with?: Maybe<Scalars['String']>;
  middleInitial_gt?: Maybe<Scalars['String']>;
  middleInitial_gte?: Maybe<Scalars['String']>;
  middleInitial_in?: Maybe<Array<Scalars['String']>>;
  middleInitial_lt?: Maybe<Scalars['String']>;
  middleInitial_lte?: Maybe<Scalars['String']>;
  middleInitial_not?: Maybe<Scalars['String']>;
  middleInitial_not_contains?: Maybe<Scalars['String']>;
  middleInitial_not_ends_with?: Maybe<Scalars['String']>;
  middleInitial_not_in?: Maybe<Array<Scalars['String']>>;
  middleInitial_not_starts_with?: Maybe<Scalars['String']>;
  middleInitial_starts_with?: Maybe<Scalars['String']>;
  NOT?: Maybe<Array<PersonNameWhereInput>>;
  OR?: Maybe<Array<PersonNameWhereInput>>;
  person?: Maybe<PersonWhereInput>;
  suffix?: Maybe<Scalars['String']>;
  suffix_contains?: Maybe<Scalars['String']>;
  suffix_ends_with?: Maybe<Scalars['String']>;
  suffix_gt?: Maybe<Scalars['String']>;
  suffix_gte?: Maybe<Scalars['String']>;
  suffix_in?: Maybe<Array<Scalars['String']>>;
  suffix_lt?: Maybe<Scalars['String']>;
  suffix_lte?: Maybe<Scalars['String']>;
  suffix_not?: Maybe<Scalars['String']>;
  suffix_not_contains?: Maybe<Scalars['String']>;
  suffix_not_ends_with?: Maybe<Scalars['String']>;
  suffix_not_in?: Maybe<Array<Scalars['String']>>;
  suffix_not_starts_with?: Maybe<Scalars['String']>;
  suffix_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PersonNameWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum PersonOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PersonalTitleAsc = 'personalTitle_ASC',
  PersonalTitleDesc = 'personalTitle_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PersonOrganizationAffiliation = {
  __typename?: 'PersonOrganizationAffiliation';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  fromDate: Scalars['DateTime'];
  id: Scalars['ID'];
  metadata?: Maybe<PersonOrganizationAffiliationMetaData>;
  organization: Organization;
  person: Person;
  role?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type PersonOrganizationAffiliationConnection = {
  __typename?: 'PersonOrganizationAffiliationConnection';
  aggregate: AggregatePersonOrganizationAffiliation;
  edges: Array<PersonOrganizationAffiliationEdge>;
  pageInfo: PageInfo;
};

export type PersonOrganizationAffiliationCreateInput = {
  description?: Maybe<Scalars['String']>;
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  metadata?: Maybe<
    PersonOrganizationAffiliationMetaDataCreateOneWithoutAffiliationInput
  >;
  organization: OrganizationCreateOneWithoutAffiliationInput;
  person: PersonCreateOneWithoutAffiliationInput;
  role?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type PersonOrganizationAffiliationCreateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<PersonOrganizationAffiliationWhereUniqueInput>>;
  create?: Maybe<
    Array<PersonOrganizationAffiliationCreateWithoutOrganizationInput>
  >;
};

export type PersonOrganizationAffiliationCreateManyWithoutPersonInput = {
  connect?: Maybe<Array<PersonOrganizationAffiliationWhereUniqueInput>>;
  create?: Maybe<Array<PersonOrganizationAffiliationCreateWithoutPersonInput>>;
};

export type PersonOrganizationAffiliationCreateOneWithoutMetadataInput = {
  connect?: Maybe<PersonOrganizationAffiliationWhereUniqueInput>;
  create?: Maybe<PersonOrganizationAffiliationCreateWithoutMetadataInput>;
};

export type PersonOrganizationAffiliationCreateWithoutMetadataInput = {
  description?: Maybe<Scalars['String']>;
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  organization: OrganizationCreateOneWithoutAffiliationInput;
  person: PersonCreateOneWithoutAffiliationInput;
  role?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type PersonOrganizationAffiliationCreateWithoutOrganizationInput = {
  description?: Maybe<Scalars['String']>;
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  metadata?: Maybe<
    PersonOrganizationAffiliationMetaDataCreateOneWithoutAffiliationInput
  >;
  person: PersonCreateOneWithoutAffiliationInput;
  role?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type PersonOrganizationAffiliationCreateWithoutPersonInput = {
  description?: Maybe<Scalars['String']>;
  fromDate: Scalars['DateTime'];
  id?: Maybe<Scalars['ID']>;
  metadata?: Maybe<
    PersonOrganizationAffiliationMetaDataCreateOneWithoutAffiliationInput
  >;
  organization: OrganizationCreateOneWithoutAffiliationInput;
  role?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type PersonOrganizationAffiliationEdge = {
  __typename?: 'PersonOrganizationAffiliationEdge';
  cursor: Scalars['String'];
  node: PersonOrganizationAffiliation;
};

export type PersonOrganizationAffiliationMetaData = {
  __typename?: 'PersonOrganizationAffiliationMetaData';
  affiliation: PersonOrganizationAffiliation;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isApproved: Scalars['Boolean'];
  isDraft: Scalars['Boolean'];
  isPendingReview: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  isRejected: Scalars['Boolean'];
  isUnverified: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type PersonOrganizationAffiliationMetaDataConnection = {
  __typename?: 'PersonOrganizationAffiliationMetaDataConnection';
  aggregate: AggregatePersonOrganizationAffiliationMetaData;
  edges: Array<PersonOrganizationAffiliationMetaDataEdge>;
  pageInfo: PageInfo;
};

export type PersonOrganizationAffiliationMetaDataCreateInput = {
  affiliation: PersonOrganizationAffiliationCreateOneWithoutMetadataInput;
  id?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type PersonOrganizationAffiliationMetaDataCreateOneWithoutAffiliationInput = {
  connect?: Maybe<PersonOrganizationAffiliationMetaDataWhereUniqueInput>;
  create?: Maybe<
    PersonOrganizationAffiliationMetaDataCreateWithoutAffiliationInput
  >;
};

export type PersonOrganizationAffiliationMetaDataCreateWithoutAffiliationInput = {
  id?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type PersonOrganizationAffiliationMetaDataEdge = {
  __typename?: 'PersonOrganizationAffiliationMetaDataEdge';
  cursor: Scalars['String'];
  node: PersonOrganizationAffiliationMetaData;
};

export enum PersonOrganizationAffiliationMetaDataOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsApprovedAsc = 'isApproved_ASC',
  IsApprovedDesc = 'isApproved_DESC',
  IsDraftAsc = 'isDraft_ASC',
  IsDraftDesc = 'isDraft_DESC',
  IsPendingReviewAsc = 'isPendingReview_ASC',
  IsPendingReviewDesc = 'isPendingReview_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  IsRejectedAsc = 'isRejected_ASC',
  IsRejectedDesc = 'isRejected_DESC',
  IsUnverifiedAsc = 'isUnverified_ASC',
  IsUnverifiedDesc = 'isUnverified_DESC',
  IsVerifiedAsc = 'isVerified_ASC',
  IsVerifiedDesc = 'isVerified_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PersonOrganizationAffiliationMetaDataUpdateInput = {
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateOneRequiredWithoutMetadataInput
  >;
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type PersonOrganizationAffiliationMetaDataUpdateManyMutationInput = {
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type PersonOrganizationAffiliationMetaDataUpdateOneWithoutAffiliationInput = {
  connect?: Maybe<PersonOrganizationAffiliationMetaDataWhereUniqueInput>;
  create?: Maybe<
    PersonOrganizationAffiliationMetaDataCreateWithoutAffiliationInput
  >;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<
    PersonOrganizationAffiliationMetaDataUpdateWithoutAffiliationDataInput
  >;
  upsert?: Maybe<
    PersonOrganizationAffiliationMetaDataUpsertWithoutAffiliationInput
  >;
};

export type PersonOrganizationAffiliationMetaDataUpdateWithoutAffiliationDataInput = {
  isApproved?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type PersonOrganizationAffiliationMetaDataUpsertWithoutAffiliationInput = {
  create: PersonOrganizationAffiliationMetaDataCreateWithoutAffiliationInput;
  update: PersonOrganizationAffiliationMetaDataUpdateWithoutAffiliationDataInput;
};

export type PersonOrganizationAffiliationMetaDataWhereInput = {
  affiliation?: Maybe<PersonOrganizationAffiliationWhereInput>;
  AND?: Maybe<Array<PersonOrganizationAffiliationMetaDataWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  isApproved_not?: Maybe<Scalars['Boolean']>;
  isDraft?: Maybe<Scalars['Boolean']>;
  isDraft_not?: Maybe<Scalars['Boolean']>;
  isPendingReview?: Maybe<Scalars['Boolean']>;
  isPendingReview_not?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isPublic_not?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isRejected_not?: Maybe<Scalars['Boolean']>;
  isUnverified?: Maybe<Scalars['Boolean']>;
  isUnverified_not?: Maybe<Scalars['Boolean']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  isVerified_not?: Maybe<Scalars['Boolean']>;
  NOT?: Maybe<Array<PersonOrganizationAffiliationMetaDataWhereInput>>;
  OR?: Maybe<Array<PersonOrganizationAffiliationMetaDataWhereInput>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PersonOrganizationAffiliationMetaDataWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum PersonOrganizationAffiliationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FromDateAsc = 'fromDate_ASC',
  FromDateDesc = 'fromDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  ThroughDateAsc = 'throughDate_ASC',
  ThroughDateDesc = 'throughDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PersonOrganizationAffiliationScalarWhereInput = {
  AND?: Maybe<Array<PersonOrganizationAffiliationScalarWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<PersonOrganizationAffiliationScalarWhereInput>>;
  OR?: Maybe<Array<PersonOrganizationAffiliationScalarWhereInput>>;
  role?: Maybe<Scalars['String']>;
  role_contains?: Maybe<Scalars['String']>;
  role_ends_with?: Maybe<Scalars['String']>;
  role_gt?: Maybe<Scalars['String']>;
  role_gte?: Maybe<Scalars['String']>;
  role_in?: Maybe<Array<Scalars['String']>>;
  role_lt?: Maybe<Scalars['String']>;
  role_lte?: Maybe<Scalars['String']>;
  role_not?: Maybe<Scalars['String']>;
  role_not_contains?: Maybe<Scalars['String']>;
  role_not_ends_with?: Maybe<Scalars['String']>;
  role_not_in?: Maybe<Array<Scalars['String']>>;
  role_not_starts_with?: Maybe<Scalars['String']>;
  role_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PersonOrganizationAffiliationUpdateInput = {
  description?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  metadata?: Maybe<
    PersonOrganizationAffiliationMetaDataUpdateOneWithoutAffiliationInput
  >;
  organization?: Maybe<OrganizationUpdateOneRequiredWithoutAffiliationInput>;
  person?: Maybe<PersonUpdateOneRequiredWithoutAffiliationInput>;
  role?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type PersonOrganizationAffiliationUpdateManyDataInput = {
  description?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  role?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type PersonOrganizationAffiliationUpdateManyMutationInput = {
  description?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  role?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput = {
  connect?: Maybe<Array<PersonOrganizationAffiliationWhereUniqueInput>>;
  create?: Maybe<
    Array<PersonOrganizationAffiliationCreateWithoutOrganizationInput>
  >;
  delete?: Maybe<Array<PersonOrganizationAffiliationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PersonOrganizationAffiliationScalarWhereInput>>;
  disconnect?: Maybe<Array<PersonOrganizationAffiliationWhereUniqueInput>>;
  set?: Maybe<Array<PersonOrganizationAffiliationWhereUniqueInput>>;
  update?: Maybe<
    Array<
      PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutOrganizationInput
    >
  >;
  updateMany?: Maybe<
    Array<PersonOrganizationAffiliationUpdateManyWithWhereNestedInput>
  >;
  upsert?: Maybe<
    Array<
      PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutOrganizationInput
    >
  >;
};

export type PersonOrganizationAffiliationUpdateManyWithoutPersonInput = {
  connect?: Maybe<Array<PersonOrganizationAffiliationWhereUniqueInput>>;
  create?: Maybe<Array<PersonOrganizationAffiliationCreateWithoutPersonInput>>;
  delete?: Maybe<Array<PersonOrganizationAffiliationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PersonOrganizationAffiliationScalarWhereInput>>;
  disconnect?: Maybe<Array<PersonOrganizationAffiliationWhereUniqueInput>>;
  set?: Maybe<Array<PersonOrganizationAffiliationWhereUniqueInput>>;
  update?: Maybe<
    Array<PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutPersonInput>
  >;
  updateMany?: Maybe<
    Array<PersonOrganizationAffiliationUpdateManyWithWhereNestedInput>
  >;
  upsert?: Maybe<
    Array<PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutPersonInput>
  >;
};

export type PersonOrganizationAffiliationUpdateManyWithWhereNestedInput = {
  data: PersonOrganizationAffiliationUpdateManyDataInput;
  where: PersonOrganizationAffiliationScalarWhereInput;
};

export type PersonOrganizationAffiliationUpdateOneRequiredWithoutMetadataInput = {
  connect?: Maybe<PersonOrganizationAffiliationWhereUniqueInput>;
  create?: Maybe<PersonOrganizationAffiliationCreateWithoutMetadataInput>;
  update?: Maybe<PersonOrganizationAffiliationUpdateWithoutMetadataDataInput>;
  upsert?: Maybe<PersonOrganizationAffiliationUpsertWithoutMetadataInput>;
};

export type PersonOrganizationAffiliationUpdateWithoutMetadataDataInput = {
  description?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  organization?: Maybe<OrganizationUpdateOneRequiredWithoutAffiliationInput>;
  person?: Maybe<PersonUpdateOneRequiredWithoutAffiliationInput>;
  role?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type PersonOrganizationAffiliationUpdateWithoutOrganizationDataInput = {
  description?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  metadata?: Maybe<
    PersonOrganizationAffiliationMetaDataUpdateOneWithoutAffiliationInput
  >;
  person?: Maybe<PersonUpdateOneRequiredWithoutAffiliationInput>;
  role?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type PersonOrganizationAffiliationUpdateWithoutPersonDataInput = {
  description?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  metadata?: Maybe<
    PersonOrganizationAffiliationMetaDataUpdateOneWithoutAffiliationInput
  >;
  organization?: Maybe<OrganizationUpdateOneRequiredWithoutAffiliationInput>;
  role?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: PersonOrganizationAffiliationUpdateWithoutOrganizationDataInput;
  where: PersonOrganizationAffiliationWhereUniqueInput;
};

export type PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutPersonInput = {
  data: PersonOrganizationAffiliationUpdateWithoutPersonDataInput;
  where: PersonOrganizationAffiliationWhereUniqueInput;
};

export type PersonOrganizationAffiliationUpsertWithoutMetadataInput = {
  create: PersonOrganizationAffiliationCreateWithoutMetadataInput;
  update: PersonOrganizationAffiliationUpdateWithoutMetadataDataInput;
};

export type PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: PersonOrganizationAffiliationCreateWithoutOrganizationInput;
  update: PersonOrganizationAffiliationUpdateWithoutOrganizationDataInput;
  where: PersonOrganizationAffiliationWhereUniqueInput;
};

export type PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutPersonInput = {
  create: PersonOrganizationAffiliationCreateWithoutPersonInput;
  update: PersonOrganizationAffiliationUpdateWithoutPersonDataInput;
  where: PersonOrganizationAffiliationWhereUniqueInput;
};

export type PersonOrganizationAffiliationWhereInput = {
  AND?: Maybe<Array<PersonOrganizationAffiliationWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  fromDate_gt?: Maybe<Scalars['DateTime']>;
  fromDate_gte?: Maybe<Scalars['DateTime']>;
  fromDate_in?: Maybe<Array<Scalars['DateTime']>>;
  fromDate_lt?: Maybe<Scalars['DateTime']>;
  fromDate_lte?: Maybe<Scalars['DateTime']>;
  fromDate_not?: Maybe<Scalars['DateTime']>;
  fromDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  metadata?: Maybe<PersonOrganizationAffiliationMetaDataWhereInput>;
  NOT?: Maybe<Array<PersonOrganizationAffiliationWhereInput>>;
  OR?: Maybe<Array<PersonOrganizationAffiliationWhereInput>>;
  organization?: Maybe<OrganizationWhereInput>;
  person?: Maybe<PersonWhereInput>;
  role?: Maybe<Scalars['String']>;
  role_contains?: Maybe<Scalars['String']>;
  role_ends_with?: Maybe<Scalars['String']>;
  role_gt?: Maybe<Scalars['String']>;
  role_gte?: Maybe<Scalars['String']>;
  role_in?: Maybe<Array<Scalars['String']>>;
  role_lt?: Maybe<Scalars['String']>;
  role_lte?: Maybe<Scalars['String']>;
  role_not?: Maybe<Scalars['String']>;
  role_not_contains?: Maybe<Scalars['String']>;
  role_not_ends_with?: Maybe<Scalars['String']>;
  role_not_in?: Maybe<Array<Scalars['String']>>;
  role_not_starts_with?: Maybe<Scalars['String']>;
  role_starts_with?: Maybe<Scalars['String']>;
  throughDate?: Maybe<Scalars['DateTime']>;
  throughDate_gt?: Maybe<Scalars['DateTime']>;
  throughDate_gte?: Maybe<Scalars['DateTime']>;
  throughDate_in?: Maybe<Array<Scalars['DateTime']>>;
  throughDate_lt?: Maybe<Scalars['DateTime']>;
  throughDate_lte?: Maybe<Scalars['DateTime']>;
  throughDate_not?: Maybe<Scalars['DateTime']>;
  throughDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PersonOrganizationAffiliationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PersonUpdateInput = {
  account?: Maybe<PartyAccountUpdateOneWithoutPersonInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutPersonInput
  >;
  avatar?: Maybe<PersonAvatarUpdateManyWithoutPersonInput>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  metadata?: Maybe<PersonMetaDataUpdateOneRequiredWithoutPersonInput>;
  name?: Maybe<PersonNameUpdateManyWithoutPersonInput>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
};

export type PersonUpdateManyMutationInput = {
  personalTitle?: Maybe<Scalars['String']>;
};

export type PersonUpdateOneRequiredWithoutAffiliationInput = {
  connect?: Maybe<PersonWhereUniqueInput>;
  create?: Maybe<PersonCreateWithoutAffiliationInput>;
  update?: Maybe<PersonUpdateWithoutAffiliationDataInput>;
  upsert?: Maybe<PersonUpsertWithoutAffiliationInput>;
};

export type PersonUpdateOneRequiredWithoutAvatarInput = {
  connect?: Maybe<PersonWhereUniqueInput>;
  create?: Maybe<PersonCreateWithoutAvatarInput>;
  update?: Maybe<PersonUpdateWithoutAvatarDataInput>;
  upsert?: Maybe<PersonUpsertWithoutAvatarInput>;
};

export type PersonUpdateOneRequiredWithoutMetadataInput = {
  connect?: Maybe<PersonWhereUniqueInput>;
  create?: Maybe<PersonCreateWithoutMetadataInput>;
  update?: Maybe<PersonUpdateWithoutMetadataDataInput>;
  upsert?: Maybe<PersonUpsertWithoutMetadataInput>;
};

export type PersonUpdateOneWithoutAccountInput = {
  connect?: Maybe<PersonWhereUniqueInput>;
  create?: Maybe<PersonCreateWithoutAccountInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PersonUpdateWithoutAccountDataInput>;
  upsert?: Maybe<PersonUpsertWithoutAccountInput>;
};

export type PersonUpdateOneWithoutNameInput = {
  connect?: Maybe<PersonWhereUniqueInput>;
  create?: Maybe<PersonCreateWithoutNameInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PersonUpdateWithoutNameDataInput>;
  upsert?: Maybe<PersonUpsertWithoutNameInput>;
};

export type PersonUpdateWithoutAccountDataInput = {
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutPersonInput
  >;
  avatar?: Maybe<PersonAvatarUpdateManyWithoutPersonInput>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  metadata?: Maybe<PersonMetaDataUpdateOneRequiredWithoutPersonInput>;
  name?: Maybe<PersonNameUpdateManyWithoutPersonInput>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
};

export type PersonUpdateWithoutAffiliationDataInput = {
  account?: Maybe<PartyAccountUpdateOneWithoutPersonInput>;
  avatar?: Maybe<PersonAvatarUpdateManyWithoutPersonInput>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  metadata?: Maybe<PersonMetaDataUpdateOneRequiredWithoutPersonInput>;
  name?: Maybe<PersonNameUpdateManyWithoutPersonInput>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
};

export type PersonUpdateWithoutAvatarDataInput = {
  account?: Maybe<PartyAccountUpdateOneWithoutPersonInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutPersonInput
  >;
  email?: Maybe<PartyEmailUpdateManyInput>;
  metadata?: Maybe<PersonMetaDataUpdateOneRequiredWithoutPersonInput>;
  name?: Maybe<PersonNameUpdateManyWithoutPersonInput>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
};

export type PersonUpdateWithoutMetadataDataInput = {
  account?: Maybe<PartyAccountUpdateOneWithoutPersonInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutPersonInput
  >;
  avatar?: Maybe<PersonAvatarUpdateManyWithoutPersonInput>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  name?: Maybe<PersonNameUpdateManyWithoutPersonInput>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
};

export type PersonUpdateWithoutNameDataInput = {
  account?: Maybe<PartyAccountUpdateOneWithoutPersonInput>;
  affiliation?: Maybe<
    PersonOrganizationAffiliationUpdateManyWithoutPersonInput
  >;
  avatar?: Maybe<PersonAvatarUpdateManyWithoutPersonInput>;
  email?: Maybe<PartyEmailUpdateManyInput>;
  metadata?: Maybe<PersonMetaDataUpdateOneRequiredWithoutPersonInput>;
  personalTitle?: Maybe<Scalars['String']>;
  phone?: Maybe<PartyPhoneUpdateManyInput>;
};

export type PersonUpsertWithoutAccountInput = {
  create: PersonCreateWithoutAccountInput;
  update: PersonUpdateWithoutAccountDataInput;
};

export type PersonUpsertWithoutAffiliationInput = {
  create: PersonCreateWithoutAffiliationInput;
  update: PersonUpdateWithoutAffiliationDataInput;
};

export type PersonUpsertWithoutAvatarInput = {
  create: PersonCreateWithoutAvatarInput;
  update: PersonUpdateWithoutAvatarDataInput;
};

export type PersonUpsertWithoutMetadataInput = {
  create: PersonCreateWithoutMetadataInput;
  update: PersonUpdateWithoutMetadataDataInput;
};

export type PersonUpsertWithoutNameInput = {
  create: PersonCreateWithoutNameInput;
  update: PersonUpdateWithoutNameDataInput;
};

export type PersonWhereInput = {
  account?: Maybe<PartyAccountWhereInput>;
  affiliation_every?: Maybe<PersonOrganizationAffiliationWhereInput>;
  affiliation_none?: Maybe<PersonOrganizationAffiliationWhereInput>;
  affiliation_some?: Maybe<PersonOrganizationAffiliationWhereInput>;
  AND?: Maybe<Array<PersonWhereInput>>;
  avatar_every?: Maybe<PersonAvatarWhereInput>;
  avatar_none?: Maybe<PersonAvatarWhereInput>;
  avatar_some?: Maybe<PersonAvatarWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  email_every?: Maybe<PartyEmailWhereInput>;
  email_none?: Maybe<PartyEmailWhereInput>;
  email_some?: Maybe<PartyEmailWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  metadata?: Maybe<PersonMetaDataWhereInput>;
  name_every?: Maybe<PersonNameWhereInput>;
  name_none?: Maybe<PersonNameWhereInput>;
  name_some?: Maybe<PersonNameWhereInput>;
  NOT?: Maybe<Array<PersonWhereInput>>;
  OR?: Maybe<Array<PersonWhereInput>>;
  personalTitle?: Maybe<Scalars['String']>;
  personalTitle_contains?: Maybe<Scalars['String']>;
  personalTitle_ends_with?: Maybe<Scalars['String']>;
  personalTitle_gt?: Maybe<Scalars['String']>;
  personalTitle_gte?: Maybe<Scalars['String']>;
  personalTitle_in?: Maybe<Array<Scalars['String']>>;
  personalTitle_lt?: Maybe<Scalars['String']>;
  personalTitle_lte?: Maybe<Scalars['String']>;
  personalTitle_not?: Maybe<Scalars['String']>;
  personalTitle_not_contains?: Maybe<Scalars['String']>;
  personalTitle_not_ends_with?: Maybe<Scalars['String']>;
  personalTitle_not_in?: Maybe<Array<Scalars['String']>>;
  personalTitle_not_starts_with?: Maybe<Scalars['String']>;
  personalTitle_starts_with?: Maybe<Scalars['String']>;
  phone_every?: Maybe<PartyPhoneWhereInput>;
  phone_none?: Maybe<PartyPhoneWhereInput>;
  phone_some?: Maybe<PartyPhoneWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export type PersonWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  me: PartyAccount;
  organization?: Maybe<Organization>;
  organizationBusinessModel?: Maybe<OrganizationBusinessModel>;
  organizationBusinessModels: Array<OrganizationBusinessModel>;
  organizationBusinessModelsConnection: OrganizationBusinessModelConnection;
  organizationCategories: Array<OrganizationCategory>;
  organizationCategoriesConnection: OrganizationCategoryConnection;
  organizationCategory?: Maybe<OrganizationCategory>;
  organizationContext?: Maybe<OrganizationContext>;
  organizationContextMetaData?: Maybe<OrganizationContextMetaData>;
  organizationContextMetaDatas: Array<OrganizationContextMetaData>;
  organizationContextMetaDatasConnection: OrganizationContextMetaDataConnection;
  organizationContexts: Array<OrganizationContext>;
  organizationContextsConnection: OrganizationContextConnection;
  organizationLink?: Maybe<OrganizationLink>;
  organizationLinks: Array<OrganizationLink>;
  organizationLinksConnection: OrganizationLinkConnection;
  organizationLocation?: Maybe<OrganizationLocation>;
  organizationLocations: Array<OrganizationLocation>;
  organizationLocationsConnection: OrganizationLocationConnection;
  organizationLogo?: Maybe<OrganizationLogo>;
  organizationLogoes: Array<OrganizationLogo>;
  organizationLogoesConnection: OrganizationLogoConnection;
  organizationMetaData?: Maybe<OrganizationMetaData>;
  organizationMetaDatas: Array<OrganizationMetaData>;
  organizationMetaDatasConnection: OrganizationMetaDataConnection;
  organizationName?: Maybe<OrganizationName>;
  organizationNames: Array<OrganizationName>;
  organizationNamesConnection: OrganizationNameConnection;
  organizations: Array<Organization>;
  organizationsConnection: OrganizationConnection;
  organizationTargetMarket?: Maybe<OrganizationTargetMarket>;
  organizationTargetMarkets: Array<OrganizationTargetMarket>;
  organizationTargetMarketsConnection: OrganizationTargetMarketConnection;
  partyAccount?: Maybe<PartyAccount>;
  partyAccounts: Array<PartyAccount>;
  partyAccountsConnection: PartyAccountConnection;
  partyEmail?: Maybe<PartyEmail>;
  partyEmails: Array<PartyEmail>;
  partyEmailsConnection: PartyEmailConnection;
  partyPhone?: Maybe<PartyPhone>;
  partyPhones: Array<PartyPhone>;
  partyPhonesConnection: PartyPhoneConnection;
  partyRole?: Maybe<PartyRole>;
  partyRoles: Array<PartyRole>;
  partyRolesConnection: PartyRoleConnection;
  partyRoleType?: Maybe<PartyRoleType>;
  partyRoleTypes: Array<PartyRoleType>;
  partyRoleTypesConnection: PartyRoleTypeConnection;
  person?: Maybe<Person>;
  personAvatar?: Maybe<PersonAvatar>;
  personAvatars: Array<PersonAvatar>;
  personAvatarsConnection: PersonAvatarConnection;
  personMetaData?: Maybe<PersonMetaData>;
  personMetaDatas: Array<PersonMetaData>;
  personMetaDatasConnection: PersonMetaDataConnection;
  personName?: Maybe<PersonName>;
  personNames: Array<PersonName>;
  personNamesConnection: PersonNameConnection;
  personOrganizationAffiliation?: Maybe<PersonOrganizationAffiliation>;
  personOrganizationAffiliationMetaData?: Maybe<
    PersonOrganizationAffiliationMetaData
  >;
  personOrganizationAffiliationMetaDatas: Array<
    PersonOrganizationAffiliationMetaData
  >;
  personOrganizationAffiliationMetaDatasConnection: PersonOrganizationAffiliationMetaDataConnection;
  personOrganizationAffiliations: Array<PersonOrganizationAffiliation>;
  personOrganizationAffiliationsConnection: PersonOrganizationAffiliationConnection;
  persons: Array<Person>;
  personsConnection: PersonConnection;
};

export type QueryOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};

export type QueryOrganizationBusinessModelArgs = {
  where: OrganizationBusinessModelWhereUniqueInput;
};

export type QueryOrganizationBusinessModelsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationBusinessModelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationBusinessModelWhereInput>;
};

export type QueryOrganizationBusinessModelsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationBusinessModelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationBusinessModelWhereInput>;
};

export type QueryOrganizationCategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationCategoryWhereInput>;
};

export type QueryOrganizationCategoriesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationCategoryWhereInput>;
};

export type QueryOrganizationCategoryArgs = {
  where: OrganizationCategoryWhereUniqueInput;
};

export type QueryOrganizationContextArgs = {
  where: OrganizationContextWhereUniqueInput;
};

export type QueryOrganizationContextMetaDataArgs = {
  where: OrganizationContextMetaDataWhereUniqueInput;
};

export type QueryOrganizationContextMetaDatasArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationContextMetaDataOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationContextMetaDataWhereInput>;
};

export type QueryOrganizationContextMetaDatasConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationContextMetaDataOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationContextMetaDataWhereInput>;
};

export type QueryOrganizationContextsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationContextOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationContextWhereInput>;
};

export type QueryOrganizationContextsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationContextOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationContextWhereInput>;
};

export type QueryOrganizationLinkArgs = {
  where: OrganizationLinkWhereUniqueInput;
};

export type QueryOrganizationLinksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationLinkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationLinkWhereInput>;
};

export type QueryOrganizationLinksConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationLinkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationLinkWhereInput>;
};

export type QueryOrganizationLocationArgs = {
  where: OrganizationLocationWhereUniqueInput;
};

export type QueryOrganizationLocationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationLocationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationLocationWhereInput>;
};

export type QueryOrganizationLocationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationLocationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationLocationWhereInput>;
};

export type QueryOrganizationLogoArgs = {
  where: OrganizationLogoWhereUniqueInput;
};

export type QueryOrganizationLogoesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationLogoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationLogoWhereInput>;
};

export type QueryOrganizationLogoesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationLogoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationLogoWhereInput>;
};

export type QueryOrganizationMetaDataArgs = {
  where: OrganizationMetaDataWhereUniqueInput;
};

export type QueryOrganizationMetaDatasArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationMetaDataOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationMetaDataWhereInput>;
};

export type QueryOrganizationMetaDatasConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationMetaDataOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationMetaDataWhereInput>;
};

export type QueryOrganizationNameArgs = {
  where: OrganizationNameWhereUniqueInput;
};

export type QueryOrganizationNamesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationNameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationNameWhereInput>;
};

export type QueryOrganizationNamesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationNameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationNameWhereInput>;
};

export type QueryOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationWhereInput>;
};

export type QueryOrganizationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationWhereInput>;
};

export type QueryOrganizationTargetMarketArgs = {
  where: OrganizationTargetMarketWhereUniqueInput;
};

export type QueryOrganizationTargetMarketsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationTargetMarketOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationTargetMarketWhereInput>;
};

export type QueryOrganizationTargetMarketsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrganizationTargetMarketOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<OrganizationTargetMarketWhereInput>;
};

export type QueryPartyAccountArgs = {
  where: PartyAccountWhereUniqueInput;
};

export type QueryPartyAccountsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyAccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyAccountWhereInput>;
};

export type QueryPartyAccountsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyAccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyAccountWhereInput>;
};

export type QueryPartyEmailArgs = {
  where: PartyEmailWhereUniqueInput;
};

export type QueryPartyEmailsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyEmailOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyEmailWhereInput>;
};

export type QueryPartyEmailsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyEmailOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyEmailWhereInput>;
};

export type QueryPartyPhoneArgs = {
  where: PartyPhoneWhereUniqueInput;
};

export type QueryPartyPhonesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyPhoneOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyPhoneWhereInput>;
};

export type QueryPartyPhonesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyPhoneOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyPhoneWhereInput>;
};

export type QueryPartyRoleArgs = {
  where: PartyRoleWhereUniqueInput;
};

export type QueryPartyRolesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyRoleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyRoleWhereInput>;
};

export type QueryPartyRolesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyRoleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyRoleWhereInput>;
};

export type QueryPartyRoleTypeArgs = {
  where: PartyRoleTypeWhereUniqueInput;
};

export type QueryPartyRoleTypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyRoleTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyRoleTypeWhereInput>;
};

export type QueryPartyRoleTypesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PartyRoleTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PartyRoleTypeWhereInput>;
};

export type QueryPersonArgs = {
  where: PersonWhereUniqueInput;
};

export type QueryPersonAvatarArgs = {
  where: PersonAvatarWhereUniqueInput;
};

export type QueryPersonAvatarsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonAvatarOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonAvatarWhereInput>;
};

export type QueryPersonAvatarsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonAvatarOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonAvatarWhereInput>;
};

export type QueryPersonMetaDataArgs = {
  where: PersonMetaDataWhereUniqueInput;
};

export type QueryPersonMetaDatasArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonMetaDataOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonMetaDataWhereInput>;
};

export type QueryPersonMetaDatasConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonMetaDataOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonMetaDataWhereInput>;
};

export type QueryPersonNameArgs = {
  where: PersonNameWhereUniqueInput;
};

export type QueryPersonNamesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonNameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonNameWhereInput>;
};

export type QueryPersonNamesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonNameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonNameWhereInput>;
};

export type QueryPersonOrganizationAffiliationArgs = {
  where: PersonOrganizationAffiliationWhereUniqueInput;
};

export type QueryPersonOrganizationAffiliationMetaDataArgs = {
  where: PersonOrganizationAffiliationMetaDataWhereUniqueInput;
};

export type QueryPersonOrganizationAffiliationMetaDatasArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonOrganizationAffiliationMetaDataOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonOrganizationAffiliationMetaDataWhereInput>;
};

export type QueryPersonOrganizationAffiliationMetaDatasConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonOrganizationAffiliationMetaDataOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonOrganizationAffiliationMetaDataWhereInput>;
};

export type QueryPersonOrganizationAffiliationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonOrganizationAffiliationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonOrganizationAffiliationWhereInput>;
};

export type QueryPersonOrganizationAffiliationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonOrganizationAffiliationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonOrganizationAffiliationWhereInput>;
};

export type QueryPersonsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonWhereInput>;
};

export type QueryPersonsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PersonWhereInput>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  PartyAccount: ResolverTypeWrapper<PartyAccount>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrganizationOrderByInput: OrganizationOrderByInput;
  OrganizationWhereInput: OrganizationWhereInput;
  PartyAccountWhereInput: PartyAccountWhereInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  PersonWhereInput: PersonWhereInput;
  PersonOrganizationAffiliationWhereInput: PersonOrganizationAffiliationWhereInput;
  PersonOrganizationAffiliationMetaDataWhereInput: PersonOrganizationAffiliationMetaDataWhereInput;
  PersonAvatarWhereInput: PersonAvatarWhereInput;
  PartyEmailWhereInput: PartyEmailWhereInput;
  PersonMetaDataWhereInput: PersonMetaDataWhereInput;
  PersonNameWhereInput: PersonNameWhereInput;
  PartyPhoneWhereInput: PartyPhoneWhereInput;
  PartyRoleWhereInput: PartyRoleWhereInput;
  PartyRoleTypeWhereInput: PartyRoleTypeWhereInput;
  OrganizationCategoryWhereInput: OrganizationCategoryWhereInput;
  OrganizationContextWhereInput: OrganizationContextWhereInput;
  OrganizationContextMetaDataWhereInput: OrganizationContextMetaDataWhereInput;
  OrganizationContextType: OrganizationContextType;
  OrganizationLinkWhereInput: OrganizationLinkWhereInput;
  OrganizationLinkType: OrganizationLinkType;
  OrganizationLocationWhereInput: OrganizationLocationWhereInput;
  OrganizationLogoWhereInput: OrganizationLogoWhereInput;
  OrganizationMetaDataWhereInput: OrganizationMetaDataWhereInput;
  OrganizationNameWhereInput: OrganizationNameWhereInput;
  OrganizationTargetMarketWhereInput: OrganizationTargetMarketWhereInput;
  Organization: ResolverTypeWrapper<Organization>;
  PartyAccountOrderByInput: PartyAccountOrderByInput;
  PersonOrganizationAffiliationOrderByInput: PersonOrganizationAffiliationOrderByInput;
  PersonOrganizationAffiliation: ResolverTypeWrapper<
    PersonOrganizationAffiliation
  >;
  PersonOrganizationAffiliationMetaData: ResolverTypeWrapper<
    PersonOrganizationAffiliationMetaData
  >;
  Person: ResolverTypeWrapper<Person>;
  PersonAvatarOrderByInput: PersonAvatarOrderByInput;
  PersonAvatar: ResolverTypeWrapper<PersonAvatar>;
  PartyEmailOrderByInput: PartyEmailOrderByInput;
  PartyEmail: ResolverTypeWrapper<PartyEmail>;
  PersonMetaData: ResolverTypeWrapper<PersonMetaData>;
  PersonNameOrderByInput: PersonNameOrderByInput;
  PersonName: ResolverTypeWrapper<PersonName>;
  PartyPhoneOrderByInput: PartyPhoneOrderByInput;
  PartyPhone: ResolverTypeWrapper<PartyPhone>;
  OrganizationCategoryOrderByInput: OrganizationCategoryOrderByInput;
  OrganizationCategory: ResolverTypeWrapper<OrganizationCategory>;
  OrganizationContextOrderByInput: OrganizationContextOrderByInput;
  OrganizationContext: ResolverTypeWrapper<OrganizationContext>;
  OrganizationContextMetaData: ResolverTypeWrapper<OrganizationContextMetaData>;
  OrganizationLinkOrderByInput: OrganizationLinkOrderByInput;
  OrganizationLink: ResolverTypeWrapper<OrganizationLink>;
  OrganizationLocationOrderByInput: OrganizationLocationOrderByInput;
  OrganizationLocation: ResolverTypeWrapper<OrganizationLocation>;
  Json: ResolverTypeWrapper<Scalars['Json']>;
  OrganizationLogoOrderByInput: OrganizationLogoOrderByInput;
  OrganizationLogo: ResolverTypeWrapper<OrganizationLogo>;
  OrganizationMetaData: ResolverTypeWrapper<OrganizationMetaData>;
  OrganizationNameOrderByInput: OrganizationNameOrderByInput;
  OrganizationName: ResolverTypeWrapper<OrganizationName>;
  PartyRoleOrderByInput: PartyRoleOrderByInput;
  PartyRole: ResolverTypeWrapper<PartyRole>;
  PartyRoleType: ResolverTypeWrapper<PartyRoleType>;
  OrganizationTargetMarketOrderByInput: OrganizationTargetMarketOrderByInput;
  OrganizationTargetMarket: ResolverTypeWrapper<OrganizationTargetMarket>;
  OrganizationWhereUniqueInput: OrganizationWhereUniqueInput;
  OrganizationBusinessModelWhereUniqueInput: OrganizationBusinessModelWhereUniqueInput;
  OrganizationBusinessModel: ResolverTypeWrapper<OrganizationBusinessModel>;
  OrganizationBusinessModelOrderByInput: OrganizationBusinessModelOrderByInput;
  OrganizationBusinessModelWhereInput: OrganizationBusinessModelWhereInput;
  OrganizationBusinessModelConnection: ResolverTypeWrapper<
    OrganizationBusinessModelConnection
  >;
  AggregateOrganizationBusinessModel: ResolverTypeWrapper<
    AggregateOrganizationBusinessModel
  >;
  OrganizationBusinessModelEdge: ResolverTypeWrapper<
    OrganizationBusinessModelEdge
  >;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  OrganizationCategoryConnection: ResolverTypeWrapper<
    OrganizationCategoryConnection
  >;
  AggregateOrganizationCategory: ResolverTypeWrapper<
    AggregateOrganizationCategory
  >;
  OrganizationCategoryEdge: ResolverTypeWrapper<OrganizationCategoryEdge>;
  OrganizationCategoryWhereUniqueInput: OrganizationCategoryWhereUniqueInput;
  OrganizationContextWhereUniqueInput: OrganizationContextWhereUniqueInput;
  OrganizationContextMetaDataWhereUniqueInput: OrganizationContextMetaDataWhereUniqueInput;
  OrganizationContextMetaDataOrderByInput: OrganizationContextMetaDataOrderByInput;
  OrganizationContextMetaDataConnection: ResolverTypeWrapper<
    OrganizationContextMetaDataConnection
  >;
  AggregateOrganizationContextMetaData: ResolverTypeWrapper<
    AggregateOrganizationContextMetaData
  >;
  OrganizationContextMetaDataEdge: ResolverTypeWrapper<
    OrganizationContextMetaDataEdge
  >;
  OrganizationContextConnection: ResolverTypeWrapper<
    OrganizationContextConnection
  >;
  AggregateOrganizationContext: ResolverTypeWrapper<
    AggregateOrganizationContext
  >;
  OrganizationContextEdge: ResolverTypeWrapper<OrganizationContextEdge>;
  OrganizationLinkWhereUniqueInput: OrganizationLinkWhereUniqueInput;
  OrganizationLinkConnection: ResolverTypeWrapper<OrganizationLinkConnection>;
  AggregateOrganizationLink: ResolverTypeWrapper<AggregateOrganizationLink>;
  OrganizationLinkEdge: ResolverTypeWrapper<OrganizationLinkEdge>;
  OrganizationLocationWhereUniqueInput: OrganizationLocationWhereUniqueInput;
  OrganizationLocationConnection: ResolverTypeWrapper<
    OrganizationLocationConnection
  >;
  AggregateOrganizationLocation: ResolverTypeWrapper<
    AggregateOrganizationLocation
  >;
  OrganizationLocationEdge: ResolverTypeWrapper<OrganizationLocationEdge>;
  OrganizationLogoWhereUniqueInput: OrganizationLogoWhereUniqueInput;
  OrganizationLogoConnection: ResolverTypeWrapper<OrganizationLogoConnection>;
  AggregateOrganizationLogo: ResolverTypeWrapper<AggregateOrganizationLogo>;
  OrganizationLogoEdge: ResolverTypeWrapper<OrganizationLogoEdge>;
  OrganizationMetaDataWhereUniqueInput: OrganizationMetaDataWhereUniqueInput;
  OrganizationMetaDataOrderByInput: OrganizationMetaDataOrderByInput;
  OrganizationMetaDataConnection: ResolverTypeWrapper<
    OrganizationMetaDataConnection
  >;
  AggregateOrganizationMetaData: ResolverTypeWrapper<
    AggregateOrganizationMetaData
  >;
  OrganizationMetaDataEdge: ResolverTypeWrapper<OrganizationMetaDataEdge>;
  OrganizationNameWhereUniqueInput: OrganizationNameWhereUniqueInput;
  OrganizationNameConnection: ResolverTypeWrapper<OrganizationNameConnection>;
  AggregateOrganizationName: ResolverTypeWrapper<AggregateOrganizationName>;
  OrganizationNameEdge: ResolverTypeWrapper<OrganizationNameEdge>;
  OrganizationConnection: ResolverTypeWrapper<OrganizationConnection>;
  AggregateOrganization: ResolverTypeWrapper<AggregateOrganization>;
  OrganizationEdge: ResolverTypeWrapper<OrganizationEdge>;
  OrganizationTargetMarketWhereUniqueInput: OrganizationTargetMarketWhereUniqueInput;
  OrganizationTargetMarketConnection: ResolverTypeWrapper<
    OrganizationTargetMarketConnection
  >;
  AggregateOrganizationTargetMarket: ResolverTypeWrapper<
    AggregateOrganizationTargetMarket
  >;
  OrganizationTargetMarketEdge: ResolverTypeWrapper<
    OrganizationTargetMarketEdge
  >;
  PartyAccountWhereUniqueInput: PartyAccountWhereUniqueInput;
  PartyAccountConnection: ResolverTypeWrapper<PartyAccountConnection>;
  AggregatePartyAccount: ResolverTypeWrapper<AggregatePartyAccount>;
  PartyAccountEdge: ResolverTypeWrapper<PartyAccountEdge>;
  PartyEmailWhereUniqueInput: PartyEmailWhereUniqueInput;
  PartyEmailConnection: ResolverTypeWrapper<PartyEmailConnection>;
  AggregatePartyEmail: ResolverTypeWrapper<AggregatePartyEmail>;
  PartyEmailEdge: ResolverTypeWrapper<PartyEmailEdge>;
  PartyPhoneWhereUniqueInput: PartyPhoneWhereUniqueInput;
  PartyPhoneConnection: ResolverTypeWrapper<PartyPhoneConnection>;
  AggregatePartyPhone: ResolverTypeWrapper<AggregatePartyPhone>;
  PartyPhoneEdge: ResolverTypeWrapper<PartyPhoneEdge>;
  PartyRoleWhereUniqueInput: PartyRoleWhereUniqueInput;
  PartyRoleConnection: ResolverTypeWrapper<PartyRoleConnection>;
  AggregatePartyRole: ResolverTypeWrapper<AggregatePartyRole>;
  PartyRoleEdge: ResolverTypeWrapper<PartyRoleEdge>;
  PartyRoleTypeWhereUniqueInput: PartyRoleTypeWhereUniqueInput;
  PartyRoleTypeOrderByInput: PartyRoleTypeOrderByInput;
  PartyRoleTypeConnection: ResolverTypeWrapper<PartyRoleTypeConnection>;
  AggregatePartyRoleType: ResolverTypeWrapper<AggregatePartyRoleType>;
  PartyRoleTypeEdge: ResolverTypeWrapper<PartyRoleTypeEdge>;
  PersonWhereUniqueInput: PersonWhereUniqueInput;
  PersonAvatarWhereUniqueInput: PersonAvatarWhereUniqueInput;
  PersonAvatarConnection: ResolverTypeWrapper<PersonAvatarConnection>;
  AggregatePersonAvatar: ResolverTypeWrapper<AggregatePersonAvatar>;
  PersonAvatarEdge: ResolverTypeWrapper<PersonAvatarEdge>;
  PersonMetaDataWhereUniqueInput: PersonMetaDataWhereUniqueInput;
  PersonMetaDataOrderByInput: PersonMetaDataOrderByInput;
  PersonMetaDataConnection: ResolverTypeWrapper<PersonMetaDataConnection>;
  AggregatePersonMetaData: ResolverTypeWrapper<AggregatePersonMetaData>;
  PersonMetaDataEdge: ResolverTypeWrapper<PersonMetaDataEdge>;
  PersonNameWhereUniqueInput: PersonNameWhereUniqueInput;
  PersonNameConnection: ResolverTypeWrapper<PersonNameConnection>;
  AggregatePersonName: ResolverTypeWrapper<AggregatePersonName>;
  PersonNameEdge: ResolverTypeWrapper<PersonNameEdge>;
  PersonOrganizationAffiliationWhereUniqueInput: PersonOrganizationAffiliationWhereUniqueInput;
  PersonOrganizationAffiliationMetaDataWhereUniqueInput: PersonOrganizationAffiliationMetaDataWhereUniqueInput;
  PersonOrganizationAffiliationMetaDataOrderByInput: PersonOrganizationAffiliationMetaDataOrderByInput;
  PersonOrganizationAffiliationMetaDataConnection: ResolverTypeWrapper<
    PersonOrganizationAffiliationMetaDataConnection
  >;
  AggregatePersonOrganizationAffiliationMetaData: ResolverTypeWrapper<
    AggregatePersonOrganizationAffiliationMetaData
  >;
  PersonOrganizationAffiliationMetaDataEdge: ResolverTypeWrapper<
    PersonOrganizationAffiliationMetaDataEdge
  >;
  PersonOrganizationAffiliationConnection: ResolverTypeWrapper<
    PersonOrganizationAffiliationConnection
  >;
  AggregatePersonOrganizationAffiliation: ResolverTypeWrapper<
    AggregatePersonOrganizationAffiliation
  >;
  PersonOrganizationAffiliationEdge: ResolverTypeWrapper<
    PersonOrganizationAffiliationEdge
  >;
  PersonOrderByInput: PersonOrderByInput;
  PersonConnection: ResolverTypeWrapper<PersonConnection>;
  AggregatePerson: ResolverTypeWrapper<AggregatePerson>;
  PersonEdge: ResolverTypeWrapper<PersonEdge>;
  Mutation: ResolverTypeWrapper<{}>;
  OrganizationCreateInput: OrganizationCreateInput;
  PartyAccountCreateManyWithoutAdminInput: PartyAccountCreateManyWithoutAdminInput;
  PartyAccountCreateWithoutAdminInput: PartyAccountCreateWithoutAdminInput;
  PersonCreateOneWithoutAccountInput: PersonCreateOneWithoutAccountInput;
  PersonCreateWithoutAccountInput: PersonCreateWithoutAccountInput;
  PersonOrganizationAffiliationCreateManyWithoutPersonInput: PersonOrganizationAffiliationCreateManyWithoutPersonInput;
  PersonOrganizationAffiliationCreateWithoutPersonInput: PersonOrganizationAffiliationCreateWithoutPersonInput;
  PersonOrganizationAffiliationMetaDataCreateOneWithoutAffiliationInput: PersonOrganizationAffiliationMetaDataCreateOneWithoutAffiliationInput;
  PersonOrganizationAffiliationMetaDataCreateWithoutAffiliationInput: PersonOrganizationAffiliationMetaDataCreateWithoutAffiliationInput;
  OrganizationCreateOneWithoutAffiliationInput: OrganizationCreateOneWithoutAffiliationInput;
  OrganizationCreateWithoutAffiliationInput: OrganizationCreateWithoutAffiliationInput;
  OrganizationCategoryCreateManyWithoutOrganizationsInput: OrganizationCategoryCreateManyWithoutOrganizationsInput;
  OrganizationCategoryCreateWithoutOrganizationsInput: OrganizationCategoryCreateWithoutOrganizationsInput;
  OrganizationCategoryCreateManyWithoutChildrenInput: OrganizationCategoryCreateManyWithoutChildrenInput;
  OrganizationCategoryCreateWithoutChildrenInput: OrganizationCategoryCreateWithoutChildrenInput;
  OrganizationCreateManyWithoutCategoriesInput: OrganizationCreateManyWithoutCategoriesInput;
  OrganizationCreateWithoutCategoriesInput: OrganizationCreateWithoutCategoriesInput;
  PersonOrganizationAffiliationCreateManyWithoutOrganizationInput: PersonOrganizationAffiliationCreateManyWithoutOrganizationInput;
  PersonOrganizationAffiliationCreateWithoutOrganizationInput: PersonOrganizationAffiliationCreateWithoutOrganizationInput;
  PersonCreateOneWithoutAffiliationInput: PersonCreateOneWithoutAffiliationInput;
  PersonCreateWithoutAffiliationInput: PersonCreateWithoutAffiliationInput;
  PartyAccountCreateOneWithoutPersonInput: PartyAccountCreateOneWithoutPersonInput;
  PartyAccountCreateWithoutPersonInput: PartyAccountCreateWithoutPersonInput;
  OrganizationCreateManyWithoutAdminsInput: OrganizationCreateManyWithoutAdminsInput;
  OrganizationCreateWithoutAdminsInput: OrganizationCreateWithoutAdminsInput;
  OrganizationContextCreateManyInput: OrganizationContextCreateManyInput;
  OrganizationContextCreateInput: OrganizationContextCreateInput;
  OrganizationContextMetaDataCreateOneWithoutOrganizationContextInput: OrganizationContextMetaDataCreateOneWithoutOrganizationContextInput;
  OrganizationContextMetaDataCreateWithoutOrganizationContextInput: OrganizationContextMetaDataCreateWithoutOrganizationContextInput;
  PartyEmailCreateManyInput: PartyEmailCreateManyInput;
  PartyEmailCreateInput: PartyEmailCreateInput;
  OrganizationLinkCreateManyWithoutOrganizationInput: OrganizationLinkCreateManyWithoutOrganizationInput;
  OrganizationLinkCreateWithoutOrganizationInput: OrganizationLinkCreateWithoutOrganizationInput;
  OrganizationLocationCreateManyWithoutOrganizationInput: OrganizationLocationCreateManyWithoutOrganizationInput;
  OrganizationLocationCreateWithoutOrganizationInput: OrganizationLocationCreateWithoutOrganizationInput;
  OrganizationLogoCreateManyWithoutOrganizationInput: OrganizationLogoCreateManyWithoutOrganizationInput;
  OrganizationLogoCreateWithoutOrganizationInput: OrganizationLogoCreateWithoutOrganizationInput;
  OrganizationMetaDataCreateOneWithoutOrganizationInput: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  OrganizationMetaDataCreateWithoutOrganizationInput: OrganizationMetaDataCreateWithoutOrganizationInput;
  OrganizationNameCreateManyWithoutOrganizationInput: OrganizationNameCreateManyWithoutOrganizationInput;
  OrganizationNameCreateWithoutOrganizationInput: OrganizationNameCreateWithoutOrganizationInput;
  PartyRoleCreateManyWithoutResourceInput: PartyRoleCreateManyWithoutResourceInput;
  PartyRoleCreateWithoutResourceInput: PartyRoleCreateWithoutResourceInput;
  PartyAccountCreateOneWithoutRolesInput: PartyAccountCreateOneWithoutRolesInput;
  PartyAccountCreateWithoutRolesInput: PartyAccountCreateWithoutRolesInput;
  PartyRoleTypeCreateOneInput: PartyRoleTypeCreateOneInput;
  PartyRoleTypeCreateInput: PartyRoleTypeCreateInput;
  PartyPhoneCreateManyInput: PartyPhoneCreateManyInput;
  PartyPhoneCreateInput: PartyPhoneCreateInput;
  OrganizationTargetMarketCreateManyWithoutOrganizationsInput: OrganizationTargetMarketCreateManyWithoutOrganizationsInput;
  OrganizationTargetMarketCreateWithoutOrganizationsInput: OrganizationTargetMarketCreateWithoutOrganizationsInput;
  PartyRoleCreateManyWithoutPartyInput: PartyRoleCreateManyWithoutPartyInput;
  PartyRoleCreateWithoutPartyInput: PartyRoleCreateWithoutPartyInput;
  OrganizationCreateOneWithoutPartiesInput: OrganizationCreateOneWithoutPartiesInput;
  OrganizationCreateWithoutPartiesInput: OrganizationCreateWithoutPartiesInput;
  PersonAvatarCreateManyWithoutPersonInput: PersonAvatarCreateManyWithoutPersonInput;
  PersonAvatarCreateWithoutPersonInput: PersonAvatarCreateWithoutPersonInput;
  PersonMetaDataCreateOneWithoutPersonInput: PersonMetaDataCreateOneWithoutPersonInput;
  PersonMetaDataCreateWithoutPersonInput: PersonMetaDataCreateWithoutPersonInput;
  PersonNameCreateManyWithoutPersonInput: PersonNameCreateManyWithoutPersonInput;
  PersonNameCreateWithoutPersonInput: PersonNameCreateWithoutPersonInput;
  OrganizationCategoryCreateOneWithoutParentInput: OrganizationCategoryCreateOneWithoutParentInput;
  OrganizationCategoryCreateWithoutParentInput: OrganizationCategoryCreateWithoutParentInput;
  OrganizationBusinessModelCreateInput: OrganizationBusinessModelCreateInput;
  OrganizationCreateManyInput: OrganizationCreateManyInput;
  OrganizationCategoryCreateInput: OrganizationCategoryCreateInput;
  OrganizationContextMetaDataCreateInput: OrganizationContextMetaDataCreateInput;
  OrganizationContextCreateOneWithoutMetadataInput: OrganizationContextCreateOneWithoutMetadataInput;
  OrganizationContextCreateWithoutMetadataInput: OrganizationContextCreateWithoutMetadataInput;
  OrganizationLinkCreateInput: OrganizationLinkCreateInput;
  OrganizationCreateOneWithoutLinksInput: OrganizationCreateOneWithoutLinksInput;
  OrganizationCreateWithoutLinksInput: OrganizationCreateWithoutLinksInput;
  OrganizationLocationCreateInput: OrganizationLocationCreateInput;
  OrganizationCreateOneWithoutLocationInput: OrganizationCreateOneWithoutLocationInput;
  OrganizationCreateWithoutLocationInput: OrganizationCreateWithoutLocationInput;
  OrganizationLogoCreateInput: OrganizationLogoCreateInput;
  OrganizationCreateOneWithoutLogoInput: OrganizationCreateOneWithoutLogoInput;
  OrganizationCreateWithoutLogoInput: OrganizationCreateWithoutLogoInput;
  OrganizationMetaDataCreateInput: OrganizationMetaDataCreateInput;
  OrganizationCreateOneWithoutMetadataInput: OrganizationCreateOneWithoutMetadataInput;
  OrganizationCreateWithoutMetadataInput: OrganizationCreateWithoutMetadataInput;
  OrganizationNameCreateInput: OrganizationNameCreateInput;
  OrganizationCreateOneWithoutNameInput: OrganizationCreateOneWithoutNameInput;
  OrganizationCreateWithoutNameInput: OrganizationCreateWithoutNameInput;
  OrganizationTargetMarketCreateInput: OrganizationTargetMarketCreateInput;
  OrganizationCreateManyWithoutTargetMarketsInput: OrganizationCreateManyWithoutTargetMarketsInput;
  OrganizationCreateWithoutTargetMarketsInput: OrganizationCreateWithoutTargetMarketsInput;
  PartyAccountCreateInput: PartyAccountCreateInput;
  PartyRoleCreateInput: PartyRoleCreateInput;
  PersonCreateInput: PersonCreateInput;
  PersonAvatarCreateInput: PersonAvatarCreateInput;
  PersonCreateOneWithoutAvatarInput: PersonCreateOneWithoutAvatarInput;
  PersonCreateWithoutAvatarInput: PersonCreateWithoutAvatarInput;
  PersonMetaDataCreateInput: PersonMetaDataCreateInput;
  PersonCreateOneWithoutMetadataInput: PersonCreateOneWithoutMetadataInput;
  PersonCreateWithoutMetadataInput: PersonCreateWithoutMetadataInput;
  PersonNameCreateInput: PersonNameCreateInput;
  PersonCreateOneWithoutNameInput: PersonCreateOneWithoutNameInput;
  PersonCreateWithoutNameInput: PersonCreateWithoutNameInput;
  PersonOrganizationAffiliationCreateInput: PersonOrganizationAffiliationCreateInput;
  PersonOrganizationAffiliationMetaDataCreateInput: PersonOrganizationAffiliationMetaDataCreateInput;
  PersonOrganizationAffiliationCreateOneWithoutMetadataInput: PersonOrganizationAffiliationCreateOneWithoutMetadataInput;
  PersonOrganizationAffiliationCreateWithoutMetadataInput: PersonOrganizationAffiliationCreateWithoutMetadataInput;
  BatchPayload: ResolverTypeWrapper<BatchPayload>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  OrganizationBusinessModelUpdateManyMutationInput: OrganizationBusinessModelUpdateManyMutationInput;
  OrganizationCategoryUpdateManyMutationInput: OrganizationCategoryUpdateManyMutationInput;
  OrganizationContextMetaDataUpdateManyMutationInput: OrganizationContextMetaDataUpdateManyMutationInput;
  OrganizationContextUpdateManyMutationInput: OrganizationContextUpdateManyMutationInput;
  OrganizationLinkUpdateManyMutationInput: OrganizationLinkUpdateManyMutationInput;
  OrganizationLocationUpdateManyMutationInput: OrganizationLocationUpdateManyMutationInput;
  OrganizationLogoUpdateManyMutationInput: OrganizationLogoUpdateManyMutationInput;
  OrganizationMetaDataUpdateManyMutationInput: OrganizationMetaDataUpdateManyMutationInput;
  OrganizationNameUpdateManyMutationInput: OrganizationNameUpdateManyMutationInput;
  OrganizationUpdateManyMutationInput: OrganizationUpdateManyMutationInput;
  OrganizationTargetMarketUpdateManyMutationInput: OrganizationTargetMarketUpdateManyMutationInput;
  PartyAccountUpdateManyMutationInput: PartyAccountUpdateManyMutationInput;
  PartyEmailUpdateManyMutationInput: PartyEmailUpdateManyMutationInput;
  PartyPhoneUpdateManyMutationInput: PartyPhoneUpdateManyMutationInput;
  PartyRoleUpdateManyMutationInput: PartyRoleUpdateManyMutationInput;
  PartyRoleTypeUpdateManyMutationInput: PartyRoleTypeUpdateManyMutationInput;
  PersonAvatarUpdateManyMutationInput: PersonAvatarUpdateManyMutationInput;
  PersonMetaDataUpdateManyMutationInput: PersonMetaDataUpdateManyMutationInput;
  PersonNameUpdateManyMutationInput: PersonNameUpdateManyMutationInput;
  PersonOrganizationAffiliationMetaDataUpdateManyMutationInput: PersonOrganizationAffiliationMetaDataUpdateManyMutationInput;
  PersonOrganizationAffiliationUpdateManyMutationInput: PersonOrganizationAffiliationUpdateManyMutationInput;
  PersonUpdateManyMutationInput: PersonUpdateManyMutationInput;
  OrganizationUpdateInput: OrganizationUpdateInput;
  PartyAccountUpdateManyWithoutAdminInput: PartyAccountUpdateManyWithoutAdminInput;
  PartyAccountScalarWhereInput: PartyAccountScalarWhereInput;
  PartyAccountUpdateWithWhereUniqueWithoutAdminInput: PartyAccountUpdateWithWhereUniqueWithoutAdminInput;
  PartyAccountUpdateWithoutAdminDataInput: PartyAccountUpdateWithoutAdminDataInput;
  PersonUpdateOneWithoutAccountInput: PersonUpdateOneWithoutAccountInput;
  PersonUpdateWithoutAccountDataInput: PersonUpdateWithoutAccountDataInput;
  PersonOrganizationAffiliationUpdateManyWithoutPersonInput: PersonOrganizationAffiliationUpdateManyWithoutPersonInput;
  PersonOrganizationAffiliationScalarWhereInput: PersonOrganizationAffiliationScalarWhereInput;
  PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutPersonInput: PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutPersonInput;
  PersonOrganizationAffiliationUpdateWithoutPersonDataInput: PersonOrganizationAffiliationUpdateWithoutPersonDataInput;
  PersonOrganizationAffiliationMetaDataUpdateOneWithoutAffiliationInput: PersonOrganizationAffiliationMetaDataUpdateOneWithoutAffiliationInput;
  PersonOrganizationAffiliationMetaDataUpdateWithoutAffiliationDataInput: PersonOrganizationAffiliationMetaDataUpdateWithoutAffiliationDataInput;
  PersonOrganizationAffiliationMetaDataUpsertWithoutAffiliationInput: PersonOrganizationAffiliationMetaDataUpsertWithoutAffiliationInput;
  OrganizationUpdateOneRequiredWithoutAffiliationInput: OrganizationUpdateOneRequiredWithoutAffiliationInput;
  OrganizationUpdateWithoutAffiliationDataInput: OrganizationUpdateWithoutAffiliationDataInput;
  OrganizationCategoryUpdateManyWithoutOrganizationsInput: OrganizationCategoryUpdateManyWithoutOrganizationsInput;
  OrganizationCategoryScalarWhereInput: OrganizationCategoryScalarWhereInput;
  OrganizationCategoryUpdateWithWhereUniqueWithoutOrganizationsInput: OrganizationCategoryUpdateWithWhereUniqueWithoutOrganizationsInput;
  OrganizationCategoryUpdateWithoutOrganizationsDataInput: OrganizationCategoryUpdateWithoutOrganizationsDataInput;
  OrganizationCategoryUpdateManyWithoutChildrenInput: OrganizationCategoryUpdateManyWithoutChildrenInput;
  OrganizationCategoryUpdateWithWhereUniqueWithoutChildrenInput: OrganizationCategoryUpdateWithWhereUniqueWithoutChildrenInput;
  OrganizationCategoryUpdateWithoutChildrenDataInput: OrganizationCategoryUpdateWithoutChildrenDataInput;
  OrganizationUpdateManyWithoutCategoriesInput: OrganizationUpdateManyWithoutCategoriesInput;
  OrganizationScalarWhereInput: OrganizationScalarWhereInput;
  OrganizationUpdateWithWhereUniqueWithoutCategoriesInput: OrganizationUpdateWithWhereUniqueWithoutCategoriesInput;
  OrganizationUpdateWithoutCategoriesDataInput: OrganizationUpdateWithoutCategoriesDataInput;
  PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput: PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput;
  PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutOrganizationInput: PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutOrganizationInput;
  PersonOrganizationAffiliationUpdateWithoutOrganizationDataInput: PersonOrganizationAffiliationUpdateWithoutOrganizationDataInput;
  PersonUpdateOneRequiredWithoutAffiliationInput: PersonUpdateOneRequiredWithoutAffiliationInput;
  PersonUpdateWithoutAffiliationDataInput: PersonUpdateWithoutAffiliationDataInput;
  PartyAccountUpdateOneWithoutPersonInput: PartyAccountUpdateOneWithoutPersonInput;
  PartyAccountUpdateWithoutPersonDataInput: PartyAccountUpdateWithoutPersonDataInput;
  OrganizationUpdateManyWithoutAdminsInput: OrganizationUpdateManyWithoutAdminsInput;
  OrganizationUpdateWithWhereUniqueWithoutAdminsInput: OrganizationUpdateWithWhereUniqueWithoutAdminsInput;
  OrganizationUpdateWithoutAdminsDataInput: OrganizationUpdateWithoutAdminsDataInput;
  OrganizationContextUpdateManyInput: OrganizationContextUpdateManyInput;
  OrganizationContextScalarWhereInput: OrganizationContextScalarWhereInput;
  OrganizationContextUpdateWithWhereUniqueNestedInput: OrganizationContextUpdateWithWhereUniqueNestedInput;
  OrganizationContextUpdateDataInput: OrganizationContextUpdateDataInput;
  OrganizationContextMetaDataUpdateOneWithoutOrganizationContextInput: OrganizationContextMetaDataUpdateOneWithoutOrganizationContextInput;
  OrganizationContextMetaDataUpdateWithoutOrganizationContextDataInput: OrganizationContextMetaDataUpdateWithoutOrganizationContextDataInput;
  OrganizationContextMetaDataUpsertWithoutOrganizationContextInput: OrganizationContextMetaDataUpsertWithoutOrganizationContextInput;
  OrganizationContextUpdateManyWithWhereNestedInput: OrganizationContextUpdateManyWithWhereNestedInput;
  OrganizationContextUpdateManyDataInput: OrganizationContextUpdateManyDataInput;
  OrganizationContextUpsertWithWhereUniqueNestedInput: OrganizationContextUpsertWithWhereUniqueNestedInput;
  PartyEmailUpdateManyInput: PartyEmailUpdateManyInput;
  PartyEmailScalarWhereInput: PartyEmailScalarWhereInput;
  PartyEmailUpdateWithWhereUniqueNestedInput: PartyEmailUpdateWithWhereUniqueNestedInput;
  PartyEmailUpdateDataInput: PartyEmailUpdateDataInput;
  PartyEmailUpdateManyWithWhereNestedInput: PartyEmailUpdateManyWithWhereNestedInput;
  PartyEmailUpdateManyDataInput: PartyEmailUpdateManyDataInput;
  PartyEmailUpsertWithWhereUniqueNestedInput: PartyEmailUpsertWithWhereUniqueNestedInput;
  OrganizationLinkUpdateManyWithoutOrganizationInput: OrganizationLinkUpdateManyWithoutOrganizationInput;
  OrganizationLinkScalarWhereInput: OrganizationLinkScalarWhereInput;
  OrganizationLinkUpdateWithWhereUniqueWithoutOrganizationInput: OrganizationLinkUpdateWithWhereUniqueWithoutOrganizationInput;
  OrganizationLinkUpdateWithoutOrganizationDataInput: OrganizationLinkUpdateWithoutOrganizationDataInput;
  OrganizationLinkUpdateManyWithWhereNestedInput: OrganizationLinkUpdateManyWithWhereNestedInput;
  OrganizationLinkUpdateManyDataInput: OrganizationLinkUpdateManyDataInput;
  OrganizationLinkUpsertWithWhereUniqueWithoutOrganizationInput: OrganizationLinkUpsertWithWhereUniqueWithoutOrganizationInput;
  OrganizationLocationUpdateManyWithoutOrganizationInput: OrganizationLocationUpdateManyWithoutOrganizationInput;
  OrganizationLocationScalarWhereInput: OrganizationLocationScalarWhereInput;
  OrganizationLocationUpdateWithWhereUniqueWithoutOrganizationInput: OrganizationLocationUpdateWithWhereUniqueWithoutOrganizationInput;
  OrganizationLocationUpdateWithoutOrganizationDataInput: OrganizationLocationUpdateWithoutOrganizationDataInput;
  OrganizationLocationUpdateManyWithWhereNestedInput: OrganizationLocationUpdateManyWithWhereNestedInput;
  OrganizationLocationUpdateManyDataInput: OrganizationLocationUpdateManyDataInput;
  OrganizationLocationUpsertWithWhereUniqueWithoutOrganizationInput: OrganizationLocationUpsertWithWhereUniqueWithoutOrganizationInput;
  OrganizationLogoUpdateManyWithoutOrganizationInput: OrganizationLogoUpdateManyWithoutOrganizationInput;
  OrganizationLogoScalarWhereInput: OrganizationLogoScalarWhereInput;
  OrganizationLogoUpdateWithWhereUniqueWithoutOrganizationInput: OrganizationLogoUpdateWithWhereUniqueWithoutOrganizationInput;
  OrganizationLogoUpdateWithoutOrganizationDataInput: OrganizationLogoUpdateWithoutOrganizationDataInput;
  OrganizationLogoUpdateManyWithWhereNestedInput: OrganizationLogoUpdateManyWithWhereNestedInput;
  OrganizationLogoUpdateManyDataInput: OrganizationLogoUpdateManyDataInput;
  OrganizationLogoUpsertWithWhereUniqueWithoutOrganizationInput: OrganizationLogoUpsertWithWhereUniqueWithoutOrganizationInput;
  OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput: OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput;
  OrganizationMetaDataUpdateWithoutOrganizationDataInput: OrganizationMetaDataUpdateWithoutOrganizationDataInput;
  OrganizationMetaDataUpsertWithoutOrganizationInput: OrganizationMetaDataUpsertWithoutOrganizationInput;
  OrganizationNameUpdateManyWithoutOrganizationInput: OrganizationNameUpdateManyWithoutOrganizationInput;
  OrganizationNameScalarWhereInput: OrganizationNameScalarWhereInput;
  OrganizationNameUpdateWithWhereUniqueWithoutOrganizationInput: OrganizationNameUpdateWithWhereUniqueWithoutOrganizationInput;
  OrganizationNameUpdateWithoutOrganizationDataInput: OrganizationNameUpdateWithoutOrganizationDataInput;
  OrganizationNameUpdateManyWithWhereNestedInput: OrganizationNameUpdateManyWithWhereNestedInput;
  OrganizationNameUpdateManyDataInput: OrganizationNameUpdateManyDataInput;
  OrganizationNameUpsertWithWhereUniqueWithoutOrganizationInput: OrganizationNameUpsertWithWhereUniqueWithoutOrganizationInput;
  PartyRoleUpdateManyWithoutResourceInput: PartyRoleUpdateManyWithoutResourceInput;
  PartyRoleScalarWhereInput: PartyRoleScalarWhereInput;
  PartyRoleUpdateWithWhereUniqueWithoutResourceInput: PartyRoleUpdateWithWhereUniqueWithoutResourceInput;
  PartyRoleUpdateWithoutResourceDataInput: PartyRoleUpdateWithoutResourceDataInput;
  PartyAccountUpdateOneRequiredWithoutRolesInput: PartyAccountUpdateOneRequiredWithoutRolesInput;
  PartyAccountUpdateWithoutRolesDataInput: PartyAccountUpdateWithoutRolesDataInput;
  PartyAccountUpsertWithoutRolesInput: PartyAccountUpsertWithoutRolesInput;
  PartyRoleTypeUpdateOneRequiredInput: PartyRoleTypeUpdateOneRequiredInput;
  PartyRoleTypeUpdateDataInput: PartyRoleTypeUpdateDataInput;
  PartyRoleTypeUpsertNestedInput: PartyRoleTypeUpsertNestedInput;
  PartyRoleUpdateManyWithWhereNestedInput: PartyRoleUpdateManyWithWhereNestedInput;
  PartyRoleUpdateManyDataInput: PartyRoleUpdateManyDataInput;
  PartyRoleUpsertWithWhereUniqueWithoutResourceInput: PartyRoleUpsertWithWhereUniqueWithoutResourceInput;
  PartyPhoneUpdateManyInput: PartyPhoneUpdateManyInput;
  PartyPhoneScalarWhereInput: PartyPhoneScalarWhereInput;
  PartyPhoneUpdateWithWhereUniqueNestedInput: PartyPhoneUpdateWithWhereUniqueNestedInput;
  PartyPhoneUpdateDataInput: PartyPhoneUpdateDataInput;
  PartyPhoneUpdateManyWithWhereNestedInput: PartyPhoneUpdateManyWithWhereNestedInput;
  PartyPhoneUpdateManyDataInput: PartyPhoneUpdateManyDataInput;
  PartyPhoneUpsertWithWhereUniqueNestedInput: PartyPhoneUpsertWithWhereUniqueNestedInput;
  OrganizationTargetMarketUpdateManyWithoutOrganizationsInput: OrganizationTargetMarketUpdateManyWithoutOrganizationsInput;
  OrganizationTargetMarketScalarWhereInput: OrganizationTargetMarketScalarWhereInput;
  OrganizationTargetMarketUpdateWithWhereUniqueWithoutOrganizationsInput: OrganizationTargetMarketUpdateWithWhereUniqueWithoutOrganizationsInput;
  OrganizationTargetMarketUpdateWithoutOrganizationsDataInput: OrganizationTargetMarketUpdateWithoutOrganizationsDataInput;
  OrganizationTargetMarketUpdateManyWithWhereNestedInput: OrganizationTargetMarketUpdateManyWithWhereNestedInput;
  OrganizationTargetMarketUpdateManyDataInput: OrganizationTargetMarketUpdateManyDataInput;
  OrganizationTargetMarketUpsertWithWhereUniqueWithoutOrganizationsInput: OrganizationTargetMarketUpsertWithWhereUniqueWithoutOrganizationsInput;
  OrganizationUpdateManyWithWhereNestedInput: OrganizationUpdateManyWithWhereNestedInput;
  OrganizationUpdateManyDataInput: OrganizationUpdateManyDataInput;
  OrganizationUpsertWithWhereUniqueWithoutAdminsInput: OrganizationUpsertWithWhereUniqueWithoutAdminsInput;
  PartyRoleUpdateManyWithoutPartyInput: PartyRoleUpdateManyWithoutPartyInput;
  PartyRoleUpdateWithWhereUniqueWithoutPartyInput: PartyRoleUpdateWithWhereUniqueWithoutPartyInput;
  PartyRoleUpdateWithoutPartyDataInput: PartyRoleUpdateWithoutPartyDataInput;
  OrganizationUpdateOneRequiredWithoutPartiesInput: OrganizationUpdateOneRequiredWithoutPartiesInput;
  OrganizationUpdateWithoutPartiesDataInput: OrganizationUpdateWithoutPartiesDataInput;
  OrganizationUpsertWithoutPartiesInput: OrganizationUpsertWithoutPartiesInput;
  PartyRoleUpsertWithWhereUniqueWithoutPartyInput: PartyRoleUpsertWithWhereUniqueWithoutPartyInput;
  PartyAccountUpsertWithoutPersonInput: PartyAccountUpsertWithoutPersonInput;
  PersonAvatarUpdateManyWithoutPersonInput: PersonAvatarUpdateManyWithoutPersonInput;
  PersonAvatarScalarWhereInput: PersonAvatarScalarWhereInput;
  PersonAvatarUpdateWithWhereUniqueWithoutPersonInput: PersonAvatarUpdateWithWhereUniqueWithoutPersonInput;
  PersonAvatarUpdateWithoutPersonDataInput: PersonAvatarUpdateWithoutPersonDataInput;
  PersonAvatarUpdateManyWithWhereNestedInput: PersonAvatarUpdateManyWithWhereNestedInput;
  PersonAvatarUpdateManyDataInput: PersonAvatarUpdateManyDataInput;
  PersonAvatarUpsertWithWhereUniqueWithoutPersonInput: PersonAvatarUpsertWithWhereUniqueWithoutPersonInput;
  PersonMetaDataUpdateOneRequiredWithoutPersonInput: PersonMetaDataUpdateOneRequiredWithoutPersonInput;
  PersonMetaDataUpdateWithoutPersonDataInput: PersonMetaDataUpdateWithoutPersonDataInput;
  PersonMetaDataUpsertWithoutPersonInput: PersonMetaDataUpsertWithoutPersonInput;
  PersonNameUpdateManyWithoutPersonInput: PersonNameUpdateManyWithoutPersonInput;
  PersonNameScalarWhereInput: PersonNameScalarWhereInput;
  PersonNameUpdateWithWhereUniqueWithoutPersonInput: PersonNameUpdateWithWhereUniqueWithoutPersonInput;
  PersonNameUpdateWithoutPersonDataInput: PersonNameUpdateWithoutPersonDataInput;
  PersonNameUpdateManyWithWhereNestedInput: PersonNameUpdateManyWithWhereNestedInput;
  PersonNameUpdateManyDataInput: PersonNameUpdateManyDataInput;
  PersonNameUpsertWithWhereUniqueWithoutPersonInput: PersonNameUpsertWithWhereUniqueWithoutPersonInput;
  PersonUpsertWithoutAffiliationInput: PersonUpsertWithoutAffiliationInput;
  PersonOrganizationAffiliationUpdateManyWithWhereNestedInput: PersonOrganizationAffiliationUpdateManyWithWhereNestedInput;
  PersonOrganizationAffiliationUpdateManyDataInput: PersonOrganizationAffiliationUpdateManyDataInput;
  PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutOrganizationInput: PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutOrganizationInput;
  OrganizationUpsertWithWhereUniqueWithoutCategoriesInput: OrganizationUpsertWithWhereUniqueWithoutCategoriesInput;
  OrganizationCategoryUpdateOneWithoutParentInput: OrganizationCategoryUpdateOneWithoutParentInput;
  OrganizationCategoryUpdateWithoutParentDataInput: OrganizationCategoryUpdateWithoutParentDataInput;
  OrganizationCategoryUpsertWithoutParentInput: OrganizationCategoryUpsertWithoutParentInput;
  OrganizationCategoryUpdateManyWithWhereNestedInput: OrganizationCategoryUpdateManyWithWhereNestedInput;
  OrganizationCategoryUpdateManyDataInput: OrganizationCategoryUpdateManyDataInput;
  OrganizationCategoryUpsertWithWhereUniqueWithoutChildrenInput: OrganizationCategoryUpsertWithWhereUniqueWithoutChildrenInput;
  OrganizationCategoryUpsertWithWhereUniqueWithoutOrganizationsInput: OrganizationCategoryUpsertWithWhereUniqueWithoutOrganizationsInput;
  OrganizationUpsertWithoutAffiliationInput: OrganizationUpsertWithoutAffiliationInput;
  PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutPersonInput: PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutPersonInput;
  PersonUpsertWithoutAccountInput: PersonUpsertWithoutAccountInput;
  PartyAccountUpdateManyWithWhereNestedInput: PartyAccountUpdateManyWithWhereNestedInput;
  PartyAccountUpdateManyDataInput: PartyAccountUpdateManyDataInput;
  PartyAccountUpsertWithWhereUniqueWithoutAdminInput: PartyAccountUpsertWithWhereUniqueWithoutAdminInput;
  OrganizationBusinessModelUpdateInput: OrganizationBusinessModelUpdateInput;
  OrganizationUpdateManyInput: OrganizationUpdateManyInput;
  OrganizationUpdateWithWhereUniqueNestedInput: OrganizationUpdateWithWhereUniqueNestedInput;
  OrganizationUpdateDataInput: OrganizationUpdateDataInput;
  OrganizationUpsertWithWhereUniqueNestedInput: OrganizationUpsertWithWhereUniqueNestedInput;
  OrganizationCategoryUpdateInput: OrganizationCategoryUpdateInput;
  OrganizationContextUpdateInput: OrganizationContextUpdateInput;
  OrganizationContextMetaDataUpdateInput: OrganizationContextMetaDataUpdateInput;
  OrganizationContextUpdateOneRequiredWithoutMetadataInput: OrganizationContextUpdateOneRequiredWithoutMetadataInput;
  OrganizationContextUpdateWithoutMetadataDataInput: OrganizationContextUpdateWithoutMetadataDataInput;
  OrganizationContextUpsertWithoutMetadataInput: OrganizationContextUpsertWithoutMetadataInput;
  OrganizationLinkUpdateInput: OrganizationLinkUpdateInput;
  OrganizationUpdateOneRequiredWithoutLinksInput: OrganizationUpdateOneRequiredWithoutLinksInput;
  OrganizationUpdateWithoutLinksDataInput: OrganizationUpdateWithoutLinksDataInput;
  OrganizationUpsertWithoutLinksInput: OrganizationUpsertWithoutLinksInput;
  OrganizationLocationUpdateInput: OrganizationLocationUpdateInput;
  OrganizationUpdateOneRequiredWithoutLocationInput: OrganizationUpdateOneRequiredWithoutLocationInput;
  OrganizationUpdateWithoutLocationDataInput: OrganizationUpdateWithoutLocationDataInput;
  OrganizationUpsertWithoutLocationInput: OrganizationUpsertWithoutLocationInput;
  OrganizationLogoUpdateInput: OrganizationLogoUpdateInput;
  OrganizationUpdateOneRequiredWithoutLogoInput: OrganizationUpdateOneRequiredWithoutLogoInput;
  OrganizationUpdateWithoutLogoDataInput: OrganizationUpdateWithoutLogoDataInput;
  OrganizationUpsertWithoutLogoInput: OrganizationUpsertWithoutLogoInput;
  OrganizationMetaDataUpdateInput: OrganizationMetaDataUpdateInput;
  OrganizationUpdateOneRequiredWithoutMetadataInput: OrganizationUpdateOneRequiredWithoutMetadataInput;
  OrganizationUpdateWithoutMetadataDataInput: OrganizationUpdateWithoutMetadataDataInput;
  OrganizationUpsertWithoutMetadataInput: OrganizationUpsertWithoutMetadataInput;
  OrganizationNameUpdateInput: OrganizationNameUpdateInput;
  OrganizationUpdateOneRequiredWithoutNameInput: OrganizationUpdateOneRequiredWithoutNameInput;
  OrganizationUpdateWithoutNameDataInput: OrganizationUpdateWithoutNameDataInput;
  OrganizationUpsertWithoutNameInput: OrganizationUpsertWithoutNameInput;
  OrganizationTargetMarketUpdateInput: OrganizationTargetMarketUpdateInput;
  OrganizationUpdateManyWithoutTargetMarketsInput: OrganizationUpdateManyWithoutTargetMarketsInput;
  OrganizationUpdateWithWhereUniqueWithoutTargetMarketsInput: OrganizationUpdateWithWhereUniqueWithoutTargetMarketsInput;
  OrganizationUpdateWithoutTargetMarketsDataInput: OrganizationUpdateWithoutTargetMarketsDataInput;
  OrganizationUpsertWithWhereUniqueWithoutTargetMarketsInput: OrganizationUpsertWithWhereUniqueWithoutTargetMarketsInput;
  PartyAccountUpdateInput: PartyAccountUpdateInput;
  PartyEmailUpdateInput: PartyEmailUpdateInput;
  PartyPhoneUpdateInput: PartyPhoneUpdateInput;
  PartyRoleUpdateInput: PartyRoleUpdateInput;
  PartyRoleTypeUpdateInput: PartyRoleTypeUpdateInput;
  PersonUpdateInput: PersonUpdateInput;
  PersonAvatarUpdateInput: PersonAvatarUpdateInput;
  PersonUpdateOneRequiredWithoutAvatarInput: PersonUpdateOneRequiredWithoutAvatarInput;
  PersonUpdateWithoutAvatarDataInput: PersonUpdateWithoutAvatarDataInput;
  PersonUpsertWithoutAvatarInput: PersonUpsertWithoutAvatarInput;
  PersonMetaDataUpdateInput: PersonMetaDataUpdateInput;
  PersonUpdateOneRequiredWithoutMetadataInput: PersonUpdateOneRequiredWithoutMetadataInput;
  PersonUpdateWithoutMetadataDataInput: PersonUpdateWithoutMetadataDataInput;
  PersonUpsertWithoutMetadataInput: PersonUpsertWithoutMetadataInput;
  PersonNameUpdateInput: PersonNameUpdateInput;
  PersonUpdateOneWithoutNameInput: PersonUpdateOneWithoutNameInput;
  PersonUpdateWithoutNameDataInput: PersonUpdateWithoutNameDataInput;
  PersonUpsertWithoutNameInput: PersonUpsertWithoutNameInput;
  PersonOrganizationAffiliationUpdateInput: PersonOrganizationAffiliationUpdateInput;
  PersonOrganizationAffiliationMetaDataUpdateInput: PersonOrganizationAffiliationMetaDataUpdateInput;
  PersonOrganizationAffiliationUpdateOneRequiredWithoutMetadataInput: PersonOrganizationAffiliationUpdateOneRequiredWithoutMetadataInput;
  PersonOrganizationAffiliationUpdateWithoutMetadataDataInput: PersonOrganizationAffiliationUpdateWithoutMetadataDataInput;
  PersonOrganizationAffiliationUpsertWithoutMetadataInput: PersonOrganizationAffiliationUpsertWithoutMetadataInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  PartyAccount: PartyAccount;
  String: Scalars['String'];
  Int: Scalars['Int'];
  OrganizationOrderByInput: OrganizationOrderByInput;
  OrganizationWhereInput: OrganizationWhereInput;
  PartyAccountWhereInput: PartyAccountWhereInput;
  DateTime: Scalars['DateTime'];
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  PersonWhereInput: PersonWhereInput;
  PersonOrganizationAffiliationWhereInput: PersonOrganizationAffiliationWhereInput;
  PersonOrganizationAffiliationMetaDataWhereInput: PersonOrganizationAffiliationMetaDataWhereInput;
  PersonAvatarWhereInput: PersonAvatarWhereInput;
  PartyEmailWhereInput: PartyEmailWhereInput;
  PersonMetaDataWhereInput: PersonMetaDataWhereInput;
  PersonNameWhereInput: PersonNameWhereInput;
  PartyPhoneWhereInput: PartyPhoneWhereInput;
  PartyRoleWhereInput: PartyRoleWhereInput;
  PartyRoleTypeWhereInput: PartyRoleTypeWhereInput;
  OrganizationCategoryWhereInput: OrganizationCategoryWhereInput;
  OrganizationContextWhereInput: OrganizationContextWhereInput;
  OrganizationContextMetaDataWhereInput: OrganizationContextMetaDataWhereInput;
  OrganizationContextType: OrganizationContextType;
  OrganizationLinkWhereInput: OrganizationLinkWhereInput;
  OrganizationLinkType: OrganizationLinkType;
  OrganizationLocationWhereInput: OrganizationLocationWhereInput;
  OrganizationLogoWhereInput: OrganizationLogoWhereInput;
  OrganizationMetaDataWhereInput: OrganizationMetaDataWhereInput;
  OrganizationNameWhereInput: OrganizationNameWhereInput;
  OrganizationTargetMarketWhereInput: OrganizationTargetMarketWhereInput;
  Organization: Organization;
  PartyAccountOrderByInput: PartyAccountOrderByInput;
  PersonOrganizationAffiliationOrderByInput: PersonOrganizationAffiliationOrderByInput;
  PersonOrganizationAffiliation: PersonOrganizationAffiliation;
  PersonOrganizationAffiliationMetaData: PersonOrganizationAffiliationMetaData;
  Person: Person;
  PersonAvatarOrderByInput: PersonAvatarOrderByInput;
  PersonAvatar: PersonAvatar;
  PartyEmailOrderByInput: PartyEmailOrderByInput;
  PartyEmail: PartyEmail;
  PersonMetaData: PersonMetaData;
  PersonNameOrderByInput: PersonNameOrderByInput;
  PersonName: PersonName;
  PartyPhoneOrderByInput: PartyPhoneOrderByInput;
  PartyPhone: PartyPhone;
  OrganizationCategoryOrderByInput: OrganizationCategoryOrderByInput;
  OrganizationCategory: OrganizationCategory;
  OrganizationContextOrderByInput: OrganizationContextOrderByInput;
  OrganizationContext: OrganizationContext;
  OrganizationContextMetaData: OrganizationContextMetaData;
  OrganizationLinkOrderByInput: OrganizationLinkOrderByInput;
  OrganizationLink: OrganizationLink;
  OrganizationLocationOrderByInput: OrganizationLocationOrderByInput;
  OrganizationLocation: OrganizationLocation;
  Json: Scalars['Json'];
  OrganizationLogoOrderByInput: OrganizationLogoOrderByInput;
  OrganizationLogo: OrganizationLogo;
  OrganizationMetaData: OrganizationMetaData;
  OrganizationNameOrderByInput: OrganizationNameOrderByInput;
  OrganizationName: OrganizationName;
  PartyRoleOrderByInput: PartyRoleOrderByInput;
  PartyRole: PartyRole;
  PartyRoleType: PartyRoleType;
  OrganizationTargetMarketOrderByInput: OrganizationTargetMarketOrderByInput;
  OrganizationTargetMarket: OrganizationTargetMarket;
  OrganizationWhereUniqueInput: OrganizationWhereUniqueInput;
  OrganizationBusinessModelWhereUniqueInput: OrganizationBusinessModelWhereUniqueInput;
  OrganizationBusinessModel: OrganizationBusinessModel;
  OrganizationBusinessModelOrderByInput: OrganizationBusinessModelOrderByInput;
  OrganizationBusinessModelWhereInput: OrganizationBusinessModelWhereInput;
  OrganizationBusinessModelConnection: OrganizationBusinessModelConnection;
  AggregateOrganizationBusinessModel: AggregateOrganizationBusinessModel;
  OrganizationBusinessModelEdge: OrganizationBusinessModelEdge;
  PageInfo: PageInfo;
  OrganizationCategoryConnection: OrganizationCategoryConnection;
  AggregateOrganizationCategory: AggregateOrganizationCategory;
  OrganizationCategoryEdge: OrganizationCategoryEdge;
  OrganizationCategoryWhereUniqueInput: OrganizationCategoryWhereUniqueInput;
  OrganizationContextWhereUniqueInput: OrganizationContextWhereUniqueInput;
  OrganizationContextMetaDataWhereUniqueInput: OrganizationContextMetaDataWhereUniqueInput;
  OrganizationContextMetaDataOrderByInput: OrganizationContextMetaDataOrderByInput;
  OrganizationContextMetaDataConnection: OrganizationContextMetaDataConnection;
  AggregateOrganizationContextMetaData: AggregateOrganizationContextMetaData;
  OrganizationContextMetaDataEdge: OrganizationContextMetaDataEdge;
  OrganizationContextConnection: OrganizationContextConnection;
  AggregateOrganizationContext: AggregateOrganizationContext;
  OrganizationContextEdge: OrganizationContextEdge;
  OrganizationLinkWhereUniqueInput: OrganizationLinkWhereUniqueInput;
  OrganizationLinkConnection: OrganizationLinkConnection;
  AggregateOrganizationLink: AggregateOrganizationLink;
  OrganizationLinkEdge: OrganizationLinkEdge;
  OrganizationLocationWhereUniqueInput: OrganizationLocationWhereUniqueInput;
  OrganizationLocationConnection: OrganizationLocationConnection;
  AggregateOrganizationLocation: AggregateOrganizationLocation;
  OrganizationLocationEdge: OrganizationLocationEdge;
  OrganizationLogoWhereUniqueInput: OrganizationLogoWhereUniqueInput;
  OrganizationLogoConnection: OrganizationLogoConnection;
  AggregateOrganizationLogo: AggregateOrganizationLogo;
  OrganizationLogoEdge: OrganizationLogoEdge;
  OrganizationMetaDataWhereUniqueInput: OrganizationMetaDataWhereUniqueInput;
  OrganizationMetaDataOrderByInput: OrganizationMetaDataOrderByInput;
  OrganizationMetaDataConnection: OrganizationMetaDataConnection;
  AggregateOrganizationMetaData: AggregateOrganizationMetaData;
  OrganizationMetaDataEdge: OrganizationMetaDataEdge;
  OrganizationNameWhereUniqueInput: OrganizationNameWhereUniqueInput;
  OrganizationNameConnection: OrganizationNameConnection;
  AggregateOrganizationName: AggregateOrganizationName;
  OrganizationNameEdge: OrganizationNameEdge;
  OrganizationConnection: OrganizationConnection;
  AggregateOrganization: AggregateOrganization;
  OrganizationEdge: OrganizationEdge;
  OrganizationTargetMarketWhereUniqueInput: OrganizationTargetMarketWhereUniqueInput;
  OrganizationTargetMarketConnection: OrganizationTargetMarketConnection;
  AggregateOrganizationTargetMarket: AggregateOrganizationTargetMarket;
  OrganizationTargetMarketEdge: OrganizationTargetMarketEdge;
  PartyAccountWhereUniqueInput: PartyAccountWhereUniqueInput;
  PartyAccountConnection: PartyAccountConnection;
  AggregatePartyAccount: AggregatePartyAccount;
  PartyAccountEdge: PartyAccountEdge;
  PartyEmailWhereUniqueInput: PartyEmailWhereUniqueInput;
  PartyEmailConnection: PartyEmailConnection;
  AggregatePartyEmail: AggregatePartyEmail;
  PartyEmailEdge: PartyEmailEdge;
  PartyPhoneWhereUniqueInput: PartyPhoneWhereUniqueInput;
  PartyPhoneConnection: PartyPhoneConnection;
  AggregatePartyPhone: AggregatePartyPhone;
  PartyPhoneEdge: PartyPhoneEdge;
  PartyRoleWhereUniqueInput: PartyRoleWhereUniqueInput;
  PartyRoleConnection: PartyRoleConnection;
  AggregatePartyRole: AggregatePartyRole;
  PartyRoleEdge: PartyRoleEdge;
  PartyRoleTypeWhereUniqueInput: PartyRoleTypeWhereUniqueInput;
  PartyRoleTypeOrderByInput: PartyRoleTypeOrderByInput;
  PartyRoleTypeConnection: PartyRoleTypeConnection;
  AggregatePartyRoleType: AggregatePartyRoleType;
  PartyRoleTypeEdge: PartyRoleTypeEdge;
  PersonWhereUniqueInput: PersonWhereUniqueInput;
  PersonAvatarWhereUniqueInput: PersonAvatarWhereUniqueInput;
  PersonAvatarConnection: PersonAvatarConnection;
  AggregatePersonAvatar: AggregatePersonAvatar;
  PersonAvatarEdge: PersonAvatarEdge;
  PersonMetaDataWhereUniqueInput: PersonMetaDataWhereUniqueInput;
  PersonMetaDataOrderByInput: PersonMetaDataOrderByInput;
  PersonMetaDataConnection: PersonMetaDataConnection;
  AggregatePersonMetaData: AggregatePersonMetaData;
  PersonMetaDataEdge: PersonMetaDataEdge;
  PersonNameWhereUniqueInput: PersonNameWhereUniqueInput;
  PersonNameConnection: PersonNameConnection;
  AggregatePersonName: AggregatePersonName;
  PersonNameEdge: PersonNameEdge;
  PersonOrganizationAffiliationWhereUniqueInput: PersonOrganizationAffiliationWhereUniqueInput;
  PersonOrganizationAffiliationMetaDataWhereUniqueInput: PersonOrganizationAffiliationMetaDataWhereUniqueInput;
  PersonOrganizationAffiliationMetaDataOrderByInput: PersonOrganizationAffiliationMetaDataOrderByInput;
  PersonOrganizationAffiliationMetaDataConnection: PersonOrganizationAffiliationMetaDataConnection;
  AggregatePersonOrganizationAffiliationMetaData: AggregatePersonOrganizationAffiliationMetaData;
  PersonOrganizationAffiliationMetaDataEdge: PersonOrganizationAffiliationMetaDataEdge;
  PersonOrganizationAffiliationConnection: PersonOrganizationAffiliationConnection;
  AggregatePersonOrganizationAffiliation: AggregatePersonOrganizationAffiliation;
  PersonOrganizationAffiliationEdge: PersonOrganizationAffiliationEdge;
  PersonOrderByInput: PersonOrderByInput;
  PersonConnection: PersonConnection;
  AggregatePerson: AggregatePerson;
  PersonEdge: PersonEdge;
  Mutation: {};
  OrganizationCreateInput: OrganizationCreateInput;
  PartyAccountCreateManyWithoutAdminInput: PartyAccountCreateManyWithoutAdminInput;
  PartyAccountCreateWithoutAdminInput: PartyAccountCreateWithoutAdminInput;
  PersonCreateOneWithoutAccountInput: PersonCreateOneWithoutAccountInput;
  PersonCreateWithoutAccountInput: PersonCreateWithoutAccountInput;
  PersonOrganizationAffiliationCreateManyWithoutPersonInput: PersonOrganizationAffiliationCreateManyWithoutPersonInput;
  PersonOrganizationAffiliationCreateWithoutPersonInput: PersonOrganizationAffiliationCreateWithoutPersonInput;
  PersonOrganizationAffiliationMetaDataCreateOneWithoutAffiliationInput: PersonOrganizationAffiliationMetaDataCreateOneWithoutAffiliationInput;
  PersonOrganizationAffiliationMetaDataCreateWithoutAffiliationInput: PersonOrganizationAffiliationMetaDataCreateWithoutAffiliationInput;
  OrganizationCreateOneWithoutAffiliationInput: OrganizationCreateOneWithoutAffiliationInput;
  OrganizationCreateWithoutAffiliationInput: OrganizationCreateWithoutAffiliationInput;
  OrganizationCategoryCreateManyWithoutOrganizationsInput: OrganizationCategoryCreateManyWithoutOrganizationsInput;
  OrganizationCategoryCreateWithoutOrganizationsInput: OrganizationCategoryCreateWithoutOrganizationsInput;
  OrganizationCategoryCreateManyWithoutChildrenInput: OrganizationCategoryCreateManyWithoutChildrenInput;
  OrganizationCategoryCreateWithoutChildrenInput: OrganizationCategoryCreateWithoutChildrenInput;
  OrganizationCreateManyWithoutCategoriesInput: OrganizationCreateManyWithoutCategoriesInput;
  OrganizationCreateWithoutCategoriesInput: OrganizationCreateWithoutCategoriesInput;
  PersonOrganizationAffiliationCreateManyWithoutOrganizationInput: PersonOrganizationAffiliationCreateManyWithoutOrganizationInput;
  PersonOrganizationAffiliationCreateWithoutOrganizationInput: PersonOrganizationAffiliationCreateWithoutOrganizationInput;
  PersonCreateOneWithoutAffiliationInput: PersonCreateOneWithoutAffiliationInput;
  PersonCreateWithoutAffiliationInput: PersonCreateWithoutAffiliationInput;
  PartyAccountCreateOneWithoutPersonInput: PartyAccountCreateOneWithoutPersonInput;
  PartyAccountCreateWithoutPersonInput: PartyAccountCreateWithoutPersonInput;
  OrganizationCreateManyWithoutAdminsInput: OrganizationCreateManyWithoutAdminsInput;
  OrganizationCreateWithoutAdminsInput: OrganizationCreateWithoutAdminsInput;
  OrganizationContextCreateManyInput: OrganizationContextCreateManyInput;
  OrganizationContextCreateInput: OrganizationContextCreateInput;
  OrganizationContextMetaDataCreateOneWithoutOrganizationContextInput: OrganizationContextMetaDataCreateOneWithoutOrganizationContextInput;
  OrganizationContextMetaDataCreateWithoutOrganizationContextInput: OrganizationContextMetaDataCreateWithoutOrganizationContextInput;
  PartyEmailCreateManyInput: PartyEmailCreateManyInput;
  PartyEmailCreateInput: PartyEmailCreateInput;
  OrganizationLinkCreateManyWithoutOrganizationInput: OrganizationLinkCreateManyWithoutOrganizationInput;
  OrganizationLinkCreateWithoutOrganizationInput: OrganizationLinkCreateWithoutOrganizationInput;
  OrganizationLocationCreateManyWithoutOrganizationInput: OrganizationLocationCreateManyWithoutOrganizationInput;
  OrganizationLocationCreateWithoutOrganizationInput: OrganizationLocationCreateWithoutOrganizationInput;
  OrganizationLogoCreateManyWithoutOrganizationInput: OrganizationLogoCreateManyWithoutOrganizationInput;
  OrganizationLogoCreateWithoutOrganizationInput: OrganizationLogoCreateWithoutOrganizationInput;
  OrganizationMetaDataCreateOneWithoutOrganizationInput: OrganizationMetaDataCreateOneWithoutOrganizationInput;
  OrganizationMetaDataCreateWithoutOrganizationInput: OrganizationMetaDataCreateWithoutOrganizationInput;
  OrganizationNameCreateManyWithoutOrganizationInput: OrganizationNameCreateManyWithoutOrganizationInput;
  OrganizationNameCreateWithoutOrganizationInput: OrganizationNameCreateWithoutOrganizationInput;
  PartyRoleCreateManyWithoutResourceInput: PartyRoleCreateManyWithoutResourceInput;
  PartyRoleCreateWithoutResourceInput: PartyRoleCreateWithoutResourceInput;
  PartyAccountCreateOneWithoutRolesInput: PartyAccountCreateOneWithoutRolesInput;
  PartyAccountCreateWithoutRolesInput: PartyAccountCreateWithoutRolesInput;
  PartyRoleTypeCreateOneInput: PartyRoleTypeCreateOneInput;
  PartyRoleTypeCreateInput: PartyRoleTypeCreateInput;
  PartyPhoneCreateManyInput: PartyPhoneCreateManyInput;
  PartyPhoneCreateInput: PartyPhoneCreateInput;
  OrganizationTargetMarketCreateManyWithoutOrganizationsInput: OrganizationTargetMarketCreateManyWithoutOrganizationsInput;
  OrganizationTargetMarketCreateWithoutOrganizationsInput: OrganizationTargetMarketCreateWithoutOrganizationsInput;
  PartyRoleCreateManyWithoutPartyInput: PartyRoleCreateManyWithoutPartyInput;
  PartyRoleCreateWithoutPartyInput: PartyRoleCreateWithoutPartyInput;
  OrganizationCreateOneWithoutPartiesInput: OrganizationCreateOneWithoutPartiesInput;
  OrganizationCreateWithoutPartiesInput: OrganizationCreateWithoutPartiesInput;
  PersonAvatarCreateManyWithoutPersonInput: PersonAvatarCreateManyWithoutPersonInput;
  PersonAvatarCreateWithoutPersonInput: PersonAvatarCreateWithoutPersonInput;
  PersonMetaDataCreateOneWithoutPersonInput: PersonMetaDataCreateOneWithoutPersonInput;
  PersonMetaDataCreateWithoutPersonInput: PersonMetaDataCreateWithoutPersonInput;
  PersonNameCreateManyWithoutPersonInput: PersonNameCreateManyWithoutPersonInput;
  PersonNameCreateWithoutPersonInput: PersonNameCreateWithoutPersonInput;
  OrganizationCategoryCreateOneWithoutParentInput: OrganizationCategoryCreateOneWithoutParentInput;
  OrganizationCategoryCreateWithoutParentInput: OrganizationCategoryCreateWithoutParentInput;
  OrganizationBusinessModelCreateInput: OrganizationBusinessModelCreateInput;
  OrganizationCreateManyInput: OrganizationCreateManyInput;
  OrganizationCategoryCreateInput: OrganizationCategoryCreateInput;
  OrganizationContextMetaDataCreateInput: OrganizationContextMetaDataCreateInput;
  OrganizationContextCreateOneWithoutMetadataInput: OrganizationContextCreateOneWithoutMetadataInput;
  OrganizationContextCreateWithoutMetadataInput: OrganizationContextCreateWithoutMetadataInput;
  OrganizationLinkCreateInput: OrganizationLinkCreateInput;
  OrganizationCreateOneWithoutLinksInput: OrganizationCreateOneWithoutLinksInput;
  OrganizationCreateWithoutLinksInput: OrganizationCreateWithoutLinksInput;
  OrganizationLocationCreateInput: OrganizationLocationCreateInput;
  OrganizationCreateOneWithoutLocationInput: OrganizationCreateOneWithoutLocationInput;
  OrganizationCreateWithoutLocationInput: OrganizationCreateWithoutLocationInput;
  OrganizationLogoCreateInput: OrganizationLogoCreateInput;
  OrganizationCreateOneWithoutLogoInput: OrganizationCreateOneWithoutLogoInput;
  OrganizationCreateWithoutLogoInput: OrganizationCreateWithoutLogoInput;
  OrganizationMetaDataCreateInput: OrganizationMetaDataCreateInput;
  OrganizationCreateOneWithoutMetadataInput: OrganizationCreateOneWithoutMetadataInput;
  OrganizationCreateWithoutMetadataInput: OrganizationCreateWithoutMetadataInput;
  OrganizationNameCreateInput: OrganizationNameCreateInput;
  OrganizationCreateOneWithoutNameInput: OrganizationCreateOneWithoutNameInput;
  OrganizationCreateWithoutNameInput: OrganizationCreateWithoutNameInput;
  OrganizationTargetMarketCreateInput: OrganizationTargetMarketCreateInput;
  OrganizationCreateManyWithoutTargetMarketsInput: OrganizationCreateManyWithoutTargetMarketsInput;
  OrganizationCreateWithoutTargetMarketsInput: OrganizationCreateWithoutTargetMarketsInput;
  PartyAccountCreateInput: PartyAccountCreateInput;
  PartyRoleCreateInput: PartyRoleCreateInput;
  PersonCreateInput: PersonCreateInput;
  PersonAvatarCreateInput: PersonAvatarCreateInput;
  PersonCreateOneWithoutAvatarInput: PersonCreateOneWithoutAvatarInput;
  PersonCreateWithoutAvatarInput: PersonCreateWithoutAvatarInput;
  PersonMetaDataCreateInput: PersonMetaDataCreateInput;
  PersonCreateOneWithoutMetadataInput: PersonCreateOneWithoutMetadataInput;
  PersonCreateWithoutMetadataInput: PersonCreateWithoutMetadataInput;
  PersonNameCreateInput: PersonNameCreateInput;
  PersonCreateOneWithoutNameInput: PersonCreateOneWithoutNameInput;
  PersonCreateWithoutNameInput: PersonCreateWithoutNameInput;
  PersonOrganizationAffiliationCreateInput: PersonOrganizationAffiliationCreateInput;
  PersonOrganizationAffiliationMetaDataCreateInput: PersonOrganizationAffiliationMetaDataCreateInput;
  PersonOrganizationAffiliationCreateOneWithoutMetadataInput: PersonOrganizationAffiliationCreateOneWithoutMetadataInput;
  PersonOrganizationAffiliationCreateWithoutMetadataInput: PersonOrganizationAffiliationCreateWithoutMetadataInput;
  BatchPayload: BatchPayload;
  Long: Scalars['Long'];
  OrganizationBusinessModelUpdateManyMutationInput: OrganizationBusinessModelUpdateManyMutationInput;
  OrganizationCategoryUpdateManyMutationInput: OrganizationCategoryUpdateManyMutationInput;
  OrganizationContextMetaDataUpdateManyMutationInput: OrganizationContextMetaDataUpdateManyMutationInput;
  OrganizationContextUpdateManyMutationInput: OrganizationContextUpdateManyMutationInput;
  OrganizationLinkUpdateManyMutationInput: OrganizationLinkUpdateManyMutationInput;
  OrganizationLocationUpdateManyMutationInput: OrganizationLocationUpdateManyMutationInput;
  OrganizationLogoUpdateManyMutationInput: OrganizationLogoUpdateManyMutationInput;
  OrganizationMetaDataUpdateManyMutationInput: OrganizationMetaDataUpdateManyMutationInput;
  OrganizationNameUpdateManyMutationInput: OrganizationNameUpdateManyMutationInput;
  OrganizationUpdateManyMutationInput: OrganizationUpdateManyMutationInput;
  OrganizationTargetMarketUpdateManyMutationInput: OrganizationTargetMarketUpdateManyMutationInput;
  PartyAccountUpdateManyMutationInput: PartyAccountUpdateManyMutationInput;
  PartyEmailUpdateManyMutationInput: PartyEmailUpdateManyMutationInput;
  PartyPhoneUpdateManyMutationInput: PartyPhoneUpdateManyMutationInput;
  PartyRoleUpdateManyMutationInput: PartyRoleUpdateManyMutationInput;
  PartyRoleTypeUpdateManyMutationInput: PartyRoleTypeUpdateManyMutationInput;
  PersonAvatarUpdateManyMutationInput: PersonAvatarUpdateManyMutationInput;
  PersonMetaDataUpdateManyMutationInput: PersonMetaDataUpdateManyMutationInput;
  PersonNameUpdateManyMutationInput: PersonNameUpdateManyMutationInput;
  PersonOrganizationAffiliationMetaDataUpdateManyMutationInput: PersonOrganizationAffiliationMetaDataUpdateManyMutationInput;
  PersonOrganizationAffiliationUpdateManyMutationInput: PersonOrganizationAffiliationUpdateManyMutationInput;
  PersonUpdateManyMutationInput: PersonUpdateManyMutationInput;
  OrganizationUpdateInput: OrganizationUpdateInput;
  PartyAccountUpdateManyWithoutAdminInput: PartyAccountUpdateManyWithoutAdminInput;
  PartyAccountScalarWhereInput: PartyAccountScalarWhereInput;
  PartyAccountUpdateWithWhereUniqueWithoutAdminInput: PartyAccountUpdateWithWhereUniqueWithoutAdminInput;
  PartyAccountUpdateWithoutAdminDataInput: PartyAccountUpdateWithoutAdminDataInput;
  PersonUpdateOneWithoutAccountInput: PersonUpdateOneWithoutAccountInput;
  PersonUpdateWithoutAccountDataInput: PersonUpdateWithoutAccountDataInput;
  PersonOrganizationAffiliationUpdateManyWithoutPersonInput: PersonOrganizationAffiliationUpdateManyWithoutPersonInput;
  PersonOrganizationAffiliationScalarWhereInput: PersonOrganizationAffiliationScalarWhereInput;
  PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutPersonInput: PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutPersonInput;
  PersonOrganizationAffiliationUpdateWithoutPersonDataInput: PersonOrganizationAffiliationUpdateWithoutPersonDataInput;
  PersonOrganizationAffiliationMetaDataUpdateOneWithoutAffiliationInput: PersonOrganizationAffiliationMetaDataUpdateOneWithoutAffiliationInput;
  PersonOrganizationAffiliationMetaDataUpdateWithoutAffiliationDataInput: PersonOrganizationAffiliationMetaDataUpdateWithoutAffiliationDataInput;
  PersonOrganizationAffiliationMetaDataUpsertWithoutAffiliationInput: PersonOrganizationAffiliationMetaDataUpsertWithoutAffiliationInput;
  OrganizationUpdateOneRequiredWithoutAffiliationInput: OrganizationUpdateOneRequiredWithoutAffiliationInput;
  OrganizationUpdateWithoutAffiliationDataInput: OrganizationUpdateWithoutAffiliationDataInput;
  OrganizationCategoryUpdateManyWithoutOrganizationsInput: OrganizationCategoryUpdateManyWithoutOrganizationsInput;
  OrganizationCategoryScalarWhereInput: OrganizationCategoryScalarWhereInput;
  OrganizationCategoryUpdateWithWhereUniqueWithoutOrganizationsInput: OrganizationCategoryUpdateWithWhereUniqueWithoutOrganizationsInput;
  OrganizationCategoryUpdateWithoutOrganizationsDataInput: OrganizationCategoryUpdateWithoutOrganizationsDataInput;
  OrganizationCategoryUpdateManyWithoutChildrenInput: OrganizationCategoryUpdateManyWithoutChildrenInput;
  OrganizationCategoryUpdateWithWhereUniqueWithoutChildrenInput: OrganizationCategoryUpdateWithWhereUniqueWithoutChildrenInput;
  OrganizationCategoryUpdateWithoutChildrenDataInput: OrganizationCategoryUpdateWithoutChildrenDataInput;
  OrganizationUpdateManyWithoutCategoriesInput: OrganizationUpdateManyWithoutCategoriesInput;
  OrganizationScalarWhereInput: OrganizationScalarWhereInput;
  OrganizationUpdateWithWhereUniqueWithoutCategoriesInput: OrganizationUpdateWithWhereUniqueWithoutCategoriesInput;
  OrganizationUpdateWithoutCategoriesDataInput: OrganizationUpdateWithoutCategoriesDataInput;
  PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput: PersonOrganizationAffiliationUpdateManyWithoutOrganizationInput;
  PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutOrganizationInput: PersonOrganizationAffiliationUpdateWithWhereUniqueWithoutOrganizationInput;
  PersonOrganizationAffiliationUpdateWithoutOrganizationDataInput: PersonOrganizationAffiliationUpdateWithoutOrganizationDataInput;
  PersonUpdateOneRequiredWithoutAffiliationInput: PersonUpdateOneRequiredWithoutAffiliationInput;
  PersonUpdateWithoutAffiliationDataInput: PersonUpdateWithoutAffiliationDataInput;
  PartyAccountUpdateOneWithoutPersonInput: PartyAccountUpdateOneWithoutPersonInput;
  PartyAccountUpdateWithoutPersonDataInput: PartyAccountUpdateWithoutPersonDataInput;
  OrganizationUpdateManyWithoutAdminsInput: OrganizationUpdateManyWithoutAdminsInput;
  OrganizationUpdateWithWhereUniqueWithoutAdminsInput: OrganizationUpdateWithWhereUniqueWithoutAdminsInput;
  OrganizationUpdateWithoutAdminsDataInput: OrganizationUpdateWithoutAdminsDataInput;
  OrganizationContextUpdateManyInput: OrganizationContextUpdateManyInput;
  OrganizationContextScalarWhereInput: OrganizationContextScalarWhereInput;
  OrganizationContextUpdateWithWhereUniqueNestedInput: OrganizationContextUpdateWithWhereUniqueNestedInput;
  OrganizationContextUpdateDataInput: OrganizationContextUpdateDataInput;
  OrganizationContextMetaDataUpdateOneWithoutOrganizationContextInput: OrganizationContextMetaDataUpdateOneWithoutOrganizationContextInput;
  OrganizationContextMetaDataUpdateWithoutOrganizationContextDataInput: OrganizationContextMetaDataUpdateWithoutOrganizationContextDataInput;
  OrganizationContextMetaDataUpsertWithoutOrganizationContextInput: OrganizationContextMetaDataUpsertWithoutOrganizationContextInput;
  OrganizationContextUpdateManyWithWhereNestedInput: OrganizationContextUpdateManyWithWhereNestedInput;
  OrganizationContextUpdateManyDataInput: OrganizationContextUpdateManyDataInput;
  OrganizationContextUpsertWithWhereUniqueNestedInput: OrganizationContextUpsertWithWhereUniqueNestedInput;
  PartyEmailUpdateManyInput: PartyEmailUpdateManyInput;
  PartyEmailScalarWhereInput: PartyEmailScalarWhereInput;
  PartyEmailUpdateWithWhereUniqueNestedInput: PartyEmailUpdateWithWhereUniqueNestedInput;
  PartyEmailUpdateDataInput: PartyEmailUpdateDataInput;
  PartyEmailUpdateManyWithWhereNestedInput: PartyEmailUpdateManyWithWhereNestedInput;
  PartyEmailUpdateManyDataInput: PartyEmailUpdateManyDataInput;
  PartyEmailUpsertWithWhereUniqueNestedInput: PartyEmailUpsertWithWhereUniqueNestedInput;
  OrganizationLinkUpdateManyWithoutOrganizationInput: OrganizationLinkUpdateManyWithoutOrganizationInput;
  OrganizationLinkScalarWhereInput: OrganizationLinkScalarWhereInput;
  OrganizationLinkUpdateWithWhereUniqueWithoutOrganizationInput: OrganizationLinkUpdateWithWhereUniqueWithoutOrganizationInput;
  OrganizationLinkUpdateWithoutOrganizationDataInput: OrganizationLinkUpdateWithoutOrganizationDataInput;
  OrganizationLinkUpdateManyWithWhereNestedInput: OrganizationLinkUpdateManyWithWhereNestedInput;
  OrganizationLinkUpdateManyDataInput: OrganizationLinkUpdateManyDataInput;
  OrganizationLinkUpsertWithWhereUniqueWithoutOrganizationInput: OrganizationLinkUpsertWithWhereUniqueWithoutOrganizationInput;
  OrganizationLocationUpdateManyWithoutOrganizationInput: OrganizationLocationUpdateManyWithoutOrganizationInput;
  OrganizationLocationScalarWhereInput: OrganizationLocationScalarWhereInput;
  OrganizationLocationUpdateWithWhereUniqueWithoutOrganizationInput: OrganizationLocationUpdateWithWhereUniqueWithoutOrganizationInput;
  OrganizationLocationUpdateWithoutOrganizationDataInput: OrganizationLocationUpdateWithoutOrganizationDataInput;
  OrganizationLocationUpdateManyWithWhereNestedInput: OrganizationLocationUpdateManyWithWhereNestedInput;
  OrganizationLocationUpdateManyDataInput: OrganizationLocationUpdateManyDataInput;
  OrganizationLocationUpsertWithWhereUniqueWithoutOrganizationInput: OrganizationLocationUpsertWithWhereUniqueWithoutOrganizationInput;
  OrganizationLogoUpdateManyWithoutOrganizationInput: OrganizationLogoUpdateManyWithoutOrganizationInput;
  OrganizationLogoScalarWhereInput: OrganizationLogoScalarWhereInput;
  OrganizationLogoUpdateWithWhereUniqueWithoutOrganizationInput: OrganizationLogoUpdateWithWhereUniqueWithoutOrganizationInput;
  OrganizationLogoUpdateWithoutOrganizationDataInput: OrganizationLogoUpdateWithoutOrganizationDataInput;
  OrganizationLogoUpdateManyWithWhereNestedInput: OrganizationLogoUpdateManyWithWhereNestedInput;
  OrganizationLogoUpdateManyDataInput: OrganizationLogoUpdateManyDataInput;
  OrganizationLogoUpsertWithWhereUniqueWithoutOrganizationInput: OrganizationLogoUpsertWithWhereUniqueWithoutOrganizationInput;
  OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput: OrganizationMetaDataUpdateOneRequiredWithoutOrganizationInput;
  OrganizationMetaDataUpdateWithoutOrganizationDataInput: OrganizationMetaDataUpdateWithoutOrganizationDataInput;
  OrganizationMetaDataUpsertWithoutOrganizationInput: OrganizationMetaDataUpsertWithoutOrganizationInput;
  OrganizationNameUpdateManyWithoutOrganizationInput: OrganizationNameUpdateManyWithoutOrganizationInput;
  OrganizationNameScalarWhereInput: OrganizationNameScalarWhereInput;
  OrganizationNameUpdateWithWhereUniqueWithoutOrganizationInput: OrganizationNameUpdateWithWhereUniqueWithoutOrganizationInput;
  OrganizationNameUpdateWithoutOrganizationDataInput: OrganizationNameUpdateWithoutOrganizationDataInput;
  OrganizationNameUpdateManyWithWhereNestedInput: OrganizationNameUpdateManyWithWhereNestedInput;
  OrganizationNameUpdateManyDataInput: OrganizationNameUpdateManyDataInput;
  OrganizationNameUpsertWithWhereUniqueWithoutOrganizationInput: OrganizationNameUpsertWithWhereUniqueWithoutOrganizationInput;
  PartyRoleUpdateManyWithoutResourceInput: PartyRoleUpdateManyWithoutResourceInput;
  PartyRoleScalarWhereInput: PartyRoleScalarWhereInput;
  PartyRoleUpdateWithWhereUniqueWithoutResourceInput: PartyRoleUpdateWithWhereUniqueWithoutResourceInput;
  PartyRoleUpdateWithoutResourceDataInput: PartyRoleUpdateWithoutResourceDataInput;
  PartyAccountUpdateOneRequiredWithoutRolesInput: PartyAccountUpdateOneRequiredWithoutRolesInput;
  PartyAccountUpdateWithoutRolesDataInput: PartyAccountUpdateWithoutRolesDataInput;
  PartyAccountUpsertWithoutRolesInput: PartyAccountUpsertWithoutRolesInput;
  PartyRoleTypeUpdateOneRequiredInput: PartyRoleTypeUpdateOneRequiredInput;
  PartyRoleTypeUpdateDataInput: PartyRoleTypeUpdateDataInput;
  PartyRoleTypeUpsertNestedInput: PartyRoleTypeUpsertNestedInput;
  PartyRoleUpdateManyWithWhereNestedInput: PartyRoleUpdateManyWithWhereNestedInput;
  PartyRoleUpdateManyDataInput: PartyRoleUpdateManyDataInput;
  PartyRoleUpsertWithWhereUniqueWithoutResourceInput: PartyRoleUpsertWithWhereUniqueWithoutResourceInput;
  PartyPhoneUpdateManyInput: PartyPhoneUpdateManyInput;
  PartyPhoneScalarWhereInput: PartyPhoneScalarWhereInput;
  PartyPhoneUpdateWithWhereUniqueNestedInput: PartyPhoneUpdateWithWhereUniqueNestedInput;
  PartyPhoneUpdateDataInput: PartyPhoneUpdateDataInput;
  PartyPhoneUpdateManyWithWhereNestedInput: PartyPhoneUpdateManyWithWhereNestedInput;
  PartyPhoneUpdateManyDataInput: PartyPhoneUpdateManyDataInput;
  PartyPhoneUpsertWithWhereUniqueNestedInput: PartyPhoneUpsertWithWhereUniqueNestedInput;
  OrganizationTargetMarketUpdateManyWithoutOrganizationsInput: OrganizationTargetMarketUpdateManyWithoutOrganizationsInput;
  OrganizationTargetMarketScalarWhereInput: OrganizationTargetMarketScalarWhereInput;
  OrganizationTargetMarketUpdateWithWhereUniqueWithoutOrganizationsInput: OrganizationTargetMarketUpdateWithWhereUniqueWithoutOrganizationsInput;
  OrganizationTargetMarketUpdateWithoutOrganizationsDataInput: OrganizationTargetMarketUpdateWithoutOrganizationsDataInput;
  OrganizationTargetMarketUpdateManyWithWhereNestedInput: OrganizationTargetMarketUpdateManyWithWhereNestedInput;
  OrganizationTargetMarketUpdateManyDataInput: OrganizationTargetMarketUpdateManyDataInput;
  OrganizationTargetMarketUpsertWithWhereUniqueWithoutOrganizationsInput: OrganizationTargetMarketUpsertWithWhereUniqueWithoutOrganizationsInput;
  OrganizationUpdateManyWithWhereNestedInput: OrganizationUpdateManyWithWhereNestedInput;
  OrganizationUpdateManyDataInput: OrganizationUpdateManyDataInput;
  OrganizationUpsertWithWhereUniqueWithoutAdminsInput: OrganizationUpsertWithWhereUniqueWithoutAdminsInput;
  PartyRoleUpdateManyWithoutPartyInput: PartyRoleUpdateManyWithoutPartyInput;
  PartyRoleUpdateWithWhereUniqueWithoutPartyInput: PartyRoleUpdateWithWhereUniqueWithoutPartyInput;
  PartyRoleUpdateWithoutPartyDataInput: PartyRoleUpdateWithoutPartyDataInput;
  OrganizationUpdateOneRequiredWithoutPartiesInput: OrganizationUpdateOneRequiredWithoutPartiesInput;
  OrganizationUpdateWithoutPartiesDataInput: OrganizationUpdateWithoutPartiesDataInput;
  OrganizationUpsertWithoutPartiesInput: OrganizationUpsertWithoutPartiesInput;
  PartyRoleUpsertWithWhereUniqueWithoutPartyInput: PartyRoleUpsertWithWhereUniqueWithoutPartyInput;
  PartyAccountUpsertWithoutPersonInput: PartyAccountUpsertWithoutPersonInput;
  PersonAvatarUpdateManyWithoutPersonInput: PersonAvatarUpdateManyWithoutPersonInput;
  PersonAvatarScalarWhereInput: PersonAvatarScalarWhereInput;
  PersonAvatarUpdateWithWhereUniqueWithoutPersonInput: PersonAvatarUpdateWithWhereUniqueWithoutPersonInput;
  PersonAvatarUpdateWithoutPersonDataInput: PersonAvatarUpdateWithoutPersonDataInput;
  PersonAvatarUpdateManyWithWhereNestedInput: PersonAvatarUpdateManyWithWhereNestedInput;
  PersonAvatarUpdateManyDataInput: PersonAvatarUpdateManyDataInput;
  PersonAvatarUpsertWithWhereUniqueWithoutPersonInput: PersonAvatarUpsertWithWhereUniqueWithoutPersonInput;
  PersonMetaDataUpdateOneRequiredWithoutPersonInput: PersonMetaDataUpdateOneRequiredWithoutPersonInput;
  PersonMetaDataUpdateWithoutPersonDataInput: PersonMetaDataUpdateWithoutPersonDataInput;
  PersonMetaDataUpsertWithoutPersonInput: PersonMetaDataUpsertWithoutPersonInput;
  PersonNameUpdateManyWithoutPersonInput: PersonNameUpdateManyWithoutPersonInput;
  PersonNameScalarWhereInput: PersonNameScalarWhereInput;
  PersonNameUpdateWithWhereUniqueWithoutPersonInput: PersonNameUpdateWithWhereUniqueWithoutPersonInput;
  PersonNameUpdateWithoutPersonDataInput: PersonNameUpdateWithoutPersonDataInput;
  PersonNameUpdateManyWithWhereNestedInput: PersonNameUpdateManyWithWhereNestedInput;
  PersonNameUpdateManyDataInput: PersonNameUpdateManyDataInput;
  PersonNameUpsertWithWhereUniqueWithoutPersonInput: PersonNameUpsertWithWhereUniqueWithoutPersonInput;
  PersonUpsertWithoutAffiliationInput: PersonUpsertWithoutAffiliationInput;
  PersonOrganizationAffiliationUpdateManyWithWhereNestedInput: PersonOrganizationAffiliationUpdateManyWithWhereNestedInput;
  PersonOrganizationAffiliationUpdateManyDataInput: PersonOrganizationAffiliationUpdateManyDataInput;
  PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutOrganizationInput: PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutOrganizationInput;
  OrganizationUpsertWithWhereUniqueWithoutCategoriesInput: OrganizationUpsertWithWhereUniqueWithoutCategoriesInput;
  OrganizationCategoryUpdateOneWithoutParentInput: OrganizationCategoryUpdateOneWithoutParentInput;
  OrganizationCategoryUpdateWithoutParentDataInput: OrganizationCategoryUpdateWithoutParentDataInput;
  OrganizationCategoryUpsertWithoutParentInput: OrganizationCategoryUpsertWithoutParentInput;
  OrganizationCategoryUpdateManyWithWhereNestedInput: OrganizationCategoryUpdateManyWithWhereNestedInput;
  OrganizationCategoryUpdateManyDataInput: OrganizationCategoryUpdateManyDataInput;
  OrganizationCategoryUpsertWithWhereUniqueWithoutChildrenInput: OrganizationCategoryUpsertWithWhereUniqueWithoutChildrenInput;
  OrganizationCategoryUpsertWithWhereUniqueWithoutOrganizationsInput: OrganizationCategoryUpsertWithWhereUniqueWithoutOrganizationsInput;
  OrganizationUpsertWithoutAffiliationInput: OrganizationUpsertWithoutAffiliationInput;
  PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutPersonInput: PersonOrganizationAffiliationUpsertWithWhereUniqueWithoutPersonInput;
  PersonUpsertWithoutAccountInput: PersonUpsertWithoutAccountInput;
  PartyAccountUpdateManyWithWhereNestedInput: PartyAccountUpdateManyWithWhereNestedInput;
  PartyAccountUpdateManyDataInput: PartyAccountUpdateManyDataInput;
  PartyAccountUpsertWithWhereUniqueWithoutAdminInput: PartyAccountUpsertWithWhereUniqueWithoutAdminInput;
  OrganizationBusinessModelUpdateInput: OrganizationBusinessModelUpdateInput;
  OrganizationUpdateManyInput: OrganizationUpdateManyInput;
  OrganizationUpdateWithWhereUniqueNestedInput: OrganizationUpdateWithWhereUniqueNestedInput;
  OrganizationUpdateDataInput: OrganizationUpdateDataInput;
  OrganizationUpsertWithWhereUniqueNestedInput: OrganizationUpsertWithWhereUniqueNestedInput;
  OrganizationCategoryUpdateInput: OrganizationCategoryUpdateInput;
  OrganizationContextUpdateInput: OrganizationContextUpdateInput;
  OrganizationContextMetaDataUpdateInput: OrganizationContextMetaDataUpdateInput;
  OrganizationContextUpdateOneRequiredWithoutMetadataInput: OrganizationContextUpdateOneRequiredWithoutMetadataInput;
  OrganizationContextUpdateWithoutMetadataDataInput: OrganizationContextUpdateWithoutMetadataDataInput;
  OrganizationContextUpsertWithoutMetadataInput: OrganizationContextUpsertWithoutMetadataInput;
  OrganizationLinkUpdateInput: OrganizationLinkUpdateInput;
  OrganizationUpdateOneRequiredWithoutLinksInput: OrganizationUpdateOneRequiredWithoutLinksInput;
  OrganizationUpdateWithoutLinksDataInput: OrganizationUpdateWithoutLinksDataInput;
  OrganizationUpsertWithoutLinksInput: OrganizationUpsertWithoutLinksInput;
  OrganizationLocationUpdateInput: OrganizationLocationUpdateInput;
  OrganizationUpdateOneRequiredWithoutLocationInput: OrganizationUpdateOneRequiredWithoutLocationInput;
  OrganizationUpdateWithoutLocationDataInput: OrganizationUpdateWithoutLocationDataInput;
  OrganizationUpsertWithoutLocationInput: OrganizationUpsertWithoutLocationInput;
  OrganizationLogoUpdateInput: OrganizationLogoUpdateInput;
  OrganizationUpdateOneRequiredWithoutLogoInput: OrganizationUpdateOneRequiredWithoutLogoInput;
  OrganizationUpdateWithoutLogoDataInput: OrganizationUpdateWithoutLogoDataInput;
  OrganizationUpsertWithoutLogoInput: OrganizationUpsertWithoutLogoInput;
  OrganizationMetaDataUpdateInput: OrganizationMetaDataUpdateInput;
  OrganizationUpdateOneRequiredWithoutMetadataInput: OrganizationUpdateOneRequiredWithoutMetadataInput;
  OrganizationUpdateWithoutMetadataDataInput: OrganizationUpdateWithoutMetadataDataInput;
  OrganizationUpsertWithoutMetadataInput: OrganizationUpsertWithoutMetadataInput;
  OrganizationNameUpdateInput: OrganizationNameUpdateInput;
  OrganizationUpdateOneRequiredWithoutNameInput: OrganizationUpdateOneRequiredWithoutNameInput;
  OrganizationUpdateWithoutNameDataInput: OrganizationUpdateWithoutNameDataInput;
  OrganizationUpsertWithoutNameInput: OrganizationUpsertWithoutNameInput;
  OrganizationTargetMarketUpdateInput: OrganizationTargetMarketUpdateInput;
  OrganizationUpdateManyWithoutTargetMarketsInput: OrganizationUpdateManyWithoutTargetMarketsInput;
  OrganizationUpdateWithWhereUniqueWithoutTargetMarketsInput: OrganizationUpdateWithWhereUniqueWithoutTargetMarketsInput;
  OrganizationUpdateWithoutTargetMarketsDataInput: OrganizationUpdateWithoutTargetMarketsDataInput;
  OrganizationUpsertWithWhereUniqueWithoutTargetMarketsInput: OrganizationUpsertWithWhereUniqueWithoutTargetMarketsInput;
  PartyAccountUpdateInput: PartyAccountUpdateInput;
  PartyEmailUpdateInput: PartyEmailUpdateInput;
  PartyPhoneUpdateInput: PartyPhoneUpdateInput;
  PartyRoleUpdateInput: PartyRoleUpdateInput;
  PartyRoleTypeUpdateInput: PartyRoleTypeUpdateInput;
  PersonUpdateInput: PersonUpdateInput;
  PersonAvatarUpdateInput: PersonAvatarUpdateInput;
  PersonUpdateOneRequiredWithoutAvatarInput: PersonUpdateOneRequiredWithoutAvatarInput;
  PersonUpdateWithoutAvatarDataInput: PersonUpdateWithoutAvatarDataInput;
  PersonUpsertWithoutAvatarInput: PersonUpsertWithoutAvatarInput;
  PersonMetaDataUpdateInput: PersonMetaDataUpdateInput;
  PersonUpdateOneRequiredWithoutMetadataInput: PersonUpdateOneRequiredWithoutMetadataInput;
  PersonUpdateWithoutMetadataDataInput: PersonUpdateWithoutMetadataDataInput;
  PersonUpsertWithoutMetadataInput: PersonUpsertWithoutMetadataInput;
  PersonNameUpdateInput: PersonNameUpdateInput;
  PersonUpdateOneWithoutNameInput: PersonUpdateOneWithoutNameInput;
  PersonUpdateWithoutNameDataInput: PersonUpdateWithoutNameDataInput;
  PersonUpsertWithoutNameInput: PersonUpsertWithoutNameInput;
  PersonOrganizationAffiliationUpdateInput: PersonOrganizationAffiliationUpdateInput;
  PersonOrganizationAffiliationMetaDataUpdateInput: PersonOrganizationAffiliationMetaDataUpdateInput;
  PersonOrganizationAffiliationUpdateOneRequiredWithoutMetadataInput: PersonOrganizationAffiliationUpdateOneRequiredWithoutMetadataInput;
  PersonOrganizationAffiliationUpdateWithoutMetadataDataInput: PersonOrganizationAffiliationUpdateWithoutMetadataDataInput;
  PersonOrganizationAffiliationUpsertWithoutMetadataInput: PersonOrganizationAffiliationUpsertWithoutMetadataInput;
};

export type AggregateOrganizationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregateOrganization']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregateOrganizationBusinessModelResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregateOrganizationBusinessModel']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregateOrganizationCategoryResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregateOrganizationCategory']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregateOrganizationContextResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregateOrganizationContext']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregateOrganizationContextMetaDataResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregateOrganizationContextMetaData']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregateOrganizationLinkResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregateOrganizationLink']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregateOrganizationLocationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregateOrganizationLocation']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregateOrganizationLogoResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregateOrganizationLogo']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregateOrganizationMetaDataResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregateOrganizationMetaData']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregateOrganizationNameResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregateOrganizationName']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregateOrganizationTargetMarketResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregateOrganizationTargetMarket']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregatePartyAccountResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregatePartyAccount']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregatePartyEmailResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregatePartyEmail']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregatePartyPhoneResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregatePartyPhone']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregatePartyRoleResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregatePartyRole']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregatePartyRoleTypeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregatePartyRoleType']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregatePersonResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregatePerson']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregatePersonAvatarResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregatePersonAvatar']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregatePersonMetaDataResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregatePersonMetaData']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregatePersonNameResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregatePersonName']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregatePersonOrganizationAffiliationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregatePersonOrganizationAffiliation']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AggregatePersonOrganizationAffiliationMetaDataResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['AggregatePersonOrganizationAffiliationMetaData']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type BatchPayloadResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['BatchPayload']
> = {
  count?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export interface LongScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['Mutation']
> = {
  createOrganization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType,
    MutationCreateOrganizationArgs
  >;
  createOrganizationBusinessModel?: Resolver<
    ResolversTypes['OrganizationBusinessModel'],
    ParentType,
    ContextType,
    MutationCreateOrganizationBusinessModelArgs
  >;
  createOrganizationCategory?: Resolver<
    ResolversTypes['OrganizationCategory'],
    ParentType,
    ContextType,
    MutationCreateOrganizationCategoryArgs
  >;
  createOrganizationContext?: Resolver<
    ResolversTypes['OrganizationContext'],
    ParentType,
    ContextType,
    MutationCreateOrganizationContextArgs
  >;
  createOrganizationContextMetaData?: Resolver<
    ResolversTypes['OrganizationContextMetaData'],
    ParentType,
    ContextType,
    MutationCreateOrganizationContextMetaDataArgs
  >;
  createOrganizationLink?: Resolver<
    ResolversTypes['OrganizationLink'],
    ParentType,
    ContextType,
    MutationCreateOrganizationLinkArgs
  >;
  createOrganizationLocation?: Resolver<
    ResolversTypes['OrganizationLocation'],
    ParentType,
    ContextType,
    MutationCreateOrganizationLocationArgs
  >;
  createOrganizationLogo?: Resolver<
    ResolversTypes['OrganizationLogo'],
    ParentType,
    ContextType,
    MutationCreateOrganizationLogoArgs
  >;
  createOrganizationMetaData?: Resolver<
    ResolversTypes['OrganizationMetaData'],
    ParentType,
    ContextType,
    MutationCreateOrganizationMetaDataArgs
  >;
  createOrganizationName?: Resolver<
    ResolversTypes['OrganizationName'],
    ParentType,
    ContextType,
    MutationCreateOrganizationNameArgs
  >;
  createOrganizationTargetMarket?: Resolver<
    ResolversTypes['OrganizationTargetMarket'],
    ParentType,
    ContextType,
    MutationCreateOrganizationTargetMarketArgs
  >;
  createPartyAccount?: Resolver<
    ResolversTypes['PartyAccount'],
    ParentType,
    ContextType,
    MutationCreatePartyAccountArgs
  >;
  createPartyEmail?: Resolver<
    ResolversTypes['PartyEmail'],
    ParentType,
    ContextType,
    MutationCreatePartyEmailArgs
  >;
  createPartyPhone?: Resolver<
    ResolversTypes['PartyPhone'],
    ParentType,
    ContextType,
    MutationCreatePartyPhoneArgs
  >;
  createPartyRole?: Resolver<
    ResolversTypes['PartyRole'],
    ParentType,
    ContextType,
    MutationCreatePartyRoleArgs
  >;
  createPartyRoleType?: Resolver<
    ResolversTypes['PartyRoleType'],
    ParentType,
    ContextType,
    MutationCreatePartyRoleTypeArgs
  >;
  createPerson?: Resolver<
    ResolversTypes['Person'],
    ParentType,
    ContextType,
    MutationCreatePersonArgs
  >;
  createPersonAvatar?: Resolver<
    ResolversTypes['PersonAvatar'],
    ParentType,
    ContextType,
    MutationCreatePersonAvatarArgs
  >;
  createPersonMetaData?: Resolver<
    ResolversTypes['PersonMetaData'],
    ParentType,
    ContextType,
    MutationCreatePersonMetaDataArgs
  >;
  createPersonName?: Resolver<
    ResolversTypes['PersonName'],
    ParentType,
    ContextType,
    MutationCreatePersonNameArgs
  >;
  createPersonOrganizationAffiliation?: Resolver<
    ResolversTypes['PersonOrganizationAffiliation'],
    ParentType,
    ContextType,
    MutationCreatePersonOrganizationAffiliationArgs
  >;
  createPersonOrganizationAffiliationMetaData?: Resolver<
    ResolversTypes['PersonOrganizationAffiliationMetaData'],
    ParentType,
    ContextType,
    MutationCreatePersonOrganizationAffiliationMetaDataArgs
  >;
  deleteManyOrganizationBusinessModels?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyOrganizationBusinessModelsArgs
  >;
  deleteManyOrganizationCategories?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyOrganizationCategoriesArgs
  >;
  deleteManyOrganizationContextMetaDatas?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyOrganizationContextMetaDatasArgs
  >;
  deleteManyOrganizationContexts?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyOrganizationContextsArgs
  >;
  deleteManyOrganizationLinks?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyOrganizationLinksArgs
  >;
  deleteManyOrganizationLocations?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyOrganizationLocationsArgs
  >;
  deleteManyOrganizationLogoes?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyOrganizationLogoesArgs
  >;
  deleteManyOrganizationMetaDatas?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyOrganizationMetaDatasArgs
  >;
  deleteManyOrganizationNames?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyOrganizationNamesArgs
  >;
  deleteManyOrganizations?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyOrganizationsArgs
  >;
  deleteManyOrganizationTargetMarkets?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyOrganizationTargetMarketsArgs
  >;
  deleteManyPartyAccounts?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyPartyAccountsArgs
  >;
  deleteManyPartyEmails?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyPartyEmailsArgs
  >;
  deleteManyPartyPhones?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyPartyPhonesArgs
  >;
  deleteManyPartyRoles?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyPartyRolesArgs
  >;
  deleteManyPartyRoleTypes?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyPartyRoleTypesArgs
  >;
  deleteManyPersonAvatars?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyPersonAvatarsArgs
  >;
  deleteManyPersonMetaDatas?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyPersonMetaDatasArgs
  >;
  deleteManyPersonNames?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyPersonNamesArgs
  >;
  deleteManyPersonOrganizationAffiliationMetaDatas?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyPersonOrganizationAffiliationMetaDatasArgs
  >;
  deleteManyPersonOrganizationAffiliations?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyPersonOrganizationAffiliationsArgs
  >;
  deleteManyPersons?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationDeleteManyPersonsArgs
  >;
  deleteOrganization?: Resolver<
    Maybe<ResolversTypes['Organization']>,
    ParentType,
    ContextType,
    MutationDeleteOrganizationArgs
  >;
  deleteOrganizationBusinessModel?: Resolver<
    Maybe<ResolversTypes['OrganizationBusinessModel']>,
    ParentType,
    ContextType,
    MutationDeleteOrganizationBusinessModelArgs
  >;
  deleteOrganizationCategory?: Resolver<
    Maybe<ResolversTypes['OrganizationCategory']>,
    ParentType,
    ContextType,
    MutationDeleteOrganizationCategoryArgs
  >;
  deleteOrganizationContext?: Resolver<
    Maybe<ResolversTypes['OrganizationContext']>,
    ParentType,
    ContextType,
    MutationDeleteOrganizationContextArgs
  >;
  deleteOrganizationContextMetaData?: Resolver<
    Maybe<ResolversTypes['OrganizationContextMetaData']>,
    ParentType,
    ContextType,
    MutationDeleteOrganizationContextMetaDataArgs
  >;
  deleteOrganizationLink?: Resolver<
    Maybe<ResolversTypes['OrganizationLink']>,
    ParentType,
    ContextType,
    MutationDeleteOrganizationLinkArgs
  >;
  deleteOrganizationLocation?: Resolver<
    Maybe<ResolversTypes['OrganizationLocation']>,
    ParentType,
    ContextType,
    MutationDeleteOrganizationLocationArgs
  >;
  deleteOrganizationLogo?: Resolver<
    Maybe<ResolversTypes['OrganizationLogo']>,
    ParentType,
    ContextType,
    MutationDeleteOrganizationLogoArgs
  >;
  deleteOrganizationMetaData?: Resolver<
    Maybe<ResolversTypes['OrganizationMetaData']>,
    ParentType,
    ContextType,
    MutationDeleteOrganizationMetaDataArgs
  >;
  deleteOrganizationName?: Resolver<
    Maybe<ResolversTypes['OrganizationName']>,
    ParentType,
    ContextType,
    MutationDeleteOrganizationNameArgs
  >;
  deleteOrganizationTargetMarket?: Resolver<
    Maybe<ResolversTypes['OrganizationTargetMarket']>,
    ParentType,
    ContextType,
    MutationDeleteOrganizationTargetMarketArgs
  >;
  deletePartyAccount?: Resolver<
    Maybe<ResolversTypes['PartyAccount']>,
    ParentType,
    ContextType,
    MutationDeletePartyAccountArgs
  >;
  deletePartyEmail?: Resolver<
    Maybe<ResolversTypes['PartyEmail']>,
    ParentType,
    ContextType,
    MutationDeletePartyEmailArgs
  >;
  deletePartyPhone?: Resolver<
    Maybe<ResolversTypes['PartyPhone']>,
    ParentType,
    ContextType,
    MutationDeletePartyPhoneArgs
  >;
  deletePartyRole?: Resolver<
    Maybe<ResolversTypes['PartyRole']>,
    ParentType,
    ContextType,
    MutationDeletePartyRoleArgs
  >;
  deletePartyRoleType?: Resolver<
    Maybe<ResolversTypes['PartyRoleType']>,
    ParentType,
    ContextType,
    MutationDeletePartyRoleTypeArgs
  >;
  deletePerson?: Resolver<
    Maybe<ResolversTypes['Person']>,
    ParentType,
    ContextType,
    MutationDeletePersonArgs
  >;
  deletePersonAvatar?: Resolver<
    Maybe<ResolversTypes['PersonAvatar']>,
    ParentType,
    ContextType,
    MutationDeletePersonAvatarArgs
  >;
  deletePersonMetaData?: Resolver<
    Maybe<ResolversTypes['PersonMetaData']>,
    ParentType,
    ContextType,
    MutationDeletePersonMetaDataArgs
  >;
  deletePersonName?: Resolver<
    Maybe<ResolversTypes['PersonName']>,
    ParentType,
    ContextType,
    MutationDeletePersonNameArgs
  >;
  deletePersonOrganizationAffiliation?: Resolver<
    Maybe<ResolversTypes['PersonOrganizationAffiliation']>,
    ParentType,
    ContextType,
    MutationDeletePersonOrganizationAffiliationArgs
  >;
  deletePersonOrganizationAffiliationMetaData?: Resolver<
    Maybe<ResolversTypes['PersonOrganizationAffiliationMetaData']>,
    ParentType,
    ContextType,
    MutationDeletePersonOrganizationAffiliationMetaDataArgs
  >;
  updateManyOrganizationBusinessModels?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyOrganizationBusinessModelsArgs
  >;
  updateManyOrganizationCategories?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyOrganizationCategoriesArgs
  >;
  updateManyOrganizationContextMetaDatas?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyOrganizationContextMetaDatasArgs
  >;
  updateManyOrganizationContexts?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyOrganizationContextsArgs
  >;
  updateManyOrganizationLinks?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyOrganizationLinksArgs
  >;
  updateManyOrganizationLocations?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyOrganizationLocationsArgs
  >;
  updateManyOrganizationLogoes?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyOrganizationLogoesArgs
  >;
  updateManyOrganizationMetaDatas?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyOrganizationMetaDatasArgs
  >;
  updateManyOrganizationNames?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyOrganizationNamesArgs
  >;
  updateManyOrganizations?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyOrganizationsArgs
  >;
  updateManyOrganizationTargetMarkets?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyOrganizationTargetMarketsArgs
  >;
  updateManyPartyAccounts?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyPartyAccountsArgs
  >;
  updateManyPartyEmails?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyPartyEmailsArgs
  >;
  updateManyPartyPhones?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyPartyPhonesArgs
  >;
  updateManyPartyRoles?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyPartyRolesArgs
  >;
  updateManyPartyRoleTypes?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyPartyRoleTypesArgs
  >;
  updateManyPersonAvatars?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyPersonAvatarsArgs
  >;
  updateManyPersonMetaDatas?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyPersonMetaDatasArgs
  >;
  updateManyPersonNames?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyPersonNamesArgs
  >;
  updateManyPersonOrganizationAffiliationMetaDatas?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyPersonOrganizationAffiliationMetaDatasArgs
  >;
  updateManyPersonOrganizationAffiliations?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyPersonOrganizationAffiliationsArgs
  >;
  updateManyPersons?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    MutationUpdateManyPersonsArgs
  >;
  updateOrganization?: Resolver<
    Maybe<ResolversTypes['Organization']>,
    ParentType,
    ContextType,
    MutationUpdateOrganizationArgs
  >;
  updateOrganizationBusinessModel?: Resolver<
    Maybe<ResolversTypes['OrganizationBusinessModel']>,
    ParentType,
    ContextType,
    MutationUpdateOrganizationBusinessModelArgs
  >;
  updateOrganizationCategory?: Resolver<
    Maybe<ResolversTypes['OrganizationCategory']>,
    ParentType,
    ContextType,
    MutationUpdateOrganizationCategoryArgs
  >;
  updateOrganizationContext?: Resolver<
    Maybe<ResolversTypes['OrganizationContext']>,
    ParentType,
    ContextType,
    MutationUpdateOrganizationContextArgs
  >;
  updateOrganizationContextMetaData?: Resolver<
    Maybe<ResolversTypes['OrganizationContextMetaData']>,
    ParentType,
    ContextType,
    MutationUpdateOrganizationContextMetaDataArgs
  >;
  updateOrganizationLink?: Resolver<
    Maybe<ResolversTypes['OrganizationLink']>,
    ParentType,
    ContextType,
    MutationUpdateOrganizationLinkArgs
  >;
  updateOrganizationLocation?: Resolver<
    Maybe<ResolversTypes['OrganizationLocation']>,
    ParentType,
    ContextType,
    MutationUpdateOrganizationLocationArgs
  >;
  updateOrganizationLogo?: Resolver<
    Maybe<ResolversTypes['OrganizationLogo']>,
    ParentType,
    ContextType,
    MutationUpdateOrganizationLogoArgs
  >;
  updateOrganizationMetaData?: Resolver<
    Maybe<ResolversTypes['OrganizationMetaData']>,
    ParentType,
    ContextType,
    MutationUpdateOrganizationMetaDataArgs
  >;
  updateOrganizationName?: Resolver<
    Maybe<ResolversTypes['OrganizationName']>,
    ParentType,
    ContextType,
    MutationUpdateOrganizationNameArgs
  >;
  updateOrganizationTargetMarket?: Resolver<
    Maybe<ResolversTypes['OrganizationTargetMarket']>,
    ParentType,
    ContextType,
    MutationUpdateOrganizationTargetMarketArgs
  >;
  updatePartyAccount?: Resolver<
    Maybe<ResolversTypes['PartyAccount']>,
    ParentType,
    ContextType,
    MutationUpdatePartyAccountArgs
  >;
  updatePartyEmail?: Resolver<
    Maybe<ResolversTypes['PartyEmail']>,
    ParentType,
    ContextType,
    MutationUpdatePartyEmailArgs
  >;
  updatePartyPhone?: Resolver<
    Maybe<ResolversTypes['PartyPhone']>,
    ParentType,
    ContextType,
    MutationUpdatePartyPhoneArgs
  >;
  updatePartyRole?: Resolver<
    Maybe<ResolversTypes['PartyRole']>,
    ParentType,
    ContextType,
    MutationUpdatePartyRoleArgs
  >;
  updatePartyRoleType?: Resolver<
    Maybe<ResolversTypes['PartyRoleType']>,
    ParentType,
    ContextType,
    MutationUpdatePartyRoleTypeArgs
  >;
  updatePerson?: Resolver<
    Maybe<ResolversTypes['Person']>,
    ParentType,
    ContextType,
    MutationUpdatePersonArgs
  >;
  updatePersonAvatar?: Resolver<
    Maybe<ResolversTypes['PersonAvatar']>,
    ParentType,
    ContextType,
    MutationUpdatePersonAvatarArgs
  >;
  updatePersonMetaData?: Resolver<
    Maybe<ResolversTypes['PersonMetaData']>,
    ParentType,
    ContextType,
    MutationUpdatePersonMetaDataArgs
  >;
  updatePersonName?: Resolver<
    Maybe<ResolversTypes['PersonName']>,
    ParentType,
    ContextType,
    MutationUpdatePersonNameArgs
  >;
  updatePersonOrganizationAffiliation?: Resolver<
    Maybe<ResolversTypes['PersonOrganizationAffiliation']>,
    ParentType,
    ContextType,
    MutationUpdatePersonOrganizationAffiliationArgs
  >;
  updatePersonOrganizationAffiliationMetaData?: Resolver<
    Maybe<ResolversTypes['PersonOrganizationAffiliationMetaData']>,
    ParentType,
    ContextType,
    MutationUpdatePersonOrganizationAffiliationMetaDataArgs
  >;
  upsertOrganization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType,
    MutationUpsertOrganizationArgs
  >;
  upsertOrganizationBusinessModel?: Resolver<
    ResolversTypes['OrganizationBusinessModel'],
    ParentType,
    ContextType,
    MutationUpsertOrganizationBusinessModelArgs
  >;
  upsertOrganizationCategory?: Resolver<
    ResolversTypes['OrganizationCategory'],
    ParentType,
    ContextType,
    MutationUpsertOrganizationCategoryArgs
  >;
  upsertOrganizationContext?: Resolver<
    ResolversTypes['OrganizationContext'],
    ParentType,
    ContextType,
    MutationUpsertOrganizationContextArgs
  >;
  upsertOrganizationContextMetaData?: Resolver<
    ResolversTypes['OrganizationContextMetaData'],
    ParentType,
    ContextType,
    MutationUpsertOrganizationContextMetaDataArgs
  >;
  upsertOrganizationLink?: Resolver<
    ResolversTypes['OrganizationLink'],
    ParentType,
    ContextType,
    MutationUpsertOrganizationLinkArgs
  >;
  upsertOrganizationLocation?: Resolver<
    ResolversTypes['OrganizationLocation'],
    ParentType,
    ContextType,
    MutationUpsertOrganizationLocationArgs
  >;
  upsertOrganizationLogo?: Resolver<
    ResolversTypes['OrganizationLogo'],
    ParentType,
    ContextType,
    MutationUpsertOrganizationLogoArgs
  >;
  upsertOrganizationMetaData?: Resolver<
    ResolversTypes['OrganizationMetaData'],
    ParentType,
    ContextType,
    MutationUpsertOrganizationMetaDataArgs
  >;
  upsertOrganizationName?: Resolver<
    ResolversTypes['OrganizationName'],
    ParentType,
    ContextType,
    MutationUpsertOrganizationNameArgs
  >;
  upsertOrganizationTargetMarket?: Resolver<
    ResolversTypes['OrganizationTargetMarket'],
    ParentType,
    ContextType,
    MutationUpsertOrganizationTargetMarketArgs
  >;
  upsertPartyAccount?: Resolver<
    ResolversTypes['PartyAccount'],
    ParentType,
    ContextType,
    MutationUpsertPartyAccountArgs
  >;
  upsertPartyEmail?: Resolver<
    ResolversTypes['PartyEmail'],
    ParentType,
    ContextType,
    MutationUpsertPartyEmailArgs
  >;
  upsertPartyPhone?: Resolver<
    ResolversTypes['PartyPhone'],
    ParentType,
    ContextType,
    MutationUpsertPartyPhoneArgs
  >;
  upsertPartyRole?: Resolver<
    ResolversTypes['PartyRole'],
    ParentType,
    ContextType,
    MutationUpsertPartyRoleArgs
  >;
  upsertPartyRoleType?: Resolver<
    ResolversTypes['PartyRoleType'],
    ParentType,
    ContextType,
    MutationUpsertPartyRoleTypeArgs
  >;
  upsertPerson?: Resolver<
    ResolversTypes['Person'],
    ParentType,
    ContextType,
    MutationUpsertPersonArgs
  >;
  upsertPersonAvatar?: Resolver<
    ResolversTypes['PersonAvatar'],
    ParentType,
    ContextType,
    MutationUpsertPersonAvatarArgs
  >;
  upsertPersonMetaData?: Resolver<
    ResolversTypes['PersonMetaData'],
    ParentType,
    ContextType,
    MutationUpsertPersonMetaDataArgs
  >;
  upsertPersonName?: Resolver<
    ResolversTypes['PersonName'],
    ParentType,
    ContextType,
    MutationUpsertPersonNameArgs
  >;
  upsertPersonOrganizationAffiliation?: Resolver<
    ResolversTypes['PersonOrganizationAffiliation'],
    ParentType,
    ContextType,
    MutationUpsertPersonOrganizationAffiliationArgs
  >;
  upsertPersonOrganizationAffiliationMetaData?: Resolver<
    ResolversTypes['PersonOrganizationAffiliationMetaData'],
    ParentType,
    ContextType,
    MutationUpsertPersonOrganizationAffiliationMetaDataArgs
  >;
};

export type OrganizationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['Organization']
> = {
  admins?: Resolver<
    Maybe<Array<ResolversTypes['PartyAccount']>>,
    ParentType,
    ContextType,
    OrganizationAdminsArgs
  >;
  affiliation?: Resolver<
    Maybe<Array<ResolversTypes['PersonOrganizationAffiliation']>>,
    ParentType,
    ContextType,
    OrganizationAffiliationArgs
  >;
  categories?: Resolver<
    Maybe<Array<ResolversTypes['OrganizationCategory']>>,
    ParentType,
    ContextType,
    OrganizationCategoriesArgs
  >;
  context?: Resolver<
    Maybe<Array<ResolversTypes['OrganizationContext']>>,
    ParentType,
    ContextType,
    OrganizationContextArgs
  >;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<
    Maybe<Array<ResolversTypes['PartyEmail']>>,
    ParentType,
    ContextType,
    OrganizationEmailArgs
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  links?: Resolver<
    Maybe<Array<ResolversTypes['OrganizationLink']>>,
    ParentType,
    ContextType,
    OrganizationLinksArgs
  >;
  location?: Resolver<
    Maybe<Array<ResolversTypes['OrganizationLocation']>>,
    ParentType,
    ContextType,
    OrganizationLocationArgs
  >;
  logo?: Resolver<
    Maybe<Array<ResolversTypes['OrganizationLogo']>>,
    ParentType,
    ContextType,
    OrganizationLogoArgs
  >;
  metadata?: Resolver<
    ResolversTypes['OrganizationMetaData'],
    ParentType,
    ContextType
  >;
  name?: Resolver<
    Maybe<Array<ResolversTypes['OrganizationName']>>,
    ParentType,
    ContextType,
    OrganizationNameArgs
  >;
  parties?: Resolver<
    Maybe<Array<ResolversTypes['PartyRole']>>,
    ParentType,
    ContextType,
    OrganizationPartiesArgs
  >;
  phone?: Resolver<
    Maybe<Array<ResolversTypes['PartyPhone']>>,
    ParentType,
    ContextType,
    OrganizationPhoneArgs
  >;
  targetMarkets?: Resolver<
    Maybe<Array<ResolversTypes['OrganizationTargetMarket']>>,
    ParentType,
    ContextType,
    OrganizationTargetMarketsArgs
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  visible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  yearFounded?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
};

export type OrganizationBusinessModelResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationBusinessModel']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  organizations?: Resolver<
    Maybe<Array<ResolversTypes['Organization']>>,
    ParentType,
    ContextType,
    OrganizationBusinessModelOrganizationsArgs
  >;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type OrganizationBusinessModelConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationBusinessModelConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregateOrganizationBusinessModel'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['OrganizationBusinessModelEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationBusinessModelEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationBusinessModelEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<
    ResolversTypes['OrganizationBusinessModel'],
    ParentType,
    ContextType
  >;
};

export type OrganizationCategoryResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationCategory']
> = {
  children?: Resolver<
    Maybe<Array<ResolversTypes['OrganizationCategory']>>,
    ParentType,
    ContextType,
    OrganizationCategoryChildrenArgs
  >;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  organizations?: Resolver<
    Maybe<Array<ResolversTypes['Organization']>>,
    ParentType,
    ContextType,
    OrganizationCategoryOrganizationsArgs
  >;
  parent?: Resolver<
    Maybe<ResolversTypes['OrganizationCategory']>,
    ParentType,
    ContextType
  >;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type OrganizationCategoryConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationCategoryConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregateOrganizationCategory'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['OrganizationCategoryEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationCategoryEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationCategoryEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<
    ResolversTypes['OrganizationCategory'],
    ParentType,
    ContextType
  >;
};

export type OrganizationConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregateOrganization'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['OrganizationEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationContextResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationContext']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<
    Maybe<ResolversTypes['OrganizationContextMetaData']>,
    ParentType,
    ContextType
  >;
  payload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  throughDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  type?: Resolver<
    ResolversTypes['OrganizationContextType'],
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type OrganizationContextConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationContextConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregateOrganizationContext'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['OrganizationContextEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationContextEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationContextEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<
    ResolversTypes['OrganizationContext'],
    ParentType,
    ContextType
  >;
};

export type OrganizationContextMetaDataResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationContextMetaData']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isApproved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDraft?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPendingReview?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRejected?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isUnverified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  organizationContext?: Resolver<
    ResolversTypes['OrganizationContext'],
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type OrganizationContextMetaDataConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationContextMetaDataConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregateOrganizationContextMetaData'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['OrganizationContextMetaDataEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationContextMetaDataEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationContextMetaDataEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<
    ResolversTypes['OrganizationContextMetaData'],
    ParentType,
    ContextType
  >;
};

export type OrganizationEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
};

export type OrganizationLinkResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationLink']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isHttps?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPublic?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  organization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType
  >;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  throughDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  type?: Resolver<
    ResolversTypes['OrganizationLinkType'],
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type OrganizationLinkConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationLinkConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregateOrganizationLink'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['OrganizationLinkEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationLinkEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationLinkEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OrganizationLink'], ParentType, ContextType>;
};

export type OrganizationLocationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationLocation']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  formatted_address?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  geometry?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  googleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPrimary?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType
  >;
  photos?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  placeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type OrganizationLocationConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationLocationConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregateOrganizationLocation'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['OrganizationLocationEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationLocationEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationLocationEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<
    ResolversTypes['OrganizationLocation'],
    ParentType,
    ContextType
  >;
};

export type OrganizationLogoResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationLogo']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  isPrimary?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  isPublic?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  organization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType
  >;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  throughDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type OrganizationLogoConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationLogoConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregateOrganizationLogo'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['OrganizationLogoEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationLogoEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationLogoEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OrganizationLogo'], ParentType, ContextType>;
};

export type OrganizationMetaDataResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationMetaData']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isApproved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDraft?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPendingReview?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRejected?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isUnverified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  organization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type OrganizationMetaDataConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationMetaDataConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregateOrganizationMetaData'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['OrganizationMetaDataEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationMetaDataEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationMetaDataEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<
    ResolversTypes['OrganizationMetaData'],
    ParentType,
    ContextType
  >;
};

export type OrganizationNameResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationName']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  organization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType
  >;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  throughDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type OrganizationNameConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationNameConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregateOrganizationName'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['OrganizationNameEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationNameEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationNameEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OrganizationName'], ParentType, ContextType>;
};

export type OrganizationTargetMarketResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationTargetMarket']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  organizations?: Resolver<
    Maybe<Array<ResolversTypes['Organization']>>,
    ParentType,
    ContextType,
    OrganizationTargetMarketOrganizationsArgs
  >;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type OrganizationTargetMarketConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationTargetMarketConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregateOrganizationTargetMarket'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['OrganizationTargetMarketEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationTargetMarketEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['OrganizationTargetMarketEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<
    ResolversTypes['OrganizationTargetMarket'],
    ParentType,
    ContextType
  >;
};

export type PageInfoResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PageInfo']
> = {
  endCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
};

export type PartyAccountResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyAccount']
> = {
  admin?: Resolver<
    Maybe<Array<ResolversTypes['Organization']>>,
    ParentType,
    ContextType,
    PartyAccountAdminArgs
  >;
  cognitoId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number_verified?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  roles?: Resolver<
    Maybe<Array<ResolversTypes['PartyRole']>>,
    ParentType,
    ContextType,
    PartyAccountRolesArgs
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type PartyAccountConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyAccountConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregatePartyAccount'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['PartyAccountEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PartyAccountEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyAccountEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PartyAccount'], ParentType, ContextType>;
};

export type PartyEmailResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyEmail']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPrimary?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  isPublic?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  throughDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type PartyEmailConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyEmailConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregatePartyEmail'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['PartyEmailEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PartyEmailEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyEmailEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PartyEmail'], ParentType, ContextType>;
};

export type PartyPhoneResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyPhone']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPrimary?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  isPublic?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  throughDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type PartyPhoneConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyPhoneConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregatePartyPhone'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['PartyPhoneEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PartyPhoneEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyPhoneEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PartyPhone'], ParentType, ContextType>;
};

export type PartyRoleResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyRole']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  party?: Resolver<ResolversTypes['PartyAccount'], ParentType, ContextType>;
  resource?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  roleType?: Resolver<ResolversTypes['PartyRoleType'], ParentType, ContextType>;
  throughDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type PartyRoleConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyRoleConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregatePartyRole'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['PartyRoleEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PartyRoleEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyRoleEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PartyRole'], ParentType, ContextType>;
};

export type PartyRoleTypeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyRoleType']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type PartyRoleTypeConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyRoleTypeConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregatePartyRoleType'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['PartyRoleTypeEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PartyRoleTypeEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PartyRoleTypeEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PartyRoleType'], ParentType, ContextType>;
};

export type PersonResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['Person']
> = {
  account?: Resolver<
    Maybe<ResolversTypes['PartyAccount']>,
    ParentType,
    ContextType
  >;
  affiliation?: Resolver<
    Maybe<Array<ResolversTypes['PersonOrganizationAffiliation']>>,
    ParentType,
    ContextType,
    PersonAffiliationArgs
  >;
  avatar?: Resolver<
    Maybe<Array<ResolversTypes['PersonAvatar']>>,
    ParentType,
    ContextType,
    PersonAvatarArgs
  >;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<
    Maybe<Array<ResolversTypes['PartyEmail']>>,
    ParentType,
    ContextType,
    PersonEmailArgs
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<
    ResolversTypes['PersonMetaData'],
    ParentType,
    ContextType
  >;
  name?: Resolver<
    Maybe<Array<ResolversTypes['PersonName']>>,
    ParentType,
    ContextType,
    PersonNameArgs
  >;
  personalTitle?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  phone?: Resolver<
    Maybe<Array<ResolversTypes['PartyPhone']>>,
    ParentType,
    ContextType,
    PersonPhoneArgs
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type PersonAvatarResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonAvatar']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPrimary?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  isPublic?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  throughDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type PersonAvatarConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonAvatarConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregatePersonAvatar'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['PersonAvatarEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PersonAvatarEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonAvatarEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PersonAvatar'], ParentType, ContextType>;
};

export type PersonConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregatePerson'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['PersonEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PersonEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
};

export type PersonMetaDataResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonMetaData']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isApproved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDraft?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPendingReview?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRejected?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isUnverified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type PersonMetaDataConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonMetaDataConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregatePersonMetaData'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['PersonMetaDataEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PersonMetaDataEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonMetaDataEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PersonMetaData'], ParentType, ContextType>;
};

export type PersonNameResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonName']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleInitial?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  throughDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type PersonNameConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonNameConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregatePersonName'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['PersonNameEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PersonNameEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonNameEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PersonName'], ParentType, ContextType>;
};

export type PersonOrganizationAffiliationResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonOrganizationAffiliation']
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  fromDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<
    Maybe<ResolversTypes['PersonOrganizationAffiliationMetaData']>,
    ParentType,
    ContextType
  >;
  organization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType
  >;
  person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  throughDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type PersonOrganizationAffiliationConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonOrganizationAffiliationConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregatePersonOrganizationAffiliation'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['PersonOrganizationAffiliationEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PersonOrganizationAffiliationEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonOrganizationAffiliationEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<
    ResolversTypes['PersonOrganizationAffiliation'],
    ParentType,
    ContextType
  >;
};

export type PersonOrganizationAffiliationMetaDataResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonOrganizationAffiliationMetaData']
> = {
  affiliation?: Resolver<
    ResolversTypes['PersonOrganizationAffiliation'],
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isApproved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDraft?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPendingReview?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRejected?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isUnverified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type PersonOrganizationAffiliationMetaDataConnectionResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonOrganizationAffiliationMetaDataConnection']
> = {
  aggregate?: Resolver<
    ResolversTypes['AggregatePersonOrganizationAffiliationMetaData'],
    ParentType,
    ContextType
  >;
  edges?: Resolver<
    Array<ResolversTypes['PersonOrganizationAffiliationMetaDataEdge']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PersonOrganizationAffiliationMetaDataEdgeResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['PersonOrganizationAffiliationMetaDataEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<
    ResolversTypes['PersonOrganizationAffiliationMetaData'],
    ParentType,
    ContextType
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversParentTypes['Query']
> = {
  me?: Resolver<ResolversTypes['PartyAccount'], ParentType, ContextType>;
  organization?: Resolver<
    Maybe<ResolversTypes['Organization']>,
    ParentType,
    ContextType,
    QueryOrganizationArgs
  >;
  organizationBusinessModel?: Resolver<
    Maybe<ResolversTypes['OrganizationBusinessModel']>,
    ParentType,
    ContextType,
    QueryOrganizationBusinessModelArgs
  >;
  organizationBusinessModels?: Resolver<
    Array<ResolversTypes['OrganizationBusinessModel']>,
    ParentType,
    ContextType,
    QueryOrganizationBusinessModelsArgs
  >;
  organizationBusinessModelsConnection?: Resolver<
    ResolversTypes['OrganizationBusinessModelConnection'],
    ParentType,
    ContextType,
    QueryOrganizationBusinessModelsConnectionArgs
  >;
  organizationCategories?: Resolver<
    Array<ResolversTypes['OrganizationCategory']>,
    ParentType,
    ContextType,
    QueryOrganizationCategoriesArgs
  >;
  organizationCategoriesConnection?: Resolver<
    ResolversTypes['OrganizationCategoryConnection'],
    ParentType,
    ContextType,
    QueryOrganizationCategoriesConnectionArgs
  >;
  organizationCategory?: Resolver<
    Maybe<ResolversTypes['OrganizationCategory']>,
    ParentType,
    ContextType,
    QueryOrganizationCategoryArgs
  >;
  organizationContext?: Resolver<
    Maybe<ResolversTypes['OrganizationContext']>,
    ParentType,
    ContextType,
    QueryOrganizationContextArgs
  >;
  organizationContextMetaData?: Resolver<
    Maybe<ResolversTypes['OrganizationContextMetaData']>,
    ParentType,
    ContextType,
    QueryOrganizationContextMetaDataArgs
  >;
  organizationContextMetaDatas?: Resolver<
    Array<ResolversTypes['OrganizationContextMetaData']>,
    ParentType,
    ContextType,
    QueryOrganizationContextMetaDatasArgs
  >;
  organizationContextMetaDatasConnection?: Resolver<
    ResolversTypes['OrganizationContextMetaDataConnection'],
    ParentType,
    ContextType,
    QueryOrganizationContextMetaDatasConnectionArgs
  >;
  organizationContexts?: Resolver<
    Array<ResolversTypes['OrganizationContext']>,
    ParentType,
    ContextType,
    QueryOrganizationContextsArgs
  >;
  organizationContextsConnection?: Resolver<
    ResolversTypes['OrganizationContextConnection'],
    ParentType,
    ContextType,
    QueryOrganizationContextsConnectionArgs
  >;
  organizationLink?: Resolver<
    Maybe<ResolversTypes['OrganizationLink']>,
    ParentType,
    ContextType,
    QueryOrganizationLinkArgs
  >;
  organizationLinks?: Resolver<
    Array<ResolversTypes['OrganizationLink']>,
    ParentType,
    ContextType,
    QueryOrganizationLinksArgs
  >;
  organizationLinksConnection?: Resolver<
    ResolversTypes['OrganizationLinkConnection'],
    ParentType,
    ContextType,
    QueryOrganizationLinksConnectionArgs
  >;
  organizationLocation?: Resolver<
    Maybe<ResolversTypes['OrganizationLocation']>,
    ParentType,
    ContextType,
    QueryOrganizationLocationArgs
  >;
  organizationLocations?: Resolver<
    Array<ResolversTypes['OrganizationLocation']>,
    ParentType,
    ContextType,
    QueryOrganizationLocationsArgs
  >;
  organizationLocationsConnection?: Resolver<
    ResolversTypes['OrganizationLocationConnection'],
    ParentType,
    ContextType,
    QueryOrganizationLocationsConnectionArgs
  >;
  organizationLogo?: Resolver<
    Maybe<ResolversTypes['OrganizationLogo']>,
    ParentType,
    ContextType,
    QueryOrganizationLogoArgs
  >;
  organizationLogoes?: Resolver<
    Array<ResolversTypes['OrganizationLogo']>,
    ParentType,
    ContextType,
    QueryOrganizationLogoesArgs
  >;
  organizationLogoesConnection?: Resolver<
    ResolversTypes['OrganizationLogoConnection'],
    ParentType,
    ContextType,
    QueryOrganizationLogoesConnectionArgs
  >;
  organizationMetaData?: Resolver<
    Maybe<ResolversTypes['OrganizationMetaData']>,
    ParentType,
    ContextType,
    QueryOrganizationMetaDataArgs
  >;
  organizationMetaDatas?: Resolver<
    Array<ResolversTypes['OrganizationMetaData']>,
    ParentType,
    ContextType,
    QueryOrganizationMetaDatasArgs
  >;
  organizationMetaDatasConnection?: Resolver<
    ResolversTypes['OrganizationMetaDataConnection'],
    ParentType,
    ContextType,
    QueryOrganizationMetaDatasConnectionArgs
  >;
  organizationName?: Resolver<
    Maybe<ResolversTypes['OrganizationName']>,
    ParentType,
    ContextType,
    QueryOrganizationNameArgs
  >;
  organizationNames?: Resolver<
    Array<ResolversTypes['OrganizationName']>,
    ParentType,
    ContextType,
    QueryOrganizationNamesArgs
  >;
  organizationNamesConnection?: Resolver<
    ResolversTypes['OrganizationNameConnection'],
    ParentType,
    ContextType,
    QueryOrganizationNamesConnectionArgs
  >;
  organizations?: Resolver<
    Array<ResolversTypes['Organization']>,
    ParentType,
    ContextType,
    QueryOrganizationsArgs
  >;
  organizationsConnection?: Resolver<
    ResolversTypes['OrganizationConnection'],
    ParentType,
    ContextType,
    QueryOrganizationsConnectionArgs
  >;
  organizationTargetMarket?: Resolver<
    Maybe<ResolversTypes['OrganizationTargetMarket']>,
    ParentType,
    ContextType,
    QueryOrganizationTargetMarketArgs
  >;
  organizationTargetMarkets?: Resolver<
    Array<ResolversTypes['OrganizationTargetMarket']>,
    ParentType,
    ContextType,
    QueryOrganizationTargetMarketsArgs
  >;
  organizationTargetMarketsConnection?: Resolver<
    ResolversTypes['OrganizationTargetMarketConnection'],
    ParentType,
    ContextType,
    QueryOrganizationTargetMarketsConnectionArgs
  >;
  partyAccount?: Resolver<
    Maybe<ResolversTypes['PartyAccount']>,
    ParentType,
    ContextType,
    QueryPartyAccountArgs
  >;
  partyAccounts?: Resolver<
    Array<ResolversTypes['PartyAccount']>,
    ParentType,
    ContextType,
    QueryPartyAccountsArgs
  >;
  partyAccountsConnection?: Resolver<
    ResolversTypes['PartyAccountConnection'],
    ParentType,
    ContextType,
    QueryPartyAccountsConnectionArgs
  >;
  partyEmail?: Resolver<
    Maybe<ResolversTypes['PartyEmail']>,
    ParentType,
    ContextType,
    QueryPartyEmailArgs
  >;
  partyEmails?: Resolver<
    Array<ResolversTypes['PartyEmail']>,
    ParentType,
    ContextType,
    QueryPartyEmailsArgs
  >;
  partyEmailsConnection?: Resolver<
    ResolversTypes['PartyEmailConnection'],
    ParentType,
    ContextType,
    QueryPartyEmailsConnectionArgs
  >;
  partyPhone?: Resolver<
    Maybe<ResolversTypes['PartyPhone']>,
    ParentType,
    ContextType,
    QueryPartyPhoneArgs
  >;
  partyPhones?: Resolver<
    Array<ResolversTypes['PartyPhone']>,
    ParentType,
    ContextType,
    QueryPartyPhonesArgs
  >;
  partyPhonesConnection?: Resolver<
    ResolversTypes['PartyPhoneConnection'],
    ParentType,
    ContextType,
    QueryPartyPhonesConnectionArgs
  >;
  partyRole?: Resolver<
    Maybe<ResolversTypes['PartyRole']>,
    ParentType,
    ContextType,
    QueryPartyRoleArgs
  >;
  partyRoles?: Resolver<
    Array<ResolversTypes['PartyRole']>,
    ParentType,
    ContextType,
    QueryPartyRolesArgs
  >;
  partyRolesConnection?: Resolver<
    ResolversTypes['PartyRoleConnection'],
    ParentType,
    ContextType,
    QueryPartyRolesConnectionArgs
  >;
  partyRoleType?: Resolver<
    Maybe<ResolversTypes['PartyRoleType']>,
    ParentType,
    ContextType,
    QueryPartyRoleTypeArgs
  >;
  partyRoleTypes?: Resolver<
    Array<ResolversTypes['PartyRoleType']>,
    ParentType,
    ContextType,
    QueryPartyRoleTypesArgs
  >;
  partyRoleTypesConnection?: Resolver<
    ResolversTypes['PartyRoleTypeConnection'],
    ParentType,
    ContextType,
    QueryPartyRoleTypesConnectionArgs
  >;
  person?: Resolver<
    Maybe<ResolversTypes['Person']>,
    ParentType,
    ContextType,
    QueryPersonArgs
  >;
  personAvatar?: Resolver<
    Maybe<ResolversTypes['PersonAvatar']>,
    ParentType,
    ContextType,
    QueryPersonAvatarArgs
  >;
  personAvatars?: Resolver<
    Array<ResolversTypes['PersonAvatar']>,
    ParentType,
    ContextType,
    QueryPersonAvatarsArgs
  >;
  personAvatarsConnection?: Resolver<
    ResolversTypes['PersonAvatarConnection'],
    ParentType,
    ContextType,
    QueryPersonAvatarsConnectionArgs
  >;
  personMetaData?: Resolver<
    Maybe<ResolversTypes['PersonMetaData']>,
    ParentType,
    ContextType,
    QueryPersonMetaDataArgs
  >;
  personMetaDatas?: Resolver<
    Array<ResolversTypes['PersonMetaData']>,
    ParentType,
    ContextType,
    QueryPersonMetaDatasArgs
  >;
  personMetaDatasConnection?: Resolver<
    ResolversTypes['PersonMetaDataConnection'],
    ParentType,
    ContextType,
    QueryPersonMetaDatasConnectionArgs
  >;
  personName?: Resolver<
    Maybe<ResolversTypes['PersonName']>,
    ParentType,
    ContextType,
    QueryPersonNameArgs
  >;
  personNames?: Resolver<
    Array<ResolversTypes['PersonName']>,
    ParentType,
    ContextType,
    QueryPersonNamesArgs
  >;
  personNamesConnection?: Resolver<
    ResolversTypes['PersonNameConnection'],
    ParentType,
    ContextType,
    QueryPersonNamesConnectionArgs
  >;
  personOrganizationAffiliation?: Resolver<
    Maybe<ResolversTypes['PersonOrganizationAffiliation']>,
    ParentType,
    ContextType,
    QueryPersonOrganizationAffiliationArgs
  >;
  personOrganizationAffiliationMetaData?: Resolver<
    Maybe<ResolversTypes['PersonOrganizationAffiliationMetaData']>,
    ParentType,
    ContextType,
    QueryPersonOrganizationAffiliationMetaDataArgs
  >;
  personOrganizationAffiliationMetaDatas?: Resolver<
    Array<ResolversTypes['PersonOrganizationAffiliationMetaData']>,
    ParentType,
    ContextType,
    QueryPersonOrganizationAffiliationMetaDatasArgs
  >;
  personOrganizationAffiliationMetaDatasConnection?: Resolver<
    ResolversTypes['PersonOrganizationAffiliationMetaDataConnection'],
    ParentType,
    ContextType,
    QueryPersonOrganizationAffiliationMetaDatasConnectionArgs
  >;
  personOrganizationAffiliations?: Resolver<
    Array<ResolversTypes['PersonOrganizationAffiliation']>,
    ParentType,
    ContextType,
    QueryPersonOrganizationAffiliationsArgs
  >;
  personOrganizationAffiliationsConnection?: Resolver<
    ResolversTypes['PersonOrganizationAffiliationConnection'],
    ParentType,
    ContextType,
    QueryPersonOrganizationAffiliationsConnectionArgs
  >;
  persons?: Resolver<
    Array<ResolversTypes['Person']>,
    ParentType,
    ContextType,
    QueryPersonsArgs
  >;
  personsConnection?: Resolver<
    ResolversTypes['PersonConnection'],
    ParentType,
    ContextType,
    QueryPersonsConnectionArgs
  >;
};

export type Resolvers<ContextType = any> = {
  AggregateOrganization?: AggregateOrganizationResolvers<ContextType>;
  AggregateOrganizationBusinessModel?: AggregateOrganizationBusinessModelResolvers<
    ContextType
  >;
  AggregateOrganizationCategory?: AggregateOrganizationCategoryResolvers<
    ContextType
  >;
  AggregateOrganizationContext?: AggregateOrganizationContextResolvers<
    ContextType
  >;
  AggregateOrganizationContextMetaData?: AggregateOrganizationContextMetaDataResolvers<
    ContextType
  >;
  AggregateOrganizationLink?: AggregateOrganizationLinkResolvers<ContextType>;
  AggregateOrganizationLocation?: AggregateOrganizationLocationResolvers<
    ContextType
  >;
  AggregateOrganizationLogo?: AggregateOrganizationLogoResolvers<ContextType>;
  AggregateOrganizationMetaData?: AggregateOrganizationMetaDataResolvers<
    ContextType
  >;
  AggregateOrganizationName?: AggregateOrganizationNameResolvers<ContextType>;
  AggregateOrganizationTargetMarket?: AggregateOrganizationTargetMarketResolvers<
    ContextType
  >;
  AggregatePartyAccount?: AggregatePartyAccountResolvers<ContextType>;
  AggregatePartyEmail?: AggregatePartyEmailResolvers<ContextType>;
  AggregatePartyPhone?: AggregatePartyPhoneResolvers<ContextType>;
  AggregatePartyRole?: AggregatePartyRoleResolvers<ContextType>;
  AggregatePartyRoleType?: AggregatePartyRoleTypeResolvers<ContextType>;
  AggregatePerson?: AggregatePersonResolvers<ContextType>;
  AggregatePersonAvatar?: AggregatePersonAvatarResolvers<ContextType>;
  AggregatePersonMetaData?: AggregatePersonMetaDataResolvers<ContextType>;
  AggregatePersonName?: AggregatePersonNameResolvers<ContextType>;
  AggregatePersonOrganizationAffiliation?: AggregatePersonOrganizationAffiliationResolvers<
    ContextType
  >;
  AggregatePersonOrganizationAffiliationMetaData?: AggregatePersonOrganizationAffiliationMetaDataResolvers<
    ContextType
  >;
  BatchPayload?: BatchPayloadResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Json?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  OrganizationBusinessModel?: OrganizationBusinessModelResolvers<ContextType>;
  OrganizationBusinessModelConnection?: OrganizationBusinessModelConnectionResolvers<
    ContextType
  >;
  OrganizationBusinessModelEdge?: OrganizationBusinessModelEdgeResolvers<
    ContextType
  >;
  OrganizationCategory?: OrganizationCategoryResolvers<ContextType>;
  OrganizationCategoryConnection?: OrganizationCategoryConnectionResolvers<
    ContextType
  >;
  OrganizationCategoryEdge?: OrganizationCategoryEdgeResolvers<ContextType>;
  OrganizationConnection?: OrganizationConnectionResolvers<ContextType>;
  OrganizationContext?: OrganizationContextResolvers<ContextType>;
  OrganizationContextConnection?: OrganizationContextConnectionResolvers<
    ContextType
  >;
  OrganizationContextEdge?: OrganizationContextEdgeResolvers<ContextType>;
  OrganizationContextMetaData?: OrganizationContextMetaDataResolvers<
    ContextType
  >;
  OrganizationContextMetaDataConnection?: OrganizationContextMetaDataConnectionResolvers<
    ContextType
  >;
  OrganizationContextMetaDataEdge?: OrganizationContextMetaDataEdgeResolvers<
    ContextType
  >;
  OrganizationEdge?: OrganizationEdgeResolvers<ContextType>;
  OrganizationLink?: OrganizationLinkResolvers<ContextType>;
  OrganizationLinkConnection?: OrganizationLinkConnectionResolvers<ContextType>;
  OrganizationLinkEdge?: OrganizationLinkEdgeResolvers<ContextType>;
  OrganizationLocation?: OrganizationLocationResolvers<ContextType>;
  OrganizationLocationConnection?: OrganizationLocationConnectionResolvers<
    ContextType
  >;
  OrganizationLocationEdge?: OrganizationLocationEdgeResolvers<ContextType>;
  OrganizationLogo?: OrganizationLogoResolvers<ContextType>;
  OrganizationLogoConnection?: OrganizationLogoConnectionResolvers<ContextType>;
  OrganizationLogoEdge?: OrganizationLogoEdgeResolvers<ContextType>;
  OrganizationMetaData?: OrganizationMetaDataResolvers<ContextType>;
  OrganizationMetaDataConnection?: OrganizationMetaDataConnectionResolvers<
    ContextType
  >;
  OrganizationMetaDataEdge?: OrganizationMetaDataEdgeResolvers<ContextType>;
  OrganizationName?: OrganizationNameResolvers<ContextType>;
  OrganizationNameConnection?: OrganizationNameConnectionResolvers<ContextType>;
  OrganizationNameEdge?: OrganizationNameEdgeResolvers<ContextType>;
  OrganizationTargetMarket?: OrganizationTargetMarketResolvers<ContextType>;
  OrganizationTargetMarketConnection?: OrganizationTargetMarketConnectionResolvers<
    ContextType
  >;
  OrganizationTargetMarketEdge?: OrganizationTargetMarketEdgeResolvers<
    ContextType
  >;
  PageInfo?: PageInfoResolvers<ContextType>;
  PartyAccount?: PartyAccountResolvers<ContextType>;
  PartyAccountConnection?: PartyAccountConnectionResolvers<ContextType>;
  PartyAccountEdge?: PartyAccountEdgeResolvers<ContextType>;
  PartyEmail?: PartyEmailResolvers<ContextType>;
  PartyEmailConnection?: PartyEmailConnectionResolvers<ContextType>;
  PartyEmailEdge?: PartyEmailEdgeResolvers<ContextType>;
  PartyPhone?: PartyPhoneResolvers<ContextType>;
  PartyPhoneConnection?: PartyPhoneConnectionResolvers<ContextType>;
  PartyPhoneEdge?: PartyPhoneEdgeResolvers<ContextType>;
  PartyRole?: PartyRoleResolvers<ContextType>;
  PartyRoleConnection?: PartyRoleConnectionResolvers<ContextType>;
  PartyRoleEdge?: PartyRoleEdgeResolvers<ContextType>;
  PartyRoleType?: PartyRoleTypeResolvers<ContextType>;
  PartyRoleTypeConnection?: PartyRoleTypeConnectionResolvers<ContextType>;
  PartyRoleTypeEdge?: PartyRoleTypeEdgeResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonAvatar?: PersonAvatarResolvers<ContextType>;
  PersonAvatarConnection?: PersonAvatarConnectionResolvers<ContextType>;
  PersonAvatarEdge?: PersonAvatarEdgeResolvers<ContextType>;
  PersonConnection?: PersonConnectionResolvers<ContextType>;
  PersonEdge?: PersonEdgeResolvers<ContextType>;
  PersonMetaData?: PersonMetaDataResolvers<ContextType>;
  PersonMetaDataConnection?: PersonMetaDataConnectionResolvers<ContextType>;
  PersonMetaDataEdge?: PersonMetaDataEdgeResolvers<ContextType>;
  PersonName?: PersonNameResolvers<ContextType>;
  PersonNameConnection?: PersonNameConnectionResolvers<ContextType>;
  PersonNameEdge?: PersonNameEdgeResolvers<ContextType>;
  PersonOrganizationAffiliation?: PersonOrganizationAffiliationResolvers<
    ContextType
  >;
  PersonOrganizationAffiliationConnection?: PersonOrganizationAffiliationConnectionResolvers<
    ContextType
  >;
  PersonOrganizationAffiliationEdge?: PersonOrganizationAffiliationEdgeResolvers<
    ContextType
  >;
  PersonOrganizationAffiliationMetaData?: PersonOrganizationAffiliationMetaDataResolvers<
    ContextType
  >;
  PersonOrganizationAffiliationMetaDataConnection?: PersonOrganizationAffiliationMetaDataConnectionResolvers<
    ContextType
  >;
  PersonOrganizationAffiliationMetaDataEdge?: PersonOrganizationAffiliationMetaDataEdgeResolvers<
    ContextType
  >;
  Query?: QueryResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
