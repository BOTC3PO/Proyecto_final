### 1 — El motor de la expansión
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "expansion_universo"]

tipo: mc
opciones_explicitas: ["Materia oscura", "Energía oscura", "Materia bariónica", "Radiación cósmica"]

enunciado: "A finales de la década de 1990, se descubrió que el universo no solo se expande, sino que lo hace de forma acelerada. El fenómeno responsable de esta aceleración es la ________."

explicacion: |
  La energía oscura es una forma de energía que permea todo el espacio y actúa como una fuerza repulsiva que acelera la expansión del universo, diferenciándose de la materia oscura que actúa principalmente mediante la gravedad.
```

### 2 — El gran descubrimiento
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["hitos", "astronomia"]

variables:
  idx: uno_de([0, 1])
  escenario: [[1998, "el descubrimiento de la expansión acelerada"], [2011, "la confirmación de la constante de Hubble"]]

tipo: completar
respuestas_validas: ["1998", "2011"]

enunciado: "La evidencia observacional que cambió la cosmología moderna y señaló la existencia de la energía oscura fue publicada en el año {escenario[idx][0]}, marcando {escenario[idx][1]}."

explicacion: |
  En 1998, las observaciones de supernovas lejanas demostraron que la expansión del universo se está acelerando, lo que llevó a la inclusión de la energía oscura en el modelo estándar de la cosmología.
```

### 3 — Diferencias fundamentales
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["materia_oscura", "energia_oscura"]

tipo: mc
opciones_explicitas: ["Atrae la materia mediante gravedad", "Repele el espacio mediante presión negativa", "Es visible mediante espectroscopia", "Es una partícula subatómica conocida"]

enunciado: "Mientras que la materia oscura ejerce una atracción gravitatoria que ayuda a la formación de estructuras, la energía oscura se caracteriza por su capacidad de ________."

explicacion: |
  La energía oscura posee una presión negativa que contrarresta la gravedad a escalas cosmogónicas, provocando que la expansión del universo sea acelerada en lugar de frenarse.
```

### 4 — El destino del cosmos
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["teoria", "futuro_universo"]

tipo: mc
opciones_explicitas: ["Big Crunch", "Big Freeze", "Big Bounce", "Punto de equilibrio"]

enunciado: "Si la energía oscura continúa dominando la expansión del universo de manera constante, el escenario más probable para el destino final del cosmos es el ________."

explicacion: |
  El 'Big Freeze' (Gran Congelamiento) ocurre cuando la expansión es tan rápida que las galaxias se alejan tanto que el universo se enfría hasta alcanzar un estado de entropía máxima donde no puede haber más procesos físicos.
```

### 5 — Orden cronológico de la cosmología moderna
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

tipo: ordenar
opciones_explicitas: ["Modelo de materia oscura fría", "Descubrimiento de la expansión acelerada", "Aceptación del modelo Lambda-CDM"]

respuesta: ["Modelo de materia oscura fría", "Descubrimiento de la expansión acelerada", "Aceptación del modelo Lambda-CDM"]

enunciado: "Ordena cronológicamente estos hitos que permitieron consolidar la visión actual del universo dominado por componentes oscuros:"

explicacion: |
  Primero se postuló la existencia de la materia oscura para explicar la rotación galáctica; en 1998 se descubrió la aceleración (energía oscura); finalmente, esto llevó a la adopción del modelo Lambda-CDM (materia oscura fría + constante cosmológica/energía oscura).
```