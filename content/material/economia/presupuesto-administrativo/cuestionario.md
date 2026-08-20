# Economia — Presupuesto administrativo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Presupuesto

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas:
  - "estimación anticipada de ingresos y gastos"
  - "estimación de ingresos y gastos"

enunciado: "El presupuesto se define como una ___ para un período determinado."

explicacion: |
  El presupuesto es la herramienta de planificación que permite proyectar los recursos que entrarán (ingresos) y los que saldrán (gastos) de una organización.
```

### 2 — Componentes del Presupuesto

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["componentes", "ingresos", "gastos"]

opciones_explicitas: ["Ingresos y Gastos", "Activos y Pasivos", "Oferta y Demanda"]
respuesta: "Ingresos y Gastos"
tipo: mc

enunciado: "Un presupuesto se compone fundamentalmente de dos tipos de flujos: los ___."

explicacion: |
  Los ingresos representan las entradas de dinero, mientras que los gastos representan las salidas de recursos necesarias para la operación.
```

### 3 — Carácter del Presupuesto

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["naturaleza", "planificacion"]

respuesta: verdadero
tipo: vf

enunciado: "El presupuesto tiene un carácter preventivo, ya que se elabora antes de que ocurran los hechos económicos."

explicacion: |
  Correcto. Al ser una herramienta de planificación, su objetivo es anticiparse a los eventos para tomar decisiones informadas.
```

### 4 — Etapas del Ciclo Presupuestario

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_presupuestario"]

opciones_explicitas: ["Elaboración", "Ejecución", "Control"]
respuesta_orden: ["Elaboración", "Ejecución", "Control"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas principales del ciclo presupuestario:"

explicacion: |
  Primero se planifica (elaboración), luego se pone en marcha (ejecución) y finalmente se compara lo real con lo proyectado (control).
```

### 5 — Desviaciones Presupuestarias

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["desviaciones", "control"]

respuesta: "Desfavorable"
tipo: mc
opciones_explicitas: ["Favorable", "Desfavorable"]

enunciado: "Si los ingresos reales son menores a los presupuestados, la desviación se considera: ___"

pasos:
  - "Comparar el valor real obtenido con el valor estimado."
  - "Determinar si la diferencia impacta positivamente o negativamente en el saldo."

explicacion: |
  Una desviación es favorable cuando el resultado real mejora la posición financiera respecto al plan, y desfavorable cuando la empeora.
```

### 6 — El concepto de presupuesto

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas:
  - "estimación anticipada de ingresos y gastos"

enunciado: "El presupuesto se define como una ___ para un período determinado."

explicacion: |
  El presupuesto es la herramienta de planificación que permite proyectar la situación financiera de una organización mediante la cuantificación de sus ingresos y gastos esperados.
```

### 7 — Análisis de saldo presupuestario

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["calculo", "saldo"]

variables:
  datos: [["Ingresos: 5000, Gastos: 4200", "800"], ["Ingresos: 3000, Gastos: 3500", "-500"], ["Ingresos: 1000, Gastos: 1000", "0"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["800", "-500", "0", "1000"]

enunciado: "Si una empresa tiene un escenario de {datos[idx][0]}, ¿cuál es el saldo presupuestario resultante?"

explicacion: |
  El saldo se calcula restando los gastos a los ingresos: {datos[idx][0]}. El resultado es {datos[idx][1]}.
```

### 8 — Verdadero o Falso: El carácter del presupuesto

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso

tipo: vf

enunciado: "Un presupuesto es un documento de carácter histórico que solo registra los movimientos financieros que ya han ocurrido."

explicacion: |
  Falso. El presupuesto es una herramienta de planificación hacia el futuro (proyectiva), no un registro de hechos pasados (contabilidad histórica).
```

### 9 — Proceso de elaboración presupuestaria

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta_orden: ["Definición de objetivos", "Estimación de ingresos", "Asignación de gastos", "Control y seguimiento"]
tipo: ordenar
opciones_explicitas: ["Definición de objetivos", "Estimación de ingresos", "Asignación de gastos", "Control y seguimiento"]

enunciado: "Ordene los pasos lógicos para la gestión de un presupuesto administrativo:"

explicacion: |
  Primero se definen las metas, luego se proyecta lo que entrará de dinero, se distribuye para cubrir las necesidades y finalmente se controla que se cumpla lo planeado.
```

### 10 — Cálculo de déficit operativo

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["calculo", "déficit"]

variables:
  escenario: [["Ingresos: 12000, Gastos: 15000", "3000"], ["Ingresos: 8000, Gastos: 7500", "500"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "En el escenario de {escenario[idx][0]}, ¿cuál es el monto del déficit (valor absoluto de la diferencia negativa)?"

pasos:
  - "Identificar ingresos y gastos según el escenario"
  - "Calcular la diferencia: Ingresos - Gastos"
  - "Obtener el valor absoluto del resultado"

explicacion: |
  El déficit ocurre cuando los gastos superan a los ingresos. En este caso, el déficit es de {escenario[idx][1]}.
```

### 11 — El concepto de presupuesto

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: "estimación anticipada de ingresos y gastos"
tipo: completar
respuestas_validas:
  - "estimación anticipada de ingresos y gastos"
  - "estimación de ingresos y gastos"

enunciado: "El presupuesto se define como una ___ realizada para un período determinado."

explicacion: |
  El presupuesto es una herramienta de planificación que proyecta los recursos que entrarán (ingresos) y los que saldrán (gastos) de una entidad.
```

### 12 — ¿Presupuesto o Registro contable?

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["diferencia_conceptos"]

variables:
  es_proyectivo: verdadero

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la contabilidad, que registra hechos ya ocurridos, el presupuesto es una herramienta de carácter proyectivo."

explicacion: |
  Correcto. La contabilidad es histórica (mira hacia atrás), mientras que el presupuesto es una herramienta de planificación (mira hacia adelante).
```

### 13 — El error de la rigidez presupuestaria

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["gestion", "errores"]

tipo: mc
opciones_explicitas: ["El presupuesto es una norma inamovible que no admite cambios ante contingencias", "El presupuesto debe ser flexible para adaptarse a cambios en el entorno", "Un presupuesto rígido es siempre el ideal para una empresa"]

respuesta: "El presupuesto debe ser flexible para adaptarse a cambios en el entorno"

enunciado: "Respecto a la flexibilidad presupuestaria, ¿cuál de las siguientes afirmaciones es correcta?"

explicacion: |
  Un error común es creer que el presupuesto es una "camisa de fuerza". Para que sea útil, debe permitir ajustes (reprogramaciones) ante cambios significativos en el mercado o la economía.
```

### 14 — Componentes del presupuesto

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["componentes"]

respuesta_orden: ["Ingresos", "Gastos", "Resultado"]
tipo: ordenar

opciones_explicitas: ["Ingresos", "Gastos", "Resultado"]

enunciado: "Ordene los elementos fundamentales que conforman la estructura básica de un presupuesto para determinar el saldo final:"

explicacion: |
  Para determinar la situación financiera proyectada, se deben listar primero los ingresos, luego los gastos y finalmente el resultado (superávit o déficit).
```

### 15 — Presupuesto vs. Flujo de caja

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["confusiones_comunes"]

variables:
  caso: uno_de([["Una empresa tiene ventas altas en el presupuesto pero no tiene efectivo en caja", "verdadero"], ["Si el presupuesto de ingresos es positivo, la empresa siempre tiene liquidez inmediata", "falso"]])

respuesta: caso[1]
tipo: completar
enunciado: "Es posible que una organización presente un presupuesto de ingresos positivo pero experimente problemas de liquidez: {caso[0]}"

explicacion: |
  Este es un error clásico. El presupuesto puede mostrar ingresos por ventas (devengado), pero si esas ventas son a crédito, el dinero no está disponible inmediatamente en caja (flujo de efectivo).
```

### 16 — Diferencia con el flujo de caja

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos_clave", "flujo_de_caja"]

respuesta: "flujo de caja"
tipo: "completar"
respuestas_validas:
  - "flujo de caja"
  - "cash flow"

enunciado: "Mientras que el presupuesto es una planificación de ingresos y gastos proyectados, el ___ es el registro de las entradas y salidas reales de efectivo en un periodo determinado."

explicacion: |
  El presupuesto es una herramienta de planificación (estimación), mientras que el flujo de caja (cash flow) se enfoca en la liquidez real y el movimiento efectivo de dinero.
```

### 17 — Presupuesto vs. Contabilidad

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["contabilidad", "planificacion"]

variables:
  es_planificacion: verdadero

respuesta: es_planificacion
tipo: "vf"

enunciado: "El presupuesto se distingue de la contabilidad financiera principalmente porque el presupuesto tiene un carácter prospectivo (hacia el futuro), mientras que la contabilidad es histórica (registra lo ya ocurrido)."

explicacion: |
  Correcto. El presupuesto mira hacia adelante para la toma de decisiones, la contabilidad mira hacia atrás para rendir cuentas.
```

### 18 — El presupuesto como herramienta de control

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["control_presupuestal", "desviaciones"]

variables:
  escenario: uno_de([["real_menor", "real_mayor"], ["real_menor", "real_mayor"], ["real_menor", "real_mayor"]])
  dato_real: uno_de([0, 1])
  dato_tipo: uno_de(["ingreso", "gasto"])
  resultado_lógica: uno_de([["desfavorable", verdadero], ["favorable", falso], ["desfavorable", verdadero]])

respuesta: resultado_lógica[0]
tipo: "mc"
opciones_explicitas: ["favorable", "desfavorable"]

enunciado: "Si en el control presupuestario se detecta que un gasto real es mayor al gasto presupuestado, la desviación se considera: ___"

explicacion: |
  Un gasto mayor al previsto consume más recursos de los planeados, por lo tanto, es una desviación desfavorable.
```

### 19 — Fases del ciclo presupuestario

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_presupuestal"]

respuesta_orden: ["elaboración", "ejecución", "control", "evaluación"]
tipo: "ordenar"
opciones_explicitas: ["elaboración", "ejecución", "control", "evaluación"]

enunciado: "Ordene cronológicamente las etapas del ciclo presupuestario de una organización:"

explicacion: |
  El ciclo comienza con la planificación (elaboración), sigue con la puesta en marcha (ejecución), se monitorea el proceso (control) y finalmente se analizan los resultados (evaluación).
```

### 20 — Presupuesto Base Cero vs. Incremental

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["base_cero", "incremental"]

variables:
  idx: uno_de([0, 1])
  # 0: Base Cero, 1: Incremental
  # datos: [ [nombre, caracteristica], [nombre, caracteristica] ]
  datos: [["Base Cero", "requiere justificar cada gasto desde cero"], ["Incremental", "se basa en los saldos del periodo anterior"]]

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["requiere justificar cada gasto desde cero", "se basa en los saldos del periodo anterior", "no considera la inflación", "es de aplicación automática"]

enunciado: "Si una empresa decide aplicar el método de presupuesto de tipo {datos[idx][0]}, su característica principal es que: ___"

explicacion: |
  El presupuesto incremental simplemente ajusta los valores del año pasado, mientras que el Base Cero obliga a justificar cada partida como si fuera la primera vez.
```

### 21 — El balance del trimestre

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["presupuesto", "ingresos", "gastos"]

variables:
  escenarios: [["Ventas: 5000, Gastos: 3200", "Superávit"], ["Ventas: 4500, Gastos: 4600", "Déficit"], ["Ventas: 3000, Gastos: 2500", "Superávit"]]
  caso: uno_de(escenarios)
  enunciado_caso: caso[0]
  resultado_correcto: caso[1]

tipo: mc
respuesta: resultado_correcto
opciones_explicitas: ["Superávit", "Déficit", "Equilibrio"]

enunciado: "Si una organización proyecta un escenario donde {enunciado_caso}, el resultado presupuestario es un ___."

explicacion: |
  El resultado se obtiene restando los gastos de los ingresos. Si el resultado es positivo, hay superávit; si es negativo, hay déficit.
```

### 22 — Conceptos fundamentales

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["definiciones", "teoria"]

tipo: vf
respuesta: verdadero

enunciado: "El presupuesto es una herramienta de planificación que permite estimar los recursos económicos necesarios para alcanzar objetivos en un periodo determinado."

explicacion: |
  Efectivamente, el presupuesto actúa como una hoja de ruta financiera para la gestión administrativa.
```

### 23 — Identificación de componentes

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["ingresos", "egresos", "clasificacion"]

variables:
  item: uno_de([["Alquiler de oficina", "Gasto"], ["Venta de servicios", "Ingreso"], ["Pago de salarios", "Gasto"]])

tipo: completar
respuestas_validas:
  - "Ingreso"
  - "Gasto"
respuesta: item[1]

enunciado: "El concepto '{item[0]}' se clasifica contablemente como un ___."

explicacion: |
  Los ingresos representan entradas de recursos, mientras que los gastos representan salidas o consumos de recursos.
```

### 24 — Ciclo de gestión presupuestaria

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "etapas"]

tipo: ordenar
opciones_explicitas: ["Planificación", "Ejecución", "Control y Evaluación"]
respuesta_orden: ["Planificación", "Ejecución", "Control y Evaluación"]

enunciado: "Ordene las etapas lógicas del proceso presupuestario en una organización:"

explicacion: |
  Primero se planifica (se estima), luego se ejecuta (se gasta/ingresa) y finalmente se controla (se compara lo real vs lo presupuestado).
```

### 25 — Cálculo de desvío presupuestario

```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "avanzado"
  tags: ["desvio", "calculo", "analisis"]

variables:
  idx: uno_de([0, 1])
  presupuestados: [1000, 500]
  reales: [1200, 450]
  desvios_texto: ["200", "-50"]

respuesta: desvios_texto[idx]
tipo: completar
tolerancia_abs: 0

enunciado: "Si el presupuesto para un proyecto era de {presupuestados[idx]} y lo ejecutado fue {reales[idx]}, el desvío (real menos presupuestado) es de ___."

pasos:
  - "Identificar el valor presupuestado."
  - "Identificar el valor real ejecutado."
  - "Calcular la diferencia absoluta entre ambos valores."

explicacion: |
  El desvío mide la diferencia entre lo que se planeó y lo que realmente ocurrió, permitiendo ajustar la gestión.
```
