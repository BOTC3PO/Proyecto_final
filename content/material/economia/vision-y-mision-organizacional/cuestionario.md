# Economia — vision y mision organizacional (cuestionario, 28 preguntas VBLang)

> Tema: `economia/vision-y-mision-organizacional`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["mision", "definicion"]

variables:
  contexto: uno_de(["pyme", "multinacional", "startup"])
  enfoque: uno_de(["clientes", "productos", "servicios"])

respuesta: "mision"
tipo: input

enunciado: "En una {contexto}, la declaración que define 'qué hacemos', 'para quién' y 'cómo' se refiere a la {enfoque} actual. ¿Cuál es el nombre de este concepto estratégico?"

explicacion: |
  La misión describe el propósito presente de la organización, definiendo su negocio principal y su mercado objetivo.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["vision", "tiempo"]

variables:
  tiempo: uno_de(["futuro", "presente"])
  concepto: uno_de(["vision", "mision"])

respuesta: falso
tipo: vf

enunciado: "La {concepto} se centra exclusivamente en el {tiempo} inmediato de la empresa."

explicacion: |
  La visión es una proyección a largo plazo (futuro), mientras que la misión se centra en el presente.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["eficiencia", "recursos"]

variables:
  sin_mision: "falso"
  sin_vision: "falso"

respuesta: verdadero
tipo: vf

enunciado: "Sin una misión clara, los recursos financieros y humanos tienden a dispersarse, generando ineficiencia."

explicacion: |
  La misión alinea los esfuerzos hacia objetivos comunes, evitando la duplicidad de tareas y el desperdicio de recursos escasos.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["mision", "proposito"]

variables:
  palabra1: "mision"
  palabra2: "propósito"

respuesta: "mision"
tipo: completar
respuestas_validas:
  - "mision"
  - "misión"

enunciado: "La ___ responde a la pregunta: ¿Qué hacemos? Y ¿Para quién lo hacemos?"

explicacion: |
  La misión define el propósito actual y el negocio principal de la organización.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "avanzado"
  tags: ["adaptabilidad", "mision"]

variables:
  cambio_mercado: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La misión es estática y nunca debe cambiar, incluso si el mercado lo requiere."

explicacion: |
  La misión es más concreta y operativa; puede cambiar si el mercado lo requiere o si la empresa decide pivotar su modelo de negocio.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["identificacion", "mision"]

variables:
  texto: uno_de(["Proveer alimentos saludables a bajo costo", "Ser la líder global en nutrición en 2030"])

respuesta: "mision"
tipo: input

enunciado: "Si la frase es '{texto}', ¿a qué concepto corresponde?"

explicacion: |
  Proveer alimentos es una acción presente y operativa, característica de la misión.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["identificacion", "vision"]

variables:
  texto: uno_de(["Ser la líder global en nutrición en 2030", "Proveer alimentos saludables a bajo costo"])

respuesta: "vision"
tipo: input

enunciado: "Si la frase es '{texto}', ¿a qué concepto corresponde?"

explicacion: |
  Ser líder en el futuro es una proyección aspiracional, característica de la visión.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["eficiencia", "operacion"]

variables:
  clave: "mision"

respuesta: verdadero
tipo: vf

enunciado: "La misión ayuda a evitar la duplicidad de tareas operativas."

explicacion: |
  Al definir el negocio principal y los clientes, la misión guía las decisiones diarias y alinea esfuerzos.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["comparacion", "tiempo"]

variables:
  palabra1: "mision"
  palabra2: "vision"

respuesta: "mision"
tipo: completar
respuestas_validas:
  - "mision"
  - "misión"

enunciado: "Mientras la ___ es el presente, la visión es el futuro deseado."

explicacion: |
  La misión define el propósito actual, mientras que la visión proyecta el futuro.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["competitividad", "estrategia"]

variables:
  factor: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Tener misión y visión claras es una herramienta de competitividad en mercados con recursos escasos."

explicacion: |
  La claridad estratégica permite una mejor asignación de recursos y una respuesta más ágil frente a la competencia.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["equipo", "alineacion"]

variables:
  resultado: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La misión alinea los esfuerzos del equipo hacia objetivos comunes."

explicacion: |
  Al definir el propósito, la misión asegura que cada acción contribuya al centro del negocio.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["diferencia", "operativa"]

variables:
  palabra1: "mision"
  palabra2: "vision"

respuesta: "mision"
tipo: completar
respuestas_validas:
  - "mision"
  - "misión"

enunciado: "La ___ es más concreta y operativa que la visión."

explicacion: |
  La misión describe el negocio actual y es más susceptible a cambios operativos inmediatos.
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["recursos", "escasez"]

variables:
  contexto: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "En mercados con recursos escasos, la falta de rumbo genera dispersión de esfuerzos."

explicacion: |
  Sin misión y visión claras, los recursos se dispersan, reduciendo la eficiencia y competitividad.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["mision", "preguntas"]

variables:
  pregunta: uno_de(["¿Qué hacemos?", "¿Qué queremos ser?"])

respuesta: "mision"
tipo: input

enunciado: "Si la pregunta es '{pregunta}', ¿a qué concepto corresponde?"

explicacion: |
  '¿Qué hacemos?' es la pregunta central de la misión.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["vision", "preguntas"]

variables:
  pregunta: uno_de(["¿Qué queremos ser?", "¿Qué hacemos?"])

respuesta: "vision"
tipo: input

enunciado: "Si la pregunta es '{pregunta}', ¿a qué concepto corresponde?"

explicacion: |
  '¿Qué queremos ser?' es la pregunta central de la visión.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "avanzado"
  tags: ["inversion", "estabilidad"]

variables:
  relacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Una visión sólida atrae inversores al proyectar estabilidad a largo plazo."

explicacion: |
  Los inversores buscan confianza en el crecimiento futuro, algo que la visión comunica.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["metfora", "brujula"]

variables:
  palabra1: "brújula"
  palabra2: "brujula"

respuesta: "brújula"
tipo: completar
respuestas_validas:
  - "brújula"
  - "brujula"

enunciado: "Estas declaraciones son la ___ que permite navegar la incertidumbre."

explicacion: |
  La metáfora de la brújula ilustra la guía estratégica que ofrecen la misión y la visión.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["eficiencia", "tareas"]

variables:
  efecto: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La misión ayuda a evitar la duplicidad de tareas."

explicacion: |
  Al tener un propósito claro, se evitan esfuerzos redundantes y se optimiza el trabajo.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["resumen", "diferencia"]

variables:
  palabra1: "mision"
  palabra2: "vision"

respuesta: "mision"
tipo: completar
respuestas_validas:
  - "mision"
  - "misión"

enunciado: "La ___ es el 'qué', la visión es el 'hacia dónde'."

explicacion: |
  La misión define la acción presente, la visión define la dirección futura.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["preguntas", "propósito", "qué"]

variables:
  pregunta: uno_de(["¿Qué hacemos?", "¿Qué queremos ser?", "¿Cuánto ganamos?"])

respuesta: "¿Qué hacemos?"
tipo: mc

enunciado: "¿Cuál de estas preguntas responde directamente a la definición de la misión?"

opciones: 4
opciones_explicitas: ["¿Qué hacemos?", "¿Qué queremos ser?", "¿Cómo crecemos?", "¿Dónde invertimos?"]

explicacion: |
  La misión responde a: ¿Qué hacemos? ¿Para quién? y ¿Cómo lo hacemos?
```

### 21 — pregunta 21

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["preguntas", "futuro", "hacia dónde"]

variables:
  pregunta: uno_de(["¿Qué hacemos?", "¿Qué queremos ser?", "¿Cuánto ganamos?"])

respuesta: "¿Qué queremos ser?"
tipo: mc

enunciado: "¿Cuál de estas preguntas responde directamente a la definición de la visión?"

opciones: 4
opciones_explicitas: ["¿Qué hacemos?", "¿Qué queremos ser?", "¿Cuánto ganamos?", "¿Dónde invertimos?"]

explicacion: |
  La visión responde a: ¿Qué queremos ser en el futuro?
```

### 22 — pregunta 22

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["características", "concreta", "operativa"]

variables:
  adjetivo: uno_de(["concreta", "abstracta", "vaga", "temporal"])

respuesta: "concreta"
tipo: mc

enunciado: "La misión se caracteriza por ser más {adjetivo} y operativa que la visión."

opciones: 4
opciones_explicitas: ["concreta", "abstracta", "vaga", "temporal"]

explicacion: |
  La misión es más concreta y operativa porque define el negocio actual. La visión es más abstracta y futura.
```

### 23 — pregunta 23

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["características", "aspiracional", "futuro"]

variables:
  adjetivo: uno_de(["concreta", "abstracta", "vaga", "temporal"])

respuesta: "abstracta"
tipo: mc

enunciado: "La visión se caracteriza por ser más {adjetivo} y aspiracional que la misión."

opciones: 4
opciones_explicitas: ["concreta", "abstracta", "vaga", "temporal"]

explicacion: |
  La visión es una proyección futura, por lo que tiende a ser más abstracta e inspiradora que la misión operativa.
```

### 24 — pregunta 24

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "avanzado"
  tags: ["amenazas", "oportunidades", "entorno"]

variables:
  elemento: uno_de(["amenazas", "fortalezas", "debilidades", "oportunidades"])

respuesta: "oportunidades"
tipo: mc

enunciado: "La visión permite transformar posibles {elemento} del entorno en oportunidades de negocio."

opciones: 4
opciones_explicitas: ["amenazas", "oportunidades", "fortalezas", "debilidades"]

explicacion: |
  La visión permite anticipar cambios y convertir amenazas en oportunidades mediante la adaptación proactiva.
```

### 25 — pregunta 25

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["proyección", "largo plazo", "aspiración"]

variables:
  tiempo: uno_de(["corto", "mediano", "largo"])

respuesta: "largo"
tipo: mc

enunciado: "La visión es una proyección a {tiempo} plazo."

opciones: 4
opciones_explicitas: ["corto", "mediano", "largo", "inmediato"]

explicacion: |
  La visión se enfoca en el futuro lejano, guiando la estrategia a largo plazo.
```

### 26 — pregunta 26

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["decisiones", "diarias", "mapa"]

variables:
  concepto: uno_de(["mapa", "brújula", "espejo", "puente"])

respuesta: "mapa"
tipo: mc

enunciado: "La misión es como el {concepto} que guía las decisiones diarias."

opciones: 4
opciones_explicitas: ["mapa", "brújula", "espejo", "puente"]

explicacion: |
  Se usa la metáfora del "mapa" para la misión porque define el terreno operativo actual y las rutas diarias.
```

### 27 — pregunta 27

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["dirección", "estratégica", "futuro"]

variables:
  concepto: uno_de(["mapa", "brújula", "espejo", "puente"])

respuesta: "brújula"
tipo: mc

enunciado: "La visión actúa como la {concepto} que orienta la dirección estratégica futura."

opciones: 4
opciones_explicitas: ["mapa", "brújula", "espejo", "puente"]

explicacion: |
  Se usa la metáfora de la "brújula" para la visión porque apunta hacia el norte (futuro deseado).
```

### 28 — pregunta 28

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "avanzado"
  tags: ["resumen", "diferencias", "clave"]

variables:
  mision_tipo: uno_de(["presente", "futuro"])
  vision_tipo: uno_de(["presente", "futuro"])

respuesta: "presente"
tipo: mc

enunciado: "Mientras la misión es el {mision_tipo}, la visión es el {vision_tipo} deseado."

opciones: 4
opciones_explicitas: ["presente", "futuro", "pasado", "eterno"]

explicacion: |
  La misión es el presente operativo; la visión es el futuro deseado. Esta es la diferencia clave temporal.
```
