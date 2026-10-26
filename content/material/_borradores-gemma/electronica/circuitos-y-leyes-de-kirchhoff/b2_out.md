### 1 — Ley de Corrientes en un Nodo
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["nodos", "corriente", "kirchhoff"]

variables:
  escenario: uno_de([
    ["10A", "2A", "8A"],
    ["5A", "1A", "4A"],
    ["20A", "5A", "15A"]
  ])

enunciado: "En un nodo de un circuito, entran {escenario[0]} de corriente a través de una rama. Si por otra rama salen {escenario[1]} y por una tercera rama salen {escenario[2]}, la corriente que entra por la primera rama debe ser igual a la suma de las que salen. Según la Ley de Corrientes de Kirchhoff, la corriente total que sale del nodo es de ___ A."

respuestas_validas: ["10A", "5A", "20A"]
respuesta: escenario[0]
tipo: completar

explicacion: |
  La Ley de Corrientes de Kirchhoff (LCC) establece que la suma de las corrientes que entran a un nodo es igual a la suma de las corrientes que salen de él. En este caso, la corriente de entrada es {escenario[0]} y la suma de las salidas es {escenario[1]} + {escenario[2]} = {escenario[0]}.
```

### 2 — Ley de Tensiones en una Malla
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mallas", "tension", "kirchhoff"]

variables:
  fuente: uno_de([
    [12, 4, 24],
    [5, 2, 3],
    [10, 5, 5]
  ])
  resistencia_total: uno_de([
    [2, 3, 4],
    [1, 2, 3],
    [5, 5, 5]
  ])

enunciado: "En una malla simple con una fuente de tensión de {fuente[0]} V y dos resistencias en serie que suman {resistencia_total[0]} $\Omega$, la suma de las caídas de tensión en las resistencias debe ser igual a la tensión de la fuente según la Ley de Tensiones de Kirchhoff (LVK). ¿La suma de las caídas de tensión en las resistencias es igual a la tensión de la fuente?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: vf

explicacion: |
  La LVK establece que la suma algebraica de las tensiones alrededor de cualquier lazo cerrado es igual a cero. En términos de magnitudes, la suma de las caídas de tensión en las resistencias es igual a la tensión suministrada por la fuente.
```

### 3 — Cálculo de Corriente de Malla
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mallas", "ohm", "calculo"]

variables:
  v_fuente: uno_de([
    [12, 2, 6],
    [24, 4, 8],
    [6, 1, 3]
  ])
  r_total: uno_de([
    [4, 2, 3],
    [6, 3, 2],
    [2, 2, 1]
  ])

enunciado: "Para resolver una malla con una fuente de {v_fuente[0]} V y una resistencia total de {r_total[0]} $\Omega$, debemos aplicar la Ley de Ohm ($I = V / R$). ¿Cuál es el valor de la corriente que circula por la malla?"

opciones_explicitas: ["3A", "6A", "1A", "4A"]
respuesta: v_fuente[0] / r_total[0]
tipo: mc

explicacion: |
  Aplicando la Ley de Ohm: $I = \frac{V_{fuente}}{R_{total}}$. 
  Para este caso: $I = \frac{{v_fuente[0]}}{{{r_total[0]}}} = \text{resultado}$.
```

### 4 — Pasos para el Análisis de Nodos
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "avanzado"
  tags: ["metodologia", "nodos"]

enunciado: "Para resolver un circuito mediante el método de tensiones de nodo, se deben seguir estos pasos en orden correcto:"

opciones_explicitas: [
  "Escribir las ecuaciones de LCC para cada nodo",
  "Asignar un nodo de referencia (tierra)",
  "Identificar todos los nodos del circuito",
  "Resolver el sistema de ecuaciones resultante"
]
respuesta: ["Asignar un nodo de referencia (tierra)", "Identificar todos los nodos del circuito", "Escribir las ecuaciones de LCC para cada nodo", "Resolver el sistema de ecuaciones resultante"]
tipo: ordenar

explicacion: |
  El procedimiento estándar es: 1. Elegir la referencia (tierra), 2. Identificar nodos, 3. Plantear ecuaciones de Kirchhoff en cada nodo (sumatoria de corrientes = 0) y 4. Resolver el sistema matemático.
```

### 5 — Análisis de Corriente de Salida
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["nodos", "corriente", "divisor"]

variables:
  i_entrada: uno_de([
    [10, 2, 5],
    [5, 1, 2.5],
    [20, 4, 10]
  ])
  r_paralelo: uno_de([
    [5, 2, 5],
    [10, 5, 5],
    [4, 2, 2]
  ])
  r_rama: uno_de([
    [5, 2, 5],
    [5, 5, 5],
    [2, 1, 1]
  ])

enunciado: "En un nodo de entrada con una corriente de {i_entrada[0]} A, la corriente se divide en dos ramas en paralelo. Si la resistencia de la rama de interés es {r_rama[0]} $\Omega$ y la resistencia de la otra rama es {r_paralelo[0]} $\Omega$, la corriente en la rama de interés es de ___ A."

pasos:
  - "Calcular la resistencia equivalente de las dos ramas: $R_{eq} = (R_1 \cdot R_2) / (R_1 + R_2)$"
  - "Calcular la resistencia equivalente: $R_{eq} = ({r_rama[0]} \cdot {r_paralelo[0]}) / ({r_rama[0]} + {r_paralelo[0]})$"
  - "Calcular la corriente total usando la resistencia equivalente: $I_{total} = V / R_{eq}$ (o usar divisor de corriente)"
  - "La corriente en la rama de interés es $I_{rama} = I_{entrada} \cdot (R_{paralelo} / (R_{rama} + R_{paralelo}))$"

respuestas_validas: ["4A", "2A", "5A", "2.5A"]
respuesta: i_entrada[0] * (r_paralelo[0] / (r_rama[0] + r_paralelo[0]))
tipo: completar

explicacion: |
  Usando la fórmula del divisor de corriente: $I_{rama} = I_{entrada} \cdot \frac{R_{paralelo}}{R_{rama} + R_{paralelo}}$.
  Sustituyendo: $I_{rama} = {i_entrada[0]} \cdot \frac{{r_paralelo[0]}}{{{r_rama[0]} + {r_paralelo[0]}}} = \text{resultado}$.
```