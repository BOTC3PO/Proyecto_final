# Vida Cotidiana — Etiqueta nutricional: % valor diario (%VD) (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Fórmula: `%VD = (cantidad del
> nutriente en la porción / valor de referencia diario) × 100`, sobre
> una dieta de referencia de 2.000 kcal.

---

### 1 — Qué es el %VD

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "basico"
  tags: ["valor_diario", "vocabulario"]

enunciado: "¿Qué es el %VD (% Valor Diario) en una etiqueta nutricional?"
tipo: mc
opciones_explicitas:
  - "El porcentaje que aporta una porción de un nutriente, respecto a una referencia diaria recomendada"
  - "El porcentaje del envase que ya se consumió"
  - "El porcentaje de descuento del producto en la góndola"
respuesta: "El porcentaje que aporta una porción de un nutriente, respecto a una referencia diaria recomendada"

explicacion: |
  Compara la porción contra un valor de referencia pensado para un día
  completo, no contra el envase entero.
```

### 2 — La dieta de referencia es de 2.000 kcal

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "basico"
  tags: ["valor_diario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, el %VD se calcula sobre una dieta de referencia de 2.000 kcal (8.400 kJ)."

explicacion: |
  Es un valor estándar de comparación, no necesariamente lo que necesita
  cada persona en particular.
```

### 3 — Se declara en números enteros

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "basico"
  tags: ["valor_diario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El %VD se declara siempre en números enteros en la etiqueta."

explicacion: |
  No aparece con decimales, aunque el cálculo exacto los tenga.
```

### 4 — Calcular el %VD de sodio

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "calculo"]

variables:
  sodio_mg: random(120, 2000)

respuesta: (sodio_mg / 2400) * 100
tipo: input
tolerancia_abs: 1

enunciado: "Una porción tiene {sodio_mg} mg de sodio. El valor de referencia diario de sodio es 2.400 mg. ¿Cuál es el %VD de sodio de esa porción?"

pasos:
  - "%VD = ({sodio_mg} ÷ 2400) × 100"

explicacion: |
  Se divide la cantidad de la porción por el valor de referencia, y se
  multiplica por 100.
```

### 5 — Despejar la cantidad de nutriente dado el %VD

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "avanzado"
  tags: ["valor_diario", "calculo"]

variables:
  vd_porcentaje: random(5, 40)

respuesta: (vd_porcentaje / 100) * 2400
tipo: input
tolerancia_abs: 1

enunciado: "Una porción tiene un %VD de sodio del {vd_porcentaje}%. Sabiendo que el valor de referencia diario de sodio es 2.400 mg, ¿cuántos mg de sodio tiene esa porción?"

explicacion: |
  Se despeja la cantidad multiplicando el %VD (en decimal) por el valor
  de referencia.
```

### 6 — Valor de referencia de grasas totales

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de referencia diario de grasas totales, sobre una dieta de 2.000 kcal, es de 55 g."

explicacion: |
  Es uno de los valores de la tabla de referencia usada para calcular
  el %VD.
```

### 7 — Valor de referencia de sodio

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de referencia diario de sodio, sobre una dieta de 2.000 kcal, es de 2.400 mg."

explicacion: |
  Es el valor que se usa como denominador para calcular el %VD de
  sodio.
```

### 8 — Valor de referencia de carbohidratos

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de referencia diario de carbohidratos, sobre una dieta de 2.000 kcal, es de 300 g."

explicacion: |
  Es el nutriente con el valor de referencia más alto en gramos de toda
  la tabla.
```

### 9 — Valor de referencia de proteínas

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de referencia diario de proteínas, sobre una dieta de 2.000 kcal, es de 75 g."

explicacion: |
  Es otro de los valores fijos de la tabla de referencia.
```

### 10 — Valor de referencia de grasas saturadas

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de referencia diario de grasas saturadas, sobre una dieta de 2.000 kcal, es de 22 g — menos de la mitad del valor de las grasas totales."

explicacion: |
  Las grasas saturadas tienen su propio valor de referencia, distinto
  (y menor) al de las grasas totales.
```

### 11 — Valor de referencia de fibra alimentaria

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de referencia diario de fibra alimentaria, sobre una dieta de 2.000 kcal, es de 25 g."

explicacion: |
  Es el último valor de la tabla de referencia habitual.
```

### 12 — %VD bajo

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "vocabulario"]

enunciado: "Según la regla práctica habitual, ¿a partir de qué %VD se considera que una porción es \"baja\" en ese nutriente?"
tipo: mc
opciones_explicitas:
  - "5% o menos"
  - "20% o menos"
  - "50% o menos"
respuesta: "5% o menos"

explicacion: |
  Un %VD de 5% o menos indica un aporte chico de ese nutriente en esa
  porción.
```

### 13 — %VD alto

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "vocabulario"]

enunciado: "Según la regla práctica habitual, ¿a partir de qué %VD se considera que una porción es \"alta\" en ese nutriente?"
tipo: mc
opciones_explicitas:
  - "20% o más"
  - "5% o más"
  - "100% o más"
respuesta: "20% o más"

explicacion: |
  Un %VD de 20% o más significa que esa sola porción ya cubre una
  quinta parte (o más) de la referencia diaria de ese nutriente.
```

### 14 — Calcular el %VD de grasas saturadas

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "avanzado"
  tags: ["valor_diario", "calculo"]

variables:
  grasas_sat_g: random(2, 20)

respuesta: (grasas_sat_g / 22) * 100
tipo: input
tolerancia_abs: 1

enunciado: "Una porción tiene {grasas_sat_g} g de grasas saturadas. ¿Cuál es el %VD de grasas saturadas de esa porción?"

explicacion: |
  Se divide por el valor de referencia de grasas saturadas (22 g) y se
  multiplica por 100.
```

### 15 — Calcular el %VD de fibra

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "avanzado"
  tags: ["valor_diario", "calculo"]

variables:
  fibra_g: random(1, 15)

respuesta: (fibra_g / 25) * 100
tipo: input
tolerancia_abs: 1

enunciado: "Una porción tiene {fibra_g} g de fibra alimentaria. ¿Cuál es el %VD de fibra de esa porción?"

explicacion: |
  Se divide por el valor de referencia de fibra (25 g) y se multiplica
  por 100.
```

### 16 — Comparar %VD entre dos productos

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "comparacion"]

variables:
  sodio_a: random(100, 500)
  sodio_b: random(600, 1500)

respuesta: (((sodio_b / 2400) * 100) > ((sodio_a / 2400) * 100))
tipo: vf

enunciado: "Producto A tiene {sodio_a} mg de sodio por porción. Producto B tiene {sodio_b} mg de sodio por porción. ¿El %VD de sodio de B es mayor que el de A?"

explicacion: |
  Al usar el mismo valor de referencia para los dos, comparar el %VD da
  el mismo orden que comparar directamente los miligramos.
```

### 17 — El %VD permite comparar porciones de tamaño distinto

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El %VD permite comparar dos productos aunque tengan tamaños de porción distintos, porque ya está normalizado a la misma referencia diaria."

explicacion: |
  Un %VD de sodio del 15% dice lo mismo sin importar si la porción de
  ese producto era de 30 g o de 100 g.
```

### 18 — Verificar un cálculo de %VD (con error a veces)

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "verificacion"]

variables:
  sodio_mg: random(120, 2000)
  correcto: (sodio_mg / 2400) * 100
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Una porción con {sodio_mg} mg de sodio, %VD informado: {redondear(mostrado, 0)}%."

explicacion: |
  Se vuelve a calcular con la fórmula del %VD y se compara con el valor
  informado.
```

### 19 — Completar el valor de referencia

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "avanzado"
  tags: ["valor_diario"]

variables:
  proteinas_g: random(10, 60)
  vd_calculado: (proteinas_g / 75) * 100

tipo: completar
enunciado: "Una porción con {proteinas_g} g de proteínas tiene un %VD de {redondear(vd_calculado, 0)}%. Completá: {proteinas_g} (g de proteínas) ÷ ___ (valor de referencia) × 100 = {redondear(vd_calculado, 0)} (%VD)."
respuestas_validas:
  - 75

explicacion: |
  El valor de referencia diario de proteínas es 75 g.
```

### 20 — Ordenar por %VD

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "basico"
  tags: ["valor_diario", "orden"]

tipo: ordenar
enunciado: "Ordená estas porciones de sodio de menor a mayor %VD (referencia: 2.400 mg)."
opciones_explicitas:
  - "1.200 mg de sodio"
  - "240 mg de sodio"
  - "600 mg de sodio"
respuesta_orden: ["240 mg de sodio", "600 mg de sodio", "1.200 mg de sodio"]

explicacion: |
  A mayor cantidad del nutriente en la porción, mayor el %VD, con el
  mismo valor de referencia.
```

### 21 — Los azúcares no tienen %VD en Argentina

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "intermedio"
  tags: ["valor_diario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de nutrientes como sodio, grasas o proteínas, los azúcares no tienen un %VD definido en el sistema argentino: se declaran en gramos, sin porcentaje."

explicacion: |
  Por eso evaluar el exceso de azúcares usa otro criterio distinto al
  %VD (ver el tema de azúcares agregados).
```

### 22 — %VD (cierre)

```
metadata:
  materia: "vida-cotidiana"
  tema: "etiqueta_valor_diario"
  nivel: "basico"
  tags: ["valor_diario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El %VD compara la cantidad de un nutriente en una porción contra un valor de referencia diario (base 2.000 kcal), y permite comparar productos con tamaños de porción distintos usando una regla práctica: 5% o menos es bajo, 20% o más es alto."

explicacion: |
  Es la idea central de todo el tema.
```
