# Electrónica — Instrumentos de medición: multímetro y osciloscopio (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Tensión

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro"]

enunciado: "La tensión entre dos puntos se mide conectando el instrumento..."
tipo: mc
opciones_explicitas:
  - "En paralelo"
  - "En serie"
  - "Con el circuito abierto"
respuesta: "En paralelo"

explicacion: |
  Se compara el potencial entre dos puntos.
```

### 2 — Corriente

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro"]

enunciado: "La corriente de una rama se mide conectando el instrumento..."
tipo: mc
opciones_explicitas:
  - "En serie"
  - "En paralelo"
  - "Sin conectarlo"
respuesta: "En serie"

explicacion: |
  La corriente debe atravesarlo.
```

### 3 — Resistencia

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro"]

enunciado: "Para medir una resistencia se debe..."
tipo: mc
opciones_explicitas:
  - "Desconectar la alimentación"
  - "Dejar el circuito energizado"
  - "Conectar el instrumento en serie con la fuente"
respuesta: "Desconectar la alimentación"

explicacion: |
  Otros elementos y la fuente falsean la lectura.
```

### 4 — Punta negra

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro"]

enunciado: "La punta negra de un multímetro se conecta, normalmente, al borne..."
tipo: mc
opciones_explicitas:
  - "COM"
  - "De corriente"
  - "De continuidad solamente"
respuesta: "COM"

explicacion: |
  COM es el borne común.
```

### 5 — Error frecuente

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["multimetro", "errores"]

enunciado: "Dejar las puntas en la posición de corriente al medir tensión puede..."
tipo: mc
opciones_explicitas:
  - "Provocar un cortocircuito y dañar el instrumento o el circuito"
  - "No tener ningún efecto"
  - "Mejorar la medición"
respuesta: "Provocar un cortocircuito y dañar el instrumento o el circuito"

explicacion: |
  La posición de corriente casi cortocircuita.
```

### 6 — Resistencia energizada

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro", "errores"]

respuesta: falso
tipo: vf

enunciado: "Se puede medir resistencia con el circuito energizado."

explicacion: |
  Hay que desconectar la alimentación.
```

### 7 — Corriente en paralelo

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["multimetro", "errores"]

respuesta: falso
tipo: vf

enunciado: "Medir corriente conectando el instrumento en paralelo con una fuente es seguro."

explicacion: |
  Es casi un cortocircuito.
```

### 8 — Continuidad

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro"]

enunciado: "La función de continuidad suena cuando..."
tipo: mc
opciones_explicitas:
  - "Hay un camino conductor entre las puntas"
  - "Hay tensión alterna"
  - "La batería está cargada"
respuesta: "Hay un camino conductor entre las puntas"

explicacion: |
  Sirve para revisar cables y fusibles.
```

### 9 — Rango desconocido

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["multimetro"]

enunciado: "Si no se conoce el valor aproximado de lo que se mide, conviene empezar con..."
tipo: mc
opciones_explicitas:
  - "El rango más alto"
  - "El rango más bajo"
  - "Cualquier rango"
respuesta: "El rango más alto"

explicacion: |
  Y bajar de a poco.
```

### 10 — Incertidumbre

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["incertidumbre"]

enunciado: "Un resultado de medición se escribe..."
tipo: mc
opciones_explicitas:
  - "Con su incertidumbre"
  - "Sin decimales"
  - "Solo con el nombre del instrumento"
respuesta: "Con su incertidumbre"

explicacion: |
  Ninguna medición es exacta.
```

### 11 — Repetir mediciones

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["incertidumbre"]

respuesta: verdadero
tipo: vf

enunciado: "Repetir una medición ayuda a detectar errores groseros."

explicacion: |
  Los valores muy distintos delatan un error.
```

### 12 — Eje horizontal

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["osciloscopio"]

enunciado: "En la pantalla de un osciloscopio, el eje horizontal representa..."
tipo: mc
opciones_explicitas:
  - "El tiempo"
  - "La tensión"
  - "La corriente"
respuesta: "El tiempo"

explicacion: |
  El vertical es la tensión.
```

### 13 — Escala vertical

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["osciloscopio"]

enunciado: "La escala vertical se indica en..."
tipo: mc
opciones_explicitas:
  - "Voltios por división"
  - "Segundos por división"
  - "Hertz por división"
respuesta: "Voltios por división"

explicacion: |
  La base de tiempo está en s/div.
```

### 14 — Período

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["osciloscopio", "calculo"]

variables:
  div: uno_de([2, 3, 4, 5])
  esc: uno_de([1, 2, 5, 10])
  t: div * esc

respuesta: t
tipo: input
tolerancia_abs: 0.1

enunciado: "En un osciloscopio, un ciclo completo ocupa {div} divisiones horizontales y la base de tiempo es de {esc} ms por división. ¿Cuál es el período, en ms?"

pasos:
  - "T = divisiones × escala"

explicacion: |
  Se multiplica el ancho del ciclo por la escala.
```

### 15 — Frecuencia

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["osciloscopio", "calculo"]

variables:
  div: uno_de([2, 4, 5])
  esc: uno_de([1, 2, 5])
  t: div * esc
  f: redondear(1000 / t, 1)

respuesta: f
tipo: input
tolerancia_abs: 0.1

enunciado: "Un ciclo ocupa {div} divisiones y la base de tiempo es de {esc} ms por división. ¿Cuál es la frecuencia, en Hz?"

pasos:
  - "T = divisiones × escala, en ms"
  - "f = 1 / T"

explicacion: |
  La frecuencia es la inversa del período.
```

### 16 — Pico a pico

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["osciloscopio", "calculo"]

variables:
  div: uno_de([2, 3, 4, 6])
  esc: uno_de([0.5, 1, 2, 5])
  vpp: div * esc

respuesta: vpp
tipo: input
tolerancia_abs: 0.1

enunciado: "Una señal ocupa {div} divisiones verticales de pico a pico y la escala vertical es {esc} V por división. ¿Cuánto vale Vpp, en V?"

pasos:
  - "Vpp = divisiones × escala"

explicacion: |
  Se cuentan las divisiones entre el valor máximo y el mínimo.
```

### 17 — Tensión de pico

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["osciloscopio", "calculo"]

variables:
  vpp: uno_de([2, 4, 6, 10, 20])
  vp: vpp / 2

respuesta: vp
tipo: input
tolerancia_abs: 0.05

enunciado: "Una señal senoidal tiene Vpp = {vpp} V. ¿Cuánto vale su tensión de pico, en V?"

pasos:
  - "Vp = Vpp / 2"

explicacion: |
  El pico es la mitad de la tensión pico a pico.
```

### 18 — Valor eficaz

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "avanzado"
  tags: ["osciloscopio", "calculo"]

variables:
  vp: uno_de([5, 10, 12, 20, 50])
  vrms: redondear(vp / sqrt(2), 2)

respuesta: vrms
tipo: input
tolerancia_abs: 0.03

enunciado: "Una señal senoidal tiene una tensión de pico de {vp} V. ¿Cuánto vale su valor eficaz (Vrms), en V? (redondeá a dos decimales)"

pasos:
  - "Vrms = Vp / √2"

explicacion: |
  El valor eficaz de una senoide es el pico dividido √2.
```

### 19 — Frecuencia desde el período

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["osciloscopio", "calculo"]

variables:
  t: uno_de([2, 4, 5, 10, 20])
  f: redondear(1000 / t, 1)

respuesta: f
tipo: input
tolerancia_abs: 0.1

enunciado: "Una señal tiene un período de {t} ms. ¿Cuál es su frecuencia, en Hz?"

pasos:
  - "f = 1 / T"

explicacion: |
  La frecuencia es la inversa del período.
```

### 20 — Vrms y Vpp

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "avanzado"
  tags: ["osciloscopio"]

enunciado: "Para una senoide, el valor eficaz es..."
tipo: mc
opciones_explicitas:
  - "El pico dividido √2"
  - "El pico a pico"
  - "El doble del pico"
respuesta: "El pico dividido √2"

explicacion: |
  Vrms = Vp / √2.
```

### 21 — Masa del osciloscopio

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "avanzado"
  tags: ["osciloscopio", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "La masa del osciloscopio suele estar conectada a tierra, por lo que hay que conectar con cuidado su cable de masa."

explicacion: |
  Una conexión descuidada puede crear un cortocircuito.
```

### 22 — Seguridad

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["seguridad"]

enunciado: "Para trabajos con la red eléctrica conviene..."
tipo: mc
opciones_explicitas:
  - "Respetar la categoría y tensión máxima del instrumento"
  - "Usar cualquier instrumento"
  - "Tocar las partes metálicas de las puntas"
respuesta: "Respetar la categoría y tensión máxima del instrumento"

explicacion: |
  Y usar puntas en buen estado.
```

### 23 — Instrumento de uso general

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro", "vocabulario"]

tipo: completar
enunciado: "El instrumento que mide tensión, corriente y resistencia con un solo aparato se llama ___."
respuestas_validas:
  - "multímetro"
  - "multimetro"
  - "tester"

explicacion: |
  También se lo llama tester.
```
