# DevOps — Contenedores con Docker (cuestionario, 25 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Problema

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Que la aplicación funcione igual en cualquier equipo, con todas sus dependencias", "La velocidad de internet", "El diseño visual", "El almacenamiento en disco"]
respuesta: "Que la aplicación funcione igual en cualquier equipo, con todas sus dependencias"

enunciado: "¿Qué problema resuelve un contenedor?"

explicacion: |
  Evita el "en mi computadora funciona".
```

### 2 — VM

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["vm"]

tipo: mc
opciones_explicitas: ["El contenedor comparte el núcleo del sistema y es más liviano", "Son idénticos", "El contenedor trae un sistema operativo completo", "La VM es más liviana"]
respuesta: "El contenedor comparte el núcleo del sistema y es más liviano"

enunciado: "¿Qué diferencia hay entre un contenedor y una máquina virtual?"

explicacion: |
  La VM incluye su propio sistema operativo.
```

### 3 — Aislamiento

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "intermedio"
  tags: ["aislamiento"]

tipo: mc
opciones_explicitas: ["La máquina virtual", "El contenedor", "Ninguno", "Los dos igual"]
respuesta: "La máquina virtual"

enunciado: "¿Cuál ofrece un aislamiento más fuerte?"

explicacion: |
  El contenedor comparte núcleo.
```

### 4 — Proceso

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "avanzado"
  tags: ["proceso"]

tipo: mc
opciones_explicitas: ["Un proceso aislado", "Una computadora", "Un archivo", "Un disco"]
respuesta: "Un proceso aislado"

enunciado: "¿Qué es en esencia un contenedor?"

explicacion: |
  Usa namespaces y cgroups.
```

### 5 — Imagen

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["imagen"]

tipo: mc
opciones_explicitas: ["Una plantilla de solo lectura con la aplicación y sus dependencias", "Una foto", "Un contenedor en ejecución", "Un volumen"]
respuesta: "Una plantilla de solo lectura con la aplicación y sus dependencias"

enunciado: "¿Qué es una imagen?"

explicacion: |
  Se compone de capas.
```

### 6 — Contenedor

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["contenedor"]

tipo: mc
opciones_explicitas: ["Una instancia en ejecución de la imagen", "La plantilla", "Un archivo de texto", "Una red"]
respuesta: "Una instancia en ejecución de la imagen"

enunciado: "¿Qué es un contenedor respecto de una imagen?"

explicacion: |
  De una imagen se pueden crear varios.
```

### 7 — Dockerfile

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["dockerfile"]

tipo: mc
opciones_explicitas: ["Un archivo de texto con las instrucciones para construir una imagen", "Un contenedor", "Una red", "Un servidor"]
respuesta: "Un archivo de texto con las instrucciones para construir una imagen"

enunciado: "¿Qué es un Dockerfile?"

explicacion: |
  Se usa con `docker build`.
```

### 8 — Registro

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["registro"]

tipo: mc
opciones_explicitas: ["Un lugar para publicar y descargar imágenes", "Un log", "Una base de datos", "Un volumen"]
respuesta: "Un lugar para publicar y descargar imágenes"

enunciado: "¿Qué es un registro (registry)?"

explicacion: |
  Por ejemplo, Docker Hub.
```

### 9 — Run

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["run"]

tipo: mc
opciones_explicitas: ["Crea y ejecuta un contenedor a partir de una imagen", "Descarga un volumen", "Borra una imagen", "Crea un Dockerfile"]
respuesta: "Crea y ejecuta un contenedor a partir de una imagen"

enunciado: "¿Qué hace `docker run`?"

explicacion: |
  Con `-d` corre en segundo plano.
```

### 10 — Puertos

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "intermedio"
  tags: ["puertos"]

tipo: mc
opciones_explicitas: ["Publica el puerto 80 del contenedor en el 8080 del equipo", "Publica el 8080 en el 80", "Abre ambos puertos", "Cierra el puerto 80"]
respuesta: "Publica el puerto 80 del contenedor en el 8080 del equipo"

enunciado: "¿Qué indica `-p 8080:80`?"

explicacion: |
  Formato: puerto del equipo : puerto del contenedor.
```

### 11 — PS

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["ps"]

tipo: mc
opciones_explicitas: ["Los contenedores en ejecución", "Las imágenes", "Los volúmenes", "Los logs"]
respuesta: "Los contenedores en ejecución"

enunciado: "¿Qué muestra `docker ps`?"

explicacion: |
  Con `-a` incluye los detenidos.
```

### 12 — Logs

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["logs"]

tipo: mc
opciones_explicitas: ["Muestra la salida del contenedor `web`", "Borra los logs", "Detiene el contenedor", "Lo reinicia"]
respuesta: "Muestra la salida del contenedor `web`"

enunciado: "¿Qué hace `docker logs web`?"

explicacion: |
  Es la primera herramienta de diagnóstico.
```

### 13 — Exec

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "intermedio"
  tags: ["exec"]

tipo: mc
opciones_explicitas: ["Abre una terminal dentro del contenedor", "Lo borra", "Lo crea", "Lo exporta"]
respuesta: "Abre una terminal dentro del contenedor"

enunciado: "¿Qué hace `docker exec -it web sh`?"

explicacion: |
  Útil para inspeccionar.
```

### 14 — From

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["from"]

tipo: mc
opciones_explicitas: ["Indica la imagen base", "Copia archivos", "Define el puerto", "Ejecuta el programa"]
respuesta: "Indica la imagen base"

enunciado: "¿Qué hace `FROM` en un Dockerfile?"

explicacion: |
  Por ejemplo, `FROM node:22-alpine`.
```

### 15 — Copy

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["copy"]

tipo: mc
opciones_explicitas: ["Copia archivos del equipo a la imagen", "Descarga una imagen", "Ejecuta un comando", "Define un volumen"]
respuesta: "Copia archivos del equipo a la imagen"

enunciado: "¿Qué hace `COPY` en un Dockerfile?"

explicacion: |
  Se copian dependencias y código.
```

### 16 — Run en Dockerfile

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "intermedio"
  tags: ["run"]

tipo: mc
opciones_explicitas: ["Al construir la imagen", "Al iniciar el contenedor", "Al borrarlo", "Al descargar"]
respuesta: "Al construir la imagen"

enunciado: "¿Cuándo se ejecuta una instrucción `RUN`?"

explicacion: |
  `CMD` se ejecuta al iniciar.
```

### 17 — Cache

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "avanzado"
  tags: ["cache"]

tipo: mc
opciones_explicitas: ["Para aprovechar la caché de capas", "Por orden alfabético", "Por seguridad", "Por costumbre"]
respuesta: "Para aprovechar la caché de capas"

enunciado: "¿Por qué se copian primero los archivos de dependencias y luego el código?"

explicacion: |
  Si las dependencias no cambian, no se reinstalan.
```

### 18 — Versión

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "intermedio"
  tags: ["versiones"]

tipo: mc
opciones_explicitas: ["Para obtener resultados repetibles", "Porque pesa menos", "Porque es más lenta", "Por estética"]
respuesta: "Para obtener resultados repetibles"

enunciado: "¿Por qué conviene fijar la versión de la imagen en lugar de usar `latest`?"

explicacion: |
  `latest` cambia con el tiempo.
```

### 19 — Root

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "intermedio"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Para reducir el daño si lo comprometen", "Para ir más rápido", "Para usar menos memoria", "Por estética"]
respuesta: "Para reducir el daño si lo comprometen"

enunciado: "¿Por qué conviene no ejecutar como root dentro del contenedor?"

explicacion: |
  Se usa `USER` con un usuario común.
```

### 20 — Efímero

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["persistencia"]

tipo: mc
opciones_explicitas: ["Se pierden", "Se guardan siempre", "Se envían al registro", "Se cifran"]
respuesta: "Se pierden"

enunciado: "¿Qué pasa con los datos guardados dentro de un contenedor al borrarlo?"

explicacion: |
  Lo que debe durar va en volúmenes.
```

### 21 — Volumen

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["volumen"]

tipo: mc
opciones_explicitas: ["Para mantener datos fuera del contenedor", "Para subir el volumen del audio", "Para compilar", "Para limitar CPU"]
respuesta: "Para mantener datos fuera del contenedor"

enunciado: "¿Para qué sirve un volumen?"

explicacion: |
  Sobrevive al contenedor.
```

### 22 — Secretos

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["secretos"]

tipo: mc
opciones_explicitas: ["Dentro de la imagen ni en el repositorio", "En variables de entorno", "En un gestor de secretos", "En un archivo externo seguro"]
respuesta: "Dentro de la imagen ni en el repositorio"

enunciado: "¿Dónde no deben guardarse las contraseñas?"

explicacion: |
  Las imágenes se comparten y se inspeccionan.
```

### 23 — Compose

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["compose"]

tipo: mc
opciones_explicitas: ["Para definir y levantar varios contenedores con un archivo", "Para construir una imagen", "Para borrar imágenes", "Para escanear virus"]
respuesta: "Para definir y levantar varios contenedores con un archivo"

enunciado: "¿Para qué sirve Docker Compose?"

explicacion: |
  `docker compose up -d`.
```

### 24 — Nombre

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "intermedio"
  tags: ["compose"]

tipo: mc
opciones_explicitas: ["Por su nombre de servicio, `db`", "Por una IP fija obligatoria", "No se ve", "Por `localhost`"]
respuesta: "Por su nombre de servicio, `db`"

enunciado: "En Compose, ¿cómo se ve el servicio `db` desde `web`?"

explicacion: |
  Compose crea una red con resolución de nombres.
```

### 25 — Imágenes

```
metadata:
  materia: "devops"
  tema: "contenedores_docker"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Usar fuentes confiables y mantenerlas actualizadas", "Descargar cualquiera", "No actualizarlas", "Ignorar su origen"]
respuesta: "Usar fuentes confiables y mantenerlas actualizadas"

enunciado: "¿Qué conviene con las imágenes que se descargan?"

explicacion: |
  Se escanean en busca de vulnerabilidades.
```

