# Historia Profunda — Internet redes globalizacion digital (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El origen de ARPANET

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

### 2 — El protocolo fundamental

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["protocolo", "tcp_ip", "estandar"]

variables:
  escenario: uno_de([[ "TCP/IP", "HTTP", "FTP" ]])

tipo: completar
respuestas_validas:
  - "TCP/IP"
  - "HTTP"
  - "FTP"

enunciado: "Para que la red pasara de ser un conjunto de redes aisladas a una red global interconectada, se estandarizó el uso del protocolo ___."

explicacion: |
  El conjunto de protocolos TCP/IP permitió que redes heterogéneas se comunicaran entre sí, estableciendo el lenguaje común que permitió la expansión de la internet global.
```

### 3 — Evolución de la red

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

### 4 — La era de la información

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

### 5 — Impacto de la digitalización

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

### 6 — El origen de la Web

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

### 7 — Protocolos y lenguajes

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["protocolos", "html"]

variables:
  tecnologia_base: uno_de(["HTML", "HTTP", "URL"])

tipo: completar
respuestas_validas:
  - "HTML"
  - "HTTP"
  - "URL"

enunciado: "Para que la Web funcione, se requiere de un lenguaje de marcado para estructurar el contenido llamado {tecnologia_base}, un protocolo de transferencia llamado HTTP y un sistema de localización llamado URL."

respuesta: tecnologia_base

explicacion: |
  La arquitectura de la Web se basa en tres pilares: HTML (lenguaje), HTTP (protocolo) y URL (identificador).
```

### 8 — La diferencia clave

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

### 9 — Evolución de la navegación

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
respuestas_validas:
  - "Mosaic"
  - "WorldWideWeb"

enunciado: "En la historia de la navegación, {escenarios[escenario_idx][0]} fue {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][0]

explicacion: |
  Mosaic fue crucial para la democratización de la Web al introducir imágenes integradas, mientras que WorldWideWeb fue el primer navegador/editor de Berners-Lee.
```

### 10 — Orden cronológico de la Web

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

### 11 — El impacto de la comunicación instantánea

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

### 12 — El auge del comercio electrónico

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

### 13 — Redes sociales y tejido social global

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

### 14 — Etapas de la digitalización económica

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

### 15 — El efecto de la reducción de costos de información

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

### 16 — El concepto de brecha digital

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

### 17 — Dimensiones de la brecha digital

```
metadata:
  materia: "historia_profucha"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["dimensiones", "tecnologia"]

variables:
  escenario: uno_de([["Acceso", "Brecha de acceso"], ["Uso", "Brecha de uso"], ["Competencia", "Brecha de competencias"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Brecha de acceso", "Brecha de uso", "Brecha de competencias"]

enunciado: "Cuando una persona tiene un dispositivo y conexión, pero no posee las habilidades cognitivas para navegar de forma crítica o productiva en la red, estamos ante una: {escenario[0]}."

explicacion: |
  La brecha de uso o de competencias se refiere a la capacidad real de transformar la información digital en conocimiento útil, independientemente de tener o no el dispositivo.
```

### 18 — Impacto de la globalización digital

```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["globalizacion", "desarrollo"]

variables:
  caso: uno_de([["País en desarrollo", "aumenta la desigualdad"], ["País desarrollado", "se consolida su ventaja"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["aumenta la desigualdad", "se consolida su ventaja"]

enunciado: "En el contexto de la globalización digital, la asimetría tecnológica suele provocar que, mientras en un {caso[0]} la brecha puede profundizar las desigualdades socioeconómicas, en un {caso[1]} la ventaja competitiva se consolide."

explicacion: |
  La globalización digital puede actuar como un motor de desarrollo o como un mecanismo de exclusión, dependiendo de la capacidad de integración tecnológica de cada nación.
```

### 19 — Factores de exclusión

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

### 20 — Orden de la evolución de la brecha

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

### 21 — El origen de la red

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

### 22 — Protocolos fundamentales

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

### 23 — Evolución de la Web

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

### 24 — Cronología de la era digital

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

### 25 — El impacto de la banda ancha

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
