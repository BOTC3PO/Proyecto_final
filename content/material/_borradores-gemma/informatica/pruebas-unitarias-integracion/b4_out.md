### 1 — Diferencia fundamental de alcance
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

### 2 — Verdadero o Falso: Aislamiento
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

### 3 — Completar: El flujo de detección
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "flujo_de_errores"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["error_logica", "error_interfaz"],
    ["error_calculo", "error_comunicacion"]
  ]

respuesta: tabla[escenario_idx][1]
tipo: completar
respuestas_validas: ["error_logica", "error_interfaz", "error_calculo", "error_comunicacion"]

enunciado: "Si una función calcula mal un impuesto debido a un error en su algoritmo interno, el tipo de error detectado es un ___; pero si la función envía el dato correcto pero el receptor no sabe interpretarlo, el problema es un ___."

pasos:
  - "Identificar si el error es interno (lógica) o de interacción (interfaz)."
  - "Relacionar el tipo de error con el nivel de prueba correspondiente."

explicacion: |
  Los errores de lógica interna se detectan en pruebas unitarias, mientras que los errores de comunicación entre módulos se detectan en pruebas de integración.
```

### 4 — Ordenar: Niveles de prueba
```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]

respuesta: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]

enunciado: "Ordene los siguientes niveles de prueba según el orden lógico de ejecución en un proceso de desarrollo estándar (de lo más pequeño a lo más completo):"

explicacion: |
  El desarrollo sigue una pirámide: primero se asegura que cada pieza funcione (Unitarias), luego que las piezas encajen (Integración) y finalmente que el sistema completo cumpla su propósito (Sistema).
```

### 5 — Comparación de complejidad
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