# Examen jefe — [PENDIENTE #694]

> Logro #694. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: internet-redes-globalizacion-digital (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["arpanet", "eeuu", "militar"]

tipo: mc
opciones_explicitas: ["Una red civil para usuarios domésticos", "Un proyecto de investigación militar y académico de EE.UU.", "Una red de televisión satelital", "Un sistema de mensajería privada para gobiernos"]
respuesta: "Un proyecto de investigación militar y académico de EE.UU."

enunciado: "ARPANET, el precursor de la internet moderna, fue concebida originalmente como ___."

explicacion: |
  ARPANET fue creada por la ARPA (Advanced Research Projects Agency) del Departamento de Defensa de EE.UU. para permitir la comunicación entre computadoras de distintas universidades y centros de investigación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["protocolo", "tcp_ip", "estandar"]

tipo: completar
respuestas_validas:
  - "TCP/IP"

enunciado: "Para que la red pasara de ser un conjunto de redes aisladas a una red global interconectada, se estandarizó el uso del protocolo ___."

explicacion: |
  El conjunto de protocolos TCP/IP permitió que redes heterogéneas se comunicaran entre sí, estableciendo el lenguaje común que permitió la expansión de la internet global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["world_wide_web", "tim_berners_lee", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Creación de ARPANET", "Desarrollo de la World Wide Web (WWW)", "Masificación de la internet comercial"]

enunciado: "Ordena cronológicamente los hitos clave en la evolución de la red:"

explicacion: |
  Primero surgió la infraestructura de ARPANET (años 60-70), luego Tim Berners-Lee desarrolló la WWW en el CERN (principios de los 90), y finalmente la red se convirtió en un servicio comercial masivo para el público general.
respuesta_orden: ["Creación de ARPANET", "Desarrollo de la World Wide Web (WWW)", "Masificación de la internet comercial"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["web_2.0", "globalizacion", "interaccion"]

variables:
  tipo_web: uno_de([["Web 1.0 (Estática)", "Web 2.0 (Social/Interactiva)"]])

tipo: mc
respuesta: tipo_web[1]
opciones_explicitas: ["Web 1.0 (Estática)", "Web 2.0 (Social/Interactiva)"]

enunciado: "La transición de una red de solo lectura a una red donde el usuario es creador de contenido se conoce como la era de la {tipo_web[1]}."

explicacion: |
  La Web 2.0 permitió la democratización de la creación de contenido a través de redes sociales, blogs y wikis, cambiando el paradigma de la comunicación digital.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["globalizacion", "impacto"]

tipo: completar
tolerancia_abs: 0
respuesta: 7

enunciado: "Si consideramos que la globalización digital ha reducido las distancias, ¿cuántos continentes están conectados hoy por la infraestructura de internet?"

explicacion: |
  Aunque la infraestructura no es perfecta en todas las zonas, la red de internet es considerada una red global que conecta los 7 continentes del planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["tim_berners_lee", "www"]

tipo: mc
opciones_explicitas: ["Un sistema de correo electrónico", "Un sistema de páginas e hipervínculos", "Un protocolo de transferencia de archivos", "Una red de satélites"]

enunciado: "La World Wide Web, propuesta por Tim Berners-Lee entre 1989 y 1991, se define fundamentalmente como un ___ que permitió la navegación masiva por la información."

respuesta: "Un sistema de páginas e hipervínculos"

explicacion: |
  Tim Berners-Lee desarrolló la Web para facilitar el intercambio de información entre científicos, utilizando hipervínculos para conectar documentos digitales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["protocolos", "html"]

tipo: completar
respuestas_validas:
  - "HTML"

enunciado: "Para que la Web funcione, se requiere de un lenguaje de marcado para estructurar el contenido llamado ___, un protocolo de transferencia llamado HTTP y un sistema de localización llamado URL."

respuesta: "HTML"

explicacion: |
  La arquitectura de la Web se basa en tres pilares: HTML (lenguaje), HTTP (protocolo) y URL (identificador).
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["internet_vs_web"]

tipo: mc
opciones_explicitas: ["Internet es la infraestructura y la Web es el servicio", "La Web es la infraestructura y Internet es el servicio", "Son términos sinónimos", "La Web es el hardware y Internet el software"]

enunciado: "Es fundamental distinguir que ___."

respuesta: "Internet es la infraestructura y la Web es el servicio"

explicacion: |
  Internet es la red global de redes (infraestructura de cables, routers, etc.), mientras que la Web es uno de los muchos servicios que corren sobre ella.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["navegadores", "mosaic"]

variables:
  escenario_idx: uno_de([0, 1])
  nombres: ["Mosaic", "WorldWideWeb"]
  descripcion: ["el primer navegador gráfico popular que impulsó la Web masiva", "el primer navegador desarrollado por Tim Berners-Lee"]

tipo: completar
respuestas_validas:
  - "Mosaic"
  - "WorldWideWeb"

enunciado: "En la historia de la navegación, {nombres[escenario_idx]} fue {descripcion[escenario_idx]}."

respuesta: nombres[escenario_idx]

explicacion: |
  Mosaic fue crucial para la democratización de la Web al introducir imágenes integradas, mientras que WorldWideWeb fue el primer navegador/editor de Berners-Lee.
```

```
metadata:
  materia: "historia_profucha"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

tipo: ordenar
opciones_explicitas: ["Propuesta de la Web (1989)", "Primer servidor web (1990)", "Lanzamiento de Mosaic (1993)"]

respuesta_orden: ["Propuesta de la Web (1989)", "Primer servidor web (1990)", "Lanzamiento de Mosaic (1993)"]

enunciado: "Ordena cronológicamente los hitos que marcaron el inicio y la explosión de la World Wide Web:"

explicacion: |
  Primero fue la idea teórica de Berners-Lee, luego la implementación técnica del primer servidor y finalmente la llegada de navegadores gráficos que permitieron su uso masivo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["comunicacion", "globalizacion"]

respuesta: "instantánea"
tipo: completar
respuestas_validas:
  - "instantánea"
  - "inmediata"

enunciado: "La transición de la comunicación analógica a la digital permitió que la transmisión de información entre continentes fuera de carácter ___________."

explicacion: |
  Internet eliminó las barreras temporales, permitiendo la comunicación en tiempo real, lo que es un pilar de la globalización moderna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["comercio", "economia"]

variables:
  escenario: uno_de([["Amazon", "gigante del retail"], ["Alibaba", "líder en B2B"], ["eBay", "pionero de subastas"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Amazon", "Alibaba", "eBay"]

enunciado: "El comercio electrónico permitió que empresas como {escenario[0]} ({escenario[1]}) facilitaran el acceso a mercados globales, transformando la economía mundial."

explicacion: |
  El e-commerce permitió que pequeñas y grandes empresas vendieran productos sin fronteras físicas, acelerando la integración de mercados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["redes_sociales", "sociedad"]

respuesta: "social"
tipo: mc
opciones_explicitas: ["social", "política", "económica"]

enunciado: "Más allá de lo comercial, las redes sociales crearon una nueva dimensión de interconexión de tipo ___________, permitiendo movimientos culturales transnacionales."

explicacion: |
  Las redes sociales permitieron que la cultura y las ideas se difundieran globalmente de forma orgánica, creando una identidad digital compartida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["procesos", "digitalizacion"]

respuesta_orden: ["Conectividad", "Plataformas", "Ecosistemas"]
tipo: ordenar
opciones_explicitas: ["Conectividad", "Plataformas", "Ecosistemas"]

enunciado: "Ordena cronológicamente la evolución de la digitalización en la globalización: primero la infraestructura, luego los servicios y finalmente la integración total."

explicacion: |
  La globalización digital siguió un orden: primero cables y satélites (conectividad), luego sitios web y apps (plataformas) y finalmente la integración de la vida cotidiana en la red (ecosistemas).
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["economia", "costos"]

respuesta: "cero"
tipo: completar
tolerancia_abs: 0

enunciado: "En términos teóricos de economía digital, la capacidad de replicar y transmitir información a través de internet ha tendido hacia un costo marginal de ___________."

explicacion: |
  La digitalización reduce drásticamente el costo de distribución de información, lo que permite que la globalización sea extremadamente eficiente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["brecha_digital", "desigualdad"]

respuesta: "brecha digital"
tipo: completar
respuestas_validas:
  - "brecha digital"

enunciado: "El término que describe la desigualdad en el acceso, uso y capacidades para utilizar las Tecnologías de la Información y la Comunicación (TIC) se denomina ___."

explicacion: |
  La brecha digital no solo se refiere a la falta de infraestructura física (hardware/conexión), sino también a la falta de habilidades digitales (brecha de uso) y de calidad en el aprovechamiento de la información.
```

```
metadata:
  materia: "historia_profucha"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["dimensiones", "tecnologia"]

respuesta: "Brecha de uso"
tipo: mc
opciones_explicitas: ["Brecha de acceso", "Brecha de uso", "Brecha de competencias"]

enunciado: "Cuando una persona tiene un dispositivo y conexión, pero no posee las habilidades cognitivas para navegar de forma crítica o productiva en la red, estamos ante una: ___"

explicacion: |
  La brecha de uso o de competencias se refiere a la capacidad real de transformar la información digital en conocimiento útil, independientemente de tener o no el dispositivo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["globalizacion", "desarrollo"]

variables:
  caso: uno_de([["países en desarrollo", "aumenta la desigualdad"], ["países desarrollados", "se consolida su ventaja"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["aumenta la desigualdad", "se consolida su ventaja"]

enunciado: "En el contexto de la globalización digital, la asimetría tecnológica suele provocar que, en los {caso[0]}, el efecto de la brecha tecnológica sea que:"

explicacion: |
  La globalización digital puede actuar como un motor de desarrollo o como un mecanismo de exclusión, dependiendo de la capacidad de integración tecnológica de cada nación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["factores", "sociedad"]

respuesta: "Todas las anteriores"
tipo: mc
opciones_explicitas: ["Geográfica", "Económica", "Social", "Todas las anteriores"]

enunciado: "¿Cuál de los siguientes factores es un determinante clave en la creación de la brecha digital?"

pasos:
  - "Analizar la infraestructura disponible en la zona."
  - "Considerar el poder adquisitivo de la población."
  - "Evaluar el nivel educativo y acceso a servicios básicos."

explicacion: |
  La brecha digital es un fenómeno multidimensional que involucra factores geográficos (zonas rurales vs urbanas), económicos (costo de equipos/datos) y sociales (educación).
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["evolucion", "historia"]

respuesta_orden: ["Brecha de infraestructura", "Brecha de acceso", "Brecha de uso", "Brecha de apropiación"]
tipo: ordenar
opciones_explicitas: ["Brecha de infraestructura", "Brecha de acceso", "Brecha de uso", "Brecha de apropiación"]

enunciado: "Ordena cronológicamente las etapas en las que se ha manifestado la brecha digital a medida que la tecnología avanzaba en la sociedad global:"

explicacion: |
  Primero la brecha se centraba en la existencia de cables y redes (infraestructura), luego en quién podía pagar el servicio (acceso), después en quién sabía usarlo (uso) y finalmente en quién puede generar valor con ello (apropiación).
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["arpanet", "historia"]

variables:
  datos: [["ARPANET", "1969"], ["TCP/IP", "1983"], ["WWW", "1989"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1969", "1983", "1989"]

enunciado: "El hito tecnológico representado por {datos[idx][0]} ocurrió en el año ___."

explicacion: |
  El año de {datos[idx][0]} marcó un punto de inflexión en la historia de las telecomunicaciones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["protocolos", "tcp_ip"]

variables:
  datos: [["TCP/IP", "estandarizar la comunicación"], ["HTTP", "navegar por la web"], ["DNS", "resolver nombres"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "estandarizar la comunicación"
  - "navegar por la web"
  - "resolver nombres"

enunciado: "La implementación de {datos[idx][0]} tuvo como objetivo principal ___."

explicacion: |
  {datos[idx][0]} fue fundamental para el funcionamiento de la red tal como la conocemos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["web", "tim_berners_lee"]

variables:
  datos: [["La creación de la World Wide Web", "Tim Berners-Lee"], ["La llegada de Google", "Larry Page"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Tim Berners-Lee", "Larry Page"]

enunciado: "¿Quién es el autor de {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]} fue impulsada por {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["ordenar", "historia"]

variables:
  secuencia: [["ARPANET", "TCP/IP", "WWW", "Redes Sociales"]]

respuesta_orden: secuencia[0]
tipo: ordenar
opciones_explicitas: ["ARPANET", "TCP/IP", "WWW", "Redes Sociales"]

enunciado: "Ordena cronológicamente los siguientes hitos de la era digital:"

pasos:
  - "Identifica el primer paquete de datos enviado."
  - "Ubica la estandarización de protocolos."
  - "Ubica la creación de la web."
  - "Ubica el auge de la interacción social."

explicacion: |
  El orden correcto refleja la evolución desde la infraestructura militar hasta la cultura social.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["tecnologia", "acceso"]

variables:
  datos: [["Dial-up", "lenta"], ["Banda Ancha", "rápida"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "lenta"
  - "rápida"

enunciado: "La conexión de tipo {datos[idx][0]} se caracterizaba por ser ___."

explicacion: |
  La transición hacia la {datos[idx][0]} transformó el consumo de contenido global.
```

## Sección: islam-y-expansion-arabe (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["hegira", "medina", "calendario"]
tipo: completar
enunciado: "En el año 622 d.C., Mahoma y sus seguidores emigraron de La Meca a una ciudad que se convertiría en el primer estado islámico. Este acontecimiento, conocido como la Hégira, marcó el inicio del calendario ____."
respuesta: "islámico"
respuestas_validas:
  - "islámico"
  - "islamico"
  - "calendario islámico"
  - "calendario islamico"
explicacion: "La Hégira (622 d.C.) es el punto de partida del calendario musulmán (Hijri), ya que marca el momento en que la comunidad musulmana dejó de ser perseguida para establecerse políticamente en Medina."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["califas", "abubakar", "sucesión"]
tipo: mc
enunciado: "Tras la muerte de Mahoma en 632, quién fue el primer líder (Califa) elegido por la comunidad en Medina, iniciando el período de los \"Rashidun\" o bien guiados?"
opciones_explicitas:
  - "Omar ibn al-Jattab"
  - "Abu Bakr"
  - "Uthman ibn Affan"
  - "Ali ibn Abi Talib"
respuesta: "Abu Bakr"
explicacion: "Abu Bakr, suegro de Mahoma y uno de los primeros conversos, fue elegido califa, consolidando la autoridad política sobre las tribus árabes que habían apostatado tras la muerte del Profeta."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["batallas", "bizantinos", "siria"]
tipo: vf
enunciado: "La Batalla de Yarmuk, librada en 636, fue un enfrentamiento decisivo donde los ejércitos árabes musulmanes derrotaron a las fuerzas del Imperio Bizantino, facilitando la conquista de Siria."
respuesta: verdadero
explicacion: "La victoria en Yarmuk permitió a los musulmanes tomar Damasco y luego Jerusalén, expulsando la influencia bizantina de la región del Levante."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["persia", "sasánidas", "qadisiya"]
tipo: mc
enunciado: "¿Qué batalla, librada en 636, marcó el comienzo del fin del Imperio Sasánida (persa) ante la expansión árabe, permitiendo la futura caída de Ctesifonte?"
opciones_explicitas:
  - "Batalla de Nihawand"
  - "Batalla de al-Qadisiyyah"
  - "Batalla de Jalaba"
  - "Sitio de Ctesifonte"
respuesta: "Batalla de al-Qadisiyyah"
explicacion: "La Batalla de al-Qadisiyyah fue el punto de inflexión donde el general sa'd ibn Abi Waqqas derrotó al ejército sasánida liderado por Rostam Farrokhzad, abriendo el camino hacia el corazón de Persia."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["omeyas", "damaesco", "dinastía"]
tipo: completar
enunciado: "En 661, Muawiya I estableció el Califato Omeya y trasladó la capital del islam desde Medina y luego Kufa a la antigua ciudad siria de ____."
respuesta: "damasco"
respuestas_validas:
  - "damasco"
  - "Damasco"
  - "la ciudad de damasco"
explicacion: "El traslado de la capital a Damasco reflejó el cambio del califato de una estructura tribal árabe centrada en la península a un imperio burocrático de corte helenístico-romano."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["europa", "francos", "732"]
tipo: mc
enunciado: "En 732, quién detuvo el avance de las fuerzas omeyas desde la Península Ibérica hacia el norte de Francia en la Batalla de Poitiers (o Tours)?"
opciones_explicitas:
  - "Carlomagno"
  - "Carlos Martel"
  - "Pipino el Breve"
  - "Clovis I"
respuesta: "Carlos Martel"
explicacion: "Carlos Martel, mayordomo de palacio del reino merovingio, lideró a los francos en una victoria crucial que frenó la expansión musulmana más allá de los Alpes, aunque la presencia islámica en al-Ándalus continuó."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["mawalli", "desigualdad", "omeyas"]
tipo: completar
enunciado: "La creciente tensión por la discriminación fiscal y social hacia los nuevos conversos no árabes, conocidos como ____, fue una de las causas internas que debilitaron al Califato Omeya."
respuesta: "mawalli"
respuestas_validas:
  - "mawalli"
  - "mawali"
  - "los mawalli"
explicacion: "Los mawalli (clientes) sentían que, pese a su conversión al islam, seguían siendo tratados como ciudadanos de segunda clase frente a la élite árabe omeya, lo que generó malestar social generalizado."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["abasíes", "bagdad", "golden age"]
tipo: mc
enunciado: "¿Qué califa abasí fundó la ciudad de Bagdad como nueva capital en 762, convirtiéndola en un centro mundial de ciencia, comercio y cultura?"
opciones_explicitas:
  - "Harún al-Rashid"
  - "Al-Mansur"
  - "Al-Ma'mun"
  - "Abu'l-Abbas al-Saffah"
respuesta: "Al-Mansur"
explicacion: "Al-Mansur, el segundo califa abasí, fundó Bagdad (\"La Paz\") estratégicamente para centralizar el poder y alejarse de la influencia política de la antigua capital omeya en Damasco."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["meca", "paz", "mahoma"]
tipo: vf
enunciado: "El Tratado de Hudaibiya fue un conflicto militar directo que terminó con la conquista inmediata de La Meca por la fuerza en el mismo año de su firma."
respuesta: falso
explicacion: "El Tratado de Hudaibiya (628) fue un armisticio de 10 años entre Mahoma y los Quraysh de La Meca. Aunque parecía desfavorable al principio, permitió la propagación pacífica del islam y llevó a la conquista posterior sin lucha mayor."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["egipto", "amr ibn al-as", "bizantinos"]
tipo: completar
enunciado: "Bajo el califato de Omar, el general árabe ____ conquistó Egipto a los bizantinos entre 639 y 642, fundando Fustat como la primera capital musulmana en la región."
respuesta: "amr ibn al-as"
respuestas_validas:
  - "amr ibn al-as"
  - "Amr ibn al-As"
  - "Amr"
  - "el general amr"
explicacion: "Amr ibn al-As lideró la invasión de Egipto, derrotando a las guarniciones bizantinas y estableciendo Fustat (actualmente parte del Cairo), lo que integró la rica región agrícola al califato."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["fitna", "chiismo", "sunismo"]
tipo: mc
enunciado: "La Primera Fitna (guerra civil islámica) estalló principalmente por el desacuerdo sobre la sucesión legítima tras el asesinato de Uthman, enfrentando a qué dos figuras clave?"
opciones_explicitas:
  - "Muawiya y Ali"
  - "Hasan y Husayn"
  - "Abdullah y Aisha"
  - "Omar y Abu Bakr"
respuesta: "Muawiya y Ali"
explicacion: "La Primera Fitna (656-661) fue una guerra civil entre el califa Ali ibn Abi Talib y el gobernador de Siria, Muawiya ibn Abi Sufyan, lo que consolidó la división suní-chí."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["india", "mohammad bin qasim", "sindh"]
tipo: completar
enunciado: "En 711, el general omeya ____ lideró la incursión militar que estableció el control musulmán en la región de Sindh (actual Pakistán), abriendo la puerta al islam en el subcontinente indio."
respuesta: "mohammad bin qasim"
respuestas_validas:
  - "mohammad bin qasim"
  - "Muhammad bin Qasim"
  - "mahmud de ghazni (incorrecto pero distractor común, no usar aquí) -> corregir a: qasim"
  - "muhammad bin qasim"
explicacion: "Muhammad bin Qasim, joven general nombrado por el califa omeya Al-Walid I, conquistó Sindh y Multán, extendiendo las fronteras del islam más allá de Persia."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["talas", "china", "papel"]
tipo: mc
enunciado: "La Batalla de Talas (751) contra la Dinastía Tang china es históricamente notable no solo por la frontera geopolítica, sino porque facilitó la transferencia de qué tecnología crucial al mundo islámico?"
opciones_explicitas:
  - "La brújula"
  - "La pólvora"
  - "La fabricación de papel"
  - "La imprenta de tipos móviles"
respuesta: "La fabricación de papel"
explicacion: "Los prisioneros chinos capturados en Talas enseñaron la técnica de fabricación de papel a los árabes, lo que revolucionó la administración y la preservación del conocimiento en el Califato Abasí."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["meca", "kaaba", "pilgrimage"]
tipo: vf
enunciado: "Antes de la revelación islámica, La Meca era un centro comercial y religioso politeísta donde la Kaaba albergaba ídolos de diversas tribus árabes."
respuesta: verdadero
explicacion: "La Kaaba era un santuario preislámico que contenía cientos de ídolos tribales. Mahoma limpió la Kaaba de estos ídolos tras la conquista de La Meca en 630, dedicándola al culto monoteísta a Alá."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["andalus", "córdoba", "abderramán i"]
tipo: mc
enunciado: "Tras la caída de Damasco ante los abasíes, qué miembro de la familia omeya logró huir a la Península Ibérica y establecer el Emirato (luego Califato) independiente de Córdoba?"
opciones_explicitas:
  - "Abderramán I"
  - "Almanzor"
  - "Tariq ibn Ziyad"
  - "Abderramán III"
respuesta: "Abderramán I"
explicacion: "Abderramán I, el \"Zagui\" (el solitario), huyó de la masacre de los omeyas por los abasíes y se refugió en al-Ándalus, fundando la dinastía omeya de Córdoba en 756."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["badr", "meca", "primer enfrentamiento"]
tipo: completar
enunciado: "La Batalla de Badr (624) fue el primer gran enfrentamiento militar entre los musulmanes de Medina y las fuerzas de ____, marcando un giro crucial en la supervivencia de la nueva comunidad."
respuesta: "mecenses"
respuestas_validas:
  - "mecenses"
  - "los mecenses"
  - "los Quraysh"
  - "los coraixitas"
explicacion: "Aunque los musulmanes estaban en minoría, su victoria en Badr contra los Quraysh de La Meca consolidó la autoridad política y militar de Mahoma en la región."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["quran", "revelación", "texto sagrado"]
tipo: mc
enunciado: "¿Cómo se denomina el libro sagrado del islam, considerado por los musulmanes la palabra literal de Dios revelada a Mahoma a través del arcángel Gabriel?"
opciones_explicitas:
  - "La Torá"
  - "La Biblia"
  - "El Corán"
  - "El Vedas"
respuesta: "El Corán"
explicacion: "El Corán es la fuente primaria de la ley islámica (Sharia) y la guía espiritual, compilado en su forma estandarizada bajo el califa Uthman."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["iberia", "tariq", "gibraltar"]
tipo: completar
enunciado: "En 711, el general bereber ____ cruzó el estrecho que lleva su nombre (Jabal Tariq) para iniciar la conquista musulmana de la Península Ibérica."
respuesta: "tariq ibn ziyad"
respuestas_validas:
  - "tariq ibn ziyad"
  - "Tariq ibn Ziyad"
  - "tariq"
  - "el general tariq"
explicacion: "Tariq ibn Ziyad, bajo las órdenes del gobernador omeya de Ifriqiya, Musa ibn Nusayr, lideró el desembarco que derrotó al rey visigodo Roderico en la Batalla del Guadalete."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["bagdad", "traducción", "sabiduría"]
tipo: mc
enunciado: "Durante la Edad de Oro del islam, qué institución en Bagdad fue fundamental para traducir obras griegas, persas e indias al árabe, preservando el conocimiento clásico?"
opciones_explicitas:
  - "La Universidad de Al-Qarawiyyin"
  - "La Casa de la Sabiduría (Bayt al-Hikma)"
  - "La Mezquita de Al-Azhar"
  - "El Palacio de la Alhambra"
respuesta: "La Casa de la Sabiduría (Bayt al-Hikma)"
explicacion: "La Bayt al-Hikma, patrocinada por califas como Harún al-Rashid y Al-Ma'mun, fue el centro intelectual donde se tradujeron obras de Aristóteles, Platón y otros, influyendo posteriormente en la Europa medieval."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["chiismo", "hasan", "renuncia"]
tipo: vf
enunciado: "Hasan ibn Ali, nieto de Mahoma y segundo califa chií, abdicó del califato ante Muawiya I tras un conflicto interno, poniendo fin al período Rashidun según la perspectiva suní."
respuesta: verdadero
explicacion: "La abdicación de Hasan en 661 fue un acto político para evitar más sangre entre los musulmanes, reconociendo a Muawiya como califa, aunque los chiíes consideran a Hasan y Husayn los legítimos sucesores."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["jerusalén", "derechos", "dhimmi"]
tipo: completar
enunciado: "Al rendirse Jerusalén ante los musulmanes en 637, el califa Omar otorgó a los cristianos lo que se conoce como la ____, garantizando protección a cambio del pago de un impuesto especial."
respuesta: "promesa de umar"
respuestas_validas:
  - "promesa de umar"
  - "Pacto de Umar"
  - "pacto de umar"
  - "promessa de umar"
explicacion: "El Pacto de Umar estableció el estatus de \"dhimmi\" (gente del libro protegida) para los no musulmanes en los territorios conquistados, permitiéndoles practicar su religión bajo ciertas restricciones y pagos."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["persia", "fin sasánida", "642"]
tipo: mc
enunciado: "Conocida como la \"de las derrotas\", qué batalla en 642 selló el colapso final del Imperio Sasánida y permitió la completa islamización de Persia?"
opciones_explicitas:
  - "Batalla de al-Qadisiyyah"
  - "Batalla de Nihawand"
  - "Batalla de Nahavand"
  - "Sitio de Ctesifonte"
respuesta: "Batalla de Nihawand"
explicacion: "La Batalla de Nihawand fue la última gran batalla entre los sasánidas y los árabes musulmanes. La victoria árabe aquí hizo insostenible la resistencia sasánida organizada, llevando a la disolución del impero."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["meca", "qibla", "dirección"]
tipo: completar
enunciado: "Antes de la revelación que ordenó cambiar la dirección de la oración (qibla), los musulmanes oraban facing hacia ____, en línea con la tradición abrahámica judeocristiana."
respuesta: "jerusalén"
respuestas_validas:
  - "jerusalén"
  - "Jerusalén"
  - "hacia jerusalén"
  - "la ciudad santa"
explicacion: "Inicialmente, la qibla de los musulmanes era Jerusalén. Posteriormente, se cambió a La Meca (la Kaaba) para distinguir a la comunidad islámica y conectarla con el legado de Ibrahim (Abraham)."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["fatimíes", "cairo", "chiismo ismailí"]
tipo: mc
enunciado: "¿Qué dinastía chií ismailí fundó El Cairo en 969 y desafió la autoridad abasí en Bagdad estableciendo su propio califato en el norte de África y Egipto?"
opciones_explicitas:
  - "Los Omeyas de Córdoba"
  - "Los Fatimíes"
  - "Los Almorávides"
  - "Los Almohades"
respuesta: "Los Fatimíes"
explicacion: "Los Fatimíes, descendientes de Fatima (hija de Mahoma), establecieron un califato rival en El Cairo, fundando la Universidad de Al-Azhar y promoviendo el chiismo ismailí."
```

```
metadata:
  materia: "historia_profunda"
  tema: "islam-y-expansion-arabe"
  nivel: "intermedio"
  tags: ["peste", "declive", "siglo xiv"]
tipo: vf
enunciado: "La llegada de la Peste Negra en el siglo XIV afectó severamente a los territorios del mundo islámico, contribuyendo a la crisis demográfica y económica que debilitó a grandes imperios como el Mameluco y el Ilkanato."
respuesta: verdadero
explicacion: "La peste negra diezmó la población en Egipto, Siria e Irán, debilitando la base fiscal y militar de los estados islámicos de la época, facilitando posteriormente su declive o conquista por otras potencias."
```

## Sección: ley-de-hubble (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "cosmologia"]

respuesta: "alejamiento"
tipo: completar
respuestas_validas:
  - "alejamiento"
  - "expansión"

enunciado: "La Ley de Hubble establece que la velocidad de ___ de las galaxias es proporcional a su distancia respecto a la Tierra."

explicacion: |
  La ley de Hubble-Lemaître indica que cuanto más lejana es una galaxia, mayor es la velocidad con la que se aleja de nosotros, lo que sugiere la expansión del universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Si una galaxia A está al doble de distancia que una galaxia B, según la Ley de Hubble, la velocidad de la galaxia A será ___ que la de la galaxia B."

explicacion: |
  Como la velocidad es directamente proporcional a la distancia ($v \propto d$), si la distancia se duplica, la velocidad también se duplica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  distancia: 100000000
  hubble: 70

respuesta: 7000000000
tipo: completar
tolerancia_abs: 1

enunciado: "Una galaxia se encuentra a una distancia de {distancia} Mpc. Si la constante de Hubble es $H_0 = {hubble}$ km/s/Mpc, ¿cuál es la velocidad de recesión en km/s? (Usa la fórmula $v = H_0 \\cdot d$)"

pasos:
  - "Identificar la distancia ($d$) y la constante de Hubble ($H_0$)."
  - "Multiplicar la constante de Hubble por la distancia: $v = 70 \\cdot 100.000.000$."

explicacion: |
  Aplicando la fórmula $v = H_0 \cdot d$: $70 \times 100.000.000 = 7.000.000.000$ km/s.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["formula"]

respuesta: "distancia"
tipo: completar
respuestas_validas:
  - "distancia"
  - "velocidad"
  - "constante"

enunciado: "En la expresión matemática $v = H_0 \\cdot d$, la variable $d$ representa la ___ de la galaxia."

explicacion: |
  En la ecuación de Hubble, $v$ es la velocidad de recesión, $H_0$ es la constante de Hubble y $d$ es la distancia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["teoria"]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que la Ley de Hubble implica que el universo se está expandiendo?"

explicacion: |
  Sí, el hecho de que todas las galaxias presenten un corrimiento al rojo (redshift) proporcional a su distancia es la evidencia fundamental de la expansión del tejido espacio-temporal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "hubble", "expansion"]

respuesta: "expansión"
tipo: completar
respuestas_validas:
  - "expansión"
  - "expansion"

enunciado: "En 1929, Edwin Hubble observó que las galaxias lejanas se alejan de nosotros, lo que proporcionó evidencia fundamental de la ___ del universo."

explicacion: |
  Hubble descubrió que el universo no es estático, sino que está en constante expansión, lo que cambió nuestra comprensión del cosmos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["ley_de_hubble", "velocidad", "distancia"]

variables:
  escenario: uno_de([["10 Mpc", "200 km/s"], ["20 Mpc", "400 km/s"], ["50 Mpc", "1000 km/s"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["100 km/s", "200 km/s", "300 km/s", "400 km/s", "1000 km/s"]

enunciado: "Si aplicamos la lógica de la Ley de Hubble, donde la velocidad de recesión es proporcional a la distancia, ¿cuál es la velocidad aproximada de una galaxia situada a {escenario[0]} de distancia?"

pasos:
  - "Identificar la distancia proporcionada."
  - "Relacionar la distancia con la velocidad según el escenario asignado."

explicacion: |
  La Ley de Hubble establece que $v = H_0 \cdot d$. En este ejercicio, se ha asignado un valor de velocidad proporcional a la distancia dada en el escenario.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["efecto_doppler", "redshift"]

respuesta: "corrimiento al rojo"
tipo: completar
respuestas_validas:
  - "corrimiento al rojo"
  - "redshift"

enunciado: "El fenómeno mediante el cual la luz de las galaxias lejanas se desplaza hacia longitudes de onda más largas debido al alejamiento es conocido como ___."

explicacion: |
  Este fenómeno, llamado 'redshift' o corrimiento al rojo, es la base observacional que permitió a Hubble concluir que las galaxias se alejan.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["cosmologia", "modelo_estatico"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Antes de los descubrimientos de Hubble, la creencia predominante en la comunidad científica era que el universo era estático. ¿Es correcto afirmar que la Ley de Hubble refuta esta idea? "

explicacion: |
  Correcto. La observación de que las galaxias se alejan invalidó el modelo de un universo estático y dio paso al modelo del Big Bang.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["metodologia", "evidencia"]

respuesta_orden: ["observación del redshift", "cálculo de la velocidad de recesión", "conclusión de la expansión universal"]
tipo: ordenar
opciones_explicitas: ["observación del redshift", "cálculo de la velocidad de recesión", "conclusión de la expansión universal"]

enunciado: "Ordena cronológicamente los pasos lógicos que llevaron a Hubble a concluir la expansión del universo:"

pasos:
  - "Detectar el cambio de color en el espectro de las galaxias."
  - "Determinar qué tan rápido se alejan según su distancia."
  - "Deducir que el espacio mismo se está expandiendo."

explicacion: |
  Primero se observa el desplazamiento espectral (redshift), luego se cuantifica la velocidad de alejamiento y finalmente se interpreta como una expansión del tejido del universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "cosmologia"]

enunciado: "Según la Ley de Hubble, la velocidad de alejamiento (v) de una galaxia es directamente proporcional a su distancia (d). Esto se expresa mediante la fórmula v = H0 * d. Si una galaxia se encuentra a una distancia mayor, su velocidad de alejamiento será ___."

opciones_explicitas: ["menor", "mayor", "igual", "nula"]
respuesta: "mayor"
tipo: "mc"

explicacion: |
  La Ley de Hubble establece una relación de proporcionalidad directa: a mayor distancia, mayor es la velocidad con la que la galaxia se aleja de nosotros.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["calculo", "astronomia"]

variables:
  distancia_m: 100000000
  h0_valor: 70

enunciado: "Utilizando una constante de Hubble H0 de {h0_valor} km/s/Mpc, calcula la velocidad de alejamiento de una galaxia situada a {distancia_m} Mpc."

pasos:
  - "Identificar la constante H0: 70 km/s/Mpc"
  - "Identificar la distancia: 100,000,000 Mpc"
  - "Multiplicar H0 por la distancia: 70 * 100,000,000"

respuesta: 7000000000
tipo: "input"
tolerancia_abs: 0

explicacion: |
  La velocidad se obtiene multiplicando la constante de Hubble por la distancia: 70 * 10^8 = 7 * 10^9 km/s.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["cosmologia", "tiempo"]

variables:
  datos: [[70, "13.8"], [50, "20.0"]]
  idx: uno_de([0, 1])
  h0: datos[idx][0]
  edad: datos[idx][1]

enunciado: "La edad aproximada del universo se puede estimar mediante el inverso de la constante de Hubble (1/H0). Si tomamos un valor de H0 de {h0} km/s/Mpc, la edad estimada es de aproximadamente ___ miles de millones de años."

respuestas_validas:
  - "13.8"
  - "20.0"
respuesta: edad
tipo: "completar"

explicacion: |
  El tiempo estimado (edad del universo) es inversamente proporcional a H0. A mayor valor de la constante, menor es la edad estimada del universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Ordena los elementos según la lógica de la expansión del universo descrita por Edwin Hubble, desde la causa hasta el efecto observado:"

opciones_explicitas: ["Expansión del espacio", "Aumento de la distancia entre galaxias", "Aumento de la velocidad de alejamiento"]
respuesta_orden: ["Expansión del espacio", "Aumento de la distancia entre galaxias", "Aumento de la velocidad de alejamiento"]
tipo: "ordenar"

explicacion: |
  La expansión del espacio provoca que las galaxias se alejen (aumenta la distancia), lo cual se traduce en una velocidad de alejamiento mayor según la Ley de Hubble.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "¿Es correcto afirmar que si la constante de Hubble (H0) fuera mayor, el universo sería más joven?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: "mc"

explicacion: |
  Verdadero. Como la edad es aproximadamente 1/H0, un valor de H0 más grande implica un tiempo (edad) menor.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["cosmologia", "hubble", "observacion"]

respuesta: "principio_cosmologico"
tipo: mc

opciones_explicitas: ["principio_cosmologico", "teoria_geocentrica", "teoria_estatica", "modelo_de_hubble"]

enunciado: "El hecho de que todas las galaxias parezcan alejarse de nosotros debido a la expansión del universo no significa que la Tierra sea el centro. Este concepto de que el universo se ve igual para cualquier observador está ligado al..."

explicacion: |
  El principio cosmológico establece que, a gran escala, el universo es homogéneo e isotrópico. La expansión es una propiedad del espacio mismo, por lo que cualquier observador en cualquier galaxia vería el mismo efecto de alejamiento.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["expansion", "observacion"]

respuesta: "se alejan"
tipo: completar

respuestas_validas:
  - "se alejan"
  - "se acercan"
  - "estacionarias"

enunciado: "Si un observador se situara en una galaxia muy lejana, en lugar de la Tierra, vería que las demás galaxias del universo ___ de la misma forma que nosotros."

explicacion: |
  La expansión del universo no es una explosión que ocurre desde un punto central, sino una expansión del tejido mismo del espacio. Por lo tanto, desde cualquier punto, la observación es la misma.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["geometria", "espacio"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]
enunciado: "¿Es correcto afirmar que la Ley de Hubble implica que existe un punto central en el universo desde el cual todas las galaxias se expanden en forma radial, situando a la Tierra en un lugar privilegiado?"

explicacion: |
  Falso. La expansión es local en cada punto del espacio. Es similar a la superficie de un globo inflándose: todos los puntos se alejan de todos los demás, sin que haya un centro en la superficie.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["isotropia", "observador"]

respuesta: "isotropico"
tipo: completar

respuestas_validas:
  - "isotropico"
  - "anisotropico"
  - "central"

enunciado: "Debido a la naturaleza de la expansión, el universo es ___ para cualquier observador, ya sea uno situado en la Vía Láctea o uno en una galaxia lejana, lo que significa que las leyes físicas y la apariencia de la expansión no dependen de la posición del observador."

explicacion: |
  La isotropía significa que las propiedades del universo son las mismas en todas las direcciones. Esto garantiza que no haya un "centro" observable.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["logica", "historia"]

opciones_explicitas: ["observacion_galaxias", "conclusion_expansion", "implicacion_no_centro"]
respuesta_orden: ["observacion_galaxias", "conclusion_expansion", "implicacion_no_centro"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que llevaron a la comprensión moderna del universo tras el descubrimiento de Hubble:"

pasos:
  - "Se observa el corrimiento al rojo en galaxias lejanas."
  - "Se concluye que el universo se está expandiendo."
  - "Se comprende que la expansión es una propiedad del espacio y no un alejamiento desde un centro."

explicacion: |
  Primero se detecta el fenómeno (redshift), luego se interpreta como expansión y finalmente se entiende que esto no requiere un centro geométrico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "calculo"]

variables:
  escenario: uno_de([[10, 70], [25, 75], [50, 65]])
  distancia: escenario[0]
  h0: escenario[1]
  velocidad: distancia * h0

respuesta: velocidad
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una galaxia se encuentra a una distancia de {distancia} Mpc. Si la constante de Hubble es H0 = {h0} (km/s)/Mpc, ¿cuál es su velocidad de alejamiento en km/s?"

explicacion: |
  Según la Ley de Hubble: v = H0 * d.
  En este caso: {distancia} * {h0} = {velocidad} km/s.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "tasa de expansión"
tipo: completar
respuestas_validas:
  - "tasa de expansión"
  - "velocidad de la luz"
  - "masa galáctica"

enunciado: "La constante de Hubble representa la ___ del universo."

explicacion: |
  La constante de Hubble (H0) mide qué tan rápido se expande el universo en relación a la distancia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["conceptos", "observacion"]

respuesta: "se aleja"
tipo: mc
opciones_explicitas: ["se acerca", "se aleja", "está estática", "colapsa"]

enunciado: "Si observamos un redshift (desplazamiento al rojo) en una galaxia, según la Ley de Hubble, esto indica que la galaxia ___ de nosotros."

explicacion: |
  El redshift es la prueba observacional de que las galaxias se están alejando, lo cual es la base de la expansión del universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["calculo", "inverso"]

respuesta: 20
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una galaxia tiene una velocidad de alejamiento de 1400 km/s y asumimos una constante de Hubble de 70 (km/s)/Mpc, ¿a qué distancia se encuentra en Mpc?"

pasos:
  - "Identificar la velocidad (v) y la constante (H0)."
  - "Despejar la distancia de la fórmula v = H0 * d, obteniendo d = v / H0."

explicacion: |
  Para hallar la distancia, dividimos la velocidad por la constante de Hubble: 1400 / 70 = 20 Mpc.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta_orden: ["Observación de Redshift", "Cálculo de Velocidad", "Aplicación de Ley de Hubble"]
tipo: ordenar
opciones_explicitas: ["Observación de Redshift", "Cálculo de Velocidad", "Aplicación de Ley de Hubble"]

enunciado: "Ordena los pasos lógicos para determinar la distancia de una galaxia usando la Ley de Hubble a partir de la observación astronómica."

explicacion: |
  Primero se observa el desplazamiento (redshift), luego se calcula la velocidad a partir de ese desplazamiento y finalmente se usa la Ley de Hubble para hallar la distancia.
```

## Sección: materia-energia-oscura (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["materia_oscura", "luz", "gravedad"]

respuesta: "invisible"
tipo: completar
respuestas_validas:
  - "invisible"

enunciado: "Debido a que la materia oscura no emite, refleja ni absorbe radiación electromagnética, su naturaleza es ___________ para nuestros instrumentos ópticos tradicionales."

explicacion: |
  La materia oscura es invisible al espectro electromagnético (luz, radio, rayos X, etc.), lo que impide su detección directa mediante telescopios convencionales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["galaxias", "rotación", "gravedad"]

respuesta: "La velocidad de rotación se mantiene constante o aumenta en la periferia"
tipo: mc
opciones_explicitas: ["La velocidad de rotación disminuye conforme nos alejamos del centro", "La velocidad de rotación se mantiene constante o aumenta en la periferia", "Las galaxias colapsarían por falta de masa", "La gravedad es nula en los bordes de la galaxia"]

enunciado: "Al observar las curvas de rotación de las galaxias espirales, se detecta que las estrellas en la periferia se mueven a una velocidad que contradice la masa visible. ¿Cuál es la observación real?"

explicacion: |
  Si solo existiera la materia visible, las estrellas externas deberían girar más lento. El hecho de que mantengan velocidades altas sugiere la presencia de una masa adicional (materia oscura) que proporciona la gravedad necesaria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["gravedad", "masa"]

respuesta: "gravitacionales"
tipo: completar
respuestas_validas:
  - "gravitacionales"

enunciado: "Dado que no podemos ver la materia oscura, su existencia se infiere únicamente a través de sus efectos ___________ sobre la materia bariónica (visible)."

explicacion: |
  La materia oscura interactúa principalmente a través de la gravedad, alterando el movimiento de las estrellas y la luz (lentes gravitacionales).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["composición", "universo"]

respuesta: "Materia oscura"
tipo: mc
opciones_explicitas: ["Materia bariónica", "Materia oscura", "Energía oscura", "Radiación de fondo"]

enunciado: "La masa adicional necesaria para explicar la cohesión de los cúmulos de galaxias y las curvas de rotación galáctica se conoce como ___________."

explicacion: |
  La materia oscura constituye aproximadamente el 27% del universo, mientras que la materia ordinaria (bariónica) es solo un 5%.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["metodología", "evidencia"]

respuesta: "masa_visible"
tipo: completar
respuestas_validas:
  - "masa_visible"

enunciado: "La discrepancia observada entre la velocidad de rotación galáctica y la cantidad de ___ es la principal prueba de la existencia de la materia oscura."

explicacion: |
  La falta de masa visible suficiente para explicar la velocidad de las galaxias es la evidencia fundamental que llevó a la hipótesis de la materia oscura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "expansion_universo"]

tipo: mc
opciones_explicitas: ["Materia oscura", "Energía oscura", "Materia bariónica", "Radiación cósmica"]
respuesta: "Energía oscura"

enunciado: "A finales de la década de 1990, se descubrió que el universo no solo se expande, sino que lo hace de forma acelerada. El fenómeno responsable de esta aceleración es la ________."

explicacion: |
  La energía oscura es una forma de energía que permea todo el espacio y actúa como una fuerza repulsiva que acelera la expansión del universo, diferenciándose de la materia oscura que actúa principalmente mediante la gravedad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["hitos", "astronomia"]

variables:
  idx: uno_de([0, 1])
  escenario: [[1998, "el descubrimiento de la expansión acelerada"], [2011, "el otorgamiento del Premio Nobel de Física por dicho descubrimiento"]]

tipo: completar
respuestas_validas:
  - "1998"
  - "2011"

enunciado: "La evidencia observacional que cambió la cosmología moderna y señaló la existencia de la energía oscura fue publicada en el año {escenario[idx][0]}, marcando {escenario[idx][1]}."

explicacion: |
  En 1998, las observaciones de supernovas lejanas demostraron que la expansión del universo se está acelerando, lo que llevó a la inclusión de la energía oscura en el modelo estándar de la cosmología.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["materia_oscura", "energia_oscura"]

tipo: mc
opciones_explicitas: ["Atrae la materia mediante gravedad", "Repele el espacio mediante presión negativa", "Es visible mediante espectroscopia", "Es una partícula subatómica conocida"]
respuesta: "Repele el espacio mediante presión negativa"

enunciado: "Mientras que la materia oscura ejerce una atracción gravitatoria que ayuda a la formación de estructuras, la energía oscura se caracteriza por su capacidad de ________."

explicacion: |
  La energía oscura posee una presión negativa que contrarresta la gravedad a escalas cosmogónicas, provocando que la expansión del universo sea acelerada en lugar de frenarse.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["teoria", "futuro_universo"]

tipo: mc
opciones_explicitas: ["Big Crunch", "Big Freeze", "Big Bounce", "Punto de equilibrio"]
respuesta: "Big Freeze"

enunciado: "Si la energía oscura continúa dominando la expansión del universo de manera constante, el escenario más probable para el destino final del cosmos es el ________."

explicacion: |
  El 'Big Freeze' (Gran Congelamiento) ocurre cuando la expansión es tan rápida que las galaxias se alejan tanto que el universo se enfría hasta alcanzar un estado de entropía máxima donde no puede haber más procesos físicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

tipo: ordenar
opciones_explicitas: ["Modelo de materia oscura fría", "Descubrimiento de la expansión acelerada", "Aceptación del modelo Lambda-CDM"]

respuesta_orden: ["Modelo de materia oscura fría", "Descubrimiento de la expansión acelerada", "Aceptación del modelo Lambda-CDM"]

enunciado: "Ordena cronológicamente estos hitos que permitieron consolidar la visión actual del universo dominado por componentes oscuros:"

explicacion: |
  Primero se postuló la existencia de la materia oscura para explicar la rotación galáctica; en 1998 se descubrió la aceleración (energía oscura); finalmente, esto llevó a la adopción del modelo Lambda-CDM (materia oscura fría + constante cosmológica/energía oscura).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "composicion"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["5%", "materia ordinaria"], ["27%", "materia oscura"], ["68%", "energía oscura"]]

opciones_explicitas: ["5%", "27%", "68%"]
respuesta: datos[idx][0]
tipo: mc

enunciado: "Según el modelo estándar de la cosmología, la fracción del universo compuesta por {datos[idx][1]} es aproximadamente del ___."

explicacion: |
  La composición estimada del universo es: 5% materia ordinaria, 27% materia oscura y 68% energía oscura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["energia_oscura"]

respuesta: "energía oscura"
tipo: completar
respuestas_validas:
  - "energía oscura"

enunciado: "El componente que constituye aproximadamente el 68% del universo y es responsable de la expansión acelerada se denomina ___."

explicacion: |
  La energía oscura es el componente dominante del universo, representando cerca del 68% de su densidad total.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["orden", "densidad"]

opciones_explicitas: ["Materia ordinaria", "Materia oscura", "Energía oscura"]
respuesta_orden: ["Materia ordinaria", "Materia oscura", "Energía oscura"]
tipo: ordenar

enunciado: "Ordena los componentes del universo de menor a mayor abundancia (porcentaje de densidad):"

explicacion: |
  El orden correcto de menor a mayor es: Materia ordinaria (5%), Materia oscura (27%) y Energía oscura (68%).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["calculo", "porcentajes"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["5", "materia ordinaria"], ["27", "materia oscura"], ["68", "energía oscura"]]

respuesta: escenario[idx][0]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si el universo tiene una densidad total de 100 unidades, ¿cuántas unidades corresponden a la {escenario[idx][1]}?"

pasos:
  - "Identificar el porcentaje correspondiente al componente mencionado."
  - "Multiplicar el porcentaje por la densidad total (100)."

explicacion: |
  El valor corresponde al porcentaje asignado a la {escenario[idx][1]} en el modelo cosmológico actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["conceptos"]

variables:
  caso: [["verdadero", "La energía oscura es el componente más abundante."], ["falso", "La materia oscura es el componente más abundante."]]
  seleccionada: uno_de(caso)

respuesta: seleccionada[0]
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Analiza la siguiente afirmación: {seleccionada[1]}. ¿Es correcta?"

explicacion: |
  La afirmación es {seleccionada[1]}. La materia ordinaria solo representa el 5%, mientras que la energía oscura es la mayoritaria con un 68%.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "misterio"]

respuesta: "materia_oscura"
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura", "materia_bariónica", "radiación_cósmica"]

enunciado: "Aunque no podemos verla directamente, sabemos que existe la ___ debido a su influencia gravitatoria en las galaxias."

explicacion: |
  La materia oscura no emite, absorbe ni refleja luz, lo que la hace invisible, pero su gravedad es fundamental para mantener unidas a las galaxias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["expansion", "energia_oscura"]

respuesta: "Big Freeze"
tipo: mc
opciones_explicitas: ["Big Crunch", "Big Freeze", "Big Rip", "Big Bounce"]

enunciado: "Si la energía oscura domina y acelera la expansión del universo de manera constante e indefinida, el destino más probable del universo es el ___."

explicacion: |
  La energía oscura actúa como una fuerza repulsiva que acelera la expansión del universo. Dependiendo de su densidad, el universo podría terminar en un enfriamiento eterno (Big Freeze) o un desgarro final (Big Rip).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["gravedad", "evidencia"]

respuesta: 5
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si la materia visible representa aproximadamente el 5% del universo, y la materia oscura el 27%, ¿qué porcentaje aproximado del universo corresponde a la energía oscura?"

pasos:
  - "Sumar el porcentaje de materia visible y materia oscura: 5 + 27 = 32"
  - "Restar ese total al 100% del universo: 100 - 32 = 68"

explicacion: |
  Según el modelo estándar de cosmología (Lambda-CDM), la energía oscura constituye aproximadamente el 68% del contenido energético-material del universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["terminologia"]

respuesta_orden: ["materia_oscura", "energia_oscura", "materia_visible"]
tipo: ordenar
opciones_explicitas: ["materia_oscura", "energia_oscura", "materia_visible"]

enunciado: "Ordena estos componentes del universo de mayor a menor abundancia (según el modelo actual):"

explicacion: |
  El orden correcto de abundancia es: Energía Oscura (~68%), Materia Oscura (~27%) y Materia Visible (~5%).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["fisica_particulas"]

respuesta: "es_desconocida"
tipo: completar
respuestas_validas:
  - "es_desconocida"
  - "es_desconocida"

enunciado: "A pesar de las décadas de investigación, la naturaleza exacta de la energía oscura ___."

explicacion: |
  Aunque detectamos su efecto en la expansión acelerada del cosmos, la identidad de la partícula o campo que la compone sigue siendo uno de los mayores misterios de la ciencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["astronomia", "materia_oscura"]

variables:
  datos: [["curvas_rotacion", "materia_oscura"], ["expansion_acelerada", "energia_oscura"], ["lentes_gravitacionales", "materia_oscura"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "Se observa que las galaxias rotan mucho más rápido de lo que la masa visible permitiría, sugiriendo la presencia de una masa no visible. Este fenómeno de {datos[idx][0]} es una evidencia de:"

explicacion: |
  La materia oscura proporciona la masa extra necesaria para explicar las velocidades orbitales de las estrellas en las galaxias y la distorsión de la luz por lente gravitacional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["cosmologia", "energia_oscura"]

variables:
  datos: [["aceleracion_expansion", "energia_oscura"], ["colapso_gravitacional", "materia_oscura"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "La observación de supernovas tipo Ia indica que la expansión del universo se está acelerando. Este efecto de {datos[idx][0]} es causado por la:"

explicacion: |
  La energía oscura actúa como una presión negativa que contrarresta la gravedad a escalas cosmológicas, impulsando la expansión acelerada del espacio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "intermedio"
  tags: ["cosmologia", "estructura_cosmica"]

respuesta: "energia_oscura"
tipo: completar
respuestas_validas:
  - "energia_oscura"

enunciado: "Mientras que la materia oscura ayuda a la formación de galaxias mediante su atracción gravitatoria, la responsable de la repulsión espacial que separa los cúmulos de galaxias es la ___."

explicacion: |
  La materia oscura es atractiva (favorece la agrupación de materia), mientras que la energía oscura es repulsiva (favorece la expansión).
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["lentes_gravitacionales", "materia_oscura"]

variables:
  datos: [["distorsion_luz", "materia_oscura"], ["expansión_lineal", "energia_oscura"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["materia_oscura", "energia_oscura"]

enunciado: "La detección de la {datos[idx][0]} en cúmulos de galaxias permite mapear la distribución de la:"

explicacion: |
  La luz se curva al pasar cerca de grandes masas. Como la masa observada no es suficiente para causar la curvatura detectada, se infiere la presencia de materia oscura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "avanzado"
  tags: ["modelo_estandar", "cosmologia"]

respuesta: "materia_oscura"
tipo: completar
respuestas_validas:
  - "materia_oscura"

enunciado: "En el modelo estándar de cosmología, la energía oscura es la fuerza que domina la expansión, mientras que la ___ es la componente que permite la formación de estructuras a gran escala."

explicacion: |
  Es un error conceptual común: la energía oscura domina la expansión (dinámica global), la materia oscura domina la formación de estructuras (dinámica local/regional).
```

## Sección: mesopotamia (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["leyes", "babylon", "justicia"]
tipo: vf
enunciado: "El Código de Hammurabi, promulgado en el siglo XVIII a.C., se caracterizaba por aplicar el principio de la ley del talión (ojo por ojo) de manera uniforme e igualitaria para todas las clases sociales de Babilonia, sin distinción entre nobles, libres y esclavos."
respuesta: falso
explicacion: "Aunque el código establecía castigos físicos proporcionales al delito, las penas variaban significativamente según la condición social del ofendido y del ofensor; los nobles recibían penas más leves o monetarias que los plebeyos o esclavos por el mismo delito."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["escritura", "sumeria", "economía"]
tipo: completar
enunciado: "La escritura cuneiforme surgió inicialmente en Sumeria no con fines literarios o religiosos, sino como una herramienta administrativa para registrar ______ de granos, ganado y bienes comerciales en los templos."
respuesta: "transacciones"
respuestas_validas:
  - "transacciones"
  - "transacción"
  - "transacciones de"
  - "transacción de"
explicacion: "La necesidad de llevar cuentas de las contribuciones y redistribuciones en la economía templaria fue el motor principal para el desarrollo de los primeros signos pictográficos que evolucionaron hacia la cuneiforme."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["geografía", "ríos", "fundación"]
tipo: mc
enunciado: "¿Qué par de ríos delimita la región geográfica conocida como Mesopotamia, cuyo nombre significa \"tierra entre ríos\"?"
opciones_explicitas:
  - "Nilo y el Tigris"
  - "Éufrates y el Tigris"
  - "Indo y el Ganges"
  - "Danubio y el Rin"
respuesta: "Éufrates y el Tigris"
explicacion: "Mesopotamia se sitúa entre el río Éufrates y el río Tigris, en lo que hoy es principalmente Irak, permitiendo el desarrollo de la agricultura de riego."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["arquitectura", "religión", "sumeria"]
tipo: completar
enunciado: "La ______ era una estructura monumental escalonada que servía como base para el templo dedicado al dios patrón de la ciudad, simbolizando la montaña sagrada que conectaba el cielo con la tierra."
respuesta: "ziggurat"
respuestas_validas:
  - "ziggurat"
  - "zigurate"
  - "Ziggurat"
  - "Zigurate"
explicacion: "Las ziggurats, como la Gran Ziggurat de Ur, no eran templos en sí mismos, sino plataformas elevadas donde se ubicaba el santuario al que solo los sacerdotes podían acceder."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["acad", "imperio", "sargón"]
tipo: vf
enunciado: "Sargón I, conocido como Sargón el Grande, fue el fundador del Primer Imperio de Acad, logrando unificar por primera vez las ciudades-estado sumerias bajo un único gobierno centralizado."
respuesta: verdadero
explicacion: "Sargón de Acad conquistó las ciudades-estado sumerias como Uruk y Ur, creando una burocracia centralizada y estableciendo la capital en Acad (Agade), marcando el inicio de la historia imperial en la región."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["literatura", "epopeya", "muerte"]
tipo: mc
enunciado: "La Epopeya de Gilgamesh, una de las obras literarias más antiguas, gira principalmente en torno a la búsqueda del héroe de Uruk por:"
opciones_explicitas:
  - "La inmortalidad física tras la muerte de su amigo Enkidu"
  - "La conquista de todo el mundo conocido"
  - "La construcción del primer gran ziggurat"
  - "El amor imposible con la diosa Ishtar"
respuesta: "La inmortalidad física tras la muerte de su amigo Enkidu"
explicacion: "El núcleo de la epopeya es el duelo de Gilgamesh ante la mortalidad humana, llevándolo a buscar a Utnapishtim (el superviviente del diluvio) para aprender el secreto de la vida eterna, el cual finalmente no obtiene."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["agricultura", "cebada", "economía"]
tipo: completar
enunciado: "Debido a la salinización progresiva de los suelos en el sur de Mesopotamia, los agricultores sumerios y babilonios promovieron el cultivo de ______ como cereal principal por su mayor resistencia a la sal."
respuesta: "cebada"
respuestas_validas:
  - "cebada"
  - "Cebada"
  - "la cebada"
explicacion: "La cebada era el cultivo básico, utilizado también como moneda de cambio y para la elaboración de cerveza, mientras que otros cultivos como el trigo requerían suelos menos salinizados."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["babylon", "nabucodonosor", "arquitectura"]
tipo: mc
enunciado: "Bajo el reinado de Nabucodonosor II, ¿qué obra arquitectónica de Babilonia fue considerada una de las Siete Maravillas del Mundo Antiguo?"
opciones_explicitas:
  - "El Coliseo Romano"
  - "Los Jardines Colgantes de Babilonia"
  - "El Partenón"
  - "Las Murallas de Jericó"
respuesta: "Los Jardines Colgantes de Babilonia"
explicacion: "Los Jardines Colgantes fueron un complejo sistema de terrazas irrigadas, atribuido a Nabucodonosor II para complacer a su esposa Amitis, quien extrañaba las montañas de su tierra natal."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["cronología", "acad", "duración"]
tipo: vf
enunciado: "El Imperio de Acad, fundado por Sargón, mantuvo su hegemonía política ininterrumpida durante más de cinco siglos hasta ser absorbido por los persas."
respuesta: falso
explicacion: "El Imperio de Acad fue relativamente breve; colapsó alrededor del 2150 a.C., poco después de un siglo de existencia, debido a invasiones de los gutis y conflictos internos, seguido de un renacimiento sumerio (Tercera Dinastía de Ur)."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["escritura", "técnica", "arcilla"]
tipo: completar
enunciado: "Los escribas mesopotámicos utilizaban una caña cortada en triángulo, conocida como estilete, para presionar signos en tablas de arcilla húmeda, creando marcas con forma de ______."
respuesta: "cuña"
respuestas_validas:
  - "cuña"
  - "cuñas"
  - "Cuña"
  - "Cuñas"
explicacion: "La forma de las marcas, que se asemejan a cuñas o clavos, es la que da nombre a la escritura cuneiforme, evolucionando desde pictogramas simples hasta signos abstractos y fonéticos."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["leyes", "ur", "ur-nammu"]
tipo: mc
enunciado: "¿Qué rey de la Tercera Dinastía de Ur promulgó el código de leyes más antiguo conocido, anterior al Código de Hammurabi?"
opciones_explicitas:
  - "Gilgamesh"
  - "Ur-Nammu"
  - "Sargón de Acad"
  - "Naram-Sin"
respuesta: "Ur-Nammu"
explicacion: "El Código de Ur-Nammu, datado circa 2100-2050 a.C., es el más antiguo conservado, aunque fragmentario; establece multas en plata en lugar de la ley del talión física aplicada luego por Hammurabi."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["asiria", "militar", "hierro"]
tipo: vf
enunciado: "El ejército asirio fue famoso por ser el primero en utilizar extensivamente armas de hierro y por emplear técnicas de asedio avanzadas, incluyendo torres de asedio y arietes, para conquistar ciudades fortificadas."
respuesta: verdadero
explicacion: "La superioridad militar asiria, basada en la metalurgia del hierro y la organización profesional del ejército, fue clave para la expansión del Imperio Neoasirio y su reputación de terror militar."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["religión", "comparativa", "egipto"]
tipo: mc
enunciado: "En contraste con la visión mesopotámica de un universo hostil y caprichoso, la religión del antiguo Egipto se centraba en el concepto de:"
opciones_explicitas:
  - "El Ma'at (orden cósmico y verdad)"
  - "El Karma (reencarnación)"
  - "El Monoteísmo absoluto"
  - "El Animismo tribal"
respuesta: "El Ma'at (orden cósmico y verdad)"
explicacion: "Mientras los mesopotámicos veían a los dioses como impredecibles y a la naturaleza como un peligro, los egipcios buscaban mantener el Ma'at, el equilibrio y orden divino que garantizaba la continuidad del universo."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["nínive", "biblioteca", "asurbanipal"]
tipo: completar
enunciado: "La famosa biblioteca de ______, fundada por el rey asirio Asurbanipal, contenía miles de tablillas que preservaron textos como la Epopeya de Gilgamesh y conocimientos astronómicos."
respuesta: "nínive"
respuestas_validas:
  - "nínive"
  - "ninive"
  - "Nínive"
  - "Ninive"
explicacion: "Asurbanipal recopiló sistemáticamente textos de toda Mesopotamia en su palacio de Nínive, permitiendo la conservación de gran parte del conocimiento literario y científico del antiguo Oriente Próximo."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["astronomía", "calendario", "sumeria"]
tipo: mc
enunciado: "El calendario mesopotámico básico se basaba en el ciclo de:"
opciones_explicitas:
  - "La rotación de la Tierra sobre su eje (día solar)"
  - "Las fases de la Luna (mes lunar)"
  - "El movimiento de Saturno"
  - "La precesión de los equinoccios"
respuesta: "Las fases de la Luna (mes lunar)"
explicacion: "Los mesopotámicos dividían el año en 12 meses lunares, añadiendo meses intercalares periódicamente para sincronizar el calendario lunar con las estaciones agrícolas solares."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["sumeria", "eridu", "origen"]
tipo: vf
enunciado: "Según la Lista Real Sumeria y las tradiciones posteriores, Eridu era considerada la primera ciudad fundada por los dioses antes de que la realeza bajara del cielo, marcando el inicio de la civilización urbana."
respuesta: verdadero
explicacion: "Eridu, situada en el extremo sur de Mesopotamia, es vista en la mitología sumeria como la primera ciudad, hogar del dios Enki, y el lugar donde comenzó la civilización antes de propagarse a Ur, Uruk y Nippur."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["comercio", "lapislázuli", "afganistán"]
tipo: completar
enunciado: "Mesopotamia carecía de recursos minerales como madera y piedra preciosa, por lo que importaba el ______ desde las montañas de Afganistán (Bactria) a través de largas rutas comerciales."
respuesta: "lapislázuli"
respuestas_validas:
  - "lapislázuli"
  - "lapis lazuli"
  - "Lapislázuli"
  - "Lapis lazuli"
explicacion: "El lapislázuli era extremadamente valorado para joyería y adornos de estatuarias divinas, y su adquisición requería una red comercial que se extendía hasta el norte de la India."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["acad", "naram-sin", "divinidad"]
tipo: mc
enunciado: "¿Qué rey de Acad fue el primero en autoproclamarse \"Dios\" en sus inscripciones, elevando la autoridad real por encima de la tradicional mediación sacerdotal?"
opciones_explicitas:
  - "Sargón I"
  - "Naram-Sin"
  - "Gudea"
  - "Ur-Nanshe"
respuesta: "Naram-Sin"
explicacion: "Naram-Sin, nieto de Sargón, adoptó el título de \"Rey de los Cuatro Rumbos\" y se divinizó en vida, un precedente político-teológico que luego sería retomado por otros reyes orientales."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["lagash", "gudea", "arte"]
tipo: vf
enunciado: "Gudea, gobernante de la ciudad de Lagash, es conocido por sus numerosas estatuas de diorita que lo representan con una bandeja de cestas en la cabeza, simbolizando su papel de constructor de templos y su humildad piadosa."
respuesta: verdadero
explicacion: "Las estatuas de Gudea, como la del Louvre, son icónicas por su detalle en el plegado de la ropa y su expresión serena, reflejando la ideología de un gobernante que se veía como el mayordomo del dios Ningirsu."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["astrología", "ciencia", "presagio"]
tipo: completar
enunciado: "En Mesopotamia, la observación de los astros no tenía fines puramente astronómicos, sino que se utilizaba para la ______, interpretando los movimientos celestes como mensajes divinos sobre el futuro del rey y el estado."
respuesta: "astrología"
respuestas_validas:
  - "astrología"
  - "astrológica"
  - "Astrología"
  - "Astrológica"
explicacion: "Los astrólogos (barû) buscaban patrones en el cielo (lunas, eclipses, posiciones de planetas) para predecir eventos terrestres, estableciendo una conexión directa entre el cosmos y la política."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["mitología", "diluvio", "utnapishtim"]
tipo: mc
enunciado: "En la Epopeya de Gilgamesh, ¿quién es el personaje que construye una gran barca para sobrevivir al diluvio enviado por los dioses, inspirando posteriormente el relato bíblico de Noé?"
opciones_explicitas:
  - "Ziusudra"
  - "Utnapishtim"
  - "Enkidu"
  - "Gilgamesh"
respuesta: "Utnapishtim"
explicacion: "Utnapishtim (cuyo equivalente en la versión sumeria es Ziusudra) es advertido por el dios Ea (Enki) para construir un barco, sobreviviendo al diluvio y recibiendo la inmortalidad como recompensa."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["babylon", "caída", "persia"]
tipo: vf
enunciado: "El Imperio Neo-Babilónico cayó definitivamente en el año 539 a.C. cuando Nabonido fue derrotado por las fuerzas del rey persa Ciro el Grande en la batalla de Opis."
respuesta: verdadero
explicacion: "La conquista de Babilonia por Ciro II marcó el fin de la independencia mesopotamia antigua y su integración dentro del vasto Imperio Aqueménida, respetando inicialmente las instituciones locales."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["educación", "escriba", "edubba"]
tipo: completar
enunciado: "La educación de los futuros escribas tenía lugar en la ______, una escuela donde los estudiantes memorizaban listas de signos, gramática y literatura mediante la repetitiva copia de tablillas."
respuesta: "edubba"
respuestas_validas:
  - "edubba"
  - "edubba"
  - "Edubba"
  - "La edubba"
explicacion: "La edubba (\"casa de la tablilla\") era el centro educativo donde se formaba la élite administrativa; el aprendizaje era duro y se basaba en la memorización y la caligrafía precisa."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["agricultura", "salinización", "declive"]
tipo: mc
enunciado: "El exceso de riego en Mesopotamia causó la salinización del suelo, lo que llevó a:"
opciones_explicitas:
  - "Un aumento de la producción de trigo"
  - "El desplazamiento del centro de gravedad agrícola hacia el norte"
  - "La invención del arado de vertedera"
  - "La disminución de la población urbana"
respuesta: "El desplazamiento del centro de gravedad agrícola hacia el norte"
explicacion: "A medida que el sur se salinizaba y la producción de cereal caía, el poder económico y político se desplazó gradualmente hacia las regiones más al norte (Acad y luego Babilonia) donde los suelos eran más fértiles."
```

```
metadata:
  materia: "historia_profunda"
  tema: "mesopotamia"
  nivel: "intermedio"
  tags: ["persia", "ciro", "tolerancia"]
tipo: vf
enunciado: "Tras conquistar Babilonia, Ciro el Grande emitió un decreto que permitía a los pueblos subyugados, incluidos los judíos, regresar a sus tierras y reconstruir sus templos, promoviendo una política de tolerancia religiosa."
respuesta: verdadero
explicacion: "El Cilindro de Ciro, considerado un charter de derechos humanos, muestra su política de restaurar los cultos locales y devolver a los exiliados a sus ciudades, consolidando su control mediante el respeto a las tradiciones locales."
```

