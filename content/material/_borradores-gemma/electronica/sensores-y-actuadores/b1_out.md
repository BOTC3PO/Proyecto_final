### 1 — Definición de sensores
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos", "sensores"]

tipo: mc
opciones_explicitas: ["Un dispositivo que convierte una magnitud física en una señal eléctrica", "Un dispositivo que convierte una señal eléctrica en un movimiento mecánico", "Un dispositivo que almacena datos del entorno", "Un dispositivo que regula el voltaje de una fuente"]
respuesta: "Un dispositivo que convierte una magnitud física en una señal eléctrica"

enunciado: "Un sensor se define fundamentalmente como ___."
```

### 2 — Función de los actuadores
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos", "actuadores"]

tipo: vf
respuesta: falso

enunciado: "Los actuadores tienen la función principal de captar información del entorno para procesarla en un controlador."
```

### 3 — El ciclo de control
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_de_trabajo", "sistemas_combinados"]

variables:
  flujo: [["Sensor", "Controlador", "Actuador"], ["Actuador", "Controlador", "Sensor"], ["Sensor", "Actuador", "Controlador"]]
  idx: uno_de([0,1,2])

tipo: ordenar
opciones_explicitas: ["Sensor", "Controlador", "Actuador"]
respuesta: ["Sensor", "Controlador", "Actuador"]

enunciado: "En un sistema automatizado típico, ordene los componentes según el flujo de información desde la captura hasta la acción física."

pasos:
  - "El sensor detecta el cambio en el entorno."
  - "El controlador procesa la señal recibida."
  - "El actuador ejecuta la acción física resultante."

explicacion: |
  El flujo lógico es: el sensor obtiene el dato, el controlador toma la decisión y el actuador realiza la acción.
```

### 4 — Clasificación de señales
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["señales", "salida"]

tipo: completar
respuestas_validas: ["analógica", "digital"]

enunciado: "Si un sensor entrega una señal que varía continuamente en el tiempo, se dice que es una señal ___; por el contrario, si solo puede tomar valores discretos, es una señal ___."

explicacion: |
  Las señales analógicas representan magnitudes continuas, mientras que las digitales representan estados discretos (como 0 y 1).
```

### 5 — Interacción en un sistema
```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["sistemas", "integracion"]

variables:
  escenario: [["Luz", "Fotoresistencia", "LED"], ["Temperatura", "Termistor", "Ventilador"], ["Presión", "Célula de carga", "Motor"]]
  idx: uno_de([0,1,2])

tipo: mc
opciones_explicitas: ["Sensor -> Controlador -> Actuador", "Actuador -> Controlador -> Sensor", "Controlador -> Sensor -> Actuador"]
respuesta: "Sensor -> Controlador -> Actuador"

enunciado: "Considere el siguiente caso: Un {escenario[idx][0]} es detectado por un {escenario[idx][1]}, lo que provoca que un {escenario[idx][2]} se active. ¿Cuál es la secuencia correcta de trabajo?"

explicacion: |
  El sensor ({escenario[idx][1]}) capta la magnitud ({escenario[idx][0]}), el controlador procesa y el actuador ({escenario[idx][2]}) produce la acción.
```