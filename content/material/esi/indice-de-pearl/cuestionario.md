# ESI — Eficacia de un método anticonceptivo: índice de Pearl (cuestionario, 20 preguntas VBLang)

> Tema: `ES1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué mide el índice de Pearl

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "basico"
  tags: ["indice_pearl", "vocabulario"]

enunciado: "¿Qué mide el índice de Pearl de un método anticonceptivo?"
tipo: mc
opciones_explicitas:
  - "La cantidad de embarazos no planificados por cada 100 mujeres que usan ese método durante 1 año"
  - "El costo promedio del método en el mercado"
  - "La cantidad de efectos secundarios reportados"
respuesta: "La cantidad de embarazos no planificados por cada 100 mujeres que usan ese método durante 1 año"

explicacion: |
  Es una tasa de fallo, no una tasa de éxito directa.
```

### 2 — Uso perfecto vs. uso típico

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "intermedio"
  tags: ["uso_perfecto_tipico", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre el índice de Pearl de 'uso perfecto' y el de 'uso típico'?"
tipo: mc
opciones_explicitas:
  - "El de uso perfecto asume que el método se usa sin ningún error; el de uso típico incluye los errores humanos reales (olvidos, uso incorrecto), y casi siempre es más alto"
  - "Son exactamente el mismo número, sólo cambia el nombre"
  - "El de uso típico es siempre más bajo que el de uso perfecto"
respuesta: "El de uso perfecto asume que el método se usa sin ningún error; el de uso típico incluye los errores humanos reales (olvidos, uso incorrecto), y casi siempre es más alto"

explicacion: |
  La brecha entre ambos números indica qué tan dependiente es el
  método de un uso sin errores.
```

### 3 — Problema: calcular el índice de Pearl

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "avanzado"
  tags: ["indice_pearl", "problema"]

variables:
  embarazos: uno_de([2, 3, 5])
  meses_totales: uno_de([1000, 1200])

respuesta: redondear(embarazos / meses_totales * 1200, 2)
tipo: input
tolerancia_abs: 0.1

enunciado: "En un estudio, hubo {embarazos} embarazos no planificados en {meses_totales} meses totales de uso de un método. ¿Cuál es el índice de Pearl?"

pasos:
  - "Índice de Pearl = ({embarazos} / {meses_totales}) × 1200 = {redondear(embarazos / meses_totales * 1200, 2)}"

explicacion: |
  El factor ×1200 convierte meses de exposición a la unidad estándar
  de 100 mujeres-año.
```

### 4 — Problema: comparar dos métodos por su índice

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "intermedio"
  tags: ["indice_pearl", "problema"]

variables:
  indice_a: uno_de([0.3, 0.5])
  indice_b: uno_de([9, 12])

respuesta: indice_a < indice_b
tipo: vf

enunciado: "Método A tiene índice de Pearl {indice_a}; Método B tiene índice de Pearl {indice_b}. ¿El Método A es MÁS eficaz que el Método B (menos embarazos no planificados por cada 100 mujeres-año)?"

explicacion: |
  Un índice de Pearl MÁS BAJO siempre indica MAYOR eficacia.
```

### 5 — Índice más bajo, mayor eficacia

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "basico"
  tags: ["indice_pearl"]

respuesta: verdadero
tipo: vf

enunciado: "Un índice de Pearl más bajo significa que el método es más eficaz (menos embarazos no planificados por cada 100 mujeres-año de uso)."

explicacion: |
  Es una tasa de FALLO, así que menos es mejor.
```

### 6 — Problema: probabilidad de no embarazo en un año

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  indice: uno_de([1, 2, 5])

respuesta: redondear(1 - indice / 100, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un método tiene índice de Pearl {indice}. ¿Cuál es la probabilidad aproximada de NO quedar embarazada en un año de uso?"

pasos:
  - "P(embarazo) ≈ {indice}/100 = {redondear(indice / 100, 3)}"
  - "P(no embarazo) ≈ 1 − {redondear(indice / 100, 3)} = {redondear(1 - indice / 100, 3)}"

explicacion: |
  Se aplica la regla del complemento de `../../matematica/probabilidad-simple/`.
```

### 7 — Por qué el uso típico suele dar un índice más alto

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "intermedio"
  tags: ["uso_perfecto_tipico"]

enunciado: "¿Por qué el índice de Pearl de 'uso típico' suele ser más alto que el de 'uso perfecto'?"
tipo: mc
opciones_explicitas:
  - "Porque en la práctica real la gente comete errores (olvidos, uso incorrecto, interrupciones) que no ocurren en el escenario ideal de 'uso perfecto'"
  - "Porque el uso típico se mide con una fórmula matemática distinta"
  - "No hay ninguna razón real, es sólo una convención de reporte"
respuesta: "Porque en la práctica real la gente comete errores (olvidos, uso incorrecto, interrupciones) que no ocurren en el escenario ideal de 'uso perfecto'"

explicacion: |
  Es la brecha entre la eficacia teórica y la eficacia real observada
  en la población.
```

### 8 — Problema: calcular el índice con otro estudio

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "avanzado"
  tags: ["indice_pearl", "problema"]

variables:
  embarazos: uno_de([8, 10])
  meses_totales: 1200

respuesta: redondear(embarazos / meses_totales * 1200, 2)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un estudio de uso típico registró {embarazos} embarazos no planificados en {meses_totales} meses totales de uso (equivalente a 100 mujeres-año). ¿Cuál es el índice de Pearl de uso típico?"

pasos:
  - "Con {meses_totales} meses = 100 mujeres-año exactas, el índice de Pearl es directamente {embarazos} (embarazos por cada 100 mujeres-año)"

explicacion: |
  Cuando los meses totales equivalen exactamente a 100 mujeres-año, el
  índice coincide directamente con la cantidad de embarazos contados.
```

### 9 — Aplicación real: por qué mirar ambos índices

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué conviene mirar tanto el índice de uso perfecto como el de uso típico al comparar métodos anticonceptivos?"
tipo: mc
opciones_explicitas:
  - "Porque el uso perfecto muestra la eficacia teórica máxima, pero el uso típico refleja mejor lo que realmente pasa en la práctica, considerando errores humanos normales"
  - "Porque sólo importa el uso perfecto, el uso típico no tiene ninguna utilidad real"
  - "Porque sólo importa el uso típico, el uso perfecto es un dato inventado sin ninguna base"
respuesta: "Porque el uso perfecto muestra la eficacia teórica máxima, pero el uso típico refleja mejor lo que realmente pasa en la práctica, considerando errores humanos normales"

explicacion: |
  Ambos números son reales y útiles, cada uno responde una pregunta
  distinta.
```

### 10 — El índice de Pearl es una tasa de fallo

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "intermedio"
  tags: ["indice_pearl"]

respuesta: verdadero
tipo: vf

enunciado: "El índice de Pearl mide, específicamente, la tasa de FALLO de un método (embarazos que ocurrieron), no directamente su tasa de éxito."

explicacion: |
  Por eso un índice más bajo es mejor, al revés de una medida de
  eficacia directa.
```

### 11 — Problema: comparar brecha entre uso perfecto y típico

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "avanzado"
  tags: ["uso_perfecto_tipico", "problema"]

variables:
  perfecto_a: 0.3
  tipico_a: 9
  perfecto_b: 0.1
  tipico_b: 0.3

respuesta: (tipico_a - perfecto_a) > (tipico_b - perfecto_b)
tipo: vf

enunciado: "Método A: uso perfecto {perfecto_a}, uso típico {tipico_a}. Método B: uso perfecto {perfecto_b}, uso típico {tipico_b}. ¿La brecha entre uso perfecto y típico es MAYOR en el Método A?"

explicacion: |
  Una brecha grande sugiere que el método depende mucho de que la
  persona lo use sin ningún error; una brecha chica sugiere lo
  contrario.
```

### 12 — Relación con probabilidad simple

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "intermedio"
  tags: ["probabilidad", "aplicacion"]

enunciado: "¿Qué relación tiene el índice de Pearl con `../../matematica/probabilidad-simple/`?"
tipo: mc
opciones_explicitas:
  - "Dividiendo el índice de Pearl por 100, se obtiene directamente la probabilidad aproximada de embarazo en un año de uso de ese método"
  - "No tiene ninguna relación real con la probabilidad"
  - "El índice de Pearl reemplaza por completo la necesidad de calcular probabilidades"
respuesta: "Dividiendo el índice de Pearl por 100, se obtiene directamente la probabilidad aproximada de embarazo en un año de uso de ese método"

explicacion: |
  Es, literalmente, una probabilidad expresada como tasa por cada 100
  mujeres-año.
```

### 13 — Problema: comparar probabilidad de no embarazo entre métodos

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  indice_a: 0.5
  indice_b: 9

respuesta: (1 - indice_a / 100) > (1 - indice_b / 100)
tipo: vf

enunciado: "Método A tiene índice de Pearl {indice_a}; Método B tiene índice {indice_b}. ¿La probabilidad de NO embarazo en un año es MAYOR con el Método A?"

explicacion: |
  Un índice de Pearl más bajo (Método A) implica una probabilidad más
  alta de no embarazo.
```

### 14 — Aplicación: comparación informada

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Además del índice de Pearl, ¿qué otros factores son relevantes al elegir un método anticonceptivo?"
tipo: mc
opciones_explicitas:
  - "Efectos secundarios, protección (o no) frente a infecciones de transmisión sexual, facilidad de uso, accesibilidad y preferencia personal — el índice de Pearl es un dato entre varios, no el único"
  - "El índice de Pearl es el único dato relevante, no hace falta considerar nada más"
  - "El costo es el único factor que realmente importa"
respuesta: "Efectos secundarios, protección (o no) frente a infecciones de transmisión sexual, facilidad de uso, accesibilidad y preferencia personal — el índice de Pearl es un dato entre varios, no el único"

explicacion: |
  El índice de Pearl mide sólo eficacia anticonceptiva — no mide
  protección contra ITS ni otros factores relevantes de salud
  reproductiva.
```

### 15 — El índice de Pearl no es fijo para siempre

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "avanzado"
  tags: ["indice_pearl"]

respuesta: verdadero
tipo: vf

enunciado: "Los valores concretos del índice de Pearl de un método pueden variar entre estudios, poblaciones y con el tiempo — por eso conviene consultar una fuente médica actualizada antes de una decisión real, en vez de memorizar un número fijo."

explicacion: |
  Es la misma cautela de `../../matematica/riesgo-relativo-vs-absoluto/`
  frente a cifras de salud: la estructura del cálculo es estable, los
  números concretos no siempre lo son.
```

### 16 — Problema: calcular embarazos esperados dado el índice

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "avanzado"
  tags: ["indice_pearl", "problema"]

variables:
  indice: uno_de([2, 4])
  mujeres: 500

respuesta: redondear(indice / 100 * mujeres, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un método tiene índice de Pearl {indice}. Si {mujeres} mujeres lo usan durante 1 año, ¿cuántos embarazos no planificados se esperan aproximadamente?"

pasos:
  - "Embarazos esperados = ({indice}/100) × {mujeres} = {redondear(indice / 100 * mujeres, 1)}"

explicacion: |
  Es la aplicación directa de la probabilidad (índice/100) a una
  población concreta.
```

### 17 — Qué indica una brecha chica entre uso perfecto y típico

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "intermedio"
  tags: ["uso_perfecto_tipico", "aplicacion"]

enunciado: "Un método tiene un índice de uso perfecto y uno de uso típico casi idénticos entre sí. ¿Qué sugiere esto sobre el método?"
tipo: mc
opciones_explicitas:
  - "Que su eficacia depende poco de que la persona lo use sin errores — suele pasar con métodos que no requieren recordar tomar o colocar algo con frecuencia"
  - "Que el método no es eficaz en absoluto"
  - "Que el estudio que lo midió tiene errores metodológicos"
respuesta: "Que su eficacia depende poco de que la persona lo use sin errores — suele pasar con métodos que no requieren recordar tomar o colocar algo con frecuencia"

explicacion: |
  Es la lectura práctica de la brecha entre ambos índices.
```

### 18 — Problema: índice de Pearl a partir de una tasa mensual

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "avanzado"
  tags: ["indice_pearl", "problema"]

variables:
  embarazos_mensuales: uno_de([0.005, 0.008])

respuesta: redondear(embarazos_mensuales * 1200, 2)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un método tiene una tasa de fallo mensual de {embarazos_mensuales} (embarazos por mes de uso, en promedio). ¿Cuál es su índice de Pearl equivalente?"

pasos:
  - "Índice de Pearl = {embarazos_mensuales} × 1200 = {redondear(embarazos_mensuales * 1200, 2)}"

explicacion: |
  Es la misma fórmula, expresada a partir de una tasa mensual en vez
  de un conteo total de embarazos y meses.
```

### 19 — No hay método con índice de Pearl igual a 0 en uso típico

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "avanzado"
  tags: ["uso_perfecto_tipico"]

respuesta: verdadero
tipo: vf

enunciado: "En la práctica (uso típico), ningún método anticonceptivo reversible tiene un índice de Pearl igual a 0 — siempre existe algún margen de fallo, por mínimo que sea, debido al error humano o a fallos del método en sí."

explicacion: |
  Es la razón por la que comparar índices (no buscar un método
  'perfecto' con índice 0) es el enfoque realista.
```

### 20 — Cierre: para qué sirve el índice de Pearl

```
metadata:
  materia: "esi"
  tema: "indice_de_pearl"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el índice de Pearl?"
tipo: mc
opciones_explicitas:
  - "Para comparar objetivamente la eficacia de distintos métodos anticonceptivos, distinguiendo la eficacia teórica (uso perfecto) de la eficacia real observada (uso típico)"
  - "Para medir el costo de un método anticonceptivo"
  - "Para determinar si un método protege contra infecciones de transmisión sexual"
respuesta: "Para comparar objetivamente la eficacia de distintos métodos anticonceptivos, distinguiendo la eficacia teórica (uso perfecto) de la eficacia real observada (uso típico)"

explicacion: |
  Es una aplicación directa de `../../matematica/probabilidad-simple/`
  a educación sexual integral.
```
