FROM ubuntu:18.04
LABEL maintainer "Yoshitaka <s1240115@u-aizu.ac.jp>"

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update
RUN apt upgrade -y
RUN apt install -y expect ssh npm
RUN npm install -g n
RUN n stable
RUN apt-get -y purge nodejs npm
RUN apt-get -y autoremove
RUN ln -s /usr/bin/nodejs /usr/bin/node
