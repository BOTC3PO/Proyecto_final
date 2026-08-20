# Lengua — Persuasión ética vs. manipulación (cuestionario, 20 preguntas VBLang)

> Tema: `COM5`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Este tema tiene dos prerrequisitos

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "basico"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema reusa dos cosas a la vez: las técnicas de convencer en vivo del debate, y el vocabulario de errores de razonamiento de detectar falacias."

pasos:
  - "Ver `../debate-refutar-en-vivo/` y `../detectar-falacias/`: son los dos prerrequisitos de este tema."

explicacion: |
  Verdadero: es la razón por la que este nodo tiene doble padre en el
  MAPA.
```

### 2 — Criterio central: transparencia y autonomía

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "intermedio"
  tags: ["criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El criterio central para distinguir persuasión ética de manipulación es si se respeta o se evita la capacidad de decisión libre e informada de la otra persona."

pasos:
  - "No está siempre en la técnica en sí, sino en si se respeta esa autonomía."

explicacion: |
  Verdadero: es el criterio central de este tema.
```

### 3 — Definición de persuasión ética

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "basico"
  tags: ["persuasion_etica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La persuasión ética usa argumentos, evidencia y apelaciones emocionales honestas, dejando que la otra persona decida libremente e informada."

pasos:
  - "Es la definición central de persuasión legítima."

explicacion: |
  Verdadero: es la definición de persuasión ética descrita en la
  teoría.
```

### 4 — Definición de manipulación

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "basico"
  tags: ["manipulacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La manipulación usa técnicas que distorsionan la información o explotan sesgos psicológicos para que la otra persona decida algo sin haberlo evaluado realmente por sí misma."

pasos:
  - "Es la definición central de manipulación descrita en la teoría."

explicacion: |
  Verdadero: es la definición de manipulación descrita en la teoría.
```

### 5 — Presión de urgencia artificial

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "intermedio"
  tags: ["manipulacion", "urgencia_artificial"]

variables:
  n: uno_de([1, 1])

respuesta: "manipulación"
tipo: mc
opciones_explicitas: ["persuasión ética", "manipulación"]

enunciado: "Decir \"sólo por hoy\" cuando no es cierto, para evitar que la persona lo piense con calma, es un ejemplo de..."

pasos:
  - "La urgencia artificial busca evitar la reflexión informada, no facilitarla."

explicacion: |
  Es un ejemplo clásico de manipulación por presión de urgencia
  falsa.
```

### 6 — Explotar el miedo desproporcionado

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "intermedio"
  tags: ["manipulacion", "miedo"]

variables:
  n: uno_de([1, 1])

respuesta: "manipulación"
tipo: mc
opciones_explicitas: ["persuasión ética", "manipulación"]

enunciado: "Exagerar un riesgo mínimo para generar una decisión apurada por pánico es un ejemplo de..."

pasos:
  - "Exagerar deliberadamente el riesgo distorsiona la información real."

explicacion: |
  Es un ejemplo de manipulación por explotación del miedo
  desproporcionado.
```

### 7 — Ocultar información relevante

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "intermedio"
  tags: ["manipulacion", "ocultamiento"]

variables:
  n: uno_de([1, 1])

respuesta: "manipulación"
tipo: mc
opciones_explicitas: ["persuasión ética", "manipulación"]

enunciado: "Ocultar información que cambiaría la decisión de la otra persona si la conociera es un ejemplo de..."

pasos:
  - "Impide que la persona decida con información completa."

explicacion: |
  Es un ejemplo de manipulación por ocultamiento de información
  relevante.
```

### 8 — Usar falacias a sabiendas

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "avanzado"
  tags: ["manipulacion", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Recurrir deliberadamente a un ad hominem o una falsa dicotomía, sabiendo que es un error de razonamiento porque \"funciona\" para convencer, es un ejemplo de manipulación."

pasos:
  - "Ver `../detectar-falacias/`: es la aplicación intencional de una falacia como técnica manipuladora."

explicacion: |
  Verdadero: es el punto central que conecta este tema con su
  prerrequisito de falacias.
```

### 9 — Presentar datos verificables con su fuente

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "intermedio"
  tags: ["persuasion_etica", "datos"]

variables:
  n: uno_de([1, 1])

respuesta: "persuasión ética"
tipo: mc
opciones_explicitas: ["persuasión ética", "manipulación"]

enunciado: "Presentar datos verificables junto con su fuente para respaldar un argumento es un ejemplo de..."

pasos:
  - "Permite que la otra persona evalúe la información por sí misma."

explicacion: |
  Es un ejemplo de persuasión ética, porque da la información
  necesaria para decidir informadamente.
```

### 10 — Reconocer las limitaciones del propio argumento

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "intermedio"
  tags: ["persuasion_etica", "concesion"]

variables:
  n: uno_de([1, 1])

respuesta: "persuasión ética"
tipo: mc
opciones_explicitas: ["persuasión ética", "manipulación"]

enunciado: "Reconocer honestamente las limitaciones del propio argumento (concesión), en vez de ocultarlas, es un ejemplo de..."

pasos:
  - "Ver `../contraargumentos/`: la concesión honesta es coherente con el respeto a la autonomía del otro."

explicacion: |
  Es un ejemplo de persuasión ética, porque da una imagen más
  completa y honesta de la situación.
```

### 11 — Apelar a una emoción genuina y relevante

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "avanzado"
  tags: ["persuasion_etica", "emociones"]

variables:
  n: uno_de([1, 1])

respuesta: "persuasión ética"
tipo: mc
opciones_explicitas: ["persuasión ética", "manipulación"]

enunciado: "Mostrar el impacto real de un problema (sin exagerarlo) para apelar a una emoción genuina y relevante al tema es un ejemplo de..."

pasos:
  - "Apelar a una emoción no es automáticamente manipulación, si es genuina y no distorsiona la información."

explicacion: |
  Es un ejemplo de persuasión ética, porque la emoción apelada es
  real y proporcional al problema, no exagerada.
```

### 12 — La misma técnica puede ser ética o manipuladora

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "avanzado"
  tags: ["criterio_central", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Apelar a la emoción no es, por sí mismo, manipulación: depende de si la emoción apelada es genuina y relevante o está exagerada/inventada para nublar el juicio."

pasos:
  - "El criterio no es \"¿usa emociones?\" sino \"¿respeta que la otra persona decida con información real?\"."

explicacion: |
  Verdadero: es el matiz central que evita clasificar toda apelación
  emocional como manipuladora de forma automática.
```

### 13 — Clasificar una técnica según su uso concreto

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "avanzado"
  tags: ["criterio_central", "practica"]

variables:
  usos: ["mostrar fotos reales del impacto de un desastre natural para pedir donaciones, con datos verificables sobre la ayuda necesaria", "mostrar imágenes exageradas y descontextualizadas de sufrimiento, sin datos concretos, sólo para generar pánico"]
  tipos: ["persuasión ética", "manipulación"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["persuasión ética", "manipulación"]

enunciado: "\"{usos[idx]}\" es un ejemplo de..."

pasos:
  - "La diferencia está en si la emoción apelada es genuina y con datos verificables, o exagerada/descontextualizada para generar pánico sin sustento."

explicacion: |
  El mismo recurso (mostrar imágenes fuertes) puede usarse de forma
  ética o manipuladora según cómo se emplee.
```

### 14 — La manipulación distorsiona o explota, no sólo persuade

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "intermedio"
  tags: ["manipulacion", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Cualquier intento de convencer a alguien de algo, sin importar el método usado, cuenta como manipulación."

pasos:
  - "Persuadir con argumentos honestos y evidencia verificable (persuasión ética) es distinto de distorsionar información o explotar sesgos (manipulación)."

explicacion: |
  Falso: no todo intento de convencer es manipulación, sólo cuando se
  distorsiona información o se explotan sesgos psicológicos.
```

### 15 — Relación con publicidad engañosa

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "avanzado"
  tags: ["publicidad_enganosa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La distinción entre persuasión ética y manipulación es relevante para analizar publicidad, política, ventas y cualquier contexto donde se busca influir en decisiones ajenas."

pasos:
  - "Ver `../../ciudadania-digital/publicidad-enganosa/`: es una de las aplicaciones prácticas más directas de este criterio."

explicacion: |
  Verdadero: es la conexión entre este tema y sus aplicaciones
  prácticas en otros contextos ya estudiados.
```

### 16 — La transparencia es central en la persuasión ética

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "intermedio"
  tags: ["persuasion_etica", "transparencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ser transparente sobre las fuentes y limitaciones del propio argumento es central para que la persuasión sea considerada ética, no manipuladora."

pasos:
  - "La transparencia permite que la otra persona evalúe la información real antes de decidir."

explicacion: |
  Verdadero: la transparencia es uno de los pilares del criterio de
  persuasión ética.
```

### 17 — Manipulación no requiere usar falacias explícitamente

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "avanzado"
  tags: ["manipulacion", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La manipulación no siempre usa una falacia lógica identificable: técnicas como la presión de urgencia artificial o el ocultamiento de información también son manipuladoras sin encajar en una falacia específica ya nombrada."

pasos:
  - "El criterio central de manipulación (distorsionar/explotar/no respetar autonomía) es más amplio que el catálogo de falacias formales."

explicacion: |
  Verdadero: es un matiz importante, la manipulación no se agota en
  el catálogo de falacias ya estudiado.
```

### 18 — Ordenar el análisis para distinguir persuasión de manipulación

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "intermedio"
  tags: ["criterio_central", "metodo"]

enunciado: "Ordená los pasos para analizar si un intento de convencer es persuasión ética o manipulación."
tipo: ordenar
opciones_explicitas:
  - "Identificar la técnica usada (dato, apelación emocional, urgencia, etc.)"
  - "Revisar si la información presentada es verificable y completa, o distorsionada/incompleta"
  - "Revisar si se le da a la otra persona tiempo y espacio para decidir con calma"
  - "Concluir si se respeta o se evita la autonomía de decisión informada del otro"
respuesta_orden: ["Identificar la técnica usada (dato, apelación emocional, urgencia, etc.)", "Revisar si la información presentada es verificable y completa, o distorsionada/incompleta", "Revisar si se le da a la otra persona tiempo y espacio para decidir con calma", "Concluir si se respeta o se evita la autonomía de decisión informada del otro"]
explicacion: |
  El análisis va de identificar la técnica a evaluar si respeta o
  evita la autonomía informada del otro, el criterio central del
  tema.
```

### 19 — Persuasión ética vs. manipulación cierra la subrama de comunicación en vivo

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "avanzado"
  tags: ["sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema cierra la subrama de comunicación en vivo con una capa ética: no sólo cómo convencer efectivamente, sino cuándo esas técnicas cruzan la línea hacia algo que no respeta la autonomía del otro."

pasos:
  - "Ver `../exposicion-oral/`, `../debate-refutar-en-vivo/` y `../negociacion/`: son los temas previos de la subrama que este tema completa con la dimensión ética."

explicacion: |
  Verdadero: es la síntesis del rol de este tema dentro de la
  subrama completa de comunicación oral.
```

### 20 — Aplicación: evaluar un discurso persuasivo

```
metadata:
  materia: "lengua"
  tema: "persuasion_etica_vs_manipulacion"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al escuchar un discurso que busca convencer sobre algo importante (una compra, un voto, una decisión personal), conviene preguntarse si se está dando información completa y tiempo para decidir con calma, o si se están usando técnicas de urgencia artificial o miedo exagerado."

pasos:
  - "Es la aplicación práctica directa del criterio central de este tema para evaluar discursos persuasivos reales."

explicacion: |
  Verdadero: es la aplicación concreta de este tema como herramienta
  de pensamiento crítico ante intentos de persuasión cotidianos.
```
