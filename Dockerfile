# Utiliser l'image Node.js 18 comme étape de build
FROM node:18 AS build

# Créer un répertoire de travail
WORKDIR /app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

RUN npm ci

RUN npm install -g @angular/cli
COPY . .

# Construire l'application Angular
RUN npm run build --configuration=production

# Utiliser l'image Nginx pour servir l'application
FROM nginx:lastest

# Copier le fichier de configuration Nginx personnalisé
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#COPY nginx.conf /etc/nginx/nginx.conf
# Copier les fichiers construits de l'étape précédente
COPY --from=build /app/dist/porte-follio/browser /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80
