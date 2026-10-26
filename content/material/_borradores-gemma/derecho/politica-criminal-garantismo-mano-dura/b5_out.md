### 1 — Enfoque de la política criminal
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["derecho_penal", "politica_criminal"]

variables:
  escenario: uno_de([
    ["Un aumento en la tasa de robos en un barrio requiere aumentar las penas mínimas y la presencia policial agresiva.", "mano_dura"],
    ["Un aumento en la tasa de robos en un barrio requiere fortalecer el debido proceso y la revisión de las condiciones de detención.", "garantismo"]
  ])
  idx: uno_de([0, 1])

enunciado: "Ante un aumento de la criminalidad, la aplicación de medidas que priorizan la seguridad pública y el castigo severo por sobre las garantías procesales se define como una política de {escenario[idx][0]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["garantismo", "mano_dura"]

explicacion: |
  La política de 'mano dura' se caracteriza por el endurecimiento de las penas y la priorización de la seguridad colectiva, mientras que el 'garantismo' busca proteger los derechos fundamentales del imputado frente al poder punitivo del Estado.
```

### 2 — El rol del garantismo
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

### 3 — Elementos de la política de mano dura
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "populismo_penal"]

variables:
  caso: uno_de([
    ["La implementación de leyes de detención preventiva automática para reducir la sensación de inseguridad.", "mano_dura"],
    ["La creación de defensorías públicas para asegurar que todo procesado tenga asistencia legal técnica.", "garantismo"]
  ])
  idx: uno_de([0, 1])

enunciado: "La estrategia de {caso[idx][0]} es un ejemplo característico de una política de tipo ___________."

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["garantismo", "mano_dura"]

explicacion: |
  Las medidas que buscan la eficacia punitiva inmediata suelen asociarse al modelo de mano dura.
```

### 4 — Orden de prioridades en el proceso
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "avanzado"
  tags: ["proceso_penal", "garantismo"]

respuesta: ["Presunción de inocencia", "Derecho a la defensa", "Debido proceso", "Principio de legalidad"]
tipo: ordenar

opciones_explicitas: ["Presunción de inocencia", "Derecho a la defensa", "Debido proceso", "Principio de legalidad"]

enunciado: "Ordene los principios garantistas desde el que actúa como base fundamental en la etapa de investigación hasta el que rige la aplicación de la ley:"

explicacion: |
  El orden lógico parte de la presunción de inocencia, sigue con la defensa técnica, el debido proceso como conjunto de reglas y la legalidad como marco normativo.
```

### 5 — Análisis de medidas punitivas
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "derecho_penal"]

variables:
  medida: uno_de([
    ["Aumentar el número de cárceles y reducir beneficios carcelarios para disuadir el delito.", "mano_dura"],
    ["Limitar el uso de la prisión preventiva para evitar el hacinamiento y la criminalización de la pobreza.", "garantismo"]
  ])
  idx: uno_de([0, 1])

enunciado: "La medida consistente en {medida[idx][0]} es un ejemplo de política de ___________."

respuesta: medida[idx][1]
tipo: mc
opciones_explicitas: ["garantismo", "mano_dura"]

explicacion: |
  La política de mano dura suele enfocarse en la retribución y la disuasión mediante el endurecimiento del sistema carcelario.
```