# Fisica — Oscilacion periodo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Oscilación

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["definicion", "movimiento"]

respuesta: "oscilación"
tipo: completar
respuestas_validas:
  - "oscilación"
  - "oscilacion"

enunciado: "El movimiento de vaivén de un objeto alrededor de una posición de equilibrio se denomina ___."

explicacion: |
  Una oscilación es un movimiento repetitivo que pasa por una posición de equilibrio, como un péndulo o un resorte.
```

### 2 — El concepto de Periodo

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["periodo", "tiempo"]

respuesta: "el tiempo que tarda en realizarse un ciclo completo"
tipo: mc
opciones_explicitas: ["el tiempo que tarda en realizarse un ciclo completo", "la cantidad de ciclos por unidad de tiempo", "la distancia máxima desde el equilibrio"]

enunciado: "El periodo (T) se define como: ___."

explicacion: |
  El periodo es precisamente el intervalo de tiempo necesario para que el sistema complete un ciclo completo de movimiento.
```

### 3 — Veracidad del movimiento periódico

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["verdadero_falso"]

respuesta: falso
tipo: vf

enunciado: "¿Un movimiento que solo se desplaza en una sola dirección sin volver nunca a su punto de origen es un movimiento oscilatorio?"

explicacion: |
  Falso. Para que sea oscilatorio, el objeto debe regresar a su posición de partida y repetir el ciclo.
```

### 4 — Unidades de medida

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

respuesta: "s"
tipo: mc
opciones_explicitas: ["s", "m", "Hz"]

enunciado: "Dado que el periodo mide el tiempo de un ciclo, su unidad en el Sistema Internacional es ___."

explicacion: |
  El tiempo se mide en segundos (s) en el SI. El metro (m) es longitud y el Hertz (Hz) es frecuencia.
```

### 5 — Secuencia de un ciclo completo

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["secuencia", "puntos_criticos"]

variables:
  secuencia: ["Equilibrio", "Amplitud máxima positiva", "Equilibrio", "Amplitud máxima negativa", "Equilibrio"]

respuesta_orden: secuencia
tipo: ordenar
opciones_explicitas: ["Equilibrio", "Amplitud máxima positiva", "Equilibrio", "Amplitud máxima negativa", "Equilibrio"]

enunciado: "Ordene los puntos de trayectoria de un objeto que oscila de forma simple, comenzando desde su posición de equilibrio:"

explicacion: |
  En una oscilación completa, el objeto pasa por el equilibrio, alcanza un extremo, vuelve al equilibrio, alcanza el extremo opuesto y regresa al equilibrio.
```

### 6 — Concepto de Periodo

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "el tiempo que tarda en completarse un ciclo completo"
tipo: completar
respuestas_validas:
  - "el tiempo que tarda en completarse un ciclo completo"
  - "el tiempo de un ciclo completo"

enunciado: "En un movimiento oscilatorio, el periodo se define como ___"

explicacion: |
  El periodo (T) es el intervalo de tiempo necesario para que un objeto complete un ciclo completo de movimiento y regrese a su posición inicial con la misma velocidad y dirección.
```

### 7 — Cálculo de Frecuencia

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["calculo", "frecuencia"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, 2.0], [0.2, 5.0]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: [2.0, 5.0, 0.5, 1.0]

enunciado: "Si un objeto realiza un ciclo completo en {datos[idx][0]} segundos, ¿cuál es su frecuencia en Hz?"

pasos:
  - "Identificar el periodo (T): T = {datos[idx][0]} s"
  - "Usar la fórmula de la frecuencia: f = 1 / T"
  - "Calcular: f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz"

explicacion: |
  La frecuencia (f) es el inverso del periodo (T). Si T = {datos[idx][0]} s, entonces f = 1 / {datos[idx][0]} = {datos[idx][1]} Hz.
```

### 8 — Relación Periodo y Frecuencia

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["relacion", "frecuencia"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que si la frecuencia de un oscilador aumenta, su periodo también aumenta?"

explicacion: |
  Falso. La relación es inversamente proporcional: T = 1/f. Si la frecuencia aumenta, el periodo disminuye (el ciclo es más rápido).
```

### 9 — Periodo de un Péndulo Simple

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "avanzado"
  tags: ["pendulo", "calculo"]

variables:
  idx: uno_de([0, 1])
  longitudes: [1.0, 0.4]

respuesta: 2 * 3.14159 * sqrt(longitudes[idx] / 9.8)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un péndulo simple tiene una longitud de {longitudes[idx]} metros. Calcula su periodo (T) usando la fórmula T = 2 * pi * sqrt(L / g). (Usa g = 9.8 m/s²)"

pasos:
  - "L = {longitudes[idx]} m"
  - "T = 2 * pi * sqrt({longitudes[idx]} / 9.8)"
  - "T = 2 * 3.14159 * sqrt({longitudes[idx] / 9.8})"

explicacion: |
  Aplicando la fórmula: T = 2 * pi * sqrt(L / 9.8) ≈ {2 * 3.14159 * sqrt(longitudes[idx] / 9.8)} s.
```

### 10 — Secuencia de un Ciclo Completo

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["movimiento", "secuencia"]

respuesta_orden: ["Extremo A", "Punto de equilibrio", "Extremo B", "Punto de equilibrio"]
tipo: ordenar
opciones_explicitas: ["Extremo A", "Punto de equilibrio", "Extremo B", "Punto de equilibrio"]

enunciado: "Ordena las posiciones que recorre un objeto en un ciclo completo de oscilación, partiendo desde el extremo derecho (A):"

explicacion: |
  Un ciclo completo implica ir de un extremo al otro y volver al punto de partida, pasando por el centro en cada tramo.
```

### 11 — ¿Qué es un ciclo?

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["conceptos_basicos", "periodo"]

respuesta: "un ciclo completo"
tipo: completar
respuestas_validas:
  - "un ciclo completo"
  - "un ciclo"

enunciado: "En un movimiento oscilatorio, el tiempo necesario para que el objeto complete ___ se denomina periodo."

explicacion: |
  El periodo es el intervalo de tiempo que transcurre entre dos instantes sucesivos en los que el sistema vuelve a pasar por el mismo estado (misma posición y misma dirección).
```

### 12 — Confusión entre Periodo y Frecuencia

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["frecuencia", "periodo"]

variables:
  datos: [["0.5", "2"], ["2", "0.5"]]
  idx: uno_de([0, 1])
  periodo: datos[idx][0]
  frecuencia_correcta: datos[idx][1]

respuesta: frecuencia_correcta
tipo: completar

enunciado: "Si un objeto realiza un movimiento oscilatorio con un periodo de {periodo} segundos, su frecuencia es de ___."

explicacion: |
  La frecuencia (f) es el inverso del periodo (T), es decir, f = 1/T. Si T = 0.5s, f = 1/0.5 = 2 Hz. Si T = 2s, f = 1/2 = 0.5 Hz.
```

### 13 — ¿El periodo es siempre constante?

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["isocronismo", "veracidad"]

respuesta: falso
tipo: vf

enunciado: "En un péndulo simple ideal (sin fricción), el periodo de oscilación depende de la amplitud del movimiento (si la amplitud es muy grande)."

explicacion: |
  Para ángulos pequeños, el péndulo es isócrono, lo que significa que su periodo es independiente de la amplitud. En el modelo ideal de física básica, asumimos que el periodo es constante sin importar la amplitud.
```

### 14 — El error de la posición central

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["fase", "ciclo"]

respuesta: "punto de equilibrio"
tipo: completar
respuestas_validas:
  - "punto de equilibrio"
  - "posición de equilibrio"

enunciado: "Un ciclo completo de oscilación se define como el tiempo que tarda el objeto en ir desde el ___ hasta el extremo opuesto y regresar al mismo punto inicial."

explicacion: |
  Un error común es pensar que el ciclo solo ocurre entre extremos. El ciclo es el recorrido completo que incluye pasar por el punto de equilibrio en ambas direcciones.
```

### 15 — Componentes de una oscilación

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["secuencia", "movimiento"]

respuesta_orden: ["extremo", "punto de equilibrio", "extremo opuesto", "punto de equilibrio"]
tipo: ordenar
opciones_explicitas: ["extremo", "punto de equilibrio", "extremo opuesto", "punto de equilibrio"]

enunciado: "Ordena la secuencia de posiciones que recorre un objeto que oscila, partiendo desde un extremo hacia el otro y regresando:"

explicacion: |
  Para completar un ciclo completo, el objeto debe recorrer la distancia total de ida y vuelta, pasando por el centro (punto de equilibrio) en cada tramo.
```

### 16 — Diferencia entre periodo y frecuencia

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["periodo", "frecuencia", "conceptos_basicos"]

variables:
  frecuencia_ejemplo: 5.0

respuesta: "El tiempo que tarda en completarse un ciclo"
tipo: mc
opciones_explicitas: ["El tiempo que tarda en completarse un ciclo", "El número de ciclos por unidad de tiempo", "La distancia máxima desde el punto de equilibrio", "La velocidad máxima del objeto"]

enunciado: "Si un péndulo realiza un movimiento repetitivo, ¿qué magnitud representa el tiempo necesario para que se complete un ciclo completo?"

explicacion: |
  El periodo (T) es el tiempo necesario para completar un ciclo, mientras que la frecuencia (f) es la cantidad de ciclos que ocurren en un segundo. Son inversamente proporcionales: f = 1/T.
```

### 17 — El concepto de ciclo completo

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["ciclo", "movimiento_repetitivo"]

respuesta: verdadero
tipo: vf
enunciado: "En un movimiento oscilatorio, un 'ciclo completo' implica que el objeto regresa exactamente a su posición inicial con la misma dirección de movimiento que tenía al comenzar."

explicacion: |
  Correcto. Para que un movimiento sea considerado periódico y completar un ciclo, el sistema debe volver al mismo estado (posición y velocidad) para iniciar una nueva repetición.
```

### 18 — Relación inversa periodo-frecuencia

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["calculo", "frecuencia", "periodo"]

variables:
  idx: uno_de([0, 1])
  datos: [[2.0, 0.5], [0.5, 2.0]]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - 0.5
  - 2.0

enunciado: "Si el periodo de una oscilación es de {datos[idx][0]} segundos, la frecuencia de dicha oscilación es de ___ Hz."

pasos:
  - "Identificar el valor del periodo (T = {datos[idx][0]})"
  - "Aplicar la fórmula de la frecuencia: f = 1 / T"

explicacion: |
  Utilizando la relación f = 1/T, si T = {datos[idx][0]}, entonces f = 1/{datos[idx][0]} = {datos[idx][1]} Hz.
```

### 19 — Comparación: Periodo vs Amplitud

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["amplitud", "periodo", "distincion"]

respuesta: "Amplitud"
tipo: mc
opciones_explicitas: ["Amplitud", "Frecuencia", "Aceleración", "Velocidad"]

enunciado: "Mientras que el periodo mide el tiempo de un ciclo, la ___ mide la distancia máxima desde la posición de equilibrio."

explicacion: |
  La amplitud es una medida de longitud (distancia), mientras que el periodo es una medida de tiempo.
```

### 20 — Secuencia de un ciclo de oscilación

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["secuencia", "ciclo", "posicion"]

respuesta_orden: ["Extremo derecho", "Punto de equilibrio", "Extremo izquierdo", "Punto de equilibrio", "Extremo derecho"]
tipo: ordenar
opciones_explicitas: ["Extremo derecho", "Punto de equilibrio", "Extremo izquierdo", "Punto de equilibrio", "Extremo derecho"]

enunciado: "Ordena las posiciones que recorre un objeto que oscila, comenzando desde su máxima elongación a la derecha, hasta completar un ciclo completo."

explicacion: |
  Un ciclo completo implica volver al punto de partida tras haber pasado por el centro y el extremo opuesto. La secuencia lógica es: Máximo (+A) -> Centro (0) -> Mínimo (-A) -> Centro (0) -> Regreso al Máximo (+A).
```

### 21 — El péndulo del reloj

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["pendulo", "periodo"]

variables:
  datos: [["un péndulo de 1 metro", 2.0], ["un péndulo de 0.25 metros", 1.0]]
  idx: uno_de([0, 1])

enunciado: "En un reloj antiguo, observamos que {datos[idx][0]} completa un ciclo de vaivén en {datos[idx][1]} segundos. ¿Cuál es el periodo de este movimiento?"

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  El periodo (T) es el tiempo necesario para completar un ciclo completo de movimiento. En este caso, el tiempo dado es el periodo.
```

### 22 — El ritmo del corazón

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["frecuencia", "ritmo_cardiaco"]

variables:
  frecuencia_corazon: uno_de([60, 75, 120])

enunciado: "Un atleta tiene una frecuencia cardíaca de {frecuencia_corazon} latidos por minuto. Si consideramos cada latido como un ciclo de oscilación, ¿cuántos segundos tarda en realizar un solo latido (periodo)?"

pasos:
  - "Convertir la frecuencia de latidos/minuto a latidos/segundo: {frecuencia_corazon} / 60"
  - "Calcular el periodo como el inverso de la frecuencia: 1 / (frecuencia_corazon / 60)"

respuesta: 60 / frecuencia_corazon
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El periodo es el inverso de la frecuencia. Si el atleta tiene {frecuencia_corazon} latidos por minuto, el periodo es 60/{frecuencia_corazon} segundos.
```

### 23 — El vaivén de un columpio

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["oscilacion", "conceptos"]

enunciado: "Si un niño en un columpio completa 10 oscilaciones completas en un tiempo total de 20 segundos, ¿cuál es el periodo de la oscilación?"

opciones_explicitas: ["0.5 s", "2.0 s", "20 s", "200 s"]
respuesta: "2.0 s"
tipo: mc

explicacion: |
  El periodo T se calcula dividiendo el tiempo total entre el número de oscilaciones: T = tiempo / n = 20s / 10 = 2.0 s.
```

### 24 — Conceptos de movimiento periódico

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["teoria"]

enunciado: "Un movimiento se considera periódico si se repite en intervalos de tiempo iguales. Si un objeto realiza un ciclo completo, ¿el tiempo transcurrido es el periodo?"

respuesta: verdadero
tipo: vf

explicacion: |
  Exactamente. Por definición, el periodo es el tiempo requerido para que el sistema complete una oscilación o ciclo completo.
```

### 25 — Fases del ciclo de un pistón

```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["fases", "ciclo"]

variables:
  estado_inicial: ["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"]

enunciado: "Un pistón de motor realiza un movimiento oscilatorio. Si su estado inicial es {estado_inicial[0]}, ordene los eventos que marcan un ciclo completo de oscilación."

opciones_explicitas: ["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"]
respuesta_orden: ["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"]
tipo: ordenar

explicacion: |
  Un ciclo completo debe pasar por todos los puntos de la trayectoria y regresar al punto de partida para ser considerado una oscilación cerrada.
```
