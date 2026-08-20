### 1 — Diagnóstico de estado de contenedor
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["docker", "estado", "ps"]
enunciado: "Al ejecutar `docker ps -a`, un contenedor muestra el estado `Exited (1)`. ¿Qué indica este código de salida en el contexto de procesos Unix?"
respuesta: falso
tipo: vf
pasos:
  - "Identificar que el contenedor ha finalizado su ejecución."
  - "Reconocer que el código de salida 1 indica un error generalizado en la aplicación dentro del contenedor, no un error de Docker per se."
  - "Concluir que la afirmación de que 'Exited (1)' significa 'Error de red' es incorrecta, ya que el código de salida es provisto por el proceso principal (PID 1) del contenedor."
explicacion: "En Unix/Linux, un código de salida de 1 indica un error genérico del programa ejecutado. No implica necesariamente un error de red o de configuración de Docker, sino que el proceso interno falló."
```

### 2 — Propósito de Dockerfile
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "instrucciones", "copy"]
enunciado: "Completa la instrucción: `____ src/app.js /app/`"
respuesta: "COPY"
respuestas_validas:
  - "COPY"
  - "copy"
  - "COPY --chown=user:group"
  - "cp"
tipo: completar
pasos:
  - "Analizar la estructura de la instrucción en un Dockerfile."
  - "Identificar que se necesita copiar archivos del contexto de build al sistema de archivos de la imagen."
  - "Determinar que `COPY` es la instrucción estándar para este propósito (aunque `ADD` existe, `COPY` es la recomendada para copias locales simples)."
explicacion: "La instrucción `COPY` copia nuevos archivos, directorios o archivos remotos de URL desde el `src` al `dest` del sistema de archivos del contenedor. Es preferible a `ADD` para orígenes locales."
```

### 3 — Persistencia de datos
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["volumes", "bind-mounts", "persistencia"]
enunciado: "¿Cuál es la diferencia técnica principal entre un `volume` gestionado por Docker y un `bind mount`?"
respuesta: "Los volumes son gestionados por Docker en el host, mientras que los bind mounts montan un directorio específico del sistema de archivos del host."
tipo: mc
opciones_explicitas:
  - "Los volumes almacenan datos en memoria RAM, los bind mounts en disco."
  - "Los volumes son gestionados por Docker en el host, mientras que los bind mounts montan un directorio específico del sistema de archivos del host."
  - "Los bind mounts requieren permisos de root, los volumes no."
  - "Los volumes solo funcionan en Linux, los bind mounts en Windows."
pasos:
  - "Evaluar la gestión del ciclo de vida de los datos."
  - "Diferenciar entre la abstracción de almacenamiento de Docker (volumes) y el mapeo directo del sistema de archivos (bind mounts)."
  - "Seleccionar la opción que describe correctamente la gestión técnica subyacente."
explicacion: "Los volumes son gestionados por Docker en un parte del sistema de archivos del host (usualmente `/var/lib/docker/volumes/`), proporcionando mayor portabilidad y facilidad de gestión. Los bind mounts vinculan una ruta exacta del host al contenedor."
```

### 4 — Red de contenedores
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["docker-network", "dns", "resolucion"]
enunciado: "En una red `bridge` personalizada de Docker, ¿cómo se resuelve la dirección IP de otro contenedor conectado a esa misma red?"
respuesta: "mediante DNS integrado"
respuestas_validas:
  - "mediante DNS integrado"
  - "mediante dns integrado"
  - "mediante resolución DNS"
  - "mediante resolución dns"
tipo: completar
pasos:
  - "Recordar la funcionalidad de las redes personalizadas en Docker."
  - "Identificar que Docker incluye un servidor DNS interno en las redes bridge creadas con `docker network create`."
  - "Completar el método de resolución de nombres."
explicacion: "En redes bridge personalizadas, Docker proporciona resolución de nombres DNS automática. Los contenedores pueden comunicarse usando el nombre del contenedor como hostname."
```

### 5 — Optimización de capas
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "optimizacion", "cache"]
enunciado: "Para maximizar el uso de la caché de Docker durante el build, ¿dónde se deben colocar las instrucciones `COPY package.json package-lock.json` y `RUN npm install` en relación con `COPY . .`?"
respuesta: "Antes"
respuestas_validas:
  - "Antes"
  - "antes"
  - "previo a"
  - "previo a COPY ."
tipo: completar
pasos:
  - "Analizar cómo Docker procesa las instrucciones secuencialmente."
  - "Entender que si el `package.json` cambia, la caché de `RUN npm install` se invalida."
  - "Determinar que colocar la copia de dependencias antes de copiar el código fuente permite reutilizar la capa de instalación si solo el código cambia."
explicacion: "Colocar la copia de archivos de dependencias (`package.json`, `requirements.txt`, etc.) antes del código fuente permite que Docker use la caché de la capa `RUN npm install` siempre que las dependencias no cambien, acelerando los builds frecuentes."
```

### 6 — Comandos de entrada
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["entrypoint", "cmd", "ejecucion"]
enunciado: "Si un Dockerfile define `ENTRYPOINT ["python", "app.py"]` y `CMD ["--debug"]`, ¿cuál es el comando final ejecutado al iniciar el contenedor sin argumentos adicionales?"
respuesta: "python app.py --debug"
tipo: mc
opciones_explicitas:
  - "python app.py"
  - "python app.py --debug"
  - "CMD --debug"
  - "python --debug app.py"
pasos:
  - "Entender la jerarquía entre `ENTRYPOINT` y `CMD`."
  - "Aplicar la regla: `CMD` proporciona argumentos por defecto para `ENTRYPOINT`."
  - "Concatenar el entrypoint con el cmd."
explicacion: "Cuando `ENTRYPOINT` se define como un array JSON (exec form) y `CMD` también es un array, `CMD` actúa como argumentos por defecto para `ENTRYPOINT`. El resultado es `python app.py --debug`."
```

### 7 — Multi-stage builds
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "multistage", "optimizacion"]
enunciado: "¿Cuál es el beneficio principal de usar `FROM node:18 AS builder` seguido de `COPY --from=builder /app/dist /app` en un Dockerfile?"
respuesta: "Reducir el tamaño final de la imagen eliminando dependencias de compilación."
tipo: mc
opciones_explicitas:
  - "Permitir la ejecución de múltiples contenedores simultáneamente."
  - "Reducir el tamaño final de la imagen eliminando dependencias de compilación."
  - "Habilitar la persistencia de datos entre builds."
  - "Acelerar la resolución DNS interna."
pasos:
  - "Identificar el patrón de construcción multi-etapa."
  - "Reconocer que la primera etapa (builder) contiene herramientas de compilación."
  - "Entender que la segunda etapa copia solo los artefactos finales, excluyendo las herramientas de build."
explicacion: "Las multi-stage builds permiten copiar artefactos compilados desde una imagen intermedia (que puede ser pesada) a una imagen final limpia (como Alpine o distroless), reduciendo significativamente el tamaño y la superficie de ataque."
```

### 8 — Gestión de secretos
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["docker-secrets", "seguridad", "swarm"]
enunciado: "¿Por qué se debe evitar pasar contraseñas sensibles mediante variables de entorno (`-e PASSWORD=secret`) en producción?"
respuesta: "La variable queda expuesta en el historial de la imagen y en `docker inspect`."
tipo: mc
opciones_explicitas:
  - "Porque Docker bloquea automáticamente variables con nombres sensibles."
  - "Porque la variable queda expuesta en el historial de la imagen y en `docker inspect`."
  - "Porque las variables de entorno no están soportadas en contenedores de producción."
  - "Porque causan un error de seguridad en el kernel de Linux."
pasos:
  - "Analizar el ciclo de vida de las variables de entorno en Docker."
  - "Identificar que `docker history` y `docker inspect` muestran las variables de entorno definidas en las capas de la imagen."
  - "Concluir que esto es un riesgo de seguridad."
explicacion: "Las variables de entorno definidas en el Dockerfile o al lanzar el contenedor pueden ser vistas por cualquier usuario con permisos de lectura en el daemon de Docker. Docker Secrets (en Swarm) o mounts de archivos temporales son alternativas seguras."
```

### 9 — Docker Compose
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["docker-compose", "versionado", "yaml"]
enunciado: "Completa la clave YAML requerida en la parte superior de un archivo `docker-compose.yml` moderno para definir la sintaxis:"
respuesta: "version"
respuestas_validas:
  - "version"
  - "VERSION"
  - "version:"
  - "VERSION:"
tipo: completar
pasos:
  - "Recordar la estructura básica de un archivo de composición de Docker."
  - "Identificar la clave principal que indica la versión del formato del archivo."
  - "Completar con el nombre de la clave estándar."
explicacion: "Aunque las versiones recientes de Docker Compose (v2/v3) hacen la clave `version` opcional o la ignoran, históricamente y en muchos contextos de validación, la clave `version` define la sintaxis del archivo YAML."
```

### 10 — Network isolation
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["docker-network", "host", "net_mode"]
enunciado: "Si un contenedor se ejecuta con `--network host`, ¿qué implica esto respecto a la red del sistema anfitrión?"
respuesta: "El contenedor comparte el namespace de red del host, sin aislamiento de puertos."
tipo: mc
opciones_explicitas:
  - "El contenedor no tiene acceso a Internet."
  - "El contenedor comparte el namespace de red del host, sin aislamiento de puertos."
  - "El contenedor crea una nueva interfaz de red virtual independiente."
  - "El contenedor solo puede escuchar en el puerto 80."
pasos:
  - "Analizar el modo de red `host`."
  - "Entender que elimina el aislamiento de red entre el contenedor y el host."
  - "Seleccionar la descripción que refleja esta falta de aislamiento."
explicacion: "Con `--network host`, el contenedor usa directamente las interfaces de red del host, comparte los puertos y no hay traducción de direcciones (NAT). Esto mejora el rendimiento pero elimina el aislamiento de red."
```

### 11 — Dockerfile ARG vs ENV
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "variables", "build-time"]
enunciado: "¿Cuál es la diferencia clave entre `ARG` y `ENV` en un Dockerfile?"
respuesta: "ARG es solo para build-time, ENV persiste en el runtime."
tipo: mc
opciones_explicitas:
  - "ARG es para variables de entorno, ENV para variables de build."
  - "ARG es solo para build-time, ENV persiste en el runtime."
  - "Ambas son idénticas, pero ENV es más rápida."
  - "ARG requiere un valor por defecto, ENV no."
pasos:
  - "Diferenciar los tiempos de vida de las variables."
  - "Identificar que `ARG` se resuelve durante `docker build` y no se almacena en la imagen final."
  - "Identificar que `ENV` se almacena en la imagen y está disponible cuando el contenedor se ejecuta."
explicacion: "Las variables `ARG` son solo visibles durante el proceso de construcción. Las variables `ENV` se escriben en la metadata de la imagen y están disponibles como variables de entorno para los procesos dentro del contenedor en ejecución."
```

### 12 — Healthcheck
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "healthcheck", "monitoring"]
enunciado: "Completa la instrucción para definir un healthcheck que ejecute un script: `HEALTHCHECK --interval=30s --timeout=5s ____ curl -f http://localhost/ || exit 1`"
respuesta: "CMD"
respuestas_validas:
  - "CMD"
  - "cmd"
  - "CMD-SHELL"
  - "cmd-shell"
tipo: completar
pasos:
  - "Identificar la sintaxis de la instrucción `HEALTHCHECK`."
  - "Reconocer que después de los flags opcionales, se especifica el comando a ejecutar."
  - "Determinar que `CMD` o `CMD-SHELL` son los valores válidos para iniciar el comando de verificación."
explicacion: "La instrucción `HEALTHCHECK` define cómo Docker verifica si el contenedor sigue funcionando. Se usa `CMD` para ejecutar el comando directamente o `CMD-SHELL` para ejecutarlo a través del shell del contenedor."
```

### 13 — Docker Compose Overrides
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["docker-compose", "overrides", "development"]
enunciado: "Para aplicar configuraciones específicas de desarrollo (como volúmenes mount para hot-reload) sin modificar el `docker-compose.yml` principal, ¿qué archivo se debe crear y nombrar?"
respuesta: "docker-compose.override.yml"
tipo: mc
opciones_explicitas:
  - "docker-compose.dev.yml"
  - "docker-compose.override.yml"
  - "docker-compose.local.yml"
  - "docker-compose.test.yml"
pasos:
  - "Recordar el mecanismo de superposición de archivos en Docker Compose."
  - "Identificar el nombre estándar que Docker Compose busca automáticamente para sobrescribir configuraciones."
  - "Seleccionar el nombre correcto."
explicacion: "Docker Compose carga automáticamente `docker-compose.override.yml` si existe, fusionando sus valores con el archivo principal. Es la forma estándar de inyectar configuraciones de desarrollo."
```

### 14 — Dockerfile WORKDIR
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "workdir", "estructura"]
enunciado: "¿Qué sucede si se usa `WORKDIR /app` en un Dockerfile y la ruta `/app` no existe en la imagen base?"
respuesta: "Se crea automáticamente."
tipo: vf
pasos:
  - "Analizar el comportamiento de la instrucción `WORKDIR`."
  - "Verificar si la creación automática de directorios es una característica documentada."
  - "Confirmar que Docker crea directorios intermedios si es necesario."
explicacion: "La instrucción `WORKDIR` crea el directorio especificado si no existe, junto con cualquier directorio padre necesario. No genera un error."
```

### 15 — Docker Swarm
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["docker-swarm", "manager", "init"]
enunciado: "Completa el comando para inicializar un nuevo clúster de Docker Swarm en el nodo actual: `docker swarm ____`"
respuesta: "init"
respuestas_validas:
  - "init"
  - "initialize"
  - "INIT"
  - "INITIALIZE"
tipo: completar
pasos:
  - "Identificar la acción para convertir un nodo Docker en un manager de un clúster Swarm."
  - "Recuperar el comando CLI correspondiente."
  - "Completar el comando."
explicacion: "El comando `docker swarm init` transforma el nodo Docker local en un nodo manager de un nuevo clúster Swarm, generando un token de join para los workers."
```

### 16 — Dockerfile USER
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "security", "user"]
enunciado: "¿Por qué es una práctica de seguridad recomendada usar `USER nonroot` en un Dockerfile?"
respuesta: "Para limitar los privilegios del proceso si el contenedor es comprometido."
tipo: mc
opciones_explicitas:
  - "Para acelerar el inicio del contenedor."
  - "Para limitar los privilegios del proceso si el contenedor es comprometido."
  - "Para permitir que el contenedor acceda a dispositivos de hardware."
  - "Para reducir el tamaño de la imagen."
pasos:
  - "Analizar el impacto de ejecutar procesos como root vs usuario no privilegiado."
  - "Identificar el riesgo de seguridad de ejecutar como root (escalada de privilegios)."
  - "Seleccionar la razón de seguridad correcta."
explicacion: "Ejecutar procesos como root dentro del contenedor es un riesgo de seguridad. Si un atacante explota una vulnerabilidad en la aplicación, podría tener acceso root al namespace del contenedor. Usar `USER nonroot` mitiga este riesgo."
```

### 17 — Docker Compose Services
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["docker-compose", "services", "dependencias"]
enunciado: "En `docker-compose.yml`, ¿qué clave se usa para especificar que el servicio `web` depende del servicio `db` para iniciar primero?"
respuesta: "depends_on"
tipo: mc
opciones_explicitas:
  - "requires"
  - "depends_on"
  - "linked"
  - "after"
pasos:
  - "Recordar la sintaxis de dependencias en Docker Compose."
  - "Identificar la clave estándar para definir orden de inicio."
  - "Seleccionar la clave correcta."
explicacion: "La clave `depends_on` en Docker Compose asegura que los servicios especificados se inicien antes que el servicio actual. Nota: no espera a que el servicio dependiente esté 'listo' (healthcheck), solo a que haya comenzado."
```

### 18 — Dockerfile LABEL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "metadata", "labels"]
enunciado: "Completa la instrucción para añadir metadatos a la imagen: `LABEL ____=\"1.0\"`"
respuesta: "version"
respuestas_validas:
  - "version"
  - "VERSION"
  - "com.example.version"
  - "com.example.version=\"1.0\""
tipo: completar
pasos:
  - "Identificar la instrucción para añadir etiquetas/metadata a una imagen Docker."
  - "Reconocer que `LABEL` permite pares clave-valor."
  - "Completar con la clave de ejemplo más común para versionado."
explicacion: "La instrucción `LABEL` añade metadatos a una imagen. Se usa sintaxis `KEY=VALUE` o `KEY="VALUE"`. Es útil para información de autoría, licencia o versión."
```

### 19 — Docker Network Driver
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["docker-network", "overlay", "swarm"]
enunciado: "¿Qué driver de red se utiliza para permitir que los contenedores en nodos diferentes de un clúster Docker Swarm se comuniquen?"
respuesta: "overlay"
tipo: mc
opciones_explicitas:
  - "bridge"
  - "host"
  - "overlay"
  - "macvlan"
pasos:
  - "Identificar los tipos de drivers de red en Docker."
  - "Reconocer que `bridge` y `host` son para nodos individuales."
  - "Identificar que `overlay` crea una red virtual distribuida a través de múltiples nodos."
explicacion: "El driver `overlay` permite crear redes entre múltiples demonios de Docker que participan en un clúster Swarm, permitiendo la comunicación entre contenedores en diferentes hosts."
```

### 20 — Dockerfile ENTRYPOINT exec form
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "entrypoint", "exec-form"]
enunciado: "¿Por qué se prefiere la forma JSON `ENTRYPOINT [\"executable\", \"param1\"]` sobre la forma shell `ENTRYPOINT executable param1`?"
respuesta: "Para evitar que se ejecute un shell intermedio y permitir señalización de señales (signals)."
tipo: mc
opciones_explicitas:
  - "Porque es más fácil de leer."
  - "Para evitar que se ejecute un shell intermedio y permitir señalización de señales."
  - "Porque funciona en Windows y Linux."
  - "Porque permite usar variables de entorno."
pasos:
  - "Analizar la diferencia de ejecución entre las dos formas de `ENTRYPOINT`."
  - "Identificar que la forma shell invoca `/bin/sh -c`, lo que impide que señales como SIGTERM lleguen al proceso principal."
  - "Seleccionar la razón técnica correcta."
explicacion: "La forma JSON (`exec form`) evita la invocación de un shell intermedio (`/bin/sh`), lo que permite que señales como SIGTERM y SIGKILL lleguen directamente al proceso principal (PID 1) del contenedor, facilitando el apagado limpio."
```

### 21 — Docker Compose Volumes
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["docker-compose", "volumes", "named-volumes"]
enunciado: "En `docker-compose.yml`, ¿qué sección se define para crear un volumen nombrado que pueda ser compartido entre múltiples servicios?"
respuesta: "volumes"
tipo: mc
opciones_explicitas:
  - "networks"
  - "volumes"
  - "configs"
  - "secrets"
pasos:
  - "Identificar la sección principal para la gestión de volúmenes en Docker Compose."
  - "Reconocer que los volúmenes nombrados se definen en la parte superior del archivo y se referencian en los servicios."
  - "Seleccionar la sección correcta."
explicacion: "La sección `volumes` en la raíz del `docker-compose.yml` define los volúmenes nombrados disponibles. Los servicios luego los montan usando la clave `volumes` a nivel de servicio."
```

### 22 — Dockerfile CMD vs ENTRYPOINT
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "cmd", "entrypoint", "flexibilidad"]
enunciado: "Si se desea que un contenedor tenga un comando principal fijo pero permitir que el usuario sobrescriba fácilmente solo los argumentos al ejecutar `docker run`, ¿qué combinación se recomienda?"
respuesta: "ENTRYPOINT para el comando, CMD para los argumentos por defecto."
tipo: mc
opciones_explicitas:
  - "CMD para el comando, ENTRYPOINT para los argumentos."
  - "ENTRYPOINT para el comando, CMD para los argumentos por defecto."
  - "Solo CMD para todo."
  - "Solo ENTRYPOINT para todo."
pasos:
  - "Analizar la flexibilidad de sobrescritura de comandos."
  - "Entender que `ENTRYPOINT` define el ejecutable principal y es difícil de sobrescribir completamente."
  - "Entender que `CMD` proporciona argumentos que pueden ser reemplazados fácilmente por los argumentos pasados a `docker run`."
explicacion: "Usar `ENTRYPOINT` para el ejecutable principal asegura que el contenedor siempre ejecute esa aplicación. `CMD` proporciona argumentos por defecto que pueden ser sobrescritos por el usuario al ejecutar el contenedor, ofreciendo flexibilidad."
```

### 23 — Dockerfile ENV
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "env", "substitution"]
enunciado: "Completa la instrucción para definir una variable de entorno: `____ NODE_ENV=production`"
respuesta: "ENV"
respuestas_validas:
  - "ENV"
  - "env"
  - "ENV NODE_ENV=production"
  - "env NODE_ENV=production"
tipo: completar
pasos:
  - "Identificar la instrucción para definir variables de entorno en un Dockerfile."
  - "Reconocer la sintaxis `KEY=VALUE`."
  - "Completar con la instrucción correcta."
explicacion: "La instrucción `ENV` establece una variable de entorno. La sintaxis `ENV KEY=VALUE` es la forma más común y legible."
```

### 24 — Docker Compose Ports
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["docker-compose", "ports", "mapeo"]
enunciado: "En `docker-compose.yml`, ¿qué sintaxis mapea el puerto 8080 del host al puerto 80 del contenedor?"
respuesta: "8080:80"
tipo: mc
opciones_explicitas:
  - "8080->80"
  - "8080:80"
  - "8080,80"
  - "host:8080, container:80"
pasos:
  - "Recordar la sintaxis de mapeo de puertos en Docker Compose."
  - "Identificar que la sintaxis es `host_port:container_port`."
  - "Seleccionar la sintaxis correcta."
explicacion: "La sintaxis `host_port:container_port` en la sección `ports` de Docker Compose mapea un puerto del host a un puerto del contenedor."
```

### 25 — Dockerfile MAINTAINER
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "devops-contenedores-docker"
  nivel: "avanzado"
  tags: ["dockerfile", "deprecated", "labels"]
enunciado: "La instrucción `MAINTAINER` en Dockerfiles ha sido deprecada. ¿Cuál es la instrucción recomendada para añadir información de autoría?"
respuesta: "LABEL"
tipo: mc
opciones_explicitas:
  - "AUTHOR"
  - "MAINTAINER"
  - "LABEL"
  - "INFO"
pasos:
  - "Identificar la instrucción deprecada para autoría."
  - "Reconocer que Docker recomienda usar `LABEL` con estándares como `org.opencontainers.image.authors`."
  - "Seleccionar la instrucción recomendada actual."
explicacion: "La instrucción `MAINTAINER` ha sido deprecada. La forma estándar actual es usar `LABEL` con claves estandarizadas, como `org.opencontainers.image.authors` según el estándar OCI Image Format."
```