# Oficios — diagnostico aberturas por casos (cuestionario, 30 preguntas VBLang)

> Tema: `oficios/carpintero-de-aluminio/diagnostico-aberturas-por-casos`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["mediciones", "vidrio", "area"]

variables:
  ancho_cm: random(80, 120)
  alto_cm: random(90, 150)
  area_cm2: ancho_cm * alto_cm
  area_m2: redondear(area_cm2 / 10000, 2)

respuesta: area_m2
tipo: input

enunciado: "Se debe reemplazar un vidrio rectangular de {ancho_cm} cm de ancho por {alto_cm} cm de alto. ¿Cuál es el área en metros cuadrados? (Redondear a 2 decimales)"

explicacion: |
  El área se calcula multiplicando ancho por alto en centímetros y dividiendo por 10.000 para obtener metros cuadrados.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "basico"
  tags: ["estanqueidad", "juntas", "completar"]

respuesta: "goma"
tipo: completar

enunciado: "Las __________ de goma son esenciales para garantizar la estanqueidad entre el perfil y el vidrio."

respuestas_validas:
  - "juntas"
  - "gomas"

explicacion: |
  Las juntas de goma (o burletes) sellan el espacio entre el vidrio y el perfil de aluminio.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["perfiles", "longitud", "calculos"]

variables:
  largo_m: random_float(1.5, 3.0)
  largo_cm: redondear(largo_m * 100, 0)
  piezas: random(3, 5)
  total_cm: largo_cm * piezas
  total_m: redondear(total_cm / 100, 2)

respuesta: total_m
tipo: input

enunciado: "Se necesitan {piezas} tramos de perfil de {largo_cm} cm cada uno. ¿Cuál es la longitud total en metros?"

explicacion: |
  Se multiplica la longitud de cada tramo por la cantidad de piezas y se convierte a metros dividiendo por 100.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "basico"
  tags: ["selladores", "materiales", "completar"]

respuesta: "silicona"
tipo: completar

enunciado: "Los selladores más comunes para aberturas son el poliuretano y la __________."

respuestas_validas:
  - "silicona"
  - "siliconas"

explicacion: |
  La silicona es un material flexible y resistente a la intemperie, ideal para sellar uniones.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["perfiles", "cantidad", "calculos"]

variables:
  ancho_cm: random(100, 150)
  alto_cm: random(120, 180)
  perfiles_horizontales: 2
  perfiles_verticales: 2
  total_perfiles: perfiles_horizontales + perfiles_verticales
  largo_total_cm: (ancho_cm * perfiles_horizontales) + (alto_cm * perfiles_verticales)
  largo_total_m: redondear(largo_total_cm / 100, 2)

respuesta: largo_total_m
tipo: input

enunciado: "Para un marco rectangular de {ancho_cm} cm x {alto_cm} cm, ¿cuántos metros lineales de perfil se necesitan para los cuatro lados?"

explicacion: |
  Se suman los largos de los dos lados horizontales y los dos verticales, convirtiendo el resultado a metros.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "basico"
  tags: ["mantenimiento", "limpieza", "completar"]

respuesta: "polvo"
tipo: completar

enunciado: "Para mejorar el movimiento de la hoja, se debe limpiar el riel eliminando el __________ y la arena."

respuestas_validas:
  - "polvo"
  - "suciedad"

explicacion: |
  La suciedad acumulada en los rieles es una causa frecuente de fricción y trabamiento.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["vidrio", "peso", "calculos"]

variables:
  ancho_cm: random(80, 120)
  alto_cm: random(90, 150)
  espesor_mm: 4
  area_m2: (ancho_cm * alto_cm) / 10000
  peso_kg: redondear(area_m2 * 25 * espesor_mm / 4, 1)

respuesta: peso_kg
tipo: input

enunciado: "Un vidrio de {ancho_cm} cm x {alto_cm} cm con espesor de {espesor_mm} mm. ¿Cuál es su peso aproximado en kg? (Factor: 25 kg/m2 por mm de espesor)"

explicacion: |
  El peso se calcula multiplicando el área por el factor de peso por mm y por el espesor.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "basico"
  tags: ["junta", "expansion", "completar"]

respuesta: "expansion"
tipo: completar

enunciado: "La __________ entre la ventana y la albañilería permite el movimiento térmico sin generar grietas."

respuestas_validas:
  - "expansion"
  - "dilatacion"

explicacion: |
  La junta de expansión absorbe los movimientos térmicos y estructurales entre el marco y la pared.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["marco", "area", "calculos"]

variables:
  ancho_cm: random(100, 150)
  alto_cm: random(120, 180)
  perimetro_cm: 2 * (ancho_cm + alto_cm)
  perimetro_m: redondear(perimetro_cm / 100, 2)

respuesta: perimetro_m
tipo: input

enunciado: "Para un marco de {ancho_cm} cm x {alto_cm} cm, ¿cuál es el perímetro en metros?"

explicacion: |
  El perímetro es la suma de todos los lados: 2 * (ancho + alto), convertido a metros.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "basico"
  tags: ["vidrio", "reemplazo", "completar"]

respuesta: "vidrio"
tipo: completar

enunciado: "Al reemplazar un __________, se debe verificar que las medidas sean exactas para el hueco."

respuestas_validas:
  - "vidrio"
  - "cristal"

explicacion: |
  El vidrio debe ajustarse perfectamente al hueco del perfil para garantizar la estanqueidad.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["juntas", "cantidad", "calculos"]

variables:
  perimetro_m: random_float(2.0, 4.0)
  largo_junta_m: 1.0
  cantidad_juntas: ceil(perimetro_m / largo_junta_m)

respuesta: cantidad_juntas
tipo: input

enunciado: "Para un perímetro de {perimetro_m} m, ¿cuántas juntas de goma de 1 metro se necesitan como mínimo?"

explicacion: |
  Se divide el perímetro total por la longitud de cada junta y se redondea hacia arriba.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "basico"
  tags: ["filtraciones", "diagnostico", "selladores"]

variables:
  anio_instalacion: random(2005, 2015)
  anio_actual: 2024

respuesta: "El sellador exterior está degradado"
tipo: completar

enunciado: "Se diagnostica una filtración de agua en una ventana instalada en {anio_instalacion}. Tras verificar que los drenajes internos están limpios, el técnico observa grietas en la junta de poliuretano exterior. ¿Cuál es la causa raíz más probable?"

explicacion: |
  Las filtraciones por sellador degradado son comunes cuando la exposición solar ha agrietado el poliuretano o la silicona con el paso del tiempo. Al estar limpios los drenajes, se descarta la obstrucción interna.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["mantenimiento", "prediccion", "selladores"]

variables:
  anio_instalacion: random(2000, 2010)
  vida_util_estimada: random_float(10, 15)
  anio_actual: 2024

respuesta: "{redondear(anio_actual - anio_instalacion + vida_util_estimada, 0)}"
tipo: input

enunciado: "Una ventana fue instalada en {anio_instalacion}. Se estima que la vida útil del sellador original es de {redondear(vida_util_estimada, 0)} años. ¿En qué año (entero) se espera que el sellador requiera reemplazo preventivo si se mantiene su estado actual?"

explicacion: |
  La vida útil del sellador depende de la exposición ambiental. Sumando los años transcurridos desde la instalación más la vida útil estimada, obtenemos el año aproximado de fin de servicio.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["clasificacion", "fallas", "diagnostico"]

respuesta: "La falla es de estanqueidad"
tipo: completar

enunciado: "Al diagnosticar una ventana, el técnico encuentra agua acumulada en el alféizar interno, pero la estructura del perfil no presenta deformaciones visibles ni flexión. ¿Cómo se clasifica esta falla?"

explicacion: |
  Si la estructura está intacta pero hay entrada de agua, la falla es de estanqueidad (juntas, selladores o drenajes), no estructural.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "basico"
  tags: ["drenaje", "mantenimiento", "diagnostico"]

respuesta: "Los canales de desagüe están obstruidos"
tipo: completar

enunciado: "Durante una lluvia fuerte, el agua rebosa por el interior del perfil de la ventana. Al inspeccionar, se observa que los orificios de drenaje están tapados por tierra y hojas. ¿Cuál es la causa inmediata?"

explicacion: |
  Los perfiles de aluminio tienen canales internos diseñados para evacuar el agua que penetra por la junta exterior. Si se obstruyen, el agua se acumula y rebosa hacia el interior.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["dimensionamiento", "ventilacion", "calculos"]

variables:
  ancho: random(100, 200)
  alto: random(80, 150)
  porcentaje_apertura: uno_de([50, 75])

respuesta: "{redondear(ancho * alto * porcentaje_apertura / 100 / 10000, 2)}"
tipo: input

enunciado: "Una ventana corredera tiene {ancho} cm de ancho y {alto} cm de alto. Si solo se puede abrir el {porcentaje_apertura}% de su superficie por restricciones de espacio, ¿cuántos metros cuadrados (m²) de área efectiva de ventilación quedan disponibles? (Redondear a 2 decimales)"

explicacion: |
  El área efectiva se calcula multiplicando ancho por alto y aplicando el porcentaje de apertura, luego convirtiendo de cm² a m² (dividiendo por 10.000).
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["corrosion", "ambiente", "diagnostico"]

respuesta: "Las bisagras y mecanismos de acero están oxidados"
tipo: completar

enunciado: "En una vivienda a menos de 500 metros del mar, una ventana de aluminio presenta dificultad para abrirse. Al inspeccionar, el aluminio no muestra corrosión significativa, pero los herrajes metálicos internos están cubiertos de óxido. ¿Cuál es la causa raíz?"

explicacion: |
  En ambientes costeros, la salinidad acelera la corrosión de los herrajes (bisagras, pestillos) que no sean de acero inoxidable o aluminio anodizado, causando fricción y trabamiento.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "avanzado"
  tags: ["pruebas", "estanqueidad", "diagnostico"]

respuesta: "Se debe aplicar agua en el exterior mientras un ayudante observa el interior"
tipo: completar

enunciado: "Para confirmar una filtración intermitente en una ventana, ¿cuál es el procedimiento de diagnóstico correcto?"

explicacion: |
  La prueba de agua controlada permite identificar puntos de entrada específicos aplicando flujo en el exterior mientras se monitorea el interior, simulando condiciones reales de lluvia.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["peso", "vidrio", "calculos"]

variables:
  ancho_cm: random(60, 120)
  alto_cm: random(80, 150)
  espesor_mm: uno_de([4, 5, 6])
  densidad_vidrio: 2.5

respuesta: "{redondear(ancho_cm / 100 * alto_cm / 100 * espesor_mm / 1000 * densidad_vidrio, 1)}"
tipo: input

enunciado: "Una hoja de vidrio templado para ventana tiene {ancho_cm} cm de ancho, {alto_cm} cm de alto y {espesor_mm} mm de espesor. Considerando una densidad del vidrio de 2.5 kg/dm³, ¿cuántos kilogramos (kg) pesa aproximadamente? (Redondear a 1 decimal)"

explicacion: |
  El peso se calcula convirtiendo las dimensiones a metros o decímetros, calculando el volumen y multiplicando por la densidad. 1 dm³ de vidrio pesa 2.5 kg.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["alineacion", "funcionamiento", "diagnostico"]

respuesta: "La hoja está descentrada respecto al marco"
tipo: completar

enunciado: "Al intentar cerrar una ventana corredera, la hoja se rasca contra el riel inferior en un solo lado, aunque los rodillos parecen intactos. ¿Qué componente está desalineado?"

explicacion: |
  Si el roce es asimétrico, la hoja no está centrada en el marco, lo que provoca que un lado roce contra el riel al intentar cerrar, indicando necesidad de ajuste de altura o guía.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "basico"
  tags: ["mantenimiento", "planificacion", "diagnostico"]

respuesta: "Cada 6 meses"
tipo: completar

enunciado: "Para ventanas en zonas con alta contaminación o polvo, ¿cada cuánto tiempo se recomienda limpiar los drenajes y lubricar los rieles para prevenir fallas de funcionamiento?"

explicacion: |
  En ambientes agresivos, la acumulación de suciedad es rápida. Un mantenimiento cada 6 meses previene la obstrucción de drenajes y el desgaste prematuro de rodillos.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["condensacion", "aislamiento", "diagnostico"]

respuesta: "La ventana tiene baja resistencia térmica (vidrio simple o marco sin rotura de puente térmico)"
tipo: completar

enunciado: "Se observa humedad en el interior del vidrio de una ventana, pero no hay filtración desde el exterior. El diagnóstico apunta a un problema de aislamiento térmico. ¿Cuál es la causa probable?"

explicacion: |
  La condensación interna en el vidrio indica que la superficie interior está fría, lo que ocurre con vidrios simples o marcos conductores sin rotura de puente térmico, no a una falla de estanqueidad.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "basico"
  tags: ["mecanismos", "funcionamiento", "diagnostico"]

respuesta: "El pestillo o cierre está desgastado o desajustado"
tipo: completar

enunciado: "Una ventana abatible de aluminio no se queda cerrada firmemente y se abre con el viento. Los rieles y rodillos están bien. ¿Qué componente se debe revisar?"

explicacion: |
  Si el movimiento es correcto pero el cierre falla, el problema suele estar en el mecanismo de pestillo o cierre, que puede estar desgastado o desalineado.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "avanzado"
  tags: ["estructura", "carga", "calculos"]

variables:
  largo_m: random(2, 4)
  carga_viento_kpa: random_float(1.5, 2.5)
  factor_seguridad: 1.5

respuesta: "{redondear(largo_m * carga_viento_kpa * factor_seguridad, 2)}"
tipo: input

enunciado: "Un perfil de marco de {largo_m} metros debe soportar una presión de viento de {carga_viento_kpa} kPa. Aplicando un factor de seguridad de 1.5, ¿cuál es la carga de diseño mínima en kN? (Redondear a 2 decimales)"

explicacion: |
  La carga de diseño se calcula multiplicando el área efectiva (largo por unidad de ancho asumida) por la presión y el factor de seguridad. Aquí se simplifica a largo * presión * factor.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["geometria", "apertura", "calculos"]

variables:
  largo_brazo_cm: random(30, 50)
  largo_marco_cm: random(80, 120)

respuesta: "{redondear(asin(largo_brazo_cm / largo_marco_cm) * 180 / pi, 1)}"
tipo: input

enunciado: "Una ventana con brazo de apertura tiene un brazo de {largo_brazo_cm} cm y un marco de {largo_marco_cm} cm. Si el brazo se extiende completamente perpendicular al marco, ¿cuál es el ángulo máximo de apertura en grados? (Usar arcsin y redondear a 1 decimal)"

explicacion: |
  El ángulo máximo se calcula usando la función arcsin (seno inverso) de la relación entre el largo del brazo y el largo del marco, asumiendo una configuración triangular rectángula.
```

### 26 — pregunta 26

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "avanzado"
  tags: ["capilaridad", "filtracion", "diagnostico"]

respuesta: "El agua asciende por microporos en el sellador o la junta"
tipo: completar

enunciado: "En una ventana de piso a techo, se observa humedad en el alféizar interno aunque el sellador exterior parece intacto. El diagnóstico considera la capilaridad. ¿Qué fenómeno explica esto?"

explicacion: |
  La capilaridad permite que el agua penetre a través de microporos o juntas muy finas, ascendiendo contra la gravedad hacia el interior si no hay barrera de corte de capilaridad.
```

### 27 — pregunta 27

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["materiales", "cantidad", "calculos"]

variables:
  perimetro_m: random(4, 8)
  ancho_junta_cm: random(1, 2)
  profundidad_junta_cm: random(0.5, 1)
  rendimiento_lata: 300

respuesta: "{redondear(perimetro_m * ancho_junta_cm / 100 * profundidad_junta_cm / 100 * rendimiento_lata, 1)}"
tipo: input

enunciado: "Para sellar una ventana con perímetro de {perimetro_m} m, una junta de {ancho_junta_cm} cm de ancho y {profundidad_junta_cm} cm de profundidad, ¿cuántos centímetros cúbicos (cm³) de sellador se necesitan? (El rendimiento de la lata no afecta el volumen requerido, solo la cantidad de latas. Calcular volumen en cm³)"

explicacion: |
  El volumen de sellador es el área de la junta (ancho * profundidad) multiplicada por el perímetro. Las dimensiones deben estar en cm para obtener cm³.
```

### 28 — pregunta 28

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["instalacion", "fallas", "diagnostico"]

respuesta: "El marco no está nivelado o plomado"
tipo: completar

enunciado: "Una nueva ventana de aluminio presenta cierre hermético irregular y dificultad de funcionamiento desde el primer día. El diagnóstico apunta a la instalación. ¿Qué error es más probable?"

explicacion: |
  Si el marco no está nivelado o plomado, la hoja no se asienta correctamente, causando problemas de cierre y funcionamiento desde el inicio.
```

### 29 — pregunta 29

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "intermedio"
  tags: ["curado", "selladores", "calculos"]

variables:
  espesor_mm: random(3, 6)
  tiempo_curado_por_mm: 1.5

respuesta: "{redondear(espesor_mm * tiempo_curado_por_mm, 1)}"
tipo: input

enunciado: "Un sellador de silicona requiere {tiempo_curado_por_mm} horas para curar por cada milímetro de espesor. Si se aplica una junta de {espesor_mm} mm, ¿cuántas horas (horas) se deben esperar antes de exponerla a lluvia? (Redondear a 1 decimal)"

explicacion: |
  El tiempo de curado es proporcional al espesor. Multiplicando el espesor por la tasa de curado se obtiene el tiempo total necesario.
```

### 30 — pregunta 30

```
metadata:
  materia: "Oficios"
  tema: "carpintero_de_aluminio_diagnostico_aberturas_por_casos"
  nivel: "basico"
  tags: ["bisagras", "funcionamiento", "diagnostico"]

respuesta: "Las bisagras están flojas o desgastadas"
tipo: completar

enunciado: "Una ventana abatible de aluminio se hunde y no cierra correctamente en la parte superior. El diagnóstico de las bisagras indica que están flojas o desgastadas. ¿Qué acción se recomienda?"

explicacion: |
  Si las bisagras están flojas o desgastadas, no sostienen la hoja en su posición correcta, causando hundimiento y mala hermeticidad. Se deben ajustar o reemplazar.
```
