### 1 — El dilema de la corriente
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["edison", "corriente_continua"]

respuesta: "corriente continua"
tipo: completar
respuestas_validas: ["corriente continua"]

enunciado: "Thomas Edison impulsó un sistema de distribución basado en la ___."

explicacion: |
  Edison defendía la corriente continua (DC), que era difícil de transportar a largas distancias debido a la caída de tensión.
```

### 2 — La guerra de las corrientes
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["tesla", "westinghouse", "corriente_alterna"]

variables:
  idx: uno_de([0, 1])
  escenario: [[0, "Tesla y Westinghouse"], [1, "Edison y General Electric"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Tesla y Westinghouse", "Edison y General Electric"]

enunciado: "El sistema de corriente alterna, que finalmente se impuso para la distribución a larga distancia, fue promovido principalmente por {escenario[idx][0]}."

explicacion: |
  Nikola Tesla y George Westinghouse desarrollaron el sistema de corriente alterna (AC), permitiendo elevar la tensión con transformadores para el transporte eficiente.
```

### 3 — Ventajas de la Alterna
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["tecnologia", "distribucion"]

respuesta: "transformador"
tipo: completar
respuestas_validas: ["transformador"]

enunciado: "La principal ventaja técnica de la corriente alterna sobre la continua en el siglo XIX era la capacidad de modificar el voltaje mediante el uso de un ___."

explicacion: |
  El transformador permite elevar el voltaje para reducir las pérdidas por calor en los cables durante el transporte a largas distancias.
```

### 4 — Protagonistas de la electrificación
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["personajes"]

respuesta: ["Edison", "Tesla", "Westinghouse"]
tipo: ordenar

opciones_explicitas: ["Edison", "Tesla", "Westinghouse"]

enunciado: "Ordena cronológicamente la relevancia de estos actores en el desarrollo de los estándares de corriente (de la corriente continua a la alterna dominante):"

explicacion: |
  Edison fue el pionero de la DC, mientras que Tesla y Westinghouse lideraron la revolución de la AC que permitió la electrificación masiva.
```

### 5 — Comparativa de sistemas
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "avanzado"
  tags: ["tecnologia", "comparativa"]

variables:
  idx: uno_de([0, 1])
  datos: [[0, "Alterna", "Larga distancia"], [1, "Continua", "Corta distancia"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Larga distancia", "Corta distancia"]

enunciado: "Si comparamos el sistema de {datos[idx][0]}, este fue históricamente preferido para la distribución de ___."

explicacion: |
  La corriente alterna (AC) permite el uso de transformadores para elevar la tensión, lo que minimiza pérdidas y permite llevar energía a ciudades lejanas.
```