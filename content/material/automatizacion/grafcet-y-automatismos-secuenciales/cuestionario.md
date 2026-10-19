# Automatizacion — GRAFCET y automatismos secuenciales (cuestionario, 23 preguntas VBLang)

> Tema: `automatizacion/grafcet-y-automatismos-secuenciales`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Qué es el GRAFCET

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Qué es el GRAFCET?"
tipo: mc
opciones_explicitas:
  - "Un método gráfico para describir automatismos secuenciales"
  - "Un lenguaje de bases de datos"
  - "Un tipo de motor"
  - "Un protocolo de red"
respuesta: "Un método gráfico para describir automatismos secuenciales"

explicacion: |
  Está normalizado en la IEC 60848.
```

### 2 — ¿Cómo se dibuja una etapa

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Cómo se dibuja una etapa?"
tipo: mc
opciones_explicitas:
  - "Como un cuadrado con un número"
  - "Como un círculo"
  - "Como una barra"
  - "Como un triángulo"
respuesta: "Como un cuadrado con un número"

explicacion: |
  La inicial lleva un cuadrado doble.
```

### 3 — ¿Cómo se dibuja la etapa inicial

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Cómo se dibuja la etapa inicial?"
tipo: mc
opciones_explicitas:
  - "Con un cuadrado doble"
  - "Con un círculo"
  - "Sin número"
  - "Con una barra"
respuesta: "Con un cuadrado doble"

explicacion: |
  Es el estado de arranque.
```

### 4 — Una transición se representa como...

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

enunciado: "Una transición se representa como..."
tipo: mc
opciones_explicitas:
  - "Una barrita transversal sobre el enlace"
  - "Un cuadrado"
  - "Un rectángulo con texto"
  - "Una flecha doble"
respuesta: "Una barrita transversal sobre el enlace"

explicacion: |
  A su lado se escribe la receptividad.
```

### 5 — La receptividad es...

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "La receptividad es..."
tipo: mc
opciones_explicitas:
  - "La condición lógica que debe cumplirse para franquear una transición"
  - "La acción de una etapa"
  - "El nombre del PLC"
  - "Un tipo de sensor"
respuesta: "La condición lógica que debe cumplirse para franquear una transición"

explicacion: |
  Por ejemplo un sensor en 1 o un tiempo cumplido.
```

### 6 — Las acciones de una etapa se ejecutan...

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "Las acciones de una etapa se ejecutan..."
tipo: mc
opciones_explicitas:
  - "Mientras la etapa está activa"
  - "Siempre"
  - "Nunca"
  - "Solo en la etapa inicial"
respuesta: "Mientras la etapa está activa"

explicacion: |
  Se escriben en un rectángulo pegado a la etapa.
```

### 7 — Una transición está habilitada cuando...

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "Una transición está habilitada cuando..."
tipo: mc
opciones_explicitas:
  - "Todas las etapas que la preceden están activas"
  - "Su receptividad es falsa"
  - "El PLC está apagado"
  - "Siempre"
respuesta: "Todas las etapas que la preceden están activas"

explicacion: |
  Para franquear además debe cumplirse la receptividad.
```

### 8 — Al franquearse una transición...

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "Al franquearse una transición..."
tipo: mc
opciones_explicitas:
  - "Se activan las etapas siguientes y se desactivan las anteriores"
  - "No cambia nada"
  - "Se reinicia el PLC"
  - "Se activan solo las anteriores"
respuesta: "Se activan las etapas siguientes y se desactivan las anteriores"

explicacion: |
  Es la regla de evolución.
```

### 9 — ¿Qué pasa si una etapa debe activarse y desactivarse a la ve

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "avanzado"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Qué pasa si una etapa debe activarse y desactivarse a la vez?"
tipo: mc
opciones_explicitas:
  - "Prevalece la activación"
  - "Prevalece la desactivación"
  - "Se produce un error siempre"
  - "Se ignoran ambas"
respuesta: "Prevalece la activación"

explicacion: |
  Es la quinta regla de evolución.
```

### 10 — Una divergencia en O permite...

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "Una divergencia en O permite..."
tipo: mc
opciones_explicitas:
  - "Elegir uno de varios caminos según las condiciones"
  - "Que todas las ramas avancen a la vez"
  - "Repetir el programa"
  - "Apagar el sistema"
respuesta: "Elegir uno de varios caminos según las condiciones"

explicacion: |
  Por ejemplo clasificar piezas.
```

### 11 — Una divergencia en Y se usa para...

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

enunciado: "Una divergencia en Y se usa para..."
tipo: mc
opciones_explicitas:
  - "Que varias ramas avancen en paralelo"
  - "Elegir un camino"
  - "Detener la secuencia"
  - "Medir tiempos"
respuesta: "Que varias ramas avancen en paralelo"

explicacion: |
  Luego se esperan entre sí.
```

### 12 — ¿Cuál es el equivalente del GRAFCET en la IEC 61131-3

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "avanzado"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Cuál es el equivalente del GRAFCET en la IEC 61131-3?"
tipo: mc
opciones_explicitas:
  - "El diagrama funcional secuencial (SFC)"
  - "El ladder"
  - "El texto estructurado"
  - "La lista de instrucciones"
respuesta: "El diagrama funcional secuencial (SFC)"

explicacion: |
  Permite programar directamente secuencias en el PLC.
```

### 13 — Para traducir un GRAFCET a ladder se suele usar...

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "avanzado"
  tags: ["grafcet", "secuencias"]

enunciado: "Para traducir un GRAFCET a ladder se suele usar..."
tipo: mc
opciones_explicitas:
  - "Un bit interno por cada etapa"
  - "Un cable por transición"
  - "Un PLC por etapa"
  - "Ningún bit"
respuesta: "Un bit interno por cada etapa"

explicacion: |
  Se activa al franquearse la transición anterior.
```

### 14 — ¿Por qué conviene agregar tiempos de vigilancia (timeouts)

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "avanzado"
  tags: ["grafcet", "secuencias"]

enunciado: "¿Por qué conviene agregar tiempos de vigilancia (timeouts)?"
tipo: mc
opciones_explicitas:
  - "Para evitar que una condición que nunca se cumple bloquee la secuencia"
  - "Para gastar tiempo"
  - "Para ahorrar cables"
  - "Para cambiar de lenguaje"
respuesta: "Para evitar que una condición que nunca se cumple bloquee la secuencia"

explicacion: |
  Permiten detectar fallas.
```

### 15 — El GRAFCET nació en Francia.

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

respuesta: verdadero
tipo: vf

enunciado: "El GRAFCET nació en Francia."

explicacion: |
  Su nombre es el acrónimo francés.
```

### 16 — Dibujar el esquema permite verificar con el cliente el compo

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

respuesta: verdadero
tipo: vf

enunciado: "Dibujar el esquema permite verificar con el cliente el comportamiento antes de programar."

explicacion: |
  Es una de sus ventajas.
```

### 17 — En una secuencia única hay bifurcaciones obligatorias.

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

respuesta: falso
tipo: vf

enunciado: "En una secuencia única hay bifurcaciones obligatorias."

explicacion: |
  Es una etapa detrás de otra, sin bifurcaciones.
```

### 18 — Una acción se ejecuta aunque su etapa no esté activa.

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

respuesta: falso
tipo: vf

enunciado: "Una acción se ejecuta aunque su etapa no esté activa."

explicacion: |
  Solo mientras la etapa está activa.
```

### 19 — En el GRAFCET, la condición asociada a una transición se lla

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

tipo: completar
enunciado: "En el GRAFCET, la condición asociada a una transición se llama ___ (receptividad / acción)."
respuestas_validas:
  - "receptividad"

explicacion: |
  Es lo que se evalúa para franquear.
```

### 20 — La norma que normaliza el GRAFCET es la IEC ___.

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

tipo: completar
enunciado: "La norma que normaliza el GRAFCET es la IEC ___."
respuestas_validas:
  - 60848

explicacion: |
  Es la norma del lenguaje de especificación.
```

### 21 — Una secuencia única tiene {n} etapas (incluida la inicial) s

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

variables:
  n: random(4, 9)

respuesta: n - 1
tipo: input
tolerancia_abs: 0

enunciado: "Una secuencia única tiene {n} etapas (incluida la inicial) sin ramas ni repeticiones. ¿Cuántas transiciones tiene hasta la última etapa?"

pasos:
  - "Transiciones = etapas − 1"

explicacion: |
  Entre cada par consecutivo de etapas hay una transición.
```

### 22 — En una secuencia, la etapa 1 dura {t1} s, la 2 dura {t2} s y

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "basico"
  tags: ["grafcet", "secuencias"]

variables:
  t1: random(1, 4)
  t2: random(1, 4)
  t3: random(1, 4)

respuesta: t1 + t2 + t3
tipo: input
tolerancia_abs: 0

enunciado: "En una secuencia, la etapa 1 dura {t1} s, la 2 dura {t2} s y la 3 dura {t3} s. ¿Cuántos segundos dura el ciclo completo (sin contar el reposo)?"

pasos:
  - "Se suman las duraciones de las etapas"

explicacion: |
  Cada etapa se activa a continuación de la anterior.
```

### 23 — Un ciclo de una estampadora dura {seg} s. ¿Cuántos segundos

```
metadata:
  materia: "automatizacion"
  tema: "grafcet_y_automatismos_secuenciales"
  nivel: "intermedio"
  tags: ["grafcet", "secuencias"]

variables:
  ciclos: random(10, 60)
  seg: random(5, 20)

respuesta: ciclos * seg
tipo: input
tolerancia_abs: 0

enunciado: "Un ciclo de una estampadora dura {seg} s. ¿Cuántos segundos tardan {ciclos} ciclos seguidos?"

pasos:
  - "Tiempo total = ciclos · duración del ciclo"

explicacion: |
  Producto de ambos valores.
```
