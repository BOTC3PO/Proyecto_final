# Examen jefe — [PENDIENTE #697]

> Logro #697. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **123 preguntas totales** en 5/5 secciones.

---

## Sección: revolucion-de-mayo (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["mayo_1810", "virrey", "independencia"]

respuesta: "Baltasar Hidalgo de Cisneros"
tipo: completar
respuestas_validas:
  - "Baltasar Hidalgo de Cisneros"

enunciado: "El virrey que fue depuesto tras la Revolución de Mayo fue ___."

explicacion: |
  La Junta de Gobierno de 1810 decidió que el poder español ya no era legítimo ante la captura del Rey Fernando VII por Napoleón, lo que llevó a la destitución de Cisneros.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["primera_junta", "gobierno"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["Cornelio Saavedra", "Presidente"], ["Mariano Moreno", "Secretario"], ["Juan José Paso", "Secretario"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Presidente", "Secretario", "Vocal"]

enunciado: "En la Primera Junta de Gobierno, el rol de {datos[idx][0]} era el de ___."

explicacion: |
  La Primera Junta estaba integrada por un presidente y varios secretarios y vocales. {datos[idx][0]} ocupaba el cargo de {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["causas", "contexto"]

respuesta: "Napoleón Bonaparte"
tipo: completar
respuestas_validas:
  - "Napoleón Bonaparte"

enunciado: "Un factor externo crucial que aceleró la crisis de legitimidad en el Virreinato fue la invasión de ___ a España."

explicacion: |
  La invasión napoleónica a la península ibérica y la captura del Rey Fernando VII crearon un vacío de poder que las colonias utilizaron para reclamar autonomía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["cronologia", "eventos"]

respuesta_orden: ["Cabildo Abierto", "Junta de Gobierno", "Primera Junta"]
tipo: ordenar
opciones_explicitas: ["Cabildo Abierto", "Junta de Gobierno", "Primera Junta"]

enunciado: "Ordene cronológicamente los hitos de la semana de mayo de 1810:"

explicacion: |
  Primero se debatió en el Cabildo Abierto, luego se conformó la Junta de Gobierno y finalmente se consolidó la Primera Junta con sus miembros.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["caracter", "gobierno"]

respuesta: "fiel"
tipo: mc
opciones_explicitas: ["fiel", "rebelde", "monárquico"]

enunciado: "Inicialmente, la Primera Junta proclamó su autoridad como ___ a la soberanía de Fernando VII (la llamada 'máscara de Fernando')."

explicacion: |
  Se utilizó la estrategia de la "máscara de Fernando VII", donde se gobernaba en nombre del rey cautivo para evitar represalias directas de España mientras se ganaba autonomía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["contexto", "napoleon", "monarquia"]

respuesta: "Napoleón Bonaparte"
tipo: completar
respuestas_validas:
  - "Napoleón Bonaparte"
  - "Napoleón"

enunciado: "La invasión de ___ a España en 1808 provocó una crisis de legitimidad que debilitó el control sobre las colonias americanas."

explicacion: |
  La invasión napoleónica a España y la captura del rey Fernando VII crearon un vacío de poder que las élites criollas utilizaron para cuestionar la autoridad colonial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["causas", "autoridad", "colonia"]

opciones_explicitas: ["Se fortaleció el control absoluto de la metrópoli", "Se produjo un debilitamiento de la autoridad real sobre las colonias", "Se unificaron los ejércitos de España y América"]
respuesta: "Se produjo un debilitamiento de la autoridad real sobre las colonias"
tipo: mc

enunciado: "¿Cuál fue la consecuencia directa de la crisis de la monarquía española en 1808 respecto a sus territorios en América?"

explicacion: |
  Al no haber un rey legítimo en el trono, las autoridades coloniales perdieron su fuente de legitimidad, lo que permitió que los cabildos empezaran a reclamar autonomía.
```

```
metadata:
  materia: "historia_profucha"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cronologia", "causas"]

opciones_explicitas: ["Invasión napoleónica", "Crisis de la monarquía española", "Revolución de Mayo"]
respuesta_orden: ["Invasión napoleónica", "Crisis de la monarquía española", "Revolución de Mayo"]
tipo: ordenar

enunciado: "Ordena cronológicamente los sucesos que desencadenaron el proceso revolucionario:"

explicacion: |
  Primero ocurrió la invasión de Napoleón, esto generó la crisis de legitimidad en España y finalmente ese vacío de poder facilitó la Revolución de Mayo en el Virreinato.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["soberania", "derecho"]

respuesta: "La soberanía recae en el pueblo"
tipo: mc

opciones_explicitas: ["La autoridad reside en el Rey", "La soberanía recae en el pueblo"]

enunciado: "Ante la ausencia del rey, los criollos aplicaron la idea de que la soberanía debe volver al ___."

explicacion: |
  El concepto de 'retroversión de la soberanía' sostenía que, ante la falta del monarca, el poder volvía al pueblo, lo que justificó la formación de juntas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["causas", "impacto"]

respuesta: 1
tipo: completar
tolerancia_abs: 0

enunciado: "Si la invasión napoleónica debilitó la autoridad de España, la probabilidad de una revolución en América fue (0: nula / 1: alta). Indica el número de la opción correcta."

explicacion: |
  La debilidad de la metrópoli fue el catalizador fundamental que permitió que las aspiraciones de autonomía se transformaran en una revolución política.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["primera_junta", "saavedra", "mayo"]

respuesta: "Cornelio Saavedra"
tipo: completar
respuestas_validas:
  - "Cornelio Saavedra"

enunciado: "La Primera Junta, conformada tras la Revolución de Mayo, fue presidida por ___."

explicacion: |
  La Primera Junta fue el primer gobierno patrio, presidido por Cornelio Saavedra, quien representaba el ala más conservadora del cabildo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["moreno", "secretario"]

opciones_explicitas: ["Mariano Moreno", "Juan José Paso", "Manuel Belgrano", "Fidencio de la Riva"]
respuesta: "Mariano Moreno"
tipo: mc

enunciado: "En la Primera Junta, ¿quién ocupaba el cargo de secretario?"

explicacion: |
  Mariano Moreno fue el secretario de la Primera Junta, conocido por su pensamiento radical y su influencia en la redacción de documentos políticos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["mascara_de_fecundidad", "fernando_vii"]

respuesta: "Fernando VII"
tipo: completar
respuestas_validas:
  - "Fernando VII"

enunciado: "Debido a la estrategia política de la época, la Primera Junta gobernaba en nombre del rey depuesto, un fenómeno conocido como la 'máscara de ___'."

explicacion: |
  La 'máscara de Fernando VII' era una maniobra política para reconocer la autoridad del rey cautivo ante las potencias europeas, mientras se ejercía el autogobierno local.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["integrantes", "primera_junta"]

variables:
  idx: uno_de([0, 1])
  tabla: [["Cornelio Saavedra", "Cornelio Saavedra"], ["Mariano Moreno", "Mariano Moreno"]]

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["Cornelio Saavedra", "Mariano Moreno", "Juan José Paso", "Domingo Saavedra"]

enunciado: "Seleccione el nombre del integrante de la Primera Junta que corresponde al escenario actual."

pasos:
  - "Identifique el nombre del presidente o secretario según el caso sorteado."

explicacion: |
  La Primera Junta estaba integrada por miembros del cabildo y militares; Saavedra era el presidente y Moreno el secretario.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["orden_gobiernos", "etapas"]

opciones_explicitas: ["Primera Junta", "Junta Grande", "Directorio"]
respuesta_orden: ["Primera Junta", "Junta Grande", "Directorio"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de los gobiernos patrios tras la Revolución de Mayo, desde el primero hasta el último de esta lista."

explicacion: |
  El proceso comenzó con la Primera Junta (1810), siguió con la Junta Grande (tras la incorporación de diputados del interior) y culminó con el Directorio (poder ejecutivo unipersonal).
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["revolucion_de_mayo", "independencia", "procesos_historicos"]

respuesta: "1810"
tipo: "input"
tolerancia_abs: 0

enunciado: "Aunque la independencia se declaró formalmente en 1816, la Revolución de Mayo ocurrió en el año ____."

explicacion: |
  La Revolución de Mayo de 1810 marcó el inicio del proceso de ruptura con el poder colonial, pero no fue el fin del camino hacia la soberanía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cabildo_abierto", "soberania"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["La Primera Junta", "el gobierno de la Junta"], ["El Primer Congreso", "la autoridad del Congreso"]]

opciones_explicitas: ["gobernanza local", "soberanía absoluta", "restitución de la monarquía española", "subordinación a la corona británica"]
respuesta: "gobernanza local"
tipo: "mc"

enunciado: "Tras la Revolución de Mayo, el objetivo inmediato de las autoridades locales era establecer la {escenarios[escenario_idx][0]} para gestionar los asuntos de la región, pero esto no significaba una independencia total inmediata."

explicacion: |
  En 1810 se buscaba la autonomía para gobernarse a sí mismos (frente a la crisis de la corona), pero legalmente se mantenía una ambigüedad respecto a la soberanía absoluta que se alcanzaría en 1816.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

tipo: ordenar
opciones_explicitas: ["Revolución de Mayo", "Congreso de Tucumán", "Declaración de la Independencia"]
respuesta_orden: ["Revolución de Mayo", "Congreso de Tucumán", "Declaración de la Independencia"]

enunciado: "Ordena cronológicamente los hitos del proceso de emancipación argentina:"

explicacion: |
  El proceso fue gradual: primero la ruptura del vínculo con España (1810), luego la organización política en el Congreso (1816) y finalmente la declaración formal de la independencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["causas", "consecuencias"]

respuesta: "proceso"
tipo: "completar"
respuestas_validas:
  - "proceso"
  - "etapa"
  - "punto de partida"

enunciado: "La Revolución de Mayo no debe entenderse como el fin de la lucha, sino como el ___ que dio inicio a una compleja serie de conflictos y debates políticos."

explicacion: |
  Es un error histórico considerar a mayo de 1810 como la independencia definitiva; fue el motor que desencadenó un proceso de décadas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["soberania", "debate"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["la legitimidad del Rey", "la autoridad de las juntas"], ["la soberanía popular", "la voluntad de los pueblos"]]
  respuestas: [["la legitimidad del Rey", "la autoridad de las juntas"], ["la soberanía popular", "la voluntad de los pueblos"]]

opciones_explicitas: ["la legitimidad del Rey", "la autoridad de las juntas", "la soberanía popular", "la voluntad de los pueblos"]
respuesta: "la autoridad de las juntas"
tipo: "mc"

enunciado: "En el debate post-revolucionario, la gran incógnita era si la soberanía residía en {casos[caso_idx][0]} o si, ante la ausencia del monarca, la autoridad pasaba a ser de {casos[caso_idx][1]}."

explicacion: |
  El debate entre la 'retroversión de la soberanía' (el poder vuelve al pueblo) y la lealtad a la corona fue el eje central de las discusiones iniciadas en mayo de 1810.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["cabildo", "mayo_1810"]

respuesta: "Juan José Castelli"
tipo: mc
opciones_explicitas: ["Juan José Castelli", "Cornelio Saavedra", "Mariano Moreno", "Manuel Belgrano"]

enunciado: "En el Cabildo Abierto del 22 de mayo de 1810, ¿qué figura fue uno de los principales oradores defendiendo la soberanía del pueblo frente al virreinato?"

explicacion: |
  Juan José Castelli fue conocido como 'el orador de la Revolución', defendiendo la postura de que el poder volvía al pueblo ante la caída de la Junta de Sevilla.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["primera_junta", "gobierno"]

variables:
  datos: [["Presidente", "Cornelio Saavedra"], ["Secretario", "Mariano Moreno"], ["Secretario", "Juan José Paso"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Cornelio Saavedra", "Mariano Moreno", "Juan José Paso", "Baltasar Hidalgo de Cisneros"]

enunciado: "La Primera Junta de Gobierno, establecida tras la Revolución de Mayo, tenía una estructura con un Presidente y dos Secretarios. Si el rol seleccionado es {datos[idx][0]}, ¿quién ocupaba dicho cargo?"

explicacion: |
  La Primera Junta estaba integrada por Saavedra (Presidente), Moreno y Paso (Secretarios), junto a Castelli, Belgrano y otros como vocales.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["virrey", "cisneros"]

respuesta: "Baltasar Hidalgo de Cisneros"
tipo: completar
respuestas_validas:
  - "Baltasar Hidalgo de Cisneros"
  - "Cisneros"

enunciado: "El proceso revolucionario de mayo de 1810 culminó con la destitución de ___. "

explicacion: |
  Baltasar Hidalgo de Cisneros fue el último virrey enviado por la corona española que gobernó el territorio antes de la formación de la Primera Junta.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cronologia", "mayo"]

respuesta_orden: ["Llegada de la Primera Junta", "Establecimiento de la Junta de Gobierno", "Cabildo Abierto del 22 de mayo", "Junta de los 25 de mayo"]
tipo: ordenar
opciones_explicitas: ["Llegada de la Primera Junta", "Establecimiento de la Junta de Gobierno", "Cabildo Abierto del 22 de mayo", "Junta de los 25 de mayo"]

enunciado: "Ordena cronológicamente los hitos clave de la Semana de Mayo de 1810:"

explicacion: |
  La secuencia comenzó con la crisis de legitimidad, el debate en el Cabildo, la formación de la Junta de Gobierno y finalmente la instauración de la Primera Junta.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["prensa", "ideologia"]

respuesta: "La Gazeta de Buenos Ayres"
tipo: completar
respuestas_validas:
  - "La Gazeta de Buenos Ayres"
  - "La Gaceta de Buenos Aires"

enunciado: "Durante el proceso revolucionario, la difusión de ideas fue vital. Se destaca que la principal publicación de ideas revolucionarias fue la ___. "

explicacion: |
  La Gazeta de Buenos Ayres fue el primer periódico de la ciudad, utilizado para difundir los ideales de la revolución.
```

## Sección: electrificacion-fabrica-hogar (23 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["revolucion_industrial", "energia"]

respuesta: "motor eléctrico"
tipo: completar
respuestas_validas:
  - "motor eléctrico"

enunciado: "A finales del siglo XIX, la transición de la energía de vapor a la energía eléctrica en las fábricas fue posible gracias a la invención y adopción masiva del ___."

explicacion: |
  El motor eléctrico permitió que la energía no tuviera que transmitirse mediante complejos sistemas de correas y ejes conectados a una única máquina de vapor central, permitiendo una distribución más flexible de la fuerza motriz.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["iluminacion", "hogar"]

respuesta: "luz de gas"
tipo: mc
opciones_explicitas: ["luz de gas", "luz eléctrica", "luz de vela"]

enunciado: "Antes de la llegada de la red eléctrica doméstica, ¿cuál era la fuente de iluminación principal en los hogares urbanos de finales del siglo XIX?"

explicacion: |
  La llegada de la luz eléctrica en los hogares cambió drásticamente los hábitos de vida, permitiendo actividades nocturnas seguras y eliminando el riesgo de incendios por llamas abiertas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["secuencia", "desarrollo"]

respuesta_orden: ["máquinas de vapor", "motores eléctricos industriales", "iluminación doméstica", "electrodomésticos"]
tipo: ordenar
opciones_explicitas: ["máquinas de vapor", "motores eléctricos industriales", "iluminación doméstica", "electrodomésticos"]

enunciado: "Ordene cronológicamente la evolución del uso de la energía en la sociedad desde la Primera Revolución Industrial hasta la consolidación del hogar moderno:"

explicacion: |
  La electrificación comenzó en la industria para optimizar la producción, luego se extendió a la iluminación urbana y doméstica, y finalmente permitió la aparición de los electrodomésticos que definieron la vida moderna.
```

```
metadata:
  materia: "historia_profucha"
  tema: "electrificacion_fabrica_hogar"
  nivel: "avanzado"
  tags: ["corrientes", "tesla", "edison"]

tipo: mc
opciones_explicitas: ["Corriente Continua (DC)", "Corriente Alterna (AC)"]
respuesta: "Corriente Continua (DC)"

enunciado: "En la 'Guerra de las Corrientes', ¿qué tipo de corriente defendía Thomas Edison para su sistema de distribución?"

explicacion: |
  Edison promovía la Corriente Continua (DC), mientras que Tesla y Westinghouse impulsaban la Corriente Alterna (AC), que permitía transportar electricidad a largas distancias con menos pérdida de energía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["hogar", "tecnologia"]

respuesta: "iluminación"
tipo: completar
respuestas_validas:
  - "iluminación"

enunciado: "El primer gran cambio que experimentaron los hogares con la llegada de la red eléctrica fue la ___."

explicacion: |
  Aunque hoy asociamos la electricidad con la cocina o el lavado, el primer uso masivo y transformador en las viviendas fue la sustitución de la luz de gas o aceite por la luz eléctrica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["revolucion_industrial", "energia"]

respuesta: "centralizada"
tipo: completar
respuestas_validas:
  - "centralizada"

enunciado: "A diferencia de los motores eléctricos que permiten una distribución flexible, el sistema de máquinas de vapor dependía de una fuente de energía ___."

explicacion: |
  Las máquinas de vapor requerían una ubicación centralizada y un complejo sistema de ejes y correas para transmitir movimiento a toda la fábrica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["eficiencia", "motores"]

respuesta: "mayor flexibilidad"
tipo: mc
opciones_explicitas: ["mayor flexibilidad", "mayor eficiencia", "menor costo de instalación"]

enunciado: "Al reemplazar la transmisión por correas de cuero de una máquina de vapor por motores eléctricos individuales en cada máquina, se logra principalmente:"

explicacion: |
  La electrificación permitió que cada máquina tuviera su propio motor, eliminando la necesidad de mantener todo el sistema funcionando si solo una máquina se necesitaba.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["transicion", "tecnologia"]

respuesta: "eléctrica"
tipo: completar
respuestas_validas:
  - "eléctrica"

enunciado: "La transición de la energía mecánica a la energía ___ permitió que las fábricas dejaran de depender de la proximidad de fuentes de agua o carbón masivo para sus ejes de transmisión."

explicacion: |
  La electricidad permitió que la energía se transportara a través de cables, permitiendo que las fábricas se ubicaran en cualquier lugar, no solo cerca de ríos o minas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "avanzado"
  tags: ["cronologia", "procesos"]

opciones_explicitas: ["Implementación de máquinas de vapor", "Instalación de redes eléctricas", "Uso de motores eléctricos individuales", "Sistemas de correas y ejes centrales"]
respuesta_orden: ["Implementación de máquinas de vapor", "Sistemas de correas y ejes centrales", "Instalación de redes eléctricas", "Uso de motores eléctricos individuales"]
tipo: ordenar

enunciado: "Ordene cronológicamente la evolución de la potencia industrial desde la Primera hasta la Segunda Revolución Industrial:"

explicacion: |
  Primero se usaba el vapor directamente, luego se intentó distribuir ese movimiento mediante correas (lo cual era ineficiente), y finalmente la electricidad permitió la independencia de cada máquina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["arquitectura", "espacio"]

respuesta: "espacios más abiertos y seguros"
tipo: mc
opciones_explicitas: ["espacios más abiertos y seguros", "espacios saturados de ejes y correas", "espacios con mayor ruido mecánico"]

enunciado: "Comparado con el sistema de vapor, el uso de motores eléctricos individuales en cada máquina resultó en:"

explicacion: |
  Al eliminar los enormes ejes de transmisión que atravesaban los techos y suelos de las fábricas, el espacio se volvió más seguro, limpio y versátil.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_hogar"
  nivel: "basico"
  tags: ["iluminacion", "siglo_XX"]

respuesta: "bombilla"
tipo: mc
opciones_explicitas: ["vela", "lámpara de aceite", "bombilla", "gas"]

enunciado: "Antes de la electrificación masiva, la iluminación nocturna en los hogares dependía de fuentes de combustión. La llegada de la _______ permitió extender las actividades humanas durante la noche de forma segura."

explicacion: |
  La bombilla incandescente permitió que los hogares dejaran de depender de la luz de gas o aceite, reduciendo riesgos de incendio y mejorando la calidad del aire interior.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_hogar"
  nivel: "intermedio"
  tags: ["electrodomesticos", "vida_cotidiana"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [["lavadora", "lavado de ropa"], ["refrigerador", "conservación de alimentos"]]

respuesta: escenario[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "lavado de ropa"
  - "conservación de alimentos"

enunciado: "La adopción de la {escenario[escenario_idx][0]} transformó radicalmente el ___."

pasos:
  - "Identifica el electrodoméstico seleccionado."
  - "Determina qué actividad doméstica fue impactada directamente."

explicacion: |
  La {escenario[escenario_idx][0]} fue clave para la automatización de tareas que antes requerían mucho esfuerzo manual o tiempo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_hogar"
  nivel: "intermedio"
  tags: ["secuencia", "tecnologia"]

respuesta_orden: ["iluminación", "refrigeración", "comunicación"]
tipo: ordenar
opciones_explicitas: ["iluminación", "refrigeración", "comunicación"]

enunciado: "Ordena cronológicamente la adopción masiva de tecnologías eléctricas en los hogares del siglo XX, desde la más temprana a la más tardía."

explicacion: |
  Primero se electrificaron las ciudades para la luz (iluminación), luego los grandes electrodomésticos de cocina (refrigeración) y finalmente los dispositivos de entretenimiento y comunicación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["edison", "corriente_continua"]

respuesta: "corriente continua"
tipo: completar
respuestas_validas:
  - "corriente continua"

enunciado: "Thomas Edison impulsó un sistema de distribución basado en la ___."

explicacion: |
  Edison defendía la corriente continua (DC), que era difícil de transportar a largas distancias debido a la caída de tensión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["tesla", "westinghouse", "corriente_alterna"]

respuesta: "Tesla y Westinghouse"
tipo: mc
opciones_explicitas: ["Tesla y Westinghouse", "Edison y General Electric"]

enunciado: "El sistema de corriente alterna, que finalmente se impuso para la distribución a larga distancia, fue promovido principalmente por ___."

explicacion: |
  Nikola Tesla y George Westinghouse desarrollaron el sistema de corriente alterna (AC), permitiendo elevar la tensión con transformadores para el transporte eficiente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["tecnologia", "distribucion"]

respuesta: "transformador"
tipo: completar
respuestas_validas:
  - "transformador"

enunciado: "La principal ventaja técnica de la corriente alterna sobre la continua en el siglo XIX era la capacidad de modificar el voltaje mediante el uso de un ___."

explicacion: |
  El transformador permite elevar el voltaje para reducir las pérdidas por calor en los cables durante el transporte a largas distancias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["personajes"]

respuesta_orden: ["Edison", "Tesla", "Westinghouse"]
tipo: ordenar

opciones_explicitas: ["Edison", "Tesla", "Westinghouse"]

enunciado: "Ordena cronológicamente la relevancia de estos actores en el desarrollo de los estándares de corriente (de la corriente continua a la alterna dominante):"

explicacion: |
  Edison fue el pionero de la DC, mientras que Tesla y Westinghouse lideraron la revolución de la AC que permitió la electrificación masiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "avanzado"
  tags: ["tecnologia", "comparativa"]

variables:
  datos: [[0, "Alterna", "Larga distancia"], [1, "Continua", "Corta distancia"]]
  idx: uno_de([0, 1])
  tipo_corriente: datos[idx][1]
  distancia: datos[idx][2]

respuesta: distancia
tipo: mc
opciones_explicitas: ["Larga distancia", "Corta distancia"]

enunciado: "Si comparamos el sistema de {tipo_corriente}, este fue históricamente preferido para la distribución de ___."

explicacion: |
  La corriente alterna (AC) permite el uso de transformadores para elevar la tensión, lo que minimiza pérdidas y permite llevar energía a ciudades lejanas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["industria", "motor"]

variables:
  datos: [["motor de inducción", "fábrica"], ["bombilla incandescente", "hogar"], ["telar eléctrico", "fábrica"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["fábrica", "hogar"]

enunciado: "La implementación del {datos[idx][0]} transformó radicalmente el ámbito de la: ___"

explicacion: |
  El {datos[idx][0]} fue un pilar fundamental para la automatización en la {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "basico"
  tags: ["hogar", "iluminacion"]

respuesta: "hogar"
tipo: completar
respuestas_validas:
  - "hogar"

enunciado: "La llegada de la luz eléctrica permitió extender las actividades nocturnas en el ___."

explicacion: |
  La luz eléctrica permitió que el hogar cambiara sus hábitos de descanso y ocio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["produccion", "transicion"]

respuesta: "fábrica"
tipo: mc
opciones_explicitas: ["fábrica", "hogar"]

enunciado: "La electrificación de la línea de montaje fue clave para la producción en serie en la: ___"

explicacion: |
  La línea de montaje es un ejemplo clásico de la mecanización en la fábrica.
```

```
metadata:
  materia: "historia_profucha"
  tema: "electrificacion_fabrica_hogar"
  nivel: "avanzado"
  tags: ["orden", "progreso"]

respuesta_orden: ["generación central", "distribución en la red", "consumo final"]
tipo: ordenar
opciones_explicitas: ["generación central", "distribución en la red", "consumo final"]

enunciado: "Ordena el proceso técnico necesario para que la electricidad llegue desde la central hasta un electrodoméstico:"

explicacion: |
  El flujo eléctrico sigue la secuencia: generación central -> distribución en la red -> consumo final.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["tecnologia", "clasificacion"]

variables:
  datos: [["electrodoméstico", "hogar"], ["transformador industrial", "fábrica"], ["enchufe doméstico", "hogar"]]
  idx: uno_de([0,1,2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Un {datos[idx][0]} es un invento destinado principalmente al ___."

explicacion: |
  El uso de un {datos[idx][0]} es típico del ámbito del {datos[idx][1]}.
```

## Sección: guerras-de-independencia-argentina (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["tucuman", "independencia"]

tipo: mc
opciones_explicitas: ["San Martín", "Manuel Belgrano", "José de San Martín", "Juan Martín de Pueyrredón"]
respuesta: "Juan Martín de Pueyrredón"

enunciado: "En el Congreso de Tucumán de 1816, ¿qué importante figura política fue elegida Director Supremo para liderar el proceso revolucionario?"

explicacion: |
  El Congreso de Tucumán eligió a Juan Martín de Pueyrredón como Director Supremo para consolidar la autoridad del gobierno central.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["declaracion", "tucuman"]

tipo: completar
respuestas_validas:
  - "Provincias Unidas en Sudamérica"

enunciado: "El acta de la independencia proclamada el 9 de julio de 1816 declaró la emancipación de las ___."

explicacion: |
  El acta proclamó la independencia de las Provincias Unidas en Sudamérica respecto a la monarquía española.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["contexto", "monarquia"]

tipo: mc
opciones_explicitas: ["Monarquía Española", "República Francesa", "Imperio Británico", "Monarquía Absoluta"]
respuesta: "Monarquía Española"

enunciado: "La declaración de independencia buscaba romper definitivamente los vínculos de dependencia con la ___."

explicacion: |
  El objetivo principal era la ruptura total con la corona española y su sistema monárquico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["belgrano", "congreso"]

tipo: mc
opciones_explicitas: ["Manuel Belgrano", "Mariano Moreno", "Cornelio Saavedra", "Bernardino Rivadavia"]
respuesta: "Manuel Belgrano"

enunciado: "¿Qué importante militar y creador de la bandera fue convocado por el Congreso de Tucumán para exponer su opinión sobre la forma de gobierno a adoptar?"

explicacion: |
  Manuel Belgrano no era diputado del Congreso, pero fue invitado a dar su testimonio; allí propuso una monarquía constitucional con un descendiente de los incas, una idea que finalmente no prosperó.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["orden", "procesos"]

tipo: ordenar
opciones_explicitas: ["Revolución de Mayo", "Primer Triunvirato", "Batalla de San Lorenzo", "Congreso de Tucumán"]

enunciado: "Ordena cronológicamente los siguientes hitos clave del proceso de independencia argentina:"

explicacion: |
  El orden correcto es: Revolución de Mayo (1810), Primer Triunvirato (1812), Batalla de San Lorenzo (febrero de 1813) y Congreso de Tucumán (1816).

respuesta_orden: ["Revolución de Mayo", "Primer Triunvirato", "Batalla de San Lorenzo", "Congreso de Tucumán"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["san_martin", "cruce_de_los_andes", "independencia"]

respuesta: "Chile"
tipo: mc
opciones_explicitas: ["Chile", "Perú", "Bolivia", "Uruguay"]

enunciado: "El General José de San Martín organizó el Cruce de los Andes con el objetivo principal de liberar el territorio de {pais} para asegurar la independencia de las Provincias Unidas."

variables:
  pais: "Chile"

explicacion: |
  La estrategia de San Martín consistía en cruzar la cordillera para liberar Chile y, desde allí, organizar una campaña marítima hacia el Perú, el centro del poder realista en Sudamérica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["logistica", "ejercito_de_los_andes"]

respuesta: 5000
tipo: completar
tolerancia_abs: 500

enunciado: "Se estima que el Ejército de los Andes contaba con aproximadamente {cantidad} soldados durante la campaña de 1817."

pasos:
  - "Calcular el número aproximado de efectivos según las crónicas históricas."

variables:
  cantidad: "5000"

explicacion: |
  El Ejército de los Andes estaba compuesto por aproximadamente 5000 hombres, entre soldados, oficiales y auxiliares, que enfrentaron condiciones climáticas extremas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["estrategia", "plan_continental"]

respuesta_orden: ["Guerra de Zapa", "Cruce de los Andes", "Batalla de Chacabuco"]
tipo: ordenar
opciones_explicitas: ["Guerra de Zapa", "Cruce de los Andes", "Batalla de Chacabuco"]

enunciado: "Ordene cronológicamente las fases de la campaña libertadora de San Martín hacia el oeste:"

explicacion: |
  Primero se realizó la 'Guerra de Zapa' (espionaje y desinformación), luego el cruce físico de la cordillera y finalmente el enfrentamiento decisivo en la Batalla de Chacabuco.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["plan_continental", "peru"]

respuesta: "Perú"
tipo: completar
respuestas_validas:
  - "Perú"

enunciado: "Tras la liberación de Chile, San Martín comprendió que la independencia de la región solo sería segura si lograba expulsar a los españoles de ___."

explicacion: |
  El Plan Continental de San Martín contemplaba que el núcleo del poder español estaba en el Virreinato del Perú, por lo que la campaña debía dirigirse hacia ese territorio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["batalla_de_chacabuco", "victoria"]

respuesta: verdadero
tipo: vf
enunciado: "La victoria en la Batalla de Chacabuco (12 de febrero de 1817) fue una consecuencia directa del éxito del Cruce de los Andes."

explicacion: |
  Efectivamente, el éxito de la maniobra de cruce permitió sorprender a las fuerzas realistas y asegurar la victoria en Chacabuco, abriendo el camino para la independencia de Chile.
```

```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "estrategia", "independencia"]

respuesta: "Cruce de los Andes"
tipo: completar
respuestas_validas:
  - "Cruce de los Andes"

enunciado: "Para asegurar la independencia de las Provincias Unidas, San Martín diseñó una estrategia para evitar el avance realista por el Alto Perú, optando por el ___."

explicacion: |
  San Martín comprendió que la vía terrestre hacia el norte (Alto Perú) era demasiado costosa y estaba fuertemente defendida. Su plan consistió en cruzar la cordillera hacia Chile para luego atacar el núcleo del poder español en el Pacífico.
```

```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["san_martin", "chile", "batalla"]

respuesta: "Batalla de Maipú"
tipo: mc
opciones_explicitas: ["Batalla de Maipú", "Batalla de Chacabuco", "Batalla de San Francisco", "Batalla de Yungay"]

enunciado: "Tras la victoria en Chacabuco, la consolidación definitiva de la independencia de Chile fue sellada en la ___."

explicacion: |
  La Batalla de Maipú (1818) fue el enfrentamiento decisivo que consolidó la independencia de Chile y permitió a San Martín preparar la expedición al Perú.
```

```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "peru", "logistica"]

respuesta: "Protector"
tipo: mc
opciones_explicitas: ["Dictador", "Protector", "Presidente", "Libertador"]

enunciado: "Al llegar al Perú y establecerse en Lima, San Martín asumió un gobierno provisional con el título de ___."

explicacion: |
  San Martín asumió el cargo de Protector del Perú para organizar la transición hacia la independencia y consolidar el apoyo político y militar necesario.
```

```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["san_martin", "orden_cronologico"]

respuesta_orden: ["Cruce de los Andes", "Batalla de Maipú", "Expedición al Perú"]
tipo: ordenar
opciones_explicitas: ["Cruce de los Andes", "Batalla de Maipú", "Expedición al Perú"]

enunciado: "Ordene cronológicamente los hitos de la estrategia continental de San Martín:"

explicacion: |
  La secuencia lógica fue: 1. El cruce de la cordillera para liberar Chile; 2. La consolidación en Chile (Maipú); 3. El desembarco y campaña en el Perú.
```

```
metadata:
  materia: "historia"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "bolivar", "guayaquil"]

respuesta: 1822
tipo: completar
tolerancia_abs: 0

enunciado: "La famosa entrevista entre José de San Martín y Simón Bolívar, donde se discutió el futuro de la independencia americana, tuvo lugar en el año {año}."

variables:
  año: 1822

explicacion: |
  La Entrevista de Guayaquil en 1822 es uno de los eventos más enigmáticos de la historia, donde se definieron los pasos finales para la liberación definitiva del continente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["revolucion_de_mayo", "cabildo_abierto"]

respuesta: "25 de mayo de 1810"
tipo: completar
respuestas_validas:
  - "25 de mayo de 1810"

enunciado: "La Primera Junta de Gobierno fue establecida el ___ tras el Cabildo Abierto."

explicacion: |
  La Revolución de Mayo de 1810 marcó el inicio del proceso de independencia, desplazando al Virrey Cisneros.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["declaracion_independencia", "congreso_tucuman"]

respuesta: "Congreso de Tucumán"
tipo: mc
opciones_explicitas: ["Congreso de Buenos Aires", "Congreso de Tucumán", "Consejo de Regencia", "Junta de San Martín"]

enunciado: "La Declaración de la Independencia de las Provincias Unidas del Río de la Plata se realizó en el ___."

explicacion: |
  El Congreso de Tucumán de 1816 formalizó la ruptura definitiva con la monarquía española.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "procesos_historicos"]

respuesta_orden: ["Revolución de Mayo", "Guerras de Independencia", "Declaración de la Independencia", "Cruce de los Andes"]
tipo: ordenar
opciones_explicitas: ["Revolución de Mayo", "Guerras de Independencia", "Declaración de la Independencia", "Cruce de los Andes"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso emancipador:"

explicacion: |
  La secuencia correcta comienza con la formación del primer gobierno patrio (1810), sigue con la lucha armada, la formalización política (1816) y la campaña libertadora de San Martín (1817).
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["san_martin", "cruce_de_los_andes"]

variables:
  datos: [["Cruce de los Andes", "1817"], ["Batalla de San Lorenzo", "1813"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1810", "1813", "1817", "1824"]

enunciado: "El año en que se llevó a cabo el ___ fue el año {datos[idx][0]}."

explicacion: |
  El Cruce de los Andes fue la gesta militar liderada por San Martín para liberar Chile y posteriormente Perú.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["soberania", "consecuencias"]

respuesta: "soberana"
tipo: completar
respuestas_validas:
  - "soberana"
  - "autónoma"

enunciado: "Tras la declaración de 1816, las Provincias Unidas buscaron consolidar su condición de nación ___."

explicacion: |
  La independencia política era el paso necesario para la soberanía territorial frente a las potencias europeas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["revolucion_mayo", "fechas"]

respuesta: "25 de mayo"
tipo: mc
opciones_explicitas: ["25 de mayo", "9 de julio", "20 de junio", "12 de octubre"]

enunciado: "La Revolución de Mayo, hito fundamental del proceso de independencia, tuvo lugar el día ___ de 1810."

explicacion: |
  El proceso de independencia comenzó con la Revolución de Mayo el 25 de mayo de 1810, que llevó a la formación del primer gobierno patrio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["congreso_tucuman", "independencia"]

variables:
  hitos: [["Congreso de Tucumán", "9 de julio de 1816"], ["Revolución de Mayo", "25 de mayo de 1810"]]
  idx: uno_de([0, 1])

respuesta: hitos[idx][1]
tipo: completar
respuestas_validas:
  - "9 de julio de 1816"
  - "25 de mayo de 1810"

enunciado: "El hito conocido como {hitos[idx][0]} se consolidó formalmente el día ___."

explicacion: |
  El Congreso de Tucumán declaró la independencia de las Provincias Unidas en 1816.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

respuesta_orden: ["Revolución de Mayo", "Establecimiento del Directorio", "Declaración de la Independencia"]
tipo: ordenar
opciones_explicitas: ["Revolución de Mayo", "Establecimiento del Directorio", "Declaración de la Independencia"]

enunciado: "Ordena cronológicamente los siguientes hitos del proceso de independencia:"

explicacion: |
  Primero ocurrió la Revolución de Mayo (1810), luego la creación del Directorio (1812) y finalmente la Declaración de la Independencia (1816).
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["batallas", "san martin"]

variables:
  batallas: [["San Lorenzo", "1813"], ["Maipú", "1818"], ["Chacabuco", "1817"]]
  idx: uno_de([0, 1, 2])

respuesta: batallas[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "La batalla de {batallas[idx][0]} fue un enfrentamiento clave ocurrido en el año ___."

explicacion: |
  Cada una de estas batallas fue fundamental para consolidar la independencia en distintos frentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["san_martin", "campana_libertadora"]

variables:
  campañas: [["Campaña de los Andes", "liberar Chile"], ["Campaña del Norte", "defender la frontera"]]
  idx: uno_de([0, 1])

respuesta: campañas[idx][1]
tipo: mc
opciones_explicitas: ["liberar Chile", "defender la frontera", "conquistar el Perú", "expulsar a los realistas de Buenos Aires"]

enunciado: "El objetivo principal de la {campañas[idx][0]} liderada por San Martín era ___."

explicacion: |
  San Martín diseñó el plan continental para asegurar la independencia de las Provincias Unidas mediante la liberación de Chile y luego Perú.
```

## Sección: huella-humana-en-el-clima-inicio (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["revolucion_industrial", "co2", "carbón"]

respuesta: "Revolución Industrial"
tipo: completar
respuestas_validas:
  - "Revolución Industrial"

enunciado: "El aumento sostenido de la concentración de CO2 en la atmósfera debido a la actividad humana comenzó con la ___."

explicacion: |
  La Revolución Industrial marcó el inicio del uso masivo de combustibles fósiles (principalmente carbón) para alimentar máquinas de vapor, alterando el ciclo natural del carbono.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["combustibles_fosiles", "carbón"]

respuesta: "carbón"
tipo: mc
opciones_explicitas: ["carbón", "petróleo", "gas natural", "biomasa"]

enunciado: "Durante la primera etapa de la Revolución Industrial, ¿cuál fue el principal combustible fósil que impulsó el aumento de la huella de carbono?"

explicacion: |
  El carbón fue el combustible que impulsó la primera fase de la industrialización; el petróleo se convirtió en el motor de la segunda fase, con la expansión del automovilismo y la química sintética.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["co2", "gas_efecto_invernadero"]

respuesta: "aumentar"
tipo: completar
respuestas_validas:
  - "aumentar"
  - "elevar"
  - "incrementar"

enunciado: "La quema masiva de combustibles fósiles desde el siglo XVIII tiene como efecto principal ___ la concentración de gases de efecto invernadero en la atmósfera."

explicacion: |
  El aumento de la concentración de CO2 atrapa más calor en la atmósfera, intensificando el efecto invernadero.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["historia", "combustibles"]

opciones_explicitas: ["Carbón -> Petróleo -> Gas natural", "Petróleo -> Carbón -> Gas natural", "Gas natural -> Carbón -> Petróleo", "Carbón -> Gas natural -> Petróleo"]
respuesta: "Carbón -> Petróleo -> Gas natural"
tipo: mc

enunciado: "Ordena cronológicamente el predominio de los combustibles fósiles que han marcado la huella humana en la escala temporal de la industrialización:"

explicacion: |
  Primero el carbón (siglo XVIII-XIX), luego el petróleo (siglo XX) y finalmente el gas natural (finales del XX - actualidad).
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["geologia", "antropoceno"]

respuesta: "positivo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "neutro", "nulo"]

enunciado: "Desde el inicio de la Revolución Industrial, la tendencia de la concentración de CO2 en la atmósfera ha sido de un cambio ___."

explicacion: |
  Se considera un cambio positivo porque la cantidad de CO2 en la atmósfera ha crecido de manera sostenida, no ha disminuido ni se ha mantenido constante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["preindustrial", "agricultura", "deforestacion"]

respuesta: "local"
tipo: mc

opciones_explicitas: ["global", "local", "nulo", "atmosferico"]

enunciado: "A diferencia de la era industrial, el impacto climático derivado de la deforestación para la agricultura en las sociedades preindustriales se caracterizaba por ser de escala ___."

explicacion: |
  Las sociedades preindustriales alteraban el ecosistema de su entorno inmediato (deforestación, erosión), pero sus emisiones de gases de efecto invernadero no eran suficientes para alterar el balance térmico global de la atmósfera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["combustibles_fosiles", "industrializacion", "co2"]

respuesta: 135
tipo: completar
tolerancia_abs: 10

enunciado: "Considerando que la concentración de CO2 en la atmósfera era de aproximadamente 280 ppm antes de la industrialización masiva, y que tras la quema masiva de combustibles fósiles ha superado las 415 ppm, ¿cuál es el incremento aproximado en ppm (redondeado al entero más cercano)?"

pasos:
  - "Identificar la concentración preindustrial (aprox. 280 ppm)."
  - "Identificar la concentración actual (aprox. 415-420 ppm)."
  - "Restar la concentración preindustrial de la actual."

explicacion: |
  La quema de combustibles fósiles liberó carbono que estuvo secuestrado durante millones de años, aumentando la concentración de CO2 de ~280 ppm a niveles superiores a 415 ppm, rompiendo el ciclo natural del carbono.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["causas", "gas_efecto_invernadero"]

respuesta: "CO2"
tipo: completar
respuestas_validas:
  - "CO2"
  - "CH4"
  - "N2O"

enunciado: "Mientras que la agricultura preindustrial afectaba el uso del suelo, la industrialización introdujo una quema masiva de combustibles fósiles que aumentó la concentración de ___ en la atmósfera."

explicacion: |
  El dióxido de carbono (CO2) es el principal gas de efecto invernadero emitido por la combustión de carbón, petróleo y gas natural, siendo el principal responsable del forzamiento radiativo antropogénico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["escala", "comparacion"]

respuesta_orden: ["Deforestación local", "Cambio en el uso del suelo", "Emisiones globales de GEI"]
tipo: ordenar

opciones_explicitas: ["Deforestación local", "Cambio en el uso del suelo", "Emisiones globales de GEI"]

enunciado: "Ordene los siguientes fenómenos de menor a mayor escala de impacto climático global, según la evolución histórica de la huella humana:"

explicacion: |
  La escala comenzó con la modificación de paisajes locales (deforestación), continuó con cambios sistemáticos en el uso del suelo (agricultura intensiva) y culminó con la alteración química global de la atmósfera (emisiones de GEI).
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["tiempo", "ciclo_carbono"]

respuesta: "ciclo_largo"
tipo: mc

opciones_explicitas: ["ciclo_corto", "ciclo_largo"]

enunciado: "La agricultura preindustrial se basaba en ciclos biológicos rápidos. La industrialización, al extraer carbono de depósitos fósiles, introdujo carbono en el ___ ciclo del carbono."

explicacion: |
  El carbono en los combustibles fósiles forma parte del ciclo geológico (largo plazo). Al quemarlo, la humanidad está moviendo carbono de un reservorio de millones de años a la atmósfera de forma casi instantánea.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["geologia", "antropoceno", "conceptos"]

tipo: mc
opciones_explicitas: ["Una era de predominio de la vida vegetal", "Una época geológica definida por el impacto humano medible", "Un periodo de estabilidad climática absoluta", "La era de la formación de los continentes"]
respuesta: "Una época geológica definida por el impacto humano medible"

enunciado: "El término 'Antropoceno' se utiliza para describir una propuesta de nueva época geológica caracterizada por ___."

explicacion: |
  El Antropoceno propone que la actividad humana se ha convertido en una fuerza geológica dominante, capaz de dejar marcas permanentes en los estratos sedimentarios, el clima y la biodiversidad de la Tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["evidencias", "sedimentos", "huella_geologica"]

tipo: completar
respuestas_validas:
  - "sedimentos artificiales"
respuesta: "sedimentos artificiales"

enunciado: "En el registro geológico del Antropoceno, se busca identificar marcadores como los plásticos y el hormigón que se consolidan como ___."

explicacion: |
  Los materiales sintéticos como los plásticos, el hormigón y los isótopos radiactivos actúan como 'tecnofósiles' que permiten identificar nuestra era en el futuro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["clima", "gases_efecto_invernadero"]

tipo: mc
opciones_explicitas: ["Aumento de la radiación solar", "Cambios en la composición de la atmósfera por gases de efecto invernadero", "Desplazamiento de las placas tectónicas", "Variaciones en el campo magnético terrestre"]
respuesta: "Cambios en la composición de la atmósfera por gases de efecto invernadero"

enunciado: "Uno de los principales motores del cambio climático en el Antropoceno es la alteración de la atmósfera mediante ___."

explicacion: |
  La quema de combustibles fósiles y la deforestación han incrementado la concentración de gases como el CO2, alterando el balance térmico del planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["biodiversidad", "extinciones"]

tipo: mc
opciones_explicitas: ["la sexta extinción masiva", "la era de hielo", "la expansión de los continentes", "el ciclo de las mareas"]
respuesta: "la sexta extinción masiva"

enunciado: "El Antropoceno se asocia con una crisis biológica sin precedentes conocida como ___."

explicacion: |
  La tasa actual de extinción de especies es significativamente superior a la tasa natural, lo cual es una característica distintiva de la huella humana sobre la biosfera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["causa_efecto", "procesos"]

tipo: ordenar
opciones_explicitas: ["Emisión masiva de gases de efecto invernadero", "Aumento de la temperatura global", "Alteración de los ciclos biogeoquímicos", "Cambios en la composición de los sedimentos futuros"]

enunciado: "Ordena cronológicamente los procesos que caracterizan la huella humana en la Tierra:"

explicacion: |
  La actividad industrial genera gases, estos alteran el clima, lo que modifica los ciclos naturales (como el del carbono) y finalmente deja una marca física en los sedimentos.
respuesta_orden: ["Emisión masiva de gases de efecto invernadero", "Aumento de la temperatura global", "Alteración de los ciclos biogeoquímicos", "Cambios en la composición de los sedimentos futuros"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["paleoclimatologia", "co2", "glaciares"]

enunciado: "Al analizar los núcleos de hielo, se observa que durante los periodos preindustriales los niveles de CO2 se mantenían en torno a los 280 ppm, pero tras la Revolución Industrial, los valores saltaron a aproximadamente 420 ppm."

respuesta: 420
tipo: completar
tolerancia_abs: 5

explicacion: |
  Los núcleos de hielo actúan como cápsulas del tiempo. Mientras que la variabilidad natural mantenía el CO2 en niveles estables (alrededor de 280-300 ppm), la quema de combustibles fósiles disparó la concentración actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["co2", "industrializacion"]

enunciado: "Antes de la era industrial, las fluctuaciones de CO2 en los núcleos de hielo seguían ciclos naturales. Sin embargo, la actividad humana ha provocado un cambio en la tendencia hacia un estado:"

opciones_explicitas: ["estacionario", "ascendente", "descendente", "cíclico"]

respuesta: "ascendente"
tipo: mc

explicacion: |
  La curva de los núcleos de hielo muestra un ascenso abrupto y lineal que no coincide con los ciclos naturales de los últimos 800,000 años, marcando el inicio de la huella humana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["metodologia", "paleoclimatologia"]

enunciado: "Para reconstruir la atmósfera del pasado, los científicos extraen burbujas de aire atrapadas en el hielo. El proceso para entender el clima antiguo sigue este orden lógico:"

opciones_explicitas: ["Extracción de núcleos", "Análisis de burbujas de aire", "Medición de gases de efecto invernadero", "Comparación con datos actuales"]

respuesta_orden: ["Extracción de núcleos", "Análisis de burbujas de aire", "Medición de gases de efecto invernadero", "Comparación con datos actuales"]
tipo: ordenar

explicacion: |
  Primero se extrae el cilindro de hielo, luego se liberan las burbujas atrapadas para medir la composición química y finalmente se compara con los niveles actuales para identificar la anomalía industrial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["co2", "quimica_atmosferica"]

enunciado: "Si comparamos la variabilidad natural (V) con el registro post-industrial (I), la diferencia fundamental es que la magnitud de la desviación de I respecto a V es ___."

respuestas_validas:
  - "significativa"
  - "nula"
  - "inversa"

respuesta: "significativa"
tipo: completar

explicacion: |
  La magnitud del aumento de CO2 tras la industrialización es órdenes de magnitud superior a las variaciones naturales observadas en los registros de hielo de periodos interglaciares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["co2", "revolucion_industrial"]

enunciado: "¿Cuál de los siguientes factores es el principal responsable del salto observado en los niveles de CO2 en los núcleos de hielo durante el siglo XIX y XX?"

opciones_explicitas: ["Erupciones volcánicas", "Ciclos orbitales terrestres", "Quema de combustibles fósiles", "Variaciones de la radiación solar"]

respuesta: "Quema de combustibles fósiles"
tipo: mc

explicacion: |
  Aunque los volcanes y los ciclos orbitales afectan el clima, la velocidad y magnitud del aumento de CO2 detectado en el hielo coinciden exactamente con el inicio de la combustión masiva de carbón y petróleo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["clima", "historia", "carbono"]

variables:
  datos: [["Era Preindustrial", "bajo"], ["Era Industrial", "alto"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["bajo", "medio", "alto"]

enunciado: "Si analizamos la etapa de la {datos[idx][0]}, el nivel de impacto climático global se considera ____."

explicacion: |
  La era preindustrial se caracterizaba por un uso de biomasa y combustibles fósiles muy limitado, resultando en un impacto climático bajo comparado con la era industrial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "intermedio"
  tags: ["emisiones", "carbono", "historia"]

variables:
  datos: [["1750", "10"], ["1950", "5000"], ["2020", "36000"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "En el año {datos[idx][0]}, la tasa de emisión global de CO2 (en millones de toneladas) era aproximadamente de ____."

pasos:
  - "Identificar el año en la cronología histórica."
  - "Asociar el valor de emisiones correspondiente a dicho año."

explicacion: |
  La escala de emisiones creció exponencialmente desde el año {datos[idx][0]} debido a la intensificación de la actividad económica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_clima_evolucion"
  nivel: "intermedio"
  tags: ["cronologia", "impacto"]

respuesta_orden: ["Era Preindustrial", "Revolución Industrial", "Era de la Información"]
tipo: ordenar
opciones_explicitas: ["Era Preindustrial", "Revolución Industrial", "Era de la Información"]

enunciado: "Ordena cronológicamente las etapas de la humanidad según el aumento progresivo de su huella climática:"

explicacion: |
  La secuencia muestra cómo la complejidad tecnológica y el uso de combustibles fósiles aumentaron la huella de carbono de forma escalonada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "avanzado"
  tags: ["aceleracion", "antropoceno"]

variables:
  datos: [["antes de 1950", "estacionario"], ["después de 1950", "acelerado"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "estacionario"
  - "acelerado"

enunciado: "El impacto climático se describe como ____ en el periodo {datos[idx][0]}."

explicacion: |
  El periodo después de 1950, conocido como 'El Gran Aceleramiento', muestra un crecimiento exponencial en el impacto humano sobre la biosfera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "huella_humana_clima_inicio"
  nivel: "basico"
  tags: ["comparativa", "clima"]

variables:
  comparativa: [["Preindustrial", "Baja"], ["Industrial", "Alta"]]
  idx: uno_de([0, 1])

respuesta: comparativa[idx][1]
tipo: mc
opciones_explicitas: ["Baja", "Media", "Alta"]

enunciado: "La huella de carbono de la era {comparativa[idx][0]} es de magnitud ____."

explicacion: |
  La magnitud depende directamente de la fuente de energía predominante en cada periodo histórico.
```

## Sección: guerras-civiles-unitarios-federales (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["politica", "argentina"]

respuesta: "Unitarios"
tipo: mc
opciones_explicitas: ["Unitarios", "Federales", "Anarquistas", "Monárquicos"]

enunciado: "El grupo político que defendía un gobierno centralizado con sede en Buenos Aires y la centralización del poder era el de los ___."

explicacion: |
  Los Unitarios buscaban un Estado centralizado donde las provincias perdieran su autonomía en favor de un poder central fuerte, generalmente controlado por la élite porteña.
```

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["federalismo", "provincias"]

respuesta: "Federales"
tipo: mc
opciones_explicitas: ["Unitarios", "Federales", "Centralistas", "Conservadores"]

enunciado: "Aquellos que luchaban por la autonomía de las provincias y la distribución de la renta aduanera entre todas las jurisdicciones eran los ___."

explicacion: |
  El federalismo proponía que cada provincia mantuviera su soberanía y autonomía para autogobernarse, oponiéndose al control absoluto de Buenos Aires.
```

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["economia", "aduana"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Buenos Aires", "centralizar la recaudación de la aduana para el gobierno central"], ["Las provincias", "repartir los ingresos de la aduana de forma equitativa"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "centralizar la recaudación de la aduana para el gobierno central"
  - "repartir los ingresos de la aduana de forma equitativa"

enunciado: "En el conflicto por la renta aduanera, el principal punto de discordia era que las provincias exigían ___."

explicacion: |
  La disputa económica era clave: Buenos Aires quería controlar la aduana (recaudación de impuestos de importación/exportación), mientras las provincias querían una distribución justa de esos fondos.
```

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta_orden: ["Centralismo", "Autonomía provincial", "Guerras civiles"]
tipo: ordenar
opciones_explicitas: ["Centralismo", "Autonomía provincial", "Guerras civiles"]

enunciado: "Ordene los conceptos desde la causa política hasta la consecuencia histórica resultante del conflicto:"

pasos:
  - "Causa: El deseo de control central (Unitarios)"
  - "Contrapeso: El deseo de soberanía local (Federales)"
  - "Resultado: El conflicto armado prolongado"

explicacion: |
  La tensión entre el centralismo unitario y la autonomía federal derivó en un periodo de constantes guerras civiles en el territorio argentino.
```

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["economia", "causas"]

variables:
  valor_base: 1820
  inflacion_estimada: 1.5

respuesta: redondear(valor_base * inflacion_estimada, 0)
tipo: completar
tolerancia_abs: 1

enunciado: "Si un conflicto de la era de las guerras civiles incrementara los costos de guerra en un factor de {inflacion_estimada} sobre una base de ${valor_base} pesos, ¿cuál sería el nuevo costo total?"

pasos:
  - "Multiplicar el valor base por el factor de incremento."

explicacion: |
  El costo de mantener ejércitos permanentes durante las guerras civiles era altísimo para las arcas de las provincias y de la ciudad de Buenos Aires.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["politica", "siglo_XIX"]

tipo: completar
enunciado: "Durante las guerras civiles argentinas del siglo XIX, las dos facciones políticas principales que se enfrentaron por el modelo de organización del Estado fueron los ___ y los ___."
respuesta: "Unitarios, Federales"
explicacion: |
  Los Unitarios buscaban un gobierno centralizado en Buenos Aires, mientras que los Federales defendían la autonomía de las provincias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["modelo_estatal", "centralismo"]

variables:
  escenario: uno_de([["centralismo", "Buenos Aires"], ["federalismo", "Provincias"]])

tipo: completar
respuestas_validas:
  - "centralismo"
  - "federalismo"
respuesta: escenario[0]

enunciado: "Si un grupo político propone que todas las leyes y decisiones administrativas deben emanar exclusivamente de un gobierno central en la capital, está defendiendo el ___."

explicacion: |
  El centralismo es la característica principal del pensamiento unitario, que buscaba la concentración del poder en un solo núcleo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["economia", "aduana"]

tipo: mc
opciones_explicitas: ["la libre navegación de los ríos", "la nacionalización de la aduana", "la eliminación de los impuestos", "la unión aduanera"]
respuesta: "la nacionalización de la aduana"

enunciado: "Uno de los principales focos de conflicto económico entre las provincias y Buenos Aires fue ___."

explicacion: |
  Las provincias federales exigían la nacionalización de los ingresos de la aduana de Buenos Aires y la libre navegación de los ríos interiores, mientras que Buenos Aires quería retener la renta aduanera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["proceso_historico"]

tipo: ordenar
opciones_explicitas: ["Caos de las guerras civiles", "Lucha por la organización constitucional", "Consolidación del Estado Nacional"]

enunciado: "Ordene cronológicamente los procesos que marcaron la transición desde la desintegración post-independencia hasta la formación del Estado moderno:"

explicacion: |
  Primero hubo un largo periodo de guerras civiles, luego el debate constitucional de 1853 y finalmente la consolidación del Estado bajo la presidencia de Mitre, Sarmiento y Avellaneda.
respuesta_orden: ["Caos de las guerras civiles", "Lucha por la organización constitucional", "Consolidación del Estado Nacional"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["soberania", "provincias"]

tipo: vf
respuesta: verdadero

enunciado: "El federalismo buscaba que cada provincia mantuviera su propia autonomía y autoridades locales, sin estar subordinada totalmente al poder central."

explicacion: |
  Verdadero. El federalismo se basaba en el respeto a la soberanía de las entidades provinciales preexistentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["rosas", "federales", "confederacion"]

respuesta: "gobernador de Buenos Aires"
tipo: mc
opciones_explicitas: ["gobernador de Buenos Aires", "presidente de la Confederación", "dictador de la nación"]

enunciado: "Durante el período de la Confederación Argentina, ¿qué cargo ocupaba formalmente Juan Manuel de Rosas, aunque en la práctica ejercía una hegemonía sobre el resto de las provincias?"

explicacion: |
  Aunque Rosas era el líder de facto de la Confederación, formalmente su cargo era el de Gobernador de la Provincia de Buenos Aires, cargo desde el cual ejercía una hegemonía política y económica sobre las demás provincias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["relaciones", "federales", "unitarios"]

respuesta: "unitarios"
tipo: completar
respuestas_validas:
  - "unitarios"

enunciado: "En el contexto de las guerras civiles, el proyecto político de Rosas se alineaba con el bando ___ , enfrentándose a las aspiraciones de centralismo de los opositores."

explicacion: |
  Rosas era el máximo exponente del federalismo, lo que lo colocaba en constante conflicto con los unitarios, quienes buscaban un gobierno centralizado en Buenos Aires.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["economia", "aduana", "rosas"]

respuesta: "Aduana"
tipo: mc
opciones_explicitas: ["Aduana", "Aduana de Montevideo", "Impuesto de libre navegación"]

enunciado: "El control de la ___ de Buenos Aires fue la principal herramienta de Rosas para asegurar la supremacía de su provincia sobre la Confederación."

explicacion: |
  La recaudación de los derechos de importación y exportación de la Aduana de Buenos Aires permitía a la provincia controlar la economía nacional y limitar la autonomía de las provincias del interior.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["orden", "etapas", "rosas"]

variables:
  etapa_idx: uno_de([0,1,2])

respuesta_orden: ["Surgimiento del caudillismo", "Llegada al poder con facultades extraordinarias", "Consolidación del orden rosista"]
tipo: ordenar
opciones_explicitas: ["Surgimiento del caudillismo", "Llegada al poder con facultades extraordinarias", "Consolidación del orden rosista"]

enunciado: "Ordene cronológicamente los procesos que permitieron la consolidación del poder de Rosas en la Confederación:"

pasos:
  - "El ascenso de los caudillos locales en el interior."
  - "La concesión de facultades extraordinarias por parte de la legislatura."
  - "El establecimiento de un orden basado en la sumisión de las provincias."

explicacion: |
  El proceso comenzó con el ascenso de caudillos, seguido por la necesidad de orden que llevó a la delegación de poderes en Rosas, culminando en un régimen de hegemonía federal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["simbolos", "color", "rosas"]

respuesta: "rojo"
tipo: mc
opciones_explicitas: ["rojo", "azul", "blanco"]

enunciado: "Para demostrar la lealtad al régimen de Rosas, se utilizaba el color ___ en la vestimenta y en las insignias."

explicacion: |
  El uso de la 'divisa punzó' (una cinta roja) era obligatorio para demostrar la adhesión al bando federal de Rosas y marcar la distinción frente a los unitarios.
```

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["caseros", "urquiza", "rosas"]

respuesta: "Justo José de Urquiza"
tipo: mc
opciones_explicitas: ["Juan Manuel de Rosas", "Justo José de Urquiza", "Facundo Quiroga", "Manuel Dorrego"]

enunciado: "En la batalla de Caseros, ocurrida en 1852, el líder del Ejército Grande que derrotó a Juan Manuel de Rosas fue ___."

explicacion: |
  La victoria de Urquiza en Caseros puso fin al régimen de Rosas y permitió el inicio del proceso de organización constitucional de la Argentina.
```

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["organización_nacional", "constitucion"]

respuesta: "Constitución Nacional"
tipo: completar
respuestas_validas:
  - "Constitución Nacional"
  - "Constitución de 1853"

enunciado: "La derrota de Rosas en Caseros permitió la convocatoria al Congreso Constituyente de 1853, que dio como resultado la primera ___."

explicacion: |
  Tras la caída de la hegemonía rosista, se abrió un periodo de institucionalización que culminó con la sanción de la Constitución de 1853.
```

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["urquiza", "ejercito_grande"]

respuesta: "Ejército Grande"
tipo: mc
opciones_explicitas: ["Ejército de Granaderos", "Ejército Grande", "Ejército de Orientales", "Ejército de Montoneras"]

enunciado: "El contingente militar liderado por Urquiza para enfrentar a Rosas fue conocido como el ___."

explicacion: |
  El Ejército Grande estaba compuesto por fuerzas de diversas provincias y también por apoyo de fuerzas internacionales.
```

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["rosas", "caída"]

respuesta: "exilio"
tipo: completar
respuestas_validas:
  - "exilio"

enunciado: "Tras la derrota en la batalla de Caseros, Juan Manuel de Rosas se vio obligado a partir hacia el ___."

explicacion: |
  Rosas se retiró hacia Inglaterra, donde pasó el resto de sus días.
```

```
metadata:
  materia: "historia"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["cronologia", "procesos"]

opciones_explicitas: ["Tratado de San Justo", "Batalla de Caseros", "Sanción de la Constitución Nacional"]
respuesta_orden: ["Tratado de San Justo", "Batalla de Caseros", "Sanción de la Constitución Nacional"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes hitos relacionados con el fin del rosismo y la organización nacional:"

pasos:
  - "1. El pacto entre Urquiza y los colorados de Buenos Aires."
  - "2. El enfrentamiento militar decisivo."
  - "3. La consolidación institucional del país."

explicacion: |
  Primero se pactó la alianza (Tratado de San Justo), luego se combatió (Caseros) y finalmente se organizó el Estado (Constitución).
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["politica", "argentina"]

variables:
  escenario: uno_de([["Un grupo de caudillos busca que cada provincia mantenga su propia autonomía y leyes locales.", "federal"], ["Un gobierno centralizado busca concentrar todo el poder político y económico en Buenos Aires.", "unitario"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["federal", "unitario"]

enunciado: "En el contexto de las guerras civiles argentinas, si se propone que {escenario[0]}, ¿qué postura se está defendiendo?"

explicacion: |
  El Federalismo defendía la autonomía de las provincias, mientras que el Unitarismo buscaba un mando centralizado en Buenos Aires.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["economia", "aduana"]

variables:
  caso: uno_de([["La libre navegación de los ríos interiores es una demanda clave de las provincias.", "federal"], ["El control exclusivo de la renta aduanera por parte del gobierno central es la prioridad.", "unitario"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["federal", "unitario"]

enunciado: "Analizando la estructura económica de la época, si el objetivo es {caso[0]}, ¿qué modelo se está representando?"

explicacion: |
  Los federales necesitaban la libre navegación para comerciar por sus propios ríos; los unitarios buscaban centralizar las rentas de la aduana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["constitucion", "poder"]

variables:
  modelo: uno_de([["Un gobierno central con un poder ejecutivo fuerte que designa a los gobernadores.", "unitario"], ["Un sistema donde las provincias eligen a sus propios gobernadores de forma autónoma.", "federal"]])

tipo: completar
respuestas_validas:
  - "unitario"
  - "federal"

enunciado: "Si el diseño institucional busca que {modelo[0]}, el modelo de gobierno es de tipo ___."

explicacion: |
  La designación de autoridades provinciales por parte del centro es la característica principal del centralismo unitario.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["causas"]

variables:
  conflicto: uno_de([["La disputa por la distribución de los ingresos de la aduana de Buenos Aires.", "federal"], ["La lucha por la hegemonía política entre la élite porteña y los caudillos.", "unitario"]])

respuesta: conflicto[1]
tipo: mc
opciones_explicitas: ["federal", "unitario"]

enunciado: "Si el núcleo del conflicto es {conflicto[0]}, la demanda principal es de carácter ___."

explicacion: |
  La distribución de la renta aduanera era el principal punto de fricción entre la autonomía provincial y el control central.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["orden"]

variables:
  idx: uno_de([0, 1])
  modelos: ["federal", "unitario"]
  descripciones: ["La soberanía reside en las provincias, que delegan facultades a la nación", "La nación es la fuente de autoridad y las provincias dependen de ella"]

respuesta: descripciones[idx]
tipo: mc
opciones_explicitas: ["La soberanía reside en las provincias, que delegan facultades a la nación", "La nación es la fuente de autoridad y las provincias dependen de ella"]

enunciado: "Según el modelo {modelos[idx]}, ¿cómo se organiza la jerarquía de poder entre la nación y las provincias?"

explicacion: |
  En el federalismo la soberanía reside en las provincias que delegan facultades a la nación; en el unitarismo la nación es la fuente de autoridad sobre las provincias.
```

