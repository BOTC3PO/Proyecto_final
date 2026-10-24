# Historia — Línea de tiempo y antes/después (cuestionario, 20 preguntas VBLang)

> Tema: `T1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una línea de tiempo

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "basico"
  tags: ["linea_de_tiempo", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una línea de tiempo es una representación gráfica donde los hechos se ordenan según el momento en que ocurrieron."

pasos:
  - "El eje representa el paso del tiempo, y cada hecho se ubica en el punto que le corresponde."

explicacion: |
  Verdadero: es la definición central de línea de tiempo.
```

### 2 — Ordenar dos hechos sin saber el año exacto

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "basico"
  tags: ["antes_despues"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Se puede afirmar que \"la Revolución de Mayo fue antes que la Declaración de la Independencia\" sin necesitar saber el año exacto de ninguno de los dos hechos."

pasos:
  - "El orden temporal (antes/después) es una habilidad más básica que fechar con precisión."

explicacion: |
  Verdadero: es la habilidad más elemental del pensamiento histórico.
```

### 3 — Identificar cuál ocurrió antes

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "basico"
  tags: ["antes_despues", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "la Revolución de Mayo"
tipo: mc
opciones_explicitas: ["la Revolución de Mayo", "la Declaración de la Independencia"]

enunciado: "Entre \"la Revolución de Mayo\" (1810) y \"la Declaración de la Independencia\" (1816), ¿cuál ocurrió antes?"

pasos:
  - "Comparar los años para determinar el orden temporal."

explicacion: |
  1810 es anterior a 1816, por lo tanto la Revolución de Mayo ocurrió
  antes.
```

### 4 — Qué es la simultaneidad histórica

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["simultaneidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dos hechos pueden ser simultáneos (ocurrir en el mismo período), incluso en lugares muy distintos del mundo."

pasos:
  - "Reconocer la simultaneidad ayuda a entender que la historia no es una sola línea de sucesos."

explicacion: |
  Verdadero: es la definición central de simultaneidad en historia.
```

### 5 — La historia no es un solo proceso lineal

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["simultaneidad", "multiples_procesos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Reconocer la simultaneidad ayuda a entender que la historia es muchos procesos ocurriendo en paralelo en distintas regiones, no una sola línea de sucesos."

pasos:
  - "Es la conclusión central de por qué la simultaneidad es un concepto importante."

explicacion: |
  Verdadero: es la razón por la que la simultaneidad enriquece la
  comprensión histórica.
```

### 6 — Qué es la duración

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["duracion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Además de indicar qué pasó antes y después, una línea de tiempo permite ver cuánto tiempo (la duración) separa a dos hechos."

pasos:
  - "Un intervalo corto se ve distinto en la línea que uno largo, aunque ambos sean técnicamente \"antes y después\"."

explicacion: |
  Verdadero: la duración es otra dimensión que aporta una línea de
  tiempo, además del orden.
```

### 7 — Intervalos cortos vs. largos en la línea de tiempo

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["duracion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dos hechos separados por 5 años se representan más cerca entre sí en una línea de tiempo que dos hechos separados por 300 años."

pasos:
  - "La distancia visual en la línea refleja la duración real del intervalo temporal."

explicacion: |
  Verdadero: es la aplicación práctica de cómo se representa la
  duración en una línea de tiempo.
```

### 8 — Una línea de tiempo muestra relaciones que un listado no muestra

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["linea_de_tiempo", "utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ordenar hechos visualmente en una línea de tiempo hace evidentes relaciones que un listado de fechas sueltas no muestra, como qué hechos son cercanos entre sí."

pasos:
  - "Es la razón central de por qué la línea de tiempo es una herramienta útil, más allá de memorizar fechas."

explicacion: |
  Verdadero: es la conclusión central sobre la utilidad de este
  recurso visual.
```

### 9 — Vacíos en el registro histórico

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["linea_de_tiempo", "vacios"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una línea de tiempo puede mostrar dónde hay \"vacíos\" en el registro histórico disponible, es decir, períodos sin hechos documentados."

pasos:
  - "Es otra utilidad de la representación visual sobre un simple listado de fechas."

explicacion: |
  Verdadero: los vacíos temporales son otra información que revela
  la línea de tiempo, más allá del orden y la duración.
```

### 10 — El eje de una línea de tiempo representa el tiempo

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "basico"
  tags: ["linea_de_tiempo", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En una línea de tiempo, el eje horizontal (o vertical) representa el paso del tiempo, no otra magnitud."

pasos:
  - "Cada hecho se ubica en el punto del eje que corresponde a su momento de ocurrencia."

explicacion: |
  Verdadero: es la estructura básica de cualquier línea de tiempo.
```

### 11 — Ordenar tres hechos en una línea de tiempo

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["antes_despues", "practica"]

enunciado: "Ordená estos tres hechos de más antiguo a más reciente: Independencia Argentina (1816), llegada de Colón a América (1492), Segunda Guerra Mundial (1939-1945)."
tipo: ordenar
opciones_explicitas:
  - "Llegada de Colón a América (1492)"
  - "Independencia Argentina (1816)"
  - "Segunda Guerra Mundial (1939-1945)"
respuesta_orden: ["Llegada de Colón a América (1492)", "Independencia Argentina (1816)", "Segunda Guerra Mundial (1939-1945)"]
explicacion: |
  El orden sigue estrictamente la cronología de los años en que
  ocurrió cada hecho.
```

### 12 — Simultaneidad en distintos continentes

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["simultaneidad", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Mientras en América ocurrían las guerras de independencia a principios del siglo XIX, en Europa se desarrollaban procesos históricos propios de esa misma época: son hechos simultáneos en regiones distintas."

pasos:
  - "Es un ejemplo concreto de simultaneidad entre procesos históricos en distintas regiones del mundo."

explicacion: |
  Verdadero: es la aplicación práctica del concepto de simultaneidad
  a un caso histórico real.
```

### 13 — Antes/después no requiere fecha exacta

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["antes_despues"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Para poder decir que un hecho ocurrió \"antes\" que otro, es imprescindible conocer el año exacto de ambos hechos."

pasos:
  - "Se puede establecer el orden relativo (antes/después) con información parcial, sin necesitar fechas exactas."

explicacion: |
  Falso: el orden relativo antes/después es una habilidad más básica
  que no siempre requiere fechas precisas.
```

### 14 — Comparar duración de dos intervalos

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["duracion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "el intervalo entre 1810 y 1816"
tipo: mc
opciones_explicitas: ["el intervalo entre 1810 y 1816", "el intervalo entre 1500 y 1800"]

enunciado: "¿Cuál de estos dos intervalos de tiempo es más corto?"

pasos:
  - "1810 a 1816 son 6 años; 1500 a 1800 son 300 años."

explicacion: |
  Comparar la duración de distintos intervalos es una aplicación
  directa de este concepto.
```

### 15 — La línea de tiempo es prerrequisito de unidades más precisas

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin poder ordenar hechos en el tiempo, no se puede avanzar hacia unidades más precisas como década, siglo o milenio."

pasos:
  - "Ver `../decada-siglo-milenio/`: es el tema siguiente de la cadena de pensamiento histórico."

explicacion: |
  Verdadero: por eso este tema es el prerrequisito directo del
  siguiente en la cadena.
```

### 16 — La línea de tiempo también es base de causa y consecuencia

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["causa_y_consecuencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Saber qué pasó antes y qué pasó después es una condición necesaria (aunque no suficiente) para poder analizar relaciones de causa y consecuencia entre hechos históricos."

pasos:
  - "Una causa siempre tiene que ocurrir antes que su consecuencia en el tiempo."

explicacion: |
  Verdadero: el orden temporal es la base sobre la que se construyen
  herramientas de análisis histórico más complejas, más adelante en
  la cadena.
```

### 17 — Distinguir orden de causalidad

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["antes_despues", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Si un hecho A ocurrió antes que un hecho B, eso significa automáticamente que A causó B."

pasos:
  - "El orden temporal (antes/después) es necesario pero no suficiente para afirmar una relación de causa: dos hechos pueden ser antes/después sin que uno cause al otro."

explicacion: |
  Falso: el orden temporal es la base, pero establecer causalidad
  requiere un análisis adicional, que es el tema de más adelante en
  la cadena.
```

### 18 — Reconocer el eje temporal en una representación

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "basico"
  tags: ["linea_de_tiempo", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En una línea de tiempo horizontal, un hecho ubicado más a la derecha ocurrió después que un hecho ubicado más a la izquierda (siguiendo la convención habitual de izquierda=pasado, derecha=presente)."

pasos:
  - "Es la convención estándar de lectura de una línea de tiempo horizontal."

explicacion: |
  Verdadero: es la convención de lectura habitual de una línea de
  tiempo horizontal.
```

### 19 — Ordenar el proceso para construir una línea de tiempo

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["linea_de_tiempo", "metodo"]

enunciado: "Ordená los pasos para construir una línea de tiempo con varios hechos históricos."
tipo: ordenar
opciones_explicitas:
  - "Reunir los hechos que se quieren representar"
  - "Determinar el orden relativo (antes/después) entre todos ellos"
  - "Ubicar cada hecho en el eje según su momento, respetando la duración de los intervalos"
  - "Revisar si hay hechos simultáneos que deban marcarse en el mismo punto del eje"
respuesta_orden: ["Reunir los hechos que se quieren representar", "Determinar el orden relativo (antes/después) entre todos ellos", "Ubicar cada hecho en el eje según su momento, respetando la duración de los intervalos", "Revisar si hay hechos simultáneos que deban marcarse en el mismo punto del eje"]
explicacion: |
  El proceso va de reunir los hechos a ordenarlos y ubicarlos
  correctamente en el eje temporal.
```

### 20 — Aplicación: ubicar hechos familiares en una línea de tiempo

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["linea_de_tiempo", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de estudiar un período histórico complejo, puede ayudar armar primero una línea de tiempo simple con los hechos principales, para tener claro el orden y la duración antes de profundizar en las causas."

pasos:
  - "Es la aplicación práctica directa de este tema como estrategia de estudio."

explicacion: |
  Verdadero: es la aplicación concreta de este tema como herramienta
  de estudio de cualquier período histórico.
```
