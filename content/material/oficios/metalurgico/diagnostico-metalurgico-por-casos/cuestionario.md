# Oficios — Metalúrgico — Diagnóstico metalúrgico por casos (cuestionario, 21 preguntas VBLang)

> Cierre del oficio (`OF9`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico metalúrgico —
> cada pregunta validada con parse+lint+compile+generate real de
> packages/vblang antes de guardarse.

---

### 1 — La pregunta correcta del diagnóstico metalúrgico

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "qué paso del proceso salió distinto de lo planeado"
tipo: mc
opciones_explicitas: ["qué paso del proceso salió distinto de lo planeado", "qué defecto estético tiene la pieza", "cuánto costó fabricar la pieza"]

enunciado: "Según la teoría, cuando una pieza metálica no cumple lo esperado, ¿cuál es la pregunta correcta a hacerse?"

explicacion: |
  Las propiedades finales de un metal son consecuencia directa de su
  composición y del proceso recibido; diagnosticar implica
  reconstruir esa historia, no sólo describir el síntoma final.
```

### 2 — Causas de una pieza quebradiza

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  causa: uno_de(["un temple sin el revenido correspondiente después", "una composición con un contenido de carbono más alto del previsto"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para que una pieza metálica sea quebradiza."

explicacion: |
  Ambas son causas mencionadas en el caso 1 para una fractura frágil,
  sin deformación previa visible.
```

### 3 — Qué hace el revenido después del temple

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "El temple por sí solo endurece pero también fragiliza el metal, y es el revenido el que devuelve parte de la tenacidad necesaria."

explicacion: |
  Es la relación entre temple y revenido mencionada en el caso 1 y ya
  explicada en `../procesos-metalurgicos/`.
```

### 4 — Causas de dureza fuera de rango

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "un tratamiento térmico con tiempo o temperatura incorrectos, o una velocidad de enfriamiento distinta a la especificada"
tipo: mc
opciones_explicitas: ["un tratamiento térmico con tiempo o temperatura incorrectos, o una velocidad de enfriamiento distinta a la especificada", "el color de la pieza al salir del horno, exclusivamente", "el tamaño físico de la pieza, sin relación al proceso"]

enunciado: "Según la teoría, ¿cuáles son las causas más comunes de que una pieza mida una dureza distinta a la especificada?"

explicacion: |
  Un tratamiento térmico con tiempo o temperatura incorrectos, o una
  velocidad de enfriamiento distinta a la especificada, son las causas
  más comunes del caso 2.
```

### 5 — Velocidad de enfriamiento aunque la temperatura sea correcta

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Enfriar más rápido o más lento de lo especificado cambia el resultado final de dureza, aunque la temperatura máxima alcanzada durante el proceso haya sido la correcta."

explicacion: |
  Es un matiz importante del caso 2: la velocidad de enfriamiento
  importa tanto como la temperatura máxima alcanzada.
```

### 6 — Defectos típicos de fundición

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

variables:
  defecto: uno_de(["porosidad (burbujas de gas atrapadas al solidificar)", "rechupes (huecos por contracción del metal al solidificar)", "inclusiones (partículas de material no metálico atrapadas en la colada)"])

respuesta: verdadero
tipo: vf

enunciado: "\"{defecto}\" es un defecto de fundición mencionado en la teoría."

explicacion: |
  Los tres son defectos típicos de fundición mencionados en el caso 3,
  cada uno con causa de proceso distinta.
```

### 7 — Porosidad de fundición vs. porosidad de soldadura

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, la porosidad de fundición es similar en concepto a la porosidad de una soldadura, pero distribuida dentro de toda la masa de la pieza en vez de sólo en el cordón."

explicacion: |
  Es la comparación explícita que hace la teoría entre ambos
  conceptos, ya vistos en `../soldador/`.
```

### 8 — Corregir un defecto de fundición

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, corregir un defecto de fundición implica simplemente \"colar con más cuidado\" en general, sin necesidad de identificar qué paso específico del proceso falló."

explicacion: |
  Falso. Cada defecto tiene una causa de proceso distinta, y
  corregirlo implica ajustar ese paso específico, no sólo tener más
  cuidado en general.
```

### 9 — Composición vs. proceso: dos tipos de defecto

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "avanzado"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "El método resumido de la teoría distingue defectos de composición (la aleación en sí) de defectos de proceso (cómo se trató esa aleación)."

explicacion: |
  Es el segundo paso del método resumido al final de la teoría.
```

### 10 — Mediciones objetivas antes que apreciaciones subjetivas

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "usar mediciones objetivas (dureza, inspección visual estructurada) en vez de apreciaciones subjetivas"
tipo: mc
opciones_explicitas: ["usar mediciones objetivas (dureza, inspección visual estructurada) en vez de apreciaciones subjetivas", "confiar siempre en la experiencia sin ninguna medición", "descartar la pieza directamente ante cualquier duda"]

enunciado: "Según el método resumido de la teoría, ¿qué se recomienda para confirmar un diagnóstico metalúrgico?"

explicacion: |
  Usar mediciones objetivas en vez de apreciaciones subjetivas es el
  tercer paso del método resumido.
```

### 11 — Reconstruir la historia del proceso

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, reconstruir qué paso del proceso pudo generar el resultado observado es preferible a tratar el defecto como un hecho aislado sin causa identificable."

explicacion: |
  Es el primer paso del método resumido, coherente con la idea de
  apertura de todo el tema.
```

### 12 — Diferencia entre caso 1 y caso 2

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 1 es una fractura frágil de la pieza; el caso 2 es una medición de dureza distinta a la especificada, sin que la pieza necesariamente haya fallado"
tipo: mc
opciones_explicitas: ["el caso 1 es una fractura frágil de la pieza; el caso 2 es una medición de dureza distinta a la especificada, sin que la pieza necesariamente haya fallado", "son exactamente el mismo síntoma con dos nombres distintos", "el caso 1 sólo aplica a piezas fundidas, el caso 2 sólo a piezas forjadas"]

enunciado: "¿Cuál es la diferencia central entre el caso 1 (pieza quebradiza) y el caso 2 (dureza fuera de rango)?"

explicacion: |
  El caso 1 describe una falla real (fractura frágil); el caso 2
  describe una desviación de una medición de control de calidad, sin
  que la pieza necesariamente haya fallado todavía.
```

### 13 — Composición de carbono y fragilidad

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Una composición de aleación con un contenido de carbono más alto del previsto para esa aplicación puede ser causa de que una pieza resulte quebradiza."

explicacion: |
  Es la segunda causa mencionada en el caso 1, distinta del problema
  de tratamiento térmico.
```

### 14 — El diagnóstico como reconstrucción de proceso

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "basico"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Las propiedades finales de un metal son consecuencia directa de su composición y del proceso que recibió, según la idea central de este tema."

explicacion: |
  Es la idea de apertura de todo el tema de diagnóstico metalúrgico.
```

### 15 — Inclusiones en una pieza fundida

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "partículas de material no metálico, como escoria u óxidos, atrapadas dentro de la pieza durante la colada"
tipo: mc
opciones_explicitas: ["partículas de material no metálico, como escoria u óxidos, atrapadas dentro de la pieza durante la colada", "burbujas de gas atrapadas al solidificar el metal", "huecos por contracción del metal al enfriarse"]

enunciado: "Según la teoría, ¿qué son las \"inclusiones\" como defecto de fundición?"

explicacion: |
  Son partículas de material no metálico que quedaron atrapadas
  dentro de la pieza durante la colada, distintas de la porosidad
  (gas) y los rechupes (contracción).
```

### 16 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres casos de este tema comparten la misma lógica: reconstruir qué paso del proceso falló, distinguir composición de proceso, y confirmar con mediciones objetivas."

explicacion: |
  Es la síntesis final del método de diagnóstico metalúrgico de todo
  el tema.
```

### 17 — Cavidad de contracción

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "intermedio"
  tags: ["caso fundicion"]

enunciado: "Una pieza fundida presenta una cavidad en la zona más gruesa, causada por la contracción. ¿Qué falló?"
tipo: mc
opciones_explicitas:
  - "La alimentación de metal líquido: la mazarota era insuficiente o estaba mal ubicada"
  - "El color de la arena"
  - "El tipo de bujía"
respuesta: "La alimentación de metal líquido: la mazarota era insuficiente o estaba mal ubicada"

explicacion: |
  La mazarota alimenta la pieza mientras se contrae al solidificar.
```


### 18 — Agua y metal fundido

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "basico"
  tags: ["caso fundicion"]

respuesta: verdadero
tipo: vf

enunciado: "Las cucharas y herramientas que tocan el metal fundido deben estar secas y precalentadas porque la humedad puede provocar proyecciones explosivas."

explicacion: |
  El agua se vaporiza de golpe en contacto con el metal líquido.
```


### 19 — Pieza templada frágil

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "intermedio"
  tags: ["caso tratamientos termicos"]

enunciado: "Una pieza templada se rompe al primer golpe por ser muy frágil. ¿Qué tratamiento posterior corresponde?"
tipo: mc
opciones_explicitas:
  - "Revenido"
  - "Más temple"
  - "Dejarla sin tratamiento posterior"
respuesta: "Revenido"

explicacion: |
  El revenido reduce la fragilidad y las tensiones a cambio de algo de dureza.
```


### 20 — Escala de dureza

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "intermedio"
  tags: ["caso normas"]

enunciado: "Dos laboratorios informan la dureza de la misma pieza con números distintos. ¿Qué hay que verificar primero?"
tipo: mc
opciones_explicitas:
  - "Que ambos usen la misma escala o método y que el durómetro esté calibrado"
  - "Cuál laboratorio es más grande"
  - "El color de la pieza"
respuesta: "Que ambos usen la misma escala o método y que el durómetro esté calibrado"

explicacion: |
  Brinell, Rockwell y Vickers dan valores no directamente comparables.
```


### 21 — Trazabilidad

```
metadata:
  materia: "oficios"
  tema: "metalurgico_diagnostico_metalurgico_por_casos"
  nivel: "intermedio"
  tags: ["caso normas"]

respuesta: verdadero
tipo: vf

enunciado: "Ante un material sin certificado ni identificación de colada, no debe usarse en aplicaciones críticas."

explicacion: |
  Sin trazabilidad no se puede asegurar la composición ni las propiedades.
```
