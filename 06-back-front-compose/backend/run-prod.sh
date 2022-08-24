#!/usr/bin/env bash
yarn prisma migrate deploy
yarn prisma db seed
node dist/src/main.js
