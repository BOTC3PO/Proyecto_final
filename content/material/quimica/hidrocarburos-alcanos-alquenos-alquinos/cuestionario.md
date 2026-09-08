# Química — Hidrocarburos: alcanos, alquenos, alquinos (cuestionario, 20 preguntas VBLang)

> Temas: `QSa/b/c`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de hidrocarburos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["hidrocarburos", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Un hidrocarburo es un compuesto orgánico formado exclusivamente por átomos de carbono e hidrógeno."

explicacion: |
  Correcto. Por definición, los hidrocarburos contienen únicamente C y H.
```

### 2 — Sufijo de los alcanos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "alcanos"]

respuesta: "ano"
tipo: completar
respuestas_validas:
  - "ano"

enunciado: "Los alcanos, con un solo tipo de enlace entre carbonos, terminan con el sufijo ___."

explicacion: |
  Se nombran con la terminación -ano (metano, etano, propano...).
```

### 3 — Enlaces en alcanos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["alcanos", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "Los alcanos se caracterizan por tener únicamente enlaces sencillos (simples) entre sus átomos de carbono."

explicacion: |
  Correcto. Son hidrocarburos saturados: todos sus enlaces C-C son simples.
```

### 4 — Fórmula de alcanos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["alcanos", "formula", "calculo"]

variables:
  n: uno_de([1, 2, 3, 4, 5])

respuesta: 2 * n + 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá la cantidad de átomos de hidrógeno en un alcano con {n} átomos de carbono."

pasos:
  - "Fórmula general: CnH(2n+2)"

explicacion: |
  H = 2×{n} + 2.
```

### 5 — Identificación de fórmula molecular

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["alcanos", "nomenclatura", "formula"]

variables:
  datos: [["metano", "CH4"], ["etano", "C2H6"], ["propano", "C3H8"], ["butano", "C4H10"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["CH4", "C2H6", "C3H8", "C4H10"]

enunciado: "¿Cuál es la fórmula molecular del {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]} tiene fórmula {datos[idx][1]}.
```

### 6 — Sufijo de los alquenos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "alquenos"]

respuesta: "eno"
tipo: completar
respuestas_validas:
  - "eno"

enunciado: "Los alquenos, con al menos un doble enlace, terminan con el sufijo ___."

explicacion: |
  Los alquenos son insaturados: al menos un doble enlace C=C, sufijo "-eno".
```

### 7 — Enlace en alquenos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["estructura", "alquenos"]

respuesta: verdadero
tipo: vf

enunciado: "Un alqueno tiene al menos un enlace doble entre carbonos."

explicacion: |
  Correcto. Esa es la característica que distingue alquenos de alcanos (simple) y alquinos (triple).
```

### 8 — Cálculo de hidrógenos en alquenos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["formula_molecular", "alquenos"]

variables:
  n: uno_de([2, 3, 4, 5])

respuesta: 2 * n
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá la cantidad de hidrógenos de un alqueno con {n} carbonos y 1 doble enlace."

pasos:
  - "Fórmula: CnH2n"

explicacion: |
  H = 2×{n}.
```

### 9 — El eteno y la maduración

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["eteno", "biologia"]

respuesta: verdadero
tipo: vf

enunciado: "El eteno (C2H4) también se llama etileno y es la hormona vegetal responsable de la maduración de las frutas."

explicacion: |
  Verdadero. El eteno regula naturalmente la maduración en plantas.
```

### 10 — Sufijo de los alquinos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "alquinos"]

respuesta: "ino"
tipo: completar
respuestas_validas:
  - "ino"

enunciado: "Los alquinos, con al menos un triple enlace, terminan con el sufijo ___."

explicacion: |
  Sufijo "-ino" para hidrocarburos con al menos un triple enlace C≡C.
```

### 11 — Estructura de los alquinos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["estructura", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un alquino tiene al menos un enlace triple entre carbonos?"

explicacion: |
  Correcto. Es la característica definitoria de los alquinos.
```

### 12 — Cálculo de hidrógenos en alquinos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["formula_molecular", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5])

respuesta: 2 * n - 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá la cantidad de hidrógenos de un alquino lineal con {n} carbonos."

pasos:
  - "Fórmula: CnH(2n-2)"

explicacion: |
  H = 2×{n} - 2.
```

### 13 — El etino (acetileno)

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "usos"]

respuesta: verdadero
tipo: vf

enunciado: "¿El etino (C2H2) también se llama acetileno y se usa comúnmente en soldadura?"

explicacion: |
  Verdadero. Su combustión alcanza temperaturas muy altas, útil en sopletes de soldadura.
```

### 14 — Alcanos y saturación

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["alcanos", "saturados"]

respuesta: verdadero
tipo: vf

enunciado: "Los alcanos se llaman saturados porque tienen la máxima cantidad posible de hidrógenos en su estructura."

explicacion: |
  Correcto. Con enlaces simples no queda lugar para más hidrógenos sin romper la cadena de carbonos.
```

### 15 — Insaturación en hidrocarburos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["alquenos", "alquinos", "insaturados"]

respuesta: falso
tipo: vf

enunciado: "Los alquenos y alquinos se llaman insaturados porque tienen MÁS hidrógenos que el alcano equivalente."

explicacion: |
  Falso. Tienen MENOS hidrógenos que el alcano de igual número de carbonos, por los enlaces dobles o triples.
```

### 16 — Sufijos y tipos de enlace

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "enlaces"]

variables:
  tabla: [["-ano", "simple"], ["-eno", "doble"], ["-ino", "triple"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["simple", "doble", "triple"]

enunciado: "El sufijo {tabla[idx][0]} indica que el hidrocarburo tiene un enlace de tipo..."

explicacion: |
  -ano (simple), -eno (doble), -ino (triple).
```

### 17 — Grado de insaturación

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["alquenos", "hidrogenos"]

respuesta: verdadero
tipo: vf

enunciado: "Un alqueno con 2 dobles enlaces tendría aún menos hidrógenos que uno con sólo 1 doble enlace, para el mismo número de carbonos."

explicacion: |
  Verdadero. Cada enlace múltiple adicional resta 2 hidrógenos más.
```

### 18 — Comparación de fórmulas para el mismo n

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["comparacion", "formula"]

variables:
  n: uno_de([3, 4, 5, 6])

respuesta: (2 * n + 2) - (2 * n - 2)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para {n} carbonos, ¿cuántos hidrógenos MÁS tiene el alcano que el alquino (con 1 triple enlace)?"

pasos:
  - "H alcano = 2n+2, H alquino = 2n-2"

explicacion: |
  Diferencia = (2×{n}+2) - (2×{n}-2) = 4, siempre — la diferencia entre alcano y alquino de igual n es constante.
```

### 19 — Nombre según cantidad de hidrógenos

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "avanzado"
  tags: ["clasificacion", "formula"]

respuesta: "alqueno"
tipo: mc
opciones_explicitas: ["alqueno", "alcano", "alquino", "no es un hidrocarburo"]

enunciado: "Una molécula con 4 carbonos y 8 hidrógenos (C4H8), ¿a qué familia pertenece?"

explicacion: |
  Para n=4, un alcano tendría 10 H, un alquino 6 H — 8 H coincide con la fórmula de alqueno (2n = 8).
```

### 20 — Metano como caso base

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["metano", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "El metano (CH4) puede existir como alqueno o alquino, dependiendo de las condiciones de reacción."

explicacion: |
  Falso. Con un solo carbono no hay otro carbono con el que formar un enlace doble o triple — el metano es siempre un alcano.
```
