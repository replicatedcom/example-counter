FROM gliderlabs/alpine:latest

RUN \
  apk update && \
  apk add nodejs

ADD . /opt/srv

WORKDIR /opt/srv
RUN npm install

EXPOSE 3000

CMD ["node", "app"]