# Examen jefe — [PENDIENTE #746]

> Logro #746. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: oscilacion-periodo (25 preguntas)

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

## Sección: plano-inclinado-y-rozamiento (29 preguntas)

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["plano_inclinado", "vocabulario"]

enunciado: "¿Qué es un plano inclinado?"
tipo: mc
opciones_explicitas:
  - "Una superficie que forma un ángulo con la horizontal, como una rampa"
  - "Una superficie perfectamente vertical"
  - "Otro nombre para una superficie sin rozamiento"
respuesta: "Una superficie que forma un ángulo con la horizontal, como una rampa"

explicacion: |
  El peso de un objeto sobre esa superficie se descompone en dos
  componentes.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado", "completar"]

tipo: completar
enunciado: "Completá: la componente del peso paralela al plano inclinado es P∥ = peso × ___(θ)."
respuestas_validas:
  - "sen"
  - "seno"

explicacion: |
  Es la componente que empuja al objeto a deslizar por la rampa.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado", "completar"]

tipo: completar
enunciado: "Completá: la componente del peso perpendicular al plano inclinado es P⊥ = peso × ___(θ)."
respuestas_validas:
  - "cos"
  - "coseno"

explicacion: |
  Es la componente que presiona al objeto contra la superficie.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  sen_30: 0.5

respuesta: peso * sen_30
tipo: input
tolerancia_abs: 0.5

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 30° (sen 30° = 0,5). ¿Cuál es la componente del peso paralela al plano?"

pasos:
  - "{peso} × 0,5 = {peso * sen_30} N"

explicacion: |
  P∥ = peso × sen(θ).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  cos_30: 0.87

respuesta: redondear(peso * cos_30, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 30° (cos 30° ≈ 0,87). ¿Cuál es la componente del peso perpendicular al plano?"

pasos:
  - "{peso} × 0,87 = {redondear(peso * cos_30, 1)} N"

explicacion: |
  P⊥ = peso × cos(θ).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  sen_60: 0.87

respuesta: redondear(peso * sen_60, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 60° (sen 60° ≈ 0,87). ¿Cuál es la componente del peso paralela al plano?"

pasos:
  - "{peso} × 0,87 = {redondear(peso * sen_60, 1)} N"

explicacion: |
  Con un ángulo más pronunciado (60° en vez de 30°), la componente que
  empuja a deslizar es mayor.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60])
  cos_45: 0.71

respuesta: redondear(peso * cos_45, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 45° (cos 45° ≈ 0,71). ¿Cuál es la normal que ejerce el plano sobre el objeto?"

pasos:
  - "{peso} × 0,71 = {redondear(peso * cos_45, 1)} N"

explicacion: |
  La normal equilibra sólo la componente perpendicular del peso.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado"]

respuesta: falso
tipo: vf

enunciado: "En un plano inclinado, la normal siempre es igual al peso completo del objeto, igual que en una superficie horizontal."

explicacion: |
  Sólo equilibra la componente perpendicular del peso (peso × cos θ),
  que es menor que el peso completo.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el ángulo de inclinación del plano, menor es la normal que actúa sobre el objeto."

explicacion: |
  cos(θ) disminuye a medida que θ aumenta (para ángulos entre 0° y 90°).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el ángulo de inclinación del plano, mayor es la componente del peso que empuja al objeto a deslizar."

explicacion: |
  sen(θ) aumenta a medida que θ aumenta (para ángulos entre 0° y 90°).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Qué es la fuerza de rozamiento?"
tipo: mc
opciones_explicitas:
  - "La fuerza que se opone al deslizamiento entre dos superficies en contacto"
  - "La fuerza que empuja a un objeto hacia adelante"
  - "Otro nombre para el peso de un objeto"
respuesta: "La fuerza que se opone al deslizamiento entre dos superficies en contacto"

explicacion: |
  Actúa siempre paralela a la superficie de contacto.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿En qué dirección y sentido actúa el rozamiento respecto del movimiento (o del movimiento que tendería a ocurrir)?"
tipo: mc
opciones_explicitas:
  - "Paralela a la superficie de contacto, en sentido contrario al movimiento"
  - "Siempre perpendicular a la superficie de contacto"
  - "En la misma dirección y sentido que el movimiento"
respuesta: "Paralela a la superficie de contacto, en sentido contrario al movimiento"

explicacion: |
  Se opone al deslizamiento, nunca lo favorece.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre rozamiento estático y cinético?"
tipo: mc
opciones_explicitas:
  - "El estático actúa mientras el objeto está quieto; el cinético mientras ya se está moviendo"
  - "El estático es siempre más chico que el cinético"
  - "No hay ninguna diferencia real entre ambos"
respuesta: "El estático actúa mientras el objeto está quieto; el cinético mientras ya se está moviendo"

explicacion: |
  El estático impide que el movimiento empiece; el cinético actúa
  durante el movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El rozamiento estático tiene un valor máximo, más allá del cual el objeto empieza a deslizar."

explicacion: |
  f_estático_máx = μ_e × N: si la fuerza que intenta mover al objeto
  supera ese máximo, el objeto se pone en movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El rozamiento cinético es prácticamente constante mientras el objeto se desliza, sin depender de qué tan rápido se mueva."

explicacion: |
  f_cinético = μ_c × N, sin ningún término de velocidad en los casos
  simples.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "En general, el coeficiente de rozamiento estático (μ_e) es mayor que el coeficiente cinético (μ_c) entre las mismas dos superficies."

explicacion: |
  Es la razón física por la que cuesta más iniciar un movimiento que
  mantenerlo.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿De qué depende principalmente el coeficiente de rozamiento (μ) entre dos superficies?"
tipo: mc
opciones_explicitas:
  - "De qué materiales están en contacto"
  - "Del área total de contacto entre las superficies"
  - "De la velocidad a la que se mueve el objeto"
respuesta: "De qué materiales están en contacto"

explicacion: |
  Madera con madera da un μ distinto que goma con asfalto o hielo con
  metal.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "En los casos simples que se estudian en la escuela, el coeficiente de rozamiento no depende del área de contacto entre las superficies."

explicacion: |
  Es un resultado que suele sorprender: un ladrillo apoyado sobre su
  cara grande o su cara chica tiene el mismo μ con el piso.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "problema"]

variables:
  normal: uno_de([50, 100, 200])
  mu_c: 0.2

respuesta: normal * mu_c
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se desliza sobre una superficie con normal {normal} N, y el coeficiente de rozamiento cinético es 0,2. ¿Cuál es la fuerza de rozamiento?"

pasos:
  - "{normal} × 0,2 = {normal * mu_c} N"

explicacion: |
  f_cinético = μ_c × N.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "problema"]

variables:
  normal: uno_de([50, 100, 200])
  mu_e: 0.3

respuesta: normal * mu_e
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto en reposo está sobre una superficie con normal {normal} N, y el coeficiente de rozamiento estático es 0,3. ¿Cuál es la máxima fuerza de rozamiento estático posible, antes de que el objeto empiece a moverse?"

pasos:
  - "{normal} × 0,3 = {normal * mu_e} N"

explicacion: |
  f_estático_máx = μ_e × N.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60, 80])
  cos_60: 0.5

respuesta: peso * cos_60
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto de peso {peso} N está en un plano inclinado 60° (cos 60° = 0,5). ¿Cuál es la normal?"

pasos:
  - "{peso} × 0,5 = {peso * cos_60} N"

explicacion: |
  N = peso × cos(θ).
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60, 80])
  sen_30: 0.5
  friccion: uno_de([5, 10])

respuesta: (peso * sen_30) - friccion
tipo: input
tolerancia_abs: 0.5

enunciado: "Un objeto de peso {peso} N está en un plano inclinado 30° (sen 30° = 0,5), ya deslizando, con una fuerza de rozamiento cinético de {friccion} N oponiéndose. ¿Cuál es la fuerza neta a lo largo del plano?"

pasos:
  - "P∥ = {peso} × 0,5 = {peso * sen_30} N"
  - "{peso * sen_30} − {friccion} = {(peso * sen_30) - friccion} N"

explicacion: |
  Se resta la fuerza de rozamiento a la componente del peso que empuja
  a deslizar.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Si la fuerza neta a lo largo del plano (peso paralelo menos rozamiento) es positiva, el objeto acelera deslizando hacia abajo."

explicacion: |
  Es la segunda ley de Newton aplicada a lo largo del plano inclinado.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60])
  sen_30: 0.5
  friccion_max: peso * sen_30 + random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "Un objeto de peso {peso} N está en reposo en un plano inclinado 30° (P∥ = {peso * sen_30} N). El rozamiento estático máximo posible es {friccion_max} N. ¿El objeto se queda quieto (no empieza a deslizar)?"

explicacion: |
  Como el rozamiento estático máximo ({friccion_max} N) es mayor que la
  componente que empuja a deslizar ({peso * sen_30} N), el objeto no se
  mueve.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "ordenar"]

enunciado: "Ordená los pasos para analizar si un objeto se queda quieto o desliza en un plano inclinado con rozamiento."
tipo: ordenar
opciones_explicitas:
  - "Comparar P∥ con el rozamiento máximo: si P∥ es mayor, el objeto desliza"
  - "Calcular la componente del peso paralela al plano (P∥ = peso × sen θ)"
  - "Calcular la normal y con ella la fuerza de rozamiento estático máximo"
respuesta_orden: ["Calcular la componente del peso paralela al plano (P∥ = peso × sen θ)", "Calcular la normal y con ella la fuerza de rozamiento estático máximo", "Comparar P∥ con el rozamiento máximo: si P∥ es mayor, el objeto desliza"]
explicacion: |
  La comparación final es la que decide si hay movimiento o no.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Por qué es tan difícil caminar sin resbalar sobre hielo?"
tipo: mc
opciones_explicitas:
  - "Porque el coeficiente de rozamiento entre el calzado y el hielo es muy bajo"
  - "Porque el hielo no tiene normal"
  - "Porque el peso de la persona cambia sobre el hielo"
respuesta: "Porque el coeficiente de rozamiento entre el calzado y el hielo es muy bajo"

explicacion: |
  Con μ muy chico, la fuerza de rozamiento disponible es insuficiente
  para el empuje necesario al caminar.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Por qué el rozamiento, aunque suele pensarse como algo que 'frena' o 'molesta', también es necesario para muchas acciones cotidianas?"
tipo: mc
opciones_explicitas:
  - "Porque es la reacción del piso (ver la tercera ley) la que permite caminar, y sin rozamiento suficiente no habría tracción"
  - "En realidad el rozamiento nunca es útil, siempre conviene eliminarlo"
  - "El rozamiento sólo afecta a objetos en un plano inclinado"
respuesta: "Porque es la reacción del piso (ver la tercera ley) la que permite caminar, y sin rozamiento suficiente no habría tracción"

explicacion: |
  Sin rozamiento, las ruedas patinarían y los pies resbalarían sin
  poder empujar contra nada.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  masa: uno_de([4, 8])
  sen_30: 0.5
  friccion: uno_de([5, 10])

respuesta: redondear(((masa * 10 * sen_30) - friccion) / masa, 2)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un objeto de {masa} kg (peso {masa * 10} N, con g=10 m/s²) desliza por un plano inclinado 30° (sen 30° = 0,5), con una fuerza de rozamiento de {friccion} N. ¿Cuál es su aceleración a lo largo del plano?"

pasos:
  - "P∥ = {masa * 10} × 0,5 = {(masa * 10) * sen_30} N"
  - "Fuerza neta: {(masa * 10) * sen_30} − {friccion} = {((masa * 10) * sen_30) - friccion} N"
  - "a = {((masa * 10) * sen_30) - friccion} ÷ {masa} = {redondear(((masa * 10 * sen_30) - friccion) / masa, 2)} m/s²"

explicacion: |
  Combina el peso descompuesto, el rozamiento y la segunda ley de
  Newton en un solo problema.
```

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el plano inclinado y el rozamiento juntos?"
tipo: mc
opciones_explicitas:
  - "Para predecir si un objeto se desliza o queda quieto en una rampa real, y con qué aceleración, considerando ambos efectos a la vez"
  - "Sólo sirve para superficies perfectamente horizontales"
  - "Sólo aplica quitando el rozamiento del cálculo"
respuesta: "Para predecir si un objeto se desliza o queda quieto en una rampa real, y con qué aceleración, considerando ambos efectos a la vez"

explicacion: |
  Es la aplicación combinada de descomposición de vectores, las leyes de
  Newton y el rozamiento.
```

## Sección: potencia-electrica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "potencia"
tipo: "completar"
respuestas_validas:
  - "potencia"
  - "Potencia"

enunciado: "La rapidez con la que un dispositivo consume o transforma energía eléctrica en otro tipo de energía se denomina ___."

explicacion: |
  La potencia eléctrica mide la tasa de transferencia de energía por unidad de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades", "vatios"]

opciones_explicitas: ["Voltio (V)", "Amperio (A)", "Vatio (W)", "Ohmio (Ω)"]
respuesta: "Vatio (W)"
tipo: "mc"

enunciado: "En el Sistema Internacional de Unidades, la unidad de potencia eléctrica es el:"

explicacion: |
  El vatio (W) se define como el trabajo realizado por una fuerza de un Newton a lo largo de un metro en un segundo, o equivalentemente, la potencia de un dispositivo que consume 1 Joule por segundo.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["relacion_variables", "formula"]

variables:
  voltajes: [12, 220, 10]
  corrientes: [2, 5, 0.5]
  resultados: [24, 1100, 5]
  idx: uno_de([0, 1, 2])
  v: voltajes[idx]
  i: corrientes[idx]
  p: resultados[idx]

respuesta: p
tipo: "input"
tolerancia_abs: 0

enunciado: "Si un dispositivo tiene un voltaje de {v} V y una intensidad de {i} A, ¿cuál es su potencia eléctrica en vatios?"

pasos:
  - "Identificar el voltaje (V) y la intensidad (I)."
  - "Aplicar la fórmula P = V · I."

explicacion: |
  Usando la fórmula P = V · I:
  P = {v}V · {i}A = {p}W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["teoria", "verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que la potencia eléctrica es directamente proporcional a la resistencia cuando el voltaje se mantiene constante?"

explicacion: |
  Falso. Según la fórmula P = V²/R, si el voltaje (V) es constante, la potencia es inversamente proporcional a la resistencia (R). A mayor resistencia, menor potencia.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["formulas", "ley_ohm"]

opciones_explicitas: ["P = I · R", "P = V / R", "P = I² · R", "P = V² / R"]
respuesta: "P = I² · R"
tipo: "mc"

enunciado: "Combinando la Ley de Ohm (V = I · R) con la definición de potencia (P = V · I), obtenemos que la potencia también puede expresarse como:"

explicacion: |
  Sustituyendo V por (I · R) en la fórmula de potencia:
  P = (I · R) · I = I² · R.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["formula", "calculo"]

variables:
  datos: [[12, 2], [24, 3], [10, 5], [220, 2]]
  idx: uno_de([0,1,2,3])
  v: datos[idx][0]
  i: datos[idx][1]
  p: v * i

respuesta: p
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una fuente de alimentación entrega un voltaje de {v} V y una corriente de {i} A. ¿Cuál es la potencia eléctrica consumida por el dispositivo?"

pasos:
  - "Identificar los valores de voltaje (V) y corriente (I)."
  - "Aplicar la fórmula de la potencia eléctrica: P = V · I."
  - "Multiplicar el voltaje por la corriente: {v} * {i} = {p}."

explicacion: |
  La potencia eléctrica (P) se define como el producto del voltaje (V) por la intensidad de corriente (I). En este caso, la potencia es de {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "formula"]

variables:
  datos: [[10, 5], [20, 10], [5, 2], [15, 3]]
  idx: uno_de([0,1,2,3])
  i: datos[idx][0]
  r: datos[idx][1]
  p: i * i * r

respuesta: "P = I² · R"
tipo: mc
opciones_explicitas: ["P = V · I", "P = I² · R", "P = V / R", "P = I / R"]

enunciado: "Si conocemos la intensidad de corriente (I) que circula por un conductor y su resistencia (R), ¿cuál es la expresión correcta para calcular la potencia eléctrica (P) disipada?"

explicacion: |
  Cuando se conoce la corriente y la resistencia, la fórmula derivada de P = V · I (sustituyendo V = I · R) es P = I² · R.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "resistencia"]

variables:
  datos: [[100, 20], [200, 50], [12, 4], [220, 110]]
  idx: uno_de([0,1,2,3])
  v: datos[idx][0]
  r: datos[idx][1]
  p: (v * v) / r

respuesta: p
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω y se conecta a una fuente de {v} V. Calcula la potencia disipada en el componente."

pasos:
  - "Elevar el voltaje al cuadrado: {v}^2."
  - "Dividir el resultado por la resistencia: ({v}^2) / {r}."

explicacion: |
  Utilizando la variante de la fórmula que relaciona voltaje y resistencia: P = V² / R. El cálculo es ({v}^2) / {r} = {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "En el Sistema Internacional de Unidades, la unidad de potencia eléctrica es el Vatio (W), que equivale a un Julio por segundo (J/s)."
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["completar", "formula"]

respuestas_validas:
  - "V * I"
  - "V*I"
  - "V·I"
respuesta: "V * I"
tipo: completar

enunciado: "La fórmula fundamental para calcular la potencia eléctrica (P) en un circuito de corriente continua es P = ___."

explicacion: |
  La potencia eléctrica es el producto de la diferencia de potencial (Voltaje) por la intensidad de corriente.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["potencia", "voltaje", "corriente"]

respuesta: "aumenta"
tipo: completar
respuestas_validas:
  - "aumenta"

enunciado: "Si mantenemos la resistencia de un componente constante y aumentamos el voltaje aplicado, la potencia eléctrica consumida por dicho componente ___."

explicacion: |
  De la fórmula $P = V^2 / R$, se observa que la potencia es directamente proporcional al cuadrado del voltaje. Si el voltaje aumenta, la potencia aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "serie", "potencia"]

variables:
  escenario: uno_de([["R1", "R2", "R3", "R1+R2+R3"], ["10", "20", "30", "60"]])

respuesta: "R1+R2+R3"
tipo: mc
opciones_explicitas: ["R1", "R2", "R3", "R1+R2+R3"]

enunciado: "En un circuito en serie con tres resistencias, la resistencia equivalente que determina la potencia total entregada por la fuente es ___."

explicacion: |
  En un circuito en serie, la resistencia total es la suma de las resistencias individuales. La potencia total se calcula usando esta resistencia equivalente.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["booleano", "corriente", "potencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la resistencia de un conductor se mantiene constante y la corriente eléctrica se duplica, la potencia disipada en el conductor se cuadruplica."

explicacion: |
  Usando la fórmula $P = I^2 \cdot R$, si la corriente se multiplica por 2, la potencia se multiplica por $2^2 = 4$. Por lo tanto, es verdadero.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_ohm"]

variables:
  datos: uno_de([[12, 2], [220, 5], [12, 0.5]])

respuesta: datos[0] * datos[1]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un dispositivo eléctrico está conectado a una fuente de {datos[0]} V y por él circula una corriente de {datos[1]} A. ¿Cuál es su potencia eléctrica en Watts?"

pasos:
  - "Identificar el voltaje (V) y la corriente (I)."
  - "Aplicar la fórmula P = V * I."

explicacion: |
  La potencia se calcula multiplicando el voltaje por la intensidad: $P = V \cdot I$.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["procedimiento", "resistencia", "voltaje"]

opciones_explicitas: ["Calcular la corriente usando Ohm", "Multiplicar voltaje por corriente", "Calcular potencia final"]
respuesta_orden: ["Calcular la corriente usando Ohm", "Multiplicar voltaje por corriente", "Calcular potencia final"]
tipo: ordenar

enunciado: "Si conoces el voltaje (V) y la resistencia (R) de una bombilla, pero no la corriente (I), ¿cuál es el orden lógico para hallar la potencia usando P = V · I?"

explicacion: |
  Primero debes hallar la incógnita faltante ($I = V/R$) y luego aplicar la fórmula de potencia.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["conceptos_base", "potencia"]

respuesta: "potencia"
tipo: "mc"
opciones_explicitas: ["energía", "potencia", "voltaje", "corriente"]

enunciado: "Mientras que la energía eléctrica es la cantidad total de trabajo realizado por una carga en un tiempo determinado, la ___ es la rapidez con la que dicho trabajo se realiza."

explicacion: |
  La potencia (P) mide la tasa de transferencia de energía por unidad de tiempo (P = dE/dt).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["ley_de_joule", "resistencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[2, 5, "mayor"], [4, 2, "menor"]]

respuesta: datos[escenario_idx][2]
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Si mantenemos el voltaje constante en un circuito, un componente con una resistencia de {datos[escenario_idx][0]} $\\Omega$ disipará una potencia ___ que uno con una resistencia de {datos[escenario_idx][1]} $\\Omega$."

explicacion: |
  Usando la fórmula $P = V^2 / R$, la potencia es inversamente proporcional a la resistencia cuando el voltaje es constante.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "avanzado"
  tags: ["ley_de_joule", "corriente"]

variables:
  corriente_inicial: 2.0
  corriente_final: 4.0
  resistencia: 10.0

respuesta: verdadero
tipo: vf

enunciado: "Si la corriente que atraviesa una resistencia de {resistencia} ohmios se duplica de {corriente_inicial} A a {corriente_final} A, la potencia disipada se cuadruplica."

explicacion: |
  Según la fórmula P = I^2 * R, la potencia depende del cuadrado de la intensidad. Si la corriente se multiplica por 2, la potencia se multiplica por 2^2 = 4.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades"]

tipo: ordenar
opciones_explicitas: ["vatio", "voltio", "amperio", "ohmio"]
respuesta_orden: ["vatio", "voltio", "amperio", "ohmio"]

enunciado: "Ordena las siguientes magnitudes de mayor a menor según su símbolo en el Sistema Internacional (W, V, A, Ω):"

explicacion: |
  El orden solicitado es: W (vatio), V (voltio), A (amperio) y Ω (ohmio).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_joule"]

variables:
  escenario_idx: uno_de([0, 1])
  valores: [[12, 2], [24, 3]]

respuesta: valores[escenario_idx][0] * valores[escenario_idx][0] * valores[escenario_idx][1]
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un dispositivo eléctrico tiene una resistencia de {valores[escenario_idx][1]} $\\Omega$ y es atravesado por una corriente de {valores[escenario_idx][0]} A. ¿Cuál es su potencia eléctrica en Watts?"

pasos:
  - "Identificar la corriente (I) y la resistencia (R)."
  - "Aplicar la fórmula $P = I^2 \\cdot R$."
  - "Calcular el resultado final."

explicacion: |
  Aplicando $P = I^2 \cdot R$:
  P = {valores[escenario_idx][0]}² · {valores[escenario_idx][1]} = {valores[escenario_idx][0] * valores[escenario_idx][0] * valores[escenario_idx][1]} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["potencia", "voltaje", "corriente"]

variables:
  escenario: uno_de([[12, 2, 24], [220, 5, 1100], [12, 10, 120]])
  v: escenario[0]
  i: escenario[1]
  p: escenario[2]

respuesta: p
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una bombilla se conecta a una fuente de tensión de {v} V y por ella circula una corriente de {i} A. ¿Cuál es la potencia eléctrica consumida por la bombilla?"

pasos:
  - "Identificar el voltaje (V) y la corriente (I)."
  - "Aplicar la fórmula de potencia: P = V * I."

explicacion: |
  La potencia eléctrica se calcula multiplicando la diferencia de potencial por la intensidad de corriente: P = V * I.
  En este caso: {v} V * {i} A = {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "potencia", "ley_de_joule"]

variables:
  escenario: uno_de([[10, 5], [20, 4], [5, 10]])
  r: escenario[0]
  i: escenario[1]
  p: escenario[1] * escenario[1] * escenario[0]

respuesta: p
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω. Si circula una corriente de {i} A a través de él, ¿cuánta potencia se disipa en forma de calor?"

pasos:
  - "Utilizar la variante de la fórmula de potencia: P = I² * R."
  - "Elevar la corriente al cuadrado: {i} * {i}."
  - "Multiplicar por la resistencia: {i} * {i} * {r}."

explicacion: |
  Para calcular la potencia disipada por una resistencia conociendo la corriente, usamos P = I² * R.
  Cálculo: ({i} A)² * {r} Ω = {p} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["comparacion", "potencia"]

variables:
  escenario: uno_de([[50, 1000], [500, 50], [10, 2000]])
  p: escenario[0]
  limite: escenario[1]

respuesta: p > limite
tipo: vf
enunciado: "Un dispositivo consume una potencia de {p} W. Si el límite de seguridad de la instalación es de {limite} W, ¿se ha superado el límite de seguridad?"

explicacion: |
  Comparamos la potencia consumida ({p} W) con el límite establecido ({limite} W). 
  Si {p} > {limite}, la respuesta es verdadero.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "resistencia", "corriente"]

variables:
  escenario: uno_de([[120, 10], [230, 100], [12, 10]])
  v: escenario[0]
  r: escenario[1]
  i: escenario[0] / escenario[1]

respuesta: i
tipo: mc

opciones_explicitas: [12.0, 2.3, 1.2, 0.5]

enunciado: "Un calefactor tiene una resistencia interna de {r} Ω y se conecta a una toma de corriente de {v} V. ¿Qué intensidad de corriente circulará por el circuito (en amperios)?"

explicacion: |
  Usamos la relación derivada de la ley de Ohm y la potencia: P = V²/R, pero para hallar la corriente usamos I = V / R.
  Cálculo: {v} V / {r} Ω = {i} A.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["metodologia", "procedimiento"]

opciones_explicitas: ["Medir voltaje y corriente", "Multiplicar V por I", "Calcular el resultado en Watts"]

respuesta_orden: ["Medir voltaje y corriente", "Multiplicar V por I", "Calcular el resultado en Watts"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar la potencia eléctrica de un electrodoméstico desconocido usando un multímetro en serie y paralelo."

explicacion: |
  Para hallar la potencia P = V * I, primero debemos obtener los valores de la tensión (V) y la intensidad (I) mediante mediciones, luego realizar la multiplicación matemática y finalmente expresar el resultado en la unidad de potencia (W).
```

## Sección: potencia-mecanica (25 preguntas)

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

## Sección: presion-atmosferica (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Qué es la presión atmosférica?"
tipo: mc
opciones_explicitas:
  - "El peso del aire que hay por encima de un punto, repartido sobre su área"
  - "La temperatura del aire en un punto dado"
  - "La cantidad de nubes que hay en el cielo"
respuesta: "El peso del aire que hay por encima de un punto, repartido sobre su área"

explicacion: |
  Es la misma idea general de presión (P=F/A) aplicada al peso de la
  columna de aire de la atmósfera.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "formula"]

respuesta: verdadero
tipo: vf

enunciado: "La presión atmosférica se calcula con la misma fórmula general de presión, P = F/A."

explicacion: |
  El "F" es el peso de la columna de aire, y el "A" el área sobre la que
  se reparte.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Aproximadamente cuánto vale la presión atmosférica a nivel del mar, en hectopascales (hPa)?"
tipo: mc
opciones_explicitas:
  - "1013 hPa"
  - "100 hPa"
  - "10000 hPa"
respuesta: "1013 hPa"

explicacion: |
  Esa es la presión de referencia de "1 atmósfera" (1 atm).
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "altitud"]

respuesta: verdadero
tipo: vf

enunciado: "A mayor altitud, la presión atmosférica disminuye, porque hay menos columna de aire por encima empujando hacia abajo."

explicacion: |
  Por eso cuesta más respirar en la cima de una montaña alta.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

enunciado: "¿Por qué los aviones presurizan la cabina en vuelo?"
tipo: mc
opciones_explicitas:
  - "Porque a la altitud de crucero la presión externa es demasiado baja para respirar sin ayuda"
  - "Porque a la altitud de crucero la presión externa es demasiado alta"
  - "Para que los pasajeros no sientan el frío"
respuesta: "Porque a la altitud de crucero la presión externa es demasiado baja para respirar sin ayuda"

explicacion: |
  A esa altura hay muy poca columna de aire por encima, la presión (y el
  oxígeno disponible) cae mucho.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "temperatura"]

respuesta: verdadero
tipo: vf

enunciado: "El aire caliente es menos denso que el aire frío, porque sus moléculas están más separadas."

explicacion: |
  Por eso el aire caliente tiende a subir.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "temperatura"]

enunciado: "¿Qué zona de presión en superficie tiende a generar el aire cálido, que asciende y se aleja?"
tipo: mc
opciones_explicitas:
  - "Una zona de baja presión"
  - "Una zona de alta presión"
  - "No afecta a la presión en superficie"
respuesta: "Una zona de baja presión"

explicacion: |
  Al subir y alejarse, el aire cálido deja una zona de menor presión
  detrás.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "temperatura"]

enunciado: "¿Qué zona de presión en superficie tiende a generar el aire frío, más denso, que desciende y se acumula?"
tipo: mc
opciones_explicitas:
  - "Una zona de alta presión"
  - "Una zona de baja presión"
  - "No afecta a la presión en superficie"
respuesta: "Una zona de alta presión"

explicacion: |
  El aire frío es más denso, baja y se acumula, generando mayor presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "isobaras"]

enunciado: "¿Qué es una isobara en un mapa del clima?"
tipo: mc
opciones_explicitas:
  - "Una línea que une puntos con la misma presión atmosférica"
  - "Una línea que une puntos con la misma temperatura"
  - "Una línea que marca el límite entre dos países"
respuesta: "Una línea que une puntos con la misma presión atmosférica"

explicacion: |
  Es análoga a las curvas de nivel de un mapa de relieve, pero para
  presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "isobaras"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando las isobaras de un mapa están muy juntas entre sí, eso indica vientos más fuertes."

explicacion: |
  Isobaras juntas significan un cambio de presión brusco en poco
  espacio, lo que genera vientos fuertes.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Cómo se llama una zona de alta presión, con aire frío que desciende y suele traer cielo despejado?"
tipo: mc
opciones_explicitas:
  - "Anticiclón"
  - "Ciclón"
  - "Frente"
respuesta: "Anticiclón"

explicacion: |
  El aire que baja se comprime y se seca, dificultando que se formen
  nubes.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Cómo se llama una zona de baja presión, con aire cálido y húmedo que asciende y suele traer nubosidad e inestabilidad?"
tipo: mc
opciones_explicitas:
  - "Ciclón (o depresión)"
  - "Anticiclón"
  - "Isobara"
respuesta: "Ciclón (o depresión)"

explicacion: |
  El aire que sube se enfría y puede condensar su humedad, generando
  nubes y lluvia.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "viento"]

respuesta: verdadero
tipo: vf

enunciado: "El viento siempre sopla desde la zona de alta presión hacia la zona de baja presión, buscando equilibrar la diferencia."

explicacion: |
  Es el mismo principio que iguala cualquier diferencia de presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "calculo"]

variables:
  fuerza: random(100, 1000)
  area: random(2, 10)

respuesta: fuerza / area
tipo: input
tolerancia_abs: 0.1

enunciado: "Una fuerza de {fuerza} N actúa sobre un área de {area} m². ¿Cuál es la presión resultante, en Pa?"

pasos:
  - "P = F/A = {fuerza}/{area}"

explicacion: |
  Se aplica la fórmula general de presión, P = F/A.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "calculo"]

variables:
  presion: random(50, 500)
  area: random(2, 8)

respuesta: presion * area
tipo: input
tolerancia_abs: 0.1

enunciado: "Sobre un área de {area} m² se ejerce una presión de {presion} Pa. ¿Cuál es la fuerza total, en N?"

pasos:
  - "F = P·A = {presion}·{area}"

explicacion: |
  Se despeja F de P = F/A, multiplicando ambos lados por A.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

variables:
  altura_a: random(0, 1000)
  altura_b: random(2000, 5000)

respuesta: "el punto A"
tipo: mc
opciones_explicitas:
  - "el punto A"
  - "el punto B"
  - "tienen la misma presión"

enunciado: "El punto A está a {altura_a} m de altitud, y el punto B está a {altura_b} m de altitud. ¿En cuál de los dos la presión atmosférica es mayor?"

explicacion: |
  A menor altitud hay más columna de aire por encima, así que la
  presión es mayor.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "clima"]

respuesta: verdadero
tipo: vf

enunciado: "Muchas zonas desérticas del planeta coinciden con bandas de alta presión subtropical permanente, donde el aire que desciende se comprime y se seca."

explicacion: |
  La presión atmosférica es una pieza del mecanismo que explica por qué
  ciertas regiones tienen clima seco o húmedo.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "clima"]

enunciado: "¿Qué tipo de presión predomina en las zonas ecuatoriales, donde el aire cálido y húmedo asciende casi todo el año?"
tipo: mc
opciones_explicitas:
  - "Baja presión"
  - "Alta presión"
  - "Presión constante, igual que en los polos"
respuesta: "Baja presión"

explicacion: |
  El aire que asciende deja zonas de baja presión, asociadas a las
  fuertes lluvias tropicales.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

tipo: completar
respuestas_validas:
  - "hectopascales"
  - "hPa"

enunciado: "Los mapas del clima suelen expresar la presión atmosférica en ____ (unidad, o su abreviatura)."

explicacion: |
  Hectopascal (hPa) es la unidad más usada en meteorología para la
  presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

variables:
  nivel_mar: 0
  cerro: 1500
  montana: 4000

tipo: ordenar
opciones_explicitas:
  - "nivel del mar"
  - "cerro (1500 m)"
  - "montaña (4000 m)"
respuesta_orden: ["nivel del mar", "cerro (1500 m)", "montaña (4000 m)"]
enunciado: "Ordená estos tres lugares de mayor a menor presión atmosférica."

explicacion: |
  A mayor altitud, menor presión: nivel del mar tiene la mayor presión,
  la montaña la menor.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "calculo"]

variables:
  fuerza: random(100, 500)
  area: random(2, 5)
  presion_correcta: fuerza / area
  error: uno_de([0, 0, 0, 5, -5])
  presion_mostrada: presion_correcta + error

respuesta: (abs(presion_mostrada - presion_correcta) < 0.01)
tipo: vf

enunciado: "Una fuerza de {fuerza} N sobre un área de {area} m² da, según un cálculo, una presión de {presion_mostrada} Pa. ¿Es correcto ese resultado?"

explicacion: |
  La presión correcta es P = F/A = {presion_correcta}.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "sintesis"]

enunciado: "¿Cuál de estas afirmaciones resume mejor la relación entre presión, altitud y temperatura?"
tipo: mc
opciones_explicitas:
  - "A mayor altitud la presión baja, y el aire cálido (menos denso) genera zonas de baja presión al ascender"
  - "A mayor altitud la presión sube, y el aire cálido genera zonas de alta presión"
  - "La presión atmosférica no depende ni de la altitud ni de la temperatura"
respuesta: "A mayor altitud la presión baja, y el aire cálido (menos denso) genera zonas de baja presión al ascender"

explicacion: |
  Son las dos relaciones centrales del tema: presión vs. altitud, y
  presión vs. temperatura.
```

