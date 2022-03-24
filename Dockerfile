FROM node:16-alpine
#specifying the working directory
WORKDIR /usr/app
#copy package.json to the working directory
COPY ./package.json .

RUN yarn

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]