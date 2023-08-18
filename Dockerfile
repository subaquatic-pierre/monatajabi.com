FROM node:20-slim as builder

WORKDIR /app
RUN npm install gatsby-cli -g

ADD package.json .
RUN npm install --force

ENV GATSBY_TELEMETRY_DISABLED=1
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/ /app/
RUN rm -rf ./src

EXPOSE 9000
CMD [ "node_modules/.bin/gatsby","serve","-H","0.0.0.0","-p","9000" ]