# Física — Toda fórmula de Física con literales (cuestionario, 28 preguntas VBLang)

> Tema: `F1` (puente Álgebra → Física). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Fuerza: F = m·a

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["fuerza"]

variables:
  m: random(2, 50)
  a: random(2, 20)

respuesta: m * a
tipo: input
tolerancia_abs: 0

enunciado: "F = m·a. Si m = {m} kg y a = {a} m/s², ¿cuánto vale F (en N)?"

explicacion: |
  F = {m}×{a} = {m * a}.
```

### 2 — Fuerza: despejar la masa

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["fuerza", "denominador"]

variables:
  a: random(2, 20)
  m_sol: random(2, 50)
  F: a * m_sol

respuesta: F / a
tipo: input
tolerancia_abs: 0

enunciado: "F = m·a. Si F = {F} N y a = {a} m/s², ¿cuánto vale m?"

explicacion: |
  m = F/a = {F}/{a} = {F / a}.
```

### 3 — Fuerza: despejar la aceleración

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["fuerza", "denominador"]

variables:
  m: random(2, 50)
  a_sol: random(2, 20)
  F: m * a_sol

respuesta: F / m
tipo: input
tolerancia_abs: 0

enunciado: "F = m·a. Si F = {F} N y m = {m} kg, ¿cuánto vale a?"

explicacion: |
  a = F/m = {F}/{m} = {F / m}.
```

### 4 — Trabajo: W = F·d

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["trabajo"]

variables:
  Fz: random(2, 100)
  d: random(1, 30)

respuesta: Fz * d
tipo: input
tolerancia_abs: 0

enunciado: "W = F·d. Si F = {Fz} N y d = {d} m, ¿cuánto vale W (en J)?"

explicacion: |
  W = {Fz}×{d} = {Fz * d}.
```

### 5 — Trabajo: despejar la fuerza

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["trabajo", "denominador"]

variables:
  d: random(1, 30)
  F_sol: random(2, 100)
  W: d * F_sol

respuesta: W / d
tipo: input
tolerancia_abs: 0

enunciado: "W = F·d. Si W = {W} J y d = {d} m, ¿cuánto vale F?"

explicacion: |
  F = W/d = {W}/{d} = {W / d}.
```

### 6 — Trabajo: despejar la distancia

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["trabajo", "denominador"]

variables:
  Fz: random(2, 100)
  d_sol: random(1, 30)
  W: Fz * d_sol

respuesta: W / Fz
tipo: input
tolerancia_abs: 0

enunciado: "W = F·d. Si W = {W} J y F = {Fz} N, ¿cuánto vale d?"

explicacion: |
  d = W/F = {W}/{Fz} = {W / Fz}.
```

### 7 — Energía cinética: evaluar

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["energia"]

variables:
  m: random(2, 4) * 2
  v: random(2, 15)

respuesta: (m * v ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Ec = ½mv². Si m = {m} kg y v = {v} m/s, ¿cuánto vale Ec (en J)?"

pasos:
  - "Ec = {m}×{v}²/2 = {m}×{v ^ 2}/2 = {(m * v ^ 2) / 2}"

explicacion: |
  Primero se eleva v al cuadrado, después se multiplica por m y se
  divide por 2.
```

### 8 — Energía cinética: despejar la masa

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["energia", "denominador"]

variables:
  v: random(2, 10)
  m_sol: random(2, 20)
  Ec: (m_sol * v ^ 2) / 2

respuesta: (2 * Ec) / (v ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "Ec = ½mv². Si Ec = {Ec} J y v = {v} m/s, ¿cuánto vale m?"

pasos:
  - "Despejando: m = 2Ec/v² = {2 * Ec}/{v ^ 2} = {(2 * Ec) / (v ^ 2)}"

explicacion: |
  Primero se pasa el ½ multiplicando (queda 2Ec), y después se divide
  por v² (no se saca raíz, porque v² ya está calculado).
```

### 9 — Energía potencial: Ep = m·g·h

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["energia"]

variables:
  m: random(1, 50)
  h: random(1, 20)
  g: 10

respuesta: m * g * h
tipo: input
tolerancia_abs: 0

enunciado: "Ep = m·g·h (con g=10 m/s²). Si m = {m} kg y h = {h} m, ¿cuánto vale Ep (en J)?"

explicacion: |
  Ep = {m}×{g}×{h} = {m * g * h}.
```

### 10 — Energía potencial: despejar la masa

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["energia", "denominador"]

variables:
  h: random(1, 20)
  g: 10
  m_sol: random(1, 50)
  Ep: m_sol * g * h

respuesta: Ep / (g * h)
tipo: input
tolerancia_abs: 0

enunciado: "Ep = m·g·h (con g=10 m/s²). Si Ep = {Ep} J y h = {h} m, ¿cuánto vale m?"

pasos:
  - "m = Ep/(g·h) = {Ep}/({g}×{h}) = {Ep / (g * h)}"

explicacion: |
  Hay que dividir por las dos letras que multiplican (g y h), no sólo
  por una.
```

### 11 — Energía potencial: despejar la altura

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["energia", "denominador"]

variables:
  m: random(1, 50)
  g: 10
  h_sol: random(1, 20)
  Ep: m * g * h_sol

respuesta: Ep / (g * m)
tipo: input
tolerancia_abs: 0

enunciado: "Ep = m·g·h (con g=10 m/s²). Si Ep = {Ep} J y m = {m} kg, ¿cuánto vale h?"

explicacion: |
  h = Ep/(g·m) = {Ep}/({g}×{m}) = {Ep / (g * m)}.
```

### 12 — Potencia: Pot = W/t

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["potencia"]

variables:
  W: random(10, 500)
  t: random(1, 20)

respuesta: W / t
tipo: input
tolerancia_abs: 0

enunciado: "Pot = W/t. Si W = {W} J y t = {t} s, ¿cuánto vale Pot (en W)?"

explicacion: |
  Pot = {W}/{t} = {W / t}.
```

### 13 — Potencia: despejar el trabajo (letra numerador)

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["potencia"]

variables:
  Pot: random(5, 100)
  t: random(1, 20)

respuesta: Pot * t
tipo: input
tolerancia_abs: 0

enunciado: "Pot = W/t. Si Pot = {Pot} W y t = {t} s, ¿cuánto vale W?"

explicacion: |
  W = Pot×t = {Pot}×{t} = {Pot * t}.
```

### 14 — Potencia: despejar el tiempo (letra en el denominador)

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["potencia", "denominador"]

variables:
  Pot: random(5, 50)
  t_sol: random(1, 20)
  W: Pot * t_sol

respuesta: W / Pot
tipo: input
tolerancia_abs: 0

enunciado: "Pot = W/t. Si Pot = {Pot} W y W = {W} J, ¿cuánto vale t?"

pasos:
  - "Pasar t multiplicando: Pot·t = W → t = W/Pot"

explicacion: |
  Mismo caso de siempre: la letra que divide se pasa multiplicando
  primero.
```

### 15 — Presión: P = F/A

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["presion"]

variables:
  Fz: random(10, 200)
  A: random(1, 20)

respuesta: Fz / A
tipo: input
tolerancia_abs: 0

enunciado: "P = F/A. Si F = {Fz} N y A = {A} m², ¿cuánto vale P (en Pa)?"

explicacion: |
  P = {Fz}/{A} = {Fz / A}.
```

### 16 — Presión: despejar el área

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["presion", "denominador"]

variables:
  P: random(5, 50)
  A_sol: random(1, 20)
  Fz: P * A_sol

respuesta: Fz / P
tipo: input
tolerancia_abs: 0

enunciado: "P = F/A. Si P = {P} Pa y F = {Fz} N, ¿cuánto vale A?"

explicacion: |
  A = F/P = {Fz}/{P} = {Fz / P}.
```

### 17 — Velocidad: repaso del caso ya visto en despejar-formula

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["velocidad"]

variables:
  d: random(10, 300)
  t: random(1, 20)

respuesta: d / t
tipo: input
tolerancia_abs: 0

enunciado: "v = d/t. Si d = {d} m y t = {t} s, ¿cuánto vale v (en m/s)?"

explicacion: |
  v = {d}/{t} = {d / t}.
```

### 18 — Encadenar dos fórmulas: velocidad y luego energía cinética

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["encadenar"]

variables:
  d: random(10, 100)
  t: random(2, 10)
  m: random(1, 3) * 2

respuesta: (m * (d / t) ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto de {m} kg recorre {d} m en {t} s a velocidad constante. ¿Cuál es su energía cinética?"

pasos:
  - "Primero v = d/t = {d}/{t} = {d / t} m/s"
  - "Después Ec = ½mv² = {m}×{d / t}²/2 = {(m * (d / t) ^ 2) / 2}"

explicacion: |
  Hay que usar una fórmula para hallar un dato intermedio (v) antes de
  poder aplicar la segunda fórmula (Ec).
```

### 19 — Encadenar dos fórmulas: fuerza y luego trabajo

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["encadenar"]

variables:
  m: random(2, 30)
  a: random(1, 10)
  d: random(1, 20)

respuesta: (m * a) * d
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza acelera un objeto de {m} kg a {a} m/s², y lo desplaza {d} m. ¿Cuál es el trabajo realizado?"

pasos:
  - "Primero F = m·a = {m}×{a} = {m * a} N"
  - "Después W = F·d = {m * a}×{d} = {(m * a) * d}"

explicacion: |
  Se encadena F=ma con W=F·d.
```

### 20 — Concepto: elegir la fórmula correcta

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "opcion_multiple"]

respuesta: "F = m·a"
tipo: mc
opciones_explicitas:
  - "F = m·a"
  - "W = F·d"
  - "P = F/A"

enunciado: "¿Qué fórmula relaciona la fuerza con la masa y la aceleración?"

explicacion: |
  Es la segunda ley de Newton.
```

### 21 — Concepto: elegir la fórmula correcta (energía)

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Ec = ½mv²"
tipo: mc
opciones_explicitas:
  - "Ec = ½mv²"
  - "Ep = m·g·h"
  - "Pot = W/t"

enunciado: "¿Qué fórmula da la energía asociada al movimiento (velocidad) de un objeto?"

explicacion: |
  La energía cinética depende de la masa y la velocidad; la potencial
  depende de la altura.
```

### 22 — Concepto: mismo procedimiento que despejar-formula

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Despejar una variable de una fórmula de Física usa exactamente el mismo procedimiento que despejar una fórmula matemática cualquiera."

explicacion: |
  No hay una técnica especial "de Física" — es álgebra aplicada a
  fórmulas con nombres y unidades distintas.
```

### 23 — Concepto: unidades consistentes

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para que el resultado de una fórmula física dé un número correcto, las unidades de los datos tienen que ser consistentes entre sí (por ejemplo, todo en el sistema SI)."

explicacion: |
  Mezclar km/h con segundos, o gramos con metros cúbicos, da un
  resultado numérico sin sentido, aunque el álgebra esté bien hecha.
```

### 24 — Verificación con error: fuerza

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  m: random(2, 50)
  a: random(2, 20)
  real: m * a
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "F = m·a. Con m = {m} kg y a = {a} m/s², ¿es correcto que F sea {propuesto} N?"

explicacion: |
  El valor correcto es F = {m}×{a} = {real}.
```

### 25 — Verificación con error: energía cinética

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  m: random(2, 4) * 2
  v: random(2, 15)
  real: (m * v ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Ec = ½mv². Con m = {m} kg y v = {v} m/s, ¿es correcto que Ec sea {propuesto} J?"

explicacion: |
  El valor correcto es Ec = {m}×{v}²/2 = {real}.
```

### 26 — Concepto: la letra buscada puede estar en cualquier posición

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un problema real, puede pedirse despejar cualquiera de las letras de la fórmula, no siempre la que ya está sola de un lado."

explicacion: |
  Por eso hace falta saber despejar cualquier variable, no memorizar
  sólo la forma en que la fórmula "viene escrita" en el libro.
```

### 27 — Aplicar: potencia de una máquina

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["potencia", "problema"]

variables:
  Fz: random(10, 100)
  d: random(1, 20)
  t: random(1, 10)

respuesta: (Fz * d) / t
tipo: input
tolerancia_abs: 0

enunciado: "Una máquina aplica una fuerza de {Fz} N a lo largo de {d} m, en {t} s. ¿Cuál es su potencia?"

pasos:
  - "Primero W = F·d = {Fz}×{d} = {Fz * d} J"
  - "Después Pot = W/t = {Fz * d}/{t} = {(Fz * d) / t}"

explicacion: |
  Se encadena W=F·d con Pot=W/t.
```

### 28 — Concepto: F1 no agrega fórmulas nuevas de álgebra, sólo de física

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Este módulo no enseña ninguna técnica algebraica nueva — aplica lo ya aprendido en despejar-formula a un catálogo más grande de fórmulas reales de Física."

explicacion: |
  Es exactamente el motivo por el que este tema depende de
  `../../matematica/despejar-formula/` y no al revés.
```
