# Resolucion Problemas — Detectar el problema (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Definición del Problema

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

### 2 — Verdadero o Falso: El Enfoque en la Solución

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

### 3 — Identificación de la Brecha

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

### 4 — Fases de la Detección

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

### 5 — El Problema vs. La Solución

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

### 6 — El síntoma vs. El problema

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

### 7 — Identificación de variables

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

### 8 — El proceso de diagnóstico

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

### 9 — Veracidad del diagnóstico

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

### 10 — Definición del problema

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

### 11 — El síntoma vs El problema

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

### 12 — El error de la solución prematura

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

### 13 — Identificación de la causa raíz

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

### 14 — Pasos para definir el problema

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

### 15 — El problema mal definido

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

### 16 — Identificación vs. Síntoma

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

### 17 — Problema vs. Solución

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

### 18 — Problema vs. Desafío

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

### 19 — Etapas de la Detección

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

### 20 — El problema real

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

### 21 — El síntoma vs El problema

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

### 22 — Identificación de variables

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

### 23 — ¿Es un problema real?

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

### 24 — Secuencia de diagnóstico

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

### 25 — El error de la solución prematura

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
