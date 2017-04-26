FROM node:6.10
MAINTAINER Georgi Kiryakov <george.kiryakov@gmail.com>

# Create app directory
ENV INSTALL_PATH /nightlux/api
RUN mkdir -p ${INSTALL_PATH}

WORKDIR ${INSTALL_PATH}
RUN npm install -g loopback

# Install app dependencies
# COPY package.json package.json
# RUN npm install

# Bundle app source
COPY . .

CMD ["npm", "start"]
