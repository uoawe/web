FROM ubuntu:16.04
LABEL maintainer "Yoshitaka <s1240115@u-aizu.ac.jp>"

RUN apt update
RUN apt upgrade -y
RUN apt install -y expect ssh npm
RUN ln -s /usr/bin/nodejs /usr/bin/node
