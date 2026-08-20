# Examen jefe — Dominio Persuasivo Ético

> Logro #92. Aprobaste el parcial demostrando capacidad para distinguir entre persuasión ética y manipulación en producciones escritas complejas con progresión temática clara. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **100 preguntas totales** en 5/5 secciones.

---

## Sección: persuasion-etica-vs-manipulacion (20 preguntas)

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
respuesta_orden:
  - "Identificar la técnica usada (dato, apelación emocional, urgencia, etc.)"
  - "Revisar si la información presentada es verificable y completa, o distorsionada/incompleta"
  - "Revisar si se le da a la otra persona tiempo y espacio para decidir con calma"
  - "Concluir si se respeta o se evita la autonomía de decisión informada del otro"

explicacion: |
  El análisis va de identificar la técnica a evaluar si respeta o
  evita la autonomía informada del otro, el criterio central del
  tema.
```

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

## Sección: presentacion-con-apoyo-visual (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "basico"
  tags: ["apoyo_visual", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El apoyo visual (diapositivas, gráficos) es un complemento para reforzar lo que se dice, no un guion para leer en voz alta palabra por palabra."

pasos:
  - "Ver `../exposicion-oral/`: la base sigue siendo la exposición oral bien planificada."

explicacion: |
  Verdadero: es la relación central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["errores_comunes"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Llenar una diapositiva de texto y leerla en voz alta es el error más frecuente: la audiencia no puede leer y escuchar con atención al mismo tiempo."

pasos:
  - "Termina sin hacer bien ninguna de las dos cosas: ni leer con atención ni escuchar."

explicacion: |
  Verdadero: es el error central que describe la teoría de este tema.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "basico"
  tags: ["principio_de_diseno"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada diapositiva debería comunicar una sola idea central, con el mínimo texto necesario (títulos cortos, palabras clave, no oraciones completas)."

pasos:
  - "El detalle se explica hablando, no leyendo de la pantalla."

explicacion: |
  Verdadero: es el principio central de diseño de diapositivas
  descrito en la teoría.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["graficos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un gráfico de barras o de torta comunica una comparación de datos mucho más rápido que una tabla de números leída en voz alta."

pasos:
  - "Es uno de los casos recomendados para usar imagen/gráfico en vez de texto."

explicacion: |
  Verdadero: los datos numéricos comparativos se comunican mejor
  visualmente que en formato de tabla leída.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["diagramas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un diagrama de flujo o una línea de tiempo es más claro que describir un proceso paso a paso sólo con palabras."

pasos:
  - "Es otro de los casos recomendados para usar apoyo visual en vez de sólo texto/palabras."

explicacion: |
  Verdadero: los procesos y secuencias se comunican mejor con
  diagramas que con descripción puramente verbal.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["conceptos_espaciales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un mapa, una foto o un esquema comunican mejor la disposición física de algo que una descripción verbal."

pasos:
  - "Es otro de los casos recomendados para usar apoyo visual, específicamente para conceptos espaciales."

explicacion: |
  Verdadero: los conceptos espaciales se comunican mejor con
  elementos visuales que con palabras.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["legibilidad", "tamano"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tamaño de letra de una diapositiva debe ser suficientemente grande para leerse desde el fondo de la sala."

pasos:
  - "Una regla práctica: si no se lee bien impreso en una hoja a distancia de brazo extendido, es demasiado chico en pantalla."

explicacion: |
  Verdadero: es un criterio de legibilidad central para el apoyo
  visual.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["legibilidad", "contraste"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar texto oscuro sobre fondo claro (o viceversa), y evitar combinaciones de colores difíciles de distinguir, es un criterio de legibilidad recomendado."

pasos:
  - "Es otro de los criterios de legibilidad descritos en la teoría."

explicacion: |
  Verdadero: el contraste adecuado es central para que el contenido
  visual sea legible.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["legibilidad", "cantidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una diapositiva sobrecargada de elementos distrae en vez de ayudar: conviene usar pocos elementos y mucho espacio en blanco."

pasos:
  - "Es otro de los criterios de legibilidad descritos en la teoría."

explicacion: |
  Verdadero: la cantidad de contenido por diapositiva afecta
  directamente su claridad.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["sincronizacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El apoyo visual debe cambiar o resaltarse en el momento en que se habla de eso específicamente; mostrar contenido que todavía no se explicó genera confusión."

pasos:
  - "La audiencia intenta leer algo que no entiende todavía si se muestra antes de tiempo."

explicacion: |
  Verdadero: la sincronización entre lo dicho y lo mostrado es
  central para que el apoyo visual funcione bien.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "avanzado"
  tags: ["apoyo_visual", "exposicion_oral"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Tener buenas diapositivas hace innecesario planificar la estructura de introducción, desarrollo y cierre de la exposición oral."

pasos:
  - "Ver `../exposicion-oral/`: la estructura de la exposición sigue siendo necesaria, el apoyo visual sólo la complementa."

explicacion: |
  Falso: el apoyo visual no reemplaza la planificación de la
  exposición oral, la complementa.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["apoyo_visual", "practica"]

variables:
  contenidos: ["comparar las ventas de tres productos en un año", "explicar los pasos de un proceso de fabricación", "mostrar la ubicación geográfica de un evento histórico"]
  tipos: ["gráfico de barras", "diagrama de flujo", "mapa"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["gráfico de barras", "diagrama de flujo", "mapa"]

enunciado: "Para \"{contenidos[idx]}\", el apoyo visual más adecuado sería un..."

pasos:
  - "Cada tipo de contenido se comunica mejor con un tipo de apoyo visual específico."

explicacion: |
  Elegir el tipo correcto de apoyo visual depende de qué tipo de
  información se quiere comunicar.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["principio_de_diseno", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "\"Revolución Industrial — Inglaterra, fines s. XVIII\""
tipo: mc
opciones_explicitas: ["\"La Revolución Industrial comenzó en Inglaterra a fines del siglo XVIII debido a varios factores económicos y tecnológicos combinados\"", "\"Revolución Industrial — Inglaterra, fines s. XVIII\""]

enunciado: "¿Cuál de estas dos versiones sigue mejor el principio de \"pocas palabras, una idea por diapositiva\"?"

pasos:
  - "La versión con palabras clave deja el detalle para ser explicado hablando, no leído de la pantalla."

explicacion: |
  La versión corta con palabras clave es más adecuada para una
  diapositiva; los detalles se explican verbalmente.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "avanzado"
  tags: ["sincronizacion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si se muestra una diapositiva con un gráfico complejo varios minutos antes de explicarlo, la audiencia puede distraerse intentando entenderlo por su cuenta, en vez de prestar atención a lo que se está diciendo mientras tanto."

pasos:
  - "Es la aplicación práctica de por qué la sincronización entre lo mostrado y lo dicho es importante."

explicacion: |
  Verdadero: es un ejemplo concreto del problema de falta de
  sincronización descrito en la teoría.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "avanzado"
  tags: ["apoyo_visual", "contexto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "No toda exposición oral necesita apoyo visual: para audiencias chicas o contenidos muy simples, puede bastar con la exposición oral sola, sin diapositivas."

pasos:
  - "El apoyo visual es una herramienta adicional, no un requisito obligatorio en todos los contextos."

explicacion: |
  Verdadero: es un matiz sobre cuándo conviene (o no) usar apoyo
  visual, según el contexto de la exposición.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "avanzado"
  tags: ["legibilidad", "distraccion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar demasiadas animaciones, transiciones o efectos visuales llamativos puede distraer a la audiencia del contenido central, en vez de ayudar a comunicarlo."

pasos:
  - "Es coherente con el principio general de que el apoyo visual debe apoyar el mensaje, no competir con él por atención."

explicacion: |
  Verdadero: el exceso de efectos visuales es otro tipo de
  sobrecarga que dificulta, en vez de ayudar, la comunicación.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["principio_de_diseno", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una diapositiva con un título corto, una imagen relevante y pocas palabras clave, con texto grande y buen contraste, sigue los principios de diseño recomendados para apoyo visual."

pasos:
  - "Combina todos los criterios descritos en la teoría: una idea, pocos elementos, buena legibilidad."

explicacion: |
  Verdadero: es un ejemplo de diapositiva bien diseñada según los
  criterios de este tema.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "intermedio"
  tags: ["apoyo_visual", "metodo"]

enunciado: "Ordená los pasos para diseñar una presentación con apoyo visual, después de ya tener planificada la exposición oral."
tipo: ordenar
opciones_explicitas:
  - "Identificar qué partes del contenido se benefician de un apoyo visual (datos, procesos, conceptos espaciales)"
  - "Diseñar cada diapositiva con una sola idea central y texto mínimo"
  - "Revisar legibilidad: tamaño de letra, contraste, cantidad de elementos"
  - "Ensayar la exposición sincronizando lo que se dice con lo que se muestra en cada momento"
respuesta_orden:
  - "Identificar qué partes del contenido se benefician de un apoyo visual (datos, procesos, conceptos espaciales)"
  - "Diseñar cada diapositiva con una sola idea central y texto mínimo"
  - "Revisar legibilidad: tamaño de letra, contraste, cantidad de elementos"
  - "Ensayar la exposición sincronizando lo que se dice con lo que se muestra en cada momento"

explicacion: |
  El proceso va de decidir dónde usar apoyo visual a diseñarlo bien y
  finalmente ensayar la sincronización con la exposición oral.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "avanzado"
  tags: ["apoyo_visual", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema agrega una capa práctica muy usada (presentaciones escolares, laborales, académicas) a la base de exposición oral ya dominada."

pasos:
  - "Ver `../exposicion-oral/`: es la relación de prerrequisito y complemento entre ambos temas."

explicacion: |
  Verdadero: es la síntesis de la relación entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "lengua"
  tema: "presentacion_con_apoyo_visual"
  nivel: "avanzado"
  tags: ["apoyo_visual", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al preparar diapositivas para un trabajo escolar, conviene usar pocas palabras clave por diapositiva, elegir gráficos o imágenes cuando ayuden a comunicar mejor que el texto, y ensayar la sincronización entre lo dicho y lo mostrado."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en la
  preparación real de una presentación escolar.
```

## Sección: produccion-escrita-compleja (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["produccion_escrita_compleja", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Producción escrita compleja no enseña una técnica nueva, sino que integra la oración compuesta y la puntuación ya vistas para producir un texto largo y coherente."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/` y `../signos-de-puntuacion/`: son sus dos prerrequisitos directos."

explicacion: |
  Verdadero: este tema combina herramientas previas, no introduce
  contenido gramatical nuevo.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["planificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "planificación"
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión"]

enunciado: "La etapa en la que se decide el tipo textual, la idea principal o tesis, y se arma un esquema de párrafos, ANTES de escribir, se llama..."

pasos:
  - "Es el primer paso del proceso, antes de poner una palabra en el papel."

explicacion: |
  La planificación organiza el texto antes de comenzar a redactar.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["redaccion"]

variables:
  n: uno_de([1, 1])

respuesta: "redacción"
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión"]

enunciado: "La etapa en la que se escribe el borrador sin frenarse a corregir cada detalle, siguiendo el esquema hecho antes, se llama..."

pasos:
  - "El objetivo de esta etapa es sacar las ideas al papel, no lograr la versión final."

explicacion: |
  La redacción es la etapa de escribir el primer borrador completo.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["revision"]

variables:
  n: uno_de([1, 1])

respuesta: "revisión"
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión"]

enunciado: "La etapa en la que se relee con ojo crítico buscando errores de coherencia, gramática, ortografía y puntuación se llama..."

pasos:
  - "Es el paso que sigue a tener un borrador completo escrito."

explicacion: |
  La revisión busca errores y aspectos a mejorar antes de la versión
  final.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["edicion_final"]

variables:
  n: uno_de([1, 1])

respuesta: "edición final"
tipo: mc
opciones_explicitas: ["edición final", "planificación", "redacción"]

enunciado: "La etapa en la que se aplican las correcciones encontradas en la revisión para producir la versión definitiva se llama..."

pasos:
  - "Es el último paso del proceso de escritura, después de revisar."

explicacion: |
  La edición final cierra el proceso aplicando todas las correcciones
  detectadas.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["produccion_escrita_compleja", "proceso"]

enunciado: "Ordená las cuatro etapas del proceso de escritura de un texto complejo."
tipo: ordenar
opciones_explicitas:
  - "Planificación"
  - "Redacción (borrador)"
  - "Revisión"
  - "Edición final"
respuesta_orden:
  - "Planificación"
  - "Redacción (borrador)"
  - "Revisión"
  - "Edición final"

explicacion: |
  El proceso completo va de organizar las ideas a escribirlas, luego
  revisarlas críticamente, y finalmente corregirlas.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["produccion_escrita_compleja", "proceso"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escribir un texto complejo tiene etapas distintas, cada una con un objetivo propio, en vez de ser un proceso de \"escribir de una sola vez\"."

pasos:
  - "Planificar, redactar, revisar y editar son pasos con objetivos distintos entre sí."

explicacion: |
  Verdadero: separar el proceso en etapas es una estrategia central
  de la producción escrita compleja.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["parrafos", "idea_principal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada párrafo de un texto complejo debería desarrollar una sola idea principal propia, conectada con la del párrafo anterior y siguiente."

pasos:
  - "Ver `../comprension-idea-principal/`: mezclar varias ideas grandes en un solo párrafo dificulta la lectura."

explicacion: |
  Verdadero: la organización \"un párrafo, una idea\" es un principio
  central de la escritura clara.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["estructura_sintactica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto complejo bien escrito combina oraciones simples y compuestas (coordinadas y subordinadas), en vez de repetir siempre la misma estructura corta."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/`: la variedad sintáctica distingue la escritura madura."

explicacion: |
  Verdadero: la variedad en la estructura de las oraciones es una
  marca de escritura compleja bien lograda.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["puntuacion", "oraciones_largas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más larga y combinada es una oración, más depende de una buena puntuación para seguir siendo legible."

pasos:
  - "Ver `../signos-de-puntuacion/`: es la razón concreta de por qué este tema depende también de la puntuación."

explicacion: |
  Verdadero: la puntuación es lo que hace legibles a las oraciones
  compuestas más largas.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["redaccion", "estrategia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Durante la etapa de redacción del borrador, conviene no frenarse a corregir cada detalle, porque esa revisión detallada corresponde a una etapa posterior."

pasos:
  - "Mezclar redacción y revisión al mismo tiempo puede hacer más lento y difícil sacar las ideas completas al papel."

explicacion: |
  Verdadero: separar redactar de revisar es una estrategia práctica
  para no trabarse durante el primer borrador.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["planificacion", "tipos_textuales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la planificación se decide de qué tipo textual va a ser el texto (narrativo, expositivo, argumentativo...) antes de empezar a redactar."

pasos:
  - "Ver `../tipos-textuales/`: saber el propósito del texto orienta cómo se organiza el esquema."

explicacion: |
  Verdadero: definir el tipo textual es parte de la planificación
  previa a la redacción.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["revision", "errores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La etapa de revisión busca errores de distinto tipo: coherencia (¿se entiende la idea?), gramática, ortografía/tildación y puntuación."

pasos:
  - "No es una sola revisión de un solo aspecto, sino varias capas de lectura crítica."

explicacion: |
  Verdadero: la revisión abarca múltiples niveles del texto, no sólo
  la ortografía.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["planificacion", "esquema"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Armar un esquema breve de los párrafos que van a desarrollar la idea principal o tesis es parte de la planificación, antes de escribir el borrador completo."

pasos:
  - "Ese esquema orienta la redacción y evita perder el hilo del texto en el camino."

explicacion: |
  Verdadero: el esquema de párrafos es una herramienta práctica
  central de la planificación.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["prerrequisito", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Producción escrita compleja tiene dos prerrequisitos directos en el MAPA: oración compuesta (para combinar oraciones) y signos de puntuación (para que esas combinaciones se lean sin ambigüedad)."

pasos:
  - "Ambos prerrequisitos son necesarios en conjunto: combinar oraciones sin puntuar bien resulta igual de ilegible."

explicacion: |
  Verdadero: es el caso de un nodo con doble padre en el MAPA,
  explicado en `../dependencias.md`.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["parrafos", "coherencia"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Es una buena práctica de escritura mezclar varias ideas grandes distintas dentro de un mismo párrafo, para que el texto sea más corto."

pasos:
  - "Mezclar varias ideas grandes en un párrafo suele dificultar la lectura, en vez de facilitarla."

explicacion: |
  Falso: la regla \"un párrafo, una idea\" existe justamente para
  evitar esa confusión, no para acortar el texto a costa de la
  claridad.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["produccion_escrita_compleja", "practica"]

variables:
  acciones: ["armar un esquema de los párrafos antes de escribir", "corregir una falta de ortografía detectada al releer el borrador"]
  etapas: ["planificación", "revisión"]
  idx: uno_de([0, 1])

respuesta: etapas[idx]
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión", "edición final"]

enunciado: "La acción de \"{acciones[idx]}\" corresponde a la etapa de..."

pasos:
  - "Antes de escribir = planificación. Detectar un error al releer = revisión."

explicacion: |
  Cada acción concreta del proceso de escritura corresponde a una
  etapa específica.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["produccion_escrita_compleja", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Separar redactar (sacar todas las ideas) de revisar (corregir con ojo crítico) suele producir mejores textos que intentar escribir la versión perfecta desde la primera oración."

pasos:
  - "Frenar cada oración para corregirla antes de seguir suele hacer perder el hilo general del texto."

explicacion: |
  Verdadero: es la justificación práctica de por qué separar el
  proceso en etapas mejora el resultado final.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["produccion_escrita_compleja", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una vez que se puede producir un borrador completo con estructura básica correcta, el siguiente paso es refinar específicamente cómo se conectan las oraciones y párrafos entre sí (cohesión y coherencia)."

pasos:
  - "Ver `../conectores-textuales/`, `../referencia-anafora-y-catafora/`, `../progresion-tematica/`: los tres temas siguientes de la cadena."

explicacion: |
  Verdadero: por eso producción escrita compleja es prerrequisito
  directo de esos tres temas de cohesión y coherencia.
```

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["produccion_escrita_compleja", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de escribir un informe escolar largo, conviene dedicar tiempo a planificar (tipo textual, tesis o idea central, esquema de párrafos) en vez de empezar a escribir directamente sin ningún plan."

pasos:
  - "La planificación previa suele ahorrar tiempo de reescritura y mejorar la coherencia general del texto final."

explicacion: |
  Verdadero: la aplicación práctica más directa de este tema es
  planificar antes de encarar cualquier texto extenso real.
```

## Sección: progresion-tematica (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "basico"
  tags: ["tema", "rema"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En cada oración, el tema es de qué habla (generalmente lo ya conocido) y el rema es la información nueva que se dice sobre ese tema."

pasos:
  - "\"El río nace en la montaña\": \"el río\" es el tema, \"nace en la montaña\" es el rema."

explicacion: |
  Verdadero: tema y rema son las dos partes básicas del análisis de
  progresión temática.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "basico"
  tags: ["progresion_tematica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La progresión temática es el patrón según el cual el tema de cada oración se relaciona con la información de las oraciones anteriores."

pasos:
  - "Es lo que hace que un texto avance de forma ordenada y no salte de un lado a otro sin conexión."

explicacion: |
  Verdadero: es la definición central de este tema.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["tema_constante"]

variables:
  n: uno_de([1, 1])

respuesta: "tema constante"
tipo: mc
opciones_explicitas: ["tema constante", "progresión lineal", "temas derivados"]

enunciado: "\"El río nace en la montaña. Él atraviesa tres provincias. Él desemboca en el mar.\" ¿Qué tipo de progresión temática usa este texto?"

pasos:
  - "El mismo tema (\"el río\"/\"él\") se mantiene a lo largo de las tres oraciones, agregando remas distintos."

explicacion: |
  La progresión de tema constante mantiene el mismo tema y va
  agregando información nueva sobre él.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["progresion_lineal"]

variables:
  n: uno_de([1, 1])

respuesta: "progresión lineal"
tipo: mc
opciones_explicitas: ["tema constante", "progresión lineal", "temas derivados"]

enunciado: "\"El río nace en la montaña. La montaña tiene nieves eternas. Las nieves se derriten en verano.\" ¿Qué tipo de progresión temática usa este texto?"

pasos:
  - "El rema de cada oración (\"la montaña\", \"las nieves\") se convierte en el tema de la siguiente."

explicacion: |
  La progresión lineal encadena el rema de una oración como tema de
  la siguiente.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["temas_derivados"]

variables:
  n: uno_de([1, 1])

respuesta: "temas derivados"
tipo: mc
opciones_explicitas: ["tema constante", "progresión lineal", "temas derivados"]

enunciado: "\"La ciudad tiene un clima variado. Sus calles son angostas. Su gente es muy hospitalaria.\" ¿Qué tipo de progresión temática usa este texto?"

pasos:
  - "\"Clima\", \"calles\" y \"gente\" son distintos aspectos derivados de un hipertema común: \"la ciudad\"."

explicacion: |
  La progresión con temas derivados desarrolla varios aspectos
  distintos de un mismo hipertema general.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["tema_constante", "referencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la progresión de tema constante, el tema que se repite suele expresarse con pronombres u otros mecanismos de referencia en vez de repetir siempre la misma palabra."

pasos:
  - "Ver `../referencia-anafora-y-catafora/`: \"él\" en vez de repetir \"el río\" en cada oración."

explicacion: |
  Verdadero: la progresión temática se apoya directamente en los
  mecanismos de referencia ya vistos.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["progresion_tematica", "claridad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto sin progresión temática ordenada resulta confuso, aunque cada oración esté bien escrita por separado."

pasos:
  - "El lector pierde el hilo de qué se está desarrollando si el texto salta de tema en tema sin patrón."

explicacion: |
  Verdadero: la falta de progresión temática es un problema de
  coherencia global, no de corrección oración por oración.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "conectores_textuales", "referencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Se puede conectar bien las oraciones y usar bien la referencia, y aun así el texto puede saltar de tema en tema sin ningún patrón reconocible."

pasos:
  - "Ver `../conectores-textuales/` y `../referencia-anafora-y-catafora/`: cada herramienta cubre un aspecto distinto de la cohesión, ninguna sola es suficiente."

explicacion: |
  Verdadero: es la razón por la que hace falta un tercer tema
  (progresión temática) además de conectores y referencia.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "practica"]

variables:
  fragmentos: ["El auto se averió en la ruta. El auto tenía diez años. El auto nunca había recibido mantenimiento", "El auto se averió en la ruta. La ruta estaba desierta a esa hora. Esa hora era la peor para pedir ayuda"]
  tipos: ["tema constante", "progresión lineal"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["tema constante", "progresión lineal", "temas derivados"]

enunciado: "\"{fragmentos[idx]}\" es un ejemplo de..."

pasos:
  - "Si el mismo tema se repite en las tres oraciones, es tema constante. Si el rema de una pasa a ser tema de la siguiente, es lineal."

explicacion: |
  Cada fragmento fue construido para ejemplificar un tipo distinto de
  progresión temática.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["temas_derivados", "hipertema"]

variables:
  n: uno_de([1, 1])

respuesta: "hipertema"
tipo: completar

enunciado: "En la progresión con temas derivados, el tema general del que se desprenden los distintos aspectos particulares se llama..."

pasos:
  - "\"La ciudad\" es el hipertema del que \"clima\", \"calles\" y \"gente\" son aspectos derivados."

explicacion: |
  El hipertema es el tema general que engloba a los temas derivados
  particulares de cada oración.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "combinacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto largo puede combinar los tres tipos de progresión temática en distintos tramos, no tiene que usar sólo uno de principio a fin."

pasos:
  - "Un párrafo puede usar tema constante y el siguiente pasar a progresión lineal, según convenga a lo que se está desarrollando."

explicacion: |
  Verdadero: los tres tipos son herramientas complementarias, no
  opciones excluyentes para todo un texto.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "errores"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"El río nace en la montaña. Mi comida favorita es la pizza. El auto de mi tío es rojo.\" es un buen ejemplo de progresión temática bien construida."

pasos:
  - "No hay ninguna relación entre los temas de las tres oraciones: cada una salta a algo completamente distinto sin conexión."

explicacion: |
  Falso: es exactamente el tipo de texto sin progresión temática que
  resulta confuso para el lector, aunque cada oración esté bien
  escrita.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["progresion_lineal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la progresión lineal, el texto avanza como una cadena: lo nuevo de una oración se convierte en el punto de partida de la siguiente."

pasos:
  - "Cada rema pasa a ser tema en la oración siguiente, formando una secuencia encadenada."

explicacion: |
  Verdadero: es la imagen central para entender la progresión
  lineal, distinta del tema constante.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["tema_constante", "temas_derivados", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre tema constante y temas derivados es que en el primero se repite literalmente el mismo tema, y en el segundo cada oración toca un aspecto distinto de un hipertema común."

pasos:
  - "\"El río... él... él...\" (mismo tema) vs. \"la ciudad → su clima, sus calles, su gente\" (aspectos distintos de un hipertema)."

explicacion: |
  Verdadero: la repetición del mismo tema vs. la derivación de
  distintos aspectos es lo que distingue estos dos tipos de
  progresión.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "parrafos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La progresión temática aplica tanto dentro de un párrafo (entre sus oraciones) como entre distintos párrafos de un mismo texto."

pasos:
  - "Ver `../produccion-escrita-compleja/`: cada párrafo desarrolla una idea, y esas ideas también deberían progresar de forma ordenada entre sí."

explicacion: |
  Verdadero: el mismo patrón de progresión se puede analizar en
  distintas escalas del texto.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para describir varios aspectos distintos de un mismo lugar (clima, arquitectura, gente), conviene usar progresión con temas derivados antes que progresión lineal."

pasos:
  - "Los temas derivados son ideales cuando se quiere presentar distintas facetas de un mismo hipertema, no una cadena de causa-efecto."

explicacion: |
  Verdadero: elegir el tipo de progresión adecuado depende de qué
  relación existe realmente entre las ideas a desarrollar.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["rema", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "atraviesa tres provincias"
tipo: completar

enunciado: "En la oración \"El río atraviesa tres provincias\", ¿cuál es el rema (la información nueva sobre el tema)?"

pasos:
  - "El tema es \"el río\" (ya mencionado); el rema es lo nuevo que se dice sobre él."

explicacion: |
  El rema es el aporte informativo nuevo de la oración, distinto del
  tema ya conocido.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "intermedio"
  tags: ["progresion_tematica", "metodo"]

enunciado: "Ordená los pasos para analizar la progresión temática de un párrafo."
tipo: ordenar
opciones_explicitas:
  - "Identificar el tema y el rema de cada oración"
  - "Revisar si el tema se repite igual en varias oraciones seguidas (tema constante)"
  - "Revisar si el rema de una oración pasa a ser el tema de la siguiente (progresión lineal)"
  - "Si ninguna de las dos aplica, revisar si hay un hipertema común del que se derivan los distintos temas (temas derivados)"
respuesta_orden:
  - "Identificar el tema y el rema de cada oración"
  - "Revisar si el tema se repite igual en varias oraciones seguidas (tema constante)"
  - "Revisar si el rema de una oración pasa a ser el tema de la siguiente (progresión lineal)"
  - "Si ninguna de las dos aplica, revisar si hay un hipertema común del que se derivan los distintos temas (temas derivados)"

explicacion: |
  El análisis va de identificar tema/rema en cada oración a
  clasificar qué patrón de progresión conecta a las oraciones entre
  sí.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La progresión temática cierra la subrama de cohesión y coherencia: conectores marcan relaciones lógicas, la referencia evita repetición, y la progresión temática asegura que el texto avance de forma reconocible."

pasos:
  - "Ver `../conectores-textuales/` y `../referencia-anafora-y-catafora/`: los tres temas hermanos cubren aspectos complementarios de la cohesión textual."

explicacion: |
  Verdadero: es la síntesis de los tres temas hermanos de esta
  subrama, cada uno con su función específica.
```

```
metadata:
  materia: "lengua"
  tema: "progresion_tematica"
  nivel: "avanzado"
  tags: ["progresion_tematica", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al revisar un texto propio, conviene chequear si cada oración se conecta temáticamente con la anterior (constante, lineal o derivada), y reordenar si se detectan saltos de tema sin conexión."

pasos:
  - "Ese chequeo específico de progresión temática complementa la revisión de conectores y referencias ya vista en los temas hermanos."

explicacion: |
  Verdadero: es la aplicación práctica central de este tema durante
  la etapa de revisión de un texto propio.
```

## Sección: punto-de-vista (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["punto_de_vista", "narrador", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El narrador responde \"¿quién cuenta la historia?\", mientras que el punto de vista responde \"¿desde dónde/con qué perspectiva se cuenta?\" — son dos preguntas distintas sobre el mismo texto."

pasos:
  - "Dos narradores del mismo tipo pueden tener puntos de vista distintos."

explicacion: |
  Verdadero: narrador y punto de vista analizan aspectos diferentes
  de cómo se cuenta una historia.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_cero"]

variables:
  n: uno_de([1, 1])

respuesta: "focalización cero"
tipo: mc
opciones_explicitas: ["focalización cero", "focalización interna", "focalización externa"]

enunciado: "Cuando el narrador accede a todo sin ninguna restricción, sin filtrar la información a través de un personaje en particular, la focalización es..."

pasos:
  - "Sin filtro = el punto de vista más amplio posible = focalización cero."

explicacion: |
  La focalización cero es característica del narrador omnisciente
  clásico, sin restricciones de conocimiento.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_interna"]

variables:
  n: uno_de([1, 1])

respuesta: "focalización interna"
tipo: mc
opciones_explicitas: ["focalización cero", "focalización interna", "focalización externa"]

enunciado: "Cuando la información pasa por la conciencia de UN solo personaje, y el lector sólo sabe lo que ese personaje sabe o percibe, la focalización es..."

pasos:
  - "Filtro por un solo personaje = focalización interna."

explicacion: |
  La focalización interna limita la información a la perspectiva de
  un personaje específico.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_externa"]

variables:
  n: uno_de([1, 1])

respuesta: "focalización externa"
tipo: mc
opciones_explicitas: ["focalización cero", "focalización interna", "focalización externa"]

enunciado: "Cuando el punto de vista queda fuera de cualquier conciencia y sólo se cuenta lo observable, la focalización es..."

pasos:
  - "Sin acceso a ninguna mente, sólo lo visible/audible = focalización externa."

explicacion: |
  La focalización externa coincide con lo que narra un narrador
  observador.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_cero", "narrador_omnisciente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un narrador omnisciente normalmente tiene focalización cero: no hay ningún filtro que limite lo que puede contar."

pasos:
  - "Ambos conceptos (narrador omnisciente y focalización cero) describen el mismo acceso ilimitado a la información."

explicacion: |
  Verdadero: es la relación típica (aunque no la única posible) entre
  tipo de narrador y focalización.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_externa", "narrador_observador"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un narrador observador coincide con la focalización externa: en ambos casos sólo se cuenta lo observable, sin acceso a pensamientos."

pasos:
  - "Los dos conceptos describen la misma limitación a lo visible/audible."

explicacion: |
  Verdadero: narrador observador y focalización externa se
  corresponden directamente.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion_interna", "3a_persona"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un narrador en 3ª persona (que no dice \"yo\") puede igual tener focalización interna, si el relato se limita a lo que percibe un solo personaje."

pasos:
  - "Persona gramatical y focalización no siempre coinciden de forma obvia: es el caso más avanzado del tema."

explicacion: |
  Verdadero: aunque el narrador no use \"yo\", puede filtrar toda la
  información a través de la conciencia de un único personaje.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion", "practica"]

variables:
  fragmentos: ["Juan sabía que algo andaba mal, aunque no podía explicar por qué. Miró a María, que reía sin sospechar nada", "Juan miró a María, que reía sin que él dijera nada"]
  tipos: ["focalización interna (en Juan)", "focalización externa"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["focalización cero", "focalización interna (en Juan)", "focalización externa"]

enunciado: "\"{fragmentos[idx]}\" tiene..."

pasos:
  - "Si se accede a lo que Juan sabe/siente pero no a lo que piensa María (\"sin sospechar nada\" es evaluación externa), es focalización interna en Juan. Si sólo se describen acciones observables, es externa."

explicacion: |
  El primer fragmento filtra la información a través de la
  conciencia de Juan; el segundo se limita a lo observable.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_cero", "informacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "De las tres focalizaciones, la cero es la que le da al lector la mayor cantidad de información posible, sin restricciones."

pasos:
  - "Sin filtro alguno, el narrador puede contar todo lo que sabe de cualquier personaje o situación."

explicacion: |
  Verdadero: focalización cero significa ausencia total de filtro
  informativo.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion_interna", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar focalización interna en un personaje que no sabe todo lo que está pasando puede generar suspenso, porque el lector descubre la información al mismo tiempo que ese personaje."

pasos:
  - "El lector queda limitado al mismo conocimiento que tiene el personaje focal."

explicacion: |
  Verdadero: es un recurso deliberado en géneros como el misterio o
  el suspenso.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion", "misterio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En una novela de misterio, elegir focalización interna en el detective (en vez de focalización cero) evita que el lector sepa la solución antes de tiempo."

pasos:
  - "Con focalización cero, el narrador podría revelar información que el detective todavía no descubrió, arruinando el misterio."

explicacion: |
  Verdadero: la elección de focalización controla deliberadamente
  cuánta información recibe el lector.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["punto_de_vista", "narrador_omnisciente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dos textos con narrador omnisciente pueden tener puntos de vista distintos si uno se centra más en la perspectiva de un personaje en particular que el otro."

pasos:
  - "El tipo de narrador (persona + conocimiento general) no agota la pregunta de \"desde dónde\" se enfoca la narración."

explicacion: |
  Verdadero: por eso el punto de vista es un análisis complementario,
  no redundante, al de narrador.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion_externa", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La focalización externa genera cierto misterio sobre lo que sienten o piensan los personajes, porque el lector debe inferirlo sólo a partir de sus acciones."

pasos:
  - "Sin acceso a la mente de nadie, el lector interpreta como si viera la escena desde afuera, sin ayuda del narrador."

explicacion: |
  Verdadero: la ausencia de acceso interno es lo que genera esa
  distancia interpretativa.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La focalización clasifica al narrador según si es protagonista, testigo, omnisciente u observador."

pasos:
  - "Esa clasificación (protagonista/testigo/omnisciente/observador) es la del tema \"narrador\"; la focalización usa otras tres categorías (cero/interna/externa)."

explicacion: |
  Falso: son dos sistemas de clasificación relacionados pero
  distintos, cada uno con su propio vocabulario técnico.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion_interna", "cambios"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto con focalización interna puede cambiar de personaje focal entre capítulos, mostrando primero la perspectiva de uno y después la de otro."

pasos:
  - "Mientras el cambio sea deliberado y claro (por ejemplo, un capítulo por personaje), es una técnica narrativa válida."

explicacion: |
  Verdadero: alternar el personaje focal es un recurso narrativo
  común en novelas con varios protagonistas.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["punto_de_vista", "vocabulario"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En el análisis literario, \"punto de vista\" es un término técnico que se estudia principalmente a través del concepto de focalización, no sólo como sinónimo cotidiano de \"opinión\"."

pasos:
  - "El uso cotidiano (\"mi punto de vista sobre algo\") es distinto del uso técnico literario (por dónde pasa la información narrativa)."

explicacion: |
  Verdadero: distinguir el uso técnico evita confundir este análisis
  con dar una opinión sobre el texto.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion", "practica"]

variables:
  fragmentos: ["Todos en el pueblo sabían la verdad, menos Juan, que seguía confiando ciegamente", "Juan sospechaba de todos, aunque no tenía pruebas de nada", "Juan caminó por la calle principal y se detuvo frente a la panadería"]
  tipos: ["focalización cero", "focalización interna (en Juan)", "focalización externa"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["focalización cero", "focalización interna (en Juan)", "focalización externa"]

enunciado: "\"{fragmentos[idx]}\" tiene..."

pasos:
  - "Si sabe más que cualquier personaje (incluido lo que \"todos sabían\"), es cero. Si se limita a lo que Juan piensa/sospecha, es interna. Si sólo describe acciones, es externa."

explicacion: |
  Cada fragmento fue construido para ejemplificar una focalización
  distinta según cuánta y de quién es la información que se cuenta.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["punto_de_vista", "metodo"]

enunciado: "Ordená los pasos para analizar el punto de vista de un fragmento narrativo, después de ya haber identificado el tipo de narrador."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el narrador accede a pensamientos internos de algún personaje"
  - "Si accede, determinar si es de UN personaje (interna) o de TODOS sin restricción (cero)"
  - "Si no accede a ningún pensamiento interno, clasificar como focalización externa"
  - "Confirmar que la focalización identificada es consistente con el tipo de narrador ya reconocido"
respuesta_orden:
  - "Revisar si el narrador accede a pensamientos internos de algún personaje"
  - "Si accede, determinar si es de UN personaje (interna) o de TODOS sin restricción (cero)"
  - "Si no accede a ningún pensamiento interno, clasificar como focalización externa"
  - "Confirmar que la focalización identificada es consistente con el tipo de narrador ya reconocido"

explicacion: |
  El análisis parte del acceso (o no) a lo interno, y termina
  contrastando esa conclusión con el tipo de narrador ya establecido.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["punto_de_vista", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una vez establecido desde qué perspectiva se cuenta una historia (punto de vista), el siguiente paso lógico es analizar en qué orden se cuentan los hechos (estructura narrativa)."

pasos:
  - "Primero se resuelve QUIÉN cuenta y DESDE DÓNDE; después, EN QUÉ ORDEN lo cuenta."

explicacion: |
  Verdadero: por eso punto de vista es prerrequisito directo de
  estructura narrativa, el siguiente tema de la subrama.
```

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si un autor quiere que el lector sienta la misma confusión que un personaje perdido en un lugar desconocido, conviene usar focalización interna en ese personaje antes que focalización cero."

pasos:
  - "La focalización cero le daría al lector información (como el mapa completo del lugar) que el personaje no tiene, rompiendo el efecto de confusión buscado."

explicacion: |
  Verdadero: elegir la focalización adecuada es una herramienta
  directa para controlar la experiencia del lector.
```
