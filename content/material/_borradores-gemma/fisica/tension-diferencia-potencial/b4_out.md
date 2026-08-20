### 1 — Diferencia de potencial vs. Campo eléctrico
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["potencial", "campo_electrico"]

respuesta: "campo_electrico"
tipo: mc
opciones_explicitas: ["potencial_electrico", "campo_electrico", "corriente_electrica", "resistencia"]

enunciado: "Mientras que la diferencia de potencial describe la energía por unidad de carga entre dos puntos, el concepto que describe la fuerza por unidad de carga que actúa sobre una carga puntual en un punto del espacio es el ___."

explicacion: |
  La diferencia de potencial (voltaje) es una medida escalar relacionada con la energía, mientras que el campo eléctrico es una magnitud vectorial que indica la fuerza ejercida sobre una carga.
```

### 2 — Diferencia de potencial vs. Trabajo eléctrico
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["trabajo", "potencial"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0.5, 2.0], [1.5, 5.0]]

respuesta: datos[escenario_idx][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Se requiere mover una carga de {datos[escenario_idx][0]} C de un punto A a un punto B. Si la diferencia de potencial entre ambos puntos es de {datos[escenario_idx][1]} V, el trabajo eléctrico realizado es de ___ J."

pasos:
  - "Calcular el trabajo usando la fórmula W = q * ΔV"
  - "Sustituir la carga q = {datos[escenario_idx][0]} C y el voltaje ΔV = {datos[escenario_idx][1]} V"

explicacion: |
  El trabajo eléctrico es el producto de la carga por la diferencia de potencial: W = q * ΔV. En este caso, {datos[escenario_idx][0]} * {datos[escenario_idx][1]} = {datos[escenario_idx][0] * datos[escenario_idx][1]}.
```

### 3 — Relación entre Voltaje y Corriente
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["ley_ohm", "corriente"]

respuesta: verdadero
tipo: vf

enunciado: "Si se mantiene constante la resistencia de un conductor, un aumento en la diferencia de potencial (tensión) provocará un aumento en la intensidad de la corriente eléctrica."

explicacion: |
  Según la Ley de Ohm (I = V/R), la corriente es directamente proporcional a la diferencia de potencial cuando la resistencia permanece constante.
```

### 4 — Componentes de un circuito en serie
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["circuito_serie", "voltaje"]

respuesta: ["Pila", "Interruptor", "Resistencia", "Cable"]
tipo: ordenar

opciones_explicitas: ["Pila", "Interruptor", "Resistencia", "Cable"]

enunciado: "Ordena los elementos de un circuito simple desde la fuente de energía hasta el dispositivo de carga, siguiendo el flujo de la corriente:"

explicacion: |
  En un circuito básico, la energía sale de la fuente (Pila), pasa por el control (Interruptor), atraviesa el elemento de consumo (Resistencia) y cierra el camino mediante los conductores (Cable).
```

### 5 — Diferencia de potencial en un conductor
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "avanzado"
  tags: ["conductor", "equilibrio"]

respuesta: "cero"
tipo: completar

respuestas_validas: ["cero", "0", "0.0"]

enunciado: "En un conductor metálico en equilibrio electrostático, la diferencia de potencial entre cualquier par de puntos del mismo conductor es ___."

explicacion: |
  En equilibrio electrostático, el campo eléctrico dentro del conductor es nulo, lo que implica que el potencial eléctrico es constante en todo el volumen del conductor. Por lo tanto, la diferencia de potencial es cero.
```