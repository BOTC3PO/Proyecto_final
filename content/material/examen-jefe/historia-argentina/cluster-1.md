# Examen jefe — Dominio de la Argentina Colonial y la Independencia

> Logro #1001. Completaste el parcial sobre los pueblos originarios, la conquista y colonia, el virreinato y su comercio, la Revolución de Mayo y las guerras de independencia argentinas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: pueblos-originarios-territorio-argentino (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "norte", "geografia"]

tipo: mc
opciones_explicitas: ["Noroeste (valles y montañas)", "Litoral (ríos)", "Patagonia (estepa)", "Pampa (llanura)"]
respuesta: "Noroeste (valles y montañas)"

enunciado: "Los pueblos de cultura Diaguita se asentaban principalmente en la zona del ______."

explicacion: |
  Los diaguitas habitaban los valles calchaquíes y zonas montañosas del actual Noroeste Argentino, desarrollando una agricultura avanzada en terrazas.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "patagonia", "nómadas"]

tipo: mc
opciones_explicitas: ["Agricultores sedentarios", "Cazadores-recolectores nómadas", "Pescadores de gran escala", "Comerciantes de seda"]
respuesta: "Cazadores-recolectores nómadas"

enunciado: "Los Tehuelches, habitantes de la Patagonia, se caracterizaban por su estilo de vida de:"

explicacion: |
  Eran grupos nómadas que se desplazaban siguiendo los ciclos de caza de guanacos y choiques, además de la recolección de frutos silvestres.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["guaraníes", "litoral", "agricultura"]

variables:
  escenario: uno_de([["Guaraníes", "agricultura de roza y quema", "selva/ríos"], ["Mapuches", "caza y recolección con agricultura limitada", "zonas templadas"], ["Selk'nam", "caza terrestre de guanacos", "Tierra del Fuego"]])

tipo: completar
respuestas_validas:
  - "agricultura de roza y quema"
  - "caza y recolección con agricultura limitada"
  - "caza terrestre de guanacos"
respuesta: escenario[1]
enunciado: "Los pueblos {escenario[2]} se destacaban por su técnica de {escenario[1]}."

explicacion: |
  Los guaraníes utilizaban la técnica de roza y quema para la agricultura en las zonas de selva y ríos del Litoral.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["ordenar", "geografia"]

tipo: ordenar
opciones_explicitas: ["Diaguitas", "Guaraníes", "Mapuches", "Tehuelches"]
respuesta_orden: ["Diaguitas", "Guaraníes", "Mapuches", "Tehuelches"]

enunciado: "Ordene los siguientes pueblos de Norte a Sur (desde el Noroeste hacia la Patagonia):"

explicacion: |
  El orden geográfico de norte a sur es: Diaguitas (Noroeste), Guaraníes (Litoral/Noreste), Mapuches (Zona Centro/Sur) y Tehuelches (Patagonia).
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["mapuches", "sur", "territorio"]

tipo: completar
tolerancia_abs: 0

variables:
  datos: uno_de([["mapuches", "sur", "Pampa"], ["diaguitas", "noroeste", "Noroeste"], ["tehuelches", "patagonia", "Patagonia"]])

enunciado: "Los pueblos ______ habitaban principalmente en la zona ______ de Argentina."

respuesta: "mapuches"

explicacion: |
  Los mapuches ocupaban territorios que se extendían desde el centro-sur de la actual Argentina hacia el oeste (Chile).
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "agricultura", "sedentarismo"]

respuesta: "sedentaria"
tipo: completar
respuestas_validas:
  - "sedentaria"

enunciado: "A diferencia de los grupos nómadas, los pueblos como los diaguitas desarrollaron una organización social ___ basada en la agricultura y el control de terrazas de cultivo."

explicacion: |
  Los diaguitas, al establecerse en valles y zonas montañosas, desarrollaron una agricultura avanzada que requería asentamientos permanentes, lo que define a una sociedad sedentaria.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "nómadas", "caza"]

variables:
  escenario: uno_de([["Tehuelches", "Patagonia"], ["Guaraníes", "Litoral"]])
  tipo_sociedad: uno_de(["nómada", "sedentaria"])

respuesta: "nómada"
tipo: mc
opciones_explicitas: ["nómada", "sedentaria"]

enunciado: "Los {escenario[0]} se caracterizaban por un estilo de vida {tipo_sociedad}, desplazándose constantemente para la caza y la recolección."

explicacion: |
  Los pueblos de la Patagonia, como los tehuelches, dependían de la migración estacional de la fauna para su subsistencia, lo que impedía el sedentarismo.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["diaguitas", "inca", "influencia"]

respuesta: "incaica"
tipo: mc
opciones_explicitas: ["incaica", "maya", "azteca", "guaraní"]

enunciado: "La organización política y técnica de muchos pueblos del Noroeste Argentino, como los diaguitas, estuvo fuertemente influenciada por la expansión del imperio ___."

explicacion: |
  La expansión del Tahuantinsuyo (Imperio Inca) dejó una huella profunda en la organización social, el uso de terrazas y la administración de recursos en el actual territorio argentino.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["organización", "social", "secuencia"]

respuesta_orden: ["Cazadores-recolectores", "Pastores seminómadas", "Sociedades agrícolas complejas"]
tipo: ordenar
opciones_explicitas: ["Cazadores-recolectores", "Pastores seminómadas", "Sociedades agrícolas complejas"]

enunciado: "Ordene de menor a mayor complejidad en la organización social y permanencia en el territorio:"

explicacion: |
  La complejidad social suele estar ligada a la capacidad de producir excedentes alimentarios: desde la recolección (nómadas) hasta la agricultura intensiva (sedentarios con jerarquías).
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["nómadas", "sedentarios", "comparación"]

variables:
  caso: uno_de([["nómadas", "caza y recolección"], ["sedentarios", "agricultura y excedente"]])

respuesta: "caza y recolección"
tipo: mc
opciones_explicitas: ["caza y recolección", "agricultura y excedente"]

enunciado: "Las sociedades con un modo de vida {caso[0]} se basaban principalmente en la {caso[1]}."

explicacion: |
  Los grupos nómadas dependen de los ciclos naturales de los recursos disponibles en el entorno, moviéndose según la disponibilidad de presas o frutos.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["incas", "collasuyo", "noroeste_argentino"]

respuesta: "Collasuyo"
tipo: completar
respuestas_validas:
  - "Collasuyo"

enunciado: "La región del noroeste argentino, que incluía partes de las actuales Salta y Jujuy, formaba parte de la división territorial del Imperio Inca conocida como ___."

explicacion: |
  El Imperio Inca se dividía en cuatro regiones o 'suyos'. La región sur, que comprendía gran parte del actual territorio argentino, se denominaba Collasuyo.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["incas", "administracion", "territorio"]

variables:
  escenario: uno_de([["control_administrativo", "el control de los recursos mediante el sistema de mitas"], ["control_mita", "el control de los recursos mediante el sistema de mitas"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["el control de los recursos mediante el sistema de mitas", "la construcción de grandes pirámides de piedra", "la navegación de los ríos de montaña", "el uso exclusivo del idioma quechua en todos los pueblos"]

enunciado: "Para consolidar su dominio en el noroeste argentino, el Imperio Inca implementó una estrategia de {escenario[1]} para asegurar la lealtad de los pueblos locales y la producción de excedentes."

explicacion: |
  El sistema de la 'mita' era un trabajo por turnos que permitía al Estado Inca movilizar grandes cantidades de mano de obra para obras públicas y agricultura, asegurando el control sobre los territorios conquistados.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["caminos", "qhapaq_ñan", "incas"]

respuesta: "Qhapaq Ñan"
tipo: completar
respuestas_validas:
  - "Qhapaq Ñan"

enunciado: "La red de caminos que conectaba los centros administrativos del imperio, permitiendo el tránsito de ejércitos y mensajeros por el noroeste argentino, se denominaba ___."

explicacion: |
  El Qhapaq Ñan (Camino del Inca) era una red vial altamente sofisticada que conectaba todo el imperio, facilitando la comunicación y el control territorial.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["agricultura", "terrazas", "tecnologia"]

respuesta: "terrazas"
tipo: mc
opciones_explicitas: ["terrazas", "canales de riego por inundación", "campos de cultivo de llanura", "sistemas de rotación de cultivos"]

enunciado: "Debido a la geografía montañosa de Jujuy y Salta, los Incas perfeccionaron una técnica agrícola de escalonamiento de las laderas para maximizar la superficie cultivable y evitar la erosión. Esta técnica se conoce como ___."

explicacion: |
  Las terrazas de cultivo permitían aprovechar las pendientes de los cerros, optimizando el uso del agua y evitando que la lluvia lavara los nutrientes del suelo.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["expansion", "etapas", "incas"]

respuesta_orden: ["Diplomacia/Alianzas", "Conquista militar", "Asentamiento administrativo"]
tipo: ordenar
opciones_explicitas: ["Diplomacia/Alianzas", "Conquista militar", "Asentamiento administrativo"]

enunciado: "El proceso de expansión del Imperio Inca sobre los pueblos del noroeste argentino seguía generalmente un orden lógico de integración. Ordena las etapas de este proceso:"

pasos:
  - "Primero se buscaba la integración mediante regalos o alianzas."
  - "Si la diplomacia fallaba, se procedía a la acción militar."
  - "Finalmente, se establecían centros para la administración y el control."

explicacion: |
  La expansión incaica no era puramente militar; preferían la diplomacia y el intercambio de bienes de prestigio. Si los pueblos locales se resistían, utilizaban la fuerza, para luego establecer una estructura administrativa (como los mitimaes) para asegurar el control.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["mapuches", "geografia"]

tipo: mc
opciones_explicitas: ["Norte", "Litoral", "Sur y Cordillera", "Cuyo"]

enunciado: "La región geográfica principal asociada históricamente al pueblo Mapuche en el territorio argentino es la zona de: ___"

respuesta: "Sur y Cordillera"

explicacion: |
  El pueblo Mapuche se asentó principalmente en las regiones del sur y la zona de la cordillera de los Andes.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["guaraníes", "litoral"]

tipo: completar
respuestas_validas:
  - "Litoral/Noreste"

enunciado: "Los pueblos Guaraníes se desarrollaron predominantemente en la región del ___."

respuesta: "Litoral/Noreste"

explicacion: |
  Los guaraníes habitaban las zonas de selva y ríos, principalmente en el Litoral y el Noreste argentino.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "noroeste"]

tipo: mc
opciones_explicitas: ["Patagonia", "Noroeste", "Pampa", "Mesopotamia"]

enunciado: "Si un historiador estudia las culturas de los Diaguitas, debe centrar su investigación en la región del: ___"

respuesta: "Noroeste"

explicacion: |
  Los diaguitas habitaron las zonas montañosas del Noroeste argentino.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "patagonia"]

tipo: completar
tolerancia_abs: 0

enunciado: "El pueblo Tehuelche habitaba históricamente la región de la ___."

respuesta: "Patagonia"

explicacion: |
  Los tehuelches eran pueblos nómadas que recorrían las estepas de la Patagonia.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["repaso", "geografia"]

variables:
  idx: uno_de([0, 1, 2, 3])
  datos: [["Mapuches", "Sur/Cordillera"], ["Guaraníes", "Litoral/Noreste"], ["Diaguitas", "Noroeste"], ["Tehuelches", "Patagonia"]]

tipo: mc
opciones_explicitas: ["Sur/Cordillera", "Litoral/Noreste", "Noroeste", "Patagonia"]

enunciado: "De acuerdo a la información histórica, el pueblo {datos[idx][0]} se asocia con la región de: ___"

respuesta: datos[idx][1]

explicacion: |
  La respuesta correcta corresponde a la región geográfica donde se asentó el pueblo seleccionado.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["geografia", "etnias"]

variables:
  escenario: [[ "Los Selk'nam habitaban la región de la Tierra del Fuego", "Tierra del Fuego" ], [ "Los Guaraníes se asentaban principalmente en el noreste", "Noreste" ], [ "Los Mapuches ocupaban gran parte de la zona andina y central", "Zona Andina" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Tierra del Fuego", "Noreste", "Zona Andina", "Pampa"]

enunciado: "Identificá la región geográfica correspondiente al pueblo mencionado: {escenario[idx][0]}."

explicacion: |
  El pueblo mencionado se caracteriza por habitar la región de {escenario[idx][1]}.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["estilos_de_vida", "antropologia"]

variables:
  idx: uno_de([0, 1])
  pueblos: ["Tehuelches", "Diaguitas"]
  modos: ["nómadas", "sedentarios"]

tipo: completar
respuesta: modos[idx]

enunciado: "Considerando el modo de vida de los {pueblos[idx]}, su organización social era de tipo ___."

explicacion: |
  Los {pueblos[idx]} se definían por ser {modos[idx]}.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["cultura"]

respuesta: "agricultura"
tipo: mc
opciones_explicitas: ["caza", "agricultura", "pesca", "recolección"]

enunciado: "Los pueblos de la región de los Andes Centrales, como los Diaguitas, basaban su economía principalmente en la ___."

explicacion: |
  La agricultura fue la base de la economía de los pueblos sedentarios de la zona andina.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["cronologia", "territorio"]

respuesta_orden: ["Selk'nam", "Tehuelches", "Guaraníes"]
tipo: ordenar
opciones_explicitas: ["Selk'nam", "Tehuelches", "Guaraníes"]

enunciado: "Ordená estos pueblos de Sur a Norte según su ubicación geográfica predominante en el territorio argentino."

explicacion: |
  El orden correcto de Sur a Norte es: Selk'nam (Tierra del Fuego), Tehuelches (Patagonia) y Guaraníes (Noreste).
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["geografia"]

variables:
  pueblo_datos: [[ "Qom", "Chaco" ], [ "Mapuche", "Patagonia/Andes" ], [ "Selk'nam", "Tierra del Fuego" ]]
  idx: uno_de([0, 1, 2])

respuesta: pueblo_datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Escribí el nombre de la región donde habita el pueblo {pueblo_datos[idx][0]}."

explicacion: |
  El pueblo {pueblo_datos[idx][0]} se asocia con la región de {pueblo_datos[idx][1]}.
```

## Sección: conquista-y-colonia-argentina (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["conquista", "fundaciones"]

variables:
  escenario: uno_de([["Santiago del Estero", "1553"], ["Córdoba", "1609"], ["Buenos Aires (segunda)", "1580"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Santiago del Estero", "Córdoba", "Buenos Aires (segunda)"]

enunciado: "La ciudad de {escenario[0]} fue fundada en el año {escenario[1]}."

explicacion: |
  La fundación de {escenario[0]} en {escenario[1]} marcó un hito en la organización territorial de la región.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["ordenar", "cronologia"]

opciones_explicitas: ["Fundación de Santiago del Estero", "Segunda fundación de Buenos Aires", "Fundación de Córdoba"]

respuesta_orden: ["Fundación de Santiago del Estero", "Segunda fundación de Buenos Aires", "Fundación de Córdoba"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes eventos de la conquista y colonización:"

pasos:
  - "Identificar la fecha de Santiago del Estero (1553)"
  - "Identificar la fecha de la segunda Buenos Aires (1580)"
  - "Identificar la fecha de Córdoba (1609)"

explicacion: |
  El orden cronológico correcto es: Santiago del Estero (1553), Buenos Aires (1580) y Córdoba (1609).
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["buenos_aires", "conquista"]

respuesta: "Juan de Garay"
tipo: completar
respuestas_validas:
  - "Juan de Garay"

enunciado: "La segunda fundación de la ciudad de Buenos Aires en 1580 fue liderada por ___."

explicacion: |
  Tras el fracaso de la primera fundación de Pedro de Mendoza, Juan de Garay estableció la segunda fundación en 1580.
```

```
metadata:
  materia: "historia_profucha"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["cordoba", "fundacion"]

respuesta: "1609"
tipo: completar
tolerancia_abs: 0

enunciado: "La ciudad de Córdoba fue fundada en el año ___."

explicacion: |
  Córdoba fue fundada en 1609, convirtiéndose en un centro neurálgico para la educación y la administración colonial.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["geografia_historica"]

variables:
  datos: [["Santiago del Estero", "1553"], ["Córdoba", "1609"], ["Buenos Aires", "1580"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1553", "1609", "1580"]

enunciado: "Si nos referimos a la fundación de {datos[idx][0]}, el año correspondiente es ___."

explicacion: |
  La fecha correcta para la fundación de {datos[idx][0]} es {datos[idx][1]}.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["organizacion_colonial", "virreinatos"]

respuesta: "Perú"
tipo: completar
respuestas_validas:
  - "Perú"

enunciado: "Antes de la creación del Virreinato del Río de la Plata, el territorio que hoy ocupa Argentina pertenecía al Virreinato del ___."

explicacion: |
  Durante gran parte de la era colonial, las tierras rioplatenses dependían de la administración del Virreinato del Perú, con sede en Lima.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["virreinatos", "reformas_borbonicas"]

opciones_explicitas: ["Lima", "Buenos Aires", "Santiago", "Asunción"]
respuesta: "Buenos Aires"
tipo: mc

enunciado: "Con la creación del Virreinato del Río de la Plata en 1776, ¿cuál se convirtió en la nueva capital administrativa?"

explicacion: |
  La creación del Virreinato del Río de la Plata buscaba mejorar la defensa del Atlántico y el control comercial, estableciendo a Buenos Aires como su centro de poder.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["orden_cronologico", "virreinatos"]

opciones_explicitas: ["Virreinato del Perú", "Virreinato del Río de la Plata", "Estado Argentino"]
respuesta_orden: ["Virreinato del Perú", "Virreinato del Río de la Plata", "Estado Argentino"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de organización política del territorio que hoy es Argentina:"

explicacion: |
  La secuencia correcta comienza con la dependencia del Perú, sigue con la autonomía regional del Río de la Plata y culmina con la formación del Estado nacional.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["capitales", "geografia_colonial"]

respuesta: "Río de la Plata"
tipo: completar
respuestas_validas:
  - "Río de la Plata"

enunciado: "En el año 1776, se fundó el Virreinato del ___."

explicacion: |
  La reforma administrativa de 1776 fue fundamental para el desarrollo de la región del Plata.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["reformas", "geopolitica"]

opciones_explicitas: ["Perú", "Río de la Plata"]
respuesta: "Río de la Plata"
tipo: mc

enunciado: "La creación de un nuevo virreinato en 1776 significó que el territorio pasó de depender del Virreinato del Perú a pertenecer al Virreinato del ___."

explicacion: |
  Este cambio permitió una gestión más directa de las rutas comerciales hacia el Atlántico.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["fundacion", "buenos_aires", "conquista"]

tipo: mc
opciones_explicitas: ["Pedro de Mendoza", "Juan de Garay", "Juan de Cabral", "Hernán de Magallanes"]

enunciado: "La primera fundación de la ciudad de Buenos Aires, realizada en 1536, fue liderada por el cual de los siguientes exploradores?"

respuesta: "Pedro de Mendoza"

explicacion: |
  La primera fundación fue un intento fallido liderado por Pedro de Mendoza en 1536, que terminó siendo abandonado debido a las condiciones extremas y los conflictos con los nativos.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["fundacion", "buenos_aires", "fracaso"]

tipo: completar
respuestas_validas:
  - "fracasó"

enunciado: "A diferencia de la segunda fundación, la expedición de Pedro de Mendoza en 1536 ___ y la ciudad fue posteriormente abandonada."

respuesta: "fracasó"

explicacion: |
  La primera fundación de Buenos Aires fracasó debido a la hambruna y los ataques de los pueblos originarios, lo que obligó a los sobrevivientes a retirarse.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["fundacion", "buenos_aires", "juan_de_garay"]

variables:
  datos: [["Juan de Garay", "Juan de Garay"], ["Pedro de Mendoza", "Pedro de Mendoza"]]
  idx: uno_de([0, 1])
  respuesta_correcta: datos[idx][1]

respuesta: respuesta_correcta
tipo: mc
opciones_explicitas: ["Juan de Garay", "Pedro de Mendoza"]

enunciado: "En el año 1580, la segunda fundación de Buenos Aires, que finalmente logró consolidarse y prosperar, fue llevada a cabo por: ___"

explicacion: |
  Juan de Garay lideró la segunda fundación en 1580, estableciendo un asentamiento que sí logró perdurar en el tiempo, a diferencia del intento de 1536.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "fundaciones"]

tipo: ordenar
opciones_explicitas: ["Fundación de Mendoza (1536)", "Fundación de Garay (1580)", "Consolidación de la ciudad"]

respuesta_orden: ["Fundación de Mendoza (1536)", "Fundación de Garay (1580)", "Consolidación de la ciudad"]

enunciado: "Ordene cronológicamente los hitos de la fundación de Buenos Aires:"

explicacion: |
  El proceso comenzó con el intento fallido de Mendoza en 1536, seguido por el intento exitoso de Garay en 1580, lo que permitió la posterior consolidación de la ciudad.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "conquista_y_colonia_argentina"
  nivel: "avanzado"
  tags: ["fundadores", "comparativa"]

variables:
  datos: [["Garay", "Garay"], ["Mendoza", "Mendoza"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Garay", "Mendoza"]

enunciado: "Si comparamos los dos intentos de fundación de Buenos Aires, el líder que logró establecer un asentamiento próspero fue ___."

explicacion: |
  Mientras que Mendoza (1536) no logró establecer un asentamiento permanente, Juan de Garay (1580) fue el responsable de la fundación que prosperó.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["mapuche", "resistencia", "territorio"]

respuesta: "mapuches"
tipo: mc

opciones_explicitas: ["incas", "mapuches", "guaraníes", "diaguitas"]

enunciado: "A diferencia de otros pueblos que fueron rápidamente sometidos, ¿qué grupo indígena mantuvo una resistencia activa y una autonomía territorial significativa frente a la expansión colonial en el sur hasta bien entrado el siglo XIX?"

explicacion: |
  El pueblo Mapuche mantuvo una estructura política y militar que les permitió resistir la expansión española y, posteriormente, la consolidación del Estado argentino durante gran parte del siglo XIX.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["mestizaje", "sociedad", "colonia"]

variables:
  escenario: uno_de([["biológico", "cultural"], ["biológico", "político"], ["religioso", "militar"]])

respuesta: escenario[1]
tipo: completar

respuestas_validas:
  - "biológico"
  - "cultural"
  - "político"
  - "religioso"
  - "militar"

enunciado: "El proceso de mestizaje en el Virreinato del Río de la Plata fue de carácter tanto ___ como ___."

explicacion: |
  El mestizaje no fue solo la unión biológica de españoles e indígenas, sino también un profundo intercambio de costumbres, lenguas y creencias (mestizaje cultural).
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["demografia", "impacto", "enfermedades"]

respuesta: 0.7
tipo: completar
tolerancia_abs: 0.1

enunciado: "Se estima que, debido a las guerras de conquista y, fundamentalmente, a las epidemias traídas por los europeos, la población indígena sufrió una reducción drástica. Si una población original era de 100 personas, ¿cuántas personas (estimado decimal) quedarían tras una reducción del 70%?"

pasos:
  - "Calcular el 70% de la población original (100 * 0.70)."
  - "Restar ese valor al total original (100 - 70)."

explicacion: |
  Las enfermedades como la viruela y el sarampión fueron agentes devastadores que causaron un colapso demográfico en los pueblos originarios.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "avanzado"
  tags: ["encomienda", "sistema", "colonia"]

respuesta_orden: ["encomienda", "mita", "reparto"]
tipo: ordenar

opciones_explicitas: ["encomienda", "mita", "reparto"]

enunciado: "Ordene los siguientes sistemas de trabajo/tributo utilizados por la corona española en América, desde el que se basaba en la asignación de indígenas a un español para evangelización, pasando por el trabajo forzado en minas, hasta el sistema de venta de productos a indígenas en zonas periféricas:"

explicacion: |
  La encomienda fue el sistema inicial de tutela y evangelización; la mita era el trabajo obligatorio en minas; y el reparto de mercancías fue una forma de explotación comercial en las zonas de frontera.
```

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["cosmovision", "religión", "impacto"]

respuesta: "sincretismo"
tipo: completar

respuestas_validas:
  - "sincretismo"
  - "aislamiento"
  - "extinción"

enunciado: "La superposición de las creencias religiosas católicas sobre las prácticas espirituales de los pueblos originarios dio lugar a un fenómeno conocido como ___."

explicacion: |
  El sincretismo religioso es la fusión de elementos de distintas religiones, resultando en nuevas expresiones culturales y espirituales que persisten hoy en día.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["conquista", "expediciones"]

variables:
  escenario: uno_de([["La expedición de Pedro de Mendoza (1536) se estableció en un asentamiento que luego fue abandonado debido a las condiciones climáticas y los ataques de los nativos.", "Asentamiento de Buenos Aires"], ["La expedición de Juan de Garay (1580) fue fundamental para la consolidación de la presencia española en la región.", "Fundación de la segunda Buenos Aires"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Asentamiento de Buenos Aires", "Fundación de la segunda Buenos Aires", "Fundación de Asunción", "Expedición de Solís"]

enunciado: "De acuerdo con la cronología de la conquista, ¿cuál fue el hito principal del escenario descrito: {escenario[0]}?"

explicacion: |
  El proceso de colonización fue errático. Mendoza fundó el primer asentamiento en 1536, pero fracasó, siendo Garay quien consolidó la presencia española años después.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["instituciones", "virreinato"]

variables:
  caso: uno_de([["El Virreinato del Río de la Plata fue creado para mejorar la defensa y administración del territorio frente a las potencias europeas.", "España"], ["La administración de las colonias dependía directamente de la corona de...", "España"]])

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "España"

enunciado: "Complete la siguiente afirmación basada en el contexto: {caso[0]}"

explicacion: |
  La creación del Virreinato del Río de la Plata en 1776 fue una respuesta de la corona española a las presiones de Portugal y Gran Bretaña en el Atlántico Sur.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "conquista_y_colonia_argentina"
  nivel: "avanzado"
  tags: ["cronologia", "conquista"]

respuesta_orden: ["Llegada de los españoles al Atlántico", "Fundación de ciudades en el Tucumán", "Establecimiento de las rutas comerciales coloniales"]
tipo: ordenar
opciones_explicitas: ["Llegada de los españoles al Atlántico", "Fundación de ciudades en el Tucumán", "Establecimiento de las rutas comerciales coloniales"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso de expansión y consolidación en el actual territorio argentino:"

explicacion: |
  Primero se exploró el litoral (Solís/Mendoza), luego se penetró el interior hacia el Tucumán y finalmente se consolidó la red de caminos y comercio colonial.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["instituciones", "cabildo"]

variables:
  situacion: uno_de([["El órgano encargado de la administración de justicia y gobierno en las ciudades coloniales era el...", "Cabildo"], ["La institución de gobierno local más importante en las ciudades del Virreinato era el...", "Cabildo"]])

respuesta: situacion[1]
tipo: mc
opciones_explicitas: ["Cabildo", "Real Audiencia", "Consejo de Indias", "Corregimiento"]

enunciado: "Identifique la institución mencionada en el siguiente contexto: {situacion[0]}"

explicacion: |
  El Cabildo era la institución de gobierno local que permitía la participación de los vecinos en la administración de la ciudad.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["economia", "monopolio"]

variables:
  modelo: uno_de([["El sistema económico impuesto por la metrópoli que prohibía el comercio con otras naciones era el...", "Monopolio comercial"], ["La política de comercio exclusivo de España con sus colonias se denominaba...", "Monopolio comercial"]])

respuesta: verdadero
tipo: vf

enunciado: "El sistema de {modelo[0]} fue el eje de la economía virreinal, limitando el crecimiento de puertos como Buenos Aires hasta la creación del Virreinato del Río de la Plata en 1776."

explicacion: |
  El monopolio comercial obligaba a que todo el comercio pasara por puertos autorizados (como Sevilla o Cádiz), lo que fomentó el contrabando en el Río de la Plata.
```

## Sección: virreinato-y-comercio (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["reformas_borbonicas", "geopolitica"]

respuesta: "1776"
tipo: completar
respuestas_validas:
  - "1776"

enunciado: "La creación del Virreinato del Río de la Plata ocurrió en el año ___."

explicacion: |
  Mediante las Reformas Borbónicas, la Corona española decidió crear este nuevo virreinato en 1776 para mejorar la administración y defensa del territorio.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "defensa"]

opciones_explicitas: ["Controlar el comercio y mejorar la defensa", "Fomentar la independencia de las colonias", "Establecer una nueva religión", "Unificar la moneda con el Perú"]

respuesta: "Controlar el comercio y mejorar la defensa"
tipo: mc

enunciado: "¿Cuál fue una de las razones principales para la creación del Virreinato del Río de la Plata?"

explicacion: |
  La expansión portuguesa y el contrabando en el Atlántico obligaron a España a fortalecer la defensa y centralizar el control comercial en Buenos Aires.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["geografia_colonial"]

respuesta: "Buenos Aires"
tipo: mc
opciones_explicitas: ["Lima", "Potosí", "Buenos Aires", "Montevideo"]

enunciado: "Con la creación del nuevo virreinato, la ciudad de ___ fue designada como la capital administrativa."

explicacion: |
  Buenos Aires desplazó la importancia política que antes tenía el eje andino, convirtiéndose en el centro administrativo y comercial del nuevo territorio.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["geopolitica", "administracion"]

respuesta: "Perú"

tipo: completar
respuestas_validas:
  - "Perú"

enunciado: "Antes de 1776, el territorio que hoy comprende gran parte del Cono Sur pertenecía al Virreinato del ___."

pasos:
  - "Identificar la dependencia administrativa previa a la reforma borbónica."

explicacion: |
  Antes de la división, la mayor parte de la administración colonial estaba centralizada en el Virreinato del Perú, con Lima como sede principal.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "contrabando"]

opciones_explicitas: ["Aumento del contrabando", "Centralización del comercio en Buenos Aires", "Fin de la ruta de la plata", "Aislamiento de la región"]

respuesta: "Centralización del comercio en Buenos Aires"
tipo: mc

enunciado: "La creación del virreinato permitió la ___."

explicacion: |
  Al tener una administración propia, el comercio legal se canalizó a través de Buenos Aires, restando importancia a las rutas que pasaban por el Alto Perú.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["monopolio", "españa", "comercio"]

respuesta: "monopolio"
tipo: completar
respuestas_validas:
  - "monopolio"

enunciado: "El sistema mediante el cual las colonias americanas solo podían comerciar con la metrópoli española se denominaba sistema de ___."

explicacion: |
  El monopolio comercial obligaba a las colonias a comprar y vender exclusivamente a España, limitando el crecimiento económico local.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["puertos", "comercio", "españa"]

respuesta: "Cádiz"
tipo: mc
opciones_explicitas: ["Sevilla", "Cádiz", "Barcelona", "Valencia"]

enunciado: "La Casa de Contratación, que monopolizaba el comercio con las Indias, se estableció originalmente en Sevilla en 1503, pero en 1717 su sede y el puerto único autorizado se trasladaron a ___."

explicacion: |
  El traslado a Cádiz se debió principalmente al progresivo azolvamiento (acumulación de sedimentos) del río Guadalquivir, que dificultaba la navegación de barcos grandes hasta Sevilla.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["contrabando", "descontento", "economía"]

respuesta: "contrabando"
tipo: mc
opciones_explicitas: ["contrabando", "libre comercio", "proteccionismo", "mercantilismo"]

enunciado: "Debido a las altas restricciones y los altos costos del monopolio, surgió una práctica ilegal muy común en los puertos americanos conocida como ___."

explicacion: |
  El contrabando permitió la entrada de productos de otras potencias (como Inglaterra o Portugal) de manera ilegal, evadiendo los impuestos españoles.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["buenos_aires", "contrabando", "descontento"]

respuesta: "descontento"
tipo: mc
opciones_explicitas: ["descontento", "prosperidad", "estabilidad", "indiferencia"]

enunciado: "En el Virreinato del Río de la Plata, la imposición del monopolio español sobre la región de Buenos Aires favoreció el contrabando y generó, entre los comerciantes locales, un profundo:"

explicacion: |
  Buenos Aires, al ser una zona de paso para el comercio ilegal, sufrió las restricciones del monopolio, lo que alimentó el malestar que más tarde impulsaría los movimientos de independencia.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["flujo", "comercio", "ruta"]

respuesta_orden: ["España", "Puerto autorizado en América", "Mercado local"]
tipo: ordenar
opciones_explicitas: ["España", "Puerto autorizado en América", "Mercado local"]

enunciado: "Ordena el flujo legal de las mercancías dentro del sistema de monopolio español, desde su origen hasta el consumidor final en la colonia:"

pasos:
  - "La metrópoli envía el producto."
  - "El producto llega al puerto legal establecido."
  - "El producto se distribuye en la región."

explicacion: |
  El sistema estaba diseñado para que el flujo fuera estrictamente controlado: Metrópoli -> Puerto autorizado -> Consumidor colonial.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["comercio", "reformas_borbonicas", "virreinato"]

tipo: mc
opciones_explicitas: ["Eliminó por completo el monopolio español", "Amplió el número de puertos autorizados", "Prohibió el comercio con Inglaterra", "Estableció el sistema de flotas y galeones"]
respuesta: "Amplió el número de puertos autorizados"
enunciado: "El Reglamento de Libre Comercio de 1778 tuvo como objetivo principal..."
explicacion: |
  El reglamento no eliminó el monopolio, sino que flexibilizó el sistema permitiendo que más puertos (como Buenos Aires) participaran en el comercio transatlántico, aunque manteniendo el control de la metrópoli.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["buenos_aires", "puertos", "comercio"]

variables:
  escenario: uno_de([["puerto de Cádiz", "puerto de Buenos Aires"], ["comercio restringido", "comercio ampliado"]])

tipo: completar
respuestas_validas:
  - "puerto de Buenos Aires"

enunciado: "Gracias a las reformas borbonicas, el ___ obtuvo un rol protagónico como salida de productos hacia el Atlántico."

explicacion: |
  La apertura de nuevos puertos allowed que Buenos Aires creciera económicamente al dejar de depender exclusivamente del sistema de flotas hacia un solo puerto en España.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["monopolio", "reformas"]

tipo: vf

enunciado: "¿El Reglamento de Libre Comercio de 1778 significó la desaparición total del monopolio comercial español en América?"

respuesta: falso

explicacion: |
  Falso. El sistema de monopolio persistió, solo se expandió la red de puertos y rutas permitidas; el control de la Corona sobre el comercio seguía siendo la norma.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["procesos", "reformas_borbonicas"]

tipo: ordenar
opciones_explicitas: ["Monopolio de flotas y galeones", "Reglamento de Libre Comercio", "Apertura de puertos de Buenos Aires"]

enunciado: "Ordene cronológicamente la evolución del sistema comercial en el Virreinato del Río de la Plata:"

explicacion: |
  Primero existía el monopolio estricto de flotas; luego el Reglamento de 1778 permitió el libre comercio entre puertos españoles; y finalmente esto consolidó a Buenos Aires como puerto principal.
respuesta_orden: ["Monopolio de flotas y galeones", "Reglamento de Libre Comercio", "Apertura de puertos de Buenos Aires"]
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["economía", "impuestos"]

variables:
  valor_impuesto: uno_de(["aumento", "disminución"])

tipo: completar
tolerancia_abs: 0

enunciado: "La implementación de nuevos puertos y la mayor actividad comercial trajeron un {valor_impuesto} en la recaudación de aduanas para la Corona."

respuesta: "aumento"

explicacion: |
  Al haber más barcos y más puertos operando legalmente, el volumen de mercancías aumentó, lo que derivó en un aumento de la recaudación de impuestos (alcabala y derechos de puerto).
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["monopolio", "espana", "comercio"]

respuesta: "monopolio"
tipo: completar
respuestas_validas:
  - "monopolio"

enunciado: "El sistema impuesto por la corona española que obligaba a las colonias a comerciar exclusivamente con la metrópoli se denominaba ________."

explicacion: |
  El monopolio comercial impedía que Buenos Aires comerciara con otras potencias (como Gran Bretaña), limitando el crecimiento de la élite criolla.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["puerto", "aduana", "impuestos"]

variables:
  escenario: uno_de([["Monopolio Español", "Libre Comercio"], ["Restricción", "Apertura"]])
  respuesta_correcta: uno_de(["Monopolio Español", "Libre Comercio"])

respuesta: "Monopolio Español"
tipo: mc
opciones_explicitas: ["Monopolio Español", "Libre Comercio"]

enunciado: "Si un comerciante de Buenos Aires desea vender sus productos directamente a Inglaterra sin pasar por España, se enfrenta a la prohibición del sistema de Monopolio Español."

explicacion: |
  La imposición del monopolio generaba un enorme descontento en los comerciantes locales, quienes veían perder oportunidades de lucro con el libre comercio.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["causas", "revolucion", "economia"]

respuesta: "Libre Comercio"
tipo: mc
opciones_explicitas: ["Libre Comercio", "Proteccionismo Español", "Aumento de la Minería", "Unión con Portugal"]

enunciado: "La principal demanda económica de la élite criolla de Buenos Aires que alimentó el descontento hacia el Virreinato fue la instauración del:"

explicacion: |
  La apertura de los puertos al libre comercio era la aspiración de los sectores comerciales que buscaban eliminar los altos costos y la exclusividad española.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["secuencia", "tensiones", "revolucion"]

respuesta_orden: ["Monopolio", "Contrabando", "Libre Comercio", "Revolución"]
tipo: ordenar
opciones_explicitas: ["Monopolio", "Contrabando", "Libre Comercio", "Revolución"]

enunciado: "Ordena cronológicamente los factores y consecuencias que explican la crisis del sistema colonial en el Río de la Plata:"

explicacion: |
  El monopolio fomentó el contrabando como vía de escape; la presión por el libre comercio aumentó con las invasiones inglesas y la crisis de la corona, culminando en la Revolución.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["invasiones_inglesas", "comercio"]

variables:
  datos: [["Inglesas", "Libre Comercio"], ["Españolas", "Monopolio"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Libre Comercio", "Monopolio"]

enunciado: "Las invasiones inglesas demostraron la vulnerabilidad de España y abrieron la posibilidad de un sistema de ________ en el puerto de Buenos Aires."

explicacion: |
  Al ver que Gran Bretaña podía desembarcar en el Río de la Plata, los criollos comprendieron que el monopolio español ya no era sostenible ni seguro.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["economía", "monopolio", "rebelión"]

variables:
  datos: [["El sistema de flotas y galeones permitía que solo ciertos puertos españoles comerciaran con América.", "monopolio"], ["El sistema de flotas y galeones prohibía el comercio con potencias extranjeras como Inglaterra.", "exclusivismo"], ["El sistema de flotas y galeones imponía altos aranceles a los productos locales.", "aranceles"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["monopolio", "exclusivismo", "aranceles"]

enunciado: "Una de las principales causas del descontento en el Río de la Plata fue el sistema de {datos[idx][0]}."

explicacion: |
  El control estricto de la metrópoli sobre los puertos y productos generó un gran malestar en las élites criollas que buscaban el libre comercio.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "basico"
  tags: ["impuestos", "fisco", "revolución"]

variables:
  datos: [["La Alcabala", "Alcabala"], ["La Alcabala", "Aduana"], ["La Alcabala", "Avería"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Alcabala"
  - "Aduana"
  - "Avería"

enunciado: "El aumento de la presión fiscal, especialmente sobre el impuesto de la ___, fue un detonante del descontento económico."

explicacion: |
  La Alcabala era un impuesto a las ventas que afectaba directamente el flujo comercial de las provincias del sur.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["contrabando", "comercio_ilegal"]

variables:
  datos: [["La prohibición de comerciar con Inglaterra", "prohibición"], ["La falta de productos manufacturados", "escasez"], ["La alta competencia de productos españoles", "competencia"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["prohibición", "escasez", "competencia"]

enunciado: "El descontento creció debido a la {datos[idx][0]} de productos extranjeros, lo que fomentó el contrabando."

explicacion: |
  Al no poder importar libremente de otras naciones, los comerciantes locales recurrían al comercio ilegal para abastecerse.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "avanzado"
  tags: ["orden", "procesos"]

respuesta_orden: ["Reformas Borbónicas", "Aumento de la presión fiscal", "Expulsión de los Jesuitas", "Insurrecciones locales"]
tipo: ordenar
opciones_explicitas: ["Reformas Borbónicas", "Aumento de la presión fiscal", "Expulsión de los Jesuitas", "Insurrecciones locales"]

enunciado: "Ordene cronológicamente los factores que intensificaron el descontento económico en el Virreinato:"

explicacion: |
  Las reformas borbónicas buscaron mayor control y recaudación, lo que aumentó los impuestos y tensionó la estructura social y económica.
```

```
metadata:
  materia: "historia"
  tema: "virreinato_y_comercio"
  nivel: "intermedio"
  tags: ["aduana", "puerto", "recaudación"]

variables:
  datos: [["Buenos Aires", "Buenos Aires"], ["Montevideo", "Montevideo"], ["Asunción", "Asunción"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][0]
respuesta: datos[idx][0]
tipo: completar
tolerancia_abs: 0

enunciado: "El control de la aduana de {datos[idx][0]} fue un punto de conflicto clave por la recaudación de derechos de importación."

explicacion: |
  La disputa por los ingresos aduaneros entre Buenos Aires y otras regiones era un motor constante de tensión económica.
```

## Sección: revolucion-de-mayo (25 preguntas)

```
metadata:
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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

## Sección: guerras-de-independencia-argentina (25 preguntas)

```
metadata:
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "pensamiento_historico"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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
  materia: "historia"
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

