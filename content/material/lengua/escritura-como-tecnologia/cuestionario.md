# Lengua — Escritura como tecnologia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Naturaleza de la escritura

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "tecnologia"]

tipo: mc
opciones_explicitas: ["Un proceso biológico instintivo", "Un sistema tecnológico inventado", "Una capacidad natural del cerebro", "Un fenómeno meteorológico"]

enunciado: "A diferencia del habla, que es una capacidad biológica natural de la especie humana, la escritura se define como:"

respuesta: "Un sistema tecnológico inventado"

explicacion: |
  La escritura no es una facultad innata como el lenguaje oral; es una tecnología que requiere un aprendizaje cultural y técnico para registrar el pensamiento de forma visual y permanente.
```

### 2 — Diferencia entre habla y escritura

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["habla_vs_escritura", "permanencia"]

tipo: completar
respuestas_validas:
  - "permanente"
  - "efímero"

enunciado: "Mientras que el habla es predominantemente ___, la escritura funciona como una tecnología que permite que el mensaje sea ___."

respuesta: ["efímero", "permanente"]

explicacion: |
  El habla es transitoria (se desvanece en el tiempo), mientras que la escritura permite la permanencia del mensaje a través del soporte físico.
```

### 3 — Evolución de soportes

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["soportes", "historia"]

variables:
  escenario: uno_de([["piedra", "cincel"], ["papiro", "caña"], ["papel", "pluma"], ["pantalla", "teclado"]])

tipo: completar
respuestas_validas:
  - "cincel"
  - "caña"
  - "pluma"
  - "teclado"

enunciado: "La tecnología de la escritura evoluciona junto a sus soportes. Por ejemplo, si el soporte es {escenario[0]}, la herramienta tradicional es un {escenario[1]}."

respuesta: "cincel"

explicacion: |
  Cada avance en la tecnología de la escritura ha estado ligado a la invención de nuevos soportes y herramientas para grabarlos.
```

### 4 — Características del sistema

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["sistemas_de_signos", "tecnologia"]

tipo: mc
opciones_explicitas: ["Es un sistema de signos arbitrarios", "Es una extensión del pensamiento puro", "Es un reflejo exacto del sonido", "Es un proceso inconsciente"]

enunciado: "Como tecnología de registro, la escritura se basa en un sistema de signos que no es natural, sino ___."

respuesta: "Es un sistema de signos arbitrarios"

explicacion: |
  La relación entre el signo escrito (grafema) y el concepto no es natural, sino una convención social y tecnológica establecida por el sistema de escritura elegido.
```

### 5 — Secuencia de la tecnología escrita

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["procesos", "tecnologia"]

tipo: ordenar
opciones_explicitas: ["Pensamiento", "Codificación visual", "Soporte físico", "Lectura/Interpretación"]

enunciado: "Ordena los componentes de la cadena tecnológica de la escritura, desde la intención hasta la recepción:"

respuesta_orden: ["Pensamiento", "Codificación visual", "Soporte físico", "Lectura/Interpretación"]

explicacion: |
  La escritura requiere un proceso de codificación (convertir pensamiento en signos visuales) sobre un soporte, para que luego otro sujeto pueda decodificarlo.
```

### 6 — Sistemas pictográficos

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["escritura", "pictografia"]

respuesta: "pictográfico"
tipo: mc

opciones_explicitas: ["silábico", "alfabético", "pictográfico", "logográfico"]

enunciado: "Un sistema de escritura que utiliza símbolos para representar objetos o ideas directamente, sin pasar necesariamente por el sonido de las palabras, se denomina sistema ___."

explicacion: |
  Los sistemas pictográficos utilizan dibujos que guardan una relación visual directa con el concepto representado.
```

### 7 — Evolución de la escritura

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["evolucion", "sistemas"]

variables:
  escenario: uno_de([["dibujo de un sol", "pictográfico"], ["signo para la sílaba 'ma'", "silábico"], ["letra 'A'", "alfabético"]])
  tipo_sistema: escenario[1]

respuesta: tipo_sistema

tipo: mc
opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Si un sistema de escritura utiliza un símbolo para representar el sonido de una sílaba completa, estamos ante un sistema ___."

explicacion: |
  En el sistema silábico, el signo no representa una letra (sonido individual) ni un objeto, sino una unidad de sonido llamada sílaba.
```

### 8 — El sistema alfabético

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["alfabeto", "fonemas"]

respuesta: "sonidos"
tipo: completar
respuestas_validas:
  - "sonidos"
  - "fonemas"

enunciado: "A diferencia de los sistemas pictográficos, el sistema alfabético se basa en la representación de los ___ que constituyen el habla."

explicacion: |
  El alfabeto es un sistema donde cada signo (letra) representa un fonema o sonido mínimo, permitiendo una combinación infinita de palabras.
```

### 9 — Clasificación de sistemas

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["clasificacion", "tecnologia"]

variables:
  caso: uno_de([["jeroglíficos egipcios (fase temprana)", "pictográfico"], ["katakana japonés", "silábico"], ["alfabeto latino", "alfabético"]])
  tipo_res: caso[1]

respuesta: tipo_res

tipo: mc
opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Considerando el caso de {caso[0]}, el sistema de escritura utilizado es de tipo ___."

explicacion: |
  Dependiendo de la etapa y la función, los sistemas pueden transicionar de lo pictográfico a lo logográfico o silábico.
```

### 10 — Orden de complejidad estructural

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["secuencia", "sistemas"]

respuesta_orden: ["pictográfico", "silábico", "alfabético"]
tipo: ordenar
opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Ordena estos sistemas de escritura desde el que representa la unidad de significado más compleja (el objeto) hasta el que representa la unidad de sonido más simple (el fonema):"

pasos:
  - "Representación de objetos/ideas"
  - "Representación de sílabas"
  - "Representación de sonidos individuales"

explicacion: |
  La evolución tecnológica de la escritura tiende hacia la abstracción: de la imagen (pictograma) a la sílaba y finalmente al fonema (alfabeto).
```

### 11 — El origen de la escritura alfabética

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["historia", "alfabeto"]

respuesta: "Mediterráneo oriental"
tipo: completar
respuestas_validas:
  - "Mediterráneo oriental"

enunciado: "La escritura alfabética, tal como la conocemos, tuvo su origen en el ___."

explicacion: |
  El sistema alfabético se desarrolló en la región del Mediterráneo oriental, simplificando la representación de los sonidos de la lengua.
```

### 12 — Ventajas del sistema alfabético

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["aprendizaje", "tecnologia"]

opciones_explicitas: ["Sistemas logográficos", "Sistemas silábicos", "Sistemas alfabéticos"]

respuesta: "Sistemas alfabéticos"
tipo: mc

enunciado: "¿Qué sistema de escritura permitió una simplificación enorme en el proceso de aprendizaje de la lectura y la escritura en comparación con los sistemas logográficos o silábicos?"

explicacion: |
  Al representar sonidos individuales (fonemas) en lugar de conceptos (logogramas) o sílabas completas, el alfabeto requiere aprender un número mucho menor de signos.
```

### 13 — Evolución de los alfabetos

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["griego", "latino"]

respuesta: "griego"
tipo: completar
respuestas_validas:
  - "griego"

enunciado: "El alfabeto ___ y el alfabeto latino son descendientes directos de las innovaciones de la escritura alfabética antigua."

explicacion: |
  El alfabeto griego y el latino son los pilares de la escritura occidental, derivados de evoluciones de sistemas alfabéticos anteriores.
```

### 14 — Comparativa de complejidad

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["cognicion", "tecnologia"]

variables:
  datos: [["logográfico", "alta", "complejo"], ["silábico", "media", "intermedio"], ["alfabético", "baja", "simple"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: ["complejo", "intermedio", "simple"]

enunciado: "Si comparamos la carga cognitiva necesaria para aprender un sistema de escritura, un sistema {datos[idx][0]} presenta una dificultad de aprendizaje de tipo {datos[idx][1]}."

explicacion: |
  La tecnología de la escritura alfabética redujo la dificultad de aprendizaje a un nivel {datos[idx][1]}, facilitando la alfabetización masiva.
```

### 15 — Secuencia de evolución tecnológica

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

opciones_explicitas: ["Logográfico", "Silábico", "Alfabético"]

respuesta_orden: ["Logográfico", "Silábico", "Alfabético"]
tipo: ordenar

enunciado: "Ordena cronológicamente la evolución de la complejidad tecnológica de los sistemas de escritura, desde el más complejo al más simplificado:"

explicacion: |
  La evolución tecnológica de la escritura muestra una tendencia hacia la reducción de signos: de miles de logogramas a decenas de fonemas.
```

### 16 — El salto de la oralidad a la escritura

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["historia", "comunicacion"]

tipo: mc
opciones_explicitas: ["Permitió la transmisión de conocimientos sin depender de la memoria humana", "Hizo que el lenguaje fuera más complejo y difícil de entender", "Eliminó la necesidad de hablar para comunicarse", "Solo sirve para registrar leyes y no ideas"]
respuesta: "Permitió la transmisión de conocimientos sin depender de la memoria humana"

enunciado: "Antes de la invención de la escritura, la transmisión de la cultura dependía exclusivamente de la memoria de los oradores. ¿Cuál fue el principal impacto tecnológico de la escritura en este proceso?"

explicacion: |
  La escritura actúa como un soporte externo que permite 'fijar' el lenguaje, liberando a la memoria humana de la carga de retener todo el saber de forma exacta, permitiendo que el conocimiento trascienda el tiempo y el espacio.
```

### 17 — La persistencia del mensaje

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["memoria", "tecnologia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: ["un consejo de un abuelo a su nieto, transmitido solo de forma oral", "una receta médica escrita en un papiro"]
  consecuencia: ["La información se pierde si el nieto olvida el consejo", "La información se mantiene intacta aunque el médico no esté presente"]

respuesta: consecuencia[escenario_idx]
tipo: mc
opciones_explicitas: ["La información se pierde si el nieto olvida el consejo", "La información se mantiene intacta aunque el médico no esté presente", "La escritura no cambia la naturaleza de la comunicación"]

enunciado: "Considera el siguiente caso: {escenarios[escenario_idx]}. ¿Qué ocurre con la información en este caso?"

explicacion: |
  La escritura funciona como una 'memoria externa'. Mientras que en la oralidad la información es volátil, la escritura permite que el mensaje sea independiente del emisor original.
```

### 18 — Componentes de la tecnología de la escritura

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["conceptos"]

tipo: completar
respuestas_validas:
  - "soporte"
  - "signo"
  - "código"

enunciado: "Para que la escritura funcione como tecnología, se requiere de un ___ (donde se plasma el mensaje), un ___ (que representa la idea) y un ___ (el sistema de reglas que los une)."

explicacion: |
  La escritura requiere un soporte físico (piedra, papel, pantalla), un signo gráfico y un código lingüístico que permita la decodificación por parte de otro individuo.
```

### 19 — Evolución de la transmisión del saber

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["evolucion", "conocimiento"]

tipo: ordenar
opciones_explicitas: ["Cultura puramente oral", "Aparición de la escritura", "Acumulación de conocimiento complejo"]

enunciado: "Ordena cronológicamente los procesos que describen la evolución de la transmisión del conocimiento humano gracias a la tecnología de la escritura."

explicacion: |
  La escritura permite la acumulación: al no tener que dedicar todo el esfuerzo cognitivo a recordar, la humanidad puede dedicar más recursos a la innovación y la complejidad, construyendo sobre lo ya escrito.
respuesta_orden: ["Cultura puramente oral", "Aparición de la escritura", "Acumulación de conocimiento complejo"]
```

### 20 — La escritura como extensión de la mente

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["tecnologia", "cognicion"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si la oralidad es la comunicación en tiempo real, la escritura es una tecnología de comunicación asincrónica (escribe la palabra que describe la capacidad de la escritura de durar en el tiempo)."

respuesta: "asincrónica"

explicacion: |
  La escritura permite la comunicación asincrónica; es decir, el emisor y el receptor no necesitan estar presentes al mismo tiempo para que el mensaje sea transmitido con éxito.
```

### 21 — Clasificación de sistemas pictográficos

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["escritura", "sistemas"]

variables:
  datos: [["un dibujo de un sol para representar el astro", "pictográfico"], ["un dibujo de un ojo para representar la visión", "pictográfico"], ["un dibujo de una mano para representar la acción de tocar", "pictográfico"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Si un sistema de escritura utiliza un signo que representa directamente el objeto dibujado, como en el caso de {datos[idx][0]}, estamos ante un sistema ___."

explicacion: |
  Cuando el signo tiene una relación icónica (se parece al objeto) y representa el concepto o el objeto directamente, el sistema es pictográfico.
```

### 22 — El sistema silábico

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["escritura", "sistemas"]

variables:
  datos: [["el signo 'ka' representa la sílaba completa", "silábico"], ["el signo 'ma' representa la sílaba completa", "silábico"], ["el signo 'lo' representa la sílaba completa", "silábico"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "En un sistema donde cada signo representa una unidad de sonido compuesta por consonante y vocal, como {datos[idx][0]}, el sistema se clasifica como ___."

explicacion: |
  Los sistemas silábicos (como el japonés hiragana) asignan un signo a una sílaba entera, no a sonidos individuales ni a conceptos.
```

### 23 — Componentes del alfabeto

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["escritura", "sistemas"]

variables:
  datos: [["la letra 'A' representa un fonema", "alfabético"], ["la letra 'B' representa un fonema", "alfabético"], ["la letra 'S' representa un fonema", "alfabético"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar

respuestas_validas:
  - "alfabético"

enunciado: "Si un sistema asigna un signo a cada fonema individual, como sucede con {datos[idx][0]}, el sistema es ___."

explicacion: |
  El sistema alfabético es el más eficiente en términos de cantidad de signos, ya que solo necesita un conjunto reducido de caracteres para representar todos los sonidos posibles.
```

### 24 — Diferencia de unidades

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["escritura", "sistemas"]

variables:
  datos: [["un pictograma", "pictográfico"], ["una sílaba", "silábico"], ["un fonema", "alfabético"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Si la unidad mínima de significado en el sistema es {datos[idx][0]}, la clasificación es ___."

explicacion: |
  La unidad de representación determina la clasificación: el pictograma representa el concepto, la sílaba el sonido silábico y el fonema el sonido alfabético.
```

### 25 — Orden de complejidad evolutiva

```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["escritura", "evolucion"]

variables:
  secuencia: ["pictográfico", "silábico", "alfabético"]

respuesta_orden: secuencia
tipo: ordenar

opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Ordena los siguientes sistemas de escritura desde el que representa conceptos (menos abstracto) hasta el que representa sonidos individuales (más abstracto):"

explicacion: |
  La evolución tecnológica de la escritura tiende hacia la abstracción: de la imagen del objeto (pictograma) al sonido de la sílaba (silabario) y finalmente al sonido mínimo (alfabeto).
```
