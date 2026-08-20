# Economia — Mvp producto minimo viable (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de MVP

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["metodologia", "startup", "lean_startup"]

respuesta: "aprendizaje"
tipo: completar
respuestas_validas:
  - "aprendizaje"
  - "validar hipótesis"

enunciado: "El objetivo principal de un Producto Mínimo Viable (MVP) no es vender un producto final, sino obtener ___ sobre las preferencias y comportamientos de los usuarios reales."

explicacion: |
  El MVP es una herramienta de experimentación diseñada para maximizar el aprendizaje validado con el menor esfuerzo posible.
```

### 2 — Propósito del MVP

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["estrategia", "validación"]

respuesta: verdadero
tipo: vf

enunciado: "Un MVP debe contener todas las características que el cliente final espera de un producto completo para asegurar su éxito."

explicacion: |
  Falso. Un MVP debe contener solo las características mínimas necesarias para cumplir su propósito de aprendizaje. Incluir demasiado puede desperdiciar recursos.
```

### 3 — Componentes de un MVP

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["desarrollo", "iteración"]

variables:
  escenario: uno_de([["Landing Page", "Validar interés"], ["Mago de Oz", "Simular funcionalidad"], ["Conserje", "Proceso manual"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Landing Page", "Mago de Oz", "Conserje"]

enunciado: "Si una startup lanza una página web simple para ver cuántas personas hacen clic en un botón de 'comprar' antes de tener el producto desarrollado, está utilizando un modelo de: {escenario[0]} con el fin de {escenario[1]}."

explicacion: |
  La Landing Page es uno de los MVPs más rápidos para validar la demanda de una idea antes de invertir en desarrollo técnico.
```

### 4 — Ciclo de Feedback

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["lean_startup", "ciclo_feedback"]

opciones_explicitas: ["Construir", "Medir", "Aprender"]
respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar

enunciado: "Ordena los pasos del ciclo de feedback de la metodología Lean Startup que se utiliza para iterar sobre un MVP:"

explicacion: |
  El ciclo es iterativo: se construye un experimento, se miden los resultados y se aprende para decidir si pivotar o perseverar.
```

### 5 — El concepto de MVP

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "el producto más simple que permite aprender de usuarios reales"
tipo: completar
respuestas_validas:
  - "el producto más simple que permite aprender de usuarios reales"
  - "una versión completa pero barata"

enunciado: "Se define al MVP como ___."

explicacion: |
  El MVP busca el equilibrio entre el valor para el usuario y el esfuerzo de desarrollo, priorizando el aprendizaje sobre la perfección técnica.
```

### 6 — El propósito del MVP

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["metodologia", "startup"]

respuesta: "aprender"
tipo: "completar"
respuestas_validas:
  - "aprender"
  - "aprendizaje"

enunciado: "El objetivo principal de un Producto Mínimo Viable (MVP) no es vender una versión incompleta, sino permitir que el emprendedor pueda ___ de los usuarios reales con el menor esfuerzo posible."

explicacion: |
  El MVP es una estrategia de aprendizaje validado. Su fin no es la perfección técnica, sino la recolección de datos sobre el comportamiento del usuario para decidir si pivotar o perseverar.
```

### 7 — Ejemplo: MVP de una App de Delivery

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ejemplo", "validacion"]

variables:
  escenario: uno_de([["App de comida con sistema de pagos integrado", "Software complejo"], ["Un grupo de WhatsApp para tomar pedidos manualmente", "Concierge MVP"], ["Un sitio web con fotos de productos sin carrito", "Landing Page"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["Software complejo", "Concierge MVP", "Landing Page"]

enunciado: "Un emprendedor quiere validar si la gente en un barrio específico quiere un servicio de delivery de comida casera. ¿Cuál de estos ejemplos representa mejor un MVP de tipo 'Concierge' (donde el servicio se realiza manualmente para entender el proceso)?"

explicacion: |
  El MVP de tipo Concierge sustituye la automatización por procesos manuales. En el ejemplo, usar WhatsApp y tomar pedidos a mano permite entender la demanda sin haber programado una aplicación compleja.
```

### 8 — Verdad o Falso: MVP vs Producto Final

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso

tipo: "vf"

enunciado: "Un MVP debe ser un producto con todas las funcionalidades básicas pero con una calidad técnica deficiente que no sea útil para el usuario."

explicacion: |
  Falso. Un MVP debe ser "viable". Esto significa que, aunque tenga pocas funciones, debe resolver el problema central del usuario con una calidad mínima aceptable para que el aprendizaje sea real.
```

### 9 — Pasos para lanzar un MVP de un nuevo café

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Definir hipótesis", "Crear versión mínima", "Lanzar a usuarios", "Analizar métricas"]
tipo: "ordenar"
opciones_explicitas: ["Definir hipótesis", "Crear versión mínima", "Lanzar a usuarios", "Analizar métricas"]

enunciado: "Ordena los pasos lógicos para validar si un nuevo concepto de café temático tendrá éxito mediante un MVP:"

explicacion: |
  El ciclo de Lean Startup comienza con la hipótesis (qué creemos que pasará), sigue con la construcción del experimento (MVP), el contacto con el mercado y, finalmente, el análisis de los datos obtenidos para iterar.
```

### 10 — Análisis de métrica en MVP

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["metricas", "analisis"]

variables:
  datos: uno_de([[100, 5, 0.05], [200, 20, 0.10], [50, 1, 0.02]])

respuesta: datos[2]
tipo: "completar"
tolerancia_abs: 0.001

enunciado: "Se lanza un MVP de una plataforma de cursos online. Los datos obtenidos son: Visitas totales: {datos[0]}, Usuarios que se registran: {datos[1]}. ¿Cuál es la tasa de conversión (registrados/visitas) expresada en decimal?"

pasos:
  - "Identificar el número de usuarios registrados."
  - "Identificar el número de visitas totales."
  - "Dividir los registrados por las visitas."

explicacion: |
  La tasa de conversión es una métrica clave en un MVP para entender si la propuesta de valor es atractiva. En este caso: 20 / 200 = 0.10.
```

### 11 — El propósito real del MVP

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["conceptos_clave", "metodologia_lean"]

respuesta: "aprender"
tipo: mc
opciones_explicitas: ["construir", "aprender", "vender", "perfeccionar"]

enunciado: "Un error común es pensar que el objetivo principal de un MVP es lanzar un producto final con pocas funciones. En realidad, el objetivo fundamental de un MVP es ___ de los usuarios reales."

explicacion: |
  El MVP no es un producto "incompleto" para salir rápido al mercado, sino una herramienta de aprendizaje validado. Su fin es probar hipótesis de negocio con el menor esfuerzo posible.
```

### 12 — MVP vs Producto Incompleto

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["errores_comunes", "calidad"]

respuesta: falso
tipo: vf

enunciado: "Un Producto Mínimo Viable (MVP) puede ser un producto de mala calidad o con una experiencia de usuario deficiente, siempre y cuando cumpla con la función básica."

explicacion: |
  Falso. Un MVP debe ser "viable". Si la calidad es tan baja que el usuario no puede completar la tarea principal, no estás probando tu idea, estás probando que tu producto es malo. La funcionalidad es mínima, pero la calidad debe ser suficiente para generar aprendizaje.
```

### 13 — El ciclo de aprendizaje

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ciclo_feedback", "lean_startup"]

variables:
  pasos_orden: [["Construir", "Medir", "Aprender"], ["Aprender", "Construir", "Medir"], ["Medir", "Aprender", "Construir"]]
  idx: uno_de([0,1,2])

respuesta_orden: pasos_orden[idx]
tipo: ordenar
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Para que el MVP sea efectivo, se debe seguir el ciclo de feedback de la metodología Lean Startup. Ordena los pasos correctamente:"

explicacion: |
  El ciclo es: Construir (MVP) -> Medir (datos de usuarios) -> Aprender (decidir si pivotar o perseverar).
```

### 14 — La confusión del "Producto Mínimo"

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "errores_comunes"]

variables:
  escenario: [["un prototipo de baja fidelidad", "una versión con todas las funciones pero sin marketing"], ["un prototipo de baja fidelidad", "un producto incompleto que no resuelve el problema principal"], ["un prototipo de baja fidelidad", "una campaña de publicidad sin producto"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas:
  - "un prototipo de baja fidelidad"
  - "una versión con todas las funciones pero sin marketing"
  - "un producto incompleto que no resuelve el problema principal"
  - "una campaña de publicidad sin producto"

enunciado: "Un error crítico es confundir un MVP con ___."

explicacion: |
  Un MVP debe resolver el problema central. Si lanzas algo que no resuelve el problema principal, no estás validando tu propuesta de valor, solo estás lanzando un producto inútil.
```

### 15 — El enfoque en la funcionalidad

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["caracteristicas", "definicion"]

respuesta: "una función principal"
tipo: completar
respuestas_validas:
  - "una función principal"
  - "todas las funciones posibles"
  - "ninguna función para ahorrar costes"
  - "una interfaz muy compleja"

enunciado: "Para evitar el exceso de funciones (feature creep) en un MVP, el equipo debe centrarse en desarrollar ___ que aporte valor real."

explicacion: |
  El enfoque debe estar en el "Core Value Proposition". Si intentas incluir demasiadas funciones, dejas de tener un producto "mínimo" y te pierdes en el desarrollo de características que quizás nadie necesita.
```

### 16 — MVP vs Prototipo

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["gestion_producto", "metodologias_agiles"]

respuesta: "prototipo"
tipo: "completar"
respuestas_validas:
  - "prototipo"

enunciado: "Mientras que un MVP está diseñado para ser lanzado al mercado y recolectar datos de usuarios reales, un ___ se utiliza generalmente para validar conceptos técnicos o de diseño de forma interna o con usuarios muy controlados, sin necesidad de ser una versión funcional para el mercado."

explicacion: |
  El MVP es una versión funcional que busca aprendizaje validado en el mercado real, mientras que el prototipo es una representación (puede ser de baja fidelidad) para probar una idea o flujo específico.
```

### 17 — El objetivo principal del MVP

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["aprendizaje", "validacion"]

tipo: "mc"
opciones_explicitas: ["Maximizar las funcionalidades para satisfacer a todos los clientes", "Maximizar el aprendizaje validado con el mínimo esfuerzo"]

respuesta: "Maximizar el aprendizaje validado con el mínimo esfuerzo"

enunciado: "De acuerdo a la metodología Lean Startup, ¿cuál es el objetivo primordial de un MVP?"

explicacion: |
  El MVP no busca ser un producto completo, sino la versión más simple que permita entrar en el ciclo de 'Construir-Medir-Aprender'.
```

### 18 — MVP vs Producto Final

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

### 19 — Ciclo de aprendizaje del MVP

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["metodologia", "lean_startup"]

respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: "ordenar"
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Para que un MVP cumpla su función de aprendizaje, debe seguir el ciclo iterativo de la metodología Lean Startup. Ordene los pasos en el orden correcto:"

explicacion: |
  El ciclo es circular: se construye algo mínimo, se mide el comportamiento del usuario y se aprende para decidir si se pivota o se persevera.
```

### 20 — MVP vs Producto Mínimo Útil (MMP)

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "producto"]

tipo: "mc"
opciones_explicitas: ["El MVP se enfoca en la velocidad de aprendizaje, mientras que el MMP se enfoca en la utilidad y la experiencia de usuario básica", "El MVP es una versión de prueba interna y el MMP es el producto final para la venta masiva"]

respuesta: "El MVP se enfoca en la velocidad de aprendizaje, mientras que el MMP se enfoca en la utilidad y la experiencia de usuario básica"

enunciado: "¿Cuál es la diferencia principal entre MVP (Minimum Viable Product) y MMP (Minimum Marketable Product)?"

explicacion: |
  El MVP es una herramienta de aprendizaje (puede ser muy rudimentaria), mientras que el MMP es la versión mínima que ya tiene suficiente valor para ser comercializada con éxito.
```

### 21 — El MVP de una App de Delivery

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["emprendimiento", "metodologia_lean"]

variables:
  datos: [["Una app de comida que solo permite pedir por WhatsApp", "validar_demanda"], ["Un prototipo de papel de una app de viajes", "validar_interes"], ["Una landing page con un botón de 'Próximamente'", "validar_interes"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["validar_demanda", "validar_interes", "validar_tecnologia"]

enunciado: "Un emprendedor decide lanzar {datos[idx][0]} con el objetivo principal de: ___"

explicacion: |
  El MVP busca la menor cantidad de esfuerzo para obtener la máxima cantidad de aprendizaje validado sobre los clientes.
```

### 22 — Verdad o Falso: El propósito del MVP

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: vf

enunciado: "El objetivo principal de un MVP es lanzar un producto incompleto y de mala calidad para ahorrar costos de desarrollo."

explicacion: |
  Falso. El MVP debe ser funcional y aportar valor; su objetivo es el aprendizaje validado, no la falta de calidad.
```

### 23 — Ciclo de Feedback Lean

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ciclo_lean", "metodologia"]

respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Ordena los pasos del ciclo de feedback de la metodología Lean Startup que permite iterar sobre un MVP:"

explicacion: |
  El ciclo es: Construir (producto/MVP) -> Medir (datos de usuarios) -> Aprender (decidir si pivotar o perseverar).
```

### 24 — La métrica del MVP

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["metricas", "validacion"]

variables:
  datos: [["una landing page con 100 visitas y 5 registros", "5%"], ["un bot de Telegram con 10 usuarios y 2 pedidos", "20%"], ["un prototipo de baja fidelidad sin usuarios", "0%"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "5%"
  - "20%"
  - "0%"

enunciado: "Si el MVP consiste en {datos[idx][0]}, la tasa de conversión (métrica de validación) es de ___."

explicacion: |
  La tasa de conversión permite medir el interés real de los usuarios frente a la propuesta de valor del MVP.
```

### 25 — Decisión tras el MVP: Pivotar o Perseverar

```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "pivot"]

variables:
  datos: [["Los usuarios usan el MVP pero no están dispuestos a pagar", "pivotar"], ["Los usuarios ignoran el MVP por completo", "pivotar"], ["Los usuarios aman la función extra que no era el core", "pivotar"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["perseverar", "pivotar"]

enunciado: "Ante la situación: {datos[idx][0]}, la acción estratégica recomendada según la metodología Lean es: ___"

explicacion: |
  Si los datos del MVP indican que el modelo de negocio o el problema planteado no es el correcto, se debe 'pivotar' (cambiar la estrategia).
```
