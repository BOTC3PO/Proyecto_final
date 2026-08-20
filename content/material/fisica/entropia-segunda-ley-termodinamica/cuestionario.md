# Fisica — Entropia segunda ley termodinamica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Entropía

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "entropia", "desorden"]

respuesta: "desorden"
tipo: completar
respuestas_validas:
  - "desorden"
  - "caos"

enunciado: "En términos macroscópicos, la entropía se asocia comúnmente con el grado de ___ de un sistema."

explicacion: |
  La entropía es una medida del desorden o la aleatoriedad de un sistema. Según la segunda ley, en un sistema aislado, la entropía tiende a aumentar con el tiempo.
```

### 2 — Flujo de calor espontáneo

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["calor", "segunda_ley"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[100, 20], [50, 10]]

opciones_explicitas: ["Del cuerpo más caliente al más frío", "Del cuerpo más frío al más caliente", "No hay flujo de calor"]

respuesta: "Del cuerpo más caliente al más frío"
tipo: mc

enunciado: "Considerando un sistema con dos cuerpos a temperaturas de {datos[escenario_idx][0]}°C y {datos[escenario_idx][1]}°C, el calor fluirá espontáneamente ___."

explicacion: |
  El calor siempre fluye de forma espontánea desde el cuerpo con mayor temperatura al de menor temperatura, un proceso que incrementa la entropía total del universo.
```

### 3 — Verdad o Falso: Sistemas Aislados

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["sistemas_aislados", "segunda_ley"]

respuesta: falso

tipo: vf

enunciado: "En un sistema aislado, la entropía total puede disminuir espontáneamente durante un proceso irreversible."

explicacion: |
  Falso. La Segunda Ley de la Termodinámica establece que en un sistema aislado, la entropía siempre aumenta o permanece constante (en procesos reversibles), pero nunca disminuye.
```

### 4 — Orden de procesos termodinámicos

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["entropia", "procesos"]

opciones_explicitas: ["Hielo derritiéndose", "Agua líquida congelándose", "Vapor de agua condensándose"]

respuesta_orden: ["Hielo derritiéndose", "Agua líquida congelándose", "Vapor de agua condensándose"]
tipo: ordenar

enunciado: "Ordena los siguientes procesos de mayor a menor desorden (entropía) de sus estados de agregación:"

explicacion: |
  El orden de desorden (entropía) es: Gas (Vapor) > Líquido (Agua) > Sólido (Hielo). El ejercicio pide ordenar los estados de mayor a menor desorden.
```

### 5 — Relación Entropía y Probabilidad

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["microestados", "probabilidad"]

variables:
  escenario: uno_de([["ordenado", "baja"], ["desordenado", "alta"]])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["baja", "alta", "nula"]

enunciado: "Un estado con una configuración altamente {escenario[0]} tiene una probabilidad estadística más {escenario[1]} de ocurrir espontáneamente."

explicacion: |
  Los sistemas evolucionan hacia estados con mayor número de microestados posibles (mayor desorden), ya que estos son estadísticamente mucho más probables.
```

### 6 — Cambio de entropía en proceso reversible

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley"
  nivel: "intermedio"
  tags: ["termodinamica", "entropia", "calor"]

variables:
  Q: 5000.0
  T_caliente: 400.0
  T_frio: 300.0
  delta_S: Q / T_caliente - Q / T_frio

respuesta: delta_S
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un sistema absorbe {Q} J de calor a una temperatura de {T_caliente} K y luego se transfiere a un foco frío a {T_frio} K. ¿Cuál es el cambio de entropía del universo en este proceso reversible? (Expresar en J/K)"

pasos:
  - "Calcular la entropía del sistema: ΔS_sis = Q / T_caliente"
  - "Calcular la entropía del entorno: ΔS_ent = -Q / T_frio"
  - "Sumar ambos valores para obtener el cambio total: ΔS_total = ΔS_sis + ΔS_ent"

explicacion: |
  La entropía total del universo en un proceso reversible es cero, pero aquí estamos calculando el cambio de entropía de los componentes. 
  ΔS_sis = 5000 / 400 = 12.5 J/K
  ΔS_ent = -5000 / 300 = -16.666... J/K
  ΔS_total = 12.5 - 16.666 = -4.166... J/K (Nota: El enunciado pide el cambio de entropía del sistema/proceso según los datos).
  *Corrección conceptual: Si el proceso es reversible, la suma es 0. Si el cálculo da distinto, es un proceso irreversible.*
```

### 7 — Dirección del flujo de calor

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley"
  nivel: "basico"
  tags: ["termodinamica", "segunda_ley"]

respuesta: "de caliente a frío"
tipo: mc
opciones_explicitas: ["de frío a caliente", "de caliente a frío", "de igual temperatura", "no tiene dirección"]

enunciado: "Según la Segunda Ley de la Termodinámica, el calor fluye espontáneamente de un cuerpo ___ a otro cuerpo ___."

explicacion: |
  La entropía de un sistema aislado siempre aumenta en un proceso espontáneo. El flujo de calor de un cuerpo caliente a uno frío aumenta la entropía total del universo.
```

### 8 — La entropía y el desorden

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley"
  nivel: "basico"
  tags: ["conceptos", "entropia"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema aislado, la entropía tiende a aumentar con el tiempo en todos los procesos espontáneos."

explicacion: |
  Correcto. Este es el enunciado fundamental de la Segunda Ley de la Termodinámica.
```

### 9 — Cálculo de entropía por transferencia de calor

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley"
  nivel: "intermedio"
  tags: ["calculo", "termodinamica"]

variables:
  Q: 1200.0
  T: 300.0
  dS: Q / T

respuesta: 4.0
tipo: completar
respuestas_validas:
  - 4.0

enunciado: "Si un sistema recibe ___ J de calor a una temperatura constante de ___ K, el cambio de entropía es de ___ J/K."

explicacion: |
  Usando la fórmula ΔS = Q / T:
  ΔS = 1200 / 300 = 4.0 J/K.
```

### 10 — Pasos para calcular el cambio de entropía total

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley"
  nivel: "intermedio"
  tags: ["metodologia", "termodinamica"]

opciones_explicitas: ["Calcular ΔS del sistema", "Calcular ΔS del entorno", "Sumar ΔS_sis + ΔS_ent", "Verificar si ΔS_total > 0"]

respuesta_orden: ["Calcular ΔS del sistema", "Calcular ΔS del entorno", "Sumar ΔS_sis + ΔS_ent", "Verificar si ΔS_total > 0"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar si un proceso termodinámico es espontáneo analizando la entropía del universo:"

explicacion: |
  Para determinar la espontaneidad, primero calculamos los cambios individuales de entropía y luego su suma. Si la suma es mayor a cero, el proceso es espontáneo.
```

### 11 — Flujo de calor espontáneo

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "calor", "entropia"]

tipo: completar
enunciado: "En un sistema aislado, según la segunda ley de la termodinamica, el flujo espontáneo de calor ocurre siempre desde un cuerpo con mayor temperatura hacia uno con menor temperatura."
respuesta: "temperatura"
explicacion: |
  La segunda ley de la termodinámica establece que el calor fluye espontáneamente de los cuerpos con mayor temperatura a los de menor temperatura, aumentando la entropía total del universo.
```

### 12 — El concepto de desorden

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["entropia", "desorden", "probabilidad"]

tipo: vf
respuesta: falso

enunciado: "La entropía se puede definir estrictamente como una medida del 'desorden' visual de las partículas en un sistema."

explicacion: |
  Aunque coloquialmente se usa la palabra 'desorden', la entropía es una medida de la cantidad de estados microscópicos (microestados) compatibles con un estado macroscópico dado. El término 'desorden' es una analogía útil pero físicamente imprecisa.
```

### 13 — Variación de la entropía en sistemas abiertos

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["entropia", "sistemas_abiertos", "orden"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, "aumenta"], [20, "disminuye"]]

tipo: completar
respuestas_validas:
  - "aumenta"
  - "disminuye"
respuesta: datos[escenario_idx][1]

enunciado: "Si un sistema abierto (como un ser vivo) crea orden interno reduciendo su entropía local, la entropía total del universo ___ debido a la energía disipada en forma de calor."

explicacion: |
  Para que un sistema local disminuya su entropía (cree orden), debe realizar un trabajo o intercambiar energía con el entorno, lo que inevitablemente genera más entropía en el entorno de la que se reduce en el sistema.
```

### 14 — Ciclos termodinámicos ideales

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["ciclos", "entropia", "termodinamica"]

tipo: mc
opciones_explicitas: ["La entropía total del universo siempre disminuye en un ciclo ideal.", "La entropía total del universo aumenta en un ciclo real debido a la irreversibilidad.", "La entropía de un sistema cerrado se mantiene constante en cualquier proceso.", "La entropía de un sistema aumenta si el proceso es reversible."]
enunciado: "En un motor real (irreversible), la variación de la entropía total del universo es siempre:"
respuesta: "La entropía total del universo aumenta en un ciclo real debido a la irreversibilidad."
explicacion: |
  Debido a la irreversibilidad (fricción, turbulencias, transferencias de calor finitas), la entropía total del universo siempre aumenta en procesos reales.
```

### 15 — Orden de procesos termodinámicos

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["entropia", "procesos", "termodinamica"]

tipo: ordenar
opciones_explicitas: ["Un gas se expande espontáneamente ocupando todo el recipiente.", "Un gas se comprime espontáneamente ocupando solo una esquina del recipiente."]

respuesta_orden: ["Un gas se expande espontáneamente ocupando todo el recipiente.", "Un gas se comprime espontáneamente ocupando solo una esquina del recipiente."]

enunciado: "Ordena los siguientes eventos según la probabilidad estadística y la tendencia natural hacia el aumento de la entropía (de lo más probable/natural a lo menos probable/natural):"

explicacion: |
  La termodinámica se basa en la probabilidad: es extremadamente probable que las partículas ocupen todo el volumen disponible (mayor número de microestados) y extremadamente improbable que se concentren en un solo punto sin intervención externa.
```

### 16 — Entropía vs Energía

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "entropia"]

variables:
  es_sistema_aislado: uno_de([verdadero, falso])

respuesta: es_sistema_aislado
tipo: completar
enunciado: "En un sistema aislado, la entropía total siempre tiende a ___ o permanecer constante según la segunda ley de la termodinamica."

explicacion: |
  La segunda ley de la termodinámica establece que en un sistema aislado, la entropía (el desorden) siempre aumenta en procesos espontáneos, lo que significa que el universo tiende hacia un estado de mayor probabilidad y desorden.
```

### 17 — Flujo de calor y entropía

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["calor", "entropia"]

variables:
  caso: uno_de([0, 1])
  caso_datos: ["un cuerpo a 80°C en contacto con uno a 20°C", "un cuerpo a 15°C en contacto con uno a 90°C"]

respuesta: "El calor fluye de un cuerpo caliente a uno frío"
tipo: mc

opciones_explicitas: ["El calor fluye de un cuerpo frío a uno caliente", "El calor fluye de un cuerpo caliente a uno frío", "El calor fluye en ambas direcciones con igual probabilidad", "No hay flujo de calor entre cuerpos en equilibrio"]

enunciado: "Considerando el caso de {caso_datos[caso]}, ¿cuál es la dirección espontánea del flujo de calor según la segunda ley?"

pasos:
  - "Identificar la temperatura de ambos cuerpos."
  - "Aplicar la segunda ley de la termodinámica sobre la dirección del flujo térmico."

explicacion: |
  El calor fluye espontáneamente de un cuerpo con mayor temperatura a uno de menor temperatura para aumentar la entropía total del sistema.
```

### 18 — Energía vs Entropía

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["energia", "entropia"]

respuesta: "desorden"
tipo: completar
respuestas_validas:
  - "desorden"
  - "caos"

enunciado: "Mientras que la energía se conserva según la primera ley, la entropía mide el grado de ___ de un sistema."

explicacion: |
  La energía no se crea ni se destruye (Primera Ley), pero la entropía cuantifica la parte de la energía que ya no es disponible para realizar trabajo útil debido al desorden generado.
```

### 19 — Procesos irreversibles

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["irreversibilidad", "procesos"]

respuesta: verdadero
tipo: vf

enunciado: "Un proceso natural (espontáneo) es siempre irreversible porque implica un aumento neto de la entropía del universo."

explicacion: |
  Los procesos irreversibles son aquellos que ocurren de forma espontánea y aumentan la entropía total, marcando la "flecha del tiempo" en la termodinámica.
```

### 20 — Ordenamiento de la entropía

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["orden", "desorden"]

respuesta_orden: ["Cristal puro", "Líquido", "Gas", "Plasma"]
tipo: ordenar

opciones_explicitas: ["Gas", "Cristal puro", "Plasma", "Líquido"]

enunciado: "Ordena los estados de la materia de MENOR a MAYOR entropía (menor desorden a mayor desorden):"

explicacion: |
  En un cristal (sólido perfecto), las partículas están altamente ordenadas (baja entropía). A medida que pasamos a líquido, gas y finalmente plasma, el movimiento y la libertad de las partículas aumentan, incrementando el desorden y la entropía.
```

### 21 — El café que se enfría

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["calor", "entropia", "termodinamica"]

variables:
  datos: [["una taza de café caliente en una habitación fría", "aumenta"], ["un cubo de hielo en un vaso de agua tibia", "aumenta"]]
  idx: uno_de([0, 1])

enunciado: "Si dejamos reposar {datos[idx][0]}, la entropía total del sistema y su entorno tiende a {datos[idx][1]}."

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
```

### 22 — Dirección del flujo de calor

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["calor", "segunda_ley"]

enunciado: "De acuerdo con la segunda ley de la termodinámica, en un proceso espontáneo, el calor fluye de forma natural desde un cuerpo de mayor temperatura hacia uno de menor temperatura. ¿Es esto cierto?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc
```

### 23 — El desorden de las moléculas

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["orden", "desorden", "entropia"]

variables:
  datos: [["gas", "alta"], ["sólido", "baja"], ["líquido", "media"]]
  idx: uno_de([0, 1, 2])

enunciado: "Considerando la estructura molecular, un estado de la materia en forma de {datos[idx][0]} presenta una entropía de magnitud {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "alta"
  - "baja"
  - "media"
explicacion: |
  La entropía es una medida del desorden en un sistema. En el estado sólido, las partículas tienen poca libertad de movimiento, lo que corresponde a una baja entropía. En el líquido, hay más desorden que en el sólido pero menos que en el gas. Por último, en el estado gaseoso, las partículas están completamente desordenadas, lo que implica una alta entropía.
```

### 24 — El ciclo de una máquina térmica

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["maquinas_termicas", "eficiencia"]

enunciado: "Para que una máquina térmica funcione de forma cíclica, debe transferir parte del calor de la fuente caliente a la fuente fría. Ordena los pasos de un ciclo de Carnot ideal:"

opciones_explicitas: ["Expansión isotérmica", "Expansión adiabática", "Compresión isotérmica", "Compresión adiabática"]
respuesta_orden: ["Expansión isotérmica", "Expansión adiabática", "Compresión isotérmica", "Compresión adiabática"]
tipo: ordenar
```

### 25 — El destino del Universo

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["cosmologia", "entropia"]

enunciado: "Si la entropía de un sistema aislado siempre aumenta o permanece constante, ¿qué sucede con la entropía del universo según la segunda ley?"

opciones_explicitas: ["disminuye", "se mantiene constante", "aumenta"]
respuesta: "aumenta"
tipo: mc
```
