FROM node:14.15.4-slim
RUN apt-get update && apt-get install -y bash \
    vim \
    wget \
    && apt-get -y clean \
    && rm -rf /var/lib/apt/lists/*
COPY ./app /home/app
WORKDIR /home/app
RUN npm install
ENV CI true

CMD ["npm", "start"]


# CMD ["node"]