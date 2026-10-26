# Backend — Diagnóstico de backend por casos (cuestionario, 22 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta.

---
### 1 — Metodo

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Síntoma, hipótesis, verificación, corrección", "Corrección, síntoma, hipótesis", "Hipótesis, corrección, síntoma", "Corrección al azar hasta que funcione"]
respuesta: "Síntoma, hipótesis, verificación, corrección"

enunciado: "¿Cuál es el orden correcto del método de diagnóstico?"

explicacion: |
  Primero se entiende, después se corrige.
```

### 2 — Metodo

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: vf
respuesta: falso

enunciado: "Cambiar cosas al azar hasta que el problema desaparezca es un método de diagnóstico recomendable."

explicacion: |
  Puede esconder el síntoma y dejar la causa sin resolver.
```

### 3 — Metodo

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Qué cambió justo antes de que empezara el problema", "Quién programó esta ruta", "Qué color tiene el logotipo", "Cuánto cuesta el servidor"]
respuesta: "Qué cambió justo antes de que empezara el problema"

enunciado: "¿Qué pregunta ayuda a empezar casi cualquier diagnóstico?"

explicacion: |
  Muchos incidentes siguen a un cambio.
```

### 4 — Metodo

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["De los registros, las métricas y la reproducción del problema", "De la intuición solamente", "De la opinión del cliente", "Del nombre de la función"]
respuesta: "De los registros, las métricas y la reproducción del problema"

enunciado: "¿De dónde sale la evidencia para verificar una hipótesis?"

explicacion: |
  Hay que comprobar, no suponer.
```

### 5 — Caso500

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "basico"
  tags: ["caso500"]

tipo: completar
enunciado: "Un error que aparece a veces y a veces no se llama ___."
respuestas_validas:
  - "intermitente"

explicacion: |
  Suele depender de las condiciones.
```

### 6 — Caso500

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "intermedio"
  tags: ["caso500"]

tipo: mc
opciones_explicitas: ["Agotamiento del pool de conexiones", "Un error de ortografía", "Un certificado vencido", "Una validación faltante"]
respuesta: "Agotamiento del pool de conexiones"

enunciado: "Un 500 intermitente que aparece en los picos de tráfico y menciona el pool de conexiones sugiere..."

explicacion: |
  Con mucho tráfico se acaban las conexiones.
```

### 7 — Caso500

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "intermedio"
  tags: ["caso500"]

tipo: mc
opciones_explicitas: ["En la validación o el manejo de ese caso en el código", "En la fibra óptica", "En el sistema operativo del cliente", "En el color de la interfaz"]
respuesta: "En la validación o el manejo de ese caso en el código"

enunciado: "Si los fallos ocurren siempre con un dato particular, ¿dónde está probablemente el problema?"

explicacion: |
  El dato dispara una ruta no prevista.
```

### 8 — Caso500

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "intermedio"
  tags: ["caso500"]

tipo: mc
opciones_explicitas: ["Qué tienen en común: instancia, usuario, datos u hora", "Solo la primera línea", "Nada, se reinicia el servidor", "El código fuente completo"]
respuesta: "Qué tienen en común: instancia, usuario, datos u hora"

enunciado: "¿Qué conviene buscar en los registros de las peticiones fallidas?"

explicacion: |
  Comparar con las peticiones exitosas.
```

### 9 — Caso500

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "avanzado"
  tags: ["caso500"]

tipo: vf
respuesta: verdadero

enunciado: "Una sola instancia con una configuración distinta puede causar errores solo en algunas peticiones."

explicacion: |
  El balanceador reparte las peticiones entre instancias.
```

### 10 — Caso lento

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "intermedio"
  tags: ["caso_lento"]

tipo: mc
opciones_explicitas: ["La tabla creció y una consulta ya no usa un índice adecuado", "El teclado está roto", "El cliente cambió de color", "El DNS está en otro idioma"]
respuesta: "La tabla creció y una consulta ya no usa un índice adecuado"

enunciado: "Un endpoint que antes era rápido y ahora tarda, ¿qué hipótesis es razonable?"

explicacion: |
  El volumen de datos cambia el rendimiento.
```

### 11 — Caso lento

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "intermedio"
  tags: ["caso_lento"]

tipo: mc
opciones_explicitas: ["Midiendo por etapas con registros de duración o trazas", "Adivinando", "Aumentando el brillo", "Reescribiendo todo el servidor"]
respuesta: "Midiendo por etapas con registros de duración o trazas"

enunciado: "¿Cómo se descubre dónde se va el tiempo en una petición lenta?"

explicacion: |
  Hay que medir antes de optimizar.
```

### 12 — Caso lento

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "avanzado"
  tags: ["caso_lento"]

tipo: mc
opciones_explicitas: ["Fijar un tiempo máximo de espera y evaluar pasarla a segundo plano", "Esperar indefinidamente", "Quitar los registros", "Duplicar la base"]
respuesta: "Fijar un tiempo máximo de espera y evaluar pasarla a segundo plano"

enunciado: "Si la demora está en una llamada a un servicio externo, una medida razonable es..."

explicacion: |
  Así un tercero lento no cuelga al servidor.
```

### 13 — Caso lento

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "intermedio"
  tags: ["caso_lento"]

tipo: vf
respuesta: verdadero

enunciado: "El problema de las N+1 consultas puede hacer lento un endpoint que parecía simple."

explicacion: |
  Se hace una consulta por cada elemento de la lista.
```

### 14 — Caso lento

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "basico"
  tags: ["caso_lento"]

tipo: completar
enunciado: "Antes de optimizar hay que ___ dónde se pierde el tiempo."
respuestas_validas:
  - "medir"

explicacion: |
  Optimizar sin medir suele atacar el lugar equivocado.
```

### 15 — Caso token

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "intermedio"
  tags: ["caso_token"]

tipo: mc
opciones_explicitas: ["La duración del token y la hora de los servidores", "El color del botón", "El tamaño de la fuente", "El nombre de la base"]
respuesta: "La duración del token y la hora de los servidores"

enunciado: "Si las personas son desconectadas antes de lo previsto, ¿qué conviene revisar?"

explicacion: |
  Un desfase de reloj puede alterar el vencimiento.
```

### 16 — Caso token

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "avanzado"
  tags: ["caso_token"]

tipo: vf
respuesta: falso

enunciado: "Un token firmado que ya fue emitido deja de ser válido apenas se cierra la sesión, sin ninguna medida adicional."

explicacion: |
  Solo vence con su plazo; revocarlo antes requiere una lista de bloqueo o sesiones del lado del servidor.
```

### 17 — Caso token

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "intermedio"
  tags: ["caso_token"]

tipo: mc
opciones_explicitas: ["Comparar emisión, vencimiento y hora del servidor", "Cambiar la contraseña de todos", "Desinstalar el navegador", "Quitar el cifrado"]
respuesta: "Comparar emisión, vencimiento y hora del servidor"

enunciado: "¿Qué ayuda a confirmar un problema de vencimiento de token?"

explicacion: |
  Se comprueba con datos concretos.
```

### 18 — Caso cola

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "intermedio"
  tags: ["caso_cola"]

tipo: mc
opciones_explicitas: ["El estado de los workers y los errores de las tareas", "El logotipo", "La traducción de la página", "El teclado del servidor"]
respuesta: "El estado de los workers y los errores de las tareas"

enunciado: "Los correos de confirmación dejaron de salir y la cola crece. ¿Qué se revisa primero?"

explicacion: |
  Los workers pueden estar caídos o las tareas fallar siempre.
```

### 19 — Caso cola

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "intermedio"
  tags: ["caso_cola"]

tipo: mc
opciones_explicitas: ["La cola de tareas muertas", "La papelera del escritorio", "La memoria caché del navegador", "Una tabla de usuarios"]
respuesta: "La cola de tareas muertas"

enunciado: "Una tarea que falló siempre por el mismo motivo suele terminar en..."

explicacion: |
  Allí espera que alguien la revise.
```

### 20 — Caso cola

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "avanzado"
  tags: ["caso_cola"]

tipo: vf
respuesta: verdadero

enunciado: "Antes de reprocesar tareas guardadas conviene asegurarse de que sean idempotentes."

explicacion: |
  Así no se envían duplicados ni se cobra dos veces.
```

### 21 — Cierre

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "intermedio"
  tags: ["cierre"]

tipo: mc
opciones_explicitas: ["Causa raíz, cómo se detectó y qué se hará para que no se repita", "Buscar a quién culpar", "Borrar los registros", "Ignorarlo si ya funciona"]
respuesta: "Causa raíz, cómo se detectó y qué se hará para que no se repita"

enunciado: "¿Qué incluye una buena revisión posterior a un incidente?"

explicacion: |
  Se busca aprendizaje, no culpables.
```

### 22 — Cierre

```
metadata:
  materia: "backend"
  tema: "diagnostico_backend_por_casos"
  nivel: "avanzado"
  tags: ["cierre"]

tipo: mc
opciones_explicitas: ["Una alerta, una validación, un índice o una prueba automatizada", "Apagar el monitoreo", "Quitar los logs", "Subir el nivel de debug para siempre"]
respuesta: "Una alerta, una validación, un índice o una prueba automatizada"

enunciado: "¿Qué es una mejora preventiva razonable tras un incidente?"

explicacion: |
  Evita que el problema vuelva sin que nadie lo vea.
```
