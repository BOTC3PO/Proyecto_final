# Lengua — CV (cuestionario, 20 preguntas VBLang)

> Tema: `COM6a`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un CV

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "basico"
  tags: ["cv", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un CV es un documento breve que resume la formación, experiencia y habilidades de una persona, pensado para que un empleador decida rápidamente si convocarla a una entrevista."

pasos:
  - "No es una autobiografía completa, es una selección estratégica de información."

explicacion: |
  Verdadero: es la definición central de CV.
```

### 2 — El CV no es una autobiografía completa

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["cv", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un CV no debe contar todo lo que la persona hizo en su vida, sino seleccionar lo que es relevante para el puesto específico al que se aplica."

pasos:
  - "Es el principio central de brevedad y relevancia descrito en la teoría."

explicacion: |
  Verdadero: la selección estratégica es lo que distingue a un buen
  CV de un relato exhaustivo.
```

### 3 — Identificar datos de contacto

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "basico"
  tags: ["secciones"]

variables:
  n: uno_de([1, 1])

respuesta: "datos de contacto"
tipo: mc
opciones_explicitas: ["datos de contacto", "formación académica", "experiencia laboral"]

enunciado: "La sección de un CV que incluye nombre, teléfono, email y ciudad se llama..."

pasos:
  - "Sin exceso de información personal irrelevante."

explicacion: |
  Los datos de contacto son la primera sección típica de un CV.
```

### 4 — Formación académica en orden cronológico inverso

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["formacion_academica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La sección de formación académica se ordena cronológicamente de forma inversa: lo más reciente primero."

pasos:
  - "Es el orden recomendado para que lo más relevante actualmente aparezca primero."

explicacion: |
  Verdadero: el orden cronológico inverso es la convención estándar
  para esta sección.
```

### 5 — Experiencia laboral en orden cronológico inverso

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["experiencia_laboral"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La sección de experiencia laboral también se ordena cronológicamente de forma inversa, igual que la formación académica."

pasos:
  - "Es el mismo criterio de orden aplicado a esta sección."

explicacion: |
  Verdadero: el orden cronológico inverso se aplica de forma
  consistente en ambas secciones.
```

### 6 — Habilidades técnicas y blandas

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["habilidades"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un CV suele incluir tanto habilidades técnicas (idiomas, software) como habilidades blandas (trabajo en equipo, comunicación), relevantes al puesto."

pasos:
  - "Es una de las secciones típicas descritas en la teoría."

explicacion: |
  Verdadero: incluir ambos tipos de habilidades es una práctica
  común y recomendada.
```

### 7 — El objetivo profesional es opcional y breve

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["objetivo_profesional"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El objetivo profesional, si se incluye, debería ser breve (2-3 líneas), resumiendo qué se busca y qué se aporta."

pasos:
  - "Es una sección opcional descrita en la teoría."

explicacion: |
  Verdadero: la brevedad aplica también a esta sección opcional del
  CV.
```

### 8 — Verbos de acción vs. descripciones pasivas

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["verbos_de_accion"]

variables:
  frases: ["coordiné el equipo de ventas", "estuve a cargo de tareas varias relacionadas con ventas"]
  tipos: ["verbo de acción concreto", "descripción vaga y pasiva"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["verbo de acción concreto", "descripción vaga y pasiva"]

enunciado: "\"{frases[idx]}\" es un ejemplo de..."

pasos:
  - "Los verbos de acción concretos comunican más claramente qué se hizo realmente que las descripciones vagas."

explicacion: |
  Los verbos de acción concretos son preferibles a las descripciones
  vagas y pasivas al redactar un CV.
```

### 9 — Verbos de acción comunican más claramente

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["verbos_de_accion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar verbos de acción concretos (\"coordiné\", \"desarrollé\", \"lideré\") comunica más claramente qué se hizo realmente que descripciones vagas y pasivas."

pasos:
  - "Es el principio de redacción central para describir experiencia laboral en un CV."

explicacion: |
  Verdadero: es el principio de redacción recomendado descrito en la
  teoría.
```

### 10 — Errores de ortografía en un CV

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["errores_comunes", "ortografia_y_tildacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un CV con errores de ortografía y puntuación genera una mala primera impresión sobre el cuidado y la atención al detalle de quien lo escribió."

pasos:
  - "Ver `../ortografia-y-tildacion/` y `../signos-de-puntuacion/`: aplican directamente acá, con consecuencias prácticas reales."

explicacion: |
  Verdadero: la corrección formal tiene un peso concreto en la
  evaluación de un CV.
```

### 11 — Formato inconsistente como error común

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["errores_comunes", "formato"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un formato inconsistente (tamaños de letra, espaciados o alineaciones distintas entre secciones) da una impresión de descuido en un CV."

pasos:
  - "Es uno de los errores comunes descritos en la teoría."

explicacion: |
  Verdadero: la consistencia formal es parte de la calidad percibida
  de un CV.
```

### 12 — Extensión recomendada para un CV de entrada

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["extension"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para la mayoría de los puestos de entrada, un CV de una sola página suele ser suficiente y más efectivo que uno largo."

pasos:
  - "Es coherente con el principio central de brevedad y relevancia."

explicacion: |
  Verdadero: la brevedad recomendada tiene un límite práctico
  concreto para puestos de entrada.
```

### 13 — El mismo CV no sirve para todo puesto

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["relevancia", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La misma persona puede (y debería) tener versiones distintas de su CV según a qué puesto aplique, resaltando la experiencia más pertinente en cada caso."

pasos:
  - "Es la aplicación práctica del principio de relevancia: seleccionar lo pertinente para cada puesto específico."

explicacion: |
  Verdadero: adaptar el CV según el puesto es una práctica
  recomendada, no un CV único para todo.
```

### 14 — Datos personales irrelevantes no deberían incluirse

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["datos_de_contacto", "relevancia"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un buen CV debería incluir toda la información personal posible (estado civil, religión, gustos personales) para que el empleador conozca completamente a la persona."

pasos:
  - "Los datos de contacto deberían limitarse a lo relevante (nombre, teléfono, email, ciudad), sin exceso de información personal irrelevante al puesto."

explicacion: |
  Falso: el exceso de información personal irrelevante no ayuda y
  puede distraer del contenido relevante para el puesto.
```

### 15 — El CV depende de producción escrita compleja

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El CV reutiliza las herramientas de producción escrita compleja (estructura, claridad, corrección formal) aplicadas a este género concreto y práctico."

pasos:
  - "Ver `../produccion-escrita-compleja/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

### 16 — Corregir una descripción de experiencia laboral

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["verbos_de_accion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Desarrollé el sistema de inventario para reducir errores de stock en un 30%"
tipo: mc
opciones_explicitas: ["Desarrollé el sistema de inventario para reducir errores de stock en un 30%", "Estuve encargado de cosas relacionadas con el inventario"]

enunciado: "¿Cuál de estas dos descripciones de experiencia laboral sigue mejor los principios de redacción de un CV?"

pasos:
  - "Un verbo de acción concreto con un resultado medible comunica mucho más que una descripción vaga."

explicacion: |
  La versión con verbo de acción y resultado concreto es más
  efectiva que la descripción vaga y pasiva.
```

### 17 — El CV es la primera impresión escrita con un empleador

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["cv", "importancia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El CV suele ser el primer contacto escrito con un potencial empleador, por lo que la brevedad, la selección estratégica y la corrección formal tienen consecuencias prácticas directas."

pasos:
  - "Es la conclusión central sobre la importancia práctica de este tema."

explicacion: |
  Verdadero: es la síntesis de por qué dominar la redacción de un CV
  es una habilidad de alta demanda práctica.
```

### 18 — Ordenar el proceso de redacción de un CV

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "intermedio"
  tags: ["cv", "metodo"]

enunciado: "Ordená los pasos para redactar un CV adaptado a un puesto específico."
tipo: ordenar
opciones_explicitas:
  - "Identificar qué experiencia y habilidades son relevantes para ese puesto específico"
  - "Organizar las secciones (contacto, formación, experiencia, habilidades) en orden cronológico inverso donde corresponda"
  - "Redactar cada descripción con verbos de acción concretos"
  - "Revisar ortografía, puntuación y consistencia de formato antes de enviarlo"
respuesta_orden: ["Identificar qué experiencia y habilidades son relevantes para ese puesto específico", "Organizar las secciones (contacto, formación, experiencia, habilidades) en orden cronológico inverso donde corresponda", "Redactar cada descripción con verbos de acción concretos", "Revisar ortografía, puntuación y consistencia de formato antes de enviarlo"]
explicacion: |
  El proceso va de seleccionar la información relevante a redactarla
  con buenas prácticas y revisarla antes de enviarla.
```

### 19 — CV como primer nodo de escritura profesional

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["cv", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El CV es el primero de los tres géneros de escritura profesional de esta subrama, junto a correo formal e informe técnico."

pasos:
  - "Ver `../correo-formal/` y `../informe-tecnico/`: los tres nodos hermanos dependen de `../produccion-escrita-compleja/`."

explicacion: |
  Verdadero: es la relación entre este tema y los otros dos de la
  subrama de escritura profesional.
```

### 20 — Aplicación: preparar un CV real

```
metadata:
  materia: "lengua"
  tema: "cv"
  nivel: "avanzado"
  tags: ["cv", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al preparar un CV para una postulación real, conviene seleccionar sólo la experiencia relevante para ese puesto, usar verbos de acción concretos, y revisar cuidadosamente ortografía y formato antes de enviarlo."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en una
  postulación laboral real.
```
