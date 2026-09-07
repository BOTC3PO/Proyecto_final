# Historia Profunda — Herramientas arte rupestre (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Evolución de la talla lítica

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["paleolitico", "tecnologia"]

enunciado: "En la industria lítica, una lasca se define como un/a ___."

respuestas_validas:
  - "fragmento desprendido de un núcleo"
tipo: completar

explicacion: |
  En la tecnología de la talla, las lascas son los fragmentos que se desprenden de una piedra núcleo al ser golpeada, siendo fundamentales para la producción de herramientas.
```

### 2 — Cronología de la industria lítica

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["paleolitico", "ordenar"]

opciones_explicitas: ["Olduvayense", "Achelense", "Musteriense"]

enunciado: "Ordene las siguientes tecnologías de la más antigua a la más reciente:"

tipo: ordenar
respuesta_orden: ["Olduvayense", "Achelense", "Musteriense"]

explicacion: |
  La secuencia evolutiva comienza con el Olduvayense (choppers simples), sigue con el Achelense (bifaces elaborados) y continúa con el Musteriense (técnicas de lasca más complejas).
```

### 3 — El Bifaz y su complejidad

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["tecnologia", "evolucion"]

enunciado: "El bifaz es una herramienta característica del Paleolítico Inferior que se diferencia de las lascas simples por su técnica de fabricación. ¿Cuál es su principal característica?"

opciones_explicitas: ["Es tallado por ambas caras para lograr simetría", "Es un fragmento accidental de una piedra", "Se fabrica únicamente mediante percusión blanda"]
tipo: mc
respuesta: "Es tallado por ambas caras para lograr simetría"

explicacion: |
  El bifaz representa un salto cognitivo importante, ya que el homínido debe prever la forma final de la herramienta en la piedra antes de empezar a tallar ambas caras.
```

### 4 — Especialización de herramientas

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["especializacion", "paleolitico"]

enunciado: "Un raspador es una herramienta especializada cuya función principal es ___."

respuestas_validas:
  - "usado para tratar pieles"
tipo: completar

explicacion: |
  La especialización de las herramientas (como el buril o el raspador) indica una mayor complejidad en la organización social y una explotación más eficiente de los recursos naturales.
```

### 5 — Determinación de la técnica

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["tecnologia", "calculo"]

enunciado: "Si un arqueólogo encuentra un conjunto de 12 herramientas líticas con bulbos de percusión pronunciados y plataformas anchas, ¿qué técnica de talla se utilizó probablemente?"

tipo: mc
opciones_explicitas: ["percusión", "presión"]
respuesta: "percusión"

explicacion: |
  La técnica de presión permite obtener lascas muy finas y controladas, mientras que la percusión (especialmente con percutor duro) es la forma más primaria de obtener lascas.
```

### 6 — El soporte del arte rupestre

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["arte_rupestre", "paleolitico"]

tipo: mc
opciones_explicitas: ["Paredes de piedra", "Lienzos de tela", "Pieles de animales", "Tablas de madera"]
respuesta: "Paredes de piedra"

enunciado: "En el arte rupestre de cuevas como Altamira o Lascaux, ¿cuál era el soporte principal utilizado para las pinturas?"

explicacion: |
  El arte rupestre se caracteriza por utilizar las paredes de las cuevas (soporte pétreo) como lienzo para sus representaciones.
```

### 7 — Técnicas de grabado

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["grabado", "tecnicas"]

tipo: completar
respuestas_validas:
  - "grabado"

enunciado: "Si un artista prehistórico utiliza una piedra afilada para realizar una incisión profunda en la roca, está realizando un ___."

pasos:
  - "Identificar la acción: incisión en la roca."
  - "Relacionar la acción con la técnica correspondiente."

explicacion: |
  El término técnico para la marca dejada por una incisión en una superficie sólida es el grabado.
```

### 8 — Pigmentos naturales

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["pigmentos", "quimica_prehistorica"]

variables:
  par: uno_de([["ocre", "óxido de hierro"], ["negro", "carbón vegetal"]])

tipo: mc
opciones_explicitas: ["óxido de hierro", "carbón vegetal", "arcilla blanca", "sangre de animal"]

enunciado: "Para obtener el color {par[0]} muy común en las pinturas de la Cueva de las Manos, los humanos utilizaban:"

respuesta: par[1]

explicacion: |
  Los pigmentos se obtenían de minerales (como el óxido de hierro para rojos/ocres) o de materia orgánica quemada (carbón para el negro).
```

### 9 — Simbolismo y pensamiento

```
metadata:
  materia: "historia_profucha"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["simbolismo", "homo_sapiens"]

tipo: mc
opciones_explicitas: ["Capacidad de abstracción", "Necesidad de decorar", "Falta de herramientas", "Supervivencia alimentaria"]
respuesta: "Capacidad de abstracción"

enunciado: "La presencia de signos abstractos y manos en negativo en las cuevas sugiere que el Homo sapiens ya poseía ___."

explicacion: |
  La capacidad de representar conceptos no tangibles o símbolos es una prueba clave del desarrollo del pensamiento simbólico y el lenguaje complejo.
```

### 10 — Secuencia de creación

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["procesos", "arte"]

tipo: ordenar
opciones_explicitas: ["Preparación del soporte", "Preparación del pigmento", "Aplicación de la pintura", "Agotamiento de la luz"]

enunciado: "Ordena el proceso lógico que seguiría un artista en una cueva profunda para realizar una pintura rupestre:"

explicacion: |
  El artista primero debe asegurar la superficie, luego crear la mezcla de color y finalmente aplicarla, todo esto gestionando la limitada luz de la cueva.
respuesta_orden: ["Preparación del soporte", "Preparación del pigmento", "Aplicación de la pintura", "Agotamiento de la luz"]
```

### 11 — Temática de la pintura rupestre

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["prehistoria", "arte_rupestre"]

tipo: mc
opciones_explicitas: ["Animales de caza", "Paisajes urbanos", "Figuras geométricas abstractas", "Retratos de reyes"]
respuesta: "Animales de caza"

enunciado: "En el arte rupestre del Paleolítico, ¿qué tipo de figuras eran las representadas con mayor frecuencia en las paredes de las cuevas?"

explicacion: |
  Las pinturas rupestres más comunes representaban animales que formaban parte de la dieta o el entorno inmediato de los grupos humanos, como bisontes, caballos y ciervos.
```

### 12 — El significado de las manos

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["simbolismo", "manos"]

tipo: mc
opciones_explicitas: ["Siluetas de manos", "Escenas de guerra", "Instrumentos musicales", "Mapas estelares"]
respuesta: "Siluetas de manos"

enunciado: "Además de animales, es muy común encontrar en las cuevas la técnica de la estarcido para representar ___."

explicacion: |
  Las siluetas de manos (ya sean en positivo o negativo) son uno de los elementos más icónicos y recurrentes del arte rupestre mundial.
```

### 13 — Narrativa en la roca

```
metadata:
  materia: "historia_profucha"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["escenas", "caza"]

tipo: mc
opciones_explicitas: ["escenas de caza", "mapas de navegación", "diagramas matemáticos", "dibujos arquitectónicos"]
respuesta: "escenas de caza"

enunciado: "Cuando los artistas prehistóricos representaban la interacción entre humanos y animales, solían plasmar ___."

explicacion: |
  Las escenas de caza muestran la dinámica de la supervivencia, representando a los cazadores con lanzas o arcos frente a sus presas.
```

### 14 — Elementos del arte rupestre

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["identificacion"]

tipo: completar
respuestas_validas:
  - "animales"
  - "manos"
  - "escenas"

enunciado: "El arte rupestre suele clasificarse en tres grandes categorías temáticas: ___, siluetas de ___ y ___."

explicacion: |
  Estas tres categorías cubren la mayoría de los hallazgos en el registro arqueológico de las pinturas rupestres.
```

### 15 — Secuencia de observación

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["observacion", "estudio"]

tipo: ordenar
opciones_explicitas: ["Identificar el pigmento", "Observar la figura", "Analizar el contexto de la cueva", "Interpretar el significado"]

enunciado: "Un arqueólogo sigue un proceso lógico para estudiar una pintura rupestre. Ordena estos pasos de forma coherente:"

explicacion: |
  El método científico en arqueología comienza con la observación directa y el análisis material antes de pasar a la interpretación teórica.
respuesta_orden: ["Observar la figura", "Identificar el pigmento", "Analizar el contexto de la cueva", "Interpretar el significado"]
```

### 16 — El salto cognitivo del arte

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["cognicion", "simbolismo", "hominidos"]

variables:
  escenario: uno_de([["pintura de manos en negativo", "capacidad de representación simbólica"], ["herramientas de piedra tallada", "planificación técnica avanzada"], ["adornos con conchas marinas", "pensamiento abstracto y estético"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["capacidad de representación simbólica", "planificación técnica avanzada", "pensamiento abstracto y estético"]

enunciado: "La presencia de {escenario[0]} en cuevas prehistóricas es una evidencia fundamental de la {escenario[1]} del Homo sapiens."

explicacion: |
  El uso de pigmentos para dejar la huella de la mano indica que el individuo no solo interactuaba con el entorno, sino que proyectaba su identidad, un signo claro de pensamiento simbólico.
```

### 17 — Tecnología y evolución

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["tecnologia", "evolucion"]

respuesta: "Homo sapiens"
tipo: completar
respuestas_validas:
  - "Homo sapiens"
  - "Homo sapiens sapiens"

enunciado: "A diferencia de otros homínidos, el ___ desarrolló una capacidad de abstracción que le permitió crear herramientas complejas y arte rupestre."

explicacion: |
  Aunque otros homínidos usaron herramientas, la combinación de arte complejo y tecnología diversificada es característica del Homo sapiens.
```

### 18 — La secuencia de la creación pictórica

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["proceso", "arte_rupestre"]

opciones_explicitas: ["Preparación del soporte", "Preparación de pigmentos", "Aplicación del color", "Grabado de contornos"]

respuesta_orden: ["Preparación del soporte", "Preparación de pigmentos", "Grabado de contornos", "Aplicación del color"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que un artista del Paleolítico Superior seguiría para realizar una pintura de gran formato en una pared de la cueva:"

explicacion: |
  Primero se debe elegir y limpiar la pared, luego fabricar la pintura con minerales, trazar la figura y finalmente aplicar el pigmento.
```

### 19 — El valor de la herramienta compleja

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["cognicion", "herramientas"]

variables:
  caso: uno_de([["un bifaz perfectamente simétrico", "estética y precisión"], ["un propulsor de lanza", "ingeniería y cálculo de trayectoria"], ["un raspador de hueso", "especialización funcional"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["estética y precisión", "ingeniería y cálculo de trayectoria", "especialización funcional"]

enunciado: "La fabricación de {caso[0]} sugiere que el homínido no solo buscaba utilidad, sino también {caso[1]}."

explicacion: |
  La simetría en herramientas de piedra que no es estrictamente necesaria para el corte indica una búsqueda de orden y belleza, propia de la mente moderna.
```

### 20 — Simbolismo y supervivencia

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["simbolismo", "evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que el arte rupestre representa un salto cualitativo en la cognición debido a su naturaleza no utilitaria inmediata?"

explicacion: |
  Correcto. El arte no tiene una función de supervivencia directa (como buscar comida), sino que cumple funciones sociales, rituales o de comunicación.
```

### 21 — Identificación de técnica

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["arte_rupestre", "tecnicas"]

variables:
  datos: [["pigmentos mezclados con grasa animal aplicados con los dedos", "Pintura con los dedos"], ["grabados realizados con piedras duras sobre la roca", "Petroglifos"], ["dibujos realizados con carbón vegetal sobre superficies claras", "Dibujo al carbón"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Pintura con los dedos", "Petroglifos", "Dibujo al carbón"]

enunciado: "Se ha descubierto una cueva con las siguientes características: {datos[idx][0]}. ¿A qué técnica pertenece?"

explicacion: |
  La descripción corresponde a {datos[idx][1]}.
```

### 22 — Materiales de grabado

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["herramientas", "grabado"]

variables:
  datos: [["piedra de sílex", "percutor"], ["hueso endurecido", "estilete"], ["punta de madera", "incisores"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "percutor"
  - "estilete"
  - "incisores"

enunciado: "Para grabar la roca a partir de {datos[idx][0]}, el artista necesitó un/a ___."

explicacion: |
  El instrumento utilizado para la acción descrita es un/a {datos[idx][1]}.
```

### 23 — Clasificación de pigmentos

```
metadata:
  materia: "historia_profucha"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["quimica_antigua", "pigmentos"]

variables:
  datos: [["óxido de hierro", "rojo"], ["óxido de manganeso", "negro"], ["arcilla blanca", "blanco"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["rojo", "negro", "blanco"]

enunciado: "Un arqueólogo encuentra restos de coloración {datos[idx][0]} en una pared. ¿Cuál es el pigmento probable?"

explicacion: |
  El pigmento utilizado para obtener el color {datos[idx][1]} es el {datos[idx][0]}.
```

### 24 — Secuencia de creación

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta_orden: ["Preparación de la superficie", "Aplicación del pigmento", "Sellado con grasa"]
tipo: ordenar
opciones_explicitas: ["Preparación de la superficie", "Aplicación del pigmento", "Sellado con grasa"]

enunciado: "Ordene los pasos lógicos para la creación de una pintura mural rupestre duradera:"

explicacion: |
  El proceso estándar requiere primero limpiar la roca, luego aplicar el color y finalmente protegerlo con un aglutinante como la grasa.
```

### 25 — Determinación de soporte

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["soporte", "arqueologia"]

variables:
  datos: [["pared de piedra", "pared"], ["banco de roca", "pared"], ["techo de la cueva", "techo"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["pared", "techo", "suelo"]

enunciado: "La obra se encuentra plasmada sobre un/a {datos[idx][0]}. Por lo tanto, el soporte es un/a ___."

explicacion: |
  En arqueología, la ubicación física define el soporte: {datos[idx][1]}.
```
