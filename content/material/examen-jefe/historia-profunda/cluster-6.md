# Examen jefe — Maestro de escalas temporales

> Logro #104. Atravesaste desde el feudalismo hasta la crisis del '29 dominando las grandes transformaciones. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **121 preguntas totales** en 5/5 secciones.

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

respuesta: datos[escenario_idx][2][1
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
respuestas_validas: ["homenaje", "investidura", "lealtad"]

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

respuesta: ["Campesinos", "Caballeros", "Señores Feudales"]
tipo: ordenar
opciones_explicitas: ["Caballeros", "Campesinos", "Señores Feudales", "Campesinos", "Caballeros", "Señores Feudales"]

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
respuestas_validas: ["siervo"]

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
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["economia", "intercambio"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["lealtad y servicio militar", "protección y tierras"], ["trabajo agrícola", "alimento y refugio"]]

tipo: mc
opciones_explicitas: ["Servicio militar y lealtad", "Pago de oro y plata", "Intercambio de productos artesanales", "Voto de pobreza"]

enunciado: "Si un vasallo fallaba en cumplir su parte del contrato hacia su señor, el señor perdía la oportunidad de recibir {datos[escenario_idx][0]}."

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

respuestas_validas: ["feudo"]

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

respuesta: ["Rey", "Señores Feudales", "Caballeros", "Siervos"]
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

variables:
  escenario: uno_de([["Siervos", "estaban ligados a la tierra"], ["Campesinos libres", "tenían mayor movilidad"]])

respuesta: escenario[0
tipo: completar
respuestas_validas: ["Siervos", "Campesinos libres"]

enunciado: "En el sistema feudal, los ___ eran aquellos que no tenían libertad de movimiento y estaban ___."

explicacion: |
  A diferencia de los campesinos libres, los siervos estaban legalmente vinculados a la tierra que trabajaban.
```

```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "avanzado"
  tags: ["vasallaje", "nobleza"]

variables:
  caso: uno_de([[0, "Señor Feudal"], [1, "Rey"]])

respuesta: caso[0

tipo: completar
tolerancia_abs: 0

enunciado: "Si un noble recibe tierras a cambio de lealtad y apoyo militar, su posición es la de un ___."

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
respuestas_validas: ["monopolio"]

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

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El Papa", "El Rey"],
    ["El Obispo", "El Señor Feudal"]
  ]
  respuestas: [
    ["máxima autoridad espiritual", "autoridad política y militar"],
    ["autoridad sobre una diócesis", "dueño de las tierras y vasallos"]
  ]

enunciado: "En la jerarquía eclesiástica, {escenarios[escenario_idx][0]} era considerado la {escenarios[escenario_idx][1]}."

respuesta: {respuestas[escenario_idx][1]}
tipo: mc
opciones_explicitas: ["máxima autoridad espiritual", "autoridad política y militar", "representante del emperador", "jefe de la guardia papal"]

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
respuestas_validas: ["teocentrismo"]

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

opciones_explicitas: ["Campesinos", "Clero", "Nobleza"]
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

respuestas_validas: ["Clérigo", "Noble", "Siervo"]
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
respuesta: ["Clero/Nobleza", "Nobleza/Clero", "Campesinado/Siervos"]
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

respuestas_validas: ["Siervo", "Caballero", "Obispo"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  A diferencia de los campesinos libres, los siervos estaban legalmente ligados a la gleba (la tierra).
```

## Sección: edad-media-plena (24 preguntas)

```
### 2 — La Reforma Gregoriana
```

```
### 3 — La Batalla de Manzikert
```

```
### 4 — El Cisma de 1054
```

```
### 5 — La Primera Cruzada
```

```
### 6 — La Reforma Cluniacense
```

```
### 7 — La Paz de Dios
```

```
### 8 — La Tregua de Dios
```

```
### 9 — La Batalla de Hastings
```

```
### 10 — El Sacro Imperio Romano Germánico
```

```
### 11 — La Escolástica
```

```
### 12 — La Peste Negra
```

```
### 13 — La Carta Magna
```

```
### 14 — Las Cruzadas del Norte
```

```
### 15 — El Cisma de Occidente
```

```
### 16 — La Batalla de las Esporas
```

```
### 17 — El Feudalismo
```

```
### 18 — La Peste del Siglo XIV
```

```
### 19 — El Concilio de Latrán IV
```

```
### 20 — La Orden del Temple
```

```
### 21 — La Guerra de los Cien Años
```

```
### 22 — La Peste Negra y la Iglesia
```

```
### 23 — El Renacimiento del Siglo XII
```

```
### 24 — La Batalla de Lepanto
```

```
### 25 — La Reforma Franciscana
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
respuestas_validas: ["motor eléctrico"]

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

variables:
  escenario: uno_de([["luz de gas", "luz de gas"], ["luz eléctrica", "luz eléctrica"], ["luz de vela", "luz de vela"]])

respuesta: escenario[1
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

respuesta: ["máquinas de vapor", "motores eléctricos industriales", "iluminación doméstica", "electrodomésticos"]
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

variables:
  duelo: uno_de([[0, "Corriente Continua (DC"], [1, "Corriente Alterna (AC"]])

respuesta: duelo[0] == duelo[1]

tipo: mc
opciones_explicitas: ["Corriente Continua (DC", "Corriente Alterna (AC"]

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
respuestas_validas: ["iluminación"]

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
respuestas_validas: ["centralizada", "distribuida"]

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

variables:
  escenario: uno_de([
    ["El motor eléctrico permite mover máquinas individuales", "mayor flexibilidad"],
    ["El motor eléctrico consume menos energía en reposo", "mayor eficiencia"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["mayor flexibilidad", "mayor eficiencia", "menor costo de instalación"]

enunciado: "Al reemplazar la transmisión por correas de cuero de una máquina de vapor por motores eléctricos individuales en cada máquina, se logra principalmente: {escenario[1]}."

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
respuestas_validas: ["eléctrica", "térmica"]

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
respuesta: ["Implementación de máquinas de vapor", "Sistemas de correas y ejes centrales", "Instalación de redes eléctricas", "Uso de motores eléctricos individuales"]
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

variables:
  caso: uno_de([
    ["una fábrica con motores eléctricos", "espacios más abiertos y seguros"],
    ["una fábrica con máquinas de vapor", "espacios saturados de ejes y correas"]
  ])

respuesta: caso[1
tipo: mc
opciones_explicitas: ["espacios más abiertos y seguros", "espacios saturados de ejes y correas", "espacios con mayor ruido mecánico"]

enunciado: "Comparado con el sistema de vapor, el uso de {caso[0]} resultó en: {caso[1]}."

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

respuesta: escenario[escenario_idx][1
tipo: completar
respuestas_validas: ["lavado de ropa", "conservación de alimentos"]

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

respuesta: ["iluminación", "refrigeración", "comunicación"]
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
respuestas_validas: ["corriente continua"]

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

variables:
  idx: uno_de([0, 1])
  escenario: [[0, "Tesla y Westinghouse"], [1, "Edison y General Electric"]]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Tesla y Westinghouse", "Edison y General Electric"]

enunciado: "El sistema de corriente alterna, que finalmente se impuso para la distribución a larga distancia, fue promovido principalmente por {escenario[idx][0]}."

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
respuestas_validas: ["transformador"]

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

respuesta: ["Edison", "Tesla", "Westinghouse"]
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
  idx: uno_de([0, 1])
  datos: [[0, "Alterna", "Larga distancia"], [1, "Continua", "Corta distancia"]]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Larga distancia", "Corta distancia"]

enunciado: "Si comparamos el sistema de {datos[idx][0]}, este fue históricamente preferido para la distribución de ___."

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
  datos: [["motor_de_induccion", "fábrica"], ["bombilla_incandescente", "hogar"], ["telar_electrico", "fábrica"]]
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

variables:
  datos: [["luz_eléctrica", "hogar"], ["máquina_de_vapor", "fábrica"], ["telégrafo", "comunicación"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["fábrica", "hogar", "comunicación"]

enunciado: "La llegada de la {datos[idx][0]} permitió extender las actividades nocturnas en el ___."

explicacion: |
  La {datos[idx][0]} permitió que el ___ cambiara sus hábitos de descanso y ocio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["produccion", "transicion"]

variables:
  datos: [["línea_de_montaje", "fábrica"], ["radio_transmisor", "hogar"], ["lavadora", "hogar"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["fábrica", "hogar"]

enunciado: "La electrificación de la {datos[idx][0]} fue clave para la producción en serie en la: ___"

explicacion: |
  La {datos[idx][0]} es un ejemplo clásico de la mecanización en la {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profucha"
  tema: "electrificacion_fabrica_hogar"
  nivel: "avanzado"
  tags: ["orden", "progreso"]

variables:
  secuencia: ["generación_central", "distribución_red", "consumo_final"]
  idx: 0

respuesta: ["generación_central", "distribución_red", "consumo_final"]
tipo: ordenar
opciones_explicitas: ["generación_central", "distribución_red", "consumo_final"]

enunciado: "Ordena el proceso técnico necesario para que la electricidad llegue desde la central hasta un electrodoméstico:"

explicacion: |
  El flujo eléctrico sigue la secuencia: {secuencia[0]} -> {secuencia[1]} -> {secuencia[2]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_fabrica_hogar"
  nivel: "intermedio"
  tags: ["tecnologia", "clasificacion"]

variables:
  datos: [["electrodoméstico", "hogar"], ["transformador_industrial", "fábrica"], ["enchufe_doméstico", "hogar"]]
  idx: uno_de([0,1,2])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Un {datos[idx][0]} es un invento destinado principalmente al ___."

explicacion: |
  El uso de un {datos[idx][0]} es típico del ámbito del {datos[idx][1]}.
```

## Sección: entreguerras-y-crisis-de-1929 (24 preguntas)

```
### 2 — Fecha exacta del "Jueves Negro"
```

```
### 3 — Política monetaria del Hoovervilles
```

```
### 4 — Tratado de Locarno
```

```
### 5 — Ley Smoot-Hawley
```

```
### 6 — Ascenso de los nazis y la crisis
```

```
### 7 — Nueva Política Económica (NEP) en la URSS
```

```
### 8 — Gold Standard y la crisis
```

```
### 9 — Elección de FDR
```

```
### 10 — Ley de Recuperación Industrial Nacional (NIRA)
```

```
### 11 — Exodo de los Dust Bowl
```

```
### 12 — Tratado de Rappallo
```

```
### 13 — Ley de Reorganización Bancaria
```

```
### 14 — Ascenso del fascismo en Italia
```

```
### 15 — Plan Dawes
```

```
### 16 — Ley de Restricción de Inmigración de 1924
```

```
### 17 — Crisis del Sarre
```

```
### 18 — Ley de Seguro de Desempleo
```

```
### 19 — Conferencia de Génova
```

```
### 20 — Ley de Autorización de Préstamos a Beligerantes (Cash and Carry)
```

```
### 21 — Ley de Reembolso de los Veteranos (Bonus March)
```

```
### 22 — Pacto Anticomintern
```

```
### 23 — Ley de Regulación de la Industria Azucarera
```

```
### 24 — Conferencia de Lausana
```

```
### 25 — Ley de Vivienda de Emergencia
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
respuestas_validas: ["13800"]

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
respuestas_validas: ["4600 millones de años"]

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
respuestas_validas: ["evolucionado"]

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
respuestas_validas: ["4600"]

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
respuestas_validas: ["insignificante"]

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
respuestas_validas: ["mil millones"]

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
respuestas_validas: ["4.5 x 10^9", "4.5x10^9"]

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

respuestas_validas: ["1"]
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
respuestas_validas: ["septiembre"]

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
respuestas_validas: ["24 de diciembre"]

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

respuestas_validas: ["31"]
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
respuesta: ["Historia escrita", "Homo sapiens", "Edad de la Tierra"]
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

respuestas_validas: ["minúscula", "insignificante", "pequeña"]

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

respuestas_validas: ["1.5e9", "2.0e9", "2.5e9"]
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

respuestas_validas: ["1e9", "1e8", "1e6"]
respuesta: comparacion[idx][1]
tipo: completar

explicacion: |
  La notación científica permite manejar grandes escalas de tiempo de forma eficiente, expresando el número como una potencia de 10.
```
