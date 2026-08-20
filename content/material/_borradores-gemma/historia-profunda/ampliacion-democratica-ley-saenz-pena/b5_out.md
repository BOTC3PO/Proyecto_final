### 1 — El voto antes de 1912
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["voto_cantado", "sistema_oligarquico"]

variables:
  escenario: uno_de([["El voto era realizado de forma ___", "abierto"], ["El voto era realizado de forma ___", "secreto"], ["El voto era realizado de forma ___", "obligatorio"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["abierto", "secreto", "obligatorio"]

enunciado: "Antes de la sanción de la Ley Sáenz Peña, el sistema electoral se caracterizaba porque el voto era ___."

explicacion: |
  Antes de 1912, el sistema era el "voto cantado", lo que permitía el fraude y la presión de los caudillos locales, ya que no había secreto.
```

### 2 — La gran transformación
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["caracteristicas_ley"]

variables:
  caso: uno_de([["voto universal", "masivo"], ["voto secreto", "anónimo"], ["voto obligatorio", "deber_ciudadano"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["masivo", "anónimo", "deber_ciudadano"]

enunciado: "Con la implementación de la Ley Sáenz Peña, el voto pasó a ser ___."

explicacion: |
  La ley estableció tres pilares: el voto era universal (para varones), secreto y obligatorio, rompiendo el control de la oligarquía.
```

### 3 — Comparativa de sistemas
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "intermedio"
  tags: ["comparativa", "fraude"]

variables:
  comparativa: uno_de([["Antes de 1912 el voto era ___ y después era ___", ["cantado", "secreto"]], ["Antes de 1912 el voto era ___ y después era ___", ["opcional", "obligatorio"]], ["Antes de 1912 el voto era ___ y después era ___", ["fraudulento", "transparente"]]])
  idx: uno_de([0, 1, 2])

respuesta: comparativa[idx][1]

tipo: ordenar
opciones_explicitas: ["cantado", "secreto", "opcional", "obligatorio", "fraudulento", "transparente"]

enunciado: "Complete la secuencia de cambio en el sistema electoral argentino:"

explicacion: |
  La transición buscaba pasar de un sistema controlado y abierto a uno donde la voluntad popular fuera respetada mediante el secreto y la obligatoriedad.
```

### 4 — El rol del ciudadano
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "basico"
  tags: ["obligatoriedad"]

variables:
  situacion: uno_de([["En el sistema anterior, votar era ___", "un privilegio"], ["En el sistema anterior, votar era ___", "un derecho"], ["En el sistema anterior, votar era ___", "una carga"]])
  idx: uno_de([0, 1, 2])

respuesta: situacion[idx][1]
tipo: mc
opciones_explicitas: ["un privilegio", "un derecho", "una carga"]

enunciado: "Antes de la reforma, el sufragio no era un derecho para todos, sino ___ para una élite restringida."

explicacion: |
  El sistema previo era restrictivo y estaba diseñado para que solo ciertos sectores sociales (la oligarquía) pudieran participar.
```

### 5 — El impacto de la ley
```
metadata:
  materia: "historia_profunda"
  tema: "ampliacion_democratica_ley_saenz_pena"
  nivel: "avanzado"
  tags: ["consecuencias_politicas"]

variables:
  resultado: uno_de([["La ley permitió el ascenso de ___", "la UCR"], ["La ley permitió el ascenso de ___", "el radicalismo"], ["La ley permitió el ascenso de ___", "el triunfo de Hipólito Yrigoyen"]])
  idx: uno_de([0, 1, 2])

respuesta: resultado[idx][1]
tipo: completar
respuestas_validas: ["la UCR", "el radicalismo", "el triunfo de Hipólito Yrigoyen"]

enunciado: "La democratización del voto fue el factor clave que permitió el ascenso político de ___ en Argentina."

explicacion: |
  La Ley Sáenz Peña permitió que las fuerzas de masas, como la Unión Cívica Radical, pudieran ganar elecciones de manera legítima.
```