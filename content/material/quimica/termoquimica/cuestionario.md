# Química — Termoquímica (cuestionario, 26 preguntas VBLang)

> Tema: `QO`. Ver `teoria.md` en esta misma carpeta.

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
tipo: completar
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
tipo: completar
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

### 21 — Entalpía de reacción con entalpías de formación

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["calculo", "entalpia"]

variables:
  hp: random(-500, -100)
  hr: random(-300, -20)

respuesta: hp - hr
tipo: input
unidad: "kJ"
tolerancia_abs: 0

enunciado: "En una reacción, la suma de las entalpías de formación de los productos es {hp} kJ y la de los reactivos es {hr} kJ. ¿Cuál es el ΔH de la reacción?"

pasos:
  - "ΔH = Σ productos − Σ reactivos"
  - "ΔH = ({hp}) − ({hr}) = {hp - hr} kJ"

explicacion: |
  Si el resultado es negativo, la reacción libera calor (exotérmica).
```

### 22 — Calor liberado según la cantidad

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["calculo", "estequiometria"]

variables:
  n: uno_de([0.5, 2, 3, 5, 10])

respuesta: n * 891
tipo: input
unidad: "kJ"
tolerancia: 1%

enunciado: "La combustión del metano libera 891 kJ por mol (ΔH = −891 kJ/mol). ¿Cuánto calor se libera al quemar {n} mol, en kJ?"

pasos:
  - "Calor = moles × calor por mol"
  - "Calor = {n} × 891 = {n * 891} kJ"

explicacion: |
  El ΔH es por mol de reacción: con el doble de combustible sale el doble de calor.
```

### 23 — Ley de Hess

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "avanzado"
  tags: ["calculo", "hess"]

variables:
  h1: random(-400, -50)
  h2: random(-300, 100)

respuesta: h1 + h2
tipo: input
unidad: "kJ"
tolerancia_abs: 0

enunciado: "Una reacción se puede hacer en dos pasos: el primero tiene ΔH₁ = {h1} kJ y el segundo ΔH₂ = {h2} kJ. ¿Cuál es el ΔH de la reacción completa?"

pasos:
  - "Ley de Hess: el ΔH total es la suma de los pasos."
  - "ΔH = ({h1}) + ({h2}) = {h1 + h2} kJ"

explicacion: |
  La entalpía depende solo del estado inicial y final, no del camino.
```

### 24 — Invertir una reacción

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["calculo", "hess"]

variables:
  h: random(-600, -50)
  k: uno_de([1, 2, 3])

respuesta: -h * k
tipo: input
unidad: "kJ"
tolerancia_abs: 0

enunciado: "Una reacción tiene ΔH = {h} kJ. Si se escribe al revés y multiplicada por {k}, ¿cuánto vale su ΔH?"

pasos:
  - "Invertir cambia el signo: −({h}) = {-h} kJ"
  - "Multiplicar por {k} multiplica el ΔH: {-h} × {k} = {-h * k} kJ"

explicacion: |
  Son las dos reglas para combinar ecuaciones con la ley de Hess.
```

### 25 — Calentar agua con gas

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "avanzado"
  tags: ["calculo", "cotidiano"]

variables:
  L: uno_de([1, 2, 5])
  dT: uno_de([60, 70, 80])

respuesta: L * 4.18 * dT / 891
tipo: input
unidad: "mol"
tolerancia: 2%

enunciado: "Para calentar {L} litro(s) de agua {dT} °C hacen falta {L} × 4,18 × {dT} kJ. ¿Cuántos moles de metano hay que quemar como mínimo? (el metano libera 891 kJ/mol; podés redondear a dos decimales)"

pasos:
  - "Calor necesario: {L} × 4,18 × {dT} = {L * 4.18 * dT | 1} kJ"
  - "Moles: {L * 4.18 * dT | 1} / 891 ≈ {L * 4.18 * dT / 891 | 2} mol"

explicacion: |
  En la práctica hace falta más gas, porque parte del calor se pierde en el aire y en la olla.
```

### 26 — ¿Exotérmica o endotérmica?

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["clasificacion", "verdadero_falso"]

variables:
  h: uno_de([-891, -286, -57, 44, 178, 90])

respuesta: h < 0
tipo: vf

enunciado: "Una reacción tiene ΔH = {h} kJ/mol. ¿Es exotérmica (libera calor)?"

pasos:
  - "Exotérmica: ΔH < 0. Endotérmica: ΔH > 0. Acá ΔH = {h} kJ/mol."

explicacion: |
  El signo del ΔH se mira desde el sistema: negativo significa que la energía sale hacia el entorno.
```
