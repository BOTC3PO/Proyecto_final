# DevOps — CI/CD fundamentos (cuestionario, 24 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — CI

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["ci"]

tipo: mc
opciones_explicitas: ["Construir y probar automáticamente el proyecto cada vez que se suben cambios", "Publicar cada mes", "Escribir documentación", "Revisar sin herramientas"]
respuesta: "Construir y probar automáticamente el proyecto cada vez que se suben cambios"

enunciado: "¿Qué es la integración continua (CI)?"

explicacion: |
  Detecta problemas temprano.
```

### 2 — CD

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "intermedio"
  tags: ["cd"]

tipo: mc
opciones_explicitas: ["En la entrega, publicar es manual; en el despliegue, es automático", "Son iguales", "La entrega no usa pruebas", "El despliegue es manual"]
respuesta: "En la entrega, publicar es manual; en el despliegue, es automático"

enunciado: "¿Qué diferencia hay entre entrega y despliegue continuos?"

explicacion: |
  Ambos se abrevian CD.
```

### 3 — Ventaja

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["ventajas"]

tipo: mc
opciones_explicitas: ["Retroalimentación rápida y lanzamientos frecuentes y pequeños", "Elimina las pruebas", "Elimina el código", "Elimina a los equipos"]
respuesta: "Retroalimentación rápida y lanzamientos frecuentes y pequeños"

enunciado: "¿Cuál es una ventaja de la CI/CD?"

explicacion: |
  Menor riesgo por cambio.
```

### 4 — Pipeline

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["pipeline"]

tipo: mc
opciones_explicitas: ["Una cadena de etapas automáticas que se ejecuta en cada cambio", "Una tubería física", "Un archivo de texto", "Una rama"]
respuesta: "Una cadena de etapas automáticas que se ejecuta en cada cambio"

enunciado: "¿Qué es un pipeline?"

explicacion: |
  Si una etapa falla, se detiene.
```

### 5 — Etapas

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["etapas"]

tipo: mc
opciones_explicitas: ["Instalar dependencias, compilar y probar", "Pintar la oficina", "Cambiar de lenguaje", "Apagar el servidor"]
respuesta: "Instalar dependencias, compilar y probar"

enunciado: "¿Cuál es una etapa típica de un pipeline?"

explicacion: |
  Luego, empaquetar y desplegar.
```

### 6 — Falla

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["fallas"]

tipo: mc
opciones_explicitas: ["Se detiene y se avisa", "Continúa igual", "Se publica", "Se borra el código"]
respuesta: "Se detiene y se avisa"

enunciado: "Si una etapa del pipeline falla, ¿qué ocurre?"

explicacion: |
  Evita publicar algo roto.
```

### 7 — Linter

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["linter"]

tipo: mc
opciones_explicitas: ["Analiza el código en busca de errores y problemas de estilo", "Compila", "Despliega", "Comprime"]
respuesta: "Analiza el código en busca de errores y problemas de estilo"

enunciado: "¿Qué hace un linter?"

explicacion: |
  Se ejecuta en CI.
```

### 8 — Herramientas

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["herramientas"]

tipo: mc
opciones_explicitas: ["GitHub Actions", "Photoshop", "Audacity", "Figma"]
respuesta: "GitHub Actions"

enunciado: "¿Cuál es una herramienta de CI/CD?"

explicacion: |
  También GitLab CI y Jenkins.
```

### 9 — Como código

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["codigo"]

tipo: mc
opciones_explicitas: ["Que se define en archivos versionados junto con el proyecto", "Que se escribe en papel", "Que es automático solo", "Que no se versiona"]
respuesta: "Que se define en archivos versionados junto con el proyecto"

enunciado: "¿Qué significa que el pipeline sea \"como código\"?"

explicacion: |
  Suele ser YAML.
```

### 10 — On

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "intermedio"
  tags: ["on"]

tipo: mc
opciones_explicitas: ["Los eventos que disparan el flujo", "El nombre", "El sistema", "La versión de Node"]
respuesta: "Los eventos que disparan el flujo"

enunciado: "En un archivo de GitHub Actions, ¿qué indica `on:`?"

explicacion: |
  Por ejemplo, `push` y `pull_request`.
```

### 11 — Runner

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "intermedio"
  tags: ["runner"]

tipo: mc
opciones_explicitas: ["La máquina que ejecuta los pasos del pipeline", "Un tipo de prueba", "Una rama", "Un registro"]
respuesta: "La máquina que ejecuta los pasos del pipeline"

enunciado: "¿Qué es un runner?"

explicacion: |
  Puede ser propia o alojada.
```

### 12 — Pruebas

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["pruebas"]

tipo: mc
opciones_explicitas: ["Porque sin pruebas no detecta problemas", "Porque es más lenta", "Por costumbre", "Por seguridad"]
respuesta: "Porque sin pruebas no detecta problemas"

enunciado: "¿Por qué la CI vale tanto como sus pruebas?"

explicacion: |
  Pruebas pobres dan falsa confianza.
```

### 13 — Intermitentes

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "intermedio"
  tags: ["flaky"]

tipo: mc
opciones_explicitas: ["Arreglarla o eliminarla", "Ignorarla", "Reiniciar siempre", "Subir el tiempo de espera"]
respuesta: "Arreglarla o eliminarla"

enunciado: "¿Qué se hace con una prueba que falla al azar?"

explicacion: |
  Quitan confianza.
```

### 14 — Verde

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["verde"]

tipo: mc
opciones_explicitas: ["Que pasa todas las pruebas", "Que no tiene commits", "Que está vacía", "Que está bloqueada"]
respuesta: "Que pasa todas las pruebas"

enunciado: "¿Qué significa que la rama principal esté verde?"

explicacion: |
  Siempre debería estarlo.
```

### 15 — Primero

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["prioridad"]

tipo: mc
opciones_explicitas: ["Arreglarlo", "Seguir con nuevas funciones", "Ignorarlo", "Reiniciarlo hasta que pase"]
respuesta: "Arreglarlo"

enunciado: "Si el pipeline de la rama principal falla, ¿qué se hace primero?"

explicacion: |
  Es prioridad del equipo.
```

### 16 — Blue green

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "intermedio"
  tags: ["bluegreen"]

tipo: mc
opciones_explicitas: ["Dos entornos idénticos y un cambio de tráfico entre ellos", "Dos lenguajes", "Un solo servidor", "Un despliegue manual"]
respuesta: "Dos entornos idénticos y un cambio de tráfico entre ellos"

enunciado: "¿Qué es el despliegue azul/verde?"

explicacion: |
  Permite volver atrás de inmediato.
```

### 17 — Canario

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "intermedio"
  tags: ["canario"]

tipo: mc
opciones_explicitas: ["Probar la nueva versión con un porcentaje pequeño de usuarios", "Subir todo de golpe", "Probar en el celular", "Borrar la versión anterior"]
respuesta: "Probar la nueva versión con un porcentaje pequeño de usuarios"

enunciado: "¿Qué es un despliegue canario?"

explicacion: |
  Limita el impacto.
```

### 18 — Rolling

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "intermedio"
  tags: ["rolling"]

tipo: mc
opciones_explicitas: ["Actualizar de a un servidor", "Actualizar todo a la vez", "Actualizar de noche", "Actualizar solo la base"]
respuesta: "Actualizar de a un servidor"

enunciado: "¿Qué es un despliegue gradual (rolling)?"

explicacion: |
  Conviven dos versiones.
```

### 19 — Rollback

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["rollback"]

tipo: mc
opciones_explicitas: ["Volver a la versión anterior", "Publicar más rápido", "Borrar la base", "Cambiar el código"]
respuesta: "Volver a la versión anterior"

enunciado: "¿Qué es un rollback?"

explicacion: |
  Debe haber un plan.
```

### 20 — Secretos

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["secretos"]

tipo: mc
opciones_explicitas: ["En el almacén de secretos de la plataforma", "En el repositorio", "En un comentario", "En los logs"]
respuesta: "En el almacén de secretos de la plataforma"

enunciado: "¿Dónde se guardan las claves del pipeline?"

explicacion: |
  Nunca en el código.
```

### 21 — Una vez

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "avanzado"
  tags: ["inmutabilidad"]

tipo: mc
opciones_explicitas: ["Que la misma imagen se usa en todos los entornos", "Que se construye en cada entorno", "Que no se prueba", "Que no se versiona"]
respuesta: "Que la misma imagen se usa en todos los entornos"

enunciado: "¿Qué significa \"construir una vez y desplegar la misma imagen\"?"

explicacion: |
  Evita diferencias entre entornos.
```

### 22 — Migraciones

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "avanzado"
  tags: ["migraciones"]

tipo: mc
opciones_explicitas: ["Que sean versionadas y compatibles hacia atrás", "Que sean manuales", "Que borren datos", "Que sean secretas"]
respuesta: "Que sean versionadas y compatibles hacia atrás"

enunciado: "¿Qué conviene en las migraciones de base de datos?"

explicacion: |
  La versión anterior debe seguir funcionando durante la actualización.
```

### 23 — Velocidad

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["velocidad"]

tipo: mc
opciones_explicitas: ["Dividirlo, paralelizarlo y usar caché", "Quitar pruebas", "Ignorarlo", "Ejecutarlo menos"]
respuesta: "Dividirlo, paralelizarlo y usar caché"

enunciado: "¿Qué conviene hacer si el pipeline tarda mucho?"

explicacion: |
  Un pipeline lento se evita.
```

### 24 — Monitorear

```
metadata:
  materia: "devops"
  tema: "ci_cd_fundamentos"
  nivel: "basico"
  tags: ["monitoreo"]

tipo: mc
opciones_explicitas: ["Monitorear para detectar problemas", "Nada", "Borrar los logs", "Reiniciar siempre"]
respuesta: "Monitorear para detectar problemas"

enunciado: "¿Qué se hace tras un despliegue?"

explicacion: |
  Chequeos de salud y alertas.
```

