FROM node:11.4-alpine as builder

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV NPM_CONFIG_LOGLEVEL warn
COPY package.json ./
RUN npm install --silent --production && npm install pm2 

FROM node:11.4-alpine

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY --from=builder node_modules node_modules
COPY . .
RUN yarn build 
EXPOSE 4000 433

CMD [ "pm2-runtime", "start", "pm2.json" ]

