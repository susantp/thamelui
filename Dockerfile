FROM node:latest

ENV PORT 3000

# Create app directory
RUN mkdir -p /var/www/thamelui
WORKDIR /var/www/thamelui

# Copying source files
COPY . /var/www/thamelui

# Installing dependencies
# COPY package*.json /var/www/thamelui
RUN npm install

# Building app
# RUN npm run build --production
EXPOSE 3000

# Running the app
# CMD "npm" "run" "start"
