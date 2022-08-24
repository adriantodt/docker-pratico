FROM node:16
WORKDIR /app/
COPY . /app/
RUN yarn install && yarn build
ENTRYPOINT ["bash", "run-prod.sh"]
EXPOSE 4000
