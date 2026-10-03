# Examen jefe — [PENDIENTE #842]

> Logro #842. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **114 preguntas totales** en 5/5 secciones.

---

## Sección: estados-y-cambios (24 preguntas)

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["particulas", "estados"]

variables:
  descripcion: "Las partículas están muy separadas, se mueven al azar a alta velocidad y no presentan fuerzas de atracción significativas."

respuesta: "gas"
tipo: mc
opciones_explicitas: ["sólido", "líquido", "gas"]

enunciado: "Si las partículas presentan la siguiente descripción: {descripcion}, ¿a qué estado de la materia nos referimos?"

explicacion: |
  En el estado gaseoso, la energía cinética es tan alta que las fuerzas intermoleculares no logran mantener a las partículas unidas, permitiendo que ocupen todo el volumen disponible.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["propiedades", "volumen"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un líquido tiene volumen propio pero no tiene forma propia (se adapta al recipiente)?"

explicacion: |
  Correcto. Los líquidos tienen fuerzas de atracción suficientes para mantener un volumen constante, pero no para mantener una estructura rígida, lo que les permite fluir.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["plasma", "ionizacion"]

respuesta: "gas ionizado"
tipo: mc
opciones_explicitas: ["gas ionizado", "sólido denso", "líquido viscoso"]

enunciado: "El plasma se define principalmente como un..."

explicacion: |
  El plasma es un gas que ha sido sometido a tanta energía que sus electrones se han separado de los núcleos, resultando en un medio de partículas cargadas.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["energia", "temperatura"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría cinético-molecular, si la temperatura de un sistema aumenta, la energía cinética promedio de sus partículas también aumenta."

explicacion: |
  La temperatura es, por definición, una medida de la energía cinética promedio de las partículas de un cuerpo.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cambios_de_estado", "completar"]

variables:
  pares: [["el hielo derritiéndose", "fusion"], ["el vapor de agua volviéndose líquido", "condensacion"], ["el agua hirviendo", "vaporizacion"]]
  idx: uno_de([0, 1, 2])

respuesta: pares[idx][1]
tipo: completar
respuestas_validas:
  - pares[idx][1]

enunciado: "Identifica el cambio de estado que ocurre cuando: {pares[idx][0]}."

explicacion: |
  El proceso descrito corresponde a la {pares[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["sublimacion_inversa", "mc"]

respuesta: "Sublimación inversa"
tipo: mc
opciones_explicitas: ["Fusión", "Sublimación inversa", "Condensación", "Sublimación"]

enunciado: "¿Cómo se denomina al paso directo del estado gaseoso al estado sólido sin pasar por el líquido?"

explicacion: |
  El paso de gas a sólido se llama sublimación inversa (o deposición).
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["completar", "estados"]

variables:
  pares: [["fusión", "sólido a líquido"], ["vaporización", "líquido a gas"], ["condensación", "gas a líquido"], ["sublimación", "sólido a gas"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: pares[idx][0]
tipo: completar
respuestas_validas:
  - pares[idx][0]

enunciado: "¿Cómo se llama el cambio de estado descrito como: {pares[idx][1]}?"

explicacion: |
  El cambio de {pares[idx][1]} es la {pares[idx][0]}.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["sublimacion", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "¿En el proceso de sublimación, la sustancia pasa directamente de sólido a gas sin pasar por el estado líquido?"

explicacion: |
  Es verdadero. La sublimación es un cambio de estado directo que evita la fase líquida.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["calor", "temperatura", "cambio_de_estado"]

respuesta: verdadero
tipo: vf

enunciado: "Durante un cambio de estado, ¿la temperatura se mantiene constante mientras se sigue entregando calor?"

explicacion: |
  En un cambio de fase, la energía térmica se utiliza para romper las fuerzas de atracción intermoleculares en lugar de aumentar la energía cinética (temperatura).
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["calor_latente", "calor_sensible"]

respuesta: "Hielo derritiéndose en un vaso"
tipo: mc
opciones_explicitas: ["Calentar agua de 20°C a 50°C", "Hielo derritiéndose en un vaso", "Calentar un metal"]

enunciado: "Identifica la situación que representa un proceso de calor LATENTE:"

explicacion: |
  El calor latente ocurre durante el cambio de fase (fusión del hielo), donde la temperatura no varía a pesar de la transferencia de energía.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["agua", "ebullicion"]

variables:
  valor: 100

respuesta: valor
tipo: completar
respuestas_validas:
  - valor

enunciado: "El agua hirviendo a presión atmosférica normal no supera los {valor} grados Celsius."

explicacion: |
  A presión atmosférica estándar (1 atm), el agua alcanza su punto de ebullición a los 100°C.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["fusion", "endotermico"]

respuesta: "endotermico"
tipo: mc
opciones_explicitas: ["endotermico", "exotermico"]

enunciado: "¿Cómo se clasifica el proceso de fusión (paso de sólido a líquido) según el flujo de calor?"

explicacion: |
  La fusión es un proceso endotérmico porque el sistema debe absorber calor del entorno para romper las estructuras sólidas.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cambios_de_estado", "cotidiano"]

variables:
  ejemplos: [["hielo seco humeando", "sublimacion"], ["escarcha en el pasto", "sublimacion inversa"], ["vapor en el espejo del baño", "condensacion"], ["ropa que se seca al sol", "vaporizacion"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: ejemplos[idx][1]
tipo: mc
opciones_explicitas: ["sublimacion", "sublimacion inversa", "condensacion", "vaporizacion"]

enunciado: "Si observamos el fenómeno de {ejemplos[idx][0]}, ¿qué proceso de cambio de estado está ocurriendo?"

explicacion: |
  El fenómeno descrito corresponde a la {ejemplos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["vaporizacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La evaporación y la ebullición son las dos formas de vaporización."

explicacion: |
  Es correcto. La evaporación es un proceso superficial y lento, mientras que la ebullición es un proceso en toda la masa del líquido con formación de burbujas.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["termodinamica", "energia"]

variables:
  cambios: [["fusión", "endotérmico"], ["solidificación", "exotérmico"], ["vaporización", "endotérmico"], ["condensación", "exotérmico"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: cambios[idx][1]
tipo: completar
respuestas_validas:
  - cambios[idx][1]

enunciado: "El proceso de {cambios[idx][0]} es un proceso ___ (absorbe o libera calor)."

explicacion: |
  Los procesos que absorben calor para cambiar de estado (como la fusión) son endotérmicos; los que lo liberan (como la condensación) son exotérmicos.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["cinetica", "teoria_cinetica"]

respuesta: "MAYOR"
tipo: mc
opciones_explicitas: ["MAYOR", "MENOR", "IGUAL"]

enunciado: "¿La energía cinética promedio de las partículas de un gas es MAYOR, MENOR o IGUAL que la de un sólido a la misma masa y temperatura?"

explicacion: |
  En un gas, las fuerzas de atracción intermolecular son mucho más débiles, lo que permite un movimiento desordenado y mayor energía cinética promedio que en un sólido.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cinetica", "estados_materia", "ordenar"]

variables:
  orden_correcto: ["Sólido", "Líquido", "Gas"]

respuesta_orden: orden_correcto
tipo: ordenar
opciones_explicitas: ["Sólido", "Líquido", "Gas"]

enunciado: "Ordena los estados de la materia de MENOR a MAYOR energía cinética de sus partículas."

explicacion: |
  En el sólido la energía es mínima (solo vibran), en el líquido es intermedia y en el gas es máxima debido a la alta velocidad de sus partículas.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["solido", "particulas"]

respuesta: verdadero
tipo: vf

enunciado: "En un sólido, las partículas no se desplazan de su lugar, solo vibran en sus posiciones de equilibrio."

explicacion: |
  Correcto. Las fuerzas de atracción son lo suficientemente fuertes como para mantener a las partículas en posiciones fijas, permitiendo únicamente el movimiento vibratorio.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["forma", "volumen"]

respuesta: "Sólido"
tipo: mc
opciones_explicitas: ["Sólido", "Líquido", "Gas"]

enunciado: "¿Qué estado de la materia posee forma propia Y volumen propio?"

explicacion: |
  Los sólidos tienen fuerzas intermoleculares fuertes que mantienen su forma y volumen constantes independientemente del recipiente.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["gas", "propiedades"]

respuesta: "gas"
tipo: completar
respuestas_validas:
  - "gas"

enunciado: "El estado que no tiene forma propia NI volumen propio es el ___."

explicacion: |
  Los gases se expanden hasta ocupar todo el volumen del recipiente que los contiene y adoptan su forma, debido a la gran distancia entre sus partículas.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["agua", "puntos_criticos"]

variables:
  valor_fusion: 0

respuesta: valor_fusion
tipo: completar

enunciado: "Indica el punto de fusión del agua en grados Celsius a presión atmosférica normal."

explicacion: |
  El punto de fusión del agua es 0°C.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["agua", "puntos_criticos"]

variables:
  valor_ebullicion: 100

respuesta: valor_ebullicion
tipo: completar

enunciado: "Indica el punto de ebullición del agua en grados Celsius a presión atmosférica normal."

explicacion: |
  El punto de ebullición del agua es 100°C.
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "basico"
  tags: ["cambios_de_estado", "condensacion"]

respuesta: "El vapor se enfría y condensa al tocar la superficie fría"
tipo: mc
opciones_explicitas: ["El vapor se enfría y condensa al tocar la superficie fría", "El vapor se expande por el choque térmico", "La tapa absorbe el calor y evapora las gotas", "El vapor se sublima directamente"]

enunciado: "¿Por qué el vapor de una olla hirviendo se convierte en gotitas al tocar una tapa fría?"

explicacion: |
  Al entrar en contacto con una superficie fría, el vapor de agua pierde energía térmica, pasando de estado gaseoso a líquido (condensación).
```

```
metadata:
  materia: "quimica"
  tema: "estados_y_cambios"
  nivel: "intermedio"
  tags: ["plasma", "universo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el plasma el estado de la materia más común en el universo, superando la suma de sólidos, líquidos y gases?"

explicacion: |
  Debido a la enorme cantidad de estrellas y gas ionizado en el espacio, el plasma es el estado predominante en el cosmos.
```

## Sección: cinetica-reaccion (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "La cinética química estudia qué tan rápido ocurre una reacción, no si esta libera o absorbe energía."

explicacion: |
  La cinética se ocupa de la velocidad y los mecanismos de reacción; la termoquímica estudia los cambios de energía.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["definiciones"]

respuesta: "tiempo"
tipo: completar
respuestas_validas:
  - "tiempo"

enunciado: "La velocidad de reacción se mide como el cambio de concentración dividido el cambio de ___."

explicacion: |
  v = Δ[concentración] / Δt.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "La termoquímica dice hasta dónde llega una reacción y el equilibrio dice qué tan rápido pasa."

explicacion: |
  Incorrecto — es al revés: el equilibrio dice hasta dónde llega, y la cinética (no la termoquímica) dice qué tan rápido.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["calculo", "velocidad_media"]

variables:
  datos: [[10, 2], [20, 4], [40, 5]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0] / datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá la velocidad media de una reacción si el cambio de concentración es {datos[idx][0]} unidades y el intervalo de tiempo es {datos[idx][1]} segundos."

pasos:
  - "v = Δ[concentración] / Δt"

explicacion: |
  v = {datos[idx][0]} / {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["cinetica", "energia_activacion"]

respuesta: "activacion"
tipo: completar
respuestas_validas:
  - "activacion"

enunciado: "La energía mínima que necesitan las partículas para reaccionar al chocar se llama energía de ___."

explicacion: |
  La energía de activación es la barrera que los reactivos deben superar para transformarse en productos.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["cinetica", "velocidad_reaccion"]

respuesta: falso
tipo: vf

enunciado: "Una reacción con energía de activación ALTA es más rápida que una con energía de activación baja."

explicacion: |
  Falso. A mayor energía de activación, menos partículas la superan en cada choque: la reacción es más lenta.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["termodinamica", "cinetica"]

respuesta: falso
tipo: vf

enunciado: "La energía de activación depende de si la reacción es endotérmica o exotérmica."

explicacion: |
  Falso. Son propiedades independientes: la energía de activación es cinética (velocidad), y endo/exotérmica es termodinámico (ΔH).
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["cinetica", "exotermica"]

respuesta: verdadero
tipo: vf

enunciado: "Una reacción muy exotérmica puede ser igual de lenta si su energía de activación es alta."

explicacion: |
  Verdadero. Ejemplo: la combustión del papel es muy exotérmica pero necesita una chispa para superar su energía de activación — no arranca sola.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["cinetica", "factores_reaccion"]

variables:
  escenario: [["aumentar la temperatura", "mas particulas alcanzan la energia de activacion"], ["aumentar la concentracion", "mas choques por segundo"], ["aumentar la superficie de contacto", "mas particulas expuestas a la vez"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["mas particulas alcanzan la energia de activacion", "mas choques por segundo", "mas particulas expuestas a la vez"]

enunciado: "Si se {escenario[idx][0]}, ¿por qué aumenta la velocidad de la reacción?"

explicacion: |
  {escenario[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["superficie_contacto", "estado_de_agregacion"]

respuesta: verdadero
tipo: vf

enunciado: "Moler un sólido en polvo aumenta la velocidad de reacción respecto al mismo sólido entero, porque aumenta la superficie de contacto."

explicacion: |
  Al pulverizar el sólido, hay más partículas expuestas para colisionar al mismo tiempo.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["temperatura"]

respuesta: falso
tipo: vf

enunciado: "Bajar la temperatura de una reacción la hace más rápida."

explicacion: |
  Falso. Al bajar la temperatura, menos partículas superan la energía de activación: la reacción se hace más lenta.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["factores_reaccion"]

respuesta: "bajar la concentracion de los reactivos"
tipo: mc
opciones_explicitas: ["bajar la concentracion de los reactivos", "subir la temperatura", "agregar un catalizador", "aumentar la superficie de contacto"]

enunciado: "¿Cuál de estos factores NO acelera una reacción química?"

explicacion: |
  Bajar la concentración reduce la frecuencia de choques: hace más lenta la reacción, no más rápida.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["catalizadores", "energia_activacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un catalizador aumenta la velocidad de una reacción al disminuir la energía de activación, abriendo un camino alternativo."

explicacion: |
  Correcto. El catalizador ofrece una ruta con menor barrera energética, así que más partículas la superan.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["catalizadores", "equilibrio_quimico"]

respuesta: falso
tipo: vf

enunciado: "Un catalizador modifica el valor de la constante de equilibrio (Kc) de una reacción."

explicacion: |
  Falso. El catalizador acelera la reacción directa E inversa por igual: no cambia Kc ni el ΔH, sólo llega más rápido al mismo equilibrio.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["catalizadores", "estequiometria"]

respuesta: falso
tipo: vf

enunciado: "Un catalizador se consume completamente durante la reacción, como si fuera un reactivo."

explicacion: |
  Falso. El catalizador participa del mecanismo pero se regenera al final: no se consume.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["catalizadores", "equilibrio_quimico"]

respuesta: "equilibrio"
tipo: completar
respuestas_validas:
  - "equilibrio"

enunciado: "Un catalizador permite que una reacción alcance el ___ de forma más rápida, sin cambiar las concentraciones finales."

explicacion: |
  El catalizador acelera la velocidad, permitiendo llegar antes al mismo estado de equilibrio.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["conceptos", "comparacion"]

respuesta: "la velocidad"
tipo: mc
opciones_explicitas: ["la velocidad", "el calor liberado o absorbido", "hasta dónde llega la reacción", "la masa de los reactivos"]

enunciado: "¿Qué mide específicamente la cinética química, a diferencia de la termoquímica y el equilibrio?"

explicacion: |
  La termoquímica mide el intercambio de calor (ΔH) y el equilibrio mide hasta dónde llega la reacción (Kc); la cinética mide qué tan rápido ocurre todo eso.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "avanzado"
  tags: ["catalizadores", "equilibrio_quimico"]

respuesta: verdadero
tipo: vf

enunciado: "Un catalizador baja la energía de activación tanto de la reacción directa como de la inversa, por eso no altera la posición del equilibrio."

explicacion: |
  Correcto. Al acelerar ambos sentidos por igual, el sistema llega antes al equilibrio, pero ese equilibrio queda en el mismo punto que sin catalizador.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["conceptos", "choques"]

respuesta: falso
tipo: vf

enunciado: "Cualquier choque entre partículas de reactivos produce una reacción, sin importar la energía que tengan."

explicacion: |
  Falso. Sólo los choques con energía igual o mayor a la energía de activación (y con orientación adecuada) son "efectivos" y producen reacción.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["aplicacion", "temperatura"]

respuesta: verdadero
tipo: vf

enunciado: "Guardar comida en la heladera retrasa su descomposición porque baja la temperatura, y eso hace más lentas las reacciones químicas involucradas."

explicacion: |
  Correcto. A menor temperatura, menos partículas alcanzan la energía de activación necesaria para las reacciones de descomposición: todo va más lento.
```

## Sección: equilibrio-solubilidad-ksp (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["equilibrio", "ksp", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Ksp es un caso particular de Kc, aplicado al equilibrio de una sal disolviéndose en un solvente."

explicacion: |
  Correcto. Ksp es la constante de equilibrio de la reacción de disolución de un sólido poco soluble.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "solubilidad"
tipo: completar
respuestas_validas:
  - "solubilidad"

enunciado: "Ksp significa producto de ___."

explicacion: |
  Ksp es el producto de las concentraciones molares de los iones en solución, elevadas a sus coeficientes.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["calculo", "estequiometria"]

variables:
  a: uno_de([1, 2, 3, 4])
  b: uno_de([1, 2, 3])

respuesta: a * b
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para AB ⇌ A+ + B-, Ksp = [A+] × [B-]. Si [A+] = {a} M y [B-] = {b} M, ¿cuál es el valor de Ksp?"

explicacion: |
  Ksp = {a} × {b}.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["reglas_ksp"]

respuesta: verdadero
tipo: vf

enunciado: "En la expresión de Ksp, el sólido puro (AB) no se incluye, porque su actividad es constante (se toma como 1)."

explicacion: |
  Correcto, igual que en Kc: los sólidos puros no aparecen explícitamente en la expresión de la constante.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "solubilidad"]

respuesta: "[A2+]*[B-]^2"
tipo: mc
opciones_explicitas: ["[A2+]*[B-]^2", "[A2+]*[B-]", "[A2+]^2*[B-]", "[A2+]+2[B-]"]

enunciado: "Para AB2(s) ⇌ A2+(ac) + 2B-(ac), la expresión correcta de Ksp es..."

explicacion: |
  Cada concentración se eleva a su coeficiente: 1 para A2+ y 2 para B-, entonces Ksp = [A2+]×[B-]².
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["ksp", "calculo"]

variables:
  a2: uno_de([1, 2, 3, 4])
  b: uno_de([2, 3, 4, 5])

respuesta: a2 * (b ^ 2)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para AB2(s) ⇌ A2+(ac) + 2B-(ac), con [A2+] = {a2} M y [B-] = {b} M en el equilibrio, calculá Ksp."

pasos:
  - "Ksp = [A2+] × [B-]²"

explicacion: |
  Ksp = {a2} × ({b}²).
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["teoria", "ksp"]

respuesta: verdadero
tipo: vf

enunciado: "En la expresión de Ksp, cada concentración iónica se eleva a la potencia de su coeficiente en la ecuación balanceada."

explicacion: |
  Verdadero, mismo patrón que Kc: exponente = coeficiente estequiométrico.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["ksp", "solubilidad"]

variables:
  s: uno_de([2, 3, 4, 5])

respuesta: s * s
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para una sal AB (1:1), Ksp = s², con s la solubilidad molar. Si s = {s} mol/L, ¿cuál es Ksp?"

pasos:
  - "AB ⇌ A+ + B-, entonces [A+]=[B-]=s"
  - "Ksp = s × s = s²"

explicacion: |
  Ksp = {s} × {s}.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["ksp", "solubilidad"]

variables:
  ksp: uno_de([4, 9, 16, 25])

respuesta: sqrt(ksp)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para una sal AB (1:1), Ksp = s². Si Ksp = {ksp}, ¿cuál es la solubilidad molar s?"

pasos:
  - "s = raíz cuadrada de Ksp"

explicacion: |
  s = √{ksp}.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["estequiometria", "solubilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Para una sal AB2 que se disocia en A2+ + 2B-, si se disuelven s moles de la sal, la concentración de B- es el doble que la de A2+."

explicacion: |
  Verdadero. Por cada mol de AB2 disuelto se forma 1 mol de A2+ pero 2 moles de B-.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "solubilidad"]

respuesta: "2"
tipo: completar
respuestas_validas:
  - "2"

enunciado: "Para una sal AB (1:1), la fórmula que relaciona Ksp con la solubilidad molar s es Ksp = s elevado a la ___."

explicacion: |
  Como la disociación produce dos iones (uno de cada tipo), Ksp = s × s = s².
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "solubilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Un valor de Ksp muy pequeño, como 10⁻¹⁰, indica que la sal es muy poco soluble en agua."

explicacion: |
  Correcto. Cuanto menor el Ksp, menos iones se disuelven antes de saturar la solución.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["producto_ionico", "saturacion"]

respuesta: "la solución no está saturada, no precipita"
tipo: mc
opciones_explicitas: ["la solución no está saturada, no precipita", "la solución está sobresaturada y precipita", "la solución está exactamente en equilibrio", "no se puede saber"]

enunciado: "Si el producto iónico Q es MENOR que Ksp, la solución..."

explicacion: |
  Q < Ksp significa que hay menos iones disueltos de los que el equilibrio permite: la solución no está saturada.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["producto_ionico", "precipitacion"]

respuesta: "la solución está sobresaturada, el exceso precipita"
tipo: mc
opciones_explicitas: ["la solución está sobresaturada, el exceso precipita", "la solución está saturada", "la solución no está saturada", "la solución está exactamente en equilibrio"]

enunciado: "Si el producto iónico Q es MAYOR que Ksp, la solución..."

explicacion: |
  Q > Ksp significa que hay más iones de los que el equilibrio permite: el exceso precipita hasta que Q vuelva a igualar Ksp.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto iónico Q es igual a Ksp, la solución está exactamente saturada, en equilibrio."

explicacion: |
  Correcto. Q = Ksp es la definición misma del punto de saturación.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Agregar más sólido sin disolver a una solución ya saturada aumenta el valor de Ksp."

explicacion: |
  Falso. Ksp depende sólo de la temperatura, no de cuánto sólido en exceso haya en el fondo del recipiente.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "avanzado"
  tags: ["comparacion", "ksp"]

respuesta: "la sal con Ksp = 1x10^-3"
tipo: mc
opciones_explicitas: ["la sal con Ksp = 1x10^-3", "la sal con Ksp = 1x10^-12", "ambas son igual de solubles", "no se puede comparar sin más datos"]

enunciado: "Entre dos sales del mismo tipo (AB 1:1), una con Ksp = 1×10⁻³ y otra con Ksp = 1×10⁻¹², ¿cuál es más soluble?"

explicacion: |
  A mayor Ksp, mayor solubilidad (para sales del mismo tipo estequiométrico): 1×10⁻³ es mucho más grande que 1×10⁻¹².
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "avanzado"
  tags: ["ion_comun", "le_chatelier"]

respuesta: verdadero
tipo: vf

enunciado: "Si a una solución saturada de AB se le agrega más B- (de otra fuente, ej. otra sal soluble con el mismo anión), la solubilidad de AB disminuye."

explicacion: |
  Verdadero (efecto del ion común). Por Le Chatelier, agregar más B- desplaza el equilibrio AB ⇌ A+ + B- hacia la izquierda, precipitando más AB sólido.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "avanzado"
  tags: ["aplicacion", "precipitacion"]

respuesta: "sí precipita, porque Q supera a Ksp"
tipo: mc
opciones_explicitas: ["sí precipita, porque Q supera a Ksp", "no precipita nunca, porque son soluciones diluidas", "sólo precipita si se calienta la mezcla", "depende únicamente del color de los iones"]

enunciado: "Al mezclar dos soluciones cuyos iones forman una sal poco soluble, ¿cuándo precipita esa sal?"

explicacion: |
  Precipita cuando el producto iónico Q de la mezcla resultante supera el Ksp de esa sal — el mismo criterio Q vs. Ksp de siempre.
```

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Ksp siempre tiene las mismas unidades para cualquier tipo de sal, sin importar su estequiometría."

explicacion: |
  Falso. Las unidades de Ksp dependen de los exponentes (coeficientes) de la sal: no es lo mismo M² (sal 1:1) que M³ (sal tipo AB2), por ejemplo.
```

## Sección: estequiometria (26 preguntas)

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "basico"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Qué calcula la estequiometría?"
tipo: mc
opciones_explicitas:
  - "Las cantidades exactas de reactivos y productos en una reacción química"
  - "La velocidad a la que ocurre una reacción"
  - "El color de los productos de una reacción"
respuesta: "Las cantidades exactas de reactivos y productos en una reacción química"

explicacion: |
  Usa la ecuación balanceada como una receta que indica las proporciones.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "basico"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Qué es un mol en química?"
tipo: mc
opciones_explicitas:
  - "La unidad que cuenta 6,022 × 10²³ partículas de una sustancia"
  - "Una unidad de masa, equivalente a un gramo"
  - "El nombre de un tipo de reacción química"
respuesta: "La unidad que cuenta 6,022 × 10²³ partículas de una sustancia"

explicacion: |
  Es como una "docena", pero mucho más grande: cuenta partículas, no
  gramos.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "Un mol de cualquier sustancia contiene siempre la misma cantidad de partículas (el número de Avogadro), sin importar de qué sustancia se trate."

explicacion: |
  Lo que sí cambia según la sustancia es la MASA de ese mol (la masa
  molar), no la cantidad de partículas.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "basico"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Qué es la masa molar de una sustancia?"
tipo: mc
opciones_explicitas:
  - "La masa de un mol de esa sustancia, en gramos por mol"
  - "La masa de una sola molécula, en gramos"
  - "El peso total de una muestra, sin importar la cantidad"
respuesta: "La masa de un mol de esa sustancia, en gramos por mol"

explicacion: |
  Se calcula sumando las masas atómicas de todos los átomos de la
  fórmula.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

respuesta: 18
tipo: input
tolerancia_abs: 0

enunciado: "Sabiendo que la masa atómica del hidrógeno (H) es ≈1 y la del oxígeno (O) es ≈16, ¿cuál es la masa molar del agua (H₂O), en g/mol?"

pasos:
  - "2 × 1 (dos átomos de H) + 16 (un átomo de O) = 18 g/mol"

explicacion: |
  Se suman las masas atómicas de todos los átomos que aparecen en la
  fórmula, contando los subíndices.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

respuesta: 44
tipo: input
tolerancia_abs: 0

enunciado: "Sabiendo que la masa atómica del carbono (C) es ≈12 y la del oxígeno (O) es ≈16, ¿cuál es la masa molar del dióxido de carbono (CO₂), en g/mol?"

pasos:
  - "12 (un átomo de C) + 2 × 16 (dos átomos de O) = 44 g/mol"

explicacion: |
  Un átomo de carbono y dos de oxígeno, sumando sus masas atómicas.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "completar"]

tipo: completar
enunciado: "Completá la fórmula: moles = masa (g) / ___ (g/mol)."
respuestas_validas:
  - "masa molar"

explicacion: |
  Dividir la masa por la masa molar da la cantidad de moles.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

variables:
  masa_molar: uno_de([18, 44, 2, 32, 40])
  moles_real: uno_de([2, 3, 4, 5])
  masa: masa_molar * moles_real

respuesta: moles_real
tipo: input
tolerancia_abs: 0

enunciado: "Se tienen {masa} g de una sustancia con masa molar {masa_molar} g/mol. ¿Cuántos moles hay?"

pasos:
  - "{masa} ÷ {masa_molar} = {moles_real} mol"

explicacion: |
  Moles = masa / masa molar.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

variables:
  masa_molar: uno_de([18, 44, 2, 32, 40])
  moles: uno_de([2, 3, 5, 6])

respuesta: masa_molar * moles
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos gramos son {moles} moles de una sustancia con masa molar {masa_molar} g/mol?"

pasos:
  - "{moles} × {masa_molar} = {masa_molar * moles} g"

explicacion: |
  Masa = moles × masa molar.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Por qué la fórmula moles = masa / masa molar es un ejemplo de análisis dimensional?"
tipo: mc
opciones_explicitas:
  - "Porque dividir gramos por (gramos/mol) da como resultado mol: las unidades 'cierran' solas"
  - "Porque usa números muy grandes, como el número de Avogadro"
  - "No tiene relación real con el análisis dimensional"
respuesta: "Porque dividir gramos por (gramos/mol) da como resultado mol: las unidades 'cierran' solas"

explicacion: |
  Es la misma verificación por unidades vista en
  `../../matematica/analisis-dimensional/`.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "vocabulario"]

enunciado: "En una ecuación química ya balanceada, ¿qué indican los coeficientes?"
tipo: mc
opciones_explicitas:
  - "La proporción de MOLES en la que reaccionan o se producen las sustancias"
  - "La proporción de GRAMOS en la que reaccionan las sustancias"
  - "El número de electrones que se transfieren"
respuesta: "La proporción de MOLES en la que reaccionan o se producen las sustancias"

explicacion: |
  Es la razón por la que hace falta convertir a moles antes de comparar
  cantidades de sustancias distintas.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "problema"]

variables:
  k: random(1, 10)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Según la ecuación balanceada 2H₂ + O₂ → 2H₂O, si reaccionan {2 * k} moles de H₂, ¿cuántos moles de O₂ se necesitan?"

pasos:
  - "La proporción es 2 moles de H₂ por cada 1 mol de O₂: {2 * k} ÷ 2 = {k} mol de O₂"

explicacion: |
  Se usa la razón de coeficientes (2 de H₂ por 1 de O₂) para escalar la
  cantidad.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "problema"]

variables:
  k: random(1, 10)

respuesta: 2 * k
tipo: input
tolerancia_abs: 0

enunciado: "Según la ecuación balanceada 2H₂ + O₂ → 2H₂O, si reaccionan {k} moles de O₂ (con suficiente H₂ disponible), ¿cuántos moles de H₂O se producen?"

pasos:
  - "La proporción es 1 mol de O₂ por cada 2 moles de H₂O: {k} × 2 = {2 * k} mol de H₂O"

explicacion: |
  Se multiplica por la razón de coeficientes: 2 moles de producto por
  cada mol de ese reactivo.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "Los coeficientes de una ecuación balanceada indican una proporción de moles, NO de gramos."

explicacion: |
  Por eso nunca se puede pasar directo de masa de un reactivo a masa de
  un producto sin convertir a moles primero.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "problema"]

variables:
  k: random(1, 8)
  masa_h2: 4 * k

respuesta: 36 * k
tipo: input
tolerancia_abs: 0

enunciado: "Según la ecuación balanceada 2H₂ + O₂ → 2H₂O (masa molar del H₂ = 2 g/mol, masa molar del H₂O = 18 g/mol), ¿cuántos gramos de agua se producen a partir de {masa_h2} g de H₂?"

pasos:
  - "Moles de H₂: {masa_h2} ÷ 2 = {2 * k} mol"
  - "Moles de H₂O (misma proporción 2 a 2): {2 * k} mol"
  - "Masa de H₂O: {2 * k} × 18 = {36 * k} g"

explicacion: |
  La cadena completa: masa de H₂ → moles de H₂ → moles de H₂O (misma
  razón, 2 a 2) → masa de H₂O.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Qué es el reactivo limitante en una reacción química?"
tipo: mc
opciones_explicitas:
  - "El reactivo que se termina primero, y por eso limita la cantidad máxima de producto"
  - "El reactivo que sobra al final de la reacción"
  - "El reactivo más caro de conseguir"
respuesta: "El reactivo que se termina primero, y por eso limita la cantidad máxima de producto"

explicacion: |
  El otro reactivo queda "en exceso", sin importar cuánto sobre.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "La cantidad máxima de producto que se puede formar en una reacción está determinada por el reactivo limitante, no por el reactivo en exceso."

explicacion: |
  Una vez que se acaba el reactivo limitante, la reacción no puede
  seguir, sin importar cuánto quede del otro.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "ordenar"]

enunciado: "Ordená los pasos para calcular cuántos gramos de un producto B se forman a partir de una masa conocida de un reactivo A."
tipo: ordenar
opciones_explicitas:
  - "Convertir moles de B a masa de B, multiplicando por la masa molar de B"
  - "Convertir la masa de A a moles de A, dividiendo por la masa molar de A"
  - "Convertir moles de A a moles de B, usando la razón de los coeficientes balanceados"
respuesta_orden: ["Convertir la masa de A a moles de A, dividiendo por la masa molar de A", "Convertir moles de A a moles de B, usando la razón de los coeficientes balanceados", "Convertir moles de B a masa de B, multiplicando por la masa molar de B"]
explicacion: |
  Nunca se salta el paso de los moles: es el único puente válido entre
  cantidades de sustancias distintas.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "completar"]

tipo: completar
enunciado: "Completá la fórmula: masa (g) = moles × ___ (g/mol)."
respuestas_validas:
  - "masa molar"

explicacion: |
  Es la fórmula inversa de moles = masa / masa molar.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

respuesta: 58.5
tipo: input
tolerancia_abs: 0.1

enunciado: "Sabiendo que la masa atómica del sodio (Na) es ≈23 y la del cloro (Cl) es ≈35,5, ¿cuál es la masa molar del cloruro de sodio (NaCl, sal de mesa), en g/mol?"

pasos:
  - "23 + 35,5 = 58,5 g/mol"

explicacion: |
  Un átomo de sodio y uno de cloro, sumando sus masas atómicas.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Por qué no se puede calcular la masa de un producto B directamente a partir de la masa de un reactivo A, sin pasar por moles?"
tipo: mc
opciones_explicitas:
  - "Porque los coeficientes de la ecuación relacionan cantidades de partículas (moles), no masas en gramos"
  - "Porque las masas en gramos no se pueden convertir nunca"
  - "En realidad sí se puede, pasar por moles es un paso opcional"
respuesta: "Porque los coeficientes de la ecuación relacionan cantidades de partículas (moles), no masas en gramos"

explicacion: |
  A y B suelen tener masas molares distintas: sin pasar por moles, la
  proporción de gramos no coincide con la de los coeficientes.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "Para hacer cálculos estequiométricos hace falta partir de una ecuación química ya balanceada."

explicacion: |
  Sin balancear (ver `../balanceo-ecuaciones/`), los coeficientes no
  reflejan la proporción real de átomos que se conservan.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

respuesta: 16
tipo: input
tolerancia_abs: 0

enunciado: "Sabiendo que la masa atómica del carbono (C) es ≈12 y la del hidrógeno (H) es ≈1, ¿cuál es la masa molar del metano (CH₄), en g/mol?"

pasos:
  - "12 (un átomo de C) + 4 × 1 (cuatro átomos de H) = 16 g/mol"

explicacion: |
  Un átomo de carbono y cuatro de hidrógeno, según el subíndice de la
  fórmula.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "problema"]

variables:
  masa: random(10, 100)
  masa_molar: uno_de([18, 44, 58.5])

respuesta: redondear(masa / masa_molar, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se tienen {masa} g de una sustancia con masa molar {masa_molar} g/mol. ¿Cuántos moles hay? Redondeá a 2 decimales."

pasos:
  - "{masa} ÷ {masa_molar} = {redondear(masa / masa_molar, 2)} mol"

explicacion: |
  No siempre la división da un número exacto: en ese caso se redondea.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "Un mol de un gas y un mol de otro gas distinto tienen la misma cantidad de partículas, pero no necesariamente la misma masa."

explicacion: |
  La cantidad de partículas es siempre la misma (el número de
  Avogadro); la masa depende de la masa molar de cada sustancia.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la estequiometría en la práctica?"
tipo: mc
opciones_explicitas:
  - "Para calcular de antemano cuánto reactivo hace falta para obtener una cantidad determinada de producto"
  - "Sólo para nombrar correctamente los compuestos químicos"
  - "Sólo aplica a reacciones que ya ocurrieron, nunca antes"
respuesta: "Para calcular de antemano cuánto reactivo hace falta para obtener una cantidad determinada de producto"

explicacion: |
  Desde un experimento de laboratorio hasta la producción industrial, la
  estequiometría planifica cantidades antes de mezclar nada.
```

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
respuesta_orden: ["Colocar la probeta sobre una superficie plana", "Poner el ojo a la misma altura que la superficie del líquido, para evitar el error de paralaje", "Leer la marca en la parte inferior del menisco"]
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

