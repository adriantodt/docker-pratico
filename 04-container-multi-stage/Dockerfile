FROM node:16 AS builder
WORKDIR /app/
COPY . /app/
RUN yarn install && yarn tsc

FROM node:16
WORKDIR /app/
COPY --from=builder /app/dist/ /app/dist/
COPY --from=builder /app/package.json /app/yarn.lock  /app/
RUN yarn install --production
ENTRYPOINT ["node", "dist/index.js"]
