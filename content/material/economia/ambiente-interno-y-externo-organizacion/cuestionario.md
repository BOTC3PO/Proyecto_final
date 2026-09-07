# Economia — ambiente interno y externo organizacion (cuestionario, 28 preguntas VBLang)

> Tema: `economia/ambiente-interno-y-externo-organizacion`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Economía"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["ambiente_interno", "definicion"]

variables:
  control_directo: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "El ambiente interno de una organización está compuesto por factores sobre los cuales la empresa tiene control directo."

explicacion: |
  El ambiente interno incluye recursos humanos, materiales, naturales y de conocimiento que la organización gestiona directamente.
```

### 2 — pregunta 2

```
metadata:
  materia: "Economía"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["ambiente_interno", "recursos"]

variables:
  recurso: uno_de(["humano", "material", "natural", "de conocimiento"])

respuesta: "recursos {recurso}"
tipo: completar

enunciado: "Los factores que componen el ambiente interno se denominan recursos {recurso}."

explicacion: |
  La teoría clasifica los elementos internos en cuatro tipos principales: humanos, materiales, naturales y de conocimiento.
```

### 3 — pregunta 3

```
metadata:
  materia: "Economía"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["recursos_humanos", "activos"]

variables:
  activo: uno_de(["el más importante", "el secundario", "el irrelevante"])

respuesta: "recursos humanos"
tipo: completar

enunciado: "Los {activo} de una organización son los recursos humanos, debido a sus habilidades y experiencia."

explicacion: |
  Los recursos humanos son considerados el activo más valioso porque incluyen la cultura laboral y la capacidad de innovación.
```

### 4 — pregunta 4

```
metadata:
  materia: "Economía"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["ambiente_externo", "control"]

respuesta: falso
tipo: vf

enunciado: "Una organización tiene control directo sobre las condiciones del ambiente externo."

explicacion: |
  El ambiente externo abarca fuerzas fuera de la organización que no puede controlar directamente, solo adaptar su estrategia a ellas.
```

### 5 — pregunta 5

```
metadata:
  materia: "Economía"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "avanzado"
  tags: ["recursos_conocimiento", "patentes"]

variables:
  elemento: uno_de(["patentes", "procesos documentados", "cultura organizacional"])

respuesta: "recursos de conocimiento"
tipo: completar

enunciado: "Las {elemento} forman parte de los recursos de conocimiento dentro de la organización."

explicacion: |
  Los recursos de conocimiento abarcan el saber hacer, patentes y procesos documentados que potencian la ventaja competitiva.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["definiciones", "ambiente_interno"]

variables:
  respuesta_correcta: "ambiente interno"

respuesta: "ambiente interno"
tipo: completar

enunciado: "Los factores, recursos y condiciones que están dentro de la organización y sobre los cuales tiene control directo se denominan: ___"

explicacion: |
  El ambiente interno abarca todos los elementos internos de la organización, como la estructura, los recursos humanos y la cultura corporativa, sobre los cuales la empresa tiene influencia directa.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["ambiente_externo", "micro_macro"]

variables:
  micro: "microambiente"
  macro: "macroambiente"

respuesta: "microambiente y macroambiente"
tipo: completar

enunciado: "El ambiente externo se divide generalmente en dos capas: el ___ y el ___."

explicacion: |
  El ambiente externo se clasifica en microambiente (actores directos como clientes y proveedores) y macroambiente (factores generales como leyes, economía y tecnología).
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["recursos_humanos", "ambiente_interno"]

variables:
  activo_clave: "recursos humanos"

respuesta: "recursos humanos"
tipo: completar

enunciado: "Según la teoría, quizás el activo más importante dentro del ambiente interno son los: ___"

explicacion: |
  Los recursos humanos incluyen habilidades, experiencia y cultura laboral, siendo fundamentales para la competitividad y la innovación interna.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["sistemas_abiertos", "teoria"]

variables:
  tipo_sistema: "sistemas abiertos"

respuesta: "sistemas abiertos"
tipo: completar

enunciado: "Las organizaciones se consideran ___ porque interactúan constantemente con su entorno."

explicacion: |
  Al ser sistemas abiertos, las organizaciones intercambian materia, energía e información con su entorno, por lo que no pueden operar en el vacío.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["recursos_naturales", "gestion"]

variables:
  contexto: "inventario almacenado"

respuesta: "ambiente interno"
tipo: completar

enunciado: "Cuando una organización gestiona directamente su inventario de materias primas almacenadas, estos recursos naturales forman parte del: ___"

explicacion: |
  Aunque los recursos naturales existen en el exterior, cuando son adquiridos y gestionados como inventario interno, pasan a ser parte del ambiente interno de la organización.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "avanzado"
  tags: ["estrategia", "riesgo"]

variables:
  consecuencia: "obsoleta"

respuesta: "obsoleta"
tipo: completar

enunciado: "Si una empresa ignora los cambios en el ambiente externo, como los gustos de los consumidores, puede volverse: ___"

explicacion: |
  La falta de adaptación a las fuerzas externas puede llevar a la obsolescencia del producto o servicio, perdiendo competitividad en el mercado.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["recursos_conocimiento", "intangible"]

variables:
  componentes: "patentes, procesos, cultura"

respuesta: "patentes, procesos documentados y cultura organizacional"
tipo: completar

enunciado: "Los recursos de conocimiento abarcan el saber hacer, las ___ y los procesos documentados."

explicacion: |
  Los recursos de conocimiento incluyen activos intangibles como patentes, know-how y la cultura que permea la organización.
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["clasificacion", "definiciones"]

variables:
  micro: "microambiente"
  macro: "macroambiente"

respuesta: "microambiente"
tipo: completar

enunciado: "El ambiente externo que incluye a los actores directos como clientes, proveedores y competidores se denomina: ___"

explicacion: |
  El microambiente (o específico) afecta directamente a la organización y está compuesto por actores con los que interactúa frecuentemente.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["importancia", "decisiones"]

variables:
  objetivo: "decisiones informadas"

respuesta: "decisiones más informadas y estratégicas"
tipo: completar

enunciado: "Comprender la dualidad entre ambiente interno y externo permite a los líderes tomar: ___"

explicacion: |
  El análisis de ambos ambientes es vital para la toma de decisiones estratégicas, permitiendo aprovechar oportunidades y mitigar amenazas.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["recursos_materiales", "infraestructura"]

variables:
  elementos: "edificios, maquinaria"

respuesta: "recursos materiales"
tipo: completar

enunciado: "La infraestructura física, como edificios y maquinaria, corresponde a los: ___"

explicacion: |
  Los recursos materiales son los activos físicos que determinan la capacidad productiva de la organización.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["estrategia", "adaptacion"]

variables:
  accion: "adaptar estrategia"

respuesta: "adaptar su estrategia"
tipo: completar

enunciado: "A las fuerzas del ambiente externo, la organización no puede controlarlas directamente, solo puede: ___"

explicacion: |
  Dado que el ambiente externo es incontrolable, la respuesta estratégica adecuada es la adaptación de la organización a dichas fuerzas.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["cultura", "recursos_humanos"]

variables:
  factor: "colaboración e innovación"

respuesta: "colaboración e innovación"
tipo: completar

enunciado: "Un ambiente interno sano fomenta la ___ y la innovación."

explicacion: |
  La cultura organizacional y el clima laboral positivo son pilares del ambiente interno que impulsan la productividad y la creatividad.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["macroambiente", "factores"]

variables:
  ejemplos: "leyes, economia, tecnologia"

respuesta: "leyes, economía y tecnología"
tipo: completar

enunciado: "El macroambiente incluye factores generales como las ___, la situación económica y los avances tecnológicos."

explicacion: |
  El macroambiente abarca fuerzas amplias que afectan a todas las industrias, como el marco legal, el contexto económico y el desarrollo tecnológico.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "avanzado"
  tags: ["sinergia", "eficiencia"]

variables:
  caracteristica: "bien integrados y potenciados"

respuesta: "bien integrados y se potencian entre sí"
tipo: completar

enunciado: "Un ambiente interno fuerte es aquel donde los recursos están: ___"

explicacion: |
  La efectividad del ambiente interno depende de la integración sinérgica de sus recursos humanos, materiales y de conocimiento.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["recursos_naturales", "diferenciacion"]

variables:
  ubicacion: "macroambiente"

respuesta: "macroambiente"
tipo: completar

enunciado: "Los recursos naturales no gestionados directamente por la organización se consideran parte del: ___"

explicacion: |
  Los recursos naturales en su estado original son parte del entorno externo (macroambiente), solo pasan al interno cuando son adquiridos y gestionados.
```

### 21 — pregunta 21

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

variables:
  concepto: "sistemas abiertos"

respuesta: "sistemas abiertos"
tipo: completar

enunciado: "Para entender cómo funciona una organización, es fundamental recordar que son ___ que interactúan con el entorno."

explicacion: |
  La teoría de sistemas clasifica a las organizaciones como abiertas debido a su constante intercambio con el ambiente externo.
```

### 22 — pregunta 22

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["competitividad", "eficiencia"]

variables:
  condicion: "gestionar bien el ambiente interno"

respuesta: "gestionar bien su ambiente interno"
tipo: completar

enunciado: "Si una organización no gestiona bien su ambiente interno, no podrá competir ni aprovechar las oportunidades del exterior."

explicacion: |
  Una gestión interna deficiente debilita la capacidad de la empresa para responder eficazmente a las oportunidades externas.
```

### 23 — pregunta 23

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["definiciones", "microambiente"]

variables:
  nombre: "microambiente"

respuesta: "microambiente"
tipo: completar

enunciado: "La capa del ambiente externo que incluye a los actores directos se llama: ___"

explicacion: |
  El microambiente, también llamado específico, está compuesto por los actores con los que la organización tiene interacción directa.
```

### 24 — pregunta 24

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["importancia", "estrategia"]

variables:
  razon: "vital"

respuesta: "vital"
tipo: completar

enunciado: "La distinción entre ambiente interno y externo es ___ para entender el funcionamiento de la organización."

explicacion: |
  Distinguir ambas dimensiones es vital para la planificación estratégica y la supervivencia de la organización en el mercado.
```

### 25 — pregunta 25

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["recursos_materiales", "clasificacion"]

variables:
  ejemplo: "computadoras"

respuesta: "recursos materiales"
tipo: completar

enunciado: "Las computadoras y la maquinaria son ejemplos de: ___"

explicacion: |
  Los recursos materiales son los activos físicos tangibles utilizados en el proceso productivo.
```

### 26 — pregunta 26

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["influencia", "estrategia"]

variables:
  efecto: "influyen pero no controlan"

respuesta: "influyen, pero no pueden controlar directamente"
tipo: completar

enunciado: "Las fuerzas del ambiente externo ___ a la organización, aunque la organización no las controla."

explicacion: |
  El ambiente externo influye en los resultados y decisiones de la empresa, pero estas fuerzas son externas al control directo de la misma.
```

### 27 — pregunta 27

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "avanzado"
  tags: ["recursos", "integracion"]

variables:
  resultado: "potenciarse mutuamente"

respuesta: "se potencian entre sí"
tipo: completar

enunciado: "En un ambiente interno fuerte, los recursos están integrados y: ___"

explicacion: |
  La integración efectiva hace que los recursos internos se refuercen mutuamente, aumentando la eficiencia y la capacidad competitiva.
```

### 28 — pregunta 28

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "avanzado"
  tags: ["estrategia", "resumen"]

variables:
  clave: "comprender la dualidad"

respuesta: "comprender esta dualidad"
tipo: completar

enunciado: "Para tomar decisiones estratégicas informadas, es necesario: ___"

explicacion: |
  Comprender la dualidad entre lo interno (controlable) y lo externo (influyente) es la base de la estrategia organizacional efectiva.
```
