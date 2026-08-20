### 1 — Concepto de Derecho Laboral
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "regula la relación entre empleador y trabajador"
tipo: completar
respuestas_validas: ["regula la relación entre empleador y trabajador", "regula la relación entre empleador y trabajador"]

enunciado: "El Derecho Laboral es la rama del derecho que ___."

explicacion: |
  El derecho laboral tiene como objeto principal regular las relaciones jurídicas que surgen entre el empleador y el trabajador.
```

### 2 — Elementos del Contrato de Trabajo
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["contrato", "elementos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["prestación de servicios", "subordinación", "remuneración"], ["prestación de servicios", "autonomía", "remuneración"]]

opciones_explicitas: ["prestación de servicios, subordinación y remuneración", "prestación de servicios, autonomía y remuneración", "solo prestación de servicios"]

respuesta: "prestación de servicios, subordinación y remuneración"
tipo: mc

enunciado: "Para que exista un contrato de trabajo, deben concurrir tres elementos esenciales. Según el escenario planteado, estos son: {datos[escenario_idx][0]}, {datos[escenario_idx][1]} y {datos[escenario_idx][2]}."

explicacion: |
  La subordinación es el elemento distintivo que diferencia un contrato de trabajo de un contrato de servicios profesionales.
```

### 3 — Verdad o Falso: Sujeción a la autoridad
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["subordinacion", "derechos"]

respuesta: verdadero
tipo: vf

enunciado: "En una relación laboral, el trabajador está sujeto a la dirección y mando del empleador (subordinación)."

explicacion: |
  La subordinación jurídica es la facultad del empleador de dar órdenes y la obligación del trabajador de acatarlas.
```

### 4 — Sujetos de la Relación Laboral
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["sujetos", "terminologia"]

respuesta: "Trabajador"
tipo: mc
opciones_explicitas: ["Trabajador", "Sindicato", "Estado", "Proveedor"]

enunciado: "La persona física que presta un servicio personal bajo dependencia es el ___."

explicacion: |
  El trabajador es el sujeto que aporta su fuerza de trabajo a cambio de una contraprestación económica.
```

### 5 — Jerarquía de Normas Laborales
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["jerarquia", "normativa"]

opciones_explicitas: ["Constitución Nacional", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Reglamento Interno"]

respuesta: ["Constitución Nacional", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Reglamento Interno"]
tipo: ordenar

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía en el ámbito laboral:"

explicacion: |
  En el derecho laboral rige el principio de norma más favorable, pero la jerarquía normativa establece el orden de validez de las fuentes.
```