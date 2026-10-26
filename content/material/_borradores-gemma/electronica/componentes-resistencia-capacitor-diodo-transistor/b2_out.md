### 1 — Función del capacitor en un circuito
```
metadata:
  materia: "electronica"
  tema: "capacitor"
  nivel: "basico"
  tags: ["componentes", "almacenamiento"]

enunciado: "Un capacitor (condensador) actúa como un dispositivo que almacena energía en forma de ___."

respuestas_validas: ["campo eléctrico", "campo magnético"]

respuesta: "campo eléctrico"
tipo: completar

explicacion: |
  El capacitor almacena energía mediante la acumulación de cargas opuestas en sus placas, generando un campo eléctrico entre ellas.
```

### 2 — Identificación de componente por símbolo
```
metadata:
  materia: "electronica"
  tema: "resistencia"
  nivel: "basico"
  tags: ["componentes", "simbolos"]

variables:
  opciones: [["resistencia", "capacitor", "diodo", "transistor"]]

enunciado: "Si observamos un componente cuyo símbolo es una línea en zigzag (o un rectángulo) y su función es limitar el paso de la corriente, estamos ante una: {opciones[uno_de([0,1,2,3])]}"

opciones_explicitas: ["resistencia", "capacitor", "diodo", "transistor"]

respuesta: "resistencia"
tipo: mc

explicacion: |
  La resistencia está diseñada para oponerse al flujo de corriente eléctrica, disipando energía en forma de calor.
```

### 3 — Comportamiento del diodo
```
metadata:
  materia: "electronica"
  tema: "diodo"
  nivel: "basico"
  tags: ["semiconductores", "polarizacion"]

enunciado: "En un circuito con un diodo conectado en polarización directa, la corriente puede fluir a través de él. ¿Es esto verdadero o falso?"

respuesta: verdadero
tipo: vf

explicacion: |
  El diodo permite el paso de la corriente cuando el ánodo está a un potencial mayor que el cátodo (polarización directa).
```

### 4 — Secuencia de funcionamiento de un transistor BJT
```
metadata:
  materia: "electronica"
  tema: "transistor"
  nivel: "intermedio"
  tags: ["transistor", "funcionamiento"]

enunciado: "Para que un transistor NPN funcione como un interruptor en estado de corte, se deben seguir estos pasos en orden:"

opciones_explicitas: ["Aplicar voltaje en la base", "Corriente en la base es cero", "El transistor no conduce"]

respuesta: ["Aplicar voltaje en la base", "Corriente en la base es cero", "El transistor no conduce"]
tipo: ordenar

explicacion: |
  En el estado de corte, no hay corriente de base, por lo tanto, el canal entre colector y emisor permanece abierto.
```

### 5 — Cálculo de corriente en una resistencia
```
metadata:
  materia: "electronica"
  tema: "resistencia"
  nivel: "basico"
  tags: ["ley_ohm", "calculo"]

variables:
  escenario: [[10.0, 2.0], [5.0, 5.0], [20.0, 4.0]]
  idx: uno_de([0,1,2])

enunciado: "Si tenemos una resistencia de {escenario[idx][0]} Ω conectada a una fuente de voltaje de {escenario[idx][1]} V, la corriente que circula es de ___ A."

respuesta: "resultado"
tipo: input
tolerancia_abs: 0.01

pasos:
  - "Aplicar la Ley de Ohm: I = V / R"
  - "Calcular: {escenario[idx][1]} / {escenario[idx][0]}"

explicacion: |
  Usando la Ley de Ohm (I = V / R), el cálculo es {escenario[idx][1]} / {escenario[idx][0]} = {escenario[idx][1] / escenario[idx][0]} A.
```