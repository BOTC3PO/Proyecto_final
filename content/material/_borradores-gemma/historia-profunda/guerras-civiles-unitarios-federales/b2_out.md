### 1 — Los bandos en pugna
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["politica", "siglo_XIX"]

tipo: mc
opciones_explicitas: ["Unitarios", "Federales", "Anarquistas", "Libertadores"]

enunciado: "Durante las guerras civiles argentinas del siglo XIX, las dos facciones políticas principales que se enfrentaron por el modelo de organización del Estado fueron los ___ y los ___."

explicacion: |
  Los Unitarios buscaban un gobierno centralizado en Buenos Aires, mientras que los Federales defendían la autonomía de las provincias.
```

### 2 — El modelo de gobierno
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["modelo_estatal", "centralismo"]

variables:
  escenario: uno_de([["centralismo", "Buenos Aires"], ["federalismo", "Provincias"]])

tipo: completar
respuestas_validas: ["centralismo", "federalismo"]
respuesta: escenario[0]

enunciado: "Si un grupo político propone que todas las leyes y decisiones administrativas deben emanar exclusivamente de un gobierno central en la capital, está defendiendo el ___."

explicacion: |
  El centralismo es la característica principal del pensamiento unitario, que buscaba la concentración del poder en un solo núcleo.
```

### 3 — El rol de la Aduana
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["economia", "aduana"]

variables:
  causa_econ: uno_de([["la libre navegación de los ríos", "la nacionalización de la aduana"]])

tipo: mc
opciones_explicitas: ["la libre navegación de los ríos", "la nacionalización de la aduana", "la eliminación de los impuestos", "la unión aduanera"]

enunciado: "Uno de los principales focos de conflicto económico entre las provincias y Buenos Aires fue ___."

explicacion: |
  Las provincias federales exigían la nacionalización de los ingresos de la aduana de Buenos Aires y la libre navegación de los ríos interiores, mientras que Buenos Aires quería retener la renta aduanera.
```

### 4 — Secuencia de tensiones
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["proceso_historico"]

tipo: ordenar
opciones_explicitas: ["Caos de las guerras civiles", "Lucha por la organización constitucional", "Consolidación del Estado Nacional"]

enunciado: "Ordene cronológicamente los procesos que marcaron la transición desde la desintegración post-independencia hasta la formación del Estado moderno:"

explicacion: |
  Primero hubo un largo periodo de guerras civiles, luego el debate constitucional de 1853 y finalmente la consolidación del Estado bajo la presidencia de Mitre, Sarmiento y Avellaneda.
```

### 5 — El conflicto de la soberanía
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["soberania", "provincias"]

tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "El federalismo buscaba que cada provincia mantuviera su propia autonomía y autoridades locales, sin estar subordinada totalmente al poder central."

explicacion: |
  Verdadero. El federalismo se basaba en el respeto a la soberanía de las entidades provinciales preexistentes.
```