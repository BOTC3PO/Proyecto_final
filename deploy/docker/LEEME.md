# Virtual Book en Docker

Objetivo: aislar Virtual Book de los otros proyectos de la máquina (red propia, límites de memoria y CPU, Postgres y
Redis sin puertos expuestos) y desplegar con imágenes que se pueden probar antes y volver atrás.

**Estado:** propuesta. Los archivos de esta carpeta todavía no se construyeron ni se probaron: Docker no está instalado
en el servidor.

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
