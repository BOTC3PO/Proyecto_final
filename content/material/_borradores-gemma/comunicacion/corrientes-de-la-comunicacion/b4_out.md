### 1 — Funcionalismo vs. Teoría Crítica
```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["funcionalismo", "teoria_critica"]

respuesta: "poder"
tipo: "completar"
respuestas_validas: ["poder", "control", "hegemonia"]

enunciado: "Mientras que el funcionalismo se centra en la estabilidad y el equilibrio del sistema social, la Teoría Crítica pone el foco en las relaciones de ___ que los medios ejercen sobre la sociedad."

explicacion: |
  La Teoría Crítica (Escuela de Frankfurt) analiza cómo los medios de comunicación pueden servir como herramientas de dominación y control social, cuestionando el status quo.
```

### 2 — El rol de la audiencia
```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "basico"
  tags: ["estudios_culturales", "audiencia"]

opciones_explicitas: ["Pasiva", "Receptora", "Activa", "Inocente"]
respuesta: "Activa"
tipo: "mc"

enunciado: "A diferencia del modelo de transmisión lineal, donde la audiencia es vista como un receptor pasivo, los Estudios Culturales proponen que la audiencia es:"

explicacion: |
  Los Estudios Culturales sostienen que los receptores no solo consumen mensajes, sino que los decodifican y reinterpretan según su contexto cultural, siendo agentes activos.
```

### 3 — Modelo de transmisión lineal
```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "basico"
  tags: ["modelo_lineal", "transmision"]

respuesta: verdadero
tipo: "vf"

enunciado: "En el modelo de transmisión lineal (funcionalismo/comunicación de masas), se asume que el efecto del mensaje sobre el receptor es directo, inmediato y uniforme."

explicacion: |
  Este modelo, basado en la idea de "aguja hipodérmica", asume que el mensaje es una "bala" que impacta en una audiencia que no tiene capacidad de resistencia.
```

### 4 — Evolución de la perspectiva de los medios
```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "avanzado"
  tags: ["comparativa", "teoria"]

opciones_explicitas: ["El medio como herramienta de equilibrio social", "El medio como instrumento de dominación", "El medio como espacio de negociación de sentidos"]
respuesta: ["El medio como herramienta de equilibrio social", "El medio como instrumento de dominación", "El medio como espacio de negociación de sentidos"]
tipo: "ordenar"

enunciado: "Ordene las siguientes visiones sobre la función de los medios, desde la que prioriza la estabilidad social hasta la que prioriza la interpretación del sujeto:"

explicacion: |
  1. Funcionalismo (Equilibrio), 2. Teoría Crítica (Dominación), 3. Estudios Culturales (Negociación).
```

### 5 — Contraste de enfoques
```
metadata:
  materia: "comunicacion"
  tema: "corrientes_de_la_comunicacion"
  nivel: "intermedio"
  tags: ["estudios_culturales", "teoria_critica"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["estudios_culturales", "negociación"],
    ["teoria_critica", "dominación"]
  ]

respuesta: "escenario[idx][1]"
tipo: "mc"
opciones_explicitas: ["negociación", "dominación", "estabilidad", "transmisión"]

enunciado: "Si nos enfocamos en el estudio de cómo los grupos sociales reinterpretan los significados de los mensajes mediáticos, estamos bajo el paradigma de los {escenario[idx][0]}, donde el proceso es de ___."

explicacion: |
  Dependiendo del sorteo, la pregunta identifica si el enfoque es de negociación (Estudios Culturales) o de dominación (Teoría Crítica).
```