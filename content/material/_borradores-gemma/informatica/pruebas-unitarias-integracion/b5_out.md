### 1 — Identificación de tipo de prueba
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "calidad_software"]

variables:
  escenario: uno_de([
    ["Se está probando si la función 'calcular_iva(monto)' devuelve el valor correcto para un número dado, sin considerar la base de datos.", "unitaria"],
    ["Se está probando si el módulo de 'pagos' logra comunicarse correctamente con la 'pasarela_de_pagos' externa.", "integracion"],
    ["Se está probando si un solo método de una clase procesa correctamente un string de entrada.", "unitaria"],
    ["Se está probando si la interacción entre el módulo de 'inventario' y el de 'ventas' actualiza el stock tras una compra.", "integracion"]
  ])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["unitaria", "integracion"]

enunciado: "Dado el siguiente escenario: {escenario[idx][0]}. ¿Qué tipo de prueba se está ejecutando?"

explicacion: |
  Las pruebas unitarias se enfocan en la lógica interna de una pieza mínima de código (función, método) de forma aislada. Las pruebas de integración verifican que la interacción entre diferentes módulos o componentes funcione correctamente.
```

### 2 — Verdadero o Falso: Alcance
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "conceptos"]

variables:
  afirmacion: uno_de([
    [true, "Verdadero"],
    [false, "Falso"]
  ])

respuesta: afirmacion[idx][0]
tipo: vf

enunciado: "Las pruebas de integración tienen como objetivo principal verificar que cada función individual cumpla con su contrato de entrada y salida, de forma aislada de otros módulos."

explicacion: |
  Falso. Eso es la definición de pruebas unitarias. Las de integración buscan detectar fallos en las interfaces y la comunicación entre componentes ya probados.
```

### 3 — Completar: El objetivo de la integración
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "flujo_de_datos"]

respuestas_validas: ["flujo", "interacción", "comunicación"]
respuesta: "interacción"
tipo: completar

enunciado: "Mientras que las pruebas unitarias validan la lógica de un componente aislado, las pruebas de ___________ validan que los componentes funcionen correctamente cuando se combinan."

explicacion: |
  La integración se centra en la interacción entre módulos para asegurar que el flujo de datos y el control entre ellos sea el esperado.
```

### 4 — Ordenar: Ciclo de vida de testing
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "metodologia"]

opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
respuesta: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
tipo: ordenar

enunciado: "Ordena las fases de testing de menor a mayor alcance (de lo más pequeño a lo más complejo):"

explicacion: |
  El proceso estándar comienza con la validación de la unidad mínima (Unitarias), luego se unen las piezas (Integración) y finalmente se prueba el sistema completo (Sistema/E2E).
```

### 5 — Escenario de error en integración
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["testing", "debug"]

variables:
  caso: uno_de([
    ["El módulo A envía un objeto JSON, pero el módulo B espera un XML.", "error_integracion"],
    ["La función 'sumar(a, b)' devuelve un resultado incorrecto debido a un error de redondeo.", "error_unitario"],
    ["Un método de validación de email no acepta caracteres especiales.", "error_unitario"],
    ["El módulo de base de datos no responde ante una consulta de un módulo de reporte.", "error_integracion"]
  ])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["error_unitario", "error_integracion"]

enunciado: "Se detecta el siguiente problema: {caso[idx][0]}. ¿A qué categoría de error pertenece principalmente?"

explicacion: |
  Si el error reside en la lógica interna de una función, es unitario. Si el error surge por la incompatibilidad de formatos o la falta de comunicación entre dos componentes que por separado funcionan bien, es un error de integración.
```