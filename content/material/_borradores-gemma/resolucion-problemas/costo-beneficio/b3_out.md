### 1 — El costo de oportunidad olvidado
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["costo_de_oportunidad", "decision"]

variables:
  escenario: uno_de([
    ["Invertir $1000 en acciones que rinden $1200", 1200, 1000],
    ["Estudiar una semana que rinde $500 de beneficio", 500, 0],
    ["Comprar un equipo que ahorra $300 de costos", 300, 150]
  ])

enunciado: "Si decides ejecutar la opción {escenario[0]}, el beneficio neto es {escenario[1] - escenario[2]}. Sin embargo, si la mejor alternativa sacrificada hubiera dado un beneficio de $500, el costo de oportunidad de tu decisión es de $___."

respuestas_validas: ["500"]
tipo: completar

explicacion: |
  El costo de oportunidad no es lo que gastas, sino el valor de la mejor alternativa a la que renuncias al tomar una decisión.
```

### 2 — Beneficio vs. Flujo de caja
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "avanzado"
  tags: ["beneficio_contable", "flujo_caja"]

enunciado: "Un proyecto genera una ganancia contable de $10.000, pero requiere una inversión inicial de $12.000. Si el análisis de costo-beneficio solo considera el beneficio contable sin considerar el desembolso inicial (inversión), ¿el resultado de la decisión es financieramente positivo?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: vf

explicacion: |
  Un error común es confundir el ingreso o beneficio bruto con el beneficio neto. Para una decisión correcta, se debe restar el costo total (inversión) del beneficio obtenido.
```

### 3 — El error de los costos hundidos
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["costos_hundidos", "sesgo_cognitivo"]

enunciado: "Has gastado $5.000 en un proyecto que ya no es rentable. La única forma de continuar es gastar $2.000 más, pero el retorno esperado es de solo $1.000. ¿Cuál es el análisis correcto para la decisión futura?"

opciones_explicitas: [
  "Debo gastar los $2.000 porque ya invertí $5.000.",
  "Debo gastar los $2.000 para no perder los $5.000 iniciales.",
  "No debo gastar los $2.000 porque el costo adicional es mayor al beneficio esperado."
]
respuesta: "Debo gastar los $2.000 porque el costo adicional es mayor al beneficio esperado."
tipo: mc

explicacion: |
  Los 'costos hundidos' (los $5.000 ya gastados) no deben influir en la decisión actual. Solo deben considerarse los costos y beneficios futuros.
```

### 4 — Pasos para el análisis de costo-beneficio
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["metodologia", "proceso"]

enunciado: "Ordena los pasos lógicos para realizar un análisis de costo-beneficio efectivo:"

opciones_explicitas: [
  "Identificar todos los costos (directos e indirectos)",
  "Estimar los beneficios o ahorros esperados",
  "Comparar los costos totales contra los beneficios totales",
  "Tomar la decisión basada en el resultado neto"
]
respuesta: [
  "Identificar todos los costos (directos e indirectos)",
  "Estimar los beneficios o ahorros esperados",
  "Comparar los costos totales contra los beneficios totales",
  "Tomar la decisión basada en el resultado neto"
]
tipo: ordenar

explicacion: |
  El proceso debe ser sistemático: primero se listan las salidas de recursos (costos), luego las entradas o ahorros (beneficios), se comparan y finalmente se decide.
```

### 5 — El factor tiempo en el beneficio
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "avanzado"
  tags: ["valor_temporal", "inflacion"]

variables:
  datos: [
    ["Inversión: $100, Beneficio: $110 en 1 año", 110, 100],
    ["Inversión: $100, Beneficio: $120 en 5 años", 120, 100]
  ]
  idx: uno_de([0, 1])

enunciado: "Considerando el escenario {datos[idx][0]}, un error común es comparar directamente el beneficio nominal con el costo sin considerar el valor del dinero en el tiempo. Si el beneficio de ${datos[idx][1]} se recibe en un plazo largo, su valor real hoy es ___ que el beneficio recibido inmediatamente."

respuestas_validas: ["menor"]
tipo: completar

explicacion: |
  Debido a la inflación y al costo de oportunidad del dinero, un dólar recibido en el futuro vale menos que un dólar recibido hoy. Ignorar esto es un error crítico en el análisis de costo-beneficio.
```