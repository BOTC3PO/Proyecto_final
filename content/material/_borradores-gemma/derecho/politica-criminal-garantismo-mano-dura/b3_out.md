### 1 — Garantismo vs Mano Dura: El enfoque principal
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "basico"
  tags: ["politica_criminal", "garantismo", "seguridad"]

tipo: mc
opciones_explicitas: ["Minimizar la impunidad mediante el aumento de penas y vigilancia", "Asegurar que el Estado respete las garantías procesales del imputado", "Eliminar la posibilidad de defensa técnica para agilizar juicios", "Priorizar la sensación de seguridad ciudadana sobre el debido proceso"]

enunciado: "El enfoque de la política criminal de 'mano dura' se caracteriza primordialmente por:"

explicacion: |
  La política de 'mano dura' prioriza la eficacia en la represión del delito y la seguridad ciudadana, a menudo mediante el endurecimiento de penas, por encima de los límites procesales, mientras que el garantismo busca proteger al individuo frente al poder punitivo del Estado.
```

### 2 — El rol de las garantías
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

### 3 — Componentes del Garantismo
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["procesal", "garantismo"]

tipo: completar
respuestas_validas: ["derecho", "debido proceso"]

enunciado: "El garantismo penal se fundamenta en la protección de los ___ del imputado y la observancia estricta del ___."

explicacion: |
  El garantismo actúa como un límite al poder punitivo del Estado, asegurando que el proceso penal sea una herramienta de justicia y no de arbitrariedad, respetando los derechos fundamentales y las reglas de procedimiento.
```

### 4 — Secuencia de la respuesta procesal
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
```

### 5 — El dilema de la eficacia
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "derecho_penal"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El aumento de la población carcelaria es una medida de seguridad", "La restricción de derechos es un medio para la paz social"], ["El garantismo es un obstáculo para la justicia", "La mano dura es la respuesta a la crisis de seguridad"]]

tipo: mc
opciones_explicitas: ["La seguridad ciudadana es un derecho absoluto que justifica cualquier medida", "El garantismo y la seguridad ciudadana son objetivos que deben equilibrarse dentro de la ley", "La política criminal debe centrarse únicamente en la prevención mediante el castigo", "El derecho penal debe ser puramente retributivo"]

enunciado: "Ante la crisis de inseguridad, una visión de 'mano dura' suele argumentar que: {datos[escenario_idx][0]}"

explicacion: |
  El debate suele centrarse en si la seguridad ciudadana es un valor que puede desplazar a las garantías individuales (visión de mano dura) o si la seguridad solo es legítima si se obtiene respetando el marco constitucional (visión garantista).
```