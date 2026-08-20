### 1 — Concepto de Mejora Continua
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "incremental"
tipo: completar
respuestas_validas: ["incremental", "progresiva", "constante"]

enunciado: "La mejora continua se basa en la idea de optimizar procesos de forma constante e __________, en lugar de buscar cambios drásticos y únicos."

explicacion: |
  La mejora continua (Kaizen) se enfoca en pequeños cambios constantes (incrementales) que, sumados en el tiempo, generan grandes transformaciones.
```

### 2 — Filosofía Kaizen
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["kaizen", "filosofia"]

variables:
  es_kaizen: true

respuesta: true
tipo: vf

enunciado: "El término japonés 'Kaizen' se traduce comúnmente como 'cambio para mejor' y es el pilar fundamental de la mejora continua."

explicacion: |
  Efectivamente, Kaizen es el concepto de mejora continua aplicada a procesos, productos o actividades.
```

### 3 — Ciclo PDCA
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["ciclo_pdca", "metodologia"]

opciones_explicitas: ["Planificar, Hacer, Verificar, Actuar", "Planificar, Ejecutar, Validar, Ajustar", "Pensar, Hacer, Verificar, Actuar"]

respuesta: ["Planificar, Hacer, Verificar, Actuar"]
tipo: ordenar

enunciado: "Ordene las etapas del Ciclo de Deming (PDCA), herramienta esencial para la mejora continua:"

pasos:
  - "Definir objetivos y procesos necesarios para obtener resultados."
  - "Implementar los procesos y realizar el trabajo."
  - "Realizar el seguimiento y medir los procesos respecto a los objetivos."
  - "Tomar acciones para mejorar los resultados de los procesos."

explicacion: |
  El ciclo PDCA es: Plan (Planificar), Do (Hacer), Check (Verificar) y Act (Actuar).
```

### 4 — Enfoque de la Mejora Continua
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["enfoque", "estrategia"]

opciones_explicitas: ["Un evento único de gran escala", "Un proceso de optimización constante", "Un cambio estructural de una sola vez"]

respuesta: "Un proceso de optimización constante"
tipo: mc

enunciado: "¿Cuál es la característica principal de la mejora continua en una organización?"

explicacion: |
  La mejora continua no es un proyecto con fecha de fin, sino una cultura de optimización permanente.
```

### 5 — Eliminación de Desperdicios
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["muda", "desperdicio"]

variables:
  escenario: uno_de([0,1])
  datos: [["Muda", "Desperdicio"], ["Kaizen", "Cambio"]]
  respuestas: ["Muda", "Desperdicio"]

respuesta: datos[escenario][0]
tipo: mc

opciones_explicitas: ["Muda", "Kaizen", "Poka-Yoke", "Kanban"]

enunciado: "En la metodología de mejora continua, el término japonés utilizado para referirse a cualquier tipo de ___________ en el proceso es {datos[escenario][1]}."

explicacion: |
  'Muda' es el término utilizado para referirse a las actividades que no agregan valor (desperdicio) y que deben eliminarse.
```