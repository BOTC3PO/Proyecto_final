# Fisica — Potencia mecanica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["definicion", "trabajo", "tiempo"]

tipo: mc
opciones_explicitas: ["El trabajo realizado por unidad de tiempo", "La energía almacenada en un sistema", "La fuerza aplicada sobre un objeto", "El cambio en la velocidad de un cuerpo"]
respuesta: "El trabajo realizado por unidad de tiempo"
enunciado: "La potencia mecánica se define físicamente como ___."

explicacion: |
  La potencia mide la rapidez con la que se realiza un trabajo o se transfiere energía. Su fórmula es P = W/t.
```

### 2 — Unidades de Medida

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: vf
respuesta: falso

enunciado: "¿La unidad de potencia en el Sistema Internacional de Unidades (SI) es el Joule (J)?"

explicacion: |
  Falso. El Joule (J) es la unidad de trabajo o energía. La unidad de potencia es el Vatio (W), que equivale a 1 Joule por segundo (1 J/s).
```

### 3 — Relación Trabajo y Tiempo

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([[100, 10], [200, 20], [50, 5]])

tipo: completar
respuestas_validas:
  - 10.0
  - 10.0
  - 10.0
respuesta: escenario[0] / escenario[1]

enunciado: "Si un motor realiza un trabajo de {escenario[0]} J en un tiempo de {escenario[1]} s, la potencia mecánica resultante es de ___ W."

pasos:
  - "Identificar el trabajo (W): {escenario[0]} J"
  - "Identificar el tiempo (t): {escenario[1]} s"
  - "Aplicar la fórmula P = W / t"

explicacion: |
  Dividiendo el trabajo entre el tiempo obtenemos: {escenario[0]} / {escenario[1]} = {escenario[0]/escenario[1]} W.
```

### 4 — Análisis de Variables

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["proporcionalidad", "conceptos"]

tipo: mc
opciones_explicitas: ["Directamente proporcional al trabajo realizado", "Inversamente proporcional al tiempo", "Inversamente proporcional al trabajo realizado", "Directamente proporcional al tiempo"]
respuesta: "Directamente proporcional al trabajo realizado"

enunciado: "Si mantenemos el tiempo constante, la relación entre la potencia y el trabajo realizado es: ___."

explicacion: |
  Según la fórmula P = W/t: si W aumenta, P aumenta (directamente proporcional). Si t aumenta, P disminuye (inversamente proporcional).
```

### 5 — Orden de Conceptos

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["procesos", "conceptos"]

tipo: ordenar
opciones_explicitas: ["Aplicar una fuerza", "Desplazar un objeto", "Realizar un trabajo", "Calcular la potencia"]

enunciado: "Ordene lógicamente los pasos para determinar la potencia mecánica en un proceso físico:"

explicacion: |
  Primero debe existir una fuerza que cause un desplazamiento, lo cual genera un trabajo (W). Una vez obtenido el trabajo y el tiempo, se puede calcular la potencia (P).
respuesta_orden: ["Aplicar una fuerza", "Desplazar un objeto", "Realizar un trabajo", "Calcular la potencia"]
```

### 6 — Concepto de Potencia Mecánica

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["definicion", "trabajo", "tiempo"]

respuesta: "trabajo / tiempo"
tipo: completar
respuestas_validas:
  - "trabajo / tiempo"
  - "W / t"
  - "trabajo dividido tiempo"

enunciado: "La potencia mecánica se define matemáticamente como el ___ realizado por un objeto por unidad de tiempo."

explicacion: |
  La potencia (P) mide la rapidez con la que se realiza un trabajo (W). Su fórmula es P = W / t.
```

### 7 — Cálculo de Potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["calculo", "unidades"]

variables:
  escenario: uno_de([[100, 10, 10], [500, 5, 100], [1200, 20, 60]])

respuesta: escenario[2]

tipo: mc
opciones_explicitas: [10, 100, 60, 50]

enunciado: "Un motor realiza un trabajo de {escenario[0]} Joules en un tiempo de {escenario[1]} segundos. ¿Cuál es su potencia mecánica (en watts)?"

pasos:
  - "Identificar el trabajo (W): {escenario[0]} J"
  - "Identificar el tiempo (t): {escenario[1]} s"
  - "Aplicar la fórmula: P = W / t"
  - "Calcular: {escenario[0]} / {escenario[1]} = {escenario[2]}"

explicacion: |
  La potencia se calcula dividiendo el trabajo total por el tiempo empleado. En este caso: 100J / 10s = 10 W.
```

### 8 — Unidades de Medida

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "si_sistema"]

respuesta: verdadero

tipo: vf

enunciado: "¿La unidad de potencia en el Sistema Internacional (SI) es el Vatio (Watt), que equivale a 1 Julio por segundo?"

explicacion: |
  Correcto. 1 W = 1 J/s.
```

### 9 — Relación Trabajo y Potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "tiempo"]

variables:
  caso: uno_de([[10, 2], [20, 5], [30, 3]])

respuesta: caso[0] / caso[1]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un sistema realiza un trabajo de {caso[0]} J en {caso[1]} segundos, ¿cuántos Watts de potencia está desarrollando?"

pasos:
  - "Datos: W = {caso[0]} J, t = {caso[1]} s"
  - "Fórmula: P = W / t"
  - "Cálculo: {caso[0]} / {caso[1]}"

explicacion: |
  Dividiendo el trabajo entre el tiempo obtenemos la potencia: {caso[0]} / {caso[1]} = {caso[0] / caso[1]} W.
```

### 10 — Desglose de la Potencia (Ordenar)

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

respuesta_orden: ["Identificar el trabajo realizado (W) en Joules", "Identificar el tiempo transcurrido (t) en segundos", "Dividir el trabajo por el tiempo (W/t) para obtener Watts"]
tipo: ordenar
opciones_explicitas: ["Dividir el trabajo por el tiempo (W/t) para obtener Watts", "Identificar el trabajo realizado (W) en Joules", "Identificar el tiempo transcurrido (t) en segundos"]

enunciado: "Ordena los pasos lógicos para calcular la potencia mecánica de un objeto dado un trabajo y un tiempo."

explicacion: |
  Para resolver problemas de potencia, primero debemos asegurar que tenemos las magnitudes de trabajo y tiempo en unidades SI, y luego aplicar la división.
```

### 11 — Relación entre Trabajo y Potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "trabajo"]

respuesta: falso
tipo: vf

enunciado: "Si un objeto realiza el mismo trabajo que otro, pero lo hace en la mitad del tiempo, ambos han desarrollado la misma potencia mecánica."

explicacion: |
  La potencia se define como $P = W/t$. Si el tiempo disminuye, la potencia aumenta. Por lo tanto, quien realiza el mismo trabajo en menos tiempo es más potente.
```

### 12 — Unidades de la Potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

variables:
  idx: uno_de([0, 1, 2])
  trabajos: [100, 50, 10]
  tiempos: [5, 2, 10]

respuesta: trabajos[idx] / tiempos[idx]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcula la potencia mecánica realizada por un motor que efectúa un trabajo de {trabajos[idx]} J en un tiempo de {tiempos[idx]} s."

pasos:
  - "Identifica el trabajo realizado (W): {trabajos[idx]} J"
  - "Identifica el tiempo empleado (t): {tiempos[idx]} s"
  - "Aplica la fórmula P = W / t"

explicacion: |
  La potencia se calcula dividiendo el trabajo (Joules) por el tiempo (segundos), resultando en Watts (W).
```

### 13 — El error de la velocidad constante

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["dinamica", "conceptos"]

respuesta: "La potencia mecánica depende de la fuerza aplicada y la velocidad."
tipo: mc
opciones_explicitas: ["La potencia mecánica depende únicamente de la fuerza aplicada.", "La potencia mecánica depende únicamente de la velocidad del objeto.", "La potencia mecánica depende de la fuerza aplicada y la velocidad.", "La potencia mecánica no depende de la fuerza si la velocidad es constante."]

enunciado: "Un error común es pensar que si un objeto se mueve a velocidad constante, la potencia es cero. ¿Cuál es la relación correcta entre potencia, fuerza y velocidad?"

explicacion: |
  Para un objeto en movimiento, la potencia instantánea se puede expresar como $P = F \cdot v$. Aunque el trabajo neto sea cero en un ciclo cerrado, la potencia mecánica de la fuerza aplicada puede ser distinta de cero.
```

### 14 — Análisis de la fórmula de potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["analisis_dimensional"]

respuesta: verdadero
tipo: vf
enunciado: "Si duplicamos la fuerza aplicada a un objeto y también duplicamos su velocidad, la potencia mecánica resultante se cuadruplica."

explicacion: |
  Dado que $P = F \cdot v$, si $F' = 2F$ y $v' = 2v$, entonces $P' = (2F) \cdot (2v) = 4(F \cdot v)$, es decir, $4P$.
```

### 15 — Procedimiento para calcular potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "avanzado"
  tags: ["procedimiento", "calculo"]

variables:
  datos: uno_de([["1000 N", "5 m/s", "2 s"], ["500 N", "10 m/s", "5 s"], ["200 N", "2 m/s", "10 s"]])

respuesta_orden: ["Calcular el trabajo realizado (W = F * d)", "Identificar el tiempo total (t)", "Dividir el trabajo por el tiempo (P = W / t)"]
tipo: ordenar
opciones_explicitas: ["Calcular el trabajo realizado (W = F * d)", "Identificar el tiempo total (t)", "Dividir el trabajo por el tiempo (P = W / t)"]

enunciado: "Para calcular la potencia mecánica de un motor que levanta una carga de {datos[0]} con una velocidad de {datos[1]} durante {datos[2]}, ¿cuál es el orden lógico de resolución?"

explicacion: |
  Primero debemos obtener la energía transferida (Trabajo) o usar la relación directa de potencia instantánea, y finalmente dividir por el intervalo de tiempo.
```

### 16 — Potencia vs Trabajo

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "velocidad"
tipo: completar
respuestas_validas:
  - "velocidad"
  - "rapidez"
  - "aceleracion"

enunciado: "Mientras que el trabajo describe la transferencia de energía en un proceso, la potencia describe la ___ con la que se realiza dicho trabajo."

explicacion: |
  La potencia es la rapidez con la que se realiza un trabajo o se transfiere energía. Se define matemáticamente como el trabajo realizado dividido por el tiempo empleado ($P = W/t$).
```

### 17 — Relación entre Trabajo y Tiempo

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([[100, 2, 50], [100, 5, 20], [100, 10, 10]])
  valor_w: escenario[0]
  valor_t: escenario[1]
  valor_p: escenario[2]

respuesta: valor_p
tipo: mc
opciones_explicitas: [20, 50, 10, 100]

enunciado: "Si un sistema realiza un trabajo de {valor_w} Joules en un tiempo de {valor_t} segundos, su potencia mecánica es de ___ Watts."

explicacion: |
  Aplicando la fórmula $P = W/t$, tenemos que $P = {valor_w} / {valor_t} = {valor_p}$ W.
```

### 18 — Potencia y Tiempo (Verdadero o Falso)

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos", "tiempo"]

respuesta: falso
tipo: vf

enunciado: "Si se realiza el mismo trabajo en el doble de tiempo, la potencia mecánica resultante será el doble de la potencia original."

explicacion: |
  Falso. Como la potencia es inversamente proporcional al tiempo ($P \propto 1/t$), si el tiempo se duplica, la potencia se reduce a la mitad.
```

### 19 — Unidades de Medida

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

respuesta: "W"
tipo: mc
opciones_explicitas: ["J", "W", "N", "m/s"]

enunciado: "En el Sistema Internacional (SI), la unidad de potencia mecánica es el ___ (Watt), que equivale a un Joule por segundo."

explicacion: |
  El Watt (W) es la unidad derivada que combina la unidad de trabajo (Joule) y la de tiempo (segundo).
```

### 20 — Comparación de Escenarios

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["comparacion", "calculo"]

variables:
  caso: uno_de([[100, 2, 50], [200, 5, 40], [50, 10, 5]])
  w: caso[0]
  t: caso[1]
  p: caso[2]

respuesta: p
tipo: completar
tolerancia_abs: 0

enunciado: "Un motor realiza un trabajo de {w} J en un intervalo de tiempo de {t} s. ¿Cuál es su potencia en Watts?"

pasos:
  - "Identificar el trabajo (W) y el tiempo (t)."
  - "Dividir el trabajo por el tiempo: P = W / t."

explicacion: |
  El cálculo realizado es $P = {w} / {t} = {p}$ W.
```

### 21 — Potencia de un motor de elevación

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["trabajo", "tiempo", "potencia"]

variables:
  escenario: uno_de([[1000, 500, 2000], [2500, 1000, 400], [1500, 800, 600]])
  w: escenario[0]
  t: escenario[1]
  p: escenario[2]

respuesta: w / t
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un motor realiza un trabajo de {w} J para elevar una carga durante un tiempo de {t} s. ¿Cuál es la potencia mecánica desarrollada por el motor en Watts?"

pasos:
  - "Identificar el trabajo realizado (W = {w} J)"
  - "Identificar el tiempo transcurrido (t = {t} s)"
  - "Aplicar la fórmula de potencia: P = W / t"

explicacion: |
  La potencia mecánica se define como la rapidez con la que se realiza un trabajo. 
  En este caso: P = {w} J / {t} s = {redondear(w/t, 2)} W.
```

### 22 — Análisis de potencia mecánica

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["conceptos", "unidades"]

respuesta: "W"
tipo: mc
opciones_explicitas: ["J", "W", "N", "m/s"]

enunciado: "Si un objeto realiza un trabajo de 500 Joules en 10 segundos, la unidad de medida de la potencia resultante es la unidad de..."

explicacion: |
  La potencia es la relación entre trabajo (J) y tiempo (s). 
  J/s es equivalente a la unidad de potencia, el Watt (W).
```

### 23 — Comparación de potencias

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["comparacion", "calculo"]

variables:
  datos: [[100, 5, 1000, 20], [50, 2, 500, 50], [200, 10, 100, 5]]
  idx: uno_de([0, 1, 2])
  w1: datos[idx][0]
  t1: datos[idx][1]
  w2: datos[idx][2]
  t2: datos[idx][3]
  p1: w1 / t1
  p2: w2 / t2

respuesta: p1 > p2
tipo: vf
enunciado: "Se comparan dos máquinas. La máquina A realiza {w1} J en {t1} s. La máquina B realiza {w2} J en {t2} s. ¿Es la potencia de la máquina A mayor que la de la máquina B?"

explicacion: |
  Calculamos las potencias:
  P_A = {w1} / {t1} = {redondear(p1, 2)} W
  P_B = {w2} / {t2} = {redondear(p2, 2)} W
  La afirmación es {p1 > p2}.
```

### 24 — Cálculo de tiempo necesario

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["despeje", "tiempo"]

variables:
  escenario: uno_de([[500, 100], [1200, 300], [400, 50]])
  w: escenario[0]
  p: escenario[1]
  t: w / p

respuesta: t
tipo: completar
respuestas_validas:
  - 5
  - 4
  - 8

enunciado: "Una máquina tiene una potencia constante de {p} W. ¿Cuántos segundos tardará en realizar un trabajo de {w} J? La respuesta es ___ s."

explicacion: |
  Para hallar el tiempo, despejamos la fórmula de potencia:
  P = W / t  =>  t = W / P
  t = {w} / {p} = {t} s.
```

### 25 — Orden de procesos para calcular potencia

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular el trabajo realizado", "Dividir el trabajo por el tiempo", "Identificar los datos de trabajo y tiempo"]
respuesta_orden: ["Identificar los datos de trabajo y tiempo", "Calcular el trabajo realizado", "Dividir el trabajo por el tiempo"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide la potencia, pero solo se conocen la fuerza, la distancia y el tiempo."

pasos:
  - "Paso 1: Identificar los datos de trabajo y tiempo"
  - "Paso 2: Calcular el trabajo realizado (W = F * d)"
  - "Paso 3: Dividir el trabajo por el tiempo (P = W / t)"

explicacion: |
  Primero debemos obtener el trabajo (W) usando la fuerza y la distancia, y luego aplicar la definición de potencia dividiendo por el tiempo.
```
