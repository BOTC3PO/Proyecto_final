### 1 — Identificación de tipo de prueba
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "calidad_software"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Se verifica que la función 'sumar(a, b)' devuelva correctamente el resultado de la suma de dos enteros.", "unitarias"],
    ["Se verifica que el módulo de 'pagos' se comunique correctamente con la 'base de datos' para registrar una transacción.", "integracion"]
  ]

enunciado: "Si el objetivo es verificar {escenarios[escenario_idx][0]}, estamos realizando pruebas de tipo: ___"

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas: ["unitarias", "integracion"]

explicacion: |
  Las pruebas unitarias se enfocan en la lógica interna de una función o componente de forma aislada. Las pruebas de integración verifican la interacción entre diferentes módulos o componentes del sistema.
```

### 2 — Verdad o Falso: Aislamiento
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "En una prueba de integración, el objetivo principal es asegurar que una función individual funcione correctamente de forma aislada, sin importar si sus dependencias responden bien."

respuesta: falso
tipo: vf

explicacion: |
  Falso. El objetivo de las pruebas de integración es precisamente verificar cómo interactúan los componentes entre sí, por lo que el foco no es el aislamiento, sino la comunicación y el flujo de datos entre ellos.
```

### 3 — El proceso de testing
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["flujo_de_trabajo"]

enunciado: "Ordena las etapas típicas de un ciclo de desarrollo de software orientado a calidad (Testing Pyramid):"

opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema/E2E"]
respuesta: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema/E2E"]
tipo: ordenar

explicacion: |
  El flujo lógico comienza con las pruebas más granulares y rápidas (Unitarias), luego se combinan componentes (Integración) y finalmente se prueba el sistema completo en un entorno similar al real (Sistema/E2E).
```

### 4 — Selección de escenario
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["casos_practicos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El sistema debe validar que el módulo de 'Login' envíe las credenciales correctamente al servicio de 'Autenticación'.", "integracion"],
    ["El sistema debe validar que el método 'calcular_iva(monto)' devuelva el 21% del monto ingresado.", "unitarias"]
  ]

enunciado: "Analiza el siguiente caso: '{casos[caso_idx][0]}'. ¿Qué tipo de prueba es?"

opciones_explicitas: ["unitarias", "integracion"]
respuesta: casos[caso_idx][1]
tipo: mc

explicacion: |
  Si el caso implica la interacción entre dos entidades distintas (Login -> Servicio), es de integración. Si solo valida la lógica de un método matemático o de cálculo simple, es unitaria.
```

### 5 — Completar flujo de datos
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["debug"]

variables:
  error_idx: uno_de([0, 1])
  errores: [
    ["Si una prueba de integración falla, el error puede estar en la lógica de un módulo o en la comunicación entre ellos.", "integracion"],
    ["Si una prueba unitaria falla, el error está garantizado en la lógica interna de la función probada.", "unitaria"]
  ]

enunciado: "En el contexto de pruebas de ___, un fallo puede indicar un problema en la interfaz entre dos componentes, no necesariamente en la lógica interna de cada uno.", "completar"

respuestas_validas: ["unitarias", "integracion"]
respuesta: "integracion"
tipo: completar

explicacion: |
  Las pruebas de integración son cruciales para detectar errores de contrato, protocolos de comunicación o formatos de datos incorrectos que las pruebas unitarias (por su naturaleza aislada) no pueden detectar.
```