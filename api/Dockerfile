FROM node:22-alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]

