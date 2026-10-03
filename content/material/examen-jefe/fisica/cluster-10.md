# Examen jefe — [PENDIENTE #745]

> Logro #745. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: semivida-desintegracion-exponencial (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["radiactividad", "conceptos_clave"]

respuesta: "semivida"
tipo: completar
respuestas_validas:
  - "semivida"
  - "vida media"

enunciado: "El tiempo necesario para que la actividad de una muestra radiactiva se reduzca a la mitad de su valor inicial se denomina ___."

explicacion: |
  La semivida (o vida media, $T_{1/2}$) es el intervalo de tiempo en el cual la cantidad de núcleos radiactivos presentes en una muestra se reduce exactamente a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["calculo", "constante_de_desintegracion"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 0.0693], [20, 0.0347]]

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.001

enunciado: "Si la semivida de un isótopo es de {datos[idx][0]} años, ¿cuál es su constante de desintegración (λ) aproximada?"

pasos:
  - "Calcular λ = ln(2) / T½"
  - "Usar ln(2) ≈ 0.693"

explicacion: |
  La relación entre la semivida (T½) y la constante de desintegración (λ) está dada por la fórmula: λ = ln(2) / T½.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["comportamiento", "exponencial"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que después de pasar exactamente dos semividas, la cantidad de núcleos radiactivos remanentes es el 50% de la cantidad inicial?"

explicacion: |
  Falso. Después de una semivida queda el 50%. Después de dos semividas, queda el 50% del 50%, es decir, el 25% de la muestra original.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["lineal", "exponencial", "logarítmica", "constante"]

enunciado: "La disminución de la actividad de una muestra radiactiva a lo largo del tiempo sigue un decaimiento de tipo ___."

explicacion: |
  La ley de desintegración radiactiva establece que la tasa de desintegración es proporcional al número de núcleos presentes, lo que resulta en una función de decaimiento exponencial.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["secuencia", "fracciones"]

respuesta_orden: ["100%", "50%", "25%", "12.5%"]
tipo: ordenar
opciones_explicitas: ["100%", "50%", "25%", "12.5%"]

enunciado: "Ordene de mayor a menor la cantidad de muestra radiactiva restante tras transcurrir 0, 1, 2 y 3 semividas respectivamente."

explicacion: |
  Cada semivida reduce la muestra a la mitad:
  - 0 semividas: 100%
  - 1 semivida: 50%
  - 2 semividas: 25%
  - 3 semividas: 12.5%
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["radiactividad", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La semivida (o vida media) es el tiempo necesario para que la cantidad de núcleos radiactivos de una muestra se reduzca a la mitad de su valor inicial."

explicacion: |
  Esta es exactamente la definición de semivida: el tiempo que tarda una muestra radiactiva en reducirse a la mitad de su cantidad inicial de núcleos.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["formula", "constante_desintegracion"]

respuesta: "ln(2)"
tipo: mc
opciones_explicitas: ["ln(2)", "1", "e", "0"]

enunciado: "La relación entre la constante de desintegración λ y la semivida T½ está dada por la expresión λ = ___ / T½."

explicacion: |
  La relación matemática es λ = ln(2) / T½. Por lo tanto, T½ = ln(2) / λ.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  escenario: uno_de([[100, 2], [80, 3], [50, 1]])

respuesta: escenario[0] / 4
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una muestra de un isótopo radiactivo tiene una masa inicial de {escenario[0]} g. Si la semivida del isótopo es de {escenario[1]} años, ¿cuántos gramos de la muestra permanecerán después de {escenario[1] * 2} años?"

pasos:
  - "Calcular el número de periodos de semivida transcurridos: $n = t / T_{1/2}$"
  - "Aplicar la fórmula de desintegración: $N = N_0 \\cdot (1/2)^n$"

explicacion: |
  1. El tiempo transcurrido es 2 veces la semivida ($n = 2$).
  2. La masa remanente es $N_0 \cdot (1/2)^2 = N_0 \cdot 1/4$.
  3. Si $N_0 = {escenario[0]}$, el resultado es {escenario[0] / 4} g.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["logaritmos", "tiempo"]

variables:
  caso: uno_de([[100, 25, 50], [200, 10, 100], [120, 20, 60]])

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "25"
  - "10"
  - "20"

enunciado: "Una muestra de sustancia radiactiva tiene una masa inicial de {caso[0]} g y una semivida de {caso[1]} años. Si actualmente la muestra tiene una masa de {caso[2]} g, ¿cuántos años han transcurrido?"

explicacion: |
  Para que la masa pase de {caso[0]} a {caso[2]}, la muestra debe haberse reducido a la mitad. 
  Esto ocurre exactamente después de 1 periodo de semivida. 
  Por lo tanto, han transcurrido {caso[1]} años.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["ordenar", "proceso"]

respuesta_orden: ["Muestra inicial", "50% de la muestra", "25% de la muestra", "12.5% de la muestra"]
tipo: ordenar
opciones_explicitas: ["Muestra inicial", "50% de la muestra", "25% de la muestra", "12.5% de la muestra"]

enunciado: "Ordene los eventos según la cantidad de masa remanente de una muestra radiactiva a medida que transcurren periodos sucesivos de semivida (de mayor a menor masa)."

explicacion: |
  En cada semivida, la cantidad de material se reduce a la mitad:
  1. Inicio: 100%
  2. 1ra semivida: 50%
  3. 2da semivida: 25%
  4. 3ra semivida: 12.5%
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "exponencial", "constante"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, 1.386], [0.3, 2.31]]

enunciado: "La semivida ($T_{1/2}$) y la constante de desintegración ($\\lambda$) están relacionadas mediante una fórmula logarítmica. Si la semivida de una muestra es de {datos[idx][0]} unidades de tiempo, el valor de la constante $\\lambda$ es aproximadamente ___."

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La relación es $\lambda = \ln(2) / T_{1/2}$.
  Para el caso de $T_{1/2} = {datos[idx][0]}$, $\lambda = 0.693/{datos[idx][0]} = {datos[idx][1]}$.
  La confusión común es intentar multiplicar en lugar de dividir o usar $\log_{10}$ en lugar de $\ln$.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["concepto", "porcentaje"]

opciones_explicitas: ["50%", "25%", "75%", "0%"]

enunciado: "Un error conceptual frecuente es pensar que después de dos semividas la muestra ha desaparecido por completo. Si una muestra tiene una actividad inicial de $A_0$, ¿qué fracción de la actividad original queda exactamente después de transcurrir un periodo de una semivida?"

respuesta: "50%"
tipo: mc

explicacion: |
  Por definición, la semivida es el tiempo necesario para que la cantidad de núcleos radiactivos se reduzca a la mitad (50%) de su valor inicial.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["concepto", "limite"]

respuesta: falso
tipo: vf

enunciado: "En un modelo de desintegración exponencial, la cantidad de núcleos radiactivos llega exactamente a cero después de un número finito de semividas."

explicacion: |
  Matemáticamente, la función exponencial N(t) = N0 e^(-lambda t) es una función asintótica al eje t, lo que significa que nunca llega a cero, aunque físicamente la muestra se agote cuando queda un solo átomo.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "masa"]

variables:
  idx: uno_de([0, 1])
  escenario: [[100, 2, 50], [80, 3, 40]]

enunciado: "Se tiene una muestra de {escenario[idx][0]} gramos de un isótopo con una semivida de {escenario[idx][1]} años. ¿Cuántos gramos de la muestra original quedan después de {escenario[idx][1]} años (exactamente una semivida)?"

pasos:
  - "Calcular cuántas semividas han transcurrido: n = t / T½ = 1"
  - "Aplicar la fórmula de reducción: M_final = M_inicial · (1/2)^n"

respuesta: escenario[idx][2]
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  En el primer caso: 100 · (1/2)^1 = 50.
  En el segundo caso: 80 · (1/2)^1 = 40.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["comparacion", "estabilidad"]

opciones_explicitas: ["Semivida larga $\\rightarrow$ Menor actividad $\\rightarrow$ Mayor estabilidad", "Semivida corta $\\rightarrow$ Mayor actividad $\\rightarrow$ Menor estabilidad"]

enunciado: "Para comparar la estabilidad de dos isótopos basándonos en su semivida y su actividad, ordena la siguiente relación lógica de menor a mayor estabilidad:"

respuesta_orden: ["Semivida corta $\\rightarrow$ Mayor actividad $\\rightarrow$ Menor estabilidad", "Semivida larga $\\rightarrow$ Menor actividad $\\rightarrow$ Mayor estabilidad"]
tipo: ordenar

explicacion: |
  Un isótopo con semivida corta desintegra sus núcleos muy rápido (alta actividad), lo que significa que es muy inestable. Un isótopo con semivida larga tarda mucho en desintegrar su masa, siendo más estable.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "conceptos_clave"]

respuesta: "lambda"
tipo: completar
respuestas_validas:
  - "lambda"
  - "lambda_constante"

enunciado: "En el modelo de desintegración radiactiva, mientras que la semivida ($T_{1/2}$) es el tiempo necesario para que la actividad se reduzca a la mitad, la ___ representa la probabilidad de desintegración por unidad de tiempo."

explicacion: |
  La constante de desintegración ($\lambda$) y la semivida ($T_{1/2}$) están relacionadas inversamente por la expresión: $\lambda = \ln(2) / T_{1/2}$.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["propiedades", "exponencial"]

variables:
  idx: uno_de([0, 1])
  datos: [["100", "50", "25"], ["80", "40", "20"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["100", "50", "25", "80", "40", "20"]

enunciado: "Si una muestra radiactiva tiene una actividad inicial de {datos[idx][0]} Bq y su semivida es de 10 años, ¿cuál será su actividad tras transcurrir exactamente un periodo de semivida?"

explicacion: |
  Por definición, tras transcurrir una semivida, la actividad de la muestra se reduce exactamente a la mitad de su valor inicial.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "basico"
  tags: ["teoria", "booleano"]

respuesta: falso
tipo: vf

enunciado: "La cantidad de núcleos radiactivos remanentes en una muestra disminuye de forma lineal con respecto al tiempo transcurrido."

explicacion: |
  La desintegración es un proceso estocástico que sigue una ley exponencial decreciente, no una función lineal.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["comparacion", "orden"]

respuesta_orden: ["vida_media_larga", "vida_media_corta"]
tipo: ordenar
opciones_explicitas: ["vida_media_larga", "vida_media_corta"]

enunciado: "Ordena estos conceptos de mayor a menor duración temporal (de la que tarda más en reducirse a la mitad a la que tarda menos):"

explicacion: |
  La semivida es una medida de la estabilidad del isótopo; a mayor semivida, mayor es el tiempo necesario para que la muestra decaiga significativamente.
```

```
metadata:
  materia: "fisica"
  tema: "semivida_desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "exponencial"]

variables:
  idx: uno_de([0, 1])
  escenario: [[20, 2, 5], [80, 3, 10]]

respuesta: escenario[idx][2]
tipo: mc
opciones_explicitas: [5, 10, 20, 2.5]

enunciado: "Considerando un escenario donde una muestra de {escenario[idx][0]} átomos tiene una semivida de 5 años, ¿cuántos átomos quedarán después de transcurrir {escenario[idx][1]} semividas?"

pasos:
  - "Identificar la cantidad inicial de núcleos."
  - "Calcular el factor de reducción: (1/2)^n, donde n es el número de semividas."
  - "Multiplicar la cantidad inicial por dicho factor."

explicacion: |
  Tras n semividas, la cantidad de núcleos es N = N0 · (1/2)^n. En este caso: {escenario[idx][0]} · (0.5)^{escenario[idx][1]} = {escenario[idx][2]}.
```

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["radiactividad", "carbono-14", "datacion"]

variables:
  t_medio: uno_de([5730, 8000, 1200])
  masa_inicial: 100
  masa_final: 25
  n_periodos: 2

respuesta: n_periodos
tipo: mc
opciones_explicitas: [1, 2, 3, 4]

enunciado: "Una muestra de Carbono-14 tiene una semivida de {t_medio} años. Si inicialmente tenemos una masa de {masa_inicial} g, ¿cuántos periodos de semivida han transcurrido si la masa final es de {masa_final} g?"

explicacion: |
  La masa se reduce a la mitad en cada periodo de semivida. 
  100g -> 50g (1 periodo) -> 25g (2 periodos).
  El número de periodos es log2(masa_inicial / masa_final).
```

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["medicina_nuclear", "isótopos"]

variables:
  datos: [[300, 150], [100, 50], [400, 200]]
  idx: uno_de([0, 1, 2])
  m_inicial: datos[idx][0]
  m_final: datos[idx][1]
  t_medio: 6

respuesta: m_final
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un radiofármaco con una semivida de {t_medio} horas se inyecta en un paciente con una actividad de {m_inicial} MBq. Tras transcurrir un tiempo equivalente a una semivida, la actividad medida es de ___ MBq."

explicacion: |
  Por definición, tras un periodo de semivida, la actividad se reduce exactamente a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "basico"
  tags: ["conceptos", "teoria"]

respuesta: falso
tipo: vf

enunciado: "En un proceso de desintegración exponencial, la cantidad de sustancia radiactiva disminuye de forma lineal con respecto al tiempo."

explicacion: |
  Falso. La disminución es exponencial, no lineal. La tasa de desintegración es proporcional a la cantidad de núcleos presentes.
```

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

variables:
  t_medio: 10
  m_0: 80

respuesta_orden: ["80", "40", "20", "10", "5"]
tipo: ordenar
opciones_explicitas: ["80", "40", "20", "10", "5"]

enunciado: "Ordena las masas resultantes de una muestra de {m_0} g tras transcurrir 1, 2, 3, 4 y 5 periodos de semivida (de mayor a menor):"

explicacion: |
  Cada paso divide la masa por 2: 80 -> 40 -> 20 -> 10 -> 5.
```

```
metadata:
  materia: "fisica"
  tema: "desintegracion_exponencial"
  nivel: "avanzado"
  tags: ["calculo", "exponencial"]

variables:
  escenario: uno_de([[100, 50, 10], [200, 100, 25], [80, 40, 20]])
  m_i: escenario[0]
  m_f: escenario[1]
  t_medio: 10
  t_total: 20
  respuesta_correcta: m_i / 4

respuesta: respuesta_correcta
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una muestra de {m_i} g de un isótopo tiene una semivida de {t_medio} años. ¿Cuántos gramos de la muestra quedarán después de {t_total} años?"

explicacion: |
  Usamos la fórmula N(t) = N0 * (1/2)^(t/t_medio).
  N(20) = {m_i} * (1/2)^(20/10) = {m_i} * (1/2)^2 = {m_i} / 4.
  En el caso seleccionado: {m_i} / 4 = {respuesta_correcta}.
```

## Sección: ojo-humano-instrumento-optico (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia", "optica"]

respuesta: "lente convergente"
tipo: completar
respuestas_validas:
  - "lente convergente"

enunciado: "El cristalino es una estructura del ojo que actúa como una ___ para enfocar la luz en la retina."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia", "imagen"]

respuesta: "real e invertida"
tipo: completar
respuestas_validas:
  - "real e invertida"

enunciado: "La imagen que se forma sobre la ___ es de naturaleza ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["fisiologia"]

respuesta: verdadero
tipo: vf
enunciado: "¿El cristalino cambia su distancia focal para permitir la acomodación visual?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["secuencia"]

respuesta_orden: ["entrada de luz", "refracción en el cristalino", "proyección en la retina"]
tipo: ordenar
opciones_explicitas: ["entrada de luz", "refracción en el cristalino", "proyección en la retina"]

enunciado: "Ordene el camino de la luz desde el exterior hasta la detección visual:"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["anatomia"]

respuesta: "controlar la cantidad de luz"
tipo: completar
respuestas_validas:
  - "controlar la cantidad de luz"

enunciado: "La función principal del iris es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos", "miopia"]

respuesta: "divergente"
tipo: completar
respuestas_validas:
  - "divergente"

enunciado: "En un ojo con miopía, la imagen se forma antes de la retina, por lo que se requiere una lente ___ para corregirlo."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos", "hipermetropia"]

respuesta: "convergente"
tipo: completar
respuestas_validas:
  - "convergente"

enunciado: "Para corregir la hipermetropía, donde el punto focal está detrás de la retina, se utiliza una lente ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos"]

respuesta: "delante"
tipo: completar
respuestas_validas:
  - "delante"

enunciado: "En un ojo miope, el punto focal de los rayos paralelos se encuentra ___ de la retina."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["defectos"]

respuesta: "cilíndrica"
tipo: completar
respuestas_validas:
  - "cilíndrica"

enunciado: "El astigmatismo se debe a una curvatura irregular de la córnea o el cristalino y se corrige con lentes ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "miopía"
tipo: mc
opciones_explicitas: ["miopía", "hipermetropía", "astigmatismo", "presbicia"]

enunciado: "¿Qué defecto impide ver con claridad los objetos lejanos?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f: 25.0
  d: 100.0

respuesta: 0.3333
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un objeto se coloca a {d} cm de una lente con una distancia focal de {f} cm, ¿cuál es la distancia de la imagen en metros? (Use la fórmula 1/f = 1/d + 1/d')"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f_m: 0.5

respuesta: 2.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcule la potencia (en dioptrías) de una lente cuya distancia focal es {f_m} metros."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  f_ojo: 0.02
  d_obj: 0.5

respuesta: 0.02083
tipo: completar
tolerancia_abs: 0.001

enunciado: "Un ojo tiene una distancia focal de {f_ojo} m. Si un objeto está a {d_obj} m, ¿a qué distancia de la lente se forma la imagen? (Calcule en metros)"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  h_obj: 2.0
  h_img: 10.0

respuesta: 5.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si el tamaño de un objeto es {h_obj} cm y el tamaño de su imagen es {h_img} cm, ¿cuál es el aumento lateral?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  p_correcta: 2.0
  p_incorrecta: -2.0

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Si una lente tiene una potencia de +2.0 dioptrías, ¿es una lente ___?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["teoria"]

respuesta: verdadero
tipo: vf
enunciado: "¿La luz debe refractarse al pasar del aire al córnea?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso
tipo: vf
enunciado: "¿La retina es la parte del ojo encargada de enfocar la luz mediante la refracción?"
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["fisiologia"]

respuesta: "pupila más pequeña"
tipo: completar
respuestas_validas:
  - "pupila más pequeña"

enunciado: "En condiciones de mucha luz, la pupila experimenta miosis, lo que significa que la pupila es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["fisiologia"]

respuesta: "pupila más grande"
tipo: completar
respuestas_validas:
  - "pupila más grande"

enunciado: "La midriasis es la dilatación de la pupila, es decir, la ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["teoria"]

respuesta: "distancia máxima"
tipo: completar
respuestas_validas:
  - "distancia máxima"

enunciado: "El punto remoto se define como la ___ a la que un objeto puede estar para ser visto con nitidez por un ojo con un defecto."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  idx: uno_de([0,1])
  tipo_lente: uno_de(["divergente", "convergente"])
  lente_texto: uno_de(["divergente", "convergente"])

respuesta: "divergente"
tipo: mc
opciones_explicitas: ["divergente", "convergente"]

enunciado: "Un paciente tiene miopía. El médico le receta una lente ___ para corregir su visión."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Para un paciente con hipermetropía, el tipo de lente necesario es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "se desvía"
tipo: completar
respuestas_validas:
  - "se desvía"

enunciado: "Cuando la luz pasa del aire al cristalino, su velocidad cambia y, por lo tanto, el rayo ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "real"
tipo: completar
respuestas_validas:
  - "real"

enunciado: "Si la imagen se puede proyectar sobre una pantalla, decimos que la imagen es ___."
```

```
metadata:
  materia: "fisica"
  tema: "ojo_humano_instrumento_optico"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: "presbicia"
tipo: completar
respuestas_validas:
  - "presbicia"
  - "miopía"
  - "astigmatismo"

enunciado: "La pérdida de la capacidad de acomodación del cristalino debido a la edad se conoce como ___."
```

## Sección: sonido-timbre-altura-intensidad (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades_basicas"
  nivel: "basico"
  tags: ["acustica", "conceptos"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas:
  - "frecuencia"

enunciado: "La propiedad del sonido que nos permite distinguir si un tono es agudo o grave se denomina ___."

explicacion: |
  La frecuencia (medida en Hertz) determina la altura del sonido. A mayor frecuencia, sonido más agudo; a menor frecuencia, sonido más grave.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_intensidad"
  nivel: "basico"
  tags: ["acustica", "amplitud"]

variables:
  es_grande: uno_de([verdadero, falso])

respuesta: verdadero
tipo: vf
enunciado: "Si la amplitud de una onda sonora aumenta, la intensidad (volumen) del sonido es mayor. ¿Es esto verdadero?"

explicacion: |
  Verdadero. La amplitud de la onda está directamente relacionada con la energía de la onda y, por lo tanto, con la intensidad sonora percibida.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_timbre"
  nivel: "basico"
  tags: ["acustica", "armonicos"]

respuesta: "timbre"
tipo: mc
opciones_explicitas: ["tono", "timbre", "intensidad"]

enunciado: "Si dos instrumentos diferentes (por ejemplo, un piano y un violín) tocan la misma nota con la misma intensidad, la cualidad que nos permite distinguir qué instrumento es cada uno se llama:"

explicacion: |
  El timbre depende de la forma de la onda y de la combinación de armónicos que componen el sonido, permitiendo distinguir fuentes sonoras con la misma frecuencia e intensidad.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_altura_frecuencia"
  nivel: "basico"
  tags: ["acustica", "frecuencia"]

variables:
  caso: uno_de([0, 1])
  datos: [[440, "grave"], [880, "agudo"]]
  frecuencia: datos[caso][0]
  altura: datos[caso][1]

respuesta: altura
tipo: mc
opciones_explicitas: ["agudo", "grave"]

enunciado: "Si un sonido tiene una frecuencia de {frecuencia} Hz, su altura es ___."

pasos:
  - "Identificar la frecuencia dada."
  - "Comparar con el concepto de altura (frecuencia alta = agudo, frecuencia baja = grave)."

explicacion: |
  En este caso, la frecuencia de {frecuencia} Hz se clasifica como {altura} según la escala de altura.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_altura_frecuencia"
  nivel: "basico"
  tags: ["acustica", "frecuencia"]

variables:
  idx: uno_de([0, 1])
  datos: [["440", "grave"], ["880", "agudo"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["agudo", "grave"]

enunciado: "Si un sonido tiene una frecuencia de {datos[idx][0]} Hz, su altura es ___."

explicacion: |
  La frecuencia determina la altura: frecuencias altas son agudas y frecuencias bajas son graves.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_orden_cualidades"
  nivel: "basico"
  tags: ["acustica", "orden"]

respuesta_orden: ["tono", "timbre", "intensidad"]
tipo: ordenar
opciones_explicitas: ["tono", "timbre", "intensidad"]

enunciado: "Ordena las siguientes cualidades del sonido de acuerdo a la propiedad física que representan (de la que depende la altura, a la que depende el timbre, y finalmente la que depende la amplitud):"

explicacion: |
  1. Tono (Frecuencia)
  2. Timbre (Forma de onda/Armónicos)
  3. Intensidad (Amplitud)
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["frecuencia", "tono"]

variables:
  f_ejemplo: 440

respuesta: f_ejemplo
tipo: completar
respuestas_validas:
  - 440

enunciado: "La altura de un sonido depende de su frecuencia. Si una nota musical tiene una frecuencia de {f_ejemplo} Hz, la altura de dicho sonido es de ___ Hz."

explicacion: |
  La altura está directamente relacionada con la frecuencia. A mayor frecuencia, sonido más agudo; a menor frecuencia, sonido más grave.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["intensidad", "amplitud"]

variables:
  amplitudes: [[0.5, 0.8], [0.3, 0.9]]
  idx: uno_de([0, 1])
  amplitud_a: amplitudes[idx][0]
  amplitud_b: amplitudes[idx][1]

respuesta: "Mayor"
tipo: mc
opciones_explicitas: ["Mayor", "Menor"]

enunciado: "Si comparamos dos ondas sonoras, una con amplitud {amplitud_a} y otra con amplitud {amplitud_b} (mayor que la primera), la onda con mayor amplitud tendrá una intensidad sonora ___."

explicacion: |
  La intensidad sonora depende del cuadrado de la amplitud de la onda. A mayor amplitud, mayor intensidad (volumen).
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["frecuencia", "periodo"]

variables:
  f_onda: 500

respuesta: 0.002
tipo: completar
tolerancia_abs: 0.0001

enunciado: "El periodo (T) es el inverso de la frecuencia (f), es decir, T = 1/f. Si una onda sonora tiene una frecuencia de {f_onda} Hz, ¿cuál es su periodo en segundos?"

pasos:
  - "Identificar la frecuencia: f = 500 Hz"
  - "Aplicar la fórmula: T = 1 / 500"
  - "Resultado: T = 0.002 s"

explicacion: |
  El periodo es el tiempo que tarda una onda en completar un ciclo completo. Al ser el inverso de la frecuencia, a mayor frecuencia, menor periodo.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["timbre", "forma_onda"]

respuesta: verdadero
tipo: vf

enunciado: "¿El timbre es la cualidad que nos permite distinguir dos sonidos de igual frecuencia e intensidad pero de distinta fuente?"

explicacion: |
  Verdadero. El timbre depende de la forma de la onda (armónicos) y es lo que nos permite distinguir, por ejemplo, un piano de un violín tocando la misma nota.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["proceso_sonido"]

respuesta_orden: ["Vibración de la fuente", "Propagación por el medio", "Recepción en el oído"]
tipo: ordenar
opciones_explicitas: ["Vibración de la fuente", "Propagación por el medio", "Recepción en el oído"]

enunciado: "Ordena cronológicamente los pasos necesarios para que un sonido sea percibido por un ser humano:"

explicacion: |
  Primero se genera la vibración, luego la onda viaja por el aire (medio) y finalmente llega al sistema auditivo.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_intensidad_amplitud"
  nivel: "basico"
  tags: ["sonido", "amplitud", "intensidad"]

variables:
  amplitud_onda: uno_de([0.1, 0.5, 0.9])

enunciado: "Si duplicamos la amplitud de una onda sonora, la intensidad percibida aumenta, pero la ___ de la onda sonora también cambia."

opciones_explicitas: ["frecuencia", "amplitud", "longitud"]
respuesta: "amplitud"
tipo: completar

explicacion: |
  La amplitud de la onda está directamente relacionada con la intensidad (volumen). Un aumento en la amplitud significa un sonido más fuerte. La frecuencia determina el tono, no la intensidad.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_tono_frecuencia"
  nivel: "basico"
  tags: ["sonido", "tono", "frecuencia"]

variables:
  frecuencia_hz: uno_de([200, 500, 1000])

enunciado: "Un sonido con una frecuencia de {frecuencia_hz} Hz se percibe como un tono más ___ que uno de {frecuencia_hz / 2} Hz."

opciones_explicitas: ["agudo", "grave", "fuerte"]
respuesta: "agudo"
tipo: mc

explicacion: |
  La frecuencia determina el tono (altura). A mayor frecuencia, el sonido es más agudo; a menor frecuencia, es más grave. El volumen (intensidad) depende de la amplitud, no de la frecuencia.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_timbre_forma_onda"
  nivel: "intermedio"
  tags: ["sonido", "timbre", "armonicos"]

variables:
  instrumento_a: uno_de(["piano", "violín"])
  instrumento_b: uno_de(["piano", "violín"])

enunciado: "Si dos instrumentos distintos tocan la misma nota con la misma intensidad, la diferencia en su ___ se debe a la forma de su onda y la presencia de armónicos."

opciones_explicitas: ["altura", "tono", "timbre"]
respuesta: "timbre"
tipo: mc

explicacion: |
  El timbre es la cualidad que nos permite distinguir dos sonidos de igual frecuencia e intensidad. Depende de la forma de la onda y de los armónicos que la componen.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_naturaleza_intensidad"
  nivel: "intermedio"
  tags: ["sonido", "intensidad", "magnitud"]

enunciado: "¿La intensidad de un sonido es una magnitud escalar o vectorial?"

opciones_explicitas: ["escalar", "vectorial"]
respuesta: "escalar"
tipo: mc

explicacion: |
  La intensidad sonora se define como la energía por unidad de tiempo y área, es una magnitud escalar ya que no tiene una dirección asociada en el espacio.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_frecuencia_periodo"
  nivel: "intermedio"
  tags: ["sonido", "frecuencia", "periodo"]

variables:
  f_valor: uno_de([100, 200, 500])

enunciado: "Si un sonido tiene una frecuencia de {f_valor} Hz, su periodo de oscilación es de ___ segundos."

pasos:
  - "Calcular el periodo usando la fórmula T = 1/f"

respuesta: 1 / f_valor
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  El periodo (T) es el inverso de la frecuencia (f). Si la frecuencia es {f_valor} Hz, el tiempo que tarda una onda en completar un ciclo es 1/{f_valor} segundos.
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "basico"
  tags: ["sonido", "frecuencia", "amplitud"]

respuesta: "frecuencia"
tipo: "completar"
respuestas_validas:
  - "frecuencia"

enunciado: "La altura de un sonido depende de la ___ del onda sonora, mientras que la intensidad depende de su amplitud."

explicacion: |
  La altura (tono) está determinada por la frecuencia (número de vibraciones por segundo), mientras que la intensidad (volumen) está relacionada con la amplitud de la onda.
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "intermedio"
  tags: ["timbre", "onda", "armonicos"]

opciones_explicitas: ["La amplitud de la onda", "La frecuencia de la onda", "La forma de la onda", "La velocidad de la onda"]
respuesta: "La forma de la onda"
tipo: "mc"

enunciado: "Si dos instrumentos diferentes tocan la misma nota con la misma intensidad, lo que permite distinguirlos es el timbre, el cual depende de:"

explicacion: |
  El timbre es la cualidad que nos permite distinguir sonidos de la misma frecuencia y amplitud, dependiendo de la forma de la onda (presencia de armónicos).
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "basico"
  tags: ["intensidad", "amplitud", "volumen"]

variables:
  es_mayor: "amplitud_A > amplitud_B"
  amplitud_A: 0.8
  amplitud_B: 0.3

respuesta: verdadero
tipo: "vf"

enunciado: "Si comparamos dos ondas sonoras donde la onda A tiene una amplitud de {amplitud_A} y la onda B tiene una amplitud de {amplitud_B}, ¿es la onda A más intensa que la onda B?"

explicacion: |
  A mayor amplitud de la onda, mayor es la energía transportada y, por lo tanto, mayor es la intensidad sonora (volumen).
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "basico"
  tags: ["orden", "conceptos"]

opciones_explicitas: ["Frecuencia", "Amplitud", "Forma de onda"]
respuesta_orden: ["Frecuencia", "Amplitud", "Forma de onda"]
tipo: ordenar

enunciado: "Ordena las propiedades del sonido de acuerdo a la característica física que las determina: 1. Altura, 2. Intensidad, 3. Timbre."

explicacion: |
  La altura se asocia a la frecuencia, la intensidad a la amplitud y el timbre a la forma de la onda (armónicos).
```

```
metadata:
  materia: "fisica"
  tema: "propiedades_del_sonido"
  nivel: "intermedio"
  tags: ["frecuencia", "tono", "agudo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[440, "La nota es más aguda"], [100, "La nota es más grave"]]

respuesta: escenario[idx][1]
tipo: "mc"
opciones_explicitas: ["La nota es más aguda", "La nota es más grave"]

enunciado: "Si un sonido tiene una frecuencia de {escenario[idx][0]} Hz y otro tiene una frecuencia de 200 Hz, para el primer caso la nota es: ___"

explicacion: |
  A mayor frecuencia, el sonido es percibido como más agudo. A menor frecuencia, es más grave.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["frecuencia", "tono", "sonido"]

variables:
  escenarios: [["La nota La central (A4) tiene una frecuencia de 440 Hz.", 440], ["La nota La una octava arriba tiene una frecuencia de 880 Hz.", 880], ["La nota La una octava abajo tiene una frecuencia de 220 Hz.", 220]]
  idx: uno_de([0, 1, 2])
  frecuencia_actual: escenarios[idx][1]
  respuesta_correcta: escenarios[idx][1]

tipo: completar
tolerancia_abs: 0.1
enunciado: "Si escuchamos una nota musical cuya frecuencia es de {frecuencia_actual} Hz, ¿cuál es su valor numérico en Hz?"
respuesta: respuesta_correcta

explicacion: |
  La altura o tono de un sonido depende directamente de su frecuencia (medida en Hz). A mayor frecuencia, mayor es el tono percibido.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propuestas"
  nivel: "intermedio"
  tags: ["intensidad", "amplitud", "volumen"]

variables:
  casos: [["un sonido suave", "baja"], ["un sonido fuerte", "alta"]]
  idx: uno_de([0, 1])
  tipo_sonido: casos[idx][0]
  amplitud_relativa: casos[idx][1]

tipo: mc
opciones_explicitas: ["baja", "alta", "nula", "infinita"]
respuesta: amplitud_relativa
enunciado: "Si escuchamos {tipo_sonido}, la amplitud de la onda sonora es de carácter ________."

explicacion: |
  La intensidad sonora (perceptualmente volumen) está relacionada con la amplitud de la onda. Una mayor amplitud implica un sonido más fuerte.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "basico"
  tags: ["timbre", "forma_onda", "armonicos"]

tipo: vf
enunciado: "El timbre es la cualidad que nos permite distinguir dos sonidos de igual frecuencia e intensidad, pero emitidos por fuentes distintas (por ejemplo, un piano y una flauta)."

respuesta: verdadero

explicacion: |
  El timbre depende de la forma de la onda, la cual es determinada por la combinación de la frecuencia fundamental y los armónicos presentes.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "intermedio"
  tags: ["frecuencia", "amplitud", "intensidad"]

variables:
  relaciones: [["frecuencia", "tono"], ["amplitud", "intensidad"], ["forma_onda", "timbre"]]
  idx: uno_de([0, 1, 2])
  propiedad: relaciones[idx][0]
  caracteristica: relaciones[idx][1]

tipo: completar
respuesta: caracteristica
enunciado: "Si modificamos la {propiedad}, estamos alterando la característica auditiva conocida como ________."

explicacion: |
  Cada propiedad física de la onda sonora se traduce en una percepción auditiva distinta: frecuencia -> tono; amplitud -> intensidad; forma de onda -> timbre.
```

```
metadata:
  materia: "fisica"
  tema: "sonido_propiedades"
  nivel: "avanzado"
  tags: ["frecuencia", "amplitud", "forma_onda"]

tipo: ordenar
opciones_explicitas: ["Frecuencia", "Amplitud", "Forma de la onda"]
respuesta_orden: ["Frecuencia", "Amplitud", "Forma de la onda"]
enunciado: "Ordene las propiedades físicas de una onda sonora según su correspondencia con la percepción humana (Tono, Intensidad, Timbre):"

explicacion: |
  1. Frecuencia -> Tono (Altura).
  2. Amplitud -> Intensidad (Volumen).
  3. Forma de la onda -> Timbre.
```

## Sección: temperatura-equilibrio-termico (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "definicion_temperatura"
  nivel: "basico"
  tags: ["conceptos", "energia"]

respuesta: "energia_cinetica_media"
tipo: completar
respuestas_validas:
  - "energia_cinetica_media"

enunciado: "La temperatura es una magnitud física que mide la ___ de las partículas de un cuerpo."

explicacion: |
  La temperatura no mide la energía total, sino el promedio de la energía cinética de las partículas.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "basico"
  tags: ["conceptos", "flujo_calorico"]

respuesta: verdadero
tipo: vf
enunciado: "Cuando dos cuerpos en contacto alcanzan el equilibrio térmico, sus temperaturas son iguales."

explicacion: |
  Por definición, el equilibrio térmico se alcanza cuando cesa el flujo neto de calor debido a la igualdad de temperaturas.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_termometricas"
  nivel: "basico"
  tags: ["unidades", "kelvin"]

respuesta: 273.15
tipo: completar
tolerancia_abs: 0.1

enunciado: "En la escala Kelvin, el cero absoluto equivale a ___ K."

explicacion: |
  El cero absoluto es la temperatura teórica donde el movimiento molecular es mínimo, equivalente a -273.15 °C.
```

```
metadata:
  materia: "fisica"
  tema: "diferencia_calor_temp"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: "calor"
tipo: completar
respuestas_validas:
  - "calor"

enunciado: "Mientras que la temperatura mide el estado térmico, el ___ es la energía en tránsito entre cuerpos."

explicacion: |
  El calor es energía que fluye de un cuerpo con mayor temperatura a uno de menor temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "flujo_calorico"
  nivel: "basico"
  tags: ["ley_cero"]

respuesta: "mayor_a_menor"
tipo: completar
respuestas_validas:
  - "mayor_a_menor"

enunciado: "El calor fluye espontáneamente de un cuerpo con temperatura ___ a uno con temperatura ___."

explicacion: |
  El flujo de calor siempre ocurre desde el cuerpo más caliente hacia el más frío hasta alcanzar el equilibrio.
```

```
metadata:
  materia: "fisica"
  tema: "conversion_escalas"
  nivel: "basico"
  tags: ["calculo"]

variables:
  idx: uno_de([0,1])
  datos: [[20, 293.15], [100, 373.15]]

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un objeto tiene una temperatura de {datos[idx][0]} °C, ¿cuál es su valor en Kelvin?"

explicacion: |
  La fórmula es T(K) = T(°C) + 273.15.
```

```
metadata:
  materia: "fisica"
  tema: "cero_absoluto"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "falso"
tipo: completar
enunciado: "Es posible alcanzar el cero absoluto (0 K) mediante procesos térmicos convencionales."

explicacion: |
  La tercera ley de la termodinámica establece que el cero absoluto es inalcanzable en un número finito de pasos.
```

```
metadata:
  materia: "fisica"
  tema: "sensacion_termica"
  nivel: "intermedio"
  tags: ["error_comun"]

respuesta: "falso"
tipo: completar
enunciado: "La sensación térmica de una persona es una medida exacta de la temperatura termodinámica de un objeto."

explicacion: |
  La sensación térmica depende de factores como la humedad, el viento y la conductividad térmica de la piel, no solo de la temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "sistemas_termicos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "sistema_abierto"
tipo: completar
respuestas_validas:
  - "sistema_abierto"

enunciado: "Un sistema que intercambia energía y materia con su entorno se denomina ___."

explicacion: |
  Un sistema abierto permite el intercambio tanto de calor como de masa con el medio ambiente.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "igualdad_temperaturas"
tipo: mc
opciones_explicitas: ["igualdad_temperaturas", "igualdad_masas", "igualdad_volumenes", "igualdad_presiones"]

enunciado: "Al alcanzar el equilibrio térmico, ¿qué propiedad se iguala entre los cuerpos?"

explicacion: |
  El equilibrio térmico implica que no hay transferencia neta de calor porque las temperaturas se han igualado.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["propiedades"]

respuesta: "capacidad_para_cambiar_temperatura"
tipo: completar
respuestas_validas:
  - "capacidad_para_cambiar_temperatura"

enunciado: "El calor específico es la propiedad que mide la ___ de una sustancia."

explicacion: |
  Es la cantidad de calor necesaria para elevar un grado la temperatura de una unidad de masa.
```

```
metadata:
  materia: "fisica"
  tema: "comparacion_materiales"
  nivel: "intermedio"
  tags: ["propiedades"]

respuesta: "agua"
tipo: mc
opciones_explicitas: ["agua", "hierro", "arena", "aluminio"]

enunciado: "De los siguientes materiales, ¿cuál tiene un calor específico mucho más alto (tarda más en calentarse)?"

explicacion: |
  El agua tiene un calor específico muy elevado (~4186 J/kg·K), lo que la hace un excelente regulador térmico.
```

```
metadata:
  materia: "fisica"
  tema: "pasos_calentamiento"
  nivel: "intermedio"
  tags: ["procedimiento"]

respuesta_orden: ["medir_temp_inicial", "suministrar_calor", "medir_temp_final"]
tipo: ordenar
opciones_explicitas: ["medir_temp_inicial", "suministrar_calor", "medir_temp_final"]

enunciado: "Ordena los pasos para realizar un experimento de transferencia de calor:"

explicacion: |
  Primero se establece el estado inicial, luego se aplica la energía y finalmente se observa el estado final.
```

```
metadata:
  materia: "fisica"
  tema: "modos_transferencia"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "conduccion"
tipo: completar
respuestas_validas:
  - "conduccion"

enunciado: "La transferencia de calor a través del contacto directo entre sólidos se llama ___."

explicacion: |
  La conducción es el mecanismo principal en materiales sólidos.
```

```
metadata:
  materia: "fisica"
  tema: "diferencia_calor_temp"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: "calor"
tipo: mc
opciones_explicitas: ["calor", "temperatura", "entalpía", "entropía"]

enunciado: "Si un bloque de metal se calienta, la energía que absorbe se llama ___."

explicacion: |
  La energía absorbida o transferida se define como calor.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico_calculo"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  idx: uno_de([0,1])
  datos: [[100, 50], [20, 80]] 
  # datos[idx][0] es T_inicial, datos[idx][1] es T_final

respuesta: (datos[idx][0] + datos[idx][1]) / 2
tipo: completar
tolerancia_abs: 0.1

enunciado: "En un sistema ideal de calor específico iguales, si se mezclan dos masas iguales, la temperatura de equilibrio será la media de {datos[idx][0]} y {datos[idx][1]} °C. ¿Cuál es el resultado?"

explicacion: |
  (100 + 50) / 2 = 75. (20 + 80) / 2 = 50.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calculo"]

respuesta: 4186
tipo: completar
tolerancia_abs: 10

enunciado: "El calor específico del agua es aproximadamente ___ J/(kg·K)."

explicacion: |
  Es un valor estándar utilizado en termodinámica.
```

```
metadata:
  materia: "fisica"
  tema: "cambio_fase"
  nivel: "intermedio"
  tags: ["cambio_fase"]

respuesta: falso
tipo: vf
enunciado: "Durante un cambio de fase (como la fusión del hielo), la temperatura del sistema aumenta aunque se siga suministrando calor."

explicacion: |
  Falso. Durante el cambio de fase, la temperatura permanece constante mientras se rompen los enlaces moleculares.
```

```
metadata:
  materia: "fisica"
  tema: "sistemas_termicos"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: "sistema_cerrado"
tipo: completar
respuestas_validas:
  - "sistema_cerrado"

enunciado: "Un sistema que intercambia energía pero no materia con su entorno se llama ___."

explicacion: |
  En un sistema cerrado, la masa permanece constante pero la energía puede entrar o salir.
```

```
metadata:
  materia: "fisica"
  tema: "escalas_termometricas"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "absoluta"
tipo: mc
opciones_explicitas: ["absoluta", "relativa", "celcius", "fahrenheit"]

enunciado: "La escala Kelvin es conocida como la escala ___."

explicacion: |
  Se llama absoluta porque parte del cero absoluto, donde no hay energía térmica.
```

```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calculo"]

respuesta: "proporcional"
tipo: completar
respuestas_validas:
  - "proporcional"

enunciado: "La cantidad de calor necesaria para elevar la temperatura de un cuerpo es ___ a su masa."

explicacion: |
  A mayor masa, se requiere más calor para producir el mismo cambio de temperatura (Q = m·c·ΔT).
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "avanzado"
  tags: ["flujo_calorico"]

respuesta: verdadero
tipo: vf
enunciado: "Si un objeto caliente se coloca en un ambiente frío, el calor fluirá del objeto al ambiente hasta que sus temperaturas se igualen."

explicacion: |
  Este es el proceso natural de transferencia de energía hacia el equilibrio térmico.
```

```
metadata:
  materia: "fisica"
  tema: "ley_cero"
  nivel: "avanzado"
  tags: ["leyes_termodinamica"]

respuesta: "termómetro"
tipo: completar
respuestas_validas:
  - "termómetro"

enunciado: "La Ley Cero de la Termodinámica permite el uso de un tercer cuerpo (como un ___) para medir la temperatura de otros dos."

explicacion: |
  Si A=C y B=C, entonces A=B. El termómetro actúa como el cuerpo C.
```

```
metadata:
  materia: "fisica"
  tema: "microscopico_temperatura"
  nivel: "intermedio"
  tags: ["moleculas"]

respuesta: "mayor"
tipo: completar
respuestas_validas:
  - "mayor"

enunciado: "A una temperatura más alta, las partículas de un gas tienen una energía cinética ___."

explicacion: |
  La temperatura es una medida directa de la agitación térmica de las partículas.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_termico"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "0"
tipo: mc
opciones_explicitas: ["0", "positivo", "negativo", "infinito"]

enunciado: "Cuando dos cuerpos están en equilibrio térmico, el flujo neto de calor entre ellos es ___."

explicacion: |
  En equilibrio, la energía que sale de uno es igual a la que entra al otro, por lo que el flujo neto es cero.
```

## Sección: decibeles-richter (24 preguntas)

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["decibeles", "vocabulario"]

enunciado: "¿Qué mide la escala de decibeles (dB)?"
tipo: mc
opciones_explicitas:
  - "La intensidad de un sonido, comparada con una intensidad de referencia"
  - "La frecuencia de un sonido (agudo o grave)"
  - "La duración de un sonido"
respuesta: "La intensidad de un sonido, comparada con una intensidad de referencia"

explicacion: |
  Es una escala de intensidad relativa, no de frecuencia ni de
  duración.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula del nivel de intensidad sonora es dB = 10 × log₁₀(I / I₀), con I₀ una intensidad de referencia fija."

explicacion: |
  Es una escala logarítmica, no lineal.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un aumento de 10 dB representa 10 veces más intensidad física del sonido."

explicacion: |
  Es consecuencia directa de que la escala usa un logaritmo en base 10.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "calculo"]

variables:
  exponente: random(1, 8)
  razon: 10 ^ exponente

respuesta: 10 * log10(razon)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un sonido tiene una intensidad {razon} veces mayor que la intensidad de referencia. ¿Cuántos decibeles representa?"

pasos:
  - "dB = 10 × log₁₀({razon})"

explicacion: |
  Se aplica la fórmula del decibel sobre la razón de intensidades dada.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque un aumento de 10 dB representa 10 veces más intensidad física, el oído humano lo percibe aproximadamente como el doble de fuerte."

explicacion: |
  La percepción de sonoridad tiene su propia escala, distinta de la
  intensidad física medida.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un aumento de aproximadamente 3 dB ya representa el doble de intensidad física del sonido."

explicacion: |
  10 elevado a (3/10) da aproximadamente 2 — de ahí sale esa
  aproximación tan citada.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "comparacion"]

variables:
  db_a: random(40, 70)
  db_b: random(80, 120)

respuesta: (db_b > db_a)
tipo: vf

enunciado: "Sonido A: {db_a} dB. Sonido B: {db_b} dB. ¿El sonido B tiene mayor intensidad física que el sonido A?"

explicacion: |
  A mayor cantidad de decibeles, mayor la intensidad física del sonido.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["decibeles", "calculo"]

variables:
  db: uno_de([10, 20, 30, 40, 50, 60])

respuesta: 10 ^ (db / 10)
tipo: input
tolerancia_abs: 1

enunciado: "Un sonido tiene un nivel de {db} dB. ¿Cuántas veces más intenso es que la intensidad de referencia?"

explicacion: |
  Se despeja la razón de intensidades invirtiendo la fórmula del
  decibel.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["decibeles", "orden"]

tipo: ordenar
enunciado: "Ordená estos sonidos de menor a mayor intensidad, según su nivel en decibeles."
opciones_explicitas:
  - "Una conversación normal (60 dB)"
  - "Un susurro (30 dB)"
  - "Un avión despegando (130 dB)"
respuesta_orden: ["Un susurro (30 dB)", "Una conversación normal (60 dB)", "Un avión despegando (130 dB)"]

explicacion: |
  A mayor número de decibeles, mayor la intensidad del sonido.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala de decibeles comprime un rango enorme de intensidades físicas (de billones de veces de diferencia) en una escala de números manejables."

explicacion: |
  Es la razón de fondo por la que se usa una escala logarítmica en vez
  de la intensidad física directa.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "verificacion"]

variables:
  exponente: random(1, 8)
  razon: 10 ^ exponente
  correcto: 10 * log10(razon)
  error: uno_de([0, 0, 0, 10, -10])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Un sonido {razon} veces más intenso que la referencia, nivel informado: {mostrado} dB."

explicacion: |
  Se vuelve a calcular con la fórmula del decibel y se compara con el
  valor informado.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["richter", "vocabulario"]

enunciado: "¿Qué mide la escala Richter?"
tipo: mc
opciones_explicitas:
  - "La magnitud de un terremoto, relacionada con la energía liberada"
  - "La duración de un terremoto"
  - "La cantidad de réplicas de un terremoto"
respuesta: "La magnitud de un terremoto, relacionada con la energía liberada"

explicacion: |
  Es una medida de magnitud, no de duración ni de cantidad de eventos.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala Richter es una escala logarítmica, igual que los decibeles y el pH."

explicacion: |
  Los tres usan la misma herramienta matemática: un logaritmo de una
  razón.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada punto entero de magnitud Richter representa una amplitud de onda sísmica 10 veces mayor."

explicacion: |
  Es el mismo tipo de salto (factor de 10) que en la escala de pH.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada punto entero de magnitud Richter representa, aproximadamente, 31,6 veces más energía liberada (10 elevado a 1,5)."

explicacion: |
  Es un factor distinto al de la amplitud (10 veces): la energía crece
  más rápido que la amplitud por cada punto.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "calculo"]

variables:
  diferencia_magnitud: random(1, 4)

respuesta: 10 ^ diferencia_magnitud
tipo: input
tolerancia_abs: 1

enunciado: "Dos terremotos difieren en {diferencia_magnitud} puntos de magnitud Richter. ¿Cuántas veces más amplitud de onda sísmica tiene el más fuerte?"

explicacion: |
  Se eleva 10 a la cantidad de puntos de diferencia.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "calculo"]

variables:
  diferencia_magnitud: random(1, 3)

respuesta: 10 ^ (1.5 * diferencia_magnitud)
tipo: input
tolerancia_abs: 5

enunciado: "Dos terremotos difieren en {diferencia_magnitud} puntos de magnitud Richter. ¿Aproximadamente cuántas veces más energía liberó el más fuerte?"

pasos:
  - "10^(1,5 × {diferencia_magnitud})"

explicacion: |
  Se usa el factor de energía por punto (10^1,5 ≈ 31,6), elevado a la
  cantidad de puntos de diferencia.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un terremoto de magnitud 7 libera muchísima más energía que uno de magnitud 5 — no el doble, sino cientos de veces más."

explicacion: |
  Dos puntos de diferencia son aproximadamente 31,6 × 31,6 ≈ 1.000 veces
  más energía.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["richter", "orden"]

tipo: ordenar
enunciado: "Ordená estos terremotos de menor a mayor energía liberada, según su magnitud Richter."
opciones_explicitas:
  - "Magnitud 7,0"
  - "Magnitud 4,0"
  - "Magnitud 5,5"
respuesta_orden: ["Magnitud 4,0", "Magnitud 5,5", "Magnitud 7,0"]

explicacion: |
  A mayor magnitud, mayor la energía liberada — el orden de magnitud
  coincide con el orden de energía.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula log₁₀(E) = 4,8 + 1,5 × M relaciona la magnitud Richter (M) con la energía liberada (E, en joules) — de ahí sale el factor de aproximadamente 31,6 veces por punto."

explicacion: |
  10 elevado a 1,5 (el coeficiente de M en la fórmula) es,
  aproximadamente, 31,6.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter"]

variables:
  diferencia_magnitud: uno_de([1, 2, 3])
  amplitud_veces: 10 ^ diferencia_magnitud

tipo: completar
enunciado: "Dos terremotos tienen una diferencia de amplitud de {amplitud_veces} veces. Completá: ___ (diferencia de magnitud Richter) = log₁₀({amplitud_veces})."
respuestas_validas:
  - diferencia_magnitud

explicacion: |
  Se despeja la diferencia de magnitud tomando logaritmo en base 10 de
  la razón de amplitudes.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Decibeles, escala Richter y pH comparten la misma lógica matemática: un logaritmo de una razón respecto a un valor de referencia, aplicado a fenómenos físicos distintos."

explicacion: |
  Cambia el fenómeno (sonido, energía sísmica, concentración de iones),
  no la herramienta matemática.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El motivo de usar escalas logarítmicas como decibeles o Richter es comprimir rangos de valores físicos enormes en números chicos y manejables."

explicacion: |
  Sin el logaritmo, habría que manejar directamente números con muchos
  ceros de diferencia.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["decibeles", "richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los decibeles miden intensidad de sonido (dB = 10×log₁₀(I/I₀)) y la escala Richter mide magnitud sísmica (cada punto ≈ 10x amplitud, ≈31,6x energía) — dos aplicaciones distintas de la misma herramienta logarítmica."

explicacion: |
  Es la idea central de todo el tema.
```

