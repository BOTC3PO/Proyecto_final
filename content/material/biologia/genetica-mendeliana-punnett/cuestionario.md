# Biología — Genética mendeliana: cuadro de Punnett (cuestionario, 20 preguntas VBLang)

> Tema: `B2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un cuadro de Punnett

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["punnett", "vocabulario"]

enunciado: "¿Qué es un cuadro de Punnett?"
tipo: mc
opciones_explicitas:
  - "Una tabla que cruza los alelos que puede aportar cada progenitor, para predecir las proporciones de genotipos posibles en la descendencia"
  - "Un instrumento de laboratorio para medir ADN"
  - "Un gráfico de barras que muestra la cantidad de hijos por familia"
respuesta: "Una tabla que cruza los alelos que puede aportar cada progenitor, para predecir las proporciones de genotipos posibles en la descendencia"

explicacion: |
  Es una herramienta visual, no un instrumento de laboratorio.
```

### 2 — Alelo dominante vs. recesivo

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Cuál es la diferencia entre un alelo dominante y uno recesivo?"
tipo: mc
opciones_explicitas:
  - "El dominante se manifiesta en el fenotipo con una sola copia presente; el recesivo sólo se manifiesta si están las dos copias"
  - "El dominante siempre es más común en la población que el recesivo"
  - "No hay ninguna diferencia real, son dos nombres para lo mismo"
respuesta: "El dominante se manifiesta en el fenotipo con una sola copia presente; el recesivo sólo se manifiesta si están las dos copias"

explicacion: |
  Un heterocigota `Aa` muestra el fenotipo dominante, aunque tenga una
  copia recesiva 'escondida'.
```

### 3 — Genotipo vs. fenotipo

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Cuál es la diferencia entre genotipo y fenotipo?"
tipo: mc
opciones_explicitas:
  - "El genotipo es la combinación de alelos que tiene un individuo; el fenotipo es cómo se expresa/ve esa combinación"
  - "Son exactamente lo mismo, sólo cambia el nombre"
  - "El fenotipo es siempre visible al microscopio, el genotipo no"
respuesta: "El genotipo es la combinación de alelos que tiene un individuo; el fenotipo es cómo se expresa/ve esa combinación"

explicacion: |
  `AA` y `Aa` son genotipos distintos, pero pueden compartir el mismo
  fenotipo dominante.
```

### 4 — Homocigota vs. heterocigota

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Qué es un individuo heterocigota?"
tipo: mc
opciones_explicitas:
  - "El que tiene un alelo de cada tipo (por ejemplo, Aa)"
  - "El que tiene las dos copias iguales (AA o aa)"
  - "El que no tiene ningún alelo para ese gen"
respuesta: "El que tiene un alelo de cada tipo (por ejemplo, Aa)"

explicacion: |
  Homocigota es lo opuesto: las dos copias iguales (AA o aa).
```

### 5 — Problema: cruce Aa × Aa, proporción recesiva

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "problema"]

respuesta: 0.25
tipo: input

enunciado: "En un cruce Aa × Aa, ¿cuál es la probabilidad de que un hijo tenga genotipo aa (homocigota recesivo)?"

pasos:
  - "P(a del padre) = 1/2, P(a de la madre) = 1/2, independientes"
  - "P(aa) = 1/2 × 1/2 = 0,25"

explicacion: |
  Es exactamente la casilla 'aa' del cuadro de Punnett: 1 de 4.
```

### 6 — Problema: cruce Aa × Aa, proporción fenotipo dominante

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "problema"]

respuesta: 0.75
tipo: input

enunciado: "En un cruce Aa × Aa (A dominante), ¿cuál es la probabilidad de que un hijo tenga fenotipo DOMINANTE (AA o Aa)?"

pasos:
  - "De las 4 combinaciones (AA, Aa, Aa, aa), 3 muestran fenotipo dominante"
  - "P(dominante) = 3/4 = 0,75"

explicacion: |
  Es la proporción clásica 3:1 de Mendel.
```

### 7 — Problema: testcross Aa × aa

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Se cruza un heterocigota Aa con un homocigota recesivo aa (testcross). ¿Cuál es la probabilidad de que un hijo tenga genotipo aa?"

pasos:
  - "El progenitor aa siempre aporta 'a'; el Aa aporta 'A' o 'a' con 1/2 de probabilidad cada uno"
  - "P(aa) = 1 × 1/2 = 0,5"

explicacion: |
  Un testcross siempre da una proporción 1:1 entre los dos genotipos
  posibles, cuando uno de los progenitores es homocigota recesivo.
```

### 8 — Problema: cruce AA × aa

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "intermedio"
  tags: ["punnett", "problema"]

respuesta: 1
tipo: input

enunciado: "Se cruza un homocigota dominante AA con un homocigota recesivo aa. ¿Qué proporción de los hijos será heterocigota Aa?"

pasos:
  - "El progenitor AA sólo puede aportar 'A'; el aa sólo puede aportar 'a'"
  - "Todos los hijos son Aa: proporción = 1 (100%)"

explicacion: |
  Sin variabilidad en los alelos que puede aportar cada progenitor, el
  resultado es un único genotipo posible.
```

### 9 — Cada casilla es probabilidad compuesta

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "Cada casilla del cuadro de Punnett es, literalmente, el producto de las probabilidades del alelo del padre y del alelo de la madre (probabilidad compuesta de eventos independientes)."

explicacion: |
  Heredar cada alelo es un evento independiente, así que las
  probabilidades se multiplican.
```

### 10 — Relación con probabilidad compuesta

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta", "aplicacion"]

enunciado: "¿Qué relación tiene el cuadro de Punnett con `../../matematica/probabilidad-compuesta/`?"
tipo: mc
opciones_explicitas:
  - "Es exactamente probabilidad compuesta (eventos independientes que se multiplican), con una notación visual de cuadraditos en vez de una fórmula"
  - "No tiene ninguna relación real con la probabilidad"
  - "El cuadro de Punnett reemplaza por completo la necesidad de calcular probabilidades"
respuesta: "Es exactamente probabilidad compuesta (eventos independientes que se multiplican), con una notación visual de cuadraditos en vez de una fórmula"

explicacion: |
  Es el cruce que más rinde de todo el bloque de probabilidad y
  estadística, según `troncos.md`.
```

### 11 — Problema: contar casillas con fenotipo recesivo

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "intermedio"
  tags: ["punnett", "problema"]

respuesta: 1
tipo: input

enunciado: "En el cuadro de Punnett de un cruce Aa × Aa (4 casillas: AA, Aa, Aa, aa), ¿cuántas casillas muestran fenotipo RECESIVO?"

explicacion: |
  Sólo la casilla 'aa' — las otras tres (AA, Aa, Aa) muestran fenotipo
  dominante.
```

### 12 — Proporción fenotípica 3:1

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "intermedio"
  tags: ["punnett"]

respuesta: verdadero
tipo: vf

enunciado: "La proporción fenotípica clásica 3:1 (3 dominantes por cada 1 recesivo) aparece en un cruce monohíbrido entre dos heterocigotas (Aa × Aa)."

explicacion: |
  Es el resultado más citado de los experimentos originales de Mendel
  con arvejas.
```

### 13 — Aplicación real: los experimentos de Mendel

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Mendel cruzó arvejas de semilla lisa (heterocigotas, Ll) entre sí y obtuvo, aproximadamente, 3/4 de semillas lisas y 1/4 de semillas rugosas. ¿Qué explica esta proporción?"
tipo: mc
opciones_explicitas:
  - "'Lisa' es el fenotipo dominante — un cruce Ll × Ll da genotipos 1 LL : 2 Ll : 1 ll, y tanto LL como Ll muestran el fenotipo dominante (liso)"
  - "Las semillas lisas son genéticamente idénticas entre sí, sin variación posible"
  - "Es un resultado que no tiene ninguna explicación genética conocida"
respuesta: "'Lisa' es el fenotipo dominante — un cruce Ll × Ll da genotipos 1 LL : 2 Ll : 1 ll, y tanto LL como Ll muestran el fenotipo dominante (liso)"

explicacion: |
  Es el experimento histórico real que originó las leyes de Mendel.
```

### 14 — Problema: cruce con un progenitor homocigota

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Se cruza un heterocigota Aa con un homocigota dominante AA. ¿Cuál es la probabilidad de que un hijo sea heterocigota Aa?"

pasos:
  - "El progenitor AA siempre aporta 'A'; el Aa aporta 'A' o 'a' con 1/2 cada uno"
  - "P(Aa) = 1 × 1/2 = 0,5 (y P(AA) = 1 × 1/2 = 0,5, ninguno es aa)"

explicacion: |
  Con un progenitor homocigota dominante, ningún hijo puede ser
  recesivo — sólo se reparten entre AA y Aa.
```

### 15 — Segregación independiente de los alelos

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett"]

respuesta: verdadero
tipo: vf

enunciado: "El cuadro de Punnett asume que cada progenitor transmite uno de sus dos alelos al azar, de forma independiente de qué alelo transmite el otro progenitor."

explicacion: |
  Es la ley de la segregación independiente de Mendel, y es lo que
  justifica multiplicar las probabilidades en vez de sumarlas.
```

### 16 — Problema: cruce dihíbrido (dos genes)

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["punnett", "problema"]

respuesta: redondear(0.75 * 0.75, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "En un cruce dihíbrido AaBb × AaBb (dos genes independientes entre sí), ¿cuál es la probabilidad de que un hijo muestre AMBOS fenotipos dominantes (para el gen A y para el gen B)?"

pasos:
  - "P(dominante en A) = 3/4; P(dominante en B) = 3/4, genes independientes"
  - "P(ambos dominantes) = 3/4 × 3/4 = {redondear(0.75 * 0.75, 4)}"

explicacion: |
  Es la misma multiplicación de probabilidad compuesta, ahora aplicada
  a dos genes en vez de a un único gen.
```

### 17 — Qué es un testcross

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "intermedio"
  tags: ["testcross", "vocabulario"]

enunciado: "¿Para qué sirve un 'testcross' (cruzar con un homocigota recesivo conocido)?"
tipo: mc
opciones_explicitas:
  - "Para determinar el genotipo desconocido de un individuo con fenotipo dominante (podría ser AA o Aa)"
  - "Para aumentar la cantidad de hijos con fenotipo recesivo"
  - "Para eliminar por completo un alelo recesivo de una población"
respuesta: "Para determinar el genotipo desconocido de un individuo con fenotipo dominante (podría ser AA o Aa)"

explicacion: |
  Si aparece algún hijo con fenotipo recesivo, el individuo original
  era heterocigota (Aa).
```

### 18 — Problema: interpretar el resultado de un testcross

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "avanzado"
  tags: ["testcross", "problema"]

enunciado: "Se cruza un individuo de fenotipo dominante (genotipo desconocido) con un homocigota recesivo, y aparece al menos un hijo con fenotipo recesivo. ¿Cuál era el genotipo del individuo original?"
tipo: mc
opciones_explicitas:
  - "Aa (heterocigota) — sólo así puede transmitir el alelo recesivo que aparece en la descendencia"
  - "AA (homocigota dominante) — no puede transmitir ningún alelo recesivo"
respuesta: "Aa (heterocigota) — sólo así puede transmitir el alelo recesivo que aparece en la descendencia"

explicacion: |
  Un AA nunca podría producir un hijo aa, sin importar el genotipo del
  otro progenitor recesivo.
```

### 19 — Por qué el cuadro es 'probabilidad dibujada'

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué se dice que el cuadro de Punnett es 'probabilidad compuesta dibujada'?"
tipo: mc
opciones_explicitas:
  - "Porque cada una de sus casillas representa una combinación específica de alelos, con una probabilidad que es el producto de las probabilidades de cada alelo por separado"
  - "Porque fue inventado por el mismo matemático que descubrió la probabilidad compuesta"
  - "Porque no tiene ninguna base matemática real, es sólo una convención visual"
respuesta: "Porque cada una de sus casillas representa una combinación específica de alelos, con una probabilidad que es el producto de las probabilidades de cada alelo por separado"

explicacion: |
  Permite calcular probabilidades genéticas sin necesitar escribir
  ninguna fórmula, sólo llenando los cuadraditos.
```

### 20 — Cierre: para qué sirve el cuadro de Punnett

```
metadata:
  materia: "biologia"
  tema: "genetica_mendeliana_punnett"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el cuadro de Punnett?"
tipo: mc
opciones_explicitas:
  - "Para predecir, en términos de probabilidad, cómo se van a repartir los genotipos y fenotipos posibles en la descendencia de un cruce"
  - "Para determinar con certeza absoluta el genotipo de cada hijo antes de que nazca"
  - "Sólo se usa para estudiar plantas, no otros organismos"
respuesta: "Para predecir, en términos de probabilidad, cómo se van a repartir los genotipos y fenotipos posibles en la descendencia de un cruce"

explicacion: |
  Es la base de `../herencia-ligada-al-sexo/` y `../grupos-sanguineos/`,
  que aplican la misma lógica a mecanismos genéticos más específicos.
```
