### 1 — Poder espiritual y temporal
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["iglesia", "poder", "europa"]

respuesta: "monopolio"
tipo: completar
respuestas_validas: ["monopolio"]

enunciado: "Durante la Edad Media, la Iglesia Católica ejercía un ___ sobre la vida espiritual y cultural de Europa occidental."

explicacion: |
  La Iglesia no solo era una institución religiosa, sino que controlaba gran parte de la vida social, política y cultural, ejerciendo un control casi total sobre la mentalidad de la época.
```

### 2 — El papel de los monasterios
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["monasterios", "cultura", "educacion"]

opciones_explicitas: ["La preservación de textos clásicos", "La producción de armas de guerra", "La exploración de nuevas rutas marítimas", "El fomento del comercio internacional"]

respuesta: "La preservación de textos clásicos"
tipo: mc

enunciado: "En el ámbito cultural, ¿cuál fue una de las funciones más críticas de los monasterios benedictinos?"

explicacion: |
  Los monjes copistas dedicaron gran parte de su vida a transcribir manuscritos, lo que permitió que gran parte del conocimiento de la antigüedad clásica sobreviviera a la caída del Imperio Romano.
```

### 3 — Estructura de poder eclesiástico
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["jerarquia", "iglesia", "poder"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El Papa", "El Rey"],
    ["El Obispo", "El Señor Feudal"]
  ]
  respuestas: [
    ["máxima autoridad espiritual", "autoridad política y militar"],
    ["autoridad sobre una diócesis", "dueño de las tierras y vasallos"]
  ]

enunciado: "En la jerarquía eclesiástica, {escenarios[escenario_idx][0]} era considerado la {escenarios[escenario_idx][1]}."

respuesta: {respuestas[escenario_idx][1]}
tipo: mc
opciones_explicitas: ["máxima autoridad espiritual", "autoridad política y militar", "representante del emperador", "jefe de la guardia papal"]

explicacion: |
  La estructura de la Iglesia era altamente jerárquica, donde cada cargo tenía funciones específicas que combinaban lo sagrado con la administración de territorios.
```

### 4 — El concepto de la vida medieval
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "avanzado"
  tags: ["cosmovision", "teocentrismo", "cultura"]

respuesta: "teocentrismo"
tipo: completar
respuestas_validas: ["teocentrismo"]

enunciado: "La cosmovisión medieval se caracterizaba por el ________, donde Dios era el centro de todo el universo y de la explicación de la realidad."

explicacion: |
  A diferencia del antropocentrismo moderno, la Edad Media se estructuraba en torno a la figura de la divinidad, influyendo en la ciencia, el arte y la política.
```

### 5 — Evolución de la educación
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["educacion", "universidades", "iglesia"]

opciones_explicitas: ["Escuelas catedralicias", "Academias de filosofía griega", "Escuelas de navegación", "Universidades de artes liberales"]

respuesta: "Escuelas catedralicias"
tipo: mc

enunciado: "Antes del surgimiento de las universidades, ¿cuál era el principal centro de formación intelectual y religiosa en las ciudades?"

explicacion: |
  Las escuelas catedralicias, vinculadas a las sedes de los obispos, fueron la base sobre la cual se desarrollaron posteriormente las primeras universidades europeas.
```