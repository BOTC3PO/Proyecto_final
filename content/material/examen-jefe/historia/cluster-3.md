# Examen jefe — [PENDIENTE #723]

> Logro #723. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **114 preguntas totales** en 5/5 secciones.

---

## Sección: rosas-y-la-confederacion (24 preguntas)

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["confederacion", "urquiza", "constitucion"]

variables:
  anio_constitucion: 1853
  provincia_congreso: "Santa Fe"

respuesta: "1853"
tipo: input

enunciado: "Tras la batalla de Caseros, Urquiza convocó al Congreso Constituyente en {provincia_congreso}. ¿En qué año se promulgó la nueva Constitución?"

explicacion: |
  La Constitución de 1853 fue el resultado directo de la convocatoria de Urquiza para organizar la nación tras la caída de Rosas.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["unitarios", "federales", "caseros"]

variables:
  lider_coalicion: "Justo José de Urquiza"
  lider_federal: "Juan Manuel de Rosas"

respuesta: "Justo José de Urquiza"
tipo: input

enunciado: "¿Quién lideró el 'Ejército Grande' que derrotó al ejército de {lider_federal} en Caseros?"

explicacion: |
  Justo José de Urquiza, gobernador federal de Entre Ríos, lideró la coalición (con Brasil, Uruguay y Corrientes) contra Rosas — una ruptura dentro del propio federalismo, no un regreso de los unitarios al poder.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["soberania", "intervencion", "obligado"]

variables:
  pais_a: "Gran Bretaña"
  pais_b: "Francia"

respuesta: "Gran Bretaña y Francia"
tipo: input

enunciado: "En la batalla de la Vuelta de Obligado (1845), las fuerzas rosistas enfrentaron a una flota conjunta de {pais_a} y {pais_b}."

explicacion: |
  La intervención anglo-francesa buscaba abrir el comercio del Paraná. La resistencia simbolizó la defensa de la soberanía nacional.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["causas", "alianzas", "caseros"]

variables:
  factor_interno: "disidencia provincial"
  factor_externo: "intervencion extranjera"

respuesta: "disidencia provincial"
tipo: input

enunciado: "La caída de Rosas se debió a una alianza entre fuerzas internas motivadas por el {factor_interno} y la presión externa."

explicacion: |
  El descontento de las provincias interiores con la hegemonía porteña fue clave para que Urquiza, al frente del Ejército Grande, pudiera vencer a Rosas.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "avanzado"
  tags: ["simbolismo", "soberania"]

variables:
  concepto_clave: "defensa de la soberanía"

respuesta: "defensa de la soberanía"
tipo: input

enunciado: "Aunque fue una derrota militar, la Vuelta de Obligado se recuerda principalmente por su valor simbólico de {concepto_clave} frente al intervencionismo."

explicacion: |
  El sacrificio de las tropas rosistas elevó la causa de la independencia nacional a un símbolo patrio, trascendiendo el resultado táctico.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["unidad", "fragmentacion"]

variables:
  resultado_politico: "profundizó la división"

respuesta: "profundizó la división"
tipo: input

enunciado: "¿Cuál fue el efecto político inmediato de la victoria de Urquiza en Caseros: la unificación nacional o {resultado_politico}?"

explicacion: |
  La victoria no trajo unidad inmediata; por el contrario, aisló a Buenos Aires y profundizó la brecha entre la provincia y el resto del país.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["batallas", "soberania"]

variables:
  fecha_correcta: "20 de noviembre de 1845"
  fecha_falsa: "3 de febrero de 1852"

respuesta: verdadero
tipo: vf

enunciado: "La batalla de la Vuelta de Obligado, un símbolo de la resistencia contra la intervención anglo-francesa, ocurrió el {fecha_correcta}."

explicacion: |
  La Vuelta de Obligado se libró el 20 de noviembre de 1845 — fecha que hoy se conmemora en Argentina como el Día de la Soberanía Nacional. La fecha mencionada en el enunciado es correcta.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["constitucion", "fechas"]

variables:
  anio: 1853

respuesta: verdadero
tipo: vf

enunciado: "La Constitución Nacional argentina fue sancionada en el año {anio} como resultado del proceso iniciado tras la batalla de Caseros."

explicacion: |
  Es correcto. La Constitución de 1853 fue la primera carta magna nacional, aunque Buenos Aires no adhirió inicialmente.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["intervencion", "diplomacia"]

variables:
  paises: "Inglaterra y Francia"

respuesta: verdadero
tipo: vf

enunciado: "La flota que fue resistida en la Vuelta de Obligado estaba compuesta por fuerzas de {paises}."

explicacion: |
  Es correcto. La intervención anglo-francesa buscaba abrir los ríos interiores al comercio libre, lo que Rosas consideraba una violación de la soberanía.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["caseros", "fechas"]

variables:
  fecha: "3 de febrero de 1852"

respuesta: verdadero
tipo: vf

enunciado: "La batalla de Caseros, que marcó el fin del segundo gobierno de Rosas, se libró el {fecha}."

explicacion: |
  Es correcto. El 3 de febrero de 1852 es la fecha oficial de la batalla.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "soberania", "intervencion"]

respuesta: verdadero
tipo: vf

enunciado: "La batalla de la Vuelta de Obligado se interpretó históricamente como un acto de defensa de la soberanía nacional frente al intervencionismo anglo-francés."

explicacion: |
  Aunque hubo derrotas militares, el sacrificio de las tropas rosistas se convirtió en un símbolo de resistencia contra la injerencia extranjera en el río Paraná.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["caseros", "cronologia"]

variables:
  dia: 3
  mes: 2

respuesta: "3 de febrero"
tipo: completar

enunciado: "La batalla de Caseros, que marcó el fin del gobierno de Rosas, ocurrió el {dia} de {mes}."

explicacion: |
  La fecha exacta de la batalla es el 3 de febrero de 1852.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "alianzas", "guerra"]

respuesta: falso
tipo: vf

enunciado: "En la batalla de la Vuelta de Obligado, las fuerzas argentinas contaron con el apoyo logístico de Brasil y Uruguay."

explicacion: |
  Fue al revés: Brasil y Uruguay formaban parte de la coalición anglo-francesa que invadía el río Paraná, mientras que las fuerzas de Rosas las combatían.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["obligado", "cronologia"]

variables:
  dia: 20
  mes: 11

respuesta: "20"
tipo: input

enunciado: "La batalla de la Vuelta de Obligado ocurrió el día {dia} del mes {mes} de 1845. Escribe solo el número del día."

explicacion: |
  La fecha es 20 de noviembre de 1845.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "avanzado"
  tags: ["constitucion", "buenos_aires", "integracion"]

respuesta: falso
tipo: vf

enunciado: "La provincia de Buenos Aires se integró inmediatamente al resto del país tras la sanción de la Constitución de 1853."

explicacion: |
  Buenos Aires se separó de la Confederación Argentina entre 1852 y 1861, manteniendo un estado propio hasta su reincorporación posterior.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["constitucion", "objetivo", "unidad"]

respuesta: verdadero
tipo: vf

enunciado: "Uno de los objetivos principales de la Constitución de 1853 era superar la fragmentación territorial y lograr la unidad nacional."

explicacion: |
  El texto constitucional buscaba establecer un régimen federal que integrara a las provincias, aunque Buenos Aires se mantuvo al margen inicialmente.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "caseros"]

variables:
  anio: 1852

respuesta: "1852"
tipo: input

enunciado: "Juan Manuel de Rosas cayó del poder en el año {anio}."

explicacion: |
  La batalla de Caseros ocurrió en 1852, poniendo fin al gobierno de Rosas.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["gobierno", "centralizacion", "buenos_aires"]

respuesta: verdadero
tipo: vf

enunciado: "Durante el gobierno de Rosas, la provincia de Buenos Aires ejerció un dominio hegemónico sobre el resto del país."

explicacion: |
  Rosas gestionaba las relaciones exteriores y el comercio portuario, centralizando el poder económico y político en Buenos Aires.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["caseros", "consecuencias", "fractura"]

respuesta: falso
tipo: vf

enunciado: "La victoria en Caseros trajo consigo la unificación inmediata del país bajo la Constitución de 1853."

explicacion: |
  La victoria de Caseros profundizó la división, llevando a la separación de Buenos Aires de la Confederación durante casi una década.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "caseros"]

variables:
  mes: 2

respuesta: "2"
tipo: input

enunciado: "La batalla de Caseros ocurrió en el mes {mes} del año 1852."

explicacion: |
  La fecha es 3 de febrero de 1852.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["politica", "provincias", "resentimiento"]

respuesta: verdadero
tipo: vf

enunciado: "Las provincias interiores sentían que sus intereses estaban subordinados a los de Buenos Aires durante el gobierno de Rosas."

explicacion: |
  El control portuario y las aduanas por parte de Buenos Aires generaba un fuerte resentimiento en las provincias del interior.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "identidad", "sacrificio"]

respuesta: verdadero
tipo: vf

enunciado: "A pesar de la derrota militar, la batalla de la Vuelta de Obligado dejó una huella profunda en la identidad nacional como símbolo de sacrificio."

explicacion: |
  El heroísmo de las tropas y civiles en Obligado fue reinterpretado como un acto de defensa de la soberanía.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "constitucion"]

variables:
  anio: 1853

respuesta: "1853"
tipo: input

enunciado: "La Constitución Nacional fue sancionada en el año {anio}."

explicacion: |
  La primera Constitución Nacional de Argentina se sancionó en 1853.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["caseros", "inestabilidad", "guerra_civil"]

respuesta: verdadero
tipo: vf

enunciado: "La caída de Rosas no trajo la unidad nacional deseada, sino que abrió la puerta a un período de inestabilidad y guerra civil."

explicacion: |
  Tras Caseros, Argentina vivió una larga etapa de fragmentación política y conflictos entre Buenos Aires y la Confederación.
```

## Sección: periodizacion-historica (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["periodizacion", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Periodizar es dividir el tiempo histórico en bloques delimitados por hechos que se consideran lo suficientemente importantes como para marcar un antes y un después."

pasos:
  - "Es una herramienta de análisis que los historiadores construyen, no una división natural del tiempo."

explicacion: |
  Verdadero: es la definición central de periodización.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["prehistoria"]

variables:
  n: uno_de([1, 1])

respuesta: "Prehistoria"
tipo: mc
opciones_explicitas: ["Prehistoria", "Edad Antigua", "Edad Media"]

enunciado: "El período que va desde el origen de la humanidad hasta la invención de la escritura se llama..."

pasos:
  - "Es el primer período de la periodización clásica occidental."

explicacion: |
  La Prehistoria es el período anterior a la invención de la
  escritura.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_antigua"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Antigua"
tipo: mc
opciones_explicitas: ["Prehistoria", "Edad Antigua", "Edad Media"]

enunciado: "El período que va desde la invención de la escritura hasta la caída del Imperio Romano de Occidente (476 d.C.) se llama..."

pasos:
  - "Es el segundo período de la periodización clásica occidental."

explicacion: |
  La Edad Antigua va desde la escritura hasta la caída de Roma.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_media"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Media"
tipo: mc
opciones_explicitas: ["Edad Antigua", "Edad Media", "Edad Moderna"]

enunciado: "El período que va desde el 476 d.C. hasta 1453 o 1492 (según el criterio usado) se llama..."

pasos:
  - "Es el tercer período de la periodización clásica occidental."

explicacion: |
  La Edad Media va desde la caída de Roma hasta la caída de
  Constantinopla o el descubrimiento de América.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_moderna"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Moderna"
tipo: mc
opciones_explicitas: ["Edad Media", "Edad Moderna", "Edad Contemporánea"]

enunciado: "El período que va desde fines del siglo XV hasta la Revolución Francesa (1789) se llama..."

pasos:
  - "Es el cuarto período de la periodización clásica occidental."

explicacion: |
  La Edad Moderna va desde fines del s. XV hasta 1789.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_contemporanea"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Contemporánea"
tipo: mc
opciones_explicitas: ["Edad Moderna", "Edad Contemporánea", "Edad Media"]

enunciado: "El período que va desde 1789 hasta la actualidad se llama..."

pasos:
  - "Es el quinto y último período de la periodización clásica occidental."

explicacion: |
  La Edad Contemporánea va desde la Revolución Francesa hasta hoy.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "orden"]

enunciado: "Ordená cronológicamente los cinco períodos de la periodización clásica occidental."
tipo: ordenar
opciones_explicitas:
  - "Prehistoria"
  - "Edad Antigua"
  - "Edad Media"
  - "Edad Moderna"
  - "Edad Contemporánea"
respuesta_orden: ["Prehistoria", "Edad Antigua", "Edad Media", "Edad Moderna", "Edad Contemporánea"]
explicacion: |
  El orden sigue la secuencia cronológica estándar de la
  periodización clásica occidental.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["limites_convencionales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Decir que \"la Edad Media terminó en 1492\" es una convención útil para organizar el estudio, no un hecho que ocurrió literalmente ese día para todas las sociedades del planeta."

pasos:
  - "Ningún cambio histórico ocurre de un día para el otro en todo el mundo a la vez."

explicacion: |
  Verdadero: los límites de los períodos son convencionales, no
  hechos absolutos y simultáneos en todas partes.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["limites_convencionales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distintos historiadores pueden proponer límites algo distintos para un mismo período, según qué criterio prioricen."

pasos:
  - "Por ejemplo, la Edad Media puede terminar en 1453 o en 1492, según el criterio elegido."

explicacion: |
  Verdadero: es un matiz importante sobre la flexibilidad de los
  límites de período según el criterio historiográfico usado.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["periodizacion_occidental"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La periodización clásica (Prehistoria/Antigua/Media/Moderna/Contemporánea) está construida desde la historia europea, y aplicarla sin más a otras regiones puede ser engañoso."

pasos:
  - "Los hitos que la organizan (caída de Roma, Revolución Francesa) no tienen el mismo peso o sentido en otras historias regionales."

explicacion: |
  Verdadero: es un matiz importante sobre las limitaciones de esta
  periodización fuera del contexto europeo.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["periodizacion_occidental", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aplicar directamente el rótulo \"Edad Media\" a la historia de los pueblos originarios de América antes de 1492 puede ser engañoso, porque ese período fue definido a partir de hitos europeos que no aplican de la misma forma a esas sociedades."

pasos:
  - "Es el ejemplo concreto mencionado en la teoría sobre las limitaciones de esta periodización."

explicacion: |
  Verdadero: es la aplicación práctica de por qué esta periodización
  es una herramienta útil pero no neutral.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dividir la historia en períodos permite comparar etapas entre sí, como preguntar qué caracterizaba a la Edad Media que ya no estaba en la Edad Moderna."

pasos:
  - "Es una de las utilidades centrales de periodizar."

explicacion: |
  Verdadero: la comparación entre períodos es una de las razones
  principales por las que periodizar ayuda a pensar históricamente.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin periodizar, la historia sería una lista interminable de hechos sueltos sin ningún marco organizador."

pasos:
  - "Es la razón central de por qué periodizar es una herramienta valiosa, más allá de memorizar fechas de corte."

explicacion: |
  Verdadero: es la conclusión central sobre por qué periodizar ayuda
  a pensar, no sólo a clasificar.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "conceptual"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tiempo histórico en sí es continuo; la división en períodos es una construcción de los historiadores, no una propiedad del tiempo mismo."

pasos:
  - "Es la aclaración conceptual central de por qué periodizar es una \"herramienta\" y no una \"división natural\"."

explicacion: |
  Verdadero: es el punto de partida conceptual de todo este tema.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["edad_antigua", "edad_media"]

variables:
  n: uno_de([1, 1])

respuesta: "476"
tipo: completar

enunciado: "El año que marca convencionalmente el límite entre la Edad Antigua y la Edad Media (caída del Imperio Romano de Occidente) es el..."

pasos:
  - "Es uno de los hitos clásicos de la periodización occidental."

explicacion: |
  El 476 d.C. es el año convencional de la caída de Roma que marca el
  inicio de la Edad Media.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["edad_moderna", "edad_contemporanea"]

variables:
  n: uno_de([1, 1])

respuesta: "1789"
tipo: completar

enunciado: "El año que marca convencionalmente el límite entre la Edad Moderna y la Edad Contemporánea (Revolución Francesa) es el..."

pasos:
  - "Es otro de los hitos clásicos de la periodización occidental."

explicacion: |
  1789 es el año convencional de la Revolución Francesa que marca el
  inicio de la Edad Contemporánea.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "practica"]

variables:
  anios: [1200, 1700, 1900]
  periodos: ["Edad Media", "Edad Moderna", "Edad Contemporánea"]
  idx: uno_de([0, 1, 2])

respuesta: periodos[idx]
tipo: mc
opciones_explicitas: ["Edad Antigua", "Edad Media", "Edad Moderna", "Edad Contemporánea"]

enunciado: "El año {anios[idx]} corresponde a la..."

pasos:
  - "Ubicar cada año dentro del rango de fechas de cada período de la periodización clásica."

explicacion: |
  Aplicar los límites de cada período para ubicar años concretos es
  la práctica central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "metodo"]

enunciado: "Ordená los pasos para periodizar un tema histórico específico."
tipo: ordenar
opciones_explicitas:
  - "Identificar el rango temporal total del tema a estudiar"
  - "Buscar hechos suficientemente importantes que marquen posibles cortes de período"
  - "Dividir el rango en bloques delimitados por esos hechos"
  - "Verificar que la periodización elegida tenga sentido para el criterio que se quiere analizar"
respuesta_orden: ["Identificar el rango temporal total del tema a estudiar", "Buscar hechos suficientemente importantes que marquen posibles cortes de período", "Dividir el rango en bloques delimitados por esos hechos", "Verificar que la periodización elegida tenga sentido para el criterio que se quiere analizar"]
explicacion: |
  El proceso va de delimitar el rango total a construir la división
  en bloques según hitos relevantes.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Periodizar con precisión es el prerrequisito directo de analizar causa y consecuencia: antes de estudiar por qué ocurrió algo, hace falta un marco temporal claro donde ubicar esas causas y consecuencias."

pasos:
  - "Ver `../causa-y-consecuencia/`: es el tema siguiente de la cadena de pensamiento histórico."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["periodizacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al estudiar un hecho histórico, ubicarlo primero dentro de la periodización general (qué edad, qué siglo) ayuda a comparar rápidamente con otros procesos conocidos de esa misma etapa."

pasos:
  - "Es la aplicación práctica directa de este tema como estrategia de estudio."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al estudiar
  cualquier hecho histórico nuevo.
```

## Sección: economias-regionales-tempranas (23 preguntas)

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["ley_aduanas", "urquiza", "proteccionismo"]

variables:
  anio: 1854

respuesta: "proteger la producción local"
tipo: completar

enunciado: "La Ley de Aduanas promulgada en {anio} por el gobierno de Justo José de Urquiza tenía como objetivo principal:"

explicacion: |
  La ley buscaba proteger la industria naciente y la producción local frente a la competencia extranjera, especialmente la británica.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["comercio_exterior", "britanicos"]

respuesta: "británica"
tipo: completar

enunciado: "La Ley de Aduanas de 1854 buscaba proteger la producción local frente a la competencia de la industria ___."

explicacion: |
  La industria británica era la principal competidora en el mercado argentino de la época.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["litoral", "entre_rios", "corrientes"]

variables:
  regiones: "Entre Ríos y Corrientes"

respuesta: "Entre Ríos y Corrientes"
tipo: completar

enunciado: "Las provincias que más resistieron la Ley de Aduanas por considerar que amenazaba su autonomía económica fueron:"

explicacion: |
  Las provincias del Litoral, especialmente Entre Ríos y Corrientes, dependían más del comercio internacional y menos de la protección arancelaria.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["economia_litoral", "comercio"]

respuesta: "abierta"
tipo: completar

enunciado: "La economía de las provincias del Litoral se caracterizaba por ser más ___ al comercio internacional."

explicacion: |
  A diferencia del centro del país, el Litoral tenía una economía más integrada y dependiente del comercio exterior.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["conflicto_armado", "causas"]

respuesta: "Ley de Aduanas"
tipo: completar

enunciado: "La resistencia a la ___ se convirtió en el detonante de una nueva guerra civil entre la Confederación y el Litoral."

explicacion: |
  La aplicación estricta de la ley por Urquiza provocó la reacción armada de los caudillos litorales.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["ideologia", "descentralizacion"]

respuesta: "descentralizada"
tipo: completar

enunciado: "Los rebeldes del Litoral defendían una visión política más ___, donde las provincias tendrían mayor control sobre sus recursos."

explicacion: |
  Los caudillos litorales argumentaban a favor de una mayor autonomía provincial frente al centralismo confederado.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["exportaciones", "carne"]

respuesta: "carne salada y cueros"
tipo: completar

enunciado: "En la década de 1850, las exportaciones de ___ seguían siendo vitales para la economía argentina."

explicacion: |
  Aunque la industria nacía, la ganadería y sus derivados seguían siendo la base de las exportaciones.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["fiscalidad", "estado"]

respuesta: "asegurar ingresos"
tipo: completar

enunciado: "Además de proteger la industria, la Ley de Aduanas buscaba ___ para el Estado nacional."

explicacion: |
  El Estado nacional necesitaba recursos fiscales para estructurarse tras la caída de Rosas.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["soberania", "comercio"]

respuesta: "soberanía sobre el comercio exterior"
tipo: completar

enunciado: "Mientras la Confederación buscaba consolidar la ___, los rebeldes defendían la autonomía provincial."

explicacion: |
  El conflicto fue también una disputa sobre quién controlaba las tarifas y el comercio exterior.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["confederacion", "estructuracion"]

respuesta: "recién comenzaba a estructurarse"
tipo: completar

enunciado: "La Ley de Aduanas se promulgó cuando el Estado nacional ___ tras la caída de Rosas."

explicacion: |
  El nuevo orden constitucional estaba frágil y necesitaba consolidar su autoridad fiscal.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["percepcion", "amenaza"]

respuesta: "amenaza directa"
tipo: completar

enunciado: "Los caudillos litorales percibieron la Ley de Aduanas como una ___ a su autonomía y prosperidad."

explicacion: |
  La ley fue vista no como una medida técnica, sino como un ataque político y económico.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["consecuencias", "guerra"]

respuesta: "no se resolvió con una victoria clara inmediata"
tipo: completar

enunciado: "La guerra entre la Confederación y el Litoral ___, dejando un legado de desconfianza."

explicacion: |
  El conflicto prolongado debilitó la legitimidad del gobierno de Urquiza sin definir una supremacía clara de inmediato.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["acuerdos", "federalismo"]

respuesta: "violaba los acuerdos federales"
tipo: completar

enunciado: "Los rebeldes argumentaban que la ley ___ y perjudicaba sus economías locales."

explicacion: |
  La imposición unilateral de tarifas fue vista como una violación de los pactos federativos.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["diplomacia", "conflicto"]

respuesta: "rompimiento de relaciones"
tipo: completar

enunciado: "La situación escaló rápidamente, llevando al ___ diplomáticas entre el gobierno nacional y el Litoral."

explicacion: |
  La tensión económica derivó en una crisis política y diplomática abierta.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["rosas", "urquiza", "control"]

respuesta: "control absoluto"
tipo: completar

enunciado: "La tensión se generó aunque la capital ya no tuviera el ___ que había tenido bajo Rosas."

explicacion: |
  Urquiza intentaba centralizar el poder que Rosas había ejercido desde Buenos Aires, pero con menos fuerza coercitiva inicial.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["constitucion", "fragilidad"]

respuesta: "fragilidad del nuevo orden constitucional"
tipo: completar

enunciado: "El conflicto puso de manifiesto la ___ y la dificultad de integrar intereses dispares."

explicacion: |
  La incapacidad de resolver el conflicto fiscal mostró los límites del nuevo marco legal.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "avanzado"
  tags: ["integracion", "economia"]

respuesta: "integrar intereses económicos tan dispares"
tipo: completar

enunciado: "El gran desafío del momento era ___ bajo un mismo marco legal."

explicacion: |
  Los intereses de Buenos Aires/Confederación y los del Litoral eran económicamente antagónicos en términos arancelarios.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["tarifas", "proteccionismo"]

respuesta: "tarifas altas"
tipo: completar

enunciado: "La Ley de Aduanas imponía ___ a las importaciones para proteger la industria local."

explicacion: |
  El proteccionismo se lograba mediante barreras arancelarias elevadas.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["regulacion", "comercio_exterior"]

respuesta: "regular el comercio exterior"
tipo: completar

enunciado: "Además de las tarifas, la ley buscaba ___ bajo el control del Estado nacional."

explicacion: |
  La centralización del comercio exterior era clave para la soberanía nacional.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["litoral", "economia"]

variables:
  valor: "falso"

respuesta: falso
tipo: vf

enunciado: "Las provincias del Litoral dependían más de la protección arancelaria que el centro del país."

explicacion: |
  Falso. El Litoral tenía una economía más abierta y dependía menos de la protección que el centro.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "intermedio"
  tags: ["guerra", "resultado"]

variables:
  valor: "falso"

respuesta: falso
tipo: vf

enunciado: "La guerra entre la Confederación y el Litoral se resolvió con una victoria clara inmediata."

explicacion: |
  Falso. El conflicto dejó un legado de desconfianza y no tuvo un ganador claro de inmediato.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["urquiza", "aplicacion"]

variables:
  valor: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Justo José de Urquiza intentó aplicar la Ley de Aduanas de manera estricta."

explicacion: |
  Verdadero. Su estricta aplicación fue el detonante de la rebelión litoraleña.
```

```
metadata:
  materia: "historia"
  tema: "economias_regionales_tempranas"
  nivel: "basico"
  tags: ["industria", "proteccion"]

variables:
  valor: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La Ley de Aduanas buscaba fomentar la industria naciente argentina."

explicacion: |
  Verdadero. El proteccionismo arancelario tenía como fin desarrollar la manufactura local.
```

## Sección: causa-y-consecuencia (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "basico"
  tags: ["causa", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una causa es una condición o hecho que contribuye a producir otro hecho (la consecuencia)."

pasos:
  - "En historia, rara vez una causa \"obliga\" mecánicamente a la consecuencia, como en física."

explicacion: |
  Verdadero: es la definición central de causa en el análisis
  histórico.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causa", "probabilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En historia, una causa hace que la consecuencia sea más probable o posible, dentro de decisiones humanas que podrían haber sido distintas."

pasos:
  - "A diferencia de una relación mecánica como en física, hay margen de decisión humana involucrado."

explicacion: |
  Verdadero: es un matiz importante sobre cómo funciona la
  causalidad en el análisis histórico.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causas_inmediatas"]

variables:
  n: uno_de([1, 1])

respuesta: "causa inmediata"
tipo: mc
opciones_explicitas: ["causa inmediata", "causa profunda"]

enunciado: "El asesinato del archiduque Francisco Fernando, como el hecho puntual que \"disparó\" directamente la Primera Guerra Mundial, es un ejemplo de..."

pasos:
  - "Es el hecho puntual que desencadena directamente el acontecimiento."

explicacion: |
  La causa inmediata es el hecho puntual que dispara directamente un
  acontecimiento.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causas_profundas"]

variables:
  n: uno_de([1, 1])

respuesta: "causa profunda"
tipo: mc
opciones_explicitas: ["causa inmediata", "causa profunda"]

enunciado: "Las tensiones entre potencias europeas, las alianzas militares y el nacionalismo, que ya existían antes del asesinato de Francisco Fernando, son ejemplos de..."

pasos:
  - "Son condiciones de fondo que venían gestándose desde antes del hecho puntual."

explicacion: |
  Las causas profundas (o estructurales) son condiciones de fondo que
  explican por qué la causa inmediata tuvo el efecto que tuvo.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["causas_inmediatas", "causas_profundas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin las causas profundas, la causa inmediata (el asesinato del archiduque) no habría tenido el mismo efecto: explica por qué ese hecho puntual desató una guerra mundial y no un conflicto menor."

pasos:
  - "Es la razón por la que ambos tipos de causa se analizan juntos, no por separado."

explicacion: |
  Verdadero: es la relación central entre causa inmediata y causa
  profunda en el análisis histórico.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["correlacion_vs_causalidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que dos hechos ocurran cerca en el tiempo no significa que uno haya causado al otro: puede ser coincidencia, o ambos pueden ser consecuencia de una tercera causa común."

pasos:
  - "Es el error más común al analizar relaciones causales en historia."

explicacion: |
  Verdadero: es el principio central para no confundir cercanía
  temporal con causalidad real.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["correlacion_vs_causalidad", "evidencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Establecer una relación de causa-consecuencia requiere evidencia de un mecanismo real que conecte ambos hechos, no sólo cercanía temporal."

pasos:
  - "Es el criterio central para validar una relación causal, más allá de que los hechos ocurran cerca en el tiempo."

explicacion: |
  Verdadero: es el requisito central para afirmar una relación
  causal de forma rigurosa.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["correlacion_vs_causalidad", "detectar_falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Confundir correlación con causalidad en historia es el mismo tipo de error de razonamiento que la generalización apresurada ya vista en `../../lengua/detectar-falacias/`, aplicado ahora al análisis histórico."

pasos:
  - "Ver `../../lengua/detectar-falacias/`: es la conexión directa entre este tema y esa falacia ya estudiada."

explicacion: |
  Verdadero: es la relación entre este error histórico y su
  equivalente ya conocido en Lengua.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["consecuencias_corto_plazo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una consecuencia a corto plazo es un efecto que se ve poco después del hecho causante."

pasos:
  - "Es una de las dos categorías de consecuencia según el tiempo que tardan en manifestarse."

explicacion: |
  Verdadero: es la definición de consecuencia a corto plazo.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["consecuencias_largo_plazo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una consecuencia a largo plazo se manifiesta años o décadas después, y a veces es más importante que los efectos inmediatos, aunque menos evidente en el momento."

pasos:
  - "Es la otra categoría de consecuencia según el tiempo que tardan en manifestarse."

explicacion: |
  Verdadero: es la definición de consecuencia a largo plazo.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["cadenas_causales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las cadenas causales no terminan en un solo eslabón: la consecuencia de un hecho puede convertirse en la causa de otro hecho posterior."

pasos:
  - "Analizar historia a menudo implica seguir estas cadenas varios pasos hacia adelante o hacia atrás."

explicacion: |
  Verdadero: es el concepto de cadena causal, más allá de una
  relación causa-consecuencia aislada.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causas_inmediatas", "causas_profundas", "practica"]

variables:
  ejemplos: ["la firma de un tratado que desencadenó directamente una guerra", "décadas de crisis económica y descontento social que venían acumulándose antes de una revolución"]
  tipos: ["causa inmediata", "causa profunda"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["causa inmediata", "causa profunda"]

enunciado: "\"{ejemplos[idx]}\" es un ejemplo de..."

pasos:
  - "El hecho puntual que dispara directamente es inmediata; las condiciones de fondo acumuladas son profundas."

explicacion: |
  Distinguir causa inmediata de causa profunda en un ejemplo concreto
  es la aplicación central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["causas_profundas", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un mismo hecho histórico puede tener varias causas profundas al mismo tiempo (económicas, sociales, políticas), no sólo una."

pasos:
  - "Es un anticipo del concepto de multicausalidad, tema más adelante en la cadena."

explicacion: |
  Verdadero: es coherente con la idea de que rara vez hay una única
  causa detrás de un hecho histórico importante.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["consecuencias_corto_plazo", "consecuencias_largo_plazo", "practica"]

variables:
  consecuencias: ["la caída inmediata de un gobierno tras un golpe de Estado", "un cambio profundo en las instituciones políticas de un país, visible recién décadas después"]
  tipos: ["consecuencia a corto plazo", "consecuencia a largo plazo"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["consecuencia a corto plazo", "consecuencia a largo plazo"]

enunciado: "\"{consecuencias[idx]}\" es un ejemplo de..."

pasos:
  - "El efecto inmediato es corto plazo; el efecto que tarda décadas en verse es largo plazo."

explicacion: |
  Distinguir consecuencias según su horizonte temporal es una
  aplicación práctica central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["correlacion_vs_causalidad", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Si dos hechos ocurrieron el mismo año en distintas partes del mundo sin ninguna relación demostrable entre ellos, se puede afirmar con seguridad que uno causó al otro."

pasos:
  - "Sin evidencia de un mecanismo real que los conecte, la simultaneidad no es suficiente para afirmar causalidad."

explicacion: |
  Falso: la coincidencia temporal sola no es evidencia suficiente de
  causalidad, hace falta un mecanismo demostrable.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Analizar causas y consecuencias requiere un marco temporal claro (periodización), para poder ubicar en qué momento ocurrió cada hecho relacionado."

pasos:
  - "Ver `../periodizacion-historica/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito de la cadena.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["big_six"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Causa y consecuencia es uno de los 6 conceptos del marco \"Big Six\" (Seixas & Morton) de pensamiento histórico, una referencia internacional en didáctica de la Historia."

pasos:
  - "Es el contexto académico de este tema, mencionado en la teoría."

explicacion: |
  Verdadero: es el marco teórico de referencia que organiza este
  tema y varios de los siguientes en la cadena.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "intermedio"
  tags: ["causa_y_consecuencia", "metodo"]

enunciado: "Ordená los pasos para analizar las causas de un hecho histórico."
tipo: ordenar
opciones_explicitas:
  - "Identificar la causa inmediata (el hecho puntual que disparó el acontecimiento)"
  - "Buscar las causas profundas o estructurales que venían gestándose desde antes"
  - "Revisar si hay evidencia real de conexión entre esas causas y la consecuencia, no sólo cercanía temporal"
  - "Distinguir consecuencias a corto y largo plazo del hecho analizado"
respuesta_orden: ["Identificar la causa inmediata (el hecho puntual que disparó el acontecimiento)", "Buscar las causas profundas o estructurales que venían gestándose desde antes", "Revisar si hay evidencia real de conexión entre esas causas y la consecuencia, no sólo cercanía temporal", "Distinguir consecuencias a corto y largo plazo del hecho analizado"]
explicacion: |
  El proceso va de la causa más visible (inmediata) a las más
  profundas, verificando evidencia real y considerando el horizonte
  temporal de las consecuencias.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Comparar qué cambió y qué se mantuvo en el tiempo (cambio y continuidad) presupone ya poder identificar qué causó cada cambio."

pasos:
  - "Ver `../cambio-y-continuidad/`: es el tema siguiente de la cadena de pensamiento histórico."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

```
metadata:
  materia: "historia"
  tema: "causa_y_consecuencia"
  nivel: "avanzado"
  tags: ["causa_y_consecuencia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al analizar cualquier hecho histórico o actual, conviene distinguir la causa inmediata de las causas profundas, y evitar afirmar una relación causal sin evidencia de un mecanismo real, sólo por cercanía temporal."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al análisis de
  cualquier hecho histórico, pasado o presente.
```

## Sección: semana-tragica-1919 (27 preguntas)

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["semana_tragica", "contexto", "primera_guerra"]

variables:
  anio_fin_guerra: 1918

respuesta: "1918"
tipo: input

enunciado: "La Primera Guerra Mundial concluyó en el año {anio_fin_guerra}, momento en que los precios de los alimentos comenzaron a caer drásticamente, afectando la economía argentina."

explicacion: |
  El fin de la Primera Guerra Mundial en 1918 provocó un colapso en la demanda de productos agropecuarios, lo que llevó a los empresarios a recortar salarios para mantener sus ganancias.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["huelga", "fora", "vasena"]

variables:
  lugar_huelga: "los Talleres Metalúrgicos Vasena"

respuesta: "los Talleres Metalúrgicos Vasena"
tipo: input

enunciado: "El conflicto tuvo como detonante inicial una huelga en {lugar_huelga}, en el barrio de Nueva Pompeya."

explicacion: |
  La huelga comenzó en los Talleres Metalúrgicos Vasena; la represión policial al piquete y el entierro de las víctimas escalaron hacia una huelga general convocada por la FORA en Buenos Aires.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["liga_patriota", "extrema_derecha"]

variables:
  tipo_organizacion: "extrema derecha"

respuesta: "extrema derecha"
tipo: input

enunciado: "La Liga Patriótica Argentina fue una organización de {tipo_organizacion} compuesta por sectores conservadores, nacionalistas y militares."

explicacion: |
  La Liga Patriótica actuó como una milicia privada de extrema derecha para defender los intereses de las clases dominantes contra el movimiento obrero.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["yrigoyen", "partido_radical", "intervencion"]

variables:
  presidente: "Hipólito Yrigoyen"

respuesta: "Hipólito Yrigoyen"
tipo: input

enunciado: "El presidente de la Nación durante la Semana Trágica, {presidente}, del Partido Radical, intervino militarmente para restablecer el orden."

explicacion: |
  Aunque Yrigoyen tenía apoyo popular, su gobierno se alió con las fuerzas conservadoras para reprimir la huelga, priorizando la estabilidad sobre los derechos laborales.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["ideologias", "anarquismo", "socialismo"]

variables:
  ideas_influyentes: "anarquistas y socialistas"

respuesta: "anarquistas y socialistas"
tipo: input

enunciado: "El movimiento obrero argentino en 1919 estaba influenciado principalmente por las ideas {ideas_influyentes}."

explicacion: |
  La FORA y otros grupos obreros estaban fuertemente influenciados por corrientes anarquistas y socialistas que buscaban la justicia social.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["liga_patriota", "objetivo"]

variables:
  objetivo_liga: "defender la civilización"

respuesta: "defender la civilización"
tipo: input

enunciado: "La Liga Patriótica justificaba sus acciones violentas como una necesidad para {objetivo_liga} contra el 'peligro rojo'."

explicacion: |
  La retórica de la Liga se basaba en la defensa de la 'civilización' occidental contra lo que percibían como una amenaza bolchevique o roja.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["cronologia", "fechas"]

variables:
  inicio: 7
  fin: 13

respuesta: "7 y 13"
tipo: input

enunciado: "La Semana Trágica ocurrió entre el día {inicio} y el día {fin} de enero de 1919."

explicacion: |
  El conflicto violento se extendió durante una semana, específicamente del 7 al 13 de enero de 1919.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["liga_patriota", "milicia"]

variables:
  caracterizacion: "milicia privada"

respuesta: "milicia privada"
tipo: input

enunciado: "La Liga Patriótica actuaba efectivamente como una {caracterizacion} encargada de atacar a huelguistas e inmigrantes."

explicacion: |
  No era un cuerpo oficial del estado, sino una organización civil de extrema derecha que operaba como una milicia paramilitar.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["clases_sociales", "trabajadores"]

variables:
  sector: "trabajadores"

respuesta: "trabajadores"
tipo: input

enunciado: "Los recortes salariales y el aumento de la jornada laboral afectaron directamente a los {sector}."

explicacion: |
  La crisis económica post-guerra llevó a los empresarios a trasladar la carga a los trabajadores mediante peores condiciones laborales.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["burguesia", "socialismo"]

variables:
  amenaza_percebida: "socialismo"

respuesta: "socialismo"
tipo: input

enunciado: "La burguesía conservadora temía principalmente la expansión del {amenaza_percebida} durante este período."

explicacion: |
  El auge del movimiento obrero organizado era visto por las élites como una amenaza directa al orden capitalista y social establecido.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["huelga", "conflicto"]

variables:
  tipo_conflicto: "disputa económica"

respuesta: "disputa económica"
tipo: input

enunciado: "Inicialmente, la huelga en los Talleres Vasena fue una {tipo_conflicto}, pero pronto se transformó en un choque político más amplio."

explicacion: |
  El conflicto comenzó por demandas salariales y de condiciones laborales, escalando a una crisis política nacional.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["liga_patriota", "violencia", "inmigrantes"]

variables:
  grupo_objetivo: "inmigrantes"

respuesta: "inmigrantes"
tipo: input

enunciado: "Los grupos de choque de la Liga Patriótica atacaban no solo a huelguistas, sino también a {grupo_objetivo} y sospechosos de izquierda."

explicacion: |
  La xenofobia fue un componente clave de la Liga, que asociaba a los inmigrantes europeos con el anarquismo y el bolchevismo.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["represión", "ejecuciones"]

variables:
  metodo: "ejecuciones extrajudiciales"

respuesta: "ejecuciones extrajudiciales"
tipo: input

enunciado: "La violencia de la Liga Patriótica incluyó detenciones arbitrarias, torturas y {metodo} contra los trabajadores."

explicacion: |
  La represión fue brutal y muchas víctimas fueron asesinadas sin proceso legal alguno por parte de los grupos de choque.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["migración", "boom_económico"]

variables:
  causa_migracion: "boom económico"

respuesta: "boom económico"
tipo: input

enunciado: "Durante la Primera Guerra Mundial, la demanda de productos argentinos generó un {causa_migracion} que atrajo a miles de personas a las ciudades."

explicacion: |
  La guerra creó una coyuntura económica favorable para Argentina, impulsando la urbanización y el crecimiento de la clase obrera.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["fora", "organización"]

variables:
  rol_fora: "organizar"

respuesta: "organizar"
tipo: input

enunciado: "La FORA tuvo un rol central en {rol_fora} la huelga general que desencadenó la Semana Trágica."

explicacion: |
  La Federación Obrera Regional Argentina fue la principal entidad que coordinó la acción obrera durante este período.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["gobierno", "justificación"]

variables:
  justificacion: "restablecer el orden"

respuesta: "restablecer el orden"
tipo: input

enunciado: "El gobierno de Yrigoyen justificó la intervención militar como necesaria para {justificacion} en la capital."

explicacion: |
  La narrativa oficial presentaba la represión como una medida de emergencia para proteger la seguridad pública.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["economía", "precios"]

variables:
  tendencia_precios: "cayeron drásticamente"

respuesta: "cayeron drásticamente"
tipo: input

enunciado: "Al terminar la guerra, los precios de los alimentos {tendencia_precios}, desestabilizando la economía."

explicacion: |
  El fin de la demanda bélica provocó una caída abrupta en los ingresos del sector agroexportador, clave para la economía argentina.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["liga_patriota", "composición"]

variables:
  miembros: "conservadores, nacionalistas y militares"

respuesta: "conservadores, nacionalistas y militares"
tipo: input

enunciado: "La Liga Patriótica estaba compuesta por {miembros} que buscaban proteger sus privilegios."

explicacion: |
  Fue una coalición heterogénea de élites que unieron sus fuerzas contra el movimiento obrero.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["burguesía", "objetivo"]

variables:
  objetivo_burguesia: "mantener sus ganancias"

respuesta: "mantener sus ganancias"
tipo: input

enunciado: "Los empresarios recortaron salarios para {objetivo_burguesia} frente a la caída de los precios de exportación."

explicacion: |
  La lógica empresarial priorizó la rentabilidad sobre las condiciones de vida de los trabajadores.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "avanzado"
  tags: ["conflicto", "visión_sociedad"]

variables:
  naturaleza: "choque frontal"

respuesta: "choque frontal"
tipo: input

enunciado: "La huelga general representó un {naturaleza} entre dos visiones de sociedad: la burguesía y el proletariado."

explicacion: |
  Fue más que una disputa laboral; fue un enfrentamiento ideológico y político por la dirección del país.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["liga_patriota", "víctimas"]

variables:
  victimas: "huelguistas"

respuesta: "huelguistas"
tipo: input

enunciado: "Los grupos de choque de la Liga Patriótica recorrían las calles atacando principalmente a {victimas}."

explicacion: |
  Los huelguistas eran el blanco principal de la violencia paramilitar organizada por la Liga.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["derechos", "consecuencias"]

variables:
  resultado_derechos: "restringidos"

respuesta: "restringidos"
tipo: input

enunciado: "Como consecuencia de la Semana Trágica, los derechos laborales fueron fuertemente {resultado_derechos} por la represión estatal y paramilitar."

explicacion: |
  La victoria de la Liga y la intervención militar marcaron un retroceso significativo para la organización obrera.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["cronologia", "huelga"]

variables:
  mes: "enero"

respuesta: "enero"
tipo: input

enunciado: "La huelga general que derivó en la Semana Trágica ocurrió en el mes de {mes} de 1919."

explicacion: |
  Los eventos centrales ocurrieron en la primera quincena de enero de 1919.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["ideología", "anticomunismo"]

variables:
  concepto: "peligro rojo"

respuesta: "peligro rojo"
tipo: input

enunciado: "La Liga Patriótica utilizaba el concepto del {concepto} para justificar su violencia contra la izquierda."

explicacion: |
  El "peligro rojo" era una retórica que asociaba cualquier protesta social con el comunismo bolchevique ruso.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["geografía", "buenos_aires"]

variables:
  ciudad: "Buenos Aires"

respuesta: "Buenos Aires"
tipo: input

enunciado: "La violencia de la Semana Trágica se concentró principalmente en la ciudad de {ciudad}."

explicacion: |
  Aunque hubo ecos en otras ciudades, el epicentro del conflicto fue la capital federal.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "avanzado"
  tags: ["yrigoyen", "legado", "partido_radical"]

variables:
  ruptura: "ruptura con la base popular"

respuesta: "ruptura con la base popular"
tipo: input

enunciado: "La represión de la Semana Trágica marcó una {ruptura} para el gobierno de Yrigoyen, alienando a sus antiguos aliados obreros."

explicacion: |
  Este evento es visto como un punto de inflexión donde el radicalismo se alejó de sus orígenes más progresistas.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["contexto", "primera_guerra_mundial"]

variables:
  guerra_previa: "Primera Guerra Mundial"

respuesta: "Primera Guerra Mundial"
tipo: input

enunciado: "El contexto inmediato previo a la crisis de 1919 fue el fin de la {guerra_previa} (1914-1918)."

explicacion: |
  La Primera Guerra Mundial fue el catalizador económico y social que llevó a la crisis de 1919.
```

