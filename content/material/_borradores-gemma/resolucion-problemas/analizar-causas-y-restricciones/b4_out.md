### 1 — Diferencia entre Causa y Síntoma
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["diagnostico", "causa_raiz"]

respuesta: "causa"
tipo: "completar"
respuestas_validas: ["causa", "causa raíz"]

enunciado: "En el análisis de problemas, mientras que un síntoma es la manifestación visible del error, la ___ es el origen real que lo produce."

explicacion: |
  Confundir un síntoma con la causa es uno de los errores más comunes. Si solo tratas el síntoma (ej. limpiar un derrame de aceite), el problema persistirá porque no atacaste la causa (ej. una junta rota).
```

### 2 — Restricciones vs. Limitaciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["restricciones", "limitaciones"]

variables:
  escenario: uno_de([
    ["un presupuesto de $1000", "presupuesto"],
    ["un plazo de 24 horas", "tiempo"],
    ["una ley de seguridad", "normativa"]
  ])

opciones_explicitas: ["Una limitación es un obstáculo externo que impide el éxito", "Una restricción es un parámetro obligatorio que define el espacio de solución", "Ambos términos son sinónimos en la gestión de proyectos", "Las restricciones son opcionales y las limitaciones son obligatorias"]

respuesta: escenario[0][1]
tipo: "mc"

enunciado: "Si estamos diseñando un motor y debemos cumplir con una norma de emisiones de gases, estamos operando bajo una: {escenario[0][0]}."

explicacion: |
  Las restricciones son condiciones impuestas que el diseño DEBE satisfacer (hard constraints), mientras que las limitaciones suelen ser factores que restringen la libertad de acción pero no necesariamente invalidan la solución si se gestionan.
```

### 3 — Identificación de Causa Raíz
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["causa_raiz", "verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es verdadero o falso que, en un análisis de causa raíz, si una solución elimina el síntoma pero el problema vuelve a aparecer, significa que no se ha identificado la causa raíz?"

explicacion: |
  Verdadero. Si el problema reaparece, significa que solo se trató una consecuencia o síntoma, y la causa subyacente permanece activa.
```

### 4 — Jerarquía de Análisis de Problemas
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "avanzado"
  tags: ["metodologia", "ordenar"]

opciones_explicitas: ["Identificar el síntoma", "Analizar las restricciones del entorno", "Determinar la causa raíz", "Implementar la solución definitiva"]

respuesta: ["Identificar el síntoma", "Analizar las restricciones del entorno", "Determinar la causa raíz", "Implementar la solución definitiva"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para un proceso de resolución de problemas efectivo, desde el primer contacto con la anomalía hasta la resolución:"

explicacion: |
  Un proceso lógico requiere primero reconocer que algo anda mal (síntoma), entender qué límites tenemos para actuar (restricciones), encontrar el origen (causa raíz) y finalmente actuar.
```

### 5 — Impacto de las Restricciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["restricciones", "optimizacion"]

variables:
  caso: uno_de([
    ["El presupuesto es de $500", "costo"],
    ["La entrega es mañana", "tiempo"],
    ["Solo se puede usar madera", "material"]
  ])

opciones_explicitas: ["Las restricciones reducen la calidad de la solución", "Las restricciones definen el conjunto de soluciones posibles", "Las restricciones son causas del problema", "Las restricciones son síntomas del problema"]

respuesta: caso[0][1]
tipo: "mc"

enunciado: "Al analizar un problema, si nos enfrentamos a un límite de {caso[0][0]}, estamos ante una restricción de tipo {caso[0][1]}. ¿Cuál es la función principal de estas en el proceso de diseño?"

explicacion: |
  Las restricciones no son necesariamente "malas"; su función es delimitar el espacio de búsqueda para que las soluciones propuestas sean realistas y aplicables al contexto.
```