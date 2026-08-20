### 1 — MVP vs Prototipo
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["gestion_producto", "metodologias_agiles"]

respuesta: "prototipo"
tipo: "completar"
respuestas_validas: ["prototipo"]

enunciado: "Mientras que un MVP está diseñado para ser lanzado al mercado y recolectar datos de usuarios reales, un ___ se utiliza generalmente para validar conceptos técnicos o de diseño de forma interna o con usuarios muy controlados, sin necesidad de ser una versión funcional para el mercado."

explicacion: |
  El MVP es una versión funcional que busca aprendizaje validado en el mercado real, mientras que el prototipo es una representación (puede ser de baja fidelidad) para probar una idea o flujo específico.
```

### 2 — El objetivo principal del MVP
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["aprendizaje", "validacion"]

variables:
  idx: uno_de([0, 1])

respuesta: uno_de([0, 1])[idx]
tipo: "mc"
opciones_explicitas: ["Maximizar las funcionalidades para satisfacer a todos los clientes", "Maximizar el aprendizaje validado con el mínimo esfuerzo"]

enunciado: "De acuerdo a la metodología Lean Startup, ¿cuál es el objetivo primordial de un MVP?"

explicacion: |
  El MVP no busca ser un producto completo, sino la versión más simple que permita entrar en el ciclo de 'Construir-Medir-Aprender'.
```

### 3 — MVP vs Producto Final
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ciclo_de_vida", "desarrollo"]

respuesta: falso
tipo: "vf"

enunciado: "Un Producto Mínimo Viable (MVP) debe contener todas las características que el cliente final ha solicitado en su lista de deseos para asegurar su satisfacción inicial."

explicacion: |
  Falso. Incluir todas las características contradice la esencia del MVP, que es construir solo lo estrictamente necesario para aprender sobre el valor que el producto aporta.
```

### 4 — Ciclo de aprendizaje del MVP
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["metodologia", "lean_startup"]

respuesta: ["Construir", "Medir", "Aprender"]
tipo: "ordenar"
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Para que un MVP cumpla su función de aprendizaje, debe seguir el ciclo iterativo de la metodología Lean Startup. Ordene los pasos en el orden correcto:"

explicacion: |
  El ciclo es circular: se construye algo mínimo, se mide el comportamiento del usuario y se aprende para decidir si se pivota o se persevera.
```

### 5 — MVP vs Producto Mínimo Útil (MMP)
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "producto"]

variables:
  escenario: uno_de([0, 1])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["El MVP se enfoca en la velocidad de aprendizaje, mientras que el MMP se enfoca en la utilidad y la experiencia de usuario básica", "El MVP es una versión de prueba interna y el MMP es el producto final para la venta masiva"]

enunciado: "Considerando la diferencia entre MVP (Minimum Viable Product) y MMP (Minimum Marketable Product), según el escenario seleccionado: {escenario[0]}"

explicacion: |
  El MVP es una herramienta de aprendizaje (puede ser muy rudimentaria), mientras que el MMP es la versión mínima que ya tiene suficiente valor para ser comercializada con éxito.
```