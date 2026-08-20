### 1 — Diseño de una viga de soporte
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["estructuras", "estatica"]

variables:
  datos: [[1200, 5.5, 2.5], [1500, 6.0, 3.0], [2000, 7.5, 4.0]]
  idx: uno_de([0,1,2])
  carga: datos[idx][0]
  longitud: datos[idx][1]
  distancia_apoyo: datos[idx][2]

enunciado: "Para diseñar una viga de soporte, se modela la carga puntual $P$ en el centro de una viga de longitud $L$. Si la carga es de {carga} N y la longitud es de {longitud} m, el momento flector máximo $M_{max}$ se calcula como $(P \cdot L) / 4$."

pasos:
  - "Identificar la carga $P$ y la longitud $L$ del modelo."
  - "Aplicar la fórmula del momento flector para vigas simplemente apoyadas con carga centrada."
  - "Calcular el valor resultante en N·m."

respuesta: (carga * longitud) / 4
tipo: input
tolerancia_abs: 0.1

explicacion: |
  El modelado matemático permite predecir el esfuerzo interno. En este caso, $M_{max} = ({carga} \cdot {longitud}) / 4 = {redondear((carga * longitud) / 4, 2)}$ N·m.
```

### 2 — Análisis de estabilidad térmica
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["termodinamica", "modelado"]

variables:
  escenarios: [["se expande", "se contrae", "no cambia"], ["aumenta", "disminuye", "se mantiene"]]
  idx: uno_de([0,1,2])

enunciado: "En el modelado de un material sometido a un incremento de temperatura constante, si el coeficiente de dilatación es positivo, el componente físico ___."

respuesta: ["se expande", "se contrae", "no cambia"][idx]
tipo: completar
respuestas_validas: ["se expande", "se contrae", "no cambia"]

explicacion: |
  El modelo matemático $L = L_0(1 + \alpha \cdot \Delta T)$ indica que si $\Delta T > 0$ y $\alpha > 0$, la longitud final es mayor a la inicial.
```

### 3 — Simulación de flujo de fluidos
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "avanzado"
  tags: ["fluidos", "simulacion"]

enunciado: "Al modelar el flujo de un fluido a través de una tubería mediante la ecuación de Bernoulli, se asume que el fluido es ideal. ¿Es este modelo físicamente representativo para un fluido real con alta viscosidad?"

respuesta: falso
tipo: vf

explicacion: |
  El modelo de Bernoulli es una simplificación idealizada que desprecia la viscosidad y las pérdidas de energía por fricción, por lo que no es preciso para fluidos reales muy viscosos.
```

### 4 — Secuencia de validación de un prototipo
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["gestion_proyectos", "metodologia"]

enunciado: "Antes de la construcción física de un puente, se debe seguir un orden lógico de modelado y validación. Ordene las siguientes etapas:"

opciones_explicitas: ["Definición de requerimientos", "Modelado matemático", "Simulación computacional", "Pruebas de prototipo a escala"]
respuesta: ["Definición de requerimientos", "Modelado matemático", "Simulación computacional", "Pruebas de prototipo a escala"]
tipo: ordenar

explicacion: |
  El proceso de ingeniería sigue un flujo: primero se define qué se necesita, luego se traduce a ecuaciones (modelo), se verifica mediante software (simulación) y finalmente se valida físicamente.
```

### 5 — Cálculo de resistencia de materiales
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["resistencia", "esfuerzo"]

variables:
  casos: [[100, 0.01], [250, 0.005], [500, 0.002]]
  idx: uno_de([0,1,2])
  fuerza: casos[idx][0]
  area: casos[idx][1]

enunciado: "En el modelado de esfuerzos mecánicos, el esfuerzo normal $\sigma$ se define como la fuerza aplicada $F$ dividida por el área de la sección transversal $A$. Si aplicamos una fuerza de {fuerza} N sobre un área de {area} m², el esfuerzo resultante es:"

respuesta: fuerza / area
tipo: input
tolerancia_abs: 0.1

explicacion: |
  El cálculo del esfuerzo es $\sigma = {fuerza} / {area} = {redondear(fuerza / area, 2)}$ Pa. Este valor es crucial para determinar si el material fallará o no.
```