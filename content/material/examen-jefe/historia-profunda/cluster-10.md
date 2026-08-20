# Examen jefe — Maestro de Conflictos Históricos

> Logro #108. Completaste el examen sobre guerras, descolonización y arte rupestre con éxito jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **126 preguntas totales** en 5/5 secciones.

---

## Sección: guerra-fria-descolonizacion (26 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "orden_mundial"]

respuesta: "bipolar"
tipo: mc
opciones_explicitas: ["unipolar", "bipolar", "multipolar", "unilateral"]

enunciado: "Debido a la hegemonía de las dos superpotencias (EEUU y la URSS), el sistema internacional durante la Guerra Fría se caracterizó por ser un mundo de carácter ________."

explicacion: |
  El término 'bipolar' se refiere a la existencia de dos centros de poder político, económico y militar contrapuestos que dominaron la escena internacional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["economia", "doctrinas"]

variables:
  escenario: uno_de([["Plan Marshall", "ayuda económica de EEUU"], ["COMECON", "cooperación económica del bloque socialista"]])

respuesta: escenario[0][0
tipo: mc
opciones_explicitas: ["Plan Marshall", "COMECON", "Tratado de Varsovia", "Plan Molotov"]

enunciado: "En el marco de la contención del comunismo, la estrategia de Estados Unidos para reconstruir las economías de Europa Occidental fue el {escenario[1]}."

explicacion: |
  El Plan Marshall fue el programa de asistencia económica de EE.UU. para la reconstrucción de Europa tras la Segunda Guerra Mundial, diseñado para evitar el avance del comunismo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["crisis", "nucleares"]

respuesta: 1962
tipo: completar
tolerancia_abs: 0

enunciado: "La crisis de los misiles en Cuba, el momento de mayor tensión nuclear entre las superpotencias, ocurrió en el año ________."

explicacion: |
  En octubre de 1962, la instalación de misiles soviéticos en Cuba llevó al mundo al borde de una guerra nuclear total.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["alemania", "fronteras"]

respuesta: ["RFA", "RDA", "Alemania Oriental", "Alemania Occidental"]
tipo: ordenar
opciones_explicitas: ["RFA", "RDA", "Alemania Oriental", "Alemania Occidental"]

enunciado: "Ordena las entidades políticas resultantes de la división alemana, desde la capitalista hacia la socialista:"

explicacion: |
  La República Federal de Alemania (RFA) representaba al bloque occidental, mientras que la República Democrática Alemana (RDA) representaba al bloque soviético.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["descolonizacion", "asiatismo"]

respuesta: tabla[0][1
tipo: completar
opciones_explicitas: ["No alineados", "Aliados"]
tabla: [["No alineados", "No alineados"], ["Aliados", "Aliados"]]

enunciado: "Durante la Guerra Fría, los países que decidieron no sumarse ni al bloque de EE.UU. ni al de la URSS se conocieron como países ________."

explicacion: |
  El Movimiento de Países No Alineados surgió para buscar una vía neutral frente a la polarización de la Guerra Fría.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["descolonizacion", "postguerra"]

tipo: mc
opciones_explicitas: ["El fortalecimiento de las potencias europeas", "El debilitamiento de las potencias europeas tras la Segunda Guerra Mundial", "La unión de todas las colonias bajo un mando único", "El apoyo de las colonias a los regímenes coloniales"]

enunciado: "Tras la Segunda Guerra Mundial, ¿cuál fue el principal factor que impulsó los procesos de independencia en África y Asia?"

explicacion: |
  La Segunda Guerra Mundial dejó a las potencias coloniales tradicionales (como Reino Unido y Francia) agotadas económica y militarmente, lo que facilitó los movimientos de liberación nacional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["conceptos", "soberania"]

tipo: completar
opciones_explicitas: ["soberanía", "colonialismo", "imperialismo"]
respuestas_validas: ["soberanía"]

enunciado: "El proceso de descolonización permitió que las antiguas colonias recuperaran su ___________ política y económica."

explicacion: |
  La soberanía es el derecho de un Estado a autogobernarse sin la interferencia de potencias extranjeras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["onu", "diplomacia"]

variables:
  caso_onu: uno_de([["La Carta de las Naciones Unidas", "promovió la autodeterminación"], ["El Pacto de Varsovia", "no tuvo relación con la descolonización"]])

tipo: mc
opciones_explicitas: ["La Carta de las Naciones Unidas", "El Pacto de Varsovia", "La Liga de las Naciones", "El Tratado de Versalles"]

enunciado: "En el contexto de la descolonización, {caso_onu[0]} fue fundamental porque la {caso_onu[1]}."

explicacion: |
  La ONU, a través de su principio de autodeterminación de los pueblos, dio un marco jurídico internacional que legitimó los movimientos de independencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["geopolitica", "guerra_fria"]

variables:
  escenario: uno_de([["Asia y África", "se convirtieron en escenarios de disputa"], ["Europa", "se mantuvo estable"]])

tipo: mc
opciones_explicitas: ["Se unificaron en un solo bloque", "Se convirtieron en escenarios de disputa entre las superpotencias", "Eliminaron el capitalismo de sus territorios", "Se volvieron potencias nucleares de inmediato"]

enunciado: "Debido a la Guerra Fría, la descolonización en {escenario[0]} provocó que estos nuevos estados {escenario[1]} entre EE. UU. y la URSS."

explicacion: |
  Muchos nuevos estados independientes se convirtieron en "campos de batalla" por delegación (proxy wars) debido a la polarización de la Guerra Fría.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

tipo: ordenar
opciones_explicitas: ["Agotamiento de potencias europeas", "Surgimiento de movimientos de liberación", "Declaración de independencia de las colonias", "Consolidación de nuevos Estados-Nación"]

enunciado: "Ordena cronológicamente las etapas típicas de un proceso de descolonización:"

explicacion: |
  Primero ocurre el debilitamiento de la metrópoli, luego la organización de movimientos locales, la ruptura formal y finalmente la formación del nuevo Estado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["guerra_fria", "descolonizacion", "no_alineados"]

variables:
  escenario: uno_de([
    ["Egipto de Nasser", "movimiento de no alineación", "Egipto de Nasser", "Egipto de Nasser"],
    ["Yugoslavia de Tito", "movimiento de no alineación", "Yugoslavia de Tito", "Yugoslavia de Tito"],
    ["India de Nehru", "movimiento de no alineación", "India de Nehru", "India de Nehru"]
  ])

enunciado: "Durante la descolonización, muchos países intentaron evitar la lógica de bloques mediante la creación del ___."

opciones_explicitas: ["movimiento de no alineación", "Pacto de Varsovia", "OTAN"]
respuesta: escenario[2
tipo: mc

explicacion: |
  Tras la Segunda Guerra Mundial, líderes de países recién independizados buscaron mantener su soberanía evitando alinearse con EE.UU. o la URSS, dando origen al Movimiento de Países No Alineados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["geopolitica", "bloques"]

enunciado: "Un país recién independizado que decide aceptar ayuda financiera masiva de la URSS para su industrialización pesada, corre el riesgo de alinearse con el bloque ___."

respuestas_validas: ["comunista", "capitalista", "neutral"]
respuesta: "comunista"
tipo: completar

explicacion: |
  La ayuda económica y técnica era una herramienta de influencia geopolítica; la dependencia de modelos de desarrollo soviéticos solía arrastrar a los nuevos estados al bloque socialista.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["terminologia", "geopolitica"]

enunciado: "En el contexto de la Guerra Fría, el término 'Tercer Mundo' se utilizaba para referirse a:"

opciones_explicitas: ["países alineados con EE.UU.", "países alineados con la URSS", "países no alineados o en vías de desarrollo"]
respuesta: "países no alineados o en vías de desarrollo"
tipo: mc

explicacion: |
  Mientras el Primer Mundo era el bloque capitalista y el Segundo el socialista, el término 'Tercer Mundo' designaba a las naciones que no pertenecían a ninguno de estos dos polos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["intervencionismo", "soberania"]

enunciado: "Ordena los factores que explican la intervención de las superpotencias en procesos de descolonización de menor a mayor impacto en la soberanía de los nuevos estados:"

opciones_explicitas: ["Intereses económicos por recursos naturales", "Propagación de ideologías políticas", "Control de puntos estratégicos militares"]
respuesta: ["Intereses económicos por recursos naturales", "Propagación de ideologías políticas", "Control de puntos estratégicos militares"]
tipo: ordenar

explicacion: |
  Aunque los tres factores interactuaban, la lucha por el control de bases militares y puntos estratégicos (como el Canal de Suez) era el factor determinante para la soberanía nacional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["vietnam", "conflicto_proxy"]

variables:
  caso: uno_de([
    ["Vietnam del Sur", "apoyado por EE.UU.", "Vietnam del Sur", "Vietnam del Sur"],
    ["Vietnam del Norte", "apoyado por la URSS", "Vietnam del Norte", "Vietnam del Norte"]
  ])

enunciado: "En el conflicto de Vietnam, el país que era ___ fue el principal escenario de la lucha entre las ideologías de la Guerra Fría."

opciones_explicitas: ["apoyado por EE.UU.", "apoyado por la URSS", "neutral"]
respuesta: caso[2
tipo: mc

explicacion: |
  Vietnam se convirtió en un conflicto de代理 (proxy war), donde la descolonización se vio truncada por la lucha de las superpotencias por expandir sus esferas de influencia.
```

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["berlin", "simbolo"]

tipo: mc
opciones_explicitas: ["La caída del Muro de Berlín", "La Revolución Rusa", "La Crisis de los Misiles", "La Guerra de Vietnam"]

enunciado: "El evento ocurrido en 1989 que simbolizó el fin de la división de Europa y el colapso del bloque socialista fue ___."

explicacion: |
  La caída del Muro de Berlín en noviembre de 1989 marcó el inicio del fin de la Guerra Fría, permitiendo la reunificación de Alemania y el colapso de los regímenes comunistas en Europa del Este.
```

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["urss", "geopolitica"]

variables:
  escenario: uno_de([["URSS", "1991"], ["Alemania", "1989"]])

tipo: completar
respuestas_validas: ["URSS", "1991"]

enunciado: "La disolución formal de la {escenario[0]} ocurrió en el año {escenario[1]}."

explicacion: |
  La desintegración de la Unión Soviética en 1991 puso fin a la existencia de la superpotencia que lideraba el bloque socialista, consolidando el orden mundial unipolar liderado por EE.UU.
```

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["gorbachev", "reformas"]

tipo: mc
opciones_explicitas: ["Glasnost y Perestroika", "El Plan Marshall", "La Doctrina Monroe", "La Doctrina Truman"]

enunciado: "Las reformas políticas y económicas implementadas por Mijaíl Gorbachachev que aceleraron el fin de la URSS fueron la ___."

explicacion: |
  La Perestroika (reestructuración económica) y la Glasnost (apertura política) fueron los motores de cambio que, aunque buscaban modernizar el sistema, terminaron por desestabilizar el control centralizado de la URSS.
```

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

tipo: ordenar
opciones_explicitas: ["Caída del Muro de Berlín", "Disolución de la URSS", "Reunificación de Alemania", "Tratado de Malta"]

enunciado: "Ordena cronológicamente los siguientes eventos que marcaron el fin de la Guerra Fría:"

explicacion: |
  La secuencia comenzó con la caída del muro (1989), seguida de la reunificación alemana (1990), la firma de acuerdos de paz/fin de la era (Tratado de Malta, 1989/90) y culminó con la disolución total de la URSS (1991).
```

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "superpotencias"]

tipo: completar
tolerancia_abs: 0

enunciado: "Tras la caída de la URSS, el mundo dejó de ser bipolar para convertirse en un sistema ___."

explicacion: |
  Con la desaparición de la URSS como superpotencia, el equilibrio de poder se desplazó hacia un modelo donde una sola nación (EE.UU.) dominaba la escena internacional, conocido como unipolaridad.
```

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "superpotencias"]

tipo: mc
opciones_explicitas: ["unipolar", "bipolar", "tripolar", "multipolar"]

enunciado: "Tras la caída de la URSS, el mundo dejó de ser bipolar para convertirse en un sistema ___."

explicacion: |
  Con la desaparición de la URSS como superpotencia, el equilibrio de poder se desplazó hacia un modelo donde una sola nación (EE.UU.) dominaba la escena internacional, conocido como unipolaridad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "guerra_fria"]

variables:
  datos: [["Un país con un sistema de partido único y economía centralizada bajo la influencia de la URSS", "Bloque del Este"], ["Un país con una economía de mercado y alianzas militares como la OTAN", "Bloque Occidental"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Bloque del Este", "Bloque Occidental", "Países No Alineados"]

enunciado: "En el contexto de la Guerra Fría, se describe a un país con las siguientes características: {datos[idx][0]}. ¿A qué bloque pertenecía?"

explicacion: |
  La división del mundo en dos grandes bloques ideológicos y económicos definió la Guerra Fría: el Bloque del Este (comunista) y el Bloque Occidental (capitalista).
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["descolonizacion", "no_alineados"]

variables:
  datos: [["India", "Jawaharlal Nehru"], ["Egipto", "Gamal Abdel Nasser"], ["Yugoslavia", "Josip Broz Tito"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Jawaharlal Nehru", "Gamal Abdel Nasser", "Josip Broz Tito"]

enunciado: "Durante la descolonización, algunos líderes buscaron la neutralidad frente a las superpotencias. El líder que representó a {datos[idx][0]} en el Movimiento de Países No Alineados fue ___."

explicacion: |
  Líderes como Nehru (India), Nasser (Egipto) y Tito (Yugoslavia) fueron piezas clave para establecer una 'tercera vía' que no se alineara ni con EE.UU. ni con la URSS.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["crisis", "misiles"]

variables:
  datos: [["Cuba", "1962"], ["Berlín", "1961"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1953", "1962", "1961", "1979"]

enunciado: "La crisis de los misiles en {datos[idx][0]} llevó al mundo al borde de una guerra nuclear en el año ___."

explicacion: |
  La Crisis de los Misiles (en Cuba en 1962 o la construcción del muro en Berlín en 1961) representó los momentos de mayor tensión de la Guerra Fría.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["independencia", "africa"]

variables:
  datos: [["La independencia de Argelia de Francia", "Guerra de Argelia"], ["La independencia de Ghana del Reino Unido", "Independencia de Ghana"]]
  idx: uno_de([0, 1])

respuesta: [datos[idx][0], datos[idx][1]]
tipo: ordenar
opciones_explicitas: ["Guerra de Argelia", "Independencia de Ghana"]

enunciado: "Identifica el orden cronológico de los procesos de descolonización mencionados: {datos[idx][0]} y {datos[idx][1]}."

explicacion: |
  La descolonización fue un proceso heterogéneo: en África subsahariana fue mayormente política (Ghana, 1957) y en el norte de África fue frecuentemente violenta (Argelia, 1954-1962).
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["doctrina", "contencion"]

variables:
  datos: [["Contención del comunismo", "Truman"], ["Contención del comunismo", "Eisenhower"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Truman", "Eisenhower"]

enunciado: "La política estadounidense de frenar la expansión del comunismo durante la Guerra Fría se conoció como la doctrina de ___."

explicacion: |
  La Doctrina Truman (1947) estableció el principio de apoyo a los pueblos libres que se resistían al intento de sometimiento por minorías armadas o presiones externas.
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
  datos: [
    ["Buenos Aires", "centralizar la recaudación de la aduana para el gobierno central"],
    ["Las provincias", "repartir los ingresos de la aduana de forma equitativa"]
  ]

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["centralizar la recaudación de la aduana para el gobierno central", "repartir los ingresos de la aduana de forma equitativa"]

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

respuesta: ["Centralismo", "Autonomía provincial", "Guerras civiles"]
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

tipo: mc
opciones_explicitas: ["Unitarios", "Federales", "Anarquistas", "Libertadores"]

enunciado: "Durante las guerras civiles argentinas del siglo XIX, las dos facciones políticas principales que se enfrentaron por el modelo de organización del Estado fueron los ___ y los ___."

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
respuestas_validas: ["centralismo", "federalismo"]
respuesta: escenario[0

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

variables:
  causa_econ: uno_de([["la libre navegación de los ríos", "la nacionalización de la aduana"]])

tipo: mc
opciones_explicitas: ["la libre navegación de los ríos", "la nacionalización de la aduana", "la eliminación de los impuestos", "la unión aduanera"]

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
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["soberania", "provincias"]

tipo: vf
opciones_explicitas: [verdadero, falso]

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

variables:
  rol_rosas: uno_de(["gobernador de Buenos Aires", "presidente de la Confederación", "dictador de la nación"])

respuesta: "gobernador de Buenos Aires"
tipo: mc
opciones_explicitas: ["gobernador de Buenos Aires", "presidente de la Confederación", "dictador de la nación"]

enunciado: "Durante el período de la Confederación Argentina, Juan Manuel de Rosas ejercía el poder real como {rol_rosas}, manteniendo el control sobre la Aduana y los recursos de la provincia."

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
respuestas_validas: ["unitarios"]

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

respuesta: ["Surgimiento del caudillismo", "Llegada al poder con facultades extraordinarias", "Consolidación del orden rosista"]
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
respuestas_validas: ["Constitución Nacional", "Constitución de 1853"]

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
respuestas_validas: ["exilio", "muerte", "derrota"]

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
respuesta: ["Tratado de San Justo", "Batalla de Caseros", "Sanción de la Constitución Nacional"]
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
  escenario: uno_de([
    ["Un grupo de caudillos busca que cada provincia mantenga su propia autonomía y leyes locales.", "federal"],
    ["Un gobierno centralizado busca concentrar todo el poder político y económico en Buenos Aires.", "unitario"]
  ])
  idx: uno_de([0,1])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["federal", "unitario"]

enunciado: "En el contexto de las guerras civiles argentinas, si se propone que {escenario[idx][0]}, ¿qué postura se está defendiendo?"

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
  caso: uno_de([
    ["La libre navegación de los ríos interiores es una demanda clave de las provincias.", "federal"],
    ["El control exclusivo de la renta aduanera por parte del gobierno central es la prioridad.", "unitario"]
  ])
  idx: uno_de([0,1])

respuesta: caso[idx][1
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
  modelo: uno_de([
    ["Un gobierno central con un poder ejecutivo fuerte que designa a los gobernadores.", "unitario"],
    ["Un sistema donde las provincias eligen a sus propios gobernadores de forma autónoma.", "federal"]
  ])
  idx: uno_de([0,1])

respuesta: modelo[idx][1
tipo: completar
respuestas_validas: ["unitario", "federal"]

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
  conflicto: uno_de([
    ["La disputa por la distribución de los ingresos de la aduana de Buenos Aires.", "federal"],
    ["La lucha por la hegemonía política entre la élite porteña y los caudillos.", "unitario"]
  ])
  idx: uno_de([0,1])

respuesta: conflicto[idx][1
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
  orden_de_poder: uno_de([
    ["Provincia - Nación - Provincia", "federal"],
    ["Nación - Provincia - Nación", "unitario"]
  ])
  idx: uno_de([0,1])

respuesta: ["Provincia", "Nación", "Provincia", "Nación", "Provincia"]
tipo: ordenar
opciones_explicitas: ["Provincia", "Nación", "Provincia", "Nación", "Provincia"]

enunciado: "Ordene la jerarquía de poder según el modelo {orden_de_poder[idx][0]}."

explicacion: |
  En el federalismo la soberanía reside en las provincias que delegan facultades a la nación; en el unitarismo la nación es la fuente de autoridad sobre las provincias.
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
respuestas_validas: ["Provincias Unidas en Sudamérica"]

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

enunciado: "¿Qué importante legislador y creador de la bandera fue uno de los diputados que participó en el Congreso de Tucumán?"

explicacion: |
  Manuel Belgrano, además de su labor militar, tuvo un rol fundamental en el debate del Congreso de 1816.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["orden", "procesos"]

tipo: ordenar
opciones_explicitas: ["Revolución de Mayo", "Primer Triunvirato", "Congreso de Tucumán", "Batalla de San Lorenzo"]

enunciado: "Ordena cronológicamente los siguientes hitos clave del proceso de independencia argentina:"

explicacion: |
  El orden correcto es: Revolución de Mayo (1810), Primer Triunvirato (1812), Congreso de Tucumán (1816) y Batalla de San Lorenzo (1812 - nota: en este caso el usuario debe notar que San Lorenzo es anterior al Congreso, pero el DSL pide ordenar la lista proporcionada. Corregido para lógica temporal: Mayo -> Triunvirato -> San Lorenzo -> Congreso es incorrecto, el orden real es Mayo -> Triunvirato -> San Lorenzo -> Congreso si se considera la cronología estricta de los hechos, pero la lista debe ser coherente)."

# Reajuste para que el orden sea lógico en la respuesta:
# 1. Revolución de Mayo (1810)
# 2. Primer Triunvirato (1812)
# 3. Batalla de San Lorenzo (1813)
# 4. Congreso de Tucumán (1816)
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
  pais: "uno_de(['Chile', 'Chile', 'Chile'])"

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

respuesta: [
  "Guerra de Zapa",
  "Cruce de los Andes",
  "Batalla de Chacabuco"
]
tipo: ordenar
opciones_explicitas: [
  "Guerra de Zapa",
  "Cruce de los Andes",
  "Batalla de Chacabuco",
  "Batalla de Maipú"
]

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
respuestas_validas: ["Perú"]

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

respuesta: "verdadero"
tipo: completar
enunciado: "¿La victoria en la Batalla de Chacabuco (12 de febrero de 1817) fue una consecuencia directa del éxito del Cruce de los Andes? {resultado}"

variables:
  resultado: "uno_de(['verdadero', 'falso'])"

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
respuestas_validas: ["Cruce de los Andes"]

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

variables:
  caso: uno_de([0, 1])

respuesta: uno_de([datos[caso][1]])
tipo: mc
opciones_explicitas: ["Batalla de Maipú", "Batalla de Chacabuco", "Batalla de San Francisco", "Batalla de Yungay"]

enunciado: "Tras la victoria en Chacabuco, la consolidación definitiva de la independencia de Chile fue sellada en la batalla de {datos[caso][0]}."

variables:
  datos: [["Maipú", "Batalla de Maipú"], ["Yungay", "Batalla de Yungay"]]

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

respuesta: ["Cruce de los Andes", "Batalla de Maipú", "Expedición al Perú"]
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
respuestas_validas: ["25 de mayo de 1810"]

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

respuesta: ["Revolución de Mayo", "Guerras de Independencia", "Declaración de la Independencia", "Cruce de los Andes"]
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
respuestas_validas: ["soberana", "autónoma"]

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

variables:
  escenarios: [["1810", "25 de mayo"], ["1816", "9 de julio"], ["1810", "25 de mayo"]]
  idx: uno_de([0, 1])

respuesta: escenarios[idx][1
tipo: mc
opciones_explicitas: ["25 de mayo", "9 de julio", "20 de junio", "12 de octubre"]

enunciado: "La Revolución de Mayo, hito fundamental del proceso de independencia, tuvo lugar en el año {escenarios[idx][0]}."

explicacion: |
  El proceso de independencia comenzó con la Revolución de Mayo en 1810, que llevó a la formación del primer gobierno patrio.
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

respuesta: hitos[idx][1
tipo: completar
respuestas_validas: ["9 de julio de 1816", "25 de mayo de 1810"]

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

respuesta: ["Revolución de Mayo", "Establecimiento del Directorio", "Declaración de la Independencia"]
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

respuesta: batallas[idx][1
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

## Sección: guerras-mundiales (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "causas_primera_guerra"
  nivel: "basico"
  tags: ["causas", "nacionalismo", "imperialismo"]

respuesta: "Francisco Fernando"
tipo: completar
respuestas_validas: ["Francisco Fernando"]

enunciado: "El asesinato del archiduque ___ en Sarajevo fue el detonante que activó el sistema de alianzas en Europa en 1914."

explicacion: |
  El asesinato del heredero al trono austrohúngaro, Francisco Fernando, por un nacionalista serbio, desencadenó la crisis de julio que llevó a la guerra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "alianzas_guerra"
  nivel: "intermedio"
  tags: ["alianzas", "triple_entente", "triple_entente"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1
tipo: mc
opciones_explicitas: 
  - ["Triple Entente", "Triple Alianza"]
  - ["Triple Entente", "Triple Alianza"]

enunciado: "Si consideramos el bloque de potencias formado por Francia, Gran Bretaña y Rusia, estamos hablando de la {tabla[idx][0]}."

pasos:
  - "Identificar los miembros del bloque mencionado."
  - "Diferenciar entre la Triple Entente y la Triple Alianza."

explicacion: |
  La Triple Entente estaba compuesta por Francia, Reino Unido y Rusia, mientras que la Triple Alianza (Potencias Centrales) incluía a Alemania, Austria-Hungría e Italia (inicialmente).

tabla:
  - ["Triple Entente", "Triple Entente"]
  - ["Triple Alianza", "Triple Alianza"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_trincheras"
  nivel: "basico"
  tags: ["trench_warfare", "estancamiento"]

respuesta: "estancamiento"
tipo: mc
opciones_explicitas: ["movimiento", "estancamiento", "guerra_relampago"]

enunciado: "El predominio de la defensa sobre la ofensiva y el uso de redes de trincheras provocaron un ___ táctico en el frente occidental."

explicacion: |
  La guerra de trincheras impidió avances significativos durante años, convirtiendo el conflicto en una guerra de desgaste y posiciones estáticas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tecnologia_militar"
  nivel: "intermedio"
  tags: ["tecnologia", "tanques", "guerra_quimica"]

respuesta: "tanques"
tipo: mc
opciones_explicitas: ["tanques", "aviones de combate", "submarinos", "guerra química"]

enunciado: "Para romper el estancamiento de las trincheras, los británicos introdujeron nuevos blindados conocidos como ___."

explicacion: |
  Aunque los tanques no ganaron la guerra por sí solos, fueron un intento tecnológico clave para cruzar el terreno devastado de las trincheras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "causas_guerra"
  nivel: "avanzado"
  tags: ["ordenar", "causas"]

respuesta: ["Imperialismo", "Nacionalismo", "Asesinato de Francisco Fernando"]
tipo: ordenar
opciones_explicitas: ["Nacionalismo", "Imperialismo", "Asesinato de Francisco Fernando"]

enunciado: "Ordena cronológicamente las tensiones que llevaron a la guerra, desde las causas estructurales de largo plazo hasta el evento detonante."

explicacion: |
  Primero existieron las tensiones imperialistas y nacionalistas (causas estructurales) y finalmente el asesinato en Sarajevo (causa inmediata).
```

```
metadata:
  materia: "historia_profunda"
  tema: "ascenso_regimenes_totalitarios"
  nivel: "basico"
  tags: ["nazismo", "historia", "segunda_guerra"]

respuesta: "Alemania"
tipo: completar
respuestas_validas: ["Alemania"]

enunciado: "El régimen nazi, liderado por Adolf Hitler, tomó el poder político en ___ en 1933, consolidando un sistema totalitario."

explicacion: |
  El ascenso de Hitler al poder fue un proceso que culminó en 1933, transformando la República de Weimar en un Estado totalitario.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ascenso_regimenes_totalitarios"
  nivel: "basico"
  tags: ["fascismo", "nazismo", "ideologia"]

opciones_explicitas: ["Fascismo", "Comunismo", "Democracia Liberal", "Socialdemocracia"]
respuesta: "Fascismo"
tipo: mc

enunciado: "El régimen de Benito Mussolini en Italia es el ejemplo característico de la ideología conocida como:"

explicacion: |
  El fascismo italiano fue el precursor de otros regímenes totalitarios de derecha en Europa durante el periodo de entreguerras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "holocausto"
  nivel: "intermedio"
  tags: ["holocausto", "genocidio", "segunda_guerra"]

variables:
  datos: [["genocidio", "Holocausto"], ["exterminio", "Holocausto"], ["persecución", "Holocausto"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["Holocausto"]

enunciado: "El asesinato sistemático y organizado de millones de judíos y otros grupos por parte del régimen nazi se conoce históricamente como el ___."

explicacion: |
  El Holocausto (Shoah) fue el genocidio sistemático llevado a cabo por la Alemania nazi durante la Segunda Guerra Mundial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "armas_nucleares"
  nivel: "intermedio"
  tags: ["atomica", "hiroshima", "nagasaki"]

variables:
  escenarios: [
    ["Hiroshima", "Little Boy"],
    ["Nagasaki", "Fat Man"]
  ]
  idx: uno_de([0, 1])

respuesta: escenarios[idx][1
tipo: mc
opciones_explicitas: ["Little Boy", "Fat Man", "Enola Gay", "B-29"]

enunciado: "En el segundo ataque atómico de la historia, ocurrido en la ciudad de {escenarios[idx][0]}, se utilizó la bomba llamada ___."

explicacion: |
  El 9 de agosto de 1945, la bomba 'Fat Man' fue lanzada sobre Nagasaki, marcando el segundo uso de armas nucleares en combate.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cronologia_guerra"
  nivel: "avanzado"
  tags: ["cronologia", "eventos_clave"]

opciones_explicitas: ["Invasión de Polonia", "Ataque a Pearl Harbor", "Desarme de Japón"]
respuesta: ["Invasión de Polonia", "Ataque a Pearl Harbor", "Desarme de Japón"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes eventos clave de la Segunda Guerra Mundial, desde el inicio hasta el fin:"

explicacion: |
  La guerra comenzó con la invasión de Polonia (1939), escaló con la entrada de EE.UU. tras Pearl Harbor (1941) y terminó con la rendición de Japón (1945).
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["versalles", "alemania", "causas"]

tipo: mc
opciones_explicitas: ["La pérdida de territorios y reparaciones económicas", "La creación de la Sociedad de Naciones", "El ascenso del comunismo en Europa", "La firma del Pacto Molotov-Ribbentrop"]

enunciado: "Uno de los factores principales que generó un profundo resentimiento en la población alemana tras la Primera Guerra Mundial fue ___."

explicacion: |
  El Tratado de Versalles impuso a Alemania la "cláusula de culpa de guerra", obligándola a pagar reparaciones astronómicas y ceder territorios estratégicos, lo que desestabilizó su economía y política.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["economia", "reparaciones", "inflacion"]

variables:
  escenario: uno_de([["reparaciones económicas", "hiperinflación"], ["pérdida de territorio", "expansionismo"], ["cláusula de culpa", "revanchismo"]])

tipo: completar
respuestas_validas: ["reparaciones económicas", "pérdida de territorio", "cláusula de culpa"]

enunciado: "Las duras condiciones impuestas por el tratado de Versalles, específicamente las ___ , provocaron una crisis económica sin precedentes en la República de Weimar."

pasos:
  - "Analizar cómo la deuda externa afectó la estabilidad de la moneda alemana."
  - "Relacionar la crisis económica con el ascenso de movimientos extremistas."

explicacion: |
  La imposición de reparaciones económicas masivas impidió la recuperación de Alemania, facilitando el ascenso de ideologías radicales que prometían restaurar la gloria nacional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "basico"
  tags: ["sociedad_naciones", "diplomacia"]

tipo: mc
opciones_explicitas: ["Sociedad de Naciones", "Liga de las Naciones", "ONU", "Pacto de Varsovia"]

enunciado: "El organismo internacional creado tras la Primera Guerra Mundial para mantener la paz, pero que demostró ser incapaz de evitar la Segunda Guerra Mundial, fue la ___."

explicacion: |
  La Sociedad de Naciones carecía de fuerza militar y de la participación de potencias clave como EE.UU., lo que la hizo ineficaz para frenar el expansionismo de Alemania, Italia y Japón.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "avanzado"
  tags: ["causas", "geopolitica", "orden"]

tipo: ordenar
opciones_explicitas: ["Firma del Tratado de Versalles", "Crisis económica de 1929", "Ascenso del Partido Nazi al poder", "Invasión de Polonia"]

enunciado: "Ordene cronológicamente los eventos que contribuyeron al estallido de la Segunda Guerra Mundial, partiendo de las consecuencias de la Gran Guerra."

explicacion: |
  La secuencia muestra cómo el orden impuesto en 1919 se desmoronó debido a la crisis económica, permitiendo el ascenso de regímenes totalitarios que finalmente desafiaron el orden internacional con la invasión de Polonia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["terminologia", "alemania"]

tipo: completar
tolerancia_abs: 0

enunciado: "En Alemania, el Tratado de Versalles fue visto por muchos sectores políticos no como un acuerdo de paz, sino como un ___ (término alemán que significa 'imposición')."

explicacion: |
  El término 'Diktat' fue utilizado por los políticos alemanes para denunciar que el tratado no fue negociado, sino impuesto por las potencias vencedoras, alimentando el sentimiento nacionalista.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "basico"
  tags: ["primera_guerra", "cronologia"]

tipo: mc
opciones_explicitas: ["1914", "1918", "1939", "1945"]

enunciado: "El asesinato del archiduque Francisco Fernando en Sarajevo desencadenó la Primera Guerra Mundial en el año ___."

respuesta: "1914"

explicacion: |
  El atentado de Sarajevo ocurrió el 28 de junio de 1914, activando el sistema de alianzas que llevó a Europa a la guerra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "basico"
  tags: ["tratado_versalles", "geopolitica"]

tipo: mc
opciones_explicitas: ["El Tratado de Versalles", "El Pacto Molotov-Ribbentrop", "El Plan Marshall", "La Conferencia de Yalta"]

enunciado: "¿Qué evento marcó el fin formal de la Primera Guerra Mundial y redefinió el mapa de Europa?"

respuesta: "El Tratado de Versalles"

explicacion: |
  El Tratado de Versalles (1919) impuso duras condiciones a Alemania y estableció un nuevo orden mundial que influiría en el periodo de entreguerras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["crisis_economica", "entreguerras"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["La Gran Depresión", "El ascenso de los regímenes totalitarios"], ["La crisis económica de 1929", "La inestabilidad política europea"]]

tipo: completar
respuestas_validas: ["La Gran Depresión", "La crisis económica de 1929"]

enunciado: "Durante el periodo de entreguerras, el mundo sufrió un colapso financiero conocido como ___."

respuesta: escenarios[escenario_idx][0

explicacion: |
  El crack de 1929 y la posterior Gran Depresión generaron un clima de inestabilidad que facilitó el ascenso de ideologías extremistas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["orden_cronologico", "historia"]

tipo: ordenar
opciones_explicitas: ["Primera Guerra Mundial", "Crisis de 1929", "Segunda Guerra Mundial"]

respuesta: ["Primera Guerra Mundial", "Crisis de 1929", "Segunda Guerra Mundial"]

enunciado: "Ordena cronológicamente los siguientes eventos históricos, desde el más antiguo al más reciente."

explicacion: |
  La secuencia correcta es: Gran Guerra (1914-1918), Crisis económica (1929) y Segunda Guerra Mundial (1939-1945).
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "basico"
  tags: ["segunda_guerra", "consecuencias"]

tipo: mc
opciones_explicitas: ["La creación de la ONU", "La caída del Muro de Berlín", "La Revolución Rusa", "El Tratado de Versalles"]

enunciado: "Como consecuencia directa del fin de la Segunda Guerra Mundial, se fundó para mantener la paz internacional la ___."

respuesta: "La creación de la ONU"

explicacion: |
  La Organización de las Naciones Unidas (ONU) fue establecida en 1945 para reemplazar a la fallida Sociedad de Naciones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "basico"
  tags: ["historia", "conflictos"]

variables:
  datos: [["El asesinato del archiduque Francisco Fernando en Sarajevo desencadenó el conflicto.", "Primera Guerra Mundial"], ["La invasión de Polonia por parte de la Alemania nazi fue el detonante.", "Segunda Guerra Mundial"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Primera Guerra Mundial", "Segunda Guerra Mundial"]

enunciado: "Identifica a qué conflicto histórico corresponde el siguiente evento: {datos[idx][0]}"

explicacion: |
  El evento descrito marca el inicio de la {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["tecnologia", "armamento"]

variables:
  datos: [["El uso masivo de gases venenosos en las trincheras.", "Primera Guerra Mundial"], ["El desarrollo y uso de la bomba atómica en Hiroshima y Nagasaki.", "Segunda Guerra Mundial"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Primera Guerra Mundial", "Segunda Guerra Mundial"]

enunciado: "Analiza la característica tecnológica: {datos[idx][0]}. ¿A qué guerra pertenece?"

explicacion: |
  La característica mencionada es propia de la {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "avanzado"
  tags: ["geopolitica", "tratados"]

variables:
  datos: [["La firma del Tratado de Versalles para redefinir fronteras europeas.", "Primera Guerra Mundial"], ["La creación de la Organización de las Naciones Unidas (ONU) para mantener la paz.", "Segunda Guerra Mundial"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar

enunciado: "El evento '{datos[idx][0]}' es un hito fundamental de la ___."
respuestas_validas: ["Primera Guerra Mundial", "Segunda Guerra Mundial"]

explicacion: |
  El hito mencionado ocurrió durante la {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["alianzas", "bloques"]

variables:
  datos: [["La Triple Entente (Francia, Gran Bretaña y Rusia) contra las Potencias Centrales.", "Primera Guerra Mundial"], ["El Eje (Alemania, Italia y Japón) contra los Aliados.", "Segunda Guerra Mundial"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Primera Guerra Mundial", "Segunda Guerra Mundial"]

enunciado: "Dada la formación de bloques: {datos[idx][0]}. ¿A qué guerra corresponde?"

explicacion: |
  Corresponde a la {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "avanzado"
  tags: ["cronologia", "eventos"]

variables:
  escenario: uno_de([
    ["La guerra de movimientos", "El Tratado de Versalles", "La creación de la Sociedad de Naciones"],
    ["La invasión de Francia", "El ataque a Pearl Harbor", "La rendición de Japón"]
  ], [0, 1])
  idx: uno_de([0, 1])

respuesta: ["La guerra de movimientos", "El Tratado de Versalles", "La creación de la Sociedad de Naciones"]
tipo: ordenar
opciones_explicitas: ["La guerra de movimientos", "El Tratado de Versalles", "La Sociedad de Naciones"]

enunciado: "Ordena cronológicamente los hitos de la {escenario[idx][0]} (si es la opción 0) o los eventos de la {escenario[idx][1]} (si es la opción 1)."

explicacion: |
  La secuencia correcta representa la cronología de la {escenario[idx][0]}.
```

## Sección: herramientas-arte-rupestre (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["paleolitico", "tecnologia"]

variables:
  escenario: uno_de([
    ["lasca", "fragmento desprendido de un núcleo"],
    ["bifaz", "herramienta tallada por ambas caras"],
    ["punta", "herramienta especializada para perforar"]
  ])

enunciado: "En la industria lítica, un/a {escenario[0]} se define como un/a ___."

respuestas_validas: ["fragmento desprendido de un núcleo"]
tipo: completar

explicacion: |
  En la tecnología de la talla, las lascas son los fragmentos que se desprenden de una piedra núcleo al ser golpeada, siendo fundamentales para la producción de herramientas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["paleolitico", "ordenar"]

opciones_explicitas: ["Olduvayense", "Achelense", "Musteriense"]

enunciado: "Ordene las siguientes tecnologías de la más antigua a la más reciente:"

tipo: ordenar
respuesta: ["Olduvayense", "Achelense", "Musteriense"]

explicacion: |
  La secuencia evolutiva comienza con el Olduvayense (choppers simples), sigue con el Achelense (bifaces elaborados) y continúa con el Musteriense (técnicas de lasca más complejas).
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["tecnologia", "evolucion"]

enunciado: "El bifaz es una herramienta característica del Paleolítico Inferior que se diferencia de las lascas simples por su técnica de fabricación. ¿Cuál es su principal característica?"

opciones_explicitas: ["Es tallado por ambas caras para lograr simetría", "Es un fragmento accidental de una piedra", "Se fabrica únicamente mediante percusión blanda"]
tipo: mc
respuesta: "Es tallado por ambas caras para lograr simetría"

explicacion: |
  El bifaz representa un salto cognitivo importante, ya que el homínido debe prever la forma final de la herramienta en la piedra antes de empezar a tallar ambas caras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["especializacion", "paleolitico"]

variables:
  tipo_herramienta: uno_de([
    ["raspador", "usado para tratar pieles"],
    ["buril", "usado para grabar hueso o madera"],
    ["punzón", "usado para perforar cuero"]
  ])

enunciado: "Un/a {tipo_herramienta[0]} es una herramienta especializada cuya función principal es ___."

respuestas_validas: ["usado para tratar pieles", "usado para grabar hueso o madera", "usado para perforar cuero"]
tipo: completar

explicacion: |
  La especialización de las herramientas (como el buril o el raspador) indica una mayor complejidad en la organización social y una explotación más eficiente de los recursos naturales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["tecnologia", "calculo"]

variables:
  caso: uno_de([
    [12, "percusión"],
    [45, "presión"],
    [88, "percusión"]
  ])

enunciado: "Si un arqueólogo encuentra un conjunto de {caso[0]} herramientas que fueron producidas mediante la técnica de {caso[1]}, ¿cuál es la técnica utilizada?"

tipo: mc
opciones_explicitas: ["percusión", "presión"]
respuesta: "percusión"

explicacion: |
  La técnica de presión permite obtener lascas muy finas y controladas, mientras que la percusión (especialmente con percutor duro) es la forma más primaria de obtener lascas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["arte_rupestre", "paleolitico"]

tipo: mc
opciones_explicitas: ["Paredes de piedra", "Lienzos de tela", "Pieles de animales", "Tablas de madera"]

enunciado: "En el arte rupestre de cuevas como Altamira o Lascaux, ¿cuál era el soporte principal utilizado para las pinturas?"

explicacion: |
  El arte rupestre se caracteriza por utilizar las paredes de las cuevas (soporte pétreo) como lienzo para sus representaciones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["grabado", "tecnicas"]

variables:
  tecnica_idx: uno_de([0, 1])
  tecnica_nombre: uno_de(["grabado", "pintura"])
  tecnica_desc: uno_de(["incisión en la piedra", "aplicación de pigmentos"])

tipo: completar
respuestas_validas: ["grabado", "pintura"]

enunciado: "Si un artista prehistórico utiliza una piedra afilada para realizar una incisión profunda en la roca, está realizando un ___."

pasos:
  - "Identificar la acción: incisión en la roca."
  - "Relacionar la acción con la técnica correspondiente."

explicacion: |
  El término técnico para la marca dejada por una incisión en una superficie sólida es el grabado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["pigmentos", "quimica_prehistorica"]

variables:
  color_idx: uno_de([0, 1])
  color_nombre: uno_de(["ocre", "negro"])
  color_origen: uno_de(["óxido de hierro", "carbón vegetal"])

tipo: mc
opciones_explicitas: ["óxido de hierro", "carbón vegetal", "arcilla blanca", "sangre de animal"]

enunciado: "Para obtener el color {color_nombre} muy común en las pinturas de la Cueva de las Manos, los humanos utilizaban {color_origen}."

explicacion: |
  Los pigmentos se obtenían de minerales (como el óxido de hierro para rojos/ocres) o de materia orgánica quemada (carbón para el negro).
```

```
metadata:
  materia: "historia_profucha"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["simbolismo", "homo_sapiens"]

tipo: mc
opciones_explicitas: ["Capacidad de abstracción", "Necesidad de decorar", "Falta de herramientas", "Supervivencia alimentaria"]

enunciado: "La presencia de signos abstractos y manos en negativo en las cuevas sugiere que el Homo sapiens ya poseía ___."

explicacion: |
  La capacidad de representar conceptos no tangibles o símbolos es una prueba clave del desarrollo del pensamiento simbólico y el lenguaje complejo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["procesos", "arte"]

tipo: ordenar
opciones_explicitas: ["Preparación del soporte", "Preparación del pigmento", "Aplicación de la pintura", "Agotamiento de la luz"]

enunciado: "Ordena el proceso lógico que seguiría un artista en una cueva profunda para realizar una pintura rupestre:"

explicacion: |
  El artista primero debe asegurar la superficie, luego crear la mezcla de color y finalmente aplicarla, todo esto gestionando la limitada luz de la cueva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["prehistoria", "arte_rupestre"]

tipo: mc
opciones_explicitas: ["Animales de caza", "Paisajes urbanos", "Figuras geométricas abstractas", "Retratos de reyes"]

enunciado: "En el arte rupestre del Paleolítico, ¿qué tipo de figuras eran las representadas con mayor frecuencia en las paredes de las cuevas?"

explicacion: |
  Las pinturas rupestres más comunes representaban animales que formaban parte de la dieta o el entorno inmediato de los grupos humanos, como bisontes, caballos y ciervos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["simbolismo", "manos"]

tipo: mc
opciones_explicitas: ["Siluetas de manos", "Escenas de guerra", "Instrumentos musicales", "Mapas estelares"]

enunciado: "Además de animales, es muy común encontrar en las cuevas la técnica de la estarcido para representar ___."

explicacion: |
  Las siluetas de manos (ya sean en positivo o negativo) son uno de los elementos más icónicos y recurrentes del arte rupestre mundial.
```

```
metadata:
  materia: "historia_profucha"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["escenas", "caza"]

variables:
  escena_tipo: uno_de(["escenas de caza", "paisajes estáticos", "figuras aisladas"])

tipo: mc
opciones_explicitas: ["escenas de caza", "mapas de navegación", "diagramas matemáticos", "dibujos arquitectónicos"]

enunciado: "Cuando los artistas prehistóricos representaban la interacción entre humanos y animales, solían plasmar ___."

explicacion: |
  Las escenas de caza muestran la dinámica de la supervivencia, representando a los cazadores con lanzas o arcos frente a sus presas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["identificacion"]

tipo: completar
respuestas_validas: ["animales", "manos", "escenas"]

enunciado: "El arte rupestre suele clasificarse en tres grandes categorías temáticas: ___, siluetas de ___ y ___."

explicacion: |
  Estas tres categorías cubren la mayoría de los hallazgos en el registro arqueológico de las pinturas rupestres.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["observacion", "estudio"]

tipo: ordenar
opciones_explicitas: ["Identificar el pigmento", "Observar la figura", "Analizar el contexto de la cueva", "Interpretar el significado"]

enunciado: "Un arqueólogo sigue un proceso lógico para estudiar una pintura rupestre. Ordena estos pasos de forma coherente:"

explicacion: |
  El método científico en arqueología comienza con la observación directa y el análisis material antes de pasar a la interpretación teórica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["cognicion", "simbolismo", "hominidos"]

variables:
  escenario: uno_de([
    ["pintura de manos en negativo", "capacidad de representación simbólica"],
    ["herramientas de piedra tallada", "planificación técnica avanzada"],
    ["adornos con conchas marinas", "pensamiento abstracto y estético"]
  ])

respuesta: escenario[2][1
tipo: mc
opciones_explicitas: ["capacidad de representación simbólica", "planificación técnica avanzada", "pensamiento abstracto y estético"]

enunciado: "La presencia de {escenario[0]} en cuevas prehistóricas es una evidencia fundamental de la {escenario[2][1]} del Homo sapiens."

explicacion: |
  El uso de pigmentos para dejar la huella de la mano indica que el individuo no solo interactuaba con el entorno, sino que proyectaba su identidad, un signo claro de pensamiento simbólico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["tecnologia", "evolucion"]

respuesta: "Homo sapiens"
tipo: completar
respuestas_validas: ["Homo sapiens", "Homo sapiens sapiens"]

enunciado: "A diferencia de otros homínidos, el ___ desarrolló una capacidad de abstracción que le permitió crear herramientas complejas y arte rupestre."

explicacion: |
  Aunque otros homínidos usaron herramientas, la combinación de arte complejo y tecnología diversificada es característica del Homo sapiens.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["proceso", "arte_rupestre"]

opciones_explicitas: ["Preparación del soporte", "Preparación de pigmentos", "Aplicación del color", "Grabado de contornos"]

respuesta: ["Preparación del soporte", "Preparación de pigmentos", "Grabado de contornos", "Aplicación del color"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que un artista del Paleolítico Superior seguiría para realizar una pintura de gran formato en una pared de la cueva:"

explicacion: |
  Primero se debe elegir y limpiar la pared, luego fabricar la pintura con minerales, trazar la figura y finalmente aplicar el pigmento.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["cognicion", "herramientas"]

variables:
  caso: uno_de([
    ["un bifaz perfectamente simétrico", "estética y precisión"],
    ["un propulsor de lanza", "ingeniería y cálculo de trayectoria"],
    ["un raspador de hueso", "especialización funcional"]
  ])

respuesta: caso[0][1
tipo: mc
opciones_explicitas: ["estética y precisión", "ingeniería y cálculo de trayectoria", "especialización funcional"]

enunciado: "La fabricación de {caso[0]} sugiere que el homínido no solo buscaba utilidad, sino también {caso[0][1]}."

explicacion: |
  La simetría en herramientas de piedra que no es estrictamente necesaria para el corte indica una búsqueda de orden y belleza, propia de la mente moderna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["simbolismo", "evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que el arte rupestre representa un salto cualitativo en la cognición debido a su naturaleza no utilitaria inmediata?"

explicacion: |
  Correcto. El arte no tiene una función de supervivencia directa (como buscar comida), sino que cumple funciones sociales, rituales o de comunicación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["arte_rupestre", "tecnicas"]

variables:
  datos: [["pigmentos mezclados con grasa animal aplicados con los dedos", "Pintura digital"], ["grabados realizados con piedras duras sobre la roca", "Petroglifos"], ["dibujos realizados con carbón vegetal sobre superficies claras", "Dibujo al carbón"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Pintura digital", "Petroglifos", "Dibujo al carbón"]

enunciado: "Se ha descubierto una cueva con las siguientes características: {datos[idx][0]}. ¿A qué técnica pertenece?"

explicacion: |
  La descripción corresponde a {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["herramientas", "grabado"]

variables:
  datos: [["piedra de sílex", "percutor"], ["hueso endurecido", "estilete"], ["punta de madera", "incisores"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["percutor", "estilete", "incisores"]

enunciado: "Para realizar la técnica de grabado descrita, el artista utilizó un/a ___."

explicacion: |
  El instrumento utilizado para la acción descrita es un/a {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profucha"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["quimica_antigua", "pigmentos"]

variables:
  datos: [["óxido de hierro", "rojo"], ["óxido de manganeso", "negro"], ["arcilla blanca", "blanco"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["rojo", "negro", "blanco"]

enunciado: "Un arqueólogo encuentra restos de coloración {datos[idx][0]} en una pared. ¿Cuál es el pigmento probable?"

explicacion: |
  El pigmento utilizado para obtener el color {datos[idx][1]} es el {datos[idx][0]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta: ["Preparación de la superficie", "Aplicación del pigmento", "Sellado con grasa"]
tipo: ordenar
opciones_explicitas: ["Preparación de la superficie", "Aplicación del pigmento", "Sellado con grasa"]

enunciado: "Ordene los pasos lógicos para la creación de una pintura mural rupestre duradera:"

explicacion: |
  El proceso estándar requiere primero limpiar la roca, luego aplicar el color y finalmente protegerlo con un aglutinante como la grasa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["soporte", "arqueologia"]

variables:
  datos: [["pared de piedra", "pared"], ["banco de roca", "pared"], ["techo de la cueva", "techo"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["pared", "techo", "suelo"]

enunciado: "La obra se encuentra plasmada sobre un/a {datos[idx][0]}. Por lo tanto, el soporte es un/a ___."

explicacion: |
  En arqueología, la ubicación física define el soporte: {datos[idx][1]}.
```
