# Fisica — Decaimiento radiactivo alfa beta gamma (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Partícula Alfa

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["nucleo", "alfa"]

respuesta: "núcleo de helio"
tipo: completar
respuestas_validas:
  - "núcleo de helio"
  - "particula alfa"

enunciado: "La radiación alfa consiste en la emisión de un ___."

explicacion: |
  Una partícula alfa es idéntica al núcleo de un átomo de helio, compuesta por dos protones y dos neutrones.
```

### 2 — Carga de la radiación Beta

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["beta", "electrones"]

respuesta: "negativa"
tipo: mc
opciones_explicitas: ["positiva", "negativa", "neutra"]

enunciado: "En el decaimiento beta menos ($\\beta^-$), un neutrón se transforma en un protón y se emite una partícula de carga ___."

explicacion: |
  En el decaimiento beta menos, el neutrón se convierte en protón y emite un electrón (carga negativa).
```

### 3 — Naturaleza de la radiación Gamma

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

respuesta: verdadero
tipo: vf

enunciado: "¿La radiación gamma está compuesta por fotones de alta energía y no posee carga eléctrica ni masa?"

explicacion: |
  Correcto. A diferencia de las partículas alfa y beta, la radiación gamma es energía electromagnética pura (fotones).
```

### 4 — Comparación de alcance

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["alcance", "radiacion"]

variables:
  datos: [["alfa", "muy corto"], ["beta", "moderado"], ["gamma", "muy alto"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["muy corto", "moderado", "muy alto"]

enunciado: "El alcance de la radiación tipo {datos[idx][0]} en el aire es ___."

explicacion: |
  La partícula alfa tiene un alcance muy corto (se detiene con una hoja de papel), la beta un alcance moderado y la gamma un alcance muy alto.
```

### 5 — Secuencia de desintegración

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["secuencia", "nucleo"]

respuesta_orden: ["emisión de partículas alfa", "emisión de partículas beta", "emisión de radiación gamma"]
tipo: ordenar
opciones_explicitas: ["emisión de partículas alfa", "emisión de partículas beta", "emisión de radiación gamma"]

enunciado: "Ordene las siguientes emisiones según su capacidad de penetración (de menor a mayor):"

explicacion: |
  La radiación alfa tiene la menor capacidad de penetración, seguida por la beta, mientras que la gamma es la más penetrante.
```

### 6 — Identificación de radiación alfa

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["nucleica", "particulas"]

enunciado: "Una partícula alfa consiste en un núcleo de helio. Por lo tanto, una partícula alfa está compuesta por ___ neutrones y ___ protones."

respuestas_validas:
  - "2"
  - "2"

respuesta: ["2", "2"]
tipo: completar

explicacion: |
  Una partícula alfa ($\alpha$) es idéntica al núcleo de un átomo de Helio-4, lo que significa que contiene 2 protones y 2 neutrones (carga +2 y masa 4).
```

### 7 — Decaimiento Beta negativa

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["beta", "nucleica"]

variables:
  escenario: uno_de([[14, 15], [238, 239], [12, 13]])

enunciado: "Un núcleo radiactivo de un isótopo con número de masa {escenario[0]} emite una partícula beta negativa ($\\beta^-$). ¿Cuál será el número de masa del nuevo núcleo resultante?"

opciones_explicitas: [escenario[0], escenario[1], 1]

respuesta: escenario[0]
tipo: mc

explicacion: |
  En el decaimiento $\beta^-$, un neutrón se transforma en un protón y emite un electrón. El número de masa ($A$) permanece constante porque la suma de protones y neutrones no cambia.
```

### 8 — Vida media y decaimiento

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["calculo", "vida_media"]

variables:
  datos: uno_de([[100, 10, 50], [80, 5, 40], [200, 20, 100]])

enunciado: "Una muestra contiene {datos[0]} gramos de una sustancia con una vida media de {datos[1]} años. ¿Cuánta masa de la sustancia permanecerá después de transcurridos {datos[1]} años (es decir, una vida media)?"

respuesta: datos[2]
tipo: completar
tolerancia_abs: 0.001

pasos:
  - "Identificar la masa inicial: {datos[0]} g"
  - "Identificar el tiempo transcurrido: {datos[1]} años"
  - "Identificar la vida media: {datos[1]} años"
  - "Aplicar la fórmula de decaimiento: N(t) = N0 * (1/2)^(t/T1/2)"
  - "Calcular: N(t) = {datos[0]} * (1/2)^1 = {datos[2]}"

explicacion: |
  Después de transcurrir una vida media, la cantidad de la sustancia se reduce exactamente a la mitad de su valor inicial.
```

### 9 — Identificación de la radiación alfa

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["particulas", "alfa"]

respuesta: "particula_alfa"
tipo: mc
opciones_explicitas: ["particula_alfa", "particula_beta", "fotón_gamma"]

enunciado: "Un núcleo emite una partícula con carga eléctrica +2 y masa equivalente a dos nucleones. ¿Qué tipo de radiación es?"

explicacion: |
  La radiación alfa consiste en núcleos de helio (2 protones y 2 neutrones), por lo que su carga es +2.
```

### 10 — Naturaleza de la radiación gamma

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

respuesta: falso
tipo: vf

enunciado: "¿La radiación gamma consiste en la emisión de partículas con masa y carga eléctrica?"

explicacion: |
  Falso. La radiación gamma es radiación electromagnética (fotones), por lo tanto, no tiene masa ni carga eléctrica.
```

### 11 — Efecto del decaimiento beta en el número atómico

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["beta", "nucleidos"]

variables:
  datos: [[6, 7], [11, 12], [26, 27]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo de número atómico {datos[idx][0]} sufre un decaimiento beta menos (emisión de un electrón). El nuevo número atómico será ___."

respuestas_validas:
  - "7"
  - "12"
  - "27"

explicacion: |
  En el decaimiento beta menos, un neutrón se transforma en un protón, aumentando el número atómico en 1.
```

### 12 — Comparación de capacidad de penetración

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetracion", "radiacion"]

respuesta_orden: ["alfa", "beta", "gamma"]
tipo: ordenar

opciones_explicitas: ["alfa", "beta", "gamma"]

enunciado: "Ordena las siguientes radiaciones de MENOR a MAYOR capacidad de penetración en la materia:"

explicacion: |
  La radiación alfa es detenida por una hoja de papel; la beta requiere algo más denso (como aluminio) y la gamma requiere materiales muy densos como plomo o concreto.
```

### 13 — La confusión entre partícula y energía

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["gamma", "emision"]

respuesta: "fotón"
tipo: mc
opciones_explicitas: ["fotón", "electrón", "neutrón"]

enunciado: "A menudo se confunde la emisión de partículas con la emisión de energía pura. ¿Cuál de estas emisiones es puramente energía electromagnética sin masa?"

explicacion: |
  La radiación gamma es la emisión de energía en forma de fotones, a diferencia de las partículas alfa o beta que poseen masa.
```

### 14 — Identificación de la radiación alfa

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["alfa", "particula", "carga"]

enunciado: "La radiación alfa está compuesta por un núcleo de helio, lo que significa que posee una carga eléctrica de ___."

respuestas_validas:
  - "+2"
  - "+2"
  - "+2"
respuesta: "+2"
tipo: completar

explicacion: |
  Una partícula alfa consiste en 2 protones y 2 neutrones, resultando en una carga de +2.
```

### 15 — Comparación de poder de penetración

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetración", "alfa", "beta", "gamma"]

opciones_explicitas: ["La radiación gamma tiene mayor capacidad de penetración que la beta", "La radiación alfa tiene mayor capacidad de penetración que la gamma", "La radiación beta tiene mayor capacidad de penetración que la alfa"]

enunciado: "Considerando la capacidad de atravesar la materia, ¿cuál de las siguientes afirmaciones es correcta?"

respuesta: "La radiación gamma tiene mayor capacidad de penetración que la beta"
tipo: mc

explicacion: |
  La radiación gamma, al ser una onda electromagnética de alta energía sin masa ni carga, atraviesa la materia con mucha más facilidad que las partículas alfa o beta.
```

### 16 — Naturaleza de la radiación gamma

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

enunciado: "¿Es la radiación gamma una partícula con masa y carga eléctrica?"

respuesta: falso
tipo: vf

explicacion: |
  A diferencia de las partículas alfa y beta, la radiación gamma es radiación electromagnética (fotones) y no posee masa ni carga.
```

### 17 — Diferencia entre decaimiento beta y alfa

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["beta", "neutrino", "nucleo"]

enunciado: "En un decaimiento beta negativo, un neutrón se transforma en un protón y emite una partícula tipo ___ para conservar la carga."

pasos:
  - "Identificar la partícula emitida en el decaimiento beta-"
  - "Comparar con la composición del núcleo"

respuestas_validas:
  - "electrón"
  - "electrón"
respuesta: "electrón"
tipo: completar

explicacion: |
  En el decaimiento beta menos, un neutrón se convierte en un protón, emitiendo un electrón (partícula beta) y un antineutrino.
```

### 18 — Secuencia de interacción con la materia

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["interacción", "materia", "orden"]

opciones_explicitas: ["Gamma", "Beta", "Alfa"]

enunciado: "Ordena las radiaciones de mayor a menor capacidad de penetración (de la que más atraviesa a la que menos atraviesa):"

respuesta_orden: ["Gamma", "Beta", "Alfa"]
tipo: ordenar

explicacion: |
  El orden de penetración es: Gamma (máxima, atraviesa casi todo), Beta (media, requiere láminas de aluminio) y Alfa (mínima, es detenida por una hoja de papel).
```

### 19 — Identificación de radiación alfa

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["alfa", "particulas", "radiactividad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["un detector de humo detecta una partícula con carga +2 y masa de 4 unidades de masa atómica", "particula_alfa"], ["un emisor de partículas emite un núcleo de helio", "particula_alfa"]]

enunciado: "En el siguiente escenario: {escenarios[escenario_idx][0]}, la radiación emitida es una ___."

respuestas_validas:
  - "particula_alfa"

respuesta: escenarios[escenario_idx][1]
tipo: completar

explicacion: |
  La radiación alfa consiste en núcleos de helio (2 protones y 2 neutrones), por lo que tienen carga +2.
```

### 20 — Comparación de poder de penetración

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetracion", "gamma", "alfa"]

variables:
  tipo_rad: uno_de([0,1,2])
  datos: [["alfa", "papel"], ["beta", "aluminio"], ["gamma", "plomo"]]

enunciado: "Si nos enfrentamos a una radiación tipo {datos[tipo_rad][0]}, el material necesario para detenerla es aproximadamente una lámina de {datos[tipo_rad][1]}."

opciones_explicitas: ["papel", "aluminio", "plomo"]

respuesta: datos[tipo_rad][1]
tipo: mc

explicacion: |
  Las partículas alfa son detenidas por una hoja de papel; las beta por aluminio delgado y los rayos gamma requieren materiales densos como el plomo.
```

### 21 — Naturaleza de la radiación beta

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["beta", "electrones"]

enunciado: "¿Es correcto afirmar que la radiación beta consiste en la emisión de un electrón de alta energía?"

respuesta: verdadero
tipo: vf

explicacion: |
  La radiación beta negativa es la emisión de un electrón, mientras que la beta positiva es la emisión de un positrón.
```

### 22 — Secuencia de decaimiento

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["secuencia", "nucleidos"]

enunciado: "Ordene los pasos de un decaimiento alfa para un núcleo de Uranio-238 (U-238) hacia su descendiente inmediato:"

opciones_explicitas: ["Emisión de 2 protones", "Emisión de 2 neutrones", "Transformación en Torio-234"]

respuesta_orden: ["Emisión de 2 protones", "Emisión de 2 neutrones", "Transformación en Torio-234"]
tipo: ordenar

explicacion: |
  En el decaimiento alfa, el núcleo pierde 2 protones y 2 neutrones, reduciendo su número atómico en 2.
```

### 23 — Diferencia entre partícula y radiación

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["gamma", "fotones"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["un núcleo excitado libera energía sin cambiar su número atómico", "fotones"], ["la emisión de energía electromagnética pura", "fotones"]]

enunciado: "En el caso de {casos[caso_idx][0]}, lo que se emite es radiación gamma, la cual está compuesta por ___."

respuestas_validas:
  - "fotones"

respuesta: casos[caso_idx][1]
tipo: completar

explicacion: |
  A diferencia de las partículas alfa o beta, la radiación gamma no tiene masa ni carga, es energía electromagnética (fotones).
```
