FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get update -y
RUN apt-get install -y nodejs 

COPY controller controller
COPY database database
COPY schema schema 
COPY index.js index.js 

COPY package-lock.json package-lock.json
COPY package.json package.json


RUN npm install --force

EXPOSE 9000
CMD ["npm","start"]