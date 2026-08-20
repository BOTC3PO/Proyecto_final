# Lengua — Tipos textuales (cuestionario, 20 preguntas VBLang)

> Tema: `P10`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Identificar tipo narrativo

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["narrativo"]

variables:
  n: uno_de([1, 1])

respuesta: "narrativo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo", "argumentativo", "instructivo"]

enunciado: "\"Juan salió de su casa, caminó tres cuadras y se encontró con su amigo en la plaza.\" ¿Qué tipo textual es?"

pasos:
  - "Cuenta hechos que ocurren en el tiempo, con acciones y personajes: es narrativo."

explicacion: |
  El texto narrativo cuenta una secuencia de sucesos que le pasan a
  alguien.
```

### 2 — Identificar tipo descriptivo

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["descriptivo"]

variables:
  n: uno_de([1, 1])

respuesta: "descriptivo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo", "argumentativo", "instructivo"]

enunciado: "\"La casa era grande, de paredes blancas y techo rojo. Tenía un jardín lleno de flores amarillas.\" ¿Qué tipo textual es?"

pasos:
  - "Presenta características sin que pase el tiempo, con adjetivos y verbos de estado: es descriptivo."

explicacion: |
  El texto descriptivo detalla cómo es algo (aspecto, cualidades),
  no cuenta una acción.
```

### 3 — Identificar tipo expositivo

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["expositivo"]

variables:
  n: uno_de([1, 1])

respuesta: "expositivo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo", "argumentativo", "instructivo"]

enunciado: "\"La fotosíntesis es el proceso por el cual las plantas transforman luz solar en energía química.\" ¿Qué tipo textual es?"

pasos:
  - "Explica un tema de forma objetiva, con definiciones: es expositivo."

explicacion: |
  El texto expositivo informa o explica sin dar la opinión del autor.
```

### 4 — Identificar tipo argumentativo

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["argumentativo"]

variables:
  n: uno_de([1, 1])

respuesta: "argumentativo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo", "argumentativo", "instructivo"]

enunciado: "\"Deberíamos reducir el uso de plástico porque contamina los océanos y tarda siglos en degradarse.\" ¿Qué tipo textual es?"

pasos:
  - "Defiende una postura con razones para convencer: es argumentativo."

explicacion: |
  El texto argumentativo usa conectores causales (\"porque\") para
  respaldar una opinión.
```

### 5 — Identificar tipo instructivo

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["instructivo"]

variables:
  n: uno_de([1, 1])

respuesta: "instructivo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo", "argumentativo", "instructivo"]

enunciado: "\"Primero, batir los huevos. Segundo, agregar el azúcar. Tercero, mezclar con la harina.\" ¿Qué tipo textual es?"

pasos:
  - "Da pasos numerados con verbos en infinitivo/imperativo: es instructivo."

explicacion: |
  El texto instructivo indica los pasos para hacer algo, típico de
  recetas y manuales.
```

### 6 — Marca típica: conectores temporales

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["narrativo", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: "narrativo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo"]

enunciado: "Un texto con muchos conectores temporales (\"luego\", \"después\", \"al día siguiente\") probablemente sea de tipo..."

pasos:
  - "Los conectores temporales marcan una secuencia de hechos en el tiempo, típica del narrativo."

explicacion: |
  Los conectores temporales son una marca característica del texto
  narrativo.
```

### 7 — Marca típica: adjetivos y verbos de estado

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["descriptivo", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: "descriptivo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "instructivo"]

enunciado: "Un texto con muchos adjetivos y verbos como \"es\", \"tiene\", \"parece\" probablemente sea de tipo..."

pasos:
  - "Los adjetivos y verbos de estado detallan características, sin narrar una acción: marca del descriptivo."

explicacion: |
  Los adjetivos y verbos de estado son la marca típica del texto
  descriptivo.
```

### 8 — Marca típica: vocabulario técnico y definiciones

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["expositivo", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: "expositivo"
tipo: mc
opciones_explicitas: ["expositivo", "narrativo", "argumentativo"]

enunciado: "Un texto con definiciones y vocabulario técnico, sin opiniones del autor, probablemente sea de tipo..."

pasos:
  - "Explicar un tema de forma objetiva, con definiciones, es la marca del expositivo."

explicacion: |
  El vocabulario técnico y las definiciones objetivas son típicas
  del texto expositivo.
```

### 9 — Marca típica: primera persona y opiniones

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["argumentativo", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: "argumentativo"
tipo: mc
opciones_explicitas: ["argumentativo", "descriptivo", "instructivo"]

enunciado: "Un texto en primera persona que defiende una opinión con razones probablemente sea de tipo..."

pasos:
  - "Defender una postura con conectores de causa/consecuencia es la marca del argumentativo."

explicacion: |
  La opinión personal respaldada con razones es típica del texto
  argumentativo.
```

### 10 — Marca típica: imperativo y pasos numerados

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["instructivo", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: "instructivo"
tipo: mc
opciones_explicitas: ["instructivo", "narrativo", "expositivo"]

enunciado: "Un texto con verbos en imperativo (\"agregue\", \"mezcle\") y pasos numerados probablemente sea de tipo..."

pasos:
  - "Indicar cómo hacer algo paso a paso es la marca del instructivo."

explicacion: |
  El imperativo/infinitivo y la numeración de pasos son típicos del
  texto instructivo.
```

### 11 — Un texto puede combinar tipos

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["tipos_textuales", "combinacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una noticia puede combinar partes narrativas (contar lo que pasó) con partes descriptivas (describir el lugar del hecho), y se clasifica por el tipo predominante."

pasos:
  - "No hace falta que un texto sea puro de un solo tipo para clasificarlo."

explicacion: |
  Verdadero: se clasifica según qué tipo predomina, no exige pureza
  absoluta.
```

### 12 — Propósito comunicativo como criterio

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["tipos_textuales", "proposito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tipo textual se define principalmente por el propósito comunicativo del texto (contar, describir, explicar, convencer o instruir)."

pasos:
  - "No se define por el tema del texto, sino por para qué fue escrito."

explicacion: |
  Verdadero: dos textos sobre el mismo tema pueden ser de tipos
  distintos según su propósito (contar una historia sobre un volcán
  vs. explicar cómo funciona un volcán).
```

### 13 — El expositivo no lleva opinión del autor

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["expositivo", "argumentativo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El texto expositivo, igual que el argumentativo, incluye la opinión personal del autor sobre el tema."

pasos:
  - "El expositivo busca informar de forma objetiva; el argumentativo, en cambio, sí defiende una postura."

explicacion: |
  Falso: la objetividad (sin opinión) es justamente lo que distingue
  al expositivo del argumentativo.
```

### 14 — Clasificar un ejemplo de receta

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["instructivo", "ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una receta de cocina es un ejemplo típico de texto instructivo."

pasos:
  - "Da pasos ordenados para lograr un resultado (el plato), con verbos en imperativo/infinitivo."

explicacion: |
  Verdadero: la receta es el ejemplo clásico de texto instructivo.
```

### 15 — Clasificar un ejemplo de cuento

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["narrativo", "ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un cuento es un ejemplo típico de texto narrativo."

pasos:
  - "Cuenta hechos que le pasan a personajes en un orden temporal."

explicacion: |
  Verdadero: el cuento es el ejemplo clásico de texto narrativo, y es
  la puerta de entrada al género narrativo (tema siguiente).
```

### 16 — Clasificar un ejemplo de artículo enciclopédico

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["expositivo", "ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un artículo de enciclopedia es un ejemplo típico de texto expositivo."

pasos:
  - "Explica un tema de forma objetiva, con definiciones y datos, sin opinión."

explicacion: |
  Verdadero: la enciclopedia es el ejemplo clásico de texto
  expositivo.
```

### 17 — Diferenciar narrativo de descriptivo

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["narrativo", "descriptivo", "diferenciacion"]

variables:
  frases: ["El río bajaba rápido, arrastrando ramas y piedras hacia el pueblo", "El río era ancho, de aguas turbias y orillas rocosas"]
  tipos: ["narrativo", "descriptivo"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo"]

enunciado: "\"{frases[idx]}\" es un texto de tipo..."

pasos:
  - "Si hay una acción que avanza en el tiempo, es narrativo. Si sólo describe cómo es algo, es descriptivo."

explicacion: |
  \"Bajaba\", \"arrastrando\" son acciones en desarrollo (narrativo);
  \"era\", \"de aguas turbias\" son características fijas
  (descriptivo).
```

### 18 — Ordenar el método para clasificar un texto

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["tipos_textuales", "metodo"]

enunciado: "Ordená los pasos para identificar el tipo textual predominante de un texto."
tipo: ordenar
opciones_explicitas:
  - "Leer el texto completo"
  - "Preguntarse cuál es el propósito principal (contar, describir, explicar, convencer, instruir)"
  - "Buscar marcas típicas (verbos, conectores) que confirmen esa respuesta"
  - "Clasificar según el tipo predominante, aunque haya partes de otro tipo"
respuesta_orden: ["Leer el texto completo", "Preguntarse cuál es el propósito principal (contar, describir, explicar, convencer, instruir)", "Buscar marcas típicas (verbos, conectores) que confirmen esa respuesta", "Clasificar según el tipo predominante, aunque haya partes de otro tipo"]
explicacion: |
  El método va del propósito general a las marcas concretas que lo
  confirman, permitiendo tipos mixtos.
```

### 19 — Tipos textuales y géneros literarios

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "avanzado"
  tags: ["tipos_textuales", "generos_literarios"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tipo narrativo es la base de lo que después se estudia como género narrativo (uno de los tres géneros literarios)."

pasos:
  - "Reconocer que un texto cuenta hechos (narrativo) es el paso previo para estudiar sus convenciones específicas como género literario."

explicacion: |
  Verdadero: tipos textuales es prerrequisito directo de la rama de
  géneros literarios en la currícula.
```

### 20 — Aplicación: elegir el tipo textual según el objetivo

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "avanzado"
  tags: ["tipos_textuales", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el objetivo es convencer a alguien de una idea, conviene escribir un texto de tipo argumentativo antes que uno puramente descriptivo."

pasos:
  - "El argumentativo está diseñado para defender una postura con razones; el descriptivo sólo detalla características."

explicacion: |
  Verdadero: elegir el tipo textual correcto según el objetivo de
  escritura es la aplicación práctica de este tema.
```
