### 1 — El propósito del prototipo
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_conceptos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["un sensor de temperatura para un invernadero", "un nuevo diseño de ala para un dron"], ["validar la precisión de la lectura", "probar la estabilidad aerodinámica"]]

respuesta: "___"
tipo: completar
respuestas_validas: ["validar la precisión de la lectura", "probar la estabilidad aerodinámica"]

enunciado: "En el desarrollo de {escenarios[escenario_idx][0]}, el objetivo principal de crear un prototipo es {escenarios[escenario_idx][1]}."

explicacion: |
  Un prototipo es una versión preliminar que permite testear hipótesis específicas antes de la producción masiva.
```

### 2 — Características de un prototipo de baja fidelidad
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_fidelidad"
  nivel: "basico"
  tags: ["fidelidad", "costos"]

variables:
  tipo_prototipo_idx: uno_de([0,1])
  datos: [["baja fidelidad", "alta fidelidad"], ["rápido y económico", "lento y costoso"]]

respuesta: datos[tipo_prototipo_idx][1]
tipo: mc
opciones_explicitas: ["rápido y económico", "lento y costoso", "extremadamente preciso", "imposible de modificar"]]

enunciado: "Si estamos construyendo un prototipo de {datos[tipo_prototipo_idx][0]}, su principal ventaja es que es ___."

explicacion: |
  Los prototipos de baja fidelidad (como bocetos o maquetas simples) priorizan la velocidad y el bajo costo para fallar rápido y barato.
```

### 3 — Ciclo de iteración del prototipo
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_iteracion"
  nivel: "intermedio"
  tags: ["proceso", "iteracion"]]

respuesta: ["Diseño", "Prototipado", "Pruebas", "Análisis"]
tipo: ordenar
opciones_explicitas: ["Diseño", "Prototipado", "Pruebas", "Análisis", "Descarte"]

enunciado: "Ordene las etapas lógicas para mejorar un prototipo tras un testeo fallido:"

explicacion: |
  El proceso de ingeniería es iterativo: se diseña, se construye, se prueba, se analiza el error y se vuelve a diseñar.
```

### 4 — Verdad o Falso: El prototipo final
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_diferencias"
  nivel: "basico"
  tags: ["falso", "conceptos"]]

respuesta: falso

tipo: vf

enunciado: "Un prototipo es una versión simplificada que debe tener exactamente las mismas características y materiales que el producto final."

explicacion: |
  Falso. El prototipo suele ser una versión simplificada (MVP o prototipo funcional) que omite detalles estéticos o de manufactura para centrarse en la funcionalidad técnica.
```

### 5 — Evaluación de resultados
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_evaluacion"
  nivel: "intermedio"
  tags: ["metricas", "decision"]]

variables:
  caso_idx: uno_de([0,1])
  casos: [["El prototipo falló en la prueba de carga", "El prototipo superó las pruebas de carga"], ["revisar el diseño estructural", "proceder a la fase de producción"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["revisar el diseño estructural", "proceder a la fase de producción", "cancelar el proyecto", "aumentar el presupuesto"]]

enunciado: "Si tras las pruebas el prototipo presenta un comportamiento de: {casos[caso_idx][0]}, la acción inmediata debe ser ___."

explicacion: |
  La fase de pruebas del prototipo sirve para tomar decisiones: si falla, se itera (se vuelve a diseñar); si tiene éxito, se avanza hacia la versión final.
```