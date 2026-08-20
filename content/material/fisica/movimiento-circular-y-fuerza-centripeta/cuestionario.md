# Física — Movimiento circular y fuerza centrípeta (cuestionario, 25 preguntas VBLang)

> Tema: `F13`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el movimiento circular uniforme

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "vocabulario"]

enunciado: "¿Qué caracteriza al movimiento circular uniforme (MCU)?"
tipo: mc
opciones_explicitas:
  - "Un objeto recorre una circunferencia manteniendo su rapidez (magnitud de la velocidad) constante"
  - "Un objeto recorre una circunferencia acelerando cada vez más rápido"
  - "Un objeto se mueve en línea recta a velocidad constante"
respuesta: "Un objeto recorre una circunferencia manteniendo su rapidez (magnitud de la velocidad) constante"

explicacion: |
  La rapidez no cambia, pero la dirección de la velocidad sí — por eso
  igual hay aceleración.
```

### 2 — La velocidad (vector) NO es constante en el MCU

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: falso
tipo: vf

enunciado: "En el movimiento circular uniforme, la velocidad (como vector, con magnitud y dirección) es constante."

explicacion: |
  La magnitud no cambia, pero la dirección sí (siempre tangente a la
  circunferencia) — por eso el vector velocidad no es constante.
```

### 3 — La rapidez SÍ es constante en el MCU

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "En el movimiento circular uniforme, la rapidez (la magnitud de la velocidad, sin importar la dirección) es constante."

explicacion: |
  Es justamente lo que lo hace "uniforme" — la palabra se refiere a la
  rapidez, no a la velocidad completa.
```

### 4 — Completar: período

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "completar"]

tipo: completar
enunciado: "Completá: el tiempo que tarda un objeto en dar una vuelta completa se llama ___ (símbolo T)."
respuestas_validas:
  - "período"
  - "periodo"

explicacion: |
  Se mide en segundos.
```

### 5 — Completar: frecuencia

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "completar"]

tipo: completar
enunciado: "Completá: la cantidad de vueltas por segundo, f=1/T, se llama ___ (unidad Hz)."
respuestas_validas:
  - "frecuencia"

explicacion: |
  Frecuencia y período son inversos entre sí.
```

### 6 — Problema: frecuencia a partir del período

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(1 / T, 3)
tipo: input
tolerancia_abs: 0.01
unidad: "Hz"

enunciado: "Un objeto en MCU completa una vuelta cada {T} s. ¿Cuál es su frecuencia?"

pasos:
  - "f = 1 / T = 1 / {T} = {redondear(1 / T, 3)} Hz"

explicacion: |
  f y T son inversos: a mayor período, menor frecuencia.
```

### 7 — Problema: período a partir de la frecuencia

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  f: uno_de([0.1, 0.2, 0.25, 0.5, 2, 4])

respuesta: redondear(1 / f, 3)
tipo: input
tolerancia_abs: 0.01
unidad: "s"

enunciado: "Un objeto en MCU gira con una frecuencia de {f} Hz. ¿Cuál es su período?"

pasos:
  - "T = 1 / f = 1 / {f} = {redondear(1 / f, 3)} s"

explicacion: |
  T y f son inversos: a mayor frecuencia, menor período.
```

### 8 — Problema: velocidad angular

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(2 * pi / T, 3)
tipo: input
tolerancia_abs: 0.02
unidad: "rad/s"

enunciado: "Un objeto en MCU completa una vuelta cada {T} s. ¿Cuál es su velocidad angular ω?"

pasos:
  - "ω = 2π / T = 2×π / {T} = {redondear(2 * pi / T, 3)} rad/s"

explicacion: |
  Una vuelta completa equivale a un ángulo de 2π radianes.
```

### 9 — Problema: velocidad tangencial desde ω y r

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "problema"]

variables:
  omega: uno_de([1, 2, 3, 4, 5])
  r: random(1, 5)

respuesta: omega * r
tipo: input
unidad: "m/s"

enunciado: "Un objeto gira con velocidad angular ω={omega} rad/s en un círculo de radio {r} m. ¿Cuál es su velocidad tangencial?"

pasos:
  - "v = ω × r = {omega} × {r} = {omega * r} m/s"

explicacion: |
  La velocidad tangencial es directamente proporcional al radio, para
  una misma velocidad angular.
```

### 10 — Problema: velocidad tangencial desde el período

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  r: random(1, 5)
  T: uno_de([2, 4, 5, 8, 10])

respuesta: redondear(2 * pi * r / T, 2)
tipo: input
tolerancia_abs: 0.05
unidad: "m/s"

enunciado: "Un objeto recorre un círculo de radio {r} m, completando una vuelta cada {T} s. ¿Cuál es su velocidad tangencial?"

pasos:
  - "v = 2π×r / T = 2×π×{r} / {T} = {redondear(2 * pi * r / T, 2)} m/s"

explicacion: |
  En una vuelta recorre el perímetro de la circunferencia (2π×r), en
  un tiempo T.
```

### 11 — Problema: aceleración centrípeta

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  v: random(2, 20)
  r: random(1, 10)

respuesta: redondear(v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m/s²"

enunciado: "Un objeto en MCU tiene una velocidad tangencial de {v} m/s en un círculo de radio {r} m. ¿Cuál es su aceleración centrípeta?"

pasos:
  - "a_c = v² / r = {v}² / {r} = {redondear(v ^ 2 / r, 2)} m/s²"

explicacion: |
  Apunta siempre hacia el centro del círculo.
```

### 12 — Problema: fuerza centrípeta

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  m: random(1, 10)
  v: random(2, 20)
  r: random(1, 10)

respuesta: redondear(m * v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.2
unidad: "N"

enunciado: "Un objeto de {m} kg gira con velocidad tangencial {v} m/s en un círculo de radio {r} m. ¿Cuál es la fuerza centrípeta necesaria?"

pasos:
  - "F_c = m × v² / r = {m} × {v}² / {r} = {redondear(m * v ^ 2 / r, 2)} N"

explicacion: |
  Es la fuerza neta (real) que debe apuntar hacia el centro para
  mantener esa trayectoria circular.
```

### 13 — Hacia dónde apunta la aceleración centrípeta

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu"]

enunciado: "¿Hacia dónde apunta la aceleración centrípeta en cada instante?"
tipo: mc
opciones_explicitas:
  - "Hacia el centro del círculo"
  - "En la misma dirección que la velocidad"
  - "Hacia afuera del círculo"
respuesta: "Hacia el centro del círculo"

explicacion: |
  Es lo que constantemente "curva" la trayectoria, cambiando la
  dirección de la velocidad sin cambiar su magnitud.
```

### 14 — La fuerza centrípeta no es un tipo nuevo de fuerza

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

enunciado: "¿Qué es exactamente la 'fuerza centrípeta'?"
tipo: mc
opciones_explicitas:
  - "El nombre que se le da a la fuerza neta (real) cuando su resultante apunta hacia el centro de una trayectoria circular"
  - "Un tipo de fuerza física distinto de la gravedad, la tensión o el rozamiento"
  - "Una fuerza que sólo existe en el espacio, sin gravedad"
respuesta: "El nombre que se le da a la fuerza neta (real) cuando su resultante apunta hacia el centro de una trayectoria circular"

explicacion: |
  No se suma a las demás fuerzas — es cómo se llama a la resultante de
  las fuerzas reales que ya actúan, cuando el objeto se mueve en
  círculo.
```

### 15 — En un auto tomando una curva

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "aplicacion"]

enunciado: "En un auto que toma una curva a velocidad constante, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "El rozamiento entre las ruedas y el asfalto"
  - "El peso del auto"
  - "La fuerza del motor"
respuesta: "El rozamiento entre las ruedas y el asfalto"

explicacion: |
  Si el asfalto está mojado o helado (rozamiento muy bajo), el auto no
  logra la fuerza centrípeta necesaria y se sale de la curva.
```

### 16 — En un satélite orbitando

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu", "aplicacion"]

enunciado: "En un satélite en órbita circular alrededor de la Tierra, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "La gravedad de la Tierra"
  - "El rozamiento con la atmósfera"
  - "Los motores del satélite, funcionando constantemente"
respuesta: "La gravedad de la Tierra"

explicacion: |
  Es la misma gravedad de `../gravitacion-universal/`, actuando ahora
  como la fuerza que mantiene la órbita circular.
```

### 17 — En una piedra atada a una cuerda

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "Al hacer girar una piedra atada a una cuerda, ¿qué fuerza real actúa como fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "La tensión de la cuerda"
  - "El peso de la piedra"
  - "El rozamiento del aire"
respuesta: "La tensión de la cuerda"

explicacion: |
  La cuerda tira de la piedra hacia el centro, todo el tiempo.
```

### 18 — Si se corta la cuerda

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "intermedio"
  tags: ["mcu"]

respuesta: falso
tipo: vf

enunciado: "Si se corta la cuerda de una piedra que gira, la piedra sigue moviéndose en círculo por inercia."

explicacion: |
  Sin la tensión (la fuerza centrípeta), ya no hay nada que la
  desvíe hacia el centro — sale disparada en línea recta, tangente al
  punto donde se cortó la cuerda (primera ley de Newton).
```

### 19 — Ordenar: pasos para calcular la fuerza centrípeta

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "ordenar"]

enunciado: "Ordená los pasos para calcular la fuerza centrípeta, sabiendo la masa, el radio y el período."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar por la masa para obtener la fuerza: F_c = m × a_c"
  - "Calcular la velocidad tangencial: v = 2π×r / T"
  - "Calcular la aceleración centrípeta: a_c = v² / r"
respuesta_orden: ["Calcular la velocidad tangencial: v = 2π×r / T", "Calcular la aceleración centrípeta: a_c = v² / r", "Multiplicar por la masa para obtener la fuerza: F_c = m × a_c"]
explicacion: |
  Cada paso usa el resultado del anterior.
```

### 20 — A mayor radio, con la misma velocidad tangencial

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "Si la velocidad tangencial se mantiene igual pero el radio del círculo es mayor, la aceleración centrípeta es menor."

explicacion: |
  a_c = v²/r: con v fijo, a mayor r, menor a_c (relación inversa).
```

### 21 — A mayor velocidad tangencial

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu"]

respuesta: verdadero
tipo: vf

enunciado: "Si el radio se mantiene igual, duplicar la velocidad tangencial más que duplica la aceleración centrípeta (la cuadruplica)."

explicacion: |
  a_c = v²/r: la velocidad entra al cuadrado, así que duplicarla
  multiplica a_c por 2² = 4.
```

### 22 — Problema combinado: fuerza centrípeta desde masa, radio y período

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "avanzado"
  tags: ["mcu", "problema"]

variables:
  m: random(1, 5)
  r: random(1, 4)
  T: uno_de([2, 4, 5])
  v: redondear(2 * pi * r / T, 3)

respuesta: redondear(m * v ^ 2 / r, 2)
tipo: input
tolerancia_abs: 0.3
unidad: "N"

enunciado: "Un objeto de {m} kg gira en un círculo de radio {r} m, completando una vuelta cada {T} s (su velocidad tangencial es v={v} m/s). ¿Cuál es la fuerza centrípeta necesaria?"

pasos:
  - "v = 2π×r / T = {v} m/s"
  - "F_c = m × v² / r = {m} × {v}² / {r} = {redondear(m * v ^ 2 / r, 2)} N"

explicacion: |
  Combina las dos fórmulas: primero la velocidad tangencial a partir
  del período, después la fuerza centrípeta a partir de esa velocidad.
```

### 23 — Aplicación real: peralte de una ruta

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "¿Por qué las curvas de las rutas y autódromos suelen tener 'peralte' (una inclinación hacia el centro de la curva)?"
tipo: mc
opciones_explicitas:
  - "Para que parte del peso del auto ayude a generar la fuerza centrípeta necesaria, sin depender sólo del rozamiento"
  - "Para que los autos vayan más lento"
  - "El peralte no tiene relación con la física del movimiento circular"
respuesta: "Para que parte del peso del auto ayude a generar la fuerza centrípeta necesaria, sin depender sólo del rozamiento"

explicacion: |
  Con la pista inclinada, la componente del peso hacia el centro suma
  a la fuerza centrípeta, permitiendo tomar la curva a más velocidad de
  forma segura.
```

### 24 — Aplicación real: centrifugadora

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["mcu", "aplicacion"]

enunciado: "¿Cómo separa el agua de la ropa una centrifugadora de lavarropas?"
tipo: mc
opciones_explicitas:
  - "El tambor gira rápido y sólo la ropa (sujeta a las paredes) recibe suficiente fuerza centrípeta; el agua, más libre, se escapa por los agujeros en línea recta"
  - "El agua es atraída hacia el centro por gravedad"
  - "El calor del motor evapora el agua"
respuesta: "El tambor gira rápido y sólo la ropa (sujeta a las paredes) recibe suficiente fuerza centrípeta; el agua, más libre, se escapa por los agujeros en línea recta"

explicacion: |
  Es la misma idea que la piedra sin cuerda: sin suficiente fuerza
  hacia el centro, un objeto sigue en línea recta (tangente) en vez de
  la trayectoria circular.
```

### 25 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "fisica"
  tema: "movimiento_circular_y_fuerza_centripeta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el movimiento circular y la fuerza centrípeta?"
tipo: mc
opciones_explicitas:
  - "Para describir cualquier trayectoria circular (período, velocidad, aceleración) y saber qué fuerza real la mantiene en ese círculo"
  - "Sólo aplica a objetos que giran atados con una cuerda"
  - "Sólo aplica en el espacio, sin gravedad"
respuesta: "Para describir cualquier trayectoria circular (período, velocidad, aceleración) y saber qué fuerza real la mantiene en ese círculo"

explicacion: |
  Desde un satélite hasta una curva de ruta, la misma matemática
  (T, ω, v, a_c, F_c) describe cualquier movimiento circular.
```
