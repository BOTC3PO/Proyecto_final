# Geografia — regiones naturales de argentina (cuestionario, 24 preguntas VBLang)

> Tema: `geografia/regiones-naturales-de-argentina`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  n: random(1, 5)

respuesta: "regiones naturales"
tipo: completar

enunciado: "Los geógrafos dividen el territorio argentino en {n} grandes áreas basadas en características físicas similares como clima y relieve. ¿Cómo se llaman estas áreas?"

explicacion: |
  Estas áreas se denominan 'regiones naturales'. No son límites políticos, sino zonas con características físicas homogéneas (suelo, clima, flora, fauna).
```

### 2 — pregunta 2

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["clasificacion", "regiones"]

variables:
  n: random(1, 5)

respuesta: "cinco"
tipo: input

enunciado: "Tradicionalmente, se reconocen {n} grandes regiones naturales en Argentina."

explicacion: |
  Las cinco regiones tradicionales son: NOA, NEA, Región Pampeana, Cuyo y Patagonia.
```

### 3 — pregunta 3

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["noa", "relieve", "clima"]

variables:
  p: uno_de(["Jujuy", "Salta", "Tucumán", "Catamarca"])

respuesta: verdadero
tipo: vf

enunciado: "La provincia de {p} se encuentra dentro de la región del Noroeste (NOA), caracterizada por grandes contrastes entre picos andinos y valles áridos."

explicacion: |
  El NOA abarca provincias como Jujuy, Salta, Tucumán y Catamarca. Presenta una gran diversidad climática y de relieve.
```

### 4 — pregunta 4

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["nea", "clima", "humedad"]

variables:
  n: random(1, 2)

respuesta: "subtropical húmedo"
tipo: completar

enunciado: "El NEA (Noreste Argentino) tiene un clima predominantemente {n}."

explicacion: |
  El NEA es la región más húmeda y selvática del país, con un clima subtropical y lluvias abundantes durante todo el año.
```

### 5 — pregunta 5

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["nea", "biodiversidad", "selva"]

variables:
  n: random(1, 3)

respuesta: "Misiones"
tipo: input

enunciado: "La Selva Paranaense, una gran reserva de biodiversidad, se extiende principalmente en la provincia de {n}."

explicacion: |
  La Selva Paranaense es característica del NEA, especialmente en la provincia de Misiones, aunque también se encuentra en partes de Corrientes y Entre Ríos.
```

### 6 — pregunta 6

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["pampeana", "suelo", "agricultura"]

variables:
  n: random(1, 2)

respuesta: "fértil"
tipo: completar

enunciado: "La Región Pampeana se destaca por tener un suelo profundo y {n}."

explicacion: |
  La fertilidad del suelo pampeano es su principal ventaja para la agricultura intensiva y la ganadería.
```

### 7 — pregunta 7

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["pampeana", "clima"]

variables:
  n: random(1, 2)

respuesta: "templado"
tipo: input

enunciado: "El clima de la Región Pampeana es de tipo {n}, con veranos calurosos e inviernos suaves."

explicacion: |
  La Región Pampeana tiene un clima templado, lo que favorece el cultivo de granos como trigo, maíz y soja.
```

### 8 — pregunta 8

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["nea", "provincias"]

variables:
  p: uno_de(["Misiones", "Corrientes", "Entre Ríos", "Chaco"])

respuesta: verdadero
tipo: vf

enunciado: "La provincia de {p} forma parte de la región del Noreste (NEA)."

explicacion: |
  El NEA incluye Misiones, Corrientes, Entre Ríos y Chaco.
```

### 9 — pregunta 9

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["cuyo", "relieve", "andino"]

variables:
  n: random(1, 2)

respuesta: "árido"
tipo: completar

enunciado: "Cuyo es una región de relieve montañoso y clima predominantemente {n}."

explicacion: |
  Cuyo se encuentra al oeste, con influencia de la Cordillera de los Andes. Es una zona árida donde la irrigación es clave para la agricultura (viñedos).
```

### 10 — pregunta 10

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["patagonia", "clima", "frío"]

variables:
  n: random(1, 2)

respuesta: "frío"
tipo: input

enunciado: "La Patagonia se caracteriza por un clima predominantemente {n} y seco."

explicacion: |
  La Patagonia es la región más extensa del sur, con climas fríos y secos, y paisajes que van desde estepas hasta glaciares.
```

### 11 — pregunta 11

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["nea", "desafios", "inundaciones"]

variables:
  n: random(1, 2)

respuesta: "inundaciones"
tipo: input

enunciado: "En el NEA, la abundancia de agua y lluvias puede causar {n} estacionales que afectan a ciudades ribereñas."

explicacion: |
  Las inundaciones son un desafío común en el NEA debido al clima húmedo y la proximidad a grandes ríos como el Paraná y el Uruguay.
```

### 12 — pregunta 12

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["pampeana", "ubicacion"]

variables:
  n: random(1, 2)

respuesta: "Buenos Aires"
tipo: input

enunciado: "La Región Pampeana se extiende desde el norte de la provincia de {n} hasta el sur de Santa Fe y Córdoba."

explicacion: |
  El corazón productivo de Argentina abarca el norte de Buenos Aires, el sur de Santa Fe y el norte de Córdoba.
```

### 13 — pregunta 13

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["cuyo", "produccion", "vino"]

variables:
  n: random(1, 2)

respuesta: "viñedos"
tipo: completar

enunciado: "En Cuyo, el clima árido y la irrigación permiten el desarrollo de {n} de altura."

explicacion: |
  Cuyo es famoso mundialmente por sus viñedos, especialmente en provincias como Mendoza y San Juan.
```

### 14 — pregunta 14

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["patagonia", "extencion"]

variables:
  n: random(1, 2)

respuesta: "extensa"
tipo: input

enunciado: "La Patagonia es la región más {n} de Argentina, ubicada en el sur del país."

explicacion: |
  La Patagonia ocupa una vasta porción del sur argentino, desde la cordillera hasta el océano Atlántico.
```

### 15 — pregunta 15

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["noa", "contrastes"]

variables:
  n: random(1, 2)

respuesta: "contrastes"
tipo: completar

enunciado: "El NOA es conocido por sus grandes {n} entre los picos andinos y las llanuras chaqueñas."

explicacion: |
  La diversidad geográfica del NOA es extrema, pasando de nevados a valles cálidos y áridos.
```

### 16 — pregunta 16

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["pampeana", "economia"]

variables:
  n: random(1, 2)

respuesta: "motor"
tipo: input

enunciado: "Históricamente, la Región Pampeana ha sido el {n} de la economía argentina."

explicacion: |
  Gracias a su suelo fértil, la Región Pampeana ha sido clave para la exportación de granos y carnes.
```

### 17 — pregunta 17

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["cuyo", "provincias"]

variables:
  p: uno_de(["Mendoza", "San Juan", "San Luis"])

respuesta: verdadero
tipo: vf

enunciado: "La provincia de {p} pertenece a la región de Cuyo."

explicacion: |
  Cuyo está compuesto por Mendoza, San Juan y San Luis.
```

### 18 — pregunta 18

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["patagonia", "fauna"]

variables:
  n: random(1, 2)

respuesta: "glaciares"
tipo: completar

enunciado: "Además de estepas, la Patagonia es famosa por sus paisajes de {n} y fiordos."

explicacion: |
  La Patagonia alberga glaciares importantes como el Perito Moreno, fruto de su clima frío y precipitaciones.
```

### 19 — pregunta 19

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["noa", "clima", "altitud"]

variables:
  n: random(1, 2)

respuesta: "frío seco"
tipo: completar

enunciado: "En las cumbres del NOA, el clima es {n}."

explicacion: |
  A gran altitud en el NOA, las temperaturas bajan considerablemente y la humedad es escasa.
```

### 20 — pregunta 20

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["nea", "lluvias"]

variables:
  n: random(1, 2)

respuesta: "abundantes"
tipo: input

enunciado: "En el NEA, las lluvias son {n} durante todo el año."

explicacion: |
  La humedad constante es una marca distintiva del NEA, diferenciándolo de las regiones áridas del oeste.
```

### 21 — pregunta 21

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["pampeana", "clima", "invierno"]

variables:
  n: random(1, 2)

respuesta: "suaves"
tipo: completar

enunciado: "En la Región Pampeana, los inviernos son {n}."

explicacion: |
  El clima templado de la región implica inviernos no extremadamente fríos, a diferencia de la Patagonia.
```

### 22 — pregunta 22

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["cuyo", "agricultura", "agua"]

variables:
  n: random(1, 2)

respuesta: "irrigación"
tipo: input

enunciado: "En Cuyo, debido al clima árido, la agricultura depende de la {n}."

explicacion: |
  Sin sistemas de riego, la agricultura en Cuyo sería imposible debido a la baja precipitación.
```

### 23 — pregunta 23

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["patagonia", "ubicacion"]

variables:
  n: random(1, 2)

respuesta: "sur"
tipo: input

enunciado: "La Patagonia se encuentra en el {n} de Argentina."

explicacion: |
  Es la región austral del país, extendiéndose hasta el fin del mundo.
```

### 24 — pregunta 24

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["noa", "valles"]

variables:
  n: random(1, 2)

respuesta: "interandinos"
tipo: completar

enunciado: "El NOA incluye valles {n} áridos entre las montañas andinas."

explicacion: |
  Los valles interandinos son zonas de transición con climas cálidos pero secos, ideales para ciertos cultivos.
```
