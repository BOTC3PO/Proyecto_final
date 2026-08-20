### 1 — Identificación de propiedades
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["definiciones", "dureza", "tenacidad"]

enunciado: "Un diamante es extremadamente difícil de rayar, mientras que un trozo de vidrio se rompe fácilmente ante un impacto seco. El diamante presenta una alta ___ y el vidrio una baja ___."

respuestas_validas: ["dureza", "tenacidad"]
respuesta: ["dureza", "tenacidad"]
tipo: completar

explicacion: |
  La dureza es la resistencia de un material a ser rayado o penetrado. La tenacidad es la capacidad de absorber energía antes de la rotura (resistencia al impacto).
```

### 2 — Análisis de un caso de falla
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "frágil"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, "cobre", "ductil"], [1, "hierro fundido", "frágil"]]

enunciado: "Se analiza un material {datos[escenario_idx][1]}. Al someterlo a una deformación plástica prolongada, este se estira significativamente sin romperse. Por lo tanto, el material es {datos[escenario_idx][2]}."

opciones_explicitas: ["ductil", "frágil"]
respuesta: datos[escenario_idx][2]
tipo: mc

explicacion: |
  La ductilidad es la propiedad que permite a un material deformarse plásticamente (estirarse) antes de la fractura.
```

### 3 — Comparativa de comportamiento
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "basico"
  tags: ["verdadero_falso"]

enunciado: "Un material que absorbe mucha energía antes de romperse (alta tenacidad) es necesariamente un material muy duro."

respuesta: falso
tipo: vf

explicacion: |
  No siempre. Un material puede ser muy tenaz (como el acero de baja graduación) pero no ser especialmente duro. La dureza y la tenacidad son propiedades distintas.
```

### 4 — Proceso de deformación
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "intermedio"
  tags: ["ductilidad", "proceso"]

enunciado: "Ordena el proceso típico de un material dúctil cuando se somete a una carga de tracción creciente:"

opciones_explicitas: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
respuesta: ["Deformación elástica", "Deformación plástica", "Estricción", "Fractura"]
tipo: ordenar

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego la plástica (permanente), seguida de la estricción (reducción de sección local) y finalmente la fractura.
```

### 5 — Cálculo de energía (Tenacidad conceptual)
```
metadata:
  materia: "materiales"
  tema: "propiedades_mecanicas"
  nivel: "avanzado"
  tags: ["tenacidad", "area_bajo_curva"]

variables:
  curva_tipo: uno_de([0, 1])
  curva_datos: [[0, 50, "alta"], [1, 10, "baja"]]

enunciado: "En un ensayo de tracción, la tenacidad se representa mediante el área bajo la curva de esfuerzo-deformación. Si comparamos un material con un área de {curva_datos[curva_tipo][0]} MPa·mm/mm frente a otro con un área de 5 MPa·mm/mm, el primero tiene una tenacidad {curva_datos[curva_tipo][1]}."

opciones_explicitas: ["alta", "baja"]
respuesta: curva_datos[curva_tipo][2]
tipo: mc

explicacion: |
  La tenacidad es la integral del esfuerzo respecto a la deformación; a mayor área bajo la curva, mayor es la energía absorbida y, por ende, mayor la tenacidad.
```