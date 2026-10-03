# Examen jefe — [PENDIENTE #843]

> Logro #843. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **104 preguntas totales** en 5/5 secciones.

---

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
respuestas_validas:
  - "solucion"
  - "solución"

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
respuestas_validas:
  - "heterogenea"

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
respuestas_validas:
  - "magnetica"

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
respuestas_validas:
  - "solubilidad"

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
respuestas_validas:
  - "destilacion"

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
respuestas_validas:
  - "filtracion"

enunciado: "El proceso para separar un sólido de un líquido mediante el uso de un papel poroso se denomina ___."

explicacion: |
  La filtración deja pasar el líquido a través de un medio poroso mientras retiene las partículas sólidas más grandes.
```

## Sección: ph-poh (23 preguntas)

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

enunciado: "¿Qué mide el pH de una solución?"
tipo: mc
opciones_explicitas:
  - "Qué tan ácida o básica es, a partir de la concentración de iones hidrógeno (H+)"
  - "La temperatura de la solución"
  - "Cuánta sal tiene disuelta la solución"
respuesta: "Qué tan ácida o básica es, a partir de la concentración de iones hidrógeno (H+)"

explicacion: |
  Es una medida de acidez/basicidad, no de temperatura ni de salinidad.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El pH se calcula como pH = -log₁₀[H⁺], el logaritmo en base 10 de la concentración de H⁺, con el signo cambiado."

explicacion: |
  Es la fórmula que conecta el pH con la concentración real de iones
  hidrógeno.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala de pH va de 0 a 14."

explicacion: |
  Es el rango habitual usado para clasificar soluciones acuosas.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una solución con pH menor a 7 es ácida."

explicacion: |
  A menor pH, mayor concentración de H⁺, más ácida.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una solución con pH igual a 7 es neutra, como el agua pura a 25°C."

explicacion: |
  Es el punto medio de la escala de 0 a 14.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una solución con pH mayor a 7 es básica (o alcalina)."

explicacion: |
  A mayor pH, menor concentración de H⁺.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "calculo"]

variables:
  exponente: random(1, 6)
  concentracion_h: 1 / 10 ^ exponente

respuesta: -log10(concentracion_h)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una solución tiene una concentración de H⁺ de {concentracion_h} mol/L. ¿Cuál es su pH?"

pasos:
  - "pH = -log₁₀({concentracion_h})"

explicacion: |
  Se aplica la fórmula del pH directamente sobre la concentración dada.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

enunciado: "¿Qué mide el pOH de una solución?"
tipo: mc
opciones_explicitas:
  - "La concentración de iones hidroxilo (OH-), con la misma lógica logarítmica que el pH"
  - "Lo mismo que el pH, con otro nombre"
  - "La cantidad de oxígeno disuelto"
respuesta: "La concentración de iones hidroxilo (OH-), con la misma lógica logarítmica que el pH"

explicacion: |
  Es la contraparte del pH, para el otro ion relevante del agua.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El pOH se calcula como pOH = -log₁₀[OH⁻]."

explicacion: |
  Misma estructura que la fórmula del pH, aplicada al ion hidroxilo.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A 25°C, el pH y el pOH de cualquier solución acuosa siempre suman 14."

explicacion: |
  Conociendo uno de los dos, el otro se obtiene directamente sin
  necesitar la concentración de iones.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "calculo"]

variables:
  ph: random(1, 13)

respuesta: 14 - ph
tipo: input
tolerancia_abs: 0

enunciado: "Una solución tiene un pH de {ph}. ¿Cuál es su pOH?"

explicacion: |
  Se resta el pH de 14.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "calculo"]

variables:
  poh: random(1, 13)

respuesta: 14 - poh
tipo: input
tolerancia_abs: 0

enunciado: "Una solución tiene un pOH de {poh}. ¿Cuál es su pH?"

explicacion: |
  Se resta el pOH de 14.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada unidad de diferencia en el pH representa un cambio de 10 veces en la concentración de H⁺."

explicacion: |
  Es consecuencia directa de que la escala de pH es logarítmica en base
  10.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "avanzado"
  tags: ["ph", "calculo"]

enunciado: "Una solución de pH 3 comparada con una de pH 5 (dos unidades más de pH), ¿cuántas veces más concentración de H⁺ tiene la de pH 3?"
tipo: mc
opciones_explicitas:
  - "100 veces más"
  - "2 veces más"
  - "10 veces más"
respuesta: "100 veces más"

explicacion: |
  Dos unidades de diferencia son 10 × 10 = 100 veces, no una simple
  resta.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "avanzado"
  tags: ["ph", "calculo"]

variables:
  ph: random(1, 8)

respuesta: 1 / 10 ^ ph
tipo: input
tolerancia_abs: 0.001

enunciado: "Una solución tiene un pH de {ph}. ¿Cuál es su concentración de H⁺, en mol/L?"

pasos:
  - "[H⁺] = 10^(-{ph})"

explicacion: |
  Se despeja la concentración invirtiendo la fórmula del pH.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El agua pura tiene un pH cercano a 7, a 25°C — el punto neutro de la escala."

explicacion: |
  Es el ejemplo de referencia más habitual para \"neutro\".
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La relación entre pH y concentración de H⁺ es inversa: a menor pH, mayor concentración de H⁺ (más ácido)."

explicacion: |
  Es por el signo negativo en la fórmula del pH — un punto que suele
  confundir si no se lo tiene en cuenta.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "comparacion"]

variables:
  ph_a: random(1, 4)
  ph_b: random(8, 13)

respuesta: (ph_a < ph_b)
tipo: vf

enunciado: "Una solución con pH {ph_a} y otra con pH {ph_b}: ¿la primera es más ácida que la segunda?"

explicacion: |
  Cuanto menor el número de pH, más ácida es la solución.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "orden"]

tipo: ordenar
enunciado: "Ordená estas sustancias de menor a mayor pH (de más ácida a más básica)."
opciones_explicitas:
  - "Agua pura (pH 7)"
  - "Lejía (pH 13)"
  - "Jugo de limón (pH 2)"
respuesta_orden: ["Jugo de limón (pH 2)", "Agua pura (pH 7)", "Lejía (pH 13)"]

explicacion: |
  A menor pH, más ácida; a mayor pH, más básica.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "verificacion"]

variables:
  ph: random(1, 13)
  correcto: 14 - ph
  error: uno_de([0, 0, 0, 2, -2])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.5)
tipo: vf

enunciado: "¿Está bien calculado esto? pH de {ph}, pOH informado: {mostrado}."

explicacion: |
  Se vuelve a calcular 14 - pH y se compara con el valor informado.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph"]

variables:
  ph: random(1, 13)
  poh: 14 - ph

tipo: completar
enunciado: "Una solución tiene pH {ph}. Completá: ___ (pOH) = 14 - {ph}."
respuestas_validas:
  - poh

explicacion: |
  Se resta el pH de 14 para obtener el pOH.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala de pH es logarítmica, no lineal: \"bajar 2 puntos de pH\" es un cambio de 100 veces en la concentración de H⁺, no un cambio chico."

explicacion: |
  Es el mismo tipo de escala logarítmica que aparece en decibeles y en
  la escala Richter.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El pH mide la acidez con una escala logarítmica de 0 a 14, el pOH hace lo mismo con el ion hidroxilo, y ambos suman siempre 14 a 25°C."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: modelos-atomicos (21 preguntas)

```
metadata:
  materia: "quimica"
  tema: "modelos_atomicos"
  nivel: "basico"
  tags: ["historia", "atomos"]

respuesta_orden: ["Dalton", "Thomson", "Rutherford", "Bohr"]
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
respuestas_validas:
  - metal

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
respuestas_validas:
  - descriptor

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
respuestas_validas:
  - "Rutherford"

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
respuestas_validas:
  - "budín de pasas"
  - "budin de pasas"

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

## Sección: propiedades-coligativas (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["propiedades_coligativas", "soluto", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Las propiedades coligativas dependen exclusivamente de la cantidad de partículas de soluto presentes en la solución y no de la naturaleza química de la sustancia que actúa como soluto."

explicacion: |
  Correcto. Las propiedades coligativas (presión de vapor, punto de ebullición, punto de congelación, presión osmótica) dependen sólo de la concentración de partículas.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["disociacion", "soluto"]

respuesta: falso
tipo: vf

enunciado: "Un mol de sal de mesa (NaCl), que se disocia en dos iones (Na+ y Cl-), tiene el mismo efecto coligativo que un mol de azúcar (sacarosa), que no se disocia en la solución."

explicacion: |
  Falso. Como el NaCl se disocia, 1 mol de NaCl produce 2 moles de partículas; 1 mol de azúcar produce sólo 1 mol de partículas. El NaCl tiene el doble de efecto coligativo.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["definicion", "terminologia"]

respuesta: "coligativa"
tipo: completar
respuestas_validas:
  - "coligativa"

enunciado: "La propiedad que depende únicamente de la CANTIDAD de partículas de soluto disueltas, y no de la identidad química del soluto, se llama propiedad ___."

explicacion: |
  "Coligativa" viene del latín "colligare" (ligar, atar): estas propiedades están ligadas a la cantidad de partículas, no a cuáles son.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["disociacion", "nacl"]

respuesta: "2 moles de partículas"
tipo: mc
opciones_explicitas: ["2 moles de partículas", "1 mol de partículas", "3 moles de partículas", "0.5 moles de partículas"]

enunciado: "Cuando 1 mol de NaCl se disuelve en agua y se disocia por completo en Na+ y Cl-, ¿cuántas moles de partículas aporta al medio?"

explicacion: |
  NaCl → Na+ + Cl−. Como hay dos iones por cada unidad de NaCl, la cantidad de partículas se duplica.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["crioscopia"]

respuesta: verdadero
tipo: vf

enunciado: "Un solvente con un soluto disuelto se congela a una temperatura menor que el solvente puro."

explicacion: |
  Correcto. La presencia de un soluto disminuye la temperatura de congelación del solvente: descenso crioscópico.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Se usa sal en las calles con hielo para que la mezcla necesite una temperatura más baja para congelarse."

explicacion: |
  Al disolver sal en el hielo, el descenso crioscópico baja el punto de congelación, así que el hielo se derrite incluso bajo cero.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["calculo", "crioscopia"]

variables:
  k_constante: uno_de([1, 2, 3])
  molalidad: uno_de([1, 2, 3, 4])

respuesta: k_constante * molalidad
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá el descenso de la temperatura de congelación usando la constante crioscópica Kc = {k_constante} y molalidad m = {molalidad}."

pasos:
  - "Fórmula: ΔT = Kc × m"
  - "ΔT = {k_constante} × {molalidad}"

explicacion: |
  El descenso crioscópico es Kc multiplicado por la molalidad de la solución.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["formula"]

respuesta: "molalidad"
tipo: completar
respuestas_validas:
  - "molalidad"
  - "m"

enunciado: "La fórmula del descenso crioscópico es ΔT = Kc × ___."

explicacion: |
  El descenso de la temperatura de congelación es proporcional a la molalidad de la solución.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["ebulloscopia"]

respuesta: verdadero
tipo: vf

enunciado: "Un solvente con un soluto no volátil disuelto hierve a una temperatura mayor que el solvente puro."

explicacion: |
  Esto es el ascenso ebulloscópico: el soluto disminuye la presión de vapor del solvente, así que hace falta más temperatura para que hierva.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["calculo", "ebulloscopia"]

variables:
  ke: uno_de([1, 2, 3])
  m: uno_de([1, 2, 3, 4])

respuesta: ke * m
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá el ascenso de la temperatura de ebullición usando ΔT = Ke × m, con Ke = {ke} y m = {m}."

pasos:
  - "ΔT = {ke} × {m}"

explicacion: |
  El ascenso ebulloscópico es directamente proporcional a la molalidad del soluto.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "A mayor cantidad de soluto disuelto, mayor es el desvío de temperatura respecto al solvente puro, tanto en el ascenso ebulloscópico como en el descenso crioscópico."

explicacion: |
  Las propiedades coligativas dependen sólo de la cantidad de partículas de soluto, no de su identidad química.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["aplicacion", "ebulloscopia"]

respuesta: "más alta que el agua sola"
tipo: mc
opciones_explicitas: ["más alta que el agua sola", "más baja que el agua sola", "igual que el agua sola", "no hierve nunca"]

enunciado: "Cuando se agrega sal al agua para cocinar, el agua hierve a una temperatura..."

explicacion: |
  La sal (soluto no volátil) produce un ascenso ebulloscópico: eleva el punto de ebullición por encima de los 100°C (a 1 atm).
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["osmosis", "membrana"]

respuesta: "membrana semipermeable"
tipo: mc
opciones_explicitas: ["membrana semipermeable", "pared sólida", "vacío", "llave de paso"]

enunciado: "La presión osmótica ocurre cuando dos soluciones de distinta concentración están separadas por una..."

explicacion: |
  La ósmosis requiere una membrana semipermeable, que deja pasar el solvente pero no el soluto.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["osmosis", "flujo"]

respuesta: verdadero
tipo: vf

enunciado: "En el proceso de ósmosis, el solvente se mueve desde el lado menos concentrado hacia el lado más concentrado."

explicacion: |
  Correcto. El solvente fluye hacia donde hay más soluto, buscando igualar las concentraciones.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["calculo", "osmosis"]

variables:
  M: uno_de([1, 2])
  R: 0.082
  T: uno_de([273, 298, 300])

respuesta: M * R * T
tipo: completar
tolerancia_abs: 0.5

enunciado: "Calculá la presión osmótica de una solución con molaridad {M} M a temperatura {T} K, usando R = {R} L·atm/(mol·K)."

pasos:
  - "π = M × R × T"

explicacion: |
  π = {M} × {R} × {T} atm.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["biologia", "osmosis"]

respuesta: verdadero
tipo: vf

enunciado: "Una célula puesta en agua muy pura (sin sal) se hincha porque el agua entra buscando igualar la concentración de sales de adentro."

explicacion: |
  Verdadero. El agua externa es hipotónica respecto a la célula, así que el agua entra por ósmosis y la célula aumenta de volumen.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["formula", "osmosis"]

respuesta: "T"
tipo: completar
respuestas_validas:
  - "T"
  - "temperatura absoluta"

enunciado: "La fórmula de la presión osmótica es π = M × R × ___."

explicacion: |
  La variable que representa la temperatura en esta fórmula es la temperatura absoluta (T), en Kelvin.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "avanzado"
  tags: ["disociacion", "comparacion"]

respuesta: "CaCl2 (se disocia en 3 iones: Ca2+ + 2 Cl-)"
tipo: mc
opciones_explicitas: ["CaCl2 (se disocia en 3 iones: Ca2+ + 2 Cl-)", "NaCl (se disocia en 2 iones)", "Glucosa (no se disocia)", "Los tres tienen el mismo efecto"]

enunciado: "Con la misma cantidad de moles disueltos, ¿cuál de estos solutos produce el mayor efecto coligativo?"

explicacion: |
  Cuantas más partículas libera cada unidad de soluto al disociarse, mayor el efecto coligativo. CaCl2 libera 3 partículas por unidad (1 Ca2+ + 2 Cl-), más que NaCl (2) o la glucosa, que no se disocia (1).
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["aplicacion", "crioscopia"]

respuesta: verdadero
tipo: vf

enunciado: "El anticongelante de los autos funciona bajando el punto de congelación del agua del radiador, por el mismo principio del descenso crioscópico."

explicacion: |
  Correcto. El anticongelante es un soluto disuelto en el agua del radiador que baja su punto de congelación, evitando que se congele en climas fríos.
```

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "avanzado"
  tags: ["comparacion", "resumen"]

respuesta: "menor punto de congelación y mayor punto de ebullición"
tipo: mc
opciones_explicitas: ["menor punto de congelación y mayor punto de ebullición", "mayor punto de congelación y menor punto de ebullición", "ambos puntos suben", "ambos puntos bajan"]

enunciado: "Comparado con agua pura, ¿qué le pasa al punto de congelación y al punto de ebullición del agua con sal disuelta?"

explicacion: |
  El soluto baja el punto de congelación (descenso crioscópico) y sube el punto de ebullición (ascenso ebulloscópico) — van en direcciones opuestas.
```

## Sección: atomo-particulas-subatomicas (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "neutrones", "electrones", "carga"]

variables:
  escenario: uno_de([["proton", "+1"], ["neutron", "0"], ["electron", "-1"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["+1", "0", "-1"]

enunciado: "La partícula seleccionada es un {escenario[0]}. ¿Cuál es su carga eléctrica?"

explicacion: |
  El {escenario[0]} tiene una carga de {escenario[1]}.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["masa", "electron"]

respuesta: verdadero
tipo: vf

enunciado: "La masa del electrón es casi despreciable comparada con la masa del protón."

explicacion: |
  Es verdadero. La masa del electrón es aproximadamente 1/1836 de la masa de un protón.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleo", "neutron"]

respuesta: "neutron"
tipo: completar
respuestas_validas:
  - "neutron"
  - "neutrón"

enunciado: "La partícula sin carga eléctrica, ubicada en el núcleo, es el ___."

explicacion: |
  El neutrón es la partícula subatómica sin carga eléctrica situada en el núcleo atómico.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ubicacion", "nucleo", "nube"]

variables:
  escenario: uno_de([["proton", "nucleo"], ["neutron", "nucleo"], ["electron", "nube alrededor del nucleo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["nucleo", "nube alrededor del nucleo"]

enunciado: "La partícula seleccionada es un {escenario[0]}. ¿En qué parte del átomo se ubica?"

explicacion: |
  El {escenario[0]} se encuentra en el/la {escenario[1]}.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["masa", "nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Los protones y neutrones concentran casi toda la masa del átomo?"

explicacion: |
  Verdadero. Como la masa del electrón es despreciable, la masa atómica reside casi totalmente en el núcleo (protones y neutrones).
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "electrones", "neutralidad"]

respuesta: verdadero
tipo: vf

enunciado: "Un átomo neutro tiene el mismo número de protones que de electrones."

explicacion: |
  En un átomo neutro, la carga positiva de los protones se compensa exactamente con la carga negativa de los electrones.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["cation", "carga", "electrones"]

respuesta: "positiva"
tipo: mc
opciones_explicitas: ["positiva", "negativa", "neutra"]

enunciado: "Si un átomo pierde electrones, ¿qué carga resultante queda?"

explicacion: |
  Al perder electrones (cargas negativas), el átomo queda con un exceso de protones, resultando en una carga positiva. A este ion se lo llama catión.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["anion", "carga", "electrones"]

respuesta: "negativa"
tipo: mc
opciones_explicitas: ["negativa", "positiva", "neutra"]

enunciado: "Si un átomo gana electrones, ¿qué carga resultante queda?"

explicacion: |
  Al ganar electrones (cargas negativas), el átomo tiene más electrones que protones, resultando en una carga negativa. A este ion se lo llama anión.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ion", "terminologia"]

respuesta: "ion"
tipo: completar
respuestas_validas:
  - "ion"

enunciado: "Un átomo cargado eléctricamente, por ganar o perder electrones, se llama ___."

explicacion: |
  Un ion es un átomo (o molécula) que ganó o perdió electrones, adquiriendo así una carga eléctrica neta.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "intermedio"
  tags: ["protones", "elemento", "identidad"]

respuesta: falso
tipo: vf

enunciado: "Para cambiar la identidad de un elemento químico, hay que cambiar el número de electrones y no el de protones."

explicacion: |
  La identidad de un elemento está determinada exclusivamente por su número de protones (número atómico). Cambiar los electrones sólo cambia la carga (ion), pero cambiar los protones crea un elemento distinto.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "elemento"]

respuesta: verdadero
tipo: vf

enunciado: "El número de protones de un átomo define de qué elemento se trata."

explicacion: |
  El número atómico (Z), la cantidad de protones, es lo que identifica a un elemento químico.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["isotopos", "neutrones"]

respuesta: "isótopos"
tipo: mc
opciones_explicitas: ["isótopos", "iones", "isómeros", "alótropos"]

enunciado: "¿Cómo se llaman dos átomos del mismo elemento con distinto número de neutrones?"

explicacion: |
  Los isótopos son átomos de un mismo elemento (mismo número de protones) que difieren en su número de neutrones, lo que cambia su masa atómica.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleones", "masa"]

respuesta: "nucleones"
tipo: completar
respuestas_validas:
  - "nucleones"

enunciado: "Los protones y neutrones juntos se llaman ___."

explicacion: |
  El conjunto de protones y neutrones que forman el núcleo atómico se denomina nucleones.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["isotopos", "masa"]

respuesta: verdadero
tipo: vf

enunciado: "Los isótopos de un mismo elemento tienen el mismo número de protones pero distinta masa."

explicacion: |
  Al tener distinto número de neutrones, la masa atómica (protones + neutrones) varía entre isótopos del mismo elemento.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "intermedio"
  tags: ["protones", "identidad"]

respuesta: "se convierte en otro elemento"
tipo: mc
opciones_explicitas: ["se convierte en otro elemento", "sigue siendo el mismo elemento", "se vuelve un ion", "se vuelve un isótopo"]

enunciado: "Si un átomo cambia su número de protones, ¿qué ocurre?"

explicacion: |
  Como el número de protones define la identidad del elemento, cualquier cambio en esa cantidad transforma el átomo en un elemento distinto.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "electrones", "neutro"]

variables:
  protones: random(1, 20)

respuesta: protones
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo neutro tiene {protones} protones. ¿Cuántos electrones tiene este átomo?"

explicacion: |
  En un átomo neutro, la cantidad de protones (carga positiva) es igual a la cantidad de electrones (carga negativa): las cargas se cancelan.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleo", "volumen", "estructura"]

respuesta: falso
tipo: vf

enunciado: "El núcleo ocupa la mayor parte del volumen del átomo."

explicacion: |
  Falso. El núcleo es extremadamente pequeño comparado con el volumen total del átomo; la mayor parte del volumen es el espacio donde se mueven los electrones.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleo", "particulas"]

respuesta: "electrón"
tipo: mc
opciones_explicitas: ["electrón", "protón", "neutrón", "nucleón"]

enunciado: "¿Cuál de las siguientes partículas NO se encuentra en el núcleo del átomo?"

explicacion: |
  El núcleo contiene protones y neutrones (llamados nucleones juntos). El electrón está en la nube electrónica, alrededor del núcleo.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ion", "cation", "carga"]

respuesta: "positiva"
tipo: completar
respuestas_validas:
  - "positiva"

enunciado: "Un catión tiene carga ___ porque perdió electrones."

explicacion: |
  Al perder electrones (cargas negativas), el átomo queda con exceso de protones (cargas positivas), resultando en una carga neta positiva.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ion", "anion", "carga"]

respuesta: "negativa"
tipo: completar
respuestas_validas:
  - "negativa"

enunciado: "Un anión tiene carga ___ porque ganó electrones."

explicacion: |
  Al ganar electrones (cargas negativas), el átomo tiene más electrones que protones, resultando en una carga neta negativa.
```

