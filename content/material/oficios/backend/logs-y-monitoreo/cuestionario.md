# Backend — Logs y monitoreo (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta.

---
### 1 — Logs

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "basico"
  tags: ["logs"]

tipo: mc
opciones_explicitas: ["Una línea de registro que el programa escribe sobre lo que hace", "Una copia de seguridad", "Un tipo de base de datos", "Una contraseña"]
respuesta: "Una línea de registro que el programa escribe sobre lo que hace"

enunciado: "¿Qué es un log?"

explicacion: |
  Permite reconstruir qué pasó.
```

### 2 — Logs

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "basico"
  tags: ["logs"]

tipo: mc
opciones_explicitas: ["Los logs cuentan hechos puntuales; las métricas miden el estado a lo largo del tiempo", "No hay diferencia", "Los logs son números y las métricas texto", "Las métricas solo sirven en desarrollo"]
respuesta: "Los logs cuentan hechos puntuales; las métricas miden el estado a lo largo del tiempo"

enunciado: "¿Cuál es la diferencia entre logs y métricas?"

explicacion: |
  Se complementan.
```

### 3 — Logs

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "basico"
  tags: ["logs"]

tipo: vf
respuesta: verdadero

enunciado: "Sin registros, investigar una falla en producción se parece a adivinar."

explicacion: |
  Los logs son el rastro de lo que ocurrió.
```

### 4 — Niveles

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "basico"
  tags: ["niveles"]

tipo: mc
opciones_explicitas: ["error", "debug", "info", "warn"]
respuesta: "error"

enunciado: "¿Qué nivel de log corresponde a una falla que impide completar una operación?"

explicacion: |
  Es el nivel de las fallas reales.
```

### 5 — Niveles

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "basico"
  tags: ["niveles"]

tipo: mc
opciones_explicitas: ["info", "debug", "error", "warn"]
respuesta: "info"

enunciado: "¿Qué nivel se usa para eventos normales como el arranque del servidor?"

explicacion: |
  Informa sin indicar problema.
```

### 6 — Niveles

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["niveles"]

tipo: mc
opciones_explicitas: ["Para situaciones raras que todavía no son un error", "Para registrar contraseñas", "Para apagar el servidor", "Para detalles solo de desarrollo"]
respuesta: "Para situaciones raras que todavía no son un error"

enunciado: "¿Para qué sirve el nivel warn?"

explicacion: |
  Es una advertencia.
```

### 7 — Niveles

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["niveles"]

tipo: completar
enunciado: "Los mensajes de ___ se suelen desactivar en producción para no llenar el disco."
respuestas_validas:
  - "debug"

explicacion: |
  Se configura un nivel mínimo.
```

### 8 — Niveles

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["niveles"]

tipo: vf
respuesta: falso

enunciado: "En producción conviene registrar siempre el nivel más detallado, sin excepción."

explicacion: |
  Llena el disco y oculta lo importante.
```

### 9 — Contenido

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "basico"
  tags: ["contenido"]

tipo: mc
opciones_explicitas: ["Contraseñas, tokens y números de tarjeta", "La ruta pedida", "El código de respuesta", "La hora de la petición"]
respuesta: "Contraseñas, tokens y números de tarjeta"

enunciado: "¿Qué datos nunca deben registrarse?"

explicacion: |
  Un registro filtrado equivale a una filtración de datos.
```

### 10 — Contenido

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["contenido"]

tipo: mc
opciones_explicitas: ["Para seguir el recorrido de una misma petición", "Para cifrar el registro", "Para aumentar la velocidad", "Para ahorrar disco"]
respuesta: "Para seguir el recorrido de una misma petición"

enunciado: "¿Para qué sirve un identificador de petición en cada línea?"

explicacion: |
  Permite agrupar los mensajes de un mismo caso.
```

### 11 — Contenido

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["contenido"]

tipo: mc
opciones_explicitas: ["Las herramientas pueden filtrarlo y contarlo sin adivinar el texto", "Ocupa menos que el texto plano siempre", "Es ilegible por diseño", "No necesita fecha"]
respuesta: "Las herramientas pueden filtrarlo y contarlo sin adivinar el texto"

enunciado: "¿Qué ventaja tiene el log estructurado, por ejemplo en JSON?"

explicacion: |
  Facilita las búsquedas.
```

### 12 — Contenido

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["contenido"]

tipo: vf
respuesta: falso

enunciado: "Registrar sin criterio todo lo que ocurre es siempre una buena idea."

explicacion: |
  Cuesta almacenamiento y atención, y esconde lo importante.
```

### 13 — Contenido

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["contenido"]

tipo: completar
enunciado: "Un buen registro incluye la fecha y hora con la ___ horaria."
respuestas_validas:
  - "zona"

explicacion: |
  Evita confusiones entre sistemas.
```

### 14 — Metricas

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "basico"
  tags: ["metricas"]

tipo: mc
opciones_explicitas: ["Cuánto tarda el servicio en responder", "Cuántos usuarios hay", "Cuánto disco queda libre", "Cuántos errores hubo"]
respuesta: "Cuánto tarda el servicio en responder"

enunciado: "¿Qué mide la latencia?"

explicacion: |
  Es una de las señales básicas.
```

### 15 — Metricas

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "basico"
  tags: ["metricas"]

tipo: mc
opciones_explicitas: ["La tasa de errores", "El color del logotipo", "El nombre del equipo", "El idioma del código"]
respuesta: "La tasa de errores"

enunciado: "¿Cuál es una señal básica de un servicio web?"

explicacion: |
  Junto con peticiones, latencia y saturación.
```

### 16 — Metricas

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["metricas"]

tipo: mc
opciones_explicitas: ["Qué parte de los recursos está en uso", "Cuántas alertas hay", "Qué tan seguro es el servicio", "La cantidad de usuarios registrados"]
respuesta: "Qué parte de los recursos está en uso"

enunciado: "¿Qué indica la saturación?"

explicacion: |
  Procesador, memoria, disco o conexiones.
```

### 17 — Metricas

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "avanzado"
  tags: ["metricas"]

tipo: mc
opciones_explicitas: ["El 99 % de las peticiones responde en 2 segundos o menos", "Todas las peticiones tardan 2 segundos", "El 1 % de las peticiones falla", "El promedio es de 2 segundos"]
respuesta: "El 99 % de las peticiones responde en 2 segundos o menos"

enunciado: "¿Qué significa un p99 de latencia de 2 segundos?"

explicacion: |
  Los percentiles muestran los casos lentos.
```

### 18 — Metricas

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["metricas"]

tipo: vf
respuesta: verdadero

enunciado: "El promedio de latencia puede esconder que una parte de los usuarios espera mucho."

explicacion: |
  Por eso se miran percentiles.
```

### 19 — Alertas

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "basico"
  tags: ["alertas"]

tipo: mc
opciones_explicitas: ["Un aviso automático cuando una métrica cruza un umbral", "Un mensaje de debug", "Una copia del log", "Un tipo de consulta"]
respuesta: "Un aviso automático cuando una métrica cruza un umbral"

enunciado: "¿Qué es una alerta?"

explicacion: |
  Debe ser accionable.
```

### 20 — Alertas

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["alertas"]

tipo: vf
respuesta: falso

enunciado: "Tener muchas alertas por cada variación pequeña mejora la respuesta del equipo."

explicacion: |
  Genera fatiga y las alertas terminan ignoradas.
```

### 21 — Alertas

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["alertas"]

tipo: mc
opciones_explicitas: ["Una ruta simple que indica si el servicio está vivo y puede llegar a sus dependencias", "Una consulta de usuarios", "Un examen médico del equipo", "Un tipo de log"]
respuesta: "Una ruta simple que indica si el servicio está vivo y puede llegar a sus dependencias"

enunciado: "¿Qué es un health check?"

explicacion: |
  Lo consultan los balanceadores.
```

### 22 — Alertas

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "avanzado"
  tags: ["alertas"]

tipo: mc
opciones_explicitas: ["Para decidir si manda tráfico a una instancia", "Para elegir el idioma", "Para cifrar el tráfico", "Para borrar los logs"]
respuesta: "Para decidir si manda tráfico a una instancia"

enunciado: "¿Para qué consulta un balanceador el chequeo de salud?"

explicacion: |
  Si falla, la instancia se retira o se reemplaza.
```

### 23 — Alertas

```
metadata:
  materia: "backend"
  tema: "logs_y_monitoreo"
  nivel: "intermedio"
  tags: ["alertas"]

tipo: mc
opciones_explicitas: ["Quien la recibe sabe qué hacer", "Suena todo el tiempo", "No tiene umbral", "Solo avisa de éxitos"]
respuesta: "Quien la recibe sabe qué hacer"

enunciado: "Una alerta útil es aquella que..."

explicacion: |
  Se alerta por síntomas que afectan a las personas.
```
