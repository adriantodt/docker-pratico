# Comandos relevantes

### Build da imagem Docker

`.` especifica o repositório em que o Dockerfile se encontra.

```bash
docker build .
```

### Build com tagging

`-t hello-world` especifica o nome da imagem que será criada.

```bash
docker build -t hello-world .
```

### Run da imagem Docker

`hello-world` é o nome da imagem que será executada.

`--rm` remove a imagem após o seu uso.

```bash
docker run --rm -it hello-world
```

### Build e Run

```bash
docker run --rm -it $(docker build -q .)
```
