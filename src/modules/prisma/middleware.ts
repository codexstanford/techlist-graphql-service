import { rule, shield, and, or, not, allow } from 'graphql-shield';
import { getUserId } from './utils';

const rules = {
  isOnAdminTeam: rule()(async (parent, { where, input }, context) => {
    const { id } = where;
    const userId = getUserId(context);
    const company = await context.prisma.company({ id }).admins();
    console.log(company);
    return company.includes(userId);
  }),
};

const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  return ctx.user;
});

export const permissions = shield({
  Mutation: {
    // '*': isAuthenticated,
    // createPartyRole: allow,
    // createPartyRoleType: allow,
    // createCompany: rules.isAuthenticatedUser,
    // updateCompany: and(rules.isAuthenticatedUser, rules.isOnAdminTeam)
  },
  Query: {
    // organizationCategories: isAuthenticated,
  },
});
