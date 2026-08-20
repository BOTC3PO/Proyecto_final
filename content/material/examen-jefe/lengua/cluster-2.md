# Examen jefe — Maestro de la Sintaxis

> Logro #85. Completaste el parcial demostrando dominio total de la fonología, la concordancia y todos los modos verbales. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **100 preguntas totales** en 5/5 secciones.

---

## Sección: conciencia-fonologica (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["conciencia_fonologica", "vocabulario"]

enunciado: "¿Qué es la conciencia fonológica?"
tipo: mc
opciones_explicitas:
  - "La capacidad de percibir y manipular los sonidos del habla, por separado de su significado y de la escritura"
  - "La capacidad de reconocer letras escritas en un texto"
  - "El vocabulario total que conoce una persona"
respuesta: "La capacidad de percibir y manipular los sonidos del habla, por separado de su significado y de la escritura"

explicacion: |
  Es una habilidad auditiva y oral, no visual.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["conciencia_fonologica"]

respuesta: verdadero
tipo: vf

enunciado: "Un chico puede tener buena conciencia fonológica sin saber todavía leer ni escribir ninguna letra."

explicacion: |
  Reconocer que dos palabras riman, por ejemplo, no requiere ver esas
  palabras escritas.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["silaba", "vocabulario"]

enunciado: "¿Qué es la conciencia silábica?"
tipo: mc
opciones_explicitas:
  - "La capacidad de dividir una palabra en sus sílabas (contarlas, separarlas o combinarlas)"
  - "La capacidad de reconocer si una palabra está bien escrita"
  - "La capacidad de identificar el significado de una palabra"
respuesta: "La capacidad de dividir una palabra en sus sílabas (contarlas, separarlas o combinarlas)"

explicacion: |
  Es un nivel intermedio entre 'palabra completa' y 'sonido
  individual (fonema)'.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["silaba", "problema"]

variables:
  palabras: [{palabra: "mariposa", silabas: 4}, {palabra: "computadora", silabas: 5}, {palabra: "elefante", silabas: 4}, {palabra: "casa", silabas: 2}, {palabra: "sol", silabas: 1}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: palabras[idx].silabas
tipo: input

enunciado: "¿Cuántas sílabas tiene la palabra '{palabras[idx].palabra}'?"

explicacion: |
  Se cuenta cada golpe de voz al pronunciar la palabra despacio.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["rima", "vocabulario"]

enunciado: "¿Qué significa que dos palabras 'rimen' entre sí?"
tipo: mc
opciones_explicitas:
  - "Que suenan parecido a partir de la vocal acentuada hacia el final de la palabra"
  - "Que empiezan con la misma letra"
  - "Que tienen la misma cantidad de letras"
respuesta: "Que suenan parecido a partir de la vocal acentuada hacia el final de la palabra"

explicacion: |
  Es un nivel de conciencia fonológica llamado 'intrasilábica'.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["rima", "problema"]

variables:
  pares: [{a: "gato", b: "pato", rima: verdadero}, {a: "luna", b: "cuna", rima: verdadero}, {a: "flor", b: "amor", rima: verdadero}, {a: "perro", b: "cielo", rima: falso}, {a: "casa", b: "mesa", rima: falso}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: pares[idx].rima
tipo: vf

enunciado: "¿Riman las palabras '{pares[idx].a}' y '{pares[idx].b}'?"

explicacion: |
  Hay que comparar el sonido desde la vocal acentuada hasta el final,
  no sólo mirar si 'se parecen' a simple vista.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["fonema", "vocabulario"]

enunciado: "¿Qué es un fonema?"
tipo: mc
opciones_explicitas:
  - "El sonido más chico del habla que puede cambiar el significado de una palabra si se reemplaza por otro"
  - "Cada letra del alfabeto escrito"
  - "Una sílaba completa"
respuesta: "El sonido más chico del habla que puede cambiar el significado de una palabra si se reemplaza por otro"

explicacion: |
  Cambiar el fonema /g/ por /p/ en 'gato' da 'pato' — otra palabra.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema"]

respuesta: verdadero
tipo: vf

enunciado: "Un fonema (sonido) no es exactamente lo mismo que una letra (símbolo escrito) — a veces dos letras representan un solo fonema."

explicacion: |
  El dígrafo 'ch' son dos letras que representan un único sonido.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["fonema", "problema"]

tipo: completar
enunciado: "¿Con qué sonido empieza la palabra 'sol'?"
respuestas_validas:
  - "/s/"
  - "s"

explicacion: |
  Se pide el SONIDO inicial, no necesariamente el nombre de la letra.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema", "problema"]

tipo: completar
enunciado: "Si a la palabra 'gato' le sacás el sonido /g/ del principio, ¿qué palabra queda?"
respuestas_validas:
  - "ato"

explicacion: |
  Es un ejercicio clásico de manipulación fonémica: quitar un sonido
  y ver qué palabra nueva resulta.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué la conciencia fonológica es considerada el predictor más fuerte del éxito en la lectura inicial?"
tipo: mc
opciones_explicitas:
  - "Porque sin distinguir bien los sonidos del habla, es muy difícil conectar cada letra con el sonido que representa (el paso siguiente: decodificación)"
  - "Porque los chicos con buena conciencia fonológica ya saben leer de antemano"
  - "No existe ninguna relación real entre ambas habilidades"
respuesta: "Porque sin distinguir bien los sonidos del habla, es muy difícil conectar cada letra con el sonido que representa (el paso siguiente: decodificación)"

explicacion: |
  Es la razón por la que este módulo es la raíz de toda la rama de
  Lengua.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["fonema"]

respuesta: verdadero
tipo: vf

enunciado: "De los niveles de conciencia fonológica, el fonémico (identificar y manipular sonidos individuales) es el más fino y, en general, el más difícil de dominar."

explicacion: |
  Es más fácil notar que dos palabras riman (nivel más grande) que
  aislar un único sonido dentro de una palabra (nivel más chico).
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un maestro de sala de 5 años pide a los chicos que den una palmada por cada sílaba de su nombre. ¿Qué habilidad está trabajando con esta actividad?"
tipo: mc
opciones_explicitas:
  - "Conciencia silábica: dividir una palabra en sus partes sonoras, sin necesitar leer ni escribir nada"
  - "Decodificación: convertir letras en sonidos"
  - "Comprensión lectora de un texto"
respuesta: "Conciencia silábica: dividir una palabra en sus partes sonoras, sin necesitar leer ni escribir nada"

explicacion: |
  Es una actividad típica de nivel inicial, previa a cualquier
  trabajo con letras.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema", "problema"]

variables:
  palabras: [{palabra: "sol", fonemas: 3}, {palabra: "pan", fonemas: 3}, {palabra: "gato", fonemas: 4}, {palabra: "casa", fonemas: 4}]
  idx: uno_de([0, 1, 2, 3])

respuesta: palabras[idx].fonemas
tipo: input

enunciado: "¿Cuántos fonemas (sonidos) tiene la palabra '{palabras[idx].palabra}'?"

explicacion: |
  Se cuenta cada sonido distinto, no cada letra — en estas palabras
  coinciden, pero no siempre es así.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema"]

respuesta: verdadero
tipo: vf

enunciado: "El dígrafo 'ch' (como en 'chico') está formado por dos letras pero representa un único fonema (sonido)."

explicacion: |
  Es el ejemplo clásico de que 'cantidad de letras' y 'cantidad de
  fonemas' de una palabra no siempre coinciden.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema", "problema"]

respuesta: 4
tipo: input

enunciado: "La palabra 'queso' tiene 5 letras (q-u-e-s-o), pero el grupo 'qu' representa un único sonido /k/. ¿Cuántos FONEMAS tiene 'queso'?"

pasos:
  - "Sonidos: /k/ (qu) - /e/ - /s/ - /o/ = 4 fonemas, aunque tenga 5 letras"

explicacion: |
  Es la misma idea del dígrafo, aplicada al grupo 'qu'.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["rima", "aplicacion"]

enunciado: "Muchas canciones y poesías infantiles usan rimas ('un elefante se balanceaba, sobre la tela de una araña') a propósito. ¿Por qué son útiles para trabajar conciencia fonológica en el aula?"
tipo: mc
opciones_explicitas:
  - "Porque ayudan a los chicos a notar de forma natural y divertida cómo suenan las palabras, entrenando el oído antes de trabajar con letras"
  - "Porque enseñan directamente a escribir sin errores de ortografía"
  - "No tienen ninguna utilidad pedagógica real"
respuesta: "Porque ayudan a los chicos a notar de forma natural y divertida cómo suenan las palabras, entrenando el oído antes de trabajar con letras"

explicacion: |
  Es una de las razones por las que la poesía y las canciones son tan
  usadas en la alfabetización inicial.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "intermedio"
  tags: ["ordenar"]

enunciado: "Ordená estos niveles de conciencia fonológica, del sonido más 'grande' (más fácil de percibir) al más 'chico' (más fino)."
tipo: ordenar
opciones_explicitas:
  - "Conciencia fonémica (sonidos individuales)"
  - "Conciencia de palabras (una oración se divide en palabras)"
  - "Conciencia silábica (una palabra se divide en sílabas)"
  - "Conciencia intrasilábica (rima)"
respuesta_orden:
  - "Conciencia de palabras (una oración se divide en palabras)"
  - "Conciencia silábica (una palabra se divide en sílabas)"
  - "Conciencia intrasilábica (rima)"
  - "Conciencia fonémica (sonidos individuales)"

explicacion: |
  El desarrollo va de unidades más grandes y fáciles de percibir a
  unidades cada vez más chicas y finas.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "avanzado"
  tags: ["fonema", "problema"]

tipo: completar
enunciado: "Si en la palabra 'pan' cambiás el sonido /p/ inicial por /f/, ¿qué palabra se forma?"
respuestas_validas:
  - "fan"

explicacion: |
  Es otro ejercicio clásico de manipulación fonémica: sustituir un
  sonido por otro.
```

```
metadata:
  materia: "lengua"
  tema: "conciencia_fonologica"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve trabajar la conciencia fonológica antes de enseñar a leer formalmente?"
tipo: mc
opciones_explicitas:
  - "Porque prepara el oído para distinguir los sonidos del habla, la base necesaria para poder conectar después cada letra con su sonido correspondiente"
  - "Porque enseña directamente el significado de las palabras nuevas"
  - "No tiene relación real con aprender a leer"
respuesta: "Porque prepara el oído para distinguir los sonidos del habla, la base necesaria para poder conectar después cada letra con su sonido correspondiente"

explicacion: |
  Es el punto de partida de toda la rama de Lengua — el siguiente
  paso es `../decodificacion-y-fluidez/`.
```

## Sección: concordancia-nominal-y-verbal (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "basico"
  tags: ["concordancia", "vocabulario"]

enunciado: "¿Qué es la concordancia gramatical?"
tipo: mc
opciones_explicitas:
  - "La regla que exige que ciertas palabras coincidan en género, número o persona dentro de una oración"
  - "El orden en que aparecen las palabras en una oración"
  - "La cantidad de sílabas de una palabra"
respuesta: "La regla que exige que ciertas palabras coincidan en género, número o persona dentro de una oración"

explicacion: |
  Se aplica tanto dentro del sujeto (concordancia nominal) como entre
  sujeto y verbo (concordancia verbal).
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "intermedio"
  tags: ["concordancia_nominal", "vocabulario"]

enunciado: "¿Qué exige la concordancia nominal?"
tipo: mc
opciones_explicitas:
  - "Que el artículo, el sustantivo y el adjetivo de un sintagma nominal coincidan en género y número"
  - "Que el verbo coincida en persona con el sujeto"
  - "Que todas las palabras de la oración empiecen con la misma letra"
respuesta: "Que el artículo, el sustantivo y el adjetivo de un sintagma nominal coincidan en género y número"

explicacion: |
  Como en 'la casa blanca' (femenino singular los tres).
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "intermedio"
  tags: ["concordancia_verbal", "vocabulario"]

enunciado: "¿Qué exige la concordancia verbal?"
tipo: mc
opciones_explicitas:
  - "Que el verbo coincida en número y persona con el sujeto de la oración"
  - "Que el sustantivo coincida en género con el adjetivo"
  - "Que todos los verbos de un texto estén en el mismo tiempo"
respuesta: "Que el verbo coincida en número y persona con el sujeto de la oración"

explicacion: |
  Como en 'los documentos fueron revisados' (sujeto plural, verbo
  plural).
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "avanzado"
  tags: ["concordancia_verbal", "problema"]

enunciado: "¿Cuál de estas oraciones tiene un error de concordancia?"
tipo: mc
opciones_explicitas:
  - "Los documentos fue revisado ayer."
  - "Los niños juegan en el parque."
  - "La chica y el chico llegaron tarde."
respuesta: "Los documentos fue revisado ayer."

explicacion: |
  El sujeto plural 'los documentos' requiere el verbo plural 'fueron
  revisados', no la forma singular 'fue revisado'.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "avanzado"
  tags: ["concordancia_verbal", "problema"]

tipo: completar
enunciado: "Corregí: 'Los documentos fue revisado ayer.' → 'Los documentos ___ ayer.'"
respuestas_validas:
  - "fueron revisados"

explicacion: |
  El sujeto plural exige verbo plural.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "avanzado"
  tags: ["haber_impersonal"]

respuesta: verdadero
tipo: vf

enunciado: "'Había muchas personas en el lugar' es gramaticalmente correcto: el 'haber' impersonal va siempre en singular, aunque el complemento ('personas') sea plural."

explicacion: |
  'Haber' impersonal (existencial) no concuerda con su complemento —
  es una excepción real a la concordancia habitual.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "avanzado"
  tags: ["haber_impersonal", "problema"]

enunciado: "'Habían muchas personas en la fiesta' es un error de concordancia MUY frecuente en el habla cotidiana. ¿Cuál es la forma normativa correcta?"
tipo: mc
opciones_explicitas:
  - "'Había muchas personas en la fiesta' — el 'haber' impersonal va siempre en singular"
  - "'Habían muchas persona en la fiesta' — sólo hay que cambiar el sustantivo a singular"
respuesta: "'Había muchas personas en la fiesta' — el 'haber' impersonal va siempre en singular"

explicacion: |
  Es uno de los errores de concordancia más comunes del español
  rioplatense y de otras variedades, pese a no ser normativo.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "avanzado"
  tags: ["pasiva_refleja"]

respuesta: verdadero
tipo: vf

enunciado: "En 'Se venden pisos', el verbo 'venden' concuerda con 'pisos' porque, en esta construcción de pasiva refleja, 'pisos' funciona como sujeto paciente."

explicacion: |
  Es distinto del caso de 'haber' impersonal: acá 'pisos' SÍ es el
  sujeto gramatical, y el verbo sí debe concordar con él.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "avanzado"
  tags: ["pasiva_refleja", "problema"]

tipo: completar
enunciado: "Completá con la forma correcta de 'vender': 'Se ___ un piso en esta zona.' (un solo piso, singular)"
respuestas_validas:
  - "vende"

explicacion: |
  Con 'un piso' (singular), el verbo también debe ir en singular:
  'se vende'.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "intermedio"
  tags: ["sujeto_compuesto"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando el sujeto de una oración tiene dos o más núcleos unidos por 'y' (sujeto compuesto), el verbo va en plural, aunque cada elemento por separado sea singular."

explicacion: |
  Como en 'la chica y el chico llegaron' — dos elementos singulares,
  verbo en plural.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "avanzado"
  tags: ["sujeto_compuesto", "problema"]

tipo: completar
enunciado: "Completá: 'El profesor y la directora ___ (llegar) juntos a la reunión.'"
respuestas_validas:
  - "llegaron"

explicacion: |
  Sujeto compuesto (dos núcleos): 'el profesor' y 'la directora' →
  verbo en plural.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "intermedio"
  tags: ["concordancia_nominal", "problema"]

enunciado: "¿Cuál de estos adjetivos concuerda correctamente con 'las mesas' (femenino plural)?"
tipo: mc
opciones_explicitas:
  - "nuevas"
  - "nuevo"
  - "nuevos"
respuesta: "nuevas"

explicacion: |
  'Mesas' es femenino plural — el adjetivo debe coincidir en ambos
  rasgos.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "intermedio"
  tags: ["concordancia_nominal", "problema"]

enunciado: "¿Cuál de estos artículos concuerda correctamente con 'águila' (femenino, pero empieza con 'a' tónica)?"
tipo: mc
opciones_explicitas:
  - "el águila (por razones fonéticas, aunque 'águila' sea femenina)"
  - "la águila"
respuesta: "el águila (por razones fonéticas, aunque 'águila' sea femenina)"

explicacion: |
  Es una excepción fonética real del español: los sustantivos
  femeninos que empiezan con 'a' tónica usan 'el' en singular (pero
  siguen siendo femeninos: 'el águila blanca', no 'blanco').
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "avanzado"
  tags: ["concordancia_nominal"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque se diga 'el águila' (con artículo masculino por razones fonéticas), el adjetivo que la acompañe sigue concordando en femenino: 'el águila blanca', no 'el águila blanco'."

explicacion: |
  La excepción fonética afecta sólo al artículo, no cambia el género
  real del sustantivo.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué un error de concordancia (como 'los documentos fue revisado') suele notarse incluso en una lectura muy rápida?"
tipo: mc
opciones_explicitas:
  - "Porque la concordancia es una de las reglas más automatizadas del idioma — el oído/ojo entrenado detecta la discordancia casi sin esfuerzo consciente"
  - "Porque los errores de concordancia son extremadamente raros y por eso llaman la atención"
  - "No hay ninguna razón real, se nota igual que cualquier otro error"
respuesta: "Porque la concordancia es una de las reglas más automatizadas del idioma — el oído/ojo entrenado detecta la discordancia casi sin esfuerzo consciente"

explicacion: |
  Por eso revisar la concordancia es uno de los primeros chequeos al
  corregir un texto.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "intermedio"
  tags: ["concordancia_verbal", "problema"]

tipo: completar
enunciado: "Completá: 'Ustedes ___ (tener) razón.'"
respuestas_validas:
  - "tienen"

explicacion: |
  'Ustedes' es tercera persona del plural, aunque se refiera a
  varias segundas personas (los interlocutores).
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "avanzado"
  tags: ["concordancia_verbal"]

enunciado: "'El equipo ganó el partido' usa el verbo en singular ('ganó'), aunque un equipo esté formado por varias personas. ¿Por qué es correcto?"
tipo: mc
opciones_explicitas:
  - "Porque 'equipo' es un sustantivo colectivo pero gramaticalmente singular — la concordancia sigue la forma gramatical de la palabra, no la cantidad real de personas que representa"
  - "Es un error, debería decir 'ganaron'"
respuesta: "Porque 'equipo' es un sustantivo colectivo pero gramaticalmente singular — la concordancia sigue la forma gramatical de la palabra, no la cantidad real de personas que representa"

explicacion: |
  Es la misma lógica que 'la gente piensa' (singular), no 'la gente
  piensan'.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "avanzado"
  tags: ["pasiva_refleja", "problema"]

enunciado: "¿Cuál de estas dos oraciones tiene la concordancia correcta en la construcción con 'se'?"
tipo: mc
opciones_explicitas:
  - "Se alquilan departamentos."
  - "Se alquila departamentos."
respuesta: "Se alquilan departamentos."

explicacion: |
  'Departamentos' (plural) es el sujeto paciente de la pasiva
  refleja, y el verbo debe concordar con él: 'se alquilan'.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "avanzado"
  tags: ["haber_impersonal", "pasiva_refleja"]

respuesta: verdadero
tipo: vf

enunciado: "'Haber' impersonal (nunca concuerda con su complemento) y la pasiva refleja con 'se' (sí concuerda con el sujeto paciente) son dos construcciones distintas, con reglas de concordancia opuestas entre sí."

explicacion: |
  Es fácil confundirlas porque ambas 'suenan' parecido, pero siguen
  reglas de concordancia contrarias.
```

```
metadata:
  materia: "lengua"
  tema: "concordancia_nominal_y_verbal"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve respetar las reglas de concordancia al hablar y escribir?"
tipo: mc
opciones_explicitas:
  - "Para que la oración se entienda con claridad y sin distraer al lector u oyente con discordancias que 'suenan mal' o generan ambigüedad"
  - "Sólo sirve para aprobar exámenes de gramática"
  - "La concordancia no tiene ninguna función comunicativa real"
respuesta: "Para que la oración se entienda con claridad y sin distraer al lector u oyente con discordancias que 'suenan mal' o generan ambigüedad"

explicacion: |
  Es la base directa de `../sujeto-y-predicado/`: identificar bien el
  sujeto es lo que permite decidir la concordancia correcta del
  verbo.
```

## Sección: conectores-textuales (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["conectores_textuales", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un conector textual une oraciones o párrafos distintos, dándole cohesión al texto — sin conectores, un texto es una sucesión de oraciones sueltas."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/`: es distinto de un nexo, que une proposiciones DENTRO de la misma oración."

explicacion: |
  Verdadero: el conector opera entre oraciones/párrafos, no dentro de
  una sola oración.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["aditivos"]

variables:
  n: uno_de([1, 1])

respuesta: "aditivo"
tipo: mc
opciones_explicitas: ["aditivo", "adversativo", "causal"]

enunciado: "\"El libro es interesante. Además, está muy bien escrito.\" El conector \"además\" es de tipo..."

pasos:
  - "Suma información adicional en la misma dirección de la idea anterior."

explicacion: |
  Los conectores aditivos suman información en el mismo sentido.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["adversativos"]

variables:
  n: uno_de([1, 1])

respuesta: "adversativo"
tipo: mc
opciones_explicitas: ["aditivo", "adversativo", "consecutivo"]

enunciado: "\"Estudió mucho. Sin embargo, no aprobó.\" El conector \"sin embargo\" es de tipo..."

pasos:
  - "Opone la segunda idea a lo que se esperaría de la primera."

explicacion: |
  Los conectores adversativos marcan contraste u oposición entre
  ideas.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["causales"]

variables:
  n: uno_de([1, 1])

respuesta: "causal"
tipo: mc
opciones_explicitas: ["causal", "consecutivo", "temporal"]

enunciado: "\"Llegó tarde porque perdió el colectivo.\" El conector \"porque\" es de tipo..."

pasos:
  - "Explica la razón del hecho mencionado antes."

explicacion: |
  Los conectores causales explican el motivo o razón de algo.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["consecutivos"]

variables:
  n: uno_de([1, 1])

respuesta: "consecutivo"
tipo: mc
opciones_explicitas: ["causal", "consecutivo", "aditivo"]

enunciado: "\"Estudió mucho. Por lo tanto, aprobó.\" El conector \"por lo tanto\" es de tipo..."

pasos:
  - "Marca el resultado o consecuencia de lo dicho antes."

explicacion: |
  Los conectores consecutivos marcan el resultado que se sigue de la
  idea anterior.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "basico"
  tags: ["temporales"]

variables:
  conectores: ["primero", "luego", "finalmente"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{conectores[idx]}\" es un conector temporal, que ordena los hechos en el tiempo."

pasos:
  - "Este tipo de conector es especialmente frecuente en textos narrativos (ver `../tipos-textuales/`)."

explicacion: |
  Verdadero: los conectores temporales ordenan la secuencia de hechos
  o pasos.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["de_orden"]

variables:
  n: uno_de([1, 1])

respuesta: "de orden/organización"
tipo: mc
opciones_explicitas: ["de orden/organización", "temporal", "causal"]

enunciado: "\"En primer lugar\" y \"por último\", usados para organizar las PARTES de un texto (no el contenido narrado), son conectores de tipo..."

pasos:
  - "Organizan la estructura del texto en sí, no una secuencia de hechos narrados."

explicacion: |
  Los conectores de orden organizan las partes del propio texto,
  distinto de ordenar hechos en el tiempo.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["ejemplificadores"]

variables:
  conectores: ["por ejemplo", "es decir", "a saber"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{conectores[idx]}\" es un conector ejemplificador, que introduce un ejemplo o aclaración de lo dicho antes."

pasos:
  - "Frecuente en textos expositivos, para hacer más concreta una afirmación general."

explicacion: |
  Verdadero: los ejemplificadores introducen casos concretos que
  ilustran lo afirmado.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "tipos_textuales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tipo textual narrativo se apoya mucho en conectores temporales (\"luego\", \"después\", \"finalmente\")."

pasos:
  - "Ver `../tipos-textuales/`: coincide con la marca de conectores temporales ya vista ahí para el narrativo."

explicacion: |
  Verdadero: cada tipo textual privilegia ciertas familias de
  conectores según su propósito.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "tesis", "argumentos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El texto argumentativo se apoya mucho en conectores causales y consecutivos, coherente con la lógica de \"porque\"/\"por lo tanto\" usada al construir argumentos."

pasos:
  - "Ver `../argumentos/`: esos mismos conectores ya se mencionaron como típicos de la introducción de argumentos."

explicacion: |
  Verdadero: los conectores causales/consecutivos son centrales para
  el texto argumentativo.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "errores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Estudió mucho. Por lo tanto, no aprobó\" suena raro porque \"por lo tanto\" anuncia una consecuencia esperada, y la segunda idea contradice esa expectativa."

pasos:
  - "En ese caso correspondería un conector adversativo (\"sin embargo\"), no uno consecutivo."

explicacion: |
  Verdadero: elegir mal la familia de conector genera una relación
  lógica incoherente entre las ideas, más allá de que suene raro.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "practica"]

variables:
  relaciones: ["sumar una idea nueva en la misma dirección", "marcar que la segunda idea contradice la expectativa de la primera", "explicar la razón de un hecho", "marcar el resultado de lo dicho antes"]
  familias: ["aditivo", "adversativo", "causal", "consecutivo"]
  idx: uno_de([0, 1, 2, 3])

respuesta: familias[idx]
tipo: mc
opciones_explicitas: ["aditivo", "adversativo", "causal", "consecutivo"]

enunciado: "Para \"{relaciones[idx]}\", conviene usar un conector..."

pasos:
  - "Cada familia de conector corresponde a un tipo específico de relación lógica entre ideas."

explicacion: |
  Elegir la familia correcta de conector depende de qué relación
  lógica real existe entre las dos ideas que se unen.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "oracion_compuesta", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Y\" (en \"Juan estudió y aprobó\") es un nexo dentro de una misma oración; \"además\" (en \"Juan estudió. Además, aprobó.\") es un conector textual entre dos oraciones distintas."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/`: la diferencia clave es si unen proposiciones dentro de una oración o entre oraciones/párrafos distintos."

explicacion: |
  Verdadero: nexo y conector textual cumplen funciones similares en
  escalas distintas (oración vs. texto).
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "significado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los conectores no cambian los hechos que se están contando, sólo señalan qué relación lógica existe entre esos hechos (suma, contraste, causa, consecuencia)."

pasos:
  - "El mismo par de oraciones puede leerse con relaciones distintas según qué conector se elija."

explicacion: |
  Verdadero: el conector es una señal de relación lógica, no un
  cambio del contenido informativo en sí.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "sin embargo"
tipo: completar

enunciado: "En \"El plan parecía perfecto. Sin embargo, algo salió mal en el último momento.\", ¿cuál es el conector textual usado?"

pasos:
  - "Marca el contraste entre la expectativa (\"parecía perfecto\") y lo que realmente pasó."

explicacion: |
  \"Sin embargo\" es un conector adversativo que marca la oposición
  entre las dos ideas.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "por lo tanto"
tipo: mc
opciones_explicitas: ["por lo tanto", "sin embargo", "por ejemplo"]

enunciado: "\"Llovió toda la noche. ..., el partido se suspendió.\" ¿Qué conector completa mejor la relación de consecuencia entre ambas ideas?"

pasos:
  - "La lluvia (causa) llevó a la suspensión (consecuencia): corresponde un conector consecutivo."

explicacion: |
  \"Por lo tanto\" marca correctamente que la segunda oración es
  consecuencia de la primera.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "variedad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Sin embargo\", \"no obstante\" y \"en cambio\" son conectores distintos que pueden expresar el mismo tipo de relación adversativa."

pasos:
  - "Elegir entre ellos suele ser una decisión de estilo, no cambia la relación lógica señalada."

explicacion: |
  Verdadero: dentro de una misma familia hay varias opciones de
  conector con matices de estilo, no de lógica.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "intermedio"
  tags: ["conectores_textuales", "metodo"]

enunciado: "Ordená los pasos para revisar si los conectores de un texto propio están bien elegidos."
tipo: ordenar
opciones_explicitas:
  - "Identificar cada conector usado entre oraciones o párrafos"
  - "Determinar qué relación lógica real existe entre las ideas que conecta (suma, contraste, causa, consecuencia)"
  - "Comparar esa relación con la familia del conector elegido"
  - "Corregir si el conector elegido no corresponde a la relación lógica real"
respuesta_orden:
  - "Identificar cada conector usado entre oraciones o párrafos"
  - "Determinar qué relación lógica real existe entre las ideas que conecta (suma, contraste, causa, consecuencia)"
  - "Comparar esa relación con la familia del conector elegido"
  - "Corregir si el conector elegido no corresponde a la relación lógica real"

explicacion: |
  El proceso va de identificar los conectores usados a verificar si
  corresponden realmente a la relación lógica entre las ideas.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "cohesion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los conectores textuales son una de las tres herramientas de cohesión estudiadas en esta subrama, junto con la referencia (anáfora/catáfora) y la progresión temática."

pasos:
  - "Ver `../referencia-anafora-y-catafora/` y `../progresion-tematica/`: los tres son nodos hermanos que dependen de `../produccion-escrita-compleja/`."

explicacion: |
  Verdadero: los tres temas abordan distintos mecanismos de cohesión
  textual, complementarios entre sí.
```

```
metadata:
  materia: "lengua"
  tema: "conectores_textuales"
  nivel: "avanzado"
  tags: ["conectores_textuales", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al revisar un texto propio (etapa de revisión de `../produccion-escrita-compleja/`), conviene chequear específicamente si los conectores usados reflejan la relación lógica real entre las ideas, no sólo si \"suenan bien\"."

pasos:
  - "Un conector que suena natural pero indica una relación lógica equivocada puede confundir al lector sobre la argumentación real del texto."

explicacion: |
  Verdadero: la aplicación práctica de este tema es específicamente
  auditar la lógica de los conectores durante la revisión de un
  texto propio.
```

## Sección: conjugacion-verbal-indicativo (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "basico"
  tags: ["indicativo", "vocabulario"]

enunciado: "¿Qué expresa el modo indicativo?"
tipo: mc
opciones_explicitas:
  - "Acciones o estados que el hablante considera reales u objetivos"
  - "Acciones que el hablante desea, duda o considera irreales"
  - "Órdenes o pedidos directos"
respuesta: "Acciones o estados que el hablante considera reales u objetivos"

explicacion: |
  Es el modo 'por defecto' para afirmar hechos.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "intermedio"
  tags: ["preterito_imperfecto", "problema"]

tipo: completar
enunciado: "El verbo 'hablar' en primera persona del plural del pretérito imperfecto de indicativo es: nosotros ___."
respuestas_validas:
  - "hablábamos"
  - "hablabamos"

explicacion: |
  La primera persona del plural del pretérito imperfecto de los
  verbos en '-ar' termina en '-ábamos'.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "avanzado"
  tags: ["preterito_indefinido", "irregulares", "problema"]

enunciado: "¿Cuál es la forma correcta del verbo 'ir' en la tercera persona del plural del pretérito indefinido?"
tipo: mc
opciones_explicitas:
  - "fueron"
  - "iban"
  - "irán"
respuesta: "fueron"

explicacion: |
  'Ir' es muy irregular en el pretérito indefinido: fui, fuiste, fue,
  fuimos, fuisteis, fueron — comparte estas formas con 'ser'.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "avanzado"
  tags: ["pluscuamperfecto", "tiempos_compuestos"]

respuesta: verdadero
tipo: vf

enunciado: "El pretérito pluscuamperfecto de indicativo se forma con el imperfecto de 'haber' (había, habías, había...) + el participio del verbo principal."

explicacion: |
  Ejemplo: 'había comido', 'habíamos llegado'.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "intermedio"
  tags: ["tiempos_verbales", "problema"]

enunciado: "¿A qué tiempo del indicativo corresponde la forma 'cantaré'?"
tipo: mc
opciones_explicitas:
  - "Futuro simple"
  - "Pretérito imperfecto"
  - "Condicional simple"
respuesta: "Futuro simple"

explicacion: |
  La terminación '-é' de futuro (cantar-é) indica una acción que
  todavía no ocurrió.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "intermedio"
  tags: ["tiempos_verbales", "problema"]

enunciado: "¿A qué tiempo del indicativo corresponde la forma 'cantaba'?"
tipo: mc
opciones_explicitas:
  - "Pretérito imperfecto"
  - "Pretérito indefinido"
  - "Futuro simple"
respuesta: "Pretérito imperfecto"

explicacion: |
  Expresa una acción pasada habitual o en desarrollo ('cantaba todos
  los días').
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "intermedio"
  tags: ["tiempos_verbales", "problema"]

enunciado: "¿A qué tiempo del indicativo corresponde la forma 'canté'?"
tipo: mc
opciones_explicitas:
  - "Pretérito indefinido"
  - "Pretérito imperfecto"
  - "Condicional simple"
respuesta: "Pretérito indefinido"

explicacion: |
  Expresa una acción pasada puntual y terminada ('canté esa canción
  ayer, una sola vez').
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "intermedio"
  tags: ["tiempos_verbales", "problema"]

enunciado: "¿A qué tiempo del indicativo corresponde la forma 'cantaría'?"
tipo: mc
opciones_explicitas:
  - "Condicional simple"
  - "Futuro simple"
  - "Pretérito indefinido"
respuesta: "Condicional simple"

explicacion: |
  Expresa una acción hipotética ('cantaría si me invitaran') o
  cortesía.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "basico"
  tags: ["presente", "problema"]

tipo: completar
enunciado: "Completá: el verbo 'comer' en primera persona del singular del presente de indicativo es: yo ___."
respuestas_validas:
  - "como"

explicacion: |
  Es el tiempo más usado para hablar de hechos actuales o habituales.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "intermedio"
  tags: ["futuro_simple", "problema"]

tipo: completar
enunciado: "Completá: el verbo 'vivir' en tercera persona del singular del futuro simple es: ella ___."
respuestas_validas:
  - "vivirá"
  - "vivira"

explicacion: |
  El futuro simple regular agrega la terminación '-á' al infinitivo
  completo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "intermedio"
  tags: ["condicional", "problema"]

tipo: completar
enunciado: "Completá: el verbo 'salir' en primera persona del singular del condicional simple es: yo ___."
respuestas_validas:
  - "saldría"
  - "saldria"

explicacion: |
  'Salir' es irregular en condicional/futuro: cambia la raíz a
  'saldr-' antes de agregar la terminación.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "intermedio"
  tags: ["tiempos_compuestos", "vocabulario"]

enunciado: "¿Cómo se forma el pretérito perfecto compuesto (como en 'he comido')?"
tipo: mc
opciones_explicitas:
  - "Presente de 'haber' + participio del verbo principal"
  - "Imperfecto de 'haber' + participio del verbo principal"
  - "Futuro de 'haber' + infinitivo del verbo principal"
respuesta: "Presente de 'haber' + participio del verbo principal"

explicacion: |
  'He' es presente de 'haber'; 'comido' es el participio de 'comer'.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "avanzado"
  tags: ["tiempos_compuestos", "problema"]

tipo: completar
enunciado: "Completá: el verbo 'escribir' en primera persona del plural del pretérito perfecto compuesto es: nosotros ___."
respuestas_validas:
  - "hemos escrito"

explicacion: |
  'Escribir' tiene participio irregular: 'escrito' (no 'escribido').
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "basico"
  tags: ["indicativo"]

respuesta: verdadero
tipo: vf

enunciado: "El modo indicativo es el que se usa por defecto para afirmar hechos que el hablante considera reales, a diferencia del subjuntivo (duda, deseo, irrealidad)."

explicacion: |
  Es la distinción central que separa ambos modos verbales.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "avanzado"
  tags: ["persona", "problema"]

enunciado: "La forma verbal 'hablábamos' (pretérito imperfecto), ¿a qué persona gramatical corresponde?"
tipo: mc
opciones_explicitas:
  - "Primera persona del plural (nosotros)"
  - "Tercera persona del singular (él/ella)"
  - "Segunda persona del singular (tú)"
respuesta: "Primera persona del plural (nosotros)"

explicacion: |
  La terminación '-ábamos' es específica de 'nosotros' en el
  imperfecto de los verbos '-ar'.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "Para contar algo que pasó una sola vez y ya terminó ('ayer fui al médico'), ¿qué tiempo del indicativo corresponde usar?"
tipo: mc
opciones_explicitas:
  - "Pretérito indefinido, porque expresa una acción pasada puntual y terminada"
  - "Pretérito imperfecto, porque expresa una acción habitual"
  - "Futuro simple, porque habla de algo que todavía no pasó"
respuesta: "Pretérito indefinido, porque expresa una acción pasada puntual y terminada"

explicacion: |
  El pretérito imperfecto, en cambio, se usaría para 'iba al médico
  todos los meses' (acción habitual repetida).
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "avanzado"
  tags: ["irregulares", "problema"]

enunciado: "En la oración 'Fue el mejor jugador del equipo', ¿de qué verbo viene la forma 'fue'?"
tipo: mc
opciones_explicitas:
  - "De 'ser' (fue el mejor jugador = era/resultó ser el mejor)"
  - "De 'ir' (fue = se dirigió hacia algún lugar)"
respuesta: "De 'ser' (fue el mejor jugador = era/resultó ser el mejor)"

explicacion: |
  Sólo el contexto de la oración distingue si 'fue' viene de 'ir' o
  de 'ser', ya que comparten las mismas formas en pretérito
  indefinido.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "avanzado"
  tags: ["tiempos_compuestos", "problema"]

tipo: completar
enunciado: "Completá: el verbo 'terminar' en tercera persona del singular del futuro compuesto es: él ___."
respuestas_validas:
  - "habrá terminado"

explicacion: |
  Futuro de 'haber' (habrá) + participio ('terminado').
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "intermedio"
  tags: ["tiempos_compuestos"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los tiempos compuestos del indicativo se forman con alguna conjugación del verbo 'haber' seguida del participio del verbo principal."

explicacion: |
  Cambia el tiempo de 'haber' (presente, imperfecto, futuro,
  condicional), pero el participio siempre acompaña.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_indicativo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve dominar los tiempos del modo indicativo?"
tipo: mc
opciones_explicitas:
  - "Para poder narrar hechos reales en cualquier momento (pasado, presente o futuro) con precisión, y como base necesaria antes de abordar el modo subjuntivo"
  - "Sólo sirve para hablar del presente"
  - "El indicativo no tiene ninguna aplicación práctica fuera del aula"
respuesta: "Para poder narrar hechos reales en cualquier momento (pasado, presente o futuro) con precisión, y como base necesaria antes de abordar el modo subjuntivo"

explicacion: |
  El módulo que sigue, `../conjugacion-verbal-subjuntivo/`, retoma
  muchas de las mismas irregularidades de raíz ya vistas acá.
```

## Sección: conjugacion-verbal-subjuntivo (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "basico"
  tags: ["subjuntivo", "vocabulario"]

enunciado: "¿Qué expresa el modo subjuntivo?"
tipo: mc
opciones_explicitas:
  - "Duda, deseo, emoción, ruego o valoración subjetiva"
  - "Hechos que el hablante considera reales y ciertos"
  - "Órdenes directas exclusivamente"
respuesta: "Duda, deseo, emoción, ruego o valoración subjetiva"

explicacion: |
  Se opone al indicativo, que expresa hechos considerados reales.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["subjuntivo", "problema"]

enunciado: "¿En cuál de estas oraciones se usa correctamente el subjuntivo?"
tipo: mc
opciones_explicitas:
  - "Espero que vengas pronto."
  - "Espero que vienes pronto."
  - "Es obvio que vengas."
respuesta: "Espero que vengas pronto."

explicacion: |
  Tras verbos de deseo (esperar, querer, desear) + 'que', el verbo de
  la subordinada va en subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["subjuntivo", "indicativo"]

respuesta: verdadero
tipo: vf

enunciado: "Con expresiones de certeza ('sé que', 'es obvio que', 'es cierto que'), corresponde usar el modo indicativo, no el subjuntivo."

explicacion: |
  'Sé que hablas español' (indicativo, correcto) vs. 'Sé que hables
  español' (subjuntivo, incorrecto acá).
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["presente_subjuntivo", "problema"]

tipo: completar
enunciado: "Completá: 'Espero que tú ___ (hablar) con ella.'"
respuestas_validas:
  - "hables"

explicacion: |
  Presente de subjuntivo de 'hablar', segunda persona del singular.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["imperfecto_subjuntivo"]

respuesta: verdadero
tipo: vf

enunciado: "El pretérito imperfecto de subjuntivo tiene dos formas válidas: una en '-ra' y otra en '-se' (ej.: hablara / hablase), ambas igualmente normativas."

explicacion: |
  Son intercambiables en la mayoría de los contextos, reconocidas
  ambas por la RAE.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["imperfecto_subjuntivo", "problema"]

tipo: completar
enunciado: "La forma 'cantara' (pretérito imperfecto de subjuntivo) tiene una forma alternativa igualmente correcta, terminada en '-se'. ¿Cuál es?"
respuestas_validas:
  - "cantase"

explicacion: |
  Ambos paradigmas ('-ra' y '-se') son intercambiables.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["subjuntivo", "problema"]

enunciado: "¿Por qué la oración 'Espero que vengas pronto' usa el verbo 'vengas' en subjuntivo y no 'vienes' en indicativo?"
tipo: mc
opciones_explicitas:
  - "Porque 'esperar' es un verbo de deseo, y los verbos de deseo + 'que' piden subjuntivo en la oración subordinada"
  - "Porque 'venir' siempre se conjuga en subjuntivo, sin importar el contexto"
  - "No hay ninguna razón gramatical, ambas formas son igual de correctas"
respuesta: "Porque 'esperar' es un verbo de deseo, y los verbos de deseo + 'que' piden subjuntivo en la oración subordinada"

explicacion: |
  Es la regla práctica central de este módulo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["subjuntivo", "problema"]

enunciado: "'Sé que hables español' tiene un error de modo verbal. ¿Cuál es la corrección correcta?"
tipo: mc
opciones_explicitas:
  - "'Sé que hablas español' — 'saber' expresa certeza y pide indicativo, no subjuntivo"
  - "'Sé que hablarás español' — hay que usar futuro en vez de subjuntivo"
respuesta: "'Sé que hablas español' — 'saber' expresa certeza y pide indicativo, no subjuntivo"

explicacion: |
  'Saber' (conocimiento seguro) no admite subjuntivo en la
  subordinada.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["imperativo", "problema"]

tipo: completar
enunciado: "Para pedirle a un amigo que cierre la puerta, le decís: '___ la puerta, por favor.' (imperativo, tú, 'cerrar')"
respuestas_validas:
  - "cierra"
  - "Cierra"

explicacion: |
  El imperativo de 'cerrar' para 'tú' toma la forma del presente de
  indicativo sin la 's' final: 'cierras' → 'cierra'.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["imperativo", "subjuntivo"]

respuesta: verdadero
tipo: vf

enunciado: "El imperativo NEGATIVO usa exactamente las mismas formas que el presente de subjuntivo: '¡No cierres la puerta!' usa 'cierres', la misma forma que 'espero que cierres la puerta'."

explicacion: |
  Es la conexión directa entre imperativo y subjuntivo mencionada en
  `teoria.md`.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["subjuntivo", "vocabulario"]

enunciado: "¿Cuál de estos grupos de expresiones pide subjuntivo en la oración subordinada?"
tipo: mc
opciones_explicitas:
  - "Deseo, duda, emoción, ruego, valoración subjetiva (esperar que, dudar que, alegrarse de que, pedir que, es una pena que)"
  - "Certeza (saber que, es obvio que, es cierto que, ver que)"
respuesta: "Deseo, duda, emoción, ruego, valoración subjetiva (esperar que, dudar que, alegrarse de que, pedir que, es una pena que)"

explicacion: |
  El segundo grupo (certeza) pide indicativo, no subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["subjuntivo", "problema"]

tipo: completar
enunciado: "Completá: 'Me alegro de que ustedes ___ (estar) bien.'"
respuestas_validas:
  - "estén"

explicacion: |
  'Alegrarse de que' expresa emoción, así que pide subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué el modo subjuntivo suele considerarse más difícil de dominar que el indicativo, incluso para hablantes nativos en producción escrita formal?"
tipo: mc
opciones_explicitas:
  - "Porque elegirlo depende de reconocer una intención subjetiva (duda, deseo, emoción) en el verbo principal, no de una regla mecánica simple como en el indicativo"
  - "Porque el subjuntivo no tiene ninguna forma verbal propia"
  - "Porque el subjuntivo sólo existe en la lengua escrita, nunca en la hablada"
respuesta: "Porque elegirlo depende de reconocer una intención subjetiva (duda, deseo, emoción) en el verbo principal, no de una regla mecánica simple como en el indicativo"

explicacion: |
  Es la razón por la que este módulo se separó del indicativo, aunque
  comparta buena parte del mismo vocabulario de formas.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["subjuntivo", "problema"]

tipo: completar
enunciado: "Completá: 'Te pido que me ___ (ayudar) con esto.'"
respuestas_validas:
  - "ayudes"

explicacion: |
  'Pedir que' expresa ruego, pide subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["subjuntivo", "indicativo"]

respuesta: verdadero
tipo: vf

enunciado: "'Creo que viene' (indicativo, cierta seguridad) y 'No creo que venga' (subjuntivo, duda) usan el mismo verbo principal ('creer'), pero cambian de modo según si la oración es afirmativa o negativa."

explicacion: |
  Negar 'creer' introduce duda, y por eso cambia a subjuntivo — un
  matiz avanzado de la regla general.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["subjuntivo", "problema"]

tipo: completar
enunciado: "Completá: 'Dudo que ellos ___ (llegar) a tiempo.'"
respuestas_validas:
  - "lleguen"

explicacion: |
  'Dudar que' expresa duda, pide subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "intermedio"
  tags: ["subjuntivo", "problema"]

enunciado: "'Es una pena que no puedas venir' usa el subjuntivo 'puedas'. ¿Por qué?"
tipo: mc
opciones_explicitas:
  - "Porque 'es una pena que' expresa una valoración subjetiva sobre el hecho, no una afirmación de certeza"
  - "Porque el verbo 'poder' siempre se conjuga en subjuntivo"
  - "Es un error, debería decir 'puedes'"
respuesta: "Porque 'es una pena que' expresa una valoración subjetiva sobre el hecho, no una afirmación de certeza"

explicacion: |
  Las expresiones de valoración ('es una pena que', 'es genial que')
  son otro disparador típico del subjuntivo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "avanzado"
  tags: ["imperativo", "problema"]

tipo: completar
enunciado: "Completá el imperativo negativo: 'No ___ (hablar) tan fuerte.' (a 'tú')"
respuestas_validas:
  - "hables"

explicacion: |
  El imperativo negativo de 'tú' usa la misma forma que el presente
  de subjuntivo de segunda persona.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Al escribir una oración con 'que', ¿qué conviene revisar para decidir si el verbo de la subordinada va en indicativo o en subjuntivo?"
tipo: mc
opciones_explicitas:
  - "Qué tipo de verbo o expresión introduce la oración: si es de certeza (indicativo) o de deseo/duda/emoción/ruego/valoración (subjuntivo)"
  - "Sólo importa si el verbo principal es regular o irregular"
  - "El modo no depende del verbo principal, es aleatorio"
respuesta: "Qué tipo de verbo o expresión introduce la oración: si es de certeza (indicativo) o de deseo/duda/emoción/ruego/valoración (subjuntivo)"

explicacion: |
  Es la estrategia práctica central de todo este módulo.
```

```
metadata:
  materia: "lengua"
  tema: "conjugacion_verbal_subjuntivo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el modo subjuntivo?"
tipo: mc
opciones_explicitas:
  - "Para expresar duda, deseo, emoción, ruego o valoración subjetiva, distinguiéndolo de las afirmaciones de hechos reales del indicativo"
  - "Para narrar hechos que ya ocurrieron con certeza"
  - "Sólo se usa en la lengua escrita formal, nunca al hablar"
respuesta: "Para expresar duda, deseo, emoción, ruego o valoración subjetiva, distinguiéndolo de las afirmaciones de hechos reales del indicativo"

explicacion: |
  Cierra la cadena de `../conjugacion-verbal-indicativo/`: los dos
  modos verbales centrales del español.
```
