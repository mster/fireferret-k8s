FROM node:12-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i

ENV PORT 80
EXPOSE 80

COPY . .

CMD ["node", "app.js"]