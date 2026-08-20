### 1 — Diferencia fundamental: Ley de Corrientes vs. Tensiones
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["nodos", "mallas", "fundamentos"]

respuesta: "nodos"
tipo: completar
respuestas_validas: ["nodos", "mallas"]

enunciado: "Mientras que la Ley de Tensiones de Kirchhoff (LVK) se aplica a lazos cerrados para analizar caídas de potencial, la Ley de Corrientes de Kirchhoff (LKK) se aplica a los ___ para analizar la conservación de la carga."

explicacion: |
  La LKK establece que la suma de corrientes que entran a un nodo es igual a la suma de las que salen, basándose en la conservación de la carga eléctrica.
```

### 2 — Naturaleza de las leyes de Kirchhoff
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["conceptos", "fisica"]

variables:
  es_conservacion: uno_de([verdadero, falso])

respuesta: es_conservacion
tipo: vf

enunciado: "La Ley de Corrientes de Kirchhoff es, en esencia, una aplicación directa del principio de conservación de la carga eléctrica en un punto de unión."

explicacion: |
  Es verdadero. Debido a que la carga no se acumula ni se destruye en un nodo ideal, la corriente que entra debe ser igual a la que sale.
```

### 3 — Aplicación en mallas vs. nodos
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["metodologia", "análisis"]

variables:
  escenario: uno_de([0, 1])

respuesta: escenario_res[escenario][1]
tipo: mc
opciones_explicitas: ["Análisis de Nodos", "Análisis de Mallas", "Análisis de Componentes"]

enunciado: "Si el objetivo principal es determinar las tensiones en cada rama de un circuito complejo utilizando las corrientes como incógnitas, ¿qué método de análisis se está aplicando?"

pasos:
  - "Identificar las mallas o lazos cerrados en el circuito."
  - "Asignar una variable de corriente a cada malla."
  - "Aplicar la LVK en cada malla para plantear las ecuaciones."

explicacion: |
  El análisis de mallas se basa en la Ley de Tensiones de Kirchhoff y utiliza las corrientes de malla como variables principales para resolver el sistema.
```

### 4 — Relación entre variables y leyes
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["relacion", "variables"]

variables:
  par: uno_de([[0, 1], [1, 0]])

respuesta: par[par[0]][1]
tipo: completar
respuestas_validas: ["corriente", "tensión"]

enunciado: "En el análisis de mallas, la variable principal que se busca determinar mediante la aplicación de la LVK es la ___, mientras que en el análisis de nodos la variable principal es la ___."

explicacion: |
  En mallas trabajamos con corrientes de lazo (LVK) y en nodos con potenciales o tensiones (LKK).
```

### 5 — Jerarquía de aplicación
```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "avanzado"
  tags: ["procedimiento", "análisis"]

respuesta: ["Identificar nodos y mallas", "Asignar corrientes/tensiones", "Plantear ecuaciones de Kirchhoff", "Resolver el sistema de ecuaciones"]
tipo: ordenar
opciones_explicitas: ["Identificar nodos y mallas", "Asignar corrientes/tensiones", "Plantear ecuaciones de Kirchhoff", "Resolver el sistema de ecuaciones"]

enunciado: "Ordene los pasos lógicos para realizar un análisis de circuitos combinando ambas leyes de Kirchhoff:"

explicacion: |
  Para resolver un circuito complejo, primero se debe entender la topología (nodos/mallas), luego asignar las variables, plantear las ecuaciones basadas en las leyes de Kirchhoff y finalmente resolver el sistema resultante.
```