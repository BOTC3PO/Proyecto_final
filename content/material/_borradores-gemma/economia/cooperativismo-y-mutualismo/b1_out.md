### 1 — Definición de Cooperativa
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["definicion", "organizacion"]

respuesta: "democráticamente"
tipo: completar
respuestas_validas: ["democráticamente"]

enunciado: "Según los principios de la economía social, las cooperativas son organizaciones gestionadas ________ por sus miembros."

explicacion: |
  El principio de gestión democrática es fundamental: cada miembro tiene un voto, independientemente del capital aportado.
```

### 2 — Principio de la Cooperación
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["principios", "gestion"]

variables:
  es_democratica: true

respuesta: es_democratica
tipo: vf

enunciado: "En una cooperativa, el poder de decisión se distribuye de manera proporcional a la cantidad de acciones o capital aportado por cada socio."

pasos:
  - "Analizar el principio de 'una persona, un voto'."

explicacion: |
  Falso. En las cooperativas rige el principio de gestión democrática (un socio, un voto), a diferencia de las sociedades de capital donde el voto depende de las acciones.
```

### 3 — Diferencia entre Cooperativa y Mutualismo
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["diferencias", "objetivo"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [["prestamos_y_ayuda", "ayuda_mutua"], ["excedentes_y_servicios", "servicios_comunes"]]

respuesta: datos[caso_idx][1]
tipo: mc
opciones_explicitas: ["datos[0][1]", "datos[1][1]", "datos[0][0]", "datos[1][0]"]

enunciado: "Si nos enfocamos en el objetivo principal de una mutual, estamos hablando de la práctica de la ________."

explicacion: |
  Mientras las cooperativas buscan satisfacer necesidades de sus socios mediante la prestación de servicios, el mutualismo se centra en la ayuda mutua entre sus integrantes.
```
*(Nota: El usuario debe elegir la opción que coincida con el valor de la variable sorteada en la lógica interna, pero para el DSL de VBLang, la respuesta debe ser el valor exacto del string).*

### 4 — Elementos de la Cooperativa
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: "socios"
tipo: completar
respuestas_validas: ["socios"]

enunciado: "Las cooperativas están compuestas por un grupo de ________ que se unen voluntariamente para satisfacer sus necesidades económicas, sociales y culturales."

explicacion: |
  Los socios son la base fundamental de cualquier organización de economía social.
```

### 5 — Orden de constitución (Proceso simplificado)
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["procedimiento"]

respuesta: ["reunión_fundacional", "redacción_estatuto", "inscripción_registro"]
tipo: ordenar
opciones_explicitas: ["reunión_fundacional", "redacción_estatuto", "inscripción_registro", "elección_autoridades"]

enunciado: "Ordene cronológicamente los pasos básicos para la formación legal de una cooperativa:"

explicacion: |
  Primero se debe realizar la reunión de fundadores, luego redactar los estatutos que regirán la entidad y finalmente inscribirse en el registro correspondiente para obtener la personería jurídica.
```