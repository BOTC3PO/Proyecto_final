# Biología — Mitosis y meiosis (cuestionario, 20 preguntas VBLang)

> Tema: `BC`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma, en paralelo) y
> corregido a mano. Bugs de esta tanda: `tipo:` faltante en una
> pregunta (sólo `respuesta` sin declarar el tipo), y un lote entero sin
> `explicacion:` — agregada por consistencia con el resto del archivo.

---

### 1 — Mitosis: identidad celular

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["mitosis", "division_celular"]

respuesta: verdadero
tipo: vf

enunciado: "La mitosis produce 2 células hijas idénticas a la célula original."

explicacion: |
  La mitosis asegura que ambas células resultantes tengan la misma información genética que la célula madre.
```

### 2 — Mitosis: función biológica

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["mitosis", "crecimiento"]

respuesta: verdadero
tipo: vf

enunciado: "La mitosis es el proceso detrás del crecimiento y la reparación de tejidos en organismos pluricelulares."

explicacion: |
  Permite aumentar de tamaño y sustituir células dañadas.
```

### 3 — Mitosis: número de cromosomas

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["mitosis", "cromosomas"]

respuesta: falso
tipo: vf

enunciado: "Las células hijas de la mitosis tienen la mitad de cromosomas que la célula original."

explicacion: |
  Falso. Tienen el mismo número (diploide); la reducción a la mitad ocurre en la meiosis.
```

### 4 — Mitosis: cálculo de cromosomas

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["mitosis", "calculo"]

variables:
  cromosomas_originales: uno_de([2, 4, 6, 8])

respuesta: cromosomas_originales
tipo: input
tolerancia_abs: 0.01

enunciado: "Si una célula original tiene {cromosomas_originales} cromosomas, ¿cuántos tendrá cada célula hija tras la mitosis?"

pasos:
  - "La mitosis mantiene la dotación cromosómica original."

explicacion: |
  Cada hija tiene {cromosomas_originales} cromosomas, igual que la original.
```

### 5 — Función de la meiosis

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis", "gametos"]

respuesta: verdadero
tipo: vf

enunciado: "La meiosis produce células sexuales (gametos) como óvulos y espermatozoides."

explicacion: |
  Es el proceso especializado en producir gametos para la reproducción sexual.
```

### 6 — Resultado de la meiosis

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis", "cromosomas"]

respuesta: verdadero
tipo: vf

enunciado: "La meiosis produce 4 células hijas con la mitad de cromosomas que la célula original."

explicacion: |
  Correcto, reduce el número a haploide (n).
```

### 7 — Localización de la meiosis

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis"]

respuesta: falso
tipo: vf

enunciado: "La meiosis ocurre en casi cualquier célula del cuerpo, igual que la mitosis."

explicacion: |
  Falso. Sólo ocurre en las células germinales de los órganos reproductivos.
```

### 8 — Reducción cromosómica

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["meiosis", "calculo"]

variables:
  cromosomas_originales: uno_de([4, 8, 12, 16])

respuesta: cromosomas_originales / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Si una célula somática tiene {cromosomas_originales} cromosomas, ¿cuántos tendrá cada célula hija tras la meiosis?"

explicacion: |
  De diploide (2n) a haploide (n): {cromosomas_originales} / 2.
```

### 9 — Células hijas en mitosis vs. meiosis

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["division_celular"]

variables:
  escenario: [["mitosis", 2], ["meiosis", 4]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [2, 4]

enunciado: "¿Cuántas células hijas se obtienen al finalizar el proceso de {escenario[idx][0]}?"

explicacion: |
  La {escenario[idx][0]} produce {escenario[idx][1]} células hijas.
```

### 10 — Identidad genética en la división celular

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["genetica", "variabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Las células hijas de la mitosis son idénticas entre sí, pero las de la meiosis no (por la recombinación genética)."

explicacion: |
  La mitosis busca replicación exacta; la meiosis busca variabilidad (crossing-over).
```

### 11 — Ubicación de la mitosis

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["celulas_somaticas"]

respuesta: "mitosis"
tipo: mc
opciones_explicitas: ["mitosis", "meiosis", "ambos por igual", "ninguno"]

enunciado: "¿Cuál de estos procesos ocurre en casi cualquier célula del cuerpo, para crecimiento y reparación?"

explicacion: |
  La mitosis es la división de las células somáticas.
```

### 12 — Ubicación de la meiosis

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["gametogenesis"]

respuesta: "meiosis"
tipo: mc
opciones_explicitas: ["meiosis", "mitosis", "ambos por igual", "ninguno"]

enunciado: "¿Cuál de estos procesos ocurre exclusivamente en órganos reproductivos, para formar gametos?"

explicacion: |
  La meiosis ocurre en las gónadas, para producir óvulos y espermatozoides.
```

### 13 — El destino de los cromosomas en la fecundación

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["genetica", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si los gametos tuvieran el número completo de cromosomas (diploide), la fecundación duplicaría el número de cromosomas en cada generación."

explicacion: |
  Correcto — por eso la meiosis reduce a la mitad antes de la fecundación.
```

### 14 — El propósito de la meiosis

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis"]

respuesta: verdadero
tipo: vf

enunciado: "La meiosis existe fundamentalmente para evitar que el número de cromosomas se duplique en cada nueva generación."

explicacion: |
  Correcto, mantiene constante el número cromosómico de la especie.
```

### 15 — Restauración del número cromosómico

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["fecundacion"]

respuesta: verdadero
tipo: vf

enunciado: "La fecundación (unión de dos gametos haploides) restaura el número normal (diploide) de cromosomas en el nuevo organismo."

explicacion: |
  Correcto, n + n = 2n en el organismo resultante.
```

### 16 — Variación genética y selección natural

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["evolucion", "variacion"]

respuesta: verdadero
tipo: vf

enunciado: "La variación genética generada durante la meiosis es importante para la selección natural, porque sin variabilidad no habría rasgos sobre los que actuar."

explicacion: |
  Correcto — ver ../seleccion-natural/.
```

### 17 — Duplicación de ADN antes de dividirse

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "avanzado"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Antes de dividirse (sea mitosis o meiosis), la célula primero duplica todo su material genético, para que cada célula hija tenga una copia completa."

explicacion: |
  Correcto. Sin esa duplicación previa, no habría suficiente material para repartir entre las células hijas.
```

### 18 — Organismos unicelulares y mitosis

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["mitosis", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "En organismos unicelulares, la mitosis también sirve como forma de reproducción (cada división crea un nuevo individuo)."

explicacion: |
  Correcto, en unicelulares dividirse ES reproducirse.
```

### 19 — Reproducción sexual vs. asexual

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "avanzado"
  tags: ["reproduccion", "comparacion"]

respuesta: "meiosis"
tipo: mc
opciones_explicitas: ["meiosis", "mitosis", "ambas por igual", "ninguna"]

enunciado: "¿Cuál de los dos procesos está asociado a la reproducción SEXUAL (con dos progenitores aportando material genético)?"

explicacion: |
  La meiosis produce los gametos que se combinan en la reproducción sexual.
```

### 20 — Error en la división celular (aplicación)

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "avanzado"
  tags: ["aplicacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Un error durante la mitosis que hace que las células hijas se dividan sin control (sin detenerse) puede estar relacionado con el cáncer."

explicacion: |
  Correcto. El cáncer es, en esencia, una división celular descontrolada — un fallo en los mecanismos que regulan la mitosis.
```
