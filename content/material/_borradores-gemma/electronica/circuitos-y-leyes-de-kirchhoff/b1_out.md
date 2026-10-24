### 1 — Concepto de Nodo
```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["nodos", "definiciones", "conceptos"]

respuesta: "nodo"
tipo: completar
respuestas_validas: ["nodo"]

enunciado: "En un circuito eléctrico, un punto de conexión donde se encuentran dos o más conductores se denomina ___."

explicacion: |
  Un nodo es el punto de unión de dos o más elementos en un circuito. Si se encuentran tres o más, se denomina nodo principal.
```

### 2 — Ley de Corrientes de Kirchhoff (KCL)
```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["kcl", "corrientes", "nodos"]

respuesta: falso
tipo: vf

enunciado: "La Ley de Corrientes de Kirchhoff (KCL) establece que la suma de las corrientes que entran a un nodo es igual a la suma de las corrientes que salen de dicho nodo."

explicacion: |
  Verdadero. La KCL se basa en el principio de conservación de la carga eléctrica: la carga no se acumula en un nodo ideal.
```

### 3 — Ley de Tensiones de Kirchhoff (KVL)
```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["kvl", "tensiones", "mallas"]

respuesta: "malla"
tipo: mc
opciones_explicitas: ["malla", "nodo", "rama", "lazo"]

enunciado: "La Ley de Tensiones de Kirchhoff (KVL) se aplica a una ___ cerrada, indicando que la suma algebraica de todas las tensiones en un lazo es igual a cero."

explicacion: |
  Una malla es un lazo que no contiene otros lazos en su interior. La KVL se basa en la conservación de la energía.
```

### 4 — Componentes de un análisis de circuito
```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["terminologia", "rama", "lazo"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["rama", "nodo", "lazo", "fuente"]

enunciado: "En el análisis de circuitos, un elemento que conecta dos nodos se denomina ___."
pasos:
  - "Identificar los puntos de conexión"
  - "Determinar la trayectoria entre ellos"

explicacion: |
  La respuesta correcta es {datos[idx][0]}. Un elemento o segmento de circuito entre dos nodos se llama rama.
  
variables:
  datos: [["rama", "rama"], ["lazo", "lazo"]]
  idx: uno_de([0, 1])
```
*(Nota: Corregido para cumplir la regla de la variable única de sorteo en el bloque de variables)*

### 5 — Secuencia de análisis de mallas
```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["metodologia", "pasos", "analisis"]

respuesta: ["identificar_mallas", "asignar_corrientes", "aplicar_kvl", "resolver_sistema"]
tipo: ordenar
opciones_explicitas: ["aplicar_kvl", "identificar_mallas", "resolver_sistema", "asignar_corrientes"]

enunciado: "Ordene los pasos lógicos para resolver un circuito mediante el método de mallas:"

explicacion: |
  El orden correcto es: 1. Identificar las mallas, 2. Asignar corrientes de malla, 3. Aplicar la ley de tensiones (KVL) en cada una y 4. Resolver el sistema de ecuaciones resultante.
```