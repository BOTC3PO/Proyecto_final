# Lengua — Conciencia fonológica (cuestionario, 20 preguntas VBLang)

> Tema: `P1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la conciencia fonológica

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

### 2 — No requiere saber leer

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

### 3 — Qué es la conciencia silábica

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

### 4 — Problema: contar sílabas

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

### 5 — Qué es la rima

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

### 6 — Problema: identificar si dos palabras riman

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

### 7 — Qué es un fonema

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

### 8 — Fonema no es lo mismo que letra

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

### 9 — Problema: identificar el sonido inicial

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

### 10 — Problema: quitar un sonido

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

### 11 — Por qué predice el éxito lector

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

### 12 — La conciencia fonémica es el nivel más difícil

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

### 13 — Aplicación: actividad de palmadas por sílaba

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

### 14 — Problema: contar fonemas de una palabra simple

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

### 15 — El dígrafo 'ch' es un solo fonema

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

### 16 — Problema: fonemas de una palabra con dígrafo

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

### 17 — Aplicación: identificar rimas en una canción infantil

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

### 18 — Orden de los niveles, de más grande a más chico

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
respuesta_orden: ["Conciencia de palabras (una oración se divide en palabras)", "Conciencia silábica (una palabra se divide en sílabas)", "Conciencia intrasilábica (rima)", "Conciencia fonémica (sonidos individuales)"]
explicacion: |
  El desarrollo va de unidades más grandes y fáciles de percibir a
  unidades cada vez más chicas y finas.
```

### 19 — Problema: cambiar un sonido para formar otra palabra

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

### 20 — Cierre: para qué sirve la conciencia fonológica

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
