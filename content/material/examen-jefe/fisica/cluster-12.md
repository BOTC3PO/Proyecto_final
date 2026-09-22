# Examen jefe — [PENDIENTE #747]

> Logro #747. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **119 preguntas totales** en 5/5 secciones.

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

## Sección: masas-de-aire-y-frentes (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["masas_de_aire", "vocabulario"]

enunciado: "¿Qué es una masa de aire?"
tipo: mc
opciones_explicitas:
  - "Un volumen grande de atmósfera con temperatura y humedad relativamente uniformes"
  - "Una nube muy grande y oscura"
  - "El viento que sopla en una tormenta"
respuesta: "Un volumen grande de atmósfera con temperatura y humedad relativamente uniformes"

explicacion: |
  Se forma al permanecer estacionada varios días sobre una misma región.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["masas_de_aire", "clasificacion"]

enunciado: "¿Qué característica tiene una masa de aire polar (P)?"
tipo: mc
opciones_explicitas:
  - "Es fría, porque se formó en latitudes altas"
  - "Es cálida, porque se formó en latitudes bajas"
  - "Siempre es húmeda"
respuesta: "Es fría, porque se formó en latitudes altas"

explicacion: |
  "Polar" indica latitud de origen alta, no humedad.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["masas_de_aire", "clasificacion"]

enunciado: "¿Qué característica tiene una masa de aire tropical (T)?"
tipo: mc
opciones_explicitas:
  - "Es cálida, porque se formó en latitudes bajas"
  - "Es fría, porque se formó en latitudes altas"
  - "Siempre es seca"
respuesta: "Es cálida, porque se formó en latitudes bajas"

explicacion: |
  "Tropical" indica latitud de origen baja, no humedad.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["masas_de_aire", "clasificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una masa de aire marítima (m) se forma sobre el océano y es húmeda."

explicacion: |
  El criterio de humedad depende de la superficie de origen (océano o
  tierra firme), independiente del criterio de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["masas_de_aire", "clasificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una masa de aire continental (c) se forma sobre tierra firme y es seca."

explicacion: |
  Igual que "marítima", es el criterio de humedad, independiente del de
  temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["masas_de_aire", "clasificacion"]

enunciado: "¿Cómo se describe una masa de aire polar marítima (mP)?"
tipo: mc
opciones_explicitas:
  - "Fría y húmeda"
  - "Cálida y húmeda"
  - "Fría y seca"
respuesta: "Fría y húmeda"

explicacion: |
  Polar (fría) + marítima (húmeda).
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["masas_de_aire", "clasificacion"]

enunciado: "¿Cómo se describe una masa de aire tropical continental (cT)?"
tipo: mc
opciones_explicitas:
  - "Cálida y seca"
  - "Fría y húmeda"
  - "Cálida y húmeda"
respuesta: "Cálida y seca"

explicacion: |
  Tropical (cálida) + continental (seca).
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["frentes", "vocabulario"]

enunciado: "¿Qué es un frente meteorológico?"
tipo: mc
opciones_explicitas:
  - "La zona de contacto entre dos masas de aire de características distintas"
  - "Una masa de aire polar"
  - "Otro nombre para la presión atmosférica"
respuesta: "La zona de contacto entre dos masas de aire de características distintas"

explicacion: |
  Ahí es donde se producen los cambios de clima más marcados.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "densidad"]

respuesta: verdadero
tipo: vf

enunciado: "En un frente, la masa de aire más fría y densa se desliza por debajo de la más cálida y liviana."

explicacion: |
  Es la misma idea de densidad que explica por qué el aire cálido sube y
  el frío baja.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "frio"]

enunciado: "En un frente frío, ¿qué ocurre con el aire cálido que estaba antes en la zona?"
tipo: mc
opciones_explicitas:
  - "Es empujado hacia arriba bruscamente por el aire frío que avanza por debajo"
  - "Se desliza suavemente por encima del aire frío"
  - "Se queda estancado sin moverse"
respuesta: "Es empujado hacia arriba bruscamente por el aire frío que avanza por debajo"

explicacion: |
  El aire frío, más denso, avanza y se mete por debajo del cálido.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "frio"]

enunciado: "¿Qué tipo de clima suele traer el paso de un frente frío?"
tipo: mc
opciones_explicitas:
  - "Tormentas eléctricas intensas pero de corta duración"
  - "Llovizna suave y prolongada durante días"
  - "Ningún cambio de clima"
respuesta: "Tormentas eléctricas intensas pero de corta duración"

explicacion: |
  El ascenso brusco del aire cálido genera nubes de desarrollo vertical.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "calido"]

enunciado: "En un frente cálido, ¿cómo avanza el aire cálido respecto del aire frío que se retira?"
tipo: mc
opciones_explicitas:
  - "Se desliza suavemente por encima del aire frío"
  - "Se mete bruscamente por debajo del aire frío"
  - "No avanza, queda estacionario"
respuesta: "Se desliza suavemente por encima del aire frío"

explicacion: |
  El aire cálido es menos denso, así que sube por encima del frío que se
  retira más lentamente.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "calido"]

enunciado: "¿Qué tipo de precipitación suele traer un frente cálido?"
tipo: mc
opciones_explicitas:
  - "Llovizna suave y prolongada, con nubes en capas por delante del frente"
  - "Tormentas eléctricas breves e intensas"
  - "Granizo severo únicamente"
respuesta: "Llovizna suave y prolongada, con nubes en capas por delante del frente"

explicacion: |
  El ascenso del aire es gradual, no brusco.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "avanzado"
  tags: ["frentes", "ocluido"]

enunciado: "¿Cómo se forma un frente ocluido?"
tipo: mc
opciones_explicitas:
  - "Un frente frío, que avanza más rápido, alcanza y atrapa a un frente cálido que iba adelante"
  - "Dos masas de aire se encuentran y ninguna logra desplazar a la otra"
  - "Una sola masa de aire se enfría de golpe"
respuesta: "Un frente frío, que avanza más rápido, alcanza y atrapa a un frente cálido que iba adelante"

explicacion: |
  El aire cálido queda completamente levantado del suelo, atrapado entre
  las dos masas de aire frío.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "avanzado"
  tags: ["frentes", "estacionario"]

enunciado: "¿Qué caracteriza a un frente estacionario?"
tipo: mc
opciones_explicitas:
  - "Ninguna de las dos masas de aire logra desplazar a la otra, y el límite queda casi inmóvil varios días"
  - "El aire frío avanza rápidamente y desplaza al cálido"
  - "El aire cálido atrapa completamente al aire frío"
respuesta: "Ninguna de las dos masas de aire logra desplazar a la otra, y el límite queda casi inmóvil varios días"

explicacion: |
  Suele traer nubosidad y lluvia persistente mientras dura.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["frentes", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "El paso de un frente frío suele ser más rápido y abrupto que el de un frente cálido, que es más lento y gradual."

explicacion: |
  El aire frío avanza empujando bruscamente por debajo; el aire cálido
  se desliza suavemente por arriba.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "avanzado"
  tags: ["frentes", "ocluido"]

respuesta: verdadero
tipo: vf

enunciado: "Un frente ocluido combina características de un frente frío y un frente cálido, con nubosidad variada y precipitación irregular."

explicacion: |
  Es el resultado de la fusión de ambos tipos de frente.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["masas_de_aire", "clasificacion"]

tipo: ordenar
opciones_explicitas:
  - "polar"
  - "templada"
  - "tropical"
respuesta_orden: ["polar", "templada", "tropical"]
enunciado: "Ordená estas regiones de origen de menor a mayor temperatura típica de la masa de aire que generan."

explicacion: |
  De latitudes altas (frío, polar) a bajas (cálido, tropical), pasando
  por las templadas.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "basico"
  tags: ["frentes", "vocabulario"]

tipo: completar
respuestas_validas:
  - "ocluido"

enunciado: "El frente que se forma cuando un frente frío alcanza y atrapa a uno cálido se llama frente ____."

explicacion: |
  Frente ocluido: el aire cálido queda levantado del suelo entre las dos
  masas de aire frío.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "avanzado"
  tags: ["frentes", "sintesis"]

respuesta: verdadero
tipo: vf

enunciado: "Los frentes son la zona donde se producen los ascensos de aire que generan condensación y, por lo tanto, la formación de nubes."

explicacion: |
  Es la conexión directa con el módulo de Formación de nubes.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "intermedio"
  tags: ["masas_de_aire", "comparacion"]

enunciado: "¿Cuál de estas dos masas de aire es más húmeda: una marítima polar (mP), o una continental tropical (cT)?"
tipo: mc
opciones_explicitas:
  - "La marítima polar (mP)"
  - "La continental tropical (cT)"
  - "Las dos tienen la misma humedad"
respuesta: "La marítima polar (mP)"

explicacion: |
  "Marítima" (formada sobre el océano) es el criterio de humedad, no de
  temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "masas_de_aire_y_frentes"
  nivel: "avanzado"
  tags: ["masas_de_aire", "frentes", "sintesis"]

enunciado: "¿Cuál resume mejor la relación entre masas de aire y frentes?"
tipo: mc
opciones_explicitas:
  - "Las masas de aire son volúmenes con temperatura/humedad uniformes, y los frentes son el límite de contacto entre masas distintas, donde ocurren los cambios de clima más marcados"
  - "Las masas de aire y los frentes son el mismo fenómeno con nombres distintos"
  - "Los frentes existen dentro de una sola masa de aire, sin que haya otra masa involucrada"
respuesta: "Las masas de aire son volúmenes con temperatura/humedad uniformes, y los frentes son el límite de contacto entre masas distintas, donde ocurren los cambios de clima más marcados"

explicacion: |
  Son dos conceptos relacionados pero distintos: la masa de aire es el
  volumen, el frente es el límite de contacto entre dos volúmenes.
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

## Sección: formacion-de-nubes (22 preguntas)

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "condensacion"]

enunciado: "¿Qué ocurre con el vapor de agua cuando el aire que lo contiene se enfría lo suficiente al ascender?"
tipo: mc
opciones_explicitas:
  - "Se condensa: pasa de gas a diminutas gotitas líquidas o cristales de hielo"
  - "Se evapora todavía más"
  - "Desaparece del aire por completo"
respuesta: "Se condensa: pasa de gas a diminutas gotitas líquidas o cristales de hielo"

explicacion: |
  Esas gotitas o cristales, en gran cantidad, forman lo que vemos como
  una nube.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "condensacion"]

respuesta: verdadero
tipo: vf

enunciado: "El aire se enfría a medida que asciende en la atmósfera."

explicacion: |
  Es la condición que dispara la condensación y la formación de nubes.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "punto_de_rocio"]

enunciado: "¿Qué es el punto de rocío?"
tipo: mc
opciones_explicitas:
  - "La temperatura a la que el aire debe enfriarse para que su vapor de agua empiece a condensarse"
  - "La altura máxima que puede alcanzar una nube"
  - "La cantidad total de agua que cae en una tormenta"
respuesta: "La temperatura a la que el aire debe enfriarse para que su vapor de agua empiece a condensarse"

explicacion: |
  Es clave para saber si un aire dado va a formar nubes o no.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "punto_de_rocio"]

enunciado: "Si la temperatura del aire está muy por encima de su punto de rocío, ¿qué se espera?"
tipo: mc
opciones_explicitas:
  - "Cielo despejado, lejos de condensar"
  - "Formación inmediata de nubes"
  - "Nieve garantizada"
respuesta: "Cielo despejado, lejos de condensar"

explicacion: |
  Cuanto más lejos esté la temperatura actual del punto de rocío, menos
  probable es la condensación.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "punto_de_rocio"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más húmedo es el aire, más alto (más cerca de la temperatura actual) está su punto de rocío."

explicacion: |
  Necesita enfriarse menos para llegar a condensar.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Qué prefijo indica que una nube es de las capas más altas de la atmósfera?"
tipo: mc
opciones_explicitas:
  - "Cirro-"
  - "Alto-"
  - "Estrato-"
respuesta: "Cirro-"

explicacion: |
  Las nubes altas están formadas por cristales de hielo, por el frío
  extremo a esa altura.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Qué prefijo indica que una nube está en las capas medias de la atmósfera?"
tipo: mc
opciones_explicitas:
  - "Alto-"
  - "Cirro-"
  - "Nimbo-"
respuesta: "Alto-"

explicacion: |
  Por ejemplo, altocúmulos o altoestratos.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Las nubes de desarrollo vertical, como los cumulonimbos, atraviesan varias capas de altura, desde bajas hasta muy altas."

explicacion: |
  Pueden llegar a los 12-15 km de altura.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Cómo son las nubes tipo cúmulo?"
tipo: mc
opciones_explicitas:
  - "En forma de algodón, acumuladas, con base plana"
  - "En capas extendidas y uniformes"
  - "Finas y filamentosas"
respuesta: "En forma de algodón, acumuladas, con base plana"

explicacion: |
  Son típicas de un día de buen tiempo, salvo que crezcan demasiado.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Cómo son las nubes tipo estrato?"
tipo: mc
opciones_explicitas:
  - "En capas extendidas y uniformes, que suelen cubrir todo el cielo"
  - "En forma de algodón, acumuladas"
  - "Finas y filamentosas, en las capas más altas"
respuesta: "En capas extendidas y uniformes, que suelen cubrir todo el cielo"

explicacion: |
  Se asocian a llovizna suave y prolongada, típica de un frente cálido.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Qué caracteriza a los cirros?"
tipo: mc
opciones_explicitas:
  - "Son nubes altas, finas y filamentosas, y no producen lluvia"
  - "Son nubes bajas que siempre producen tormenta"
  - "Son nubes que cubren todo el cielo con lluvia sostenida"
respuesta: "Son nubes altas, finas y filamentosas, y no producen lluvia"

explicacion: |
  Suelen anticipar un cambio de tiempo en las próximas 24-48 horas.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Qué indica el prefijo/sufijo \"nimbo-\" en el nombre de una nube?"
tipo: mc
opciones_explicitas:
  - "Que la nube produce precipitación"
  - "Que la nube está en las capas más altas"
  - "Que la nube nunca se mueve"
respuesta: "Que la nube produce precipitación"

explicacion: |
  Nimboestratos y cumulonimbos son ejemplos: estratos o cúmulos que
  llueven.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Los cumulonimbos son cúmulos que crecieron mucho, de desarrollo vertical, y producen tormenta."

explicacion: |
  Son el tipo de nube asociado a un frente frío muy activo.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

enunciado: "¿Qué tipo de precipitación se asocia a los nimboestratos?"
tipo: mc
opciones_explicitas:
  - "Lluvia sostenida, más suave pero prolongada"
  - "Tormenta eléctrica breve e intensa"
  - "Ninguna, esas nubes nunca llueven"
respuesta: "Lluvia sostenida, más suave pero prolongada"

explicacion: |
  Son estratos que llueven, típicos de un frente cálido.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "avanzado"
  tags: ["nubes", "frentes"]

enunciado: "¿Qué tipo de nube genera típicamente un frente frío, que fuerza un ascenso brusco del aire cálido?"
tipo: mc
opciones_explicitas:
  - "Nubes de desarrollo vertical (cumulonimbos)"
  - "Nubes en capas uniformes (estratos)"
  - "Nubes altas y filamentosas (cirros)"
respuesta: "Nubes de desarrollo vertical (cumulonimbos)"

explicacion: |
  El ascenso brusco empuja el aire con fuerza hacia arriba, formando
  torres de nube.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "avanzado"
  tags: ["nubes", "frentes"]

enunciado: "¿Qué tipo de nube genera típicamente un frente cálido, con ascenso suave y gradual del aire?"
tipo: mc
opciones_explicitas:
  - "Nubes en capas uniformes (estratos)"
  - "Nubes de desarrollo vertical (cumulonimbos)"
  - "Ninguna nube en absoluto"
respuesta: "Nubes en capas uniformes (estratos)"

explicacion: |
  Un ascenso gradual produce nubes extendidas en capas, no torres.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

tipo: completar
respuestas_validas:
  - "cirros"

enunciado: "Las nubes altas, finas y filamentosas que suelen anticipar un cambio de tiempo en las próximas 24-48 horas se llaman ____."

explicacion: |
  Son cristales de hielo suspendidos, sin producir lluvia por sí mismas.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "clasificacion"]

tipo: ordenar
opciones_explicitas:
  - "estratos (nubes bajas)"
  - "altocúmulos (nubes medias)"
  - "cirros (nubes altas)"
respuesta_orden: ["estratos (nubes bajas)", "altocúmulos (nubes medias)", "cirros (nubes altas)"]
enunciado: "Ordená estos tipos de nube de menor a mayor altura sobre el suelo."

explicacion: |
  Bajas, medias y altas es el orden de clasificación por altura.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "intermedio"
  tags: ["nubes", "punto_de_rocio", "calculo"]

variables:
  temperatura_actual: random(20, 35)
  punto_de_rocio: random(5, 19)

respuesta: temperatura_actual - punto_de_rocio
tipo: input
tolerancia_abs: 0

enunciado: "La temperatura actual del aire es {temperatura_actual}°C y su punto de rocío es {punto_de_rocio}°C. ¿Cuántos grados le falta enfriarse al aire para empezar a condensar?"

explicacion: |
  Es la diferencia entre la temperatura actual y el punto de rocío.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "avanzado"
  tags: ["nubes", "punto_de_rocio"]

variables:
  temp: random(20, 30)
  rocio_ciudad_a: random(5, 12)
  rocio_ciudad_b: random(15, 19)

respuesta: "la ciudad B"
tipo: mc
opciones_explicitas:
  - "la ciudad B"
  - "la ciudad A"
  - "las dos tienen la misma humedad"

enunciado: "Con la misma temperatura de {temp}°C, la ciudad A tiene un punto de rocío de {rocio_ciudad_a}°C y la ciudad B de {rocio_ciudad_b}°C. ¿Cuál de las dos tiene el aire más húmedo?"

explicacion: |
  El aire más húmedo tiene el punto de rocío más cercano a la
  temperatura actual (necesita enfriarse menos para condensar).
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "basico"
  tags: ["nubes", "clasificacion"]

respuesta: falso
tipo: vf

enunciado: "Todas las nubes, sin excepción, producen algún tipo de precipitación."

explicacion: |
  Los cúmulos de buen tiempo y los cirros, por ejemplo, no producen
  lluvia.
```

```
metadata:
  materia: "fisica"
  tema: "formacion_de_nubes"
  nivel: "avanzado"
  tags: ["nubes", "sintesis"]

enunciado: "¿Cuál resume mejor por qué se forman las nubes?"
tipo: mc
opciones_explicitas:
  - "El aire asciende, se enfría, y cuando llega al punto de rocío el vapor de agua se condensa en gotitas o cristales suspendidos"
  - "Las nubes aparecen al azar sin relación con la temperatura del aire"
  - "Las nubes se forman sólo cuando hay viento fuerte, sin importar la humedad"
respuesta: "El aire asciende, se enfría, y cuando llega al punto de rocío el vapor de agua se condensa en gotitas o cristales suspendidos"

explicacion: |
  Es el mecanismo central: ascenso, enfriamiento, condensación en el
  punto de rocío.
```

## Sección: principio-de-arquimedes-empuje-flotacion (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["arquimedes", "empuje", "fuerza"]

tipo: mc
opciones_explicitas: ["La fuerza que ejerce un fluido sobre un cuerpo sumergido", "La fuerza de gravedad que atrae al objeto", "La fuerza de fricción entre el objeto y el agua", "La fuerza que mantiene al objeto en reposo"]
respuesta: "La fuerza que ejerce un fluido sobre un cuerpo sumergido"

enunciado: "Según el principio de Arquímedes, el empuje es ___."

explicacion: |
  El empuje es la fuerza vertical hacia arriba que ejerce un fluido (líquido o gas) sobre cualquier cuerpo que esté sumergido en él.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["equilibrio", "flotacion"]

tipo: vf
respuesta: falso

enunciado: "Si un objeto se encuentra en equilibrio mientras flota en la superficie de un líquido, significa que su peso es mayor que la fuerza de empuje ejercida por el fluido."

explicacion: |
  Falso. Para que un objeto flote en equilibrio, la fuerza de empuje debe ser exactamente igual al peso del objeto (sumergido o parcialmente sumergido).
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["volumen", "desplazamiento"]

variables:
  volumenes: [1.5, 2.0, 0.8]
  idx: uno_de([0,1,2])
  volumen: volumenes[idx]

tipo: completar
tolerancia_abs: 1

respuesta: volumen * 1000

enunciado: "Un objeto sumergido desplaza un volumen de agua (densidad 1000 kg/m³) de {volumen} m³. Según el principio de Arquímedes, la magnitud del empuje será equivalente al peso de una masa de fluido de ___ kg."

explicacion: |
  El volumen de fluido desplazado es igual al volumen de la parte sumergida del objeto. El empuje es igual al peso de ese fluido desplazado.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["densidad", "flotacion"]

tipo: mc
opciones_explicitas: ["El objeto se hunde", "El objeto flota", "El objeto se queda en equilibrio en el medio"]
respuesta: "El objeto se hunde"

enunciado: "Si la densidad del objeto es mayor que la densidad del fluido, el objeto ___."

explicacion: |
  Cuando la densidad del objeto es mayor, el peso del objeto es mayor que el empuje máximo que puede recibir (el peso del volumen de fluido desplazado por el objeto totalmente sumergido), por lo tanto, el objeto se hunde.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "avanzado"
  tags: ["procedimiento", "analisis"]

tipo: ordenar
opciones_explicitas: ["Calcular el peso del objeto", "Calcular el empuje máximo (peso del fluido desplazado)", "Comparar peso con empuje para determinar flotación"]

enunciado: "Para determinar si un objeto flotará o se hundirá en un fluido, se debe seguir este orden lógico de análisis:"

explicacion: |
  Primero determinamos la fuerza hacia abajo (peso), luego la fuerza hacia arriba máxima posible (empuje del volumen total del objeto) y finalmente comparamos ambas magnitudes.
respuesta_orden: ["Calcular el peso del objeto", "Calcular el empuje máximo (peso del fluido desplazado)", "Comparar peso con empuje para determinar flotación"]
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["arquimedes", "empuje", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Según el principio de Arquímedes, el empuje es una fuerza vertical hacia arriba que experimenta un cuerpo cuando se sumerge en un fluido."

explicacion: |
  El principio de Arquímedes establece que todo cuerpo sumergido en un fluido experimenta un empuje vertical hacia arriba igual al peso del fluido desalojado.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["calculo", "empuje", "densidad"]

variables:
  idx: uno_de([0, 1])
  volumenes: [0.5, 0.8]
  V: volumenes[idx]

respuesta: redondear(1000 * 9.8 * V, 1)
tipo: completar
tolerancia_abs: 1

enunciado: "Un objeto desplaza un volumen de {V} m³ de agua al sumergirse. Si la densidad del agua es 1000 kg/m³ y la gravedad es 9.8 m/s², ¿cuál es el valor del empuje en Newtons?"

pasos:
  - "Calcular el volumen desplazado: V = {V} m³"
  - "Calcular el peso del fluido desalojado: E = ρ * g * V"
  - "E = 1000 * 9.8 * {V}"

explicacion: |
  El empuje se calcula con la fórmula E = ρ_fluido * g * V_sumergido.
  Usando los datos: E = 1000 * 9.8 * {V} = {redondear(1000 * 9.8 * V, 1)} N.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["flotacion", "densidad"]

variables:
  idx: uno_de([0, 1])
  escenario: [[800, "flota"], [1200, "se hunde"]]

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["flota", "se hunde"]

enunciado: "Si un objeto tiene una densidad de {escenario[idx][0]} kg/m³ y se sumerge en agua (densidad 1000 kg/m³), el objeto ___."

explicacion: |
  Si la densidad del objeto es menor que la del fluido, el objeto flota. Si es mayor, se hunde.
  En este caso, {escenario[idx][0]} < 1000, por lo tanto, el objeto {escenario[idx][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["equilibrio", "flotacion"]

respuesta: "Peso del fluido desalojado"
tipo: completar

respuestas_validas:
  - "Peso del fluido desalojado"
  - "Peso del objeto"
  - "Fuerza de gravedad"

enunciado: "Cuando un objeto flota en equilibrio en la superficie de un líquido, el empuje es exactamente igual al ___."

explicacion: |
  En equilibrio de flotación, la fuerza hacia arriba (empuje) debe compensar exactamente la fuerza hacia abajo (peso del objeto). Por el principio de Arquímedes, esto equivale al peso del fluido desalojado.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["procedimiento", "ordenar"]

opciones_explicitas: ["Calcular volumen desplazado", "Multiplicar por la gravedad", "Multiplicar por la densidad del fluido"]
respuesta_orden: ["Calcular volumen desplazado", "Multiplicar por la densidad del fluido", "Multiplicar por la gravedad"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular el empuje (E = ρ * g * V) partiendo de conocer el volumen sumergido:"

explicacion: |
  El orden correcto es: 1. Determinar el volumen desplazado (V), 2. Multiplicar por la densidad del fluido (ρ * V) y 3. Finalmente, multiplicar por la aceleración de la gravedad (g).
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["empuje", "arquimedes", "flotacion"]

variables:
  escenario: uno_de([[10, 90], [25, 75], [50, 50]])

enunciado: "Un objeto sumergido en un fluido experimenta una fuerza hacia arriba llamada empuje. Si el peso del objeto es de {escenario[0]} N y el empuje es de {escenario[1]} N, ¿cuál es el peso aparente del objeto?"

pasos:
  - "Calcular la diferencia entre el peso real y el empuje."
  - "El peso aparente es la fuerza resultante vertical."

respuesta: escenario[0] - escenario[1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El peso aparente es la diferencia entre el peso real del objeto y la fuerza de empuje que ejerce el fluido. Si el empuje es igual al peso, el objeto tiene peso aparente cero (flota en equilibrio).
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["empuje", "densidad", "volumen"]

opciones_explicitas: ["El peso del objeto", "El volumen del objeto sumergido", "La densidad del objeto", "La forma del objeto"]

enunciado: "Un error común es pensar que un objeto más pesado siempre tiene más empuje. Sin embargo, para un objeto totalmente sumergido, el empuje depende exclusivamente de:"

respuesta: "El volumen del objeto sumergido"
tipo: mc

explicacion: |
  El principio de Arquímedes establece que el empuje es igual al peso del volumen de fluido desplazado. Por lo tanto, si dos objetos tienen el mismo volumen y están totalmente sumergidos, el empuje será el mismo, sin importar sus pesos o materiales.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["flotacion", "densidad"]

variables:
  caso: uno_de([[1.2, "se hunde"], [0.8, "flota"], [1.0, "flota"]])

enunciado: "Si un objeto tiene una densidad de {caso[0]} g/cm³ y se coloca en agua (cuya densidad es 1.0 g/cm³), el objeto ___."

respuestas_validas:
  - "se hunde"
  - "flota"

respuesta: caso[1]
tipo: completar

explicacion: |
  Si la densidad del objeto es mayor que la del fluido, el peso es mayor que el empuje máximo posible y el objeto se hunde. Si es menor, el objeto subirá hasta que el peso del volumen desplazado iguale su peso (flotación).
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["conceptos", "error_comun"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que un objeto de hierro se hunde en el agua simplemente porque es más pesado que el agua?"

explicacion: |
  Falso. El hierro se hunde porque su densidad es mayor que la del agua, lo que significa que el empuje que puede ejercer el agua al desplazar su volumen es menor que el peso del objeto. No es el peso absoluto, sino la relación entre peso y volumen (densidad).
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["flotacion", "equilibrio"]

opciones_explicitas: ["El objeto se hunde", "El objeto se detiene en la superficie", "El objeto se hunde hasta que el empuje iguala su peso"]

enunciado: "Cuando un objeto se lanza al agua y comienza a descender pero tiene una densidad menor a la del fluido, ¿qué ocurre?"

respuesta: "El objeto se hunde hasta que el empuje iguala su peso"
tipo: mc

explicacion: |
  Al sumergirse, el objeto desplaza agua. A medida que baja, el volumen desplazado aumenta y, con él, el empuje. El objeto dejará de descender cuando el empuje sea igual a su peso, alcanzando un equilibrio de flotación.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["empuje", "peso", "flotacion"]

variables:
  densidad_obj: uno_de([2500, 800])
  densidad_liq: 1000

respuesta: densidad_obj < densidad_liq
tipo: vf
enunciado: "Si un objeto tiene una densidad de {densidad_obj} kg/m³ y se sumerge en un líquido de {densidad_liq} kg/m³, el objeto flotará en la superficie. ¿Es esto verdadero o falso?"

explicacion: |
  Si la densidad del objeto es menor que la del líquido (como en el caso de 800 < 1000), el objeto flota. Si es mayor (2500 > 1000), el objeto se hunde.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["arquimedes", "fuerza", "empuje"]

respuesta: "fuerza vertical hacia arriba"
tipo: completar
respuestas_validas:
  - "fuerza vertical hacia arriba"
  - "fuerza hacia arriba"
  - "empuje"

enunciado: "El principio de Arquímedes establece que todo cuerpo sumergido en un fluido experimenta una ___ que es igual al peso del volumen del fluido desalojado."

explicacion: |
  El empuje es la fuerza que ejerce el fluido sobre el cuerpo, dirigida siempre hacia arriba (verticalmente).
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "intermedio"
  tags: ["flotacion", "equilibrio"]

variables:
  peso_obj: uno_de([50, 150])
  empuje: uno_de([100, 20])

respuesta: "El peso es igual al empuje"
tipo: mc
opciones_explicitas: ["El peso es mayor que el empuje", "El peso es menor que el empuje", "El peso es igual al empuje"]

enunciado: "Para que un objeto flote en equilibrio en la superficie de un fluido (flotación neutra), se debe cumplir que el peso del objeto sea ___ que el empuje."

explicacion: |
  Cuando un objeto flota sin hundirse ni emerger completamente, el peso es igual al empuje (equilibrio de fuerzas).
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "avanzado"
  tags: ["calculo", "empuje", "volumen"]

respuesta_orden: ["Calcular el volumen del fluido desplazado", "Multiplicar ese volumen por la densidad del fluido", "Multiplicar el resultado por la aceleración de la gravedad"]
tipo: ordenar

opciones_explicitas: ["Calcular el volumen del fluido desplazado", "Multiplicar ese volumen por la densidad del fluido", "Multiplicar el resultado por la aceleración de la gravedad"]

enunciado: "Ordena los pasos lógicos para calcular la magnitud del empuje (E = ρ · V · g) de un cuerpo sumergido:"

explicacion: |
  El empuje depende del volumen desplazado, la densidad del fluido y la gravedad.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes"
  nivel: "basico"
  tags: ["masa", "empuje", "densidad"]

variables:
  masa_bloque: 10
  vol_bloque: 0.05
  dens_agua: 1000

respuesta: falso
tipo: vf
enunciado: "Si un bloque de hierro tiene una masa de {masa_bloque} kg y un volumen de {vol_bloque} m³, el empuje que recibe al sumergirse totalmente en agua es de {masa_bloque} Newtons. ¿Es esto verdadero o falso?"

explicacion: |
  El empuje es igual al peso del fluido desalojado (ρ_agua · V_bloque · g), no a la masa del objeto ni a su peso directamente. En este caso: 1000 · 0.05 · 9.8 = 490 N, que es distinto a 10 N.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["flotacion", "empuje", "densidad"]

variables:
  escenario: uno_de([[1.2, "se hunde"], [0.8, "flota"], [1.0, "flota"]])
  densidad_objeto: escenario[0]
  densidad_fluido: 1.0

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["flota", "se hunde", "flota"]

enunciado: "Un objeto con una densidad de {densidad_objeto} g/cm³ se sumerge en un fluido cuya densidad es de {densidad_fluido} g/cm³. El objeto ___."

explicacion: |
  Un objeto flota si su densidad es menor que la del fluido. Si es mayor, se hunde.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["empuje", "volumen", "arquimedes"]

variables:
  volumenes: [0.5, 0.2, 1.0]
  idx: uno_de([0, 1, 2])
  volumen: volumenes[idx]
  densidad_fluido: 1000
  g: 10

respuesta: densidad_fluido * g * volumen
tipo: completar
tolerancia_abs: 1

enunciado: "Un cuerpo con un volumen de {volumen} m³ está completamente sumergido en agua (densidad {densidad_fluido} kg/m³). ¿Cuál es el valor del empuje (en Newtons) que experimenta el cuerpo? (Usa g = {g} m/s² para tus cálculos)."

pasos:
  - "Calcular el volumen desplazado (es igual al volumen del cuerpo sumergido)."
  - "Aplicar la fórmula del empuje: E = densidad_fluido * g * volumen_desplazado."

explicacion: |
  El empuje es igual al peso del volumen de fluido desplazado: E = ρ * g * V.
  Para el caso seleccionado: {densidad_fluido} * {g} * {volumen} = {densidad_fluido * g * volumen} N.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["equilibrio", "fuerzas"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando un objeto flota en equilibrio en la superficie de un líquido, la magnitud de la fuerza de empuje es igual a la magnitud de su peso."

explicacion: |
  Para que un objeto flote en equilibrio (sin aceleración vertical), la fuerza hacia arriba (empuje) debe compensar exactamente la fuerza hacia abajo (peso).
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["densidad", "conceptos"]

respuesta: "densidad"
tipo: completar
respuestas_validas:
  - "densidad"

enunciado: "Si un objeto tiene una ___ mayor que la del fluido, el objeto se hundirá."

explicacion: |
  La flotabilidad depende de la relación entre la densidad del objeto y la del fluido.
```

```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

opciones_explicitas: ["Calcular volumen desplazado", "Multiplicar por densidad del fluido", "Multiplicar por gravedad"]
respuesta_orden: ["Calcular volumen desplazado", "Multiplicar por densidad del fluido", "Multiplicar por gravedad"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular la fuerza de empuje de un objeto sumergido:"

explicacion: |
  1. Identificar el volumen desplazado.
  2. Multiplicar por la densidad del fluido (obteniendo la masa del fluido desplazado).
  3. Multiplicar por la gravedad para obtener la fuerza (peso del fluido).
```

