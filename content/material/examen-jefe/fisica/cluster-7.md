# Examen jefe — [PENDIENTE #742]

> Logro #742. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **124 preguntas totales** en 5/5 secciones.

---

## Sección: presion-f-sobre-a (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["La fuerza aplicada por unidad de área", "La fuerza total aplicada sobre un objeto", "La aceleración producida por una fuerza", "La energía transferida por unidad de superficie"]

enunciado: "La presión se define físicamente como la ___ aplicada sobre una superficie."

respuesta: "La fuerza aplicada por unidad de área"

explicacion: |
  La presión (P) es una magnitud escalar que mide la razón entre la fuerza perpendicular aplicada (F) y el área (A) sobre la que actúa: P = F/A.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: mc
opciones_explicitas: ["Newton (N)", "Pascal (Pa)", "Joule (J)", "Watt (W)"]

enunciado: "En el Sistema Internacional de Unidades, la unidad de presión es el ___."

respuesta: "Pascal (Pa)"

explicacion: |
  Un Pascal (Pa) equivale a un Newton por metro cuadrado (1 N/m²).
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["relacion_proporcional", "analisis"]

tipo: vf
enunciado: "Si mantenemos la fuerza constante, al aumentar el área de contacto, la presión aumenta."

respuesta: falso

explicacion: |
  Dado que la fórmula es P = F/A, la presión es inversamente proporcional al área. Si el área aumenta, la presión disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["calculo", "aplicacion"]

variables:
  caso_idx: uno_de([0, 1, 2])
  escenario: [[100, 2], [50, 5], [200, 4]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza de {escenario[caso_idx][0]} N sobre una superficie de {escenario[caso_idx][1]} m². ¿Cuál es la presión resultante en Pa?"

pasos:
  - "Identificar la fuerza (F) y el área (A)."
  - "Aplicar la fórmula P = F/A."

respuesta: escenario[caso_idx][0] / escenario[caso_idx][1]

explicacion: |
  Utilizando la fórmula P = F/A, dividimos la fuerza entre el área proporcionada.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["completar", "terminologia"]

tipo: completar
respuestas_validas:
  - "fuerza"
  - "área"

enunciado: "Para calcular la presión, es necesario conocer la ___ aplicada y el ___ sobre el cual actúa."

respuesta: ["fuerza", "área"]

explicacion: |
  La presión depende directamente de la magnitud de la fuerza y de la extensión de la superficie (área) donde se distribuye dicha fuerza.
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["definicion", "presion"]

tipo: mc
opciones_explicitas: ["La presión es la fuerza aplicada por unidad de área", "La presión es la fuerza multiplicada por el área", "La presión es la masa dividida por el volumen", "La presión es la aceleración de un cuerpo"]
respuesta: "La presión es la fuerza aplicada por unidad de área"

enunciado: "Si aplicamos una fuerza sobre una superficie, la magnitud de la presión resultante depende de la fuerza y del área. ¿Cuál es la definición física de presión?"

explicacion: |
  La presión se define como la magnitud de la fuerza aplicada perpendicularmente sobre una superficie, dividida por el área de dicha superficie ($P = F/A$).
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "intermedio"
  tags: ["calculo", "numerico"]

variables:
  escenario: uno_de([[100, 2], [50, 5], [200, 10]])

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza de {escenario[0]} N sobre una superficie de {escenario[1]} m². ¿Cuál es la presión ejercida en Pascales (Pa)?"

pasos:
  - "Identificar la fuerza: F = {escenario[0]} N"
  - "Identificar el área: A = {escenario[1]} m²"
  - "Aplicar la fórmula: P = F / A"

respuesta: escenario[0] / escenario[1]

explicacion: |
  Usando la fórmula P = F/A:
  P = {escenario[0]} / {escenario[1]} = {escenario[0] / escenario[1]} Pa.
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "intermedio"
  tags: ["relacion", "conceptual"]

tipo: vf

enunciado: "Si mantenemos la fuerza constante pero aumentamos el área de la superficie sobre la que se aplica, la presión resultante será mayor."

respuesta: falso

explicacion: |
  Como la presión es inversamente proporcional al área ($P \propto 1/A$), si el área aumenta, la presión disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: completar
respuesta: "Pa"

enunciado: "En el Sistema Internacional de Unidades, la unidad de medida de la presión es el ___."

explicacion: |
  El Pascal (Pa) es la unidad derivada del Newton (N) y el metro cuadrado (m²), definida como 1 Pa = 1 N/m².
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["ordenar", "componentes"]

tipo: ordenar
opciones_explicitas: ["Fuerza (N)", "Área (m²)", "Presión (Pa)"]
respuesta_orden: ["Fuerza (N)", "Área (m²)", "Presión (Pa)"]

enunciado: "Para resolver un problema de presión mediante la fórmula $P = F/A$, ¿cuál es el orden lógico de los datos que debemos identificar para realizar la división?"

explicacion: |
  Primero identificamos la fuerza (numerador), luego el área (denominador) y finalmente calculamos el cociente que es la presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["presion", "area", "fuerza"]

enunciado: "Si se mantiene la misma fuerza aplicada sobre una superficie, pero el área de contacto se reduce a la mitad, la presión resultante será ___ veces la presión original."

respuestas_validas:
  - "2"
respuesta: "2"
tipo: completar

explicacion: |
  La presión es inversamente proporcional al área ($P = F/A$). Si el área disminuye ($A/2$), la presión se duplica ($2P$).
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["unidades", "error_comun"]

variables:
  datos: [[100, 2, 50], [200, 4, 50], [50, 0.5, 100]]
  idx: uno_de([0, 1, 2])

enunciado: "Se aplica una fuerza de {datos[idx][0]} N sobre una superficie de {datos[idx][1]} m². ¿Cuál es la presión en Pascales (Pa)?"

pasos:
  - "Identificar la fórmula: P = F / A"
  - "Sustituir: P = {datos[idx][0]} / {datos[idx][1]}"

respuesta: datos[idx][2]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La presión se calcula como P = F / A. Un Pascal (Pa) equivale a un Newton por metro cuadrado (N/m²).
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Un clavo tiene una punta muy afilada. Esto se hace para que, al aplicar una fuerza, la presión sobre la superficie sea:"

opciones_explicitas: ["mayor", "menor", "igual"]
respuesta: "mayor"
tipo: mc

explicacion: |
  Al reducir el área de contacto (punta afilada), la presión aumenta significativamente para una misma fuerza aplicada.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["conceptos", "distincion"]

enunciado: "Si un objeto se sumerge en un fluido y la presión sobre él aumenta debido a la profundidad, ¿la fuerza total ejercida por el fluido sobre el objeto cambia necesariamente?"

respuesta: verdadero
tipo: vf
explicacion: |
  La presión es una magnitud intensiva (no depende de la cantidad de materia), pero la fuerza es la presión multiplicada por el área ($F = P \cdot A$). Si la presión aumenta y el área es constante, la fuerza también aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "avanzado"
  tags: ["ordenar", "conceptos"]

enunciado: "Ordene las siguientes situaciones de MAYOR a MENOR presión aplicada, asumiendo que la fuerza aplicada es siempre la misma en todos los casos:"

opciones_explicitas: ["Persona sobre tacones finos", "Persona sobre pies descalzos", "Persona sobre raquetas de nieve"]
respuesta_orden: ["Persona sobre tacones finos", "Persona sobre pies descalzos", "Persona sobre raquetas de nieve"]
tipo: ordenar

explicacion: |
  A menor área, mayor presión. Los tacones concentran la fuerza en un área muy pequeña (máxima presión), mientras que las raquetas de nieve distribuyen la fuerza en un área grande (mínima presión).
```

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza"
  nivel: "basico"
  tags: ["presion", "fuerza", "conceptos"]

respuesta: "fuerza"
tipo: "mc"
opciones_explicitas: ["fuerza", "presion", "area", "densidad"]

enunciado: "Mientras que la presión es la magnitud que describe la intensidad de una interacción por unidad de superficie, la ___ es la magnitud escalar que mide la intensidad de una interacción sin considerar el área de aplicación."

explicacion: |
  La fuerza es la causa (medida en Newtons), mientras que la presión es la distribución de esa fuerza sobre una superficie (medida en Pascales).
```

```
metadata:
  materia: "fisica"
  tema: "presion_area"
  nivel: "intermedio"
  tags: ["presion", "area", "relacion_inversa"]

variables:
  escenario: uno_de([[100, 2], [50, 5], [200, 4]])

respuesta: verdadero
tipo: vf

enunciado: "Si aplicamos una fuerza constante de 100 N sobre una superficie, y la superficie se reduce a la mitad de su tamaño original, ¿la presión resultante será mayor que la inicial? (verdadero/falso)"

explicacion: |
  Dado que P = F/A, si el área (A) disminuye, la presión (P) aumenta. En este caso, al reducir el área a la mitad, la presión se duplica.
```

```
metadata:
  materia: "fisica"
  tema: "unidades_presion"
  nivel: "basico"
  tags: ["unidades", "pascal", "newton"]

respuestas_validas:
  - "Pascal"
  - "Pa"
tipo: "completar"

enunciado: "La unidad de medida de la presión en el Sistema Internacional de Unidades es el ___."

explicacion: |
  El Pascal (Pa) se define como un Newton por metro cuadrado (1 N/m²).
```

```
metadata:
  materia: "fisica"
  tema: "presion_comparacion"
  nivel: "intermedio"
  tags: ["presion", "comparacion"]

variables:
  caso: uno_de([[10, 5], [20, 2], [8, 3]])

respuesta: "El caso con menor área"
tipo: "mc"
opciones_explicitas: ["El caso con mayor área", "El caso con menor área", "Ambos casos tienen la misma presión"]

enunciado: "Se tienen dos objetos con la misma fuerza aplicada. El objeto A tiene un área de {caso[0]} m² y el objeto B tiene un área de {caso[1]} m². ¿Cuál de los dos presenta una mayor presión?"

explicacion: |
  A menor área, mayor presión. El objeto con el área más pequeña ({caso[1]} m²) tendrá la presión más alta.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "avanzado"
  tags: ["presion", "densidad", "profundidad"]

respuesta: "densidad"
tipo: "completar"

enunciado: "En un fluido en reposo, la presión hidrostática depende de la profundidad y de la ___ del fluido, pero es independiente de la forma del recipiente."

explicacion: |
  La fórmula de la presión hidrostática es P = rho * g * h, donde rho es la densidad del fluido.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["presion", "fuerza", "area"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [[400, 0.02], [600, 0.05]]
  fuerza: datos[escenario_idx][0]
  area: datos[escenario_idx][1]
  respuesta_correcta: fuerza / area

respuesta: respuesta_correcta
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una persona de {fuerza} N de peso se apoya sobre una superficie con un área de contacto de {area} m². ¿Cuál es la presión ejercida en Pascales (Pa)?"

explicacion: |
  La presión se define como la fuerza aplicada por unidad de área: P = F / A.
  En este caso: {fuerza} / {area} = {respuesta_correcta} Pa.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["conceptos", "presion"]

respuesta: "menor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Si una misma fuerza se aplica sobre una superficie con un área de contacto más grande, la presión resultante será ___."

explicacion: |
  Como la presión es inversamente proporcional al área (P = F/A), al aumentar el área, la presión disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["presion", "area"]

variables:
  fuerza: uno_de([10, 20])
  area_punta: 0.0001
  area_cabeza: 0.01

respuesta: "mayor"
tipo: completar

enunciado: "Considerando un clavo con una punta muy fina y una cabeza ancha. Si aplicamos una fuerza constante, la presión en la punta es ___ que la presión en la cabeza."

explicacion: |
  A menor área (la punta), la presión es mucho más alta, lo que permite que el clavo penetre la madera.
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la unidad de presión en el Sistema Internacional es el Newton (N)?"

explicacion: |
  Falso. El Newton (N) es unidad de fuerza. La presión es Newton por metro cuadrado (N/m²), también llamado Pascal (Pa).
```

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["procedimiento", "calculo"]

opciones_explicitas: ["Identificar la fuerza y el área", "Dividir la fuerza por el área", "Verificar las unidades de medida"]
respuesta_orden: ["Identificar la fuerza y el área", "Verificar las unidades de medida", "Dividir la fuerza por el área"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema de presión donde te dan la fuerza en Newtons y el área en centímetros cuadrados:"

explicacion: |
  1. Identificar los datos (F y A).
  2. Convertir unidades si es necesario (cm² a m²).
  3. Aplicar la fórmula P = F/A.
```

## Sección: reflexion-espejos-planos-curvos (27 preguntas)

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "basico"
  tags: ["reflexion", "luz"]

respuesta: verdadero
tipo: vf

enunciado: "La reflexión especular ocurre cuando la luz rebota en una superficie lisa, como un espejo plano."

explicacion: |
  La reflexión especular mantiene la dirección de los rayos de luz, permitiendo la formación de imágenes claras.
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "basico"
  tags: ["ley_reflexion", "angulos"]

variables:
  angulo_incidencia: 45

respuesta: 45
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un rayo de luz incide sobre un espejo plano con un ángulo de incidencia de {angulo_incidencia} grados respecto a la normal, el ángulo de reflexión será de ___ grados."

pasos:
  - "Identificar el ángulo de incidencia respecto a la normal."
  - "Aplicar la ley de la reflexión: ángulo de incidencia = ángulo de reflexión."

explicacion: |
  Según la ley de la reflexión, el ángulo de incidencia es siempre igual al ángulo de reflexión.
```

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "basico"
  tags: ["espejos", "concavo", "convexo"]

variables:
  idx: uno_de([0, 1])
  escenario: [["cóncavo", "hacia adentro"], ["convexo", "hacia afuera"]]

respuesta: escenario[idx][0]
tipo: mc
opciones_explicitas: ["cóncavo", "convexo"]

enunciado: "Un espejo cuya superficie reflectante está orientada hacia el interior de la curva se denomina espejo ___."

explicacion: |
  Los espejos cóncavos tienen la superficie curva hacia el observador (como una cuchara), mientras que los convexos la tienen hacia afuera.
```

```
metadata:
  materia: "fisica"
  tema: "espejos_planos"
  nivel: "intermedio"
  tags: ["imagen", "espejo_plano"]

respuesta: "derecha"
tipo: completar
respuestas_validas:
  - "derecha"
  - "izquierda"

enunciado: "En un espejo plano, la imagen es virtual, de igual tamaño y tiene la misma orientación, pero la imagen es ___ respecto al objeto."

explicacion: |
  La imagen en un espejo plano es simétrica respecto al plano del espejo, lo que se conoce como imagen lateralmente invertida o derecha (en términos de orientación vertical).
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "intermedio"
  tags: ["proceso", "luz"]

respuesta_orden: ["emisión", "incidencia", "reflexión", "percepción"]
tipo: ordenar
opciones_explicitas: ["emisión", "incidencia", "reflexión", "percepción"]

enunciado: "Ordena los pasos físicos que permiten que veamos nuestra imagen en un espejo:"

pasos:
  - "La fuente de luz emite fotones."
  - "La luz llega a la superficie del espejo."
  - "La luz rebota siguiendo las leyes de la reflexión."
  - "La luz llega a nuestros ojos."

explicacion: |
  Para ver una imagen, primero debe haber una fuente de luz, luego la luz debe incidir en el objeto, reflejarse hacia el espejo y finalmente llegar al observador.
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "basico"
  tags: ["espejos", "foco", "distancia"]

variables:
  f: 15.0

respuesta: 30.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un espejo cóncavo tiene una distancia focal de {f} cm, ¿a qué distancia debe colocarse un objeto para que la imagen se forme exactamente en la misma posición que el objeto (imágenes infinitas)?"

pasos:
  - "Identificar la distancia focal: f = 15 cm."
  - "Para que la imagen se forme en la misma posición que el objeto, este debe estar en el centro de curvatura (C = 2f)."
  - "Calcular: C = 2 * 15 = 30 cm."

explicacion: |
  Cuando un objeto se coloca en el centro de curvatura (C = 2f) de un espejo cóncavo, los rayos incidentes se reflejan sobre sí mismos y la imagen se forma exactamente en la misma posición que el objeto (real, invertida y del mismo tamaño).
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "intermedio"
  tags: ["espejos", "calculo", "foco"]

variables:
  f: 20.0
  s: 15.0

respuesta: -60.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un espejo cóncavo tiene una distancia focal de {f} cm. Si colocamos un objeto a una distancia de {s} cm del espejo, ¿cuál es la posición de la imagen (s') en centímetros? (Indique valor negativo para imágenes virtuales)."

pasos:
  - "Usar la ecuación de los espejos: 1/s + 1/s' = 1/f"
  - "Sustituir valores: 1/15 + 1/s' = 1/20"
  - "Despejar 1/s': 1/s' = 1/20 - 1/15 = 3/60 - 4/60 = -1/60"
  - "s' = -60 cm (imagen virtual, ya que el objeto está entre el foco y el espejo)"

explicacion: |
  Usamos la ecuación de Gauss: 1/s + 1/s' = 1/f.
  1/15 + 1/s' = 1/20
  1/s' = 1/20 - 1/15 = (3 - 4) / 60 = -1/60
  s' = -60 cm. El signo negativo indica que la imagen es virtual, ya que el objeto está entre el foco y el espejo.
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "intermedio"
  tags: ["espejos", "calculo", "foco"]

variables:
  f: 20.0
  s: 12.0

respuesta: -30.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un espejo cóncavo tiene una distancia focal de {f} cm. Si colocamos un objeto a una distancia de {s} cm del espejo, ¿cuál es la posición de la imagen (s') en centímetros? (Indique valor negativo para imágenes virtuales)."

explicacion: |
  Usamos la ecuación de Gauss: 1/s + 1/s' = 1/f.
  1/12 + 1/s' = 1/20
  1/s' = 1/20 - 1/12 = (3 - 5) / 60 = -2 / 60
  s' = -60 / 2 = -30 cm.
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "basico"
  tags: ["espejos", "convexo", "imagen"]

respuesta: "virtual"
tipo: mc
opciones_explicitas: ["real", "virtual", "imaginaria", "doble"]

enunciado: "Un espejo convexo siempre produce imágenes de este tipo, independientemente de la posición del objeto."

explicacion: |
  Los espejos convexos siempre divergen los rayos de luz, por lo que la imagen siempre se forma detrás del espejo, siendo virtual, derecha y de menor tamaño.
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

opciones_explicitas: ["Calcular la distancia de la imagen (s') usando la ecuación de los espejos", "Determinar la distancia focal (f) a partir del radio de curvatura", "Calcular la amplificación lateral (m) usando m = -s'/s"]

respuesta_orden: ["Determinar la distancia focal (f) a partir del radio de curvatura", "Calcular la distancia de la imagen (s') usando la ecuación de los espejos", "Calcular la amplificación lateral (m) usando m = -s'/s"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular la amplificación lateral de una imagen formada por un espejo curvo si solo conocemos el radio de curvatura y la posición del objeto."

explicacion: |
  Primero necesitas el foco (f = R/2), luego la posición de la imagen (s') con la ecuación de Gauss, y finalmente la relación de tamaños (m).
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "basico"
  tags: ["espejo_plano", "verdadero"]

respuesta: verdadero
tipo: vf

enunciado: "En un espejo plano, la distancia del objeto al espejo es igual a la distancia de la imagen al espejo."

explicacion: |
  Por definición de la reflexión en espejos planos, la imagen es simétrica respecto al plano del espejo.
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos_curvos"
  nivel: "basico"
  tags: ["foco", "radio"]

variables:
  R: 50.0

respuesta: 25.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un espejo esférico tiene un radio de curvatura de {R} cm, ¿cuál es su distancia focal (f)?"

explicacion: |
  La distancia focal (f) es la mitad del radio de curvatura (R): f = R / 2.
  f = 50 / 2 = 25 cm.
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos"
  nivel: "basico"
  tags: ["espejos", "reflexion", "imagen"]

respuesta: "virtual"
tipo: mc
opciones_explicitas: ["real", "virtual", "imaginaria", "proyectable"]

enunciado: "En un espejo plano, la imagen que se forma detrás de la superficie reflectante se denomina imagen ___."

explicacion: |
  Una imagen es virtual cuando los rayos de luz parecen provenir de un punto detrás del espejo, pero no se cruzan físicamente en el espacio, por lo que no puede proyectarse en una pantalla.
```

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos_convexos"
  nivel: "intermedio"
  tags: ["convexo", "imagen", "tamaño"]

variables:
  escenario: uno_de([["espejo_convexo", "siempre menor", "siempre mayor", "igual"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["siempre menor", "siempre mayor", "igual"]

enunciado: "Un objeto se coloca frente a un espejo convexo. La imagen resultante será ___ que el objeto original."

explicacion: |
  Los espejos convexos (como los de los retrovisores de autos) siempre producen imágenes virtuales, derechas y de tamaño reducido para permitir un mayor campo de visión.
```

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos_concavos"
  nivel: "avanzado"
  tags: ["concavo", "imagen_real", "foco"]

respuesta: "frente"
tipo: completar
respuestas_validas:
  - "frente"

enunciado: "Para que un espejo cóncavo produzca una imagen real que pueda ser proyectada en una pantalla, el objeto debe colocarse ___ al espejo."

explicacion: |
  Las imágenes reales solo se forman cuando los rayos de luz convergen físicamente. En un espejo cóncavo, esto ocurre solo si el objeto está más allá del foco.
```

```
metadata:
  materia: "fisica"
  tema: "espejos_planos"
  nivel: "basico"
  tags: ["simetria", "distancia"]

respuesta: verdadero
tipo: vf

enunciado: "En un espejo plano, la distancia del objeto al espejo es exactamente igual a la distancia de la imagen al espejo."

explicacion: |
  Una de las propiedades fundamentales de los espejos planos es que la imagen es simétrica respecto al plano del espejo.
```

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos_concavos"
  nivel: "avanzado"
  tags: ["orden", "enfoque", "distancia"]

respuesta_orden: ["Objeto muy lejos (más allá del foco)", "Objeto en el centro de curvatura", "Objeto muy cerca (entre foco y vértice)"]
tipo: ordenar
opciones_explicitas: ["Objeto muy lejos (más allá del foco)", "Objeto en el centro de curvatura", "Objeto muy cerca (entre foco y vértice)"]

enunciado: "Ordena las siguientes situaciones de un espejo cóncavo según el tipo de imagen que se forma (de imagen REAL a imagen VIRTUAL):"

explicacion: |
  1. Más allá del foco: Imagen real e invertida.
  2. En el centro de curvatura: Imagen real, invertida y de igual tamaño.
  3. Entre el foco y el vértice: Imagen virtual, derecha y de mayor tamaño.
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos"
  nivel: "basico"
  tags: ["optica", "espejos"]

respuesta: "virtual"
tipo: completar
respuestas_validas:
  - "virtual"

enunciado: "A diferencia de una imagen real que puede proyectarse en una pantalla, la imagen formada por un espejo plano es de naturaleza ___."

explicacion: |
  En un espejo plano, los rayos de luz divergen tras la reflexión, por lo que sus prolongaciones se interceptan detrás del espejo, creando una imagen virtual que no puede ser proyectada.
```

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "intermedio"
  tags: ["espejos", "reflexion"]

respuesta: verdadero
tipo: vf
enunciado: "Considerando la desviación de los rayos de luz tras la reflexión: ¿Es cierto que un espejo convexo siempre produce una imagen virtual y divergente, a diferencia de un espejo cóncavo que puede producir imágenes reales?"

explicacion: |
  Los espejos convexos siempre divergen los rayos, resultando en imágenes virtuales, derechas y de menor tamaño. Los cóncavos, según la posición del objeto, pueden converger rayos y formar imágenes reales.
```

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "avanzado"
  tags: ["optica", "espejos_concavos"]

variables:
  idx: uno_de([0, 1])
  distancias: [5, 1]
  resultados_texto: ["Real e invertida", "Virtual y derecha"]

respuesta: resultados_texto[idx]

opciones_explicitas: ["Real e invertida", "Virtual y derecha"]
tipo: mc

enunciado: "Si colocamos un objeto a una distancia de {distancias[idx]} cm de un espejo cóncavo de radio de curvatura de 4 cm, la imagen resultante será:"

explicacion: |
  Si el objeto está más allá del foco (distancia > radio/2), la imagen es real e invertida. Si el objeto está entre el foco y el espejo (distancia < radio/2), la imagen es virtual y derecha.
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "intermedio"
  tags: ["optica", "rayos_luz"]

opciones_explicitas: ["Incidencia", "Reflexión", "Propagación"]
respuesta_orden: ["Propagación", "Incidencia", "Reflexión"]
tipo: ordenar

enunciado: "Ordene cronológicamente los fenómenos que ocurren cuando un rayo de luz se encuentra con un espejo plano:"

explicacion: |
  El rayo primero viaja por el medio (propagación), llega a la superficie (incidencia) y luego cambia de dirección (reflexión).
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos"
  nivel: "basico"
  tags: ["optica", "imágenes"]

respuesta: verdadero
tipo: vf

enunciado: "Una imagen se denomina 'real' si los rayos de luz que la forman convergen físicamente en un punto, a diferencia de la imagen 'virtual' donde solo se produce la intersección de las prolongaciones de los rayos. ¿Es esto correcto?"

explicacion: |
  Efectivamente, la distinción fundamental radica en si los rayos convergen físicamente en el espacio (real) o si la imagen es una construcción visual de las trayectorias (virtual).
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos"
  nivel: "basico"
  tags: ["optica", "reflexion"]

variables:
  idx: uno_de([0,1])
  datos: [["espejo plano", "la imagen es del mismo tamaño que el objeto"], ["espejo plano", "la imagen es invertida lateralmente"]]
  escenario: uno_de([["un pasillo de supermercado", "espejo plano"], ["un baño", "espejo plano"]])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["la imagen es del mismo tamaño que el objeto", "la imagen es invertida lateralmente", "la imagen es siempre mayor", "la imagen es siempre menor"]

enunciado: "En {escenario[0]}, el uso de un {escenario[1]} permite ver el entorno. En este caso, la característica de la imagen es que ___."

explicacion: |
  En un espejo plano, la imagen es virtual, derecha y de igual tamaño que el objeto, aunque presenta inversión lateral.
```

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "intermedio"
  tags: ["espejos_curvos", "concavo"]

variables:
  tipo_lado: uno_de([0,1])
  lados: [["la parte interna (cóncava)", "se ve invertida"], ["la parte externa (convexa)", "se ve derecha"]]

respuesta: lados[tipo_lado][1]
tipo: mc
opciones_explicitas: ["se ve invertida", "se ve derecha", "se ve aumentada", "se ve reducida"]

enunciado: "Si observas tu rostro en una cuchara de metal, el efecto dependerá de qué parte uses. Si miras por {lados[tipo_lado][0]}, la imagen que percibes ___."

explicacion: |
  La parte interna de la cuchara actúa como un espejo cóncavo. Dependiendo de la distancia, la imagen puede ser real e invertida o virtual y aumentada.
```

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "intermedio"
  tags: ["espejos_convexos", "seguridad"]

respuesta: verdadero
tipo: vf
enunciado: "Los espejos situados en las salidas de los estacionamientos o en curvas peligrosas suelen ser convexos para ampliar el campo visual. ¿Es cierto que un espejo convexo siempre produce imágenes virtuales y menores que el objeto?"

explicacion: |
  Verdadero. Los espejos convexos divergen los rayos de luz, lo que resulta en imágenes siempre virtuales, derechas y de menor tamaño, permitiendo un campo visual más amplio.
```

```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_curvos"
  nivel: "avanzado"
  tags: ["espejos_curvos", "ordenar"]

respuesta_orden: ["Luz incidente", "Reflexión en la superficie curva", "Formación de la imagen"]
tipo: ordenar

enunciado: "Para entender cómo se forma una imagen en un espejo curvo, debemos seguir el camino de la luz. Ordena los siguientes eventos:"

pasos:
  - "La luz viaja hacia el espejo"
  - "Los rayos rebotan en el espejo"
  - "Los rayos convergen o divergen para crear la imagen"

opciones_explicitas: ["Luz incidente", "Reflexión en la superficie curva", "Formación de la imagen"]

explicacion: |
  El proceso óptico comienza con la incidencia de la luz, sigue con el fenómeno de la reflexión (segunda ley) y culmina con la percepción de la imagen.
```

```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "avanzado"
  tags: ["espejos_concavos", "distancia"]

variables:
  distancia_tipo: uno_de([0,1])
  casos: [["muy cerca (dentro del foco)", "aumentada"], ["muy lejos (fuera del foco)", "invertida"]]

respuesta: casos[distancia_tipo][1]
tipo: completar

enunciado: "En un espejo cóncavo, si el objeto se coloca ___ , la imagen resultante será ___."

pasos:
  - "Identificar la posición del objeto respecto al foco"
  - "Determinar si la imagen es real o virtual"

respuestas_validas:
  - "aumentada"
  - "invertida"

explicacion: |
  Si el objeto está entre el foco y el espejo, la imagen es virtual, derecha y aumentada. Si el objeto está más allá del foco, la imagen es real e invertida.
```

## Sección: caudal-q-a-v (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["definicion", "caudal"]

tipo: mc
opciones_explicitas: ["El volumen de fluido que pasa por una sección por unidad de tiempo", "La velocidad con la que se desplaza un fluido", "La presión ejercida por un fluido en reposo", "La masa total de un fluido en un recipiente"]
respuesta: "El volumen de fluido que pasa por una sección por unidad de tiempo"
enunciado: "El caudal (Q) se define físicamente como ___."
explicacion: |
  El caudal representa el volumen de fluido que atraviesa una sección transversal de un conducto en un intervalo de tiempo determinado.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["relacion_variables", "formula"]

tipo: completar
respuestas_validas:
  - "velocidad"
  - "velocidad media"

enunciado: "En la ecuación del caudal para un fluido incompresible, Q = A · v, la variable 'A' representa el área de la sección transversal y 'v' representa la ___."

pasos:
  - "Identificar la variable que multiplica al área en la fórmula del caudal."

explicacion: |
  En la fórmula Q = A · v, donde Q es el caudal, A es el área y v es la velocidad media del fluido.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

tipo: mc
opciones_explicitas: ["m³/s", "m/s", "kg/m³", "N/m²"]
respuesta: "m³/s"

enunciado: "En el Sistema Internacional de Unidades (SI), la unidad resultante para el caudal es ___."

explicacion: |
  Dado que el caudal es volumen (m³) dividido por tiempo (s), su unidad es m³/s.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["incompresibilidad", "teoria"]

tipo: vf

enunciado: "Si un fluido es incompresible, su densidad permanece constante independientemente de los cambios en la velocidad o la presión."

respuesta: verdadero

explicacion: |
  Por definición, un fluido incompresible es aquel cuya densidad no varía significativamente bajo cambios de presión, lo que permite aplicar la ecuación de continuidad de forma directa.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["componentes", "conceptos"]

tipo: completar
respuestas_validas:
  - "sección"
  - "tiempo"
  - "volumen"

enunciado: "Para calcular el caudal, es necesario conocer el ___ que atraviesa una ___ en un determinado ___."

explicacion: |
  El caudal relaciona el volumen, el área de la sección y el tiempo transcurrido.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["definicion", "caudal"]

respuesta: verdadero
tipo: vf

enunciado: "El caudal (Q) representa el volumen de fluido que pasa por una sección transversal por unidad de tiempo."

explicacion: |
  Efectivamente, el caudal mide la rapidez con la que un fluido atraviesa una sección determinada.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["calculo", "caudal"]

variables:
  escenario: uno_de([[0.5, 2.0], [0.8, 3.5], [1.2, 5.0]])

respuesta: escenario[0] * escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un fluido circula por una tubería con un área transversal de {escenario[0]} m² y una velocidad de {escenario[1]} m/s. ¿Cuál es el caudal Q en m³/s?"

pasos:
  - "Identificar el área (A) y la velocidad (v)."
  - "Aplicar la fórmula Q = A * v."
  - "Multiplicar {escenario[0]} m² por {escenario[1]} m/s."

explicacion: |
  El cálculo es: Q = A * v = {escenario[0]} * {escenario[1]} = {escenario[0] * escenario[1]} m³/s.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["despeje", "velocidad"]

variables:
  datos: uno_de([[10.0, 0.05], [20.0, 0.12], [5.0, 0.08]])

respuesta: datos[0] / datos[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un caudal de {datos[0]} m³/s atraviesa una sección de {datos[1]} m², ¿cuál es la velocidad del fluido en m/s?"

pasos:
  - "Partir de la fórmula Q = A * v."
  - "Despejar la velocidad: v = Q / A."
  - "Dividir {datos[0]} entre {datos[1]}."

explicacion: |
  Usando el despeje: v = Q / A = {datos[0]} / {datos[1]} = {datos[0] / datos[1]} m/s.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

respuesta: "m³/s"
tipo: completar
respuestas_validas:
  - "m³/s"

enunciado: "En el Sistema Internacional, la unidad de medida del caudal es ___."

explicacion: |
  El caudal es volumen (m³) dividido por tiempo (s), por lo tanto, su unidad es m³/s.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

respuesta: "Aumenta"
tipo: mc
opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene constante", "Se vuelve cero"]

enunciado: "Si el área de la sección transversal de una tubería se duplica mientras el caudal se mantiene constante, la velocidad del fluido ___."

explicacion: |
  Como Q = A * v, si Q es constante, A y v son inversamente proporcionales. Si el área aumenta, la velocidad debe disminuir para mantener el mismo caudal.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["unidades", "caudal", "seccion"]

variables:
  radio: 0.05
  velocidad: 2.0

respuesta: 0.0157
tipo: completar
tolerancia_abs: 0.0001

enunciado: "Un tubo circular tiene un radio de {radio} m y el fluido circula con una velocidad de {velocidad} m/s. ¿Cuál es el caudal Q en m³/s? (Usa pi como pi)"

pasos:
  - "Calcula el área de la sección transversal: A = pi * radio^2"
  - "Calcula el caudal usando la fórmula Q = A * v"

explicacion: |
  El caudal Q es el producto del área de la sección transversal por la velocidad.
  A = pi * (0.05)^2 = 0.007853... m²
  Q = 0.007853 * 2.0 = 0.0157 m³/s.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["diametro", "error_comun"]

opciones_explicitas: ["Es correcto", "Es incorrecto"]

respuesta: "Es incorrecto"
tipo: mc

enunciado: "Si un problema te da el diámetro de una tubería de 0.4 m, y utilizas directamente el valor 0.4 en la fórmula del área (A = pi * r^2) en lugar de dividirlo por 2 primero, ¿es correcto este procedimiento?"

explicacion: |
  Es incorrecto. El error común es usar el diámetro en lugar del radio. Como el radio es la mitad del diámetro, usar el diámetro directamente sobreestima el área y, por lo tanto, el caudal.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "intermedio"
  tags: ["continuidad", "velocidad"]

respuesta: "duplicarse"
respuestas_validas:
  - "duplicarse"
  - "aumentar al doble"
tipo: completar
enunciado: "En una tubería con sección constante, si el área de la sección transversal se reduce a la mitad, la velocidad del fluido debe ___ para mantener el mismo caudal."

pasos:
  - "Si el caudal Q es constante, entonces A1 * v1 = A2 * v2"
  - "Si A2 = 0.5 * A1, entonces v2 = v1 / 0.5 = 2 * v1"

explicacion: |
  Para que el caudal sea constante, la velocidad debe aumentar inversamente a la disminución del área. Si el área se reduce a la mitad, la velocidad se duplica.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuestas_validas:
  - "A * v"
  - "v * A"
  - "A * v"
  - "v * A"

respuesta: "A * v"
tipo: completar

enunciado: "La expresión matemática que define el caudal Q en función del área de la sección transversal (A) y la velocidad media del fluido (v) es ___."

explicacion: |
  El caudal Q representa el volumen por unidad de tiempo, que se calcula multiplicando el área de la sección por la velocidad del fluido.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_q_a_v"
  nivel: "basico"
  tags: ["unidades"]

opciones_explicitas: ["m/s", "m²", "m³/s", "kg/m³"]

respuesta: "m³/s"
tipo: mc

enunciado: "Si el área se mide en m² y la velocidad en m/s, ¿cuál es la unidad resultante para el caudal Q?"

explicacion: |
  Al multiplicar m² (área) por m/s (velocidad), obtenemos m³/s (volumen por tiempo).
```

```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "basico"
  tags: ["caudal", "velocidad", "seccion"]

respuesta: "velocidad"
tipo: "mc"
opciones_explicitas: ["caudal", "velocidad", "presion", "densidad"]

enunciado: "Mientras que el caudal representa el volumen de fluido que pasa por una sección en un tiempo determinado, la ___ representa la rapidez con la que se desplaza el fluido por dicha sección."

explicacion: |
  El caudal ($Q$) es una medida de volumen por unidad de tiempo ($m^3/s$), mientras que la velocidad ($v$) es la distancia recorrida por el fluido por unidad de tiempo ($m/s$).
```

```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "intermedio"
  tags: ["caudal", "seccion", "velocidad"]

variables:
  escenario: uno_de([["0.05", "2.0"], ["0.10", "1.0"], ["0.20", "0.5"]])

respuesta: escenario[1]
tipo: "input"
tolerancia_abs: 0.01

enunciado: "Un fluido circula por una tubería con un caudal constante de $Q = 0.1\\ m^3/s$. Si el área de la sección transversal es de $A = {escenario[0]}\\ m^2$, ¿cuál es la velocidad $v$ del fluido en $m/s$?"

pasos:
  - "Identificar la fórmula del caudal: $Q = A \\cdot v$"
  - "Despejar la velocidad: $v = Q / A$"
  - "Sustituir los valores: $v = 0.1 / {escenario[0]}$"

explicacion: |
  Usando la fórmula $Q = A \cdot v$, despejamos $v = Q / A$. Con $Q = 0.1$ y $A = {escenario[0]}$, el resultado es ${escenario[1]}\ m/s$.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "intermedio"
  tags: ["caudal_volumetrico", "flujo_masico", "densidad"]

respuesta: verdadero

tipo: "vf"

enunciado: "Si un fluido tiene la misma densidad en dos puntos de una tubería, pero el área de la sección transversal disminuye, el caudal volumétrico $Q$ debe aumentar para mantener la continuidad si la velocidad se mantiene constante. (Nota: Evaluar si la afirmación sobre la relación entre $Q$, $A$ y $v$ es correcta bajo la premisa de $Q=A \\cdot v$)."

explicacion: |
  La afirmación es falsa en su lógica de comparación: si el área disminuye y el caudal $Q$ es constante (como en un fluido incompresible), la velocidad debe aumentar, no el caudal. El caudal es la constante en este escenario de continuidad.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "basico"
  tags: ["caudal", "componentes"]

respuesta_orden: ["sección transversal", "velocidad media"]
tipo: "ordenar"
opciones_explicitas: ["sección transversal", "velocidad media"]

enunciado: "Ordena estos dos factores según el orden en que aparecen en la fórmula del caudal volumétrico Q = A · v:"

explicacion: |
  El caudal volumétrico Q se define estrictamente como el producto del área de la sección transversal (A) por la velocidad media del fluido (v).
```

```
metadata:
  materia: "fisica"
  tema: "caudal_v_a"
  nivel: "avanzado"
  tags: ["caudal", "densidad", "flujo_masico"]

variables:
  datos: uno_de([[1000, 0.5], [800, 0.5], [1200, 0.5]])

respuesta: "el mismo"
tipo: "mc"
opciones_explicitas: ["mayor", "menor", "el mismo", "indeterminado"]

enunciado: "Si tenemos dos fluidos distintos (uno con densidad ρ1 = {datos[0]} kg/m³ y otro ρ2 = {datos[1]} kg/m³) que pasan por una misma tubería con la misma velocidad v = 2 m/s y la misma sección A = 0.1 m², ¿cómo se comparan sus caudales volumétricos Q?"

explicacion: |
  El caudal volumétrico Q = A · v depende únicamente de la geometría de la sección y la velocidad del fluido. La densidad afecta al flujo másico (m = ρ · Q), pero no al caudal volumétrico. Por lo tanto, los caudales son iguales.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_manguera"
  nivel: "basico"
  tags: ["fluido", "caudal"]

variables:
  escenario_idx: uno_de([0, 1])
  area: [0.0005, 0.005]
  velocidad: [2.0, 2.0]
  resultados_texto: ["0.001 m³/s", "0.01 m³/s"]

respuesta: resultados_texto[escenario_idx]
tipo: mc
opciones_explicitas: ["0.001 m³/s", "0.01 m³/s", "0.05 m³/s", "0.1 m³/s"]

enunciado: "Una manguera de jardín tiene una sección transversal de {area[escenario_idx]} m² y el agua fluye con una velocidad de {velocidad[escenario_idx]} m/s. ¿Cuál es el caudal Q?"

explicacion: |
  El caudal se calcula con la fórmula Q = A · v.
  Para este caso: {area[escenario_idx]} m² * {velocidad[escenario_idx]} m/s = {resultados_texto[escenario_idx]}.
```

```
metadata:
  materia: "fisica"
  tema: "caudal_variacion"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Si el área de la sección transversal de una tubería se reduce a la mitad mientras el caudal Q se mantiene constante, la velocidad del fluido debe disminuir."

explicacion: |
  Falso. Como Q = A · v, si el caudal Q es constante y el área A disminuye, la velocidad v debe aumentar para compensar la reducción de área.
```

```
metadata:
  materia: "fisica"
  tema: "calculo_velocidad"
  nivel: "intermedio"
  tags: ["caudal", "velocidad"]

variables:
  escenarios: [[0.01, 0.0004, 25.0], [0.05, 0.0005, 100.0]]
  idx: uno_de([0, 1])
  caudal: escenarios[idx][0]
  area: escenarios[idx][1]
  velocidad_correcta: escenarios[idx][2]

tipo: completar

enunciado: "Un sistema de riego tiene un caudal de {caudal} m³/s a través de una tubería de {area} m². La velocidad del agua es de ___ m/s."

pasos:
  - "Identificar el caudal (Q) y el área (A)."
  - "Despejar la velocidad de la fórmula Q = A · v, obteniendo v = Q / A."
  - "Realizar la división."

respuestas_validas:
  - velocidad_correcta

explicacion: |
  Usando v = Q / A:
  Caso 1: 0.01 / 0.0004 = 25.
  Caso 2: 0.05 / 0.0005 = 100.
  La respuesta depende del escenario sorteado.
```

```
metadata:
  materia: "fisica"
  tema: "unidades_caudal"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "m³/s"
tipo: completar
respuestas_validas:
  - "m³/s"

enunciado: "En el Sistema Internacional, la unidad fundamental para medir el caudal (Q) es ___."

explicacion: |
  El caudal es volumen por unidad de tiempo. La unidad de volumen es m³ y la de tiempo es s, por lo tanto, m³/s.
```

```
metadata:
  materia: "fisica"
  tema: "procedimiento_caudal"
  nivel: "basico"
  tags: ["metodologia"]

respuesta_orden: ["Medir el área de la sección", "Medir la velocidad del fluido", "Multiplicar ambos valores"]
tipo: ordenar
opciones_explicitas: ["Medir el área de la sección", "Medir la velocidad del fluido", "Multiplicar ambos valores"]

enunciado: "Ordena los pasos necesarios para calcular el caudal Q de una tubería si conoces su geometría y la rapidez del fluido."

explicacion: |
  Para obtener Q = A · v, primero necesitas conocer el área (A) y la velocidad (v), y finalmente multiplicarlos.
```

## Sección: presion-atmosferica (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Qué es la presión atmosférica?"
tipo: mc
opciones_explicitas:
  - "El peso del aire que hay por encima de un punto, repartido sobre su área"
  - "La temperatura del aire en un punto dado"
  - "La cantidad de nubes que hay en el cielo"
respuesta: "El peso del aire que hay por encima de un punto, repartido sobre su área"

explicacion: |
  Es la misma idea general de presión (P=F/A) aplicada al peso de la
  columna de aire de la atmósfera.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "formula"]

respuesta: verdadero
tipo: vf

enunciado: "La presión atmosférica se calcula con la misma fórmula general de presión, P = F/A."

explicacion: |
  El "F" es el peso de la columna de aire, y el "A" el área sobre la que
  se reparte.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Aproximadamente cuánto vale la presión atmosférica a nivel del mar, en hectopascales (hPa)?"
tipo: mc
opciones_explicitas:
  - "1013 hPa"
  - "100 hPa"
  - "10000 hPa"
respuesta: "1013 hPa"

explicacion: |
  Esa es la presión de referencia de "1 atmósfera" (1 atm).
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "altitud"]

respuesta: verdadero
tipo: vf

enunciado: "A mayor altitud, la presión atmosférica disminuye, porque hay menos columna de aire por encima empujando hacia abajo."

explicacion: |
  Por eso cuesta más respirar en la cima de una montaña alta.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

enunciado: "¿Por qué los aviones presurizan la cabina en vuelo?"
tipo: mc
opciones_explicitas:
  - "Porque a la altitud de crucero la presión externa es demasiado baja para respirar sin ayuda"
  - "Porque a la altitud de crucero la presión externa es demasiado alta"
  - "Para que los pasajeros no sientan el frío"
respuesta: "Porque a la altitud de crucero la presión externa es demasiado baja para respirar sin ayuda"

explicacion: |
  A esa altura hay muy poca columna de aire por encima, la presión (y el
  oxígeno disponible) cae mucho.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "temperatura"]

respuesta: verdadero
tipo: vf

enunciado: "El aire caliente es menos denso que el aire frío, porque sus moléculas están más separadas."

explicacion: |
  Por eso el aire caliente tiende a subir.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "temperatura"]

enunciado: "¿Qué zona de presión en superficie tiende a generar el aire cálido, que asciende y se aleja?"
tipo: mc
opciones_explicitas:
  - "Una zona de baja presión"
  - "Una zona de alta presión"
  - "No afecta a la presión en superficie"
respuesta: "Una zona de baja presión"

explicacion: |
  Al subir y alejarse, el aire cálido deja una zona de menor presión
  detrás.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "temperatura"]

enunciado: "¿Qué zona de presión en superficie tiende a generar el aire frío, más denso, que desciende y se acumula?"
tipo: mc
opciones_explicitas:
  - "Una zona de alta presión"
  - "Una zona de baja presión"
  - "No afecta a la presión en superficie"
respuesta: "Una zona de alta presión"

explicacion: |
  El aire frío es más denso, baja y se acumula, generando mayor presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "isobaras"]

enunciado: "¿Qué es una isobara en un mapa del clima?"
tipo: mc
opciones_explicitas:
  - "Una línea que une puntos con la misma presión atmosférica"
  - "Una línea que une puntos con la misma temperatura"
  - "Una línea que marca el límite entre dos países"
respuesta: "Una línea que une puntos con la misma presión atmosférica"

explicacion: |
  Es análoga a las curvas de nivel de un mapa de relieve, pero para
  presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "isobaras"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando las isobaras de un mapa están muy juntas entre sí, eso indica vientos más fuertes."

explicacion: |
  Isobaras juntas significan un cambio de presión brusco en poco
  espacio, lo que genera vientos fuertes.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Cómo se llama una zona de alta presión, con aire frío que desciende y suele traer cielo despejado?"
tipo: mc
opciones_explicitas:
  - "Anticiclón"
  - "Ciclón"
  - "Frente"
respuesta: "Anticiclón"

explicacion: |
  El aire que baja se comprime y se seca, dificultando que se formen
  nubes.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Cómo se llama una zona de baja presión, con aire cálido y húmedo que asciende y suele traer nubosidad e inestabilidad?"
tipo: mc
opciones_explicitas:
  - "Ciclón (o depresión)"
  - "Anticiclón"
  - "Isobara"
respuesta: "Ciclón (o depresión)"

explicacion: |
  El aire que sube se enfría y puede condensar su humedad, generando
  nubes y lluvia.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "viento"]

respuesta: verdadero
tipo: vf

enunciado: "El viento siempre sopla desde la zona de alta presión hacia la zona de baja presión, buscando equilibrar la diferencia."

explicacion: |
  Es el mismo principio que iguala cualquier diferencia de presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "calculo"]

variables:
  fuerza: random(100, 1000)
  area: random(2, 10)

respuesta: fuerza / area
tipo: input
tolerancia_abs: 0.1

enunciado: "Una fuerza de {fuerza} N actúa sobre un área de {area} m². ¿Cuál es la presión resultante, en Pa?"

pasos:
  - "P = F/A = {fuerza}/{area}"

explicacion: |
  Se aplica la fórmula general de presión, P = F/A.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "calculo"]

variables:
  presion: random(50, 500)
  area: random(2, 8)

respuesta: presion * area
tipo: input
tolerancia_abs: 0.1

enunciado: "Sobre un área de {area} m² se ejerce una presión de {presion} Pa. ¿Cuál es la fuerza total, en N?"

pasos:
  - "F = P·A = {presion}·{area}"

explicacion: |
  Se despeja F de P = F/A, multiplicando ambos lados por A.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

variables:
  altura_a: random(0, 1000)
  altura_b: random(2000, 5000)

respuesta: "el punto A"
tipo: mc
opciones_explicitas:
  - "el punto A"
  - "el punto B"
  - "tienen la misma presión"

enunciado: "El punto A está a {altura_a} m de altitud, y el punto B está a {altura_b} m de altitud. ¿En cuál de los dos la presión atmosférica es mayor?"

explicacion: |
  A menor altitud hay más columna de aire por encima, así que la
  presión es mayor.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "clima"]

respuesta: verdadero
tipo: vf

enunciado: "Muchas zonas desérticas del planeta coinciden con bandas de alta presión subtropical permanente, donde el aire que desciende se comprime y se seca."

explicacion: |
  La presión atmosférica es una pieza del mecanismo que explica por qué
  ciertas regiones tienen clima seco o húmedo.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "clima"]

enunciado: "¿Qué tipo de presión predomina en las zonas ecuatoriales, donde el aire cálido y húmedo asciende casi todo el año?"
tipo: mc
opciones_explicitas:
  - "Baja presión"
  - "Alta presión"
  - "Presión constante, igual que en los polos"
respuesta: "Baja presión"

explicacion: |
  El aire que asciende deja zonas de baja presión, asociadas a las
  fuertes lluvias tropicales.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

tipo: completar
respuestas_validas:
  - "hectopascales"
  - "hPa"

enunciado: "Los mapas del clima suelen expresar la presión atmosférica en ____ (unidad, o su abreviatura)."

explicacion: |
  Hectopascal (hPa) es la unidad más usada en meteorología para la
  presión.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

variables:
  nivel_mar: 0
  cerro: 1500
  montana: 4000

tipo: ordenar
opciones_explicitas:
  - "nivel del mar"
  - "cerro (1500 m)"
  - "montaña (4000 m)"
respuesta_orden: ["nivel del mar", "cerro (1500 m)", "montaña (4000 m)"]
enunciado: "Ordená estos tres lugares de mayor a menor presión atmosférica."

explicacion: |
  A mayor altitud, menor presión: nivel del mar tiene la mayor presión,
  la montaña la menor.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "calculo"]

variables:
  fuerza: random(100, 500)
  area: random(2, 5)
  presion_correcta: fuerza / area
  error: uno_de([0, 0, 0, 5, -5])
  presion_mostrada: presion_correcta + error

respuesta: (abs(presion_mostrada - presion_correcta) < 0.01)
tipo: vf

enunciado: "Una fuerza de {fuerza} N sobre un área de {area} m² da, según un cálculo, una presión de {presion_mostrada} Pa. ¿Es correcto ese resultado?"

explicacion: |
  La presión correcta es P = F/A = {presion_correcta}.
```

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "sintesis"]

enunciado: "¿Cuál de estas afirmaciones resume mejor la relación entre presión, altitud y temperatura?"
tipo: mc
opciones_explicitas:
  - "A mayor altitud la presión baja, y el aire cálido (menos denso) genera zonas de baja presión al ascender"
  - "A mayor altitud la presión sube, y el aire cálido genera zonas de alta presión"
  - "La presión atmosférica no depende ni de la altitud ni de la temperatura"
respuesta: "A mayor altitud la presión baja, y el aire cálido (menos denso) genera zonas de baja presión al ascender"

explicacion: |
  Son las dos relaciones centrales del tema: presión vs. altitud, y
  presión vs. temperatura.
```

## Sección: presion-hidrostatica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["definicion", "fluido"]

respuesta: "presion"
tipo: "completar"
respuestas_validas:
  - "presion"

enunciado: "La ________ es la presión que ejerce un fluido en reposo sobre las paredes del recipiente que lo contiene y sobre cualquier cuerpo sumergido en él."

explicacion: |
  La presión hidrostática es la presión que ejerce un fluido en reposo debido al peso de la columna de fluido que tiene encima.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["relaciones", "profundidad"]

opciones_explicitas: ["aumenta", "disminuye", "se mantiene constante"]
respuesta: "aumenta"
tipo: "mc"

enunciado: "Si nos sumergimos en un lago y descendemos hacia el fondo, la presión hidrostática sobre nuestro cuerpo ________."

explicacion: |
  A mayor profundidad (mayor $h$), mayor es el peso de la columna de fluido sobre nosotros, por lo tanto, la presión aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["variables", "formula"]

respuesta: verdadero
tipo: "vf"

enunciado: "La presión hidrostática depende de la densidad del fluido y de la profundidad, pero no depende de la forma del recipiente."

explicacion: |
  Correcto. La fórmula $P = \rho \cdot g \cdot h$ muestra que la presión solo depende de la densidad ($\rho$), la gravedad ($g$) y la profundidad ($h$), no de la geometría del contenedor.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["variables", "formula"]

respuesta: "densidad"
tipo: "mc"
opciones_explicitas: ["densidad", "gravedad", "profundidad"]

enunciado: "En la fórmula de la presión hidrostática $P = \\rho \\cdot g \\cdot h$, la variable $\\rho$ representa la ________."

explicacion: |
  La letra griega $\rho$ (rho) se utiliza convencionalmente en física para representar la densidad de una sustancia.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["conceptos", "orden"]

tipo: ordenar
opciones_explicitas: ["Densidad", "Gravedad", "Profundidad"]
respuesta_orden: ["Densidad", "Gravedad", "Profundidad"]

enunciado: "Ordena los factores que determinan la presión hidrostática según aparecen en la fórmula P = rho * g * h (de izquierda a derecha):"

explicacion: "La secuencia correcta es: Densidad (rho), Gravedad (g) y Profundidad (h)."
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

respuesta: "únicamente de la profundidad, la densidad y la gravedad"
tipo: "mc"
opciones_explicitas: ["únicamente de la profundidad, la densidad y la gravedad", "del área de la base del recipiente", "del volumen total del fluido", "de la forma del recipiente"]

enunciado: "La presión hidrostática en un fluido en reposo depende de la profundidad, la densidad del fluido y la aceleración de la gravedad. Si un recipiente tiene una forma irregular, la presión en el fondo dependerá de:"

pasos:
  - "Identificar que la presión hidrostática no depende de la forma del recipiente, sino de la altura de la columna de fluido."

explicacion: |
  La fórmula es P = ρ · g · h. Como puedes ver, la geometría del recipiente no aparece en la ecuación, solo importa la profundidad vertical (h).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["calculo", "hidrostatica"]

variables:
  escenario: uno_de([[1000, 10, 20, 200000], [800, 5, 10, 40000], [1260, 4, 5, 25200]])

respuesta: escenario[3]
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Calcula la presión hidrostática en el fondo de un tanque que contiene un fluido con densidad de {escenario[0]} kg/m³, a una profundidad de {escenario[1]} m. Considera la gravedad g = {escenario[2]} m/s²."

pasos:
  - "Identificar los datos: ρ = {escenario[0]} kg/m³, h = {escenario[1]} m, g = {escenario[2]} m/s²."
  - "Aplicar la fórmula: P = ρ · g · h."
  - "Calcular: {escenario[0]} * {escenario[2]} * {escenario[1]} = {escenario[3]} Pa."

explicacion: |
  El resultado es {escenario[3]} Pascales (Pa).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["teoria", "relaciones"]

tipo: vf
respuesta: verdadero

enunciado: "Si sumergimos un objeto en un fluido y luego cambiamos ese fluido por uno de mayor densidad (manteniendo la profundidad constante), la presión hidrostática sobre el objeto aumentará."

explicacion: |
  Correcto. Como P = ρ · g · h, la presión es directamente proporcional a la densidad (ρ).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["formula"]

respuesta: "rho * g * h"
tipo: "completar"
respuestas_validas:
  - "rho * g * h"
  - "ρ * g * h"

enunciado: "La expresión matemática para calcular la presión hidrostática es P = ___."

explicacion: |
  La fórmula completa es el producto de la densidad (ρ), la gravedad (g) y la profundidad (h).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["ordenar", "procedimiento"]

tipo: ordenar
opciones_explicitas: ["Identificar datos", "Calcular producto", "Verificar unidades"]
respuesta_orden: ["Identificar datos", "Calcular producto", "Verificar unidades"]

enunciado: "Ordena los pasos lógicos para resolver un problema de presión hidrostática:"

pasos:
  - "Primero extraemos la densidad, la profundidad y la gravedad."
  - "Luego multiplicamos los tres valores obtenidos."
  - "Finalmente nos aseguramos de que el resultado esté en Pascales (N/m²)."

explicacion: |
  Un procedimiento sistemático evita errores de cálculo y de unidades.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["presion", "fluido", "conceptos_clave"]

enunciado: "Un buceador se encuentra a una profundidad de 10 metros bajo la superficie del mar. Si la presión atmosférica en la superficie es de 1 atm, la presión que experimenta el buceador es la suma de la presión atmosférica más la presión hidrostática. ¿La presión hidrostática depende de la presión atmosférica superficial?"

respuesta: falso
tipo: vf

explicacion: |
  La presión hidrostática depende únicamente de la densidad del fluido ($\rho$), la gravedad ($g$) y la profundidad ($h$). La presión atmosférica es una presión externa que se suma para obtener la presión absoluta, pero no altera el valor de la presión hidrostática en sí misma.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["densidad", "presion", "fluido"]

variables:
  idx: uno_de([0, 1, 2])
  densidades: [1000, 800, 1300]
  nombres: ["agua", "aceite", "glicerina"]

enunciado: "Un recipiente contiene un fluido con densidad de {densidades[idx]} kg/m³ ({nombres[idx]}) y una profundidad de 2 metros. Si la gravedad es 9.8 m/s², ¿cuál es la presión hidrostática en el fondo del recipiente?"

pasos:
  - "Identificar la densidad del fluido: {densidades[idx]} kg/m³"
  - "Aplicar la fórmula P = ρ · g · h"
  - "Calcular: {densidades[idx]} * 9.8 * 2"

respuesta: redondear(densidades[idx] * 9.8 * 2, 2)
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  La presión hidrostática se calcula multiplicando la densidad por la gravedad por la profundidad. En este caso: {densidades[idx]} * 9.8 * 2 = {redondear(densidades[idx] * 9.8 * 2, 2)} Pa.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["conceptos", "variables"]

enunciado: "Un recipiente cilíndrico contiene un líquido en reposo. Si aumentamos la profundidad de un punto dentro del líquido sin cambiar la densidad del fluido ni la gravedad, la presión hidrostática en ese punto ___."

opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

respuesta: "aumenta"
tipo: mc

explicacion: |
  De acuerdo a la fórmula $P = \rho \cdot g \cdot h$, la presión es directamente proporcional a la profundidad ($h$). A mayor profundidad, mayor presión hidrostática.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["paradoja_hidrostatica", "forma_recipiente"]

enunciado: "Se tienen dos recipientes: uno es un cilindro recto y el otro es un cono invertido. Ambos están llenos de agua hasta la misma altura de 0.5 metros. ¿Cuál de los dos presenta mayor presión en el fondo debido únicamente a la presión hidrostática?"

opciones_explicitas: ["El cilindro", "El cono", "Ambos tienen la misma presión"]

respuesta: "Ambos tienen la misma presión"
tipo: mc

explicacion: |
  Este es un error común. La presión hidrostática depende de la profundidad y la densidad, NO de la forma del recipiente ni del volumen total de líquido. Como la altura ($h$) es la misma, la presión en el fondo es igual.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["formula", "simbolos"]

enunciado: "En la expresión de la presión hidrostática $P = \\rho \\cdot g \\cdot h$, la variable $\\rho$ representa la ___ del fluido."

respuestas_validas:
  - "densidad"

respuesta: "densidad"
tipo: completar

explicacion: |
  En la fórmula de la presión hidrostática, $\rho$ (rho) es el símbolo utilizado para representar la densidad del fluido.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["presion", "fuerza", "conceptos"]

enunciado: "La presión se define como la fuerza ejercida por unidad de ___."

respuestas_validas:
  - "área"
  - "superficie"

respuesta: "área"
tipo: completar

explicacion: |
  La presión es la magnitud escalar que mide la distribución de una fuerza sobre una superficie ($P = F/A$).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["paradoja_de_pascal", "presion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[40, 100], [50, 150]]
  factor_idx: uno_de([0, 1, 2])
  factores: ["área", "volumen", "forma"]

enunciado: "Considerando un recipiente con un área de base de {datos[escenario_idx][0]} cm² y una profundidad de {datos[escenario_idx][1]} cm, la presión hidrostática en el fondo depende únicamente de la densidad del fluido, la gravedad y la profundidad, siendo independiente del {factores[factor_idx]} del recipiente."

opciones_explicitas: ["área", "volumen", "forma"]

respuesta: factores[factor_idx]
tipo: mc

explicacion: |
  De acuerdo con la ecuación de la presión hidrostática $P = \rho \cdot g \cdot h$, la forma del recipiente o el área de la base no afectan la presión en un punto determinado a una profundidad $h$ constante.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["presion_atmosferica", "presion_total"]

enunciado: "¿Es correcto afirmar que la presión total en el fondo de un tanque con fluido es igual a la suma de la presión atmosférica más la presión hidrostática?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: mc

explicacion: |
  La presión absoluta o total es la suma de la presión manométrica (hidrostática) y la presión ambiental (atmosférica).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["densidad", "comparacion"]

variables:
  fluido_idx: uno_de([0, 1])
  fluidos: [[1000, 800], [800, 1000]]

enunciado: "Si tenemos dos columnas de igual radio y misma altura $h$, pero una contiene un fluido de densidad {fluidos[fluido_idx][0]} kg/m³ y la otra uno de {fluidos[fluido_idx][1]} kg/m³, la presión en la base de la columna con mayor densidad será ___ que la otra."

opciones_explicitas: ["mayor", "menor", "igual"]

respuesta: "mayor"
tipo: mc

explicacion: |
  Dado que $P$ es directamente proporcional a la densidad $\rho$, a mayor densidad, mayor presión hidrostática para una misma profundidad.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["profundidad", "relacion"]

enunciado: "Si la profundidad de un buzo aumenta al doble, la presión hidrostática ejercida por el agua sobre él será exactamente el ___ de la presión inicial (asumiendo densidad y gravedad constantes)."

respuestas_validas:
  - "doble"

respuesta: "doble"
tipo: completar

explicacion: |
  La presión hidrostática es directamente proporcional a la profundidad ($P \propto h$). Si la profundidad se duplica, la presión también.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["fluidos", "presion"]

variables:
  idx: uno_de([0, 1, 2])
  profundidades: [15, 10, 5]

respuesta: 1000 * 9.8 * profundidades[idx]
tipo: completar
tolerancia_abs: 1

enunciado: "Un buzo se encuentra sumergido en agua dulce (densidad = 1000 kg/m³) a una profundidad de {profundidades[idx]} metros. ¿Cuál es la presión hidrostática que soporta (en Pascales)?"

pasos:
  - "Identificar la densidad del fluido (ρ = 1000 kg/m³)."
  - "Identificar la profundidad (h)."
  - "Multiplicar ρ * g * h (usando g = 9.8 m/s²)."

explicacion: |
  La presión hidrostática se calcula con la fórmula P = ρ · g · h.
  Para este caso: 1000 * 9.8 * {profundidades[idx]} = {1000 * 9.8 * profundidades[idx]} Pa.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["comparacion", "fluidos"]

variables:
  nombres: [["agua dulce", "agua salada"], ["agua dulce", "mercurio"], ["agua dulce", "aceite"]]
  densidades: [[1000, 1030], [1000, 13600], [1000, 800]]
  idx: uno_de([0, 1, 2])
  nombre1: nombres[idx][0]
  rho1: densidades[idx][0]
  nombre2: nombres[idx][1]
  rho2: densidades[idx][1]

respuesta: rho1 < rho2
tipo: vf
enunciado: "Si dos recipientes iguales están llenos con {nombre1} (densidad {rho1} kg/m³) y {nombre2} (densidad {rho2} kg/m³) respectivamente, y se miden a la misma profundidad, ¿la presión en el recipiente con {nombre1} es menor que en el de {nombre2}?"

explicacion: |
  La presión hidrostática es directamente proporcional a la densidad del fluido. Comparando: {nombre1} tiene {rho1} kg/m³ y {nombre2} tiene {rho2} kg/m³.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["completar", "fluidos"]

variables:
  idx: uno_de([0, 1, 2])
  profundidades: [5, 10, 2]
  rho: 1000
  g: 9.8
  h: profundidades[idx]
  p_calc: redondear(rho * g * h, 0)

respuesta: h
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un tanque con un fluido de densidad 1000 kg/m³ tiene una profundidad de ___ metros. Si la presión hidrostática en el fondo es de {p_calc} Pa (con g = 9.8 m/s²), ¿cuál es la profundidad?"

explicacion: |
  Despejando la fórmula P = ρ · g · h para la profundidad (h):
  h = P / (ρ · g)
  En este caso: {p_calc} / (1000 * 9.8) ≈ {h} m.
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["mc", "fluidos"]

variables:
  escenarios: [["10000", "10300"], ["25000", "26500"], ["50000", "52000"]]
  idx: uno_de([0, 1, 2])
  p_base: escenarios[idx][0]
  p_sal: escenarios[idx][1]

respuesta: "Presión en agua salada"
tipo: mc
opciones_explicitas: ["Presión en agua dulce", "Presión en agua salada"]

enunciado: "Si comparamos un objeto a la misma profundidad en agua dulce (densidad 1000 kg/m³) y agua salada (densidad 1030 kg/m³), ¿en qué fluido la presión será de aproximadamente {p_sal} Pa?"

explicacion: |
  A mayor densidad, mayor presión hidrostática. El agua salada es más densa, por lo tanto ejerce una presión mayor ({p_sal} Pa) que el agua dulce ({p_base} Pa).
```

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatic"
  nivel: "intermedio"
  tags: ["ordenar", "fluidos"]

variables:
  niveles: [["1m", "5m", "10m"], ["10m", "2m", "5m"], ["20m", "10m", "30m"]]
  idx: uno_de([0, 1, 2])

respuesta_orden: ["1m", "5m", "10m"]
tipo: ordenar
opciones_explicitas: ["1m", "5m", "10m"]

enunciado: "Ordena las profundidades de un buzo de menor a mayor presión hidrostática (asumiendo el mismo fluido):"

explicacion: |
  La presión hidrostática aumenta linealmente con la profundidad. Por lo tanto, el orden de menor a mayor presión corresponde al orden de menor a mayor profundidad.
```

