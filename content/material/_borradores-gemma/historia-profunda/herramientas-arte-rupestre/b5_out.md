### 1 — Identificación de técnica
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["arte_rupestre", "tecnicas"]

variables:
  escenario: uno_de([["pigmentos mezclados con grasa animal aplicados con los dedos", "Pintura digital"], ["grabados realizados con piedras duras sobre la roca", "Petroglifos"], ["dibujos realizados con carbón vegetal sobre superficies claras", "Dibujo al carbón"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Pintura digital", "Petroglifos", "Dibujo al carbón"]

enunciado: "Se ha descubierto una cueva con las siguientes características: {escenario[idx][0]}. ¿A qué técnica pertenece?"

explicacion: |
  La descripción corresponde a {escenario[idx][1]}.
```

### 2 — Materiales de grabado
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["herramientas", "grabado"]

variables:
  caso: uno_de([["piedra de sílex", "percutor"], ["hueso endurecido", "estilete"], ["punta de madera", "incisores"]])
  idx: uno_de([0,1,2])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["percutor", "estilete", "incisores"]

enunciado: "Para realizar la técnica de grabado descrita, el artista utilizó un/a ___."

explicacion: |
  El instrumento utilizado para la acción descrita es un/a {caso[idx][1]}.
```

### 3 — Clasificación de pigmentos
```
metadata:
  materia: "historia_profucha"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["quimica_antigua", "pigmentos"]

variables:
  pigmento: uno_de([["óxido de hierro", "rojo"], ["óxido de manganeso", "negro"], ["arcilla blanca", "blanco"]])
  idx: uno_de([0,1,2])

respuesta: pigmento[idx][1]
tipo: mc
opciones_explicitas: ["rojo", "negro", "blanco"]

enunciado: "Un arqueólogo encuentra restos de coloración {pigmento[idx][0]} en una pared. ¿Cuál es el pigmento probable?"

explicacion: |
  El pigmento utilizado para obtener el color {pigmento[idx][1]} es el {pigmento[idx][0]}.
```

### 4 — Secuencia de creación
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta: ["Preparación de la superficie", "Aplicación del pigmento", "Sellado con grasa"]
tipo: ordenar
opciones_explicitas: ["Preparación de la superficie", "Aplicación del pigmento", "Sellado con grasa"]

enunciado: "Ordene los pasos lógicos para la creación de una pintura mural rupestre duradera:"

explicacion: |
  El proceso estándar requiere primero limpiar la roca, luego aplicar el color y finalmente protegerlo con un aglutinante como la grasa.
```

### 5 — Determinación de soporte
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["soporte", "arqueologia"]

variables:
  soporte: uno_de([["pared de piedra", "pared"], ["banco de roca", "pared"], ["techo de la cueva", "techo"]])
  idx: uno_de([0,1,2])

respuesta: soporte[idx][1]
tipo: mc
opciones_explicitas: ["pared", "techo", "suelo"]

enunciado: "La obra se encuentra plasmada sobre un/a {soporte[idx][0]}. Por lo tanto, el soporte es un/a ___."

explicacion: |
  En arqueología, la ubicación física define el soporte: {soporte[idx][1]}.
```