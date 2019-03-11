import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import Express from 'express';

export default class ProtectedApolloServer extends ApolloServer {
  async createGraphQLServerOptions(
    req: Express.Request,
    res: Express.Response,
  ): Promise<any> {
    const options = await super.createGraphQLServerOptions(req, res);

    return {
      ...options,
      validationRules: [
        // costAnalysis({
        //   maximumCost: 750,
        //   defaultCost: 1,
        //   variables: req.body.variables,
        //   createError: (max: number, actual: number) => {
        //     const err = new Error(
        //       `GraphQL query exceeds maximum complexity, please remove some nesting or fields and try again. (max: ${max}, actual: ${actual})`,
        //     );
        //     return err;
        //   },
        // }),
        depthLimit(10),
      ],
    };
  }
}
