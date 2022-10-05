# Common build stage
FROM node:14.14.0-alpine3.12 as common-build-stage

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3000


# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

# Set any ENVs
ARG DB_HOST=${DB_HOST}
ARG DB_PORT=${DB_PORT}
ARG DB_DATABASE=${DB_DATABASE}
ARG DB_USER=${DB_USER}
ARG DB_PASSWORD=${DB_PASSWORD}
ARG PORT=${PORT}
ARG LOG_FORMAT=${LOG_FORMAT}
ARG LOG_DIR=${LOG_DIR}
ARG ORIGIN=${ORIGIN}
ARG CREDENTIALS=${CREDENTIALS}
ARG NODE_ENV=${NODE_ENV}

CMD ["npm", "run", "start"]
