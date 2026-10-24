### 1 — El desafío térmico del hierro
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["metalurgia", "temperatura", "edad_del_hierro"]

enunciado: "A diferencia del bronce, el hierro requiere temperaturas de fundición mucho más ___ que el cobre para ser procesado."

opciones_explicitas: ["bajas", "altas", "moderadas"]

respuesta: "altas"
tipo: mc

explicacion: |
  El hierro tiene un punto de fusión mucho más elevado que el cobre y el estaño, lo que exigió un desarrollo tecnológico mayor en los hornos de fundición para alcanzar las temperaturas necesarias.
```

### 2 — Abundancia y utilidad
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["recursos", "abundancia"]

variables:
  escenario: uno_de([["el hierro es más abundante que el bronce", "el hierro es más escaso que el bronce"], ["produce herramientas más resistentes", "produce herramientas más frágiles"]])
  dato_enunciado: escenario[0]
  dato_respuesta: escenario[1]

enunciado: "En la Edad del Hierro, la ventaja principal sobre la Edad del Bronce es que {dato_enunciado} y, una vez dominada la técnica, {dato_respuesta}."

respuesta: "produce herramientas más resistentes"
tipo: mc
opciones_explicitas: ["produce herramientas más resistentes", "produce herramientas más frágiles", "es menos duradero"]

explicacion: |
  Aunque el hierro es más difícil de fundir, su abundancia en la corteza terrestre permitió una democratización de las herramientas, y su dureza revolucionó la agricultura y la guerra.
```

### 3 — Comparativa de dureza
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["resistencia", "herramientas"]

enunciado: "Si comparamos la durabilidad de las herramientas de la Edad del Bronce con las de la Edad del Hierro, las de hierro son notablemente más ___."

respuestas_validas: ["resistentes", "frágiles", "blandas"]

respuesta: "resistentes"
tipo: completar

explicacion: |
  La capacidad de las herramientas de hierro para mantener el filo y resistir el impacto permitió una expansión de las actividades productivas.
```

### 4 — Secuencia de la transición tecnológica
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["orden", "tecnologia"]

enunciado: "Ordena los procesos tecnológicos según su complejidad térmica creciente (de menor a mayor temperatura de fundición):"

opciones_explicitas: ["Cobre", "Bronce", "Hierro"]

respuesta: ["Cobre", "Bronce", "Hierro"]
tipo: ordenar

explicacion: |
  El cobre tiene el punto de fusión más bajo, seguido por la aleación de bronce, y finalmente el hierro, que requiere los hornos más avanzados.
```

### 5 — El factor de la abundancia
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["economía", "recursos"]

variables:
  caso: uno_de([[1, "más abundante"], [2, "menos abundante"]])
  desc: caso[0]
  resp: caso[1]

enunciado: "La transición a la Edad del Hierro se vio favorecida porque el hierro es {desc} que los componentes del bronce."

respuesta: "más abundante"
tipo: mc
opciones_explicitas: ["más abundante", "menos abundante", "igual de escaso"]

explicacion: |
  La disponibilidad casi universal de los minerales de hierro permitió que las sociedades no dependieran tanto de las rutas comerciales de estaño, que eran muy limitadas.
```