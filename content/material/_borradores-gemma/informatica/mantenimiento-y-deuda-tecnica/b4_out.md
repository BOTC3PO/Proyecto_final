### 1 — Mantenimiento vs Evolución
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "ciclo_de_vida"]

respuesta: "evolución"
tipo: "completar"
respuestas_validas: ["evolución", "evolucion"]

enunciado: "Mientras que el mantenimiento correctivo se enfoca en reparar errores, el proceso de añadir nuevas funcionalidades o adaptar el software a nuevos entornos se denomina ___."

explicacion: |
  El mantenimiento correctivo busca solucionar fallos existentes, mientras que la evolución (o mantenimiento evolutivo) busca expandir las capacidades del sistema para satisfacer nuevas necesidades del usuario.
```

### 2 — Deuda Técnica y Calidad
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "calidad"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: uno_de([datos[escenario_idx][1]])
tipo: "mc"
opciones_explicitas: ["Aumento de la velocidad de entrega inicial", "Reducción del costo de mantenimiento", "Mejora de la legibilidad del código", "Reducción de la complejidad ciclomática"]

enunciado: "En el escenario de {datos[escenario_idx][0]}, la principal consecuencia a largo plazo es:"

variables:
  datos: [
    ["decidir tomar un atajo en el diseño para cumplir con una fecha de entrega inmediata", "Aumento de la velocidad de entrega inicial"],
    ["ignorar las pruebas unitarias para acelerar el despliegue", "Aumento de la velocidad de entrega inicial"]
  ]

explicacion: |
  La deuda técnica suele ser una decisión consciente (o no) para ganar velocidad de entrega a corto plazo, pero genera un "interés" en forma de mayor dificultad para realizar cambios en el futuro.
```

### 3 — Tipos de Mantenimiento
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento", "tipos"]

respuesta: "preventivo"
tipo: "mc"
opciones_explicitas: ["correctivo", "evolutivo", "preventivo", "adaptativo"]

enunciado: "Si un equipo de desarrollo realiza una refactorización para mejorar la estructura interna del código sin cambiar su comportamiento externo, está realizando mantenimiento ___."

explicacion: |
  El mantenimiento preventivo busca mejorar la estructura del software para evitar problemas futuros (como la degradación por deuda técnica), sin alterar la funcionalidad actual.
```

### 4 — El concepto de Interés de la Deuda
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "costo"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que la deuda técnica se diferencia de la mala calidad de software en que la deuda suele ser una decisión estratégica para acelerar el desarrollo?"

explicacion: |
  Exacto. La mala calidad es un error o descuido, mientras que la deuda técnica es a menudo una decisión deliberada de "pedir prestado" tiempo de diseño para ganar tiempo de mercado.
```

### 5 — Ciclo de vida del Refactorizado
```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["refactorizacion", "deuda_tecnica"]

opciones_explicitas: ["Identificar deuda técnica", "Escribir pruebas unitarias", "Ejecutar refactorización", "Verificar integridad"]

respuesta: ["Identificar deuda técnica", "Escribir pruebas unitas", "Ejecutar refactorización", "Verificar integridad"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para abordar una deuda técnica mediante refactorización de forma segura:"

explicacion: |
  Para refactorizar sin introducir nuevos errores, primero se debe identificar el problema, asegurar la existencia de pruebas (test suite) para garantizar el comportamiento actual, realizar el cambio y finalmente verificar que todo siga funcionando.
```