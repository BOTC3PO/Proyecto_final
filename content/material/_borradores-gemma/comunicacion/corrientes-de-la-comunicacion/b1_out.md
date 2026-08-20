### 1 — El modelo de transmisión
```
metadata:
  materia: "comunicacion"
  tema: "funcionalismo_transmision"
  nivel: "basico"
  tags: ["modelo_lineal", "emisor", "receptor"]

respuesta: "emisor"
tipo: completar
respuestas_validas: ["emisor", "receptor", "mensaje", "canal"]

enunciado: "En el modelo de transmisión de la comunicación, el sujeto que codifica y envía el mensaje se denomina ___."

explicacion: |
  El modelo de transmisión (o funcionalista) se centra en la eficacia del proceso desde un punto de vista técnico, donde el emisor transmite un mensaje a través de un canal hacia un receptor.
```

### 2 — Teoría Crítica y Poder
```
metadata:
  materia: "comunicacion"
  tema: "teoria_critica"
  nivel: "intermedio"
  tags: ["poder", "ideologia", "hegemonia"]

opciones_explicitas: ["Los medios son herramientas neutrales de información", "Los medios son instrumentos de poder e ideología", "Los medios no tienen impacto en la sociedad"]
respuesta: "Los medios son instrumentos de poder e ideología"
tipo: mc

enunciado: "Desde la perspectiva de la Teoría Crítica, ¿cuál es la función principal de los medios de comunicación?"

explicacion: |
  La Teoría Crítica sostiene que los medios no son neutrales, sino que funcionan como aparatos ideológicos que refuerzan las estructuras de poder y la hegemonía de los grupos dominantes.
```

### 3 — La audiencia en los Estudios Culturales
```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "avanzado"
  tags: ["audiencia", "recepcion", "interpretacion"]

respuesta: verdadero
tipo: vf

enunciado: "En los Estudios Culturales, se considera que la audiencia es un sujeto pasivo que solo recibe e incorpora los mensajes sin posibilidad de resistencia."

explicacion: |
  Falso. A diferencia del modelo de transmisión, los Estudios Culturales proponen que la audiencia es un agente activo que interpreta, negocia y resignifica los mensajes según su contexto cultural.
```

### 4 — Evolución de los enfoques
```
metadata:
  materia: "comunicacion"
  tema: "corrientes_comunicacion"
  nivel: "intermedio"
  tags: ["ordenar", "evolucion"]

opciones_explicitas: ["Modelo de Transmisión", "Teoría Crítica", "Estudios Culturales"]
respuesta: ["Modelo de Transmisión", "Teoría Crítica", "Estudios Culturales"]
tipo: ordenar

enunciado: "Ordene cronológicamente la evolución de los enfoques teóricos de la comunicación, desde el más lineal/técnico hasta el más centrado en la recepción cultural."

explicacion: |
  La evolución parte del funcionalismo (transmisión), pasa por la crítica social (poder/ideología) y llega a los estudios culturales (decodificación activa del receptor).
```

### 5 — El concepto de decodificación
```
metadata:
  materia: "comunicacion"
  tema: "estudios_culturales"
  nivel: "intermedio"
  tags: ["decodificacion", "significado"]

variables:
  idx: uno_de([0, 1])
  escenario: [["lectura dominante", "lectura negociada"], ["lectura dominante", "lectura oposicional"]]

respuesta: escenario[idx][idx]
tipo: mc
opciones_explicitas: ["lectura dominante", "lectura negociada", "lectura oposicional"]

enunciado: "Según los estudios de recepción, cuando una audiencia acepta el mensaje pero lo adapta a sus condiciones particulares, está realizando una ___."

explicacion: |
  La lectura negociada es un punto intermedio donde el receptor reconoce la legitimidad del mensaje pero lo adapta o matiza según su propia realidad.
```