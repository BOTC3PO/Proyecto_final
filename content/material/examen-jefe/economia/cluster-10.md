# Examen jefe — [PENDIENTE #775]

> Logro #775. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **65 preguntas totales** en 5/5 secciones.

---

## Sección: sueldo-promedio-pais (20 preguntas)

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

## Sección: marxismo (11 preguntas)

```
metadata:
  materia: "economia"
  tema: "marxismo"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué es la \"plusvalía\", concepto central del marxismo?"
tipo: mc
opciones_explicitas:
  - "La diferencia entre el valor que un trabajador produce y el salario que recibe a cambio"
  - "El impuesto que cobra el Estado sobre las ganancias"
  - "La diferencia entre el precio de exportación e importación de un país"
respuesta: "La diferencia entre el valor que un trabajador produce y el salario que recibe a cambio"

explicacion: |
  Marx sostiene que esa diferencia queda en manos de quien es dueño
  del medio de producción.
```

```
metadata:
  materia: "economia"
  tema: "marxismo"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según el marxismo, ¿cuál es el motor de la historia económica?"
tipo: mc
opciones_explicitas:
  - "La lucha entre clases sociales"
  - "La acumulación de oro y plata"
  - "La libre competencia entre empresas"
respuesta: "La lucha entre clases sociales"

explicacion: |
  Específicamente, entre quienes poseen los medios de producción y
  quienes sólo poseen su fuerza de trabajo.
```

```
metadata:
  materia: "economia"
  tema: "marxismo"
  nivel: "basico"
  tags: ["corrientes", "autor"]

enunciado: "¿Quién escribió *El Capital* (1867), texto de referencia del marxismo?"
tipo: mc
opciones_explicitas:
  - "Karl Marx"
  - "Adam Smith"
  - "John Maynard Keynes"
respuesta: "Karl Marx"

explicacion: |
  *El Capital* es la obra central del marxismo como corriente
  económica.
```

```
metadata:
  materia: "economia"
  tema: "marxismo"
  nivel: "avanzado"
  tags: ["corrientes", "problema"]

enunciado: "¿Qué diferencia el marxismo (según se presenta a sí mismo) del socialismo utópico de Robert Owen?"
tipo: mc
opciones_explicitas:
  - "Un análisis sistemático de las leyes del capitalismo como sistema, del que se desprende una estrategia de transformación a esa misma escala"
  - "El marxismo no propone ningún cambio en la organización económica"
  - "El marxismo, a diferencia de Owen, defiende la propiedad privada de los medios de producción"
respuesta: "Un análisis sistemático de las leyes del capitalismo como sistema, del que se desprende una estrategia de transformación a esa misma escala"

explicacion: |
  A diferencia de Owen (una fábrica, una comunidad como ejemplo), el
  marxismo se presenta como un análisis del sistema entero y de cómo
  transformarlo en esa escala.
```

```
metadata:
  materia: "economia"
  tema: "marxismo"
  nivel: "avanzado"
  tags: ["corrientes", "problema"]

enunciado: "¿Cuál es la objeción central que plantea Ludwig von Mises al marxismo en *El cálculo económico en el sistema socialista* (1920)?"
tipo: mc
opciones_explicitas:
  - "Sin un mercado de medios de producción no hay precios reales para ellos, y sin precios no se puede calcular si un proceso productivo es eficiente"
  - "Que la plusvalía no existe en ningún sistema económico"
  - "Que la lucha de clases nunca ocurrió realmente en la historia"
respuesta: "Sin un mercado de medios de producción no hay precios reales para ellos, y sin precios no se puede calcular si un proceso productivo es eficiente"

explicacion: |
  Es una objeción económica puntual, no política ni moral: sin mercado
  de precios para maquinaria/materias primas/terrenos industriales, no
  hay forma de comparar si un uso de esos recursos es más eficiente
  que otro.
```

```
metadata:
  materia: "economia"
  tema: "marxismo"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Según Mises, dentro de una empresa capitalista cada departamento puede comparar costos y calcular eficiencia porque existe un mercado de precios para todo lo que compra y vende."

explicacion: |
  Ese mercado de precios (de materia prima, maquinaria, mano de obra)
  es, para Mises, la herramienta que permite el cálculo económico —y
  la que, según su argumento, desaparece sin propiedad privada de los
  medios de producción.
```

```
metadata:
  materia: "economia"
  tema: "marxismo"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿A qué corriente económica pertenece Ludwig von Mises, autor de la objeción al cálculo económico socialista?"
tipo: mc
opciones_explicitas:
  - "La escuela austríaca"
  - "El keynesianismo"
  - "El socialismo utópico"
respuesta: "La escuela austríaca"

explicacion: |
  Ver `../liberalismo-clasico-y-escuela-austriaca/` — Mises es uno de
  los autores centrales de esa corriente.
```

```
metadata:
  materia: "economia"
  tema: "marxismo"
  nivel: "avanzado"
  tags: ["corrientes", "contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Karl Marx murió en 1883, antes de que Mises formulara su objeción sobre el cálculo económico (1920), por lo que nunca respondió a ese argumento en particular."

explicacion: |
  Distintos economistas marxistas y socialistas del siglo XX
  propusieron respuestas propias después de Marx (como mecanismos de
  "precios sombra"), pero el propio Marx no llegó a hacerlo.
```

```
metadata:
  materia: "economia"
  tema: "marxismo"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Este tema describe tanto lo que sostiene el marxismo como la objeción de Mises con la misma seriedad, sin tomar partido sobre cuál de las dos posturas tiene razón."

explicacion: |
  Es el mismo criterio de neutralidad que se aplica a todo el bloque
  de corrientes de pensamiento económico.
```

```
metadata:
  materia: "economia"
  tema: "marxismo"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según el marxismo, en el capitalismo, ¿entre quiénes se da la lucha de clases central?"
tipo: mc
opciones_explicitas:
  - "Entre quienes poseen los medios de producción y quienes sólo poseen su fuerza de trabajo"
  - "Entre los distintos países que compiten por el comercio internacional"
  - "Entre el Estado y las empresas privadas"
respuesta: "Entre quienes poseen los medios de producción y quienes sólo poseen su fuerza de trabajo"

explicacion: |
  Es la división de clases central del análisis marxista del
  capitalismo.
```

```
metadata:
  materia: "economia"
  tema: "marxismo"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Según el argumento de Mises, los errores de cálculo dentro de una empresa capitalista son iguales de graves e insuperables que la ausencia total de cálculo económico que él atribuye al socialismo."

explicacion: |
  Falso. Mises distingue entre los errores normales de cálculo que
  pueden ocurrir dentro de una empresa capitalista (acotados, dentro
  de un sistema de precios real) y la imposibilidad total de calcular
  que —según su argumento— se da cuando no existe ningún mercado de
  precios para los medios de producción.
```

## Sección: tipo-cambio-fijo (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "basico"
  tags: ["cambiario", "vocabulario"]

enunciado: "¿Qué es el \"tipo de cambio\" de una moneda?"
tipo: mc
opciones_explicitas:
  - "El precio de esa moneda expresado en otra moneda"
  - "La cantidad total de esa moneda que emitió el banco central"
  - "El porcentaje de inflación anual de un país"
respuesta: "El precio de esa moneda expresado en otra moneda"

explicacion: |
  Por ejemplo, cuántos pesos cuesta un dólar.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "basico"
  tags: ["cambiario", "vocabulario"]

enunciado: "¿Qué es un régimen de tipo de cambio fijo?"
tipo: mc
opciones_explicitas:
  - "El banco central se compromete a sostener el valor de su moneda en un número exacto frente a otra"
  - "El valor de la moneda lo determina libremente el mercado, sin ningún compromiso del banco central"
  - "Un régimen donde no existe ninguna moneda extranjera"
respuesta: "El banco central se compromete a sostener el valor de su moneda en un número exacto frente a otra"

explicacion: |
  Es la definición central del régimen fijo.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "intermedio"
  tags: ["cambiario", "vocabulario"]

enunciado: "Si hay más gente que quiere comprar dólares que gente dispuesta a venderlos al precio fijado, ¿qué hace el banco central para sostener el tipo de cambio fijo?"
tipo: mc
opciones_explicitas:
  - "Vende dólares de sus reservas para cubrir esa demanda extra"
  - "Compra dólares con su propia moneda"
  - "No hace nada: el precio sube libremente"
respuesta: "Vende dólares de sus reservas para cubrir esa demanda extra"

explicacion: |
  Usa sus propias reservas para evitar que el precio suba por encima
  del valor fijado.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "intermedio"
  tags: ["cambiario", "vocabulario"]

enunciado: "Si hay más gente que quiere vender dólares que gente dispuesta a comprarlos al precio fijado, ¿qué hace el banco central?"
tipo: mc
opciones_explicitas:
  - "Compra esos dólares con su propia moneda, para que el precio no baje"
  - "Vende dólares de sus reservas"
  - "Prohíbe vender dólares"
respuesta: "Compra esos dólares con su propia moneda, para que el precio no baje"

explicacion: |
  Absorbe el exceso de oferta comprando, para sostener el piso del
  valor fijado.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "basico"
  tags: ["cambiario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una ventaja del tipo de cambio fijo es que le da certeza a quien comercia o invierte con ese país sobre a qué valor va a poder cambiar su dinero."

explicacion: |
  Es la ventaja central: previsibilidad para el comercio y la
  inversión.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "avanzado"
  tags: ["cambiario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un tipo de cambio fijo puede servir como \"ancla\" de las expectativas de inflación: si la gente confía en que el precio del dólar no se va a mover, tiende a esperar menos inflación en general."

explicacion: |
  Es uno de los argumentos a favor del régimen fijo.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "intermedio"
  tags: ["cambiario", "vocabulario"]

enunciado: "¿Qué necesita tener un banco central, en cantidad suficiente, para poder defender un tipo de cambio fijo?"
tipo: mc
opciones_explicitas:
  - "Reservas"
  - "Tasa de interés alta, sin importar las reservas"
  - "Una ley que prohíba comprar dólares"
respuesta: "Reservas"

explicacion: |
  Sin reservas suficientes, el banco central no puede comprar/vender
  para sostener el valor fijado.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "avanzado"
  tags: ["cambiario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si en algún momento las reservas de un banco central no alcanzan para seguir defendiendo el valor fijado, ese banco central no puede sostener la promesa del tipo de cambio fijo."

explicacion: |
  Es el límite estructural de cualquier régimen fijo: depende de la
  disponibilidad de reservas.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "avanzado"
  tags: ["cambiario", "vocabulario"]

enunciado: "¿Qué pierde un país al adoptar un tipo de cambio fijo, en términos de política económica?"
tipo: mc
opciones_explicitas:
  - "Independencia en su política monetaria: no puede usar libremente la tasa de interés o la emisión para otros objetivos"
  - "El derecho a exportar productos al resto del mundo"
  - "La posibilidad de tener un banco central propio"
respuesta: "Independencia en su política monetaria: no puede usar libremente la tasa de interés o la emisión para otros objetivos"

explicacion: |
  Cualquier decisión que presione el tipo de cambio pone en riesgo el
  compromiso de mantenerlo fijo.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "intermedio"
  tags: ["cambiario", "vocabulario"]

enunciado: "¿Qué régimen cambiario tuvo Argentina entre 1991 y 2001, conocido como \"Convertibilidad\"?"
tipo: mc
opciones_explicitas:
  - "Un tipo de cambio fijo, 1 peso = 1 dólar por ley"
  - "Un tipo de cambio flotante sin ninguna intervención"
  - "Argentina no tuvo moneda propia en ese período"
respuesta: "Un tipo de cambio fijo, 1 peso = 1 dólar por ley"

explicacion: |
  Es el ejemplo histórico real citado en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "avanzado"
  tags: ["cambiario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La Convertibilidad terminó en 2001 porque, ante una salida sostenida de reservas, el país no pudo seguir defendiendo la paridad fijada."

explicacion: |
  Es la misma mecánica general (agotamiento de reservas) aplicada a
  este caso histórico concreto.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "intermedio"
  tags: ["cambiario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Hong Kong mantiene, desde 1983, un tipo de cambio fijo de su moneda frente al dólar estadounidense."

explicacion: |
  Es un ejemplo real de tipo de cambio fijo vigente hoy.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "intermedio"
  tags: ["cambiario", "problema"]

enunciado: "Un banco central vende dólares de sus reservas para frenar una suba del tipo de cambio. ¿Qué tipo de acción es esta?"
tipo: mc
opciones_explicitas:
  - "Una intervención típica de un régimen de tipo de cambio fijo (o una variante administrada de uno flotante)"
  - "Una acción que sólo existe bajo un régimen totalmente flotante y sin intervención"
  - "Una devaluación"
respuesta: "Una intervención típica de un régimen de tipo de cambio fijo (o una variante administrada de uno flotante)"

explicacion: |
  Es exactamente el mecanismo de defensa del valor fijado descripto en
  la teoría.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "intermedio"
  tags: ["cambiario", "problema"]

enunciado: "Una empresa que planea una inversión a 5 años en un país prefiere que ese país tenga un tipo de cambio fijo antes que uno muy volátil. ¿Por qué le conviene?"
tipo: mc
opciones_explicitas:
  - "Porque puede planificar sabiendo de antemano a qué valor va a poder cambiar su dinero"
  - "Porque un tipo de cambio fijo siempre sube con el tiempo"
  - "Porque elimina completamente el riesgo de cualquier inversión"
respuesta: "Porque puede planificar sabiendo de antemano a qué valor va a poder cambiar su dinero"

explicacion: |
  Es la ventaja de previsibilidad, no una garantía de ganancia.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "intermedio"
  tags: ["cambiario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país elige, en un momento dado, entre un régimen de tipo de cambio fijo o uno flotante: son dos alternativas distintas, no dos cosas que se aplican al mismo tiempo de la misma forma."

explicacion: |
  Son regímenes alternativos, aunque existen variantes intermedias
  (flotación administrada) que combinan elementos de ambos.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "avanzado"
  tags: ["cambiario", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de cómo un banco central defiende un tipo de cambio fijo ante una fuerte demanda de dólares."
opciones_explicitas:
  - "Si la demanda persiste y las reservas no alcanzan, el régimen fijo queda en riesgo"
  - "Las reservas del banco central se reducen"
  - "Sube la demanda de dólares al precio fijado"
  - "El banco central vende dólares de sus reservas para cubrir esa demanda"
respuesta_orden: ["Sube la demanda de dólares al precio fijado", "El banco central vende dólares de sus reservas para cubrir esa demanda", "Las reservas del banco central se reducen", "Si la demanda persiste y las reservas no alcanzan, el régimen fijo queda en riesgo"]

explicacion: |
  Cada paso es consecuencia del anterior: defender el precio fijado
  consume reservas, y las reservas no son infinitas.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "avanzado"
  tags: ["cambiario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Bajo un tipo de cambio fijo, el banco central no puede usar la tasa de interés con total libertad para otros objetivos (como estimular el empleo), porque eso podría poner en riesgo el valor fijado."

explicacion: |
  Es la misma pérdida de independencia monetaria explicada en la
  teoría.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "avanzado"
  tags: ["cambiario", "problema"]

enunciado: "Dos países tienen tipo de cambio fijo. Uno tiene reservas muy altas, el otro reservas muy bajas y en caída. ¿Cuál está en mejores condiciones de sostener su régimen fijo ante una corrida?"
tipo: mc
opciones_explicitas:
  - "El de reservas altas"
  - "El de reservas bajas"
  - "Da exactamente igual el nivel de reservas"
respuesta: "El de reservas altas"

explicacion: |
  La capacidad de sostener un tipo de cambio fijo depende
  directamente de la disponibilidad de reservas.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "basico"
  tags: ["cambiario"]

tipo: completar
enunciado: "Completá: bajo un tipo de cambio fijo, el banco central se compromete a sostener el valor de su moneda usando sus ___ (lo que compra/vende para defenderlo)."
respuestas_validas:
  - "reservas"

explicacion: |
  Es la herramienta central para defender un tipo de cambio fijo.
```

```
metadata:
  materia: "economia"
  tema: "tipo_cambio_fijo"
  nivel: "basico"
  tags: ["cambiario", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un tipo de cambio fijo le da previsibilidad a cambio de que el banco central necesite reservas suficientes para defenderlo, y de perder independencia en su política monetaria."

explicacion: |
  Es la idea central de todo el tema: ventaja y costo van juntos.
```

## Sección: economia-feminista-y-del-cuidado (6 preguntas)

```
metadata:
  materia: "economia"
  tema: "economia_feminista_y_del_cuidado"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué señala la economía feminista y del cuidado sobre el PBI?"
tipo: mc
opciones_explicitas:
  - "Que no cuenta el trabajo doméstico y de cuidado no remunerado, aunque sea un trabajo real que sostiene la economía"
  - "Que cuenta dos veces el trabajo doméstico no remunerado"
  - "Que sólo debería medirse en base al trabajo doméstico"
respuesta: "Que no cuenta el trabajo doméstico y de cuidado no remunerado, aunque sea un trabajo real que sostiene la economía"

explicacion: |
  Es el señalamiento central de Marilyn Waring en *If Women Counted*
  (1988): al no tener precio de mercado, ese trabajo queda invisible
  en las estadísticas oficiales.
```

```
metadata:
  materia: "economia"
  tema: "economia_feminista_y_del_cuidado"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El PBI (ver el tema de PBI e inflación) sólo cuenta la producción que pasa por el mercado, por eso el trabajo doméstico no remunerado queda fuera de esa medición."

explicacion: |
  Es la conexión directa entre este tema y `pbi-e-inflacion/`: el
  mismo concepto de PBI, visto desde un ángulo distinto.
```

```
metadata:
  materia: "economia"
  tema: "economia_feminista_y_del_cuidado"
  nivel: "basico"
  tags: ["corrientes", "autor"]

enunciado: "¿Quién escribió *If Women Counted* (1988), texto de referencia de la economía feminista y del cuidado?"
tipo: mc
opciones_explicitas:
  - "Marilyn Waring"
  - "Rose Friedman"
  - "Wilhelm Röpke"
respuesta: "Marilyn Waring"

explicacion: |
  Plantea el señalamiento puntual sobre qué cuenta y qué no cuenta el
  PBI, es la corriente más reciente de este bloque.
```

```
metadata:
  materia: "economia"
  tema: "economia_feminista_y_del_cuidado"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿De qué dos corrientes anteriores de este bloque parte, como punto de partida crítico, la economía feminista y del cuidado?"
tipo: mc
opciones_explicitas:
  - "El liberalismo clásico y el marxismo"
  - "El mercantilismo y la fisiocracia"
  - "El keynesianismo y el ordoliberalismo"
respuesta: "El liberalismo clásico y el marxismo"

explicacion: |
  Del liberalismo clásico toma la crítica a cómo el mercado mide la
  actividad económica; del marxismo, la idea de poner el foco en el
  trabajo como fuente de valor.
```

```
metadata:
  materia: "economia"
  tema: "economia_feminista_y_del_cuidado"
  nivel: "avanzado"
  tags: ["corrientes", "orden"]

tipo: ordenar
enunciado: "Ordená estas corrientes de pensamiento económico según cuándo aparecieron, de la más antigua a la más reciente."
opciones_explicitas:
  - "Marxismo"
  - "Mercantilismo"
  - "Neoliberalismo"
  - "Economía feminista y del cuidado"
  - "Socialismo utópico"
  - "Keynesianismo"
  - "Liberalismo clásico"
  - "Ordoliberalismo"
  - "Fisiocracia"
respuesta_orden: ["Mercantilismo", "Fisiocracia", "Liberalismo clásico", "Socialismo utópico", "Marxismo", "Keynesianismo", "Ordoliberalismo", "Neoliberalismo", "Economía feminista y del cuidado"]

explicacion: |
  Mercantilismo (s. XVI-XVIII), fisiocracia (1758), liberalismo
  clásico (1776), socialismo utópico (1813-1816), marxismo (1867),
  keynesianismo (1936), ordoliberalismo (1944), neoliberalismo (desde
  los 80, con el monetarismo de 1962 como antecedente), economía
  feminista y del cuidado (1988). Esto es cronología verificable, no
  un ranking de cuál es mejor.
```

```
metadata:
  materia: "economia"
  tema: "economia_feminista_y_del_cuidado"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada corriente de este bloque ofrece una lógica interna propia y coherente para explicar cómo funciona la economía — conocerlas todas permite entender un debate económico actual, sin necesidad de adoptar una sola como la única válida."

explicacion: |
  Es la idea de cierre de todo el bloque de corrientes de pensamiento
  económico (`E28a`-`E28i`).
```

## Sección: keynesianismo (8 preguntas)

```
metadata:
  materia: "economia"
  tema: "keynesianismo"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué propone el keynesianismo frente a una crisis económica con desempleo alto?"
tipo: mc
opciones_explicitas:
  - "Que el Estado aumente el gasto público para sostener la demanda y el empleo, aunque implique déficit fiscal temporal"
  - "Que el Estado reduzca el gasto público al mínimo posible"
  - "Que el Estado fije el precio de todos los bienes"
respuesta: "Que el Estado aumente el gasto público para sostener la demanda y el empleo, aunque implique déficit fiscal temporal"

explicacion: |
  Surge como respuesta a la Gran Depresión de la década de 1930.
```

```
metadata:
  materia: "economia"
  tema: "keynesianismo"
  nivel: "intermedio"
  tags: ["corrientes", "contexto"]

respuesta: verdadero
tipo: vf

enunciado: "El keynesianismo surgió como respuesta a la Gran Depresión, cuestionando la idea de que un mercado libre siempre se autorregula rápido frente a una crisis."

explicacion: |
  Es el contexto histórico que originó esta corriente.
```

```
metadata:
  materia: "economia"
  tema: "keynesianismo"
  nivel: "basico"
  tags: ["corrientes", "autor"]

enunciado: "¿Quién escribió la *Teoría general del empleo, el interés y el dinero* (1936), texto de referencia del keynesianismo?"
tipo: mc
opciones_explicitas:
  - "John Maynard Keynes"
  - "Friedrich Hayek"
  - "Thomas Mun"
respuesta: "John Maynard Keynes"

explicacion: |
  Da nombre a la corriente: keynesianismo.
```

```
metadata:
  materia: "economia"
  tema: "keynesianismo"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según el keynesianismo, ¿por qué una caída inicial del consumo puede retroalimentarse en una crisis prolongada?"
tipo: mc
opciones_explicitas:
  - "Porque menos consumo lleva a menos producción, luego a menos empleo, y eso a su vez a todavía menos consumo"
  - "Porque el Estado siempre sube los impuestos apenas empieza una crisis"
  - "Porque el mercado siempre corrige esa caída en menos de un día"
respuesta: "Porque menos consumo lleva a menos producción, luego a menos empleo, y eso a su vez a todavía menos consumo"

explicacion: |
  Es la espiral que, según el keynesianismo, nada dentro del propio
  mercado frena por sí sola, y que justifica la intervención estatal.
```

```
metadata:
  materia: "economia"
  tema: "keynesianismo"
  nivel: "intermedio"
  tags: ["corrientes", "problema"]

enunciado: "Un gobierno aumenta fuertemente el gasto público durante una recesión, para sostener el empleo aunque eso genere déficit fiscal. ¿Con qué corriente se corresponde mejor esta decisión?"
tipo: mc
opciones_explicitas:
  - "Keynesianismo"
  - "Escuela austriaca"
  - "Fisiocracia"
respuesta: "Keynesianismo"

explicacion: |
  Es exactamente la receta central del keynesianismo frente a una
  crisis.
```

```
metadata:
  materia: "economia"
  tema: "keynesianismo"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para el keynesianismo, el gasto público extra durante una crisis puede implicar que el Estado gaste más de lo que recauda en ese momento, con la idea de volver a un presupuesto más equilibrado cuando la economía se recupere."

explicacion: |
  Es la lógica del déficit fiscal temporal: gastar más ahora para
  reactivar la demanda, no como política permanente.
```

```
metadata:
  materia: "economia"
  tema: "keynesianismo"
  nivel: "avanzado"
  tags: ["corrientes", "problema"]

respuesta: falso
tipo: vf

enunciado: "El keynesianismo rechaza por completo la idea del liberalismo clásico de que el mercado es un mecanismo central de coordinación económica."

explicacion: |
  Falso. El keynesianismo no rechaza esa confianza en el mercado —
  sólo cuestiona que funcione sin fallas en todo momento, y por eso
  propone una intervención puntual en los momentos de crisis, no un
  reemplazo del sistema.
```

```
metadata:
  materia: "economia"
  tema: "keynesianismo"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué dos corrientes de este bloque parten del keynesianismo, discutiendo cuánto y cómo debe intervenir el Estado el resto del tiempo (fuera de una crisis puntual)?"
tipo: mc
opciones_explicitas:
  - "El ordoliberalismo y el neoliberalismo"
  - "El mercantilismo y la fisiocracia"
  - "El socialismo utópico y el marxismo"
respuesta: "El ordoliberalismo y el neoliberalismo"

explicacion: |
  Ambas corrientes dialogan con el keynesianismo desde ángulos
  distintos sobre el rol del Estado en la economía.
```

