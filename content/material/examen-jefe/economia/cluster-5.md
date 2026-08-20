# Examen jefe — Dominio de Obligaciones Fiscales y Oportunidades

> Logro #191. Completaste el parcial sobre descuentos obligatorios, deuda pública y detección de oportunidades de negocio. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **105 preguntas totales** en 5/5 secciones.

---

## Sección: descuentos-obligatorios/jubilacion (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

enunciado: "¿Qué significa jubilarse?"
tipo: mc
opciones_explicitas:
  - "Dejar de trabajar y empezar a cobrar un haber mensual financiado por los aportes hechos durante la vida laboral"
  - "Cambiar de trabajo a uno mejor pago"
  - "Dejar de pagar impuestos"
respuesta: "Dejar de trabajar y empezar a cobrar un haber mensual financiado por los aportes hechos durante la vida laboral"

explicacion: |
  Es la contrapartida de haber aportado durante los años de actividad
  laboral.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

enunciado: "¿Cómo funciona el sistema de reparto en Argentina?"
tipo: mc
opciones_explicitas:
  - "Lo que aportan los trabajadores activos hoy financia las jubilaciones que se pagan hoy"
  - "Cada persona junta su propia plata en una cuenta individual para su futuro"
  - "El Estado paga las jubilaciones con impuestos al consumo únicamente"
respuesta: "Lo que aportan los trabajadores activos hoy financia las jubilaciones que se pagan hoy"

explicacion: |
  Es un pacto entre generaciones, no un ahorro individual.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En el sistema de reparto, cada trabajador junta su propia plata en una cuenta individual para cuando se jubile."

explicacion: |
  Eso sería un sistema de capitalización individual, no de reparto. En el
  reparto, los aportes de los activos de hoy pagan a los jubilados de
  hoy.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el sistema de reparto argentino, los aportes de los trabajadores activos financian las jubilaciones que se pagan en ese mismo momento."

explicacion: |
  Es la característica central del sistema de reparto.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "basico"
  tags: ["jubilacion"]

respuesta: 65
tipo: input
tolerancia_abs: 0

enunciado: "En el régimen general argentino, ¿a qué edad mínima se puede jubilar un varón?"

explicacion: |
  65 años es la edad mínima general para varones.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "basico"
  tags: ["jubilacion"]

respuesta: 60
tipo: input
tolerancia_abs: 0

enunciado: "En el régimen general argentino, ¿a qué edad mínima se puede jubilar una mujer?"

explicacion: |
  60 años es la edad mínima general para mujeres, 5 años antes que los
  varones.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "basico"
  tags: ["jubilacion"]

respuesta: 30
tipo: input
tolerancia_abs: 0

enunciado: "En el régimen general, ¿cuántos años mínimos de aportes hacen falta para jubilarse?"

explicacion: |
  30 años de aportes es el mínimo del régimen general.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para jubilarse en el régimen general hacen falta la edad mínima Y los años de aportes al mismo tiempo, no alcanza con cumplir sólo una de las dos condiciones."

explicacion: |
  Son dos requisitos que se piden juntos.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

enunciado: "¿Qué organismo administra el sistema jubilatorio argentino?"
tipo: mc
opciones_explicitas:
  - "ANSES"
  - "AFIP"
  - "El Banco Central"
respuesta: "ANSES"

explicacion: |
  ANSES recauda los aportes, liquida y paga los haberes jubilatorios.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Existen mecanismos (como moratorias previsionales o la PUAM) para dar alguna cobertura a quienes llegan a la edad pero no completaron los 30 años de aportes."

explicacion: |
  El sistema busca dar algún tipo de cobertura incluso a quien no
  completó el régimen general.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "intermedio"
  tags: ["jubilacion", "problema"]

variables:
  edad_actual: random(30, 64)

respuesta: 65 - edad_actual
tipo: input
tolerancia_abs: 0

enunciado: "Un varón tiene {edad_actual} años. ¿Cuántos años le faltan para la edad jubilatoria mínima (65)?"

explicacion: |
  Se resta la edad actual a la edad mínima requerida.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "intermedio"
  tags: ["jubilacion", "problema"]

variables:
  anios_aportados: random(5, 29)

respuesta: 30 - anios_aportados
tipo: input
tolerancia_abs: 0

enunciado: "Alguien ya aportó {anios_aportados} años. ¿Cuántos años más de aportes necesita para llegar a los 30 requeridos?"

explicacion: |
  Se resta lo ya aportado al mínimo requerido.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema de reparto funciona como un pacto entre generaciones: la generación activa sostiene a la jubilada, esperando que la próxima generación activa la sostenga a ella después."

explicacion: |
  Es la lógica de fondo del sistema, distinta de un ahorro individual.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Además de las jubilaciones, ANSES gestiona otras prestaciones sociales, como la Asignación Universal por Hijo (AUH)."

explicacion: |
  ANSES no administra sólo jubilaciones, sino varios programas de
  seguridad social.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "intermedio"
  tags: ["jubilacion"]

enunciado: "¿Cuál definición corresponde al sistema de reparto?"
tipo: mc
opciones_explicitas:
  - "Los aportes de los activos de hoy financian las jubilaciones de hoy"
  - "Cada trabajador ahorra en una cuenta propia que usa cuando se jubila"
  - "El Estado no participa para nada en el sistema"
respuesta: "Los aportes de los activos de hoy financian las jubilaciones de hoy"

explicacion: |
  La segunda opción describe un sistema de capitalización individual, no
  de reparto.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Además del régimen general, existen regímenes jubilatorios especiales para ciertas actividades (como docentes o tareas insalubres), con requisitos propios."

explicacion: |
  No todos los trabajadores se jubilan bajo exactamente las mismas
  condiciones.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "basico"
  tags: ["jubilacion"]

respuesta: verdadero
tipo: vf

enunciado: "En el régimen general, la edad mínima jubilatoria de las mujeres (60) es menor que la de los varones (65)."

explicacion: |
  Hay una diferencia de 5 años entre ambas edades mínimas.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "avanzado"
  tags: ["jubilacion", "problema"]

variables:
  edad_jubilacion: uno_de([60, 65])
  anios_trabajados: 30

respuesta: edad_jubilacion - anios_trabajados
tipo: input
tolerancia_abs: 0

enunciado: "Alguien se jubiló justo a la edad mínima ({edad_jubilacion} años) con exactamente los 30 años de aportes requeridos, sin ninguna interrupción. ¿A qué edad empezó a trabajar en blanco?"

explicacion: |
  Se resta la cantidad de años trabajados a la edad de jubilación.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El haber que se cobra al jubilarse está relacionado con los aportes hechos durante la vida laboral activa."

explicacion: |
  Es la contrapartida de haber aportado: a más historia de aportes,
  mejor el haber (dentro de las reglas del sistema).
```

```
metadata:
  materia: "economia"
  tema: "jubilacion"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El aporte jubilatorio del 11% no es sólo un descuento del sueldo: financia un sistema de reparto que sostiene a quienes ya se jubilaron, con la expectativa de sostener también a quien aporta hoy cuando le toque jubilarse."

explicacion: |
  Es la idea central de todo el tema: el por qué y el cómo detrás del
  número que ya se calculó en `../../recibo-de-sueldo/argentina/`.
```

## Sección: descuentos-obligatorios/obra-social (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "basico"
  tags: ["obra_social", "vocabulario"]

enunciado: "¿Qué es una obra social?"
tipo: mc
opciones_explicitas:
  - "Una entidad que brinda cobertura de salud a los trabajadores y sus familias"
  - "Un impuesto que se paga al Estado"
  - "Una empresa de medicina prepaga privada"
respuesta: "Una entidad que brinda cobertura de salud a los trabajadores y sus familias"

explicacion: |
  Se financia con el aporte del trabajador más la contribución del
  empleador.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "intermedio"
  tags: ["obra_social", "vocabulario"]

enunciado: "¿Con qué se financia una obra social?"
tipo: mc
opciones_explicitas:
  - "El aporte del empleado (3% del bruto) más la contribución del empleador"
  - "Sólo con impuestos generales del Estado"
  - "Sólo con lo que paga el empleado, el empleador no aporta nada"
respuesta: "El aporte del empleado (3% del bruto) más la contribución del empleador"

explicacion: |
  Es el mismo esquema aporte+contribución que la jubilación, aplicado a
  la cobertura de salud.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "intermedio"
  tags: ["obra_social", "vocabulario"]

enunciado: "¿Qué es el PMO (Programa Médico Obligatorio)?"
tipo: mc
opciones_explicitas:
  - "El piso mínimo de prestaciones que todas las obras sociales tienen que cubrir por ley"
  - "El máximo de prestaciones que una obra social puede dar"
  - "Un impuesto adicional sobre la salud"
respuesta: "El piso mínimo de prestaciones que todas las obras sociales tienen que cubrir por ley"

explicacion: |
  Ninguna obra social puede cubrir menos que el PMO, sin importar cuál
  sea.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "basico"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todas las obras sociales, sin importar cuál sea, tienen que cubrir el PMO como mínimo."

explicacion: |
  Es un piso obligatorio por ley, parejo para todas.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "intermedio"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una obra social puede ofrecer prestaciones adicionales por encima del PMO, pero nunca menos que ese piso."

explicacion: |
  El PMO es un mínimo, no un máximo ni un techo fijo.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "intermedio"
  tags: ["obra_social", "vocabulario"]

enunciado: "¿Qué es la \"opción de cambio\" de obra social?"
tipo: mc
opciones_explicitas:
  - "El derecho de un afiliado a pasar de una obra social a otra, bajo ciertas condiciones"
  - "La obligación de cambiar de obra social cada año"
  - "Un descuento extra en el sueldo"
respuesta: "El derecho de un afiliado a pasar de una obra social a otra, bajo ciertas condiciones"

explicacion: |
  No es automática: suele pedir una antigüedad mínima de afiliación.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "intermedio"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un afiliado puede ejercer la opción de cambio para pasar de la obra social que le corresponde a otra, cumpliendo ciertos requisitos."

explicacion: |
  No es un derecho ilimitado en cualquier momento, pero sí existe.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "intermedio"
  tags: ["obra_social", "vocabulario"]

enunciado: "¿Cuál es la diferencia principal entre una obra social y una prepaga?"
tipo: mc
opciones_explicitas:
  - "La obra social se financia con aportes/contribuciones obligatorios del trabajo formal; la prepaga es un seguro privado al que cualquiera se afilia pagando de su bolsillo"
  - "No hay ninguna diferencia real"
  - "La prepaga es gratis y la obra social se paga"
respuesta: "La obra social se financia con aportes/contribuciones obligatorios del trabajo formal; la prepaga es un seguro privado al que cualquiera se afilia pagando de su bolsillo"

explicacion: |
  Una depende de tener trabajo en blanco; la otra no.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "basico"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier persona puede afiliarse a una prepaga pagando la cuota, sin necesidad de tener un trabajo formal."

explicacion: |
  A diferencia de la obra social, que depende del aporte de un trabajo
  registrado.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "basico"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "PAMI (INSSJP) es la obra social específica para jubilados y pensionados."

explicacion: |
  Funciona en paralelo a las obras sociales "de actividad" de los
  trabajadores activos.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "intermedio"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque PAMI cubre a jubilados, también recibe un aporte (3%) directamente del sueldo de los trabajadores activos."

explicacion: |
  Es el mismo 3% ya calculado en `../../recibo-de-sueldo/argentina/`: los
  activos también sostienen la cobertura de los jubilados de hoy, igual
  que en el sistema jubilatorio de reparto.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "intermedio"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada rama de actividad o sindicato suele tener su propia obra social (la de comercio, la de metalúrgicos, etc.)."

explicacion: |
  La afiliación inicial depende del convenio de la actividad en la que
  trabaja cada uno.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "basico"
  tags: ["obra_social", "calculo"]

variables:
  bruto: random(50, 300) * 1000

respuesta: bruto * 0.03
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un sueldo bruto de ${bruto}, ¿cuánto financia el trabajador para su obra social (3%)?"

explicacion: |
  Es el mismo cálculo ya visto en `../../recibo-de-sueldo/argentina/`,
  ahora aplicado a lo que financia en concreto.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "avanzado"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible derivar el aporte de obra social hacia una empresa de medicina prepaga, generalmente pagando una diferencia adicional de bolsillo."

explicacion: |
  El aporte obligatorio no desaparece, sólo cambia de destino — y suele
  no alcanzar para cubrir el costo total de una prepaga por sí solo.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "intermedio"
  tags: ["obra_social"]

enunciado: "¿Cuál definición corresponde al PMO?"
tipo: mc
opciones_explicitas:
  - "El conjunto mínimo de prestaciones de salud que toda obra social debe cubrir por ley"
  - "El monto máximo que puede cobrar una obra social"
  - "Un programa exclusivo de PAMI"
respuesta: "El conjunto mínimo de prestaciones de salud que toda obra social debe cubrir por ley"

explicacion: |
  Aplica a todas las obras sociales, no sólo a PAMI.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "basico"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La obra social de un trabajador suele cubrir también a su grupo familiar (cónyuge, hijos), no sólo al propio trabajador."

explicacion: |
  Es una de las razones por las que el aporte de obra social se
  considera parte de un sistema colectivo, no sólo individual.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "intermedio"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Además del 3% que aporta el trabajador, el empleador también hace una contribución adicional para la obra social, que no se descuenta del sueldo del empleado."

explicacion: |
  Mismo esquema aporte+contribución que la jubilación (ver
  `../jubilacion/teoria.md`).
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "intermedio"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El PMO es el mismo piso mínimo obligatorio sin importar cuál sea la obra social específica del trabajador."

explicacion: |
  Es un piso parejo por ley, para cualquier obra social del país.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "avanzado"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible tener obra social y, además, pagar una prepaga particular por separado, sin depender exclusivamente de una sola cobertura."

explicacion: |
  No son mutuamente excluyentes: alguien puede tener las dos coberturas
  a la vez, aunque implique un gasto adicional.
```

```
metadata:
  materia: "economia"
  tema: "obra_social"
  nivel: "basico"
  tags: ["obra_social", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El aporte de obra social del 3% no es sólo un descuento del sueldo: financia un sistema de cobertura de salud colectiva, con un piso mínimo garantizado por ley (el PMO)."

explicacion: |
  Es la idea central de todo el tema: el por qué y el cómo detrás del
  número ya calculado en `../../recibo-de-sueldo/argentina/`.
```

## Sección: detectar-una-oportunidad-de-negocio (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["conceptos", "mercado"]

respuesta: "oportunidad de negocio"
tipo: completar
respuestas_validas: ["oportunidad de negocio"]

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
  escenarios: [
    ["Un grupo de personas busca comida saludable pero no hay locales cerca de su oficina.", "necesidad de conveniencia y salud"],
    ["Los usuarios de una app de transporte se quejan de los altos precios en hora pico.", "necesidad de economía"]
  ]

respuesta: escenarios[escenario_idx][1
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

respuesta: ["Observación del entorno", "Identificación del problema", "Análisis de la competencia", "Validación con clientes"]
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
  casos: [
    ["Vender juguetes educativos para niños de 0 a 5 años.", "segmento infantil"],
    ["Ofrecer software contable para pequeñas empresas de servicios.", "segmento empresarial"]
  ]

respuesta: casos[caso_idx][1
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
  escenario: uno_de([
    ["¿Compraría este producto si estuviera disponible mañana?", "verdadero"],
    ["¿Cuánto pagaría por este servicio?", "falso"]
  ])

enunciado: "Para validar si la necesidad detectada es real, el emprendedor realiza una encuesta. Si la pregunta es '{escenario[0]}', el objetivo principal es validar la ___."

respuestas_validas: ["demanda", "rentabilidad", "ubicación"]
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

opciones_explicitas: [
    "Lanzar el producto al mercado", 
    "Identificar una necesidad insatisfecha", 
    "Analizar la competencia y el segmento", 
    "Diseñar un prototipo o MVP"
]
respuesta: ["Identificar una necesidad insatisfecha", "Analizar la competencia y el segmento", "Diseñar un prototipo o MVP", "Lanzar el producto al mercado"]
tipo: "ordenar"

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

respuesta: falso
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
  datos: uno_de([
    [10000, 2000, 500],
    [5000, 1000, 200]
  ])

enunciado: "Si el mercado total (TAM) es de {datos[0]} personas, el mercado que puede alcanzar tu modelo de negocio (SAM) es de {datos[1]} personas, y tu capacidad real de captación (SOM) es de {datos[2]} personas, ¿cuál es el valor del SOM?"

respuesta: 500
tipo: "input"
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
respuestas_validas: ["necesidad", "problema"]

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
  escenarios: [
    ["Un inventor crea un dispositivo para limpiar nubes, pero nadie está dispuesto a pagarlo.", "falso"],
    ["Un emprendedor nota que en su barrio no hay lavanderías y abre una con alta demanda.", "verdadero"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: "vf"

enunciado: "Si un producto es altamente innovador pero no existe un segmento de clientes con la disposición y capacidad de pago para adquirirlo, ¿podemos decir que se ha detectado una oportunidad de negocio real? {escenarios[escenario_idx][0]}"

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
respuestas_validas: ["solución", "solucion"]

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

opciones_explicitas: ["Observar el mercado y detectar dolores", "Desarrollar el producto final con todo el capital", "Lanzar una campaña de marketing masiva", "Crear un plan de negocios de 50 páginas"]
respuesta: ["Observar el mercado y detectar dolores", "Crear un producto mínimo viable (MVP)", "Validar la solución con clientes reales"]
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

respuesta: "falso"
tipo: "vf"

enunciado: "¿Es suficiente con observar cómo se comporta la competencia para identificar una oportunidad de negocio única? falso"

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
  es_oportunidad: false

respuesta: es_oportunidad
tipo: completar
enunciado: "Una idea de negocio se convierte en una oportunidad real cuando existe un segmento de mercado con una necesidad insatisfecha y capacidad de pago. ¿Es una idea de negocio siempre una oportunidad de negocio? ___"

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
  escenario: uno_de([
    ["vender calzado para corredores de montaña", "nicho"],
    ["vender calzado genérico para todo público", "mercado_masivo"],
    ["vender calzado de lujo para eventos", "nicho"]
  ])

respuesta: escenario[1
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
  ejemplo: uno_de([
    ["Tener sed", "necesidad"],
    ["Beber una gaseosa de marca específica", "deseo"],
    ["Tener hambre", "necesidad"],
    ["Comer una hamburguesa de una cadena famosa", "deseo"]
  ])

respuesta: ejemplo[1
tipo: completar

respuestas_validas: ["necesidad", "deseo"]

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
  pasos_ordenados: [
    "Observar el mercado y detectar problemas",
    "Entrevistar a clientes potenciales",
    "Diseñar un Producto Mínimo Viable (MVP)",
    "Analizar la viabilidad financiera"
  ]

respuesta: pasos_ordenados
tipo: ordenar

opciones_explicitas: [
  "Observar el mercado y detectar problemas",
  "Entrevistar a clientes potenciales",
  "Diseñar un Producto Mínimo Viable (MVP)",
  "Analizar la viabilidad financiera"
]

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
  caso: uno_de([
    ["ofrecer un producto idéntico al de la competencia pero más caro", "no_hay_ventaja"],
    ["ofrecer un producto con una característica única que resuelve un problema mejor", "hay_ventaja"],
    ["ofrecer un producto con el mismo precio y calidad que la competencia", "no_hay_ventaja"]
  ])

respuesta: caso[1
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

respuesta: escenarios[escenario_idx][1
tipo: completar
respuestas_validas: ["reparación rápida", "comida saludable y rápida", "cuidado canino a domicilio"]

explicacion: |
  La identificación de una oportunidad surge al detectar una brecha entre una necesidad existente y la oferta actual del mercado.
```

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

respuesta: casos[caso_idx][1
tipo: completar
explicacion: |
  Las quejas de los clientes son "puntos de dolor" (pain points) que representan oportunidades de mejora y diferenciación para un nuevo negocio.
```

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
respuesta: ["Observar el problema", "Entrevistar clientes potenciales", "Crear un Producto Mínimo Viable", "Escalar el modelo de negocio"]
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

variables:
  situacion_idx: uno_de([0, 1])
  situaciones: [["Hay muchos competidores pero todos ofrecen lo mismo", "alta"], ["Hay pocos competidores pero la demanda es muy baja", "baja"]]

enunciado: "Si el análisis de mercado muestra que la competencia es muy similar entre sí y no cubre una necesidad específica, la intensidad de la oportunidad se considera: ___"

respuesta: situaciones[situacion_idx][0
tipo: completar
respuestas_validas: ["alta", "baja"]

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

## Sección: deuda-publica-externa (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es la deuda pública externa?"
tipo: mc
opciones_explicitas:
  - "La parte de la deuda de un Estado contraída con acreedores de afuera del país, típicamente en moneda extranjera"
  - "La deuda que un Estado tiene con sus propios bancos comerciales"
  - "El total de impuestos que un país no logró cobrar en un año"
respuesta: "La parte de la deuda de un Estado contraída con acreedores de afuera del país, típicamente en moneda extranjera"

explicacion: |
  Es la definición central del tema, en contraste con la deuda
  interna.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo típico de acreedor de deuda pública externa?"
tipo: mc
opciones_explicitas:
  - "El Fondo Monetario Internacional (FMI)"
  - "Un fondo de pensión que sólo invierte en bonos del propio país"
  - "Un banco comercial local, exclusivamente"
respuesta: "El Fondo Monetario Internacional (FMI)"

explicacion: |
  Es uno de los acreedores externos habituales mencionados en la
  teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Por qué la moneda en la que está denominada la deuda externa es tan relevante?"
tipo: mc
opciones_explicitas:
  - "Porque el Estado no puede emitir esa moneda extranjera para pagarla, a diferencia de lo que puede intentar con deuda en moneda propia"
  - "Porque la moneda extranjera no tiene ningún valor real"
  - "En realidad no tiene ninguna relevancia especial"
respuesta: "Porque el Estado no puede emitir esa moneda extranjera para pagarla, a diferencia de lo que puede intentar con deuda en moneda propia"

explicacion: |
  Es la diferencia estructural central frente a la deuda interna.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿De qué formas puede un país conseguir la moneda extranjera necesaria para pagar deuda externa?"
tipo: mc
opciones_explicitas:
  - "Usando reservas, generando superávit comercial, o pidiendo un préstamo nuevo para pagar el vencimiento anterior"
  - "Emitiendo esa moneda extranjera directamente con su propio banco central"
  - "No existe ninguna forma de conseguir moneda extranjera"
respuesta: "Usando reservas, generando superávit comercial, o pidiendo un préstamo nuevo para pagar el vencimiento anterior"

explicacion: |
  Son las tres vías mencionadas en la teoría, todas conectadas con
  temas anteriores de esta sub-rama.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "Si la moneda local se devalúa, ¿qué pasa con el costo (medido en moneda local) de pagar una deuda externa en dólares?"
tipo: mc
opciones_explicitas:
  - "Aumenta: hace falta más moneda local para juntar la misma cantidad de dólares que antes"
  - "Disminuye: hace falta menos moneda local para pagar la misma deuda"
  - "No cambia en absoluto"
respuesta: "Aumenta: hace falta más moneda local para juntar la misma cantidad de dólares que antes"

explicacion: |
  Es la conexión directa con `devaluacion/`: la deuda externa es
  sensible al tipo de cambio.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda externa en moneda extranjera es más sensible a los movimientos del tipo de cambio que la deuda interna denominada en moneda propia."

explicacion: |
  Es la diferencia clave entre los dos tipos de deuda pública.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cuál es el riesgo específico central de la deuda externa?"
tipo: mc
opciones_explicitas:
  - "Que el país necesite conseguir suficiente moneda extranjera al vencimiento, sin controlar directamente esa moneda"
  - "Que la deuda externa nunca genera intereses"
  - "Que sólo puede pagarse en la moneda del propio país"
respuesta: "Que el país necesite conseguir suficiente moneda extranjera al vencimiento, sin controlar directamente esa moneda"

explicacion: |
  Es el riesgo estructural que distingue a la deuda externa de la
  interna.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "basico"
  tags: ["deuda_publica", "problema"]

enunciado: "Un país recibe un préstamo del FMI, en dólares. ¿Qué tipo de deuda es esta?"
tipo: mc
opciones_explicitas:
  - "Deuda pública externa"
  - "Deuda pública interna"
  - "No es deuda: es una donación"
respuesta: "Deuda pública externa"

explicacion: |
  Acreedor de afuera, en moneda extranjera: es exactamente la
  definición de deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un bono emitido \"bajo ley de Nueva York\", vendido a inversores extranjeros en dólares, es un ejemplo real de deuda pública externa."

explicacion: |
  Es el ejemplo concreto citado en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "problema"]

enunciado: "Una noticia dice \"el país tiene vencimientos de deuda externa por U$S 2.000 millones el año que viene\". ¿Qué está informando esa cifra?"
tipo: mc
opciones_explicitas:
  - "Cuánta moneda extranjera necesita conseguir el país en ese plazo para cumplir sus pagos"
  - "Cuánto va a recaudar el país en impuestos ese año"
  - "El tamaño total del PBI del país"
respuesta: "Cuánta moneda extranjera necesita conseguir el país en ese plazo para cumplir sus pagos"

explicacion: |
  Es la lectura directa de un vencimiento de deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "calculo"]

variables:
  capital_usd: random(1, 20) * 100
  tasa_pct: uno_de([4, 5, 8])
  anios: uno_de([1, 2])

respuesta: capital_usd * (1 + tasa_pct / 100) ^ anios
tipo: input
tolerancia_abs: 1

enunciado: "Un país toma un préstamo externo de U$S {capital_usd} millones, a una tasa anual del {tasa_pct}%, a devolver en {anios} año(s), con interés compuesto anual. ¿Cuántos millones de dólares tiene que devolver en total?"

explicacion: |
  Misma fórmula de interés compuesto que en `deuda-publica-interna/`,
  ahora en dólares en vez de moneda local.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los inversores privados de otros países que compran bonos de un Estado en moneda extranjera (\"bonistas\") son un tipo habitual de acreedor de deuda externa."

explicacion: |
  Es uno de los tres tipos de acreedores externos mencionados en la
  teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un Estado no puede emitir dólares (u otra moneda extranjera) para pagar su deuda externa: sólo puede emitir su propia moneda local."

explicacion: |
  Es la limitación estructural central que distingue a la deuda
  externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las reservas del banco central son una de las formas con las que un país puede afrontar un vencimiento de deuda externa."

explicacion: |
  Es la conexión directa con `reservas-banco-central/`.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "problema"]

enunciado: "Un gobierno le pide un préstamo en euros a otro país europeo. ¿Qué tipo de deuda pública está tomando?"
tipo: mc
opciones_explicitas:
  - "Deuda pública externa"
  - "Deuda pública interna"
  - "No es deuda pública: es deuda privada"
respuesta: "Deuda pública externa"

explicacion: |
  Acreedor de otro país, en moneda extranjera (euros): es deuda
  externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país puede pedir un préstamo externo nuevo específicamente para pagar el vencimiento de un préstamo externo anterior — el mismo mecanismo de rollover, ahora en moneda extranjera."

explicacion: |
  Es la misma lógica de refinanciación ya vista en
  `deuda-publica-interna/`, aplicada a deuda en moneda extranjera.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de lo que puede pasar cuando se acerca un vencimiento grande de deuda externa."
opciones_explicitas:
  - "Si no los consigue, el país queda en riesgo de no poder pagar en la fecha comprometida"
  - "Se acerca la fecha de un vencimiento grande de deuda en dólares"
  - "Si consigue los dólares, paga el vencimiento a tiempo"
  - "El país busca conseguir esos dólares: con reservas, superávit comercial o un préstamo nuevo"
respuesta_orden: ["Se acerca la fecha de un vencimiento grande de deuda en dólares", "El país busca conseguir esos dólares: con reservas, superávit comercial o un préstamo nuevo", "Si consigue los dólares, paga el vencimiento a tiempo", "Si no los consigue, el país queda en riesgo de no poder pagar en la fecha comprometida"]

explicacion: |
  Es la secuencia de riesgo central de la deuda externa, que conecta
  directo con el tema siguiente (`default-deuda/`).
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país con superávit comercial sostenido tiene más facilidad para conseguir la moneda extranjera necesaria para pagar su deuda externa, que uno con déficit comercial persistente."

explicacion: |
  Es la conexión directa con `balanza-comercial/`: más dólares
  entrando por exportaciones, más margen para afrontar deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "basico"
  tags: ["deuda_publica"]

tipo: completar
enunciado: "Completá: a diferencia de la deuda interna, la deuda pública externa está contraída con acreedores de ___ (dentro o fuera) del país."
respuestas_validas:
  - "fuera"
  - "afuera"

explicacion: |
  Es el criterio central que distingue a la deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda pública externa está contraída con acreedores de afuera del país, típicamente en moneda extranjera que el Estado no puede emitir por su cuenta, lo que la hace más sensible al tipo de cambio que la deuda interna."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: deuda-publica-interna (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cómo hace un Estado para pedir dinero prestado?"
tipo: mc
opciones_explicitas:
  - "Emite títulos de deuda (bonos), que promete pagar con interés en fechas determinadas"
  - "Sólo puede pedir dinero directamente al Fondo Monetario Internacional"
  - "No existe ningún mecanismo para que un Estado se endeude"
respuesta: "Emite títulos de deuda (bonos), que promete pagar con interés en fechas determinadas"

explicacion: |
  Es el mecanismo central de endeudamiento de cualquier Estado.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es la deuda pública interna?"
tipo: mc
opciones_explicitas:
  - "La parte de la deuda de un Estado contraída con acreedores dentro del propio país"
  - "La deuda que un Estado tiene con organismos internacionales exclusivamente"
  - "El total de impuestos que recauda un Estado en un año"
respuesta: "La parte de la deuda de un Estado contraída con acreedores dentro del propio país"

explicacion: |
  Es la definición central del tema.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo típico de acreedor de deuda pública interna?"
tipo: mc
opciones_explicitas:
  - "Un fondo de pensión local que compra bonos del propio país"
  - "Un turista extranjero de visita"
  - "Un organismo internacional exclusivamente"
respuesta: "Un fondo de pensión local que compra bonos del propio país"

explicacion: |
  Es uno de los acreedores internos habituales mencionados en la
  teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda pública reutiliza la misma matemática del interés compuesto ya vista para un crédito personal, sólo que quien pide prestado es un Estado en vez de una familia."

explicacion: |
  Es la conexión directa con `interes-compuesto/`.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es el \"rollover\" de deuda pública?"
tipo: mc
opciones_explicitas:
  - "Emitir un título nuevo para juntar el dinero y pagar un vencimiento anterior, refinanciando en vez de cancelar de una vez"
  - "Cancelar toda la deuda de una sola vez con lo recaudado en un año"
  - "Dejar de pagar la deuda por completo"
respuesta: "Emitir un título nuevo para juntar el dinero y pagar un vencimiento anterior, refinanciando en vez de cancelar de una vez"

explicacion: |
  Es la práctica habitual de la mayoría de los Estados con su deuda.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En la práctica, los Estados rara vez pagan toda su deuda de una sola vez con lo recaudado en un año: lo habitual es refinanciar, estirando el pago en el tiempo."

explicacion: |
  Es la práctica estándar de gestión de deuda pública.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "Si la deuda interna está en la propia moneda del país, ¿qué opción tiene el Estado que no tiene con deuda en moneda extranjera?"
tipo: mc
opciones_explicitas:
  - "En principio, podría pedirle al banco central que emita más moneda para pagarla"
  - "Puede pagarla automáticamente sin ningún costo, sin excepción"
  - "Puede eliminarla por decreto sin ninguna consecuencia"
respuesta: "En principio, podría pedirle al banco central que emita más moneda para pagarla"

explicacion: |
  Es una opción real que sólo existe para deuda en moneda propia.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Emitir moneda sin respaldo en más producción para pagar deuda tiende a generar inflación — no es una salida sin costo."

explicacion: |
  Es la conexión con `pbi-e-inflacion/`: emitir de más presiona los
  precios generales al alza.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un banco central con autonomía respecto del gobierno suele resistirse a financiar el pago de deuda emitiendo moneda sin límite, justamente por el riesgo de inflación que eso implica."

explicacion: |
  Es la conexión con la independencia del banco central vista en
  `reservas-banco-central/`.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "problema"]

enunciado: "Un gobierno emite un bono en su propia moneda y lo vende a bancos e inversores del propio país. ¿Qué tipo de deuda está tomando?"
tipo: mc
opciones_explicitas:
  - "Deuda pública interna"
  - "Deuda pública externa"
  - "No es deuda: es un impuesto nuevo"
respuesta: "Deuda pública interna"

explicacion: |
  Acreedores dentro del país, en moneda local: es exactamente la
  definición de deuda interna.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es un título de deuda (bono) emitido por un Estado?"
tipo: mc
opciones_explicitas:
  - "Una promesa de pago: el Estado se compromete a devolver el capital prestado más un interés en fechas determinadas"
  - "Un impuesto obligatorio que paga toda la población"
  - "Un tipo de moneda extranjera"
respuesta: "Una promesa de pago: el Estado se compromete a devolver el capital prestado más un interés en fechas determinadas"

explicacion: |
  Es la definición básica de un bono estatal.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "calculo"]

variables:
  capital: random(1, 20) * 100000
  tasa_pct: uno_de([5, 10, 20])
  anios: uno_de([1, 2])

respuesta: capital * (1 + tasa_pct / 100) ^ anios
tipo: input
tolerancia_abs: 1

enunciado: "Un Estado emite un bono por ${capital}, a una tasa de interés anual del {tasa_pct}%, a devolver en {anios} año(s), capitalizando el interés cada año. ¿Cuánto tiene que devolver en total?"

explicacion: |
  Es la misma fórmula de interés compuesto ya vista en
  `interes-compuesto/`, aplicada a deuda estatal: Monto = Capital ×
  (1 + tasa)^tiempo.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El propio banco central de un país puede ser, en algunos casos, un acreedor de la deuda pública interna, cuando compra deuda emitida por el Tesoro."

explicacion: |
  Es uno de los acreedores internos mencionados en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "Si la deuda interna está denominada en moneda local, ¿la afecta directamente una devaluación de esa moneda, de la misma forma en que afecta a una deuda en dólares?"
tipo: mc
opciones_explicitas:
  - "No de la misma forma: al estar en moneda propia, el monto adeudado en esa misma moneda no cambia por una devaluación"
  - "Sí, exactamente igual que la deuda externa en dólares"
  - "La devaluación siempre cancela automáticamente la deuda interna"
respuesta: "No de la misma forma: al estar en moneda propia, el monto adeudado en esa misma moneda no cambia por una devaluación"

explicacion: |
  Es una diferencia clave con la deuda externa, que sí se ve afectada
  directo por el tipo de cambio (ver `deuda-publica-externa/`).
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de un rollover de deuda pública."
opciones_explicitas:
  - "La deuda queda refinanciada, estirada en el tiempo"
  - "Vence un título de deuda emitido hace tiempo"
  - "Con lo recaudado del título nuevo, se paga el vencimiento del título viejo"
  - "El Estado emite un título nuevo para juntar el dinero necesario"
respuesta_orden: ["Vence un título de deuda emitido hace tiempo", "El Estado emite un título nuevo para juntar el dinero necesario", "Con lo recaudado del título nuevo, se paga el vencimiento del título viejo", "La deuda queda refinanciada, estirada en el tiempo"]

explicacion: |
  Es la secuencia típica de cómo un Estado refinancia sus
  vencimientos.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la deuda interna en moneda propia tiene la opción de pagarse emitiendo dinero, esa opción tiene el costo real de la inflación — no está exenta de todo riesgo."

explicacion: |
  Es la aclaración explícita de la teoría: no es una salida
  \"gratis\".
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los bancos comerciales del propio país son uno de los tipos de acreedores habituales de la deuda pública interna."

explicacion: |
  Es uno de los ejemplos mencionados en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cuál es el criterio central que distingue la deuda pública interna de la externa?"
tipo: mc
opciones_explicitas:
  - "Si el acreedor está dentro o fuera del país"
  - "El monto total de la deuda"
  - "La tasa de interés que paga"
respuesta: "Si el acreedor está dentro o fuera del país"

explicacion: |
  Es el criterio central de la distinción entre los dos tipos.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica"]

tipo: completar
enunciado: "Completá: cuando un Estado emite un título nuevo para pagar uno que vence, en vez de cancelarlo con lo recaudado, está haciendo un ___ (nombre en inglés usado para esta práctica)."
respuestas_validas:
  - "rollover"

explicacion: |
  Es el término técnico central del tema.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda pública interna es la parte de la deuda de un Estado con acreedores dentro del propio país, típicamente en moneda local, y suele refinanciarse en vez de pagarse toda de una vez."

explicacion: |
  Es la idea central de todo el tema.
```
