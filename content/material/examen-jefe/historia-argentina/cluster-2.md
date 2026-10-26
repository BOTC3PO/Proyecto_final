# Examen jefe — Maestro de la Organización Nacional

> Logro #1002. Dominaste las guerras civiles entre unitarios y federales, la Constitución de 1853, Rosas y la Confederación, la guerra del Paraguay y las economías regionales tempranas, jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **130 preguntas totales** en 5/5 secciones.

---

## Sección: guerras-civiles-unitarios-federales (25 preguntas)

```
metadata:
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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

## Sección: organizacion-nacional-constitucion-1853 (25 preguntas)

```
metadata:
  materia: "pensamiento_historico"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["constitucion", "argentina", "federalismo"]

respuesta: "1853"
tipo: completar

enunciado: "La Constitución Nacional Argentina fue sancionada en el año ___."

explicacion: |
  Tras la caída de Juan Manuel de Rosas en la batalla de Caseros, se procedió a la organización institucional del país, culminando con la sanción de la Constitución en 1853.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["forma_de_gobierno", "republica", "federal"]

respuesta: "República Federal"
tipo: "mc"

opciones_explicitas: ["Monarquía Unitaria", "República Federal", "Confederación Centralista", "Dictadura Provisoria"]

enunciado: "La Constitución de 1853 estableció que la forma de gobierno de la Nación Argentina es una:"

explicacion: |
  La Constitución de 1853 adoptó la forma Republicana y el sistema Federal, garantizando la autonomía de las provincias pero bajo un gobierno central.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["poderes", "legislativo", "ejecutivo", "judicial"]

variables:
  orden_correcta: ["Ejecutivo", "Legislativo", "Judicial"]

respuesta_orden: ["Ejecutivo", "Legislativo", "Judicial"]
tipo: "ordenar"

opciones_explicitas: ["Ejecutivo", "Legislativo", "Judicial"]

enunciado: "Ordene los tres poderes del Estado establecidos por la Constitución de 1853, partiendo desde el poder que ejerce la función administrativa/política principal:"

explicacion: |
  La división de poderes es un principio fundamental de la democracia republicana adoptada en 1853 para evitar la concentración del mando.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["provincias", "autonomia"]

variables:
  escenario: uno_de([["autónomas", "tienen sus propias autoridades y leyes"], ["dependientes", "están subordinadas totalmente al gobierno central"]])

respuesta: "autónomas"
tipo: "completar"

respuestas_validas:
  - "autónomas"

enunciado: "Según el sistema federal adoptado, las provincias argentinas son ___ porque ___."

explicacion: |
  El federalismo implica que las provincias conservan todo el poder no delegado a la Nación, manteniendo su propia autonomía.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["sanacion", "congreso", "constituyente"]

variables:
  idx: uno_de([0, 1])
  datos: [["Sanctioned", "Sancionada"], ["Promulgated", "Promulgada"]]

respuesta: "Sancionada"
tipo: "mc"

opciones_explicitas: ["Sancionada", "Promulgada", "Derogada", "Reformada"]

enunciado: "El proceso de la Constitución de 1853 comenzó cuando la Carta Magna fue ___ por el Congreso Constituyente en Santa Fe."

explicacion: |
  La Constitución fue sancionada por el Congreso Constituyente en Santa Fe en 1853, marcando el inicio de la organización institucional definitiva.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["buenos_aires", "confederacion", "constitucion"]

respuesta: "separada"
tipo: completar

enunciado: "Tras la sanción de la Constitución Nacional en 1853, la provincia de Buenos Aires se mantuvo ___ de la Confederación Argentina."

explicacion: |
  Buenos Aires no participó en el proceso constituyente de 1853 y mantuvo su autonomía, formando un Estado separado de la Confederación Argentina durante varios años.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["batalla_de_pavon", "reincorporacion", "unificacion"]

variables:
  escenario: uno_de([["1861", "Batalla de Pavón"], ["1853", "Sanción de la Constitución"]])
  año: escenario[0]
  evento: escenario[1]

respuesta: "1861"
tipo: "mc"
opciones_explicitas: ["1853", "1861", "1880", "1916"]

enunciado: "La reincorporación definitiva de Buenos Aires a la unidad nacional se produjo en el año {año}, tras el desenlace de la {evento}."

explicacion: |
  La Batalla de Pavón en 1861 fue el hito que permitió la unificación política y la integración de Buenos Aires al resto de las provincias argentinas.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

opciones_explicitas: ["Sanción de la Constitución Nacional", "Separación de Buenos Aires", "Batalla de Pavón", "Reincorporación de Buenos Aires"]
respuesta_orden: ["Sanción de la Constitución Nacional", "Separación de Buenos Aires", "Batalla de Pavón", "Reincorporación de Buenos Aires"]
tipo: "ordenar"

enunciado: "Ordena cronológicamente los siguientes hechos históricos de la organización nacional:"

explicacion: |
  La secuencia correcta comienza con la sanción de la Constitución (1853), la consecuente separación de Buenos Aires, la batalla que definió el rumbo político (Pavón, 1861) y la posterior integración.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["pavon", "unificacion"]

respuesta: "reincorporación"
tipo: "completar"
respuestas_validas:
  - "reincorporación"
  - "unificación"

enunciado: "El desenlace de la Batalla de Pavón facilitó la ___ de la provincia de Buenos Aires a la unidad nacional."

explicacion: |
  La victoria/desenlace de Pavón permitió que Buenos Aires dejara de ser un estado separado y se integrara al proceso de organización nacional.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["buenos_aires", "constitucion"]

respuesta: "no"
tipo: "mc"
opciones_explicitas: ["si", "no", "tal vez", "parcialmente"]

enunciado: "¿Firmó la provincia de Buenos Aires la Constitución Nacional de 1853?"

explicacion: |
  No, Buenos Aires se opuso a la Constitución de 1853, manteniendo su propia organización y separándose de la Confederación Argentina.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["constitucion", "forma_de_gobierno"]

respuesta: "republicana"
tipo: "mc"
opciones_explicitas: ["monárquica", "republicana", "parlamentaria", "teocrática"]

enunciado: "Según la Constitución de 1853, la forma de gobierno adoptada para la Nación Argentina es ___."

explicacion: |
  La Constitución establece en su primer artículo que la Nación adopta para su gobierno la forma REPRESENTATIVA, REPUBLICANA y FEDERAL.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["poderes", "division_de_poderes"]

variables:
  datos: [["Presidente", "Administra el país"], ["Congreso", "Legisla las leyes"], ["Corte Suprema", "Juzga las causas"]]
  idx: uno_de([0, 1, 2])
  poder_en_idx: datos[idx][0]
  respuesta_en_idx: datos[idx][1]

respuesta: respuesta_en_idx
tipo: "completar"
respuestas_validas:
  - datos[0][1]
  - datos[1][1]
  - datos[2][1]

enunciado: "En el sistema de división de poderes, la función de {poder_en_idx} es ___."

explicacion: |
  La división de poderes busca evitar la concentración de autoridad, asignando funciones específicas al Poder Ejecutivo, Legislativo y Judicial.
```

```
metadata:
  materia: "historia_profucha"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["federalismo", "provincias"]

respuesta: "federal"
tipo: "mc"
opciones_explicitas: ["centralista", "federal", "unitarista", "confederal"]

enunciado: "El principio que garantiza la autonomía de las provincias y su participación en el gobierno nacional se denomina sistema ___."

explicacion: |
  El federalismo permite que las provincias mantengan su autonomía (dictan sus propias leyes y eligen sus autoridades) mientras forman parte de un Estado Nacional único.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["representacion", "sufragio"]

respuesta: "representativa"
tipo: "completar"
respuestas_validas:
  - "representativa"

enunciado: "La Constitución de 1853 establece que el gobierno es ___ porque el pueblo ejerce su soberanía a través de sus representantes."

explicacion: |
  El carácter representativo implica que el poder emana del pueblo, pero este lo delega en representantes elegidos para la toma de decisiones políticas.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["jerarquia", "poderes"]

respuesta_orden: ["Legislativo", "Ejecutivo", "Judicial"]
tipo: "ordenar"
opciones_explicitas: ["Ejecutivo", "Legislativo", "Judicial"]

enunciado: "Ordene los tres poderes del Estado según su orden de mención tradicional en la estructura de la división de poderes (según la jerarquía de la función de creación, ejecución y control de leyes):"

explicacion: |
  La división clásica de Montesquieu, adoptada por la Constitución, separa las funciones en: Legislativa (hacer leyes), Ejecutiva (ejecutar leyes) y Judicial (juzgar el cumplimiento de las leyes).
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["constitucion", "norma_suprema"]

respuesta: "Constitución Nacional"
tipo: completar
respuestas_validas:
  - "Constitución Nacional"

enunciado: "La norma suprema que rige el sistema de gobierno de la República Argentina es la ___."

explicacion: |
  La Constitución Nacional es la ley fundamental del Estado, de donde emanan todas las demás leyes.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["reforma", "1994"]

respuesta: "incorporar la jerarquía de los tratados internacionales de derechos humanos"
tipo: mc
opciones_explicitas: ["eliminar la figura del Presidente", "incorporar la jerarquía de los tratados internacionales de derechos humanos", "cambiar la capital a Córdoba", "abolir el Senado"]

enunciado: "La reforma constitucional de 1994 tuvo como uno de sus hitos principales el hecho de ___."

explicacion: |
  La reforma de 1994 otorgó jerarquía constitucional a los tratados internacionales de derechos humanos con jerarquía superior a las leyes.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["sistema_de_gobierno"]

respuesta: "representativa, republicana y federal"
tipo: mc
opciones_explicitas: ["monárquica, centralista y unitaria", "representativa, republicana y federal", "presidencialista, autoritaria y federal", "parlamentaria, unitaria y federal"]

enunciado: "Según el Artículo 1°, la forma de gobierno adoptada por la Nación Argentina es ___."

explicacion: |
  La Constitución establece un sistema representativo (el pueblo gobierna por medio de representantes), republicano (división de poderes) y federal (autonomía de las provincias).
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["poder_judicial", "corte_suprema"]

respuesta: "Corte Suprema de Justicia de la Nación"
tipo: completar
respuestas_validas:
  - "Corte Suprema de Justicia de la Nación"

enunciado: "El órgano máximo del Poder Judicial de la Nación es la ___."

explicacion: |
  La Corte Suprema es el tribunal de última instancia y el máximo exponente del Poder Judicial en el sistema federal argentino.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["jerarquia_normativa", "piramide_kelsen"]

variables:
  idx: uno_de([0, 1, 2])
  jerarquia: [["Constitución y Tratados de DDHH", "Tratados Internacionales", "Leyes Nacionales"]]

respuesta_orden: ["Constitución y Tratados de DDHH", "Tratados Internacionales", "Leyes Nacionales"]
tipo: ordenar
opciones_explicitas: ["Constitución y Tratados de DDHH", "Tratados Internacionales", "Leyes Nacionales"]

enunciado: "Ordene de mayor a menor jerarquía normativa el siguiente bloque de normas en el sistema argentino actual:"

pasos:
  - "Identifique la norma suprema (Bloque de Constitucionalidad)"
  - "Identifique los tratados con jerarquía superior a las leyes"
  - "Identifique las leyes comunes"

explicacion: |
  Tras la reforma de 1994, la jerarquía se establece con la Constitución y los Tratados de DDHH en la cima, seguidos por los tratados internacionales, y luego las leyes nacionales.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["constitucion", "gobierno"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Un ciudadano propone que el poder debe dividirse en Ejecutivo, Legislativo y Judicial para evitar abusos.", "división de poderes"], ["Un grupo de provincias exige que el gobierno central no interfiera en sus leyes locales.", "federalismo"]]

enunciado: "En el contexto de la organización nacional, si se observa que {datos[escenario_idx][0]}, el principio constitucional que se está aplicando es la {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "división de poderes"
  - "federalismo"

explicacion: |
  La Constitución de 1853 establece la división de poderes como base del sistema republicano para garantizar la libertad y evitar la tiranía.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "basico"
  tags: ["relaciones_exteriores", "soberania"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El Presidente firma un tratado con Francia para fomentar el comercio.", "relaciones_exteriores"], ["La Corte Suprema resuelve un conflicto entre dos provincias.", "jurisdiccion_federal"]]

enunciado: "Si el Poder Ejecutivo actúa en el marco de la facultad de concertar tratados con otras potencias, está ejerciendo la competencia de {casos[caso_idx][1]}."

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["relaciones_exteriores", "jurisdiccion_federal", "legislacion_provincial"]

explicacion: |
  Según el Art. 99, inciso 11, es facultad del Presidente de la Nación celebrar tratados con otras potencias extranjeras.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["derechos", "libertad"]

variables:
  derecho_idx: uno_de([0, 1])
  derechos: [["La libertad de culto es garantizada por la Constitución.", "libertad_religiosa"], ["El derecho de transitar libremente por el territorio.", "libertad_transito"]]

enunciado: "La Constitución de 1853 garantiza que ___ de culto es un derecho fundamental."

respuesta: "libertad_religiosa"
tipo: completar
respuestas_validas:
  - "libertad_religiosa"

explicacion: |
  El Art. 20 establece que la religión de culto de la nación es la católica, pero garantiza la libertad de culto a los habitantes.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "avanzado"
  tags: ["federalismo", "provincias"]

variables:
  provincia_idx: uno_de([0, 1])
  puntos: [["Las provincias conservan todo el poder no delegado a la Nación.", "autonomia"], ["El gobierno nacional tiene facultades delegadas por las provincias.", "delegacion"]]

enunciado: "En un sistema federal como el de 1853, las provincias mantienen su ___ sobre los poderes que no han sido expresamente delegados a la Nación."

respuesta: "autonomia"
tipo: mc
opciones_explicitas: ["autonomia", "delegacion", "soberania_total"]

explicacion: |
  El principio de autonomía provincial es clave: las provincias mantienen todo el poder que no han delegado al gobierno federal.
```

```
metadata:
  materia: "historia"
  tema: "organizacion_nacional_constitucion_1853"
  nivel: "intermedio"
  tags: ["jerarquia", "leyes"]

enunciado: "Ordene la jerarquía de las normas en el orden correcto, desde la más importante a la menos importante, según el espíritu constitucional de 1853:"

pasos:
  - "Identificar la norma suprema."
  - "Identificar la norma que emana del Congreso."
  - "Identificar la norma de aplicación local."

respuesta_orden: ["Constitución Nacional", "Leyes Nacionales", "Constituciones Provinciales"]
tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Leyes Nacionales", "Constituciones Provinciales"]

explicacion: |
  La Constitución es la ley suprema; de ella emanan las leyes nacionales y, en el sistema federal, las constituciones provinciales deben adecuarse a la nacional.
```

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

## Sección: guerra-del-paraguay-y-triple-alianza (33 preguntas)

```
metadata:
  materia: "pensamiento_historico"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["lideres", "solano_lopez"]

respuesta: "Francisco Solano López"
tipo: completar
respuestas_validas:
  - "Francisco Solano López"
  - "Solano López"
  - "López"

enunciado: "El líder de Paraguay durante la Guerra de la Triple Alianza fue ___."

explicacion: |
  Francisco Solano López dirigió al Paraguay durante todo el conflicto hasta su muerte en 1870.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["lideres", "mitre"]

respuesta: "Bartolomé Mitre"
tipo: completar
respuestas_validas:
  - "Bartolomé Mitre"
  - "Mitre"

enunciado: "El presidente argentino que firmó el tratado de alianza fue ___."

explicacion: |
  Bartolomé Mitre fue el presidente de la Nación Argentina que firmó el Tratado de la Triple Alianza.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["tratados", "navegacion"]

respuesta: "navegación libre"
tipo: completar
respuestas_validas:
  - "navegación libre"
  - "libre navegación"
  - "libre navegacion"

enunciado: "Uno de los objetivos del Tratado de la Triple Alianza era garantizar la ___ de los ríos Paraná y Uruguay."

explicacion: |
  La libre navegación de los ríos interiores era un objetivo clave para los aliados, especialmente para Brasil y Argentina.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "economia"]

respuesta: "cuenca del Río de la Plata"
tipo: completar
respuestas_validas:
  - "cuenca del Río de la Plata"
  - "cuenca del rio de la plata"

enunciado: "Brasil y las provincias argentinas buscaban expandir su influencia en la ___, creando tensión con Paraguay."

explicacion: |
  El control de la cuenca del Río de la Plata y sus ríos navegables era estratégico para el comercio regional.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["fin", "solano_lopez"]

respuesta: "muerte de Solano López"
tipo: completar
respuestas_validas:
  - "muerte de Solano López"
  - "muerte de solano lopez"
  - "muerte de Francisco Solano López"

enunciado: "La guerra finalizó en 1870 con el ___."

explicacion: |
  La muerte del presidente Francisco Solano López en la batalla de Cerro Corá marcó el fin efectivo de la guerra.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["navegacion", "tratados"]

respuesta: "Paraná y Uruguay"
tipo: completar
respuestas_validas:
  - "Paraná y Uruguay"
  - "parana y uruguay"
  - "Paraná y el Uruguay"

enunciado: "El tratado prometía garantizar la navegación libre de los ríos ___."

explicacion: |
  Los ríos Paraná y Uruguay eran las vías fluviales principales para el comercio y la logística militar.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["tratados", "fronteras"]

respuesta: "beneficiara a los aliados"
tipo: completar
respuestas_validas:
  - "beneficiara a los aliados"

enunciado: "El tratado buscaba definir las fronteras de manera que ___."

explicacion: |
  Los aliados buscaban redefinir las fronteras a su favor, lo que generó disputas posteriores.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["brasil", "contraataque"]

respuesta: "invadiendo el norte"
tipo: completar
respuestas_validas:
  - "invadiendo el norte"
  - "invadiendo el norte del paraguay"

enunciado: "Brasil respondió a la invasión paraguaya ___ del Paraguay."

explicacion: |
  Tras la invasión al Mato Grosso, Brasil lanzó una contraofensiva invadiendo el norte de Paraguay.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["estrategia", "superioridad"]

respuesta: "numérica y logística"
tipo: completar
respuestas_validas:
  - "numérica y logística"
  - "superioridad numérica y logística"

enunciado: "Con el tiempo, la superioridad ___ de la Triple Alianza comenzó a pesar contra Paraguay."

explicacion: |
  La combinación de más hombres y mejor suministro permitió a los aliados avanzar.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "clima_politico"]

respuesta: "desconfianza mutua"
tipo: completar
respuestas_validas:
  - "desconfianza mutua"
  - "desconfianza"

enunciado: "La rivalidad creó un clima de ___ que terminó estallando en guerra."

explicacion: |
  La falta de confianza entre los estados de la región fue un factor subyacente importante.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["cronologia", "duracion"]

respuesta: "6"
tipo: input

enunciado: "La guerra duró ___ años, desde 1864 hasta 1870."

explicacion: |
  El conflicto abarcó seis años completos de combate intenso.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["alianza", "participantes"]

respuesta: "Brasil"
tipo: completar

enunciado: "La Triple Alianza estuvo conformada por el Imperio de ___, la Nación Argentina y la República Oriental del Uruguay."

explicacion: |
  La coalición aliada enfrentó al Paraguay y estaba integrada por Brasil, Argentina y Uruguay.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["lideres", "solano_lopez"]

respuesta: "Francisco Solano López"
tipo: completar

enunciado: "El Paraguay, en ese entonces un país industrializado para su época, estaba bajo el mando de ___."

explicacion: |
  Francisco Solano López lideró al Paraguay durante la guerra, manteniendo una política de aislamiento relativo pero con desarrollo industrial interno.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "uruguay"]

respuesta: "intervención de Brasil en los asuntos internos de Uruguay"
tipo: completar

enunciado: "El detonante final fue la ___, lo que el Paraguay vio como una amenaza a su soberanía."

explicacion: |
  Brasil apoyó a los colorados uruguayos, lo que llevó a Solano López a intervenir y comenzar las hostilidades.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["invasion", "mato_grosso"]

respuesta: "Mato Grosso"
tipo: completar

enunciado: "En diciembre de 1864, Solano López invadió el territorio de ___, iniciando las hostilidades."

explicacion: |
  La invasión del Mato Grosso fue la primera acción militar concreta de la guerra en diciembre de 1864.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["tratado", "alianza"]

respuesta: "mayo de 1865"
tipo: completar

enunciado: "Ante la invasión brasileña al norte del Paraguay, el gobierno argentino liderado por Bartolomé Mitre firmó el Tratado de la Triple Alianza en ___."

explicacion: |
  El tratado se firmó en mayo de 1865 para derrotar a Solano López y garantizar la navegación libre de los ríos.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["objetivos", "navegacion"]

respuesta: "garantizar la navegación libre de los ríos Paraná y Uruguay"
tipo: completar

enunciado: "Uno de los compromisos del tratado era ___."

explicacion: |
  La libre navegación de los ríos fue un objetivo clave para los aliados, especialmente para Brasil y Argentina.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["economia", "industrializacion"]

respuesta: "aislado pero industrializado"
tipo: completar

enunciado: "Para entender el conflicto, hay que notar que el Paraguay era un país ___ para sus estándares de la época."

explicacion: |
  A pesar de su aislamiento político, Paraguay tenía ferrocarriles, astilleros y fábricas de pólvora.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "hegemonia"]

respuesta: "control de los ríos navegables y los territorios fronterizos"
tipo: completar

enunciado: "La tensión previa a la guerra se debía a la rivalidad por el ___ en la cuenca del Río de la Plata."

explicacion: |
  La disputa por el control territorial y comercial fue la raíz profunda del conflicto.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "avanzado"
  tags: ["batallas", "humaita"]

respuesta: "Curupayty"
tipo: completar

enunciado: "Inicialmente, los paraguayos lograron victorias tácticas, como el rechazo del asalto aliado en la batalla de ___ (1866)."

explicacion: |
  En Curupayty, los paraguayos rechazaron un asalto aliado infligiendo bajas enormes al atacante — una de las pocas victorias tácticas significativas iniciales de los paraguayos. Humaitá, en cambio, era la fortaleza paraguaya que resistió un largo asedio y cayó ante los aliados en 1868.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["ejercito", "demografia"]

respuesta: "campesinos"
tipo: completar

enunciado: "El ejército paraguayo, que en su mayoría estaba compuesto por ___, enfrentó una superioridad logística adversa."

explicacion: |
  La fuerza principal del ejército paraguayo provenía del campesinado, lo que afectaba su logística comparada con los aliados.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["invasion", "mato_grosso"]

variables:
  territorio: "Mato Grosso"

respuesta: "Mato Grosso"
tipo: mc
opciones: 4

enunciado: "¿Qué territorio invadió Solano López en diciembre de 1864 para iniciar la guerra?"
opciones_explicitas: ["Mato Grosso", "Corrientes", "Rio Grande do Sul", "Paraná"]

explicacion: |
  La primera acción fue la invasión al Mato Grosso, territorio brasileño.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["tratado", "fechas"]

variables:
  fecha: "mayo de 1865"

respuesta: "mayo de 1865"
tipo: mc
opciones: 4

enunciado: "¿En qué momento se firmó el Tratado de la Triple Alianza?"
opciones_explicitas: ["mayo de 1865", "diciembre de 1864", "enero de 1866", "octubre de 1867"]

explicacion: |
  El tratado se firmó en mayo de 1865, después de que Paraguay invadiera Corrientes (territorio argentino) al no obtener paso libre hacia Rio Grande do Sul, lo que sumó a la Argentina al conflicto.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["lideres"]

variables:
  lider: "Francisco Solano López"

respuesta: "Francisco Solano López"
tipo: mc
opciones: 4

enunciado: "¿Quién era el líder del Paraguay durante la guerra?"
opciones_explicitas: ["Francisco Solano López", "José Gaspar Rodríguez de Francia", "Juan Manuel de Rosas", "Bartolomé Mitre"]

explicacion: |
  Francisco Solano López fue el presidente y líder militar del Paraguay en este conflicto.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["alianza"]

variables:
  pais: "Uruguay"

respuesta: "Uruguay"
tipo: mc
opciones: 4

enunciado: "¿Cuál de los siguientes países formó parte de la Triple Alianza?"
opciones_explicitas: ["Uruguay", "Bolivia", "Chile", "Paraguay"]

explicacion: |
  La Triple Alianza estaba compuesta por Brasil, Argentina y Uruguay.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["economia"]

variables:
  caracteristica: "industrializado"

respuesta: "industrializado"
tipo: mc
opciones: 4

enunciado: "¿Cómo se describe la economía del Paraguay previo al conflicto?"
opciones_explicitas: ["industrializado", "exclusivamente agrícola", "dependiente del comercio exterior", "basado en la minería"]

explicacion: |
  Paraguay tenía ferrocarriles, astilleros y fábricas de pólvora, lo que lo hacía industrializado para la región.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas"]

variables:
  causa: "intervención de Brasil en Uruguay"

respuesta: "intervención de Brasil en Uruguay"
tipo: mc
opciones: 4

enunciado: "¿Qué evento fue el detonante final del conflicto?"
opciones_explicitas: ["intervención de Brasil en Uruguay", "invasión argentina a Corrientes", "rebelión en Mato Grosso", "bloqueo naval a Buenos Aires"]

explicacion: |
  La intervención de Brasil en los asuntos internos de Uruguay fue el detonante directo.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["geografia", "navegacion"]

variables:
  rios: "Paraná y Uruguay"

respuesta: "Paraná y Uruguay"
tipo: mc
opciones: 4

enunciado: "El tratado prometía garantizar la navegación libre de los ríos:"
opciones_explicitas: ["Paraná y Uruguay", "Amazonas y Madeira", "De la Plata y Uruguay", "Paraná y Paraguay"]

explicacion: |
  La libre navegación de los ríos Paraná y Uruguay era un objetivo clave de la alianza.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["ejercito"]

variables:
  composicion: "campesinos"

respuesta: "campesinos"
tipo: mc
opciones: 4

enunciado: "¿De qué grupo social provenía la mayoría del ejército paraguayo?"
opciones_explicitas: ["campesinos", "oficiales profesionales europeos", "esclavizados liberados", "nobles locales"]

explicacion: |
  La fuerza militar paraguaya estaba mayoritariamente compuesta por campesinos.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "avanzado"
  tags: ["batallas"]

variables:
  batalla: "Curupayty"

respuesta: "Curupayty"
tipo: mc
opciones_explicitas: ["Curupayty", "Humaitá", "Tuyutí", "Piribebuy"]

enunciado: "¿En qué batalla rechazaron los paraguayos un asalto aliado con enormes bajas para el atacante, al inicio de la guerra?"

explicacion: |
  En Curupayty (1866) los paraguayos rechazaron el asalto aliado — una victoria táctica importante para Paraguay al inicio de la guerra. Humaitá era su fortaleza, y cayó ante los aliados recién en 1868, tras un largo asedio.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["cronologia"]

variables:
  anio: 1864

respuesta: 1864
tipo: input

enunciado: "¿En qué año comenzó la Guerra del Paraguay con la invasión al Mato Grosso?"

explicacion: |
  El conflicto comenzó en 1864.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["cronologia"]

variables:
  anio: 1870

respuesta: 1870
tipo: input

enunciado: "¿En qué año finalizó la Guerra del Paraguay?"

explicacion: |
  El conflicto terminó en 1870.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["alianza"]

variables:
  pais1: "Brasil"
  pais2: "Argentina"
  pais3: "Uruguay"

respuesta: "Uruguay"
tipo: input

enunciado: "Completa el nombre del tercer país que formó parte de la Triple Alianza junto a {pais1} y {pais2}."

explicacion: |
  Los tres miembros de la Triple Alianza fueron Brasil, Argentina y Uruguay.
```

## Sección: economias-regionales-tempranas (23 preguntas)

```
metadata:
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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

