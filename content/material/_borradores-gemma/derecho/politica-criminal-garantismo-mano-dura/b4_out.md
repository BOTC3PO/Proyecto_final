### 1 — Paradigmas de la política criminal
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["derecho_penal", "garantismo", "mano_dura"]

tipo: mc
opciones_explicitas: ["El garantismo busca minimizar el poder punitivo del Estado para proteger derechos fundamentales.", "La mano dura busca maximizar la respuesta punitiva para disuadir el delito.", "El garantismo se enfoca exclusivamente en la seguridad ciudadana.", "La mano dura prioriza el debido proceso sobre la eficacia de la condena."]

enunciado: "Al contrastar ambos modelos, ¿cuál es la premisa fundamental que distingue al garantismo de la política de mano dura?"

explicacion: |
  El garantismo penal se basa en la idea de que el proceso penal debe ser un conjunto de límites al poder punitivo del Estado para asegurar los derechos del imputado. La mano dura, en cambio, prioriza la eficacia de la persecución penal y el castigo como herramienta de seguridad.
```

### 2 — El rol del Estado en el proceso
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

### 3 — Elementos del garantismo
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["garantismo", "principios"]

tipo: completar
respuestas_validas: ["debido proceso", "presunción de inocencia"]

enunciado: "Para que una política criminal sea considerada estrictamente garantista, debe asegurar el ___ y respetar la ___ como pilares del sistema penal."

explicacion: |
  El garantismo penal se sostiene sobre la idea de que el Estado debe respetar el debido proceso y la presunción de inocencia, limitando su capacidad de sanción a lo estrictamente necesario y legalmente establecido.
```

### 4 — Secuencia de prioridades
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["orden", "prioridades"]

tipo: ordenar
opciones_explicitas: ["Garantía de derechos individuales", "Control de la legalidad de la prueba", "Aplicación de la pena"]

enunciado: "Ordene los pasos de un proceso penal bajo un enfoque estrictamente garantista, desde la etapa de instrucción hasta la sentencia:"

respuesta: ["Garantía de derechos individuales", "Control de la legalidad de la prueba", "Aplicación de la pena"]

explicacion: |
  En el garantismo, el orden lógico y jurídico exige primero asegurar los derechos del imputado, luego validar que la prueba sea legal y, solo tras cumplir todo el proceso, aplicar la pena.
```

### 5 — Enfoque de la política criminal
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "avanzado"
  tags: ["seguridad", "derechos_fundamentales"]

variables:
  escenario: uno_de([
    ["Enfoque en la prevención mediante el control social y la sanción severa", "mano dura"],
    ["Enfoque en la limitación del poder punitivo y el respeto a la norma", "garantismo"]
  ])

tipo: mc
opciones_explicitas: ["mano dura", "garantismo"]

enunciado: "Identifique el modelo descrito: {escenario[0]}"

respuesta: {escenario[1]}

explicacion: |
  El modelo de mano dura se centra en la respuesta punitiva y la seguridad como respuesta al fenómeno criminal, mientras que el garantismo se centra en la legalidad y los límites al Estado.
```