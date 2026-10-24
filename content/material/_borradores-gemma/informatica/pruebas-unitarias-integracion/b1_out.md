### 1 — Definición de prueba unitaria
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "basico"
  tags: ["testing", "unitario"]

respuesta: "unitario"
tipo: completar
respuestas_validas: ["unitario", "unitarias"]

enunciado: "Una prueba ___ se enfoca en verificar el funcionamiento de la unidad más pequeña y aislada de código, como una función o un método, sin dependencias externas."

explicacion: |
  Las pruebas unitarias validan la lógica interna de un componente de forma aislada, asegurando que cada pieza cumpla su contrato individualmente.
```

### 2 — Diferencia fundamental
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "basico"
  tags: ["conceptos", "integracion"]

opciones_explicitas: ["Verificar la comunicación entre módulos", "Verificar la sintaxis del lenguaje", "Verificar el rendimiento del hardware"]
respuesta: "Verificar la comunicación entre módulos"
tipo: mc

enunciado: "El objetivo principal de las pruebas de integración es:"

explicacion: |
  Mientras que las pruebas unitarias miran el componente solo, las de integración buscan detectar errores en la interacción y el flujo de datos entre diferentes módulos.
```

### 3 — Verdad o Falso: Aislamiento
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "En una prueba de integración, el objetivo principal es aislar completamente un componente de sus dependencias para probar su lógica interna."

explicacion: |
  Falso. El aislamiento es la característica de las pruebas unitarias. Las pruebas de integración, por el contrario, requieren que los componentes estén conectados para verificar su interacción.
```

### 4 — Secuencia de testing
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "intermedio"
  tags: ["flujo_de_trabajo"]

opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
respuesta: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
tipo: ordenar

enunciado: "Ordena las etapas de testing de software desde el nivel más granular (más pequeño) hasta el nivel de sistema completo:"

explicacion: |
  El flujo estándar de desarrollo sigue una jerarquía: primero se asegura que cada pieza funcione (Unitarias), luego que las piezas encajen (Integración) y finalmente que el sistema completo cumpla el requisito (Sistema).
```

### 5 — Escenario de error
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "intermedio"
  tags: ["diagnostico"]

variables:
  idx: uno_de([0, 1])
  escenarios: [
    ["La función 'sumar(a, b)' devuelve un error de sintaxis", "unitario"],
    ["El módulo de 'Pagos' no logra recibir los datos del módulo de 'Carrito'", "integracion"]
  ]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["unitario", "integracion"]

enunciado: "Si una función matemática falla al calcular un resultado, pero el resto del sistema funciona bien, estamos ante un error de tipo: {escenarios[idx][0]}"

explicacion: |
  Como el fallo está contenido en la lógica interna de una pieza aislada, el error se identifica mediante pruebas unitarias.
```