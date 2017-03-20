FROM node:6.10.0
MAINTAINER Georgi Kiryakov <george.kiryakov@gmail.com>

RUN apt-get update && apt-get install -qq -y build-essential --fix-missing --no-install-recommends

# Create app directory
ENV INSTALL_PATH /nightlux
RUN mkdir -p ${INSTALL_PATH}

WORKDIR ${INSTALL_PATH}

# Install app dependencies
COPY package.json package.json
npm install

# Bundle app source
COPY . .

CMD ["npm", "start"]
