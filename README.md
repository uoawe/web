# Web

## CI/CD
[![wercker status](https://app.wercker.com/status/47819f8d38cb1a2ab28b6636196845a7/m/ "wercker status")](https://app.wercker.com/project/byKey/47819f8d38cb1a2ab28b6636196845a7)

[Wercker](https://app.wercker.com/uoawe/web) and [Docker Hub](https://hub.docker.com/r/uoawe/web)

### How to Deploy
Push to master branch

## About docker

### Build docker
```sh
$ docker build -t image-name .
```

### Deploy docker
```sh
$ docker login
$ docker push image-name
```

## Development
In u-aizu server,
`/home/web-ext/circle/suisougaku/public_html` is directory
