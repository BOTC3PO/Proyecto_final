### 1 — Alcance de un proyecto de software
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir-alcance-y-objetivos"
  nivel: "basico"
  tags: ["gestion_proyectos", "alcance"]

variables:
  escenario: uno_de([
    ["Desarrollar una app de delivery para restaurantes", "Incluye: gestión de pedidos y pagos. No incluye: logística de repartidores."],
    ["Crear un sistema de inventario para una farmacia", "Incluye: control de stock y vencimientos. No incluye: venta al público."],
    ["Diseñar una web de e-commerce para ropa", "Incluye: catálogo y carrito de compras. No incluye: gestión de envíos internacionales."]
  ])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Definir qué tareas se realizarán y cuáles quedan fuera del proyecto", "Establecer únicamente el presupuesto total", "Determinar quiénes serán los clientes finales", "Definir la fecha de finalización sin considerar tareas"]

enunciado: "Para el proyecto '{escenario[idx][0]}', la definición de alcance correcta sería: {escenario[idx][1]}"

explicacion: |
  El alcance delimita las fronteras del proyecto, especificando qué entregables se incluirán y qué está fuera de los límites para evitar la expansión descontrolada del proyecto (scope creep).
```

### 2 — Objetivos SMART
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir-alcance-y-objetivos"
  nivel: "intermedio"
  tags: ["objetivos", "smart"]

variables:
  caso: uno_de([
    ["Aumentar las ventas un 20% en 6 meses", "Verdadero"],
    ["Mejorar la calidad del servicio", "Falso"],
    ["Reducir costos de producción", "Falso"]
  ])
  idx: uno_de([0, 1, 2])

tipo: vf
respuesta: caso[idx][1]

enunciado: "Analizando el siguiente objetivo: '{caso[idx][0]}'. ¿Cumple con los criterios SMART (Específico, Medible, Alcanzable, Relevante y con Tiempo definido)? {caso[idx][1]}"

explicacion: |
  Un objetivo SMART debe ser medible y tener un plazo determinado. 'Mejorar la calidad' es un deseo, no un objetivo SMART, porque no indica cuánto ni cuándo.
```

### 3 — Elementos de la definición de alcance
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir-alcance-y-objetivos"
  nivel: "basico"
  tags: ["alcance", "exclusiones"]

tipo: completar
respuestas_validas: ["exclusiones", "límites"]
respuesta: "exclusiones"

enunciado: "Para evitar malentendidos con el cliente, es fundamental definir claramente las ________ que el proyecto no cubrirá."

explicacion: |
  Definir las exclusiones (o límites) es tan importante como definir los entregables, ya que previene que el cliente asuma que ciertas tareas están incluidas sin haberlas presupuestado.
```

### 4 — Jerarquía de objetivos
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir-alcance-y-objetivos"
  nivel: "avanzado"
  tags: ["objetivos", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Objetivo General", "Objetivos Específicos", "Metas Operativas"]

enunciado: "Ordena jerárquicamente los niveles de objetivos de un proyecto, desde el más macro hasta el más micro:"

explicacion: |
  El objetivo general es el propósito principal; los específicos desglosan ese propósito en partes manejables, y las metas operativas son los pasos concretos y medibles para alcanzar los específicos.
```

### 5 — Validación de objetivos
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir-alcance-y-objetivos"
  nivel: "intermedio"
  tags: ["validacion", "riesgos"]

variables:
  escenario: uno_de([
    ["El objetivo es 'Lanzar la app mañana' sin haber probado el código.", "Inviable"],
    ["El objetivo es 'Reducir el error humano en un 5% mediante capacitación'.", "Viable"],
    ["El objetivo es 'Ser la empresa líder del mundo en un año'.", "Inviable"]
  ])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Inviable", "Viable"]

enunciado: "Evaluando el objetivo planteado: '{escenario[idx][0]}'. ¿Es un objetivo realista y alcanzable para el equipo? {escenario[idx][1]}"

explicacion: |
  Un objetivo debe ser realista. Los objetivos que ignoran la calidad técnica o que son excesivamente ambiciosos sin un plan de acción (como ser líderes mundiales en un año) se consideran inviables.
```