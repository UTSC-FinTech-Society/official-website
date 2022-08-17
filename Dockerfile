FROM node:18-alpine3.16

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "start"]