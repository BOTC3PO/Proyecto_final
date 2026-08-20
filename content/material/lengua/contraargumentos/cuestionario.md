# Lengua — Contraargumentos (cuestionario, 20 preguntas VBLang)

> Tema: `P12c`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de contraargumento

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "basico"
  tags: ["contraargumentos", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un contraargumento es un argumento que sostendría la postura contraria a la tesis: la razón más fuerte que alguien en desacuerdo podría dar."

pasos:
  - "Ver `../tesis/`: el contraargumento se define siempre en relación a la tesis que se está defendiendo."

explicacion: |
  Verdadero: es la definición central del contraargumento.
```

### 2 — Anticipar el contraargumento fortalece el texto

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["contraargumentos", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Incluir y responder el contraargumento más fuerte dentro del propio texto es una estrategia que fortalece la persuasión, no una debilidad."

pasos:
  - "Demuestra que la tesis resiste incluso frente a la mejor objeción posible."

explicacion: |
  Verdadero: anticipar objeciones y responderlas es más persuasivo
  que ignorarlas.
```

### 3 — Qué es la refutación

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "basico"
  tags: ["refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: "refutación"
tipo: completar

enunciado: "La respuesta que muestra por qué un contraargumento no es suficiente para invalidar la tesis se llama..."

pasos:
  - "Es el paso que sigue después de presentar el contraargumento."

explicacion: |
  La refutación es la respuesta argumentada al contraargumento
  presentado.
```

### 4 — Estrategia de refutación: dato incorrecto

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["refutacion", "estrategias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una estrategia de refutación es mostrar que el contraargumento se basa en un dato incorrecto o desactualizado."

pasos:
  - "Si el dato en el que se apoya el contraargumento es falso, la objeción pierde fuerza."

explicacion: |
  Verdadero: es una de las estrategias típicas para refutar un
  contraargumento.
```

### 5 — Estrategia de refutación: caso excepcional

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["refutacion", "estrategias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra estrategia de refutación es mostrar que el contraargumento aplica sólo a un caso excepcional, no a la regla general que defiende la tesis."

pasos:
  - "Reconocer una excepción no invalida la regla general defendida por la tesis."

explicacion: |
  Verdadero: distinguir excepción de regla general es una forma
  válida de refutar sin negar el contraargumento por completo.
```

### 6 — Qué es la concesión

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["concesion"]

variables:
  n: uno_de([1, 1])

respuesta: "concesión"
tipo: completar

enunciado: "Aceptar que el contraargumento tiene algo de razón, antes de explicar por qué de todas formas la tesis se sostiene, se llama..."

pasos:
  - "Se marca con conectores como \"si bien\", \"aunque\", \"es cierto que... pero\"."

explicacion: |
  La concesión reconoce parcialmente la validez del contraargumento
  sin abandonar la tesis.
```

### 7 — Conectores de concesión

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["concesion", "conectores"]

variables:
  conectores: ["si bien", "aunque", "es cierto que... pero"]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "\"{conectores[idx]}\" es un conector típico usado para introducir una concesión antes de la refutación."

pasos:
  - "Estos conectores son adversativos, coherentes con la coordinación adversativa vista en `../oracion-compuesta-coordinacion-y-subordinacion/`."

explicacion: |
  Verdadero: son los conectores más habituales para marcar la
  concesión en un texto argumentativo.
```

### 8 — Estructura concesión + refutación

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["concesion", "refutacion", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Es cierto que [contraargumento], pero [refutación]\" es el patrón más común para incorporar un contraargumento sin debilitar la propia postura."

pasos:
  - "Primero se concede algo de razón, después se explica por qué la tesis igual se sostiene."

explicacion: |
  Verdadero: es la estructura típica que combina concesión y
  refutación.
```

### 9 — La concesión da credibilidad

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["concesion", "credibilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Conceder que el contraargumento tiene algo de razón muestra que el autor analizó objetivamente ambos lados, en vez de ignorar la oposición."

pasos:
  - "Esa honestidad intelectual suele hacer que el texto resulte más convincente, no menos."

explicacion: |
  Verdadero: la concesión bien usada aumenta, no disminuye, la
  credibilidad del texto argumentativo.
```

### 10 — El contraargumento no debe ser un espantapájaros

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["contraargumentos", "honestidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para que la refutación sea convincente, el contraargumento elegido debe ser el más fuerte y honesto que la postura contraria realmente podría dar, no una versión débil o distorsionada fácil de tirar abajo."

pasos:
  - "Refutar una versión débil (un \"espantapájaros\") no demuestra nada sobre la fortaleza real de la tesis."

explicacion: |
  Verdadero: elegir un contraargumento débil a propósito es una
  falacia argumentativa que debilita la credibilidad del texto.
```

### 11 — Identificar concesión y refutación en un fragmento

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["concesion", "refutacion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "es cierto que reduce la libertad individual"
tipo: completar

enunciado: "En \"Es cierto que prohibir los celulares en el aula reduce la libertad individual de los alumnos, pero mejora significativamente su concentración durante las clases\", ¿cuál es la parte de concesión?"

pasos:
  - "La concesión es la parte que reconoce algo de razón al contraargumento, antes del \"pero\"."

explicacion: |
  La concesión aparece antes del conector adversativo \"pero\", que
  introduce después la refutación.
```

### 12 — Identificar la refutación en el mismo fragmento

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["refutacion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "mejora significativamente su concentración durante las clases"
tipo: completar

enunciado: "En \"Es cierto que prohibir los celulares en el aula reduce la libertad individual de los alumnos, pero mejora significativamente su concentración durante las clases\", ¿cuál es la parte de refutación?"

pasos:
  - "La refutación es la parte después del \"pero\", que explica por qué la tesis igual se sostiene."

explicacion: |
  La refutación viene después del conector adversativo y sostiene la
  tesis pese a la objeción concedida.
```

### 13 — Ignorar el contraargumento es una debilidad, no una fortaleza

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["contraargumentos", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ignorar por completo la postura contraria en un texto argumentativo puede hacer que el texto parezca no haber considerado otros puntos de vista."

pasos:
  - "Un texto que nunca menciona objeciones puede parecer parcial o poco riguroso."

explicacion: |
  Verdadero: ignorar el contraargumento es una debilidad
  argumentativa, no una fortaleza.
```

### 14 — Distinguir refutación de mera negación

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["refutacion", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Refutar un contraargumento consiste simplemente en decir \"eso no es verdad\", sin dar ninguna razón adicional."

pasos:
  - "Una refutación válida necesita mostrar POR QUÉ el contraargumento no alcanza a invalidar la tesis (dato incorrecto, excepción, peso insuficiente), no basta con negarlo sin más."

explicacion: |
  Falso: la simple negación sin razones no es una refutación sólida,
  necesita fundamento propio.
```

### 15 — Un contraargumento bien elegido reconoce complejidad

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["contraargumentos", "complejidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Elegir el contraargumento más sólido de la postura contraria demuestra que el tema es más complejo de lo que parecía a simple vista, y que la tesis lo sostiene de todas formas."

pasos:
  - "Un tema con una sola postura obvia y sin objeciones fuertes casi no necesitaría un texto argumentativo."

explicacion: |
  Verdadero: reconocer complejidad y sostener la tesis igual es la
  demostración de fuerza argumentativa buscada.
```

### 16 — Un buen texto argumentativo integra las tres piezas

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["tesis", "argumentos", "contraargumentos", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto argumentativo sólido integra las tres piezas de esta cadena: una tesis clara, argumentos que la sostienen, y al menos un contraargumento anticipado y refutado."

pasos:
  - "Ver `../tesis/` y `../argumentos/`: es la estructura completa que cierra esta subrama."

explicacion: |
  Verdadero: esa integración es el objetivo final de la cadena
  tesis→argumentos→contraargumentos.
```

### 17 — Refutar sin concesión también es válido

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["refutacion", "concesion", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "No siempre es necesario conceder algo de razón antes de refutar; a veces la refutación es directa (por ejemplo, si el contraargumento se basa en un dato falso)."

pasos:
  - "La concesión se usa cuando el contraargumento tiene algo de validez parcial; si es completamente incorrecto, no hace falta conceder nada."

explicacion: |
  Verdadero: la concesión es una estrategia útil pero no obligatoria
  en toda refutación.
```

### 18 — Ordenar el proceso para incorporar un contraargumento

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "intermedio"
  tags: ["contraargumentos", "metodo"]

enunciado: "Ordená los pasos para incorporar bien un contraargumento en un texto argumentativo propio."
tipo: ordenar
opciones_explicitas:
  - "Identificar el argumento más fuerte que alguien en desacuerdo podría dar"
  - "Presentarlo de forma honesta, sin distorsionarlo (evitar el espantapájaros)"
  - "Conceder, si corresponde, que tiene algo de razón"
  - "Refutarlo explicando por qué la tesis se sostiene de todas formas"
respuesta_orden: ["Identificar el argumento más fuerte que alguien en desacuerdo podría dar", "Presentarlo de forma honesta, sin distorsionarlo (evitar el espantapájaros)", "Conceder, si corresponde, que tiene algo de razón", "Refutarlo explicando por qué la tesis se sostiene de todas formas"]
explicacion: |
  El proceso va de identificar la objeción más fuerte a presentarla
  honestamente, y termina con la concesión (si aplica) y la
  refutación.
```

### 19 — Cierre de la cadena de texto argumentativo

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["contraargumentos", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El análisis completo de un texto argumentativo combina tres preguntas: qué se defiende (tesis), por qué (argumentos) y qué dirían en contra, y por qué la tesis igual se sostiene (contraargumentos)."

pasos:
  - "Cada tema de la cadena respondió una de esas tres preguntas, en ese orden."

explicacion: |
  Verdadero: contraargumentos cierra la cadena que empezó con tesis y
  siguió con argumentos.
```

### 20 — Aplicación: usar contraargumentos en un debate

```
metadata:
  materia: "lengua"
  tema: "contraargumentos"
  nivel: "avanzado"
  tags: ["contraargumentos", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En un debate, anticipar y refutar de antemano el contraargumento más fuerte del rival deja al orador mejor preparado que esperar a que el rival lo mencione primero."

pasos:
  - "Adelantarse a la objeción más fuerte reduce su impacto cuando (o si) el rival la presenta."

explicacion: |
  Verdadero: esta estrategia argumentativa tiene aplicación directa
  más allá de la escritura, también en la oratoria y el debate.
```
