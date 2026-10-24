### 1 — Intensidad en un circuito doméstico
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["electricidad", "intensidad"]

variables:
  escenario: uno_de([["un cargador de celular de 5W conectado a 220V", "0.0227"], ["una bombilla de 60W conectada a 120V", "0.5"], ["un calefactor de 2200W conectado a 220V", "10.0"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si tenemos {escenario[idx][0]}, la intensidad de corriente que circula es de aproximadamente ___ A."

respuestas_validas: ["0.0227", "0.5", "10.0"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  La intensidad de corriente (I) se calcula mediante la fórmula I = P / V, donde P es la potencia en Watts y V es el voltaje en Voltios.
```

### 2 — Flujo de carga eléctrica
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["carga", "electrones"]

variables:
  datos: uno_de([["2.0", "1.25e25"], ["0.5", "3.12e24"], ["4.0", "2.50e25"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si por un conductor circula una carga de {datos[idx][0]} Coulombs en un tiempo de 1 segundo, la cantidad de electrones que fluyen es aproximadamente ___."

respuestas_validas: ["1.25e25", "3.12e24", "2.50e25"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La carga total es Q = n * e, donde n es el número de electrones y e es la carga del electrón (1.6e-19 C). Por lo tanto, n = Q / e.
```

### 3 — Concepto de corriente continua vs alterna
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["conceptos", "ca"]

enunciado: "¿La corriente que suministran las baterías de un teléfono móvil es de tipo alterna (AC)?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: vf

explicacion: |
  Las baterías proporcionan corriente continua (DC), donde los electrones fluyen en un solo sentido. La corriente alterna (AC) es la que llega a los enchufes de las casas.
```

### 4 — Cálculo de intensidad con multímetro
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "amperaje"]

variables:
  caso: uno_de([["una corriente de 0.5A", "500"], ["una corriente de 1.2A", "1200"], ["una corriente de 0.05A", "50"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si un multímetro está configurado para medir miliamperios (mA), ¿qué valor mostrará para {caso[idx][0]}?"

opciones_explicitas: ["500", "1200", "50"]
respuesta: caso[idx][1]
tipo: mc

explicacion: |
  Para convertir Amperios (A) a miliamperios (mA), se multiplica el valor por 1000.
```

### 5 — Pasos para medir corriente
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "seguridad"]

enunciado: "Ordena los pasos correctos para medir la intensidad de corriente en un componente usando un multímetro en serie:"

opciones_explicitas: ["Abrir el circuito", "Conectar el multímetro en serie", "Cerrar el circuito para medir"]
respuesta: ["Abrir el circuito", "Conectar el multímetro en serie", "Cerrar el circuito para medir"]
tipo: ordenar

explicacion: |
  Para medir corriente, el multímetro debe formar parte del camino de la electricidad, por lo que el circuito debe interrumpirse para insertarlo en serie.
```