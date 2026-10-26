### 1 — Vigencia de la Constitución
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["constitucion", "norma_suprema"]

respuesta: "Constitución Nacional"
tipo: completar
respuestas_validas: ["Constitución Nacional"]

enunciado: "La norma suprema que rige el sistema de gobierno de la República Argentina es la ___."

explicacion: |
  La Constitución Nacional es la ley fundamental del Estado, de donde emanan todas las demás leyes.
```

### 2 — Reforma de 1994
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["reforma", "1994"]

variables:
  es_reforma_1994: true

respuesta: "incorporar la jerarquía de los tratados internacionales de derechos humanos"
tipo: mc
opciones_explicitas: ["eliminar la figura del Presidente", "incorporar la jerarquía de los tratados internacionales de derechos humanos", "cambiar la capital a Córdoba", "abolir el Senado"]

enunciado: "La reforma constitucional de {es_reforma_1994 == true ? '1994' : '1853'} tuvo como uno de sus hitos principales el hecho de ___."

explicacion: |
  La reforma de 1994 otorgó jerarquía constitucional a los tratados internacionales de derechos humanos con jerarquía superior a las leyes.
```

### 3 — Sistema de Gobierno
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["sistema_de_gobierno"]

respuesta: "representativa, republicana y federal"
tipo: mc
opciones_explicitas: ["monárquica, centralista y unitaria", "representativa, republicana y federal", "presidencialista, autoritaria y federal", "parlamentaria, unitaria y federal"]

enunciado: "Según el Artículo 1°, la forma de gobierno adoptada por la Nación Argentina es ___."

explicacion: |
  La Constitución establece un sistema representativo (el pueblo gobierna por medio de representantes), republicano (división de poderes) y federal (autonomía de las provincias).
```

### 4 — El Poder Judicial
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["poder_judicial", "corte_suprema"]

respuesta: "Corte Suprema de Justicia de la Nación"
tipo: completar
respuestas_validas: ["Corte Suprema de Justicia de la Nación"]

enunciado: "El órgano máximo del Poder Judicial de la Nación es la ___."

explicacion: |
  La Corte Suprema es el tribunal de última instancia y el máximo exponente del Poder Judicial en el sistema federal argentino.
```

### 5 — Orden de jerarquía normativa
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["jerarquia_normativa", "piramide_kelsen"]

variables:
  idx: uno_de([0, 1, 2])
  jerarquia: [["Constitución y Tratados de DDHH", "Tratados Internacionales", "Leyes Nacionales"]]

respuesta: ["Constitución y Tratados de DDHH", "Tratados Internacionales", "Leyes Nacionales"]
tipo: ordenar
opciones_explicitas: ["Constitución y Tratados de DDHH", "Tratados Internacionales", "Leyes Nacionales"]

enunciado: "Ordene de mayor a menor jerarquía normativa el siguiente bloque de normas en el sistema argentino actual:"

pasos:
  - "Identifique la norma suprema (Bloque de Constitucionalidad)"
  - "Identifique los tratados con jerarquía superior a las leyes"
  - "Identifique las leyes comunes"

explicacion: |
  Tras la reforma de 1994, la jerarquía se establece con la Constitución y los Tratados de DDHH en la cima, seguidos por los tratados internacionales, y luego las leyes nacionales.
```