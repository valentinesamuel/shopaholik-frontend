FROM node:lts-alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

RUN ls -a

COPY . .

RUN npm run build

EXPOSE 5137

CMD [ "npm", "run", "dev" ]