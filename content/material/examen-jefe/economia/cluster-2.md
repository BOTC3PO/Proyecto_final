# Examen jefe — [PENDIENTE #767]

> Logro #767. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **120 preguntas totales** en 5/5 secciones.

---

## Sección: detectar-una-oportunidad-de-negocio (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["conceptos", "mercado"]

respuesta: "oportunidad de negocio"
tipo: completar
respuestas_validas:
  - "oportunidad de negocio"

enunciado: "Una ___ es la identificación de una necesidad insatisfecha o un problema no resuelto en un mercado específico que puede ser aprovechado para crear valor."

explicacion: |
  La oportunidad de negocio surge cuando se detecta un segmento de clientes con una necesidad que no está siendo cubierta adecuadamente por la oferta actual.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["mercado", "clientes"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un grupo de personas busca comida saludable pero no hay locales cerca de su oficina.", "necesidad de conveniencia y salud"], ["Los usuarios de una app de transporte se quejan de los altos precios en hora pico.", "necesidad de economía"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["necesidad de conveniencia y salud", "necesidad de economía", "necesidad de estatus", "necesidad de entretenimiento"]

enunciado: "Analiza el siguiente caso: {escenarios[escenario_idx][0]}. ¿Qué tipo de oportunidad se detecta principalmente?"

explicacion: |
  En el escenario seleccionado, el problema identificado apunta directamente a la {escenarios[escenario_idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["validación", "riesgo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que una idea de negocio solo se convierte en una oportunidad real si existe un grupo de clientes dispuestos a pagar por la solución propuesta?"

explicacion: |
  Correcto. Una idea sin mercado potencial (clientes dispuestos a pagar) es solo una idea, no una oportunidad de negocio viable.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["proceso", "metodología"]

respuesta_orden: ["Observación del entorno", "Identificación del problema", "Análisis de la competencia", "Validación con clientes"]
tipo: ordenar
opciones_explicitas: ["Observación del entorno", "Identificación del problema", "Análisis de la competencia", "Validación con clientes"]

enunciado: "Ordena cronológicamente los pasos lógicos para detectar y validar una oportunidad de negocio:"

explicacion: |
  Primero se observa el entorno, luego se define el problema, se analiza qué hace la competencia y finalmente se valida con usuarios reales.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["segmentación", "público"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Vender juguetes educativos para niños de 0 a 5 años.", "segmento infantil"], ["Ofrecer software contable para pequeñas empresas de servicios.", "segmento empresarial"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["segmento infantil", "segmento empresarial", "segmento de lujo", "segmento masivo"]

enunciado: "Si el problema detectado es: {casos[caso_idx][0]}. ¿A qué grupo pertenece el mercado objetivo?"

explicacion: |
  La segmentación permite enfocar los esfuerzos de marketing y producto hacia el {casos[caso_idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["mercado", "necesidad", "oportunidad"]

enunciado: "Un emprendedor observa que en un barrio con muchas oficinas, la mayoría de los locales venden comida rápida con alto contenido de sodio y azúcar, pero no hay opciones de ensaladas o snacks naturales. Este vacío representa una ___."

opciones_explicitas: ["amenaza", "oportunidad de negocio", "barrera de entrada", "pérdida de capital"]
respuesta: "oportunidad de negocio"
tipo: "mc"

explicacion: |
  Una oportunidad de negocio surge cuando se identifica una necesidad insatisfecha o un problema no resuelto en un segmento de mercado específico.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["validación", "encuesta", "cliente"]

variables:
  escenario: uno_de([["¿Compraría este producto si estuviera disponible mañana?", "verdadero"], ["¿Cuánto pagaría por este servicio?", "falso"]])

enunciado: "Para validar si la necesidad detectada es real, el emprendedor realiza una encuesta. Si la pregunta es '{escenario[0]}', el objetivo principal es validar la ___."

respuestas_validas:
  - "demanda"
  - "rentabilidad"
  - "ubicación"
respuesta: "demanda"
tipo: "completar"

explicacion: |
  La validación de la demanda busca confirmar si existe un grupo de clientes dispuestos a pagar por la solución propuesta antes de invertir capital.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Identificar una necesidad insatisfecha", "Analizar la competencia y el segmento", "Diseñar un prototipo o MVP", "Lanzar el producto al mercado"]
respuesta_orden: ["Identificar una necesidad insatisfecha", "Analizar la competencia y el segmento", "Diseñar un prototipo o MVP", "Lanzar el producto al mercado"]
tipo: "ordenar"

enunciado: "Ordene los pasos lógicos que sigue un emprendedor desde que detecta una oportunidad de negocio hasta que lanza su producto al mercado:"

explicacion: |
  El proceso lógico comienza con la detección del problema, sigue con el análisis del entorno, la creación de una solución mínima viable y finalmente la salida al mercado.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["competencia", "ventaja_competitiva"]

enunciado: "Si un emprendedor detecta una necesidad insatisfecha, pero ya existen tres empresas ofreciendo exactamente lo mismo con el mismo precio y calidad, la probabilidad de que sea una oportunidad de negocio rentable es baja sin una ventaja competitiva clara."

respuesta: verdadero
tipo: "vf"

explicacion: |
  La saturación de un mercado con ofertas idénticas dificulta la entrada. Una oportunidad real requiere diferenciación o una mejora en la propuesta de valor.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["TAM", "SAM", "SOM"]

variables:
  datos: uno_de([[10000, 2000, 500], [5000, 1000, 200]])

enunciado: "Si el mercado total (TAM) es de {datos[0]} personas, el mercado que puede alcanzar tu modelo de negocio (SAM) es de {datos[1]} personas, y tu capacidad real de captación (SOM) es de {datos[2]} personas, ¿cuál es el valor del SOM?"

respuesta: datos[2]
tipo: "completar"
tolerancia_abs: 0

explicacion: |
  El SOM (Serviceable Obtainable Market) representa la parte del mercado que realmente puedes capturar en el corto plazo con tus recursos actuales.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["emprendimiento", "error_comun"]

respuesta: "necesidad"
tipo: "completar"
respuestas_validas:
  - "necesidad"
  - "problema"

enunciado: "Un error común en el emprendimiento es centrarse exclusivamente en tener una idea innovadora y brillante, cuando el foco real debe estar en resolver una ___ insatisfecha en el mercado."

explicacion: |
  Una idea por sí sola no tiene valor si no resuelve un problema o satisface una necesidad real de un grupo de personas.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["conceptos_clave", "validacion"]

variables:
  escenario_idx: uno_de([0, 1])
  textos: ["Un inventor crea un dispositivo para limpiar nubes, pero nadie está dispuesto a pagarlo.", "Un emprendedor nota que en su barrio no hay lavanderías y abre una con alta demanda."]
  valores: [falso, verdadero]

respuesta: valores[escenario_idx]
tipo: "vf"

enunciado: "Analice el caso: {textos[escenario_idx]} Si un producto es altamente innovador pero no existe un segmento de clientes con la disposición y capacidad de pago para adquirirlo, ¿podemos decir que se ha detectado una oportunidad de negocio real en este caso?"

explicacion: |
  Para que una idea sea oportunidad, debe haber un mercado (clientes con necesidad y capacidad de pago).
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["enfoque_cliente"]

respuesta: "solución"
tipo: "completar"
respuestas_validas:
  - "solución"
  - "solucion"

enunciado: "Muchos emprendedores cometen el error de enamorarse de su ___ (el producto) en lugar de enamorarse del problema del cliente."

explicacion: |
  El producto puede cambiar (pivotar), pero el problema que resuelves debe ser el centro de tu estrategia.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["metodologia", "validacion"]

opciones_explicitas: ["Observar el mercado y detectar dolores", "Crear un producto mínimo viable (MVP)", "Validar la solución con clientes reales"]
respuesta_orden: ["Observar el mercado y detectar dolores", "Crear un producto mínimo viable (MVP)", "Validar la solución con clientes reales"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para validar una oportunidad de negocio de manera eficiente, evitando el desperdicio de recursos:"

explicacion: |
  La validación debe ser incremental: primero entiendes el problema, luego pruebas una solución mínima y finalmente escalas.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["investigacion", "errores"]

tipo: vf
respuesta: falso

enunciado: "¿Es suficiente con observar cómo se comporta la competencia para identificar una oportunidad de negocio única?"

explicacion: |
  Observar a la competencia es útil, pero centrarse solo en ellos puede llevarte a copiar modelos existentes en lugar de descubrir necesidades que la competencia está ignorando.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["emprendimiento", "conceptos_clave"]

variables:
  es_oportunidad: falso

respuesta: es_oportunidad
tipo: vf
enunciado: "Una idea de negocio se convierte en una oportunidad real cuando existe un segmento de mercado con una necesidad insatisfecha y capacidad de pago. ¿Es una idea de negocio siempre una oportunidad de negocio?"

explicacion: |
  Una idea es un concepto abstracto, mientras que una oportunidad es una idea validada que tiene viabilidad comercial y un mercado dispuesto a pagar por ella.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["segmentacion", "nicho"]

variables:
  escenario: uno_de([["vender calzado para corredores de montaña", "nicho"], ["vender calzado genérico para todo público", "mercado_masivo"], ["vender calzado de lujo para eventos", "nicho"]])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["nicho", "mercado_masivo"]

enunciado: "Si una empresa decide enfocarse exclusivamente en satisfacer las necesidades de un grupo de consumidores con características muy específicas y requerimientos particulares, como es el caso de {escenario[0]}, está buscando un ___."

explicacion: |
  El nicho de mercado es un segmento especializado dentro de un mercado más amplio, caracterizado por necesidades muy particulares que no son cubiertas por los productos masivos.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["consumidor", "marketing"]

variables:
  ejemplo: uno_de([["Tener sed", "necesidad"], ["Beber una gaseosa de marca específica", "deseo"], ["Tener hambre", "necesidad"], ["Comer una hamburguesa de una cadena famosa", "deseo"]])

respuesta: ejemplo[1]
tipo: completar

respuestas_validas:
  - "necesidad"
  - "deseo"

enunciado: "En marketing, es crucial distinguir entre una necesidad (un estado de carencia percibida) y un ___ (la forma específica en que se busca satisfacer esa carencia)."

explicacion: |
  La necesidad es la base (ej. transporte), mientras que el deseo es la forma cultural o personal de satisfacerla (ej. un coche de lujo).
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["metodologia", "validacion"]

variables:
  pasos_ordenados: ["Observar el mercado y detectar problemas", "Entrevistar a clientes potenciales", "Diseñar un Producto Mínimo Viable (MVP)", "Analizar la viabilidad financiera"]

respuesta_orden: pasos_ordenados
tipo: ordenar

opciones_explicitas: ["Observar el mercado y detectar problemas", "Entrevistar a clientes potenciales", "Diseñar un Producto Mínimo Viable (MVP)", "Analizar la viabilidad financiera"]

enunciado: "Ordena los pasos lógicos para validar una oportunidad de negocio desde la detección hasta la viabilidad:"

explicacion: |
  Primero se identifica el problema (observación), luego se valida con usuarios (entrevistas), se prueba la solución (MVP) y finalmente se asegura la rentabilidad (finanzas).
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["competencia", "valor"]

variables:
  caso: uno_de([["ofrecer un producto idéntico al de la competencia pero más caro", "no_hay_ventaja"], ["ofrecer un producto con una característica única que resuelve un problema mejor", "hay_ventaja"], ["ofrecer un producto con el mismo precio y calidad que la competencia", "no_hay_ventaja"]])

respuesta: caso[1]
tipo: mc

opciones_explicitas: ["hay_ventaja", "no_hay_ventaja"]

enunciado: "Para que una oportunidad de negocio sea sostenible, la empresa debe presentar una propuesta de valor que se distinga de la competencia. Si una empresa logra {caso[0]}, podemos decir que ___."

explicacion: |
  La ventaja competitiva es lo que hace que un cliente elija una opción sobre otra; sin una diferenciación clara, la oportunidad es débil.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["mercado", "necesidades"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["comunidad de ciclistas urbanos sin talleres cerca", "falta de servicios de reparación rápida"], ["estudiantes universitarios con poco tiempo para cocinar", "demanda de comida saludable y rápida"], ["dueños de mascotas que trabajan todo el día", "necesidad de cuidado canino a domicilio"]]
  datos: [["ciclistas", "reparación"], ["estudiantes", "comida"], ["dueños de mascotas", "cuidado"]]

enunciado: "Un emprendedor observa que en un barrio con muchos {datos[escenario_idx][0]} existe una oportunidad basada en la {datos[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "reparación rápida"
  - "comida saludable y rápida"
  - "cuidado canino a domicilio"

explicacion: |
  La identificación de una oportunidad surge al detectar una brecha entre una necesidad existente y la oferta actual del mercado.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["validación", "mercado"]

enunciado: "Si un emprendedor observa que los clientes de la competencia se quejan constantemente de la lentitud en la entrega, ¿es este un indicador válido para una nueva oportunidad de negocio?"

respuesta: verdadero
tipo: vf
explicacion: |
  Las quejas de los clientes son "puntos de dolor" (pain points) que representan oportunidades de mejora y diferenciación para un nuevo negocio.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Ordena los pasos lógicos para validar una oportunidad de negocio desde la detección hasta el crecimiento:"

opciones_explicitas: ["Observar el problema", "Entrevistar clientes potenciales", "Crear un Producto Mínimo Viable", "Escalar el modelo de negocio"]
respuesta_orden: ["Observar el problema", "Entrevistar clientes potenciales", "Crear un Producto Mínimo Viable", "Escalar el modelo de negocio"]
tipo: ordenar

explicacion: |
  Primero se identifica el problema, luego se valida con usuarios reales, se prueba con un producto mínimo y finalmente se escala.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["competencia", "estrategia"]

enunciado: "Si el análisis de mercado muestra que la competencia es muy similar entre sí y no cubre una necesidad específica, la intensidad de la oportunidad se considera: ___"

respuesta: "alta"
tipo: completar
respuestas_validas:
  - "alta"

explicacion: |
  La falta de diferenciación en la competencia actual indica un espacio para la innovación y la captura de mercado.
```

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["conceptos", "cliente"]

enunciado: "¿Cuál de los siguientes elementos es el motor principal para identificar una oportunidad de negocio real?"

opciones_explicitas: ["La cantidad de dinero que tiene un competidor", "La resolución de un problema o necesidad no satisfecha", "El uso de la tecnología más cara disponible", "Tener un local en la avenida principal"]
respuesta: "La resolución de un problema o necesidad no satisfecha"
tipo: mc

explicacion: |
  Una oportunidad de negocio no es solo una idea, es la capacidad de resolver un problema real para un grupo de personas dispuestas a pagar por ello.
```

## Sección: elasticidad (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}% y la cantidad demandada baja {pct_cantidad}%. ¿Cuál es el valor absoluto de la elasticidad?"

pasos:
  - "|E| = {pct_cantidad}%/{pct_precio}% = {k}"

explicacion: |
  |E| = (%ΔQ)/(%ΔP), tomando los valores absolutos de cada variación.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  pct_cantidad: random(2, 8)
  k: random(2, 5)
  pct_precio: pct_cantidad * k

respuesta: pct_cantidad
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}% y la cantidad demandada baja {pct_cantidad}%. Sin dividir todavía, ¿cuál es el numerador (%ΔQ, en valor absoluto) del cociente de elasticidad?"

explicacion: |
  El numerador de |E| es directamente %ΔQ = {pct_cantidad}%.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "opcion_multiple"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: "Elástica"
tipo: mc
opciones_explicitas:
  - "Elástica"
  - "Inelástica"
  - "Unitaria"

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}% (|E|={k}). ¿Es elástica, inelástica o unitaria la demanda?"

explicacion: |
  |E|={k} > 1 → elástica.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "opcion_multiple"]

variables:
  pct_cantidad: random(2, 8)
  k: random(2, 5)
  pct_precio: pct_cantidad * k

respuesta: "Inelástica"
tipo: mc
opciones_explicitas:
  - "Inelástica"
  - "Elástica"
  - "Unitaria"

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es elástica, inelástica o unitaria la demanda?"

explicacion: |
  |E| = {pct_cantidad}/{pct_precio} < 1 → inelástica.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar", "verdadero_falso"]

variables:
  pct: random(5, 30)

respuesta: verdadero
tipo: vf

enunciado: "El precio sube {pct}% y la cantidad baja exactamente {pct}%. ¿Es unitaria la elasticidad?"

explicacion: |
  |E| = {pct}/{pct} = 1 → elasticidad unitaria.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["variacion_porcentual"]

variables:
  k: random(1, 10)
  cantidad_inicial: k * 100
  pct: random(5, 40)
  cantidad_final: cantidad_inicial - k * pct

respuesta: pct
tipo: input
tolerancia_abs: 0

enunciado: "La cantidad demandada baja de {cantidad_inicial} a {cantidad_final} unidades. ¿Cuál es la variación porcentual (en valor absoluto)?"

pasos:
  - "%Δ = ({cantidad_inicial}−{cantidad_final})/{cantidad_inicial} × 100 = {pct}%"

explicacion: |
  Se compara el cambio con el valor INICIAL, no el final.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["variacion_porcentual"]

variables:
  k: random(1, 10)
  precio_inicial: k * 100
  pct: random(5, 40)
  precio_final: precio_inicial + k * pct

respuesta: pct
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube de {precio_inicial} a {precio_final}. ¿Cuál es la variación porcentual?"

explicacion: |
  %Δ = ({precio_final}−{precio_inicial})/{precio_inicial} × 100 =
  {pct}%.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  k: random(1, 5)
  precio_inicial: k * 100
  pct_precio: random(5, 20)
  precio_final: precio_inicial + k * pct_precio
  cantidad_inicial: k * 100
  m: random(2, 4)
  pct_cantidad: pct_precio * m
  cantidad_final: cantidad_inicial - k * pct_cantidad

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "El precio pasa de {precio_inicial} a {precio_final}, y la cantidad de {cantidad_inicial} a {cantidad_final}. ¿Cuál es |E|?"

pasos:
  - "%ΔP = {pct_precio}%, %ΔQ = {pct_cantidad}% → |E| = {pct_cantidad}/{pct_precio} = {m}"

explicacion: |
  Primero se calcula cada variación porcentual, y después se dividen.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La elasticidad mide cuánto responde (en términos porcentuales) la cantidad demandada ante un cambio porcentual en el precio."

explicacion: |
  Es la definición central: un cociente de variaciones RELATIVAS, no
  absolutas.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La elasticidad de la demanda es exactamente lo mismo que la pendiente de la curva de demanda."

explicacion: |
  La pendiente usa variaciones absolutas (ΔP/ΔQ); la elasticidad usa
  variaciones porcentuales — son cálculos relacionados pero distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Como la elasticidad usa porcentajes (no unidades), permite comparar la sensibilidad al precio de productos completamente distintos entre sí (por ejemplo, pan vs. autos)."

explicacion: |
  La pendiente sola no permitiría esa comparación, porque depende de las
  unidades de cada producto.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los bienes esenciales, sin sustitutos cercanos (como medicamentos), suelen tener demanda inelástica."

explicacion: |
  La gente sigue comprándolos casi igual aunque suba el precio, porque
  no tiene alternativa.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los bienes con sustitutos cercanos (por ejemplo, una marca de gaseosa cuando hay otras parecidas) suelen tener demanda elástica."

explicacion: |
  Si sube el precio, es fácil cambiar a otra opción — la cantidad
  demandada responde fuerte.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Por la ley de demanda (precio sube, cantidad baja), la elasticidad suele dar un número negativo, aunque se clasifique según su valor absoluto."

explicacion: |
  El signo refleja la dirección opuesta entre precio y cantidad; la
  magnitud (valor absoluto) es lo que importa para clasificar.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una elasticidad de −3 representa una demanda MÁS elástica que una de −2, aunque −3 sea 'más negativo' — lo que importa es el valor absoluto (3 > 2)."

explicacion: |
  Es el error de comparación más común: hay que comparar magnitudes, no
  el signo.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["elasticidad_puntual"]

variables:
  pendiente_demanda: -random(1, 5)
  precio: random(10, 50)
  cantidad: random(10, 50)

respuesta: (pendiente_demanda * precio) / cantidad
tipo: input
tolerancia_abs: 0.01

enunciado: "La función de demanda tiene dQ/dP = {pendiente_demanda} en el punto (P={precio}, Q={cantidad}). ¿Cuál es la elasticidad puntual E = (dQ/dP)×(P/Q)?"

explicacion: |
  Es la versión con derivada de la misma fórmula — la elasticidad
  exacta en un punto específico, no un promedio entre dos puntos.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La elasticidad puntual, calculada con la derivada dQ/dP, es la versión 'instantánea' de la elasticidad, igual que la derivada es la versión instantánea de una pendiente promedio."

explicacion: |
  Misma relación ya vista entre velocidad media e instantánea, o entre
  costo promedio y marginal.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k

respuesta: verdadero
tipo: vf

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es correcto clasificar esta demanda como elástica?"

explicacion: |
  |E| = {k} > 1 → elástica, correcto.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  pct_precio: random(5, 15)
  k: random(2, 4)
  pct_cantidad: pct_precio * k
  error: uno_de([0, 0, 1, -1])
  propuesto: k + error

respuesta: (propuesto == k)
tipo: vf

enunciado: "El precio sube {pct_precio}% y la cantidad baja {pct_cantidad}%. ¿Es correcto que |E| sea {propuesto}?"

explicacion: |
  El valor correcto es {pct_cantidad}/{pct_precio} = {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una empresa que vende un producto con demanda inelástica puede subir el precio sin perder demasiadas ventas — a diferencia de un producto con demanda elástica."

explicacion: |
  Es una de las aplicaciones prácticas de conocer la elasticidad de lo
  que se vende.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Todos los productos tienen la misma elasticidad, así que una vez calculada para uno, sirve para cualquier otro."

explicacion: |
  Cada producto tiene su propia elasticidad, según tenga o no
  sustitutos, sea esencial o no, etc.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["clasificar"]

variables:
  pct_precio: random(5, 30)

respuesta: pct_precio
tipo: input
tolerancia_abs: 0

enunciado: "El precio sube {pct_precio}%. ¿Qué variación porcentual de la cantidad daría elasticidad unitaria (|E|=1)?"

explicacion: |
  Para |E|=1, %ΔQ tiene que ser exactamente igual a %ΔP.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Elasticidad y costo marginal son la misma familia de idea (una razón de cambio) aplicada a dos preguntas distintas: una a cuánto cuesta producir más, la otra a cuánto responde la demanda al precio."

explicacion: |
  Es el resumen de por qué `../costo-marginal/` es el prerrequisito de
  este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "elasticidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La idea central de la elasticidad es usar variaciones RELATIVAS (porcentuales) en vez de ABSOLUTAS, lo que permite comparar sensibilidades entre magnitudes de escalas muy distintas."

explicacion: |
  Es el resumen del módulo: el mismo principio de 'porcentaje' ya
  trabajado en Tronco 1, aplicado ahora a comparar dos tasas de cambio
  entre sí.
```

## Sección: estructura-del-patrimonio (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["ecuacion_patrimonial"]

respuesta: verdadero
tipo: vf

enunciado: "El patrimonio neto es igual a los activos menos los pasivos."

explicacion: |
  Esta es la ecuación patrimonial fundamental: Pat = Activo - Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "pasivo"]

variables:
  activo: random(100000, 500000)
  patrimonio: random(20000, 100000)
  pasivo: activo - patrimonio

respuesta: pasivo
tipo: input

enunciado: "Una empresa tiene un activo total de ${activo} y un patrimonio neto de ${patrimonio}. ¿Cuál es el total de sus pasivos?"

explicacion: |
  Si Activo - Pasivo = Patrimonio, entonces Pasivo = Activo - Patrimonio.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["interpretacion", "insolvencia"]

respuesta: falso
tipo: vf

enunciado: "Si el patrimonio neto es negativo, la empresa tiene más bienes que deudas."

explicacion: |
  Patrimonio negativo significa que los pasivos superan a los activos (Activo < Pasivo).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "activo"]

variables:
  pasivo: random(50000, 200000)
  patrimonio: random(10000, 50000)
  activo: pasivo + patrimonio

respuesta: activo
tipo: input

enunciado: "Si el pasivo total es ${pasivo} y el patrimonio neto es ${patrimonio}, ¿cuál es el activo total?"

explicacion: |
  Activo = Pasivo + Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["variacion", "ganancia"]

variables:
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  ganancia: random(10000, 50000)
  activo_final: activo_inicial + ganancia
  pasivo_final: pasivo_inicial
  pat_inicial: activo_inicial - pasivo_inicial
  pat_final: activo_final - pasivo_final
  variacion: pat_final - pat_inicial

respuesta: variacion
tipo: input

enunciado: "Si una empresa tiene Activo {activo_inicial} y Pasivo {pasivo_inicial}, y luego obtiene una ganancia de {ganancia} que aumenta su activo, ¿cuánto aumentó su patrimonio neto?"

explicacion: |
  Al aumentar el activo sin cambiar el pasivo, el patrimonio neto aumenta exactamente por el monto de la ganancia.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["estructura", "financiamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El financiamiento de una empresa proviene de sus acreedores (pasivo) y de sus dueños (patrimonio)."

explicacion: |
  Correcto. Los activos se financian con deuda externa e interna.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["calculo", "agregacion"]

variables:
  activo_caja: random(5000, 20000)
  activo_banco: random(10000, 50000)
  activo_inventario: random(20000, 100000)
  activo_maquinaria: random(50000, 200000)
  pasivo_proveedores: random(5000, 20000)
  pasivo_prestamo: random(10000, 50000)
  
  activo_total: activo_caja + activo_banco + activo_inventario + activo_maquinaria
  pasivo_total: pasivo_proveedores + pasivo_prestamo
  patrimonio: activo_total - pasivo_total

respuesta: patrimonio
tipo: input

enunciado: "Activo Caja: {activo_caja}, Activo Banco: {activo_banco}, Activo Inventario: {activo_inventario}, Activo Maquinaria: {activo_maquinaria}. Pasivo Proveedores: {pasivo_proveedores}, Pasivo Préstamo: {pasivo_prestamo}. Calcula el Patrimonio Neto."

explicacion: |
  Sumar todos los activos, restar todos los pasivos. El resultado es el patrimonio neto.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["transaccion", "balance"]

variables:
  monto: random(10000, 50000)
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  pat_inicial: activo_inicial - pasivo_inicial
  activo_final: activo_inicial + monto
  pasivo_final: pasivo_inicial + monto
  pat_final: activo_final - pasivo_final
  cambio_patrimonio: pat_final - pat_inicial

respuesta: cambio_patrimonio
tipo: input

enunciado: "Si la empresa compra un activo de ${monto} a crédito, ¿cuánto cambia su patrimonio neto?"

explicacion: |
  Al aumentar activo y pasivo en la misma cantidad, la diferencia (patrimonio) no cambia.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["solvencia", "riesgo"]

respuesta: verdadero
tipo: vf

enunciado: "Un patrimonio neto negativo puede indicar que la empresa es insolvente técnicamente."

explicacion: |
  Si Pasivo > Activo, la empresa no tiene suficiente para cubrir sus deudas con sus propios bienes, lo que es un riesgo de insolvencia técnica.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "activo_circulante"]

variables:
  activo_total: random(200000, 500000)
  activo_no_circulante: random(50000, 200000)
  activo_circulante: activo_total - activo_no_circulante

respuesta: activo_circulante
tipo: input

enunciado: "El activo total es ${activo_total} y el no circulante es ${activo_no_circulante}. ¿Cuánto es el activo circulante?"

explicacion: |
  Activo Circulante = Activo Total - Activo No Circulante.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["principio", "doble entrada"]

respuesta: verdadero
tipo: vf

enunciado: "Todo activo está financiado por pasivos o patrimonio."

explicacion: |
  Es la base de la partida doble: no hay activo sin una fuente de financiamiento (deuda o capital propio).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "pasivo_circulante"]

variables:
  pasivo_total: random(100000, 300000)
  pasivo_no_circulante: random(20000, 100000)
  pasivo_circulante: pasivo_total - pasivo_no_circulante

respuesta: pasivo_circulante
tipo: input

enunciado: "Si el pasivo total es ${pasivo_total} y el no circulante es ${pasivo_no_circulante}, ¿cuánto es el pasivo circulante?"

explicacion: |
  Pasivo Circulante = Pasivo Total - Pasivo No Circulante.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["transaccion", "liquidez"]

variables:
  monto: random(5000, 20000)
  activo_inicial: random(100000, 200000)
  pasivo_inicial: random(50000, 100000)
  pat_inicial: activo_inicial - pasivo_inicial
  activo_final: activo_inicial - monto
  pasivo_final: pasivo_inicial - monto
  pat_final: activo_final - pasivo_final
  cambio_patrimonio: pat_final - pat_inicial

respuesta: cambio_patrimonio
tipo: input

enunciado: "Si la empresa paga ${monto} de su deuda, ¿cuánto cambia su patrimonio neto?"

explicacion: |
  Al bajar activo y pasivo en la misma cantidad, el patrimonio neto permanece igual.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["activo", "efectivo"]

respuesta: verdadero
tipo: vf

enunciado: "El efectivo en caja es un activo circulante."

explicacion: |
  El efectivo es el activo más líquido y se usa inmediatamente, por lo que es circulante.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "avanzado"
  tags: ["capital", "variacion"]

variables:
  activo: random(200000, 500000)
  pasivo: random(50000, 150000)
  capital_inicial: random(50000, 100000)
  nueva_inversion: random(10000, 50000)
  activo_final: activo + nueva_inversion
  pasivo_final: pasivo
  capital_final: activo_final - pasivo_final
  incremento_patrimonio: capital_final - (activo - pasivo)

respuesta: nueva_inversion
tipo: input

enunciado: "Si se realiza una nueva inversión de ${nueva_inversion} en efectivo que aumenta el activo, ¿cuánto aumenta el patrimonio neto?"

explicacion: |
  La inversión de los dueños aumenta el activo y el patrimonio neto en la misma cuantía.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["estructura", "propiedad"]

respuesta: falso
tipo: vf

enunciado: "El pasivo representa la propiedad de los accionistas sobre los activos."

explicacion: |
  El patrimonio neto representa la propiedad de los accionistas. El pasivo representa la deuda con terceros.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "intermedio"
  tags: ["calculo", "balance"]

variables:
  activo_circulante: random(50000, 150000)
  activo_no_circulante: random(100000, 300000)
  pasivo_circulante: random(20000, 80000)
  pasivo_no_circulante: random(30000, 100000)
  
  activo_total: activo_circulante + activo_no_circulante
  pasivo_total: pasivo_circulante + pasivo_no_circulante
  patrimonio: activo_total - pasivo_total

respuesta: patrimonio
tipo: input

enunciado: "Activo Circulante: {activo_circulante}, Activo No Circulante: {activo_no_circulante}, Pasivo Circulante: {pasivo_circulante}, Pasivo No Circulante: {pasivo_no_circulante}. Calcula el Patrimonio Neto."

explicacion: |
  Sumar activos totales, restar pasivos totales. El resultado es el patrimonio neto.
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["ecuacion", "contabilidad", "completar"]

respuesta: "Pasivo"
tipo: completar

enunciado: "Completa la ecuación fundamental: Activo = Patrimonio Neto + _______."

respuestas_validas:
  - "Pasivo"
  - "pasivo"
  - "pasivos"

explicacion: |
  La ecuación patrimonial básica establece que lo que tiene la empresa (Activo) se financia con
  recursos propios (Patrimonio) y recursos de terceros (Pasivo).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["pasivo", "clasificacion", "completar"]

respuesta: "Circulante"
tipo: completar

enunciado: "Los pasivos que vencen en menos de un año se clasifican como Pasivo _______."

respuestas_validas:
  - "Circulante"
  - "circulante"
  - "corriente"
  - "corriente"

explicacion: |
  Los pasivos de corto plazo se denominan Pasivo Circulante (o Corriente).
  Los de largo plazo son Pasivo No Circulante (o Largo Plazo).
```

```
metadata:
  materia: "economia"
  tema: "estructura_del_patrimonio"
  nivel: "basico"
  tags: ["patrimonio", "componentes", "completar"]

respuesta: "Utilidades"
tipo: completar

enunciado: "Además del capital social, las _______ acumuladas forman parte del patrimonio neto."

respuestas_validas:
  - "Utilidades"
  - "utilidades"
  - "ganancias"
  - "ganancias"

explicacion: |
  El patrimonio neto incluye el capital aportado y las utilidades (o pérdidas) acumuladas de la empresa.
```

## Sección: estructura-productiva-dependencia (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["historia_economica", "agroexportador"]

respuesta: "primarias"
tipo: completar
respuestas_validas:
  - "primarias"

enunciado: "La estructura productiva argentina, consolidada durante el modelo agroexportador, se caracterizó por una fuerte especialización en la exportación de productos de naturaleza ___."

explicacion: |
  El modelo agroexportador (1880-1930) posicionó a Argentina como el "granero del mundo", basando su economía en la exportación de materias primas (cereales, carnes) hacia Europa, lo que generó una dependencia estructural de los sectores primarios.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["commodities", "volatilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["soja", "caída"], ["trigo", "subida"]]
  efecto: ["menor ingreso de divisas", "mayor ingreso de divisas"]

respuesta: efecto[escenario_idx]
tipo: mc
opciones_explicitas: ["menor ingreso de divisas", "mayor ingreso de divisas", "sin cambios"]

enunciado: "Si el precio internacional de la {datos[escenario_idx][0]} sufre una {datos[escenario_idx][1]}, el efecto inmediato en la balanza comercial argentina es un ___."

pasos:
  - "Identificar el commodity y la tendencia del precio."
  - "Relacionar el precio del producto de exportación con el ingreso de divisas."

explicacion: |
  Dado que Argentina es un exportador neto de commodities, la volatilidad de los precios internacionales impacta directamente en la recaudación fiscal y la disponibilidad de dólares (divisas).
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["exportaciones", "commodities"]

respuesta: "Dependencia de los precios de los commodities"
tipo: mc
opciones_explicitas: ["Diversificación industrial avanzada", "Dependencia de los precios de los commodities", "Autosuficiencia tecnológica"]

enunciado: "¿Cuál es la principal vulnerabilidad de una estructura productiva basada en la exportación de materias primas?"

explicacion: |
  La falta de valor agregado en las exportaciones hace que la economía sea altamente sensible a los ciclos de precios internacionales, fenómeno conocido como la "vulnerabilidad externa".
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["ciclos_economicos", "exportación"]

opciones_explicitas: ["Aumento de demanda externa", "Suba de precios internacionales", "Ingreso de divisas", "Crecimiento del PBI local"]
respuesta_orden: ["Aumento de demanda externa", "Suba de precios internacionales", "Ingreso de divisas", "Crecimiento del PBI local"]
tipo: ordenar

enunciado: "Ordene cronológicamente la cadena de efectos que genera un ciclo alcista en la economía argentina basado en el modelo agroexportador:"

explicacion: |
  Un aumento en la demanda mundial de productos agrícolas eleva los precios de los commodities, lo que permite un mayor ingreso de divisas al país, impulsando finalmente el crecimiento económico interno.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["valor_agregado", "industria"]

respuesta: "bajo"
tipo: completar
respuestas_validas:
  - "bajo"
  - "nulo"

enunciado: "La estructura productiva heredada presenta un perfil de exportación con un ___ grado de valor agregado, lo que se traduce en una mayor dependencia de la demanda externa de materias primas."

explicacion: |
  A diferencia de las economías industrializadas, la estructura argentina exporta mayoritariamente bienes con poco procesamiento industrial, lo que limita la capacidad de captura de valor en la cadena global.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["teoria_economica", "desarrollo"]

tipo: mc
opciones_explicitas: ["La subordinación de la economía local a las decisiones y precios de mercados externos.", "Un sistema donde el país exporta tecnología de punta y productos manufacturados.", "Un modelo de autosuficiencia total donde no se requiere comercio exterior.", "La capacidad de un país para fijar sus propios precios internacionales sin influencia externa."]

enunciado: "Se define como dependencia económica cuando la estructura productiva de un país se encuentra ___________ por los ciclos económicos y las decisiones de precios de las economías centrales."

respuesta: "La subordinación de la economía local a las decisiones y precios de mercados externos."

explicacion: |
  La dependencia económica ocurre cuando un país carece de autonomía para determinar sus ciclos internos, ya que su producción y consumo dependen de la demanda y los precios fijados en mercados externos o países desarrollados.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["comercio_exterior", "primarización"]

variables:
  escenario: uno_de([["exportación de materias primas", "vulnerabilidad a precios internacionales"], ["importación de tecnología", "dependencia de patentes extranjeras"], ["deuda externa", "dependencia de capitales volátiles"]])

tipo: completar
respuestas_validas:
  - escenario[1]

enunciado: "Un país que basa su matriz productiva principalmente en la {escenario[0]} suele enfrentar una alta ___."

respuesta: escenario[1]

explicacion: |
  La especialización en productos primarios (commodities) expone a las economías a la volatilidad de los precios internacionales, lo que caracteriza a los modelos de dependencia.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["tecnologia", "desarrollo"]

tipo: mc
opciones_explicitas: ["Importación de bienes de capital y tecnología de punta.", "Exportación de servicios de alta complejidad.", "Sustitución de importaciones tecnológicas por producción local.", "Desarrollo de investigación y desarrollo (I+D) propio."]

enunciado: "La dependencia tecnológica se manifiesta principalmente a través de la ___________."

respuesta: "Importación de bienes de capital y tecnología de punta."

explicacion: |
  Cuando un país no desarrolla tecnología propia, debe importar maquinaria y conocimiento, quedando sujeto a los costos y condiciones impuestas por los países que sí poseen dicha tecnología.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["procesos", "industrializacion"]

tipo: ordenar
opciones_explicitas: ["Especialización en recursos naturales", "Importación de manufacturas", "Dependencia de la demanda externa", "Vulnerabilidad ante crisis externas"]

enunciado: "Ordene cronológicamente los elementos que suelen conformar un ciclo de dependencia económica estructural:"

respuesta_orden: ["Especialización en recursos naturales", "Importación de manufacturas", "Dependencia de la demanda externa", "Vulnerabilidad ante crisis externas"]

explicacion: |
  El ciclo comienza con la especialización productiva, lo que genera la necesidad de importar bienes procesados, creando una dependencia de la demanda externa y resultando en vulnerabilidad ante choques externos.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["finanzas", "capitales"]

variables:
  caso: uno_de([["flujos de inversión extranjera directa", "crecimiento sostenido"], ["salidas bruscas de capitales especulativos", "crisis de balanza de pagos"]])

tipo: completar
tolerancia_abs: 0

enunciado: "En una economía dependiente, las {caso[0]} pueden ser positivas, pero las {caso[1]} suelen provocar una ___________."

respuesta: "crisis de balanza de pagos"

explicacion: |
  La volatilidad de los capitales es un rasgo de la dependencia financiera; cuando los capitales salen del país repentinamente, se generan crisis en la cuenta de pagos y devaluaciones.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["vulnerabilidad", "primarización"]

variables:
  escenario: uno_de([["soja", "400"], ["trigo", "250"], ["minería de cobre", "8000"]])

enunciado: "Una economía que basa su ingreso en la exportación de {escenario[0]} enfrenta una alta volatilidad cuando el precio internacional cae a ${escenario[1]} por unidad. Este fenómeno se conoce como vulnerabilidad externa."

respuesta: "vulnerabilidad externa"
tipo: mc
opciones_explicitas: ["vulnerabilidad externa", "estabilidad macroeconómica", "diversificación productiva", "proteccionismo"]

explicacion: |
  La dependencia de un solo producto primario expone a la economía a las fluctuaciones de los precios internacionales (commodities), lo que genera inestabilidad en la balanza de pagos y el tipo de cambio.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["balanza_de_pagos", "términos_de_intercambio"]

variables:
  caso: uno_de([["caída del precio de la soja", "déficit"], ["aumento de demanda de materias primas", "superávit"]])

enunciado: "Si ocurre una {caso[0]}, la cuenta corriente de la balanza de pagos tiende a presentar un ___."

pasos:
  - "Identificar el efecto del precio en el ingreso por exportaciones."
  - "Relacionar el ingreso con el saldo de la cuenta corriente."

respuestas_validas:
  - "déficit"
  - "superávit"
respuesta: caso[1]
tipo: completar

explicacion: |
  Una caída en los precios de exportación reduce la entrada de divisas, lo que puede derivar en un déficit en la cuenta corriente si no se compensa con deuda o remesas.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["términos_de_intercambio", "deterioro"]

enunciado: "Cuando los precios de los productos manufacturados crecen más rápido que los de los productos primarios, se produce un ___ en los términos de intercambio, lo que significa que los precios relativos de los bienes que exporta la economía caen."

respuestas_validas:
  - "deterioro"
respuesta: "deterioro"
tipo: completar

explicacion: |
  El deterioro de los términos de intercambio implica que se necesita exportar cada vez más volumen de materias primas para comprar la misma cantidad de bienes tecnológicos o manufacturados.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["enfermedad_holandesa", "cambio_real"]

variables:
  efecto: uno_de([["apreciación", "sube"], ["depreciación", "baja"]])

enunciado: "Un boom de precios en un recurso natural (como el petróleo) genera una entrada masiva de divisas que provoca la ___ del tipo de cambio real. Esto suele afectar la competitividad de la industria local."

respuestas_validas:
  - "apreciación"
  - "depreciación"
respuesta: efecto[0]
tipo: completar

explicacion: |
  La 'Enfermedad Holandesa' ocurre cuando la abundancia de un recurso natural aprecia la moneda local, haciendo que el resto de los sectores (industria, servicios) pierdan competitividad frente al exterior.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["ciclo_economico", "shock_externo"]

enunciado: "Ordene la secuencia lógica de un shock externo negativo para una economía primario-exportadora:"

opciones_explicitas: ["Caída de precios internacionales", "Menor ingreso de divisas", "Crisis de balanza de pagos", "Restricción externa"]
respuesta_orden: ["Caída de precios internacionales", "Menor ingreso de divisas", "Crisis de balanza de pagos", "Restricción externa"]
tipo: ordenar

explicacion: |
  La cadena comienza con el shock de precios, que reduce el flujo de dólares, afectando la capacidad de pago del país y limitando la importación de insumos (restricción externa).
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["historia_economica", "agroexportacion"]

respuesta: "modelo agroexportador"
tipo: completar
respuestas_validas:
  - "modelo agroexportador"

enunciado: "Antes de la industrialización por sustitución de importaciones, la economía argentina se basaba en el ___."

explicacion: |
  El modelo agroexportador consistía en la exportación de materias primas (carnes y cereales) e importación de manufacturas, consolidando una estructura de dependencia hacia los mercados centrales.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["isi", "industrializacion"]

variables:
  escenario: uno_de([["Sustitución de importaciones", "Proteccionismo"], ["Sustitución de importaciones", "Libre cambio"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Sustitución de importaciones", "Libre cambio"]

enunciado: "El proceso de Industrialización por Sustitución de Importaciones (ISI) buscaba principalmente la {escenario[0]} mediante políticas de protección de la industria nacional."

explicacion: |
  La ISI buscaba que el país dejara de depender de la compra de productos manufacturados en el exterior, fomentando la producción local mediante aranceles y subsidios.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["migraciones", "urbanizacion"]

respuesta: "urbanización"
tipo: completar
respuestas_validas:
  - "urbanización"

enunciado: "El crecimiento de la industria durante mediados del siglo XX impulsó un proceso de rápida ___ en la población argentina."

explicacion: |
  La demanda de mano de obra en las fábricas de los centros urbanos (especialmente en Buenos Aires, Rosario y Córdoba) fomentó grandes migraciones internas y la expansión de las ciudades.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["ciclos_economicos", "transicion"]

respuesta_orden: ["Modelo Agroexportador", "Crisis de la demanda externa", "Industrialización por Sustitución de Importaciones"]
tipo: ordenar
opciones_explicitas: ["Modelo Agroexportador", "Crisis de la demanda externa", "Industrialización por Sustitución de Importaciones"]

enunciado: "Ordene cronológicamente los procesos económicos que marcaron la transición de la estructura productiva argentina en el siglo XX:"

explicacion: |
  La crisis de la demanda externa (causada por las Guerras Mundiales y la Gran Depresión) hizo inviable seguir importando productos, lo que forzó el salto hacia la ISI.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["estado", "politica_industrial"]

respuesta: "intervencionista"
tipo: mc
opciones_explicitas: ["intervencionista", "liberal", "ausente"]

enunciado: "Para sostener el modelo ISI, el Estado argentino adoptó un rol principalmente _________."

explicacion: |
  El Estado asumió un rol activo mediante la regulación de aranceles, la creación de empresas públicas y el fomento del mercado interno para asegurar el crecimiento industrial.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["exportaciones", "primarización", "riesgo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["país exportador de granos", "volatilidad de precios internacionales"], ["país exportador de litio", "dependencia de la demanda tecnológica externa"]]

enunciado: "Un {datos[escenario_idx][0]} enfrenta un escenario donde su principal motor de ingresos es un commodity. El principal riesgo económico para este país es la {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["volatilidad de precios internacionales", "dependencia de la demanda tecnológica externa", "estabilidad cambiaria", "diversificación industrial"]

explicacion: |
  La dependencia de un solo producto primario expone a la economía a las fluctuaciones de los precios internacionales, lo que genera inestabilidad en la balanza comercial y en la recaudación fiscal.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["industria", "valor_agregado", "empleo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un país con baja capacidad manufacturera", "pérdida de valor agregado"], ["un país con alta dependencia de bienes de capital", "vulnerabilidad ante choques externos"]]

enunciado: "En el caso de {casos[caso_idx][0]}, el riesgo estructural más significativo es la {casos[caso_idx][1]}."

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["pérdida de valor agregado", "vulnerabilidad ante choques externos", "exceso de ahorro interno", "estabilidad de precios"]

explicacion: |
  La falta de una base industrial sólida impide que el país capture mayor valor en la cadena de producción, limitando el crecimiento del empleo calificado y la diversificación.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["enfermedad_holandesa", "tipo_de_cambio", "recursos_naturales"]

enunciado: "Cuando un país descubre un gran yacimiento de petróleo y aumenta sus exportaciones, se produce una apreciación de la moneda local. Este fenómeno, conocido como Enfermedad Holandesa, suele provocar la falta de competitividad de la ___."

respuesta: "industria manufacturera"
tipo: completar
respuestas_validas:
  - "industria manufacturera"

explicacion: |
  La entrada masiva de divisas aprecia el tipo de cambio real, lo que encarece las exportaciones de bienes no tradicionales y desincentiva la actividad industrial local.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["secuencia", "riesgo", "estructura"]

variables:
  secuencia_idx: uno_de([0, 1])
  secuencias: [["Concentración de exportaciones", "Caída de demanda externa", "Crisis de balanza de pagos"], ["Dependencia tecnológica", "Aumento de importaciones", "Déficit de cuenta corriente"]]

enunciado: "Ordene la secuencia lógica de un choque externo en una economía dependiente:"

pasos:
  - "Identificar el origen del choque"
  - "Observar el efecto en la cuenta externa"
  - "Evaluar el impacto en la estabilidad macroeconómica"

respuesta_orden: secuencias[secuencia_idx]
tipo: ordenar
opciones_explicitas: secuencias[secuencia_idx]

explicacion: |
  La estructura productiva determina la velocidad y la profundidad con la que un shock externo (como una caída de demanda) se traslada a la economía doméstica.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["indicador", "exportaciones", "concentracion"]

variables:
  escenario_val: uno_de([0, 1])
  escenarios: [[80, "alta"], [15, "baja"]]

enunciado: "Si el porcentaje de exportaciones concentrado en solo dos productos es del {escenarios[escenario_val][0]}%, se considera que la economía tiene una dependencia ___."

respuesta: escenarios[escenario_val][1]
tipo: mc
opciones_explicitas: ["alta", "baja", "nula", "moderada"]

explicacion: |
  A mayor concentración de la canasta exportadora en pocos productos, mayor es la vulnerabilidad de la economía ante cambios en los precios o volúmenes de esos bienes específicos.
```

## Sección: ecuacion-contable-fundamental (26 preguntas)

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["activo", "concepto"]

respuesta: verdadero
tipo: vf

enunciado: "El Activo representa lo que la empresa posee o tiene derecho a cobrar, como dinero, mercadería o edificios."

explicacion: |
  Correcto. El Activo refleja los recursos económicos controlados por la entidad.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["financiamiento", "pasivo"]

respuesta: verdadero
tipo: vf

enunciado: "El Pasivo representa la parte del Activo que fue financiada con recursos de terceros (prestamistas)."

explicacion: |
  Correcto. El Pasivo son fondos externos que la empresa debe devolver.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["equilibrio", "principio"]

respuesta: verdadero
tipo: vf

enunciado: "Cada transacción comercial afecta al menos dos elementos de la ecuación contable, manteniendo siempre el equilibrio."

explicacion: |
  Correcto. La partida doble asegura que la ecuación siempre se mantenga balanceada.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["pasivo", "deuda"]

respuesta: verdadero
tipo: vf

enunciado: "El Pasivo se refiere a las deudas que la empresa tiene con proveedores, bancos o el Estado."

explicacion: |
  Correcto. Las deudas comerciales y financieras forman parte del Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["activo", "derechos"]

respuesta: verdadero
tipo: vf

enunciado: "El Activo incluye tanto bienes tangibles como derechos, como facturas por cobrar."

explicacion: |
  Correcto. Los derechos de cobro son activos corrientes o no corrientes.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "avanzado"
  tags: ["solvencia", "analisis"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable permite evaluar si una compañía es solvente comparando sus activos con sus pasivos."

explicacion: |
  Correcto. Un Patrimonio Neto positivo indica que los activos superan a las deudas.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["teoria", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable es una representación lógica de la realidad económica de la empresa."

explicacion: |
  Correcto. Refleja cómo se han financiado los recursos de la empresa.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["clasificacion", "activo"]

respuesta: verdadero
tipo: vf

enunciado: "El dinero en caja de una empresa se clasifica como Activo."

explicacion: |
  El dinero en caja es un bien tangible que la empresa posee, por lo tanto, forma parte del Activo.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["clasificacion", "pasivo"]

respuesta: verdadero
tipo: vf

enunciado: "Las deudas con proveedores se clasifican como Pasivo."

explicacion: |
  Las deudas con proveedores son obligaciones con terceros externos, lo que las define como Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["clasificacion", "patrimonio"]

respuesta: verdadero
tipo: vf

enunciado: "El capital aportado por los socios se clasifica como Patrimonio Neto."

explicacion: |
  El capital aportado por los dueños representa la riqueza neta que les pertenece, por lo tanto, es Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "patrimonio"]

variables:
  activo: random(100000, 500000)
  pasivo: random(20000, 100000)

respuesta: activo + " - " + pasivo
tipo: input

enunciado: "Si una empresa tiene un Activo total de ${activo} y un Pasivo total de ${pasivo}, ¿cuál es su Patrimonio Neto?"

explicacion: |
  Despejando la ecuación fundamental: Patrimonio Neto = Activo - Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "pasivo"]

variables:
  activo: random(100000, 500000)
  patrimonio: random(20000, 100000)

respuesta: activo + " - " + patrimonio
tipo: input

enunciado: "Si el Activo total es ${activo} y el Patrimonio Neto es ${patrimonio}, ¿cuánto es el Pasivo?"

explicacion: |
  Despejando la ecuación fundamental: Pasivo = Activo - Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "activo"]

variables:
  pasivo: random(20000, 100000)
  patrimonio: random(20000, 100000)

respuesta: pasivo + " + " + patrimonio
tipo: input

enunciado: "Si el Pasivo es ${pasivo} y el Patrimonio Neto es ${patrimonio}, ¿cuál es el Activo total?"

explicacion: |
  Despejando la ecuación fundamental: Activo = Pasivo + Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["equilibrio", "lógica"]

respuesta: verdadero
tipo: vf

enunciado: "Cada transacción comercial afecta al menos dos elementos, pero la igualdad de la ecuación siempre se mantiene."

explicacion: |
  La doble entrada asegura que la ecuación se mantenga equilibrada después de cualquier operación.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "activo"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa compra una máquina pagando en efectivo, el total del Activo no cambia."

explicacion: |
  Un activo (máquina) aumenta y otro activo (caja) disminuye en la misma cantidad, manteniendo el total inalterado.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "pasivo"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa compra mercadería a crédito, tanto el Activo como el Pasivo aumentan."

explicacion: |
  La mercadería aumenta el Activo y la deuda con el proveedor aumenta el Pasivo, manteniendo el equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "liquidez"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa paga una deuda con dinero en caja, tanto el Activo como el Pasivo disminuyen."

explicacion: |
  El dinero sale (Activo baja) y la deuda se reduce (Pasivo baja), manteniendo la igualdad.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["transaccion", "patrimonio"]

respuesta: verdadero
tipo: vf

enunciado: "Si los socios aportan más dinero a la empresa, el Activo y el Patrimonio Neto aumentan."

explicacion: |
  Entra dinero (Activo sube) y el derecho de los socios sobre ese dinero (Patrimonio Neto) también sube.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["relacion", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable es una representación lógica de la realidad financiera de la empresa."

explicacion: |
  No es solo una fórmula, sino un reflejo de cómo se financian los recursos (deuda vs propio).
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "activo"]

variables:
  pasivo: random(10000, 50000)
  patrimonio: random(10000, 50000)

respuesta: verdadero
tipo: vf

enunciado: "Si el Pasivo es {pasivo} y el Patrimonio Neto es {patrimonio}, el Activo debe ser {pasivo} + {patrimonio}."

explicacion: |
  La ecuación fundamental exige que Activo sea la suma de Pasivo y Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "patrimonio"]

variables:
  activo: random(100000, 500000)
  pasivo: random(20000, 100000)

respuesta: verdadero
tipo: vf

enunciado: "Si el Activo es {activo} y el Pasivo es {pasivo}, el Patrimonio Neto debe ser {activo} - {pasivo}."

explicacion: |
  Despejando la ecuación, el Patrimonio Neto es la diferencia entre lo que tiene y lo que debe.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["calculo", "pasivo"]

variables:
  activo: random(100000, 500000)
  patrimonio: random(20000, 100000)

respuesta: verdadero
tipo: vf

enunciado: "Si el Activo es {activo} y el Patrimonio Neto es {patrimonio}, el Pasivo debe ser {activo} - {patrimonio}."

explicacion: |
  Despejando la ecuación, el Pasivo es lo que resta del Activo una vez descontado el capital propio.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["equilibrio", "regla"]

respuesta: verdadero
tipo: vf

enunciado: "Si los recursos de la empresa no se explican como deuda o capital propio, hay un error en el registro."

explicacion: |
  La ecuación garantiza el equilibrio interno; cualquier desbalance indica un error contable.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "intermedio"
  tags: ["patrimonio", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El Patrimonio Neto incluye el capital inicial y las ganancias reinvertidas."

explicacion: |
  Es la riqueza neta que pertenece a los socios, formada por lo aportado y lo generado por la actividad.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["activo", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El Activo incluye bienes tangibles como edificios y máquinas."

explicacion: |
  Los activos son los recursos que la empresa posee o tiene derecho a cobrar, incluyendo bienes físicos.
```

```
metadata:
  materia: "economia"
  tema: "ecuacion_contable_fundamental"
  nivel: "basico"
  tags: ["pasivo", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El Pasivo son los fondos que provienen de prestamistas o proveedores."

explicacion: |
  El Pasivo representa las obligaciones financieras con terceros externos que financian los recursos de la empresa.
```

