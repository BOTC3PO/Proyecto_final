### 1 — Enfoque de la política criminal
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

### 2 — El dilema de la seguridad pública
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "intermedio"
  tags: ["seguridad", "castigo", "mano_dura"]

variables:
  escenario: uno_de([
    ["Aumento de la criminalidad", "mano_dura"],
    ["Inseguridad ciudadana", "mano_dura"],
    ["Crisis de delincuencia", "mano_dura"]
  ])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["garantismo", "mano_dura"]

enunciado: "Ante el escenario de {escenario[0]}, una política criminal de tipo {escenario[1]} suele proponer el endurecimiento de las penas y la expansión de la vigilancia policial para restaurar el orden."

explicacion: |
  La política de "mano dura" responde a la percepción de inseguridad mediante el incremento de la severidad penal, priorizando la prevención general a través del castigo.
```

### 3 — Veracidad de principios
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

### 4 — El proceso de una investigación
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

respuesta: ["Detención", "Imputación", "Juicio Oral", "Sentencia"]
tipo: "ordenar"
opciones_explicitas: ["Detención", "Imputación", "Juicio Oral", "Sentencia"]

enunciado: "Ordene las etapas de un proceso penal bajo un modelo de garantías, partiendo desde la privación de la libertad hasta la resolución del conflicto:"

explicacion: |
  Un proceso garantista debe seguir una secuencia lógica y legal donde cada etapa (desde la detención hasta la sentencia) respete el derecho de defensa y la legalidad.
```

### 5 — Análisis de medidas cautelares
```
metadata:
  materia: "derecho"
  tema: "politica_criminal_garantismo_vs_mano_dura"
  nivel: "avanzado"
  tags: ["medidas_cautelares", "prision_preventiva"]

variables:
  caso: uno_de([
    ["El juez dicta prisión preventiva automática para todos los imputados sin analizar riesgos", "mano_dura"],
    ["El juez dicta prisión preventiva solo si hay riesgo real de fuga o entorpecimiento", "garantismo"]
  ])

respuesta: caso[1]
tipo: "completar"
respuestas_validas: ["mano_dura", "garantismo"]

enunciado: "En un caso donde {caso[0]}, estamos ante una política de tipo ___."

explicacion: |
  La aplicación de la prisión preventiva como una pena anticipada es característica de las políticas de 'mano dura', mientras que el uso de la excepcionalidad de la medida es propia del 'garantismo'.
```