# Examen jefe — Maestro de Costos y Cooperativas

> Logro #189. Dominaste las corrientes económicas, el costo de oportunidad y el funcionamiento de las cooperativas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **129 preguntas totales** en 5/5 secciones.

---

## Sección: control-de-gestion-e-indicadores (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["definicion", "gestion"]

respuesta: "proceso"
tipo: "completar"
respuestas_validas: ["proceso"]

enunciado: "El control de gestión se define como el ________ de recolectar, analizar y utilizar información para asegurar que la organización alcance sus objetivos."

explicacion: |
  El control de gestión es un proceso continuo que permite comparar el desempeño real con los planes establecidos para tomar medidas correctivas.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["indicadores", "KPI"]

variables:
  tipo_indicador: uno_de(["eficiencia", "eficacia"])

respuesta: uno_de(["eficiencia", "eficacia"])
tipo: "mc"
opciones_explicitas: ["eficiencia", "eficacia", "efectividad"]

enunciado: "Si una empresa logra sus objetivos de ventas utilizando la menor cantidad de recursos posibles, está demostrando un alto nivel de {tipo_indicador}."

explicacion: |
  La eficiencia se refiere a la relación entre los resultados obtenidos y los recursos utilizados. La eficacia, en cambio, se centra solo en el cumplimiento del objetivo.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["balanced_scorecard", "perspectivas"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿El Cuadro de Mando Integral (Balanced Scorecard) propone medir a la organización únicamente desde una perspectiva financiera?"

explicacion: |
  Falso. El Balanced Scorecard integra cuatro perspectivas: Financiera, Cliente, Procesos Internos y Aprendizaje/Crecimiento.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["ciclo_pdca", "gestion"]

respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: "ordenar"
opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Ordene las etapas del ciclo PHVA (Ciclo de Deming) para asegurar la mejora continua en el control de gestión:"

explicacion: |
  El ciclo PHVA (Plan, Do, Check, Act) es la base de la mejora continua: se planifica, se ejecuta, se verifica el resultado y se actúa sobre las desviaciones.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["desviacion", "analisis"]

variables:
  escenario: uno_de([0, 1])

respuesta: tabla_desviacion[escenario][1
tipo: "mc"
opciones_explicitas: ["Positiva", "Negativa", "Nula"]

variables_aux:
  tabla_desviacion: [["Positiva", "Positiva"], ["Negativa", "Negativa"]]

enunciado: "En un escenario donde el gasto real es mayor al presupuesto planificado, la desviación presupuestaria es considerada: {uno_de(['Positiva', 'Negativa'])}."

explicacion: |
  En términos de control de costos, una desviación negativa suele indicar que se ha excedido el presupuesto, lo cual requiere una acción correctiva.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["eficiencia", "indicadores_desempeño"]

variables:
  datos: [[1200, 1500], [800, 1000], [2000, 2500]]
  idx: uno_de([0,1,2])
  produccion_real: datos[idx][0]
  produccion_esperada: datos[idx][1]
  eficiencia: (produccion_real / produccion_esperada) * 100

respuesta: eficiencia
tipo: completar
tolerancia_abs: 0.1

enunciado: "En una planta de ensamblaje, la producción real de la jornada fue de {produccion_real} unidades, mientras que el objetivo establecido era de {produccion_esperada} unidades. ¿Cuál es el índice de eficiencia de producción expresado en porcentaje?"

pasos:
  - "Dividir la producción real por la producción esperada: {produccion_real} / {produccion_esperada}"
  - "Multiplicar el resultado por 100 para obtener el porcentaje."

explicacion: |
  La eficiencia se calcula como el cociente entre la producción real y la estándar. En este caso, la eficiencia es del {eficiencia}%."
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["desviacion", "presupuesto"]

variables:
  escenario: [[100, 120], [150, 130], [200, 200]]
  idx: uno_de([0,1,2])
  costo_real: escenario[idx][0]
  costo_presupuestado: escenario[idx][1]

respuesta: "Desviación Negativa"
tipo: mc
opciones_explicitas: ["Desviación Positiva", "Desviación Negativa", "Sin Desviación"]

enunciado: "Si el costo real de un proyecto es de ${costo_real} y el presupuesto asignado era de ${costo_presupuestado}, y considerando que un costo mayor al presupuestado es desfavorable para la organización, ¿cómo se clasifica la desviación?"

explicacion: |
  Cuando el costo real es mayor al presupuestado (como en el caso de {costo_real} vs {costo_presupuestado}), se produce una desviación desfavorable o negativa en términos de control de costos."
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["kpi", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Un Indicador Clave de Desempeño (KPI) debe ser necesariamente medible y estar alineado con los objetivos estratégicos de la organización para ser útil en el control de gestión."

explicacion: |
  Correcto. Para que un indicador sea efectivo en el control de gestión, debe permitir la medición del progreso hacia un objetivo específico."
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_pdca"]

respuesta: ["Establecer estándares", "Medir el desempeño", "Comparar con estándares", "Tomar acciones correctivas"]
tipo: ordenar

opciones_explicitas: ["Establecer estándares", "Medir el desempeño", "Comparar con estándares", "Tomar acciones correctivas"]

enunciado: "Ordene cronológicamente las etapas del proceso de control de gestión para asegurar que una empresa corrija una desviación en sus ventas:"

explicacion: |
  El proceso lógico comienza con la definición de la meta (estándar), sigue con la medición de lo ocurrido, la comparación para detectar brechas y finalmente la acción para corregir."
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["roi", "rentabilidad"]

variables:
  datos: [[5000, 20000], [8000, 40000], [12000, 30000]]
  idx: uno_de([0,1,2])
  ganancia_neta: datos[idx][0]
  inversion_total: datos[idx][1]
  roi: (ganancia_neta / inversion_total) * 100

respuesta: "ROI"
tipo: completar
respuestas_validas: ["ROI", "roi"]

enunciado: "Si una empresa obtiene una ganancia neta de ${ganancia_neta} tras haber realizado una inversión total de ${inversion_total}, el indicador que mide la rentabilidad de esa inversión se denomina ___."

explicacion: |
  El ROI (Return on Investment) es el indicador que relaciona la ganancia obtenida con la inversión realizada. En este caso, el ROI es del {roi}%."
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["indicadores", "gestion", "eficiencia"]

respuesta: "eficiencia"
tipo: mc
opciones_explicitas: ["eficiencia", "eficacia", "efectividad", "productividad"]

enunciado: "Un gerente observa que su equipo produjo 100 unidades usando 10 horas de trabajo. Si el objetivo era producir 80 unidades en 12 horas, el equipo cumplió con el objetivo (fue eficaz), pero no optimizó los recursos. El indicador que mide la relación entre resultados y recursos utilizados se denomina ___."

explicacion: |
  La eficacia mide el grado de cumplimiento de los objetivos (lograr la meta), mientras que la eficiencia mide la relación entre los resultados obtenidos y los recursos empleados para lograrlos.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["metricas", "vanidad", "toma_de_decisiones"]

respuesta: falso
tipo: vf

enunciado: "Las llamadas 'métricas de vanidad' (vanity metrics) son indicadores que, aunque muestran números positivos y crecientes, no proporcionan información relevante para la toma de decisiones estratégicas ni para medir el éxito real del modelo de negocio."

explicacion: |
  Es falso. Las métricas de vanidad son precisamente aquellas que parecen buenas (como el número de 'likes' o visitas) pero no ayudan a entender la salud real del negocio o el cumplimiento de objetivos críticos.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["jerarquia", "indicadores", "estrategia"]

respuesta: ["Indicadores Estratégicos", "Indicadores Tácticos", "Indicadores Operativos"]
tipo: ordenar

opciones_explicitas: ["Indicadores Estratégicos", "Indicadores Tácticos", "Indicadores Operativos"]

enunciado: "Ordene los siguientes niveles de indicadores de gestión desde el nivel de mayor visión global (longitudinal) hasta el nivel de ejecución diaria:"

explicacion: |
  La jerarquía parte de la estrategia (largo plazo/global), baja a la táctica (departamental/procesos) y culmina en la operación (tareas diarias/específicas).
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["indicadores", "predictivos", "rezagados"]

variables:
  escenario: uno_de([[0, "ventas_totales"], [1, "tasa_de_satisfaccion_cliente"]])

respuesta: tabla[escenario][1
tipo: mc
opciones_explicitas: ["Indicador de resultado (Lagging)", "Indicador predictivo (Leading)", "Indicador de proceso"]

enunciado: "Si un indicador se enfoca en medir un evento que ya ha ocurrido (como el ___), se considera un indicador de tipo 'Lagging' o rezagado."

explicacion: |
  Los indicadores 'Lagging' miden resultados pasados (lo que ya sucedió), mientras que los 'Leading' intentan predecir resultados futuros basándose en variables actuales.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["kpi", "definicion"]

respuesta: ["KPI", "Key Performance Indicator"]
tipo: completar
respuestas_validas: ["KPI", "Key Performance Indicator"]

enunciado: "Para que un indicador sea considerado un ___ real, debe estar directamente alineado con un objetivo crítico del negocio y permitir una acción correctiva clara."

explicacion: |
  No todo indicador es un KPI. Un KPI (Key Performance Indicator) es un indicador clave; es decir, aquel que es vital para medir el éxito de un proceso o estrategia específica.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["indicadores", "gestion"]

respuesta: "eficiencia"
tipo: completar
respuestas_validas: ["eficiencia"]

enunciado: "Mientras que la eficacia se centra en el cumplimiento de las metas u objetivos propuestos, la ___ se enfoca en el uso óptimo de los recursos para alcanzar dichos objetivos."

explicacion: |
  La eficacia mide el grado de cumplimiento de los objetivos (lograr la meta), mientras que la eficiencia mide la relación entre los resultados obtenidos y los recursos utilizados (lograr la meta con el mínimo de recursos).
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["indicadores", "control"]

variables:
  idx: uno_de([0, 1])
  escenario: [[ "ventas_totales", "resultado_final" ], [ "costo_por_unidad", "medida_de_proceso" ]]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["resultado_final", "medida_de_proceso", "indicador_de_esfuerzo", "indicador_de_input"]

enunciado: "Si una empresa mide el '___', está analizando un indicador de: {escenario[idx][0]}."

explicacion: |
  Los indicadores de resultado (lagging) miden el producto final de una actividad, mientras que los de proceso (leading) miden las actividades necesarias para llegar a ese resultado.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "basico"
  tags: ["kpi", "indicadores"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un KPI (Indicador Clave de Desempeño) se distingue de un indicador común en que es crítico para la toma de decisiones estratégicas y está directamente vinculado a los objetivos principales de la organización?"

explicacion: |
  Correcto. Un KPI no es solo cualquier dato, sino un indicador seleccionado específicamente por su relevancia para medir el éxito de una estrategia.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "intermedio"
  tags: ["jerarquia", "indicadores"]

respuesta: ["indicadores_operativos", "indicadores_tácticos", "indicadores_estratégicos"]
tipo: ordenar
opciones_explicitas: ["indicadores_operativos", "indicadores_tácticos", "indicadores_estratégicos"]

enunciado: "Ordene los siguientes tipos de indicadores desde el nivel más bajo (operativo/día a día) hasta el nivel más alto (estratégico/largo plazo):"

explicacion: |
  La jerarquía típica va desde el control de las tareas diarias (operativo), pasando por el control de departamentos o áreas (táctico), hasta el control de la visión global de la empresa (estratégico).
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion_e_indicadores"
  nivel: "avanzado"
  tags: ["calidad", "eficacia"]

variables:
  idx: uno_de([0, 1])
  caso: [[ "cumplir_el_plazo", "eficacia" ], [ "cero_defectos", "calidad" ]]

respuesta: caso[idx][1
tipo: mc
opciones_explicitas: ["eficacia", "calidad", "eficiencia", "rentabilidad"]

enunciado: "En el contexto de control de gestión, si el objetivo es asegurar que un producto no tenga errores de fabricación, el indicador principal para medir este aspecto es la: {caso[idx][0]}."

explicacion: |
  Aunque la calidad puede influir en la eficacia, la medición de la ausencia de defectos se clasifica específicamente como un indicador de calidad o conformidad.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "intermedio"
  tags: ["indicadores", "eficacia", "eficiencia"]

variables:
  escenario: uno_de([
    ["La empresa produjo 100 unidades con 10 horas de trabajo, pero su objetivo era 120 unidades.", "eficacia"],
    ["La empresa produjo 100 unidades usando 8 horas de trabajo, cumpliendo su objetivo de 100 unidades.", "eficiencia"],
    ["La empresa produjo 120 unidades usando 15 horas de trabajo, superando su objetivo de 100 unidades.", "ambos"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "En el escenario donde la empresa {escenario[idx][0]}, el indicador de {escenario[idx][1]} es..."

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["eficacia", "eficiencia", "ambos", "ninguno"]

explicacion: |
  La eficacia mide el grado de cumplimiento de los objetivos (lograr la meta), mientras que la eficiencia mide la relación entre los resultados obtenidos y los recursos utilizados.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "avanzado"
  tags: ["presupuesto", "desviacion", "calculo"]

variables:
  datos: [
    ["Presupuesto: $5000, Real: $4500", "-10%"],
    ["Presupuesto: $8000, Real: $9200", "+15%"],
    ["Presupuesto: $1000, Real: $1000", "0%"]
  ]
  idx: uno_de([0, 1, 2])

enunciado: "Si el presupuesto asignado fue de {datos[idx][0].split(':')[1].split(',')[0].strip()} y el gasto real fue de {datos[idx][0].split(':')[1].split(',')[1].strip()}, la desviación porcentual respecto al presupuesto es de ___."

pasos:
  - "Identificar el valor presupuestado (P) y el valor real (R)."
  - "Calcular la diferencia: (R - P) / P."
  - "Multiplicar por 100 para obtener el porcentaje."

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["-10%", "+15%", "0%"]

explicacion: |
  La desviación presupuestaria indica la diferencia entre lo planificado y lo ejecutado. Una desviación positiva indica sobre-ejecución (gasto mayor al previsto).
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "basico"
  tags: ["kpi", "calidad", "verdadero_falso"]

enunciado: "Un KPI (Key Performance Indicator) de calidad que mide el porcentaje de productos defectuosos sobre el total producido es un indicador de proceso."

respuesta: verdadero
tipo: vf

explicacion: |
  Los indicadores de calidad suelen medir la efectividad de los procesos internos para asegurar que el output cumpla con los estándares establecidos.
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "intermedio"
  tags: ["pdca", "deming", "procesos"]

enunciado: "Ordene las etapas del ciclo de mejora continua (PDCA) en su secuencia lógica de ejecución:"

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]
respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

explicacion: |
  El ciclo PDCA consiste en: Planificar (establecer objetivos), Hacer (implementar), Verificar (comparar resultados con objetivos) y Actuar (ajustar para mejorar).
```

```
metadata:
  materia: "economia"
  tema: "control_de_gestion"
  nivel: "avanzado"
  tags: ["rentabilidad", "margen", "calculo"]

variables:
  caso: uno_de([
    ["Ventas: 1000, Costos: 700", "300"],
    ["Ventas: 500, Costos: 100", "400"],
    ["Ventas: 2000, Costos: 1800", "200"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Si una unidad de negocio presenta los siguientes datos: {caso[idx][0]}, su margen de contribución absoluto es de ___."

pasos:
  - "Identificar el total de ventas."
  - "Identificar los costos variables/directos."
  - "Restar los costos de las ventas."

respuesta: caso[idx][1
tipo: completar
tolerancia_abs: 0

explicacion: |
  El margen de contribución es la diferencia entre las ventas y los costos variables, indicando cuánto aporta cada unidad a cubrir los costos fijos y generar utilidad.
```

## Sección: cooperativismo-y-mutualismo (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["definicion", "organizacion"]

respuesta: "democráticamente"
tipo: completar
respuestas_validas: ["democráticamente"]

enunciado: "Según los principios de la economía social, las cooperativas son organizaciones gestionadas ________ por sus miembros."

explicacion: |
  El principio de gestión democrática es fundamental: cada miembro tiene un voto, independientemente del capital aportado.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["principios", "gestion"]

variables:
  es_democratica: true

respuesta: es_democratica
tipo: completar
enunciado: "En una cooperativa, el poder de decisión se distribuye de manera proporcional a la cantidad de acciones o capital aportado por cada socio."

pasos:
  - "Analizar el principio de 'una persona, un voto'."

explicacion: |
  Falso. En las cooperativas rige el principio de gestión democrática (un socio, un voto), a diferencia de las sociedades de capital donde el voto depende de las acciones.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["diferencias", "objetivo"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [["prestamos_y_ayuda", "ayuda_mutua"], ["excedentes_y_servicios", "servicios_comunes"]]

respuesta: datos[caso_idx][1
tipo: mc
opciones_explicitas: ["datos[0][1]", "datos[1][1]", "datos[0][0]", "datos[1][0]"]

enunciado: "Si nos enfocamos en el objetivo principal de una mutual, estamos hablando de la práctica de la ________."

explicacion: |
  Mientras las cooperativas buscan satisfacer necesidades de sus socios mediante la prestación de servicios, el mutualismo se centra en la ayuda mutua entre sus integrantes.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: "socios"
tipo: completar
respuestas_validas: ["socios"]

enunciado: "Las cooperativas están compuestas por un grupo de ________ que se unen voluntariamente para satisfacer sus necesidades económicas, sociales y culturales."

explicacion: |
  Los socios son la base fundamental de cualquier organización de economía social.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["procedimiento"]

respuesta: ["reunión_fundacional", "redacción_estatuto", "inscripción_registro"]
tipo: ordenar
opciones_explicitas: ["reunión_fundacional", "redacción_estatuto", "inscripción_registro", "elección_autoridades"]

enunciado: "Ordene cronológicamente los pasos básicos para la formación legal de una cooperativa:"

explicacion: |
  Primero se debe realizar la reunión de fundadores, luego redactar los estatutos que regirán la entidad y finalmente inscribirse en el registro correspondiente para obtener la personería jurídica.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["ley_26206", "gestion_democratica"]

variables:
  es_cooperativa: verdadero

respuesta: es_cooperativa
tipo: completar
enunciado: "En una cooperativa de trabajo, según el principio de gestión democrática, cada asociado tiene un voto, independientemente del capital aportado."

explicacion: |
  Correcto. A diferencia de una sociedad anónima donde el poder depende de la cantidad de acciones, en las cooperativas rige el principio de 'un asociado, un voto', garantizando la gestión democrática.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["caracteristicas", "economia_social"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Una agrupación de productores de leche que se unen para procesar su materia prima y distribuir sus productos bajo una marca común, compartiendo excedentes según el uso de servicios.", "cooperativa"],
    ["Un grupo de vecinos que crean un fondo común para prestarse dinero entre ellos con tasas sociales, sin fines de lucro.", "mutual"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["cooperativa", "mutual", "sociedad_anónima", "s.r.l."]

enunciado: "Analice el siguiente caso: {escenarios[escenario_idx][0]}"

explicacion: |
  La respuesta es {escenarios[escenario_idx][1]}. Las cooperativas buscan satisfacer necesidades de sus miembros mediante la producción o comercialización de bienes/servicios, mientras que las mutuales se centran en la prestación de servicios sociales y ayuda recíproca.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["excedentes", "distribucion"]

variables:
  excedente_total: 1000
  porcentaje_reserva_legal: 0.05
  porcentaje_fondo_educacion: 0.05
  porcentaje_reparto_asociados: 0.90

respuesta: redondear(excedente_total * porcentaje_reparto_asociados, 2)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una cooperativa de consumo al cierre de su ejercicio obtiene un excedente neto de ${excedente_total}. Tras destinar el 5% a la reserva legal y el 5% al fondo de educación, el resto se distribuye entre los asociados proporcionalmente al consumo realizado. ¿Cuánto dinero se reparte entre los asociados?"

pasos:
  - "Calcular el monto para reserva legal: ${excedente_total} * {porcentaje_reserva_legal}"
  - "Calcular el monto para el fondo de educación: ${excedente_total} * {porcentaje_fondo_educacion}"
  - "Restar ambos montos al excedente total para obtener el remanente a repartir."

explicacion: |
  El cálculo es: ${excedente_total} - (${excedente_total} * 0.05) - (${excedente_total} * 0.05) = ${excedente_total} * 0.90 = ${redondear(excedente_total * porcentaje_reparto_asociados, 2)}.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["procedimiento", "constitucion"]

respuesta: ["Reunión de fundadores", "Redacción de Estatuto", "Asamblea de constitución", "Inscripción en el INAES"]
tipo: ordenar
opciones_explicitas: ["Reunión de fundadores", "Redacción de Estatuto", "Asamblea de constitución", "Inscripción en el INAES"]

enunciado: "Ordene cronológicamente los pasos para la constitución legal de una cooperativa de trabajo en Argentina:"

explicacion: |
  Primero se reúnen los interesados, luego se redacta el estatuto que regirá la entidad, se celebra la asamblea donde se aprueba dicho estatuto y finalmente se inscribe ante el ente regulador (INAES).
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["capital", "asociados"]

respuesta: "variable"
tipo: completar
respuestas_validas: ["variable"]

enunciado: "En el cooperativismo, el capital social es de naturaleza ___, ya que su monto cambia con la entrada y salida de nuevos asociados."

explicacion: |
  El capital es variable porque no está representado por acciones de libre negociación en bolsa, sino que depende de la integración de los asociados a la entidad.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["cooperativas", "diferencias"]

respuesta: "sin fines de lucro"
tipo: completar
respuestas_validas: ["sin fines de lucro", "no lucrativa"]

enunciado: "A diferencia de las sociedades comerciales tradicionales, las cooperativas se rigen por el principio de que su actividad es ___."

explicacion: |
  Las cooperativas son entidades de economía social cuyo objetivo principal es satisfacer las necesidades de sus asociados y no la maximización de beneficios para terceros. Aunque pueden generar excedentes, estos se reinvierten o distribuyen según el uso de servicios, no como lucro comercial puro.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["gestion", "democracia"]

variables:
  es_democratica: true

respuesta: es_democratica
tipo: completar
enunciado: "En una cooperativa, el poder de decisión se distribuye según el capital aportado por cada socio (a más capital, más votos)."

explicacion: |
  Falso. El principio de democracia cooperativa establece que cada socio tiene un voto, independientemente de la cantidad de capital que haya aportado. Esto es lo que las distingue de las sociedades anónimas.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["mutualismo", "ayuda_mutua"]

respuesta: "ayuda mutua"
tipo: mc
opciones_explicitas: ["ayuda mutua", "maximización de dividendos", "especulación financiera", "competencia de mercado"]

enunciado: "El principio fundamental que distingue al mutualismo de otras formas de asociación es la ___ entre sus miembros para satisfacer necesidades comunes."

explicacion: |
  El mutualismo se basa en el principio de ayuda mutua, donde los asociados se asocian para prestarse servicios de previsión, asistencia o ayuda recíproca.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["ley_26206", "marco_legal"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["La cooperativa es una sociedad de personas.", "sociedad de personas"],
    ["La cooperativa es una sociedad de capitales.", "sociedad de capitales"]
  ]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["sociedad de personas", "sociedad de capitales"]

enunciado: "Según el marco legal de las cooperativas, estas se definen esencialmente como una ___."

explicacion: |
  Las cooperativas son sociedades de personas, ya que lo fundamental es la calidad de los asociados y su voluntad de cooperación, no la cuantía de su capital.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["principios", "valores"]

respuesta: ["Ingreso voluntario y abierto de socios", "Control democrático de los socios", "Participación económica de los socios"]
tipo: ordenar
opciones_explicitas: ["Ingreso voluntario y abierto de socios", "Control democrático de los socios", "Participación económica de los socios"]

enunciado: "Ordene los siguientes principios cooperativos según la lógica de constitución de una organización: primero la apertura, luego la gestión y finalmente la distribución."

explicacion: |
  Para que exista una cooperativa, primero deben ingresar los socios libremente (apertura), luego deben decidir cómo gestionarse (democracia) y finalmente cómo gestionar sus recursos (participación económica).
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["gestion", "democracia"]

tipo: mc
opciones_explicitas: ["La búsqueda de lucro máximo para accionistas externos", "La gestión democrática por parte de sus miembros", "La propiedad estatal de los medios de producción", "La primacía del capital sobre el trabajo"]

respuesta: "La gestión democrática por parte de sus miembros"

enunciado: "A diferencia de las sociedades de capital tradicionales, donde el poder de voto depende de la cantidad de acciones, las cooperativas se distinguen por un modelo de gestión donde cada miembro tiene un voto, independientemente de su aporte. Esto se conoce como:"

explicacion: |
  En el cooperativismo, rige el principio de 'un hombre, un voto', asegurando que el control sea democrático y no dependa de la riqueza de los socios.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["mutualismo", "ayuda_mutua"]

tipo: vf

enunciado: "El mutualismo se distingue del cooperativismo principalmente en que su fin primordial es la ayuda mutua para satisfacer necesidades comunes, sin tener como objetivo principal la distribución de excedentes entre sus miembros."

respuesta: falso

explicacion: |
  Aunque ambos pertenecen a la economía social, el mutualismo se centra en la prestación de servicios de asistencia mutua, mientras que la cooperativa busca satisfacer necesidades mediante la actividad económica de sus socios.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["ley_26206", "principios"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["gestión democrática", "ayuda mutua"], ["gestión democrática", "maximización de renta"]]

tipo: completar
respuestas_validas: ["ayuda mutua", "maximización de renta"]

enunciado: "Según el espíritu de la Ley 26.206, una organización que se distingue de una empresa comercial por su fin social debe basarse en el principio de ___."

pasos:
  - "Identificar el principio fundamental de la economía social."

explicacion: |
  La ayuda mutua es el pilar que diferencia a estas organizaciones de las empresas de capital, donde el fin es el lucro.

respuesta: datos[escenario_idx][1
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["principios", "orden"]

tipo: ordenar
opciones_explicitas: ["Ingreso libre y voluntario", "Gestión democrática", "Participación económica"]

respuesta: ["Ingreso libre y voluntario", "Gestión democrática", "Participación económica"]

enunciado: "Para que una organización sea considerada cooperativa bajo los estándares de la economía social, debe seguir una secuencia lógica de principios. Ordene los siguientes principios según la estructura clásica de la identidad cooperativa (desde la pertenencia hasta la gestión):"

explicacion: |
  Primero se define quién puede entrar (Ingreso libre), luego cómo se decide (Gestión democrática) y finalmente cómo se gestionan los recursos (Participación económica).
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["excedente", "lucro"]

variables:
  es_cooperativa: true

tipo: mc
opciones_explicitas: ["El excedente es igual al lucro de una empresa comercial", "El excedente se distribuye según el capital aportado", "El excedente se distribuye según el uso de los servicios", "El excedente se reinvierte íntegramente en el Estado"]

respuesta: "El excedente se distribuye según el uso de los servicios"

enunciado: "Una diferencia clave entre el 'lucro' de una sociedad comercial y el 'excedente' de una cooperativa es que el segundo se distribuye en función de la ___ realizada por los socios."

explicacion: |
  En las cooperativas, el retorno de excedentes no depende de cuánto capital puso cada uno, sino de cuánto utilizó los servicios de la cooperativa (retorno cooperativo).
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["ley_26206", "organizacion"]

variables:
  datos: [["Un grupo de agricultores se une para comprar insumos por menor precio y vender su cosecha sin intermediarios", "cooperativa"], ["Un grupo de vecinos se une para prestar servicios de asistencia sanitaria y farmacia con fines de ayuda mutua", "mutual"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cooperativa", "mutual"]

enunciado: "Un grupo de personas se organiza bajo el modelo de economía social. Si el objetivo principal es la gestión de servicios de ayuda mutua y asistencia, estamos ante una: ___"

explicacion: |
  Según la normativa, las cooperativas buscan satisfacer necesidades de sus socios mediante la explotación de una actividad económica, mientras que las mutuales se centran en la ayuda mutua y servicios de asistencia.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["gestion", "democracia"]

respuesta: verdadero
tipo: vf

enunciado: "En una organización cooperativa, el principio de 'una persona, un voto' implica que el poder de decisión es proporcional al capital aportado por cada socio."

explicacion: |
  Falso. El principio fundamental de las cooperativas es la gestión democrática: cada socio tiene un voto, independientemente de la cantidad de capital que haya aportado.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["estructura", "socios"]

variables:
  datos: [["Asamblea de Socios", "Máximo órgano de decisión"], ["Consejo de Administración", "Órgano de gobierno y dirección"], ["Sindicatura", "Control de legalidad"]]

respuesta: "Asamblea de Socios"
tipo: completar
respuestas_validas: ["Asamblea de Socios", "Consejo de Administración", "Sindicatura"]

enunciado: "En la estructura de una cooperativa, el ___ es el órgano máximo de gobierno donde se toman las decisiones fundamentales por parte de los asociados."

explicacion: |
  La Asamblea de Socios es el órgano supremo donde se ejerce la soberanía de los miembros.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["fin_lucro", "economia_social"]

respuesta: falso
tipo: vf

enunciado: "Las entidades de la economía social, como cooperativas y mutuales, tienen como objetivo primordial la maximización de beneficios económicos para sus accionistas externos."

explicacion: |
  Falso. El fin es satisfacer necesidades de los asociados y promover el bienestar de la comunidad; no buscan el lucro para terceros, sino el beneficio de sus propios miembros.
```

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["procedimiento", "pasos"]

respuesta: ["Reunión de interesados y definición de objeto social", "Redacción del contrato social y estatutos", "Inscripción en el registro de cooperativas"]
tipo: ordenar
opciones_explicitas: ["Redacción del contrato social y estatutos", "Reunión de interesados y definición de objeto social", "Inscripción en el registro de cooperativas", "Elección de autoridades"]

enunciado: "Ordene cronológicamente los pasos para la constitución legal de una cooperativa:"

explicacion: |
  Primero se define el objeto y los socios, luego se formaliza en un estatuto y finalmente se inscribe ante la autoridad de aplicación para obtener personería jurídica.
```

## Sección: coordinar-personas-y-recursos (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["definicion", "organizacion"]

respuesta: "coordinacion"
tipo: completar
respuestas_validas: ["coordinacion"]

enunciado: "El proceso de integrar las actividades de diversos departamentos y asegurar que se dirijan hacia el cumplimiento de los objetivos organizacionales se denomina ___."

explicacion: |
  La coordinación es el proceso de asegurar que las actividades de los distintos miembros de una organización se realicen de manera armoniosa para alcanzar los objetivos comunes.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["recursos", "factores_produccion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["capital", "recursos financieros y maquinaria"],
    ["humanos", "conocimientos y habilidades de las personas"]
  ]

respuesta: uno_de(["capital", "humanos"])
tipo: mc
opciones_explicitas: ["capital", "humanos", "tecnología", "materias primas"]

enunciado: "En el contexto de la coordinación de recursos, el factor representado por {datos[escenario_idx][0]} se refiere a {datos[escenario_idx][1]}."

explicacion: |
  Las organizaciones deben coordinar diversos recursos. El tipo seleccionado en este ejercicio es {datos[escenario_idx][0]}.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["division_trabajo", "eficiencia"]

respuesta: verdadero
tipo: vf

enunciado: "La división del trabajo consiste en descomponer una tarea compleja en tareas más pequeñas y especializadas para aumentar la eficiencia."

explicacion: |
  Efectivamente, la especialización mediante la división del trabajo es una herramienta fundamental para optimizar la productividad en la coordinación de equipos.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["estructura", "jerarquia"]

respuesta: ["Planificación", "Organización", "Dirección", "Control"]
tipo: ordenar
opciones_explicitas: ["Planificación", "Organización", "Dirección", "Control"]

enunciado: "Ordene las cuatro funciones administrativas del proceso de gestión en el orden lógico de su ciclo de ejecución:"

explicacion: |
  El proceso administrativo clásico sigue la secuencia: primero se establece lo que se quiere hacer (Planificación), luego se asignan recursos (Organización), se guía a las personas (Dirección) y finalmente se verifica el cumplimiento (Control).
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["control", "supervision"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["se detecta una desviación en la producción", "corregir la desviación"],
    ["se comparan los resultados con los objetivos", "verificar el desempeño"]
  ]

respuesta: uno_de(["corregir la desviación", "verificar el desempeño"])
tipo: mc
opciones_explicitas: ["corregir la desviación", "verificar el desempeño", "asignar tareas", "contratar personal"]

enunciado: "Si en una empresa {casos[caso_idx][0]}, la acción inmediata que corresponde a la función de control es {casos[caso_idx][1]}."

explicacion: |
  El control implica comparar el desempeño real con los estándares planeados y, si hay diferencias, tomar medidas para corregirlas.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "basico"
  tags: ["gestion", "equipo"]

enunciado: "Una empresa de desarrollo de software tiene dos programadores (A y B) y dos tareas (X e Y). El programador A es más eficiente en la tarea X, mientras que el programador B es más eficiente en la tarea Y. Para maximizar la productividad total, la asignación óptima es que el programador ___ realice la tarea ___."

pasos:
  - "Identificar la especialización de cada recurso."
  - "Asignar cada tarea al recurso con mayor ventaja comparativa."

opciones_explicitas: ["A, X", "A, Y", "B, X", "B, Y"]
respuesta: "A, X"
tipo: "mc"

explicacion: |
  La coordinación eficiente busca la especialización. Si asignamos a cada persona la tarea donde su productividad es mayor, la producción total del equipo será máxima.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "intermedio"
  tags: ["costo_oportunidad", "decision"]

variables:
  escenario: uno_de([["recurso_a", "recurso_b"], ["tiempo_dev", "tiempo_marketing"]])

enunciado: "Si una empresa decide utilizar todo su presupuesto disponible para contratar más personal de producción en lugar de invertir en publicidad, el costo de oportunidad es el ___ que se dejó de obtener."

respuestas_validas: ["beneficio de la publicidad", "incremento de ventas", "crecimiento de marca"]
respuesta: "beneficio de la publicidad"
tipo: "completar"

explicacion: |
  El costo de oportunidad no es solo el dinero gastado, sino el valor de la mejor alternativa sacrificada al tomar una decisión de asignación.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "intermedio"
  tags: ["rendimientos", "escala"]

enunciado: "Al duplicar la cantidad de trabajadores en una cocina pequeña sin aumentar el espacio físico ni el número de hornos, la producción total no se duplica, sino que aumenta de forma desproporcionada hacia abajo debido a la falta de coordinación y el exceso de gente en el mismo espacio. Este fenómeno se conoce como rendimientos decrecientes a escala."

respuesta: verdadero
tipo: "vf"

explicacion: |
  La coordinación de recursos físicos es tan importante como la de recursos humanos. Si los recursos físicos (capital) no crecen al mismo ritmo que el trabajo, la eficiencia cae.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "basico"
  tags: ["flujo_trabajo", "procesos"]

enunciado: "Para coordinar la producción de una silla de madera, se deben seguir los pasos lógicos de transformación de recursos. Ordena los siguientes pasos desde la adquisición de insumos hasta el producto final:"

opciones_explicitas: ["Compra de madera y clavos", "Corte y ensamblado de piezas", "Lijado y barnizado", "Control de calidad y empaque"]
respuesta: ["Compra de madera y clavos", "Corte y ensamblado de piezas", "Lijado y barnizado", "Control de calidad y empaque"]
tipo: "ordenar"

explicacion: |
  La coordinación de procesos requiere una secuencia lógica donde la salida de una etapa sea la entrada de la siguiente para evitar cuellos de botella.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "avanzado"
  tags: ["tecnologia", "productividad"]

variables:
  tecnologia: uno_de([["software_gestión", "maquinaria_automatica"]])

enunciado: "Una fábrica decide implementar {tecnologia} para coordinar mejor sus turnos de trabajo. Si esta implementación reduce el tiempo de inactividad de los trabajadores en un 15%, la productividad laboral total de la empresa ___."

respuestas_validas: ["aumentará", "disminuirá", "se mantendrá igual"]
respuesta: "aumentará"
tipo: "completar"

explicacion: |
  La tecnología actúa como un multiplicador de la coordinación. Al reducir los tiempos muertos (desperdicio de recursos), se produce más con la misma cantidad de insumos y horas hombre.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["gestion", "recursos", "eficiencia"]

respuesta: "ineficiencia"
tipo: mc
opciones_explicitas: ["eficiencia", "ineficiencia", "especializacion", "productividad"]

enunciado: "Cuando un gestor asigna a un trabajador altamente capacitado a una tarea que requiere habilidades mínimas, ignorando el costo de oportunidad de su talento, está provocando una ___ en la organización."

explicacion: |
  La asignación ineficiente de recursos humanos (especialmente el talento especializado) genera un costo de oportunidad elevado, reduciendo la productividad global del equipo.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["gestion", "procesos"]

respuesta: falso
tipo: vf

enunciado: "En la gestión de equipos, la coordinación se limita exclusivamente a la supervisión directa y el control de horarios de los empleados."

explicacion: |
  Falso. La coordinación implica también la sincronización de flujos de información, la alineación de objetivos y la gestión de la interdependencia entre tareas y recursos.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "avanzado"
  tags: ["planificacion", "logistica"]

variables:
  pasos_orden: [0, 1, 2]

respuesta: ["Identificar necesidades", "Asignar recursos", "Monitorear ejecución"]
tipo: ordenar
opciones_explicitas: ["Monitorear ejecución", "Identificar necesidades", "Asignar recursos"]

enunciado: "Para coordinar eficazmente un proyecto, se debe seguir un orden lógico de gestión de recursos. Ordene los siguientes pasos:"

pasos:
  - "Determinar qué materiales y personas se requieren para el objetivo."
  - "Distribuir los insumos y el personal a las tareas específicas."
  - "Verificar que el uso de los recursos coincida con lo planificado."

explicacion: |
  La planificación requiere primero el diagnóstico de necesidades, luego la distribución (asignación) y finalmente el control para corregir desviaciones.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["especializacion", "costos"]

variables:
  escenario: uno_de([[10, "exceso"], [5, "escasez"]])

respuesta: "____"
tipo: completar
respuestas_validas: ["exceso", "escasez"]

enunciado: "Si una empresa asigna demasiados trabajadores a una misma tarea de modo que se estorben entre sí, se produce un ____ de recursos humanos."

explicacion: |
  El exceso de recursos en una tarea específica genera rendimientos marginales decrecientes y aumenta los costos de coordinación.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["informacion", "asimetria"]

respuesta: 25.5
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un equipo de 10 personas debe completar 200 unidades. Si la capacidad actual es de 7 unidades por persona al día, pero la coordinación falla y la productividad cae un 20% por falta de comunicación, ¿cuántas unidades producirá el equipo en un día?"

pasos:
  - "Calcular la producción teórica: 10 personas * 7 unidades = 70 unidades."
  - "Aplicar la reducción por falta de coordinación: 70 * (1 - 0.20) = 56."
  - "Nota: El enunciado pide la producción final tras la caída."

explicacion: |
  La falta de coordinación actúa como una fricción que reduce la productividad real por debajo de la capacidad teórica de los recursos individuales.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "basico"
  tags: ["coordinacion", "division_trabajo"]

respuesta: "coordinacion"
tipo: "completar"
respuestas_validas: ["coordinacion"]

enunciado: "Mientras que la división del trabajo se encarga de fragmentar una tarea compleja en actividades simples, la ___ es el proceso de asegurar que estas tareas fragmentadas se integren de manera coherente para alcanzar el objetivo común."

explicacion: |
  La división del trabajo aumenta la eficiencia mediante la especialización, pero genera la necesidad de la coordinación para evitar que los esfuerzos individuales se desvíen o choquen entre sí.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["administracion", "recursos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["un equipo de producción de automóviles", "gestionar la cadena de suministros"],
    ["una clínica médica", "coordinar turnos de especialistas"]
  ]

respuesta: uno_de(["gestionar la cadena de suministros", "coordinar turnos de especialistas"])
tipo: "mc"
opciones_explicitas: ["gestionar la cadena de suministros", "coordinar turnos de especialistas", "eliminar la necesidad de supervisión", "maximizar la autonomía individual sin control"]

enunciado: "En el escenario de {escenarios[escenario_idx][0]}, la función principal de la coordinación de recursos es {escenarios[escenario_idx][1]}."

explicacion: |
  La coordinación busca sincronizar los recursos (humanos o materiales) con la demanda o el flujo de trabajo para evitar cuellos de botella.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["eficiencia", "eficacia"]

respuesta: verdadero

tipo: "vf"

enunciado: "Si un equipo logra alcanzar la meta de producción establecida (eficacia) pero utiliza el doble de la materia prima presupuestada debido a una mala organización de los recursos, se ha fallado en la eficiencia de la coordinación."

explicacion: |
  La eficacia se refiere al cumplimiento del objetivo, mientras que la eficiencia se refiere al uso óptimo de los recursos para alcanzar dicho objetivo.
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "avanzado"
  tags: ["procesos", "organizacion"]

respuesta: ["identificar tareas", "asignar responsabilidades", "establecer mecanismos de control"]
tipo: "ordenar"
opciones_explicitas: ["identificar tareas", "asignar responsabilidades", "establecer mecanismos de control"]

enunciado: "Para coordinar eficazmente un equipo de trabajo, un gestor debe seguir este orden lógico de organización de recursos:"

explicacion: |
  Primero se descompone el trabajo (identificación), luego se distribuyen los roles (asignación) y finalmente se verifica el cumplimiento (control).
```

```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["estructura", "decision"]

variables:
  tipo_estructura: uno_de(["centralizada", "descentralizada"])

respuesta: tipo_estructura
tipo: "mc"
opciones_explicitas: ["centralizada", "descentralizada"]

enunciado: "En una estructura organizacional {tipo_estructura}, la coordinación se logra mediante la jerarquía y la toma de decisiones concentrada en la parte superior, a diferencia de la estructura opuesta."

explicacion: |
  La centralización busca uniformidad y control estricto, mientras que la descentralización busca agilidad y empoderamiento en los niveles operativos.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["gestion", "recursos", "productividad"]

variables:
  escenario: uno_de([
    ["La empresa A tiene 10 operarios y cada uno produce 5 unidades/hora.", "50"],
    ["La empresa B tiene 12 operarios y cada uno produce 4 unidades/hora.", "48"],
    ["La empresa C tiene 8 operarios y cada uno produce 6 unidades/hora.", "48"]
  ])
  idx: uno_de([0, 1, 2])
  valor_total: escenario[idx][0]
  resultado_esperado: escenario[idx][1]

tipo: completar
tolerancia_abs: 0

enunciado: "Si una empresa cuenta con {escenario[idx][0]}, ¿cuál es la capacidad de producción total de unidades por hora?"

explicacion: |
  La capacidad total se calcula multiplicando el número de operarios por la productividad individual de cada uno.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["costos", "decision"]

variables:
  caso: uno_de([
    ["El costo de contratar un nuevo empleado es de $500 y el aumento en ingresos es de $600.", "verdadero"],
    ["El costo de contratar un nuevo empleado es de $700 y el aumento en ingresos es de $650.", "falso"]
  ])
  idx: uno_de([0, 1])

tipo: vf

enunciado: "Si el costo marginal de contratar a un nuevo trabajador es menor al ingreso marginal que este genera, la decisión de contratar es rentable. En el escenario actual: {caso[idx][0]}"

explicacion: |
  En economía, una acción es rentable si el beneficio marginal es mayor al costo marginal.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

tipo: ordenar

opciones_explicitas: ["Planificación de tareas", "Asignación de recursos", "Ejecución del trabajo", "Control de calidad"]
respuesta: ["Planificación de tareas", "Asignación de recursos", "Ejecución del trabajo", "Control de calidad"]

enunciado: "Ordene cronológicamente las etapas lógicas para coordinar un equipo de trabajo en una línea de producción:"

explicacion: |
  Para una coordinación eficiente, primero se debe planificar, luego asignar los recursos necesarios, ejecutar la tarea y finalmente controlar los resultados.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["productividad", "especializacion"]

variables:
  escenario: uno_de([
    ["En un taller, la división de tareas aumenta la eficiencia.", "Aumenta"],
    ["En un taller, la división de tareas disminuye la eficiencia.", "Disminuye"]
  ])
  idx: uno_de([0, 1])

tipo: mc

opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene igual"]

enunciado: "Considerando la teoría de la división del trabajo de Adam Smith, si aplicamos la especialización en un taller: la eficiencia ___"

explicacion: |
  La especialización permite que los trabajadores se vuelvan más hábiles en tareas específicas, reduciendo tiempos de transición y aumentando la productividad.
```

```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "avanzado"
  tags: ["inventario", "recursos"]

variables:
  datos: [
    ["El stock actual es de 150 unidades y el consumo diario es de 30 unidades. Faltan ___ días para agotar el stock.", "5"],
    ["El stock actual es de 200 unidades y el consumo diario es de 50 unidades. Faltan ___ días para agotar el stock.", "4"],
    ["El stock actual es de 100 unidades y el consumo diario de 10 unidades. Faltan ___ días para agotar el stock.", "10"]
  ]
  idx: uno_de([0, 1, 2])

tipo: completar

respuestas_validas: ["5", "4", "10"]
respuesta: datos[idx][1

enunciado: "Si el stock actual es de {datos[idx][0]}, ¿cuántos días faltan para agotar el stock?"

explicacion: |
  El tiempo de agotamiento se calcula dividiendo el stock total disponible por la tasa de consumo diaria.
```

## Sección: corrientes-pensamiento-economico (24 preguntas)

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué sostiene el mercantilismo sobre la riqueza de una nación?"
tipo: mc
opciones_explicitas:
  - "Que se mide por la cantidad de oro y plata que acumula, y que el Estado debe fomentar exportaciones y restringir importaciones"
  - "Que se mide sólo por la cantidad de tierra cultivada"
  - "Que el Estado no debe intervenir nunca en el comercio"
respuesta: "Que se mide por la cantidad de oro y plata que acumula, y que el Estado debe fomentar exportaciones y restringir importaciones"

explicacion: |
  Es la idea central del mercantilismo, dominante en Europa entre los
  siglos XVI y XVIII.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según la fisiocracia, ¿cuál es la única fuente real de riqueza?"
tipo: mc
opciones_explicitas:
  - "La tierra y la agricultura"
  - "El oro acumulado por el Estado"
  - "El comercio internacional"
respuesta: "La tierra y la agricultura"

explicacion: |
  Para la fisiocracia, la industria y el comercio sólo transforman
  una riqueza que ya generó la naturaleza.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué lema resume la postura fisiócrata sobre la intervención del Estado en la economía?"
tipo: mc
opciones_explicitas:
  - "\"Laissez faire, laissez passer\" (dejar hacer, dejar pasar)"
  - "\"El Estado ante todo\""
  - "\"Balanza comercial favorable siempre\""
respuesta: "\"Laissez faire, laissez passer\" (dejar hacer, dejar pasar)"

explicacion: |
  Defiende la mínima intervención estatal posible en la economía.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué corriente introduce la idea de la \"mano invisible\": que el interés individual, en un mercado libre, termina beneficiando a la sociedad entera?"
tipo: mc
opciones_explicitas:
  - "El liberalismo clásico (Adam Smith)"
  - "El marxismo"
  - "El keynesianismo"
respuesta: "El liberalismo clásico (Adam Smith)"

explicacion: |
  Es el concepto central de *La riqueza de las naciones* (1776).
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué es la \"plusvalía\", concepto central del marxismo?"
tipo: mc
opciones_explicitas:
  - "La diferencia entre el valor que un trabajador produce y el salario que recibe a cambio"
  - "El impuesto que cobra el Estado sobre las ganancias"
  - "La diferencia entre el precio de exportación e importación de un país"
respuesta: "La diferencia entre el valor que un trabajador produce y el salario que recibe a cambio"

explicacion: |
  Marx sostiene que esa diferencia queda en manos de quien es dueño
  del medio de producción.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según el marxismo, ¿cuál es el motor de la historia económica?"
tipo: mc
opciones_explicitas:
  - "La lucha entre clases sociales"
  - "La acumulación de oro y plata"
  - "La libre competencia entre empresas"
respuesta: "La lucha entre clases sociales"

explicacion: |
  Específicamente, entre quienes poseen los medios de producción y
  quienes sólo poseen su fuerza de trabajo.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué sostiene la escuela austriaca sobre la planificación económica centralizada?"
tipo: mc
opciones_explicitas:
  - "Que un Estado central no puede tener toda la información necesaria para planificar la economía; los precios libres coordinan mejor"
  - "Que el Estado debe fijar todos los precios para evitar la inflación"
  - "Que sólo la agricultura genera riqueza real"
respuesta: "Que un Estado central no puede tener toda la información necesaria para planificar la economía; los precios libres coordinan mejor"

explicacion: |
  Es la crítica central de Hayek en *Camino de servidumbre* (1944) a
  la planificación centralizada.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué propone el keynesianismo frente a una crisis económica con desempleo alto?"
tipo: mc
opciones_explicitas:
  - "Que el Estado aumente el gasto público para sostener la demanda y el empleo, aunque implique déficit fiscal temporal"
  - "Que el Estado reduzca el gasto público al mínimo posible"
  - "Que el Estado fije el precio de todos los bienes"
respuesta: "Que el Estado aumente el gasto público para sostener la demanda y el empleo, aunque implique déficit fiscal temporal"

explicacion: |
  Surge como respuesta a la Gran Depresión de la década de 1930.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El keynesianismo surgió como respuesta a la Gran Depresión, cuestionando la idea de que un mercado libre siempre se autorregula rápido frente a una crisis."

explicacion: |
  Es el contexto histórico que originó esta corriente.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "Según el monetarismo, ¿cuál es la causa principal de la inflación?"
tipo: mc
opciones_explicitas:
  - "Que la cantidad de dinero en circulación crece más rápido que la producción real de bienes y servicios"
  - "Que el Estado gasta demasiado poco"
  - "Que hay demasiada competencia entre empresas"
respuesta: "Que la cantidad de dinero en circulación crece más rápido que la producción real de bienes y servicios"

explicacion: |
  Es la idea central de Milton Friedman en *Capitalismo y libertad*
  (1962): la inflación es, en esencia, un fenómeno monetario.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Cuál es la diferencia central entre lo que propone el monetarismo y lo que propone el keynesianismo como herramienta principal de política económica?"
tipo: mc
opciones_explicitas:
  - "El monetarismo prioriza controlar la cantidad de dinero que emite el banco central; el keynesianismo prioriza el gasto público directo"
  - "Las dos corrientes proponen exactamente la misma herramienta"
  - "El monetarismo propone eliminar el dinero; el keynesianismo propone eliminar el Estado"
respuesta: "El monetarismo prioriza controlar la cantidad de dinero que emite el banco central; el keynesianismo prioriza el gasto público directo"

explicacion: |
  Cada corriente identifica una palanca distinta como la más
  importante para estabilizar la economía.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿A qué se le llama \"neoliberalismo\"?"
tipo: mc
opciones_explicitas:
  - "Al programa de política económica, aplicado desde los años 80, cercano al monetarismo y a la escuela austriaca: privatización, apertura comercial, desregulación"
  - "A la primera corriente económica de la historia, anterior al mercantilismo"
  - "A un sinónimo exacto del keynesianismo"
respuesta: "Al programa de política económica, aplicado desde los años 80, cercano al monetarismo y a la escuela austriaca: privatización, apertura comercial, desregulación"

explicacion: |
  Se lo asocia con políticas aplicadas en el Reino Unido, Estados
  Unidos y Chile desde los años 80.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El neoliberalismo se asocia con políticas aplicadas en el Reino Unido (gobierno de Thatcher), Estados Unidos (gobierno de Reagan) y Chile (los \"Chicago Boys\") desde la década de 1980."

explicacion: |
  Son los ejemplos históricos más citados de aplicación de este
  programa de política económica.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Qué señala la economía feminista y del cuidado sobre el PBI?"
tipo: mc
opciones_explicitas:
  - "Que no cuenta el trabajo doméstico y de cuidado no remunerado, aunque sea un trabajo real que sostiene la economía"
  - "Que cuenta dos veces el trabajo doméstico no remunerado"
  - "Que sólo debería medirse en base al trabajo doméstico"
respuesta: "Que no cuenta el trabajo doméstico y de cuidado no remunerado, aunque sea un trabajo real que sostiene la economía"

explicacion: |
  Es el señalamiento central de Marilyn Waring en *If Women Counted*
  (1988): al no tener precio de mercado, ese trabajo queda invisible
  en las estadísticas oficiales.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "avanzado"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El PBI (ver el tema de PBI e inflación) sólo cuenta la producción que pasa por el mercado, por eso el trabajo doméstico no remunerado queda fuera de esa medición."

explicacion: |
  Es la conexión directa entre este tema y `pbi-e-inflacion/`: el
  mismo concepto de PBI, visto desde un ángulo distinto.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Quién escribió *El Capital* (1867), texto de referencia del marxismo?"
tipo: mc
opciones_explicitas:
  - "Karl Marx"
  - "Adam Smith"
  - "John Maynard Keynes"
respuesta: "Karl Marx"

explicacion: |
  *El Capital* es la obra central del marxismo como corriente
  económica.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Quién escribió *La riqueza de las naciones* (1776), texto fundacional del liberalismo clásico?"
tipo: mc
opciones_explicitas:
  - "Adam Smith"
  - "Karl Marx"
  - "Milton Friedman"
respuesta: "Adam Smith"

explicacion: |
  Es considerado el texto fundacional de la economía moderna como
  disciplina.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

enunciado: "¿Quién escribió la *Teoría general del empleo, el interés y el dinero* (1936), texto de referencia del keynesianismo?"
tipo: mc
opciones_explicitas:
  - "John Maynard Keynes"
  - "Friedrich Hayek"
  - "Thomas Mun"
respuesta: "John Maynard Keynes"

explicacion: |
  Da nombre a la corriente: keynesianismo.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Este tema presenta cada corriente explicando qué sostiene, con la misma seriedad expositiva, sin marcar ninguna como \"la correcta\"."

explicacion: |
  Es el criterio central de todo el tema: identificar argumentos, no
  adoctrinar con una postura como la verdadera.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Varias de estas corrientes conviven hoy y se siguen citando en debates de política económica actuales — no es una sucesión donde cada una \"reemplaza\" a la anterior."

explicacion: |
  Lo único estrictamente cronológico es cuándo apareció cada
  corriente, no cuál es superior.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "problema"]

enunciado: "Un gobierno aumenta fuertemente el gasto público durante una recesión, para sostener el empleo aunque eso genere déficit fiscal. ¿Con qué corriente se corresponde mejor esta decisión?"
tipo: mc
opciones_explicitas:
  - "Keynesianismo"
  - "Escuela austriaca"
  - "Fisiocracia"
respuesta: "Keynesianismo"

explicacion: |
  Es exactamente la receta central del keynesianismo frente a una
  crisis.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "intermedio"
  tags: ["corrientes", "problema"]

enunciado: "Un banco central sube fuertemente la tasa de interés, priorizando controlar cuánto dinero circula, para frenar la inflación. ¿Con qué corriente se corresponde mejor esta decisión?"
tipo: mc
opciones_explicitas:
  - "Monetarismo"
  - "Marxismo"
  - "Fisiocracia"
respuesta: "Monetarismo"

explicacion: |
  Controlar la cantidad de dinero es la herramienta central que
  propone el monetarismo contra la inflación.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "avanzado"
  tags: ["corrientes", "orden"]

tipo: ordenar
enunciado: "Ordená estas corrientes según cuándo aparecieron, de la más antigua a la más reciente."
opciones_explicitas:
  - "Neoliberalismo"
  - "Marxismo"
  - "Mercantilismo"
  - "Monetarismo"
  - "Keynesianismo"
  - "Liberalismo clásico (Adam Smith)"
respuesta_orden: ["Mercantilismo", "Liberalismo clásico (Adam Smith)", "Marxismo", "Keynesianismo", "Monetarismo", "Neoliberalismo"]

explicacion: |
  Mercantilismo (s. XVI-XVIII), liberalismo clásico (1776), marxismo
  (1867), keynesianismo (1936), monetarismo (1962), neoliberalismo
  (desde los 80). Esto es cronología verificable, no un ranking de
  cuál es mejor.
```

```
metadata:
  materia: "economia"
  tema: "corrientes_pensamiento_economico"
  nivel: "basico"
  tags: ["corrientes", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada corriente del pensamiento económico ofrece una lógica interna propia y coherente para explicar cómo funciona la economía — conocerlas todas permite entender un debate económico actual, sin necesidad de adoptar una sola como la única válida."

explicacion: |
  Es la idea de cierre de todo el tema.
```

## Sección: costo-de-oportunidad (30 preguntas)

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad se define como el valor de la mejor alternativa a la que se renuncia al tomar una decisión."

explicacion: |
  Esta es la definición fundamental. El costo no es lo que se gasta, sino lo que se deja de obtener por elegir otra opción.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["intangibles", "tiempo"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad puede incluir factores intangibles como el tiempo o la satisfacción personal, no solo dinero."

explicacion: |
  Correcto. El tiempo dedicado a una actividad es tiempo que no se puede usar en otra, generando un costo de oportunidad.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["escasez", "fundamento"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad existe porque los recursos son limitados y los deseos humanos son prácticamente ilimitados."

explicacion: |
  La escasez es la condición necesaria para que exista el costo de oportunidad. Si todo fuera abundante, no habría que renunciar a nada.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["mitos", "confusion_comun"]

respuesta: falso
tipo: vf

enunciado: "El costo de oportunidad es igual al dinero que se gasta en la opción elegida."

explicacion: |
  Falso. El dinero gastado es el costo contable o explícito. El costo de oportunidad es el valor de la alternativa renuncada.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["frontera_posibilidades", "grafico"]

respuesta: verdadero
tipo: vf

enunciado: "En la Frontera de Posibilidades de Producción (FPP), el costo de oportunidad se representa por la pendiente de la curva."

explicacion: |
  La pendiente de la FPP indica cuánto de un bien hay que dejar de producir para obtener una unidad adicional del otro bien.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["tiempo_libre", "satisfaccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si elegís leer un libro en lugar de dormir la siesta, el costo de oportunidad es la satisfacción del descanso perdido."

explicacion: |
  Correcto. El costo de oportunidad es el beneficio de la mejor alternativa no elegida, en este caso, el descanso.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["costos_ocultos", "contabilidad"]

respuesta: falso
tipo: vf

enunciado: "El costo de oportunidad siempre es un costo explícito que aparece en los libros contables."

explicacion: |
  Falso. El costo de oportunidad es un costo implícito (no monetario directo) que no aparece en la contabilidad tradicional.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["consumo", "decision_financiera"]

respuesta: "el valor del auto usado"
tipo: completar

enunciado: "Si comprás un auto nuevo, el costo de oportunidad es el valor del auto usado que podrías haber comprado con ese mismo dinero."

explicacion: |
  El dinero gastado en el auto nuevo no puede usarse para comprar el auto usado. Ese es el sacrificio realizado.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["analisis_marginal", "decision_limite"]

respuesta: verdadero
tipo: vf

enunciado: "Las decisiones marginales se toman comparando el beneficio marginal con el costo de oportunidad marginal."

explicacion: |
  Correcto. Una decisión racional se toma hasta que el beneficio marginal es igual al costo marginal (que incluye el costo de oportunidad).
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["subjetividad", "valor_personal"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad es subjetivo porque depende del valor que el individuo asigna a las alternativas."

explicacion: |
  Correcto. Dos personas pueden tener diferentes costos de oportunidad para la misma decisión según sus preferencias y circunstancias.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["politica_publica", "bien_comun"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad de mantener la paz es la infraestructura militar que no se puede construir con esos recursos."

explicacion: |
  Correcto. Los recursos destinados a la paz (o a otros bienes civiles) no pueden usarse para fines militares.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["condicion_necesaria", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Si no existe ninguna alternativa viable, el costo de oportunidad de la decisión es cero."

explicacion: |
  Correcto. Sin alternativas, no hay nada que renunciar, por lo tanto, el costo de oportunidad es nulo.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["costo_explicito", "costo_implicito"]

variables:
  costo_alquiler: random(50000, 100000)
  ganancia_potencial: random(120000, 200000)

respuesta: "{ganancia_potencial}"
tipo: input

enunciado: "Un empresario deja de ganar {ganancia_potencial} pesos por su sueldo anterior para abrir su negocio. El alquiler del local cuesta {costo_alquiler}. ¿Cuál es el costo de oportunidad de la primera decisión (abrir el negocio) respecto a su empleo anterior?"

explicacion: |
  El costo de oportunidad de la decisión principal es la mejor alternativa renunciada (el sueldo), no el costo contable del alquiler.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["ejemplo_cotidiano", "mc"]

variables:
  opcion_a: "El dinero gastado en la comida"
  opcion_b: "El tiempo y disfrute de ver la película"
  opcion_c: "El precio del transporte"
  opcion_d: "El ahorro que dejaste de tener"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "Si decidís ver una película en casa en lugar de ir al trabajo, el costo de oportunidad es:"

explicacion: |
  El costo de oportunidad es el beneficio de la mejor alternativa no elegida, en este caso, el salario del trabajo.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["inversiones", "intereses"]

variables:
  capital: random(100000, 500000)
  tasa_otro_banco: random(5, 15)
  tasa_actual: 0

respuesta: "{capital * tasa_otro_banco / 100}"
tipo: input

enunciado: "Tenés {capital} pesos. Si los dejás en tu cuenta corriente (0% interés) en lugar de invertirlos en un bono que paga {tasa_otro_banco}% anual, ¿cuánto dinero dejás de ganar en un año?"

explicacion: |
  El costo de oportunidad es el rendimiento perdido al no elegir la mejor alternativa de inversión.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["comparacion", "racionalidad"]

variables:
  valor_opcion_a: random(100, 500)
  valor_opcion_b: random(200, 600)
  valor_opcion_c: random(50, 300)

respuesta: uno_de(["opcion_b", "opcion_a", "opcion_c"])
opciones_explicitas: ["opcion_b", "opcion_a", "opcion_c"]
tipo: mc

enunciado: "Si elegís la opción A (valor 100) en lugar de la B (valor 200) y la C (valor 50), ¿cuál fue el costo de oportunidad de tu decisión?"

explicacion: |
  El costo de oportunidad es el valor de la MEJOR alternativa no elegida. Entre B y C, la mejor es B.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["educacion", "tiempo"]

variables:
  horas_estudio: random(2, 5)
  salario_hora: random(800, 1200)

respuesta: "{horas_estudio * salario_hora}"
tipo: input

enunciado: "Si dedicas {horas_estudio} horas a estudiar y podrías haber trabajado a {salario_hora} pesos/hora, tu costo de oportunidad monetario es:"

explicacion: |
  Multiplicamos el tiempo dedicado a la actividad no remunerada por el salario de la mejor alternativa laboral.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["definicion_tecnica", "mc"]

variables:
  opcion_a: "El costo total de producción"
  opcion_b: "El beneficio de la mejor alternativa renunciada"
  opcion_c: "El gasto fijo"
  opcion_d: "El ingreso marginal"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "En economía, el costo de oportunidad es:"

explicacion: |
  Es el beneficio de la mejor alternativa a la que se renuncia.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["politica_publica", "presupuesto"]

variables:
  presupuesto: random(1000000000, 5000000000)
  hospitales: 5
  escuelas: 10

respuesta: "{presuesto / escuelas}"
tipo: input

enunciado: "Con un presupuesto de {presupuesto}, un gobierno puede construir {escuelas} escuelas o {hospitales} hospitales. ¿Cuál es el costo de oportunidad de construir una escuela en términos de hospitales?"

explicacion: |
  Primero calculamos el costo de una escuela (presupuesto/escuelas) y luego cuántos hospitales se pueden construir con ese monto (costo escuela / costo hospital). Nota: La respuesta correcta requiere calcular el valor relativo. Aquí simplificamos a la proporción directa si los costos unitarios fueran iguales, pero en realidad es (Presupuesto/Escuelas) / (Presupuesto/Hospitales) = Hospitales/Escuelas. Corrigiendo lógica: Costo 1 escuela = P/E. Costo 1 hospital = P/H. Cuántos hospitales con P/E? (P/E) / (P/H) = H/E.
```

```
variables:
  presupuesto: random(1000000000, 5000000000)
  hospitales: 5
  escuelas: 10

respuesta: "{hospitales / escuelas}"
tipo: input

enunciado: "Con un presupuesto de {presupuesto}, un gobierno puede construir {escuelas} escuelas o {hospitales} hospitales. ¿Cuántos hospitales se dejan de construir por cada escuela construida?"

explicacion: |
  La proporción de intercambio es Hospitales/Escuelas. Por cada escuela, renunciamos a 0.5 hospitales.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["distractor", "relevancia"]

variables:
  costo_pasaje: random(200, 500)
  tiempo_viaje: 1
  salario_hora: 1000

respuesta: "{costo_pasaje}"
tipo: input

enunciado: "Si vas al trabajo, gastas {costo_pasaje} en pasaje y tardas {tiempo_viaje} hora. Si quedás en casa, ahorrás el pasaje pero perdés el salario de {salario_hora}. Si tu decisión es ir al trabajo, ¿cuál es el costo de oportunidad de QUEDARTE en casa?"

explicacion: |
  Si te quedás en casa, el costo es el salario perdido. El pasaje es un costo de ir al trabajo, no de quedarte.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["distractor", "relevancia"]

variables:
  costo_pasaje: random(200, 500)
  tiempo_viaje: 1
  salario_hora: 1000

respuesta: "{salario_hora}"
tipo: input

enunciado: "Si vas al trabajo, gastas {costo_pasaje} en pasaje. Si quedás en casa, ahorrás el pasaje pero perdés el salario de {salario_hora}. Si tu opción elegida es 'quedarse en casa', ¿cuál es el costo de oportunidad monetario?"

explicacion: |
  El costo de oportunidad de quedarse en casa es el ingreso que dejás de ganar trabajando.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["tiempo", "mc"]

variables:
  opcion_a: "El sueño perdido"
  opcion_b: "El salario de la hora no trabajada"
  opcion_c: "El precio del café"
  opcion_d: "El tiempo de preparación del café"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "Si te tomás un café de 15 minutos en lugar de trabajar, el costo de oportunidad es:"

explicacion: |
  El costo de oportunidad es el valor de la mejor alternativa, es decir, el salario que dejás de ganar en esos 15 minutos.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["educacion_superior", "costo_total"]

variables:
  matricula: random(10000, 50000)
  mensualidad: random(5000, 20000)
  salario_anual: random(2000000, 4000000)
  anos: 4

respuesta: "{matricula + (mensualidad * 12 * anos) + (salario_anual * anos)}"
tipo: input

enunciado: "Para estudiar una carrera de {anos} años, pagás {matricula} de matrícula y {mensualidad} mensuales. Además, dejás de ganar {salario_anual} anuales. ¿Cuál es el costo de oportunidad total de la carrera?"

explicacion: |
  El costo de oportunidad total incluye los costos directos (matrícula y mensualidades) más el ingreso perdido (salario).
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["definicion", "mc"]

variables:
  opcion_a: "Cualquier alternativa"
  opcion_b: "La alternativa con menor costo monetario"
  opcion_c: "La mejor alternativa disponible"
  opcion_d: "La primera alternativa pensada"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "El costo de oportunidad se calcula considerando:"

explicacion: |
  Solo la MEJOR alternativa disponible. Las otras opciones no elegidas no cuentan.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["tiempo_libre", "ejemplo"]

variables:
  horas_libres: random(2, 4)
  valor_hora_diversion: random(500, 1000)

respuesta: "{horas_libres * valor_hora_diversion}"
tipo: input

enunciado: "Si valorás tu hora de diversión en {valor_hora_diversion} pesos y decidís trabajar por {horas_libres} horas en lugar de divertirte, ¿cuál es el costo de oportunidad de trabajar?"

explicacion: |
  El costo de oportunidad es el valor subjetivo de la diversión perdida.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["costo_implicito", "mc"]

variables:
  opcion_a: "El alquiler del local"
  opcion_b: "El salario que el dueño deja de ganar"
  opcion_c: "La luz del negocio"
  opcion_d: "El sueldo de los empleados"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "En un negocio propio, ¿cuál de estos es un costo de oportunidad implícito?"

explicacion: |
  El salario que el dueño deja de ganar trabajando en otra parte es un costo implícito. Los otros son costos explícitos.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["tierra", "uso_suelo"]

variables:
  opcion_a: "El precio de venta de la tierra"
  opcion_b: "El cultivo que se deja de sembrar"
  opcion_c: "El costo de la maquinaria"
  opcion_d: "El salario del agricultor"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "Si usás una tierra para construir casas en lugar de sembrar trigo, el costo de oportunidad es:"

explicacion: |
  El beneficio que hubieras obtenido con la siembra de trigo.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["transporte", "tiempo"]

variables:
  tiempo_auto: 60
  tiempo_bus: 90
  salario_hora: 1000

respuesta: "{(tiempo_bus - tiempo_auto) * salario_hora / 60}"
tipo: input

enunciado: "El auto tarda {tiempo_auto} minutos y el bus {tiempo_bus} minutos. Si tu hora vale {salario_hora} pesos, ¿cuánto dinero perdés de tiempo si elegís el bus en lugar del auto?"

explicacion: |
  La diferencia de tiempo multiplicada por el valor de tu hora.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["naturaleza", "subjetivo"]

variables:
  opcion_a: "Objetivo y contable"
  opcion_b: "Subjetivo y basado en preferencias"
  opcion_c: "Fijo e inmutable"
  opcion_d: "Irrelevante para la decisión"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "El costo de oportunidad es fundamentalmente:"

explicacion: |
  Subjetivo, ya que depende de las preferencias y valoraciones individuales de la mejor alternativa.
```
