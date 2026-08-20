# Oficios — Jardinero Paisajista — Diagnóstico de jardinería por casos (cuestionario, 22 preguntas VBLang)

> Tema: `oficios/jardinero-paisajista/diagnostico-jardineria-por-casos`. Cierre de la ruta del oficio (Sección 6). Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), casos técnicos que requieren distinguir plaga/enfermedad/problema abiótico — cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "basico"
  tags: ["diagnostico"]

variables:
  n: uno_de([1, 1])

respuesta: "identificar la causa raíz del problema, no sólo el síntoma"
tipo: mc
opciones_explicitas: ["aplicar el tratamiento más fuerte disponible", "identificar la causa raíz del problema, no sólo el síntoma", "cortar la planta afectada de inmediato"]

enunciado: "El objetivo del diagnóstico fitosanitario es..."

explicacion: |
  Un diagnóstico correcto permite elegir la solución adecuada; actuar
  sin diagnóstico puede empeorar la situación.
```

### 2 — pregunta 2

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "intermedio"
  tags: ["caso"]

variables:
  n: uno_de([1, 1])

respuesta: "abiótico (por sol o falta de agua), no una plaga"
tipo: mc
opciones_explicitas: ["una plaga de insectos", "abiótico (por sol o falta de agua), no una plaga", "un virus que exige cuarentena"]

enunciado: "Caso: una rosa tiene hojas con manchas marrones y bordes secos, y no se observan insectos ni telarañas. El diagnóstico más probable es un problema..."

explicacion: |
  Sin señales de organismos vivos, la causa más probable es una
  quemadura por sol intenso o falta de agua, no una plaga.
```

### 3 — pregunta 3

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "intermedio"
  tags: ["caso"]

variables:
  n: uno_de([1, 1])

respuesta: "oídio (hongo), no una quemadura de sol"
tipo: mc
opciones_explicitas: ["oídio (hongo), no una quemadura de sol", "falta de agua", "exceso de sol"]

enunciado: "Caso: una planta presenta un polvillo blanco sobre las hojas en un clima húmedo. El diagnóstico correcto es..."

explicacion: |
  El polvillo blanco en condiciones húmedas es característico del
  oídio, un hongo común que requiere fungicida específico o una
  solución casera de bicarbonato.
```

### 4 — pregunta 4

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "avanzado"
  tags: ["error comun"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Si una planta se marchita por falta de riego, aplicar un fungicida es una solución correcta y efectiva."

explicacion: |
  El fungicida no soluciona un problema de riego; además puede dañar
  más a la planta y al ambiente. Es un ejemplo de diagnóstico
  equivocado con consecuencias reales.
```

### 5 — pregunta 5

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "basico"
  tags: ["señales de plaga"]

variables:
  senal: uno_de(["excremento visible", "telarañas finas", "orificios irregulares en las hojas"])

respuesta: verdadero
tipo: vf

enunciado: "\"{senal}\" es una señal típica de presencia de plagas en una planta, según la teoría."

explicacion: |
  Las plagas dejan señales claras como estas, distintas de las manchas
  o el polvillo típico de las enfermedades fúngicas.
```

### 6 — pregunta 6

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "basico"
  tags: ["señales de enfermedad"]

variables:
  senal: uno_de(["manchas en las hojas", "polvillo blanco o negro", "pudrición del tallo"])

respuesta: verdadero
tipo: vf

enunciado: "\"{senal}\" es una señal típica de enfermedad (a menudo fúngica) en una planta, según la teoría."

explicacion: |
  Estas señales suelen aparecer en condiciones de alta humedad y son
  distintas de las que dejan las plagas de insectos.
```

### 7 — pregunta 7

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "intermedio"
  tags: ["caso"]

variables:
  n: uno_de([1, 1])

respuesta: "áfidos"
tipo: completar

enunciado: "Los insectos que forman colonias pegajosas en los brotes tiernos de una planta se llaman ___."

respuestas_validas:
  - "áfidos"
  - "afidos"

explicacion: |
  Los áfidos (pulgones) son una plaga común que se identifica
  justamente por esas colonias pegajosas en los brotes nuevos.
```

### 8 — pregunta 8

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "avanzado"
  tags: ["caso"]

variables:
  n: uno_de([1, 1])

respuesta: "estrés por cambio de ambiente, no falta de nutrientes"
tipo: mc
opciones_explicitas: ["estrés por cambio de ambiente, no falta de nutrientes", "falta de nutrientes en el suelo", "una plaga de caracoles"]

enunciado: "Caso: una planta recién comprada pierde hojas sin manchas ni insectos poco después de llegar a su nuevo hogar. La causa más probable es..."

explicacion: |
  Es el clásico caso de "la planta que no prende": el cambio de luz y
  temperatura genera estrés, no una deficiencia nutricional.
```

### 9 — pregunta 9

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "avanzado"
  tags: ["caso"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Ante una planta con estrés por cambio de ambiente, lo correcto es abonarla y trasplantarla de inmediato para ayudarla a recuperarse."

explicacion: |
  Lo correcto es dar tiempo a la planta a adaptarse en un lugar con luz
  indirecta y riego moderado, sin abonar ni trasplantar de inmediato.
```

### 10 — pregunta 10

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "basico"
  tags: ["primeros pasos"]

variables:
  dato: uno_de(["dónde está la planta (sol, sombra, interior)", "cómo se riega", "cuándo comenzaron los síntomas"])

respuesta: verdadero
tipo: vf

enunciado: "Antes de tratar una planta enferma, es importante anotar \"{dato}\"."

explicacion: |
  La observación y recolección de datos precisa es el primer paso del
  diagnóstico fitosanitario correcto.
```

### 11 — pregunta 11

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "intermedio"
  tags: ["contexto ambiental"]

variables:
  n: uno_de([1, 1])

respuesta: "si otras plantas cercanas están afectadas y las condiciones climáticas recientes"
tipo: mc
opciones_explicitas: ["si otras plantas cercanas están afectadas y las condiciones climáticas recientes", "el precio original de la planta", "el color de la maceta"]

enunciado: "Revisar el entorno de una planta enferma incluye principalmente observar..."

explicacion: |
  Esto ayuda a distinguir entre un problema biológico (hongo) y uno
  ambiental (estrés por calor, por ejemplo).
```

### 12 — pregunta 12

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  causa: uno_de(["un hongo", "una bacteria", "un virus"])

respuesta: "enfermedad"
tipo: mc
opciones_explicitas: ["plaga", "enfermedad", "problema abiótico"]

enunciado: "Un problema causado por \"{causa}\" se clasifica como..."

explicacion: |
  Hongos, bacterias y virus son organismos vivos que causan
  enfermedades, distintas de las plagas (insectos, ácaros, caracoles) y
  de los problemas abióticos (factores ambientales).
```

### 13 — pregunta 13

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  causa: uno_de(["insectos", "ácaros", "caracoles"])

respuesta: "plaga"
tipo: mc
opciones_explicitas: ["plaga", "enfermedad", "problema abiótico"]

enunciado: "Un problema causado por \"{causa}\" se clasifica como..."

explicacion: |
  Insectos, ácaros y caracoles son organismos que atacan la planta
  directamente: se clasifican como plagas.
```

### 14 — pregunta 14

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  causa: uno_de(["exceso de riego", "mal drenaje del suelo", "corrientes de aire frío"])

respuesta: "problema abiótico"
tipo: mc
opciones_explicitas: ["plaga", "enfermedad", "problema abiótico"]

enunciado: "Un problema causado por \"{causa}\" se clasifica como..."

explicacion: |
  Estos son factores ambientales, no organismos vivos: se clasifican
  como problemas abióticos.
```

### 15 — pregunta 15

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "avanzado"
  tags: ["error grave"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aplicar pesticidas a una planta que sufre un problema abiótico (como mal drenaje) sería un error grave, ya que no ataca la causa real."

explicacion: |
  Confundir un problema abiótico con una plaga lleva a tratamientos
  inútiles o dañinos que no resuelven la causa de fondo.
```

### 16 — pregunta 16

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "basico"
  tags: ["observacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La observación detallada de síntomas y contexto es la herramienta más poderosa del jardinero principiante."

explicacion: |
  Antes de cualquier tratamiento, observar con atención los síntomas y
  el entorno es el paso fundamental del diagnóstico.
```

### 17 — pregunta 17

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "intermedio"
  tags: ["beneficio economico"]

variables:
  n: uno_de([1, 1])

respuesta: "elegir la solución más adecuada, económica y respetuosa con el entorno"
tipo: mc
opciones_explicitas: ["elegir la solución más adecuada, económica y respetuosa con el entorno", "gastar más en productos por las dudas", "ignorar el problema hasta que empeore"]

enunciado: "Un buen diagnóstico fitosanitario permite, según la teoría..."

explicacion: |
  Diagnosticar bien ahorra tiempo y recursos a largo plazo, evitando
  tratamientos innecesarios o incorrectos.
```

### 18 — pregunta 18

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "intermedio"
  tags: ["remedio casero"]

variables:
  n: uno_de([1, 1])

respuesta: "bicarbonato"
tipo: completar

enunciado: "Una solución casera mencionada en la teoría para tratar el oídio es una preparación con ___."

respuestas_validas:
  - "bicarbonato"

explicacion: |
  El bicarbonato es una alternativa casera al fungicida específico para
  tratar el oídio, un hongo común en climas húmedos.
```

### 19 — pregunta 19

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "avanzado"
  tags: ["caso"]

variables:
  n: uno_de([1, 1])

respuesta: "revisar si hay insectos o señales de plaga visibles"
tipo: mc
opciones_explicitas: ["revisar si hay insectos o señales de plaga visibles", "aplicar fungicida sin más análisis", "cortar toda la planta de inmediato"]

enunciado: "Ante hojas con manchas marrones y bordes secos, el primer paso correcto para diferenciar quemadura solar de una plaga es..."

explicacion: |
  Sin insectos ni telarañas visibles, el diagnóstico se inclina hacia
  un problema abiótico (sol/agua) en vez de una plaga.
```

### 20 — pregunta 20

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "intermedio"
  tags: ["distincion biologico vs ambiental"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Observar si hizo mucho calor o lluvia recientemente ayuda a distinguir entre un problema biológico (hongo) y uno ambiental (estrés por calor)."

explicacion: |
  El contexto climático reciente es un dato clave para no confundir
  ambos tipos de causa.
```

### 21 — pregunta 21

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "basico"
  tags: ["actitud"]

variables:
  n: uno_de([1, 1])

respuesta: "observar, analizar y actuar con calma"
tipo: mc
opciones_explicitas: ["observar, analizar y actuar con calma", "aplicar el primer producto que encuentre", "esperar sin hacer nada indefinidamente"]

enunciado: "Según la teoría, la mejor estrategia general frente a una planta con problemas es..."

explicacion: |
  El diagnóstico sistemático (observar, analizar, actuar) evita
  soluciones apresuradas o incorrectas.
```

### 22 — pregunta 22

```
metadata:
  materia: "oficios"
  tema: "jardinero_paisajista_diagnostico_jardineria_por_casos"
  nivel: "avanzado"
  tags: ["consecuencia de mal diagnostico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Actuar sin un diagnóstico correcto puede empeorar la situación de la planta y dañar además el medio ambiente."

explicacion: |
  Un tratamiento mal elegido (como fungicida ante falta de riego) puede
  sumar daño en vez de resolver el problema original.
```

