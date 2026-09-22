# Examen jefe — [PENDIENTE #777]

> Logro #777. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **95 preguntas totales** en 5/5 secciones.

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

## Sección: jubilacion-sistema-previsional (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

enunciado: "¿Cómo funciona un sistema previsional de reparto?"
tipo: mc
opciones_explicitas:
  - "Lo que aportan los trabajadores activos hoy financia las jubilaciones que se pagan hoy"
  - "Cada trabajador tiene una cuenta propia donde se acumula lo que aportó"
  - "El Estado paga las jubilaciones con impuestos al consumo, no con aportes laborales"
respuesta: "Lo que aportan los trabajadores activos hoy financia las jubilaciones que se pagan hoy"

explicacion: |
  Es un pacto entre generaciones: la generación activa sostiene a la
  jubilada, con la expectativa de que la próxima haga lo mismo con ella.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

enunciado: "¿Cómo funciona un sistema previsional de capitalización individual (privado)?"
tipo: mc
opciones_explicitas:
  - "Cada trabajador aporta a una cuenta propia, que se invierte y crece según lo que rinda esa inversión"
  - "El Estado reparte lo aportado hoy entre los jubilados de hoy"
  - "No existen aportes: el Estado paga las jubilaciones directamente de su presupuesto general"
respuesta: "Cada trabajador aporta a una cuenta propia, que se invierte y crece según lo que rinda esa inversión"

explicacion: |
  El haber jubilatorio de cada persona depende de lo acumulado
  específicamente en su propia cuenta, no de un fondo común.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

enunciado: "¿Cómo funciona un sistema previsional híbrido (mixto)?"
tipo: mc
opciones_explicitas:
  - "Combina reparto (garantiza un piso mínimo) y capitalización individual (varía según la inversión)"
  - "Es un sistema de reparto que además cobra una comisión fija a los trabajadores"
  - "Es lo mismo que un sistema de capitalización individual, con otro nombre"
respuesta: "Combina reparto (garantiza un piso mínimo) y capitalización individual (varía según la inversión)"

explicacion: |
  Reparte el riesgo entre los dos modelos: parte del aporte va a un
  sistema solidario, parte va a una cuenta individual.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "No existe un único modelo de sistema previsional: distintos países usan reparto, capitalización individual o modelos híbridos."

explicacion: |
  Cada modelo reparte el riesgo de forma distinta; ninguno es
  intrínsecamente "el correcto" para cualquier contexto.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Entre 1994 y 2008, en Argentina funcionó un sistema con capitalización individual, con cuentas administradas por empresas privadas llamadas AFJP."

explicacion: |
  Es un dato histórico real: Argentina usó ese modelo mixto durante 14
  años, antes del cambio de 2008.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En 2008, la Ley 26.425 eliminó el régimen de capitalización individual administrado por las AFJP y estatizó esos fondos."

explicacion: |
  Fue el cambio que dio origen al sistema previsional argentino actual.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

enunciado: "¿Cómo se llama el sistema previsional que rige hoy en Argentina, creado en 2008?"
tipo: mc
opciones_explicitas:
  - "SIPA (Sistema Integrado Previsional Argentino)"
  - "AFJP (Administradoras de Fondos de Jubilaciones y Pensiones)"
  - "PUAM (Prestación Universal para el Adulto Mayor)"
respuesta: "SIPA (Sistema Integrado Previsional Argentino)"

explicacion: |
  Reemplazó al régimen de capitalización individual de las AFJP.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El SIPA es un sistema de reparto, administrado por ANSES."

explicacion: |
  Es el mismo modelo de reparto explicado en el módulo anterior, ahora
  con el nombre y la historia del sistema que lo reemplazó.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El argumento oficial del gobierno para eliminar el régimen de las AFJP en 2008 fue que esas administradoras cobraban comisiones que reducían lo que efectivamente se acumulaba para cada trabajador."

explicacion: |
  Es el argumento que dio el gobierno de ese momento — no implica que
  no haya habido otras posturas ni otros argumentos en el debate.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de capitalización individual, el haber jubilatorio de una persona depende específicamente de lo acumulado en su propia cuenta, no de un fondo común entre todos los trabajadores."

explicacion: |
  Es la diferencia central con el sistema de reparto, donde no hay
  cuentas individuales.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de reparto puro, el aporte de un trabajador activo se usa de inmediato para pagar la jubilación de otra persona — no se va acumulando en una cuenta a nombre de quien aportó."

explicacion: |
  Por eso, en el sistema de reparto, calcular un "valor futuro
  acumulado" del aporte de una persona no describe cómo funciona
  realmente ese sistema.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["aporte", "vocabulario"]

enunciado: "En el sentido de ahorro personal para el futuro, ¿qué es \"el aporte\"?"
tipo: mc
opciones_explicitas:
  - "Un monto fijo que se destina periódicamente (por ejemplo, cada mes) a un fondo que se va acumulando"
  - "El haber jubilatorio que se cobra una vez jubilado"
  - "La edad mínima para poder jubilarse"
respuesta: "Un monto fijo que se destina periódicamente (por ejemplo, cada mes) a un fondo que se va acumulando"

explicacion: |
  Es la pieza que, capitalizada con interés compuesto durante muchos
  años, determina cuánto se llega a acumular.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "avanzado"
  tags: ["aporte", "calculo"]

variables:
  aporte: random(5, 50) * 1000
  tasa: random(1, 3)
  n: random(10, 40)

respuesta: aporte * ((1 + tasa / 100) ^ n - 1) / (tasa / 100)
tipo: input
tolerancia_abs: 100

enunciado: "Alguien aporta ${aporte} por período a una tasa del {tasa}% por período, durante {n} períodos. ¿Cuál es el valor futuro acumulado?"

pasos:
  - "VF = aporte × ((1+r)^n - 1) / r = {aporte} × ((1+{tasa/100})^{n} - 1) / {tasa/100}"

explicacion: |
  Cada aporte capitaliza por interés compuesto desde el momento en que
  se hizo hasta el final del período total.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["aporte", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor futuro de una serie de aportes periódicos crece con interés compuesto, igual que un único capital invertido de una vez."

explicacion: |
  La diferencia es que cada aporte individual capitaliza por una
  cantidad distinta de períodos, según cuándo se hizo.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["aporte", "comparacion"]

variables:
  aporte: random(5, 50) * 1000
  tasa: random(1, 3)
  n_a: random(10, 20)
  n_b: random(21, 40)

respuesta: ((aporte * ((1 + tasa / 100) ^ n_b - 1) / (tasa / 100)) > (aporte * ((1 + tasa / 100) ^ n_a - 1) / (tasa / 100)))
tipo: vf

enunciado: "Con el mismo aporte de ${aporte} por período y la misma tasa del {tasa}%, ¿aportar durante {n_b} períodos da un valor futuro mayor que aportar durante {n_a} períodos?"

explicacion: |
  A más períodos aportando, más tiempo tiene cada aporte para
  capitalizar, y mayor el valor futuro acumulado.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "avanzado"
  tags: ["aporte", "comparacion"]

variables:
  tasa: random(1, 3)
  aporte_chico: random(10, 20) * 1000
  n_largo: random(30, 40)
  aporte_grande: random(30, 60) * 1000
  n_corto: random(10, 15)

respuesta: ((aporte_chico * ((1 + tasa / 100) ^ n_largo - 1) / (tasa / 100)) > (aporte_grande * ((1 + tasa / 100) ^ n_corto - 1) / (tasa / 100)))
tipo: vf

enunciado: "Persona A aporta ${aporte_chico} por período durante {n_largo} períodos (empezó antes). Persona B aporta ${aporte_grande} por período (más que A) pero sólo durante {n_corto} períodos (empezó después). A la misma tasa del {tasa}%, ¿A termina con un valor futuro mayor que B, a pesar de aportar menos por período?"

explicacion: |
  El tiempo capitalizando pesa muchísimo: empezar antes con montos
  chicos suele superar a empezar tarde con montos más altos.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "avanzado"
  tags: ["aporte", "calculo"]

variables:
  tasa: random(1, 3)
  n: random(10, 40)
  aporte: random(5, 50) * 1000
  vf_objetivo: aporte * ((1 + tasa / 100) ^ n - 1) / (tasa / 100)

respuesta: aporte
tipo: input
tolerancia_abs: 5

enunciado: "Alguien quiere llegar a un valor futuro de ${redondear(vf_objetivo, 0)}, aportando por {n} períodos a una tasa del {tasa}% por período. ¿Cuál tiene que ser el aporte periódico?"

explicacion: |
  Se despeja el aporte de la fórmula del valor futuro, con la tasa y la
  cantidad de períodos ya conocidas.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["aporte", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular el valor futuro de una serie de aportes tiene sentido claro en un sistema de capitalización individual, pero no describe cómo funciona un sistema de reparto puro, donde el aporte de hoy se usa de inmediato y no se acumula en una cuenta propia."

explicacion: |
  Sirve igual como herramienta general de ahorro personal, pero no es
  literalmente cómo opera el sistema de reparto en sí.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["jubilacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con una población que en general vive más años y tiene menos hijos que antes, la relación entre trabajadores activos y personas jubiladas tiende a ajustarse con el tiempo en los sistemas de reparto — por eso muchos especialistas recomiendan un ahorro previsional propio, además del aporte obligatorio."

explicacion: |
  Es una observación demográfica general (no específica de ningún país
  ni de ninguna postura política puntual), y una recomendación habitual
  de las finanzas personales.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "intermedio"
  tags: ["aporte", "verificacion"]

variables:
  aporte: random(5, 50) * 1000
  tasa: random(1, 3)
  n: random(10, 40)
  correcto: aporte * ((1 + tasa / 100) ^ n - 1) / (tasa / 100)
  error: uno_de([0, 0, 0, 20000, -20000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 200)
tipo: vf

enunciado: "¿Está bien calculado esto? Aporte de ${aporte} por período, tasa {tasa}% por período, {n} períodos, valor futuro informado: ${redondear(mostrado, 0)}."

explicacion: |
  Se vuelve a calcular con la fórmula del valor futuro de aportes
  periódicos y se compara con el valor informado.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "avanzado"
  tags: ["aporte"]

variables:
  aporte: random(10, 40) * 1000
  tasa: uno_de([1, 2])
  n: uno_de([15, 20, 25, 30])
  vf: aporte * ((1 + tasa / 100) ^ n - 1) / (tasa / 100)

tipo: completar
enunciado: "Aportando ${aporte} por período a una tasa del {tasa}% por período, se llegó a un valor futuro de ${redondear(vf, 0)}. Completá: se aportó durante ___ períodos."
respuestas_validas:
  - n

explicacion: |
  Entre las opciones típicas de cantidad de períodos, sólo una da
  exactamente ese valor futuro con ese aporte y esa tasa.
```

```
metadata:
  materia: "economia"
  tema: "jubilacion_sistema_previsional"
  nivel: "basico"
  tags: ["jubilacion", "aporte", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Existen tres modelos posibles de sistema previsional (reparto, capitalización individual, híbrido); Argentina usó capitalización individual con las AFJP entre 1994 y 2008, y desde entonces usa el SIPA, un sistema de reparto — y, más allá del modelo del país, el interés compuesto aplicado a aportes periódicos muestra por qué empezar antes a ahorrar pesa tanto como cuánto se aporta."

explicacion: |
  Es la idea central de todo el tema.
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

## Sección: monotributo (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué es el monotributo?"
tipo: mc
opciones_explicitas:
  - "Un régimen simplificado con una única cuota mensual fija, para quienes trabajan de forma independiente"
  - "Un impuesto exclusivo para empleados en relación de dependencia"
  - "Una multa por no pagar impuestos a tiempo"
respuesta: "Un régimen simplificado con una única cuota mensual fija, para quienes trabajan de forma independiente"

explicacion: |
  Reemplaza tener que liquidar IVA y Ganancias por separado, con un solo
  pago mensual.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

respuesta: 11
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas categorías tiene el monotributo en total (de la A a la K)?"

explicacion: |
  De la A a la K son 11 letras, y por lo tanto 11 categorías.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

enunciado: "¿Cuál es la categoría más baja del monotributo?"
tipo: mc
opciones_explicitas:
  - "A"
  - "K"
  - "1"
respuesta: "A"

explicacion: |
  Las categorías van de la A (la más baja) a la K (la más alta).
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

enunciado: "¿Cuál es la categoría más alta del monotributo?"
tipo: mc
opciones_explicitas:
  - "K"
  - "A"
  - "Z"
respuesta: "K"

explicacion: |
  Superar el tope de la categoría K obliga a pasar al régimen general.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A medida que sube la categoría (más cerca de la K), la cuota mensual a pagar es más cara."

explicacion: |
  Cada componente de la cuota sube junto con la categoría.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué parámetros determinan la categoría de un monotributista?"
tipo: mc
opciones_explicitas:
  - "Facturación anual, superficie afectada, energía consumida y alquileres devengados, entre otros"
  - "Sólo la edad del monotributista"
  - "Sólo si tiene empleados en relación de dependencia"
respuesta: "Facturación anual, superficie afectada, energía consumida y alquileres devengados, entre otros"

explicacion: |
  Son varios parámetros a la vez, no sólo la facturación.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un monotributista supera el tope de la categoría K, tiene que salir del monotributo e inscribirse en el régimen general."

explicacion: |
  La K es la categoría techo: no hay una categoría más alta dentro del
  monotributo.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué tres componentes integra la cuota mensual del monotributo?"
tipo: mc
opciones_explicitas:
  - "Impuesto integrado, aporte jubilatorio y aporte a obra social"
  - "Sólo el impuesto integrado"
  - "IVA, Ganancias y Bienes Personales por separado"
respuesta: "Impuesto integrado, aporte jubilatorio y aporte a obra social"

explicacion: |
  Es un pago único que empaqueta los tres conceptos.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Parte de la cuota del monotributo es un aporte jubilatorio, el mismo tipo de aporte que hace un empleado en relación de dependencia."

explicacion: |
  Un monotributista también construye derechos jubilatorios, sólo que
  con un monto fijo en vez de un porcentaje del sueldo.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Parte de la cuota del monotributo da acceso a una obra social."

explicacion: |
  Igual que el aporte del 3% de un empleado, sólo que empaquetado dentro
  de la cuota fija.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El \"impuesto integrado\" de la cuota del monotributo reemplaza tener que liquidar IVA y Ganancias por separado."

explicacion: |
  Es la simplificación central del régimen: un solo pago en vez de varios
  impuestos separados.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

respuesta: 6
tipo: input
tolerancia_abs: 0

enunciado: "¿Cada cuántos meses hay que revisar (recategorizar) la categoría del monotributo?"

explicacion: |
  Dos veces al año: cada 6 meses.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al recategorizarse, se mira la facturación (y otros parámetros) de los últimos 12 meses, no sólo del último semestre."

explicacion: |
  La ventana de revisión son los últimos 12 meses completos, aunque la
  recategorización se haga cada 6 meses.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué es el monotributo social?"
tipo: mc
opciones_explicitas:
  - "Una categoría especial, más económica, para actividades de baja escala en situación de vulnerabilidad económica"
  - "Un monotributo exclusivo para empleados públicos"
  - "Una categoría más cara que la K"
respuesta: "Una categoría especial, más económica, para actividades de baja escala en situación de vulnerabilidad económica"

explicacion: |
  Tiene requisitos y beneficios distintos al monotributo general.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un monotributista paga una cuota fija mensual, en vez de tener un porcentaje descontado de un sueldo bruto como un empleado en relación de dependencia."

explicacion: |
  Son dos esquemas distintos: descuento variable sobre el bruto (empleado)
  vs. cuota fija según categoría (monotributista).
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo"]

enunciado: "¿Cuál definición corresponde a la categoría del monotributo?"
tipo: mc
opciones_explicitas:
  - "El nivel (de la A a la K) que determina cuánto se paga de cuota, según parámetros como la facturación"
  - "El tipo de actividad económica únicamente, sin relación con lo que se paga"
  - "Un número aleatorio que asigna AFIP"
respuesta: "El nivel (de la A a la K) que determina cuánto se paga de cuota, según parámetros como la facturación"

explicacion: |
  Es directamente la variable que fija cuánto se termina pagando de
  cuota.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres componentes de la cuota (impuesto integrado, aporte jubilatorio, obra social) suben todos junto con la categoría, no sólo uno de ellos."

explicacion: |
  Es un aumento conjunto de los tres, no de uno solo.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Subir de categoría significa pagar una cuota más cara, no más barata."

explicacion: |
  Refleja que la actividad creció (más facturación, más consumo
  eléctrico, etc.).
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "comparacion"]

enunciado: "Entre la categoría D y la categoría H del monotributo, ¿cuál paga una cuota más cara?"
tipo: mc
opciones_explicitas:
  - "H"
  - "D"
respuesta: "H"

explicacion: |
  H está más cerca de la K (la más alta): representa más actividad, y
  por lo tanto una cuota más cara.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El monotributo se paga estando inscripto ante AFIP (el organismo de recaudación nacional)."

explicacion: |
  Es el mismo organismo que administra el régimen general de impuestos.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "avanzado"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un monotributista no se recategoriza cuando corresponde, puede quedar pagando una categoría que ya no refleja su actividad real, con las consecuencias que eso implique."

explicacion: |
  La recategorización no es sólo un trámite formal: mantiene alineada la
  cuota con la actividad real.
```

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El monotributo simplifica varios pagos (impuesto, jubilación, obra social) en una única cuota mensual fija, definida por la categoría de cada contribuyente."

explicacion: |
  Es la idea central de todo el tema: categoría y cuota son dos caras de
  la misma moneda.
```

