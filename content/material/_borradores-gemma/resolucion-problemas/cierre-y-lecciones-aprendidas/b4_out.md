### 1 — Cierre vs. Entrega
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion_proyectos", "terminacion"]

enunciado: "Mientras que la 'entrega' se refiere al traspaso del producto al cliente, el ___ se refiere al proceso administrativo y formal de finalizar todas las actividades del proyecto."

respuestas_validas: ["cierre"]
tipo: completar

explicacion: |
  El cierre es el proceso administrativo que asegura que todos los contratos se hayan completado, los recursos se hayan liberado y la documentación esté lista, independientemente de si el producto fue entregado con éxito.
```

### 2 — Lecciones Aprendidas vs. Reporte de Estado
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["documentacion", "mejora_continua"]

variables:
  es_correcta: verdadero

enunciado: "El propósito principal de un 'Reporte de Estado' es informar el progreso actual, mientras que el propósito de las 'Lecciones Aprendidas' es ___."

opciones_explicitas: ["mejorar procesos futuros", "notificar retrasos", "justificar el presupuesto"]
respuesta: "mejorar procesos futuros"
tipo: mc

explicacion: |
  El reporte de estado es una herramienta de control de ejecución, mientras que las lecciones aprendidas son una herramienta de gestión del conocimiento para la mejora continua.
```

### 3 — Retrospectiva vs. Auditoría
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["control", "calidad"]

enunciado: "¿Es correcto afirmar que una 'Auditoría de Proyecto' busca identificar errores para el aprendizaje, mientras que una 'Retrospectiva' busca verificar el cumplimiento de estándares y normativas?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: vf

explicacion: |
  Es al revés: la Retrospectiva (común en metodologías ágiles) se enfoca en el aprendizaje y la mejora del equipo, mientras que la Auditoría es un proceso formal para verificar el cumplimiento de procesos, normas o estándares.
```

### 4 — Flujo de Cierre de Proyecto
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

enunciado: "Ordene los pasos lógicos para un cierre de proyecto efectivo, desde la finalización técnica hasta la liberación de recursos."

opciones_explicitas: ["Aceptación formal del cliente", "Documentación de lecciones aprendidas", "Liberación de equipo y recursos", "Cierre administrativo y contractual"]
respuesta: ["Aceptación formal del cliente", "Documentación de lecciones aprendidas", "Liberación de equipo y recursos", "Cierre administrativo y contractual"]
tipo: ordenar

explicacion: |
  Primero se valida el éxito con el cliente, luego se extrae el conocimiento (lecciones), después se libera el capital humano/material y finalmente se cierran los aspectos legales y administrativos.
```

### 5 — Registro de Lecciones Aprendidas
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["conocimiento", "archivo"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un error en la comunicación", "un retraso en el proveedor"], ["mejorar la reunión diaria", "revisar la cadena de suministro"]]

enunciado: "Si el problema detectado fue {escenario[idx][0]}, la acción correctiva para el próximo proyecto debería ser {escenario[idx][1]}."

respuesta: "mejorar la reunión diaria"
tipo: mc
opciones_explicitas: ["mejorar la reunión diaria", "revisar la cadena de suministro"]

explicacion: |
  Las lecciones aprendidas deben ser específicas para el problema detectado para que la acción correctiva sea efectiva en el futuro.
```