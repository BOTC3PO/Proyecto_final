# Química — Termoquímica (cuestionario, 20 preguntas VBLang)

> Tema: `QO`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma) y corregido a mano.
> Bug de esta tanda: `uno_de([...])[idx]` otra vez (indexar un escalar).
> También se limpió LaTeX crudo (`$\Delta H_1$`) a notación de texto
> plano en varias preguntas.

---

### 1 — Reacciones que liberan calor

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["calor", "entalpia"]

respuesta: "exotermica"
tipo: mc
opciones_explicitas: ["exotermica", "endotermica", "neutra", "isotermica"]

enunciado: "Una reacción que LIBERA calor al entorno se llama..."

explicacion: |
  Las reacciones exotérmicas liberan energía en forma de calor hacia el entorno.
```

### 2 — Reacciones que absorben calor

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["calor", "entalpia"]

respuesta: "endotermica"
tipo: mc
opciones_explicitas: ["endotermica", "exotermica", "neutra", "isotermica"]

enunciado: "Una reacción que ABSORBE calor del entorno se llama..."

explicacion: |
  Las reacciones endotérmicas absorben energía del entorno para llevarse a cabo.
```

### 3 — Entalpía en reacciones exotérmicas

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["entalpia", "delta_h"]

respuesta: verdadero
tipo: vf

enunciado: "Una reacción exotérmica tiene ΔH negativo."

explicacion: |
  El sistema pierde energía en una exotérmica, así que la entalpía final es menor que la inicial: ΔH < 0.
```

### 4 — Entalpía en reacciones endotérmicas

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["entalpia", "delta_h"]

respuesta: falso
tipo: vf

enunciado: "Una reacción endotérmica tiene ΔH negativo."

explicacion: |
  Falso. En una endotérmica el sistema absorbe calor, así que ΔH es positivo.
```

### 5 — Clasificación de procesos termoquímicos

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["ejemplos", "entalpia"]

variables:
  escenarios: [["combustion", "exotermica"], ["fotosintesis", "endotermica"], ["neutralizacion acido-base tipica", "exotermica"]]
  idx: uno_de([0, 1, 2])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["exotermica", "endotermica"]

enunciado: "El proceso de {escenarios[idx][0]} es de tipo..."

explicacion: |
  El tipo de reacción para {escenarios[idx][0]} es {escenarios[idx][1]}.
```

### 6 — Fórmula de la entalpía de reacción

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["entalpia", "reaccion"]

respuesta: "reactivos"
tipo: completar
respuestas_validas:
  - "reactivos"

enunciado: "La fórmula de la entalpía de reacción es ΔH_reacción = ΔH_productos - ΔH ___."

explicacion: |
  La entalpía de reacción es la diferencia entre la entalpía de los productos y la de los reactivos.
```

### 7 — Entalpía de formación de elementos

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["entalpia_formacion", "elementos"]

respuesta: verdadero
tipo: vf

enunciado: "La entalpía de formación de un elemento en su estado más estable (como O2 gas) es 0 por definición."

explicacion: |
  Por convención, los elementos en su estado estándar tienen entalpía de formación cero — son el punto de referencia.
```

### 8 — Cálculo de ΔH de reacción

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["calculo", "entalpia"]

variables:
  dh_productos: uno_de([-100, -50, 0, 50])
  dh_reactivos: uno_de([-80, -30, 20, 40])

respuesta: dh_productos - dh_reactivos
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la entalpía de reacción si la entalpía de los productos es {dh_productos} kJ/mol y la de los reactivos es {dh_reactivos} kJ/mol."

pasos:
  - "ΔH_reacción = ΔH_productos - ΔH_reactivos"

explicacion: |
  {dh_productos} - {dh_reactivos} kJ/mol.
```

### 9 — Significado del signo de ΔH

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["signo", "calor"]

respuesta: verdadero
tipo: vf

enunciado: "El signo de ΔH indica si el sistema libera o absorbe calor, no cuánto calor hay en total."

explicacion: |
  El signo marca la dirección (exotérmico/endotérmico); el valor absoluto es la magnitud del cambio.
```

### 10 — Ley de Hess: concepto fundamental

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["ley_de_hess", "entalpia"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de Hess dice que el ΔH total de una reacción no depende del camino seguido, sólo de los estados inicial y final."

explicacion: |
  Correcto. La entalpía es una función de estado: sólo depende de las condiciones iniciales y finales.
```

### 11 — Cálculo de ΔH total (Ley de Hess)

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["ley_de_hess", "calculo"]

variables:
  datos: [[10, -5], [20, -10], [30, 15]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0] + datos[idx][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Una reacción A→C se puede escribir como A→B (ΔH1 = {datos[idx][0]} kJ) y B→C (ΔH2 = {datos[idx][1]} kJ). ¿Cuál es el ΔH total de A→C?"

pasos:
  - "ΔH_total = ΔH1 + ΔH2"

explicacion: |
  Según la Ley de Hess, el ΔH global es la suma de las etapas: {datos[idx][0]} + {datos[idx][1]}.
```

### 12 — Utilidad de la Ley de Hess

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["ley_de_hess", "aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿La ley de Hess permite calcular el ΔH de una reacción difícil de medir directamente, combinando otras reacciones conocidas?"

explicacion: |
  Verdadero. Es la aplicación práctica principal de la ley de Hess.
```

### 13 — Función de estado

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["ley_de_hess", "conceptos"]

respuesta: "estado"
tipo: completar
respuestas_validas:
  - "estado"

enunciado: "La propiedad que hace que ΔH dependa sólo de los estados inicial y final, y no del camino, se llama función de ___."

explicacion: |
  La entalpía es una función de estado: depende únicamente de las condiciones inicial y final del sistema.
```

### 14 — Reacción exotérmica y niveles de energía

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["diagramas_energia", "exotermica"]

respuesta: verdadero
tipo: vf

enunciado: "En una reacción exotérmica, el nivel de energía de los productos es más bajo que el de los reactivos."

explicacion: |
  El sistema libera energía, así que la entalpía de los productos queda por debajo de la de los reactivos (ΔH < 0).
```

### 15 — Reacción endotérmica y niveles de energía

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["diagramas_energia", "endotermica"]

respuesta: falso
tipo: vf

enunciado: "En una reacción endotérmica, el nivel de energía de los productos es más bajo que el de los reactivos."

explicacion: |
  Falso. El sistema absorbe energía, así que los productos quedan en un nivel más alto (ΔH > 0).
```

### 16 — Significado de la diferencia de energía

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["entalpia", "diagramas_energia"]

respuesta: "el calor liberado"
tipo: mc
opciones_explicitas: ["el calor liberado", "el calor absorbido", "la energía de activación", "la velocidad de reacción"]

enunciado: "En un diagrama de energía de una reacción exotérmica, la diferencia de energía entre reactivos y productos representa..."

explicacion: |
  Esa diferencia de entalpía (ΔH) es la energía que sale del sistema como calor.
```

### 17 — Energía de activación y cinética

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["energia_activacion", "cinetica"]

respuesta: falso
tipo: vf

enunciado: "La energía de activación (la 'joroba' del diagrama de energía) es un concepto propio de la termoquímica, no de la cinética de reacción."

explicacion: |
  Falso. La energía de activación es tema de cinética química: define la barrera energética que determina la velocidad de la reacción.
```

### 18 — Efecto sobre el ambiente (aplicación)

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["aplicacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Tocar el exterior de un vaso donde se disolvió una sal endotérmica se siente frío, porque la reacción absorbió calor del entorno (incluyendo el vaso)."

explicacion: |
  Correcto. Una disolución endotérmica saca energía del entorno inmediato, lo que se percibe como una bajada de temperatura.
```

### 19 — Coeficientes en la entalpía de reacción

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "avanzado"
  tags: ["entalpia", "coeficientes"]

respuesta: verdadero
tipo: vf

enunciado: "Al calcular la entalpía de reacción a partir de entalpías de formación, hay que multiplicar cada ΔH_f por el coeficiente de esa sustancia en la ecuación balanceada."

explicacion: |
  Correcto. Si hay 2 moles de un producto, su contribución es 2 × ΔH_f, no sólo ΔH_f una vez.
```

### 20 — ΔH y masa de la reacción

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "El ΔH de una reacción es una propiedad fija que no depende de cuántos moles reaccionen."

explicacion: |
  Falso. El ΔH tabulado corresponde a la reacción tal como está balanceada (con esos coeficientes); si reacciona el doble de moles, el calor total intercambiado también se duplica.
```
