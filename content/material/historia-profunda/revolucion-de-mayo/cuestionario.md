# Historia Profunda — Revolucion de mayo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El fin del Virreinato

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

### 2 — La Primera Junta

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

### 3 — Causas de la Revolución

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

### 4 — El orden de los eventos

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

### 5 — El carácter de la Junta

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

### 6 — El vacío de poder en España

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

### 7 — Consecuencia de la crisis monárquica

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

### 8 — El orden de los eventos

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

### 9 — La legitimidad del poder

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

### 10 — El impacto de la crisis

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

### 11 — El primer gobierno patrio

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

### 12 — El rol de la secretaría

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

### 13 — La legitimidad del gobierno

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

### 14 — Composición de la Primera Junta

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

### 15 — Evolución del gobierno

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

### 16 — El inicio del proceso

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

### 17 — ¿Qué se buscaba en 1810?

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

### 18 — La cronología de la emancipación

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

### 19 — El carácter de la Revolución

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

### 20 — El debate de la soberanía

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

### 21 — El Cabildo Abierto

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["cabildo", "mayo_1816"]

variables:
  escenario: [[ "El 22 de mayo de 1816, se debatió la legitimidad del virrey en el Cabildo Abierto.", "Juan José Castelli"], ["El 22 de mayo de 1816, se debatió la legitimidad del virrey en el Cabildo Abierto.", "Cornelio Saavedra"]]
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Juan José Castelli", "Cornelio Saavedra", "Mariano Moreno", "Manuel Belgrano"]

enunciado: "En el Cabildo Abierto del 22 de mayo, ¿qué figura fue uno de los principales oradores defendiendo la soberanía del pueblo frente al virreinato? {escenario[idx][0]}"

explicacion: |
  Juan José Castelli fue conocido como 'el orador de la Revolución', defendiendo la postura de que el poder volvía al pueblo ante la caída de la Junta de Sevilla.
```

### 22 — La Primera Junta

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["primera_junta", "gobierno"]

variables:
  datos: [["Presidente", "Cornelio Saavedra"], ["Secretario", "Mariano Moreno"], ["Secretario", "Juan José Castelli"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Cornelio Saavedra", "Mariano Moreno", "Juan José Castelli", "Baltasar Hidalgo de Cisneros"]

enunciado: "La Primera Junta de Gobierno, establecida tras la Revolución de Mayo, tenía una estructura con un Presidente y dos Secretarios. Si el rol seleccionado es {datos[idx][0]}, ¿quién ocupaba dicho cargo? {datos[idx][1]}"

explicacion: |
  La Primera Junta estaba integrada por Saavedra (Presidente), Moreno y Castelli (Secretarios), junto a otros miembros vocales.
```

### 23 — La caída del Virrey

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["virrey", "cisneros"]

variables:
  caso: [["El último virrey del Río de la Plata fue...", "Baltasar Hidalgo de Cisneros"], ["El último virrey del Río de Plata fue...", "Cisneros"]]
  idx: uno_de([0,1])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas:
  - "Baltasar Hidalgo de Cisneros"
  - "Cisneros"

enunciado: "El proceso revolucionario de mayo de 1816 culminó con la destitución de ___. "

explicacion: |
  Baltasar Hidalgo de Cisneros fue el último virrey enviado por la corona española que gobernó el territorio antes de la formación de la Primera Junta.
```

### 24 — El orden de los eventos

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cronologia", "mayo"]

respuesta_orden: ["Llegada de la Primera Junta", "Establecimiento de la Junta de Gobierno", "Cabildo Abierto del 22 de mayo", "Junta de los 25 de mayo"]
tipo: ordenar
opciones_explicitas: ["Llegada de la Primera Junta", "Establecimiento de la Junta de Gobierno", "Cabildo Abierto del 22 de mayo", "Junta de los 25 de mayo"]

enunciado: "Ordena cronológicamente los hitos clave de la Semana de Mayo de 1816:"

explicacion: |
  La secuencia comenzó con la crisis de legitimidad, el debate en el Cabildo, la formación de la Junta de Gobierno y finalmente la instauración de la Primera Junta.
```

### 25 — El rol de la prensa

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["prensa", "ideologia"]

variables:
  rol: [["La principal publicación de ideas revolucionarias fue la...", "La Gazeta de Buenos Ayres"], ["La principal publicación de ideas revolucionarias fue la...", "El Correo de la Patria"]]
  idx: uno_de([0,1])

respuesta: rol[idx][1]
tipo: completar
respuestas_validas:
  - "La Gazeta de Buenos Ayres"
  - "El Correo de la Patria"

enunciado: "Durante el proceso revolucionario, la difusión de ideas fue vital. Se destaca que la principal publicación de ideas revolucionarias fue la ___. "

explicacion: |
  La Gazeta de Buenos Ayres fue el primer periódico de la ciudad, utilizado para difundir los ideales de la revolución.
```
