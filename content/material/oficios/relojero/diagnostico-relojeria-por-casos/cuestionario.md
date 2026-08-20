# Oficios — Relojero — Diagnóstico de relojería por casos (cuestionario, 22 preguntas VBLang)

> Tema: `oficios/relojero/diagnostico-relojeria-por-casos`. Cierre de la ruta del oficio (Sección 6). Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), casos técnicos de arranque/marcha/regulación — cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "basico"
  tags: ["fundamentos"]

variables:
  n: uno_de([1, 1])

respuesta: "entender la historia que cuenta el mecanismo"
tipo: mc
opciones_explicitas: ["entender la historia que cuenta el mecanismo", "sólo reparar el fallo visible sin analizar más", "cambiar todas las piezas por seguridad"]

enunciado: "El diagnóstico en relojería no es solo reparar un fallo, sino..."

explicacion: |
  Cada síntoma (detención, atraso, adelanto) es una pista de una causa
  específica dentro del mecanismo.
```

### 2 — pregunta 2

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "intermedio"
  tags: ["tres partes del sistema"]

variables:
  parte: uno_de(["la fuente de energía (el muelle real)", "la transmisión (engranajes)", "el regulador (espiral y escape)"])

respuesta: verdadero
tipo: vf

enunciado: "\"{parte}\" es una de las tres partes donde puede estar el origen de una falla en un reloj mecánico, según la teoría."

explicacion: |
  Clasificar el fallo en una de estas tres partes es la base del
  pensamiento lógico deductivo del relojero.
```

### 3 — pregunta 3

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "avanzado"
  tags: ["corona trabada"]

variables:
  causa: uno_de(["el mecanismo de cuña está sucio", "el eje de la corona está doblado", "una pieza interna se ha salido de su lugar"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para que la corona quede trabada."

explicacion: |
  Cualquiera de estas tres causas puede generar la resistencia dura e
  inamovible característica de una corona trabada.
```

### 4 — pregunta 4

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "avanzado"
  tags: ["regla de oro"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ante una corona trabada, nunca se debe forzarla; la fuerza bruta es la enemiga número uno de la precisión."

explicacion: |
  Forzar la corona puede generar daños mayores, como romper un puente
  delicado o dañar el mecanismo de carga.
```

### 5 — pregunta 5

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "intermedio"
  tags: ["reloj que atrasa"]

variables:
  causa: uno_de(["aceite viejo y espeso", "un engranaje que roza contra otra pieza", "una pérdida de energía en el barrilete"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para que un reloj atrase."

explicacion: |
  Todas estas causas reducen la fuerza que llega al escape o aumentan
  la fricción en el tren de engranajes.
```

### 6 — pregunta 6

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "avanzado"
  tags: ["reloj que adelanta"]

variables:
  n: uno_de([1, 1])

respuesta: "un problema en el regulador (espiral pegado o desmagnetizado)"
tipo: mc
opciones_explicitas: ["un problema en el regulador (espiral pegado o desmagnetizado)", "exceso de cuerda dada al reloj", "una corona trabada"]

enunciado: "Cuando un reloj mecánico adelanta frecuentemente, la causa suele ser..."

explicacion: |
  El espiral pegado (formando un "nido de pájaro") o desmagnetizado
  hace que el sistema vibre más rápido de lo normal.
```

### 7 — pregunta 7

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "basico"
  tags: ["nido de pajaro"]

variables:
  n: uno_de([1, 1])

respuesta: "nido de pájaro"
tipo: completar

enunciado: "El nombre con el que se conoce coloquialmente a un espiral pegado o enredado en relojería es \"___\"."

respuestas_validas:
  - "nido de pájaro"
  - "nido de pajaro"

explicacion: |
  Es la forma en que se describe informalmente un espiral pegado, causa
  típica de un reloj que adelanta.
```

### 8 — pregunta 8

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "avanzado"
  tags: ["error progresivo"]

variables:
  n: uno_de([1, 1])

respuesta: "el muelle real se está desgastando o hay lubricación insuficiente"
tipo: mc
opciones_explicitas: ["el muelle real se está desgastando o hay lubricación insuficiente", "el reloj tiene demasiada cuerda dada", "el dial está rayado"]

enunciado: "Si un reloj empieza el día bien pero se va desajustando progresivamente durante las horas, la causa más probable es..."

explicacion: |
  Un desgaste del muelle real o una lubricación insuficiente en puntos
  críticos suele explicar este patrón de error creciente.
```

### 9 — pregunta 9

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "intermedio"
  tags: ["posicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el error de marcha de un reloj es constante y grande en todas las posiciones (mesa, muñeca), la causa es interna al mecanismo."

explicacion: |
  Un error que varía sólo un poco con la posición es normal en relojes
  mecánicos; un error grande y constante señala un problema interno
  real.
```

### 10 — pregunta 10

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "basico"
  tags: ["metodo tres pasos"]

variables:
  n: uno_de([1, 1])

respuesta: "verificar la autonomía"
tipo: mc
opciones_explicitas: ["verificar la autonomía", "evaluar la marcha con cronómetro", "desarmar la caja completa"]

enunciado: "El primer paso del método de diagnóstico de tres pasos en relojería es..."

explicacion: |
  Primero hay que confirmar si el reloj tiene energía disponible antes
  de sospechar de otras causas.
```

### 11 — pregunta 11

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "intermedio"
  tags: ["metodo tres pasos"]

variables:
  n: uno_de([1, 1])

respuesta: "suena el \"clic\" del barrilete y la corona gira con suavidad"
tipo: mc
opciones_explicitas: ["suena el \"clic\" del barrilete y la corona gira con suavidad", "la corona está completamente trabada", "el reloj hace un zumbido constante"]

enunciado: "Al dar cuerda, una señal de que la energía llega correctamente al mecanismo es que..."

explicacion: |
  El clic característico del barrilete junto a una corona que gira con
  suavidad confirma que la energía se está transmitiendo.
```

### 12 — pregunta 12

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "intermedio"
  tags: ["metodo tres pasos"]

variables:
  n: uno_de([1, 1])

respuesta: "una lupa para ver si hay polvo o pelos que bloqueen el mecanismo de cuña"
tipo: mc
opciones_explicitas: ["una lupa para ver si hay polvo o pelos que bloqueen el mecanismo de cuña", "más fuerza al girar la corona", "un martillo pequeño"]

enunciado: "Si la corona está dura al dar cuerda, el segundo paso del diagnóstico indica usar..."

explicacion: |
  La observación con lupa evita forzar el mecanismo y permite ver la
  causa real del bloqueo antes de intervenir.
```

### 13 — pregunta 13

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "intermedio"
  tags: ["metodo tres pasos"]

variables:
  n: uno_de([1, 1])

respuesta: "un posicionador o superficie plana y un cronómetro"
tipo: mc
opciones_explicitas: ["un posicionador o superficie plana y un cronómetro", "sólo la vista, sin instrumentos", "un destornillador de precisión"]

enunciado: "El tercer paso, evaluar la marcha, se hace colocando el reloj en..."

explicacion: |
  Un posicionador o superficie plana junto a un cronómetro permite
  medir con precisión si el reloj atrasa o adelanta.
```

### 14 — pregunta 14

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "avanzado"
  tags: ["contexto argentino"]

variables:
  n: uno_de([1, 1])

respuesta: "el aceite seco"
tipo: mc
opciones_explicitas: ["el aceite seco", "el exceso de cuerda", "un espiral nuevo"]

enunciado: "En relojes guardados por años en Argentina, la causa principal de atraso y detención mencionada en la teoría suele ser..."

explicacion: |
  El aceite viejo se seca con el tiempo, generando fricción y pérdida
  de energía en el mecanismo.
```

### 15 — pregunta 15

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "basico"
  tags: ["riesgo de forzar"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Desarmar un reloj al azar sin un criterio claro puede generar daños mayores, como rayar el dial o romper un puente delicado."

explicacion: |
  Por eso el diagnóstico sistemático es tan importante en relojería:
  evita intervenciones destructivas innecesarias.
```

### 16 — pregunta 16

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "intermedio"
  tags: ["golpe fuerte"]

variables:
  n: uno_de([1, 1])

respuesta: "verificar la alineación de los ejes y la limpieza de los rodamientos"
tipo: mc
opciones_explicitas: ["verificar la alineación de los ejes y la limpieza de los rodamientos", "golpear el reloj nuevamente en sentido contrario", "cambiar el dial de inmediato"]

enunciado: "Tras un golpe fuerte que atasca el tren de engranajes por desalineación momentánea, el diagnóstico correcto consiste en..."

explicacion: |
  Revisar alineación y limpieza de rodamientos permite entender el
  atascamiento antes de cualquier intervención mayor.
```

### 17 — pregunta 17

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "avanzado"
  tags: ["corona que no engrana"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una corona que gira libremente sin transmitir ninguna fuerza al mecanismo es un síntoma distinto de una corona trabada."

explicacion: |
  Girar suave sin transmitir fuerza ("corona que no engrana") es un
  diagnóstico diferente a la resistencia dura de una corona trabada:
  ambos requieren revisar el mecanismo de cuña, pero por motivos
  distintos.
```

### 18 — pregunta 18

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "basico"
  tags: ["definicion reloj mecanico"]

variables:
  n: uno_de([1, 1])

respuesta: "un sistema de energía potencial convertida en movimiento regular"
tipo: mc
opciones_explicitas: ["un sistema de energía potencial convertida en movimiento regular", "un dispositivo puramente electrónico", "un sistema que no requiere ningún tipo de energía"]

enunciado: "Según la teoría, un reloj mecánico es..."

explicacion: |
  Es esa conversión de energía (del muelle real) en movimiento regular
  lo que puede fallar en distintos puntos de la cadena.
```

### 19 — pregunta 19

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "avanzado"
  tags: ["caso mixto"]

variables:
  n: uno_de([1, 1])

respuesta: "el regulador (posible espiral pegado o desmagnetizado)"
tipo: mc
opciones_explicitas: ["el regulador (posible espiral pegado o desmagnetizado)", "la corona, probablemente trabada", "el barrilete, sin energía"]

enunciado: "Caso: el reloj funciona y tiene cuerda suficiente, pero adelanta varios minutos por día de forma constante. Conviene revisar primero..."

explicacion: |
  Un adelanto sistemático apunta al regulador, no a la fuente de
  energía (que ya se confirmó que funciona) ni a la corona.
```

### 20 — pregunta 20

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "avanzado"
  tags: ["caso mixto"]

variables:
  n: uno_de([1, 1])

respuesta: "aceite viejo o fricción excesiva en el tren de engranajes"
tipo: mc
opciones_explicitas: ["aceite viejo o fricción excesiva en el tren de engranajes", "un espiral pegado", "un dial rayado"]

enunciado: "Caso: el reloj arranca bien pero se atrasa progresivamente cada día. Antes de sospechar del regulador, conviene descartar..."

explicacion: |
  El atraso suele apuntar a falta de fuerza al escape o fricción
  (aceite viejo), mientras que el adelanto apunta al regulador.
```

### 21 — pregunta 21

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "basico"
  tags: ["filosofia del diagnostico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, el reloj siempre dice la verdad; sólo hay que saber leer sus síntomas sin forzarlo."

explicacion: |
  Es la síntesis del método: cada síntoma (detención, atraso, adelanto)
  es información confiable si se sabe interpretar.
```

### 22 — pregunta 22

```
metadata:
  materia: "oficios"
  tema: "relojero_diagnostico_relojeria_por_casos"
  nivel: "intermedio"
  tags: ["clasificacion de fallos"]

variables:
  categoria: uno_de(["problemas de arranque", "problemas de marcha", "problemas de regulación"])

respuesta: verdadero
tipo: vf

enunciado: "\"{categoria}\" es una de las categorías en las que la teoría clasifica los fallos de un reloj mecánico."

explicacion: |
  Clasificar el fallo en arranque, marcha o regulación es lo que
  permite al relojero desarrollar un pensamiento lógico deductivo.
```

