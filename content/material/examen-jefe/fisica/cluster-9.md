# Examen jefe — [PENDIENTE #744]

> Logro #744. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: refraccion-indice-ley-snell (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["refraccion", "indice_de_refraccion"]

respuesta: "n"
tipo: "completar"
respuestas_validas:
  - "n"
  - "N"
  - "índice"

enunciado: "El parámetro adimensional que describe la velocidad de la luz en un medio en comparación con el vacío se denomina ___ de refracción."

explicacion: |
  El índice de refracción (n) se define como la relación entre la velocidad de la luz en el vacío (c) y la velocidad de la luz en el medio (v): n = c/v.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["velocidad_luz", "medios"]

respuesta: falso
tipo: "vf"

enunciado: "En un medio con un índice de refracción mayor que el del vacío (n > 1), la luz viaja más rápido que en el vacío."

explicacion: |
  Falso. Como n = c/v, si n es mayor que 1, la velocidad en el medio (v) es menor que la velocidad en el vacío (c).
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "angulos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1.5, 0.7], [1.33, 1.5]]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: [0.7, 1.5, 1.33, 0.85]

enunciado: "Si un rayo de luz pasa de un medio con índice {datos[escenario_idx][0]} a un medio con índice {datos[escenario_idx][1]}, ¿cuál es el valor del índice de refracción del segundo medio?"

explicacion: |
  El enunciado pide identificar el segundo índice de refracción según el escenario sorteado.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["terminos", "rayos"]

respuesta: "normal"
tipo: "completar"
respuestas_validas:
  - "normal"
  - "perpendicular"

enunciado: "La línea imaginaria perpendicular a la superficie de separación entre dos medios se denomina línea ___."

explicacion: |
  La 'normal' es la línea perpendicular a la interfaz, y los ángulos de incidencia y refracción se miden respecto a ella.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["secuencia", "fenomenos"]

tipo: ordenar
opciones_explicitas: ["incidencia", "refraccion", "reflexion_parcial"]
respuesta_orden: ["incidencia", "refraccion", "reflexion_parcial"]

enunciado: "Ordena los eventos que ocurren cuando un rayo de luz incide sobre una interfaz entre dos medios distintos, considerando el fenómeno de refracción y la posible reflexión parcial."

explicacion: |
  Primero el rayo incide (incidencia), luego parte de la energía cambia de dirección al entrar al segundo medio (refracción) y otra parte rebota (reflexión parcial).
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_de_refraccion"
  nivel: "basico"
  tags: ["optica", "indice_de_refraccion"]

variables:
  n_medio: 1.5

respuesta: "1.5"
tipo: mc
opciones_explicitas: ["1.0", "1.5", "2.0", "0.5"]

enunciado: "El índice de refracción de un medio se define como la relación entre la velocidad de la luz en el vacío ($c$) y la velocidad de la luz en dicho medio ($v$). Si la luz viaja en un medio con una velocidad que es exactamente dos tercios de la velocidad de la luz en el vacío, ¿cuál es el índice de refracción?"

explicacion: |
  El índice de refracción $n$ se calcula como $n = c/v$. 
  Si $v = (2/3)c$, entonces $n = c / ((2/3)c) = 3/2 = 1.5$.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "basico"
  tags: ["ley_de_snell", "optica"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que si la luz pasa de un medio con índice de refracción $n_1$ a un medio con $n_2$ y $n_2 > n_1$, el rayo de luz se acerca a la normal?"

explicacion: |
  Cuando la luz pasa a un medio más denso ópticamente ($n_2 > n_1$), la velocidad disminuye y el rayo se desvía hacia la normal.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "calculo"]

variables:
  n1: 1.0
  n2: 1.33
  theta1: 30.0

respuesta: asin_deg(n1 * sin_deg(theta1) / n2)
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un rayo de luz viaja desde el aire (n1 = {n1}) hacia el agua (n2 = {n2}) con un ángulo de incidencia de {theta1}° respecto a la normal. Calcula el ángulo de refracción en el agua."

pasos:
  - "Aplicar la Ley de Snell: n1 · sin(θ1) = n2 · sin(θ2)"
  - "Despejar sin(θ2) = (n1 · sin(θ1)) / n2"
  - "Calcular θ2 = arcsin(resultado)"

explicacion: |
  Usando la Ley de Snell:
  1.0 · sin(30°) = 1.33 · sin(θ2)
  0.5 = 1.33 · sin(θ2)
  sin(θ2) = 0.5 / 1.33 ≈ 0.3759
  θ2 = arcsin(0.3759) ≈ {asin_deg(n1 * sin_deg(theta1) / n2)}°
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "basico"
  tags: ["conceptos"]

tipo: ordenar

opciones_explicitas: ["n1", "sen(theta1)", "n2", "sen(theta2)"]

respuesta_orden: ["n1", "sen(theta1)", "n2", "sen(theta2)"]

enunciado: "Ordena los términos de la fórmula de la Ley de Snell (n1 * sen(theta1) = n2 * sen(theta2)) según su aparición en la ecuación, de izquierda a derecha."

explicacion: |
  La ecuación establece la igualdad entre el producto del índice del primer medio por el seno del ángulo de incidencia y el producto del índice del segundo medio por el seno del ángulo de refracción.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_snell"
  nivel: "intermedio"
  tags: ["completar", "formula"]

respuesta: "n2"
tipo: completar
respuestas_validas:
  - "n2"

enunciado: "En la expresión de la Ley de Snell, n1 * sin(theta1) = ___ * sin(theta2), el término desconocido representa el índice de refracción del segundo medio."

explicacion: |
  La Ley de Snell relaciona las propiedades de los dos medios involucrados: n1 sin(theta1) = n2 sin(theta2).
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "basico"
  tags: ["refraccion", "indice_refraccion", "velocidad_luz"]

respuesta: falso
tipo: vf

enunciado: "Si un rayo de luz pasa de un medio con índice de refracción $n_1 = 1.5$ a un medio con $n_2 = 1.0$, la velocidad de la luz en el segundo medio es menor que en el primero."

explicacion: |
  El índice de refracción se define como $n = c/v$. Por lo tanto, a mayor índice de refracción, menor es la velocidad de la luz en ese medio. Si $n_2 < n_1$, la velocidad en el segundo medio es mayor.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "intermedio"
  tags: ["ley_snell", "angulos", "refraccion"]

variables:
  escenario: uno_de([["n1=1.0, n2=1.5", "se acerca a la normal"], ["n1=1.5, n2=1.0", "se aleja de la normal"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["se acerca a la normal", "se aleja de la normal"]

enunciado: "Cuando la luz viaja de un medio con índice de refracción {escenario[0]}, el rayo refractado ___ la línea normal."

pasos:
  - "Identificar si el índice aumenta o disminuye."
  - "Aplicar la Ley de Snell: n1 * sen(theta1) = n2 * sen(theta2)."
  - "Si n2 > n1, entonces sen(theta2) < sen(theta1), por lo que theta2 < theta1."

explicacion: |
  Al pasar a un medio más denso ópticamente (n2 > n1), la velocidad disminuye y el rayo se desvía hacia la normal para mantener la igualdad en la Ley de Snell.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "intermedio"
  tags: ["velocidad", "calculo", "indice_refraccion"]

variables:
  datos: uno_de([[1.33, 2.25e8], [1.50, 2.0e8], [2.42, 1.24e8]])

respuesta: datos[1]
tipo: completar
tolerancia_abs: 1e6

enunciado: "Calcula la velocidad de la luz en un medio cuyo índice de refracción es n = {datos[0]}. (Usa c = 3.0 × 10^8 m/s)."

pasos:
  - "Usa la fórmula v = c / n."
  - "Sustituye los valores: v = 3.0 × 10^8 / {datos[0]}."

explicacion: |
  La velocidad en el medio se calcula dividiendo la velocidad en el vacío por el índice de refracción del medio.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "avanzado"
  tags: ["reflexion_total", "angulo_critico", "condiciones"]

respuesta_orden: ["El medio debe ser menos denso ópticamente", "El ángulo de incidencia debe ser mayor al crítico", "La luz debe viajar de un medio con mayor n a uno con menor n"]

tipo: ordenar
opciones_explicitas: ["El medio debe ser menos denso ópticamente", "El ángulo de incidencia debe ser mayor al crítico", "La luz debe viajar de un medio con mayor n a uno con menor n"]

enunciado: "Ordena las condiciones necesarias para que ocurra la Reflexión Total Interna, desde la condición del medio hasta la condición del ángulo:"

explicacion: |
  Para la reflexión total interna se requiere: 1) Que la luz pase de un medio con n alto a uno con n bajo (menos denso), 2) Que el ángulo de incidencia sea mayor al ángulo crítico θc.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_ley_snell"
  nivel: "basico"
  tags: ["ley_snell", "formula"]

respuesta: "n1*sin(theta1)=n2*sin(theta2)"
tipo: completar
respuestas_validas:
  - "n1*sin(theta1)=n2*sin(theta2)"

enunciado: "La expresión matemática de la Ley de Snell es: ___"

explicacion: |
  La Ley de Snell establece que el producto del índice de refracción por el seno del ángulo de incidencia es constante para dos medios en contacto.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "basico"
  tags: ["refraccion", "indice_de_refraccion"]

respuesta: falso
tipo: vf

enunciado: "El índice de refracción de un medio se define como la relación entre la velocidad de la luz en el vacío y la velocidad de la luz en dicho medio, por lo que un índice mayor implica una mayor velocidad de la luz en el medio."

explicacion: |
  Falso. El índice de refracción es n = c/v. Si el índice n es mayor, la velocidad v es menor (la luz viaja más lento en medios más densos ópticamente).
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "angulo_de_refraccion"]

variables:
  escenario: uno_de([["aire", "agua", 1.0, 1.33], ["agua", "diamante", 1.33, 2.42], ["aire", "diamante", 1.0, 2.42]])

respuesta: "hacia_la_normal"
tipo: mc

opciones_explicitas: ["hacia_la_normal", "alejandose_de_la_normal", "se_mantiene_igual", "se_anula"]

enunciado: "Si un rayo de luz viaja desde un medio con índice de refracción {escenario[0]} hacia un medio con un índice de refracción mayor, {escenario[1]}, el rayo se refractará ___."

explicacion: |
  Cuando la luz pasa de un medio menos denso (menor n) a uno más denso (mayor n), el rayo se acerca a la normal para compensar la disminución de velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "intermedio"
  tags: ["ley_de_snell", "velocidad_luz"]

variables:
  caso: uno_de([["n1=1.0", "n2=1.5", "menor"], ["n1=1.5", "n2=1.0", "mayor"], ["n1=1.33", "n2=1.5", "menor"]])

respuesta: caso[2]
tipo: completar

respuestas_validas:
  - "mayor"
  - "menor"

enunciado: "Considerando el caso donde el medio 1 tiene un índice {caso[0]} y el medio 2 tiene un índice {caso[1]}, si el rayo pasa del medio 1 al medio 2, la velocidad de la luz en el medio 2 es ___ que en el medio 1."

explicacion: |
  Según la Ley de Snell y la definición de n = c/v, a mayor índice de refracción, menor es la velocidad de la luz en ese medio.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "avanzado"
  tags: ["refraccion", "vector_onda"]

respuesta: "se_mantiene_constante"
tipo: mc

opciones_explicitas: ["se_mantiene_constante", "cambia_su_magnitud", "cambia_su_direccion", "se_anula"]

enunciado: "Al comparar la propagación de una onda en la interfaz entre dos medios con diferentes índices de refracción, ¿qué sucede con la componente del vector de onda paralela a la interfaz?"

explicacion: |
  Para que se cumpla la continuidad de la fase en la interfaz, la componente del vector de onda $k$ paralela a la superficie debe ser la misma para ambos medios.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_indice_snell"
  nivel: "basico"
  tags: ["refraccion", "proceso"]

respuesta_orden: ["incidencia", "cambio_de_velocidad", "cambio_de_direccion"]
tipo: ordenar

opciones_explicitas: ["incidencia", "cambio_de_velocidad", "cambio_de_direccion"]

enunciado: "Ordena cronológicamente los eventos físicos que ocurren cuando un rayo de luz pasa de un medio a otro con diferente índice de refracción:"

pasos:
  - "El rayo llega a la superficie de separación."
  - "La velocidad de la onda cambia debido a la densidad óptica."
  - "El ángulo de propagación cambia para satisfacer la Ley de Snell."

explicacion: |
  Primero ocurre la incidencia, luego el cambio de velocidad en el nuevo medio y, como consecuencia, el cambio en la dirección (ángulo de refracción).
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["refraccion", "indice_refraccion", "luz"]

variables:
  datos: [["agua", 1.33, "se ve más grueso"], ["aceite", 1.45, "se ve más grueso"], ["vidrio", 1.50, "se ve más grueso"]]
  idx: uno_de([0, 1, 2])

enunciado: "Al observar un lápiz dentro de un recipiente con {datos[idx][0]}, el objeto parece sufrir una desviación visual debido al cambio de medio. El índice de refracción del {datos[idx][0]} es aproximadamente {datos[idx][1]}."

opciones_explicitas: ["se ve más grueso", "se ve más delgado", "no cambia su apariencia"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  La refracción ocurre cuando la luz cambia de velocidad al pasar de un medio a otro, lo que provoca un cambio en la dirección de los rayos luminosos, dando la ilusión de que el objeto está desplazado o deformado.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "intermedio"
  tags: ["snell", "calculo", "angulo"]

variables:
  nombres: ["aire", "agua", "diamante"]
  indices: [1.0, 1.33, 2.42]
  angulos: [30.0, 45.0, 15.0]
  idx: uno_de([0, 1, 2])
  n1: indices[idx]
  theta1: angulos[idx]

enunciado: "Un rayo de luz viaja desde el {nombres[idx]} (n={n1}) hacia un medio con un índice de refracción de 1.50. Si el ángulo de incidencia es de {theta1} grados, ¿cuál es el ángulo de refracción aproximado?"

pasos:
  - "Identificar los índices de refracción: n1 = {n1} y n2 = 1.50"
  - "Aplicar la Ley de Snell: n1 * sin_deg({theta1}) = n2 * sin_deg(theta2)"
  - "Despejar: theta2 = arcsin((n1 * sin_deg({theta1}) / n2))"

respuesta: asin_deg(n1 * sin_deg(theta1) / 1.50)
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  Usando la Ley de Snell: {n1} * sin({theta1}°) = 1.50 * sin(theta2) -> sin(theta2) = ({n1} * sin_deg({theta1})) / 1.50 -> theta2 ≈ {asin_deg(n1 * sin_deg(theta1) / 1.50)}°.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["booleanos", "refraccion"]

variables:
  datos: [["aire", 1.0, "diamante", 2.42, "se acerca"], ["agua", 1.33, "vidrio", 1.5, "se acerca"], ["aceite", 1.45, "agua", 1.33, "se aleja"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si un rayo de luz pasa de {datos[idx][0]} ({datos[idx][2]}) a {datos[idx][1]}, ¿el rayo se acerca o se aleja de la normal?"

respuestas_validas:
  - "se acerca"
  - "se aleja"
respuesta: datos[idx][4]
tipo: completar

explicacion: |
  Si el índice de refracción del segundo medio es mayor que el del primero (n2 > n1), la luz se refracta hacia la normal (se acerca). Si es menor, se aleja.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "avanzado"
  tags: ["reflexion_total", "snell"]

variables:
  escenario: [["agua", 1.33, 1.5], ["vidrio", 1.5, 1.6]]
  idx: uno_de([0, 1])

enunciado: "Considerando un rayo que viaja desde el medio 1 ({escenario[idx][0]}) hacia el medio 2 ({escenario[idx][1]}), ordene los fenómenos según la magnitud del índice de refracción de los medios (de menor a mayor n)."

opciones_explicitas: ["Medio 1", "Medio 2"]
respuesta_orden: ["Medio 1", "Medio 2"]
tipo: ordenar

explicacion: |
  El orden depende de los valores de n asignados en la tabla de escenarios.
```

```
metadata:
  materia: "fisica"
  tema: "refraccion_ley_snell"
  nivel: "basico"
  tags: ["teoria", "definicion"]

variables:
  respuesta_correcta: verdadero

enunciado: "El índice de refracción de un material es una medida de cuánto se ralentiza la luz al atravesar dicho medio. ¿Es esto verdadero?"

respuesta: verdadero
tipo: vf
explicacion: |
  Correcto. El índice de refracción n se define como c/v, donde c es la velocidad en el vacío y v es la velocidad en el medio. A mayor n, menor es la velocidad de la luz en ese medio.
```

## Sección: relatividad-especial-conceptual (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["principios", "inercia"]

respuesta: "mismo"
tipo: "mc"
opciones_explicitas: ["mismo", "diferente", "mayor", "menor"]

enunciado: "Según el primer postulado de la relatividad especial, las leyes de la física son las ___ en todos los marcos de referencia inerciales."

explicacion: |
  El primer postulado establece que las leyes de la física son invariantes en todos los sistemas de referencia inerciales.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["c", "postulados"]

respuesta: "c"
tipo: "completar"
respuestas_validas:
  - "c"
  - "c"
  - "velocidad_de_la_luz"

enunciado: "La velocidad de la luz en el vacío, representada por la constante ___ , es la misma para todos los observadores, independientemente de su movimiento."

explicacion: |
  La constancia de la velocidad de la luz es el segundo postulado de Einstein.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["e_mc2", "equivalencia"]

tipo: vf
respuesta: verdadero

enunciado: "La ecuación $E=mc^2$ implica que la masa puede ser convertida en energía y viceversa."

explicacion: |
  La equivalencia masa-energía es uno de los pilares de la relatividad especial.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["tiempo", "relatividad"]

respuesta: "relativo"
tipo: "mc"
opciones_explicitas: ["absoluto", "relativo", "constante", "infinito"]

enunciado: "En la relatividad especial, el tiempo no es un parámetro universal, sino que es ___ al observador."

explicacion: |
  El tiempo depende del marco de referencia del observador (dilatación del tiempo).
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["masa_reposo"]

respuesta: "m_0"
tipo: "completar"
respuestas_validas:
  - "m_0"
  - "m_reposo"
  - "m_0"

enunciado: "La masa de un objeto cuando no tiene velocidad se denomina masa ___."

explicacion: |
  La masa en reposo es una propiedad intrínseca de la partícula.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["simultaneidad", "observadores"]

respuesta: "no_es_absoluta"
tipo: "mc"
opciones_explicitas: ["es_absoluta", "no_es_absoluta", "es_dependiente_de_la_gravedad", "es_constante"]

enunciado: "Dos eventos que son simultáneos para un observador en reposo, ___ para un observador que se mueve a velocidad constante respecto al primero."

explicacion: |
  La simultaneidad es relativa al marco de referencia; lo que es simultáneo para uno, no lo es para otro en movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["dilatacion_tiempo"]

respuesta: "menor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Para un observador externo, el tiempo transcurrido en un reloj que se mueve a alta velocidad parece pasar de forma ___ que un reloj en reposo."

explicacion: |
  La dilatación del tiempo hace que el tiempo de un reloj en movimiento parezca transcurrir más lento para el observador externo.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["contraccion_longitud"]

respuesta: "paralelo_al_movimiento"
tipo: "completar"
respuestas_validas:
  - "paralelo_al_movimiento"
  - "perpendicular_al_movimiento"

enunciado: "La contracción de la longitud ocurre únicamente en la dirección ___ del movimiento."

explicacion: |
  La contracción de Lorentz solo afecta a las dimensiones paralelas a la velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["energia_cinetica"]

respuesta: "infinito"
tipo: "mc"
opciones_explicitas: ["finito", "cero", "infinito", "negativo"]

enunciado: "A medida que la velocidad de un objeto con masa se acerca a la velocidad de la luz, la energía necesaria para acelerarlo tiende a ___."

explicacion: |
  Debido a la relatividad, la energía requerida para alcanzar la velocidad de la luz es infinita para una partícula con masa.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["gamma"]

respuesta: verdadero
tipo: vf

enunciado: "El factor de Lorentz (gamma) siempre es mayor o igual a 1 para cualquier velocidad v < c."

explicacion: |
  Dado que gamma = 1 / sqrt(1 - v^2/c^2), si v < c, el denominador es menor que 1, por lo que gamma >= 1.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["comparacion"]

respuesta: "mismo"
tipo: "mc"
opciones_explicitas: ["mismo", "diferente", "inverso", "variable"]

enunciado: "Si dos observadores se mueven a velocidades constantes y relativas entre sí, ambos marcos de referencia son considerados ___."

explicacion: |
  Ambos son marcos inerciales y las leyes de la física se aplican igual en ambos.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["experimento_luz"]

respuesta: "c"
tipo: "mc"
opciones_explicitas: ["c", "c+v", "c-v", "v"]

enunciado: "Si una nave viaja a velocidad $v$ y dispara un rayo de luz hacia adelante, un observador en la nave medirá la velocidad del rayo como ___."

explicacion: |
  La velocidad de la luz es constante para todos los observadores, sin importar el movimiento de la fuente.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["masa_relativista"]

tipo: vf
respuesta: verdadero

enunciado: "En la física moderna, se prefiere hablar de 'masa inercial' constante en lugar de una 'masa que aumenta con la velocidad'."

explicacion: |
  El concepto de 'masa relativista' es una interpretación antigua; la física actual usa masa en reposo constante y energía variable.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["secuencia"]

tipo: ordenar
opciones_explicitas: ["observar_movimiento", "medir_longitud_contraccion", "medir_tiempo_dilatado"]
respuesta_orden: ["observar_movimiento", "medir_longitud_contraccion", "medir_tiempo_dilatado"]

enunciado: "Ordena los pasos para un observador que analiza una nave espacial que pasa a gran velocidad:"

explicacion: |
  Primero se establece el marco, luego se miden las dimensiones espaciales y finalmente los intervalos temporales.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["energia_reposo"]

respuesta: "m_0 * c^2"
tipo: "completar"
respuestas_validas:
  - "m_0 * c^2"
  - "m_0*c^2"
  - "m_0 * c^2"

enunciado: "La energía de un objeto en reposo se calcula como la masa en reposo multiplicado por ___."

explicacion: |
  La energía de reposo es el producto de la masa en reposo por el cuadrado de la velocidad de la luz.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["paradoja_gemelos"]

respuesta: "viajero"
tipo: "mc"
opciones_explicitas: ["viajero", "en_la_tierra", "ambos", "ninguno"]

enunciado: "En la paradoja de los gemelos, el gemelo que experimenta la aceleración (el que realiza el viaje espacial) es el ___."

explicacion: |
  El gemelo que viaja y acelera es quien experimenta la dilatación del tiempo de forma asimétrica.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["energia"]

respuesta: "aumenta"
tipo: "completar"
respuestas_validas:
  - "aumenta"
  - "aumenta_con_la_velocidad"

enunciado: "A medida que la velocidad de una partícula aumenta, su energía total ___."

explicacion: |
  La energía total aumenta con la velocidad, tendiendo a infinito cuando $v \to c$.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["fotón"]

respuesta: "no_tiene_masa_en_reposo"
tipo: "mc"
opciones_explicitas: ["no_tiene_masa_en_reposo", "tiene_masa_infinita", "tiene_masa_cero", "su_masa_es_c"]

enunciado: "Un fotón (partícula de luz) se caracteriza porque ___."

explicacion: |
  Los fotones no tienen masa en reposo, por lo que siempre viajan a la velocidad $c$.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["longitud"]

tipo: vf
respuesta: verdadero

enunciado: "Un objeto que se mueve a una velocidad cercana a la luz parecerá más corto para un observador estacionario."

explicacion: |
  Este es el efecto de la contracción de Lorentz.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["energia_cinetica_relativista"]

respuesta: "diferente"
tipo: "mc"
opciones_explicitas: ["diferente", "igual", "menor", "nula"]

enunciado: "A velocidades cercanas a la luz, la energía cinética calculada por la física clásica es ___ a la de la física relativista."

explicacion: |
  La física clásica falla a velocidades relativistas, subestimando la energía necesaria.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["particulas_subatomicas"]

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["mayor", "menor", "igual", "nula"]

enunciado: "En los aceleradores de partículas, los protones adquieren una energía ___ a la que tendrían en física clásica a la misma velocidad."

explicacion: |
  La energía relativista es mayor que la clásica debido al factor $\gamma$.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "avanzado"
  tags: ["espacio_tiempo"]

respuesta: "un_solo_tejido"
tipo: "completar"
respuestas_validas:
  - "un_solo_tejido"
  - "un_solo_continuo"

enunciado: "La relatividad especial sugiere que el espacio y el tiempo no son entidades separadas, sino que forman ___."

explicacion: |
  El concepto de espacio-tiempo une las tres dimensiones espaciales y la dimensión temporal.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["satelites"]

respuesta: "atrasan"
tipo: "mc"
opciones_explicitas: ["atrasan", "adelantan", "se_detienen", "no_cambian"]

enunciado: "Si un satélite se mueve a gran velocidad respecto a la Tierra, sus relojes ___ respecto a los de la Tierra (debido solo a la dilatación del tiempo por velocidad)."

explicacion: |
  La dilatación del tiempo hace que el reloj en movimiento marque menos tiempo transcurrido.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "intermedio"
  tags: ["simultaneidad"]

respuesta: falso
tipo: vf

enunciado: "Si dos eventos son simultáneos en un marco inercial, serán simultáneos para todos los demás marcos inerciales."

explicacion: |
  La simultaneidad es relativa al movimiento del observador.
```

```
metadata:
  materia: "fisica"
  tema: "relatividad_especial"
  nivel: "basico"
  tags: ["energia"]

respuesta: "c^2"
tipo: "completar"
respuestas_validas:
  - "c^2"
  - "c^2"
  - "c^2"

enunciado: "En la famosa ecuación de Einstein, la energía es igual a la masa por la velocidad de la luz al ___."

explicacion: |
  La relación es proporcional al cuadrado de la velocidad de la luz.
```

## Sección: lentes-convergentes-divergentes (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes", "definicion"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["divergente", "convergente", "plana"]

enunciado: "Una lente que es más gruesa en el centro que en los bordes se denomina lente ________."

explicacion: |
  Las lentes convergentes tienen su parte central más gruesa y tienden a unir los rayos de luz en un punto llamado foco.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["luz", "rayos", "optica"]

respuesta: verdadero
tipo: vf
enunciado: "En una lente divergente, los rayos de luz paralelos que inciden sobre ella se separan tras atravesarla."

explicacion: |
  Es verdadero. Las lentes divergentes provocan que los rayos salgan de la lente con una trayectoria que se aleja del eje principal.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["foco", "distancia_focal"]

respuesta: "foco"
tipo: completar
respuestas_validas:
  - "foco"

enunciado: "El punto donde convergen los rayos de luz paralentes después de pasar por una lente convergente se denomina ________."

explicacion: |
  El foco es el punto de intersección de los rayos de luz que han sido refractados por la lente.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["lentes", "forma"]

respuesta_orden: ["Biconvexa", "Menisco convergente", "Bicóncava", "Menisco divergente"]
tipo: ordenar

opciones_explicitas: ["Biconvexa", "Menisco convergente", "Bicóncava", "Menisco divergente"]

enunciado: "Ordena las siguientes lentes de mayor grosor central a menor grosor central (de la que más converge a la que más diverge):"

explicacion: |
  La lente biconvexa es la que tiene mayor grosor en el centro, seguida por las meniscos convergentes, luego las bicóncavas y finalmente las meniscos divergentes.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["foco", "signo", "convencion"]

respuesta: "negativo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "cero"]

enunciado: "Según la convención de signos en óptica, la distancia focal de una lente divergente es siempre un valor ________."

explicacion: |
  En el sistema de signos estándar, las lentes divergentes tienen una distancia focal negativa, mientras que las convergentes tienen una positiva.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes"]

respuesta: "convergente"
tipo: "mc"
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Una lente que es más gruesa en el centro que en los bordes se denomina lente _______."

explicacion: |
  Las lentes convergentes son más gruesas en el centro y hacen que los rayos de luz se unan en un punto llamado foco.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "foco"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es cierto que una lente divergente tiene una distancia focal negativa en los sistemas de signos estándar?"

explicacion: |
  Correcto. Por convención, las lentes convergentes tienen foco positivo y las divergentes tienen foco negativo.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["calculo", "optica"]

variables:
  distancia_objeto: 10
  distancia_imagen: -30
  distancia_focal: 15

respuesta: 15
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un objeto se coloca a {distancia_objeto} cm de una lente. Se forma una imagen virtual a {distancia_imagen} cm de la lente. ¿Cuál es el valor de la distancia focal de la lente en cm?"

pasos:
  - "Utilizar la ecuación de los lentes delgadas: 1/f = 1/s + 1/s'"
  - "Sustituir los valores: 1/f = 1/{distancia_objeto} + 1/{distancia_imagen}"
  - "Calcular el resultado final para f."

explicacion: |
  Aplicando la fórmula de lentes delgadas: 1/f = 1/s + 1/s'.
  Sustituyendo los valores dados:
  1/f = 1/10 + 1/(-30)
  1/f = 3/30 - 1/30
  1/f = 2/30
  1/f = 1/15
  Por lo tanto, f = 15 cm.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["calculo", "optica"]

variables:
  s: 10
  s_prime: -30
  f_calc: 1 / (1/s + 1/s_prime)

respuesta: 15.0
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un objeto se encuentra a {s} cm de una lente convergente y forma una imagen a {s_prime} cm de la lente. ¿Cuál es la distancia focal de la lente en cm?"

pasos:
  - "Identificar datos: s = 10, s' = -30"
  - "Aplicar la fórmula de Gauss: 1/f = 1/s + 1/s'"
  - "1/f = 1/10 + 1/(-30) = 3/30 - 1/30 = 2/30"
  - "f = 30 / 2 = 15"

explicacion: |
  Usando la ecuación de Gauss: 1/f = 1/10 - 1/30 = 2/30. Al invertir, f = 15 cm.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["formula", "optica"]

respuesta: "Gauss"
tipo: "completar"
respuestas_validas:
  - "Gauss"
  - "lentes delgadas"

enunciado: "La relación fundamental para el estudio de lentes delgadas es la ecuación de _______ que relaciona la distancia focal con las distancias del objeto y la imagen."

explicacion: |
  La ecuación de Gauss (o de los lentes delgadas) es la base del estudio de la óptica geométrica.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["metodologia", "optica"]

tipo: ordenar

opciones_explicitas: ["Identificar signos de s y s'", "Aplicar la ecuación de Gauss", "Despejar la variable solicitada", "Verificar la naturaleza de la imagen"]

respuesta_orden: ["Identificar signos de s y s'", "Aplicar la ecuación de Gauss", "Despejar la variable solicitada", "Verificar la naturaleza de la imagen"]

enunciado: "Ordena los pasos lógicos para resolver un problema de distancia de imagen en una lente:"

explicacion: |
  Primero se deben asignar los signos correctos (convención de signos), luego aplicar la fórmula matemática, despejar la incógnita y finalmente interpretar si la imagen es real o virtual según su signo.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes"]

respuesta: "divergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Una lente que hace que los rayos de luz paralelos que pasan a través de ella se separen (diverjan) se denomina lente ________."

explicacion: |
  Las lentes divergentes (cóncavas) separan los rayos de luz, mientras que las convergentes (convexas) los enfocan en un punto.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["distancia_focal", "signos"]

variables:
  escenario: uno_de([["convergente", "positiva"], ["divergente", "negativa"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["positiva", "negativa"]

enunciado: "En el convenio de signos estándar para la óptica, si nos encontramos con una lente {escenario[0]}, su distancia focal se considera como ________."

explicacion: |
  Por convención, las lentes convergentes tienen distancia focal positiva y las divergentes tienen distancia focal negativa.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["naturaleza_imagen"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que una lente divergente forme una imagen real para un objeto situado en el infinito (rayos paralelos)?"

explicacion: |
  Falso. Las lentes divergentes siempre forman imágenes virtuales, derechas y de menor tamaño para objetos reales.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["confusion_comun", "imagen_virtual"]

variables:
  caso: ["convergente", "virtual"]

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "virtual"

enunciado: "Un error común es pensar que todas las imágenes que vemos a través de una lupa son invertidas. Sin embargo, si usamos una lente {caso[0]} como lupa (con el objeto dentro del foco), la imagen que vemos es de tipo ________."

explicacion: |
  Las lentes divergentes solo producen imágenes virtuales (derechas), mientras que las convergentes pueden producir imágenes reales (invertidas) o virtuales (derechas) dependiendo de la posición del objeto.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["proceso_optico"]

respuesta_orden: ["emisión", "refracción", "enfoque"]
tipo: ordenar
opciones_explicitas: ["emisión", "refracción", "enfoque"]

enunciado: "Ordena los pasos lógicos que ocurren cuando un objeto real es proyectado por una lente convergente sobre una pantalla:"

pasos:
  - "El objeto emite rayos de luz."
  - "La luz atraviesa la lente y cambia de dirección."
  - "Los rayos se cruzan en un punto sobre la pantalla."

explicacion: |
  Primero el objeto emite la luz, luego la lente refracta los rayos y finalmente estos convergen en un punto para formar la imagen.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes"]

opciones_explicitas: ["Las lentes convergentes son más gruesas en el centro que en los bordes", "Las lentes divergentes son más gruesas en el centro que en los bordes", "Ambas tienen la misma forma"]

respuesta: "Las lentes convergentes son más gruesas en el centro que en los bordes"
tipo: mc

enunciado: "En términos de su geometría física, la principal distinción respecto a su espesor es que ___."

explicacion: |
  Las lentes convergentes (o biconvexas) tienen un centro más grueso que sus bordes, lo que permite que los rayos de luz se unan en un punto focal. Las divergentes (bicóncavas) son más delgadas en el centro.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "rayos_luz"]

variables:
  tipo_lente: uno_de(["convergente", "divergente"])

respuesta: tipo_lente == "divergente"
tipo: vf
enunciado: "Si utilizamos una lente {tipo_lente}, los rayos de luz paralelos que inciden sobre ella se separan (divergen) tras el paso por la lente."

explicacion: |
  En una lente convergente, los rayos se acercan entre sí para pasar por un punto común. En una divergente, los rayos se alejan.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["imagen", "foco"]

variables:
  escenario: uno_de([0, 1])
  escenario_datos: [["lente convergente", "real"], ["lente divergente", "virtual"]]

respuesta: escenario_datos[escenario][1]
tipo: completar
respuestas_validas:
  - "real"
  - "virtual"

enunciado: "Considerando una lente {escenario_datos[escenario][0]}, la imagen formada por un objeto situado más allá del foco es ________."

explicacion: |
  Las lentes convergentes pueden formar imágenes reales (si el objeto está lejos) o virtuales (si está muy cerca). Las lentes divergentes siempre forman imágenes virtuales.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["foco", "signo"]

tipo: mc
opciones_explicitas: ["Positiva", "Negativa"]
respuesta: "Positiva"

enunciado: "En el convenio de signos de la óptica, la distancia focal de una lente convergente es siempre ________."

explicacion: |
  Por convención, las lentes convergentes tienen una distancia focal positiva ($f > 0$), mientras que las lentes divergentes tienen una distancia focal negativa ($f < 0$).
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["rayos_luz", "proceso"]

opciones_explicitas: ["Incidencia de rayos paralelos", "Refracción en la superficie de la lente", "Convergencia en el punto focal"]

respuesta_orden: ["Incidencia de rayos paralelos", "Refracción en la superficie de la lente", "Convergencia en el punto focal"]
tipo: ordenar

enunciado: "Para que una lente convergente enfoque la luz en un punto, el proceso sigue este orden lógico:"

explicacion: |
  Primero los rayos viajan hacia la lente (incidencia), luego cambian de dirección al cruzar el material (refracción) y finalmente se cruzan en un punto (foco).
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["optica", "salud", "lentes"]

variables:
  datos: [["un paciente con miopía", "divergente"], ["un paciente con hipermetropía", "convergente"]]
  idx: uno_de([0, 1])

enunciado: "Para corregir la visión de {datos[idx][0]}, se requiere el uso de una lente de tipo {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

explicacion: |
  La miopía ocurre cuando la imagen se forma antes de la retina; una lente divergente ayuda a alejar el punto focal hacia la retina.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["luz", "refraccion"]

respuesta: "convergen"
tipo: completar
respuestas_validas:
  - "convergen"

enunciado: "Cuando los rayos de luz paralelos atraviesan una lente convergente, estos ___ en un punto llamado foco."

explicacion: |
  Las lentes convergentes (o convexas) hacen que los rayos de luz se junten en un punto focal.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["calculo", "foco"]

variables:
  caso: uno_de([[10, 20], [15, 30], [20, 40]])
  focal: caso[1]

enunciado: "Un objeto se coloca a una distancia de {caso[0]} cm de una lente convergente cuya distancia focal es de {focal} cm (el objeto está dentro del foco, ya que {caso[0]} < {focal}). ¿La imagen formada será virtual y estará ubicada del mismo lado de la lente que el objeto?"

respuesta: verdadero
tipo: vf

explicacion: |
  Como el objeto está entre el foco y la lente (distancia objeto < f), la imagen es virtual, derecha, aumentada y se ubica del mismo lado de la lente que el objeto.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["proceso", "optica"]

respuesta_orden: ["Luz incidente", "Refracción en la lente", "Formación de la imagen"]
tipo: ordenar

opciones_explicitas: ["Luz incidente", "Refracción en la lente", "Formación de la imagen"]

enunciado: "Ordena el proceso físico que ocurre cuando un rayo de luz atraviesa una lente para formar una imagen:"

explicacion: |
  Primero llega la luz, luego cambia de dirección al entrar/salir de la lente (refracción) y finalmente se proyecta la imagen.
```

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["geometria", "lentes"]

variables:
  idx: uno_de([0, 1])
  pares: [["convergente", "más gruesa en el centro"], ["divergente", "más delgada en el centro"]]
  tipo_lente: pares[idx][0]
  forma: pares[idx][1]

enunciado: "Una lente es de tipo {tipo_lente} si es {forma}."

respuesta: tipo_lente
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

explicacion: |
  Las lentes convergentes son más gruesas en el centro (convexas), mientras que las divergentes son más delgadas en el centro (cóncavas).
```

## Sección: resonancia-frecuencia-natural (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["definicion", "vibracion"]

respuesta: "frecuencia natural"
tipo: completar
respuestas_validas:
  - "frecuencia natural"

enunciado: "La ___ es la frecuencia a la cual un sistema tiende a oscilar cuando se le aplica un impulso inicial."

explicacion: |
  Cada objeto tiene una frecuencia natural característica que depende de su masa y su rigidez.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["resonancia", "energia"]

respuesta: "frecuencia externa"
tipo: mc
opciones_explicitas: ["frecuencia externa", "frecuencia de reposo", "frecuencia de gravedad", "frecuencia de fricción"]

enunciado: "La resonancia ocurre cuando la frecuencia de una fuerza periódica aplicada coincide con la ___ del objeto."

explicacion: |
  Cuando las frecuencias coinciden, la transferencia de energía es máxima, aumentando la amplitud de la oscilación.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["amplitud", "energia"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene", "se anula"]

enunciado: "En un estado de resonancia, la amplitud de la oscilación del sistema ___."

explicacion: |
  La resonancia permite que la energía se acumule en el sistema, maximizando la amplitud.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["masa", "rigidez"]

respuesta: "masa"
tipo: completar
respuestas_validas:
  - "masa"

enunciado: "Si aumentamos la ___ de un sistema oscilante, su frecuencia natural disminuirá."

explicacion: |
  La frecuencia natural es inversamente proporcional a la raíz cuadrada de la masa.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual", "nula"]

enunciado: "Un objeto más rígido que otro, manteniendo la misma masa, tendrá una frecuencia natural ___."

explicacion: |
  A mayor rigidez (constante elástica), la frecuencia natural es mayor.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  idx: uno_de([0,1])
  masas: [1.0, 4.0]
  m: masas[idx]
  k: 100

respuesta: (1 / (2 * 3.14159)) * sqrt(k / m)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un sistema tiene una constante de rigidez de 100 N/m y una masa de {m} kg. Calcule su frecuencia natural en Hz (f = 1/(2*pi)*sqrt(k/m))."

pasos:
  - "Calcular la raíz cuadrada de k/m"
  - "Dividir por 2*pi"

explicacion: |
  La fórmula es f = (1 / 2π) * sqrt(k/m) = (1 / 2π) * sqrt(100/{m}) = {(1 / (2 * 3.14159)) * sqrt(k / m)} Hz.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["relacion"]

respuesta: "disminuye"
tipo: mc
opciones_explicitas: ["disminuye", "aumenta", "se duplica", "se mantiene"]

enunciado: "Si la masa de un resonador se cuadruplica, su frecuencia natural se ___."

explicacion: |
  Como f ∝ 1/sqrt(m), si m se multiplica por 4, f se divide por 2.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["amortiguamiento"]

respuesta: "fuerza de fricción"
tipo: completar
respuestas_validas:
  - "fuerza de fricción"

enunciado: "La amplitud en la resonancia no es infinita en la realidad debido a la presencia de la ___."

explicacion: |
  El amortiguamiento disipa la energía, limitando la amplitud máxima en la resonancia.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["grafico"]

respuesta: "pico"
tipo: mc
opciones_explicitas: ["pico", "valle", "plano", "curva"]

enunciado: "En un gráfico de amplitud vs frecuencia, la resonancia se identifica por un ___."

explicacion: |
  El punto de máxima amplitud se denomina pico de resonancia.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["periodo"]

respuesta: "1/f"
tipo: completar
respuestas_validas:
  - "1/f"

enunciado: "El periodo de oscilación en resonancia es el inverso de la ___."

explicacion: |
  T = 1/f.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "En un sistema real con amortiguamiento, la amplitud en la resonancia es infinita."

explicacion: |
  Falso. El amortiguamiento siempre limita la amplitud en sistemas físicos reales.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "Si un objeto es más pesado, su frecuencia natural es mayor."

explicacion: |
  Falso. A mayor masa, menor frecuencia natural.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "La resonancia solo ocurre en objetos sólidos, nunca en ondas sonoras."

explicacion: |
  Falso. El aire puede entrar en resonancia (como en un instrumento de viento).
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "Un sistema con un periodo muy corto tiene una frecuencia natural muy baja."

explicacion: |
  Falso. Periodo corto implica alta frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "Añadir masa a un columpio lo hace oscilar más rápido."

explicacion: |
  Falso. Añadir masa aumenta el periodo y disminuye la frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "más alta"
tipo: mc
opciones_explicitas: ["más alta", "más baja", "igual", "nula"]

enunciado: "Comparando un resorte rígido con uno blando (misma masa), la frecuencia natural del rígido es ___."

explicacion: |
  La rigidez es directamente proporcional a la frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["contraste"]

respuesta: "menor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "En un sistema con mucho amortiguamiento, la amplitud de resonancia es ___ que en uno con poco amortiguamiento."

explicacion: |
  El amortiguamiento reduce la amplitud máxima.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: "inversamente"
tipo: completar
respuestas_validas:
  - "inversamente"

enunciado: "La frecuencia natural y el periodo de oscilación son ___ proporcionales."

explicacion: |
  Si uno sube, el otro baja.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "frecuencia de los pasos"
tipo: mc
opciones_explicitas: ["frecuencia de los pasos", "frecuencia de la gravedad", "frecuencia del viento", "frecuencia de la temperatura"]

enunciado: "Un puente puede colapsar si la gente camina sobre él a una ___ que coincida con su frecuencia natural."

explicacion: |
  Este es un ejemplo clásico de resonancia mecánica destructiva.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "cuerda"
tipo: completar
respuestas_validas:
  - "cuerda"

enunciado: "En una guitarra, la nota que escuchamos depende de la frecuencia natural de la ___."

explicacion: |
  La tensión y longitud de la cuerda determinan su frecuencia natural.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "longitud"
tipo: completar
respuestas_validas:
  - "longitud"

enunciado: "Para cambiar la frecuencia natural de un péndulo simple, debemos variar su ___."

explicacion: |
  f = 0.5 * sqrt(g/L).
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "sismos"
tipo: mc
opciones_explicitas: ["sismos", "viento", "ruido", "luz"]

enunciado: "Los ingenieros diseñan edificios para que su frecuencia natural no coincida con la de los ___."

explicacion: |
  Evitar la resonancia con ondas sísmicas previene daños estructurales.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "sintonizar"
tipo: completar
respuestas_validas:
  - "sintonizar"

enunciado: "Al girar el dial de un radio antiguo, estamos intentando ___ la frecuencia del circuito con la de la emisora."

explicacion: |
  Es un proceso de resonancia eléctrica.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas:
  - "frecuencia"

enunciado: "Un cantante puede romper una copa de cristal si emite una nota cuya ___ coincida con la del cristal."

explicacion: |
  La energía de la onda sonora se transfiere al cristal hasta que la amplitud rompe la estructura.
```

```
metadata:
  materia: "fisica"
  tema: "resonancia_frecuencia_natural"
  nivel: "basico"
  tags: ["aplicacion"]

respuesta: "una sola"
tipo: mc
opciones_explicitas: ["una sola", "muchas", "ninguna", "cero"]

enunciado: "Un diapasón está diseñado para vibrar a ___ frecuencia natural específica."

explicacion: |
  Es un oscilador armónico con una frecuencia muy definida y pura.
```

## Sección: formacion-de-imagenes-optica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["optica", "imagen-virtual", "imagen-real"]

respuesta: verdadero
tipo: vf

enunciado: "Una imagen es virtual cuando los rayos de luz parecen provenir de un punto situado detrás de la pantalla o plano de observación."

explicacion: |
  Las imágenes virtuales se forman por la intersección de las prolongaciones de los rayos de luz, por lo que no pueden proyectarse en una pantalla.
```

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["optica", "terminologia"]

opciones_explicitas: ["real", "virtual", "imaginaria", "teórica"]
respuesta: "real"
tipo: mc

enunciado: "Cuando los rayos de luz realmente convergen en un punto y pueden ser captados por una pantalla, la imagen formada es de tipo ___."

explicacion: |
  Las imágenes reales se forman por la convergencia real de los rayos luminosos.
```

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "intermedio"
  tags: ["espejos", "lentes", "posicion-objeto"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [[10, "virtual"], [5, "virtual"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "virtual"

enunciado: "Si un objeto se coloca a una distancia de {datos[escenario_idx][0]} cm de un espejo convexo, la imagen resultante será ___."

explicacion: |
  En los espejos convexos, la imagen siempre es virtual, derecha y de menor tamaño, sin importar la posición del objeto.
```

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["propiedades", "imagen-virtual"]

respuesta: falso
tipo: vf

enunciado: "Una característica fundamental de las imágenes virtuales es que siempre son invertidas respecto al objeto."

explicacion: |
  Las imágenes virtuales suelen ser derechas (como en un espejo plano). Las imágenes invertidas suelen ser reales.
```

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "intermedio"
  tags: ["proceso", "formacion-imagen"]

opciones_explicitas: ["Emisión de luz por el objeto", "Propagación de rayos hacia la lente", "Convergencia de rayos en un punto", "Proyección en una pantalla"]
respuesta_orden: ["Emisión de luz por el objeto", "Propagación de rayos hacia la lente", "Convergencia de rayos en un punto", "Proyección en una pantalla"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos necesarios para la formación de una imagen real mediante una lente convergente:"

explicacion: |
  Para que una imagen sea real, los rayos deben viajar desde el objeto, pasar por la lente, converger en un punto y finalmente ser captados por una superficie (pantalla).
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos", "imágenes", "virtual"]

enunciado: "Si un objeto se coloca a una distancia mayor que el doble de la distancia focal de un espejo cóncavo (d > 2f), la imagen formada es ___."

opciones_explicitas: ["real", "virtual", "imaginaria"]
respuestas_validas:
  - "real"

respuesta: "real"
tipo: "mc"

explicacion: |
  Cuando el objeto está más allá del centro de curvatura (2f), los rayos reflejados divergen después de cruzarse, formando una imagen real, invertida y de menor tamaño.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos", "convergentes", "calculo"]

variables:
  f: 15
  d_objeto: 30

enunciado: "Un objeto se sitúa a {d_objeto} cm de un espejo cóncavo con una distancia focal de {f} cm. ¿A qué distancia del espejo se forma la imagen?"

pasos:
  - "Utilizar la ecuación de los espejos: 1/f = 1/d_objeto + 1/d_imagen"
  - "Despejar la distancia de la imagen: d_imagen = (f * d_objeto) / (d_objeto - f)"
  - "Calcular: (15 * 30) / (30 - 15) = 450 / 15 = 30"

respuesta: 30
tipo: "input"
tolerancia_abs: 0

explicacion: |
  Aplicando la fórmula: 1/15 = 1/30 + 1/d_imagen. 
  Esto nos da 1/d_imagen = 1/15 - 1/30 = 1/30. 
  Por lo tanto, d_imagen = 30 cm.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["conceptos", "espejos"]

enunciado: "¿Una imagen virtual puede ser proyectada sobre una pantalla?"

respuesta: falso
tipo: "vf"

explicacion: |
  Las imágenes virtuales se forman por la intersección de rayos prolongados y no por la intersección de rayos reales, por lo que no pueden ser proyectadas.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["magnitud", "espejos"]

variables:
  f: 10
  d_obj: 5

enunciado: "Un objeto de 5 cm de altura se coloca a {d_obj} cm de un espejo cóncavo con foco de {f} cm. ¿Cuál es la altura de la imagen formada?"

pasos:
  - "Calcular la distancia de la imagen: 1/10 = 1/5 + 1/d_img => d_img = -10 cm"
  - "Calcular la magnificación (m): m = -d_img / d_obj = -(-10) / 5 = 2"
  - "Calcular la altura de la imagen (h_img): h_img = m * h_objeto = 2 * 5 = 10"

respuesta: 10
tipo: "input"
tolerancia_abs: 0

explicacion: |
  Como el objeto está entre el foco y el espejo, la imagen es virtual y derecha.
  d_img = (10 * 5) / (5 - 10) = 50 / -5 = -10 cm.
  m = -(-10) / 5 = 2.
  Altura = 2 * 5 = 10 cm.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["procesos", "óptica"]

enunciado: "Ordena los pasos para determinar si una imagen es real o virtual usando el signo de la distancia de la imagen (d_img):"

opciones_explicitas: ["Calcular d_img con la ecuación de Gauss", "Determinar si el signo de d_img es positivo o negativo", "Concluir si la imagen es real o virtual"]

respuesta_orden: ["Calcular d_img con la ecuación de Gauss", "Determinar si el signo de d_img es positivo o negativo", "Concluir si la imagen es real o virtual"]
tipo: "ordenar"

explicacion: |
  Primero se obtiene el valor numérico de la distancia, luego se analiza su signo (positivo para real, negativo para virtual) y finalmente se da la conclusión.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "espejos", "imágenes"]

respuesta: verdadero
tipo: vf

enunciado: "Una imagen es siempre real si los rayos de luz convergen en un punto físico después de reflejarse o refractarse."

explicacion: |
  Una imagen es real cuando los rayos de luz se cruzan físicamente en el espacio. Una imagen es virtual cuando los rayos parecen provenir de un punto, pero no pasan por él (como en un espejo plano).
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos_curvos", "imágenes"]

respuesta: "real"
tipo: mc
opciones_explicitas: ["real", "virtual"]

enunciado: "Si un objeto se coloca entre el foco y el centro de curvatura de un espejo cóncavo, la imagen resultante es de tipo ___."

explicacion: |
  Para un espejo cóncavo, cuando el objeto está más allá del foco (entre F y C), los rayos convergen frente al espejo, formando una imagen real e invertida.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos", "lentes"]

respuesta: "pequeña"
tipo: completar
respuestas_validas:
  - "pequeña"
  - "menor"
  - "reducida"

enunciado: "En un espejo convexo, la imagen siempre es ___ respecto al objeto."

explicacion: |
  Los espejos convexos siempre producen imágenes virtuales, derechas y de menor tamaño que el objeto, independientemente de la posición.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos_planos"]

respuesta: "derecha"
tipo: completar
respuestas_validas:
  - "derecha"

enunciado: "En un espejo plano, la imagen que se observa es siempre de orientación ___."

explicacion: |
  En un espejo plano, la imagen es virtual, de igual tamaño y mantiene la misma orientación (derecha), aunque presenta inversión lateral (enantiomorfismo).
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["lentes", "proceso"]

opciones_explicitas: ["Objeto frente a la lente", "Lente refracta los rayos", "Intersección de rayos convergentes", "Formación de imagen real"]
respuesta_orden: ["Objeto frente a la lente", "Lente refracta los rayos", "Intersección de rayos convergentes", "Formación de imagen real"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos para la formación de una imagen real con una lente convergente cuando el objeto está fuera del foco:"

explicacion: |
  Primero el objeto emite luz, luego la lente refracta esos rayos, estos se cruzan en un punto real y finalmente se percibe la imagen.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "imagen_real", "imagen_virtual"]

respuesta: "real"
tipo: "mc"
opciones_explicitas: ["real", "virtual"]

enunciado: "Una imagen que puede ser proyectada sobre una pantalla porque los rayos de luz realmente convergen en un punto se denomina imagen _______."

explicacion: |
  Las imágenes reales se forman por la convergencia real de los rayos de luz y pueden proyectarse. Las imágenes virtuales se forman cuando los rayos parecen provenir de un punto, pero no pasan por él.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["optica", "imagen_virtual"]

respuesta: verdadero
tipo: "vf"

enunciado: "En el caso de una imagen virtual formada por un espejo plano, la imagen es siempre derecha respecto al objeto."

explicacion: |
  Las imágenes virtuales producidas por espejos planos son siempre derechas y de igual tamaño que el objeto, pero se encuentran detrás del espejo.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["optica", "orientacion"]

respuesta: "derecha"
tipo: "completar"
respuestas_validas:
  - "derecha"

enunciado: "Una imagen real suele ser invertida respecto al objeto; en cambio, si la imagen es virtual y se forma en un espejo plano, su orientación es siempre _______."

explicacion: |
  Las imágenes reales suelen ser invertidas (en lentes o espejos convexos/cóncavos según posición), mientras que las imágenes virtuales en espejos planos son siempre derechas.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["optica", "rayos_luz"]

opciones_explicitas: ["Rayos convergen en un punto real", "Rayos divergen y parecen provenir de un punto", "Rayos se propagan en línea recta sin interacción"]
respuesta_orden: ["Rayos convergen en un punto real", "Rayos divergen y parecen provenir de un punto", "Rayos se propagan en línea recta sin interacción"]
tipo: "ordenar"

enunciado: "Ordene los procesos físicos que describen la formación de una imagen real, una imagen virtual y la propagación de la luz, respectivamente."

explicacion: |
  1. La imagen real requiere convergencia de rayos en un punto físico.
  2. La imagen virtual ocurre cuando los rayos divergen pero su prolongación parece originar un punto.
  3. La propagación es la base de la trayectoria de los rayos.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "proyeccion"]

respuesta: "1"
tipo: "mc"
opciones_explicitas: ["0", "1"]

enunciado: "Si una imagen NO puede ser capturada en una pantalla física, ¿qué valor representa si la imagen es virtual? (1 para Sí, 0 para No)"

explicacion: |
  La capacidad de proyección es la diferencia fundamental: las imágenes reales se proyectan, las virtuales no.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos", "imagen_virtual"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["un espejo plano", "virtual"], ["una lupa", "virtual"]]

enunciado: "Al colocar un objeto frente a {datos[escenario_idx][0]}, la imagen que se observa es de tipo ___."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "virtual"
  - "real"

explicacion: |
  En un espejo plano, los rayos de luz parecen provenir de un punto detrás del espejo, por lo que la imagen es virtual.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["proyeccion", "imagen_real"]

variables:
  tipo_proyector_idx: uno_de([0,1])
  configuracion: [["objeto entre F y 2F", "real"], ["objeto más allá de 2F", "real"]]

enunciado: "Para que un proyector de cine pueda formar una imagen en la pantalla, la imagen debe ser de tipo ___."

opciones_explicitas: ["real", "virtual", "derecha", "invertida"]
respuesta: "real"
tipo: mc

explicacion: |
  Para que una imagen pueda ser proyectada en una pantalla física, los rayos de luz deben converger realmente en un punto, lo que define a una imagen real.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["lupa", "lente_convergente"]

variables:
  distancia_idx: uno_de([0,1])
  caso: [["objeto entre F y l", "virtual"], ["objeto más allá de 2F", "real"]]

enunciado: "Si usamos una lupa (lente convergente) y colocamos el objeto a una distancia ___, la imagen resultante será ___."

opciones_explicitas: ["virtual", "real"]
respuesta: "virtual"
tipo: mc

explicacion: |
  Cuando el objeto está entre el foco (F) y el centro óptico (l), los rayos divergen tras la lente y la imagen es virtual, derecha y de mayor tamaño.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["propiedades_imagen"]

enunciado: "Una imagen real se caracteriza por ser ___ respecto a la dirección de los rayos de luz."

opciones_explicitas: ["derecha", "invertida"]
respuesta: "invertida"
tipo: mc

explicacion: |
  Las imágenes reales formadas por una sola lente o espejo siempre presentan una inversión respecto al objeto.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejo_convexo", "seguridad"]

enunciado: "¿Es cierto que un espejo convexo (como los de los autos) siempre produce una imagen virtual?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. Los espejos convexos siempre divergen los rayos, por lo que la imagen siempre es virtual, derecha y de menor tamaño.
```

