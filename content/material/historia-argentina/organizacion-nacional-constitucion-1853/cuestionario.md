# Historia Profunda — Organizacion nacional constitucion 1853 (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — La sanción de la Constitución

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["constitucion", "argentina", "federalismo"]

respuesta: "1853"
tipo: completar

enunciado: "La Constitución Nacional Argentina fue sancionada en el año ___."

explicacion: |
  Tras la caída de Juan Manuel de Rosas en la batalla de Caseros, se procedió a la organización institucional del país, culminando con la sanción de la Constitución en 1853.
```

### 2 — Forma de gobierno

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["forma_de_gobierno", "republica", "federal"]

respuesta: "República Federal"
tipo: "mc"

opciones_explicitas: ["Monarquía Unitaria", "República Federal", "Confederación Centralista", "Dictadura Provisoria"]

enunciado: "La Constitución de 1853 estableció que la forma de gobierno de la Nación Argentina es una:"

explicacion: |
  La Constitución de 1853 adoptó la forma Republicana y el sistema Federal, garantizando la autonomía de las provincias pero bajo un gobierno central.
```

### 3 — División de poderes

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["poderes", "legislativo", "ejecutivo", "judicial"]

variables:
  orden_correcta: ["Ejecutivo", "Legislativo", "Judicial"]

respuesta_orden: ["Ejecutivo", "Legislativo", "Judicial"]
tipo: "ordenar"

opciones_explicitas: ["Ejecutivo", "Legislativo", "Judicial"]

enunciado: "Ordene los tres poderes del Estado establecidos por la Constitución de 1853, partiendo desde el poder que ejerce la función administrativa/política principal:"

explicacion: |
  La división de poderes es un principio fundamental de la democracia republicana adoptada en 1853 para evitar la concentración del mando.
```

### 4 — El rol de las provincias

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["provincias", "autonomia"]

variables:
  escenario: uno_de([["autónomas", "tienen sus propias autoridades y leyes"], ["dependientes", "están subordinadas totalmente al gobierno central"]])

respuesta: "autónomas"
tipo: "completar"

respuestas_validas:
  - "autónomas"

enunciado: "Según el sistema federal adoptado, las provincias argentinas son ___ porque ___."

explicacion: |
  El federalismo implica que las provincias conservan todo el poder no delegado a la Nación, manteniendo su propia autonomía.
```

### 5 — El proceso de sanción

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["sanacion", "congreso", "constituyente"]

variables:
  idx: uno_de([0, 1])
  datos: [["Sanctioned", "Sancionada"], ["Promulgated", "Promulgada"]]

respuesta: "Sancionada"
tipo: "mc"

opciones_explicitas: ["Sancionada", "Promulgada", "Derogada", "Reformada"]

enunciado: "El proceso de la Constitución de 1853 comenzó cuando la Carta Magna fue ___ por el Congreso Constituyente en Santa Fe."

explicacion: |
  La Constitución fue sancionada por el Congreso Constituyente en Santa Fe en 1853, marcando el inicio de la organización institucional definitiva.
```

### 6 — La separación de Buenos Aires

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["buenos_aires", "confederacion", "constitucion"]

respuesta: "separada"
tipo: completar

enunciado: "Tras la sanción de la Constitución Nacional en 1853, la provincia de Buenos Aires se mantuvo ___ de la Confederación Argentina."

explicacion: |
  Buenos Aires no participó en el proceso constituyente de 1853 y mantuvo su autonomía, formando un Estado separado de la Confederación Argentina durante varios años.
```

### 7 — El proceso de reincorporación

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["batalla_de_pavon", "reincorporacion", "unificacion"]

variables:
  escenario: uno_de([["1861", "Batalla de Pavón"], ["1853", "Sanción de la Constitución"]])
  año: escenario[0]
  evento: escenario[1]

respuesta: "1861"
tipo: "mc"
opciones_explicitas: ["1853", "1861", "1880", "1916"]

enunciado: "La reincorporación definitiva de Buenos Aires a la unidad nacional se produjo en el año {año}, tras el desenlace de la {evento}."

explicacion: |
  La Batalla de Pavón en 1861 fue el hito que permitió la unificación política y la integración de Buenos Aires al resto de las provincias argentinas.
```

### 8 — Cronología de la unificación

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

opciones_explicitas: ["Sanción de la Constitución Nacional", "Separación de Buenos Aires", "Batalla de Pavón", "Reincorporación de Buenos Aires"]
respuesta_orden: ["Sanción de la Constitución Nacional", "Separación de Buenos Aires", "Batalla de Pavón", "Reincorporación de Buenos Aires"]
tipo: "ordenar"

enunciado: "Ordena cronológicamente los siguientes hechos históricos de la organización nacional:"

explicacion: |
  La secuencia correcta comienza con la sanción de la Constitución (1853), la consecuente separación de Buenos Aires, la batalla que definió el rumbo político (Pavón, 1861) y la posterior integración.
```

### 9 — El rol de la Batalla de Pavón

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["pavon", "unificacion"]

respuesta: "reincorporación"
tipo: "completar"
respuestas_validas:
  - "reincorporación"
  - "unificación"

enunciado: "El desenlace de la Batalla de Pavón facilitó la ___ de la provincia de Buenos Aires a la unidad nacional."

explicacion: |
  La victoria/desenlace de Pavón permitió que Buenos Aires dejara de ser un estado separado y se integrara al proceso de organización nacional.
```

### 10 — La situación de Buenos Aires en 1853

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["buenos_aires", "constitucion"]

respuesta: "no"
tipo: "mc"
opciones_explicitas: ["si", "no", "tal vez", "parcialmente"]

enunciado: "¿Firmó la provincia de Buenos Aires la Constitución Nacional de 1853?"

explicacion: |
  No, Buenos Aires se opuso a la Constitución de 1853, manteniendo su propia organización y separándose de la Confederación Argentina.
```

### 11 — Forma de Gobierno

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

### 12 — División de Poderes

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["poderes", "division_de_poderes"]

variables:
  datos: [["Presidente", "Administra el país"], ["Congreso", "Legisla las leyes"], ["Corte Suprema", "Juzga las causas"]]
  idx: uno_de([0, 1, 2])
  poder_en_idx: datos[idx][0]
  respuesta_en_idx: datos[idx][1]

respuesta: respuesta_en_idx
tipo: "completar"
respuestas_validas:
  - datos[0][1]
  - datos[1][1]
  - datos[2][1]

enunciado: "En el sistema de división de poderes, la función de {poder_en_idx} es ___."

explicacion: |
  La división de poderes busca evitar la concentración de autoridad, asignando funciones específicas al Poder Ejecutivo, Legislativo y Judicial.
```

### 13 — El Sistema Federal

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

### 14 — Representación Popular

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["representacion", "sufragio"]

respuesta: "representativa"
tipo: "completar"
respuestas_validas:
  - "representativa"

enunciado: "La Constitución de 1853 establece que el gobierno es ___ porque el pueblo ejerce su soberanía a través de sus representantes."

explicacion: |
  El carácter representativo implica que el poder emana del pueblo, pero este lo delega en representantes elegidos para la toma de decisiones políticas.
```

### 15 — Orden de Poderes

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["jerarquia", "poderes"]

respuesta_orden: ["Legislativo", "Ejecutivo", "Judicial"]
tipo: "ordenar"
opciones_explicitas: ["Ejecutivo", "Legislativo", "Judicial"]

enunciado: "Ordene los tres poderes del Estado según su orden de mención tradicional en la estructura de la división de poderes (según la jerarquía de la función de creación, ejecución y control de leyes):"

explicacion: |
  La división clásica de Montesquieu, adoptada por la Constitución, separa las funciones en: Legislativa (hacer leyes), Ejecutiva (ejecutar leyes) y Judicial (juzgar el cumplimiento de las leyes).
```

### 16 — Vigencia de la Constitución

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["constitucion", "norma_suprema"]

respuesta: "Constitución Nacional"
tipo: completar
respuestas_validas:
  - "Constitución Nacional"

enunciado: "La norma suprema que rige el sistema de gobierno de la República Argentina es la ___."

explicacion: |
  La Constitución Nacional es la ley fundamental del Estado, de donde emanan todas las demás leyes.
```

### 17 — Reforma de 1994

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["reforma", "1994"]

respuesta: "incorporar la jerarquía de los tratados internacionales de derechos humanos"
tipo: mc
opciones_explicitas: ["eliminar la figura del Presidente", "incorporar la jerarquía de los tratados internacionales de derechos humanos", "cambiar la capital a Córdoba", "abolir el Senado"]

enunciado: "La reforma constitucional de 1994 tuvo como uno de sus hitos principales el hecho de ___."

explicacion: |
  La reforma de 1994 otorgó jerarquía constitucional a los tratados internacionales de derechos humanos con jerarquía superior a las leyes.
```

### 18 — Sistema de Gobierno

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

### 19 — El Poder Judicial

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["poder_judicial", "corte_suprema"]

respuesta: "Corte Suprema de Justicia de la Nación"
tipo: completar
respuestas_validas:
  - "Corte Suprema de Justicia de la Nación"

enunciado: "El órgano máximo del Poder Judicial de la Nación es la ___."

explicacion: |
  La Corte Suprema es el tribunal de última instancia y el máximo exponente del Poder Judicial en el sistema federal argentino.
```

### 20 — Orden de jerarquía normativa

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["jerarquia_normativa", "piramide_kelsen"]

variables:
  idx: uno_de([0, 1, 2])
  jerarquia: [["Constitución y Tratados de DDHH", "Tratados Internacionales", "Leyes Nacionales"]]

respuesta_orden: ["Constitución y Tratados de DDHH", "Tratados Internacionales", "Leyes Nacionales"]
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

### 21 — El sistema de gobierno

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["constitucion", "gobierno"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Un ciudadano propone que el poder debe dividirse en Ejecutivo, Legislativo y Judicial para evitar abusos.", "división de poderes"], ["Un grupo de provincias exige que el gobierno central no interfiera en sus leyes locales.", "federalismo"]]

enunciado: "En el contexto de la organización nacional, si se observa que {datos[escenario_idx][0]}, el principio constitucional que se está aplicando es la {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "división de poderes"
  - "federalismo"

explicacion: |
  La Constitución de 1853 establece la división de poderes como base del sistema republicano para garantizar la libertad y evitar la tiranía.
```

### 22 — Relaciones internacionales

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["relaciones_exteriores", "soberania"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El Presidente firma un tratado con Francia para fomentar el comercio.", "relaciones_exteriores"], ["La Corte Suprema resuelve un conflicto entre dos provincias.", "jurisdiccion_federal"]]

enunciado: "Si el Poder Ejecutivo actúa en el marco de la facultad de concertar tratados con otras potencias, está ejerciendo la competencia de {casos[caso_idx][1]}."

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["relaciones_exteriores", "jurisdiccion_federal", "legislacion_provincial"]

explicacion: |
  Según el Art. 99, inciso 11, es facultad del Presidente de la Nación celebrar tratados con otras potencias extranjeras.
```

### 23 — Derechos Civiles

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["derechos", "libertad"]

variables:
  derecho_idx: uno_de([0, 1])
  derechos: [["La libertad de culto es garantizada por la Constitución.", "libertad_religiosa"], ["El derecho de transitar libremente por el territorio.", "libertad_transito"]]

enunciado: "La Constitución de 1853 garantiza que ___ de culto es un derecho fundamental."

respuesta: "libertad_religiosa"
tipo: completar
respuestas_validas:
  - "libertad_religiosa"

explicacion: |
  El Art. 20 establece que la religión de culto de la nación es la católica, pero garantiza la libertad de culto a los habitantes.
```

### 24 — Organización Territorial

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["federalismo", "provincias"]

variables:
  provincia_idx: uno_de([0, 1])
  puntos: [["Las provincias conservan todo el poder no delegado a la Nación.", "autonomia"], ["El gobierno nacional tiene facultades delegadas por las provincias.", "delegacion"]]

enunciado: "En un sistema federal como el de 1853, las provincias mantienen su ___ sobre los poderes que no han sido expresamente delegados a la Nación."

respuesta: "autonomia"
tipo: mc
opciones_explicitas: ["autonomia", "delegacion", "soberania_total"]

explicacion: |
  El principio de autonomía provincial es clave: las provincias mantienen todo el poder que no han delegado al gobierno federal.
```

### 25 — Orden de jerarquía normativa

```
metadata:
  materia: "historia_profunda"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["jerarquia", "leyes"]

enunciado: "Ordene la jerarquía de las normas en el orden correcto, desde la más importante a la menos importante, según el espíritu constitucional de 1853:"

pasos:
  - "Identificar la norma suprema."
  - "Identificar la norma que emana del Congreso."
  - "Identificar la norma de aplicación local."

respuesta_orden: ["Constitución Nacional", "Leyes Nacionales", "Constituciones Provinciales"]
tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Leyes Nacionales", "Constituciones Provinciales"]

explicacion: |
  La Constitución es la ley suprema; de ella emanan las leyes nacionales y, en el sistema federal, las constituciones provinciales deben adecuarse a la nacional.
```
