# Matemática — Regresión lineal (cuestionario, 20 preguntas VBLang)

> Tema: `D15`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la regresión lineal

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["regresion", "vocabulario"]

enunciado: "¿Qué es la regresión lineal?"
tipo: mc
opciones_explicitas:
  - "El método para encontrar la recta que mejor describe la tendencia de una nube de puntos de datos"
  - "El método para calcular la media de un conjunto de datos"
  - "El método para armar un gráfico de torta"
respuesta: "El método para encontrar la recta que mejor describe la tendencia de una nube de puntos de datos"

explicacion: |
  Parte de la nube de puntos ya construida en `../construir-un-grafico/`.
```

### 2 — Qué representan m y b en y=mx+b

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["regresion", "vocabulario"]

enunciado: "En la ecuación de la recta de regresión y=m·x+b, ¿qué representan m y b?"
tipo: mc
opciones_explicitas:
  - "m es la pendiente (cuánto cambia y por cada unidad que aumenta x) y b es la ordenada al origen (el valor de y cuando x=0)"
  - "m y b son siempre iguales entre sí"
  - "m es el valor máximo de y, y b es el valor mínimo"
respuesta: "m es la pendiente (cuánto cambia y por cada unidad que aumenta x) y b es la ordenada al origen (el valor de y cuando x=0)"

explicacion: |
  Es la misma forma de la ecuación de la recta ya vista en Álgebra.
```

### 3 — Problema: predecir y con la recta de regresión

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([2, 3, 5])
  b: uno_de([10, 20])
  x: uno_de([4, 6, 8])

respuesta: m * x + b
tipo: input

enunciado: "La recta de regresión ajustada es y = {m}x + {b}. ¿Cuál es la predicción de y para x={x}?"

pasos:
  - "y = {m}×{x} + {b} = {m * x} + {b} = {m * x + b}"

explicacion: |
  Se reemplaza el valor de x directo en la ecuación de la recta.
```

### 4 — Problema: despejar x dado un valor de y

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([2, 4])
  b: 10
  x_real: uno_de([5, 10])

respuesta: x_real
tipo: input

enunciado: "La recta de regresión es y = {m}x + {b}. Si se observa y = {m * x_real + b}, ¿qué valor de x predice la recta?"

pasos:
  - "{m * x_real + b} = {m}x + {b}"
  - "x = ({m * x_real + b} − {b}) / {m} = {x_real}"

explicacion: |
  Se despeja x de la ecuación de la recta, igual que en cualquier
  ecuación de primer grado.
```

### 5 — Qué mide el coeficiente de correlación

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion", "vocabulario"]

enunciado: "¿Qué mide el coeficiente de correlación (r)?"
tipo: mc
opciones_explicitas:
  - "Qué tan bien la recta ajustada describe la relación real entre los datos, en una escala de −1 a 1"
  - "La pendiente exacta de la recta de regresión"
  - "La cantidad de puntos que tiene la nube de datos"
respuesta: "Qué tan bien la recta ajustada describe la relación real entre los datos, en una escala de −1 a 1"

explicacion: |
  r cerca de ±1 indica un ajuste fuerte; cerca de 0, un ajuste débil.
```

### 6 — r cercano a ±1 indica ajuste fuerte

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un coeficiente de correlación cercano a +1 o a −1 indica que la recta ajusta muy bien a los datos; uno cercano a 0 indica un ajuste débil."

explicacion: |
  El valor absoluto de r es lo que indica la fuerza del ajuste; el
  signo indica la dirección (directa o inversa).
```

### 7 — Signo del coeficiente de correlación

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un coeficiente de correlación positivo indica una relación directa (a mayor x, mayor y); uno negativo indica una relación inversa (a mayor x, menor y)."

explicacion: |
  El signo de r siempre coincide con el signo de la pendiente m de la
  recta ajustada.
```

### 8 — Qué es el método de mínimos cuadrados

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "vocabulario"]

enunciado: "¿En qué consiste el método de mínimos cuadrados para ajustar una recta?"
tipo: mc
opciones_explicitas:
  - "Elegir la recta que hace mínima la suma de las distancias verticales AL CUADRADO entre cada punto real y la recta"
  - "Elegir la recta que pasa exactamente por todos los puntos, sin excepción"
  - "Elegir la recta con la pendiente más grande posible"
respuesta: "Elegir la recta que hace mínima la suma de las distancias verticales AL CUADRADO entre cada punto real y la recta"

explicacion: |
  Es matemáticamente imposible, en general, que una única recta pase
  por todos los puntos de datos reales.
```

### 9 — Por qué se usan distancias al cuadrado

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion"]

enunciado: "¿Por qué el método de mínimos cuadrados usa distancias AL CUADRADO en vez de distancias directas?"
tipo: mc
opciones_explicitas:
  - "Porque las distancias directas (positivas para puntos arriba de la recta, negativas para los de abajo) se cancelarían entre sí al sumarlas"
  - "Porque elevar al cuadrado siempre da un número más chico"
  - "No hay ninguna razón matemática, es sólo una convención arbitraria"
respuesta: "Porque las distancias directas (positivas para puntos arriba de la recta, negativas para los de abajo) se cancelarían entre sí al sumarlas"

explicacion: |
  Es exactamente el mismo argumento usado para la varianza en
  `../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/`.
```

### 10 — Extrapolar fuera del rango es riesgoso

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "extrapolacion"]

respuesta: verdadero
tipo: vf

enunciado: "Usar la recta de regresión para predecir valores de x fuera del rango de datos que realmente se observaron (extrapolar) es riesgoso, porque no hay garantía de que la misma tendencia lineal siga valiendo ahí afuera."

explicacion: |
  La recta se ajustó sólo con los datos observados — fuera de ese
  rango, es una extensión sin evidencia directa que la respalde.
```

### 11 — Problema: identificar el signo de la pendiente por contexto

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "problema"]

enunciado: "Un estudio encuentra que, en una empresa, a mayor gasto en publicidad corresponden mayores ventas. ¿Qué signo debería tener la pendiente (m) de la recta de regresión ajustada a estos datos?"
tipo: mc
opciones_explicitas:
  - "Positivo: a medida que aumenta el gasto en publicidad (x), también aumentan las ventas (y)"
  - "Negativo: a medida que aumenta el gasto en publicidad, bajan las ventas"
respuesta: "Positivo: a medida que aumenta el gasto en publicidad (x), también aumentan las ventas (y)"

explicacion: |
  Una relación directa (ambas variables suben juntas) siempre da una
  pendiente positiva.
```

### 12 — Aplicación real: predecir ventas

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["regresion", "aplicacion"]

enunciado: "Una empresa ajustó la recta ventas = 3×(gasto en publicidad) + 500, usando datos históricos. ¿Para qué sirve esta recta?"
tipo: mc
opciones_explicitas:
  - "Para predecir las ventas esperadas dado un monto de gasto en publicidad, dentro del rango de datos ya observado"
  - "Para calcular con certeza absoluta las ventas futuras, sin ningún margen de error"
  - "Sólo sirve para describir datos pasados, nunca para predecir"
respuesta: "Para predecir las ventas esperadas dado un monto de gasto en publicidad, dentro del rango de datos ya observado"

explicacion: |
  Es una predicción basada en la tendencia histórica, no una certeza
  matemática exacta.
```

### 13 — Problema: predicción con pendiente negativa

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([-2, -3])
  b: uno_de([100, 150])
  x: uno_de([10, 20])

respuesta: m * x + b
tipo: input

enunciado: "Una recta de regresión con pendiente negativa es y = {m}x + {b} (por ejemplo: precio del producto vs. cantidad demandada). ¿Cuál es la predicción de y para x={x}?"

pasos:
  - "y = {m}×{x} + {b} = {m * x + b}"

explicacion: |
  Con pendiente negativa, y BAJA a medida que x aumenta.
```

### 14 — r=0 no significa "sin ninguna relación"

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un coeficiente de correlación cercano a 0 no significa que no haya ninguna relación entre las variables — sólo dice que no hay una relación LINEAL. Podría haber una relación fuerte pero curva."

explicacion: |
  Por ejemplo, una relación en forma de parábola puede dar r≈0 aunque
  las variables estén claramente relacionadas.
```

### 15 — Para qué sirve reportar r junto con la recta

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion", "aplicacion"]

enunciado: "¿Por qué conviene reportar el coeficiente de correlación (r) junto con la ecuación de la recta de regresión?"
tipo: mc
opciones_explicitas:
  - "Porque una recta siempre se puede calcular, aunque ajuste mal — r dice qué tan confiable es esa recta para describir los datos reales"
  - "Porque r reemplaza por completo a la ecuación de la recta"
  - "No es necesario reportarlo, la pendiente ya dice todo lo importante"
respuesta: "Porque una recta siempre se puede calcular, aunque ajuste mal — r dice qué tan confiable es esa recta para describir los datos reales"

explicacion: |
  Sin r, no hay forma de saber si la recta realmente describe bien la
  tendencia o si los datos están demasiado dispersos.
```

### 16 — Problema: interpretar la pendiente en contexto

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([5, 8, 10])

respuesta: m
tipo: input
unidad: "puntos por hora de estudio"

enunciado: "La recta ajustada entre horas de estudio y nota de examen es nota = {m}×horas + 40. Según esta recta, ¿cuánto aumenta la nota esperada por cada hora adicional de estudio?"

pasos:
  - "La pendiente m={m} es, directamente, el cambio en y por cada unidad de x."

explicacion: |
  Interpretar la pendiente en las unidades del problema es la parte
  más útil de la regresión en la práctica.
```

### 17 — Relación con la nube de puntos

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "aplicacion"]

enunciado: "¿Qué relación tiene la regresión lineal con `../construir-un-grafico/`?"
tipo: mc
opciones_explicitas:
  - "La regresión parte de una nube de puntos (gráfico de dispersión) ya construida, y ajusta la recta que mejor la describe"
  - "No tienen ninguna relación entre sí"
  - "La regresión reemplaza la necesidad de graficar los datos"
respuesta: "La regresión parte de una nube de puntos (gráfico de dispersión) ya construida, y ajusta la recta que mejor la describe"

explicacion: |
  Por eso `../construir-un-grafico/` es el prerrequisito directo de
  este módulo.
```

### 18 — Buen ajuste no prueba causalidad

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["correlacion", "causalidad"]

respuesta: verdadero
tipo: vf

enunciado: "Que una recta ajuste muy bien a los datos (r cercano a ±1) no prueba que una de las variables CAUSE a la otra — podría haber otra explicación detrás de esa relación."

explicacion: |
  Es el punto central de `../correlacion-no-es-causalidad/`, el
  módulo que sigue.
```

### 19 — Problema: comparar dos predicciones

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "problema"]

variables:
  m: 4
  b: 20
  x1: 10
  x2: 15

respuesta: (m * x2 + b) - (m * x1 + b)
tipo: input

enunciado: "Con la recta y = {m}x + {b}, ¿cuánto AUMENTA la predicción de y al pasar de x={x1} a x={x2}?"

pasos:
  - "y({x1}) = {m * x1 + b}; y({x2}) = {m * x2 + b}"
  - "Diferencia = {m * x2 + b} − {m * x1 + b} = {(m * x2 + b) - (m * x1 + b)}"

explicacion: |
  El aumento siempre es m × (diferencia en x) — es la definición
  misma de pendiente constante en una recta.
```

### 20 — Cierre: para qué sirve la regresión lineal

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la regresión lineal?"
tipo: mc
opciones_explicitas:
  - "Para cuantificar y predecir la relación entre dos variables numéricas, ajustando la recta que mejor describe la tendencia de los datos observados"
  - "Para calcular la media y la mediana de un conjunto de datos"
  - "Sólo sirve para variables que ya se sabe que están relacionadas causalmente"
respuesta: "Para cuantificar y predecir la relación entre dos variables numéricas, ajustando la recta que mejor describe la tendencia de los datos observados"

explicacion: |
  El paso siguiente, `../correlacion-no-es-causalidad/`, pone el
  límite crítico a esta herramienta: ajustar bien no es lo mismo que
  explicar por qué.
```
