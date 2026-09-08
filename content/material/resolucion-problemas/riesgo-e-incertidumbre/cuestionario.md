# Resolucion Problemas — Riesgo e incertidumbre (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Riesgo

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["definicion", "probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "En un escenario de riesgo, el decisor conoce la distribución de probabilidad de los posibles resultados."

explicacion: |
  El riesgo implica que, aunque no sabemos qué resultado ocurrirá, conocemos las probabilidades asociadas a cada uno.
```

### 2 — Incertidumbre vs Riesgo

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["diferencia", "conceptos"]

variables:
  escenario_idx: uno_de([0, 1])
  tabla: [["Riesgo", "Riesgo"], ["Incertidumbre", "Incertidumbre"]]

respuesta: tabla[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Riesgo", "Incertidumbre"]

enunciado: "Si un inversor se enfrenta a un proyecto donde es imposible estimar la probabilidad de éxito o fracaso, se encuentra ante un escenario de: ___"

explicacion: |
  La incertidumbre técnica ocurre cuando la información es insuficiente para asignar probabilidades a los eventos.
```

### 3 — Elementos del Riesgo

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["componentes", "probabilidad"]

respuesta: "probabilidad y resultados"
tipo: completar
respuestas_validas:
  - "probabilidad y resultados"

enunciado: "Para que un problema sea clasificado como de riesgo, es indispensable conocer la ___ y los ___ posibles."

explicacion: |
  El riesgo se define matemáticamente por la combinación de un conjunto de estados de la naturaleza y sus respectivas probabilidades.
```

### 4 — Clasificación de escenarios

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["clasificacion"]

respuesta_orden: ["Incertidumbre", "Riesgo", "Certeza"]
tipo: ordenar

opciones_explicitas: ["Incertidumbre", "Riesgo", "Certeza"]

enunciado: "Ordene los siguientes conceptos de mayor falta de información a mayor información (de mayor incertidumbre a mayor certeza):"

explicacion: |
  La incertidumbre es la ausencia total de conocimiento probabilístico, el riesgo es conocimiento parcial y la certeza es conocimiento total.
```

### 5 — Verdad o Falso: Probabilidad

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["probabilidad", "logica"]

respuesta: falso
tipo: vf

enunciado: "Si un evento tiene una probabilidad de ocurrencia del 50%, esto significa que estamos ante un escenario de incertidumbre pura."

explicacion: |
  Falso. Al conocer la probabilidad (50%), el escenario es de riesgo, no de incertidumbre pura.
```

### 6 — Concepto fundamental

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos", "probabilidad"]

respuesta: falso
tipo: vf

enunciado: "En un escenario de incertidumbre, el decisor conoce exactamente la distribución de probabilidades de todos los resultados posibles."

explicacion: |
  La incertidumbre implica la falta de información sobre la probabilidad de los eventos. Si las probabilidades son conocidas, estamos ante un escenario de riesgo.
```

### 7 — Identificación de escenarios

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["clasificacion", "escenarios"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Lanzar un dado cargado donde se sabe que el 6 sale el 50% de las veces.", "riesgo"], ["Lanzar un dado mágico en una dimensión desconocida donde no se sabe cómo caen los números.", "incertidumbre"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analice el siguiente caso: {datos[escenario_idx][0]}. Esto representa un escenario de ___."

explicacion: |
  En el primer caso, la probabilidad está definida (50%), por lo tanto es riesgo. En el segundo, la falta de información sobre la mecánica del dado implica incertidumbre.
```

### 8 — El cálculo del riesgo

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["calculo", "esperanza"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[100, 0.2, 500], [200, 0.5, 100]]
  # caso[0]: valor_a, prob, valor_b
  # caso[1]: valor_a, prob, valor_b

respuesta: casos[caso_idx][2] * casos[caso_idx][1] + casos[caso_idx][0] * (1 - casos[caso_idx][1])
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un inversor enfrenta un riesgo conocido. Hay un {redondear(casos[caso_idx][1] * 100, 0)}% de ganar ${casos[caso_idx][2]} y un resto de perder ${casos[caso_idx][0]}. Calcule el valor esperado (riesgo)."

pasos:
  - "Identificar la probabilidad del evento favorable y su valor."
  - "Identificar la probabilidad del evento desfavorable (1 - p) y su valor."
  - "Multiplicar cada valor por su probabilidad y sumar los resultados."

explicacion: |
  El valor esperado es la suma de los productos de cada resultado por su probabilidad: (P1 * V1) + (P2 * V2).
```

### 9 — Diferencia de información

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["completar"]

respuesta: "riesgo"
tipo: completar
respuestas_validas:
  - "riesgo"

enunciado: "Si un gestor de proyectos puede asignar probabilidades a los retrasos, está operando bajo un escenario de ___, pero si el impacto de una crisis global es totalmente impredecible, está ante la incertidumbre."

explicacion: |
  La distinción clave es la disponibilidad de información sobre la distribución de probabilidad.
```

### 10 — Procesos de decisión

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "avanzado"
  tags: ["ordenar", "metodologia"]

respuesta_orden: ["Recopilar datos históricos", "Estimar probabilidades", "Calcular valor esperado", "Tomar decisión"]
tipo: ordenar
opciones_explicitas: ["Recopilar datos históricos", "Estimar probabilidades", "Calcular valor esperado", "Tomar decisión"]

enunciado: "Ordene los pasos lógicos para transformar un escenario de incertidumbre en uno de riesgo y poder decidir:"

explicacion: |
  Para reducir la incertidumbre, primero se busca información (datos), luego se modela la probabilidad, se aplica el cálculo matemático y finalmente se elige la opción óptima.
```

### 11 — Riesgo vs Incertidumbre: La clave

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos", "probabilidad"]

respuesta: "riesgo"
tipo: "completar"
respuestas_validas:
  - "riesgo"

enunciado: "Cuando un decisor conoce la distribución de probabilidad de los posibles resultados de un evento, se encuentra ante un escenario de ___, mientras que si desconoce dichas probabilidades, se enfrenta a la incertidumbre."

explicacion: |
  La diferencia fundamental radica en la información disponible: el riesgo implica que conocemos las probabilidades de los distintos desenlaces, mientras que la incertidumbre implica un desconocimiento total de las probabilidades.
```

### 12 — Escenario de Apuesta

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["aplicacion", "decision"]

variables:
  escenario: uno_de([["Lanzar un dado y ganar $10 si sale 6", "riesgo"], ["Invertir en una startup desconocida sin datos históricos", "incertidumbre"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analiza el siguiente caso: {escenario[0]}. ¿Qué tipo de situación estamos enfrentando?"

explicacion: |
  En el primer caso, la probabilidad es conocida (1/6), por lo tanto es riesgo. En el segundo caso, la falta de datos históricos impide asignar probabilidades, lo que define la incertidumbre.
```

### 13 — ¿Es siempre riesgo lo que no podemos controlar?

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "Si un evento es impredecible y no es posible asignar una probabilidad matemática a sus resultados, entonces estamos ante una situación de riesgo."

explicacion: |
  Falso. Si no se pueden asignar probabilidades, la definición técnica es incertidumbre. El riesgo requiere, por definición, una estructura probabilística conocida.
```

### 14 — El proceso de reducción de incertidumbre

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "avanzado"
  tags: ["metodologia", "informacion"]

respuesta_orden: ["recolectar datos", "modelar probabilidades", "evaluar riesgo"]
tipo: "ordenar"
opciones_explicitas: ["recolectar datos", "modelar probabilidades", "evaluar riesgo"]

enunciado: "Para transformar una situación de incertidumbre en una de riesgo, se debe seguir este proceso lógico de gestión de información:"

explicacion: |
  Primero se debe obtener información (recolectar datos), luego usar esa información para asignar pesos probabilísticos (modelar) y finalmente, con esas probabilidades, evaluar el riesgo esperado.
```

### 15 — El error del experto

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["error_comun", "sesgo"]

respuesta: 0.8
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un analista dice: 'Tengo un 80% de certeza de que el mercado subirá'. Si el analista está tratando de convertir la incertidumbre en riesgo mediante su juicio subjetivo, ¿cuál es el valor de la probabilidad asignada (en formato decimal)?"

explicacion: |
  Al asignar un valor numérico (80% = 0.8) a un evento incierto basado en su juicio, el analista está intentando transformar la incertidumbre en riesgo subjetivo.
```

### 16 — Diferencia fundamental

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos_base", "probabilidad"]

respuesta: "riesgo"
tipo: completar
respuestas_validas:
  - "riesgo"

enunciado: "Cuando un agente se enfrenta a un escenario donde los resultados posibles y sus probabilidades de ocurrencia son conocidos, se dice que está operando bajo un escenario de ___."

explicacion: |
  El riesgo implica la existencia de una distribución de probabilidad conocida (ej. lanzar un dado), mientras que la incertidumbre ocurre cuando no se pueden asignar probabilidades a los resultados.
```

### 17 — Escenario de incertidumbre

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["incertidumbre", "decision"]

variables:
  escenario_idx: uno_de([0, 1, 2, 3, 4])
  escenarios: [["Lanzar una moneda equilibrada para decidir un contrato", "riesgo"], ["Lanzar un dado de 6 caras para decidir un contrato", "riesgo"], ["Lanzar un dado de 6 caras para decidir un contrato", "riesgo"], ["Predecir el clima exacto de un día desconocido sin modelos históricos", "incertidumbre"], ["Lanzar una moneda trucada sin saber su probabilidad", "incertidumbre"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analiza el siguiente caso: {escenarios[escenario_idx][0]}. ¿En qué condición se encuentra el decisor?"

explicacion: |
  Si el decisor conoce la probabilidad de cada cara o resultado, está en riesgo. Si la probabilidad es desconocida o no puede ser estimada, está en incertidumbre.
```

### 18 — Verdad o Falso: Probabilidad

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["teoria_decision"]

respuesta: falso
tipo: vf

enunciado: "La incertidumbre se define como la situación donde los resultados son aleatorios pero se conoce la probabilidad exacta de cada uno de ellos."

explicacion: |
  Falso. La definición dada corresponde al concepto de riesgo. La incertidumbre implica la falta de conocimiento sobre las probabilidades.
```

### 19 — Ordenar la transición de información

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["modelado", "informacion"]

respuesta_orden: ["Incertidumbre", "Riesgo", "Certeza"]
tipo: ordenar
opciones_explicitas: ["Incertidumbre", "Riesgo", "Certeza"]

enunciado: "Ordena estos estados de conocimiento desde el que tiene menor información sobre los resultados hasta el que tiene información total (conocimiento absoluto):"

explicacion: |
  En la incertidumbre no hay información probabilística; en el riesgo la información es probabilística; en la certeza, el resultado es predecible al 100%.
```

### 20 — Contraste de conceptos

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  textos: ["Lanzar una moneda justa", "Lanzar una moneda cuya probabilidad de cara se desconoce"]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "El siguiente caso representa un escenario de riesgo: {textos[idx]}."

explicacion: |
  Si el caso es 'Lanzar una moneda justa', la respuesta es verdadero porque la probabilidad (0.5) es conocida. Si es 'lanzar una moneda cuya probabilidad de cara se desconoce', es falso porque no se puede asignar una probabilidad.
```

### 21 — Identificación de conceptos

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["conceptos_basicos", "probabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Lanzar un dado sabiendo que tiene 6 caras", "riesgo"], ["Predecir el clima de un planeta desconocido", "incertidumbre"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Si nos enfrentamos a {datos[escenario_idx][0]}, estamos ante un escenario de ___."

explicacion: |
  Cuando conocemos la distribución de probabilidades de los resultados posibles, hablamos de riesgo. Cuando no tenemos información sobre las probabilidades, hablamos de incertidumbre.
```

### 22 — Aplicación en finanzas

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["finanzas", "toma_de_decisiones"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Invertir en un bono con un 5% de probabilidad de default", "riesgo"], ["Lanzar una startup en un mercado sin precedentes tecnológicos", "incertidumbre"]]

respuesta: casos[caso_idx][1]
tipo: completar
enunciado: "El escenario de {casos[caso_idx][0]} se clasifica como ___."

explicacion: |
  En el primer caso, el porcentaje de default es conocido (probabilidad conocida = riesgo). En el segundo, la falta de datos históricos impide asignar una probabilidad (incertidumbre).
```

### 23 — Clasificación de escenarios

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  item_idx: uno_de([0, 1])
  items: [["Jugar a la ruleta sabiendo las probabilidades de la casa", "riesgo"], ["Un cambio repentino en la regulación política de un país", "incertidumbre"]]

respuesta: items[item_idx][1]
tipo: mc
opciones_explicitas: ["riesgo", "incertidumbre"]

enunciado: "Analice el siguiente caso: {items[item_idx][0]}. ¿Cuál es la naturaleza del problema?"

explicacion: |
  El riesgo permite modelar matemáticamente el resultado, mientras que la incertidumbre requiere otros métodos de decisión ante la falta de datos probabilísticos.
```

### 24 — Completar la definición

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "probabilidad"
tipo: completar
respuestas_validas:
  - "probabilidad"

enunciado: "La diferencia fundamental entre riesgo e incertidumbre radica en que en el riesgo conocemos la ___ de los eventos futuros."

explicacion: |
  El riesgo implica que el modelo probabilístico es conocido, permitiendo calcular la esperanza matemática del resultado.
```

### 25 — Ordenar procesos de decisión

```
metadata:
  materia: "resolucion-problemas"
  tema: "riesgo_e_incertidumbre"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Identificar la información disponible", "Asignar probabilidades a los eventos", "Calcular el valor esperado", "Tomar la decisión bajo riesgo"]
respuesta_orden: ["Identificar la información disponible", "Asignar probabilidades a los eventos", "Calcular el valor esperado", "Tomar la decisión bajo riesgo"]
tipo: ordenar

enunciado: "Ordene los pasos lógicos para la toma de decisiones en un escenario de RIESGO:"

explicacion: |
  Para pasar de la incertidumbre al riesgo, primero debemos identificar datos, luego asignar probabilidades y finalmente calcular el valor esperado para decidir.
```
