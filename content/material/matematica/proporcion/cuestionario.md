# Matemática — Proporción (cuestionario, 22 preguntas VBLang)

> Tema: `N9` (mitad). Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una proporción

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

enunciado: "¿Qué es una proporción?"
tipo: mc
opciones_explicitas:
  - "La igualdad entre dos razones"
  - "La suma de dos razones"
  - "Cualquier fracción"
respuesta: "La igualdad entre dos razones"

explicacion: |
  Una proporción dice que dos razones representan la misma relación:
  a/b = c/d.
```

### 2 — Verificar la propiedad fundamental

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c: a * k
  d: b * k

respuesta: (a * d == b * c)
tipo: vf

enunciado: "¿Es {a}/{b} = {c}/{d} una proporción válida?"

pasos:
  - "Producto de extremos: {a} × {d} = {a * d}. Producto de medios: {b} × {c} = {b * c}."

explicacion: |
  Es proporción si el producto de los extremos (a×d) es igual al producto
  de los medios (b×c).
```

### 3 — Reconocer cuando NO forman proporción

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: falso
tipo: vf

enunciado: "¿Es {a}/{b} = {c}/{d} una proporción válida?"

explicacion: |
  El producto de extremos no coincide con el de medios: no es una
  proporción.
```

### 4 — Hallar el cuarto término (extremo)

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(2, 9)
  x: (b * c) / a

restricciones:
  - (b * c) - floor((b * c) / a) * a == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción {a}/{b} = {c}/x, ¿cuánto vale x?"

pasos:
  - "{a} × x = {b} × {c} → x = ({b} × {c}) ÷ {a} = {b * c} ÷ {a} = {x}"

explicacion: |
  Se aplica la propiedad fundamental y se despeja x.
```

### 5 — Hallar el término desconocido (segundo lugar)

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 9)
  c: random(2, 9)
  d: random(2, 9)
  x: (a * d) / c

restricciones:
  - (a * d) - floor((a * d) / c) * c == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción {a}/x = {c}/{d}, ¿cuánto vale x?"

pasos:
  - "{a} × {d} = x × {c} → x = ({a} × {d}) ÷ {c} = {a * d} ÷ {c} = {x}"

explicacion: |
  Se despeja x aplicando la propiedad fundamental de la proporción.
```

### 6 — Hallar el término desconocido (primer lugar)

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  b: random(2, 9)
  c: random(2, 9)
  d: random(2, 9)
  x: (b * c) / d

restricciones:
  - (b * c) - floor((b * c) / d) * d == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción x/{b} = {c}/{d}, ¿cuánto vale x?"

pasos:
  - "x × {d} = {b} × {c} → x = ({b} × {c}) ÷ {d} = {b * c} ÷ {d} = {x}"

explicacion: |
  Igual que antes, se aplica el producto de extremos igual al producto de
  medios.
```

### 7 — Hallar el término desconocido (tercer lugar)

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  d: random(2, 9)
  x: (a * d) / b

restricciones:
  - (a * d) - floor((a * d) / b) * b == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción {a}/{b} = x/{d}, ¿cuánto vale x?"

pasos:
  - "{a} × {d} = {b} × x → x = ({a} × {d}) ÷ {b} = {a * d} ÷ {b} = {x}"

explicacion: |
  Se despeja x de la misma manera, cambiando en qué lugar de la
  proporción está.
```

### 8 — Elegir el término correcto

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 8)
  b: random(2, 8)
  c: random(2, 8)
  correcto: (b * c) / a

restricciones:
  - (b * c) - floor((b * c) / a) * a == 0

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b * c
  - correcto + 1

enunciado: "En la proporción {a}/{b} = {c}/x, ¿cuánto vale x?"

explicacion: |
  Las otras opciones no cumplen la propiedad fundamental (producto de
  extremos = producto de medios).
```

### 9 — Problema: escalar una receta

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "problema"]

variables:
  personas_original: random(2, 6)
  harina_original: random(1, 5)
  personas_nueva: personas_original * random(2, 4)

respuesta: harina_original * (personas_nueva / personas_original)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una receta para {personas_original} personas usa {harina_original} tazas de harina. Manteniendo la misma proporción, ¿cuántas tazas hacen falta para {personas_nueva} personas?"

pasos:
  - "{harina_original}/{personas_original} = x/{personas_nueva} → x = ({harina_original} × {personas_nueva}) ÷ {personas_original}"

explicacion: |
  Escalar una receta manteniendo el sabor es armar una proporción entre
  cantidad de personas e ingrediente.
```

### 10 — Problema: distancia real en un mapa

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion", "problema"]

variables:
  cm_base: random(1, 5)
  km_base: cm_base * random(10, 50)
  cm_nueva: cm_base * random(2, 4)

respuesta: km_base * (cm_nueva / cm_base)
tipo: input
tolerancia_abs: 0.01

enunciado: "En un mapa, {cm_base} cm representan {km_base} km reales. Si dos ciudades están a {cm_nueva} cm en el mapa, ¿cuántos km reales las separan?"

pasos:
  - "{cm_base}/{km_base} = {cm_nueva}/x → x = ({km_base} × {cm_nueva}) ÷ {cm_base}"

explicacion: |
  La escala del mapa es una razón constante: se arma una proporción para
  encontrar la distancia real.
```

### 11 — Verificar una proporción (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "verificacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c_correcto: a * k
  error: uno_de([0, 0, 0, 1, -1])
  c_mostrado: c_correcto + error
  d: b * k

respuesta: (a * d == c_mostrado * b)
tipo: vf

enunciado: "¿Es {a}/{b} = {c_mostrado}/{d} una proporción válida?"

explicacion: |
  Se aplica la propiedad fundamental para verificar.
```

### 12 — Completar el término que falta

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)

tipo: completar
enunciado: "Completá: {a}/{b} = ___/{b * k} (que sea una proporción válida)."
respuestas_validas:
  - a * k

explicacion: |
  El término que falta tiene que mantener la misma relación: {a}
  multiplicado por el mismo {k} que multiplicó al denominador.
```

### 13 — El nombre de la propiedad fundamental

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

enunciado: "¿Cómo se llama la propiedad que dice que, en una proporción, a × d = b × c?"
tipo: mc
opciones_explicitas:
  - "Producto de extremos igual a producto de medios"
  - "Regla de tres"
  - "Teorema de Pitágoras"
respuesta: "Producto de extremos igual a producto de medios"

explicacion: |
  a y d son los extremos (primero y último); b y c son los medios (los
  del medio).
```

### 14 — Los extremos y los medios

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

enunciado: "En la proporción a/b = c/d, ¿cuáles son los medios?"
tipo: mc
opciones_explicitas:
  - "b y c"
  - "a y d"
  - "a y b"
respuesta: "b y c"

explicacion: |
  Los extremos son el primero (a) y el último (d); los medios son los dos
  del centro (b y c).
```

### 15 — Problema: velocidad constante

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "problema"]

variables:
  km_base: random(20, 100)
  horas_base: random(1, 4)
  horas_nueva: horas_base * random(2, 4)

respuesta: km_base * (horas_nueva / horas_base)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {km_base} km en {horas_base} horas, a velocidad constante. ¿Cuántos km recorre en {horas_nueva} horas?"

explicacion: |
  A velocidad constante, distancia y tiempo mantienen una proporción.
```

### 16 — Elegir cuál es una proporción válida

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c_valida: a * k
  d: b * k
  c_invalida: c_valida + 1

respuesta: c_valida
tipo: mc
opciones_explicitas:
  - c_valida
  - c_invalida

enunciado: "¿Cuál de estos dos valores hace que {a}/{b} = ___/{d} sea una proporción válida?"

explicacion: |
  Sólo {c_valida} cumple que {a} × {d} = {b} × {c_valida}.
```

### 17 — Proporción con los cuatro términos iguales entre sí (caso trivial)

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion"]

variables:
  n: random(1, 999)

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n}/{n} = {n}/{n} una proporción válida?"

explicacion: |
  Cualquier razón es igual a sí misma: siempre forma una proporción
  consigo misma.
```

### 18 — La proporción es la base de la regla de tres

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las proporciones son la herramienta detrás de la regla de tres, el siguiente tema del mapa."

explicacion: |
  Resolver una regla de tres es, exactamente, hallar el término
  desconocido de una proporción.
```

### 19 — Problema: dosis proporcional al peso

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion", "problema"]

variables:
  peso_base: random(10, 30)
  dosis_base: random(5, 20)
  peso_nuevo: peso_base * random(2, 3)

respuesta: dosis_base * (peso_nuevo / peso_base)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un paciente de {peso_base} kg se indican {dosis_base} mg de un medicamento (proporcional al peso). ¿Cuántos mg corresponden a un paciente de {peso_nuevo} kg?"

explicacion: |
  Cuando una dosis es proporcional al peso, se arma una proporción entre
  peso y cantidad de medicamento.
```

### 20 — Verificar con producto cruzado (número más grande)

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion"]

variables:
  a: random(10, 50)
  b: random(10, 50)
  k: random(2, 5)
  c: a * k
  d: b * k

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}/{b} = {c}/{d} una proporción válida?"

explicacion: |
  Con números más grandes, el procedimiento no cambia: se verifica el
  producto de extremos contra el de medios.
```

### 21 — Proporción inversa (concepto, no numérica)

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "No todas las relaciones entre dos cantidades son proporciones directas: a veces, cuando una aumenta, la otra disminuye (proporción inversa)."

explicacion: |
  Este tema cubrió la proporción directa; la inversa (y la regla de tres
  inversa) es parte del próximo tema del mapa.
```

### 22 — Qué es una proporción (cierre)

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una proporción es la igualdad entre dos razones, y se puede verificar comparando el producto de los extremos con el producto de los medios."

explicacion: |
  Es la idea central de todo el tema: a/b = c/d es proporción si
  a × d = b × c.
```
