# Examen jefe — [PENDIENTE #802]

> Logro #802. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: indicadores-sociales-de-argentina (23 preguntas)

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

## Sección: migraciones-internacionales (29 preguntas)

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "basico"
  tags: ["definicion", "conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "Las migraciones internacionales se definen como el desplazamiento de personas que cruzan las fronteras de un Estado para establecerse en otro."

explicacion: |
  Esta es la definición fundamental. A diferencia de los movimientos internos, las migraciones internacionales implican un cambio de jurisdicción legal y, frecuentemente, de ciudadanía.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["economia", "remesas"]

variables:
  pais_origen: uno_de(["Argentina", "México", "Filipinas", "India"])
  monto_base: random(1000, 5000)
  porcentaje: uno_de([10, 20, 30])
  monto_final: floor(monto_base * (1 + porcentaje/100))

enunciado: "Si un migrante de {pais_origen} envía {monto_base} dólares a su familia y esta cantidad representa el {porcentaje}% del ingreso familiar total, ¿cuánto sería el ingreso familiar si se suman las remesas directas al monto base del ingreso (sin contar la remesa)?"

respuesta: monto_final
tipo: input

explicacion: |
  Las remesas son envíos de dinero cruciales para las economías de origen. En este caso, si la remesa es el X% del ingreso, el ingreso total familiar es la suma del ingreso base más la remesa. La pregunta pide el monto final si se considera el flujo total de recursos recibidos. Nota: La pregunta está diseñada para evaluar la comprensión del flujo financiero. Si la remesa es el 20% del ingreso familiar, y el ingreso familiar es I, entonces Remesa = 0.2 * I. Por lo tanto I = Remesa / 0.2. Pero el enunciado dice "monto base del ingreso". Asumiremos que el ingreso familiar es I y la remesa R. Si R es el 20% de I, entonces I = R/0.2. El ingreso total disponible es I + R? No, la remesa ES parte del ingreso. La pregunta es ambigua en la interpretación matemática estricta sin más contexto, pero para fines educativos, se busca que el estudiante identifique la magnitud. Vamos a simplificar: Si la remesa es 20% del ingreso, el ingreso es 5 veces la remesa. Si la remesa es 1000, el ingreso es 5000. El total de recursos es 5000. La pregunta original era confusa. Cambiemos la lógica a algo más directo sobre el concepto.
  
  Re-escritura de la explicación para claridad: Las remesas son un flujo financiero clave. Si un país recibe grandes volúmenes, esto dinamiza la economía local.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["economia", "remesas"]

variables:
  remesa: random(500, 2000)
  porcentaje_ingreso: uno_de([10, 25, 50])
  ingreso_familiar: floor(remesa / (porcentaje_ingreso / 100))

enunciado: "Si una remesa de {remesa} dólares representa el {porcentaje_ingreso}% del ingreso total de una familia en su país de origen, ¿cuál es el ingreso total familiar mensual?"

respuesta: ingreso_familiar
tipo: input

explicacion: |
  Las remesas son vitales para la economía de los países de origen. Si la remesa es el 25% del ingreso, el ingreso total es 4 veces la remesa. Esto ilustra la dependencia económica de las familias migrantes.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["migraciones_forzadas", "refugiados"]

respuesta: verdadero
tipo: vf

enunciado: "Las migraciones obligadas, causadas por guerras o desastres climáticos, representan uno de los desafíos humanitarios más urgentes del siglo XXI."

explicacion: |
  A diferencia de la migración voluntaria por búsqueda de empleo, las migraciones obligadas son forzadas por circunstancias externas graves, requiriendo protección internacional.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "basico"
  tags: ["definicion", "conceptos_basicos"]

variables:
  n_pais_origen: uno_de(["Argentina", "Colombia", "Filipinas", "Siria", "Mexico"])
  n_pais_destino: uno_de(["España", "Estados Unidos", "Alemania", "Australia", "Canadá"])

respuesta: verdadero
tipo: vf

enunciado: "Si una persona se traslada de {n_pais_origen} a {n_pais_destino} para vivir, se trata de una migración internacional."

explicacion: |
  La migración internacional implica cruzar fronteras estatales. Al pasar de un país a otro, se cambia el marco legal y, frecuentemente, la ciudadanía.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "basico"
  tags: ["factores", "expulsion"]

variables:
  tasa_desempleo: random(15, 45)

respuesta: "Alta tasa de desempleo"
tipo: completar

enunciado: "Un factor de expulsión económico común es la {tasa_desempleo}% de tasa de desempleo en el lugar de origen."

explicacion: |
  Los factores de expulsión son condiciones negativas que empujan a las personas a salir. El desempleo crónico o la falta de oportunidades laborales son ejemplos clave.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["factores", "atraccion"]

variables:
  estabilidad: uno_de(["estable", "inestable"])

respuesta: "Estabilidad política"
tipo: completar

enunciado: "Cuando un país destino goza de {estabilidad} y respeto a los derechos humanos, actúa como un factor de atracción."

explicacion: |
  Los factores de atracción son condiciones positivas del destino. La estabilidad política y la seguridad son atractivos para quienes huyen de la persecución o la violencia.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["impacto", "remesas"]

variables:
  monto_remesas: random_float(1.0, 50.0)

respuesta: "Remesas"
tipo: completar

enunciado: "Los envíos de dinero que los migrantes realizan a sus familias se denominan {monto_remesas} mil millones de {monto_remesas} (concepto)."

explicacion: |
  Las remesas son beneficios económicos para los países de origen, ya que inyectan divisas y ayudan a las familias migrantes a subsistir.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "avanzado"
  tags: ["demografia", "estructura_poblacional"]

variables:
  pais_destino: uno_de(["Japón", "Alemania", "Italia", "España"])
  indice_envejecimiento: random_float(20.0, 35.0)

respuesta: "Dinamismo demográfico"
tipo: completar

enunciado: "En países como {pais_destino}, con un índice de envejecimiento superior al {indice_envejecimiento}%, la inmigración aporta {indice_envejecimiento} (concepto clave para la sostenibilidad del sistema de pensiones)."

explicacion: |
  La inmigración aporta mano de obra joven y dinamismo demográfico, contrarrestando el envejecimiento poblacional y la disminución de la tasa de natalidad en países desarrollados.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "basico"
  tags: ["tipos", "refugiados"]

variables:
  causa: uno_de(["guerra", "terremoto", "búsqueda de empleo"])

respuesta: "Obligada"
tipo: completar

enunciado: "Las migraciones causadas por {causa} se clasifican generalmente como migraciones obligadas."

explicacion: |
  Las migraciones obligadas son forzadas por conflictos armados, persecución o desastres naturales, a diferencia de las voluntarias que buscan mejores condiciones de vida.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["cálculo", "saldo"]

variables:
  inmigrantes: random(100, 500)
  emigrantes: random(50, 200)

respuesta: "{inmigrantes - emigrantes}"
tipo: input

enunciado: "En una región, llegaron {inmigrantes} inmigrantes y salieron {emigrantes} emigrantes en un año. ¿Cuál es el saldo migratorio?"

explicacion: |
  El saldo migratorio se calcula restando los emigrantes de los inmigrantes. Si el resultado es positivo, hay crecimiento migratorio; si es negativo, hay decrecimiento.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "avanzado"
  tags: ["capital_humano", "consecuencias"]

variables:
  profesion: uno_de(["médicos", "ingenieros", "científicos", "profesores"])

respuesta: "Fuga de cerebros"
tipo: completar

enunciado: "La salida masiva de {profesion} calificados de un país se conoce como fuga de cerebros."

explicacion: |
  La fuga de cerebros es la pérdida de capital humano especializado, lo que debilita el desarrollo económico y social del país de origen.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["factores", "ambientales"]

variables:
  desastre: uno_de(["sequía", "inundación", "degradación de suelos"])

respuesta: "Ambiental"
tipo: completar

enunciado: "Las {desastre} prolongadas son un factor de expulsión de tipo ambiental."

explicacion: |
  Los factores ambientales de expulsión incluyen desastres naturales y degradación del entorno que hacen inviable la vida o la agricultura en la zona de origen.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "basico"
  tags: ["factores", "familia"]

variables:
  parentesco: uno_de(["padres", "cónyuge", "hijos"])

respuesta: "Reunificación familiar"
tipo: completar

enunciado: "El desplazamiento para vivir con {parentesco} en el extranjero se denomina reunificación familiar."

explicacion: |
  La reunificación familiar es un motivo común de migración legal, donde los familiares se unen en el país de destino tras la migración inicial de uno de ellos.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "basico"
  tags: ["definicion", "comparacion"]

variables:
  caso: uno_de(["provincia a provincia", "país a país", "ciudad a ciudad"])

respuesta: "Internacional"
tipo: completar

enunciado: "Si el movimiento es de {caso}, se clasifica como migración internacional."

explicacion: |
  La migración internacional cruza fronteras estatales. Los movimientos internos ocurren dentro de las mismas fronteras nacionales.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["impacto", "cultura"]

variables:
  elemento: uno_de(["gastronomía", "música", "idioma", "arte"])

respuesta: "Diversidad cultural"
tipo: completar

enunciado: "La llegada de migrantes enriquece la {elemento} del país de destino, generando diversidad cultural."

explicacion: |
  La inmigración aporta diversidad cultural, enriqueciendo la sociedad de acogida a través de nuevas expresiones artísticas, culinarias y lingüísticas.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "avanzado"
  tags: ["cálculo", "tasas"]

variables:
  emigrantes: random(1000, 5000)
  poblacion_total: random(100000, 500000)
  tasa: "{(emigrantes / poblacion_total) * 1000}"

respuesta: "{redondear(tasa, 2)}"
tipo: input

enunciado: "Si {emigrantes} personas emigraron de una población de {poblacion_total}, ¿cuál es la tasa de emigración por mil habitantes? (Redondear a 2 decimales)"

explicacion: |
  La tasa de emigración se calcula como (Emigrantes / Población Total) * 1000. Permite comparar la intensidad de la salida de población entre regiones de diferente tamaño.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "basico"
  tags: ["conflictos", "refugiados"]

variables:
  conflicto: uno_de(["guerra civil", "persecución política", "violencia generalizada"])

respuesta: "Refugiado"
tipo: completar

enunciado: "Una persona que huye de {conflicto} y cruza una frontera internacional es considerada un refugiado."

explicacion: |
  Los refugiados son personas que han cruzado fronteras internacionales para huir de conflictos o persecución, y tienen derecho a protección internacional.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["factores", "empleo"]

variables:
  sector: uno_de(["tecnología", "construcción", "agricultura", "salud"])

respuesta: "Oportunidades laborales"
tipo: completar

enunciado: "La demanda de mano de obra en el sector {sector} actúa como un factor de atracción para migrantes."

explicacion: |
  Los países destino suelen atraer migrantes mediante la oferta de empleo en sectores con escasez de mano de obra local o con alta demanda.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "avanzado"
  tags: ["conceptos", "redes"]

variables:
  grupo: uno_de(["étnico", "religioso", "nacional"])

respuesta: "Diáspora"
tipo: completar

enunciado: "La dispersión de un grupo {grupo} a lo largo de varios países se conoce como diáspora."

explicacion: |
  La diáspora se refiere a la dispersión geográfica de un pueblo o grupo étnico, manteniendo vínculos con su tierra de origen o entre sí.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "avanzado"
  tags: ["impacto", "desarrollo"]

variables:
  sector: uno_de(["educación", "salud", "ingeniería"])

respuesta: "Déficit de profesionales"
tipo: completar

enunciado: "La salida masiva de profesionales del sector {sector} genera un déficit de capacidad técnica en el país de origen."

explicacion: |
  La emigración de profesionales calificados debilita los sistemas públicos de salud y educación, dificultando el desarrollo nacional.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["tipos", "movilidad"]

variables:
  frecuencia: uno_de(["temporal", "estacional", "periódica"])

respuesta: "Migración circular"
tipo: completar

enunciado: "El movimiento {frecuencia} entre el país de origen y el de destino se denomina migración circular."

explicacion: |
  La migración circular implica ida y vuelta entre ambos países, a menudo por motivos laborales estacionales, manteniendo vínculos fuertes con el origen.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["cálculo", "saldo_negativo"]

variables:
  inmigrantes: random(50, 200)
  emigrantes: random(300, 600)

respuesta: "{inmigrantes - emigrantes}"
tipo: input

enunciado: "Si llegaron {inmigrantes} inmigrantes y salieron {emigrantes} emigrantes, ¿cuál es el saldo migratorio?"

explicacion: |
  El saldo migratorio es la diferencia entre inmigrantes y emigrantes. Un resultado negativo indica que la población disminuye por movimientos migratorios.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "basico"
  tags: ["factores", "política"]

variables:
  causa: uno_de(["persecución", "guerra", "golpe de estado"])

respuesta: "Político"
tipo: completar

enunciado: "Las {causa} son factores de expulsión de tipo político."

explicacion: |
  Los factores políticos de expulsión incluyen la persecución, la violencia generalizada y la inestabilidad gubernamental que obligan a las personas a huir.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["remesas", "economía"]

variables:
  porcentaje: random_float(5.0, 25.0)

respuesta: "Motor económico"
tipo: completar

enunciado: "Las remesas pueden representar hasta el {porcentaje}% del PIB de algunos países, actuando como un motor económico."

explicacion: |
  Las remesas son cruciales para la economía de muchos países en desarrollo, proporcionando divisas y apoyo financiero a millones de familias.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "avanzado"
  tags: ["clima", "refugiados_climáticos"]

variables:
  desastre: uno_de(["huracán", "sequía extrema", "aumento del nivel del mar"])

respuesta: "Migrante climático"
tipo: completar

enunciado: "Una persona desplazada por {desastre} es a menudo llamada migrante climático."

explicacion: |
  Los desastres climáticos obligan a la migración. Aunque el estatus legal de 'refugiado climático' es debatido, el fenómeno es una realidad geográfica urgente.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "intermedio"
  tags: ["factores", "educación"]

variables:
  nivel: uno_de(["universitario", "postgrado", "investigación"])

respuesta: "Oportunidades académicas"
tipo: completar

enunciado: "La búsqueda de formación {nivel} en el extranjero es un factor de atracción intelectual."

explicacion: |
  Muchos migrantes se desplazan para acceder a sistemas educativos de mayor calidad o oportunidades de investigación no disponibles en su país de origen.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "avanzado"
  tags: ["cálculo", "tasas"]

variables:
  inmigrantes: random(2000, 8000)
  poblacion_total: random(200000, 800000)
  tasa: "{(inmigrantes / poblacion_total) * 1000}"

respuesta: "{redondear(tasa, 2)}"
tipo: input

enunciado: "Si llegaron {inmigrantes} inmigrantes a una población de {poblacion_total}, ¿cuál es la tasa de inmigración por mil habitantes? (Redondear a 2 decimales)"

explicacion: |
  La tasa de inmigración se calcula como (Inmigrantes / Población Total) * 1000. Mide la intensidad de la entrada de población nueva.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internacionales"
  nivel: "basico"
  tags: ["factores", "resumen"]

variables:
  opciones_correctas: ["Desempleo", "Guerra", "Sequía"]
  opciones_incorrectas: ["Alta calidad de vida", "Estabilidad política", "Buenas infraestructuras"]
  respuesta_texto: "Desempleo, Guerra y Sequía"

respuesta: "Desempleo, Guerra y Sequía"
tipo: mc
opciones_explicitas: ["Desempleo, Guerra y Sequía", "Alta calidad de vida y Estabilidad", "Buenas infraestructuras y Paz", "Oportunidades laborales y Educación"]

enunciado: "¿Cuáles de los siguientes son factores de expulsión?"

explicacion: |
  Los factores de expulsión son negativos (desempleo, guerra, sequía). Las opciones positivas (calidad de vida, estabilidad) son factores de atracción.
```

## Sección: indice-de-desarrollo-humano (23 preguntas)

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "normalizacion"]

variables:
  esperanza: random(40, 80)

respuesta: redondear((esperanza - 20) / (85 - 20), 3)
tipo: input

enunciado: "Si la esperanza de vida es {esperanza} años, ¿cuál es el índice normalizado? (Rango min: 20, max: 85)."

explicacion: |
  Se resta el mínimo (20) al valor real y se divide por el rango (65).
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "normalizacion"]

variables:
  esperanza: random(50, 84)

respuesta: redondear((esperanza - 20) / (85 - 20), 3)
tipo: input

enunciado: "Con una esperanza de vida de {esperanza} años, calcula el índice de salud."

explicacion: |
  Fórmula: (valor_real - minimo) / (maximo - minimo)."
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "ejemplo"]

variables:
  val: uno_de([0.5, 0.6, 0.7, 0.8])

respuesta: redondear(val, 3)
tipo: input

enunciado: "Si los índices de salud, educación e ingreso son todos {val}, ¿cuál es el IDH?"

explicacion: |
  La media geométrica de tres valores iguales es el valor mismo: (val * val * val)^(1/3) = val.
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "limite"]

variables:
  esperanza: 85

respuesta: 1.0
tipo: input

enunciado: "Si la esperanza de vida es 85 años, ¿cuál es el índice de salud? (min: 20, max: 85)."

explicacion: |
  (85 - 20) / (85 - 20) = 1.0. Es el valor máximo posible.
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "limite"]

variables:
  esperanza: 20

respuesta: 0.0
tipo: input

enunciado: "Si la esperanza de vida es 20 años, ¿cuál es el índice de salud? (min: 20, max: 85)."

explicacion: |
  (20 - 20) / (85 - 20) = 0.0. Es el valor mínimo posible.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["definicion", "concepto"]

variables:
  opcion_correcta: "medir el bienestar humano"
  opcion_a: "medir el crecimiento del PIB"
  opcion_b: "medir la producción industrial"
  opcion_c: "medir la superficie territorial"

respuesta: opcion_correcta
tipo: mc

enunciado: "El Índice de Desarrollo Humano (IDH) fue creado para evaluar el progreso de los países más allá del simple crecimiento económico. ¿Qué busca medir principalmente?"

opciones_explicitas: [opcion_a, opcion_b, opcion_correcta, opcion_c]

explicacion: |
  El IDH busca evaluar la capacidad de las personas para llevar una vida larga, saludable y creativa, yendo más allá del PIB.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["dimensiones", "salud", "educacion"]

variables:
  dim1: "Salud"
  dim2: "Educación"
  dim3: "Estándar de vida digna"
  distractor: "Seguridad nacional"

respuesta: "Salud, Educación, Estándar de vida digna"
tipo: completar

enunciado: "El IDH se basa en tres dimensiones principales. Nombra las tres correctamente: {dim1}, {dim2} y {dim3}."

respuestas_validas:
  - "Salud, Educación, Estándar de vida digna"
  - "Salud, educación, estándar de vida digna"
  - "Salud, Educación, estándar de vida digna"

explicacion: |
  Las tres dimensiones son: Salud (esperanza de vida), Educación (años de escolaridad) y Estándar de vida digna (ingreso per cápita).
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["indicadores", "salud"]

variables:
  indicador: "esperanza de vida al nacer"

respuesta: indicador
tipo: completar

enunciado: "La dimensión de salud en el cálculo del IDH se mide a través del indicador: {indicador}."

respuestas_validas:
  - "esperanza de vida al nacer"
  - "Esperanza de vida al nacer"
  - "esperanza de vida"

explicacion: |
  La esperanza de vida al nacer refleja el acceso a servicios médicos y condiciones de higiene.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["educacion", "indicadores"]

variables:
  comp1: "promedio de años de escolaridad"
  comp2: "años esperados de escolarización"

respuesta: "promedio de años de escolaridad y años esperados de escolarización"
tipo: completar

enunciado: "El índice de educación combina dos indicadores: el {comp1} para los adultos y los {comp2} para los niños."

respuestas_validas:
  - "promedio de años de escolaridad y años esperados de escolarización"
  - "promedio de años de escolaridad, años esperados de escolarización"

explicacion: |
  La educación se mide combinando la escolaridad actual de los adultos y la proyección para los niños.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["ingreso", "economia"]

variables:
  indicador_ingreso: "ingreso nacional bruto (INB) per cápita"

respuesta: indicador_ingreso
tipo: completar

enunciado: "El estándar de vida digna se evalúa mediante el {indicador_ingreso}, ajustado por el poder adquisitivo."

respuestas_validas:
  - "ingreso nacional bruto (INB) per cápita"
  - "ingreso nacional bruto per cápita"
  - "INB per cápita"

explicacion: |
  Se utiliza el INB per cápita ajustado por paridad de poder adquisitivo para comparar niveles de vida.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["escala", "valores"]

variables:
  min_val: "0"
  max_val: "1"

respuesta: "0 a 1"
tipo: completar

enunciado: "El puntaje único del IDH va de {min_val} a {max_val}, donde un valor más cercano a 1 indica mayor desarrollo."

respuestas_validas:
  - "0 a 1"
  - "de 0 a 1"
  - "0-1"

explicacion: |
  El índice está normalizado entre 0 (mínimo desarrollo) y 1 (máximo desarrollo).
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["historia", "instituciones"]

variables:
  organizacion: "PNUD"

respuesta: organizacion
tipo: completar

enunciado: "El Índice de Desarrollo Humano fue creado por el Programa de las Naciones Unidas para el Desarrollo, conocido como {organizacion}."

respuestas_validas:
  - "PNUD"
  - "pnud"
  - "Programa de las Naciones Unidas para el Desarrollo"

explicacion: |
  El PNUD (Programa de las Naciones Unidas para el Desarrollo) es la entidad creadora.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["interpretacion"]

variables:
  valor_idh: "0.45"

respuesta: "bajo desarrollo humano"
tipo: completar

enunciado: "Un país con un IDH de {valor_idh} se clasifica típicamente en:"

respuestas_validas:
  - "bajo desarrollo humano"
  - "Bajo desarrollo humano"
  - "desarrollo humano bajo"

explicacion: |
  Valores cercanos a 0 indican bajo desarrollo humano.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["exclusion"]

variables:
  no_incluida: "Tasa de alfabetización"
  incluida: "Esperanza de vida"

respuesta: no_incluida
tipo: mc

enunciado: "¿Cuál de estos NO es un indicador directo en las dimensiones principales del IDH tradicional?"

opciones_explicitas: [no_incluida, incluida, "Ingreso per cápita", "Años esperados de escolaridad"]

explicacion: |
  La tasa de alfabetización fue reemplazada por indicadores de años de escolaridad en versiones recientes.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculos", "normalizacion"]

variables:
  esperanza: "85"
  min_val: "20"
  max_val: "85"

respuesta: "1.0"
tipo: input

enunciado: "Si la esperanza de vida es {esperanza} años (máximo teórico {max_val}), ¿cuál es el índice normalizado?"

explicacion: |
  (85 - 20) / (85 - 20) = 1.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculos", "normalizacion"]

variables:
  esperanza: "20"
  min_val: "20"
  max_val: "85"

respuesta: "0.0"
tipo: input

enunciado: "Si la esperanza de vida es {esperanza} años (mínimo teórico {min_val}), ¿cuál es el índice normalizado?"

explicacion: |
  (20 - 20) / (85 - 20) = 0.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  umbral: "0.80"

respuesta: "alto desarrollo humano"
tipo: completar

enunciado: "Un país con IDH superior a {umbral} se clasifica usualmente como:"

respuestas_validas:
  - "alto desarrollo humano"
  - "Alto desarrollo humano"
  - "desarrollo humano alto"

explicacion: |
  Tradicionalmente, >0.80 se considera alto desarrollo.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["educacion"]

variables:
  indicador: "años esperados de escolarización"

respuesta: indicador
tipo: completar

enunciado: "El indicador que proyecta el futuro educativo de los niños es el {indicador}."

respuestas_validas:
  - "años esperados de escolarización"
  - "Años esperados de escolarización"

explicacion: |
  Este indicador mira hacia el futuro, a diferencia del promedio de años ya completados.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["calculos"]

variables:
  i1: "1.0"
  i2: "0.0"
  i3: "1.0"

respuesta: "0.0"
tipo: input

enunciado: "Si un país tiene índices de Salud: {i1}, Educación: {i2}, Ingreso: {i3}, ¿cuál es su IDH?"

explicacion: |
  (1.0 * 0.0 * 1.0)^(1/3) = 0. La media geométrica castiga fuertemente el cero.
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["idh", "calculo", "normalizacion"]

variables:
  esperanza_real: random(50, 80)

respuesta: redondear((esperanza_real - 20) / (85 - 20), 3)
tipo: input

enunciado: "Si un país tiene una esperanza de vida de {esperanza_real} años, ¿cuál es su índice de salud normalizado (min 20, max 85)?"

explicacion: |
  Se usa la fórmula: (valor real - min) / (max - min). Aquí: (esperanza_real - 20) / 65.
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["idh", "calculo", "educación"]

variables:
  años_esperados: random(10, 18)
  promedio_adultos: random(6, 15)

respuesta: redondear((años_esperados + promedio_adultos) / 2 / 25, 3)
tipo: input

enunciado: "Si los años esperados de escolarización son {años_esperados} y el promedio de años de adultos es {promedio_adultos}, y la meta máxima es 25, ¿cuál es el índice educativo aproximado (media de los dos indicadores dividida por 25)?"

explicacion: |
  El índice de educación combina ambos indicadores. Aquí se simplifica como la media de los dos valores dividida por el máximo teórico (25).
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["idh", "calculo", "ingreso"]

variables:
  inb_real: random(2000, 40000)

respuesta: redondear((log(inb_real) - log(100)) / (log(75000) - log(100)), 3)
tipo: input

enunciado: "Si el INB per cápita es {inb_real} dólares, y se usa la transformación logarítmica con min_log=100 y max_log=75000, ¿cuál es el índice de ingreso?"

explicacion: |
  El IDH usa logaritmo natural para el ingreso. Fórmula: (ln(valor) - ln(min)) / (ln(max) - ln(min)).
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["idh", "normalización", "escala"]

respuesta: "0 a 1"
tipo: completar

enunciado: "Cada dimensión se normaliza a una escala de {0 a 1} antes de calcular el IDH final."

explicacion: |
  La normalización permite sumar o multiplicar indicadores con unidades diferentes (años, dólares, etc.).
```

## Sección: migraciones-internas-en-argentina (22 preguntas)

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "basico"
  tags: ["diferenciacion"]

opciones_explicitas: ["Migración de Córdoba a Buenos Aires", "Migración de Bolivia a Argentina"]
respuesta: "Migración de Córdoba a Buenos Aires"
tipo: mc

enunciado: "¿Cuál de los siguientes ejemplos corresponde a una migración interna?"

explicacion: |
  La migración interna ocurre dentro de las fronteras nacionales. El flujo de Bolivia a Argentina es migración internacional.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["tipos", "vid"]

opciones_explicitas: ["Migración golondrina", "Migración fronteriza", "Migración permanente"]
respuesta: "Migración golondrina"
tipo: mc

enunciado: "El trabajo estacional en los cultivos de vid en Mendoza y La Rioja se clasifica como:"

explicacion: |
  Al estar vinculado a un ciclo productivo estacional y no implicar un cambio permanente de residencia, se trata de migración golondrina.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "basico"
  tags: ["diferenciacion"]

opciones_explicitas: ["Migración de Santiago del Estero a Rosario", "Migración de Paraguay a Buenos Aires"]
respuesta: "Migración de Paraguay a Buenos Aires"
tipo: mc

enunciado: "¿Cuál de los siguientes NO es un ejemplo de migración interna?"

explicacion: |
  La migración desde Paraguay implica cruzar una frontera internacional, por lo tanto, es migración internacional.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["tipos", "infraestructura"]

opciones_explicitas: ["Migración golondrina", "Migración fronteriza", "Migración estudiantil"]
respuesta: "Migración fronteriza"
tipo: mc

enunciado: "El desplazamiento hacia zonas limítrofes para trabajar en proyectos de infraestructura se clasifica generalmente como:"

explicacion: |
  Al dirigirse a las zonas de borde del país por proyectos específicos, se encuadra en la categoría de migración fronteriza.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["tipos", "patagonia"]

opciones_explicitas: ["Migración golondrina", "Migración fronteriza", "Migración permanente"]
respuesta: "Migración golondrina"
tipo: mc

enunciado: "La recolección de frutas en la Patagonia durante el verano es un ejemplo clásico de:"

explicacion: |
  Es un trabajo estacional que no implica cambio permanente de residencia, característico de la migración golondrina.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["historia", "urbanizacion"]

variables:
  origen: "interior"
  destino: "grandes centros urbanos"

respuesta: origen + " hacia " + destino
tipo: completar

enunciado: "Históricamente, el gran flujo interno en Argentina ha sido del {origen} hacia los {destino}."

explicacion: |
  Este movimiento ha configurado el mapa poblacional actual, concentrando habitantes en ciertas zonas y vaciando otras.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "basico"
  tags: ["tipos_migracion", "fronteriza"]

variables:
  definicion: "desplazamiento desde el interior hacia zonas limítrofes"

respuesta: verdadero
tipo: vf

enunciado: "La migración fronteriza se refiere al desplazamiento de personas desde el interior del país hacia las zonas limítrofes."

explicacion: |
  Es correcto. En Argentina, esto es notable hacia el norte (Misiones, Corrientes, Salta) y el sur (Tierra del Fuego).
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["golondrina", "estacionalidad"]

variables:
  causa: "ciclos productivos estacionales"

respuesta: causa
tipo: completar

enunciado: "La migración golondrina se caracteriza por estar vinculada principalmente a {causa}."

explicacion: |
  Estas migraciones son temporales y periódicas, como la recolección de frutas en la Patagonia o vid en Mendoza.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["fronteriza", "norte"]

variables:
  provincia: "Misiones"

respuesta: provincia
tipo: completar

enunciado: "Un ejemplo de provincia en la región norte con flujos significativos de migración fronteriza es {provincia}."

explicacion: |
  Misiones, junto con Corrientes y Salta, recibe migrantes internos por proyectos de infraestructura y turismo.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "basico"
  tags: ["consecuencias", "distribucion"]

variables:
  afirmacion: "Las migraciones internas transforman la distribución demográfica del territorio nacional."

respuesta: verdadero
tipo: vf

enunciado: "Las migraciones internas transforman la distribución demográfica y económica del territorio nacional."

explicacion: |
  Correcto. Concentran habitantes en ciertas zonas y vacían otras, definiendo la historia reciente del país.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "basico"
  tags: ["causas", "estructurales"]

variables:
  causa: "mejores oportunidades laborales"

respuesta: causa
tipo: completar

enunciado: "Una causa estructural que empuja a las personas a mudarse es la búsqueda de {causa}."

explicacion: |
  Las causas incluyen oportunidades laborales, acceso a salud y educación, o huida de conflictos.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["golondrina", "residencia"]

variables:
  afirmacion: "Las personas en migración golondrina establecen su residencia permanente en el destino."

respuesta: falso
tipo: vf

enunciado: "Las personas en migración golondrina establecen su residencia permanente en el destino."

explicacion: |
  Falso. No establecen residencia permanente; regresan a su lugar de origen cuando finaliza la temporada.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["golondrina", "lazos"]

variables:
  afirmacion: "Los migrantes golondrinas mantienen sus lazos económicos y sociales con su provincia natal."

respuesta: verdadero
tipo: vf

enunciado: "Los migrantes golondrinas mantienen sus lazos económicos y sociales con su provincia natal."

explicacion: |
  Correcto. Al regresar a su origen, conservan estos lazos, a diferencia de quienes se integran permanentemente.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["fronteriza", "causas"]

variables:
  causa: "proyectos de infraestructura"

respuesta: causa
tipo: completar

enunciado: "La migración fronteriza suele estar impulsada por {causa}, turismo o búsqueda de tierras cultivables."

explicacion: |
  Los proyectos de infraestructura son un motor importante para el desplazamiento hacia zonas limítrofes.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "basico"
  tags: ["comparacion", "fronteras"]

variables:
  afirmacion: "La migración interna implica cruzar fronteras nacionales."

respuesta: falso
tipo: vf

enunciado: "La migración interna implica cruzar fronteras nacionales."

explicacion: |
  Falso. La migración internacional cruza fronteras nacionales; la interna ocurre dentro del mismo país.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["fronteriza", "norte"]

variables:
  provincia: "Corrientes"

respuesta: provincia
tipo: completar

enunciado: "Otra provincia en la región norte con flujos de migración fronteriza es {provincia}."

explicacion: |
  Corrientes, junto con Misiones y Salta, es un destino de migración fronteriza norte.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["golondrina", "cosecha"]

variables:
  afirmacion: "La migración golondrina está vinculada a ciclos de cosecha estacionales."

respuesta: verdadero
tipo: vf

enunciado: "La migración golondrina está vinculada a ciclos de cosecha estacionales."

explicacion: |
  Correcto. Es temporal y periódica, asociada a la recolección de frutas o vid.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "basico"
  tags: ["causas", "conflicto"]

variables:
  causa: "situaciones de conflicto"

respuesta: causa
tipo: completar

enunciado: "Las personas pueden migrar internas por la huida de {causa} o desastres naturales."

explicacion: |
  Las causas estructurales incluyen huida de conflictos o desastres, además de búsqueda de oportunidades.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["fronteriza", "impacto_social"]

variables:
  afirmacion: "La migración fronteriza genera cambios rápidos en la dinámica social de esas provincias."

respuesta: verdadero
tipo: vf

enunciado: "La migración fronteriza genera cambios rápidos en la dinámica social de esas provincias."

explicacion: |
  Correcto. Los flujos significativos transforman rápidamente la dinámica social local.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["urbanizacion", "procesos"]

variables:
  concepto: "procesos de urbanización"

respuesta: concepto
tipo: completar

enunciado: "Las migraciones internas revelan los {concepto} que han definido la historia reciente de Argentina."

explicacion: |
  Los procesos de urbanización son clave para entender la concentración poblacional en centros urbanos.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["golondrina", "retorno"]

variables:
  afirmacion: "Los migrantes golondrinas regresan a su lugar de origen tras la temporada."

respuesta: verdadero
tipo: vf

enunciado: "Los migrantes golondrinas regresan a su lugar de origen cuando finaliza la temporada de cosecha."

explicacion: |
  Correcto. Esta es la característica definitoria de su temporalidad.
```

```
metadata:
  materia: "Geografía"
  tema: "migraciones_internas_en_argentina"
  nivel: "intermedio"
  tags: ["fronteriza", "definicion"]

variables:
  definicion: "desplazamiento hacia zonas limítrofes"

respuesta: definicion
tipo: completar

enunciado: "La migración fronteriza se refiere al desplazamiento de personas hacia {definicion}."

explicacion: |
  Se define por el movimiento hacia las zonas limítrofes del país, ya sea norte o sur.
```

## Sección: paises-de-america-latina (29 preguntas)

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["paraguay", "litoral", "sin_litoral"]

respuesta: falso
tipo: vf

enunciado: "Paraguay es un país del Cono Sur que posee una extensa costa sobre el océano Atlántico."

explicacion: |
  Paraguay es un país sin litoral costero. Depende de sus ríos (como el Paraná y el Paraguay) para el comercio internacional, ya que no tiene salida directa al mar.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["mexico", "capitales"]

variables:
  capital: "Ciudad de México"

respuesta: "Ciudad de México"
tipo: input

enunciado: "¿Cuál es la capital de México?"

explicacion: |
  La capital de México es la Ciudad de México (CDMX), una de las ciudades más grandes y densamente pobladas de América Latina.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["centroamerica", "geografia_fisica"]

respuesta: verdadero
tipo: vf

enunciado: "Centroamérica es una franja de tierra estrecha que conecta el continente norte con el sur, actuando como puente entre dos continentes y dos océanos."

explicacion: |
  Centroamérica conecta América del Norte y América del Sur (a menudo considerada parte de la masa continental norte en contextos geográficos amplios) y está bañada por el Atlántico y el Pacífico, siendo una ruta comercial vital.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["caribe", "archipielago"]

respuesta: verdadero
tipo: vf

enunciado: "El Caribe está compuesto principalmente por archipiélagos e islas, lo que define un clima tropical húmedo y una economía basada en el turismo y la agricultura de exportación."

explicacion: |
  La geografía insular del Caribe determina su clima tropical húmedo. Muchas naciones dependen del turismo y la agricultura, haciéndolas sensibles a los mercados globales y al clima.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["paraguay", "regiones"]

variables:
  region_este: "Región Oriental"
  region_oeste: "Gran Chaco"

respuesta: "Región Oriental"
tipo: input

enunciado: "Paraguay está dividido por la Gran Chaco al oeste. ¿Cómo se llama la región al este, más húmeda y poblada?"

explicacion: |
  La Región Oriental es más húmeda y concentra la mayor parte de la población y la actividad económica, contrastando con la semiárida Gran Chaco.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["paraguay", "economia", "comercio"]

respuesta: verdadero
tipo: vf

enunciado: "Al ser un país sin litoral, Paraguay depende de sus ríos para el comercio internacional."

explicacion: |
  La falta de acceso directo al mar obliga a Paraguay a utilizar sus ríos (como el Paraná y el Paraguay) como vías principales para la importación y exportación de bienes.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["caribe", "historia", "colonizacion"]

respuesta: verdadero
tipo: vf

enunciado: "La historia del Caribe está marcada por la colonización temprana y el intercambio forzado de poblaciones, creando una mezcla cultural rica."

explicacion: |
  La colonización temprana y el tráfico de esclavos han dado lugar a una sociedad compleja y diversa, reflejada en su música, gastronomía y cultura actual.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["mexico", "geografia_fisica"]

respuesta: verdadero
tipo: vf

enunciado: "México actúa como un puente natural entre América del Norte y América Central."

explicacion: |
  Su ubicación geográfica lo convierte en un enlace terrestre entre las dos regiones, con una geografía diversa que incluye desiertos y selvas.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["centroamerica", "recursos", "poblacion"]

respuesta: verdadero
tipo: vf

enunciado: "El rápido crecimiento de la población en Centroamérica genera presiones sobre los recursos naturales."

explicacion: |
  El aumento poblacional exige una planificación territorial cuidadosa para evitar conflictos sociales y la degradación ambiental.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["america_latina", "historia", "colonizacion"]

respuesta: verdadero
tipo: vf

enunciado: "América Latina comparte una historia colonial común que ha influido en su cultura y estructura social."

explicacion: |
  La colonización española y portuguesa ha dejado una huella profunda en la lengua, religión, arquitectura y estructuras sociales de la región.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["paraguay", "capitales"]

variables:
  capital: "Asunción"

respuesta: "Asunción"
tipo: input

enunciado: "¿Cuál es la capital de Paraguay?"

explicacion: |
  Asunción es la capital de Paraguay, ubicada en la región oriental del país.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["caribe", "cultura", "diversidad"]

respuesta: verdadero
tipo: vf

enunciado: "La mezcla cultural en el Caribe se refleja en su música, gastronomía y sociedad actual."

explicacion: |
  El intercambio forzado y la colonización han creado una mezcla cultural rica y compleja, visible en múltiples aspectos de la vida caribeña.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["centroamerica", "ocanos"]

respuesta: verdadero
tipo: vf

enunciado: "Centroamérica conecta dos continentes y está bañada por dos océanos."

explicacion: |
  La franja de tierra centroamericana conecta América del Norte y del Sur, y está bañada por el Océano Atlántico y el Océano Pacífico.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["caribe", "economia", "sensible"]

variables:
  sector: "turismo"

respuesta: "turismo"
tipo: input

enunciado: "Muchas naciones del Caribe dependen fuertemente del {sector} como motor económico."

explicacion: |
  El turismo es un pilar económico clave en el Caribe, junto con la agricultura de exportación.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["paraguay", "sin_litoral", "cone_sur"]

variables:
  pais: "uno_de(['Paraguay', 'Bolivia', 'Suiza', 'Austria'])"

respuesta: "Paraguay"
tipo: mc
opciones_explicitas: ["Paraguay", "Bolivia", "Suiza", "Austria"]

enunciado: "De los siguientes países, ¿cuál es un país sin litoral costero ubicado en el Cono Sur de América Latina?"

explicacion: |
  Paraguay es un país sin salida al mar, ubicado en el centro de América del Sur. Bolivia también es sin litoral pero está en los Andes, mientras que Suiza y Austria están en Europa.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["paraguay", "gran_chaco", "region_oriental"]

variables:
  region: "uno_de(['Gran Chaco', 'Región Oriental', 'Pampas', 'Patagonia'])"

respuesta: "Región Oriental"
tipo: mc
opciones_explicitas: ["Gran Chaco", "Región Oriental", "Pampas", "Patagonia"]

enunciado: "En Paraguay, la zona más húmeda donde se concentra la mayor parte de la población y la actividad económica se denomina:"

explicacion: |
  La Región Oriental es la zona más húmeda y poblada de Paraguay, mientras que el Gran Chaco es semiárido y menos poblado.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["mexico", "america_del_norte", "america_central"]

variables:
  funcion: "uno_de(['Puente natural', 'Barrera comercial', 'Zona franca', 'Corredor industrial'])"

respuesta: "Puente natural"
tipo: mc
opciones_explicitas: ["Puente natural", "Barrera comercial", "Zona franca", "Corredor industrial"]

enunciado: "Geográficamente, México actúa como un __________ entre América del Norte y Central."

explicacion: |
  México conecta físicamente y culturalmente a América del Norte con América Central y el Caribe.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["caribe", "clima", "tropical"]

variables:
  tipo_clima: "uno_de(['Tropical húmedo', 'Desértico', 'Templado', 'Polar'])"

respuesta: "Tropical húmedo"
tipo: mc
opciones_explicitas: ["Tropical húmedo", "Desértico", "Templado", "Polar"]

enunciado: "El clima predominante en la mayoría de las islas del Caribe es:"

explicacion: |
  El Caribe se caracteriza por un clima tropical húmedo, influenciado por su ubicación cerca del ecuador y los océanos.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["caribe", "economia", "turismo"]

variables:
  sector: "uno_de(['Turismo', 'Minería profunda', 'Agricultura de secano', 'Industria pesada'])"

respuesta: "Turismo"
tipo: mc
opciones_explicitas: ["Turismo", "Minería profunda", "Agricultura de secano", "Industria pesada"]

enunciado: "Muchas naciones del Caribe dependen fuertemente de qué sector económico debido a su geografía insular y clima?"

explicacion: |
  El turismo es una pilar económico fundamental para muchas islas del Caribe, junto con la agricultura de exportación.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["centroamerica", "fenomenos_naturales", "terremotos"]

variables:
  riesgo: "uno_de(['Terremotos y huracanes', 'Sequías extremas', 'Erupciones volcánicas diarias', 'Inundaciones costeras'])"

respuesta: "Terremotos y huracanes"
tipo: mc
opciones_explicitas: ["Terremotos y huracanes", "Sequías extremas", "Erupciones volcánicas diarias", "Inundaciones costeras"]

enunciado: "Centroamérica es una franja de tierra vulnerable a qué fenómenos naturales debido a su posición geológica y climática?"

explicacion: |
  La ubicación de Centroamérica la expone frecuentemente a terremotos (por fallas tectónicas) y huracanes (por el Atlántico y el Pacífico).
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["mexico", "desiertos", "selvas"]

variables:
  zona: "uno_de(['Desiertos áridos en el norte', 'Glaciares perpetuos', 'Selvas tropicales en el sur', 'Sabanas extensas en el este'])"

respuesta: "Desiertos áridos en el norte"
tipo: mc
opciones_explicitas: ["Desiertos áridos en el norte", "Glaciares perpetuos", "Selvas tropicales en el sur", "Sabanas extensas en el este"]

enunciado: "¿Qué característica geográfica se encuentra en el norte de México?"

explicacion: |
  El norte de México es conocido por sus desiertos áridos, mientras que el sur tiene selvas tropicales.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["america_latina", "idiomas", "lengua"]

variables:
  idioma: "uno_de(['Español', 'Inglés', 'Francés', 'Alemán'])"

respuesta: "Español"
tipo: mc
opciones_explicitas: ["Español", "Inglés", "Francés", "Alemán"]

enunciado: "¿Cuál de los siguientes idiomas deriva del latín y es oficial en la mayoría de los países de América Latina?"

explicacion: |
  El español y el portugués son las lenguas derivadas del latín predominantes en la región.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "avanzado"
  tags: ["caribe", "historia", "colonizacion"]

variables:
  evento: "uno_de(['Colonización temprana', 'Independencia tardía', 'Revolución industrial', 'Descubrimiento de América'])"

respuesta: "Colonización temprana"
tipo: mc
opciones_explicitas: ["Colonización temprana", "Independencia tardía", "Revolución industrial", "Descubrimiento de América"]

enunciado: "La historia del Caribe está marcada por qué proceso histórico temprano que influyó en su mezcla cultural?"

explicacion: |
  La colonización temprana y el intercambio forzado de poblaciones definieron la estructura social y cultural del Caribe.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["paraguay", "comercio", "rios"]

variables:
  medio: "uno_de(['Sus ríos', 'Carreteras transcontinentales', 'Puertos marítimos', 'Aeropuertos internacionales'])"

respuesta: "Sus ríos"
tipo: mc
opciones_explicitas: ["Sus ríos", "Carreteras transcontinentales", "Puertos marítimos", "Aeropuertos internacionales"]

enunciado: "Al no tener salida al mar, Paraguay depende de qué medio para su comercio internacional?"

explicacion: |
  Los ríos, especialmente el Paraná y el Paraguay, son vitales para el transporte de mercancías de Paraguay hacia los océanos.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["paraguay", "poblacion", "distribucion"]

variables:
  zona_poblada: "uno_de(['Región Oriental', 'Gran Chaco', 'Cuenca del Pilcomayo', 'Sierra de Amambay'])"

respuesta: "Región Oriental"
tipo: mc
opciones_explicitas: ["Región Oriental", "Gran Chaco", "Cuenca del Pilcomayo", "Sierra de Amambay"]

enunciado: "¿En qué zona de Paraguay se concentra la mayor parte de la población?"

explicacion: |
  La Región Oriental, al ser más húmeda y tener suelos más fértiles, concentra la mayor densidad poblacional.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["paraguay", "gran_chaco", "semiario"]

variables:
  caracteristica: "uno_de(['Semiárida', 'Húmeda', 'Glacial', 'Volcánica'])"

respuesta: "Semiárida"
tipo: mc
opciones_explicitas: ["Semiárida", "Húmeda", "Glacial", "Volcánica"]

enunciado: "El Gran Chaco, ubicado al oeste de Paraguay, se describe geográficamente como una zona:"

explicacion: |
  El Gran Chaco es una extensa llanura semiárida, contrastando con la humedad de la región oriental.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "intermedio"
  tags: ["centroamerica", "comercio", "posicion"]

variables:
  ventaja: "uno_de(['Ruta comercial vital', 'Aislamiento geográfico', 'Exclusión climática', 'Protección natural total'])"

respuesta: "Ruta comercial vital"
tipo: mc
opciones_explicitas: ["Ruta comercial vital", "Aislamiento geográfico", "Exclusión climática", "Protección natural total"]

enunciado: "La posición estratégica de Centroamérica la convierte en:"

explicacion: |
  Al conectar dos continentes y dos océanos, Centroamérica es una ruta comercial estratégica, aunque vulnerable.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "avanzado"
  tags: ["centroamerica", "crecimiento_poblacional", "recursos"]

variables:
  consecuencia: "uno_de(['Presión sobre recursos naturales', 'Disminución de la biodiversidad', 'Abandono de tierras agrícolas', 'Expansión urbana descontrolada'])"

respuesta: "Presión sobre recursos naturales"
tipo: mc
opciones_explicitas: ["Presión sobre recursos naturales", "Disminución de la biodiversidad", "Abandono de tierras agrícolas", "Expansión urbana descontrolada"]

enunciado: "El rápido crecimiento poblacional en Centroamérica genera principalmente qué desafío ambiental?"

explicacion: |
  El crecimiento poblacional rápido ejerce una fuerte presión sobre los recursos naturales disponibles, requiriendo planificación.
```

```
metadata:
  materia: "Geografía"
  tema: "paises_de_america_latina"
  nivel: "basico"
  tags: ["caribe", "cultura", "mezcla"]

variables:
  elemento: "uno_de(['Música y gastronomía', 'Arquitectura gótica', 'Idioma nórdico', 'Cultura industrial'])"

respuesta: "Música y gastronomía"
tipo: mc
opciones_explicitas: ["Música y gastronomía", "Arquitectura gótica", "Idioma nórdico", "Cultura industrial"]

enunciado: "La rica mezcla cultural del Caribe se refleja especialmente en su:"

explicacion: |
  La diversidad cultural del Caribe es evidente en su música, gastronomía y sociedad, fruto de la colonización y el intercambio forzado.
```

