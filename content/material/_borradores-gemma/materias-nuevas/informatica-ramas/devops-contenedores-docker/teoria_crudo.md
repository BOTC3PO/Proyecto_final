# Docker a Nivel Avanzado: Optimización, Seguridad y Orquestación

## Introducción
En el ecosistema DevOps moderno, Docker ha dejado de ser simplemente una herramienta de contenedorización para convertirse en la unidad fundamental de despliegue y escalabilidad. A nivel avanzado, el foco ya no está en "cómo crear un contenedor", sino en cómo diseñar arquitecturas eficientes, seguras y mantenibles. Se trata de entender la interacción entre el motor de contenedores, el sistema operativo anfitrión y los servicios distribuidos, optimizando recursos y minimizando la superficie de ataque.

## Explicación Central: Más allá del `docker run`

A medida que la complejidad del sistema crece, las prácticas básicas se quedan cortas. Aquí exploramos tres pilares del Docker avanzado:

### 1. Multi-stage Builds para Imágenes Ligeras
Una imagen de producción no debe contener herramientas de compilación, dependencias de desarrollo ni historial de git. Utilizando *multi-stage builds*, podemos separar el proceso de construcción del runtime.

```dockerfile
# Etapa 1: Construcción
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: Producción
FROM node:18-alpine
WORKDIR /app
# Copiamos solo lo necesario de la etapa anterior
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
USER node
CMD ["node", "dist/index.js"]
```
Esto reduce el tamaño de la imagen de gigabytes a megabytes, acelerando los despliegues y reduciendo costos de almacenamiento en registros.

### 2. Seguridad y Principio de Mínimo Privilegio
Nunca ejecutes contenedores como `root`. En el ejemplo anterior, `USER node` asegura que el proceso tenga permisos limitados. Además, es crucial usar imágenes base oficiales y actualizadas, y escanear vulnerabilidades con herramientas como `trivy` o `docker scout`.

### 3. Docker Compose para Entornos Locales Complejos
En desarrollo, `docker-compose.yml` permite orquestar múltiples servicios (base de datos, caché, app) con una sola configuración.

```yaml
version: '3.8'
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - backend

  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    env_file:
      - .env
    networks:
      - frontend
      - backend

volumes:
  pgdata:

networks:
  frontend:
  backend:
    internal: true # Red interna, sin acceso desde el host
```
Fíjate en el uso de `env_file` para no exponer credenciales en el código, y en la segmentación de redes (`internal: true`) para aislar la comunicación entre la app y la base de datos.

## Errores Comunes de Principiantes (y Avanzados)

1.  **Persistencia de datos en capas de escritura:** Guardar datos dentro del contenedor en lugar de usar *volumes* o *bind mounts*. Al destruir el contenedor, los datos se pierden.
2.  **Imágenes "monster":** Instalar herramientas innecesarias (como `curl`, `vim`, o paquetes de compilación) en la imagen final. Esto aumenta el riesgo de seguridad y el tiempo de despliegue.
3.  **Ignorar las señales de parada:** No manejar correctamente `SIGTERM` en las aplicaciones. Cuando Docker envía una señal de parada, la aplicación debe cerrarse limpiamente. Si no lo hace, Docker fuerza la terminación tras 10 segundos, lo que puede corromper datos o conexiones activas.
4.  **Hardcoding de credenciales:** Escribir contraseñas directamente en el `Dockerfile` o `docker-compose.yml`. Siempre usar variables de entorno o secretos.

## Cuándo usar Docker / Cuándo NO usarlo

*   **Usar Docker cuando:**
    *   Necesitas consistencia entre entornos (dev, staging, prod).
    *   Quieres escalar servicios stateless horizontalmente.
    *   Estás trabajando con microservicios o arquitecturas de funciones.
    *   Necesitas aislar dependencias de sistemas diferentes en la misma máquina.

*   **No usar Docker (o reconsiderar) cuando:**
    *   La aplicación es extremadamente sensible a la latencia de red o E/S de disco y el overhead del contenedor es crítico (aunque este overhead es mínimo hoy en día, en casos extremos de C++ optimizado al máximo, podría importar).
    *   Se necesita acceso directo al hardware del host (drivers GPU específicos, dispositivos USB, etc.) sin configuraciones complejas de *passthrough*.
    *   El equipo no tiene capacidad para mantener la infraestructura de orquestación (Kubernetes o incluso Docker Swarm) y los beneficios de la escalabilidad no justifican la complejidad operativa.

## Ejemplo Extendido: Despliegue de una API con Redis y PostgreSQL

Imagina una API de Node.js que necesita caché y persistencia.

1.  **Estructura del proyecto:**
    ```
    /my-app
      /src
      Dockerfile
      docker-compose.yml
      .env
    ```

2.  **Configuración de Red y Volúmenes:**
    En `docker-compose.yml`, definimos dos redes: `frontend` (accesible desde el host para desarrollo) y `backend` (interna, solo entre contenedores). Esto mejora la seguridad al impedir que la base de datos sea accesible desde fuera de la red de contenedores.

3.  **Gestión de Estado:**
    La base de datos PostgreSQL usa un volumen nombrado `pgdata` para persistir datos entre reinicios del contenedor. Redis, al ser un caché, puede usar almacenamiento en memoria temporal, pero si necesitamos persistencia, añadiríamos un volumen correspondiente.

4.  **Variables de Entorno:**
    El archivo `.env` contiene las credenciales. Docker lee este archivo automáticamente si se especifica con `env_file`. Nunca committees este archivo al repositorio; añade `.env` a `.gitignore`.

5.  **Iniciación y Salud:**
    Usamos `depends_on` con condiciones de salud (`healthcheck`) para asegurar que la base de datos esté lista antes de que la app intente conectarse, evitando errores de conexión en el arranque.

```yaml
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
```

Este enfoque garantiza una infraestructura reproducible, segura y escalable, alineada con las mejores prácticas DevOps contemporáneas.