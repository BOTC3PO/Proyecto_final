### 1 — El propósito de la documentación técnica
```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "basico"
  tags: ["documentacion", "comunicacion"]

tipo: mc
opciones_explicitas: ["Registrar la historia del proyecto para fines legales", "Servir como una guía detallada para la implementación y mantenimiento", "Reemplazar la necesidad de reuniones con el cliente", "Ser un documento estético para marketing"]

enunciado: "Un error común es creer que la documentación técnica tiene como fin principal la estética o el marketing. En realidad, el objetivo fundamental de un informe de diseño es ___."

respuesta: "Servir como una guía detallada para la implementación y mantenimiento"

explicacion: |
  La documentación técnica debe ser funcional. Su propósito es permitir que otros ingenieros (o el mismo equipo en el futuro) puedan entender, replicar, mantener o reparar el sistema diseñado sin ambigüedades.
```

### 2 — Veracidad de la documentación
```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "basico"
  tags: ["veracidad", "errores"]

tipo: vf

enunciado: "Es verdadero que un plano técnico debe ser lo suficientemente claro para que un profesional capacitado pueda interpretar las dimensiones y especificaciones sin necesidad de consultar al diseñador original para cada detalle."

respuesta: verdadero

explicacion: |
  Si un plano requiere consultas constantes al autor para ser interpretado, el diseño ha fallado en su objetivo de comunicación técnica. La autonomía del lector es un indicador de calidad.
```

### 3 — Secuencia de entrega de la solución
```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "intermedio"
  tags: ["proceso", "presentacion"]

tipo: ordenar
opciones_explicitas: ["Recopilación de datos y cálculos", "Elaboración de planos y diagramas", "Redacción del informe técnico final", "Presentación de la solución al cliente"]

respuesta: ["Recopilación de datos y cálculos", "Elaboración de planos y diagramas", "Redacción del informe técnico final", "Presentación de la solución al cliente"]

enunciado: "Para asegurar una comunicación efectiva y coherente de la solución, se debe seguir un orden lógico en la preparación de los entregables. Ordene los pasos:"

explicacion: |
  No se pueden dibujar planos sin haber validado los cálculos previos, y no se puede presentar una solución al cliente sin haber consolidado toda la información en un informe técnico que respalde los diagramas.
```

### 4 — El error de la ambigüedad en presentaciones
```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "intermedio"
  tags: ["presentacion", "errores"]

variables:
  escenario: uno_de([
    ["Presentación con exceso de texto y tablas pequeñas", "El cliente se distrae leyendo y no escucha al orador"],
    ["Presentación con gráficos abstractos sin ejes", "El cliente no puede interpretar los datos presentados"],
    ["Presentación con lenguaje excesivamente técnico para un cliente no experto", "El cliente no comprende el valor de la solución"]
  ])

tipo: mc
opciones_explicitas: ["Falta de claridad visual", "Falta de rigor técnico", "Exceso de información técnica para la audiencia"]

enunciado: "Un error crítico al presentar una solución ante un cliente que no es especialista en el área es: {escenario[0]}."

respuesta: "Exceso de información técnica para la audiencia"

explicacion: |
  La comunicación debe adaptarse al receptor. Un error común es asumir que el cliente entiende la terminología técnica profunda, lo que genera una desconexión entre la solución propuesta y la comprensión del cliente.
```

### 5 — Componentes de un informe de diseño
```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "avanzado"
  tags: ["informe", "estructura"]

variables:
  datos: uno_de([
    ["Memoria de cálculo", "Resumen ejecutivo"],
    ["Planos de conjunto", "Lista de materiales"],
    ["Análisis de riesgos", "Conclusiones"]
  ])

tipo: completar
respuestas_validas: ["Memoria de cálculo", "Resumen ejecutivo", "Planos de conjunto", "Lista de materiales", "Análisis de riesgos", "Conclusiones"]

enunciado: "En un informe de ingeniería profesional, el apartado que contiene el desarrollo matemático y la justificación de las decisiones de diseño se denomina ___."

respuesta: "Memoria de cálculo"

explicacion: |
  La memoria de cálculo es el pilar que sostiene la validez de la solución. Sin ella, el diseño es solo una idea; con ella, es una solución técnica verificable y justificable.
```