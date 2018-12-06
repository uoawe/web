# Web

## CI/CD
[![wercker status](https://app.wercker.com/status/a386b6de7bd42d67565fc6a8c3bd284c/m/master "wercker status")](https://app.wercker.com/project/byKey/a386b6de7bd42d67565fc6a8c3bd284c)

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
