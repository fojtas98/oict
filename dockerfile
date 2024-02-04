FROM node:20.11.0-alpine3.18

COPY . .

RUN npm install

RUN npm run build

CMD [ "node", "./dist/index.js" ]

# dockerfile s malým D?
# je to produkční build?