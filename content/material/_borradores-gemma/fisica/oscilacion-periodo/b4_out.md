### 1 — Diferencia entre periodo y frecuencia
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["periodo", "frecuencia", "conceptos_basicos"]

variables:
  frecuencia_ejemplo: 5.0

respuesta: "frecuencia_ejemplo"
tipo: mc
opciones_explicitas: ["El tiempo que tarda en completarse un ciclo", "El número de ciclos por unidad de tiempo", "La distancia máxima desde el punto de equilibrio", "La velocidad máxima del objeto"]

enunciado: "Si un péndulo realiza un movimiento repetitivo, ¿qué magnitud representa el tiempo necesario para que se complete un ciclo completo?"

explicacion: |
  El periodo (T) es el tiempo necesario para completar un ciclo, mientras que la frecuencia (f) es la cantidad de ciclos que ocurren en un segundo. Son inversamente proporcionales: f = 1/T.
```

### 2 — El concepto de ciclo completo
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["ciclo", "movimiento_repetitivo"]

variables:
  valor_ciclo: 1.0

respuesta: "verdadero"
tipo: vf

enunciado: "En un movimiento oscilatorio, un 'ciclo completo' implica que el objeto regresa exactamente a su posición inicial con la misma dirección de movimiento que tenía al comenzar."

explicacion: |
  Correcto. Para que un movimiento sea considerado periódico y completar un ciclo, el sistema debe volver al mismo estado (posición y velocidad) para iniciar una nueva repetición.
```

### 3 — Relación inversa periodo-frecuencia
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["calculo", "frecuencia", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [[2.0, 0.5], [0.5, 2.0]]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [0.5, 2.0]

enunciado: "Si el periodo de una oscilación es de {datos[idx][0]} segundos, la frecuencia de dicha oscilación es de ___ Hz."

pasos:
  - "Identificar el valor del periodo (T = {datos[idx][0]})"
  - "Aplicar la fórmula de la frecuencia: f = 1 / T"

explicacion: |
  Utilizando la relación f = 1/T, si T = {datos[idx][0]}, entonces f = 1/{datos[idx][0]} = {datos[idx][1]} Hz.
```

### 4 — Comparación: Periodo vs Amplitud
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["amplitud", "periodo", "distincion"]

respuesta: "Amplitud"
tipo: mc
opciones_explicitas: ["Amplitud", "Frecuencia", "Aceleración", "Velocidad"]

enunciado: "Mientras que el periodo mide el tiempo de un ciclo, la ___ mide la distancia máxima desde la posición de equilibrio."

explicacion: |
  La amplitud es una medida de longitud (distancia), mientras que el periodo es una medida de tiempo.
```

### 5 — Secuencia de un ciclo de oscilación
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["secuencia", "ciclo", "posicion"]

respuesta: ["Extremo derecho", "Punto de equilibrio", "Extremo izquierdo", "Punto de equilibrio", "Extremo derecho"]
tipo: ordenar
opciones_explicitas: ["Extremo derecho", "Punto de equilibrio", "Extremo izquierdo", "Punto de equilibrio", "Extremo derecho"]

enunciado: "Ordena las posiciones que recorre un objeto que oscila, comenzando desde su máxima elongación a la derecha, hasta completar un ciclo completo."

explicacion: |
  Un ciclo completo implica volver al punto de partida tras haber pasado por el centro y el extremo opuesto. La secuencia lógica es: Máximo (+A) -> Centro (0) -> Mínimo (-A) -> Centro (0) -> Regreso al Máximo (+A).
```