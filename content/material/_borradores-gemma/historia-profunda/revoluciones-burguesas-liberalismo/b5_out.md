### 1 — El principio de la división de funciones
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "basico"
  tags: ["liberalismo", "poder"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un sistema donde el Rey dicta las leyes, las ejecuta y las juzga a su voluntad.", "Separación de poderes"],
    ["Un sistema donde el Rey tiene el control total de la justicia, el legislativo y el ejecutivo.", "Separación de poderes"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Igualdad", "Libertad", "Separación de poderes"]

enunciado: "En el contexto de las revoluciones burguesas, un sistema donde {escenarios[escenario_idx][0]} representa una violación de qué principio liberal fundamental?"

explicacion: |
  El liberalismo político busca evitar la tiranía mediante la división de funciones del Estado en órganos distintos e independientes.
```

### 2 — El concepto de igualdad jurídica
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "basico"
  tags: ["liberalismo", "derechos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["la nobleza tiene privilegios legales que el campesino no posee", "Igualdad"],
    ["el nacimiento determina los derechos civiles de una persona", "Igualdad"]
  ]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["Igualdad", "Libertad", "Propiedad"]

enunciado: "Si en una sociedad {casos[caso_idx][0]}, se está negando el principio de ___."

explicacion: |
  La igualdad ante la ley (isonomía) es un pilar del liberalismo que busca eliminar los estamentos y privilegios de la aristocracia.
```

### 3 — La libertad individual
```
metadata:
  materia: "historia_profucha"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["liberalismo", "derechos"]

variables:
  situacion_idx: uno_de([0, 1])
  situaciones: [
    ["el Estado prohíbe la libre circulación de mercancías", "Libertad"],
    ["el Estado impone censura previa a las ideas publicadas", "Libertad"]
  ]

respuesta: situaciones[situacion_idx][1]
tipo: completar
respuestas_validas: ["Libertad"]

enunciado: "Cuando el Estado interviene de forma arbitraria, como cuando ___ , se está vulnerando el principio de ___."

explicacion: |
  El liberalismo defiende un ámbito de acción individual (libertad de culto, expresión, comercio) donde el Estado no debe interferir.
```

### 4 — Ordenamiento de valores liberales
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["liberalismo", "conceptos"]

respuesta: ["Igualdad", "Libertad", "Propiedad"]
tipo: ordenar
opciones_explicitas: ["Propiedad", "Igualdad", "Libertad"]

enunciado: "Ordena los siguientes pilares del pensamiento liberal clásico, desde el que busca la justicia social ante el privilegio, pasando por la autonomía individual, hasta la base económica burguesa:"

explicacion: |
  La tríada clásica suele entender la igualdad ante la ley, la libertad individual y el derecho a la propiedad privada como ejes de la modernidad liberal.
```

### 5 — Identificación de la soberanía
```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "avanzado"
  tags: ["liberalismo", "soberania"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["la soberanía reside en el monarca por derecho divino", "Libertad"],
    ["el poder emana del pueblo a través de la ley", "Libertad"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Igualdad", "Libertad", "Propiedad"]

enunciado: "Si en una constitución se establece que {escenarios[escenario_idx][0]}, se está rompiendo con el principio de ___ política (entendida como la capacidad de autodeterminación)."

explicacion: |
  La transición de la soberanía de Dios/Rey a la soberanía nacional es el paso fundamental hacia la libertad política moderna.
```