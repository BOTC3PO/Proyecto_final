### 1 — Biomas y Deriva Continental
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["biogeografia", "tectonica_de_placas"]

variables:
  escenario: uno_de([
    ["Pangea", "la unión de todas las masas de tierra"],
    ["Gondwana", "el supercontinente del hemisferio sur"],
    ["Laurasia", "el supercontinente del hemisferio norte"]
  ])

enunciado: "La distribución actual de biomas y especies está influenciada por la fragmentación de {escenario[0]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Pangea", "Gondwana", "Laurasia", "Panthalassa"]

explicacion: |
  La fragmentación de Pangea permitió que las especies evolucionaran de forma aislada en diferentes masas continentales, determinando la distribución actual de biomas y la biodiversidad regional.
```

### 2 — El efecto de la separación continental
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["biogeografia", "aislamiento"]

variables:
  caso: uno_de([
    ["Australia", "el continente que permitió el aislamiento de marsupiales"],
    ["América del Sur", "el continente que se unió a Norteamérica por el istmo"]
  ])

enunciado: "La separación de {caso[0]} permitió que la fauna evolucionara de manera única, un proceso clave en la biogeografía histórica."

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["Australia", "América del Sur", "África", "Antártida"]

explicacion: |
  El aislamiento geográfico prolongado impide el flujo genético, permitiendo que especies específicas evolucionen en biomas exclusivos de esa región.
```

### 3 — Factores de distribución de biomas
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores_climaticos", "biomas"]

variables:
  factor: uno_de([
    ["latitud", "la distancia respecto al ecuador"],
    ["altitud", "la altura sobre el nivel del mar"]
  ])

enunciado: "La distribución de los biomas no solo depende de la tectónica, sino también de factores climáticos como la {factor[0]}."

respuesta: factor[0]
tipo: mc
opciones_explicitas: ["latitud", "altitud", "presión", "salinidad"]

explicacion: |
  La latitud determina la radiación solar recibida, lo cual es un factor determinante para la clasificación de biomas (tropicales, templados, polares).
```

### 4 — Secuencia de formación geológica
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["historia_geologica", "procesos"]

enunciado: "Ordena cronológicamente los procesos que influyen en la distribución de la vida en la Tierra:"

pasos:
  - "Formación de supercontinentes (ej. Pangea)"
  - "Fragmentación de las masas continentales"
  - "Evolución y especiación por aislamiento"
  - "Establecimiento de biomas actuales"

respuesta: ["Formación de supercontinentes (ej. Pangea)", "Fragmentación de las masas continentales", "Evolución y especiación por aislamiento", "Establecimiento de biomas actuales"]
tipo: ordenar
opciones_explicitas: ["Formación de supercontinentes (ej. Pangea)", "Fragmentación de las masas continentales", "Evolución y especiación por aislamiento", "Establecimiento de biomas actuales"]

explicacion: |
  La estructura geológica establece la base física, la fragmentación crea barreras, el aislamiento permite la especiación y el clima finaliza la configuración de los biomas.
```

### 5 — Relación Biogeografía - Tectónica
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["biogeografia", "tectonica"]

variables:
  relacion: uno_de([
    ["directa", "existe una conexión clara entre movimiento de placas y especies"],
    ["inversa", "el movimiento de placas impide la distribución de especies"]
  ])

enunciado: "La relación entre la tectónica de placas y la biogeografía es ___________."

respuesta: tabla[0][1]
tipo: completar
opciones_explicitas: ["directa", "inversa"]
respuestas_validas: ["directa", "inversa"]

pasos:
  - "Analizar cómo el movimiento de placas crea o destruye barreras físicas."
  - "Considerar cómo estas barreras afectan la migración de especies."

explicacion: |
  Es una relación directa: el movimiento de las placas tectónicas crea montañas, océanos y separa continentes, lo que dicta las rutas de migración y el aislamiento de las especies.
```