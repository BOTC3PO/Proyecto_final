# Examen jefe — Dominio de Soluciones y Electrones

> Logro #142. Resolviste el parcial integrando concentraciones, configuraciones y electrolisis. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **112 preguntas totales** en 5/5 secciones.

---

## Sección: concentracion-de-una-solucion (26 preguntas)

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion", "vocabulario"]

enunciado: "¿Qué es una solución en química?"
tipo: mc
opciones_explicitas:
  - "Una mezcla homogénea de un soluto disuelto en un solvente"
  - "Cualquier mezcla, homogénea o no"
  - "Un compuesto químico puro"
respuesta: "Una mezcla homogénea de un soluto disuelto en un solvente"

explicacion: |
  Homogénea significa que se ve como una sola sustancia, sin partes
  distinguibles.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion", "vocabulario"]

enunciado: "En agua salada, ¿cuál es el soluto y cuál el solvente?"
tipo: mc
opciones_explicitas:
  - "La sal es el soluto; el agua es el solvente"
  - "El agua es el soluto; la sal es el solvente"
  - "Ambos son solventes"
respuesta: "La sal es el soluto; el agua es el solvente"

explicacion: |
  El soluto es lo que se disuelve; el solvente es el medio, generalmente
  en mayor cantidad.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "En una solución, el solvente suele estar en mayor cantidad que el soluto."

explicacion: |
  Es la sustancia "de fondo" en la que se disuelve el soluto.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion", "vocabulario"]

enunciado: "¿Qué indica la concentración de una solución?"
tipo: mc
opciones_explicitas:
  - "Cuánto soluto hay por cada cantidad de solución"
  - "Cuántos átomos tiene el soluto"
  - "El color de la solución"
respuesta: "Cuánto soluto hay por cada cantidad de solución"

explicacion: |
  Es la misma idea de "cantidad por unidad de volumen o masa" que la
  densidad, aplicada a una mezcla.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "completar"]

tipo: completar
enunciado: "Completá: %m/V = (masa del soluto en g / volumen de la solución en mL) × ___."
respuestas_validas:
  - "100"

explicacion: |
  Multiplicar por 100 convierte la razón en un porcentaje.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "problema"]

variables:
  volumen: uno_de([100, 200, 250, 500])
  masa: uno_de([2, 4, 5, 8, 10])

respuesta: redondear((masa / volumen) * 100, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se disuelven {masa} g de sal en agua hasta completar {volumen} mL de solución. ¿Cuál es la concentración %m/V?"

pasos:
  - "({masa} ÷ {volumen}) × 100 = {redondear((masa / volumen) * 100, 2)} %m/V"

explicacion: |
  Se divide la masa del soluto por el volumen total de la solución, y se
  multiplica por 100.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "problema"]

variables:
  volumen: uno_de([100, 200, 500, 1000])
  porcentaje: uno_de([1, 2, 5, 10])

respuesta: (porcentaje / 100) * volumen
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuántos gramos de soluto hacen falta para preparar {volumen} mL de una solución al {porcentaje}% m/V?"

pasos:
  - "({porcentaje} ÷ 100) × {volumen} = {(porcentaje / 100) * volumen} g"

explicacion: |
  Se despeja la masa invirtiendo la fórmula: Masa = (%m/V ÷ 100) ×
  Volumen.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "problema"]

variables:
  porcentaje: uno_de([2, 4, 5, 10])
  volumen_real: uno_de([100, 200, 500])
  masa: (porcentaje / 100) * volumen_real

respuesta: volumen_real
tipo: input
tolerancia_abs: 0.5

enunciado: "Se disuelven {masa} g de soluto para preparar una solución al {porcentaje}% m/V. ¿Cuántos mL de solución se obtienen?"

pasos:
  - "{masa} ÷ ({porcentaje} ÷ 100) = {volumen_real} mL"

explicacion: |
  Se despeja el volumen invirtiendo la fórmula.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "completar"]

tipo: completar
enunciado: "Completá: %m/m = (masa del soluto / masa de la ___) × 100."
respuestas_validas:
  - "solución"
  - "solucion"

explicacion: |
  Ambas masas (soluto y solución total) en la misma unidad.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "problema"]

variables:
  masa_solucion: uno_de([100, 200, 500])
  masa_soluto: uno_de([5, 10, 20])

respuesta: redondear((masa_soluto / masa_solucion) * 100, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Una aleación de {masa_solucion} g contiene {masa_soluto} g de un metal disuelto en otro. ¿Cuál es su concentración %m/m?"

pasos:
  - "({masa_soluto} ÷ {masa_solucion}) × 100 = {redondear((masa_soluto / masa_solucion) * 100, 2)} %m/m"

explicacion: |
  Acá se comparan dos masas, no masa contra volumen.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "completar"]

tipo: completar
enunciado: "Completá: %V/V = (volumen del soluto / volumen de la solución) × ___."
respuestas_validas:
  - "100"

explicacion: |
  Mismo patrón que %m/V y %m/m, pero comparando volúmenes.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "problema"]

variables:
  volumen_bebida: uno_de([250, 500, 1000])
  porcentaje: uno_de([5, 8, 10])

respuesta: (porcentaje / 100) * volumen_bebida
tipo: input
tolerancia_abs: 0.5

enunciado: "Una botella de {volumen_bebida} mL de cerveza tiene una graduación del {porcentaje}% V/V de alcohol. ¿Cuántos mL de alcohol puro contiene?"

pasos:
  - "({porcentaje} ÷ 100) × {volumen_bebida} = {(porcentaje / 100) * volumen_bebida} mL"

explicacion: |
  El %V/V indica directamente cuántos mL de soluto líquido hay por cada
  100 mL de solución.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "La concentración %V/V se usa típicamente cuando tanto el soluto como el solvente son líquidos."

explicacion: |
  Como el alcohol disuelto en agua de una bebida.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion", "vocabulario"]

enunciado: "El suero fisiológico es una solución de cloruro de sodio al 0,9% m/V. ¿Qué significa eso?"
tipo: mc
opciones_explicitas:
  - "Que hay 0,9 g de sal por cada 100 mL de solución"
  - "Que el suero es 0,9% agua"
  - "Que hay 9 g de sal por cada mL de solución"
respuesta: "Que hay 0,9 g de sal por cada 100 mL de solución"

explicacion: |
  El %m/V siempre se lee como "gramos de soluto cada 100 mL de
  solución".
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "vocabulario"]

enunciado: "¿Para qué se usa la unidad ppm (partes por millón) en vez del porcentaje?"
tipo: mc
opciones_explicitas:
  - "Para expresar concentraciones muy chicas (como contaminantes), donde el porcentaje daría números incómodos"
  - "Para concentraciones muy altas, cercanas al 100%"
  - "Es exactamente lo mismo que el porcentaje, sólo un nombre distinto"
respuesta: "Para expresar concentraciones muy chicas (como contaminantes), donde el porcentaje daría números incómodos"

explicacion: |
  1 ppm equivale a 0,0001% — mucho más cómodo de leer que un porcentaje
  con muchos ceros.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "problema"]

variables:
  masa_solucion: uno_de([1000, 2000, 5000])
  masa_soluto: uno_de([1, 2, 4])

respuesta: (masa_soluto / masa_solucion) * 1000000
tipo: input
tolerancia_abs: 1

enunciado: "Una muestra de agua de {masa_solucion} g contiene {masa_soluto} g de un contaminante disuelto. ¿Cuál es su concentración en ppm?"

pasos:
  - "({masa_soluto} ÷ {masa_solucion}) × 1 000 000 = {(masa_soluto / masa_solucion) * 1000000} ppm"

explicacion: |
  Mismo cálculo que %m/m, pero multiplicando por 1 000 000 en vez de
  por 100.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es la concentración de una solución, más soluto hay por cada cantidad de solución."

explicacion: |
  Es la definición misma de concentración.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "vocabulario"]

enunciado: "¿Qué significa diluir una solución?"
tipo: mc
opciones_explicitas:
  - "Agregarle más solvente, sin agregar ni quitar soluto"
  - "Agregarle más soluto"
  - "Evaporar parte del solvente"
respuesta: "Agregarle más solvente, sin agregar ni quitar soluto"

explicacion: |
  La cantidad de soluto no cambia; lo que cambia es el volumen total de
  solución.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "Diluir una solución (agregarle solvente) siempre reduce su concentración."

explicacion: |
  La misma cantidad de soluto queda repartida en más volumen de
  solución.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "problema"]

variables:
  masa: uno_de([10, 20])
  volumen_inicial: uno_de([100, 200])
  volumen_final: uno_de([400, 500])

respuesta: redondear((masa / volumen_final) * 100, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Una solución tiene {masa} g de soluto en {volumen_inicial} mL. Se le agrega agua hasta completar {volumen_final} mL, sin agregar más soluto. ¿Cuál es la nueva concentración %m/V?"

pasos:
  - "La masa de soluto sigue siendo {masa} g, pero ahora en {volumen_final} mL"
  - "({masa} ÷ {volumen_final}) × 100 = {redondear((masa / volumen_final) * 100, 2)} %m/V"

explicacion: |
  El soluto no cambia, pero al haber más volumen total la concentración
  baja.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "intermedio"
  tags: ["concentracion", "ordenar"]

enunciado: "Ordená los pasos para calcular la concentración %m/V de una solución."
tipo: ordenar
opciones_explicitas:
  - "Dividir la masa por el volumen y multiplicar por 100"
  - "Medir la masa del soluto (en gramos)"
  - "Medir el volumen total de la solución (en mL)"
respuesta_orden:
  - "Medir la masa del soluto (en gramos)"
  - "Medir el volumen total de la solución (en mL)"
  - "Dividir la masa por el volumen y multiplicar por 100"

explicacion: |
  %m/V = (masa del soluto / volumen de la solución) × 100.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "vocabulario"]

enunciado: "¿En qué se parece la concentración a la densidad?"
tipo: mc
opciones_explicitas:
  - "Ambas son una cantidad de algo (masa) dividida un volumen (o masa total)"
  - "Ambas sólo se pueden medir con un densímetro"
  - "No tienen ninguna relación entre sí"
respuesta: "Ambas son una cantidad de algo (masa) dividida un volumen (o masa total)"

explicacion: |
  La densidad es masa/volumen de una sustancia pura; la concentración es
  masa de soluto/volumen (o masa) de la solución completa.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "La concentración %m/m, al comparar dos masas, no depende de ninguna unidad de volumen."

explicacion: |
  Por eso conviene usarla para sólidos o mezclas donde medir el volumen
  exacto es más difícil que medir la masa.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "avanzado"
  tags: ["concentracion", "problema"]

variables:
  masa_soluto: uno_de([10, 20, 30])
  masa_solvente: uno_de([190, 180, 270])

respuesta: redondear((masa_soluto / (masa_soluto + masa_solvente)) * 100, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se mezclan {masa_soluto} g de soluto con {masa_solvente} g de solvente. ¿Cuál es la concentración %m/m de la solución resultante?"

pasos:
  - "Masa total de la solución: {masa_soluto} + {masa_solvente} = {masa_soluto + masa_solvente} g"
  - "({masa_soluto} ÷ {masa_soluto + masa_solvente}) × 100 = {redondear((masa_soluto / (masa_soluto + masa_solvente)) * 100, 2)} %m/m"

explicacion: |
  La masa de la solución total es soluto + solvente, no sólo uno de los
  dos.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "Una concentración de 0% significa que la 'solución' es en realidad sólo solvente puro, sin nada de soluto."

explicacion: |
  Sin soluto no hay nada que concentrar.
```

```
metadata:
  materia: "quimica"
  tema: "concentracion_de_una_solucion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular la concentración de una solución?"
tipo: mc
opciones_explicitas:
  - "Para dosificar correctamente medicamentos, productos de limpieza o bebidas, y controlar contaminantes"
  - "Sólo para calcular el color de una mezcla"
  - "Sólo aplica a mezclas sólidas"
respuesta: "Para dosificar correctamente medicamentos, productos de limpieza o bebidas, y controlar contaminantes"

explicacion: |
  Desde el suero fisiológico hasta el límite legal de contaminantes en
  agua potable, todo se expresa en concentración.
```

## Sección: configuracion-electronica (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles", "electrones"]

variables:
  escenario: [["s", 2], ["p", 6], ["d", 10], ["f", 14]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [2, 6, 10, 14]

enunciado: "El subnivel {escenario[idx][0]} tiene una capacidad máxima de ___ electrones."

explicacion: |
  La capacidad depende de la cantidad de orbitales del subnivel: s (1 orbital, 2e⁻), p (3 orbitales, 6e⁻), d (5 orbitales, 10e⁻) y f (7 orbitales, 14e⁻).
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles"]

respuesta: verdadero
tipo: vf

enunciado: "El subnivel p puede tener un máximo de 6 electrones."

explicacion: |
  El subnivel p tiene 3 orbitales, y cada orbital admite hasta 2 electrones: 3 × 2 = 6.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles"]

respuesta: "d"
tipo: completar
respuestas_validas: ["d"]

enunciado: "El subnivel con capacidad máxima de 10 electrones es el ___."

explicacion: |
  El subnivel d tiene 5 orbitales, lo que permite un máximo de 10 electrones (5 × 2).
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["regla_madelung", "orden_llenado"]

respuesta: verdadero
tipo: vf

enunciado: "El subnivel 4s se llena antes que el 3d según la regla de las diagonales (principio de Aufbau)."

explicacion: |
  Según la regla de las diagonales, el 4s tiene menor energía que el 3d, así que se llena primero — aunque el 3 sea menor que el 4.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["orden_llenado", "principio_aufbau"]

respuesta: "1s, 2s, 2p, 3s"
tipo: mc
opciones_explicitas: ["1s, 2s, 2p, 3s", "1s, 2p, 2s, 3s", "2s, 1s, 3s, 2p"]

enunciado: "¿Cuál es el orden correcto de llenado para estos subniveles: 1s, 2s, 2p y 3s?"

explicacion: |
  Siguiendo el principio de Aufbau, los subniveles se llenan en orden creciente de energía: 1s → 2s → 2p → 3s.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["atomos", "electrones"]

variables:
  pares: [[3, 3], [6, 6], [8, 8], [11, 11], [17, 17]]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: pares[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Dado un átomo neutro con número atómico Z = {pares[idx][0]}, ¿cuántos electrones tiene en total?"

explicacion: |
  Un átomo neutro tiene tantos electrones como su número atómico (Z). Aquí Z = {pares[idx][0]}, entonces tiene {pares[idx][1]} electrones.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["configuracion", "elementos"]

variables:
  datos: [["1s2 2s2 2p6 3s1", "Sodio (Z=11)"], ["1s2 2s2 2p4", "Oxígeno (Z=8)"], ["1s2 2s2 2p6 3s2 3p5", "Cloro (Z=17)"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Sodio (Z=11)", "Oxígeno (Z=8)", "Cloro (Z=17)"]

enunciado: "La configuración electrónica {datos[idx][0]} corresponde a:"

explicacion: |
  Esa configuración electrónica corresponde a {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["cloro", "subniveles"]

respuesta: "5"
tipo: completar
respuestas_validas: ["5"]

enunciado: "La configuración electrónica del cloro (Z=17) es 1s² 2s² 2p⁶ 3s² 3p___."

explicacion: |
  El cloro tiene 17 electrones. 2 (1s) + 2 (2s) + 6 (2p) + 2 (3s) = 12; faltan 5 electrones para el subnivel 3p.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["teoria"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los superíndices de una configuración electrónica correcta debe ser igual al número de electrones del átomo."

explicacion: |
  Verdadero. Cada superíndice indica cuántos electrones hay en ese subnivel; la suma total tiene que coincidir con Z en un átomo neutro.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles", "conteo"]

respuesta: 6
tipo: mc
opciones_explicitas: [2, 4, 6, 8]

enunciado: "¿Cuántos electrones tiene el subnivel 2p en la configuración completa 1s² 2s² 2p⁶ 3s²?"

explicacion: |
  El superíndice del subnivel 2p en esa configuración es 6.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["electrones_valencia", "tabla_periodica"]

variables:
  datos: [["Sodio", "1s2 2s2 2p6 3s1", 1], ["Cloro", "1s2 2s2 2p6 3s2 3p5", 7], ["Oxígeno", "1s2 2s2 2p4", 6]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: [1, 2, 3, 4, 5, 6, 7, 8]

enunciado: "Dado el elemento {datos[idx][0]} con la configuración electrónica {datos[idx][1]}, ¿cuántos electrones de valencia tiene?"

explicacion: |
  {datos[idx][0]} tiene {datos[idx][2]} electrones en su nivel más externo.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "más alto"
tipo: completar
respuestas_validas: ["más alto", "ultimo", "último"]

enunciado: "Los electrones de valencia son los que están en el nivel ___ de la configuración electrónica."

explicacion: |
  Los electrones de valencia son los que ocupan el nivel de energía más alto (el último) de un átomo.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "¿Los electrones de valencia son los que participan en los enlaces químicos?"

explicacion: |
  Verdadero. La reactividad química de un átomo depende de cómo interactúan sus electrones de valencia con otros átomos.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["tabla_periodica", "grupos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Dos elementos con la misma cantidad de electrones de valencia están, en general, en el mismo grupo de la tabla periódica?"

explicacion: |
  Verdadero (para elementos representativos): comparten propiedades químicas similares porque tienen la misma cantidad de electrones de valencia.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["niveles_energia"]

variables:
  datos: [[11, 3], [17, 3], [8, 2], [3, 2]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: [1, 2, 3, 4, 5, 6, 7]

enunciado: "Para un átomo con número atómico Z = {datos[idx][0]}, ¿cuál es el número del nivel de energía más alto ocupado?"

explicacion: |
  El nivel de energía más alto ocupado corresponde al número cuántico principal más grande de su configuración. Para Z = {datos[idx][0]}, es el nivel {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["orbitales", "aufbau"]

respuesta: falso
tipo: vf

enunciado: "Los subniveles de energía se llenan siempre en orden estricto de menor a mayor número de nivel (1, 2, 3...), sin excepciones."

explicacion: |
  Falso. Por el principio de Aufbau, se llenan según su energía real, no según el número de nivel — el 4s tiene menor energía que el 3d y se llena primero.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["capacidad", "orbitales"]

respuesta: 8
tipo: mc
opciones_explicitas: [2, 6, 8, 18]

enunciado: "¿Cuál es la capacidad total de electrones que pueden albergar los subniveles del segundo nivel de energía (2s y 2p)?"

explicacion: |
  El nivel 2 tiene el subnivel 2s (capacidad 2) y el subnivel 2p (capacidad 6): 2 + 6 = 8 electrones.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["conteo", "electrones"]

respuesta: "10"
tipo: completar
respuestas_validas: ["10"]

enunciado: "En la configuración electrónica 1s² 2s² 2p⁶, el total de electrones es ___."

explicacion: |
  Sumando los superíndices: 2 (1s) + 2 (2s) + 6 (2p) = 10 electrones.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["atomos", "neutros"]

respuesta: verdadero
tipo: vf

enunciado: "La configuración electrónica de un átomo neutro tiene tantos electrones como su número atómico Z."

explicacion: |
  Verdadero. En un átomo neutro, la carga de los electrones cancela exactamente la de los protones (Z), así que su cantidad coincide.
```

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["capacidad", "nivel_3"]

respuesta: 18
tipo: mc
opciones_explicitas: [8, 10, 18, 32]

enunciado: "¿Cuál es la capacidad total de electrones del nivel 3 completo (3s + 3p + 3d)?"

explicacion: |
  3s (2) + 3p (6) + 3d (10) = 18 electrones — aunque en la práctica el 3d se llena después del 4s por la regla de las diagonales.
```

## Sección: densidad (26 preguntas)

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "vocabulario"]

enunciado: "¿Qué es la densidad de una sustancia?"
tipo: mc
opciones_explicitas:
  - "La relación entre su masa y el volumen que ocupa"
  - "El peso total de un objeto"
  - "La cantidad de átomos que tiene"
respuesta: "La relación entre su masa y el volumen que ocupa"

explicacion: |
  Densidad = Masa / Volumen.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "completar"]

tipo: completar
enunciado: "Completá la fórmula: Densidad = Masa / ___."
respuestas_validas:
  - "Volumen"
  - "volumen"

explicacion: |
  Es la masa dividida el volumen que ocupa esa masa.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "problema"]

variables:
  volumen: random(2, 20)
  densidad_real: uno_de([2, 3, 4, 5, 7, 8])
  masa: volumen * densidad_real

respuesta: densidad_real
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto tiene una masa de {masa} g y ocupa un volumen de {volumen} cm³. ¿Cuál es su densidad (en g/cm³)?"

pasos:
  - "{masa} ÷ {volumen} = {densidad_real} g/cm³"

explicacion: |
  Se divide la masa por el volumen.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "problema"]

variables:
  volumen: random(2, 30)
  densidad_dato: uno_de([2, 3, 4, 5, 7, 9])

respuesta: volumen * densidad_dato
tipo: input
tolerancia_abs: 0

enunciado: "Una sustancia tiene una densidad de {densidad_dato} g/cm³. ¿Cuál es la masa de {volumen} cm³ de esa sustancia?"

pasos:
  - "{densidad_dato} × {volumen} = {volumen * densidad_dato} g"

explicacion: |
  Se despeja la masa: Masa = Densidad × Volumen.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "problema"]

variables:
  volumen_real: random(2, 25)
  densidad_dato: uno_de([2, 3, 4, 5])
  masa: volumen_real * densidad_dato

respuesta: volumen_real
tipo: input
tolerancia_abs: 0

enunciado: "Una sustancia con densidad {densidad_dato} g/cm³ tiene una masa de {masa} g. ¿Cuál es su volumen?"

pasos:
  - "{masa} ÷ {densidad_dato} = {volumen_real} cm³"

explicacion: |
  Se despeja el volumen: Volumen = Masa / Densidad.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La densidad es una propiedad intensiva: no depende de la cantidad de material, sólo del tipo de sustancia."

explicacion: |
  Un vaso de agua y una pileta tienen distinta masa y volumen, pero la
  misma densidad.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "vocabulario"]

enunciado: "¿Qué significa que la densidad sea una propiedad 'intensiva'?"
tipo: mc
opciones_explicitas:
  - "Que no cambia según la cantidad de sustancia que haya"
  - "Que sólo se puede medir con instrumentos muy precisos"
  - "Que cambia constantemente con el tiempo"
respuesta: "Que no cambia según la cantidad de sustancia que haya"

explicacion: |
  Por eso sirve para identificar de qué sustancia está hecho algo.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad"]

respuesta: verdadero
tipo: vf

enunciado: "Dos objetos hechos exactamente de la misma sustancia tienen la misma densidad, sin importar el tamaño de cada uno."

explicacion: |
  La densidad depende del tipo de sustancia, no de cuánto material haya.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "vocabulario"]

enunciado: "¿Cuáles son unidades comunes para medir densidad?"
tipo: mc
opciones_explicitas:
  - "g/cm³ o kg/m³"
  - "cm² o m²"
  - "solamente kg"
respuesta: "g/cm³ o kg/m³"

explicacion: |
  Siempre es una masa dividida un volumen.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "unidades"]

respuesta: verdadero
tipo: vf

enunciado: "1 mililitro (mL) equivale exactamente a 1 centímetro cúbico (cm³), así que g/mL y g/cm³ son la misma unidad de densidad."

explicacion: |
  Es la misma equivalencia ya vista en
  `../../matematica/volumen-y-capacidad/`.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "problema"]

variables:
  volumen: random(5, 40)
  densidad_real: uno_de([1, 2, 3])
  masa: volumen * densidad_real

respuesta: densidad_real
tipo: input
tolerancia_abs: 0

enunciado: "Un líquido de {masa} g ocupa {volumen} mL. ¿Cuál es su densidad (en g/mL)?"

pasos:
  - "{masa} ÷ {volumen} = {densidad_real} g/mL"

explicacion: |
  Como 1 mL = 1 cm³, el cálculo es idéntico al de g/cm³.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "vocabulario"]

enunciado: "¿Cuál es aproximadamente la densidad del agua líquida?"
tipo: mc
opciones_explicitas:
  - "1 g/cm³"
  - "10 g/cm³"
  - "0,1 g/cm³"
respuesta: "1 g/cm³"

explicacion: |
  Es el valor de referencia clásico: 1 g de agua ocupa 1 cm³.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "flotacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si la densidad de un objeto es menor que la densidad del líquido en el que se sumerge, ese objeto flota."

explicacion: |
  Es el caso del corcho o el aceite en agua.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "flotacion", "problema"]

variables:
  densidad_objeto: uno_de([0.5, 0.7, 0.9])

respuesta: verdadero
tipo: vf

enunciado: "Un objeto tiene una densidad de {densidad_objeto} g/cm³. Se lo sumerge en agua (densidad 1 g/cm³). ¿Flota?"

explicacion: |
  {densidad_objeto} g/cm³ es menor que 1 g/cm³ (la densidad del agua):
  el objeto flota.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "flotacion", "problema"]

variables:
  densidad_objeto: uno_de([2, 5, 7, 11])

respuesta: falso
tipo: vf

enunciado: "Un objeto tiene una densidad de {densidad_objeto} g/cm³. Se lo sumerge en agua (densidad 1 g/cm³). ¿Flota?"

explicacion: |
  {densidad_objeto} g/cm³ es mayor que 1 g/cm³: el objeto se hunde.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "avanzado"
  tags: ["densidad", "flotacion"]

enunciado: "¿Por qué el hielo flota en el agua líquida?"
tipo: mc
opciones_explicitas:
  - "Porque el hielo es menos denso que el agua líquida"
  - "Porque el hielo pesa menos, sin importar su volumen"
  - "El hielo en realidad no flota, se hunde lentamente"
respuesta: "Porque el hielo es menos denso que el agua líquida"

explicacion: |
  Es una excepción notable: la mayoría de las sustancias son más densas
  en estado sólido que líquido, pero el agua se expande al congelarse.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar la densidad medida de un objeto con la densidad conocida de un metal (por ejemplo, el oro) permite detectar si es una falsificación."

explicacion: |
  Si la densidad medida no coincide con la del oro puro (≈19,3 g/cm³),
  el objeto no es oro puro.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "avanzado"
  tags: ["densidad", "problema"]

variables:
  volumen: uno_de([5, 10, 20, 25])

respuesta: "Aluminio"
tipo: mc
opciones_explicitas:
  - "Aluminio"
  - "Hierro"
  - "Plomo"

enunciado: "Un bloque metálico de {volumen} cm³ tiene una masa de {2.7 * volumen} g. Sabiendo que el aluminio tiene densidad ≈2,7 g/cm³, el hierro ≈7,87 g/cm³ y el plomo ≈11,3 g/cm³, ¿de qué metal se trata?"

explicacion: |
  {2.7 * volumen} g ÷ {volumen} cm³ = 2,7 g/cm³, que coincide con la
  densidad del aluminio.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "ordenar"]

enunciado: "Ordená los pasos para calcular la densidad de un objeto."
tipo: ordenar
opciones_explicitas:
  - "Dividir la masa por el volumen"
  - "Medir la masa del objeto (con una balanza)"
  - "Medir el volumen del objeto (por ejemplo, con una probeta)"
respuesta_orden:
  - "Medir la masa del objeto (con una balanza)"
  - "Medir el volumen del objeto (por ejemplo, con una probeta)"
  - "Dividir la masa por el volumen"

explicacion: |
  Densidad = Masa / Volumen, en ese orden de cálculo.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "avanzado"
  tags: ["densidad", "unidades"]

respuesta: verdadero
tipo: vf

enunciado: "1000 kg/m³ equivale a 1 g/cm³ (ambas expresan la densidad del agua)."

explicacion: |
  1 m³ = 1 000 000 cm³ y 1 kg = 1000 g: al dividir, los ceros se
  simplifican y da la misma densidad expresada en otra unidad.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad"]

respuesta: verdadero
tipo: vf

enunciado: "La densidad de una sustancia no depende de la forma que tenga el objeto (una esfera o un cubo de la misma sustancia tienen igual densidad)."

explicacion: |
  Sólo depende del tipo de sustancia, no de la forma ni el tamaño.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "avanzado"
  tags: ["densidad", "problema"]

variables:
  masa: uno_de([20, 40, 60, 80])
  volumen_a: uno_de([2, 4])
  volumen_b: uno_de([8, 10])

respuesta: "El objeto A"
tipo: mc
opciones_explicitas:
  - "El objeto A"
  - "El objeto B"
  - "Tienen la misma densidad"

enunciado: "Dos objetos tienen la misma masa, {masa} g. El objeto A ocupa {volumen_a} cm³, y el objeto B ocupa {volumen_b} cm³ (un volumen mayor). ¿Cuál de los dos tiene mayor densidad?"

explicacion: |
  A igual masa, a menor volumen mayor densidad: el objeto A, al ocupar
  menos espacio con la misma masa, es más denso.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "intermedio"
  tags: ["densidad", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La densidad se calcula dividiendo la masa de un objeto por su peso."

explicacion: |
  La densidad relaciona masa y VOLUMEN, no masa y peso — el peso ni
  siquiera entra en la fórmula.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "avanzado"
  tags: ["densidad", "problema"]

variables:
  masa: random(10, 200)
  volumen: random(3, 25)

respuesta: redondear(masa / volumen, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un mineral tiene una masa de {masa} g y ocupa un volumen de {volumen} cm³. ¿Cuál es su densidad (en g/cm³)? Redondeá a 2 decimales."

pasos:
  - "{masa} ÷ {volumen} = {redondear(masa / volumen, 2)} g/cm³"

explicacion: |
  No siempre la división da un número exacto: en ese caso se redondea.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["densidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El oro (≈19,3 g/cm³) es más denso que el hierro (≈7,87 g/cm³)."

explicacion: |
  A igual volumen, un bloque de oro pesa más del doble que uno de
  hierro.
```

```
metadata:
  materia: "quimica"
  tema: "densidad"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve conocer la densidad de una sustancia?"
tipo: mc
opciones_explicitas:
  - "Para identificar de qué material está hecho un objeto y predecir si flota o se hunde en un líquido"
  - "Sólo sirve para calcular el peso de un objeto"
  - "Sólo aplica a los metales"
respuesta: "Para identificar de qué material está hecho un objeto y predecir si flota o se hunde en un líquido"

explicacion: |
  Desde detectar falsificaciones hasta explicar por qué el hielo flota,
  la densidad conecta masa, volumen y comportamiento en fluidos.
```

## Sección: dilucion-soluciones (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["soluciones", "dilucion"]

respuesta: verdadero
tipo: vf

enunciado: "Al diluir una solución, se agrega solvente sin agregar ni quitar soluto."

explicacion: |
  Correcto. La dilución aumenta el volumen de solvente, lo que baja la concentración, pero la cantidad de soluto se mantiene constante.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["soluciones", "dilucion"]

respuesta: falso
tipo: vf

enunciado: "La cantidad de soluto (en moles o gramos) cambia al diluir una solución."

explicacion: |
  Falso. En una dilución ideal la masa o los moles de soluto no varían; lo que cambia es la relación soluto/volumen.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["soluciones", "dilucion"]

respuesta: "concentracion"
tipo: completar
respuestas_validas: ["concentracion"]

enunciado: "Al diluir una solución, lo que cambia es el volumen total y por lo tanto baja la ___."

explicacion: |
  Al aumentar el volumen sin agregar más soluto, la relación soluto/volumen (la concentración) baja.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["soluciones", "dilucion", "formula"]

respuesta: "C1V1 = C2V2"
tipo: mc
opciones_explicitas: ["C1V1 = C2V2", "C1+V1 = C2+V2", "C1/V1 = C2/V2", "C1V1 = C2/V2"]

enunciado: "Si una solución con concentración C1 y volumen V1 se diluye hasta obtener una concentración C2 y volumen V2, ¿cuál es la fórmula correcta?"

explicacion: |
  C1×V1 = C2×V2 sale de que la cantidad de soluto antes y después de diluir es la misma.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["dilucion", "molaridad"]

variables:
  escenario: uno_de([[4, 50, 2], [10, 100, 5], [12, 50, 3], [6, 25, 2]])
  c1: escenario[0]
  v1: escenario[1]
  c2: escenario[2]

respuesta: c1 * v1 / c2
tipo: input
tolerancia_abs: 0.01

enunciado: "Se tienen {c1} M de una solución de volumen {v1} L. Se diluye hasta {c2} M. ¿Cuál es el volumen final (V2) en litros?"

explicacion: |
  V2 = (C1 × V1) / C2 = ({c1} × {v1}) / {c2}.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["dilucion", "molaridad"]

variables:
  escenario: uno_de([[2, 100, 50], [5, 200, 10], [8, 50, 20]])
  c1: escenario[0]
  v1: escenario[1]
  v2: escenario[2]

respuesta: c1 * v1 / v2
tipo: input
tolerancia_abs: 0.01

enunciado: "Una solución tiene concentración {c1} M y volumen {v1} L. Se diluye hasta un volumen final de {v2} L. ¿Cuál es la nueva concentración (C2)?"

explicacion: |
  C2 = (C1 × V1) / V2 = ({c1} × {v1}) / {v2}.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["dilucion", "molaridad"]

variables:
  escenario: uno_de([[1, 100, 10], [2, 50, 5], [5, 40, 2]])
  c2: escenario[0]
  v2: escenario[1]
  v1: escenario[2]

respuesta: c2 * v2 / v1
tipo: input
tolerancia_abs: 0.01

enunciado: "Se quiere preparar {c2} M con un volumen final de {v2} L, partiendo de {v1} L de una solución concentrada. ¿Qué concentración (C1) debe tener esa solución original?"

explicacion: |
  C1 = (C2 × V2) / V1 = ({c2} × {v2}) / {v1}.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Al diluir una solución (agregando solvente), el volumen final (V2) siempre es mayor que el volumen inicial (V1)."

explicacion: |
  Verdadero. Agregar solvente aumenta el volumen total, lo que baja la concentración.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["dilucion", "calculo"]

variables:
  c1: 12
  v1: 50
  c2: 2

respuesta: c1 * v1 / c2
tipo: input
tolerancia_abs: 0.01

enunciado: "Tengo una solución al {c1}% con volumen de {v1} mL y quiero diluirla hasta {c2}%. ¿Cuál será el volumen final (V2) en mL?"

pasos:
  - "C1 × V1 = C2 × V2"
  - "V2 = (C1 × V1) / C2 = (12 × 50) / 2"

explicacion: |
  El volumen final es 300 mL: aumenta el volumen para mantener la misma cantidad de soluto con menor concentración.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["dilucion", "concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "Si tengo 50 mL de una solución al 12% y la diluyo hasta un volumen total de 300 mL, la concentración final es 2%."

explicacion: |
  Correcto. 12 × 50 = C2 × 300 → C2 = 600/300 = 2.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["teoria", "unidades"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicar C1×V1 = C2×V2, las unidades de C1 y C2 tienen que ser las mismas entre sí."

explicacion: |
  Verdadero. Si C1 está en Molaridad, C2 también tiene que estar en Molaridad para que la igualdad sea válida.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["teoria", "unidades"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicar C1×V1 = C2×V2, las unidades de V1 y V2 tienen que ser las mismas entre sí."

explicacion: |
  Verdadero. Si V1 está en mL, V2 también tiene que estar en mL.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["teoria", "soluto"]

respuesta: falso
tipo: vf

enunciado: "Diluir una solución (agregar solvente) aumenta la cantidad total de soluto disuelto en la mezcla."

explicacion: |
  Falso. La cantidad de soluto se mantiene constante; lo que cambia es el volumen del solvente y, por lo tanto, la concentración.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["dilucion", "conceptos"]

respuesta: "concentrada"
tipo: completar
respuestas_validas: ["concentrada"]

enunciado: "En la fórmula C1V1 = C2V2, los términos C1 y V1 representan la solución ___ (también llamada solución stock), antes de la dilución."

explicacion: |
  La solución stock es la original, con concentración C1 y volumen V1, antes de agregar más solvente.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["dilucion", "volumen"]

respuesta: "que el volumen total final es V2"
tipo: mc
opciones_explicitas: ["que el volumen total final es V2", "que se agregan V2 mL de solvente extra", "que se quitan V2 mL de solvente", "que V2 es el volumen de soluto"]

enunciado: "Si se diluye una solución hasta alcanzar un volumen final V2, esto significa..."

explicacion: |
  V2 es el volumen TOTAL de la mezcla resultante (soluto + solvente agregado), no la cantidad de solvente añadida.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "avanzado"
  tags: ["calculo", "dilucion"]

variables:
  datos: [[10, 40, 80], [8, 20, 40], [6, 40, 120]]
  idx: uno_de([0, 1, 2])
  c1: datos[idx][0]
  v1: datos[idx][1]
  v2: datos[idx][2]

respuesta: c1 * v1 / v2
tipo: input
tolerancia_abs: 0.01

enunciado: "Una solución tiene concentración C1={c1} M y volumen V1={v1} mL. Se diluye hasta un volumen final V2={v2} mL. ¿Cuál es la nueva concentración C2 (en M)?"

pasos:
  - "Moles iniciales: n = C1 × V1"
  - "C2 = n / V2"

explicacion: |
  C2 = (C1 × V1) / V2 = ({c1} × {v1}) / {v2}.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["conceptos", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el volumen final V2 de una dilución, menor es la concentración final C2 resultante."

explicacion: |
  Como la cantidad de soluto es constante, la concentración es inversamente proporcional al volumen: a mayor volumen, menor concentración.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["calculo", "dilucion"]

variables:
  c1: 10
  v1: 20
  v2: 100

respuesta: c1 * v1 / v2
tipo: input
tolerancia_abs: 0.01

enunciado: "Si diluyo {v1} mL de una solución {c1} M hasta un volumen final de {v2} mL, ¿cuál es la concentración final?"

explicacion: |
  C2 = (C1 × V1) / V2 = ({c1} × {v1}) / {v2} = 2 M.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "intermedio"
  tags: ["conceptos", "factor_dilucion"]

respuesta: verdadero
tipo: vf

enunciado: "Si el volumen final es el doble del volumen inicial (V2 = 2×V1), entonces la concentración final es la mitad de la concentración inicial (C2 = C1/2)."

explicacion: |
  De C1×V1 = C2×V2, si V2=2×V1 entonces C2 = C1×V1/(2×V1) = C1/2.
```

```
metadata:
  materia: "quimica"
  tema: "dilucion_soluciones"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Evaporar solvente de una solución (sin agregar ni quitar soluto) es un proceso de dilución."

explicacion: |
  Falso. Evaporar solvente reduce el volumen y AUMENTA la concentración — es el proceso contrario (concentrar), no diluir.
```

## Sección: electrolisis (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["redox", "espontaneidad"]

respuesta: verdadero
tipo: vf

enunciado: "En la electrólisis se usa una corriente eléctrica externa para forzar una reacción redox no espontánea."

explicacion: |
  A diferencia de las pilas (que liberan energía), en la electrólisis se suministra energía para forzar la reacción.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["espontaneidad"]

respuesta: falso
tipo: vf

enunciado: "La electrólisis es un proceso que ocurre de forma espontánea, sin necesidad de una fuente de corriente externa."

explicacion: |
  Falso. Si fuera espontánea no haría falta aplicar electricidad — sería una pila galvánica.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: "el proceso opuesto (espejo) de la pila"
tipo: mc
opciones_explicitas: ["el proceso opuesto (espejo) de la pila", "un proceso idéntico a la pila", "un proceso no relacionado con la pila", "un proceso mucho más rápido que la pila"]

enunciado: "En términos de flujo de energía, la electrólisis es..."

explicacion: |
  La pila convierte energía química en eléctrica (espontánea); la electrólisis convierte energía eléctrica en química (no espontánea) — son procesos opuestos.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "intermedio"
  tags: ["termodinamica", "delta_g"]

respuesta: verdadero
tipo: vf

enunciado: "En una reacción de electrólisis, ΔG es mayor que cero (la reacción no es espontánea)."

explicacion: |
  ΔG > 0 caracteriza a las reacciones no espontáneas, que necesitan energía externa.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "reacciones_redox"]

respuesta: verdadero
tipo: vf

enunciado: "En electrólisis, el ánodo sigue siendo el electrodo donde ocurre la oxidación, igual que en la pila."

explicacion: |
  El nombre "ánodo" siempre significa oxidación, sea pila o electrólisis.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "polaridad"]

respuesta: verdadero
tipo: vf

enunciado: "En una celda electrolítica, el ánodo tiene polaridad POSITIVA, a diferencia de la pila (donde es negativo)."

explicacion: |
  En electrólisis, el ánodo se conecta al polo positivo de la fuente externa.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "polaridad"]

respuesta: verdadero
tipo: vf

enunciado: "En electrólisis, el cátodo es el polo NEGATIVO de la celda."

explicacion: |
  El cátodo recibe electrones del polo negativo de la fuente externa.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "reacciones_redox"]

respuesta: falso
tipo: vf

enunciado: "En una celda de electrólisis, la reducción ocurre en el ánodo."

explicacion: |
  Falso. La reducción sigue ocurriendo en el cátodo; la oxidación en el ánodo — no cambia con la polaridad.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "catodo", "hidrogeno"]

respuesta: verdadero
tipo: vf

enunciado: "En la electrólisis del agua, en el cátodo se forma hidrógeno gaseoso."

explicacion: |
  En el cátodo ocurre la reducción, liberando H₂.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "anodo", "oxigeno"]

respuesta: verdadero
tipo: vf

enunciado: "En la electrólisis del agua, en el ánodo se forma oxígeno gaseoso."

explicacion: |
  En el ánodo ocurre la oxidación, liberando O₂.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "intermedio"
  tags: ["estequiometria", "volumen", "gas"]

variables:
  volumen_o2: uno_de([1, 2, 3, 5])

respuesta: volumen_o2 * 2
tipo: input
tolerancia_abs: 0.01

enunciado: "En la electrólisis del agua la proporción H₂:O₂ es 2:1. Si se producen {volumen_o2} mL de O₂, ¿qué volumen de H₂ se produce?"

pasos:
  - "H2 = O2 × 2"

explicacion: |
  {volumen_o2} × 2 mL de H₂.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["estequiometria", "formula_quimica"]

respuesta: verdadero
tipo: vf

enunciado: "La proporción 2:1 de H₂ a O₂ en la electrólisis del agua coincide con la fórmula química del agua (H₂O)."

explicacion: |
  Correcto: 2 átomos de H por cada 1 de O, igual que en la molécula.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "intermedio"
  tags: ["aplicaciones", "procesos_industriales"]

variables:
  escenario: [["galvanoplastia", "recubrir un objeto con una capa fina de otro metal"], ["electrorrefinacion", "purificar metales como el cobre"], ["produccion de aluminio", "obtener el metal a partir del mineral"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["recubrir un objeto con una capa fina de otro metal", "purificar metales como el cobre", "obtener el metal a partir del mineral"]

enunciado: "¿Cuál es la descripción de la aplicación '{escenario[idx][0]}'?"

explicacion: |
  {escenario[idx][0]} consiste en: {escenario[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["galvanoplastia"]

respuesta: verdadero
tipo: vf

enunciado: "La galvanoplastia usa la electrólisis para cromar o platear objetos."

explicacion: |
  Correcto. La corriente deposita una capa metálica sobre la superficie del objeto.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "intermedio"
  tags: ["termodinamica", "energia"]

respuesta: falso
tipo: vf

enunciado: "La electrólisis no necesita energía externa porque ΔG de la reacción es negativo."

explicacion: |
  Falso. Necesita energía externa justamente porque ΔG es positivo (no espontánea).
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrorrefinacion", "cobre"]

respuesta: verdadero
tipo: vf

enunciado: "La electrorrefinación del cobre es un ejemplo de aplicación industrial de la electrólisis."

explicacion: |
  Correcto, se usa para purificar metales como el cobre.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "una fuente eléctrica externa (batería o generador)"
tipo: mc
opciones_explicitas: ["una fuente eléctrica externa (batería o generador)", "la propia reacción química espontánea", "el calor ambiente", "la luz solar siempre"]

enunciado: "¿De dónde sale la energía que hace posible la electrólisis?"

explicacion: |
  Al no ser espontánea, la energía tiene que venir de afuera: una fuente eléctrica externa.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "avanzado"
  tags: ["comparacion", "pilas"]

respuesta: verdadero
tipo: vf

enunciado: "Mientras la pila transforma energía química en eléctrica, la electrólisis transforma energía eléctrica en química."

explicacion: |
  Correcto — son procesos con el flujo de energía invertido entre sí.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "avanzado"
  tags: ["aplicacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La electrólisis también se puede aplicar a sales fundidas (sin agua), no sólo a soluciones acuosas."

explicacion: |
  Correcto. Por ejemplo, la obtención industrial de sodio y cloro se hace por electrólisis de NaCl fundido, no en solución acuosa.
```

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "avanzado"
  tags: ["conceptos", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanta más corriente eléctrica (y más tiempo) se aplique en una electrólisis, más producto se forma en los electrodos."

explicacion: |
  Correcto. La cantidad de electrones que pasan (carga total) determina cuánta sustancia se oxida o reduce — más corriente y tiempo, más producto.
```
