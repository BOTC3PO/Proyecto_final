# Automatizacion — PLC: lenguaje ladder, contactos y bobinas (cuestionario, 23 preguntas VBLang)

> Tema: `automatizacion/plc-lenguaje-ladder-contactos-y-bobinas`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Qué es el ladder

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

enunciado: "¿Qué es el ladder?"
tipo: mc
opciones_explicitas:
  - "Un lenguaje gráfico de programación de PLC, basado en esquemas de relés"
  - "Un lenguaje de bases de datos"
  - "Un tipo de sensor"
  - "Un cable de comunicación"
respuesta: "Un lenguaje gráfico de programación de PLC, basado en esquemas de relés"

explicacion: |
  Está definido en la norma IEC 61131-3.
```

### 2 — En el ladder, ¿cómo se leen los peldaños

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

enunciado: "En el ladder, ¿cómo se leen los peldaños?"
tipo: mc
opciones_explicitas:
  - "De arriba hacia abajo y de izquierda a derecha en cada ciclo"
  - "Al azar"
  - "De abajo hacia arriba solamente"
  - "Solo cuando se pulsa un botón"
respuesta: "De arriba hacia abajo y de izquierda a derecha en cada ciclo"

explicacion: |
  El PLC los evalúa en orden en cada ciclo.
```

### 3 — Un contacto normalmente abierto deja pasar cuando el bit aso

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

enunciado: "Un contacto normalmente abierto deja pasar cuando el bit asociado vale..."
tipo: mc
opciones_explicitas:
  - "1"
  - "0"
  - "Siempre"
  - "Nunca"
respuesta: "1"

explicacion: |
  Está abierto en reposo y cierra cuando el bit es 1.
```

### 4 — Un contacto normalmente cerrado deja pasar cuando el bit val

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

enunciado: "Un contacto normalmente cerrado deja pasar cuando el bit vale..."
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "Siempre"
  - "Nunca"
respuesta: "0"

explicacion: |
  Equivale a la negación de la variable.
```

### 5 — ¿Qué representa una bobina en un peldaño

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

enunciado: "¿Qué representa una bobina en un peldaño?"
tipo: mc
opciones_explicitas:
  - "La salida que se activa si hay continuidad lógica"
  - "Una entrada física"
  - "Un temporizador"
  - "Un cable"
respuesta: "La salida que se activa si hay continuidad lógica"

explicacion: |
  Es el resultado del peldaño.
```

### 6 — Dos contactos en serie realizan la función...

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

enunciado: "Dos contactos en serie realizan la función..."
tipo: mc
opciones_explicitas:
  - "AND"
  - "OR"
  - "NOT"
  - "XOR"
respuesta: "AND"

explicacion: |
  Deben cumplirse ambos.
```

### 7 — Dos contactos en paralelo realizan la función...

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

enunciado: "Dos contactos en paralelo realizan la función..."
tipo: mc
opciones_explicitas:
  - "OR"
  - "AND"
  - "NOT"
  - "NAND"
respuesta: "OR"

explicacion: |
  Basta con que uno se cumpla.
```

### 8 — ¿Qué función realiza un contacto NC

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

enunciado: "¿Qué función realiza un contacto NC?"
tipo: mc
opciones_explicitas:
  - "Una negación (NOT) de la variable"
  - "Una suma"
  - "Una multiplicación"
  - "Un contador"
respuesta: "Una negación (NOT) de la variable"

explicacion: |
  Deja pasar cuando la variable vale 0.
```

### 9 — ¿Para qué sirve el enclavamiento (autorretención)

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

enunciado: "¿Para qué sirve el enclavamiento (autorretención)?"
tipo: mc
opciones_explicitas:
  - "Para que un pulsador momentáneo deje al motor funcionando hasta que se lo pare"
  - "Para contar piezas"
  - "Para medir temperatura"
  - "Para comunicar dos PLC"
respuesta: "Para que un pulsador momentáneo deje al motor funcionando hasta que se lo pare"

explicacion: |
  Un contacto de la propia bobina mantiene la señal.
```

### 10 — En el circuito de arranque-parada, el contacto de autorreten

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

enunciado: "En el circuito de arranque-parada, el contacto de autorretención se coloca..."
tipo: mc
opciones_explicitas:
  - "En paralelo con el pulsador de marcha"
  - "En serie con la parada"
  - "En paralelo con la parada"
  - "Después de la bobina"
respuesta: "En paralelo con el pulsador de marcha"

explicacion: |
  Así mantiene la señal al soltar el pulsador.
```

### 11 — El pulsador de parada se cablea normalmente cerrado porque..

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "avanzado"
  tags: ["plc", "ladder"]

enunciado: "En una instalación real, el pulsador de parada se cablea físicamente normalmente cerrado porque..."
tipo: mc
opciones_explicitas:
  - "Si se corta el cable, el motor se detiene (falla segura)"
  - "Es más barato"
  - "Lo exige el lenguaje"
  - "Ahorra energía"
respuesta: "Si se corta el cable, el motor se detiene (falla segura)"

explicacion: |
  Una falla no debe provocar un arranque.
```

### 12 — ¿Qué diferencia hay entre bobina set y bobina normal

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "avanzado"
  tags: ["plc", "ladder"]

enunciado: "¿Qué diferencia hay entre bobina set y bobina normal?"
tipo: mc
opciones_explicitas:
  - "La set mantiene la salida activa hasta que se la desactive con un reset"
  - "No hay diferencia"
  - "La set solo funciona en simulación"
  - "La normal retiene el estado"
respuesta: "La set mantiene la salida activa hasta que se la desactive con un reset"

explicacion: |
  Es otra forma de hacer un enclavamiento.
```

### 13 — Un contacto de flanco ascendente está activo...

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "avanzado"
  tags: ["plc", "ladder"]

enunciado: "Un contacto de flanco ascendente está activo..."
tipo: mc
opciones_explicitas:
  - "Durante un ciclo cuando la señal pasa de 0 a 1"
  - "Siempre que la señal valga 1"
  - "Cuando la señal valga 0"
  - "Nunca"
respuesta: "Durante un ciclo cuando la señal pasa de 0 a 1"

explicacion: |
  Sirve para contar pulsos o evitar disparos repetidos.
```

### 14 — ¿Por qué conviene no usar la misma bobina de salida en vario

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "avanzado"
  tags: ["plc", "ladder"]

enunciado: "¿Por qué conviene no usar la misma bobina de salida en varios peldaños?"
tipo: mc
opciones_explicitas:
  - "Puede producir resultados confusos"
  - "No se puede programar"
  - "Gasta memoria externa"
  - "Es ilegal"
respuesta: "Puede producir resultados confusos"

explicacion: |
  Pueden pisarse entre sí.
```

### 15 — Un contacto en ladder es un componente físico que se instala

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

respuesta: falso
tipo: vf

enunciado: "Un contacto en ladder es un componente físico que se instala en el tablero."

explicacion: |
  Es la consulta del estado de una entrada, salida o variable interna.
```

### 16 — El ladder nació para que quienes leían esquemas de relés pud

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

respuesta: verdadero
tipo: vf

enunciado: "El ladder nació para que quienes leían esquemas de relés pudieran programar PLC."

explicacion: |
  Es la razón histórica de su aspecto.
```

### 17 — En un peldaño, contactos en serie equivalen a OR.

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

respuesta: falso
tipo: vf

enunciado: "En un peldaño, contactos en serie equivalen a OR."

explicacion: |
  En serie es AND; en paralelo es OR.
```

### 18 — Conviene probar el programa en simulación antes de conectarl

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

respuesta: verdadero
tipo: vf

enunciado: "Conviene probar el programa en simulación antes de conectarlo a un equipo real."

explicacion: |
  Reduce riesgos.
```

### 19 — La norma que define los lenguajes de programación de PLC es

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

tipo: completar
enunciado: "La norma que define los lenguajes de programación de PLC es la IEC ___."
respuestas_validas:
  - "61131-3"

explicacion: |
  Incluye ladder, bloques, texto estructurado y SFC.
```

### 20 — En un peldaño típico de arranque-parada, la parada se conect

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

tipo: completar
enunciado: "En el ejemplo básico de arranque-parada, donde el pulsador de parada entrega un 1 al pulsarse, la parada se programa con un contacto ___ (NA / NC)."
respuestas_validas:
  - "NC"

explicacion: |
  Normalmente cerrado.
```

### 21 — Dos contactos NA están en serie: el primero tiene el bit en

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

variables:
  a: random(0, 1)
  b: random(0, 1)

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "Dos contactos NA están en serie: el primero tiene el bit en {a} y el segundo en {b}. ¿Cuánto vale la bobina (0 o 1)?"

pasos:
  - "En serie: AND de ambos bits"

explicacion: |
  Se activa solo si ambos valen 1.
```

### 22 — Dos contactos NA están en paralelo: bits {a} y {b}. ¿Cuánto

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "basico"
  tags: ["plc", "ladder"]

variables:
  a: random(0, 1)
  b: random(0, 1)

respuesta: max(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Dos contactos NA están en paralelo: bits {a} y {b}. ¿Cuánto vale la bobina (0 o 1)?"

pasos:
  - "En paralelo: OR de los bits"

explicacion: |
  Se activa si al menos uno vale 1.
```

### 23 — Un contacto NA de marcha tiene el bit en {m} y un contacto N

```
metadata:
  materia: "automatizacion"
  tema: "plc_lenguaje_ladder_contactos_y_bobinas"
  nivel: "intermedio"
  tags: ["plc", "ladder"]

variables:
  m: random(0, 1)
  p: random(0, 1)

respuesta: m * (1 - p)
tipo: input
tolerancia_abs: 0

enunciado: "Un contacto NA de marcha tiene el bit en {m} y un contacto NC de parada tiene el bit del pulsador en {p} (1 = pulsado). Sin autorretención, ¿cuánto vale la bobina del motor?"

pasos:
  - "Bobina = marcha AND NOT parada"

explicacion: |
  El contacto NC deja pasar cuando el pulsador de parada vale 0.
```
