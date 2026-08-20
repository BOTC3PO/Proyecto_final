### 1 — Composición del Universo
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "composicion"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["5%", "materia ordinaria"], ["27%", "materia oscura"], ["68%", "energía oscura"]]

opciones_explicitas: ["5%", "27%", "68%"]
respuesta: datos[idx][0]
tipo: mc

enunciado: "Según el modelo estándar de la cosmología, la fracción del universo compuesta por {datos[idx][1]} es aproximadamente del ___."

explicacion: |
  La composición estimada del universo es: 5% materia ordinaria, 27% materia oscura y 68% energía oscura.
```

### 2 — El componente dominante
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["energia_oscura"]

respuesta: "energía oscura"
tipo: completar
respuestas_validas: ["energía oscura"]

enunciado: "El componente que constituye aproximadamente el 68% del universo y es responsable de la expansión acelerada se denomina ___."

explicacion: |
  La energía oscura es el componente dominante del universo, representando cerca del 68% de su densidad total.
```

### 3 — Orden de magnitudes
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["orden", "densidad"]

opciones_explicitas: ["Materia ordinaria", "Materia oscura", "Energía oscura"]
respuesta: ["Materia ordinaria", "Materia oscura", "Energía oscura"]
tipo: ordenar

enunciado: "Ordena los componentes del universo de menor a mayor abundancia (porcentaje de densidad):"

explicacion: |
  El orden correcto de menor a mayor es: Materia ordinaria (5%), Materia oscura (27%) y Energía oscura (68%).
```

### 4 — Cálculo de densidad total
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["calculo", "porcentajes"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["5", "materia ordinaria"], ["27", "materia oscura"], ["68", "energía oscura"]]

respuesta: escenario[idx][0]
tipo: input
tolerancia_abs: 0.1

enunciado: "Si el universo tiene una densidad total de 100 unidades, ¿cuántas unidades corresponden a la {escenario[idx][1]}?"

pasos:
  - "Identificar el porcentaje correspondiente al componente mencionado."
  - "Multiplicar el porcentaje por la densidad total (100)."

explicacion: |
  El valor corresponde al porcentaje asignado a la {escenario[idx][1]} en el modelo cosmológico actual.
```

### 5 — Verdad o Falso: Materia vs Energía
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["conceptos"]

variables:
  idx: uno_de([0, 1])
  caso: [["verdadero", "La materia ordinaria es el componente más abundante."], ["falso", "La materia oscura es el componente más abundante."]]

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Analiza la siguiente afirmación: {caso[idx][0]}. ¿Es correcta?"

explicacion: |
  La afirmación es {caso[idx][1]}. La materia ordinaria solo representa el 5%, mientras que la energía oscura es la mayoritaria con un 68%.
```