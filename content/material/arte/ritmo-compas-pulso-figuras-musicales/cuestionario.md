# Arte — Ritmo compas pulso figuras musicales (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Revisado manualmente: Q3 tenía un error aritmético real (4 en vez de
> 2 corcheas por negra), Q5 dejaba el placeholder literal "___" como
> respuesta, Q9/Q18/Q19 tenían valores o blanks inconsistentes con la
> propia relación de figuras, Q15 era un bloque roto ya reemplazado por
> el Q16 "(Corregida)" siguiente (eliminado, duplicado), Q23/Q26 tenían
> `respuestas_validas` sobre-permisivas — Q26 además con los 3 valores
> de su tabla desplazados x2 respecto a su propia explicación.

---

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
  escenario: uno_de([["blanca", "redonda"], ["negra", "blanca"], ["corchea", "negra"]])

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

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si una nota negra equivale a 1 tiempo, ¿cuántas corcheas caben en el espacio de una sola nota negra?"

pasos:
  - "Identificar que una negra es igual a dos corcheas."

explicacion: |
  Una negra contiene 2 corcheas. Por lo tanto, en una negra caben 2 corcheas.
```

### 4 — Orden de duración

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["orden", "figuras_musicales"]

respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
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

respuesta: "compás"
tipo: completar
respuestas_validas:
  - "compás"
  - "compas"

enunciado: "La división de un tiempo musical en partes iguales, que agrupa pulsos, se denomina ___."

explicacion: |
  El compás es la unidad que organiza los pulsos en grupos regulares.
```

### 6 — Duración de la negra

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
tipo: completar
tolerancia_abs: 0

enunciado: "Si una blanca equivale a {valor_blanca} pulsos, ¿cuántos pulsos equivalen a una negra?"

pasos:
  - "Identificamos que una blanca tiene 2 pulsos."
  - "Sabemos que una negra es la mitad de una blanca."
  - "Calculamos: 2 / 2 = 1."

explicacion: |
  En la música, la relación entre figuras es constante. La negra es la mitad de la blanca, por lo tanto, si la blanca vale 2, la negra vale 1.
```

### 7 — Relación de corcheas

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

### 8 — Verdadero o Falso: La Redonda

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

### 9 — Completar la jerarquía

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["musica", "figuras_musicales"]

respuesta: "2"
respuestas_validas:
  - "2"
tipo: completar

enunciado: "En términos de duración de pulsos, una blanca equivale a ___ negras (y una negra equivale a 2 corcheas)."

explicacion: |
  La jerarquía es: Redonda (4) -> Blanca (2) -> Negra (1) -> Corchea (0.5).
```

### 10 — Ordenar duración de mayor a menor

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración:"

explicacion: |
  La redonda es la más larga (4 pulsos), seguida de la blanca (2), la negra (1) y finalmente la corchea (0.5).
```

### 11 — La duración de la blanca

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "duracion"]

enunciado: "Si una negra tiene una duración de 1 unidad de tiempo, ¿cuántas unidades de tiempo dura una blanca?"

respuesta: 2
tipo: completar
tolerancia_abs: 0

explicacion: |
  La blanca es el doble de una negra. Si la negra es 1, la blanca es 2.
```

### 12 — Relación de equivalencias

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["figuras_musicales", "equivalencias"]

variables:
  escenario: uno_de([["blanca", "2"], ["negra", "4"]])

enunciado: "Considerando que una negra equivale a 1 tiempo, ¿cuántas {escenario[0]}s caben en una redonda?"

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["2", "4", "8", "16"]

explicacion: |
  Una redonda equivale a 4 negras y a 2 blancas.
```

### 13 — El error de la corchea

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "corchea"]

enunciado: "¿Es verdadero que una corchea dura la mitad que una negra?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. En la subdivisión binaria estándar, la corchea es la mitad de la negra.
```

### 14 — Orden de duración (de mayor a menor)

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "orden"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración:"

opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]
respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar

explicacion: |
  La jerarquía de duración es: Redonda (4) > Blanca (2) > Negra (1) > Corchea (0.5).
```

### 16 — Completar la igualdad

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["figuras_musicales", "calculo"]

enunciado: "Si tenemos una blanca y una negra, nos falta una ___ para completar un compás de 4/4."

respuestas_validas:
  - "negra"
respuesta: "negra"
tipo: completar

explicacion: |
  Una blanca (2) + una negra (1) = 3 tiempos. Para llegar a 4, falta una negra (1).
```

### 17 — Diferencia entre pulso y ritmo

```
metadata:
  materia: "arte"
  tema: "ritmo_y_pulso"
  nivel: "basico"
  tags: ["musica", "teoria_musical"]

respuesta: "ritmo"
tipo: mc
opciones_explicitas: ["pulso", "ritmo", "acento", "tempo"]

enunciado: "Mientras que el pulso es la unidad de medida constante que sentimos al aplaudir de forma regular, el ___ es la combinación de duraciones de los sonidos que crea una estructura variada."

explicacion: |
  El pulso es la pulsación constante (como el latido del corazón), mientras que el ritmo es la sucesión de duraciones (largas y cortas) que se asientan sobre ese pulso.
```

### 18 — Relación de duración: Negra vs Corchea

```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["figuras_musicales", "duracion"]

respuesta: verdadero
tipo: vf
enunciado: "Si comparamos la duración de una negra con la de una corchea, ¿es cierto que la negra dura el doble de tiempo que una corchea?"

explicacion: |
  En la música estándar, una negra equivale a dos corcheas. Por lo tanto, la relación es de 2 a 1.
```

### 19 — El valor de la Redonda

```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["figuras_musicales", "redonda"]

respuesta: "4"
tipo: completar
respuestas_validas:
  - "4"

enunciado: "En un compás de 4/4, si una blanca tiene un valor de 2 pulsos (negras), una redonda tendrá un valor de ___ pulsos."

pasos:
  - "Identificar el valor de la blanca en pulsos."
  - "Multiplicar el valor de la blanca por 2 para obtener el valor de la redonda."

explicacion: |
  La redonda es la figura más larga; equivale a dos blancas o cuatro negras.
```

### 20 — Jerarquía de duraciones

```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["ordenar", "figuras_musicales"]

respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración (de la más larga a la más corta):"

explicacion: |
  La jerarquía de duración es: Redonda (4) > Blanca (2) > Negra (1) > Corchea (0.5).
```

### 21 — Compás y pulsos

```
metadata:
  materia: "arte"
  tema: "compas_musical"
  nivel: "intermedio"
  tags: ["compas", "pulsos"]

variables:
  compas_idx: uno_de([0, 1, 2])
  tipo_compas: ["3/4", "4/4", "2/4"][compas_idx]
  total_pulsos: [3, 4, 2][compas_idx]

respuesta: total_pulsos
tipo: completar
tolerancia_abs: 0

enunciado: "Si estamos en un compás de {tipo_compas}, ¿cuántos pulsos (negras) contiene cada compás?"

explicacion: |
  El número superior del compás indica cuántos pulsos (en la figura de la base, normalmente la negra) caben en cada unidad de compás.
```

### 22 — El metrónomo del baterista

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["pulso", "figuras_musicales"]

variables:
  datos: [["negra", "1"], ["blanca", "2"], ["redonda", "4"], ["corchea", "0.5"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Un baterista marca el pulso de una canción. Si la figura musical que está tocando es una {datos[idx][0]}, ¿cuántos pulsos (negras) dura dicha figura?"

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0.5", "1", "2", "4"]

explicacion: |
  En la música, la duración de las figuras es relativa: la negra equivale a 1 pulso, la blanca a 2 y la redonda a 4. La corchea es la mitad de una negra (0.5).
```

### 23 — El compás de la marcha

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["compas", "conteo"]

variables:
  idx: uno_de([0, 1])
  datos: [["4/4", "4"], ["3/4", "3"]]

enunciado: "Estamos en un compás de {datos[idx][0]}. ¿Cuántos pulsos (negras) caben en cada compás?"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  El número superior del compás indica cuántos pulsos de la unidad de medida (generalmente la negra) caben en cada compás.
```

### 24 — ¿Es una figura mayor?

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["comparacion", "figuras"]

variables:
  datos: [["blanca", "negra", "verdadero"], ["corchea", "blanca", "falso"]]
  idx: uno_de([0, 1])

enunciado: "Si comparamos la duración de una {datos[idx][0]} con una {datos[idx][1]}, ¿es la primera figura más larga que la segunda?"

respuestas_validas:
  - datos[idx][2]
respuesta: datos[idx][2]
tipo: completar
explicacion: |
  La blanca dura 2 pulsos y la negra 1 (Verdadero). La corchea dura 0.5 y la blanca 2 (Falso).
```

### 25 — Ordenando la duración

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
respuesta_orden: ["corchea", "negra", "blanca", "redonda"]
tipo: ordenar

explicacion: |
  La duración aumenta así: Corchea (1/2 negra) < Negra (1) < Blanca (2) < Redonda (4).
```

### 26 — El reto del compás de 4/4

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["calculo", "compas"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["blanca", "2"], ["negra", "4"], ["corchea", "8"]]

enunciado: "En un compás de 4/4, ¿cuántas {datos[idx][0]} caben exactamente para completar el compás?"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  En un compás de 4/4 hay 4 pulsos. Si la figura es blanca (2 pulsos), caben 2. Si es negra (1 pulso), caben 4. Si es corchea (0.5), caben 8.
```
