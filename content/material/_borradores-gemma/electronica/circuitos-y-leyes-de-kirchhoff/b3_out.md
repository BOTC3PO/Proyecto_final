### 1 — Suma de corrientes en un nodo
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["nodos", "corriente", "ley_de_kirchhoff"]

respuesta: "0"
tipo: "input"
tolerancia_abs: 0.001

enunciado: "En un nodo de un circuito, entran dos corrientes de 5A y 3A, y salen una corriente de 4A y otra de $I_{salida}$. Según la Ley de Corrientes de Kirchhoff (LCC), ¿cuál es el valor de $I_{salida}$ en Amperios?"

pasos:
  - "Calcular la suma de las corrientes que entran al nodo: 5 + 3 = 8A."
  - "Aplicar la LCC: Suma de corrientes entrantes = Suma de corrientes salientes."
  - "8 = 4 + $I_{salida}$."
  - "Despejar $I_{salida}$."

explicacion: |
  La Ley de Corrientes de Kirchhoff establece que la suma algebraica de todas las corrientes en un nodo es igual a cero. En términos prácticos, la suma de las corrientes que entran es igual a la suma de las que salen.
```

### 2 — Signo de la tensión en una malla
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mallas", "tension", "ley_de_tensiones"]

variables:
  escenario: uno_de([[true, "positivo"], [false, "negativo"]])

respuesta: escenario[0][1]
tipo: "mc"
opciones_explicitas: ["positivo", "negativo"]

enunciado: "Al aplicar la Ley de Tensiones de Kirchhoff (LTK) en una malla, si recorremos una resistencia en el mismo sentido que la corriente, la caída de tensión se considera con signo ___ respecto al potencial del nodo anterior."

explicacion: |
  Al recorrer una resistencia en la dirección de la corriente, el potencial disminuye (caída de tensión), por lo tanto, se suele representar con signo negativo en la ecuación de la malla para reflejar la pérdida de energía.
```

### 3 — Confusión entre Nodos y Mallas
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["conceptos", "nodos", "mallas"]

respuesta: falso
tipo: "vf"

enunciado: "La Ley de Tensiones de Kirchhoff (LTK) se aplica a un nodo para asegurar que la suma de las corrientes que entran y salen sea igual a cero."

explicacion: |
  Falso. La Ley de Corrientes de Kirchhoff (LCC) es la que se aplica a los nodos. La Ley de Tensiones (LTK) se aplica a las mallas (lazos cerrados).
```

### 4 — Pasos para el análisis de mallas
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["metodologia", "analisis_mallas"]

opciones_explicitas: ["Identificar mallas", "Asignar corrientes de malla", "Escribir ecuaciones de LTK", "Resolver sistema de ecuaciones"]
respuesta: ["Identificar mallas", "Asignar corrientes de malla", "Escribir ecuaciones de LTK", "Resolver sistema de ecuaciones"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para realizar el análisis de mallas en un circuito complejo:"

explicacion: |
  El análisis de mallas requiere primero definir las corrientes de malla para cada lazo, luego aplicar la LTK en cada una para obtener un sistema de ecuaciones lineales, y finalmente resolver dicho sistema.
```

### 5 — Suma de tensiones en un lazo
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mallas", "tension", "ley_de_tensiones"]

variables:
  datos: uno_de([[12, 2, 10], [24, 5, 19], [9, 3, 6]])

respuesta: datos[idx][2]
tipo: "completar"
opciones_explicitas: ["12", "2", "10", "24", "5", "19", "9", "3", "6"]

enunciado: "En una malla cerrada, existen tres fuentes/caídas de tensión: una de {datos[idx][0]}V, una de {datos[idx][1]}V y una tercera de $V_{desconocida}$V. Si la suma algebraica de las tensiones en el lazo cerrado es cero, el valor de $V_{desconocida}$ debe ser ___ V (asumiendo que las dos primeras son caídas de tensión)."

pasos:
  - "La suma de caídas debe ser igual a la suma de elevaciones (o la suma algebraica es 0)."
  - "12 + 2 + $V_{desconocida}$ = 0 (siendo las tensiones de fuente positivas, el planteamiento varía, pero el ejercicio pide el valor para que la suma sea cero según los datos)."
  - "Para este ejercicio, se busca el valor que completa la suma de los componentes dados para llegar al equilibrio."

explicacion: |
  En un lazo cerrado, la suma de todas las caídas de tensión es igual a la suma de todas las elevaciones de tensión.
```