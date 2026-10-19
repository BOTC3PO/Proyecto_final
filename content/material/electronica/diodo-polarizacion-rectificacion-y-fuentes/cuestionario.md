# Electrónica — Diodo, rectificación y fuentes (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Sentido de conducción

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["diodo"]

enunciado: "Un diodo ideal conduce cuando..."
tipo: mc
opciones_explicitas:
  - "El ánodo es más positivo que el cátodo"
  - "El cátodo es más positivo que el ánodo"
  - "La tensión es alterna"
respuesta: "El ánodo es más positivo que el cátodo"

explicacion: |
  Esa es la polarización directa.
```

### 2 — Marca del cátodo

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["diodo"]

enunciado: "En el cuerpo de un diodo, la banda marca..."
tipo: mc
opciones_explicitas:
  - "El cátodo"
  - "El ánodo"
  - "La tensión máxima"
respuesta: "El cátodo"

explicacion: |
  La corriente entra por el ánodo y sale por el cátodo.
```

### 3 — Caída del silicio

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["diodo"]

enunciado: "La caída de tensión de un diodo de silicio en directa es de aproximadamente..."
tipo: mc
opciones_explicitas:
  - "0,7 V"
  - "5 V"
  - "0,07 V"
respuesta: "0,7 V"

explicacion: |
  El LED necesita más, según su color.
```

### 4 — Bloqueo inverso

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["diodo"]

respuesta: verdadero
tipo: vf

enunciado: "Un diodo polarizado en inversa bloquea el paso de corriente (salvo una pequeña fuga)."

explicacion: |
  En inversa se comporta casi como un circuito abierto.
```

### 5 — Resistencia para un LED

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["diodo", "calculo"]

variables:
  vf: uno_de([5, 9, 12])
  vled: uno_de([2, 2.2, 3])
  i: uno_de([10, 15, 20])
  r: redondear((vf - vled) / (i / 1000), 0)

respuesta: r
tipo: input
tolerancia_abs: 1

enunciado: "Un LED de {vled} V se alimenta con {vf} V y debe circular una corriente de {i} mA. ¿Qué resistencia en serie hace falta, en Ω?"

pasos:
  - "R = (Vfuente − Vled) / I"
  - "Convertir mA a A"

explicacion: |
  La resistencia limita la corriente cuando el LED fija su caída.
```

### 6 — Caída sobre la resistencia

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["diodo", "calculo"]

variables:
  vf: uno_de([6, 9, 12])
  v: vf - 0.7

respuesta: v
tipo: input
tolerancia_abs: 0.05

enunciado: "Un diodo de silicio conduce en serie con una resistencia alimentada con {vf} V. ¿Qué tensión cae sobre la resistencia, en V?"

pasos:
  - "Vr = V − 0,7 V"

explicacion: |
  Al diodo le corresponden unos 0,7 V.
```

### 7 — Corriente por el diodo

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["diodo", "calculo"]

variables:
  vf: uno_de([5, 9, 12])
  r: uno_de([430, 860, 1000])
  i: redondear((vf - 0.7) / r * 1000, 1)

respuesta: i
tipo: input
tolerancia_abs: 0.2

enunciado: "Un diodo de silicio y una resistencia de {r} Ω se conectan en serie a {vf} V. ¿Qué corriente circula, en mA? (redondeá a un decimal)"

pasos:
  - "I = (V − 0,7) / R"

explicacion: |
  Se resta la caída del diodo y se aplica Ohm.
```

### 8 — Etapas de la fuente

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["fuente"]

enunciado: "El orden correcto de las etapas de una fuente es..."
tipo: mc
opciones_explicitas:
  - "Transformador, rectificador, filtro, regulador"
  - "Regulador, filtro, rectificador, transformador"
  - "Filtro, transformador, regulador, rectificador"
respuesta: "Transformador, rectificador, filtro, regulador"

explicacion: |
  Primero se reduce la tensión, después se convierte en continua y se estabiliza.
```

### 9 — Función del rectificador

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["fuente"]

tipo: completar
enunciado: "El rectificador convierte la tensión alterna en una tensión de un solo ___ (polaridad)."
respuestas_validas:
  - "signo"
  - "sentido"
  - "polaridad"

explicacion: |
  Elimina o invierte la parte negativa.
```

### 10 — Media onda

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["rectificador"]

enunciado: "Un rectificador de media onda..."
tipo: mc
opciones_explicitas:
  - "Aprovecha un solo semiciclo"
  - "Aprovecha los dos semiciclos"
  - "Duplica la frecuencia"
respuesta: "Aprovecha un solo semiciclo"

explicacion: |
  Los semiciclos negativos quedan bloqueados.
```

### 11 — Onda completa

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["rectificador"]

enunciado: "Un puente rectificador de onda completa usa..."
tipo: mc
opciones_explicitas:
  - "Cuatro diodos"
  - "Un diodo"
  - "Dos resistencias"
respuesta: "Cuatro diodos"

explicacion: |
  Se llama puente de Graetz.
```

### 12 — Frecuencia de salida

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["rectificador", "calculo"]

variables:
  f: uno_de([50, 60])
  fs: f * 2

respuesta: fs
tipo: input
tolerancia_abs: 0.5

enunciado: "Un rectificador de onda completa se alimenta con {f} Hz. ¿Cuál es la frecuencia de los pulsos de salida, en Hz?"

pasos:
  - "Se duplica"

explicacion: |
  En onda completa hay dos pulsos por ciclo de entrada.
```

### 13 — Valor medio de media onda

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "avanzado"
  tags: ["rectificador", "calculo"]

variables:
  vp: uno_de([10, 12, 15, 20, 24])
  vdc: redondear(vp / pi, 2)

respuesta: vdc
tipo: input
tolerancia_abs: 0.05

enunciado: "Un rectificador de media onda ideal recibe una señal de pico {vp} V. ¿Cuál es el valor medio de la salida, en V? (redondeá a dos decimales)"

pasos:
  - "Vdc = Vp / π"

explicacion: |
  El valor medio es Vp dividido π.
```

### 14 — Valor medio de onda completa

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "avanzado"
  tags: ["rectificador", "calculo"]

variables:
  vp: uno_de([10, 12, 15, 20, 24])
  vdc: redondear(2 * vp / pi, 2)

respuesta: vdc
tipo: input
tolerancia_abs: 0.05

enunciado: "Un rectificador de onda completa ideal recibe una señal de pico {vp} V. ¿Cuál es el valor medio de la salida, en V? (redondeá a dos decimales)"

pasos:
  - "Vdc = 2 Vp / π"

explicacion: |
  El valor medio es el doble que en media onda.
```

### 15 — Pico en el puente

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["rectificador", "calculo"]

variables:
  vp: uno_de([10, 12, 15, 20, 24])
  vo: redondear(vp - 1.4, 2)

respuesta: vo
tipo: input
tolerancia_abs: 0.05

enunciado: "A un puente rectificador de silicio llega una señal de pico {vp} V. ¿Cuál es el pico de la salida, en V? (considerá 0,7 V por diodo y dos diodos en conducción)"

pasos:
  - "Vo = Vp − 2 × 0,7 V"

explicacion: |
  En cada semiciclo conducen dos diodos en serie.
```

### 16 — Función del capacitor

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["filtro"]

enunciado: "En una fuente, el capacitor de filtro sirve para..."
tipo: mc
opciones_explicitas:
  - "Suavizar la tensión rectificada"
  - "Reducir la tensión de la red"
  - "Bloquear la continua"
respuesta: "Suavizar la tensión rectificada"

explicacion: |
  Se carga en los picos y entrega energía entre ellos.
```

### 17 — Rizado y capacidad

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["filtro"]

respuesta: verdadero
tipo: vf

enunciado: "Con un capacitor de filtro mayor, el rizado de la tensión disminuye."

explicacion: |
  El capacitor se descarga menos entre pico y pico.
```

### 18 — Rizado y consumo

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["filtro"]

respuesta: verdadero
tipo: vf

enunciado: "Si aumenta el consumo de la carga, el rizado aumenta."

explicacion: |
  El capacitor se descarga más rápido entre picos.
```

### 19 — Función del regulador

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["regulador"]

enunciado: "Un regulador de tensión..."
tipo: mc
opciones_explicitas:
  - "Mantiene una tensión de salida fija"
  - "Convierte alterna en continua"
  - "Almacena energía"
respuesta: "Mantiene una tensión de salida fija"

explicacion: |
  Por ejemplo, un 7805 entrega 5 V.
```

### 20 — Diodo Zener

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "avanzado"
  tags: ["regulador"]

enunciado: "El diodo Zener se usa para..."
tipo: mc
opciones_explicitas:
  - "Fijar una tensión de referencia conduciendo en inversa"
  - "Rectificar la red"
  - "Emitir luz"
respuesta: "Fijar una tensión de referencia conduciendo en inversa"

explicacion: |
  En inversa conduce a una tensión definida.
```

### 21 — Red doméstica

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["fuente"]

respuesta: falso
tipo: vf

enunciado: "La red eléctrica domiciliaria en Argentina entrega corriente continua."

explicacion: |
  Entrega corriente alterna de 220 V y 50 Hz.
```

### 22 — Frecuencia de la red

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "basico"
  tags: ["fuente"]

tipo: completar
enunciado: "La frecuencia de la red eléctrica argentina es de ___ Hz."
respuestas_validas:
  - "50"

explicacion: |
  Es de 50 Hz.
```

### 23 — LED sin resistencia

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "intermedio"
  tags: ["diodo"]

respuesta: falso
tipo: vf

enunciado: "Un LED puede conectarse directamente a una fuente sin resistencia en serie."

explicacion: |
  Sin limitación, la corriente crece y lo destruye.
```

### 24 — Corriente de fuga

```
metadata:
  materia: "electronica"
  tema: "diodo_polarizacion_rectificacion_y_fuentes"
  nivel: "avanzado"
  tags: ["diodo"]

enunciado: "En un diodo polarizado en inversa, la corriente que circula es..."
tipo: mc
opciones_explicitas:
  - "Muy pequeña (corriente de fuga)"
  - "Igual a la directa"
  - "Infinita"
respuesta: "Muy pequeña (corriente de fuga)"

explicacion: |
  Hasta la tensión de ruptura, el diodo bloquea.
```
