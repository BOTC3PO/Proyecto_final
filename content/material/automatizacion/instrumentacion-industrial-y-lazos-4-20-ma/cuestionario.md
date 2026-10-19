# Automatizacion — Instrumentación industrial y lazos de 4-20 mA (cuestionario, 23 preguntas VBLang)

> Tema: `automatizacion/instrumentacion-industrial-y-lazos-4-20-ma`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Qué es un transmisor

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Qué es un transmisor?"
tipo: mc
opciones_explicitas:
  - "Un equipo que convierte una medición en una señal eléctrica normalizada"
  - "Un cable de potencia"
  - "Un tipo de motor"
  - "Un programa de PLC"
respuesta: "Un equipo que convierte una medición en una señal eléctrica normalizada"

explicacion: |
  Contiene el sensor y un circuito de conversión.
```

### 2 — En un lazo de 4-20 mA, 4 mA representa...

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "En un lazo de 4-20 mA, 4 mA representa..."
tipo: mc
opciones_explicitas:
  - "El 0 % del rango de medición"
  - "El 100 % del rango"
  - "La falla"
  - "El 50 % del rango"
respuesta: "El 0 % del rango de medición"

explicacion: |
  20 mA es el 100 %.
```

### 3 — ¿Por qué el valor mínimo es 4 mA y no 0

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Por qué el valor mínimo es 4 mA y no 0?"
tipo: mc
opciones_explicitas:
  - "Para poder detectar un cable cortado o un transmisor apagado"
  - "Por ahorro de energía"
  - "Por costumbre histórica sin razón técnica"
  - "Para que no pase corriente"
respuesta: "Para poder detectar un cable cortado o un transmisor apagado"

explicacion: |
  Es el 'cero vivo'.
```

### 4 — Una ventaja del lazo de corriente es...

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "Una ventaja del lazo de corriente es..."
tipo: mc
opciones_explicitas:
  - "No lo afecta la caída de tensión por la longitud del cable"
  - "Necesita muchos cables"
  - "Es muy sensible al ruido"
  - "Solo mide temperaturas"
respuesta: "No lo afecta la caída de tensión por la longitud del cable"

explicacion: |
  La corriente es la misma en todo el lazo.
```

### 5 — ¿Cuántos hilos usa un transmisor de lazo alimentado

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Cuántos hilos usa un transmisor de lazo alimentado?"
tipo: mc
opciones_explicitas:
  - "Dos, por los que recibe energía y envía la señal"
  - "Cuatro siempre"
  - "Uno"
  - "Ninguno"
respuesta: "Dos, por los que recibe energía y envía la señal"

explicacion: |
  Se alimenta con una fuente típica de 24 V de continua.
```

### 6 — Una resistencia de 250 ohm convierte 4-20 mA en...

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "avanzado"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "Una resistencia de 250 ohm convierte 4-20 mA en..."
tipo: mc
opciones_explicitas:
  - "1-5 V"
  - "0-10 V"
  - "0-24 V"
  - "4-20 V"
respuesta: "1-5 V"

explicacion: |
  Por la ley de Ohm: 4 mA × 250 Ω = 1 V y 20 mA × 250 Ω = 5 V.
```

### 7 — ¿Qué es el span de un transmisor

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Qué es el span de un transmisor?"
tipo: mc
opciones_explicitas:
  - "La diferencia entre el valor máximo y el mínimo del rango"
  - "El cero"
  - "La longitud del cable"
  - "La tensión de alimentación"
respuesta: "La diferencia entre el valor máximo y el mínimo del rango"

explicacion: |
  Fija el valor que corresponde a 20 mA.
```

### 8 — Calibrar un transmisor es...

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "Calibrar un transmisor es..."
tipo: mc
opciones_explicitas:
  - "Comprobar y ajustar que entregue la señal correcta con un patrón de referencia"
  - "Cambiarle el cable"
  - "Reiniciar el PLC"
  - "Pintarlo"
respuesta: "Comprobar y ajustar que entregue la señal correcta con un patrón de referencia"

explicacion: |
  Se ajustan cero y span.
```

### 9 — ¿Qué es HART

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "avanzado"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Qué es HART?"
tipo: mc
opciones_explicitas:
  - "Una comunicación digital superpuesta al lazo de 4-20 mA"
  - "Un tipo de válvula"
  - "Un sensor de nivel"
  - "Un tablero"
respuesta: "Una comunicación digital superpuesta al lazo de 4-20 mA"

explicacion: |
  Permite configurar y diagnosticar el instrumento.
```

### 10 — ¿Qué es un P&ID

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Qué es un P&ID?"
tipo: mc
opciones_explicitas:
  - "El plano del proceso con sus tuberías, equipos e instrumentos"
  - "Un programa de PLC"
  - "Un tipo de transmisor"
  - "Un manual de mantenimiento"
respuesta: "El plano del proceso con sus tuberías, equipos e instrumentos"

explicacion: |
  Usa símbolos y códigos normalizados.
```

### 11 — En la nomenclatura ISA, TT significa...

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "En la nomenclatura ISA, TT significa..."
tipo: mc
opciones_explicitas:
  - "Transmisor de temperatura"
  - "Transformador térmico"
  - "Tablero de transferencia"
  - "Tubería de temperatura"
respuesta: "Transmisor de temperatura"

explicacion: |
  La T inicial es temperatura y la segunda T, transmisor.
```

### 12 — En la nomenclatura ISA, LT significa...

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "En la nomenclatura ISA, LT significa..."
tipo: mc
opciones_explicitas:
  - "Transmisor de nivel"
  - "Transmisor de luz"
  - "Línea de tubería"
  - "Lazo térmico"
respuesta: "Transmisor de nivel"

explicacion: |
  L es nivel (level).
```

### 13 — En los códigos ISA, la letra C indica...

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "En los códigos ISA, la letra C indica..."
tipo: mc
opciones_explicitas:
  - "Controlador"
  - "Corriente"
  - "Caudal"
  - "Calibrado"
respuesta: "Controlador"

explicacion: |
  Por ejemplo, TIC es un controlador indicador de temperatura.
```

### 14 — Los cables de señal conviene tenderlos...

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "avanzado"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "Los cables de señal conviene tenderlos..."
tipo: mc
opciones_explicitas:
  - "Separados de los de potencia"
  - "Juntos con los de potencia"
  - "Sin malla"
  - "Mezclados al azar"
respuesta: "Separados de los de potencia"

explicacion: |
  Evita interferencias.
```

### 15 — Un transmisor calibrado de 0 a 200 °C entrega 12 mA cuando m

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

respuesta: verdadero
tipo: vf

enunciado: "Un transmisor calibrado de 0 a 200 °C entrega 12 mA cuando mide 100 °C."

explicacion: |
  100 °C es la mitad del rango y la mitad de 4-20 mA es 12.
```

### 16 — Una corriente de 0 mA en un lazo de 4-20 mA indica que la va

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

respuesta: falso
tipo: vf

enunciado: "Una corriente de 0 mA en un lazo de 4-20 mA indica que la variable vale cero."

explicacion: |
  Indica falla de cable o de alimentación.
```

### 17 — La señal 4-20 mA es proporcional (lineal) a la variable medi

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

respuesta: verdadero
tipo: vf

enunciado: "La señal 4-20 mA es proporcional (lineal) a la variable medida."

explicacion: |
  Es la relación habitual.
```

### 18 — Un instrumento puede desviarse con el tiempo y seguir pareci

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

respuesta: verdadero
tipo: vf

enunciado: "Un instrumento puede desviarse con el tiempo y seguir pareciendo normal."

explicacion: |
  Por eso se recalibra periódicamente.
```

### 19 — En un lazo de 4-20 mA, el 100 % del rango corresponde a ___

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

tipo: completar
enunciado: "En un lazo de 4-20 mA, el 100 % del rango corresponde a ___ mA."
respuestas_validas:
  - 20

explicacion: |
  Y el 0 % corresponde a 4 mA.
```

### 20 — El plano que muestra el proceso con sus instrumentos se llam

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

tipo: completar
enunciado: "El plano que muestra el proceso con sus instrumentos se llama ___ (P&ID / ladder)."
respuestas_validas:
  - "P&ID"

explicacion: |
  Diagrama de tuberías e instrumentación.
```

### 21 — Un transmisor está calibrado de {mn} a {mx} y la variable es

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

variables:
  mn: uno_de([0, 0, 0, 10])
  mx: uno_de([100, 200, 250])
  v: uno_de([25, 50, 75])

respuesta: redondear(4 + 16 * ((mn + (mx - mn) * v / 100) - mn) / (mx - mn), 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un transmisor está calibrado de {mn} a {mx} y la variable está en el {v} % de su rango. ¿Cuántos mA entrega?"

pasos:
  - "mA = 4 + 16 × porcentaje del rango"

explicacion: |
  El 50 % del rango equivale a 12 mA.
```

### 22 — Un transmisor calibrado de 0 a {mx} entrega {ma} mA. ¿Qué va

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "avanzado"
  tags: ["instrumentacion", "4_20_ma"]

variables:
  ma: random(5, 19)
  mx: uno_de([100, 200, 400])

respuesta: redondear((ma - 4) / 16 * mx, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Un transmisor calibrado de 0 a {mx} entrega {ma} mA. ¿Qué valor mide? (redondeá a un decimal)"

pasos:
  - "Valor = (mA − 4) / 16 × span"

explicacion: |
  Se invierte la relación lineal.
```

### 23 — Un lazo de {ma} mA circula por una resistencia de 250 ohm.

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

variables:
  ma: random(4, 20)

respuesta: redondear(ma * 250 / 1000, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un lazo de {ma} mA circula por una resistencia de 250 ohm. ¿Cuántos volts hay sobre ella? (redondeá a dos decimales)"

pasos:
  - "V = I · R, con I en amperes"

explicacion: |
  4 mA dan 1 V y 20 mA dan 5 V.
```
