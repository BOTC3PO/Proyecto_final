### 1 — ¿Qué es la diferencia de potencial?
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "concepto"]

respuesta: "trabajo"
tipo: completar
respuestas_validas: ["trabajo"]

enunciado: "La diferencia de potencial eléctrico entre dos puntos se define como el ___ realizado por unidad de carga para mover una carga desde un punto a otro."

explicacion: |
  La diferencia de potencial (voltaje) es la energía o trabajo por unidad de carga necesaria para mover una carga entre dos puntos del campo eléctrico.
```

### 2 — Confusión entre Corriente y Voltaje
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["corriente", "voltaje", "analogia"]

respuesta: "falso"
tipo: vf

enunciado: "Si una batería tiene una diferencia de potencial (voltaje) de 12V, esto significa que siempre hay una corriente fluyendo a través de cualquier cable conectado a ella, incluso si el circuito está abierto."

explicacion: |
  Falso. El voltaje es la "presión" o potencial disponible, pero la corriente requiere un camino cerrado (circuito) para fluir. En un circuito abierto, el voltaje existe pero la corriente es cero.
```

### 3 — Relación Trabajo y Carga
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["calculo", "potencial"]

variables:
  escenario: uno_de([[10.0, 5.0], [20.0, 10.0], [5.0, 2.0]])

respuesta: escenario[0] * escenario[1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Se requiere realizar un trabajo de {escenario[0]} Joules para mover una carga de {escenario[1]} Coulombs entre dos puntos de un conductor. ¿Cuál es la diferencia de potencial en Voltios?"

pasos:
  - "Calcular el voltaje usando la fórmula: V = W / q"

explicacion: |
  Usando la fórmula V = W/q: {escenario[0]} J / {escenario[1]} C = {escenario[0]/escenario[1]} V.
```

### 4 — El error del instrumento de medición
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "medicion"]

respuesta: "en_paralelo"
tipo: mc
opciones_explicitas: ["en_serie", "en_paralelo", "en_circuito_abierto"]

enunciado: "Para medir correctamente la diferencia de potencial entre dos puntos de un componente, un voltímetro debe conectarse ___ al componente."

explicacion: |
  El voltímetro tiene una resistencia interna muy alta y debe conectarse en paralelo para medir la caída de potencial sin desviar la corriente del circuito principal.
```

### 5 — Componentes de un circuito
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["ordenar", "conceptos"]

respuesta: ["Fuente de potencial", "Conductor", "Carga/Resistencia"]
tipo: ordenar
opciones_explicitas: ["Carga/Resistencia", "Fuente de potencial", "Conductor"]

enunciado: "Ordena los elementos de un sistema de flujo de carga desde que se genera el potencial hasta que se consume la energía:"

explicacion: |
  El flujo comienza en la fuente (diferencia de potencial), viaja a través de los conductores y finalmente entrega energía al componente o carga.
```