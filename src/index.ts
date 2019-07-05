require('dotenv').config();
import { run } from './server';

run();

// const { ApolloServer } = require('apollo-server');
// const { ApolloGateway } = require('@apollo/gateway');

// const gateway = new ApolloGateway({
//   serviceList: [{ name: 'accounts', url: 'http://0.0.0.0:4466/dev/one' }],
// });

// (async () => {
//   const { schema, executor } = await gateway.load();

//   const server = new ApolloServer({ schema, executor });

//   server.listen().then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`);
//   });
// })();
