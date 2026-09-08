# Fisica — Lentes convergentes divergentes (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Lentes convergentes

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes", "definicion"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["divergente", "convergente", "plana"]

enunciado: "Una lente que es más gruesa en el centro que en los bordes se denomina lente ________."

explicacion: |
  Las lentes convergentes tienen su parte central más gruesa y tienden a unir los rayos de luz en un punto llamado foco.
```

### 2 — Comportamiento de la luz

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["luz", "rayos", "optica"]

respuesta: verdadero
tipo: vf
enunciado: "En una lente divergente, los rayos de luz paralelos que inciden sobre ella se separan tras atravesarla."

explicacion: |
  Es verdadero. Las lentes divergentes provocan que los rayos salgan de la lente con una trayectoria que se aleja del eje principal.
```

### 3 — Distancia focal

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["foco", "distancia_focal"]

respuesta: "foco"
tipo: completar
respuestas_validas:
  - "foco"

enunciado: "El punto donde convergen los rayos de luz paralentes después de pasar por una lente convergente se denomina ________."

explicacion: |
  El foco es el punto de intersección de los rayos de luz que han sido refractados por la lente.
```

### 4 — Tipos de lentes según su forma

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["lentes", "forma"]

respuesta_orden: ["Biconvexa", "Menisco convergente", "Bicóncava", "Menisco divergente"]
tipo: ordenar

opciones_explicitas: ["Biconvexa", "Menisco convergente", "Bicóncava", "Menisco divergente"]

enunciado: "Ordena las siguientes lentes de mayor grosor central a menor grosor central (de la que más converge a la que más diverge):"

explicacion: |
  La lente biconvexa es la que tiene mayor grosor en el centro, seguida por las meniscos convergentes, luego las bicóncavas y finalmente las meniscos divergentes.
```

### 5 — Signo de la distancia focal

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["foco", "signo", "convencion"]

respuesta: "negativo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "cero"]

enunciado: "Según la convención de signos en óptica, la distancia focal de una lente divergente es siempre un valor ________."

explicacion: |
  En el sistema de signos estándar, las lentes divergentes tienen una distancia focal negativa, mientras que las convergentes tienen una positiva.
```

### 6 — Tipo de lente y su efecto

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes"]

respuesta: "convergente"
tipo: "mc"
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Una lente que es más gruesa en el centro que en los bordes se denomina lente _______."

explicacion: |
  Las lentes convergentes son más gruesas en el centro y hacen que los rayos de luz se unan en un punto llamado foco.
```

### 7 — Distancia focal y signo

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "foco"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es cierto que una lente divergente tiene una distancia focal negativa en los sistemas de signos estándar?"

explicacion: |
  Correcto. Por convención, las lentes convergentes tienen foco positivo y las divergentes tienen foco negativo.
```

### 8 — Cálculo de la distancia focal

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["calculo", "optica"]

variables:
  distancia_objeto: 10
  distancia_imagen: -30
  distancia_focal: 15

respuesta: 15
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un objeto se coloca a {distancia_objeto} cm de una lente. Se forma una imagen virtual a {distancia_imagen} cm de la lente. ¿Cuál es el valor de la distancia focal de la lente en cm?"

pasos:
  - "Utilizar la ecuación de los lentes delgadas: 1/f = 1/s + 1/s'"
  - "Sustituir los valores: 1/f = 1/{distancia_objeto} + 1/{distancia_imagen}"
  - "Calcular el resultado final para f."

explicacion: |
  Aplicando la fórmula de lentes delgadas: 1/f = 1/s + 1/s'.
  Sustituyendo los valores dados:
  1/f = 1/10 + 1/(-30)
  1/f = 3/30 - 1/30
  1/f = 2/30
  1/f = 1/15
  Por lo tanto, f = 15 cm.
```

### 9 — Cálculo de la distancia focal (Corregido)

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["calculo", "optica"]

variables:
  s: 10
  s_prime: -30
  f_calc: 1 / (1/s + 1/s_prime)

respuesta: 15.0
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un objeto se encuentra a {s} cm de una lente convergente y forma una imagen a {s_prime} cm de la lente. ¿Cuál es la distancia focal de la lente en cm?"

pasos:
  - "Identificar datos: s = 10, s' = -30"
  - "Aplicar la fórmula de Gauss: 1/f = 1/s + 1/s'"
  - "1/f = 1/10 + 1/(-30) = 3/30 - 1/30 = 2/30"
  - "f = 30 / 2 = 15"

explicacion: |
  Usando la ecuación de Gauss: 1/f = 1/10 - 1/30 = 2/30. Al invertir, f = 15 cm.
```

### 10 — Completar la ecuación

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["formula", "optica"]

respuesta: "Gauss"
tipo: "completar"
respuestas_validas:
  - "Gauss"
  - "lentes delgadas"

enunciado: "La relación fundamental para el estudio de lentes delgadas es la ecuación de _______ que relaciona la distancia focal con las distancias del objeto y la imagen."

explicacion: |
  La ecuación de Gauss (o de los lentes delgadas) es la base del estudio de la óptica geométrica.
```

### 11 — Ordenar pasos de resolución

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["metodologia", "optica"]

tipo: ordenar

opciones_explicitas: ["Identificar signos de s y s'", "Aplicar la ecuación de Gauss", "Despejar la variable solicitada", "Verificar la naturaleza de la imagen"]

respuesta_orden: ["Identificar signos de s y s'", "Aplicar la ecuación de Gauss", "Despejar la variable solicitada", "Verificar la naturaleza de la imagen"]

enunciado: "Ordena los pasos lógicos para resolver un problema de distancia de imagen en una lente:"

explicacion: |
  Primero se deben asignar los signos correctos (convención de signos), luego aplicar la fórmula matemática, despejar la incógnita y finalmente interpretar si la imagen es real o virtual según su signo.
```

### 12 — Naturaleza de las lentes

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes"]

respuesta: "divergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

enunciado: "Una lente que hace que los rayos de luz paralelos que pasan a través de ella se separen (diverjan) se denomina lente ________."

explicacion: |
  Las lentes divergentes (cóncavas) separan los rayos de luz, mientras que las convergentes (convexas) los enfocan en un punto.
```

### 13 — Signo de la distancia focal

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["distancia_focal", "signos"]

variables:
  escenario: uno_de([["convergente", "positiva"], ["divergente", "negativa"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["positiva", "negativa"]

enunciado: "En el convenio de signos estándar para la óptica, si nos encontramos con una lente {escenario[0]}, su distancia focal se considera como ________."

explicacion: |
  Por convención, las lentes convergentes tienen distancia focal positiva y las divergentes tienen distancia focal negativa.
```

### 14 — Imagen en lentes divergentes

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["naturaleza_imagen"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que una lente divergente forme una imagen real para un objeto situado en el infinito (rayos paralelos)?"

explicacion: |
  Falso. Las lentes divergentes siempre forman imágenes virtuales, derechas y de menor tamaño para objetos reales.
```

### 15 — El error de la imagen "invertida"

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["confusion_comun", "imagen_virtual"]

variables:
  caso: ["convergente", "virtual"]

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "virtual"

enunciado: "Un error común es pensar que todas las imágenes que vemos a través de una lupa son invertidas. Sin embargo, si usamos una lente {caso[0]} como lupa (con el objeto dentro del foco), la imagen que vemos es de tipo ________."

explicacion: |
  Las lentes divergentes solo producen imágenes virtuales (derechas), mientras que las convergentes pueden producir imágenes reales (invertidas) o virtuales (derechas) dependiendo de la posición del objeto.
```

### 16 — Formación de la imagen (Pasos)

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["proceso_optico"]

respuesta_orden: ["emisión", "refracción", "enfoque"]
tipo: ordenar
opciones_explicitas: ["emisión", "refracción", "enfoque"]

enunciado: "Ordena los pasos lógicos que ocurren cuando un objeto real es proyectado por una lente convergente sobre una pantalla:"

pasos:
  - "El objeto emite rayos de luz."
  - "La luz atraviesa la lente y cambia de dirección."
  - "Los rayos se cruzan en un punto sobre la pantalla."

explicacion: |
  Primero el objeto emite la luz, luego la lente refracta los rayos y finalmente estos convergen en un punto para formar la imagen.
```

### 17 — Diferencia de curvatura

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes"]

opciones_explicitas: ["Las lentes convergentes son más gruesas en el centro que en los bordes", "Las lentes divergentes son más gruesas en el centro que en los bordes", "Ambas tienen la misma forma"]

respuesta: "Las lentes convergentes son más gruesas en el centro que en los bordes"
tipo: mc

enunciado: "En términos de su geometría física, la principal distinción respecto a su espesor es que ___."

explicacion: |
  Las lentes convergentes (o biconvexas) tienen un centro más grueso que sus bordes, lo que permite que los rayos de luz se unan en un punto focal. Las divergentes (bicóncavas) son más delgadas en el centro.
```

### 18 — Comportamiento de los rayos

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "rayos_luz"]

variables:
  tipo_lente: uno_de(["convergente", "divergente"])

respuesta: tipo_lente == "divergente"
tipo: vf
enunciado: "Si utilizamos una lente {tipo_lente}, los rayos de luz paralelos que inciden sobre ella se separan (divergen) tras el paso por la lente."

explicacion: |
  En una lente convergente, los rayos se acercan entre sí para pasar por un punto común. En una divergente, los rayos se alejan.
```

### 19 — Naturaleza de la imagen

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["imagen", "foco"]

variables:
  escenario: uno_de([0, 1])
  escenario_datos: [["lente convergente", "real"], ["lente divergente", "virtual"]]

respuesta: escenario_datos[escenario][1]
tipo: completar
respuestas_validas:
  - "real"
  - "virtual"

enunciado: "Considerando una lente {escenario_datos[escenario][0]}, la imagen formada por un objeto situado más allá del foco es ________."

explicacion: |
  Las lentes convergentes pueden formar imágenes reales (si el objeto está lejos) o virtuales (si está muy cerca). Las lentes divergentes siempre forman imágenes virtuales.
```

### 20 — Distancia focal y signo

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["foco", "signo"]

tipo: mc
opciones_explicitas: ["Positiva", "Negativa"]
respuesta: "Positiva"

enunciado: "En el convenio de signos de la óptica, la distancia focal de una lente convergente es siempre ________."

explicacion: |
  Por convención, las lentes convergentes tienen una distancia focal positiva ($f > 0$), mientras que las lentes divergentes tienen una distancia focal negativa ($f < 0$).
```

### 21 — Formación de la imagen (Pasos)

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["rayos_luz", "proceso"]

opciones_explicitas: ["Incidencia de rayos paralelos", "Refracción en la superficie de la lente", "Convergencia en el punto focal"]

respuesta_orden: ["Incidencia de rayos paralelos", "Refracción en la superficie de la lente", "Convergencia en el punto focal"]
tipo: ordenar

enunciado: "Para que una lente convergente enfoque la luz en un punto, el proceso sigue este orden lógico:"

explicacion: |
  Primero los rayos viajan hacia la lente (incidencia), luego cambian de dirección al cruzar el material (refracción) y finalmente se cruzan en un punto (foco).
```

### 22 — Lentes en la visión

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["optica", "salud", "lentes"]

variables:
  datos: [["un paciente con miopía", "divergente"], ["un paciente con hipermetropía", "convergente"]]
  idx: uno_de([0, 1])

enunciado: "Para corregir la visión de {datos[idx][0]}, se requiere el uso de una lente de tipo {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

explicacion: |
  La miopía ocurre cuando la imagen se forma antes de la retina; una lente divergente ayuda a alejar el punto focal hacia la retina.
```

### 23 — El efecto de la luz

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["luz", "refraccion"]

respuesta: "convergen"
tipo: completar
respuestas_validas:
  - "convergen"

enunciado: "Cuando los rayos de luz paralelos atraviesan una lente convergente, estos ___ en un punto llamado foco."

explicacion: |
  Las lentes convergentes (o convexas) hacen que los rayos de luz se junten en un punto focal.
```

### 24 — Distancia focal y enfoque

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["calculo", "foco"]

variables:
  caso: uno_de([[10, 20], [15, 30], [20, 40]])
  focal: caso[1]

enunciado: "Un objeto se coloca a una distancia de {caso[0]} cm de una lente convergente cuya distancia focal es de {focal} cm (el objeto está dentro del foco, ya que {caso[0]} < {focal}). ¿La imagen formada será virtual y estará ubicada del mismo lado de la lente que el objeto?"

respuesta: verdadero
tipo: vf

explicacion: |
  Como el objeto está entre el foco y la lente (distancia objeto < f), la imagen es virtual, derecha, aumentada y se ubica del mismo lado de la lente que el objeto.
```

### 25 — Construcción de la imagen

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["proceso", "optica"]

respuesta_orden: ["Luz incidente", "Refracción en la lente", "Formación de la imagen"]
tipo: ordenar

opciones_explicitas: ["Luz incidente", "Refracción en la lente", "Formación de la imagen"]

enunciado: "Ordena el proceso físico que ocurre cuando un rayo de luz atraviesa una lente para formar una imagen:"

explicacion: |
  Primero llega la luz, luego cambia de dirección al entrar/salir de la lente (refracción) y finalmente se proyecta la imagen.
```

### 26 — Característica de la lente

```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["geometria", "lentes"]

variables:
  idx: uno_de([0, 1])
  pares: [["convergente", "más gruesa en el centro"], ["divergente", "más delgada en el centro"]]
  tipo_lente: pares[idx][0]
  forma: pares[idx][1]

enunciado: "Una lente es de tipo {tipo_lente} si es {forma}."

respuesta: tipo_lente
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

explicacion: |
  Las lentes convergentes son más gruesas en el centro (convexas), mientras que las divergentes son más delgadas en el centro (cóncavas).
```
