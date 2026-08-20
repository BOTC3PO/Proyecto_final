# Electronica — Circuitos y leyes de kirchhoff (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Nodo

```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["nodos", "definiciones", "conceptos"]

respuesta: "nodo"
tipo: completar
respuestas_validas:
  - "nodo"

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
  datos: [["rama", "rama"], ["lazo", "lazo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["rama", "nodo", "lazo", "fuente"]

enunciado: "En el análisis de circuitos, un elemento que conecta dos nodos se denomina ___."
pasos:
  - "Identificar los puntos de conexión"
  - "Determinar la trayectoria entre ellos"

explicacion: |
  La respuesta correcta es {datos[idx][0]}. Un elemento o segmento de circuito entre dos nodos se llama rama.
```

### 5 — Secuencia de análisis de mallas

```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["metodologia", "pasos", "analisis"]

respuesta_orden: ["identificar_mallas", "asignar_corrientes", "aplicar_kvl", "resolver_sistema"]
tipo: ordenar
opciones_explicitas: ["aplicar_kvl", "identificar_mallas", "resolver_sistema", "asignar_corrientes"]

enunciado: "Ordene los pasos lógicos para resolver un circuito mediante el método de mallas:"

explicacion: |
  El orden correcto es: 1. Identificar las mallas, 2. Asignar corrientes de malla, 3. Aplicar la ley de tensiones (KVL) en cada una y 4. Resolver el sistema de ecuaciones resultante.
```

### 6 — Ley de Corrientes en un Nodo

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["nodos", "corriente", "kirchhoff"]

variables:
  idx: uno_de([0, 1, 2])
  entrada: ["10A", "5A", "20A"]
  salida1: ["2A", "1A", "5A"]
  salida2: ["8A", "4A", "15A"]

enunciado: "En un nodo de un circuito, entran {entrada[idx]} de corriente a través de una rama. Si por otra rama salen {salida1[idx]} y por una tercera rama salen {salida2[idx]}, la corriente que entra por la primera rama debe ser igual a la suma de las que salen. Según la Ley de Corrientes de Kirchhoff, la corriente total que sale del nodo es de ___ A."

respuestas_validas:
  - "10A"
  - "5A"
  - "20A"
respuesta: entrada[idx]
tipo: completar

explicacion: |
  La Ley de Corrientes de Kirchhoff (LCC) establece que la suma de las corrientes que entran a un nodo es igual a la suma de las corrientes que salen de él.
```

### 7 — Ley de Tensiones en una Malla

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mallas", "tension", "kirchhoff"]

variables:
  datos: [[12, 4, 24], [5, 2, 3], [10, 5, 5]]
  idx: uno_de([0, 1, 2])
  fuente: datos[idx][0]
  resistencia_total: datos[idx][1]

enunciado: "En una malla simple con una fuente de tensión de {fuente} V y dos resistencias en serie que suman {resistencia_total} $\\Omega$, la suma de las caídas de tensión en las resistencias debe ser igual a la tensión de la fuente según la Ley de Tensiones de Kirchhoff (LVK). ¿La suma de las caídas de tensión en las resistencias es igual a la tensión de la fuente?"

opciones_explicitas: ["verdadero", "falso"]
respuestas_validas:
  - "verdadero"
respuesta: "verdadero"
tipo: completar
explicacion: |
  La LVK establece que la suma algebraica de las tensiones alrededor de cualquier lazo cerrado es igual a cero. En términos de magnitudes, la suma de las caídas de tensión en las resistencias es igual a la tensión suministrada por la fuente.
```

### 8 — Cálculo de Corriente de Malla

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mallas", "ohm", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  voltajes: [12, 24, 6]
  resistencias: [4, 6, 2]
  corrientes_texto: ["3A", "4A", "3A"]

enunciado: "Para resolver una malla con una fuente de {voltajes[idx]} V y una resistencia total de {resistencias[idx]} ohm, debemos aplicar la Ley de Ohm (I = V / R). ¿Cuál es el valor de la corriente que circula por la malla?"

opciones_explicitas: ["3A", "6A", "1A", "4A"]
respuesta: corrientes_texto[idx]
tipo: mc

explicacion: |
  Aplicando la Ley de Ohm: I = V / R. La corriente se obtiene dividiendo la tensión de la fuente por la resistencia total de la malla.
```

### 9 — Pasos para el Análisis de Nodos

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "avanzado"
  tags: ["metodologia", "nodos"]

enunciado: "Para resolver un circuito mediante el método de tensiones de nodo, se deben seguir estos pasos en orden correcto:"

opciones_explicitas: ["Escribir las ecuaciones de LCC para cada nodo", "Asignar un nodo de referencia (tierra)", "Identificar todos los nodos del circuito", "Resolver el sistema de ecuaciones resultante"]
respuesta_orden: ["Asignar un nodo de referencia (tierra)", "Identificar todos los nodos del circuito", "Escribir las ecuaciones de LCC para cada nodo", "Resolver el sistema de ecuaciones resultante"]
tipo: ordenar

explicacion: |
  El procedimiento estándar es: 1. Elegir la referencia (tierra), 2. Identificar nodos, 3. Plantear ecuaciones de Kirchhoff en cada nodo (sumatoria de corrientes = 0) y 4. Resolver el sistema matemático.
```

### 10 — Análisis de Corriente de Salida

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["nodos", "corriente", "divisor"]

variables:
  idx: uno_de([0, 1, 2])
  i_entrada: [10, 5, 20]
  r_rama: [5, 5, 2]
  r_paralelo: [5, 5, 2]

enunciado: "En un nodo de entrada con una corriente de {i_entrada[idx]} A, la corriente se divide en dos ramas en paralelo. Si la resistencia de la rama de interés es {r_rama[idx]} ohm y la resistencia de la otra rama es {r_paralelo[idx]} ohm, la corriente en la rama de interés es de ___ A."

pasos:
  - "Calcular la resistencia equivalente de las dos ramas."
  - "Aplicar la fórmula del divisor de corriente: I_rama = I_entrada * (R_paralelo / (R_rama + R_paralelo))."

respuesta: i_entrada[idx] * (r_paralelo[idx] / (r_rama[idx] + r_paralelo[idx]))
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Usando la fórmula del divisor de corriente: I_rama = I_entrada * R_paralelo / (R_rama + R_paralelo).
```

### 11 — Suma de corrientes en un nodo

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["nodos", "corriente", "ley_de_kirchhoff"]

respuesta: 4
tipo: "input"
tolerancia_abs: 0.001

enunciado: "En un nodo de un circuito, entran dos corrientes de 5A y 3A, y salen una corriente de 4A y otra de I_salida. Según la Ley de Corrientes de Kirchhoff (LCC), ¿cuál es el valor de I_salida en Amperios?"

pasos:
  - "Calcular la suma de las corrientes que entran al nodo: 5 + 3 = 8A."
  - "Aplicar la LCC: Suma de corrientes entrantes = Suma de corrientes salientes."
  - "8 = 4 + I_salida."
  - "Despejar I_salida."

explicacion: |
  La Ley de Corrientes de Kirchhoff establece que la suma algebraica de todas las corrientes en un nodo es igual a cero. En términos prácticos, la suma de las corrientes que entran es igual a la suma de las que salen.
```

### 12 — Signo de la tensión en una malla

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mallas", "tension", "ley_de_tensiones"]

variables:
  escenario: uno_de([["positivo", "negativo"], ["negativo", "positivo"]])
  signo: escenario[0]

respuesta: signo
tipo: "mc"
opciones_explicitas: ["positivo", "negativo"]

enunciado: "Al aplicar la Ley de Tensiones de Kirchhoff (LTK) en una malla, si recorremos una resistencia en el mismo sentido que la corriente, la caída de tensión se considera con signo {signo} respecto al potencial del nodo anterior."

explicacion: |
  Al recorrer una resistencia en la dirección de la corriente, el potencial disminuye (caída de tensión), por lo tanto, se suele representar con signo negativo en la ecuación de la malla para reflejar la pérdida de energía.
```

### 13 — Confusión entre Nodos y Mallas

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

### 14 — Pasos para el análisis de mallas

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["metodologia", "analisis_mallas"]

opciones_explicitas: ["Identificar mallas", "Asignar corrientes de malla", "Escribir ecuaciones de LTK", "Resolver sistema de ecuaciones"]
respuesta_orden: ["Identificar mallas", "Asignar corrientes de malla", "Escribir ecuaciones de LTK", "Resolver sistema de ecuaciones"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para realizar el análisis de mallas en un circuito complejo:"

explicacion: |
  El análisis de mallas requiere primero definir las corrientes de malla para cada lazo, luego aplicar la LTK en cada una para obtener un sistema de ecuaciones lineales, y finalmente resolver dicho sistema.
```

### 15 — Suma de tensiones en un lazo

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mallas", "tension", "ley_de_tensiones"]

variables:
  idx: uno_de([0, 1, 2])
  v1: [12, 24, 9]
  v2: [2, 5, 3]
  v_desconocida: [10, 19, 6]

respuesta: v_desconocida[idx]
tipo: "completar"
tolerancia_abs: 0

enunciado: "En una malla cerrada, existen tres fuentes/caídas de tensión: una de {v1[idx]}V, una de {v2[idx]}V y una tercera desconocida. Si la suma algebraica de las tensiones en el lazo cerrado es cero, ¿cuál debe ser el valor de la tensión desconocida (en V)?"

pasos:
  - "La suma algebraica de todas las tensiones en el lazo cerrado debe ser cero."
  - "Despejar la tensión desconocida a partir de las dos tensiones conocidas."

explicacion: |
  En un lazo cerrado, la suma de todas las caídas de tensión es igual a la suma de todas las elevaciones de tensión.
```

### 16 — Diferencia fundamental: Ley de Corrientes vs. Tensiones

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["nodos", "mallas", "fundamentos"]

respuesta: "nodos"
tipo: completar
respuestas_validas:
  - "nodos"
  - "mallas"

enunciado: "Mientras que la Ley de Tensiones de Kirchhoff (LVK) se aplica a lazos cerrados para analizar caídas de potencial, la Ley de Corrientes de Kirchhoff (LKK) se aplica a los ___ para analizar la conservación de la carga."

explicacion: |
  La LKK establece que la suma de corrientes que entran a un nodo es igual a la suma de las que salen, basándose en la conservación de la carga eléctrica.
```

### 17 — Naturaleza de las leyes de Kirchhoff

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["conceptos", "fisica"]

variables:
  es_conservacion: uno_de([verdadero, falso])

respuesta: es_conservacion
tipo: completar
enunciado: "La Ley de Corrientes de Kirchhoff es, en esencia, una aplicación directa del principio de conservación de la carga eléctrica en un punto de unión."

explicacion: |
  Es verdadero. Debido a que la carga no se acumula ni se destruye en un nodo ideal, la corriente que entra debe ser igual a la que sale.
```

### 18 — Aplicación en mallas vs. nodos

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["metodologia", "análisis"]

variables:
  escenario: uno_de([0, 1])
  respuesta_correcta: uno_de(["Análisis de Mallas", "Análisis de Nodos"])

respuesta: respuesta_correcta
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

### 19 — Relación entre variables y leyes

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["relacion", "variables"]

variables:
  par: uno_de([[0, 1], [1, 0]])

respuesta: par[1]
tipo: completar
respuestas_validas:
  - "corriente"
  - "tensión"

enunciado: "En el análisis de mallas, la variable principal que se busca determinar mediante la aplicación de la LVK es la ___, mientras que en el análisis de nodos la variable principal es la ___."

explicacion: |
  En mallas trabajamos con corrientes de lazo (LVK) y en nodos con potenciales o tensiones (LKK).
```

### 20 — Jerarquía de aplicación

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "avanzado"
  tags: ["procedimiento", "análisis"]

respuesta_orden: ["Identificar nodos y mallas", "Asignar corrientes/tensiones", "Plantear ecuaciones de Kirchhoff", "Resolver el sistema de ecuaciones"]
tipo: ordenar
opciones_explicitas: ["Identificar nodos y mallas", "Asignar corrientes/tensiones", "Plantear ecuaciones de Kirchhoff", "Resolver el sistema de ecuaciones"]

enunciado: "Ordene los pasos lógicos para realizar un análisis de circuitos combinando ambas leyes de Kirchhoff:"

explicacion: |
  Para resolver un circuito complejo, primero se debe entender la topología (nodos/mallas), luego asignar las variables, plantear las ecuaciones basadas en las leyes de Kirchhoff y finalmente resolver el sistema resultante.
```

### 21 — Ley de Corrientes en un Nodo

```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["nodos", "kirchhoff", "corriente"]

variables:
  datos: [[10.0, 5.0, 5.0], [12.0, 7.0, 5.0], [8.0, 4.0, 4.0]]
  idx: uno_de([0, 1, 2])
  i_entrada: datos[idx][0]
  i_salida_1: datos[idx][1]
  i_salida_2: datos[idx][2]

respuestas_validas:
  - i_entrada - i_salida_1 - i_salida_2
respuesta: i_entrada - i_salida_1 - i_salida_2
tipo: completar
tolerancia_abs: 0.01

enunciado: "En un nodo de un circuito, una corriente de entrada de {i_entrada} A se divide en dos ramas. Si la rama 1 tiene una corriente de {i_salida_1} A, ¿cuál es el valor de la corriente en la rama 2 en Amperios?"

pasos:
  - "Identificar la corriente total que entra al nodo: {i_entrada} A."
  - "Aplicar la Ley de Corrientes de Kirchhoff: Suma de corrientes que entran = Suma de corrientes que salen."
  - "Calcular: i_salida_2 = i_entrada - i_salida_1."

explicacion: |
  Según la Ley de Corrientes de Kirchhoff (LCC), la suma algebraica de las corrientes en un nodo es cero. Por lo tanto, la corriente que entra debe ser igual a la suma de las que salen: {i_entrada} = {i_salida_1} + {i_salida_2}.
```

### 22 — Ley de Tensiones en una Malla

```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mallas", "kirchhoff", "tension"]

variables:
  datos: [[12.0, 4.0, 8.0], [24.0, 10.0, 14.0], [5.0, 2.0, 3.0]]
  idx: uno_de([0, 1, 2])
  v_fuente: datos[idx][0]
  v_r1: datos[idx][1]
  v_r2: datos[idx][2]

respuestas_validas:
  - v_fuente - v_r1 - v_r2
respuesta: v_fuente - v_r1 - v_r2
tipo: completar
tolerancia_abs: 0.01

enunciado: "En una malla simple con una fuente de tensión de {v_fuente} V y dos resistencias en serie que presentan caídas de tensión de {v_r1} V y {v_r2} V respectivamente, ¿cuál es la tensión residual en el componente restante para que se cumpla la Ley de Tensiones de Kirchhoff?"

pasos:
  - "La suma de tensiones en una malla cerrada debe ser cero."
  - "V_fuente - V_r1 - V_r2 - V_restante = 0."

explicacion: |
  La Ley de Tensiones de Kirchhoff (LTK) establece que la suma de todas las caídas y subidas de potencial en un lazo cerrado es igual a cero. En este caso: {v_fuente} - {v_r1} - {v_r2} = 0.
```

### 23 — Análisis de Nodos (Verdadero o Falso)

```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["teoria", "nodos"]

respuesta: verdadero
tipo: vf

enunciado: "Si en un nodo entran 5A por una rama y salen 3A por otra, la Ley de Corrientes de Kirchhoff dicta que debe salir 2A por una tercera rama para mantener el equilibrio."

explicacion: |
  Verdadero. La suma de corrientes entrantes (5A) debe ser igual a la suma de las salientes (3A + 2A = 5A).
```

### 24 — Identificación de Corrientes

```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mc", "nodos"]

variables:
  idx: uno_de([0, 1, 2])
  i_total: [12.0, 17.0, 22.0]
  i_conocida: [7.0, 10.0, 10.0]
  diferencias_texto: ["5.0 A", "7.0 A", "12.0 A"]

respuesta: diferencias_texto[idx]
tipo: mc

opciones_explicitas: ["5.0 A", "7.0 A", "10.0 A", "12.0 A"]

enunciado: "Un nodo recibe una corriente total de {i_total[idx]} A. Si una de las ramas de salida tiene una corriente de {i_conocida[idx]} A, ¿cuál es el valor de la corriente en la otra rama de salida?"

explicacion: |
  Aplicando la LCC: I_total = I_salida_1 + I_salida_2. Por lo tanto, la corriente de la otra rama es la diferencia entre la corriente total y la conocida.
```

### 25 — Procedimiento de Análisis de Malla

```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "avanzado"
  tags: ["ordenar", "metodo"]

opciones_explicitas: ["1. Identificar las mallas del circuito", "2. Asignar corrientes de malla a cada lazo", "3. Aplicar la LTK en cada malla", "4. Resolver el sistema de ecuaciones resultante"]

respuesta_orden: ["1. Identificar las mallas del circuito", "2. Asignar corrientes de malla a cada lazo", "3. Aplicar la LTK en cada malla", "4. Resolver el sistema de ecuaciones resultante"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un circuito complejo utilizando el método de mallas (Ley de Tensiones de Kirchhoff):"

explicacion: |
  El método de mallas requiere primero definir las mallas, luego asignar variables (corrientes), aplicar la ley de tensiones para obtener ecuaciones y finalmente resolver el sistema matemático.
```
