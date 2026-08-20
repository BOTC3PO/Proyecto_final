# Lengua — Informe técnico (cuestionario, 20 preguntas VBLang)

> Tema: `COM6c`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un informe técnico

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

### 2 — Identificar el resumen ejecutivo

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

### 3 — Identificar la introducción/contexto

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

### 4 — Identificar la metodología

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

### 5 — Identificar resultados

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

### 6 — Identificar conclusiones y recomendaciones

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

### 7 — El resumen ejecutivo se escribe último pero va primero

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

### 8 — Objetividad como principio central

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

### 9 — Evitar adjetivos vagos, usar datos concretos

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

### 10 — Títulos numerados en informes largos

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

### 11 — La metodología permite evaluar la validez del resultado

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

### 12 — Diferencia con producción escrita compleja general

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

### 13 — Orden de las secciones en el documento final

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
respuesta_orden: ["Resumen ejecutivo", "Introducción/contexto", "Metodología", "Resultados", "Conclusiones y recomendaciones"]
explicacion: |
  El orden sigue la estructura estándar de un informe técnico
  completo, aunque el resumen ejecutivo se escriba último en el
  proceso de redacción.
```

### 14 — Un informe técnico no es sólo para expertos en el tema

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

### 15 — El resumen ejecutivo condensa todo el informe

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

### 16 — Datos concretos en la sección de resultados

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

### 17 — Reconocer una recomendación bien formulada

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

### 18 — Ordenar el proceso de redacción de un informe técnico

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
respuesta_orden: ["Redactar contexto, metodología y resultados con datos concretos", "Redactar conclusiones y recomendaciones basadas en esos resultados", "Escribir el resumen ejecutivo al final, condensando lo esencial de todo el informe", "Ubicar el resumen ejecutivo al principio del documento, y revisar la numeración de secciones"]
explicacion: |
  El proceso de escritura no sigue el mismo orden que el de lectura:
  el resumen ejecutivo se redacta último pero se ubica primero.
```

### 19 — Informe técnico cierra la subrama de escritura profesional

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

### 20 — Aplicación: redactar un informe técnico real

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
