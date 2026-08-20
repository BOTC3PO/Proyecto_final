### 1 — ¿Qué es un ciclo?
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["conceptos_basicos", "periodo"]

respuesta: "un ciclo completo"
tipo: completar
respuestas_validas: ["un ciclo completo", "un ciclo"]

enunciado: "En un movimiento oscilatorio, el tiempo necesario para que el objeto complete ___ se denomina periodo."

explicacion: |
  El periodo es el intervalo de tiempo que transcurre entre dos instantes sucesivos en los que el sistema vuelve a pasar por el mismo estado (misma posición y misma dirección).
```

### 2 — Confusión entre Periodo y Frecuencia
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["frecuencia", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [["0.5", "2"], ["2", "0.5"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0.5 Hz", "2 Hz", "1 Hz", "0.2 Hz"]

enunciado: "Si un objeto realiza un movimiento oscilatorio con un periodo de {datos[idx][0]} segundos, su frecuencia es de ___."

explicacion: |
  La frecuencia (f) es el inverso del periodo (T), es decir, f = 1/T. Si T = 0.5s, f = 1/0.5 = 2 Hz. Si T = 2s, f = 1/2 = 0.5 Hz.
```

### 3 — ¿El periodo es siempre constante?
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["isocronismo", "veracidad"]

respuesta: falso
tipo: vf

enunciado: "En un péndulo simple ideal (sin fricción), el periodo de oscilación depende de la amplitud del movimiento (si la amplitud es muy grande)."

explicacion: |
  Para ángulos pequeños, el péndulo es isócrono, lo que significa que su periodo es independiente de la amplitud. En el modelo ideal de física básica, asumimos que el periodo es constante sin importar la amplitud.
```

### 4 — El error de la posición central
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["fase", "ciclo"]

respuesta: "punto de equilibrio"
tipo: completar
respuestas_validas: ["punto de equilibrio", "posición de equilibrio"]

enunciado: "Un ciclo completo de oscilación se define como el tiempo que tarda el objeto en ir desde el ___ hasta el extremo opuesto y regresar al mismo punto inicial."

explicacion: |
  Un error común es pensar que el ciclo solo ocurre entre extremos. El ciclo es el recorrido completo que incluye pasar por el punto de equilibrio en ambas direcciones.
```

### 5 — Componentes de una oscilación
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["secuencia", "movimiento"]

respuesta: ["extremo", "punto de equilibrio", "extremo opuesto", "punto de equilibrio"]
tipo: ordenar
opciones_explicitas: ["extremo", "punto de equilibrio", "extremo opuesto", "punto de equilibrio"]

enunciado: "Ordena la secuencia de posiciones que recorre un objeto que oscila, partiendo desde un extremo hacia el otro y regresando:"

explicacion: |
  Para completar un ciclo completo, el objeto debe recorrer la distancia total de ida y vuelta, pasando por el centro (punto de equilibrio) en cada tramo.
```