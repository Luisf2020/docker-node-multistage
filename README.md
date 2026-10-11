# docker-node-multistage

![stack: Docker](https://img.shields.io/badge/stack--Docker-0d9488?style=flat-square) ![stack: Node.js](https://img.shields.io/badge/stack--Node.js-0d9488?style=flat-square) ![stack: docker-compose](https://img.shields.io/badge/stack--docker--compose-0d9488?style=flat-square)
![IA: asistido](https://img.shields.io/badge/IA--asistido-6366f1?style=flat-square)

Imagen Docker multi-etapa para Node.js, con usuario no root y healthcheck en Compose.

> **Transparencia sobre IA:** este proyecto se desarrollo con asistencia de inteligencia artificial (generacion de codigo, revision y documentacion). El codigo fue leido, ejecutado y probado manualmente antes de publicarse. No declara clientes, metricas ni resultados que no puedan verificarse.

## Problema que resuelve

Evitar imagenes de produccion grandes y ejecutar el proceso como root.

## Solucion implementada

Dockerfile multi-etapa: las dependencias se instalan en una etapa y en la final solo se copia lo necesario, con usuario no root y healthcheck en Compose.

### Funcionalidades principales

- Build multi-etapa
- Dependencias de produccion (npm ci --omit=dev)
- Usuario node (no root)
- healthcheck en docker-compose

## Stack

- Docker
- Node.js
- docker-compose

## Estructura

```
Dockerfile           # build multi-etapa
docker-compose.yml   # servicio + healthcheck
src/server.js        # servidor HTTP
```

## Puesta en marcha

```bash
docker compose up --build
curl localhost:3000/health
```

## Complejidad del proyecto

**Nivel: Intermedio** — Empaquetado y operacion: imagenes, usuario, puertos y comprobacion de salud.

El nivel describe la complejidad tecnica del proyecto, no el grado de dominio de quien lo escribio.

## Despliegue

Contenedor de servidor, no un sitio estatico.  
El codigo fuente si esta disponible en este repositorio.

## Autor

**Luis Felipe Zuniga Leon** — Desarrollador de software asistido por IA

- GitHub: <https://github.com/Luisf2020>

---

_Proyecto de portafolio. El desarrollo se apoyo en herramientas de IA bajo revision tecnica humana._
