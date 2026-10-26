# Oficios — herramientas herreria (cuestionario, 26 preguntas VBLang)

> Tema: `oficios/herrero-forjador/herramientas-herreria`. Ver `teoria.md` en esta misma carpeta.
>
> Revisado manualmente: 22 bloques (tipo mc/completar/input) sorteaban
> una palabra con `uno_de([...])` interpolándola directamente en una
> oración fija, produciendo afirmaciones fácticamente falsas o
> autocontradictorias para las ramas no correctas (ej. "debe alcanzar un
> estado líquido, sin llegar a fundirse", "es común encontrar carbón en
> talleres modernos") mientras la respuesta seguía fija a la rama
> original — sorteos removidos, huecos `___` reales agregados en todos
> los casos; `tipo: input` (alias legacy) normalizado a `completar`.

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "basico"
  tags: ["fragua", "calor", "proceso"]

respuesta: "plástico"
tipo: mc
opciones_explicitas: ["plástico", "líquido", "rígido", "vapor"]

enunciado: "Para que el acero sea forjable, debe alcanzar un estado ___, sin llegar a fundirse. ¿Cuál es el estado correcto que permite la maleabilidad sin perder integridad?"

explicacion: |
  El metal debe llegar a un estado "plástico" o dúctil, donde se vuelve maleable como la arcilla pero sin fundirse, permitiendo su deformación controlada por golpeo.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "basico"
  tags: ["fragua", "combustible", "historia"]

respuesta: "carbón vegetal"
tipo: mc
opciones_explicitas: ["carbón vegetal", "gas natural", "electricidad", "diesel"]

enunciado: "Históricamente, las fraguas argentinas tradicionales utilizaban principalmente ___ como fuente de calor antes de la adopción de hornos modernos."

explicacion: |
  El carbón vegetal (y luego el mineral) fue el combustible estándar en la herrería tradicional argentina, proporcionando el calor intenso y controlado necesario para el proceso.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["yunque", "superficie", "trabajo"]

respuesta: "golpear"
tipo: mc
opciones_explicitas: ["golpear", "sujetar", "calentar", "medir"]

enunciado: "El yunque actúa como la superficie de apoyo sobre la cual se realiza la acción de ___ el metal caliente para darle forma."

explicacion: |
  El yunque es la superficie dura sobre la cual se golpea el metal. Su función principal es recibir el impacto del martillo y transmitir la fuerza necesaria para deformar el material.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["yunque", "nariz", "curvado"]

respuesta: "doblar"
tipo: mc
opciones_explicitas: ["doblar", "cortar", "fundir", "pulir"]

enunciado: "La punta o 'nariz' del yunque se utiliza específicamente para ___ y curvar el hierro, aprovechando su forma cónica para crear ángulos y radios."

explicacion: |
  La nariz o punta del yunque es una extensión cónica diseñada para doblar y curvar el hierro caliente, permitiendo crear formas angulares o circulares sin deformar la cara plana principal.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["yunque", "base", "vibración"]

respuesta: "absorber vibración"
tipo: mc
opciones_explicitas: ["absorber vibración", "aumentar calor", "reducir peso", "mejorar brillo"]

enunciado: "Los yunques tradicionales suelen estar anclados a un tronco o base de madera para ___ durante los golpes fuertes, protegiendo la estructura del taller."

explicacion: |
  La base de madera o tronco sirve para absorber la vibración generada por los golpes repetidos. Sin esta absorción, la energía se transmitiría al suelo y daña la estructura del taller.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["martillo", "cabezal", "peso"]

respuesta: "más pesado"
tipo: mc
opciones_explicitas: ["más pesado", "más ligero", "más delgado", "más flexible"]

enunciado: "A diferencia de los martillos de carpintería, los martillos de forja tienen cabezales ___ para aplicar la fuerza necesaria sobre el metal caliente."

explicacion: |
  Los martillos de forja tienen cabezales más pesados para generar mayor fuerza de impacto con menos esfuerzo del herrero, esencial para deformar el acero a alta temperatura.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "basico"
  tags: ["tenazas", "sujeción", "seguridad"]

respuesta: "sostener"
tipo: mc
opciones_explicitas: ["sostener", "golpear", "calentar", "enfriar"]

enunciado: "Las tenazas son herramientas de ___ que permiten al herrero manipular la pieza caliente con seguridad, evitando quemaduras y asegurando un agarre firme."

explicacion: |
  Las tenazas son esenciales para sujetar la pieza de metal caliente. Sus puntas están diseñadas para adaptarse a formas redondas, cuadradas o planas, garantizando que no resbale durante el golpeo.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["tenazas", "ajuste", "seguridad"]

respuesta: "resbalar"
tipo: mc
opciones_explicitas: ["resbalar", "quedar fijas", "calentar más", "enfriar rápido"]

enunciado: "Es fundamental que las tenazas estén bien ajustadas al metal para que no ___ durante el golpeo, lo cual sería peligroso."

explicacion: |
  Un ajuste incorrecto de las tenazas puede hacer que la pieza se resbale al recibir el impacto, poniendo en riesgo al herrero y dañando la pieza.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "avanzado"
  tags: ["estampas", "cinceles", "accesorios"]

respuesta: "acero"
tipo: mc
opciones_explicitas: ["acero", "madera", "plástico", "cerámica"]

enunciado: "Las estampas y los cinceles son accesorios de ___ utilizados para marcar, cortar o dar detalles específicos al metal caliente."

explicacion: |
  Las estampas y cinceles son herramientas de acero endurecido que se golpean con un martillo para realizar cortes, grabados o formas específicas en el metal mientras está en estado plástico.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "basico"
  tags: ["metal", "plástico", "maleabilidad"]

respuesta: "arcilla"
tipo: mc
opciones_explicitas: ["arcilla", "vidrio", "madera", "piedra"]

enunciado: "El metal debe volverse maleable como la ___ para ser forjado, manteniendo su integridad estructural sin fundirse."

explicacion: |
  La analogía de la arcilla se usa para describir el estado "plástico" del metal: es moldeable bajo presión pero mantiene su cohesión interna, a diferencia del estado líquido.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "basico"
  tags: ["yunque", "cara plana", "aplanado"]

respuesta: "golpear y aplanar"
tipo: mc
opciones_explicitas: ["golpear y aplanar", "doblar", "cortar", "pulir"]

enunciado: "La cara plana y gruesa del yunque sirve para ___ el metal, proporcionando una superficie estable para el impacto del martillo."

explicacion: |
  La cara plana del yunque es la zona principal de trabajo, diseñada para recibir los golpes directos y aplanar o dar forma recta al metal.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["yunque", "dureza", "durabilidad"]

respuesta: "resistir impactos"
tipo: mc
opciones_explicitas: ["resistir impactos", "ser ligero", "ser barato", "ser flexible"]

enunciado: "La dureza del yunque es vital porque debe ___ miles de impactos sin deformarse, a diferencia del martillo que se desgasta más rápido."

explicacion: |
  El yunque debe ser extremadamente duro para resistir la repetición de golpes sin deformarse o agrietarse, asegurando una superficie de trabajo precisa y duradera.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["martillo", "peso", "selección"]

respuesta: "tamaño de la pieza"
tipo: mc
opciones_explicitas: ["tamaño de la pieza", "color del metal", "altura del herrero", "edad del martillo"]

enunciado: "El peso del martillo se selecciona según el ___ de la pieza, para aplicar la fuerza necesaria sin fatigar excesivamente al trabajador."

explicacion: |
  La selección del martillo depende del tamaño y grosor de la pieza a trabajar. Piezas más grandes requieren martillos más pesados para generar la fuerza de deformación adecuada.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "basico"
  tags: ["tenazas", "puntas", "formas"]

respuesta: "redondas, cuadradas o planas"
tipo: mc
opciones_explicitas: ["redondas, cuadradas o planas", "solo triangulares", "solo hexagonales", "solo cilíndricas"]

enunciado: "Las tenazas tienen puntas diseñadas para agarrar formas ___, adaptándose a la sección transversal del metal."

explicacion: |
  Las tenazas se fabrican con puntas que imitan la forma del material a sostener (redonda, cuadrada, plana) para asegurar un agarre firme y seguro.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["martillo", "punta", "perforar"]

respuesta: "perforar o marcar"
tipo: mc
opciones_explicitas: ["perforar o marcar", "aplanar", "doblar", "cortar"]

enunciado: "El martillo de ___ tiene una punta específica utilizada para iniciar agujeros o marcar puntos de referencia en el metal."

explicacion: |
  El martillo de punta (o de punzón) se utiliza para perforar el metal caliente o marcar lugares específicos donde se necesitarán agujeros o deformaciones posteriores.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["yunque", "energía", "vibración"]

respuesta: "transformar el material"
tipo: mc
opciones_explicitas: ["transformar el material", "perderse", "calentar el suelo", "romper el yunque"]

enunciado: "Con una base sólida, la energía del golpe se utiliza para ___, en lugar de perderse en la estructura del taller."

explicacion: |
  Una base adecuada (tronco o anclaje) asegura que la energía cinética del martillo se transfiera eficientemente al metal para deformarlo, en lugar de disiparse en el entorno.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "basico"
  tags: ["tenazas", "sujeción", "herramienta"]

respuesta: "tenazas"
tipo: mc
opciones_explicitas: ["tenazas", "martillo", "yunque", "estampa"]

enunciado: "La herramienta de sujeción que permite sostener la pieza caliente con seguridad se llama ___."

explicacion: |
  Las tenazas son las herramientas diseñadas específicamente para sujetar y manipular piezas de metal caliente durante el proceso de forjado.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "basico"
  tags: ["forjado", "calor", "golpeo"]

respuesta: "calor y golpeo"
tipo: mc
opciones_explicitas: ["calor y golpeo", "químicos y frío", "electricidad y aire", "agua y aceite"]

enunciado: "El oficio de forjador se basa en transformar el metal mediante ___ controlados."

explicacion: |
  La esencia del forjado es la combinación de calor (para ablandar el metal) y golpeo (para dar forma), dos elementos fundamentales del proceso.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["fragua", "sistema"]

respuesta: "hornos de gas"
tipo: completar
respuestas_validas:
  - "hornos de gas"
  - "gas"
  - "gas natural"

enunciado: "Hoy en día es común encontrar ___ en talleres modernos de herrería, además de las fraguas tradicionales."

explicacion: |
  Los hornos de gas son una alternativa moderna común en talleres contemporáneos, ofreciendo un control de temperatura más preciso y limpio que el carbón.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["yunque", "nariz", "curvado"]

respuesta: "doblar"
tipo: completar
respuestas_validas:
  - "doblar"
  - "curvar"

enunciado: "La nariz del yunque se usa para ___ y curvar el hierro, aprovechando su forma cónica."

explicacion: |
  La nariz o punta del yunque está diseñada para doblar y curvar el hierro, permitiendo crear ángulos y radios sin deformar la cara plana principal.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["yunque", "base", "madera"]

respuesta: "tronco"
tipo: completar
respuestas_validas:
  - "tronco"
  - "madera"

enunciado: "Los yunques suelen estar firmemente anclados a un ___ o base de madera para absorber la vibración."

explicacion: |
  El tronco o la madera actúan como amortiguador, absorbiendo la vibración generada por los golpes y protegiendo la estructura del taller.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["martillo", "cabezal", "peso"]

respuesta: "más pesado"
tipo: completar
respuestas_validas:
  - "más pesado"
  - "pesado"

enunciado: "Los martillos de forja tienen cabezales ___ que los de carpintería para aplicar mayor fuerza."

explicacion: |
  Los martillos de forja tienen cabezales más pesados para generar mayor fuerza de impacto con menos esfuerzo del herrero, esencial para deformar el acero a alta temperatura.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "basico"
  tags: ["tenazas", "seguridad"]

variables:
  afirmacion: "Las tenazas permiten sostener la pieza caliente con seguridad."

respuesta: verdadero
tipo: vf

enunciado: "{afirmacion} Verdadero o Falso?"

explicacion: |
  Verdadero. Las tenazas son herramientas de sujeción diseñadas para manipular piezas calientes de forma segura, evitando quemaduras y asegurando el agarre.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["yunque", "dureza"]

variables:
  afirmacion: "La dureza del yunque es vital porque debe resistir miles de impactos sin deformarse."

respuesta: verdadero
tipo: vf

enunciado: "{afirmacion} Verdadero o Falso?"

explicacion: |
  Verdadero. El yunque debe ser extremadamente duro para resistir la repetición de golpes sin deformarse, asegurando una superficie de trabajo precisa.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "basico"
  tags: ["fragua", "combustible"]

variables:
  afirmacion: "Históricamente, las fraguas argentinas utilizaron carbón vegetal o mineral."

respuesta: verdadero
tipo: vf

enunciado: "{afirmacion} Verdadero o Falso?"

explicacion: |
  Verdadero. El carbón vegetal y mineral fueron los combustibles tradicionales en la herrería argentina antes de la popularización de los hornos de gas y eléctricos.
```

### 26 — pregunta 26

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_herramientas_herreria"
  nivel: "intermedio"
  tags: ["martillo", "forma"]

variables:
  afirmacion: "El martillo de bola se usa para aplanar y el de cara plana para curvar."

respuesta: falso
tipo: vf

enunciado: "{afirmacion} Verdadero o Falso?"

explicacion: |
  Falso. Es al revés: el martillo de cara plana se usa para aplanar, y el martillo de bola se usa para curvar y crear superficies convexas.
```
