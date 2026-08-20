### 1 — El efecto Doppler y la luz
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["astronomia", "redshift", "expansion"]

respuesta: "rojo"
tipo: mc
opciones_explicitas: ["azul", "rojo", "verde", "infrarrojo"]

enunciado: "Cuando una fuente de luz se aleja de un observador, las longitudes de onda de la luz que recibe se estiran hacia el extremo del espectro visible de color ___."

explicacion: |
  El desplazamiento hacia longitudes de onda más largas (menor frecuencia) se conoce como corrimiento al rojo (redshift).
```

### 2 — Evidencia de la expansión
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["evidencia", "galaxias", "observacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["galaxias lejanas", "se alejan"], ["galaxias cercanas", "se acercan"]]]

respuesta: datos[escenario_idx][0][1]
tipo: mc
opciones_explicitas: ["se acercan", "se alejan", "están estables", "colapsan"]]

enunciado: "La observación de que las {datos[escenario_idx][0][0]} muestran un corrimiento al rojo indica que estas ___ de nosotros."

explicacion: |
  El hecho de que la mayoría de las galaxias distantes presenten corrimiento al rojo es la evidencia fundamental de que el universo se está expandiendo.
```

### 3 — El concepto de Redshift
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["definicion", "espectro"]]

respuesta: "alejamiento"
tipo: completar
respuestas_validas: ["alejamiento", "acercamiento", "estacionar"]

enunciado: "En el contexto de la cosmología, un corrimiento al rojo (redshift) es una medida que indica el ___ de una galaxia respecto al observador."

explicacion: |
  El corrimiento al rojo es el cambio hacia longitudes de onda más largas debido al movimiento de alejamiento.
```

### 4 — Relación distancia-velocidad
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["ley_de_hubble", "expansion"]

variables:
  distancia_m: uno_de([10, 20, 30])
  velocidad_m: [100, 200, 300]

respuesta: velocidad_m[distancia_m/10 - 1]
tipo: input
tolerancia_abs: 0.1

enunciado: "Si la expansión del universo es uniforme, a mayor distancia, mayor es la velocidad de recesión. Si una galaxia está a una distancia de {distancia_m} Mpc y su velocidad es de {velocidad_m[distancia_m/10 - 1]} km/s, ¿cuál es su velocidad?"

pasos:
  - "Identificar la velocidad correspondiente a la distancia dada según la relación lineal."

explicacion: |
  En un universo en expansión, la velocidad de alejamiento es proporcional a la distancia (Ley de Hubble).
```

### 5 — Secuencia de descubrimiento
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["orden", "logica"]]

respuesta: ["observación de espectro", "detección de corrimiento al rojo", "conclusión de expansión"]
tipo: ordenar
opciones_explicitas: ["conclusión de expansión", "observación de espectro", "detección de corrimiento al rojo"]

enunciado: "Ordena los pasos lógicos que llevaron a la conclusión de la expansión del universo:"

explicacion: |
  Primero se observa la luz (espectro), luego se detecta el desplazamiento (redshift) y finalmente se infiere la expansión.
```