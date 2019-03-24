const environment = process.env.NODE_ENV || 'production';

export const configurations = {
  production: {
    ssl: false,
    port: 4000,
    hostname: 'localhost',
    environment,
  },
  development: { ssl: false, port: 4000, hostname: 'localhost', environment },
};

export const config = configurations[environment];
