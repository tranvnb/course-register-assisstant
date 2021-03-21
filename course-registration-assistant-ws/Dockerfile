# Node and Operating System Docker Image
FROM node:lts-alpine3.13

# Set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy the app to the container working directory
COPY . ./

# Running npm install to set environment variables
RUN npm install -g nodemon && npm install

CMD [ "npm", "run", "dev"]
