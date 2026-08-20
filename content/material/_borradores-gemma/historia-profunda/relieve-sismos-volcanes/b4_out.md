### 1 — El Cinturón de Fuego
```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "basico"
  tags: ["tectonica_de_placas", "geologia"]

tipo: mc
opciones_explicitas: ["El océano Índico", "El océano Atlántico", "El océano Pacífico", "El océano Ártico"]

enunciado: "El Cinturón de Fuego es una zona de intensa actividad sísmica y volcánica que rodea el océano ________."

explicacion: |
  El Cinturón de Fuego del Pacífico es una zona de aproximadamente 40,000 km de longitud donde ocurre la mayor parte de la actividad sísmica y volcánica del mundo debido a la interacción de los bordes de las placas tectónicas.
```

### 2 — Placas y Sismos
```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "intermedio"
  tags: ["tectonica_de_placas", "sismos"]

variables:
  escenario: uno_de([
    ["subducción", "una placa se desliza debajo de otra", "se produce un arco volcánico y fosas marinas"],
    ["divergencia", "las placas se separan", "se crea nueva corteza oceánica en dorsales"],
    ["transformación", "las placas se deslizan lateralmente", "se generan grandes fallas como la de San Andrés"]
  ])

tipo: completar
respuestas_validas: ["subducción", "divergencia", "transformación"]
respuesta: escenario[0][0]

enunciado: "En el Cinturón de Fuego, el proceso de {escenario[0][1]} es el principal responsable de la formación de fosas oceánicas profundas y la actividad volcánica intensa."

explicacion: |
  La subducción ocurre cuando una placa tectónica (generalmente más densa, la oceánica) se hunde bajo otra placa, fundiéndose en el manto y generando magma que alimenta los volcanes.
```

### 3 — Concentración de Volcanes
```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "basico"
  tags: ["volcanes", "geografia_fisica"]

tipo: mc
opciones_explicitas: ["Baja", "Moderada", "Muy alta"]

enunciado: "Debido a la constante interacción de los bordes de placas, la densidad de volcanes activos en el Cinturón de Fuego es ________."

explicacion: |
  La mayoría de los volcanes activos del mundo se encuentran en esta zona debido a la actividad tectónica constante.
```

### 4 — Orden de procesos tectónicos
```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "avanzado"
  tags: ["procesos_geologicos", "tectonica"]

tipo: ordenar
opciones_explicitas: ["Acumulación de tensión elástica", "Ruptura de la falla", "Liberación de energía (sismo)", "Movimiento de la placa"]
respuesta: ["Acumulación de tensión elástica", "Ruptura de la falla", "Liberación de energía (sismo)", "Movimiento de la placa"]

enunciado: "Ordena cronológicamente los eventos que ocurren durante un terremoto causado por la interacción de placas en el Cinturón de Fuego:"

explicacion: |
  La tensión se acumula por el movimiento de las placas, llega un punto crítico donde la roca se rompe (ruptura), liberando energía en forma de ondas sísmicas.
```

### 5 — Cálculo de distancia sísmica
```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "intermedio"
  tags: ["sismos", "calculo"]

variables:
  datos: uno_de([
    [3000, 15.0],
    [5000, 25.0],
    [8000, 40.0]
  ])

tipo: input
respuesta: datos[0][1]
tolerancia_abs: 0.1

enunciado: "Si una onda sísmica detectada en el Cinturón de Fuego viaja a una velocidad constante de 200 km/min, ¿a cuántos minutos llegará al observador si el epicentro está a {datos[0][0]} km de distancia?"

pasos:
  - "Identificar la distancia: {datos[0][0]} km"
  - "Identificar la velocidad: 200 km/min"
  - "Dividir distancia / velocidad: {datos[0][0]} / 200"

explicacion: |
  El tiempo se calcula dividiendo la distancia recorrida por la velocidad: 3000 km / 200 km/min = 15 minutos.
```