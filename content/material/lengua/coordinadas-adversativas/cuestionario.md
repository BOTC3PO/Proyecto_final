# Lengua — Coordinadas adversativas (cuestionario, 22 preguntas VBLang)

> Tema: `lengua/coordinadas-adversativas`. Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  n: uno_de([1, 1])

respuesta: "oposición o contraste"
tipo: mc
opciones_explicitas: ["suma de información", "oposición o contraste", "una alternativa entre opciones"]

enunciado: "Una oración coordinada adversativa expresa principalmente..."

explicacion: |
  Las adversativas presentan un contraste: "A, pero B", donde B limita o
  contradice parcialmente lo dicho en A.
```

### 2 — pregunta 2

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["pero", "sin embargo", "no obstante"])

respuesta: verdadero
tipo: vf

enunciado: "El conector \"{conector}\" puede introducir una oración coordinada adversativa."

explicacion: |
  Los tres son nexos adversativos reales: "pero" es el más simple, "sin
  embargo" y "no obstante" son locuciones adversativas más formales.
```

### 3 — pregunta 3

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["y", "o", "ni"])

respuesta: falso
tipo: vf

enunciado: "El conector \"{conector}\" es un nexo adversativo."

explicacion: |
  "Y"/"ni" son copulativos (suman) y "o" es disyuntivo (alternativa) — ninguno
  expresa contraste, así que no son adversativos.
```

### 4 — pregunta 4

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["nexos"]

variables:
  n: uno_de([1, 1])

respuesta: "sino"
tipo: completar

enunciado: "En \"No fue por miedo, ___ por respeto\", el nexo que reemplaza una proposición negativa anterior por la alternativa verdadera es:"

respuestas_validas:
  - "sino"

explicacion: |
  "Sino" se usa específicamente para corregir/reemplazar una negación
  previa por la afirmación correcta — distinto de "pero", que no niega
  lo anterior sino que lo matiza.
```

### 5 — pregunta 5

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["independencia sintactica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En una coordinada adversativa, las dos proposiciones son sintácticamente independientes entre sí (ninguna depende de la otra para tener sentido completo)."

explicacion: |
  A diferencia de la subordinación, en la coordinación ambas oraciones
  tienen igual jerarquía gramatical — el nexo adversativo sólo agrega
  un matiz semántico de contraste, no crea dependencia sintáctica.
```

### 6 — pregunta 6

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "adversativa"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "\"Quería ir al cine, pero estaba lloviendo\" es una oración coordinada..."

explicacion: |
  "Pero" marca el contraste entre el deseo (ir al cine) y la circunstancia
  que lo impide (la lluvia): es adversativa.
```

### 7 — pregunta 7

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["puntuacion"]

variables:
  n: uno_de([1, 1])

respuesta: "van entre comas"
tipo: mc
opciones_explicitas: ["nunca llevan coma", "van entre comas", "siempre van al final de la oración"]

enunciado: "Locuciones adversativas como \"sin embargo\" o \"no obstante\" típicamente..."

explicacion: |
  Al ser conectores discursivos más marcados que "pero", suelen ir
  encerrados entre comas, ya sea al inicio de la segunda proposición o
  en medio de ella.
```

### 8 — pregunta 8

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["analisis"]

variables:
  n: uno_de([1, 1])

respuesta: "el esfuerzo del equipo y la falta de goles"
tipo: mc
opciones_explicitas: ["el clima y el resultado", "el esfuerzo del equipo y la falta de goles", "el árbitro y los jugadores"]

enunciado: "\"El equipo jugó con mucha entrega durante los primeros cuarenta minutos, sin embargo, no logró convertir goles\". ¿Qué dos ideas contrasta \"sin embargo\" acá?"

explicacion: |
  El conector marca la oposición entre el esfuerzo demostrado (entrega)
  y el resultado negativo (no convertir goles).
```

### 9 — pregunta 9

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["pero", "mas"])

respuesta: verdadero
tipo: vf

enunciado: "\"{conector}\" es una conjunción adversativa (aunque \"mas\" sin tilde se usa sobre todo en registros literarios o formales)."

explicacion: |
  Ambas cumplen la misma función adversativa; "mas" es una variante más
  formal/literaria de "pero".
```

### 10 — pregunta 10

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["puntuacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de \"pero\" suele colocarse una coma cuando la primera proposición es larga o se busca marcar una pausa enfática."

explicacion: |
  Con oraciones cortas, "pero" puede ir sin coma previa; con proposiciones
  más extensas, la coma ayuda a marcar el corte antes del contraste.
```

### 11 — pregunta 11

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "copulativa"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "\"Estudió mucho y aprobó el examen\" es una oración coordinada..."

explicacion: |
  "Y" suma información sin contraste (estudió Y además aprobó): es
  copulativa, no adversativa.
```

### 12 — pregunta 12

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["funcion textual"]

variables:
  n: uno_de([1, 1])

respuesta: "anticipar giros o matices en el argumento del autor"
tipo: mc
opciones_explicitas: ["memorizar vocabulario nuevo", "anticipar giros o matices en el argumento del autor", "identificar el género textual"]

enunciado: "Reconocer las coordinadas adversativas en un texto ayuda principalmente a..."

explicacion: |
  Los conectores adversativos señalan que el autor está por matizar,
  limitar o contradecir parcialmente lo que acaba de afirmar — anticiparlos
  mejora la comprensión lectora.
```

### 13 — pregunta 13

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["por el contrario", "sino"])

respuesta: verdadero
tipo: vf

enunciado: "\"{conector}\" puede funcionar como nexo adversativo."

explicacion: |
  Ambos son nexos/locuciones adversativas reconocidas: "por el contrario"
  refuerza la oposición, "sino" reemplaza una negación previa.
```

### 14 — pregunta 14

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["analisis"]

variables:
  n: uno_de([1, 1])

respuesta: "que la complejidad del proceso no niega que sus ideales inspiraran cambios"
tipo: mc
opciones_explicitas: ["que la Revolución de Mayo fue un fracaso total", "que la complejidad del proceso no niega que sus ideales inspiraran cambios", "que no hubo ningún ideal de libertad"]

enunciado: "\"La Revolución de Mayo fue un proceso complejo, pero sus ideales de libertad inspiraron cambios profundos\". ¿Qué matiz introduce \"pero\" acá?"

explicacion: |
  El "pero" no niega la complejidad, sino que agrega una consecuencia
  positiva que igual se dio a pesar de esa complejidad.
```

### 15 — pregunta 15

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  conector: uno_de(["pero", "sin embargo", "no obstante", "sino"])

respuesta: "adversativa"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "Una oración unida con el nexo \"{conector}\" es de tipo coordinada..."

explicacion: |
  Los cuatro son nexos adversativos: expresan contraste u oposición
  entre las dos proposiciones que unen.
```

### 16 — pregunta 16

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["posicion del nexo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La posición del nexo adversativo dentro de la oración es flexible, lo que permite variar el ritmo y el énfasis del discurso."

explicacion: |
  A diferencia de nexos con posición fija, adversativas como "sin embargo"
  pueden ir al inicio de la segunda proposición o insertarse en medio de
  ella.
```

### 17 — pregunta 17

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "disyuntiva"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "\"¿Vamos al cine o nos quedamos en casa?\" es una oración coordinada..."

explicacion: |
  "O" plantea una alternativa entre dos opciones, no un contraste: es
  disyuntiva, no adversativa.
```

### 18 — pregunta 18

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["nexos"]

variables:
  n: uno_de([1, 1])

respuesta: "concesivo-adversativo"
tipo: completar

enunciado: "En ciertos contextos, \"aunque\" puede funcionar con un valor ___ cercano al de las adversativas, aunque formalmente introduce una subordinada."

respuestas_validas:
  - "concesivo-adversativo"
  - "concesivo adversativo"

explicacion: |
  "Aunque" suele introducir subordinadas concesivas, pero semánticamente
  su matiz de contraste lo acerca al valor de las adversativas en varios
  usos.
```

### 19 — pregunta 19

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  n: uno_de([1, 1])

respuesta: "sino"
tipo: mc
opciones_explicitas: ["pero", "sino", "y"]

enunciado: "El nexo específico para corregir una negación previa (\"no X, ... Y\") es:"

explicacion: |
  "Sino" es el único de estos tres que exige que la primera proposición
  sea negativa — reemplaza esa negación por la alternativa correcta.
```

### 20 — pregunta 20

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["escritura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar conectores adversativos correctamente evita que un texto sea una simple lista de ideas desconectadas."

explicacion: |
  Al marcar relaciones de contraste explícitas, los conectores
  adversativos ayudan a construir razonamientos más cohesivos y matizados
  en vez de oraciones sueltas.
```

### 21 — pregunta 21

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  conector: uno_de(["ni", "o", "u"])

respuesta: falso
tipo: vf

enunciado: "El nexo \"{conector}\" expresa un contraste u oposición entre dos proposiciones."

explicacion: |
  "Ni" es copulativo negativo y "o"/"u" son disyuntivos — ninguno expresa
  oposición, por eso no son adversativos.
```

### 22 — pregunta 22

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["examenes"]

variables:
  n: uno_de([1, 1])

respuesta: "analizar la función de los conectores en un fragmento dado"
tipo: mc
opciones_explicitas: ["memorizar la lista de conjunciones de memoria", "analizar la función de los conectores en un fragmento dado", "contar cuántas comas tiene el texto"]

enunciado: "En pruebas de diagnóstico y exámenes finales, un pedido típico sobre este tema es..."

explicacion: |
  Se suele pedir identificar y explicar la función (adversativa,
  copulativa, disyuntiva, etc.) de conectores dentro de un fragmento real.
```

