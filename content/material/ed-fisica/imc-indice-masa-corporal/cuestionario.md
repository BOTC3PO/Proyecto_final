# Ed. Física — IMC: índice de masa corporal (cuestionario, 25 preguntas VBLang)

> Tema: `EF11`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: una `respuesta:` calculada con
> división de variables en vivo (`peso / (altura * altura)`, patrón
> no confirmado en el DSL) — reemplazada por el resultado ya
> precalculado como literal en la tabla; un `tipo: input` (tipo no
> confirmado) — normalizado a `completar`; un blank doble con
> `respuesta:` en forma de array — recortado a un solo blanco; tres
> preguntas con `variables:`/`uno_de` sorteando un escenario cuya
> `respuesta:` quedaba **fija** sin importar qué opción salía —
> corregidas indexando la respuesta a la variable sorteada; **un
> error aritmético real de Gemma** (70 kg / 1,75² dio "45,71" en vez
> de "22,86") — recalculado a mano; 5 preguntas `mc`/`vf` sin campo
> `explicacion:` — agregado; `metadata.tema` con un typo
> (`imc_indice_massa_corporal`) — corregido.

---

### 1 — Cálculo de IMC básico

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["calculo", "salud"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["70", "1.75", "22.86"], ["60", "1.60", "23.44"], ["85", "1.80", "26.23"]]

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "22.86"
  - "23.44"
  - "26.23"

enunciado: "Una persona tiene un peso de {datos[idx][0]} kg y una altura de {datos[idx][1]} m. ¿Cuál es su Índice de Masa Corporal (IMC), redondeado a dos decimales?"

explicacion: |
  El IMC se calcula dividiendo el peso en kilogramos por la estatura en metros al cuadrado: {datos[idx][0]} / ({datos[idx][1]} × {datos[idx][1]}) = {datos[idx][2]}.
```

### 2 — Clasificación de IMC (sobrepeso)

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["clasificacion", "salud"]

variables:
  idx: uno_de([0, 1, 2])
  caso: [["22.5", "Normal"], ["27.0", "Sobrepeso"], ["31.0", "Obesidad"]]

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad"]

enunciado: "Si una persona tiene un IMC de {caso[idx][0]}, según los estándares de la OMS, ¿cuál es su estado nutricional?"

explicacion: |
  Un IMC de {caso[idx][0]} se clasifica como {caso[idx][1]}.
```

### 3 — Identificación de la fórmula

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["teoria"]

respuesta: "peso / (altura * altura)"
tipo: completar
respuestas_validas:
  - "peso / (altura * altura)"

enunciado: "La fórmula matemática para calcular el IMC es: ___"

explicacion: |
  La fórmula es el peso dividido por la altura elevada al cuadrado.
```

### 4 — Comparación de resultados

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["65", "1.70", "22.5"], ["90", "1.75", "29.4"], ["50", "1.60", "19.5"]]

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "22.5"
  - "29.4"
  - "19.5"

enunciado: "Calcula el IMC de una persona que pesa {datos[idx][0]} kg y mide {datos[idx][1]} m (resultado con un decimal)."

explicacion: |
  El cálculo es {datos[idx][0]} / ({datos[idx][1]} × {datos[idx][1]}) = {datos[idx][2]}.
```

### 5 — Selección de categoría de salud

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  idx: uno_de([0, 1, 2])
  perfil: [["16.0", "Bajo peso"], ["21.0", "Normal"], ["35.0", "Obesidad"]]

respuesta: perfil[idx][1]
tipo: mc
opciones_explicitas: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad"]

enunciado: "Un estudiante tiene un IMC de {perfil[idx][0]}. ¿Cuál es su categoría?"

explicacion: |
  Para un IMC de {perfil[idx][0]}, la categoría correspondiente es {perfil[idx][1]}.
```

### 6 — Identificación de categoría

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["imc", "salud", "categorias"]

variables:
  datos: [["22.5", "Normal"], ["17.0", "Bajo peso"], ["32.0", "Obesidad"], ["27.5", "Sobrepeso"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Si una persona tiene un IMC de {datos[idx][0]}, su categoría de salud es ___."

respuestas_validas:
  - "Normal"
  - "Bajo peso"
  - "Obesidad"
  - "Sobrepeso"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El IMC se clasifica según los rangos establecidos por la OMS: bajo peso (menos de 18,5), normal (18,5–24,9), sobrepeso (25–29,9), obesidad (30 o más).
```

### 7 — Clasificación de IMC

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["imc", "salud", "categorias"]

variables:
  datos: [["28.0", "Sobrepeso"], ["15.0", "Bajo peso"], ["21.0", "Normal"], ["35.0", "Obesidad"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Un individuo con un IMC de {datos[idx][0]} se encuentra en la categoría de:"

opciones_explicitas: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad"]

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Un IMC de {datos[idx][0]} cae dentro del rango de {datos[idx][1]}.
```

### 8 — Rango de peso normal

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["imc", "salud", "categorias"]

enunciado: "Según los estándares de salud, el límite inferior del rango de IMC considerado 'Normal' es ___."

respuestas_validas:
  - "18.5"
respuesta: "18.5"
tipo: completar

explicacion: |
  El rango de peso normal (saludable) según la OMS es un IMC entre 18,5 y 24,9.
```

### 9 — Identificación de obesidad

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["imc", "salud", "categorias"]

variables:
  datos: [["31.2", "Obesidad"], ["26.0", "Sobrepeso"], ["22.0", "Normal"], ["16.5", "Bajo peso"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Si una persona presenta un IMC de {datos[idx][0]}, ¿cuál es su clasificación?"

opciones_explicitas: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad"]

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Un IMC mayor o igual a 30 se clasifica como obesidad; entre 25 y 29,9 como sobrepeso; entre 18,5 y 24,9 como normal; menos de 18,5 como bajo peso.
```

### 10 — Categoría de bajo peso

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["imc", "salud", "categorias"]

variables:
  datos: [["16.2", "Bajo peso"], ["20.0", "Normal"], ["28.0", "Sobrepeso"], ["31.0", "Obesidad"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Un valor de IMC de {datos[idx][0]} indica que la persona está en la categoría de ___."

respuestas_validas:
  - "Bajo peso"
  - "Normal"
  - "Sobrepeso"
  - "Obesidad"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El bajo peso se define con un IMC inferior a 18,5.
```

### 11 — El dilema del atleta

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["limitaciones", "musculo"]

enunciado: "Un atleta de alto rendimiento con una masa muscular muy desarrollada puede presentar un IMC elevado, pero esto no significa necesariamente que tenga exceso de tejido adiposo (grasa), ya que el IMC no distingue masa muscular de masa ___."

respuestas_validas:
  - "grasa"
respuesta: "grasa"
tipo: completar

explicacion: |
  El IMC es un indicador general que sólo relaciona peso y altura. Como el músculo es más denso que la grasa, una persona muy musculosa puede tener un IMC alto sin tener exceso de grasa corporal.
```

### 12 — Distribución de la grasa

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["distribucion", "localizacion"]

enunciado: "Una limitación importante del IMC es que no indica la ___ de la grasa corporal, es decir, no permite saber si la grasa se encuentra acumulada en la zona abdominal o en otras partes del cuerpo."

respuestas_validas:
  - "distribución"
  - "distribucion"
respuesta: "distribución"
tipo: completar

explicacion: |
  El IMC es un valor global. No puede determinar la localización de la grasa, lo cual es crucial para la salud (la grasa abdominal es un factor de riesgo mayor).
```

### 13 — Composición corporal

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["composicion", "limitacion"]

enunciado: "Si comparamos a dos personas con el mismo IMC, pero una es deportista y la otra es sedentaria, el IMC podría ser engañoso porque no mide la ___ corporal."

respuestas_validas:
  - "composición"
  - "composicion"
respuesta: "composición"
tipo: completar

explicacion: |
  La composición corporal se refiere a la proporción de masa magra (músculos, huesos, órganos) y masa grasa. El IMC ignora esta distinción.
```

### 14 — El caso del exceso de peso

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["falso_positivo"]

enunciado: "El IMC puede dar un resultado de 'sobrepeso' en una persona que es físicamente muy sana y tiene un porcentaje de grasa bajo, simplemente porque su masa muscular es muy pesada. A este fenómeno se le conoce como un ___ del indicador."

respuestas_validas:
  - "falso positivo"
respuesta: "falso positivo"
tipo: completar

explicacion: |
  Cuando el indicador señala un problema de salud que no existe (debido a la masa muscular), estamos ante un falso positivo.
```

### 15 — Limitación por estructura ósea

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["limitaciones", "densidad"]

enunciado: "El IMC no tiene en cuenta la ___ ósea ni la densidad de los tejidos, lo que lo hace menos preciso en personas con estructuras óseas muy grandes o muy pequeñas."

respuestas_validas:
  - "densidad"
respuesta: "densidad"
tipo: completar

explicacion: |
  La densidad ósea y la estructura esquelética influyen en el peso total, pero el IMC no puede diferenciarlas de la grasa o el músculo.
```

### 16 — Uso del IMC

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["conceptos", "salud"]

tipo: mc
opciones_explicitas: ["Un diagnóstico médico definitivo", "Un indicador de salud individual", "Un filtro poblacional rápido", "Una medida de grasa corporal exacta"]

respuesta: "Un filtro poblacional rápido"

enunciado: "El Índice de Masa Corporal (IMC) se utiliza principalmente en salud pública como:"

explicacion: |
  El IMC es una herramienta de tamizaje rápida y barata para estudiar poblaciones enteras, no un diagnóstico médico individual preciso.
```

### 17 — IMC en adolescentes

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["crecimiento", "percentiles"]

tipo: vf
respuesta: falso

enunciado: "El cálculo del IMC en niños y adolescentes debe interpretarse de la misma forma que en adultos, sin considerar la edad o el sexo."

explicacion: |
  Falso. En personas en crecimiento se usan tablas de percentiles según edad y sexo, no las categorías fijas usadas en adultos.
```

### 18 — Interpretación en crecimiento

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["percentiles", "crecimiento"]

tipo: mc
opciones_explicitas: ["Percentiles", "Escala de colores", "Un número fijo", "Un diagnóstico clínico"]

respuesta: "Percentiles"

enunciado: "Para evaluar el estado nutricional en personas en etapa de crecimiento, el IMC se debe comparar con:"

explicacion: |
  Se usan tablas de percentiles específicas por edad y sexo, porque el cuerpo de niños y adolescentes cambia de proporciones constantemente durante el crecimiento.
```

### 19 — Limitaciones del IMC (repaso)

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "avanzado"
  tags: ["limitaciones", "composición_corporal"]

tipo: vf
respuesta: verdadero

enunciado: "Un atleta con una masa muscular muy elevada puede presentar un IMC alto sin que esto signifique necesariamente exceso de grasa corporal."

explicacion: |
  Verdadero. El músculo pesa más que la grasa en el mismo volumen, así que el IMC (que sólo usa peso y altura) puede clasificar mal a una persona muy musculosa.
```

### 20 — Aplicación del IMC

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["diagnóstico", "salud"]

tipo: mc
opciones_explicitas: ["Es un diagnóstico médico individual", "Es una herramienta de tamizaje", "Es una medida de densidad ósea", "Es un examen de sangre"]

respuesta: "Es una herramienta de tamizaje"

enunciado: "Debido a que no distingue entre masa muscular y masa grasa, el IMC se considera una herramienta de:"

explicacion: |
  El IMC filtra rápido a nivel poblacional, pero no reemplaza una evaluación médica completa de composición corporal.
```

### 21 — La fórmula del IMC (repaso)

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "basico"
  tags: ["formula", "potencias"]

opciones_explicitas: ["peso / altura", "peso * altura", "peso / (altura * altura)", "peso / (altura + altura)"]
respuesta: "peso / (altura * altura)"
tipo: mc

enunciado: "Para calcular el Índice de Masa Corporal (IMC), se utiliza el peso en kilogramos dividido por el cuadrado de la altura en metros. ¿Cuál es la expresión matemática correcta?"

explicacion: |
  El IMC relaciona la masa con la superficie corporal. Como la altura es una medida lineal, debe elevarse al cuadrado para que la unidad de medida sea coherente con la superficie.
```

### 22 — Cálculo de IMC (aplicado)

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["calculo", "aplicacion"]

variables:
  idx: uno_de([0, 1])
  escenario: [["70", "1.75", "22.86"], ["85", "1.80", "26.23"]]

enunciado: "Un estudiante tiene un peso de {escenario[idx][0]} kg y una altura de {escenario[idx][1]} m. ¿Cuál es su IMC (redondeado a dos decimales)?"

opciones_explicitas: ["22.86", "26.23", "30.15", "22.40"]
respuesta: escenario[idx][2]
tipo: mc

explicacion: |
  El cálculo es: {escenario[idx][0]} / ({escenario[idx][1]} × {escenario[idx][1]}) = {escenario[idx][2]}.
```

### 23 — Clasificación del IMC (aplicado)

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["clasificacion", "categorias"]

variables:
  idx: uno_de([0, 1, 2])
  caso: [["22.0", "Normal"], ["32.0", "Obesidad"], ["16.0", "Bajo peso"]]

enunciado: "Si una persona tiene un IMC de {caso[idx][0]}, ¿cuál es su categoría según la OMS?"

opciones_explicitas: ["Bajo peso", "Normal", "Sobrepeso", "Obesidad"]
respuesta: caso[idx][1]
tipo: mc

explicacion: |
  El valor {caso[idx][0]} corresponde a la categoría {caso[idx][1]} según los rangos oficiales de la OMS.
```

### 24 — Relación peso y altura

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "avanzado"
  tags: ["logica", "potencias"]

opciones_explicitas: ["sube", "baja", "se mantiene", "se duplica"]
respuesta: "baja"
tipo: mc

enunciado: "Analizando la fórmula del IMC, si una persona mantiene su mismo peso pero su altura aumenta, ¿qué le pasa a su IMC?"

explicacion: |
  Como la altura está en el denominador y elevada al cuadrado, un aumento en la altura provoca una disminución en el resultado del IMC.
```

### 25 — Completar el procedimiento

```
metadata:
  materia: "ed_fisica"
  tema: "imc_indice_masa_corporal"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

variables:
  idx: uno_de([0, 1])
  datos: [["80", "1.70", "27.68"], ["60", "1.60", "23.44"]]

enunciado: "Para un sujeto de {datos[idx][0]} kg y {datos[idx][1]} m, el primer paso es elevar la altura al cuadrado; el segundo paso es dividir el peso por ese resultado. El IMC final es ___."

opciones_explicitas: ["27.68", "23.44", "30.00", "25.50"]
respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - "27.68"
  - "23.44"

explicacion: |
  {datos[idx][1]} × {datos[idx][1]}, y luego {datos[idx][0]} dividido por ese resultado, da {datos[idx][2]}.
```
