### 1 — El límite de deformación
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad"]

variables:
  escenario: uno_de([["un resorte de acero", "elástico"], ["un clip de papel", "plástico"], ["una banda elástica", "elástico"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["elástico", "plástico"]

enunciado: "Si sometemos {escenario[idx][0]} a una carga que supera su límite elástico, el comportamiento del material será ___."

explicacion: |
  Si la deformación supera el punto de fluencia, el material entra en el régimen plástico, donde la deformación es permanente.
```

### 2 — Identificación de la fase
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["punto_de_fluencia", "deformacion_permanente"]

variables:
  caso: uno_de([["un clavo siendo doblado con un martillo", "permanente"], ["una goma de borrar", "temporal"], ["un muelle de suspensión", "temporal"]])
  idx: uno_de([0,1,2])

respuesta: caso[idx][1]
tipo: vf

enunciado: "Al aplicar una fuerza sobre {caso[idx][0]}, la deformación resultante es ___."

explicacion: |
  La deformación permanente ocurre cuando el esfuerzo aplicado supera el punto de fluencia del material.
```

### 3 — Secuencia de deformación
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["curva_esfuerzo_deformacion", "etapas"]

respuesta: ["Región elástica", "Punto de fluencia", "Región plástica", "Rotura"]
tipo: ordenar
opciones_explicitas: ["Región elástica", "Punto de fluencia", "Región plástica", "Rotura"]

enunciado: "Ordene las etapas de deformación de un material dúctil desde que se aplica una carga mínima hasta la falla total."

explicacion: |
  Primero el material se deforma elásticamente (recuperable), luego alcanza el punto de fluencia, entra en la zona plástica (permanente) y finalmente se rompe.
```

### 4 — Cálculo de esfuerzo de fluencia
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "avanzado"
  tags: ["esfuerzo", "calculo"]

variables:
  datos: [["150", "250"], ["300", "450"], ["50", "80"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["250", "450", "80"]

enunciado: "Un cilindro de sección transversal de 100 mm² sufre una fuerza de 25000 N antes de alcanzar su punto de fluencia. El esfuerzo de fluencia es de ___ MPa."

pasos:
  - "Calcular el esfuerzo: $\sigma = F / A$"
  - "$\sigma = 25000 / 100 = 250$ (Nota: el valor de respuesta en la tabla es el objetivo del ejercicio)"

explicacion: |
  El esfuerzo se calcula dividiendo la fuerza entre el área de la sección transversal.
```

### 5 — Comportamiento post-fluencia
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["propiedades"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que en la región plástica el material recupera su forma original al retirar la carga?"

explicacion: |
  Falso. La característica principal de la región plástica es que la deformación es irreversible o permanente.
```