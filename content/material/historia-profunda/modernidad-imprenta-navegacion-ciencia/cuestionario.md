# Historia Profunda — Modernidad imprenta navegacion ciencia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El impacto de la imprenta

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["gutenberg", "imprenta", "difusion"]

tipo: mc
opciones_explicitas: ["Producción manual de monjes", "Difusión masiva de ideas y textos", "Limitación del conocimiento a la élite", "Desaparición del uso de la escritura"]

enunciado: "Antes de la invención de la imprenta de tipos móviles por Johannes Gutenberg hacia 1450, la difusión de conocimientos estaba limitada principalmente por la ___."

respuesta: "Producción manual de monjes"

explicacion: |
  La imprenta permitió la producción en serie de libros, rompiendo el monopolio de los escribas y monjes que copiaban manuscritos a mano, lo que aceleró la difusión de ideas durante el Renacimiento.
```

### 2 — La revolución de la información

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["revolucion_cientifica", "imprenta"]

tipo: mc
opciones_explicitas: ["Estandarización y alfabetización", "Centralización del saber", "Aislamiento de las ideas"]

enunciado: "La imprenta permitió la estandarización de textos y mapas, y fomentó el análisis crítico y la alfabetización. ¿Qué efecto describe mejor este proceso?"

respuesta: "Estandarización y alfabetización"

explicacion: |
  Al poder imprimir múltiples copias idénticas, se eliminaron los errores de transcripción manual, permitiendo que científicos de distintos lugares trabajaran sobre los mismos datos y diagramas.
```

### 3 — Evolución de la producción de libros

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

tipo: ordenar
opciones_explicitas: ["Manuscritos copiados a mano", "Imprenta de tipos móviles", "Producción industrial de libros"]

enunciado: "Ordena cronológicamente los métodos de producción de libros desde la Edad Media hasta la era moderna:"

respuesta_orden: ["Manuscritos copiados a mano", "Imprenta de tipos móviles", "Producción industrial de libros"]

explicacion: |
  La secuencia muestra la transición desde el trabajo manual intensivo (monjes), pasando por la revolución de Gutenberg, hasta la producción mecánica masiva.
```

### 4 — Consecuencias sociales

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["reforma_protestante", "imprenta"]

tipo: completar
respuestas_validas:
  - "Protestante"

enunciado: "La capacidad de imprimir la Biblia en lenguas vernáculas (como el alemán) fue un factor clave para el éxito de la Reforma ___."

respuesta: "Protestante"

explicacion: |
  La imprenta permitió que las ideas de Lutero y la traducción de las escrituras llegaran a un público mucho más amplio, desafiando la autoridad de la Iglesia Católica.
```

### 5 — El costo de la información

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["economia_del_libro"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un monje tardaba meses en copiar un libro y la imprenta permitía producir 100 ejemplares en el mismo tiempo, la producción aumentó en un factor de ___ (indica el número)."

respuesta: 100

explicacion: |
  La eficiencia de la imprenta de tipos móviles fue exponencial comparada con la copia manual, reduciendo drásticamente el costo y el tiempo de obtención de información.
```

### 6 — La brújula y la orientación

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["navegacion", "tecnologia"]

respuesta: "Norte"
tipo: mc
opciones_explicitas: ["Norte", "Sur", "Este", "Oeste"]

enunciado: "La brújula, perfeccionada por los navegantes, funciona porque su aguja se orienta siempre hacia el polo magnético ___, permitiendo mantener un rumbo constante en mar abierto."

explicacion: |
  La brújula permitía identificar el polo magnético de la Tierra, facilitando la navegación en condiciones de baja visibilidad o en alta mar.
```

### 7 — Instrumentos de medición estelar

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["astrolabio", "astronomia"]

respuesta: "Astrolabio"
tipo: completar
respuestas_validas:
  - "Astrolabio"

enunciado: "Para determinar la latitud mediante la observación de los astros, los navegantes de la Era de los Descubrimientos utilizaban principalmente el ___."

explicacion: |
  El astrolabio permitía medir la altura de los cuerpos celestes sobre el horizonte, esencial para calcular la posición latitudinal.
```

### 8 — La Carabela y su diseño

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["carabela", "barcos"]

respuesta: "velas latinas"
tipo: mc
opciones_explicitas: ["velas cuadradas", "velas latinas", "remos de madera"]

enunciado: "La carabela fue un barco clave en la expansión europea debido a su capacidad de navegar contra el viento, gracias al uso de ___."

explicacion: |
  Las velas latinas (triangulares) permitían la maniobra de 'bolina', es decir, navegar en ángulos más agudos respecto al viento, algo vital para las exploraciones atlánticas.
```

### 9 — Secuencia de avances tecnológicos

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["tecnologia", "secuencia"]

respuesta_orden: ["Brújula", "Astrolabio", "Carabela"]
tipo: ordenar
opciones_explicitas: ["Brújula", "Astrolabio", "Carabela"]

enunciado: "Ordena cronológicamente el desarrollo de las tecnologías que permitieron la expansión oceánica, desde la orientación básica hasta la navegación de altura:"

explicacion: |
  La brújula permitió la orientación, el astrolabio la posición astronómica y la carabela la capacidad de maniobra en alta mar.
```

### 10 — El impacto de la imprenta

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["imprenta", "conocimiento"]

respuesta: "difusión"
tipo: mc
opciones_explicitas: ["difusión", "recolección", "eliminación"]

enunciado: "La invención de la imprenta de tipos móviles facilitó la ___ de mapas y conocimientos geográficos, acelerando la era de los descubrimientos."

explicacion: |
  La imprenta permitió que los mapas y las crónicas de viajes se replicaran de forma rápida y barata, democratizando el conocimiento geográfico.
```

### 11 — El modelo heliocéntrico

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_cientifica"
  nivel: "basico"
  tags: ["copernico", "astronomia"]

respuesta: "Copérnico"
tipo: completar
respuestas_validas:
  - "Copérnico"

enunciado: "El modelo que propuso que el Sol, y no la Tierra, es el centro del sistema planetario fue formulado por ___."

explicacion: |
  Nicolás Copérnico fue el pionero de la teoría heliocéntrica, desafiando el modelo geocéntrico de Ptolomeo que había predominado durante siglos.
```

### 12 — El telescopio y la observación

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_cientifica"
  nivel: "intermedio"
  tags: ["galileo", "telescopio"]

variables:
  escenario: uno_de([["observó las fases de Venus", "confirmó la teoría heliocéntrica"], ["descubrió los satélites de Júpiter", "demostró que no todo giraba en torno a la Tierra"], ["observó las manchas solares", "refutó la idea de la perfección de los cielos"]])

respuesta: "confirmó la teoría heliocéntrica"
tipo: mc
opciones_explicitas: ["confirmó la teoría heliocéntrica", "demostró que no todo giraba en torno a la Tierra", "refutó la idea de la perfección de los cielos"]

enunciado: "Al usar el telescopio, Galileo Galilei realizó observaciones que ___."

explicacion: |
  Las observaciones de Galileo, como las fases de Venus o los satélites de Júpiter, proporcionaron la evidencia empírica necesaria para respaldar el modelo heliocéntrico.
```

### 13 — Ley de Gravitación Universal

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_cientifica"
  nivel: "avanzado"
  tags: ["newton", "fisica"]

variables:
  caso: uno_de([["la fuerza con la que la Tierra atrae a una manzana", "la fuerza que mantiene a la Luna en órbita"], ["la fuerza con la que la Tierra atrae a una manzana", "la fuerza que mantiene a los planetas en órbita"], ["la fuerza con la que la Tierra atrae a una manzana", "la fuerza que rige el movimiento de los astros"]])

respuesta: "la fuerza que rige el movimiento de los astros"
tipo: mc
opciones_explicitas: ["la fuerza que rige el movimiento de los astros", "la fuerza que mantiene a la Luna en órbita", "la fuerza que mantiene a los planetas en órbita"]

enunciado: "Isaac Newton unificó la física terrestre y la celeste al proponer que la gravedad es ___."

explicacion: |
  Newton demostró que las mismas leyes físicas que rigen el movimiento de los objetos en la Tierra se aplican también a los cuerpos celestes.
```

### 14 — El Método Científico

```
metadata:
  materia: "historia_profunda"
  tema: "metodo_cientifico"
  nivel: "intermedio"
  tags: ["metodologia", "ciencia"]

respuesta: "observación"
tipo: completar
respuestas_validas:
  - "observación"

enunciado: "A diferencia de la escolástica, la nueva ciencia moderna se basa en la ___ y la experimentación para validar hipótesis."

explicacion: |
  El método científico moderno sustituyó la deducción puramente lógica basada en textos antiguos por la inducción basada en la observación directa de la naturaleza.
```

### 15 — Secuencia del Método Científico

```
metadata:
  materia: "historia_profunda"
  tema: "metodo_cientifico"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta_orden: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]

enunciado: "Ordena los pasos lógicos que definen el proceso de investigación científica moderna:"

explicacion: |
  El proceso científico comienza con la observación de un fenómeno, la formulación de una explicación provisional (hipótesis), la realización de pruebas (experimentación) y la obtención de una conclusión.
```

### 16 — El motor de la difusión

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["renacimiento", "imprenta", "difusion"]

tipo: mc
opciones_explicitas: ["La estandarización de textos y diagramas", "La prohibición de la lectura en latín", "El aumento del costo de los libros", "La creación de bibliotecas privadas"]
respuesta: "La estandarización de textos y diagramas"

enunciado: "Antes de la imprenta de tipos móviles, los libros se copiaban a mano, lo que generaba errores constantes. ¿Cuál fue el principal impacto de la imprenta en la difusión del conocimiento científico durante el Renacimiento?"

explicacion: |
  La imprenta permitió la producción masiva de textos idénticos. Esto garantizó que científicos en diferentes partes de Europa pudieran estudiar los mismos diagramas y datos astronómicos sin las variaciones de los copistas manuales.
```

### 17 — La era de los descubrimientos

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["navegacion", "cartografia", "imprenta"]

tipo: mc
opciones_explicitas: ["Permitió la creación de mapas más precisos y repetibles", "Hizo que la navegación fuera más peligrosa", "Eliminó la necesidad de usar la brújula", "Limitó el conocimiento a los capitanes de flota"]

enunciado: "La imprenta facilitó la reproducción de cartografía náutica detallada. ¿Cómo ayudó esto directamente a la era de las grandes navegaciones?"

respuesta: "Permitió la creación de mapas más precisos y repetibles"

explicacion: |
  La capacidad de imprimir mapas y tablas de navegación (como las efemérides) permitió que los navegantes contaran con herramientas de orientación estandarizadas, reduciendo el margen de error en las rutas transoceánicas.
```

### 18 — El orden del conocimiento

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["metodologia", "ciencia", "orden"]

tipo: ordenar
opciones_explicitas: ["Invención de la imprenta", "Difusión de textos clásicos y nuevos hallazgos", "Revolución Científica y debates académicos"]

enunciado: "Ordena cronológicamente la cadena de causalidad que conectó la tecnología con el cambio de paradigma científico:"

explicacion: |
  La tecnología de la imprenta (1) permitió la circulación masiva de ideas (2), lo que alimentó el debate constante y la validación de experimentos que caracterizan la Revolución Científica (3).
respuesta_orden: ["Invención de la imprenta", "Difusión de textos clásicos y nuevos hallazgos", "Revolución Científica y debates académicos"]
```

### 19 — El cambio de paradigma

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["autoridad", "ciencia", "humanismo"]

tipo: completar
respuestas_validas:
  - "observación"

enunciado: "El Renacimiento promovió el paso de un conocimiento basado en la autoridad de los textos antiguos a uno basado en la ___ directa de la naturaleza."

explicacion: |
  La imprenta permitió que los textos antiguos fueran comparados entre sí, revelando contradicciones y fomentando que los científicos confiaran más en sus propios experimentos y observaciones que en la tradición dogmática.
```

### 20 — El impacto en el lenguaje

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["lenguaje", "ciencia", "comunicacion"]

tipo: mc
opciones_explicitas: ["El ascenso de las lenguas vernáculas", "El dominio exclusivo del latín", "La desaparición de la escritura", "El uso de jeroglíficos científicos"]
respuesta: "El ascenso de las lenguas vernáculas"

enunciado: "Al imprimir libros en idiomas locales (español, francés, alemán) y no solo en latín, ¿qué efecto tuvo la imprenta en la democratización del saber científico?"

explicacion: |
  La impresión en lenguas vernáculas permitió que artesanos, navegantes y técnicos (que no sabían latín pero aplicaban la ciencia práctica) accedieran al conocimiento, uniendo la teoría científica con la práctica técnica.
```

### 21 — La imprenta y la Reforma

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["imprenta", "reforma", "comunicacion"]

variables:
  datos: [[ "La imprenta de tipos móviles de Gutenberg", "La difusión masiva de las ideas de la Reforma Protestante"], ["El desarrollo de la brújula magnética", "La expansión de las rutas comerciales transoceánicas"], ["El perfeccionamiento del telescopio", "El inicio de la Revolución Científica"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["La difusión masiva de las ideas de la Reforma Protestante", "La expansión de las rutas comerciales transoceánicas", "El inicio de la Revolución Científica"]

enunciado: "Asocia el siguiente avance tecnológico con su consecuencia histórica principal: {datos[idx][0]}"

explicacion: |
  La imprenta permitió que las ideas de autores como Lutero se propagaran rápidamente por Europa, rompiendo el monopolio del conocimiento de la Iglesia.
```

### 22 — Navegación y Geografía

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["navegacion", "exploracion", "mapas"]

variables:
  datos: [["El uso del astrolabio en alta mar", "La navegación astronómica precisa"], ["La cartografía de Mercator", "La representación de rutas oceánicas"] ]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "La navegación astronómica precisa"
  - "La representación de rutas oceánicas"

enunciado: "El avance tecnológico de {datos[idx][0]} permitió fundamentalmente: ___"

explicacion: |
  Los instrumentos de navegación permitieron a los exploradores determinar su posición, facilitando viajes de larga distancia.
```

### 23 — El método científico

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["ciencia", "metodo_cientifico", "observacion"]

variables:
  casos: [["La observación sistemática de los cielos", "El cuestionamiento del modelo geocéntrico"], ["El uso del microscopio", "El descubrimiento del mundo microscópico"]]
  idx: uno_de([0,1])

respuesta: casos[idx][1]
tipo: mc
opciones_explicitas: ["El cuestionamiento del modelo geocéntrico", "El descubrimiento del mundo microscópico"]

enunciado: "Si consideramos el impacto de {casos[idx][0]}, su consecuencia directa fue: ___"

explicacion: |
  La observación empírica desafió las verdades establecidas por la tradición y la autoridad religiosa.
```

### 24 — Secuencia de la Modernidad

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

respuesta_orden: ["Imprenta", "Navegación", "Revolución Científica"]
tipo: ordenar
opciones_explicitas: ["Imprenta", "Navegación", "Revolución Científica"]

enunciado: "Ordena cronológicamente estos procesos que definieron la Modernidad temprana:"

pasos:
  - "Primero, la democratización del saber escrito."
  - "Segundo, la expansión de los horizontes geográficos."
  - "Tercero, la consolidación del método experimental."

explicacion: |
  La imprenta preparó el terreno intelectual, la navegación expandió el mundo conocido y la ciencia revolucionó la comprensión de la naturaleza.
```

### 25 — El impacto del telescopio

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["telescopio", "galileo", "astronomia"]

respuesta: "Copernicanismo"
tipo: completar
respuestas_validas:
  - "Copernicanismo"

enunciado: "El perfeccionamiento del telescopio por parte de Galileo Galilei fue clave para validar el ___."

explicacion: |
  Al observar las fases de Venus y los satélites de Júpiter, Galileo aportó evidencia empírica al modelo heliocéntrico.
```
