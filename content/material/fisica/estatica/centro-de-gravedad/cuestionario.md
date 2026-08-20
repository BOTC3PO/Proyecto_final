# Física — Estática: centro de gravedad (cuestionario, 21 preguntas VBLang)

> Tema: `EST1b`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el centro de gravedad

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué es el centro de gravedad de un cuerpo?"
tipo: mc
opciones_explicitas:
  - "El punto en el que se puede considerar concentrado todo el peso del cuerpo, para calcular momentos y equilibrio"
  - "El punto más pesado del cuerpo"
  - "El punto donde se mide la temperatura del cuerpo"
respuesta: "El punto en el que se puede considerar concentrado todo el peso del cuerpo, para calcular momentos y equilibrio"

explicacion: |
  Es una simplificación útil: en vez de sumar el peso de cada
  partícula del cuerpo, se trabaja como si todo el peso actuara en un
  solo punto.
```

### 2 — Cuerpos simétricos y uniformes

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "En un cuerpo uniforme y simétrico (una esfera maciza, un cubo, una regla homogénea), el centro de gravedad coincide con el centro geométrico de la figura."

explicacion: |
  La simetría hace que el promedio ponderado por masa caiga
  exactamente en el centro geométrico.
```

### 3 — Completar: promedio ponderado

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: el centro de gravedad de un cuerpo compuesto de varias partes es un promedio de sus posiciones, ponderado por la ___ de cada parte."
respuestas_validas:
  - "masa"

explicacion: |
  x_cg = (m₁×x₁ + m₂×x₂) / (m₁ + m₂) — cada posición pesa según su
  masa en el promedio.
```

### 4 — Problema: centro de gravedad de dos masas

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(2, 10)
  x1: random(0, 3)
  m2: random(2, 10)
  x2: random(4, 8)

respuesta: redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "Dos masas puntuales están sobre una misma línea: {m1} kg en la posición x={x1} m, y {m2} kg en la posición x={x2} m. ¿En qué posición está el centro de gravedad del sistema?"

pasos:
  - "x_cg = (m₁×x₁ + m₂×x₂) / (m₁+m₂) = ({m1}×{x1} + {m2}×{x2}) / ({m1}+{m2}) = {redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)} m"

explicacion: |
  Queda entre las dos posiciones, más cerca de la masa mayor.
```

### 5 — Con masas iguales, el CG está en el punto medio

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos masas puntuales son iguales, el centro de gravedad del sistema está exactamente en el punto medio entre ambas."

explicacion: |
  Con m₁=m₂, el promedio ponderado se reduce al promedio simple de las
  posiciones.
```

### 6 — El CG se corre hacia la masa mayor

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si una de las dos masas es mayor que la otra, el centro de gravedad del sistema queda más cerca de la masa mayor."

explicacion: |
  El promedio ponderado "atrae" el resultado hacia el valor con más
  peso en el promedio.
```

### 7 — Diferencia entre centro de gravedad y centro de masa

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "vocabulario"]

enunciado: "En la superficie de la Tierra, para un objeto de tamaño cotidiano, ¿cómo se relacionan el centro de gravedad y el centro de masa?"
tipo: mc
opciones_explicitas:
  - "Son prácticamente el mismo punto, porque el campo gravitatorio es uniforme a esa escala"
  - "Siempre son puntos completamente distintos"
  - "El centro de masa no existe, sólo el centro de gravedad"
respuesta: "Son prácticamente el mismo punto, porque el campo gravitatorio es uniforme a esa escala"

explicacion: |
  Sólo se distinguen en campos gravitatorios no uniformes (masas y
  distancias astronómicas), fuera del alcance de este módulo.
```

### 8 — Qué determina si un objeto se vuelca

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

enunciado: "¿Qué determina si un cuerpo apoyado se vuelca o se mantiene en pie?"
tipo: mc
opciones_explicitas:
  - "Si su centro de gravedad queda dentro o fuera de la base de apoyo"
  - "Sólo el peso total del cuerpo"
  - "Sólo la altura del cuerpo, sin importar nada más"
respuesta: "Si su centro de gravedad queda dentro o fuera de la base de apoyo"

explicacion: |
  Si el centro de gravedad se corre fuera de la zona de apoyo, el
  cuerpo pierde el equilibrio y se vuelca.
```

### 9 — Base de apoyo más ancha, más estable

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Para un mismo centro de gravedad, un objeto con base de apoyo más ancha es más estable (más difícil de volcar)."

explicacion: |
  Una base más ancha da más margen antes de que el centro de gravedad
  se salga de ella.
```

### 10 — Centro de gravedad más bajo, más estable

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Para una misma base de apoyo, un objeto con el centro de gravedad más bajo es más estable."

explicacion: |
  Con el centro de gravedad más bajo, hace falta inclinar mucho más el
  objeto para que se salga de la base de apoyo.
```

### 11 — Aplicación real: autos de carrera bajos

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Por qué los autos de carrera se diseñan tan bajos, casi pegados al piso?"
tipo: mc
opciones_explicitas:
  - "Para mantener el centro de gravedad bajo y reducir el riesgo de vuelco en curvas a alta velocidad"
  - "Para que pesen menos"
  - "Sólo por estética, no tiene relación con la física"
respuesta: "Para mantener el centro de gravedad bajo y reducir el riesgo de vuelco en curvas a alta velocidad"

explicacion: |
  Combinado con la fuerza centrípeta de la curva
  (`../../movimiento-circular-y-fuerza-centripeta/`), un centro de
  gravedad bajo reduce mucho el riesgo de que el auto se vuelque.
```

### 12 — Aplicación real: contrapesos de una grúa

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Para qué sirven los contrapesos que tienen las grúas de construcción?"
tipo: mc
opciones_explicitas:
  - "Para mantener el centro de gravedad del sistema (grúa + carga) dentro de la base de apoyo, evitando que se vuelque al levantar peso"
  - "Para que la grúa sea más rápida"
  - "Sólo decoran la estructura, no afectan el equilibrio"
respuesta: "Para mantener el centro de gravedad del sistema (grúa + carga) dentro de la base de apoyo, evitando que se vuelque al levantar peso"

explicacion: |
  Al levantar una carga pesada de un lado, el contrapeso del otro lado
  compensa para que el centro de gravedad conjunto siga dentro de la
  base.
```

### 13 — Ordenar: hallar el CG de forma experimental

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "ordenar"]

enunciado: "Ordená los pasos para encontrar experimentalmente el centro de gravedad de un objeto irregular colgándolo."
tipo: ordenar
opciones_explicitas:
  - "El centro de gravedad está donde se cruzan las dos verticales trazadas"
  - "Suspender el objeto libremente desde un primer punto de su borde y trazar la vertical hacia abajo"
  - "Suspender el objeto desde un segundo punto distinto y trazar otra vertical"
respuesta_orden: ["Suspender el objeto libremente desde un primer punto de su borde y trazar la vertical hacia abajo", "Suspender el objeto desde un segundo punto distinto y trazar otra vertical", "El centro de gravedad está donde se cruzan las dos verticales trazadas"]
explicacion: |
  Cada vertical (la que marca una plomada) siempre pasa por el centro
  de gravedad, sin importar desde qué punto se cuelgue el objeto.
```

### 14 — El CG no siempre está sobre material sólido

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "El centro de gravedad de un cuerpo siempre está ubicado sobre material sólido del propio cuerpo."

explicacion: |
  Es falso: en una rosquilla (forma de anillo), el centro de gravedad
  cae en el agujero del medio, en el aire — es un punto matemático, no
  necesita "tocar" material.
```

### 15 — Por qué el CG de una rosquilla está en el aire

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "¿Por qué el centro de gravedad de una rosquilla (forma de anillo) cae en el agujero central, sin tocar material?"
tipo: mc
opciones_explicitas:
  - "Porque es el promedio geométrico de toda la masa distribuida alrededor del anillo, y ese promedio cae en el centro simétrico, que está vacío"
  - "Porque las rosquillas no tienen centro de gravedad"
  - "Porque el agujero central tiene masa negativa"
respuesta: "Porque es el promedio geométrico de toda la masa distribuida alrededor del anillo, y ese promedio cae en el centro simétrico, que está vacío"

explicacion: |
  El centro de gravedad es un punto matemático de referencia, no
  necesariamente un punto físico dentro del material.
```

### 16 — El CG puede cambiar si el objeto cambia de forma

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El centro de gravedad de un objeto puede cambiar de posición si el objeto cambia de forma (dobla, se estira), aunque su masa total no cambie."

explicacion: |
  El centro de gravedad depende de cómo está distribuida la masa, no
  sólo de cuánta masa hay en total — redistribuirla lo mueve.
```

### 17 — Problema: centro de gravedad de una segunda pareja de masas

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(1, 5)
  x1: 0
  m2: random(1, 5)
  x2: random(2, 6)

respuesta: redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "En el extremo x=0 de una barra hay una masa de {m1} kg, y en x={x2} m hay otra de {m2} kg. ¿En qué posición está el centro de gravedad del sistema (se ignora el peso de la barra)?"

pasos:
  - "x_cg = (m₁×0 + m₂×{x2}) / (m₁+m₂) = ({m2}×{x2}) / ({m1}+{m2}) = {redondear((m1 * x1 + m2 * x2) / (m1 + m2), 2)} m"

explicacion: |
  Con una de las masas en el origen, la fórmula se simplifica bastante.
```

### 18 — Para qué sirve conocer el centro de gravedad

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["estatica"]

enunciado: "¿Para qué se usa el centro de gravedad al analizar un cuerpo en equilibrio?"
tipo: mc
opciones_explicitas:
  - "Como el punto donde se considera aplicado el peso total, al calcular el momento que ese peso genera"
  - "Para calcular la velocidad del cuerpo"
  - "Para calcular la temperatura del cuerpo"
respuesta: "Como el punto donde se considera aplicado el peso total, al calcular el momento que ese peso genera"

explicacion: |
  Es exactamente lo que hace falta para
  `../equilibrio-de-cuerpo-rigido/`: saber dónde "actúa" el peso para
  calcular su momento respecto de cualquier eje.
```

### 19 — El CG depende de dónde se ponga el origen de coordenadas

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "La posición FÍSICA del centro de gravedad de un cuerpo cambia según dónde se elija poner el origen del sistema de coordenadas."

explicacion: |
  El número que describe su posición cambia (depende del origen
  elegido, como cualquier coordenada), pero el punto físico real en el
  cuerpo es siempre el mismo — no se mueve por cambiar de referencia.
```

### 20 — Vocabulario: base de apoyo

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "intermedio"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: la zona delimitada por los puntos de contacto de un cuerpo con el suelo se llama base de ___."
respuestas_validas:
  - "apoyo"

explicacion: |
  Es la referencia que determina si el centro de gravedad "cae dentro"
  (equilibrio) o "cae afuera" (vuelco).
```

### 21 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "fisica"
  tema: "centro_de_gravedad"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el centro de gravedad?"
tipo: mc
opciones_explicitas:
  - "Para saber dónde 'actúa' el peso de un cuerpo, calcular su estabilidad, y usarlo como base para analizar el equilibrio de cuerpos rígidos"
  - "Sólo sirve para cuerpos perfectamente esféricos"
  - "Sólo aplica en el espacio, sin gravedad"
respuesta: "Para saber dónde 'actúa' el peso de un cuerpo, calcular su estabilidad, y usarlo como base para analizar el equilibrio de cuerpos rígidos"

explicacion: |
  Junto con `../momento-de-una-fuerza/`, es la pieza que falta para
  `../equilibrio-de-cuerpo-rigido/`.
```
