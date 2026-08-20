### 1 — Duración de la negra
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

variables:
  valor_blanca: 2
  valor_negra: 1

respuesta: valor_negra * 2
tipo: input
tolerancia_abs: 0

enunciado: "Si una blanca equivale a {valor_blanca} pulsos, ¿cuántos pulsos equivalen a una negra?"

pasos:
  - "Identificamos que una blanca tiene 2 pulsos."
  - "Sabemos que una negra es la mitad de una blanca."
  - "Calculamos: 2 / 2 = 1."

explicacion: |
  En la música, la relación entre figuras es constante. La negra es la mitad de la blanca, por lo tanto, si la blanca vale 2, la negra vale 1.
```

### 2 — Relación de corcheas
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

variables:
  idx: uno_de([0, 1])
  escenario: [[4, "4"], [8, "8"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["2", "4", "8", "16"]

enunciado: "En un compás de 4/4, ¿cuántas corcheas caben en una blanca?"

pasos:
  - "Una blanca equivale a 2 pulsos (negras)."
  - "Cada pulso (negra) se divide en 2 corcheas."
  - "Entonces, 2 negras * 2 corcheas/negra = 4 corcheas."

explicacion: |
  La relación es: 1 blanca = 2 negras = 4 corcheas.
```

### 3 — Verdadero o Falso: La Redonda
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

respuesta: falso
tipo: vf

enunciado: "¿Una redonda equivale a la duración de 3 negras?"

explicacion: |
  Falso. Una redonda equivale a 4 negras (o 2 blancas).
```

### 4 — Completar la jerarquía
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["musica", "figuras_musicales"]

variables:
  relacion_blanca_negra: "2"
  relacion_negra_corchea: "2"

respuesta: ["2", "4"]
respuestas_validas: ["2", "4"]
tipo: completar

enunciado: "En términos de duración de pulsos, una blanca equivale a ___ negras, y una negra equivale a ___ corcheas."

explicacion: |
  La jerarquía es: Redonda (4) -> Blanca (2) -> Negra (1) -> Corchea (0.5).
```

### 5 — Ordenar duración de mayor a menor
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

respuesta: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración:"

explicacion: |
  La redonda es la más larga (4 pulsos), seguida de la blanca (2), la negra (1) y finalmente la corchea (0.5).
```