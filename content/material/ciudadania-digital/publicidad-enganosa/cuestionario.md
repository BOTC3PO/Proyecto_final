# Ciudadanía Digital — Publicidad engañosa (cuestionario, 20 preguntas VBLang)

> Tema: `CD2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — El eje del tema: frases que no dicen nada

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "basico"
  tags: ["publicidad_enganosa", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Muchos anuncios usan frases que suenan a promesa concreta pero, al analizarlas con cuidado, no afirman nada verificable ni exigible."

pasos:
  - "El objetivo de este tema es aprender a detectar esas frases vacías."

explicacion: |
  Verdadero: es el eje central de este tema.
```

### 2 — Identificar comparativo sin punto de comparación

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["comparativos_vacios"]

variables:
  n: uno_de([1, 1])

respuesta: "comparativo sin punto de comparación"
tipo: mc
opciones_explicitas: ["comparativo sin punto de comparación", "superlativo vacío", "testimonio como prueba"]

enunciado: "\"Hasta 50% más eficaz\" (sin decir más eficaz que qué) es un ejemplo de..."

pasos:
  - "Si no se dice contra qué se compara, el dato suena concreto pero no afirma nada verificable."

explicacion: |
  El comparativo sin punto de comparación deja sin especificar la
  base de la comparación.
```

### 3 — Identificar superlativo vacío

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["superlativos_vacios"]

variables:
  n: uno_de([1, 1])

respuesta: "superlativo vacío"
tipo: mc
opciones_explicitas: ["comparativo sin punto de comparación", "superlativo vacío", "cifra sin fuente"]

enunciado: "\"El mejor café del mundo\" (sin decir según qué criterio ni medido por quién) es un ejemplo de..."

pasos:
  - "Sin un criterio y una fuente, es una afirmación de opinión disfrazada de dato objetivo."

explicacion: |
  El superlativo vacío usa palabras extremas (\"el mejor\", \"el
  número uno\") sin ningún criterio verificable.
```

### 4 — Identificar cifra sin fuente ni metodología

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["cifras_sin_fuente"]

variables:
  n: uno_de([1, 1])

respuesta: "cifra sin fuente ni metodología"
tipo: mc
opciones_explicitas: ["cifra sin fuente ni metodología", "superlativo vacío", "letra chica"]

enunciado: "\"9 de cada 10 recomiendan...\" (sin decir cuántas personas en total ni quién hizo el estudio) es un ejemplo de..."

pasos:
  - "Una cifra sin metodología citable no tiene sustento real, aunque tenga apariencia de rigor estadístico."

explicacion: |
  La cifra sin fuente ni metodología presenta un número sin poder
  verificarlo.
```

### 5 — Identificar testimonio como prueba

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["testimonio_como_prueba"]

variables:
  n: uno_de([1, 1])

respuesta: "testimonio como prueba"
tipo: mc
opciones_explicitas: ["testimonio como prueba", "comparativo sin punto de comparación", "cifra sin fuente"]

enunciado: "Usar \"a mí me funcionó\" de una sola persona como si probara que el producto funciona en general es un ejemplo de..."

pasos:
  - "Un testimonio individual no prueba que algo funcione en general."

explicacion: |
  El testimonio como prueba usa un caso individual como si
  demostrara algo sobre el conjunto general.
```

### 6 — Testimonio como prueba es una generalización apresurada

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["testimonio_como_prueba", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar un testimonio individual como si probara la eficacia general de un producto es un ejemplo de generalización apresurada, la misma falacia ya vista en `../../lengua/detectar-falacias/`."

pasos:
  - "Un solo caso no es una muestra suficiente para generalizar, aunque el testimonio en sí sea sincero."

explicacion: |
  Verdadero: es la aplicación directa de esa falacia al contexto
  publicitario.
```

### 7 — Identificar palabras técnicas sin significado verificable

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["palabras_tecnicas_vacias"]

variables:
  n: uno_de([1, 1])

respuesta: "palabras técnicas sin significado verificable"
tipo: mc
opciones_explicitas: ["palabras técnicas sin significado verificable", "letra chica", "cifra sin fuente"]

enunciado: "\"Fórmula exclusiva\", \"tecnología avanzada\" y \"clínicamente probado\" (sin decir qué se probó ni dónde se publicó) son ejemplos de..."

pasos:
  - "Dan una sensación de rigor científico sin aportar ningún dato concreto verificable."

explicacion: |
  Las palabras técnicas vacías suenan a rigor científico sin ofrecer
  ningún dato verificable de respaldo.
```

### 8 — Identificar letra chica que contradice el mensaje principal

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["letra_chica"]

variables:
  n: uno_de([1, 1])

respuesta: "letra chica que contradice el mensaje principal"
tipo: mc
opciones_explicitas: ["letra chica que contradice el mensaje principal", "superlativo vacío", "testimonio como prueba"]

enunciado: "Un anuncio que promete algo llamativo, pero cuyas condiciones legales en letra pequeña matizan o contradicen esa promesa, es un ejemplo de..."

pasos:
  - "Conviene revisar siempre las condiciones completas, no sólo el titular llamativo."

explicacion: |
  La letra chica que contradice el mensaje principal esconde
  condiciones importantes en un lugar poco visible.
```

### 9 — La pregunta clave para detectar publicidad engañosa

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La pregunta clave para detectar publicidad engañosa es: \"¿esto se puede verificar de forma concreta, o es una frase que suena bien sin decir nada comprobable?\"."

pasos:
  - "Es la misma lógica de separar conclusión de razón sólida ya vista en `../../lengua/detectar-falacias/`."

explicacion: |
  Verdadero: es la pregunta metodológica central de este tema.
```

### 10 — No toda publicidad es engañosa

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["publicidad_enganosa", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Reconocer estas técnicas no implica que toda publicidad sea engañosa; el objetivo es dar herramientas para distinguir una afirmación verificable de una frase vacía."

pasos:
  - "Hay publicidad con datos concretos y verificables, no toda apela a estas técnicas."

explicacion: |
  Verdadero: es un matiz importante para no generalizar de forma
  injusta sobre toda la publicidad.
```

### 11 — Argumento de datos sin sustento en publicidad

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["cifras_sin_fuente", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una cifra publicitaria sin fuente ni metodología citable es un argumento de datos sin sustento real, aunque tenga apariencia de rigor estadístico."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: es la aplicación directa de ese concepto al contexto publicitario."

explicacion: |
  Verdadero: es la conexión explícita entre esta técnica publicitaria
  y el concepto de argumento de datos ya estudiado.
```

### 12 — Clasificar la técnica publicitaria en un ejemplo

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["publicidad_enganosa", "practica"]

variables:
  frases: ["Ahora con 30% más de proteína", "El producto número 1 en preferencia"]
  tecnicas: ["comparativo sin punto de comparación", "superlativo vacío"]
  idx: uno_de([0, 1])

respuesta: tecnicas[idx]
tipo: mc
opciones_explicitas: ["comparativo sin punto de comparación", "superlativo vacío", "cifra sin fuente", "testimonio como prueba"]

enunciado: "\"{frases[idx]}\" (sin más detalle) es un ejemplo de..."

pasos:
  - "\"Más que\" sin punto de comparación es un comparativo vacío; \"número 1\" sin criterio es un superlativo vacío."

explicacion: |
  Cada frase ejemplifica una técnica distinta de publicidad engañosa.
```

### 13 — Preguntar "más eficaz que qué"

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["comparativos_vacios", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ante la frase \"hasta 50% más eficaz\", conviene preguntarse: ¿más eficaz que el producto anterior de la misma marca, que la competencia, o que un placebo?"

pasos:
  - "Sin esa aclaración, el porcentaje suena concreto pero no dice nada verificable sobre qué se está comparando."

explicacion: |
  Verdadero: es la pregunta crítica que revela la falta de contenido
  verificable en un comparativo vacío.
```

### 14 — "Clínicamente probado" sin detalles no es suficiente

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["palabras_tecnicas_vacias", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La frase \"clínicamente probado\", sin ningún dato adicional sobre qué se probó, con qué resultado o dónde se publicó el estudio, es suficiente para verificar la eficacia real de un producto."

pasos:
  - "Sin esos datos concretos, es una palabra técnica vacía que suena a rigor científico sin serlo."

explicacion: |
  Falso: la frase por sí sola, sin datos concretos verificables, no
  demuestra nada.
```

### 15 — Revisar la letra chica antes de aceptar una promoción

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["letra_chica", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de aceptar una promoción atractiva (\"3x2 en todo el local\"), conviene revisar las condiciones completas en letra chica, que pueden excluir la mayoría de los productos anunciados."

pasos:
  - "El titular llamativo puede no reflejar completamente las condiciones reales de la oferta."

explicacion: |
  Verdadero: es la aplicación práctica de revisar la letra chica
  antes de tomar decisiones de consumo.
```

### 16 — Publicidad engañosa reutiliza falacias ya conocidas

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["publicidad_enganosa", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Varias técnicas de publicidad engañosa reutilizan directamente falacias ya estudiadas en `../../lengua/detectar-falacias/`: testimonio como prueba (generalización apresurada), cifras sin fuente (argumento de datos sin sustento)."

pasos:
  - "Es la misma conexión que da origen a este tema como aplicación práctica de ese prerrequisito."

explicacion: |
  Verdadero: es la síntesis de la relación entre este tema y su
  prerrequisito de Lengua.
```

### 17 — Superlativo con criterio explícito no es vacío

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["superlativos_vacios", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"El auto más vendido de Argentina en 2025, según datos de la Asociación de Concesionarios\" es un ejemplo de superlativo vacío, igual que \"el mejor auto del mundo\" sin ninguna fuente."

pasos:
  - "El primero SÍ tiene criterio (ventas) y fuente citada (la asociación); el segundo no tiene ninguno de los dos."

explicacion: |
  Falso: cuando hay criterio explícito y fuente citable, ya no es un
  superlativo vacío, es una afirmación verificable.
```

### 18 — Ordenar el proceso para analizar un anuncio publicitario

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "intermedio"
  tags: ["publicidad_enganosa", "metodo"]

enunciado: "Ordená los pasos para analizar críticamente un anuncio publicitario."
tipo: ordenar
opciones_explicitas:
  - "Identificar las afirmaciones concretas hechas por el anuncio (cifras, comparativos, superlativos)"
  - "Preguntar si cada afirmación tiene un criterio, fuente o punto de comparación explícito"
  - "Revisar si hay letra chica que matice o contradiga el mensaje principal"
  - "Concluir qué partes del anuncio son verificables y cuáles son frases vacías"
respuesta_orden: ["Identificar las afirmaciones concretas hechas por el anuncio (cifras, comparativos, superlativos)", "Preguntar si cada afirmación tiene un criterio, fuente o punto de comparación explícito", "Revisar si hay letra chica que matice o contradiga el mensaje principal", "Concluir qué partes del anuncio son verificables y cuáles son frases vacías"]
explicacion: |
  El proceso va de identificar las afirmaciones concretas a evaluar
  su verificabilidad y revisar las condiciones completas.
```

### 19 — Publicidad engañosa y verificación de noticias comparten origen

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["publicidad_enganosa", "verificacion_de_una_noticia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Publicidad engañosa y verificación de una noticia son dos nodos hermanos que dependen del mismo prerrequisito (detectar falacias) y aplican la misma lógica crítica a contextos distintos."

pasos:
  - "Ver `../verificacion-de-una-noticia/`: son nodos hermanos en el MAPA (`CD1`/`CD2`)."

explicacion: |
  Verdadero: es la relación entre los dos temas de Ciudadanía
  Digital.
```

### 20 — Aplicación: leer un anuncio antes de comprar

```
metadata:
  materia: "ciudadania_digital"
  tema: "publicidad_enganosa"
  nivel: "avanzado"
  tags: ["publicidad_enganosa", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de decidir una compra basada en un anuncio con frases como \"el mejor del mercado\" o \"resultados garantizados\", conviene preguntarse qué de esas afirmaciones es realmente verificable."

pasos:
  - "Es la aplicación práctica más directa de este tema en decisiones cotidianas de consumo."

explicacion: |
  Verdadero: es la aplicación concreta de este tema como herramienta
  de consumo crítico.
```
