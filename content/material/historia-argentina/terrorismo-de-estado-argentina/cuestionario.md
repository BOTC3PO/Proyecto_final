# Historia Profunda — Terrorismo de estado argentina (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Terrorismo de Estado

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

### 2 — Características del periodo 1976-1983

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

### 3 — Secuencia de la represión estatal

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

### 4 — El rol de la propiedad privada y la familia

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

### 5 — Clasificación de la violencia estatal

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

### 6 — Concepto de desaparición

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

### 7 — El rol de las Madres

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

### 8 — El destino de los cuerpos

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

### 9 — Secuencia de la represión

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

### 10 — Identificación de centros de detención

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

### 11 — El rol de las fuerzas armadas

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

### 12 — El proceso de desaparición

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

### 13 — La jerarquía del terror

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

### 14 — Secuencia de la represión

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

### 15 — Identificación de organismos

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

### 16 — El rol de las Abuelas

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

### 17 — Cronología de la lucha

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

### 18 — El concepto de "Desaparecido"

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

### 19 — Identificación de la práctica

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

### 20 — El destino de los niños

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

### 21 — Organismos de control

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

### 22 — Orden de los procesos de represión

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

### 23 — El concepto de "Desaparecido"

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
