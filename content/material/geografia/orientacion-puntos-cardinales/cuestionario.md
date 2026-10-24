# Geografía — Orientación y puntos cardinales (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Los cuatro puntos cardinales

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "vocabulario"]

enunciado: "¿Cuáles son los cuatro puntos cardinales?"
tipo: mc
opciones_explicitas:
  - "Norte, Sur, Este, Oeste"
  - "Arriba, Abajo, Izquierda, Derecha"
  - "Norte, Sur, Noreste, Sudoeste"
respuesta: "Norte, Sur, Este, Oeste"

explicacion: |
  Son los cuatro puntos fijos de referencia, a diferencia de
  izquierda/derecha que dependen de hacia dónde mira el observador.
```

### 2 — Punto opuesto al norte

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "opuestos"]

enunciado: "¿Cuál es el punto cardinal opuesto al norte?"
tipo: mc
opciones_explicitas:
  - "Sur"
  - "Este"
  - "Oeste"
respuesta: "Sur"

explicacion: |
  Norte y sur son opuestos entre sí, igual que este y oeste.
```

### 3 — Punto opuesto al este

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "opuestos"]

enunciado: "¿Cuál es el punto cardinal opuesto al este?"
tipo: mc
opciones_explicitas:
  - "Oeste"
  - "Norte"
  - "Sur"
respuesta: "Oeste"

explicacion: |
  El este es por donde sale el Sol; el oeste, por donde se pone.
```

### 4 — Por dónde sale el Sol

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "sol"]

enunciado: "¿Por qué punto cardinal sale el Sol?"
tipo: mc
opciones_explicitas:
  - "Este"
  - "Oeste"
  - "Norte"
respuesta: "Este"

explicacion: |
  El Sol sale por el este y se pone por el oeste, en cualquier
  hemisferio.
```

### 5 — Por dónde se pone el Sol

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "sol"]

enunciado: "¿Por qué punto cardinal se pone el Sol?"
tipo: mc
opciones_explicitas:
  - "Oeste"
  - "Este"
  - "Sur"
respuesta: "Oeste"

explicacion: |
  Se pone por el oeste, opuesto al este por donde sale.
```

### 6 — Punto intermedio entre norte y este

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "colaterales"]

enunciado: "¿Cómo se llama el punto intermedio entre el norte y el este?"
tipo: mc
opciones_explicitas:
  - "Noreste"
  - "Sudeste"
  - "Noroeste"
respuesta: "Noreste"

explicacion: |
  Se nombra combinando los dos cardinales que rodean al punto
  intermedio: Norte + Este = Noreste.
```

### 7 — Punto intermedio entre sur y este

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "colaterales"]

enunciado: "¿Cómo se llama el punto intermedio entre el sur y el este?"
tipo: mc
opciones_explicitas:
  - "Sudeste"
  - "Noreste"
  - "Sudoeste"
respuesta: "Sudeste"

explicacion: |
  Sur + Este = Sudeste.
```

### 8 — Punto intermedio entre sur y oeste

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "colaterales"]

enunciado: "¿Cómo se llama el punto intermedio entre el sur y el oeste?"
tipo: mc
opciones_explicitas:
  - "Sudoeste"
  - "Noroeste"
  - "Sudeste"
respuesta: "Sudoeste"

explicacion: |
  Sur + Oeste = Sudoeste.
```

### 9 — Punto intermedio entre norte y oeste

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "colaterales"]

enunciado: "¿Cómo se llama el punto intermedio entre el norte y el oeste?"
tipo: mc
opciones_explicitas:
  - "Noroeste"
  - "Noreste"
  - "Sudoeste"
respuesta: "Noroeste"

explicacion: |
  Norte + Oeste = Noroeste.
```

### 10 — Cantidad de puntos de la rosa de los vientos

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "rosa_de_los_vientos"]

enunciado: "Contando los 4 cardinales y los 4 intermedios, ¿cuántos puntos tiene la rosa de los vientos básica?"
tipo: input
respuesta: 8

explicacion: |
  4 cardinales (N, S, E, O) + 4 colaterales (NE, SE, SO, NO) = 8 puntos.
```

### 11 — Grados entre dos cardinales adyacentes

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "angulos"]

enunciado: "¿Cuántos grados hay entre el norte y el este, medidos en la rosa de los vientos?"
tipo: input
respuesta: 90

explicacion: |
  Los 4 cardinales dividen el círculo completo (360°) en 4 partes
  iguales de 90° cada una.
```

### 12 — Grados entre norte y sur

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "angulos"]

enunciado: "¿Cuántos grados hay entre el norte y su opuesto, el sur?"
tipo: input
respuesta: 180

explicacion: |
  Dos puntos opuestos están separados por media vuelta completa: 180°.
```

### 13 — Grados de un giro completo

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "angulos"]

enunciado: "¿Cuántos grados tiene un giro completo (los 8 puntos de la rosa de los vientos, ida y vuelta al norte)?"
tipo: input
respuesta: 360

explicacion: |
  Un círculo completo siempre tiene 360°.
```

### 14 — Grados entre dos colaterales consecutivos

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "avanzado"
  tags: ["orientacion", "angulos"]

variables:
  total_puntos: 8
  grados_totales: 360

respuesta: grados_totales / total_puntos
tipo: input

enunciado: "Si la rosa de los vientos de 8 puntos divide el círculo en partes iguales, ¿cuántos grados separan a cada punto del siguiente (ej.: de norte a noreste)?"

pasos:
  - "{grados_totales}° ÷ {total_puntos} puntos"

explicacion: |
  360° repartidos en 8 puntos iguales dan 45° entre cada punto y el
  siguiente.
```

### 15 — Verdadero o falso: la aguja de la brújula

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "brujula"]

enunciado: "La aguja imantada de una brújula se alinea sola con el campo magnético terrestre y señala el norte."
tipo: vf
respuesta: verdadero

explicacion: |
  Es el principio físico detrás de toda brújula: la aguja es un imán
  chico que reacciona al campo magnético de la Tierra.
```

### 16 — Verdadero o falso: izquierda y derecha son absolutos

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "relativo_absoluto"]

enunciado: "\"Izquierda\" y \"derecha\" son referencias absolutas, iguales para cualquier persona sin importar hacia dónde mire."
tipo: vf
respuesta: falso

explicacion: |
  Son referencias relativas: dependen de hacia dónde mira quien habla,
  y cambian si esa persona se da vuelta. Los cardinales, en cambio, son
  absolutos.
```

### 17 — Verdadero o falso: el norte cambia según quien lo señale

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "relativo_absoluto"]

enunciado: "El norte geográfico es el mismo punto fijo sin importar hacia dónde mire la persona que lo señala."
tipo: vf
respuesta: verdadero

explicacion: |
  Por eso los cardinales son la referencia usada en mapas y
  navegación: no dependen del observador.
```

### 18 — Al mediodía en el hemisferio sur

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "sol", "hemisferios"]

enunciado: "En Argentina (hemisferio sur), al mediodía el Sol queda aproximadamente hacia el..."
tipo: mc
opciones_explicitas:
  - "Norte"
  - "Sur"
  - "Este"
respuesta: "Norte"

explicacion: |
  En el hemisferio sur, al mediodía el Sol queda hacia el norte
  (al revés que en el hemisferio norte, donde queda hacia el sur).
```

### 19 — Qué marca la rosa de los vientos en un mapa

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "mapas"]

enunciado: "¿Para qué sirve la rosa de los vientos dibujada en un mapa?"
tipo: mc
opciones_explicitas:
  - "Para indicar hacia dónde apunta el norte del mapa"
  - "Para indicar la escala del mapa"
  - "Para indicar la fecha en que se hizo el mapa"
respuesta: "Para indicar hacia dónde apunta el norte del mapa"

explicacion: |
  Sin esa referencia, no se puede relacionar lo dibujado con el
  territorio real: un mapa girado es ilegible aunque tenga toda la
  información correcta.
```

### 20 — Estrella para ubicar el sur

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "hemisferios"]

enunciado: "¿Qué referencia estelar se usa en el hemisferio sur para aproximar el sur de noche?"
tipo: mc
opciones_explicitas:
  - "La Cruz del Sur"
  - "La Estrella Polar"
  - "La Osa Mayor"
respuesta: "La Cruz del Sur"

explicacion: |
  La Estrella Polar es la referencia del hemisferio norte; en el sur
  no hay una estrella tan cercana al polo, se usa la Cruz del Sur.
```

### 21 — Ordenar los 8 puntos de la rosa de los vientos

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "avanzado"
  tags: ["orientacion", "rosa_de_los_vientos"]

enunciado: "Ordená estos 4 puntos empezando desde el norte y avanzando en sentido horario: Este, Norte, Oeste, Sur."
tipo: ordenar
opciones_explicitas:
  - "Norte"
  - "Este"
  - "Sur"
  - "Oeste"
respuesta_orden: ["Norte", "Este", "Sur", "Oeste"]

explicacion: |
  En sentido horario desde el norte: Norte → Este → Sur → Oeste →
  vuelta al Norte.
```

### 22 — Cuadrante donde cae el noreste

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "colaterales"]

enunciado: "El noreste (NE) es el punto intermedio entre..."
tipo: mc
opciones_explicitas:
  - "Norte y Este"
  - "Norte y Oeste"
  - "Sur y Este"
respuesta: "Norte y Este"

explicacion: |
  El nombre combina los dos cardinales entre los que está: Norte y
  Este.
```
