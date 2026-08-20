### 1 — El soporte del arte rupestre
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["arte_rupestre", "paleolitico"]

tipo: mc
opciones_explicitas: ["Paredes de piedra", "Lienzos de tela", "Pieles de animales", "Tablas de madera"]

enunciado: "En el arte rupestre de cuevas como Altamira o Lascaux, ¿cuál era el soporte principal utilizado para las pinturas?"

explicacion: |
  El arte rupestre se caracteriza por utilizar las paredes de las cuevas (soporte pétreo) como lienzo para sus representaciones.
```

### 2 — Técnicas de grabado
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["grabado", "tecnicas"]

variables:
  tecnica_idx: uno_de([0, 1])
  tecnica_nombre: uno_de(["grabado", "pintura"])
  tecnica_desc: uno_de(["incisión en la piedra", "aplicación de pigmentos"])

tipo: completar
respuestas_validas: ["grabado", "pintura"]

enunciado: "Si un artista prehistórico utiliza una piedra afilada para realizar una incisión profunda en la roca, está realizando un ___."

pasos:
  - "Identificar la acción: incisión en la roca."
  - "Relacionar la acción con la técnica correspondiente."

explicacion: |
  El término técnico para la marca dejada por una incisión en una superficie sólida es el grabado.
```

### 3 — Pigmentos naturales
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["pigmentos", "quimica_prehistorica"]

variables:
  color_idx: uno_de([0, 1])
  color_nombre: uno_de(["ocre", "negro"])
  color_origen: uno_de(["óxido de hierro", "carbón vegetal"])

tipo: mc
opciones_explicitas: ["óxido de hierro", "carbón vegetal", "arcilla blanca", "sangre de animal"]

enunciado: "Para obtener el color {color_nombre} muy común en las pinturas de la Cueva de las Manos, los humanos utilizaban {color_origen}."

explicacion: |
  Los pigmentos se obtenían de minerales (como el óxido de hierro para rojos/ocres) o de materia orgánica quemada (carbón para el negro).
```

### 4 — Simbolismo y pensamiento
```
metadata:
  materia: "historia_profucha"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["simbolismo", "homo_sapiens"]

tipo: mc
opciones_explicitas: ["Capacidad de abstracción", "Necesidad de decorar", "Falta de herramientas", "Supervivencia alimentaria"]

enunciado: "La presencia de signos abstractos y manos en negativo en las cuevas sugiere que el Homo sapiens ya poseía ___."

explicacion: |
  La capacidad de representar conceptos no tangibles o símbolos es una prueba clave del desarrollo del pensamiento simbólico y el lenguaje complejo.
```

### 5 — Secuencia de creación
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
```