# Economía — La obra social (cuestionario, 20 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Contenido conceptual/cívico —
> menos cálculo que el resto de la carpeta, más comprensión del sistema.

---

### 1 — Qué es una obra social

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

### 2 — Cómo se financia una obra social

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

### 3 — Qué es el PMO

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

### 4 — Todas las obras sociales cubren el PMO

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

### 5 — Las obras sociales pueden cubrir más que el PMO

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

### 6 — Qué es la opción de cambio

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

### 7 — Se puede cambiar de obra social bajo ciertas condiciones

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

### 8 — Diferencia entre obra social y prepaga

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

### 9 — Una prepaga no depende de tener trabajo en blanco

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

### 10 — PAMI es la obra social de los jubilados

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

### 11 — PAMI también recibe aporte de los trabajadores activos

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

### 12 — Cada actividad tiene, en general, su propia obra social

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

### 13 — Repaso: el aporte de obra social

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

### 14 — Se puede derivar el aporte a una prepaga

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

### 15 — Elegir la definición correcta del PMO

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

### 16 — La obra social cubre también a la familia

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

### 17 — Contribución patronal a la obra social

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

### 18 — El PMO no depende de la obra social elegida

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

### 19 — Obra social y prepaga pueden combinarse

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

### 20 — Qué es la obra social (cierre)

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
