### 1 — El cierre del proyecto "Alpha"
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["gestion", "cierre"]

enunciado: "Al finalizar el proyecto 'Alpha', el equipo detectó que el uso de metodologías ágiles permitió una entrega 2 semanas antes de lo previsto. Sin embargo, la falta de documentación técnica generó retrasos en el mantenimiento. ¿Cuál es la acción principal en esta etapa de cierre?"

opciones_explicitas: ["Realizar una reunión de retrospectiva para registrar lecciones aprendidas", "Entregar el producto y disolver el equipo inmediatamente", "Ignorar los errores para mantener la moral alta"]

respuesta: "Realizar una reunión de retrospectiva para lecciones aprendidas"
tipo: mc

explicacion: |
  El cierre formal no es solo entregar el producto, sino capturar el conocimiento (lecciones aprendidas) para mejorar procesos futuros.
```

### 2 — Identificación de causas
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["analisis", "causa_raiz"]

variables:
  datos: [["Falta de comunicación", "Retraso en aprobaciones"], ["Error de presupuesto", "Compra de materiales"], ["Falta de capacitación", "Lentitud en ejecución"]]
  idx: uno_de([0,1,2])

enunciado: "En el caso analizado, se identificó que el problema principal fue: {datos[idx][0]} y su consecuencia directa fue: {datos[idx][1]}."

respuestas_validas: ["Falta de comunicación", "Error de presupuesto", "Falta de capacitación"]
tipo: completar

explicacion: |
  Identificar la causa raíz y su consecuencia es vital para que la lección aprendida sea accionable en el siguiente proyecto.
```

### 3 — Veracidad de la gestión de lecciones
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "basico"
  tags: ["verdadero_falso"]

enunciado: "Si las lecciones aprendidas de un proyecto no se documentan en un repositorio accesible, se dice que el proceso de cierre ha sido efectivo para la organización."

respuesta: falso
tipo: vf

explicacion: |
  Un cierre es ineficaz si el conocimiento se pierde con la disolución del equipo; la documentación es clave para la mejora continua.
```

### 4 — Secuencia de cierre formal
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

opciones_explicitas: ["Entrega final y aceptación del cliente", "Reunión de retrospectiva y registro de lecciones", "Archivo de documentación y liberación de recursos", "Análisis de cumplimiento de objetivos"]

respuesta: ["Entrega final y aceptación del cliente", "Análisis de cumplimiento de objetivos", "Reunión de retrospectiva y registro de lecciones", "Archivo de documentación y liberación de recursos"]
tipo: ordenar

explicacion: |
  El orden lógico implica primero validar el éxito con el cliente, analizar el desempeño, extraer el conocimiento y finalmente liberar los recursos.
```

### 5 — El valor de los errores
```
metadata:
  materia: "resolucion-problemas"
  tema: "cierre_y_lecciones_aprendidas"
  nivel: "avanzado"
  tags: ["mejora_continua"]

variables:
  escenario: [["Error en estimación de tiempos", "Mejorar uso de software de gestión"], ["Conflicto de roles", "Definir matrices de responsabilidad"]]
  idx: uno_de([0,1,2])

enunciado: "Durante el cierre, se detectó: {escenario[idx][0]}. La acción correctiva para el próximo proyecto será: {escenario[idx][1]}."

respuestas_validas: ["Mejorar uso de software de gestión", "Definir matrices de responsabilidad"]
tipo: completar

explicacion: |
  Las lecciones aprendidas deben transformarse en acciones concretas (acciones correctivas) para evitar la repetición de errores.
```