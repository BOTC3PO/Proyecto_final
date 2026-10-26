### 1 — El mito del crecimiento infinito
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["sostenibilidad", "capacidad_de_carga"]

variables:
  escenario: uno_de(["un_lugar_saturado", "un_destino_emergente"])

respuesta: escenario == "un_lugar_saturado"
tipo: vf

enunciado: "En la planificación de destinos, se asume erróneamente que un mayor número de visitantes siempre se traduce en un mayor beneficio neto para la comunidad local. ¿Es esto siempre verdadero?"

explicacion: |
  Falso. El crecimiento descontrolado puede llevar a la degradación de los recursos naturales y al desplazamiento de la población local (gentrificación), reduciendo la calidad del destino a largo plazo.
```

### 2 — La trampa de la capacidad de carga
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["capacidad_de_carga", "gestion"]

variables:
  caso: uno_de([0, 1])
  datos: [[150, "exceso_de_carga"], [200, "capacidad_optima"]]
  idx: caso

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["capacidad_optima", "exceso_de_carga", "punto_de_equilibrio", "capacidad_de_resiliencia"]

enunciado: "Si un destino alcanza su límite de capacidad de carga social, pero la infraestructura física aún permite recibir más turistas, ¿cuál es el riesgo principal según la planificación sostenible?"

explicacion: |
  El riesgo es el {datos[idx][1]}. La sostenibilidad no solo es ambiental, sino también social; si la comunidad rechaza al turista, el destino pierde su valor.
```

### 3 — Elementos de la gestión sostenible
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["pilares_sostenibilidad"]

respuesta: ["Económico", "Social", "Ambiental"]
tipo: ordenar

enunciado: "Para que un plan de gestión de destino sea verdaderamente sostenible, se deben integrar sus tres pilares fundamentales. Ordene los siguientes conceptos de forma lógica (de lo humano a lo natural):"

pasos:
  - "Dimensión humana y de bienestar"
  - "Dimensión de rentabilidad y equidad"
  - "Dimensión de conservación de recursos"

explicacion: |
  La planificación sostenible requiere un equilibrio entre lo social, lo económico y lo ambiental.
```

### 4 — Confusión entre Turismo y Desarrollo
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["desarrollo_local"]

variables:
  error_comun: uno_de([true, false])

respuesta: error_comun
tipo: vf

enunciado: "Un error común en la planificación es considerar el turismo como un fin en sí mismo para el desarrollo de una región, en lugar de considerarlo como una herramienta o sector dentro de un plan de desarrollo integral. ¿Es este un error de enfoque?"

explicacion: |
  Verdadero. El turismo debe ser un medio para mejorar la calidad de vida de la población local, no un fin que absorba todos los recursos de la región.
```

### 5 — El concepto de Carrying Capacity
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["capacidad_de_carga", "gestion"]

variables:
  valor: uno_de([10, 20])
  resultado: valor * 2

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "En un modelo simplificado de gestión de un parque nacional, si la capacidad de carga física es de {valor} turistas por hora y el factor de impacto ambiental es de 2, ¿cuál es la capacidad de carga real (ajustada) que debe seguir el planificador?"

pasos:
  - "Identificar la capacidad física: {valor}"
  - "Dividir la capacidad física por el factor de impacto: {valor} / 2"
  - "Multiplicar el resultado por el factor de gestión: ({valor} / 2) * 2"

explicacion: |
  La capacidad de carga real suele ser menor a la física debido a la necesidad de mitigar impactos. En este ejercicio, el resultado es {resultado}.
```