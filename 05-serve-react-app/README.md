# Comandos relevantes

### Run da imagem Docker

`-p 3000:3000` mapeia a porta 3000 do host para a porta 3000 do container.

```bash
docker run -p 3000:3000 --rm -it hello-world
```

### Build e Run

```bash
docker run -p 3000:3000 --rm -it $(docker build -q .)
```
