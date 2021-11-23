# I KNOW THIS WORKS FOR FRONTEND
FROM node:lts

# RUN mkdir -p /usr/src/app
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

CMD ["npm", "start"]

## The following doesn't work yet, but keeping it as a reference
# FROM node:lts AS ui-build
# WORKDIR /src/app
# COPY car-search-app/ ./car-search-app/
# RUN cd car-search-app && npm install && npm run build

# FROM node:lts AS server-build
# WORKDIR /root/
# COPY --from=ui-build /src/app/car-search-app/build ./car-search-app/build
# COPY car-search-app-backend/ ./car-search-app-backend/
# RUN cd car-search-app-backend && npm install

# EXPOSE 4000

# CMD ["npm", "./car-search-app-backend/server.js"]

# FROM node:lts AS ui-build
# WORKDIR /app
# COPY /car-search-app/package.json ./
# COPY /car-search-app/package-lock.json ./
# COPY car-search-app/ ./
# RUN npm install 


# FROM node:lts AS server-build
# WORKDIR /app
# COPY /car-search-app-backend/package.json ./
# COPY /car-search-app-backend/package-lock.json ./
# COPY car-search-app-backend/ ./
# RUN npm install
# EXPOSE 4000

# CMD ["npm", "run", "start"]

# , "./car-search-app-backend/server.js"