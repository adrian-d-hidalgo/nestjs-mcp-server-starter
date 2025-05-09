# Etapa 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Instala dependencias solo de producción y desarrollo
COPY package*.json ./
RUN npm ci --omit=optional

# Copia el resto del código fuente
COPY . .

# Compila la app (asume TypeScript)
RUN npm run build

# Etapa 2: Imagen final de producción
FROM node:22-alpine AS production

WORKDIR /app

# Copia solo los archivos necesarios desde la etapa de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Opcional: Copia archivos de configuración si los necesitas
# COPY --from=builder /app/.env .

# Establece variables de entorno seguras
ENV NODE_ENV=production

# Expone el puerto (ajusta si tu app usa otro)
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "dist/main.js"] 
