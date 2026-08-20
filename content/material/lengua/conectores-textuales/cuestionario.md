# Lengua — Conectores textuales (cuestionario, 20 preguntas VBLang)

> Tema: `P14Ba`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de conector textual

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["conectores_textuales", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un conector textual une oraciones o párrafos distintos, dándole cohesión al texto — sin conectores, un texto es una sucesión de oraciones sueltas."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/`: es distinto de un nexo, que une proposiciones DENTRO de la misma oración."

explicacion: |
  Verdadero: el conector opera entre oraciones/párrafos, no dentro de
  una sola oración.
```

### 2 — Identificar conector aditivo

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["aditivos"]

variables:
  n: uno_de([1, 1])

respuesta: "aditivo"
tipo: mc
opciones_explicitas: ["aditivo", "adversativo", "causal"]

enunciado: "\"El libro es interesante. Además, está muy bien escrito.\" El conector \"además\" es de tipo..."

pasos:
  - "Suma información adicional en la misma dirección de la idea anterior."

explicacion: |
  Los conectores aditivos suman información en el mismo sentido.
```

### 3 — Identificar conector adversativo

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["adversativos"]

variables:
  n: uno_de([1, 1])

respuesta: "adversativo"
tipo: mc
opciones_explicitas: ["aditivo", "adversativo", "consecutivo"]

enunciado: "\"Estudió mucho. Sin embargo, no aprobó.\" El conector \"sin embargo\" es de tipo..."

pasos:
  - "Opone la segunda idea a lo que se esperaría de la primera."

explicacion: |
  Los conectores adversativos marcan contraste u oposición entre
  ideas.
```

### 4 — Identificar conector causal

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["causales"]

variables:
  n: uno_de([1, 1])

respuesta: "causal"
tipo: mc
opciones_explicitas: ["causal", "consecutivo", "temporal"]

enunciado: "\"Llegó tarde porque perdió el colectivo.\" El conector \"porque\" es de tipo..."

pasos:
  - "Explica la razón del hecho mencionado antes."

explicacion: |
  Los conectores causales explican el motivo o razón de algo.
```

### 5 — Identificar conector consecutivo

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["consecutivos"]

variables:
  n: uno_de([1, 1])

respuesta: "consecutivo"
tipo: mc
opciones_explicitas: ["causal", "consecutivo", "aditivo"]

enunciado: "\"Estudió mucho. Por lo tanto, aprobó.\" El conector \"por lo tanto\" es de tipo..."

pasos:
  - "Marca el resultado o consecuencia de lo dicho antes."

explicacion: |
  Los conectores consecutivos marcan el resultado que se sigue de la
  idea anterior.
```

### 6 — Identificar conector temporal

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["temporales"]

variables:
  conectores: ["primero", "luego", "finalmente"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{conectores[idx]}\" es un conector temporal, que ordena los hechos en el tiempo."

pasos:
  - "Este tipo de conector es especialmente frecuente en textos narrativos (ver `../tipos-textuales/`)."

explicacion: |
  Verdadero: los conectores temporales ordenan la secuencia de hechos
  o pasos.
```

### 7 — Identificar conector de orden/organización

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["de_orden"]

variables:
  n: uno_de([1, 1])

respuesta: "de orden/organización"
tipo: mc
opciones_explicitas: ["de orden/organización", "temporal", "causal"]

enunciado: "\"En primer lugar\" y \"por último\", usados para organizar las PARTES de un texto (no el contenido narrado), son conectores de tipo..."

pasos:
  - "Organizan la estructura del texto en sí, no una secuencia de hechos narrados."

explicacion: |
  Los conectores de orden organizan las partes del propio texto,
  distinto de ordenar hechos en el tiempo.
```

### 8 — Identificar conector ejemplificador

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["ejemplificadores"]

variables:
  conectores: ["por ejemplo", "es decir", "a saber"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{conectores[idx]}\" es un conector ejemplificador, que introduce un ejemplo o aclaración de lo dicho antes."

pasos:
  - "Frecuente en textos expositivos, para hacer más concreta una afirmación general."

explicacion: |
  Verdadero: los ejemplificadores introducen casos concretos que
  ilustran lo afirmado.
```

### 9 — Conectores según tipo textual: narrativo

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "tipos_textuales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tipo textual narrativo se apoya mucho en conectores temporales (\"luego\", \"después\", \"finalmente\")."

pasos:
  - "Ver `../tipos-textuales/`: coincide con la marca de conectores temporales ya vista ahí para el narrativo."

explicacion: |
  Verdadero: cada tipo textual privilegia ciertas familias de
  conectores según su propósito.
```

### 10 — Conectores según tipo textual: argumentativo

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "tesis", "argumentos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El texto argumentativo se apoya mucho en conectores causales y consecutivos, coherente con la lógica de \"porque\"/\"por lo tanto\" usada al construir argumentos."

pasos:
  - "Ver `../argumentos/`: esos mismos conectores ya se mencionaron como típicos de la introducción de argumentos."

explicacion: |
  Verdadero: los conectores causales/consecutivos son centrales para
  el texto argumentativo.
```

### 11 — Un conector mal elegido genera una relación lógica falsa

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "errores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Estudió mucho. Por lo tanto, no aprobó\" suena raro porque \"por lo tanto\" anuncia una consecuencia esperada, y la segunda idea contradice esa expectativa."

pasos:
  - "En ese caso correspondería un conector adversativo (\"sin embargo\"), no uno consecutivo."

explicacion: |
  Verdadero: elegir mal la familia de conector genera una relación
  lógica incoherente entre las ideas, más allá de que suene raro.
```

### 12 — Clasificar el conector correcto para una relación dada

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "practica"]

variables:
  relaciones: ["sumar una idea nueva en la misma dirección", "marcar que la segunda idea contradice la expectativa de la primera", "explicar la razón de un hecho", "marcar el resultado de lo dicho antes"]
  familias: ["aditivo", "adversativo", "causal", "consecutivo"]
  idx: uno_de([0, 1, 2, 3])

respuesta: familias[idx]
tipo: mc
opciones_explicitas: ["aditivo", "adversativo", "causal", "consecutivo"]

enunciado: "Para \"{relaciones[idx]}\", conviene usar un conector..."

pasos:
  - "Cada familia de conector corresponde a un tipo específico de relación lógica entre ideas."

explicacion: |
  Elegir la familia correcta de conector depende de qué relación
  lógica real existe entre las dos ideas que se unen.
```

### 13 — Conector vs. nexo dentro de la oración

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "oracion_compuesta", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Y\" (en \"Juan estudió y aprobó\") es un nexo dentro de una misma oración; \"además\" (en \"Juan estudió. Además, aprobó.\") es un conector textual entre dos oraciones distintas."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/`: la diferencia clave es si unen proposiciones dentro de una oración o entre oraciones/párrafos distintos."

explicacion: |
  Verdadero: nexo y conector textual cumplen funciones similares en
  escalas distintas (oración vs. texto).
```

### 14 — Los conectores no cambian el contenido, sólo la relación

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "significado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los conectores no cambian los hechos que se están contando, sólo señalan qué relación lógica existe entre esos hechos (suma, contraste, causa, consecuencia)."

pasos:
  - "El mismo par de oraciones puede leerse con relaciones distintas según qué conector se elija."

explicacion: |
  Verdadero: el conector es una señal de relación lógica, no un
  cambio del contenido informativo en sí.
```

### 15 — Reconocer conectores en un párrafo

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "sin embargo"
tipo: completar

enunciado: "En \"El plan parecía perfecto. Sin embargo, algo salió mal en el último momento.\", ¿cuál es el conector textual usado?"

pasos:
  - "Marca el contraste entre la expectativa (\"parecía perfecto\") y lo que realmente pasó."

explicacion: |
  \"Sin embargo\" es un conector adversativo que marca la oposición
  entre las dos ideas.
```

### 16 — Elegir el conector adecuado para completar un texto

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "por lo tanto"
tipo: mc
opciones_explicitas: ["por lo tanto", "sin embargo", "por ejemplo"]

enunciado: "\"Llovió toda la noche. ..., el partido se suspendió.\" ¿Qué conector completa mejor la relación de consecuencia entre ambas ideas?"

pasos:
  - "La lluvia (causa) llevó a la suspensión (consecuencia): corresponde un conector consecutivo."

explicacion: |
  \"Por lo tanto\" marca correctamente que la segunda oración es
  consecuencia de la primera.
```

### 17 — Un mismo tipo de relación puede expresarse con distintos conectores

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "variedad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Sin embargo\", \"no obstante\" y \"en cambio\" son conectores distintos que pueden expresar el mismo tipo de relación adversativa."

pasos:
  - "Elegir entre ellos suele ser una decisión de estilo, no cambia la relación lógica señalada."

explicacion: |
  Verdadero: dentro de una misma familia hay varias opciones de
  conector con matices de estilo, no de lógica.
```

### 18 — Ordenar el proceso para revisar los conectores de un texto

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "metodo"]

enunciado: "Ordená los pasos para revisar si los conectores de un texto propio están bien elegidos."
tipo: ordenar
opciones_explicitas:
  - "Identificar cada conector usado entre oraciones o párrafos"
  - "Determinar qué relación lógica real existe entre las ideas que conecta (suma, contraste, causa, consecuencia)"
  - "Comparar esa relación con la familia del conector elegido"
  - "Corregir si el conector elegido no corresponde a la relación lógica real"
respuesta_orden: ["Identificar cada conector usado entre oraciones o párrafos", "Determinar qué relación lógica real existe entre las ideas que conecta (suma, contraste, causa, consecuencia)", "Comparar esa relación con la familia del conector elegido", "Corregir si el conector elegido no corresponde a la relación lógica real"]
explicacion: |
  El proceso va de identificar los conectores usados a verificar si
  corresponden realmente a la relación lógica entre las ideas.
```

### 19 — Conectores como una de las tres herramientas de cohesión

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "cohesion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los conectores textuales son una de las tres herramientas de cohesión estudiadas en esta subrama, junto con la referencia (anáfora/catáfora) y la progresión temática."

pasos:
  - "Ver `../referencia-anafora-y-catafora/` y `../progresion-tematica/`: los tres son nodos hermanos que dependen de `../produccion-escrita-compleja/`."

explicacion: |
  Verdadero: los tres temas abordan distintos mecanismos de cohesión
  textual, complementarios entre sí.
```

### 20 — Aplicación: mejorar un texto revisando sus conectores

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al revisar un texto propio (etapa de revisión de `../produccion-escrita-compleja/`), conviene chequear específicamente si los conectores usados reflejan la relación lógica real entre las ideas, no sólo si \"suenan bien\"."

pasos:
  - "Un conector que suena natural pero indica una relación lógica equivocada puede confundir al lector sobre la argumentación real del texto."

explicacion: |
  Verdadero: la aplicación práctica de este tema es específicamente
  auditar la lógica de los conectores durante la revisión de un
  texto propio.
```
