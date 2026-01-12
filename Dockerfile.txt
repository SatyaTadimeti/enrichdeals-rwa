FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build your Vite/React app
RUN npm run build

# Use a lightweight web server to serve the built files
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "80"]

EXPOSE 80
