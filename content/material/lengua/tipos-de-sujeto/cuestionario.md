# Lengua — tipos de sujeto (cuestionario, 22 preguntas VBLang)

> Tema: `lengua/tipos-de-sujeto`. Ver `teoria.md` en esta misma carpeta.

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
  tags: ["sujeto_simple", "nucleo"]

variables:
  nombre_propio: uno_de(["Pedro", "Laura", "Martín", "Sofía", "Tomás"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre_propio} juega al fútbol', el sujeto es simple porque tiene un solo núcleo."

explicacion: |
  Verdadero. El sujeto '{nombre_propio}' tiene un único núcleo (el nombre propio) — eso lo hace simple, tenga o no modificadores acompañándolo.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_simple", "modificadores"]

variables:
  adjetivo: uno_de(["grandes", "inteligentes", "divertidos", "serios", "alegres"])
  sustantivo: uno_de(["niños", "estudiantes", "amigos", "compañeros", "vecinos"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Los {sustantivo} {adjetivo} llegaron tarde', el sujeto sigue siendo simple, aunque tenga modificadores."

explicacion: |
  Verdadero. 'Los {sustantivo} {adjetivo}' tiene un único núcleo ('{sustantivo}'), acompañado de modificadores ('Los', '{adjetivo}'). Tener modificadores no lo convierte en compuesto — sigue siendo simple porque hay un solo núcleo.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_compuesto", "coordinacion"]

variables:
  nombre1: uno_de(["María", "Juan", "Ana", "Luis", "Pedro"])
  nombre2: uno_de(["Carlos", "Laura", "Sofía", "Martín", "Elena"])
  accion: uno_de(["llegaron", "vinieron", "estudiaron", "jugaron", "hablaron"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre1} y {nombre2} {accion} tarde', el sujeto es compuesto."

explicacion: |
  Verdadero. El sujeto tiene dos núcleos ('{nombre1}' y '{nombre2}') coordinados por 'y'. Al tener más de un núcleo, es un sujeto compuesto — y por eso el verbo va en plural.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_simple", "pronombre"]

variables:
  pronombre: uno_de(["Yo", "Tú", "Él", "Nosotros", "Ellos"])
  accion: uno_de(["estudio", "estudias", "estudia", "estudiamos", "estudian"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{pronombre} {accion} mañana', el sujeto es simple."

explicacion: |
  Verdadero. El sujeto '{pronombre}' es un pronombre personal que funciona como único núcleo — eso lo hace simple.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_simple", "modificador"]

variables:
  sustantivo: uno_de(["amigos", "compañeros", "vecinos", "colegas"])
  complemento: uno_de(["de la escuela", "del trabajo", "del barrio", "de la clase"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Los {sustantivo} {complemento} llegaron', el sujeto es simple."

explicacion: |
  Verdadero. 'Los {sustantivo} {complemento}' tiene un único núcleo ('{sustantivo}') con un modificador preposicional ('{complemento}') — sigue siendo simple, porque hay un solo núcleo.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["oracion_bimembre_unimembre", "distincion"]

respuesta: falso
tipo: vf

enunciado: "'Bimembre' y 'unimembre' son términos que clasifican al sujeto según tenga o no modificadores."

explicacion: |
  Falso. 'Bimembre' y 'unimembre' clasifican a la ORACIÓN completa (si se puede dividir en sujeto y predicado, o no) — no al sujeto. El sujeto se clasifica, entre otros criterios, en simple o compuesto según su número de núcleos.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "avanzado"
  tags: ["oracion_unimembre", "impersonal"]

respuesta: verdadero
tipo: vf

enunciado: "'¡Fuego!' o 'Llueve mucho' son ejemplos de oraciones unimembres, porque no se pueden dividir en sujeto y predicado."

explicacion: |
  Verdadero. Son oraciones unimembres: no tienen la estructura de dos miembros (sujeto + predicado) que sí tiene una oración bimembre como 'Juan corre'.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_simple", "sustantivo_propio"]

variables:
  nombre: uno_de(["Buenos Aires", "España", "Argentina", "México", "Colombia"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre} tiene mucha historia', el sujeto es simple."

explicacion: |
  Verdadero. El sujeto '{nombre}' es un sustantivo propio que funciona como único núcleo — eso lo hace simple.
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
  tags: ["sujeto_compuesto", "definicion"]

respuesta: "dos o mas nucleos coordinados"
tipo: completar
respuestas_validas:
  - "dos o mas nucleos coordinados"
  - "dos o más núcleos coordinados"
  - "dos o mas nucleos"
  - "dos núcleos coordinados"

enunciado: "Un sujeto compuesto se define por tener ___."

explicacion: |
  Un sujeto compuesto tiene dos o más núcleos coordinados entre sí (por ejemplo, unidos por 'y'), a diferencia del sujeto simple, que tiene un único núcleo.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_simple", "definicion"]

respuesta: "un solo nucleo"
tipo: completar
respuestas_validas:
  - "un solo nucleo"
  - "un solo núcleo"
  - "un unico nucleo"
  - "un único núcleo"

enunciado: "Un sujeto simple se define por tener ___, tenga o no modificadores."

explicacion: |
  Un sujeto simple tiene un único núcleo (sustantivo o pronombre) — puede o no llevar modificadores, eso no cambia su clasificación como simple.
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

enunciado: "En un sujeto simple con modificadores, el núcleo es:"

explicacion: |
  El núcleo es la palabra principal del sujeto, generalmente un sustantivo o pronombre — el resto son modificadores que lo acompañan.
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

enunciado: "La principal diferencia entre sujeto simple y sujeto compuesto es:"

explicacion: |
  La diferencia radica en el número de núcleos: uno solo (simple) o dos o más coordinados (compuesto) — no la presencia o ausencia de modificadores.
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
  nivel: "avanzado"
  tags: ["comparacion", "sujeto_tacito"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del español, el inglés generalmente requiere un sujeto explícito incluso cuando la persona está clara por la conjugación. Esta afirmación es:"

explicacion: |
  Correcto. El español permite la omisión del sujeto (tácito) con mayor frecuencia que el inglés.
```

### 21 — pregunta 21

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

### 22 — pregunta 22

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
