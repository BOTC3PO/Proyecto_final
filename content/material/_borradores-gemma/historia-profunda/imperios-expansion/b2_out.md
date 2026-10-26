### 1 — El Imperio Persa y su administración
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["persia", "administracion"]

respuesta: "satrapías"
tipo: completar
respuestas_validas: ["satrapías", "satrapías", "satrapías"]

enunciado: "Para administrar su vasto territorio, el Imperio Persa se dividió en provincias gobernadas por funcionarios llamados _________."

explicacion: |
  El Imperio Persa (Aqueménida) utilizaba un sistema de satrapías para mantener el control sobre sus diversas regiones.
```

### 2 — La expansión de Alejandro Magno
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["alejandro_magno", "helenismo"]

variables:
  escenario: uno_de([
    ["Grecia", "Macedonia"],
    ["Egipto", "Dinastía Ptolemaica"],
    ["India", "Reino de los Indo-Griegos"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Grecia", "Macedonia", "Egipto", "Dinastía Ptolemaica", "India", "Reino de los Indo-Griegos"]

enunciado: "Tras la muerte de Alejandro Magno, su imperio se fragmentó. ¿Qué región fue gobernada por la dinastía Ptolemaica?"

explicacion: |
  El imperio se dividió entre sus generales; Ptolomeo I Soter fundó la dinastía que gobernó Egipto.
```

### 3 — La estructura del Imperio Romano
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["roma", "politica"]

respuesta: "República"
tipo: mc
opciones_explicitas: ["República", "Monarquía", "Imperio", "Dictadura"]

enunciado: "Antes de convertirse en un Imperio bajo el mando de Augusto, Roma fue gobernada durante siglos bajo el sistema de la _________."

explicacion: |
  La República Romana se caracterizó por el equilibrio de poder entre el Senado, los magistrados y las asambleas.
```

### 4 — Dinastías de la China Antigua
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "avanzado"
  tags: ["china", "dinastias"]

variables:
  datos: [
    ["Qin", "Unificó China"],
    ["Han", "Estableció la Ruta de la Seda"],
    ["Tang", "Edad de Oro de la poesía"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Unificó China", "Estableció la Ruta de la Seda", "Edad de Oro de la poesía"]

enunciado: "La dinastía {datos[idx][0]} fue fundamental en la historia china porque {datos[idx][1]}."

explicacion: |
  Cada dinastía aportó elementos clave al desarrollo de la civilización china.
```

### 5 — Secuencia de la expansión romana
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["roma", "etapas"]

respuesta: ["Monarquía", "República", "Imperio"]
tipo: ordenar
opciones_explicitas: ["Monarquía", "República", "Imperio"]

enunciado: "Ordena cronológicamente las tres etapas principales de la historia de la civilización romana:"

explicacion: |
  La historia de Roma comienza con la Monarquía, sigue con la expansión de la República y culmina con el Imperio.
```