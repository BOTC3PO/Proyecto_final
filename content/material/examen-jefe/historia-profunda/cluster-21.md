# Examen jefe — [PENDIENTE #701]

> Logro #701. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 9 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **221 preguntas totales** en 9/9 secciones.

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
respuestas_validas:
  - "uso sistemático de la violencia ilegal por parte del Estado contra su población"

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

tipo: ordenar
opciones_explicitas: ["Captura/Secuestro", "Detención clandestina", "Eliminación/Desaparición"]
respuesta_orden: ["Captura/Secuestro", "Detención clandestina", "Eliminación/Desaparición"]

enunciado: "Ordene la secuencia típica de un operativo de represión sistemática en un centro clandestino de detención:"

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

respuesta: resultado[caso_idx]
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
respuesta: "La detención ilegal con destino desconocido"

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
respuestas_validas:
  - "Plaza de Mayo"

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
  escenarios: [["vuelos de la muerte", "vuelos de la muerte"], ["centros clandestinos", "centros clandestinos"]]
  escenario: uno_de(escenarios)

tipo: mc
opciones_explicitas: ["Vuelos de la muerte", "Traslados legales", "Exilio forzado", "Centros clandestinos"]

enunciado: "Una de las formas sistemáticas de ocultar los asesinatos de los desaparecidos fue el uso de los {escenario[0]}."

respuesta: "Vuelos de la muerte"

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
respuesta_orden: ["Secuestro/Detención", "Traslado a un CCD", "Interrogatorio y tortura", "Eliminación/Desaparición"]
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

respuesta: [["desconocido", "negado"], ["oculto", "negado"]][escenario_idx][0]
tipo: completar
respuestas_validas:
  - ["desconocido", "negado"]
  - ["oculto", "negado"]

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

respuesta_orden: ["Secuestro", "Detención en CCD", "Desaparición/Eliminación"]
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
respuestas_validas:
  - "restitución"
  - "identidad"

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

respuesta_orden: ["Dictadura Militar (Proceso de Reorganización Nacional)", "Surgimiento de las Madres de Plaza de Mayo", "Juicio a las Juntas"]

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
respuestas_validas:
  - "robo_identidad"
  - "desarraigo"

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

respuesta_orden: secuencia
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

## Sección: historia-contemporanea-de-africa (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["particion", "berlin", "imperialismo"]
tipo: mc
enunciado: "La Conferencia de Berlín (1884-1885) estableció las reglas para la colonización europea del continente africano. ¿Cuál fue el principio fundamental acordado por las potencias coloniales para legitimar la ocupación territorial?"
opciones_explicitas:
  - "El principio de efectividad, que exigía ocupación real y administración de los territorios reclamados"
  - "El principio de libre comercio, que garantizaba el acceso igualitario a todos los ríos principales"
  - "El principio de mandato, que transfería la soberanía a la Sociedad de Naciones"
  - "El principio de autodeterminación, que permitía a los pueblos elegir su gobierno"
respuesta: "El principio de efectividad, que exigía ocupación real y administración de los territorios reclamados"
explicacion: "Las potencias europeas acordaron que cualquier reclamo territorial debía estar respaldado por una presencia física y administrativa real (\"efectividad\") para ser reconocido internacionalmente, lo que aceleró la carrera por el control del interior del continente."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["etiopia", "adwa", "resistencia"]
tipo: vf
enunciado: "En la batalla de Adua (1896), las fuerzas etíopes lideradas por el emperador Menelik II lograron una victoria decisiva contra Italia, garantizando la independencia de Etiopía durante la era colonial."
respuesta: verdadero
explicacion: "La victoria etíope en Adua impidió la colonización italiana de Etiopía, convirtiéndola en uno de los pocos estados africanos que mantuvieron su soberanía durante la partición de África, aunque luego fue ocupada brevemente por Mussolini en 1936."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["egipto", "urabi", "nacionalismo"]
tipo: completar
enunciado: "El movimiento nacionalista egipcio de finales del siglo XIX, liderado por el coronel Ahmed Urabi, se opuso principalmente a la influencia extranjera en la administración del país y a la deuda pública, buscando la modernización bajo control ____."
respuestas_validas:
  - "egipcio"
  - "local"
  - "nacional"
explicacion: "El movimiento Urabi (1879-1882) buscaba reducir el poder de la élite kediival y los asesores europeos, promoviendo un gobierno más nacionalista y moderno, aunque finalmente fue derrotado por la intervención militar británica."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["versalles", "mandato", "rwanda", "burundi"]
tipo: mc
enunciado: "Tras la Primera Guerra Mundial, los territorios de Ruanda y Urundi, anteriormente parte de la África Oriental Alemana, fueron asignados como mandato de la Sociedad de Naciones a Bélgica. ¿Qué implicación tuvo esto para la estructura étnica de la región?"
opciones_explicitas:
  - "Consolidaron las divisiones étnicas existentes al favorecer institucionalmente a la minoría tutsi sobre la mayoría hutu"
  - "Eliminaron las jerarquías étnicas preexistentes al promover una identidad nacional unificada"
  - "Fomentaron la integración económica entre tutsis y hutus para maximizar la producción agrícola"
  - "Dejaron la administración en manos de líderes locales hutus, debilitando el poder tutsi"
respuesta: "Consolidaron las divisiones étnicas existentes al favorecer institucionalmente a la minoría tutsi sobre la mayoría hutu"
explicacion: "Los belgas, siguiendo la política colonial alemana, institucionalizaron las distinciones étnicas, otorgando privilegios administrativos y educativos a los tutsis, lo que profundizó el resentimiento social que culminaría en el genocidio de 1994."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["boers", "sudafrica", "guerra"]
tipo: completar
enunciado: "La Segunda Guerra Bóer (1899-1902) fue un conflicto entre el Imperio Británico y los estados bóeres de Transvaal y el Estado Libre de Orange, principalmente por el control de los ____ en este último."
respuestas_validas:
  - "yacimientos de oro"
  - "minas de oro"
  - "recursos de oro"
explicacion: "El descubrimiento de grandes yacimientos de oro en el Witwatersrand (Transvaal) en 1886 fue el detonante económico principal del conflicto, ya que los bóeres temían perder su soberanía y cultura ante la afluencia de uitlanders (extranjeros británicos)."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["panaficanismo", "du Bois", "ideologia"]
tipo: mc
enunciado: "El primer Congreso Panafricano de 1900, organizado por Henry Sylvester Williams y con la participación de W.E.B. Du Bois, tuvo como objetivo principal:"
opciones_explicitas:
  - "Defender los derechos de los pueblos africanos y de la diáspora, y promover la autodeterminación política"
  - "Establecer un gobierno federal único para todo el continente africano inmediatamente"
  - "Negociar la independencia económica de las compañías comerciales europeas"
  - "Organizar la resistencia armada contra el colonialismo francés en el Magreb"
respuesta: "Defender los derechos de los pueblos africanos y de la diáspora, y promover la autodeterminación política"
explicacion: "El congreso buscó articular una postura política común contra el racismo colonial y abogar por la participación de los africanos en el gobierno de sus propios territorios, sentando las bases intelectuales del futuro movimiento de liberación."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["ghana", "independencia", "nkrumah"]
tipo: vf
enunciado: "Ghana fue el primer país de África al sur del Sahara en obtener la independencia de una potencia colonial europea, logrando su soberanía en 1957 bajo el liderazgo de Kwame Nkrumah."
respuesta: verdadero
explicacion: "La independencia de Ghana el 6 de marzo de 1957 inspiró movimientos de liberación en todo el continente y marcó el inicio de la descolonización masiva en África subsahariana."
```

```
metadata:
  materia: "historia-profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["suez", "nasser", "crisis"]
tipo: completar
enunciado: "La Crisis de Suez de 1956 estalló cuando el presidente egipcio Gamal Abdel Nasser nacionalizó el Canal de Suez, provocando una invasión militar coordinada por el Reino Unido, Francia y ____."
respuestas_validas:
  - "Israel"
  - "el estado de israel"
  - "israel"
explicacion: "La invasión israelí, seguida de intervenciones británicas y francesas, fue un fracaso diplomático y político para las potencias coloniales, demostrando el fin de su hegemonía en la región y el ascenso de la influencia de EE.UU. y la URSS."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["apartheid", "sudafrica", "legislacion"]
tipo: mc
enunciado: "¿Cuál fue la legislación clave de 1950 que formalizó y expandió el sistema de apartheid en Sudáfrica, separando físicamente a las comunidades por raza y regulando dónde podía vivir cada grupo?"
opciones_explicitas:
  - "La Ley de Grupos de Área"
  - "La Ley de Prohibición de Matrimonios Mixtos"
  - "La Ley de Infructuosos"
  - "La Ley de Bantustanes"
respuesta: "La Ley de Grupos de Área"
explicacion: "La Group Areas Act de 1950 fue fundamental para la planificación urbana segregada, forzando el desplazamiento forzado de millones de personas no blancas a zonas periféricas, institucionalizando la segregación espacial."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["argelia", "fln", "guerra"]
tipo: completar
enunciado: "La Guerra de Independencia de Argelia comenzó el 1 de noviembre de 1954 con una serie de ataques coordinados por el Frente de Liberación Nacional (FLN) contra el dominio colonial de _____."
respuestas_validas:
  - "francia"
  - "la francia"
  - "francesa"
explicacion: "Argelia fue considerada parte integrante de Francia (departamentos franceses), por lo que su independencia fue percibida como una pérdida territorial y una crisis política existencial para la República francesa, resultando en una guerra brutal."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["kenia", "mau mau", "rebeldia"]
tipo: mc
enunciado: "El movimiento Mau Mau en Kenia (1952-1960) fue una rebelión armada principalmente liderada por los kikuyu contra:"
opciones_explicitas:
  - "La confiscación de tierras fértiles por colonos blancos y el dominio colonial británico"
  - "La imposición de impuestos por las autoridades locales masai"
  - "La intervención de las compañías comerciales belgas en el norte"
  - "La falta de acceso a los recursos hídricos del lago Turkana"
respuesta: "La confiscación de tierras fértiles por colonos blancos y el dominio colonial británico"
explicacion: "La rebelión surgió como respuesta a la pérdida de tierras tradicionales de los kikuyu por los colonos europeos (el \"White Highlands\") y la opresión política, llevando a los británicos a declarar el estado de emergencia."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["bandung", "no alineados", "solidaridad"]
tipo: vf
enunciado: "La Conferencia de Bandung de 1955 fue un encuentro de países asiáticos y africanos que promovió la cooperación económica y cultural, el antiimperialismo y la no alineación con los bloques de la Guerra Fría."
respuesta: verdadero
explicacion: "Este evento fue crucial para la formación del Movimiento de Países No Alineados, dando voz política a las naciones recién independizadas y rechazando tanto el colonialismo occidental como la dominación soviética."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["nigeria", "independencia", "estructura"]
tipo: completar
enunciado: "Al independizarse de Gran Bretaña en 1960, Nigeria heredó una estructura política fragmentada por la combinación de tres regiones principales y una gran diversidad étnica, lo que generó tensiones que derivaron en la Guerra de ____."
respuestas_validas:
  - "bifra"
  - "bifra"
  - "bifra"
explicacion: "La Guerra de Biafra (1967-1970) fue la consecuencia más violenta de estas tensiones, cuando la región oriental, mayoritariamente igbo, intentó separarse como la República de Biafra."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["dependencia", "economia", "postcolonial"]
tipo: mc
enunciado: "Muchos intelectuales africanos de posindependencia, como Frantz Fanon, argumentaron que la independencia política no fue suficiente debido a la continuidad de la explotación económica. ¿Qué concepto describía esta relación?"
opciones_explicitas:
  - "La dependencia económica, donde las antiguas metrópolis mantuvieron el control sobre los recursos y mercados africanos"
  - "La globalización libre, que permitió a África integrarse equitativamente en el comercio mundial"
  - "El desarrollo autóctono, que eliminó la necesidad de asistencia externa"
  - "La soberanía financiera, que garantizaba la independencia de los bancos centrales africanos"
respuesta: "La dependencia económica, donde las antiguas metrópolis mantuvieron el control sobre los recursos y mercados africanos"
explicacion: "Fanon y otros teóricos criticaron que las nuevas élites africanas simplemente reemplazaron a los administradores coloniales sin cambiar la estructura económica extractiva, manteniendo al continente subordinado al capital occidental."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["biafra", "hambruna", "guerra civil"]
tipo: completar
enunciado: "Durante la Guerra de Biafra (1967-1970), el gobierno federal de Nigeria impuso un bloqueo que resultó en una hambruna masiva, estimándose que murieron aproximadamente ____ personas, la mayoría civiles."
respuestas_validas:
  - "un millon"
  - "un millón"
  - "1000000"
  - "1.000.000"
  - "entre 500 mil y un millon"
explicacion: "La cifra exacta es debatida, pero se estima entre 500.000 y un millón de muertes, principalmente por inanición y enfermedades, lo que convirtió a Biafra en un símbolo de la crisis humanitaria en la guerra civil."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["portugal", "claveles", "colonias"]
tipo: mc
enunciado: "La Revolución de los Claveles en Portugal (1974) tuvo un impacto directo en África al:"
opciones_explicitas:
  - "Provocar el colapso inmediato del régimen salazarista y la descolonización rápida de Angola, Mozambique y Guinea-Bisáu"
  - "Fortalecer el compromiso colonial portugués en el continente"
  - "Impulsar la intervención militar francesa en el Sahara"
  - "Establecer una alianza militar permanente con Sudáfrica"
respuesta: "Provocar el colapso inmediato del régimen salazarista y la descolonización rápida de Angola, Mozambique y Guinea-Bisáu"
explicacion: "El nuevo gobierno militar portugués, opuesto a las guerras coloniales costosas e impopulares, decidió poner fin al imperio colonial, lo que llevó a independencias rápidas pero también a conflictos civiles en las nuevas naciones."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["angola", "guerra fria", "mplt", "unita"]
tipo: completar
enunciado: "La guerra civil en Angola (1975-2002) enfrentó principalmente al gobierno MPLA, apoyado por la URSS y Cuba, contra el movimiento rebelde UNITA, liderado por Jonas Savimbi y apoyado por ____ y Sudáfrica."
respuestas_validas:
  - "eeuu"
  - "estados unidos"
  - "estados unidos de america"
  - "usa"
explicacion: "Angola se convirtió en un proxy de la Guerra Fría, donde el apoyo externo a ambos bandos prolongó el conflicto y causó una devastación económica y social profunda."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["zimbabwe", "rhodesia", "lanza"]
tipo: mc
enunciado: "La guerra de la Selva en Rodesia (hoy Zimbabwe) fue librada principalmente entre el gobierno minoritario blanco de Ian Smith y dos grupos rebeldes nacionalistas. ¿Cuál de los siguientes fue uno de los principales líderes rebeldes?"
opciones_explicitas:
  - "Robert Mugabe (ZANU)"
  - "Jomo Kenyatta (KANU)"
  - "Julius Nyerere (TANU)"
  - "Nelson Mandela (ANC)"
respuesta: "Robert Mugabe (ZANU)"
explicacion: "Robert Mugabe lideró el ZANU (Unión Nacional Africana de Zimbabwe), que junto con el ZAPU de Joshua Nkomo, luchó contra el régimen blanco de Rodesia hasta la independencia en 1980."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["sanciones", "apartheid", "onu"]
tipo: vf
enunciado: "La Asamblea General de las Naciones Unidas aprobó la Resolución 1761 en 1962, que recomendaba sanciones económicas y embargos de armas contra Sudáfrica debido a su política de apartheid."
respuesta: verdadero
explicacion: "Aunque las sanciones iniciales fueron limitadas y a menudo ignoradas por intereses comerciales occidentales, estas resoluciones marcararon el aislamiento diplomático progresivo del régimen sudafricano."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["tanzania", "arusha", "socialismo"]
tipo: completar
enunciado: "El presidente de Tanzania, Julius Nyerere, formuló la ____ (Declaración de Arusha) en 1967, que estableció el socialismo africano como base del desarrollo nacional, enfatizando la igualdad y la propiedad estatal."
respuestas_validas:
  - "declaracion de arusha"
  - "declaracion de arusha"
  - "declaracion de arusha"
explicacion: "Este documento definió la política de \"Ujamaa\" (familia), promoviendo la nacionalización de industrias clave y la colectivización agrícola, aunque con resultados económicos mixtos a largo plazo."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["ruanda", "genocidio", "1994"]
tipo: mc
enunciado: "El genocidio de Ruanda en 1994 fue cometido principalmente por milicias hutu extremistas contra la minoría tutsi y hutus moderados. ¿Qué evento desencadenó el inicio inmediato de la matanza masiva?"
opciones_explicitas:
  - "El derribamiento del avión del presidente Hutu Juvénal Habyarimana y del presidente hutu de Burundi Cyprien Ntaryamira"
  - "La invasión de las Fuerzas Patriótas Rwandesas (RPF) desde Uganda"
  - "La retirada de las tropas de la ONU"
  - "El anuncio de independencia de la región de Kivu"
respuesta: "El derribamiento del avión del presidente Hutu Juvénal Habyarimana y del presidente hutu de Burundi Cyprien Ntaryamira"
explicacion: "El asesinato de los presidentes el 6 de abril de 1994 fue la chispa que activó los planes preexistentes de exterminio, llevando a la matanza de aproximadamente 800.000 personas en 100 días."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["mozambique", "frelimo", "independencia"]
tipo: completar
enunciado: "Mozambique obtuvo su independencia de Portugal en 1975, siendo gobernada por el partido FRELIMO, que inicialmente estableció un estado de partido único con orientación _____."
respuestas_validas:
  - "marxista-leninista"
  - "marxista"
  - "socialista"
  - "comunista"
explicacion: "El FRELIMO, liderado por Samora Machel, adoptó el marxismo-leninismo como ideología oficial, lo que llevó a la guerra civil contra la resistencia RENAMO, apoyada por Rhodesia y luego Sudáfrica."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["liberia", "taylor", "guerra civil"]
tipo: mc
enunciado: "La Primera Guerra Civil de Liberia (1989-1997) fue iniciada por Charles Taylor contra el gobierno de Samuel Doe. ¿Qué factor económico fue central en la financiación de este conflicto?"
opciones_explicitas:
  - "El comercio ilegal de diamantes de sangre"
  - "La exportación de cacao controlada por multinacionales"
  - "La minería del cobre en el norte"
  - "La pesca industrial en la costa atlántica"
respuesta: "El comercio ilegal de diamantes de sangre"
explicacion: "Los rebeldes financiaron su guerra mediante la venta de diamantes extraídos de las minas controladas, un modelo que se repetiría en conflictos posteriores en Sierra Leona y la RDC."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["apartheid", "de klerk", "mandela"]
tipo: vf
enunciado: "Frederik Willem de Klerk, el último presidente blanco de Sudáfrica, inició las reformas que llevaron al fin del apartheid, liberando a Nelson Mandela y negociando la transición democrática."
respuesta: verdadero
explicacion: "De Klerk, aunque conservador, reconoció la insostenibilidad del apartheid y lideró el proceso de desmantelamiento legal y la transición hacia las primeras elecciones multirraciales de 1994."
```

```
metadata:
  materia: "historia-profunda"
  tema: "historia-contemporanea-de-africa"
  nivel: "avanzado"
  tags: ["congo", "kabila", "guerra"]
tipo: completar
enunciado: "La Primera Guerra del Congo (1996-1997) llevó a la caída del dictador Mobutu Sese Seko y al ascenso de Laurent-Désiré Kabila, pero fue impulsada principalmente por el temor de ____ a la presencia de hutus genocidas en la región."
respuestas_validas:
  - "ruanda"
  - "el gobierno de ruanda"
  - "rwanda"
explicacion: "Ruanda intervino militarmente en el este del Zaire (ahor RDC) para desarticular a las milicias hutu Interahamwe que habían cometido el genocidio en Ruanda, desestabilizando toda la región."
```

## Sección: guerra-de-malvinas (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["conflictos", "soberania", "1982"]

respuesta: "Argentina"
tipo: "mc"
opciones_explicitas: ["Reino Unido", "Argentina", "Chile", "Francia"]

enunciado: "La Guerra de Malvinas, iniciada en 1982, fue un conflicto armado entre ___ y el Reino Unido por la soberanía de las islas."

explicacion: |
  El conflicto se desató tras la invasión de las fuerzas argentinas a las islas, lo que provocó la respuesta militar británica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

variables:
  eventos: [["Invasión de las islas", "Fuerzas argentinas ocupan las islas"], ["Desembarco en San Carlos", "Fuerzas británicas desembarcan en la isla"], ["Rendición argentina", "Fuerzas argentinas se rinden en Puerto Argentino"]]

respuesta_orden: ["Invasión de las islas", "Desembarco en San Carlos", "Rendición argentina"]
tipo: "ordenar"
opciones_explicitas: ["Invasión de las islas", "Desembarco en San Carlos", "Rendición argentina"]

enunciado: "Ordene cronológicamente los eventos clave del conflicto:"

explicacion: |
  La secuencia lógica fue la ocupación inicial, el desembarco de la Task Force británica y la rendición final.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["naval", "tactic"]

respuesta: 200
tipo: "input"
tolerancia_abs: 1

enunciado: "El crucero ARA General Belgrano fue hundido por un submarino británico el 2 de mayo de 1982. Si, hipotéticamente, el submarino se encontraba a una profundidad de 200 metros y el crucero estaba en la superficie, ¿cuál sería la distancia vertical (en metros) entre ambos?"

pasos:
  - "Identificar la profundidad del submarino: 200m"
  - "Identificar la posición del crucero: 0m"
  - "Calcular la diferencia: 200 - 0 = 200"

explicacion: |
  La distancia vertical es la diferencia entre la superficie (0m) y la profundidad del submarino (200m).
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["diplomacia", "soberania"]

respuesta: "soberanía"
tipo: "completar"
respuestas_validas:
  - "soberanía"
  - "territorio"
  - "recursos"

enunciado: "El reclamo argentino por las islas se fundamenta en el principio de ___ territorial."

explicacion: |
  Argentina sostiene su derecho basado en la integridad territorial y la herencia de la corona española.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["politica", "dictadura"]

respuesta: "Junta Militar"
tipo: "mc"
opciones_explicitas: ["Gobierno Democrático", "Junta Militar", "Frente Popular", "Estado de Sitio"]

enunciado: "En 1982, la guerra se desarrolló bajo el mando de la ___ en Argentina."

explicacion: |
  El país se encontraba bajo un proceso de dictadura militar liderado por la Junta Militar en aquel entonces.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["soberania", "historia", "argentina"]

tipo: mc
opciones_explicitas: ["1833", "1982", "1776", "1810"]
respuesta: "1833"

enunciado: "El Reino Unido ocupó las Islas Malvinas de forma efectiva en el año ___."

explicacion: |
  La ocupación británica de las islas comenzó en 1833, interrumpiendo la presencia argentina en el archipiélago.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["derecho_internacional", "soberania"]

tipo: mc
opciones_explicitas: ["Territorial", "Económica", "Religiosa", "Cultural"]
respuesta: "Territorial"

enunciado: "El reclamo argentino sobre las Islas Malvinas es de carácter ___."

explicacion: |
  Argentina sostiene un reclamo de soberanía territorial basado en la herencia de los estados sucesores de España y la continuidad geográfica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "conflictos"]

variables:
  escenario: uno_de(["A", "B"])
  datos: [["1833", "Ocupación británica", "Inicio de la disputa"], ["1982", "Conflicto bélico", "Guerra de Malvinas"]]

tipo: ordenar
opciones_explicitas: ["1833", "1982", "Actualidad"]

enunciado: "Ordene cronológicamente los hitos clave de la disputa por las islas:"

explicacion: |
  La cronología marca desde la ocupación británica en 1833, pasando por el conflicto armado en 1982, hasta el reclamo diplomático actual.
respuesta_orden: ["1833", "1982", "Actualidad"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["derecho_internacional", "onu"]

tipo: completar
respuestas_validas:
  - "integridad"

enunciado: "Argentina sostiene que el principio de ___ territorial debe prevalecer sobre el principio de autodeterminación en el caso de las Malvinas."

explicacion: |
  Argentina argumenta que la población actual es una población implantada, por lo que el principio de autodeterminación no es aplicable, debiendo prevalecer la integridad territorial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["guerra", "1982"]

tipo: mc
opciones_explicitas: ["desembarco", "cese", "tratado", "armisticio"]
respuesta: "cese"

enunciado: "El conflicto bélico de 1982 se caracterizó por el cese de las tropas argentinas en las islas."

explicacion: |
  El conflicto terminó con el cese de las hostilidades y la rendición de las fuerzas argentinas en junio de 1982.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["dictadura", "contexto"]

respuesta: "dictadura militar"
tipo: completar
respuestas_validas:
  - "dictadura militar"

enunciado: "En 1982, Argentina se encontraba bajo el gobierno de una ___ que enfrentaba una profunda crisis interna."

explicacion: |
  La última dictadura militar argentina buscaba recuperar legitimidad mediante una acción bélica ante el desgaste social y económico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["legitimidad", "objetivos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[ "reforzar la legitimidad", "recuperar el apoyo popular" ], [ "distraer de la crisis", "ocultar el malestar social" ]]

respuesta: escenario[escenario_idx][1]
tipo: mc
opciones_explicitas: ["reforzar la legitimidad", "recuperar el apoyo popular", "ocultar el malestar social", "evitar la crisis económica"]

enunciado: "Uno de los objetivos estratégicos de la junta militar al ordenar el desembarco en las islas era ___."

explicacion: |
  La dictadura intentó utilizar el conflicto bélico para generar un sentimiento de unidad nacional y así recuperar el apoyo popular que había perdido por la crisis económica y la represión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "fechas"]

respuesta_orden: ["Crisis interna de la dictadura", "Orden de desembarco", "Inicio de la guerra"]
tipo: ordenar
opciones_explicitas: ["Crisis interna de la dictadura", "Orden de desembarco", "Inicio de la guerra"]

enunciado: "Ordene cronológicamente los hechos que llevaron al conflicto de 1982:"

explicacion: |
  Primero existió una crisis de legitimidad, luego la junta ordenó el desembarco en abril y finalmente se inició el conflicto armado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["causas", "crisis"]

respuesta: "crisis"
tipo: mc
opciones_explicitas: ["crisis", "estabilidad", "bonanza", "prosperidad"]

enunciado: "El contexto socio-político de Argentina en abril de 1982 se caracterizaba por una profunda ___."

explicacion: |
  La crisis política y económica de la dictadura fue un motor fundamental para la decisión de iniciar el conflicto en las islas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["junta_militar", "decisión"]

respuesta: "abril 1982"
tipo: completar
respuestas_validas:
  - "abril 1982"

enunciado: "La orden de desembarco en las islas Malvinas se produjo en ___."

explicacion: |
  El desembarco ocurrió en abril de 1982, marcando el inicio de la disputa armada con el Reino Unido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["politica", "dictadura", "democracia"]

respuesta: "aceleró"
tipo: completar
respuestas_validas:
  - "aceleró"
  - "acelerar"
  - "aceleración"

enunciado: "La derrota militar argentina en la guerra de Malvinas en junio de 1982 ___ el proceso de deslegitimación de la Junta Militar y ___ el retorno a la democracia en 1983."

explicacion: |
  La derrota bélica destruyó el prestigio de la Junta Militar, que había iniciado el conflicto para consolidar su poder, acelerando la crisis del régimen y la transición democrática.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["consecuencias", "dictadura"]

opciones_explicitas: ["Consolidación de la dictadura", "Crisis del régimen militar", "Guerra civil inmediata", "Alianza con el Reino Unido"]
respuesta: "Crisis del régimen militar"
tipo: mc

enunciado: "¿Cuál fue la principal consecuencia política interna de la derrota en Malvinas para el gobierno de facto?"

explicacion: |
  La pérdida de la guerra expuso la incapacidad de gestión de la dictadura, provocando una crisis de autoridad que hizo insostenible la continuidad del mando militar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["democracia", "elecciones"]

variables:
  datos: [["Dictadura", "Democracia"]]

respuesta: datos[0][1]
tipo: mc
opciones_explicitas: ["Dictadura", "Democracia"]

enunciado: "Tras la derrota en Malvinas, el proceso político argentino se desplazó desde el mando de una {datos[0][0]} hacia la restauración de la {datos[0][1]} en 1983."

pasos:
  - "Analizar el cambio de régimen tras la crisis de junio de 1982."
  - "Identificar el sistema de gobierno que se restauró en 1983."

explicacion: |
  La transición democrática fue impulsada por el vacío de poder y la presión social surgida tras el fracaso bélico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["orden", "cronologia"]

opciones_explicitas: ["Conflicto bélico", "Retorno a la democracia", "Inicio de la dictadura"]
respuesta_orden: ["Inicio de la dictadura", "Conflicto bélico", "Retorno a la democracia"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes hitos de la historia argentina reciente:"

explicacion: |
  La secuencia correcta es: Golpe de Estado (1976), Guerra de Malvinas (1982) y Elecciones de 1983.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["legitimidad", "juicio"]

respuesta: 0
tipo: completar
tolerancia_abs: 0

enunciado: "En una escala del 0 al 10, donde 0 es 'nula' y 10 es 'total', ¿cómo se podría calificar la legitimidad política que la Junta Militar intentó recuperar tras la derrota? (Responda con el número 0 para indicar que fue nula)"

explicacion: |
  La derrota eliminó cualquier base de apoyo social para la Junta, dejando su legitimidad en un nivel prácticamente nulo (0).
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["cronologia", "conflicto"]

respuesta: "2 de abril de 1982"
tipo: completar
respuestas_validas:
  - "2 de abril de 1982"

enunciado: "La operación de desembarco de las fuerzas argentinas en las islas Malvinas tuvo lugar el ___."

explicacion: |
  El desembarco de las fuerzas argentinas en las islas Malvinas ocurrió el 2 de abril de 1982, marcando el inicio del conflicto bélico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["hechos", "maritimo"]

respuesta: "2 de mayo de 1982"
tipo: completar
respuestas_validas:
  - "2 de mayo de 1982"

enunciado: "El hundimiento del crucero ARA General Belgrano por parte de un submarino británico ocurrió el ___."

explicacion: |
  El ataque al crucero General Belgrano fue uno de los eventos más significativos del conflicto, ocurrido el 2 de mayo de 1982.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

variables:
  orden_correcta: ["Desembarco en las islas", "Hundimiento del Belgrano", "Rendición argentina"]

respuesta_orden: orden_correcta
tipo: ordenar
opciones_explicitas: ["Desembarco en las islas", "Hundimiento del Belgrano", "Rendición argentina"]

enunciado: "Ordene cronológicamente los siguientes hitos de la guerra:"

explicacion: |
  La secuencia correcta es: Desembarco (2 de abril), Hundimiento del Belgrano (2 de mayo) y la Rendición (14 de junio).
```

```
metadata:
  materia: "historia_profucha"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["final", "rendicion"]

respuesta: "14 de junio de 1982"
tipo: completar
respuestas_validas:
  - "14 de junio de 1982"

enunciado: "La firma de la rendición de las fuerzas argentinas en las islas Malvinas se produjo el ___."

explicacion: |
  El conflicto terminó formalmente el 14 de junio de 1982 con la rendición de las fuerzas argentinas ante las británicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["inicio", "fecha"]

variables:
  escenario: uno_de([[0, "2 de abril de 1982"], [1, "1 de mayo de 1982"]])
  fecha_inicio: escenario[1]

respuesta: "2 de abril de 1982"
tipo: mc
opciones_explicitas: ["2 de abril de 1982", "1 de mayo de 1982", "2 de mayo de 1982", "14 de junio de 1982"]

enunciado: "¿En qué fecha se produjo el desembarco argentino que dio inicio al conflicto?"

explicacion: |
  El conflicto bélico comenzó con el desembarco argentino el 2 de abril de 1982.
```

## Sección: historia-contemporanea-de-asia-y-pacifico (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["china", "revolucion", "dinastia-qing"]
tipo: completar
enunciado: "La caída de la dinastía Qing en 1912 fue el resultado directo de la Revolución Xinhai, impulsada principalmente por la Sociedad Revolucionaria de China y liderada por Sun Yat-sen, quien estableció la Primera República China tras abdicar el último emperador, Puyi. La causa estructural fundamental que debilitó al régimen Qing fue la combinación de la presión imperialista extranjera y la incapacidad de la corte para implementar reformas modernas efectivas, conocida como la crisis de la _________."
respuesta: "modernización"
respuestas_validas:
  - "modernización"
  - "modernizacion"
  - "MODERNIZACIÓN"
  - "MODERNIZACION"
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["ww1", "japon", "versalles"]
tipo: mc
enunciado: "Durante la Conferencia de Paz de París (1919), Japón buscó incluir una cláusula que promoviera la igualdad racial en la Carta de la Sociedad de Naciones. Aunque fue apoyada por figuras como Sun Yat-sen, fue rechazada por la presión de Estados Unidos y Australia. ¿Qué consecuencia política inmediata tuvo este rechazo en el nacionalismo japonés?"
opciones_explicitas:
  - "Fomentó un aislamiento total y la retirada inmediata de Japón de la comunidad internacional."
  - "Generó un sentimiento de traición y humillación que alimentó el nacionalismo ultraderechista y el militarismo."
  - "Convenció a Japón de aceptar el dominio económico estadounidense en el Pacífico."
  - "Llevó a la abdicación del Emperador Taishō debido a su apoyo a la cláusula."
respuesta: "Generó un sentimiento de traición y humillación que alimentó el nacionalismo ultraderechista y el militarismo."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["china", "japon", "guerra-sinoc-japonesa"]
tipo: vf
enunciado: "El Tratado de Shimonoseki (1895), que puso fin a la Primera Guerra Sino-Japonesa, obligó a la dinastía Qing a ceder Taiwán y la península de Liaodong a Japón, además de pagar una enorme indemnización de guerra."
respuesta: verdadero
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["china", "movimiento-4-mayo", "cultura"]
tipo: completar
enunciado: "En 1919, tras la negativa de la Conferencia de París de devolver los derechos alemanes en Shandong a China, estalló el Movimiento del 4 de Mayo. Este evento marcó el inicio de la Nueva Cultura, caracterizado por la crítica al confucianismo tradicional y la promoción de la ciencia y la _________."
respuesta: "democracia"
respuestas_validas:
  - "democracia"
  - "DEMOCRACIA"
  - "Democracia"
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["japon", "ww2", "ideologia"]
tipo: mc
enunciado: "Durante la expansión imperial japonesa en la década de 1930 y 1940, el gobierno promulgó la doctrina de la \"Gran Esfera de Co-prosperidad de Asia Oriental\". ¿Cuál era el objetivo declarado de esta doctrina según la propaganda del régimen?"
opciones_explicitas:
  - "Crear una unión aduanera libre con Estados Unidos para evitar conflictos."
  - "Liberar a Asia de la influencia colonial occidental bajo liderazgo japonés."
  - "Integrar a China y Corea como provincias iguales dentro del Imperio de Japón."
  - "Establecer una alianza militar con la Unión Soviética contra Occidente."
respuesta: "Liberar a Asia de la influencia colonial occidental bajo liderazgo japonés."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["china", "ww2", "masacres"]
tipo: vf
enunciado: "La Masacre de Nankín, ocurrida tras la captura de la ciudad por las fuerzas japonesas en diciembre de 1937, es reconocida históricamente por la ejecución masiva de civiles y prisioneros de guerra y la violencia sexual generalizada durante los primeros meses de ocupación."
respuesta: verdadero
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["japon", "diplomacia", "sociedad-naciones"]
tipo: mc
enunciado: "En la década de 1920, Japón participó activamente en la diplomacia internacional. Sin embargo, su retirada de la Sociedad de Naciones en 1933 fue un punto de inflexión. ¿Qué evento específico precipitó esta retirada?"
opciones_explicitas:
  - "La negativa de la Sociedad a reconocer a Japón como potencia colonial en Asia."
  - "La condena internacional a la invasión japonesa de Manchuria."
  - "El fracaso en obtener el control de los estrechos de Malaca."
  - "La ruptura del tratado de alianza anglo-japonés con Gran Bretaña."
respuesta: "La condena internacional a la invasión japonesa de Manchuria."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["japon", "manchuria", "puppet-state"]
tipo: completar
enunciado: "Tras el incidente del ferrocarril de Mukden en 1931, el Ejército de Kwantung de Japón ocupó Manchuria y estableció en 1932 el estado títere de _________."
respuesta: "Manchukuo"
respuestas_validas:
  - "manchukuo"
  - "MANCHUKUO"
  - "Manchúkuo"
  - "MANCHÚKUO"
  - "manchúkuo"
  - "MANCHUQUO"
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["corea", "guerra-de-corea", "guerra-fria"]
tipo: vf
enunciado: "La Guerra de Corea (1950-1953) comenzó con una invasión del Norte comunista, apoyado por la URSS y China, hacia el Sur capitalista, apoyado por un mandato de la ONU liderado por Estados Unidos, resultando en un empate técnico y la división permanente de la península."
respuesta: verdadero
```

```
metadata:
  materia: "historia-profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["corea-del-norte", "kim-ilsung", "ideologia"]
tipo: mc
enunciado: "Kim Il-sung, líder de Corea del Norte, desarrolló la ideología estatal de \"Juche\". ¿Cuál es el principio central de esta doctrina?"
opciones_explicitas:
  - "La subordinación total al Partido Comunista Chino."
  - "La autosuficiencia política, económica y militar del pueblo coreano."
  - "La integración económica con Japón para la reconstrucción."
  - "El retorno al confucianismo como única base legal."
respuesta: "La autosuficiencia política, económica y militar del pueblo coreano."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["vietnam", "guerra-de-vietnam", "saigon"]
tipo: completar
enunciado: "El conflicto en Vietnam culminó en 1975 con la caída de _________, la capital de Vietnam del Sur, ante las fuerzas del Viet Cong y el Ejército Popular de Vietnam, marcando la reunificación del país bajo el comunismo."
respuesta: "Saigon"
respuestas_validas:
  - "saigon"
  - "SAIGON"
  - "Sai-gon"
  - "SAIGÓN"
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["vietnam", "ginebra", "division"]
tipo: vf
enunciado: "Los Acuerdos de Ginebra de 1954 pusieron fin a la guerra franco-vietnamita y establecieron una línea de demarcación temporal en el paralelo 17, dividiendo Vietnam en dos estados provisionales hasta unas elecciones generales previstas para 1956."
respuesta: verdadero
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["china", "1989", "protestas"]
tipo: mc
enunciado: "En la primavera de 1989, estallaron grandes protestas en la Plaza de Tiananmén en Beijing, lideradas por estudiantes y trabajadores que demandaban reformas democráticas y libertad de prensa. ¿Qué acción tomó el gobierno chino en junio de ese año para dispersarlas?"
opciones_explicitas:
  - "Negoció un gobierno de coalición con los líderes estudiantiles."
  - "Ordenó un operativo militar con uso de fuerza letal para reprimir a los manifestantes."
  - "Convocó a elecciones libres inmediatas en las ciudades afectadas."
  - "Permitió la entrada de observadores internacionales de la ONU."
respuesta: "Ordenó un operativo militar con uso de fuerza letal para reprimir a los manifestantes."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["china", "deng-xiaoping", "economia"]
tipo: completar
enunciado: "Tras la muerte de Mao Zedong, Deng Xiaoping impulsó las \"Cuatro Modernizaciones\" y abrió la economía china al mercado global mediante la creación de Zonas Económicas Especiales (ZEE), iniciando un proceso de reformas conocidas como socialismo de mercado con características _________."
respuesta: "chinas"
respuestas_validas:
  - "chinas"
  - "CHINAS"
  - "Chinas"
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["india", "pakistan", "bangladesh"]
tipo: vf
enunciado: "La Guerra Indo-Pakistaní de 1971 resultó en la rendición del ejército pakistaní y la creación independiente de Bangladesh, tras un conflicto iniciado por la crisis de refugiados bengalíes y la intervención militar india."
respuesta: verdadero
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["iran", "revolucion-islamica", "jomeini"]
tipo: mc
enunciado: "La Revolución Iraní de 1979 derrocó a la dinastía Pahlavi. ¿Quién fue el líder espiritual y político clave que estableció la República Islámica?"
opciones_explicitas:
  - "Mohammad Mosaddegh"
  - "Ruhollah Jomeini"
  - "Reza Pahlevi"
  - "Ahmadineyad"
respuesta: "Ruhollah Jomeini"
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["afganistan", "urss", "muyahidines"]
tipo: completar
enunciado: "En diciembre de 1979, la Unión Soviética invadió Afganistán para apoyar al gobierno comunista local. La resistencia armada contra la ocupación fue liderada por los _________."
respuesta: "muyahidines"
respuestas_validas:
  - "muyahidines"
  - "muyahidin"
  - "muyahidines"
  - "muyahidines"
  - "muyahidin"
  - "muyahidines"
  - "muyahidin"
  - "muyahidines"
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["kuwait", "iraq", "saddam-hussein"]
tipo: vf
enunciado: "En agosto de 1990, Irak invadió y anexó Kuwait, acusándolo de extraer petróleo por encima de los límites de la OPEP y de ser una \"colonia\" de Estados Unidos, lo que provocó la Guerra del Golfo liderada por una coalición internacional."
respuesta: verdadero
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["georgia", "post-sovietico", "saakashvili"]
tipo: mc
enunciado: "La Revolución de las Rosas en 2003 en Georgia fue un proceso de cambio de poder no violento. ¿Qué figura política surgió como líder tras la dimisión de Eduard Shevardnadze?"
opciones_explicitas:
  - "Mikheil Saakashvili"
  - "Zviad Gamsajurdia"
  - "Nino Burjanadze"
  - "Bidzina Ivanishvili"
respuesta: "Mikheil Saakashvili"
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["urss", "china", "guerra-fria"]
tipo: completar
enunciado: "Durante la Crisis de los Misiles de 1962, la relación entre la Unión Soviética y la República Popular China se deterioró gravemente. China vio la crisis como una prueba de la debilidad soviética y una oportunidad para criticar el \"rev revisionismo\" de Moscú, acelerando la ruptura sino-soviética iniciada en los años _________."
respuesta: 60
respuestas_validas:
  - 60
  - 1960
  - "sesenta"
  - "SESENTA"
  - "60s"
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["israel", "egypt", "guerra-yom-kipur"]
tipo: vf
enunciado: "La Guerra de Yom Kipur (1973) comenzó con un ataque sorpresa coordinado por Egipto y Siria contra Israel durante la festividad judía de Yom Kipur, lo que inicialmente sorprendió a las fuerzas israelíes pero terminó con una victoria estratégica israelí."
respuesta: verdadero
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["israel", "egypt", "camp-david"]
tipo: mc
enunciado: "Los Acuerdos de Camp David (1978) llevaron al primer tratado de paz entre Israel y un país árabe. ¿Qué territorio devolvió Israel a Egipto como parte de este acuerdo?"
opciones_explicitas:
  - "La Franja de Gaza."
  - "La Península del Sinaí."
  - "Los Altos del Golán."
  - "Cisjordania."
respuesta: "La Península del Sinaí."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["iran", "iraq", "guerra-irak-iran"]
tipo: completar
enunciado: "La Guerra Irán-Irak (1980-1988), iniciada por la invasión iraquí de territorio iraní, se caracterizó por una guerra de desgaste prolongada y el uso de armas químicas por parte de Irak, bajo el liderazgo de _________."
respuesta: "Saddam Hussein"
respuestas_validas:
  - "saddam hussein"
  - "SADDAM HUSSEIN"
  - "Saddam Hussein"
  - "Saddam"
  - "SADDAM"
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["india", "agricultura", "verde"]
tipo: vf
enunciado: "La Revolución Verde en India, impulsada durante la década de 1960 bajo la dirección de M.S. Swaminathan y apoyada por el gobierno de Indira Gandhi, introdujo variedades de cultivos de alto rendimiento, fertilizantes y riego, logrando la autosuficiencia alimentaria del país."
respuesta: verdadero
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-asia-y-pacifico"
  nivel: "avanzado"
  tags: ["india", "pakistan", "independencia"]
tipo: mc
enunciado: "La independencia de la India en 1947 no fue un proceso unificado, sino que implicó la partición del subcontinente. ¿Qué figura clave del movimiento independentista indio se opuso firmemente a la partición pero fue finalmente ignorada por la decisión británica?"
opciones_explicitas:
  - "Mahatma Gandhi"
  - "Jawaharlal Nehru"
  - "Muhammad Ali Jinnah"
  - "Subhas Chandra Bose"
respuesta: "Mahatma Gandhi"
```

## Sección: historia-contemporanea-de-medio-oriente (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["ww1", "balkans", "sarajevo"]
tipo: vf
enunciado: "El asesinato del archiduque Francisco Fernando en Sarajevo fue el detonante directo que llevó al estallido de la Primera Guerra Mundial, conflicto en el que el Imperio Otomano participaría poco después."
respuesta: verdadero
explicacion: "El evento del 28 de junio de 1914 activó las alianzas europeas, llevando al Imperio Otomano a aliarse con las Potencias Centrales en 1914, abriendo el frente del Medio Oriente en la guerra."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["sykes-picot", "colonialismo", "ww1"]
tipo: completar
enunciado: "El acuerdo firmado en 1916 entre Gran Bretaña y Francia, con el consentimiento de Rusia, para dividir las provincias del Imperio Otomano en el Medio Oriente se conoce como Acuerdo ______."
respuesta: "Sykes-Picot"
respuestas_validas:
  - "sykes-picot"
  - "Sykes-Picot"
  - "sykes picot"
  - "Sykes picot"
explicacion: "Este acuerdo definió las esferas de influencia británica y francesa en la región, ignorando en gran medida los deseos de las poblaciones árabes locales."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["balfour", "sionismo", "britania"]
tipo: mc
enunciado: "¿En qué año el Ministro de Relaciones Exteriores británico Arthur Balfour emitió la declaración que promovía el establecimiento de un \"hogar nacional judío\" en Palestina?"
opciones_explicitas:
  - 1917
  - 1920
  - 1922
  - 1936
respuesta: 1917
explicacion: "La Declaración Balfour de 1917 fue un punto de inflexión crucial que dio legitimidad internacional al movimiento sionista y complicó la relación con la población árabe local."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["turquia", "kemal", "califato"]
tipo: completar
enunciado: "La institución del Califato, que otorgaba autoridad religiosa suprema a los sultanes otomanos, fue abolida formalmente por la Gran Asamblea Nacional de Turquía en el año ______."
respuesta: 1924
respuestas_validas:
  - "1924"
  - "mil novecientos veinticuatro"
explicacion: "La abdicación del último califa Abdulmejid II marcó el fin simbólico del Imperio Otomano y el inicio de la laica República de Turquía bajo Mustafa Kemal Atatürk."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["iraq", "mandato", "faisal"]
tipo: mc
enunciado: "Tras la desintegración del Imperio Otomano, ¿qué potencia recibió el mandato de la Sociedad de Naciones para administrar Irak?"
opciones_explicitas:
  - "Francia"
  - "Gran Bretaña"
  - "Italia"
  - "España"
respuesta: "Gran Bretaña"
explicacion: "Gran Bretaña estableció el Mandato de Mesopotamia (Irak) en 1920, instalando a Faisal I como rey bajo su influencia, lo que generó resistencias locales significativas."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["revuelta", "hejaz", "britania"]
tipo: completar
enunciado: "La Gran Revuelta Árabe contra el dominio otomano comenzó en 1916 en el reino de ______, liderada por el sherif Hussein bin Ali."
respuesta: "Hejaz"
respuestas_validas:
  - "hejaz"
  - "Hejaz"
  - "el hejaz"
  - "el Hejaz"
explicacion: "La Revuelta del Hejaz buscaba la independencia árabe, contando con el apoyo logístico de T.E. Lawrence y la Royal Navy británica."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["turquia", "independencia", "tratados"]
tipo: mc
enunciado: "¿Qué tratado internacional de 1923 reconoció la soberanía de la República de Turquía y estableció sus fronteras modernas, reemplazando el Tratado de Sèvres?"
opciones_explicitas:
  - "Tratado de Lausana"
  - "Tratado de Versalles"
  - "Tratado de Brest-Litovsk"
  - "Tratado de Ankara"
respuesta: "Tratado de Lausana"
explicacion: "El Tratado de Lausana puso fin oficialmente al estado de guerra entre Turquía y las potencias aliadas, consolidando la independencia turca."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["marruecos", "rif", "abd-el-krim"]
tipo: completar
enunciado: "En 1921, las tropas de la República del Rif, lideradas por ______, infligieron una devastadora derrota a los españoles en la batalla de Annual."
respuesta: "Abd-el-Krim"
respuestas_validas:
  - "abd-el-krim"
  - "Abd-el-Krim"
  - "abd el krim"
  - "Abd el Krim"
explicacion: "Abd-el-Krim logró unificar a las tribus rifeñas y resistir el colonialismo europeo, aunque finalmente fue derrotado por la coalición franco-española en 1926."
```

```
metadata:
  materia: "historia-profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["petroleo", "iraq", "mosul"]
tipo: vf
enunciado: "El descubrimiento de grandes yacimientos de petróleo en Kirkuk, Irak, ocurrió antes de la Primera Guerra Mundial."
respuesta: falso
explicacion: "Las primeras prospecciones significativas que revelaron el potencial petrolífero de Mesopotamia ocurrieron en la década de 1920, tras el establecimiento del mandato británico."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["siria", "libano", "francia", "independencia"]
tipo: completar
enunciado: "Francia retiró sus tropas de Siria y Líbano y reconoció su independencia formalmente en el año ______."
respuesta: 1946
respuestas_validas:
  - "1946"
  - "mil novecientos cuarenta y seis"
explicacion: "El 17 de abril de 1946 es celebrado como el Día de la Evacuación en ambos países, marcando el fin del mandato francés iniciado tras la Primera Guerra Mundial."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["palestina", "onu", "particion"]
tipo: mc
enunciado: "La Resolución 181 de la Asamblea General de las Naciones Unidas, aprobada en 1947, propuso:"
opciones_explicitas:
  - "El fin del mandato británico y la partición de Palestina en un estado judío y uno árabe."
  - "La nacionalización del canal de Suez."
  - "La creación de una federación árabe unificada."
  - "El reconocimiento inmediato de Israel por parte de la Liga Árabe."
respuesta: "El fin del mandato británico y la partición de Palestina en un estado judío y uno árabe."
explicacion: "La resolución recomendó la partición de la tierra de Palestina bajo el mandato británico, lo que llevó a la proclamación del Estado de Israel en 1948."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["palestina", "1948", "independencia"]
tipo: completar
enunciado: "La guerra de 1948 en Palestina, conocida como la Guerra de la Independencia para Israel y como la Nakba (catástrofe) para los palestinos, terminó con el armisticio de ______."
respuesta: "Rodas"
respuestas_validas:
  - "rodas"
  - "Rodas"
  - "la rodas"
  - "La Rodas"
explicacion: "Los acuerdos de armisticio de Rodas en 1949 establecieron las líneas de alto el fuego (Línea Verde) que definieron las fronteras de facto de Israel hasta 1967."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["egipto", "suez", "nasser"]
tipo: mc
enunciado: "¿Quién fue el presidente egipcio que nacionalizó el Canal de Suez en 1956, provocando la crisis de Suez?"
opciones_explicitas:
  - "Gamal Abdel Nasser"
  - "Anwar el-Sadat"
  - "Hosni Mubarak"
  - "Fuad I"
respuesta: "Gamal Abdel Nasser"
explicacion: "La nacionalización del canal por parte de Nasser fue un acto de soberanía económica y política que desafió a las antiguas potencias coloniales, Gran Bretaña y Francia."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["unión", "egipto", "siria"]
tipo: completar
enunciado: "En 1958, Egipto y Siria se unieron brevemente para formar la ______ Árabe Republicana, impulsada por el panarabismo de Nasser."
respuesta: "Unión"
respuestas_validas:
  - "unión"
  - "unión árabe republicana"
  - "la unión"
  - "Union"
explicacion: "Esta unión fue efímera y colapsó en 1961 tras un golpe de estado en Siria, aunque el ideal panárabe siguió influyendo en la política regional."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["israel", "1967", "ocupación"]
tipo: mc
enunciado: "La Guerra de los Seis Días de 1967 resultó en la ocupación israelí de:"
opciones_explicitas:
  - "La Franja de Gaza, Cisjordania, la península del Sinaí y los Altos del Golán."
  - "Solo la Franja de Gaza y Cisjordania."
  - "El Líbano y la península del Sinaí."
  - "Iraq y Jordania."
respuesta: "La Franja de Gaza, Cisjordania, la península del Sinaí y los Altos del Golán."
explicacion: "Este conflicto cambió radicalmente el mapa geopolítico del Medio Oriente, poniendo a millones de palestinos bajo control militar israelí y asegurando el control del Sinaí y el Golán."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["egipto", "israel", "1973", "petróleo"]
tipo: completar
enunciado: "La guerra de 1973, iniciada por un ataque sorpresa de Egipto y Siria contra Israel, es conocida en el mundo árabe como la Guerra de ______."
respuesta: "Ramadán"
respuestas_validas:
  - "ramadán"
  - "Ramadán"
  - "el ramadán"
  - "Ramadan"
explicacion: "También llamada Guerra de Octubre por los israelíes, tuvo profundas consecuencias económicas globales debido al embargo petrolero de la OPEP."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["paz", "egipto", "israel", "camp david"]
tipo: mc
enunciado: "Los Acuerdos de Camp David de 1978 firmados por Menachem Begin y Anwar el-Sadat, con mediación de Jimmy Carter, tuvieron como resultado principal:"
opciones_explicitas:
  - "El primer tratado de paz entre Israel y un país árabe."
  - "La creación de la OLP como interlocutor único."
  - "La retirada israelí de todos los territorios ocupados en 1967."
  - "El reconocimiento de la OLP por parte de Estados Unidos."
respuesta: "El primer tratado de paz entre Israel y un país árabe."
explicacion: "Egipto se convirtió en el primer país árabe en reconocer a Israel a cambio de la devolución completa de la península del Sinaí."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["libano", "olp", "1982"]
tipo: completar
enunciado: "En 1982, Israel lanzó una invasión a gran escala del Líbano para expulsar a la ______ de Beirut."
respuesta: "OLP"
respuestas_validas:
  - "olp"
  - "OLP"
  - "la OLP"
  - "OLP (Organización para la Liberación de Palestina)"
explicacion: "La OLP fue obligada a salir de Beirut bajo garantía internacional, marcando un cambio en la dinámica de la guerra civil libanesa y la presencia palestina en el país."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["iran", "iraq", "guerra", "80s"]
tipo: mc
enunciado: "La guerra de ocho años entre Irán e Irak (1980-1988) comenzó con la invasión iraquí de Irán motivada principalmente por:"
opciones_explicitas:
  - "El temor a la exportación de la Revolución Islámica y disputas fronterizas."
  - "El deseo de controlar los campos petroleros de Kuwait."
  - "La presión de la Unión Soviética para unir a los países musulmanes."
  - "La respuesta al ataque israelí sobre las instalaciones nucleares iraníes."
respuesta: "El temor a la exportación de la Revolución Islámica y disputas fronterizas."
explicacion: "Sadam Hussein temía que el nuevo régimen chiita en Teherán inspirara a la mayoría chiita de Irak y buscó reafirmar la soberanía iraquí sobre el Shatt al-Arab."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["iran", "jomeini", "revolución"]
tipo: completar
enunciado: "La Revolución Islámica en Irán, que llevó al exilio del Sha Mohammad Reza Pahlavi y al establecimiento de una república islámica, ocurrió en el año ______."
respuesta: 1979
respuestas_validas:
  - "1979"
  - "mil novecientos setenta y nueve"
explicacion: "Liderada por el ayatolá Jomeini, esta revolución transformó a Irán en una potencia teocrática y cambió el equilibrio de poder regional hacia el chiismo político."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["kuwait", "iraq", "saddam", "onu"]
tipo: mc
enunciado: "En agosto de 1990, Irak invadió y anexó Kuwait, lo que provocó la Resolución 678 de la ONU que autorizó:"
opciones_explicitas:
  - "El uso de la fuerza para liberar Kuwait."
  - "Un embargo total a Estados Unidos."
  - "La intervención militar directa de la OLP."
  - "El reconocimiento de Kuwait como parte de Irak."
respuesta: "El uso de la fuerza para liberar Kuwait."
explicacion: "Esto llevó a la Guerra del Golfo de 1991, donde una coalición liderada por EE.UU. expulsó a las fuerzas iraquíes de Kuwait."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["paz", "israel", "olp", "90s"]
tipo: completar
enunciado: "Los Acuerdos de Oslo, firmados en 1993, establecieron la Autoridad Nacional Palestina (ANP) para gobernarse parcialmente en Cisjordania y la Franja de Gaza, basándose en el principio de ______."
respuesta: "Tierra por paz"
respuestas_validas:
  - "tierra por paz"
  - "tierra por la paz"
  - "paz por tierra"
  - "Paz por tierra"
explicacion: "Este principio implicaba que Israel retiraría sus fuerzas de territorios ocupados a cambio de reconocimiento mutuo y paz con los palestinos."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["libano", "guerra civil", "1975"]
tipo: mc
enunciado: "La Guerra Civil Libanesa comenzó en 1975 y duró hasta 1990. ¿Cuál fue una de sus causas estructurales principales?"
opciones_explicitas:
  - "El desequilibrio político entre confesiones religiosas cristianas y musulmanas."
  - "La invasión directa de Siria desde 1960."
  - "El descubrimiento de petróleo en el norte del país."
  - "La unificación forzada con Siria."
respuesta: "El desequilibrio político entre confesiones religiosas cristianas y musulmanas."
explicacion: "El censo de 1932 que favorecía a los cristianos maronitas se volvió obsoleto demográficamente, generando tensiones que estallaron con la llegada de refugiados palestinos y cambios regionales."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["hezbollah", "libano", "iran"]
tipo: completar
enunciado: "El grupo miliciano chiita Hezbollah surgió en el Líbano a principios de la década de 1980 con el apoyo logístico y financiero de ______."
respuesta: "Irán"
respuestas_validas:
  - "iran"
  - "Irán"
  - "la república islámica de irán"
  - "irán islámica"
explicacion: "Irán vio en Hezbollah un instrumento para exportar su revolución y contrarrestar la influencia israelí y occidental en el Líbano."
```

```
metadata:
  materia: "historia_profunda"
  tema: "historia-contemporanea-de-medio-oriente"
  nivel: "avanzado"
  tags: ["iraq", "2003", "saddam", "eeuu"]
tipo: mc
enunciado: "La invasión de Irak liderada por Estados Unidos en 2003 tuvo como justificación principal alegar que Saddam Hussein poseía:"
opciones_explicitas:
  - "Armas de destrucción masiva."
  - "Vínculos directos con Al-Qaeda en Bagdad."
  - "Un programa nuclear avanzado."
  - "La intención de atacar a Israel."
respuesta: "Armas de destrucción masiva."
explicacion: "Aunque nunca se encontraron pruebas concluyentes de tales armas, este fue el pretexto central utilizado por la administración Bush para derrocar al régimen de Saddam Hussein."
```

## Sección: recuperacion-democratica-memoria (23 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "dictadura", "argentina"]

respuesta: "democracia"
tipo: completar
respuestas_validas:
  - "democracia"

enunciado: "Tras el fin de la última dictadura militar en Argentina, las elecciones de 1983 marcaron el retorno a la ________."

explicacion: |
  Las elecciones de octubre de 1983 pusieron fin a la última dictadura cívico-militar, devolviendo el poder a los representantes elegidos por el pueblo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["alfonsin", "presidencia", "1983"]

opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Alfonsín", "Raúl Alfonsín"]
respuesta: "Raúl Alfonsín"
tipo: mc

enunciado: "El primer presidente elegido mediante el sufragio universal tras el fin de la dictadura fue:"

explicacion: |
  Raúl Alfonsín, de la Unión Cívica Radical, asumió la presidencia el 10 de diciembre de 1983.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "derechos_humanos", "juicio_a_las_juntas"]

opciones_explicitas: ["Juicio a las Juntas", "Juicio a los Militares", "Juicio a las Dictaduras", "Juicio a las Juntas"]
respuesta: "Juicio a las Juntas"
tipo: mc

enunciado: "El proceso judicial de 1985 para juzgar a las cúpulas militares se conoce como el:"

explicacion: |
  El Juicio a las Juntas fue un hito histórico en la justicia argentina y un precedente mundial en el juzgamiento de crímenes de lesa humanidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["transicion", "procesos", "orden"]

opciones_explicitas: ["Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín"]
respuesta_orden: ["Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes hitos del proceso de democratización:"

explicacion: |
  Primero terminó la dictadura, luego se realizaron las elecciones y finalmente el presidente electo asumió su cargo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["derechos_humanos", "etica", "memoria"]

variables:
  escenario: uno_de([["reparación", "reparación"], ["olvido", "olvido"], ["justicia", "justicia"]])

respuesta: "justicia"
tipo: mc
opciones_explicitas: ["reparación", "olvido", "justicia"]

enunciado: "En el marco de los Derechos Humanos, la política de Estado para evitar la repetición de los crímenes de la dictadura se basa en el trípode: Memoria, Verdad y {escenario[0]}."

explicacion: |
  El lema "Memoria, Verdad y Justicia" es el pilar fundamental de los organismos de Derechos Humanos en Argentina para la reconstrucción del tejido social.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["juicio_a_las_juntas", "derechos_humanos", "argentina"]

respuesta: "Juicio a las Juntas"
tipo: completar
respuestas_validas:
  - "Juicio a las Juntas"

enunciado: "El proceso judicial histórico llevado a cabo en 1985 para juzgar a los máximos responsables de la dictadura militar argentina se conoce como el ___."

explicacion: |
  El Juicio a las Juntas fue un hito mundial, siendo la primera vez que un tribunal civil juzgó a las cúpulas militares de su propio país por delitos de lesa humanidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "justicia"]

variables:
  tipo_tribunal: uno_de(["civil", "militar"])

respuesta: "civil"
tipo: mc
opciones_explicitas: ["civil", "militar"]

enunciado: "A diferencia de otros procesos de transición, el juicio de 1985 fue llevado a cabo por un tribunal de carácter {tipo_tribunal}."

explicacion: |
  La naturaleza civil del tribunal fue fundamental para consolidar la supremacía de la Constitución y el Estado de Derecho sobre el poder militar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["delitos", "terrorismo_de_estado"]

respuesta_orden: ["terrorismo de Estado", "secuestro", "tortura", "homicidio"]
tipo: ordenar
opciones_explicitas: ["terrorismo de Estado", "secuestro", "tortura", "homicidio"]

enunciado: "Ordene de lo más general a lo más específico los conceptos que definen la naturaleza de los crímenes juzgados:"

explicacion: |
  El juicio condenó a los responsables por la planificación y ejecución de un sistema de terrorismo de Estado que se manifestó a través de secuestros, torturas y homicidios.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["conadep", "derechos_humanos"]

respuesta: "CONADEP"
tipo: completar
respuestas_validas:
  - "CONADEP"

enunciado: "El informe fundamental que recopiló testimonios sobre la represión sistemática durante la última dictadura militar fue elaborado por la ___."

explicacion: |
  La Comisión Nacional sobre la Desaparición de Personas (CONADEP) elaboró el informe 'Nunca Más', que fue clave para el posterior Juicio a las Juntas.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["sitios_de_memoria", "museos"]

variables:
  idx: uno_de([0, 1])
  datos: [["ESMA", "Ex Centro de Detención de la ESMA"], ["El Olimpo", "Ex Centro de Detención El Olimpo"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Ex Centro de Detención de la ESMA", "Ex Centro de Detención El Olimpo", "Ex Base Naval Puerto Belgrano", "Ex Escuela de Mecánica de la Armada"]

enunciado: "El sitio de memoria conocido como {datos[idx][0]} es un ejemplo de un espacio que funcionó como centro clandestino de detención y hoy es un museo dedicado a la memoria."

explicacion: |
  Los Sitios de Memoria son lugares que fueron utilizados para la represión y que han sido recuperados para la memoria colectiva, transformándose en museos o centros culturales.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["verdad", "justicia", "derechos_humanos"]

respuesta: "Verdad"
tipo: mc
opciones_explicitas: ["Verdad", "Justicia", "Memoria", "Reparación"]

enunciado: "En el marco de las políticas de Derechos Humanos, el derecho a conocer la realidad de lo sucedido con las víctimas se denomina derecho a la ___."

explicacion: |
  El derecho a la Verdad, a la Justicia y a la Memoria son pilares fundamentales de la política de Derechos Humanos en Argentina tras la recuperación democrática.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["cronologia", "democracia"]

respuesta_orden: ["Fin de la dictadura", "Informe Nunca Más", "Juicio a las Juntas"]
tipo: ordenar
opciones_explicitas: ["Fin de la dictadura", "Informe Nunca Más", "Juicio a las Juntas"]

enunciado: "Ordene cronológicamente los hitos fundamentales del proceso de justicia y memoria tras el retorno a la democracia en Argentina:"

explicacion: |
  Primero se produjo la salida de la dictadura, luego la CONADEP presentó su informe y posteriormente se llevó a cabo el histórico Juicio a las Juntas en 1985.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "impunidad"]

respuesta: "imprescindible"
tipo: completar
respuestas_validas:
  - "imprescindible"
  - "fundamental"
  - "clave"

enunciado: "Para el proceso de reconstrucción del Estado de Derecho, la aplicación de la ___ para juzgar los crímenes de lesa humanidad fue considerada ___."

explicacion: |
  La justicia es un componente esencial para romper el ciclo de impunidad y garantizar que los crímenes contra la humanidad no queden sin castigo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "argentina", "1983"]

respuesta: "1983"
tipo: completar
respuestas_validas:
  - "1983"

enunciado: "El año en que se produjo el retorno a la democracia y se inició el período democrático ininterrumpido más largo de la historia argentina fue en ___."

explicacion: |
  En 1983, tras la dictadura militar, se llevaron a cabo elecciones que marcaron el inicio de la era democrática más extensa del país.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["presidencia", "democracia", "alfonsin"]

variables:
  idx: uno_de([0, 1])
  datos: [["Raúl Alfonsín", "Presidente de la Nación"], ["Raúl Alfonsín", "Dictador militar"]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Dictador militar", "Juan Carlos Onganía", "Jorge Rafael Videla"]

enunciado: "El primer presidente elegido tras el fin de la dictadura militar fue {datos[idx][0]}."

explicacion: |
  {datos[idx][0]} asumió la presidencia en 1983, marcando el inicio del proceso de recuperación democrática.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

respuesta_orden: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas"]
tipo: ordenar

opciones_explicitas: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas"]

enunciado: "Ordene cronológicamente los siguientes hitos de la historia argentina reciente:"

pasos:
  - "Identifique el período de gobierno de facto."
  - "Identifique el proceso electoral de retorno."
  - "Identifique el proceso judicial emblemático de la post-dictadura."

explicacion: |
  Primero fue la dictadura, luego las elecciones de 1983 y finalmente el histórico Juicio a las Juntas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "continuidad"]

respuesta: "largo"
tipo: mc
opciones_explicitas: ["largo", "corto", "inestable", "interrumpido"]

enunciado: "El período democrático iniciado en 1983 es el más ___ de la historia argentina hasta la actualidad."

explicacion: |
  A diferencia de los quiebres institucionales previos, este período se caracteriza por su continuidad y duración.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["derechos_humanos", "memoria"]

variables:
  idx: uno_de([0, 1, 2])
  escenarios: [["El proceso de Memoria, Verdad y Justicia busca...", "reparar el tejido social y la verdad histórica"], ["El proceso de Memoria, Verdad y Justicia busca...", "la reconstrucción de la identidad democrática"], ["El proceso de Memoria, Verdad y Justicia busca...", "la aplicación de la justicia sobre los crímenes de lesa humanidad"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["reparar el tejido social y la verdad histórica", "la reconstrucción de la identidad democrática", "la aplicación de la justicia sobre los crímenes de lesa humanidad", "la restauración del orden militar"]

enunciado: "Dentro del marco de la recuperación democrática, el proceso de Memoria, Verdad y Justicia busca {escenarios[idx][1]}."

explicacion: |
  La reconstrucción de la identidad democrática es un pilar fundamental para consolidar el Estado de Derecho tras la dictadura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["argentina", "democracia", "historia"]

variables:
  escenario: uno_de([["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"], ["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"], ["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Alfonsín", "Raúl Alfonsín"]

enunciado: "En el contexto de la recuperación democrática argentina, {escenario[0]}"

explicacion: |
  Raúl Alfonsín asumió la presidencia en 1983, marcando el inicio del periodo democrático tras la última dictadura militar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "derechos_humanos"]

variables:
  evento: uno_de([["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"], ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"], ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"]])

respuesta: evento[1]
tipo: completar
respuestas_validas:
  - "Juicio a las Juntas"

enunciado: "El proceso histórico fundamental para la memoria y la justicia en 1985 fue el ___."

explicacion: |
  El Juicio a las Juntas fue un hito mundial donde la justicia civil juzgó a los comandantes militares por crímenes de lesa humanidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["conceptos", "derechos_humanos"]

respuesta: "Derechos Humanos"
tipo: mc
opciones_explicitas: ["Derechos Humanos", "Derechos Civiles", "Derechos Sociales", "Derechos Políticos"]

enunciado: "La recuperación democrática puso en el centro del debate nacional la defensa de los ___."

explicacion: |
  La democracia argentina se construyó sobre el pilar fundamental de la vigencia y defensa de los Derechos Humanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["cronologia", "transicion"]

respuesta_orden: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas", "Ley de Obediencia Debida"]
tipo: ordenar
opciones_explicitas: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas", "Ley de Obediencia Debida"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso de transición y memoria:"

explicacion: |
  La secuencia parte del fin del régimen militar (1976-1983), pasando por el triunfo electoral de Alfonsín, el juicio histórico de 1985 y las posteriores leyes de impunidad que marcaron la etapa posterior.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["movimientos_sociales", "memoria"]

variables:
  sujeto: uno_de([["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"], ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"], ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"]])

respuesta: sujeto[1]
tipo: completar
opciones_explicitas: [verdadero, falso]

enunciado: "Las {sujeto[0]} fueron actores fundamentales en la exigencia de justicia durante la transición democrática."

explicacion: |
  Las Madres de Plaza de Mayo fueron un símbolo global de la lucha por la verdad y la justicia durante y después de la dictadura.
```

## Sección: globalizacion-era-digital (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["definicion", "interconexion"]

respuesta: "interconexión"
tipo: completar
respuestas_validas:
  - "interconexión"
  - "interconexion"

enunciado: "La globalización se define como el proceso de creciente ___ económica, cultural y tecnológica entre los países del mundo."

explicacion: |
  La globalización implica una integración de mercados y sociedades a escala mundial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tecnologia", "comunicacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["la llegada de Internet", "la digitalización de la información"], ["el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]]
  respuestas_correctas: [["la llegada de Internet", "la digitalización de la información"], ["el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["la llegada de Internet", "la digitalización de la información", "el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]

enunciado: "En el contexto de la era digital, {escenarios[escenario_idx][0]} fue un factor clave que impulsó {escenarios[escenario_idx][1]}."

explicacion: |
  La tecnología ha sido el motor que ha permitido que la interconexión sea instantánea y global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["economia", "comercio"]

respuesta: "transnacionales"
tipo: mc
opciones_explicitas: ["nacionales", "transnacionales", "locales", "estatales"]

enunciado: "La globalización económica ha permitido el auge de las empresas ________, que operan en múltiples países simultáneamente."

explicacion: |
  Las empresas transnacionales son actores centrales en la economía globalizada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["cronologia", "tecnologia"]

respuesta_orden: ["Internet", "Comercio electrónico", "Redes sociales", "Internet de las cosas"]
tipo: ordenar
opciones_explicitas: ["Internet", "Comercio electrónico", "Redes sociales", "Internet de las cosas"]

enunciado: "Ordene cronológicamente estos hitos tecnológicos que han profundizado la globalización:"

explicacion: |
  La secuencia muestra cómo la infraestructura (Internet) permitió el comercio, luego la interacción social masiva y finalmente la hiperconectividad de objetos.
```

```
metadata:
  materia: "historia_profucha"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["desigualdad", "brecha_digital"]

respuesta: "la homogeneización cultural"
tipo: mc
opciones_explicitas: ["la homogeneización cultural", "la reducción de la brecha digital"]

enunciado: "Si se analiza la globalización desde una perspectiva crítica, un efecto cultural negativo común es ___."

explicacion: |
  La homogeneización cultural se refiere a la pérdida de identidades locales frente a una cultura global dominante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["transporte", "comercio"]

enunciado: "La caída drástica en los costos de transporte marítimo durante el siglo XX fue impulsada principalmente por la estandarización de los contenedores. ¿Qué tipo de transporte permitió esta revolución?"

opciones_explicitas: ["Aéreo", "Marítimo", "Ferroviario", "Terrestre"]
respuesta: "Marítimo"
tipo: "mc"

explicacion: |
  La contenedorización permitió cargar y descargar barcos de forma masiva y rápida, reduciendo costos y tiempos de espera, lo que fue clave para la globalización.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["telecomunicaciones", "internet"]

enunciado: "La globalización en la era digital se vio potenciada por el desarrollo de ___, que permitió la transferencia de datos instantánea entre continentes."

respuesta: "Internet"
tipo: "completar"
respuestas_validas:
  - "Internet"

explicacion: |
  Mientras que el telégrafo fue el precursor, fue la llegada de Internet lo que permitió la globalización de los servicios y la economía digital actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tratados", "politica"]

enunciado: "Los tratados de libre comercio buscan la eliminación de barreras para el intercambio de bienes. ¿Cuál es el objetivo principal de un tratado de este tipo?"

opciones_explicitas: ["Aumentar aranceles", "Eliminar aranceles", "Cerrar fronteras", "Controlar precios"]
respuesta: "Eliminar aranceles"
tipo: "mc"

explicacion: |
  Los tratados de libre comercio (TLC) buscan reducir o eliminar impuestos (aranceles) a la importación/exportación para facilitar el flujo comercial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["procesos", "historia"]

enunciado: "Ordene cronológicamente estos hitos que impulsaron la integración global:"

opciones_explicitas: ["Revolución Industrial (vapor)", "Expansión del Telégrafo", "Revolución Digital (Internet)"]
respuesta_orden: ["Revolución Industrial (vapor)", "Expansión del Telégrafo", "Revolución Digital (Internet)"]
tipo: "ordenar"

explicacion: |
  La globalización ha sido un proceso acumulativo: primero la máquina de vapor, luego la velocidad de la información con el telégrafo y finalmente la interconectividad digital.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["economia", "digital"]

enunciado: "En un mundo altamente globalizado digitalmente, el costo marginal de enviar información tiende a ser ___."

pasos:
  - "Considerar la digitalización de bits vs el transporte físico de papel."

tipo: "completar"
respuesta: "nulo"
respuestas_validas:
  - "nulo"
  - "cero"

explicacion: |
  La digitalización permite que el costo marginal de transmitir información sea prácticamente cero, acelerando el comercio global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["internet", "comunicacion", "globalizacion"]

respuesta: "instantánea"
tipo: completar
respuestas_validas:
  - "instantánea"
  - "inmediata"

enunciado: "La llegada de internet transformó la escala de los intercambios humanos, permitiendo que la comunicación entre personas en distintos continentes sea de carácter ___."

explicacion: |
  La digitalización eliminó las barreras temporales y geográficas, permitiendo el flujo de información en tiempo real, un pilar fundamental de la globalización moderna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["comercio", "e-commerce", "economia"]

respuesta: "comercio electrónico"
tipo: mc
opciones_explicitas: ["comercio electrónico", "transacciones bancarias", "servicios en la nube", "todos los anteriores"]

enunciado: "La era digital ha facilitado la expansión del comercio electrónico a nivel mundial, permitiendo que pequeñas empresas accedan a mercados globales sin necesidad de presencia física."

explicacion: |
  El e-commerce es uno de los motores más visibles de la globalización digital, permitiendo la integración de mercados de consumo de manera global y directa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["brecha_digital", "desigualdad", "sociedad"]

respuesta: "brecha digital"
tipo: completar
respuestas_validas:
  - "brecha digital"
  - "desigualdad tecnológica"

enunciado: "A pesar de la conectividad global, la distribución desigual de la infraestructura tecnológica ha generado una ___ que separa a las naciones desarrolladas de las que están en vías de desarrollo."

explicacion: |
  La brecha digital es un fenómeno crítico donde la falta de acceso a internet y tecnologías de la información profundiza las desigualdades económicas y sociales preexistentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["historia", "tecnologia", "evolucion"]

respuesta_orden: ["telegrafía", "computación personal", "internet de banda ancha", "redes móviles 5G"]
tipo: ordenar
opciones_explicitas: ["telegrafía", "computación personal", "internet de banda ancha", "redes móviles 5G"]

enunciado: "Ordene cronológicamente los hitos tecnológicos que han acelerado la integración global:"

explicacion: |
  La globalización ha sido un proceso de aceleración constante: desde la transmisión de señales eléctricas (telegrafía) hasta la hiperconectividad móvil actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["teoria", "sociedad", "cultura"]

respuesta: "Marshall McLuhan"
tipo: completar
tolerancia_abs: 0

enunciado: "El concepto de 'Aldea Global', que describe cómo la tecnología digital ha encogido el mundo, fue acuñado por el teórico de la comunicación ___."

explicacion: |
  McLuhan predijo que los medios de comunicación electrónicos transformarían el mundo en una unidad interconectada donde todos estaríamos presentes en la vida de los demás.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["cultura", "homogeneizacion"]

variables:
  escenario: uno_de(["occidentalización", "estandarización"])

respuesta: escenario
tipo: mc
opciones_explicitas: ["occidentalización", "estandarización", "diversificación", "aislamiento"]

enunciado: "En el contexto de la globalización digital, la difusión masiva de contenidos de un único polo cultural dominante suele provocar un proceso de {escenario} cultural."

explicacion: |
  La globalización digital facilita que patrones culturales (música, cine, valores) de potencias tecnológicas se expandan globalmente, lo que puede llevar a la pérdida de particularidades locales en favor de un modelo único.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["economia", "desigualdad"]

respuesta: "Aumenta"
tipo: completar
tolerancia_abs: 0

enunciado: "Si la brecha digital se ensancha, la desigualdad económica entre países con alta y baja conectividad tiende a ___."

pasos:
  - "Analizar la relación entre acceso a tecnología y productividad económica."
  - "Considerar el impacto de la automatización y el flujo de capitales digitales."

explicacion: |
  La falta de infraestructura digital en regiones en desarrollo impide que participen equitativamente en la economía global, exacerbando la brecha de riqueza existente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["cultura", "intercambio"]

respuesta: "hibridación"
tipo: completar
respuestas_validas:
  - "hibridación"

enunciado: "Cuando elementos de diferentes culturas se mezclan a través de las redes sociales para crear nuevas formas de expresión, ocurre un proceso de ___ cultural."

explicacion: |
  La globalización no solo homogeneiza; también permite la 'hibridación', donde lo local y lo global se fusionan para crear identidades nuevas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta_orden: ["Interconexión", "Estandarización", "Desigualdad"]
tipo: ordenar
opciones_explicitas: ["Interconexión", "Estandarización", "Desigualdad"]

enunciado: "Ordena los efectos de la globalización digital desde el proceso de comunicación hasta su impacto socioeconómico:"

explicacion: |
  Primero ocurre la interconexión técnica, lo que permite la estandarización de consumos y, finalmente, puede derivar en nuevas formas de desigualdad estructural.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["tecnologia", "poder"]

respuesta: "monopolio"

tipo: mc
opciones_explicitas: ["monopolio", "competencia", "cooperación", "neutralidad"]

enunciado: "La concentración de datos en pocas corporaciones tecnológicas globales tiende a fomentar un ___ de información."

explicacion: |
  La economía de plataformas a menudo crea estructuras de poder centralizadas donde unos pocos actores controlan el flujo de información global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["economia", "comercio"]

variables:
  datos: [["La firma de un tratado de libre comercio entre dos bloques continentales", "globalización económica"], ["La difusión masiva de una serie de televisión coreana en todo el mundo", "globalización cultural"], ["La creación de una nueva red de protocolos de comunicación para internet", "globalización tecnológica"]]
  idx: uno_de([0, 1, 2])

enunciado: "Un ejemplo de {datos[idx][0]} es un fenómeno de {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["globalización económica", "globalización cultural", "globalización tecnológica"]

explicacion: |
  El escenario describe la integración de mercados, la difusión de contenidos o la estandarización de redes, pilares de la globalización según su dimensión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tecnologia", "comunicacion"]

variables:
  datos: [["El uso de una misma aplicación de mensajería instantánea en todos los continentes", "tecnológica"], ["La adopción de modas estéticas globales a través de influencers", "cultural"], ["La fragmentación de las cadenas de suministro globales", "económica"]]
  idx: uno_de([0, 1, 2])

enunciado: "La adopción de {datos[idx][0]} representa una dimensión {datos[idx][1]} de la globalización."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["tecnológica", "cultural", "económica"]

explicacion: |
  La digitalización permite que las herramientas, las costumbres o los flujos de capital se muevan de forma casi instantánea por el planeta.
```

```
metadata:
  materia: "historia_profucha"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "La capacidad de transmitir datos de forma instantánea a través de satélites es un ejemplo de globalización ___."

respuestas_validas:
  - "tecnológica"
respuesta: "tecnológica"
tipo: completar

explicacion: |
  La infraestructura tecnológica es el soporte físico y digital que permite que las otras dimensiones (económica y cultural) operen a escala global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["procesos", "economia"]

enunciado: "Ordena el proceso de integración de un mercado digital global:"

pasos:
  - "Desarrollo de infraestructura de fibra óptica y satélites"
  - "Creación de plataformas de comercio electrónico transfronterizo"
  - "Consolidación de un mercado de consumo global interconectado"

opciones_explicitas: ["Desarrollo de infraestructura de fibra óptica y satélites", "Creación de plataformas de comercio electrónico transfronterizo", "Consolidación de un mercado de consumo global interconectado"]
respuesta_orden: ["Desarrollo de infraestructura de fibra óptica y satélites", "Creación de plataformas de comercio electrónico transfronterizo", "Consolidación de un mercado de consumo global interconectado"]
tipo: ordenar

explicacion: |
  Primero se requiere el medio (tecnología), luego la herramienta de intercambio (plataforma) y finalmente el resultado sistémico (mercado global).
```

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["cultura", "consumo"]

variables:
  datos: [["La estandarización de los menús de comida rápida en países con dietas tradicionales", "cultural"], ["El flujo de capitales especulativos entre bolsas de valores", "económica"], ["La exportación de software de código abierto para uso mundial", "tecnológica"]]
  idx: uno_de([0, 1, 2])

enunciado: "El fenómeno de {datos[idx][0]} es un ejemplo de globalización ___."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cultural", "económica", "tecnológica"]

explicacion: |
  Cuando los hábitos de consumo o valores se vuelven homogéneos a pesar de las diferencias locales, estamos ante la globalización cultural.
```

## Sección: historia-reciente-argentina (25 preguntas)

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

## Sección: internet-redes-globalizacion-digital (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["arpanet", "eeuu", "militar"]

tipo: mc
opciones_explicitas: ["Una red civil para usuarios domésticos", "Un proyecto de investigación militar y académico de EE.UU.", "Una red de televisión satelital", "Un sistema de mensajería privada para gobiernos"]
respuesta: "Un proyecto de investigación militar y académico de EE.UU."

enunciado: "ARPANET, el precursor de la internet moderna, fue concebida originalmente como ___."

explicacion: |
  ARPANET fue creada por la ARPA (Advanced Research Projects Agency) del Departamento de Defensa de EE.UU. para permitir la comunicación entre computadoras de distintas universidades y centros de investigación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["protocolo", "tcp_ip", "estandar"]

tipo: completar
respuestas_validas:
  - "TCP/IP"

enunciado: "Para que la red pasara de ser un conjunto de redes aisladas a una red global interconectada, se estandarizó el uso del protocolo ___."

explicacion: |
  El conjunto de protocolos TCP/IP permitió que redes heterogéneas se comunicaran entre sí, estableciendo el lenguaje común que permitió la expansión de la internet global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["world_wide_web", "tim_berners_lee", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Creación de ARPANET", "Desarrollo de la World Wide Web (WWW)", "Masificación de la internet comercial"]

enunciado: "Ordena cronológicamente los hitos clave en la evolución de la red:"

explicacion: |
  Primero surgió la infraestructura de ARPANET (años 60-70), luego Tim Berners-Lee desarrolló la WWW en el CERN (principios de los 90), y finalmente la red se convirtió en un servicio comercial masivo para el público general.
respuesta_orden: ["Creación de ARPANET", "Desarrollo de la World Wide Web (WWW)", "Masificación de la internet comercial"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["web_2.0", "globalizacion", "interaccion"]

variables:
  tipo_web: uno_de([["Web 1.0 (Estática)", "Web 2.0 (Social/Interactiva)"]])

tipo: mc
respuesta: tipo_web[1]
opciones_explicitas: ["Web 1.0 (Estática)", "Web 2.0 (Social/Interactiva)"]

enunciado: "La transición de una red de solo lectura a una red donde el usuario es creador de contenido se conoce como la era de la {tipo_web[1]}."

explicacion: |
  La Web 2.0 permitió la democratización de la creación de contenido a través de redes sociales, blogs y wikis, cambiando el paradigma de la comunicación digital.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["globalizacion", "impacto"]

tipo: completar
tolerancia_abs: 0
respuesta: 7

enunciado: "Si consideramos que la globalización digital ha reducido las distancias, ¿cuántos continentes están conectados hoy por la infraestructura de internet?"

explicacion: |
  Aunque la infraestructura no es perfecta en todas las zonas, la red de internet es considerada una red global que conecta los 7 continentes del planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["tim_berners_lee", "www"]

tipo: mc
opciones_explicitas: ["Un sistema de correo electrónico", "Un sistema de páginas e hipervínculos", "Un protocolo de transferencia de archivos", "Una red de satélites"]

enunciado: "La World Wide Web, propuesta por Tim Berners-Lee entre 1989 y 1991, se define fundamentalmente como un ___ que permitió la navegación masiva por la información."

respuesta: "Un sistema de páginas e hipervínculos"

explicacion: |
  Tim Berners-Lee desarrolló la Web para facilitar el intercambio de información entre científicos, utilizando hipervínculos para conectar documentos digitales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["protocolos", "html"]

tipo: completar
respuestas_validas:
  - "HTML"

enunciado: "Para que la Web funcione, se requiere de un lenguaje de marcado para estructurar el contenido llamado ___, un protocolo de transferencia llamado HTTP y un sistema de localización llamado URL."

respuesta: "HTML"

explicacion: |
  La arquitectura de la Web se basa en tres pilares: HTML (lenguaje), HTTP (protocolo) y URL (identificador).
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["internet_vs_web"]

tipo: mc
opciones_explicitas: ["Internet es la infraestructura y la Web es el servicio", "La Web es la infraestructura y Internet es el servicio", "Son términos sinónimos", "La Web es el hardware y Internet el software"]

enunciado: "Es fundamental distinguir que ___."

respuesta: "Internet es la infraestructura y la Web es el servicio"

explicacion: |
  Internet es la red global de redes (infraestructura de cables, routers, etc.), mientras que la Web es uno de los muchos servicios que corren sobre ella.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["navegadores", "mosaic"]

variables:
  escenario_idx: uno_de([0, 1])
  nombres: ["Mosaic", "WorldWideWeb"]
  descripcion: ["el primer navegador gráfico popular que impulsó la Web masiva", "el primer navegador desarrollado por Tim Berners-Lee"]

tipo: completar
respuestas_validas:
  - "Mosaic"
  - "WorldWideWeb"

enunciado: "En la historia de la navegación, {nombres[escenario_idx]} fue {descripcion[escenario_idx]}."

respuesta: nombres[escenario_idx]

explicacion: |
  Mosaic fue crucial para la democratización de la Web al introducir imágenes integradas, mientras que WorldWideWeb fue el primer navegador/editor de Berners-Lee.
```

```
metadata:
  materia: "historia_profucha"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

tipo: ordenar
opciones_explicitas: ["Propuesta de la Web (1989)", "Primer servidor web (1990)", "Lanzamiento de Mosaic (1993)"]

respuesta_orden: ["Propuesta de la Web (1989)", "Primer servidor web (1990)", "Lanzamiento de Mosaic (1993)"]

enunciado: "Ordena cronológicamente los hitos que marcaron el inicio y la explosión de la World Wide Web:"

explicacion: |
  Primero fue la idea teórica de Berners-Lee, luego la implementación técnica del primer servidor y finalmente la llegada de navegadores gráficos que permitieron su uso masivo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["comunicacion", "globalizacion"]

respuesta: "instantánea"
tipo: completar
respuestas_validas:
  - "instantánea"
  - "inmediata"

enunciado: "La transición de la comunicación analógica a la digital permitió que la transmisión de información entre continentes fuera de carácter ___________."

explicacion: |
  Internet eliminó las barreras temporales, permitiendo la comunicación en tiempo real, lo que es un pilar de la globalización moderna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["comercio", "economia"]

variables:
  escenario: uno_de([["Amazon", "gigante del retail"], ["Alibaba", "líder en B2B"], ["eBay", "pionero de subastas"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Amazon", "Alibaba", "eBay"]

enunciado: "El comercio electrónico permitió que empresas como {escenario[0]} ({escenario[1]}) facilitaran el acceso a mercados globales, transformando la economía mundial."

explicacion: |
  El e-commerce permitió que pequeñas y grandes empresas vendieran productos sin fronteras físicas, acelerando la integración de mercados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["redes_sociales", "sociedad"]

respuesta: "social"
tipo: mc
opciones_explicitas: ["social", "política", "económica"]

enunciado: "Más allá de lo comercial, las redes sociales crearon una nueva dimensión de interconexión de tipo ___________, permitiendo movimientos culturales transnacionales."

explicacion: |
  Las redes sociales permitieron que la cultura y las ideas se difundieran globalmente de forma orgánica, creando una identidad digital compartida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["procesos", "digitalizacion"]

respuesta_orden: ["Conectividad", "Plataformas", "Ecosistemas"]
tipo: ordenar
opciones_explicitas: ["Conectividad", "Plataformas", "Ecosistemas"]

enunciado: "Ordena cronológicamente la evolución de la digitalización en la globalización: primero la infraestructura, luego los servicios y finalmente la integración total."

explicacion: |
  La globalización digital siguió un orden: primero cables y satélites (conectividad), luego sitios web y apps (plataformas) y finalmente la integración de la vida cotidiana en la red (ecosistemas).
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["economia", "costos"]

respuesta: "cero"
tipo: completar
tolerancia_abs: 0

enunciado: "En términos teóricos de economía digital, la capacidad de replicar y transmitir información a través de internet ha tendido hacia un costo marginal de ___________."

explicacion: |
  La digitalización reduce drásticamente el costo de distribución de información, lo que permite que la globalización sea extremadamente eficiente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["brecha_digital", "desigualdad"]

respuesta: "brecha digital"
tipo: completar
respuestas_validas:
  - "brecha digital"

enunciado: "El término que describe la desigualdad en el acceso, uso y capacidades para utilizar las Tecnologías de la Información y la Comunicación (TIC) se denomina ___."

explicacion: |
  La brecha digital no solo se refiere a la falta de infraestructura física (hardware/conexión), sino también a la falta de habilidades digitales (brecha de uso) y de calidad en el aprovechamiento de la información.
```

```
metadata:
  materia: "historia_profucha"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["dimensiones", "tecnologia"]

respuesta: "Brecha de uso"
tipo: mc
opciones_explicitas: ["Brecha de acceso", "Brecha de uso", "Brecha de competencias"]

enunciado: "Cuando una persona tiene un dispositivo y conexión, pero no posee las habilidades cognitivas para navegar de forma crítica o productiva en la red, estamos ante una: ___"

explicacion: |
  La brecha de uso o de competencias se refiere a la capacidad real de transformar la información digital en conocimiento útil, independientemente de tener o no el dispositivo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["globalizacion", "desarrollo"]

variables:
  caso: uno_de([["países en desarrollo", "aumenta la desigualdad"], ["países desarrollados", "se consolida su ventaja"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["aumenta la desigualdad", "se consolida su ventaja"]

enunciado: "En el contexto de la globalización digital, la asimetría tecnológica suele provocar que, en los {caso[0]}, el efecto de la brecha tecnológica sea que:"

explicacion: |
  La globalización digital puede actuar como un motor de desarrollo o como un mecanismo de exclusión, dependiendo de la capacidad de integración tecnológica de cada nación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["factores", "sociedad"]

respuesta: "Todas las anteriores"
tipo: mc
opciones_explicitas: ["Geográfica", "Económica", "Social", "Todas las anteriores"]

enunciado: "¿Cuál de los siguientes factores es un determinante clave en la creación de la brecha digital?"

pasos:
  - "Analizar la infraestructura disponible en la zona."
  - "Considerar el poder adquisitivo de la población."
  - "Evaluar el nivel educativo y acceso a servicios básicos."

explicacion: |
  La brecha digital es un fenómeno multidimensional que involucra factores geográficos (zonas rurales vs urbanas), económicos (costo de equipos/datos) y sociales (educación).
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["evolucion", "historia"]

respuesta_orden: ["Brecha de infraestructura", "Brecha de acceso", "Brecha de uso", "Brecha de apropiación"]
tipo: ordenar
opciones_explicitas: ["Brecha de infraestructura", "Brecha de acceso", "Brecha de uso", "Brecha de apropiación"]

enunciado: "Ordena cronológicamente las etapas en las que se ha manifestado la brecha digital a medida que la tecnología avanzaba en la sociedad global:"

explicacion: |
  Primero la brecha se centraba en la existencia de cables y redes (infraestructura), luego en quién podía pagar el servicio (acceso), después en quién sabía usarlo (uso) y finalmente en quién puede generar valor con ello (apropiación).
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["arpanet", "historia"]

variables:
  datos: [["ARPANET", "1969"], ["TCP/IP", "1983"], ["WWW", "1989"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1969", "1983", "1989"]

enunciado: "El hito tecnológico representado por {datos[idx][0]} ocurrió en el año ___."

explicacion: |
  El año de {datos[idx][0]} marcó un punto de inflexión en la historia de las telecomunicaciones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["protocolos", "tcp_ip"]

variables:
  datos: [["TCP/IP", "estandarizar la comunicación"], ["HTTP", "navegar por la web"], ["DNS", "resolver nombres"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "estandarizar la comunicación"
  - "navegar por la web"
  - "resolver nombres"

enunciado: "La implementación de {datos[idx][0]} tuvo como objetivo principal ___."

explicacion: |
  {datos[idx][0]} fue fundamental para el funcionamiento de la red tal como la conocemos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["web", "tim_berners_lee"]

variables:
  datos: [["La creación de la World Wide Web", "Tim Berners-Lee"], ["La llegada de Google", "Larry Page"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Tim Berners-Lee", "Larry Page"]

enunciado: "¿Quién es el autor de {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]} fue impulsada por {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["ordenar", "historia"]

variables:
  secuencia: [["ARPANET", "TCP/IP", "WWW", "Redes Sociales"]]

respuesta_orden: secuencia[0]
tipo: ordenar
opciones_explicitas: ["ARPANET", "TCP/IP", "WWW", "Redes Sociales"]

enunciado: "Ordena cronológicamente los siguientes hitos de la era digital:"

pasos:
  - "Identifica el primer paquete de datos enviado."
  - "Ubica la estandarización de protocolos."
  - "Ubica la creación de la web."
  - "Ubica el auge de la interacción social."

explicacion: |
  El orden correcto refleja la evolución desde la infraestructura militar hasta la cultura social.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["tecnologia", "acceso"]

variables:
  datos: [["Dial-up", "lenta"], ["Banda Ancha", "rápida"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "lenta"
  - "rápida"

enunciado: "La conexión de tipo {datos[idx][0]} se caracterizaba por ser ___."

explicacion: |
  La transición hacia la {datos[idx][0]} transformó el consumo de contenido global.
```

