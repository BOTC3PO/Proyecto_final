# Ingenieria — Investigar soluciones existentes (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El valor de la investigación previa

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["metodologia", "diseño", "eficiencia"]

respuesta: "no reinventar la rueda"
tipo: completar
respuestas_validas:
  - "no reinventar la rueda"
  - "no reinventar la rueda"
  - "no reinventar la rueda"

enunciado: "En ingeniería, una de las reglas de oro para optimizar tiempos y recursos es ___."

explicacion: |
  Investigar soluciones existentes evita que un equipo pierda tiempo resolviendo problemas que ya han sido solucionados por otros, permitiendo enfocarse en la innovación real.
```

### 2 — Concepto de Benchmarking

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["benchmarking", "estandarizacion"]

opciones_explicitas: ["Benchmarking", "Prototipado", "Brainstorming", "Debugging"]
respuesta: "Benchmarking"
tipo: mc

enunciado: "¿Cómo se denomina al proceso de comparar productos, soluciones o procesos propios con los de los líderes del mercado o estándares de la industria?"

explicacion: |
  El Benchmarking es una herramienta de gestión y diseño que permite identificar las mejores prácticas para integrarlas en el propio desarrollo.
```

### 3 — Verdadero o Falso: El uso de precedentes

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["precedentes", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que investigar soluciones existentes limita la creatividad del ingeniero al imponerle un camino ya trazado?"

explicacion: |
  Falso. La investigación de precedentes no limita la creatividad, sino que la fundamenta, permitiendo que el ingeniero construya sobre bases sólidas en lugar de cometer errores ya conocidos.
```

### 4 — Fases del análisis de soluciones

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Identificar problemas de la solución actual", "Documentar hallazgos", "Analizar arquitectura técnica", "Evaluar pros y contras"]
respuesta_orden: ["Identificar problemas de la solución actual", "Analizar arquitectura técnica", "Evaluar pros y contras", "Documentar hallazgos"]
tipo: ordenar

enunciado: "Ordene lógicamente los pasos para realizar un análisis de una solución existente antes de iniciar un nuevo diseño:"

explicacion: |
  Un proceso sistemático requiere primero entender qué falla o qué se puede mejorar, analizar cómo está construido, evaluar su rendimiento y finalmente documentar todo para el nuevo proyecto.
```

### 5 — El concepto de Estado del Arte

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["estado_del_arte", "investigacion"]

opciones_explicitas: ["Estado del Arte", "Diagrama de flujo", "Manual de usuario", "Especificación técnica"]
respuesta: "Estado del Arte"
tipo: mc

enunciado: "El conjunto de conocimientos, tecnologías y soluciones que representan el nivel más alto de desarrollo en un campo específico en un momento dado se conoce como:"

explicacion: |
  El 'Estado del Arte' es la revisión exhaustiva de lo que existe actualmente, fundamental para asegurar que el nuevo diseño sea verdaderamente innovador o una mejora significativa.
```

### 6 — El costo de reinventar la rueda

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["eficiencia", "metodologia"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [[15000, 5000], [8000, 2000]]

enunciado: "Un equipo de ingeniería decide desarrollar un sensor de temperatura desde cero en lugar de usar uno ya estandarizado. El costo de desarrollo propio es de ${datos[caso_idx][0]} USD, mientras que la licencia de una solución existente es de ${datos[caso_idx][1]} USD. ¿Cuál es el ahorro potencial al usar la solución existente?"

respuesta: datos[caso_idx][0] - datos[caso_idx][1]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Al investigar soluciones existentes, el ahorro fue de ${datos[caso_idx][0] - datos[caso_idx][1]} USD. Reinventar la rueda sin necesidad aumenta los costos y el tiempo de salida al mercado.
```

### 7 — El precedente técnico

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["estandar", "benchmarking"]

variables:
  estandares: [["ISO-9001", "Calidad"], ["IEEE-802.11", "Conectividad"], ["ASTM-E12", "Materiales"]]
  idx: uno_de([0, 1, 2])
  estandar_nombre: estandares[idx][0]
  estandar_valor: estandares[idx][1]

enunciado: "Al diseñar un sistema de comunicación inalámbrica, el ingeniero consulta el estándar ${estandar_nombre} para evitar errores de compatibilidad. El objetivo principal de este estándar es asegurar la: ___"

respuestas_validas:
  - estandar_valor
tipo: completar

explicacion: |
  Consultar estándares como el ${estandar_nombre} permite que el diseño sea compatible con el ecosistema existente, evitando el error de 'reinventar' protocolos de comunicación.
```

### 8 — Análisis de patentes

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["propiedad_intelectual", "riesgo"]

variables:
  patente_valida: uno_de([verdadero, falso])

enunciado: "Un ingeniero encuentra una solución técnica que resuelve el problema del diseño actual, pero descubre que existe una patente vigente para ese mecanismo específico. ¿Es legalmente seguro implementar esta solución sin una licencia?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: mc

explicacion: |
  La investigación de soluciones existentes no es solo técnica, sino también legal. Implementar una solución patentada sin autorización constituye infracción de propiedad intelectual.
```

### 9 — Ciclo de investigación de diseño

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

enunciado: "Ordena los pasos lógicos para integrar una solución existente en un nuevo proyecto de ingeniería:"

opciones_explicitas: ["Identificar el problema", "Buscar soluciones existentes", "Evaluar precedentes", "Adaptar solución al diseño"]
respuesta_orden: ["Identificar el problema", "Buscar soluciones existentes", "Evaluar precedentes", "Adaptar solución al diseño"]
tipo: ordenar

explicacion: |
  El proceso correcto implica primero entender el problema, luego buscar qué se ha hecho antes, evaluar si esas soluciones sirven y finalmente adaptarlas.
```

### 10 — El mito de la originalidad absoluta

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["mentalidad", "eficiencia"]

variables:
  es_eficiente: uno_de([verdadero, falso])

enunciado: "Si un ingeniero dedica el 40% del tiempo de un proyecto a documentar soluciones que ya han sido resueltas en la industria para evitar errores previos, ¿esta práctica se considera eficiente en la gestión de ingeniería?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  La investigación de precedentes es una inversión de tiempo que reduce la incertidumbre y el riesgo de fallos catastróficos en la fase de prototipado.
```

### 11 — El mito de la originalidad absoluta

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["metodologia", "diseño", "eficiencia"]

respuesta: falso
tipo: vf

enunciado: "En el proceso de diseño de ingeniería, intentar crear una solución desde cero sin consultar precedentes tecnológicos se considera una práctica de alta eficiencia para maximizar la innovación."

explicacion: |
  Falso. Ignorar las soluciones existentes (el "reinventar la rueda") suele llevar a errores de diseño ya resueltos, mayores costos y pérdida de tiempo. La verdadera innovación surge de iterar sobre lo que ya funciona.
```

### 12 — El riesgo de la falta de investigación

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["riesgo", "gestión_de_proyectos"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Un ingeniero diseña un sistema de frenado ignorando normativas de seguridad previas.", "retrabajo_costoso"], ["Un ingeniero desarrolla un motor sin estudiar la termodinámica aplicada en modelos anteriores.", "fallo_estructural"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc

opciones_explicitas: ["retrabajo_costoso", "fallo_estructural", "optimización_de_costos", "aceleración_de_prototipado"]

enunciado: "Si un equipo de ingeniería decide omitir la fase de investigación de soluciones existentes para 'ahorrar tiempo', el resultado más probable en un proyecto complejo es: ___"

explicacion: |
  La falta de precedentes aumenta drásticamente la probabilidad de cometer errores técnicos que ya han sido documentados en la industria, lo que deriva en un {escenarios[escenario_idx][1]}.
```

### 13 — El proceso de análisis de precedentes

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodología", "pasos_diseño"]

respuesta_orden: ["Identificar problemas", "Buscar soluciones existentes", "Analizar ventajas y desventajas", "Seleccionar la mejor base para el diseño"]
tipo: ordenar

opciones_explicitas: ["Identificar problemas", "Buscar soluciones existentes", "Analizar ventajas y desventajas", "Seleccionar la mejor base para el diseño"]

enunciado: "Ordene lógicamente los pasos que un ingeniero debe seguir al realizar un estudio de antecedentes antes de iniciar el diseño de un nuevo producto:"

explicacion: |
  Antes de diseñar, primero se debe entender el problema, luego investigar qué se ha hecho para resolverlo, evaluar esas soluciones y finalmente usar ese conocimiento como base.
```

### 14 — La distinción entre copiar y aprender

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["ética", "innovación"]

respuesta: "mejora"
tipo: completar

respuestas_validas:
  - "mejora"
  - "réplica"
  - "plagio"
  - "error"

enunciado: "Cuando un ingeniero estudia una solución existente para entender sus limitaciones y aplicarlas en un nuevo contexto, no está realizando una simple réplica, sino buscando una ___ del sistema original."

explicacion: |
  La investigación de precedentes tiene como objetivo la evolución técnica. El objetivo es aprender de los éxitos y, sobre todo, de los fallos de las soluciones actuales para proponer una mejora.
```

### 15 — El impacto de la documentación técnica

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["documentación", "gestión_del_conocimiento"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la revisión de patentes y literatura técnica es una etapa de investigación de soluciones existentes?"

explicacion: |
  Verdadero. Las patentes y la literatura técnica son las fuentes primarias para asegurar que no se está reinventando algo que ya está protegido o documentado.
```

### 16 — Diferencia entre Benchmarking y Reingeniería

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia", "benchmarking"]

variables:
  concepto_clave: "benchmarking"

enunciado: "El proceso de comparar procesos o productos propios con los de los líderes del mercado para identificar mejoras se denomina {concepto_clave}, mientras que la reingeniería implica un cambio radical de la estructura existente."

opciones_explicitas: ["benchmarking", "reingeniería", "prototipado", "iteración"]
respuesta: "benchmarking"
tipo: "mc"

explicacion: |
  El benchmarking busca mejorar mediante la comparación con estándares de excelencia, sin destruir el proceso actual, a diferencia de la reingeniería que propone un rediseño total desde cero.
```

### 17 — El concepto de "Reinventar la rueda"

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["eficiencia", "precedentes"]

variables:
  es_eficiente: falso

enunciado: "Si un ingeniero decide diseñar desde cero un mecanismo de engranajes que ya ha sido optimizado y documentado ampliamente por la industria, ¿está aplicando una práctica de eficiencia en el diseño?"

respuesta: es_eficiente
tipo: "vf"

explicacion: |
  No es eficiente. Ignorar soluciones existentes y "reinventar la rueda" consume recursos, tiempo y aumenta el riesgo de errores que ya han sido resueltos en precedentes técnicos.
```

### 18 — Etapas de la investigación de soluciones

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Identificar necesidades", "Analizar soluciones existentes", "Evaluar precedentes", "Seleccionar arquitectura"]
respuesta_orden: ["Identificar necesidades", "Analizar soluciones existentes", "Evaluar precedentes", "Seleccionar arquitectura"]
tipo: "ordenar"

enunciado: "Ordene lógicamente los pasos para investigar soluciones existentes antes de definir la arquitectura de un nuevo diseño:"

explicacion: |
  Antes de diseñar, se debe entender qué se necesita, buscar qué se ha hecho antes (análisis), entender por qué funcionó o falló (evaluar) y finalmente elegir el camino a seguir.
```

### 19 — Estado del Arte vs. Prototipo

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["investigacion", "diseño"]

variables:
  idx: uno_de([0, 1])
  terminos: [["Estado del Arte", "Prototipo"], ["Revisión de literatura", "Modelo físico experimental"]]

enunciado: "La investigación de soluciones existentes se basa principalmente en el {terminos[idx][0]}, mientras que la validación de una nueva idea propia se realiza mediante un {terminos[idx][1]}."

respuesta: [terminos[idx][0], terminos[idx][1]]
tipo: "completar"
respuestas_validas:
  - terminos[idx][0]
  - terminos[idx][1]

explicacion: |
  El Estado del Arte es el conocimiento actual acumulado en la disciplina, mientras que el prototipo es la materialización física o digital de la nueva propuesta del ingeniero.
```

### 20 — El riesgo de la falta de precedentes

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["riesgo", "diseño"]

variables:
  riesgo_alto: verdadero

enunciado: "Si un ingeniero omite la fase de investigación de soluciones existentes, el riesgo de cometer errores de diseño ya superados por la industria es ___."

respuesta: "alto"
tipo: "completar"
respuestas_validas:
  - "alto"
  - "muy alto"

explicacion: |
  La falta de estudio de precedentes incrementa exponencialmente la probabilidad de repetir fallos técnicos o de gestión que ya fueron resueltos en proyectos anteriores.
```

### 21 — El dilema del diseño desde cero

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["metodologia", "eficiencia"]

variables:
  escenario: uno_de([["Se requiere un sistema de filtrado de agua para una comunidad rural.", "reutilizar"], ["Se busca optimizar un motor de combustión interna.", "analizar_precedentes"], ["Se necesita diseñar un puente peatonal de madera.", "estudiar_estándares"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["reutilizar", "analizar_precedentes", "estudiar_estándares", "inventar_todo"]

enunciado: "Ante el escenario: '{escenario[0]}', la acción más eficiente para evitar la 'reinvención de la rueda' es: ___"

explicacion: |
  Investigar soluciones existentes permite aprovechar conocimientos probados, ahorrando tiempo y recursos.
```

### 22 — ¿Es necesario reinventar?

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Si existe un estándar industrial consolidado para un componente mecánico, ¿es una buena práctica de ingeniería intentar diseñar un proceso de fabricación completamente nuevo sin antes estudiar dicho estándar?"

explicacion: |
  No. Ignorar los estándares y soluciones existentes aumenta el riesgo de errores y costos innecesarios.
```

### 23 — El proceso de investigación

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta_orden: ["Búsqueda de antecedentes", "Análisis de fallos previos", "Selección de solución base", "Diseño de prototipo"]
tipo: ordenar

opciones_explicitas: ["Búsqueda de antecedentes", "Análisis de fallos previos", "Selección de solución base", "Diseño de prototipo"]

enunciado: "Ordene los pasos lógicos para aplicar el aprendizaje de precedentes en un nuevo proyecto de ingeniería:"

explicacion: |
  El orden lógico comienza con la investigación, sigue con el análisis de lo que falló o funcionó, la elección de una base y finalmente el diseño.
```

### 24 — Análisis de costos y tiempo

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["gestion_proyectos"]

variables:
  caso: uno_de([["Caso A: Implementar un software de gestión ya existente.", "200"], ["Caso B: Desarrollar un software de gestión desde cero.", "1500"]])

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "200"
  - "1500"

enunciado: "Si el presupuesto para el '{caso[0]}' es de $1000, ¿cuál es el costo estimado (en dólares) según el escenario planteado?"

explicacion: |
  La investigación de soluciones existentes suele reducir drásticamente los costos de desarrollo inicial.
```

### 25 — Patrones de diseño

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["patrones", "optimizacion"]

variables:
  patron: uno_de([["Modularidad", "Escalabilidad"], ["Redundancia", "Robustez"], ["Simplicidad", "Mantenibilidad"]])

respuesta: patron[0]
tipo: mc
opciones_explicitas: ["Modularidad", "Escalabilidad", "Redundancia", "Robustez", "Simplicidad", "Mantenibilidad"]

enunciado: "Al estudiar un sistema de ingeniería previo, se observa que su principal fortaleza es la {patron[0]}. Si el nuevo diseño busca replicar exactamente esta característica, el objetivo principal es la: ___"

explicacion: |
  Identificar la característica clave de una solución exitosa permite replicar su éxito en nuevos contextos.
```
