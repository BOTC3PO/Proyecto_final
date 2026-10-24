# Electrónica — Capacitor RC: carga y descarga (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Constante de tiempo

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "calculo"]

variables:
  r: uno_de([1000, 2000, 5000, 10000, 20000])
  c: uno_de([10, 22, 47, 100])
  t: redondear(r * c / 1000000, 4)

respuesta: t
tipo: input
tolerancia_abs: 0.0005

enunciado: "Un circuito RC tiene R = {r} Ω y C = {c} µF. ¿Cuánto vale la constante de tiempo, en segundos?"

pasos:
  - "τ = R × C"
  - "Convertir µF a F dividiendo por 1.000.000"

explicacion: |
  τ = R × C, con C en faradios.
```

### 2 — Constante en milisegundos

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "calculo"]

variables:
  r: uno_de([1000, 2200, 4700, 10000])
  c: uno_de([1, 10, 100])
  t: redondear(r * c / 1000, 2)

respuesta: t
tipo: input
tolerancia_abs: 0.01

enunciado: "Un circuito RC tiene R = {r} Ω y C = {c} µF. ¿Cuánto vale τ, en milisegundos?"

pasos:
  - "τ = R × C en segundos, luego pasar a ms"

explicacion: |
  R × C en ohmios por microfaradios da microsegundos; dividido 1000 da milisegundos.
```

### 3 — Tiempo de carga completa

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "calculo"]

variables:
  r: uno_de([1000, 2000, 5000, 10000])
  c: uno_de([10, 47, 100])
  t: redondear(5 * r * c / 1000000, 3)

respuesta: t
tipo: input
tolerancia_abs: 0.002

enunciado: "Un capacitor de {c} µF se carga a través de {r} Ω. Considerando carga completa a los 5τ, ¿cuántos segundos tarda?"

pasos:
  - "τ = R × C"
  - "5 × τ"

explicacion: |
  Se estima la carga completa en unos cinco τ.
```

### 4 — Capacidad necesaria

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "diseno"]

variables:
  r: uno_de([1000, 2000, 5000, 10000])
  tau: uno_de([0.01, 0.02, 0.05, 0.1])
  c: redondear(tau / r * 1000000, 2)

respuesta: c
tipo: input
tolerancia_abs: 0.05

enunciado: "Se necesita una constante de tiempo de {tau} s con una resistencia de {r} Ω. ¿Qué capacidad hace falta, en µF?"

pasos:
  - "C = τ / R"
  - "Convertir a µF multiplicando por 1.000.000"

explicacion: |
  Se despeja C de τ = R × C.
```

### 5 — Resistencia necesaria

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "diseno"]

variables:
  c: uno_de([1, 10, 100])
  tau: uno_de([0.1, 0.5, 1])
  r: redondear(tau / (c / 1000000), 0)

respuesta: r
tipo: input
tolerancia_abs: 1

enunciado: "Con un capacitor de {c} µF se quiere una constante de tiempo de {tau} s. ¿Qué resistencia hace falta, en Ω?"

pasos:
  - "R = τ / C"

explicacion: |
  Se despeja R de τ = R × C.
```

### 6 — Tensión a un tau

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "carga"]

enunciado: "Después de un tiempo igual a τ, un capacitor que se carga alcanzó aproximadamente..."
tipo: mc
opciones_explicitas:
  - "El 63 % de la tensión final"
  - "El 37 % de la tensión final"
  - "El 100 % de la tensión final"
respuesta: "El 63 % de la tensión final"

explicacion: |
  Es el valor característico de la curva exponencial de carga.
```

### 7 — Tensión restante en descarga

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "descarga"]

enunciado: "Después de un tiempo τ de descarga, el capacitor conserva aproximadamente..."
tipo: mc
opciones_explicitas:
  - "El 37 % de la tensión inicial"
  - "El 63 % de la tensión inicial"
  - "Nada de tensión"
respuesta: "El 37 % de la tensión inicial"

explicacion: |
  En la descarga queda 1/e de la tensión inicial.
```

### 8 — Carga completa práctica

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "carga"]

enunciado: "En la práctica, se considera que un capacitor está cargado luego de aproximadamente..."
tipo: mc
opciones_explicitas:
  - "5τ"
  - "τ"
  - "0,5τ"
respuesta: "5τ"

explicacion: |
  A los 5τ queda menos del 1 % de diferencia.
```

### 9 — Carga instantánea

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "carga"]

respuesta: falso
tipo: vf

enunciado: "Un capacitor conectado a través de una resistencia se carga instantáneamente."

explicacion: |
  La resistencia limita la corriente y la tensión sube gradualmente.
```

### 10 — Más R, más lento

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc"]

respuesta: verdadero
tipo: vf

enunciado: "Si aumenta la resistencia del circuito RC, el capacitor tarda más en cargarse."

explicacion: |
  τ = R × C crece al aumentar R.
```

### 11 — Más C, más lento

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc"]

respuesta: verdadero
tipo: vf

enunciado: "Si aumenta la capacidad en un circuito RC, el capacitor tarda más en cargarse."

explicacion: |
  Hay más carga para acumular y τ crece.
```

### 12 — Carga exacta al 100 por ciento

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "carga"]

respuesta: falso
tipo: vf

enunciado: "Según el modelo exponencial, el capacitor llega exactamente al 100 % de la tensión de la fuente en un tiempo finito."

explicacion: |
  Se acerca asintóticamente; a los 5τ la diferencia es despreciable.
```

### 13 — Corriente al inicio

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "carga"]

respuesta: verdadero
tipo: vf

enunciado: "Al conectar un capacitor descargado, la corriente inicial es la máxima y luego disminuye."

explicacion: |
  Al principio la tensión del capacitor es cero y toda la tensión cae en la resistencia.
```

### 14 — Unidad de capacidad

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "vocabulario"]

tipo: completar
enunciado: "La capacidad de un capacitor se mide en ___."
respuestas_validas:
  - "faradios"

explicacion: |
  El faradio (F), con submúltiplos como µF, nF y pF.
```

### 15 — Símbolo de la constante

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "basico"
  tags: ["rc", "vocabulario"]

tipo: completar
enunciado: "La constante de tiempo de un circuito RC se representa con la letra griega ___ (tau)."
respuestas_validas:
  - "τ"
  - "tau"

explicacion: |
  τ = R × C.
```

### 16 — Filtro pasa bajos

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "filtros"]

enunciado: "Un filtro RC pasa bajos..."
tipo: mc
opciones_explicitas:
  - "Deja pasar las señales lentas y atenúa las rápidas"
  - "Deja pasar las rápidas y bloquea las lentas"
  - "No modifica ninguna señal"
respuesta: "Deja pasar las señales lentas y atenúa las rápidas"

explicacion: |
  Se usa, por ejemplo, para suavizar ruido.
```

### 17 — Filtro pasa altos

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "filtros"]

enunciado: "Un filtro RC pasa altos..."
tipo: mc
opciones_explicitas:
  - "Bloquea la continua y deja pasar las variaciones rápidas"
  - "Bloquea las señales rápidas"
  - "Amplifica la señal"
respuesta: "Bloquea la continua y deja pasar las variaciones rápidas"

explicacion: |
  El capacitor en serie no deja pasar la tensión continua.
```

### 18 — Frecuencia de corte

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "filtros"]

variables:
  r: uno_de([1000, 10000])
  c: uno_de([0.1, 1])
  fc: redondear(1 / (2 * pi * r * c / 1000000), 1)

respuesta: fc
tipo: input
tolerancia_abs: 0.5

enunciado: "Un filtro RC tiene R = {r} Ω y C = {c} µF. ¿Cuál es su frecuencia de corte, en Hz? (redondeá a un decimal)"

pasos:
  - "fc = 1 / (2π R C)"

explicacion: |
  La frecuencia de corte es fc = 1 / (2π R C).
```

### 19 — Tensión a un tau

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "calculo"]

variables:
  v: uno_de([5, 9, 12, 24])
  vc: redondear(v * (1 - e ^ (-1)), 2)

respuesta: vc
tipo: input
tolerancia_abs: 0.05

enunciado: "Un capacitor descargado se conecta a {v} V a través de una resistencia. ¿Qué tensión tiene luego de un tiempo igual a τ, en V? (redondeá a dos decimales)"

pasos:
  - "Vc = V × (1 − e^(−1))"

explicacion: |
  A t = τ la carga es aproximadamente el 63 % de V.
```

### 20 — Tensión en descarga a tau

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "calculo"]

variables:
  v0: uno_de([5, 10, 12, 24])
  vc: redondear(v0 * e ^ (-1), 2)

respuesta: vc
tipo: input
tolerancia_abs: 0.05

enunciado: "Un capacitor cargado a {v0} V se descarga por una resistencia. ¿Qué tensión queda al cabo de un tiempo τ, en V? (redondeá a dos decimales)"

pasos:
  - "Vc = V0 × e^(−1)"

explicacion: |
  A t = τ queda cerca del 37 % de V0.
```

### 21 — Dónde se usa

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "intermedio"
  tags: ["rc", "aplicaciones"]

enunciado: "¿Cuál es una aplicación típica de los circuitos RC?"
tipo: mc
opciones_explicitas:
  - "Antirrebote de pulsadores"
  - "Generar energía"
  - "Aumentar la tensión de la red"
respuesta: "Antirrebote de pulsadores"

explicacion: |
  También aparecen en temporizadores y filtros de fuentes.
```

### 22 — Efecto de duplicar R y C

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "calculo"]

enunciado: "Si se duplican tanto R como C, la constante de tiempo se..."
tipo: mc
opciones_explicitas:
  - "Cuadruplica"
  - "Duplica"
  - "Mantiene"
respuesta: "Cuadruplica"

explicacion: |
  τ = R × C, entonces 2R × 2C = 4RC.
```

### 23 — Capacitor y continua

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "filtros"]

respuesta: verdadero
tipo: vf

enunciado: "En régimen permanente con tensión continua, un capacitor cargado se comporta como un circuito abierto."

explicacion: |
  Cuando termina de cargarse, deja de circular corriente por él.
```

### 24 — Tau en segundos

```
metadata:
  materia: "electronica"
  tema: "capacitor_rc_carga_y_descarga"
  nivel: "avanzado"
  tags: ["rc", "calculo"]

enunciado: "Con R = 100 kΩ y C = 10 µF, la constante de tiempo es..."
tipo: mc
opciones_explicitas:
  - "1 s"
  - "10 s"
  - "0,1 s"
respuesta: "1 s"

explicacion: |
  100 000 × 0,00001 = 1 s.
```
