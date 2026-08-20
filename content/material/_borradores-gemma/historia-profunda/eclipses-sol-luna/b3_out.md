### 1 — Sombras en un eclipse
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia", "conceptos_basicos"]

respuesta: "umbra"
tipo: completar
respuestas_validas: ["umbra", "penumbra"]

enunciado: "La parte más oscura y central de la sombra proyectada por la Luna sobre la Tierra se denomina ___."

explicacion: |
  La umbra es la zona de sombra total donde la luz del Sol queda completamente bloqueada. La penumbra es la zona exterior donde solo se bloquea una parte de la luz.
```

### 2 — Tipos de eclipse solar
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["eclipses", "solar"]

variables:
  escenario: uno_de([
    ["la Luna cubre totalmente el Sol", "total"],
    ["la Luna cubre solo una parte del Sol", "parcial"],
    ["la Luna está entre la Tierra y el Sol pero es más pequeña y deja un anillo", "anular"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["total", "parcial", "anular"]

enunciado: "Si durante un eclipse solar la Luna no logra cubrir completamente el disco solar, dejando ver un borde luminoso alrededor, estamos ante un eclipse ___."

explicacion: |
  En un eclipse parcial, la Luna solo cubre una fracción del Sol. En el total, lo cubre todo; en el anular, el diámetro aparente de la Luna es menor que el del Sol.
```

### 3 — La zona de penumbra
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "basico"
  tags: ["astronomia"]

respuesta: "penumbra"
tipo: mc
opciones_explicitas: ["umbra", "penumbra", "antumbra"]

enunciado: "Cuando un observador se encuentra en la región donde el Sol es parcialmente ocultado por la Luna, se encuentra en la zona de:"

explicacion: |
  La penumbra es la región de sombra parcial que rodea a la umbra.
```

### 4 — Secuencia de un eclipse total
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "intermedio"
  tags: ["observacion"]

respuesta: ["crescendo", "totalidad", "decrescendo"]
tipo: ordenar
opciones_explicitas: ["crescendo", "totalidad", "decrescendo"]

enunciado: "Ordena cronológicamente las fases de un eclipse solar total desde que comienza el oscurecimiento hasta que termina:"

explicacion: |
  Primero ocurre el aumento gradual de la sombra (crescendo), luego la fase de oscuridad máxima (totalidad) y finalmente el regreso de la luz (decrescendo).
```

### 5 — Cálculo de la sombra
```
metadata:
  materia: "historia_profunda"
  tema: "eclipses_sol_luna"
  nivel: "avanzado"
  tags: ["calculo", "geometria"]

variables:
  distancia_luna: uno_de([384400, 405500])

respuesta: redondear(distancia_luna, 0)
tipo: input
tolerancia_abs: 0

enunciado: "Si la Luna se encuentra a una distancia de {distancia_luna} km de la Tierra, ¿cuál es ese valor en kilómetros?"

explicacion: |
  El valor de la distancia varía según la órbita elíptica de la Luna.
```