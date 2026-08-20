### 1 — Factores de distribución de biomas
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["latitud", "clima"]

respuesta: "latitud"
tipo: mc
opciones_explicitas: ["latitud", "altitud", "densidad_poblacion", "geologia"]

enunciado: "La distribución de los biomas en la superficie terrestre sigue patrones principales determinados por la ___, debido a la inclinación del eje terrestre y el ángulo de incidencia de la radiación solar."

explicacion: |
  La latitud determina la cantidad de radiación solar que recibe una superficie, creando franjas climáticas que definen los biomas.
```

### 2 — El efecto de la altitud
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["altitud", "gradiente_termico"]

variables:
  escenario: uno_de([
    ["un ascenso constante en la montaña", "disminución de temperatura"],
    ["un descenso desde la cima", "aumento de temperatura"],
    ["un desplazamiento hacia el ecuador", "aumento de temperatura"]
  ])

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["disminución de temperatura", "aumento de temperatura", "cambio de humedad"]

enunciado: "Al aumentar la altitud en una montaña, se produce un gradiente térmico donde ocurre una {escenario[0]}."

explicacion: |
  A mayor altitud, la presión atmosférica disminuye y la temperatura desciende, lo que puede cambiar el bioma local (piso térmico).
```

### 3 — Relación latitud y biomas
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["latitud", "zonas_climaticas"]

variables:
  datos: uno_de([
    ["Ecuador", "Selva Tropical"],
    ["Zonas Templadas", "Bosques Caducifolios"],
    ["Polos", "Tundra"]
  ])

respuesta: datos[1]
tipo: mc
opciones_explicitas: ["Selva Tropical", "Bosques Caducifolios", "Tundra", "Desierto"]

enunciado: "En las zonas de {datos[0]}, el bioma predominante suele ser el de {datos[1]}."

explicacion: |
  La radiación solar constante en el ecuador permite el desarrollo de biomas con alta biodiversidad y precipitaciones abundantes.
```

### 4 — Gradiente vertical de vegetación
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["altitud", "zonas_verticales"]

respuesta: ["Bosque de niebla", "Páramo", "Superpáramo", "Nieves perpetuas"]
tipo: ordenar
opciones_explicitas: ["Bosque de niebla", "Páramo", "Superpáramo", "Nieves perpetuas"]

enunciado: "Ordene los siguientes biomas de montaña desde la menor hasta la mayor altitud (de la base a la cima):"

explicacion: |
  La altitud genera una zonificación vertical donde la vegetación cambia según la temperatura y la presión.
```

### 5 — Factores determinantes
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores", "clima"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Si sumamos los dos factores principales que determinan la distribución de biomas: la latitud (1) y la altitud (1), el resultado es: ___"

explicacion: |
  Ambos factores modifican la temperatura y la humedad, elementos clave para la vida vegetal.
```