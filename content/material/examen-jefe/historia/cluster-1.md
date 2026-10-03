# Examen jefe — [PENDIENTE #721]

> Logro #721. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **103 preguntas totales** en 5/5 secciones.

---

## Sección: crisis-de-2001 (21 preguntas)

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["corralito", "fechas"]

variables:
  dia: 1
  mes: 12
  anio: 2001

respuesta: dia + "/" + mes + "/" + anio
tipo: input

enunciado: "¿En qué fecha (dd/mm/aaaa) se decretó el Corralito?"

explicacion: |
  El Corralito fue decretado el 1 de diciembre de 2001 por el ministro de Economía Domingo Cavallo, mediante la Resolución 1570/2001, que restringió la extracción de efectivo de los bancos.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["convertibilidad", "déficit_fiscal"]

respuesta: "uno a uno"
tipo: completar
respuestas_validas:
  - "uno a uno"
  - "1 a 1"
  - "1:1"

enunciado: "Durante la década de los noventa, la convertibilidad vinculaba el peso argentino al dólar estadounidense a una paridad de ___."

explicacion: |
  La paridad era de 1:1, lo que significaba que un dólar estadounidense equivalía exactamente a un peso argentino.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["inflación", "déficit"]

respuesta: "déficit fiscal crónico"
tipo: completar

enunciado: "Aunque frenó la hiperinflación, la convertibilidad generó un problema estructural principal: un _______________ que obligó al endeudamiento."

explicacion: |
  El texto indica que la convertibilidad generó desequilibrios estructurales, específicamente un déficit fiscal crónico.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["estancamiento", "desempleo"]

variables:
  condicion: random(0, 1)

respuesta: "insostenible"
tipo: completar

enunciado: "Para el año 2001, la situación económica se había tornado _______________ debido al estancamiento y el alto desempleo."

explicacion: |
  El contexto describe que para 2001 la situación era insostenible por la acumulación de problemas estructurales.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["fmi", "ajuste"]

respuesta: "Fondo Monetario Internacional"
tipo: completar
respuestas_validas:
  - "Fondo Monetario Internacional"
  - "FMI"

enunciado: "El gobierno intentó negociar un nuevo plan de ajuste con el _______________ (FMI), pero las negociaciones colapsaron."

explicacion: |
  Las negociaciones con el FMI fueron clave y terminaron en fracaso, acelerando la crisis de confianza.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["reservas", "déficit"]

respuesta: "falta"
tipo: completar
respuestas_validas:
  - "falta"
  - "escasez"
  - "carencia"

enunciado: "La _______________ de reservas para defender la moneda fue un factor clave del pánico financiero."

explicacion: |
  La falta de reservas impidió al gobierno sostener la paridad del peso frente al dólar.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fuga de capitales", "pánico"]

variables:
  accion: "retirar"

respuesta: "retirar"
tipo: completar

enunciado: "Los ciudadanos comenzaron a _______________ sus ahorros de los bancos por miedo al colapso."

explicacion: |
  La fuga de capitales consistió en la retirada masiva de dinero de las cuentas bancarias.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["corralito", "medidas"]

variables:
  medida: "Corralito"

respuesta: "Corralito"
tipo: completar

enunciado: "El congelamiento de depósitos bancarios fue conocido popularmente como el '_______________'."

explicacion: |
  El término "Corralito" se refiere a las restricciones de retiro de dinero implementadas por el gobierno.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["liquidez", "banco"]

variables:
  objetivo: "evitar"

respuesta: "evitar"
tipo: completar

enunciado: "El objetivo declarado del Corralito era _______________ el vaciamiento total del sistema financiero."

explicacion: |
  Se justificó como una medida para proteger las reservas y evitar el colapso bancario.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["actividad económica", "restricción"]

variables:
  efecto: "paralizar"

respuesta: "paralizar"
tipo: completar

enunciado: "El efecto inmediato del Corralito fue _______________ la actividad económica cotidiana."

explicacion: |
  Las restricciones de retiro y transferencia paralizaron el flujo de caja de comercios y empresas.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["empresas", "liquidez"]

variables:
  afectado: "comercios"

respuesta: "comercios"
tipo: completar

enunciado: "Las restricciones afectaron tanto a ahorristas como a _______________ y empresas que necesitaban flujo de caja."

explicacion: |
  El Corralito no solo afectó a los ahorristas, sino también a la operatividad de los comercios.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["derechos", "legitimidad"]

variables:
  percepcion: "violación"

respuesta: "violación"
tipo: completar

enunciado: "Muchos vieron el Corralito como una _______________ de sus derechos patrimoniales."

explicacion: |
  La medida fue percibida como una invasión a la propiedad privada y los derechos de los ciudadanos.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["protesta", "social"]

respuesta: "transformadora"
tipo: completar

enunciado: "La indignación creció, buscando una salida _______________ a la crisis."

explicacion: |
  El descontento económico se convirtió en malestar social con demandas políticas concretas.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["política", "gobierno"]

variables:
  nivel: "extrema"

respuesta: "extrema"
tipo: completar

enunciado: "La crisis derivó en una inestabilidad política _______________."

explicacion: |
  La incapacidad de resolver la crisis generó una crisis política severa.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["presidencia", "tiempo"]

respuesta: "11"
tipo: input

enunciado: "Entre el 19 y el 30 de diciembre de 2001, Argentina tuvo cinco presidentes o figuras de poder en apenas ___ días."

explicacion: |
  El periodo de sucesión presidencial rápida duró 11 días en diciembre de 2001.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fechas", "diciembre"]

respuesta: "19"
tipo: input

enunciado: "La sucesión presidencial crítica comenzó el ___ de diciembre de 2001."

explicacion: |
  El 19 de diciembre fue el inicio de los eventos que llevaron a la renuncia de De la Rúa.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fechas", "diciembre"]

respuesta: "30"
tipo: input

enunciado: "La sucesión presidencial crítica finalizó el ___ de diciembre de 2001."

explicacion: |
  El 30 de diciembre marca el final del periodo de cinco presidentes en tan pocos días.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["de la rúa", "presidencia"]

variables:
  presidente: "Fernando de la Rúa"

respuesta: "Fernando de la Rúa"
tipo: completar

enunciado: "El gobierno que intentó negociar con el FMI estaba presidido por _______________."

explicacion: |
  Fernando de la Rúa fue el presidente durante el estallido de la crisis en diciembre de 2001.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["vicepresidente", "renuncia"]

respuesta: "Carlos Álvarez"
tipo: completar
respuestas_validas:
  - "Carlos Álvarez"
  - "Chacho Álvarez"
  - "Carlos \"Chacho\" Álvarez"

enunciado: "La renuncia del vicepresidente _______________ en octubre de 2000, en medio de denuncias de sobornos en el Senado, debilitó políticamente al gobierno de la Alianza y sentó las bases de la crisis de diciembre de 2001."

explicacion: |
  Carlos "Chacho" Álvarez renunció a la vicepresidencia en octubre de 2000, más de un año antes del estallido de diciembre de 2001, pero su salida profundizó la crisis política del gobierno de De la Rúa.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["confianza", "pánico"]

variables:
  causa: "incapacidad"

respuesta: "incapacidad"
tipo: completar

enunciado: "La _______________ de pagar la deuda externa erosionó la confianza de la población."

explicacion: |
  La incapacidad de cumplir con la deuda fue un detonante clave de la pérdida de confianza.
```

```
metadata:
  materia: "historia"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["síntoma", "corralito"]

variables:
  sintoma: "síntoma"

respuesta: "síntoma"
tipo: completar

enunciado: "El Corralito fue visto como un _______________ de la incapacidad del Estado para gestionar la economía."

explicacion: |
  La medida no solo fue económica, sino un indicador de la debilidad institucional.
```

## Sección: interpretar-una-fuente-historica (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "basico"
  tags: ["fuente_historica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una fuente histórica es cualquier resto del pasado que permite reconstruir o conocer lo que ocurrió: un documento, una carta, una fotografía, un objeto, un testimonio."

pasos:
  - "La historia accede al pasado a través de las fuentes que sobrevivieron."

explicacion: |
  Verdadero: es la definición central de fuente histórica.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "basico"
  tags: ["fuente_primaria"]

variables:
  n: uno_de([1, 1])

respuesta: "fuente primaria"
tipo: mc
opciones_explicitas: ["fuente primaria", "fuente secundaria"]

enunciado: "Una carta escrita por un soldado durante una guerra, mientras la vivía, es un ejemplo de..."

pasos:
  - "Producida en el momento de los hechos, por quien los vivió."

explicacion: |
  La fuente primaria se produce en el momento de los hechos por
  quienes los vivieron o presenciaron.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "basico"
  tags: ["fuente_secundaria"]

variables:
  n: uno_de([1, 1])

respuesta: "fuente secundaria"
tipo: mc
opciones_explicitas: ["fuente primaria", "fuente secundaria"]

enunciado: "Un libro de historia escrito décadas después, que analiza cartas de soldados de esa guerra, es un ejemplo de..."

pasos:
  - "Producida después, analizando o interpretando fuentes primarias."

explicacion: |
  La fuente secundaria interpreta o analiza fuentes primarias, no fue
  producida en el momento de los hechos.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["fuente_primaria", "fuente_secundaria", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un mismo texto puede ser fuente primaria para un tema y fuente secundaria para otro, según qué se esté investigando."

pasos:
  - "Un libro de historia de 1950 es secundario sobre los hechos que narra, pero es primario si se investiga cómo se pensaba la historia en 1950."

explicacion: |
  Verdadero: la clasificación primaria/secundaria depende del objeto
  de investigación, no es una propiedad fija del documento.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["punto_de_vista"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ninguna fuente histórica es completamente neutral u objetiva: quien la produjo tenía una posición, un interés, un contexto que influye en qué cuenta y cómo lo cuenta."

pasos:
  - "Esto no significa que la fuente sea inútil o mentirosa, sólo que hay que leerla sabiendo desde dónde habla."

explicacion: |
  Verdadero: es el punto de partida central del análisis crítico de
  fuentes.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["sesgo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un documento puede ser sincero y fiel a lo que su autor percibió, y aun así estar sesgado por su posición social, época o creencias."

pasos:
  - "El trabajo del historiador no es descartar fuentes sesgadas (todas lo están en algún grado), sino entender el sesgo."

explicacion: |
  Verdadero: es una distinción central para no confundir parcialidad
  con deshonestidad.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "basico"
  tags: ["analisis_critico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una de las primeras preguntas del análisis crítico de una fuente es: ¿quién la produjo (autor, institución, y su posición respecto de los hechos)?"

pasos:
  - "Conocer al autor ayuda a entender desde qué perspectiva se cuenta lo narrado."

explicacion: |
  Verdadero: es una de las preguntas centrales del método de análisis
  crítico de fuentes.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "basico"
  tags: ["analisis_critico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra pregunta central del análisis crítico es: ¿cuándo y dónde se produjo la fuente (contemporánea a los hechos, o posterior; en qué lugar)?"

pasos:
  - "Determina si la fuente es primaria o secundaria, y qué distancia temporal/geográfica tiene con los hechos."

explicacion: |
  Verdadero: es otra pregunta central del método de análisis crítico
  de fuentes.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["analisis_critico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra pregunta central es: ¿para quién y con qué propósito se produjo la fuente? Una carta privada, un discurso público y un documento oficial tienen propósitos y audiencias distintas."

pasos:
  - "El propósito y la audiencia influyen directamente en qué se dice y cómo."

explicacion: |
  Verdadero: es otra pregunta central del método de análisis crítico
  de fuentes.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["analisis_critico", "omisiones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Lo que una fuente omite también es información: por ejemplo, un censo que no cuenta a cierto grupo social revela algo sobre cómo se los consideraba en esa época."

pasos:
  - "Analizar las omisiones es parte del análisis crítico, no sólo lo que la fuente dice explícitamente."

explicacion: |
  Verdadero: las omisiones pueden ser tan reveladoras como lo
  explícitamente dicho.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["analisis_critico", "contraste"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra pregunta central es si la fuente se puede contrastar con otras fuentes independientes — la misma lógica ya vista al verificar noticias actuales, aplicada acá a documentos del pasado."

pasos:
  - "Ver `../../ciudadania-digital/verificacion-de-una-noticia/`: es el mismo principio de contraste de fuentes."

explicacion: |
  Verdadero: es la conexión directa entre este tema y el método de
  verificación ya estudiado en otro contexto.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["fuente_primaria", "fuente_secundaria", "practica"]

variables:
  ejemplos: ["un decreto oficial firmado en el momento de los hechos", "un documental producido 50 años después analizando ese decreto"]
  tipos: ["fuente primaria", "fuente secundaria"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["fuente primaria", "fuente secundaria"]

enunciado: "\"{ejemplos[idx]}\" es un ejemplo de..."

pasos:
  - "Contemporáneo a los hechos = primaria. Posterior, analizando fuentes primarias = secundaria."

explicacion: |
  La clasificación depende de cuándo se produjo la fuente respecto de
  los hechos que documenta.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["sesgo", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Si el autor de una fuente tenía un interés personal en los hechos que narra, esa fuente debe descartarse por completo como fuente histórica válida."

pasos:
  - "El trabajo del historiador es entender ese interés/sesgo para leer la fuente con precisión, no descartarla automáticamente."

explicacion: |
  Falso: casi toda fuente tiene algún interés o posición detrás; el
  método consiste en contextualizarla, no en descartarla.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["contraargumentos", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Interpretar una fuente histórica reusa directamente las herramientas de análisis crítico ya vistas en `../../lengua/contraargumentos/`: sopesar una postura sabiendo su origen e interés."

pasos:
  - "Es el mismo tipo de análisis crítico, aplicado ahora a documentos del pasado en vez de a un texto argumentativo actual."

explicacion: |
  Verdadero: es la conexión directa entre este tema y su
  prerrequisito de Lengua.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["fuente_historica", "tipos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una fuente histórica no tiene que ser necesariamente un texto escrito: un edificio, un objeto arqueológico o una fotografía también son fuentes válidas."

pasos:
  - "Cualquier resto del pasado que permita conocer lo ocurrido cuenta como fuente."

explicacion: |
  Verdadero: las fuentes históricas abarcan una gran variedad de
  tipos de material, no sólo documentos escritos.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["analisis_critico", "testimonio_oral"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un testimonio oral recogido décadas después de un hecho se analiza con las mismas preguntas críticas (quién, cuándo, para quién, qué omite) que cualquier otra fuente, considerando además el efecto del paso del tiempo sobre la memoria."

pasos:
  - "El método de análisis crítico se aplica de forma consistente a distintos tipos de fuente, con matices propios de cada una."

explicacion: |
  Verdadero: el marco general de preguntas se adapta, pero se aplica
  a cualquier tipo de fuente, incluidos los testimonios orales.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["contraste", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Contrastar una fuente con otras independientes aumenta la confianza en la interpretación, pero no garantiza una certeza absoluta sobre lo que realmente ocurrió."

pasos:
  - "El trabajo histórico maneja grados de confianza y evidencia, no certezas matemáticas."

explicacion: |
  Verdadero: es un matiz importante sobre los límites del método
  histórico, coherente con el manejo de incertidumbre en cualquier
  investigación seria.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "intermedio"
  tags: ["analisis_critico", "metodo"]

enunciado: "Ordená los pasos del análisis crítico de una fuente histórica."
tipo: ordenar
opciones_explicitas:
  - "Identificar quién produjo la fuente y su posición respecto de los hechos"
  - "Determinar cuándo y dónde se produjo (primaria o secundaria)"
  - "Analizar para quién y con qué propósito se produjo"
  - "Contrastar su contenido con otras fuentes independientes"
respuesta_orden: ["Identificar quién produjo la fuente y su posición respecto de los hechos", "Determinar cuándo y dónde se produjo (primaria o secundaria)", "Analizar para quién y con qué propósito se produjo", "Contrastar su contenido con otras fuentes independientes"]
explicacion: |
  El orden sigue la secuencia lógica de las preguntas del análisis
  crítico descritas en la teoría.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["interpretar_una_fuente_historica", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aplicar este método crítico es la base de cualquier trabajo serio de investigación histórica, no sólo memorizar fechas y hechos ya interpretados por otros."

pasos:
  - "Es la conclusión central de por qué este tema es importante más allá de la mera acumulación de datos."

explicacion: |
  Verdadero: es la síntesis del propósito educativo central de este
  tema.
```

```
metadata:
  materia: "historia"
  tema: "interpretar_una_fuente_historica"
  nivel: "avanzado"
  tags: ["interpretar_una_fuente_historica", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer un documento histórico, conviene preguntarse quién lo escribió, para quién, con qué propósito, y contrastarlo con otras fuentes, en vez de aceptarlo como un relato neutral y completo de lo ocurrido."

pasos:
  - "Es la aplicación práctica directa del método de análisis crítico estudiado en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al leer cualquier
  fuente histórica real.
```

## Sección: linea-de-tiempo-y-antes-despues (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "basico"
  tags: ["linea_de_tiempo", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una línea de tiempo es una representación gráfica donde los hechos se ordenan según el momento en que ocurrieron."

pasos:
  - "El eje representa el paso del tiempo, y cada hecho se ubica en el punto que le corresponde."

explicacion: |
  Verdadero: es la definición central de línea de tiempo.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "basico"
  tags: ["antes_despues"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Se puede afirmar que \"la Revolución de Mayo fue antes que la Declaración de la Independencia\" sin necesitar saber el año exacto de ninguno de los dos hechos."

pasos:
  - "El orden temporal (antes/después) es una habilidad más básica que fechar con precisión."

explicacion: |
  Verdadero: es la habilidad más elemental del pensamiento histórico.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "basico"
  tags: ["antes_despues", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "la Revolución de Mayo"
tipo: mc
opciones_explicitas: ["la Revolución de Mayo", "la Declaración de la Independencia"]

enunciado: "Entre \"la Revolución de Mayo\" (1810) y \"la Declaración de la Independencia\" (1816), ¿cuál ocurrió antes?"

pasos:
  - "Comparar los años para determinar el orden temporal."

explicacion: |
  1810 es anterior a 1816, por lo tanto la Revolución de Mayo ocurrió
  antes.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["simultaneidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dos hechos pueden ser simultáneos (ocurrir en el mismo período), incluso en lugares muy distintos del mundo."

pasos:
  - "Reconocer la simultaneidad ayuda a entender que la historia no es una sola línea de sucesos."

explicacion: |
  Verdadero: es la definición central de simultaneidad en historia.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["simultaneidad", "multiples_procesos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Reconocer la simultaneidad ayuda a entender que la historia es muchos procesos ocurriendo en paralelo en distintas regiones, no una sola línea de sucesos."

pasos:
  - "Es la conclusión central de por qué la simultaneidad es un concepto importante."

explicacion: |
  Verdadero: es la razón por la que la simultaneidad enriquece la
  comprensión histórica.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["duracion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Además de indicar qué pasó antes y después, una línea de tiempo permite ver cuánto tiempo (la duración) separa a dos hechos."

pasos:
  - "Un intervalo corto se ve distinto en la línea que uno largo, aunque ambos sean técnicamente \"antes y después\"."

explicacion: |
  Verdadero: la duración es otra dimensión que aporta una línea de
  tiempo, además del orden.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["duracion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dos hechos separados por 5 años se representan más cerca entre sí en una línea de tiempo que dos hechos separados por 300 años."

pasos:
  - "La distancia visual en la línea refleja la duración real del intervalo temporal."

explicacion: |
  Verdadero: es la aplicación práctica de cómo se representa la
  duración en una línea de tiempo.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["linea_de_tiempo", "utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ordenar hechos visualmente en una línea de tiempo hace evidentes relaciones que un listado de fechas sueltas no muestra, como qué hechos son cercanos entre sí."

pasos:
  - "Es la razón central de por qué la línea de tiempo es una herramienta útil, más allá de memorizar fechas."

explicacion: |
  Verdadero: es la conclusión central sobre la utilidad de este
  recurso visual.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["linea_de_tiempo", "vacios"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una línea de tiempo puede mostrar dónde hay \"vacíos\" en el registro histórico disponible, es decir, períodos sin hechos documentados."

pasos:
  - "Es otra utilidad de la representación visual sobre un simple listado de fechas."

explicacion: |
  Verdadero: los vacíos temporales son otra información que revela
  la línea de tiempo, más allá del orden y la duración.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "basico"
  tags: ["linea_de_tiempo", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En una línea de tiempo, el eje horizontal (o vertical) representa el paso del tiempo, no otra magnitud."

pasos:
  - "Cada hecho se ubica en el punto del eje que corresponde a su momento de ocurrencia."

explicacion: |
  Verdadero: es la estructura básica de cualquier línea de tiempo.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["antes_despues", "practica"]

enunciado: "Ordená estos tres hechos de más antiguo a más reciente: Independencia Argentina (1816), llegada de Colón a América (1492), Segunda Guerra Mundial (1939-1945)."
tipo: ordenar
opciones_explicitas:
  - "Llegada de Colón a América (1492)"
  - "Independencia Argentina (1816)"
  - "Segunda Guerra Mundial (1939-1945)"
respuesta_orden: ["Llegada de Colón a América (1492)", "Independencia Argentina (1816)", "Segunda Guerra Mundial (1939-1945)"]
explicacion: |
  El orden sigue estrictamente la cronología de los años en que
  ocurrió cada hecho.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["simultaneidad", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Mientras en América ocurrían las guerras de independencia a principios del siglo XIX, en Europa se desarrollaban procesos históricos propios de esa misma época: son hechos simultáneos en regiones distintas."

pasos:
  - "Es un ejemplo concreto de simultaneidad entre procesos históricos en distintas regiones del mundo."

explicacion: |
  Verdadero: es la aplicación práctica del concepto de simultaneidad
  a un caso histórico real.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["antes_despues"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Para poder decir que un hecho ocurrió \"antes\" que otro, es imprescindible conocer el año exacto de ambos hechos."

pasos:
  - "Se puede establecer el orden relativo (antes/después) con información parcial, sin necesitar fechas exactas."

explicacion: |
  Falso: el orden relativo antes/después es una habilidad más básica
  que no siempre requiere fechas precisas.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["duracion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "el intervalo entre 1810 y 1816"
tipo: mc
opciones_explicitas: ["el intervalo entre 1810 y 1816", "el intervalo entre 1500 y 1800"]

enunciado: "¿Cuál de estos dos intervalos de tiempo es más corto?"

pasos:
  - "1810 a 1816 son 6 años; 1500 a 1800 son 300 años."

explicacion: |
  Comparar la duración de distintos intervalos es una aplicación
  directa de este concepto.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin poder ordenar hechos en el tiempo, no se puede avanzar hacia unidades más precisas como década, siglo o milenio."

pasos:
  - "Ver `../decada-siglo-milenio/`: es el tema siguiente de la cadena de pensamiento histórico."

explicacion: |
  Verdadero: por eso este tema es el prerrequisito directo del
  siguiente en la cadena.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["causa_y_consecuencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Saber qué pasó antes y qué pasó después es una condición necesaria (aunque no suficiente) para poder analizar relaciones de causa y consecuencia entre hechos históricos."

pasos:
  - "Una causa siempre tiene que ocurrir antes que su consecuencia en el tiempo."

explicacion: |
  Verdadero: el orden temporal es la base sobre la que se construyen
  herramientas de análisis histórico más complejas, más adelante en
  la cadena.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["antes_despues", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Si un hecho A ocurrió antes que un hecho B, eso significa automáticamente que A causó B."

pasos:
  - "El orden temporal (antes/después) es necesario pero no suficiente para afirmar una relación de causa: dos hechos pueden ser antes/después sin que uno cause al otro."

explicacion: |
  Falso: el orden temporal es la base, pero establecer causalidad
  requiere un análisis adicional, que es el tema de más adelante en
  la cadena.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "basico"
  tags: ["linea_de_tiempo", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En una línea de tiempo horizontal, un hecho ubicado más a la derecha ocurrió después que un hecho ubicado más a la izquierda (siguiendo la convención habitual de izquierda=pasado, derecha=presente)."

pasos:
  - "Es la convención estándar de lectura de una línea de tiempo horizontal."

explicacion: |
  Verdadero: es la convención de lectura habitual de una línea de
  tiempo horizontal.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "intermedio"
  tags: ["linea_de_tiempo", "metodo"]

enunciado: "Ordená los pasos para construir una línea de tiempo con varios hechos históricos."
tipo: ordenar
opciones_explicitas:
  - "Reunir los hechos que se quieren representar"
  - "Determinar el orden relativo (antes/después) entre todos ellos"
  - "Ubicar cada hecho en el eje según su momento, respetando la duración de los intervalos"
  - "Revisar si hay hechos simultáneos que deban marcarse en el mismo punto del eje"
respuesta_orden: ["Reunir los hechos que se quieren representar", "Determinar el orden relativo (antes/después) entre todos ellos", "Ubicar cada hecho en el eje según su momento, respetando la duración de los intervalos", "Revisar si hay hechos simultáneos que deban marcarse en el mismo punto del eje"]
explicacion: |
  El proceso va de reunir los hechos a ordenarlos y ubicarlos
  correctamente en el eje temporal.
```

```
metadata:
  materia: "historia"
  tema: "linea_de_tiempo_y_antes_despues"
  nivel: "avanzado"
  tags: ["linea_de_tiempo", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de estudiar un período histórico complejo, puede ayudar armar primero una línea de tiempo simple con los hechos principales, para tener claro el orden y la duración antes de profundizar en las causas."

pasos:
  - "Es la aplicación práctica directa de este tema como estrategia de estudio."

explicacion: |
  Verdadero: es la aplicación concreta de este tema como herramienta
  de estudio de cualquier período histórico.
```

## Sección: reforma-universitaria-1918 (22 preguntas)

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "basico"
  tags: ["reforma_universitaria_1918", "contexto_social"]

variables:
  anio_fundacion_unc: 1613

respuesta: "1613"
tipo: input

enunciado: "La Universidad Nacional de Córdoba, epicentro de la Reforma de 1918, fue fundada por la orden jesuita en el año {anio_fundacion_unc}. ¿En qué año se fundó?"

explicacion: |
  La Universidad Nacional de Córdoba, fundada en 1613, es la más antigua del país. Su estructura permaneció rígida, elitista y bajo fuerte influencia clerical hasta la reforma de 1918.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "intermedio"
  tags: ["reforma_universitaria_1918", "manifiesto"]

variables:
  significado: "abrir una nueva etapa"

respuesta: "abrir una nueva etapa"
tipo: completar

enunciado: "El término 'liminar' en el Manifiesto Liminar se refiere a su función de {significado}."

explicacion: |
  "Liminar" proviene del latín *limen* (umbral). El documento buscaba abrir un umbral hacia una nueva etapa en la educación superior, rompiendo con el pasado.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "basico"
  tags: ["reforma_universitaria_1918", "derechos"]

variables:
  principio: "gratuidad"

respuesta: "gratuidad"
tipo: completar

enunciado: "El Manifiesto defendía la {principio} de la educación como un derecho humano y social, para que nadie fuera excluido por falta de recursos."

explicacion: |
  La gratuidad aseguraba que la universidad fuera un bien público accesible para todos, independientemente de su clase social, rompiendo con el elitismo anterior.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "intermedio"
  tags: ["reforma_universitaria_1918", "cogobierno"]

variables:
  participacion: "voz y voto"

respuesta: "voz y voto"
tipo: completar

enunciado: "Bajo el principio de cogobierno, los estudiantes ganaron derecho a {participacion} en los órganos de gobierno de la universidad."

explicacion: |
  El cogobierno integró a docentes, graduados y estudiantes. Por primera vez, los estudiantes tenían poder real de decisión, no solo opinión.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "basico"
  tags: ["reforma_universitaria_1918", "geografia"]

variables:
  ciudad: "Córdoba"

respuesta: "Córdoba"
tipo: completar

enunciado: "En abril de 1918, la protesta estudiantil estalló en la ciudad de {ciudad}, extendiéndose luego a todo el país."

explicacion: |
  La Universidad Nacional de Córdoba fue el epicentro. Desde allí, el movimiento se irradió a otras universidades argentinas y latinoamericanas.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "intermedio"
  tags: ["reforma_universitaria_1918", "pedagogia"]

variables:
  metodo: "memorística"

respuesta: "memorística"
tipo: completar

enunciado: "Antes de la reforma, la enseñanza en la Universidad Nacional de Córdoba era predominantemente {metodo}, basada en la repetición y exámenes arbitrarios."

explicacion: |
  El modelo antiguo se basaba en la transmisión pasiva del conocimiento. La reforma exigió clases dinámicas y una renovación pedagógica profunda.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "basico"
  tags: ["reforma_universitaria_1918", "sociedad"]

variables:
  clase_social: "clase media"

respuesta: "clase media"
tipo: completar

enunciado: "La llegada de inmigrantes generó una {clase_social} urbana más numerosa y exigente de cambios sociales y educativos."

explicacion: |
  El crecimiento de la clase media urbana fue clave. Estos sectores, aunque no siempre podían acceder a la universidad, exigían democratización y meritocracia.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "avanzado"
  tags: ["reforma_universitaria_1918", "impacto"]

variables:
  tipo_movimiento: "revolución cultural y política"

respuesta: "revolución cultural y política"
tipo: completar

enunciado: "Este movimiento no fue solo una huelga escolar, sino una {tipo_movimiento} que cuestionaba quién tiene derecho a conocer."

explicacion: |
  Fue trascendente porque cuestionaba las estructuras de poder y saber, influyendo en la educación superior de toda América Latina.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "basico"
  tags: ["reforma_universitaria_1918", "evaluacion"]

variables:
  caracteristica: "arbitrarios"

respuesta: "arbitrarios"
tipo: completar

enunciado: "Los exámenes en la Universidad Nacional de Córdoba, pre-reforma, eran considerados {caracteristica}, sin criterios claros ni participación estudiantil."

explicacion: |
  La arbitrariedad era una fuente de frustración. La reforma buscaba objetividad y transparencia en la evaluación del conocimiento.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "intermedio"
  tags: ["reforma_universitaria_1918", "alcance"]

variables:
  alcance: "América Latina"

respuesta: "América Latina"
tipo: completar

enunciado: "La protesta de 1918 se extendió a otras universidades de Argentina y de {alcance}."

explicacion: |
  El modelo de reforma se convirtió en un referente para movimientos estudiantiles en países como Chile, Perú, México y Cuba.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "intermedio"
  tags: ["reforma_universitaria_1918", "definiciones"]

variables:
  definicion: "comunidad integrada"

respuesta: "comunidad integrada"
tipo: completar

enunciado: "El cogobierno establece que la universidad es una {definicion} por docentes, graduados y estudiantes."

explicacion: |
  Esta visión rompe con la jerarquía rígida. La universidad se entiende como un espacio democrático donde todos los estamentos tienen peso.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "basico"
  tags: ["reforma_universitaria_1918", "cronologia"]

variables:
  mes: "abril"

respuesta: "abril"
tipo: completar

enunciado: "En el mes de {mes} de 1918, estalló la protesta en Córdoba."

explicacion: |
  Las protestas clave ocurrieron en abril de 1918, marcando el inicio oficial del proceso reformista.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "intermedio"
  tags: ["reforma_universitaria_1918", "filosofia"]

variables:
  bien: "público"

respuesta: "público"
tipo: completar

enunciado: "Si la universidad era un bien {bien}, nadie debía ser excluido por falta de recursos."

explicacion: |
  Este principio justificaba la gratuidad. La educación superior no era un privilegio de mercado, sino un derecho de la ciudadanía.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "intermedio"
  tags: ["reforma_universitaria_1918", "metodos"]

variables:
  tipo_clase: "dinámicas"

respuesta: "dinámicas"
tipo: completar

enunciado: "Se exigía la renovación pedagógica: clases más {tipo_clase} y cátedras libres."

explicacion: |
  Se pasaba de la lección magistral pasiva a un aprendizaje activo, crítico y participativo.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "avanzado"
  tags: ["reforma_universitaria_1918", "estructura_academica"]

variables:
  concepto: "cátedras libres"

respuesta: "cátedras libres"
tipo: completar

enunciado: "El sistema de {concepto} permitía enseñar a quienes no podían asistir regularmente o enseñar materias no oficiales."

explicacion: |
  Las cátedras libres democratizaban el acceso al conocimiento, permitiendo la enseñanza de corrientes de pensamiento diversas y críticas.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "intermedio"
  tags: ["reforma_universitaria_1918", "simbolismo"]

variables:
  rol: "carta fundacional"

respuesta: "carta fundacional"
tipo: completar

enunciado: "El Manifiesto Liminar es considerado la {rol} de la Reforma Universitaria."

explicacion: |
  Es el documento base que definió los principios éticos y políticos que rigen a muchas universidades públicas hoy.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "intermedio"
  tags: ["reforma_universitaria_1918", "academico"]

variables:
  contenido: "planes de estudio"

respuesta: "planes de estudio"
tipo: completar

enunciado: "La universidad podía definir libremente sus {contenido}."

explicacion: |
  Esto permitía actualizar los currículos, eliminar materias obsoletas y adaptar la formación a las necesidades sociales y científicas.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "basico"
  tags: ["reforma_universitaria_1918", "sociedad"]

variables:
  caracteristica: "elitista"

respuesta: "elitista"
tipo: completar

enunciado: "La Universidad Nacional de Córdoba, pre-reforma, era un espacio {caracteristica}, cerrado y controlado por una minoría."

explicacion: |
  Solo las élites tradicionales podían acceder y permanecer. La reforma buscó abrir las puertas a la clase trabajadora y media.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "basico"
  tags: ["reforma_universitaria_1918", "economia"]

variables:
  motor: "exportación"

respuesta: "exportación"
tipo: completar

enunciado: "La economía crecía gracias a la {motor} de productos agropecuarios."

explicacion: |
  Este boom económico generó riqueza, pero también desigualdad y una clase media que exigía participación política y cultural.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "intermedio"
  tags: ["reforma_universitaria_1918", "historia_institucional"]

variables:
  estructura: "colonial"

respuesta: "colonial"
tipo: completar

enunciado: "La Universidad Nacional de Córdoba seguía funcionando con estructuras {estructura} y rígidas."

explicacion: |
  Se refería a un modelo heredado de la época virreinal, con jerarquías rígidas y falta de modernidad académica.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "intermedio"
  tags: ["reforma_universitaria_1918", "democracia"]

variables:
  participacion: "no había"

respuesta: "no había"
tipo: completar

enunciado: "Antes de 1918, {participacion} participación de los estudiantes en las decisiones académicas."

explicacion: |
  Los estudiantes eran meros receptores pasivos. La reforma los convirtió en sujetos políticos dentro de la universidad.
```

```
metadata:
  materia: "historia"
  tema: "reforma_universitaria_1918"
  nivel: "avanzado"
  tags: ["reforma_universitaria_1918", "impacto_historico"]

variables:
  legado: "democratizar"

respuesta: "democratizar"
tipo: completar

enunciado: "No querían solo mejorar las aulas; querían {legado} la institución."

explicacion: |
  El objetivo final era la democratización del saber y del poder académico, un legado que perdura en la educación pública latinoamericana.
```

## Sección: decada-siglo-milenio (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["decada"]

variables:
  n: uno_de([1, 1])

respuesta: "10"
tipo: completar

enunciado: "Una década tiene cuántos años?"

pasos:
  - "Es la unidad de agrupación temporal más chica de las tres estudiadas."

explicacion: |
  Una década equivale a 10 años.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["siglo"]

variables:
  n: uno_de([1, 1])

respuesta: "100"
tipo: completar

enunciado: "Un siglo tiene cuántos años?"

pasos:
  - "Equivale a 10 décadas."

explicacion: |
  Un siglo equivale a 100 años.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["milenio"]

variables:
  n: uno_de([1, 1])

respuesta: "1000"
tipo: completar

enunciado: "Un milenio tiene cuántos años?"

pasos:
  - "Equivale a 10 siglos."

explicacion: |
  Un milenio equivale a 1000 años.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo"]

variables:
  n: uno_de([1, 1])

respuesta: "XIX"
tipo: mc
opciones_explicitas: ["XVIII", "XIX", "XX"]

enunciado: "El año 1850 pertenece al siglo..."

pasos:
  - "1850/100 = 18,5 → se redondea hacia arriba → siglo 19."

explicacion: |
  El año 1850, al dividir por 100 y redondear hacia arriba, cae en el
  siglo XIX, no en el XVIII como intuitivamente podría pensarse.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "caso_limite"]

variables:
  n: uno_de([1, 1])

respuesta: "XIX"
tipo: mc
opciones_explicitas: ["XIX", "XX"]

enunciado: "El año 1900 (exactamente 19×100) pertenece al siglo..."

pasos:
  - "Un año que termina exactamente en 00 pertenece al siglo anterior, no al siguiente."

explicacion: |
  1900 pertenece al siglo XIX; el siglo XX recién empieza en 1901.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "caso_limite"]

variables:
  n: uno_de([1, 1])

respuesta: "XX"
tipo: mc
opciones_explicitas: ["XX", "XXI"]

enunciado: "El año 2000 (exactamente 20×100) pertenece al siglo..."

pasos:
  - "Mismo caso que 1900: un año que termina exactamente en 00 pertenece al siglo anterior."

explicacion: |
  2000 pertenece al siglo XX; el siglo XXI recién empieza en 2001.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo"]

variables:
  n: uno_de([1, 1])

respuesta: "XXI"
tipo: mc
opciones_explicitas: ["XX", "XXI"]

enunciado: "El año 2001 pertenece al siglo..."

pasos:
  - "El nuevo siglo/milenio empieza en el año que termina en 1, no en 00."

explicacion: |
  2001 es el primer año del siglo XXI.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "regla"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para saber a qué siglo pertenece un año, hay que dividirlo por 100 y sumar 1, salvo que el año termine exactamente en 00 (que pertenece al siglo indicado por esa división, sin sumar)."

pasos:
  - "Es la regla general descrita en la teoría, con su excepción para años terminados en 00."

explicacion: |
  Verdadero: es la regla completa para calcular el siglo a partir de
  cualquier año.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["notacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Por convención, los siglos se escriben en números romanos: siglo XV, siglo XX, siglo XXI."

pasos:
  - "Es la notación estándar en libros de historia."

explicacion: |
  Verdadero: es la convención de notación descrita en la teoría.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["decada", "nomenclatura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una década suele nombrarse por su primer año: \"los años 80\" se refiere a la década de 1980 a 1989."

pasos:
  - "Es la convención de nomenclatura de décadas descrita en la teoría."

explicacion: |
  Verdadero: es la convención habitual para nombrar décadas.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["escalas_de_tiempo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para analizar hechos puntuales conviene usar el año; para procesos, la década o el siglo; para grandes etapas de la humanidad, el milenio."

pasos:
  - "Es el principio de \"escala apropiada\" descrito en la teoría."

explicacion: |
  Verdadero: elegir la unidad de tiempo adecuada según lo que se
  analiza es una habilidad central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["siglo", "decada"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un siglo equivale exactamente a 10 décadas."

pasos:
  - "100 años / 10 años por década = 10 décadas."

explicacion: |
  Verdadero: es la relación numérica entre estas dos unidades.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "basico"
  tags: ["milenio", "siglo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un milenio equivale exactamente a 10 siglos."

pasos:
  - "1000 años / 100 años por siglo = 10 siglos."

explicacion: |
  Verdadero: es la relación numérica entre estas dos unidades.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo", "practica"]

variables:
  anios: [1750, 1215, 1969]
  siglos: ["XVIII", "XIII", "XX"]
  idx: uno_de([0, 1, 2])

respuesta: siglos[idx]
tipo: mc
opciones_explicitas: ["XII", "XIII", "XVII", "XVIII", "XIX", "XX"]

enunciado: "El año {anios[idx]} pertenece al siglo..."

pasos:
  - "Dividir el año por 100 y redondear hacia arriba (salvo terminación exacta en 00)."

explicacion: |
  Aplicar la regla de cálculo de siglo a distintos años concretos es
  la práctica central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["milenio", "siglo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un milenio y un siglo son la misma unidad de tiempo, sólo con nombres distintos."

pasos:
  - "Un milenio (1000 años) es diez veces más largo que un siglo (100 años)."

explicacion: |
  Falso: son unidades de magnitud muy distinta, un milenio equivale a
  10 siglos.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["decada", "ambiguedad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Existe cierta ambigüedad técnica sobre si \"los años 80\" empiezan en 1980 o en 1981 (mismo problema que el cálculo de siglos), pero en el uso cotidiano se acepta la convención más simple de 1980-1989."

pasos:
  - "Es el mismo tipo de discusión técnica que la del inicio exacto de un siglo, mencionada como matiz en la teoría."

explicacion: |
  Verdadero: es un matiz técnico mencionado, aunque el uso cotidiano
  simplifica esta ambigüedad.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Hablar de \"la Revolución Industrial, siglo XVIII-XIX\" es mucho más manejable mentalmente que enumerar cada año del proceso."

pasos:
  - "Es la razón central de por qué existen estas unidades de agrupación temporal."

explicacion: |
  Verdadero: es la utilidad práctica central de década/siglo/milenio
  como unidades de agrupación.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "intermedio"
  tags: ["calculo_de_siglo", "metodo"]

enunciado: "Ordená los pasos para calcular a qué siglo pertenece un año dado."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el año termina exactamente en 00"
  - "Si termina en 00, dividir por 100 sin sumar nada más"
  - "Si no termina en 00, dividir por 100 y redondear hacia arriba (sumar 1 al resultado entero)"
  - "Expresar el resultado en números romanos, según la convención estándar"
respuesta_orden: ["Revisar si el año termina exactamente en 00", "Si termina en 00, dividir por 100 sin sumar nada más", "Si no termina en 00, dividir por 100 y redondear hacia arriba (sumar 1 al resultado entero)", "Expresar el resultado en números romanos, según la convención estándar"]
explicacion: |
  El proceso distingue el caso especial de años terminados en 00 del
  caso general, y cierra con la notación romana estándar.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dominar década, siglo y milenio es el prerrequisito directo de calcular intervalos que cruzan el año 0 (antes y después de Cristo)."

pasos:
  - "Ver `../antes-y-despues-de-cristo/`: antes de agregar la dificultad extra de la numeración que decrece hacia atrás, hace falta manejar bien estas unidades."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

```
metadata:
  materia: "historia"
  tema: "decada_siglo_milenio"
  nivel: "avanzado"
  tags: ["calculo_de_siglo", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer que un evento ocurrió \"a mediados del siglo XIX\", conviene poder traducir eso mentalmente a un rango aproximado de años (alrededor de 1850), en vez de sólo memorizar el número del siglo sin poder ubicarlo en años concretos."

pasos:
  - "Es la aplicación práctica de poder ir y venir entre años y siglos con soltura."

explicacion: |
  Verdadero: es la aplicación concreta de este tema para leer e
  interpretar textos históricos con fluidez.
```

