# Historia Profunda — Historia reciente argentina (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Historia Reciente

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["conceptos", "memoria"]

tipo: mc
opciones_explicitas: ["El estudio de procesos de larga duración como la formación del Estado", "El estudio de procesos cercanos con actores sociales presentes y memoria activa", "El estudio de la historia colonial y la independencia", "El estudio de la historia económica del siglo XIX"]
respuesta: "El estudio de procesos cercanos con actores sociales presentes y memoria activa"

enunciado: "En el contexto historiográfico, ¿qué define principalmente al concepto de 'historia reciente'?"

explicacion: |
  La historia reciente se distingue de la historia tradicional porque los sujetos sociales (protagonistas) suelen estar vivos o haber dejado testimonios directos, y existe una memoria social que mantiene el debate en la agenda pública actual.
```

### 2 — El rol de la memoria

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["memoria", "sujetos"]

tipo: completar
respuestas_validas:
  - "memoria"
  - "pasado"
  - "archivo"

enunciado: "A diferencia de la historia que analiza el ______, la historia reciente se nutre fundamentalmente de la ______ social y el testimonio."

explicacion: |
  La historia reciente no solo busca el dato objetivo, sino que interactúa con la memoria colectiva de las sociedades, donde los hechos aún tienen una carga emocional y política latente.
```

### 3 — Cronología y proximidad

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["temporalidad"]

variables:
  escenarios: [["1976", "Dictadura Militar"], ["1983", "Retorno a la Democracia"]]
  idx: uno_de([0, 1])
  anio: escenarios[idx][0]
  evento: escenarios[idx][1]

tipo: mc
respuesta: "El escenario de la Dictadura Militar"
opciones_explicitas: ["El escenario de la Dictadura Militar", "El escenario de la independencia", "El escenario de la conquista española"]

enunciado: "Un tema central de la historia reciente en Argentina es el proceso iniciado en el año {anio} relacionado con {evento}."

explicacion: |
  La delimitación temporal de la historia reciente es flexible, pero suele centrarse en los procesos de la segunda mitad del siglo XX que impactan en la identidad política actual.
```

### 4 — Elementos de análisis

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["metodologia"]

tipo: ordenar
opciones_explicitas: ["Recolección de testimonios orales", "Análisis de archivos estatales", "Construcción del relato historiográfico"]

enunciado: "Para abordar la historia reciente, un historiador suele seguir un orden metodológico que parte de la fuente directa hacia la síntesis. Ordena estos pasos:"

explicacion: |
  El trabajo con la historia reciente requiere primero capturar la voz de los protagonistas (oralidad), luego contrastarla con documentos oficiales (archivos) para finalmente construir un conocimiento histórico crítico.
respuesta_orden: ["Recolección de testimonios orales", "Análisis de archivos estatales", "Construcción del relato historiográfico"]
```

### 5 — Sujetos de la historia

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["sujetos", "testimonio"]

tipo: completar
tolerancia_abs: 0

enunciado: "Cuando un historiador entrevista a una persona que vivió un proceso político de hace 40 años, está utilizando una fuente primaria llamada ______."

respuesta: "testimonio"

explicacion: |
  El testimonio es la herramienta fundamental de la historia reciente, permitiendo que la subjetividad de los actores sociales sea parte del proceso de investigación.
```

### 6 — El Corralito

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["crisis_2001", "economia"]

respuesta: "corralito"
tipo: completar
respuestas_validas:
  - "corralito"
  - "corralito bancario"

enunciado: "La medida implementada por el gobierno de Fernando de la Rúa que restringió la extracción de efectivo de los depósitos bancarios se conoció como ___."

explicacion: |
  El 'corralito' fue la medida que limitó la disponibilidad de dinero en efectivo, lo que desencadenó una crisis de confianza masiva y protestas sociales.
```

### 7 — El lema de las protestas

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["protestas", "social"]

respuesta: "que se vayan todos"
tipo: mc
opciones_explicitas: ["que se vayan todos", "viva la patria", "justicia social", "libertad para todos"]

enunciado: "Durante las protestas de diciembre de 2001, un lema se volvió icónico para expresar el descontento social hacia la clase política: '___'."

explicacion: |
  El grito '¡Que se vayan todos, que no queda ni uno solo!' reflejaba el hartazgo generalizado de la sociedad hacia la dirigencia política de todos los sectores.
```

### 8 — Sucesión Presidencial

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["politica", "sucesion"]

respuesta: "Adolfo Rodríguez Saá"
tipo: mc
opciones_explicitas: ["Adolfo Rodríguez Saá", "Eduardo Duhalde", "Eduardo Crescimbeni", "Ramón Puerta"]

enunciado: "Tras la renuncia de De la Rúa, el presidente que asumió el cargo por apenas una semana (23 al 30 de diciembre de 2001) fue ___."

explicacion: |
  La crisis política fue tan aguda que Argentina tuvo tres presidentes en una semana: De la Rúa, Rodríguez Saá y finalmente Duhalde.
```

### 9 — El fin de la Convertibilidad

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["economia", "convertibilidad"]

respuesta: "11"
tipo: mc
opciones_explicitas: ["3", "7", "11", "20"]

enunciado: "¿Cuántos años duró aproximadamente el Plan de Convertibilidad (1 peso = 1 dólar) que colapsó durante la crisis de 2001?"

explicacion: |
  El Plan de Convertibilidad se implementó en 1991 y su salida forzosa ocurrió en 2002, tras el estallido de la crisis de 2001.
```

### 10 — Orden Cronológico de la Crisis

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "crisis"]

respuesta_orden: ["Corralito", "Cacerolazos", "Renuncia de De la Rúa", "Devaluación"]
tipo: ordenar
opciones_explicitas: ["Corralito", "Cacerolazos", "Renuncia de De la Rúa", "Devaluación"]

enunciado: "Ordena cronológicamente los eventos que marcaron el clímax de la crisis de 2001 en Argentina:"

explicacion: |
  Primero se impuso el corralito, lo que provocó los cacerolazos; esto derivó en la renuncia del presidente y, finalmente, la devaluación del peso.
```

### 11 — Desafíos de la temporalidad

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["metodologia", "temporalidad"]

variables:
  distancia: uno_de(["corta", "media", "larga"])

respuesta: "corta"
tipo: mc
opciones_explicitas: ["corta", "media", "larga"]

enunciado: "Uno de los principales desafíos para el historiador al abordar la historia reciente es la {distancia} distancia temporal con los hechos, lo que puede afectar la objetividad."

explicacion: |
  La cercanía temporal en la historia reciente puede dificultar la perspectiva crítica debido a la persistencia de la carga emocional y los intereses de los actores involucrados.
```

### 12 — La naturaleza de las fuentes

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["fuentes", "metodologia"]

variables:
  escenario: uno_de([["testimonios orales en disputa", "documentos oficiales", "diarios de la época"], ["fuentes en disputa", "fuentes estables", "fuentes consolidadas"]])

respuesta: "fuentes en disputa"
tipo: completar
respuestas_validas:
  - "fuentes en disputa"

enunciado: "En el estudio de procesos recientes, es común encontrarse con ___ que aún no han sido validadas por un consenso historiográfico o que presentan versiones contradictorias."

explicacion: |
  A diferencia de la historia antigua, en la reciente las fuentes (como testimonios o archivos desclasificados) suelen estar en disputa o bajo revisión constante.
```

### 13 — Sensibilidad política

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["politica", "interpretacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["la construcción de la memoria", "el rol de los organismos"], ["políticamente sensibles", "técnicamente complejas"]]

respuesta: "políticamente sensibles"
tipo: mc
opciones_explicitas: ["políticamente sensibles", "técnicamente complejas", "irrelevantes"]

enunciado: "El estudio de la historia reciente argentina se caracteriza por tratar interpretaciones que suelen ser ___."

explicacion: |
  Debido a que los procesos históricos recientes siguen impactando en el debate público actual, las interpretaciones suelen estar atravesadas por tensiones políticas.
```

### 14 — Secuencia de complejidad historiográfica

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["metodologia", "procesos"]

respuesta_orden: ["distancia temporal", "fuentes en disputa", "interpretaciones sensibles"]
tipo: ordenar
opciones_explicitas: ["distancia temporal", "fuentes en disputa", "interpretaciones sensibles"]

enunciado: "Ordene los factores que incrementan la complejidad del estudio de la historia reciente, desde el factor cronológico hasta el factor interpretativo:"

explicacion: |
  El proceso comienza con la cercanía de los hechos (tiempo), sigue con la dificultad de procesar la evidencia (fuentes) y culmina en la tensión de los sentidos asignados (interpretación).
```

### 15 — El rol del historiador

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["metodologia"]

variables:
  valor: uno_de([0, 1])
  datos: [[10, "objetividad"], [20, "subjetividad"]]

respuesta: "subjetividad"
tipo: completar
tolerancia_abs: 0

enunciado: "Debido a la carga emocional y política, el historiador debe trabajar con mayor cuidado para no ser arrastrado por la {datos[valor][1]} del presente."

explicacion: |
  La proximidad de los hechos aumenta el riesgo de que la subjetividad de los actores o del propio investigador nuble el análisis crítico.
```

### 16 — El rigor metodológico en la historia reciente

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["metodologia", "fuentes", "pensamiento_critico"]

respuesta: "multicausalidad"
tipo: completar
respuestas_validas:
  - "multicausalidad"

enunciado: "Para evitar que el estudio de la historia reciente se convierta en un mero relato emocional o de opinión, el historiador debe aplicar el principio de __________, reconociendo que los procesos sociales no responden a una única causa aislada."

explicacion: |
  El análisis histórico profesional exige la multicausalidad: entender que un fenómeno es el resultado de múltiples factores (económicos, políticos, sociales, culturales) interactuando entre sí, evitando explicaciones simplistas o unidimensionales.
```

### 17 — El valor de la evidencia documental

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["fuentes", "evidencia"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["un testimonio oral sin contrastar", "un relato basado solo en la memoria emocional"], ["un documento desclasificado con datos objetivos", "una evidencia contrastada mediante múltiples fuentes"]]
  respuestas: [["relato subjetivo", "evidencia científica"], ["relato subjetivo", "evidencia científica"]]

respuesta: respuestas[caso_idx][1]
tipo: mc
opciones_explicitas: ["relato subjetivo", "evidencia científica"]

enunciado: "Si un investigador busca construir conocimiento histórico riguroso sobre la última dictadura militar, debe priorizar el uso de: {escenarios[caso_idx][1]} sobre {escenarios[caso_idx][0]}."

explicacion: |
  La historia científica se construye sobre la evidencia y el contraste de fuentes, no sobre la validación de una única perspectiva subjetiva, garantizando la objetividad del proceso de investigación.
```

### 18 — Componentes del análisis crítico

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["metodologia", "critica"]

respuesta_orden: ["análisis de fuentes", "contextualización", "contraste de evidencias", "evitar el anacronismo"]
tipo: ordenar
opciones_explicitas: ["análisis de fuentes", "contextualización", "contraste de evidencias", "evitar el anacronismo"]

enunciado: "Ordene los pasos lógicos para abordar un proceso histórico reciente desde una perspectiva académica y crítica:"

explicacion: |
  El método histórico requiere primero identificar las fuentes, luego entender el contexto en que se produjeron, contrastar la información para verificar veracidad y, finalmente, evitar juzgar el pasado con valores exclusivamente actuales (anacronismo).
```

### 19 — La trampa del relato emocional

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["subjetividad", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Es metodológicamente correcto validar una tesis histórica sobre la historia reciente basándose exclusivamente en la intensidad emocional de un testimonio, prescindiendo del análisis de otras fuentes?"

explicacion: |
  Falso. La emoción es un componente válido para entender la subjetividad de los actores, pero la construcción del conocimiento histórico requiere la validación de la evidencia y la pluralidad de fuentes para evitar el sesgo.
```

### 20 — El rol de la multicausalidad

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["causalidad", "complejidad"]

variables:
  factor_idx: uno_de([0, 1])
  factores: [["político", "económico"], ["social", "cultural"]]
  causas: [["causa única", "causa compleja"], ["causa única", "causa compleja"]]

respuesta: causas[factor_idx][1]
tipo: mc
opciones_explicitas: ["causa única", "causa compleja"]

enunciado: "Al estudiar la crisis de las instituciones democráticas en la Argentina de los años 70, un historiador crítico busca identificar una causa _______, integrando factores como el {factores[factor_idx][0]} y el {factores[factor_idx][1]}."

explicacion: |
  La historia no es una sucesión de eventos causados por un solo factor; es un tejido complejo donde factores políticos, económicos y sociales se entrelazan, exigiendo un análisis de causalidad múltiple.
```

### 21 — El retorno a la democracia

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["democracia", "politica"]

respuesta: "Raúl Alfonsín"
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa", "Néstor Kirchner"]

enunciado: "En el año 1983, la presidencia de la Nación fue asumida por ___ tras el fin de la dictadura."

explicacion: |
  El proceso de democratización se consolidó con la asunción de Raúl Alfonsín en 1983.
```

### 22 — Crisis económica y social

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["crisis", "economia"]

variables:
  datos: [["el estallido del 2001", "Plan de Convertibilidad"], ["la crisis de 2001", "Plan de Convertibilidad"], ["el default de 2001", "Plan de Convertibilidad"]]
  idx: uno_de([0, 1, 2])

respuesta: "Plan de Convertibilidad"
tipo: mc
opciones_explicitas: ["Plan de Convertibilidad", "Ley de Convertibilidad", "Plan de Estabilización", "Plan de Austeridad"]

enunciado: "El contexto de {datos[idx][0]} puso fin a un modelo económico basado en el {datos[idx][1]}."

explicacion: |
  La crisis de 2001 marcó el fin de la convertibilidad (1 peso = 1 dólar) implementada en los años 90.
```

### 23 — El proceso de transición

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["derechos_humanos", "justicia"]

variables:
  juicio: uno_de([["Juicio a las Juntas", "1985"], ["Juicio a las Juntas", "1985"], ["Juicio a las Juntas", "1985"]])

respuesta: juicio[1]
tipo: completar
respuestas_validas:
  - "1985"

enunciado: "El histórico {juicio[0]} que sentó un precedente mundial en justicia por derechos humanos ocurrió en el año ___."

explicacion: |
  El Juicio a las Juntas de 1985 fue un hito fundamental en la historia reciente argentina para el juicio a los responsables de la última dictadura.
```

### 24 — El cambio de siglo

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["politica", "gobierno"]

variables:
  periodo: uno_de([["el mandato de Néstor Kirchner", "2003"], ["el mandato de Néstor Kirchner", "2003"], ["el mandato de Néstor Kirchner", "2003"]])

respuesta: "2003"
tipo: completar
tolerancia_abs: 0

enunciado: "Néstor Kirchner asumió la presidencia de la República en el año ___."

explicacion: |
  Néstor Kirchner asumió el cargo en 2003, iniciando un periodo de transformación política y económica.
```

### 25 — Secuencia de presidentes

```
metadata:
  materia: "historia_profunda"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["ordenar", "presidencias"]

variables:
  secuencia: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa"]

respuesta_orden: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa"]
tipo: ordenar
opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa"]

enunciado: "Ordene cronológicamente los siguientes presidentes argentinos (de menor a mayor antigüedad):"

pasos:
  - "Identifique el año de inicio de cada mandato."
  - "Coloque el primero en la posición 1."

explicacion: |
  La secuencia correcta es Alfonsín (1983), Menem (1989) y De la Rúa (1999).
```
