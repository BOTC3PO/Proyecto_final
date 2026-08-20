### 1 — Definición de Estado Nacional
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["definicion", "politica"]

tipo: mc
opciones_explicitas: ["Una organización política sin fronteras definidas ni cultura común.", "Una organización política con territorio, población y gobierno, con una identidad nacional compartida.", "Un grupo de personas que comparten una lengua pero no tienen un gobierno propio.", "Un sistema de comercio internacional basado en tratados de libre cambio."]

enunciado: "Un Estado Nacional se define fundamentalmente como:"

explicacion: |
  El Estado Nacional es una organización política que posee un territorio delimitado, una población asentada en él y un gobierno soberano, todo esto unido por una identidad cultural, histórica o lingüística común.
```

### 2 — Componentes del Estado
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["componentes", "territorio"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Francia", "populacion_fr"], ["Japón", "populacion_jp"]]

tipo: completar
respuestas_validas: ["territorio", "población", "gobierno"]

enunciado: "Para que el país {datos[escenario_idx][0]} funcione como un Estado Nacional, requiere de un _________ delimitado, una _________ asentada y un _________ que ejerza la soberanía."

pasos:
  - "Identificar los tres pilares de la estructura estatal."
  - "Completar los espacios con los conceptos técnicos correctos."

explicacion: |
  Los tres elementos constitutivos son: territorio, población y gobierno. Sin la combinación de estos, no se puede hablar de un Estado Nacional moderno.
```

### 3 — Identidad y Cohesión
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["identidad", "cultura"]

tipo: mc
opciones_explicitas: ["La lengua y la historia común ayudan a crear el sentimiento de pertenencia.", "La fuerza militar es el único factor que define a una nación.", "El territorio es lo único que importa, la cultura es irrelevante.", "Un Estado Nacional no requiere de una identidad compartida."]

enunciado: "¿Cuál es el papel de la lengua, la cultura y la historia en la formación de un Estado Nacional?"

explicacion: |
  A diferencia del Estado como estructura puramente administrativa, el concepto de 'Nación' aporta el componente de identidad (lengua, historia, cultura) que cohesiona a la población.
```

### 4 — Secuencia de formación estatal
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["proceso", "historia"]

tipo: ordenar
opciones_explicitas: ["Consolidación de fronteras territoriales", "Surgimiento de una identidad cultural común", "Centralización del poder y gobierno"]

enunciado: "Ordena cronológicamente los procesos típicos en la formación de un Estado Nacional moderno (desde la base cultural hasta la estructura política):"

explicacion: |
  Aunque los procesos varían, históricamente la identidad cultural suele preceder o acompañar la centralización del poder y la delimitación formal de las fronteras.
```

### 5 — Diferencia entre Estado y Nación
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["conceptos", "diferencias"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un pueblo con cultura propia pero sin territorio soberano", "Un territorio con gobierno pero con múltiples naciones internas"]]

tipo: input
tolerancia_abs: 0

enunciado: "Si nos encontramos ante el caso de {casos[caso_idx][0]}, estamos ante una _________ que no ha logrado constituirse como un Estado Nacional."

explicacion: |
  Cuando existe una nación (identidad compartida) pero carece de soberanía territorial o gobierno propio, se dice que es una nación sin Estado.
```