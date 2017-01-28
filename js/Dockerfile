FROM ubuntu:alpine

MAINTAINER Jean Matheus Souto <jeanmatheussouto@gmail.com>

RUN apt-get update && apt-get -y install nodejs npm
RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN npm install -g jasmine-node
