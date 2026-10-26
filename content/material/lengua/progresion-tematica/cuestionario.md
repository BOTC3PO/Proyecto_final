# Lengua — Progresión temática (cuestionario, 20 preguntas VBLang)

> Tema: `P14Bc`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de tema y rema

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

### 2 — Definición de progresión temática

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

### 3 — Identificar progresión de tema constante

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

### 4 — Identificar progresión lineal

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

### 5 — Identificar progresión con temas derivados

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

### 6 — Tema constante usa mecanismos de referencia

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

### 7 — Sin progresión temática el texto es confuso

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

### 8 — Conectores y referencia no alcanzan solos

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

### 9 — Clasificar el tipo de progresión en un fragmento

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

### 10 — El hipertema en progresión con temas derivados

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

### 11 — Un texto puede combinar tipos de progresión

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

### 12 — Reconocer un salto de tema sin progresión

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

### 13 — La progresión lineal "encadena" la información

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

### 14 — Tema constante vs. temas derivados

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

### 15 — Progresión temática y párrafos

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

### 16 — Elegir el tipo de progresión según el propósito

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

### 17 — Detectar el rema de una oración

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

### 18 — Ordenar el proceso para analizar la progresión temática de un texto

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
respuesta_orden: ["Identificar el tema y el rema de cada oración", "Revisar si el tema se repite igual en varias oraciones seguidas (tema constante)", "Revisar si el rema de una oración pasa a ser el tema de la siguiente (progresión lineal)", "Si ninguna de las dos aplica, revisar si hay un hipertema común del que se derivan los distintos temas (temas derivados)"]
explicacion: |
  El análisis va de identificar tema/rema en cada oración a
  clasificar qué patrón de progresión conecta a las oraciones entre
  sí.
```

### 19 — Progresión temática cierra la subrama de cohesión y coherencia

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

### 20 — Aplicación: revisar la progresión temática de un texto propio

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
