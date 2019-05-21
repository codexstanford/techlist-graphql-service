# FROM node:10-alpine as builder

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# ENV NPM_CONFIG_LOGLEVEL warn
# # RUN apk --no-cache add python make

# COPY package.json ./
# RUN yarn --silent

# # The instructions for second stage
# FROM node:10-alpine

# WORKDIR /usr/src/app
# COPY --from=builder node_modules node_modules

# RUN npm install -g pm2 graphql-cli

# COPY . .

# RUN yarn 

# RUN yarn build

# EXPOSE 4000 433

# # RUN ls -al -R

# # CMD [ "yarn", "start" ]

# CMD [ "pm2-runtime", "start", "pm2.json" ]

FROM node:11.4-alpine as builder
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json *.lock ./
RUN yarn --silent
RUN yarn global add nodemon --silent
COPY . ./
EXPOSE 4000
