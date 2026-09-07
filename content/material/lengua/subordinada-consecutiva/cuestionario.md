# Lengua — subordinada consecutiva (cuestionario, 45 preguntas VBLang)

> Tema: `lengua/subordinada-consecutiva`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "correlato"]

variables:
  adjetivo: uno_de(["cansado", "contento", "enfadado", "sorprendido"])
  consecuencia: uno_de(["no pudo dormir", "lloró de alegría", "gritó", "se quedó mudo"])

respuesta: "tan"
tipo: completar

enunciado: "Ella estaba {adjetivo} ___ que {consecuencia}."

explicacion: |
  La estructura "tan + adjetivo + que" introduce una subordinada consecutiva que expresa el resultado de un grado intenso de la cualidad.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "cantidad"]

variables:
  base: random(10, 50)
  incremento: random(5, 20)
  total: base + incremento

respuesta: total
tipo: input

enunciado: "Si tengo {base} manzanas y compro {incremento} más, tengo tanta fruta que me alcanza para hacer {total} pasteles. ¿Cuántas manzanas tengo en total?"

explicacion: |
  {base} + {incremento} = {total}. La estructura consecutiva es "tanta fruta que...": 'tanta' concuerda en género femenino con 'fruta', y 'que' introduce la consecuencia (la cantidad de pasteles que permite hacer).
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "conjuncion"]

variables:
  causa: uno_de(["El ruido era ensordecedor", "Llovió sin parar", "El examen fue muy largo"])
  efecto: uno_de(["salimos al patio", "nos quedamos adentro", "todos se cansaron"])

respuesta: "que"
tipo: completar

enunciado: "{causa}, ___ {efecto}."

explicacion: |
  La conjunción "que" es el nexo principal que introduce la subordinada consecutiva en este tipo de estructuras correlativas.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "logica"]

variables:
  grado: random(1, 5)
  sustantivo: uno_de(["paciencia", "dinero", "tiempo", "paciencia"])
  
  # Lógica simple para generar la respuesta basada en el grado
  # Si grado es 1->3: consecuencia leve, 4-5: consecuencia fuerte
  # Para simplificar el DSL, usamos una variable predefinida de consecuencia
  consecuencia_leve: "poco a poco"
  consecuencia_fuerte: "rápidamente"

respuesta: "que"
tipo: completar

enunciado: "Tiene {sustantivo} ___ {consecuencia_leve} (si grado <= 3) o ___ {consecuencia_fuerte} (si grado > 3)."

explicacion: |
  Independientemente de la consecuencia, el nexo que introduce la subordinada consecutiva es "que".
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "estructura"]

variables:
  correlato: uno_de(["tan", "tanto", "tal"])
  sustantivo: uno_de(["casa", "coche", "libro", "mesa"])

respuesta: "tal"
tipo: mc
opciones_explicitas: ["tan", "tanto", "tal", "cuanto"]

enunciado: "Si queremos enfatizar la naturaleza del sustantivo '{sustantivo}' en una consecutiva, usamos '___ + {sustantivo} + que'. ¿Cuál es el correlato?"

explicacion: |
  "Tal" se usa ante sustantivos para enfatizar la cualidad o naturaleza del mismo, seguido de "que".
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "analisis"]

variables:
  principal: uno_de(["El frío era intenso", "La noticia fue terrible", "El trabajo era pesado"])
  subordinada: uno_de(["que temblaba", "que lloró", "que se rindió"])

respuesta: principal
tipo: completar

enunciado: "En la oración '{principal} ___ {subordinada}', ¿cuál es la oración principal?"

explicacion: |
  La oración principal contiene el correlato gradativo (el grado intenso) y es la causa de la consecuencia. Aquí, "El frío era intenso" es la principal.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["subordinada", "consecutiva", "cantidad"]

variables:
  x: random(2, 10)
  resultado: x * 2

respuesta: resultado
tipo: input

enunciado: "Si 'tanto' equivale a {x} y la consecuencia es el doble, ¿cuánto es el resultado? (Escribe solo el número)."

explicacion: |
  Ejercicio que vincula la lógica matemática con la estructura "tanto... que" para verificar la comprensión de la relación de proporcionalidad en la consecuencia.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["subordinada", "consecutiva", "sintaxis"]

variables:
  funcion: uno_de(["Complemento Directo", "Complemento Circunstancial de Consecuencia", "Atributo", "Sujeto"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La subordinada consecutiva funciona sintácticamente como un '{funcion}' de la oración principal."

explicacion: |
  La subordinada consecutiva funciona como un Complemento Circunstancial de Consecuencia (o Atributo en casos específicos con 'ser', pero generalmente CC). Si la opción es CD, Atributo o Sujeto, es falso.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "vocabulario"]

variables:
  adj: uno_de(["difícil", "fácil", "largo", "corto"])
  sust: uno_de(["alumnos", "libros", "tiempo", "paciencia"])

respuesta: "tan"
tipo: mc
opciones_explicitas: ["tan", "tanto", "tal", "mucho"]

enunciado: "El examen fue ___ {adj} que {sust} abandonaron. ¿Qué palabra falta?"

explicacion: |
  "Tan" se usa con adjetivos o adverbios. Como "{adj}" es un adjetivo, la forma correcta es "tan".
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "identificacion"]

variables:
  principal: uno_de(["Estaba tan cansado", "Tenía tanto sueño", "Fue tal el ruido"])
  subordinada: uno_de(["que no pude estudiar", "que me dormí", "que salí corriendo"])

respuesta: subordinada
tipo: completar

enunciado: "En la oración '{principal} ___ {subordinada}', ¿cuál es la subordinada consecutiva?"

explicacion: |
  La subordinada consecutiva es la parte que expresa la consecuencia, introducida por "que".
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "grado"]

variables:
  base: random(100, 200)
  porcentaje: random(10, 50)
  resultado: floor(base * porcentaje / 100)

respuesta: resultado
tipo: input

enunciado: "Si el grado es {base} y la consecuencia es el {porcentaje}% de ese grado, ¿cuánto es el resultado? (Redondea al entero más cercano)."

explicacion: |
  Ejercicio que refuerza la idea de que la consecutiva implica una medida o resultado derivado del grado.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "nexo"]

variables:
  estructura: uno_de(["tan... que", "tanto... que", "tal... que"])

respuesta: "que"
tipo: mc
opciones_explicitas: ["porque", "que", "si", "cuando"]

enunciado: "En la estructura '{estructura}', ¿cuál es la conjunción que introduce la consecutiva?"

explicacion: |
  La conjunción es "que".
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "tal"]

variables:
  sust: uno_de(["sorpresa", "alegría", "tristeza", "ira"])
  accion: uno_de(["se le cayó el celular", "no podía hablar", "corrió hacia la salida", "se abrazaron"])

respuesta: "tal"
tipo: completar

enunciado: "Fue {sust} ___ que {accion}."

explicacion: |
  "Tal" se usa con sustantivos para enfatizar la naturaleza del hecho, seguido de "que".
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["subordinada", "consecutiva", "cantidad"]

variables:
  x: random(5, 15)
  resultado: x + 10

respuesta: resultado
tipo: input

enunciado: "Si 'tanto' equivale a {x} y la consecuencia es {x} + 10, ¿cuánto es el resultado? (Escribe solo el número)."

explicacion: |
  Ejercicio que vincula la lógica matemática con la estructura "tanto... que" para verificar la comprensión de la relación de proporcionalidad en la consecuencia.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "vocabulario"]

variables:
  adj: uno_de(["difícil", "fácil", "largo", "corto"])
  sust: uno_de(["alumnos", "libros", "tiempo", "paciencia"])

respuesta: "tan"
tipo: mc
opciones_explicitas: ["tan", "tanto", "tal", "mucho"]

enunciado: "El examen fue ___ {adj} que {sust} abandonaron. ¿Qué palabra falta?"

explicacion: |
  "Tan" se usa con adjetivos o adverbios. Como "{adj}" es un adjetivo, la forma correcta es "tan".
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "identificacion"]

variables:
  principal: uno_de(["Estaba tan cansado", "Tenía tanto sueño", "Fue tal el ruido"])
  subordinada: uno_de(["que no pude estudiar", "que me dormí", "que salí corriendo"])

respuesta: subordinada
tipo: completar

enunciado: "En la oración '{principal} ___ {subordinada}', ¿cuál es la subordinada consecutiva?"

explicacion: |
  La subordinada consecutiva es la parte que expresa la consecuencia, introducida por "que".
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["subordinada", "consecutiva", "grado"]

variables:
  base: random(100, 200)
  porcentaje: random(10, 50)
  resultado: floor(base * porcentaje / 100)

respuesta: resultado
tipo: input

enunciado: "Si el grado es {base} y la consecuencia es el {porcentaje}% de ese grado, ¿cuánto es el resultado? (Redondea al entero más cercano)."

explicacion: |
  Ejercicio que refuerza la idea de que la consecutiva implica una medida o resultado derivado del grado.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["subordinada", "consecutiva", "nexo"]

variables:
  estructura: uno_de(["tan... que", "tanto... que", "tal... que"])

respuesta: "que"
tipo: mc
opciones_explicitas: ["porque", "que", "si", "cuando"]

enunciado: "En la estructura '{estructura}', ¿cuál es la conjunción que introduce la consecutiva?"

explicacion: |
  La conjunción es "que".
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "tan_que"]

variables:
  adjetivo: uno_de(["rápido", "lento", "fuerte", "débil"])
  consecuencia: uno_de(["se cansó", "llegó tarde", "ganó la carrera", "perdió el tren"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Corrió tan {adjetivo} que {consecuencia}', la parte subrayada es una subordinada consecutiva."

explicacion: |
  La estructura 'tan + adjetivo/adverbio + que' introduce una consecuencia directa del grado expresado en la principal. Por lo tanto, la afirmación es correcta.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["correlato", "tanto_que"]

variables:
  sustantivo: uno_de(["miedo", "ganas", "tiempo", "dinero"])
  cantidad: random(5, 20)

respuesta: "tanto"
tipo: completar

enunciado: "Tenía ___ {cantidad} {sustantivo} que no podía dormir. ¿Qué palabra falta para formar la consecutiva?"

explicacion: |
  La estructura correcta es 'tanto + sustantivo + que'. 'Tanto' concuerda en género y número con el sustantivo 'miedo' (masculino singular) o se usa invariablemente como adverbio de cantidad antes del sustantivo en esta construcción específica de grado.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["diferenciacion", "comparativa_vs_consecutiva"]

variables:
  a: random_float(1.0, 9.9)
  b: random_float(1.0, 9.9)

respuesta: falso
tipo: vf

enunciado: "Si en una oración se usa 'más... que' para igualar dos términos, estamos ante una subordinada consecutiva."

explicacion: |
  'Más... que' suele introducir una comparativa de igualdad o superioridad. La consecutiva requiere un correlato de grado (tan, tanto, tal) seguido de 'que' que indica RESULTADO, no comparación directa entre dos términos equivalentes.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "tal_que"]

variables:
  sustantivo: uno_de(["sorpresa", "alegría", "tristeza", "ira"])
  efecto: uno_de(["se cayó", "lloró", "sonrió", "gritó"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Fue tal su {sustantivo} que se {efecto}', la cláusula final es consecutiva."

explicacion: |
  La estructura 'tal + sustantivo + que' indica que la intensidad de la causa provocó un efecto inevitable. Es una subordinada consecutiva clásica.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "tan_que"]

variables:
  sujeto: uno_de(["El niño", "La profesora", "El perro", "El coche"])
  adjetivo: uno_de(["intenso", "fuerte", "agudo", "molesto"])
  resultado: uno_de(["tembló", "sudó", "huyó", "paró"])

respuesta: "tan"
tipo: completar

enunciado: "El ruido fue ___ {adjetivo} que el perro se {resultado}. ¿Qué correlato falta?"

explicacion: |
  '{adjetivo}' es un adjetivo que cualifica a 'ruido' (el sustantivo 'ruido' ya está en la oración; lo que falta es el correlato antes del adjetivo). Como el hueco precede a un adjetivo, se usa 'tan' (no 'tanto', que se usaría directamente ante el sustantivo: 'Hizo tanto ruido que...').
```

### 24 — pregunta 24

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["analisis", "tanto_que"]

variables:
  sustantivo: uno_de(["trabajo", "esfuerzo", "paciencia", "paciencia"])
  resultado: uno_de(["se rindió", "lo logró", "lo abandonó", "lo disfrutó"])

respuesta: "tanto"
tipo: completar

enunciado: "Hizo ___ {sustantivo} que al final lo {resultado}. ¿Qué palabra completa la consecutiva?"

explicacion: |
  Cuando el correlato va seguido de un sustantivo que indica cantidad, se utiliza 'tanto'. 'Tanto trabajo' implica una cantidad tal que provoca el resultado.
```

### 25 — pregunta 25

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["logica", "inferencia"]

variables:
  causa: uno_de(["llovió mucho", "hizo mucho frío", "comió rápido", "durmió poco"])
  efecto: uno_de(["se inundó la calle", "hubo hielo", "le dio indigestión", "estaba cansado"])

respuesta: verdadero
tipo: vf

enunciado: "Si 'Llovió tanto que se inundó la calle' es consecutiva, entonces 'Llovió mucho y se inundó la calle' es una coordinación copulativa."

explicacion: |
  La primera oración tiene una relación de causa-efecto interna (consecutiva). La segunda une dos hechos con 'y', siendo una coordinación copulativa que no implica necesariamente la misma intensidad causal, aunque los hechos sean similares. La afirmación sobre la clasificación gramatical es correcta.
```

### 26 — pregunta 26

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["diferenciacion", "tal_vs_tanto"]

variables:
  sust: uno_de(["miedo", "temor"])
  corr_tanto: "tanto"
  corr_tal: "tal"

respuesta: "tal"
tipo: completar

enunciado: "Fue ___ su {sust} que se paralizó. ¿Es más adecuado 'tanto' o 'tal' para enfatizar la naturaleza del sentimiento?"

explicacion: |
  'Tal' se usa a menudo con sustantivos abstractos para enfatizar la intensidad o la naturaleza del estado (sorpresa, miedo, admiración), aunque 'tanto' también es posible. En contextos literarios o enfáticos, 'tal' es muy común para 'sorpresa' o 'miedo'.
```

### 27 — pregunta 27

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["nexo", "que"]

variables:
  nexo: "que"

respuesta: verdadero
tipo: vf

enunciado: "En una subordinada consecutiva, la conjunción 'que' es obligatoria para introducir la consecuencia."

explicacion: |
  Sí, la estructura básica de la consecutiva requiere un correlato (tan, tanto, tal) seguido de la conjunción 'que' que introduce la cláusula de resultado.
```

### 28 — pregunta 28

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "tanto_que"]

variables:
  sust: uno_de(["fuerza", "energía", "paciencia", "paciencia"])
  resultado: uno_de(["llegó al final", "se agotó", "ganó", "perdió"])

respuesta: "tanto"
tipo: completar

enunciado: "Tuvo ___ {sust} para {resultado}. ¿Qué correlato falta?"

explicacion: |
  'Tanto' es el correlato adecuado cuando va seguido de un sustantivo que indica cantidad o grado de una cualidad medible.
```

### 29 — pregunta 29

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "analisis_sintactico"]

variables:
  oracion: uno_de(["Está tan cansado que duerme", "Es tan alto como su padre", "Corrió más rápido que tú"])

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Está tan cansado que duerme' contiene una subordinada consecutiva."

explicacion: |
  La estructura 'tan + adjetivo + que' introduce una consecuencia. 'Que duerme' es la subordinada consecutiva.
```

### 30 — pregunta 30

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["analisis", "grado"]

variables:
  adj: uno_de(["rápido", "lento", "fuerte", "débil"])
  corr: "tan"

respuesta: "tan"
tipo: completar

enunciado: "El coche es ___ {adj} que llega primero. ¿Qué palabra falta?"

explicacion: |
  'Tan' se usa con adjetivos y adverbios para expresar un grado intenso que provoca un resultado.
```

### 31 — pregunta 31

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tal_que"]

variables:
  sust: uno_de(["alegría", "tristeza", "ira", "paz"])
  resultado: uno_de(["sonrió", "lloró", "gritó", "calló"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Fue tal su {sust} que {resultado}', la oración es consecutiva."

explicacion: |
  La estructura 'tal + sustantivo + que' es una forma clásica de subordinada consecutiva, indicando que la intensidad del sentimiento provocó la acción.
```

### 32 — pregunta 32

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["diferenciacion", "causal_vs_consecutiva"]

variables:
  causa: "lluvia"
  efecto: "inundación"

respuesta: falso
tipo: vf

enunciado: "La oración 'Como llovió mucho, se inundó la calle' es una subordinada consecutiva."

explicacion: |
  'Como' introduce una subordinada causal (explica la causa). La consecutiva expresa el RESULTADO de la principal, no la causa. La oración dada es una oración compuesta con subordinada causal.
```

### 33 — pregunta 33

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "adverbio"]

variables:
  adv: uno_de(["rápidamente", "lentamente", "bien", "mal"])
  resultado: uno_de(["terminó primero", "se equivocó", "ganó", "perdió"])

respuesta: "tan"
tipo: completar

enunciado: "Corrió ___ {adv} que {resultado}. ¿Qué palabra falta?"

explicacion: |
  'Tan' se usa con adverbios (como 'rápidamente') para indicar un grado que provoca una consecuencia.
```

### 34 — pregunta 34

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["identificacion", "tanto_que"]

variables:
  sust: uno_de(["trabajo", "esfuerzo", "paciencia", "paciencia"])
  corr: "tanto"

respuesta: "tanto"
tipo: completar

enunciado: "Hizo ___ {sust} que lo logró. ¿Qué palabra falta?"

explicacion: |
  'Tanto' es el correlato correcto antes de un sustantivo que indica cantidad o grado.
```

### 35 — pregunta 35

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["logica", "relacion"]

variables:
  causa: "temor"
  efecto: "parálisis"

respuesta: verdadero
tipo: vf

enunciado: "En una subordinada consecutiva, la oración principal expresa la causa o el grado, y la subordinada expresa la consecuencia."

explicacion: |
  Correcto. La consecutiva depende de un correlato de grado en la principal para expresar un resultado inevitable.
```

### 36 — pregunta 36

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tal_que"]

variables:
  sust: uno_de(["sorpresa", "admiración", "miedo", "ira"])
  resultado: uno_de(["se quedó mudo", "aplaudieron", "huyó", "gritó"])

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Fue tal su {sust} que {resultado}' es consecutiva."

explicacion: |
  Sí, 'tal' funciona como correlato de grado para sustantivos, introduciendo una consecuencia.
```

### 37 — pregunta 37

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["produccion", "adjetivo"]

variables:
  adj: uno_de(["alto", "bajo", "ancho", "estrecho"])
  resultado: uno_de(["lo veía", "no lo veía", "lo tocaba", "lo perdía"])

respuesta: "tan"
tipo: completar

enunciado: "El muro es ___ {adj} que {resultado}. ¿Qué palabra falta?"

explicacion: |
  'Tan' se usa con adjetivos para expresar un grado que provoca una consecuencia.
```

### 38 — pregunta 38

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["diferenciacion", "final_vs_consecutiva"]

variables:
  fin: "para"
  consecutiva: "que"

respuesta: falso
tipo: vf

enunciado: "La oración 'Estudié tanto que aprobé' es una subordinada final."

explicacion: |
  'Aprobé' es el RESULTADO (consecutiva), no el propósito (final). Las finales suelen usar 'para que' o 'a fin de que'.
```

### 39 — pregunta 39

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tanto_que"]

variables:
  sust: uno_de(["tiempo", "dinero", "paciencia", "paciencia"])
  corr: "tanto"

respuesta: "tanto"
tipo: completar

enunciado: "Tenía ___ {sust} que lo gasté todo. ¿Qué palabra falta?"

explicacion: |
  'Tanto' es el correlato adecuado antes de sustantivos que indican cantidad.
```

### 40 — pregunta 40

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "basico"
  tags: ["estructura", "tan_que"]

variables:
  adj: uno_de(["difícil", "fácil", "largo", "corto"])
  resultado: uno_de(["no lo entendió", "lo resolvió", "lo leyó", "lo escribió"])

respuesta: verdadero
tipo: vf

enunciado: "En 'El examen fue tan {adj} que {resultado}', la subordinada es consecutiva."

explicacion: |
  Sí, la estructura 'tan + adj + que' introduce una consecuencia directa.
```

### 41 — pregunta 41

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["produccion", "tal_que"]

variables:
  sust: uno_de(["alegría", "tristeza", "ira", "paz"])
  resultado: uno_de(["sonrió", "lloró", "gritó", "calló"])

respuesta: "tal"
tipo: completar

enunciado: "Fue ___ su {sust} que {resultado}. ¿Qué palabra falta?"

explicacion: |
  'Tal' es el correlato adecuado para sustantivos abstractos que enfatizan la intensidad del estado.
```

### 42 — pregunta 42

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "adverbio"]

variables:
  adv: uno_de(["rápidamente", "lentamente", "bien", "mal"])
  resultado: uno_de(["terminó primero", "se equivocó", "ganó", "perdió"])

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Corrió tan {adv} que {resultado}' es consecutiva."

explicacion: |
  Sí, 'tan' con adverbios introduce una consecutiva.
```

### 43 — pregunta 43

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "avanzado"
  tags: ["diferenciacion", "comparativa_vs_consecutiva"]

variables:
  comparativa: "más... que"
  consecutiva: "tan... que"

respuesta: falso
tipo: vf

enunciado: "La oración 'Es tan alto como su padre' es una subordinada consecutiva."

explicacion: |
  'Tan... como' es una comparativa de igualdad. La consecutiva usa 'tan... que' para indicar resultado.
```

### 44 — pregunta 44

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["identificacion", "tanto_que"]

variables:
  sust: uno_de(["trabajo", "esfuerzo", "paciencia", "paciencia"])
  corr: "tanto"

respuesta: "tanto"
tipo: completar

enunciado: "Hizo ___ {sust} que lo logró. ¿Qué palabra falta?"

explicacion: |
  'Tanto' es el correlato correcto antes de sustantivos que indican cantidad o grado.
```

### 45 — pregunta 45

```
metadata:
  materia: "Lengua"
  tema: "subordinada_consecutiva"
  nivel: "intermedio"
  tags: ["logica", "relacion"]

variables:
  causa: "temor"
  efecto: "parálisis"

respuesta: verdadero
tipo: vf

enunciado: "En una subordinada consecutiva, la oración principal expresa la causa o el grado, y la subordinada expresa la consecuencia."

explicacion: |
  Correcto. La consecutiva depende de un correlato de grado en la principal para expresar un resultado inevitable.
```
