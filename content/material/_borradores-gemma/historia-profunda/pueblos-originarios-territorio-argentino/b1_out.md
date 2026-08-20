### 1 — Ubicación de los Diaguitas
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "norte", "geografia"]

tipo: mc
opciones_explicitas: ["Noroeste (valles y montañas)", "Litoral (ríos)", "Patagonia (estepa)", "Pampa (llanura)"]
respuesta: "Noroeste (valles y montañas)"

enunciado: "Los pueblos de cultura Diaguita se asentaban principalmente en la zona del ______."

explicacion: |
  Los diaguitas habitaban los valles calchaquíes y zonas montañosas del actual Noroeste Argentino, desarrollando una agricultura avanzada en terrazas.
```

### 2 — Modo de vida de los Tehuelches
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "patagonia", "nómadas"]

tipo: mc
opciones_explicitas: ["Agricultores sedentarios", "Cazadores-recolectores nómadas", "Pescadores de gran escala", "Comerciantes de seda"]
respuesta: "Cazadores-recolectores nómadas"

enunciado: "Los Tehuelches, habitantes de la Patagonia, se caracterizaban por su estilo de vida de:"

explicacion: |
  Eran grupos nómadas que se desplazaban siguiendo los ciclos de caza de guanacos y choiques, además de la recolección de frutos silvestres.
```

### 3 — La cultura Guaraní y el Litoral
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["guaraníes", "litoral", "agricultura"]

variables:
  escenario: uno_de([
    ["Guaraníes", "agricultura de roza y quema", "selva/ríos"],
    ["Mapuches", "pastoreo y agricultura", "zonas templadas"],
    ["Selk'nam", "caza de focas", "Tierra del Fuego"]
  ])

tipo: completar
respuestas_validas: ["agricultura de roza y quema", "pastoreo y agricultura", "caza de focas"]
respuesta: escenario[0][1]

enunciado: "Los pueblos {escenario[0][2]} se destacaban por su técnica de {escenario[0][1]}."

explicacion: |
  Los guaraníes utilizaban la técnica de roza y quema para la agricultura en las zonas de selva y ríos del Litoral.
```

### 4 — Orden de expansión/presencia
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["ordenar", "geografia"]

tipo: ordenar
opciones_explicitas: ["Diaguitas", "Guaraníes", "Mapuches", "Tehuelches"]
respuesta: ["Diaguitas", "Guaraníes", "Mapuches", "Tehuelches"]

enunciado: "Ordene los siguientes pueblos de Norte a Sur (desde el Noroeste hacia la Patagonia):"

explicacion: |
  El orden geográfico de norte a sur es: Diaguitas (Noroeste), Guaraníes (Litoral/Noreste), Mapuches (Zona Centro/Sur) y Tehuelches (Patagonia).
```

### 5 — El entorno de los Mapuches
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["mapuches", "sur", "territorio"]

tipo: input
tolerancia_abs: 0

variables:
  datos: uno_de([
    ["mapuches", "sur", "Pampa"],
    ["diaguitas", "noroeste", "Noroeste"],
    ["tehuelches", "patagonia", "Patagonia"]
  ])

enunciado: "Los pueblos ______ habitaban principalmente en la zona ______ de Argentina."

respuesta: "mapuches"

explicacion: |
  Los mapuches ocupaban territorios que se extendían desde el centro-sur de la actual Argentina hacia el oeste (Chile).
```