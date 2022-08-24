FROM node:16
WORKDIR /app/
COPY . /app/
RUN yarn install && yarn tsc
ENTRYPOINT ["node", "dist/index.js"]
