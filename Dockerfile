# base image
FROM node:20.5-alpine3.17

# Create & change to app directory
WORKDIR /usr/app

COPY . .

# Install production dependencies
# If you add a package-lock.json, speed you build by switching to 'npm ci'
RUN npm install

ENV NODE_ENV production

ENV PORT 3000

RUN npm run build

CMD ["npm", "start"]