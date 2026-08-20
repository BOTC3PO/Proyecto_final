# Economía — El sueldo promedio de un país (cuestionario, 20 preguntas VBLang)

> Tema: `C1` (ángulo mecánico). Ver `teoria.md` en esta misma carpeta.

---

### 1 — Por qué la distribución de ingresos no es simétrica

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "basico"
  tags: ["distribucion_ingresos", "vocabulario"]

enunciado: "¿Por qué la distribución de ingresos de un país real no es simétrica como una campana de Gauss?"
tipo: mc
opciones_explicitas:
  - "Porque la mayoría gana ingresos bajos o medios, mientras que una minoría chica gana muchísimo más — una 'cola larga' hacia la derecha"
  - "Porque todos los países tienen exactamente los mismos ingresos"
  - "Porque los ingresos siempre se distribuyen de forma perfectamente simétrica"
respuesta: "Porque la mayoría gana ingresos bajos o medios, mientras que una minoría chica gana muchísimo más — una 'cola larga' hacia la derecha"

explicacion: |
  Es la asimetría que hace que la media y la mediana difieran tanto en
  ingresos.
```

### 2 — La media siempre es mayor o igual a la mediana en ingresos

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "intermedio"
  tags: ["distribucion_ingresos"]

respuesta: verdadero
tipo: vf

enunciado: "En una distribución de ingresos real (con cola larga hacia la derecha), la media siempre es mayor o igual que la mediana — nunca al revés."

explicacion: |
  La cola de ingresos altos siempre 'tira' del promedio hacia arriba,
  nunca hacia abajo.
```

### 3 — Problema: calcular la media con un ingreso atípico

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["distribucion_ingresos", "problema"]

variables:
  sueldo_base: uno_de([400000, 500000])
  cantidad_base: 9
  sueldo_alto: uno_de([8000000, 10000000])

respuesta: redondear((sueldo_base * cantidad_base + sueldo_alto) / (cantidad_base + 1), 0)
tipo: input

enunciado: "En un grupo de 10 personas, {cantidad_base} ganan ${sueldo_base} cada una, y 1 gana ${sueldo_alto}. ¿Cuál es la media de ingresos del grupo?"

pasos:
  - "Media = ({cantidad_base}×{sueldo_base} + {sueldo_alto}) / 10 = {redondear((sueldo_base * cantidad_base + sueldo_alto) / (cantidad_base + 1), 0)}"

explicacion: |
  Una sola persona con un ingreso muy alto sube muchísimo el promedio
  de todo el grupo.
```

### 4 — Problema: comparar la media contra el sueldo típico

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["distribucion_ingresos", "problema"]

variables:
  sueldo_base: 500000
  cantidad_base: 9
  sueldo_alto: 10000000
  media: (sueldo_base * cantidad_base + sueldo_alto) / (cantidad_base + 1)

respuesta: redondear(media / sueldo_base, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con la media de ${redondear(media, 0)} calculada antes, ¿cuántas veces más grande es la media respecto del sueldo típico (${sueldo_base}, lo que gana el 90% del grupo)?"

pasos:
  - "Razón = {redondear(media, 0)} / {sueldo_base} = {redondear(media / sueldo_base, 2)}"

explicacion: |
  La media casi triplica lo que gana la mayoría real del grupo — no
  representa a 'la persona típica'.
```

### 5 — Qué son los deciles aplicados a ingresos

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "intermedio"
  tags: ["deciles", "vocabulario"]

enunciado: "¿Para qué sirven los deciles al describir la distribución de ingresos de un país?"
tipo: mc
opciones_explicitas:
  - "Para comparar distintos puntos de la distribución (por ejemplo, el ingreso 'del medio' contra el del 10% que más gana), dando una imagen más completa que un solo promedio"
  - "Para calcular directamente el sueldo promedio, sin necesitar ningún otro dato"
  - "Sólo sirven para ordenar alfabéticamente los ingresos"
respuesta: "Para comparar distintos puntos de la distribución (por ejemplo, el ingreso 'del medio' contra el del 10% que más gana), dando una imagen más completa que un solo promedio"

explicacion: |
  Son la aplicación de `../../matematica/tablas-de-frecuencia-cuartiles-percentiles-y-varianza/`
  a ingresos reales.
```

### 6 — El decil 5 es la mediana

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "intermedio"
  tags: ["deciles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El decil 5 de una distribución de ingresos (el punto que deja al 50% de la población por debajo) es exactamente lo mismo que la mediana."

explicacion: |
  Un decil es sólo otra forma de nombrar una posición relativa dentro
  de los datos ordenados, igual que un percentil.
```

### 7 — Qué es el coeficiente de Gini

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "intermedio"
  tags: ["gini", "vocabulario"]

enunciado: "¿Qué mide el coeficiente de Gini?"
tipo: mc
opciones_explicitas:
  - "Qué tan desigual es una distribución de ingresos, en un único número entre 0 (igualdad perfecta) y 1 (desigualdad total)"
  - "El ingreso promedio exacto de un país, en moneda local"
  - "La cantidad total de personas que trabajan en un país"
respuesta: "Qué tan desigual es una distribución de ingresos, en un único número entre 0 (igualdad perfecta) y 1 (desigualdad total)"

explicacion: |
  Es la medida estándar internacional para comparar desigualdad de
  ingresos entre países o a lo largo del tiempo.
```

### 8 — Interpretar los extremos del coeficiente de Gini

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "basico"
  tags: ["gini"]

respuesta: verdadero
tipo: vf

enunciado: "Un coeficiente de Gini de 0 representa igualdad perfecta (todos ganan exactamente lo mismo), y un Gini de 1 representa desigualdad total (una sola persona concentra todo el ingreso)."

explicacion: |
  Son los dos casos extremos teóricos; los países reales están en
  algún punto intermedio.
```

### 9 — Problema: comparar un grupo homogéneo contra uno con un atípico

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["distribucion_ingresos", "problema"]

variables:
  sueldo_parejo: 600000
  sueldo_alto: 6000000

respuesta: (sueldo_parejo * 9 + sueldo_alto) / 10 > sueldo_parejo
tipo: vf

enunciado: "Grupo A: 10 personas ganan ${sueldo_parejo} cada una (grupo homogéneo). Grupo B: 9 personas ganan ${sueldo_parejo} y 1 persona gana ${sueldo_alto}. ¿La media del Grupo B es MAYOR que la del Grupo A, aunque 9 de cada 10 personas ganen exactamente lo mismo en ambos grupos?"

explicacion: |
  Una sola persona con ingreso muy alto alcanza para subir la media
  de todo el grupo, aunque no cambie nada para el resto.
```

### 10 — Por qué "el sueldo promedio subió" puede engañar

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "basico"
  tags: ["distribucion_ingresos", "aplicacion"]

enunciado: "Una noticia dice: 'el sueldo promedio del país subió 10% este año'. ¿Por qué esta afirmación puede ser matemáticamente cierta y, al mismo tiempo, no significar que la mayoría de la gente esté ganando más?"
tipo: mc
opciones_explicitas:
  - "Porque un aumento grande en los ingresos más altos alcanza para subir el promedio, sin que el ingreso 'típico' (la mediana) se haya movido casi nada"
  - "Porque las noticias sobre economía siempre mienten a propósito"
  - "No hay ninguna forma de que esto pase: si el promedio sube, todos ganan más automáticamente"
respuesta: "Porque un aumento grande en los ingresos más altos alcanza para subir el promedio, sin que el ingreso 'típico' (la mediana) se haya movido casi nada"

explicacion: |
  Es exactamente la trampa que `../../matematica/cual-miente-y-cuando/`
  advierte en general, aplicada a un caso económico real.
```

### 11 — Problema: la mediana no se mueve con el outlier

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["distribucion_ingresos", "problema"]

variables:
  sueldo_base: 500000

respuesta: sueldo_base
tipo: input

enunciado: "En un grupo de 10 personas, 9 ganan ${sueldo_base} y 1 gana muchísimo más. ¿Cuál es la MEDIANA de ingresos del grupo (ordenando los 10 valores)?"

explicacion: |
  Con 9 de 10 valores iguales, la mediana (el valor del medio) sigue
  siendo ${sueldo_base}, sin importar cuánto gane la décima persona.
```

### 12 — Agregar un ingreso extremo mueve la media, no la mediana

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["distribucion_ingresos"]

respuesta: verdadero
tipo: vf

enunciado: "Agregar a un grupo una sola persona con un ingreso extremadamente alto sube mucho la media del grupo, pero casi no mueve la mediana."

explicacion: |
  Es la diferencia central entre ambas medidas frente a valores
  atípicos.
```

### 13 — Problema: efecto del tamaño del ingreso atípico

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["distribucion_ingresos", "problema"]

variables:
  sueldo_base: 500000
  sueldo_alto: uno_de([5000000, 50000000])

respuesta: redondear((sueldo_base * 9 + sueldo_alto) / 10, 0)
tipo: input

enunciado: "Con 9 personas ganando ${sueldo_base} y 1 persona ganando ${sueldo_alto}, ¿cuál es la media del grupo de 10?"

pasos:
  - "Media = (9×{sueldo_base} + {sueldo_alto}) / 10 = {redondear((sueldo_base * 9 + sueldo_alto) / 10, 0)}"

explicacion: |
  Cuanto más extremo el ingreso atípico, más se aleja la media del
  ingreso típico del resto del grupo.
```

### 14 — Por qué conviene reportar la mediana junto al promedio

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "intermedio"
  tags: ["distribucion_ingresos", "aplicacion"]

enunciado: "¿Por qué las estadísticas de ingresos serias suelen reportar la mediana además del promedio?"
tipo: mc
opciones_explicitas:
  - "Porque la mediana describe mejor lo que gana 'la persona típica', sin distorsionarse por los ingresos muy altos de una minoría"
  - "Porque la mediana siempre da un número más alto que el promedio"
  - "Porque el promedio es matemáticamente incorrecto y no debería usarse nunca"
respuesta: "Porque la mediana describe mejor lo que gana 'la persona típica', sin distorsionarse por los ingresos muy altos de una minoría"

explicacion: |
  Ninguna de las dos medidas es 'incorrecta' — cada una responde una
  pregunta distinta, como ya explicó
  `../../matematica/cual-miente-y-cuando/`.
```

### 15 — Relación con "cuál miente y cuándo"

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "basico"
  tags: ["distribucion_ingresos", "aplicacion"]

enunciado: "¿Qué relación tiene este tema con `../../matematica/cual-miente-y-cuando/`?"
tipo: mc
opciones_explicitas:
  - "Es la aplicación concreta de esa idea general (cuándo un promedio distorsiona) al caso real más citado: la distribución de ingresos de un país"
  - "No tiene ninguna relación real"
  - "Reemplaza por completo la necesidad de esa idea general"
respuesta: "Es la aplicación concreta de esa idea general (cuándo un promedio distorsiona) al caso real más citado: la distribución de ingresos de un país"

explicacion: |
  El sueldo promedio de un país es, justamente, el ejemplo clásico
  usado para explicar cuándo la media 'miente'.
```

### 16 — Problema: comparar decil 5 y decil 9

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["deciles", "problema"]

variables:
  decil5: uno_de([400000, 500000])
  decil9: uno_de([2000000, 3000000])

respuesta: redondear(decil9 / decil5, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "El ingreso del decil 5 (la mitad de la población) es ${decil5}, y el del decil 9 (el 10% que más gana) es ${decil9}. ¿Cuántas veces más gana el decil 9 respecto del decil 5?"

pasos:
  - "Razón = {decil9} / {decil5} = {redondear(decil9 / decil5, 2)}"

explicacion: |
  Esta razón (a veces llamada 'ratio 90/50') es otra forma de medir
  desigualdad, más específica que el coeficiente de Gini.
```

### 17 — Gini más alto implica mayor distancia media-mediana

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["gini", "distribucion_ingresos"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más alto es el coeficiente de Gini de un país (más desigualdad), mayor tiende a ser la distancia entre la media y la mediana de sus ingresos."

explicacion: |
  Más desigualdad significa una cola de ingresos altos más 'estirada',
  que separa más a la media de la mediana.
```

### 18 — Aplicación: una política pública que sólo mira el promedio

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["distribucion_ingresos", "aplicacion"]

enunciado: "Un gobierno diseña un beneficio social usando como referencia sólo 'el ingreso promedio del país', sin mirar la mediana ni la distribución completa. ¿Qué riesgo tiene este enfoque?"
tipo: mc
opciones_explicitas:
  - "Puede fijar el umbral demasiado alto, dejando afuera a gran parte de la población que gana bien por debajo del promedio (arrastrado hacia arriba por los ingresos más altos)"
  - "Ningún riesgo: el promedio siempre representa bien a toda la población"
  - "El riesgo es que el beneficio le llegue a muy poca gente, sin ninguna razón estadística de por medio"
respuesta: "Puede fijar el umbral demasiado alto, dejando afuera a gran parte de la población que gana bien por debajo del promedio (arrastrado hacia arriba por los ingresos más altos)"

explicacion: |
  Es una consecuencia práctica real de confundir 'promedio' con
  'típico' al diseñar política pública.
```

### 19 — Problema: mismo promedio, distinta mediana

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["distribucion_ingresos", "problema"]

variables:
  promedio: 1000000
  mediana_pais_a: 900000
  mediana_pais_b: 500000

respuesta: mediana_pais_a > mediana_pais_b
tipo: vf

enunciado: "País A y País B tienen el MISMO ingreso promedio (${promedio}), pero País A tiene mediana ${mediana_pais_a} y País B tiene mediana ${mediana_pais_b}. ¿Vive mejor 'la persona típica' del País A que la del País B, a pesar de que ambos países tengan el mismo promedio?"

explicacion: |
  Con el mismo promedio, el país con mediana más alta y más cercana al
  promedio tiene una distribución de ingresos más pareja (menos
  desigual).
```

### 20 — Cierre: para qué sirve entender esta mecánica

```
metadata:
  materia: "economia"
  tema: "sueldo_promedio_pais"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la diferencia entre media y mediana aplicada a los ingresos de un país?"
tipo: mc
opciones_explicitas:
  - "Para leer con pensamiento crítico estadísticas de ingresos, sin confundir 'el promedio subió' con 'a la mayoría le está yendo mejor'"
  - "Sólo sirve para calcular impuestos"
  - "Sólo aplica a países con muy poca población"
respuesta: "Para leer con pensamiento crítico estadísticas de ingresos, sin confundir 'el promedio subió' con 'a la mayoría le está yendo mejor'"

explicacion: |
  El ángulo de cómo esta cifra se usa (y a veces se tergiversa) en el
  debate público sigue en `../../civica/sueldo-promedio-pais/`.
```
