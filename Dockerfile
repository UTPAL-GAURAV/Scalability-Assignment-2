# Use a base image suitable for your application (e.g., Node.js)
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the microservice code into the container
COPY . .

# Specify the command to run when the container starts
CMD [ "npm", "start" ]
