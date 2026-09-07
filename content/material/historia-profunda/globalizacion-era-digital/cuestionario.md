# Historia Profunda — Globalizacion era digital (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El concepto de globalización

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["definicion", "interconexion"]

respuesta: "interconexión"
tipo: completar
respuestas_validas:
  - "interconexión"
  - "interconexion"

enunciado: "La globalización se define como el proceso de creciente ___ económica, cultural y tecnológica entre los países del mundo."

explicacion: |
  La globalización implica una integración de mercados y sociedades a escala mundial.
```

### 2 — Impacto de la revolución tecnológica

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tecnologia", "comunicacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["la llegada de Internet", "la digitalización de la información"], ["el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]]
  respuestas_correctas: [["la llegada de Internet", "la digitalización de la información"], ["el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["la llegada de Internet", "la digitalización de la información", "el desarrollo de la telefonía móvil", "la inmediatez de la comunicación"]

enunciado: "En el contexto de la era digital, {escenarios[escenario_idx][0]} fue un factor clave que impulsó {escenarios[escenario_idx][1]}."

explicacion: |
  La tecnología ha sido el motor que ha permitido que la interconexión sea instantánea y global.
```

### 3 — Dinámicas del comercio global

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["economia", "comercio"]

respuesta: "transnacionales"
tipo: mc
opciones_explicitas: ["nacionales", "transnacionales", "locales", "estatales"]

enunciado: "La globalización económica ha permitido el auge de las empresas ________, que operan en múltiples países simultáneamente."

explicacion: |
  Las empresas transnacionales son actores centrales en la economía globalizada.
```

### 4 — Secuencia de la era digital

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["cronologia", "tecnologia"]

respuesta_orden: ["Internet", "Comercio electrónico", "Redes sociales", "Internet de las cosas"]
tipo: ordenar
opciones_explicitas: ["Internet", "Comercio electrónico", "Redes sociales", "Internet de las cosas"]

enunciado: "Ordene cronológicamente estos hitos tecnológicos que han profundizado la globalización:"

explicacion: |
  La secuencia muestra cómo la infraestructura (Internet) permitió el comercio, luego la interacción social masiva y finalmente la hiperconectividad de objetos.
```

### 5 — Desafíos de la globalización

```
metadata:
  materia: "historia_profucha"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["desigualdad", "brecha_digital"]

respuesta: "la homogeneización cultural"
tipo: mc
opciones_explicitas: ["la homogeneización cultural", "la reducción de la brecha digital"]

enunciado: "Si se analiza la globalización desde una perspectiva crítica, un efecto cultural negativo común es ___."

explicacion: |
  La homogeneización cultural se refiere a la pérdida de identidades locales frente a una cultura global dominante.
```

### 6 — El motor del transporte

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["transporte", "comercio"]

enunciado: "La caída drástica en los costos de transporte marítimo durante el siglo XX fue impulsada principalmente por la estandarización de los contenedores. ¿Qué tipo de transporte permitió esta revolución?"

opciones_explicitas: ["Aéreo", "Marítimo", "Ferroviario", "Terrestre"]
respuesta: "Marítimo"
tipo: "mc"

explicacion: |
  La contenedorización permitió cargar y descargar barcos de forma masiva y rápida, reduciendo costos y tiempos de espera, lo que fue clave para la globalización.
```

### 7 — La era de la información

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["telecomunicaciones", "internet"]

enunciado: "La globalización en la era digital se vio potenciada por el desarrollo de ___, que permitió la transferencia de datos instantánea entre continentes."

respuesta: "Internet"
tipo: "completar"
respuestas_validas:
  - "Internet"

explicacion: |
  Mientras que el telégrafo fue el precursor, fue la llegada de Internet lo que permitió la globalización de los servicios y la economía digital actual.
```

### 8 — Integración económica

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tratados", "politica"]

enunciado: "Los tratados de libre comercio buscan la eliminación de barreras para el intercambio de bienes. ¿Cuál es el objetivo principal de un tratado de este tipo?"

opciones_explicitas: ["Aumentar aranceles", "Eliminar aranceles", "Cerrar fronteras", "Controlar precios"]
respuesta: "Eliminar aranceles"
tipo: "mc"

explicacion: |
  Los tratados de libre comercio (TLC) buscan reducir o eliminar impuestos (aranceles) a la importación/exportación para facilitar el flujo comercial.
```

### 9 — Secuencia de la globalización

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["procesos", "historia"]

enunciado: "Ordene cronológicamente estos hitos que impulsaron la integración global:"

opciones_explicitas: ["Revolución Industrial (vapor)", "Expansión del Telégrafo", "Revolución Digital (Internet)"]
respuesta_orden: ["Revolución Industrial (vapor)", "Expansión del Telégrafo", "Revolución Digital (Internet)"]
tipo: "ordenar"

explicacion: |
  La globalización ha sido un proceso acumulativo: primero la máquina de vapor, luego la velocidad de la información con el telégrafo y finalmente la interconectividad digital.
```

### 10 — Impacto de la digitalización

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["economia", "digital"]

enunciado: "En un mundo altamente globalizado digitalmente, el costo marginal de enviar información tiende a ser ___."

pasos:
  - "Considerar la digitalización de bits vs el transporte físico de papel."

tipo: "completar"
respuesta: "nulo"
respuestas_validas:
  - "nulo"
  - "cero"

explicacion: |
  La digitalización permite que el costo marginal de transmitir información sea prácticamente cero, acelerando el comercio global.
```

### 11 — El motor de la comunicación instantánea

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["internet", "comunicacion", "globalizacion"]

respuesta: "instantánea"
tipo: completar
respuestas_validas:
  - "instantánea"
  - "inmediata"

enunciado: "La llegada de internet transformó la escala de los intercambios humanos, permitiendo que la comunicación entre personas en distintos continentes sea de carácter ___."

explicacion: |
  La digitalización eliminó las barreras temporales y geográficas, permitiendo el flujo de información en tiempo real, un pilar fundamental de la globalización moderna.
```

### 12 — Impacto en el comercio global

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["comercio", "e-commerce", "economia"]

respuesta: "comercio electrónico"
tipo: mc
opciones_explicitas: ["comercio electrónico", "transacciones bancarias", "servicios en la nube", "todos los anteriores"]

enunciado: "La era digital ha facilitado la expansión del comercio electrónico a nivel mundial, permitiendo que pequeñas empresas accedan a mercados globales sin necesidad de presencia física."

explicacion: |
  El e-commerce es uno de los motores más visibles de la globalización digital, permitiendo la integración de mercados de consumo de manera global y directa.
```

### 13 — Desafíos de la interconexión

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["brecha_digital", "desigualdad", "sociedad"]

respuesta: "brecha digital"
tipo: completar
respuestas_validas:
  - "brecha digital"
  - "desigualdad tecnológica"

enunciado: "A pesar de la conectividad global, la distribución desigual de la infraestructura tecnológica ha generado una ___ que separa a las naciones desarrolladas de las que están en vías de desarrollo."

explicacion: |
  La brecha digital es un fenómeno crítico donde la falta de acceso a internet y tecnologías de la información profundiza las desigualdades económicas y sociales preexistentes.
```

### 14 — Secuencia de la revolución digital

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["historia", "tecnologia", "evolucion"]

respuesta_orden: ["telegrafía", "computación personal", "internet de banda ancha", "redes móviles 5G"]
tipo: ordenar
opciones_explicitas: ["telegrafía", "computación personal", "internet de banda ancha", "redes móviles 5G"]

enunciado: "Ordene cronológicamente los hitos tecnológicos que han acelerado la integración global:"

explicacion: |
  La globalización ha sido un proceso de aceleración constante: desde la transmisión de señales eléctricas (telegrafía) hasta la hiperconectividad móvil actual.
```

### 15 — El concepto de "Aldea Global"

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["teoria", "sociedad", "cultura"]

respuesta: "Marshall McLuhan"
tipo: completar
tolerancia_abs: 0

enunciado: "El concepto de 'Aldea Global', que describe cómo la tecnología digital ha encogido el mundo, fue acuñado por el teórico de la comunicación ___."

explicacion: |
  McLuhan predijo que los medios de comunicación electrónicos transformarían el mundo en una unidad interconectada donde todos estaríamos presentes en la vida de los demás.
```

### 16 — La paradoja de la homogeneización

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["cultura", "homogeneizacion"]

variables:
  escenario: uno_de(["occidentalización", "estandarización"])

respuesta: escenario
tipo: mc
opciones_explicitas: ["occidentalización", "estandarización", "diversificación", "aislamiento"]

enunciado: "En el contexto de la globalización digital, la difusión masiva de contenidos de un único polo cultural dominante suele provocar un proceso de {escenario} cultural."

explicacion: |
  La globalización digital facilita que patrones culturales (música, cine, valores) de potencias tecnológicas se expandan globalmente, lo que puede llevar a la pérdida de particularidades locales en favor de un modelo único.
```

### 17 — Flujos económicos y desigualdad

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["economia", "desigualdad"]

respuesta: "Aumenta"
tipo: completar
tolerancia_abs: 0

enunciado: "Si la brecha digital se ensancha, la desigualdad económica entre países con alta y baja conectividad tiende a ___."

pasos:
  - "Analizar la relación entre acceso a tecnología y productividad económica."
  - "Considerar el impacto de la automatización y el flujo de capitales digitales."

explicacion: |
  La falta de infraestructura digital en regiones en desarrollo impide que participen equitativamente en la economía global, exacerbando la brecha de riqueza existente.
```

### 18 — Intercambio cultural digital

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["cultura", "intercambio"]

respuesta: "hibridación"
tipo: completar
respuestas_validas:
  - "hibridación"

enunciado: "Cuando elementos de diferentes culturas se mezclan a través de las redes sociales para crear nuevas formas de expresión, ocurre un proceso de ___ cultural."

explicacion: |
  La globalización no solo homogeneiza; también permite la 'hibridación', donde lo local y lo global se fusionan para crear identidades nuevas.
```

### 19 — Dinámicas de la globalización

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta_orden: ["Interconexión", "Estandarización", "Desigualdad"]
tipo: ordenar
opciones_explicitas: ["Interconexión", "Estandarización", "Desigualdad"]

enunciado: "Ordena los efectos de la globalización digital desde el proceso de comunicación hasta su impacto socioeconómico:"

explicacion: |
  Primero ocurre la interconexión técnica, lo que permite la estandarización de consumos y, finalmente, puede derivar en nuevas formas de desigualdad estructural.
```

### 20 — El papel de las plataformas

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["tecnologia", "poder"]

respuesta: "monopolio"

tipo: mc
opciones_explicitas: ["monopolio", "competencia", "cooperación", "neutralidad"]

enunciado: "La concentración de datos en pocas corporaciones tecnológicas globales tiende a fomentar un ___ de información."

explicacion: |
  La economía de plataformas a menudo crea estructuras de poder centralizadas donde unos pocos actores controlan el flujo de información global.
```

### 21 — Fenómeno de integración económica

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["economia", "comercio"]

variables:
  datos: [["La firma de un tratado de libre comercio entre dos bloques continentales", "globalización económica"], ["La difusión masiva de una serie de televisión coreana en todo el mundo", "globalización cultural"], ["La creación de una nueva red de protocolos de comunicación para internet", "globalización tecnológica"]]
  idx: uno_de([0, 1, 2])

enunciado: "Un ejemplo de {datos[idx][0]} es un fenómeno de {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["globalización económica", "globalización cultural", "globalización tecnológica"]

explicacion: |
  El escenario describe la integración de mercados, la difusión de contenidos o la estandarización de redes, pilares de la globalización según su dimensión.
```

### 22 — El impacto de las redes sociales

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["tecnologia", "comunicacion"]

variables:
  datos: [["El uso de una misma aplicación de mensajería instantánea en todos los continentes", "tecnológica"], ["La adopción de modas estéticas globales a través de influencers", "cultural"], ["La fragmentación de las cadenas de suministro globales", "económica"]]
  idx: uno_de([0, 1, 2])

enunciado: "La adopción de {datos[idx][0]} representa una dimensión {datos[idx][1]} de la globalización."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["tecnológica", "cultural", "económica"]

explicacion: |
  La digitalización permite que las herramientas, las costumbres o los flujos de capital se muevan de forma casi instantánea por el planeta.
```

### 23 — Dimensiones de la globalización

```
metadata:
  materia: "historia_profucha"
  tema: "globalizacion_era_digital"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "La capacidad de transmitir datos de forma instantánea a través de satélites es un ejemplo de globalización ___."

respuestas_validas:
  - "tecnológica"
respuesta: "tecnológica"
tipo: completar

explicacion: |
  La infraestructura tecnológica es el soporte físico y digital que permite que las otras dimensiones (económica y cultural) operen a escala global.
```

### 24 — Secuencia de la digitalización económica

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "avanzado"
  tags: ["procesos", "economia"]

enunciado: "Ordena el proceso de integración de un mercado digital global:"

pasos:
  - "Desarrollo de infraestructura de fibra óptica y satélites"
  - "Creación de plataformas de comercio electrónico transfronterizo"
  - "Consolidación de un mercado de consumo global interconectado"

opciones_explicitas: ["Desarrollo de infraestructura de fibra óptica y satélites", "Creación de plataformas de comercio electrónico transfronterizo", "Consolidación de un mercado de consumo global interconectado"]
respuesta_orden: ["Desarrollo de infraestructura de fibra óptica y satélites", "Creación de plataformas de comercio electrónico transfronterizo", "Consolidación de un mercado de consumo global interconectado"]
tipo: ordenar

explicacion: |
  Primero se requiere el medio (tecnología), luego la herramienta de intercambio (plataforma) y finalmente el resultado sistémico (mercado global).
```

### 25 — Identificación de flujos culturales

```
metadata:
  materia: "historia_profunda"
  tema: "globalizacion_era_digital"
  nivel: "intermedio"
  tags: ["cultura", "consumo"]

variables:
  datos: [["La estandarización de los menús de comida rápida en países con dietas tradicionales", "cultural"], ["El flujo de capitales especulativos entre bolsas de valores", "económica"], ["La exportación de software de código abierto para uso mundial", "tecnológica"]]
  idx: uno_de([0, 1, 2])

enunciado: "El fenómeno de {datos[idx][0]} es un ejemplo de globalización ___."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cultural", "económica", "tecnológica"]

explicacion: |
  Cuando los hábitos de consumo o valores se vuelven homogéneos a pesar de las diferencias locales, estamos ante la globalización cultural.
```
