### 1 — El uso de controles remotos
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["luz_visible", "infrarrojo", "tecnologia"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["infrarrojo", "luz visible"], ["ultravioleta", "luz visible"]]
  frecuencia_hz: [3e12, 5e14]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["infrarrojo", "luz visible", "ultravioleta", "rayos x"]

enunciado: "Un control remoto de televisión emite una radiación que no es perceptible para el ojo humano, situándose por debajo de la frecuencia de la {datos[escenario_idx][0]}. ¿Qué tipo de radiación es?"

explicacion: |
  El control remoto utiliza luz infrarroja, la cual tiene una longitud de onda mayor y una frecuencia menor que la luz visible.
```

### 2 — La importancia de la radiación UV
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["ultravioleta", "ionizante", "salud"]

respuesta: verdadero
tipo: vf

enunciado: "La radiación ultravioleta tiene una energía mayor que la luz visible y puede ser ionizante, lo que significa que tiene suficiente energía para arrancar electrones de los átomos."

explicacion: |
  Verdadero. Los fotones UV tienen suficiente energía para romper enlaces químicos y causar daños en el ADN, por eso se consideran radiación ionizante.
```

### 3 — Identificación de la radiación de alta energía
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "avanzado"
  tags: ["rayos_gamma", "frecuencia", "energia"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["rayos gamma", "1e22"], ["rayos x", "1e18"]]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas: ["1e22", "1e18"]

enunciado: "En un experimento de física nuclear, se detecta una radiación con una frecuencia extremadamente alta de ___ Hz, lo cual corresponde a la categoría de {casos[caso_idx][0]}."

explicacion: |
  Los rayos gamma poseen las frecuencias más altas del espectro electromagnético, superando con creces a los rayos X.
```

### 4 — Orden de las ondas en el espectro
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "basico"
  tags: ["orden", "espectro", "frecuencia"]

respuesta: ["radio", "microondas", "infrarrojo", "luz visible", "ultravioleta", "rayos gamma"]
tipo: ordenar
opciones_explicitas: ["radio", "microondas", "infrarrojo", "luz visible", "ultravioleta", "rayos gamma"]

enunciado: "Ordena las siguientes radiaciones de menor a mayor frecuencia (de la onda más larga a la más corta):"

explicacion: |
  El espectro aumenta su frecuencia (y disminuye su longitud de onda) siguiendo el orden: Radio < Microondas < Infrarrojo < Visible < UV < Rayos X < Gamma.
```

### 5 — El espectro visible y la percepción
```
metadata:
  materia: "fisica"
  tema: "espectro_electromagnetico"
  nivel: "intermedio"
  tags: ["luz_visible", "color", "frecuencia"]

variables:
  color_idx: uno_de([0,1])
  colores: [["rojo", "baja"], ["azul", "alta"]]

respuesta: colores[color_idx][1]
tipo: mc
opciones_explicitas: ["baja", "alta", "media", "nula"]

enunciado: "Si un observador percibe un color de color {colores[color_idx][0]}, está viendo una parte del espectro visible con una frecuencia {colores[color_idx][1]} en comparación al color {colores[1-color_idx][0]}."

explicacion: |
  En el espectro visible, el rojo tiene la longitud de onda más larga (frecuencia más baja) y el violeta/azul la más corta (frecuencia más alta).
```