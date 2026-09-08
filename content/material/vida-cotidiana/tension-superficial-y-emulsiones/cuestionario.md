# Vida Cotidiana — Tensión superficial y emulsiones (cuestionario, 22 preguntas VBLang)

> Tema: `vida-cotidiana/tension-superficial-y-emulsiones`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "basico"
  tags: ["polaridad"]

variables:
  n: uno_de([1, 1])

respuesta: "polar"
tipo: mc
opciones_explicitas: ["polar", "apolar", "neutra"]

enunciado: "El agua es una molécula..."

explicacion: |
  Sus cargas eléctricas no están distribuidas parejo, lo que hace que
  las moléculas de agua se atraigan fuertemente entre sí.
```

### 2 — pregunta 2

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "basico"
  tags: ["polaridad"]

variables:
  n: uno_de([1, 1])

respuesta: "apolares"
tipo: mc
opciones_explicitas: ["polares", "apolares", "iónicas"]

enunciado: "El aceite está formado por moléculas..."

explicacion: |
  Al ser apolares (grasas), casi no interactúan con las moléculas
  polares del agua.
```

### 3 — pregunta 3

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "intermedio"
  tags: ["tension superficial"]

variables:
  n: uno_de([1, 1])

respuesta: "tiene la menor superficie de contacto posible con lo que no es igual a él"
tipo: mc
opciones_explicitas: ["tiene la menor superficie de contacto posible con lo que no es igual a él", "se mezcla completamente con cualquier líquido", "pierde toda su forma sin ninguna razón"]

enunciado: "La tensión superficial hace que un líquido \"prefiera\"..."

explicacion: |
  Es la misma razón por la que una gota de agua es redonda: minimiza el
  contacto con lo diferente a ella.
```

### 4 — pregunta 4

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "basico"
  tags: ["emulsionante"]

variables:
  n: uno_de([1, 1])

respuesta: "lecitina"
tipo: completar

enunciado: "La molécula presente en la yema de huevo que tiene doble afinidad (agua y grasa) y estabiliza la mayonesa se llama ___."

respuestas_validas:
  - "lecitina"

explicacion: |
  Se ubica en la superficie de cada gotita de aceite, con la parte grasa
  hacia adentro y la parte acuosa hacia afuera.
```

### 5 — pregunta 5

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "intermedio"
  tags: ["balance HLB"]

variables:
  n: uno_de([1, 1])

respuesta: "balance hidrofílico-lipofílico"
tipo: mc
opciones_explicitas: ["balance hidrofílico-lipofílico", "balance ácido-base", "balance térmico"]

enunciado: "La doble afinidad de la lecitina (parte que gusta del agua y parte que gusta de la grasa) se llama..."

explicacion: |
  Esta doble afinidad (HLB) le permite ubicarse en la interfaz entre el
  agua y el aceite.
```

### 6 — pregunta 6

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "avanzado"
  tags: ["hidrofilico vs lipofilico"]

variables:
  n: uno_de([1, 1])

respuesta: "hidrofílica"
tipo: mc
opciones_explicitas: ["hidrofílica", "lipofílica", "apolar total"]

enunciado: "La parte de la lecitina que \"le gusta\" el agua se llama parte..."

explicacion: |
  Mientras la parte lipofílica se orienta hacia la grasa, la
  hidrofílica se orienta hacia el agua.
```

### 7 — pregunta 7

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "intermedio"
  tags: ["mostaza"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La mostaza puede estabilizar una emulsión gracias a compuestos propios (mucílagos) que también tienen doble afinidad agua-grasa."

explicacion: |
  Por eso se usa como ayuda extra o sustituto parcial del huevo en
  algunas recetas de mayonesa o alioli.
```

### 8 — pregunta 8

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "basico"
  tags: ["definicion emulsion"]

variables:
  n: uno_de([1, 1])

respuesta: "emulsión"
tipo: completar

enunciado: "Una mezcla estable de aceite en agua, lograda gracias a un emulsionante, se llama ___."

respuestas_validas:
  - "emulsión"

explicacion: |
  La mayonesa es un ejemplo clásico: aceite disperso en agua,
  estabilizado por la lecitina del huevo.
```

### 9 — pregunta 9

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "intermedio"
  tags: ["por que se corta"]

variables:
  n: uno_de([1, 1])

respuesta: "el emulsionante disponible no alcanza para cubrir gotas de aceite demasiado grandes"
tipo: mc
opciones_explicitas: ["el emulsionante disponible no alcanza para cubrir gotas de aceite demasiado grandes", "se agrega demasiada agua de golpe", "la lecitina reacciona mal con el frío"]

enunciado: "Una mayonesa se \"corta\" cuando..."

explicacion: |
  Si se agrega el aceite demasiado rápido, se forman gotas más grandes
  de lo que la lecitina disponible puede cubrir, y la emulsión se
  rompe.
```

### 10 — pregunta 10

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "avanzado"
  tags: ["ritmo de mezclado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Agregar el aceite de a poco mientras se bate rápido forma gotas más chicas y fáciles de estabilizar, comparado con agregarlo todo junto."

explicacion: |
  Más cizallamiento (batido) durante la incorporación gradual produce
  gotas más pequeñas, más fáciles de cubrir con el emulsionante
  disponible.
```

### 11 — pregunta 11

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "intermedio"
  tags: ["experimento sin emulsionante"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Mezclando sólo agua y aceite a mano, sin ningún emulsionante, la mezcla queda estable y no se separa nunca."

explicacion: |
  Por más que se agite, en minutos las gotitas de aceite tienden a
  juntarse entre sí y separarse de nuevo en dos capas.
```

### 12 — pregunta 12

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "basico"
  tags: ["ejemplo leche"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La leche es una emulsión natural (grasa en agua), estabilizada por proteínas de la leche."

explicacion: |
  Por eso un tarro de leche entera sin agitar puede mostrar una capa de
  nata separándose arriba con el tiempo.
```

### 13 — pregunta 13

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "basico"
  tags: ["otras aplicaciones"]

variables:
  ejemplo: uno_de(["mayonesa", "alioli", "cremas cosméticas"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ejemplo}\" es un ejemplo de emulsión mencionado en la teoría."

explicacion: |
  Todas son mezclas estables de agua y aceite gracias a algún
  emulsionante.
```

### 14 — pregunta 14

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "avanzado"
  tags: ["limite de estabilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una emulsión tiene un límite de estabilidad: la cantidad de emulsionante disponible sólo alcanza para rodear una cierta cantidad de gotitas de aceite."

explicacion: |
  Superar ese límite (agregando aceite demasiado rápido) rompe la
  emulsión.
```

### 15 — pregunta 15

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "intermedio"
  tags: ["orientacion de la lecitina"]

variables:
  n: uno_de([1, 1])

respuesta: "la parte grasa hacia adentro (tocando el aceite) y la acuosa hacia afuera (tocando el agua)"
tipo: mc
opciones_explicitas: ["la parte grasa hacia adentro (tocando el aceite) y la acuosa hacia afuera (tocando el agua)", "toda la molécula orientada al azar sin ningún patrón", "la parte acuosa hacia adentro y la grasa hacia afuera"]

enunciado: "La lecitina se ubica en la superficie de cada gotita de aceite con..."

explicacion: |
  Esa orientación específica evita que las gotitas de aceite vuelvan a
  juntarse entre sí.
```

### 16 — pregunta 16

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "basico"
  tags: ["gota redonda"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que una gota de agua sea redonda es una consecuencia de la tensión superficial."

explicacion: |
  El líquido minimiza su superficie de contacto con lo que no es agua
  (como el aire), y la forma que logra menos superficie por volumen es
  la esférica.
```

### 17 — pregunta 17

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "intermedio"
  tags: ["base real de mayonesa"]

variables:
  n: uno_de([1, 1])

respuesta: "yema de huevo"
tipo: mc
opciones_explicitas: ["yema de huevo", "clara de huevo", "vinagre solo"]

enunciado: "Según la teoría, la base real de la mayonesa casera que aporta el emulsionante es la..."

explicacion: |
  La yema contiene la lecitina que permite formar la emulsión estable
  de aceite en agua.
```

### 18 — pregunta 18

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "avanzado"
  tags: ["que pasa sin emulsionante suficiente"]

variables:
  n: uno_de([1, 1])

respuesta: "el aceite se separa de golpe (se corta)"
tipo: mc
opciones_explicitas: ["el aceite se separa de golpe (se corta)", "la mezcla se vuelve más estable", "no cambia nada en la textura"]

enunciado: "Si se agrega el aceite demasiado rápido y el emulsionante no alcanza a cubrir las gotas, el resultado es que..."

explicacion: |
  Se forman gotas más grandes de lo que la lecitina puede estabilizar,
  y la emulsión colapsa.
```

### 19 — pregunta 19

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "basico"
  tags: ["experimento pasos"]

variables:
  n: uno_de([1, 1])

respuesta: "agregando una yema de huevo antes de mezclar"
tipo: mc
opciones_explicitas: ["agregando una yema de huevo antes de mezclar", "calentando el agua a más de 100°C", "usando sólo aceite sin agua"]

enunciado: "El segundo paso del experimento casero, para lograr una mezcla cremosa y estable, consiste en repetir la mezcla..."

explicacion: |
  Agitando bien mientras se agrega el aceite de a poco, con yema de
  huevo ya presente, se forma una emulsión estable.
```

### 20 — pregunta 20

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "intermedio"
  tags: ["cremas cosmeticas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las cremas cosméticas también son emulsiones de agua y aceite, estabilizadas con emulsionantes específicos."

explicacion: |
  Es el mismo principio químico que la mayonesa, aplicado a productos
  cosméticos.
```

### 21 — pregunta 21

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "avanzado"
  tags: ["por que no se mezclan solos"]

variables:
  n: uno_de([1, 1])

respuesta: "las gotitas de aceite tienden a juntarse entre sí, separándose de nuevo"
tipo: mc
opciones_explicitas: ["las gotitas de aceite tienden a juntarse entre sí, separándose de nuevo", "el aceite se disuelve completamente en el agua", "el agua se evapora al instante"]

enunciado: "Si se agitan agua y aceite juntos sin emulsionante, después de un instante..."

explicacion: |
  Aunque el aceite quede repartido en gotas por un momento, tiende a
  volver a separarse en dos capas.
```

### 22 — pregunta 22

```
metadata:
  materia: "vida_cotidiana"
  tema: "tension_superficial_y_emulsiones"
  nivel: "basico"
  tags: ["cruce con quimica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema está etiquetado como un cruce con Química dentro del mapa de Vida Cotidiana."

explicacion: |
  La tensión superficial y el balance hidrofílico-lipofílico son
  conceptos de química aplicados a un fenómeno cotidiano.
```

