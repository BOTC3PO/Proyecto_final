# Resolucion Problemas — Identificar alternativas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de alternativas

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "alternativas"
tipo: completar
respuestas_validas:
  - "alternativas"

enunciado: "El proceso de identificar diferentes caminos, opciones o soluciones posibles para abordar un problema se denomina identificación de ___."

explicacion: |
  Identificar alternativas es el paso fundamental donde reconocemos que no existe un único camino para resolver una situación, permitiéndonos elegir el más eficiente.
```

### 2 — Verdad o Falso: Unicidad de soluciones

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["conceptos", "logica"]

respuesta: falso
tipo: vf

enunciado: "En la resolución de problemas, la existencia de una única solución posible es la regla general para la mayoría de los desafíos complejos."

explicacion: |
  Falso. El núcleo de la resolución de problemas es precisamente reconocer que casi siempre existen múltiples caminos o alternativas para llegar a un objetivo.
```

### 3 — El concepto de divergencia

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["pensamiento-divergente", "creatividad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un problema matemático con una sola respuesta numérica", "una estrategia de marketing para aumentar ventas"], ["un acertijo de lógica con una única solución", "un conflicto interpersonal en un equipo de trabajo"]]

respuesta: "pensamiento divergente"
tipo: mc
opciones_explicitas: ["pensamiento divergente", "pensamiento convergente"]

enunciado: "Cuando nos enfocamos en generar la mayor cantidad posible de opciones distintas para el escenario '{escenarios[escenario_idx][1]}', estamos utilizando el tipo de pensamiento conocido como:"

explicacion: |
  El pensamiento divergente es la capacidad de generar múltiples soluciones creativas, mientras que el convergente busca la única respuesta correcta o la más lógica.
```

### 4 — Pasos para la identificación

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

respuesta_orden: ["Analizar el problema", "Lluvia de ideas", "Evaluar opciones"]
tipo: ordenar
opciones_explicitas: ["Analizar el problema", "Lluvia de ideas", "Evaluar opciones"]

enunciado: "Ordene los pasos lógicos para un proceso efectivo de búsqueda de alternativas:"

explicacion: |
  Primero se debe entender el problema (Analizar), luego generar múltiples caminos (Lluvia de ideas) y finalmente comparar los resultados posibles (Evaluar).
```

### 5 — Obstáculos en la identificación

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "avanzado"
  tags: ["sesgos", "cognicion"]

respuesta: "sesgo de anclaje"
tipo: mc
opciones_explicitas: ["sesgo de anclaje", "sesgo de confirmación", "efecto halo"]

enunciado: "Cuando una persona se queda atrapada en la primera solución que se le ocurre, ignorando otras opciones más efectivas, está siendo víctima del ___."

explicacion: |
  El sesgo de anclaje ocurre cuando nos aferramos demasiado a la primera información o solución recibida, limitando nuestra capacidad de ver alternativas.
```

### 6 — El dilema del transporte

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "basico"
  tags: ["toma_de_decisiones", "alternativas"]

variables:
  escenario: uno_de([["Viajar en tren", "Es más lento pero puedes leer", "Es más barato"], ["Viajar en avión", "Es más rápido pero más caro", "Es más cómodo"], ["Viajar en auto", "Es flexible pero requiere conducir", "Es más costoso por el combustible"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Es más lento pero puedes leer", "Es más rápido pero más caro", "Es flexible pero requiere conducir"]

enunciado: "Un estudiante necesita viajar de una ciudad a otra. Si elige la opción de '{escenario[0]}', la principal ventaja según el escenario es: ___"

explicacion: |
  Identificar alternativas implica evaluar las ventajas y desventajas de cada camino. En este caso, cada opción tiene un beneficio distinto (tiempo, costo o comodidad).
```

### 7 — El camino de la optimización

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "intermedio"
  tags: ["analisis", "estrategia"]

variables:
  problema: uno_de([["comprar_todo_reunido", "Ahorras tiempo pero pagas más"], ["comprar_por_partes", "Ahorras dinero pero pierdes tiempo"], ["esperar_ofertas", "Ahorras mucho pero no tienes el producto ahora"]])

respuesta: problema[1]
tipo: completar

enunciado: "Para resolver un problema de presupuesto, se presentan tres alternativas. Si se decide '{problema[0]}', la consecuencia directa es: ___"

explicacion: |
  Reconocer que una decisión implica un 'trade-off' (intercambio). Al elegir una alternativa, estás renunciando a los beneficios de las otras.
```

### 8 — Prioridades de estudio

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "basico"
  tags: ["gestion_tiempo", "priorizacion"]

respuesta: falso
tipo: vf

enunciado: "Ante un examen difícil, la única forma de aprobar es estudiando 10 horas seguidas sin descanso."

explicacion: |
  Falso. Existen múltiples alternativas: estudiar en bloques con descansos, estudiar con un tutor, o enfocarse en los temas más importantes primero. La existencia de alternativas es clave para la resolución de problemas.
```

### 9 — Pasos para elegir una solución

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

variables:
  pasos_orden: ["Identificar el problema", "Generar múltiples alternativas", "Evaluar cada alternativa", "Elegir la mejor opción"]

respuesta_orden: pasos_orden
tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Generar múltiples alternativas", "Evaluar cada alternativa", "Elegir la mejor opción"]

enunciado: "Para resolver un problema de manera efectiva, se debe seguir un proceso lógico. Ordena las etapas de la metodología de resolución de problemas:"

explicacion: |
  El paso crítico para evitar la 'visión de túnel' es el segundo paso: generar múltiples alternativas antes de evaluar.
```

### 10 — Evaluación de costos

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "avanzado"
  tags: ["analisis_costo", "decision"]

respuesta: "Opción A"
tipo: mc
opciones_explicitas: ["Opción A", "Opción B", "Opción C"]

enunciado: "Tienes un presupuesto de 120 unidades. Las alternativas disponibles cuestan: Opción A = 100, Opción B = 150, Opción C = 200. Si debes elegir la alternativa más económica que se ajuste a tu presupuesto, ¿cuál elegirías?"

explicacion: |
  Al identificar alternativas, también debemos filtrar aquellas que no cumplen con nuestras restricciones (en este caso, el presupuesto). La Opción A es la más barata, pero si el problema exigiera la opción que más se acerca al límite sin pasarse, la respuesta cambiaría.
```

### 11 — El mito de la única solución

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "basico"
  tags: ["sesgos", "toma_de_decisiones"]

respuesta: falso
tipo: vf

enunciado: "Ante un problema complejo, la primera solución que aparece en la mente es necesariamente la única vía válida para resolverlo."

explicacion: |
  El pensamiento divergente es clave. La primera idea suele ser un sesgo de disponibilidad; reconocer que existen múltiples caminos es el primer paso para una resolución efectiva.
```

### 12 — Selección de rutas

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "intermedio"
  tags: ["estrategia", "analisis"]

variables:
  escenario: uno_de([["Camino A (Rápido pero costoso)", "Camino B (Lento pero económico)"], ["Opción 1 (Tecnológica)", "Opción 2 (Manual)"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Camino A (Rápido pero costoso)", "Camino B (Lento pero económico)", "Opción 1 (Tecnológica)", "Opción 2 (Manual)", "No hay otra opción"]

enunciado: "Si el objetivo principal es minimizar el gasto de recursos y el tiempo no es una restricción crítica, ¿cuál de las alternativas presentadas en el escenario es la más adecuada?"

pasos:
  - "Analizar el objetivo: minimizar gasto."
  - "Evaluar el escenario: comparar costo vs tiempo."

explicacion: |
  Identificar alternativas requiere alinear la opción elegida con el objetivo prioritario. En este caso, el ahorro de recursos invalida la opción rápida pero costosa.
```

### 13 — El proceso de diversificación

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "basico"
  tags: ["metodologia"]

respuesta_orden: ["Definir el problema", "Generar múltiples alternativas", "Evaluar opciones", "Elegir la mejor"]
tipo: ordenar

opciones_explicitas: ["Definir el problema", "Generar múltiples alternativas", "Evaluar opciones", "Elegir la mejor"]

enunciado: "Ordena los pasos lógicos para asegurar que no se esté ignorando ninguna alternativa posible durante la resolución de un conflicto."

explicacion: |
  Si saltas directamente a 'Elegir la mejor' sin haber pasado por 'Generar múltiples alternativas', estás limitando tu capacidad de resolución y cayendo en una solución prematura.
```

### 14 — La trampa de la dicotomía

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "intermedio"
  tags: ["sesgos", "pensamiento_critico"]

respuesta: "tercera_via"
tipo: completar

opciones_explicitas: ["primera_via", "segunda_via", "tercera_via"]

enunciado: "Cuando un problema se presenta como una elección entre 'A' o 'B', pero la resolución óptima requiere integrar elementos de ambos o buscar una opción 'C', estamos ignorando la ___."

explicacion: |
  La falsa dicotomía es un error cognitivo donde se asume que solo existen dos opciones. El pensamiento creativo busca la 'tercera vía' o alternativas híbridas.
```

### 15 — Evaluación de impacto

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "avanzado"
  tags: ["analisis_riesgo", "decision"]

variables:
  caso: uno_de([["Alternativa A", "Alternativa B"], ["Plan de contingencia 1", "Plan de contingencia 2"]])

respuesta: "alternativa_con_mas_riesgo"
tipo: mc
opciones_explicitas: ["alternativa_con_mas_riesgo", "alternativa_sin_riesgo", "no_es_una_alternativa"]

enunciado: "Al comparar {caso[0]} con {caso[1]}, si detectamos que una de ellas presenta una probabilidad de falla mayor pero un beneficio superior, ¿cómo debemos clasificarla en nuestro análisis de alternativas?"

explicacion: |
  Identificar alternativas no es solo listarlas, es entender su naturaleza. Reconocer el riesgo es parte esencial de la evaluación de la gama de opciones disponibles.
```

### 16 — Diferencia entre decisión y opción

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["conceptos", "decision"]

respuesta: "opcion"
tipo: "mc"
opciones_explicitas: ["decision", "opcion", "resultado", "problema"]

enunciado: "En el proceso de resolución de problemas, la elección entre varios caminos posibles se denomina decisión, mientras que cada uno de esos caminos individuales se conoce como una ___."

explicacion: |
  Una decisión es el acto de elegir, mientras que las opciones son los elementos o alternativas que se ponen sobre la mesa para ser evaluadas.
```

### 17 — El mito de la solución única

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["pensamiento-critico"]

respuesta: falso
tipo: "vf"

enunciado: "Ante un problema complejo, existe siempre una única solución óptima y directa, por lo que buscar alternativas es una pérdida de tiempo."

explicacion: |
  Falso. La identificación de alternativas es crucial porque permite evaluar diferentes rutas, costos y riesgos, reconociendo que rara vez hay un único camino hacia el objetivo.
```

### 18 — Secuencia de la identificación de alternativas

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Definir el problema", "Generar alternativas", "Evaluar opciones", "Elegir la mejor"]

respuesta_orden: ["Definir el problema", "Generar alternativas", "Evaluar opciones", "Elegir la mejor"]
tipo: "ordenar"

enunciado: "Ordene los pasos lógicos para abordar un problema desde la comprensión inicial hasta la acción:"

explicacion: |
  No se pueden evaluar opciones si primero no se han generado alternativas, y no se pueden generar alternativas si el problema no está claramente definido.
```

### 19 — Análisis de impacto de alternativas

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["evaluacion"]

tipo: "completar"
respuesta: "alta"

enunciado: "Si una alternativa tiene un riesgo muy elevado pero un beneficio muy alto, se dice que su relación riesgo-beneficio es de escala ___."

explicacion: |
  El análisis de alternativas busca cuantificar o cualificar el impacto de cada camino para tomar una decisión informada.
```

### 20 — Distinción entre alternativa y consecuencia

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "avanzado"
  tags: ["logica"]

respuesta: "consecuencia"
tipo: "mc"
opciones_explicitas: ["consecuencia", "alternativa", "recurso", "obstáculo"]

enunciado: "Es fundamental no confundir una alternativa (un camino a seguir) con una ___ (el resultado derivado de elegir dicho camino)."

explicacion: |
  Identificar correctamente las alternativas implica ver los medios para llegar a un fin; las consecuencias son los efectos que esos medios producen.
```

### 21 — El dilema del transporte

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["decision", "alternativas"]

respuesta: "viajar en avión"
tipo: mc
opciones_explicitas: ["viajar en bus", "viajar en tren", "viajar en avión", "quedarse en casa"]

enunciado: "Para ir de una ciudad a otra, tienes el factor tiempo y el factor costo. Si decides que el factor costo es la prioridad absoluta, podrías elegir viajar en tren (más barato pero lento). ¿Cuál sería la otra alternativa lógica si en cambio decidieras optimizar el tiempo?"

explicacion: |
  En la resolución de problemas, identificar alternativas implica reconocer que si cambias la prioridad (de costo a tiempo), el camino elegido cambia: el avión prioriza la velocidad sobre el costo.
```

### 22 — Gestión de proyectos

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["gestion", "estrategia"]

variables:
  casos: [["contratar más personal", "comprar maquinaria"], ["reducir el horario", "subcontratar"]]
  idx: uno_de([0, 1])
  problema: casos[idx][0]

respuesta: verdadero
tipo: vf

enunciado: "Ante un aumento inesperado en la demanda de producción, la empresa enfrenta el problema de: {problema}. ¿Es correcto afirmar que existen múltiples caminos para resolver este cuello de botella (como la subcontratación o la inversión en tecnología) en lugar de una única solución obligatoria?"

explicacion: |
  La flexibilidad estratégica permite que ante un mismo problema existan diversos caminos dependiendo de los recursos disponibles.
```

### 23 — El camino del estudiante

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["aprendizaje", "metodologia"]

respuesta_orden: ["leer el libro", "hacer ejercicios", "ver un video"]
tipo: ordenar

opciones_explicitas: ["leer el libro", "ver un video", "hacer ejercicios"]

enunciado: "Un estudiante decide estudiar para un examen. Para asegurar un aprendizaje integral, debe organizar un plan que incluya la teoría, la práctica y el refuerzo visual. Ordena estas tres alternativas de estudio para crear un método completo:"

explicacion: |
  Identificar alternativas permite pasar de una acción aislada a un proceso estructurado de resolución de problemas.
```

### 24 — Optimización de rutas

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["logistica", "decision"]

variables:
  ruta_actual: "Ruta A (más corta)"
  alternativa: "Ruta B (más rápida)"

respuesta: "Ruta B (más rápida)"
tipo: completar
respuestas_validas:
  - "Ruta B (más rápida)"

enunciado: "Un repartidor debe entregar un paquete. Si elige la {ruta_actual}, está optimizando la distancia. Si su objetivo cambia a optimizar el tiempo de entrega, la alternativa sería la ___."

explicacion: |
  Reconocer que el cambio de un objetivo (distancia vs tiempo) genera automáticamente una nueva lista de alternativas posibles.
```

### 25 — Presupuesto de emergencia

```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "avanzado"
  tags: ["finanzas", "decision"]

respuesta: "usar ahorros"
tipo: mc
opciones_explicitas: ["pedir un préstamo", "usar ahorros", "vender un activo"]

enunciado: "Tienes una deuda urgente. Si decides que la prioridad es no generar intereses, tu primera opción sería: vender un activo (ya que un préstamo sí generaría intereses). Si en cambio la prioridad es mantener liquidez inmediata sin desprenderte de bienes, ¿cuál sería la alternativa más coherente?"

explicacion: |
  La identificación de alternativas depende directamente de la jerarquía de valores o prioridades que se le asigne al problema.
```
