### 1 — Identificación de la práctica
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "derechos_humanos"]

variables:
  escenario: uno_de([["Un grupo de civiles es secuestrado por fuerzas de seguridad sin orden judicial y llevado a un lugar clandestino.", "secuestro_exprés"], ["Se prohíbe la actividad política y se censuran libros en las escuelas.", "censura_cultural"], ["Se establece un control estricto sobre el movimiento de personas mediante el uso de documentos de identidad.", "control_documental"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["secuestro_exprés", "censura_cultural", "control_documental"]

enunciado: "Durante la última dictadura militar en Argentina, se implementaron diversas tácticas de control social. Si ocurre lo siguiente: {escenario[idx][0]}, ¿cómo se denomina esta práctica?"

explicacion: |
  El escenario descrito corresponde a la práctica de detención clandestina o secuestro exprés, una característica central del terrorismo de Estado para evitar la visibilidad de la detención.
```

### 2 — El destino de los niños
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["derechos_humanos", "identidad"]

variables:
  caso: uno_de([["Un hijo de una desaparecida es entregado a una familia de militares para ser criado con una identidad falsa.", "robo_identidad"], ["Un niño es separado de sus padres pero permanece en un hogar estatal.", "desarraigo"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["robo_identidad", "desarraigo"]

enunciado: "En el contexto de la apropiación de menores, cuando ___ ocurre, se está vulnerando el derecho a la identidad."

pasos:
  - "Identificar la acción realizada sobre el menor."
  - "Relacionar la acción con el concepto de robo de identidad."

explicacion: |
  El robo de identidad consistió en la apropiación sistemática de niños nacidos en cautiverio o hijos de desaparecidos, entregándolos a familias vinculadas al régimen.
```

### 3 — Organismos de control
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["instituciones", "dictadura"]

variables:
  institucion: uno_de([["El Estado utiliza centros clandestinos de detención para torturar.", "centros_clandestinos"], ["El Estado utiliza medios de comunicación para difundir propaganda.", "propaganda_mediatica"]])
  idx: uno_de([0, 1])

respuesta: institucion[idx][1]
tipo: mc
opciones_explicitas: ["centros_clandestinos", "propaganda_mediatica"]

enunciado: "Si el Estado utiliza {institucion[idx][0]} para llevar a cabo la represión sistemática, estamos ante una práctica de..."

explicacion: |
  Los Centros Clandestinos de Detención (CCD) fueron espacios donde se ejecutó la represión sistemática fuera de la legalidad.
```

### 4 — Orden de los procesos de represión
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["secuencia", "represion"]

variables:
  secuencia: ["Desaparición de la persona", "Detención en centro clandestino", "Eliminación sistemática"]

respuesta: secuencia
tipo: ordenar
opciones_explicitas: ["Desaparición de la persona", "Detención en centro clandestino", "Eliminación sistemática"]

enunciado: "Ordene cronológicamente las etapas típicas de un operativo de represión sistemática durante el terrorismo de Estado:"

explicacion: |
  El ciclo de la represión solía comenzar con el secuestro (desaparición), seguido por la permanencia en un centro clandestino y, finalmente, la ejecución o desaparición definitiva.
```

### 5 — El concepto de "Desaparecido"
```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["terminologia", "memoria"]

variables:
  termino: uno_de([["El término se aplica a quienes fueron detenidos sin dejar rastro legal.", "desaparecido"], ["El término se aplica a quienes huyeron del país.", "exiliado"]])
  idx: uno_de([0, 1])

respuesta: termino[idx][1]
tipo: mc
opciones_explicitas: ["desaparecido", "exiliado"]

enunciado: "En Argentina, una persona que ha sido secuestrada por fuerzas de seguridad y cuyo paradero es desconocido por el Estado se denomina ___."

explicacion: |
  La figura del 'desaparecido' es el eje central del terrorismo de Estado, caracterizado por la negación de la existencia del detenido por parte de las autoridades.
```