# Geografía — Escala de un mapa (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Fórmula: `distancia_real =
> distancia_en_el_mapa × denominador_de_la_escala` (misma unidad, luego
> se convierte). 1 km = 100.000 cm.

---

### 1 — Qué es la escala de un mapa

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "basico"
  tags: ["escala_mapa", "vocabulario"]

enunciado: "¿Qué es la escala de un mapa?"
tipo: mc
opciones_explicitas:
  - "La razón entre una distancia medida en el mapa y la distancia real que representa"
  - "El tamaño físico del papel donde está impreso el mapa"
  - "La cantidad de colores que usa el mapa"
respuesta: "La razón entre una distancia medida en el mapa y la distancia real que representa"

explicacion: |
  Dice exactamente cuánto se redujo la realidad para representarla en
  el mapa.
```

### 2 — Qué significa 1:100.000

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "basico"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una escala de 1:100.000 significa que 1 unidad de medida en el mapa equivale a 100.000 de esas mismas unidades en la realidad."

explicacion: |
  Si la unidad es el centímetro, 1 cm en el mapa representa 100.000 cm
  reales (1 km).
```

### 3 — Calcular la distancia real en km

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "calculo"]

variables:
  escala: uno_de([10000, 25000, 50000, 100000, 250000, 500000])
  distancia_mapa_cm: random(1, 20)

respuesta: (distancia_mapa_cm * escala) / 100000
tipo: input
tolerancia_abs: 0.05

enunciado: "En un mapa a escala 1:{escala}, dos ciudades están a {distancia_mapa_cm} cm de distancia. ¿Cuál es la distancia real, en km?"

pasos:
  - "Distancia real en cm: {distancia_mapa_cm} × {escala} = {distancia_mapa_cm * escala}"
  - "En km: {distancia_mapa_cm * escala} ÷ 100.000"

explicacion: |
  Se multiplica la distancia del mapa por el denominador de la escala,
  y se convierte de centímetros a kilómetros.
```

### 4 — Calcular la distancia real en metros

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "calculo"]

variables:
  escala: uno_de([1000, 2000, 5000, 10000, 25000])
  distancia_mapa_cm: random(1, 20)

respuesta: (distancia_mapa_cm * escala) / 100
tipo: input
tolerancia_abs: 0.5

enunciado: "En un mapa a escala 1:{escala}, dos puntos están a {distancia_mapa_cm} cm de distancia. ¿Cuál es la distancia real, en metros?"

pasos:
  - "Distancia real en cm: {distancia_mapa_cm} × {escala} = {distancia_mapa_cm * escala}"
  - "En metros: {distancia_mapa_cm * escala} ÷ 100"

explicacion: |
  1 metro tiene 100 centímetros, así que se divide por 100 para pasar de
  cm a m.
```

### 5 — Despejar la distancia en el mapa

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "calculo"]

variables:
  escala: uno_de([10000, 25000, 50000, 100000, 250000, 500000])
  distancia_real_km: random(1, 50)

respuesta: (distancia_real_km * 100000) / escala
tipo: input
tolerancia_abs: 0.05

enunciado: "En un mapa a escala 1:{escala}, ¿a cuántos cm de distancia deberían estar dibujadas dos ciudades que en la realidad están a {distancia_real_km} km?"

pasos:
  - "Distancia real en cm: {distancia_real_km} × 100.000 = {distancia_real_km * 100000}"
  - "En el mapa: {distancia_real_km * 100000} ÷ {escala}"

explicacion: |
  Se despeja la distancia del mapa dividiendo la distancia real (en cm)
  por el denominador de la escala.
```

### 6 — Despejar el denominador de la escala

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "calculo"]

variables:
  escala: uno_de([10000, 25000, 50000, 100000, 250000, 500000])
  distancia_mapa_cm: random(1, 20)
  distancia_real_km: (distancia_mapa_cm * escala) / 100000

respuesta: escala
tipo: input
tolerancia_abs: 1

enunciado: "En un mapa, dos ciudades están a {distancia_mapa_cm} cm de distancia, y en la realidad esas ciudades están a {redondear(distancia_real_km, 2)} km. ¿Cuál es el denominador de la escala de ese mapa (el número después de \"1:\")?"

explicacion: |
  Se despeja el denominador de la fórmula de la escala, convirtiendo
  primero la distancia real a centímetros.
```

### 7 — La escala gráfica escala junto con el mapa

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un mapa se agranda o se achica (por ejemplo, al fotocopiarlo), la escala gráfica (la barra dibujada) sigue siendo correcta, porque se agranda o achica junto con el dibujo."

explicacion: |
  Es la ventaja de la escala gráfica frente a la numérica.
```

### 8 — La escala numérica deja de servir si el mapa cambia de tamaño

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un mapa se imprime o se muestra en un tamaño distinto al original, la escala numérica (\"1:50.000\") escrita deja de ser válida."

explicacion: |
  Ese número asumía el tamaño original del mapa; si el mapa cambia de
  tamaño, la relación real entre el mapa y el terreno ya no es esa.
```

### 9 — Denominador chico es escala grande

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una escala 1:1.000 (denominador chico) se llama escala GRANDE, porque representa más detalle en una zona más chica — aunque el número 1.000 sea menor que el de otras escalas."

explicacion: |
  \"Grande\" se refiere a qué tan grande es la fracción 1/1.000 en sí,
  no al tamaño del número del denominador.
```

### 10 — Denominador grande es escala chica

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una escala 1:1.000.000 (denominador grande) se llama escala CHICA, porque representa menos detalle en una zona mucho más grande."

explicacion: |
  Es el matiz contraintuitivo del tema: más grande el número, más chica
  se llama la escala.
```

### 11 — Cuál escala es "grande"

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

enunciado: "¿Cuál de estas dos escalas es la \"escala grande\": 1:5.000 o 1:500.000?"
tipo: mc
opciones_explicitas:
  - "1:5.000"
  - "1:500.000"
  - "Las dos son igual de grandes"
respuesta: "1:5.000"

explicacion: |
  El denominador más chico corresponde a la escala más grande (más
  detalle, área más reducida).
```

### 12 — El plano de un barrio usa escala grande

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El plano de un barrio, con mucho detalle de sus calles, usa una escala grande (denominador chico)."

explicacion: |
  Mucho detalle en una zona chica es, justamente, lo que caracteriza a
  una escala grande.
```

### 13 — El mapa de un país usa escala chica

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mapa que muestra un país entero, con poco detalle de cada ciudad, usa una escala chica (denominador grande)."

explicacion: |
  Poco detalle en una zona grande es lo que caracteriza a una escala
  chica.
```

### 14 — Comparar distancias reales a igual medida en el mapa

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "comparacion"]

variables:
  distancia_mapa_cm: random(2, 10)
  escala_a: uno_de([10000, 25000])
  escala_b: uno_de([250000, 500000])

respuesta: (((distancia_mapa_cm * escala_b) / 100000) > ((distancia_mapa_cm * escala_a) / 100000))
tipo: vf

enunciado: "Dos mapas distintos miden la misma distancia de {distancia_mapa_cm} cm entre dos puntos. Mapa A tiene escala 1:{escala_a}. Mapa B tiene escala 1:{escala_b}. ¿La distancia real que representa el Mapa B es mayor que la del Mapa A?"

explicacion: |
  A igual medida en el mapa, la escala con denominador más grande
  representa una distancia real mayor.
```

### 15 — Comparar cuánto hay que dibujar para la misma distancia real

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "comparacion"]

variables:
  distancia_real_km: random(5, 40)
  escala_a: uno_de([10000, 25000])
  escala_b: uno_de([250000, 500000])

respuesta: (((distancia_real_km * 100000) / escala_a) > ((distancia_real_km * 100000) / escala_b))
tipo: vf

enunciado: "Dos puntos están a {distancia_real_km} km de distancia real. Para representar esa misma distancia, ¿hace falta dibujar más centímetros en un mapa a escala 1:{escala_a} que en uno a escala 1:{escala_b}?"

explicacion: |
  Con un denominador más chico (escala más grande), la misma distancia
  real ocupa más espacio dibujado en el mapa.
```

### 16 — Ordenar escalas de menor a mayor detalle

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "basico"
  tags: ["escala_mapa", "orden"]

tipo: ordenar
enunciado: "Ordená estas escalas de menor a mayor nivel de detalle (de escala más chica a escala más grande)."
opciones_explicitas:
  - "1:10.000"
  - "1:1.000.000"
  - "1:100.000"
respuesta_orden: ["1:1.000.000", "1:100.000", "1:10.000"]

explicacion: |
  A menor denominador, mayor el nivel de detalle (escala más grande).
```

### 17 — Verificar un cálculo de escala (con error a veces)

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "verificacion"]

variables:
  escala: uno_de([10000, 25000, 50000, 100000, 250000])
  distancia_mapa_cm: random(1, 20)
  correcto: (distancia_mapa_cm * escala) / 100000
  error: uno_de([0, 0, 0, 2, -2])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.1)
tipo: vf

enunciado: "¿Está bien calculado esto? Mapa a escala 1:{escala}, distancia en el mapa {distancia_mapa_cm} cm, distancia real informada: {redondear(mostrado, 2)} km."

explicacion: |
  Se vuelve a calcular con la fórmula de la escala y se compara con el
  valor informado.
```

### 18 — Completar la distancia real en cm

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa"]

variables:
  escala: uno_de([10000, 25000, 50000, 100000])
  distancia_mapa_cm: random(1, 20)
  distancia_real_cm: distancia_mapa_cm * escala

tipo: completar
enunciado: "En un mapa a escala 1:{escala}, una distancia de {distancia_mapa_cm} cm representa una distancia real de ___ cm."
respuestas_validas:
  - distancia_real_cm

explicacion: |
  Se multiplica la distancia del mapa por el denominador de la escala.
```

### 19 — 1 cm en un mapa 1:100.000 es 1 km real

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "basico"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un mapa a escala 1:100.000, cada centímetro dibujado representa 1 kilómetro real."

explicacion: |
  100.000 cm equivalen exactamente a 1.000 metros, o sea, 1 km.
```

### 20 — Una escala de mapa no cambia sin importar el zoom digital

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "¿La escala numérica de un mapa impreso sigue siendo exactamente la misma si esa imagen se agranda al hacer zoom en una pantalla?"

explicacion: |
  Al agrandar la imagen, la relación entre lo dibujado y la realidad
  cambia — la escala numérica original deja de ser correcta, salvo que
  el mapa también tenga una escala gráfica que se agrande junto con la
  imagen.
```

### 21 — Elegir el mapa correcto según el uso

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

enunciado: "Para planificar una caminata dentro de un mismo barrio, ¿qué tipo de escala conviene usar?"
tipo: mc
opciones_explicitas:
  - "Una escala grande (denominador chico), con mucho detalle"
  - "Una escala chica (denominador grande), con poco detalle"
  - "No importa la escala para ese uso"
respuesta: "Una escala grande (denominador chico), con mucho detalle"

explicacion: |
  Cuanto más chica el área a recorrer, más conviene un mapa de escala
  grande, con más detalle.
```

### 22 — Escala de un mapa (cierre)

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "basico"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala de un mapa relaciona una distancia dibujada con la distancia real (distancia_real = distancia_mapa × denominador), y una escala \"grande\" (denominador chico) representa más detalle en menos área, al revés de lo que sugiere el tamaño del número."

explicacion: |
  Es la idea central de todo el tema.
```
