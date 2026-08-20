# Matemática — Teorema central del límite (cuestionario, 20 preguntas VBLang)

> Tema: `D12B`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué dice el teorema central del límite

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "basico"
  tags: ["tcl", "vocabulario"]

enunciado: "¿Qué dice el teorema central del límite?"
tipo: mc
opciones_explicitas:
  - "Que la distribución de los promedios de muestras suficientemente grandes se aproxima a una distribución normal, sin importar la forma de la población original"
  - "Que todas las poblaciones tienen forma de distribución normal"
  - "Que una sola muestra grande es siempre igual a la población completa"
respuesta: "Que la distribución de los promedios de muestras suficientemente grandes se aproxima a una distribución normal, sin importar la forma de la población original"

explicacion: |
  Es válido incluso si la población original no es normal en
  absoluto.
```

### 2 — El TCL no depende de la forma de la población original

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema central del límite aplica sin importar qué forma tenga la distribución de la población original (uniforme, sesgada, con varios picos...)."

explicacion: |
  Es la parte más sorprendente del teorema: no hace falta que la
  población de partida sea normal.
```

### 3 — Completar: media de la distribución de promedios muestrales

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "completar"]

tipo: completar
enunciado: "Completá: la distribución de los promedios de las muestras queda centrada exactamente en la media ___."
respuestas_validas:
  - "poblacional"
  - "de la población"

explicacion: |
  El promedio de los promedios muestrales coincide con la media real
  de toda la población.
```

### 4 — Qué es el error estándar

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["error_estandar", "vocabulario"]

enunciado: "¿Qué es el error estándar?"
tipo: mc
opciones_explicitas:
  - "El desvío estándar de la distribución de los promedios muestrales (no del dato individual)"
  - "Otro nombre para el desvío estándar de la población original"
  - "La diferencia entre el máximo y el mínimo de una muestra"
respuesta: "El desvío estándar de la distribución de los promedios muestrales (no del dato individual)"

explicacion: |
  Mide qué tan dispersos están, entre sí, los promedios de distintas
  muestras.
```

### 5 — Completar: fórmula del error estándar

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "completar"]

tipo: completar
enunciado: "Completá: error estándar = desvío estándar poblacional (σ) / raíz cuadrada de ___."
respuestas_validas:
  - "n"
  - "el tamaño de muestra"

explicacion: |
  error estándar = σ / √n.
```

### 6 — Problema: calcular el error estándar

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma: uno_de([10, 20, 30])
  n: uno_de([25, 100])

respuesta: redondear(sigma / sqrt(n), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una población tiene desvío estándar σ = {sigma}. Se toman muestras de tamaño n = {n}. ¿Cuál es el error estándar de la distribución de promedios muestrales?"

pasos:
  - "error estándar = {sigma} / √{n} = {sigma} / {sqrt(n)} = {redondear(sigma / sqrt(n), 3)}"

explicacion: |
  Se divide el desvío poblacional por la raíz del tamaño de muestra.
```

### 7 — A mayor tamaño de muestra, menor error estándar

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["error_estandar"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más grande es el tamaño de la muestra (n), menor es el error estándar — los promedios de muestras grandes varían menos entre sí que los de muestras chicas."

explicacion: |
  Porque n está en el denominador, dentro de la raíz cuadrada.
```

### 8 — La regla práctica de n≥30

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "vocabulario"]

enunciado: "¿Qué regla práctica se suele usar para saber si una muestra es 'suficientemente grande' para que el teorema central del límite dé una buena aproximación?"
tipo: mc
opciones_explicitas:
  - "n ≥ 30 (no es una ley exacta, pero suele alcanzar aunque la población original tenga una forma rara)"
  - "n ≥ 1.000.000, sin excepción"
  - "Cualquier n sirve exactamente igual, no hay ninguna regla práctica"
respuesta: "n ≥ 30 (no es una ley exacta, pero suele alcanzar aunque la población original tenga una forma rara)"

explicacion: |
  Es una convención práctica, no un límite matemático exacto.
```

### 9 — Problema: comparar error estándar con distinto tamaño de muestra

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma: 20
  n_chico: 25
  n_grande: 100

respuesta: (sigma / sqrt(n_chico)) > (sigma / sqrt(n_grande))
tipo: vf

enunciado: "Con σ = {sigma}, ¿el error estándar de una muestra de n = {n_chico} es MAYOR que el de una muestra de n = {n_grande}?"

explicacion: |
  A menor tamaño de muestra, mayor error estándar (más variabilidad
  entre los promedios de distintas muestras chicas).
```

### 10 — Aplicación: dado no normal, promedios sí

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "aplicacion"]

enunciado: "El resultado de tirar un dado (1 a 6) es una distribución uniforme, no normal. Si se tiran 30 dados y se promedia el resultado, y se repite ese experimento muchas veces, ¿cómo se distribuyen esos promedios?"
tipo: mc
opciones_explicitas:
  - "Se distribuyen aproximadamente como una normal, aunque el resultado de un solo dado no lo sea"
  - "Se distribuyen exactamente igual que el resultado de un solo dado (uniforme)"
  - "No se puede predecir ningún patrón en esos promedios"
respuesta: "Se distribuyen aproximadamente como una normal, aunque el resultado de un solo dado no lo sea"

explicacion: |
  Es el ejemplo clásico para mostrar el teorema central del límite en
  acción.
```

### 11 — Por qué el TCL es tan importante

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl", "aplicacion"]

enunciado: "¿Por qué el teorema central del límite es tan importante en estadística aplicada?"
tipo: mc
opciones_explicitas:
  - "Porque permite usar el aparato de la distribución normal (z-scores, regla empírica) sobre promedios de muestras, aunque la población original no sea normal"
  - "Porque demuestra que todas las poblaciones del mundo real son normales"
  - "Porque elimina por completo la necesidad de tomar muestras grandes"
respuesta: "Porque permite usar el aparato de la distribución normal (z-scores, regla empírica) sobre promedios de muestras, aunque la población original no sea normal"

explicacion: |
  Es el fundamento matemático de `../intervalo-de-confianza/` y
  `../test-de-hipotesis/`.
```

### 12 — Problema: z-score de una media muestral

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl", "problema"]

variables:
  media_poblacional: uno_de([50, 100])
  sigma: uno_de([10, 20])
  n: 25
  media_muestral: media_poblacional + sigma / sqrt(n)

respuesta: redondear((media_muestral - media_poblacional) / (sigma / sqrt(n)), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una población tiene media {media_poblacional} y desvío σ = {sigma}. Se toma una muestra de n = {n}, cuyo promedio dio {redondear(media_muestral, 2)}. ¿Cuál es el z-score de ese promedio muestral, usando el error estándar en vez del desvío poblacional?"

pasos:
  - "error estándar = {sigma}/√{n} = {sigma / sqrt(n)}"
  - "z = ({redondear(media_muestral, 2)} − {media_poblacional}) / {sigma / sqrt(n)} = {redondear((media_muestral - media_poblacional) / (sigma / sqrt(n)), 2)}"

explicacion: |
  Es el mismo cálculo de z-score de `../distribucion-normal/`, pero
  usando el error estándar en vez del desvío de un dato individual.
```

### 13 — El TCL habla de promedios, no de datos individuales

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema central del límite describe cómo se distribuyen los PROMEDIOS de muchas muestras, no cómo se distribuye cada dato individual dentro de la población."

explicacion: |
  Un dato individual de una población no normal sigue sin ser normal
  — lo que sí tiende a normal es el promedio de un grupo de datos.
```

### 14 — Aplicación real: por qué confían las encuestas

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "basico"
  tags: ["tcl", "aplicacion"]

enunciado: "¿Por qué las encuestas y estudios estadísticos pueden confiar en que el promedio de una muestra (bien tomada) se acerca al valor real de la población?"
tipo: mc
opciones_explicitas:
  - "Porque el teorema central del límite garantiza que, con una muestra suficientemente grande, ese promedio se distribuye de forma predecible alrededor del valor poblacional real"
  - "Porque cualquier muestra, sin importar cómo se tomó, siempre da el valor exacto de la población"
  - "Porque las encuestas nunca tienen margen de error"
respuesta: "Porque el teorema central del límite garantiza que, con una muestra suficientemente grande, ese promedio se distribuye de forma predecible alrededor del valor poblacional real"

explicacion: |
  Esa "forma predecible" (la normal, con su error estándar) es lo que
  permite calcular después un margen de error concreto.
```

### 15 — Problema: cuadruplicar la muestra

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma: 40
  n: 25

respuesta: redondear((sigma / sqrt(n)) / (sigma / sqrt(n * 4)), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con σ = {sigma} y n = {n}, ¿por qué factor se reduce el error estándar si se CUADRUPLICA el tamaño de la muestra (n × 4)?"

pasos:
  - "error estándar original = {sigma}/√{n} = {sigma / sqrt(n)}"
  - "error estándar con n×4 = {sigma}/√{n * 4} = {sigma / sqrt(n * 4)}"
  - "Factor de reducción = {sigma / sqrt(n)} / {sigma / sqrt(n * 4)} = {redondear((sigma / sqrt(n)) / (sigma / sqrt(n * 4)), 2)}"

explicacion: |
  Cuadruplicar n reduce el error estándar a la MITAD, no a un cuarto
  — porque depende de la raíz cuadrada de n.
```

### 16 — Cuadruplicar n reduce el error estándar a la mitad

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar"]

respuesta: verdadero
tipo: vf

enunciado: "Cuadruplicar el tamaño de la muestra reduce el error estándar a la MITAD, no a un cuarto — porque el error estándar depende de la raíz cuadrada de n, y √4 = 2."

explicacion: |
  Es un error común asumir que la reducción es proporcional a n en
  vez de a √n.
```

### 17 — Relación con el intervalo de confianza

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "intermedio"
  tags: ["tcl", "aplicacion"]

enunciado: "¿Qué relación tiene el teorema central del límite con el intervalo de confianza (el módulo que sigue)?"
tipo: mc
opciones_explicitas:
  - "El TCL es la razón matemática por la que se puede construir un intervalo de confianza usando la distribución normal, aunque la población original no sea normal"
  - "No tienen ninguna relación entre sí"
  - "El intervalo de confianza reemplaza por completo al teorema central del límite"
respuesta: "El TCL es la razón matemática por la que se puede construir un intervalo de confianza usando la distribución normal, aunque la población original no sea normal"

explicacion: |
  Sin el TCL, no habría justificación para usar la normal al estimar
  un rango de confianza a partir de una muestra.
```

### 18 — Aplicación real: control de calidad

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["tcl", "aplicacion"]

enunciado: "Una fábrica controla la calidad de sus piezas tomando muestras de 30 piezas por lote y calculando el promedio de cada muestra, aunque el peso de una pieza individual no siga una distribución normal. ¿Por qué este método sigue siendo válido?"
tipo: mc
opciones_explicitas:
  - "Porque el teorema central del límite garantiza que el promedio de muestras de tamaño 30 se distribuye aproximadamente normal, sin importar la forma de la distribución de una pieza individual"
  - "Porque el peso de cualquier pieza individual siempre es normal, sin excepción"
  - "Porque las fábricas no necesitan ninguna base matemática para este tipo de control"
respuesta: "Porque el teorema central del límite garantiza que el promedio de muestras de tamaño 30 se distribuye aproximadamente normal, sin importar la forma de la distribución de una pieza individual"

explicacion: |
  Es la misma regla práctica de n≥30 aplicada a control de calidad
  industrial.
```

### 19 — Problema: comparar error estándar con distinto σ

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "avanzado"
  tags: ["error_estandar", "problema"]

variables:
  sigma_a: 15
  sigma_b: 45
  n: 25

respuesta: (sigma_a / sqrt(n)) < (sigma_b / sqrt(n))
tipo: vf

enunciado: "Población A tiene σ = {sigma_a}; Población B tiene σ = {sigma_b}. Tomando muestras del mismo tamaño n = {n} de cada una, ¿el error estándar de la Población A es MENOR que el de la Población B?"

explicacion: |
  A mayor dispersión de la población original (σ más grande), mayor
  también el error estándar de sus promedios muestrales, para el
  mismo tamaño de muestra.
```

### 20 — Cierre: para qué sirve el teorema central del límite

```
metadata:
  materia: "matematicas"
  tema: "teorema_central_del_limite"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el teorema central del límite?"
tipo: mc
opciones_explicitas:
  - "Es la base matemática que permite estimar y calcular márgenes de error sobre promedios de muestras, usando la distribución normal, aunque la población original no sea normal"
  - "Sirve sólo para calcular la media de una población conocida por completo"
  - "Sirve sólo cuando la población ya es normal de por sí"
respuesta: "Es la base matemática que permite estimar y calcular márgenes de error sobre promedios de muestras, usando la distribución normal, aunque la población original no sea normal"

explicacion: |
  Sostiene directamente `../intervalo-de-confianza/` y
  `../test-de-hipotesis/`, los dos módulos que siguen.
```
