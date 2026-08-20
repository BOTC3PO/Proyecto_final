# Matemática — Intervalo de confianza (cuestionario, 20 preguntas VBLang)

> Tema: `D13`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un intervalo de confianza

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "basico"
  tags: ["intervalo_confianza", "vocabulario"]

enunciado: "¿Qué es un intervalo de confianza?"
tipo: mc
opciones_explicitas:
  - "Un rango de valores, calculado a partir de una muestra, que probablemente contiene el valor real de la población, con un nivel de confianza dado"
  - "El valor exacto de la media de la población, sin ningún margen de error"
  - "La diferencia entre el valor máximo y el mínimo de una muestra"
respuesta: "Un rango de valores, calculado a partir de una muestra, que probablemente contiene el valor real de la población, con un nivel de confianza dado"

explicacion: |
  En vez de un único número, reporta un rango junto con qué tan
  confiable es el método que lo produjo.
```

### 2 — Completar: fórmula del intervalo de confianza

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza", "completar"]

tipo: completar
enunciado: "Completá: intervalo de confianza = media muestral ± ___."
respuestas_validas:
  - "margen de error"
  - "el margen de error"

explicacion: |
  IC = media muestral ± margen de error.
```

### 3 — Qué es el margen de error

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza", "vocabulario"]

enunciado: "¿Cómo se calcula el margen de error de un intervalo de confianza?"
tipo: mc
opciones_explicitas:
  - "z* (según el nivel de confianza elegido) multiplicado por el error estándar"
  - "El desvío estándar de la población, sin ningún otro factor"
  - "La media muestral dividida por el tamaño de la muestra"
respuesta: "z* (según el nivel de confianza elegido) multiplicado por el error estándar"

explicacion: |
  margen de error = z* × error estándar.
```

### 4 — Completar: valor de z* para 95% de confianza

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza", "completar"]

tipo: completar
enunciado: "Completá: el valor de z* para un nivel de confianza del 95% es aproximadamente ___."
respuestas_validas:
  - "1,96"
  - "1.96"

explicacion: |
  Es el valor de z* más usado en la práctica.
```

### 5 — Problema: calcular el intervalo de confianza (límite inferior)

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  media_muestral: uno_de([50, 70, 100])
  error_estandar: uno_de([2, 3, 5])

respuesta: redondear(media_muestral - 1.96 * error_estandar, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una muestra dio media {media_muestral} con error estándar {error_estandar}. Con un 95% de confianza (z*=1,96), ¿cuál es el límite INFERIOR del intervalo de confianza?"

pasos:
  - "margen de error = 1,96 × {error_estandar} = {redondear(1.96 * error_estandar, 2)}"
  - "límite inferior = {media_muestral} − {redondear(1.96 * error_estandar, 2)} = {redondear(media_muestral - 1.96 * error_estandar, 2)}"

explicacion: |
  Se resta el margen de error a la media muestral.
```

### 6 — Más confianza, intervalo más ancho

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza"]

respuesta: verdadero
tipo: vf

enunciado: "A mayor nivel de confianza exigido (por ejemplo, pasar de 95% a 99%), más ancho resulta el intervalo de confianza, manteniendo los mismos datos de la muestra."

explicacion: |
  Un z* más grande (2,576 para 99% vs. 1,96 para 95%) agranda el
  margen de error.
```

### 7 — Por qué más confianza implica un intervalo más ancho

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza"]

enunciado: "¿Por qué pedir un nivel de confianza más alto (por ejemplo 99% en vez de 95%) agranda el intervalo de confianza?"
tipo: mc
opciones_explicitas:
  - "Porque para estar más seguro de 'atrapar' el valor real, hay que cubrir un rango más amplio de valores posibles"
  - "Porque un nivel de confianza más alto siempre implica una muestra más chica"
  - "No hay ninguna relación real entre el nivel de confianza y el ancho del intervalo"
respuesta: "Porque para estar más seguro de 'atrapar' el valor real, hay que cubrir un rango más amplio de valores posibles"

explicacion: |
  Es el mismo trade-off que aparece en cualquier estimación con
  incertidumbre: más seguridad, menos precisión (rango más amplio).
```

### 8 — Más tamaño de muestra, intervalo más angosto

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza"]

respuesta: verdadero
tipo: vf

enunciado: "Con el mismo nivel de confianza, una muestra más grande produce un intervalo de confianza más angosto (más preciso), porque reduce el error estándar."

explicacion: |
  Es la única forma de ganar precisión sin sacrificar nivel de
  confianza: conseguir más datos.
```

### 9 — Problema: comparar ancho de intervalo con distinto n

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  sigma: 20
  n_chico: 25
  n_grande: 100

respuesta: (1.96 * (sigma / sqrt(n_chico))) > (1.96 * (sigma / sqrt(n_grande)))
tipo: vf

enunciado: "Con σ = {sigma} y 95% de confianza, ¿el margen de error de una muestra de n = {n_chico} es MAYOR que el de una muestra de n = {n_grande}?"

explicacion: |
  A menor tamaño de muestra, mayor error estándar y, por lo tanto,
  mayor margen de error.
```

### 10 — Interpretación correcta del nivel de confianza

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "interpretacion"]

enunciado: "¿Qué significa realmente '95% de confianza' en un intervalo de confianza?"
tipo: mc
opciones_explicitas:
  - "Que si se repitiera el proceso de muestreo muchas veces, aproximadamente el 95% de los intervalos calculados así contendrían el verdadero valor poblacional"
  - "Que hay exactamente un 95% de probabilidad de que el valor real esté dentro de ESTE intervalo puntual ya calculado"
  - "Que el 95% de los datos de la muestra caen dentro de ese intervalo"
respuesta: "Que si se repitiera el proceso de muestreo muchas veces, aproximadamente el 95% de los intervalos calculados así contendrían el verdadero valor poblacional"

explicacion: |
  Es una afirmación sobre el MÉTODO repetido, no sobre la probabilidad
  de un intervalo puntual ya calculado.
```

### 11 — El error de interpretación más común

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "interpretacion"]

respuesta: falso
tipo: vf

enunciado: "'Este intervalo de confianza del 95% tiene un 95% de probabilidad de contener el valor real de la población' es una interpretación matemáticamente correcta."

explicacion: |
  Es el error de interpretación más común: una vez calculado, el
  intervalo ya contiene o no contiene al valor real, sin azar de por
  medio en ese momento — el 95% describe el método repetido, no ese
  intervalo puntual.
```

### 12 — Problema: calcular el margen de error

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza", "problema"]

variables:
  error_estandar: uno_de([1.5, 2.5, 4])

respuesta: redondear(1.96 * error_estandar, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una muestra tiene error estándar {error_estandar}. Con 95% de confianza (z*=1,96), ¿cuál es el margen de error?"

pasos:
  - "margen de error = 1,96 × {error_estandar} = {redondear(1.96 * error_estandar, 2)}"

explicacion: |
  Es el z* multiplicado directo por el error estándar.
```

### 13 — Problema: intervalo de confianza completo

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  media_muestral: 68
  error_estandar: 3

respuesta: redondear(media_muestral + 1.96 * error_estandar, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una encuesta a alumnos dio una nota promedio de {media_muestral}, con error estándar {error_estandar}. Con 95% de confianza, ¿cuál es el límite SUPERIOR del intervalo de confianza?"

pasos:
  - "margen de error = 1,96 × {error_estandar} = {redondear(1.96 * error_estandar, 2)}"
  - "límite superior = {media_muestral} + {redondear(1.96 * error_estandar, 2)} = {redondear(media_muestral + 1.96 * error_estandar, 2)}"

explicacion: |
  El intervalo completo va de (media − margen) a (media + margen).
```

### 14 — Aplicación real: encuestas políticas

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "basico"
  tags: ["intervalo_confianza", "aplicacion"]

enunciado: "Una encuesta política reporta que un candidato tiene 40% de intención de voto, '±3 puntos, con 95% de confianza'. ¿Qué significa esto?"
tipo: mc
opciones_explicitas:
  - "El intervalo de confianza va aproximadamente de 37% a 43%, y el método usado acierta ese rango en el 95% de las veces que se repite el muestreo"
  - "El candidato tiene exactamente 40% de intención de voto, sin ningún margen de error real"
  - "El 95% de los votantes fueron encuestados"
respuesta: "El intervalo de confianza va aproximadamente de 37% a 43%, y el método usado acierta ese rango en el 95% de las veces que se repite el muestreo"

explicacion: |
  Es la aplicación directa de intervalo de confianza a una encuesta
  real.
```

### 15 — z* de 99% es mayor que el de 95%

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "intermedio"
  tags: ["intervalo_confianza"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de z* para 99% de confianza (2,576) es mayor que el de 95% de confianza (1,96)."

explicacion: |
  A mayor nivel de confianza exigido, mayor el z* correspondiente.
```

### 16 — Problema: comparar intervalo al 99% vs. 95%

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  error_estandar: 5

respuesta: (2.576 * error_estandar) > (1.96 * error_estandar)
tipo: vf

enunciado: "Con el mismo error estándar de {error_estandar}, ¿el margen de error con 99% de confianza (z*=2,576) es MAYOR que el margen de error con 95% de confianza (z*=1,96)?"

explicacion: |
  Un intervalo de 99% de confianza siempre es más ancho que uno de
  95%, con los mismos datos de base.
```

### 17 — Problema: intervalo con 90% de confianza

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  media_muestral: uno_de([80, 120])
  error_estandar: uno_de([4, 6])

respuesta: redondear(media_muestral - 1.645 * error_estandar, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una muestra dio media {media_muestral} con error estándar {error_estandar}. Con 90% de confianza (z*=1,645), ¿cuál es el límite INFERIOR del intervalo?"

pasos:
  - "margen de error = 1,645 × {error_estandar} = {redondear(1.645 * error_estandar, 2)}"
  - "límite inferior = {media_muestral} − {redondear(1.645 * error_estandar, 2)} = {redondear(media_muestral - 1.645 * error_estandar, 2)}"

explicacion: |
  Un nivel de confianza más bajo (90%) usa un z* más chico que 95%,
  dando un intervalo más angosto.
```

### 18 — Por qué reducir el margen de error requiere más muestra

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "aplicacion"]

enunciado: "Una encuestadora quiere reducir su margen de error sin bajar el nivel de confianza del 95%. ¿Qué puede hacer?"
tipo: mc
opciones_explicitas:
  - "Aumentar el tamaño de la muestra, para reducir el error estándar (y con él, el margen de error)"
  - "Bajar el nivel de confianza al 90%, sin tocar el tamaño de la muestra"
  - "No hay ninguna forma de reducir el margen de error sin bajar la confianza"
respuesta: "Aumentar el tamaño de la muestra, para reducir el error estándar (y con él, el margen de error)"

explicacion: |
  Es el único camino que mejora precisión sin sacrificar confianza:
  conseguir más datos.
```

### 19 — Problema: dos encuestas, mismo n, distinta confianza

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "avanzado"
  tags: ["intervalo_confianza", "problema"]

variables:
  error_estandar: 2.5

respuesta: redondear((2.576 - 1.645) * error_estandar, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con error estándar {error_estandar}, ¿cuál es la diferencia entre el margen de error al 99% de confianza (z*=2,576) y al 90% de confianza (z*=1,645)?"

pasos:
  - "margen al 99% = 2,576 × {error_estandar} = {redondear(2.576 * error_estandar, 2)}"
  - "margen al 90% = 1,645 × {error_estandar} = {redondear(1.645 * error_estandar, 2)}"
  - "Diferencia = {redondear((2.576 - 1.645) * error_estandar, 2)}"

explicacion: |
  Cuanto más alto el nivel de confianza exigido, más grande el
  margen de error resultante, con el mismo error estándar.
```

### 20 — Cierre: para qué sirve el intervalo de confianza

```
metadata:
  materia: "matematicas"
  tema: "intervalo_de_confianza"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve reportar un intervalo de confianza en vez de un único número?"
tipo: mc
opciones_explicitas:
  - "Para comunicar de forma honesta la incertidumbre de una estimación basada en una muestra, junto con qué tan confiable es el método usado"
  - "Para ocultar el verdadero resultado de un estudio"
  - "Sólo sirve cuando la muestra es extremadamente grande"
respuesta: "Para comunicar de forma honesta la incertidumbre de una estimación basada en una muestra, junto con qué tan confiable es el método usado"

explicacion: |
  Es el fundamento de `../test-de-hipotesis/`, el módulo que sigue:
  ambos usan la misma maquinaria (error estándar + z*) para tomar
  decisiones estadísticas.
```
