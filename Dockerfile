#Selected Node version 16
FROM node:16
#Selected /app as the work directory in Docker VM.
WORKDIR /app
#Copying the dependencies
COPY package*.json ./
#Installing the dependencies
RUN npm install
#Copying the rest of the files
COPY ./src ./src
COPY ./resources ./resources
#Exposing port 8000
EXPOSE 8000
#Running the application
CMD ["node","./src/main.js"]

