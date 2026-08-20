### 1 — Concepto de resistencia equivalente
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["resistencia", "equivalente", "conceptos"]

respuesta: "resistencia equivalente"
tipo: completar
respuestas_validas: ["resistencia equivalente"]

enunciado: "En un circuito complejo que combina tramos en serie y en paralelo, la única resistencia que permite simplificar todo el sistema a un solo componente es la ___."

explicacion: |
  La resistencia equivalente es el valor de una resistencia única que puede sustituir a todo el conjunto de resistencias de un circuito, manteniendo la misma corriente y voltaje.
```

### 2 — Comportamiento en serie
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["serie", "corriente", "voltaje"]

respuesta: falso
tipo: vf

enunciado: "En un tramo de un circuito que está conectado en serie, la corriente eléctrica que circula por cada una de las resistencias es la misma."

explicacion: |
  Verdadero. En una conexión en serie, al haber un único camino para la carga, la intensidad de corriente (I) es constante en todos los puntos del tramo.
```

### 3 — Identificación de componentes
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["paralelo", "nodos", "voltaje"]

variables:
  idx: uno_de([0, 1])
  datos: [["voltaje", "igual"], ["corriente", "se divide"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["voltaje", "corriente", "resistencia", "potencia"]

enunciado: "En un tramo de un circuito conectado en paralelo, la propiedad que se mantiene constante en cada rama es el ___."

explicacion: |
  En una conexión en paralelo, todos los terminales de las resistencias están conectados a los mismos dos puntos (nodos), por lo que el voltaje es el mismo para todas.
```

### 4 — Pasos para la resolución
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["metodologia", "resolucion"]

respuesta: ["identificar", "simplificar", "calcular"]
tipo: ordenar
opciones_explicitas: ["identificar", "simplificar", "calcular"]

enunciado: "Ordena los pasos lógicos para resolver un circuito mixto complejo:"

pasos:
  - "Identificar qué partes están en serie y cuáles en paralelo."
  - "Simplificar los tramos mediante el cálculo de resistencias equivalentes parciales."
  - "Calcular la resistencia total y las variables finales (I, V, R)."

explicacion: |
  Para resolver circuitos mixtos, primero se debe analizar la topología para separar tramos, luego reducir cada tramo a una resistencia equivalente y finalmente resolver el circuito simplificado.
```

### 5 — Suma de resistencias en serie
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["serie", "calculo"]

variables:
  idx: uno_de([0, 1])
  escenarios: [[10, 5, 15], [20, 30, 50]]

respuesta: escenarios[idx][2]
tipo: input
tolerancia_abs: 0

enunciado: "Si tenemos un tramo de un circuito mixto con dos resistencias en serie de {escenarios[idx][0]} $\Omega$ y {escenarios[idx][1]} $\Omega$, ¿cuál es su resistencia equivalente?"

pasos:
  - "Identificar que las resistencias están en serie."
  - "Sumar los valores de las resistencias: $R_{eq} = R_1 + R_2$."

explicacion: |
  En una conexión en serie, la resistencia total es la suma aritmética de las resistencias individuales.
```