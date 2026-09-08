# Fisica — Maquina termica termodinamica nivel2 (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Ciclo de Carnot y Eficiencia

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "carnot", "eficiencia"]

variables:
  temp_caliente: uno_de([600, 800, 1000])
  temp_fria: 300

respuesta: (1 - (temp_fria / temp_caliente)) * 100

tipo: completar
tolerancia_abs: 0.1

enunciado: "Una máquina térmica opera entre una fuente caliente a {temp_caliente} K y una fuente fría a {temp_fria} K. Si la máquina opera bajo un ciclo de Carnot, ¿cuál es su eficiencia térmica expresada en porcentaje (%)?"

pasos:
  - "Calcular la eficiencia de Carnot usando la fórmula: η = 1 - (T_fria / T_caliente)"
  - "Multiplicar el resultado por 100 para obtener el porcentaje."

explicacion: |
  La eficiencia máxima teórica de una máquina térmica está limitada por la diferencia de temperaturas entre las fuentes, según el ciclo de Carnot.
```

### 2 — Primera Ley en Máquinas Térmicas

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "basico"
  tags: ["primera_ley", "calor", "trabajo"]

opciones_explicitas: ["W = Q_H - Q_C", "W = Q_H + Q_C", "W = Q_H / Q_C", "W = Q_C - Q_H"]

respuesta: "W = Q_H - Q_C"

tipo: mc

enunciado: "Según la primera ley de la termodinámica aplicada a una máquina térmica en ciclo, ¿cuál es la expresión que relaciona el trabajo neto (W) con el calor absorbido de la fuente caliente (Q_H) y el calor cedido a la fuente fría (Q_C)?"

explicacion: |
  En un ciclo, la variación de la energía interna es cero, por lo que el calor neto absorbido es igual al trabajo neto realizado por la máquina.
```

### 3 — Conversión de Energía

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["energia", "calor", "trabajo"]

variables:
  calor_absorbido: uno_de([5000, 8000, 12000])
  eficiencia: 0.25

respuesta: calor_absorbido * eficiencia

tipo: completar
tolerancia_abs: 0.1

enunciado: "Una máquina térmica absorbe {calor_absorbido} J de calor de una fuente caliente. Si su eficiencia térmica es del {eficiencia * 100}%, ¿cuánto trabajo mecánico (W) realiza la máquina?"

explicacion: |
  El trabajo realizado es el producto de la energía térmica absorbida por la eficiencia del dispositivo: W = Q_H * η.
```

### 4 — Componentes de una Máquina de Vapor

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "basico"
  tags: ["historia", "componentes", "vapor"]

opciones_explicitas: ["Caldera", "Condensador", "Cilindro", "Pistón"]

respuesta_orden: ["Caldera", "Cilindro", "Pistón", "Condensador"]

tipo: ordenar

enunciado: "Ordene los componentes de una máquina de vapor clásica siguiendo el flujo lógico de la energía: desde la generación de vapor hasta la liberación de calor al ambiente."

explicacion: |
  El vapor se genera en la caldera, expande en el cilindro moviendo el pistón, y finalmente el vapor residual se enfría en el condensador.
```

### 5 — El Segundo Principio y la Entropía

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["entropia", "segundo_principio", "irreversibilidad"]

opciones_explicitas: ["aumento", "disminución", "constancia", "cero"]

respuesta: "aumento"

tipo: mc

enunciado: "En una máquina térmica real (no ideal), debido a las fricciones y las transferencias de calor irreversibles, la entropía total del universo experimenta un/a ___."

explicacion: |
  El segundo principio de la termodinámica establece que en cualquier proceso real e irreversible, la entropía total del sistema más el entorno siempre aumenta.
```

### 6 — Eficiencia de la máquina térmica

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  escenario: uno_de([[1000, 300], [800, 200], [500, 150]])

enunciado: "Una máquina térmica opera entre una fuente caliente a {escenario[0]} K y una fuente fría a {escenario[1]} K. Calcula la eficiencia máxima teórica (eficiencia de Carnot) de esta máquina."

pasos:
  - "Calcular la temperatura de la fuente caliente (Th) y la fuente fría (Tc)."
  - "Aplicar la fórmula de la eficiencia de Carnot: η = 1 - (Tc / Th)."

respuesta: 1 - (escenario[1] / escenario[0])
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La eficiencia de Carnot es la eficiencia máxima posible para cualquier máquina térmica que opere entre dos temperaturas. Se calcula como η = 1 - (T_fria / T_caliente).
```

### 7 — Flujo de energía en el ciclo

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "energia"]

opciones_explicitas: ["Q_caliente", "Q_fria", "W_trabajo"]

enunciado: "En un ciclo termodinámico de una máquina térmica, el calor que se absorbe de la fuente de alta temperatura se denomina ___."

respuesta: "Q_caliente"
tipo: mc

explicacion: |
  El proceso comienza con la absorción de calor de una fuente caliente para realizar trabajo.
```

### 8 — Conservación de la energía

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "primer_ley"]

variables:
  datos: uno_de([[500, 150], [1000, 400], [250, 50]])

enunciado: "Una máquina térmica absorbe {datos[0]} J de calor de una fuente caliente y realiza un trabajo de {datos[1]} J. ¿Cuánta energía se libera como calor a la fuente fría?"

respuesta: datos[0] - datos[1]
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  Según la primera ley de la termodinámica para un ciclo, el calor neto es igual al trabajo neto: Q_h - Q_c = W. Por lo tanto, Q_c = Q_h - W.
```

### 9 — El límite de la eficiencia

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "segunda_ley"]

enunciado: "De acuerdo con la segunda ley de la termodinámica, la eficiencia de una máquina térmica real es siempre ___ que la eficiencia de una máquina de Carnot."

opciones_explicitas: ["menor", "igual", "mayor"]

respuesta: "menor"
tipo: mc

explicacion: |
  La segunda ley establece que es imposible convertir todo el calor absorbido en trabajo; siempre habrá una parte de energía que se degrade y se entregue a la fuente fría.
```

### 10 — Componentes del ciclo termodinámico

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "ciclo"]

opciones_explicitas: ["Absorción de calor", "Expansión (Trabajo)", "Expulsión de calor"]

enunciado: "Ordena las etapas típicas de un ciclo de una máquina térmica desde que recibe energía hasta que completa su ciclo:"

respuesta_orden: ["Absorción de calor", "Expansión (Trabajo)", "Expulsión de calor"]
tipo: ordenar

explicacion: |
  El ciclo consiste en: 1. Absorber calor de la fuente caliente, 2. Realizar trabajo mediante la expansión del fluido, 3. Rechazar el calor sobrante a la fuente fría.
```

### 11 — El límite de la eficiencia

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["segunda_ley", "eficiencia", "calor"]

variables:
  escenario: uno_de([["Una máquina térmica absorbe 1000 J de calor y realiza 400 J de trabajo.", 400], ["Un motor absorbe 500 J de calor y entrega 200 J de trabajo.", 200]])

enunciado: "Según la segunda ley de la termodinámica, la eficiencia de una máquina térmica se define como el trabajo útil dividido por el calor absorbido. En el caso de {escenario[0]}, ¿cuánto trabajo se realizó?"

respuesta: escenario[1]
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  La eficiencia es η = W / Q_in. En el primer caso: 400/1000 = 0.4 (40%). En el segundo: 200/500 = 0.4 (40%). Siempre hay una parte del calor que no se convierte en trabajo.
```

### 12 — El destino del calor residual

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["segunda_ley", "entropia"]

opciones_explicitas: ["Se convierte totalmente en trabajo", "Se transfiere a un foco frío como calor residual", "Se transforma en energía potencial", "Se destruye por la fricción"]

enunciado: "De acuerdo con la segunda ley de la termodinámica, en un ciclo termodinámico, la energía que no se transforma en trabajo debe ser..."

respuesta: "Se transfiere a un foco frío como calor residual"
tipo: mc

explicacion: |
  Es imposible convertir todo el calor absorbido en trabajo. Una parte del calor debe ser expulsada a un foco de menor temperatura para completar el ciclo.
```

### 13 — El ciclo de Carnot

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "avanzado"
  tags: ["carnot", "eficiencia_maxima"]

variables:
  temp_caliente: 600
  temp_frio: 300

enunciado: "Considerando una máquina de Carnot operando entre una fuente caliente a {temp_caliente} K y una fuente fría a {temp_frio} K, ¿cuál es su eficiencia máxima teórica?"

pasos:
  - "Calcular la temperatura absoluta en Kelvin."
  - "Aplicar la fórmula de eficiencia de Carnot: eta = 1 - (T_frio / T_caliente)."

respuesta: 0.5
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La eficiencia de Carnot es eta = 1 - (300/600) = 1 - 0.5 = 0.5 (50%). Incluso en el caso ideal de Carnot, la eficiencia es menor a 1 (100%) si T_frio > 0.
```

### 14 — Conceptos fundamentales

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["conceptos", "leyes"]

opciones_explicitas: ["Calor", "Trabajo", "Temperatura", "Entropía"]

enunciado: "Para que una máquina térmica funcione, es necesario que exista un flujo de ___ desde un cuerpo caliente a uno frío."

respuesta: "Calor"
tipo: mc

explicacion: |
  La transferencia de calor es el motor del proceso; sin un gradiente de temperatura que permita el flujo de calor, no se puede realizar trabajo cíclicamente.
```

### 15 — El problema de la eficiencia perfecta

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["segunda_ley", "imposibilidad"]

respuestas_validas:
  - "imposible"
  - "falso"

enunciado: "Es físicamente ___ construir una máquina térmica que tenga una eficiencia del 100%."

respuesta: "imposible"
tipo: completar

explicacion: |
  La segunda ley de la termodinámica (Enunciado de Kelvin-Planck) establece que es imposible construir un dispositivo que opere en un ciclo y que produzca solamente trabajo a partir de un solo depósito de calor.
```

### 16 — El condensador separado de Watt

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "historia_ciencia", "watt"]

variables:
  escenario: ["Máquina de Newcomen", "calentaba y enfriaba el cilindro en cada ciclo", "causaba una pérdida masiva de energía térmica al enfriar el cilindro"]

enunciado: "En la {escenario[0]}, el principal problema de eficiencia era que el {escenario[1]}."

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["causaba una pérdida masiva de energía térmica al enfriar el cilindro", "permitía que el cilindro permaneciera a la temperatura del vapor"]

explicacion: |
  James Watt introdujo el condensador separado para evitar que el cilindro principal se enfriara en cada ciclo, lo que ahorraba una cantidad enorme de energía y permitía un uso industrial continuo.
```

### 17 — Ciclo termodinámico y eficiencia

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["eficiencia", "termodinamica", "calor"]

variables:
  valor_eficiencia: uno_de([[0.05, "5%"], [0.12, "12%"], [0.25, "25%"]])

enunciado: "Si una máquina térmica industrial de la era de Watt tiene una eficiencia térmica de {valor_eficiencia[1]}, esto significa que solo una parte del calor absorbido se convierte en trabajo. El valor decimal es ___."

respuesta: valor_eficiencia[0]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La eficiencia térmica es la relación entre el trabajo útil obtenido y el calor suministrado. Por ejemplo, un valor de 0.12 representa un 12% de eficiencia.
```

### 18 — Componentes de la máquina de Watt

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "basico"
  tags: ["componentes", "watt", "vapor"]

enunciado: "Ordena los componentes de una máquina de vapor de Watt según el flujo de energía desde la fuente de calor hasta el trabajo mecánico:"

pasos:
  - "Generación de vapor por combustión"
  - "Expansión del vapor en el cilindro"
  - "Movimiento del pistón/émbolo"
  - "Condensación en el condensador separado"

opciones_explicitas: ["Generación de vapor por combustión", "Expansión del vapor en el cilindro", "Condensación en el condensador separado", "Movimiento del pistón/émbolo"]
respuesta_orden: ["Generación de vapor por combustión", "Expansión del vapor en el cilindro", "Movimiento del pistón/émbolo", "Condensación en el condensador separado"]
tipo: ordenar

explicacion: |
  El ciclo comienza con la generación de vapor, seguido de su expansión para mover el pistón, la condensación para recuperar el agua y el movimiento mecánico resultante.
```

### 19 — El impacto del condensador

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "watt", "eficiencia"]

variables:
  efecto: uno_de([["aumentar", "aumentar"], ["disminuir", "disminuir"], ["mantener", "mantener"]])

enunciado: "La introducción del condensador separado por parte de Watt tuvo como objetivo principal ___ la temperatura del cilindro durante el ciclo de expansión."

respuestas_validas:
  - "mantener"
tipo: completar

explicacion: |
  Al condensar el vapor en un recipiente separado, el cilindro principal no necesita ser enfriado con agua fría en cada ciclo, manteniendo su temperatura constante y optimizando el uso del combustible.
```

### 20 — Relación Trabajo-Calor

```
metadata:
  materia: "fisica"
  tema: "maquina_termica_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["leyes_termodinamica", "trabajo", "calor"]

variables:
  caso: uno_de([100, 250, 500])

enunciado: "Una máquina de vapor de Watt recibe {caso} Joules de calor (Qin) y realiza un trabajo de {caso * 0.2} Joules (W). ¿Cuál es su eficiencia térmica (eta = W/Qin) expresada en decimal?"

pasos:
  - "Identificar el trabajo realizado (W)"
  - "Identificar el calor absorbido (Qin)"
  - "Dividir W entre Qin"

respuesta: 0.2
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  La eficiencia se calcula como η = W / Q_in. En este caso: 20 / 100 = 0.2 (o 50 / 250 = 0.2).
```

### 21 — Eficiencia de una máquina térmica

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  escenario: [[150, 0.30], [200, 0.40], [250, 0.50]]
  idx: uno_de([0, 1, 2])

enunciado: "Una máquina térmica absorbe un calor de {escenario[idx][0]} J del foco caliente y realiza un trabajo útil de {escenario[idx][0] * escenario[idx][1]} J. ¿Cuál es la eficiencia térmica de la máquina?"

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [0.20, 0.30, 0.40, 0.50, 0.60]

explicacion: |
  La eficiencia térmica (η) se define como el cociente entre el trabajo útil realizado (W) y el calor absorbido (Q_H):
  η = W / Q_H.
  En este caso: η = {escenario[idx][0] * escenario[idx][1]} / {escenario[idx][0]} = {escenario[idx][1]}.
```

### 22 — Cálculo de eficiencia térmica

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  datos: [[450, 0.25], [600, 0.33], [800, 0.45]]
  idx: uno_de([0, 1, 2])

enunciado: "Si una máquina térmica absorbe {datos[idx][0]} J de calor y su eficiencia es de {datos[idx][1]} (expresada en decimal), ¿cuánto trabajo útil realiza?"

respuesta: datos[idx][0] * datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Usamos la fórmula de eficiencia: W = η × Q_H.
  Sustituyendo: W = {datos[idx][1]} × {datos[idx][0]} = {datos[idx][0] * datos[idx][1]} J.
```

### 23 — Relación calor y trabajo

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  caso: [[120, 0.2], [150, 0.3], [200, 0.5]]
  idx: uno_de([0, 1, 2])

enunciado: "Dada una máquina térmica con una eficiencia de {caso[idx][1]}, si el trabajo realizado es de {caso[idx][0]} J, ¿cuál es el calor absorbido del foco caliente?"

respuesta: caso[idx][0] / caso[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Partiendo de η = W / Q_H, despejamos el calor absorbido: Q_H = W / η.
  Calculamos: {caso[idx][0]} / {caso[idx][1]} = {caso[idx][0] / caso[idx][1]} J.
```

### 24 — Completar la fórmula de eficiencia

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica"]

enunciado: "En una máquina térmica, la eficiencia térmica ($\\eta$) se define como la relación entre el ___ realizado y el ___ absorbido del foco caliente."

respuesta: ["trabajo", "calor"]
tipo: completar
respuestas_validas:
  - "trabajo"
  - "calor"

explicacion: |
  La eficiencia ($\eta$) representa qué fracción de la energía térmica absorbida se convierte en trabajo útil.
  Fórmula: $\eta = W / Q_H$.
```

### 25 — Identificación de componentes

```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica"]

variables:
  valores: [[500, 0.25], [1000, 0.50], [2000, 0.75]]
  idx: uno_de([0, 1, 2])

enunciado: "Si una máquina térmica tiene una eficiencia de {valores[idx][1]} y absorbe {valores[idx][0]} J de calor, el trabajo realizado es de ___ J."

respuesta: valores[idx][0] * valores[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El cálculo es W = Q_H × η.
  Para el escenario seleccionado: {valores[idx][0]} × {valores[idx][1]} = {valores[idx][0] * valores[idx][1]} J.
```
