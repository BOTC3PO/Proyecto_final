### 1 — Diferencia fundamental
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos_base", "probabilidad"]

respuesta: "riesgo"
tipo: completar
respuestas_validas: ["riesgo"]

enunciado: "Cuando un agente se enfrenta a un escenario donde los resultados posibles y sus probabilidades de ocurrencia son conocidos, se dice que está operando bajo un escenario de ___."

explicacion: |
  El riesgo implica la existencia de una distribución de probabilidad conocida (ej. lanzar un dado), mientras que la incertidumbre ocurre cuando no se pueden asignar probabilidades a los resultados.
```

### 2 — Escenario de incertidumbre
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["incertidumbre", "decision"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Lanzar una moneda equilibrada para decidir un contrato", "riesgo"],
    ["Lanzar un dado de 6 caras para decidir un contrato", "riesgo"],
    ["Lanzar un dado de 6 caras para decidir un contrato", "riesgo"],
    ["Predecir el clima exacto de un día desconocido sin modelos históricos", "incertidumbre"],
    ["Lanzar una moneda trucada sin saber su probabilidad", "incertidumbre"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analiza el siguiente caso: {escenarios[escenario_idx][0]}. ¿En qué condición se encuentra el decisor?"

explicacion: |
  Si el decisor conoce la probabilidad de cada cara o resultado, está en riesgo. Si la probabilidad es desconocida o no puede ser estimada, está en incertidumbre.
```

### 3 — Verdad o Falso: Probabilidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["teoria_decision"]

respuesta: falso
tipo: vf

enunciado: "La incertidumbre se define como la situación donde los resultados son aleatorios pero se conoce la probabilidad exacta de cada uno de ellos."

explicacion: |
  Falso. La definición dada corresponde al concepto de riesgo. La incertidumbre implica la falta de conocimiento sobre las probabilidades.
```

### 4 — Ordenar la transición de información
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["modelado", "informacion"]

respuesta: ["Incertidumbre", "Riesgo", "Certeza"]
tipo: ordenar
opciones_explicitas: ["Incertidumbre", "Riesgo", "Certeza"]

enunciado: "Ordena estos estados de conocimiento desde el que tiene menor información sobre los resultados hasta el que tiene información total (conocimiento absoluto):"

explicacion: |
  En la incertidumbre no hay información probabilística; en el riesgo la información es probabilística; en la certeza, el resultado es predecible al 100%.
```

### 5 — Contraste de conceptos
```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  es_riesgo: uno_de([true, falso])
  caso_riesgo: ["Lanzar una moneda justa", "true"]
  caso_incertidumbre: ["Lanzar una moneda cuya probabilidad de cara se desconoce", "false"]

respuesta: es_riesgo
tipo: vf

enunciado: "El siguiente caso representa un escenario de riesgo: {uno_de([caso_riesgo, caso_incertidumbre])}."

explicacion: |
  Si el caso seleccionado es 'Lanzar una moneda justa', la respuesta es verdadero porque la probabilidad (0.5) es conocida. Si el caso es el otro, es falso.
```