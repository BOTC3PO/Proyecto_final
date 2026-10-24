### 1 — El concepto de error en un servomecanismo
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_conceptos_basicos"
  nivel: "basico"
  tags: ["control", "realimentacion", "error"]

respuesta: "error"
tipo: "completar"
respuestas_validas: ["error"]

enunciado: "En un sistema de control de posición, la diferencia entre el valor de consigna (setpoint) y el valor real medido por el sensor se denomina ___."

explicacion: |
  El error es la variable fundamental en el control por realimentación. El controlador actúa para minimizar este valor hasta que sea cero o despreciable.
```

### 2 — Componentes de un lazo de control cerrado
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_componentes"
  nivel: "basico"
  tags: ["componentes", "lazo_cerrado"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["brazo_robotico", "motor_paso_a_paso"],
    ["sistema_giroscopico", "actuador_lineal"]
  ]
  sensores: [
    ["encoder_optical", "giroscopio_digital"],
    ["potenciometro", "sensor_de_proximidad"]
  ]

respuesta: uno_de(["sensor", "actuador", "controlador"])
tipo: "mc"
opciones_explicitas: ["sensor", "actuador", "controlador"]

enunciado: "En un {escenarios[escenario_idx][0]} que utiliza un {sensores[escenario_idx][0]} para detectar su posición, el componente encargado de recibir la señal de corrección y mover la estructura se llama ___."

explicacion: |
  El ciclo de un servomecanismo requiere: 1. Referencia, 2. Controlador, 3. Actuador, 4. Planta, 5. Sensor. El componente que ejecuta el movimiento físico es el actuador.
```

### 3 — Análisis de estabilidad en un servomecanismo
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_estabilidad"
  nivel: "intermedio"
  tags: ["estabilidad", "ganancia"]

respuesta: falso
tipo: "vf"

enunciado: "¿Un aumento excesivo en la ganancia de un controlador en un servomecanismo siempre garantiza que el sistema alcance la posición deseada más rápido sin oscilaciones?"

explicacion: |
  Falso. Si la ganancia es demasiado alta, el sistema puede sobrepasarse (overshoot) y entrar en oscilaciones sostenidas o incluso volverse inestable, perdiendo el control de la posición.
```

### 4 — Pasos para el ajuste de un lazo de control
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_puesta_en_marcha"
  nivel: "intermedio"
  tags: ["proceso", "ajuste"]

respuesta: ["identificar_planta", "medir_respuesta", "ajustar_parametros", "validar_estabilidad"]
tipo: "ordenar"
opciones_explicitas: ["identificar_planta", "medir_respuesta", "ajustar_parametros", "validar_estabilidad"]

enunciado: "Ordene los pasos lógicos para el sintonizado de un servomecanismo industrial:"

pasos:
  - "Determinar las características dinámicas del motor y la carga."
  - "Observar cómo reacciona el sistema ante un escalón de entrada."
  - "Modificar la ganancia (P) o la derivación (D) del controlador."
  - "Comprobar que el sistema no oscile ante cambios de consigna."

explicacion: |
  El proceso de sintonización requiere primero conocer la planta, luego observar su comportamiento, aplicar cambios y finalmente verificar que el sistema sea estable.
```

### 5 — Cálculo de error de posición
```
metadata:
  materia: "automatizacion"
  tema: "servomecanismos_calculo_error"
  nivel: "intermedio"
  tags: ["calculo", "error_posicion"]

variables:
  idx: uno_de([0, 1])
  datos: [
    [100.0, 98.5],
    [45.0, 45.2]
  ]

respuesta: abs(datos[idx][0] - datos[idx][1])
tipo: "input"
tolerancia_abs: 0.01

enunciado: "Un servomecanismo tiene como consigna (setpoint) una posición de {datos[idx][0]} grados. El sensor reporta que la posición actual es de {datos[idx][1]} grados. ¿Cuál es el valor absoluto del error de posición?"

pasos:
  - "Calcular la diferencia entre el setpoint y la posición medida."
  - "Aplicar el valor absoluto para obtener la magnitud del error."

explicacion: |
  El error se calcula como $e = \text{setpoint} - \text{medida}$. En este caso, el valor absoluto nos da la magnitud de la desviación respecto al objetivo.
```