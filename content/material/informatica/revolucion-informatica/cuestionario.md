# Informatica — Revolucion informatica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El origen de la computación moderna

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "computadoras"]

respuesta: "ENIAC"
tipo: completar
respuestas_validas:
  - "ENIAC"

enunciado: "La primera computadora electrónica de propósito general, utilizada para cálculos balísticos durante la Segunda Guerra Mundial, fue la ___."

explicacion: |
  La ENIAC (Electronic Numerical Integrator and Computer) fue una de las primeras computadoras electrónicas de gran escala, marcando el inicio de la era de la computación moderna.
```

### 2 — Evolución de los componentes

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "transistores"]

variables:
  tecnologia_actual: "transistores"

respuesta: "transistores"
tipo: mc
opciones_explicitas: ["tubos de vacío", "transistores", "microprocesadores"]

enunciado: "La transición de la primera a la segunda generación de computadoras se caracterizó por el reemplazo de los tubos de vacío por una tecnología más pequeña y eficiente."

explicacion: |
  La primera generación usaba tubos de vacío (grandes y calientes), mientras que la segunda generación introdujo el transistor, permitiendo miniaturización y mayor fiabilidad.
```

### 3 — La era de la computación personal

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["pc", "historia"]

respuesta: "Apple II"
tipo: mc
opciones_explicitas: ["ENIAC", "Altair 8800", "Apple II", "IBM PC"]

enunciado: "¿Cuál de estos dispositivos fue uno de los primeros en popularizar la computación personal masiva a finales de los años 70 y principios de los 80?"

explicacion: |
  El Apple II fue uno de los primeros computadores personales con gráficos a color y capacidad de uso doméstico, impulsando la revolución de la informática personal.
```

### 4 — El orden de los hitos tecnológicos

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

respuesta_orden: ["Tubos de vacío", "Transistores", "Circuitos Integrados", "Microprocesadores"]
tipo: ordenar
opciones_explicitas: ["Tubos de vacío", "Transistores", "Circuitos Integrados", "Microprocesadores"]

enunciado: "Ordena cronológicamente las tecnologías que permitieron la miniaturización de las computadoras:"

explicacion: |
  La evolución siguió este orden: Tubos de vacío (1ra gen) -> Transistores (2da gen) -> Circuitos Integrados (3ra gen) -> Microprocesadores (4ta gen).
```

### 5 — El impacto de la Ley de Moore

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["ley_de_moore", "teoria"]

variables:
  valor_doble: 2

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["lineal", "exponencial", "decreciente", "constante"]

enunciado: "La revolución informática se vio acelerada por la Ley de Moore, la cual predice que el número de transistores en un chip se duplica aproximadamente cada {valor_doble} años, lo que implica un crecimiento de tipo ___."

explicacion: |
  La Ley de Moore describe un crecimiento exponencial de la capacidad de procesamiento, lo que permitió pasar de máquinas que ocupaban habitaciones a dispositivos que caben en un bolsillo.
```

### 6 — Evolución de los componentes electrónicos

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["hardware", "historia"]

respuesta: "v"
tipo: "mc"

opciones_explicitas: ["v", "t", "i", "m"]

enunciado: "Las primeras computadoras de gran escala, como la ENIAC, utilizaban principalmente ________ de vacío para realizar sus operaciones lógicas."

explicacion: |
  Las válvulas de vacío (o tubos de vacío) fueron los componentes fundamentales de la primera generación de computadoras, antes de la invención del transistor.
```

### 7 — Hitos de la miniaturización

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "historia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, "Transistor"], [1, "Circuito Integrado"]]

respuesta: datos[escenario_idx][1]
tipo: "mc"

opciones_explicitas: ["Transistor", "Circuito Integrado", "Microprocesador", "CPU"]

enunciado: "La invención del {datos[escenario_idx][0]} permitió reemplazar las válvulas de vacío, reduciendo drásticamente el tamaño y el calor de las máquinas."

explicacion: |
  El transistor permitió la segunda generación de computadoras, permitiendo que fueran más pequeñas y confiables que las de válvulas.
```

### 8 — La era del microprocesador

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["hardware", "historia"]

respuesta: "1971"
tipo: "completar"

respuestas_validas:
  - "1971"
  - "1972"

enunciado: "El primer microprocesador comercial, el Intel 4004, fue lanzado en el año ___."

explicacion: |
  El Intel 4004 marcó el inicio de la era de la integración a gran escala, permitiendo que toda la unidad de procesamiento residiera en un solo chip.
```

### 9 — Cronología de la computación

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["historia", "ordenar"]

tipo: ordenar

opciones_explicitas: ["Válvula de vacío", "Transistor", "Circuito Integrado", "Microprocesador"]

respuesta_orden: ["Válvula de vacío", "Transistor", "Circuito Integrado", "Microprocesador"]

enunciado: "Ordena cronológicamente los hitos tecnológicos que permitieron la evolución del hardware de computación:"

explicacion: |
  La evolución siguió este orden: Válvulas (1ra gen), Transistores (2da gen), Circuitos Integrados (3ra gen) y Microprocesadores (4ta gen).
```

### 10 — El auge de la PC

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["usuario", "historia"]

respuesta: verdadero
tipo: vf

enunciado: "¿La llegada de la computadora personal (PC) a los hogares en los años 70 y 80 fue posible gracias a la integración masiva de microprocesadores?"

explicacion: |
  Correcto. La capacidad de integrar la CPU en un solo chip permitió que las computadoras pasaran de ocupar habitaciones enteras a ser dispositivos de escritorio accesibles.
```

### 11 — El concepto de la Ley de Moore

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "hardware"]

tipo: mc
opciones_explicitas: ["La velocidad de procesamiento", "La capacidad de almacenamiento", "La densidad de transistores en un chip", "El costo de los componentes electrónicos"]

enunciado: "La Ley de Moore es una observación histórica que predice el aumento de la densidad de ___ en un circuito integrado cada dos años aproximadamente."

respuesta: "La densidad de transistores en un chip"

explicacion: |
  Gordon Moore, cofundador de Intel, observó que el número de transistores en un microchip se duplicaba aproximadamente cada dos años, lo que impulsó la miniaturización de la tecnología.
```

### 12 — Cálculo de progresión

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["calculo", "hardware"]

variables:
  idx: uno_de([0, 1])
  datos: [["1000", "2000"], ["500", "1000"]]
  base: datos[idx][0]
  doble: datos[idx][1]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un chip tiene {base} transistores hoy, siguiendo la Ley de Moore, ¿cuántos transistores tendrá aproximadamente en el próximo ciclo de dos años?"

respuesta: "doble"

pasos:
  - "Identificar la cantidad actual de transistores."
  - "Aplicar el factor de duplicación (x2) según la ley."

explicacion: |
  La Ley de Moore establece que la cantidad de transistores se duplica. Por lo tanto, {base} * 2 = {doble}.
```

### 13 — Evolución tecnológica

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "procesadores"]

tipo: ordenar
opciones_explicitas: ["Aumento de transistores", "Reducción del tamaño de los componentes", "Aumento de la potencia de cómputo", "Reducción de costos por transistor"]

enunciado: "Ordena los efectos causados por la aplicación de la Ley de Moore en la tecnología, desde la causa técnica hasta el efecto en el consumidor final:"

respuesta_orden: ["Aumento de transistores", "Reducción del tamaño de los componentes", "Aumento de la potencia de cómputo", "Reducción de costos por transistor"]

explicacion: |
  La Ley de Moore describe un ciclo: más transistores en menos espacio permiten chips más potentes y, con la escala de producción, más económicos.
```

### 14 — Relación de conceptos

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["teoria", "hardware"]

tipo: completar
respuestas_validas:
  - "potencia"
  - "capacidad"

enunciado: "Debido al aumento exponencial de transistores, la ___ de procesamiento de los ordenadores ha crecido de forma similar a lo largo de las últimas décadas."

respuesta: "potencia"

explicacion: |
  Al integrar más transistores en un mismo espacio, el procesador puede realizar más operaciones por segundo, aumentando su potencia.
```

### 15 — Verdad o Falso

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["conceptos"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "La Ley de Moore es una ley física inmutable de la naturaleza, similar a la Ley de la Gravedad."

respuesta: "Falso"

explicacion: |
  No es una ley física, sino una observación empírica y una meta industrial que ha guiado la planificación de la industria de los semiconductores.
```

### 16 — El impacto de la conectividad

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["internet", "economia"]

tipo: mc
opciones_explicitas: ["Descentralización de la información", "Aumento de la burocracia física", "Reducción de la velocidad de comunicación", "Eliminación del comercio electrónico"]
respuesta: "Descentralización de la información"

enunciado: "La combinación de la revolución informática y el internet ha permitido la ________ de la información, permitiendo el acceso global a datos en tiempo real."

explicacion: |
  La digitalización ha democratizado el acceso a la información, rompiendo las barreras geográficas y temporales que existían antes de la era de internet.
```

### 17 — Modelos de negocio digitales

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["economia_digital", "e-commerce"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["comercio_electronico", "servicios_streaming"], ["ventas_retail_fisico", "suscripciones_digitales"]]

tipo: completar
respuestas_validas:
  - "comercio_electronico"
  - "servicios_streaming"
respuesta: escenarios[escenario_idx][1]

enunciado: "Un ejemplo clave de la transformación económica es el paso de modelos basados en el ________ hacia modelos basados en las ________."

explicacion: |
  La economía ha migrado de la propiedad física y el comercio en locales hacia el consumo de servicios bajo demanda y plataformas digitales.
```

### 18 — La velocidad de la información

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["comunicacion", "impacto_social"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si en la era industrial la comunicación se basaba en el telégrafo y el correo físico, en la era informática la comunicación es instantánea. Si comparamos la velocidad de un mensaje de texto con un correo físico que tarda 3 días, y el mensaje tarda 0 segundos, ¿cuántos segundos de ahorro representa el mensaje digital frente al correo?"

pasos:
  - "Convertir 3 días a segundos: 3 * 24 * 60 * 60 = 259200"
  - "Restar el tiempo del mensaje digital (0) al tiempo del correo (259200)"

respuesta: 259200

explicacion: |
  La inmediatez es una de las características fundamentales de la revolución informática, permitiendo la globalización de los mercados en tiempo real.
```

### 19 — Evolución de la computación

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["hardware", "historia"]

tipo: ordenar
opciones_explicitas: ["Mainframes gigantescos", "Computadoras personales (PC)", "Dispositivos móviles y smartphones"]

enunciado: "Ordena cronológicamente los hitos tecnológicos que permitieron la integración de la informática en la vida cotidiana:"

respuesta_orden: ["Mainframes gigantescos", "Computadoras personales (PC)", "Dispositivos móviles y smartphones"]

explicacion: |
  La computación comenzó en grandes centros de datos corporativos, pasó a los escritorios de los hogares con la PC y finalmente se volvió ubicua con los smartphones.
```

### 20 — El impacto en el empleo

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "avanzado"
  tags: ["trabajo", "automatizacion"]

tipo: mc
opciones_explicitas: ["Automatización de tareas repetitivas", "Desaparición total del trabajo humano", "Aumento de la necesidad de archivos físicos", "Reducción de la conectividad global"]
respuesta: "Automatización de tareas repetitivas"

enunciado: "Un efecto crítico de la revolución informática en la economía laboral es la ________, lo que obliga a la fuerza de trabajo a especializarse en tareas de mayor valor cognitivo."

explicacion: |
  La automatización impulsada por software y algoritmos ha transformado la estructura del empleo, eliminando tareas mecánicas pero creando nuevas demandas tecnológicas.
```

### 21 — Hitos de la computación temprana

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["historia", "ordenar"]

tipo: ordenar
opciones_explicitas: ["ENIAC", "Transistor", "PC"]
respuesta_orden: ["ENIAC", "Transistor", "PC"]

enunciado: "Ordena cronológicamente los siguientes hitos tecnológicos: ENIAC, Transistor y PC."

explicacion: |
  El orden cronológico correcto es:
  1. ENIAC (1945) -> 2. Transistor (1947) -> 3. PC (años 70/80).
```

### 22 — El primer lenguaje de programación

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["lenguajes", "historia"]

variables:
  figuras: ["Ada Lovelace", "Grace Hopper", "John Backus"]
  idx: uno_de([0, 1, 2])
  figura_correcta: figuras[idx]

respuesta: figura_correcta
tipo: mc

opciones_explicitas: ["Ada Lovelace", "Grace Hopper", "John Backus", "Alan Turing"]

enunciado: "Identifica a la figura histórica asociada a los primeros algoritmos para la Máquina Analítica: {figura_correcta}."

explicacion: |
  {figura_correcta} es reconocida históricamente por haber escrito el primer algoritmo destinado a ser procesado por una máquina.
```

### 23 — Evolución del almacenamiento

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["hardware", "almacenamiento"]

variables:
  casos: [["Disquete", "CD-ROM", "USB"], ["Disco Duro", "Cassette", "SSD"]]
  idx: uno_de([0,1])
  respuesta_correcta: casos[idx][0]

tipo: completar
respuesta: respuesta_correcta
respuestas_validas:
  - "Disquete"
  - "CD-ROM"
  - "USB"
  - "Disco Duro"
  - "Cassette"
  - "SSD"

enunciado: "En la evolución del almacenamiento magnético y óptico, el dispositivo que precede al siguiente es: ___."

explicacion: |
  El orden de evolución tecnológica en el escenario seleccionado es: {casos[idx][0]} -> {casos[idx][1]} -> {casos[idx][2]}.
```

### 24 — El nacimiento de la World Wide Web

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "intermedio"
  tags: ["internet", "web"]

respuesta: "Tim Berners-Lee"
tipo: mc

opciones_explicitas: ["Tim Berners-Lee", "Vint Cerf", "Marc Andreessen", "Steve Jobs"]

enunciado: "¿Quién es el creador de la World Wide Web (WWW) según el contexto de la revolución digital?"

explicacion: |
  Tim Berners-Lee inventó la WWW en el CERN, permitiendo la democratización de la información en la red.
```

### 25 — La era de la movilidad

```
metadata:
  materia: "informatica"
  tema: "revolucion_informatica"
  nivel: "basico"
  tags: ["movilidad", "hardware"]

variables:
  tecnologias: [["Teléfono Fijo", "Teléfono Móvil", "Smartphone"], ["Radio", "Walkman", "iPod"]]
  idx: uno_de([0,1])

respuesta: tecnologias[idx][2]
tipo: mc

opciones_explicitas: ["Teléfono Fijo", "Teléfono Móvil", "Smartphone", "Radio", "Walkman", "iPod"]

enunciado: "Identifica el dispositivo que representa la etapa final de la evolución de la comunicación/reproducción en este escenario: ___."

explicacion: |
  La evolución tecnológica sigue una línea de miniaturización y conectividad: {tecnologias[idx][0]} -> {tecnologias[idx][1]} -> {tecnologias[idx][2]}.
```
