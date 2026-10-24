### 1 — Identificación del Alcance
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "alcance"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un sistema de purificación de agua para una comunidad rural", "un motor de combustión de alta eficiencia"], ["priorizar la simplicidad y el costo", "priorizar la potencia máxima y el rendimiento"]]

enunciado: "En la fase de diseño conceptual para {escenarios[escenario_idx][0]}, el objetivo principal es {escenarios[escenario_idx][1]}."

respuesta: "priorizar la simplicidad y el costo"
tipo: mc
opciones_explicitas: ["priorizar la simplicidad y el costo", "priorizar la potencia máxima y el rendimiento", "definir el presupuesto detallado de materiales", "realizar pruebas de fatiga de materiales"]

explicacion: |
  El diseño conceptual se enfoca en la solución general y la viabilidad de la idea, no en los detalles técnicos o materiales específicos.
```

### 2 — Veracidad de la Fase
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["fases_proyecto"]

enunciado: "El diseño conceptual se realiza después de haber definido los requerimientos del cliente pero antes de la creación de los planos de fabricación detallados."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. El diseño conceptual actúa como el puente entre la necesidad (requerimiento) y la solución técnica detallada.
```

### 3 — Elementos del Concepto
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["componentes", "arquitectura"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [["un puente peatonal", "un software de gestión hospitalaria"], ["la estructura principal y el flujo de carga", "la arquitectura de la base de datos y la interfaz de usuario"]]

enunciado: "Para el diseño conceptual de {datos[caso_idx][0]}, el ingeniero debe definir principalmente {datos[caso_idx][1]}."

respuesta: "la estructura principal y el flujo de carga"
tipo: completar
respuestas_validas: ["la estructura principal y el flujo de carga", "el acabado estético de los materiales", "el costo de la mano de obra"]

explicacion: |
  El diseño conceptual define la arquitectura funcional o estructural básica que permitirá cumplir con los requerimientos.
```

### 4 — Secuencia de Desarrollo
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["flujo_trabajo"]

enunciado: "Ordene las etapas del proceso de diseño de un nuevo producto desde la concepción hasta la producción:"

opciones_explicitas: ["Identificación de la necesidad", "Diseño conceptual", "Diseño detallado", "Prototipado y pruebas"]
respuesta: ["Identificación de la necesidad", "Diseño conceptual", "Diseño detallado", "Prototipado y pruebas"]
tipo: ordenar

explicacion: |
  El proceso sigue un flujo lógico: primero se entiende el problema, luego se propone la idea general (conceptual), se detallan las medidas y finalmente se valida con prototipos.
```

### 5 — Análisis de Viabilidad
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["evaluacion", "riesgo"]

variables:
  problema_idx: uno_de([0, 1])
  problemas: [["un sistema de frenado para un tren de alta velocidad", "un nuevo tipo de envase biodegradable para alimentos"]]

enunciado: "Durante el diseño conceptual de {problemas[problema_idx][0]}, si se detecta que la solución propuesta es físicamente imposible, ¿cuál es la acción correcta?"

respuesta: "Reevaluar la idea o buscar una alternativa conceptual"
tipo: mc
opciones_explicitas: ["Reevaluar la idea o buscar una alternativa conceptual", "Continuar con el diseño detallado para ver si se soluciona", "Ignorar el problema y esperar a la fase de prototipado", "Aumentar el presupuesto de materiales"]

explicacion: |
  El diseño conceptual es la etapa ideal para detectar inviabilidades técnicas; intentar avanzar a detalles con un concepto erróneo es un error costoso.
```