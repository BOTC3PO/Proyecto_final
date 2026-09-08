# Informatica — Pruebas unitarias integracion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de prueba unitaria

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "basico"
  tags: ["testing", "unitario"]

respuesta: "unitario"
tipo: completar
respuestas_validas:
  - "unitario"
  - "unitarias"

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
respuesta_orden: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
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

respuesta: "unitario"
tipo: mc
opciones_explicitas: ["unitario", "integracion"]

enunciado: "Si una función matemática falla al calcular un resultado, pero el resto del sistema funciona bien, estamos ante un error de tipo: ___"

explicacion: |
  Como el fallo está contenido en la lógica interna de una pieza aislada, el error se identifica mediante pruebas unitarias.
```

### 6 — Identificación de tipo de prueba

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "calidad_software"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Se verifica que la función 'sumar(a, b)' devuelva correctamente el resultado de la suma de dos enteros.", "unitarias"], ["Se verifica que el módulo de 'pagos' se comunique correctamente con la 'base de datos' para registrar una transacción.", "integracion"]]

enunciado: "Si el objetivo es verificar {escenarios[escenario_idx][0]}, estamos realizando pruebas de tipo: ___"

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "unitarias"
  - "integracion"

explicacion: |
  Las pruebas unitarias se enfocan en la lógica interna de una función o componente de forma aislada. Las pruebas de integración verifican la interacción entre diferentes módulos o componentes del sistema.
```

### 7 — Verdad o Falso: Aislamiento

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

### 8 — El proceso de testing

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["flujo_de_trabajo"]

enunciado: "Ordena las etapas típicas de un ciclo de desarrollo de software orientado a calidad (Testing Pyramid):"

opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema/E2E"]
respuesta_orden: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema/E2E"]
tipo: ordenar

explicacion: |
  El flujo lógico comienza con las pruebas más granulares y rápidas (Unitarias), luego se combinan componentes (Integración) y finalmente se prueba el sistema completo en un entorno similar al real (Sistema/E2E).
```

### 9 — Selección de escenario

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["casos_practicos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El sistema debe validar que el módulo de 'Login' envíe las credenciales correctamente al servicio de 'Autenticación'.", "integracion"], ["El sistema debe validar que el método 'calcular_iva(monto)' devuelva el 21% del monto ingresado.", "unitarias"]]

enunciado: "Analiza el siguiente caso: '{casos[caso_idx][0]}'. ¿Qué tipo de prueba es?"

opciones_explicitas: ["unitarias", "integracion"]
respuesta: casos[caso_idx][1]
tipo: mc

explicacion: |
  Si el caso implica la interacción entre dos entidades distintas (Login -> Servicio), es de integración. Si solo valida la lógica de un método matemático o de cálculo simple, es unitaria.
```

### 10 — Completar flujo de datos

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["debug"]

enunciado: "En el contexto de pruebas de ___, un fallo puede indicar un problema en la interfaz entre dos componentes, no necesariamente en la lógica interna de cada uno."
tipo: completar
respuesta: "integracion"

explicacion: |
  Las pruebas de integración son cruciales para detectar errores de contrato, protocolos de comunicación o formatos de datos incorrectos que las pruebas unitarias (por su naturaleza aislada) no pueden detectar.
```

### 11 — El alcance de las pruebas unitarias

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

### 12 — El objetivo de la integración

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

### 13 — El error de la dependencia oculta

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "errores_comunes"]

respuesta: "de_integracion"
tipo: mc
opciones_explicitas: ["unitarias", "de_integracion"]

enunciado: "Si una prueba falla porque la interacción entre dos módulos es incorrecta, pero cada módulo funciona bien por separado, estamos ante un error de tipo: ___."

explicacion: |
  En este caso, el problema no reside en la lógica interna de los módulos (unitario), sino en el contrato o la comunicación entre ellos (integración).
```

### 14 — Secuencia de la estrategia de testing

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "flujo_de_trabajo"]

respuesta_orden: ["Unitarias", "Integración", "Sistema"]
tipo: ordenar
opciones_explicitas: ["Unitarias", "Integración", "Sistema"]

enunciado: "Ordena las etapas típicas de una estrategia de testing ascendente (Bottom-Up), desde lo más pequeño a lo más complejo."

explicacion: |
  El flujo lógico estándar comienza validando las piezas individuales (unitarias), luego cómo se conectan (integración) y finalmente el sistema completo.
```

### 15 — El uso de Mocks y Stubs

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["testing", "mocks"]

respuesta: "unitarias"
tipo: completar
respuestas_validas:
  - "unitarias"

enunciado: "Para aislar una pieza de código y evitar que dependencias externas (como una base de datos) afecten el resultado, se utilizan objetos simulados (Mocks/Stubs). Este enfoque es característico de las pruebas ___."

explicacion: |
  El uso de Mocks es fundamental en las pruebas unitarias para garantizar que el test solo evalúe la lógica de la unidad y no el comportamiento de sus dependencias.
```

### 16 — Diferencia fundamental de alcance

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "calidad_software"]

tipo: mc
opciones_explicitas: ["El objetivo de la prueba unitaria es verificar la interacción entre múltiples módulos.", "La prueba unitaria se enfoca en la lógica interna de un componente aislado.", "La prueba de integración busca validar la interfaz de usuario.", "Ambas pruebas tienen exactamente el mismo alcance y objetivo."]

respuesta: "La prueba unitaria se enfoca en la lógica interna de un componente aislado."

enunciado: "En el ciclo de vida de pruebas, ¿cuál es la principal distinción de una prueba unitaria respecto a una de integración?"

explicacion: |
  Las pruebas unitarias validan la unidad mínima de software (como una función o método) de forma aislada, mientras que las de integración verifican que los componentes funcionen correctamente al unirse.
```

### 17 — Verdadero o Falso: Aislamiento

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "conceptos"]

tipo: vf

enunciado: "En una prueba unitaria, si el componente que estamos probando depende de una base de datos, se debe utilizar un objeto simulado (mock) para mantener el aislamiento del componente."

respuesta: verdadero

explicacion: |
  Es correcto. Para que una prueba sea puramente unitaria, no debe depender de sistemas externos (DB, APIs, archivos); se utilizan mocks o stubs para simular esos comportamientos.
```

### 18 — Completar: El flujo de detección

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "flujo_de_errores"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["error_logica", "error_interfaz"], ["error_calculo", "error_comunicacion"]]

tipo: completar
respuesta: escenarios[escenario_idx][1]
respuestas_validas:
  - "error_logica"
  - "error_interfaz"
  - "error_calculo"
  - "error_comunicacion"

enunciado: "Si una función calcula mal un impuesto debido a un error en su algoritmo interno, el tipo de error detectado es un ___; pero si la función envía el dato correcto pero el receptor no sabe interpretarlo, el problema es un ___."

pasos:
  - "Identificar si el error es interno (lógica) o de interacción (interfaz)."
  - "Relacionar el tipo de error con el nivel de prueba correspondiente."

explicacion: |
  Los errores de lógica interna se detectan en pruebas unitarias, mientras que los errores de comunicación entre módulos se detectan en pruebas de integración.
```

### 19 — Ordenar: Niveles de prueba

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]

respuesta_orden: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]

enunciado: "Ordene los siguientes niveles de prueba según el orden lógico de ejecución en un proceso de desarrollo estándar (de lo más pequeño a lo más completo):"

explicacion: |
  El desarrollo sigue una pirámide: primero se asegura que cada pieza funcione (Unitarias), luego que las piezas encajen (Integración) y finalmente que el sistema completo cumpla su propósito (Sistema).
```

### 20 — Comparación de complejidad

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "complejidad"]

tipo: mc
opciones_explicitas: ["Las pruebas unitarias son generalmente más complejas de configurar que las de integración.", "Las pruebas de integración suelen ser más rápidas de ejecutar que las unitarias.", "Las pruebas unitarias son más fáciles de aislar que las de integración.", "Las pruebas de integración no requieren de código de prueba."]

respuesta: "Las pruebas unitarias son más fáciles de aislar que las de integración."

enunciado: "Al comparar la dificultad de preparación (setup) y aislamiento, ¿cuál de las siguientes afirmaciones es correcta?"

explicacion: |
  Las pruebas unitarias son fáciles de aislar porque solo requieren el componente y sus mocks. Las de integración son más complejas porque requieren configurar múltiples módulos, bases de datos o servicios reales para que interactúen.
```

### 21 — Identificación de tipo de prueba

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "calidad_software"]

variables:
  escenario: uno_de([["Se está probando si la función 'calcular_iva(monto)' devuelve el valor correcto para un número dado, sin considerar la base de datos.", "unitaria"], ["Se está probando si el módulo de 'pagos' logra comunicarse correctamente con la 'pasarela_de_pagos' externa.", "integracion"], ["Se está probando si un solo método de una clase procesa correctamente un string de entrada.", "unitaria"], ["Se está probando si la interacción entre el módulo de 'inventario' y el de 'ventas' actualiza el stock tras una compra.", "integracion"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["unitaria", "integracion"]

enunciado: "Dado el siguiente escenario: {escenario[0]}. ¿Qué tipo de prueba se está ejecutando?"

explicacion: |
  Las pruebas unitarias se enfocan en la lógica interna de una pieza mínima de código (función, método) de forma aislada. Las pruebas de integración verifican que la interacción entre diferentes módulos o componentes funcione correctamente.
```

### 22 — Verdadero o Falso: Alcance

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "conceptos"]

variables:
  respuesta_correcta: falso

tipo: vf
enunciado: "Las pruebas de integración tienen como objetivo principal verificar que cada función individual cumpla con su contrato de entrada y salida, de forma aislada de otros módulos."

respuesta: falso

explicacion: |
  Falso. Eso es la definición de pruebas unitarias. Las de integración buscan detectar fallos en las interfaces y la comunicación entre componentes ya probados.
```

### 23 — Completar: El objetivo de la integración

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "flujo_de_datos"]

respuestas_validas:
  - "flujo"
  - "interacción"
  - "comunicación"
respuesta: "interacción"
tipo: completar

enunciado: "Mientras que las pruebas unitarias validan la lógica de un componente aislado, las pruebas de ___________ validan que los componentes funcionen correctamente cuando se combinan."

explicacion: |
  La integración se centra en la interacción entre módulos para asegurar que el flujo de datos y el control entre ellos sea el esperado.
```

### 24 — Ordenar: Ciclo de vida de testing

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "metodologia"]

opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
respuesta_orden: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
tipo: ordenar

enunciado: "Ordena las fases de testing de menor a mayor alcance (de lo más pequeño a lo más complejo):"

explicacion: |
  El proceso estándar comienza con la validación de la unidad mínima (Unitarias), luego se unen las piezas (Integración) y finalmente se prueba el sistema completo (Sistema/E2E).
```

### 25 — Escenario de error en integración

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["testing", "debug"]

variables:
  caso: uno_de([["El módulo A envía un objeto JSON, pero el módulo B espera un XML.", "error_integracion"], ["La función 'sumar(a, b)' devuelve un resultado incorrecto debido a un error de redondeo.", "error_unitario"], ["Un método de validación de email no acepta caracteres especiales.", "error_unitario"], ["El módulo de base de datos no responde ante una consulta de un módulo de reporte.", "error_integracion"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["error_unitario", "error_integracion"]

enunciado: "Se detecta el siguiente problema: {caso[0]}. ¿A qué categoría de error pertenece principalmente?"

explicacion: |
  Si el error reside en la lógica interna de una función, es unitario. Si el error surge por la incompatibilidad de formatos o la falta de comunicación entre dos componentes que por separado funcionan bien, es un error de integración.
```
