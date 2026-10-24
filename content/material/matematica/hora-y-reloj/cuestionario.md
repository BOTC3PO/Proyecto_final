# Matemática — Hora y reloj (cuestionario, 26 preguntas VBLang)

> Tema: `N17`. Ver `teoria.md` en esta misma carpeta. Los horarios se
> describen en palabras ("8 horas y 45 minutos") en vez de formato
> "8:45", porque el DSL no tiene una forma de mostrar minutos con cero
> adelante (05 en vez de 5) — así se evita mostrar un horario mal escrito
> como "8:5".

---

### 1 — Minutos en una cantidad de horas

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "conversion"]

variables:
  horas: random(2, 10)

respuesta: horas * 60
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos minutos hay en {horas} horas?"

explicacion: |
  1 hora son 60 minutos: se multiplica la cantidad de horas por 60.
```

### 2 — Segundos en una cantidad de minutos

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "conversion"]

variables:
  minutos: random(2, 20)

respuesta: minutos * 60
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos segundos hay en {minutos} minutos?"

explicacion: |
  1 minuto son 60 segundos: se multiplica la cantidad de minutos por 60.
```

### 3 — De minutos totales a horas completas

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "conversion"]

variables:
  horas: random(1, 6)
  minutos_extra: random(1, 59)
  total: horas * 60 + minutos_extra

respuesta: horas
tipo: input
tolerancia_abs: 0

enunciado: "{total} minutos, ¿cuántas horas COMPLETAS son?"

pasos:
  - "{total} ÷ 60 = {horas} horas, con {minutos_extra} minutos sobrando"

explicacion: |
  Se divide por 60 y se toma la parte entera del cociente.
```

### 4 — De minutos totales, los minutos que sobran

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "conversion"]

variables:
  horas: random(1, 6)
  minutos_extra: random(1, 59)
  total: horas * 60 + minutos_extra

respuesta: minutos_extra
tipo: input
tolerancia_abs: 0

enunciado: "{total} minutos son {horas} horas, ¿y cuántos minutos más?"

explicacion: |
  Los minutos que sobran son el resto de dividir el total por 60.
```

### 5 — Formato 12 horas (PM) a formato 24 horas

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "formato"]

variables:
  hora_12: random(1, 11)

respuesta: hora_12 + 12
tipo: input
tolerancia_abs: 0

enunciado: "Las {hora_12} PM, en formato 24 horas, ¿qué hora son?"

explicacion: |
  Para pasar de PM a formato 24 horas (salvo el 12 del mediodía), se
  suma 12.
```

### 6 — Formato 24 horas a formato 12 horas (PM)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "formato"]

variables:
  hora_24: random(13, 23)

respuesta: hora_24 - 12
tipo: input
tolerancia_abs: 0

enunciado: "Las {hora_24} en formato 24 horas, ¿qué hora son en formato 12 horas (PM)?"

explicacion: |
  Para pasar de formato 24 horas a PM, se resta 12.
```

### 7 — El mediodía en formato 24 horas

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "formato"]

respuesta: 12
tipo: input
tolerancia_abs: 0

enunciado: "El mediodía (12 PM), en formato 24 horas, ¿qué hora es?"

explicacion: |
  Es el único caso PM que no cambia al pasar a formato 24 horas.
```

### 8 — Duración entre dos horarios (mismo minuto de inicio)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "duracion"]

variables:
  hora_inicio: random(1, 10)
  minutos: random(0, 59)
  horas_de_diferencia: random(1, 5)
  hora_fin: hora_inicio + horas_de_diferencia

respuesta: horas_de_diferencia
tipo: input
tolerancia_abs: 0

enunciado: "Entre las {hora_inicio} horas y {minutos} minutos, y las {hora_fin} horas y {minutos} minutos, ¿cuántas horas completas pasaron?"

explicacion: |
  Con el mismo minuto en los dos horarios, alcanza con restar las horas.
```

### 9 — Duración entre dos horarios (con préstamo en los minutos)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "avanzado"
  tags: ["hora_y_reloj", "duracion"]

variables:
  min_inicio: random(30, 50)
  min_fin: random(0, min_inicio - 1)
  hora_inicio: random(1, 8)
  hora_fin: hora_inicio + random(1, 4)
  total_inicio: hora_inicio * 60 + min_inicio
  total_fin: hora_fin * 60 + min_fin

respuesta: total_fin - total_inicio
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos minutos pasaron entre las {hora_inicio} horas y {min_inicio} minutos, y las {hora_fin} horas y {min_fin} minutos?"

pasos:
  - "Todo en minutos: {total_inicio} y {total_fin}. {total_fin} - {total_inicio} = {total_fin - total_inicio}"

explicacion: |
  Cuando los minutos de llegada son menos que los de salida, conviene
  pasar todo a minutos totales antes de restar, en vez de restar por
  columnas.
```

### 10 — Sumar una duración a un horario (sin llevar)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "duracion"]

variables:
  hora_inicio: random(1, 8)
  min_inicio: random(0, 29)
  min_agregados: random(1, 29)

respuesta: min_inicio + min_agregados
tipo: input
tolerancia_abs: 0

enunciado: "Empezás algo a las {hora_inicio} horas y {min_inicio} minutos, y dura {min_agregados} minutos más. ¿A los cuántos minutos termina (sin cambiar de hora)?"

explicacion: |
  Sumando los minutos sin pasar de 60, la hora no cambia.
```

### 11 — Sumar una duración a un horario (con llevada a la hora)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "avanzado"
  tags: ["hora_y_reloj", "duracion"]

variables:
  hora_inicio: random(1, 8)
  min_inicio: random(30, 55)
  min_agregados: random(20, 50)
  total: min_inicio + min_agregados

respuesta: hora_inicio + floor(total / 60)
tipo: input
tolerancia_abs: 0

enunciado: "Empezás algo a las {hora_inicio} horas y {min_inicio} minutos, y dura {min_agregados} minutos más. ¿A qué hora completa cae el final (sin contar los minutos)?"

pasos:
  - "{min_inicio} + {min_agregados} = {total} minutos, que son {floor(total / 60)} hora(s) más: {hora_inicio} + {floor(total / 60)} = {hora_inicio + floor(total / 60)}"

explicacion: |
  Cuando los minutos suman 60 o más, se "lleva" 1 a la hora, igual que
  llevar una decena en una suma común, pero acá llevando de a 60.
```

### 12 — 1 hora son 60 minutos (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "1 hora equivale a 60 minutos."

explicacion: |
  El tiempo se mide en base 60, no en base 10.
```

### 13 — 1 minuto son 60 segundos (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "1 minuto equivale a 60 segundos."

explicacion: |
  Mismo sistema sexagesimal que horas y minutos.
```

### 14 — Elegir el resultado correcto

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj"]

variables:
  horas: random(2, 10)
  correcto: horas * 60

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - horas * 100
  - horas + 60

enunciado: "¿Cuántos minutos hay en {horas} horas?"

explicacion: |
  Las otras opciones confunden la base 60 con la base 10 (multiplicar por
  100), o mezclan mal las unidades.
```

### 15 — Verificar una conversión (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "verificacion"]

variables:
  horas: random(1, 6)
  minutos_extra: random(1, 59)
  total: horas * 60 + minutos_extra
  error: uno_de([0, 0, 0, 1, -1])
  horas_mostradas: horas + error

respuesta: (horas_mostradas == horas)
tipo: vf

enunciado: "¿Está bien calculado esto? {total} minutos son {horas_mostradas} horas completas (y algunos minutos más)."

explicacion: |
  Se verifica dividiendo el total por 60 y comparando la parte entera.
```

### 16 — Completar los minutos que faltan

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj"]

variables:
  min_inicio: random(0, 40)
  min_agregados: random(5, 19)

tipo: completar
enunciado: "{min_inicio} minutos más ___ minutos da {min_inicio + min_agregados} minutos. Completá cuántos minutos se agregaron."
respuestas_validas:
  - min_agregados

explicacion: |
  Se despeja restando: {min_inicio + min_agregados} - {min_inicio}.
```

### 17 — Problema: duración de una película

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "problema"]

variables:
  total_minutos: random(80, 179)

respuesta: floor(total_minutos / 60)
tipo: input
tolerancia_abs: 0

enunciado: "Una película dura {total_minutos} minutos. ¿Cuántas horas COMPLETAS dura?"

explicacion: |
  Se divide por 60 y se toma la parte entera.
```

### 18 — Problema: hora de llegada de un viaje

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "avanzado"
  tags: ["hora_y_reloj", "problema"]

variables:
  hora_salida: random(6, 10)
  min_salida: random(30, 55)
  duracion_min: random(20, 50)
  total: min_salida + duracion_min

respuesta: hora_salida + floor(total / 60)
tipo: input
tolerancia_abs: 0

enunciado: "Un colectivo sale a las {hora_salida} horas y {min_salida} minutos, y el viaje dura {duracion_min} minutos. ¿A qué hora completa llega (sin contar los minutos)?"

explicacion: |
  Sumar la duración al horario de salida, llevando a la hora si los
  minutos pasan de 60.
```

### 19 — Problema: cuánto falta para una hora determinada

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "problema"]

variables:
  min_actual: random(1, 59)

respuesta: 60 - min_actual
tipo: input
tolerancia_abs: 0

enunciado: "Son las {min_actual} minutos de la hora en curso. ¿Cuántos minutos faltan para que se cumpla la hora completa (el próximo :00)?"

explicacion: |
  Faltan 60 menos los minutos que ya pasaron.
```

### 20 — Ordenar horarios

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "orden"]

tipo: ordenar
enunciado: "Ordená estos horarios del más temprano al más tarde."
opciones_explicitas:
  - "9 horas y 45 minutos"
  - "9 horas y 5 minutos"
  - "10 horas y 15 minutos"
  - "9 horas y 30 minutos"
respuesta_orden: ["9 horas y 5 minutos", "9 horas y 30 minutos", "9 horas y 45 minutos", "10 horas y 15 minutos"]

explicacion: |
  Primero se compara la hora; si empata, se compara el minuto.
```

### 21 — Comparar duraciones

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "comparacion"]

variables:
  min1: random(30, 90)
  min2: random(30, 90)

restricciones:
  - min1 != min2

respuesta: (min1 > min2)
tipo: vf

enunciado: "¿Dura más una actividad de {min1} minutos que una de {min2} minutos?"

explicacion: |
  Se comparan directamente los minutos totales.
```

### 22 — Restar horarios pidiendo prestado (concepto)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al restar horarios, si los minutos de llegada son menos que los de salida, se le pide prestada 1 hora (60 minutos) a la columna de las horas."

explicacion: |
  Es el mismo mecanismo que pedir prestada una decena en una resta común,
  pero acá se presta de a 60 en vez de a 10.
```

### 23 — Convertir mañana (AM) a formato 24 horas

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "formato"]

variables:
  hora_am: random(1, 11)

respuesta: hora_am
tipo: input
tolerancia_abs: 0

enunciado: "Las {hora_am} AM, en formato 24 horas, ¿qué hora son (el número de la hora no cambia)?"

explicacion: |
  Las horas AM (salvo la medianoche) se escriben igual en formato 24
  horas.
```

### 24 — La medianoche en formato 24 horas

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "formato"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "La medianoche (12 AM), en formato 24 horas, ¿qué hora es?"

explicacion: |
  Es el único caso AM que sí cambia el número: la medianoche es la hora 0.
```

### 25 — Problema: cuántos minutos dura un recreo repetido

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "problema"]

variables:
  min_por_recreo: random(10, 20)
  cantidad: random(2, 5)

respuesta: min_por_recreo * cantidad
tipo: input
tolerancia_abs: 0

enunciado: "Cada recreo dura {min_por_recreo} minutos, y hay {cantidad} recreos por día. ¿Cuántos minutos de recreo hay en total?"

explicacion: |
  Multiplicar la duración de cada recreo por la cantidad de recreos.
```

### 26 — El sistema sexagesimal (cierre)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El tiempo (horas, minutos, segundos) se mide en base 60, un sistema distinto al decimal que se usa para casi todo lo demás."

explicacion: |
  Es la idea central de todo el tema: contar y operar en grupos de 60, no
  de 10.
```
