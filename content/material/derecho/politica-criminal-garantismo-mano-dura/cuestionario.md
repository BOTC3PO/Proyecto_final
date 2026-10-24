# Derecho — Politica criminal garantismo mano dura (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Conceptos fundamentales de política criminal

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "basico"
  tags: ["politica_criminal", "garantismo", "mano_dura"]

respuesta: "garantismo"
tipo: "completar"
respuestas_validas:
  - "garantismo"

enunciado: "El modelo de política criminal que pone el foco en la protección de los derechos fundamentales del imputado y el respeto irrestricto a las garantías procesales se denomina ___."

explicacion: |
  El garantismo busca limitar el poder punitivo del Estado para asegurar que el proceso penal respete los derechos humanos del acusado.
```

### 2 — Enfoque de la política de "Mano Dura"

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "basico"
  tags: ["mano_dura", "seguridad"]

respuesta: "priorizar la seguridad ciudadana y el castigo penal"
tipo: "mc"
opciones_explicitas: ["priorizar la seguridad ciudadana y el castigo penal", "garantizar el debido proceso por sobre la eficacia", "reducir la población carcelaria mediante medidas alternativas", "limitar la discrecionalidad judicial"]

enunciado: "La política criminal de 'mano dura' se caracteriza principalmente por:"

explicacion: |
  La 'mano dura' suele priorizar la eficacia en la persecución del delito y el aumento de las penas como respuesta inmediata a la inseguridad.
```

### 3 — Relación entre Garantismo y Seguridad

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["garantismo", "seguridad"]

respuesta: falso
tipo: "vf"

enunciado: "El garantismo penal es incompatible con la búsqueda de la seguridad ciudadana."

explicacion: |
  Falso. El garantismo busca una seguridad jurídica donde el Estado sea eficaz pero sin vulnerar los derechos fundamentales de los ciudadanos.
```

### 4 — Elementos del Garantismo

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["garantismo", "derechos"]

respuesta: "debido proceso"
tipo: "completar"
respuestas_validas:
  - "debido proceso"

enunciado: "Para el garantismo, el ___ es el pilar fundamental que asegura que la aplicación de la ley penal sea justa y no arbitraria."

explicacion: |
  El debido proceso es el conjunto de garantías que protegen al individuo frente al ejercicio del poder punitivo del Estado.
```

### 5 — Secuencia de la respuesta penal (Perspectiva de Mano Dura)

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["mano_dura", "proceso"]

tipo: "ordenar"
opciones_explicitas: ["Aumento de penas", "Mayor presencia policial", "Incremento de la percepción de seguridad"]
respuesta_orden: ["Aumento de penas", "Mayor presencia policial", "Incremento de la percepción de seguridad"]

enunciado: "Ordene la secuencia lógica de objetivos/acciones que suele promover una política de 'mano dura' para combatir la criminalidad:"

explicacion: |
  La lógica de la mano dura suele partir de la acción punitiva y de control (penas y policía) con el fin de generar una sensación de orden y seguridad.
```

### 6 — Enfoque de la política criminal

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "basico"
  tags: ["politica_criminal", "garantismo", "mano_dura"]

respuesta: "garantismo"
tipo: "mc"
opciones_explicitas: ["garantismo", "mano_dura", "populismo_punitivo"]

enunciado: "Un sistema que prioriza el respeto estricto a las garantías procesales y la presunción de inocencia, limitando el poder punitivo del Estado para proteger al individuo, se identifica con el:"

explicacion: |
  El garantismo busca que el proceso penal sea un límite al poder del Estado, asegurando que nadie sea sancionado sin un juicio justo y respetando sus derechos fundamentales.
```

### 7 — El dilema de la seguridad pública

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "castigo", "mano_dura"]

variables:
  escenario: uno_de(["Aumento de la criminalidad", "Inseguridad ciudadana", "Crisis de delincuencia"])

respuesta: "mano_dura"
tipo: "mc"
opciones_explicitas: ["garantismo", "mano_dura"]

enunciado: "Ante el escenario de {escenario}, ¿qué tipo de política criminal suele proponer el endurecimiento de las penas y la expansión de la vigilancia policial para restaurar el orden?"

explicacion: |
  La política de "mano dura" responde a la percepción de inseguridad mediante el incremento de la severidad penal, priorizando la prevención general a través del castigo.
```

### 8 — Veracidad de principios

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "basico"
  tags: ["principios", "derechos_humanos"]

respuesta: falso
tipo: "vf"

enunciado: "El garantismo penal sostiene que la eficacia en la persecución del delito es más importante que el respeto a las formas procesales."

explicacion: |
  Falso. El garantismo sostiene precisamente lo contrario: la validez del proceso penal depende del respeto irrestricto a las garantías constitucionales, incluso si esto implica la nulidad de una prueba obtenida ilegalmente.
```

### 9 — El proceso de una investigación

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

tipo: "ordenar"
opciones_explicitas: ["Detención", "Imputación", "Juicio Oral", "Sentencia"]
respuesta_orden: ["Detención", "Imputación", "Juicio Oral", "Sentencia"]

enunciado: "Ordene las etapas de un proceso penal bajo un modelo de garantías, partiendo desde la privación de la libertad hasta la resolución del conflicto:"

explicacion: |
  Un proceso garantista debe seguir una secuencia lógica y legal donde cada etapa (desde la detención hasta la sentencia) respete el derecho de defensa y la legalidad.
```

### 10 — Análisis de medidas cautelares

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "avanzado"
  tags: ["medidas_cautelares", "prision_preventiva"]

variables:
  caso: uno_de([["El juez dicta prisión preventiva automática para todos los imputados sin analizar riesgos", "mano_dura"], ["El juez dicta prisión preventiva solo si hay riesgo real de fuga o entorpecimiento", "garantismo"]])

respuesta: caso[1]
tipo: "completar"
respuestas_validas:
  - caso[1]

enunciado: "En un caso donde {caso[0]}, estamos ante una política de tipo ___."

explicacion: |
  La aplicación de la prisión preventiva como una pena anticipada es característica de las políticas de 'mano dura', mientras que el uso de la excepcionalidad de la medida es propia del 'garantismo'.
```

### 11 — Garantismo vs Mano Dura: El enfoque principal

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "basico"
  tags: ["politica_criminal", "garantismo", "seguridad"]

tipo: mc
opciones_explicitas: ["Minimizar la impunidad mediante el aumento de penas y vigilancia", "Asegurar que el Estado respete las garantías procesales del imputado", "Eliminar la posibilidad de defensa técnica para agilizar juicios", "Priorizar la sensación de seguridad ciudadana sobre el debido proceso"]

respuesta: "Priorizar la sensación de seguridad ciudadana sobre el debido proceso"

enunciado: "El enfoque de la política criminal de 'mano dura' se caracteriza primordialmente por:"

explicacion: |
  La política de 'mano dura' prioriza la eficacia en la represión del delito y la seguridad ciudadana, a menudo mediante el endurecimiento de penas, por encima de los límites procesales, mientras que el garantismo busca proteger al individuo frente al poder punitivo del Estado.
```

### 12 — El rol de las garantías

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["garantismo", "derechos_humanos"]

tipo: vf
respuesta: falso

enunciado: "El garantismo penal implica que el Estado debe liberar a todos los acusados para evitar la impunidad."

explicacion: |
  Falso. El garantismo no busca la impunidad, sino asegurar que la aplicación de la ley penal se ajuste estrictamente a las reglas del debido proceso y los derechos fundamentales. El fin es la justicia, no la liberación sistemática.
```

### 13 — Componentes del Garantismo

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["procesal", "garantismo"]

respuesta: "debido proceso"
tipo: completar
respuestas_validas:
  - "debido proceso"

enunciado: "El garantismo penal se fundamenta en la protección de los derechos del imputado y la observancia estricta del ___."

explicacion: |
  El garantismo actúa como un límite al poder punitivo del Estado, asegurando que el proceso penal sea una herramienta de justicia y no de arbitrariedad, respetando los derechos fundamentales y las reglas de procedimiento.
```

### 14 — Secuencia de la respuesta procesal

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "avanzado"
  tags: ["procedimiento", "garantismo"]

tipo: ordenar
opciones_explicitas: ["Investigación con respeto a la presunción de inocencia", "Debido proceso y derecho de defensa", "Sentencia basada en pruebas lícitas", "Ejecución de la pena conforme a la ley"]

enunciado: "Ordene los pasos de un proceso penal bajo un modelo estrictamente garantista:"

explicacion: |
  Un modelo garantista asegura que cada etapa (investigación, defensa, prueba y ejecución) esté sujeta a controles de legalidad y respeto de los derechos humanos.
respuesta_orden: ["Investigación con respeto a la presunción de inocencia", "Debido proceso y derecho de defensa", "Sentencia basada en pruebas lícitas", "Ejecución de la pena conforme a la ley"]
```

### 15 — El dilema de la eficacia

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "derecho_penal"]

tipo: mc
opciones_explicitas: ["La seguridad ciudadana es un derecho absoluto que justifica cualquier medida", "El garantismo y la seguridad ciudadana son objetivos que deben equilibrarse dentro de la ley", "La política criminal debe centrarse únicamente en la prevención mediante el castigo", "El derecho penal debe ser puramente retributivo"]

respuesta: "El garantismo y la seguridad ciudadana son objetivos que deben equilibrarse dentro de la ley"

enunciado: "En el debate entre garantismo y mano dura, ¿cuál es la postura más equilibrada respecto a la política criminal?"

explicacion: |
  El debate suele centrarse en si la seguridad ciudadana es un valor que puede desplazar a las garantías individuales (visión de mano dura) o si la seguridad solo es legítima si se obtiene respetando el marco constitucional (visión garantista).
```

### 16 — Paradigmas de la política criminal

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["derecho_penal", "garantismo", "mano_dura"]

tipo: mc
opciones_explicitas: ["El garantismo busca minimizar el poder punitivo del Estado para proteger derechos fundamentales.", "La mano dura busca maximizar la respuesta punitiva para disuadir el delito.", "El garantismo se enfoca exclusivamente en la seguridad ciudadana.", "La mano dura prioriza el debido proceso sobre la eficacia de la condena."]

respuesta: "El garantismo busca minimizar el poder punitivo del Estado para proteger derechos fundamentales."

enunciado: "Al contrastar ambos modelos, ¿cuál es la premisa fundamental que distingue al garantismo de la política de mano dura?"

explicacion: |
  El garantismo penal se basa en la idea de que el proceso penal debe ser un conjunto de límites al poder punitivo del Estado para asegurar los derechos del imputado. La mano dura, en cambio, prioriza la eficacia de la persecución penal y el castigo como herramienta de seguridad.
```

### 17 — El rol del Estado en el proceso

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "basico"
  tags: ["estado", "derechos"]

tipo: vf

enunciado: "En un modelo de política criminal de 'mano dura', el objetivo principal es la protección de las garantías procesales del imputado por sobre la seguridad colectiva."

respuesta: falso

explicacion: |
  Falso. El modelo de mano dura prioriza la seguridad y la respuesta punitiva inmediata, a menudo relajando o acelerando procesos, mientras que el garantismo pone el foco en las garantías del acusado.
```

### 18 — Elementos del garantismo

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["garantismo", "principios"]

respuesta: "presunción de inocencia"
tipo: completar
respuestas_validas:
  - "presunción de inocencia"

enunciado: "Para que una política criminal sea considerada estrictamente garantista, debe asegurar el debido proceso y respetar la ___ como pilares del sistema penal."

explicacion: |
  El garantismo penal se sostiene sobre la idea de que el Estado debe respetar el debido proceso y la presunción de inocencia, limitando su capacidad de sanción a lo estrictamente necesario y legalmente establecido.
```

### 19 — Secuencia de prioridades

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["orden", "prioridades"]

tipo: ordenar
opciones_explicitas: ["Garantía de derechos individuales", "Control de la legalidad de la prueba", "Aplicación de la pena"]

enunciado: "Ordene los pasos de un proceso penal bajo un enfoque estrictamente garantista, desde la etapa de instrucción hasta la sentencia:"

respuesta_orden: ["Garantía de derechos individuales", "Control de la legalidad de la prueba", "Aplicación de la pena"]

explicacion: |
  En el garantismo, el orden lógico y jurídico exige primero asegurar los derechos del imputado, luego validar que la prueba sea legal y, solo tras cumplir todo el proceso, aplicar la pena.
```

### 20 — Enfoque de la política criminal

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "avanzado"
  tags: ["seguridad", "derechos_fundamentales"]

variables:
  escenario: uno_de([["Enfoque en la prevención mediante el control social y la sanción severa", "mano dura"], ["Enfoque en la limitación del poder punitivo y el respeto a la norma", "garantismo"]])

tipo: mc
opciones_explicitas: ["mano dura", "garantismo"]

enunciado: "Identifique el modelo descrito: {escenario[0]}"

respuesta: escenario[1]

explicacion: |
  El modelo de mano dura se centra en la respuesta punitiva y la seguridad como respuesta al fenómeno criminal, mientras que el garantismo se centra en la legalidad y los límites al Estado.
```

### 21 — Enfoque de la política criminal

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["derecho_penal", "politica_criminal"]

variables:
  escenario: uno_de([["Un aumento en la tasa de robos en un barrio requiere aumentar las penas mínimas y la presencia policial agresiva.", "mano_dura"], ["Un aumento en la tasa de robos en un barrio requiere fortalecer el debido proceso y la revisión de las condiciones de detención.", "garantismo"]])

enunciado: "Ante un aumento de la criminalidad, la siguiente medida: '{escenario[0]}' se define como una política de ___."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["garantismo", "mano_dura"]

explicacion: |
  La política de 'mano dura' se caracteriza por el endurecimiento de las penas y la priorización de la seguridad colectiva, mientras que el 'garantismo' busca proteger los derechos fundamentales del imputado frente al poder punitivo del Estado.
```

### 22 — El rol del garantismo

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "basico"
  tags: ["derechos_humanos", "garantismo"]

respuesta: verdadero
tipo: vf

enunciado: "El garantismo penal sostiene que el proceso judicial debe servir como un límite al poder punitivo del Estado para proteger los derechos del acusado."

explicacion: |
  Correcto. El garantismo ve al proceso penal como un conjunto de garantías que protegen al individuo de posibles arbitrariedades estatales.
```

### 23 — Elementos de la política de mano dura

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "populismo_penal"]

variables:
  caso: uno_de([["La implementación de leyes de detención preventiva automática para reducir la sensación de inseguridad.", "mano_dura"], ["La creación de defensorías públicas para asegurar que todo procesado tenga asistencia legal técnica.", "garantismo"]])

enunciado: "La estrategia de {caso[0]} es un ejemplo característico de una política de tipo ___________."

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - caso[1]

explicacion: |
  Las medidas que buscan la eficacia punitiva inmediata suelen asociarse al modelo de mano dura.
```

### 24 — Orden de prioridades en el proceso

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "avanzado"
  tags: ["proceso_penal", "garantismo"]

respuesta_orden: ["Presunción de inocencia", "Derecho a la defensa", "Debido proceso", "Principio de legalidad"]
tipo: ordenar

opciones_explicitas: ["Presunción de inocencia", "Derecho a la defensa", "Debido proceso", "Principio de legalidad"]

enunciado: "Ordene los principios garantistas desde el que actúa como base fundamental en la etapa de investigación hasta el que rige la aplicación de la ley:"

explicacion: |
  El orden lógico parte de la presunción de inocencia, sigue con la defensa técnica, el debido proceso como conjunto de reglas y la legalidad como marco normativo.
```

### 25 — Análisis de medidas punitivas

```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "derecho_penal"]

variables:
  medida: uno_de([["Aumentar el número de cárceles y reducir beneficios carcelarios para disuadir el delito.", "mano_dura"], ["Limitar el uso de la prisión preventiva para evitar el hacinamiento y la criminalización de la pobreza.", "garantismo"]])

enunciado: "La medida consistente en {medida[0]} es un ejemplo de política de ___________."

respuesta: medida[1]
tipo: mc
opciones_explicitas: ["garantismo", "mano_dura"]

explicacion: |
  La política de mano dura suele enfocarse en la retribución y la disuasión mediante el endurecimiento del sistema carcelario.
```
