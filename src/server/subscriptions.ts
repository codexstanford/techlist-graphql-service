// import { RedisPubSub } from 'graphql-redis-subscriptions';
// import Redis from 'ioredis';
// import { config } from './config';

// const options = {
//   host:
//     config.environment === 'production'
//       ? `${process.env.REDIS_PRODUCTION}`
//       : `${process.env.REDIS_DEVELOPMENT}`,
//   port: 6379,
//   retry_strategy: (options) => {
//     // reconnect after
//     return Math.max(options.attempt * 100, 3000);
//   },
// };

// export const pubsub = new RedisPubSub({
//   publisher: new Redis(options),
//   subscriber: new Redis(options),
// });

export default {};
