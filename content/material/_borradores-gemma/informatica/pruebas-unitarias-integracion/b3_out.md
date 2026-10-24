### 1 — El alcance de las pruebas unitarias
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "unitarias"]

respuesta: "unitarias"
tipo: mc
opciones_explicitas: ["unitarias", "de_integracion", "de_sistema", "de_aceptacion"]

enunciado: "Cuando un desarrollador se enfoca exclusivamente en verificar que una única función o método funcione correctamente de forma aislada, está realizando pruebas ___."

explicacion: |
  Las pruebas unitarias se centran en la unidad mínima de software (una función, un método o una clase) de forma aislada de sus dependencias.
```

### 2 — El objetivo de la integración
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "integracion"]

respuesta: falso
tipo: vf

enunciado: "El objetivo principal de las pruebas de integración es verificar que cada componente individual funcione correctamente según su especificación técnica."

explicacion: |
  Falso. El objetivo de las pruebas de integración es verificar que los componentes, una vez probados individualmente, funcionen correctamente al interactuar entre sí.
```

### 3 — El error de la dependencia oculta
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "errores_comunes"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["La función A llama a la función B y el error ocurre por un valor de retorno inesperado de B", "de_integracion"],
    ["La función A tiene un error de lógica en su cálculo interno", "unitarias"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["unitarias", "de_integracion"]

enunciado: "Si una prueba falla porque la interacción entre dos módulos es incorrecta, pero cada módulo funciona bien por separado, estamos ante un error de tipo: {escenarios[escenario_idx][0]}."

explicacion: |
  En este caso, el problema no reside en la lógica interna de los módulos (unitario), sino en el contrato o la comunicación entre ellos (integración).
```

### 4 — Secuencia de la estrategia de testing
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "flujo_de_trabajo"]

respuesta: ["Unitarias", "Integración", "Sistema"]
tipo: ordenar
opciones_explicitas: ["Unitarias", "Integración", "Sistema"]

enunciado: "Ordena las etapas típicas de una estrategia de testing ascendente (Bottom-Up), desde lo más pequeño a lo más complejo."

explicacion: |
  El flujo lógico estándar comienza validando las piezas individuales (unitarias), luego cómo se conectan (integración) y finalmente el sistema completo.
```

### 5 — El uso de Mocks y Stubs
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["testing", "mocks"]

respuesta: "unitarias"
tipo: completar
respuestas_validas: ["unitarias"]

enunciado: "Para aislar una pieza de código y evitar que dependencias externas (como una base de datos) afecten el resultado, se utilizan objetos simulados (Mocks/Stubs). Este enfoque es característico de las pruebas ___."

explicacion: |
  El uso de Mocks es fundamental en las pruebas unitarias para garantizar que el test solo evalúe la lógica de la unidad y no el comportamiento de sus dependencias.
```