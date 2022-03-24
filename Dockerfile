FROM node:lts-alpine as builder
WORKDIR /usr/src/app
COPY ./package.json ./
RUN yarn
COPY . .
RUN yarn build
FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 5000