# Educación Física — Frecuencia cardíaca en reposo y su promedio (cuestionario, 20 preguntas VBLang)

> Tema: `EF1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la frecuencia cardíaca en reposo

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["fcr", "vocabulario"]

enunciado: "¿Qué es la frecuencia cardíaca en reposo (FCR)?"
tipo: mc
opciones_explicitas:
  - "La cantidad de latidos del corazón por minuto, medida cuando el cuerpo está completamente en reposo"
  - "La cantidad máxima de latidos que puede alcanzar el corazón durante un ejercicio intenso"
  - "La presión arterial medida en reposo"
respuesta: "La cantidad de latidos del corazón por minuto, medida cuando el cuerpo está completamente en reposo"

explicacion: |
  Se mide idealmente recién despierto, antes de levantarse de la cama.
```

### 2 — Problema: calcular lpm desde 15 segundos

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr", "problema"]

variables:
  pulsaciones_15s: uno_de([15, 17, 18, 20])

respuesta: pulsaciones_15s * 4
tipo: input
unidad: "lpm"

enunciado: "Contando el pulso durante 15 segundos, se registraron {pulsaciones_15s} latidos. ¿Cuál es la frecuencia cardíaca en latidos por minuto?"

pasos:
  - "FCR = {pulsaciones_15s} × 4 = {pulsaciones_15s * 4} lpm"

explicacion: |
  Se escala el conteo de 15 segundos a un minuto completo (×4).
```

### 3 — Problema: calcular lpm desde 30 segundos

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr", "problema"]

variables:
  pulsaciones_30s: uno_de([30, 34, 36])

respuesta: pulsaciones_30s * 2
tipo: input
unidad: "lpm"

enunciado: "Contando el pulso durante 30 segundos, se registraron {pulsaciones_30s} latidos. ¿Cuál es la frecuencia cardíaca en latidos por minuto?"

pasos:
  - "FCR = {pulsaciones_30s} × 2 = {pulsaciones_30s * 2} lpm"

explicacion: |
  Se escala el conteo de 30 segundos a un minuto completo (×2).
```

### 4 — Rango típico normal

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["fcr", "vocabulario"]

enunciado: "¿Cuál es el rango típico considerado normal de frecuencia cardíaca en reposo para un adulto?"
tipo: mc
opciones_explicitas:
  - "Entre 60 y 100 latidos por minuto"
  - "Entre 100 y 150 latidos por minuto"
  - "Entre 20 y 40 latidos por minuto"
respuesta: "Entre 60 y 100 latidos por minuto"

explicacion: |
  Por debajo de 60 se llama bradicardia; por encima de 100, taquicardia.
```

### 5 — Bradicardia en atletas entrenados

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr", "aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una frecuencia cardíaca en reposo por debajo de 60 lpm (bradicardia según el rango general) no siempre es un problema de salud — en atletas de resistencia bien entrenados es común y no indica ninguna afección."

explicacion: |
  Un corazón entrenado bombea más sangre por latido, así que necesita
  latir menos veces para la misma circulación.
```

### 6 — Problema: calcular el promedio de varias mediciones

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["promedio", "problema"]

variables:
  dia1: uno_de([62, 64])
  dia2: uno_de([65, 66])
  dia3: uno_de([63, 67])

respuesta: redondear(promedio([dia1, dia2, dia3]), 1)
tipo: input
tolerancia_abs: 0.1
unidad: "lpm"

enunciado: "Se midió la FCR en 3 días distintos: {dia1}, {dia2} y {dia3} lpm. ¿Cuál es el promedio de esas 3 mediciones?"

pasos:
  - "Promedio = ({dia1}+{dia2}+{dia3}) / 3 = {redondear(promedio([dia1, dia2, dia3]), 1)} lpm"

explicacion: |
  El promedio de varios días da una estimación más confiable que
  cualquiera de las mediciones individuales.
```

### 7 — Promediar da una estimación más confiable

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["promedio"]

respuesta: verdadero
tipo: vf

enunciado: "Promediar la FCR de varios días distintos da una estimación más confiable de la FCR real de una persona que confiar en una sola medición aislada."

explicacion: |
  Una sola medición puede estar afectada por factores puntuales
  (nervios, cafeína, mala hora del día).
```

### 8 — Por qué una sola medición puede engañar

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué una única medición de FCR, tomada un solo día, puede no representar bien la FCR habitual de una persona?"
tipo: mc
opciones_explicitas:
  - "Porque factores puntuales (nervios, cafeína reciente, mala noche de sueño) pueden alterar esa medición en particular, sin reflejar la condición habitual"
  - "Porque la frecuencia cardíaca siempre es exactamente la misma en cualquier medición"
  - "Porque medir el pulso siempre da un resultado aleatorio, sin ninguna relación con la salud real"
respuesta: "Porque factores puntuales (nervios, cafeína reciente, mala noche de sueño) pueden alterar esa medición en particular, sin reflejar la condición habitual"

explicacion: |
  Es la misma razón por la que conviene promediar varias mediciones
  en vez de confiar en una sola.
```

### 9 — FCR baja indica mejor condición cardiovascular

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr", "aplicacion"]

enunciado: "¿Por qué una FCR más baja suele indicar mejor condición cardiovascular?"
tipo: mc
opciones_explicitas:
  - "Porque un corazón entrenado bombea más sangre por cada latido (mayor volumen sistólico), así que necesita latir menos veces para mover la misma cantidad de sangre"
  - "Porque un corazón que late menos veces se cansa menos, sin ninguna relación con su eficiencia"
  - "Una FCR más baja no tiene ninguna relación con la condición física"
respuesta: "Porque un corazón entrenado bombea más sangre por cada latido (mayor volumen sistólico), así que necesita latir menos veces para mover la misma cantidad de sangre"

explicacion: |
  Es la razón fisiológica detrás de la FCR baja de los atletas de
  resistencia.
```

### 10 — Problema: comparar FCR antes y después de entrenar

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "avanzado"
  tags: ["fcr", "problema"]

variables:
  promedio_antes: uno_de([72, 75])
  promedio_despues: uno_de([64, 66])

respuesta: promedio_antes - promedio_despues
tipo: input
unidad: "lpm"

enunciado: "El promedio de FCR de una persona era {promedio_antes} lpm antes de empezar un plan de entrenamiento, y {promedio_despues} lpm después de varios meses. ¿Cuánto bajó el promedio?"

pasos:
  - "Diferencia = {promedio_antes} − {promedio_despues} = {promedio_antes - promedio_despues} lpm"

explicacion: |
  Una baja sostenida en el promedio de FCR, con el mismo nivel de
  reposo, suele indicar mejora de la condición cardiovascular.
```

### 11 — Comparar promedios mide progreso real

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar el promedio de FCR de una semana de entrenamiento contra el de semanas anteriores es una forma directa de medir el progreso cardiovascular a lo largo del tiempo."

explicacion: |
  Es más confiable que comparar dos mediciones sueltas de días
  distintos.
```

### 12 — Problema: identificar una medición atípica

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "avanzado"
  tags: ["mediana", "problema"]

variables:
  dia1: 62
  dia2: 64
  dia3: 63
  dia_estresado: 95

respuesta: mediana([dia1, dia2, dia3, dia_estresado])
tipo: input
unidad: "lpm"

enunciado: "FCR de 4 días: {dia1}, {dia2}, {dia3} y {dia_estresado} (este último, un día con mucho estrés previo a la medición). ¿Cuál es la MEDIANA de estas 4 mediciones?"

explicacion: |
  La mediana no se deja arrastrar por el valor atípico del día
  estresado, a diferencia de la media.
```

### 13 — Por qué usar mediana con un valor atípico

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "avanzado"
  tags: ["mediana", "aplicacion"]

enunciado: "Si una de las mediciones de FCR de la semana quedó muy alta por un día de mucho estrés, ¿por qué podría convenir usar la mediana en vez de la media para resumir esa semana?"
tipo: mc
opciones_explicitas:
  - "Porque la mediana no se deja arrastrar por un valor atípico, mientras que la media sí — sobrestimaría la FCR habitual de esa persona"
  - "Porque la mediana siempre da un número más bajo que la media"
  - "No hay ninguna diferencia práctica entre usar mediana o media en este caso"
respuesta: "Porque la mediana no se deja arrastrar por un valor atípico, mientras que la media sí — sobrestimaría la FCR habitual de esa persona"

explicacion: |
  Es la misma lógica de `../../matematica/cual-miente-y-cuando/`,
  aplicada a mediciones fisiológicas.
```

### 14 — Problema: calcular el promedio con 5 mediciones

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "avanzado"
  tags: ["promedio", "problema"]

variables:
  d1: uno_de([58, 60])
  d2: uno_de([59, 61])
  d3: uno_de([57, 62])
  d4: uno_de([60, 63])
  d5: uno_de([58, 59])

respuesta: redondear(promedio([d1, d2, d3, d4, d5]), 1)
tipo: input
tolerancia_abs: 0.1
unidad: "lpm"

enunciado: "FCR medida en 5 días: {d1}, {d2}, {d3}, {d4}, {d5} lpm. ¿Cuál es el promedio semanal?"

pasos:
  - "Promedio = ({d1}+{d2}+{d3}+{d4}+{d5}) / 5 = {redondear(promedio([d1, d2, d3, d4, d5]), 1)} lpm"

explicacion: |
  Cuantas más mediciones se promedien, más estable queda la
  estimación de la FCR habitual.
```

### 15 — Aplicación: mejor momento del día para medir

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["fcr", "aplicacion"]

enunciado: "¿Por qué se recomienda medir la FCR recién despierto, antes de levantarse de la cama, en vez de en cualquier otro momento del día?"
tipo: mc
opciones_explicitas:
  - "Porque es el momento en el que el cuerpo está más cerca de un reposo total, sin la influencia de actividad física, estrés del día o estimulantes como la cafeína"
  - "Porque la frecuencia cardíaca es imposible de medir en cualquier otro momento"
  - "No hay ninguna razón real para preferir ese momento del día"
respuesta: "Porque es el momento en el que el cuerpo está más cerca de un reposo total, sin la influencia de actividad física, estrés del día o estimulantes como la cafeína"

explicacion: |
  Medir siempre en condiciones parecidas hace que las mediciones sean
  más comparables entre sí.
```

### 16 — Taquicardia en reposo

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["fcr", "vocabulario"]

enunciado: "¿Qué es la taquicardia, en el contexto de la frecuencia cardíaca en reposo?"
tipo: mc
opciones_explicitas:
  - "Una FCR por encima de 100 latidos por minuto"
  - "Una FCR por debajo de 60 latidos por minuto"
  - "La frecuencia cardíaca máxima alcanzable durante ejercicio intenso"
respuesta: "Una FCR por encima de 100 latidos por minuto"

explicacion: |
  Es el extremo opuesto de la bradicardia dentro del rango de
  referencia general.
```

### 17 — Problema: comparar la FCR promedio de dos personas

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr", "problema"]

variables:
  promedio_atleta: uno_de([48, 52])
  promedio_sedentario: uno_de([78, 82])

respuesta: promedio_atleta < promedio_sedentario
tipo: vf

enunciado: "Una persona atleta tiene FCR promedio de {promedio_atleta} lpm; una persona sedentaria tiene {promedio_sedentario} lpm. ¿La FCR de la persona atleta es MENOR?"

explicacion: |
  Es consistente con la relación entre entrenamiento cardiovascular y
  FCR más baja.
```

### 18 — La FCR varía naturalmente día a día

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "intermedio"
  tags: ["fcr"]

respuesta: verdadero
tipo: vf

enunciado: "Es normal que la FCR varíe algunos latidos por minuto de un día a otro, incluso en la misma persona y en las mismas condiciones de medición — por eso conviene mirar el promedio a lo largo de varios días, no una sola medición."

explicacion: |
  Es exactamente la razón por la que este módulo insiste en promediar
  varias mediciones.
```

### 19 — Aplicación: seguimiento de un plan de entrenamiento

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un profesor de Educación Física quiere que sus alumnos midan su progreso cardiovascular a lo largo de un trimestre. ¿Qué metodología conviene usar?"
tipo: mc
opciones_explicitas:
  - "Medir la FCR varios días por semana, calcular el promedio semanal, y comparar esos promedios semana a semana a lo largo del trimestre"
  - "Medir la FCR una sola vez, al principio del trimestre, y no volver a medirla"
  - "Medir la FCR sólo durante o inmediatamente después del ejercicio, nunca en reposo"
respuesta: "Medir la FCR varios días por semana, calcular el promedio semanal, y comparar esos promedios semana a semana a lo largo del trimestre"

explicacion: |
  Es la aplicación práctica de todo lo visto en este módulo a un
  seguimiento real de varios meses.
```

### 20 — Cierre: para qué sirve promediar la FCR

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_reposo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular el promedio de varias mediciones de frecuencia cardíaca en reposo, en vez de confiar en una sola medición?"
tipo: mc
opciones_explicitas:
  - "Para obtener una estimación más confiable de la FCR habitual de una persona, y poder hacer un seguimiento real de su condición cardiovascular a lo largo del tiempo"
  - "El promedio no aporta ninguna ventaja real sobre una sola medición"
  - "Sólo sirve para deportistas de alto rendimiento"
respuesta: "Para obtener una estimación más confiable de la FCR habitual de una persona, y poder hacer un seguimiento real de su condición cardiovascular a lo largo del tiempo"

explicacion: |
  Es la aplicación directa de `../../matematica/media-mediana-y-moda/`
  a fisiología del ejercicio.
```
