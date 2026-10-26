# Electrónica — Inductores y bobinas (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Unidad de inductancia

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor"]

enunciado: "La inductancia se mide en..."
tipo: mc
opciones_explicitas:
  - "Henrios"
  - "Faradios"
  - "Ohmios"
respuesta: "Henrios"

explicacion: |
  El henrio (H); se usan mH y µH.
```

### 2 — Qué es un inductor

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor"]

enunciado: "Un inductor está formado básicamente por..."
tipo: mc
opciones_explicitas:
  - "Un alambre enrollado, a veces sobre un núcleo magnético"
  - "Dos placas separadas por un aislante"
  - "Una unión de semiconductores"
respuesta: "Un alambre enrollado, a veces sobre un núcleo magnético"

explicacion: |
  El capacitor son dos placas; el diodo, una unión.
```

### 3 — A qué se opone

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor"]

enunciado: "Un inductor se opone a..."
tipo: mc
opciones_explicitas:
  - "Los cambios de corriente"
  - "Los cambios de tensión"
  - "La existencia de corriente continua constante"
respuesta: "Los cambios de corriente"

explicacion: |
  Si la corriente no cambia, no hay tensión inducida.
```

### 4 — Cambio de corriente

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor"]

respuesta: verdadero
tipo: vf

enunciado: "Si la corriente que circula por un inductor es constante, la tensión inducida es cero."

explicacion: |
  La tensión inducida depende de la rapidez de cambio de la corriente.
```

### 5 — Inductor en continua

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor", "continua"]

enunciado: "En régimen permanente de corriente continua, un inductor ideal se comporta como..."
tipo: mc
opciones_explicitas:
  - "Un cortocircuito"
  - "Un circuito abierto"
  - "Una resistencia alta"
respuesta: "Un cortocircuito"

explicacion: |
  Es el comportamiento opuesto al del capacitor.
```

### 6 — Tensión inducida

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "calculo"]

variables:
  l: uno_de([1, 2, 5, 10])
  di: uno_de([0.5, 1, 2, 4])
  dt: uno_de([0.1, 0.5, 1, 2])
  v: redondear(l * di / dt, 2)

respuesta: v
tipo: input
tolerancia_abs: 0.02

enunciado: "Un inductor de {l} H ve cambiar su corriente {di} A en {dt} s. ¿Qué tensión se induce, en V?"

pasos:
  - "V = L × (ΔI / Δt)"

explicacion: |
  La tensión es la inductancia por la rapidez de cambio.
```

### 7 — Constante de tiempo RL

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor", "calculo"]

variables:
  l: uno_de([0.1, 0.5, 1, 2])
  r: uno_de([10, 20, 50, 100])
  t: redondear(l / r, 4)

respuesta: t
tipo: input
tolerancia_abs: 0.0005

enunciado: "Un circuito RL tiene L = {l} H y R = {r} Ω. ¿Cuánto vale la constante de tiempo, en segundos?"

pasos:
  - "τ = L / R"

explicacion: |
  En un circuito RL, τ = L / R.
```

### 8 — Corriente final

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "calculo"]

variables:
  v: uno_de([6, 12, 24])
  r: uno_de([10, 20, 30, 60])
  i: redondear(v / r, 3)

respuesta: i
tipo: input
tolerancia_abs: 0.002

enunciado: "Un inductor ideal en serie con una resistencia de {r} Ω se conecta a {v} V de continua. ¿Qué corriente alcanza en régimen permanente, en A?"

pasos:
  - "I = V / R"
  - "El inductor ideal no tiene caída en continua"

explicacion: |
  En régimen permanente solo limita la resistencia.
```

### 9 — Reactancia inductiva

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "calculo"]

variables:
  l: uno_de([0.1, 0.2, 0.5])
  f: uno_de([50, 100, 500])
  x: redondear(2 * pi * f * l, 1)

respuesta: x
tipo: input
tolerancia_abs: 0.2

enunciado: "Un inductor de {l} H trabaja a {f} Hz. ¿Cuánto vale su reactancia inductiva, en Ω? (redondeá a un decimal)"

pasos:
  - "XL = 2π × f × L"

explicacion: |
  La reactancia inductiva crece con la frecuencia.
```

### 10 — Reactancia y frecuencia

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor", "alterna"]

respuesta: verdadero
tipo: vf

enunciado: "La reactancia inductiva aumenta cuando aumenta la frecuencia."

explicacion: |
  XL = 2π × f × L.
```

### 11 — Filtro con inductor

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "filtros"]

enunciado: "Por su reactancia, un inductor en serie con una línea tiende a..."
tipo: mc
opciones_explicitas:
  - "Bloquear las altas frecuencias"
  - "Bloquear la continua"
  - "Amplificar las señales"
respuesta: "Bloquear las altas frecuencias"

explicacion: |
  Deja pasar la continua y frena las altas frecuencias.
```

### 12 — Comparación con el capacitor

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "capacitor"]

enunciado: "Respecto de la frecuencia, el inductor se comporta..."
tipo: mc
opciones_explicitas:
  - "De forma opuesta al capacitor"
  - "Igual que el capacitor"
  - "Igual que una resistencia"
respuesta: "De forma opuesta al capacitor"

explicacion: |
  El capacitor deja pasar altas frecuencias y bloquea continua; el inductor, al revés.
```

### 13 — Constante RL

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "vocabulario"]

tipo: completar
enunciado: "En un circuito RL la constante de tiempo es L dividido ___."
respuestas_validas:
  - "R"
  - "la resistencia"

explicacion: |
  τ = L / R.
```

### 14 — Unidad de L

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "basico"
  tags: ["inductor", "vocabulario"]

tipo: completar
enunciado: "La inductancia se mide en ___."
respuestas_validas:
  - "henrios"

explicacion: |
  El henrio.
```

### 15 — Tiempo de establecimiento

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "continua"]

enunciado: "En un circuito RL, la corriente llega a su valor final prácticamente luego de..."
tipo: mc
opciones_explicitas:
  - "Unos 5τ"
  - "Un instante"
  - "Una hora"
respuesta: "Unos 5τ"

explicacion: |
  Igual que la carga de un capacitor.
```

### 16 — Interrupción brusca

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "proteccion"]

respuesta: verdadero
tipo: vf

enunciado: "Interrumpir bruscamente la corriente de un inductor puede producir una tensión inducida muy alta."

explicacion: |
  Por eso se protege con un diodo de rueda libre.
```

### 17 — Diodo de protección

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "proteccion"]

tipo: completar
enunciado: "El diodo que se coloca en paralelo con una bobina para proteger el circuito se llama diodo de rueda ___."
respuestas_validas:
  - "libre"

explicacion: |
  Da un camino a la corriente de la bobina al abrir el interruptor.
```

### 18 — Dónde se usa

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "intermedio"
  tags: ["inductor", "aplicaciones"]

enunciado: "Un uso típico de un inductor es..."
tipo: mc
opciones_explicitas:
  - "En fuentes conmutadas para almacenar energía"
  - "Como indicador de tensión"
  - "Para producir luz"
respuesta: "En fuentes conmutadas para almacenar energía"

explicacion: |
  También se usa en filtros y sintonía.
```

### 19 — Transformador

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor", "transformador"]

respuesta: verdadero
tipo: vf

enunciado: "Un transformador está formado por dos bobinas acopladas por un mismo núcleo."

explicacion: |
  La corriente variable de una bobina induce tensión en la otra.
```

### 20 — Efecto del núcleo

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor"]

enunciado: "Colocar un núcleo de material magnético dentro de una bobina..."
tipo: mc
opciones_explicitas:
  - "Aumenta su inductancia"
  - "Disminuye su inductancia"
  - "No la modifica"
respuesta: "Aumenta su inductancia"

explicacion: |
  El núcleo concentra el campo magnético.
```

### 21 — Duplicar frecuencia

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor", "calculo"]

variables:
  x1: uno_de([100, 200, 300, 500])
  x2: x1 * 2

respuesta: x2
tipo: input
tolerancia_abs: 0.5

enunciado: "Un inductor tiene una reactancia de {x1} Ω a cierta frecuencia. Si la frecuencia se duplica, ¿cuánto vale la reactancia, en Ω?"

pasos:
  - "XL es proporcional a f"

explicacion: |
  Al duplicar f se duplica XL.
```

### 22 — Rapidez de cambio

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor"]

enunciado: "Si la corriente cambia el doble de rápido, la tensión inducida en un mismo inductor..."
tipo: mc
opciones_explicitas:
  - "Se duplica"
  - "Se reduce a la mitad"
  - "No cambia"
respuesta: "Se duplica"

explicacion: |
  V = L × ΔI / Δt.
```

### 23 — Inductor en cualquier frecuencia

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor"]

respuesta: falso
tipo: vf

enunciado: "Un inductor ideal se opone igual a todas las frecuencias."

explicacion: |
  Su reactancia crece con la frecuencia.
```

### 24 — Sintonía

```
metadata:
  materia: "electronica"
  tema: "inductores_y_bobinas"
  nivel: "avanzado"
  tags: ["inductor", "aplicaciones"]

enunciado: "En un receptor de radio, los inductores combinados con capacitores sirven para..."
tipo: mc
opciones_explicitas:
  - "Sintonizar una frecuencia"
  - "Almacenar datos"
  - "Medir la temperatura"
respuesta: "Sintonizar una frecuencia"

explicacion: |
  Un circuito LC resuena a una frecuencia determinada.
```
