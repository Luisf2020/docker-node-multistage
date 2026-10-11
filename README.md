# docker-node-multistage

Imagen Docker multi-etapa para Node.js, con usuario no root y healthcheck en Compose.

> Proyecto de portafolio de Luis Felipe Zuniga Leon. Desarrollado con asistencia de IA
> (generacion de codigo, revision y documentacion); el codigo fue revisado y probado manualmente.
> No declara clientes, metricas ni resultados no verificables.

## Stack

- Docker
- Node.js
- docker-compose

## Como ejecutar

```bash
docker compose up --build
curl localhost:3000/health
```

## Estructura

```
Dockerfile           # build multi-etapa
docker-compose.yml   # servicio + healthcheck
src/server.js        # servidor HTTP
```

## Estado

Muestra tecnica de portafolio. Sin datos de produccion.
