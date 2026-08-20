# Historia Profunda — Tectonica placas deriva continental (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El autor de la deriva continental

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["wegener", "geologia", "historia"]

respuesta: "Alfred Wegener"
tipo: completar
respuestas_validas:
  - "Alfred Wegener"

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

respuesta_orden: [1912, "Deriva Continental"]
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
respuestas_validas:
  - "Pangea"

enunciado: "Wegener denominó al supercontinente que agrupaba a todas las masas de tierra actuales como ___."

explicacion: |
  El término Pangea (que significa "toda la Tierra") fue acuñado para describir la masa continental única de hace millones de años.
```

### 6 — El supercontinente Pangea

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["pangea", "geologia"]

respuesta: "Pangea"
tipo: completar
respuestas_validas:
  - "Pangea"

enunciado: "El supercontinente que agrupaba a todas las masas terrestres hace aproximadamente 335 millones de años se denominaba ___."

explicacion: |
  Pangea fue un supercontinente que existió durante el período Pérmico y el Triásico, antes de su fragmentación.
```

### 7 — Fragmentación de Pangea

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["fragmentacion", "oceanos"]

variables:
  escenario: uno_de([0, 1])
  escenario_datos: [["Panthalassa", "Panthalassa"], ["Tetis", "Tetis"]]

respuesta: escenario_datos[escenario][1]
tipo: mc
opciones_explicitas: ["Panthalassa", "Tetis", "Atlántico", "Índico"]

enunciado: "Cuando Pangea comenzó a fragmentarse, el vasto océano que rodeaba a la masa continental se llamaba {escenario_datos[escenario][0]}."

explicacion: |
  El océano global que rodeaba a Pangea era el Panthalassa. El Tetis era un océano más pequeño situado entre Laurasia y Gondwana.
```

### 8 — El proceso de deriva

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["movimiento", "tectonica"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente", "transformante", "estacionaria"]

enunciado: "El movimiento de las placas tectónicas que provoca que los continentes se separen es un movimiento de tipo ___."

explicacion: |
  Los límites divergentes ocurren cuando las placas se separan, permitiendo que el magma ascienda y cree nueva corteza oceánica.
```

### 9 — Secuencia de fragmentación

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["secuencia", "geologia"]

respuesta_orden: ["Pangea", "Laurasia", "Gondwana", "Continentes actuales"]
tipo: ordenar
opciones_explicitas: ["Pangea", "Laurasia", "Gondwana", "Continentes actuales"]

enunciado: "Ordena cronológicamente los estados de la masa terrestre desde la unidad única hasta la configuración actual:"

explicacion: |
  Primero existió el supercontinente único (Pangea), luego se dividió en dos grandes masas (Laurasia al norte y Gondwana al sur) hasta llegar a la distribución actual.
```

### 10 — Evidencias de la deriva

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["evidencias", "fósiles"]

variables:
  evidencia_idx: uno_de([0, 1])
  evidencia_lista: [["Fósiles de Mesosaurus", "Fósiles de Mesosaurus"], ["Estructuras volcánicas", "Estructuras volcánicas"]]

respuesta: evidencia_lista[evidencia_idx][1]
tipo: mc
opciones_explicitas: ["Fósiles de Mesosaurus", "Restos de dinosaurios", "Estructuras volcánicas", "Depósitos de carbón"]

enunciado: "La presencia de {evidencia_lista[evidencia_idx][0]} en continentes separados como África y Sudamérica es una prueba clave de la deriva continental."

explicacion: |
  El Mesosaurus era un reptil de agua dulce cuyas huellas fósiles se encuentran tanto en África como en Sudamérica, lo que indica que ambos continentes estuvieron unidos.
```

### 11 — Tipos de bordes tectónicos

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["geologia", "placas_tectonicas"]

tipo: mc
opciones_explicitas: ["Divergente", "Convergente", "Transformante"]

enunciado: "Cuando dos placas tectónicas se mueven en direcciones opuestas alejándose una de la otra, el tipo de borde formado es un borde ________."

respuesta: "Divergente"

explicacion: |
  Los bordes divergentes ocurren cuando las placas se separan, permitiendo que el magma ascienda y cree nueva corteza oceánica (como en la dorsal mesoatlántica).
```

### 12 — Dinámica de subducción

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["subduccion", "convergencia"]

variables:
  escenario: uno_de([["Placa Oceánica", "Placa Continental"], ["Placa Oceánica", "Placa Oceánica"]])
  tipo_borde: uno_de(["convergente", "divergente", "transformante"])

tipo: mc
opciones_explicitas: ["Subducción", "Rifting", "Deslizamiento lateral"]

enunciado: "En un borde tipo {tipo_borde}, si una placa oceánica colisiona con una placa continental, el proceso por el cual la placa más densa se hunde hacia el manto se denomina ________."

respuesta: "Subducción"

explicacion: |
  En los bordes convergentes, la placa oceánica (más densa) se subduce bajo la continental, generando fosas marinas y actividad volcánica.
```

### 13 — El origen de los sismos transformantes

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["sismos", "transformante"]

tipo: mc
opciones_explicitas: ["Falla de San Andrés", "Dorsal Mesoatlántica", "Cordillera de los Andes"]

enunciado: "Los bordes transformantes se caracterizan por el deslizamiento lateral de las placas. Un ejemplo clásico de este tipo de movimiento es la ________."

respuesta: "Falla de San Andrés"

explicacion: |
  En los bordes transformantes las placas se deslizan lateralmente sin crear ni destruir corteza, acumulando tensión que se libera en forma de sismos.
```

### 14 — Procesos de formación de relieve

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["montañas", "convergencia"]

variables:
  evento: uno_de([["colisión continental", "subducción oceánica"]])

tipo: completar
respuestas_validas:
  - "montañas"
  - "valles"

enunciado: "La colisión entre dos masas continentales en un borde convergente da lugar principalmente a la formación de ________."

respuesta: "montañas"

explicacion: |
  Cuando dos placas continentales chocan, la corteza se pliega y se eleva, formando grandes cordilleras como el Himalaya.
```

### 15 — Secuencia de procesos tectónicos

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["ciclo_tectonico", "procesos"]

tipo: ordenar
opciones_explicitas: ["Separación de placas", "Ascenso de magma", "Creación de nueva corteza", "Expansión del fondo oceánico"]

enunciado: "Ordene correctamente la secuencia de eventos que ocurre en un borde divergente oceánico:"

respuesta_orden: ["Separación de placas", "Ascenso de magma", "Creación de nueva corteza", "Expansión del fondo oceánico"]

explicacion: |
  En los bordes divergentes, la separación de placas permite el ascenso de magma, el cual se solidifica creando nueva corteza y expandiendo el lecho marino.
```

### 16 — El motor de la tectónica

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "manto", "conveccion"]

respuesta: "corrientes de convección"
tipo: completar
respuestas_validas:
  - "corrientes de convección"
  - "convección"

enunciado: "El movimiento de las placas tectónicas es impulsado principalmente por las ___ en el manto terrestre."

explicacion: |
  El calor interno de la Tierra genera corrientes de convección en el manto, donde el material caliente asciende y el frío desciende, moviendo las placas superficiales.
```

### 17 — Origen del movimiento

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["calor", "manto", "energia"]

respuesta: "El calor interno de la Tierra"
tipo: mc
opciones_explicitas: ["El calor interno de la Tierra", "La rotación del planeta", "La atracción lunar"]

enunciado: "¿Cuál es la causa fundamental que desencadena las corrientes de convección en el manto terrestre?"

explicacion: |
  El gradiente térmico (diferencia de temperatura) entre el núcleo y la corteza es la fuente de energía que mueve el manto.
```

### 18 — Dinámica del manto

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["manto", "conveccion", "densidad"]

respuesta: "ascendente"
tipo: completar
respuestas_validas:
  - "ascendente"
  - "hacia arriba"

enunciado: "En una celda de convección, el material del manto que es menos denso debido al calor se desplaza de forma ___."

explicacion: |
  El material caliente es menos denso y asciende hacia la litosfera, mientras que el material frío y denso desciende.
```

### 19 — Relación temperatura-densidad

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["densidad", "termodinamica"]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿El aumento de la temperatura en el material del manto provoca una disminución de su densidad, facilitando el ascenso del material?"

explicacion: |
  Efectivamente, la expansión térmica reduce la densidad, lo que genera el movimiento ascendente característico de la convección.
```

### 20 — Secuencia del proceso convectivo

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["proceso", "secuencia", "conveccion"]

respuesta_orden: ["Calentamiento del manto", "Reducción de densidad", "Ascenso de material", "Desplazamiento de la placa"]
tipo: ordenar
opciones_explicitas: ["Calentamiento del manto", "Reducción de densidad", "Ascenso de material", "Desplazamiento de la placa"]

enunciado: "Ordena la secuencia lógica de un ciclo de convección que resulta en el movimiento de una placa tectónica:"

pasos:
  - "El núcleo transfiere calor al manto."
  - "El material se expande y se vuelve menos denso."
  - "El material caliente sube hacia la litosfera."
  - "La fricción y el arrastre mueven la placa superficial."

explicacion: |
  La secuencia comienza con la transferencia de calor, sigue con el cambio físico de las propiedades del material (densidad), el movimiento fluido (ascenso) y finalmente el efecto mecánico sobre la litosfera.
```

### 21 — Tipos de bordes: Dorsales

```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "bordes_divergentes"]

variables:
  datos: [["dorsal oceánica", "divergente"], ["falla transformante", "transformante"], ["cordillera de subducción", "convergente"]]
  idx: uno_de([0,1,2])

enunciado: "Se observa la formación de nueva corteza oceánica en una ___."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La formación de nueva corteza en las dorsales oceánicas ocurre en los bordes divergentes, donde las placas se separan.
```

### 22 — Tipos de bordes: Cordilleras

```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "bordes_convergentes"]

variables:
  datos: [["cordillera de los Andes", "convergente"], ["dorsal mesoatlantica", "divergente"], ["falla de San Andrés", "transformante"]]
  idx: uno_de([0,1,2])

enunciado: "La presencia de una ___ es característica de un límite de tipo {datos[idx][0]}."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Las cordilleras resultantes de la colisión o subducción son típicas de los bordes convergentes.
```

### 23 — Tipos de bordes: Fallas

```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "bordes_transformantes"]

variables:
  datos: [["falla de San Andrés", "transformante"], ["dorsal del Pacífico", "divergente"], ["fosa marina", "convergente"]]
  idx: uno_de([0,1,2])

enunciado: "Un movimiento de deslizamiento lateral como el de la ___ indica un borde ___."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Las fallas transformantes ocurren cuando las placas se deslizan horizontalmente una respecto a la otra.
```

### 24 — Tipos de bordes: Fosas

```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["tectonica", "subduccion"]

variables:
  datos: [["fosa marina", "convergente"], ["dorsal oceánica", "divergente"], ["falla transformante", "transformante"]]
  idx: uno_de([0,1,2])

enunciado: "La existencia de una ___ profunda es evidencia de un límite de placas tipo {datos[idx][0]}."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Las fosas oceánicas se forman en los límites convergentes por la subducción de una placa bajo otra.
```

### 25 — Tipos de bordes: Resumen

```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["tectonica", "procesos"]

variables:
  datos: [["creación de corteza", "divergente"], ["destrucción de corteza", "convergente"], ["desplazamiento lateral", "transformante"]]
  idx: uno_de([0,1,2])

enunciado: "El proceso de {datos[idx][0]} es el resultado principal de un borde ___."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Cada tipo de borde se define por el proceso geológico predominante: creación (divergente), destrucción (convergente) o deslizamiento (transformante).
```
