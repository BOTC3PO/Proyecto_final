### 1 — La unidad de medida cósmica
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["astronomia", "unidades"]

tipo: mc
opciones_explicitas: ["Año luz", "Kilómetro", "Milla náutica", "Unidad Astronómica"]

enunciado: "Debido a que las distancias entre las galaxias son inmensas, los kilómetros resultan inmanejables. ¿Cuál es la unidad de medida que representa la distancia que recorre la luz en un año?"

explicacion: |
  El año luz es la unidad estándar para medir distancias interestelares e intergalácticas, ya que un kilómetro es una medida demasiado pequeña para escalas cósmicas.
```

### 2 — Cálculo de distancia lumínica
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["calculo", "luz"]

variables:
  velocidad_luz_km_s: 299792
  segundos_en_un_dia: 86400
  dias_en_un_anio: 365.25

tipo: input
tolerancia_abs: 1000000

enunciado: "Si la luz viaja a aproximadamente {velocidad_luz_km_s} km/s, ¿cuántos kilómetros recorre aproximadamente en un año (considerando {dias_en_un_anio} días)? (Calcula el valor aproximado en km)"

pasos:
  - "Multiplica la velocidad de la luz por los segundos en un día."
  - "Multiplica el resultado por la cantidad de días en un año."

explicacion: |
  La distancia es: 299792 * 86400 * 365.25 ≈ 9.46 * 10^12 km.
```

### 3 — El concepto de escala
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "basico"
  tags: ["conceptos"]

tipo: completar
respuestas_validas: ["inmanejables", "imposibles", "infinitas"]

enunciado: "El uso de unidades como el año luz es necesario porque las distancias en kilómetros son ________ para el estudio de la escala galáctica."

explicacion: |
  En astronomía, las escalas humanas (como el km) pierden utilidad práctica cuando se trata de distancias entre sistemas estelares.
```

### 4 — Relación de magnitudes
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  escenario: uno_de([
    ["La Luna", "distancia corta"],
    ["Andrómeda", "distancia larga"]
  ])

tipo: mc
opciones_explicitas: ["distancia corta", "distancia larga"]

enunciado: "Dependiendo de la escala, la distancia a {escenario[0]} se mide en kilómetros, mientras que la distancia a {escenario[1]} se mide en ________."

explicacion: |
  La Luna está a unos 384,400 km (escala local), mientras que la Galaxia de Andrómeda está a millones de años luz (escala galáctica).
```

### 5 — Secuencia de escalas
```
metadata:
  materia: "historia_profunda"
  tema: "galaxias_tipos_escala"
  nivel: "avanzado"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Sistema Solar", "Galaxia", "Universo Observable"]

enunciado: "Ordena las siguientes estructuras de la escala más pequeña a la más grande:"

explicacion: |
  El orden correcto es: primero el Sistema Solar, luego la Galaxia (que contiene miles de millones de estrellas) y finalmente el Universo Observable.
```