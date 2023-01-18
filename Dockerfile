FROM node:10.16.3-alpine
ARG MY_TEST=default

ENV EVAR=${MY_TEST}

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN echo ${EVAR} > mytxt

RUN npm install hot-shots

EXPOSE 3000

CMD ["node", "app.js"]