### 1 — El control de constitucionalidad
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["constitucion", "control_constitucional"]

variables:
  escenario: uno_de([["Una ley sancionada por el Congreso contradice un artículo de la Constitución.", "inconstitucional"], ["Un decreto presidencial respeta plenamente la Constitución.", "constitucional"], ["Una norma provincial es superior a la Constitución Nacional.", "inconstitucional"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["inconstitucional", "constitucional", "nula"]

enunciado: "Analice el siguiente caso: {escenario[idx][0]}. ¿Cuál es la calificación jurídica de la norma respecto a la Constitución?"

explicacion: |
  El control de constitucionalidad asegura la supremacía de la Constitución sobre cualquier otra norma del ordenamiento jurídico.
```

### 2 — División de Poderes
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["poderes", "division_de_poderes"]

respuesta: verdadero
tipo: vf

enunciado: "El principio de división de poderes busca evitar la concentración de la autoridad en un solo órgano, estableciendo un sistema de frenos y contrapesos."

explicacion: |
  La división de poderes es un pilar del Estado de Derecho para garantizar la libertad individual y evitar la tiranía.
```

### 3 — Jerarquía de Normas
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["jerarquia_normativa", "piramide_de_kelsen"]

variables:
  orden_jerarquico: [["Constitución Nacional y Tratados de DDHH", "Ley Nacional", "Decreto Reglamentario", "Resolución Ministerial"]]

respuesta: orden_jerarquico

tipo: ordenar
opciones_explicitas: ["Constitución Nacional y Tratados de DDHH", "Ley Nacional", "Decreto Reglamentario", "Resolución Ministerial"]

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía según el bloque de constitucionalidad:"

explicacion: |
  La Constitución y los Tratados de Derechos Humanos con jerarquía constitucional ocupan la cúspide, seguidos por las leyes, decretos y finalmente las resoluciones.
```

### 4 — Derechos Fundamentales
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["derechos_fundamentales", "libertades"]

variables:
  caso: uno_de([["El Estado prohíbe toda manifestación pública sin permiso previo.", "es_falso"], ["Se garantiza la libertad de expresión, pero con responsabilidad."], "es_verdadero"])
  idx: uno_de([0, 1])

respuesta: caso[idx]
tipo: completar
respuestas_validas: ["es_falso", "es_verdadero"]

enunciado: "En un Estado de Derecho, la afirmación: 'El Estado prohíbe toda manifestación pública sin permiso previo' ___."

explicacion: |
  Los derechos fundamentales son inherentes a la persona y el Estado debe garantizarlos, permitiendo solo restricciones legales y proporcionales.
```

### 5 — Órgano de Control
```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "avanzado"
  tags: ["poder_judicial", "control_represivo"]

variables:
  contexto: uno_de([["El Poder Judicial debe realizar un control ___ sobre la constitucionalidad de las leyes.", "represivo"], ["El Poder Judicial realiza un control ___ sobre la constitucionalidad de las leyes.", "preventivo"]])
  idx: uno_de([0, 1])

respuesta: contexto[idx]
tipo: mc
opciones_explicitas: ["represivo", "preventivo", "legislativo"]

enunciado: "En el sistema de control judicial de constitucionalidad, cuando el órgano actúa una vez que la norma ya ha sido dictada y está produciendo efectos, realiza un control ___."

explicacion: |
  El control repressivo actúa sobre leyes ya vigentes, mientras que el preventivo busca evitar que la norma entre en vigor (ej. control de un proyecto de ley).
```