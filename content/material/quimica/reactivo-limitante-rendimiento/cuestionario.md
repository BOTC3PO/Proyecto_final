# Química — Reactivo limitante y rendimiento (cuestionario, 20 preguntas VBLang)

> Tema: `QL`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma) y corregido a mano.
> Bugs de esta tanda: `uno_de(...)` sorteando entre las 4 opciones de
> un `mc` (incluidas las incorrectas) para decidir la "respuesta
> correcta" — dos veces, en preguntas que además no necesitaban ningún
> sorteo — y un `respuesta:` faltante en un bloque `vf`.

---

### 1 — El desafío de los sándwiches

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["analogia", "estequiometria"]

respuesta: "3"
tipo: mc
opciones_explicitas: ["3", "5", "10", "13"]

enunciado: "Para armar un sándwich necesitas 2 rodajas de pan y 1 de queso. Si tenés 10 rodajas de pan y 3 de queso, ¿cuántos sándwiches podés armar como máximo?"

explicacion: |
  Con 10 panes (2 por sándwich): 10/2 = 5 sándwiches posibles. Con 3 quesos (1 por sándwich): 3/1 = 3 sándwiches posibles. El queso se agota primero: sólo se pueden armar 3.
```

### 2 — Definición de reactivo limitante

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "El reactivo limitante es aquel que sobra al final de la reacción química."

explicacion: |
  Falso. El reactivo limitante es el que se agota primero y detiene la reacción. El que sobra es el reactivo en exceso.
```

### 3 — El reactivo que sobra

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "exceso"
tipo: completar
respuestas_validas:
  - "exceso"

enunciado: "El reactivo que sobra al final de la reacción se llama reactivo en ___."

explicacion: |
  El reactivo que no se consume totalmente se llama reactivo en exceso.
```

### 4 — Importancia del reactivo limitante

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "El reactivo limitante determina la cantidad máxima de producto que se puede formar en una reacción química."

explicacion: |
  Verdadero. Como el reactivo limitante se agota primero, la reacción se detiene ahí y limita la producción total.
```

### 5 — Cociente de H2

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "moles"]

variables:
  moles_h2: uno_de([4, 6, 8, 10])

respuesta: moles_h2 / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "En la reacción 2 H2 + O2 → 2 H2O, si hay {moles_h2} moles de H2, ¿cuál es el cociente moles/coeficiente del H2?"

pasos:
  - "Coeficiente de H2 en la ecuación: 2"
  - "Cociente: {moles_h2} / 2"

explicacion: |
  El cociente se calcula dividiendo los moles disponibles por el coeficiente estequiométrico de esa sustancia.
```

### 6 — Cociente de O2

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "moles"]

variables:
  moles_o2: uno_de([1, 2, 3])

respuesta: moles_o2
tipo: input
tolerancia_abs: 0.01

enunciado: "En la reacción 2 H2 + O2 → 2 H2O, si hay {moles_o2} moles de O2, ¿cuál es el cociente moles/coeficiente del O2?"

pasos:
  - "Coeficiente de O2 en la ecuación: 1"
  - "Cociente: {moles_o2} / 1"

explicacion: |
  Como el coeficiente del O2 es 1, el cociente es igual a la cantidad de moles disponibles.
```

### 7 — Regla del cociente menor

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿El reactivo con el cociente menor (moles dividido coeficiente) entre todos los reactivos es el reactivo limitante?"

explicacion: |
  Correcto. El reactivo limitante se identifica porque su cociente moles/coeficiente es el valor mínimo entre todos los reactivos.
```

### 8 — Procedimiento de cálculo

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["procedimiento"]

respuesta: "coeficiente"
tipo: completar
respuestas_validas:
  - "coeficiente"
  - "coeficientes"

enunciado: "Para encontrar el reactivo limitante hay que dividir los moles de cada reactivo por su ___ en la ecuación balanceada."

explicacion: |
  El coeficiente estequiométrico indica la proporción en la que reaccionan los reactivos; dividir los moles reales por él permite compararlos.
```

### 9 — Identificación del limitante

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "ejercicio"]

respuesta: "O2"
tipo: mc
opciones_explicitas: ["O2", "H2", "H2O", "Ninguno"]

enunciado: "Dada la reacción 2 H2 + O2 → 2 H2O, si hay 6 moles de H2 y 2 moles de O2, ¿cuál es el reactivo limitante?"

pasos:
  - "Cociente de H2: 6 / 2 = 3"
  - "Cociente de O2: 2 / 1 = 2"
  - "El menor (2) corresponde al O2."

explicacion: |
  El cociente del H2 es 3 y el del O2 es 2. Como 2 es menor, el oxígeno se agota antes: es el reactivo limitante.
```

### 10 — Cálculo de rendimiento porcentual

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "calculo"]

variables:
  rendimiento_teorico: uno_de([20, 40, 50, 80, 100])
  porcentaje: uno_de([50, 75, 80, 90])
  rendimiento_real: rendimiento_teorico * porcentaje / 100

respuesta: porcentaje
tipo: input
tolerancia_abs: 0.1

enunciado: "El rendimiento teórico de una reacción es de {rendimiento_teorico} g y el rendimiento real obtenido en el laboratorio es de {rendimiento_real} g. ¿Cuál es el porcentaje de rendimiento?"

pasos:
  - "Dividir el rendimiento real por el teórico y multiplicar por 100."

explicacion: |
  % rendimiento = ({rendimiento_real} / {rendimiento_teorico}) × 100 = {porcentaje}%.
```

### 11 — Fórmula del rendimiento

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["teoria", "formula"]

respuesta: "teorico"
tipo: completar
respuestas_validas:
  - "teorico"

enunciado: "La fórmula del rendimiento porcentual es (rendimiento real dividido rendimiento ___) por 100."

explicacion: |
  El rendimiento porcentual compara lo obtenido experimentalmente (real) contra la cantidad máxima predicha por la estequiometría (teórico).
```

### 12 — Realidad del rendimiento experimental

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El rendimiento real de una reacción en la práctica es casi siempre menor al 100%."

explicacion: |
  Por reacciones secundarias, pérdidas de material en el proceso, etc., el rendimiento real suele ser menor al teórico.
```

### 13 — Determinación del rendimiento teórico

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria"]

respuesta: "el reactivo limitante"
tipo: mc
opciones_explicitas: ["el reactivo limitante", "el reactivo en exceso", "el promedio de ambos reactivos", "el producto final medido"]

enunciado: "El rendimiento teórico de una reacción se calcula a partir de:"

explicacion: |
  Siempre se basa en el reactivo limitante, porque es el que determina la cantidad máxima de producto posible.
```

### 14 — Posibilidad física del rendimiento

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso
tipo: vf

enunciado: "Un rendimiento mayor al 100% siempre es físicamente posible en condiciones normales, sin ningún error de medición."

explicacion: |
  Falso. No se puede obtener más producto del que la estequiometría permite; un rendimiento >100% indica errores experimentales (impurezas, humedad, pesada incorrecta).
```

### 15 — Cálculo con el reactivo limitante

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["estequiometria", "conceptos_clave"]

respuesta: verdadero
tipo: vf

enunciado: "Los cálculos de la cantidad de producto formado se hacen a partir de los moles del reactivo LIMITANTE, no del reactivo en exceso."

explicacion: |
  Correcto. El reactivo limitante determina la cantidad máxima de producto posible.
```

### 16 — Analogía del sándwich: el pan sobrante

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["analogia", "conceptos_clave"]

respuesta: "queda en exceso, sin usarse"
tipo: mc
opciones_explicitas: ["queda en exceso, sin usarse", "se usa igual", "se destruye", "se convierte en queso"]

enunciado: "En la analogía de los sándwiches (2 panes + 1 queso por sándwich), si el queso es el reactivo limitante, ¿qué pasa con el pan sobrante?"

explicacion: |
  El reactivo en exceso es el que sobra una vez que el limitante se agotó por completo — no se transforma en nada, simplemente no reacciona.
```

### 17 — Cálculo de rendimiento con datos pareados

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "avanzado"
  tags: ["calculo", "rendimiento"]

variables:
  datos: [[10, 5], [20, 10], [25, 15], [50, 20]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1] / datos[idx][0] * 100
tipo: input
tolerancia_abs: 0.1

enunciado: "El rendimiento teórico de una reacción es de {datos[idx][0]} gramos y el rendimiento real obtenido es de {datos[idx][1]} gramos. ¿Cuál es el porcentaje de rendimiento?"

explicacion: |
  % rendimiento = ({datos[idx][1]} / {datos[idx][0]}) × 100.
```

### 18 — Primer paso para identificar el limitante

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["procedimiento", "estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "Para encontrar el reactivo limitante, el primer paso es convertir todas las cantidades de los reactivos a moles."

explicacion: |
  Correcto. La estequiometría trabaja en proporciones molares; no se pueden comparar masas directamente sin pasar antes por moles.
```

### 19 — Comparación entre dos reactivos

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "ejercicio"]

respuesta: "H2"
tipo: mc
opciones_explicitas: ["H2", "O2", "H2O", "Ninguno"]

enunciado: "Dada la reacción 2 H2 + O2 → 2 H2O, si hay 4 moles de H2 y 3 moles de O2, ¿cuál es el reactivo limitante?"

explicacion: |
  Cociente de H2: 4/2 = 2. Cociente de O2: 3/1 = 3. El menor es 2 (H2), así que el H2 es el limitante.
```

### 20 — Efecto de un reactivo limitante escaso

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si se agrega más cantidad del reactivo que YA está en exceso, la cantidad de producto formado no aumenta (mientras el limitante siga siendo el mismo)."

explicacion: |
  Verdadero. Agregar más del reactivo en exceso no cambia nada: el límite lo sigue poniendo el reactivo limitante, que no varió.
```
