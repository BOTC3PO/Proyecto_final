# Salud — Dosis por peso corporal (cuestionario, 25 preguntas VBLang)

> Tema: `S2`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: muchas preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); varias
> preguntas con `respuesta:`/`respuestas_validas` calculadas con
> multiplicación en vivo (`peso * dosis_unitaria`), `respuestas_validas:
> [resultado]` envolviendo una variable (no un string), y un `tipo:
> input` (tipo no confirmado en el DSL) — todas normalizadas con el
> resultado precalculado como literal en la tabla; un lote entero
> (5 preguntas) sorteaba un escenario con `uno_de(...)` pero la
> `respuesta:` quedaba **fija** en un solo valor sin importar qué
> escenario salía (la mitad de las veces la "correcta" no
> correspondía al escenario mostrado) — recalculadas y corregidas
> las 5; una pregunta `tipo: vf` cuya `respuesta:` era la variable
> calculada en vez de `verdadero`/`falso` — corregida.

---

### 1 — El concepto de dosis relativa

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "basico"
  tags: ["farmacologia", "seguridad"]

enunciado: "Si se administra una dosis fija de un medicamento a una persona de 10 kg y a una de 100 kg, la persona de 10 kg recibirá una dosis relativa mucho ___ que la otra, lo que podría causar una intoxicación."

respuestas_validas:
  - "mayor"
  - "más alta"
respuesta: "mayor"
tipo: completar

explicacion: |
  La dosis debe ser proporcional al tamaño del cuerpo. Una dosis fija para un adulto es una sobredosis para un niño pequeño.
```

### 2 — Cálculo de dosis en un adulto

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["farmacologia", "metabolismo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[40, "400"], [70, "700"], [90, "900"]]

enunciado: "Un paciente pesa {datos[idx][0]} kg. Si la dosis recomendada es de 10 mg por cada kg de peso, la dosis total que debe recibir es de ___ mg."

respuestas_validas:
  - "400"
  - "700"
  - "900"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El cálculo es: peso (kg) × dosis (mg/kg). En este caso: {datos[idx][0]} × 10 = {datos[idx][1]} mg.
```

### 3 — El riesgo de la dosis fija

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "basico"
  tags: ["seguridad", "riesgos"]

enunciado: "Si un medicamento se administra siempre con la misma dosis sin considerar el peso, un paciente con un peso muy ___ podría sufrir efectos secundarios graves por exceso de fármaco."

respuestas_validas:
  - "bajo"
  - "pequeño"
respuesta: "bajo"
tipo: completar

explicacion: |
  A menor peso corporal, la concentración del medicamento en la sangre es mayor si la dosis no se ajusta, aumentando el riesgo de toxicidad.
```

### 4 — Cálculo de dosis pediátrica

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["pediatria", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[15, "75"], [25, "125"], [35, "175"]]

enunciado: "Un niño pesa {datos[idx][0]} kg. El médico indica una dosis de 5 mg/kg. La cantidad total de medicamento es de ___ mg."

respuestas_validas:
  - "75"
  - "125"
  - "175"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La dosis se calcula multiplicando el peso por la dosis por kilo: {datos[idx][0]} kg × 5 mg/kg = {datos[idx][1]} mg.
```

### 5 — Distribución del fármaco

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "avanzado"
  tags: ["fisiologia", "farmacocinética"]

enunciado: "El cuerpo procesa los medicamentos basándose en el volumen de distribución, el cual está estrechamente relacionado con la ___ corporal."

respuestas_validas:
  - "masa"
  - "masa corporal"
respuesta: "masa"
tipo: completar

explicacion: |
  A mayor masa corporal, mayor es el volumen de agua y tejido donde se distribuye el fármaco, requiriendo proporciones distintas para alcanzar la concentración terapéutica.
```

### 6 — Cálculo de dosis simple (60 kg)

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "basico"
  tags: ["farmacologia", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["10 mg/kg", "600"], ["15 mg/kg", "900"], ["20 mg/kg", "1200"]]

enunciado: "Un paciente debe recibir un medicamento con una dosis de {datos[idx][0]}. Si el paciente pesa 60 kg, ¿cuántos mg totales debe recibir?"

respuestas_validas:
  - "600"
  - "900"
  - "1200"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Para calcular la dosis total, multiplicamos la dosis recomendada por kg de peso por el peso total del paciente: 60 kg × {datos[idx][0]} = {datos[idx][1]} mg.
```

### 7 — Dosis para un niño (25 kg)

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "basico"
  tags: ["pediatria", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["5 mg/kg", "125"], ["8 mg/kg", "200"], ["12 mg/kg", "300"]]

enunciado: "Se prescribe un fármaco pediátrico a una dosis de {datos[idx][0]}. Si el niño pesa 25 kg, ¿cuál es la dosis total en mg?"

respuestas_validas:
  - "125"
  - "200"
  - "300"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La dosis total se obtiene multiplicando la dosis por unidad de peso por el peso corporal: 25 kg × {datos[idx][0]} = {datos[idx][1]} mg.
```

### 8 — Selección de dosis correcta (70 kg)

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["farmacologia", "mc"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["2 mg/kg", "140 mg"], ["5 mg/kg", "350 mg"], ["10 mg/kg", "700 mg"]]

enunciado: "Un adulto de 70 kg requiere una dosis de {datos[idx][0]}. ¿Cuál es la cantidad total a administrar?"

opciones_explicitas: ["140 mg", "350 mg", "700 mg"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Multiplicamos el peso por la dosis unitaria: 70 kg × {datos[idx][0]} = {datos[idx][1]}.
```

### 9 — Conversión de unidades (mg a g)

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["farmacologia", "conversion"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["250 mg/kg", "20"], ["400 mg/kg", "32"], ["500 mg/kg", "40"]]

enunciado: "Un paciente de 80 kg requiere una dosis de {datos[idx][0]}. Expresá el resultado total en gramos (g)."

respuestas_validas:
  - "20"
  - "32"
  - "40"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Primero se calcula la dosis en miligramos (80 kg × {datos[idx][0]}) y luego se divide por 1000 para pasar a gramos: {datos[idx][1]} g.
```

### 10 — Dosis para paciente de 100 kg

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "avanzado"
  tags: ["farmacologia", "mc"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["15 mg/kg", "1500 mg"], ["20 mg/kg", "2000 mg"], ["30 mg/kg", "3000 mg"]]

enunciado: "Para un paciente de 100 kg, la dosis indicada es de {datos[idx][0]}. ¿Cuál es la dosis total?"

opciones_explicitas: ["1500 mg", "2000 mg", "3000 mg"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Multiplicamos el peso por la dosis: 100 kg × {datos[idx][0]} = {datos[idx][1]}.
```

### 11 — Consecuencias de la subdosificación

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "basico"
  tags: ["seguridad", "medicacion"]

respuesta: "no trata el problema"
tipo: completar
respuestas_validas:
  - "no trata el problema"

enunciado: "Si se administra una dosis menor a la requerida por el peso del paciente (subdosificación), el efecto clínico esperado es que ___."

explicacion: |
  La subdosificación implica que la concentración del fármaco en sangre no alcanza el umbral terapéutico, por lo que la enfermedad o síntoma no se cura o no se controla.
```

### 12 — Riesgo de sobredosificación

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "basico"
  tags: ["seguridad", "efectos_adversos"]

respuesta: "causa efectos adversos"
tipo: completar
respuestas_validas:
  - "causa efectos adversos"

enunciado: "Cuando se administra una dosis superior a la recomendada para el peso del paciente (sobredosificación), esto ___."

explicacion: |
  La sobredosificación aumenta la toxicidad del fármaco en el organismo, lo que puede derivar en efectos adversos o toxicidad sistémica.
```

### 13 — Población de mayor riesgo

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["seguridad", "pediatria"]

respuesta: "niños"
tipo: completar
respuestas_validas:
  - "niños"
  - "niños/as"

enunciado: "Debido a que poseen un margen de seguridad más chico y su metabolismo está en desarrollo, el grupo con mayor riesgo de sufrir errores de cálculo de dosis es el de los ___."

explicacion: |
  Los niños tienen una farmacocinética distinta y errores mínimos en el cálculo por miligramo/kilo pueden representar un porcentaje de error mucho mayor que en un adulto.
```

### 14 — El margen de seguridad

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["seguridad", "pediatria"]

respuesta: "chico"
tipo: completar
respuestas_validas:
  - "chico"
  - "pequeño"

enunciado: "En pediatría, el margen de seguridad de la dosis es ___ en comparación con los adultos."

explicacion: |
  Un margen de seguridad chico significa que la diferencia entre la dosis terapéutica y la dosis tóxica es pequeña, lo que exige precisión extrema.
```

### 15 — Relación dosis y peso

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "basico"
  tags: ["seguridad", "calculo"]

respuesta: "mg/kg"
tipo: completar

enunciado: "La unidad de medida estándar para calcular la dosis pediátrica basada en la masa corporal es ___."

respuestas_validas:
  - "mg/kg"

explicacion: |
  La fórmula estándar utiliza miligramos por kilogramo de peso para asegurar que la dosis sea proporcional a la masa del paciente.
```

### 16 — Dosis de un suplemento infantil

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "basico"
  tags: ["pediatria", "suplementos"]

respuesta: "40"
tipo: completar
respuestas_validas:
  - "40"

enunciado: "Un bebé que pesa 8 kg debe recibir un suplemento vitamínico con una dosis de 5 mg por cada kilogramo de peso. ¿Cuántos miligramos totales debe ingerir el bebé?"

explicacion: |
  Para calcular la dosis total, se multiplica el peso del paciente por la dosis prescrita por kilogramo: 8 kg × 5 mg/kg = 40 mg.
```

### 17 — Dosis veterinaria para mascotas

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "basico"
  tags: ["veterinaria", "mascotas"]

variables:
  idx: uno_de([0, 1])
  datos: [[12, 2, "24 mg"], [5, 10, "50 mg"]]

enunciado: "Un perro de {datos[idx][0]} kg requiere un medicamento cuya dosis es de {datos[idx][1]} mg por cada kg de peso. ¿Cuál es la dosis total recomendada?"

opciones_explicitas: ["24 mg", "50 mg", "17 mg", "60 mg"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  La dosis se calcula multiplicando el peso del animal por la dosis por kg: {datos[idx][0]} kg × {datos[idx][1]} mg/kg = {datos[idx][2]}.
```

### 18 — Anestesia pre-quirúrgica

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["anestesia", "seguridad"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[60, 2, "120 mg"], [75, 3, "225 mg"], [50, 4, "200 mg"]]

enunciado: "En un procedimiento quirúrgico, se debe administrar un anestésico al paciente que pesa {datos[idx][0]} kg. Si la dosis es de {datos[idx][1]} mg/kg, ¿cuántos miligramos se deben administrar?"

opciones_explicitas: ["120 mg", "225 mg", "200 mg", "150 mg"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  La dosis anestésica es crítica y se calcula estrictamente por peso corporal: {datos[idx][0]} kg × {datos[idx][1]} mg/kg = {datos[idx][2]}.
```

### 19 — Suplemento de hierro en niños

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "basico"
  tags: ["pediatria", "nutricion"]

respuesta: verdadero
tipo: vf

enunciado: "Un niño de 15 kg debe tomar un suplemento de hierro. Si la dosis es de 3 mg por kg de peso, la dosis total es de 45 mg."

explicacion: |
  La afirmación es verdadera. El cálculo es 15 kg × 3 mg/kg = 45 mg.
```

### 20 — Cálculo de dosis para gatos

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["veterinaria", "gatos"]

variables:
  idx: uno_de([0, 1])
  datos: [[4, 15, "60 mg"], [7, 10, "70 mg"]]

enunciado: "Un gato de {datos[idx][0]} kg necesita un tratamiento con una dosis de {datos[idx][1]} mg/kg. ¿Cuál es la cantidad total de medicamento?"

opciones_explicitas: ["60 mg", "70 mg", "11 mg", "100 mg"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  Multiplicamos el peso del gato por la dosis: {datos[idx][0]} kg × {datos[idx][1]} mg/kg = {datos[idx][2]}.
```

### 21 — Cálculo de dosis pediátrica (variantes)

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["farmacologia", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[60, 15, "900 mg"], [45, 10, "450 mg"], [30, 5, "150 mg"]]

opciones_explicitas: ["150 mg", "450 mg", "900 mg", "1000 mg"]
respuesta: datos[idx][2]
tipo: mc

enunciado: "Un paciente pediátrico pesa {datos[idx][0]} kg. La indicación médica es administrar una dosis de {datos[idx][1]} mg por cada kg de peso corporal. ¿Cuál es la dosis total a administrar?"

explicacion: |
  Para calcular la dosis total, multiplicamos el peso del paciente por la dosis indicada por kg: {datos[idx][0]} kg × {datos[idx][1]} mg/kg = {datos[idx][2]}.
```

### 22 — Ajuste de dosis por peso (variantes)

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["farmacologia", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[80, 5, "400 mg"], [70, 4, "280 mg"], [50, 2, "100 mg"]]

opciones_explicitas: ["100 mg", "280 mg", "400 mg", "550 mg"]
respuesta: datos[idx][2]
tipo: mc

enunciado: "Se debe administrar un medicamento a un paciente que pesa {datos[idx][0]} kg. La dosis prescrita es de {datos[idx][1]} mg/kg. ¿Cuántos miligramos totales debe recibir el paciente?"

explicacion: |
  El cálculo es: {datos[idx][0]} kg × {datos[idx][1]} mg/kg = {datos[idx][2]}.
```

### 23 — Completar dosis exacta

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["farmacologia", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[25, 20, "500"], [10, 50, "500"], [40, 5, "200"]]

respuestas_validas:
  - "500"
  - "200"
respuesta: datos[idx][2]
tipo: completar

enunciado: "Un paciente tiene un peso de {datos[idx][0]} kg. La dosis indicada es de {datos[idx][1]} mg por kg. La dosis total calculada es de ___ mg."

explicacion: |
  Multiplicamos el peso por la dosis por kg: {datos[idx][0]} × {datos[idx][1]} = {datos[idx][2]} mg.
```

### 24 — Dosis para paciente adolescente

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "intermedio"
  tags: ["farmacologia", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[55, 12, "660 mg"], [65, 10, "650 mg"], [45, 15, "675 mg"]]

opciones_explicitas: ["650 mg", "660 mg", "675 mg", "800 mg"]
respuesta: datos[idx][2]
tipo: mc

enunciado: "Un adolescente de {datos[idx][0]} kg requiere un tratamiento cuya dosis es de {datos[idx][1]} mg/kg. ¿Cuál es la dosis total en miligramos?"

explicacion: |
  Multiplicamos el peso ({datos[idx][0]} kg) por la dosis unitaria ({datos[idx][1]} mg/kg) para obtener {datos[idx][2]}.
```

### 25 — Cálculo de dosis de emergencia

```
metadata:
  materia: "salud"
  tema: "dosis_por_peso_corporal"
  nivel: "avanzado"
  tags: ["farmacologia", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[12, 5, "60"], [15, 4, "60"], [20, 3, "60"]]

respuestas_validas:
  - "60"
respuesta: datos[idx][2]
tipo: completar

enunciado: "En una situación de emergencia, un paciente de {datos[idx][0]} kg requiere una dosis de {datos[idx][1]} mg/kg. La dosis total es de ___ mg."

explicacion: |
  Realizamos la multiplicación: {datos[idx][0]} kg × {datos[idx][1]} mg/kg = {datos[idx][2]} mg.
```
