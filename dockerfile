# Usa una imagen base de Node.js para construir la aplicación
FROM node:22.4.1 AS build-stage

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine AS production-stage

# Copia los archivos construidos desde el build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copia el archivo de configuración de Nginx si tienes uno
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto en el que corre Nginx
EXPOSE 80

# Arranca Nginx
CMD ["nginx", "-g", "daemon off;"]