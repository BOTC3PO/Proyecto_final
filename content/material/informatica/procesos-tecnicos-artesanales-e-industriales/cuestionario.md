# Informática — Procesos técnicos artesanales e industriales (cuestionario, 22 preguntas VBLang)

> Tema: `informatica/procesos-tecnicos-artesanales-e-industriales`. Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "un conjunto de pasos organizados para transformar materias primas en algo útil"
tipo: mc
opciones_explicitas: ["un conjunto de pasos organizados para transformar materias primas en algo útil", "sólo el resultado final de una fábrica", "un tipo de máquina específica"]

enunciado: "Un proceso técnico es, en esencia..."

explicacion: |
  Tanto el proceso artesanal como el industrial son formas organizadas
  de transformar materias primas en algo útil, aunque de maneras
  distintas.
```

### 2 — pregunta 2

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["proceso artesanal"]

variables:
  n: uno_de([1, 1])

respuesta: "la habilidad manual y el conocimiento del oficio"
tipo: mc
opciones_explicitas: ["la habilidad manual y el conocimiento del oficio", "la velocidad de una máquina automatizada", "la estandarización de protocolos"]

enunciado: "En el proceso artesanal, el motor principal de la producción es..."

explicacion: |
  La intervención directa y constante del trabajador, con su habilidad
  y conocimiento específico, es lo que define al proceso artesanal.
```

### 3 — pregunta 3

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["limite artesanal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El proceso artesanal tiene como límite natural el tiempo humano, ya que cada pieza requiere trabajo manual delicado."

explicacion: |
  No es posible producir miles de unidades idénticas en un día si cada
  una necesita horas de trabajo manual individual.
```

### 4 — pregunta 4

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["proceso industrial"]

variables:
  n: uno_de([1, 1])

respuesta: "eficiencia, estandarización y producción en masa"
tipo: mc
opciones_explicitas: ["eficiencia, estandarización y producción en masa", "personalización única de cada pieza", "dependencia exclusiva del trabajo manual"]

enunciado: "El proceso industrial prioriza..."

explicacion: |
  Usa maquinaria y algoritmos para repetir operaciones con precisión y
  velocidad, reduciendo el costo unitario a costa de la unicidad.
```

### 5 — pregunta 5

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["estandarizacion digital"]

variables:
  elemento: uno_de(["protocolos", "formatos de archivo", "lenguajes de programación universales"])

respuesta: verdadero
tipo: vf

enunciado: "En el mundo digital, la estandarización se manifiesta en \"{elemento}\", permitiendo que un archivo creado en una ciudad se abra en otra sin problemas."

explicacion: |
  Así como antes las piezas mecánicas eran intercambiables, hoy los
  protocolos y formatos digitales cumplen esa misma función de
  compatibilidad universal.
```

### 6 — pregunta 6

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: "el correo electrónico"
tipo: mc
opciones_explicitas: ["redactar mil cartas a mano", "el correo electrónico", "ninguno de los dos métodos"]

enunciado: "Para enviar un mensaje a mil personas de forma eficiente (lógica industrial), conviene usar..."

explicacion: |
  Redactar mil cartas a mano sería el enfoque artesanal, mucho menos
  eficiente para esa escala; el correo electrónico es la solución
  industrial/escalable.
```

### 7 — pregunta 7

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["desafios"]

variables:
  n: uno_de([1, 1])

respuesta: "la pérdida de la \"huella humana\" y la dependencia de sistemas rígidos"
tipo: mc
opciones_explicitas: ["la pérdida de la \"huella humana\" y la dependencia de sistemas rígidos", "el aumento del costo unitario de producción", "la imposibilidad de automatizar tareas"]

enunciado: "La industrialización extrema de la informática (automatización con scripts y algoritmos) plantea como desafío..."

explicacion: |
  Democratiza el acceso a la información, pero también implica perder
  unicidad y depender de sistemas que fallan si no se entienden sus
  reglas internas.
```

### 8 — pregunta 8

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["ejemplo argentino"]

variables:
  n: uno_de([1, 1])

respuesta: "artesanal"
tipo: mc
opciones_explicitas: ["artesanal", "industrial"]

enunciado: "La panadería tradicional donde el panadero amasa cada pieza a mano, ajustando el agua según la humedad del día, es un ejemplo de proceso..."

explicacion: |
  Es flexible, depende del experto y tiene variaciones naturales en cada
  producto: características típicas del proceso artesanal.
```

### 9 — pregunta 9

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["ejemplo argentino"]

variables:
  n: uno_de([1, 1])

respuesta: "industrial"
tipo: mc
opciones_explicitas: ["artesanal", "industrial"]

enunciado: "La fábrica de galletitas donde robots y cintas transportadoras aseguran que cada galletita pese exactamente lo mismo es un ejemplo de proceso..."

explicacion: |
  La estandarización extrema (mismo peso y sabor en millones de
  unidades) es característica del proceso industrial.
```

### 10 — pregunta 10

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["ejemplo informatico"]

variables:
  n: uno_de([1, 1])

respuesta: "artesanal/prototipo"
tipo: mc
opciones_explicitas: ["artesanal/prototipo", "industrial", "ninguno de los dos"]

enunciado: "Escribir código personalizado para resolver un problema específico de una empresa es, en la lógica de esta teoría, un proceso..."

explicacion: |
  Es único y adaptable a esa empresa en particular, a diferencia de un
  sistema estandarizado y masivo.
```

### 11 — pregunta 11

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["ejemplo informatico"]

variables:
  n: uno_de([1, 1])

respuesta: "rígido, estandarizado y obligatorio para millones de usuarios"
tipo: mc
opciones_explicitas: ["rígido, estandarizado y obligatorio para millones de usuarios", "único y personalizable para cada empresa", "opcional y sin ninguna regla fija"]

enunciado: "El sistema de facturación electrónica que exige la AFIP es, según la teoría, un ejemplo de software..."

explicacion: |
  Es un sistema de software masivo: rígido, estandarizado y obligatorio,
  a diferencia de una solución artesanal/personalizada.
```

### 12 — pregunta 12

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["medios tecnicos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Tanto el proceso artesanal como el industrial son considerados \"medios técnicos\" que extienden las capacidades humanas."

explicacion: |
  Ambos son formas de extender lo que el ser humano puede producir, sólo
  que gestionan tiempo, calidad y escala de manera diferente.
```

### 13 — pregunta 13

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["diferencia clave"]

variables:
  n: uno_de([1, 1])

respuesta: "en cómo se gestiona el tiempo, la calidad y la escala de producción"
tipo: mc
opciones_explicitas: ["en el resultado final obtenido", "en cómo se gestiona el tiempo, la calidad y la escala de producción", "en el país donde se fabrica el producto"]

enunciado: "Según la teoría, la diferencia clave entre proceso artesanal e industrial no está en el resultado final, sino..."

explicacion: |
  Ambos pueden llegar a un producto similar; lo que cambia es la forma
  de gestionar tiempo, calidad y escala durante la producción.
```

### 14 — pregunta 14

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["personalizacion vs escala"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El proceso industrial permite el mismo grado de personalización pieza por pieza que el proceso artesanal."

explicacion: |
  El proceso industrial gana en escala y costo unitario, pero sacrifica
  la unicidad y personalización propia de lo artesanal.
```

### 15 — pregunta 15

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["estandarizacion pre-digital"]

variables:
  n: uno_de([1, 1])

respuesta: "las piezas mecánicas eran intercambiables"
tipo: mc
opciones_explicitas: ["las piezas mecánicas eran intercambiables", "cada máquina tenía piezas únicas", "no existía ningún tipo de estándar"]

enunciado: "En la era pre-digital, la estandarización industrial significaba principalmente que..."

explicacion: |
  La intercambiabilidad de piezas mecánicas fue la base de la
  estandarización industrial antes de la era digital.
```

### 16 — pregunta 16

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["decision"]

variables:
  n: uno_de([1, 1])

respuesta: "equilibrar eficiencia con calidad y adaptabilidad"
tipo: mc
opciones_explicitas: ["equilibrar eficiencia con calidad y adaptabilidad", "elegir siempre el proceso industrial sin excepción", "elegir siempre el proceso artesanal sin excepción"]

enunciado: "Comprender la dualidad artesanal/industrial ayuda, según la teoría, a..."

explicacion: |
  No se trata de que uno sea siempre mejor: la clave es decidir cuándo
  personalizar y cuándo adoptar un estándar industrial, equilibrando
  eficiencia, calidad y adaptabilidad.
```

### 17 — pregunta 17

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["costo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El proceso industrial reduce el costo unitario de producción respecto al proceso artesanal."

explicacion: |
  Al producir en masa con maquinaria y algoritmos, el costo por unidad
  baja, aunque se pierda la unicidad de cada objeto.
```

### 18 — pregunta 18

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["automatizacion"]

variables:
  n: uno_de([1, 1])

respuesta: "scripts y algoritmos"
tipo: completar

enunciado: "En informática, lo que antes era un trabajo intelectual único hoy se automatiza mediante ___."

respuestas_validas:
  - "scripts y algoritmos"
  - "algoritmos y scripts"

explicacion: |
  Esta automatización democratiza el acceso a la información, pero
  también plantea el desafío de la pérdida de "huella humana" en la
  creación de contenido.
```

### 19 — pregunta 19

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["software y hardware"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En informática, el software y el hardware siguen lógicas similares a la distinción entre proceso artesanal e industrial."

explicacion: |
  Un código personalizado (artesanal) y un sistema masivo estandarizado
  (industrial) reflejan la misma dualidad vista en la producción física.
```

### 20 — pregunta 20

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["escalabilidad"]

variables:
  n: uno_de([1, 1])

respuesta: "su capacidad de escalar"
tipo: mc
opciones_explicitas: ["su capacidad de escalar", "su bajo nivel de estandarización", "su dependencia exclusiva del trabajo manual"]

enunciado: "La principal ventaja del modelo industrial, según la teoría, es..."

explicacion: |
  Puede repetir operaciones con precisión y velocidad para producir a
  gran escala, algo que el proceso artesanal no logra por su límite de
  tiempo humano.
```

### 21 — pregunta 21

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["democratizacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La automatización informática democratiza el acceso a la información, pero también plantea desafíos sobre la pérdida de la \"huella humana\" en la creación de contenido."

explicacion: |
  Es una tensión real señalada en la teoría: más acceso y eficiencia,
  pero menos marca personal en lo producido.
```

### 22 — pregunta 22

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["conceptos clave"]

variables:
  n: uno_de([1, 1])

respuesta: "artesanal e industrial"
tipo: mc
opciones_explicitas: ["artesanal e industrial", "digital y analógico", "público y privado"]

enunciado: "Las dos formas fundamentales de producir objetos o servicios que compara la teoría son el proceso..."

explicacion: |
  Artesanal e industrial son los dos "medios técnicos" cuya diferencia
  central se explica en toda la teoría.
```

