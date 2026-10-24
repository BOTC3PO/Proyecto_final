### 1 — Definición de bioma
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["conceptos", "ecologia"]

tipo: mc
opciones_explicitas: ["Una agrupación de especies animales y vegetales en un área determinada.", "Una gran región con clima, vegetación y fauna característicos.", "Un conjunto de suelos con propiedades químicas similares.", "La suma de todos los ecosistemas de un continente."]

enunciado: "Un bioma se define como ___."

explicacion: |
  Un bioma es una unidad ecológica de gran escala que se caracteriza por tener un clima, un tipo de vegetación y una fauna específicos que se repiten en diferentes partes del planeta.
```

### 2 — Factores determinantes
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores_climaticos"]

tipo: mc
opciones_explicitas: ["La altitud y la presión atmosférica.", "La latitud y el clima.", "La distancia a la costa y la humedad.", "La actividad volcánica y el relieve."]

enunciado: "La distribución de los biomas en la superficie terrestre está determinada principalmente por:"

explicacion: |
  La latitud determina la radiación solar recibida, lo cual, junto con la humedad y la temperatura (clima), define el tipo de vegetación y el bioma resultante.
```

### 3 — Clasificación de biomas
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["ejemplos", "clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Selva Tropical", "Desierto"],
    ["Altas precipitaciones y calor constante", "Escasez extrema de agua y temperaturas extremas"]
  ]

tipo: completar
respuestas_validas: ["Selva Tropical", "Desierto"]

enunciado: "El bioma caracterizado por {escenarios[escenario_idx][1]} es la {escenarios[escenario_idx][0]}."

explicacion: |
  El usuario debe identificar el bioma basado en la descripción climática proporcionada.
```

### 4 — Relación clima-vegetación
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["clima", "vegetacion"]

tipo: completar
respuestas_validas: ["Tundra", "Taiga", "Sabana"]

enunciado: "El bioma de clima frío, con suelos congelados (permafrost) y vegetación de musgos y líquenes, se denomina ___."

explicacion: |
  La Tundra se caracteriza por condiciones climáticas extremas de frío y la presencia de permafrost, lo que impide el crecimiento de árboles grandes.
```

### 5 — Orden de complejidad biológica
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["jerarquia", "ecologia"]

tipo: ordenar
opciones_explicitas: ["Individuo", "Población", "Comunidad", "Ecosistema", "Bioma"]

enunciado: "Ordene de menor a mayor complejidad los niveles de organización ecológica que conforman la estructura de un bioma:"

explicacion: |
  La jerarquía parte desde el organismo individual, pasa por grupos de la misma especie (población), interacciones entre especies (comunidad), la relación con el medio físico (ecosistema) y finalmente la escala global (bioma).
```