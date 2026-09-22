# Examen jefe — [PENDIENTE #798]

> Logro #798. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **106 preguntas totales** en 5/5 secciones.

---

## Sección: sig-mapas-digitales (20 preguntas)

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["sig", "vocabulario"]

enunciado: "¿Qué es un Sistema de Información Geográfica (SIG)?"
tipo: mc
opciones_explicitas:
  - "Una base de datos donde cada elemento del mapa tiene coordenadas y datos asociados"
  - "Una foto escaneada de un mapa de papel"
  - "Un tipo de brújula digital"
respuesta: "Una base de datos donde cada elemento del mapa tiene coordenadas y datos asociados"

explicacion: |
  Eso es lo que permite que el mapa responda preguntas (buscar,
  calcular rutas) en vez de sólo mostrarse.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["sig"]

enunciado: "¿Por qué un mapa digital moderno no es simplemente un mapa de papel escaneado?"
tipo: mc
opciones_explicitas:
  - "Porque cada elemento tiene coordenadas y datos que se pueden consultar, no sólo una imagen fija"
  - "Porque los mapas escaneados no tienen colores"
  - "Porque un mapa digital no puede mostrar límites políticos"
respuesta: "Porque cada elemento tiene coordenadas y datos que se pueden consultar, no sólo una imagen fija"

explicacion: |
  Una imagen escaneada es sólo píxeles; un SIG sabe qué es cada cosa y
  dónde está en coordenadas reales.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["capas"]

enunciado: "En un SIG, ¿qué es una \"capa\"?"
tipo: mc
opciones_explicitas:
  - "Un conjunto de información independiente (calles, edificios, tránsito) que se puede mostrar u ocultar por separado"
  - "El color de fondo del mapa"
  - "La escala numérica del mapa"
respuesta: "Un conjunto de información independiente (calles, edificios, tránsito) que se puede mostrar u ocultar por separado"

explicacion: |
  Las capas permiten combinar sólo la información que se necesita en
  cada momento.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["capas"]

enunciado: "¿Cuál de estos es un ejemplo típico de capa en un mapa digital?"
tipo: mc
opciones_explicitas:
  - "Tránsito en tiempo real"
  - "El nombre de la empresa que hizo el mapa"
  - "La fecha de instalación de la app"
respuesta: "Tránsito en tiempo real"

explicacion: |
  Tránsito, imágenes satelitales, límites administrativos y calles son
  capas típicas que se pueden combinar o separar.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "avanzado"
  tags: ["capas"]

enunciado: "¿En qué se parece el sistema de capas de un SIG a un mapa temático de papel?"
tipo: mc
opciones_explicitas:
  - "Ambos eligen qué información mostrar y cuál descartar, para no saturar la lectura"
  - "Ambos usan exactamente la misma escala numérica"
  - "No se parecen en nada"
respuesta: "Ambos eligen qué información mostrar y cuál descartar, para no saturar la lectura"

explicacion: |
  La diferencia es que el SIG permite cambiar esa selección al
  instante prendiendo o apagando capas, en vez de dibujar un mapa nuevo.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["geocodificacion"]

enunciado: "¿Qué hace un SIG cuando convierte el texto \"Av. Corrientes 1000\" en un par de coordenadas de latitud y longitud?"
tipo: mc
opciones_explicitas:
  - "Geocodificar la dirección"
  - "Calcular una ruta"
  - "Renderizar una capa satelital"
respuesta: "Geocodificar la dirección"

explicacion: |
  Geocodificar es traducir una dirección en texto a las coordenadas
  reales que la ubican en el mapa.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["ventajas"]

enunciado: "¿Qué diferencia hay entre la escala de un mapa de papel y la de un mapa digital?"
tipo: mc
opciones_explicitas:
  - "El de papel tiene escala fija; el digital permite zoom continuo, recalculando qué detalle mostrar en cada nivel"
  - "El mapa digital siempre usa la misma escala que uno de papel"
  - "El mapa de papel siempre tiene más detalle"
respuesta: "El de papel tiene escala fija; el digital permite zoom continuo, recalculando qué detalle mostrar en cada nivel"

explicacion: |
  Al acercar el zoom en un mapa digital aparecen nombres de calles que
  no entrarían en un mapa impreso a escala de país.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["ventajas"]

enunciado: "¿Qué puede hacer un mapa digital que uno de papel no puede?"
tipo: mc
opciones_explicitas:
  - "Calcular automáticamente el camino más corto o más rápido entre dos puntos"
  - "Mostrar los límites entre países"
  - "Usar una rosa de los vientos"
respuesta: "Calcular automáticamente el camino más corto o más rápido entre dos puntos"

explicacion: |
  En papel, calcular una ruta óptima requeriría medir a mano; el
  sistema lo hace automáticamente.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["ventajas"]

enunciado: "¿Cuál de estas capas es imposible de tener en un mapa impreso?"
tipo: mc
opciones_explicitas:
  - "Tránsito en tiempo real, que se actualiza constantemente"
  - "Los límites de las provincias"
  - "El nombre de las ciudades"
respuesta: "Tránsito en tiempo real, que se actualiza constantemente"

explicacion: |
  Un mapa impreso queda fijo desde el momento en que se imprime; el
  tránsito en vivo necesita actualizarse todo el tiempo.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["ventajas"]

enunciado: "Buscar \"farmacias cerca\" en un mapa digital sin saber de antemano dónde están es un ejemplo de..."
tipo: mc
opciones_explicitas:
  - "Búsqueda por categoría, posible gracias a que cada elemento tiene datos asociados"
  - "Geocodificación de una dirección"
  - "Una escala gráfica"
respuesta: "Búsqueda por categoría, posible gracias a que cada elemento tiene datos asociados"

explicacion: |
  El SIG sabe qué tipo de lugar es cada punto (farmacia, banco,
  restaurante) y puede filtrarlos.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["sig"]

enunciado: "Un SIG es simplemente una imagen que se muestra en pantalla, sin datos asociados a lo que dibuja."
tipo: vf
respuesta: falso

explicacion: |
  La característica que define a un SIG es justamente que cada
  elemento tiene datos asociados (coordenadas, nombre, tipo).
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["gps", "cruce"]

enunciado: "¿De qué tecnología viene la posición del usuario en un mapa digital (el puntito azul)?"
tipo: mc
opciones_explicitas:
  - "GPS"
  - "Escala gráfica"
  - "Rosa de los vientos"
respuesta: "GPS"

explicacion: |
  El GPS calcula la posición y el mapa digital la muestra sobre sus
  capas — ver `../sig-gps/`.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["imagenes_satelitales", "cruce"]

enunciado: "La capa de vista \"satélite\" de un mapa digital viene de..."
tipo: mc
opciones_explicitas:
  - "Imágenes satelitales"
  - "El sistema de posicionamiento GPS"
  - "Una brújula digital"
respuesta: "Imágenes satelitales"

explicacion: |
  Es otra tecnología distinta que se combina con el mapa digital — ver
  `../sig-imagenes-satelitales/`.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["capas"]

enunciado: "Las capas de un SIG se pueden mostrar u ocultar de forma independiente unas de otras."
tipo: vf
respuesta: verdadero

explicacion: |
  Esa independencia es justamente lo que permite combinar sólo la
  información necesaria en cada momento.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["coordenadas", "cruce"]

enunciado: "¿Qué tiene asociado cada elemento (calle, edificio, comercio) dentro de un mapa digital, además de sus datos?"
tipo: mc
opciones_explicitas:
  - "Coordenadas de latitud y longitud reales"
  - "Un número de escala numérica propio"
  - "Un huso horario propio distinto al del resto del mapa"
respuesta: "Coordenadas de latitud y longitud reales"

explicacion: |
  Es el mismo sistema de coordenadas que ya explica
  `../coordenadas-y-husos-horarios/` — el SIG cuelga sus datos sobre esa
  base.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "avanzado"
  tags: ["sig"]

enunciado: "¿Cuál de estas frases resume mejor qué es, en esencia, un Sistema de Información Geográfica?"
tipo: mc
opciones_explicitas:
  - "Coordenadas con una capa de datos encima"
  - "Un mapa dibujado a mano con más colores"
  - "Una brújula conectada a internet"
respuesta: "Coordenadas con una capa de datos encima"

explicacion: |
  Es la síntesis que usa `troncos.md` para explicar por qué mapas
  digitales, GPS e imágenes satelitales cuelgan del mismo nodo de
  coordenadas.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["capas"]

enunciado: "Para planificar un viaje en auto evitando el tránsito, ¿qué capas conviene combinar?"
tipo: mc
opciones_explicitas:
  - "Calles y tránsito en tiempo real"
  - "Sólo la capa de límites políticos"
  - "Sólo la capa de imágenes satelitales"
respuesta: "Calles y tránsito en tiempo real"

explicacion: |
  Un SIG permite elegir exactamente esas dos capas sin cargar las
  demás.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["ventajas"]

enunciado: "Un mapa de papel puede actualizar el tránsito o el clima automáticamente sin volver a imprimirse."
tipo: vf
respuesta: falso

explicacion: |
  Un mapa impreso queda fijo desde su impresión; sólo un SIG con datos
  en vivo puede actualizarse solo.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "avanzado"
  tags: ["geocodificacion"]

enunciado: "Para calcular una ruta desde \"mi ubicación\" hasta \"Av. Corrientes 1000\", ¿qué paso previo tiene que hacer el sistema con la dirección de texto?"
tipo: mc
opciones_explicitas:
  - "Geocodificarla, convirtiéndola en coordenadas"
  - "Traducirla a otro idioma"
  - "Calcular su escala numérica"
respuesta: "Geocodificarla, convirtiéndola en coordenadas"

explicacion: |
  Sin coordenadas no hay forma de ubicar el destino en el mapa ni de
  calcular la distancia o el camino hacia él.
```

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["sig", "cruce"]

enunciado: "¿Mapas digitales, GPS e imágenes satelitales son la misma tecnología o tecnologías distintas que se combinan?"
tipo: mc
opciones_explicitas:
  - "Son tres tecnologías distintas que se combinan en una app de mapas moderna"
  - "Son exactamente la misma tecnología con distinto nombre"
  - "El GPS es sólo un tipo de mapa digital"
respuesta: "Son tres tecnologías distintas que se combinan en una app de mapas moderna"

explicacion: |
  Por eso el MAPA las separó en 3 nodos hermanos (`G12a`/`G12b`/`G12c`)
  en vez de tratarlas como una sola habilidad.
```

## Sección: estados-y-globalizacion (22 preguntas)

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["estado", "definicion", "soberania"]

variables:
  paises: uno_de(["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay"])

respuesta: "territorio, poblacion y gobierno"
tipo: completar

enunciado: "Un estado se define tradicionalmente por tres elementos fundamentales: un {paises} (como ejemplo de territorio), una población y un gobierno que ejerce la soberanía. ¿Cuáles son esos tres pilares?"

explicacion: |
  El estado es una entidad política con territorio definido, población residente y un gobierno que ejerce la autoridad máxima (soberanía) dentro de esas fronteras.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["actores", "corporaciones", "poder"]

variables:
  nivel_poder: uno_de(["supera", "iguala", "inferior"])

respuesta: "corporaciones"
tipo: completar

enunciado: "Las grandes {nivel_poder} transnacionales a veces desplazan al poder de los gobiernos nacionales en la toma de decisiones económicas globales."

explicacion: |
  Las grandes corporaciones multinacionales tienen un poder económico y político que, en muchos casos, supera o iguala al de los gobiernos nacionales, influyendo en políticas públicas.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["interdependencia", "red", "conexion"]

variables:
  tipo_flujo: uno_de(["informacion", "capitales", "personas"])

respuesta: "red"
tipo: completar

enunciado: "La globalización ha creado una {tipo_flujo} de interdependencia donde lo local y lo global se entrelazan constantemente, desdibujando las fronteras tradicionales del poder."

explicacion: |
  La globalización no es solo un flujo lineal, sino una red compleja de interdependencia donde los eventos locales tienen repercusiones globales y viceversa.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "avanzado"
  tags: ["fmi", "condicionalidad", "deuda"]

variables:
  sector_afectado: uno_de(["salud", "educacion", "infraestructura"])

respuesta: "ajustar_presupuestos"
tipo: completar

enunciado: "La 'trampa de la deuda' o condicionalidad obliga a los países a {sector_afectado} para obtener estabilidad financiera, afectando servicios públicos como la {sector_afectado}."

explicacion: |
  Al pedir préstamos internacionales, los países suelen aceptar condiciones (condicionalidad) que les obligan a recortar gastos públicos en áreas sensibles como salud o educación.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["rol", "intermediario", "cambio"]

variables:
  rol_antiguo: uno_de(["actor_isolado", "centro_absoluto", "unico_actor"])

respuesta: "intermediario"
tipo: completar

enunciado: "El rol del estado ha cambiado de ser un {rol_antiguo} a convertirse en un intermediario entre las fuerzas globales y la realidad local."

explicacion: |
  El estado no ha desaparecido, pero su función ha evolucionado. Ahora actúa como un puente o filtro entre las presiones externas (globalización) y las necesidades internas.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["tecnologia", "internet", "movimientos_sociales"]

variables:
  mecanismo: uno_de(["transcender_fronteras", "crear_economia", "imponer_leyes"])

respuesta: "transcender_fronteras"
tipo: completar

enunciado: "Internet y las redes sociales permiten que los movimientos sociales {mecanismo}, presionando a gobiernos que antes operaban con total impunidad."

explicacion: |
  La tecnología ha democratizado la organización política, permitiendo que la presión social cruce fronteras y afecte la legitimidad de los gobiernos nacionales.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["onu", "fmi", "omc", "organismos"]

variables:
  organismo: uno_de(["onu", "fmi", "omc"])

respuesta: "autonomia"
tipo: completar

enunciado: "Para participar en el comercio global o resolver conflictos, los estados deben ceder parte de su {organismo} a organismos internacionales como la ONU, el FMI o la OMC."

explicacion: |
  La participación en la gobernanza global requiere sacrificar parte de la autonomía nacional a favor de normas y decisiones colectivas.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "avanzado"
  tags: ["soberania", "negociada", "concepto"]

variables:
  tipo_soberania: uno_de(["absoluta", "limitada", "total"])

respuesta: "limitada"
tipo: completar

enunciado: "Hoy en día, la soberanía se entiende más como una soberanía {tipo_soberania} o negociada, donde el estado debe ceder autonomía."

explicacion: |
  La soberanía absoluta es un ideal histórico; la realidad contemporánea es una soberanía relativa que depende de la capacidad de negociación internacional.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["fronteras", "poder", "desdibujamiento"]

variables:
  efecto: uno_de(["fortalecen", "desdibujan", "eliminan"])

respuesta: "desdibujan"
tipo: completar

enunciado: "La circulación global de información y capitales tiende a {efecto} las fronteras tradicionales del poder estatal."

explicacion: |
  Aunque las fronteras físicas existen, su eficacia como barreras de control político y económico se ha reducido significativamente.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["poder_legal", "monopolio", "estado"]

variables:
  accion: uno_de(["declarar_guerra", "emitir_moneda", "garantizar_derechos"])

respuesta: "estados"
tipo: completar

enunciado: "Los {accion} son roles que los estados siguen ejerciendo como únicos actores legales, diferenciándolos de las corporaciones."

explicacion: |
  La legitimidad legal y la capacidad coercitiva final residen en el estado, no en ningún otro actor privado o internacional.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["informacion", "circulacion", "escala"]

variables:
  escala: uno_de(["local", "nacional", "planetaria"])

respuesta: "planetaria"
tipo: completar

enunciado: "La globalización implica la circulación de mercancías, información, capitales y culturas a escala {escala}."

explicacion: |
  La característica definitoria de la globalización es la operación a escala mundial, superando las limitaciones geográficas tradicionales.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "avanzado"
  tags: ["tension", "prosperidad", "marginacion"]

variables:
  resultado: uno_de(["prosperidad", "marginacion", "estabilidad"])

respuesta: "prosperan"
tipo: completar

enunciado: "Entender la tensión entre lo local y lo global es clave para analizar por qué algunos países {resultado} y otros quedan marginados."

explicacion: |
  La capacidad de un estado para navegar la globalización determina su éxito o fracaso económico y social.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["tecnologia", "nuevo_poder", "internet"]

variables:
  esfera: uno_de(["economica", "politica", "social"])

respuesta: "nuevas_esferas"
tipo: completar

enunciado: "La tecnología ha creado {esfera} de poder que operan fuera del control directo de los gobiernos nacionales."

explicacion: |
  El ciberespacio y las plataformas digitales forman nuevas esferas de influencia que los estados intentan regular pero no controlan totalmente.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["soberania", "definicion", "autoridad"]

variables:
  autoridad: uno_de(["máxima", "mínima", "compartida"])

respuesta: "máxima"
tipo: completar

enunciado: "Históricamente, la soberanía se definía como la autoridad {autoridad} para tomar decisiones dentro de las fronteras."

explicacion: |
  La definición clásica de soberanía implica la supremacía interna y la independencia externa, aunque hoy está matizada.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["intermediario", "rol", "funcion"]

variables:
  fuerza: uno_de(["globales", "locales", "externas"])

respuesta: "intermediario"
tipo: completar

enunciado: "El estado actúa como un {fuerza} entre las fuerzas globales y la realidad local, filtrando y adaptando las presiones externas."

explicacion: |
  El estado no es pasivo; media, negocia y adapta las normas globales a la legislación local.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["movimientos_sociales", "presion", "transnacional"]

variables:
  efecto: uno_de(["presionar", "apoyar", "ignorar"])

respuesta: "presionar"
tipo: completar

enunciado: "Los movimientos sociales transnacionales buscan {efecto} a gobiernos que operaban con impunidad, utilizando la visibilidad global."

explicacion: |
  La visibilidad global es una herramienta de poder para los movimientos sociales, obligando a los gobiernos a responder a estándares internacionales.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "avanzado"
  tags: ["prestamo", "condicionalidad", "perdida"]

variables:
  condicion: uno_de(["economicas", "militares", "culturales"])

respuesta: "economicas"
tipo: completar

enunciado: "Al pedir un préstamo internacional, un país suele aceptar condiciones {condicion} que limitan sus políticas internas."

explicacion: |
  La condicionalidad financiera es el mecanismo principal mediante el cual se ejerce influencia sobre la política interna de los estados deudores.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["cultura", "circulacion", "globalizacion"]

variables:
  elemento: uno_de(["mercancías", "personas", "culturas"])

respuesta: "culturas"
tipo: completar

enunciado: "La globalización no es solo circulación de mercancías, sino también de información, capitales, personas y {elemento} a escala planetaria."

explicacion: |
  El intercambio cultural es un componente clave de la globalización, a menudo generando debates sobre identidad y homogeneización.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["historia", "soberania", "absoluta"]

variables:
  caracteristica: uno_de(["clara", "borrosa", "inexistente"])

respuesta: "absoluta"
tipo: completar

enunciado: "Históricamente, la soberanía se ejercía de forma casi {caracteristica} en el interior del país, con límites bien definidos."

explicacion: |
  El modelo westfaliano de estado-nación pretendía un control absoluto sobre su territorio, contraste con la realidad actual.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "basico"
  tags: ["omc", "comercio", "participacion"]

variables:
  organismo: uno_de(["fmi", "omc", "onu"])

respuesta: "comercio"
tipo: completar

enunciado: "Los estados ceden autonomía a organismos como la OMC para participar en el {organismo} global."

explicacion: |
  La OMC establece las reglas del comercio internacional, limitando la capacidad de los estados para proteger sus mercados internos.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "avanzado"
  tags: ["derechos", "garantia", "estado"]

variables:
  derecho: uno_de(["salud", "educacion", "seguridad"])

respuesta: "garantizar"
tipo: completar

enunciado: "Los estados siguen siendo los únicos actores con capacidad legal para {derecho} a sus ciudadanos."

explicacion: |
  La protección de los derechos humanos y ciudadanos sigue siendo la responsabilidad última del estado, aunque los organismos internacionales monitoricen su cumplimiento.
```

```
metadata:
  materia: "geografia"
  tema: "estados_y_globalizacion"
  nivel: "intermedio"
  tags: ["interdependencia", "local", "global"]

variables:
  relacion: uno_de(["entrelazan", "separan", "ignoran"])

respuesta: "entrelazan"
tipo: completar

enunciado: "La globalización ha creado una red donde lo local y lo global se {relacion} constantemente."

explicacion: |
  No hay una separación clara; lo local es afectado por lo global y viceversa, creando una dinámica compleja de influencia mutua.
```

## Sección: region (20 preguntas)

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "basico"
  tags: ["region", "vocabulario"]

enunciado: "¿Qué es una región, en el sentido geográfico?"
tipo: mc
opciones_explicitas:
  - "Un área agrupada por compartir uno o varios rasgos, no necesariamente por un límite político oficial"
  - "Un país reconocido internacionalmente"
  - "La capital de una provincia"
respuesta: "Un área agrupada por compartir uno o varios rasgos, no necesariamente por un límite político oficial"

explicacion: |
  A diferencia de la división política, una región puede tener bordes
  difusos o directamente ningún límite oficial.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "basico"
  tags: ["tipos_de_region"]

enunciado: "¿Qué es una región física o natural?"
tipo: mc
opciones_explicitas:
  - "Territorio agrupado por un rasgo del medio natural, como un bioma o una cuenca hidrográfica"
  - "Territorio agrupado sólo por el idioma que se habla"
  - "Territorio agrupado únicamente por límites políticos"
respuesta: "Territorio agrupado por un rasgo del medio natural, como un bioma o una cuenca hidrográfica"

explicacion: |
  Ejemplo: la región amazónica, agrupada por el bioma de selva
  tropical.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "intermedio"
  tags: ["region_fisica"]

enunciado: "La selva amazónica se extiende por un solo país (Brasil) exclusivamente."
tipo: vf
respuesta: falso

explicacion: |
  Se extiende también por Perú, Colombia, Bolivia, Ecuador, Venezuela,
  Guyana y Surinam — una región física no respeta fronteras políticas.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "basico"
  tags: ["tipos_de_region"]

enunciado: "¿Qué es una región cultural?"
tipo: mc
opciones_explicitas:
  - "Territorio agrupado por idioma, religión, tradiciones o historia compartida"
  - "Territorio agrupado exclusivamente por su relieve"
  - "Un sinónimo exacto de país"
respuesta: "Territorio agrupado por idioma, religión, tradiciones o historia compartida"

explicacion: |
  Ejemplo: "el mundo hispanohablante" o "los Balcanes" son regiones
  culturales, no unidades políticas.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "intermedio"
  tags: ["tipos_de_region"]

enunciado: "Comparados con los de una región física, ¿cómo suelen ser los bordes de una región cultural?"
tipo: mc
opciones_explicitas:
  - "Más difusos"
  - "Siempre más precisos y oficiales"
  - "Idénticos a un límite político"
respuesta: "Más difusos"

explicacion: |
  Idioma, tradiciones e historia compartida rara vez tienen un borde
  tan definido como una cuenca hidrográfica o un bioma.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "avanzado"
  tags: ["tipos_de_region"]

enunciado: "¿Qué es una región funcional (o nodal)?"
tipo: mc
opciones_explicitas:
  - "Territorio organizado alrededor de un centro con el que se relaciona funcionalmente (ej.: un área metropolitana)"
  - "Un territorio definido únicamente por su clima"
  - "Un sinónimo de región cultural"
respuesta: "Territorio organizado alrededor de un centro con el que se relaciona funcionalmente (ej.: un área metropolitana)"

explicacion: |
  El Gran Buenos Aires es un ejemplo: varias jurisdicciones distintas
  que funcionan como una sola unidad económica y de transporte.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "avanzado"
  tags: ["region_funcional", "argentina"]

enunciado: "El Gran Buenos Aires (CABA + partidos del conurbano) es un ejemplo de..."
tipo: mc
opciones_explicitas:
  - "Región funcional, aunque sean jurisdicciones políticas distintas"
  - "Una sola jurisdicción política, sin ninguna división interna"
  - "Una región puramente física, definida por su bioma"
respuesta: "Región funcional, aunque sean jurisdicciones políticas distintas"

explicacion: |
  Funciona como una unidad económica y de transporte pese a estar
  formada por varias jurisdicciones políticas separadas.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "intermedio"
  tags: ["tipos_de_region"]

enunciado: "¿Cuál de los 4 tipos de región SÍ coincide siempre con límites políticos oficiales?"
tipo: mc
opciones_explicitas:
  - "La región formal o administrativa"
  - "La región cultural"
  - "La región física"
respuesta: "La región formal o administrativa"

explicacion: |
  Es el único tipo donde región y división política se solapan
  exactamente (una provincia, un país).
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Por qué se dice que \"división política se le acerca a región pero es más estrecho\"?"
tipo: mc
opciones_explicitas:
  - "Porque la división política es sólo un caso particular de región (la formal) y deja afuera biomas, cuencas o áreas culturales"
  - "Porque la división política incluye más tipos de agrupamiento que la región"
  - "Porque son conceptos sin ninguna relación"
respuesta: "Porque la división política es sólo un caso particular de región (la formal) y deja afuera biomas, cuencas o áreas culturales"

explicacion: |
  Reducir "región" sólo a división política dejaría afuera todas las
  formas de agrupar territorio sin límite oficial.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "avanzado"
  tags: ["marco_ncge"]

enunciado: "Antes de que existiera el nodo \"Región\", ¿cuántos de los 5 Temas clásicos de la Geografía (NCGE/AAG) ya tenían nodo en el mapa?"
tipo: input
respuesta: 4

explicacion: |
  Ubicación, Lugar, Interacción Humano-Ambiental y Movimiento ya
  tenían nodo; Región era el único que faltaba.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Un bioma (selva, desierto, pastizal) es un ejemplo de qué tipo de región?"
tipo: mc
opciones_explicitas:
  - "Región física"
  - "Región funcional"
  - "Región formal"
respuesta: "Región física"

explicacion: |
  Agrupa territorio por un rasgo natural compartido (clima y
  vegetación) — es el puente hacia `../relieve-clima-biomas/`.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "intermedio"
  tags: ["region_fisica"]

enunciado: "Una cuenca hidrográfica (todo el territorio que drena hacia un mismo río) es un ejemplo de..."
tipo: mc
opciones_explicitas:
  - "Región física"
  - "Región cultural"
  - "Región formal"
respuesta: "Región física"

explicacion: |
  Es un rasgo natural (dónde drena el agua) que no respeta fronteras
  políticas.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "basico"
  tags: ["region"]

enunciado: "Toda región tiene un límite oficial trazado, igual que un país o una provincia."
tipo: vf
respuesta: falso

explicacion: |
  Sólo la región formal/administrativa coincide con límites oficiales;
  las demás pueden tener bordes difusos o ningún límite trazado.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "intermedio"
  tags: ["region"]

enunciado: "Dos regiones (por ejemplo, una física y una cultural) pueden superponerse en el mismo territorio sin contradecirse."
tipo: vf
respuesta: verdadero

explicacion: |
  Un mismo territorio puede ser a la vez parte de una región física
  (un bioma) y de una región cultural (un idioma compartido) — son
  clasificaciones distintas, no excluyentes.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "intermedio"
  tags: ["region_cultural"]

enunciado: "\"Los Balcanes\" es un ejemplo de..."
tipo: mc
opciones_explicitas:
  - "Región cultural/histórica, sin límites políticos exactos"
  - "Un país específico"
  - "Una región formal, coincidente con una única provincia"
respuesta: "Región cultural/histórica, sin límites políticos exactos"

explicacion: |
  Es un área agrupada por historia y cultura compartida, atravesando
  varios países.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿Cuál es la diferencia central entre región y división política?"
tipo: mc
opciones_explicitas:
  - "La división política siempre tiene límite oficial y gobierno reconocido; una región no necesariamente"
  - "La región siempre es más chica que una provincia"
  - "No hay ninguna diferencia real entre los dos conceptos"
respuesta: "La división política siempre tiene límite oficial y gobierno reconocido; una región no necesariamente"

explicacion: |
  Es la razón por la que `region/` depende de `../division-politica/`:
  primero hay que distinguir qué es un límite oficial para poder
  mostrar que una región no tiene por qué respetarlo.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "intermedio"
  tags: ["region_formal"]

enunciado: "¿Un país puede considerarse, a la vez, una región formal?"
tipo: vf
respuesta: verdadero

explicacion: |
  La región formal/administrativa es exactamente el punto donde región
  y división política se solapan — un país o una provincia son
  ejemplos de ambas cosas a la vez.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "basico"
  tags: ["region"]

enunciado: "¿Una región puede agruparse por más de un rasgo compartido a la vez (por ejemplo, clima Y vegetación)?"
tipo: vf
respuesta: verdadero

explicacion: |
  La definición de región no exige un único rasgo — un bioma, por
  ejemplo, combina clima y vegetación como rasgos compartidos.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "intermedio"
  tags: ["region_cultural"]

enunciado: "\"El Cono Sur\" (Argentina, Chile, Uruguay, y a veces Paraguay/sur de Brasil) es principalmente un ejemplo de..."
tipo: mc
opciones_explicitas:
  - "Región cultural/geopolítica, sin coincidir con un único país"
  - "Una región formal idéntica a un solo país"
  - "Un bioma específico"
respuesta: "Región cultural/geopolítica, sin coincidir con un único país"

explicacion: |
  Agrupa varios países por cercanía geográfica e histórica compartida,
  no por ser una sola unidad política.
```

```
metadata:
  materia: "geografia"
  tema: "region"
  nivel: "avanzado"
  tags: ["marco_ncge"]

enunciado: "¿Por qué se agregó específicamente el nodo \"Región\" al mapa, en vez de asumir que ya estaba cubierto por división política?"
tipo: mc
opciones_explicitas:
  - "Porque división política es más estrecho: sólo cubre el caso formal, dejando afuera regiones físicas, culturales y funcionales sin límite oficial"
  - "Porque división política nunca se relaciona con región"
  - "Porque los 5 Temas de la Geografía no incluyen a Región"
respuesta: "Porque división política es más estrecho: sólo cubre el caso formal, dejando afuera regiones físicas, culturales y funcionales sin límite oficial"

explicacion: |
  Es la nota explícita de `troncos.md` (agregado v2.4): "División
  política se le acerca pero es más estrecho".
```

## Sección: sig-gps (20 preguntas)

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "basico"
  tags: ["gps", "vocabulario"]

enunciado: "¿Qué significa la sigla GPS?"
tipo: mc
opciones_explicitas:
  - "Global Positioning System (Sistema de Posicionamiento Global)"
  - "Geographic Position Sensor"
  - "General Public Satellite"
respuesta: "Global Positioning System (Sistema de Posicionamiento Global)"

explicacion: |
  Es una red de satélites que permite calcular la posición exacta de
  un receptor en la superficie terrestre.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "¿Cómo se llama el método matemático con el que el GPS calcula la posición de un receptor?"
tipo: mc
opciones_explicitas:
  - "Trilateración"
  - "Proyección Mercator"
  - "Regla de tres"
respuesta: "Trilateración"

explicacion: |
  Se basa en calcular la distancia a varios satélites y encontrar el
  punto donde esas distancias se cruzan.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "¿Qué mide el receptor GPS a partir de la señal que recibe de cada satélite?"
tipo: mc
opciones_explicitas:
  - "Cuánto tiempo tardó en llegar la señal, para convertirlo en distancia"
  - "El color de la señal"
  - "La cantidad de satélites visibles"
respuesta: "Cuánto tiempo tardó en llegar la señal, para convertirlo en distancia"

explicacion: |
  Como la señal viaja a la velocidad de la luz, ese tiempo se convierte
  directo en distancia: distancia = velocidad × tiempo.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "Si el receptor sólo conoce la distancia a UN satélite, ¿qué puede determinar sobre su posición?"
tipo: mc
opciones_explicitas:
  - "Que está en algún punto de una esfera alrededor de ese satélite, no un punto único"
  - "Su posición exacta en 3D"
  - "Nada, ni siquiera una esfera de posibles ubicaciones"
respuesta: "Que está en algún punto de una esfera alrededor de ese satélite, no un punto único"

explicacion: |
  Con una sola distancia conocida, el conjunto de puntos posibles es
  toda una esfera, no un punto.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "Con la distancia a TRES satélites, ¿qué logra el receptor?"
tipo: mc
opciones_explicitas:
  - "Reducir las posibilidades a un único punto real posible, cruzando las tres esferas"
  - "Calcular su velocidad de desplazamiento"
  - "Nada distinto que con un solo satélite"
respuesta: "Reducir las posibilidades a un único punto real posible, cruzando las tres esferas"

explicacion: |
  Las tres esferas se cruzan en un único punto realista (el otro punto
  matemático suele quedar fuera de la Tierra o a una altura absurda).
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "¿Cuántos satélites hacen falta en la práctica para que un GPS de celular calcule una posición precisa?"
tipo: input
respuesta: 4

explicacion: |
  El cuarto satélite corrige el error del reloj (no atómico) del
  receptor, que si no distorsionaría el cálculo de distancia de los
  otros tres.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps", "trilateracion"]

enunciado: "¿Por qué el GPS de un celular necesita un cuarto satélite además de los tres que alcanzarían con un reloj perfecto?"
tipo: mc
opciones_explicitas:
  - "Porque el reloj del receptor no es tan preciso como los relojes atómicos de los satélites, y la cuarta señal corrige ese error"
  - "Porque un satélite siempre falla y hay que tener uno de repuesto"
  - "Porque cada satélite sólo puede calcular una coordenada (latitud, longitud o altitud)"
respuesta: "Porque el reloj del receptor no es tan preciso como los relojes atómicos de los satélites, y la cuarta señal corrige ese error"

explicacion: |
  Son 4 incógnitas a resolver (latitud, longitud, altitud y error de
  reloj) y 4 ecuaciones — una por cada satélite.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps"]

enunciado: "¿Por qué los satélites GPS llevan relojes atómicos extremadamente precisos?"
tipo: mc
opciones_explicitas:
  - "Porque el cálculo de distancia depende de medir el tiempo de viaje de la señal con muchísima precisión"
  - "Porque necesitan mostrar la hora a los usuarios"
  - "Porque los satélites viajan más rápido que la luz"
respuesta: "Porque el cálculo de distancia depende de medir el tiempo de viaje de la señal con muchísima precisión"

explicacion: |
  Un pequeño error de tiempo, multiplicado por la velocidad de la luz,
  se traduce en un error de distancia grande.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps"]

enunciado: "Además del GPS estadounidense, ¿cuál de estos es otro sistema satelital de posicionamiento real?"
tipo: mc
opciones_explicitas:
  - "GLONASS (Rusia)"
  - "Wi-Fi 6"
  - "Bluetooth Low Energy"
respuesta: "GLONASS (Rusia)"

explicacion: |
  Existen varios sistemas equivalentes: GLONASS (Rusia), Galileo
  (Unión Europea) y BeiDou (China).
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps"]

enunciado: "El receptor GPS de un celular le envía información de vuelta al satélite para que sepa dónde está."
tipo: vf
respuesta: falso

explicacion: |
  El receptor sólo ESCUCHA las señales de los satélites y calcula; no
  transmite nada de vuelta. Compartir la ubicación con otras personas
  es una función aparte, de internet, no del GPS en sí.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "limites"]

enunciado: "El GPS de un celular común ubica la posición con precisión de centímetros."
tipo: vf
respuesta: falso

explicacion: |
  La precisión típica de un GPS de celular es de unos pocos metros;
  llegar a centímetros requiere equipamiento especial (GPS diferencial
  o RTK).
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "basico"
  tags: ["gps", "limites"]

enunciado: "¿Por qué el GPS suele funcionar mal o directamente no funcionar dentro de un edificio?"
tipo: mc
opciones_explicitas:
  - "Porque la señal de los satélites es débil y se bloquea fácilmente con techos y paredes"
  - "Porque los satélites no pasan sobre las ciudades"
  - "Porque el GPS necesita conexión a Wi-Fi para funcionar"
respuesta: "Porque la señal de los satélites es débil y se bloquea fácilmente con techos y paredes"

explicacion: |
  Necesita línea de vista relativamente despejada hacia el cielo;
  interiores, túneles y "cañones urbanos" (entre rascacielos) degradan
  mucho la señal.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps", "limites"]

enunciado: "¿Qué es el \"cañón urbano\" que afecta la precisión del GPS?"
tipo: mc
opciones_explicitas:
  - "El efecto de rascacielos muy altos que bloquean o rebotan la señal satelital"
  - "Un tipo de satélite GPS más moderno"
  - "El nombre de una calle con GPS de alta precisión"
respuesta: "El efecto de rascacielos muy altos que bloquean o rebotan la señal satelital"

explicacion: |
  Entre edificios muy altos, la señal puede rebotar (multipath) o
  bloquearse directamente, degradando la posición calculada.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps", "aplicaciones"]

enunciado: "¿En qué contexto se usa el GPS diferencial o RTK, que llega a precisión de centímetros?"
tipo: mc
opciones_explicitas:
  - "Agricultura de precisión y topografía"
  - "Cualquier celular de gama media"
  - "Sólo en satélites militares"
respuesta: "Agricultura de precisión y topografía"

explicacion: |
  Requiere equipamiento y estaciones de referencia adicionales que un
  celular común no tiene.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "cruce"]

enunciado: "¿Qué problema resuelve específicamente el GPS, distinto del que resuelve un mapa digital?"
tipo: mc
opciones_explicitas:
  - "El GPS resuelve \"dónde estoy\"; el mapa digital resuelve \"qué hay alrededor de esa posición\""
  - "Son exactamente el mismo problema"
  - "El GPS muestra las calles; el mapa digital calcula la posición"
respuesta: "El GPS resuelve \"dónde estoy\"; el mapa digital resuelve \"qué hay alrededor de esa posición\""

explicacion: |
  Son dos tecnologías distintas combinadas: el GPS da la posición, el
  SIG del mapa digital la interpreta contra sus capas de datos.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["trilateracion", "calculo"]

variables:
  velocidad_luz: 300000
  tiempo_segundos: random_float(0.02, 0.1)

respuesta: redondear(velocidad_luz * tiempo_segundos, 0)
tipo: input
tolerancia_abs: 50

enunciado: "Una señal GPS viaja a {velocidad_luz} km/s (velocidad de la luz, redondeada) y tarda {tiempo_segundos} segundos en llegar al receptor. ¿Aproximadamente cuántos km hay entre el satélite y el receptor?"

pasos:
  - "distancia = velocidad × tiempo = {velocidad_luz} × {tiempo_segundos}"

explicacion: |
  Es el mismo principio que usa el GPS real: convertir tiempo de viaje
  de la señal en distancia, conociendo la velocidad de la luz.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["trilateracion"]

enunciado: "Contando latitud, longitud, altitud y el error de reloj del receptor, ¿cuántas incógnitas resuelve el sistema con 4 satélites?"
tipo: input
respuesta: 4

explicacion: |
  3 incógnitas de posición (latitud, longitud, altitud) + 1 de error
  de reloj = 4, resueltas con 4 ecuaciones (una por satélite).
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "basico"
  tags: ["limites"]

enunciado: "Dentro de un túnel largo, el GPS de un auto sigue recibiendo señal satelital normalmente."
tipo: vf
respuesta: falso

explicacion: |
  Un túnel bloquea la señal satelital casi por completo; muchos
  sistemas navegan "a ciegas" estimando posición por velocidad y
  dirección hasta recuperar señal.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Cuál de estas tareas NO hace el GPS por sí mismo, sino que depende de otra tecnología (mapas digitales)?"
tipo: mc
opciones_explicitas:
  - "Mostrar el nombre de la calle en la que se está parado"
  - "Calcular la distancia a un satélite a partir del tiempo de viaje de la señal"
  - "Determinar latitud, longitud y altitud del receptor"
respuesta: "Mostrar el nombre de la calle en la que se está parado"

explicacion: |
  El GPS sólo da coordenadas; asociar esas coordenadas a un nombre de
  calle es trabajo del SIG del mapa digital.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["trilateracion"]

enunciado: "¿Qué determina, en última instancia, la posición 3D final que calcula un receptor GPS?"
tipo: mc
opciones_explicitas:
  - "La intersección de las esferas de distancia a al menos 4 satélites"
  - "La dirección hacia donde apunta la brújula del celular"
  - "El mapa digital que la app tenga descargado"
respuesta: "La intersección de las esferas de distancia a al menos 4 satélites"

explicacion: |
  Es pura trilateración matemática — el mapa digital y la brújula son
  capas de información aparte que se agregan después.
```

## Sección: relieve-clima-biomas (24 preguntas)

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["cadena_causal"]

enunciado: "¿Cuál es el orden causal correcto entre relieve, clima y bioma?"
tipo: mc
opciones_explicitas:
  - "Relieve y latitud determinan el clima; el clima determina el bioma"
  - "El bioma determina el clima; el clima determina el relieve"
  - "Son tres datos sin ninguna relación causal entre sí"
respuesta: "Relieve y latitud determinan el clima; el clima determina el bioma"

explicacion: |
  Son tres eslabones de una misma cadena, no tres datos sueltos.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["relieve", "vocabulario"]

enunciado: "¿Qué es el relieve de un territorio?"
tipo: mc
opciones_explicitas:
  - "La forma de la superficie terrestre: llanuras, mesetas, montañas, valles"
  - "El patrón de temperatura y lluvias a lo largo de los años"
  - "El tipo de vegetación dominante"
respuesta: "La forma de la superficie terrestre: llanuras, mesetas, montañas, valles"

explicacion: |
  El relieve es la forma del terreno; el clima y el bioma vienen
  después en la cadena causal.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["relieve"]

enunciado: "¿Qué caracteriza a una llanura?"
tipo: mc
opciones_explicitas:
  - "Terreno plano, con poca variación de altura"
  - "Terreno elevado con fuertes desniveles"
  - "Terreno bajo entre dos montañas"
respuesta: "Terreno plano, con poca variación de altura"

explicacion: |
  Se diferencia de la meseta en que ésta también es plana pero está
  elevada.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["relieve", "clima", "altitud"]

variables:
  metros_altura: random(1, 5) * 1000

respuesta: (metros_altura / 1000) * 6
tipo: input
tolerancia_abs: 0.5

enunciado: "La temperatura baja en promedio 6°C cada 1.000 metros de altura. Si un cerro tiene {metros_altura} metros de altura, ¿aproximadamente cuántos grados menos de temperatura hay en la cima respecto al nivel del mar?"

pasos:
  - "({metros_altura} / 1000) × 6°C"

explicacion: |
  Es la regla general que explica por qué hay nieve en la cima de
  montañas incluso cerca del ecuador.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["relieve", "altitud"]

enunciado: "¿Por qué puede haber nieve en la cima de una montaña muy alta cerca del ecuador, donde el clima general es cálido?"
tipo: mc
opciones_explicitas:
  - "Porque la temperatura baja con la altitud, sin importar la latitud"
  - "Porque cerca del ecuador siempre nieva a cualquier altura"
  - "Porque la nieve no depende de la temperatura"
respuesta: "Porque la temperatura baja con la altitud, sin importar la latitud"

explicacion: |
  La altitud puede compensar (o revertir) el efecto de una latitud
  cálida.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "avanzado"
  tags: ["relieve", "clima"]

enunciado: "¿Qué es el efecto de \"sombra de lluvia\" (o efecto de barrera) que genera una cordillera?"
tipo: mc
opciones_explicitas:
  - "El lado donde el viento choca con la montaña recibe mucha lluvia; el lado opuesto queda mucho más seco"
  - "Las montañas altas siempre reciben menos lluvia que las llanuras"
  - "Las cordilleras no afectan la distribución de lluvias"
respuesta: "El lado donde el viento choca con la montaña recibe mucha lluvia; el lado opuesto queda mucho más seco"

explicacion: |
  Una cordillera bloquea el paso de nubes cargadas de humedad,
  descargando la lluvia de un solo lado.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "avanzado"
  tags: ["relieve", "argentina"]

enunciado: "La Patagonia argentina es en gran parte árida a pesar de estar cerca del océano. ¿Por qué, según el efecto de sombra de lluvia?"
tipo: mc
opciones_explicitas:
  - "Porque la humedad del Pacífico se descarga del lado chileno de los Andes antes de llegar al lado argentino"
  - "Porque la Patagonia está muy cerca del ecuador"
  - "Porque no hay ninguna cordillera cerca de la Patagonia"
respuesta: "Porque la humedad del Pacífico se descarga del lado chileno de los Andes antes de llegar al lado argentino"

explicacion: |
  Los Andes actúan de barrera: el lado chileno recibe la lluvia, el
  lado argentino queda en la "sombra" seca.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["clima", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre \"clima\" y \"tiempo\" (meteorológico)?"
tipo: mc
opciones_explicitas:
  - "El clima es el patrón promedio de muchos años; el tiempo es el estado puntual de la atmósfera en un momento dado"
  - "Son exactamente sinónimos"
  - "El tiempo es siempre más frío que el clima"
respuesta: "El clima es el patrón promedio de muchos años; el tiempo es el estado puntual de la atmósfera en un momento dado"

explicacion: |
  "Clima" es estadística de largo plazo; "tiempo" es el dato de hoy.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["clima", "latitud"]

enunciado: "¿Por qué la latitud es uno de los principales factores del clima de un lugar?"
tipo: mc
opciones_explicitas:
  - "Porque determina cuánta radiación solar directa recibe la zona a lo largo del año"
  - "Porque determina la altitud del terreno"
  - "Porque determina el tipo de suelo"
respuesta: "Porque determina cuánta radiación solar directa recibe la zona a lo largo del año"

explicacion: |
  Cerca del ecuador el Sol pega más directo todo el año; cerca de los
  polos, más oblicuo — es la base de las grandes zonas climáticas.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["clima"]

enunciado: "¿Por qué las zonas costeras suelen tener menos diferencia de temperatura entre verano e invierno que las zonas del interior de un continente?"
tipo: mc
opciones_explicitas:
  - "Porque el agua se calienta y enfría más lento que la tierra, moderando la temperatura cercana"
  - "Porque el mar siempre está más frío que la tierra"
  - "Porque las zonas costeras están siempre a mayor latitud"
respuesta: "Porque el agua se calienta y enfría más lento que la tierra, moderando la temperatura cercana"

explicacion: |
  Es el efecto moderador del mar; el interior de un continente, sin
  ese efecto, tiene clima continental con veranos e inviernos extremos.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "avanzado"
  tags: ["clima"]

enunciado: "¿Qué caracteriza a un clima continental (lejos del mar)?"
tipo: mc
opciones_explicitas:
  - "Veranos e inviernos con temperaturas extremas, por falta del efecto moderador del agua"
  - "Temperatura casi constante todo el año"
  - "Lluvias constantes todo el año"
respuesta: "Veranos e inviernos con temperaturas extremas, por falta del efecto moderador del agua"

explicacion: |
  Sin el mar cerca moderando, la temperatura varía mucho más entre
  estaciones.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["bioma", "vocabulario"]

enunciado: "¿Qué es un bioma?"
tipo: mc
opciones_explicitas:
  - "El tipo de ecosistema dominante de una región, definido principalmente por su clima"
  - "El tipo de gobierno de una región"
  - "La escala de un mapa físico"
respuesta: "El tipo de ecosistema dominante de una región, definido principalmente por su clima"

explicacion: |
  El clima determina qué vegetación y fauna puede sostenerse en una
  zona — eso es el bioma.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["biomas"]

enunciado: "¿Qué tipo de clima corresponde a una selva tropical?"
tipo: mc
opciones_explicitas:
  - "Cálido y muy lluvioso todo el año"
  - "Frío y seco"
  - "Templado con estaciones marcadas"
respuesta: "Cálido y muy lluvioso todo el año"

explicacion: |
  Ese clima es lo que permite la mayor biodiversidad del planeta, como
  en la Amazonía.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["biomas"]

enunciado: "¿Qué es lo que realmente define a un bioma como \"desierto\"?"
tipo: mc
opciones_explicitas:
  - "La falta de precipitaciones, sin importar si es cálido o frío"
  - "Que sea siempre muy cálido"
  - "Que esté siempre cerca del ecuador"
respuesta: "La falta de precipitaciones, sin importar si es cálido o frío"

explicacion: |
  Existen desiertos fríos (Gobi, Atacama) y cálidos (Sahara) — lo que
  los une es la escasez de agua, no la temperatura.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "avanzado"
  tags: ["biomas"]

enunciado: "¿Cuál de estos es un ejemplo de desierto FRÍO?"
tipo: mc
opciones_explicitas:
  - "El desierto de Atacama"
  - "El desierto del Sahara"
  - "Ningún desierto puede ser frío"
respuesta: "El desierto de Atacama"

explicacion: |
  El Atacama (y también el Gobi) son desiertos fríos: lo que los
  define es la falta de lluvia, no el calor.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["biomas", "argentina"]

enunciado: "La Pampa argentina es un ejemplo del bioma..."
tipo: mc
opciones_explicitas:
  - "Pastizal / pradera / estepa"
  - "Selva tropical"
  - "Tundra"
respuesta: "Pastizal / pradera / estepa"

explicacion: |
  Clima templado con lluvias moderadas: insuficientes para bosque,
  suficientes para pasto.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["biomas"]

enunciado: "¿Qué caracteriza al bioma de tundra?"
tipo: mc
opciones_explicitas:
  - "Clima muy frío, cerca de los polos o en gran altitud, con vegetación muy baja (musgos, líquenes)"
  - "Clima cálido con lluvias abundantes todo el año"
  - "Clima templado con estaciones marcadas y bosque denso"
respuesta: "Clima muy frío, cerca de los polos o en gran altitud, con vegetación muy baja (musgos, líquenes)"

explicacion: |
  El suelo permanentemente o casi siempre helado impide el crecimiento
  de vegetación más alta.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["cadena_causal"]

enunciado: "El bioma de una región es la CAUSA de su clima, no al revés."
tipo: vf
respuesta: falso

explicacion: |
  Es al revés: el clima (a su vez causado por relieve y latitud) es lo
  que determina qué bioma puede sostenerse ahí.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["cadena_causal"]

enunciado: "Relieve, clima y bioma son tres datos totalmente independientes de un territorio, sin relación causal entre ellos."
tipo: vf
respuesta: falso

explicacion: |
  Son tres eslabones de una misma cadena causal: relieve/latitud →
  clima → bioma.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Un bioma es un ejemplo de qué concepto ya visto en `../region/`?"
tipo: mc
opciones_explicitas:
  - "Región física, que agrupa territorio por un rasgo natural sin respetar límites políticos"
  - "Región formal, idéntica siempre a un país"
  - "División política"
respuesta: "Región física, que agrupa territorio por un rasgo natural sin respetar límites políticos"

explicacion: |
  Es la razón por la que `relieve-clima-biomas/` depende de
  `../region/` en `../dependencias.md`.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["relieve"]

enunciado: "¿Qué es una meseta?"
tipo: mc
opciones_explicitas:
  - "Terreno elevado y plano"
  - "Terreno bajo entre montañas"
  - "Terreno plano al nivel del mar"
respuesta: "Terreno elevado y plano"

explicacion: |
  Se diferencia de la llanura en que la meseta está elevada; de la
  montaña, en que es plana en su parte superior.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["biomas"]

enunciado: "¿Qué clima corresponde al bioma de bosque templado?"
tipo: mc
opciones_explicitas:
  - "Templado, con lluvias moderadas a abundantes y estaciones marcadas"
  - "Muy cálido y seco todo el año"
  - "Extremadamente frío, sin vegetación posible"
respuesta: "Templado, con lluvias moderadas a abundantes y estaciones marcadas"

explicacion: |
  Es distinto del bosque tropical (siempre cálido) por tener
  estaciones bien diferenciadas.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["cadena_causal"]

enunciado: "Ordená correctamente la cadena de causas: Bioma, Relieve, Clima."
tipo: ordenar
opciones_explicitas:
  - "Relieve"
  - "Clima"
  - "Bioma"
respuesta_orden: ["Relieve", "Clima", "Bioma"]

explicacion: |
  Relieve (y latitud) → Clima → Bioma, en ese orden causal.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "avanzado"
  tags: ["cadena_causal"]

enunciado: "¿Por qué relieve, clima y bioma se tratan como una sola unidad de estudio en vez de tres temas separados?"
tipo: mc
opciones_explicitas:
  - "Porque cada uno es la causa directa del siguiente: entender uno sin el anterior es quedarse a mitad de camino de la explicación"
  - "Porque son exactamente lo mismo con distinto nombre"
  - "Porque el MAPA los separó en 3 nodos distintos con IDs propios"
respuesta: "Porque cada uno es la causa directa del siguiente: entender uno sin el anterior es quedarse a mitad de camino de la explicación"

explicacion: |
  A diferencia de `G12` o `H2` (que sí tienen sub-IDs `a`/`b`/`c` en el
  MAPA), `G6` sigue siendo un solo nodo — señal de que se pensó como
  unidad.
```

