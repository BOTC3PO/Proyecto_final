### 1 — Impacto de la Revolución Industrial
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["clima", "historia", "carbono"]

variables:
  escenario: uno_de([["Era Preindustrial", "bajo"], ["Era Industrial", "alto"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["bajo", "medio", "alto"]

enunciado: "Si analizamos la etapa de la {escenario[idx][0]}, el nivel de impacto climático global se considera ____."

explicacion: |
  La era preindustrial se caracterizaba por un uso de biomasa y combustibles fósiles muy limitado, resultando en un impacto climático bajo comparado con la era industrial.
```

### 2 — Emisiones de CO2 y Carbón
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["emisiones", "carbono", "historia"]

variables:
  datos: [["1750", "10"], ["1950", "5000"], ["2020", "36000"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "En el año {datos[idx][0]}, la tasa de emisión global de CO2 (en millones de toneladas) era aproximadamente de ____."

pasos:
  - "Identificar el año en la cronología histórica."
  - "Asociar el valor de emisiones correspondiente a dicho año."

explicacion: |
  La escala de emisiones creció exponencialmente desde el año {datos[idx][0]} debido a la intensificación de la actividad económica.
```

### 3 — Evolución del Impacto Climático
```
metadata:
  materia: "historia_profunda"
  tema: "huella_clima_evolucion"
  nivel: "intermedio"
  tags: ["cronologia", "impacto"]

respuesta: ["Era Preindustrial", "Revolución Industrial", "Era de la Información"]
tipo: ordenar
opciones_explicitas: ["Era Preindustrial", "Revolución Industrial", "Era de la Información"]

enunciado: "Ordena cronológicamente las etapas de la humanidad según el aumento progresivo de su huella climática:"

explicacion: |
  La secuencia muestra cómo la complejidad tecnológica y el uso de combustibles fósiles aumentaron la huella de carbono de forma escalonada.
```

### 4 — El Gran Aceleramiento
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["aceleracion", "antropoceno"]

variables:
  caso: uno_de([["antes de 1950", "estacionario"], ["después de 1950", "acelerado"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["estacionario", "acelerado"]

enunciado: "El impacto climático se describe como ____ en el periodo {caso[idx][0]}."

explicacion: |
  El periodo después de 1950, conocido como 'El Gran Aceleramiento', muestra un crecimiento exponencial en el impacto humano sobre la biosfera.
```

### 5 — Comparativa de Huella de Carbono
```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["comparativa", "clima"]

variables:
  comparativa: [["Preindustrial", "Baja"], ["Industrial", "Alta"]]
  idx: uno_de([0, 1])

respuesta: comparativa[idx][1]
tipo: mc
opciones_explicitas: ["Baja", "Media", "Alta"]

enunciado: "La huella de carbono de la era {comparativa[idx][0]} es de magnitud ____."

explicacion: |
  La magnitud depende directamente de la fuente de energía predominante en cada periodo histórico.
```