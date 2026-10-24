### 1 — Forma de Gobierno
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["constitucion", "forma_de_gobierno"]

respuesta: "republicana"
tipo: "mc"
opciones_explicitas: ["monárquica", "republicana", "parlamentaria", "teocrática"]

enunciado: "Según la Constitución de 1853, la forma de gobierno adoptada para la Nación Argentina es ___."

explicacion: |
  La Constitución establece en su primer artículo que la Nación adopta para su gobierno la forma REPRESENTATIVA, REPUBLICANA y FEDERAL.
```

### 2 — División de Poderes
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["poderes", "division_de_poderes"]

variables:
  p_ejecutivo: uno_de([["Presidente", "Administra el país"], ["Congreso", "Legisla las leyes"], ["Corte Suprema", "Juzga las causas"]])
  p_idx: uno_de([0, 1, 2])
  poder_en_p_idx: p_ejecutivo[p_idx][0]
  respuesta_en_p_idx: p_ejecutivo[p_idx][1]

respuesta: respuesta_en_p_idx
tipo: "completar"
respuestas_validas: [p_ejecutivo[0][1], p_ejecutivo[1][1], p_ejecutivo[2][1]]

enunciado: "En el sistema de división de poderes, la función de {poder_en_p_idx} es ___."

explicacion: |
  La división de poderes busca evitar la concentración de autoridad, asignando funciones específicas al Poder Ejecutivo, Legislativo y Judicial.
```

### 3 — El Sistema Federal
```
metadata:
  materia: "historia_profucha"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["federalismo", "provincias"]

respuesta: "federal"
tipo: "mc"
opciones_explicitas: ["centralista", "federal", "unitarista", "confederal"]

enunciado: "El principio que garantiza la autonomía de las provincias y su participación en el gobierno nacional se denomina sistema ___."

explicacion: |
  El federalismo permite que las provincias mantengan su autonomía (dictan sus propias leyes y eligen sus autoridades) mientras forman parte de un Estado Nacional único.
```

### 4 — Representación Popular
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["representacion", "sufragio"]

respuesta: "representativa"
tipo: "completar"
respuestas_validas: ["representativa"]

enunciado: "La Constitución de 1853 establece que el gobierno es ___ porque el pueblo ejerce su soberanía a través de sus representantes."

explicacion: |
  El carácter representativo implica que el poder emana del pueblo, pero este lo delega en representantes elegidos para la toma de decisiones políticas.
```

### 5 — Orden de Poderes
```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["jerarquia", "poderes"]

respuesta: ["Legislativo", "Ejecutivo", "Judicial"]
tipo: "ordenar"
opciones_explicitas: ["Ejecutivo", "Legislativo", "Judicial"]

enunciado: "Ordene los tres poderes del Estado según su orden de mención tradicional en la estructura de la división de poderes (según la jerarquía de la función de creación, ejecución y control de leyes):"

explicacion: |
  La división clásica de Montesquieu, adoptada por la Constitución, separa las funciones en: Legislativa (hacer leyes), Ejecutiva (ejecutar leyes) y Judicial (juzgar el cumplimiento de las leyes).
```