### 1 — El rol del capacitor
```
metadata:
  materia: "electronica"
  tema: "capacitor_vs_resistencia"
  nivel: "basico"
  tags: ["componentes", "capacitor", "resistencia"]

tipo: mc
opciones_explicitas: ["Almacena energía en un campo eléctrico", "Disipa energía en forma de calor", "Regula el flujo de corriente de forma constante", "Amplifica la tensión de una señal"]

enunciado: "A diferencia de una resistencia, que disipa la energía eléctrica mediante el efecto Joule, un capacitor se distingue por su capacidad de..."

respuesta: "Almacena energía en un campo eléctrico"

explicacion: |
  La resistencia consume energía transformándola en calor, mientras que el capacitor la almacena temporalmente en un campo eléctrico entre sus placas.
```

### 2 — El comportamiento del diodo
```
metadata:
  materia: "electronica"
  tema: "diodo_unidireccional"
  nivel: "basico"
  tags: ["diodo", "semiconductor"]

tipo: vf

enunciado: "Un diodo se diferencia de un cable conductor en que el diodo permite el paso de la corriente en un solo sentido (polarización directa) y lo bloquea en el sentido contrario (polarización inversa)."

respuesta: verdadero

explicacion: |
  El diodo actúa como una válvula unidireccional para la corriente eléctrica, a diferencia de un conductor ideal que permite el flujo en ambos sentidos.
```

### 3 — El transistor como interruptor
```
metadata:
  materia: "electronica"
  tema: "transistor_vs_resistencia"
  nivel: "intermedio"
  tags: ["transistor", "control", "resistencia"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["resistencia", "limita"],
    ["transistor", "controla"]
  ]

tipo: completar
respuestas_validas: ["limita", "controla"]

enunciado: "Mientras que una resistencia se utiliza para ___ la corriente de manera pasiva, un transistor permite ___ la corriente mediante una señal externa en su terminal de base."

respuesta: escenario[idx][1]

explicacion: |
  La resistencia es un componente pasivo que ofrece oposición al flujo; el transistor es un dispositivo activo que puede actuar como interruptor o amplificador según la corriente de control.
```

### 4 — Diferencia de almacenamiento: Capacitor vs Batería
```
metadata:
  materia: "electronica"
  tema: "capacitor_vs_bateria"
  nivel: "intermedio"
  tags: ["capacitor", "bateria", "energia"]

tipo: mc
opciones_explicitas: ["El capacitor libera la energía muy rápidamente; la batería la libera lentamente", "La batería es un componente pasivo; el capacitor es activo", "El capacitor almacena energía química; la batería energía eléctrica", "No hay diferencia en su funcionamiento"]

enunciado: "En términos de la velocidad de descarga, un capacitor se distingue de una batería porque..."

respuesta: "El capacitor libera la energía muy rápidamente; la batería la libera lentamente"

explicacion: |
  Los capacitores almacenan energía en campos eléctricos y pueden descargar su energía casi instantáneamente, mientras que las baterías dependen de reacciones químicas más lentas.
```

### 5 — Secuencia de flujo en un circuito con diodo
```
metadata:
  materia: "electronica"
  tema: "secuencia_componentes"
  nivel: "basico"
  tags: ["orden", "circuito"]

tipo: ordenar
opciones_explicitas: ["Fuente de tensión", "Resistencia", "Diodo", "Carga"]

respuesta: ["Fuente de tensión", "Resistencia", "Diodo", "Carga"]

enunciado: "En un circuito de protección simple donde queremos limitar la corriente antes de que llegue a un diodo que protege una carga, el orden lógico de los componentes desde el polo positivo es:"

explicacion: |
  El orden estándar es: Fuente -> Resistencia (para limitar corriente) -> Diodo (para rectificar/proteger) -> Carga (el elemento que consume).
```