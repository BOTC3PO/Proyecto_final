# Examen jefe — Maestro de la Medición y la Materia

> Logro #145. Completaste el examen jefe dominando mediciones, mezclas, modelos atómicos y nanotecnología. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **107 preguntas totales** en 5/5 secciones.

---

## Sección: medicion-de-laboratorio (24 preguntas)

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "basico"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué es la apreciación de un instrumento de medición?"
tipo: mc
opciones_explicitas:
  - "La mitad de la división más chica que puede distinguir el instrumento"
  - "El valor máximo que puede medir"
  - "El precio del instrumento"
respuesta: "La mitad de la división más chica que puede distinguir el instrumento"

explicacion: |
  Es el límite físico del error posible con ese instrumento, ya visto en
  `../../matematica/cifras-significativas-y-error/`.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "problema"]

variables:
  division: uno_de([1, 2])

respuesta: division / 2
tipo: input
tolerancia_abs: 0

enunciado: "Una probeta tiene marcas graduadas cada {division} mL. ¿Cuál es su apreciación (el margen de error mínimo de una lectura)?"

pasos:
  - "{division} ÷ 2 = {division / 2} mL"

explicacion: |
  La apreciación es la mitad de la división más chica marcada.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "problema"]

respuesta: 0.05
tipo: input
tolerancia_abs: 0.01

enunciado: "Una bureta tiene marcas graduadas cada 0,1 mL. ¿Cuál es su apreciación?"

pasos:
  - "0,1 ÷ 2 = 0,05 mL"

explicacion: |
  Al tener divisiones más finas que una probeta, la bureta permite una
  lectura más precisa.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "basico"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué es el menisco al medir un líquido en un recipiente graduado?"
tipo: mc
opciones_explicitas:
  - "La curva que forma la superficie del líquido, por el contacto con las paredes de vidrio"
  - "La marca de graduación más alta del recipiente"
  - "El nombre del propio recipiente graduado"
respuesta: "La curva que forma la superficie del líquido, por el contacto con las paredes de vidrio"

explicacion: |
  El líquido no queda perfectamente plano: se curva cerca de las
  paredes.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "En el agua y la mayoría de las soluciones acuosas, el menisco es cóncavo: se curva hacia abajo en el centro."

explicacion: |
  Es porque el agua "moja" el vidrio, arrastrando el borde del líquido
  hacia arriba en el contacto con la pared.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Cómo se lee correctamente el nivel de un líquido con menisco cóncavo?"
tipo: mc
opciones_explicitas:
  - "En la parte inferior de la curva, con el ojo a la misma altura del menisco"
  - "En la parte superior de la curva, mirando desde arriba"
  - "En cualquier punto de la curva, da lo mismo"
respuesta: "En la parte inferior de la curva, con el ojo a la misma altura del menisco"

explicacion: |
  Leer desde otro punto o ángulo introduce un error evitable.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué es el error de paralaje?"
tipo: mc
opciones_explicitas:
  - "El error de leer una escala desde un ángulo, en vez de mirarla de frente"
  - "El error que viene de no calibrar el instrumento"
  - "El error de usar un instrumento con divisiones muy grandes"
respuesta: "El error de leer una escala desde un ángulo, en vez de mirarla de frente"

explicacion: |
  El ángulo de visión hace que la marca parezca corrida hacia un lado.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "avanzado"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la apreciación (un límite físico del instrumento), el error de paralaje se puede evitar completamente con la técnica correcta de lectura."

explicacion: |
  Basta con poner el ojo a la altura exacta de la marca que se está
  leyendo.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "basico"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué es tarar una balanza?"
tipo: mc
opciones_explicitas:
  - "Ponerla en cero con el recipiente vacío puesto, antes de agregar la sustancia a pesar"
  - "Calibrarla con un peso patrón certificado"
  - "Limpiarla antes de usarla"
respuesta: "Ponerla en cero con el recipiente vacío puesto, antes de agregar la sustancia a pesar"

explicacion: |
  Así el resultado final es sólo la masa de la sustancia, sin el peso
  del recipiente.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "Olvidar tarar la balanza (dejando el peso del recipiente sumado) produce un error sistemático: todas las mediciones quedan corridas en la misma dirección."

explicacion: |
  Es la misma idea de `../../matematica/error-sistematico-vs-aleatorio/`
  aplicada a un caso concreto de laboratorio.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "problema"]

variables:
  masa_recipiente: random(10, 50)
  masa_sustancia_real: random(5, 100)
  masa_total: masa_recipiente + masa_sustancia_real

respuesta: masa_sustancia_real
tipo: input
tolerancia_abs: 0

enunciado: "Un recipiente vacío pesa {masa_recipiente} g. Sin tarar la balanza, se agrega la sustancia y la balanza marca {masa_total} g en total. ¿Cuál es la masa real de la sustancia sola?"

pasos:
  - "{masa_total} − {masa_recipiente} = {masa_sustancia_real} g"

explicacion: |
  Si no se taró antes, hay que restar el peso del recipiente
  después.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué es calibrar un instrumento de medición?"
tipo: mc
opciones_explicitas:
  - "Verificar que marca el valor correcto en un punto conocido, antes de usarlo"
  - "Limpiarlo después de cada uso"
  - "Repetir la misma medición varias veces"
respuesta: "Verificar que marca el valor correcto en un punto conocido, antes de usarlo"

explicacion: |
  Por ejemplo, un termómetro que debe marcar 0°C en agua con hielo.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "Calibrar un instrumento antes de medir permite detectar y corregir un error sistemático, en vez de descubrirlo después con resultados extraños."

explicacion: |
  Es una medida preventiva, no una corrección posterior.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "basico"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Qué son las réplicas de una medición en un experimento?"
tipo: mc
opciones_explicitas:
  - "Repeticiones de la misma medición, para después promediar los resultados"
  - "Copias del informe del experimento"
  - "Instrumentos de repuesto por si uno se rompe"
respuesta: "Repeticiones de la misma medición, para después promediar los resultados"

explicacion: |
  El objetivo es reducir el efecto del error aleatorio.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "Promediar varias réplicas de una medición reduce el efecto del error aleatorio en el resultado."

explicacion: |
  Las variaciones impredecibles de cada lectura tienden a cancelarse en
  el promedio.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "avanzado"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "Si una balanza sin tarar mide siempre de más, repetir la medición y promediar NO corrige ese error."

explicacion: |
  Todas las réplicas están corridas en la misma dirección: promediar
  sólo funciona contra el error aleatorio, no el sistemático.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "problema"]

variables:
  v1: random(20, 30)
  v2: v1 + uno_de([-1, 1])
  v3: v1 + uno_de([-2, 2])

respuesta: redondear((v1 + v2 + v3) / 3, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se midió la masa de una muestra tres veces: {v1} g, {v2} g y {v3} g. ¿Cuál es el promedio de esas réplicas?"

pasos:
  - "({v1} + {v2} + {v3}) ÷ 3 = {redondear((v1 + v2 + v3) / 3, 2)} g"

explicacion: |
  El promedio suaviza las pequeñas variaciones aleatorias entre
  réplicas.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "vocabulario"]

enunciado: "Una probeta está graduada cada 1 mL, y una bureta está graduada cada 0,1 mL. ¿Cuál de las dos permite una lectura más precisa?"
tipo: mc
opciones_explicitas:
  - "La bureta, porque tiene una apreciación menor"
  - "La probeta, porque es más grande"
  - "Las dos son igual de precisas"
respuesta: "La bureta, porque tiene una apreciación menor"

explicacion: |
  Cuanto más chica la división del instrumento, menor el margen de
  error posible.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio", "ordenar"]

enunciado: "Ordená los pasos para leer correctamente el volumen de un líquido en una probeta."
tipo: ordenar
opciones_explicitas:
  - "Leer la marca en la parte inferior del menisco"
  - "Colocar la probeta sobre una superficie plana"
  - "Poner el ojo a la misma altura que la superficie del líquido, para evitar el error de paralaje"
respuesta_orden:
  - "Colocar la probeta sobre una superficie plana"
  - "Poner el ojo a la misma altura que la superficie del líquido, para evitar el error de paralaje"
  - "Leer la marca en la parte inferior del menisco"

explicacion: |
  El orden importa: primero la posición del recipiente, después la
  altura del ojo, y recién ahí la lectura.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "avanzado"
  tags: ["laboratorio"]

respuesta: falso
tipo: vf

enunciado: "Un estudiante lee una probeta mirándola desde arriba (no a la altura del menisco) y usando una balanza sin tarar. Esa medición está libre de error evitable."

explicacion: |
  Tiene dos errores evitables a la vez: paralaje (por mirar desde
  arriba) y un error sistemático (por no tarar).
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "intermedio"
  tags: ["laboratorio"]

respuesta: verdadero
tipo: vf

enunciado: "La apreciación de un instrumento es una propiedad del instrumento mismo, no depende de quién lo esté usando."

explicacion: |
  Es un límite físico de la escala del instrumento; el error de
  paralaje, en cambio, sí depende de la técnica de quien mide.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "avanzado"
  tags: ["laboratorio", "vocabulario"]

enunciado: "¿Por qué en un experimento de laboratorio serio no alcanza con medir una sola vez?"
tipo: mc
opciones_explicitas:
  - "Porque una sola medición no permite distinguir ni reducir el error aleatorio"
  - "Porque los instrumentos se rompen después de un solo uso"
  - "En realidad sí alcanza, medir varias veces es innecesario"
respuesta: "Porque una sola medición no permite distinguir ni reducir el error aleatorio"

explicacion: |
  Con réplicas se puede promediar y también ver qué tan dispersos están
  los resultados entre sí.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "avanzado"
  tags: ["laboratorio", "problema"]

variables:
  division: uno_de([0.1, 1, 10])

respuesta: division / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un instrumento de laboratorio tiene divisiones cada {division} unidades. ¿Cuál es su apreciación?"

pasos:
  - "{division} ÷ 2 = {division / 2}"

explicacion: |
  La regla de la apreciación (mitad de la división más chica) es la
  misma para cualquier instrumento, no sólo para los de laboratorio.
```

```
metadata:
  materia: "quimica"
  tema: "medicion_de_laboratorio"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven estas técnicas de medición en el laboratorio?"
tipo: mc
opciones_explicitas:
  - "Para reducir errores evitables y lograr mediciones confiables y reproducibles por otros"
  - "Sólo para que el informe se vea más prolijo"
  - "Sólo aplican a mediciones de líquidos"
respuesta: "Para reducir errores evitables y lograr mediciones confiables y reproducibles por otros"

explicacion: |
  Un buen resultado experimental depende tanto del cálculo como de la
  técnica con la que se midió.
```

## Sección: mezclas-metodos-separacion (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["clasificacion", "materia"]

variables:
  escenario: uno_de([["Agua destilada", "Sustancia pura/Compuesto"], ["Aire", "Mezcla homogénea"], ["Ensalada", "Mezcla heterogénea"], ["Oxígeno (O2)", "Sustancia pura/Elemento"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Sustancia pura/Elemento", "Sustancia pura/Compuesto", "Mezcla homogénea", "Mezcla heterogénea"]

enunciado: "Si tenemos {escenario[0]}, ¿cómo clasificaríamos esta muestra de materia?"

explicacion: |
  La clasificación depende de la composición: los elementos y compuestos son sustancias puras, mientras que las mezclas contienen dos o más sustancias combinadas.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["compuestos", "metodos_separacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible separar un compuesto en sus elementos constituyentes mediante métodos físicos simples como la filtración?"

explicacion: |
  Falso. Los compuestos están unidos mediante enlaces químicos; para separarlos se requiere una reacción química, no un método físico.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["formula", "elementos"]

variables:
  datos: uno_de([["Fe", "Elemento"], ["H2O", "Compuesto"], ["O2", "Elemento"], ["NaCl", "Compuesto"]])

respuesta: datos[1]
tipo: mc
opciones_explicitas: ["Elemento", "Compuesto"]

enunciado: "Dada la fórmula química {datos[0]}, ¿se trata de un elemento o de un compuesto?"

explicacion: |
  Un elemento está formado por un solo tipo de átomo; un compuesto está formado por la combinación química de dos o más elementos diferentes.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "soluciones"]

respuesta: "solucion"
tipo: completar
respuestas_validas: ["solucion", "solución"]

enunciado: "Una mezcla homogénea, donde sus componentes no se distinguen a simple vista, también se llama ___."

explicacion: |
  Las mezclas homogéneas se denominan comúnmente soluciones o disoluciones.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "homogenea", "heterogenea"]

variables:
  escenario: uno_de([["agua con sal", "homogenea"], ["agua con arena", "heterogenea"], ["acero", "homogenea"], ["granito", "heterogenea"], ["aire", "homogenea"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["homogenea", "heterogenea"]

enunciado: "El ejemplo dado es: {escenario[0]}. ¿Qué tipo de mezcla es?"

explicacion: |
  Las mezclas se clasifican en homogéneas (una sola fase) y heterogéneas (dos o más fases visibles).
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "homogenea"]

respuesta: falso
tipo: vf

enunciado: "En una mezcla homogénea se pueden distinguir los componentes a simple vista."

explicacion: |
  Incorrecto. En las mezclas homogéneas (soluciones), las partículas son tan pequeñas que no se pueden distinguir ni con un microscopio óptico.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "heterogenea"]

respuesta: "heterogenea"
tipo: completar
respuestas_validas: ["heterogenea"]

enunciado: "Una mezcla con dos o más fases visibles se llama mezcla ___."

explicacion: |
  Las mezclas heterogéneas presentan fases diferenciadas que se pueden distinguir.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "intermedio"
  tags: ["coloides", "leche"]

respuesta: verdadero
tipo: vf

enunciado: "La leche es un ejemplo de mezcla heterogénea de partículas muy chicas, un coloide."

explicacion: |
  Correcto. Aunque parece homogénea a simple vista, la leche es un coloide donde se distinguen gotas de grasa dispersas en una fase líquida.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "metodos_separacion"]

variables:
  escenarios: [["agua + arena", "filtracion"], ["agua + aceite", "decantacion"], ["agua + sal disuelta, para recuperar el solido", "evaporacion"], ["dos líquidos miscibles con distinto punto de ebullición", "destilacion"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["filtracion", "decantacion", "evaporacion", "destilacion"]

enunciado: "Para separar la mezcla de {escenarios[idx][0]}, ¿qué método utilizarías?"

explicacion: |
  El método adecuado depende de las propiedades físicas de los componentes. Para {escenarios[idx][0]}, se usa {escenarios[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "intermedio"
  tags: ["cromatografia", "propiedades"]

respuesta: "velocidad de arrastre distinta sobre un soporte"
tipo: mc
opciones_explicitas: ["velocidad de arrastre distinta sobre un soporte", "punto de ebullición", "densidad", "tamaño"]

enunciado: "¿Qué propiedad física aprovecha la cromatografía para separar los componentes de una mezcla?"

explicacion: |
  La cromatografía se basa en la diferencia de afinidad de los componentes por una fase estacionaria y una fase móvil, lo que produce distintas velocidades de arrastre.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["magnetismo", "mezclas"]

respuesta: "magnetica"
tipo: completar
respuestas_validas: ["magnetica"]

enunciado: "La separación de limaduras de hierro de arena se realiza mediante separación ___."

explicacion: |
  El hierro es un material ferromagnético, por lo que puede ser atraído por un imán, permitiendo separarlo de la arena que no tiene propiedades magnéticas.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["destilacion", "evaporacion"]

respuesta: verdadero
tipo: vf

enunciado: "La destilación permite recuperar ambos líquidos de una mezcla líquido-líquido miscible, a diferencia de la evaporación que pierde el solvente."

explicacion: |
  En la destilación, el vapor se condensa y se recupera en un recipiente distinto. En la evaporación, el solvente se escapa a la atmósfera.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["solidos", "tamizado"]

respuesta: "tamizado"
tipo: mc
opciones_explicitas: ["destilacion", "tamizado", "decantacion", "cromatografia"]

enunciado: "Para separar una mezcla de dos sólidos que presentan distinto tamaño de grano, como arena gruesa y arena fina, el método más adecuado es el..."

explicacion: |
  El tamizado usa una malla con orificios de un tamaño determinado que deja pasar las partículas más pequeñas mientras retiene las más grandes.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "intermedio"
  tags: ["solubilidad", "cristalizacion"]

respuesta: "solubilidad"
tipo: completar
respuestas_validas: ["solubilidad"]

enunciado: "La cristalización es un método de separación que aprovecha que la ___ de un sólido cambia con la temperatura."

explicacion: |
  Al disminuir la temperatura de una solución saturada, la solubilidad del soluto disminuye y precipita en forma de cristales.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["decantacion"]

respuesta: verdadero
tipo: vf

enunciado: "La decantación sirve para separar un sólido sedimentado de un líquido, o dos líquidos inmiscibles, sin necesidad de calentar."

explicacion: |
  Verdadero. La decantación se basa en la diferencia de densidades y la inmiscibilidad, permitiendo la separación por gravedad sin aporte térmico.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "intermedio"
  tags: ["escenarios", "metodos"]

variables:
  escenarios: [["separar pigmentos de una tinta", "cromatografia"], ["separar agua de alcohol", "destilacion"], ["separar sal de agua recuperando la sal", "evaporacion"]]
  idx: uno_de([0, 1, 2])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["cromatografia", "destilacion", "evaporacion", "filtracion"]

enunciado: "Si nos enfrentamos al siguiente escenario: {escenarios[idx][0]}, ¿cuál es el método de separación correspondiente?"

explicacion: |
  El método se elige según la propiedad que distingue a los componentes: afinidad con un soporte, punto de ebullición, o volatilidad del solvente.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["destilacion"]

respuesta: "destilacion"
tipo: completar
respuestas_validas: ["destilacion"]

enunciado: "El método usado para separar una mezcla de dos líquidos miscibles, aprovechando sus diferentes puntos de ebullición, se denomina ___."

explicacion: |
  La destilación aprovecha la diferencia en la volatilidad (puntos de ebullición) de los componentes para separarlos.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Todas las mezclas, tanto homogéneas como heterogéneas, se pueden separar mediante métodos físicos, sin necesidad de una reacción química."

explicacion: |
  Correcto. En una mezcla cada componente mantiene sus propiedades químicas, así que sus componentes se pueden separar físicamente (a diferencia de un compuesto).
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["mezclas", "clasificacion"]

respuesta: "mezcla homogénea"
tipo: mc
opciones_explicitas: ["mezcla homogénea", "mezcla heterogénea", "sustancia pura", "elemento"]

enunciado: "Considerando el agua de mar (agua y sales disueltas), esta se clasifica como una:"

explicacion: |
  El agua de mar es una mezcla homogénea (disolución) porque sus componentes no se distinguen a simple vista y presenta una sola fase.
```

```
metadata:
  materia: "quimica"
  tema: "mezclas_metodos_separacion"
  nivel: "basico"
  tags: ["filtracion"]

respuesta: "filtracion"
tipo: completar
respuestas_validas: ["filtracion"]

enunciado: "El proceso para separar un sólido de un líquido mediante el uso de un papel poroso se denomina ___."

explicacion: |
  La filtración deja pasar el líquido a través de un medio poroso mientras retiene las partículas sólidas más grandes.
```

## Sección: modelos-atomicos (21 preguntas)

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["historia", "atomos"]

respuesta: ["Dalton", "Thomson", "Rutherford", "Bohr"]
tipo: ordenar
opciones_explicitas: ["Dalton", "Thomson", "Rutherford", "Bohr"]

enunciado: "Ordena cronológicamente los siguientes modelos atómicos, desde el más antiguo al más reciente."

explicacion: |
  El orden correcto es: Dalton (1803), Thomson (1897), Rutherford (1911) y Bohr (1913).
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["thomson", "electron"]

variables:
  escenarios: [["Dalton", "esfera maciza"], ["Thomson", "budín de pasas"], ["Rutherford", "núcleo denso"], ["Bohr", "órbitas de energía fija"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["esfera maciza", "budín de pasas", "núcleo denso", "órbitas de energía fija"]

enunciado: "Si el científico es {escenarios[idx][0]}, ¿cuál es el nombre o descripción de su modelo atómico?"

explicacion: |
  El modelo de {escenarios[idx][0]} se conoce como {escenarios[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["dalton", "electron"]

respuesta: falso
tipo: vf

enunciado: "¿El modelo atómico de Dalton ya incluía al electrón como partícula subatómica?"

explicacion: |
  Falso. Dalton consideraba el átomo como una esfera maciza e indivisible; fue Thomson quien descubrió el electrón varias décadas después.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["rutherford", "nucleo"]

variables:
  metal: "oro"

respuesta: metal
tipo: completar
respuestas_validas: [metal]

enunciado: "El experimento que llevó a Rutherford a proponer un núcleo denso y positivo consistió en bombardear con partículas alfa una fina lámina de ___."

explicacion: |
  Rutherford usó una lámina de oro para observar la dispersión de partículas alfa, lo que reveló la existencia de un núcleo central pequeño y denso.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["atomos", "electron", "thomson"]

respuesta: "Thomson"
tipo: mc
opciones_explicitas: ["Dalton", "Thomson", "Rutherford", "Bohr"]

enunciado: "¿Qué científico descubrió el electrón mediante experimentos con tubos de rayos catódicos?"

explicacion: |
  J.J. Thomson descubrió el electrón en 1897, demostrando que el átomo no era una esfera indivisible como proponía Dalton, sino que contenía partículas subatómicas con carga negativa.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["rutherford", "nucleo", "espacio_vacio"]

respuesta: verdadero
tipo: vf

enunciado: "En el modelo atómico de Rutherford, el átomo está compuesto mayoritariamente por espacio vacío, con un núcleo pequeño y denso en el centro."

explicacion: |
  El experimento de la lámina de oro demostró que la masa del átomo está concentrada en un núcleo central, dejando grandes zonas de vacío donde están los electrones.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["rutherford", "bohr", "electromagnetismo"]

respuesta: "El electrón debería emitir radiación continua y caer en espiral hacia el núcleo"
tipo: mc
opciones_explicitas: ["El electrón debería emitir radiación continua y caer en espiral hacia el núcleo", "El átomo era demasiado grande para ser estable", "No explicaba la existencia de los neutrones", "Los electrones no tenían carga eléctrica"]

enunciado: "¿Cuál era el principal problema del modelo de Rutherford que el modelo de Bohr buscaba resolver?"

explicacion: |
  Según la física clásica, una carga eléctrica en movimiento circular debería emitir radiación electromagnética, perder energía y colapsar contra el núcleo. Bohr resolvió esto con órbitas estacionarias.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["bohr", "niveles_de_energia"]

variables:
  descriptor: "fijos y permitidos"

respuesta: descriptor
tipo: completar
respuestas_validas: [descriptor]

enunciado: "En el modelo de Bohr, los electrones giran en niveles de energía ___ (no en cualquier órbita)."

explicacion: |
  Bohr propuso que los electrones sólo pueden ocupar ciertas órbitas con energías cuantizadas, evitando así el colapso del átomo.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["thomson", "electron"]

respuesta: "Electrones"
tipo: mc
opciones_explicitas: ["Protones", "Electrones", "Neutrones", "El núcleo"]

enunciado: "En el modelo atómico de Thomson, comparado con un budín de pasas, ¿qué representan las pasas?"

explicacion: |
  Thomson propuso que el átomo era una esfera de carga positiva con electrones incrustados (las pasas), lo que explicaba la neutralidad eléctrica.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["dalton", "teoria_atomica"]

respuesta: falso
tipo: vf

enunciado: "El modelo de Dalton describía al átomo como una esfera con una estructura interna compleja."

explicacion: |
  Dalton consideraba al átomo como una esfera indivisible, sólida e inmutable, sin estructura interna conocida.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["historia_atomica", "modelos"]

variables:
  escenarios: [["Thomson", "la existencia del electrón"], ["Rutherford", "que la carga positiva está concentrada en un núcleo"], ["Bohr", "por qué los átomos emiten luz en colores específicos"]]
  idx: uno_de([0, 1, 2])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["la existencia del electrón", "que la carga positiva está concentrada en un núcleo", "por qué los átomos emiten luz en colores específicos"]

enunciado: "Considera el modelo de {escenarios[idx][0]}. ¿Qué explicó este modelo por primera vez?"

explicacion: |
  Cada modelo histórico aportó un avance fundamental: Thomson descubrió el electrón, Rutherford el núcleo y Bohr los niveles de energía.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["cuantica", "orbitales"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo actual (cuántico) reemplaza las órbitas fijas de Bohr por orbitales, zonas de probabilidad de hallar un electrón."

explicacion: |
  A diferencia del modelo de Bohr, donde los electrones siguen trayectorias circulares definidas, el modelo cuántico describe la probabilidad de posición mediante orbitales.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["atomos", "teoria_atomica"]

variables:
  escenarios: [["Dalton", "no consideraba la existencia de partículas subatómicas"], ["Thomson", "no ubicaba correctamente la carga positiva del átomo"], ["Rutherford", "no explicaba por qué los electrones no colapsaban con el núcleo"], ["Bohr", "sus órbitas definidas no son compatibles con la mecánica cuántica"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["no consideraba la existencia de partículas subatómicas", "no ubicaba correctamente la carga positiva del átomo", "no explicaba por qué los electrones no colapsaban con el núcleo", "sus órbitas definidas no son compatibles con la mecánica cuántica"]

enunciado: "Considerando el modelo atómico de {escenarios[idx][0]}, ¿cuál era su principal limitación?"

explicacion: |
  El modelo de {escenarios[idx][0]} fue superado porque {escenarios[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["rutherford", "nucleo_atomico"]

respuesta: "Rutherford"
tipo: completar
respuestas_validas: ["Rutherford"]

enunciado: "El átomo con carga positiva concentrada en un punto pequeño y denso, con electrones lejos girando alrededor, es el modelo de ___."

explicacion: |
  El modelo de Rutherford introdujo la idea de un núcleo central pequeño y denso, rompiendo con el "budín de pasas" de Thomson.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["historia_quimica", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "Cada modelo atómico fue reemplazado porque el anterior estaba completamente equivocado, no porque resolviera un problema nuevo con evidencia nueva."

explicacion: |
  Falso. Cada modelo resolvió el problema que dejaba el anterior con evidencia experimental nueva (el electrón, el núcleo, los espectros de luz) — no fue descartado por estar "mal", sino superado.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["cientificos", "historia"]

respuesta: "Mendeleiev"
tipo: mc
opciones_explicitas: ["Dalton", "Thomson", "Rutherford", "Bohr", "Mendeleiev"]

enunciado: "De la siguiente lista de científicos, ¿cuál NO propuso un modelo atómico dentro de la secuencia histórica Dalton→Thomson→Rutherford→Bohr?"

explicacion: |
  Mendeléyev es conocido por la Tabla Periódica, no por uno de los cuatro modelos atómicos de esta secuencia.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "intermedio"
  tags: ["bohr", "espectros"]

respuesta: verdadero
tipo: vf

enunciado: "El modelo de Bohr explica por qué los átomos excitados emiten luz en colores (longitudes de onda) específicos, y no en cualquier color."

explicacion: |
  Como los electrones sólo pueden saltar entre niveles de energía fijos, cada salto emite un fotón de energía exacta, que corresponde a un color específico.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["thomson", "apodo"]

respuesta: "budín de pasas"
tipo: completar
respuestas_validas: ["budín de pasas", "budin de pasas"]

enunciado: "El modelo atómico de Thomson es conocido popularmente como el modelo del ___."

explicacion: |
  Se lo llama así porque describe al átomo como una esfera de carga positiva (el budín) con los electrones incrustados (las pasas).
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["dalton", "esfera_maciza"]

respuesta: "Una esfera maciza e indivisible, sin estructura interna"
tipo: mc
opciones_explicitas: ["Una esfera maciza e indivisible, sin estructura interna", "Una esfera con electrones incrustados", "Un núcleo denso con electrones orbitando lejos", "Un núcleo con electrones en niveles de energía fijos"]

enunciado: "¿Cómo describía Dalton al átomo?"

explicacion: |
  Dalton, el primer modelo atómico moderno (1803), lo describía como una bolita maciza, indivisible e indestructible, sin partículas subatómicas.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["rutherford", "thomson", "electron"]

respuesta: falso
tipo: vf

enunciado: "Rutherford fue quien descubrió el electrón con el tubo de rayos catódicos."

explicacion: |
  Falso. El electrón fue descubierto por Thomson (1897); Rutherford llegó después (1911) y descubrió el núcleo atómico con el experimento de la lámina de oro.
```

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "avanzado"
  tags: ["bohr", "cuantica", "orbitales"]

respuesta: "los niveles de energía cuantizados"
tipo: mc
opciones_explicitas: ["los niveles de energía cuantizados", "las órbitas circulares definidas", "el electrón como partícula maciza", "la carga positiva repartida en todo el volumen"]

enunciado: "¿Qué idea de Bohr SÍ conserva el modelo cuántico actual, a pesar de reemplazar sus órbitas fijas por orbitales?"

explicacion: |
  El modelo actual descarta la trayectoria fija de Bohr, pero conserva su idea central: la energía del electrón está cuantizada, no puede tomar cualquier valor.
```

## Sección: mol-masa-molar (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["mol", "particulas"]

respuesta: verdadero
tipo: vf

enunciado: "1 mol de cualquier sustancia contiene exactamente 6,022×10²³ partículas."

explicacion: |
  El mol es la unidad que define la cantidad de sustancia y equivale al número de Avogadro de partículas.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["avogadro", "constante"]

respuesta: "6.022x10^23"
tipo: mc
opciones_explicitas: ["6.022x10^23", "3.14", "9.8", "1.6x10^-19"]

enunciado: "El número de Avogadro es aproximadamente:"

explicacion: |
  El número de Avogadro es la cantidad de entidades elementales que hay en 1 mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["avogadro", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "El número de Avogadro cambia dependiendo de la sustancia que se esté midiendo."

explicacion: |
  Falso. El número de Avogadro es una constante universal; lo que cambia según la sustancia es la MASA de un mol (la masa molar).
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["constante", "nomenclatura"]

respuesta: "N_A"
tipo: completar
respuestas_validas: ["N_A"]

enunciado: "En VBLang, la constante del número de Avogadro ya está precargada con el nombre ___."

explicacion: |
  El identificador `N_A` está disponible como constante global, sin necesidad de declararlo.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["masa_molar", "elementos"]

respuesta: "masa atómica de la tabla periódica"
tipo: mc
opciones_explicitas: ["masa atómica de la tabla periódica", "número atómico", "número de neutrones", "número de oxidación"]

enunciado: "La masa molar de un elemento coincide numéricamente con su..."

explicacion: |
  La masa molar de un elemento (en g/mol) es numéricamente igual a su masa atómica de la tabla periódica (en u).
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "agua"]

variables:
  h: 1
  o: 16

respuesta: 2 * h + o
tipo: input
tolerancia_abs: 0

enunciado: "Calcula la masa molar del agua (H2O) si la masa atómica del H es {h} y la del O es {o}."

pasos:
  - "Multiplicar la masa del H por 2 (hay 2 átomos de H): 2 × {h}"
  - "Sumar la masa del O: (2 × {h}) + {o}"

explicacion: |
  La masa molar de H2O es (2 × 1) + 16 = 18 g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "dioxido_de_carbono"]

variables:
  c: 12
  o: 16

respuesta: c + 2 * o
tipo: input
tolerancia_abs: 0

enunciado: "Calcula la masa molar del dióxido de carbono (CO2) si la masa atómica del C es {c} y la del O es {o}."

pasos:
  - "Sumar la masa de un átomo de C: {c}"
  - "Sumar la masa de dos átomos de O: 2 × {o}"

explicacion: |
  La masa molar de CO2 es 12 + (2 × 16) = 44 g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "sal_comun"]

variables:
  na: 23
  cl: 35.5

respuesta: na + cl
tipo: input
tolerancia_abs: 0.1

enunciado: "Calcula la masa molar del cloruro de sodio (NaCl) si la masa atómica del Na es {na} y la del Cl es {cl}."

explicacion: |
  La masa molar de NaCl es 23 + 35,5 = 58,5 g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La masa molar de un compuesto es la suma de las masas atómicas de todos los átomos de su fórmula."

explicacion: |
  Correcto. Para un compuesto se suman las masas atómicas de cada átomo, según su cantidad en la fórmula.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "moles"]

variables:
  masa_molar: uno_de([2, 4, 5, 10, 20, 25, 50])
  moles_deseados: random(1, 10)
  masa: masa_molar * moles_deseados

respuesta: moles_deseados
tipo: input
tolerancia_abs: 0

enunciado: "Una muestra contiene {masa} g de una sustancia cuya masa molar es {masa_molar} g/mol. ¿Cuántos moles hay en la muestra?"

explicacion: |
  n = m / M = {masa} / {masa_molar} = {moles_deseados} moles.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  masa_molar: uno_de([2, 4, 5, 10, 20, 25, 50])
  moles: random(1, 10)

respuesta: masa_molar * moles
tipo: input
tolerancia_abs: 0

enunciado: "Si hay {moles} moles de una sustancia con masa molar {masa_molar} g/mol, ¿cuál es la masa de la muestra en gramos?"

explicacion: |
  m = n × M = {moles} × {masa_molar} g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["teoria", "formula"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula para calcular el número de moles (n) es n = masa / masa molar."

explicacion: |
  Correcto. n = m / M relaciona la masa de una muestra con su masa molar para obtener la cantidad de sustancia.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["unidades", "conceptos"]

respuesta: "mol"
tipo: completar
respuestas_validas: ["mol"]

enunciado: "La unidad de la masa molar es gramos por ___."

explicacion: |
  La masa molar es la masa de un mol de sustancia, así que su unidad es g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["avogadro", "mol"]

respuesta: N_A
tipo: input
tolerancia_abs: 1000000000000000000

enunciado: "¿Cuántas partículas (átomos o moléculas) hay en exactamente 1 mol de cualquier sustancia?"

explicacion: |
  Por definición, 1 mol contiene N_A partículas (aproximadamente 6,022×10²³), sin importar de qué sustancia se trate.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["moles", "agua", "calculo"]

variables:
  masa_molar_agua: 18
  gramos: uno_de([18, 36, 54, 72, 90])

respuesta: gramos / masa_molar_agua
tipo: input
tolerancia_abs: 0.001

enunciado: "Una muestra de agua tiene {gramos} gramos. ¿Cuántos moles de agua hay? (masa molar del agua = {masa_molar_agua} g/mol)"

pasos:
  - "Identificar la masa de la muestra."
  - "Dividir la masa por la masa molar del agua."

explicacion: |
  n = m / M = {gramos} / {masa_molar_agua} moles.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["relacion", "particulas"]

respuesta: verdadero
tipo: vf

enunciado: "Cuantos más moles de una sustancia tengo, más partículas (átomos o moléculas) hay en la muestra."

explicacion: |
  Verdadero. El número de partículas se relaciona con los moles mediante N = n × N_A.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["simbologia", "notacion"]

respuesta: "M"
tipo: mc
opciones_explicitas: ["M", "m", "n", "N"]

enunciado: "¿Cuál es la abreviatura convencional de la masa molar en las fórmulas de este tema?"

explicacion: |
  La masa molar se representa con "M" (mayúscula). "m" es la masa en gramos, "n" son los moles, y "N" es el número de partículas.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["calculo", "sodio"]

variables:
  masa_atomica_na: 23

respuesta: masa_atomica_na
tipo: input
tolerancia_abs: 0

enunciado: "Si la masa atómica del sodio (Na) en la tabla periódica es {masa_atomica_na}, ¿cuál es su masa molar en g/mol?"

explicacion: |
  Para un elemento, la masa molar coincide numéricamente con la masa atómica: {masa_atomica_na} g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["conceptos", "diferencia"]

respuesta: falso
tipo: vf

enunciado: "La masa molar (M) y el número de moles (n) son la misma magnitud, sólo que con nombres distintos."

explicacion: |
  Falso. La masa molar (M) es una propiedad fija de cada sustancia (g/mol); el número de moles (n) depende de cuánta cantidad de esa sustancia hay en la muestra.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "avanzado"
  tags: ["calculo", "co2"]

variables:
  c: 12
  o: 16
  masa_molar_co2: c + 2 * o
  gramos_co2: uno_de([44, 88, 132, 176])

respuesta: gramos_co2 / masa_molar_co2
tipo: input
tolerancia_abs: 0.001

enunciado: "El CO2 tiene masa molar {masa_molar_co2} g/mol (C={c}, O={o}). Si hay {gramos_co2} g de CO2, ¿cuántos moles son?"

explicacion: |
  n = m / M = {gramos_co2} / {masa_molar_co2} moles.
```

## Sección: nanotecnologia (22 preguntas)

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["comparacion", "escala"]

variables:
  escala: uno_de(["macro", "micro", "nano"])

respuesta: falso
tipo: vf

enunciado: "Las propiedades de los materiales a nanoescala son idénticas a las que observamos a escala macroscópica."

explicacion: |
  Falso. A nanoescala, los materiales exhiben propiedades físicas, químicas y biológicas únicas debido a efectos cuánticos y al aumento drástico de la relación superficie-volumen.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "catalisis"]

variables:
  rol: "catalizador"

respuesta: verdadero
tipo: vf

enunciado: "Las nanopartículas se utilizan frecuentemente en catálisis porque su alta superficie específica permite acelerar reacciones sin consumirse en el proceso."

explicacion: |
  Verdadero. La mayor área superficial facilita el contacto con los reactivos, aumentando la eficiencia de la reacción sin alterar la naturaleza del catalizador.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fuerzas", "fisica"]

variables:
  fuerza_gravedad: "dominante"
  fuerza_electrica: "dominante"

respuesta: fuerza_electrica
tipo: input

enunciado: "A escalas nanométricas, las fuerzas de Van der Waals y las interacciones electrostáticas dominan sobre la ___."

explicacion: |
  Gravedad. A esta escala, la masa es tan pequeña que las fuerzas gravitatorias son insignificantes comparadas con las interacciones electromagnéticas.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["diseño", "ingenieria"]

variables:
  enfoque: "naturaleza"
  enfoque_nano: "a_medida"

respuesta: enfoque_nano
tipo: input

enunciado: "La nanotecnología permite diseñar materiales ___ en lugar de buscar propiedades existentes en la naturaleza."

explicacion: |
  A medida (o a la medida). Los científicos pueden construir materiales átomo por átomo para obtener características específicas como conductividad o resistencia.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["definicion", "escala"]

variables:
  nano: 1000000000
  micro: 1000000

respuesta: 1000
tipo: input

enunciado: "¿Cuántas veces más pequeña es una escala nanométrica (1 nm) comparada con una micrométrica (1 µm)?"

explicacion: |
  1000 veces. Un micrómetro es $10^{-6}$ m y un nanómetro es $10^{-9}$ m. La diferencia es un factor de $10^3$.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "medicina"]

variables:
  vehiculo: "nanoparticulas_lipidicas"

respuesta: vehiculo
tipo: input

enunciado: "En el ámbito médico, se investigan las ___ para administrar fármacos de manera dirigida y eficiente."

explicacion: |
  Nanopartículas lipídicas. Estas estructuras pueden encapsular fármacos y liberarlos en sitios específicos del cuerpo, reduciendo efectos secundarios.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["propiedades", "opticas"]

variables:
  fenomeno: "resonancia_plasmon_superficial"

respuesta: fenomeno
tipo: input

enunciado: "El cambio de color en nanopartículas metálicas se explica mediante el fenómeno de resonancia de plasmón ___."

explicacion: |
  Superficial. Es la oscilación colectiva de los electrones libres en la superficie del metal cuando interactúan con la luz.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "opticas"]

variables:
  electrones: "superficie"
  electrones_bulk: "interior"

respuesta: electrones
tipo: input

enunciado: "La resonancia de plasmón superficial implica la interacción de la luz con los electrones de la ___ de la nanopartícula."

explicacion: |
  Superficie. A diferencia de los metales macroscópicos donde los electrones están confinados en el volumen, en la nanoescala los de superficie son clave para la respuesta óptica.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "catalisis"]

variables:
  area: "alta"
  area: "baja"

respuesta: area
tipo: input

enunciado: "Las nanopartículas son excelentes catalizadores porque poseen un área superficial ___ en relación con su volumen."

explicacion: |
  Alta. Un mayor área superficial expone más sitios activos para que ocurran las reacciones químicas.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["definicion", "escala"]

variables:
  atomos: random(10, 100)

respuesta: verdadero
tipo: vf

enunciado: "Una nanopartícula típicamente contiene entre 100 y 100.000 átomos."

explicacion: |
  Verdadero. La definición de nanopartícula suele abarcar estructuras que van desde unos pocos átomos hasta unos pocos cientos de nanómetros de diámetro.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fuerzas", "interacciones"]

variables:
  fuerza: "Van_der_Waals"

respuesta: fuerza
tipo: input

enunciado: "A nanoescala, las fuerzas de ___ juegan un papel crucial en la estabilidad y agregación de las partículas."

explicacion: |
  Van der Waals. Estas fuerzas de atracción débiles, normalmente insignificantes a gran escala, se vuelven dominantes cuando la masa es pequeña.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "industria"]

variables:
  sector: "agro"
  sector: "farmaceutico"

respuesta: sector
tipo: input

enunciado: "En Argentina, la nanotecnología tiene aplicaciones relevantes en el sector agroindustrial, por ejemplo en la liberación controlada de ___."

explicacion: |
  Fertilizantes o pesticidas. Las nanopartículas permiten una entrega más eficiente y menos contaminante de insumos agrícolas.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "electricas"]

variables:
  propiedad: "conductividad"

respuesta: propiedad
tipo: input

enunciado: "La nanotecnología permite modificar la ___ eléctrica de los materiales, creando nuevos conductores o aislantes."

explicacion: |
  Conductividad. Al cambiar la estructura y el tamaño, se altera el comportamiento de los electrones, modificando cómo fluye la corriente.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "mecanicas"]

variables:
  propiedad: "resistencia"

respuesta: propiedad
tipo: input

enunciado: "Los nanomateriales como los nanotubos de carbono se destacan por su extrema ___ mecánica."

explicacion: |
  Resistencia. La estructura atómica ordenada y la falta de defectos macroscópicos les confieren una resistencia muy superior a la del acero.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["matematica", "conversion"]

variables:
  nm: 5
  um: 0.005

respuesta: um
tipo: input

enunciado: "5 nanómetros equivalen a ___ micrómetros."

explicacion: |
  0.005. Para convertir nanómetros a micrómetros, se divide por 1000 ($5 / 1000 = 0.005$).
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fuerzas", "estabilidad"]

variables:
  fuerza: "electrostatica"

respuesta: fuerza
tipo: input

enunciado: "La repulsión ___ entre nanopartículas cargadas ayuda a evitar su agregación y mantiene la suspensión estable."

explicacion: |
  Electrostatica. Las cargas superficiales generan fuerzas de repulsión que contrarrestan las fuerzas de atracción de Van der Waals.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["definicion", "concepto"]

variables:
  campo: "nanotecnologia"

respuesta: campo
tipo: input

enunciado: "La ___ es el campo que manipula la materia a escala nanométrica."

explicacion: |
  Nanotecnología. Se define por la capacidad de controlar la materia átomo por átomo o molécula por molécula.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "opticas"]

variables:
  propiedad: "color"

respuesta: propiedad
tipo: input

enunciado: "Un ejemplo clásico de propiedad única a nanoescala es el cambio de ___ en el oro."

explicacion: |
  Color. El oro nano puede ser rojo, púrpura o azul, a diferencia del amarillo macroscópico.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "filtracion"]

variables:
  aplicacion: "filtracion_agua"

respuesta: aplicacion
tipo: input

enunciado: "Las membranas con nanocanales se utilizan para la ___ de contaminantes y virus."

explicacion: |
  Filtración de agua. Los poros a escala nanométrica permiten el paso del agua pero retienen impurezas y microorganismos.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fisica", "cuantica"]

variables:
  efecto: "cuantico"

respuesta: efecto
tipo: input

enunciado: "A escalas muy pequeñas, los efectos ___ comienzan a dominar el comportamiento de los materiales."

explicacion: |
  Cuánticos. La física clásica deja de ser suficiente para describir el comportamiento de la materia a esta escala.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["diseño", "ingenieria"]

variables:
  metodo: "atomico"

respuesta: metodo
tipo: input

enunciado: "La nanotecnología permite construir materiales ___ por átomo o molécula."

explicacion: |
  A medida. Esto permite obtener características específicas que no existen en la naturaleza.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "superficie"]

variables:
  razon: "superficie"

respuesta: razon
tipo: input

enunciado: "La alta reactividad de las nanopartículas se debe a que una gran fracción de átomos está en la ___."

explicacion: |
  Superficie. Las reacciones químicas ocurren en la superficie, por lo que más superficie significa mayor reactividad.
```
