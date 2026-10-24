# Economía — Libro diario y mayor (cuestionario, 21 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Diario: cronológico. Mayor: por
> cuenta (saldo = total Debe - total Haber, en una cuenta de Activo).

---

### 1 — Qué es el libro diario

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el Libro Diario?"
tipo: mc
opciones_explicitas:
  - "El registro de todos los asientos contables, en el orden cronológico en que ocurrieron"
  - "Un resumen de las ganancias del último mes"
  - "El registro de cada cuenta por separado"
respuesta: "El registro de todos los asientos contables, en el orden cronológico en que ocurrieron"

explicacion: |
  Es la fuente original y cronológica de todos los movimientos.
```

### 2 — Qué es el libro mayor

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el Libro Mayor?"
tipo: mc
opciones_explicitas:
  - "La misma información del Diario, reorganizada por cuenta, con una hoja para cada una"
  - "Un libro distinto que registra información que no está en el Diario"
  - "El registro exclusivo de las cuentas de Pasivo"
respuesta: "La misma información del Diario, reorganizada por cuenta, con una hoja para cada una"

explicacion: |
  No agrega información nueva: reorganiza lo que ya está en el Diario.
```

### 3 — El diario organiza por fecha

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario organiza los asientos en orden cronológico, por fecha."

explicacion: |
  Es su criterio de organización principal.
```

### 4 — El mayor organiza por cuenta

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor organiza los movimientos por cuenta, no por fecha."

explicacion: |
  Cada cuenta acumula todos sus movimientos, sin importar cuándo
  ocurrieron.
```

### 5 — El mayor no es una fuente nueva

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor no es una fuente de información nueva: todo lo que aparece ahí ya estaba registrado en el Libro Diario."

explicacion: |
  Es un traslado y una reorganización, no un registro independiente.
```

### 6 — Cómo se llama el traslado del diario al mayor

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Cómo se llama, tradicionalmente, el proceso de trasladar cada línea del Diario a la cuenta correspondiente del Mayor?"
tipo: mc
opciones_explicitas:
  - "Pasar al mayor (o mayorización)"
  - "Cerrar el balance"
  - "Auditar la cuenta"
respuesta: "Pasar al mayor (o mayorización)"

explicacion: |
  Es el nombre técnico de ese traslado.
```

### 7 — Cada cuenta tiene su propia hoja

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el Libro Mayor, cada cuenta (Caja, Mercadería, etc.) tiene su propia hoja, donde se acumulan todos sus movimientos."

explicacion: |
  Es lo que permite calcular el saldo de una cuenta puntual sin revisar
  todo el resto.
```

### 8 — Qué es la cuenta T

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es la \"cuenta T\"?"
tipo: mc
opciones_explicitas:
  - "Una forma visual simple de representar una cuenta, con el Debe a la izquierda y el Haber a la derecha"
  - "Una cuenta especial reservada para impuestos"
  - "El nombre de la primera cuenta de cualquier plan contable"
respuesta: "Una forma visual simple de representar una cuenta, con el Debe a la izquierda y el Haber a la derecha"

explicacion: |
  El nombre viene de la forma de letra \"T\" que arma la línea vertical
  (que separa Debe y Haber) con la horizontal (debajo del nombre de la
  cuenta).
```

### 9 — El debe a la izquierda, el haber a la derecha

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una cuenta T, el Debe se anota a la izquierda y el Haber a la derecha."

explicacion: |
  Es la misma convención de columnas ya vista en el tema de Debe y
  Haber.
```

### 10 — El diario sirve para reconstruir la historia

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario sirve para reconstruir la historia completa y en orden de lo que le pasó a la empresa, útil por ejemplo para una auditoría."

explicacion: |
  Su organización cronológica lo hace ideal para reconstruir secuencias
  de hechos.
```

### 11 — El mayor sirve para saber el estado actual

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor sirve para saber el saldo actual de una cuenta puntual de un vistazo, sin tener que revisar asiento por asiento."

explicacion: |
  Es su ventaja frente al Diario para esa pregunta puntual.
```

### 12 — Calcular el saldo de Caja con dos movimientos

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000

respuesta: debe_caja - haber_caja
tipo: input
tolerancia_abs: 0

enunciado: "En la hoja del Mayor de la cuenta \"Caja\" (de Activo), el total acumulado en el Debe es ${debe_caja}, y en el Haber ${haber_caja}. ¿Cuál es el saldo actual de Caja?"

explicacion: |
  En una cuenta de Activo, el saldo es el total del Debe menos el total
  del Haber.
```

### 13 — Calcular el saldo con tres movimientos

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  debe_1: random(50, 200) * 1000
  debe_2: random(50, 200) * 1000
  haber_1: random(50, 150) * 1000

respuesta: debe_1 + debe_2 - haber_1
tipo: input
tolerancia_abs: 0

enunciado: "La cuenta \"Caja\" tuvo tres movimientos: dos entradas al Debe de ${debe_1} y ${debe_2}, y una salida al Haber de ${haber_1}. ¿Cuál es el saldo final de Caja?"

pasos:
  - "Total Debe: {debe_1} + {debe_2} = {debe_1 + debe_2}"
  - "Saldo: {debe_1 + debe_2} - {haber_1}"

explicacion: |
  Se suman todos los movimientos del Debe, todos los del Haber, y se
  restan.
```

### 14 — Consultar el diario para reconstruir un día

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Para saber exactamente qué movimientos económicos ocurrieron un día puntual, ¿qué libro conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Libro Diario"
  - "El Libro Mayor"
  - "Ninguno de los dos tiene esa información"
respuesta: "El Libro Diario"

explicacion: |
  Está organizado cronológicamente, así que es el indicado para
  reconstruir qué pasó en una fecha concreta.
```

### 15 — Consultar el mayor para saber el saldo actual

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Para saber cuánto dinero hay en Caja hoy, sin revisar movimiento por movimiento, ¿qué libro conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Libro Mayor"
  - "El Libro Diario"
  - "Ninguno de los dos tiene esa información"
respuesta: "El Libro Mayor"

explicacion: |
  La hoja de Caja en el Mayor ya tiene acumulado el saldo actual.
```

### 16 — Ordenar el proceso contable

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del proceso contable en el orden en que ocurren."
opciones_explicitas:
  - "Se calculan los saldos de cada cuenta en el Mayor"
  - "Se registra el movimiento como asiento en el Libro Diario"
  - "Se ocurre un movimiento económico en la empresa"
respuesta_orden: ["Se ocurre un movimiento económico en la empresa", "Se registra el movimiento como asiento en el Libro Diario", "Se calculan los saldos de cada cuenta en el Mayor"]

explicacion: |
  Primero el hecho económico, después el registro cronológico, y
  finalmente la reorganización por cuenta.
```

### 17 — Verificar un saldo calculado (con error a veces)

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "verificacion"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000
  correcto: debe_caja - haber_caja
  error: uno_de([0, 0, 0, 50000, -50000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1000)
tipo: vf

enunciado: "¿Está bien calculado esto? Cuenta Caja con ${debe_caja} en el Debe y ${haber_caja} en el Haber, saldo informado: ${mostrado}."

explicacion: |
  Se vuelve a restar el Haber del Debe y se compara con el valor
  informado.
```

### 18 — Completar el saldo

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000
  saldo: debe_caja - haber_caja

tipo: completar
enunciado: "La cuenta Caja tiene ${debe_caja} en el Debe y ${haber_caja} en el Haber. Completá: ___ (saldo) = {debe_caja} - {haber_caja}."
respuestas_validas:
  - saldo

explicacion: |
  Es la aplicación directa de la fórmula de saldo de una cuenta de
  Activo.
```

### 19 — El balance parte de los saldos del mayor

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para armar el balance final de una empresa, se parte de los saldos que ya están calculados cuenta por cuenta en el Libro Mayor."

explicacion: |
  Es el paso siguiente en el proceso contable (estados contables), que
  no se construye en este tema puntual.
```

### 20 — Los dos libros muestran la misma información

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario y el Libro Mayor muestran, en el fondo, la misma información contable, organizada de dos formas distintas y complementarias."

explicacion: |
  Uno por fecha, el otro por cuenta — ninguno reemplaza al otro.
```

### 21 — Libro diario y mayor (cierre)

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario registra los asientos en orden cronológico; el Libro Mayor reorganiza esos mismos asientos por cuenta, para poder calcular el saldo actual de cada una."

explicacion: |
  Es la idea central de todo el tema.
```
