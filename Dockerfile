#Define node version
FROM node:10

# Create app directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json /app/package.json
RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "dev" ]
