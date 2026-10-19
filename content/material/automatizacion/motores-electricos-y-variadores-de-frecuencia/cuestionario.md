# Automatizacion — Motores eléctricos y variadores de frecuencia (cuestionario, 24 preguntas VBLang)

> Tema: `automatizacion/motores-electricos-y-variadores-de-frecuencia`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Un motor eléctrico convierte...

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

enunciado: "Un motor eléctrico convierte..."
tipo: mc
opciones_explicitas:
  - "Energía eléctrica en energía mecánica de rotación"
  - "Energía mecánica en eléctrica"
  - "Calor en luz"
  - "Sonido en electricidad"
respuesta: "Energía eléctrica en energía mecánica de rotación"

explicacion: |
  La función inversa es la del generador.
```

### 2 — ¿Cuál es el motor más usado en la industria

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

enunciado: "¿Cuál es el motor más usado en la industria?"
tipo: mc
opciones_explicitas:
  - "El asíncrono trifásico (de inducción)"
  - "El paso a paso"
  - "El servomotor"
  - "El motor de escobillas"
respuesta: "El asíncrono trifásico (de inducción)"

explicacion: |
  Es robusto, económico y casi no necesita mantenimiento.
```

### 3 — ¿Qué hace un motor paso a paso

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

enunciado: "¿Qué hace un motor paso a paso?"
tipo: mc
opciones_explicitas:
  - "Gira un ángulo fijo por cada pulso"
  - "Gira continuo sin control"
  - "Solo se usa en la red"
  - "Siempre usa escobillas"
respuesta: "Gira un ángulo fijo por cada pulso"

explicacion: |
  Por ejemplo, 1,8° por paso da 200 pasos por vuelta.
```

### 4 — ¿Qué agrega un servomotor a un motor común

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "¿Qué agrega un servomotor a un motor común?"
tipo: mc
opciones_explicitas:
  - "Un sensor de posición y un controlador que cierra el lazo"
  - "Más polos"
  - "Un rotor mayor"
  - "Menos corriente"
respuesta: "Un sensor de posición y un controlador que cierra el lazo"

explicacion: |
  Permite seguir referencias con precisión.
```

### 5 — En un motor de CC, ¿cómo se regula bien la velocidad

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "En un motor de CC, ¿cómo se regula bien la velocidad?"
tipo: mc
opciones_explicitas:
  - "Variando la tensión"
  - "Variando los polos"
  - "Cambiando el rotor"
  - "Cambiando la red de 50 a 60 Hz"
respuesta: "Variando la tensión"

explicacion: |
  Es una de sus ventajas históricas.
```

### 6 — La velocidad sincrónica de un motor asíncrono depende de...

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "La velocidad sincrónica de un motor asíncrono depende de..."
tipo: mc
opciones_explicitas:
  - "La frecuencia de red y el número de polos"
  - "El color del motor"
  - "La longitud del cable"
  - "La temperatura ambiente solamente"
respuesta: "La frecuencia de red y el número de polos"

explicacion: |
  ns = 120 · f / p.
```

### 7 — En una red de 50 Hz, un motor de 4 polos tiene velocidad sin

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "En una red de 50 Hz, un motor de 4 polos tiene velocidad sincrónica de..."
tipo: mc
opciones_explicitas:
  - "1500 rpm"
  - "3000 rpm"
  - "750 rpm"
  - "1800 rpm"
respuesta: "1500 rpm"

explicacion: |
  120 · 50 / 4 = 1500.
```

### 8 — El deslizamiento de un motor asíncrono es...

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "El deslizamiento de un motor asíncrono es..."
tipo: mc
opciones_explicitas:
  - "La diferencia relativa entre la velocidad sincrónica y la del rotor"
  - "La pérdida de aceite"
  - "Un tipo de arranque"
  - "La caída de tensión en el cable"
respuesta: "La diferencia relativa entre la velocidad sincrónica y la del rotor"

explicacion: |
  s = (ns − n) / ns.
```

### 9 — El arranque estrella-triángulo sirve para...

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "El arranque estrella-triángulo sirve para..."
tipo: mc
opciones_explicitas:
  - "Reducir la corriente de arranque"
  - "Aumentar el par de arranque"
  - "Invertir el giro"
  - "Eliminar el motor"
respuesta: "Reducir la corriente de arranque"

explicacion: |
  La reduce a aproximadamente un tercio.
```

### 10 — ¿Qué es un variador de frecuencia

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

enunciado: "¿Qué es un variador de frecuencia?"
tipo: mc
opciones_explicitas:
  - "Un equipo que entrega tensión y frecuencia ajustables al motor"
  - "Un sensor de velocidad"
  - "Un tipo de relé"
  - "Un freno mecánico"
respuesta: "Un equipo que entrega tensión y frecuencia ajustables al motor"

explicacion: |
  Al cambiar la frecuencia cambia la velocidad.
```

### 11 — ¿Por qué el variador ajusta la tensión junto con la frecuenc

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "avanzado"
  tags: ["motores", "variadores"]

enunciado: "¿Por qué el variador ajusta la tensión junto con la frecuencia?"
tipo: mc
opciones_explicitas:
  - "Para mantener el flujo magnético (control V/f)"
  - "Para ahorrar cables"
  - "Para cambiar el color"
  - "Porque lo exige la norma de embalaje"
respuesta: "Para mantener el flujo magnético (control V/f)"

explicacion: |
  Si no, el motor se saturaría o perdería par.
```

### 12 — ¿Dónde el ahorro de energía con variador es más importante

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "avanzado"
  tags: ["motores", "variadores"]

enunciado: "¿Dónde el ahorro de energía con variador es más importante?"
tipo: mc
opciones_explicitas:
  - "En bombas y ventiladores"
  - "En cargas que no se mueven"
  - "En lámparas"
  - "En motores paso a paso"
respuesta: "En bombas y ventiladores"

explicacion: |
  La potencia baja mucho al reducir la velocidad.
```

### 13 — Un motor sobrecargado...

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "Un motor sobrecargado..."
tipo: mc
opciones_explicitas:
  - "Se calienta y puede dañarse"
  - "Gira más rápido"
  - "Consume menos"
  - "No cambia"
respuesta: "Se calienta y puede dañarse"

explicacion: |
  Se protege con relé térmico o con el variador.
```

### 14 — El código IP de un motor indica...

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "avanzado"
  tags: ["motores", "variadores"]

enunciado: "El código IP de un motor indica..."
tipo: mc
opciones_explicitas:
  - "El grado de protección de la carcasa contra polvo y agua"
  - "La potencia"
  - "La velocidad"
  - "El número de polos"
respuesta: "El grado de protección de la carcasa contra polvo y agua"

explicacion: |
  Aparece en la chapa de características.
```

### 15 — En Argentina la red eléctrica es de 50 Hz.

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina la red eléctrica es de 50 Hz."

explicacion: |
  Se usa para calcular la velocidad sincrónica.
```

### 16 — El motor asíncrono gira exactamente a la velocidad sincrónic

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

respuesta: falso
tipo: vf

enunciado: "El motor asíncrono gira exactamente a la velocidad sincrónica."

explicacion: |
  Gira algo más lento: esa diferencia es el deslizamiento.
```

### 17 — Un variador permite arrancar y parar un motor con suavidad.

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

respuesta: verdadero
tipo: vf

enunciado: "Un variador permite arrancar y parar un motor con suavidad."

explicacion: |
  Alarga la vida útil de los equipos.
```

### 18 — El arranque directo es el más indicado para motores muy gran

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

respuesta: falso
tipo: vf

enunciado: "El arranque directo es el más indicado para motores muy grandes."

explicacion: |
  La corriente de arranque es muy alta.
```

### 19 — La velocidad sincrónica se calcula como ns = 120 · f / ___ (

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

tipo: completar
enunciado: "La velocidad sincrónica se calcula como ns = 120 · f / ___ (p = número de polos)."
respuestas_validas:
  - "p"

explicacion: |
  f es la frecuencia en hertz.
```

### 20 — Un motor que gira un ángulo fijo por pulso es un motor ___ (

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

tipo: completar
enunciado: "Un motor que gira un ángulo fijo por pulso es un motor ___ (paso a paso / asíncrono)."
respuestas_validas:
  - "paso a paso"

explicacion: |
  Tiene pasos discretos.
```

### 21 — ¿Cuál es la velocidad sincrónica (en rpm) de un motor de {p}

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

variables:
  p: uno_de([2, 4, 6, 8])

respuesta: 120 * 50 / p
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la velocidad sincrónica (en rpm) de un motor de {p} polos conectado a una red de 50 Hz?"

pasos:
  - "ns = 120 · f / p"

explicacion: |
  Se aplica la fórmula con f = 50 Hz.
```

### 22 — Un variador alimenta un motor de {p} polos a {f} Hz. ¿Cuál e

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

variables:
  f: uno_de([30, 40, 50, 60])
  p: uno_de([2, 4])

respuesta: 120 * f / p
tipo: input
tolerancia_abs: 0

enunciado: "Un variador alimenta un motor de {p} polos a {f} Hz. ¿Cuál es la velocidad sincrónica, en rpm?"

pasos:
  - "ns = 120 · f / p"

explicacion: |
  Al cambiar la frecuencia cambia la velocidad.
```

### 23 — Un motor tiene velocidad sincrónica de {ns} rpm y un desliza

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "avanzado"
  tags: ["motores", "variadores"]

variables:
  ns: uno_de([1500, 3000, 1000])
  s: uno_de([2, 3, 4, 5])

respuesta: redondear(ns * (1 - s / 100), 0)
tipo: input
tolerancia_abs: 1

enunciado: "Un motor tiene velocidad sincrónica de {ns} rpm y un deslizamiento del {s} %. ¿A cuántas rpm gira el rotor? (redondeá a la unidad)"

pasos:
  - "n = ns · (1 − s)"

explicacion: |
  El rotor gira un poco más lento que el campo.
```

### 24 — Un motor paso a paso da {pasos} pasos por vuelta. ¿Cuántos g

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

variables:
  pasos: uno_de([200, 400, 48, 96])

respuesta: 360 / pasos
tipo: input
tolerancia_abs: 0.01

enunciado: "Un motor paso a paso da {pasos} pasos por vuelta. ¿Cuántos grados avanza en cada paso? (si no es exacto, redondeá a dos decimales)"

pasos:
  - "Ángulo por paso = 360° / pasos por vuelta"

explicacion: |
  Un paso de 1,8° equivale a 200 pasos por vuelta.
```
