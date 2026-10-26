### 1 — El concepto de fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["conceptos", "fatiga"]

respuesta: verdadero
tipo: vf

enunciado: "La fatiga es un fenómeno donde un material falla bajo cargas cíclicas o repetitivas, incluso si el esfuerzo máximo aplicado es significativamente menor al límite elástico del material."

explicacion: |
  Correcto. La fatiga es una falla progresiva que ocurre cuando un material es sometido a esfuerzos fluctuantes. El daño se acumula en pequeñas grietas que crecen con cada ciclo hasta que la sección remanente no puede soportar la carga.
```

### 2 — El límite de fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["limite_fatiga", "acero"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[150, "MPa"], [250, "MPa"]]
  limite: uno_de([150, 250])

respuesta: limite
tipo: mc
opciones_explicitas: ["100 MPa", "150 MPa", "200 MPa", "300 MPa"]

enunciado: "En un ensayo de fatiga para un acero específico, se determina que el material puede soportar un número infinito de ciclos si el esfuerzo aplicado se mantiene por debajo del límite de fatiga, que para este caso es de {datos[escenario_idx][0]} {datos[escenario_idx][1]}."

explicacion: |
  El límite de fatiga (o límite de resistencia a la fatiga) es el valor de esfuerzo por debajo del cual el material puede resistir ciclos de carga teóricamente infinitos sin fallar por fatiga.
```

### 3 — Etapas de la fractura por fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["mecanismo", "fractura"]

respuesta: ["Iniciación de grieta", "Propagación de grieta", "Fractura súbita"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas que ocurren durante el proceso de falla por fatiga en un componente mecánico:"

pasos:
  - "La grieta se extiende a través de la sección transversal."
  - "Se forma una pequeña fisura en la superficie debido a concentradores de tensión."
  - "El componente se rompe repentinamente cuando la sección remanente es insuficiente."

explicacion: |
  El proceso comienza con la nucleación (iniciación) en un punto de alta concentración de esfuerzos, seguido por la propagación lenta de la grieta (donde suelen verse las 'marcas de playa') y termina con la fractura catastrófica cuando la sección resistente es mínima.
```

### 4 — Análisis de la superficie de fractura
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["morfologia", "fractura"]

variables:
  tipo_falla: uno_de([0, 1])
  descripcion: ["marcas de playa", "superficie rugosa y granular"]
  visual: uno_de(["marcas de playa", "superficie rugosa y granular"])

respuesta: visual
tipo: completar
respuestas_validas: ["marcas de playa", "superficie rugosa y granular"]

enunciado: "Al examinar la superficie de una fractura por fatiga, es común observar un patrón característico llamado ___ que indica el avance de la grieta."

explicacion: |
  Las 'marcas de playa' (beach marks) son líneas macroscópicas que representan el avance de la frente de la grieta durante periodos de carga. Son la evidencia clásica de una falla por fatiga.
```

### 5 — Cálculo de esfuerzos de tensión
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["calculo", "esfuerzo"]

variables:
  caso_idx: uno_de([0, 1])
  carga: uno_de([5000, 10000])
  area: uno_de([250, 500])
  esfuerzo_calc: uno_de([20.0, 20.0])

respuesta: esfuerzo_calc
tipo: input
tolerancia_abs: 0.1

enunciado: "Un perno sufre una carga cíclica de {carga} N. Si el área de la sección transversal del perno es de {area} mm², ¿cuál es el esfuerzo de tensión ($\sigma$) aplicado en cada ciclo? (Expresado en MPa)"

pasos:
  - "Identificar la carga aplicada ($F = \{carga\}$ N)."
  - "Identificar el área de la sección ($A = \{area\}$ mm²)."
  - "Calcular el esfuerzo usando la fórmula $\sigma = F / A$."

explicacion: |
  El esfuerzo se calcula como $\sigma = F / A$. 
  Para el caso 1: $5000 / 250 = 20$ MPa.
  Para el caso 2: $10000 / 500 = 20$ MPa.
```