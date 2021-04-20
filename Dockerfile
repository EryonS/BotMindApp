# Build
FROM node:14.16.1-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# NGINX
FROM nginx:1.19-alpine
COPY --from=build /usr/src/app/dist/app /usr/share/nginx/html
EXPOSE 80