# Historia Profunda — Edad media feudalismo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — La caída de Roma

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

### 2 — Estamentos sociales

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

### 3 — El contrato de vasallaje

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

### 4 — El orden social feudal

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

### 5 — El fin de una era

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

### 6 — El contrato de vasallaje

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

### 7 — La condición del siervo

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

### 8 — Jerarquía feudal

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

### 9 — El intercambio feudal

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

### 10 — El concepto de feudo

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

### 11 — La cima de la pirámide feudal

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

### 12 — El estamento de la guerra

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

### 13 — Jerarquía de poder feudal

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

### 14 — La base de la economía feudal

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

### 15 — El contrato de vasallaje

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

### 16 — Poder espiritual y temporal

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

### 17 — El papel de los monasterios

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

### 18 — Estructura de poder eclesiástico

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

### 19 — El concepto de la vida medieval

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

### 20 — Evolución de la educación

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

### 21 — El estamento guerrero

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

### 22 — La labor espiritual

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

### 23 — El orden social feudal

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

### 24 — El vínculo de vasallaje

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

### 25 — La base de la producción

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
