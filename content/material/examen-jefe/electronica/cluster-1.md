# Examen jefe — [PENDIENTE #942]

> Logro #942. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: componentes-resistencia-capacitor-diodo-transistor (25 preguntas)

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["resistencia", "componente"]

tipo: mc
opciones_explicitas: ["Aumentar la corriente", "Oponerse al paso de la corriente", "Almacenar carga eléctrica", "Amplificar señales"]

enunciado: "La función principal de una resistencia en un circuito es ___ la corriente eléctrica."

respuesta: "Oponerse al paso de la corriente"

explicacion: |
  Una resistencia limita el flujo de electrones, convirtiendo energía eléctrica en calor.
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["capacitor", "condensador"]

tipo: vf

enunciado: "Un capacitor (o condensador) tiene la capacidad de almacenar energía en forma de campo eléctrico."

respuesta: verdadero

explicacion: |
  Los capacitores almacenan energía mediante la separación de cargas en sus placas.
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["diodo", "semiconductor"]

tipo: mc
opciones_explicitas: ["Permite el flujo en ambos sentidos", "Permite el flujo en un solo sentido", "Actúa como un interruptor automático", "Almacena energía"]

enunciado: "Un diodo es un componente que ___."

respuesta: "Permite el flujo en un solo sentido"

explicacion: |
  El diodo actúa como una válvula que permite que la corriente fluya en una dirección (polarización directa) pero bloquea el flujo en la dirección opuesta (polarización inversa).
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["transistor", "amplificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["amplificar una señal", "controlar el flujo de corriente"], ["actuar como interruptor", "conmutar estados"]]

tipo: completar
respuestas_validas:
  - "amplificar una señal"
  - "actuar como interruptor"

enunciado: "Dependiendo de cómo se polarice, un transistor puede utilizarse para ___."

respuesta: datos[escenario_idx][0]

explicacion: |
  El transistor es el componente fundamental de la electrónica moderna; puede funcionar en la región activa (amplificación) o en la región de saturación/corte (como interruptor).
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["ordenar", "conceptos"]

tipo: ordenar
opciones_explicitas: ["Resistencia", "Capacitor", "Diodo", "Transistor"]

enunciado: "Ordena los siguientes componentes según su función principal de 'limitación', 'almacenamiento', 'rectificación' y 'conmutación' respectivamente:"

respuesta_orden: ["Resistencia", "Capacitor", "Diodo", "Transistor"]

explicacion: |
  La secuencia correcta es: Resistencia (limita), Capacitor (almacena), Diodo (rectifica/direcciona) y Transistor (conmutación/amplificación).
```

```
metadata:
  materia: "electronica"
  tema: "capacitor"
  nivel: "basico"
  tags: ["componentes", "almacenamiento"]

enunciado: "Un capacitor (condensador) actúa como un dispositivo que almacena energía en forma de ___."

respuestas_validas:
  - "campo eléctrico"
  - "campo magnético"

respuesta: "campo eléctrico"
tipo: completar

explicacion: |
  El capacitor almacena energía mediante la acumulación de cargas opuestas en sus placas, generando un campo eléctrico entre ellas.
```

```
metadata:
  materia: "electronica"
  tema: "resistencia"
  nivel: "basico"
  tags: ["componentes", "simbolos"]

enunciado: "Si observamos un componente cuyo símbolo es una línea en zigzag (o un rectángulo) y su función es limitar el paso de la corriente, estamos ante una: ___"

opciones_explicitas: ["resistencia", "capacitor", "diodo", "transistor"]

respuesta: "resistencia"
tipo: mc

explicacion: |
  La resistencia está diseñada para oponerse al flujo de corriente eléctrica, disipando energía en forma de calor.
```

```
metadata:
  materia: "electronica"
  tema: "diodo"
  nivel: "basico"
  tags: ["semiconductores", "polarizacion"]

enunciado: "En un circuito con un diodo conectado en polarización directa, la corriente puede fluir a través de él. ¿Es esto verdadero o falso?"

respuesta: verdadero
tipo: vf

explicacion: |
  El diodo permite el paso de la corriente cuando el ánodo está a un potencial mayor que el cátodo (polarización directa).
```

```
metadata:
  materia: "electronica"
  tema: "transistor"
  nivel: "intermedio"
  tags: ["transistor", "funcionamiento"]

enunciado: "Para que un transistor NPN funcione como un interruptor en estado de corte, se deben seguir estos pasos en orden:"

opciones_explicitas: ["No aplicar corriente en la base", "La corriente en la base permanece en cero", "El transistor no conduce"]

respuesta_orden: ["No aplicar corriente en la base", "La corriente en la base permanece en cero", "El transistor no conduce"]
tipo: ordenar

explicacion: |
  En el estado de corte, no hay corriente de base, por lo tanto, el canal entre colector y emisor permanece abierto.
```

```
metadata:
  materia: "electronica"
  tema: "resistencia"
  nivel: "basico"
  tags: ["ley_ohm", "calculo"]

variables:
  escenario: [[10.0, 2.0], [5.0, 5.0], [20.0, 4.0]]
  idx: uno_de([0,1,2])

enunciado: "Si tenemos una resistencia de {escenario[idx][0]} Ω conectada a una fuente de voltaje de {escenario[idx][1]} V, la corriente que circula es de ___ A."

respuesta: escenario[idx][1] / escenario[idx][0]
tipo: completar
tolerancia_abs: 0.01

pasos:
  - "Aplicar la Ley de Ohm: I = V / R"
  - "Calcular: {escenario[idx][1]} / {escenario[idx][0]}"

explicacion: |
  Usando la Ley de Ohm (I = V / R), el cálculo es {escenario[idx][1]} / {escenario[idx][0]} = {escenario[idx][1] / escenario[idx][0]} A.
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["capacitor", "condensador", "carga"]

respuesta: "almacenar_energia"
tipo: completar
respuestas_validas:
  - "almacenar_energia"
  - "almacenar_carga"
  - "almacenar_energia_electrica"

enunciado: "A diferencia de una resistencia que disipa energía en forma de calor, un capacitor tiene la función principal de ___."

explicacion: |
  El capacitor (o condensador) almacena energía en un campo eléctrico mediante la acumulación de cargas en sus placas, permitiendo liberar esa energía cuando el circuito lo requiere.
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["resistencia", "ley_ohm"]

opciones_explicitas: ["Aumentar la corriente", "Disminuir la corriente", "Aumentar el voltaje"]
respuesta: "Disminuir la corriente"
tipo: mc

enunciado: "Si se coloca una resistencia en serie con una fuente de voltaje constante, ¿qué efecto tiene sobre la corriente que circula por el circuito?"

explicacion: |
  Según la Ley de Ohm (I = V/R), la corriente es inversamente proporcional a la resistencia. Al aumentar la resistencia, la corriente disminuye.
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["diodo", "polarizacion"]

respuesta: verdadero
tipo: vf
enunciado: "Si un diodo se encuentra en condiciones de polarización directa, la corriente puede fluir a través de él."

explicacion: |
  Un diodo actúa como una válvula de una sola vía. En polarización directa (ánodo positivo, cátodo negativo), permite el paso de corriente; en inversa, actúa como un aislante.
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["transistor", "base", "emisor", "colector"]

opciones_explicitas: ["Base", "Emisor", "Colector"]
respuesta: "Base"
tipo: mc

enunciado: "En un transistor BJT, el terminal que se utiliza para controlar el flujo de corriente entre el emisor y el colector mediante una pequeña corriente externa es la ___."

explicacion: |
  El transistor funciona como un amplificador o interruptor controlado por la corriente que entra en la terminal de la Base.
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["circuito_serie", "ordenar"]

opciones_explicitas: ["Resistencia", "Capacitor", "Diodo"]
respuesta_orden: ["Resistencia", "Capacitor", "Diodo"]
tipo: ordenar

enunciado: "Ordena los siguientes componentes según el orden en que se encuentran en un circuito serie hipotético (de entrada a salida):"

pasos:
  - "Componente 1 (Resistencia)"
  - "Componente 2 (Capacitor)"
  - "Componente 3 (Diodo)"

explicacion: |
  En un circuito en serie, los componentes se colocan uno tras otro en la misma trayectoria de la corriente.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_vs_resistencia"
  nivel: "basico"
  tags: ["componentes", "capacitor", "resistencia"]

tipo: mc
opciones_explicitas: ["Almacena energía en un campo eléctrico", "Disipa energía en forma de calor", "Regula el flujo de corriente de forma constante", "Amplifica la tensión de una señal"]

enunciado: "A diferencia de una resistencia, que disipa la energía eléctrica mediante el efecto Joule, un capacitor se distingue por su capacidad de..."

respuesta: "Almacena energía en un campo eléctrico"

explicacion: |
  La resistencia consume energía transformándola en calor, mientras que el capacitor la almacena temporalmente en un campo eléctrico entre sus placas.
```

```
metadata:
  materia: "electronica"
  tema: "diodo_unidireccional"
  nivel: "basico"
  tags: ["diodo", "semiconductor"]

tipo: vf

enunciado: "Un diodo se diferencia de un cable conductor en que el diodo permite el paso de la corriente en un solo sentido (polarización directa) y lo bloquea en el sentido contrario (polarización inversa)."

respuesta: verdadero

explicacion: |
  El diodo actúa como una válvula unidireccional para la corriente eléctrica, a diferencia de un conductor ideal que permite el flujo en ambos sentidos.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_vs_resistencia"
  nivel: "intermedio"
  tags: ["transistor", "control", "resistencia"]

tipo: completar
respuestas_validas:
  - "controlar"
  - "controla"

enunciado: "Mientras que una resistencia se utiliza para limitar la corriente de manera pasiva, un transistor permite ___ la corriente mediante una señal externa en su terminal de base."

respuesta: "controlar"

explicacion: |
  La resistencia es un componente pasivo que ofrece oposición al flujo; el transistor es un dispositivo activo que puede actuar como interruptor o amplificador según la corriente de control.
```

```
metadata:
  materia: "electronica"
  tema: "capacitor_vs_bateria"
  nivel: "intermedio"
  tags: ["capacitor", "bateria", "energia"]

tipo: mc
opciones_explicitas: ["El capacitor libera la energía muy rápidamente; la batería la libera lentamente", "La batería es un componente pasivo; el capacitor es activo", "El capacitor almacena energía química; la batería energía eléctrica", "No hay diferencia en su funcionamiento"]

enunciado: "En términos de la velocidad de descarga, un capacitor se distingue de una batería porque..."

respuesta: "El capacitor libera la energía muy rápidamente; la batería la libera lentamente"

explicacion: |
  Los capacitores almacenan energía en campos eléctricos y pueden descargar su energía casi instantáneamente, mientras que las baterías dependen de reacciones químicas más lentas.
```

```
metadata:
  materia: "electronica"
  tema: "secuencia_componentes"
  nivel: "basico"
  tags: ["orden", "circuito"]

tipo: ordenar
opciones_explicitas: ["Fuente de tensión", "Resistencia", "Diodo", "Carga"]

respuesta_orden: ["Fuente de tensión", "Resistencia", "Diodo", "Carga"]

enunciado: "En un circuito de protección simple donde queremos limitar la corriente antes de que llegue a un diodo que protege una carga, el orden lógico de los componentes desde el polo positivo es:"

explicacion: |
  El orden estándar es: Fuente -> Resistencia (para limitar corriente) -> Diodo (para rectificar/proteger) -> Carga (el elemento que consume).
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["componentes", "identificacion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [["resistencia", "limita la corriente"], ["capacitor", "almacena energía"], ["diodo", "permite flujo en un sentido"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["limita la corriente", "almacena energía", "permite flujo en un sentido", "amplifica señal"]

enunciado: "Si tenemos un componente llamado {datos[escenario_idx][0]}, ¿cuál es su función en el circuito?"

explicacion: |
  El componente seleccionado es un/a {datos[escenario_idx][0]}, cuya función es {datos[escenario_idx][1]}.
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["capacitor", "condensador"]

tipo: vf

enunciado: "¿Un capacitor (condensador) puede actuar como una fuente de energía temporal en un circuito?"

respuesta: verdadero

explicacion: |
  Verdadero. Los capacitores almacenan energía en un campo eléctrico y pueden liberarla rápidamente cuando el circuito lo requiere.
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["diodo", "polarizacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["directa", "conduce"], ["inversa", "bloquea"]]

tipo: completar

enunciado: "Si un diodo se encuentra en polarización {casos[caso_idx][0]}, la corriente ___."

respuestas_validas:
  - casos[caso_idx][1]

respuesta: casos[caso_idx][1]

explicacion: |
  En polarización directa, el diodo permite el paso de corriente. En polarización inversa, actúa como un aislante (bloquea).
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["transistor", "conmutacion"]

tipo: mc
opciones_explicitas: ["Controlar el flujo de corriente mediante una señal pequeña", "Aumentar la resistencia de forma infinita", "Almacenar carga eléctrica", "Rectificar corriente alterna"]

enunciado: "¿Cuál es la función principal de un transistor cuando se utiliza en modo de conmutación?"

respuesta: "Controlar el flujo de corriente mediante una señal pequeña"

explicacion: |
  El transistor puede actuar como un interruptor electrónico, donde una pequeña corriente en la base controla una corriente mayor entre colector y emisor.
```

```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["montaje", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Fuente de alimentación", "Resistencia", "LED", "Tierra/GND"]
respuesta_orden: ["Fuente de alimentación", "Resistencia", "LED", "Tierra/GND"]

enunciado: "Ordena los componentes para crear un circuito de protección simple para un LED (de positivo a negativo):"

explicacion: |
  El orden lógico es: primero la fuente, luego la resistencia para limitar corriente, el LED para emitir luz y finalmente el retorno a tierra.
```

## Sección: circuitos-y-leyes-de-kirchhoff (25 preguntas)

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

```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["kcl", "corrientes", "nodos"]

respuesta: verdadero
tipo: vf

enunciado: "La Ley de Corrientes de Kirchhoff (KCL) establece que la suma de las corrientes que entran a un nodo es igual a la suma de las corrientes que salen de dicho nodo."

explicacion: |
  Verdadero. La KCL se basa en el principio de conservación de la carga eléctrica: la carga no se acumula en un nodo ideal.
```

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

```
metadata:
  materia: "electronica"
  tema: "circuitos_y_leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["terminologia", "rama", "lazo"]

respuesta: "rama"
tipo: mc
opciones_explicitas: ["rama", "nodo", "lazo", "fuente"]

enunciado: "En el análisis de circuitos, un elemento que conecta dos nodos se denomina ___."
pasos:
  - "Identificar los puntos de conexión"
  - "Determinar la trayectoria entre ellos"

explicacion: |
  Un elemento o segmento de circuito entre dos nodos se llama rama.
```

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

respuesta: verdadero
tipo: vf
explicacion: |
  La LVK establece que la suma algebraica de las tensiones alrededor de cualquier lazo cerrado es igual a cero. En términos de magnitudes, la suma de las caídas de tensión en las resistencias es igual a la tensión suministrada por la fuente.
```

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

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["nodos", "corriente", "ley_de_kirchhoff"]

respuesta: 4
tipo: completar
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

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["mallas", "tension", "ley_de_tensiones"]

respuesta: "negativo"
tipo: "mc"
opciones_explicitas: ["positivo", "negativo"]

enunciado: "Al aplicar la Ley de Tensiones de Kirchhoff (LTK) en una malla, si recorremos una resistencia en el mismo sentido que la corriente, la caída de tensión se considera con signo ___ respecto al potencial del nodo anterior."

explicacion: |
  Al recorrer una resistencia en la dirección de la corriente, el potencial disminuye (caída de tensión), por lo tanto, se suele representar con signo negativo en la ecuación de la malla para reflejar la pérdida de energía.
```

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

enunciado: "Mientras que la Ley de Tensiones de Kirchhoff (LVK) se aplica a lazos cerrados para analizar caídas de potencial, la Ley de Corrientes de Kirchhoff (LKK) se aplica a los ___ para analizar la conservación de la carga."

explicacion: |
  La LKK establece que la suma de corrientes que entran a un nodo es igual a la suma de las que salen, basándose en la conservación de la carga eléctrica.
```

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "basico"
  tags: ["conceptos", "fisica"]

respuesta: verdadero
tipo: vf
enunciado: "La Ley de Corrientes de Kirchhoff es, en esencia, una aplicación directa del principio de conservación de la carga eléctrica en un punto de unión."

explicacion: |
  Es verdadero. Debido a que la carga no se acumula ni se destruye en un nodo ideal, la corriente que entra debe ser igual a la que sale.
```

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["metodologia", "análisis"]

respuesta: "Análisis de Mallas"
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

```
metadata:
  materia: "electronica"
  tema: "leyes_de_kirchhoff"
  nivel: "intermedio"
  tags: ["relacion", "variables"]

respuesta: "corriente"
tipo: completar
respuestas_validas:
  - "corriente"

enunciado: "En el análisis de mallas, la variable principal que se busca determinar mediante la aplicación de la LVK es la ___ (mientras que en el análisis de nodos la variable principal es la tensión)."

explicacion: |
  En mallas trabajamos con corrientes de lazo (LVK) y en nodos con potenciales o tensiones (LKK).
```

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

## Sección: logica-digital-puertas-and-or-not (26 preguntas)

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "puerta_not"]

respuesta: falso
tipo: vf

enunciado: "Si la entrada de una puerta lógica NOT es 1 (verdadero), su salida será 1 (verdadero)."

explicacion: |
  La puerta NOT es un inversor. Si la entrada es 1, la salida es 0 (falso). Si la entrada es 0, la salida es 1 (verdadero).
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "puerta_and"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, 1], [1, 1]]
  resultados_texto: ["0", "1"]

respuesta: resultados_texto[escenario_idx]
tipo: mc
opciones_explicitas: ["0", "1"]

enunciado: "Considera una puerta lógica AND con las siguientes entradas: A = {datos[escenario_idx][0]} y B = {datos[escenario_idx][1]}. ¿Cuál es el valor de la salida?"

explicacion: |
  La puerta AND solo devuelve 1 (verdadero) cuando todas sus entradas son 1.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "puerta_or"]

respuesta: "1"
tipo: completar
respuestas_validas:
  - "1"

enunciado: "La puerta lógica OR devuelve un valor de ___ si al menos una de sus entradas es 1."

explicacion: |
  La función OR (O lógica) es verdadera si existe al menos un 1 en las entradas.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "and", "tabla_verdad"]

respuesta_orden: ["0", "0", "0", "1"]
tipo: ordenar

opciones_explicitas: ["0", "0", "0", "1"]

enunciado: "Ordena los resultados de la salida de una puerta AND para las combinaciones de entrada (0,0), (0,1), (1,0) y (1,1) respectivamente:"

explicacion: |
  La secuencia correcta es 0, 0, 0 y finalmente 1 cuando ambas entradas son altas.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "definiciones"]

respuesta: "inversor"
tipo: completar
respuestas_validas:
  - "inversor"

enunciado: "A la puerta lógica NOT se le conoce comúnmente como ___."

explicacion: |
  Se le llama inversor porque cambia el estado de la señal: lo que es 0 pasa a ser 1, y lo que es 1 pasa a ser 0.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puertas_logicas", "not"]

enunciado: "La puerta lógica NOT es un inversor. Si la entrada de la puerta es 1, la salida será ___."

respuestas_validas:
  - "0"
  - "1"
respuesta: "0"
tipo: completar

explicacion: |
  La función de la puerta NOT es invertir el estado de la entrada. Si entra un '1' (alto), la salida es '0' (bajo).
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puertas_logicas", "and"]

variables:
  escenario_idx: uno_de([0, 1])
  entradas: [[1, 0], [1, 1]]
  resultado: [0, 1]

enunciado: "Considera una puerta AND con las entradas A y B. Si las entradas son A={entradas[escenario_idx][0]} y B={entradas[escenario_idx][1]}, el resultado de la operación lógica es ___."

respuesta: resultado[escenario_idx]
tipo: mc
opciones_explicitas: [0, 1]

explicacion: |
  La puerta AND solo devuelve un '1' si TODAS sus entradas son '1'. En el caso {entradas[escenario_idx][0]} y {entradas[escenario_idx][1]}, el resultado es {resultado[escenario_idx]}.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puertas_logicas", "or"]

enunciado: "Dada una puerta OR con entradas A = 0 y B = 1, ¿cuál es el valor de la salida?"

respuesta: "1"
tipo: mc
opciones_explicitas: ["0", "1"]

explicacion: |
  La puerta OR devuelve '1' si al menos una de sus entradas es '1'. Como B es 1, la salida es 1.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puertas_logicas", "not"]

enunciado: "¿Es verdadero que la salida de una puerta NOT con entrada 0 es 1?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La puerta NOT invierte el valor: el inverso de 0 es 1.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["combinacional", "and", "not"]

variables:
  entrada_a: 1
  entrada_b: 0

enunciado: "Se tiene un circuito compuesto por una puerta AND seguida de una puerta NOT. Si las entradas al circuito son A={entrada_a} y B={entrada_b}, sigue estos pasos:\n1. Calcular la salida de la puerta AND con A y B.\n2. Aplicar la puerta NOT al resultado obtenido.\n¿Cuál es la salida final del circuito?"

pasos:
  - "La salida de la puerta AND con 1 y 0 es 0."
  - "La salida de la puerta NOT aplicada a 0 es 1."

respuesta: "1"
tipo: completar
tolerancia_abs: 0

explicacion: |
  Paso 1: AND(1, 0) = 0.
  Paso 2: NOT(0) = 1.
  La salida final es 1.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "not"]

respuesta: falso
tipo: vf

enunciado: "Si aplicamos una señal de entrada '1' a una puerta lógica NOT, la salida resultante es '1'."

explicacion: |
  La puerta NOT es un inversor. Su función es cambiar el estado de la señal: si entra un 1, la salida es 0; si entra un 0, la salida es 1.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "or"]

variables:
  idx: uno_de([0, 1, 2, 3])
  a_vals: [0, 0, 1, 1]
  b_vals: [0, 1, 0, 1]
  resultados_texto: ["0", "1", "1", "1"]

respuesta: resultados_texto[idx]
tipo: mc
opciones_explicitas: ["0", "1", "2", "3"]

enunciado: "En una puerta lógica OR, si las entradas son {a_vals[idx]} y {b_vals[idx]}, la salida es ___."

explicacion: |
  La puerta OR devuelve '1' si al menos una de sus entradas es '1'. El error común es pensar que la salida puede ser '2' (como en una suma aritmética), pero en lógica digital los valores están limitados a {0, 1}.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "and"]

respuesta: "1"
tipo: completar
respuestas_validas:
  - "1"

enunciado: "Para que una puerta AND entregue una salida de '1', todas sus entradas deben ser ___."

explicacion: |
  La puerta AND actúa como un multiplicador lógico. Solo si todas las condiciones (entradas) se cumplen (son 1), la salida es 1. Si alguna es 0, la salida es 0.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["ordenar", "logica"]

respuesta_orden: ["NOT(A)", "AND(B, C)", "OR(D, E)"]
tipo: ordenar
opciones_explicitas: ["OR(D, E)", "NOT(A)", "AND(B, C)"]

enunciado: "Ordena las siguientes operaciones según el orden de prioridad estándar de precedencia en álgebra de Boole (de mayor a menor prioridad):"

pasos:
  - "1. Inversión (NOT)"
  - "2. Producto lógico (AND)"
  - "3. Suma lógica (OR)"

explicacion: |
  Al igual que en la aritmética, en la lógica digital la negación (NOT) tiene la mayor prioridad, seguida de la conjunción (AND) y finalmente la disyunción (OR).
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "and"]

respuesta: 0
tipo: completar
enunciado: "Si una puerta AND tiene una entrada en '1' y la otra en '0', el resultado es 0."

explicacion: |
  Es correcto. En la puerta AND, si existe al menos un cero en las entradas, la salida será siempre 0. Solo el caso [1, 1] produce un 1.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["logica", "puerta_not"]

respuesta: "inversor"
tipo: completar
respuestas_validas:
  - "inversor"
  - "inversión"
  - "cambio"

enunciado: "A diferencia de las puertas AND u OR que procesan múltiples entradas para determinar una salida, la puerta NOT se caracteriza por ser un ___ que invierte el estado de una única entrada."

explicacion: |
  La puerta NOT es una función unaria. Su única función es transformar un 1 en 0 y un 0 en 1.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puerta_and", "logica"]

variables:
  escenario: uno_de([["1", "1", "1"], ["1", "0", "0"], ["0", "1", "0"]])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["1", "0"]

enunciado: "Considerando la tabla de verdad de una puerta AND con dos entradas, si las entradas son {escenario[0]} y {escenario[1]}, la salida será:"

explicacion: |
  En una puerta AND, la salida es 1 únicamente si todas las entradas son 1. En este caso, la combinación seleccionada da como resultado {escenario[2]}.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puerta_or", "logica"]

respuesta: verdadero

tipo: vf
enunciado: "Si una puerta OR tiene una entrada en estado 0, la salida dependerá exclusivamente del valor de la otra entrada."

explicacion: |
  Verdadero. Como 0 OR X = X, cuando una entrada es 0 la salida queda determinada enteramente por el valor de la otra entrada.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["puerta_or", "logica"]

respuesta: verdadero

tipo: vf
enunciado: "En una puerta OR, si al menos una de sus entradas es 1, la salida será siempre 1."

explicacion: |
  Correcto. La función OR devuelve 1 si existe al menos un 1 en las entradas.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["and_vs_or"]

variables:
  caso: uno_de([["1", "1", "1"], ["1", "0", "1"], ["0", "1", "1"]])

respuesta: caso[2]
tipo: mc
opciones_explicitas: ["0", "1"]

enunciado: "Si comparamos una puerta AND con una puerta OR ante las entradas {caso[0]} y {caso[1]}, la salida de la puerta OR será:"

explicacion: |
  La puerta OR es más 'inclusiva' que la AND. Mientras que la AND requiere que todos sean 1 para dar 1, la OR solo requiere uno. En este caso, la salida es {caso[2]}.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["secuencia", "logica"]

tipo: ordenar
opciones_explicitas: ["Entrada", "NOT", "Salida"]
respuesta_orden: ["Entrada", "NOT", "Salida"]
enunciado: "Ordene los pasos de un circuito simple donde una señal de entrada debe ser invertida antes de ser procesada por una puerta lógica (considere el flujo de señal):"

explicacion: |
  En un diseño lógico, el flujo sigue la dirección de la señal: primero la entrada, luego el componente (NOT) y finalmente la salida.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["not", "logica_digital"]

variables:
  datos: [["0", "1"], ["1", "0"]]
  idx: uno_de([0, 1])

enunciado: "Si aplicamos una señal de entrada de valor {datos[idx][0]} a una puerta lógica NOT, la salida obtenida será ___."

respuestas_validas:
  - "0"
  - "1"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La puerta NOT es un inversor: si la entrada es 0, la salida es 1; si la entrada es 1, la salida es 0.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["and", "logica_digital"]

variables:
  datos: [["0", "0"], ["0", "1"], ["1", "0"], ["1", "1"]]
  idx: uno_de([0, 1, 2, 3])
  resultados_texto: ["0", "0", "0", "1"]

enunciado: "Dadas las entradas de una puerta AND representadas por el par {datos[idx][0]} y {datos[idx][1]}, ¿cuál es el valor de la salida?"

opciones_explicitas: ["0", "1"]
respuesta: resultados_texto[idx]
tipo: mc

explicacion: |
  La puerta AND solo devuelve un 1 (verdadero) cuando todas sus entradas son 1.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "basico"
  tags: ["or", "logica_digital"]

variables:
  datos: [["0", "1"], ["1", "0"], ["1", "1"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si la puerta OR recibe las señales {datos[idx][0]} y {datos[idx][1]}, el resultado de la operación lógica es verdadero."

respuesta: verdadero
tipo: vf

explicacion: |
  La puerta OR devuelve 1 si al menos una de sus entradas es 1. En los casos sorteados, siempre hay al menos un 1.
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["combinacional", "logica_digital"]

variables:
  idx: uno_de([0, 1, 2, 3])
  entrada_a: ["0", "0", "1", "1"]
  entrada_b: ["0", "1", "0", "1"]
  resultados_texto: ["0", "0", "1", "0"]

enunciado: "Se tiene un circuito compuesto por una puerta AND cuyas entradas son A y B, pero la entrada B pasa primero por una puerta NOT. Si A es {entrada_a[idx]} y B es {entrada_b[idx]}, el valor de la salida es ___."

respuestas_validas:
  - "0"
  - "1"
respuesta: resultados_texto[idx]
tipo: completar

explicacion: |
  La salida es 1 solo si A es 1 y la inversión de B es 1 (es decir, B es 0).
```

```
metadata:
  materia: "electronica"
  tema: "logica_digital_puertas"
  nivel: "intermedio"
  tags: ["secuencia", "logica_digital"]

opciones_explicitas: ["00", "01", "10", "11"]
respuesta_orden: ["00", "01", "10", "11"]
tipo: ordenar

enunciado: "Ordene las posibles combinaciones de entrada (A, B) de una puerta AND de dos bits, empezando desde el valor binario más bajo hasta el más alto."

explicacion: |
  El orden correcto de las combinaciones binarias de dos bits es 00, 01, 10 y 11.
```

## Sección: microcontroladores-y-microprocesadores (25 preguntas)

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "hardware"]

respuesta: "microcontrolador"
tipo: completar
respuestas_validas:
  - "microcontrolador"

enunciado: "Un dispositivo que integra en un solo chip la CPU, memoria RAM, memoria ROM y periféricos de entrada/salida se denomina ___."

explicacion: |
  El microcontrolador está diseñado para tareas específicas y contiene todos los componentes necesarios en un solo circuito integrado, a diferencia del microprocesador que requiere componentes externos.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["aplicaciones", "uso"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["controlar el ciclo de lavado de una lavadora", "microcontrolador"], ["procesar un videojuego de alta resolución en una PC", "microprocesador"]]

tipo: mc
opciones_explicitas: ["microcontrolador", "microprocesador"]
respuesta: escenarios[escenario_idx][1]

enunciado: "Considerando el uso de {escenarios[escenario_idx][0]}, ¿qué tipo de procesador es el más adecuado?"

pasos:
  - "Identificar si la tarea requiere procesamiento de datos masivos o control de periféricos."
  - "Determinar si el sistema es dedicado o de propósito general."

explicacion: |
  Los microcontroladores son ideales para tareas de control dedicadas (como lavadoras o ABS), mientras que los microprocesadores se usan para computación de propósito general (como PCs o consolas).
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["arquitectura", "memoria"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un microprocesador requiere obligatoriamente de componentes externos como memoria RAM y almacenamiento para funcionar?"

explicacion: |
  Correcto. El microprocesador es solo la unidad central de procesamiento (CPU); la memoria y los periféricos deben conectarse externamente.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "componentes"]

respuesta_orden: ["CPU", "Memoria", "Periféricos"]
tipo: ordenar
opciones_explicitas: ["CPU", "Memoria", "Periféricos"]

enunciado: "Ordena los componentes según la jerarquía de integración en un sistema de microcontrolador (desde el núcleo hasta los elementos de interacción con el entorno):"

explicacion: |
  En un microcontrolador, la CPU es el núcleo, seguida de la memoria integrada y finalmente los periféricos (I/O).
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["diseño", "propósito"]

respuesta: "Propósito Específico"
tipo: mc
opciones_explicitas: ["Propósito General", "Propósito Específico"]

enunciado: "Si buscamos un chip diseñado para una función única y dedicada, el tipo de chip es de ___."

explicacion: |
  Los microprocesadores son de propósito general (pueden hacer cualquier tarea según el software), mientras que los microcontroladores son de propósito específico (diseñados para una tarea concreta).
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "diferencias"]

respuesta: "microcontrolador"
tipo: "completar"
respuestas_validas:
  - "microcontrolador"

enunciado: "Un dispositivo que integra en un solo chip la CPU, la memoria RAM, la memoria de programa y los periféricos de entrada/salida para controlar una tarea específica (como el control de un lavarropas) se denomina ___."

explicacion: |
  El microcontrolador es un sistema completo en un solo chip diseñado para tareas dedicadas, mientras que el microprocesador es solo la unidad central de procesamiento que requiere componentes externos para funcionar.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["aplicacion", "computacion"]

respuesta: "microprocesador"
tipo: "mc"
opciones_explicitas: ["microcontrolador", "microprocesador", "memoria flash", "puerto GPIO"]

enunciado: "Si estamos diseñando una computadora de alto rendimiento para edición de video que requiere gran capacidad de procesamiento y expansión de memoria externa, el componente principal debe ser un:"

explicacion: |
  Los microprocesadores están diseñados para tareas de propósito general y alta velocidad, delegando el almacenamiento y la entrada/salida a otros componentes externos.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["memoria", "integracion"]

respuesta: falso
tipo: "vf"

enunciado: "Un microprocesador incluye internamente la memoria RAM y la memoria de lectura de instrucciones (ROM) como parte esencial de su arquitectura básica de un solo chip."

explicacion: |
  Falso. El microprocesador solo contiene la unidad de procesamiento; la RAM y la ROM son componentes externos que deben conectarse a él. El microcontrolador sí las integra.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["flujo_trabajo", "diseño"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Controlar la temperatura de un horno mediante un sensor y un relé", "microcontrolador"], ["Ejecutar un sistema operativo complejo como Windows o Linux", "microprocesador"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["microcontrolador", "microprocesador"]

enunciado: "Para el escenario: '{escenarios[escenario_idx][0]}', el componente ideal es un:"

explicacion: |
  Se ha seleccionado el componente adecuado según la complejidad y la naturaleza de la tarea (específica vs general).
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["arquitectura", "ordenar"]

respuesta_orden: ["microprocesador", "memoria RAM", "unidades de almacenamiento"]
tipo: "ordenar"
opciones_explicitas: ["microprocesador", "memoria RAM", "unidades de almacenamiento"]

enunciado: "En una arquitectura basada en microprocesador (como una PC), ordene los componentes desde el núcleo de procesamiento hacia el almacenamiento de datos masivos:"

explicacion: |
  En un sistema basado en microprocesador, el flujo lógico es: CPU (procesamiento) -> RAM (memoria volátil de trabajo) -> Disco/SSD (almacenamiento masivo).
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "componentes"]

respuesta: "microprocesador"
tipo: completar
respuestas_validas:
  - "microprocesador"

enunciado: "A diferencia de un microcontrolador, que integra memoria y periféricos en un solo chip, un ___ requiere componentes externos (RAM, Flash, I/O) para funcionar como un sistema completo."

explicacion: |
  El microprocesador (MPU) es solo la unidad de procesamiento central (CPU). Para que un ordenador funcione, necesita memoria y periféricos externos, mientras que el microcontrolador (MCU) es un "sistema en un chip" (SoC) que ya incluye todo lo necesario para tareas específicas.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["diferencias", "uso"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un sistema diseñado para lavar ropa (lavarropas) de forma dedicada.", "microcontrolador"], ["Una computadora de escritorio para edición de video y juegos.", "microprocesador"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["microcontrolador", "microprocesador"]

enunciado: "Para el siguiente escenario: '{escenarios[escenario_idx][0]}', el componente más adecuado es un:"

explicacion: |
  El escenario {escenarios[escenario_idx][0]} requiere un dispositivo de bajo costo, bajo consumo y que realice una tarea fija, características típicas de un microcontrolador.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["memoria", "perifericos"]

respuesta: falso
tipo: vf

enunciado: "Un microprocesador es, por definición, un dispositivo que contiene internamente la memoria RAM y los puertos de entrada/salida (I/O) para operar de forma autónoma."

explicacion: |
  Falso. La integración de RAM, ROM/Flash y periféricos I/O en un mismo chip es la característica definitoria de un microcontrolador. El microprocesador depende de la arquitectura de bus para conectarse a ellas.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["proceso", "diseño"]

respuesta_orden: ["Seleccionar el procesador", "Conectar memoria RAM externa", "Conectar almacenamiento", "Diseñar la placa de circuito"]
tipo: ordenar
opciones_explicitas: ["Seleccionar el procesador", "Conectar memoria RAM externa", "Conectar almacenamiento", "Diseñar la placa de circuito"]

enunciado: "Cuando diseñamos un sistema basado en un microprocesador de alto rendimiento, el orden lógico de integración de componentes es:"

explicacion: |
  Al usar un microprocesador, el diseño es más complejo porque primero se elige la CPU y luego se deben añadir los componentes esenciales (RAM, almacenamiento) que el procesador no trae integrados, para finalmente diseñar la placa que los interconecte.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "avanzado"
  tags: ["rendimiento", "arquitectura"]

respuesta: "microprocesador"
tipo: completar
respuestas_validas:
  - "microprocesador"

enunciado: "Si un proyecto requiere realizar cálculos matemáticos extremadamente complejos y gestionar múltiples procesos simultáneos (multitarea pesada), se debe optar por un ___ en lugar de un microcontrolador."

explicacion: |
  Los microprocesadores están optimizados para el rendimiento y la velocidad de procesamiento mediante arquitecturas complejas y jerarquías de caché, mientras que los microcontroladores priorizan la eficiencia, el control de periféricos y el bajo consumo para tareas de control.
```

```
metadata:
  materia: "electronica"
  tema: "arquitectura_computacional"
  nivel: "basico"
  tags: ["microcontrolador", "microprocesador"]

tipo: mc
opciones_explicitas: ["El microprocesador integra memoria RAM y almacenamiento en un solo chip", "El microcontrolador integra CPU, memoria y periféricos en un solo chip", "El microprocesador es más lento que un microcontrolador", "No existe diferencia real entre ambos"]

enunciado: "La principal diferencia arquitectónica es que un {tipo_comp}"

variables:
  tipo_comp: uno_de(["microcontrolador", "microprocesador"])

respuesta: "El microcontrolador integra CPU, memoria y periféricos en un solo chip"

explicacion: |
  Un microcontrolador (MCU) es un sistema completo en un solo chip (SoC), mientras que un microprocesador (MPU) requiere componentes externos (RAM, ROM, periféricos) para funcionar.
```

```
metadata:
  materia: "electronica"
  tema: "aplicaciones_sistemas_embebidos"
  nivel: "basico"
  tags: ["uso", "aplicacion"]

tipo: vf
respuesta: falso

enunciado: "Un microprocesador de alta potencia, como el de una computadora personal, es la opción más eficiente para controlar un termostato simple que solo lee un sensor y activa un relé."

explicacion: |
  Falso. Para tareas de control de baja complejidad y bajo consumo, se utiliza un microcontrolador. Un microprocesador sería excesivamente costoso y complejo para esa tarea.
```

```
metadata:
  materia: "electronica"
  tema: "componentes_internos"
  nivel: "intermedio"
  tags: ["memoria", "perifericos"]

tipo: completar
respuestas_validas:
  - "RAM"

enunciado: "En un microcontrolador, la memoria ___ (junto con la ROM y los periféricos como GPIO o ADC) está integrada en el mismo encapsulado que la CPU, a diferencia de un microprocesador que requiere chips adicionales."

pasos:
  - "Identificar qué tipo de memoria volátil se integra."
  - "Identificar el término para los módulos de entrada/salida."

respuesta: "RAM"

explicacion: |
  Los microcontroladores están diseñados para ser autónomos, incluyendo RAM, ROM (o Flash) y periféricos en un solo chip.
```

```
metadata:
  materia: "electronica"
  tema: "jerarquia_computacional"
  nivel: "basico"
  tags: ["orden", "componentes"]

tipo: ordenar
opciones_explicitas: ["Microprocesador", "Microcontrolador", "Sistema embebido completo"]
respuesta_orden: ["Microprocesador", "Microcontrolador", "Sistema embebido completo"]

enunciado: "Ordene los elementos desde el componente de mayor capacidad de cómputo/complejidad hasta el sistema que lo integra para una función específica."

explicacion: |
  El microprocesador es el núcleo de cómputo más complejo, el microcontrolador es un sistema de control integrado, y el sistema embebido es la aplicación final que utiliza estos componentes.
```

```
metadata:
  materia: "electronica"
  tema: "consumo_energetico"
  nivel: "intermedio"
  tags: ["eficiencia", "energia"]

tipo: mc
opciones_explicitas: ["El microcontrolador consume menos energía", "El microprocesador consume menos energía", "Ambos consumen lo mismo", "El consumo depende solo del voltaje"]

enunciado: "En un dispositivo alimentado por batería, como un sensor inalámbrico, se prefiere el uso de un microcontrolador debido a que su diseño está optimizado para un bajo consumo de energía."

respuesta: "El microcontrolador consume menos energía"

explicacion: |
  Los microcontroladores están diseñados para operar con eficiencias energéticas extremas, permitiendo que dispositivos funcionen meses con una batería pequeña.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "sistemas_embebidos"]

variables:
  datos: [["Controlar un termostato doméstico", "microcontrolador"], ["Procesar un videojuego de última generación", "microprocesador"]]
  idx: uno_de([0, 1])

enunciado: "Para el escenario de {datos[idx][0]}, el componente ideal es un {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["microcontrolador", "microprocesador"]

explicacion: |
  Un microcontrolador integra CPU, memoria y periféricos en un solo chip, ideal para tareas específicas como un termostato. Un microprocesador requiere componentes externos y se usa para tareas de propósito general de alta potencia.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "memoria"]

respuesta: verdadero
tipo: vf

enunciado: "Un microcontrolador contiene la unidad de procesamiento, la memoria RAM, la memoria ROM y los periféricos de entrada/salida dentro de un mismo circuito integrado."

explicacion: |
  Esa es la definición fundamental de un microcontrolador (System-on-a-Chip), a diferencia del microprocesador que necesita memoria y periféricos externos para funcionar.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "intermedio"
  tags: ["hardware", "perifericos"]

enunciado: "Ordena los siguientes componentes EXTERNOS que deben conectarse a un microprocesador para que funcione como un sistema completo, agregando primero la memoria de trabajo y dejando para el final los periféricos de entrada/salida:"

pasos:
  - "Identificar los elementos que el microprocesador no tiene integrados por defecto."

respuesta_orden: ["Memoria RAM", "Memoria ROM/Flash", "Controlador de E/S"]
tipo: ordenar
opciones_explicitas: ["Memoria RAM", "Memoria ROM/Flash", "Controlador de E/S"]

explicacion: |
  El microprocesador es solo el núcleo de procesamiento; necesita que el usuario o el diseñador añada la memoria y los controladores de E/S para ser útil.
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "basico"
  tags: ["aplicacion", "uso"]

enunciado: "El uso de un microprocesador está orientado a tareas de propósito general, mientras que un microcontrolador se usa para tareas de propósito ___."

respuesta: "especifico"
tipo: completar
respuestas_validas:
  - "especifico"
  - "específico"

explicacion: |
  Los microprocesadores son versátiles (general), mientras que los microcontroladores están optimizados para una función dedicada (específico).
```

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "intermedio"
  tags: ["consumo", "energia"]

enunciado: "En comparación con un microprocesador, un microcontrolador suele tener un consumo de energía de tipo bajo y un rendimiento de tipo ___."

respuesta: "bajo"
tipo: mc
opciones_explicitas: ["bajo", "alto"]

explicacion: |
  Debido a su arquitectura integrada y menor frecuencia de reloj, los microcontroladores son mucho más eficientes energéticamente, lo que permite su uso en dispositivos a batería.
```

## Sección: sensores-y-actuadores (25 preguntas)

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos", "sensores"]

tipo: mc
opciones_explicitas: ["Un dispositivo que convierte una magnitud física en una señal eléctrica", "Un dispositivo que convierte una señal eléctrica en un movimiento mecánico", "Un dispositivo que almacena datos del entorno", "Un dispositivo que regula el voltaje de una fuente"]
respuesta: "Un dispositivo que convierte una magnitud física en una señal eléctrica"

enunciado: "Un sensor se define fundamentalmente como ___."

explicacion: |
  Un sensor detecta una magnitud física del entorno (temperatura, luz, presión, etc.) y la transforma en una señal eléctrica que puede procesar un sistema electrónico.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos", "actuadores"]

tipo: vf
respuesta: falso

enunciado: "Los actuadores tienen la función principal de captar información del entorno para procesarla en un controlador."

explicacion: |
  Falso. Captar información del entorno es la función del sensor. El actuador recibe una señal ya procesada y la convierte en una acción física.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_de_trabajo", "sistemas_combinados"]

tipo: ordenar
opciones_explicitas: ["Sensor", "Controlador", "Actuador"]
respuesta_orden: ["Sensor", "Controlador", "Actuador"]

enunciado: "En un sistema automatizado típico, ordene los componentes según el flujo de información desde la captura hasta la acción física."

pasos:
  - "El sensor detecta el cambio en el entorno."
  - "El controlador procesa la señal recibida."
  - "El actuador ejecuta la acción física resultante."

explicacion: |
  El flujo lógico es: el sensor obtiene el dato, el controlador toma la decisión y el actuador realiza la acción.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["señales", "salida"]

tipo: completar
respuestas_validas:
  - "analógica"
  - "digital"

enunciado: "Si un sensor entrega una señal que varía continuamente en el tiempo, se dice que es una señal ___; por el contrario, si solo puede tomar valores discretos, es una señal ___."

explicacion: |
  Las señales analógicas representan magnitudes continuas, mientras que las digitales representan estados discretos (como 0 y 1).
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["sistemas", "integracion"]

variables:
  escenario: [["Luz", "Fotoresistencia", "LED"], ["Temperatura", "Termistor", "Ventilador"], ["Presión", "Célula de carga", "Motor"]]
  idx: uno_de([0,1,2])

tipo: mc
opciones_explicitas: ["Sensor -> Controlador -> Actuador", "Actuador -> Controlador -> Sensor", "Controlador -> Sensor -> Actuador"]
respuesta: "Sensor -> Controlador -> Actuador"

enunciado: "Considere el siguiente caso: Un {escenario[idx][0]} es detectado por un {escenario[idx][1]}, lo que provoca que un {escenario[idx][2]} se active. ¿Cuál es la secuencia correcta de trabajo?"

explicacion: |
  El sensor ({escenario[idx][1]}) capta la magnitud ({escenario[idx][0]}), el controlador procesa y el actuador ({escenario[idx][2]}) produce la acción.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["sensores", "actuadores", "automatizacion"]

variables:
  humedad_suelo: 25

respuesta: "encender"
tipo: mc
opciones_explicitas: ["apagar", "encender", "esperar"]

enunciado: "Un sensor de humedad de suelo detecta que la humedad es del {humedad_suelo}%. Si el umbral de riego es del 30%, el sistema debe activar la bomba de agua (actuador). ¿Qué acción debe realizar el actuador?"

explicacion: |
  El sensor detecta una humedad baja (25% < 30%), por lo tanto, la lógica del sistema debe enviar una señal para activar el actuador (la bomba de agua).
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un sensor convierte una magnitud física (como la luz) en una señal eléctrica, mientras que un actuador convierte una señal eléctrica en una acción física (como movimiento)?"

explicacion: |
  Exacto. Los sensores son transductores de entrada (entorno -> señal) y los actuadores son transductores de salida (señal -> acción).
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_de_control"]

respuesta_orden: ["detectar movimiento", "procesar señal", "activar sirena"]
tipo: ordenar
opciones_explicitas: ["activar sirena", "detectar movimiento", "procesar señal"]

enunciado: "Ordena cronológicamente el funcionamiento de un sistema de alarma de seguridad ante una intrusión:"

explicacion: |
  1. El sensor (PIR) detecta el movimiento.
  2. El microcontrolador procesa la señal recibida.
  3. El actuador (sirena) emite el sonido.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["completar", "lógica"]

variables:
  temp_actual: 28
  temp_objetivo: 22

respuesta: "ventilador"
respuestas_validas:
  - "ventilador"

enunciado: "En un sistema de climatización, si la temperatura actual es de {temp_actual}°C y el objetivo es de {temp_objetivo}°C, el sensor de temperatura detecta un exceso de calor. Para enfriar la habitación, el controlador debe activar el ___."

pasos:
  - "Leer valor del sensor de temperatura"
  - "Comparar temp_actual con temp_objetivo"
  - "Si temp_actual > temp_objetivo, activar actuador de enfriamiento"

explicacion: |
  Como la temperatura actual (28) es mayor que la objetivo (22), el sistema debe activar el actuador encargado de bajar la temperatura, que en este caso es el ventilador.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "avanzado"
  tags: ["sensores", "calculo"]

variables:
  sensor_val: uno_de([2.5, 4.8])
  voltaje_max: 5.0

respuesta: sensor_val / voltaje_max * 5
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un sensor analógico entrega una señal de voltaje proporcional a la intensidad de luz. Si el sensor entrega {sensor_val}V y el rango máximo es de {voltaje_max}V, ¿cuál es el valor de la señal en una escala de 0 a 5 (donde 5 es el máximo)?"

pasos:
  - "Identificar el voltaje actual: {sensor_val}"
  - "Dividir el voltaje actual por el voltaje máximo: {sensor_val} / {voltaje_max}"
  - "Multiplicar por el rango de la escala: (resultado) * 5"

explicacion: |
  Se divide el voltaje actual por el voltaje máximo y se multiplica por el rango de la escala (5). Por ejemplo, si el valor es 2.5V y el máximo es 5.0V, la proporción es 0.5, y en una escala de 0 a 5 eso equivale a 0.5 * 5 = 2.5.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos_basicos", "sensores", "actuadores"]

respuesta: "actuador"
tipo: mc
opciones_explicitas: ["sensor", "actuador", "procesador", "cable"]

enunciado: "Si un sistema electrónico detecta un cambio en la temperatura y luego enciende un ventilador para enfriar el ambiente, el ventilador está cumpliendo la función de un ___."

explicacion: |
  Un sensor capta información del entorno (entrada), mientras que un actuador convierte una señal eléctrica en una acción física (salida), como mover un motor o encender una luz.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["sensores", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "Un sensor es un dispositivo cuya función principal es realizar un trabajo mecánico sobre el entorno, como mover un brazo robótico."

explicacion: |
  Falso. El dispositivo que realiza trabajo mecánico es el actuador. El sensor solo recolecta datos del entorno.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_de_datos", "control"]

variables:
  datos: ["sensor de luz", "microcontrolador", "LED"]

respuesta: datos[2]
tipo: completar
respuestas_validas:
  - "LED"

enunciado: "En un sistema automatizado, el flujo de información sigue un orden lógico. Si el sistema busca regular la iluminación de una habitación, el orden de los componentes es: {datos[0]} -> {datos[1]} -> ___."

explicacion: |
  El flujo correcto es: Sensor (captación) -> Procesador (decisión) -> Actuador (acción).
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["clasificacion", "entrada_salida"]

respuesta: "entrada"
tipo: mc
opciones_explicitas: ["entrada", "salida", "alimentación", "tierra"]

enunciado: "Desde la perspectiva de un microcontrolador, la señal que proviene de un sensor de movimiento se clasifica como una señal de ___."

explicacion: |
  Los sensores envían información al procesador, por lo tanto, sus señales se consideran señales de entrada (inputs).
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["lógica_de_control", "secuencia"]

respuesta_orden: ["captar", "procesar", "actuar"]
tipo: ordenar
opciones_explicitas: ["procesar", "actuar", "captar"]

enunciado: "Para que un sistema de control automático funcione correctamente, debe seguir una secuencia lógica de eventos. Ordena las etapas de un sistema de control:"

explicacion: |
  Primero se debe captar el dato (sensor), luego procesar la información para tomar una decisión (controlador) y finalmente ejecutar una acción (actuador).
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos_basicos", "definiciones"]

tipo: mc
opciones_explicitas: ["Un sensor convierte una magnitud física en una señal eléctrica, mientras que un actuador convierte una señal eléctrica en una acción física.", "Un sensor produce movimiento y un actuador capta luz.", "Un sensor es un componente digital y un actuador es analógico.", "No hay diferencia, ambos son dispositivos de entrada."]

enunciado: "En un sistema de control, la principal distinción entre un sensor y un actuador radica en la dirección de la conversión de energía. ¿Cuál es la diferencia correcta?"

respuesta: "Un sensor convierte una magnitud física en una señal eléctrica, mientras que un actuador convierte una señal eléctrica en una acción física."

explicacion: |
  Los sensores son dispositivos de entrada que transforman una propiedad física (temperatura, presión, luz) en una señal eléctrica para ser procesada. Los actuadores son dispositivos de salida que reciben una señal eléctrica para generar un efecto físico (movimiento, calor, sonido).
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["flujo_de_datos"]

variables:
  datos: [["LDR", "sensor"], ["Motor DC", "actuador"], ["Buzzer", "actuador"], ["Potenciómetro", "sensor"]]
  idx: uno_de([0, 1, 2, 3])

tipo: completar
respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]

enunciado: "Si tenemos un dispositivo como un {datos[idx][0]}, su función principal en el sistema es actuar como un ___."

explicacion: |
  El {datos[idx][0]} es un {datos[idx][1]} porque su propósito es transformar una magnitud física en una señal eléctrica para el controlador.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["lógica_de_control"]

tipo: vf
respuesta: falso

enunciado: "¿Es correcto afirmar que un actuador es el encargado de captar cambios en el entorno para enviarlos a un microcontrolador?"

explicacion: |
  Falso. Esa es la función de un sensor. El actuador es el elemento final que ejecuta la acción dictada por el controlador tras procesar la información de los sensores.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["flujo_sistema"]

tipo: ordenar
opciones_explicitas: ["Captación de estímulo físico", "Procesamiento de señal eléctrica", "Ejecución de acción física"]
respuesta_orden: ["Captación de estímulo físico", "Procesamiento de señal eléctrica", "Ejecución de acción física"]

enunciado: "Ordene las etapas de un sistema automatizado desde la interacción con el entorno hasta la respuesta física:"

explicacion: |
  El ciclo comienza con el sensor (captación), sigue con el controlador (procesamiento) y termina con el actuador (ejecución).
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  item: uno_de([["Relé", "actuador"], ["Sensor Ultrasónico", "sensor"], ["Servomotor", "actuador"], ["LDR", "sensor"]])

tipo: mc
opciones_explicitas: ["sensor", "actuador"]
respuesta: item[1]

enunciado: "Un {item[0]} se clasifica técnicamente como un/a ___."

explicacion: |
  El {item[0]} es un {item[1]}. Los sensores detectan, los actuadores actúan.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["conceptos_basicos", "identificacion"]

variables:
  escenarios: [["un termómetro digital", "un motor de un ventilador"], ["un sensor de luz (LDR)", "una lámpara LED"]]
  idx: uno_de([0, 1])
  componente_sensor: escenarios[idx][0]
  componente_actuador: escenarios[idx][1]

enunciado: "En el siguiente sistema, el {componente_sensor} detecta una variable del entorno y el {componente_actuador} realiza la acción física. ¿Cuál de los dos es el actuador?"

opciones_explicitas: ["el sensor", "el actuador"]
respuesta: "el actuador"
tipo: mc

explicacion: |
  El sensor capta la información del entorno (temperatura) y el actuador transforma la señal en una acción física (movimiento del ventilador).
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "basico"
  tags: ["logica", "flujo_de_datos"]

enunciado: "En un sistema automatizado, el flujo de información correcto es: Sensor -> Controlador -> Actuador."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. El sensor obtiene el dato, el controlador procesa la decisión y el actuador ejecuta la acción.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["completar", "flujo"]

enunciado: "En un sistema de riego automático, el sensor de humedad detecta que la tierra está seca, el controlador activa la ___ para regar."

respuestas_validas:
  - "bomba de agua"
respuesta: "bomba de agua"
tipo: completar

explicacion: |
  El actuador en este escenario es la bomba de agua, ya que es el elemento que produce la acción física de mover el agua.
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "intermedio"
  tags: ["secuencia", "proceso"]

opciones_explicitas: ["Captar estímulo ambiental", "Procesar señal eléctrica", "Ejecutar acción física"]
respuesta_orden: ["Captar estímulo ambiental", "Procesar señal eléctrica", "Ejecutar acción física"]
tipo: ordenar

enunciado: "Ordena las etapas de un proceso de automatización, desde el sensor hasta el actuador:"

explicacion: |
  El proceso lógico siempre comienza con la captura (sensor), sigue con el procesamiento (controlador) y termina con la acción (actuador).
```

```
metadata:
  materia: "electronica"
  tema: "sensores_y_actuadores"
  nivel: "avanzado"
  tags: ["calculo", "sensor_analogico"]

variables:
  valor_entrada: uno_de([10, 20, 30, 40, 50])
  escala: 5

enunciado: "Un sensor analógico entrega un voltaje proporcional a la temperatura. Si la fórmula es V = T * {escala} y la temperatura actual es {valor_entrada} grados, ¿cuál es el voltaje de salida?"

respuesta: valor_entrada * escala
tipo: completar
tolerancia_abs: 0

explicacion: |
  Multiplicamos la temperatura medida por la constante de escala para obtener el valor de voltaje correspondiente.
```

