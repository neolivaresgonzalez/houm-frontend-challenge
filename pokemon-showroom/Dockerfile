#Etapa de instalación de dependencias
FROM node:lts as dependencies
WORKDIR  /pokemon-showroom-app
COPY package.json package-lock.json ./
RUN npm install

#Etapa de compilación de aplicación
FROM node:lts as builder
WORKDIR /pokemon-showroom-app
COPY . .
COPY --from=dependencies /pokemon-showroom-app/node_modules ./node_modules
RUN npm run build

#Etapa de ejecución de aplicación
FROM node:lts as runner
WORKDIR /pokemon-showroom-app
ENV NODE_ENV production
COPY --from=builder /pokemon-showroom-app/next.config.js ./
COPY --from=builder /pokemon-showroom-app/public ./public
COPY --from=builder /pokemon-showroom-app/.next ./.next
COPY --from=builder /pokemon-showroom-app/node_modules ./node_modules
COPY --from=builder /pokemon-showroom-app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start", "-p", "3000"]