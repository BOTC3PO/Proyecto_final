### 1 — La esencia de la mejora continua
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos", "optimización"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Una fábrica de calzado que cambia toda su maquinaria de golpe cada 5 años.", "falso"],
    ["Una línea de producción que ajusta pequeños detalles cada semana para reducir desperdicios.", "verdadero"]
  ]

respuesta: datos[escenario_idx][1]
tipo: vf

enunciado: "La mejora continua se define como un proceso de optimización constante e incremental. Analice el siguiente escenario: {datos[escenario_idx][0]}. ¿Es este un ejemplo de mejora continua? (verdadero/falso)"

explicacion: |
  La mejora continua (Kaizen) se basa en cambios incrementales y constantes, no en transformaciones disruptivas o únicas de gran escala.
```

### 2 — Identificación de enfoque
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  opciones: ["Optimización puntual", "Mejora continua", "Cambio radical", "Estancamiento"]

respuesta: "Mejora continua"
tipo: mc

opciones_explicitas: ["Optimización puntual", "Mejora continua", "Cambio radical", "Estancamiento"]

enunciado: "Si una empresa decide que su objetivo es mejorar sus procesos de forma constante, paso a paso, en lugar de esperar a un gran cambio estructural, está aplicando el concepto de: ___"

explicacion: |
  La mejora continua busca la excelencia a través de pequeños cambios sostenidos en el tiempo.
```

### 3 — El ciclo de optimización
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "ciclo_pdca"]

variables:
  pasos: ["Planificar", "Hacer", "Verificar", "Actuar"]

respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para implementar la mejora continua de forma efectiva, se utiliza el ciclo PDCA. Ordene las siguientes etapas en la secuencia lógica correcta:"

explicacion: |
  El ciclo de Deming (PDCA) sigue el orden: Plan (Planificar), Do (Hacer), Check (Verificar) y Act (Actuar).
```

### 4 — Impacto en la eficiencia
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["eficiencia", "costos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Reducción del 2% en el tiempo de espera mensual", "2%"],
    ["Reducción del 5% en el desperdicio de materia prima mensual", "5%"]
  ]

respuesta: casos[caso_idx][1]
tipo: completar

respuestas_validas: ["2%", "5%"]

enunciado: "En un programa de mejora continua, una empresa logra reducir el ___ de desperdicio de materia prima cada mes mediante ajustes en la maquinaria. (Use el valor del escenario actual)"

pasos:
  - "Identificar el valor del desperdicio en el escenario."
  - "Escribir el porcentaje exacto."

explicacion: |
  La mejora continua se manifiesta en la reducción progresiva de indicadores negativos como el desperdicio o el tiempo de espera.
```

### 5 — Visión estratégica
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["estrategia", "mentalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El enfoque de la empresa es reactivo: solo actúa cuando hay crisis.", "falso"],
    ["El enfoque de la empresa es proactivo: busca fallas antes de que ocurran.", "verdadero"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: vf

enunciado: "Un pilar de la mejora continua es la proactividad. Analice el siguiente enfoque: {escenarios[escenario_idx][0]}. ¿Este enfoque es compatible con la filosofía de mejora continua? (verdadero/falso)"

explicacion: |
  La mejora continua requiere una mentalidad proactiva para identificar oportunidades de mejora antes de que los problemas se conviertan en crisis.
```