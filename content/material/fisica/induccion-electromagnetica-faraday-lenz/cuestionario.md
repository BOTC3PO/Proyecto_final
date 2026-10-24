# Fisica — Induccion electromagnetica faraday lenz (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Flujo Magnético

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["flujo_magnetico", "definicion"]

enunciado: "El producto escalar entre el vector campo magnético B y el vector área A se define como el ___ magnético."

respuestas_validas:
  - "flujo"
tipo: completar

explicacion: |
  El flujo magnético ($\Phi$) mide la cantidad de campo magnético que atraviesa una superficie determinada.
```

### 2 — Ley de Faraday

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["ley_faraday", "fem"]

opciones_explicitas: ["La variación del flujo magnético en el tiempo", "La intensidad del campo magnético constante", "La resistencia del conductor", "La carga eléctrica total"]
respuesta: "La variación del flujo magnético en el tiempo"
tipo: mc

enunciado: "¿Qué magnitud es proporcional a la fuerza electromotriz (FEM) inducida según la Ley de Faraday?"

explicacion: |
  La Ley de Faraday establece que la FEM inducida es igual a la rapidez con la que cambia el flujo magnético a través de un circuito.
```

### 3 — Ley de Lenz y Dirección

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["ley_lenz", "polaridad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario_data: [["aumento", "se oponga"], ["disminución", "se oponga"]]

enunciado: "Considerando el escenario {escenario_data[escenario_idx][0]}, la corriente inducida tendrá una dirección tal que el campo magnético creado por ella ___ el cambio en el flujo original."

respuesta: "se oponga"
tipo: mc

opciones_explicitas: ["se oponga", "favorezca", "no tiene efecto"]

explicacion: |
  La Ley de Lenz es una consecuencia del principio de conservación de la energía y establece que el sentido de la corriente inducida es tal que el campo magnético que genera se opone a la variación del flujo que la produjo.
```

### 4 — Verdad o Falso: Inducción

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["conceptos_clave"]

enunciado: "¿Es necesario que exista un movimiento relativo entre un imán y una espira para que se induzca una corriente eléctrica?"

respuesta: falso
tipo: vf

explicacion: |
  No necesariamente. La inducción ocurre siempre que haya una variación del flujo magnético. Esto puede lograrse moviendo el imán, moviendo la espira, o incluso variando la intensidad del campo magnético con el imán en reposo.
```

### 5 — Componentes de la FEM

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["componentes", "formula"]

enunciado: "Para calcular la magnitud de la FEM inducida (epsilon) en un circuito de N espiras, se requiere conocer el número de vueltas, la variación del flujo (Delta Phi) y el ___ (Delta t)."

respuestas_validas:
  - "tiempo"
tipo: completar

explicacion: |
  La fórmula de la Ley de Faraday es epsilon = -N * (Delta Phi / Delta t), donde el denominador representa el intervalo de tiempo en el que ocurre la variación.
```

### 6 — Ley de Faraday-Lenz

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["ley_de_faraday", "flujo_magnetico"]

respuesta: verdadero
tipo: vf

enunciado: "Según la Ley de Faraday, la magnitud de la fuerza electromotriz (FEM) inducida en un circuito es proporcional a la rapidez con la que cambia el flujo magnético a través de él."

explicacion: |
  La ley de Faraday establece que la magnitud de la FEM inducida es proporcional a la tasa de cambio del flujo magnético. El signo negativo representa la Ley de Lenz, indicando que la corriente inducida crea un campo magnético que se opone al cambio del flujo original.
```

### 7 — Cálculo de la FEM inducida

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["calculo_fem", "flujo_magnetico"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [[4.0, 5.0], [10.0, 5.0]]
  tiempo: 2.0
  flujo_inicial: datos[escenario_idx][0]
  flujo_final: datos[escenario_idx][1]
  fem: abs((flujo_final - flujo_inicial) / tiempo)

respuesta: fem

tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito experimenta un cambio en su flujo magnético de {flujo_inicial} Wb a {flujo_final} Wb en un intervalo de tiempo de {tiempo} segundos. ¿Cuál es la magnitud de la FEM inducida (en Voltios)?"

pasos:
  - "Calcular la variación del flujo: DeltaPhi = Phi_final - Phi_inicial"
  - "Dividir la variación por el tiempo: epsilon = DeltaPhi / Delta t"

explicacion: |
  La magnitud de la FEM se calcula como el cambio de flujo dividido por el tiempo.
  Para el caso 1: |(5.0 - 4.0) / 2.0| = 0.5 V.
  Para el caso 2: |(10.0 - 5.0) / 2.0| = 2.5 V.
```

### 8 — Dirección de la corriente (Lenz)

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["ley_de_lenz", "campo_magnetico"]

opciones_explicitas: ["Aumenta el flujo magnético", "Disminuye el flujo magnético", "No afecta el flujo"]

respuesta: "Disminuye el flujo magnético"
tipo: mc

enunciado: "Si un imán se acerca a una espira conductorista, la corriente inducida en la espira creará un campo magnético con la intención de:"

explicacion: |
  La Ley de Lenz establece que el efecto inducido siempre se opone a la causa que lo produce. Si el flujo aumenta (acercar imán), la espira crea un campo opuesto para intentar disminuirlo.
```

### 9 — Completar la fórmula

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["formula", "flujo_magnetico"]

respuestas_validas:
  - "coseno"
  - "cos"

respuesta: "coseno"
tipo: completar

enunciado: "La expresión del flujo magnético $\\Phi$ a través de una superficie es el producto del campo magnético $B$ por el área $A$ por el ___ del ángulo entre el vector campo y la normal a la superficie."

explicacion: |
  La fórmula es $\Phi = B \cdot A \cdot \cos(\theta)$.
```

### 10 — Pasos para resolver un problema de inducción

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["metodologia", "problema_fisica"]

opciones_explicitas: ["Calcular el flujo magnético $\\Phi$", "Determinar la variación $\\Delta\\Phi$", "Dividir por el tiempo $\\Delta t$"]

respuesta_orden: ["Calcular el flujo magnético $\\Phi$", "Determinar la variación $\\Delta\\Phi$", "Dividir por el tiempo $\\Delta t$"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para hallar la magnitud de la FEM inducida cuando el flujo magnético cambia en un intervalo de tiempo determinado:"

explicacion: |
  Para aplicar la Ley de Faraday, primero debemos conocer el estado inicial y final del flujo para hallar la diferencia ($\Delta\Phi$) y luego aplicar la derivada temporal (división por el tiempo en casos discretos).
```

### 11 — El signo de la fuerza electromotriz

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "lenz", "flujo_magnetico"]

variables:
  idx: uno_de([0, 1])
  datos: [["aumenta", "-"], ["disminuye", "+"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["-", "+"]

enunciado: "Si el flujo magnético a través de una espira cerrada está {datos[idx][0]} (en valor absoluto), la corriente inducida generará un campo magnético que se opone a ese cambio. El signo de la FEM inducida según la Ley de Lenz para contrarrestar dicho cambio es ___."

explicacion: |
  La Ley de Lenz establece que el sentido de la corriente inducida es tal que el campo magnético creado por ella se opone a la variación del flujo que la produjo. Si el flujo aumenta, la espira intenta disminuirlo (signo opuesto); si el flujo disminuye, intenta aumentarlo.
```

### 12 — Naturaleza de la corriente inducida

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["faraday", "lenz"]

respuesta: falso
tipo: vf

enunciado: "Para que se produzca una corriente inducida en un conductor, es estrictamente necesario que el campo magnético sea constante en el tiempo, pero su intensidad debe variar de forma no lineal."

explicacion: |
  Falso. La condición fundamental para la inducción es la variación del flujo magnético ($\Phi = B \cdot A \cdot \cos\theta$). Un campo magnético puede ser constante en intensidad pero producir corriente si la espira se mueve (cambia el ángulo o el área), o un campo variable puede no producir corriente si el área de la espira es cero.
```

### 13 — Componentes del flujo magnético

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["flujo_magnetico", "geometria"]

variables:
  idx: uno_de([0, 1])
  angulos: [0, 90]
  senos: [0.0, 1.0]

respuesta: senos[idx]
tipo: completar
respuestas_validas:
  - 1.0
  - 0.0

enunciado: "El flujo magnético depende del ángulo entre el vector campo magnético y la normal a la superficie. Si dicho ángulo es de {angulos[idx]} grados, el valor del seno de ese ángulo es ___."

explicacion: |
  El flujo magnético es $\Phi = B \cdot A \cdot \cos(\theta)$. Sin embargo, la pregunta pide el seno del ángulo para evaluar la comprensión trigonométrica de la orientación. Si el ángulo es 90°, el seno es 1; si el ángulo es 0°, el seno es 0.
```

### 14 — Relación entre movimiento y corriente

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["faraday", "movimiento"]

respuesta: "se produce una corriente inducida"
tipo: completar
respuestas_validas:
  - "se produce una corriente inducida"

enunciado: "Si un imán se mueve lentamente hacia una espira de cobre colocada sobre una superficie no conductora, la variación del flujo magnético provoca que ___."

explicacion: |
  La variación del flujo magnético $\Delta\Phi/\Delta t$ es la causa de la fuerza electromotriz inducida según la Ley de Faraday. Al acercar el imán, el flujo cambia y se induce corriente.
```

### 15 — Dependencia de la velocidad de cambio

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "calculo"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Considerando la Ley de Faraday (E = -dPhi/dt), si la rapidez con la que cambia el flujo magnético a través de una espira aumenta, la magnitud de la fuerza electromotriz inducida será ___."

explicacion: |
  La magnitud de la FEM inducida es directamente proporcional a la rapidez de la variación del flujo magnético. A mayor velocidad de cambio, mayor es la tensión inducida.
```

### 16 — Diferencia entre Flujo y Campo Magnético

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "basico"
  tags: ["faraday", "flujo_magnetico"]

variables:
  es_variable: verdadero

respuesta: "flujo magnético"
tipo: completar
respuestas_validas:
  - "flujo magnético"
  - "flujo"

enunciado: "Mientras que el campo magnético B describe la intensidad del campo en un punto, la magnitud que describe la cantidad de líneas de campo que atraviesan una superficie dada es el ___."

explicacion: |
  El flujo magnético (Phi) depende tanto de la intensidad del campo (B) como del area (A) y del angulo de incidencia (theta), segun la formula Phi = B * A * cos(theta).
```

### 17 — Ley de Lenz vs. Conservación de la Energía

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "intermedio"
  tags: ["lenz", "energia"]

variables:
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La Ley de Lenz, que establece que la corriente inducida se opone a la variación del flujo que la produce, es una manifestación de la Ley de Conservación de la Energía."

explicacion: |
  Si la corriente inducida ayudara a aumentar el flujo en lugar de oponerse, se crearía un sistema de retroalimentación positiva que generaría energía de la nada, violando la primera ley de la termodinámica.
```

### 18 — Comparación entre FEM inducida y Corriente inducida

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "intermedio"
  tags: ["faraday", "fem"]

respuesta: "voltaje"
tipo: mc
opciones_explicitas: ["voltaje", "corriente"]

enunciado: "En un proceso de inducción, la Ley de Faraday describe la magnitud de la FEM (una diferencia de potencial) que surge debido al cambio en el flujo magnético; esta magnitud se mide en unidades de ___."

explicacion: |
  La Ley de Faraday se centra en la Fuerza Electromotriz (FEM), que tiene unidades de voltios, mientras que la corriente es el movimiento de carga resultante.
```

### 19 — Orden de los procesos en inducción

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "basico"
  tags: ["faraday", "proceso"]

respuesta_orden: ["Cambio en el campo magnético", "Cambio en el flujo magnético", "FEM inducida", "Corriente inducida"]
tipo: ordenar
opciones_explicitas: ["Cambio en el campo magnético", "Cambio en el flujo magnético", "FEM inducida", "Corriente inducida"]

enunciado: "Ordena cronológicamente los eventos que ocurren cuando movemos un imán cerca de una bobina de cobre:"

pasos:
  - "Se altera la intensidad del campo magnético en la zona."
  - "El número de líneas de campo que atraviesan la bobina cambia."
  - "Se genera una diferencia de potencial (voltaje)."
  - "Se establece un movimiento de electrones en el conductor."

explicacion: |
  El proceso es causal: el cambio en el campo magnético provoca un cambio en el flujo, lo que induce una FEM, la cual finalmente impulsa la corriente.
```

### 20 — Naturaleza de la inducción: Magnética vs. Eléctrica

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "avanzado"
  tags: ["electromagnetismo", "faraday"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la electrostática donde las cargas se mueven por diferencias de potencial estáticas, en la inducción electromagnética la corriente surge únicamente debido a un campo eléctrico inducido por un flujo magnético variable."

explicacion: |
  Es verdadero: la inducción requiere un campo magnético *variable* en el tiempo para generar el campo eléctrico que mueve las cargas.
```

### 21 — El freno electromagnético

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "lenz", "aplicacion"]

variables:
  datos: [["un disco de cobre que gira entre imanes", "frenado"], ["una barra de aluminio que se mueve en un tubo de cobre", "frenado"]]
  idx: uno_de([0, 1])

enunciado: "En un sistema de frenado electromagnético, si el flujo magnético a través de una bobina cambia, se induce una corriente. Según la Ley de Lenz, la dirección de la corriente inducida será tal que el campo magnético creado por ella se oponga al ___ del flujo magnético que la produjo."

respuestas_validas:
  - "cambio"
tipo: completar

explicacion: |
  La Ley de Lenz es una consecuencia de la conservación de la energía. La corriente inducida crea un campo magnético que se opone al cambio de flujo que la originó.
```

### 22 — Generador de corriente

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["faraday", "generador"]

variables:
  casos: [[15, 2], [25, 5], [40, 8]]
  idx: uno_de([0, 1, 2])
  N: casos[idx][0]
  phi: casos[idx][1]
  fem: N * phi / 2

enunciado: "Un generador eléctrico tiene {N} espiras. Si el flujo magnético a través de cada espira cambia de 0 a {phi} Wb en un intervalo de 2 segundos, la magnitud de la fuerza electromotriz (FEM) inducida es de ___ V."

pasos:
  - "Calcular el cambio de flujo total: ΔΦ_total = N * Δφ"
  - "Aplicar la Ley de Faraday: ε = ΔΦ_total / Δt"

respuesta: fem
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  Usando la Ley de Faraday: ε = (N * Δφ) / Δt. 
  Para el caso seleccionado: ε = ({N} * {phi}) / 2 = {fem} V.
```

### 23 — El principio de Lenz

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["lenz", "teoria"]

enunciado: "Si acercamos el polo norte de un imán hacia una bobina, la bobina experimentará una fuerza de repulsión porque la corriente inducida creará un campo magnético con el mismo polo (norte) hacia el imán. ¿Es esto verdadero o falso?"

respuesta: verdadero
tipo: vf

explicacion: |
  Verdadero. Según la Ley de Lenz, la corriente inducida crea un campo que se opone al aumento de flujo causado por el imán que se acerca; ese campo opuesto presenta un polo norte hacia el imán entrante, lo que produce una fuerza de repulsión.
```

### 24 — Componentes de la FEM

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "formula"]

enunciado: "En la expresión de la magnitud de la FEM inducida, ε = -N * (dΦ/dt), el signo negativo representa la dirección de la corriente según la Ley de ___."

opciones_explicitas: ["Faraday", "Lenz", "Ohm", "Coulomb"]
respuesta: "Lenz"
tipo: mc

explicacion: |
  El signo negativo es la expresión matemática de la Ley de Lenz, indicando la oposición al cambio de flujo.
```

### 25 — Pasos para calcular la FEM

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "avanzado"
  tags: ["procedimiento", "faraday"]

enunciado: "Para determinar la magnitud de la fuerza electromotriz inducida en un conductor en movimiento dentro de un campo magnético uniforme, ¿cuál es el orden correcto de los pasos?"

opciones_explicitas: ["Determinar el cambio de flujo magnético", "Calcular la derivada del flujo respecto al tiempo", "Multiplicar por el número de espiras"]
respuesta_orden: ["Determinar el cambio de flujo magnético", "Calcular la derivada del flujo respecto al tiempo", "Multiplicar por el número de espiras"]
tipo: ordenar

explicacion: |
  Primero se identifica cuánto cambia el flujo (ΔΦ), luego la tasa de cambio (dΦ/dt) y finalmente se escala por el número de vueltas (N) de la bobina.
```
