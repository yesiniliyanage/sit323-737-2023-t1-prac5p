FROM node:16

#create app directory
WORKDIR /usr/src/app
#install app dependencies
#copy package.json and package-lock.json
#where available npm
COPY package*.json ./

RUN npm install

#bundle app source
COPY task5.1P.js .

EXPOSE 3040
CMD [ "node", "task5.1P.js" ]