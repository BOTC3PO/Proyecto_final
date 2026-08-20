### 1 — El péndulo del reloj
```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["oscilaciones", "periodo"]

variables:
  escenario: uno_de([[0.5, "0.5"], [2.0, "2.0"], [0.2, "0.2"]])
  frecuencia: 1 / escenario[0]

respuesta: frecuencia
tipo: input
tolerancia_abs: 0.01

enunciado: "Un péndulo de un reloj antiguo realiza un movimiento oscilatorio. Si el tiempo que tarda en completar una oscilación completa (período) es de {escenario[0]} segundos, ¿cuál es la frecuencia de oscilación en Hz?"

pasos:
  - "Identificar el período T = {escenario[0]} s"
  - "Aplicar la fórmula de la frecuencia: f = 1 / T"
  - "Calcular f = 1 / {escenario[0]}"

explicacion: |
  La frecuencia (f) es el inverso del período (T). Si tarda {escenario[0]} s en oscilar una vez, en un segundo realiza {frecuencia} oscilaciones.
```

### 2 — El motor de un pistón
```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "intermedio"
  tags: ["mecanica", "frecuencia"]

variables:
  motor_data: uno_de([[1200, "1200"], [3000, "3000"], [600, "600"]])
  f_valor: motor_data[0] / 60

respuesta: f_valor
tipo: mc
opciones_explicitas: ["1200", "3000", "600", "20"]

enunciado: "Un motor de combustión interna realiza {motor_data[0]} revoluciones por minuto (RPM). ¿Cuántas revoluciones (frecuencia) realiza por segundo (Hz)?"

explicacion: |
  Para convertir de RPM a Hz, debemos dividir la cantidad de revoluciones por 60, ya que un minuto tiene 60 segundos. {motor_data[0]} / 60 = {f_valor} Hz.
```

### 3 — Ondas de radio
```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["ondas", "radio"]

respuesta: falso
tipo: vf

enunciado: "Si una onda electromagnética tiene una frecuencia muy alta, su período de oscilación debe ser muy corto."

explicacion: |
  Es verdadero. Como f = 1/T, la frecuencia y el período son inversamente proporcionales. A mayor frecuencia, menor período.
```

### 4 — El latido del corazón
```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "basico"
  tags: ["biologia_fisica", "frecuencia"]

variables:
  datos_ritmo: uno_de([[60, "60"], [80, "80"], [100, "100"]])
  periodo_calculado: 60 / datos_ritmo[0]

respuesta: periodo_calculado
tipo: completar
respuestas_validas: [60 / 60, 60 / 80, 60 / 100]

enunciado: "Una persona tiene una frecuencia cardíaca de {datos_ritmo[0]} latidos por minuto. El tiempo transcurrido entre cada latido (período) es de ___ segundos."

explicacion: |
  Si hay {datos_ritmo[0]} latidos en 60 segundos, el tiempo por latido es 60 / {datos_ritmo[0]} = {periodo_calculado} segundos.
```

### 5 — Secuencia de un metrónomo
```
metadata:
  materia: "fisica"
  tema: "frecuencia_periodo"
  nivel: "intermedio"
  tags: ["ritmo", "orden"]

variables:
  f_val: 2.0
  t_val: 0.5

respuesta: ["0.5", "1.0", "2.0"]
tipo: ordenar
opciones_explicitas: ["0.5", "1.0", "2.0"]

enunciado: "Un metrónomo marca una frecuencia de {f_val} Hz. Ordena los siguientes valores de período (en segundos) de menor a mayor:"

explicacion: |
  Si f = 2 Hz, el período es T = 1/2 = 0.5 s. Los períodos correspondientes a frecuencias de 2Hz, 1Hz y 0.5Hz son 0.5s, 1s y 2s respectivamente.
```