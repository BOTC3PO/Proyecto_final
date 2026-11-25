# Química — Dilución de soluciones: C1V1 = C2V2 (cuestionario, 26 preguntas VBLang)

> Tema: `QDIL`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Concepto de dilución

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["soluciones", "dilucion"]

respuesta: verdadero
tipo: vf

enunciado: "Al diluir una solución, se agrega solvente sin agregar ni quitar soluto."

explicacion: |
  Correcto. La dilución aumenta el volumen de solvente, lo que baja la concentración, pero la cantidad de soluto se mantiene constante.
```

### 2 — Cantidad de soluto en dilución

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["soluciones", "dilucion"]

respuesta: falso
tipo: vf

enunciado: "La cantidad de soluto (en moles o gramos) cambia al diluir una solución."

explicacion: |
  Falso. En una dilución ideal la masa o los moles de soluto no varían; lo que cambia es la relación soluto/volumen.
```

### 3 — Efecto de la dilución

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["soluciones", "dilucion"]

respuesta: "concentracion"
tipo: completar
respuestas_validas:
  - "concentracion"

enunciado: "Al diluir una solución, lo que cambia es el volumen total y por lo tanto baja la ___."

explicacion: |
  Al aumentar el volumen sin agregar más soluto, la relación soluto/volumen (la concentración) baja.
```

### 4 — Ecuación de dilución

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["soluciones", "dilucion", "formula"]

respuesta: "C1V1 = C2V2"
tipo: mc
opciones_explicitas: ["C1V1 = C2V2", "C1+V1 = C2+V2", "C1/V1 = C2/V2", "C1V1 = C2/V2"]

enunciado: "Si una solución con concentración C1 y volumen V1 se diluye hasta obtener una concentración C2 y volumen V2, ¿cuál es la fórmula correcta?"

explicacion: |
  C1×V1 = C2×V2 sale de que la cantidad de soluto antes y después de diluir es la misma.
```

### 5 — Cálculo de volumen final

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["dilucion", "molaridad"]

variables:
  escenario: uno_de([[4, 50, 2], [10, 100, 5], [12, 50, 3], [6, 25, 2]])
  c1: escenario[0]
  v1: escenario[1]
  c2: escenario[2]

respuesta: c1 * v1 / c2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se tienen {c1} M de una solución de volumen {v1} L. Se diluye hasta {c2} M. ¿Cuál es el volumen final (V2) en litros?"

explicacion: |
  V2 = (C1 × V1) / C2 = ({c1} × {v1}) / {c2}.
```

### 6 — Cálculo de concentración final

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["dilucion", "molaridad"]

variables:
  escenario: uno_de([[2, 100, 50], [5, 200, 10], [8, 50, 20]])
  c1: escenario[0]
  v1: escenario[1]
  v2: escenario[2]

respuesta: c1 * v1 / v2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una solución tiene concentración {c1} M y volumen {v1} L. Se diluye hasta un volumen final de {v2} L. ¿Cuál es la nueva concentración (C2)?"

explicacion: |
  C2 = (C1 × V1) / V2 = ({c1} × {v1}) / {v2}.
```

### 7 — Cálculo de concentración inicial

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["dilucion", "molaridad"]

variables:
  escenario: uno_de([[1, 100, 10], [2, 50, 5], [5, 40, 2]])
  c2: escenario[0]
  v2: escenario[1]
  v1: escenario[2]

respuesta: c2 * v2 / v1
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se quiere preparar {c2} M con un volumen final de {v2} L, partiendo de {v1} L de una solución concentrada. ¿Qué concentración (C1) debe tener esa solución original?"

explicacion: |
  C1 = (C2 × V2) / V1 = ({c2} × {v2}) / {v1}.
```

### 8 — Volumen final vs. inicial

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Al diluir una solución (agregando solvente), el volumen final (V2) siempre es mayor que el volumen inicial (V1)."

explicacion: |
  Verdadero. Agregar solvente aumenta el volumen total, lo que baja la concentración.
```

### 9 — Ejemplo resuelto: cálculo de volumen final

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["dilucion", "calculo"]

variables:
  c1: 12
  v1: 50
  c2: 2

respuesta: c1 * v1 / c2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Tengo una solución al {c1}% con volumen de {v1} mL y quiero diluirla hasta {c2}%. ¿Cuál será el volumen final (V2) en mL?"

pasos:
  - "C1 × V1 = C2 × V2"
  - "V2 = (C1 × V1) / C2 = (12 × 50) / 2"

explicacion: |
  El volumen final es 300 mL: aumenta el volumen para mantener la misma cantidad de soluto con menor concentración.
```

### 10 — Verificación del ejemplo

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["dilucion", "concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "Si tengo 50 mL de una solución al 12% y la diluyo hasta un volumen total de 300 mL, la concentración final es 2%."

explicacion: |
  Correcto. 12 × 50 = C2 × 300 → C2 = 600/300 = 2.
```

### 11 — Consistencia de unidades en concentración

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["teoria", "unidades"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicar C1×V1 = C2×V2, las unidades de C1 y C2 tienen que ser las mismas entre sí."

explicacion: |
  Verdadero. Si C1 está en Molaridad, C2 también tiene que estar en Molaridad para que la igualdad sea válida.
```

### 12 — Consistencia de unidades en volumen

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["teoria", "unidades"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicar C1×V1 = C2×V2, las unidades de V1 y V2 tienen que ser las mismas entre sí."

explicacion: |
  Verdadero. Si V1 está en mL, V2 también tiene que estar en mL.
```

### 13 — Cantidad de soluto en dilución (repaso)

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["teoria", "soluto"]

respuesta: falso
tipo: vf

enunciado: "Diluir una solución (agregar solvente) aumenta la cantidad total de soluto disuelto en la mezcla."

explicacion: |
  Falso. La cantidad de soluto se mantiene constante; lo que cambia es el volumen del solvente y, por lo tanto, la concentración.
```

### 14 — Solución stock

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["dilucion", "conceptos"]

respuesta: "concentrada"
tipo: completar
respuestas_validas:
  - "concentrada"

enunciado: "En la fórmula C1V1 = C2V2, los términos C1 y V1 representan la solución ___ (también llamada solución stock), antes de la dilución."

explicacion: |
  La solución stock es la original, con concentración C1 y volumen V1, antes de agregar más solvente.
```

### 15 — Significado del volumen final

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["dilucion", "volumen"]

respuesta: "que el volumen total final es V2"
tipo: mc
opciones_explicitas: ["que el volumen total final es V2", "que se agregan V2 mL de solvente extra", "que se quitan V2 mL de solvente", "que V2 es el volumen de soluto"]

enunciado: "Si se diluye una solución hasta alcanzar un volumen final V2, esto significa..."

explicacion: |
  V2 es el volumen TOTAL de la mezcla resultante (soluto + solvente agregado), no la cantidad de solvente añadida.
```

### 16 — Cálculo de concentración final con datos pareados

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "avanzado"
  tags: ["calculo", "dilucion"]

variables:
  datos: [[10, 40, 80], [8, 20, 40], [6, 40, 120]]
  idx: uno_de([0, 1, 2])
  c1: datos[idx][0]
  v1: datos[idx][1]
  v2: datos[idx][2]

respuesta: c1 * v1 / v2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una solución tiene concentración C1={c1} M y volumen V1={v1} mL. Se diluye hasta un volumen final V2={v2} mL. ¿Cuál es la nueva concentración C2 (en M)?"

pasos:
  - "Moles iniciales: n = C1 × V1"
  - "C2 = n / V2"

explicacion: |
  C2 = (C1 × V1) / V2 = ({c1} × {v1}) / {v2}.
```

### 17 — Relación entre volumen y concentración

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["conceptos", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el volumen final V2 de una dilución, menor es la concentración final C2 resultante."

explicacion: |
  Como la cantidad de soluto es constante, la concentración es inversamente proporcional al volumen: a mayor volumen, menor concentración.
```

### 18 — Dilución sin cambio de soluto (aplicación)

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["calculo", "dilucion"]

variables:
  c1: 10
  v1: 20
  v2: 100

respuesta: c1 * v1 / v2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si diluyo {v1} mL de una solución {c1} M hasta un volumen final de {v2} mL, ¿cuál es la concentración final?"

explicacion: |
  C2 = (C1 × V1) / V2 = ({c1} × {v1}) / {v2} = 2 M.
```

### 19 — Factor de dilución

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["conceptos", "factor_dilucion"]

respuesta: verdadero
tipo: vf

enunciado: "Si el volumen final es el doble del volumen inicial (V2 = 2×V1), entonces la concentración final es la mitad de la concentración inicial (C2 = C1/2)."

explicacion: |
  De C1×V1 = C2×V2, si V2=2×V1 entonces C2 = C1×V1/(2×V1) = C1/2.
```

### 20 — Diluir vs. concentrar

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Evaporar solvente de una solución (sin agregar ni quitar soluto) es un proceso de dilución."

explicacion: |
  Falso. Evaporar solvente reduce el volumen y AUMENTA la concentración — es el proceso contrario (concentrar), no diluir.
```

### 21 — Volumen final al diluir (C1 · V1 = C2 · V2)

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["calculo", "dilucion"]

variables:
  C1: uno_de([10, 12, 20, 30, 40])
  V1: uno_de([10, 20, 50, 100])
  k: uno_de([2, 4, 5, 10])

respuesta: V1 * k
tipo: input
unidad: "mL"
tolerancia_abs: 0

enunciado: "Se tienen {V1} mL de una solución al {C1} %. ¿Hasta qué volumen hay que diluirla para que quede al {C1 / k} %?"

pasos:
  - "V2 = C1 · V1 / C2"
  - "V2 = {C1} × {V1} / {C1 / k} = {V1 * k} mL"

explicacion: |
  La cantidad de soluto no cambia: si la concentración baja a la mitad, el volumen se duplica.
```

### 22 — Concentración final

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["calculo", "dilucion"]

variables:
  C1: uno_de([2, 3, 6])
  V1: uno_de([50, 100, 200])
  k: uno_de([2, 3, 4])

respuesta: C1 / k
tipo: input
unidad: "M"
tolerancia: 1%

enunciado: "Se toman {V1} mL de una solución {C1} M y se agrega agua hasta {V1 * k} mL. ¿Cuál es la nueva concentración, en M? (podés redondear a dos decimales)"

pasos:
  - "C2 = C1 · V1 / V2"
  - "C2 = {C1} × {V1} / {V1 * k} = {C1 / k | 2} M"

explicacion: |
  Agregar agua reparte el mismo soluto en más volumen.
```

### 23 — Cuánto tomar de la solución madre

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["calculo", "dilucion"]

variables:
  C1: uno_de([5, 10, 12])
  C2: uno_de([0.5, 1, 2])
  V2: uno_de([100, 250, 500, 1000])

respuesta: C2 * V2 / C1
tipo: input
unidad: "mL"
tolerancia: 1%

enunciado: "Hay que preparar {V2} mL de una solución {C2} M a partir de una solución madre {C1} M. ¿Cuántos mL de la solución madre hay que tomar? (podés redondear a un decimal)"

pasos:
  - "V1 = C2 · V2 / C1"
  - "V1 = {C2} × {V2} / {C1} ≈ {C2 * V2 / C1 | 1} mL"

explicacion: |
  Así se trabaja en el laboratorio: se mide un poco de la solución concentrada y se completa con agua.
```

### 24 — Cuánta agua agregar

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["calculo", "dilucion"]

variables:
  V1: uno_de([20, 50, 100])
  k: uno_de([2, 3, 5, 10])

respuesta: V1 * k - V1
tipo: input
unidad: "mL"
tolerancia_abs: 0

enunciado: "Para que {V1} mL de una solución queden {k} veces menos concentrados, ¿cuántos mL de agua hay que agregar?"

pasos:
  - "Volumen final: {V1} × {k} = {V1 * k} mL"
  - "Agua a agregar: {V1 * k} − {V1} = {V1 * k - V1} mL"

explicacion: |
  La fórmula da el volumen final; el agua que se agrega es la diferencia con el inicial.
```

### 25 — La lavandina

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["calculo", "cotidiano"]

variables:
  V2: uno_de([1000, 2000, 5000])
  C2: uno_de([0.1, 0.2, 0.5])

respuesta: C2 * V2 / 5
tipo: input
unidad: "mL"
tolerancia: 1%

enunciado: "La lavandina comercial tiene un 5 % de cloro activo. Para limpiar se recomienda una solución al {C2} %. ¿Cuántos mL de lavandina hay que poner para preparar {V2} mL de solución?"

pasos:
  - "V1 = C2 · V2 / C1"
  - "V1 = {C2} × {V2} / 5 = {C2 * V2 / 5} mL"

explicacion: |
  Las indicaciones de «una cucharada por litro» salen de este cálculo.
```

### 26 — El jugo concentrado

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["comparacion", "verdadero_falso", "cotidiano"]

variables:
  V1: uno_de([100, 200])
  V2: uno_de([500, 1000, 1500])

respuesta: V2 / V1 >= 5
tipo: vf

enunciado: "Un jugo concentrado dice «diluir 1 en 5» (una parte de jugo en cinco partes de bebida final). Si se ponen {V1} mL de concentrado y se completa hasta {V2} mL, ¿queda igual o más diluido de lo indicado?"

pasos:
  - "Factor de dilución: {V2} / {V1} = {V2 / V1 | 1}"

explicacion: |
  El factor de dilución es V2 / V1: cuanto más grande, más diluido.
```
