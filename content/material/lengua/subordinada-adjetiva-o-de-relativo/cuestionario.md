# Lengua — subordinada adjetiva o de relativo (cuestionario, 24 preguntas VBLang)

> Tema: `lengua/subordinada-adjetiva-o-de-relativo`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["sintaxis", "funcion"]

variables:
  funcion: uno_de(["adjetivo", "sustantivo", "verbo", "adverbio"])

respuesta: "adjetivo"
tipo: input

enunciado: "Las oraciones subordinadas adjetivas cumplen la función sintáctica de un {funcion} dentro de la oración principal."

explicacion: |
  Aunque están formadas por un sujeto y un verbo, su función es modificar al sustantivo (antecedente), actuando como un adjetivo.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["cuyo", "concordancia"]

variables:
  genero_antecedente: uno_de(["masculino", "femenino"])
  numero_antecedente: uno_de(["singular", "plural"])
  genero_pertenencia: uno_de(["masculino", "femenino"])
  numero_pertenencia: uno_de(["singular", "plural"])

respuesta: "cuyo"
tipo: input

enunciado: "Si el antecedente es {genero_antecedente} {numero_antecedente} y posee una {genero_pertenencia} {numero_pertenencia}, ¿qué pronombre relativo se usa para indicar posesión?"

explicacion: |
  Se usa 'cuyo' (o sus formas 'cuya', 'cuyos', 'cuyas') para expresar posesión. Concuerda en género y número con la cosa poseída (la pertenencia), no con el antecedente.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["quien", "personas"]

variables:
  antecedente_persona: uno_de(["el profesor", "mi hermana", "quien", "alguien"])
  antecedente_no_persona: uno_de(["el libro", "la mesa", "el gato", "el tiempo"])

respuesta: "quien"
tipo: input

enunciado: "¿Qué pronombre relativo se utiliza comúnmente para referirse a personas, a menudo precedido de preposición?"

explicacion: |
  'Quien' (o 'quienes') se usa para personas. 'Que' es más genérico y puede usarse para cosas o personas, pero 'quien' es específico para personas en contextos formales o con preposición.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "mc"]

variables:
  oracion: uno_de(["El hombre que llegó es mi padre", "Mi padre, que llegó ayer, está cansado", "El libro que leo es interesante"])
    # Nota: Para simplificar la lógica de MC, asumimos que la primera opción es especificativa y la segunda explicativa en la generación real, pero aquí generamos distractores.
    # Mejor: Generamos una oración específica en el enunciado.

respuesta: "especificativa"
tipo: mc
opciones_explicitas: ["especificativa", "explicativa", "sustantiva", "adverbial"]

enunciado: "En la oración 'Los estudiantes que estudiaron aprobaron', la subordinada adjetiva es:"

explicacion: |
  Es especificativa porque restringe el grupo de 'estudiantes' a aquellos que estudiaron. Sin ella, no sabríamos qué estudiantes aprobaron.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["cuyo", "mc"]

respuesta: "posesiva"
tipo: mc
opciones_explicitas: ["posesiva", "temporal", "local", "causal"]

enunciado: "El pronombre relativo 'cuyo' introduce una subordinada adjetiva con función:"

explicacion: |
  'Cuyo' expresa posesión o pertenencia. Equivale a 'cuya', 'cuyos', 'cuyas'.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["pronombres", "cosas"]

variables:
  cosa: uno_de(["el coche", "la idea", "el proyecto", "el problema"])

respuesta: "que"
tipo: input

enunciado: "Para referirse a '{cosa}' en una subordinada adjetiva, ¿cuál es el pronombre relativo más común y versátil?"

explicacion: |
  'Que' es el pronombre relativo más frecuente y puede referirse tanto a personas como a cosas.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["cuyo", "concordancia", "input"]

variables:
  posesor: uno_de(["el hombre", "la mujer"])
  poseido: uno_de(["los hijos", "la casa"])

respuesta: "cuyos"
tipo: input

enunciado: "En 'El hombre {posesor} tiene {poseido}', si usamos 'cuyo' para unir las frases, ¿cómo se escribe el relativo si 'poseido' es plural?"

explicacion: |
  'Cuyos' concuerda en género y número con el poseído ('los hijos' -> masculino plural).
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["pronombres", "mc"]

respuesta: "cuando"
tipo: mc
opciones_explicitas: ["que", "cual", "donde", "cuando"]

enunciado: "¿Cuál de estos NO es un pronombre relativo que introduce una subordinada adjetiva típica?"

explicacion: |
  'Cuando' es un adverbio relativo de tiempo. Aunque puede introducir subordinadas, 'que', 'cual' y 'donde' son los pronombres relativos clásicos (de persona/cosa/lugar). 'Cuando' a menudo introduce oraciones adverbiales temporales.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "mc"]

respuesta: "sustantiva"
tipo: mc
opciones_explicitas: ["sustantiva", "adjetiva", "adverbial", "causal"]

enunciado: "En 'Quiero que vengas', la subordinada es:"

explicacion: |
  Es sustantiva porque funciona como objeto directo del verbo 'quiero'. No modifica a un sustantivo.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["antecedente", "identificacion"]

variables:
  antecedente: uno_de(["libro", "casa", "amigo", "perro"])
  verbo: uno_de(["leí", "construí", "conocí", "adopté"])
  adjetivo: uno_de(["nuevo", "grande", "viejo", "pequeño"])

respuesta: "{antecedente}"
tipo: input

enunciado: "En la oración 'El {antecedente} que {verbo} es {adjetivo}', ¿cuál es el antecedente de la subordinada adjetiva?"

explicacion: |
  El antecedente es el sustantivo al que modifica la subordinada. En este caso, "que {verbo}" describe al "{antecedente}".
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["sintaxis", "funcion"]

variables:
  sustantivo: uno_de(["profesor", "colega", "vecino", "jefe"])
  accion: uno_de(["enseña", "trabaja", "vive", "manda"])

respuesta: "complemento del nombre"
tipo: input

enunciado: "La oración subordinada adjetiva 'que {accion}' en 'El {sustantivo} que {accion} es amable' cumple la función de:"

explicacion: |
  Las subordinadas adjetivas funcionan como un adjetivo, es decir, como complemento del nombre o sustantivo antecedente.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "especificativa"]

variables:
  sustantivo: uno_de(["alumnos", "estudiantes"])
  condicion: uno_de(["estudian", "trabajan", "juegan", "duermen"])

respuesta: "especificativa"
tipo: completar

enunciado: "En 'Los {sustantivo} que {condicion} pasan el año', la subordinada es __________."

explicacion: |
  Es especificativa porque delimita qué {sustantivo} específicos pasan el año.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["sintaxis", "funcion"]

respuesta: "adjetivo"
tipo: completar

enunciado: "La subordinada adjetiva funciona sintácticamente como un __________."

explicacion: |
  Funciona como un adjetivo, modificando al sustantivo antecedente.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["terminologia", "antecedente"]

respuesta: "antecedente"
tipo: completar

enunciado: "El sustantivo que es modificado por la subordinada adjetiva se llama __________."

explicacion: |
  Se llama antecedente.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "semantica"]

variables:
  sujeto: uno_de(["Argentina", "Madrid", "Tokio", "Paris", "Roma"])
  dato: uno_de(["es capital", "tiene museos", "es antigua", "es grande", "es famosa"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto}, que {dato}, es popular', la subordinada es explicativa porque su información es complementaria y no esencial para identificar al sujeto."

explicacion: |
  Verdadero. '{sujeto}' es un nombre propio que ya identifica inequívocamente al referente. La cláusula 'que {dato}' aporta información extra, no restrictiva, por lo que es explicativa.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["pronombre", "persona"]

variables:
  persona: uno_de(["el amigo", "la vecina", "el colega", "la hermana", "el novio"])
  accion: uno_de(["llamó", "escribió", "visitó", "ayudó", "conoció"])

respuesta: uno_de(["quien", "quienes"])
tipo: input

enunciado: "Si el antecedente es 'la persona', ¿qué pronombre relativo se usa comúnmente para referirse a ella en registro formal: 'que' o 'quien'?"

explicacion: |
  'Quien' (o 'quienes' si es plural) se usa frecuentemente para referentes personificados, especialmente en contextos más formales o después de preposiciones. Aquí, 'quien' es la opción válida para singular.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["identificacion", "segmento"]

variables:
  antecedente: uno_de(["el coche", "el avión", "el tren", "el barco", "el auto"])
  caracteristica: uno_de(["que viaja rápido", "que es nuevo", "que es rojo", "que es viejo", "que es caro"])

respuesta: "{caracteristica}"
tipo: input

enunciado: "En 'El {antecedente} {caracteristica} es mío', ¿cuál es el segmento que forma la subordinada adjetiva?"

explicacion: |
  La subordinada adjetiva comienza con el pronombre relativo y termina al cerrar la idea. En este caso, es '{caracteristica}'.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["prueba", "especificativa"]

variables:
  sujeto: uno_de(["los libros", "los estudiantes", "los días", "los meses", "los años"])
  condicion: uno_de(["que llueve", "que estudian", "que amanecen", "que terminan", "que empiezan"])

respuesta: verdadero
tipo: vf

enunciado: "Si quitamos la cláusula '{condicion}' de 'Los {sujeto} {condicion} son raros', la oración pierde su sentido específico de referencia. ¿Es esto característico de una especificativa?"

explicacion: |
  Verdadero. Las especificativas son esenciales para identificar al antecedente. Sin ellas, no sabemos a qué '{sujeto}' nos referimos.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["prueba", "explicativa"]

variables:
  sujeto: uno_de(["Juan", "María", "Carlos", "Ana", "Luis"])
  dato: uno_de(["es alto", "es inteligente", "es amable", "es joven", "es rico"])

respuesta: verdadero
tipo: vf

enunciado: "Si quitamos la cláusula '{dato}' de 'Juan, que {dato}, viene mañana', la oración sigue teniendo sentido completo. ¿Es esto característico de una explicativa?"

explicacion: |
  Verdadero. Las explicativas aportan información extra. El sujeto 'Juan' ya está identificado, por lo que la cláusula es prescindible.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["error", "puntuacion"]

variables:
  sujeto: uno_de(["Mi madre", "El presidente", "La reina", "El director", "El alcalde"])
  dato: uno_de(["es anciana", "es popular", "es querida", "es famosa", "es anciana"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Mi madre que {dato} vive aquí', falta una coma antes de 'que' si se quiere dar un dato adicional sobre 'Mi madre'. ¿Es esto correcto?"

explicacion: |
  Verdadero. Si 'Mi madre' es único y el dato es adicional (explicativo), debe haber comas: 'Mi madre, que {dato}, vive aquí'. Sin comas, implicaría que hay varias madres y solo la que es '{dato}' vive ahí.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["error", "puntuacion"]

variables:
  sujeto: uno_de(["los libros", "los estudiantes", "los días", "los meses", "los años"])
  condicion: uno_de(["que llueve", "que estudian", "que amanecen", "que terminan", "que empiezan"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Los {sujeto}, {condicion}, son raros', si la intención es restringir el grupo (solo esos específicos), la coma es incorrecta. ¿Es esto cierto?"

explicacion: |
  Verdadero. Si la cláusula es especificativa (restringe el significado), NO debe llevar comas. Las comas la convertirían en explicativa, cambiando el sentido.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["elision", "pronombre"]

variables:
  antecedente: uno_de(["el libro", "la casa", "el día", "el momento", "el lugar"])
  accion: uno_de(["leí", "construí", "esperé", "visité", "busqué"])

respuesta: verdadero
tipo: vf

enunciado: "En 'El {antecedente} {accion} es bueno', se puede omitir el pronombre relativo 'que' en español coloquial: 'El {antecedente} {accion} es bueno'. ¿Es esto gramaticalmente aceptable en registro informal?"

explicacion: |
  Verdadero. En español, el pronombre relativo 'que' puede omitirse cuando funciona como complemento directo de la subordinada, aunque es más común en el habla cotidiana.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["pronombre", "comparacion"]

variables:
  antecedente: uno_de(["la idea", "el problema", "la solución", "el caso", "el tema"])

respuesta: uno_de(["cual", "que"])
tipo: input

enunciado: "Después de una coma, si queremos un tono más formal y evitar ambigüedad, es preferible usar 'que' o 'cual' para referirse a '{antecedente}'?"

explicacion: |
  'Cual' (o 'el cual') se prefiere después de comas o preposiciones para mayor claridad y formalidad, especialmente cuando el antecedente es una idea abstracta o para evitar confusión con el 'que' relativo estándar.
```

### 24 — pregunta 24

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["error", "concordancia"]

variables:
  poseedor: uno_de(["el hombre", "la mujer", "el niño", "la niña", "el padre"])
  poseido: uno_de(["hija", "madre"])
  forma_incorrecta: uno_de(["cuyas", "cuyos", "cuyo"])

respuesta: verdadero
tipo: vf

enunciado: "En 'La {poseedor}, {forma_incorrecta} {poseido} es joven', si '{poseido}' es femenino singular, la forma '{forma_incorrecta}' es incorrecta. ¿Es esto cierto?"

explicacion: |
  Verdadero. Si '{poseido}' es femenino singular, debe ser 'cuya'. '{forma_incorrecta}' no concuerda.
```
