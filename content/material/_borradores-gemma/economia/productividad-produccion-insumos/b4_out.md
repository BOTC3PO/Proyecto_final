### 1 — Productividad vs Eficiencia
```
metadata:
  materia: "economia"
  tema: "productividad_vs_eficiencia"
  nivel: "basico"
  tags: ["conceptos_clave", "productividad"]

respuesta: "eficiencia"
tipo: "completar"
respuestas_validas: ["eficiencia"]

enunciado: "Mientras que la productividad se mide como la relación entre la producción obtenida y los insumos utilizados, la capacidad de lograr un objetivo utilizando la menor cantidad de recursos posible se define como ___."

explicacion: |
  La productividad es una medida de rendimiento (output/input), mientras que la eficiencia se refiere al aprovechamiento óptimo de los recursos para evitar desperdicios.
```

### 2 — El factor de la productividad
```
metadata:
  materia: "economia"
  tema: "factores_productividad"
  nivel: "intermedio"
  tags: ["insumos", "teoria_produccion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Aumento de capital", "Mejora de tecnología", "Mejora de capacitación"],
    ["Aumento de insumos", "Mejora de tecnología", "Mejora de capacitación"]
  ]

respuesta: uno_de(resultados[escenario_idx][1])
tipo: "mc"
opciones_explicitas: ["Aumento de insumos", "Mejora de tecnología", "Mejora de capacitación"]

enunciado: "Si una empresa logra producir lo mismo que el periodo anterior pero utilizando menos materia prima gracias a la implementación de maquinaria automatizada, estamos ante un caso de: {escenarios[escenario_idx][1]}."

pasos:
  - "Identificar el cambio en la relación output/input."
  - "Determinar si el cambio es por cantidad de insumos o por cambio tecnológico."

explicacion: |
  La automatización es un cambio tecnológico que permite desplazar la función de producción hacia arriba, aumentando la productividad.
```

### 3 — Productividad Marginal vs Media
```
metadata:
  materia: "economia"
  tema: "productividad_marginal"
  nivel: "avanzado"
  tags: ["marginalidad", "rendimientos"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que si la productividad marginal es mayor que la productividad media, entonces la productividad media debe estar disminuyendo?"

explicacion: |
  Falso. Si la productividad marginal es mayor que la media, la media está aumentando (efecto de tracción).
```

### 4 — Relación Insumo-Producto
```
metadata:
  materia: "economia"
  tema: "relacion_insumo_producto"
  nivel: "intermedio"
  tags: ["ley_rendimientos_decrecientes"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["La producción se mantiene constante a pesar de sumar más trabajadores", "La producción aumenta a un ritmo decreciente al sumar más trabajadores"],
    ["La producción se mantiene constante a pesar de sumar más trabajadores", "La producción aumenta a un ritmo decreciente al sumar más trabajadores"]
  ]
  respuestas: ["Ley de rendimientos constantes", "Ley de rendimientos decrecientes"]

respuesta: respuestas[caso_idx]
tipo: "mc"
opciones_explicitas: ["Ley de rendimientos constantes", "Ley de rendimientos decrecientes"]

enunciado: "Cuando la adición de una unidad de insumo variable (como trabajo) produce un incremento en la producción total cada vez menor, estamos observando la: {casos[caso_idx][1]}."

explicacion: |
  La ley de rendimientos decrecientes indica que, en el corto plazo, añadir más de un factor variable a un factor fijo eventualmente reduce la productividad marginal.
```

### 5 — Fases de la producción
```
metadata:
  materia: "economia"
  tema: "fases_produccion"
  nivel: "avanzado"
  tags: ["etapas", "productividad"]

respuesta: ["Etapa I", "Etapa II", "Etapa III"]
tipo: "ordenar"
opciones_explicitas: ["Etapa I", "Etapa II", "Etapa III"]

enunciado: "Ordene las etapas de la producción según el comportamiento de la productividad marginal (PMg) respecto a la productividad media (PMe):"

pasos:
  - "Identificar cuándo la PMg es mayor que la PMe (Crecimiento)."
  - "Identificar cuándo la PMg es igual a la PMe (Punto de máxima eficiencia media)."
  - "Identificar cuándo la PMg es negativa (Decrecimiento)."

explicacion: |
  En la Etapa I la PMg > PMe. En la Etapa II la PMg < PMe pero es positiva. En la Etapa III la PMg es negativa.
```