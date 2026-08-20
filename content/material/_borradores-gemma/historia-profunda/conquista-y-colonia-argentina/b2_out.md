### 1 — Origen administrativo del territorio
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["organizacion_colonial", "virreinatos"]

respuesta: "Perú"
tipo: completar
respuestas_validas: ["Perú"]

enunciado: "Antes de la creación del Virreinato del Río de la Plata, el territorio que hoy ocupa Argentina pertenecía al Virreinato del ___."

explicacion: |
  Durante gran parte de la era colonial, las tierras rioplatenses dependían de la administración del Virreinato del Perú, con sede en Lima.
```

### 2 — El cambio de 1776
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["virreinatos", "reformas_borbonicas"]

opciones_explicitas: ["Lima", "Buenos Aires", "Santiago", "Asunción"]
respuesta: "Buenos Aires"
tipo: mc

enunciado: "Con la creación del Virreinato del Río de la Plata en 1776, ¿cuál se convirtió en la nueva capital administrativa?"

explicacion: |
  La creación del Virreinato del Río de la Plata buscaba mejorar la defensa del Atlántico y el control comercial, estableciendo a Buenos Aires como su centro de poder.
```

### 3 — Secuencia de organización territorial
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["orden_cronologico", "virreinatos"]

opciones_explicitas: ["Virreinato del Perú", "Virreinato del Río de la Plata", "Estado Argentino"]
respuesta: ["Virreinato del Perú", "Virreinato del Río de la Plata", "Estado Argentino"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de organización política del territorio que hoy es Argentina:"

explicacion: |
  La secuencia correcta comienza con la dependencia del Perú, sigue con la autonomía regional del Río de la Plata y culmina con la formación del Estado nacional.
```

### 4 — El rol de la capital
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["capitales", "geografia_colonial"]

variables:
  escenario: uno_de([
    ["1776", "Río de la Plata"],
    ["1542", "Perú"]
  ])

respuesta: "Río de la Plata"
tipo: completar
respuestas_validas: ["Río de la Plata"]

enunciado: "En el año {escenario[0]}, se fundó el Virreinato del {escenario[1]}."

explicacion: |
  La reforma administrativa de 1776 fue fundamental para el desarrollo de la región del Plata.
```

### 5 — Identificación de cambios
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["reformas", "geopolitica"]

opciones_explicitas: ["Perú", "Río de la Plata"]
respuesta: "Río de la Plata"
tipo: mc

enunciado: "La creación de un nuevo virreinato en 1776 significó que el territorio pasó de depender del Virreinato del Perú a pertenecer al Virreinato del ___."

explicacion: |
  Este cambio permitió una gestión más directa de las rutas comerciales hacia el Atlántico.
```