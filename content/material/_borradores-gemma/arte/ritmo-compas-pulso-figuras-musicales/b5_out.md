### 1 — El metrónomo del baterista
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["pulso", "figuras_musicales"]

variables:
  escenario: uno_de([["negra", "1"], ["blanca", "2"], ["redonda", "4"], ["corchea", "0.5"]])
  idx: uno_de([0, 1, 2, 3])
  dado: ["negra", "blanca", "redonda", "corchea"]
  resp: ["1", "2", "4", "0.5"]

enunciado: "Un baterista marca el pulso de una canción. Si la figura musical que está tocando es una {dado[idx]}, ¿cuántos pulsos (negras) dura dicha figura?"

respuesta: resp[idx]
tipo: mc
opciones_explicitas: ["0.5", "1", "2", "4"]

explicacion: |
  En la música, la duración de las figuras es relativa: la negra equivale a 1 pulso, la blanca a 2 y la redonda a 4. La corchea es la mitad de una negra (0.5).
```

### 2 — El compás de la marcha
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["compas", "conteo"]

variables:
  compas_tipo: uno_de([["4/4", "4"], ["3/4", "3"]])
  idx: uno_de([0, 1])
  datos: [["4/4", "4"], ["3/4", "3"]]

enunciado: "Estamos en un compás de {compas_tipo[idx]}. ¿Cuántos pulsos (negras) caben en cada compás?"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["3", "4"]

explicacion: |
  El número superior del compás indica cuántos pulsos de la unidad de medida (generalmente la negra) caben en cada compás.
```

### 3 — ¿Es una figura mayor?
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["comparacion", "figuras"]

variables:
  figura_a: uno_de([["blanca", "2"], ["corchea", "0.5"]])
  figura_b: uno_de([["negra", "1"], ["redonda", "4"]])
  idx_a: uno_de([0, 1])
  idx_b: uno_de([0, 1])
  val_a: ["2", "0.5"]
  val_b: ["1", "4"]

enunciado: "Si comparamos una {uno_de([val_a[idx_a], val_b[idx_b]])} con una {uno_de([val_a[idx_a], val_b[idx_b]])}..."
# Nota: El sistema de variables requiere cuidado para no repetir sorteo. 
# Re-estructurando para cumplir la regla de un solo sorteo por escenario:

variables:
  escenario: uno_de([["blanca", "negra", "true"], ["corchea", "blanca", "false"]])
  idx: uno_de([0, 1])
  datos: [["blanca", "negra", "true"], ["corchea", "blanca", "false"]]

enunciado: "Si comparamos la duración de una {datos[idx][0]} con una {datos[idx][1]}, ¿es la primera figura más larga que la segunda?"

respuesta: datos[idx][2]
tipo: vf

explicacion: |
  La blanca dura 2 pulsos y la negra 1 (Verdadero). La corchea dura 0.5 y la blanca 2 (Falso).
```

### 4 — Ordenando la duración
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["orden", "figuras"]

variables:
  orden_correcta: ["corchea", "negra", "blanca", "redonda"]

enunciado: "Ordena las siguientes figuras musicales de la más corta a la más larga:"

opciones_explicitas: ["corchea", "negra", "blanca", "redonda"]
respuesta: ["corchea", "negra", "blanca", "redonda"]
tipo: ordenar

explicacion: |
  La duración aumenta así: Corchea (1/2 negra) < Negra (1) < Blanca (2) < Redonda (4).
```

### 5 — El reto del compás de 4/4
```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["calculo", "compas"]

variables:
  figuras_en_compas: uno_de([["blanca", "4"], ["negra", "8"], ["corchea", "16"]])
  idx: uno_de([0, 1, 2])
  datos: [["blanca", "4"], ["negra", "8"], ["corchea", "16"]]

enunciado: "En un compás de 4/4, ¿cuántas {datos[idx][0]} caben exactamente para completar el compás?"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["4", "8", "16"]

explicacion: |
  En un compás de 4/4 hay 4 pulsos. Si la figura es blanca (2 pulsos), caben 2. Si es negra (1 pulso), caben 4. Si es corchea (0.5), caben 8.
```