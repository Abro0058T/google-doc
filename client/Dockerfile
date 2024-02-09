FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get update -y
RUN apt-get install -y nodejs 


COPY public public
COPY src src
COPY  package-lock.json package-lock.json

COPY package.json package.json

RUN npm install

CMD ["npm","start"]