# Economía — El sistema jubilatorio (cuestionario, 20 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Contenido conceptual/cívico —
> menos cálculo que el resto de la carpeta, más comprensión del sistema.

---

### 1 — Qué es jubilarse

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

### 2 — Qué es el sistema de reparto

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

### 3 — El reparto NO es una cuenta individual

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

### 4 — Los aportes de hoy pagan las jubilaciones de hoy

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

### 5 — Edad mínima jubilatoria para varones

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

### 6 — Edad mínima jubilatoria para mujeres

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

### 7 — Años de aportes requeridos

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

### 8 — Hacen falta las dos condiciones a la vez

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

### 9 — Quién administra el sistema

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

### 10 — Existen alternativas para quien no completó los 30 años

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

### 11 — Problema: cuántos años faltan para la edad jubilatoria

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

### 12 — Problema: cuántos años de aportes faltan

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

### 13 — El sistema de reparto es un pacto entre generaciones

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

### 14 — ANSES gestiona otras prestaciones también

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

### 15 — Elegir la definición correcta de sistema de reparto

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

### 16 — Existen regímenes especiales para ciertas actividades

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

### 17 — Las mujeres se jubilan antes que los varones (régimen general)

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

### 18 — Problema: a qué edad empezó a aportar

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

### 19 — El haber jubilatorio depende de los aportes hechos

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

### 20 — Qué es el sistema jubilatorio (cierre)

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
