### 1 — Identificación de componentes
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos_basicos", "identificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un termómetro digital", "un motor de un ventilador"], ["un sensor de luz (LDR)", "una lámpara LED"]]
  componente_sensor: escenario_idx == 0 ? escenarios[0][0] : escenarios[1][0]
  componente_actuador: escenario_idx == 0 ? escenarios[0][1] : escenarios[1][1]

enunciado: "En un sistema de control de temperatura, el {componente_sensor} detecta el calor y el {componente_actuador} realiza la acción física. ¿Cuál de los dos es el actuador?"

opciones_explicitas: ["el sensor", "el actuador"]
respuesta: "el actuador"
tipo: mc

explicacion: |
  El sensor capta la información del entorno (temperatura) y el actuador transforma la señal en una acción física (movimiento del ventilador).
```

### 2 — Lógica de control (Verdadero/Falso)
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["logica", "flujo_de_datos"]

enunciado: "En un sistema automatizado, el flujo de información correcto es: Sensor -> Controlador -> Actuador."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. El sensor obtiene el dato, el controlador procesa la decisión y el actuador ejecuta la acción.
```

### 3 — Completar flujo de trabajo
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["completar", "flujo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un sensor de humedad en un riego", "un sensor de proximidad en un robot"], ["una bomba de agua", "una rueda motriz"]]

enunciado: "En un sistema de riego automático, el sensor de humedad detecta que la tierra está seca, el controlador activa la ___ para regar."

respuestas_validas: ["bomba de agua", "rueda motriz"]
respuesta: casos[caso_idx][1]
tipo: completar

explicacion: |
  El actuador en este escenario es la bomba de agua, ya que es el elemento que produce la acción física de mover el agua.
```

### 4 — Orden de un proceso de automatización
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["secuencia", "proceso"]

opciones_explicitas: ["Captar estímulo ambiental", "Procesar señal eléctrica", "Ejecutar acción física"]
respuesta: ["Captar estímulo ambiental", "Procesar señal eléctrica", "Ejecutar acción física"]
tipo: ordenar

explicacion: |
  El proceso lógico siempre comienza con la captura (sensor), sigue con el procesamiento (controlador) y termina con la acción (actuador).
```

### 5 — Cálculo de respuesta de sensor (Input)
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "avanzado"
  tags: ["calculo", "sensor_analogico"]

variables:
  valor_entrada: uno_de([10, 20, 30, 40, 50])
  escala: 5

enunciado: "Un sensor analógico entrega un voltaje proporcional a la temperatura. Si la fórmula es V = T * {escala} y la temperatura actual es {valor_entrada} grados, ¿cuál es el voltaje de salida?"

respuesta: valor_entrada * escala
tipo: input
tolerancia_abs: 0

explicacion: |
  Multiplicamos la temperatura medida por la constante de escala para obtener el valor de voltaje correspondiente.
```