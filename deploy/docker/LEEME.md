# Virtual Book en Docker

Objetivo: aislar Virtual Book de los otros proyectos de la máquina (red propia, límites de memoria y CPU, Postgres y
Redis sin puertos expuestos) y desplegar con imágenes que se pueden probar antes y volver atrás.

**Estado (2026-11-24):** Docker 29.1.3 sin root instalado en el servidor. Imagen construida (55 s, 1,06 GB) y copia de
prueba levantada en paralelo (`VB_PROYECTO=virtualbook-prueba`, puertos 5150–5151, base restaurada del respaldo del día),
sin tocar producción. Comprobado:

- 2 réplicas sanas; la base restaurada en 1 s (117 tablas, 58 migraciones, 2382 módulos).
- Alta, ingreso en una réplica y sesión usada en la otra; módulos, tabla periódica y diccionario (montado de solo
  lectura) responden.
- Límites de ingreso compartidos por Redis entre réplicas: 5 fallos sobre una cuenta → 429 en las dos; 10 fallos desde
  una IP → 429 para esa IP y otras IPs siguen entrando (la IP sale de `X-Forwarded-For`, como la manda nginx).
- Aislamiento: Postgres sin puertos publicados y sin salida a internet («Network is unreachable»); la API sí sale
  (Mercado Pago responde) pero no llega al Postgres del sistema.
- Memoria: API ~220–240 MB por réplica (tope 1 GB), Postgres ~110 MB, Redis ~5 MB.
- Una réplica que termina con error se reinicia sola; la otra sigue atendiendo. Apagado ordenado en 3 s.

**Carga comparada (2026-11-24)**, una réplica contra una instancia en el sistema como la de hoy (`tsx`), misma copia de
`virtualbook_test`, 300 usuarios, 6 s por paso, generador en otros núcleos:

| Escenario | Concurrencia | Sistema | Docker | Diferencia |
|---|---|---|---|---|
| `/api/me` | 16 | 6680/s (p99 8 ms) | 6545/s (p99 7 ms) | −2 % |
| `/api/me` | 64 | 7778/s (p99 14 ms) | 7577/s (p99 15 ms) | −3 % |
| `/api/modulos?limit=20` | 16 | 1356/s (p99 28 ms) | 1272/s (p99 38 ms) | −6 % |
| `/api/modulos?limit=20` | 64 | 1387/s (p99 69 ms) | 1073/s (p99 94 ms) | −23 % |

Sin errores en ninguno. Memoria medida por el generador: 590 MB en el sistema contra 275 MB en el contenedor (no se investigó la diferencia). El costo aparece con respuestas grandes y mucha concurrencia: el
reenvío de puertos de Docker sin root (`rootlesskit`, en espacio de usuario) copia cada byte. Con la demanda esperada
(muy por debajo de 1000 pedidos/s) no se nota. Para recuperarlo, si hiciera falta: red `pasta` de rootlesskit
(paquete `passt`, sudo) o que nginx hable con la API por un socket Unix (cambio chico en `src/index.ts`).

Falta: que el servicio de Docker arranque con la máquina (`systemctl --user enable docker`), adaptar respaldo,
restauración, vigilancia, escalador y despliegue, y una prueba de carga comparada con la instalación actual.

## Qué queda dentro y qué fuera

| Componente | Dónde | Por qué |
|---|---|---|
| API (1 a 4 réplicas) | contenedor `api` | puertos 5050–5053 solo en 127.0.0.1 |
| Postgres 16.15 | contenedor `postgres`, volumen `pgdatos` | red interna sin salida a internet, sin puerto publicado |
| Redis 7.4.9 | contenedor `redis` | ídem; sin persistencia, 256 MB como máximo |
| nginx | **en el sistema** | recibe los parches de Ubuntu el mismo día (NGINX2Root se corrigió en 24 h; las imágenes oficiales tardaron más) y maneja el certificado de Let's Encrypt |
| Web compilada | en el sistema (`app/apps/web/dist`) | la sirve nginx directo |
| Diccionario (1,4 GB), archivos subidos, respaldos | carpetas de `datos/` montadas | quedan fuera de los contenedores y de las imágenes |

## Requisitos (sudo)

Docker **sin root** (rootless): los contenedores corren con el usuario `javier`, sin un servicio de root. Estar en el
grupo `docker` del modo clásico equivale a tener root, por eso no se usa.

```bash
sudo apt update
sudo apt install -y docker.io docker-compose-v2 docker-buildx rootlesskit uidmap dbus-user-session slirp4netns
# Docker clásico (de root) no se usa: apagarlo.
sudo systemctl disable --now docker.service docker.socket
# Límites de disco (E/S) para los servicios de usuario: hoy systemd solo delega cpu, memory y pids.
sudo mkdir -p /etc/systemd/system/user@.service.d
printf '[Service]\nDelegate=cpu cpuset io memory pids\n' | sudo tee /etc/systemd/system/user@.service.d/delegate.conf
sudo systemctl daemon-reload
```

Después, sin sudo:

```bash
# El script viene con docker.io; según el paquete está en el PATH o entre los ejemplos:
S=$(command -v dockerd-rootless-setuptool.sh || find /usr/share/docker.io /usr/share/doc/docker.io -name 'dockerd-rootless-setuptool.sh*' 2>/dev/null | head -n 1)
"$S" install                               # crea el servicio de usuario docker.service
systemctl --user enable --now docker
echo 'export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock' >> ~/.profile
docker info | grep -iE 'rootless|cgroup'
```

(`loginctl enable-linger javier` ya está activo: los servicios de usuario arrancan sin iniciar sesión.)

## Pasos

1. **Construir y probar en paralelo**, sin tocar producción: copia de la base restaurada del último respaldo en un
   proyecto de prueba (`VB_PROYECTO=virtualbook-prueba`, `VB_PUERTOS=5150-5153`), pruebas de punta a punta y de carga
   contra esos puertos.
2. **Cambio** (ventana corta, con respaldo justo antes):
   1. detener `monolitico-api` (y el escalador);
   2. `pg_dump` de la base del sistema → restaurar en el contenedor (`docker compose exec -T postgres pg_restore ...`);
   3. `docker compose up -d` con `VB_PUERTOS=5050-5053`; nginx no cambia;
   4. comprobar `/health`, un ingreso y un cuestionario.
3. **Volver atrás:** `docker compose down` y arrancar `monolitico-api` (la base del sistema queda intacta hasta borrarla
   a mano, días después).

## Lo que hay que adaptar en `monolitico/config/` antes del cambio

- `respaldo-db.sh`: `docker compose exec -T postgres pg_dump -Fc` en vez de `pg_dump` del sistema.
- `probar-restauracion.sh` y `vigilancia/vigilar.sh`: comparar y vigilar la base del contenedor (`pg_isready` dentro).
- Escalador (`config/escalado`): `docker compose up -d --scale api=N` en vez de instancias de systemd.
- `desplegar.sh.propuesta-v2`: construir la imagen con el commit como etiqueta, migrar con un contenedor de un solo
  uso y reemplazar las réplicas de a una.
