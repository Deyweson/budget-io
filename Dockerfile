# Use a imagem base de Puppeteer
FROM ghcr.io/puppeteer/puppeteer:22.9.0

# Defina variáveis de ambiente para o Puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
  PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm ci

# Copie o restante do código do aplicativo para o diretório de trabalho
COPY . .

# Compile o TypeScript para JavaScript usando tsup
RUN npm run build

# Exponha a porta na qual o servidor estará escutando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "build/server.js"]
