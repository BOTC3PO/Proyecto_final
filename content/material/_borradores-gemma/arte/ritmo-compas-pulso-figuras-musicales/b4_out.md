### 1 — Diferencia entre pulso y ritmo
```
metadata:
  materia: "arte"
  tema: "ritmo_y_pulso"
  nivel: "basico"
  tags: ["musica", "teoria_musical"]

respuesta: "ritmo"
tipo: mc
opciones_explicitas: ["pulso", "ritmo", "acento", "tempo"]

enunciado: "Mientras que el {pulso} es la unidad de medida constante que sentimos al aplaudir de forma regular, el ___ es la combinación de duraciones de los sonidos que crea una estructura variada."

explicacion: |
  El pulso es la pulsación constante (como el latido del corazón), mientras que el ritmo es la sucesión de duraciones (largas y cortas) que se asientan sobre ese pulso.
```

### 2 — Relación de duración: Negra vs Corchea
```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["figuras_musicales", "duracion"]

variables:
  relacion: uno_de([2, 4])

respuesta: relacion
tipo: vf

enunciado: "Si comparamos la duración de una negra con la de una corchea, ¿es cierto que la negra dura {relacion} veces lo que dura una corchea?"

explicacion: |
  En la música estándar, una negra equivale a dos corcheas. Por lo tanto, la relación es de 2 a 1.
```

### 3 — El valor de la Redonda
```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["figuras_musicales", "redonda"]

variables:
  valor_blanca: uno_de([2, 4])

respuesta: valor_blanca
tipo: completar
respuestas_validas: [2, 4]

enunciado: "En un compás de 4/4, si una blanca tiene un valor de {valor_blanca} pulsos (negras), una redonda tendrá un valor de ___ pulsos."

pasos:
  - "Identificar el valor de la blanca en pulsos."
  - "Multiplicar el valor de la blanca por 2 para obtener el valor de la redonda."

explicacion: |
  La redonda es la figura más larga; equivale a dos blancas o cuatro negras.
```

### 4 — Jerarquía de duraciones
```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["ordenar", "figuras_musicales"]

respuesta: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración (de la más larga a la más corta):"

explicacion: |
  La jerarquía de duración es: Redonda (4) > Blanca (2) > Negra (1) > Corchea (0.5).
```

### 5 — Compás y pulsos
```
metadata:
  materia: "arte"
  tema: "compas_musical"
  nivel: "intermedio"
  tags: ["compas", "pulsos"]

variables:
  tipo_compas: uno_de(["3/4", "4/4", "2/4"])

respuesta: total_pulsos
tipo: input
tolerancia_abs: 0

enunciado: "Si estamos en un compás de {tipo_compas}, ¿cuántos pulsos (negras) contiene cada compás?"

variables:
  total_pulsos: uno_de([2, 3, 4])

explicacion: |
  El número superior del compás indica cuántos pulsos (en la figura de la base, normalmente la negra) caben en cada unidad de compás.
```