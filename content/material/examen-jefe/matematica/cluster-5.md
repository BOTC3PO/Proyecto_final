# Examen jefe — Maestro de Poliedros y Cuerpos

> Logro #56. Completaste el parcial dominando conos, esferas, pirámides, prismas y sus desarrollos planos. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **128 preguntas totales** en 5/5 secciones.

---

## Sección: cuerpos-redondos-y-poliedros/conos (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "vocabulario"]

enunciado: "¿Qué es un cono?"
tipo: mc
opciones_explicitas:
  - "Un cuerpo redondo con una sola base circular y una superficie lateral que termina en un vértice"
  - "Un cuerpo redondo con dos bases circulares"
  - "Un poliedro con base circular"
respuesta: "Un cuerpo redondo con una sola base circular y una superficie lateral que termina en un vértice"

explicacion: |
  Es el equivalente redondo de la pirámide: una sola base, terminado en
  punta.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "piramide", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El cono es al cilindro lo que la pirámide es al prisma: una sola base en vez de dos, y un tercio del volumen del cuerpo equivalente."

explicacion: |
  Es exactamente el mismo patrón de relación, con base circular en vez de
  poligonal.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "vocabulario"]

enunciado: "¿Cuáles son los dos datos principales que definen el tamaño de un cono?"
tipo: mc
opciones_explicitas:
  - "El radio de la base y la altura"
  - "El perímetro y el área"
  - "La cantidad de caras y aristas"
respuesta: "El radio de la base y la altura"

explicacion: |
  Con radio y altura alcanza para calcular el volumen.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "vocabulario"]

enunciado: "¿Qué es la generatriz de un cono?"
tipo: mc
opciones_explicitas:
  - "La distancia desde el vértice hasta cualquier punto del borde de la base"
  - "El radio de la base"
  - "El diámetro de la base"
respuesta: "La distancia desde el vértice hasta cualquier punto del borde de la base"

explicacion: |
  Es el "lado inclinado" del cono, distinto de la altura (que es
  perpendicular a la base).
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La generatriz de un cono y su altura miden siempre lo mismo."

explicacion: |
  La altura es perpendicular a la base; la generatriz va en diagonal
  desde el vértice hasta el borde — la generatriz siempre es mayor que la
  altura (excepto en un cono "aplastado" imposible).
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula del volumen de un cono?"
tipo: mc
opciones_explicitas:
  - "(π × r² × h) ÷ 3"
  - "π × r² × h"
  - "(π × r × h) ÷ 3"
respuesta: "(π × r² × h) ÷ 3"

explicacion: |
  Es un tercio del volumen de un cilindro con el mismo radio y altura.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "volumen"]

variables:
  r: random(2, 12)
  h: random(3, 20)

respuesta: redondear((pi * r * r * h) / 3, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cono de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "(π × {r}² × {h}) ÷ 3 = {redondear((pi * r * r * h) / 3, 2)} cm³"

explicacion: |
  Se aplica (π × r² × h) ÷ 3 directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "volumen"]

variables:
  d: random(4, 24)
  h: random(3, 20)
  r: d / 2

respuesta: redondear((pi * r * r * h) / 3, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cono de diámetro {d} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "Radio: {d} ÷ 2 = {r} cm. Volumen: (π × {r}² × {h}) ÷ 3 = {redondear((pi * r * r * h) / 3, 2)} cm³."

explicacion: |
  Primero se pasa de diámetro a radio (dividir por 2) antes de aplicar
  la fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "cilindro", "problema"]

variables:
  r: random(2, 12)
  h: random(3, 20)

respuesta: redondear(pi * r * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un cono de radio {r} cm y altura {h} cm tiene un volumen de {redondear((pi * r * r * h) / 3, 2)} cm³. ¿Cuál sería el volumen de un CILINDRO con ese mismo radio y esa misma altura?"

pasos:
  - "El cilindro tiene 3 veces el volumen del cono: {redondear((pi * r * r * h) / 3, 2)} × 3 = {redondear(pi * r * r * h, 2)} cm³."

explicacion: |
  El cilindro tiene exactamente el triple de volumen que el cono de
  igual radio y altura.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: (pi * r * r * h) / 3

respuesta: redondear(h, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cono de radio {r} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su altura?"

pasos:
  - "({redondear(volumen, 2)} × 3) ÷ (π × {r}²) = {redondear((volumen * 3) / (pi * r * r), 2)} cm"

explicacion: |
  Se despeja la altura: (volumen × 3) ÷ (π × radio²).
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: (pi * r * r * h) / 3

respuesta: redondear(r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cono de altura {h} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su radio?"

pasos:
  - "sqrt(({redondear(volumen, 2)} × 3) ÷ (π × {h})) = {redondear(sqrt((volumen * 3) / (pi * h)), 2)} cm"

explicacion: |
  Se despeja el radio² y después se saca la raíz cuadrada.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "superficie"]

variables:
  r: random(2, 10)
  g: random(6, 20)

restricciones:
  - g > r

respuesta: redondear(pi * r * g, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área de la superficie lateral de un cono de radio {r} cm y generatriz {g} cm? Redondeá a 2 decimales."

pasos:
  - "π × {r} × {g} = {redondear(pi * r * g, 2)} cm²"

explicacion: |
  El área lateral del cono es π × radio × generatriz.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "superficie"]

variables:
  r: random(2, 10)
  g: random(6, 20)

restricciones:
  - g > r

respuesta: redondear((pi * r * g) + (pi * r * r), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área total (lateral + base) de un cono de radio {r} cm y generatriz {g} cm? Redondeá a 2 decimales."

pasos:
  - "Lateral: π × {r} × {g} = {redondear(pi * r * g, 2)} cm². Base: π × {r}² = {redondear(pi * r * r, 2)} cm². Total: {redondear((pi * r * g) + (pi * r * r), 2)} cm²."

explicacion: |
  Se suma el área lateral más el área de la base circular.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "capacidad", "problema"]

variables:
  r: random(2, 4)
  h: random(8, 14)

respuesta: redondear(((pi * r * r * h) / 3) / 1000, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un cucurucho de helado con forma de cono tiene {r} cm de radio y {h} cm de altura. ¿Cuántos litros de helado entran, como máximo? Redondeá a 3 decimales."

pasos:
  - "Volumen: (π × {r}² × {h}) ÷ 3 = {redondear((pi * r * r * h) / 3, 2)} cm³. En litros: {redondear((pi * r * r * h) / 3, 2)} ÷ 1000 = {redondear(((pi * r * r * h) / 3) / 1000, 3)}."

explicacion: |
  Se calcula el volumen del cono en cm³ y se convierte a litros.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El cono tiene una sola base circular, no dos."

explicacion: |
  Igual que la pirámide (una base), a diferencia del cilindro (dos
  bases).
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "volumen"]

variables:
  r: random(2, 8)
  h: random(3, 12)

respuesta: falso
tipo: vf

enunciado: "Si el radio de un cono de {r} cm y altura {h} cm se duplica (manteniendo la misma altura), su volumen también se duplica."

pasos:
  - "Volumen original: (π × {r}² × {h}) ÷ 3 = {redondear((pi * r * r * h) / 3, 2)} cm³. Con el radio doble: (π × {2 * r}² × {h}) ÷ 3 = {redondear((pi * (2 * r) * (2 * r) * h) / 3, 2)} cm³."

explicacion: |
  Como el radio está al cuadrado en la fórmula, duplicarlo multiplica el
  volumen por 4, igual que en el cilindro.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "comparacion"]

variables:
  r1: random(2, 10)
  h1: random(3, 15)
  r2: random(2, 10)
  h2: random(3, 15)

restricciones:
  - (r1 * r1 * h1) != (r2 * r2 * h2)

respuesta: (r1 * r1 * h1) > (r2 * r2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen un cono de radio {r1} cm y altura {h1} cm, que otro de radio {r2} cm y altura {h2} cm?"

pasos:
  - "Alcanza con comparar r² × h (el resto de la fórmula es igual para los dos): {r1}² × {h1} = {r1 * r1 * h1} contra {r2}² × {h2} = {r2 * r2 * h2}."

explicacion: |
  Como ambos comparten el factor π ÷ 3, comparar los volúmenes es lo
  mismo que comparar r² × h.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "superficie", "vocabulario"]

enunciado: "¿Cuál es la fórmula del área lateral de un cono (radio r, generatriz g)?"
tipo: mc
opciones_explicitas:
  - "π × r × g"
  - "π × r² × g"
  - "2 × π × r × g"
respuesta: "π × r × g"

explicacion: |
  Área lateral = π por radio por generatriz.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "completar"]

tipo: completar
enunciado: "Completá: el volumen de un cono es π por el radio al cuadrado, por la altura, dividido ___."
respuestas_validas:
  - 3

explicacion: |
  V = (π × r² × h) ÷ 3, igual que la pirámide con base circular.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "completar"]

variables:
  r: random(2, 8)
  h: random(3, 12)

tipo: completar
enunciado: "Completá: el volumen de un cono de radio {r} cm y altura {h} cm es ___ cm³ (redondeado a 2 decimales)."
respuestas_validas:
  - redondear((pi * r * r * h) / 3, 2)

explicacion: |
  V = (π × r² × h) ÷ 3.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "comparacion"]

enunciado: "¿Cuál de estos conos tiene mayor volumen: uno de radio 6 cm y altura 9 cm, o uno de radio 4 cm y altura 20 cm?"
tipo: mc
opciones_explicitas:
  - "Radio 6 cm y altura 9 cm"
  - "Radio 4 cm y altura 20 cm"
respuesta: "Radio 6 cm y altura 9 cm"

pasos:
  - "r²×h: 6² × 9 = 324 contra 4² × 20 = 320."

explicacion: |
  El radio al cuadrado pesa más que la altura: 324 > 320.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "orden"]

tipo: ordenar
enunciado: "Ordená estos conos de menor a mayor volumen (comparando r²×h): radio 2 y altura 30; radio 6 y altura 3; radio 4 y altura 8; radio 3 y altura 15."
opciones_explicitas:
  - "Radio 4 y altura 8"
  - "Radio 6 y altura 3"
  - "Radio 3 y altura 15"
  - "Radio 2 y altura 30"
respuesta_orden:
  - "Radio 6 y altura 3"
  - "Radio 2 y altura 30"
  - "Radio 4 y altura 8"
  - "Radio 3 y altura 15"

pasos:
  - "r²×h: 2²×30=120; 6²×3=108; 4²×8=128; 3²×15=135."

explicacion: |
  Se calcula r²×h de cada uno antes de comparar: 108 < 120 < 128 < 135.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El vértice de un cono es el único punto donde termina la superficie lateral curva."

explicacion: |
  Toda la superficie lateral converge en ese único punto.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "avanzado"
  tags: ["cono", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En cualquier cono real, la generatriz siempre es mayor que la altura."

explicacion: |
  La altura va derecho (perpendicular a la base); la generatriz va en
  diagonal desde el vértice hasta el borde — el camino diagonal siempre
  es más largo que el camino recto perpendicular.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "intermedio"
  tags: ["cono", "verificacion"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  correcto: redondear((pi * r * r * h) / 3, 1)
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de un cono de radio {r} cm y altura {h} cm es {mostrado} cm³ (redondeado a 1 decimal)."

explicacion: |
  Se recalcula (π × r² × h) ÷ 3 y se compara con el valor mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "conos"
  nivel: "basico"
  tags: ["cono", "piramide", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El factor 1/3 en la fórmula del volumen aparece siempre que un cuerpo termina en un único vértice en vez de tener una segunda base — sea la base un polígono (pirámide) o un círculo (cono)."

explicacion: |
  Es el patrón central que conecta `../piramides/` con este módulo.
```

## Sección: cuerpos-redondos-y-poliedros/desarrollo-plano (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "basico"
  tags: ["desarrollo_plano", "vocabulario"]

enunciado: "¿Qué es el desarrollo plano de un cuerpo 3D?"
tipo: mc
opciones_explicitas:
  - "La figura plana que, al doblarse, arma exactamente ese cuerpo"
  - "La sombra que proyecta el cuerpo"
  - "Un dibujo en perspectiva del cuerpo"
respuesta: "La figura plana que, al doblarse, arma exactamente ese cuerpo"

explicacion: |
  Es como desarmar una caja de cartón hasta que queda plana, o al revés.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "prisma"]

enunciado: "¿De qué piezas se compone el desarrollo de un prisma?"
tipo: mc
opciones_explicitas:
  - "Las dos bases (el polígono) más un rectángulo por cada cara lateral"
  - "Una sola base más triángulos"
  - "Sólo rectángulos, sin ninguna base"
respuesta: "Las dos bases (el polígono) más un rectángulo por cada cara lateral"

explicacion: |
  Un prisma tiene dos bases (ver `../prismas/`), así que su desarrollo
  también las incluye a las dos.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "piramide"]

enunciado: "¿De qué piezas se compone el desarrollo de una pirámide?"
tipo: mc
opciones_explicitas:
  - "Una base (el polígono) más un triángulo por cada cara lateral"
  - "Dos bases más rectángulos"
  - "Sólo triángulos, sin ninguna base"
respuesta: "Una base (el polígono) más un triángulo por cada cara lateral"

explicacion: |
  La pirámide tiene una sola base (ver `../piramides/`), y sus caras
  laterales son triángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "cilindro"]

enunciado: "¿De qué piezas se compone el desarrollo de un cilindro?"
tipo: mc
opciones_explicitas:
  - "Dos círculos (las bases) más un rectángulo para la superficie lateral"
  - "Un círculo más un sector circular"
  - "Sólo un rectángulo, sin círculos"
respuesta: "Dos círculos (las bases) más un rectángulo para la superficie lateral"

explicacion: |
  El cilindro tiene dos bases circulares (ver `../cilindros/`), y su
  superficie curva se "desenrolla" en un rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "cono"]

enunciado: "¿De qué piezas se compone el desarrollo de un cono?"
tipo: mc
opciones_explicitas:
  - "Un círculo (la base) más un sector circular para la superficie lateral"
  - "Dos círculos más un rectángulo"
  - "Un triángulo más un círculo"
respuesta: "Un círculo (la base) más un sector circular para la superficie lateral"

explicacion: |
  El cono tiene una sola base circular (ver `../conos/`), y su
  superficie lateral "desenrollada" queda como una porción de círculo.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "esfera"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del prisma, la pirámide, el cilindro y el cono, la esfera no se puede desenrollar en una figura plana sin deformarla."

explicacion: |
  Una superficie curvada en dos direcciones a la vez no puede aplanarse
  sin estirar o cortar algo — ver `../esferas/`.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "esfera"]

enunciado: "¿Por qué la esfera no tiene un desarrollo plano exacto, a diferencia de los demás cuerpos de este grupo?"
tipo: mc
opciones_explicitas:
  - "Porque su superficie está curvada en dos direcciones a la vez, y eso no se puede aplanar sin deformar"
  - "Porque es demasiado grande"
  - "Porque no tiene volumen"
respuesta: "Porque su superficie está curvada en dos direcciones a la vez, y eso no se puede aplanar sin deformar"

explicacion: |
  El cilindro y el cono también son curvos, pero se curvan en una sola
  dirección — por eso sí se pueden "desenrollar" sin deformación.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "esfera"]

respuesta: verdadero
tipo: vf

enunciado: "Todo mapa plano del mundo tiene que deformar algo, por la misma razón matemática que impide desenrollar una esfera sin distorsión."

explicacion: |
  La Tierra es (aproximadamente) una esfera; ningún mapa plano puede
  representarla sin algún tipo de distorsión (de área, de forma o de
  distancia).
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "cilindro"]

variables:
  h: random(3, 20)

respuesta: h
tipo: input
tolerancia_abs: 0

enunciado: "En el desarrollo de un cilindro de altura {h} cm, ¿cuánto mide el ancho del rectángulo de la superficie lateral?"

explicacion: |
  El ancho del rectángulo coincide con la altura del cilindro.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "cilindro"]

variables:
  r: random(2, 15)

respuesta: redondear(2 * pi * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "En el desarrollo de un cilindro de radio {r} cm, ¿cuánto mide el largo del rectángulo de la superficie lateral? Redondeá a 2 decimales."

pasos:
  - "El largo coincide con la circunferencia de la base: 2 × π × {r} = {redondear(2 * pi * r, 2)} cm"

explicacion: |
  Al enrollar el rectángulo, ese lado largo tiene que darle la vuelta
  completa al círculo de la base.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "prisma"]

variables:
  n: random(3, 9)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "El desarrollo de un prisma con base de {n} lados, ¿cuántos rectángulos laterales tiene?"

explicacion: |
  Uno por cada lado de la base.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "piramide"]

variables:
  n: random(3, 9)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "El desarrollo de una pirámide con base de {n} lados, ¿cuántos triángulos laterales tiene?"

explicacion: |
  Uno por cada lado de la base.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "prisma"]

variables:
  n: random(3, 9)

respuesta: n + 2
tipo: input
tolerancia_abs: 0

enunciado: "El desarrollo de un prisma con base de {n} lados, ¿cuántas piezas tiene en total (bases más rectángulos laterales)?"

explicacion: |
  {n} rectángulos laterales más 2 bases = {n + 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "piramide"]

variables:
  n: random(3, 9)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "El desarrollo de una pirámide con base de {n} lados, ¿cuántas piezas tiene en total (la base más los triángulos laterales)?"

explicacion: |
  {n} triángulos laterales más 1 base = {n + 1}.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "basico"
  tags: ["desarrollo_plano", "cilindro"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas piezas tiene en total el desarrollo de un cilindro?"

explicacion: |
  Dos círculos (las bases) más un rectángulo (la superficie lateral) =
  3 piezas.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "basico"
  tags: ["desarrollo_plano", "cono"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas piezas tiene en total el desarrollo de un cono?"

explicacion: |
  Un círculo (la base) más un sector circular (la superficie lateral) =
  2 piezas.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "cono"]

variables:
  g: random(6, 25)

respuesta: g
tipo: input
tolerancia_abs: 0

enunciado: "En el desarrollo de un cono con generatriz {g} cm, ¿cuánto mide el radio del sector circular de la superficie lateral?"

explicacion: |
  El radio del sector coincide con la generatriz del cono.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "cono"]

respuesta: verdadero
tipo: vf

enunciado: "En el desarrollo de un cono, la longitud del arco del sector circular lateral coincide exactamente con la circunferencia de la base."

explicacion: |
  Por eso, al enrollar el sector, cierra perfecto sobre el borde del
  círculo de la base — si no coincidieran, el cono no podría armarse
  bien.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "prisma", "problema"]

variables:
  l: random(4, 15)
  a: random(3, 12)
  h: random(3, 20)

respuesta: (2 * (l * a)) + (2 * (l + a) * h)
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma rectangular mide {l} cm × {a} cm de base, y {h} cm de altura. Sumando las piezas de su desarrollo (2 bases + 4 rectángulos laterales), ¿cuál es su superficie total?"

pasos:
  - "Bases: 2 × ({l} × {a}) = {2 * (l * a)} cm². Laterales: perímetro de la base × altura = (2 × ({l} + {a})) × {h} = {(2 * (l + a)) * h} cm². Total: {(2 * (l * a)) + ((2 * (l + a)) * h)} cm²."

explicacion: |
  Sumar el área de cada pieza del desarrollo da la superficie total del
  cuerpo.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "piramide", "problema"]

variables:
  area_base: random(15, 50)
  area_triangulo: random(10, 30)
  n: 4

respuesta: area_base + (n * area_triangulo)
tipo: input
tolerancia_abs: 0

enunciado: "Una pirámide cuadrangular tiene una base de {area_base} cm² de área, y cada una de sus 4 caras triangulares mide {area_triangulo} cm². ¿Cuál es su superficie total?"

pasos:
  - "{area_base} + ({n} × {area_triangulo}) = {area_base + (n * area_triangulo)} cm²"

explicacion: |
  Se suma el área de la base más el área de las 4 caras laterales
  triangulares del desarrollo.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "cilindro", "problema"]

variables:
  r: random(2, 12)
  h: random(3, 20)

respuesta: redondear((2 * pi * r * r) + (2 * pi * r * h), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Sumando las 3 piezas del desarrollo de un cilindro de radio {r} cm y altura {h} cm (2 círculos + 1 rectángulo), ¿cuál es su superficie total? Redondeá a 2 decimales."

pasos:
  - "2 círculos: 2 × π × {r}² = {redondear(2 * pi * r * r, 2)} cm². Rectángulo: 2 × π × {r} × {h} = {redondear(2 * pi * r * h, 2)} cm². Total: {redondear((2 * pi * r * r) + (2 * pi * r * h), 2)} cm²."

explicacion: |
  Es exactamente la fórmula de superficie total ya vista en
  `../cilindros/`, ahora entendida como la suma de las piezas del
  desarrollo.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "avanzado"
  tags: ["desarrollo_plano", "cono", "problema"]

variables:
  r: random(2, 10)
  g: random(6, 20)

restricciones:
  - g > r

respuesta: redondear((pi * r * r) + (pi * r * g), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Sumando las 2 piezas del desarrollo de un cono de radio {r} cm y generatriz {g} cm (1 círculo + 1 sector), ¿cuál es su superficie total? Redondeá a 2 decimales."

pasos:
  - "Círculo: π × {r}² = {redondear(pi * r * r, 2)} cm². Sector: π × {r} × {g} = {redondear(pi * r * g, 2)} cm². Total: {redondear((pi * r * r) + (pi * r * g), 2)} cm²."

explicacion: |
  Es la misma fórmula de superficie total vista en `../conos/`, ahora
  entendida como suma de las piezas del desarrollo.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "basico"
  tags: ["desarrollo_plano", "esfera"]

enunciado: "¿Cuál de estos 5 cuerpos NO tiene un desarrollo plano exacto?"
tipo: mc
opciones_explicitas:
  - "La esfera"
  - "El cilindro"
  - "El cono"
respuesta: "La esfera"

explicacion: |
  Prisma, pirámide, cilindro y cono sí se pueden desenrollar sin
  deformación; la esfera no.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "prisma", "completar"]

tipo: completar
enunciado: "Completá: el desarrollo de un prisma tiene 2 bases más un ___ por cada cara lateral."
respuestas_validas:
  - "rectángulo"

explicacion: |
  Cada cara lateral de un prisma recto es un rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "intermedio"
  tags: ["desarrollo_plano", "piramide", "completar"]

tipo: completar
enunciado: "Completá: el desarrollo de una pirámide tiene 1 base más un ___ por cada cara lateral."
respuestas_validas:
  - "triángulo"

explicacion: |
  Cada cara lateral de una pirámide es un triángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "desarrollo_plano"
  nivel: "basico"
  tags: ["desarrollo_plano", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar el área de cada pieza del desarrollo plano de un cuerpo da directamente su superficie total."

explicacion: |
  Es la idea central del módulo: pasar un problema 3D (superficie de un
  cuerpo) a varios problemas 2D más simples (área de cada pieza plana).
```

## Sección: cuerpos-redondos-y-poliedros/esferas (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

enunciado: "¿Qué es una esfera?"
tipo: mc
opciones_explicitas:
  - "El conjunto de puntos del espacio a la misma distancia de un centro"
  - "Un cuerpo con una base circular y un vértice"
  - "Un cuerpo con dos bases circulares"
respuesta: "El conjunto de puntos del espacio a la misma distancia de un centro"

explicacion: |
  Esa distancia constante es el radio.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del cilindro y el cono, la esfera no tiene ninguna base ni vértice: es una única superficie curva cerrada."

explicacion: |
  Es el más simple de los cuerpos redondos en ese sentido.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula del volumen de una esfera?"
tipo: mc
opciones_explicitas:
  - "(4 ÷ 3) × π × r³"
  - "(4 ÷ 3) × π × r²"
  - "π × r³"
respuesta: "(4 ÷ 3) × π × r³"

explicacion: |
  Es una fórmula propia de la esfera, distinta de "área de la base ×
  algo" porque no tiene base.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "volumen"]

variables:
  r: random(2, 15)

respuesta: redondear((4 / 3) * pi * r * r * r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "¿Cuál es el volumen de una esfera de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "(4 ÷ 3) × π × {r}³ = {redondear((4 / 3) * pi * r * r * r, 2)} cm³"

explicacion: |
  Se aplica (4÷3) × π × r³ directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "volumen"]

variables:
  d: random(4, 30)
  r: d / 2

respuesta: redondear((4 / 3) * pi * r * r * r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "¿Cuál es el volumen de una esfera de diámetro {d} cm? Redondeá a 2 decimales."

pasos:
  - "Radio: {d} ÷ 2 = {r} cm. Volumen: (4 ÷ 3) × π × {r}³ = {redondear((4 / 3) * pi * r * r * r, 2)} cm³."

explicacion: |
  Primero se pasa de diámetro a radio antes de aplicar la fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "superficie", "vocabulario"]

enunciado: "¿Cuál es la fórmula de la superficie de una esfera?"
tipo: mc
opciones_explicitas:
  - "4 × π × r²"
  - "(4 ÷ 3) × π × r³"
  - "2 × π × r²"
respuesta: "4 × π × r²"

explicacion: |
  Área de la superficie = 4πr².
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "superficie"]

variables:
  r: random(2, 15)

respuesta: redondear(4 * pi * r * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la superficie de una esfera de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "4 × π × {r}² = {redondear(4 * pi * r * r, 2)} cm²"

explicacion: |
  Se aplica 4 × π × r² directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "volumen"]

variables:
  r: random(2, 10)
  volumen: (4 / 3) * pi * r * r * r

respuesta: redondear(r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una esfera tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su radio?"

pasos:
  - "raiz(({redondear(volumen, 2)} × 3) ÷ (4 × π), 3) = {redondear(raiz((volumen * 3) / (4 * pi), 3), 2)} cm"

explicacion: |
  Se despeja r³ y después se saca la raíz cúbica (con `raiz(x, 3)`).
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "hemisferio", "volumen"]

variables:
  r: random(2, 15)

respuesta: redondear(((4 / 3) * pi * r * r * r) / 2, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "¿Cuál es el volumen de una media esfera (hemisferio) de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "Esfera completa: (4 ÷ 3) × π × {r}³ = {redondear((4 / 3) * pi * r * r * r, 2)} cm³. La mitad: {redondear(((4 / 3) * pi * r * r * r) / 2, 2)} cm³."

explicacion: |
  Un hemisferio tiene exactamente la mitad del volumen de la esfera
  completa.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "capacidad", "problema"]

variables:
  r: random(5, 15)

respuesta: redondear(((4 / 3) * pi * r * r * r) / 1000, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pelota inflable tiene {r} cm de radio. ¿Cuántos litros de aire hacen falta para llenarla por completo? Redondeá a 3 decimales."

pasos:
  - "Volumen: (4 ÷ 3) × π × {r}³ = {redondear((4 / 3) * pi * r * r * r, 2)} cm³. En litros: {redondear((4 / 3) * pi * r * r * r, 2)} ÷ 1000 = {redondear(((4 / 3) * pi * r * r * r) / 1000, 3)}."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "volumen"]

variables:
  r: random(2, 8)

respuesta: falso
tipo: vf

enunciado: "Si el radio de una esfera de {r} cm se duplica, su volumen también se duplica."

pasos:
  - "Volumen original: (4 ÷ 3) × π × {r}³ = {redondear((4 / 3) * pi * r * r * r, 2)} cm³. Con el radio doble: (4 ÷ 3) × π × {2 * r}³ = {redondear((4 / 3) * pi * (2 * r) * (2 * r) * (2 * r), 2)} cm³."

explicacion: |
  Como el radio está al cubo en la fórmula, duplicarlo multiplica el
  volumen por 8, no por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "comparacion"]

variables:
  r1: random(2, 10)
  r2: random(2, 10)

restricciones:
  - r1 != r2

respuesta: r1 > r2
tipo: vf

enunciado: "¿Tiene mayor volumen una esfera de radio {r1} cm, que otra de radio {r2} cm?"

pasos:
  - "Como el volumen depende de r³ (siempre creciente), alcanza con comparar los radios: {r1} contra {r2}."

explicacion: |
  A mayor radio, siempre mayor volumen: no hace falta calcular el
  volumen completo para comparar dos esferas.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "comparacion"]

enunciado: "¿Cuál de estas esferas tiene mayor volumen: una de radio 4 cm, o una de radio 6 cm?"
tipo: mc
opciones_explicitas:
  - "Radio 6 cm"
  - "Radio 4 cm"
respuesta: "Radio 6 cm"

explicacion: |
  A mayor radio, mayor volumen.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La esfera no tiene aristas, porque no tiene caras planas que se encuentren entre sí."

explicacion: |
  Una arista es el borde donde se juntan dos caras planas — la esfera no
  tiene ninguna cara plana.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "cilindro", "cono", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para un mismo radio r, si el cilindro y el cono tienen altura 2r, el volumen de la esfera queda entre el del cono (el menor) y el del cilindro (el mayor)."

explicacion: |
  Es la relación 1:2:3 (cono:esfera:cilindro) que ya había descubierto
  Arquímedes.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "avanzado"
  tags: ["esfera", "superficie"]

variables:
  r: random(2, 10)
  superficie: 4 * pi * r * r

respuesta: redondear(r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una esfera tiene una superficie de {redondear(superficie, 2)} cm². ¿Cuál es su radio?"

pasos:
  - "sqrt({redondear(superficie, 2)} ÷ (4 × π)) = {redondear(sqrt(superficie / (4 * pi)), 2)} cm"

explicacion: |
  Se despeja r² dividiendo la superficie por 4π, y después se saca la
  raíz cuadrada.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "hemisferio", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un hemisferio (media esfera) tiene exactamente la mitad del volumen de la esfera completa del mismo radio."

explicacion: |
  Es simplemente cortar la esfera al medio.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "completar"]

tipo: completar
enunciado: "Completá: el volumen de una esfera es 4 tercios por π por el radio elevado a la ___."
respuestas_validas:
  - 3

explicacion: |
  V = (4/3) × π × r³.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "completar"]

variables:
  r: random(2, 10)

tipo: completar
enunciado: "Completá: el volumen de una esfera de radio {r} cm es ___ cm³ (redondeado a 2 decimales)."
respuestas_validas:
  - redondear((4 / 3) * pi * r * r * r, 2)

explicacion: |
  V = (4/3) × π × r³.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "orden"]

tipo: ordenar
enunciado: "Ordená estas esferas de menor a mayor volumen, según su radio: 7 cm, 2 cm, 5 cm, 3 cm."
opciones_explicitas:
  - "Radio 5 cm"
  - "Radio 2 cm"
  - "Radio 7 cm"
  - "Radio 3 cm"
respuesta_orden:
  - "Radio 2 cm"
  - "Radio 3 cm"
  - "Radio 5 cm"
  - "Radio 7 cm"

explicacion: |
  Como el volumen crece siempre con el radio, alcanza con ordenar los
  radios directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "intermedio"
  tags: ["esfera", "verificacion"]

variables:
  r: random(2, 10)
  correcto: redondear((4 / 3) * pi * r * r * r, 1)
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de una esfera de radio {r} cm es {mostrado} cm³ (redondeado a 1 decimal)."

explicacion: |
  Se recalcula (4/3) × π × r³ y se compara con el valor mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

enunciado: "¿Cuál de estos objetos tiene aproximadamente forma de esfera?"
tipo: mc
opciones_explicitas:
  - "Una pelota de fútbol"
  - "Una lata de gaseosa"
  - "Una caja de zapatos"
respuesta: "Una pelota de fútbol"

explicacion: |
  La lata es un cilindro y la caja un prisma rectangular; la pelota se
  aproxima a una esfera.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La esfera es un poliedro, porque tiene una superficie cerrada."

explicacion: |
  Un poliedro necesita caras PLANAS; la esfera es puramente curva, así
  que se clasifica como cuerpo redondo, no como poliedro.
```

```
metadata:
  materia: "matematicas"
  tema: "esferas"
  nivel: "basico"
  tags: ["esfera", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "De todos los cuerpos vistos en esta rama (prismas, pirámides, cilindros, conos, esferas), la esfera es el único que se describe completamente con un solo dato: el radio."

explicacion: |
  Los demás cuerpos necesitan al menos dos datos (base y altura); la
  esfera queda totalmente determinada por su radio.
```

## Sección: cuerpos-redondos-y-poliedros/piramides (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

enunciado: "¿Qué es una pirámide?"
tipo: mc
opciones_explicitas:
  - "Un poliedro con una sola base y caras laterales triangulares que se juntan en un vértice"
  - "Un poliedro con dos bases congruentes y paralelas"
  - "Un cuerpo redondo sin caras planas"
respuesta: "Un poliedro con una sola base y caras laterales triangulares que se juntan en un vértice"

explicacion: |
  A diferencia del prisma (dos bases), la pirámide tiene una sola base y
  termina en una punta.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas bases tiene una pirámide?"

explicacion: |
  Una sola — es lo que la distingue del prisma, que tiene dos.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

enunciado: "¿Qué forma tienen las caras laterales de una pirámide?"
tipo: mc
opciones_explicitas:
  - "Triangular"
  - "Rectangular"
  - "Circular"
respuesta: "Triangular"

explicacion: |
  Cada cara lateral conecta un lado de la base con el vértice, formando
  un triángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

enunciado: "¿Qué es el vértice (o ápice) de una pirámide?"
tipo: mc
opciones_explicitas:
  - "El punto donde se juntan todas las caras laterales"
  - "El centro de la base"
  - "Cualquiera de los lados de la base"
respuesta: "El punto donde se juntan todas las caras laterales"

explicacion: |
  Es la "punta" de la pirámide.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

enunciado: "¿Según qué se nombra una pirámide (triangular, cuadrangular, pentagonal...)?"
tipo: mc
opciones_explicitas:
  - "Según la forma de su base"
  - "Según su altura"
  - "Según la cantidad de vértices que tiene"
respuesta: "Según la forma de su base"

explicacion: |
  Base cuadrada → pirámide cuadrangular, como las de Egipto.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula del volumen de una pirámide?"
tipo: mc
opciones_explicitas:
  - "(Área de la base × altura) ÷ 3"
  - "Área de la base × altura"
  - "(Área de la base × altura) ÷ 2"
respuesta: "(Área de la base × altura) ÷ 3"

explicacion: |
  Es un tercio del volumen de un prisma con la misma base y altura.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una pirámide y un prisma con la misma base y la misma altura tienen: la pirámide, un tercio del volumen del prisma."

explicacion: |
  Es la relación clave del módulo: V_pirámide = V_prisma ÷ 3.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "volumen"]

variables:
  l: random(3, 15)
  altura: random(3, 20)

respuesta: ((l * l) * altura) / 3
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pirámide tiene base cuadrada de {l} cm de lado y {altura} cm de altura. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: {l} × {l} = {l * l} cm². Volumen: ({l * l} × {altura}) ÷ 3 = {((l * l) * altura) / 3} cm³."

explicacion: |
  Se calcula el área de la base cuadrada, se multiplica por la altura, y
  se divide por 3.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "volumen"]

variables:
  b: random(4, 20)
  a: random(3, 15)
  altura: random(3, 20)

respuesta: ((b * a) * altura) / 3
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pirámide tiene base rectangular de {b} cm × {a} cm y {altura} cm de altura. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: {b} × {a} = {b * a} cm². Volumen: ({b * a} × {altura}) ÷ 3 = {((b * a) * altura) / 3} cm³."

explicacion: |
  Misma fórmula general, con el área de un rectángulo como base.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "volumen"]

variables:
  b: random(4, 16)
  h_base: random(2, 12)
  altura: random(3, 18)

respuesta: (((b * h_base) / 2) * altura) / 3
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pirámide tiene base triangular (base {b} cm, altura del triángulo {h_base} cm) y {altura} cm de altura. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: ({b} × {h_base}) ÷ 2 = {(b * h_base) / 2} cm². Volumen: ({(b * h_base) / 2} × {altura}) ÷ 3 = {(((b * h_base) / 2) * altura) / 3} cm³."

explicacion: |
  Primero el área de la base triangular, después aplicar la fórmula
  general de la pirámide.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "volumen"]

variables:
  area_base: random(10, 50)
  altura: random(3, 15)
  volumen: (area_base * altura) / 3

respuesta: altura
tipo: input
tolerancia_abs: 0.01

enunciado: "Una pirámide tiene {volumen} cm³ de volumen y su base mide {area_base} cm² de área. ¿Cuánto mide su altura?"

pasos:
  - "({volumen} × 3) ÷ {area_base} = {(volumen * 3) / area_base} cm"

explicacion: |
  Se despeja la altura: (volumen × 3) ÷ área de la base.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "prisma", "problema"]

variables:
  l: random(4, 15)
  altura: random(4, 15)

respuesta: (l * l) * altura
tipo: input
tolerancia_abs: 0

enunciado: "Una pirámide de base cuadrada de {l} cm de lado y {altura} cm de altura tiene un volumen de {((l * l) * altura) / 3} cm³. ¿Cuál sería el volumen de un PRISMA con esa misma base y esa misma altura?"

pasos:
  - "El prisma tiene 3 veces el volumen de la pirámide: {((l * l) * altura) / 3} × 3 = {l * l * altura} cm³ (o, directamente, {l} × {l} × {altura})."

explicacion: |
  El prisma tiene exactamente el triple de volumen que la pirámide de
  igual base y altura.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "elementos"]

respuesta: 5
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas caras laterales tiene una pirámide de base pentagonal (5 lados)?"

explicacion: |
  Tantas caras laterales triangulares como lados tiene la base.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "elementos"]

variables:
  n: random(3, 8)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "Una pirámide tiene una base con {n} lados. ¿Cuántos vértices tiene en total (los de la base más el ápice)?"

explicacion: |
  {n} vértices de la base + 1 vértice superior = {n + 1}.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "elementos"]

variables:
  n: random(3, 8)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "Una pirámide tiene una base con {n} lados. ¿Cuántas aristas tiene en total (las de la base más las laterales)?"

pasos:
  - "{n} aristas de la base + {n} aristas laterales = {2 * n}"

explicacion: |
  n aristas de la base más n aristas que suben hasta el vértice.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "elementos"]

variables:
  n: random(3, 8)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "Una pirámide tiene una base con {n} lados. ¿Cuántas caras tiene en total (la base más las laterales)?"

explicacion: |
  {n} caras laterales más 1 base = {n + 1}.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "euler"]

variables:
  n: random(3, 8)
  vertices: n + 1
  aristas: 2 * n
  caras: n + 1

respuesta: verdadero
tipo: vf

enunciado: "Para una pirámide con base de {n} lados ({vertices} vértices, {aristas} aristas, {caras} caras), ¿se cumple que Vértices − Aristas + Caras = 2?"

pasos:
  - "{vertices} − {aristas} + {caras} = {vertices - aristas + caras}"

explicacion: |
  Se cumple, igual que en el prisma: es la fórmula de Euler para
  poliedros convexos.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las pirámides de Egipto tienen base cuadrada, así que se clasifican como pirámides cuadrangulares."

explicacion: |
  Base de 4 lados (cuadrado) → pirámide cuadrangular.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Una pirámide tiene dos bases congruentes y paralelas, igual que un prisma."

explicacion: |
  Tener dos bases es justamente lo que define a un prisma, no a una
  pirámide (que tiene una sola).
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "vocabulario"]

enunciado: "¿Cómo se llama una pirámide cuya base es un triángulo?"
tipo: mc
opciones_explicitas:
  - "Pirámide triangular"
  - "Pirámide cuadrangular"
  - "Prisma triangular"
respuesta: "Pirámide triangular"

explicacion: |
  Se nombra según la base: triángulo → pirámide triangular (también
  llamada tetraedro si además es regular).
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "completar"]

tipo: completar
enunciado: "Completá: el volumen de una pirámide es el área de la base por la altura, dividido ___."
respuestas_validas:
  - 3

explicacion: |
  V = (área de la base × altura) ÷ 3.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "intermedio"
  tags: ["piramide", "completar"]

variables:
  volumen_prisma: random(30, 300)

tipo: completar
enunciado: "Completá: si un prisma tiene {volumen_prisma} cm³ de volumen, una pirámide con la misma base y altura tiene ___ cm³."
respuestas_validas:
  - volumen_prisma / 3

explicacion: |
  La pirámide siempre tiene un tercio del volumen del prisma equivalente.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "comparacion"]

variables:
  area1: random(10, 40)
  h1: random(3, 15)
  area2: random(10, 40)
  h2: random(3, 15)

restricciones:
  - (area1 * h1) != (area2 * h2)

respuesta: (area1 * h1) > (area2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen una pirámide con base de {area1} cm² y altura {h1} cm, que otra con base de {area2} cm² y altura {h2} cm?"

pasos:
  - "Volumen 1: ({area1} × {h1}) ÷ 3 = {(area1 * h1) / 3} cm³. Volumen 2: ({area2} × {h2}) ÷ 3 = {(area2 * h2) / 3} cm³."

explicacion: |
  Como ambas se dividen por el mismo 3, comparar los volúmenes finales es
  lo mismo que comparar área × altura de cada una.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "orden"]

tipo: ordenar
enunciado: "Ordená estas pirámides de menor a mayor volumen: base 20 cm² y altura 6 cm; base 18 cm² y altura 9 cm; base 24 cm² y altura 3 cm; base 12 cm² y altura 15 cm."
opciones_explicitas:
  - "Base 18 cm² y altura 9 cm"
  - "Base 20 cm² y altura 6 cm"
  - "Base 24 cm² y altura 3 cm"
  - "Base 12 cm² y altura 15 cm"
respuesta_orden:
  - "Base 24 cm² y altura 3 cm"
  - "Base 20 cm² y altura 6 cm"
  - "Base 18 cm² y altura 9 cm"
  - "Base 12 cm² y altura 15 cm"

pasos:
  - "Volúmenes (÷3): 20×6÷3=40; 18×9÷3=54; 24×3÷3=24; 12×15÷3=60."

explicacion: |
  Se calcula cada volumen (área × altura ÷ 3) antes de poder ordenarlos:
  24 < 40 < 54 < 60.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "avanzado"
  tags: ["piramide", "prisma", "problema"]

variables:
  l: random(4, 12)
  altura: random(4, 12)

respuesta: ((l * l) * altura) - (((l * l) * altura) / 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Se talla una pirámide de base cuadrada de {l} cm de lado y {altura} cm de altura a partir de un bloque prismático de la misma base y altura. ¿Cuántos cm³ de material se descartan (el volumen del prisma menos el de la pirámide)?"

pasos:
  - "Prisma: {l}×{l}×{altura} = {(l * l) * altura} cm³. Pirámide: {(l * l) * altura} ÷ 3 = {((l * l) * altura) / 3} cm³. Diferencia: {((l * l) * altura) - (((l * l) * altura) / 3)} cm³."

explicacion: |
  Como la pirámide es un tercio del prisma, se descartan los otros dos
  tercios.
```

```
metadata:
  materia: "matematicas"
  tema: "piramides"
  nivel: "basico"
  tags: ["piramide", "prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Tanto el prisma como la pirámide calculan su volumen a partir del área de la base y la altura — la única diferencia es que la pirámide divide ese producto por 3."

explicacion: |
  Es el mismo patrón visto en `../prismas/`, con un factor extra por
  tener una sola base en vez de dos.
```

## Sección: cuerpos-redondos-y-poliedros/prismas (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

enunciado: "¿Qué es un prisma?"
tipo: mc
opciones_explicitas:
  - "Un poliedro con dos bases poligonales congruentes y paralelas, unidas por caras laterales rectangulares"
  - "Un cuerpo con una sola base y un vértice en la punta"
  - "Un cuerpo redondo sin caras planas"
respuesta: "Un poliedro con dos bases poligonales congruentes y paralelas, unidas por caras laterales rectangulares"

explicacion: |
  Las dos bases son iguales entre sí y quedan paralelas; los lados que
  las conectan son rectángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un prisma, las dos bases son congruentes (iguales) y paralelas entre sí."

explicacion: |
  Es la condición que define a un prisma.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un prisma recto, las caras laterales son rectángulos."

explicacion: |
  Es lo que distingue a un prisma recto de uno oblicuo.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

enunciado: "¿Según qué se nombra un prisma (triangular, pentagonal, hexagonal...)?"
tipo: mc
opciones_explicitas:
  - "Según la forma de su base"
  - "Según la cantidad de caras laterales que tiene, sin importar la base"
  - "Según su color"
respuesta: "Según la forma de su base"

explicacion: |
  Un prisma triangular tiene base triangular, uno pentagonal tiene base
  pentagonal, y así.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula general del volumen de cualquier prisma recto?"
tipo: mc
opciones_explicitas:
  - "Área de la base × altura"
  - "Perímetro de la base × altura"
  - "Área de la base + altura"
respuesta: "Área de la base × altura"

explicacion: |
  Sin importar la forma de la base, el volumen siempre se calcula igual:
  área de la base por altura.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "volumen"]

variables:
  b: random(4, 20)
  h_base: random(2, 15)
  altura: random(3, 20)

respuesta: ((b * h_base) / 2) * altura
tipo: input
tolerancia_abs: 0.01

enunciado: "Un prisma tiene base triangular (base {b} cm, altura del triángulo {h_base} cm) y una altura de {altura} cm. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: ({b} × {h_base}) ÷ 2 = {(b * h_base) / 2} cm². Volumen: {(b * h_base) / 2} × {altura} = {((b * h_base) / 2) * altura} cm³."

explicacion: |
  Primero se calcula el área de la base triangular, y después se
  multiplica por la altura del prisma.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "volumen"]

variables:
  B: random(10, 25)
  b: random(3, 9)
  h_base: random(2, 12)
  altura: random(3, 15)

respuesta: (((B + b) * h_base) / 2) * altura
tipo: input
tolerancia_abs: 0.01

enunciado: "Un prisma tiene base trapezoidal (base mayor {B} cm, base menor {b} cm, altura del trapecio {h_base} cm) y una altura de {altura} cm. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: (({B} + {b}) × {h_base}) ÷ 2 = {((B + b) * h_base) / 2} cm². Volumen: {((B + b) * h_base) / 2} × {altura} = {(((B + b) * h_base) / 2) * altura} cm³."

explicacion: |
  Se aplica la fórmula del área del trapecio para la base, y después se
  multiplica por la altura del prisma.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "volumen"]

variables:
  l: random(3, 20)
  a: random(2, 15)
  h: random(2, 10)

respuesta: (l * a) * h
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma de base rectangular ({l} cm × {a} cm) tiene {h} cm de altura. ¿Cuál es su volumen?"

pasos:
  - "Área de la base: {l} × {a} = {l * a} cm². Volumen: {l * a} × {h} = {(l * a) * h} cm³."

explicacion: |
  Es el mismo caso ya visto en `../../volumen-y-capacidad/`: acá se
  llega al mismo resultado partiendo de la fórmula general (área de la
  base × altura).
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "volumen"]

variables:
  area_base: random(10, 60)
  altura: random(2, 20)
  volumen: area_base * altura

respuesta: altura
tipo: input
tolerancia_abs: 0.01

enunciado: "Un prisma tiene {volumen} cm³ de volumen y su base mide {area_base} cm² de área. ¿Cuánto mide su altura?"

pasos:
  - "{volumen} ÷ {area_base} = {volumen / area_base} cm"

explicacion: |
  Se despeja la altura dividiendo el volumen por el área de la base.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "volumen"]

variables:
  area_base: random(10, 60)
  altura: random(2, 20)
  volumen: area_base * altura

respuesta: area_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Un prisma tiene {volumen} cm³ de volumen y {altura} cm de altura. ¿Cuál es el área de su base?"

pasos:
  - "{volumen} ÷ {altura} = {volumen / altura} cm²"

explicacion: |
  Se despeja el área de la base dividiendo el volumen por la altura.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "elementos"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas caras laterales tiene un prisma de base triangular?"

explicacion: |
  Un prisma tiene tantas caras laterales como lados tiene su base: el
  triángulo tiene 3 lados.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "elementos"]

respuesta: 5
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas caras laterales tiene un prisma de base pentagonal (5 lados)?"

explicacion: |
  Tantas caras laterales como lados tiene la base.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "elementos"]

variables:
  n: random(3, 8)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma tiene una base con {n} lados. ¿Cuántos vértices tiene el prisma en total (sumando las dos bases)?"

explicacion: |
  Cada base aporta {n} vértices: 2 × {n} = {2 * n}.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "elementos"]

variables:
  n: random(3, 8)

respuesta: 3 * n
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma tiene una base con {n} lados. ¿Cuántas aristas tiene en total (las de las dos bases más las laterales)?"

pasos:
  - "{n} aristas de una base + {n} de la otra + {n} laterales = {3 * n}"

explicacion: |
  n aristas en cada base (2n) más n aristas laterales que conectan una
  base con la otra: 3n en total.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "elementos"]

variables:
  n: random(3, 8)

respuesta: n + 2
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma tiene una base con {n} lados. ¿Cuántas caras tiene en total (las 2 bases más las laterales)?"

explicacion: |
  {n} caras laterales más las 2 bases: {n} + 2 = {n + 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "euler"]

variables:
  n: random(3, 8)
  vertices: 2 * n
  aristas: 3 * n
  caras: n + 2

respuesta: verdadero
tipo: vf

enunciado: "Para un prisma con base de {n} lados ({vertices} vértices, {aristas} aristas, {caras} caras), ¿se cumple que Vértices − Aristas + Caras = 2?"

pasos:
  - "{vertices} − {aristas} + {caras} = {vertices - aristas + caras}"

explicacion: |
  Es la fórmula de Euler para poliedros convexos: se cumple siempre en un
  prisma, sin importar la cantidad de lados de la base.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El cubo es un caso particular de prisma, con base cuadrada y altura igual al lado de la base."

explicacion: |
  Le aplica exactamente la misma fórmula general (área de la base ×
  altura), sólo que con una base muy simple.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Un prisma tiene una sola base; el resto de las caras son laterales."

explicacion: |
  Un prisma tiene DOS bases (congruentes y paralelas), no una sola —
  tener una sola base es otra figura (la pirámide, ver
  `../piramides/`).
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "capacidad", "problema"]

variables:
  b: random(4, 10)
  h_base: random(3, 8)
  altura: random(10, 20)

respuesta: (((b * h_base) / 2) * altura) / 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Un envase con forma de prisma triangular tiene base de {b} cm y altura de base {h_base} cm, y {altura} cm de alto. ¿Cuántos litros de líquido puede contener?"

pasos:
  - "Volumen: (({b} × {h_base}) ÷ 2) × {altura} = {((b * h_base) / 2) * altura} cm³. En litros: {((b * h_base) / 2) * altura} ÷ 1000 = {(((b * h_base) / 2) * altura) / 1000}."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros (1000 cm³ = 1
  litro), igual que en `../../volumen-y-capacidad/`.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "comparacion"]

variables:
  area1: random(10, 40)
  h1: random(2, 15)
  area2: random(10, 40)
  h2: random(2, 15)

restricciones:
  - (area1 * h1) != (area2 * h2)

respuesta: (area1 * h1) > (area2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen un prisma con base de {area1} cm² y altura {h1} cm, que otro con base de {area2} cm² y altura {h2} cm?"

pasos:
  - "Volumen 1: {area1} × {h1} = {area1 * h1} cm³. Volumen 2: {area2} × {h2} = {area2 * h2} cm³."

explicacion: |
  Se compara el producto área de la base × altura de cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

enunciado: "¿Cómo se llama un prisma cuya base es un hexágono?"
tipo: mc
opciones_explicitas:
  - "Prisma hexagonal"
  - "Prisma triangular"
  - "Hexaedro"
respuesta: "Prisma hexagonal"

explicacion: |
  Se nombra según la forma de la base: hexágono → prisma hexagonal.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "completar"]

tipo: completar
enunciado: "Completá: el volumen de cualquier prisma recto es el área de la ___ multiplicada por la altura."
respuestas_validas:
  - "base"

explicacion: |
  Es la fórmula general, sin importar la forma de la base.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "intermedio"
  tags: ["prisma", "completar"]

variables:
  n: random(3, 9)

tipo: completar
enunciado: "Completá: un prisma con base de {n} lados tiene ___ caras laterales."
respuestas_validas:
  - n

explicacion: |
  Tantas caras laterales como lados tiene la base.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "orden"]

tipo: ordenar
enunciado: "Ordená estos prismas de menor a mayor volumen: base 20 cm² y altura 5 cm; base 15 cm² y altura 10 cm; base 8 cm² y altura 12 cm; base 30 cm² y altura 3 cm."
opciones_explicitas:
  - "Base 15 cm² y altura 10 cm"
  - "Base 30 cm² y altura 3 cm"
  - "Base 8 cm² y altura 12 cm"
  - "Base 20 cm² y altura 5 cm"
respuesta_orden:
  - "Base 8 cm² y altura 12 cm"
  - "Base 20 cm² y altura 5 cm"
  - "Base 30 cm² y altura 3 cm"
  - "Base 15 cm² y altura 10 cm"

pasos:
  - "Volúmenes: 20×5=100 cm³; 15×10=150 cm³; 8×12=96 cm³; 30×3=90 cm³."

explicacion: |
  Se calcula cada volumen (área de la base × altura) antes de poder
  ordenarlos: 90 < 96 < 100 < 150.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "avanzado"
  tags: ["prisma", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En TODOS los prismas, sin excepción, las caras laterales son rectángulos perpendiculares a las bases."

explicacion: |
  Eso sólo es cierto en un prisma RECTO. En un prisma oblicuo las caras
  laterales están inclinadas — este módulo trabaja siempre con prismas
  rectos, que son el caso que se usa en la práctica.
```

```
metadata:
  materia: "matematicas"
  tema: "prismas"
  nivel: "basico"
  tags: ["prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para calcular el volumen de cualquier prisma, lo único que cambia según la forma de la base es la fórmula usada para calcular el área de esa base."

explicacion: |
  La estructura del cálculo (área de la base × altura) es siempre la
  misma; lo que cambia es cómo se calcula esa área según la forma.
```
