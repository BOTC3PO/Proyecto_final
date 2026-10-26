### 1 — Evidencia del Big Bang
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["cosmologia", "big_bang", "evidencia"]

tipo: mc
opciones_explicitas: ["La expansión del espacio", "La rotación de las galaxias", "La formación de agujeros negros", "La existencia de la gravedad"]

enunciado: "El corrimiento al rojo cosmológico es una de las principales evidencias observacionales a favor de la teoría del ___."

explicacion: |
  El corrimiento al rojo indica que las galaxias se alejan de nosotros, lo que implica que el universo se está expandiendo, una pieza clave para la teoría del Big Bang.
```

### 2 — El efecto Doppler y la luz
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["espectro", "luz", "redshift"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [["se desplaza hacia el rojo", "se desplaza hacia el azul"], ["se aleja del observador", "se acerca al observador"]]

tipo: mc
opciones_explicitas: ["se desplaza hacia el rojo", "se desplaza hacia el azul", "se mantiene constante", "cambia de intensidad"]

enunciado: "Cuando la luz de una galaxia se estira debido a la expansión del universo, su espectro ___."

explicacion: |
  Al expandirse el espacio, la longitud de onda de la luz se estira hacia la parte roja del espectro electromagnético.
```

### 3 — Relación de Hubble
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["hubble", "calculo", "expansion"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [[100, 700], [250, 1500]]

tipo: input
tolerancia_abs: 0.1

enunciado: "Si una galaxia se encuentra a una distancia de {datos[caso_idx][0]} Mpc y su velocidad de recesión es de {datos[caso_idx][1]} km/s, ¿cuál es el valor aproximado de la constante de Hubble (H₀) en km/s/Mpc?"

pasos:
  - "Identificar la velocidad de recesión (v)"
  - "Identificar la distancia (d)"
  - "Aplicar la fórmula H₀ = v / d"

explicacion: |
  Usando la ley de Hubble: H₀ = v / d. Para el caso seleccionado: {datos[caso_idx][1]} / {datos[caso_idx][0]} = {redondear(datos[caso_idx][1] / datos[caso_idx][0], 2)} km/s/Mpc.
```

### 4 — Conceptos clave de expansión
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["conceptos", "espacio", "tiempo"]

tipo: ordenar
opciones_explicitas: ["Gran explosión inicial", "Expansión del espacio-tiempo", "Corrimiento al rojo observado", "Universo actual"]

enunciado: "Ordena cronológicamente los eventos relacionados con la expansión y la observación del universo:"

explicacion: |
  El Big Bang da origen a todo, seguido por la expansión, lo que genera el corrimiento al rojo que observamos hoy en las galaxias lejanas.
```

### 5 — Causas del corrimiento
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["causa", "espacio", "redshift"]

tipo: completar
respuestas_validas: ["espacio", "tejido", "espacio-tiempo"]

enunciado: "A diferencia del efecto Doppler clásico, el corrimiento al rojo cosmológico es causado por el estiramiento del propio ___ entre las galaxias."

explicacion: |
  En cosmología, no es solo que las galaxias se muevan "a través" del espacio, sino que es el espacio mismo el que se expande.
```