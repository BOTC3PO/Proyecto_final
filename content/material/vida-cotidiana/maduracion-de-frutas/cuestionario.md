# Vida Cotidiana — Maduración de frutas: almidón que se vuelve azúcar (cuestionario, 22 preguntas VBLang)

> Tema: `vida-cotidiana/maduracion-de-frutas`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "almidón"
tipo: completar

enunciado: "Una fruta verde todavía inmadura tiene gran parte de sus carbohidratos guardados como ___, una molécula grande casi sin sabor dulce."

respuestas_validas:
  - "almidón"

explicacion: |
  El almidón es una molécula grande formada por muchas unidades de
  glucosa encadenadas, que la lengua no puede "leer" como dulce.
```

### 2 — pregunta 2

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "basico"
  tags: ["enzima"]

variables:
  n: uno_de([1, 1])

respuesta: "amilasas"
tipo: mc
opciones_explicitas: ["amilasas", "lipasas", "proteasas"]

enunciado: "Las enzimas propias de la planta que rompen las cadenas de almidón durante la maduración se llaman principalmente..."

explicacion: |
  Las amilasas rompen el almidón en azúcares simples como glucosa,
  fructosa y sacarosa.
```

### 3 — pregunta 3

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "intermedio"
  tags: ["por que dulce"]

variables:
  n: uno_de([1, 1])

respuesta: "los azúcares simples sí son detectados por la lengua como dulces"
tipo: mc
opciones_explicitas: ["los azúcares simples sí son detectados por la lengua como dulces", "el almidón es más dulce que los azúcares simples", "la cantidad total de carbohidratos aumenta mucho"]

enunciado: "Una fruta madura es más dulce que la misma fruta verde porque..."

explicacion: |
  La cantidad total de carbohidratos apenas cambia; lo que cambia es su
  forma (de almidón grande a azúcares simples chicos).
```

### 4 — pregunta 4

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "intermedio"
  tags: ["prueba del yodo"]

variables:
  n: uno_de([1, 1])

respuesta: "azul-negro muy oscuro"
tipo: mc
opciones_explicitas: ["azul-negro muy oscuro", "rojo brillante", "no cambia de color nunca"]

enunciado: "El yodo reacciona con el almidón formando un complejo de color..."

explicacion: |
  Es la misma reacción usada en laboratorio para detectar almidón en
  cualquier muestra.
```

### 5 — pregunta 5

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "avanzado"
  tags: ["prueba del yodo azucares"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El yodo reacciona intensamente con los azúcares simples como la glucosa y la fructosa, formando el mismo color oscuro que con el almidón."

explicacion: |
  El yodo NO reacciona con los azúcares simples: sobre una zona con
  poco almidón la mancha queda mucho más clara o no se forma.
```

### 6 — pregunta 6

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "intermedio"
  tags: ["resultado experimento"]

variables:
  n: uno_de([1, 1])

respuesta: "banana verde"
tipo: mc
opciones_explicitas: ["banana verde", "banana bien madura", "ambas se tiñen exactamente igual"]

enunciado: "En el experimento del yodo, la que se tiñe de un violeta-negro intenso y parejo es la..."

explicacion: |
  La banana verde todavía es casi todo almidón, por eso reacciona
  fuertemente con el yodo.
```

### 7 — pregunta 7

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "basico"
  tags: ["origen del dulzor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El azúcar de una banana madura \"aparece\" porque el almidón se transforma, no porque se le sume azúcar desde afuera."

explicacion: |
  Es una transformación química interna (hidrólisis del almidón), no
  una adición externa de azúcar.
```

### 8 — pregunta 8

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "avanzado"
  tags: ["gas etileno"]

variables:
  n: uno_de([1, 1])

respuesta: "etileno"
tipo: completar

enunciado: "El gas que las mismas frutas liberan y que acelera la actividad de las enzimas de maduración se llama ___."

respuestas_validas:
  - "etileno"

explicacion: |
  Por eso guardar frutas verdes en una bolsa cerrada las madura más
  rápido: se concentra el etileno que ellas mismas liberan.
```

### 9 — pregunta 9

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "intermedio"
  tags: ["bolsa cerrada"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Guardar frutas verdes en una bolsa cerrada las madura más rápido, porque concentra el etileno que ellas mismas liberan."

explicacion: |
  El etileno acumulado acelera la actividad de las amilasas que rompen
  el almidón en azúcares.
```

### 10 — pregunta 10

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "avanzado"
  tags: ["comparacion papa"]

variables:
  n: uno_de([1, 1])

respuesta: "cuánto de ese almidón ya se rompió en azúcares simples"
tipo: mc
opciones_explicitas: ["cuánto de ese almidón ya se rompió en azúcares simples", "la cantidad total de carbohidratos que tiene cada una", "el color de la cáscara de cada una"]

enunciado: "La papa (casi puro almidón) sabe muy distinta de una fruta madura porque la diferencia clave es..."

explicacion: |
  Ambas son plantas con carbohidratos de reserva, pero la fruta madura
  ya convirtió mucho de ese almidón en azúcares simples.
```

### 11 — pregunta 11

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "basico"
  tags: ["molecula almidon"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El almidón está formado por muchas unidades de glucosa encadenadas."

explicacion: |
  Es una molécula grande hecha de unidades más chicas (glucosa) unidas
  entre sí.
```

### 12 — pregunta 12

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "intermedio"
  tags: ["azucares producidos"]

variables:
  azucar: uno_de(["glucosa", "fructosa", "sacarosa"])

respuesta: verdadero
tipo: vf

enunciado: "\"{azucar}\" es uno de los azúcares simples mencionados en la teoría que se produce al romperse el almidón durante la maduración."

explicacion: |
  Las amilasas rompen el almidón en estos azúcares simples, más chicos
  y detectables por la lengua como dulces.
```

### 13 — pregunta 13

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "basico"
  tags: ["frutas del experimento"]

variables:
  fruta: uno_de(["banana", "manzana", "mango"])

respuesta: verdadero
tipo: vf

enunciado: "La \"{fruta}\" es mencionada en la teoría como ejemplo de fruta que acumula almidón cuando está verde."

explicacion: |
  Las tres frutas mencionadas en la teoría siguen el mismo proceso de
  transformación de almidón en azúcares al madurar.
```

### 14 — pregunta 14

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "avanzado"
  tags: ["por que no dulce cuando verde"]

variables:
  n: uno_de([1, 1])

respuesta: "la lengua no puede \"leer\" una molécula tan grande como el almidón"
tipo: mc
opciones_explicitas: ["la lengua no puede \"leer\" una molécula tan grande como el almidón", "no hay ningún carbohidrato en la fruta verde", "la fruta verde tiene menos carbohidratos totales"]

enunciado: "Una banana verde casi no tiene sabor dulce porque..."

explicacion: |
  El almidón es demasiado grande para que los receptores de dulzor de
  la lengua lo detecten, a diferencia de los azúcares simples.
```

### 15 — pregunta 15

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "intermedio"
  tags: ["reactivo alternativo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La povidona yodada también sirve para hacer la prueba del yodo sobre la fruta, según la teoría."

explicacion: |
  Es una alternativa a la tintura de yodo pura, con el mismo principio
  de reacción con el almidón.
```

### 16 — pregunta 16

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "basico"
  tags: ["pasos del experimento"]

variables:
  n: uno_de([1, 1])

respuesta: "cortar la fruta y gotear tintura de yodo sobre la pulpa"
tipo: mc
opciones_explicitas: ["cortar la fruta y gotear tintura de yodo sobre la pulpa", "hervir la fruta durante una hora", "congelar la fruta antes de analizarla"]

enunciado: "El experimento casero para ver la transformación de almidón en azúcar consiste en..."

explicacion: |
  Se corta la fruta en distintos estados de maduración y se gotea yodo
  para observar la diferencia de color.
```

### 17 — pregunta 17

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "avanzado"
  tags: ["banana madura resultado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la banana bien madura, la mancha de yodo queda mucho más tenue o casi no se forma, porque la mayor parte del almidón ya se rompió en azúcares."

explicacion: |
  Menos almidón disponible significa menos reacción visible con el
  yodo.
```

### 18 — pregunta 18

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "intermedio"
  tags: ["hidrolisis"]

variables:
  n: uno_de([1, 1])

respuesta: "hidrólisis"
tipo: completar

enunciado: "El proceso químico general por el cual una molécula grande (como el almidón) se rompe en unidades más chicas se llama ___."

respuestas_validas:
  - "hidrólisis"

explicacion: |
  Es el mismo tipo de proceso mencionado en la introducción del tema:
  hidrólisis de almidón a azúcares simples.
```

### 19 — pregunta 19

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "basico"
  tags: ["no es solo curiosidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El principio de hidrólisis del almidón en azúcares no es sólo curiosidad de cocina: explica varios fenómenos cotidianos reales."

explicacion: |
  Explica por qué una banana se endulza sola, por qué madura más rápido
  en bolsa cerrada, y por qué una papa sabe distinto a una fruta.
```

### 20 — pregunta 20

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "intermedio"
  tags: ["cantidad total carbohidratos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La cantidad total de carbohidratos de una fruta apenas cambia durante la maduración; lo que cambia es su forma química."

explicacion: |
  No se agrega ni se pierde masa de carbohidratos: el almidón se
  transforma en azúcares simples dentro de la misma fruta.
```

### 21 — pregunta 21

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "avanzado"
  tags: ["deteccion de almidon en general"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La misma reacción de yodo con almidón que se usa con frutas se usa en laboratorio para detectar almidón en cualquier muestra."

explicacion: |
  Es una técnica general de química, no exclusiva de la fruta: el yodo
  siempre forma ese complejo azul-negro con el almidón presente.
```

### 22 — pregunta 22

```
metadata:
  materia: "vida_cotidiana"
  tema: "maduracion_de_frutas_almidon_que_se_vuelve_azucar"
  nivel: "basico"
  tags: ["dependencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema depende de haber visto antes cómo escalar una receta, dentro del recorrido de Vida Cotidiana."

explicacion: |
  Es el nodo de prerrequisito documentado en la dependencia del tema
  dentro del mapa.
```

