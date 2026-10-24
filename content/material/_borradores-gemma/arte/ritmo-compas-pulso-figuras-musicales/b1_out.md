### 1 — La unidad de medida: El Pulso
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["ritmo", "pulso", "musica"]

respuesta: verdadero
tipo: vf

enunciado: "El pulso es la unidad básica de tiempo en la música, similar al latido del corazón, que nos permite sentir el ritmo de una obra."

explicacion: |
  Efectivamente, el pulso es la sensación constante de regularidad que percibimos en la música.
```

### 2 — Duración de las figuras
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "duracion"]

variables:
  escenario: uno_de([
    ["blanca", "redonda"],
    ["negra", "blanca"],
    ["corchea", "negra"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Si comparamos la duración de una {escenario[0]} con la de una {escenario[1]}, ¿cuál de las dos es la que tiene el doble de duración?"

explicacion: |
  En la jerarquía de las figuras, la {escenario[1]} equivale a dos {escenario[0]}.
```

### 3 — Relación de valores
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["figuras_musicales", "calculo"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "Si una nota negra equivale a 1 tiempo, ¿cuántas corcheas caben en el espacio de una sola nota negra?"

pasos:
  - "Identificar que una negra es igual a dos corcheas."
  - "Identificar que una blanca equivale a dos negras."
  - "Calcular la relación entre la figura solicitada y la base."

explicacion: |
  Una negra contiene 2 corcheas. Por lo tanto, en una negra caben 2 corcheas. (Nota: El usuario debe entender la relación de división por 2).
```

### 4 — Orden de duración
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["orden", "figuras_musicales"]

respuesta: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración (de la más larga a la más corta):"

explicacion: |
  El orden correcto de mayor a menor es: Redonda (4 tiempos), Blanca (2 tiempos), Negra (1 tiempo) y Corchea (1/2 tiempo).
```

### 5 — El concepto de compás
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["compas", "terminologia"]

respuesta: "___"
tipo: completar
respuestas_validas: ["compás", "compas"]

enunciado: "La división de un tiempo musical en partes iguales, que agrupa pulsos, se denomina ___."

explicacion: |
  El ___ es la unidad que organiza los pulsos en grupos regulares.
```