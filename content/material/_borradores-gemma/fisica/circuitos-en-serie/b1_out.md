### 1 — Concepto de resistencia equivalente
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie", "conceptos"]

tipo: mc
opciones_explicitas: ["La suma de las resistencias individuales", "La inversa de la suma de las resistencias", "La media de las resistencias", "La resta de las resistencias"]
respuesta: "La suma de las resistencias individuales"

enunciado: "En un circuito en serie, la resistencia total o equivalente es igual a ___."

explicacion: |
  En un circuito en serie, las resistencias se conectan una tras otra, por lo que la resistencia total es la suma algebraica de todas las resistencias del circuito.
```

### 2 — Comportamiento de la corriente
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "intensidad"]

tipo: vf
respuesta: verdadero

enunciado: "En un circuito en serie, la intensidad de corriente que circula por cada uno de los componentes es la misma."

explicacion: |
  Al haber un único camino para el flujo de electrones, la carga no tiene otra vía para circular, por lo tanto, la intensidad es constante en todos los puntos del circuito.
```

### 3 — Distribución de la tensión
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tension", "voltaje", "ley_de_kirchhoff"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["12V", "24V"], ["10V", "20V"]]
  componentes: [["R1=2Ω, R2=4Ω", "R1=5Ω, R2=5Ω"], ["R1=10Ω, R2=10Ω", "R1=2Ω, R2=8Ω"]]

tipo: completar
respuestas_validas: ["12V", "24V", "10V", "20V"]
respuesta: datos[escenario_idx][0]

enunciado: "Si tenemos un circuito con una fuente de tensión de {datos[escenario_idx][0]} y dos resistencias, la suma de las caídas de tensión en cada resistencia debe ser igual a ___."

explicacion: |
  Según la Ley de Kirchhoff de tensiones, la suma de las caídas de potencial en un lazo cerrado es igual a la tensión total suministrada por la fuente.
```

### 4 — Componentes de un circuito
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["vocabulario", "componentes"]

tipo: ordenar
opciones_explicitas: ["Fuente de tensión", "Interruptor", "Resistencias", "Cables de conexión"]
respuesta: ["Fuente de tensión", "Interruptor", "Resistencias", "Cables de conexión"]

enunciado: "Ordena los elementos de un circuito básico desde la fuente de energía hasta el receptor, pasando por el control y la conducción:"

explicacion: |
  Un circuito típico comienza con la fuente de energía, sigue por el dispositivo de control (interruptor), los elementos de carga (resistencias/receptores) y el conductor (cables).
```

### 5 — Dependencia de la resistencia total
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie"]

tipo: mc
opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene igual", "Se vuelve cero"]
respuesta: "Aumenta"

enunciado: "Si añadimos una resistencia adicional a un circuito que ya está en serie, la resistencia total del circuito ___."

explicacion: |
  Como la resistencia total en serie es la suma de todas las resistencias ($R_t = R_1 + R_2 + ... + R_n$), añadir más elementos siempre incrementará el valor de la resistencia total.
```