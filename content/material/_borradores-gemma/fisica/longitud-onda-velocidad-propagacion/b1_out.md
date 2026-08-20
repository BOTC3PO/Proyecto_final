### 1 — Definición de longitud de onda
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["onda", "definicion"]

tipo: mc
opciones_explicitas: ["La distancia entre dos crestas consecutivas", "La velocidad de la perturbación", "El tiempo que tarda una onda en pasar", "La amplitud máxima de la onda"]

respuesta: "La distancia entre dos crestas consecutivas"

enunciado: "En una onda transversal, la longitud de onda (λ) se define como ___."

explicacion: |
  La longitud de onda es la distancia física entre dos puntos equivalentes consecutivos de una onda, como dos crestas o dos valles.
```

### 2 — Relación de proporcionalidad
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["proporcionalidad", "formula"]

tipo: vf

enunciado: "Si la frecuencia de una onda se duplica y la velocidad de propagación se mantiene constante, la longitud de onda debe reducirse a la mitad."

respuesta: falso

explicacion: |
  De la fórmula v = λ · f, despejamos λ = v / f. Si la frecuencia aumenta, la longitud de onda disminuye inversamente.
```

### 3 — Cálculo de velocidad de onda
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "intermedio"
  tags: ["calculo", "velocidad"]

variables:
  escenario: uno_de([[0.5, 10], [2.0, 20], [5.0, 50]])

tipo: input
tolerancia_abs: 0.01

enunciado: "Una onda tiene una longitud de onda de {escenario[0]} metros y una frecuencia de {escenario[1]} Hz. ¿Cuál es su velocidad de propagación en m/s?"

pasos:
  - "Identificar la longitud de onda (λ): {escenario[0]} m"
  - "Identificar la frecuencia (f): {escenario[1]} Hz"
  - "Aplicar la fórmula v = λ * f"

respuesta: escenario[1]

explicacion: |
  Usando la fórmula v = λ * f:
  v = {escenario[0]} m * {escenario[1]} Hz = {escenario[1]} m/s.
```

### 4 — Unidades de medida
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

tipo: completar
respuestas_validas: ["m/s", "m/s²", "Hz", "m"]

respuesta: "m/s"

enunciado: "En el Sistema Internacional, la unidad de la velocidad de propagación de una onda es ___."

explicacion: |
  La velocidad es la relación entre la distancia (metros, m) y el tiempo (segundos, s), por lo tanto, su unidad es m/s.
```

### 5 — Componentes de la onda
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad"
  nivel: "basico"
  tags: ["ordenar", "partes_onda"]

tipo: ordenar
opciones_explicitas: ["Cresta", "Punto de equilibrio", "Valle", "Cresta"]

respuesta: ["Cresta", "Punto de equilibrio", "Valle", "Cresta"]

enunciado: "Ordena las partes de una onda de forma descendente, desde el punto más alto hasta el punto más bajo, y vuelve a subir:"

explicacion: |
  La secuencia lógica desde el máximo es: Cresta (máximo) -> Punto de equilibrio (centro) -> Valle (mínimo) -> Cresta (regreso al máximo).
```