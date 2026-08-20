### 1 — Identificación vs. Síntoma
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["diagnostico", "analisis"]

tipo: mc
opciones_explicitas: ["El síntoma es la causa raíz del problema", "El síntoma es la manifestación visible de un problema subyacente", "El síntoma y el problema son términos sinónimos", "El síntoma es la solución propuesta para el problema"]

enunciado: "En el proceso de resolución de problemas, la distinción fundamental entre un síntoma y el problema real es que el ___ es solo una señal de que algo anda mal, mientras que el problema es la causa que lo origina."

respuesta: "El síntoma es la manifestación visible de un problema subyacente"

explicacion: |
  Confundir un síntoma con el problema real lleva a aplicar soluciones temporales que no atacan la raíz del conflicto.
```

### 2 — Problema vs. Solución
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["enfoque", "pensamiento_critico"]

tipo: vf
respuesta: falso

enunciado: "Si una persona salta directamente a proponer una solución sin haber definido con precisión el problema, se ha cumplido correctamente la etapa de detección del problema."

explicacion: |
  Saltar a la solución sin definir el problema es un error común que conduce a resolver el problema equivocado.
```

### 3 — Problema vs. Desafío
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["terminologia", "contexto"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un obstáculo que impide alcanzar un objetivo específico", "Una situación que requiere esfuerzo pero no implica una falla"],
    ["Una situación de oportunidad para mejorar un proceso", "Una dificultad que bloquea el flujo de trabajo"]
  ]
  respuestas: [
    "problema",
    "desafío"
  ]

tipo: mc
opciones_explicitas: ["problema", "desafío"]

enunciado: "Considerando el escenario: '{escenarios[escenario_idx][0]}', estamos ante un ___."

respuesta: "problema"

explicacion: |
  Un problema implica una desviación de un estado deseado, mientras que un desafío es una meta que requiere superación pero no necesariamente parte de una falla previa.
```

### 4 — Etapas de la Detección
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Observar el síntoma", "Analizar la causa raíz", "Definir el problema real"]

respuesta: ["Observar el síntoma", "Analizar la causa raíz", "Definir el problema real"]

enunciado: "Ordena los pasos lógicos para pasar de la percepción de una anomalía a la identificación precisa del problema:"

explicacion: |
  Primero se detecta la señal (síntoma), luego se investiga el origen (causa) y finalmente se formaliza la definición del problema.
```

### 5 — El problema real
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "avanzado"
  tags: ["analisis", "profundidad"]

tipo: completar
respuestas_validas: ["causa", "raíz", "origen"]
respuesta: "causa"

enunciado: "Para evitar la recurrencia de un error, el objetivo de la detección no es solo notar que algo falló, sino identificar la ___ que lo produjo."

explicacion: |
  Si no se identifica la causa, la solución será solo un 'parche' que no evitará que el problema vuelva a aparecer.
```