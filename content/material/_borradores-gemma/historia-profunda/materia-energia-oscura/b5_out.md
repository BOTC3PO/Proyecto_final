### 1 — Evidencia de la Materia Oscura
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["astronomia", "materia_oscura"]

variables:
  escenario: uno_de([["curvas_rotacion", "materia_oscura"], ["expansion_acelerada", "energia_oscura"], ["lentes_gravitacionales", "materia_oscura"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "Se observa que las galaxias rotan mucho más rápido de lo que la masa visible permitiría, sugiriendo la presencia de una masa no visible. Este fenómeno de {escenario[idx][0]} es una evidencia de:"

explicacion: |
  La materia oscura proporciona la masa extra necesaria para explicar las velocidades orbitales de las estrellas en las galaxias y la distorsión de la luz por lente gravitacional.
```

### 2 — El destino del Universo
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["cosmologia", "energia_oscura"]

variables:
  escenario: uno_de([["aceleracion_expansion", "energia_oscura"], ["colapso_gravitacional", "materia_oscura"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "La observación de supernovas tipo Ia indica que la expansión del universo se está acelerando. Este efecto de {escenario[idx][0]} es causado por la:"

explicacion: |
  La energía oscura actúa como una presión negativa que contrarresta la gravedad a escalas cosmológicas, impulsando la expansión acelerada del espacio.
```

### 3 — Densidad y Estructura
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["cosmologia", "estructura_cosmica"]

variables:
  escenario: uno_de([["formacion_estructuras", "materia_oscura"], ["repulsion_espacial", "energia_oscura"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["materia_oscura", "energia_oscura"]

enunciado: "Mientras que la {escenario[idx][0]} ayuda a la formación de galaxias mediante su atracción gravitatoria, la {escenario[idx][1]} es responsable de la {escenario[idx][1]} que separa las cúmusters de galaxias."

explicacion: |
  La materia oscura es atractiva (favorece la agrupación de materia), mientras que la energía oscura es repulsiva (favorece la expansión).
```

### 4 — El Efecto Lente
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["lentes_gravitacionales", "materia_oscura"]

variables:
  escenario: uno_de([["distorsion_luz", "materia_oscura"], ["expansión_lineal", "energia_oscura"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "La detección de la {escenario[idx][0]} en cúmulos de galaxias permite mapear la distribución de la:"

explicacion: |
  La luz se curva al pasar cerca de grandes masas. Como la masa observada no es suficiente para causar la curvatura detectada, se infiere la presencia de materia oscura.
```

### 5 — Componentes del Modelo Lambda-CDM
```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["modelo_estandar", "cosmologia"]

variables:
  escenario: uno_de([["materia_oscura", "materia_oscura"], ["energia_oscura", "energia_oscura"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["materia_oscura", "energia_oscura"]

enunciado: "En el modelo estándar de cosmología, la {escenario[idx][0]} es la fuerza que domina la expansión, mientras que la {escenario[idx][1]} es la componente que permite la formación de estructuras a gran escala."

explicacion: |
  Es un error conceptual común: la energía oscura domina la expansión (dinámica global), la materia oscura domina la formación de estructuras (dinámica local/regional).
```