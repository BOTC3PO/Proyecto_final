### 1 — El MVP de una App de Delivery
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["emprendimiento", "metodologia_lean"]

variables:
  escenario: uno_de([["Una app de comida que solo permite pedir por WhatsApp", "validar_demanda"], ["Un prototipo de papel de una app de viajes", "validar_interes"], ["Una landing page con un botón de 'Próximamente'", "validar_interes"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["validar_demanda", "validar_interes", "validar_tecnologia"]

enunciado: "Un emprendedor decide lanzar {escenario[idx][0]} con el objetivo principal de: ___"

explicacion: |
  El MVP busca la menor cantidad de esfuerzo para obtener la máxima cantidad de aprendizaje validado sobre los clientes.
```

### 2 — Verdad o Falso: El propósito del MVP
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

### 3 — Ciclo de Feedback Lean
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ciclo_lean", "metodologia"]

respuesta: ["Construir", "Medir", "Aprender"]
tipo: ordenar
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Ordena los pasos del ciclo de feedback de la metodología Lean Startup que permite iterar sobre un MVP:"

explicacion: |
  El ciclo es: Construir (producto/MVP) -> Medir (datos de usuarios) -> Aprender (decidir si pivotar o perseverar).
```

### 4 — La métrica del MVP
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["metricas", "validacion"]

variables:
  caso: uno_de([["una landing page con 100 visitas y 5 registros", "5%"], ["un bot de Telegram con 10 usuarios y 2 pedidos", "20%"], ["un prototipo de baja fidelidad sin usuarios", "0%"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["5%", "20%", "0%"]

enunciado: "Si el MVP consiste en {caso[idx][0]}, la tasa de conversión (métrica de validación) es de ___."

explicacion: |
  La tasa de conversión permite medir el interés real de los usuarios frente a la propuesta de valor del MVP.
```

### 5 — Decisión tras el MVP: Pivotar o Perseverar
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "pivot"]

variables:
  situacion: uno_de([["Los usuarios usan el MVP pero no están dispuestos a pagar", "pivotar"], ["Los usuarios ignoran el MVP por completo", "pivotar"], ["Los usuarios aman la función extra que no era el core", "pivotar"]])
  idx: uno_de([0, 1, 2])

respuesta: situacion[idx][0]
tipo: mc
opciones_explicitas: ["perseverar", "pivotar"]

enunciado: "Ante la situación: {situacion[idx][0]}, la acción estratégica recomendada según la metodología Lean es: ___"

explicacion: |
  Si los datos del MVP indican que el modelo de negocio o el problema planteado no es el correcto, se debe 'pivotar' (cambiar la estrategia).
```