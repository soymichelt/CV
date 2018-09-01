FROM node:10.9-alpine
EXPOSE 3000

WORKDIR /app

ADD package.json /app/
RUN npm install

ADD . /app/

CMD ["npm", "run", "start"]