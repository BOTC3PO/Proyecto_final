### 1 — Concepto de Oscilación
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["definicion", "movimiento"]

respuesta: "oscilación"
tipo: completar
respuestas_validas: ["oscilación", "oscilacion"]

enunciado: "El movimiento de vaivén de un objeto alrededor de una posición de equilibrio se denomina ___."

explicacion: |
  Una oscilación es un movimiento repetitivo que pasa por una posición de equilibrio, como un péndulo o un resorte.
```

### 2 — El concepto de Periodo
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["periodo", "tiempo"]

variables:
  escenario: uno_de([
    ["un ciclo completo", "el tiempo que tarda en realizarse un ciclo completo"],
    ["la frecuencia", "la cantidad de ciclos por unidad de tiempo"],
    ["la amplitud", "la distancia máxima desde el equilibrio"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["el tiempo que tarda en realizarse un ciclo completo", "la cantidad de ciclos por unidad de tiempo", "la distancia máxima desde el equilibrio"]

enunciado: "El periodo (T) se define como: {escenario[0]}."

explicacion: |
  El periodo es precisamente el intervalo de tiempo necesario para que el sistema complete un ciclo completo de movimiento.
```

### 3 — Veracidad del movimiento periódico
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["verdadero_falso"]

respuesta: falso
tipo: vf

enunciado: "¿Un movimiento que solo se desplaza en una sola dirección sin volver nunca a su punto de origen es un movimiento oscilatorio?"

explicacion: |
  Falso. Para que sea oscilatorio, el objeto debe regresar a su posición de partida y repetir el ciclo.
```

### 4 — Unidades de medida
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

variables:
  unidad: uno_de([
    ["segundos", "s"],
    ["metros", "m"],
    ["hertz", "Hz"]
  ])

respuesta: unidad[1]
tipo: mc
opciones_explicitas: ["s", "m", "Hz"]

enunciado: "Dado que el periodo mide el tiempo de un ciclo, su unidad en el Sistema Internacional es el/la {unidad[0]}."

explicacion: |
  El tiempo se mide en segundos (s) en el SI. El metro (m) es longitud y el Hertz (Hz) es frecuencia.
```

### 5 — Secuencia de un ciclo completo
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["secuencia", "puntos_criticos"]

variables:
  secuencia: ["Equilibrio", "Amplitud máxima positiva", "Equilibrio", "Amplitud máxima negativa", "Equilibrio"]

respuesta: secuencia
tipo: ordenar
opciones_explicitas: ["Equilibrio", "Amplitud máxima positiva", "Equilibrio", "Amplitud máxima negativa", "Equilibrio"]

enunciado: "Ordene los puntos de trayectoria de un objeto que oscila de forma simple, comenzando desde su posición de equilibrio:"

explicacion: |
  En una oscilación completa, el objeto pasa por el equilibrio, alcanza un extremo, vuelve al equilibrio, alcanza el extremo opuesto y regresa al equilibrio.
```