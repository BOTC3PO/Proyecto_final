### 1 — Verificación de la suma de una lista
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["verificacion", "logica"]

variables:
  lista_datos: [12, 5, 8, 20]
  suma_esperada: sumar([12, 5, 8, 20])

enunciado: "Se implementó un algoritmo para sumar los elementos de la lista {lista_datos}. El resultado obtenido por el programa fue {suma_esperada}. ¿Es este resultado correcto según la suma manual?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: mc

explicacion: |
  Para verificar un algoritmo de suma, debemos realizar la operación manualmente: 12 + 5 + 8 + 20 = 45. Como el resultado coincide, la solución es correcta.
```

### 2 — Comprobación de la media aritmética
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["estadistica", "verificacion"]

variables:
  valores: [10, 20, 30, 40]
  media_calculada: 25

enunciado: "Un estudiante afirma que el promedio de los valores {valores} es {media_calculada}. Si el procedimiento para calcular la media es sumar todos los elementos y dividir por la cantidad de elementos, ¿la respuesta es correcta?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: mc

explicacion: |
  La media es (10 + 20 + 30 + 40) / 4 = 100 / 4 = 25. El resultado es correcto.
```

### 3 — Validación de un algoritmo de ordenamiento
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["ordenamiento", "verificacion"]

enunciado: "Se desea verificar si el siguiente proceso de ordenamiento ascendente es correcto para la lista original [15, 3, 9, 1]:"

pasos:
  - "Paso 1: Comparar 15 y 3 -> [3, 15, 9, 1]"
  - "Paso 2: Comparar 15 y 9 -> [3, 9, 15, 1]"
  - "Paso 3: Comparar 15 y 1 -> [3, 9, 1, 15]"
  - "Paso 4: Comparar 9 y 1 -> [3, 1, 9, 15]"
  - "Paso 5: Comparar 3 y 1 -> [1, 3, 9, 15]"

opciones_explicitas: ["Correcto", "Incorrecto"]

respuesta: "Correcto"
tipo: mc

explicacion: |
  Al seguir los pasos del algoritmo de burbuja (bubble sort), la lista resultante [1, 3, 9, 15] está efectivamente ordenada de menor a mayor.
```

### 4 — Verificación de la propiedad de un número primo
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["matematica", "verificacion"]

variables:
  n: 17

enunciado: "Un programa indica que el número {n} es primo. Para verificarlo, se comprueba si tiene divisores distintos de 1 y de sí mismo. El resultado de la función 'es_primo({n})' es ___."

respuestas_validas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: completar

explicacion: |
  El número 17 solo es divisible por 1 y 17. Por lo tanto, la afirmación de que es primo es verdadera.
```

### 5 — Comprobación de la lógica de un condicional
```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "avanzado"
  tags: ["logica", "condicionales"]

variables:
  x: 10
  y: 5
  resultado_esperado: 15

enunciado: "Se implementó la siguiente lógica para un sistema de facturación: 'Si el monto es mayor a 100, aplicar descuento de 10; de lo contrario, sumar el monto tal cual'. Si el monto es {x} y se le suma {y}, el resultado final debería ser ___."

respuestas_validas: ["15", "105", "10"]
tipo: completar

explicacion: |
  Dado que 10 no es mayor a 100, se aplica la condición 'de lo contrario'. Por tanto, el resultado es simplemente la suma: 10 + 5 = 15.
```