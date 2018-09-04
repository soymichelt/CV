FROM node:10.9-alpine

EXPOSE 9000

WORKDIR /soymicheltWebApp

ADD package.json /soymicheltWebApp/

RUN npm cache clean --force

RUN npm install

ADD . /soymicheltWebApp/

CMD ["npm", "run", "start"]