# Arte — Danza ritmo tiempo expresion corporal (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Revisado manualmente: Q6 confundía frecuencia con período (2.0 en vez
> de 0.5), Q8 tenía una lista de 4 valores como respuesta cuando el
> cálculo fijo sólo admite 32, Q9 tenía la clave invertida con notas de
> LM Studio sin resolver, Q12 asignaba "comunicación efectiva" a ambas
> ramas del sorteo pese a describir un caso incompleto, Q14 tenía dos
> blanks sin interpolar el dato real, Q17 interpolaba un booleano crudo
> al final de la pregunta, Q3/Q5/Q21/Q25 tenían `respuestas_validas`
> sobre-permisivas o variables muertas sin usar.

---

### 1 — Concepto de Ritmo

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "definicion"]

tipo: mc
opciones_explicitas: ["La repetición de movimientos en el tiempo", "La velocidad constante de un bailarín", "La expresión de sentimientos mediante gestos", "El uso de música para acompañar un baile"]

respuesta: "La repetición de movimientos en el tiempo"

enunciado: "En el contexto de la danza, el ritmo se define fundamentalmente como:"

explicacion: |
  El ritmo es la organización de los movimientos en el tiempo, creando patrones de acentos y pausas que estructuran la danza.
```

### 2 — El Tiempo en la Danza

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["tiempo", "duracion"]

tipo: vf

enunciado: "¿El tiempo en la danza se refiere exclusivamente a la duración de una pieza musical?"

respuesta: falso

explicacion: |
  Falso. El tiempo en la danza involucra la duración, el tempo, el ritmo y la relación del cuerpo con la temporalidad de la acción.
```

### 3 — Elementos de la Expresión Corporal

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion_corporal", "lenguaje"]

tipo: completar
respuestas_validas:
  - "gesto"

enunciado: "La expresión corporal utiliza el ________ como unidad mínima de comunicación para transmitir significados."

respuesta: "gesto"

explicacion: |
  El gesto es la unidad básica de la expresión corporal que permite comunicar estados de ánimo o ideas sin necesidad de palabras.
```

### 4 — Secuencia de la Acción Danzada

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["secuencia", "orden"]

tipo: ordenar
opciones_explicitas: ["Inspiración", "Movimiento", "Expresión", "Postura"]

respuesta_orden: ["Inspiración", "Movimiento", "Postura", "Expresión"]

enunciado: "Ordene los elementos según la progresión lógica de una acción corporal expresiva, desde la preparación hasta el resultado final:"

explicacion: |
  La danza comienza con la preparación (inspiración), sigue con la ejecución (movimiento), la estabilización (postura) y culmina en la intención comunicativa (expresión).
```

### 5 — Relación Ritmo-Cuerpo

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["ritmo", "pulso"]

tipo: completar
respuestas_validas:
  - "pulso"

enunciado: "Si el ________ es la unidad básica y constante de la música, el ritmo es la organización de acentos sobre esa base."

respuesta: "pulso"

explicacion: |
  El pulso es la unidad de medida constante, mientras que el ritmo es la combinación de duraciones que crea un patrón sobre ese pulso.
```

### 6 — El pulso y el tempo

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["ritmo", "tempo", "pulso"]

variables:
  bpm: 120

respuesta: 0.5
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una pieza musical tiene un tempo de {bpm} pulsos por minuto (BPM), ¿cuántos segundos transcurren entre cada pulso?"

pasos:
  - "Convertir BPM a pulsos por segundo: 120 / 60 = 2 pulsos por segundo."
  - "Calcular el tiempo de un pulso (periodo): 1 / 2 = 0.5 segundos."

explicacion: |
  El tempo indica la velocidad de los pulsos. Para hallar el tiempo en segundos de un solo pulso, dividimos 60 segundos por la cantidad de pulsos por minuto. 60 / 120 = 0.5 segundos.
```

### 7 — La estructura del compás

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "intermedio"
  tags: ["compas", "ritmo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[4, "cuaternario"], [3, "ternario"]]

respuesta: "cuaternario"
tipo: mc
opciones_explicitas: ["cuaternario", "ternario", "binario"]

enunciado: "Un bailarín ejecuta una secuencia rítmica basada en un compás de {escenario[idx][1]}. ¿Cuál es la estructura métrica predominante?"

explicacion: |
  El compás determina la organización de los pulsos. Un compás de 4/4 es cuaternario, mientras que uno de 3/4 es ternario.
```

### 8 — La duración de la frase musical

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "intermedio"
  tags: ["ritmo", "compas"]

variables:
  compases: 8
  bpm: 60

respuesta: "32"
tipo: completar
respuestas_validas:
  - "32"

enunciado: "Si una coreografía dura exactamente {compases} compases de 4/4 y el tempo es de {bpm} BPM, ¿cuántos pulsos totales ha ejecutado el bailarín?"

pasos:
  - "Cada compás de 4/4 tiene 4 pulsos."
  - "Multiplicar el número de compases por los pulsos por compás: 8 * 4 = 32."

explicacion: |
  En un compás de 4/4, cada unidad de tiempo (pulso) se repite 4 veces. Por lo tanto, 8 compases * 4 pulsos/compás = 32 pulsos.
```

### 9 — Relación de subdivisión rítmica

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "avanzado"
  tags: ["subdivision", "ritmo"]

variables:
  tempo: 100

respuesta: verdadero
tipo: vf

enunciado: "Si el tempo es de {tempo} BPM, una subdivisión de corcheas (dos notas por pulso) implica que el bailarín realiza 200 movimientos por minuto."

explicacion: |
  Verdadero. Si hay 100 pulsos por minuto y cada pulso se divide en 2 corcheas, el total de movimientos es 100 * 2 = 200.
```

### 10 — Secuencia de niveles de expresión

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["expresion", "lenguaje"]

respuesta_orden: ["Respiración", "Gesto", "Movimiento", "Danza"]
tipo: ordenar
opciones_explicitas: ["Respiración", "Gesto", "Movimiento", "Danza"]

enunciado: "Ordene los elementos desde la unidad mínima de expresión corporal hasta la unidad artística completa:"

explicacion: |
  La danza comienza con la respiración, que desencadena el gesto, el cual se expande en el movimiento corporal, conformando finalmente la danza como lenguaje artístico.
```

### 11 — Ritmo vs. Pulso

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "pulso", "conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "En la danza, el ritmo y el pulso son conceptos idénticos que se mueven siempre de la misma manera en el tiempo."

explicacion: |
  Falso. El pulso es la unidad básica de tiempo (el latido constante), mientras que el ritmo es la organización de acentos y silencios sobre ese pulso. El ritmo puede ser complejo y cambiar, mientras que el pulso suele ser la referencia constante.
```

### 12 — El error de la expresión corporal

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion_corporal", "lenguaje_artistico"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un bailarín que solo mueve los brazos sin mirar al público", "una expresión mecánica"], ["Un bailarín que utiliza todo su cuerpo para transmitir una emoción", "una comunicación efectiva"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["una comunicación efectiva", "una expresión mecánica", "un error de coordinación", "una falta de técnica"]

enunciado: "Si un bailarín realiza el siguiente movimiento: {escenarios[escenario_idx][0]}, esto se considera ___."

explicacion: |
  La expresión corporal requiere la integración de todo el cuerpo y la intención comunicativa para ser considerada un lenguaje artístico completo.
```

### 13 — Secuencia de la percepción rítmica

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["secuencia", "percepcion", "ritmo"]

opciones_explicitas: ["Escuchar el sonido", "Sentir el pulso", "Ejecutar el movimiento rítmico"]
respuesta_orden: ["Escuchar el sonido", "Sentir el pulso", "Ejecutar el movimiento rítmico"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que sigue un bailarín para interpretar una pieza musical de forma rítmica:"

explicacion: |
  Primero se debe percibir el estímulo sonoro, luego internalizar la pulsación (pulso) para luego poder traducir eso en movimiento coordinado.
```

### 14 — La confusión del tiempo musical

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "avanzado"
  tags: ["tiempo_musical", "acento", "ritmo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El acento cae en el tiempo débil", "un ritmo irregular"], ["El acento cae en el tiempo fuerte", "un ritmo regular"]]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas:
  - casos[caso_idx][1]

enunciado: "Si en una danza {casos[caso_idx][0]}, estamos ante ___."

explicacion: |
  La regularidad rítmica depende de la consistencia de los acentos en los tiempos fuertes. Si el acento se desplaza, la percepción del tiempo cambia.
```

### 15 — El cuerpo como instrumento

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["expresion_corporal", "lenguaje"]

respuesta: "lenguaje"
tipo: completar
respuestas_validas:
  - "lenguaje"
  - "ruido"
  - "movimiento"
  - "instinto"

enunciado: "Cuando la danza utiliza el cuerpo para transmitir ideas, emociones o conceptos sin necesidad de palabras, el cuerpo actúa como un ___ artístico."

explicacion: |
  La expresión corporal es la capacidad del cuerpo para funcionar como un sistema de comunicación no verbal, transformando el movimiento en lenguaje.
```

### 16 — Ritmo vs Melodía

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "danza", "musica"]

tipo: abierta
enunciado: "En la danza, ¿cuál es la diferencia fundamental entre el ritmo y la melodía?"

explicacion: |
  El ritmo se refiere a la duración y acentuación de los sonidos en el tiempo, mientras que la melodía es la sucesión de notas con diferentes alturas que forman una frase musical.
```

### 17 — El Tiempo en la Danza

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["tiempo", "ritmo"]

tipo: vf
respuesta: verdadero

enunciado: "Si un bailarín mantiene un movimiento con una duración de pulsos idéntica y regular, ¿se dice que está siguiendo un ritmo constante?"

explicacion: |
  Un ritmo constante implica una regularidad en la subdivisión del tiempo, permitiendo una estructura predecible para el movimiento.
```

### 18 — Expresión Corporal vs Mimo

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "avanzado"
  tags: ["expresion_corporal", "mimo"]

tipo: completar
respuestas_validas:
  - "gestualidad"
  - "mimo"

enunciado: "Mientras que el ___ se basa principalmente en la pantomima y la ausencia de palabras para narrar, la expresión corporal en la danza utiliza el movimiento total del cuerpo para comunicar estados emocionales."

explicacion: |
  El mimo es una disciplina técnica de gestualidad específica, mientras que la expresión corporal es un lenguaje más amplio que integra la intención emocional con el movimiento.
```

### 19 — Secuencia de la Composición Rítmica

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["ritmo", "estructura"]

opciones_explicitas: ["Pulso", "Acento", "Ritmo"]

tipo: ordenar
respuesta_orden: ["Pulso", "Acento", "Ritmo"]

enunciado: "Ordene los elementos de la estructura rítmica desde la unidad más básica y constante hasta la organización compleja que genera el movimiento:"

explicacion: |
  El pulso es la unidad básica, el acento es el énfasis en ciertos pulsos y el ritmo es la combinación de duraciones y acentos.
```

### 20 — Espacio y Movimiento

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["espacio", "movimiento"]

tipo: abierta
enunciado: "¿Cuál es la distinción principal entre movimiento y espacio en la danza?"

explicacion: |
  El movimiento es la acción dinámica del cuerpo, mientras que el espacio es el entorno (kinesférico o escénico) que el bailarín ocupa y recorre.
```

### 21 — El compás del bailarín

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["ritmo", "compas", "tiempo"]

variables:
  datos: [["un vals en 3/4", "3/4"], ["un tango en 4/4", "4/4"], ["un reggaetón en 4/4", "4/4"]]
  idx: uno_de([0, 1, 2])

enunciado: "Un coreógrafo está preparando una pieza basada en {datos[idx][0]}. Para que el movimiento sea armónico, el bailarín debe seguir la métrica de {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  El ritmo en la danza está determinado por la métrica musical. El vals se caracteriza por un compás ternario (3/4), mientras que el tango y el reggaetón usan compases binarios/cuaternarios (4/4).
```

### 22 — La intención del movimiento

```
metadata:
  materia: "arte"
  tema: "danza_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion", "lenguaje", "cuerpo"]

variables:
  datos: [["un movimiento fluido y continuo", "fluidez"], ["un movimiento cortado y seco", "staccato"]]
  idx: uno_de([0, 1])

enunciado: "Si un bailarín de danza contemporánea utiliza {datos[idx][0]}, está trabajando la calidad de movimiento tipo {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["fluidez", "staccato"]

explicacion: |
  La expresión corporal utiliza la calidad del movimiento (fluidez vs. staccato) para comunicar emociones y estados de ánimo sin necesidad de palabras.
```

### 23 — La estructura de una coreografía

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "intermedio"
  tags: ["secuencia", "orden", "tiempo"]

enunciado: "Para realizar una secuencia coreográfica de improvisación guiada, el bailarín debe seguir un orden lógico de desarrollo temporal para mantener la coherencia narrativa:"

pasos:
  - "Exploración del espacio y el ritmo base"
  - "Desarrollo de frases de movimiento"
  - "Clímax de la expresión corporal"
  - "Resolución o cierre de la secuencia"

respuesta_orden: ["Exploración del espacio y el ritmo base", "Desarrollo de frases de movimiento", "Clímax de la expresión corporal", "Resolución o cierre de la secuencia"]
tipo: ordenar
opciones_explicitas: ["Exploración del espacio y el ritmo base", "Desarrollo de frases de movimiento", "Clímax de la expresión corporal", "Resolución o cierre de la secuencia"]

explicacion: |
  Una estructura coreográfica requiere una progresión temporal: desde la preparación (exploración), pasando por el desarrollo, el punto de mayor intensidad (clímax) y el cierre.
```

### 24 — Percepción del tempo

```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["tempo", "velocidad", "percepcion"]

variables:
  datos: [["un adagio lento", "lento"], ["un allegro rápido", "rápido"]]
  idx: uno_de([0, 1])

enunciado: "Si la música de la pieza es {datos[idx][0]}, el tempo de la danza será percibido como {datos[idx][1]}."

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
explicacion: |
  El tempo es la velocidad del pulso musical. Un 'adagio' es una indicación de tempo lento, mientras que un 'allegro' indica un tempo rápido.
```

### 25 — Elementos del lenguaje corporal

```
metadata:
  materia: "arte"
  tema: "danza_expresion_corporal"
  nivel: "avanzado"
  tags: ["elementos", "espacio", "cuerpo"]

variables:
  datos: [["el uso de niveles (alto, medio, bajo)", "espacio"], ["la tensión muscular", "energía"], ["el ritmo del pulso", "tiempo"]]
  idx: uno_de([0, 1, 2])

enunciado: "En la danza, el concepto de {datos[idx][0]} se clasifica fundamentalmente como un elemento del ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  Los elementos de la danza incluyen el cuerpo, el espacio (niveles, direcciones), el tiempo (ritmo, duración) y la energía (tensión, peso).
```
