import jwt from 'jsonwebtoken';
import JwksClient from 'jwks-rsa';

import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const KEYS_URL = `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${
  process.env.AWS_COGNITO_USERPOOL_ID
}/.well-known/jwks.json`;

const Cognito = new AWS.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
});

const jwksClient = JwksClient({
  cache: true,
  cacheMaxEntries: 5,
  jwksUri: KEYS_URL,
});

export const APP_SECRET = 'appsecret321';

interface Token {
  userId: string;
}

export async function getUserId(context: {
  req: { headers: { authorization?: string } };
}) {
  if (!context || !context.req || !context.req.headers) {
    throw new Error('Malformed request');
  }
  const authorization = getAuthorizationToken(context.req);
  if (!authorization) {
    return null;
    throw new Error('Must be authenticated');
  }
  if (authorization) {
    isTokenStructurallyValid(authorization);
    try {
      const cognitoUser = await verifyToken(authorization);

      return cognitoUser;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

const verifyToken = async (token): Promise<{ sub: string }> => {
  return new Promise((res, rej) => {
    jwt.verify(
      token,
      getKey,
      {
        algorithms: ['RS256'],
        audience: process.env.AWS_COGNITO_APP_CLIENT_ID,
      },
      (err, decoded) => {
        if (err) {
          rej(err);
        }
        res(decoded);
      },
    );
  });
};

const getKey = (header, callback) => {
  jwksClient.getSigningKey(header.kid, (error, key) => {
    if (error) {
      callback(error);
    }

    if (key === undefined) {
      console.log(error);
      throw new Error('No key');
    }

    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};

export const getAuthorizationToken = (request: any): any => {
  const hasAuthorizaitonHeaders =
    request.headers && request.headers.authorization;
  if (!hasAuthorizaitonHeaders) {
    // throw new Error('No authorization header was provided with this request.');
    return null;
  }

  const { authorization } = request.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new Error(
      'No valid authorization header was provided with this request.',
    );
  }

  return authorization.split('Bearer ')[1];
};

export function isTokenStructurallyValid(token) {
  const result = token.split('.').length === 3;
  if (!result) {
    throw new Error('Not valid structure');
  }
}
