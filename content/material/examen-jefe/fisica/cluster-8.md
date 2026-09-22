# Examen jefe — [PENDIENTE #743]

> Logro #743. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: lentes-convergentes-divergentes (26 preguntas)

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

## Sección: ley-de-coulomb (24 preguntas)

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb", "vocabulario"]

enunciado: "¿Qué establece la ley de Coulomb?"
tipo: mc
opciones_explicitas:
  - "La fuerza entre dos cargas eléctricas es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia entre ellas"
  - "Toda carga eléctrica genera la misma fuerza sin importar su magnitud"
  - "La fuerza eléctrica es siempre atractiva, nunca repulsiva"
respuesta: "La fuerza entre dos cargas eléctricas es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia entre ellas"

explicacion: |
  F = k × q₁ × q₂ / r², la misma forma matemática que la gravitación,
  aplicada a cargas en vez de masas.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "completar"]

tipo: completar
enunciado: "Completá: F = k × q₁ × q₂ / r², donde k se llama la constante de ___."
respuestas_validas:
  - "Coulomb"

explicacion: |
  k ≈ 9×10⁹ N·m²/C² (valor redondeado habitual).
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

enunciado: "Dos cargas con el mismo signo (ambas positivas, o ambas negativas), ¿se atraen o se repelen?"
tipo: mc
opciones_explicitas:
  - "Se repelen"
  - "Se atraen"
  - "No ejercen ninguna fuerza entre sí"
respuesta: "Se repelen"

explicacion: |
  Mismo signo → repulsión, ya visto en `../cargas-electricas/`.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

enunciado: "Una carga positiva y una carga negativa, ¿se atraen o se repelen?"
tipo: mc
opciones_explicitas:
  - "Se atraen"
  - "Se repelen"
  - "No ejercen ninguna fuerza entre sí"
respuesta: "Se atraen"

explicacion: |
  Signos opuestos → atracción.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la fuerza gravitatoria (siempre atractiva), la fuerza eléctrica puede ser atractiva o repulsiva."

explicacion: |
  No existe "masa negativa" para la gravitación, pero sí existen
  cargas negativas para la electricidad.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de Coulomb (F=kq₁q₂/r²) tiene exactamente la misma forma matemática que la ley de gravitación de Newton (F=Gm₁m₂/r²)."

explicacion: |
  Mismo patrón (proporcional al producto, inversamente proporcional al
  cuadrado de la distancia), aplicado a cargas en vez de masas.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

respuesta: redondear(1 / (2 ^ 2), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Si la distancia entre dos cargas se duplica (sin cambiar las cargas), ¿a qué fracción de la fuerza original queda reducida la fuerza eléctrica?"

pasos:
  - "F_nueva / F_original = 1 / 2² = {redondear(1 / (2 ^ 2), 4)}"

explicacion: |
  Es la misma ley de cuadrado inverso que la gravitación.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "problema"]

respuesta: 3
tipo: input

enunciado: "Si una de las dos cargas se triplica (la otra carga y la distancia no cambian), ¿cuántas veces mayor queda la fuerza eléctrica?"

pasos:
  - "F es directamente proporcional a cada carga: triplicarla triplica F."

explicacion: |
  Cada carga entra de forma lineal en la fórmula, igual que cada masa
  en la gravitación.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

variables:
  q1: random(1, 10)
  q2: random(1, 10)
  r: uno_de([0.5, 1, 2])

respuesta: redondear(9e9 * (q1 * 1e-6) * (q2 * 1e-6) / (r ^ 2), 3)
tipo: input
tolerancia_abs: 0.05
unidad: "N"

enunciado: "Dos cargas de {q1} µC y {q2} µC están separadas por {r} m (k=9×10⁹ N·m²/C²). ¿Cuál es la magnitud de la fuerza eléctrica entre ellas?"

pasos:
  - "En Coulomb: q₁={q1}×10⁻⁶ C, q₂={q2}×10⁻⁶ C"
  - "F = k × q₁ × q₂ / r² = 9×10⁹ × {q1}×10⁻⁶ × {q2}×10⁻⁶ / {r}² = {redondear(9e9 * (q1 * 1e-6) * (q2 * 1e-6) / (r ^ 2), 3)} N"

explicacion: |
  1 microcoulomb (µC) = 10⁻⁶ C — las cargas cotidianas de electricidad
  estática se miden en esta escala, no en Coulombs enteros.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb", "vocabulario"]

enunciado: "¿En qué unidad se mide la carga eléctrica en el Sistema Internacional?"
tipo: mc
opciones_explicitas:
  - "Coulomb (C)"
  - "Newton (N)"
  - "Amperio (A)"
respuesta: "Coulomb (C)"

explicacion: |
  Las cargas cotidianas suelen expresarse en microcoulombs (µC =
  10⁻⁶ C) porque un Coulomb entero es una cantidad de carga enorme.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb"]

enunciado: "¿Cuál es el valor aproximado (redondeado) de la constante de Coulomb k?"
tipo: mc
opciones_explicitas:
  - "9×10⁹ N·m²/C²"
  - "6,674×10⁻¹¹ N·m²/kg²"
  - "9,8 N/kg"
respuesta: "9×10⁹ N·m²/C²"

explicacion: |
  No confundir con G (gravitación, mucho más chico) ni con g
  (aceleración de la gravedad en la Tierra).
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "Tanto la fuerza gravitatoria como la fuerza eléctrica disminuyen con el cuadrado de la distancia (ley de cuadrado inverso)."

explicacion: |
  Es el mismo patrón matemático (proporcional a 1/r²) en los dos casos.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "Para cargas y masas de tamaño cotidiano, la fuerza eléctrica es muchísimo más intensa que la fuerza gravitatoria entre los mismos objetos."

explicacion: |
  G (≈10⁻¹¹) es un número muchísimo más chico que k (≈10⁹) — por eso
  hacen falta masas planetarias para notar la gravedad, pero cargas
  chicas ya generan fuerzas eléctricas notables.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

respuesta: 4
tipo: input

enunciado: "Si AMBAS cargas se duplican a la vez (la distancia no cambia), ¿cuántas veces mayor queda la fuerza eléctrica?"

pasos:
  - "F_nueva / F_original = (2×q₁ × 2×q₂) / (q₁×q₂) = 4"

explicacion: |
  Cada duplicación multiplica por 2, y son dos duplicaciones
  independientes: 2×2=4.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb"]

enunciado: "Si el producto q₁×q₂ es positivo (ambas cargas positivas, o ambas negativas), ¿qué tipo de fuerza es?"
tipo: mc
opciones_explicitas:
  - "Repulsiva"
  - "Atractiva"
  - "Nula"
respuesta: "Repulsiva"

explicacion: |
  El signo del producto de las cargas indica directamente si la fuerza
  es de repulsión (producto positivo) o atracción (producto negativo).
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "ordenar"]

enunciado: "Ordená los pasos para calcular la fuerza eléctrica entre dos cargas dadas en microcoulombs."
tipo: ordenar
opciones_explicitas:
  - "Determinar si la fuerza es atractiva o repulsiva según el signo de las cargas"
  - "Convertir las cargas de microcoulombs a Coulombs (×10⁻⁶)"
  - "Aplicar F = k × q₁ × q₂ / r² con k=9×10⁹"
respuesta_orden: ["Convertir las cargas de microcoulombs a Coulombs (×10⁻⁶)", "Aplicar F = k × q₁ × q₂ / r² con k=9×10⁹", "Determinar si la fuerza es atractiva o repulsiva según el signo de las cargas"]
explicacion: |
  El cálculo numérico y la dirección (atrae/repele) se resuelven por
  separado.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb", "aplicacion"]

enunciado: "¿Por qué un globo frotado contra el pelo se queda pegado a la pared?"
tipo: mc
opciones_explicitas:
  - "El frotamiento carga eléctricamente el globo, y esa carga atrae cargas opuestas inducidas en la pared"
  - "El globo se vuelve magnético"
  - "Es un efecto de la gravedad, no de electricidad"
respuesta: "El frotamiento carga eléctricamente el globo, y esa carga atrae cargas opuestas inducidas en la pared"

explicacion: |
  Es electricidad estática: la fuerza de Coulomb entre las cargas del
  globo y las cargas inducidas en la pared.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb"]

respuesta: verdadero
tipo: vf

enunciado: "La fuerza que la carga 1 ejerce sobre la carga 2 tiene la misma magnitud que la que la carga 2 ejerce sobre la carga 1 (acción y reacción)."

explicacion: |
  Es un caso más de la tercera ley de Newton, ya vista en
  `../leyes-de-newton/tercera-accion-reaccion/`.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

enunciado: "¿Qué representa r en la fórmula F=k×q₁×q₂/r²?"
tipo: mc
opciones_explicitas:
  - "La distancia entre las dos cargas"
  - "El radio de una de las dos cargas"
  - "El tiempo que dura la interacción"
respuesta: "La distancia entre las dos cargas"

explicacion: |
  Las cargas se tratan como puntuales (sin tamaño), así que r es
  simplemente la distancia entre sus posiciones.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb"]

respuesta: falso
tipo: vf

enunciado: "El valor de F = k×q₁×q₂/r² (sin considerar el signo de las cargas) alcanza por sí solo para saber si la fuerza es atractiva o repulsiva."

explicacion: |
  Hace falta mirar el signo del producto q₁×q₂ (o directamente el
  signo de cada carga) para saber la dirección — la magnitud sola no
  lo dice.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "avanzado"
  tags: ["coulomb", "problema"]

variables:
  q1: uno_de([2, 4, 5])
  q2: uno_de([2, 4, 5])
  r: uno_de([0.5, 1, 2])
  F: redondear(9e9 * (q1 * 1e-6) * (q2 * 1e-6) / (r ^ 2), 4)

respuesta: r
tipo: input
tolerancia_abs: 0.01
unidad: "m"

enunciado: "Dos cargas de {q1} µC y {q2} µC (k=9×10⁹ N·m²/C²) ejercen entre sí una fuerza de {F} N. ¿A qué distancia están? (usá la misma fórmula despejando r)"

pasos:
  - "r² = k × q₁ × q₂ / F = 9×10⁹ × {q1}×10⁻⁶ × {q2}×10⁻⁶ / {F}"
  - "r = {r} m"

explicacion: |
  Es el mismo despeje que ya se practicó con otras fórmulas de
  `../formulas-con-literales/`, aplicado ahora a la ley de Coulomb.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["coulomb"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de Coulomb es el punto de partida para entender fuerzas y campos eléctricos más complejos, con más de dos cargas."

explicacion: |
  Con más cargas se suman (vectorialmente) las fuerzas de Coulomb de
  cada par, pero la ley de base sigue siendo la misma.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "intermedio"
  tags: ["coulomb", "gravitacion"]

enunciado: "¿Cuál de estas afirmaciones distingue correctamente k (Coulomb) de G (gravitación)?"
tipo: mc
opciones_explicitas:
  - "k (≈9×10⁹) es enorme y G (≈6,674×10⁻¹¹) es diminuta — son constantes de fenómenos distintos, con órdenes de magnitud opuestos"
  - "k y G son el mismo número, sólo cambia el nombre"
  - "k se usa para masas y G para cargas"
respuesta: "k (≈9×10⁹) es enorme y G (≈6,674×10⁻¹¹) es diminuta — son constantes de fenómenos distintos, con órdenes de magnitud opuestos"

explicacion: |
  Esa diferencia de magnitud entre k y G es la razón de fondo por la
  que la fuerza eléctrica domina sobre la gravitatoria a escala
  cotidiana.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_coulomb"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la ley de Coulomb?"
tipo: mc
opciones_explicitas:
  - "Para calcular la fuerza eléctrica entre dos cargas, y saber si atraen o repelen, a partir de sus magnitudes y su distancia"
  - "Sólo sirve para calcular fuerzas gravitatorias"
  - "Sólo aplica a cargas del mismo signo"
respuesta: "Para calcular la fuerza eléctrica entre dos cargas, y saber si atraen o repelen, a partir de sus magnitudes y su distancia"

explicacion: |
  Es la versión eléctrica del mismo patrón matemático que la
  gravitación universal, aplicado a un fenómeno que además puede
  repeler, no sólo atraer.
```

## Sección: ley-de-ohm (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["conceptos", "corriente"]

respuesta: "intensidad_de_corriente"
tipo: completar

enunciado: "La magnitud física que mide la cantidad de carga eléctrica que fluye por unidad de tiempo a través de una sección de un conductor se denomina ___."

respuestas_validas:
  - "intensidad_de_corriente"
  - "corriente_electrica"

explicacion: |
  La intensidad de corriente eléctrica ($I$) se define como el flujo de carga eléctrica por unidad de tiempo ($I = dQ/dt$).
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["proporcionalidad", "teoria"]

opciones_explicitas: ["Directamente proporcional", "Inversamente proporcional", "No tiene relación"]
respuesta: "Directamente proporcional"
tipo: mc

enunciado: "Según la Ley de Ohm, manteniendo la resistencia constante, la diferencia de potencial (voltaje) es ___ a la intensidad de la corriente."

explicacion: |
  La Ley de Ohm establece que $V = I \cdot R$. Si $R$ es constante, si aumentamos $V$, aumenta $I$ en la misma proporción.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["unidades", "ohm"]

variables:
  idx: uno_de([0, 1])
  datos: [["Voltaje", "Voltios"], ["Resistencia", "Ohmios"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Voltios", "Amperios", "Ohmios", "Watts"]

enunciado: "La unidad de medida en el Sistema Internacional para la {datos[idx][0]} es ___."

explicacion: |
  La unidad de la {datos[idx][0]} es el {datos[idx][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso
tipo: vf

enunciado: "Si la resistencia de un circuito aumenta y el voltaje se mantiene constante, la intensidad de la corriente también aumentará."

explicacion: |
  Falso. De la fórmula $I = V/R$, se observa que la corriente es inversamente proporcional a la resistencia. Si $R$ sube, $I$ baja.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "despeje"]

respuesta: "R = V / I"
tipo: mc
opciones_explicitas: ["I = V / R", "R = V / I", "V = I / R", "R = I / V"]

enunciado: "Para hallar la resistencia ($R$) en un circuito donde conocemos el voltaje ($V$) y la intensidad ($I$), la expresión correcta es ___."

explicacion: |
  Partiendo de $V = I \cdot R$, despejamos $R$ pasando la $I$ dividiendo al otro lado: $R = V / I$.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "V = I * R"
tipo: completar
respuestas_validas:
  - "V = I * R"
  - "V = R * I"

enunciado: "La Ley de Ohm establece que la diferencia de potencial (V) es igual al producto de la intensidad de corriente (I) por la resistencia (R). La expresión matemática es: ___"

explicacion: |
  La Ley de Ohm indica que la tensión es directamente proporcional a la corriente para una resistencia constante.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["calculo"]

variables:
  escenario: uno_de([[2, 5, 10], [6, 5, 30], [5, 10, 50]])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: [10, 30, 50, 60]

enunciado: "Si una resistencia de {escenario[1]} Ω es atravesada por una corriente de {escenario[0]} A, ¿cuál es la diferencia de potencial aplicada (en voltios)?"

pasos:
  - "Identificar los datos: I = {escenario[0]} A, R = {escenario[1]} Ω"
  - "Aplicar la fórmula: V = I * R"
  - "Calcular: V = {escenario[0]} * {escenario[1]} = {escenario[2]} V"

explicacion: |
  Usando la fórmula V = I * R, multiplicamos la corriente por la resistencia para obtener la tensión.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  escenario: uno_de([[12, 4], [220, 110], [10, 5]])

respuesta: escenario[0] / escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una bombilla está conectada a una fuente de {escenario[0]} V y tiene una resistencia interna de {escenario[1]} Ω. ¿Cuál es la intensidad de la corriente que circula por ella (en Amperes)?"

pasos:
  - "Despejar la fórmula de Ohm para la corriente: I = V / R"
  - "Sustituir valores: I = {escenario[0]} / {escenario[1]}"
  - "Resultado: I = {escenario[0] / escenario[1]} A"

explicacion: |
  Para hallar la corriente cuando conocemos la tensión y la resistencia, despejamos la fórmula original obteniendo I = V / R.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si mantenemos la tensión (V) constante y aumentamos la resistencia (R), la intensidad de la corriente (I) debe disminuir."

explicacion: |
  Es verdadero. Según la Ley de Ohm, la corriente es inversamente proporcional a la resistencia cuando la tensión es constante.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  escenario: uno_de([[10, 2, 5], [24, 3, 8], [100, 10, 10]])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: [5, 8, 10, 20]

enunciado: "Un dispositivo electrónico consume una corriente de {escenario[1]} A cuando se conecta a una batería de {escenario[0]} V. ¿Cuál es el valor de su resistencia (en ohmios)?"

pasos:
  - "Identificar datos: V = {escenario[0]} V, I = {escenario[1]} A"
  - "Despejar R de la fórmula V = I * R: R = V / I"
  - "Calcular: R = {escenario[0]} / {escenario[1]} = {escenario[2]} Ω"

explicacion: |
  Para encontrar la resistencia, dividimos la tensión aplicada entre la intensidad de la corriente que circula por el circuito.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["ley_de_ohm", "relaciones_proporcionales"]

respuesta: "reducirse a la mitad"
tipo: completar
respuestas_validas:
  - "reducirse a la mitad"
  - "disminuir a la mitad"
  - "la mitad"

enunciado: "Si mantenemos el voltaje constante y duplicamos la resistencia, la intensidad de corriente debe ___ para mantener la igualdad de la Ley de Ohm."

pasos:
  - "Identificar que el voltaje es constante."
  - "Aplicar la relación $I = V / R$."
  - "Observar que al aumentar el denominador (R), el resultado (I) disminuye."

explicacion: |
  La Ley de Ohm establece que $V = I \cdot R$. Si el voltaje ($V$) no cambia, la corriente ($I$) y la resistencia ($R$) son inversamente proporcionales. Si la resistencia se duplica, la corriente se reduce a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["unidades", "error_comun"]

respuesta: "mA"
tipo: mc
opciones_explicitas: ["A", "mA", "kΩ", "V"]

enunciado: "Un error común es no convertir las unidades antes de operar. Si tienes un voltaje de 5 V y una resistencia de 1 kΩ, el resultado de I = V / R es 0.005 A. ¿En qué unidad se expresa este valor si queremos evitar el uso de decimales muy pequeños?"

explicacion: |
  Para evitar errores de escala, es común trabajar con múltiplos. 0.005 A es equivalente a 5 mA (miliamperios).
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["proporcionalidad_directa"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito con una resistencia fija, si aumentamos el voltaje aplicado, la intensidad de corriente que circula por el conductor también aumentará proporcionalmente."

explicacion: |
  Verdadero. Según $I = V / R$, si $R$ es constante, $I$ es directamente proporcional a $V$.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "resistencia"]

variables:
  idx: uno_de([0, 1])
  escenario: [[24.0, 12.0, 2.0], [40.0, 8.0, 5.0]]

respuesta: escenario[idx][2]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito tiene un voltaje de {escenario[idx][0]} V y una corriente de {escenario[idx][1]} A. ¿Cuál es el valor de su resistencia (en $\\Omega$)?"

pasos:
  - "Usar la fórmula despejada: $R = V / I$."
  - "Sustituir los valores: $R = {escenario[idx][0]} / {escenario[idx][1]}$."

explicacion: |
  Utilizando $R = V / I$, dividimos el voltaje por la corriente para hallar la resistencia: $R = {escenario[idx][0]} / {escenario[idx][1]} = {escenario[idx][2]}$ Ω.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["despeje", "formula"]

respuesta_orden: ["V = I * R", "I = V / R", "R = V / I"]
tipo: ordenar

opciones_explicitas: ["V = I * R", "I = V / R", "R = V / I"]

enunciado: "Ordena las fórmulas de la Ley de Ohm empezando por la fórmula original (definición de voltaje) y luego sus dos despejes para corriente y resistencia respectivamente."

explicacion: |
  Las tres formas de la Ley de Ohm son equivalentes, pero el orden correcto de despeje estándar es la definición, luego el despeje de la variable del denominador y finalmente el de la variable del numerador.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["ohm", "voltaje", "corriente"]

tipo: mc
opciones_explicitas: ["Proporcional", "Inversamente proporcional", "No tiene relación", "Exponencial"]

enunciado: "Según la Ley de Ohm, si la resistencia de un circuito se mantiene constante y se aumenta el voltaje, la intensidad de la corriente será ___ a la del voltaje."

respuesta: "Proporcional"

explicacion: |
  La Ley de Ohm establece que $V = I \cdot R$. Si $R$ es constante, $V$ y $I$ son directamente proporcionales.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["resistencia", "ohm", "voltaje"]

tipo: vf

enunciado: "Si mantenemos un voltaje constante en un circuito, un aumento en la resistencia provocará un aumento en la intensidad de la corriente."

respuesta: falso

explicacion: |
  Falso. De la Ley de Ohm $I = V / R$, se observa que la corriente es inversamente proporcional a la resistencia cuando el voltaje es constante.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "ohm", "resistencia"]

variables:
  escenario: uno_de([[2, 10], [5, 20], [12, 4]])

tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito tiene una diferencia de potencial de {escenario[0]} V y una corriente que circula por él es de {escenario[1]} A. ¿Cuál es el valor de la resistencia en Ohmios ($\\Omega$)?"

respuesta: escenario[0] / escenario[1]

explicacion: |
  Usando la fórmula $R = V / I$:
  Para el caso sorteado: $R = {escenario[0]} / {escenario[1]} = {escenario[0]/escenario[1]} \Omega$.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["conceptos", "voltaje", "corriente"]

tipo: completar

enunciado: "Mientras que el voltaje se mide en ___ y representa la diferencia de potencial, la intensidad de corriente se mide en ___ y representa el flujo de carga."

respuestas_validas:
  - "Voltios"
  - "Amperios"

respuesta: ["Voltios", "Amperios"]

explicacion: |
  El voltaje (V) es la fuerza que impulsa las cargas, e intensidad (I) es la cantidad de carga que circula por unidad de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["formula", "orden"]

tipo: completar

enunciado: "Para despejar la intensidad de corriente (I) de la Ley de Ohm ($V = I \\cdot R$), la operación matemática correcta es dividir el voltaje por la ___."

respuestas_validas:
  - "resistencia"

respuesta: "resistencia"

explicacion: |
  Despejando la fórmula original $V = I \cdot R$, pasamos la $R$ dividiendo al otro lado: $I = V / R$.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["voltaje", "corriente", "resistencia"]

variables:
  escenario: uno_de([[120.0, "2.0", "60.0"], [220.0, "5.0", "44.0"], [12.0, "0.5", "24.0"]])
  v: escenario[0]
  i: escenario[1]
  r: escenario[2]

respuesta: r
tipo: completar
respuestas_validas:
  - "60.0"
  - "44.0"
  - "24.0"

enunciado: "Un dispositivo eléctrico se conecta a una fuente de tensión de {v} V y por él circula una corriente de {i} A. ¿Cuál es el valor de la resistencia del dispositivo?"

explicacion: |
  Aplicando la Ley de Ohm: R = V / I.
  En este caso: {v} / {i} = {r} Ω.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["corriente", "voltaje", "resistencia"]

variables:
  escenario: uno_de([[9.0, "0.2", "45.0"], [12.0, "0.5", "24.0"], [3.0, "1.0", "3.0"]])
  v: escenario[0]
  r: escenario[1]
  i: escenario[2]

respuesta: i
tipo: mc
opciones_explicitas: ["45.0", "24.0", "3.0"]

enunciado: "Una linterna funciona con una batería de {v} V y tiene una resistencia interna de {r} Ω. ¿Qué intensidad de corriente circula por el circuito?"

explicacion: |
  Usamos la fórmula I = V / R.
  I = {v} / {r} = {i} A.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([[10.0, 2.0, 5.0], [20.0, 4.0, 5.0], [50.0, 10.0, 5.0]])
  v: escenario[0]
  i: escenario[1]
  r: escenario[2]

respuesta: verdadero
tipo: vf

enunciado: "Si mantenemos una resistencia constante de {r} Ω, al duplicar el voltaje de {v} V a {v*2} V, la corriente debe duplicarse de {i} A a {i*2} A. ¿Es esto correcto?"

explicacion: |
  Verdadero. Según la Ley de Ohm (V = I·R), el voltaje y la corriente son directamente proporcionales cuando la resistencia es constante.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["voltaje", "corriente", "resistencia"]

variables:
  escenario: uno_de([[5.0, "0.1", "0.5"], [10.0, "2.0", "20.0"], [12.0, "0.5", "6.0"]])
  r: escenario[0]
  i: escenario[1]
  v: escenario[2]

respuesta: v
tipo: completar
respuestas_validas:
  - "0.5"
  - "20.0"
  - "6.0"

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω y es atravesado por una corriente de {i} A. ¿Qué voltaje se aplica a dicho componente?"

explicacion: |
  La fórmula es V = I · R.
  V = {i} * {r} = {v} V.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

respuesta_orden: ["Identificar datos", "Seleccionar fórmula", "Realizar cálculo"]
tipo: ordenar
opciones_explicitas: ["Identificar datos", "Seleccionar fórmula", "Realizar cálculo"]

enunciado: "Ordena los pasos lógicos para resolver un problema de Ley de Ohm donde conoces la resistencia y la corriente para hallar el voltaje:"

explicacion: |
  Para resolver problemas físicos de forma sistemática se debe:
  1. Identificar los datos conocidos.
  2. Seleccionar la fórmula adecuada (V=I·R, I=V/R o R=V/I).
  3. Realizar el cálculo matemático.
```

## Sección: leyes-de-newton/primera-inercia (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Qué dice la primera ley de Newton (ley de inercia)?"
tipo: mc
opciones_explicitas:
  - "Un objeto en reposo sigue en reposo, y uno en movimiento sigue con velocidad constante, a menos que actúe una fuerza neta"
  - "Todo objeto se detiene solo con el tiempo, sin necesitar ninguna fuerza"
  - "La fuerza siempre es igual a la masa por la velocidad"
respuesta: "Un objeto en reposo sigue en reposo, y uno en movimiento sigue con velocidad constante, a menos que actúe una fuerza neta"

explicacion: |
  Los objetos no cambian su estado de movimiento por sí solos.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["fuerza_neta", "vocabulario"]

enunciado: "¿Qué es la fuerza neta sobre un objeto?"
tipo: mc
opciones_explicitas:
  - "La suma vectorial de todas las fuerzas que actúan sobre él al mismo tiempo"
  - "La fuerza más grande de todas las que actúan sobre él"
  - "El promedio de todas las fuerzas que actúan sobre él"
respuesta: "La suma vectorial de todas las fuerzas que actúan sobre él al mismo tiempo"

explicacion: |
  Se calcula sumando vectores, como en
  `../../../matematica/suma-de-vectores-y-descomposicion/`.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["fuerza_neta"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos fuerzas iguales en magnitud actúan sobre un objeto desde direcciones exactamente opuestas, la fuerza neta es cero."

explicacion: |
  Se cancelan entre sí como vectores, aunque ninguna de las dos sea cero
  por separado.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio", "vocabulario"]

enunciado: "Según la primera ley de Newton, ¿qué situaciones cuentan como 'equilibrio'?"
tipo: mc
opciones_explicitas:
  - "Estar en reposo, O moverse a velocidad constante (misma rapidez y dirección)"
  - "Únicamente estar completamente en reposo"
  - "Únicamente estar acelerando de forma constante"
respuesta: "Estar en reposo, O moverse a velocidad constante (misma rapidez y dirección)"

explicacion: |
  Lo que importa es que la velocidad no cambie, no que sea cero.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto que se mueve en línea recta a velocidad constante también está en equilibrio, según la primera ley de Newton."

explicacion: |
  Su velocidad no cambia, así que la fuerza neta sobre él es cero.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio"]

respuesta: falso
tipo: vf

enunciado: "Según la primera ley de Newton, un objeto en equilibrio siempre está completamente detenido."

explicacion: |
  También puede estar en movimiento, siempre que sea a velocidad
  constante.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["fuerza_neta", "problema"]

variables:
  f1: random(20, 50)
  f2: random(5, 19)

respuesta: f1 - f2
tipo: input
tolerancia_abs: 0

enunciado: "Sobre un objeto actúan dos fuerzas horizontales: {f1} N hacia la derecha, y {f2} N hacia la izquierda. ¿Cuál es la fuerza neta (positiva si es hacia la derecha)?"

pasos:
  - "{f1} − {f2} = {f1 - f2} N hacia la derecha"

explicacion: |
  Se restan porque apuntan en direcciones opuestas sobre el mismo eje.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "avanzado"
  tags: ["equilibrio", "problema"]

variables:
  f1: random(10, 30)
  f2: random(10, 30)

respuesta: verdadero
tipo: vf

enunciado: "Sobre un objeto actúan tres fuerzas horizontales: {f1} N y {f2} N hacia la derecha, y {f1 + f2} N hacia la izquierda. ¿Está el objeto en equilibrio?"

explicacion: |
  {f1} + {f2} = {f1 + f2} N hacia la derecha, que se cancela
  exactamente con los {f1 + f2} N hacia la izquierda: fuerza neta cero.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "vocabulario"]

enunciado: "Cuando un auto frena bruscamente, ¿por qué el cuerpo de los pasajeros 'sigue de largo' hacia adelante?"
tipo: mc
opciones_explicitas:
  - "Porque el cuerpo mantiene su inercia de movimiento mientras el auto ya está frenando"
  - "Porque una fuerza invisible empuja al cuerpo hacia adelante"
  - "Porque el aire dentro del auto empuja a los pasajeros"
respuesta: "Porque el cuerpo mantiene su inercia de movimiento mientras el auto ya está frenando"

explicacion: |
  No hay ninguna fuerza nueva empujando hacia adelante: es el cuerpo
  resistiéndose a cambiar su estado de movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Por qué cuesta más esfuerzo empezar a mover un mueble pesado desde el reposo que mantenerlo deslizándose una vez que ya está en movimiento?"
tipo: mc
opciones_explicitas:
  - "Porque la inercia se opone al CAMBIO de estado de movimiento, no al movimiento en sí"
  - "Porque el mueble pierde peso una vez que empieza a moverse"
  - "En realidad cuesta exactamente el mismo esfuerzo en ambos casos"
respuesta: "Porque la inercia se opone al CAMBIO de estado de movimiento, no al movimiento en sí"

explicacion: |
  Arrancar exige vencer la inercia del reposo; mantenerlo en velocidad
  constante no exige cambiar nada.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Qué es la inercia de un objeto?"
tipo: mc
opciones_explicitas:
  - "Su resistencia a cambiar su estado de movimiento"
  - "La fuerza que lo empuja hacia adelante"
  - "Su velocidad máxima posible"
respuesta: "Su resistencia a cambiar su estado de movimiento"

explicacion: |
  Cuanta más inercia, más cuesta arrancarlo, frenarlo o desviarlo.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es la masa de un objeto, mayor es su inercia."

explicacion: |
  La masa es, literalmente, la medida de la inercia.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "problema"]

variables:
  masa1: uno_de([5, 10])
  masa2: masa1 * 100

respuesta: verdadero
tipo: vf

enunciado: "Un camión de {masa2} kg y una bicicleta de {masa1} kg. ¿Tiene el camión más inercia que la bicicleta?"

explicacion: |
  Con una masa mucho mayor, hace falta mucha más fuerza neta para
  cambiar el estado de movimiento del camión.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿Qué mide la masa de un objeto?"
tipo: mc
opciones_explicitas:
  - "La cantidad de materia que lo compone"
  - "La fuerza con la que la gravedad lo atrae"
  - "Su velocidad máxima"
respuesta: "La cantidad de materia que lo compone"

explicacion: |
  El peso, en cambio, es la fuerza gravitatoria sobre esa masa.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿Qué mide el peso de un objeto?"
tipo: mc
opciones_explicitas:
  - "La fuerza con la que la gravedad lo atrae"
  - "La cantidad de materia que lo compone"
  - "Su resistencia al rozamiento"
respuesta: "La fuerza con la que la gravedad lo atrae"

explicacion: |
  Se mide en Newton, a diferencia de la masa que se mide en kilogramos.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["masa_peso"]

respuesta: verdadero
tipo: vf

enunciado: "La masa de un objeto es la misma sin importar en qué lugar del universo se encuentre."

explicacion: |
  A diferencia del peso, la masa no depende de la gravedad local.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["masa_peso"]

respuesta: verdadero
tipo: vf

enunciado: "El peso de un objeto sí cambia según el lugar, porque depende de la gravedad local."

explicacion: |
  El mismo objeto pesa distinto en la Tierra que en la Luna.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["masa_peso"]

respuesta: verdadero
tipo: vf

enunciado: "Un astronauta pesa menos en la Luna que en la Tierra, aunque su masa sea exactamente la misma en los dos lugares."

explicacion: |
  La Luna tiene menos gravedad, así que atrae con menos fuerza a la
  misma cantidad de materia.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿En qué unidad se mide la masa?"
tipo: mc
opciones_explicitas:
  - "Kilogramos (kg)"
  - "Newton (N)"
  - "Metros por segundo (m/s)"
respuesta: "Kilogramos (kg)"

explicacion: |
  El peso (una fuerza) se mide en Newton.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿En qué unidad se mide la fuerza (y por lo tanto el peso)?"
tipo: mc
opciones_explicitas:
  - "Newton (N)"
  - "Kilogramos (kg)"
  - "Joules (J)"
respuesta: "Newton (N)"

explicacion: |
  La masa (una cantidad de materia) se mide en kilogramos.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio", "ordenar"]

enunciado: "Ordená los pasos para determinar si un objeto está en equilibrio, conociendo todas las fuerzas que actúan sobre él."
tipo: ordenar
opciones_explicitas:
  - "Si da cero, el objeto está en equilibrio (en reposo o a velocidad constante)"
  - "Sumar vectorialmente todas las fuerzas que actúan sobre el objeto"
  - "Verificar si esa suma (la fuerza neta) da cero"
respuesta_orden: ["Sumar vectorialmente todas las fuerzas que actúan sobre el objeto", "Verificar si esa suma (la fuerza neta) da cero", "Si da cero, el objeto está en equilibrio (en reposo o a velocidad constante)"]
explicacion: |
  El equilibrio se define completamente por el resultado de la fuerza
  neta.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "avanzado"
  tags: ["fuerza_neta", "problema"]

variables:
  f1: random(10, 20)
  f2: random(10, 20)
  f3: random(5, 15)

respuesta: (f1 + f2) - f3
tipo: input
tolerancia_abs: 0

enunciado: "Sobre un objeto actúan tres fuerzas horizontales: {f1} N y {f2} N hacia la derecha, y {f3} N hacia la izquierda. ¿Cuál es la fuerza neta (positiva hacia la derecha)?"

pasos:
  - "({f1} + {f2}) − {f3} = {(f1 + f2) - f3} N hacia la derecha"

explicacion: |
  Se suman las fuerzas en un sentido y se restan las del sentido
  contrario.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la fuerza neta sobre un objeto en reposo es cero, ese objeto permanece en reposo indefinidamente, sin límite de tiempo."

explicacion: |
  No hace falta ninguna fuerza para "mantenerlo quieto": la ausencia de
  fuerza neta ya es suficiente.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Por qué el cinturón de seguridad es necesario, en términos de la primera ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Porque en un choque, el auto frena bruscamente pero el cuerpo de la persona 'quiere' seguir moviéndose por inercia"
  - "Porque el cinturón hace que el auto pese menos"
  - "No tiene relación real con la inercia"
respuesta: "Porque en un choque, el auto frena bruscamente pero el cuerpo de la persona 'quiere' seguir moviéndose por inercia"

explicacion: |
  El cinturón aplica la fuerza neta necesaria para frenar también al
  cuerpo, junto con el auto.
```

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la primera ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Para entender que los objetos no cambian su movimiento por sí solos, y que hace falta una fuerza neta para lograrlo"
  - "Sólo sirve para calcular pesos en distintos planetas"
  - "Sólo aplica a objetos que ya están en movimiento"
respuesta: "Para entender que los objetos no cambian su movimiento por sí solos, y que hace falta una fuerza neta para lograrlo"

explicacion: |
  Es la base conceptual sobre la que se construyen la segunda y tercera
  ley.
```

## Sección: leyes-de-newton/segunda-fma (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["segunda_ley", "vocabulario"]

enunciado: "¿Qué dice la segunda ley de Newton?"
tipo: mc
opciones_explicitas:
  - "La aceleración de un objeto es directamente proporcional a la fuerza neta, e inversamente proporcional a su masa"
  - "Todo objeto acelera siempre a la misma velocidad, sin importar la fuerza"
  - "La masa de un objeto cambia según la fuerza que se le aplica"
respuesta: "La aceleración de un objeto es directamente proporcional a la fuerza neta, e inversamente proporcional a su masa"

explicacion: |
  Es la relación F = m × a.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([2, 4, 5, 10])
  a_real: uno_de([2, 3, 4, 5])

respuesta: a_real
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza neta de {m * a_real} N actúa sobre un objeto de {m} kg. ¿Cuál es su aceleración?"

pasos:
  - "{m * a_real} ÷ {m} = {a_real} m/s²"

explicacion: |
  a = F / m.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([3, 6, 8, 12])
  a: uno_de([2, 3, 4])

respuesta: m * a
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué fuerza neta hace falta para darle una aceleración de {a} m/s² a un objeto de {m} kg?"

pasos:
  - "{m} × {a} = {m * a} N"

explicacion: |
  F = m × a.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "A igual masa, aplicar más fuerza neta produce más aceleración."

explicacion: |
  Es la relación directamente proporcional entre fuerza y aceleración.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "A igual fuerza neta aplicada, un objeto con más masa acelera menos que uno con menos masa."

explicacion: |
  Es la relación inversamente proporcional entre masa y aceleración.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  fuerza: uno_de([20, 40, 60])
  masa1: uno_de([2, 4])
  masa2: masa1 * 2

respuesta: verdadero
tipo: vf

enunciado: "La misma fuerza de {fuerza} N se aplica a dos objetos: uno de {masa1} kg y otro de {masa2} kg. ¿Acelera más el de {masa1} kg?"

explicacion: |
  Con menos masa, la misma fuerza produce más aceleración: {fuerza}/{masa1}
  es mayor que {fuerza}/{masa2}.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["newton_unidad", "completar"]

tipo: completar
enunciado: "Completá: 1 Newton es la fuerza necesaria para darle una aceleración de 1 m/s² a una masa de 1 ___."
respuestas_validas:
  - "kg"
  - "kilogramo"

explicacion: |
  1 N = 1 kg × 1 m/s².
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["newton_unidad", "vocabulario"]

enunciado: "¿Cuál es la unidad de fuerza en el sistema internacional?"
tipo: mc
opciones_explicitas:
  - "El Newton (N)"
  - "El kilogramo (kg)"
  - "El Joule (J)"
respuesta: "El Newton (N)"

explicacion: |
  Se define directamente a partir de la segunda ley de Newton.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["peso", "vocabulario"]

enunciado: "¿Qué es el peso de un objeto, en términos de la segunda ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Un caso particular de F = m·a, donde la aceleración es la de la gravedad (g)"
  - "Lo mismo que la masa, sólo que en otra unidad"
  - "Una fuerza que no tiene relación con la segunda ley"
respuesta: "Un caso particular de F = m·a, donde la aceleración es la de la gravedad (g)"

explicacion: |
  Peso = m × g.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["peso", "problema"]

variables:
  m: uno_de([3, 5, 7, 8, 10, 12])

respuesta: m * 10
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el peso de un objeto de {m} kg en la superficie terrestre? (usá g = 10 m/s²)"

pasos:
  - "{m} × 10 = {m * 10} N"

explicacion: |
  Peso = masa × g.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["peso", "problema"]

variables:
  m_real: uno_de([4, 6, 9, 15])

respuesta: m_real
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto pesa {m_real * 10} N en la Tierra (g = 10 m/s²). ¿Cuál es su masa?"

pasos:
  - "{m_real * 10} ÷ 10 = {m_real} kg"

explicacion: |
  Se despeja la masa: masa = peso / g.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "Según F = m·a, si la fuerza neta sobre un objeto es cero, su aceleración también es cero."

explicacion: |
  Es la conexión directa con la primera ley: sin fuerza neta, no hay
  cambio de velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "La primera ley de Newton (inercia) es, en el fondo, el caso particular de la segunda ley cuando la fuerza neta es exactamente cero."

explicacion: |
  Con F_neta = 0, la fórmula F=ma da a=0: velocidad constante, la propia
  definición de inercia.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["peso", "vocabulario"]

enunciado: "La gravedad en la Luna es aproximadamente 1/6 de la gravedad terrestre. Un objeto de 60 kg, ¿qué le pasa a su PESO en la Luna, comparado con la Tierra?"
tipo: mc
opciones_explicitas:
  - "Se reduce a aproximadamente 1/6 de su peso en la Tierra"
  - "Se mantiene exactamente igual"
  - "Su masa también se reduce a 1/6"
respuesta: "Se reduce a aproximadamente 1/6 de su peso en la Tierra"

explicacion: |
  Peso = m × g: con g mucho menor, el peso baja proporcionalmente. La
  masa (60 kg) no cambia en ningún lugar.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([800, 1000, 1200])
  a: uno_de([2, 3, 4])

respuesta: m * a
tipo: input
tolerancia_abs: 0

enunciado: "Un auto de {m} kg frena con una desaceleración de {a} m/s². ¿Cuál es la magnitud de la fuerza neta (de frenado) que actúa sobre él?"

pasos:
  - "{m} × {a} = {m * a} N"

explicacion: |
  El cálculo es el mismo, aunque la aceleración esté frenando el auto
  en vez de acelerarlo.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "F = m·a describe DOS proporcionalidades a la vez: directa entre fuerza y aceleración, e inversa entre masa y aceleración."

explicacion: |
  Es la forma más completa de leer la segunda ley.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([4, 5, 10])
  a: uno_de([2, 3])

respuesta: a * 2
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza de {m * a} N le da a un objeto de {m} kg una aceleración de {a} m/s². Si se DUPLICA la fuerza (manteniendo la misma masa), ¿cuál es la nueva aceleración?"

pasos:
  - "{m * a * 2} ÷ {m} = {a * 2} m/s²"

explicacion: |
  Al duplicar la fuerza con la misma masa, la aceleración también se
  duplica (proporcionalidad directa).
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([4, 6, 10])
  a: uno_de([2, 4, 6])

respuesta: a / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Una fuerza de {m * a} N le da a un objeto de {m} kg una aceleración de {a} m/s². Si se DUPLICA la masa (manteniendo la misma fuerza), ¿cuál es la nueva aceleración?"

pasos:
  - "{m * a} ÷ {m * 2} = {a / 2} m/s²"

explicacion: |
  Al duplicar la masa con la misma fuerza, la aceleración se reduce a
  la mitad (proporcionalidad inversa).
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley", "ordenar"]

enunciado: "Ordená los pasos para calcular la aceleración de un objeto, conociendo la fuerza neta y la masa."
tipo: ordenar
opciones_explicitas:
  - "Dividir la fuerza neta por la masa"
  - "Identificar la fuerza neta que actúa sobre el objeto"
  - "Identificar la masa del objeto"
respuesta_orden: ["Identificar la fuerza neta que actúa sobre el objeto", "Identificar la masa del objeto", "Dividir la fuerza neta por la masa"]
explicacion: |
  a = F_neta / m.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "En F = m·a, la masa m es la masa total del objeto que está siendo acelerado."

explicacion: |
  Es un dato fijo del objeto, no algo que varíe según la fuerza
  aplicada.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["peso", "problema"]

respuesta: 5
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el peso de un objeto de 0,5 kg en la Tierra? (usá g = 10 m/s²)"

pasos:
  - "0,5 × 10 = 5 N"

explicacion: |
  Mismo cálculo, con una masa menor a 1 kg.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "vocabulario"]

enunciado: "¿Para qué sirve, en la práctica, poder calcular la aceleración con F = m·a?"
tipo: mc
opciones_explicitas:
  - "Para predecir cómo se va a mover un objeto, conociendo sólo la fuerza neta y su masa"
  - "Sólo sirve para calcular la masa de objetos ya conocidos"
  - "No tiene ninguna aplicación práctica real"
respuesta: "Para predecir cómo se va a mover un objeto, conociendo sólo la fuerza neta y su masa"

explicacion: |
  Es la fórmula central de la dinámica.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["peso", "problema"]

variables:
  m: uno_de([20, 40, 60])
  g_marte: 4

respuesta: m * g_marte
tipo: input
tolerancia_abs: 0

enunciado: "La gravedad en Marte es aproximadamente 4 m/s². ¿Cuál sería el peso de un objeto de {m} kg en Marte?"

pasos:
  - "{m} × 4 = {m * g_marte} N"

explicacion: |
  Mismo cálculo que en la Tierra, sólo que con la gravedad de Marte en
  vez de 10 m/s².
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "intermedio"
  tags: ["segunda_ley"]

respuesta: verdadero
tipo: vf

enunciado: "La segunda ley de Newton, F = m·a, sólo tiene sentido para objetos que tienen masa."

explicacion: |
  Es un principio de la mecánica clásica, pensado para objetos con
  masa.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "avanzado"
  tags: ["segunda_ley", "problema"]

variables:
  m: uno_de([5, 10])
  f1: uno_de([20, 30])
  f2: f1 * 2

respuesta: verdadero
tipo: vf

enunciado: "Sobre un objeto de {m} kg actúan, en dos situaciones distintas, fuerzas de {f1} N y de {f2} N. ¿Es la aceleración en la segunda situación el doble que en la primera?"

explicacion: |
  Con la misma masa, duplicar la fuerza duplica la aceleración.
```

```
metadata:
  materia: "fisica"
  tema: "segunda_ley_newton_fma"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la segunda ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Para calcular cuánto acelera un objeto dado la fuerza neta y su masa, incluyendo el caso particular del peso"
  - "Sólo sirve para calcular masas en el laboratorio"
  - "Sólo aplica a objetos en reposo"
respuesta: "Para calcular cuánto acelera un objeto dado la fuerza neta y su masa, incluyendo el caso particular del peso"

explicacion: |
  Es la fórmula que cuantifica lo que la primera ley sólo describía en
  palabras.
```

