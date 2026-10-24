### 1 — Diferencia con el flujo de caja
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "basico"
  tags: ["conceptos_clave", "flujo_de_caja"]

respuesta: "flujo de caja"
tipo: "completar"
respuestas_validas: ["flujo de caja", "cash flow"]

enunciado: "Mientras que el presupuesto es una planificación de ingresos y gastos proyectados, el ___ es el registro de las entradas y salidas reales de efectivo en un periodo determinado."

explicacion: |
  El presupuesto es una herramienta de planificación (estimación), mientras que el flujo de caja (cash flow) se enfoca en la liquidez real y el movimiento efectivo de dinero.
```

### 2 — Presupuesto vs. Contabilidad
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

### 3 — El presupuesto como herramienta de control
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["control_presupuestal", "desviaciones"]

variables:
  escenario: uno_de([
    ["real_menor", "real_mayor"],
    ["real_menor", "real_mayor"],
    ["real_menor", "real_mayor"]
  ])
  dato_real: uno_de([0, 1])
  dato_tipo: uno_de(["ingreso", "gasto"])
  # 0: ingreso, 1: gasto
  # Escenario 0: Ingreso real < Ingreso presupuestado (Desfavorable)
  # Escenario 1: Gasto real > Gasto presupuestado (Desfavorable)
  # Escenario 2: Ingreso real > Ingreso presupuestado (Favorable)
  # Para simplificar la lógica de la pregunta, usaremos un array de pares para el resultado
  # [tipo, es_desfavorable]
  resultado_lógica: uno_de([
    ["desfavorable", verdadero],
    ["favorable", falso],
    ["desfavorable", verdadero]
  ])

respuesta: resultado_lógica[1]
tipo: "mc"
opciones_explicitas: ["favorable", "desfavorable"]

enunciado: "Si en el control presupuestario se detecta que un gasto real es mayor al gasto presupuestado, la desviación se considera: ___"

explicacion: |
  Un gasto mayor al previsto consume más recursos de los planeados, por lo tanto, es una desviación desfavorable.
```

### 4 — Fases del ciclo presupuestario
```
metadata:
  materia: "economia"
  tema: "presupuesto_administrativo"
  nivel: "intermedio"
  tags: ["proceso", "ciclo_presupuestal"]

respuesta: ["elaboración", "ejecución", "control", "evaluación"]
tipo: "ordenar"
opciones_explicitas: ["elaboración", "ejecución", "control", "evaluación"]

enunciado: "Ordene cronológicamente las etapas del ciclo presupuestario de una organización:"

explicacion: |
  El ciclo comienza con la planificación (elaboración), sigue con la puesta en marcha (ejecución), se monitorea el proceso (control) y finalmente se analizan los resultados (evaluación).
```

### 5 — Presupuesto Base Cero vs. Incremental
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
  datos: [
    ["Base Cero", "requiere justificar cada gasto desde cero"],
    ["Incremental", "se basa en los saldos del periodo anterior"]
  ]

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["requiere justificar cada gasto desde cero", "se basa en los saldos del periodo anterior", "no considera la inflación", "es de aplicación automática"]

enunciado: "Si una empresa decide aplicar el método de presupuesto de tipo {datos[idx][0]}, su característica principal es que: ___"

explicacion: |
  El presupuesto incremental simplemente ajusta los valores del año pasado, mientras que el Base Cero obliga a justificar cada partida como si fuera la primera vez.
```