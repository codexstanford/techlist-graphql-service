import { rule, shield, and, or, not } from "graphql-shield";
import { getUserId } from "./utils";

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  isPostOwner: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context);
    const author = await context.prisma.post({ id }).author();
    return userId === author.id;
  }),
  isOnAdminTeam: rule()(async (parent, { where, input }, context) => {
    const { id } = where;
    const userId = getUserId(context);
    const company = await context.prisma.company({ id }).admins();
    console.log(company);
    return company.includes(userId);
  })
};

export const permissions = shield({
  Mutation: {
    createCompany: rules.isAuthenticatedUser,
    updateCompany: and(rules.isAuthenticatedUser, rules.isOnAdminTeam)
  }
});
