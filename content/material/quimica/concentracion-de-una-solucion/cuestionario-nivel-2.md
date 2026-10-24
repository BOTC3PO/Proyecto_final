# Química — Concentración de una solución (cuestionario, nivel 2, 15 preguntas VBLang)

> Continúa `cuestionario.md` (nivel 1). Cubre la profundidad de `QM`
> dentro del Tronco 7: molaridad/molalidad/normalidad, y el
> procedimiento de preparar una solución desde soluto sólido.

---

### 1 — Definición de molaridad

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "basico"
  tags: ["molaridad", "unidades"]

respuesta: "solucion"
tipo: completar
respuestas_validas:
  - "solucion"

enunciado: "La molaridad se calcula como moles de soluto dividido litros de ___."

explicacion: |
  La molaridad (M) relaciona los moles de soluto con el volumen TOTAL de la solución.
```

### 2 — Definición de molalidad

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "basico"
  tags: ["molalidad", "unidades"]

respuesta: "solvente"
tipo: completar
respuestas_validas:
  - "solvente"

enunciado: "La molalidad se calcula como moles de soluto dividido kilogramos de ___."

explicacion: |
  La molalidad (m) usa la masa del solvente en kg, independiente del volumen.
```

### 3 — Dependencia de la temperatura

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "intermedio"
  tags: ["temperatura", "molaridad", "molalidad"]

respuesta: verdadero
tipo: vf

enunciado: "La molalidad no cambia con la temperatura, a diferencia de la molaridad, que sí puede cambiar (porque el volumen se dilata)."

explicacion: |
  La molaridad depende de un volumen que varía con la temperatura; la molalidad depende de una masa, que no varía.
```

### 4 — Normalidad de un ácido monoprótico

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "intermedio"
  tags: ["normalidad", "molaridad", "acido"]

respuesta: verdadero
tipo: vf

enunciado: "Para un ácido monoprótico como el HCl, la normalidad es igual a la molaridad."

explicacion: |
  1 equivalente por mol (1 H+ por molécula): N = M.
```

### 5 — Normalidad de un ácido diprótico

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "avanzado"
  tags: ["normalidad", "molaridad", "acido_diprotico"]

respuesta: falso
tipo: vf

enunciado: "Para un ácido diprótico como el H2SO4, la normalidad es igual a la molaridad."

explicacion: |
  Falso. Libera 2 equivalentes de H+ por mol: N = 2×M.
```

### 6 — Cálculo de molaridad

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "intermedio"
  tags: ["molaridad", "calculo"]

variables:
  moles: uno_de([1, 2, 3])
  litros: uno_de([1, 2])

respuesta: moles / litros
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se disuelven {moles} moles de soluto en {litros} litros de solución. ¿Cuál es la molaridad?"

pasos:
  - "M = moles / volumen"

explicacion: |
  M = {moles} / {litros}.
```

### 7 — Cálculo de molalidad

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "intermedio"
  tags: ["molalidad", "calculo"]

variables:
  moles: uno_de([1, 2, 4])
  kg: uno_de([1, 2])

respuesta: moles / kg
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se disuelven {moles} moles de soluto en {kg} kg de solvente. ¿Cuál es la molalidad?"

pasos:
  - "m = moles / masa del solvente"

explicacion: |
  m = {moles} / {kg}.
```

### 8 — Volumen usado en la molaridad

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "basico"
  tags: ["molaridad", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "La molaridad se define usando el volumen total de la solución (soluto + solvente), no sólo el volumen del solvente puro."

explicacion: |
  Correcto. Es litros de solución completa, no litros de solvente agregado antes de disolver.
```

### 9 — Primer paso para preparar una solución

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "basico"
  tags: ["preparacion", "moles"]

respuesta: "calcular los moles necesarios (n=M*V)"
tipo: mc
opciones_explicitas: ["calcular los moles necesarios (n=M*V)", "pesar el agua", "medir el pH", "calentar el soluto"]

enunciado: "Para preparar una solución de concentración exacta, el primer paso es..."

explicacion: |
  Antes de medir volúmenes, hace falta saber cuántos moles hacen falta: n = M × V.
```

### 10 — Cómo NO disolver el soluto

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "basico"
  tags: ["procedimiento", "volumen"]

respuesta: falso
tipo: vf

enunciado: "Para preparar una solución, se disuelve el soluto en TODO el volumen final de agua de una sola vez."

explicacion: |
  Falso. Se disuelve en menos agua primero, y se completa hasta el volumen final después.
```

### 11 — Error de agregar el volumen total de agua

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "intermedio"
  tags: ["error_experimental", "dilucion"]

respuesta: verdadero
tipo: vf

enunciado: "Si se agrega el volumen total de agua V directamente al soluto (en vez de completar hasta V), la concentración final queda más diluida de lo pedido."

explicacion: |
  Verdadero. El volumen final termina siendo mayor a V, porque el soluto también ocupa espacio.
```

### 12 — Instrumento para completar el volumen

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "basico"
  tags: ["material_laboratorio", "aforo"]

respuesta: "aforado"
tipo: completar
respuestas_validas:
  - "aforado"

enunciado: "El instrumento que se usa para completar exactamente hasta el volumen final se llama matraz ___."

explicacion: |
  El matraz aforado está calibrado para un volumen preciso y único.
```

### 13 — Cálculo de masa de soluto a pesar

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "intermedio"
  tags: ["molaridad", "calculo"]

variables:
  m_molar: uno_de([10, 20, 40])
  moles_deseados: uno_de([1, 2])

respuesta: moles_deseados * m_molar
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se quiere preparar una solución con {moles_deseados} moles de un soluto de masa molar {m_molar} g/mol. ¿Cuántos gramos hay que pesar?"

explicacion: |
  masa = moles × masa molar = {moles_deseados} × {m_molar}.
```

### 14 — Procedimiento completo (moles → masa)

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "intermedio"
  tags: ["procedimiento", "molaridad"]

respuesta: verdadero
tipo: vf

enunciado: "Para preparar V litros de una solución M molar, primero se calculan los moles con n = M×V, y después la masa a pesar con m = n × masa_molar."

explicacion: |
  Correcto: primero moles necesarios, después la masa correspondiente a esos moles.
```

### 15 — Propiedades coligativas y molalidad

```
metadata:
  materia: "quimica"
  tema: "concentracion_nivel_2"
  nivel: "intermedio"
  tags: ["propiedades_coligativas", "molalidad"]

respuesta: verdadero
tipo: vf

enunciado: "Las propiedades coligativas suelen usar molalidad en vez de molaridad, porque la masa del solvente no cambia con la temperatura."

explicacion: |
  Correcto. La molaridad depende de un volumen que se dilata con la temperatura; la molalidad no.
```
