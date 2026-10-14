# DevOps — Contenedores con Docker (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../control-de-versiones-git/`, `../../informatica/virtualizacion-maquina-virtual-contenedor/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/devops/contenedores-docker/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El problema

"En mi computadora funciona." Un programa depende de **versiones de lenguajes, bibliotecas, configuraciones y del sistema**. Cambia algo y deja de funcionar. Un **contenedor** **empaqueta** la aplicación **con todo lo que necesita** y se ejecuta **igual** en cualquier equipo con un motor de contenedores.

---

## 2. Contenedor y máquina virtual

| | Máquina virtual | Contenedor |
|:--|:--|:--|
| Incluye | un **sistema operativo completo** | solo la **aplicación y sus dependencias** |
| Núcleo | **propio** (hipervisor) | **comparte** el del sistema anfitrión |
| Tamaño y arranque | **grandes** y **lentos** | **livianos** y **rápidos** (segundos) |
| Aislamiento | **fuerte** | **menor** (comparte núcleo) |

Un contenedor **no es una máquina virtual**: es un **proceso aislado** (con **namespaces** y **cgroups** del núcleo de Linux).

---

## 3. Conceptos

- **Imagen:** una **plantilla de solo lectura** con la aplicación y sus dependencias, formada por **capas**.
- **Contenedor:** una **instancia en ejecución** de una imagen. De una imagen se pueden crear **muchos** contenedores.
- **Dockerfile:** un **archivo de texto** con las instrucciones para **construir** una imagen.
- **Registro** (*registry*): lugar donde se **publican y descargan** imágenes (**Docker Hub**, o uno propio).
- **Volumen:** almacenamiento **persistente** fuera del contenedor.
- **Red:** cómo se comunican los contenedores.

---

## 4. Comandos básicos

```bash
docker pull nginx                       # descargar una imagen
docker run -d -p 8080:80 --name web nginx
docker ps                               # contenedores en ejecución
docker ps -a                            # todos, también los detenidos
docker logs web                         # ver la salida
docker exec -it web sh                  # entrar al contenedor
docker stop web
docker rm web                           # borrar el contenedor
docker images                           # imágenes locales
docker rmi nginx                        # borrar una imagen
```

- **`-d`** ejecuta en **segundo plano**.
- **`-p 8080:80`** publica el **puerto** 80 del contenedor en el 8080 del equipo (**puerto del equipo : puerto del contenedor**).
- **`--name`** da un nombre.
- **`-v datos:/var/lib/datos`** monta un **volumen**.
- **`-e VARIABLE=valor`** pasa **variables de entorno**.
- **`--rm`** borra el contenedor al terminar.

---

## 5. Dockerfile

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
USER node
CMD ["node", "servidor.js"]
```

| Instrucción | Qué hace |
|:--|:--|
| `FROM` | imagen **base** |
| `WORKDIR` | carpeta de trabajo |
| `COPY` | copia archivos al contenedor |
| `RUN` | ejecuta un comando **al construir** |
| `EXPOSE` | documenta el puerto |
| `USER` | usuario que ejecuta (**no root**) |
| `CMD` / `ENTRYPOINT` | comando que se ejecuta **al iniciar** el contenedor |

Construir y ejecutar:

```bash
docker build -t mi-app:1.0 .
docker run -d -p 3000:3000 mi-app:1.0
```

**Buenas prácticas del Dockerfile:**

- **Imágenes base pequeñas** (por ejemplo, **alpine** o *slim*) y **versiones fijas** (no `latest`).
- **Copiar primero** los archivos de dependencias y **después** el código, para **aprovechar la caché de capas**.
- **`.dockerignore`**: no copiar `node_modules`, `.git` ni archivos con claves.
- **No ejecutar como root.**
- **Un proceso por contenedor.**
- **Sin secretos dentro de la imagen.**

---

## 6. Datos y persistencia

Un contenedor es **efímero**: al borrarse, **desaparecen** los datos que guardó **dentro**. Lo que debe **durar** (bases de datos, archivos subidos) va en **volúmenes** o en servicios externos. Los **registros** (logs) se envían a la **salida estándar** para que los recoja la plataforma.

---

## 7. Docker Compose

Para **varios contenedores** juntos (aplicación, base de datos, caché) se describen en **un archivo** (`compose.yaml`) y se levantan con **un comando**:

```yaml
services:
  web:
    build: .
    ports: ["3000:3000"]
    environment:
      DATABASE_URL: postgres://usuario:clave@db:5432/app
    depends_on: [db]
  db:
    image: postgres:16
    volumes: ["datos:/var/lib/postgresql/data"]
volumes:
  datos:
```

```bash
docker compose up -d
docker compose down
```

Los contenedores se ven por **nombre de servicio** (`db`).

---

## 8. Seguridad

- **Imágenes de fuentes confiables** y **actualizadas**.
- **Escanear** las imágenes en busca de vulnerabilidades.
- **No ejecutar como root** y **limitar** recursos y permisos.
- **No guardar secretos** en la imagen ni en el repositorio; usar **variables de entorno** o un **gestor de secretos**.
- **No exponer puertos** de más.
- El acceso al **socket de Docker** equivale a **ser administrador** del equipo.
