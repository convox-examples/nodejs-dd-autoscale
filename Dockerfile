FROM node:10.16.3-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

EXPOSE 3000

CMD ["node", "app.js"]