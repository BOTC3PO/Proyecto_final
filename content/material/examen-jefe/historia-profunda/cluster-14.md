# Examen jefe — De Mesopotamia al Cosmos

> Logro #112. Completaste el repaso que abarca desde las primeras civilizaciones hasta la expansión del universo y la era digital. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **123 preguntas totales** en 5/5 secciones.

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

variables:
  escenario: uno_de([[ "TCP/IP", "HTTP", "FTP" ]])

tipo: completar
respuestas_validas: ["TCP/IP", "HTTP", "FTP"]

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
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["web_2.0", "globalizacion", "interaccion"]

variables:
  tipo_web: uno_de([[ ["Web 1.0 (Estática)", "Web 2.0 (Social/Interactiva)"] ]])

tipo: mc
opciones_explicitas: ["Web 1.0 (Estática)", "Web 2.0 (Social/Interactiva)"]

enunciado: "La transición de una red de solo lectura a una red donde el usuario es creador de contenido se conoce como la era de la {tipo_web[0]}."

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

enunciado: "Si consideramos que la globalización digital ha reducido las distancias, ¿cuántos continentes están conectados hoy por la infraestructura de internet? (Respuesta numérica: 7)"

pasos:
  - "Se reconoce la existencia de una infraestructura global."
  - "Se identifica la cobertura en todos los continentes habitados."

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

variables:
  tecnologia_base: uno_de(["HTML", "HTTP", "URL"])

tipo: completar
respuestas_validas: ["HTML", "HTTP", "URL"]

enunciado: "Para que la Web funcione, se requiere de un lenguaje de marcado para estructurar el contenido llamado {tecnologia_base}, un protocolo de transferencia llamado HTTP y un sistema de localización llamado URL."

respuesta: tecnologia_base

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
  escenarios: [["Mosaic", "WorldWideWeb"], ["Mosaic", "Netscape"]]
  descripcion: ["el primer navegador gráfico popular que impulsó la Web masiva", "el primer navegador desarrollado por Tim Berners-Lee"]

tipo: completar
respuestas_validas: ["Mosaic", "WorldWideWeb"]

enunciado: "En la historia de la navegación, {escenarios[escenario_idx][0]} fue {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][0

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

respuesta: ["Propuesta de la Web (1989)", "Primer servidor web (1990)", "Lanzamiento de Mosaic (1993)"]

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
respuestas_validas: ["instantánea", "inmediata"]

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
  escenario: uno_de([
    ["Amazon", "gigante del retail"],
    ["Alibaba", "líder en B2B"],
    ["eBay", "pionero de subastas"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Amazon", "Alibaba", "eBay"]

enunciado: "El comercio electrónico permitió que empresas como {escenario[1]} facilitaran el acceso a mercados globales, transformando la economía mundial."

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

respuesta: ["Conectividad", "Plataformas", "Ecosistemas"]
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
respuestas_validas: ["brecha digital"]

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

variables:
  escenario: uno_de([
    ["Acceso", "Brecha de acceso"],
    ["Uso", "Brecha de uso"],
    ["Competencia", "Brecha de competencias"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Brecha de acceso", "Brecha de uso", "Brecha de competencias"]

enunciado: "Cuando una persona tiene un dispositivo y conexión, pero no posee las habilidades cognitivas para navegar de forma crítica o productiva en la red, estamos ante una: {escenario[0]}."

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
  caso: uno_de([
    ["País en desarrollo", "aumenta la desigualdad"],
    ["País desarrollado", "se consolida su ventaja"]
  ])

respuesta: caso[1
tipo: mc
opciones_explicitas: ["aumenta la desigualdad", "se consolida su ventaja"]

enunciado: "En el contexto de la globalización digital, la asimetría tecnológica suele provocar que, mientras en un {caso[0]} la brecha puede profundizar las desigualdades socioeconómicas, en un {caso[1]} la ventaja competitiva se consolide."

explicacion: |
  La globalización digital puede actuar como un motor de desarrollo o como un mecanismo de exclusión, dependiendo de la capacidad de integración tecnológica de cada nación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["factores", "sociedad"]

respuesta: 2
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

respuesta: ["Brecha de infraestructura", "Brecha de acceso", "Brecha de uso", "Brecha de apropiación"]
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

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["estandarizar la comunicación", "navegar por la web", "resolver nombres"]

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

respuesta: secuencia
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
respuestas_validas: ["lenta", "rápida"]

enunciado: "La conexión de tipo {datos[idx][0]} se caracterizaba por ser ___."

explicacion: |
  La transición hacia la {datos[idx][0]} transformó el consumo de contenido global.
```

## Sección: islam-y-expansion-arabe (24 preguntas)

```
### 2 — Primer Califa Rashidun
```

```
### 3 — Batalla de Yarmuk
```

```
### 4 — Conquista de Persia Sasánida
```

```
### 5 — Califato Omeya y Damasco
```

```
### 6 — Batalla de Tours/Poitiers
```

```
### 7 — Revuelta de los Mawalli
```

```
### 8 — Califato Abasí y Bagdad
```

```
### 9 — Tratado de Hudaibiya
```

```
### 10 — Conquista de Egipto
```

```
### 11 — Fitna y Guerra Civil
```

```
### 12 — Expansión hacia la India
```

```
### 13 — Batalla de Talas
```

```
### 14 — La Meca y el Hajj
```

```
### 15 — Califato de Córdoba
```

```
### 16 — Batalla de Badr
```

```
### 17 — El Corán
```

```
### 18 — Conquista de Constantinopla (Omitida, tema distinto) -> Usar: Conquista de la Península Ibérica
```

```
### 19 — La Casa de la Sabiduría
```

```
### 20 — Sucesión de Ali y Hasan
```

```
### 21 — Tratado de Umar
```

```
### 22 — Batalla de Nihawand
```

```
### 23 — La Mezquita de la Keba'
```

```
### 24 — Califato Fatimí
```

```
### 25 — La Peste Negra y el declive
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
respuestas_validas: ["alejamiento", "expansión"]

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

enunciado: "Una galaxia se encuentra a una distancia de {distancia} parsecs. Si la constante de Hubble es $H_0 = {hubble}$ km/s/Mpc, ¿cuál es la velocidad de recesión en km/s? (Usa la fórmula $v = H_0 \cdot d$)"

pasos:
  - "Identificar la distancia ($d$) y la constante de Hubble ($H_0$)."
  - "Multiplicar la constante de Hubble por la distancia: $v = 70 \cdot 100.000.000$."

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
respuestas_validas: ["distancia", "velocidad", "constante"]

enunciado: "En la expresión matemática $v = H_0 \cdot d$, la variable $d$ representa la ___ de la galaxia."

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
respuestas_validas: ["expansión", "expansion"]

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
  escenario: uno_de([
    ["10 Mpc", "200 km/s"],
    ["20 Mpc", "400 km/s"],
    ["50 Mpc", "1000 km/s"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["100 km/s", "200 km/s", "300 km/s", "400 km/s"]

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
respuestas_validas: ["corrimiento al rojo", "redshift"]

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

respuesta: ["observación del redshift", "cálculo de la velocidad de recesión", "conclusión de la expansión universal"]
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
  idx: uno_de([0, 1])
  datos: [
    [70, "13.8"],
    [50, "20.0"]
  ]

enunciado: "La edad aproximada del universo se puede estimar mediante el inverso de la constante de Hubble (1/H0). Si tomamos un valor de H0 de {datos[idx][0]} km/s/Mpc, la edad estimada es de aproximadamente ___ miles de millones de años."

respuestas_validas: ["13.8", "20.0"]
respuesta: {datos[idx][1]}
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
respuesta: ["Expansión del espacio", "Aumento de la distancia entre galaxias", "Aumento de la velocidad de alejamiento"]
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

variables:
  escenario_idx: uno_de([0, 1])
  escenario_datos: [[0, "se alejan"], [1, "se alejan"]]

respuesta: escenario_datos[escenario_idx][1
tipo: completar

respuestas_validas: ["se alejan", "se acercan", "estacionarias"]

enunciado: "Si un observador se situara en una galaxia muy lejana, en lugar de la Tierra, vería que las demás galaxias del universo {escenario_datos[escenario_idx][1]} de la misma forma que nosotros."

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
tipo: completar
enunciado: "La Ley de Hubble implica que existe un punto central en el universo desde el cual todas las galaxias se expanden en forma radial, situando a la Tierra en un lugar privilegiado."

explicacion: |
  Falso. La expansión es local en cada punto del espacio. Es similar a la superficie de un globo inflándose: todos los puntos se alejan de todos los demás, sin que haya un centro en la superficie.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["isotropia", "observador"]

variables:
  obs_idx: uno_de([0, 1])
  obs_tipo: ["un observador en la Vía Lemaître", "un observador en una galaxia lejana"]

respuesta: "isotropico"
tipo: completar

respuestas_validas: ["isotropico", "anisotropico", "central"]

enunciado: "Debido a la naturaleza de la expansión, el universo es {obs_tipo[obs_idx]} para {obs_tipo[obs_idx]}, lo que significa que las leyes físicas y la apariencia de la expansión no dependen de la posición del observador."

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
respuesta: ["observacion_galaxias", "conclusion_expansion", "implicacion_no_centro"]
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

respuesta: distancia * h0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una galaxia se encuentra a una distancia de {distancia} Mpc. Si la constante de Hubble es H0 = {h0} (km/s)/Mpc, ¿cuál es su velocidad de alejamiento en km/s?"

explicacion: |
  Según la Ley de Hubble: v = H0 * d.
  En este caso: {distancia} * {h0} = {respuesta} km/s.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "tasa de expansión"
tipo: completar
respuestas_validas: ["tasa de expansión", "velocidad de la luz", "masa galáctica"]

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

variables:
  datos: [[1400, 70], [3000, 70], [4500, 75]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una galaxia tiene una velocidad de alejamiento de {datos[idx][1]} km/s y asumimos una constante de Hubble de {datos[idx][1]} (km/s)/Mpc, ¿a qué distancia se encuentra en Mpc?"

pasos:
  - "Identificar la velocidad (v) y la constante (H0)."
  - "Despejar la distancia de la fórmula v = H0 * d, obteniendo d = v / H0."

explicacion: |
  Para hallar la distancia, dividimos la velocidad por la constante de Hubble: {datos[idx][1]} / {datos[idx][1]} = {datos[idx][0]} Mpc.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta: ["Observación de Redshift", "Cálculo de Velocidad", "Aplicación de Ley de Hubble"]
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
respuestas_validas: ["invisible"]

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

variables:
  escenario: uno_de([0, 1])

respuesta: uno_de([0, 1])[1]
tipo: mc
opciones_explicitas: ["La velocidad de rotación disminuye conforme nos alejamos del centro", "La velocidad de rotación se mantiene constante o aumenta en la periferia", "Las galaxias colapsarían por falta de masa", "La gravedad es nula en los bordes de la galaxia"]

enunciado: "Al observar las curvas de rotación de las galaxias espirales, se detecta que las estrellas en la periferia se mueven a una velocidad que contradice la masa visible. Según el escenario {escenario}, ¿cuál es la observación real?"

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
respuestas_validas: ["gravitacionales"]

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

respuesta: "materia_oscura"
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
respuestas_validas: ["masa_visible"]

variables:
  datos: [[0, "masa_visible"], [1, "presión_solar"], [2, "luz_estelar"]]

enunciado: "La discrepancia observada entre la velocidad de rotación galáctica y la cantidad de {datos[uno_de([0,1,2])[0]]} es la principal prueba de la existencia de la materia oscura."

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
  escenario: [[1998, "el descubrimiento de la expansión acelerada"], [2011, "la confirmación de la constante de Hubble"]]

tipo: completar
respuestas_validas: ["1998", "2011"]

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

respuesta: ["Modelo de materia oscura fría", "Descubrimiento de la expansión acelerada", "Aceptación del modelo Lambda-CDM"]

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
respuesta: datos[idx][0
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
respuestas_validas: ["energía oscura"]

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
respuesta: ["Materia ordinaria", "Materia oscura", "Energía oscura"]
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

respuesta: escenario[idx][0
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
  idx: uno_de([0, 1])
  caso: [["verdadero", "La materia ordinaria es el componente más abundante."], ["falso", "La materia oscura es el componente más abundante."]]

respuesta: caso[idx][1
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Analiza la siguiente afirmación: {caso[idx][0]}. ¿Es correcta?"

explicacion: |
  La afirmación es {caso[idx][1]}. La materia ordinaria solo representa el 5%, mientras que la energía oscura es la mayoritaria con un 68%.
```

```
metadata:
  materia: "historia_profunda"
  tema: "materia_energia_oscura"
  nivel: "basico"
  tags: ["cosmologia", "misterio"]

respuesta: "materia_oscura"
tipo: mc
opciones_explicitas: ["materia_oscura", "materia_oscura", "materia_oscura", "materia_oscura"]

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

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Big Crunch", "Big Freeze"], ["Big Rip", "Big Freeze"]]
  respuestas: [["Big Crunch", "Big Freeze"], ["Big Rip", "Big Freeze"]]

respuesta: escenarios[escenario_idx][0
tipo: mc
opciones_explicitas: ["Big Crunch", "Big Freeze", "Big Rip", "Big Bounce"]

enunciado: "Si la energía oscura domina y acelera la expansión indefinidamente, el destino más probable del universo es el {escenarios[escenario_idx][1]}."

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

respuesta: ["materia_oscura", "energia_oscura", "materia_visible"]
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
respuestas_validas: ["es_desconocida", "es_desconocida"]

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

variables:
  datos: [["formacion_estructuras", "materia_oscura"], ["repulsion_espacial", "energia_oscura"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["materia_oscura", "energia_oscura"]

enunciado: "Mientras que la {datos[idx][0]} ayuda a la formación de galaxias mediante su atracción gravitatoria, la {datos[idx][1]} es responsable de la {datos[idx][1]} que separa las cúmusters de galaxias."

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

variables:
  datos: [["materia_oscura", "materia_oscura"], ["energia_oscura", "energia_oscura"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["materia_oscura", "energia_oscura"]

enunciado: "En el modelo estándar de cosmología, la {datos[idx][0]} es la fuerza que domina la expansión, mientras que la {datos[idx][1]} es la componente que permite la formación de estructuras a gran escala."

explicacion: |
  Es un error conceptual común: la energía oscura domina la expansión (dinámica global), la materia oscura domina la formación de estructuras (dinámica local/regional).
```

## Sección: mesopotamia (24 preguntas)

```
### 2 — Invención de la escritura: contexto económico
```

```
### 3 — Geografía de Mesopotamia: ríos
```

```
### 4 — Ziggurat: función arquitectónica
```

```
### 5 — Sargón de Acad: primer imperio
```

```
### 6 — Leyenda de Gilgamesh: tema central
```

```
### 7 — Agricultura: cultivo base
```

```
### 8 — Babilonia: capital cultural
```

```
### 9 — Período Acad: duración
```

```
### 10 — Cuneiforme: técnica de escritura
```

```
### 11 — Ur-Nammu: primer código legal
```

```
### 12 — Asiria: fuerza militar
```

```
### 13 — Amon-Ra: comparación religiosa
```

```
### 14 — Nínive: biblioteca real
```

```
### 15 — Calendario lunar: base astronómica
```

```
### 16 — Eridu: ciudad más antigua
```

```
### 17 — Comercio: lapislázuli
```

```
### 18 — Naram-Sin: divinidad real
```

```
### 19 — Gudea: estatua de piedra
```

```
### 20 — Astrología: interpretación
```

```
### 21 — Diluvio: paralelo bíblico
```

```
### 22 — Imperio Neo-Babilónico: caída
```

```
### 23 — Escriba: formación
```

```
### 24 - Salinización: consecuencia agrícola
```

```
### 25 - Ciro el Grande: decreto
```
