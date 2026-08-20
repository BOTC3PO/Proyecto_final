# Lengua — tipos de sujeto (cuestionario, 25 preguntas VBLang)

> Tema: `lengua/tipos-de-sujeto`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_tacito", "elipsis"]

variables:
  pronombre: uno_de(["nosotros", "tú", "ellos", "yo"])
  verbo: uno_de(["estudiamos", "estudias", "estudian", "estudio"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{verbo} mucho para el examen', el sujeto es expreso porque aparece escrito."

explicacion: |
  Falso. El sujeto es tácito (elíptico). Aunque no se escribe, se sobreentiende por la conjugación verbal ('{pronombre}'). En español, es común omitir el pronombre sujeto.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_unimembre", "composicion"]

variables:
  nombre_propio: uno_de(["Pedro", "Laura", "Martín", "Sofía", "Tomás"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre_propio} juega al fútbol', el sujeto es unimembre porque está compuesto por un solo núcleo sin modificadores."

explicacion: |
  Verdadero. El sujeto '{nombre_propio}' es un sustantivo propio que funciona como núcleo único. No tiene determinantes ni adjetivos que lo acompañen dentro del grupo nominal sujeto.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_bimembre", "composicion"]

variables:
  adjetivo: uno_de(["grandes", "inteligentes", "divertidos", "serios", "alegres"])
  sustantivo: uno_de(["niños", "estudiantes", "amigos", "compañeros", "vecinos"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Los {sustantivo} {adjetivo} llegaron tarde', el sujeto es bimembre."

explicacion: |
  Verdadero. El sujeto 'Los {sustantivo} {adjetivo}' está compuesto por un núcleo ('{sustantivo}') y modificadores ('Los', '{adjetivo}'). Esta estructura de dos o más elementos lo clasifica como bimembre.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_compuesto", "bimembre"]

variables:
  nombre1: uno_de(["María", "Juan", "Ana", "Luis", "Pedro"])
  nombre2: uno_de(["Carlos", "Laura", "Sofía", "Martín", "Elena"])
  accion: uno_de(["llegaron", "vinieron", "estudiaron", "jugaron", "hablaron"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre1} y {nombre2} {accion} tarde', el sujeto es bimembre."

explicacion: |
  Verdadero. El sujeto está compuesto por dos núcleos ('{nombre1}' y '{nombre2}') unidos por la conjunción 'y'. Al tener más de un núcleo, es un sujeto bimembre (específicamente, un sujeto compuesto).
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_unimembre", "pronombre"]

variables:
  pronombre: uno_de(["Yo", "Tú", "Él", "Nosotros", "Ellos"])
  accion: uno_de(["estudio", "estudias", "estudia", "estudiamos", "estudian"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{pronombre} {accion} mañana', el sujeto es unimembre."

explicacion: |
  Verdadero. El sujeto '{pronombre}' es un pronombre personal que funciona como núcleo único. No tiene modificadores adjetivos o determinantes adicionales que lo acompañen en el grupo nominal.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_bimembre", "modificador"]

variables:
  sustantivo: uno_de(["amigos", "compañeros", "vecinos", "colegas", "amantes"])
  complemento: uno_de(["de la escuela", "del trabajo", "del barrio", "de la clase", "de la oficina"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Los {sustantivo} {complemento} llegaron', el sujeto es bimembre."

explicacion: |
  Verdadero. El sujeto 'Los {sustantivo} {complemento}' tiene un núcleo ('{sustantivo}') y un modificador preposicional ('{complemento}'). Al tener núcleo y modificador, es bimembre.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_unimembre", "sustantivo_propio"]

variables:
  nombre: uno_de(["Buenos Aires", "España", "Argentina", "México", "Colombia"])
  accion: uno_de(["es", "tiene", "tiene", "tiene", "tiene"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre} {accion} mucha historia', el sujeto es unimembre."

explicacion: |
  Verdadero. El sujeto '{nombre}' es un sustantivo propio que funciona como núcleo único. No tiene modificadores adjetivos o determinantes adicionales.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_unimembre", "pronombre_demostrativo"]

variables:
  pronombre: uno_de(["Este", "Ese", "Ese", "Esto", "Eso"])
  accion: uno_de(["es", "es", "es", "es", "es"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{pronombre} {accion} importante', el sujeto es unimembre."

explicacion: |
  Verdadero. El sujeto '{pronombre}' es un pronombre demostrativo que funciona como núcleo único. No tiene modificadores adjetivos o determinantes adicionales.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_unimembre", "sustantivo_comun"]

variables:
  sustantivo: uno_de(["El agua", "La luz", "El aire", "El fuego", "La tierra"])
  accion: uno_de(["es", "es", "es", "es", "es"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sustantivo} {accion} vital', el sujeto es unimembre."

explicacion: |
  Verdadero. El sujeto '{sustantivo}' es un sustantivo común que funciona como núcleo único. No tiene modificadores adjetivos o determinantes adicionales.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_tacito", "verdad_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Estudiamos mucho', el sujeto 'nosotros' no aparece escrito pero se sobreentiende por la conjugación verbal. Esta afirmación es:"

explicacion: |
  Correcto. Es un sujeto tácito (o elíptico) porque la persona y número están indicados en el verbo 'estudiamos' (1ra persona del plural).
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_expreso", "verdad_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'María lee un libro', el sujeto 'María' es un sujeto expreso porque aparece claramente en la oración. Esta afirmación es:"

explicacion: |
  Correcto. El sujeto está presente explícitamente en la oración.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_bimembre", "definicion"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "¿Cuál de las siguientes opciones define correctamente a un sujeto bimembre?"

explicacion: |
  Un sujeto bimembre está formado por dos partes: el núcleo (sustantivo o pronombre) y al menos un modificador (adjetivo, determinante, etc.).
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_unimembre", "definicion"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "Un sujeto unimembre se caracteriza por:"

explicacion: |
  Un sujeto unimembre está compuesto por un solo elemento, generalmente un sustantivo o pronombre, sin modificadores.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["identificacion", "sujeto_expreso"]

variables:
  sujeto: uno_de(["El perro", "La casa", "Mi hermano", "Tus amigos"])
  verbo: uno_de(["corre", "brilla", "trabaja", "juegan"])
  complemento: uno_de(["en el parque", "por la noche", "en la oficina", "con sus vecinos"])

respuesta: "{sujeto}"
tipo: input

enunciado: "Identificá el sujeto en la siguiente oración: '{sujeto} {verbo} {complemento}'"

explicacion: |
  El sujeto es quien realiza la acción o sobre quien recae el estado. En este caso, '{sujeto}' es el sujeto.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["concordancia", "sujeto"]

respuesta: 3
tipo: mc
opciones: 4

enunciado: "El sujeto concuerda con el verbo en:"

explicacion: |
  El sujeto y el verbo deben concordar en persona y número.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["nucleo", "sujeto"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "En un sujeto bimembre, el núcleo es:"

explicacion: |
  El núcleo es la palabra principal del sujeto, generalmente un sustantivo o pronombre.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["comparacion", "sujeto"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "La principal diferencia entre sujeto bimembre y unimembre es:"

explicacion: |
  La diferencia radica en la cantidad de elementos que componen al sujeto (núcleo + modificadores vs. solo núcleo).
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_agente", "verdad_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El sujeto siempre es quien realiza la acción en una oración. Esta afirmación es:"

explicacion: |
  Falso. El sujeto puede ser agente (realiza la acción) o paciente (sobre quien recae la acción o estado).
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "avanzado"
  tags: ["impersonal", "sujeto"]

respuesta: 4
tipo: mc
opciones: 4

enunciado: "En las oraciones impersonales (ej: 'Llueve mucho'), el sujeto es:"

explicacion: |
  En las oraciones impersonales no hay sujeto.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["modificadores", "sujeto_bimembre"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "En un sujeto bimembre, ¿cuál de las siguientes palabras NO suele ser un modificador del núcleo?"

explicacion: |
  El núcleo es la palabra principal. Los modificadores acompañan al núcleo.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "avanzado"
  tags: ["comparacion", "sujeto_tacito"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del español, el inglés generalmente requiere un sujeto explícito incluso cuando la persona está clara por la conjugación. Esta afirmación es:"

explicacion: |
  Correcto. El español permite la omisión del sujeto (tácito) con mayor frecuencia que el inglés.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_expreso", "pronombre"]

variables:
  pronombre: uno_de(["Ellos", "Ellas", "Nosotros", "Yo"])
  verbo: uno_de(["juegan", "cantan", "estudiamos", "leo"])
  complemento: uno_de(["fútbol", "canciones", "matemáticas", "un libro"])

respuesta: "{pronombre}"
tipo: input

enunciado: "Identificá el sujeto en la oración: '{pronombre} {verbo} {complemento}'"

explicacion: |
  El sujeto es el pronombre '{pronombre}'.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["uso", "sujeto"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿En qué tipo de texto es más común el uso de sujetos bimembres detallados?"

explicacion: |
  La escritura formal suele utilizar sujetos bimembres para mayor precisión y claridad.
```

### 24 — pregunta 24

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_bimembre", "adjetivo"]

variables:
  det: uno_de(["El", "La", "Los", "Las"])
  sust: uno_de(["perro", "gato", "niño", "mujer"])
  adj: uno_de(["grande", "pequeño", "alegre", "triste"])
  sujeto: "{det} {sust} {adj}"

respuesta: "{sujeto}"
tipo: input

enunciado: "Identificá el sujeto en la oración: '{sujeto} corre rápido.'"

explicacion: |
  El sujeto es '{sujeto}'.
```

### 25 — pregunta 25

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["definicion", "sujeto"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "El sujeto es:"

explicacion: |
  El sujeto es el elemento de la oración que concuerda en persona y número con el verbo.
```
