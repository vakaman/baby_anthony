# Dockerfile.dev
FROM node:18

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Instale o Vue CLI globalmente
RUN npm install -g @vue/cli

# Altere as permissões do diretório de trabalho para o usuário `node`
RUN chown -R node:node /app

# Use o usuário `node` para as operações seguintes
USER node

# Copie os arquivos de configuração do projeto
COPY --chown=node:node package*.json ./

# Instale as dependências do projeto
RUN yarn install

# Exponha a porta que o Vue.js usa (8080 por padrão)
EXPOSE 8080

# Comando padrão para rodar no container
CMD ["yarn", "serve"]
