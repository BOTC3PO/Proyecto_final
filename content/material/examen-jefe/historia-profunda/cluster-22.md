# Examen jefe — Maestro de la Historia Profunda

> Logro #120. Te pasaste el parcial dominando desde el terrorismo de estado hasta la formación de la Tierra. Pool agregado de los `cuestionario.md` ya validados de sus 4 temas. **98 preguntas totales** en 4/4 secciones.

---

## Sección: terrorismo-de-estado-argentina (23 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["conceptos", "derechos_humanos"]

respuesta: "uso sistemático de la violencia ilegal por parte del Estado contra su población"
tipo: completar
respuestas_validas: ["uso sistemático de la violencia ilegal por parte del Estado contra su población"]

enunciado: "El terrorismo de Estado se define como el ___."

explicacion: |
  El terrorismo de Estado ocurre cuando las instituciones que deben proteger a los ciudadanos utilizan su poder y recursos para ejercer violencia, desapariciones y tortura de manera sistemática contra la población.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "metodos"]

respuesta: "desapariciones forzadas"
tipo: mc
opciones_explicitas: ["desapariciones forzadas", "voto universal", "libertad de prensa", "debate parlamentario"]

enunciado: "Durante la última dictadura militar en Argentina (1976-1983), una de las prácticas sistemáticas de represión fue la:"

explicacion: |
  La desaparición forzada de personas fue una de las modalidades principales de la represión estatal, donde el Estado negaba la detención de la persona, impidiendo el acceso a la justicia y a la protección legal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["proceso", "metodologia"]

variables:
  fase_idx: uno_de([0, 1, 2])
  secuencia: [["Captura/Secuestro", "Detención clandestina", "Eliminación/Desaparición"], ["Inteligencia/Espionaje", "Operativo de captura", "Tortura/Interrogatorio"], ["Identificación de objetivos", "Secuestro", "Expropiación de bienes/hijos"]]

respuesta: secuencia[fase_idx
tipo: ordenar
opciones_explicitas: ["Captura/Secuestro", "Detención clandestina", "Eliminación/Desaparición", "Inteligencia/Espionaje", "Operativo de captura", "Tortura/Interrogatorio", "Identificación de objetivos", "Secuestro", "Expropiación de bienes/hijos"]

enunciado: "Ordene la secuencia típica de un operativo de represión sistemática en un centro clandestino de detención (basado en el escenario asignado):"

pasos:
  - "Observe el orden lógico de los eventos presentados en las opciones."

explicacion: |
  El terrorismo de Estado operaba mediante ciclos de violencia que comenzaban con la identificación y captura, seguían con la detención en lugares no registrados y culminaban en la eliminación de la persona para evitar la responsabilidad legal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["robo_identidad", "economía"]

respuesta: "falso"
tipo: completar
enunciado: "¿El terrorismo de Estado en Argentina se limitó únicamente a la represión física de opositores políticos, sin afectar el patrimonio de las víctimas o la identidad de sus descendientes?"

explicacion: |
  Falso. El terrorismo de Estado también incluyó el robo de bienes, la expropiación de empresas y el robo sistemático de bebés (hijos de desaparecidas), lo cual constituye un crimen de lesa humanidad adicional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["derecho", "ilegalidad"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: [["La tortura aplicada en centros clandestinos"], ["El asesinato de una persona sin juicio previo"]]
  resultado: ["ilegal", "ilegal"]

respuesta: resultado[caso_idx
tipo: mc
opciones_explicitas: ["legal", "ilegal"]

enunciado: "En el contexto del terrorismo de Estado, {escenario[caso_idx]} es una acción considerada:"

explicacion: |
  Cualquier acción que rompa el debido proceso y utilice la violencia estatal fuera del marco de la ley para suprimir derechos fundamentales es una acción ilegal y un crimen de lesa humanidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["dictadura", "derechos_humanos"]

tipo: mc
opciones_explicitas: ["El exilio voluntario", "La detención ilegal con destino desconocido", "La migración por motivos económicos", "La persecución política en el extranjero"]

enunciado: "Durante la última dictadura militar en Argentina, la práctica de 'desaparecer' personas se definía como:"

explicacion: |
  La desaparición forzada fue una práctica sistemática donde el Estado secuestraba a ciudadanos, los mantenía en centros clandestinos de detención y ocultaba su paradero, impidiendo cualquier tipo de proceso legal o reconocimiento de su detención.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["madres_de_plaza_de_mayo", "resistencia"]

tipo: completar
respuestas_validas: ["Plaza de Mayo"]

enunciado: "Ante la falta de información sobre el paradero de sus hijos, las Madres comenzaron a realizar sus históricas marchas en la _______."

explicacion: |
  Las Madres de Plaza de Mayo se convirtieron en un símbolo mundial de resistencia al exigir la aparición con vida de sus hijos frente a la Casa Rosada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["vuelos_de_la_muerte", "exterminio"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["vuelos de la muerte", "vuelos de la muerte"],
    ["centros clandestinos", "centros clandestinos"]
  ]

tipo: mc
opciones_explicitas: ["Vuelos de la muerte", "Traslados legales", "Exilio forzado", "Centros clandestinos"]

enunciado: "Una de las formas sistemáticas de ocultar los asesinatos de los desaparecidos fue el uso de los {escenarios[escenario_idx][0]}."

explicacion: |
  Los 'vuelos de la muerte' consistían en transportar a los detenidos en aviones hacia el mar para arrojarlos al agua, evitando así dejar rastros físicos de los cuerpos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["procedimiento", "represion"]

tipo: ordenar
opciones_explicitas: ["Secuestro/Detención", "Traslado a un CCD", "Interrogatorio y tortura", "Eliminación/Desaparición"]

enunciado: "Ordene cronológicamente el procedimiento sistemático aplicado a los desaparecidos durante la represión:"

explicacion: |
  El ciclo comenzaba con el secuestro en la vía pública o domicilio, seguido del traslado a Centros Clandestinos de Detención (CCD), donde se aplicaba la tortura para obtener información, culminando en la eliminación del individuo para asegurar el secreto del crimen.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "derechos_humanos", "argentina"]

opciones_explicitas: ["ESMA", "El Campito", "La Perla", "Todos los anteriores"]

respuesta: "Todos los anteriores"
tipo: mc

enunciado: "Durante la última dictadura militar en Argentina, se utilizaron diversos Centros Clandestinos de Detención (CCD). ¿Cuál de los siguientes fue un centro de detención conocido?"

explicacion: |
  Tanto la ESMA (Escuela de Mecánica de la Armada) como El Campito y La Perla fueron centros fundamentales donde se practicó la detención ilegal y la tortura.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["dictadura", "derechos_humanos"]

opciones_explicitas: ["legal", "clandestino"]

respuesta: "clandestino"
tipo: mc

enunciado: "Los centros utilizados para la detención, tortura y desaparición de personas durante la dictadura militar se denominaban centros de detención ___."

explicacion: |
  Se llamaban "clandestinos" porque operaban fuera de todo marco legal, sin orden judicial y ocultando la existencia de los detenidos.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_oficial_estado"
  nivel: "avanzado"
  tags: ["derechos_humanos", "memoria"]

variables:
  escenario_idx: uno_de([0, 1])

enunciado: "En el contexto de la represión, el proceso de 'desaparición' implicaba que la persona era trasladada a un centro donde su paradero era ___."

pasos:
  - "La víctima era secuestrada por fuerzas de seguridad."
  - "Se le negaba el acceso a la justicia y a su familia."

respuesta: [["desconocido", "negado"], ["oculto", "negado"]][escenario_idx[0]
tipo: completar
respuestas_validas: [["desconocido", "negado"], ["oculto", "negado"]]

explicacion: |
  La sistemática de la desaparición forzada buscaba que el Estado pudiera negar la responsabilidad sobre el destino de las víctimas.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "instituciones"]

opciones_explicitas: ["El Estado", "Las Fuerzas Armadas", "La Justicia", "El Congreso"]

respuesta: "Las Fuerzas Armadas"
tipo: mc

enunciado: "¿Qué institución ejerció el control operativo y la gestión de la represión mediante los centros clandestinos de detención?"

explicacion: |
  Si bien el Estado como estructura permitió el terrorismo, la ejecución directa en los CCD fue responsabilidad de las Fuerzas Armadas y de Seguridad.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["derechos_humanos", "memoria"]

opciones_explicitas: ["Secuestro", "Detención en CCD", "Desaparición/Eliminación"]

respuesta: ["Secuestro", "Detención en CCD", "Desaparición/Eliminación"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas típicas de una operación de represión sistemática aplicada por la dictadura:"

explicacion: |
  El ciclo comenzaba con el secuestro en la vía pública o domicilios, seguido por la internación en un centro clandestino y culminaba con la desaparición definitiva de la persona.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["derechos_humanos", "madres", "abuelas"]

tipo: mc
opciones_explicitas: ["Madres de Plaza de Mayo", "Abuelas de Plaza de Mayo", "Hijas de Plaza de Mayo", "Asamblea Permanente por los Derechos Humanos"]

enunciado: "El organismo constituido por mujeres que comenzaron a marchar en la Plaza de Mayo para exigir la aparición con vida de sus hijos desaparecidos se denomina:"

respuesta: "Madres de Plaza de Mayo"

explicacion: |
  Las Madres de Plaza de Mayo surgieron en 1977 como una respuesta directa a la desaparición sistemática de personas durante la última dictadura militar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["abuelas", "identidad", "derechos_humanos"]

tipo: completar
respuestas_validas: ["restitución", "identidad"]

enunciado: "El objetivo principal de las Abuelas de Plaza de Mayo es la búsqueda y la ___ de los niños, niñas y adolescentes que fueron apropiados ilegalmente durante la dictadura, garantizando su derecho a la ___."

respuesta: ["restitución", "identidad"]

explicacion: |
  Las Abuelas se enfocan específicamente en la búsqueda de los nietos desaparecidos, trabajando con el Banco Nacional de Datos Genéticos para restituir su identidad original.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["historia", "cronologia", "derechos_humanos"]

tipo: ordenar
opciones_explicitas: ["Surgimiento de las Madres de Plaza de Mayo", "Dictadura Militar (Proceso de Reorganización Nacional)", "Juicio a las Juntas"]

enunciado: "Ordene cronológicamente los siguientes hitos relacionados con la lucha por los derechos humanos en Argentina:"

respuesta: ["Dictadura Militar (Proceso de Reorganización Nacional)", "Surgimiento de las Madres de Plaza de Mayo", "Juicio a las Juntas"]

explicacion: |
  La dictadura (1976-1983) fue el contexto de la represión; las Madres surgieron durante el proceso (1977) y el Juicio a las Juntas fue el hito judicial clave tras el retorno a la democracia (1985).
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["terminologia", "derechos_humanos"]

tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "El término 'desaparecido' se utiliza para describir a las personas que fueron secuestradas por fuerzas de seguridad o grupos paramilitares y de las cuales no se tiene rastro, siendo una práctica sistemática del terrorismo de Estado."

respuesta: verdadero

explicacion: |
  La desaparición forzada es un crimen de lesa humanidad que se caracteriza por la falta de información sobre el paradero de la víctima y la participación del Estado en el secuestro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "derechos_humanos"]

variables:
  datos: [["Un grupo de civiles es secuestrado por fuerzas de seguridad sin orden judicial y llevado a un lugar clandestino.", "secuestro_exprés"], ["Se prohíbe la actividad política y se censuran libros en las escuelas.", "censura_cultural"], ["Se establece un control estricto sobre el movimiento de personas mediante el uso de documentos de identidad.", "control_documental"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["secuestro_exprés", "censura_cultural", "control_documental"]

enunciado: "Durante la última dictadura militar en Argentina, se implementaron diversas tácticas de control social. Si ocurre lo siguiente: {datos[idx][0]}, ¿cómo se denomina esta práctica?"

explicacion: |
  El escenario descrito corresponde a la práctica de detención clandestina o secuestro exprés, una característica central del terrorismo de Estado para evitar la visibilidad de la detención.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["derechos_humanos", "identidad"]

variables:
  datos: [["Un hijo de una desaparecida es entregado a una familia de militares para ser criado con una identidad falsa.", "robo_identidad"], ["Un niño es separado de sus padres pero permanece en un hogar estatal.", "desarraigo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["robo_identidad", "desarraigo"]

enunciado: "En el contexto de la apropiación de menores, cuando ___ ocurre, se está vulnerando el derecho a la identidad."

pasos:
  - "Identificar la acción realizada sobre el menor."
  - "Relacionar la acción con el concepto de robo de identidad."

explicacion: |
  El robo de identidad consistió en la apropiación sistemática de niños nacidos en cautiverio o hijos de desaparecidos, entregándolos a familias vinculadas al régimen.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["instituciones", "dictadura"]

variables:
  datos: [["El Estado utiliza centros clandestinos de detención para torturar.", "centros_clandestinos"], ["El Estado utiliza medios de comunicación para difundir propaganda.", "propaganda_mediatica"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["centros_clandestinos", "propaganda_mediatica"]

enunciado: "Si el Estado utiliza {datos[idx][0]} para llevar a cabo la represión sistemática, estamos ante una práctica de..."

explicacion: |
  Los Centros Clandestinos de Detención (CCD) fueron espacios donde se ejecutó la represión sistemática fuera de la legalidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["secuencia", "represion"]

variables:
  secuencia: ["Desaparición de la persona", "Detención en centro clandestino", "Eliminación sistemática"]

respuesta: secuencia
tipo: ordenar
opciones_explicitas: ["Desaparición de la persona", "Detención en centro clandestino", "Eliminación sistemática"]

enunciado: "Ordene cronológicamente las etapas típicas de un operativo de represión sistemática durante el terrorismo de Estado:"

explicacion: |
  El ciclo de la represión solía comenzar con el secuestro (desaparición), seguido por la permanencia en un centro clandestino y, finalmente, la ejecución o desaparición definitiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["terminologia", "memoria"]

variables:
  datos: [["El término se aplica a quienes fueron detenidos sin dejar rastro legal.", "desaparecido"], ["El término se aplica a quienes huyeron del país.", "exiliado"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["desaparecido", "exiliado"]

enunciado: "En Argentina, una persona que ha sido secuestrada por fuerzas de seguridad y cuyo paradero es desconocido por el Estado se denomina ___."

explicacion: |
  La figura del 'desaparecido' es el eje central del terrorismo de Estado, caracterizado por la negación de la existencia del detenido por parte de las autoridades.
```

## Sección: tiempo-geologico-eones-eras-periodos (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["jerarquia", "escala_temporal"]

tipo: mc
opciones_explicitas: ["Eón > Era > Período > Época", "Época > Período > Era > Eón", "Eón > Período > Era > Época", "Era > Eón > Época > Período"]

enunciado: "La escala de tiempo geológico es una estructura jerárquica. ¿Cuál de las siguientes secuencias representa correctamente el orden de mayor a menor duración?"

explicacion: |
  La escala geológica se organiza de lo macro a lo micro: los Eones son los bloques más grandes, que se dividen en Eras, estas en Períodos y estos en Épocas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Eón", "Era", "Período", "Época"]
respuesta: ["Eón", "Era", "Período", "Época"]

enunciado: "Ordena las siguientes unidades de tiempo geológico de la más extensa (mayor duración) a la más breve (menor duración)."

explicacion: |
  La jerarquía correcta es: Eón (la unidad más grande), seguido de la Era, el Período y finalmente la Época.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["jerarquia", "terminologia"]

variables:
  es_era: uno_de([true, false])

tipo: mc
opciones_explicitas: ["Período", "Época", "Eón", "Era"]

enunciado: "Si nos encontramos dentro de una Era geológica, la unidad de tiempo inmediatamente más pequeña que ella es un ___."

explicacion: |
  La estructura es: Eón $\rightarrow$ Era $\rightarrow$ Período $\rightarrow$ Época. Por lo tanto, después de una Era sigue un Período.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["completar", "jerarquia"]

tipo: completar
respuestas_validas: ["Período", "Época"]
respuesta: "Período"

enunciado: "En la jerarquía temporal, un Eón se divide en Eras, y una Era se divide en ___."

explicacion: |
  La división directa de una Era es el Período.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["logica", "jerarquia"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "Considerando la jerarquía geológica, un Período es una subdivisión de una Época. ¿Es esto correcto?"

explicacion: |
  Es falso. Es al revés: una Época es una subdivisión de un Período. El Período es la unidad mayor.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["precambrico", "eones", "geologia"]

respuesta: "88%"
tipo: completar
respuestas_validas: ["88%", "ochenta y ocho por ciento"]

enunciado: "El Precámbrico, que abarca desde la formación de la Tierra hasta la aparición de organismos complejos, representa aproximadamente el ___ de la historia geológica del planeta."

explicacion: |
  El Precámbrico es un término que agrupa los eones Hadeico, Arcaico y Proterozoico. Aunque constituye la gran mayoría del tiempo terrestre, su registro es escaso debido a la falta de fósiles de partes duras (conchas, huesos) en esa época.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["eones", "precambrico"]

variables:
  escenario: uno_de([
    ["Hadeico", "formación de la Tierra y bombardeo intenso"],
    ["Arcaico", "aparición de las primeras células procariontes"],
    ["Proterozoico", "oxigenación de la atmósfera y células eucariotas"]
  ])

respuesta: escenario[0][1
tipo: mc
opciones_explicitas: ["formación de la Tierra y bombardeo intenso", "aparición de las primeras células procariontes", "oxigenación de la atmósfera y células eucariotas"]

enunciado: "Si nos situamos en el eón {escenario[0][0]}, ¿cuál fue el evento característico de ese periodo?"

explicacion: |
  El eón {escenario[0][0]} se caracteriza por {escenario[0][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["orden_cronologico", "eones"]

respuesta: ["Hadeico", "Arcaico", "Proterozoico"]
tipo: ordenar
opciones_explicitas: ["Hadeico", "Arcaico", "Proterozoico"]

enunciado: "Ordena cronológicamente, desde el más antiguo al más reciente, los tres eones que conforman el Precámbrico:"

explicacion: |
  La secuencia correcta es Hadeico (formación), seguido del Arcaico (vida unicelular) y finalmente el Proterozoico (mayor complejidad y oxígeno).
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["paleontologia", "precambrico"]

respuesta: "fósiles complejos"
tipo: completar
respuestas_validas: ["fósiles complejos", "restos de organismos complejos"]

enunciado: "Una de las razones por las cuales el Precámbrico suele ser menos detallado en los libros de texto es la escasez de ___."

explicacion: |
  Durante la mayor parte del Precámbrico, la vida estaba compuesta por organismos microscópicos o blandos que no dejaban huellas fósiles fácilmente preservables, a diferencia de la era Paleozoica en adelante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["oxigeno", "proterozoico"]

variables:
  evento: uno_de([
    ["Proterozoico", "Oxigenación de la atmósfera"],
    ["Arcaico", "Aparición de la fotosíntesis oxigénica"],
    ["Hadeico", "Condensación de la corteza terrestre"]
  ])

respuesta: evento[0][1
tipo: mc
opciones_explicitas: ["Oxigenación de la atmósfera", "Aparición de la fotosíntesis oxigénica", "Condensación de la corteza terrestre"]

enunciado: "El evento de {evento[0][1]} es el hito fundamental que define al eón {evento[0][0]}."

explicacion: |
  Aunque la fotosíntesis comenzó antes, la acumulación masiva de oxígeno (Gran Evento de Oxidación) es el rasgo distintivo del Proterozoico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["extincion", "permo_trias"]

respuesta: "extincion_masiva"
tipo: "mc"
opciones_explicitas: ["cambio_climatico", "extincion_masiva", "formacion_continentes", "tectonica_de_placas"]

enunciado: "Los límites entre eras y periodos geológicos suelen estar marcados por eventos de ___ que provocan cambios drásticos en el registro fósil."

explicacion: |
  La mayoría de los límites geológicos importantes (como el del Pérmico-Triásico) se definen por la desaparición repentina de grandes grupos de organismos en el registro fósil.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["cretacico_paleogeno", "asteroide"]

variables:
  escenario: uno_de([["Cretácico-Paleógeno", "impacto de asteroide"], ["Pérmico-Triásico", "erupciones masivas"]])

respuesta: escenario[1
tipo: "completar"
respuestas_validas: ["impacto de asteroide", "erupciones masivas"]

enunciado: "El límite entre el periodo {escenario[0]} y el Paleógeno se asocia comúnmente con un ___."

explicacion: |
  El impacto del asteroide Chicxulub causó la extinción masiva que terminó con la era de los dinosaurios al final del Cretácico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["ordenar", "era_mesozoica"]

respuesta: ["Triásico", "Jurásico", "Cretácico"]
tipo: "ordenar"
opciones_explicitas: ["Triásico", "Jurásico", "Cretácico", "Pérmico"]

enunciado: "Ordena cronológicamente los periodos que conforman la Era Mesozoica, desde el más antiguo al más reciente."

explicacion: |
  La Era Mesozoica se divide en los periodos Triásico, Jurásico y Cretácico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["permo_trias", "extincion"]

respuesta: "Triásico"
tipo: "completar"
respuestas_validas: ["Triásico", "Jurásico", "Cretácico"]

enunciado: "La mayor extinción masiva de la historia de la Tierra ocurrió al final del periodo Pérmico, marcando el inicio del periodo ___."

explicacion: |
  La extinción del Pérmico-Triásico es conocida como 'La Gran Mortandad' y dio inicio a la era de los dinosaurios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["geologia", "fosil"]

respuesta: 100
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Si un geólogo encuentra un cambio abrupto en la abundancia de fósiles en un estrato, este cambio suele indicar que se está cruzando un límite de un periodo o era. ¿Qué porcentaje (0-100) de estos cambios se deben a eventos de extinción masiva según la geología histórica? (Responde con un número entero aproximado)."

explicacion: |
  Aunque no es un valor matemático exacto de la naturaleza, en el contexto de la geología histórica, la mayoría de los límites de periodos se definen por estos eventos de extinción. (Nota: Esta es una pregunta de validación de concepto sobre la importancia de la extinción).
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["paleozoico", "fanerozoico"]

tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "El eón Fanerozoico se divide en tres eras principales. ¿Cuál es la primera era de este eón, caracterizada por la 'explosión de vida' en los mares?"

respuesta: "Paleozoico"

explicacion: |
  El Fanerozoico comenzó hace unos 541 millones de años con la era Paleozoica, donde la vida diversificó su complejidad de forma masiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["mesozoico", "dinosaurios"]

tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "La era conocida como la 'Edad de los Reptiles' o de los dinosaurios es el ________."

respuesta: "Mesozoico"

explicacion: |
  El Mesozoico es la era intermedia del Fanerozoico, donde predominaron los dinosaurios y los primeros mamíferos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["orden_cronologico", "fanerozoico"]

tipo: ordenar
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "Ordena cronológicamente las tres eras del eón Fanerozoico, desde la más antigua a la más reciente:"

respuesta: ["Paleozoico", "Mesozoico", "Cenozoico"]

explicacion: |
  La secuencia correcta es Paleozoico (vida antigua), Mesozoico (vida media) y Cenozoico (vida reciente).
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["cenozoico", "actualidad"]

tipo: completar
respuestas_validas: ["Cenozoico"]

enunciado: "La era geológica en la que vivimos actualmente, marcada por la dominancia de los mamíferos, es el ________."

respuesta: "Cenozoico"

explicacion: |
  El Cenozoico comenzó tras la extinción masiva al final del Mesozoico y es la era actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["fanerozoico", "clasificacion"]

variables:
  escenario: uno_de([0, 1])
  datos: [["Mesozoico", "Paleozoico"], ["Cenozoico", "Mesozoico"]]

tipo: mc
opciones_explicitas: ["Mesozoico", "Paleozoico", "Cenozoico"]

enunciado: "Si estamos hablando de la era que precede al Cenozoico, nos referimos al {datos[escenario][0]}."

respuesta: {datos[escenario][1]}

explicacion: |
  El Cenozoico es la era actual; la era inmediatamente anterior fue el Mesozoico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["paleontologia", "cambrian"]

variables:
  datos: [["Explosión Cámbrica", "Paleozoico"], ["Extinción masiva del Permo-Triásico", "Mesozoico"], ["Aparición de los mamíferos", "Cenozoico"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "El evento conocido como la {datos[idx][0]} marcó un hito evolutivo fundamental. ¿A qué era geológica pertenece este evento?"

explicacion: |
  El evento {datos[idx][0]} ocurrió durante la era {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["dinosaurios", "mesozoico"]

variables:
  datos: [["dominio de los dinosaurios", "Mesozoico"], ["aparición de las plantas terrestres", "Paleozoico"], ["formación de la Luna", "Hadeano"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Mesozoico", "Paleozoico", "Hadeano"]

enunciado: "El periodo caracterizado por el {datos[idx][0]} se sitúa en la era ___."

explicacion: |
  La era correspondiente al {datos[idx][0]} es la era {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["cronologia", "geologia"]

variables:
  secuencia: [["Paleozoico", "Mesozoico", "Cenozoico"], ["Mesozoico", "Cenozoico", "Paleozoico"], ["Cenozoico", "Paleozoico", "Mesozoico"]]
  idx: uno_de([0, 1, 2])

respuesta: secuencia[idx
tipo: ordenar
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "Ordena las siguientes eras desde la más antigua a la más reciente según la cronología geológica estándar."

explicacion: |
  El orden correcto de las eras es: Paleozoico, Mesozoico y Cenozoico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["precambrico", "vida"]

variables:
  datos: [["aparición de las primeras células procariotas", "Precámbrico"], ["aparición de los primeros animales complejos", "Paleozoico"], ["extinción de los dinosaurios", "Mesozoico"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Precámbrico", "Paleozoico", "Mesozoico"]

enunciado: "La {datos[idx][0]} tuvo lugar durante el eón ___."

explicacion: |
  La {datos[idx][0]} es un evento característico del eón {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["mamiferos", "cenozoico"]

variables:
  datos: [["dominio de los mamíferos", "Cenozoico"], ["dominio de los reptiles", "Mesozoico"], ["dominio de los peces", "Paleozoico"]]
  idx: uno_de([0, 1, 2])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
opciones_explicitas: [verdadero, falso]

enunciado: "El {datos[idx][0]} es un evento que define la era ___."

explicacion: |
  La era correcta es la {datos[idx][1]}.
```

## Sección: tierra-primitiva-diferenciacion (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["acreción", "planetesimales"]

tipo: mc
opciones_explicitas: ["Acreción de planetesimales", "Colisión con un planeta gigante", "Condensación de gases estelares", "Fusión de un cometa"]

enunciado: "La Tierra primitiva se formó hace aproximadamente 4600 millones de años mediante un proceso llamado ___."

respuesta: "Acreción de planetesimales"

explicacion: |
  La Tierra se formó por la acumulación gravitatoria de cuerpos menores (planetesimales) en el disco protoplanetario.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["calor", "estado_fisico"]

tipo: completar
tolerancia_abs: 100000000

enunciado: "Debido a los impactos constantes y el calor radiactivo, la Tierra primitiva se encontraba en un estado casi ___ (en millones de años, valor aproximado de la edad de formación)."

respuesta: 4600000000

explicacion: |
  El calor generado por el bombardeo de planetesimales y la desintegración de isótopos radiactivos mantuvo el manto y el núcleo en un estado fundido o casi fundido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["calor_radiactivo", "impactos"]

tipo: mc
opciones_explicitas: ["Calor por impactos y calor radiactivo", "Calor por mareas lunares", "Calor por actividad volcánica superficial", "Calor por radiación solar directa"]

enunciado: "¿Cuáles fueron las dos fuentes principales de calor que mantuvieron la Tierra primitiva en un estado fundido?"

respuesta: "Calor por impactos y calor radiactivo"

explicacion: |
  La energía cinética de los impactos de planetesimales se transformó en calor, sumado al calor liberado por la desintegración de elementos radiactivos como el Al-26 y el U-235.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["diferenciación", "núcleo", "manto"]

tipo: ordenar
opciones_explicitas: ["Fusión de la roca", "Separación de elementos densos (hierro)", "Formación del núcleo y manto", "Estabilización de la corteza"]

enunciado: "Ordena cronológicamente los procesos que llevaron a la diferenciación planetaria:"

respuesta: ["Fusión de la roca", "Separación de elementos densos (hierro)", "Formación del núcleo y manto", "Estabilización de la corteza"]

explicacion: |
  Primero la roca debe fundirse; luego los elementos pesados como el hierro descienden al centro, formando el núcleo, mientras los ligeros forman el manto, culminando con la solidificación de la corteza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["elementos", "densidad"]

variables:
  idx: uno_de([0, 1])
  datos: [["hierro", "núcleo"], ["silicatos", "manto"]]

tipo: completar
respuestas_validas: ["hierro", "silicatos"]
respuesta: datos[idx][1

enunciado: "Durante la diferenciación, los elementos más densos como el ___ migraron hacia el centro, mientras que los elementos más ligeros como los ___ formaron las capas superiores."

pasos:
  - "Identificar el elemento que baja por densidad"
  - "Identificar el material que queda en la superficie"

explicacion: |
  La gravedad separa los materiales por densidad: el hierro (denso) va al núcleo y los silicatos (menos densos) al manto y corteza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["diferenciacion", "nucleo", "densidad"]

respuesta: "hierro y níquel"
tipo: completar
respuestas_validas: ["hierro y níquel", "hierro, níquel"]

enunciado: "Durante la etapa de océano de magma, los elementos más densos como el ___ se hundieron hacia el centro para formar el núcleo."

explicacion: |
  Debido a la gravedad, los materiales con mayor densidad (metales pesados) migraron hacia el centro del planeta, proceso conocido como diferenciación por gravedad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["capas", "silicatos", "manto"]

respuesta: "silicatos"
tipo: mc
opciones_explicitas: ["silicatos", "hierro", "níquel", "magnesio"]

enunciado: "¿Qué tipo de materiales predominan en las capas externas (manto y corteza) debido a su baja densidad en comparación con los metales?"

explicacion: |
  Los silicatos son minerales menos densos que los metales, por lo que flotaron hacia la superficie durante la diferenciación planetaria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["proceso", "magma", "gravedad"]

respuesta: ["Estado fundido", "Diferenciación por densidad", "Formación de capas"]
tipo: ordenar
opciones_explicitas: ["Estado fundido", "Diferenciación por densidad", "Formación de capas"]

enunciado: "Ordena cronológicamente los eventos que permitieron la estructura actual de la Tierra:"

explicacion: |
  Primero la Tierra debe estar fundida (oceano de magma), luego la gravedad actúa separando materiales por peso, resultando en la estructura de capas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["densidad", "correlacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["núcleo", "alta densidad", "hierro"], ["corteza", "baja densidad", "silicatos"]]

respuesta: datos[escenario_idx][2
tipo: mc
opciones_explicitas: ["hierro", "silicatos", "magnesio", "aluminio"]

enunciado: "Si analizamos la {datos[escenario_idx][0]}, que se caracteriza por tener una {datos[escenario_idx][1]}, el elemento principal que la compone es el ___."

explicacion: |
  La posición de un material en la Tierra primitiva dependía directamente de su densidad: lo más denso abajo, lo menos denso arriba.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["estado_fisico", "condicion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es verdadero o falso que la diferenciación planetaria requiere que la Tierra se encuentre en un estado fundido o parcialmente fundido para que los materiales se muevan por gravedad?"

explicacion: |
  Sin un estado líquido o viscoso (magma), los materiales sólidos no podrían migrar a través de la masa planetaria para separarse por densidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["geologia", "densidad"]

tipo: mc
opciones_explicitas: ["Núcleo", "Manto", "Corteza"]

enunciado: "Durante la diferenciación planetaria, los materiales más densos se hundieron hacia el centro de la Tierra, formando la capa más interna conocida como la ___."

respuesta: "Núcleo"

explicacion: |
  La gravedad hizo que los elementos más pesados (como el hierro y el níquel) migraran hacia el centro, formando el núcleo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["densidad", "orden"]

tipo: ordenar
opciones_explicitas: ["Corteza", "Manto", "Núcleo"]

enunciado: "Ordena las capas de la Tierra desde la menos densa (superficie) hasta la más densa (centro):"

respuesta: ["Corteza", "Manto", "Núcleo"]

explicacion: |
  La diferenciación por densidad organiza la Tierra en capas: la corteza es la más ligera, seguida por el manto y finalmente el núcleo en el centro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["densidad", "manto"]

variables:
  idx: uno_de([0, 1])

enunciado: "Considerando la estructura terrestre, la densidad del {datos[idx][0]} es {datos[idx][1]} que la densidad de la corteza."

variables:
  datos: [["manto", "mayor"], ["núcleo", "mayor"]]
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

respuesta: datos[idx][1

explicacion: |
  El {datos[idx][0]} se encuentra debajo de la corteza y posee una densidad {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["geologia", "capas"]

tipo: completar
respuestas_validas: ["manto"]

respuesta: "manto"

enunciado: "La capa intermedia de la Tierra, situada entre la corteza y el núcleo, se denomina ___."

explicacion: |
  El manto es la capa intermedia que separa la corteza externa del núcleo central.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["calculo", "densidad"]

variables:
  datos: [[5.5, 13.0], [3.3, 5.5], [2.7, 3.3]]
  idx: uno_de([0, 1, 2])

enunciado: "Si la densidad de la capa A es {datos[idx][0]} g/cm³ y la densidad de la capa B es {datos[idx][1]} g/cm³, la diferencia de densidad entre la capa más densa y la menos densa de este par es de ___ g/cm³."

tipo: completar
respuesta: abs(datos[idx][1] - datos[idx][0])
tolerancia_abs: 0.01

explicacion: |
  La diferencia se calcula restando la densidad menor de la mayor. En este caso, el resultado es {abs(datos[idx][1] - datos[idx][0])}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["astronomia", "teoria", "luna"]

respuesta: "Theia"
tipo: mc
opciones_explicitas: ["Theia", "Gaia", "Venus", "Mars"]

enunciado: "Según la hipótesis del Gran Impacto, la Luna se formó tras la colisión de la Tierra primitiva con un protoplaneta llamado _______."

explicacion: |
  La hipótesis del Gran Impacto sugiere que un objeto del tamaño de Marte, denominado Theia, colisionó con la Tierra, dejando un anillo de escombros que eventualmente se consolidó para formar la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["fisica", "colision", "teoria"]

variables:
  escenario: uno_de([
    ["un objeto masivo", "aumentó la rotación", "creó un disco de escombros"],
    ["un objeto pequeño", "no alteró la órbita", "no generó escombros"],
    ["un objeto gaseoso", "enfrió el núcleo", "disipó la atmósfera"]
  ])

respuesta: escenario[idx][1
tipo: completar
respuestas_validas: ["aumentó la rotación", "no alteró la órbita", "enfrió el núcleo"]
idx: uno_de([0, 1, 2])

enunciado: "En el escenario de una colisión con un objeto de gran masa, la energía cinética transferida _______."

explicacion: |
  Una colisión de tal magnitud no solo habría aportado masa, sino que habría transferido una cantidad enorme de energía angular, afectando la velocidad de rotación de la Tierra primitiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["quimica", "isótopos", "luna"]

respuesta: "muy similar"
tipo: mc
opciones_explicitas: ["muy similar", "completamente distinta", "mucho más densa", "sin hierro"]

enunciado: "Una de las pruebas de la hipótesis del Gran Impacto es que la composición isotópica de los silicatos lunares es _______ a la de la Tierra."

explicacion: |
  La similitud isotópica entre la Tierra y la Luna es un desafío para algunas versiones de la teoría, pero sugiere que la Luna se formó a partir de material que ya estaba mezclado con el manto terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["procesos", "secuencia", "formacion"]

respuesta: ["Colisión de Theia", "Formación de disco de escombros", "Acreción de la Luna"]
tipo: ordenar
opciones_explicitas: ["Colisión de Theia", "Formación de disco de escombros", "Acreción de la Luna"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la formación del sistema Tierra-Luna según la hipótesis del Gran Impacto:"

explicacion: |
  Primero ocurre el impacto, luego el material expulsado forma un anillo o disco alrededor de la Tierra, y finalmente la gravedad hace que ese material se agrupe para formar la Luna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["termica", "magma", "oceano"]

respuesta: 1200.0
tipo: completar
tolerancia_abs: 100.0

enunciado: "Si la energía del impacto fue suficiente para fundir gran parte del manto, la Tierra habría estado cubierta por un océano de magma. Si estimamos que la temperatura de fusión media fue de 1200 °C, ¿cuántos Kelvin (K) representa esto aproximadamente? (Usa la fórmula K = C + 273.15)"

pasos:
  - "Identificar la temperatura en Celsius: 1200"
  - "Sumar la constante de conversión: 1200 + 273.15"

explicacion: |
  La colisión habría generado temperaturas extremas, transformando la superficie terrestre en un océano de roca fundida (magma) durante un periodo prolongado.
```

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["diferenciacion", "densidad"]

variables:
  escenario: [[["hierro", "núcleo"], ["silicatos", "manto"], ["granito", "corteza"]], 0]
  idx: uno_de([0,1,2])
  dato: escenario[idx][0]
  resp: escenario[idx][1]

tipo: mc
opciones_explicitas: ["núcleo", "manto", "corteza"]

enunciado: "Durante la diferenciación planetaria, los elementos más densos como el {dato} se hundieron hacia el centro, formando la capa conocida como ___."

respuesta: resp

explicacion: |
  Los elementos más pesados (densos) como el hierro y el níquel migraron al centro debido a la gravedad, formando el núcleo.
```

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["composicion", "corteza"]

variables:
  escenario: [["silicatos ligeros", "corteza"], ["metales pesados", "núcleo"], ["magma denso", "manto"]]
  idx: uno_de([0,1,2])
  dato: escenario[idx][0]
  resp: escenario[idx][1]

tipo: completar
respuestas_validas: ["corteza", "núcleo", "manto"]

enunciado: "La capa más externa de la Tierra está compuesta principalmente por ___."

respuesta: resp

explicacion: |
  La corteza es la capa más superficial y está formada por materiales menos densos (silicatos) que flotaron sobre el manto.
```

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

tipo: ordenar
opciones_explicitas: ["Corteza", "Manto", "Núcleo"]
respuesta: ["Corteza", "Manto", "Núcleo"]

enunciado: "Ordena las capas de la Tierra desde la superficie hacia el centro del planeta:"

explicacion: |
  La estructura terrestre se organiza por densidad: la corteza es la más externa, seguida por el manto y finalmente el núcleo en el centro.
```

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["manto", "densidad"]

variables:
  escenario: [["materiales de densidad intermedia", "manto"], ["hierro puro", "núcleo"], ["rocas ligeras", "corteza"]]
  idx: uno_de([0,1,2])
  dato: escenario[idx][0]
  resp: escenario[idx][1]

tipo: mc
opciones_explicitas: ["manto", "núcleo", "corteza"]

enunciado: "La capa situada entre la corteza y el núcleo, compuesta por ___ , se denomina ___."

respuesta: resp

explicacion: |
  El manto está compuesto por materiales con una densidad intermedia, situándose debajo de la corteza.
```

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["nucleo", "densidad"]

variables:
  escenario: [["muy alta", "núcleo"], ["media", "manto"], ["baja", "corteza"]]
  idx: uno_de([0,1,2])
  dato: escenario[idx][0]
  resp: escenario[idx][1]

tipo: completar
tolerancia_abs: 0

enunciado: "Si la densidad de la corteza es baja y la del manto es media, la densidad del núcleo es ___."

respuesta: "muy alta"

explicacion: |
  Debido a la gravedad, los materiales con densidad muy alta (como el hierro) se acumularon en el centro del planeta.
```

## Sección: virreinato-y-comercio (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["reformas_borbonicas", "geopolitica"]

respuesta: "1776"
tipo: completar
respuestas_validas: ["1776"]

enunciado: "La creación del Virreinato del Río de la Plata ocurrió en el año ___."

explicacion: |
  Mediante las Reformas Borbónicas, la Corona española decidió crear este nuevo virreinato en 1776 para mejorar la administración y defensa del territorio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "defensa"]

opciones_explicitas: ["Controlar el comercio y mejorar la defensa", "Fomentar la independencia de las colonias", "Establecer una nueva religión", "Unificar la moneda con el Perú"]

respuesta: "Controlar el comercio y mejorar la defensa"
tipo: mc

enunciado: "¿Cuál fue una de las razones principales para la creación del Virreinato del Río de la Plata?"

explicacion: |
  La expansión portuguesa y el contrabando en el Atlántico obligaron a España a fortalecer la defensa y centralizar el control comercial en Buenos Aires.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["geografia_colonial"]

respuesta: "Buenos Aires"
tipo: mc
opciones_explicitas: ["Lima", "Potosí", "Buenos Aires", "Montevideo"]

enunciado: "Con la creación del nuevo virreinato, la ciudad de ___ fue designada como la capital administrativa."

explicacion: |
  Buenos Aires desplazó la importancia política que antes tenía el eje andino, convirtiéndose en el centro administrativo y comercial del nuevo territorio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["geopolitica", "administracion"]

variables:
  escenario: uno_de([["Perú", "Río de la Plata"], ["Río de la Plata", "Perú"]])

respuesta: tabla_respuestas[escenario][1

tipo: completar
respuestas_validas: ["Perú", "Río de la Plata"]

enunciado: "Antes de 1776, el territorio que hoy comprende gran parte del Cono Sur pertenecía al Virreinato del ___."

pasos:
  - "Identificar la dependencia administrativa previa a la reforma borbónica."

explicacion: |
  Antes de la división, la mayor parte de la administración colonial estaba centralizada en el Virreinato del Perú, con Lima como sede principal.

tabla_respuestas: [["Perú", "Perú"], ["Río de la Plata", "Río de la Plata"]]
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "contrabando"]

opciones_explicitas: ["Aumento del contrabando", "Centralización del comercio en Buenos Aires", "Fin de la ruta de la plata", "Aislamiento de la región"]

respuesta: "Centralización del comercio en Buenos Aires"
tipo: mc

enunciado: "La creación del virreinato permitió la ___."

explicacion: |
  Al tener una administración propia, el comercio legal se canalizó a través de Buenos Aires, restando importancia a las rutas que pasaban por el Alto Perú.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["monopolio", "españa", "comercio"]

respuesta: "monopolio"
tipo: completar
respuestas_validas: ["monopolio"]

enunciado: "El sistema mediante el cual las colonias americanas solo podían comerciar con la metrópoli española se denominaba sistema de ___."

explicacion: |
  El monopolio comercial obligaba a las colonias a comprar y vender exclusivamente a España, limitando el crecimiento económico local.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["puertos", "comercio", "españa"]

variables:
  idx: uno_de([0, 1])
  escenario: [[0, "Sevilla", "Cádiz"], [1, "Sevilla", "Barcelona"]]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Sevilla", "Cádiz", "Barcelona", "Valencia"]

enunciado: "Durante gran parte del periodo virreinal, el comercio con las Indias se centralizaba en el puerto de {escenario[idx][0]}, pero la autoridad principal de la Casa de Contratación residía en {escenario[idx][1]}."

explicacion: |
  Aunque Sevilla fue el puerto principal inicialmente, la Casa de Contratación se estableció en Sevilla, pero el control administrativo y el flujo comercial se concentraba en estas ciudades clave.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["contrabando", "descontento", "economía"]

respuesta: "contrabando"
tipo: mc
opciones_explicitas: ["contrabando", "libre comercio", "proteccionismo", "mercantilismo"]

enunciado: "Debido a las altas restricciones y los altos costos del monopolio, surgió una práctica ilegal muy común en los puertos americanos conocida como ___."

explicacion: |
  El contrabando permitió la entrada de productos de otras potencias (como Inglaterra o Portugal) de manera ilegal, evadiendo los impuestos españoles.
```

```
metadata:
  materia: "historia_profucha"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["buenos_aires", "contrabando", "descontento"]

variables:
  idx: uno_de([0, 1])
  datos: [[0, "contrabando", "descontento"], [1, "comercio legal", "prosperidad"]]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["contrabando", "descontento", "prosperidad", "estabilidad"]

enunciado: "En el Virreinato del Río de la Plata, la imposición del monopolio español sobre la región de Buenos Aires generó un aumento del {datos[idx][0]} y un profundo {datos[idx][1]} entre los comerciantes locales."

explicacion: |
  Buenos Aires, al ser una zona de paso para el comercio ilegal, sufrió las restricciones del monopolio, lo que alimentó el malestar que más tarde impulsaría los movimientos de independencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["flujo", "comercio", "ruta"]

respuesta: ["España", "Puerto autorizado en América", "Mercado local"]
tipo: ordenar
opciones_explicitas: ["España", "Puerto autorizado en América", "Mercado local"]

enunciado: "Ordena el flujo legal de las mercancías dentro del sistema de monopolio español, desde su origen hasta el consumidor final en la colonia:"

pasos:
  - "La metrópoli envía el producto."
  - "El producto llega al puerto legal establecido."
  - "El producto se distribuye en la región."

explicacion: |
  El sistema estaba diseñado para que el flujo fuera estrictamente controlado: Metrópoli -> Puerto autorizado -> Consumidor colonial.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "reformas_borbonicas", "virreinato"]

tipo: mc
opciones_explicitas: ["Eliminó por completo el monopolio español", "Amplió el número de puertos autorizados", "Prohibió el comercio con Inglaterra", "Estableció el sistema de flotas y galeones"]

enunciado: "El Reglamento de Libre Comercio de 1778 tuvo como objetivo principal..."

explicacion: |
  El reglamento no eliminó el monopolio, sino que flexibilizó el sistema permitiendo que más puertos (como Buenos Aires) participaran en el comercio transatlántico, aunque manteniendo el control de la metrópoli.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["buenos_aires", "puertos", "comercio"]

variables:
  escenario: uno_de([
    ["puerto de Cádiz", "puerto de Buenos Aires"],
    ["comercio restringido", "comercio ampliado"]
  ])

tipo: completar
respuestas_validas: ["puerto de Buenos Aires"]

enunciado: "Gracias a las reformas borbonicas, el ___ obtuvo un rol protagónico como salida de productos hacia el Atlántico."

explicacion: |
  La apertura de nuevos puertos allowed que Buenos Aires creciera económicamente al dejar de depender exclusivamente del sistema de flotas hacia un solo puerto en España.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["monopolio", "reformas"]

tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "¿El Reglamento de Libre Comercio de 1778 significó la desaparición total del monopolio comercial español en América?"

explicacion: |
  Falso. El sistema de monopolio persistió, solo se expandió la red de puertos y rutas permitidas; el control de la Corona sobre el comercio seguía siendo la norma.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["procesos", "reformas_borbonicas"]

tipo: ordenar
opciones_explicitas: ["Monopolio de flotas y galeones", "Reglamento de Libre Comercio", "Apertura de puertos de Buenos Aires"]

enunciado: "Ordene cronológicamente la evolución del sistema comercial en el Virreinato del Río de la Plata:"

explicacion: |
  Primero existía el monopolio estricto de flotas; luego el Reglamento de 1778 permitió el libre comercio entre puertos españoles; y finalmente esto consolidó a Buenos Aires como puerto principal.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["economía", "impuestos"]

variables:
  valor_impuesto: uno_de([
    ["aumento", "disminución"]
  ])

tipo: completar
tolerancia_abs: 0

enunciado: "La implementación de nuevos puertos y la mayor actividad comercial trajeron un ___ en la recaudación de aduanas para la Corona."

pasos:
  - "Analizar el impacto de la mayor circulación de mercancías en los puertos autorizados."
  - "Relacionar el volumen de carga con la recaudación fiscal."

explicacion: |
  Al haber más barcos y más puertos operando legalmente, el volumen de mercancías aumentó, lo que derivó en un aumento de la recaudación de impuestos (alcabala y derechos de puerto).
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["monopolio", "espana", "comercio"]

respuesta: "monopolio"
tipo: completar
respuestas_validas: ["monopolio"]

enunciado: "El sistema impuesto por la corona española que obligaba a las colonias a comerciar exclusivamente con la metrópoli se denominaba ________."

explicacion: |
  El monopolio comercial impedía que Buenos Aires comerciara con otras potencias (como Gran Bretaña), limitando el crecimiento de la élite criolla.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["puerto", "aduana", "impuestos"]

variables:
  escenario: uno_de([["Monopolio Español", "Libre Comercio"], ["Restricción", "Apertura"]])
  respuesta_correcta: uno_de(["Monopolio Español", "Libre Comercio"])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Monopolio Español", "Libre Comercio"]

enunciado: "Si un comerciante de Buenos Aires desea vender sus productos directamente a Inglaterra sin pasar por España, se enfrenta a la prohibición del sistema de ________."

explicacion: |
  La imposición del monopolio generaba un enorme descontento en los comerciantes locales, quienes veían perder oportunidades de lucro con el libre comercio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["causas", "revolucion", "economia"]

respuesta: "Libre Comercio"
tipo: mc
opciones_explicitas: ["Libre Comercio", "Proteccionismo Español", "Aumento de la Minería", "Unión con Portugal"]

enunciado: "La principal demanda económica de la élite criolla de Buenos Aires que alimentó el descontento hacia el Virreinato fue la instauración del:"

explicacion: |
  La apertura de los puertos al libre comercio era la aspiración de los sectores comerciales que buscaban eliminar los altos costos y la exclusividad española.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["secuencia", "tensiones", "revolucion"]

respuesta: ["Monopolio", "Contrabando", "Libre Comercio", "Revolución"]
tipo: ordenar
opciones_explicitas: ["Monopolio", "Contrabando", "Libre Comercio", "Revolución"]

enunciado: "Ordena cronológicamente los factores y consecuencias que explican la crisis del sistema colonial en el Río de la Plata:"

explicacion: |
  El monopolio fomentó el contrabando como vía de escape; la presión por el libre comercio aumentó con las invasiones inglesas y la crisis de la corona, culminando en la Revolución.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["invasiones_inglesas", "comercio"]

variables:
  datos: [["Inglesas", "Libre Comercio"], ["Españolas", "Monopolio"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Libre Comercio", "Monopolio"]

enunciado: "Las invasiones inglesas demostraron la vulnerabilidad de España y abrieron la posibilidad de un sistema de ________ en el puerto de Buenos Aires."

explicacion: |
  Al ver que Gran Bretaña podía desembarcar en el Río de la Plata, los criollos comprendieron que el monopolio español ya no era sostenible ni seguro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["economía", "monopolio", "rebelión"]

variables:
  datos: [["El sistema de flotas y galeones permitía que solo ciertos puertos españoles comerciaran con América.", "monopolio"], ["El sistema de flotas y galeones prohibía el comercio con potencias extranjeras como Inglaterra.", "exclusivismo"], ["El sistema de flotas y galeones imponía altos aranceles a los productos locales.", "aranceles"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["monopolio", "exclusivismo", "aranceles"]

enunciado: "Una de las principales causas del descontento en el Río de la Plata fue el sistema de {datos[idx][0]}."

explicacion: |
  El control estricto de la metrópoli sobre los puertos y productos generó un gran malestar en las élites criollas que buscaban el libre comercio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["impuestos", "fisco", "revolución"]

variables:
  datos: [["La Alcabala", "Alcabala"], ["La Alcabala", "Aduana"], ["La Alcabala", "Avería"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Alcabala", "Aduana", "Avería"]

enunciado: "El aumento de la presión fiscal, especialmente sobre el impuesto de la ___, fue un detonante del descontento económico."

explicacion: |
  La Alcabala era un impuesto a las ventas que afectaba directamente el flujo comercial de las provincias del sur.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["contrabando", "comercio_ilegal"]

variables:
  datos: [["La prohibición de comerciar con Inglaterra", "prohibición"], ["La falta de productos manufacturados", "escasez"], ["La alta competencia de productos españoles", "competencia"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["prohibición", "escasez", "competencia"]

enunciado: "El descontento creció debido a la {datos[idx][0]} de productos extranjeros, lo que fomentó el contrabando."

explicacion: |
  Al no poder importar libremente de otras naciones, los comerciantes locales recurrían al comercio ilegal para abastecerse.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["orden", "procesos"]

respuesta: ["Reformas Borbónicas", "Aumento de la presión fiscal", "Expulsión de los Jesuitas", "Insurrecciones locales"]
tipo: ordenar
opciones_explicitas: ["Reformas Borbónicas", "Aumento de la presión fiscal", "Expulsión de los Jesuitas", "Insurrecciones locales"]

enunciado: "Ordene cronológicamente los factores que intensificaron el descontento económico en el Virreinato:"

explicacion: |
  Las reformas borbónicas buscaron mayor control y recaudación, lo que aumentó los impuestos y tensionó la estructura social y económica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["aduana", "puerto", "recaudación"]

variables:
  datos: [["Buenos Aires", "Buenos Aires"], ["Montevideo", "Montevideo"], ["Asunción", "Asunción"]]
  idx: uno_de([0, 1, 2])

respuestas_validas: [datos[idx][0]]
respuesta: datos[idx][0]
tipo: completar
tolerancia_abs: 0

enunciado: "El control de la aduana de {datos[idx][0]} fue un punto de conflicto clave por la recaudación de derechos de importación."

explicacion: |
  La disputa por los ingresos aduaneros entre Buenos Aires y otras regiones era un motor constante de tensión económica.
```
