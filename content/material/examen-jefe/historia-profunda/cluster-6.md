# Examen jefe — [PENDIENTE #686]

> Logro #686. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **123 preguntas totales** en 5/5 secciones.

---

## Sección: edad-media-feudalismo (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["caida_romana", "cronologia"]

respuesta: 476
tipo: completar
tolerancia_abs: 1

enunciado: "La Edad Media en Europa occidental comienza tradicionalmente con la caída del Imperio Romano de Occidente, la cual ocurrió en el año ___ d.C."

explicacion: |
  La caída del Imperio Romano de Occidente en el año 476 d.C. marca el inicio de la Edad Media, caracterizada por la fragmentación política y la consolidación de los reinos germánicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["sociedad", "feudalismo"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [[["campesinos", "servidores"], ["nobles", "guerreros"], ["clero", "rezadores"]], [["siervos", "trabajadores"], ["caballeros", "protectores"], ["monjes", "espirituales"]], [["plebe", "campesinos"], ["aristocracia", "señores"], ["clero", "religiosos"]]]

respuesta: datos[escenario_idx][2][1]
tipo: mc
opciones_explicitas: [datos[escenario_idx][0][1], datos[escenario_idx][1][1], datos[escenario_idx][2][1]]

enunciado: "En la estructura estamental del feudalismo, el tercer grupo social, encargado de la labor espiritual, estaba compuesto por los {datos[escenario_idx][2][0]}."

explicacion: |
  La sociedad feudal era estamental y se dividía en: los que luchan (nobleza), los que oran (clero) y los que trabajan (campesinos/siervos).
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "avanzado"
  tags: ["feudalismo", "vasallaje"]

respuesta: "homenaje"
tipo: completar
respuestas_validas:
  - "homenaje"
  - "investidura"
  - "lealtad"

enunciado: "El ritual mediante el cual un vasallo se convertía en hombre de un señor, mediante un compromiso de fidelidad y protección, se denominaba ceremonia de ___."

explicacion: |
  El acto de homenaje era el núcleo del contrato de vasallaje, donde el vasallo se arrodillaba ante el señor para jurar fidelidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["jerarquia", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Campesinos", "Caballeros", "Señores Feudales"]
respuesta_orden: ["Campesinos", "Caballeros", "Señores Feudales"]

enunciado: "Ordena los siguientes estamentos de menor a mayor poder político y militar en el sistema feudal:"

pasos:
  - "Identifica la base de la pirámide (trabajadores)"
  - "Identifica la clase militar (protectores)"
  - "Identifica la cúspide (dueños de la tierra)"

explicacion: |
  La jerarquía feudal era piramidal: la base era la campesinado, seguida por la baja nobleza (caballeros) y en la cima los grandes señores feudales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["fin_edad_media", "caida_constantinopla"]

respuesta: 1453
tipo: completar
tolerancia_abs: 0

enunciado: "La Edad Media finaliza convencionalmente con la caída de Constantinopla a manos de los turcos otomanos en el año ___."

explicacion: |
  La caída de Constantinopla en 1453 es uno de los hitos que marcan la transición hacia la Edad Moderna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["feudalismo", "vasallaje"]

tipo: mc
opciones_explicitas: ["Protección y tierras a cambio de lealtad y servicio militar", "Pago de impuestos por el uso de herramientas de labranza", "Venta de productos agrícolas en los mercados locales", "Sometimiento total sin derecho a recibir tierras"]
respuesta: "Protección y tierras a cambio de lealtad y servicio militar"
enunciado: "En el sistema feudal, la relación de vasallaje entre un señor feudal y un vasallo se basaba principalmente en:"
explicacion: |
  El vasallaje era un contrato de carácter personal donde el señor otorgaba un beneficio (fief/feudo) y protección, mientras que el vasallo juraba auxilium (ayuda militar) y consilium (consejo político).
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["siervos", "estamentos"]

tipo: completar
opciones_explicitas: ["siervo", "caballero", "rey", "vasallo"]
respuestas_validas:
  - "siervo"

enunciado: "A diferencia de los vasallos, los ___ eran campesinos que estaban ligados a la tierra y debían trabajarla para el señor a cambio de protección y una parcela para su subsistencia."

explicacion: |
  Los siervos no eran esclavos (no podían ser vendidos individualmente), pero estaban legalmente vinculados a la gleba (la tierra) y no podían abandonar el feudo sin permiso.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["jerarquia", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Rey", "Señor Feudal", "Vasallo", "Siervo"]

enunciado: "Ordena de mayor a menor jerarquía social y poder político en la estructura del feudalismo clásico:"

explicacion: |
  La estructura era piramidal: El Rey era la máxima autoridad (aunque con poder limitado), seguido por los Grandes Señores (Duques/Condes), luego los vasallos (caballeros) y finalmente la base trabajadora (siervos).
respuesta_orden: ["Rey", "Señor Feudal", "Vasallo", "Siervo"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["economia", "intercambio"]

tipo: mc
opciones_explicitas: ["Servicio militar y lealtad", "Pago de oro y plata", "Intercambio de productos artesanales", "Voto de pobreza"]
respuesta: "Servicio militar y lealtad"

enunciado: "Si un vasallo fallaba en cumplir su parte del contrato hacia su señor, el señor perdía la oportunidad de recibir lealtad y servicio militar."

explicacion: |
  El sistema se basaba en la reciprocidad. Si el vasallo no prestaba el servicio militar o el consejo, el vínculo de vasallaje se rompía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "avanzado"
  tags: ["feudo", "tierra"]

tipo: completar
tolerancia_abs: 0

enunciado: "El conjunto de tierras, campesinos y derechos que un señor otorgaba a un vasallo como parte del contrato de vasallaje se denomina ___."

respuestas_validas:
  - "feudo"

explicacion: |
  El feudo era la unidad económica y política básica del feudalismo, permitiendo al vasallo mantener a su familia y costear su equipo militar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["sociedad", "feudalismo"]

respuesta: "Rey"
tipo: mc
opciones_explicitas: ["Rey", "Señor Feudal", "Caballero", "Siervo"]

enunciado: "En la estructura social del feudalismo, la máxima autoridad política y la cúspide de la pirámide era el ___."

explicacion: |
  El Rey era la autoridad suprema, aunque en la práctica su poder estaba limitado por los grandes señores feudales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["clases_sociales", "caballeros"]

respuesta: "Caballeros"
tipo: mc
opciones_explicitas: ["Campesinos", "Clero", "Caballeros", "Nobles"]

enunciado: "Los ___ eran la clase guerrera encargada de la protección militar de los señoríos."

explicacion: |
  Los caballeros formaban la base de la nobleza militar, subordinados a los grandes señores.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["ordenar", "jerarquia"]

respuesta_orden: ["Rey", "Señores Feudales", "Caballeros", "Siervos"]
tipo: ordenar
opciones_explicitas: ["Rey", "Señores Feudales", "Caballeros", "Siervos"]

enunciado: "Ordene los siguientes estamentos de mayor a menor poder político y militar en el sistema feudal."

explicacion: |
  La jerarquía feudal era piramidal: el Rey en la cima, seguido por la alta nobleza, luego la caballería y finalmente el campesinado/siervos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["campesinado", "siervos"]

respuesta: "Siervos"
tipo: completar
respuestas_validas:
  - "Siervos"

enunciado: "En el sistema feudal, los ___ eran aquellos que no tenían libertad de movimiento y estaban ligados a la tierra que trabajaban."

explicacion: |
  A diferencia de los campesinos libres, los siervos estaban legalmente vinculados a la tierra que trabajaban.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "avanzado"
  tags: ["vasallaje", "nobleza"]

respuesta: "Vasallo"

tipo: completar
respuestas_validas:
  - "Vasallo"

enunciado: "Si un noble recibe tierras a cambio de lealtad y apoyo militar hacia otro noble de mayor rango, su posición en ese vínculo es la de un ___."

explicacion: |
  El intercambio de tierras (feudo) por servicios militares y lealtad definía la relación entre el señor y su vasallo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["iglesia", "poder", "europa"]

respuesta: "monopolio"
tipo: completar
respuestas_validas:
  - "monopolio"

enunciado: "Durante la Edad Media, la Iglesia Católica ejercía un ___ sobre la vida espiritual y cultural de Europa occidental."

explicacion: |
  La Iglesia no solo era una institución religiosa, sino que controlaba gran parte de la vida social, política y cultural, ejerciendo un control casi total sobre la mentalidad de la época.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["monasterios", "cultura", "educacion"]

opciones_explicitas: ["La preservación de textos clásicos", "La producción de armas de guerra", "La exploración de nuevas rutas marítimas", "El fomento del comercio internacional"]

respuesta: "La preservación de textos clásicos"
tipo: mc

enunciado: "En el ámbito cultural, ¿cuál fue una de las funciones más críticas de los monasterios benedictinos?"

explicacion: |
  Los monjes copistas dedicaron gran parte de su vida a transcribir manuscritos, lo que permitió que gran parte del conocimiento de la antigüedad clásica sobreviviera a la caída del Imperio Romano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["jerarquia", "iglesia", "poder"]

respuesta: "máxima autoridad espiritual"
tipo: mc
opciones_explicitas: ["máxima autoridad espiritual", "autoridad política y militar", "representante del emperador", "jefe de la guardia papal"]

enunciado: "En la jerarquía eclesiástica medieval, el Papa era considerado la ___."

explicacion: |
  La estructura de la Iglesia era altamente jerárquica, donde cada cargo tenía funciones específicas que combinaban lo sagrado con la administración de territorios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "avanzado"
  tags: ["cosmovision", "teocentrismo", "cultura"]

respuesta: "teocentrismo"
tipo: completar
respuestas_validas:
  - "teocentrismo"

enunciado: "La cosmovisión medieval se caracterizaba por el ________, donde Dios era el centro de todo el universo y de la explicación de la realidad."

explicacion: |
  A diferencia del antropocentrismo moderno, la Edad Media se estructuraba en torno a la figura de la divinidad, influyendo en la ciencia, el arte y la política.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["educacion", "universidades", "iglesia"]

opciones_explicitas: ["Escuelas catedralicias", "Academias de filosofía griega", "Escuelas de navegación", "Universidades de artes liberales"]

respuesta: "Escuelas catedralicias"
tipo: mc

enunciado: "Antes del surgimiento de las universidades, ¿cuál era el principal centro de formación intelectual y religiosa en las ciudades?"

explicacion: |
  Las escuelas catedralicias, vinculadas a las sedes de los obispos, fueron la base sobre la cual se desarrollaron posteriormente las primeras universidades europeas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["feudalismo", "estamentos"]

variables:
  datos: [["Se dedica a la defensa militar y la protección de sus tierras mediante el uso de las armas.", "Caballero"], ["Es el señor que otorga tierras a cambio de lealtad y servicio militar.", "Señor feudal"]]
  idx: uno_de([0, 1])

enunciado: "En el sistema feudal, una persona que {datos[idx][0]} pertenece al grupo de los: ___"

opciones_explicitas: ["Caballero", "Señor feudal"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  En la estructura estamental, la nobleza (incluyendo caballeros y señores) tenía la función de la defensa y la administración de la tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["clero", "feudalismo"]

variables:
  datos: [["Su función principal es la oración y la administración de los sacramentos.", "Clérigo"], ["Se encarga de la enseñanza y la preservación de la cultura.", "Clérigo"]]
  idx: uno_de([0, 1])

enunciado: "El individuo cuya tarea es {datos[idx][0]} es un: ___"

respuestas_validas:
  - "Clérigo"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El primer estado o estamento de la sociedad medieval era el clero, encargado de la vida espiritual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["jerarquia", "ordenar"]

enunciado: "Ordena la jerarquía social feudal desde el estamento con mayor poder político hasta el que tiene menos derechos:"

opciones_explicitas: ["Clero/Nobleza", "Nobleza/Clero", "Campesinado/Siervos"]
respuesta_orden: ["Clero/Nobleza", "Nobleza/Clero", "Campesinado/Siervos"]
tipo: ordenar

explicacion: |
  Aunque el orden exacto podía variar según la región, la jerarquía se basaba en la posesión de tierras y el estatus espiritual/militar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "avanzado"
  tags: ["vasallaje", "feudo"]

variables:
  datos: [["Recibe un feudo para su sustento y servicio.", "Vasallo"], ["Ofrece su espada y lealtad a un señor.", "Vasallo"]]
  idx: uno_de([0, 1])

enunciado: "En un contrato de vasallaje, la persona que {datos[idx][0]} es el: ___"

opciones_explicitas: ["Señor", "Vasallo", "Siervo"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El vasallo es el hombre libre que se pone bajo la protección de un señor a cambio de un beneficio (el feudo) y servicios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["campesinado", "servidumbre"]

variables:
  datos: [["Está vinculado a la tierra y no puede abandonarla sin permiso.", "Siervo"], ["Trabaja la tierra para el señor a cambio de protección.", "Siervo"]]
  idx: uno_de([0, 1])

enunciado: "Aquella persona que {datos[idx][0]} es un: ___"

respuestas_validas:
  - "Siervo"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  A diferencia de los campesinos libres, los siervos estaban legalmente ligados a la gleba (la tierra).
```

## Sección: edad-media-plena (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["tratado", "verdun", "francia", "alemania", "italia"]
tipo: mc
enunciado: "El Tratado de Verdún, firmado en el año 843, dividió el Imperio Carolingio entre los nietos de Carlomagno. ¿Cuál de las siguientes opciones describe correctamente el territorio asignado a Luis el Germánico?"
respuesta: "El reino de Francia Oriental, que sentó las bases de lo que luego sería el Sacro Imperio Romano Germánico"
opciones_explicitas:
  - "El reino de Francia Occidental, que evolucionaría hacia el reino de Francia moderno"
  - "El reino de Francia Oriental, que sentó las bases de lo que luego sería el Sacro Imperio Romano Germánico"
  - "El reino de Italia, que permaneció bajo el control directo del emperador"
  - "Un reino central que incluía la Borgoña y el norte de Italia"
explicacion: "El Tratado de Verdún dividió el impero en tres partes: Luis el Germánico recibió la Franconia y territorios al este del Rin (Francia Oriental); Lotario I recibió el título imperial y una franja central (Francia Media); y Carlos el Calvo recibió la Aquitania y territorios al oeste del Rin (Francia Occidental)."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["iglesia", "gregorio-vii", "investidura", "laicato"]
tipo: completar
enunciado: "Durante el siglo XI, el papa Gregorio VII impulsó la Reforma Gregoriana para afirmar la independencia de la Iglesia frente al poder secular. Uno de sus objetivos principales fue eliminar la práctica de la __________, mediante la cual los monarcas y nobles nombraban a los obispos y abades."
respuesta: "investidura"
respuestas_validas:
  - "investidura"
  - "Investidura"
  - "INVESTIDURA"
explicacion: "La lucha por las investiduras fue el conflicto central entre el papado y el imperio (y otros monarcas) en el siglo XI y XII. La Reforma Gregoriana buscaba que solo la Iglesia pudiera nombrar a sus clérigos, eliminando el control laico sobre los cargos eclesiásticos."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["bizancio", "selyucidas", "anatolia", "1071"]
tipo: vf
enunciado: "La derrota del emperador romano de oriente Manuel I Comneno en la batalla de Manzikert en 1071 abrió Anatolia a la invasión turca."
respuesta: falso
explicacion: "La batalla de Manzikert ocurrió en 1071, pero el emperador bizantino derrotado fue Romano IV Diógenes, no Manuel I Comneno (quien reinó mucho después, entre 1143 y 1180)."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["cisma", "iglesia", "roma", "constantinopla"]
tipo: mc
enunciado: "El Cisma de 1054 marcó la ruptura definitiva entre la Iglesia de Roma y la Iglesia de Constantinopla. ¿Cuál fue la principal causa teológica y política de este cisma?"
respuesta: "El desacuerdo sobre la autoridad del Papa y el uso del filioque en el Credo"
opciones_explicitas:
  - "La disputa sobre la validez de los sacramentos administrados por sacerdotes casados"
  - "El desacuerdo sobre la autoridad del Papa y el uso del filioque en el Credo"
  - "La negativa del Patriarca de Constantinopla a pagar impuestos al Emperador Bizantino"
  - "La invasión normanda de Italia meridional y el apoyo papal a los normandos"
explicacion: "Las tensiones acumuladas por diferencias litúrgicas, culturales y políticas, culminando en la excomunión mutua de los legados papales y el Patriarca Miguel I Cerulario, se centraron en la primacía papal y la cláusula del filioque (que el Espíritu Santo procede del Padre y del Hijo) añadida en el occidente al Credo."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["cruzadas", "urbeles", "jerusalen", "1096"]
tipo: completar
enunciado: "En el Concilio de Clermont de 1095, el papa Urbano II llamó a la Primera Cruzada. El objetivo principal declarado era recuperar la ciudad santa de __________ del control musulmán."
respuesta: "jerusalen"
respuestas_validas:
  - "jerusalen"
  - "jerusalén"
  - "Jerusalen"
  - "Jerusalén"
  - "JERUSALEN"
  - "JERUSALÉN"
explicacion: "La recuperación de Jerusalén, donde según la tradición cristiana murió y resucitó Jesucristo, era el objetivo central de la Primera Cruzada, lograda en 1099 con la captura de la ciudad por los cruzados."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["cluny", "monasterio", "reforma", "siglo-x"]
tipo: mc
enunciado: "La abadía de Cluny, fundada en 910, jugó un papel crucial en la renovación religiosa de la Edad Media. ¿Cuál era su característica distintiva respecto a la mayoría de los monasterios de la época?"
respuesta: "Su independencia directa del poder local de los laicos y su influencia en la uniformización de la regla benedictina"
opciones_explicitas:
  - "Su adopción de la regla agustina en lugar de la benedictina"
  - "Su independencia directa del poder local de los laicos y su influencia en la uniformización de la regla benedictina"
  - "Su enfoque exclusivo en la predicación urbana y la vida activa"
  - "Su rechazo total a la propiedad territorial y la acumulación de riquezas"
explicacion: "Cluny fue pionera en liberarse del control de los señores locales (laicos) al poner el monasterio directamente bajo la protección del Papa. Esto le permitió mantener la disciplina monástica original y extender su reforma a cientos de monasterios afiliados."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["paz-de-dios", "iglesia", "violencia", "campesinos"]
tipo: vf
enunciado: "La Paz de Dios fue un movimiento promovido por la Iglesia en el siglo X que buscaba proteger a los no combatientes (clérigos, campesinos, mercaderes) de la violencia feudal."
respuesta: verdadero
explicacion: "La Paz de Dios (Pax Dei) fue un intento de la Iglesia para limitar la violencia feudal, prohibiendo a los caballeros atacar a ciertos grupos vulnerables bajo pena de excomunión. Posteriormente, se complementó con la Tregua de Dios."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["tregua-de-dios", "domingos", "adviento", "cuaresma"]
tipo: completar
enunciado: "Junto a la Paz de Dios, la Iglesia promovió la Tregua de Dios, que prohibía la guerra en días específicos. ¿Cuáles eran los días principales en los que estaba prohibida la violencia según esta norma?"
respuesta: "domingos, festivos y tiempos litúrgicos como adviento y cuaresma"
respuestas_validas:
  - "domingos, festivos y tiempos litúrgicos como adviento y cuaresma"
  - "Domingos, festivos y tiempos litúrgicos como adviento y cuaresma"
  - "DOMINGOS, FESTIVOS Y TIEMPOS LITURGICOS COMO ADVIENTO Y CUARESMA"
explicacion: "La Tregua de Dios intentaba reducir los días de combate al prohibir la guerra desde el miércoles al viernes y durante todo el adviento y la cuaresma, reservando el tiempo para la oración y la paz religiosa."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["inglaterra", "normandos", "guillermo-conquistador", "1066"]
tipo: mc
enunciado: "La Batalla de Hastings en 1066 fue decisiva para la historia de Inglaterra. ¿Quién fue el vencedor y qué consecuencia inmediata tuvo?"
respuesta: "Guillermo el Conquistador, lo que llevó a la conquista normanda y la introducción del feudalismo anglonormando"
opciones_explicitas:
  - "Harold II Godwinson, consolidando la dinastía anglosajona"
  - "Guillermo el Conquistador, lo que llevó a la conquista normanda y la introducción del feudalismo anglonormando"
  - "Los daneses, estableciendo el Reino de Danelaw"
  - "Los escoceses, uniendo temporalmente las coronas de Escocia e Inglaterra"
explicacion: "Guillermo, duque de Normandía, derrotó al rey anglosajón Harold II. Esta victoria instaló una nueva élite normanda en Inglaterra, transformando su estructura política, social y lingüística, y conectándola más con el continente europeo que con Escandinavia."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["otón-i", "coronación", "962", "imperio"]
tipo: completar
enunciado: "En el año 962, el rey otón I fue coronado emperador por el papa Juan XII, fundando de facto el __________."
respuesta: "sacro imperio romano germánico"
respuestas_validas:
  - "sacro imperio romano germánico"
  - "Sacro Imperio Romano Germánico"
  - "SACRO IMPERIO ROMANO GERMÁNICO"
explicacion: "La coronación de Otón I revivió la idea del imperio en Occidente, diferenciándose del Imperio Carolingio anterior y estableciendo la estrecha relación (y conflicto) entre el poder imperial alemán y el papado."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["tomás-de-aquino", "filosofía", "fe", "razón", "siglo-xiii"]
tipo: mc
enunciado: "Tomás de Aquino, figura central de la escolástica del siglo XIII, intentó reconciliar la fe cristiana con la filosofía de Aristóteles. ¿Cuál fue su contribución principal en este sentido?"
respuesta: "Sostener que la fe y la razón son complementarias y no contradictorias, ya que ambas provienen de Dios"
opciones_explicitas:
  - "Sostener que la fe y la razón son complementarias y no contradictorias, ya que ambas provienen de Dios"
  - "Defender que la razón debe someterse totalmente a la revelación divina sin excepción"
  - "Proponer que la filosofía aristotélica era pagana y debía ser descartada por los cristianos"
  - "Argumentar que la Iglesia no debía involucrarse en asuntos filosóficos ni científicos"
explicacion: "La Suma Teológica de Tomás de Aquino integró la lógica aristotélica con la teología cristiana, argumentando que la verdad revelada y la verdad natural (racional) no pueden contradecirse porque Dios es la fuente de ambas."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["peste-negra", "1347", "muerte", "demografía"]
tipo: vf
enunciado: "La Peste Negra llegó a Europa por primera vez en 1347, causando una drástica reducción de la población en las décadas siguientes."
respuesta: verdadero
explicacion: "La peste bubónica, traída probablemente por ratas en barcos mercantes desde Asia, llegó a Messina en 1347 y se extendió rápidamente por toda Europa, matando entre un tercio y la mitad de la población en varias regiones."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["juan-sin-tierra", "1215", "barones", "ley"]
tipo: completar
enunciado: "En 1215, el rey Juan de Inglaterra fue obligado por sus barones rebeldes a firmar la Carta Magna, que establecía que el rey estaba sujeto a la __________."
respuesta: "ley"
respuestas_validas:
  - "ley"
  - "Ley"
  - "LEY"
explicacion: "La Carta Magna fue un documento fundamental que limitó el poder absoluto del monarca, estableciendo que nadie, ni siquiera el rey, estaba por encima de la ley, y protegiendo ciertos derechos feudales y libertades eclesiásticas."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["caballeros-teutones", "báltico", "prusianos", "lituania"]
tipo: mc
enunciado: "Además de las Cruzadas a Tierra Santa, la Iglesia promovió cruzadas en otras regiones. ¿Cuál fue el objetivo principal de las Cruzadas del Norte en el Báltico?"
respuesta: "Cristianizar a los pueblos paganos del Báltico y expandir la influencia germánica"
opciones_explicitas:
  - "Cristianizar a los pueblos paganos del Báltico y expandir la influencia germánica"
  - "Recuperar Jerusalén del control de los mamelucos"
  - "Derrocar al Emperador Bizantino y tomar Constantinopla"
  - "Combatir a los cátaros en el sur de Francia"
explicacion: "Los Caballeros Teutónicos y otros órdenes militares se dirigieron al Báltico para conquistar y convertir a los prusianos, lituanos y otros pueblos bálticos, estableciendo un estado monástico en la región."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["cisma-occidente", "avignon", "papado", "1378"]
tipo: completar
enunciado: "El Cisma de Occidente (1378-1417) fue un período en el que la cristiandad latina tuvo simultáneamente a dos o tres papas rivales, uno en Roma y otro en __________."
respuesta: "avignon"
respuestas_validas:
  - "avignon"
  - "Avignon"
  - "AVIGNON"
  - "avignón"
  - "Avignón"
explicacion: "Tras el regreso del papado a Roma, la elección de Urbano VI provocó que un grupo de cardenales eligiera a un antipapa en Avignon. Este cisma debilitó la autoridad papal hasta que el Concilio de Constanza resolvió la situación."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["guerra-pucel", "inglaterra", "francia", "1297"]
tipo: vf
enunciado: "La Batalla de las Esporas fue un enfrentamiento naval entre Inglaterra y Francia en 1340, decisivo para el control del canal de la Mancha."
respuesta: falso
explicacion: "La Batalla de las Esporas (1297) fue un combate caballeril fuera de las murallas de Furnes (Flanders), no una batalla naval. La gran batalla naval contra Inglaterra fue la Batalla de Sluys en 1340."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["feudalismo", "vasallaje", "beneficio", "siglo-x"]
tipo: mc
enunciado: "El sistema feudal se basaba en relaciones de dependencia personal. ¿Cuál era el vínculo central que unía al señor con su vasallo?"
respuesta: "El juramento de homenaje y lealtad a cambio de un beneficio (generalmente tierra)"
opciones_explicitas:
  - "El juramento de homenaje y lealtad a cambio de un beneficio (generalmente tierra)"
  - "Un contrato de arrendamiento mercantil firmado ante notario"
  - "La propiedad plena de la tierra por parte del vasallo"
  - "La obligación de servicio militar pago en dinero al rey"
explicacion: "El feudalismo se estructuraba sobre la base del vasallaje: un hombre (vasallo) juraba fidelidad a otro (señor) a cambio de protección y un feudo (tierra o derechos), obligándose a prestar servicio, generalmente militar."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["peste-negra", "consecuencias", "trabajo", "salarios"]
tipo: completar
enunciado: "Tras la Peste Negra, la escasez de mano de obra en Europa tuvo como consecuencia económica principal el aumento del poder de negociación de los __________."
respuesta: "campesinos"
respuestas_validas:
  - "campesinos"
  - "Campesinos"
  - "CAMPESENOS"
  - "siervos"
  - "Siervos"
explicacion: "La muerte de gran parte de la población hizo que el trabajo escaseara, permitiendo a los campesinos supervivientes exigir mejores condiciones, salarios más altos o la liberación de la servidumbre, debilitando el sistema feudal."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["latran-iv", "inocencio-iii", "cristianismo", "1215"]
tipo: mc
enunciado: "El Concilio de Letrán IV, convocado en 1215 por el papa Inocencio III, fue uno de los más importantes de la Edad Media. ¿Cuál de sus decretos fue fundamental para la vida religiosa cotidiana?"
respuesta: "La obligatoriedad de la confesión anual para todos los fieles"
opciones_explicitas:
  - "La obligatoriedad de la confesión anual para todos los fieles"
  - "La prohibición absoluta de cualquier comercio con musulmanes"
  - "La creación de un ejército permanente bajo mando papal"
  - "La abolición de la jerarquía episcopal en favor de los obispos electos"
explicacion: "El Concilio estableció que todo fiel que hubiera alcanzado la edad de discreción debía confesar sus pecados al menos una vez al año a su propio párroco, reforzando el control pastoral de la Iglesia sobre la sociedad."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["templarios", "jerusalen", "banca", "1307"]
tipo: completar
enunciado: "La Orden de los Pobres Compañeros de Cristo del Templo de Salomón, conocidos como templarios, fueron fundados en Jerusalén alrededor de 1119 y se disolvieron oficialmente en 1312 tras la persecución liderada por el rey __________ de Francia."
respuesta: "filipe"
respuestas_validas:
  - "filipe"
  - "Filipe"
  - "FILIPE"
  - "filipe-iv"
  - "Filipe IV"
explicacion: "El rey Felipe IV de Francia, conocido como Felipe el Hermoso, acusó a los templarios de herejía y otros cargos para confiscar sus riquezas y cancelar las deudas que debía a la orden, siendo arrestados masivamente en 1307."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["guerra-cien-anos", "edward-iii", "filipe-iv", "reclamación"]
tipo: mc
enunciado: "La Guerra de los Cien Años (1337-1453) fue un conflicto prolongado entre Inglaterra y Francia. ¿Cuál fue la causa dinástica principal que la inició?"
respuesta: "La reclamación del trono francés por parte del rey inglés Eduardo III"
opciones_explicitas:
  - "La reclamación del trono francés por parte del rey inglés Eduardo III"
  - "La invasión normanda de Inglaterra en 1066"
  - "El deseo de los papas de Avignon de recuperar los estados pontificios"
  - "La disputa comercial sobre la región de Flandes"
explicacion: "Al morir Carlos IV de Francia sin heredero varón, su primo Eduardo III de Inglaterra (hijo de Isabel de Francia) reclamó la corona, lo que fue rechazado por los nobles franceses que aplicaron la Ley Sálica, iniciando la guerra."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["peste-negra", "iglesia", "crisis", "autoridad"]
tipo: vf
enunciado: "La Peste Negra fortaleció inmediatamente la autoridad y la moral de la Iglesia Católica, ya que los clérigos murieron menos que la población general."
respuesta: falso
explicacion: "La alta mortalidad entre el clero (que atendía a los enfermos) y la incapacidad de la Iglesia para explicar o detener la peste minaron su autoridad moral y espiritual, generando movimientos de penitencia extrema y cuestionamientos futuros."
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["renacimiento-xii", "universidades", "aristóteles", "traducción"]
tipo: completar
enunciado: "El llamado Renacimiento del siglo XII se caracterizó por un florecimiento cultural y intelectual, impulsado en gran parte por la traducción al latín de obras científicas y filosóficas desde el árabe y el griego, lo que llevó al surgimiento de las primeras __________."
respuesta: "universidades"
respuestas_validas:
  - "universidades"
  - "Universidades"
  - "UNIVERSIDADES"
explicacion: "El interés por el conocimiento clásico y el derecho canónico llevó a la formación de escuelas catedralicias que evolucionaron hacia universidades, como las de Bolonia, París y Oxford, institucionalizando el aprendizaje superior."
```

```
metadata:
  materia: "historia-profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["leanto", "otomano", "liga-santa", "1571"]
tipo: vf
enunciado: "La Batalla de Lepanto, donde la Liga Santa derrotó a la flota otomana, tuvo lugar en 1571, marcando el fin de la Edad Media."
respuesta: falso
explicacion: "La Batalla de Lepanto ocurrió en 1571, en la Edad Moderna, no en la Edad Media. La Edad Media generalmente se considera que termina a finales del siglo XV (1453 o 1492)."
```

```
metadata:
  materia: "historia-profunda"
  tema: "edad-media-plena"
  nivel: "intermedio"
  tags: ["francisco-de-asis", "pobreza", "mendicidad", "siglo-xiii"]
tipo: mc
enunciado: "San Francisco de Asís fundó la Orden de los Frailes Menores en el siglo XIII. ¿Cuál era el principio central de su vida religiosa?"
respuesta: "La pobreza evangélica literal y la imitación de la vida de Cristo"
opciones_explicitas:
  - "La pobreza evangélica literal y la imitación de la vida de Cristo"
  - "El estudio académico avanzado en las universidades"
  - "La acumulación de riquezas para construir catedrales"
  - "La vida contemplativa en monasterios cerrados y aislados"
explicacion: "Francisco de Asís rechazó la riqueza y el estatus social, promoviendo una vida de pobreza radical y predicación itinerante, inspirada en el Evangelio, lo que contrastaba con la riqueza de otras órdenes y la Iglesia institucional."
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

## Sección: entreguerras-y-crisis-de-1929 (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["crisis-economica", "1929", "causas"]
tipo: mc
enunciado: "¿Cuál de las siguientes estructuras económicas fue identificada por muchos historiadores como una causa estructural fundamental que impidió la recuperación del mercado de consumo en Estados Unidos antes de la Gran Depresión?"
opciones_explicitas:
  - "La fuerte regulación bancaria de la Reserva Federal."
  - "La sobreproducción industrial y agrícola combinada con un crédito al consumo desmedido y una distribución desigual de la renta."
  - "El exceso de exportaciones agrícolas hacia Europa devastada por la guerra."
  - "La escasez de materias primas debido al bloqueo naval de las potencias aliadas."
respuesta: "La sobreproducción industrial y agrícola combinada con un crédito al consumo desmedido y una distribución desigual de la renta."
explicacion: "Durante los años 20, la producción aumentó más rápido que los salarios, creando un desequilibrio. El crédito al consumo permitía comprar bienes que la mayoría no podía pagar con su ingreso actual, generando una burbuja de deuda que estalló cuando el mercado se saturó."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["1929", "bolsa", "cronologia"]
tipo: vf
enunciado: "El colapso inicial de la bolsa de Nueva York, conocido como el \"Jueves Negro\", ocurrió el 24 de octubre de 1929, marcando el inicio simbólico de la Gran Depresión."
respuesta: verdadero
explicacion: "El jueves 24 de octubre de 1929 fue el primer día de ventas masivas y pánico generalizado. Aunque el \"Martes Negro\" (29 de octubre) fue aún peor en volumen, el Jueves Negro es la fecha tradicionalmente citada como el inicio del colapso financiero."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["herbert-hoover", "politica-economica", "respuesta-gobierno"]
tipo: completar
enunciado: "El presidente estadounidense Herbert Hoover, aunque reticente a la intervención federal directa masiva, apoyó la creación de la _______ para intentar estabilizar los bancos y las corporaciones en dificultades."
respuesta: "Reconstruction Finance Corporation"
respuestas_validas:
  - "Reconstruction Finance Corporation"
  - "reconstruction finance corporation"
  - "RFC"
  - "Corporación de Financiamiento de la Reconstrucción"
explicacion: "La RFC (Reconstruction Finance Corporation) fue establecida en 1932 bajo Hoover para prestar dinero a bancos, ferrocarriles y otras instituciones financieras, marcando un paso temprano hacia la intervención federal, aunque insuficiente para detener la crisis."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["diplomacia", "locarno", "estabilidad-relativa"]
tipo: mc
enunciado: "Los Pactos de Locarno (1925) tuvieron un impacto significativo en la diplomacia europea antes de la crisis de 1929. ¿Cuál fue su principal efecto?"
opciones_explicitas:
  - "Establecieron las fronteras orientales de Alemania con Polonia y Checoslovaquia de manera irreversible."
  - "Garantizaron las fronteras occidentales de Alemania y permitieron su entrada en la Sociedad de Naciones, mejorando temporalmente la confianza entre potencias."
  - "Imponían sanciones económicas automáticas a cualquier nación que rearmara sin autorización."
  - "Crearon una unión aduanera entre Alemania, Francia e Italia."
respuesta: "Garantizaron las fronteras occidentales de Alemania y permitieron su entrada en la Sociedad de Naciones, mejorando temporalmente la confianza entre potencias."
explicacion: "Locarno vio a Alemania, Francia y Bélgica garantizar sus fronteras comunes. Esto llevó a la entrada de Alemania en la Sociedad de Naciones en 1926, creando la llamada \"Espíritu de Locarno\", una breve era de reconciliación que se desvaneció con la crisis."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["comercio", "proteccionismo", "smoot-hawley"]
tipo: completar
enunciado: "La _______ de 1930 elevó los aranceles estadounidenses a niveles históricos, provocando represalias comerciales globales y profundizando la Gran Depresión."
respuesta: "Ley Smoot-Hawley"
respuestas_validas:
  - "Ley Smoot-Hawley"
  - "ley smoot-hawley"
  - "Smoot-Hawley Tariff Act"
  - "arancel smoot-hawley"
explicacion: "La Ley Smoot-Hawley aumentó los aranceles a más de 20.000 productos importados. Esto provocó que otros países elevaran sus propios aranceles, colapsando el comercio internacional y reduciendo drásticamente el volumen de intercambios globales."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["nazismo", "alemania", "crisis-politica"]
tipo: mc
enunciado: "¿Cómo contribuyó específicamente la Gran Depresión al ascenso electoral del Partido Nazi (NSDAP) en Alemania entre 1929 y 1933?"
opciones_explicitas:
  - "Al garantizar que Hitler fuera nombrado canciller directamente por el presidente Hindenburg en 1930."
  - "Al provocar una hiperinflación que arruinó a la clase media, haciendo que apoyaran al SPD."
  - "Al causar un desempleo masivo y desesperación social que erosionó la legitimidad de la República de Weimar y favoreció a los extremos políticos."
  - "Al permitir que Alemania recibiera más préstamos de EE.UU. que usó para financiar propaganda nazi."
respuesta: "Al causar un desempleo masivo y desesperación social que erosionó la legitimidad de la República de Weimar y favoreció a los extremos políticos."
explicacion: "La crisis eliminó los préstamos estadounidenses (efecto de la retirada de capitales), provocando quiebras bancarias y desempleo masivo. Esto debilitó a los partidos moderados y hizo que los votores buscaran soluciones radicales, beneficiando a los nazis y comunistas."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["urss", "stalin", "nep", "industrializacion"]
tipo: vf
enunciado: "Durante la Gran Depresión en Occidente, Stalin mantuvo la Nueva Política Económica (NEP) intacta para proteger a la Unión Soviética del impacto del capitalismo global."
respuesta: falso
explicacion: "Stalin abandonó la NEP a finales de los años 20 e inició los Planes Quinquenales, centrados en la industrialización forzada y la colectivización agrícola, independientemente de la crisis capitalista, buscando la autosuficiencia y el desarrollo industrial rápido."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["oro", "tipo-cambio", "economia-monetaria"]
tipo: completar
enunciado: "La adhesión a la _______ por parte de muchas naciones europeas durante la crisis limitó la capacidad de sus gobiernos para devaluar sus monedas y estimular la economía doméstica."
respuesta: "Gold Standard"
respuestas_validas:
  - "Gold Standard"
  - "gold standard"
  - "patrón oro"
  - "estandar oro"
  - "patrón de oro"
explicacion: "Bajo el patrón oro, los países debían mantener reservas de oro. Para defender la convertibilidad, tuvieron que subir tasas de interés y contraer la oferta monetaria, lo que profundizó la deflación y la recesión. Gran Bretaña abandonó el patrón oro en 1931, recuperando flexibilidad monetaria."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["fdr", "new-deal", "elecciones"]
tipo: mc
enunciado: "¿Qué factor político clave permitió a Franklin D. Roosevelt ganar las elecciones de 1932 con una mayoría abrumadora?"
opciones_explicitas:
  - "La popularidad de la Liga de las Naciones."
  - "El fracaso percibido de la administración de Herbert Hoover para manejar la crisis económica y social."
  - "Un pacto secreto con el Partido Comunista de EE.UU."
  - "La intervención militar directa de EE.UU. en Europa."
respuesta: "El fracaso percibido de la administración de Herbert Hoover para manejar la crisis económica y social."
explicacion: "La percepción de que Hoover era indiferente al sufrimiento popular (\"Hoovervilles\", \"Hoover flags\") y que sus políticas eran insuficientes, llevó a un cambio de régimen masivo hacia el New Deal de FDR, prometiendo acción federal activa."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["new-deal", "nira", "constitucionalidad"]
tipo: vf
enunciado: "La Ley de Recuperación Industrial Nacional (NIRA) de 1933 fue declarada inconstitucional por la Corte Suprema de EE.UU. en 1935."
respuesta: verdadero
explicacion: "En el caso *Schechter Poultry Corp. v. United States*, la Corte Suprema dictaminó que la NIRA delegaba demasiado poder legislativo al ejecutivo y regulaba negocios intrastatales, excediendo la autoridad constitucional de la Unión."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["dust-bowl", "medio-ambiente", "migracion"]
tipo: completar
enunciado: "La combinación de sequía severa y prácticas agrícolas inadecuadas en las llanuras centrales de EE.UU. provocó las tormentas de polvo conocidas como _______."
respuesta: "Dust Bowl"
respuestas_validas:
  - "Dust Bowl"
  - "dust bowl"
  - "Gran Tormenta de Polvo"
  - "la gran tormenta de polvo"
explicacion: "El Dust Bowl (mediados de los años 30) devastó la agricultura, forzando la migración de cientos de miles de personas (los \"Okies\") hacia California, generando una crisis humanitaria y social adicional a la depresión económica."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["alemania", "urss", "diplomacia-secreta"]
tipo: mc
enunciado: "El Tratado de Rappallo (1922) fue significativo para la Alemania de Weimar porque:"
opciones_explicitas:
  - "Le permitió rearmarse secretamente en territorio soviético, eludiendo las cláusulas militares del Tratado de Versalles."
  - "Estableció la zona desmilitarizada del Rin."
  - "Otorgó a Alemania el control de las minas de carbón del Sarre."
  - "Fue el primer acuerdo de reparación de guerra pagado a Rusia."
respuesta: "Le permitió rearmarse secretamente en territorio soviético, eludiendo las cláusulas militares del Tratado de Versalles."
explicacion: "Alemania y la URSS normalizaron relaciones y firmaron acuerdos secretos de cooperación militar y económica. Esto permitió a Alemania entrenar tropas y desarrollar armas prohibidas por Versalles, sentando las bases del futuro rearme nazi."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["new-deal", "bancos", "glass-steagall"]
tipo: completar
enunciado: "La _______ de 1933 cerró temporalmente todos los bancos en EE.UU. para detener las corridas bancarias y restablecer la confianza en el sistema financiero."
respuesta: "Ley de Reorganización Bancaria"
respuestas_validas:
  - "Ley de Reorganización Bancaria"
  - "ley de reorganizacion bancaria"
  - "Banking Act of 1933"
  - "Ley Bancaria de 1933"
explicacion: "Conocida como el \"Bank Holiday\", esta medida de emergencia detuvo el pánico bancario. Posteriormente, la Ley Glass-Steagall (parte de esta legislación) separó la banca comercial de la de inversión."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["mussolini", "fascismo", "italia"]
tipo: vf
enunciado: "Benito Mussolini llegó al poder en Italia principalmente como respuesta directa a la crisis económica de 1929, ya que la economía italiana estaba completamente intacta antes de esa fecha."
respuesta: falso
explicacion: "Mussolini llegó al poder en 1922, mucho antes de la crisis de 1929. Su ascenso se debió a la inestabilidad política post-Primera Guerra Mundial, el miedo al comunismo (Biennio Rosso) y la crisis económica de posguerra (1919-1921), no a la Gran Depresión."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["reparaciones", "alemania", "dawes"]
tipo: mc
enunciado: "¿Cuál era el mecanismo principal del Plan Dawes (1924) para manejar las reparaciones de guerra de Alemania?"
opciones_explicitas:
  - "Cancelar todas las deudas de Alemania a cambio de concesiones territoriales."
  - "Proporcionar préstamos internacionales (principalmente de EE.UU.) a Alemania para que pagara a los aliados, quienes a su vez pagaban a EE.UU."
  - "Transformar las reparaciones en bienes naturales extraídos directamente de la Ruhr."
  - "Establecer un fondo de compensación mutua entre todas las potencias europeas."
respuesta: "Proporcionar préstamos internacionales (principalmente de EE.UU.) a Alemania para que pagara a los aliados, quienes a su vez pagaban a EE.UU."
explicacion: "El Plan Dawes creó un círculo vicioso de deuda: Alemania dependía de préstamos estadounidenses para pagar a Francia/Reino Unido, que usaban ese dinero para pagar sus propias deudas a EE.UU. Cuando los préstamos se detuvieron en 1929, el sistema colapsó."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["inmigracion", "eeuu", "nacionalismo"]
tipo: completar
enunciado: "La Ley de Inmigración de 1924 estableció cuotas basadas en el censo de _______ para reducir drásticamente la inmigración desde el sur y este de Europa."
respuesta: 1890
respuestas_validas:
  - 1890
  - "mil ochocientos noventa"
  - "censo de 1890"
explicacion: "Al usar el censo de 1890 (antes de la gran ola de inmigrantes del sur/este de Europa), EE.UU. favorecía a los inmigrantes del norte y oeste de Europa, reflejando un fuerte sentimiento nativista y racial antes de la crisis de 1929."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["sarre", "francia", "reparaciones"]
tipo: mc
enunciado: "¿Qué implicación tuvo la ocupación de la zona del Sarre por fuerzas francesas y belgas en 1923 para la estabilidad europea?"
opciones_explicitas:
  - "Provocó la retirada inmediata de EE.UU. de la región."
  - "Generó la pasividad activa (o resistencia pasiva) alemana, hiperinflación y la ruptura de la confianza diplomática previa a Locarno."
  - "Llevó a la creación inmediata de la Sociedad de Naciones."
  - "Aseguró el pago completo de las reparaciones alemanas."
respuesta: "Generó la pasividad activa (o resistencia pasiva) alemana, hiperinflación y la ruptura de la confianza diplomática previa a Locarno."
explicacion: "La ocupación de la Ruhr/Sarre por Francia y Bélgica para asegurar reparaciones impagas llevó a Alemania a detener los pagos y fomentar la resistencia pasiva, causando hiperinflación y aislamiento diplomático, lo que debilitó la República de Weimar."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["new-deal", "seguridad-social"]
tipo: vf
enunciado: "El Seguro de Desempleo federal en Estados Unidos fue establecido inicialmente como parte de la Ley de Seguridad Social (Social Security Act) de 1935."
respuesta: verdadero
explicacion: "La Ley de Seguridad Social de 1935 creó el sistema federal de seguro de desempleo, pagado conjuntamente por empleadores y empleados, marcando el inicio de la red de seguridad social moderna en EE.UU., tras intentos previos fallidos a nivel estatal."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["economia-internacional", "genova", "libre-cambio"]
tipo: mc
enunciado: "¿Cuál fue el objetivo principal de la Conferencia Económica Internacional de Génova en 1922?"
opciones_explicitas:
  - "Establecer un arancel único para toda Europa."
  - "Restaurar la convertibilidad de las monedas europeas al patrón oro y promover el libre comercio."
  - "Imponer sanciones económicas a la Unión Soviética."
  - "Crear una unión monetaria europea."
respuesta: "Restaurar la convertibilidad de las monedas europeas al patrón oro y promover el libre comercio."
explicacion: "Génova buscaba estabilizar las monedas europeas dañadas por la guerra y reintegrar a Alemania y la URSS en la economía global, aunque sus resultados fueron limitados y muchos países mantuvieron controles de cambio por años."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["aislacionismo", "lley-neutralidad", "pre-guerra"]
tipo: completar
enunciado: "La Ley de Neutralidad de 1939 permitió a las naciones aliadas comprar armas a EE.UU. bajo la política de _______ y pago inmediato en efectivo."
respuesta: "Cash and Carry"
respuestas_validas:
  - "Cash and Carry"
  - "cash and carry"
  - "pago en efectivo y transporte propio"
  - "efectivo y transporte propio"
explicacion: "Esta política, aunque mantenía la neutralidad formal, benefició a Gran Bretaña y Francia, ya que podían transportar las armas por mar, mientras que Alemania no podía acceder a ellas debido al bloqueo naval británico."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["veteranos", "bonus", "protesta"]
tipo: mc
enunciado: "¿Qué efecto tuvo la represión de la \"Bonus Army\" por George Patton en 1932 en la opinión pública?"
opciones_explicitas:
  - "Consolidó el apoyo a Hoover como líder fuerte."
  - "Generó una ola de simpatía hacia los veteranos y aumentó la crítica a la dureza del gobierno federal ante la crisis."
  - "No tuvo impacto político significativo."
  - "Llevó a la creación inmediata del Departamento de Asuntos de Veteranos."
respuesta: "Generó una ola de simpatía hacia los veteranos y aumentó la crítica a la dureza del gobierno federal ante la crisis."
explicacion: "La marcha de veteranos desempleados que pedían el pago anticipado de su bono de guerra fue dispersada violentamente por el ejército. Esto fue visto como una crueldad injusta y contribuyó a la derrota de Hoover en 1932."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["pacto-antikomintern", "alemania", "japon", "urss"]
tipo: completar
enunciado: "El _______ Anticomintern, firmado inicialmente por Alemania y Japón en 1936, fue un acuerdo para coordinar la oposición a la influencia de la Komintern soviética."
respuesta: "Pacto"
respuestas_validas:
  - "Pacto"
  - "pacto"
  - "Anti-Comintern Pact"
  - "anti-comintern pact"
explicacion: "Inicialmente dirigido contra la URSS, este pacto sirvió para alinear a las potencias fascistas. Italia se unió después, y aunque fue una declaración ideológica, también sentó las bases para la posterior alianza del Eje."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["new-deal", "agricultura", "aaa"]
tipo: vf
enunciado: "La Ley de Ajuste Agrícola (AAA) de 1933 buscó aumentar los precios agrícolas pagando a los productores para que redujeran la producción y mataran ganado existente."
respuesta: verdadero
explicacion: "La AAA intentó combatir la deflación rural pagando a los granjeros para que dejaran de cultivar y destruyeran excedentes (ganado, cultivos). Esto fue controversial pero logró subir los precios agrícolas, aunque perjudicó a los inquilinos y trabajadores agrícolas."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["reparaciones", "lausana", "fin-reparaciones"]
tipo: mc
enunciado: "¿Qué resultado clave tuvo la Conferencia de Lausana en 1932 respecto a las reparaciones alemanas?"
opciones_explicitas:
  - "Aumentó las reparaciones un 50%."
  - "Suspendió efectivamente el pago de reparaciones de guerra, llevando a su cancelación de facto un año después."
  - "Obligó a Alemania a hipotecar sus ferrocarriles."
  - "Estableció un pago único definitivo de 10.000 millones de marcos."
respuesta: "Suspendió efectivamente el pago de reparaciones de guerra, llevando a su cancelación de facto un año después."
explicacion: "La Conferencia de Lausana suspendió los pagos de reparaciones. En 1933, se llegó a un acuerdo de facto donde Alemania no pagaría más reparaciones, liberándola de esa carga económica pero también aislándola financieramente de Occidente."
```

```
metadata:
  materia: "historia_profunda"
  tema: "entreguerras-y-crisis-de-1929"
  nivel: "avanzado"
  tags: ["new-deal", "vivienda", "fhla"]
tipo: completar
enunciado: "La _______ de Vivienda de Emergencia de 1933 creó la Federal Home Loan Bank para estabilizar el sector inmobiliario y facilitar el crédito hipotecario."
respuesta: "Ley"
respuestas_validas:
  - "Ley"
  - "ley"
  - "Emergency Housing Act"
  - "emergency housing act"
explicacion: "Esta ley fue parte de los primeros días del New Deal, buscando evitar los desalojos masivos y la quiebra de los bancos hipotecarios, sentando las bases para la posterior creación de la FHLB y la regulación del mercado hipotecario."
```

## Sección: escalas-de-tiempo-profundo (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["universo", "edad_del_universo"]

respuesta: "13800"
tipo: completar
respuestas_validas:
  - "13800"

enunciado: "Según los modelos cosmológicos actuales basados en la radiación de fondo de microondas, la edad estimada del universo es de aproximadamente ___ millones de años."

explicacion: |
  La edad del universo es de aproximadamente 13.800 millones de años. Esta escala es tan vasta que resulta imposible de imaginar para el cerebro humano, que evolucionó para entender ciclos diarios o estacionales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["tierra", "formacion_planetaria"]

respuesta: "4600 millones de años"
tipo: completar
respuestas_validas:
  - "4600 millones de años"

enunciado: "La formación de la Tierra ocurrió hace aproximadamente ___."

explicacion: |
  La Tierra se formó hace unos 4.600 millones de años, mucho después del Big Bang, pero mucho antes de la aparición de la vida compleja.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["psicologia", "intuicion"]

respuesta: "evolucionado"
tipo: completar
respuestas_validas:
  - "evolucionado"

enunciado: "Nuestra intuición no está calibrada para las escalas de tiempo profundo porque nuestro cerebro ha ___ para sobrevivir en entornos de corto plazo."

explicacion: |
  La evolución humana priorizó la percepción de eventos inmediatos (depredadores, estaciones, ciclos de comida) sobre la comprensión de procesos geológicos o cósmicos que tardan eones en ocurrir.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["comparacion", "tiempo"]

respuesta: "4600"
tipo: completar
respuestas_validas:
  - "4600"

enunciado: "Si el universo tiene 13.800 millones de años, la Tierra tiene aproximadamente ___ millones de años."

explicacion: |
  La Tierra es significativamente más joven que el universo; se formó cuando el universo ya tenía casi 9.000 millones de años de existencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "avanzado"
  tags: ["antropoceno", "escala_humana"]

respuesta: "insignificante"
tipo: completar
respuestas_validas:
  - "insignificante"

enunciado: "En comparación con la escala de tiempo de la formación de la corteza terrestre, la duración de la civilización humana es prácticamente ___."

explicacion: |
  La historia de la humanidad es un parpadeo en la escala del tiempo profundo. Mientras la Tierra tarda millones de años en cambiar sus continentes, la humanidad apenas lleva unos pocos milenios de historia escrita.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["notacion_cientifica", "escala_longitud"]

respuesta: "10^12"
tipo: mc
opciones_explicitas: ["10^6", "10^9", "10^12", "10^15"]

enunciado: "En español (escala larga), cuando hablamos de un 'billón', nos referimos a una cantidad equivalente a un ___."

explicacion: |
  En español, el sistema de escala larga define el billón como un millón de millones, es decir, 10^12.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["notacion_cientifica", "traduccion"]

respuesta: "10^9"
tipo: mc
opciones_explicitas: ["10^6", "10^9", "10^12", "10^15"]

enunciado: "Si leés un texto de geología en inglés que menciona un 'billion' de años, ¿a qué potencia de 10 te referís en nuestra escala numérica?"

explicacion: |
  En inglés (escala corta), un 'billion' equivale a mil millones, es decir, 10^9.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "comparacion"]

respuesta: "mil millones"
tipo: completar
respuestas_validas:
  - "mil millones"

enunciado: "El valor de un 'billion' en inglés es equivalente, en español, a ___."

explicacion: |
  El término 'billion' en inglés representa 10^9, lo cual en español llamamos 'mil millones'.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "geologia"]

respuesta: "4.5 x 10^9"
tipo: completar
respuestas_validas:
  - "4.5 x 10^9"
  - "4.5x10^9"

enunciado: "La edad estimada de la Tierra es de aproximadamente 4,5 mil millones de años. Expresá este número en notación científica (formato N x 10^x)."

explicacion: |
  4,5 mil millones se escribe como 4.500.000.000, lo que equivale a 4,5 x 10^9.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "logica"]

respuesta: "10^3"
tipo: mc
opciones_explicitas: ["10^2", "10^3", "10^6", "10^9"]

enunciado: "Si dividimos un billón (español, 10^12) por un billion (inglés, 10^9), el resultado es una magnitud de ___."

explicacion: |
  10^12 / 10^9 = 10^(12-9) = 10^3. El resultado es mil.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["calendario_cosmico", "big_bang"]

enunciado: "Si comprimiéramos los 13.800 millones de años de la historia del universo en un solo año calendario, el evento del Big Bang ocurriría el día ___ de enero."

respuestas_validas:
  - "1"
respuesta: "1"
tipo: completar

explicacion: |
  En el calendario cósmico, el 1 de enero marca el inicio del tiempo y el espacio con el Big Bang.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["tierra", "vida"]

respuesta: "septiembre"
tipo: completar
respuestas_validas:
  - "septiembre"

enunciado: "Si el Big Bang es el 1 de enero, la formación de la Tierra ocurriría aproximadamente el 1° de ___."

explicacion: |
  La Tierra se formó hace unos 4.500 millones de años, lo que en nuestra escala corresponde a principios de septiembre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["dinosaurios", "extincion"]

respuesta: "24 de diciembre"
tipo: completar
respuestas_validas:
  - "24 de diciembre"

enunciado: "La era de los dinosaurios (que terminó hace unos 66 millones de años) se ubicaría en el calendario cósmico alrededor del ___."

explicacion: |
  Los dinosaurios dominaron la Tierra durante gran parte del último mes del año cósmico, desapareciendo hacia la Navidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "avanzado"
  tags: ["historia_humana", "tiempo_corto"]

enunciado: "La historia de la humanidad escrita (desde la invención de la escritura) ocupa apenas unos segundos del día ___ de diciembre."

respuestas_validas:
  - "31"
respuesta: "31"
tipo: completar

explicacion: |
  A pesar de nuestra importancia cultural, la historia humana es un parpadeo insignificante comparado con la escala cósmica, ocurriendo en los últimos instantes del 31 de diciembre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["percepcion_temporal", "escala"]

opciones_explicitas: ["Septiembre", "Diciembre", "Enero", "Julio"]
respuesta: "Septiembre"
tipo: mc

enunciado: "Si el universo tiene 13.800 millones de años y la Tierra tiene aproximadamente 4.500 millones de años, ¿en qué mes del calendario cósmico se ubica la aparición de la Tierra?"

explicacion: |
  La Tierra se formó hace 4.500 millones de años, lo que sitúa su aparición en el mes de septiembre dentro de la escala de un año.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["escala_temporal", "historia", "geologia"]

enunciado: "Si comparamos la edad de la Tierra (aprox. 4500 millones de años) con la duración de la historia escrita (aprox. 5000 años), la historia escrita representa una fracción de tiempo que es:"

opciones_explicitas: ["Una parte significativa", "Una fracción minúscula", "La mitad del tiempo terrestre", "Un tiempo equivalente"]

respuesta: "Una fracción minúscula"
tipo: mc

explicacion: |
  5.000 años frente a 4.500 millones de años es una proporción prácticamente nula — la historia escrita es apenas un instante en la escala geológica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["homo_sapiens", "evolucion"]

enunciado: "Considerando que el Homo sapiens moderno tiene aproximadamente 300.000 años de existencia, ¿cuál de las siguientes afirmaciones es correcta respecto a la escala geológica?"

opciones_explicitas: ["Es casi tanto tiempo como la edad de la Tierra", "Es un parpadeo insignificante frente a la edad de la Tierra", "Es el tiempo que tardó la Tierra en formarse", "Es un tiempo extremadamente largo en términos geológicos"]

respuesta: "Es un parpadeo insignificante frente a la edad de la Tierra"
tipo: mc

explicacion: |
  300.000 años representan apenas una fracción de un 0,01% de los 4.600 millones de años de historia de la Tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["comparacion", "escala"]

opciones_explicitas: ["Historia escrita", "Homo sapiens", "Edad de la Tierra"]
respuesta_orden: ["Historia escrita", "Homo sapiens", "Edad de la Tierra"]
tipo: ordenar

enunciado: "Ordená de MENOR a MAYOR duración estos 3 lapsos de tiempo:"

explicacion: |
  La historia escrita (~5.000 años) es la más corta, seguida por la existencia del Homo sapiens (~300.000 años), y por último la edad de la Tierra (~4.600 millones de años), la más larga por lejos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Para entender la 'Historia Profunda', debemos entender que la actividad humana es una escala de tiempo ___ en comparación con los procesos geológicos."

respuestas_validas:
  - "minúscula"
  - "insignificante"
  - "pequeña"

respuesta: "minúscula"
tipo: completar

explicacion: |
  Los procesos geológicos se miden en millones de años; la actividad humana, en siglos — una diferencia de varios órdenes de magnitud.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "avanzado"
  tags: ["proporciones", "geologia"]

enunciado: "Si la historia de la humanidad (desde la escritura) fuera un día de 24 horas, la edad de la Tierra equivaldría aproximadamente a:"

opciones_explicitas: ["Unos pocos minutos", "Casi 24 horas", "Unos 10 años", "Un siglo"]

respuesta: "Casi 24 horas"
tipo: mc

explicacion: |
  Al invertir la comparación (poniendo lo corto como referencia de 24 horas), la escala geológica completa se estira a una duración enorme comparada con esa unidad — el punto es que la relación de magnitudes es abismal en cualquier dirección que se la mire.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["geologia", "notacion_cientifica"]

enunciado: "La edad estimada de la Tierra es de aproximadamente 4.540.000.000 años. ¿Cuál es la forma correcta de expresar este número en notación científica?"

opciones_explicitas: ["4.54e9", "4.54e7", "45.4e8", "0.454e10"]
respuesta: "4.54e9"
tipo: mc

explicacion: |
  4.540.000.000 equivale a 4,54 × 10⁹ en notación científica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["calendario_cosmico", "eventos"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["1° de septiembre", "La formación del Sistema Solar"], ["finales de septiembre", "La aparición de la vida"], ["30 de diciembre", "La extinción de los dinosaurios"]]

enunciado: "En el calendario cósmico, {escenario[idx][0]} corresponde aproximadamente a ___."

opciones_explicitas: ["La formación del Sistema Solar", "La aparición de la vida", "La extinción de los dinosaurios"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  El calendario cósmico es una escala que comprime el tiempo universal en un año para facilitar su comprensión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "cosmologia"]

variables:
  idx: uno_de([0, 1, 2])
  valor: [[13800000000, "1.38e10"], [138000000000, "1.38e11"], [1380000000, "1.38e9"]]

enunciado: "Un valor de {valor[idx][0]} años, ¿cómo se expresa correctamente en notación científica?"

opciones_explicitas: ["1.38e10", "1.38e11", "1.38e9", "13.8e9"]
respuesta: valor[idx][1]
tipo: mc

explicacion: |
  Para pasar a notación científica se cuenta cuántos lugares hay que mover la coma decimal hacia la izquierda hasta dejar un solo dígito antes del punto.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "avanzado"
  tags: ["geologia", "completar"]

variables:
  idx: uno_de([0, 1, 2])
  eon_datos: [[1500000000, "1.5e9"], [2000000000, "2.0e9"], [2500000000, "2.5e9"]]

enunciado: "Un eón es una unidad de tiempo geológico muy larga. Si un período geológico duró {eon_datos[idx][0]} años, su valor en notación científica es ___ años."

respuestas_validas:
  - "1.5e9"
  - "2.0e9"
  - "2.5e9"
respuesta: eon_datos[idx][1]
tipo: completar

explicacion: |
  Cada valor se expresa como N x 10⁹, manteniendo un solo dígito significativo antes del punto decimal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escalas_de_tiempo_profundo"
  nivel: "basico"
  tags: ["comparacion", "notacion"]

variables:
  idx: uno_de([0, 1, 2])
  comparacion: [[1000000000, "1e9"], [100000000, "1e8"], [1000000, "1e6"]]

enunciado: "Si un evento ocurrió hace {comparacion[idx][0]} años, la forma abreviada en notación científica es ___."

respuestas_validas:
  - "1e9"
  - "1e8"
  - "1e6"
respuesta: comparacion[idx][1]
tipo: completar

explicacion: |
  La notación científica permite manejar grandes escalas de tiempo de forma eficiente, expresando el número como una potencia de 10.
```

