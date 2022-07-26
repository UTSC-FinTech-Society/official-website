FROM node:18-alpine3.16

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "start"]