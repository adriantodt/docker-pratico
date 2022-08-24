FROM node:16 AS builder
WORKDIR /app/
COPY . /app/
RUN yarn install && yarn build

FROM node:16
WORKDIR /app/
COPY --from=builder /app/build/ /app/build/
RUN yarn global add serve
ENTRYPOINT ["serve", "-n", "-s", "build"]
EXPOSE 3000
