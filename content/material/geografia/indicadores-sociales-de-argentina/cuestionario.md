# Geografia — indicadores sociales de argentina (cuestionario, 23 preguntas VBLang)

> Tema: `geografia/indicadores-sociales-de-argentina`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "geografia"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["hacinamiento", "calculos", "critico"]

variables:
  habitantes: 12
  dormitorios: 3

respuesta: "si"
tipo: input

enunciado: "En un hogar con {habitantes} habitantes y {dormitorios} dormitorios, ¿hay hacinamiento? (escribe 'si' o 'no')."

explicacion: |
  El ratio es 12 / 3 = 4. Como 4 es mayor que 2, hay hacinamiento.
```

### 2 — pregunta 2

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["NBI", "definicion", "carencias"]

variables:
  condicion1: falso
  condicion2: falso
  condicion3: falso

respuesta: "al menos una"
tipo: completar

enunciado: "Un hogar se considera con Necesidad Básica Insatisfecha (NBI) si cumple {condicion1} una de las condiciones de carencia (vivienda precaria, hacinamiento o niños sin escolaridad)."

explicacion: |
  El NBI es un indicador compuesto. No basta con tener un solo problema; la definición clásica establece que si el hogar presenta AL MENOS UNA de las carencias estructurales (vivienda precaria, hacinamiento o falta de escolaridad infantil), se clasifica como NBI.
```

### 3 — pregunta 3

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["hacinamiento", "calculo", "densidad"]

variables:
  habitantes: random(5, 15)
  dormitorios: random(1, 4)

respuesta: "{redondear(habitantes / dormitorios, 1)}"
tipo: input

enunciado: "Si un hogar tiene {habitantes} habitantes y {dormitorios} dormitorios, ¿cuál es la relación de personas por dormitorio? (Redondear a 1 decimal)."

explicacion: |
  El hacinamiento se mide dividiendo el número de habitantes entre el número de dormitorios. Si esta relación es mayor a 2, se considera hacinamiento severo. En este caso, la relación es {redondear(habitantes / dormitorios, 1)}.
```

### 4 — pregunta 4

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["pobreza", "ingreso", "canasta"]

variables:
  tipo_pobreza: uno_de(["indigente", "general"])

respuesta: tipo_pobreza
tipo: completar

enunciado: "Cuando los ingresos de un hogar no alcanzan para cubrir la canasta básica de ALIMENTOS, se denomina pobreza {tipo_pobreza}."

explicacion: |
  La pobreza indigente se define específicamente por la incapacidad de cubrir la canasta básica de alimentos. La pobreza general abarca la canasta básica total (alimentos + bienes y servicios no alimentarios).
```

### 5 — pregunta 5

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["hacinamiento", "umbral", "regla"]

variables:
  valor: 2

respuesta: "2"
tipo: input

enunciado: "Según los estándares utilizados en Argentina, se considera que hay hacinamiento cuando la relación habitantes/dormitorios es mayor a {valor}."

explicacion: |
  El umbral clásico para detectar hacinamiento es una relación superior a 2 personas por dormitorio. Esto indica que el espacio físico es insuficiente para garantizar la privacidad y el descanso adecuado.
```

### 6 — pregunta 6

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["desigualdad", "territorio", "pobreza"]

variables:
  region: uno_de(["norte", "centro", "sur"])

respuesta: region
tipo: completar

enunciado: "En Argentina, las provincias de la región {region} suelen presentar tasas más altas de pobreza e indicadores de carencia estructural en comparación con otras zonas del país."

explicacion: |
  Históricamente, las provincias del norte argentino presentan mayores índices de pobreza y NBI debido a factores estructurales, menos industrialización y menor acceso a servicios públicos comparado con el centro del país.
```

### 7 — pregunta 7

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["vivienda", "NBI", "materiales"]

variables:
  material: uno_de(["ladrillo", "quincha", "madera"])

respuesta: material
tipo: completar

enunciado: "Para ser considerada vivienda precaria en el cálculo del NBI, el techo o las paredes deben estar construidos con materiales como {material} o similares no dignos, en lugar de ladrillo o bloques sólidos."

explicacion: |
  La condición de vivienda precaria se refiere a la falta de materiales de construcción dignos. Materiales como quincha, cartón o madera en mal estado suelen ser indicadores de esta carencia en las encuestas.
```

### 8 — pregunta 8

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "avanzado"
  tags: ["migracion", "urbanizacion", "hacinamiento"]

variables:
  causa: "crecimiento_urbano_desordenado"

respuesta: causa
tipo: completar

enunciado: "El fenómeno de migración interna y el {causa} generan asentamientos periféricos donde el hacinamiento se intensifica debido a la falta de planificación territorial."

explicacion: |
  El crecimiento urbano desordenado, impulsado a menudo por migraciones internas hacia grandes ciudades, conduce a la formación de barrios periféricos con infraestructura deficiente, lo que agrava el problema del hacinamiento.
```

### 9 — pregunta 9

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["pobreza", "definicion", "diferencia"]

variables:
  diferencia: "canasta_basica_total"

respuesta: diferencia
tipo: completar

enunciado: "La pobreza general se diferencia de la indigente porque toma como referencia la canasta básica de {diferencia}, que incluye alimentos y servicios no alimentarios."

explicacion: |
  La pobreza indigente mide la incapacidad de comprar alimentos. La pobreza general mide la incapacidad de cubrir la canasta básica total, que es más amplia e incluye servicios como transporte, salud y vestimenta.
```

### 10 — pregunta 10

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["NBI", "logica", "condicion"]

variables:
  tiene_vivienda_pobre: verdadero
  tiene_hacinamiento: falso
  ninos_sin_escuela: falso

respuesta: "si"
tipo: completar

enunciado: "Si un hogar tiene vivienda precaria ({tiene_vivienda_pobre}), no tiene hacinamiento ({tiene_hacinamiento}) y sus hijos asisten a la escuela ({ninos_sin_escuela}), ¿tiene NBI? (Responder 'si' o 'no')."

explicacion: |
  Si. El hogar tiene NBI porque cumple con al menos una de las condiciones: la vivienda precaria. No es necesario que cumpla todas las condiciones, solo una es suficiente para ser clasificado como tal.
```

### 11 — pregunta 11

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["importancia", "calidad_vida", "estadistica"]

variables:
  funcion: "cuantificar"

respuesta: funcion
tipo: completar

enunciado: "Los indicadores sociales permiten {funcion} la calidad de vida de una población, transformando condiciones subjetivas en datos objetivos y medibles."

explicacion: |
  Los indicadores sociales son herramientas estadísticas fundamentales para cuantificar (medir numéricamente) aspectos como la salud, educación y vivienda, permitiendo comparar realidades y diseñar políticas públicas.
```

### 12 — pregunta 12

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["hacinamiento", "severo", "definicion"]

variables:
  limite: 2

respuesta: "2"
tipo: input

enunciado: "Se considera hacinamiento severo cuando la relación de habitantes por dormitorio supera el límite de {limite}."

explicacion: |
  El umbral estándar para considerar hacinamiento es una relación mayor a 2 personas por dormitorio. Si la relación es mayor a este número, se considera que el espacio es insuficiente para el bienestar de los ocupantes.
```

### 13 — pregunta 13

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "avanzado"
  tags: ["desigualdad", "territorio", "patrones"]

variables:
  patron: "geograficos"

respuesta: patron
tipo: completar

enunciado: "La distribución de la pobreza en Argentina revela patrones {patron} claros, concentrándose más en ciertas provincias y periferias urbanas que en otras."

explicacion: |
  La pobreza no se distribuye aleatoriamente; sigue patrones geográficos históricos y económicos, afectando desproporcionadamente a las regiones del norte y a los cinturones de pobreza alrededor de las grandes ciudades.
```

### 14 — pregunta 14

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["NBI", "educacion", "escolaridad"]

variables:
  condicion: "asistir"

respuesta: condicion
tipo: completar

enunciado: "Una de las variables del NBI es la escolaridad: se considera carencia si hay niños en el hogar que no {condicion} a la escuela."

explicacion: |
  La falta de escolaridad infantil es un indicador clave de pobreza intergeneracional. Si un niño en edad escolar no asiste a la escuela, el hogar es marcado como con NBI por esta variable.
```

### 15 — pregunta 15

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["pobreza", "calcula", "porcentaje"]

variables:
  total_poblacion: random(1000000, 5000000)
  poblacion_pobre: random(200000, 1500000)

respuesta: "{redondear(poblacion_pobre / total_poblacion * 100, 1)}"
tipo: input

enunciado: "Si en una provincia de {total_poblacion} habitantes, {poblacion_pobre} viven en situación de pobreza, ¿cuál es la tasa de pobreza? (Expresar como número entero o decimal, sin el símbolo %)."

explicacion: |
  La tasa de pobreza se calcula dividiendo la población pobre entre la población total y multiplicando por 100. En este caso: {poblacion_pobre} / {total_poblacion} * 100 = {redondear(poblacion_pobre / total_poblacion * 100, 1)}%.
```

### 16 — pregunta 16

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["hacinamiento", "privacidad", "impacto"]

variables:
  impacto: "menores"

respuesta: impacto
tipo: completar

enunciado: "El hacinamiento se traduce en {impacto} oportunidades de desarrollo personal y comunitario debido a la falta de espacio físico y privacidad."

explicacion: |
  La falta de espacio adecuado afecta directamente la salud mental, el rendimiento escolar y la cohesión social, generando un ciclo de desventaja para las familias que viven en condiciones de hacinamiento.
```

### 17 — pregunta 17

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["pobreza", "indigente", "alimentos"]

variables:
  referencia: "alimentos"

respuesta: referencia
tipo: completar

enunciado: "La pobreza indigente se define como la incapacidad de cubrir la canasta básica de {referencia}."

explicacion: |
  La pobreza indigente es la forma más extrema de exclusión, donde el hogar no puede comprar ni siquiera los alimentos mínimos necesarios para sobrevivir.
```

### 18 — pregunta 18

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["NBI", "servicios", "acceso"]

variables:
  relacion: "acceso"

respuesta: relacion
tipo: completar

enunciado: "El NBI captura la falta de {relacion} a servicios básicos y educación, más allá de la situación económica del hogar."

explicacion: |
  El NBI es una medida de acceso a derechos básicos. Evalúa si la familia tiene acceso efectivo a una vivienda digna, un espacio habitable adecuado y la educación obligatoria para sus hijos.
```

### 19 — pregunta 19

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["pobreza", "general", "servicios"]

variables:
  servicios: "no alimentarios"

respuesta: servicios
tipo: completar

enunciado: "La pobreza general incluye la incapacidad de cubrir la canasta básica de alimentos más los bienes y servicios {servicios}."

explicacion: |
  La pobreza general es un indicador más amplio que la indigente. Incluye la capacidad de cubrir no solo la alimentación, sino también gastos esenciales como transporte, salud, vestimenta y vivienda.
```

### 20 — pregunta 20

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "avanzado"
  tags: ["hacinamiento", "distribucion", "urbano"]

variables:
  zona: "periferias"

respuesta: zona
tipo: completar

enunciado: "El hacinamiento en Argentina es más frecuente en las {zona} de las grandes ciudades y en asentamientos informales, debido al crecimiento demográfico no planificado."

explicacion: |
  El hacinamiento no es uniforme. Se concentra en las periferias urbanas donde la oferta de vivienda formal es escasa y los precios son prohibitivos, forzando a las familias a ocupar espacios insuficientes.
```

### 21 — pregunta 21

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "avanzado"
  tags: ["hacinamiento", "salud", "impacto"]

variables:
  efecto: "mayor"

respuesta: efecto
tipo: completar

enunciado: "El hacinamiento está ligado a un {efecto} riesgo de enfermedades respiratorias y infecciosas debido a la falta de ventilación y higiene adecuada."

explicacion: |
  La densidad poblacional excesiva en espacios reducidos facilita la transmisión de enfermedades y dificulta el mantenimiento de condiciones higiénicas, impactando negativamente en la salud pública.
```

### 22 — pregunta 22

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["pobreza", "economia", "fluctuacion"]

variables:
  variable: "economia"

respuesta: variable
tipo: completar

enunciado: "La tasa de pobreza en Argentina suele fluctuar con la {variable} nacional, aumentando en tiempos de crisis y disminuyendo en etapas de crecimiento."

explicacion: |
  A diferencia del NBI que es más estructural y cambia lentamente, la pobreza por ingreso es más sensible a los ciclos económicos, variando rápidamente con la inflación y el empleo.
```

### 23 — pregunta 23

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["resumen", "indicadores", "importancia"]

variables:
  objetivo: "desigualdad"

respuesta: objetivo
tipo: completar

enunciado: "Los indicadores sociales como NBI, pobreza y hacinamiento son fundamentales para entender la {objetivo} territorial en Argentina."

explicacion: |
  Estos indicadores permiten objetivar la desigualdad territorial, mostrando que la calidad de vida no es uniforme en el territorio y ayudando a identificar las zonas que requieren intervención prioritaria.
```
