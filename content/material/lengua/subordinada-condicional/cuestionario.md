# Lengua — subordinada condicional (cuestionario, 22 preguntas VBLang)

> Tema: `lengua/subordinada-condicional`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["identificacion", "oracion_compuesta"]

variables:
  condicion: uno_de(["llueve", "hace calor", "estudian"])
  consecuencia: uno_de(["no salimos", "tomamos agua", "van al cine"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Si {condicion}, {consecuencia}', la subordinada es condicional y expresa una posibilidad real."

explicacion: |
  La estructura "Si + presente de indicativo, futuro/_presente" es típica de las condicionales reales o probables.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["gramatica", "indicativo"]

variables:
  frase: "Si llueve, me quedo en casa."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es una condicional real correcta porque usa el presente de indicativo en la subordinada."

explicacion: |
  Para expresar condiciones probables o reales, se usa el presente de indicativo en la subordinada ('llueve') y presente o futuro en la principal.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["irrealidad", "pasado"]

variables:
  frase: "Si hubiera sabido, habría venido."
  es_condicional: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es una oración compuesta con subordinada condicional irreal referida al pasado."

explicacion: |
  Usa el pluscuamperfecto de subjuntivo ('hubiera sabido') en la subordinada y el condicional compuesto ('habría venido') en la principal, típico de situaciones irreales en el pasado.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "subjuntivo"]

variables:
  frase: "No saldré a menos que termines."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es gramaticalmente correcta porque 'a menos que' exige el modo subjuntivo."

explicacion: |
  Las conjunciones condicionales negativas como "a menos que", "salvo que" o "excepto que" siempre rigen el subjuntivo.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["tiempos_verbales", "futuro"]

variables:
  frase: "Si iré a la playa, hará sol."
  es_correcta: falso

respuesta: falso
tipo: vf

enunciado: "La oración '{frase}' es correcta."

explicacion: |
  Es incorrecta. La subordinada condicional no puede ir en futuro ("Si iré"). Debe ser "Si irá" (imposible) o mejor "Si hará" (incorrecto por sujeto) -> "Si hace sol, iré a la playa". "Si" no se followed by futuro en la subordinada.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["sintaxis", "orden"]

variables:
  frase: "No iremos si no llueve."
  es_condicional: verdadero

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{frase}', la subordinada condicional puede ir al final de la oración principal."

explicacion: |
  Las oraciones subordinadas condicionales pueden ir antes o después de la principal sin cambiar el significado lógico.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "subjuntivo"]

variables:
  frase: "Iremos al cine salvo que tengas otra cosa que hacer."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es correcta porque 'salvo que' rige el subjuntivo."

explicacion: |
  "Salvo que" es una conjunción condicional negativa que exige el modo subjuntivo en la subordinada.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "registro_formal"]

variables:
  frase: "En caso de que llueva, llevamos paraguas."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es correcta en registro formal."

explicacion: |
  "En caso de que" es una conjunción condicional formal que rige el subjuntivo ("llueva"). Es correcta.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["conjuncciones", "subjuntivo"]

variables:
  frase: "No vendré a no ser que me inviten."
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La oración '{frase}' es correcta porque 'a no ser que' rige el subjuntivo."

explicacion: |
  "A no ser que" es una conjunción condicional negativa que exige el modo subjuntivo.
```

### 10 — pregunta 10

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["identificacion", "si"]

variables:
  sujeto: uno_de(["Juan", "María", "El equipo", "Nosotros"])
  verbo1: uno_de(["llueva", "haga", "tenga", "venga"])
  verbo2: uno_de(["iremos", "comeremos", "saliremos", "caminaremos"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Si {verbo1}, {sujeto} {verbo2}', la cláusula 'Si {verbo1}' es una subordinada condicional."

explicacion: |
  La cláusula introducida por "si" establece una condición para la acción principal, por lo que funciona como subordinada condicional.
```

### 11 — pregunta 11

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["concordancia", "indicativo"]

variables:
  a: random(1, 5)
  b: random(6, 10)
  condicion: "real"

respuesta: "Si llueve, no saldremos"
tipo: input

enunciado: "Completa la oración con la forma verbal correcta para expresar una condición probable: 'Si ______ (lluvia), no saldremos al parque'."

explicacion: |
  Para situaciones reales o probables, se usa el presente de indicativo en la subordinada ("llueva") y el futuro en la principal.
```

### 12 — pregunta 12

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["sintaxis", "complemento"]

variables:
  verbo_principal: uno_de(["ir", "venir", "comer", "dormir"])

respuesta: "complemento circunstancial de condición"
tipo: input

enunciado: "En la oración 'No iré si no llamas', la subordinada 'si no llamas' funciona sintácticamente como un/a..."

explicacion: |
  La subordinada condicional actúa como complemento circunstancial de condición del verbo de la oración principal.
```

### 13 — pregunta 13

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["hipotesis", "subjuntivo"]

variables:
  sujeto: uno_de(["Yo", "Él", "Tú", "Ella"])
  verbo_irreal: "tuviera"

respuesta: "hipotética"
tipo: input

enunciado: "Clasifica la realidad de la oración: 'Si {sujeto} {verbo_irreal} tiempo, estudiaría más'. ¿Es real, probable o hipotética/irreal?"

explicacion: |
  El uso del imperfecto de subjuntivo en la condicional y condicional simple en la principal indica una situación hipotética o irreal en el presente.
```

### 14 — pregunta 14

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "basico"
  tags: ["estructura", "puntuacion"]

variables:
  cond: "Si estudias mucho"
  conse: "aprobarás el examen"

respuesta: verdadero
tipo: vf

enunciado: "En español, es correcto invertir el orden: 'Aprobarás el examen si estudias mucho' sin cambiar el significado ni la gramática."

explicacion: |
  La subordinada condicional puede ir antes o después de la principal. Si va al principio, lleva coma; si va al final, no la lleva.
```

### 15 — pregunta 15

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["tiempos", "indicativo"]

variables:
  a: random(1, 10)
  b: random(11, 20)
  tiempo_sub: "presente"
  tiempo_main: "futuro"

respuesta: "presente"
tipo: input

enunciado: "Para expresar una condición probable en el futuro, ¿qué tiempo verbal se usa en la subordinada con 'si'? 'Si ______ (verbo), iré'."

explicacion: |
  En condiciones probables, la subordinada usa el presente de indicativo, aunque se refiera al futuro.
```

### 16 — pregunta 16

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["matiz", "exclusion"]

variables:
  contexto: "negativo"

respuesta: "exclusión"
tipo: input

enunciado: "La conjunción 'a menos que' introduce una subordinada condicional con matiz de..."

explicacion: |
  "A menos que" implica una excepción o condición negativa: la acción principal no ocurrirá salvo que se cumpla la condición.
```

### 17 — pregunta 17

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["error", "subjuntivo"]

variables:
  verbo_erroneo: "tendré"
  verbo_correcto: "tenga"

respuesta: "tenga"
tipo: input

enunciado: "Corrige el verbo en la oración irreal: 'Si yo ______ (tener) suerte, ganaría la lotería'."

explicacion: |
  Para situaciones irreales, la subordinada requiere pretérito imperfecto de subjuntivo ('tuviera' o 'tuviese'), no futuro ni presente.
```

### 18 — pregunta 18

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["condicion", "requisito"]

variables:
  requisito: "vengas"

respuesta: verdadero
tipo: vf

enunciado: "'Con tal de que' introduce una condición necesaria o requisito indispensable. 'Iré con tal de que vengas' es correcta."

explicacion: |
  "Con tal de que" exige el cumplimiento de la condición para que se realice la acción principal.
```

### 19 — pregunta 19

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["sinonimia", "paráfrasis"]

variables:
  original: "Si no comes, tendrás hambre"
  equivalente: "A menos que comas, tendrás hambre"

respuesta: verdadero
tipo: vf

enunciado: "La oración 'A menos que comas, tendrás hambre' tiene el mismo significado lógico que 'Si no comes, tendrás hambre'."

explicacion: |
  Ambas expresan la misma condición negativa. "A menos que" equivale a "si no".
```

### 20 — pregunta 20

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["pasado", "irreal"]

variables:
  verbo_sub: "hubiera tenido"
  verbo_main: "habría viajado"

respuesta: "irreal del pasado"
tipo: input

enunciado: "Clasifica: 'Si hubiera tenido tiempo, habría viajado'. ¿Qué tipo de realidad expresa?"

explicacion: |
  Expresa una condición irreal en el pasado (no se cumplió) y su consecuencia hipotética también en el pasado.
```

### 21 — pregunta 21

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "intermedio"
  tags: ["comparacion", "indicativo_vs_subjuntivo"]

variables:
  indicativo: "Si llueve, me mojo"
  subjuntivo: "Si lloviera, me mojaría"

respuesta: "probable"
tipo: input

enunciado: "¿Qué tipo de realidad expresa 'Si llueve, me mojo' en comparación con 'Si lloviera...'?"

explicacion: |
  'Si llueve' (indicativo) expresa probabilidad. 'Si lloviera' (subjuntivo) expresa hipótesis o irrealidad.
```

### 22 — pregunta 22

```
metadata:
  materia: "lengua"
  tema: "subordinada_condicional"
  nivel: "avanzado"
  tags: ["variantes", "subjuntivo"]

variables:
  forma1: "hubiera"
  forma2: "hubiese"

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Si hubiese llovido, no habríamos salido', el uso de 'hubiese' es correcto y equivalente a 'hubiera'."

explicacion: |
  Ambas formas del pretérito pluscuamperfecto de subjuntivo son válidas en español.
```
