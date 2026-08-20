# Oficios — tecnicas herreria (cuestionario, 41 preguntas VBLang)

> Tema: `oficios/herrero-forjador/tecnicas-herreria`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["teoria", "temperatura", "color"]

variables:
  temp_min: random(900, 1100)
  temp_max: random(1101, 1200)

respuesta: "entre 900 y 1200 °C"
tipo: completar

enunciado: "El rango de temperatura óptimo para trabajar el acero, donde se vuelve blando y maleable sin quemarse, está entre {temp_min} y {temp_max} °C. ¿Cuál es el rango general aceptado?"

explicacion: |
  El acero alcanza su punto óptimo de trabajo entre los 900 y 1200 °C. En este rango es lo suficientemente plástico para deformarse sin agrietarse ni perder su estructura cristalina.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["operaciones", "estirado", "geometria"]

variables:
  dimension_aumentada: "longitud"
  dimension_disminuida: "sección"

respuesta: "estirado"
tipo: completar

enunciado: "La operación que consiste en alargar el material reduciendo su {dimension_disminuida} transversal se llama {dimension_aumentada}."

explicacion: |
  El estirado consiste en alargar el material. Para lograrlo, se golpea el extremo caliente sobre el yunque distribuyendo el impacto uniformemente.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["operaciones", "recalcado", "geometria"]

variables:
  dimension_aumentada: "grosor"
  dimension_disminuida: "longitud"

respuesta: "recalcado"
tipo: completar

enunciado: "La técnica que busca reducir la {dimension_disminuida} del material aumentando su {dimension_aumentada} se denomina {dimension_aumentada}."

explicacion: |
  El recalcado busca reducir la longitud aumentando el grosor o sección. Se logra calentando una zona específica y golpeándola para que el metal fluya hacia los lados.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["temperatura", "color", "inicio"]

variables:
  temp_inicio: random(600, 700)

respuesta: "600-700 °C"
tipo: completar

enunciado: "El acero comienza a tomar un rojo oscuro aproximadamente a los {temp_inicio} °C. ¿A partir de qué rango de temperatura es posible empezar a manipularlo con fuerza moderada?"

explicacion: |
  El rojo oscuro aparece alrededor de los 600-700 °C. A partir de este punto, el metal ya tiene cierta plasticidad para ser manipulado, aunque aún es duro.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["herramientas", "dobladado", "yunque"]

variables:
  herramienta: uno_de(["pata de carnero", "esquina del yunque"])

respuesta: "pata de carnero"
tipo: completar

enunciado: "Para guiar el ángulo deseado durante el doblado en caliente, a menudo se utiliza una herramienta auxiliar llamada {herramienta} o las esquinas del yunque."

explicacion: |
  La 'pata de carnero' es una herramienta auxiliar comúnmente usada para guiar y sostener el ángulo del doblado en caliente.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "avanzado"
  tags: ["soldadura", "temperatura", "unión"]

variables:
  estado_metal: "casi blancas"

respuesta: "casi blancas"
tipo: completar

enunciado: "Para realizar una soldadura por forja, las dos piezas de acero deben calentarse hasta que estén {estado_metal}, casi en el punto de fusión."

explicacion: |
  La soldadura por forja requiere calentar las piezas hasta un color casi blanco. El calor elimina el óxido superficial y permite que los metales se fusionen al golpearlos con fuerza.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["color", "evolución", "temperatura"]

variables:
  color_previo: "rojo cereza"
  color_siguiente: "naranja"

respuesta: "rojo cereza"
tipo: completar

enunciado: "Al subir la temperatura, el color del acero evoluciona: rojo oscuro -> rojo cereza -> {color_siguiente}. ¿Qué color precede al naranja?"

explicacion: |
  La secuencia típica es: rojo oscuro, rojo cereza, naranja y finalmente amarillo pálido. El rojo cereza aparece antes del naranja.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["operaciones", "estirado", "aplicación"]

variables:
  aplicacion: uno_de(["barras", "puntas", "espigas"])

respuesta: "barras"
tipo: completar

enunciado: "El estirado es esencial para crear {aplicacion}, puntas de herramientas o espigas."

explicacion: |
  El estirado alarga el material, siendo esencial para crear barras, puntas de herramientas o espigas.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["operaciones", "recalcado", "aplicación"]

variables:
  aplicacion: uno_de(["base sólida", "mango robusto"])

respuesta: "mango robusto"
tipo: completar

enunciado: "El recalcado es muy útil cuando se necesita una base sólida o un {aplicacion} en una herramienta."

explicacion: |
  El recalcado engrosa el material, siendo ideal para crear mangos robustos o bases sólidas en herramientas.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["seguridad", "calidad", "defectos"]

variables:
  defecto: "quemar"
  consecuencia: "quebradizo"

respuesta: "quemar"
tipo: completar

enunciado: "Si el metal se calienta demasiado, se corre el riesgo de {defecto}, lo que hace que el acero sea {consecuencia} al enfriarse."

explicacion: |
  Quemar el metal es un defecto irreversible que debilita la estructura cristalina, volviendo al acero quebradizo.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["historia", "soldadura", "técnica"]

variables:
  tecnica: "soldadura por forja"

respuesta: "soldadura por forja"
tipo: completar

enunciado: "La {tecnica} es una de las técnicas de unión más antiguas del oficio."

explicacion: |
  La soldadura por forja es una técnica ancestral que consiste en unir piezas mediante calor y golpeo intenso.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["color", "secuencia", "memoria"]

variables:
  c1: "rojo oscuro"
  c2: "rojo cereza"
  c3: "naranja"
  c4: "amarillo pálido"

respuesta: "amarillo pálido"
tipo: completar

enunciado: "La secuencia de colores al calentar es: rojo oscuro, rojo cereza, {c3} y finalmente {c4}."

explicacion: |
  La secuencia correcta es rojo oscuro -> rojo cereza -> naranja -> amarillo pálido. El amarillo pálido es el último paso antes del peligro de quemado.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["herramientas", "dobladado", "uso"]

variables:
  h1: "martillo"
  h2: "yunque"
  h3: "pata de carnero"
  h4: "limpia"

respuesta: "pata de carnero"
tipo: mc

enunciado: "¿Qué herramienta se menciona específicamente para guiar el ángulo en el doblado?"

opciones_explicitas: ["martillo", "yunque", "pata de carnero", "limpia"]

explicacion: |
  La 'pata de carnero' es la herramienta auxiliar específica mencionada para guiar el ángulo del doblado.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "avanzado"
  tags: ["soldadura", "proceso", "acción"]

variables:
  accion: "golpeándolas"
  estado: "casi blancas"

respuesta: "golpeándolas"
tipo: completar

enunciado: "La soldadura por forja consiste en unir piezas calentándolas hasta que estén casi blancas y {accion} con fuerza."

explicacion: |
  El calor elimina el óxido, pero es el golpeo intenso el que une las piezas plásticamente.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["defectos", "quemado", "irreversible"]

variables:
  defecto: "quemar"

respuesta: "quemar"
tipo: completar

enunciado: "El defecto irreversible que hace quebradizo al acero al enfriarse se conoce como {defecto}."

explicacion: |
  Quemar el metal es un defecto irreversible que altera la estructura cristalina.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["operaciones", "recalcado", "identificación"]

variables:
  op1: "estirado"
  op2: "recalcado"
  op3: "dobladado"
  op4: "corte"

respuesta: "recalcado"
tipo: mc

enunciado: "¿Qué operación se utiliza para aumentar el grosor del material?"

opciones_explicitas: ["estirado", "recalcado", "dobladado", "corte"]

explicacion: |
  El recalcado es la operación específica para aumentar el grosor o sección del material.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["dobladado", "precisión", "zona"]

variables:
  zona: "exacta"

respuesta: "exacta"
tipo: completar

enunciado: "El doblado en caliente se realiza calentando la zona {zona} donde se desea la curva."

explicacion: |
  Es crucial calentar solo la zona exacta para evitar deformaciones no deseadas en otras partes de la pieza.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "avanzado"
  tags: ["soldadura", "mecanismo", "óxido"]

variables:
  capa: "óxido superficial"

respuesta: "óxido superficial"
tipo: completar

enunciado: "Durante la soldadura por forja, el calor elimina la capa de {capa} para permitir la unión."

explicacion: |
  El óxido superficial impide la unión directa. El calor lo elimina, permitiendo que los metales limpios se fusionen bajo presión.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["teoria", "temperatura"]

variables:
  temp_min: random(850, 950)
  temp_max: random(1050, 1150)

respuesta: "{temp_min}-{temp_max}"
tipo: completar

enunciado: "El rango de temperatura óptimo para trabajar el acero, donde se vuelve blando y maleable sin quemarse, es aproximadamente entre {temp_min} y {temp_max} °C."

explicacion: |
  Entre 900 y 1200 °C (o rangos cercanos como 850-1150 °C según la aleación), el acero tiene la plasticidad ideal. Por debajo es muy duro, por encima pierde estructura.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["seguridad", "color"]

variables:
  color_peligro: uno_de(["amarillo brillante", "blanco"])

respuesta: falso
tipo: vf

enunciado: "Si el metal alcanza un color {color_peligro}, es el momento ideal para comenzar a forjar con fuerza."

explicacion: |
  Falso. Un color amarillo brillante o blanco indica que el metal está cerca de fundirse o se ha "quemado" (oxidación interna), perdiendo su integridad estructural.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["operaciones", "estirado"]

variables:
  largo_inicial: random(10, 20)
  largo_final: "{floor(largo_inicial * 1.5)}"

respuesta: "{largo_final}"
tipo: input

enunciado: "Si realizamos un estirado sobre una barra que tenía {largo_inicial} cm de longitud efectiva en la zona de trabajo, y logramos duplicar aproximadamente su longitud, ¿cuántos cm mide ahora la zona estirada (redondeado al entero más cercano)?"

explicacion: |
  El estirado alarga el material reduciendo su sección transversal. Si se duplica la longitud inicial de 10-20cm, el resultado depende del factor exacto, pero la clave es entender que el volumen se conserva al deformarse.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["operaciones", "recalcado"]

variables:
  grosor_inicial: random(2, 4)
  factor_grosor: 2

respuesta: "{grosor_inicial * factor_grosor}"
tipo: input

enunciado: "En el recalcado, se busca reducir la longitud aumentando el grosor. Si partimos de una sección de {grosor_inicial} mm y logramos duplicar su espesor, ¿cuál es el nuevo grosor en mm?"

explicacion: |
  El recalcado engrosa el material. Si el grosor inicial era {grosor_inicial} y se duplica, el nuevo grosor es {grosor_inicial * factor_grosor} mm.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["herramientas", "doblad"]

variables:
  herramienta: uno_de(["pata de carnero", "yunque"])

respuesta: verdadero
tipo: vf

enunciado: "La 'pata de carnero' es una herramienta auxiliar útil para guiar ángulos y curvas en el doblado en caliente."

explicacion: |
  Verdadero. La pata de carnero (o punzón de doblar) ayuda a controlar la dirección de la curva y a evitar que el metal se pliegue de manera irregular.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "avanzado"
  tags: ["soldadura", "teoria"]

variables:
  temp_soldadura: random(1250, 1350)

respuesta: "{temp_soldadura}"
tipo: input

enunciado: "Para lograr una soldadura por forja exitosa, las piezas deben calentarse hasta un color casi blanco, correspondiente a una temperatura aproximada de {temp_soldadura} °C. ¿Es esta temperatura mayor que la de trabajo óptimo (1200 °C)?"

explicacion: |
  Sí. La soldadura requiere temperaturas más altas (casi el punto de fusión, >1200°C) para que las superficies se fusionen, a diferencia del trabajo en frío que se hace a menor temperatura.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["temperatura", "lectura"]

variables:
  temp_rojo: random(600, 700)

respuesta: "{temp_rojo}"
tipo: input

enunciado: "El acero comienza a tomar un rojo oscuro alrededor de los {temp_rojo} °C. A esta temperatura, ¿se recomienda manipularlo con fuerza moderada o esperar a que esté más caliente?"

explicacion: |
  Se recomienda manipularlo con fuerza moderada. Es el inicio de la plasticidad, pero aún es duro comparado con el rojo cereza o naranja.
```

### 26 — pregunta 26

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["operaciones", "estirado"]

respuesta: verdadero
tipo: vf

enunciado: "El estirado consiste en alargar el material reduciendo su sección transversal."

explicacion: |
  Verdadero. Al golpear el extremo caliente, el metal fluye longitudinalmente, aumentando la longitud y disminuyendo el grosor/área.
```

### 27 — pregunta 27

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["operaciones", "recalcado"]

respuesta: falso
tipo: vf

enunciado: "El recalcado busca aumentar la longitud del material para crear puntas de herramientas."

explicacion: |
  Falso. El recalcado reduce la longitud y aumenta el grosor. Para crear puntas o alargar, se usa el estirado.
```

### 28 — pregunta 28

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "avanzado"
  tags: ["matematica", "temperatura"]

variables:
  t1: random(800, 900)
  t2: random(1000, 1100)
  t_promedio: "{floor((t1 + t2) / 2)}"

respuesta: "{t_promedio}"
tipo: input

enunciado: "Si la temperatura de inicio del trabajo es {t1} °C y la de fin es {t2} °C, ¿cuál es el promedio aproximado de temperatura durante la forja (redondeado al entero más cercano)?"

explicacion: |
  El promedio se calcula sumando ambas temperaturas y dividiendo por dos. Esto da una idea de la energía térmica media aplicada.
```

### 29 — pregunta 29

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["operaciones", "doblad"]

respuesta: verdadero
tipo: vf

enunciado: "El doblado en caliente se realiza calentando la zona exacta donde se desea la curva."

explicacion: |
  Verdadero. Calentar solo la zona deseada permite curvar el acero sin afectar el resto de la pieza y sin romperlo.
```

### 30 — pregunta 30

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["propiedades", "metal"]

respuesta: verdadero
tipo: vf

enunciado: "A temperatura ambiente, el acero es duro y se rompe si se golpea; al calentarse, se vuelve plástico."

explicacion: |
  Verdadero. El calor reduce la resistencia del acero a la deformación, permitiendo que fluya bajo impacto en lugar de fracturarse.
```

### 31 — pregunta 31

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["temperatura", "color"]

variables:
  temp_cereza: random(750, 850)

respuesta: "{temp_cereza}"
tipo: input

enunciado: "El color rojo cereza se alcanza aproximadamente a los {temp_cereza} °C. Es un paso intermedio antes del naranja."

explicacion: |
  El rojo cereza indica una temperatura media-alta, adecuada para comenzar a trabajar más suavemente que con el rojo oscuro.
```

### 32 — pregunta 32

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["aplicacion", "recalcado"]

respuesta: verdadero
tipo: vf

enunciado: "El recalcado es útil cuando se necesita una base sólida o un mango robusto en una herramienta."

explicacion: |
  Verdadero. Al engrosar la zona, se aumenta la resistencia y la durabilidad en puntos de estrés o agarre.
```

### 33 — pregunta 33

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["aplicacion", "estirado"]

respuesta: verdadero
tipo: vf

enunciado: "El estirado es una técnica esencial para crear barras largas, puntas de herramientas o espigas."

explicacion: |
  Verdadero. Al alargar el material, se puede dar forma a extremos afilados o secciones largas y delgadas.
```

### 34 — pregunta 34

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "avanzado"
  tags: ["matematica", "mcm"]

variables:
  t1: random(2, 5)
  t2: random(3, 6)
  mcm_val: mcm(t1, t2)

respuesta: "{mcm_val}"
tipo: input

enunciado: "Si un proceso de enfriado tarda {t1} minutos y otro tarda {t2} minutos, ¿cuántos minutos deben pasar para que ambos terminen exactamente al mismo tiempo por primera vez (MCM)?"

explicacion: |
  Se calcula el Mínimo Común Múltiplo (MCM) de los tiempos individuales para encontrar el punto de sincronización.
```

### 35 — pregunta 35

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["temperatura", "color"]

respuesta: verdadero
tipo: vf

enunciado: "El color amarillo pálido indica que el acero ha llegado a su punto óptimo de trabajo (900-1200 °C)."

explicacion: |
  Verdadero. Este color marca el inicio del rango ideal de maleabilidad máxima antes de acercarse al peligro del amarillo brillante.
```

### 36 — pregunta 36

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "avanzado"
  tags: ["soldadura", "proceso"]

respuesta: verdadero
tipo: vf

enunciado: "Durante la soldadura por forja, el calor elimina la capa de óxido superficial permitiendo la unión metálica."

explicacion: |
  Verdadero. El calor intenso y el martilleo rompen y expulsan el óxido, permitiendo que los metales limpios se fusionen.
```

### 37 — pregunta 37

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["herramientas", "doblad"]

respuesta: verdadero
tipo: vf

enunciado: "La 'pata de carnero' se utiliza para guiar el ángulo deseado en el doblado en caliente."

explicacion: |
  Verdadero. Actúa como una palanca o guía para controlar la curvatura y evitar deformaciones no deseadas.
```

### 38 — pregunta 38

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["tecnica", "estirado"]

respuesta: verdadero
tipo: vf

enunciado: "Al estirar, se debe golpear el extremo caliente distribuyendo el impacto de manera uniforme para evitar deformaciones asimétricas."

explicacion: |
  Verdadero. Un golpe desigual puede torcer la barra o crear curvaturas no intencionales en lugar de un alargamiento recto.
```

### 39 — pregunta 39

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "intermedio"
  tags: ["tecnica", "recalcado"]

respuesta: verdadero
tipo: vf

enunciado: "En el recalcado, el metal fluye hacia los lados al golpear la zona calentada, engrosándose."

explicacion: |
  Verdadero. La presión axial fuerza al material a expandirse radialmente, aumentando el grosor.
```

### 40 — pregunta 40

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "basico"
  tags: ["temperatura", "lectura"]

respuesta: verdadero
tipo: vf

enunciado: "A los 600-700 °C (rojo oscuro), el metal ya es posible manipularlo con fuerza moderada."

explicacion: |
  Verdadero. Aunque aún es duro, es el punto inicial donde comienza a ceder al impacto, permitiendo trabajos preliminares.
```

### 41 — pregunta 41

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_tecnicas_herreria"
  nivel: "avanzado"
  tags: ["defectos", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "Quemar el metal debilita su estructura cristalina de manera irreversible."

explicacion: |
  Verdadero. La oxidación interna y la fusión parcial destruyen la integridad del grano del metal, haciéndolo quebradizo.
```
