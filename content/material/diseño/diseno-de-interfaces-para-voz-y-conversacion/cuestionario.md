# UX y diseño — Interfaces de voz y conversación (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una interfaz conversacional es aquella en que la interacción se da..."
tipo: mc
opciones_explicitas:
  - "Con lenguaje hablado o escrito"
  - "Solo con botones"
  - "Con luces de colores"
respuesta: "Con lenguaje hablado o escrito"

explicacion: |
  Incluye asistentes de voz y chatbots.
```

### 2 — Heurísticas

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Las heurísticas de usabilidad dejan de valer en interfaces de voz."

explicacion: |
  Siguen valiendo, aunque cambian las dificultades.
```

### 3 — Sin pantalla

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "En una interfaz de voz, ¿qué dificulta 'reconocer en lugar de recordar'?"
tipo: mc
opciones_explicitas:
  - "La persona no ve qué puede pedir"
  - "Hay demasiadas pantallas"
  - "Hay mucha luz"
respuesta: "La persona no ve qué puede pedir"

explicacion: |
  Por eso el asistente sugiere opciones.
```

### 4 — Efímera

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "La voz es 'efímera', lo que significa que..."
tipo: mc
opciones_explicitas:
  - "Desaparece apenas se dice y es difícil retener listas largas"
  - "Dura mucho"
  - "Se guarda para siempre"
respuesta: "Desaparece apenas se dice y es difícil retener listas largas"

explicacion: |
  Conviene dar pocas opciones por vez.
```

### 5 — Cantidad

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "¿Cuántas opciones conviene leer por vez en voz alta?"
tipo: mc
opciones_explicitas:
  - "Tres o cuatro"
  - "Veinte"
  - "Una sola siempre"
respuesta: "Tres o cuatro"

explicacion: |
  Y repetirlas si se piden.
```

### 6 — Reconocimiento

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un error típico de reconocimiento de voz se debe a..."
tipo: mc
opciones_explicitas:
  - "Ruido, acentos o nombres propios"
  - "El color de la carcasa"
  - "La hora"
respuesta: "Ruido, acentos o nombres propios"

explicacion: |
  Hay que prever cómo se corrige.
```

### 7 — Presentarse

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un buen asistente al comenzar debería..."
tipo: mc
opciones_explicitas:
  - "Presentarse y decir qué puede hacer"
  - "Hablar lo más rápido posible"
  - "Pedir datos sensibles"
respuesta: "Presentarse y decir qué puede hacer"

explicacion: |
  Fija expectativas.
```

### 8 — Parecer humano

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Conviene que un chatbot finja ser una persona real."

explicacion: |
  Debe avisar que es un sistema automático.
```

### 9 — Lenguaje

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "El lenguaje de un asistente debería ser..."
tipo: mc
opciones_explicitas:
  - "Natural, breve y cotidiano"
  - "Técnico y largo"
  - "En código"
respuesta: "Natural, breve y cotidiano"

explicacion: |
  Sin jerga.
```

### 10 — Confirmar

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Antes de cancelar un turno, el asistente debería..."
tipo: mc
opciones_explicitas:
  - "Confirmar la acción con la persona"
  - "Cancelar de inmediato"
  - "Preguntar el nombre del programador"
respuesta: "Confirmar la acción con la persona"

explicacion: |
  Evita errores irreversibles.
```

### 11 — Error en bucle

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Si el asistente no entiende, lo mejor es..."
tipo: mc
opciones_explicitas:
  - "Reformular o dar opciones, y tras dos fallos ofrecer otra vía"
  - "Repetir 'No entendí' indefinidamente"
  - "Cortar la comunicación"
respuesta: "Reformular o dar opciones, y tras dos fallos ofrecer otra vía"

explicacion: |
  Por ejemplo, derivar a una persona.
```

### 12 — Salida

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "La persona debería poder cancelar o pedir ayuda en cualquier momento."

explicacion: |
  Es la heurística de control y libertad.
```

### 13 — Contexto

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Mantener el contexto significa..."
tipo: mc
opciones_explicitas:
  - "Recordar lo dicho para no repetir preguntas"
  - "Olvidar todo en cada turno"
  - "Cambiar de tema"
respuesta: "Recordar lo dicho para no repetir preguntas"

explicacion: |
  Hace la conversación más natural.
```

### 14 — Tono

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El tono de un asistente debería ser..."
tipo: mc
opciones_explicitas:
  - "Coherente a lo largo de la conversación"
  - "Distinto en cada frase"
  - "Agresivo"
respuesta: "Coherente a lo largo de la conversación"

explicacion: |
  Una personalidad consistente.
```

### 15 — Accesibilidad voz

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "La voz como interfaz puede ayudar a personas con discapacidad..."
tipo: mc
opciones_explicitas:
  - "Visual o motora"
  - "Ninguna"
  - "Solo auditiva"
respuesta: "Visual o motora"

explicacion: |
  Pero deja afuera a quienes no pueden hablar o escuchar.
```

### 16 — Alternativas

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Una interfaz de voz debería ofrecer alternativas como texto o subtítulos."

explicacion: |
  Para no excluir a quienes no pueden hablar o escuchar.
```

### 17 — Acentos

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Un diseño inclusivo de voz debe considerar..."
tipo: mc
opciones_explicitas:
  - "Acentos, voces atípicas y distintos tiempos para responder"
  - "Solo un acento estándar"
  - "Que todos hablen rápido"
respuesta: "Acentos, voces atípicas y distintos tiempos para responder"

explicacion: |
  Para no discriminar.
```

### 18 — Privacidad

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un dispositivo de voz debería informar..."
tipo: mc
opciones_explicitas:
  - "Cuándo escucha, qué guarda y por cuánto tiempo"
  - "Solo su precio"
  - "El color de su luz"
respuesta: "Cuándo escucha, qué guarda y por cuánto tiempo"

explicacion: |
  Y permitir borrar el historial.
```

### 19 — Datos sensibles

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Pedir un dato sensible en voz alta puede ser un problema porque..."
tipo: mc
opciones_explicitas:
  - "Otras personas cerca pueden oírlo"
  - "Es más lento"
  - "Es ilegal siempre"
respuesta: "Otras personas cerca pueden oírlo"

explicacion: |
  Conviene ofrecer otra vía.
```

### 20 — Mago de Oz

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "La técnica del Mago de Oz consiste en..."
tipo: mc
opciones_explicitas:
  - "Una persona simula el sistema mientras otra conversa creyendo que habla con una máquina"
  - "Hacer magia en la pantalla"
  - "Usar un asistente real sin probar"
respuesta: "Una persona simula el sistema mientras otra conversa creyendo que habla con una máquina"

explicacion: |
  Permite probar diálogos antes de construir.
```

### 21 — Turnos

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "En una conversación, el sistema debe respetar los ___ de habla, sin interrumpir."
respuestas_validas:
  - "turnos"

explicacion: |
  Dejar hablar a la persona.
```

### 22 — Bucle

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Repetir 'No entendí' en bucle es una buena estrategia de error."

explicacion: |
  Frustra; hay que reformular u ofrecer opciones.
```

### 23 — Menú telefónico

```
metadata:
  materia: "diseño"
  tema: "diseno_de_interfaces_para_voz_y_conversacion"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un sistema telefónico por menú ('Para ventas, marque 1') es un ejemplo de..."
tipo: mc
opciones_explicitas:
  - "Interfaz conversacional por voz"
  - "Interfaz gráfica"
  - "Interfaz táctil"
respuesta: "Interfaz conversacional por voz"

explicacion: |
  Con opciones habladas.
```
