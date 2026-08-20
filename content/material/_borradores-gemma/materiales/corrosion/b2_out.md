### 1 — La naturaleza de la corrosión
```
metadata:
  materia: "materiales"
  tema: "corrosion_basica"
  nivel: "basico"
  tags: ["quimica", "metales"]

respuesta: verdadero
tipo: vf

enunciado: "La corrosión es un proceso de deterioro de un material, generalmente un metal, debido a una reacción química o electroquímica con su entorno."

explicacion: |
  La corrosión es la degradación de un material por la acción de agentes químicos en el medio ambiente (como oxígeno o humedad).
```

### 2 — El proceso de oxidación del hierro
```
metadata:
  materia: "materiales"
  tema: "corrosion_quimica"
  nivel: "intermedio"
  tags: ["hierro", "oxidacion"]

variables:
  escenario: uno_de([
    ["hierro", "Fe", "se oxida"],
    ["aluminio", "Al", "forma una capa protectora"],
    ["magnesio", "Mg", "es muy reactivo"]
  ])

respuesta: escenario[0][1]
tipo: completar
respuestas_validas: ["Fe", "Fe2+", "Fe3+"]

enunciado: "En un proceso de corrosión galvánica, el elemento metálico que actúa como ánodo en la formación de óxido de hierro se representa con el símbolo químico ___."

pasos:
  - "Identificar el metal base en el enunciado."
  - "Escribir su símbolo químico correspondiente."

explicacion: |
  El hierro se representa con el símbolo Fe. En la corrosión, el hierro pierde electrones (se oxida) para formar iones.
```

### 3 — Factores que aceleran la corrosión
```
metadata:
  materia: "materiales"
  tema: "factores_corrosion"
  nivel: "basico"
  tags: ["ambiente", "electrolito"]

respuesta: "electrolito"
tipo: mc
opciones_explicitas: ["electrolito", "vacío", "aislante", "gas noble"]

enunciado: "Para que ocurra una celda de corrosión electroquímica, además del metal y el oxígeno, es indispensable la presencia de un ___ que permita el flujo de iones."

explicacion: |
  Un electrolito (como agua salada o humedad) permite el movimiento de cargas iónicas, cerrando el circuito de la celda de corrosión.
```

### 4 — Etapas de la formación de la herrumbre
```
metadata:
  materia: "materiales"
  tema: "mecanismo_corrosion"
  nivel: "intermedio"
  tags: ["pasos", "reaccion"]

respuesta: ["Oxidación del metal", "Difusión de iones", "Formación de óxido sólido"]
tipo: ordenar
opciones_explicitas: ["Oxidación del metal", "Difusión de iones", "Formación de óxido sólido"]

enunciado: "Ordene cronológicamente las etapas típicas de la formación de una capa de óxido (herrumbre) sobre una superficie metálica:"

explicacion: |
  Primero el metal pierde electrones (oxidación), luego los iones se mueven a través de la capa incipiente (difusión) y finalmente se precipitan formando el óxido sólido.
```

### 5 — Protección mediante ánodo de sacrificio
```
metadata:
  materia: "materiales"
  tema: "proteccion_corrosion"
  nivel: "avanzado"
  tags: ["proteccion", "galvanizado"]

variables:
  metal_protector: uno_de([
    ["Zinc", "Zn"],
    ["Magnesio", "Mg"],
    ["Aluminio", "Al"]
  ])

respuesta: metal_protector[0][1]
tipo: mc
opciones_explicitas: ["Zn", "Cu", "Ag", "Au"]

enunciado: "En el proceso de galvanizado, se recubre el acero con una capa de {metal_protector[0][0]} para actuar como ánodo de sacrificio. El símbolo químico del metal utilizado es ___."

explicacion: |
  El zinc es más reactivo que el hierro. Al aplicarse como recubrimiento, el zinc se oxida preferencialmente (se sacrifica), protegiendo al acero.
```