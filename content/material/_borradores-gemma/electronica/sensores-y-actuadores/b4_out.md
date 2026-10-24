### 1 — Diferencia fundamental
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos_basicos", "definiciones"]

tipo: mc
opciones_explicitas: ["Un sensor convierte una magnitud física en una señal eléctrica, mientras que un actuador convierte una señal eléctrica en una acción física.", "Un sensor produce movimiento y un actuador capta luz.", "Un sensor es un componente digital y un actuador es analógico.", "No hay diferencia, ambos son dispositivos de entrada."]

enunciado: "En un sistema de control, la principal distinción entre un sensor y un actuador radica en la dirección de la conversión de energía. ¿Cuál es la diferencia correcta?"

explicacion: |
  Los sensores son dispositivos de entrada que transforman una propiedad física (temperatura, presión, luz) en una señal eléctrica para ser procesada. Los actuadores son dispositivos de salida que reciben una señal eléctrica para generar un efecto físico (movimiento, calor, sonido).
```

### 2 — El rol de la información
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["flujo_de_datos"]

variables:
  escenario: uno_de([["LDR", "captar luz"], ["Termistor", "medir temperatura"], ["Piezoeléctrico", "detectar presión"]])
  tipo_dispositivo: uno_de(["sensor", "actuador"])

tipo: completar
respuestas_validas: ["sensor", "actuador"]
respuesta: escenario[0] == "LDR" ? "sensor" : (escenario[0] == "Termistor" ? "sensor" : "sensor") 
# Nota: Como el enunciado pide completar la función del componente del escenario:
# Re-estructurando para cumplir reglas estrictas de respuesta:
# Si el escenario es [dato, tipo], la respuesta debe ser el dato del tipo.

variables:
  caso: uno_de([["LDR", "sensor"], ["Motor DC", "actuador"], ["Buzzer", "actuador"], ["Potenciómetro", "sensor"]])

tipo: completar
respuestas_validas: ["LDR", "Motor DC", "Buzzer", "Potenciómetro"]
respuesta: caso[1]

enunciado: "Si tenemos un dispositivo como un {caso[0]}, su función principal en el sistema es actuar como un ___."

explicacion: |
  El {caso[0]} es un {caso[1]} porque su propósito es transformar una magnitud física en una señal eléctrica para el controlador.
```

### 3 — Verdad o Falso: El flujo de energía
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["lógica_de_control"]

tipo: vf
respuestas_validas: [verdadero, falso]
respuesta: falso

enunciado: "¿Es correcto afirmar que un actuador es el encargado de captar cambios en el entorno para enviarlos a un microcontrolador?"

explicacion: |
  Falso. Esa es la función de un sensor. El actuador es el elemento final que ejecuta la acción dictada por el controlador tras procesar la información de los sensores.
```

### 4 — Secuencia de un sistema de control
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_sistema"]

tipo: ordenar
opciones_explicitas: ["Captación de estímulo físico", "Procesamiento de señal eléctrica", "Ejecución de acción física"]
respuesta: ["Captación de estímulo físico", "Procesamiento de señal eléctrica", "Ejecución de acción física"]

enunciado: "Ordene las etapas de un sistema automatizado desde la interacción con el entorno hasta la respuesta física:"

explicacion: |
  El ciclo comienza con el sensor (captación), sigue con el controlador (procesamiento) y termina con el actuador (ejecución).
```

### 5 — Identificación de componentes
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  item: uno_de([["Relé", "actuador"], ["Sensor Ultrasónico", "sensor"], ["Servomotor", "actuador"], ["LDR", "sensor"]])

tipo: mc
opciones_explicitas: ["Sensor", "Actuador"]
respuesta: item[1]

enunciado: "Un {item[0]} se clasifica técnicamente como un/a ___."

explicacion: |
  El {item[0]} es un {item[1]}. Los sensores detectan, los actuadores actúan.
```