# Economia — Mejora continua (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Mejora Continua

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "incremental"
tipo: completar
respuestas_validas:
  - "incremental"
  - "progresiva"
  - "constante"

enunciado: "La mejora continua se basa en la idea de optimizar procesos de forma constante e __________, en lugar de buscar cambios drásticos y únicos."

explicacion: |
  La mejora continua (Kaizen) se enfoca en pequeños cambios constantes (incrementales) que, sumados en el tiempo, generan grandes transformaciones.
```

### 2 — Filosofía Kaizen

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["kaizen", "filosofia"]

variables:
  es_kaizen: verdadero

respuesta: verdadero
tipo: vf
enunciado: "El término japonés 'Kaizen' se traduce comúnmente como 'cambio para mejor' y es el pilar fundamental de la mejora continua."

explicacion: |
  Efectivamente, Kaizen es el concepto de mejora continua aplicada a procesos, productos o actividades.
```

### 3 — Ciclo PDCA

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["ciclo_pdca", "metodologia"]

opciones_explicitas: ["Planificar, Hacer, Verificar, Actuar"]

respuesta_orden: ["Planificar, Hacer, Verificar, Actuar"]
tipo: ordenar

enunciado: "Ordene las etapas del Ciclo de Deming (PDCA), herramienta esencial para la mejora continua:"

pasos:
  - "Definir objetivos y procesos necesarios para obtener resultados."
  - "Implementar los procesos y realizar el trabajo."
  - "Realizar el seguimiento y medir los procesos respecto a los objetivos."
  - "Tomar acciones para mejorar los resultados de los procesos."

explicacion: |
  El ciclo PDCA es: Plan (Planificar), Do (Hacer), Check (Verificar) y Act (Actuar).
```

### 4 — Enfoque de la Mejora Continua

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["enfoque", "estrategia"]

opciones_explicitas: ["Un evento único de gran escala", "Un proceso de optimización constante", "Un cambio estructural de una sola vez"]

respuesta: "Un proceso de optimización constante"
tipo: mc

enunciado: "¿Cuál es la característica principal de la mejora continua en una organización?"

explicacion: |
  La mejora continua no es un proyecto con fecha de fin, sino una cultura de optimización permanente.
```

### 5 — Eliminación de Desperdicios

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["muda", "desperdicio"]

variables:
  escenario: uno_de([0,1])
  datos: [["Muda", "Desperdicio"], ["Kaizen", "Cambio"]]
  respuestas: ["Muda", "Desperdicio"]

respuesta: datos[escenario][0]
tipo: mc

opciones_explicitas: ["Muda", "Kaizen", "Poka-Yoke", "Kanban"]

enunciado: "En la metodología de mejora continua, el término japonés utilizado para referirse a cualquier tipo de ___________ en el proceso es {datos[escenario][1]}."

explicacion: |
  'Muda' es el término utilizado para referirse a las actividades que no agregan valor (desperdicio) y que deben eliminarse.
```

### 6 — Concepto de Mejora Continua

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["procesos", "eficiencia"]

respuesta: "incremental"
tipo: "completar"
respuestas_validas:
  - "incremental"
  - "gradual"
  - "constante"

enunciado: "La mejora continua se define como un enfoque de optimización que busca cambios de carácter ___ en lugar de realizar una única transformación radical."

explicacion: |
  La mejora continua (Kaizen) se basa en pequeños cambios constantes que, acumulados, generan grandes resultados. No se trata de un evento aislado, sino de un proceso sostenido.
```

### 7 — El Ciclo PHVA

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "phva"]

variables:
  pasos_phva: ["Planificar", "Hacer", "Verificar", "Actuar"]

respuesta: "Planificar"
tipo: "mc"
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "En un proceso de optimización de una línea de ensamblaje, el primer paso del ciclo PHVA consiste en establecer los objetivos y los procesos necesarios para lograr resultados. Este paso es: {pasos_phva[0]}."

explicacion: |
  El ciclo PHVA (Planificar, Hacer, Verificar, Actuar) es la base de la mejora continua. Siempre se debe comenzar con la fase de planificación para establecer la hoja de ruta.
```

### 8 — Análisis de Variabilidad

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["calidad", "variabilidad"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que la mejora continua busca reducir la variabilidad de los procesos para asegurar la calidad constante?"

explicacion: |
  La variabilidad es el enemigo de la eficiencia. Al estandarizar y mejorar procesos, se busca que los resultados sean predecibles y constantes.
```

### 9 — Caso de Optimización de Tiempos

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["calculo", "eficiencia"]

variables:
  escenario: [["Tiempo actual: 100 min, Tiempo meta: 85 min", "15"], ["Tiempo actual: 50 min, Tiempo meta: 48 min", "2"], ["Tiempo actual: 200 min, Tiempo meta: 180 min", "20"]]
  idx: uno_de([0, 1, 2])

respuesta: "escenario[idx][1]"
tipo: "input"
tolerancia_abs: 0

enunciado: "Una empresa de logística aplica mejora continua. Si su tiempo de despacho actual es de {escenario[idx][0]}, ¿cuántos minutos de reducción debe lograr para alcanzar su meta establecida?"

pasos:
  - "Identificar el tiempo actual."
  - "Identificar el tiempo meta."
  - "Calcular la diferencia: Actual - Meta."

explicacion: |
  La mejora continua se mide a menudo a través de la reducción de tiempos o desperdicios. En este caso, la diferencia entre el estado actual y el objetivo representa la mejora buscada.
```

### 10 — Secuencia de Implementación

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para implementar un programa de mejora continua en un departamento de atención al cliente, se deben seguir los pasos del ciclo de Deming en el siguiente orden lógico:"

explicacion: |
  El orden correcto es: 1. Planificar (diseñar la mejora), 2. Hacer (implementar el cambio), 3. Verificar (medir resultados) y 4. Actuar (estandarizar si fue exitoso).
```

### 11 — El enfoque de la mejora continua

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos", "filosofia_gestion"]

respuesta: falso
tipo: vf

enunciado: "La mejora continua (Kaizen) se define como un proyecto de optimización masiva que se ejecuta una sola vez para alcanzar un estado ideal de eficiencia."

explicacion: |
  Falso. La mejora continua se basa en cambios incrementales, constantes y sostenidos en el tiempo, no en intervenciones únicas o aisladas.
```

### 12 — El error de la optimización puntual

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["errores_comunes", "gestion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Una empresa implementa un software de gestión avanzado para resolver todos sus problemas de eficiencia de un solo golpe.", "software"], ["Un equipo de producción identifica pequeñas fallas diarias y ajusta sus procesos cada semana.", "ajustes"]]

enunciado: "En el escenario de {escenarios[escenario_idx][0]}, ¿cuál es el enfoque predominante?"

opciones_explicitas: ["optimización puntual", "mejora continua"]

respuesta: "optimización puntual"
tipo: mc

explicacion: |
  El primer escenario describe un intento de solución única y masiva, lo cual es un error común que ignora la naturaleza incremental de la mejora continua.
```

### 13 — Elementos de la mejora constante

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["terminologia", "procesos"]

respuesta: "incremental"
tipo: completar
respuestas_validas:
  - "incremental"

enunciado: "A diferencia de la innovación disruptiva, la mejora continua se caracteriza por ser de carácter ___________, buscando optimizar procesos mediante pequeños pasos sucesivos."

explicacion: |
  La mejora continua es incremental porque se enfoca en pequeñas mejoras constantes en lugar de cambios radicales o estructurales de una sola vez.
```

### 14 — Ciclo de la mejora

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["ciclo_pdca", "metodologia"]

respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para que la mejora sea continua, se debe seguir el ciclo PDCA. Ordene las fases de este ciclo en su secuencia lógica de ejecución:"

explicacion: |
  El ciclo PDCA (Plan-Do-Check-Act) es la base de la mejora continua: se planea, se ejecuta, se verifica el resultado y se actúa para estandarizar o ajustar.
```

### 15 — El mito de la perfección inmediata

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["mentalidad", "eficiencia"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El gerente cree que una vez que el proceso es eficiente, el trabajo de mejora ha terminado.", "terminado"], ["El gerente cree que la mejora es un proceso infinito de refinamiento constante.", "infinito"]]

enunciado: "Si un gerente adopta la visión del caso {casos[caso_idx][0]}, ¿está aplicando correctamente la filosofía de mejora continua?"

opciones_explicitas: ["Sí, la eficiencia es un estado de llegada.", "No, la mejora es un proceso cíclico sin fin."]

respuesta: "No, la mejora es un proceso cíclico sin fin."
tipo: mc

explicacion: |
  Uno de los errores más graves es pensar que la mejora tiene un punto final. La mejora continua asume que siempre hay una forma de optimizar un poco más.
```

### 16 — Mejora continua vs. Innovación disruptiva

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["procesos", "estrategia"]

tipo: mc
opciones_explicitas: ["La mejora continua busca cambios incrementales y constantes en procesos existentes.", "La innovación disruptiva busca cambios radicales que transforman el mercado.", "La mejora continua se enfoca en productos nuevos, mientras que la innovación en procesos.", "Ambas son conceptos idénticos en la práctica empresarial."]

respuesta: "La mejora continua busca cambios incrementales y constantes en procesos existentes."

enunciado: "¿Cuál es la distinción fundamental entre la mejora continua y la innovación disruptiva?"

explicacion: |
  La mejora continua (Kaizen) se centra en optimizar lo que ya existe de forma gradual, mientras que la innovación disruptiva busca crear algo totalmente nuevo que desplace a lo anterior.
```

### 17 — El enfoque de la mejora continua

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["filosofia_empresarial"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Una empresa que implementa un cambio masivo de software una vez cada 5 años.", "Un equipo que realiza pequeñas ajustes diarios en su línea de producción para reducir desperdicios."], ["Un evento único de reestructuración organizacional.", "Un ciclo constante de revisión y optimización de tareas."]]

tipo: completar
respuesta: escenarios[escenario_idx][1]

enunciado: "Identifica cuál de los siguientes escenarios representa verdaderamente la filosofía de mejora continua: {escenarios[escenario_idx][0]}"

explicacion: |
  La mejora continua no es un evento aislado o un proyecto con fecha de finalización, sino un ciclo perpetuo de optimización.
```

### 18 — Ciclo PHVA

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "ciclo_deming"]

tipo: ordenar
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Ordena correctamente las etapas del ciclo PHVA (Ciclo de Deming) utilizado en la mejora continua:"

explicacion: |
  El ciclo PHVA es la base de la mejora continua: se Planifica un cambio, se Hace (se implementa), se Verifica (se mide el resultado) y se Actúa (se estandariza el cambio).
```

### 19 — Naturaleza del cambio

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos"]

tipo: completar
respuestas_validas:
  - "incremental"
  - "gradual"
  - "pequeño"

respuesta: "incremental"

enunciado: "A diferencia de la reingeniería de procesos, que busca cambios drásticos, la mejora continua se caracteriza por ser de tipo ___."

explicacion: |
  La mejora continua se basa en la acumulación de pequeñas mejoras (cambios incrementales) que, sumadas, generan grandes resultados a largo plazo.
```

### 20 — El rol del error en la mejora continua

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["cultura_organizacional"]

tipo: mc
opciones_explicitas: ["El error es un fracaso que debe ser castigado para evitar su repetición.", "El error es una oportunidad de aprendizaje para identificar fallas en el proceso.", "El error es irrelevante si el producto final es de buena calidad.", "El error solo es aceptable si se compensa con un aumento de producción."]

respuesta: "El error es una oportunidad de aprendizaje para identificar fallas en el proceso."

enunciado: "¿Cómo se percibe un error o desviación en un sistema de mejora continua en comparación con un modelo de gestión tradicional basado en el control punitivo?"

explicacion: |
  En la mejora continua, el error es una señal de que el proceso actual tiene una oportunidad de optimización; se busca la causa raíz en el proceso, no la culpa en la persona.
```

### 21 — La esencia de la mejora continua

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos", "optimización"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Una fábrica de calzado que cambia toda su maquinaria de golpe cada 5 años.", "falso"], ["Una línea de producción que ajusta pequeños detalles cada semana para reducir desperdicios.", "verdadero"]]

respuesta: datos[escenario_idx][1]
tipo: completar
enunciado: "La mejora continua se define como un proceso de optimización constante e incremental. Analice el siguiente escenario: {datos[escenario_idx][0]}. ¿Es este un ejemplo de mejora continua? (verdadero/falso)"

explicacion: |
  La mejora continua (Kaizen) se basa en cambios incrementales y constantes, no en transformaciones disruptivas o únicas de gran escala.
```

### 22 — Identificación de enfoque

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "Mejora continua"
tipo: mc

opciones_explicitas: ["Optimización puntual", "Mejora continua", "Cambio radical", "Estancamiento"]

enunciado: "Si una empresa decide que su objetivo es mejorar sus procesos de forma constante, paso a paso, en lugar de esperar a un gran cambio estructural, está aplicando el concepto de: ___"

explicacion: |
  La mejora continua busca la excelencia a través de pequeños cambios sostenidos en el tiempo.
```

### 23 — El ciclo de optimización

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["metodologia", "ciclo_pdca"]

respuesta_orden: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para implementar la mejora continua de forma efectiva, se utiliza el ciclo PDCA. Ordene las siguientes etapas en la secuencia lógica correcta:"

explicacion: |
  El ciclo de Deming (PDCA) sigue el orden: Plan (Planificar), Do (Hacer), Check (Verificar) y Act (Actuar).
```

### 24 — Impacto en la eficiencia

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["eficiencia", "costos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Reducción del 2% en el tiempo de espera mensual", "2%"], ["Reducción del 5% en el desperdicio de materia prima mensual", "5%"]]

respuesta: casos[caso_idx][1]
tipo: completar

respuestas_validas:
  - "2%"
  - "5%"

enunciado: "En un programa de mejora continua, una empresa logra reducir el ___ de desperdicio de materia prima cada mes mediante ajustes en la maquinaria. (Use el valor del escenario actual)"

pasos:
  - "Identificar el valor del desperdicio en el escenario."
  - "Escribir el porcentaje exacto."

explicacion: |
  La mejora continua se manifiesta en la reducción progresiva de indicadores negativos como el desperdicio o el tiempo de espera.
```

### 25 — Visión estratégica

```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["estrategia", "mentalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El enfoque de la empresa es reactivo: solo actúa cuando hay crisis.", "falso"], ["El enfoque de la empresa es proactivo: busca fallas antes de que ocurran.", "verdadero"]]

respuesta: escenarios[escenario_idx][1]
tipo: completar
enunciado: "Un pilar de la mejora continua es la proactividad. Analice el siguiente enfoque: {escenarios[escenario_idx][0]}. ¿Este enfoque es compatible con la filosofía de mejora continua? (verdadero/falso)"

explicacion: |
  La mejora continua requiere una mentalidad proactiva para identificar oportunidades de mejora antes de que los problemas se conviertan en crisis.
```
