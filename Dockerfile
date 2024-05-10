# Usa un'immagine di base con Node.js
FROM node:alpine AS builder

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia il package.json e il package-lock.json nella directory di lavoro
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia i file dell'applicazione nella directory di lavoro
COPY . .

# Costruisci l'applicazione React
RUN npm run build

# Secondo stage per l'immagine finale
FROM nginx:alpine

# Copia i file di build dall'immagine precedente
COPY --from=builder /app/build /usr/share/nginx/html

# Esponi la porta 80 per il server web
EXPOSE 80

# Comando di default per avviare nginx
CMD ["nginx", "-g", "daemon off;"]
