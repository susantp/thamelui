FROM node:latest

ENV PORT 3000

# Create app directory
RUN mkdir -p /var/www/thamelui
WORKDIR /var/www/thamelui

# Installing dependencies
COPY package*.json /var/www/thamelui
RUN npm install

# Copying source files
COPY . /var/www/thamelui

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"
