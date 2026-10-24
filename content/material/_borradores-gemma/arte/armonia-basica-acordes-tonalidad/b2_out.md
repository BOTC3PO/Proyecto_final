### 1 — El acorde mayor
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["armonia", "acordes", "intervalos"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "disminuido"]

enunciado: "Un acorde mayor se construye mediante la superposición de dos intervalos. Si tomamos una nota fundamental y le sumamos una tercera mayor (4 semitonos) y luego una quinta justa (7 semitonos desde la fundamental), el acorde resultante es de tipo ___."

explicacion: |
  Un acorde mayor se define por su estructura de intervalos: 1 - 3 mayor - 5 justa. En semitonos: 0 - 4 - 7.
```

### 2 — Identificación de la tonalidad
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["tonalidad", "escala", "teoria"]

variables:
  es_do_mayor: uno_de([verdadero, falso])

respuesta: es_do_mayor
tipo: vf

enunciado: "Si una pieza musical utiliza exclusivamente las notas de la escala de Do Mayor (Do, Re, Mi, Fa, Sol, La, Si) y sus acordes derivados, ¿es correcto afirmar que la pieza está en la tonalidad de Do Mayor?"

explicacion: |
  La tonalidad está determinada por la escala que sirve como centro tonal y marco de referencia para la melodía y la armonía.
```

### 3 — Construcción de un acorde menor
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["acordes", "semitonos"]

variables:
  base: uno_de([["Do", "4"], ["Re", "5"], ["Mi", "6"]])

respuesta: tabla[idx][1]
tipo: completar
respuestas_validas: ["4", "5", "6"]

enunciado: "Para transformar un acorde mayor en un acorde menor, debemos reducir la tercera mayor a una tercera menor. Si partimos de la nota fundamental {base[idx][0]}, debemos sumar exactamente ___ semitonos para obtener la tercera menor."

pasos:
  - "Identificar la nota fundamental: {base[idx][0]}"
  - "Calcular la distancia de la tercera mayor (4 semitonos)"
  - "Restar 1 semitono para obtener la tercera menor (4 - 1 = 3 semitonos)"
  - "Nota: En este ejercicio, el usuario debe identificar el valor de la tercera menor en semitonos para el ejemplo dado."

explicacion: |
  La diferencia fundamental entre un acorde mayor y uno menor es la tercera. El acorde menor tiene la tercera menor (3 semitonos), mientras que el mayor tiene la tercera mayor (4 semitonos).
```

### 4 — Estructura de la tríada
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "basico"
  tags: ["acordes", "teoria"]

respuesta: ["Fundamental", "Tercera", "Quinta"]
tipo: ordenar

opciones_explicitas: ["Fundamental", "Tercera", "Quinta"]

enunciado: "Ordena los elementos de una tríade musical desde la nota más grave (la base) hasta la más aguda, siguiendo la estructura estándar de un acorde."

explicacion: |
  Una tríada básica se compone de tres notas: la fundamental (la raíz), la tercera (que determina el modo) y la quinta (que da estabilidad).
```

### 5 — Cálculo de semitonos
```
metadata:
  materia: "arte"
  tema: "armonia_basica_acordes_tonalidad"
  nivel: "intermedio"
  tags: ["intervalos", "calculo"]]

variables:
  nota_base: uno_de([["Do", 0], ["Re", 2], ["Mi", 4], ["Fa", 5]])

respuesta: tabla[idx][1]
tipo: completar
respuestas_validas: ["7", "9", "11"]

enunciado: "En el sistema de semitonos, si la nota {nota_base[idx][0]} se encuentra en la posición {nota_base[idx][1]}, ¿cuántos semitonos debemos subir para llegar a una quinta justa (que requiere un total de 7 semitonos desde la fundamental)?"

pasos:
  - "Identificar la posición de la nota base: {nota_base[idx][1]}"
  - "Establecer el objetivo: 7 semitonos"
  - "Calcular la diferencia: 7 - {nota_base[idx][1]}"

explicacion: |
  Si la nota base es Do (0), la quinta es Sol (7), la diferencia es 7. Si la nota base es Re (2), la quinta es La (7), la diferencia es 5. Si la nota base es Mi (4), la quinta es Si (11), la diferencia es 7. El cálculo depende de la variable sorteada.
```