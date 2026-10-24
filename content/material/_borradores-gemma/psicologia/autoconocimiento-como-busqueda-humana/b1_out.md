### 1 — Naturaleza del autoconocimiento
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["definicion", "proceso"]

respuesta: falso
tipo: vf

enunciado: "El autoconocimiento es un estado estático que se alcanza una vez que se han identificado todos los rasgos de la personalidad."

explicacion: |
  El autoconocimiento es un proceso dinámico y continuo; a medida que vivimos nuevas experiencias, nuestra percepción de nosotros mismos se transforma.
```

### 2 — El proceso de introspección
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["vocabulario", "introspeccion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["la observación de los propios pensamientos", "la introspección"], ["el análisis de las reacciones ajenas", "la proyección"]]

respuesta: datos[escenario_idx][0]
tipo: completar
respuestas_validas: ["la observación de los propios pensamientos", "la introspección"]

enunciado: "El proceso mediante el cual una persona dirige su atención hacia su propio mundo interno para comprender sus emociones y pensamientos se denomina ___."

explicacion: |
  La introspección es la herramienta fundamental del autoconocimiento, permitiendo mirar hacia adentro para entender nuestra subjetividad.
```

### 3 — Dimensiones del Yo
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dimensiones", "identidad"]

respuesta: "Yo Real"
tipo: mc
opciones_explicitas: ["Yo Ideal", "Yo Real", "Yo Social", "Yo Ficticio"]

enunciado: "Cuando una persona se reconoce a sí misma tal como es en la actualidad, con sus virtudes y defectos reales, está haciendo contacto con su ___."

explicacion: |
  Diferenciar entre quiénes somos (Yo Real) y quiénes nos gustaría ser (Yo Ideal) es un paso crucial en el proceso de autoconocimiento.
```

### 4 — Elementos del autoconocimiento
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["componentes", "identidad"]

respuesta: ["Valores", "Emociones", "Creencias", "Capacidades"]
tipo: ordenar

opciones_explicitas: ["Valores", "Emociones", "Creencias", "Capacidades"]

enunciado: "Ordena los siguientes elementos que forman parte de la estructura de la identidad personal, desde el componente más profundo/interno hacia el más expresivo/externo:"

pasos:
  - "Identificar los principios rectores (lo que nos guía)."
  - "Reconocer cómo nos sentimos ante los estímulos."
  - "Identificar las ideas que aceptamos como verdades."
  - "Reconocer las habilidades y destrezas que poseemos."

explicacion: |
  El autoconocimiento implica integrar valores, emociones, creencias y capacidades en una visión coherente de uno mismo.
```

### 5 — El autoconocimiento y el cambio
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dinamismo", "evolucion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un proceso de transformación constante", "un dato estático y definitivo"]]

respuesta: casos[caso_idx][0]
tipo: completar
respuestas_validas: ["un proceso de transformación constante", "un dato estático y definitivo"]

enunciado: "Debido a que el ser humano es un ser histórico y cambiante, el autoconocimiento debe entenderse como ___."

explicacion: |
  Dado que nuestras circunstancias y madurez cambian, el autoconocimiento no es un destino, sino un camino de exploración permanente.
```