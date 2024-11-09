FROM ghcr.io/puppeteer/puppeteer:22.9.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=TRUE\
  PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm run build

CMD [ "node" ,"build/server.js" ]