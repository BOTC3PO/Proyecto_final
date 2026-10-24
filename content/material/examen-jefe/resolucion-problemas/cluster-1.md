# Examen jefe — Detective de Problemas

> Logro #958. Dominaste detectar el problema, analizar causas y restricciones, diseñar posibles soluciones, identificar alternativas y implementar la solución. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: detectar-el-problema (25 preguntas)

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

tipo: mc
opciones_explicitas: ["El síntoma o la consecuencia de un error", "La causa raíz que genera una desviación", "La solución propuesta para un conflicto", "La descripción de un estado ideal"]

enunciado: "En el proceso de resolución de problemas, identificar el problema real implica distinguir entre el síntoma (la manifestación visible) y la ___."

respuesta: "La causa raíz que genera una desviación"

explicacion: |
  Un error común es intentar resolver el síntoma (ej. una fuga de agua) sin atacar la causa raíz (ej. una tubería corroída). Si no identificas la causa, el problema persistirá.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["metodologia", "errores"]

tipo: vf

enunciado: "Saltar directamente a proponer soluciones sin haber definido el problema con precisión es una práctica recomendada para ahorrar tiempo en la resolución de conflictos."

respuesta: falso

explicacion: |
  Saltar a la solución sin entender el problema suele llevar a soluciones ineficaces o que incluso agravan la situación original.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["brecha", "estado_actual"]

tipo: completar
respuestas_validas:
  - "brecha"

enunciado: "Definir un problema implica identificar la ___ entre el estado actual y el estado deseado."

respuesta: "brecha"

explicacion: |
  El problema se define técnicamente como la diferencia o 'brecha' entre la situación presente y la situación objetivo.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Observar el síntoma", "Analizar las causas posibles", "Definir el problema central", "Validar la definición con los involucrados"]

respuesta_orden: ["Observar el síntoma", "Analizar las causas posibles", "Definir el problema central", "Validar la definición con los involucrados"]

enunciado: "Ordena las etapas lógicas para una detección efectiva del problema:"

explicacion: |
  Primero se nota que algo anda mal (síntoma), luego se investiga por qué ocurre (análisis), se establece la definición clara y finalmente se confirma con quienes viven el problema.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["vocabulario"]

tipo: mc
opciones_explicitas: ["Problema", "Hipótesis", "Solución", "Obstáculo"]

enunciado: "Cuando una persona dice 'Necesitamos comprar un software nuevo para mejorar la comunicación', está planteando una ___ en lugar de un ___."

respuesta: "Solución"

explicacion: |
  Confundir la solución con el problema es un error clásico. El problema es 'la mala comunicación'; el software es solo una posible solución para ese problema.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["diagnostico", "analisis"]

enunciado: "Una empresa nota que las ventas han caído un 20% este mes. El gerente decide lanzar una campaña de publicidad masiva para revertir la situación. ¿Cuál es el error en el proceso de detección del problema?"

opciones_explicitas: ["Tratar un síntoma como si fuera el problema raíz", "No tener presupuesto para publicidad", "No usar datos estadísticos para medir la caída", "La caída del 20% no es un problema real"]

respuesta: "Tratar un síntoma como si fuera el problema raíz"
tipo: mc

explicacion: |
  La caída de ventas es un 'síntoma' (un efecto visible). Si el problema real fuera, por ejemplo, un defecto de fábrica en el producto, la publicidad solo aumentaría el número de clientes insatisfechos. Primero hay que identificar la causa raíz.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["analisis_causal", "datos"]

variables:
  escenario: uno_de([["La máquina A hace ruido y produce piezas defectuosas", "Ruido mecánico"], ["El software se cierra solo al abrir archivos pesados", "Falta de memoria RAM"], ["El equipo de ventas llega tarde a las reuniones", "Falta de motivación"]])

enunciado: "En el escenario: '{escenario[0]}', el problema detectado inicialmente es '{escenario[1]}'. ¿Es este el problema real o una consecuencia?"

opciones_explicitas: ["Es el problema real", "Es una consecuencia"]

respuesta: "Es una consecuencia"
tipo: mc

explicacion: |
  El ruido y las piezas defectuosas son manifestaciones del problema subyacente (el fallo mecánico), pero no explican la causa (ej. falta de lubricación o desgaste).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Para resolver un problema complejo de manera efectiva, se deben seguir las etapas de diagnóstico. Ordena los siguientes pasos desde el análisis inicial hasta la definición del problema:"

opciones_explicitas: ["Observar los síntomas", "Recopilar datos sobre el entorno", "Identificar la causa raíz", "Definir el problema con precisión"]

respuesta_orden: ["Observar los síntomas", "Recopilar datos sobre el entorno", "Identificar la causa raíz", "Definir el problema con precisión"]
tipo: ordenar

explicacion: |
  No se puede definir el problema sin antes haber recolectado evidencia que permita distinguir entre lo que parece estar pasando (síntoma) y lo que realmente está pasando (causa).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["logica", "verificacion"]

enunciado: "Si un técnico de soporte asume que el problema de un cliente es 'falta de internet' solo porque el cliente dice que 'no puede entrar a su correo', sin realizar pruebas de conexión o ping, ¿ha realizado un proceso de detección de problema válido? (Responde con verdadero o falso)"

respuesta: falso
tipo: vf

explicacion: |
  Asumir una causa sin verificar los datos es un salto lógico. El problema podría ser una contraseña incorrecta, un servidor caído o un problema de DNS, no necesariamente la falta de conexión.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "avanzado"
  tags: ["enunciado", "precision"]

variables:
  caso_estudio: uno_de([["El tiempo de entrega de pedidos ha subido de 2 a 10 días", "El problema es el Retraso en logística"], ["La tasa de error en el código aumentó un 15% tras la última actualización", "El problema es el Regresión de software"]])

enunciado: "Analizando el caso: '{caso_estudio[0]}', el enunciado del problema correctamente definido sería: '___'."

respuesta: caso_estudio[1]
tipo: completar
respuestas_validas:
  - "El problema es el Retraso en logística"
  - "El problema es el Regresión de software"

explicacion: |
  Una buena detección de problema transforma una observación vaga en una declaración precisa que delimita el alcance de la solución necesaria.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["diagnostico", "analisis"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El sistema está lento", "El disco duro está lleno"], ["La planta tiene hojas amarillas", "La planta no tiene suficiente nitrógeno"]]

enunciado: "En el caso donde el síntoma es '{escenarios[escenario_idx][0]}', el problema real es '{escenarios[escenario_idx][1]}'. ¿Es correcto identificar el síntoma como el problema real?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: falso
tipo: vf

explicacion: |
  Confundir un síntoma (lo que se observa) con la causa raíz (el problema real) es el error más común en la resolución de problemas. Resolver el síntoma solo ofrece una solución temporal.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["metodologia", "errores"]

opciones_explicitas: ["saltar a la solución", "analizar la causa raíz", "reunir al equipo", "documentar el error"]
respuesta: "saltar a la solución"
tipo: "mc"

enunciado: "Si un equipo comienza a implementar cambios técnicos inmediatamente después de notar una anomalía, sin haber investigado el origen, ¿qué error de resolución de problemas está cometiendo?"

explicacion: |
  La resolución de problemas efectiva requiere una fase de diagnóstico. Saltar a la solución sin definir el problema real suele llevar a desperdiciar recursos en soluciones que no atacan la causa.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["analisis", "causa_raiz"]

variables:
  par: uno_de([["El cliente se queja de que el producto llegó tarde", "Falta de stock en el almacén"], ["El cliente dice que el producto es de mala calidad", "Defecto en la línea de ensamblaje"], ["El motor hace un ruido extraño", "Filtro de aceite obstruido"], ["El motor no arranca", "Batería descargada"]])

enunciado: "Un cliente reporta el siguiente síntoma: '{par[0]}'. ¿Cuál es la causa raíz más probable?"

respuesta: par[1]
tipo: "mc"
opciones_explicitas: ["Falta de stock en el almacén", "Defecto en la línea de ensamblaje", "Filtro de aceite obstruido", "Batería descargada"]

explicacion: |
  La identificación precisa del problema depende de distinguir entre el efecto visible y la causa subyacente.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

opciones_explicitas: ["Observar el síntoma", "Analizar la causa raíz", "Proponer soluciones", "Implementar la solución"]
respuesta_orden: ["Observar el síntoma", "Analizar la causa raíz", "Proponer soluciones", "Implementar la solución"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para resolver un problema, empezando por la detección:"

explicacion: |
  Intentar resolver un problema sin haber pasado por la observación y el análisis de la causa raíz rompe el flujo lógico de la resolución de problemas.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["definicion", "logica"]

tipo: mc
opciones_explicitas: ["Estamos definiendo el problema real", "Estamos definiendo una consecuencia de un problema mayor"]
respuesta: "Estamos definiendo una consecuencia de un problema mayor"

enunciado: "Si definimos un problema como 'Falta de dinero en la caja', ¿qué estamos definiendo realmente?"

explicacion: |
  'Falta de dinero' suele ser un síntoma de problemas más profundos (ventas bajas, exceso de gastos, errores de contabilidad, robos). Un problema bien definido debe apuntar a la raíz, no al resultado financiero.
```

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

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["terminologia", "contexto"]

variables:
  par: uno_de([["Un obstáculo que impide alcanzar un objetivo específico", "problema"], ["Una situación que requiere esfuerzo pero no implica una falla", "desafío"], ["Una situación de oportunidad para mejorar un proceso", "desafío"], ["Una dificultad que bloquea el flujo de trabajo", "problema"]])

tipo: mc
opciones_explicitas: ["problema", "desafío"]

enunciado: "Considerando el escenario: '{par[0]}', estamos ante un ___."

respuesta: par[1]

explicacion: |
  Un problema implica una desviación de un estado deseado, mientras que un desafío es una meta que requiere superación pero no necesariamente parte de una falla previa.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Observar el síntoma", "Analizar la causa raíz", "Definir el problema real"]

respuesta_orden: ["Observar el síntoma", "Analizar la causa raíz", "Definir el problema real"]

enunciado: "Ordena los pasos lógicos para pasar de la percepción de una anomalía a la identificación precisa del problema:"

explicacion: |
  Primero se detecta la señal (síntoma), luego se investiga el origen (causa) y finalmente se formaliza la definición del problema.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "avanzado"
  tags: ["analisis", "profundidad"]

tipo: completar
respuestas_validas:
  - "causa"
  - "raíz"
  - "origen"
respuesta: "causa"

enunciado: "Para evitar la recurrencia de un error, el objetivo de la detección no es solo notar que algo falló, sino identificar la ___ que lo produjo."

explicacion: |
  Si no se identifica la causa, la solución será solo un 'parche' que no evitará que el problema vuelva a aparecer.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["diagnostico", "analisis"]

variables:
  escenario: uno_de([["La empresa nota una caída del 20% en ventas este mes.", "falta de demanda"], ["Los empleados llegan tarde todos los días.", "falta de motivación"], ["La máquina A produce piezas con errores de medida.", "desgaste de herramienta"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["falta de demanda", "falta de motivación", "desgaste de herramienta", "error de proceso"]

enunciado: "En el siguiente escenario: '{escenario[0]}', ¿cuál es el problema real (causa raíz) que debe abordarse?"

explicacion: |
  Identificar el síntoma (la caída de ventas, la tardanza, el error de medida) es distinto al problema raíz. Resolver el síntoma sin atacar la causa es un error de diagnóstico.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["analisis", "datos"]

variables:
  caso: uno_de([["Un restaurante recibe quejas de comida fría.", "Temperatura de servicio"], ["Un software se cierra inesperadamente.", "Gestión de memoria"], ["Un coche no arranca por la mañana.", "Estado de la batería"]])

respuesta: caso[1]
tipo: completar

enunciado: "Para resolver el problema '{caso[0]}', el primer paso es identificar la variable crítica que está fallando. La variable es: ___"

explicacion: |
  Antes de proponer soluciones, debemos aislar la variable técnica o operativa que está fuera de los parámetros normales.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  idx: uno_de([0, 1, 2])
  textos: ["El color de la pared no agrada al cliente.", "El servidor se cae cada vez que hay 100 usuarios.", "Un empleado quiere cambiar de horario."]
  es_critico: [falso, verdadero, falso]

respuesta: es_critico[idx]
tipo: vf
enunciado: "Analiza la siguiente situación: '{textos[idx]}'. ¿Se trata de un problema crítico que requiere una solución técnica/estructural inmediata?"

explicacion: |
  No todo evento es un "problema" en términos de resolución de problemas. Debemos distinguir entre preferencias, preferencias estéticas y fallos funcionales o críticos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Observar el síntoma", "Recolectar datos", "Identificar la causa raíz", "Definir el problema"]
tipo: ordenar

opciones_explicitas: ["Observar el síntoma", "Recolectar datos", "Identificar la causa raíz", "Definir el problema"]

enunciado: "Para detectar un problema con precisión, se debe seguir un orden lógico. Ordena los pasos de diagnóstico:"

explicacion: |
  No se puede definir el problema sin haber recolectado datos suficientes que permitan diferenciar el síntoma de la causa raíz.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "avanzado"
  tags: ["errores", "analisis"]

variables:
  error_tipo: uno_de([["Intentar arreglar el síntoma sin investigar la causa.", "solucion_parche"], ["Saltar directamente a la solución sin definir el problema.", "salto_lógico"]])

respuesta: error_tipo[1]
tipo: mc
opciones_explicitas: ["solucion_parche", "salto_lógico"]

enunciado: "Si un equipo detecta que 'el sistema está lento' y decide 'comprar más memoria RAM' sin investigar si el problema es un proceso mal programado, están cometiendo un:"

explicacion: |
  La solución prematura es uno de los errores más costosos en la resolución de problemas, ya que se gasta recurso en atacar una consecuencia y no la causa.
```

## Sección: analizar-causas-y-restricciones (25 preguntas)

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "brecha"
tipo: completar
respuestas_validas:
  - "brecha"
  - "diferencia"
  - "gap"

enunciado: "En el contexto de resolución de problemas, un problema se define como la ___ existente entre una situación actual y una situación deseada."

explicacion: |
  Un problema surge cuando detectamos una desviación o 'brecha' entre lo que está sucediendo y lo que debería suceder.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["causas", "analisis"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El motor no arranca", "Falta de combustible"], ["Un proyecto se retrasa", "Mala gestión de tiempos"]]

respuesta: "Causa"
tipo: mc
opciones_explicitas: ["Causa", "Efecto", "Restricción", "Síntoma"]

enunciado: "Si en el escenario '{escenarios[escenario_idx][0]}', el factor '{escenarios[escenario_idx][1]}' es lo que origina el inconveniente, este se clasifica como una:"

explicacion: |
  La causa es el origen o el motivo que produce un efecto o un problema.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["restricciones", "limitaciones"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es una restricción un factor que limita las opciones de solución, pero que no es necesariamente la causa del problema original?"

explicacion: |
  Verdadero. Las restricciones (como presupuesto, tiempo o leyes) limitan el campo de acción de las posibles soluciones, pero no son la raíz del problema.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["clasificacion", "ordenar"]

respuesta_orden: ["Causa", "Problema", "Efecto"]
tipo: ordenar
opciones_explicitas: ["Efecto", "Causa", "Problema"]

enunciado: "Ordena la secuencia lógica de un proceso de análisis causal, desde el origen hasta la consecuencia observable:"

explicacion: |
  La secuencia lógica es: Causa (origen) -> Problema (la situación resultante) -> Efecto (la consecuencia o impacto).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["distincion", "analisis"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["No hay dinero para comprar insumos", "Presupuesto limitado"], ["Solo hay un técnico disponible para reparar la máquina", "Disponibilidad de personal"]]

respuesta: "Es una restricción"
tipo: mc
opciones_explicitas: ["Es una causa", "Es una restricción", "Es un efecto"]

enunciado: "En el caso '{casos[caso_idx][0]}', el factor '{casos[caso_idx][1]}' actúa como una:"

explicacion: |
  Si el factor limita lo que se puede hacer sin ser el origen del problema, es una restricción. Si es el origen, es la causa.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "intermedio"
  tags: ["analisis", "causas", "restricciones"]

variables:
  escenario: uno_de([["Máquina A (10 u/h) -> Máquina B (5 u/h) -> Embalaje (15 u/h)", "Embalaje"], ["Estación 1 (20 u/h) -> Estación 2 (15 u/h) -> Estación 3 (10 u/h)", "Estación 3"], ["Corte (50 u/h) -> Pegado (30 u/h) -> Secado (40 u/h)", "Pegado"]])

enunciado: "En un proceso de producción lineal, la capacidad total del sistema está limitada por el componente más lento. Según el escenario actual, el cuello de botella es la {escenario[0]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Máquina A", "Máquina B", "Embalaje", "Estación 1", "Estación 2", "Estación 3", "Corte", "Pegado", "Secado"]

explicacion: |
  El cuello de botella es la restricción que determina la capacidad máxima del sistema. En cualquier proceso en serie, el flujo está limitado por la etapa con menor capacidad (la más lenta).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "basico"
  tags: ["causa_raiz", "diagnostico"]

variables:
  problema: uno_de([["El servidor se cae cada vez que hay 100 usuarios simultáneos.", "Falta de memoria RAM"], ["Las ventas bajaron un 50% tras el cambio de diseño de la web.", "Interfaz de usuario confusa"], ["El motor se calienta después de 2 horas de uso continuo.", "Sistema de refrigeración insuficiente"]])

enunciado: "Si el problema detectado es '{problema[0]}', la causa raíz más probable es: ___."

respuesta: problema[1]
tipo: completar
respuestas_validas:
  - "Falta de memoria RAM"
  - "Interfaz de usuario confusa"
  - "Sistema de refrigeración insuficiente"

explicacion: |
  Para resolver un problema, primero debemos distinguir entre el síntoma (el servidor se cae) y la causa raíz (falta de memoria). Resolver el síntoma sin atacar la causa no soluciona el problema a largo plazo.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "basico"
  tags: ["restricciones", "presupuesto"]

variables:
  caso: uno_de([[1000, 800], [500, 600], [2000, 1500]])

enunciado: "Se propone una solución que cuesta {caso[0]} unidades, pero el presupuesto máximo disponible es de {caso[1]} unidades. ¿Es la solución viable bajo la restricción presupuestaria actual?"

respuesta: caso[0] <= caso[1]
tipo: vf
explicacion: |
  Una restricción es un límite impuesto que la solución debe respetar. Si el costo excede el presupuesto, la solución es inviable aunque sea técnicamente perfecta.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

enunciado: "Ordene los pasos lógicos para realizar un análisis de causa-raíz efectivo:"

pasos:
  - "Identificar el síntoma o problema visible"
  - "Analizar las restricciones del entorno"
  - "Identificar la causa raíz mediante el método de los 5 porqués"
  - "Proponer y validar una solución"

respuesta_orden: ["Identificar el síntoma o problema visible", "Analizar las restricciones del entorno", "Identificar la causa raíz mediante el método de los 5 porqués", "Proponer y validar una solución"]
tipo: ordenar
opciones_explicitas: ["Identificar el síntoma o problema visible", "Analizar las restricciones del entorno", "Identificar la causa raíz mediante el método de los 5 porqués", "Proponer y validar una solución"]

explicacion: |
  El orden lógico requiere primero entender qué está pasando (síntoma), qué nos impide actuar (restricciones), por qué está pasando (causa) y cómo arreglarlo (solución).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar_causas_y_restricciones"
  nivel: "avanzado"
  tags: ["restricciones", "optimización"]

variables:
  escenario: uno_de([["optimizar el tiempo de entrega", "reducir costos"], ["aumentar la calidad del producto", "reducir el uso de materiales"], ["expandir el mercado", "minimizar la inversión inicial"]])

enunciado: "Si el objetivo principal es {escenario[0]}, pero tenemos una restricción de presupuesto estricta, la solución óptima probablemente deba enfocarse en: ___."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["optimizar el tiempo de entrega", "reducir costos", "aumentar la calidad del producto", "reducir el uso de materiales", "expandir el mercado", "minimizar la inversión inicial"]

explicacion: |
  Las restricciones obligan a realizar "trade-offs" (compromisos). Si el dinero es limitado, la prioridad de la solución debe ser la eficiencia en costos para poder alcanzar el objetivo principal.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["causa-raiz", "diagnostico"]

respuesta: "causa_raiz"
tipo: "mc"
opciones_explicitas: ["síntoma", "consecuencia", "causa_raiz", "efecto secundario"]

enunciado: "Si un usuario reporta que una aplicación se cierra inesperadamente, y el equipo de soporte decide simplemente reiniciar el servidor para solucionar el problema, están tratando un ___ en lugar de la causa real."

explicacion: |
  Confundir un síntoma con la causa raíz es un error común. El síntoma es la manifestación visible (el cierre de la app), mientras que la causa raíz es el origen técnico que lo provoca. Si solo tratas el síntoma, el problema volverá a ocurrir.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["restricciones", "limitaciones"]

respuesta: verdadero
tipo: "vf"

enunciado: "Las restricciones de un problema son factores externos o internos que limitan las posibles soluciones (como el presupuesto o el tiempo) y deben ser analizadas antes de proponer una solución definitiva."

explicacion: |
  Correcto. Ignorar las restricciones (como el presupuesto, la tecnología disponible o la normativa legal) suele llevar a diseñar soluciones teóricamente perfectas pero imposibles de implementar en la realidad.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

respuesta_orden: ["identificar_problema", "analizar_causas", "definir_restricciones", "proponer_solucion"]
tipo: "ordenar"
opciones_explicitas: ["identificar_problema", "analizar_causas", "definir_restricciones", "proponer_solucion"]

enunciado: "Ordena los pasos lógicos para abordar un problema de manera estructurada, evitando saltar directamente a la solución sin entender el contexto."

explicacion: |
  El orden lógico asegura que la solución se base en hechos. Primero se identifica qué está pasando, luego se busca el porqué (causas), se entienden los límites (restricciones) y finalmente se diseña la solución.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "avanzado"
  tags: ["logica", "causalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Cada vez que aumenta la temperatura, las ventas de helados suben.", "correlacion"], ["Un cable suelto causa el cortocircuito en la máquina.", "causa"]]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["correlacion", "causa"]

enunciado: "En el siguiente escenario, ¿se ha identificado una causa o una correlación? {datos[escenario_idx][0]}"

explicacion: |
  Es vital distinguir entre dos eventos que ocurren al mismo tiempo (correlación) y un evento que produce directamente al otro (causalidad). Confundir esto lleva a aplicar soluciones ineficaces.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["terminologia", "conceptos"]

respuesta: "recursos"
tipo: "completar"
respuestas_validas:
  - "recursos"
  - "tiempo"
  - "presupuesto"

enunciado: "Cuando un proyecto tiene un límite de dinero asignado, estamos ante una restricción de ___."

explicacion: |
  El dinero es un recurso financiero. Las restricciones de recursos son límites en la cantidad de materia prima, personal, tiempo o dinero disponibles para ejecutar una solución.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["diagnostico", "causa_raiz"]

respuesta: "causa"
tipo: "completar"
respuestas_validas:
  - "causa"
  - "causa raíz"

enunciado: "En el análisis de problemas, mientras que un síntoma es la manifestación visible del error, la ___ es el origen real que lo produce."

explicacion: |
  Confundir un síntoma con la causa es uno de los errores más comunes. Si solo tratas el síntoma (ej. limpiar un derrame de aceite), el problema persistirá porque no atacaste la causa (ej. una junta rota).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["restricciones", "limitaciones"]

opciones_explicitas: ["Una limitación es un obstáculo externo que impide el éxito", "Una restricción es un parámetro obligatorio que define el espacio de solución", "Ambos términos son sinónimos en la gestión de proyectos", "Las restricciones son opcionales y las limitaciones son obligatorias"]

respuesta: "Una restricción es un parámetro obligatorio que define el espacio de solución"
tipo: "mc"

enunciado: "Si estamos diseñando un motor y debemos cumplir con una norma de emisiones de gases, estamos operando bajo una restricción. ¿Cuál de las siguientes afirmaciones describe correctamente qué es una restricción?"

explicacion: |
  Las restricciones son condiciones impuestas que el diseño DEBE satisfacer (hard constraints), mientras que las limitaciones suelen ser factores que restringen la libertad de acción pero no necesariamente invalidan la solución si se gestionan.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["causa_raiz", "verdadero_falso"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es verdadero o falso que, en un análisis de causa raíz, si una solución elimina el síntoma pero el problema vuelve a aparecer, significa que no se ha identificado la causa raíz?"

explicacion: |
  Verdadero. Si el problema reaparece, significa que solo se trató una consecuencia o síntoma, y la causa subyacente permanece activa.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "avanzado"
  tags: ["metodologia", "ordenar"]

opciones_explicitas: ["Identificar el síntoma", "Analizar las restricciones del entorno", "Determinar la causa raíz", "Implementar la solución definitiva"]

respuesta_orden: ["Identificar el síntoma", "Analizar las restricciones del entorno", "Determinar la causa raíz", "Implementar la solución definitiva"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para un proceso de resolución de problemas efectivo, desde el primer contacto con la anomalía hasta la resolución:"

explicacion: |
  Un proceso lógico requiere primero reconocer que algo anda mal (síntoma), entender qué límites tenemos para actuar (restricciones), encontrar el origen (causa raíz) y finalmente actuar.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["restricciones", "optimizacion"]

variables:
  caso: uno_de([["El presupuesto es de $500", "costo"], ["La entrega es mañana", "tiempo"], ["Solo se puede usar madera", "material"]])

opciones_explicitas: ["Las restricciones reducen la calidad de la solución", "Las restricciones definen el conjunto de soluciones posibles", "Las restricciones son causas del problema", "Las restricciones son síntomas del problema"]

respuesta: "Las restricciones definen el conjunto de soluciones posibles"
tipo: "mc"

enunciado: "Al analizar un problema, si nos enfrentamos a un límite de {caso[0]}, estamos ante una restricción de tipo {caso[1]}. ¿Cuál es la función principal de estas en el proceso de diseño?"

explicacion: |
  Las restricciones no son necesariamente "malas"; su función es delimitar el espacio de búsqueda para que las soluciones propuestas sean realistas y aplicables al contexto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["causa-raiz", "analisis"]

variables:
  datos: [["El servidor se cae cada vez que hay un pico de tráfico", "Falta de escalabilidad de hardware"], ["La máquina tiene fugas de aceite", "Desgaste de sellos de goma"], ["El cliente no compra el producto", "Precio superior al de la competencia"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Falta de escalabilidad de hardware", "Desgaste de sellos de goma", "Precio superior al de la competencia"]

enunciado: "En el siguiente caso: '{datos[idx][0]}', ¿cuál es la causa raíz más probable que debe abordarse para solucionar el problema?"

explicacion: |
  Para resolver un problema, es vital distinguir entre el síntoma (lo que se ve) y la causa raíz (lo que lo genera). En este caso, el síntoma es la caída del servidor, pero la causa es la falta de capacidad de escalado.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["restricciones", "presupuesto"]

variables:
  datos: [[1500, "Presupuesto excedido"], [500, "Presupuesto suficiente"], [2000, "Presupuesto insuficiente"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Presupuesto excedido"
  - "Presupuesto suficiente"
  - "Presupuesto insuficiente"

enunciado: "Se tiene un proyecto con un costo estimado de {datos[idx][0]} USD. Si el límite máximo de gasto permitido es de 1000 USD, la restricción principal es: ___"

explicacion: |
  Las restricciones financieras son límites que condicionan la solución. Si el costo estimado supera el límite, la restricción es el presupuesto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "basico"
  tags: ["viabilidad", "logica"]

respuesta: falso
tipo: vf
enunciado: "Si un problema requiere una solución que debe funcionar en un entorno sin conexión a internet, pero la solución propuesta depende exclusivamente de la nube, ¿es técnicamente viable esa solución?"

explicacion: |
  Una solución que depende de un recurso inexistente en el entorno de aplicación no es viable debido a la restricción de conectividad.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "avanzado"
  tags: ["metodologia", "orden"]

respuesta_orden: ["Identificar el síntoma", "Analizar las causas", "Definir restricciones", "Evaluar soluciones"]
tipo: ordenar
opciones_explicitas: ["Identificar el síntoma", "Analizar las causas", "Definir restricciones", "Evaluar soluciones"]

enunciado: "Ordene los pasos lógicos para el análisis de un problema antes de proponer una solución final:"

explicacion: |
  El proceso lógico comienza con la observación del síntoma, sigue con la búsqueda de la causa, la delimitación de qué podemos y no podemos hacer (restricciones) y finalmente la evaluación de alternativas.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "analizar-causas-y-restricciones"
  nivel: "intermedio"
  tags: ["tiempo", "plazos"]

variables:
  escenario: [["Entrega en 2 días", "Tiempo insuficiente"], ["Entrega en 2 meses", "Tiempo suficiente"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Tiempo insuficiente", "Tiempo suficiente"]

enunciado: "Si la tarea requiere 5 días de trabajo pero el plazo de entrega es de '{escenario[idx][0]}', la restricción temporal se traduce en: ___"

explicacion: |
  Cuando la duración necesaria de la solución es mayor al tiempo disponible, la restricción de tiempo actúa como un limitador crítico que impide la ejecución de la solución ideal.
```

## Sección: disenar-posibles-soluciones (25 preguntas)

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["definicion", "alternativas"]

tipo: mc
opciones_explicitas: ["Un conjunto de soluciones únicas y finales", "Un conjunto de diversos caminos o propuestas para resolver un problema", "Una lista de errores cometidos durante el proceso"]

enunciado: "En el proceso de resolución de problemas, diseñar posibles soluciones implica generar ___________ para abordar el desafío de distintas maneras."

respuesta: "Un conjunto de diversos caminos o propuestas para resolver un problema"

explicacion: |
  Diseñar alternativas significa expandir el abanico de opciones antes de tomar una decisión, evitando el sesgo de quedarse con la primera idea que surge.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["pensamiento-divergente", "creatividad"]

tipo: vf
respuesta: verdadero

enunciado: "El pensamiento divergente es una técnica fundamental durante la fase de diseño de soluciones, ya que busca generar la mayor cantidad de ideas posible sin juzgarlas inicialmente."

explicacion: |
  El pensamiento divergente permite la exploración libre, mientras que el pensamiento convergente se usa más adelante para filtrar y elegir la mejor opción.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Generar múltiples alternativas", "Evaluar las opciones", "Implementar la solución elegida"]

respuesta_orden: ["Identificar el problema", "Generar múltiples alternativas", "Evaluar las opciones", "Implementar la solución elegida"]

enunciado: "Ordena cronológicamente las etapas lógicas para pasar de un problema a una solución efectiva:"

explicacion: |
  No se puede evaluar algo que no se ha generado, y no se debe implementar sin haber evaluado previamente las alternativas.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["riesgo", "sesgo"]

tipo: mc
opciones_explicitas: ["Aumentar la eficiencia", "Reducir el riesgo de error", "Ahorrar tiempo de ejecución"]

enunciado: "El objetivo principal de generar varias alternativas antes de elegir una es ___________."

respuesta: "Reducir el riesgo de error"

explicacion: |
  Al tener múltiples opciones, si la primera no funciona o tiene fallos ocultos, contamos con planes de contingencia o mejores rutas.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["evaluacion", "criterios"]

tipo: completar
respuestas_validas:
  - "Costo"

respuesta: "Costo"

enunciado: "Si al evaluar una solución priorizamos que sea la más económica posible, el criterio de evaluación principal es el ___________."

pasos:
  - "Identificar el parámetro de prioridad en el enunciado."
  - "Relacionar el parámetro con el criterio de evaluación correspondiente."

explicacion: |
  Cada solución debe ser evaluada bajo criterios específicos (tiempo, dinero, calidad, esfuerzo) para poder compararlas objetivamente.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["creatividad", "alternativas"]

variables:
  escenario: uno_de([["El problema es que los alumnos llegan tarde porque el bus es muy lento", "cambiar_ruta", "cambiar_horario", "comprar_bus_nuevo"], ["El problema es que los alumnos llegan tarde porque el bus es muy lento", "cambiar_ruta", "cambiar_horario", "comprar_bus_nuevo"], ["El problema es que los alumnos llegan tarde porque el bus es muy lento", "cambiar_ruta", "cambiar_horario", "comprar_bus_nuevo"]])

enunciado: "Un colegio detecta que los alumnos llegan tarde debido a que la ruta actual del autobús es muy lenta. Antes de decidir, el equipo debe generar alternativas. Si la estrategia elegida es {escenario[1]}, ¿cuál es el objetivo principal?"

opciones_explicitas: ["Optimizar el tiempo de viaje", "Aumentar el costo", "Cambiar la flota de vehículos"]

respuesta: "Optimizar el tiempo de viaje"
tipo: mc

explicacion: |
  Diseñar soluciones implica evaluar diferentes caminos. Cambiar la ruta busca eficiencia temporal sin necesidad de inversión de capital en vehículos nuevos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["criterios", "evaluacion"]

variables:
  criterio: uno_de([["Costo", "Efectividad", "Tiempo"], ["Costo", "Efectividad", "Tiempo"], ["Costo", "Efectividad", "Tiempo"]])

enunciado: "Al diseñar soluciones para un problema de logística, se comparan las alternativas bajo el criterio de {criterio[0]}. Si la solución A cuesta $100 y la B cuesta $500, la solución A es preferible bajo este criterio."

respuesta: verdadero
tipo: vf

explicacion: |
  Evaluar la viabilidad económica es un paso crítico en el diseño de soluciones para asegurar que la alternativa elegida sea sostenible.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["pasos", "metodologia"]

enunciado: "Para resolver un problema mediante el diseño de alternativas, se deben seguir estos pasos en el orden correcto:"

opciones_explicitas: ["Identificar el problema", "Generar múltiples soluciones", "Evaluar alternativas", "Implementar la mejor"]

respuesta_orden: ["Identificar el problema", "Generar múltiples soluciones", "Evaluar alternativas", "Implementar la mejor"]
tipo: ordenar

explicacion: |
  No se puede evaluar algo que no se ha generado, y no se puede implementar algo que no ha sido evaluado. El orden lógico es fundamental.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["pensamiento_divergente", "brainstorming"]

variables:
  caso: uno_de([["Un restaurante pierde clientes por la espera", "reducir_porciones", "mejorar_servicio", "abrir_sucursal"], ["Un restaurante pierde clientes por la espera", "reducir_porciones", "mejorar_servicio", "abrir_sucursal"]])

enunciado: "En el caso de {caso[0]}, una solución de tipo 'mejorar_servicio' podría consistir en ___."

respuestas_validas:
  - "capacitar al personal"
  - "contratar más meseros"
  - "implementar un sistema de turnos"

respuesta: "capacitar al personal"
tipo: completar

explicacion: |
  El pensamiento divergente busca múltiples respuestas. En este ejercicio, la capacitación es una solución directa al problema de la percepción del servicio.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "avanzado"
  tags: ["errores", "decision"]

enunciado: "Si un equipo de diseño elige la primera solución que aparece en una lluvia de ideas sin haber explorado más opciones, ¿está aplicando un proceso de diseño de soluciones completo?"

respuesta: falso
tipo: vf

explicacion: |
  Elegir la primera opción es un error cognitivo llamado 'sesgo de anclaje'. El diseño de soluciones requiere explorar el espacio de posibilidades para encontrar la opción óptima.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["sesgos", "creatividad"]

respuesta: falso
tipo: vf

enunciado: "En el proceso de diseño de soluciones, la primera idea que surge suele ser la más óptima y la que menos riesgos presenta."

explicacion: |
  Falso. La primera idea suele ser la más obvia o convencional. El proceso de diseño requiere generar múltiples alternativas para evitar el sesgo de anclaje y encontrar soluciones más innovadoras o eficientes.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["pensamiento-critico", "alternativas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[ "un error en una línea de código", "un retraso en la entrega de un proyecto" ], [ "una queja de un cliente", "una falla en un componente mecánico" ]]

respuesta: "generar múltiples alternativas"
tipo: completar
respuestas_validas:
  - "generar múltiples alternativas"
  - "analizar la primera opción"
  - "implementar la solución rápida"

enunciado: "Ante el problema de {escenarios[escenario_idx][0]}, una práctica fundamental para evitar el pensamiento convergente prematuro es ___."

explicacion: |
  Generar múltiples alternativas permite comparar pros y contras antes de comprometer recursos en una única dirección.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["brainstorming", "creatividad"]

respuesta: "Cantidad sobre calidad"
tipo: mc
opciones_explicitas: ["Calidad sobre cantidad", "Cantidad sobre calidad", "Calidad y cantidad simultáneamente", "No se debe priorizar ninguna"]

enunciado: "Durante la fase inicial de generación de soluciones (divergencia), ¿en qué aspecto se debe priorizar para maximizar la creatividad?"

explicacion: |
  En la fase de divergencia, el objetivo es la cantidad. El juicio crítico y la selección de calidad pertenecen a la fase de convergencia posterior.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Definir el problema", "Generar alternativas", "Evaluar opciones", "Seleccionar la mejor"]
tipo: ordenar
opciones_explicitas: ["Generar alternativas", "Definir el problema", "Seleccionar la mejor", "Evaluar opciones"]

enunciado: "Ordena las fases lógicas para pasar de un problema a una solución efectiva:"

explicacion: |
  No se pueden generar soluciones si no se ha definido el problema correctamente, y no se debe seleccionar sin antes evaluar las alternativas generadas.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "avanzado"
  tags: ["sesgos", "evaluacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[ "una falla en el motor", "un error en el software" ], [ "una caída en las ventas", "un error de comunicación" ]]
  soluciones: [[ "cambiar el aceite", "revisar la bujía" ], [ "reentrenar al equipo", "cambiar el manual" ]]

respuesta: falso
tipo: vf

enunciado: "Si al intentar resolver {casos[caso_idx][0]} solo busco información que respalde la solución de {soluciones[caso_idx][0]}, estoy aplicando un proceso de diseño de soluciones robusto."

explicacion: |
  Falso. Eso es el sesgo de confirmación. Un buen diseño de soluciones requiere buscar activamente evidencia que desmienta nuestra solución preferida para validarla.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["pensamiento_creativo", "procesos"]

respuesta: "divergencia"
tipo: "completar"
respuestas_validas:
  - "divergencia"

enunciado: "Mientras que el pensamiento convergente busca una única solución correcta a un problema, el pensamiento ___ se enfoca en la generación de múltiples alternativas y posibilidades."

explicacion: |
  La fase de diseño requiere pensamiento divergente para expandir el abanico de opciones antes de pasar a la fase de selección (convergencia).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["brainstorming", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "En una sesión de lluvia de ideas (brainstorming) para diseñar soluciones, la evaluación crítica de las ideas debe realizarse de forma inmediata para descartar las que parezcan poco viables. ¿Es esto correcto?"

explicacion: |
  No. Para maximizar la creatividad, primero se debe fomentar la cantidad de ideas (divergencia) sin juicios, y solo en una etapa posterior se realiza la evaluación crítica.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "una opción es una alternativa posible, mientras que una solución es la respuesta definitiva al problema"
tipo: "mc"
opciones_explicitas: ["una opción es una alternativa posible, mientras que una solución es la respuesta definitiva al problema", "una opción es un error de diseño, mientras que una solución es el objetivo", "una opción es un recurso, mientras que una solución es un proceso", "no hay diferencia entre ambos términos"]

enunciado: "Al diseñar posibles soluciones, ¿cuál es la distinción fundamental entre generar 'opciones' y encontrar la 'solución'?"

explicacion: |
  Generar opciones es parte del proceso de exploración; la solución es el resultado final tras evaluar y seleccionar la mejor opción.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Identificación del problema", "Generación de alternativas", "Evaluación de opciones", "Selección de la solución"]
tipo: "ordenar"
opciones_explicitas: ["Identificación del problema", "Generación de alternativas", "Evaluación de opciones", "Selección de la solución"]

enunciado: "Ordena los pasos lógicos para un proceso de diseño de soluciones efectivo:"

explicacion: |
  No se puede evaluar lo que no se ha generado, y no se puede seleccionar sin haber comparado las alternativas previamente identificadas.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar_posibles_soluciones"
  nivel: "avanzado"
  tags: ["sesgos", "cognicion"]

respuesta: "sesgo de anclaje"
tipo: "completar"
respuestas_validas:
  - "sesgo de anclaje"

enunciado: "Cuando un equipo de diseño se queda estancado en la primera idea que surge, ignorando otras alternativas más efectivas, está cayendo en el ___."

explicacion: |
  El sesgo de anclaje ocurre cuando la primera información o idea recibida tiene un peso desproporcionado en la toma de decisiones, limitando la exploración de soluciones alternativas.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["alternativas", "decision"]

variables:
  escenario: uno_de([["El transporte de carga es muy costoso", "optimizar rutas"], ["La empresa no logra cubrir toda la demanda de entregas a tiempo", "contratar más vehículos"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["optimizar rutas", "contratar más vehículos", "cambiar de proveedor", "no hacer nada"]

enunciado: "Ante el problema de que {escenario[0]}, ¿cuál sería la alternativa más directa para abordar la situación?"

explicacion: |
  Diseñar soluciones requiere identificar si el problema es de costo, de capacidad o de tiempo. En este caso, la alternativa seleccionada ataca directamente la raíz del problema planteado.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["evaluacion", "riesgo"]

variables:
  medida: uno_de(["Implementar software nuevo", "Cambiar la política de horarios", "Reducir el presupuesto", "Aumentar la jornada laboral"])

respuesta: falso
tipo: vf
enunciado: "Si decides aplicar la medida de: '{medida}', ¿consideras que la solución es viable sin realizar un estudio de impacto previo?"

explicacion: |
  En el diseño de soluciones, una alternativa puede ser lógica pero no viable sin un análisis previo. En los cuatro casos presentados, la respuesta es falsa debido a la falta de estudio de impacto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Identificar el problema", "Generar alternativas", "Evaluar opciones", "Elegir la mejor"]
tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Generar alternativas", "Evaluar opciones", "Elegir la mejor"]

enunciado: "Ordena los pasos lógicos para el diseño de una solución efectiva ante un problema detectado."

explicacion: |
  El proceso creativo y de resolución comienza con la comprensión del problema, seguido de la divergencia (generar opciones), la convergencia (evaluar) y finalmente la decisión.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "intermedio"
  tags: ["estrategia", "pensamiento-divergente"]

variables:
  contexto_idx: uno_de([0, 1])
  contextos: ["El cliente pide rapidez en la entrega", "El cliente pide precisión y calidad en el producto final"]
  termino_clave: ["velocidad", "precisión"]

respuesta: termino_clave[contexto_idx]
tipo: completar

enunciado: "Si el problema principal detectado es que '{contextos[contexto_idx]}', la palabra clave que resume la necesidad del cliente es ____."

explicacion: |
  El diseño de soluciones debe estar alineado con la necesidad principal. Si la necesidad es rapidez, la palabra clave es velocidad; si es calidad del resultado, la palabra clave es precisión.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "disenar-posibles-soluciones"
  nivel: "avanzado"
  tags: ["criterios", "seleccion"]

variables:
  criterio_idx: uno_de([0, 1])
  criterios: ["Costo de implementación", "Facilidad de uso"]
  valor_criterio: ["alto", "bajo"]

respuesta: valor_criterio[criterio_idx]
tipo: mc
opciones_explicitas: ["alto", "bajo", "medio", "nulo"]

enunciado: "Al evaluar una alternativa de solución, si el factor de {criterios[criterio_idx]} es ____, la solución podría ser difícil de adoptar a pesar de ser efectiva."

explicacion: |
  Evaluar las restricciones es parte del diseño: un costo de implementación alto, o una facilidad de uso baja, dificultan que una solución efectiva termine siendo adoptada.
```

## Sección: identificar-alternativas (25 preguntas)

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

## Sección: implementar-la-solucion (25 preguntas)

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["definicion", "etapas"]

respuesta: "implementar"
tipo: completar
respuestas_validas:
  - "implementar"

enunciado: "La etapa de ___ consiste en llevar a la práctica la solución que ha sido seleccionada tras el proceso de evaluación de alternativas."

explicacion: |
  La implementación es la fase donde se ejecutan las acciones planificadas para resolver el problema original.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["planificacion", "recursos"]

respuesta: verdadero
tipo: vf
enunciado: "¿Es necesario realizar una asignación de recursos y una planificación de tareas antes de iniciar la implementación de una solución?"

pasos:
  - "Identificar los recursos necesarios (tiempo, personas, herramientas)."
  - "Establecer un cronograma de actividades."

explicacion: |
  Para que la implementación sea exitosa, es fundamental contar con una hoja de ruta que defina qué, cuándo y con qué se ejecutará la solución.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["riesgos", "monitoreo"]

variables:
  escenario: uno_de([["imprevistos", "ajustar la solución"], ["éxito total", "finalizar el proceso"], ["falta de recursos", "replanificar"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["ajustar la solución", "finalizar el proceso", "replanificar"]

enunciado: "Durante la implementación, si se detectan {escenario[0]}, la acción inmediata debe ser ___."

explicacion: |
  La implementación no es un proceso estático; requiere flexibilidad para adaptarse a los cambios o dificultades que surjan en el entorno.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["orden", "proceso"]

respuesta_orden: ["asignar", "ejecutar", "monitorear", "evaluar"]
tipo: ordenar
opciones_explicitas: ["asignar", "ejecutar", "monitorear", "evaluar"]

enunciado: "Ordene cronológicamente las acciones típicas de un proceso de implementación de una solución técnica:"

explicacion: |
  Primero se asignan los recursos, luego se ejecuta la acción, se monitorea el progreso y finalmente se evalúa el resultado obtenido.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["monitoreo", "control"]

variables:
  tipo_monitoreo: uno_de([["proactivo", "prevenir errores"], ["reactivo", "corregir errores"]])
  dato: tipo_monitoreo[1]

respuesta: dato
tipo: mc
opciones_explicitas: ["prevenir errores", "corregir errores"]

enunciado: "Si el monitoreo se realiza de forma {tipo_monitoreo[0]}, el objetivo principal es ___."

explicacion: |
  El monitoreo puede ser proactivo (para anticiparse a fallos) o reactivo (para responder cuando el fallo ya ocurrió).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Una vez que se ha diseñado una solución teórica para un problema de logística, el siguiente paso fundamental para llevarla a la práctica es la ___."

pasos:
  - "Comparar el diseño con los recursos disponibles"
  - "Ejecutar la solución en el entorno real"

respuestas_validas:
  - "ejecución"
  - "implementación"
tipo: completar

explicacion: |
  La implementación es la fase donde la solución diseñada se pone en marcha para transformar la situación actual en la situación deseada.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["recursos", "planificacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["software", "desarrollo de código", "programador"], ["manual", "guía de procedimientos", "escritor de procesos"]]

respuestas_validas:
  - datos[idx][2]
respuesta: datos[idx][2]
tipo: completar
tolerancia_abs: 0

enunciado: "En un proyecto de optimización de tiempos, si la solución elegida es de tipo {datos[idx][1]}, el recurso principal necesario es el ___."

explicacion: |
  Cada tipo de solución requiere un perfil de ejecutor distinto: talento técnico para software o documentación para procesos manuales.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["evaluacion", "control"]

enunciado: "Durante la implementación de un nuevo protocolo de seguridad en una fábrica, se observa que el tiempo de respuesta es mayor al previsto en el diseño. ¿Cuál es la acción correcta según la metodología de resolución de problemas?"

opciones_explicitas: ["Ignorar la desviación si la solución funciona", "Ajustar la solución al entorno real", "Volver al paso de identificación del problema", "Descartar la solución por completo"]
tipo: mc
respuesta: "Ajustar la solución al entorno real"

explicacion: |
  La implementación no es un proceso estático; requiere ajustes iterativos basados en la retroalimentación del entorno real.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["secuencia", "logica"]

enunciado: "Ordene los pasos lógicos para implementar una nueva política de reciclaje en una empresa:"

opciones_explicitas: ["Comunicar la nueva política a los empleados", "Instalar los contenedores de reciclaje", "Capacitar al personal sobre la separación de residuos", "Monitorear la efectividad del sistema"]
tipo: ordenar

respuesta_orden: ["Comunicar la nueva política a los empleados", "Instalar los contenedores de reciclaje", "Capacitar al personal sobre la separación de residuos", "Monitorear la efectividad del sistema"]

explicacion: |
  Primero se informa (comunicación), luego se provee la infraestructura (instalación), se enseña a usarla (capacitación) y finalmente se controla (monitoreo).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["viabilidad", "logica"]

enunciado: "Si una solución propuesta requiere un presupuesto de $10.000 pero la empresa solo dispone de $5.000, ¿es la implementación de esa solución viable en este momento?"

tipo: mc
opciones_explicitas: [falso, verdadero]
respuesta: falso

explicacion: |
  La viabilidad económica es un factor crítico; si los recursos son insuficientes, la implementación no puede llevarse a cabo según el plan original.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["planificacion", "errores"]

respuesta: falso
tipo: vf

enunciado: "Es recomendable pasar directamente de la fase de diseño de la solución a la implementación técnica sin realizar una validación previa de la lógica del plan."

explicacion: |
  Saltar la validación del diseño aumenta el riesgo de implementar una solución que es técnicamente correcta pero que no resuelve el problema original.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["errores", "gestion"]

variables:
  escenario: uno_de([["un desarrollador escribe código sin haber definido los requisitos", "falta de definición"], ["un equipo construye una herramienta antes de probar el prototipo", "falta de prototipado"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["falta de definición", "falta de prototipado", "exceso de documentación", "falta de recursos"]

enunciado: "Si un equipo comienza la construcción de una herramienta compleja sin haber validado la funcionalidad mediante un modelo simplificado, ¿qué error de implementación está cometiendo?"

explicacion: |
  La implementación prematura sin prototipado suele derivar en un alto costo de corrección de errores estructurales.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta_orden: ["Definir recursos", "Ejecutar la solución", "Monitorear resultados", "Evaluar efectividad"]
tipo: ordenar

opciones_explicitas: ["Definir recursos", "Ejecutar la solución", "Monitorear resultados", "Evaluar efectividad"]

enunciado: "Ordene las etapas lógicas de la fase de implementación, desde la preparación hasta la evaluación final."

explicacion: |
  La implementación no termina con la ejecución; requiere un monitoreo constante y una evaluación para asegurar que el objetivo se cumplió.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["calidad", "errores"]

variables:
  caso: uno_de([["El sistema funciona para el caso ideal pero falla con datos atípicos", "error de robustez"], ["La solución resuelve el problema pero es demasiado costosa para el presupuesto", "error de viabilidad"]])

respuesta: caso[1]
tipo: completar

enunciado: "En un escenario donde '{caso[0]}', decimos que la implementación presenta un: ___"

explicacion: |
  Una implementación exitosa debe ser robusta, es decir, capaz de manejar variaciones y casos borde, no solo el camino feliz.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "mantenimiento"]

respuesta: "Documentación técnica"
tipo: completar
respuestas_validas:
  - "Documentación técnica"
  - "Manual de usuario"
  - "Código fuente"

enunciado: "Para asegurar que la solución implementada pueda ser mantenida o replicada en el futuro, es indispensable generar la ___."

explicacion: |
  Sin documentación, la implementación queda aislada y se vuelve extremadamente difícil de escalar o reparar por otros miembros del equipo.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["conceptos", "fases"]

respuesta: "implementar"
tipo: "completar"
respuestas_validas:
  - "implementar"
  - "implementación"

enunciado: "Mientras que la fase de ideación se centra en la generación de múltiples alternativas de solución, la fase de ___ se enfoca en la ejecución técnica y puesta en marcha de la alternativa seleccionada."

explicacion: |
  La ideación es un proceso creativo de divergencia, mientras que la implementación es un proceso de acción y ejecución de la solución elegida.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["diferencias", "gestion"]

opciones_explicitas: ["La planificación define el 'cómo' y los recursos, mientras que la implementación es la ejecución real de dicho plan.", "La planificación es el resultado final, mientras que la implementación es el proceso de diseño."]

respuesta: "La planificación define el 'cómo' y los recursos, mientras que la implementación es la ejecución real de dicho plan."
tipo: "mc"

enunciado: "En el ciclo de resolución de problemas, ¿cuál es la distinción fundamental entre la planificación y la implementación?"

explicacion: |
  La planificación es el diseño de la estrategia (el mapa), mientras que la implementación es el acto de seguir ese mapa para alcanzar el objetivo.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["verificacion", "naturaleza"]

respuesta: falso
tipo: "vf"

enunciado: "La implementación de una solución es un proceso estático que no requiere ajustes una vez que se ha comenzado la ejecución."

explicacion: |
  Falso. La implementación suele ser iterativa; la retroalimentación durante la ejecución a menudo requiere realizar ajustes en la solución original.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

opciones_explicitas: ["Asignación de recursos", "Ejecución de tareas", "Monitoreo de resultados"]

respuesta_orden: ["Asignación de recursos", "Ejecución de tareas", "Monitoreo de resultados"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente las etapas lógicas para llevar a la práctica una solución técnica:"

explicacion: |
  Primero se deben disponer los medios (recursos), luego realizar el trabajo (ejecución) y finalmente verificar si funciona (monitoreo).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["evaluacion", "comparacion"]

enunciado: "Si la implementación se define como el proceso de 'hacer', la evaluación de la solución se distingue por ser el proceso de ___."

respuestas_validas:
  - "medir"
  - "evaluar"
  - "verificar"
tipo: "completar"

explicacion: |
  La implementación busca la acción, mientras que la evaluación busca determinar la efectividad y calidad de dicha acción mediante métricas.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["algoritmos", "implementacion"]

variables:
  idx: uno_de([0, 1])
  algoritmos: ["búsqueda lineal", "búsqueda binaria"]
  listas: [[10, 20, 30, 40, 50], [5, 15, 25, 35, 45]]
  algoritmo: algoritmos[idx]
  lista: listas[idx]

respuesta: lista[3]
tipo: completar
tolerancia_abs: 0

enunciado: "Se ha diseñado una solución para encontrar un elemento en una lista ordenada. Si implementamos una {algoritmo} en el array {lista}, ¿cuál es el valor del elemento en la posición con índice 3?"

pasos:
  - "Identificar el algoritmo según el escenario."
  - "Localizar el índice 3 en la lista proporcionada."

explicacion: |
  En el escenario seleccionado, el valor en la posición 3 (cuarto elemento) de la lista es {lista[3]}.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "basico"
  tags: ["tipos_de_datos", "validación"]

variables:
  caso: uno_de([[1, "string", "texto"], [2, "int", "numero"]])

respuesta: caso[2] == "numero"
tipo: vf
enunciado: "Al implementar la solución, el sistema recibe un dato de tipo {caso[1]}. ¿Es correcto afirmar que el tipo de dato es 'int'?"

explicacion: |
  En este caso, el tipo es {caso[1]}, por lo tanto, la afirmación de que es 'int' es {caso[2] == "numero"}.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["flujo", "pasos"]

variables:
  idx: uno_de([0, 1])
  nombres: ["desarrollo de software (E-P-S)", "ciclo de programación"]
  pasos_proceso: [["Entrada", "Procesamiento", "Salida"], ["Diseño", "Codificación", "Pruebas"]]
  nombre: nombres[idx]
  pasos_orden: pasos_proceso[idx]

respuesta_orden: pasos_orden
tipo: ordenar

opciones_explicitas: pasos_orden

enunciado: "Para llevar a la práctica la solución elegida, se debe seguir un orden lógico de implementación. Ordene los pasos correspondientes al proceso de {nombre}."

explicacion: |
  El orden correcto para el proceso de {nombre} es: {pasos_orden}.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "avanzado"
  tags: ["errores", "excepciones"]

respuesta: "Error de Índice"
tipo: completar

enunciado: "Durante la implementación, el programa falla al intentar acceder a una posición inexistente en un array. Este error se clasifica como: ___"

explicacion: |
  El error de acceso a un índice inexistente se conoce como Error de Índice.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "implementar_la_solucion"
  nivel: "intermedio"
  tags: ["estructuras", "decisión"]

variables:
  escenario: uno_de([["una lista de tareas pendientes", "Lista"], ["un diccionario de usuarios con sus IDs", "Diccionario"]])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["Lista", "Diccionario", "Árbol", "Grafo"]

enunciado: "Para implementar la solución de un sistema de gestión de {escenario[0]}, la estructura de datos más eficiente es un:"

explicacion: |
  Para gestionar {escenario[0]}, la estructura más adecuada es un {escenario[1]}: una lista de tareas se recorre en orden, mientras que un conjunto de usuarios con IDs se busca por clave, lo cual encaja mejor con un diccionario.
```

