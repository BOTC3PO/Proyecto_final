### 1 — ¿Cómo se transfiere el calor en el vacío?
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["radiacion", "vacuo"]

tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion", "conduccion y conveccion"]

enunciado: "A diferencia de la conducción y la convección, la radiación térmica puede transferir energía a través del vacío porque no requiere un medio material. ¿Cuál es este mecanismo?"

respuesta: "radiacion"

explicacion: |
  La radiación térmica ocurre mediante ondas electromagnéticas y no necesita partículas para propagarse, lo que permite que el calor viaje por el vacío (como la radiación solar).
```

### 2 — El error de la conducción en fluidos
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion", "conduccion"]

variables:
  es_fluido: true

tipo: vf

enunciado: "En un fluido (como el aire o el agua) en reposo, el mecanismo predominante de transferencia de calor es la conducción térmica. ¿Es esto verdadero o falso?"

respuesta: falso

explicacion: |
  Aunque la conducción ocurre en fluidos, la transferencia de calor en fluidos suele estar dominada por la convección, que involucra el movimiento macroscópico de las masas de fluido.
```

### 3 — Mecanismos en una taza de café
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion", "conduccion", "radiacion"]

tipo: ordenar

opciones_explicitas: ["Convección del líquido", "Conducción a través de las paredes", "Radiación hacia el ambiente"]

enunciado: "Ordena los mecanismos de transferencia de calor de una taza de café caliente, desde el que ocurre principalmente en el cuerpo del líquido hasta el que ocurre hacia el espacio exterior."

respuesta: ["Convección del líquido", "Conducción a través de las paredes", "Radiación hacia el ambiente"]

explicacion: |
  1. La convección mueve el líquido caliente hacia arriba dentro de la taza. 
  2. La conducción transporta calor a través de las paredes sólidas. 
  3. La radiación emite energía electromagnética hacia el entorno.
```

### 4 — Identificación de mecanismos
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [
    ["El calor que viaja por una barra de metal", "conduccion"],
    ["El aire caliente que sube al calentarse", "conveccion"],
    ["El calor que sentimos del sol", "radiacion"]
  ]

tipo: completar

enunciado: "En el escenario seleccionado: {escenarios[escenario_idx][0]}, el mecanismo principal es la ___."

respuestas_validas: ["conduccion", "conveccion", "radiacion"]
respuesta: "{escenarios[escenario_idx][1]}"

explicacion: |
  Cada mecanismo tiene una naturaleza distinta: la conducción requiere contacto directo en sólidos, la convección requiere movimiento de fluidos, y la radiación requiere ondas electromagnéticas.
```

### 5 — ¿Depende la radiación de la temperatura?
```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["radiacion", "ley_stefan"]

variables:
  temp_k: 300

tipo: input

enunciado: "Si un objeto emite radiación térmica, la cantidad de energía emitida por unidad de área es proporcional a la temperatura elevada a la cuarta potencia (T^4). Si la temperatura absoluta es de {temp_k} K, ¿cuál es el valor de la temperatura elevada a la cuarta potencia?"

pasos:
  - "Elevar la temperatura absoluta al exponente 4."

respuesta: 8100000000000.0
tolerancia_abs: 0.1

explicacion: |
  Según la ley de Stefan-Boltzmann, la potencia irradiada es proporcional a T^4. Para 300 K, el cálculo es 300^4 = 8,100,000,000,000.
```