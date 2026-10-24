# Backend — Asincronía y colas de trabajo (cuestionario, 22 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta.

---
### 1 — Asincronia

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "basico"
  tags: ["asincronia"]

tipo: mc
opciones_explicitas: ["Para que la persona no espere y una falla no pierda todo el trabajo", "Para gastar más memoria", "Para evitar usar el servidor", "Porque HTTP lo prohíbe"]
respuesta: "Para que la persona no espere y una falla no pierda todo el trabajo"

enunciado: "¿Por qué conviene sacar una tarea lenta de la petición?"

explicacion: |
  Se responde rápido y la tarea se hace después.
```

### 2 — Asincronia

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "basico"
  tags: ["asincronia"]

tipo: mc
opciones_explicitas: ["Una tarea que se ejecuta fuera del ciclo de la petición", "Una tarea que nunca se ejecuta", "Una tarea del navegador", "Una consulta SQL"]
respuesta: "Una tarea que se ejecuta fuera del ciclo de la petición"

enunciado: "¿Qué es una tarea en segundo plano?"

explicacion: |
  La persona no espera a que termine.
```

### 3 — Asincronia

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "basico"
  tags: ["asincronia"]

tipo: vf
respuesta: verdadero

enunciado: "Enviar un correo dentro de la petición puede hacer esperar a la persona y fallar toda la operación."

explicacion: |
  Es un caso típico para trabajo en segundo plano.
```

### 4 — Colas

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "basico"
  tags: ["colas"]

tipo: mc
opciones_explicitas: ["Una lista ordenada de tareas pendientes", "Una tabla de usuarios", "Un tipo de caché del navegador", "Un archivo de configuración"]
respuesta: "Una lista ordenada de tareas pendientes"

enunciado: "¿Qué es una cola de trabajo?"

explicacion: |
  Los trabajadores las van tomando.
```

### 5 — Colas

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "basico"
  tags: ["colas"]

tipo: mc
opciones_explicitas: ["Agrega tareas a la cola", "Ejecuta las tareas", "Borra la cola", "Cifra los datos"]
respuesta: "Agrega tareas a la cola"

enunciado: "¿Qué hace un productor?"

explicacion: |
  Normalmente es el servidor web.
```

### 6 — Colas

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "basico"
  tags: ["colas"]

tipo: mc
opciones_explicitas: ["Toma tareas de la cola y las ejecuta", "Responde las peticiones HTTP", "Diseña la base", "Reinicia la red"]
respuesta: "Toma tareas de la cola y las ejecuta"

enunciado: "¿Qué hace un worker?"

explicacion: |
  Es un proceso independiente.
```

### 7 — Colas

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "basico"
  tags: ["colas"]

tipo: completar
enunciado: "Si hay muchas tareas pendientes, se pueden agregar más ___."
respuestas_validas:
  - "workers"
  - "trabajadores"

explicacion: |
  Así se procesan más tareas en paralelo.
```

### 8 — Colas

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "intermedio"
  tags: ["colas"]

tipo: mc
opciones_explicitas: ["Funciona como amortiguador y las tareas se procesan a su ritmo", "Rechaza todos los pedidos", "Duplica los pedidos", "Apaga los workers"]
respuesta: "Funciona como amortiguador y las tareas se procesan a su ritmo"

enunciado: "¿Cómo ayuda la cola cuando llegan miles de pedidos de golpe?"

explicacion: |
  El servidor web no se satura.
```

### 9 — Colas

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "intermedio"
  tags: ["colas"]

tipo: vf
respuesta: verdadero

enunciado: "Gracias a la cola, el servidor web puede seguir disponible aunque el servicio de correo esté caído."

explicacion: |
  Las tareas esperan hasta poder procesarse.
```

### 10 — Reintentos

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "basico"
  tags: ["reintentos"]

tipo: mc
opciones_explicitas: ["Por motivos pasajeros como una red cortada o un servicio ocupado", "Porque las colas no funcionan", "Porque siempre hay un error de sintaxis", "Porque los workers no existen"]
respuesta: "Por motivos pasajeros como una red cortada o un servicio ocupado"

enunciado: "¿Por qué fallan las tareas con frecuencia?"

explicacion: |
  Por eso se permite reintentar.
```

### 11 — Reintentos

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "intermedio"
  tags: ["reintentos"]

tipo: mc
opciones_explicitas: ["Esperar cada vez más entre un reintento y el siguiente", "Reintentar cada milisegundo", "No reintentar nunca", "Reintentar solo una vez"]
respuesta: "Esperar cada vez más entre un reintento y el siguiente"

enunciado: "¿Qué es el backoff exponencial?"

explicacion: |
  Evita golpear a un servicio ya con problemas.
```

### 12 — Reintentos

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "intermedio"
  tags: ["reintentos"]

tipo: vf
respuesta: falso

enunciado: "Reintentar de inmediato y sin límite es una buena estrategia."

explicacion: |
  Puede empeorar el problema.
```

### 13 — Reintentos

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "avanzado"
  tags: ["reintentos"]

tipo: mc
opciones_explicitas: ["Para guardar tareas que siguen fallando y revisarlas", "Para acelerar los workers", "Para borrar tareas", "Para cifrar mensajes"]
respuesta: "Para guardar tareas que siguen fallando y revisarlas"

enunciado: "¿Para qué sirve la cola de tareas muertas (dead letter queue)?"

explicacion: |
  Evita reintentar para siempre.
```

### 14 — Reintentos

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "intermedio"
  tags: ["reintentos"]

tipo: completar
enunciado: "Se fija un número ___ de intentos antes de dar por fallida una tarea."
respuestas_validas:
  - "máximo"
  - "maximo"

explicacion: |
  Después la tarea va a la cola de tareas muertas.
```

### 15 — Idempotencia

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "basico"
  tags: ["idempotencia"]

tipo: mc
opciones_explicitas: ["Cuando repetirla da el mismo resultado que hacerla una vez", "Cuando es muy rápida", "Cuando no usa la base", "Cuando se hace de noche"]
respuesta: "Cuando repetirla da el mismo resultado que hacerla una vez"

enunciado: "¿Cuándo es idempotente una operación?"

explicacion: |
  Es clave porque las tareas pueden ejecutarse más de una vez.
```

### 16 — Idempotencia

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "intermedio"
  tags: ["idempotencia"]

tipo: mc
opciones_explicitas: ["Marcar un pedido como pagado", "Sumar 100 al saldo", "Enviar un correo nuevo cada vez", "Agregar un ítem a una lista"]
respuesta: "Marcar un pedido como pagado"

enunciado: "¿Cuál de estas operaciones es idempotente?"

explicacion: |
  Repetirla deja el mismo estado.
```

### 17 — Idempotencia

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "intermedio"
  tags: ["idempotencia"]

tipo: mc
opciones_explicitas: ["Un saldo con 200 de más: no es idempotente", "El mismo resultado que una vez", "Un error siempre", "Ningún cambio"]
respuesta: "Un saldo con 200 de más: no es idempotente"

enunciado: "Sumar 100 al saldo de una cuenta, repetido dos veces, produce..."

explicacion: |
  Hay que protegerla con una clave de idempotencia.
```

### 18 — Idempotencia

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "avanzado"
  tags: ["idempotencia"]

tipo: mc
opciones_explicitas: ["Para detectar que una operación ya fue procesada", "Para cifrar la tarea", "Para acelerar la cola", "Para ordenar usuarios"]
respuesta: "Para detectar que una operación ya fue procesada"

enunciado: "¿Para qué sirve una clave de idempotencia?"

explicacion: |
  Si ya se procesó, no se hace de nuevo.
```

### 19 — Idempotencia

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "avanzado"
  tags: ["idempotencia"]

tipo: vf
respuesta: verdadero

enunciado: "Una cola puede entregar la misma tarea dos veces, por eso el procesamiento debe tolerarlo."

explicacion: |
  Es una razón para diseñar tareas idempotentes.
```

### 20 — Uso

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "intermedio"
  tags: ["uso"]

tipo: mc
opciones_explicitas: ["Verificar si una contraseña es correcta", "Enviar un correo de bienvenida", "Generar un informe pesado", "Redimensionar una imagen"]
respuesta: "Verificar si una contraseña es correcta"

enunciado: "¿Qué tarea NO conviene hacer en segundo plano?"

explicacion: |
  El cliente necesita saber el resultado ya.
```

### 21 — Uso

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "intermedio"
  tags: ["uso"]

tipo: mc
opciones_explicitas: ["Una forma de consultar su estado", "Nada, la persona espera", "Ocultar el resultado", "Reiniciar la cola"]
respuesta: "Una forma de consultar su estado"

enunciado: "¿Qué conviene ofrecer cuando una operación se hace en segundo plano?"

explicacion: |
  Por ejemplo, pendiente, en proceso, terminada o fallida.
```

### 22 — Uso

```
metadata:
  materia: "backend"
  tema: "asincronia_y_colas_de_trabajo"
  nivel: "intermedio"
  tags: ["uso"]

tipo: vf
respuesta: verdadero

enunciado: "Si la cola crece sin parar, puede ser señal de que los workers no dan abasto o están fallando."

explicacion: |
  Hay que monitorearla.
```
