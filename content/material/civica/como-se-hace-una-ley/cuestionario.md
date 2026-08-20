# Cívica — Cómo se hace una ley (cuestionario, 20 preguntas VBLang)

> Tema: `C7`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Origen de un proyecto de ley

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "basico"
  tags: ["origen"]

enunciado: "¿Quién puede presentar un proyecto de ley?"
tipo: mc
opciones_explicitas:
  - "Un legislador, el Poder Ejecutivo, o el pueblo por iniciativa popular"
  - "Sólo el Presidente"
  - "Sólo la Corte Suprema"
respuesta: "Un legislador, el Poder Ejecutivo, o el pueblo por iniciativa popular"

explicacion: |
  3 orígenes posibles según la Constitución.
```

### 2 — Iniciativa popular

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "intermedio"
  tags: ["origen"]

enunciado: "¿Qué porcentaje mínimo del padrón electoral puede presentar un proyecto por iniciativa popular?"
tipo: input
respuesta: 3

explicacion: |
  No menos del 3% del padrón, con condiciones fijadas por ley
  reglamentaria (art. 39 de la Constitución).
```

### 3 — Cámara ante la que se presenta la iniciativa popular

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "intermedio"
  tags: ["origen"]

enunciado: "¿Ante qué cámara se presenta un proyecto por iniciativa popular?"
tipo: mc
opciones_explicitas:
  - "Cámara de Diputados"
  - "Cámara de Senadores"
  - "Corte Suprema de Justicia"
respuesta: "Cámara de Diputados"

explicacion: |
  Art. 39 de la Constitución Nacional.
```

### 4 — Cámara de origen

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "basico"
  tags: ["circuito"]

enunciado: "¿Qué es la 'cámara de origen'?"
tipo: mc
opciones_explicitas:
  - "La cámara del Congreso por la que entra primero un proyecto de ley"
  - "La cámara donde se promulga finalmente la ley"
  - "El Poder Judicial que revisa la ley"
respuesta: "La cámara del Congreso por la que entra primero un proyecto de ley"

explicacion: |
  Después pasa a la otra cámara, la revisora.
```

### 5 — Proyectos de impuestos

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "avanzado"
  tags: ["circuito"]

enunciado: "¿En qué cámara deben iniciarse obligatoriamente los proyectos de ley sobre contribuciones/impuestos?"
tipo: mc
opciones_explicitas:
  - "Cámara de Diputados"
  - "Cámara de Senadores"
  - "Cualquiera de las dos, sin restricción"
respuesta: "Cámara de Diputados"

explicacion: |
  Por ser considerada la cámara más representativa de la población.
```

### 6 — Cámara revisora aprueba sin cambios

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "intermedio"
  tags: ["circuito"]

enunciado: "Si la cámara revisora aprueba el proyecto SIN modificaciones, ¿a dónde pasa después?"
tipo: mc
opciones_explicitas:
  - "Al Poder Ejecutivo, para su promulgación o veto"
  - "De nuevo a la cámara de origen, obligatoriamente"
  - "Directamente al Boletín Oficial, sin pasar por el Ejecutivo"
respuesta: "Al Poder Ejecutivo, para su promulgación o veto"

explicacion: |
  Sólo si hay modificaciones vuelve a la cámara de origen.
```

### 7 — Cámara revisora modifica el proyecto

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "intermedio"
  tags: ["circuito"]

enunciado: "Si la cámara revisora le hace modificaciones al proyecto, ¿qué pasa después?"
tipo: mc
opciones_explicitas:
  - "Vuelve a la cámara de origen, que puede aceptar los cambios o insistir con el texto original"
  - "El proyecto se descarta automáticamente"
  - "Pasa directo al Poder Ejecutivo con los cambios"
respuesta: "Vuelve a la cámara de origen, que puede aceptar los cambios o insistir con el texto original"

explicacion: |
  La cámara de origen decide si acepta los cambios o insiste con su
  versión original.
```

### 8 — Promulgación

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "basico"
  tags: ["circuito"]

enunciado: "¿Qué es la 'promulgación' de una ley?"
tipo: mc
opciones_explicitas:
  - "El acto del Poder Ejecutivo por el que confirma la ley y la manda a publicar"
  - "El acto de presentar un proyecto ante el Congreso"
  - "El acto de votar en la cámara de origen"
respuesta: "El acto del Poder Ejecutivo por el que confirma la ley y la manda a publicar"

explicacion: |
  Puede ser expresa o tácita.
```

### 9 — Promulgación tácita

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "avanzado"
  tags: ["circuito"]

enunciado: "¿Cuántos días hábiles tiene el Poder Ejecutivo antes de que un proyecto se considere promulgado tácitamente si no se pronuncia?"
tipo: input
respuesta: 10

explicacion: |
  10 días hábiles sin pronunciarse equivalen a promulgación tácita.
```

### 10 — Veto

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "intermedio"
  tags: ["circuito"]

enunciado: "¿Qué alternativa tiene el Poder Ejecutivo frente a promulgar una ley?"
tipo: mc
opciones_explicitas:
  - "Vetarla, total o parcialmente"
  - "Declararla inconstitucional él mismo"
  - "Devolverla directamente a la cámara revisora sin comentarios"
respuesta: "Vetarla, total o parcialmente"

explicacion: |
  Ya visto en `../division-de-poderes/` como ejemplo de pesos y
  contrapesos.
```

### 11 — Publicación

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "basico"
  tags: ["circuito"]

enunciado: "¿Dónde se publica una ley ya promulgada, para que sea exigible?"
tipo: mc
opciones_explicitas:
  - "En el Boletín Oficial"
  - "En un diario privado a elección del Presidente"
  - "No hace falta publicarla en ningún lado"
respuesta: "En el Boletín Oficial"

explicacion: |
  Recién ahí es exigible y se presume conocida por todos.
```

### 12 — La ley se presume conocida

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "intermedio"
  tags: ["circuito"]

enunciado: "¿Verdadero o falso? Una vez publicada en el Boletín Oficial, la ley se presume conocida por todos, aunque una persona en particular no la haya leído."
tipo: vf
respuesta: verdadero

explicacion: |
  Es un principio general del derecho: nadie puede alegar
  desconocimiento de la ley ya publicada para eximirse de cumplirla.
```

### 13 — Media sanción

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Qué significa que un proyecto de ley tenga 'media sanción'?"
tipo: mc
opciones_explicitas:
  - "Que ya fue aprobado por una de las dos cámaras, pero falta la otra"
  - "Que ya es ley definitiva, lista para el Boletín Oficial"
  - "Que el Presidente ya la vetó"
respuesta: "Que ya fue aprobado por una de las dos cámaras, pero falta la otra"

explicacion: |
  Es el término periodístico habitual para ese estado intermedio del
  proceso.
```

### 14 — Insistencia de la cámara de origen

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "avanzado"
  tags: ["circuito"]

enunciado: "Si la cámara de origen insiste con su texto original frente a modificaciones de la revisora, ¿qué necesita para imponerse?"
tipo: mc
opciones_explicitas:
  - "Mayoría absoluta o, según el caso, dos tercios de los votos"
  - "Unanimidad total, sin excepción"
  - "Sólo un voto más que la revisora"
respuesta: "Mayoría absoluta o, según el caso, dos tercios de los votos"

explicacion: |
  Depende del caso constitucional específico previsto.
```

### 15 — Reclutamiento de tropas

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "avanzado"
  tags: ["circuito"]

enunciado: "Además de contribuciones/impuestos, ¿qué otro tipo de proyecto debe iniciarse obligatoriamente en Diputados según la teoría?"
tipo: mc
opciones_explicitas:
  - "Reclutamiento de tropas"
  - "Nombramiento de embajadores"
  - "Aprobación de tratados internacionales"
respuesta: "Reclutamiento de tropas"

explicacion: |
  Es la otra excepción puntual mencionada en la teoría.
```

### 16 — Prerrequisito: división de poderes

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "intermedio"
  tags: ["prerrequisito"]

enunciado: "¿Por qué este tema depende de haber visto primero la división de poderes?"
tipo: mc
opciones_explicitas:
  - "Porque el circuito de sanción de una ley presupone ya saber qué hace el Legislativo dentro del esquema de 3 poderes"
  - "Porque no tiene ninguna relación con la división de poderes"
  - "Porque el circuito legislativo es anterior a la existencia de poderes separados"
respuesta: "Porque el circuito de sanción de una ley presupone ya saber qué hace el Legislativo dentro del esquema de 3 poderes"

explicacion: |
  Sin ese marco, "cámara de origen" o "veto" no tienen contexto.
```

### 17 — 2 cámaras necesarias

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "basico"
  tags: ["circuito"]

enunciado: "¿Verdadero o falso? Un proyecto de ley necesita, en general, ser aprobado por AMBAS cámaras del Congreso para convertirse en ley."
tipo: vf
respuesta: verdadero

explicacion: |
  Salvo casos excepcionales, ambas cámaras deben aprobar el mismo
  texto.
```

### 18 — Cámara revisora no es opcional

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "intermedio"
  tags: ["circuito"]

enunciado: "¿Verdadero o falso? Un proyecto aprobado por la cámara de origen puede convertirse en ley sin pasar nunca por la cámara revisora."
tipo: vf
respuesta: falso

explicacion: |
  Salvo excepciones puntuales, siempre pasa por ambas cámaras.
```

### 19 — Vocabulario periodístico

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Por qué entender este circuito ayuda a leer noticias políticas con más criterio, según la teoría?"
tipo: mc
opciones_explicitas:
  - "Permite distinguir en qué etapa concreta está un proyecto (media sanción, en comisión, vetado, promulgado)"
  - "Porque todas las noticias políticas mienten sobre el proceso legislativo"
  - "Porque no hay ninguna diferencia real entre esas etapas"
respuesta: "Permite distinguir en qué etapa concreta está un proyecto (media sanción, en comisión, vetado, promulgado)"

explicacion: |
  Sin esa mecánica, esos términos suenan igual de vagos entre sí.
```

### 20 — Síntesis

```
metadata:
  materia: "civica"
  tema: "como_se_hace_una_ley"
  nivel: "intermedio"
  tags: ["sintesis"]

enunciado: "¿Cuál resume mejor el circuito completo de sanción de una ley?"
tipo: mc
opciones_explicitas:
  - "Origen del proyecto → cámara de origen → cámara revisora → Poder Ejecutivo (promulgación o veto) → publicación en el Boletín Oficial"
  - "Sólo requiere la firma del Presidente, sin pasar por el Congreso"
  - "El proceso termina apenas una cámara aprueba el proyecto"
respuesta: "Origen del proyecto → cámara de origen → cámara revisora → Poder Ejecutivo (promulgación o veto) → publicación en el Boletín Oficial"

explicacion: |
  Es el circuito básico completo desarrollado en la teoría.
```
