FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN git clone https://github.com/vishnubob/wait-for-it.git
CMD npx sequelize-cli db:migrate && npm run dev