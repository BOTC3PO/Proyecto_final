# Automatizacion — Modelado de sistemas dinámicos de primer orden (cuestionario, 23 preguntas VBLang)

> Tema: `automatizacion/modelado-de-sistemas-dinamicos-primer-orden`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Qué es un modelo de un sistema para control

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué es un modelo de un sistema para control?"
tipo: mc
opciones_explicitas:
  - "Una descripción matemática de cómo responde la salida a cambios en la entrada"
  - "Una maqueta a escala del equipo físico"
  - "El plano eléctrico del tablero"
  - "El manual de operación del fabricante"
respuesta: "Una descripción matemática de cómo responde la salida a cambios en la entrada"

explicacion: |
  Permite predecir y simular antes de actuar sobre la planta.
```

### 2 — ¿Qué rasgo distingue la respuesta de un sistema de primer or

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué rasgo distingue la respuesta de un sistema de primer orden?"
tipo: mc
opciones_explicitas:
  - "La salida se acerca de a poco al valor final, cada vez más lento"
  - "La salida oscila alrededor del valor final"
  - "La salida salta al valor final de inmediato"
  - "La salida crece sin límite"
respuesta: "La salida se acerca de a poco al valor final, cada vez más lento"

explicacion: |
  No hay oscilación: es un acercamiento exponencial.
```

### 3 — ¿Qué mide la ganancia estática K

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué mide la ganancia estática K?"
tipo: mc
opciones_explicitas:
  - "Cuánto cambia la salida final por cada unidad que cambia la entrada"
  - "Qué tan rápido responde el sistema"
  - "El tiempo hasta el 63 %"
  - "El error del sensor"
respuesta: "Cuánto cambia la salida final por cada unidad que cambia la entrada"

explicacion: |
  K relaciona valores finales; la rapidez la da la constante de tiempo.
```

### 4 — ¿Qué mide la constante de tiempo tau

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué mide la constante de tiempo tau?"
tipo: mc
opciones_explicitas:
  - "Qué tan rápido responde el sistema"
  - "La ganancia en régimen permanente"
  - "El tamaño del escalón"
  - "El ruido de la medición"
respuesta: "Qué tan rápido responde el sistema"

explicacion: |
  Es el tiempo que la salida tarda en llegar a cerca del 63 % de su cambio final.
```

### 5 — Un sistema con tau chico es...

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

enunciado: "Un sistema con tau chico es..."
tipo: mc
opciones_explicitas:
  - "Rápido"
  - "Lento"
  - "Inestable"
  - "Oscilante"
respuesta: "Rápido"

explicacion: |
  A menor constante de tiempo, más veloz la respuesta.
```

### 6 — ¿Qué porcentaje del valor final alcanza la salida en t = tau

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué porcentaje del valor final alcanza la salida en t = tau?"
tipo: mc
opciones_explicitas:
  - "Alrededor del 63 %"
  - "Alrededor del 50 %"
  - "Alrededor del 90 %"
  - "El 100 %"
respuesta: "Alrededor del 63 %"

explicacion: |
  1 − e^(−1) es aproximadamente 0,632.
```

### 7 — ¿Aproximadamente qué porcentaje alcanza en t = 3 tau

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Aproximadamente qué porcentaje alcanza en t = 3 tau?"
tipo: mc
opciones_explicitas:
  - "Alrededor del 95 %"
  - "Alrededor del 63 %"
  - "El 100 % exacto"
  - "Alrededor del 75 %"
respuesta: "Alrededor del 95 %"

explicacion: |
  1 − e^(−3) es aproximadamente 0,95.
```

### 8 — ¿Cuándo se suele considerar que el sistema se estabilizó

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Cuándo se suele considerar que el sistema se estabilizó?"
tipo: mc
opciones_explicitas:
  - "Después de unas 4 a 5 constantes de tiempo"
  - "Después de 1 constante de tiempo"
  - "Apenas empieza el escalón"
  - "Nunca, porque llega exactamente al valor final"
respuesta: "Después de unas 4 a 5 constantes de tiempo"

explicacion: |
  A los 4 tau la salida está cerca del 98 % del valor final.
```

### 9 — Se aplica un escalón y la salida termina variando 80 unidade

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "Se aplica un escalón y la salida termina variando 80 unidades. ¿En qué momento llega a 50,4?"
tipo: mc
opciones_explicitas:
  - "En t = tau"
  - "En t = 2 tau"
  - "En t = 0"
  - "Nunca"
respuesta: "En t = tau"

explicacion: |
  50,4 es el 63 % de 80, el valor que corresponde a t = tau.
```

### 10 — ¿Cómo se obtiene K de un ensayo al escalón

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Cómo se obtiene K de un ensayo al escalón?"
tipo: mc
opciones_explicitas:
  - "Dividiendo el cambio final de la salida por el tamaño del escalón"
  - "Midiendo la pendiente final"
  - "Multiplicando el tiempo por el valor inicial"
  - "Sumando entrada y salida"
respuesta: "Dividiendo el cambio final de la salida por el tamaño del escalón"

explicacion: |
  K es salida final dividida entrada final, ambas medidas como variación.
```

### 11 — ¿Cuál de estos procesos se aproxima a un sistema de primer o

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Cuál de estos procesos se aproxima a un sistema de primer orden?"
tipo: mc
opciones_explicitas:
  - "El calentamiento de agua en un termotanque con potencia fija"
  - "Un péndulo sin rozamiento"
  - "Una cuerda de guitarra vibrando"
  - "Una resonancia mecánica"
respuesta: "El calentamiento de agua en un termotanque con potencia fija"

explicacion: |
  El agua se acerca gradualmente a una temperatura final sin oscilar.
```

### 12 — Si K es grande, una pequeña variación de entrada...

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "avanzado"
  tags: ["modelado", "primer_orden"]

enunciado: "Si K es grande, una pequeña variación de entrada..."
tipo: mc
opciones_explicitas:
  - "Produce un cambio grande de salida"
  - "No produce cambio"
  - "Produce oscilaciones"
  - "Hace al sistema más lento"
respuesta: "Produce un cambio grande de salida"

explicacion: |
  K amplifica: conviene un controlador menos agresivo.
```

### 13 — ¿Qué límite tiene el modelo de primer orden

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "avanzado"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué límite tiene el modelo de primer orden?"
tipo: mc
opciones_explicitas:
  - "Es una aproximación válida alrededor de un punto de trabajo"
  - "Solo sirve en laboratorio"
  - "No admite escalones"
  - "Solo describe sistemas eléctricos"
respuesta: "Es una aproximación válida alrededor de un punto de trabajo"

explicacion: |
  Los procesos con inercia, oscilación o retardo largo necesitan modelos de mayor orden.
```

### 14 — En un sistema de primer orden la salida llega exactamente al

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

respuesta: falso
tipo: vf

enunciado: "En un sistema de primer orden la salida llega exactamente al valor final en un tiempo finito."

explicacion: |
  Solo se acerca de manera asintótica; en la práctica se habla de 4 a 5 tau.
```

### 15 — Un escalón consiste en cambiar la entrada de golpe de un val

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

respuesta: verdadero
tipo: vf

enunciado: "Un escalón consiste en cambiar la entrada de golpe de un valor a otro."

explicacion: |
  Es la prueba más usada para identificar un sistema.
```

### 16 — Un sistema con constante de tiempo de 10 minutos responde má

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

respuesta: falso
tipo: vf

enunciado: "Un sistema con constante de tiempo de 10 minutos responde más rápido que uno de 2 minutos."

explicacion: |
  Mayor constante de tiempo significa respuesta más lenta.
```

### 17 — Modelar un proceso permite probar el controlador en simulaci

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

respuesta: verdadero
tipo: vf

enunciado: "Modelar un proceso permite probar el controlador en simulación antes de usarlo en la planta."

explicacion: |
  Es una de las ventajas principales del modelo.
```

### 18 — La respuesta de un sistema de primer orden a un escalón se a

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

tipo: completar
enunciado: "La respuesta de un sistema de primer orden a un escalón se aproxima al valor final de forma ___ (lineal / exponencial)."
respuestas_validas:
  - "exponencial"

explicacion: |
  La curva es y = K·U·(1 − e^(−t/τ)).
```

### 19 — La constante de tiempo se mide en unidades de ___ (tiempo /

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

tipo: completar
enunciado: "La constante de tiempo se mide en unidades de ___ (tiempo / temperatura)."
respuestas_validas:
  - "tiempo"

explicacion: |
  Se expresa en segundos, minutos u horas según el proceso.
```

### 20 — Un proceso tiene ganancia K = {K} y recibe un escalón de {U}

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

variables:
  K: random(2, 6)
  U: random(1, 10)

respuesta: K * U
tipo: input
tolerancia_abs: 0.1

enunciado: "Un proceso tiene ganancia K = {K} y recibe un escalón de {U} unidades. ¿Cuál es el valor final de la salida?"

pasos:
  - "Valor final = K · U"

explicacion: |
  En régimen permanente la salida vale K por el tamaño del escalón.
```

### 21 — Un sistema de primer orden con K = {K} recibe un escalón de

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "avanzado"
  tags: ["modelado", "primer_orden"]

variables:
  K: random(2, 6)
  U: random(1, 10)
  n: uno_de([1, 2, 3])

respuesta: redondear(K * U * (1 - e^(-n)), 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Un sistema de primer orden con K = {K} recibe un escalón de {U}. ¿Cuánto vale la salida cuando t = {n} tau? (redondeá a un decimal)"

pasos:
  - "y = K · U · (1 − e^(−t/τ)) con t/τ = {n}"

explicacion: |
  Se reemplaza el valor de t/tau en la fórmula de la respuesta al escalón.
```

### 22 — Al aumentar la entrada en {du} unidades, la salida terminó s

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

variables:
  dy: random(20, 90)
  du: random(2, 10)

respuesta: redondear(dy / du, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Al aumentar la entrada en {du} unidades, la salida terminó subiendo {dy} unidades. ¿Cuánto vale la ganancia K? (redondeá a un decimal)"

pasos:
  - "K = cambio final de salida / cambio de entrada"

explicacion: |
  K es el cociente entre los cambios finales.
```

### 23 — La salida de un sistema de primer orden cambia finalmente {y

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

variables:
  yf: random(40, 120)

respuesta: redondear(0.632 * yf, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "La salida de un sistema de primer orden cambia finalmente {yf} unidades. ¿Cuánto vale el cambio en t = tau? (usá 63,2 %, redondeá a un decimal)"

pasos:
  - "En t = tau la salida llega al 63,2 % del cambio final"

explicacion: |
  El 63,2 % es 1 − e^(−1).
```
