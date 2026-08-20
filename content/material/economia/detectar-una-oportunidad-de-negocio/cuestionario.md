# Economia — Detectar una oportunidad de negocio (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de oportunidad de negocio

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

### 2 — Identificación de necesidades

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

### 3 — Validación de mercado

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

### 4 — Pasos para la detección

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

### 5 — Segmentación de mercado

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

### 6 — El vacío en el mercado de snacks saludables

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

### 7 — Validación de la necesidad

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

### 8 — Pasos para identificar una oportunidad

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

### 9 — Análisis de la competencia

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["competencia", "ventaja_competitiva"]

enunciado: "Si un emprendedor detecta una necesidad insatisfecha, pero ya existen tres empresas ofreciendo exactamente lo mismo con el mismo precio y calidad, la probabilidad de que sea una oportunidad de negocio rentable es baja sin una ventaja competitiva clara."

respuesta: falso
tipo: "vf"

explicacion: |
  La saturación de un mercado con ofertas idénticas dificulta la entrada. Una oportunidad real requiere diferenciación o una mejora en la propuesta de valor.
```

### 10 — Cálculo de potencial de mercado

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["TAM", "SAM", "SOM"]

variables:
  datos: uno_de([[10000, 2000, 500], [5000, 1000, 200]])

enunciado: "Si el mercado total (TAM) es de {datos[0]} personas, el mercado que puede alcanzar tu modelo de negocio (SAM) es de {datos[1]} personas, y tu capacidad real de captación (SOM) es de {datos[2]} personas, ¿cuál es el valor del SOM?"

respuesta: 500
tipo: "input"
tolerancia_abs: 0

explicacion: |
  El SOM (Serviceable Obtainable Market) representa la parte del mercado que realmente puedes capturar en el corto plazo con tus recursos actuales.
```

### 11 — El mito de la idea brillante

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

### 12 — Idea vs Oportunidad

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

### 13 — El sesgo del producto

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

### 14 — Pasos para la validación

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

### 15 — El error de la observación pasiva

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

### 16 — Oportunidad vs. Idea

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

### 17 — El nicho de mercado

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

### 18 — Diferencia entre necesidad y deseo

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

### 19 — Pasos para la validación

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

### 20 — El factor de la ventaja competitiva

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

### 21 — Identificación de nichos

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

### 22 — Validación de la demanda

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["validación", "mercado"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Se lanza un producto premium en un barrio de bajos ingresos", "falso"], ["Se detecta una queja recurrente sobre el envío de un competidor", "verdadero"]]

enunciado: "Si un emprendedor observa que los clientes de la competencia se quejan constantemente de la lentitud en la entrega, ¿es este un indicador válido para una nueva oportunidad de negocio? (Verdadero/Falso)"

respuesta: casos[caso_idx][1]
tipo: completar
explicacion: |
  Las quejas de los clientes son "puntos de dolor" (pain points) que representan oportunidades de mejora y diferenciación para un nuevo negocio.
```

### 23 — El proceso de validación

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

variables:
  pasos_orden: ["Observar el problema", "Entrevistar clientes potenciales", "Crear un Producto Mínimo Viable", "Escalar el modelo de negocio"]

enunciado: "Ordena los pasos lógicos para validar una oportunidad de negocio desde la detección hasta el crecimiento:"

opciones_explicitas: ["Observar el problema", "Entrevistar clientes potenciales", "Crear un Producto Mínimo Viable", "Escalar el modelo de negocio"]
respuesta_orden: ["Observar el problema", "Entrevistar clientes potenciales", "Crear un Producto Mínimo Viable", "Escalar el modelo de negocio"]
tipo: ordenar

explicacion: |
  Primero se identifica el problema, luego se valida con usuarios reales, se prueba con un producto mínimo y finalmente se escala.
```

### 24 — Análisis de la competencia

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["competencia", "estrategia"]

variables:
  situacion_idx: uno_de([0, 1])
  situaciones: [["Hay muchos competidores pero todos ofrecen lo mismo", "alta"], ["Hay pocos competidores pero la demanda es muy baja", "baja"]]

enunciado: "Si el análisis de mercado muestra que la competencia es muy similar entre sí y no cubre una necesidad específica, la intensidad de la oportunidad se considera: ___"

respuesta: situaciones[situacion_idx][0]
tipo: completar
respuestas_validas:
  - "alta"
  - "baja"

explicacion: |
  La falta de diferenciación en la competencia actual indica un espacio para la innovación y la captura de mercado.
```

### 25 — El concepto de "Pain Point"

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
