# Examen jefe — Maestro del Informe y Modernismo

> Logro #90. Completaste el examen con dominio del informe técnico, el modernismo y la estructura del texto. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **100 preguntas totales** en 5/5 secciones.

---

## Sección: informe-tecnico (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "basico"
  tags: ["informe_tecnico", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un informe técnico comunica de forma estructurada los resultados de un trabajo, investigación o proceso, para que un lector sin haber participado entienda qué se hizo, qué se encontró y qué se recomienda."

pasos:
  - "Es la definición central de este tipo de documento."

explicacion: |
  Verdadero: es la definición central de informe técnico.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "basico"
  tags: ["secciones", "resumen_ejecutivo"]

variables:
  n: uno_de([1, 1])

respuesta: "resumen ejecutivo"
tipo: mc
opciones_explicitas: ["resumen ejecutivo", "metodología", "conclusiones"]

enunciado: "La sección de un informe técnico que resume en uno o pocos párrafos qué se hizo, qué se encontró y qué se recomienda se llama..."

pasos:
  - "Pensada para alguien que sólo tiene tiempo de leer eso."

explicacion: |
  El resumen ejecutivo condensa lo esencial de todo el informe.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "basico"
  tags: ["secciones", "introduccion"]

variables:
  n: uno_de([1, 1])

respuesta: "introducción/contexto"
tipo: mc
opciones_explicitas: ["introducción/contexto", "resultados", "resumen ejecutivo"]

enunciado: "La sección que explica por qué se hizo el trabajo y qué problema o pregunta lo originó se llama..."

pasos:
  - "Da el contexto necesario antes de entrar en cómo se hizo el trabajo."

explicacion: |
  La introducción/contexto explica el origen y propósito del trabajo.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["secciones", "metodologia"]

variables:
  n: uno_de([1, 1])

respuesta: "metodología"
tipo: mc
opciones_explicitas: ["metodología", "resultados", "resumen ejecutivo"]

enunciado: "La sección que describe cómo se hizo el trabajo (qué proceso, herramientas o datos se usaron) se llama..."

pasos:
  - "Permite que otra persona pueda evaluar la validez del resultado o repetir el proceso."

explicacion: |
  La metodología detalla el proceso seguido para llegar a los
  resultados.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "basico"
  tags: ["secciones", "resultados"]

variables:
  n: uno_de([1, 1])

respuesta: "resultados"
tipo: mc
opciones_explicitas: ["resultados", "metodología", "introducción/contexto"]

enunciado: "La sección que presenta qué se encontró, con datos concretos (tablas, gráficos si corresponde), se llama..."

pasos:
  - "Es la sección central donde se muestran los hallazgos del trabajo."

explicacion: |
  Los resultados presentan los hallazgos concretos del trabajo.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["secciones", "conclusiones"]

variables:
  n: uno_de([1, 1])

respuesta: "conclusiones y recomendaciones"
tipo: mc
opciones_explicitas: ["conclusiones y recomendaciones", "metodología", "resumen ejecutivo"]

enunciado: "La sección que explica qué implican los resultados y qué acción concreta se sugiere a partir de ellos se llama..."

pasos:
  - "Es la sección de cierre que traduce los resultados en implicaciones prácticas."

explicacion: |
  Las conclusiones y recomendaciones cierran el informe con
  implicaciones y sugerencias concretas.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["resumen_ejecutivo", "orden"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Es habitual escribir el resumen ejecutivo al final del proceso de redacción, pero se ubica al principio del documento, porque es lo primero que va a leer la mayoría de los destinatarios."

pasos:
  - "Se escribe al final porque recién ahí se sabe con precisión qué decir de forma resumida."

explicacion: |
  Verdadero: es una particularidad importante sobre el orden de
  escritura vs. el orden de lectura del resumen ejecutivo.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["objetividad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un correo o un CV, el informe técnico prioriza la objetividad: describir lo hecho y encontrado con datos verificables, evitando opiniones sin sustento."

pasos:
  - "Es un principio central de redacción en este tipo de documento."

explicacion: |
  Verdadero: la objetividad es un principio distintivo del informe
  técnico frente a otros géneros de escritura profesional.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["objetividad", "practica"]

variables:
  frases: ["los resultados fueron muy buenos", "los resultados mejoraron un 23% respecto del período anterior"]
  tipos: ["adjetivo vago sin sustento", "dato concreto verificable"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["adjetivo vago sin sustento", "dato concreto verificable"]

enunciado: "\"{frases[idx]}\" es un ejemplo de..."

pasos:
  - "Los datos concretos verificables son preferibles a los adjetivos vagos sin sustento en un informe técnico."

explicacion: |
  El informe técnico privilegia datos concretos y verificables por
  sobre adjetivos vagos.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["estructura", "numeracion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un informe técnico largo se beneficia de títulos de sección numerados y, si corresponde, un índice, para que el lector pueda navegar directo a la parte que le interesa."

pasos:
  - "Permite no tener que leer todo el documento de corrida para encontrar una sección específica."

explicacion: |
  Verdadero: la organización con títulos numerados facilita la
  navegación en documentos extensos.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["metodologia", "validez"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Describir la metodología con detalle permite que otra persona pueda evaluar si el proceso usado fue adecuado, o incluso intentar repetirlo."

pasos:
  - "Es la razón central por la que la metodología es una sección obligatoria en un informe técnico riguroso."

explicacion: |
  Verdadero: la transparencia metodológica es central para la
  credibilidad de un informe técnico.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["informe_tecnico", "produccion_escrita_compleja"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Producción escrita compleja enseña a organizar un texto largo en general; el informe técnico agrega una estructura fija y específica (resumen, contexto, metodología, resultados, conclusiones) propia de este género."

pasos:
  - "Ver `../produccion-escrita-compleja/`: es el prerrequisito general que este tema especializa."

explicacion: |
  Verdadero: es la diferencia entre las herramientas generales de
  escritura larga y la estructura específica de este género.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["secciones", "orden"]

enunciado: "Ordená las secciones típicas de un informe técnico según aparecen en el documento final."
tipo: ordenar
opciones_explicitas:
  - "Resumen ejecutivo"
  - "Introducción/contexto"
  - "Metodología"
  - "Resultados"
  - "Conclusiones y recomendaciones"
respuesta_orden:
  - "Resumen ejecutivo"
  - "Introducción/contexto"
  - "Metodología"
  - "Resultados"
  - "Conclusiones y recomendaciones"

explicacion: |
  El orden sigue la estructura estándar de un informe técnico
  completo, aunque el resumen ejecutivo se escriba último en el
  proceso de redacción.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["informe_tecnico", "audiencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un informe técnico debería poder entenderse sin necesitar explicaciones adicionales del autor, aunque el lector no haya participado del trabajo original."

pasos:
  - "Es un requisito central de claridad y autosuficiencia del documento."

explicacion: |
  Verdadero: la autosuficiencia del documento (no depender de
  explicaciones orales adicionales) es un objetivo central del
  informe técnico.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["resumen_ejecutivo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El resumen ejecutivo debería permitir que alguien que sólo lo lea a él entienda lo esencial de todo el informe, sin necesitar leer las demás secciones."

pasos:
  - "Es el propósito central de esta sección, distinta de una simple introducción."

explicacion: |
  Verdadero: el resumen ejecutivo debe funcionar como una versión
  autosuficiente y condensada del informe completo.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["resultados", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La sección de resultados de un informe técnico debería incluir datos concretos (tablas, gráficos si corresponde), no sólo una descripción general sin cifras."

pasos:
  - "Es coherente con el principio general de objetividad y datos verificables del informe técnico."

explicacion: |
  Verdadero: los resultados con datos concretos son más útiles y
  verificables que una descripción vaga.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["conclusiones", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Se recomienda aumentar la frecuencia de mantenimiento a cada 3 meses, dado el incremento del 15% en fallas detectadas"
tipo: mc
opciones_explicitas: ["Se recomienda aumentar la frecuencia de mantenimiento a cada 3 meses, dado el incremento del 15% en fallas detectadas", "Habría que hacer algo con el mantenimiento en algún momento"]

enunciado: "¿Cuál de estas dos recomendaciones sigue mejor los principios de un informe técnico?"

pasos:
  - "Una recomendación concreta, con acción específica y respaldo en datos, es más útil que una vaga sin sustento."

explicacion: |
  Las recomendaciones deberían ser concretas y estar respaldadas por
  los datos presentados en el informe.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "intermedio"
  tags: ["informe_tecnico", "metodo"]

enunciado: "Ordená los pasos para redactar un informe técnico completo."
tipo: ordenar
opciones_explicitas:
  - "Redactar contexto, metodología y resultados con datos concretos"
  - "Redactar conclusiones y recomendaciones basadas en esos resultados"
  - "Escribir el resumen ejecutivo al final, condensando lo esencial de todo el informe"
  - "Ubicar el resumen ejecutivo al principio del documento, y revisar la numeración de secciones"
respuesta_orden:
  - "Redactar contexto, metodología y resultados con datos concretos"
  - "Redactar conclusiones y recomendaciones basadas en esos resultados"
  - "Escribir el resumen ejecutivo al final, condensando lo esencial de todo el informe"
  - "Ubicar el resumen ejecutivo al principio del documento, y revisar la numeración de secciones"

explicacion: |
  El proceso de escritura no sigue el mismo orden que el de lectura:
  el resumen ejecutivo se redacta último pero se ubica primero.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["informe_tecnico", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El informe técnico es el tercero y último de los géneros de escritura profesional de esta subrama, junto a CV y correo formal."

pasos:
  - "Ver `../cv/` y `../correo-formal/`: los tres nodos hermanos dependen de `../produccion-escrita-compleja/`."

explicacion: |
  Verdadero: cierra la subrama completa de escritura profesional de
  alta demanda práctica.
```

```
metadata:
  materia: "lengua"
  tema: "informe_tecnico"
  nivel: "avanzado"
  tags: ["informe_tecnico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al redactar un informe técnico real, conviene incluir un resumen ejecutivo claro, describir la metodología con suficiente detalle para que sea evaluable, y basar las conclusiones en datos concretos presentados en los resultados."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en un contexto
  laboral o académico real.
```

## Sección: modernismo (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "basico"
  tags: ["modernismo", "contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Modernismo surge a fines del siglo XIX, en las últimas décadas."

pasos:
  - "Es posterior al Realismo, que dominó buena parte de la mitad del siglo."

explicacion: |
  Verdadero: el Modernismo es el movimiento de fin de siglo que sigue
  al Realismo.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "intermedio"
  tags: ["modernismo", "contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Modernismo es el primer gran movimiento literario en español que nace en Hispanoamérica y luego influye de vuelta en España."

pasos:
  - "A diferencia de Romanticismo y Realismo, que llegaron desde Europa, el flujo de influencia se invierte con el Modernismo."

explicacion: |
  Verdadero: es un rasgo histórico distintivo del Modernismo frente a
  los movimientos anteriores.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "basico"
  tags: ["modernismo", "caracteristicas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una característica central del Modernismo es el culto a la belleza formal: cuidado extremo del lenguaje, la musicalidad y el ritmo del verso, sin necesidad de una función social."

pasos:
  - "Es la idea de \"el arte por el arte\", sin obligación de denuncia o utilidad social."

explicacion: |
  Verdadero: el esteticismo puro es la marca más distintiva del
  Modernismo.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "intermedio"
  tags: ["modernismo", "cosmopolitismo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Modernismo muestra interés por culturas lejanas y exóticas (Francia, Oriente, la mitología grecolatina) como fuente de nuevas imágenes."

pasos:
  - "El cosmopolitismo busca escapar de lo local cotidiano hacia escenarios refinados y lejanos."

explicacion: |
  Verdadero: el cosmopolitismo es una característica típica del
  Modernismo.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "intermedio"
  tags: ["modernismo", "lenguaje"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Modernismo incorpora vocabulario nuevo, experimenta con la métrica y busca una sonoridad refinada en el verso."

pasos:
  - "Coherente con el cuidado extremo del lenguaje que persigue el movimiento."

explicacion: |
  Verdadero: la renovación formal del lenguaje poético es central en
  el Modernismo.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "intermedio"
  tags: ["modernismo", "simbolos"]

variables:
  n: uno_de([1, 1])

respuesta: "cisne"
tipo: completar

enunciado: "El animal que se convirtió en símbolo recurrente del Modernismo, asociado a elegancia y exotismo, es el..."

pasos:
  - "Ver `../recursos-literarios/`: el cisne es un símbolo específico ligado a este movimiento."

explicacion: |
  El cisne es uno de los símbolos más característicos de la estética
  modernista.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "intermedio"
  tags: ["modernismo", "estilo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Modernismo prefiere lo aristocrático y lo artificioso frente a lo popular, buscando elegancia y refinamiento."

pasos:
  - "Es coherente con el interés por lo exótico y lejano frente a lo cotidiano popular."

explicacion: |
  Verdadero: la preferencia por lo elegante y refinado es una marca
  estilística del Modernismo.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "avanzado"
  tags: ["modernismo", "realismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Mientras el Realismo buscaba mostrar la realidad social tal cual es, el Modernismo busca embellecer la realidad a través del lenguaje, volviendo a poner el foco en la forma."

pasos:
  - "Ver `../realismo/`: es la relación de reacción/retoma entre ambos movimientos."

explicacion: |
  Verdadero: es la diferencia central entre los dos movimientos
  consecutivos.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "basico"
  tags: ["modernismo", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "Rubén Darío"
tipo: completar

enunciado: "El poeta nicaragüense considerado la figura fundacional e ineludible del Modernismo se llama..."

pasos:
  - "Su obra \"Azul...\" (1888) suele señalarse como el punto de inicio del movimiento."

explicacion: |
  Rubén Darío es la figura central del Modernismo en español.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "avanzado"
  tags: ["modernismo", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La obra \"Azul...\" de Rubén Darío, publicada en 1888, suele señalarse como el punto de inicio del Modernismo."

pasos:
  - "Es la referencia histórica más citada para marcar el nacimiento formal del movimiento."

explicacion: |
  Verdadero: \"Azul...\" es la obra fundacional más asociada al
  Modernismo.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "avanzado"
  tags: ["modernismo", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "José Martí, de Cuba, es considerado un precursor del Modernismo."

pasos:
  - "Su obra anticipa varias de las características que Rubén Darío consolidaría como movimiento."

explicacion: |
  Verdadero: Martí es una figura de transición hacia el Modernismo
  consolidado.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "avanzado"
  tags: ["modernismo", "autores", "argentina"]

variables:
  n: uno_de([1, 1])

respuesta: "Lugones"
tipo: completar

enunciado: "El autor argentino representativo del Modernismo se apellida..."

pasos:
  - "Leopoldo Lugones es una de las figuras del Modernismo en Argentina."

explicacion: |
  Lugones es un autor representativo del Modernismo argentino.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "avanzado"
  tags: ["modernismo", "realismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El Modernismo, igual que el Realismo, prioriza la crítica social como objetivo central de la literatura."

pasos:
  - "El Modernismo pone el foco en la belleza formal (\"arte por el arte\"), no necesariamente en la denuncia social."

explicacion: |
  Falso: a diferencia del Realismo, el Modernismo no exige una
  función social o moral en la obra.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "avanzado"
  tags: ["modernismo", "contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Al igual que con el Romanticismo y el Realismo, el Modernismo llegó a Hispanoamérica desde España, no al revés."

pasos:
  - "El Modernismo es el primer movimiento que nace en Hispanoamérica y luego influye en España, invirtiendo el flujo habitual."

explicacion: |
  Falso: el Modernismo invierte el sentido de la influencia que
  tenían los movimientos anteriores.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "intermedio"
  tags: ["modernismo", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un poema con cisnes, princesas, jardines exóticos y un cuidado extremo por la sonoridad de los versos, sin ninguna intención de denuncia social, es un ejemplo típico de literatura modernista."

pasos:
  - "Combina símbolos típicos, cosmopolitismo y culto a la forma: marcas centrales del Modernismo."

explicacion: |
  Verdadero: reúne varias de las características centrales del
  Modernismo estudiadas en este tema.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "avanzado"
  tags: ["modernismo", "genero_lirico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El Modernismo experimentó con la métrica del verso (ver `../genero-lirico/`), buscando nuevas combinaciones rítmicas más allá de las formas tradicionales."

pasos:
  - "Parte de la renovación del lenguaje poético incluye probar nuevas medidas y ritmos de verso."

explicacion: |
  Verdadero: la experimentación métrica es parte de la búsqueda
  estética del Modernismo.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "avanzado"
  tags: ["modernismo", "autores"]

variables:
  autores: ["Rubén Darío", "José Martí", "Leopoldo Lugones"]
  origenes: ["Nicaragua", "Cuba", "Argentina"]
  idx: uno_de([0, 1, 2])

respuesta: origenes[idx]
tipo: mc
opciones_explicitas: ["Nicaragua", "Cuba", "Argentina", "España"]

enunciado: "El autor modernista {autores[idx]} es de..."

pasos:
  - "Cada autor representativo del Modernismo tiene un origen nacional hispanoamericano distinto."

explicacion: |
  El Modernismo tuvo referentes en distintos países de
  Hispanoamérica, coherente con su origen regional.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "intermedio"
  tags: ["modernismo", "metodo"]

enunciado: "Ordená los pasos para reconocer si un texto pertenece al Modernismo."
tipo: ordenar
opciones_explicitas:
  - "Revisar si predomina el cuidado formal y la musicalidad sobre otros objetivos"
  - "Buscar referencias a culturas lejanas o exóticas (cosmopolitismo)"
  - "Identificar símbolos típicos (cisnes, princesas, mitología)"
  - "Confirmar que no hay una intención central de crítica social"
respuesta_orden:
  - "Revisar si predomina el cuidado formal y la musicalidad sobre otros objetivos"
  - "Buscar referencias a culturas lejanas o exóticas (cosmopolitismo)"
  - "Identificar símbolos típicos (cisnes, princesas, mitología)"
  - "Confirmar que no hay una intención central de crítica social"

explicacion: |
  El análisis va de la característica más general (esteticismo) a
  las marcas más específicas (cosmopolitismo, símbolos).
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "avanzado"
  tags: ["modernismo", "generacion_98", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Entender el Modernismo es necesario para distinguirlo de la Generación del 98, un movimiento casi contemporáneo con el que suele confundirse."

pasos:
  - "Ver `../generacion-del-98/`: ambos son de fin de siglo XIX/principios XX, pero responden a preocupaciones distintas."

explicacion: |
  Verdadero: por eso el Modernismo es prerrequisito directo del
  siguiente tema, para poder marcar la diferencia explícita.
```

```
metadata:
  materia: "lengua"
  tema: "modernismo"
  nivel: "avanzado"
  tags: ["modernismo", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el objetivo de un autor es crear un texto centrado únicamente en la belleza sonora y visual del lenguaje, sin ninguna intención de denuncia social, el estilo modernista es más afín que el realista."

pasos:
  - "El Modernismo prioriza la forma y la estética; el Realismo prioriza la objetividad y la crítica social."

explicacion: |
  Verdadero: la elección de movimiento/estilo depende del propósito
  estético o social que el autor busca lograr.
```

## Sección: narrador (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "basico"
  tags: ["narrador", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El narrador de una historia es siempre exactamente la misma persona que el autor real del texto."

pasos:
  - "El narrador es una construcción del texto, elegida por el autor según el efecto que quiere lograr."

explicacion: |
  Falso: igual que el hablante lírico, el narrador es una voz
  construida, no necesariamente el autor real.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "basico"
  tags: ["narrador_protagonista"]

variables:
  n: uno_de([1, 1])

respuesta: "narrador protagonista"
tipo: mc
opciones_explicitas: ["narrador protagonista", "narrador testigo", "narrador omnisciente", "narrador observador"]

enunciado: "\"Yo caminé hasta la plaza y me senté a esperar a mi amigo.\" ¿Qué tipo de narrador es?"

pasos:
  - "Cuenta en 1ª persona su propia historia, siendo el personaje central: es protagonista."

explicacion: |
  El narrador protagonista narra su propia historia en 1ª persona.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "basico"
  tags: ["narrador_testigo"]

variables:
  n: uno_de([1, 1])

respuesta: "narrador testigo"
tipo: mc
opciones_explicitas: ["narrador protagonista", "narrador testigo", "narrador omnisciente", "narrador observador"]

enunciado: "\"Yo vi cómo Juan caminaba hasta la plaza y se sentaba a esperar.\" ¿Qué tipo de narrador es?"

pasos:
  - "Cuenta en 1ª persona, pero lo que le pasa a OTRO personaje (Juan), no a sí mismo: es testigo."

explicacion: |
  El narrador testigo está presente en la historia (1ª persona) pero
  no es el protagonista de lo que cuenta.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_omnisciente"]

variables:
  n: uno_de([1, 1])

respuesta: "narrador omnisciente"
tipo: mc
opciones_explicitas: ["narrador protagonista", "narrador testigo", "narrador omnisciente", "narrador observador"]

enunciado: "\"Juan caminó hasta la plaza, pensando en lo que le diría a María.\" ¿Qué tipo de narrador es?"

pasos:
  - "Narra en 3ª persona (no es personaje) y accede a los PENSAMIENTOS de Juan: es omnisciente."

explicacion: |
  El narrador omnisciente sabe todo, incluso lo que piensan y sienten
  los personajes, desde afuera de la historia.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_observador"]

variables:
  n: uno_de([1, 1])

respuesta: "narrador observador"
tipo: mc
opciones_explicitas: ["narrador protagonista", "narrador testigo", "narrador omnisciente", "narrador observador"]

enunciado: "\"Juan caminó hasta la plaza y se sentó en un banco, mirando el reloj.\" (sin acceder a lo que piensa) ¿Qué tipo de narrador es?"

pasos:
  - "Narra en 3ª persona, sin ser personaje, y sólo cuenta lo observable (acciones), sin pensamientos internos: es observador."

explicacion: |
  El narrador observador cuenta desde afuera, limitado a lo que se ve
  y se oye, sin acceso a la mente de los personajes.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "basico"
  tags: ["persona_gramatical"]

variables:
  tipos: ["narrador protagonista", "narrador testigo"]
  idx: uno_de([0, 1])

respuesta: "primera"
tipo: mc
opciones_explicitas: ["primera", "segunda", "tercera"]

enunciado: "El {tipos[idx]} narra en persona gramatical..."

pasos:
  - "Ambos usan \"yo\" para narrar, sea contando su propia historia o la de otro."

explicacion: |
  Protagonista y testigo son los dos tipos de narrador en 1ª persona.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "basico"
  tags: ["persona_gramatical"]

variables:
  tipos: ["narrador omnisciente", "narrador observador"]
  idx: uno_de([0, 1])

respuesta: "tercera"
tipo: mc
opciones_explicitas: ["primera", "segunda", "tercera"]

enunciado: "El {tipos[idx]} narra en persona gramatical..."

pasos:
  - "Ambos cuentan desde afuera de la historia, sin ser personajes ni usar \"yo\"."

explicacion: |
  Omnisciente y observador son los dos tipos de narrador en 3ª
  persona.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_omnisciente", "narrador_observador", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre narrador omnisciente y observador es que el omnisciente accede a los pensamientos y sentimientos internos de los personajes, y el observador sólo cuenta lo que se puede ver u oír."

pasos:
  - "Ambos narran en 3ª persona, pero difieren en cuánto saben del interior de los personajes."

explicacion: |
  Verdadero: es exactamente el criterio que distingue a los dos
  narradores en 3ª persona.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_protagonista", "narrador_testigo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre narrador protagonista y testigo es que el protagonista cuenta su propia historia como personaje central, y el testigo cuenta lo que le pasa a otros."

pasos:
  - "Ambos narran en 1ª persona, pero difieren en si la historia les pasa a ellos o a otro personaje."

explicacion: |
  Verdadero: es el criterio que distingue a los dos narradores en 1ª
  persona.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador_protagonista", "limitacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un narrador protagonista sólo puede contar lo que él mismo vive, sabe o piensa — no puede acceder a los pensamientos de otros personajes."

pasos:
  - "A diferencia del omnisciente, el protagonista está limitado a su propia experiencia y conocimiento."

explicacion: |
  Verdadero: esa limitación es una de las razones por las que el
  autor elige un tipo de narrador u otro, según el efecto buscado.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_omnisciente", "conocimiento"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El narrador omnisciente puede saber cosas que ningún personaje individual conoce por completo, como los pensamientos secretos de varios personajes a la vez."

pasos:
  - "Su conocimiento no está limitado a la perspectiva de un solo personaje."

explicacion: |
  Verdadero: la amplitud de conocimiento es la característica
  distintiva del narrador omnisciente.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador", "clasificacion"]

variables:
  fragmentos: ["María sentía que el corazón se le aceleraba, aunque nadie más en la sala lo notaba", "María entró a la sala y se sentó en la primera fila, en silencio"]
  tipos: ["narrador omnisciente", "narrador observador"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["narrador omnisciente", "narrador observador"]

enunciado: "\"{fragmentos[idx]}\" (narrado en 3ª persona) corresponde a un..."

pasos:
  - "Si accede a lo que siente María por dentro, es omnisciente. Si sólo describe acciones visibles, es observador."

explicacion: |
  El acceso (o no) al interior del personaje es el criterio que
  distingue estos dos tipos de narrador en 3ª persona.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador_protagonista", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar un narrador protagonista genera un efecto de inmediatez y subjetividad, porque el lector accede directamente a la experiencia del personaje central."

pasos:
  - "El costo de esa cercanía es la limitación: sólo se sabe lo que el protagonista sabe."

explicacion: |
  Verdadero: cada tipo de narrador tiene un efecto propio en cómo el
  lector experimenta la historia.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador_observador", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar un narrador observador genera un efecto de distancia y misterio, porque el lector debe interpretar a los personajes sin ayuda de sus pensamientos internos."

pasos:
  - "Al no acceder al interior de los personajes, el lector se apoya sólo en gestos y acciones, como si viera la escena."

explicacion: |
  Verdadero: la falta de acceso interno genera ambigüedad
  interpretativa, un efecto buscado deliberadamente en muchos textos.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador", "consistencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Generalmente, un cuento o novela mantiene el mismo tipo de narrador (persona y nivel de conocimiento) a lo largo de todo el texto, salvo que el autor cambie deliberadamente de narrador entre capítulos."

pasos:
  - "Cambiar de narrador sin aviso puede confundir al lector; los cambios deliberados suelen marcarse claramente (por capítulo, por ejemplo)."

explicacion: |
  Verdadero: la consistencia del narrador es la norma, salvo decisión
  explícita del autor de alternar.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador", "genero_dramatico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "En una obra de teatro (género dramático), los personajes que hablan en los diálogos cumplen la misma función que un narrador en un cuento."

pasos:
  - "El género dramático no tiene narrador; los personajes hablan directamente entre sí (ver `../genero-dramatico/`)."

explicacion: |
  Falso: el género dramático justamente no tiene narrador — la
  historia se conoce sólo a través del diálogo entre personajes.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_testigo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El narrador testigo suele ser un personaje secundario de la historia, que observa y cuenta lo que le pasa al protagonista."

pasos:
  - "A diferencia del narrador protagonista, el testigo no es el centro de la trama, sólo participa como observador cercano."

explicacion: |
  Verdadero: el testigo típico es un personaje cercano al
  protagonista, pero no el centro de los hechos.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador", "metodo"]

enunciado: "Ordená los pasos para identificar el tipo de narrador de un texto."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el narrador dice \"yo\" y participa como personaje (1ª persona) o cuenta desde afuera (3ª persona)"
  - "Si es 1ª persona, determinar si la historia le pasa a él (protagonista) o a otro (testigo)"
  - "Si es 3ª persona, determinar si accede a pensamientos internos (omnisciente) o sólo a lo observable (observador)"
  - "Confirmar que esa elección se mantiene a lo largo del texto"
respuesta_orden:
  - "Revisar si el narrador dice \"yo\" y participa como personaje (1ª persona) o cuenta desde afuera (3ª persona)"
  - "Si es 1ª persona, determinar si la historia le pasa a él (protagonista) o a otro (testigo)"
  - "Si es 3ª persona, determinar si accede a pensamientos internos (omnisciente) o sólo a lo observable (observador)"
  - "Confirmar que esa elección se mantiene a lo largo del texto"

explicacion: |
  El método sigue el mismo árbol de decisión de la teoría: primero
  persona gramatical, después el criterio específico de cada rama.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador", "punto_de_vista", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tipo de narrador elegido determina desde dónde y con cuánta información se cuenta la historia — eso es justamente lo que se profundiza en el tema \"punto de vista\"."

pasos:
  - "Quién narra (protagonista/testigo/omnisciente/observador) fija los límites de lo que se puede contar."

explicacion: |
  Verdadero: por eso narrador es prerrequisito directo de punto de
  vista, el siguiente tema de esta subrama.
```

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si un autor quiere que el lector descubra la verdad al mismo tiempo que el protagonista, sin saber más que él, conviene usar un narrador protagonista antes que uno omnisciente."

pasos:
  - "El narrador omnisciente le daría al lector información que el protagonista todavía no tiene, rompiendo esa sorpresa compartida."

explicacion: |
  Verdadero: elegir el tipo de narrador es una decisión que controla
  cuánta información recibe el lector y cuándo.
```

## Sección: negociacion (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "basico"
  tags: ["negociacion", "objetivo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El objetivo de la negociación es llegar a un acuerdo que ambas partes puedan aceptar, no que una parte \"gane\" y la otra \"pierda\"."

pasos:
  - "Ver `../debate-refutar-en-vivo/`: es un cambio de objetivo respecto de ese tema anterior."

explicacion: |
  Verdadero: es la diferencia central entre negociación y debate.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["posicion"]

variables:
  n: uno_de([1, 1])

respuesta: "posición"
tipo: mc
opciones_explicitas: ["posición", "interés"]

enunciado: "\"Quiero que el precio sea 100\" (lo que cada parte dice que quiere) es un ejemplo de..."

pasos:
  - "Es la afirmación explícita que se declara al inicio de una negociación."

explicacion: |
  La posición es lo que cada parte dice explícitamente que quiere.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["interes"]

variables:
  n: uno_de([1, 1])

respuesta: "interés"
tipo: mc
opciones_explicitas: ["posición", "interés"]

enunciado: "\"Necesito cubrir mis costos y tener algo de ganancia\" (la razón real detrás de pedir 100) es un ejemplo de..."

pasos:
  - "Es la motivación de fondo detrás de la posición declarada."

explicacion: |
  El interés es la razón real que motiva la posición declarada.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["posicion", "interes", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Negociar bien significa indagar los intereses reales detrás de las posiciones declaradas, no sólo pelear por las posiciones en sí."

pasos:
  - "Dos posiciones pueden parecer irreconciliables mientras que los intereses de fondo podrían resolverse de otra forma."

explicacion: |
  Verdadero: es la distinción central que organiza todo el tema de
  negociación.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["ejemplo_de_la_naranja"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En el ejemplo clásico de la naranja, si dos personas quieren la misma naranja entera pero una necesita sólo el jugo y la otra sólo la cáscara, ambas pueden obtener el 100% de lo que realmente necesitaban al indagar sus intereses."

pasos:
  - "Negociar sólo por posición (partir la naranja a la mitad) da un resultado peor que indagar los intereses de fondo."

explicacion: |
  Verdadero: es el ejemplo clásico que ilustra por qué distinguir
  posición de interés puede mejorar mucho el resultado de un acuerdo.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["estrategias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una estrategia central de negociación es entender el interés real de la otra parte antes de ofrecer una solución, en vez de asumir que ya se sabe qué quiere."

pasos:
  - "Es una de las estrategias centrales descritas en la teoría."

explicacion: |
  Verdadero: escuchar antes de proponer evita ofrecer soluciones que
  no responden al interés real del otro.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["estrategias", "beneficio_mutuo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra estrategia central es explorar formas de \"agrandar la torta\" (agregar variables al trato) antes de simplemente dividir un recurso fijo entre las partes."

pasos:
  - "Es otra de las estrategias centrales descritas en la teoría."

explicacion: |
  Verdadero: buscar beneficio mutuo suele dar mejores resultados que
  dividir un recurso fijo sin más.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["estrategias", "limite_propio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Saber hasta dónde se está dispuesto a ceder, antes de sentarse a negociar, evita ceder de más bajo presión del momento."

pasos:
  - "Es otra de las estrategias centrales descritas en la teoría."

explicacion: |
  Verdadero: definir el propio límite con anticipación protege de
  decisiones apresuradas durante la negociación.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["estrategias", "relacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En negociaciones donde las partes van a seguir interactuando (compañeros de trabajo, familia), un acuerdo logrado a costa de dañar la relación puede salir caro a largo plazo."

pasos:
  - "Es otra de las estrategias centrales descritas en la teoría, sobre todo relevante en relaciones continuas."

explicacion: |
  Verdadero: la calidad de la relación es un factor a considerar,
  además del resultado puntual del acuerdo.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["limites_de_la_negociacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Hay principios o decisiones que no admiten un \"punto medio\" razonable, como la seguridad de alguien: no toda diferencia se resuelve negociando."

pasos:
  - "Reconocer esta diferencia es parte de saber cuándo aplicar la herramienta de negociación y cuándo no corresponde."

explicacion: |
  Verdadero: es un matiz importante sobre los límites de aplicación
  de esta herramienta.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["negociacion", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Negociar bien significa siempre ceder en la mayor cantidad posible de puntos para llegar rápido a un acuerdo, sin importar el propio límite."

pasos:
  - "Definir el límite propio de antemano es justamente la estrategia para evitar ceder de más sin criterio."

explicacion: |
  Falso: negociar bien implica encontrar un acuerdo sostenible para
  ambas partes, no ceder sin límite.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["posicion", "interes", "practica"]

variables:
  afirmaciones: ["Quiero trabajar desde casa todos los días", "Necesito tener flexibilidad para cuidar a mi familia"]
  tipos: ["posición", "interés"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["posición", "interés"]

enunciado: "\"{afirmaciones[idx]}\" es un ejemplo de..."

pasos:
  - "La posición es lo que se pide explícitamente; el interés es la razón de fondo detrás de ese pedido."

explicacion: |
  Distinguir posición de interés en un caso concreto es la aplicación
  central de este tema.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["posicion", "interes", "beneficio_mutuo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si alguien pide \"trabajar desde casa todos los días\" por el interés real de \"tener flexibilidad para cuidar a la familia\", podría satisfacerse ese interés con opciones distintas a la posición original, como horarios flexibles algunos días."

pasos:
  - "Indagar el interés real puede abrir soluciones que la posición original no contemplaba."

explicacion: |
  Verdadero: es la aplicación práctica de por qué indagar intereses
  amplía las opciones de acuerdo posibles.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["negociacion", "debate_refutar_en_vivo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La negociación reutiliza las habilidades de debatir en vivo, pero con un objetivo distinto: encontrar un acuerdo compartido en vez de refutar al rival."

pasos:
  - "Ver `../debate-refutar-en-vivo/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["escucha_activa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escuchar activamente, ya visto como habilidad de debate, también es central en la negociación: sin escuchar bien, es difícil identificar el interés real de la otra parte."

pasos:
  - "Es una habilidad compartida entre ambos temas de la subrama."

explicacion: |
  Verdadero: la escucha activa se reutiliza en distintos contextos de
  comunicación en vivo.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["limite_propio", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Definir el límite propio antes de negociar es una estrategia para uno mismo, pero no implica necesariamente revelárselo a la otra parte durante el proceso — es información estratégica, no un tema de honestidad obligatoria."

pasos:
  - "Conocer el propio límite ayuda a no ceder de más, independientemente de si se comparte o no con la contraparte."

explicacion: |
  Verdadero: es un matiz sobre el uso estratégico del límite propio
  durante una negociación.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["beneficio_mutuo", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de negociar cómo dividir un presupuesto fijo entre dos áreas de un proyecto, conviene explorar si se puede conseguir presupuesto adicional (agrandar la torta) en vez de pelear directamente por la división del monto original."

pasos:
  - "Es la aplicación práctica de la estrategia de buscar opciones de beneficio mutuo antes de dividir un recurso fijo."

explicacion: |
  Verdadero: es un ejemplo concreto de la estrategia de \"agrandar la
  torta\" aplicada a un caso de recursos limitados.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["negociacion", "metodo"]

enunciado: "Ordená los pasos de un proceso de negociación bien llevado."
tipo: ordenar
opciones_explicitas:
  - "Definir el propio límite antes de empezar a negociar"
  - "Escuchar la posición de la otra parte e indagar su interés real"
  - "Buscar opciones de beneficio mutuo antes de dividir un recurso fijo"
  - "Llegar a un acuerdo que ambas partes puedan sostener, cuidando también la relación"
respuesta_orden:
  - "Definir el propio límite antes de empezar a negociar"
  - "Escuchar la posición de la otra parte e indagar su interés real"
  - "Buscar opciones de beneficio mutuo antes de dividir un recurso fijo"
  - "Llegar a un acuerdo que ambas partes puedan sostener, cuidando también la relación"

explicacion: |
  El proceso combina las estrategias centrales descritas en la teoría
  en un orden lógico de preparación, indagación y cierre del acuerdo.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["negociacion", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La negociación completa la subrama de comunicación oral orientada a resolver diferencias, aplicando el debate ya dominado con un objetivo de acuerdo compartido en vez de victoria."

pasos:
  - "Ver `../debate-refutar-en-vivo/`: es el cierre de esa línea de aplicación práctica."

explicacion: |
  Verdadero: es la síntesis de la relación entre debate y
  negociación en esta subrama.
```

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["negociacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ante un conflicto con un compañero de trabajo o estudio, conviene indagar el interés real detrás de su posición y buscar opciones de beneficio mutuo, en vez de pelear directamente por las posiciones declaradas."

pasos:
  - "Es la aplicación práctica directa de las estrategias de negociación en un conflicto cotidiano real."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en situaciones de
  la vida diaria.
```

## Sección: nucleos-y-modificadores (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["nucleo", "vocabulario"]

enunciado: "¿Qué es el núcleo de un sintagma?"
tipo: mc
opciones_explicitas:
  - "La palabra principal, que concentra el significado central y determina la categoría gramatical de todo el grupo"
  - "La primera palabra del sintagma, sin importar su función"
  - "Cualquier palabra que se pueda quitar sin cambiar el sentido"
respuesta: "La palabra principal, que concentra el significado central y determina la categoría gramatical de todo el grupo"

explicacion: |
  En un sintagma nominal, el núcleo siempre es un sustantivo o
  pronombre.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["modificador", "vocabulario"]

enunciado: "¿Qué es un modificador?"
tipo: mc
opciones_explicitas:
  - "Una palabra o grupo de palabras que acompaña al núcleo, agregando información sin ser imprescindible para la estructura básica"
  - "Otro nombre para el núcleo de un sintagma"
  - "Una palabra que siempre va al final de la oración"
respuesta: "Una palabra o grupo de palabras que acompaña al núcleo, agregando información sin ser imprescindible para la estructura básica"

explicacion: |
  Se puede quitar y la oración sigue siendo gramaticalmente correcta,
  aunque pierda información.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["nucleo", "modificador_directo", "problema"]

enunciado: "Etiquetá el núcleo del sujeto y su modificador directo en esta oración."
tipo: analisis_sintactico
texto_analizar: "Los estudiantes de la clase aprobaron el examen"
etiquetas_pedidas:
  - { palabra: "estudiantes", etiqueta: "núcleo" }
  - { palabra: "Los", etiqueta: "modificador directo" }

explicacion: |
  'Estudiantes' es el núcleo; 'Los' lo acompaña directamente, sin
  preposición.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador_directo", "vocabulario"]

enunciado: "¿Qué es un modificador directo?"
tipo: mc
opciones_explicitas:
  - "Un determinante o adjetivo que se agrega al núcleo sin preposición ('el perro grande')"
  - "Un sintagma con preposición que complementa al núcleo"
  - "Un sustantivo que explica a otro, separado por comas"
respuesta: "Un determinante o adjetivo que se agrega al núcleo sin preposición ('el perro grande')"

explicacion: |
  'El' y 'grande' son modificadores directos de 'perro'.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador_indirecto", "vocabulario"]

enunciado: "¿Qué es un modificador indirecto (complemento del nombre)?"
tipo: mc
opciones_explicitas:
  - "Un sintagma CON preposición que complementa al núcleo ('la casa de María')"
  - "Un determinante que acompaña al núcleo sin preposición"
  - "Otro nombre para el núcleo del predicado"
respuesta: "Un sintagma CON preposición que complementa al núcleo ('la casa de María')"

explicacion: |
  La preposición ('de', en este caso) es lo que distingue al
  modificador indirecto del directo.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["modificador_indirecto", "problema"]

enunciado: "Marcá el modificador indirecto (complemento del nombre) del núcleo 'estudiantes' en esta oración."
tipo: analisis_spans
texto_analizar: "Los estudiantes de la clase aprobaron el examen"
spans_pedidos:
  - { desde: 2, hasta: 4, etiqueta: "modificador indirecto" }

explicacion: |
  'De la clase' es un sintagma preposicional que complementa a
  'estudiantes' — a diferencia de 'Los', que lo modifica sin
  preposición.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["aposicion", "vocabulario"]

enunciado: "¿Qué es una aposición?"
tipo: mc
opciones_explicitas:
  - "Un sustantivo (o sintagma nominal) que se agrega a otro para explicarlo, sin preposición, generalmente separado por comas"
  - "Un adjetivo que concuerda en género y número con el núcleo"
  - "Otro nombre para el modificador indirecto"
respuesta: "Un sustantivo (o sintagma nominal) que se agrega a otro para explicarlo, sin preposición, generalmente separado por comas"

explicacion: |
  Como 'el profesor' en 'Javier, el profesor, llegó tarde'.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["aposicion", "problema"]

tipo: completar
enunciado: "En la oración 'Javier, el profesor, llegó tarde', ¿qué palabras forman la aposición de 'Javier'?"
respuestas_validas:
  - "el profesor"

explicacion: |
  Explica quién es Javier, sin usar ninguna preposición, separado por
  comas.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador"]

respuesta: verdadero
tipo: vf

enunciado: "Se puede quitar un modificador de un sintagma y la oración sigue siendo gramaticalmente correcta, aunque pierda parte de la información."

explicacion: |
  'Los estudiantes aprobaron el examen' (sin 'de la clase') sigue
  siendo una oración válida, con menos precisión.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "Si se quita el núcleo de un sintagma, la oración deja de tener sentido o cambia por completo su estructura — a diferencia de quitar un modificador."

explicacion: |
  Es la prueba práctica para distinguir núcleo de modificador: lo
  imprescindible vs. lo prescindible.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["modificador_directo", "problema"]

enunciado: "Marcá los modificadores directos del núcleo 'perro' en esta oración."
tipo: identificar_palabras
texto_analizar: "El perro grande corre"
respuestas_validas:
  - "El"
  - "grande"

explicacion: |
  Ambos acompañan a 'perro' sin preposición: uno antes (determinante),
  otro después (adjetivo).
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["nucleo", "problema"]

enunciado: "¿Cuál es el núcleo del sujeto en 'El perro grande corre'?"
tipo: mc
opciones_explicitas:
  - "perro"
  - "El"
  - "grande"
respuesta: "perro"

explicacion: |
  Es el sustantivo que concentra el significado central del sujeto.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Qué relación tiene 'núcleo y modificadores' con lo ya visto en `../sujeto-y-predicado/`?"
tipo: mc
opciones_explicitas:
  - "Le da nombre formal a lo que ya se distinguía informalmente: el núcleo del sujeto (ya identificado) y todo lo que lo acompaña (ahora llamado 'modificador')"
  - "No tiene ninguna relación real con sujeto y predicado"
  - "Reemplaza por completo la necesidad de identificar sujeto y predicado"
respuesta: "Le da nombre formal a lo que ya se distinguía informalmente: el núcleo del sujeto (ya identificado) y todo lo que lo acompaña (ahora llamado 'modificador')"

explicacion: |
  Es la continuación directa de ese módulo.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["predicado"]

respuesta: verdadero
tipo: vf

enunciado: "El mismo patrón de núcleo y modificadores se repite en el predicado: su núcleo es el verbo, y sus complementos (objeto directo, objeto indirecto, circunstanciales) funcionan como modificadores de ese núcleo verbal."

explicacion: |
  Profundizar en esos tipos específicos de complemento verbal es el
  tema de un módulo posterior ('Objetos y circunstanciales').
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["modificador_directo", "modificador_indirecto", "problema"]

enunciado: "En 'la mesa de madera', ¿qué tipo de modificador es 'de madera' respecto del núcleo 'mesa'?"
tipo: mc
opciones_explicitas:
  - "Modificador indirecto (complemento del nombre): usa la preposición 'de'"
  - "Modificador directo: no usa ninguna preposición"
  - "Aposición: es un sustantivo que explica a 'mesa'"
respuesta: "Modificador indirecto (complemento del nombre): usa la preposición 'de'"

explicacion: |
  La presencia de la preposición 'de' es la marca distintiva del
  modificador indirecto.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["aposicion", "modificador_indirecto"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del modificador indirecto, la aposición no usa ninguna preposición para unirse al núcleo — por eso 'el profesor' en 'Javier, el profesor,...' es aposición y no modificador indirecto."

explicacion: |
  Si dijera 'Javier, DE profesión profesor,...' ahí sí habría una
  preposición de por medio.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Cómo ayuda distinguir núcleo de modificadores a resumir o parafrasear una oración larga?"
tipo: mc
opciones_explicitas:
  - "Permite quedarse con el esqueleto básico (los núcleos) y decidir qué modificadores son prescindibles según qué tan importante sea la información que agregan"
  - "No tiene ninguna utilidad práctica fuera del análisis gramatical"
  - "Obliga a mantener siempre todos los modificadores de la oración original"
respuesta: "Permite quedarse con el esqueleto básico (los núcleos) y decidir qué modificadores son prescindibles según qué tan importante sea la información que agregan"

explicacion: |
  Es una aplicación práctica directa de este módulo a la producción
  de textos.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "avanzado"
  tags: ["nucleo", "problema"]

tipo: completar
enunciado: "En 'Javier, el profesor, llegó tarde', ¿cuál es el núcleo del sujeto completo ('Javier, el profesor')?"
respuestas_validas:
  - "Javier"

explicacion: |
  La aposición ('el profesor') explica a 'Javier', pero no lo
  reemplaza como núcleo.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "intermedio"
  tags: ["modificador_directo"]

enunciado: "¿Cuáles son las dos clases de palabras que típicamente funcionan como modificador directo de un sustantivo?"
tipo: mc
opciones_explicitas:
  - "Determinantes (artículos) y adjetivos"
  - "Preposiciones y conjunciones"
  - "Verbos y adverbios"
respuesta: "Determinantes (artículos) y adjetivos"

explicacion: |
  Ambos acompañan al sustantivo sin necesitar ninguna preposición de
  por medio.
```

```
metadata:
  materia: "lengua"
  tema: "nucleos_y_modificadores"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir el núcleo de un sintagma de sus modificadores?"
tipo: mc
opciones_explicitas:
  - "Para entender qué parte de un sintagma es imprescindible (el núcleo) y qué parte agrega información prescindible (los modificadores), la base de cualquier análisis sintáctico más detallado"
  - "Sólo sirve para contar palabras de una oración"
  - "No tiene relación con analizar objetos y circunstanciales más adelante"
respuesta: "Para entender qué parte de un sintagma es imprescindible (el núcleo) y qué parte agrega información prescindible (los modificadores), la base de cualquier análisis sintáctico más detallado"

explicacion: |
  Es el paso siguiente después de `../sujeto-y-predicado/`, y la base
  del módulo que sigue en la currícula: 'Objetos y circunstanciales'.
```
