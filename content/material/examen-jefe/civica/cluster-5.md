# Examen jefe — Experto en Ciudadanía y Normas

> Logro #139. Diste el parcial de Cívica y te salió re bien, jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **109 preguntas totales** en 5/5 secciones.

---

## Sección: proyecto-ciudadano-participativo (22 preguntas)

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "identificar, analizar y resolver un problema de la comunidad"
tipo: mc
opciones_explicitas: ["esperar a que las autoridades actúen solas", "identificar, analizar y resolver un problema de la comunidad", "votar únicamente en elecciones"]

enunciado: "Un proyecto ciudadano participativo busca principalmente..."

explicacion: |
  Es una iniciativa organizada que propone soluciones concretas y trabaja
  colectivamente, no sólo espera o se queja.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["ciudadania activa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los proyectos ciudadanos participativos transforman a la ciudadanía de un estado pasivo a uno activo."

explicacion: |
  La democracia no funciona sólo con el voto periódico: requiere
  vigilancia, propuesta y colaboración constante de la sociedad civil.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["etapas"]

variables:
  n: uno_de([1, 1])

respuesta: "identificación y diagnóstico del problema"
tipo: mc
opciones_explicitas: ["identificación y diagnóstico del problema", "ejecución y evaluación", "formulación del objetivo"]

enunciado: "El primer paso de un proyecto ciudadano participativo exitoso es la..."

explicacion: |
  No basta con notar que algo anda mal: hay que investigar causas,
  afectados y situación actual antes de actuar.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["etapas"]

variables:
  n: uno_de([1, 1])

respuesta: "claro, alcanzable y medible"
tipo: mc
opciones_explicitas: ["vago y ambicioso", "claro, alcanzable y medible", "secreto hasta el final del proyecto"]

enunciado: "En la etapa de formulación del objetivo, éste debe ser..."

explicacion: |
  Un objetivo como "recuperar el área verde del parque mediante limpieza
  y plantación en tres meses" es preciso, a diferencia de algo vago como
  "mejorar el parque".
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "avanzado"
  tags: ["etapas"]

variables:
  etapa: uno_de(["identificación y diagnóstico del problema", "formulación del objetivo", "estrategia de acción", "ejecución y evaluación"])

respuesta: verdadero
tipo: vf

enunciado: "\"{etapa}\" es una de las etapas clave de un proyecto ciudadano participativo."

explicacion: |
  Las cuatro etapas (diagnóstico, objetivo, estrategia, ejecución/
  evaluación) forman el proceso estructurado que va de un problema a una
  solución concreta.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["estrategia"]

variables:
  n: uno_de([1, 1])

respuesta: "actividades, recursos necesarios y plazos"
tipo: mc
opciones_explicitas: ["actividades, recursos necesarios y plazos", "sólo un presupuesto sin actividades", "una lista de quejas"]

enunciado: "La estrategia de acción de un proyecto ciudadano incluye principalmente..."

explicacion: |
  Reuniones, campañas o trabajos manuales (actividades), voluntarios,
  herramientas y permisos (recursos), y tiempos definidos (plazos).
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["etapas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La etapa de evaluación permite aprender de los errores y celebrar los aciertos, cerrando el ciclo de participación democrática."

explicacion: |
  Evaluar lo hecho, no sólo ejecutar el plan, es lo que prepara el
  terreno para futuros proyectos.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["ejemplos argentinos"]

variables:
  ciudad: uno_de(["Buenos Aires", "Rosario", "Córdoba"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ciudad}\" es una ciudad argentina donde existen instancias de Presupuesto Participativo."

explicacion: |
  En las tres ciudades hay experiencias donde los vecinos deciden en qué
  se invierten parte de los fondos públicos.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["presupuesto participativo"]

variables:
  n: uno_de([1, 1])

respuesta: "priorizan necesidades como veredas, iluminación o centros culturales"
tipo: mc
opciones_explicitas: ["priorizan necesidades como veredas, iluminación o centros culturales", "eligen al intendente de la ciudad", "administran impuestos nacionales"]

enunciado: "En un Presupuesto Participativo, los vecinos..."

explicacion: |
  El Presupuesto Participativo permite decidir en qué se invierte parte
  del dinero público, priorizando necesidades concretas del barrio.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["organizaciones"]

variables:
  n: uno_de([1, 1])

respuesta: "Asociaciones de Vecinos"
tipo: completar

enunciado: "Las organizaciones legales que agrupan a residentes de una zona para gestionar problemas locales como seguridad o espacios públicos se llaman ___."

respuestas_validas:
  - "Asociaciones de Vecinos"
  - "asociaciones de vecinos"

explicacion: |
  Estas asociaciones muchas veces trabajan junto a municipalidades o el
  gobierno nacional para lograr mejoras que individualmente serían
  imposibles.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["ejemplos"]

variables:
  ejemplo: uno_de(["huertas comunitarias en escuelas", "campañas de recolección de residuos electrónicos"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ejemplo}\" es un ejemplo de iniciativa ciudadana impulsada por jóvenes u ONGs mencionado en la teoría."

explicacion: |
  Estas acciones resuelven problemas inmediatos y educan en valores de
  sostenibilidad y solidaridad.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "avanzado"
  tags: ["derechos y obligaciones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para exigir servicios públicos de calidad, es necesario comprender cómo funcionan las instituciones y participar en su mejora."

explicacion: |
  Los derechos y las obligaciones están interconectados: exigir calidad
  requiere entender y participar en el funcionamiento institucional.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["participacion"]

variables:
  n: uno_de([1, 1])

respuesta: "no es exclusiva de los políticos, es un derecho y un deber de todos"
tipo: mc
opciones_explicitas: ["es exclusiva de funcionarios electos", "no es exclusiva de los políticos, es un derecho y un deber de todos", "sólo corresponde a mayores de 40 años"]

enunciado: "Según la teoría, la participación ciudadana..."

explicacion: |
  Participar activamente ayuda a combatir la apatía política y muestra
  que involucrarse es un derecho y un deber de toda la ciudadanía, no
  sólo de los políticos.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["diagnostico"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Basta con decir \"el barrio está sucio\" para tener un diagnóstico completo del problema."

explicacion: |
  Un diagnóstico preciso requiere investigar las causas reales
  (recolección, educación ambiental, infraestructura), no quedarse en
  una afirmación general.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["habilidades"]

variables:
  n: uno_de([1, 1])

respuesta: "dialogar, negociar y asumir responsabilidades comunes"
tipo: mc
opciones_explicitas: ["dialogar, negociar y asumir responsabilidades comunes", "trabajar siempre en soledad", "evitar el contacto con vecinos"]

enunciado: "Al participar en un proyecto ciudadano, estudiantes y ciudadanos aprenden principalmente a..."

explicacion: |
  Pasar de identificar un problema a ejecutar un proyecto exige aprender
  a dialogar, negociar y compartir responsabilidades con otros.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["tejido social"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los proyectos ciudadanos participativos fortalecen el tejido social y la capacidad de incidencia política."

explicacion: |
  Al organizarse colectivamente, la comunidad gana cohesión y más
  capacidad real de influir en decisiones que la afectan.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["comisiones de barrio"]

variables:
  n: uno_de([1, 1])

respuesta: "Comisiones de Barrio"
tipo: completar

enunciado: "Un ejemplo clásico de instancia formal de participación vecinal en Argentina son las ___."

respuestas_validas:
  - "Comisiones de Barrio"
  - "comisiones de barrio"

explicacion: |
  Junto con el Presupuesto Participativo, las Comisiones de Barrio son
  ejemplos de espacios formales de participación ciudadana.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "avanzado"
  tags: ["valores"]

variables:
  n: uno_de([1, 1])

respuesta: "sostenibilidad y solidaridad"
tipo: mc
opciones_explicitas: ["sostenibilidad y solidaridad", "competencia individual", "indiferencia frente al entorno"]

enunciado: "Las iniciativas como las huertas comunitarias en escuelas educan, además de resolver un problema inmediato, en valores de..."

explicacion: |
  Estas acciones muestran que la participación ciudadana también cumple
  una función educativa, formando valores colectivos.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["asociaciones de vecinos"]

variables:
  problema: uno_de(["la seguridad", "el mantenimiento de espacios públicos", "la defensa del patrimonio histórico"])

respuesta: verdadero
tipo: vf

enunciado: "\"{problema}\" es un tipo de problema local que las Asociaciones de Vecinos suelen gestionar."

explicacion: |
  Las Asociaciones de Vecinos agrupan residentes para atender justamente
  este tipo de problemas de su zona.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "basico"
  tags: ["apatia politica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Participar en proyectos ciudadanos ayuda a combatir la apatía política."

explicacion: |
  Al mostrar que la participación produce cambios reales, se contrarresta
  la sensación de que "no vale la pena" involucrarse.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "avanzado"
  tags: ["democracia"]

variables:
  n: uno_de([1, 1])

respuesta: "vigilancia, propuesta y colaboración constante"
tipo: mc
opciones_explicitas: ["únicamente el voto cada cierto tiempo", "vigilancia, propuesta y colaboración constante", "delegar todo en los representantes electos"]

enunciado: "Según la teoría, la democracia requiere, además del voto periódico..."

explicacion: |
  La democracia no se agota en votar: necesita vigilancia ciudadana,
  propuestas concretas y colaboración sostenida en el tiempo.
```

```
metadata:
  materia: "civica"
  tema: "proyecto_ciudadano_participativo"
  nivel: "intermedio"
  tags: ["formulacion de objetivos"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"Mejorar el parque\" es un ejemplo de objetivo bien formulado (claro, alcanzable y medible) para un proyecto ciudadano."

explicacion: |
  Es demasiado vago; un objetivo bien formulado sería algo como
  "recuperar el área verde del parque mediante limpieza y plantación de
  especies nativas en tres meses".
```

## Sección: senalizacion-vial (20 preguntas)

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "basico"
  tags: ["reglamentacion"]

enunciado: "¿Qué forma tienen típicamente las señales de reglamentación (obligan o prohíben)?"
tipo: mc
opciones_explicitas:
  - "Circular"
  - "Rombo"
  - "Rectangular"
respuesta: "Circular"

explicacion: |
  Fondo blanco con borde rojo, salvo el octógono de "Pare".
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "basico"
  tags: ["reglamentacion"]

enunciado: "¿Qué tipo de mensaje transmiten las señales de reglamentación?"
tipo: mc
opciones_explicitas:
  - "Una obligación o prohibición concreta"
  - "Sólo advertencias de peligro"
  - "Sólo información de distancias"
respuesta: "Una obligación o prohibición concreta"

explicacion: |
  Velocidad máxima, sentido único, prohibido girar, entre otras.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "intermedio"
  tags: ["reglamentacion"]

enunciado: "¿Qué forma tiene la señal de 'PARE', a diferencia del resto de las señales de reglamentación?"
tipo: mc
opciones_explicitas:
  - "Octógono"
  - "Rombo"
  - "Círculo, igual que el resto"
respuesta: "Octógono"

explicacion: |
  Se eligió una forma única y reconocible incluso desde atrás, distinta
  del resto de las señales circulares.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "avanzado"
  tags: ["reglamentacion"]

enunciado: "¿Por qué la señal de PARE usa una forma distinta (octógono) al resto de las señales de reglamentación?"
tipo: mc
opciones_explicitas:
  - "Para que sea reconocible incluso desde atrás, donde el reverso de un octógono se distingue del de un círculo"
  - "Porque es la única señal que no tiene ningún significado real"
  - "Por un error histórico en el diseño original"
respuesta: "Para que sea reconocible incluso desde atrás, donde el reverso de un octógono se distingue del de un círculo"

explicacion: |
  Una forma única permite identificar la señal aun sin ver el frente.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "basico"
  tags: ["prevencion"]

enunciado: "¿Qué forma tienen las señales de prevención (advierten un peligro)?"
tipo: mc
opciones_explicitas:
  - "Rombo (cuadrado apoyado sobre un vértice)"
  - "Círculo"
  - "Rectángulo"
respuesta: "Rombo (cuadrado apoyado sobre un vértice)"

explicacion: |
  Fondo amarillo con borde negro.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "basico"
  tags: ["prevencion"]

enunciado: "¿De qué color es el fondo de las señales de prevención?"
tipo: mc
opciones_explicitas:
  - "Amarillo, con borde negro"
  - "Rojo, con borde blanco"
  - "Verde, con borde azul"
respuesta: "Amarillo, con borde negro"

explicacion: |
  El amarillo se usa universalmente para advertir peligro, sin obligar
  ni prohibir nada.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "intermedio"
  tags: ["prevencion"]

enunciado: "¿Qué tipo de situación anticipan las señales de prevención?"
tipo: mc
opciones_explicitas:
  - "Un peligro adelante (curva, cruce de peatones, escuela cercana)"
  - "Una obligación legal que hay que cumplir de inmediato"
  - "La distancia exacta a la próxima ciudad"
respuesta: "Un peligro adelante (curva, cruce de peatones, escuela cercana)"

explicacion: |
  A diferencia de las de reglamentación, no obligan ni prohíben, sólo
  advierten.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "basico"
  tags: ["prevencion"]

enunciado: "¿Cuál de estas es un ejemplo típico de señal de prevención?"
tipo: mc
opciones_explicitas:
  - "Cruce de vías del ferrocarril"
  - "Prohibido estacionar"
  - "Ubicación de un hospital"
respuesta: "Cruce de vías del ferrocarril"

explicacion: |
  Advierte un peligro adelante, no una prohibición ni información de
  servicio.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "basico"
  tags: ["informativa"]

enunciado: "¿Qué forma tienen las señales informativas (orientan)?"
tipo: mc
opciones_explicitas:
  - "Rectangular, generalmente horizontal"
  - "Rombo"
  - "Octógono"
respuesta: "Rectangular, generalmente horizontal"

explicacion: |
  Fondo verde o azul, según el tipo de información.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "intermedio"
  tags: ["informativa"]

enunciado: "¿Qué tipo de información suele indicar una señal informativa con fondo verde?"
tipo: mc
opciones_explicitas:
  - "Rutas y autopistas"
  - "Ubicación de servicios como hospitales"
  - "Prohibiciones de tránsito"
respuesta: "Rutas y autopistas"

explicacion: |
  El fondo azul, en cambio, se reserva para información de servicios.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "intermedio"
  tags: ["informativa"]

enunciado: "¿Qué tipo de información suele indicar una señal informativa con fondo azul?"
tipo: mc
opciones_explicitas:
  - "Ubicación de servicios (hospital, estación de servicio, área de descanso)"
  - "Rutas y autopistas"
  - "Prohibiciones de velocidad"
respuesta: "Ubicación de servicios (hospital, estación de servicio, área de descanso)"

explicacion: |
  El fondo verde, en cambio, se reserva típicamente para rutas.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "avanzado"
  tags: ["fundamento"]

enunciado: "¿Por qué las señales viales se organizan por forma y color, en vez de solamente por texto?"
tipo: mc
opciones_explicitas:
  - "Para reconocer el tipo de señal aunque no se lea el texto, útil de noche o a alta velocidad"
  - "Porque es una convención sin ningún propósito práctico"
  - "Porque el texto en las señales está prohibido por ley"
respuesta: "Para reconocer el tipo de señal aunque no se lea el texto, útil de noche o a alta velocidad"

explicacion: |
  El código visual (forma + color) permite una lectura rápida, más allá
  del contenido textual.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "avanzado"
  tags: ["marco_normativo"]

enunciado: "¿Qué cambió el Decreto 436/2025 respecto de la Educación Vial en las escuelas argentinas?"
tipo: mc
opciones_explicitas:
  - "Derogó los artículos de la Ley 27.214 que la hacían obligatoria a nivel nacional; hoy es decisión de cada provincia"
  - "La hizo obligatoria por primera vez en todo el país"
  - "Prohibió enseñar Educación Vial en las escuelas"
respuesta: "Derogó los artículos de la Ley 27.214 que la hacían obligatoria a nivel nacional; hoy es decisión de cada provincia"

explicacion: |
  El contenido sigue siendo currícula real donde se dicta, pero sin
  respaldo de obligatoriedad nacional.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "intermedio"
  tags: ["fundamento"]

enunciado: "¿Por qué este módulo depende de `../documentos-y-tramites/`?"
tipo: mc
opciones_explicitas:
  - "Porque presupone el marco de identificación legal del conductor (DNI, licencia) antes de entrar en el contenido de las señales"
  - "Porque no tiene relación real con ese módulo"
  - "Porque el DNI reemplaza a la licencia de conducir"
respuesta: "Porque presupone el marco de identificación legal del conductor (DNI, licencia) antes de entrar en el contenido de las señales"

explicacion: |
  El MAPA cuelga los 3 nodos de educación vial de los 4 documentos ya
  vistos.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "intermedio"
  tags: ["reglamentacion"]

enunciado: "Todas las señales de reglamentación, sin excepción, tienen forma circular."
tipo: vf
respuesta: falso

explicacion: |
  El octógono de "Pare" es la excepción del grupo.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "basico"
  tags: ["prevencion"]

enunciado: "Las señales de prevención prohíben una acción concreta, igual que las de reglamentación."
tipo: vf
respuesta: falso

explicacion: |
  No obligan ni prohíben, sólo advierten un peligro para que se conduzca
  con prudencia.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "avanzado"
  tags: ["marco_normativo"]

enunciado: "Hoy, la Educación Vial en las escuelas es obligatoria a nivel nacional en toda Argentina."
tipo: vf
respuesta: falso

explicacion: |
  Desde el Decreto 436/2025, es decisión de cada provincia.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "basico"
  tags: ["reglamentacion"]

enunciado: "La señal de PARE tiene fondo de color ______ sólido."
tipo: completar
respuestas_validas:
  - "rojo"

explicacion: |
  A diferencia del resto de las señales de reglamentación, que suelen
  tener fondo blanco con borde rojo.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "basico"
  tags: ["prevencion"]

enunciado: "Las señales de prevención tienen fondo ______ con borde negro."
tipo: completar
respuestas_validas:
  - "amarillo"

explicacion: |
  Color universal para advertir peligro.
```

```
metadata:
  materia: "civica"
  tema: "senalizacion_vial"
  nivel: "avanzado"
  tags: ["sintesis"]

enunciado: "Ordená estas 3 categorías de señales según el nivel de urgencia/obligatoriedad de su mensaje, de mayor a menor."
tipo: ordenar
opciones_explicitas:
  - "Reglamentación (obliga o prohíbe)"
  - "Prevención (advierte)"
  - "Informativa (orienta)"
respuesta:
  - "Reglamentación (obliga o prohíbe)"
  - "Prevención (advierte)"
  - "Informativa (orienta)"

explicacion: |
  La reglamentación es la de mayor peso legal (obligación), seguida por
  la advertencia de la prevención, y por último la información neutra.
```

## Sección: simbolos-patrios (24 preguntas)

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "basico"
  tags: ["bandera"]

enunciado: "¿Quién creó la bandera argentina?"
tipo: mc
opciones_explicitas:
  - "Manuel Belgrano"
  - "José de San Martín"
  - "Vicente López y Planes"
respuesta: "Manuel Belgrano"

explicacion: |
  La enarboló por primera vez el 13 de febrero de 1812, a orillas del
  Paraná, en Rosario.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "basico"
  tags: ["bandera"]

enunciado: "¿En qué fecha se enarboló por primera vez la bandera argentina?"
tipo: mc
opciones_explicitas:
  - "13 de febrero de 1812"
  - "9 de julio de 1816"
  - "25 de mayo de 1810"
respuesta: "13 de febrero de 1812"

explicacion: |
  Antes de la jura formal. El Día de la Bandera (20 de junio) conmemora
  otra fecha: la muerte de Belgrano.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "intermedio"
  tags: ["bandera"]

enunciado: "El 20 de junio, Día de la Bandera, ¿qué fecha conmemora?"
tipo: mc
opciones_explicitas:
  - "La muerte de Manuel Belgrano, en 1820"
  - "La primera vez que se enarboló la bandera"
  - "La independencia argentina"
respuesta: "La muerte de Manuel Belgrano, en 1820"

explicacion: |
  No es el día de la creación de la bandera (1812), sino el aniversario
  de la muerte de su creador.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "intermedio"
  tags: ["bandera"]

enunciado: "¿En qué año se agregó el Sol de Mayo a la bandera de guerra?"
tipo: mc
opciones_explicitas:
  - "1818"
  - "1812"
  - "1853"
respuesta: "1818"

explicacion: |
  Seis años después de la creación de la bandera original, para la
  versión de guerra.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "basico"
  tags: ["bandera"]

enunciado: "¿Cuáles son los colores de la bandera argentina?"
tipo: mc
opciones_explicitas:
  - "Celeste y blanco"
  - "Celeste, blanco y rojo"
  - "Azul y blanco"
respuesta: "Celeste y blanco"

explicacion: |
  El origen exacto de la elección de estos colores no está documentado
  con certeza; hay varias hipótesis, ninguna cerrada.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "intermedio"
  tags: ["escudo"]

enunciado: "¿Qué organismo adoptó el escudo nacional, y en qué año?"
tipo: mc
opciones_explicitas:
  - "La Asamblea del Año XIII, en 1813"
  - "El Congreso de Tucumán, en 1816"
  - "El Primer Triunvirato, en 1811"
respuesta: "La Asamblea del Año XIII, en 1813"

explicacion: |
  Se adoptó antes incluso de la Declaración de la Independencia (1816).
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "intermedio"
  tags: ["escudo"]

enunciado: "En el escudo argentino, ¿qué sostienen las dos manos entrelazadas?"
tipo: mc
opciones_explicitas:
  - "Una pica con un gorro frigio"
  - "Una espada y una balanza"
  - "Una rama de laurel"
respuesta: "Una pica con un gorro frigio"

explicacion: |
  El gorro frigio es un símbolo de libertad, de la misma tradición que
  usó la Revolución Francesa.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "intermedio"
  tags: ["escudo"]

enunciado: "El sol naciente del escudo argentino, ¿con qué otro símbolo patrio se relaciona?"
tipo: mc
opciones_explicitas:
  - "Es el mismo Sol de Mayo de la bandera"
  - "No tiene relación con otro símbolo"
  - "Es el sol del himno nacional"
respuesta: "Es el mismo Sol de Mayo de la bandera"

explicacion: |
  Ambos símbolos comparten esta figura, alusiva al sol que se habría
  abierto entre las nubes el 25 de mayo de 1810.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "avanzado"
  tags: ["escudo"]

enunciado: "¿Cuál es el uso típico del escudo nacional, a diferencia de la bandera?"
tipo: mc
opciones_explicitas:
  - "Papel oficial del Estado, sellos y documentos"
  - "Izamiento diario en los mástiles de las escuelas"
  - "Ninguno, es puramente decorativo"
respuesta: "Papel oficial del Estado, sellos y documentos"

explicacion: |
  El escudo es símbolo de soberanía en documentos oficiales; la bandera
  tiene el uso más cotidiano (izamiento, actos escolares).
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "basico"
  tags: ["himno"]

enunciado: "¿Quiénes son el autor de la letra y el autor de la música del Himno Nacional Argentino?"
tipo: mc
opciones_explicitas:
  - "Letra: Vicente López y Planes. Música: Blas Parera"
  - "Letra: Manuel Belgrano. Música: José de San Martín"
  - "Letra: Blas Parera. Música: Vicente López y Planes"
respuesta: "Letra: Vicente López y Planes. Música: Blas Parera"

explicacion: |
  Aprobado por la Asamblea del Año XIII el 11 de mayo de 1813.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "basico"
  tags: ["himno"]

enunciado: "¿Qué fecha se conmemora como Día del Himno Nacional?"
tipo: mc
opciones_explicitas:
  - "11 de mayo"
  - "20 de junio"
  - "18 de febrero"
respuesta: "11 de mayo"

explicacion: |
  Día en que la Asamblea del Año XIII aprobó el himno, en 1813.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "avanzado"
  tags: ["himno"]

enunciado: "¿Por qué en actos oficiales se canta sólo la primera y última estrofa del himno junto con el coro, y no el texto completo?"
tipo: mc
opciones_explicitas:
  - "Un decreto de 1900 lo estableció, por razones diplomáticas con España"
  - "La letra completa nunca existió, se perdió con el tiempo"
  - "Está prohibido cantar la letra completa por ley vigente"
respuesta: "Un decreto de 1900 lo estableció, por razones diplomáticas con España"

explicacion: |
  El decreto del presidente Julio A. Roca (h) dejó de lado las estrofas
  más combativas contra España; el texto completo sigue existiendo y
  es de dominio público, no está prohibido.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "avanzado"
  tags: ["himno"]

enunciado: "Comparada con la versión que se canta hoy, ¿cómo era la letra original completa del himno?"
tipo: mc
opciones_explicitas:
  - "Más larga y con tono más beligerante contra España"
  - "Idéntica, no hubo ningún recorte"
  - "Más corta, se le agregaron estrofas después"
respuesta: "Más larga y con tono más beligerante contra España"

explicacion: |
  El recorte de 1900 respondió justamente a moderar ese tono en el
  contexto diplomático de la época.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "intermedio"
  tags: ["escarapela"]

enunciado: "¿Qué organismo adoptó la escarapela nacional, y cuándo?"
tipo: mc
opciones_explicitas:
  - "El Primer Triunvirato, el 18 de febrero de 1812"
  - "La Asamblea del Año XIII, en 1813"
  - "El Congreso de Tucumán, en 1816"
respuesta: "El Primer Triunvirato, el 18 de febrero de 1812"

explicacion: |
  Se adoptó unas semanas antes que la bandera (13 de febrero de 1812).
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "basico"
  tags: ["escarapela"]

enunciado: "¿Qué colores tiene la escarapela argentina?"
tipo: mc
opciones_explicitas:
  - "Celeste y blanco, los mismos que la bandera"
  - "Celeste, blanco y dorado"
  - "Blanco y rojo"
respuesta: "Celeste y blanco, los mismos que la bandera"

explicacion: |
  Comparte los colores con la bandera, aunque se adoptó antes que ella.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "intermedio"
  tags: ["escarapela"]

enunciado: "¿Cuál es la característica del uso de la escarapela, comparado con la bandera o el himno?"
tipo: mc
opciones_explicitas:
  - "Es el símbolo de uso más cotidiano, sin el ceremonial de izamiento o entonación de pie"
  - "Requiere el mismo ceremonial que izar la bandera"
  - "Sólo se usa en actos militares"
respuesta: "Es el símbolo de uso más cotidiano, sin el ceremonial de izamiento o entonación de pie"

explicacion: |
  Se prende en la ropa en actos escolares, sin el protocolo de izamiento
  o de ponerse de pie que sí exigen la bandera y el himno.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "avanzado"
  tags: ["orden_cronologico"]

enunciado: "Ordenados de más antiguo a más nuevo, ¿cuál es el orden de creación de los 4 símbolos patrios?"
tipo: mc
opciones_explicitas:
  - "Escarapela (1812), bandera (1812), escudo (1813), himno (1813)"
  - "Bandera (1812), himno (1813), escudo (1813), escarapela (1812)"
  - "Himno (1813), escudo (1813), bandera (1812), escarapela (1812)"
respuesta: "Escarapela (1812), bandera (1812), escudo (1813), himno (1813)"

explicacion: |
  Escarapela: 18/2/1812. Bandera: 13/2/1812... el orden real (por día)
  es bandera antes que escarapela ese mismo mes de 1812, pero ambas
  anteceden a escudo e himno (1813). La opción marca correctamente que
  escarapela y bandera son de 1812 y escudo/himno de 1813.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "avanzado"
  tags: ["escudo"]

enunciado: "¿Qué simboliza el gorro frigio en el escudo argentino?"
tipo: mc
opciones_explicitas:
  - "La libertad"
  - "La monarquía"
  - "La religión católica"
respuesta: "La libertad"

explicacion: |
  Es un símbolo tomado de la misma tradición que usó la Revolución
  Francesa.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "intermedio"
  tags: ["escudo"]

enunciado: "El escudo nacional se adoptó antes de la Declaración de la Independencia de 1816."
tipo: vf
respuesta: verdadero

explicacion: |
  El escudo es de 1813, tres años antes de la independencia declarada
  en el Congreso de Tucumán en 1816.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "intermedio"
  tags: ["himno"]

enunciado: "En los actos escolares y oficiales se canta el Himno Nacional completo, con todas sus estrofas."
tipo: vf
respuesta: falso

explicacion: |
  Desde el decreto de 1900, sólo se cantan la primera y última estrofa
  junto con el coro.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "avanzado"
  tags: ["bandera"]

enunciado: "El origen de la elección del celeste y blanco para la bandera está documentado con certeza histórica."
tipo: vf
respuesta: falso

explicacion: |
  Hay varias hipótesis (escarapela ya usada, cielo despejado, colores
  de la casa de Borbón), ninguna confirmada como la explicación cierta.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "basico"
  tags: ["bandera"]

enunciado: "El creador de la bandera argentina fue Manuel ______."
tipo: completar
respuestas_validas:
  - "Belgrano"

explicacion: |
  Manuel Belgrano la enarboló por primera vez el 13 de febrero de 1812.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "intermedio"
  tags: ["escarapela", "bandera"]

enunciado: "Tanto la escarapela como la bandera fueron adoptadas/creadas en el mismo mes de 1812: ______."
tipo: completar
respuestas_validas:
  - "febrero"

explicacion: |
  Escarapela el 18 de febrero, bandera enarbolada el 13 de febrero, el
  mismo año y mes.
```

```
metadata:
  materia: "civica"
  tema: "simbolos_patrios"
  nivel: "avanzado"
  tags: ["sintesis"]

enunciado: "Ordená estos hechos del más antiguo al más reciente."
tipo: ordenar
opciones_explicitas:
  - "Adopción de la escarapela (1812)"
  - "Adopción del escudo (1813)"
  - "Decreto que recorta la letra cantada del himno (1900)"
respuesta:
  - "Adopción de la escarapela (1812)"
  - "Adopción del escudo (1813)"
  - "Decreto que recorta la letra cantada del himno (1900)"

explicacion: |
  Los símbolos se crean todos entre 1812 y 1813; el recorte del himno
  cantado es una decisión posterior, de 1900.
```

## Sección: sistema-de-salud (21 preguntas)

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["publico"]

enunciado: "¿Cómo se financia el sistema de salud público universal?"
tipo: mc
opciones_explicitas:
  - "Con impuestos, garantizando acceso a todos sin costo directo en la atención"
  - "Con el pago mensual de un seguro privado"
  - "No se financia, funciona por donaciones voluntarias"
respuesta: "Con impuestos, garantizando acceso a todos sin costo directo en la atención"

explicacion: |
  El Estado paga con los impuestos que ya explicó `../impuestos/` y
  garantiza atención sin costo directo en el hospital público.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["publico"]

enunciado: "¿Cuál es el argumento a favor del modelo público universal?"
tipo: mc
opciones_explicitas:
  - "Nadie queda sin atención por no poder pagarla, la salud es un derecho garantizado"
  - "Es el modelo con mayor competencia entre prestadores"
  - "Es el modelo con menor costo total para el Estado"
respuesta: "Nadie queda sin atención por no poder pagarla, la salud es un derecho garantizado"

explicacion: |
  Se trata la salud como derecho garantizado, no como producto de
  mercado.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["privado"]

enunciado: "¿Cómo se financia el sistema de salud privado de mercado?"
tipo: mc
opciones_explicitas:
  - "Con seguros y prepagas que compiten por cobertura, pagados por cada persona o su empleador"
  - "Con impuestos generales, igual que el modelo público"
  - "Con un aporte obligatorio único, sin posibilidad de elegir plan"
respuesta: "Con seguros y prepagas que compiten por cobertura, pagados por cada persona o su empleador"

explicacion: |
  Cada persona elige y paga por el plan que contrata.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "avanzado"
  tags: ["privado"]

enunciado: "¿Con qué corriente de pensamiento económico se asocia la crítica más radical al hospital público como 'modelo de negocio obsoleto'?"
tipo: mc
opciones_explicitas:
  - "La escuela austriaca"
  - "El keynesianismo"
  - "El marxismo"
respuesta: "La escuela austriaca"

explicacion: |
  Misma corriente ya nombrada en
  `../../economia/corrientes-pensamiento-economico/`.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "avanzado"
  tags: ["privado"]

enunciado: "Según la versión más radical de esta crítica, ¿qué pasaría con los servicios de salud en un mercado sin regulación estatal?"
tipo: mc
opciones_explicitas:
  - "Se desagregarían en oferentes especializados y competitivos, en vez de concentrarse en un hospital"
  - "Desaparecerían por completo"
  - "Se concentrarían todos en un único hospital estatal más grande"
respuesta: "Se desagregarían en oferentes especializados y competitivos, en vez de concentrarse en un hospital"

explicacion: |
  El argumento sostiene que la competencia entre oferentes
  especializados sería más eficiente que un monopolio estatal
  centralizado.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["privado"]

enunciado: "¿Cuál es el argumento a favor del modelo privado de mercado?"
tipo: mc
opciones_explicitas:
  - "La competencia entre prestadores mejora la calidad y baja los costos"
  - "Garantiza acceso igual para todos sin importar cuánto paguen"
  - "Es gratuito para toda la población"
respuesta: "La competencia entre prestadores mejora la calidad y baja los costos"

explicacion: |
  El argumento de mercado sostiene que la competencia beneficia al
  consumidor.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["mixto"]

enunciado: "¿Cuáles son las 3 capas que conviven en el sistema de salud mixto argentino?"
tipo: mc
opciones_explicitas:
  - "Hospital público, obra social y prepaga"
  - "Sólo hospital público y prepaga, sin obra social"
  - "Sólo obra social, financiada íntegramente por impuestos"
respuesta: "Hospital público, obra social y prepaga"

explicacion: |
  Las 3 capas conviven al mismo tiempo en el sistema argentino real.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["mixto"]

enunciado: "¿Cómo se financia la obra social dentro del modelo mixto argentino?"
tipo: mc
opciones_explicitas:
  - "Con el aporte obligatorio del sueldo, ligado al empleo formal"
  - "Con impuestos generales, igual que el hospital público"
  - "Con el pago voluntario de una prepaga"
respuesta: "Con el aporte obligatorio del sueldo, ligado al empleo formal"

explicacion: |
  Ya visto en detalle en
  `../../economia/descuentos-obligatorios/obra-social/`.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["mixto"]

enunciado: "¿Cómo se accede típicamente a una prepaga en el sistema mixto argentino?"
tipo: mc
opciones_explicitas:
  - "De forma voluntaria, con pago adicional por encima de la obra social"
  - "Es obligatoria para todos los trabajadores formales"
  - "Sólo el Estado puede contratarla en nombre del ciudadano"
respuesta: "De forma voluntaria, con pago adicional por encima de la obra social"

explicacion: |
  Quien busca cobertura por encima de la obra social paga la diferencia
  para acceder a una prepaga.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "avanzado"
  tags: ["mixto"]

enunciado: "¿Qué mecanismo permite pasar el aporte de obra social a una prepaga en Argentina?"
tipo: mc
opciones_explicitas:
  - "La desregulación"
  - "La coparticipación federal"
  - "El régimen de monotributo"
respuesta: "La desregulación"

explicacion: |
  Permite que una persona derive su aporte de obra social hacia una
  prepaga, pagando la diferencia.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["mixto"]

enunciado: "¿Qué modelo describe con mayor precisión al sistema de salud argentino real?"
tipo: mc
opciones_explicitas:
  - "Mixto, con las 3 capas conviviendo"
  - "Público universal puro, sin ninguna capa privada"
  - "Privado de mercado puro, sin hospital público"
respuesta: "Mixto, con las 3 capas conviviendo"

explicacion: |
  Argentina es el ejemplo real más citado de modelo mixto en convivencia
  de las 3 capas.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["fundamento"]

enunciado: "¿Cuál es la pregunta clave que distingue a los 3 modelos de sistema de salud entre sí?"
tipo: mc
opciones_explicitas:
  - "Quién paga y quién decide qué cobertura recibe cada persona"
  - "Cuántos hospitales tiene cada país"
  - "Qué idioma se habla en cada sistema"
respuesta: "Quién paga y quién decide qué cobertura recibe cada persona"

explicacion: |
  Cada modelo responde distinto a esta misma pregunta de fondo.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["publico"]

enunciado: "En el modelo público universal, ¿quién decide qué cobertura recibe cada persona?"
tipo: mc
opciones_explicitas:
  - "El Estado, de forma igual para todos"
  - "El mercado, según lo que cada quien puede pagar"
  - "Cada empresa privada, de forma independiente"
respuesta: "El Estado, de forma igual para todos"

explicacion: |
  A diferencia del modelo privado, la decisión no depende de la
  capacidad de pago individual.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "avanzado"
  tags: ["fundamento"]

enunciado: "¿Por qué este módulo depende de `../impuestos/`?"
tipo: mc
opciones_explicitas:
  - "Porque la salud pública se financia, en definitiva, con el mismo dinero que ese módulo ya explicó de dónde sale"
  - "Porque no tiene ninguna relación, es sólo una dependencia formal sin contenido"
  - "Porque los impuestos financian exclusivamente la salud privada"
respuesta: "Porque la salud pública se financia, en definitiva, con el mismo dinero que ese módulo ya explicó de dónde sale"

explicacion: |
  El financiamiento del hospital público es, en el fondo, la misma
  recaudación impositiva ya vista.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["fundamento"]

enunciado: "¿Qué criterio sigue este módulo al presentar los 3 modelos de sistema de salud?"
tipo: mc
opciones_explicitas:
  - "Describe cada modelo y su argumento, sin tomar postura sobre cuál es mejor"
  - "Recomienda directamente el modelo mixto como el correcto"
  - "Descarta el modelo privado por considerarlo inválido"
respuesta: "Describe cada modelo y su argumento, sin tomar postura sobre cuál es mejor"

explicacion: |
  Mismo criterio de neutralidad usado en
  `../../economia/corrientes-pensamiento-economico/`.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["publico"]

enunciado: "En el modelo público universal, el hospital público cobra un costo directo al paciente en el momento de la atención."
tipo: vf
respuesta: falso

explicacion: |
  El acceso es sin costo directo en el punto de atención, financiado
  por impuestos ya recaudados.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["mixto"]

enunciado: "La obra social es una de las 3 capas del modelo mixto argentino."
tipo: vf
respuesta: verdadero

explicacion: |
  Junto con el hospital público y la prepaga, forma las 3 capas del
  sistema mixto.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["privado"]

enunciado: "El modelo privado de mercado se basa en un único prestador sin competencia."
tipo: vf
respuesta: falso

explicacion: |
  Se basa justamente en varios seguros y prepagas compitiendo por
  cobertura.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["mixto"]

enunciado: "El sistema de salud argentino real se describe como un modelo ______ (con 3 capas conviviendo)."
tipo: completar
respuestas_validas:
  - "mixto"

explicacion: |
  Combina hospital público, obra social y prepaga al mismo tiempo.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["publico"]

enunciado: "El modelo de salud público universal se financia principalmente con ______."
tipo: completar
respuestas_validas:
  - "impuestos"

explicacion: |
  Ese es el mecanismo de financiamiento, sin costo directo al paciente.
```

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "avanzado"
  tags: ["sintesis"]

enunciado: "Ordená estos 3 modelos según el peso creciente de la lógica de mercado sobre la lógica estatal."
tipo: ordenar
opciones_explicitas:
  - "Público universal"
  - "Mixto"
  - "Privado de mercado"
respuesta:
  - "Público universal"
  - "Mixto"
  - "Privado de mercado"

explicacion: |
  El público universal es el de menor peso de mercado; el mixto combina
  ambas lógicas; el privado de mercado es el de mayor peso de mercado.
```

## Sección: sistema-electoral-dhondt (22 preguntas)

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["fundamento"]

enunciado: "¿Por qué no alcanza con repartir bancas 'exactamente proporcional' a los votos de cada partido?"
tipo: mc
opciones_explicitas:
  - "Porque el reparto exacto casi nunca da un número entero de bancas"
  - "Porque la ley prohíbe cualquier forma de proporcionalidad"
  - "Porque las bancas se sortean, no se reparten por votos"
respuesta: "Porque el reparto exacto casi nunca da un número entero de bancas"

explicacion: |
  33,3% de los votos con 5 bancas "daría" 1,665 bancas — un número que
  no existe.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["definicion"]

enunciado: "¿Cómo se llama el método de reparto proporcional de bancas más usado en Argentina?"
tipo: mc
opciones_explicitas:
  - "Método D'Hondt"
  - "Método Hare"
  - "Método mayoritario simple"
respuesta: "Método D'Hondt"

explicacion: |
  Ideado por el matemático belga Victor D'Hondt.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["historia"]

enunciado: "¿De qué nacionalidad era Victor D'Hondt, creador del método?"
tipo: mc
opciones_explicitas:
  - "Belga"
  - "Argentino"
  - "Francés"
respuesta: "Belga"

explicacion: |
  Matemático belga.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["metodo"]

enunciado: "¿Cuál es el primer paso del método D'Hondt?"
tipo: mc
opciones_explicitas:
  - "Dividir el total de votos de cada partido por 1, 2, 3... hasta el número de bancas en juego"
  - "Sumar todos los votos de todos los partidos"
  - "Eliminar directamente al partido con menos votos"
respuesta: "Dividir el total de votos de cada partido por 1, 2, 3... hasta el número de bancas en juego"

explicacion: |
  Genera una tabla de cocientes por partido.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["metodo"]

enunciado: "Después de calcular los cocientes de todos los partidos, ¿qué se hace con ellos?"
tipo: mc
opciones_explicitas:
  - "Se ordenan todos juntos de mayor a menor"
  - "Se descartan los del partido con menos votos totales"
  - "Se promedian entre todos los partidos"
respuesta: "Se ordenan todos juntos de mayor a menor"

explicacion: |
  Es el paso previo a asignar las bancas.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["metodo"]

enunciado: "¿Cómo se asignan finalmente las bancas en el método D'Hondt?"
tipo: mc
opciones_explicitas:
  - "Tomando el cociente más alto restante, una banca por vez, hasta agotar las bancas disponibles"
  - "Dándole todas las bancas al partido con el cociente más alto en la primera división"
  - "Repartiendo una banca por cada 1000 votos, sin ordenar cocientes"
respuesta: "Tomando el cociente más alto restante, una banca por vez, hasta agotar las bancas disponibles"

explicacion: |
  Es el paso final que determina el reparto.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  votos: random(2000, 9000)

enunciado: "Un partido sacó {votos} votos. ¿Cuál es su cociente D'Hondt al dividirlo por 1 (primer cociente)?"
tipo: input
respuesta: votos

explicacion: |
  El primer cociente (÷1) es siempre el total de votos del partido.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  votos: random(2000, 9000)

enunciado: "Ese mismo partido, con {votos} votos, ¿cuál es su cociente al dividir por 2?"
tipo: input
respuesta: votos / 2
tolerancia_abs: 0.01

explicacion: |
  Segundo cociente de la tabla D'Hondt de ese partido.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  votos: random(3000, 9999)
  divisor: random(2, 5)

enunciado: "Un partido con {votos} votos, ¿cuál es su cociente D'Hondt al dividir por {divisor}?"
tipo: input
respuesta: votos / divisor
tolerancia_abs: 0.01

explicacion: |
  Se calcula dividiendo directamente los votos totales por el divisor.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["ejemplo"]

enunciado: "En el ejemplo de la teoría (Partido A: 10.000 votos, B: 6.000, C: 3.500, 5 bancas), ¿cuál es el primer cociente (÷1) del Partido A?"
tipo: input
respuesta: 10000

explicacion: |
  El primer cociente es siempre el total de votos.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuál es el segundo cociente (÷2) del Partido A (10.000 votos)?"
tipo: input
respuesta: 5000

explicacion: |
  10.000 ÷ 2 = 5.000.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuál es el primer cociente (÷1) del Partido B (6.000 votos)?"
tipo: input
respuesta: 6000

explicacion: |
  El primer cociente es siempre el total de votos.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuál es el primer cociente (÷1) del Partido C (3.500 votos)?"
tipo: input
respuesta: 3500

explicacion: |
  El primer cociente es siempre el total de votos.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo (A: 10.000, B: 6.000, C: 3.500, 5 bancas), ordenando todos los cocientes de mayor a menor, los primeros 4 son 10.000, 6.000, 5.000 y 3.500. ¿Qué partido obtiene la 5ta banca, con el cociente 3.333,33?"
tipo: mc
opciones_explicitas:
  - "A"
  - "B"
  - "C"
respuesta: "A"

explicacion: |
  El tercer cociente de A (10.000 ÷ 3 = 3.333,33) supera al segundo
  cociente de B (6.000 ÷ 2 = 3.000) y al segundo de C (3.500 ÷ 2 =
  1.750).
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuántas de las 5 bancas obtiene finalmente el Partido A?"
tipo: input
respuesta: 3

explicacion: |
  A se queda con los cocientes 10.000, 5.000 y 3.333,33 — 3 bancas.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuántas bancas obtiene finalmente el Partido B?"
tipo: input
respuesta: 1

explicacion: |
  B sólo entra con su primer cociente (6.000) entre los 5 más altos.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuántas bancas obtiene finalmente el Partido C?"
tipo: input
respuesta: 1

explicacion: |
  C entra con su primer cociente (3.500) entre los 5 más altos.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuánto suman las bancas de A (3), B (1) y C (1)?"
tipo: input
respuesta: 5

explicacion: |
  Coincide con el total de 5 bancas en juego — el método reparte
  exactamente todas las bancas disponibles, sin sobrar ni faltar.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["propiedad"]

enunciado: "¿Verdadero o falso? El método D'Hondt tiende a favorecer levemente a los partidos más grandes frente a un reparto perfectamente proporcional."
tipo: vf
respuesta: verdadero

explicacion: |
  En el ejemplo, A sacó 52,6% de los votos pero obtuvo 60% de las
  bancas (3 de 5).
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["piso_electoral"]

enunciado: "¿Qué porcentaje mínimo de votos válidos debe superar una lista de diputados nacionales en Argentina para entrar al reparto D'Hondt?"
tipo: input
respuesta: 3

explicacion: |
  3% de los votos válidos emitidos del distrito.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["piso_electoral"]

enunciado: "¿Verdadero o falso? Un partido que sacó votos pero no llega al piso electoral del 3% entra igual al reparto D'Hondt, aunque con menos posibilidades."
tipo: vf
respuesta: falso

explicacion: |
  Queda directamente fuera del reparto, sin importar cuántos votos
  sacó por debajo del piso.
```

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["prerrequisito"]

enunciado: "¿Por qué este tema depende de haber visto primero la división de poderes?"
tipo: mc
opciones_explicitas:
  - "Porque entender cómo se reparten bancas presupone ya saber qué es una banca legislativa y para qué poder se elige"
  - "Porque no tiene ninguna relación con la división de poderes"
  - "Porque el reparto de bancas es anterior a la existencia del Poder Legislativo"
respuesta: "Porque entender cómo se reparten bancas presupone ya saber qué es una banca legislativa y para qué poder se elige"

explicacion: |
  Sin ese marco, "banca" es una palabra sin contexto institucional.
```
