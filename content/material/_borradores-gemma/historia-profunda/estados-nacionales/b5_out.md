### 1 — Elementos del Estado
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["teoria_politica", "elementos_estado"]

variables:
  escenario: uno_de([
    ["Un grupo de personas sin fronteras definidas ni leyes comunes.", "No es un Estado"],
    ["Un territorio con población, gobierno y leyes, pero sin identidad cultural única.", "Es un Estado"],
    ["Un grupo con identidad, territorio y gobierno, pero sin población.", "No es un Estado"]
  ])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["No es un Estado", "Es un Estado"]

enunciado: "Analiza el siguiente caso: {escenario[idx][0]} ¿Se puede considerar un Estado Nacional según la teoría clásica?"

explicacion: |
  Para que exista un Estado Nacional se requiere la coexistencia de territorio, población, gobierno y, frecuentemente, una identidad compartida.
```

### 2 — El concepto de Territorio
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["territorio", "soberania"]

variables:
  caso: uno_de([
    ["La delimitación de fronteras físicas y jurídicas.", "Territorio"],
    ["El conjunto de individuos que habitan el país.", "Población"],
    ["El conjunto de normas que rigen la convivencia.", "Gobierno"]
  ])
  idx: uno_de([0,1,2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["Territorio", "Población", "Gobierno"]

enunciado: "Un elemento fundamental de los Estados modernos es la delimitación de fronteras físicas y jurídicas. Este concepto se define como: ___"

explicacion: |
  El territorio es el espacio geográfico donde el Estado ejerce su soberanía.
```

### 3 — La construcción de la Identidad
```
metadata:
  materia: "historia_profucha"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["identidad", "nacionalismo"]

variables:
  contexto: uno_de([
    ["La creación de un sentimiento de pertenencia común.", "Identidad"],
    ["La imposición de un líder autoritario.", "Gobierno"],
    ["El control de las rutas comerciales.", "Territorio"]
  ])
  idx: uno_de([0,1,2])

respuesta: contexto[idx][1]
tipo: completar
respuestas_validas: ["Identidad", "Gobierno", "Territorio"]

enunciado: "En el proceso de formación de los Estados nacionales, la creación de un sentimiento de pertenencia común a través de símbolos y lengua se conoce como ___."

explicacion: |
  La identidad nacional es el lazo simbólico que une a la población con el Estado.
```

### 4 — Componentes del Estado (Orden)
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["orden_logico", "elementos"]

respuesta: ["Población", "Territorio", "Gobierno", "Identidad"]
tipo: ordenar
opciones_explicitas: ["Población", "Territorio", "Gobierno", "Identidad"]

enunciado: "Ordena los elementos que tradicionalmente se consideran necesarios para la consolidación de un Estado Nacional, desde el elemento humano hasta el elemento simbólico."

explicacion: |
  El orden lógico parte de la base humana (población), el espacio (territorio), la estructura de mando (gobierno) y el cohesión cultural (identidad).
```

### 5 — El rol del Gobierno
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["gobierno", "soberania"]

variables:
  situacion: uno_de([
    ["Un territorio sin una autoridad central que dicte leyes.", "Falta Gobierno"],
    ["Un pueblo con leyes pero sin un territorio asignado.", "Falta Territorio"],
    ["Una nación con identidad pero sin población real.", "Falta Población"]
  ])
  idx: uno_de([0,1,2])

respuesta: situacion[idx][1]
tipo: mc
opciones_explicitas: ["Falta Gobierno", "Falta Territorio", "Falta Población"]

enunciado: "Considera este escenario: {situacion[idx][0]} ¿Qué elemento esencial del Estado está ausente?"

explicacion: |
  Sin un gobierno (autoridad política), no hay capacidad de ejercer soberanía ni de organizar a la población.
```