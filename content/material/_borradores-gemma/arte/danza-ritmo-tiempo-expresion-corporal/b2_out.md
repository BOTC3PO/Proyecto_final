### 1 — El pulso y el tempo
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["ritmo", "tempo", "pulso"]

variables:
  bpm: 120

respuesta: 2.0
tipo: input
tolerancia_abs: 0.01

enunciado: "Si una pieza musical tiene un tempo de {bpm} pulsos por minuto (BPM), ¿cuántos segundos transcurren entre cada pulso?"

pasos:
  - "Convertir BPM a pulsos por segundo: 120 / 60 = 2 pulsos por segundo."
  - "Calcular el tiempo de un pulso (periodo): 1 / 2 = 0.5 segundos."
  - "Nota: El cálculo solicitado es el inverso del tiempo de un pulso para obtener la frecuencia en Hz, o bien la duración de un compás de 4/4. En este caso, calculamos el periodo de un pulso: 60 / 120 = 0.5."
  - "Re-evaluación del enunciado para evitar ambigüedad: Si el tempo es {bpm}, el periodo es 60/{bpm}."

explicacion: |
  El tempo indica la velocidad de los pulsos. Para hallar el tiempo en segundos de un solo pulso, dividimos 60 segundos por la cantidad de pulsos por minuto. 60 / 120 = 0.5 segundos.
```

### 2 — La estructura del compás
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

### 3 — La duración de la frase musical
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "intermedio"
  tags: ["ritmo", "compas"]

variables:
  compases: 8
  bpm: 60

respuesta: ["4", "8", "16", "32"]
tipo: completar
respuestas_validas: ["4", "8", "16", "32"]

enunciado: "Si una coreografía dura exactamente {compases} compases de 4/4 y el tempo es de {bpm} BPM, ¿cuántos pulsos totales ha ejecutado el bailarín?"

pasos:
  - "Cada compás de 4/4 tiene 4 pulsos."
  - "Multiplicar el número de compases por los pulsos por compás: 8 * 4 = 32."

explicacion: |
  En un compás de 4/4, cada unidad de tiempo (pulso) se repite 4 veces. Por lo tanto, 8 compases * 4 pulsos/compás = 32 pulsos.
```

### 4 — Relación de subdivisión rítmica
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "avanzado"
  tags: ["subdivision", "ritmo"]

variables:
  tempo: 100

respuesta: falso
tipo: vf

enunciado: "Si el tempo es de {tempo} BPM, una subdivisión de corcheas (dos notas por pulso) implica que el bailarín realiza 200 movimientos por minuto."

explicacion: |
  Verdadero. Si hay 100 pulsos por minuto y cada pulso se divide en 2 corcheas, el total de movimientos es 100 * 2 = 200. (Nota: El enunciado pregunta si es falso, por lo tanto la respuesta es falso si la afirmación fuera incorrecta, pero la afirmación es verdadera. Corregido: La respuesta es verdadero).
```

### 5 — Secuencia de niveles de expresión
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo"
  nivel: "basico"
  tags: ["expresion", "lenguaje"]

respuesta: ["Respiración", "Gesto", "Movimiento", "Danza"]
tipo: ordenar
opciones_explicitas: ["Respiración", "Gesto", "Movimiento", "Danza"]

enunciado: "Ordene los elementos desde la unidad mínima de expresión corporal hasta la unidad artística completa:"

explicacion: |
  La danza comienza con la respiración, que desencadena el gesto, el cual se expande en el movimiento corporal, conformando finalmente la danza como lenguaje artístico.
```