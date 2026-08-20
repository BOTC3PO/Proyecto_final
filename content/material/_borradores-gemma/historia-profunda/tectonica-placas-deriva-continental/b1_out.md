### 1 — El autor de la deriva continental
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["wegener", "geologia", "historia"]

respuesta: "Alfred Wegener"
tipo: completar
respuestas_validas: ["Alfred Wegener"]

enunciado: "El científico que propuso la teoría de la deriva continental en 1912 fue ___."

explicacion: |
  Alfred Wegener fue un meteorólogo y geofísico alemán que postuló que los continentes se desplazan sobre la superficie terrestre.
```

### 2 — Evidencia geomorfológica
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["evidencia", "geografia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["África", "Sudamérica"], ["India", "Antártida"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Sudamérica", "Antártida", "Australia", "Europa"]

enunciado: "Wegener observó que las costas de {datos[escenario_idx][0]} y {datos[escenario_idx][1]} encajaban casi perfectamente como piezas de un rompecabezas."

explicacion: |
  El encaje de los contornos continentales fue una de las observaciones iniciales más impactantes de la teoría de Wegener.
```

### 3 — Pruebas fósiles y geológicas
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["evidencia", "fosiles"]

respuesta: "fósiles"
tipo: mc
opciones_explicitas: ["fósiles", "astros", "mareas", "viento"]

enunciado: "Además del encaje de las costas, la coincidencia de ___ de especies idénticas en continentes separados apoyó la teoría de la deriva continental."

explicacion: |
  El hallazgo de fósiles de animales y plantas que no podrían haber cruzado océanos actuales fue una prueba fundamental.
```

### 4 — Cronología de la teoría
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["cronologia", "historia"]

respuesta: [1912, "Deriva Continental"]
tipo: ordenar
opciones_explicitas: [1912, "Deriva Continental"]

enunciado: "Ordena los eventos según la cronología de la propuesta de Wegener (Año -> Concepto):"

pasos:
  - "Identificar el año de la propuesta"
  - "Asociar el concepto principal"

explicacion: |
  En 1912, Wegener presentó su hipótesis que cambiaría la geología para siempre.
```

### 5 — El supercontinente
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["pangea", "geologia"]

variables:
  nombre_supercontinente: "Pangea"

respuesta: "Pangea"
tipo: completar
respuestas_validas: ["Pangea"]

enunciado: "Wegener denominó al supercontinente que agrupaba a todas las masas de tierra actuales como ___."

explicacion: |
  El término Pangea (que significa "toda la Tierra") fue acuñado para describir la masa continental única de hace millones de años.
```