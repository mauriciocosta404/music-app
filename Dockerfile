FROM node:alpine

WORKDIR /root/Documentos/projects/music-app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn","dev"]
