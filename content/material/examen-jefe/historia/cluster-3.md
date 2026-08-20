# Examen jefe — Maestro de Guerras e Independencias

> Logro #123. Completaste el examen sobre las guerras, independencias y la historia cultural de Argentina y el mundo. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **119 preguntas totales** en 5/5 secciones.

---

## Sección: guerra-civil-espanola-1936-1939 (26 preguntas)

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["causas", "polarizacion"]

variables:
  anio_estallido: 1936

respuesta: "1936"
tipo: input

enunciado: "En qué año comenzó oficialmente el conflicto armado interno conocido como la Guerra Civil Española?"

explicacion: |
  El conflicto estalló tras el intento de golpe de Estado en julio de 1936, marcando el fin de la Segunda República.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["bandos", "nacionalistas"]

variables:
  lider: uno_de(["Francisco Franco", "José Sanjurjo"])

respuesta: "Francisco Franco"
tipo: input

enunciado: "¿Quién lideró finalmente al bando sublevado o nacionalista hasta el final de la guerra?"

explicacion: |
  Aunque José Sanjurjo fue clave inicialmente, murió en un accidente aéreo. Francisco Franco se consolidó como el líder supremo del bando nacionalista.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["diplomacia", "occidente"]

variables:
  pais: uno_de(["Reino Unido", "Francia", "Estados Unidos"])

respuesta: "no intervención"
tipo: input

enunciado: "¿Qué política adoptaron las democracias liberales como {pais} ante el conflicto?"

explicacion: |
  Estas potencias adoptaron una política de "no intervención", lo que dejó a la República en desventaja frente a los apoyos extranjeros a los nacionalistas.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["bandos", "republica"]

variables:
  nombre_bando: "republicano"

respuesta: "republicano"
tipo: input

enunciado: "¿Cómo se denominaba al bando que defendía al gobierno legítimo de la Segunda República?"

explicacion: |
  El bando republicano o leal defendía la legalidad constitucional frente al golpe de Estado.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["batallas", "madrid"]

variables:
  ciudad: "Madrid"

respuesta: "Madrid"
tipo: input

enunciado: "¿Qué capital resistió heroicamente durante años bajo asedio nacionalista?"

explicacion: |
  Madrid fue un símbolo de la resistencia republicana y permaneció en manos republicanas hasta el final de la guerra.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["sociedad", "polarizacion"]

variables:
  grupo_opositor: uno_de(["derecha conservadora", "jerarquía católica", "gran parte del ejército"])

respuesta: "derecha conservadora"
tipo: input

enunciado: "¿Qué sector vio las reformas republicanas como una amenaza existencial al 'España tradicional'?"

explicacion: |
  La derecha conservadora, la jerarquía católica y gran parte del ejército se opusieron a las reformas progresistas.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["politica", "frente_popular"]

variables:
  alianza: "Frente Popular"

respuesta: "Frente Popular"
tipo: input

enunciado: "¿Cómo se llamaba la coalición de izquierdas que apoyaba las reformas progresistas antes de la guerra?"

explicacion: |
  El Frente Popular ganó las elecciones en 1936, representando a quienes apoyaban la modernización y las reformas.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["estrategia", "frentes"]

variables:
  tipo_guerra: "desgaste"

respuesta: "desgaste"
tipo: input

enunciado: "¿Qué tipo de guerra caracterizó al frente de batalla, además de la brutalidad de ambos bandos?"

explicacion: |
  Fue una guerra de desgaste donde el control territorial se perdió progresivamente para la República.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["territorio", "autonomias"]

variables:
  region: uno_de(["Cataluña", "País Vasco"])

respuesta: "Cataluña"
tipo: input

enunciado: "¿Qué región recibió reconocimiento de autonomía por parte del gobierno republicano, lo que generó resistencia conservadora?"

explicacion: |
  Cataluña y el País Vasco fueron regiones clave que buscaron o recibieron mayores autonomías, vistas como amenazas por la derecha.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["reformas", "iglesia"]

variables:
  reforma: "secularización"

respuesta: "secularización"
tipo: input

enunciado: "¿Qué medida de modernización del gobierno republicano fue vista como una amenaza por la jerarquía católica?"

explicacion: |
  La secularización implicaba separar la iglesia del estado, reducir su influencia educativa y legal, lo que enfureció a los conservadores.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["reformas", "tierra"]

variables:
  reforma: "reforma agraria"

respuesta: "reforma agraria"
tipo: input

enunciado: "¿Qué medida buscaba redistribuir la tierra y fue defendida por el Frente Popular?"

explicacion: |
  La reforma agraria era una de las principales demandas de la izquierda para modernizar el campo español.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["inicio", "golpe"]

variables:
  evento: "golpe de Estado"

respuesta: "golpe de Estado"
tipo: input

enunciado: "¿Qué evento desencadenó directamente la guerra civil tras ser parcialmente fallido?"

explicacion: |
  El intento de golpe de Estado en julio de 1936 no logró tomar el poder inmediatamente, derivando en conflicto armado.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "basico"
  tags: ["final", "cronologia"]

variables:
  anio_fin: 1939

respuesta: "1939"
tipo: input

enunciado: "¿En qué año terminó la Guerra Civil Española con la victoria del bando nacionalista?"

explicacion: |
  La guerra terminó en 1939, iniciando la dictadura de Franco que duraría hasta 1975.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["brutalidad", "guerra_aerea"]

variables:
  evento: "Guernica"

respuesta: "Guernica"
tipo: input

enunciado: "¿Qué pueblo fue bombardeado por la Legión Cóndor alemana, convirtiéndose en símbolo de la brutalidad aérea?"

explicacion: |
  El bombardeo de Guernica fue un ataque indiscriminado que inspiró la famosa pintura de Picasso.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["intervencion", "internacional"]

variables:
  bando: "republicano"

respuesta: "republicano"
tipo: input

enunciado: "¿A qué bando se unieron voluntarios internacionales conocidos como las Brigadas Internacionales?"

explicacion: |
  Las Brigadas Internacionales apoyaron principalmente al bando republicano, aunque la "no intervención" oficial dificultó su llegada.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["ideologia", "conflicto"]

variables:
  tipo_division: "ideológica"

respuesta: "ideológica"
tipo: input

enunciado: "¿Qué tipo de división, más allá de la política, transformó la disputa electoral en una lucha por la supervivencia nacional?"

explicacion: |
  La división fue ideológica y cultural, entre dos visiones incompatibles de la nación: la moderna y la tradicional.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["contexto", "segunda_republica"]

variables:
  factor: "inestabilidad institucional"

respuesta: "inestabilidad institucional"
tipo: input

enunciado: "¿Qué factor previo creó un clima de violencia latente en la Segunda República?"

explicacion: |
  La inestabilidad institucional, sumada a huelgas y enfrentamientos, preparó el terreno para la guerra.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["sociedad", "huelgas"]

variables:
  fenomeno: "huelgas generalizadas"

respuesta: "huelgas generalizadas"
tipo: input

enunciado: "¿Qué fenómeno social caracterizó la intensa polarización antes de la guerra?"

explicacion: |
  Las huelgas generalizadas reflejaban el conflicto laboral y social entre obreros y patronos.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["economia", "conservadurismo"]

variables:
  valor: "propiedad privada"

respuesta: "propiedad privada"
tipo: input

enunciado: "¿Qué valor defendían los sublevados como parte del orden tradicional?"

explicacion: |
  Los nacionalistas defendían la propiedad privada y el orden tradicional contra las reformas republicanas.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["iglesia", "religion"]

variables:
  institucion: "Iglesia"

respuesta: "Iglesia"
tipo: input

enunciado: "¿Qué institución tuvo a la jerarquía católica como opositora clave de las reformas republicanas?"

explicacion: |
  La jerarquía católica vio las reformas secularizadoras como una amenaza existencial.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["ejercito", "sublevacion"]

variables:
  actor: "ejército"

respuesta: "ejército"
tipo: input

enunciado: "¿Qué institución fue clave en la sublevación contra la República?"

explicacion: |
  Gran parte del ejército se sublevó, liderando el inicio del conflicto armado.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["estrategia", "no_intervencion"]

variables:
  consecuencia: "desventaja estratégica"

respuesta: "desventaja estratégica"
tipo: input

enunciado: "¿Qué consecuencia tuvo la política de no intervención para la República?"

explicacion: |
  La no intervención dejó a la República en desventaja, mientras los apoyos a los nacionalistas fluían sin obstáculos.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "intermedio"
  tags: ["frentes", "avance"]

variables:
  proceso: "progresivamente"

respuesta: "progresivamente"
tipo: input

enunciado: "¿Cómo fue controlado el resto del país por las tropas nacionalistas?"

explicacion: |
  El país fue controlado progresivamente, mientras Madrid resistía aislada.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["causas", "historia_larga"]

variables:
  causa_raiz: "luchas por el poder"

respuesta: "luchas por el poder"
tipo: input

enunciado: "El estallido del conflicto fue resultado de décadas de qué fenómeno?"

explicacion: |
  Décadas de luchas por el poder y la identidad nacional precedieron al estallido.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["identidad", "nacion"]

variables:
  concepto: "identidad nacional"

respuesta: "identidad nacional"
tipo: input

enunciado: "¿Qué concepto estaba en disputa entre quienes modernizaban y quienes defendían la tradición?"

explicacion: |
  La identidad nacional era el núcleo del conflicto: una visión moderna frente a una tradicional.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_civil_espanola_1936_1939"
  nivel: "avanzado"
  tags: ["importancia", "siglo_xx"]

variables:
  importancia: "punto de inflexión"

respuesta: "punto de inflexión"
tipo: input

enunciado: "La Guerra Civil Española marcó un qué crucial en la historia del siglo XX?"

explicacion: |
  Fue un punto de inflexión que prefiguró los conflictos ideológicos de la Segunda Guerra Mundial.
```

## Sección: guerra-del-paraguay-y-triple-alianza (33 preguntas)

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["lideres", "solano_lopez"]

variables:
  lider: "Francisco Solano López"

respuesta: "Francisco Solano López"
tipo: completar
respuestas_validas:
  - "Francisco Solano López"
  - "Solano López"
  - "López"

enunciado: "El líder de Paraguay durante la Guerra de la Triple Alianza fue {lider}."

explicacion: |
  Francisco Solano López dirigió al Paraguay durante todo el conflicto hasta su muerte en 1870.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["lideres", "mitre"]

variables:
  lider_arg: "Bartolomé Mitre"

respuesta: "Bartolomé Mitre"
tipo: completar
respuestas_validas:
  - "Bartolomé Mitre"
  - "Mitre"

enunciado: "El presidente argentino que firmó el tratado de alianza fue {lider_arg}."

explicacion: |
  Bartolomé Mitre fue el presidente de la Nación Argentina que firmó el Tratado de la Triple Alianza.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["tratados", "navegacion"]

variables:
  objetivo: "navegación libre"

respuesta: "navegación libre"
tipo: completar
respuestas_validas:
  - "navegación libre"
  - "libre navegación"
  - "libre navegacion"

enunciado: "Uno de los objetivos del Tratado de la Triple Alianza era garantizar la {objetivo} de los ríos Paraná y Uruguay."

explicacion: |
  La libre navegación de los ríos interiores era un objetivo clave para los aliados, especialmente para Brasil y Argentina.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "economia"]

variables:
  region: "cuenca del Río de la Plata"

respuesta: "cuenca del Río de la Plata"
tipo: completar
respuestas_validas:
  - "cuenca del Río de la Plata"
  - "cuenca del rio de la plata"

enunciado: "Brasil y las provincias argentinas buscaban expandir su influencia en la {region}, creando tensión con Paraguay."

explicacion: |
  El control de la cuenca del Río de la Plata y sus ríos navegables era estratégico para el comercio regional.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["fin", "solano_lopez"]

variables:
  evento_fin: "muerte de Solano López"

respuesta: "muerte de Solano López"
tipo: completar
respuestas_validas:
  - "muerte de Solano López"
  - "muerte de solano lopez"
  - "muerte de Francisco Solano López"

enunciado: "La guerra finalizó en 1870 con el {evento_fin}."

explicacion: |
  La muerte del presidente Francisco Solano López en la batalla de Cerro Corá marcó el fin efectivo de la guerra.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["navegacion", "tratados"]

variables:
  rio1: "Paraná"
  rio2: "Uruguay"

respuesta: "Paraná y Uruguay"
tipo: completar
respuestas_validas:
  - "Paraná y Uruguay"
  - "parana y uruguay"
  - "Paraná y el Uruguay"

enunciado: "El tratado prometía garantizar la navegación libre de los ríos {rio1} y {rio2}."

explicacion: |
  Los ríos Paraná y Uruguay eran las vías fluviales principales para el comercio y la logística militar.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["tratados", "fronteras"]

variables:
  objetivo_frontera: "beneficiara a los aliados"

respuesta: "beneficiara a los aliados"
tipo: completar
respuestas_validas:
  - "beneficiara a los aliados"
  - "beneficiara a los aliados"

enunciado: "El tratado buscaba definir las fronteras de manera que {objetivo_frontera}."

explicacion: |
  Los aliados buscaban redefinir las fronteras a su favor, lo que generó disputas posteriores.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["brasil", "contraataque"]

variables:
    accion: "invadiendo el norte"

respuesta: "invadiendo el norte"
tipo: completar
respuestas_validas:
  - "invadiendo el norte"
  - "invadiendo el norte del paraguay"

enunciado: "Brasil respondió a la invasión paraguaya {accion} del Paraguay."

explicacion: |
  Tras la invasión al Mato Grosso, Brasil lanzó una contraofensiva invadiendo el norte de Paraguay.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["estrategia", "superioridad"]

variables:
    factor: "numérica y logística"

respuesta: "numérica y logística"
tipo: completar
respuestas_validas:
  - "numérica y logística"
  - "superioridad numérica y logística"

enunciado: "Con el tiempo, la superioridad {factor} de la Triple Alianza comenzó a pesar contra Paraguay."

explicacion: |
  La combinación de más hombres y mejor suministro permitió a los aliados avanzar.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "clima_politico"]

variables:
    clima: "desconfianza mutua"

respuesta: "desconfianza mutua"
tipo: completar
respuestas_validas:
  - "desconfianza mutua"
  - "desconfianza"

enunciado: "La rivalidad creó un clima de {clima} que terminó estallando en guerra."

explicacion: |
  La falta de confianza entre los estados de la región fue un factor subyacente importante.
```

```
metadata:
  materia: "historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["cronologia", "duracion"]

variables:
    anio_inicio: 1864
    anio_fin: 1870

respuesta: "6"
tipo: input

enunciado: "La guerra duró {anio_fin - anio_inicio} años, desde {anio_inicio} hasta {anio_fin}."

explicacion: |
  El conflicto abarcó seis años completos de combate intenso.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["alianza", "participantes"]

variables:
  paises: ["Brasil", "Argentina", "Uruguay"]

respuesta: "Brasil, Argentina, Uruguay"
tipo: completar

enunciado: "La Triple Alianza estuvo conformada por el Imperio de {paises[0]}, la Nación Argentina y la República Oriental del {paises[2]}."

explicacion: |
  La coalición aliada enfrentó al Paraguay y estaba integrada por Brasil, Argentina y Uruguay.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "basico"
  tags: ["lideres", "solano_lopez"]

variables:
  lider: "Francisco Solano López"

respuesta: "Francisco Solano López"
tipo: completar

enunciado: "El Paraguay, en ese entonces un país industrializado para su época, estaba bajo el mando de {lider}."

explicacion: |
  Francisco Solano López lideró al Paraguay durante la guerra, manteniendo una política de aislamiento relativo pero con desarrollo industrial interno.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "uruguay"]

variables:
  accion: "intervención de Brasil en los asuntos internos de Uruguay"

respuesta: "intervención de Brasil en los asuntos internos de Uruguay"
tipo: completar

enunciado: "El detonante final fue la {accion}, lo que el Paraguay vio como una amenaza a su soberanía."

explicacion: |
  Brasil apoyó a los colorados uruguayos, lo que llevó a Solano López a intervenir y comenzar las hostilidades.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["invasion", "mato_grosso"]

variables:
  territorio: "Mato Grosso"
  mes: "diciembre"
  anio: 1864

respuesta: "Mato Grosso"
tipo: completar

enunciado: "En {mes} de {anio}, Solano López invadió el territorio de {territorio}, iniciando las hostilidades."

explicacion: |
  La invasión del Mato Grosso fue la primera acción militar concreta de la guerra en diciembre de 1864.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["tratado", "alianza"]

variables:
  fecha_tratado: "mayo de 1865"
  lider_argentino: "Bartolomé Mitre"

respuesta: "mayo de 1865"
tipo: completar

enunciado: "Ante la invasión brasileña al norte del Paraguay, el gobierno argentino liderado por {lider_argentino} firmó el Tratado de la Triple Alianza en {fecha_tratado}."

explicacion: |
  El tratado se firmó en mayo de 1865 para derrotar a Solano López y garantizar la navegación libre de los ríos.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["objetivos", "navegacion"]

variables:
  objetivo: "garantizar la navegación libre de los ríos Paraná y Uruguay"

respuesta: "garantizar la navegación libre de los ríos Paraná y Uruguay"
tipo: completar

enunciado: "Uno de los compromisos del tratado era {objetivo}."

explicacion: |
  La libre navegación de los ríos fue un objetivo clave para los aliados, especialmente para Brasil y Argentina.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["economia", "industrializacion"]

variables:
  caracteristica: "aislado pero industrializado"

respuesta: "aislado pero industrializado"
tipo: completar

enunciado: "Para entender el conflicto, hay que notar que el Paraguay era un país {caracteristica} para sus estándares de la época."

explicacion: |
  A pesar de su aislamiento político, Paraguay tenía ferrocarriles, astilleros y fábricas de pólvora.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["causas", "hegemonia"]

variables:
  rivalidad: "control de los ríos navegables y los territorios fronterizos"

respuesta: "control de los ríos navegables y los territorios fronterizos"
tipo: completar

enunciado: "La tensión previa a la guerra se debía a la rivalidad por el {rivalidad} en la cuenca del Río de la Plata."

explicacion: |
  La disputa por el control territorial y comercial fue la raíz profunda del conflicto.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "avanzado"
  tags: ["batallas", "humaita"]

variables:
  fortaleza: "Humaitá"

respuesta: "Humaitá"
tipo: completar

enunciado: "Inicialmente, los paraguayos lograron victorias tácticas, como la toma de la fortaleza de {fortaleza}."

explicacion: |
  La toma de Humaitá fue una de las pocas victorias tácticas significativas iniciales de los paraguayos.
```

```
metadata:
  materia: "Historia"
  tema: "guerra_del_paraguay_y_triple_alianza"
  nivel: "intermedio"
  tags: ["ejercito", "demografia"]

variables:
  composicion: "campesinos"

respuesta: "campesinos"
tipo: completar

enunciado: "El ejército paraguayo, que en su mayoría estaba compuesto por {composicion}, enfrentó una superioridad logística adversa."

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
  El tratado se firmó en mayo de 1865, tras la invasión brasileña al norte del Paraguay.
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
  fortaleza: "Humaitá"

respuesta: "Humaitá"
tipo: mc
opciones: 4

enunciado: "¿Qué fortaleza fue tomada inicialmente por los paraguayos?"
opciones_explicitas: ["Humaitá", "Curupayty", "Tuyutí", "Piribebuy"]

explicacion: |
  La toma de Humaitá fue una victoria táctica importante para Paraguay al inicio de la guerra.
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

## Sección: guerras (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["guerras", "vocabulario"]

enunciado: "¿Qué es una guerra, como proceso histórico?"
tipo: mc
opciones_explicitas:
  - "Un conflicto armado sostenido entre grupos organizados que se resuelve por la fuerza en vez de por acuerdo"
  - "Cualquier desacuerdo político sin uso de la fuerza"
  - "Un tratado firmado entre dos Estados"
respuesta: "Un conflicto armado sostenido entre grupos organizados que se resuelve por la fuerza en vez de por acuerdo"

explicacion: |
  Puede ser entre Estados, entre facciones internas, o ambos.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Qué rol suele cumplir la guerra respecto a procesos de revolución o independencia?"
tipo: mc
opciones_explicitas:
  - "Es el medio por el que muchas veces se decide si esos procesos se consolidan o fracasan"
  - "Es exactamente lo mismo que una revolución"
  - "No tiene ninguna relación con esos procesos"
respuesta: "Es el medio por el que muchas veces se decide si esos procesos se consolidan o fracasan"

explicacion: |
  Una revolución cambia estructura interna; una independencia rompe
  soberanía; la guerra es a menudo el mecanismo que resuelve si eso se
  logra.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["tipos_de_guerra"]

enunciado: "¿Qué caracteriza a una guerra de independencia?"
tipo: mc
opciones_explicitas:
  - "Un territorio contra la metrópoli que no reconoce su independencia declarada"
  - "Dos facciones del mismo territorio enfrentadas entre sí"
  - "Dos Estados ya constituidos disputando un territorio puntual"
respuesta: "Un territorio contra la metrópoli que no reconoce su independencia declarada"

explicacion: |
  Es el caso típico de las Guerras de independencia sudamericanas
  contra España.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["tipos_de_guerra"]

enunciado: "¿Qué caracteriza a una guerra civil?"
tipo: mc
opciones_explicitas:
  - "Un mismo territorio dividido internamente por un desacuerdo de fondo sobre cómo organizarse"
  - "Un conflicto exclusivamente contra un enemigo externo"
  - "Un conflicto entre dos Estados ya reconocidos internacionalmente"
respuesta: "Un mismo territorio dividido internamente por un desacuerdo de fondo sobre cómo organizarse"

explicacion: |
  No es contra un enemigo externo, sino entre bandos del mismo país —
  ejemplo real: unitarios y federales en Argentina.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["argentina", "tipos_de_guerra"]

enunciado: "¿Cuáles fueron los dos bandos de la guerra civil argentina del siglo XIX?"
tipo: mc
opciones_explicitas:
  - "Unitarios y federales"
  - "Realistas y patriotas"
  - "Peronistas y radicales"
respuesta: "Unitarios y federales"

explicacion: |
  El desacuerdo de fondo era un Estado centralizado desde Buenos Aires
  vs. una confederación de provincias autónomas.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["argentina"]

enunciado: "¿Cuál era el desacuerdo de fondo entre unitarios y federales?"
tipo: mc
opciones_explicitas:
  - "Un Estado centralizado desde Buenos Aires vs. una confederación de provincias autónomas"
  - "Si declarar o no la independencia de España"
  - "Si mantener o abolir la esclavitud"
respuesta: "Un Estado centralizado desde Buenos Aires vs. una confederación de provincias autónomas"

explicacion: |
  Era, en el fondo, la pregunta sin resolver de "cómo nos organizamos"
  que quedó pendiente después de lograr la independencia.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["tipos_de_guerra"]

enunciado: "¿Qué caracteriza a una guerra internacional entre Estados ya constituidos, como Malvinas?"
tipo: mc
opciones_explicitas:
  - "Es un conflicto entre dos Estados soberanos y reconocidos, por un territorio en disputa"
  - "Es un conflicto donde uno de los dos Estados no existe todavía"
  - "Es siempre una guerra civil disfrazada"
respuesta: "Es un conflicto entre dos Estados soberanos y reconocidos, por un territorio en disputa"

explicacion: |
  No se discute la existencia de ninguno de los dos Estados, sólo la
  soberanía sobre un territorio puntual — categoría distinta de la
  guerra de independencia o la guerra civil.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿En qué nodo de Tronco 8.c está el desarrollo real de la Guerra de Malvinas?"
tipo: mc
opciones_explicitas:
  - "AH13"
  - "AH5"
  - "AH1"
respuesta: "AH13"

explicacion: |
  El desarrollo completo vive en Tronco 8.c, citando el art. 92 b —
  acá sólo se referencia, sin duplicarlo.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["herramientas_analisis"]

enunciado: "¿Casi ninguna guerra tiene una sola causa?"
tipo: vf
respuesta: verdadero

explicacion: |
  Combina intereses económicos, políticos e ideológicos, igual que
  cualquier proceso analizado con la herramienta de multicausalidad.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "¿Cómo se relacionan, en el patrón `AH5 → AH6` de la cadena argentina, la guerra de independencia y la guerra civil posterior?"
tipo: mc
opciones_explicitas:
  - "La guerra de independencia puede generar, como consecuencia, una guerra civil por no haber acuerdo claro sobre cómo organizar el nuevo Estado"
  - "No tienen ninguna relación causal entre sí"
  - "La guerra civil siempre ocurre antes que la de independencia"
respuesta: "La guerra de independencia puede generar, como consecuencia, una guerra civil por no haber acuerdo claro sobre cómo organizar el nuevo Estado"

explicacion: |
  Es exactamente el patrón que explica `teoria.md`: independencia
  resuelve "quién no nos gobierna", pero deja abierto "cómo nos
  organizamos".
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "¿Por qué el patrón \"independencia seguida de guerra civil\" no es exclusivo de Argentina?"
tipo: mc
opciones_explicitas:
  - "Porque lograr la independencia deja sin resolver \"cómo organizarse entre sí\", pregunta que sin consenso previo suele derivar en conflicto interno"
  - "Porque todos los países copiaron el modelo argentino"
  - "Porque España provocaba directamente todas las guerras civiles de sus excolonias"
respuesta: "Porque lograr la independencia deja sin resolver \"cómo organizarse entre sí\", pregunta que sin consenso previo suele derivar en conflicto interno"

explicacion: |
  Es un patrón típico de casi cualquier proceso de independencia real,
  no sólo el argentino.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "¿Qué herramienta del Big Six ayuda a juzgar una guerra pasada sin reducirla a una fecha para memorizar?"
tipo: mc
opciones_explicitas:
  - "Dimensión ética"
  - "Antes y después de Cristo"
  - "Década, siglo, milenio"
respuesta: "Dimensión ética"

explicacion: |
  Es el mismo criterio que ya se aplicó a `AH12`/`AH13` (Terrorismo de
  Estado y Malvinas) en Tronco 8.c.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "basico"
  tags: ["tipos_de_guerra"]

enunciado: "Toda guerra es necesariamente contra un enemigo externo al propio territorio."
tipo: vf
respuesta: falso

explicacion: |
  Una guerra civil es exactamente el caso contrario: el conflicto es
  interno, entre bandos del mismo país.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["tipos_de_guerra"]

enunciado: "¿Cuál es la diferencia clave entre una guerra de independencia y una guerra civil?"
tipo: mc
opciones_explicitas:
  - "La de independencia es contra una potencia externa; la civil es entre bandos del mismo territorio"
  - "La guerra civil siempre involucra más países que la de independencia"
  - "No hay ninguna diferencia real entre ambas"
respuesta: "La de independencia es contra una potencia externa; la civil es entre bandos del mismo territorio"

explicacion: |
  Es la distinción central entre los dos primeros tipos de guerra
  descritos en `teoria.md`.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["tipos_de_guerra"]

enunciado: "En la Guerra de Malvinas de 1982, ¿qué se disputaba entre Argentina y el Reino Unido?"
tipo: mc
opciones_explicitas:
  - "La soberanía sobre un territorio puntual, sin discutir la existencia de ninguno de los dos Estados"
  - "Si Argentina o el Reino Unido debían dejar de existir como Estados"
  - "Un desacuerdo interno dentro de un mismo país"
respuesta: "La soberanía sobre un territorio puntual, sin discutir la existencia de ninguno de los dos Estados"

explicacion: |
  Es la categoría "guerra internacional entre Estados ya
  constituidos", distinta de las guerras de independencia y las
  guerras civiles.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["argentina"]

enunciado: "Ordená cronológicamente estos 3 conflictos de la cadena argentina: Guerra de Malvinas, Guerras de independencia, Guerras civiles (unitarios y federales)."
tipo: ordenar
opciones_explicitas:
  - "Guerras de independencia"
  - "Guerras civiles (unitarios y federales)"
  - "Guerra de Malvinas"
respuesta: "Guerras de independencia"

explicacion: |
  Guerras de independencia (principios del s. XIX) → Guerras civiles
  (mediados del s. XIX) → Guerra de Malvinas (1982).
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["herramientas_analisis"]

enunciado: "¿Cuál de estos es un tipo de causa que suele combinarse en el estallido de una guerra, según la multicausalidad?"
tipo: mc
opciones_explicitas:
  - "Control de territorio, recursos o rutas comerciales"
  - "El clima del día en que se firmó la declaración de guerra"
  - "La cantidad de satélites GPS disponibles"
respuesta: "Control de territorio, recursos o rutas comerciales"

explicacion: |
  Son causas económicas típicas, que se combinan con las políticas e
  ideológicas.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Por qué `guerras/` no repite el desarrollo completo de las Guerras de independencia, guerras civiles y Malvinas, y sólo los referencia?"
tipo: mc
opciones_explicitas:
  - "Para no escribir el mismo contenido histórico dos veces con distintos IDs (`H2c` y `AH5`/`AH6`/`AH12`/`AH13`)"
  - "Porque esos temas no tienen ninguna relación con las guerras"
  - "Porque el contenido de Tronco 8.c está desactualizado"
respuesta: "Para no escribir el mismo contenido histórico dos veces con distintos IDs (`H2c` y `AH5`/`AH6`/`AH12`/`AH13`)"

explicacion: |
  Mismo criterio de "duplicación resuelta" ya aplicado en otros puntos
  del MAPA (nota v2.4).
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué `guerras/` depende de `../independencias/` como prerrequisito?"
tipo: mc
opciones_explicitas:
  - "Porque muchas guerras de este período nacen de procesos de independencia sin resolver del todo"
  - "Porque las guerras siempre ocurren antes que cualquier independencia"
  - "Porque no existe relación real entre ambos procesos"
respuesta: "Porque muchas guerras de este período nacen de procesos de independencia sin resolver del todo"

explicacion: |
  Ejemplo directo: las guerras civiles argentinas nacieron de la
  pregunta sin resolver que dejó la independencia.
```

```
metadata:
  materia: "historia"
  tema: "guerras"
  nivel: "avanzado"
  tags: ["herramientas_analisis"]

enunciado: "Independencia, guerra civil y guerra internacional entre Estados son 3 tipos de guerra distintos. ¿Qué tienen en común como forma de analizarlos?"
tipo: mc
opciones_explicitas:
  - "Se benefician del mismo tipo de análisis histórico: multicausalidad, causa/consecuencia y dimensión ética"
  - "Ninguno de los tres se puede analizar con las mismas herramientas"
  - "Los tres ocurrieron exactamente el mismo año en Argentina"
respuesta: "Se benefician del mismo tipo de análisis histórico: multicausalidad, causa/consecuencia y dimensión ética"

explicacion: |
  Comparten estructura de análisis aunque el contenido y los actores
  sean distintos — por eso el MAPA los agrupó como 3 nodos hermanos
  (`H2a`/`H2b`/`H2c`) en vez de tratarlos como temas sin relación.
```

## Sección: historia-cultural (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "basico"
  tags: ["historia_cultural", "criterio_central"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La historia cultural propone analizar un caso chico y aparentemente insignificante en profundidad, mostrando que puede revelar toda una estructura social, mental o cultural de su época."

pasos:
  - "Invierte la lógica de escala de las corrientes que priorizan lo macro (Annales, positivismo)."

explicacion: |
  Verdadero: es el criterio central de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["microhistoria"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La historia cultural también se asocia con el nombre \"microhistoria\", por su foco en casos individuales y localizados."

pasos:
  - "Ambos nombres se usan para referirse a esta misma corriente historiográfica."

explicacion: |
  Verdadero: es la relación entre los dos nombres usados para esta
  corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["carlo_ginzburg"]

variables:
  n: uno_de([1, 1])

respuesta: "Ginzburg"
tipo: completar

enunciado: "El historiador italiano referente central de la historia cultural/microhistoria se apellida..."

pasos:
  - "Carlo Ginzburg es el autor central asociado a esta corriente."

explicacion: |
  Ginzburg es autor central de esta corriente historiográfica.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["carlo_ginzburg", "obra_clave"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La obra más famosa de Ginzburg, \"El queso y los gusanos\" (1976), reconstruye el caso de un molinero friulano del siglo XVI, juzgado por la Inquisición por sus ideas heterodoxas sobre el origen del mundo."

pasos:
  - "Es la obra clave que ejemplifica el método de la microhistoria."

explicacion: |
  Verdadero: es la obra fundamental de referencia de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["carlo_ginzburg", "obra_clave"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ginzburg usa el caso individual del molinero para iluminar la mentalidad popular de toda una época, algo que las fuentes oficiales rara vez documentan."

pasos:
  - "Es el propósito central del uso de un caso micro para revelar algo macro."

explicacion: |
  Verdadero: es la conclusión central de por qué un caso individual
  puede tener valor histórico más allá de sí mismo.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["fuentes_no_convencionales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las fuentes oficiales (el foco del positivismo) rara vez documentan la vida cotidiana y la mentalidad de la gente común."

pasos:
  - "Es la razón por la que la historia cultural recurre a otro tipo de fuentes."

explicacion: |
  Verdadero: es la razón central de por qué esta corriente amplía
  qué cuenta como fuente legítima.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["fuentes_no_convencionales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La historia cultural suele recurrir a actas de juicios de personas comunes, diarios personales y objetos cotidianos, en vez de sólo tratados y decretos oficiales."

pasos:
  - "Son las fuentes no convencionales mencionadas en la teoría, distintas del archivo oficial priorizado por el positivismo."

explicacion: |
  Verdadero: son las fuentes típicas de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["objeto_de_estudio", "mentalidades"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las mentalidades (cómo la gente entendía el mundo) son uno de los objetos de estudio centrales de la historia cultural."

pasos:
  - "Es uno de los tres objetos de estudio mencionados en la teoría."

explicacion: |
  Verdadero: las mentalidades son un objeto central de estudio de
  esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["objeto_de_estudio", "practicas_cotidianas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las prácticas cotidianas (rituales, costumbres) son otro de los objetos de estudio centrales de la historia cultural."

pasos:
  - "Es otro de los tres objetos de estudio mencionados en la teoría."

explicacion: |
  Verdadero: las prácticas cotidianas son otro objeto central de
  estudio de esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["objeto_de_estudio", "cultura_popular"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La cultura popular (no sólo la cultura de elite) es otro de los objetos de estudio centrales de la historia cultural."

pasos:
  - "Es el tercero de los objetos de estudio mencionados en la teoría."

explicacion: |
  Verdadero: la cultura popular es otro objeto central de estudio de
  esta corriente, ampliando el foco tradicional en la elite.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["objeto_de_estudio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de las corrientes anteriores, la historia cultural amplía qué cuenta como objeto legítimo de estudio histórico, incluyendo mentalidades, prácticas cotidianas y cultura popular."

pasos:
  - "Es la conclusión central sobre la amplitud de foco de esta corriente."

explicacion: |
  Verdadero: es una de las contribuciones centrales de esta corriente
  a la disciplina.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["escuela_de_los_annales", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La Escuela de los Annales mira grandes estructuras de larga duración; la historia cultural invierte la escala, mirando casos individuales chicos para revelar algo general."

pasos:
  - "Ver `../escuela-de-los-annales/`: es el contraste de escala entre estas dos corrientes."

explicacion: |
  Verdadero: es la diferencia central de escala entre estas dos
  corrientes de la subrama.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["positivismo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El positivismo se centra en grandes figuras y documentos oficiales; la historia cultural se centra en personas comunes y fuentes no convencionales."

pasos:
  - "Ver `../positivismo/`: es el contraste de foco entre estas dos corrientes."

explicacion: |
  Verdadero: es la diferencia central de foco entre estas dos
  corrientes de la subrama.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["historia_cultural", "practica"]

variables:
  analisis: ["estudiar el diario personal de una campesina para entender cómo pensaba la gente común de su época", "estudiar un tratado firmado entre dos reyes"]
  corrientes: ["historia cultural", "positivismo"]
  idx: uno_de([0, 1])

respuesta: corrientes[idx]
tipo: mc
opciones_explicitas: ["historia cultural", "positivismo", "materialismo histórico", "Escuela de los Annales"]

enunciado: "\"{analisis[idx]}\" corresponde principalmente al enfoque de..."

pasos:
  - "Fuente no convencional (diario personal) + caso individual = historia cultural. Documento oficial + grandes figuras = positivismo."

explicacion: |
  Reconocer el tipo de fuente y de sujeto estudiado permite
  identificar la corriente historiográfica aplicada.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["historia_cultural", "valor_del_caso_micro"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según la historia cultural, la magnitud aparente de un caso (una sola persona, un solo juicio) no determina su valor histórico: un caso bien documentado puede revelar mucho sobre una época entera."

pasos:
  - "Es coherente con el ejemplo de Ginzburg sobre el molinero friulano."

explicacion: |
  Verdadero: es la conclusión central sobre el valor de los casos
  micro en esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada corriente historiográfica es un modelo distinto de qué causas priorizar al explicar un hecho histórico — por eso este tema depende de multicausalidad en el MAPA."

pasos:
  - "Ver `../multicausalidad/`: es el prerrequisito directo de este tema y sus tres hermanos."

explicacion: |
  Verdadero: es la misma conexión conceptual ya vista en las
  corrientes anteriores de esta subrama.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["neutralidad", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Positivismo, materialismo histórico, Escuela de los Annales e historia cultural son cuatro lentes distintas y legítimas para hacer historia, ninguna reemplaza del todo a las demás."

pasos:
  - "Ver `../positivismo/`, `../materialismo-historico/` y `../escuela-de-los-annales/`: mismo criterio de neutralidad aplicado a las cuatro."

explicacion: |
  Verdadero: es la síntesis del principio de neutralidad aplicado a
  toda la subrama de corrientes historiográficas.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "intermedio"
  tags: ["historia_cultural", "metodo"]

enunciado: "Ordená los pasos para reconocer si un texto histórico sigue el enfoque de la historia cultural."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el foco está en un caso individual chico, no en grandes estructuras o figuras"
  - "Identificar si usa fuentes no convencionales (diarios, juicios de personas comunes)"
  - "Revisar si el objeto de estudio incluye mentalidades, prácticas cotidianas o cultura popular"
  - "Concluir si el texto corresponde al enfoque de la historia cultural"
respuesta_orden:
  - "Revisar si el foco está en un caso individual chico, no en grandes estructuras o figuras"
  - "Identificar si usa fuentes no convencionales (diarios, juicios de personas comunes)"
  - "Revisar si el objeto de estudio incluye mentalidades, prácticas cotidianas o cultura popular"
  - "Concluir si el texto corresponde al enfoque de la historia cultural"

explicacion: |
  El análisis va de la escala del caso estudiado al tipo de fuentes y
  objeto de estudio, para concluir si corresponde a esta corriente.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La historia cultural cierra la subrama de corrientes historiográficas: hechos y figuras (positivismo) → clases y producción (materialismo histórico) → estructuras de larga duración (Annales) → lo micro que revela lo macro (historia cultural)."

pasos:
  - "Ver `../positivismo/`, `../materialismo-historico/` y `../escuela-de-los-annales/`: es el recorrido completo de las cuatro corrientes de esta subrama."

explicacion: |
  Verdadero: es la síntesis del recorrido completo de la subrama de
  corrientes historiográficas.
```

```
metadata:
  materia: "historia"
  tema: "historia_cultural"
  nivel: "avanzado"
  tags: ["historia_cultural", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al leer un libro de historia centrado en el diario de una sola persona común, usado para entender cómo se vivía y pensaba en su época, conviene reconocer que está aplicando un enfoque cercano a la historia cultural."

pasos:
  - "Es la aplicación práctica directa de este tema al leer críticamente un texto histórico real."

explicacion: |
  Verdadero: es la aplicación concreta de este tema para reconocer el
  enfoque historiográfico de un texto real.
```

## Sección: independencias (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["independencias", "vocabulario"]

enunciado: "¿Qué es un proceso de independencia?"
tipo: mc
opciones_explicitas:
  - "El proceso por el cual un territorio deja de estar bajo la soberanía de otro Estado y se constituye como Estado propio"
  - "Un cambio de gobernante dentro del mismo Estado"
  - "Un tratado comercial entre dos países"
respuesta: "El proceso por el cual un territorio deja de estar bajo la soberanía de otro Estado y se constituye como Estado propio"

explicacion: |
  No es un evento instantáneo: es un proceso que puede durar años.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "En el caso rioplatense, ¿la independencia fue el primer paso del proceso o la consecuencia de una revolución previa?"
tipo: mc
opciones_explicitas:
  - "Fue la consecuencia de la Revolución de Mayo, un proceso revolucionario previo"
  - "Fue el primer paso, antes de cualquier revolución"
  - "No tuvo ninguna relación con la Revolución de Mayo"
respuesta: "Fue la consecuencia de la Revolución de Mayo, un proceso revolucionario previo"

explicacion: |
  Es la razón por la que `independencias/` depende de
  `../revoluciones/` en `../dependencias.md`.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿En nombre de quién decía gobernar la Junta de 1810, aunque en la práctica ejercía el poder de forma autónoma?"
tipo: mc
opciones_explicitas:
  - "Del rey depuesto, Fernando VII"
  - "Del rey de Portugal"
  - "De ningún rey, declarándose independiente desde el primer día"
respuesta: "Del rey depuesto, Fernando VII"

explicacion: |
  Era una ambigüedad deliberada para no provocar una reacción militar
  inmediata mientras el nuevo gobierno se afianzaba.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿Por qué la Junta de 1810 no declaró la independencia total de inmediato?"
tipo: mc
opciones_explicitas:
  - "Para ganar tiempo y consolidarse sin provocar una reacción militar inmediata de España"
  - "Porque no existía ninguna intención de romper con España"
  - "Porque España ya había reconocido la independencia en 1810"
respuesta: "Para ganar tiempo y consolidarse sin provocar una reacción militar inmediata de España"

explicacion: |
  Era una estrategia deliberada de radicalización progresiva, no
  indecisión.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["argentina"]

enunciado: "¿En qué año se declaró formalmente la independencia de las Provincias Unidas en Sudamérica?"
tipo: input
respuesta: 1816

explicacion: |
  El Congreso de Tucumán declaró la independencia en 1816, 6 años
  después de la Revolución de Mayo.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["argentina", "calculo"]

variables:
  anio_revolucion: 1810
  anio_independencia: 1816

respuesta: anio_independencia - anio_revolucion
tipo: input

enunciado: "Entre la Revolución de Mayo ({anio_revolucion}) y la declaración de independencia en el Congreso de Tucumán ({anio_independencia}), ¿cuántos años pasaron?"

pasos:
  - "{anio_independencia} - {anio_revolucion}"

explicacion: |
  El proceso completo llevó más tiempo que el evento fundacional que
  se suele recordar como "punto de partida".
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["argentina"]

enunciado: "¿En qué Congreso se declaró la independencia argentina en 1816?"
tipo: mc
opciones_explicitas:
  - "Congreso de Tucumán"
  - "Congreso de Viena"
  - "Congreso de Panamá"
respuesta: "Congreso de Tucumán"

explicacion: |
  Fue el Congreso que reunió representantes de las Provincias Unidas
  para declarar formalmente la independencia.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué declarar la independencia en 1816 no la hizo efectiva de forma automática?"
tipo: mc
opciones_explicitas:
  - "Porque España no reconoció la declaración y siguió enviando fuerzas militares para reconquistar el territorio"
  - "Porque el Congreso de Tucumán no tenía autoridad legal"
  - "Porque la independencia ya era efectiva desde 1810"
respuesta: "Porque España no reconoció la declaración y siguió enviando fuerzas militares para reconquistar el territorio"

explicacion: |
  La declaración política y la victoria militar que la sostiene son
  dos cosas distintas — ver `../guerras/`.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Son la declaración política de independencia y la victoria militar que la consolida exactamente lo mismo?"
tipo: vf
respuesta: falso

explicacion: |
  Son dos cosas distintas, aunque en la práctica una depende de la
  otra: sin ganar la guerra, la declaración queda sin efecto real.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["revolucion_de_mayo"]

enunciado: "¿Qué provocó que la postura independentista se consolidara como la única salida viable con el paso de los años?"
tipo: mc
opciones_explicitas:
  - "Los intentos de España de reconquistar el territorio"
  - "Un tratado de paz firmado en 1810"
  - "La ausencia total de conflicto con España"
respuesta: "Los intentos de España de reconquistar el territorio"

explicacion: |
  A medida que España insistía en recuperar el control, la ambigüedad
  inicial se volvió insostenible.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["proceso_continental"]

enunciado: "¿Qué campaña de San Martín llevó la independencia más allá del territorio rioplatense?"
tipo: mc
opciones_explicitas:
  - "El cruce de los Andes y la liberación de Chile"
  - "La expedición al Amazonas"
  - "La conquista de México"
respuesta: "El cruce de los Andes y la liberación de Chile"

explicacion: |
  Muestra que el proceso se pensó, en parte, como un proyecto
  continental, no aislado a un solo territorio.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["proceso_continental"]

enunciado: "¿Qué líder independentista lideró procesos en el norte de Sudamérica, en paralelo al de San Martín en el sur?"
tipo: mc
opciones_explicitas:
  - "Simón Bolívar"
  - "Napoleón Bonaparte"
  - "Bernardo O'Higgins"
respuesta: "Simón Bolívar"

explicacion: |
  Junto con San Martín, es una de las dos grandes figuras de la
  independencia hispanoamericana como proceso continental.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["proceso_continental"]

enunciado: "¿Por qué la independencia hispanoamericana se pensó, en parte, como un proyecto continental y no aislado por territorio?"
tipo: mc
opciones_explicitas:
  - "Porque ningún territorio quedaba realmente seguro mientras España mantuviera fuerzas militares en la región"
  - "Porque todos los territorios hispanoamericanos tenían el mismo gobierno"
  - "Porque España ya había reconocido todas las independencias en 1810"
respuesta: "Porque ningún territorio quedaba realmente seguro mientras España mantuviera fuerzas militares en la región"

explicacion: |
  Mientras hubiera fuerzas españolas activas en la región, cualquier
  territorio independizado corría riesgo de reconquista.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "basico"
  tags: ["independencias"]

enunciado: "Un proceso de independencia siempre es un evento instantáneo, que ocurre en un solo día."
tipo: vf
respuesta: falso

explicacion: |
  Es un proceso que puede durar años y atravesar varias etapas antes
  de consolidarse — el caso rioplatense llevó al menos 6 años sólo
  hasta la declaración formal, y más tiempo hasta consolidarse
  militarmente.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["revolucion_de_mayo"]

enunciado: "Ordená estas 3 etapas del proceso rioplatense: Declaración formal de independencia, Ambigüedad inicial (gobernar \"a nombre\" del rey), Radicalización progresiva."
tipo: ordenar
opciones_explicitas:
  - "Ambigüedad inicial (gobernar \"a nombre\" del rey)"
  - "Radicalización progresiva"
  - "Declaración formal de independencia"
respuesta: "Ambigüedad inicial (gobernar \"a nombre\" del rey)"

explicacion: |
  Es la secuencia real: 1810 (ambigüedad) → años intermedios
  (radicalización) → 1816 (declaración formal).
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["independencias"]

enunciado: "¿Qué necesita un territorio, además de declararse independiente, para consolidarse como Estado propio?"
tipo: mc
opciones_explicitas:
  - "Gobierno y reconocimiento internacional autónomos"
  - "Sólo una bandera y un himno nuevos"
  - "La aprobación exclusiva de la antigua metrópoli"
respuesta: "Gobierno y reconocimiento internacional autónomos"

explicacion: |
  Un Estado necesita ejercer soberanía real y ser reconocido, no sólo
  declarar la intención.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["independencias"]

enunciado: "¿Por qué conviene analizar la independencia rioplatense como un \"proceso\" y no como un único \"evento\" (la Revolución de Mayo)?"
tipo: mc
opciones_explicitas:
  - "Porque incluyó varias etapas a lo largo de años: ambigüedad, radicalización, declaración formal y consolidación militar"
  - "Porque la Revolución de Mayo no tuvo ninguna relación con la independencia"
  - "Porque el proceso terminó exactamente en 1810"
respuesta: "Porque incluyó varias etapas a lo largo de años: ambigüedad, radicalización, declaración formal y consolidación militar"

explicacion: |
  Reducirlo a un solo evento (la Revolución de Mayo) pierde toda la
  complejidad del proceso completo.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué el proceso de independencia rioplatense se conecta directamente con `../guerras/`?"
tipo: mc
opciones_explicitas:
  - "Porque España resistió militarmente la independencia declarada, generando las Guerras de independencia"
  - "Porque `../guerras/` trata sobre un conflicto sin ninguna relación con la independencia"
  - "Porque la independencia se logró sin ningún conflicto armado"
respuesta: "Porque España resistió militarmente la independencia declarada, generando las Guerras de independencia"

explicacion: |
  Es la razón por la que `H2c` (guerras) depende de `H2b`
  (independencias) en `../dependencias.md`.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Cuál es la diferencia central entre \"revolución\" e \"independencia\" como procesos históricos?"
tipo: mc
opciones_explicitas:
  - "La revolución cambia el poder o la estructura interna de una sociedad; la independencia rompe la relación de soberanía con otro Estado"
  - "Son exactamente el mismo proceso con dos nombres distintos"
  - "La independencia siempre ocurre antes que cualquier revolución"
respuesta: "La revolución cambia el poder o la estructura interna de una sociedad; la independencia rompe la relación de soberanía con otro Estado"

explicacion: |
  Pueden estar conectadas (como en el caso rioplatense) pero son
  conceptos distintos.
```

```
metadata:
  materia: "historia"
  tema: "independencias"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Por qué el desarrollo real y detallado de la independencia argentina se ubica en la cadena `AH4`-`AH5` de Tronco 8.c y no acá?"
tipo: mc
opciones_explicitas:
  - "Para no duplicar el mismo contenido con dos IDs distintos — acá se explica el proceso general, allá el caso puntual con más contexto"
  - "Porque Tronco 8.c no tiene relación alguna con la independencia"
  - "Porque este tema y `AH4`/`AH5` tratan procesos completamente distintos"
respuesta: "Para no duplicar el mismo contenido con dos IDs distintos — acá se explica el proceso general, allá el caso puntual con más contexto"

explicacion: |
  Mismo criterio de "no repetir el mismo tema dos veces" que ya usa el
  MAPA en varios puntos (ver nota v2.4 sobre `AH12`/`AH13`).
```
