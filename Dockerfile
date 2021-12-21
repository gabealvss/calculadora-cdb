FROM node:16

WORKDIR /gateway

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run generate
RUN npm run build

EXPOSE 5000
CMD [ "npm", "run", "start" ]