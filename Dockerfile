FROM node:14

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev", "--hostname", "0.0.0.0"]