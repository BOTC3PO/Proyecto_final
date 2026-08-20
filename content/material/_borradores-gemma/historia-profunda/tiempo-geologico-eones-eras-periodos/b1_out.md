### 1 — Jerarquía del tiempo geológico
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["jerarquia", "escala_temporal"]

tipo: mc
opciones_explicitas: ["Eón > Era > Período > Época", "Época > Período > Era > Eón", "Eón > Período > Era > Época", "Era > Eón > Época > Período"]

enunciado: "La escala de tiempo geológico es una estructura jerárquica. ¿Cuál de las siguientes secuencias representa correctamente el orden de mayor a menor duración?"

explicacion: |
  La escala geológica se organiza de lo macro a lo micro: los Eones son los bloques más grandes, que se dividen en Eras, estas en Períodos y estos en Épocas.
```

### 2 — El orden de las unidades
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Eón", "Era", "Período", "Época"]
respuesta: ["Eón", "Era", "Período", "Época"]

enunciado: "Ordena las siguientes unidades de tiempo geológico de la más extensa (mayor duración) a la más breve (menor duración)."

explicacion: |
  La jerarquía correcta es: Eón (la unidad más grande), seguido de la Era, el Período y finalmente la Época.
```

### 3 — Identificación de la unidad menor
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["jerarquia", "terminologia"]

variables:
  es_era: uno_de([true, false])

tipo: mc
opciones_explicitas: ["Período", "Época", "Eón", "Era"]

enunciado: "Si nos encontramos dentro de una Era geológica, la unidad de tiempo inmediatamente más pequeña que ella es un ___."

explicacion: |
  La estructura es: Eón $\rightarrow$ Era $\rightarrow$ Período $\rightarrow$ Época. Por lo tanto, después de una Era sigue un Período.
```

### 4 — Completar la jerarquía
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["completar", "jerarquia"]

tipo: completar
respuestas_validas: ["Período", "Época"]
respuesta: "Período"

enunciado: "En la jerarquía temporal, un Eón se divide en Eras, y una Era se divide en ___."

explicacion: |
  La división directa de una Era es el Período.
```

### 5 — Relación de escalas
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["logica", "jerarquia"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "Considerando la jerarquía geológica, un Período es una subdivisión de una Época. ¿Es esto correcto?"

explicacion: |
  Es falso. Es al revés: una Época es una subdivisión de un Período. El Período es la unidad mayor.
```