### 1 — Estructura básica de un reporte de bug
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["estructura", "reporte", "componentes"]
tipo: completar
enunciado: "En un reporte de bug profesional, el campo que describe brevemente el problema para que otros puedan buscarlo rápidamente se llama:"
respuesta: "titulo"
respuestas_validas:
  - "titulo"
  - "titulo del bug"
  - "titulo del problema"
  - "resumen"
explicacion: "El 'titulo' (o resumen) es el campo clave que permite la indexación y búsqueda rápida. Debe ser conciso y descriptivo."
pasos:
  - "Identificar los campos estándar de un bug report."
  - "Reconocer que el título es el identificador principal para búsquedas."
```

### 2 — Pasos para reproducir (Reproducibility)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["reproduccion", "pasos", "claridad"]
tipo: vf
enunciado: "Es válido omitir los 'Pasos para reproducir' si el bug ocurre de manera aleatoria y no es determinista."
respuesta: falso
explicacion: "Si no se pueden proporcionar pasos precisos, se debe indicar 'Pasos: No reproducibles consistentemente' y añadir logs o condiciones de entorno. Omitirlo por completo hace el bug inválido para el desarrollador."
uno_de(["Es válido", "No es válido"])
```

### 3 — Priorización de Bugs (Severity)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["prioridad", "severity", "clasificacion"]
tipo: mc
enunciado: "Un bug que causa la caída del servidor (crash) y pérdida de datos no guardados tiene una severidad de:"
opciones_explicitas:
  - "Bloqueante (Critical/Blocker)"
  - "Mayor (Major)"
  - "Menor (Minor)"
  - "Trivial"
respuesta: "Bloqueante (Critical/Blocker)"
explicacion: "La pérdida de datos y el crash del sistema son impactos críticos que detienen el trabajo o dañan la integridad del sistema, requiriendo atención inmediata."
```

### 4 — Entorno de ejecución (Environment)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["entorno", "reproduccion", "contexto"]
tipo: completar
enunciado: "Para aislar el problema, el campo 'Entorno' debe especificar al menos el Sistema Operativo y la versión del:"
respuesta: "navegador"
respuestas_validas:
  - "navegador"
  - "browser"
  - "cliente web"
  - "navegador web"
explicacion: "En aplicaciones web, la versión del navegador es crucial ya que el rendering puede variar entre Chrome, Firefox, Safari, etc."
```

### 5 — Adjuntar evidencia (Attachments)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["evidencia", "screenshots", "logs"]
tipo: mc
enunciado: "Cuál es la mejor práctica al adjuntar capturas de pantalla de un bug visual?"
opciones_explicitas:
  - "Incrustar la imagen directamente en el cuerpo del texto sin compresión"
  - "Adjuntar el archivo como anexo y referenciarlo en el texto"
  - "Describir la imagen en texto en lugar de adjuntarla"
  - "Enviar la captura por correo electrónico separado"
respuesta: "Adjuntar el archivo como anexo y referenciarlo en el texto"
explicacion: "Los sistemas de gestión de bugs (Jira, Trello, etc.) manejan mejor los archivos adjuntos como anexo para mantener el historial limpio y accesible, referenciándolos en el cuerpo."
```

### 6 — Resultado Esperado vs Real
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["expectativa", "comparacion", "claridad"]
tipo: completar
enunciado: "El campo 'Resultado Esperado' debe describir el comportamiento según el:"
respuesta: "requisito"
respuestas_validas:
  - "requisito"
  - "especificacion"
  - "diseño"
  - "documento de requisitos"
explicacion: "El resultado esperado se basa en la especificación o requisito funcional, no en lo que el QA 'cree' que debería pasar sin documentación."
```

### 7 — Duplicados (Duplicates)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["gestion", "duplicados", "workflow"]
tipo: vf
enunciado: "Si encuentras un bug que ya fue reportado por otro QA, debes crear un nuevo ticket detallado para asegurarte de que sea corregido."
respuesta: falso
explicacion: "Debes marcar el nuevo reporte como 'Duplicado' y vincularlo al ticket original para evitar trabajo redundante y centralizar la discusión."
uno_de(["Debes crear", "No debes crear"])
```

### 8 — Pasos mínimos (Minimal Steps)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["eficiencia", "pasos", "concision"]
tipo: mc
enunciado: "Al escribir los pasos para reproducir un bug, el objetivo principal es:"
opciones_explicitas:
  - "Detallar cada clic del mouse y movimiento del cursor"
  - "Proporcionar el conjunto mínimo de pasos necesarios para reproducir el error consistentemente"
  - "Incluir toda la configuración del sistema operativo"
  - "Escribir un tutorial completo de la aplicación"
respuesta: "Proporcionar el conjunto mínimo de pasos necesarios para reproducir el error consistentemente"
explicacion: "Los desarrolladores quieren reproducirlo rápido. Pasos innecesarios ralentizan la depuración."
```

### 9 — Estado del Bug (Workflow)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["workflow", "estados", "jira"]
tipo: completar
enunciado: "Cuando un desarrollador corrige el código y asigna el ticket de vuelta al QA para verificación, el estado cambia a:"
respuesta: "en revision"
respuestas_validas:
  - "en revision"
  - "in review"
  - "para prueba"
  - "test ready"
  - "waiting for qa"
explicacion: "El estado 'En Revisión' o 'Para Prueba' indica que el desarrollador ha terminado su trabajo y espera la validación del QA."
```

### 10 — Regresión (Regression)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["regresion", "impacto", "calidad"]
tipo: mc
enunciado: "Un bug que hace que una funcionalidad que antes funcionaba deje de hacerlo tras una actualización se clasifica como:"
opciones_explicitas:
  - "Nuevo Feature"
  - "Bug de Regresión"
  - "Mejora de Rendimiento"
  - "Tarea Técnica"
respuesta: "Bug de Regresión"
explicacion: "La regresión implica la pérdida de funcionalidad previamente verificada, lo que suele tener alta prioridad."
```

### 11 — Log de errores (Logs)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["debugging", "logs", "console"]
tipo: completar
enunciado: "En aplicaciones web, la consola del navegador (F12) es útil para ver errores de:"
respuesta: "javascript"
respuestas_validas:
  - "javascript"
  - "js"
  - "console errors"
  - "errores de consola"
explicacion: "La consola muestra errores de ejecución de JS, peticiones fallidas y advertencias que ayudan al desarrollador frontend a identificar la causa."
```

### 12 — Reproducibilidad (Reproducibility Rate)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["reproduccion", "frecuencia", "datos"]
tipo: mc
enunciado: "Si un bug ocurre 1 de cada 10 intentos, en el reporte se debe indicar que es:"
opciones_explicitas:
  - "Intermitente (Intermittent)"
  - "Cronico (Chronic)"
  - "Constante (Constant)"
  - "Determinista"
respuesta: "Intermitente (Intermittent)"
explicacion: "Los bugs intermitentes son difíciles de depurar; indicar la frecuencia ayuda a priorizar y buscar condiciones de carrera o de red."
```

### 13 — Cierre del Bug (Resolution)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["cierre", "validacion", "workflow"]
tipo: completar
enunciado: "Una vez verificado que el bug está corregido, el QA debe cambiar el estado a:"
respuesta: "cerrado"
respuestas_validas:
  - "cerrado"
  - "closed"
  - "resuelto"
  - "fixed"
explicacion: "El estado 'Cerrado' confirma que la validación fue exitosa y el ciclo del bug ha terminado."
```

### 14 — Ambiente de Desarrollo vs Producción
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["ambientes", "deploy", "entorno"]
tipo: vf
enunciado: "Un bug encontrado en el entorno de desarrollo local del QA es automáticamente un bug de producción."
respuesta: falso
explicacion: "Puede ser un problema de configuración local, datos de prueba o versión de dependencias. Debe verificarse en el entorno correspondiente antes de etiquetarlo como bug de prod."
uno_de(["Es automáticamente", "No es automáticamente"])
```

### 15 — Pasos para Reproducir (Formato)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["formato", "lista", "estructura"]
tipo: mc
enunciado: "El formato estándar para los 'Pasos para reproducir' es:"
opciones_explicitas:
  - "Un párrafo narrativo continuo"
  - "Una lista numerada ordenada cronológicamente"
  - "Una lista con viñetas sin orden"
  - "Código fuente del formulario"
respuesta: "Una lista numerada ordenada cronológicamente"
explicacion: "La numeración garantiza que el orden de las acciones se respete estrictamente durante la reproducción."
```

### 16 — Severity vs Priority
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["prioridad", "severidad", "diferencia"]
tipo: completar
enunciado: "La 'Prioridad' se refiere a la urgencia de corrección por parte del:"
respuesta: "equipo"
respuestas_validas:
  - "equipo"
  - "equipo de desarrollo"
  - "product owner"
  - "manager"
explicacion: "La Severidad es técnica (impacto en el sistema), mientras que la Prioridad es de negocio/quién lo corrige primero."
```

### 17 — Información de Usuario (User Info)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["usuario", "rol", "permisos"]
tipo: mc
enunciado: "Si un bug solo ocurre con usuarios con rol 'Admin', se debe especificar en el reporte:"
opciones_explicitas:
  - "El rol del usuario y sus permisos"
  - "La versión del sistema operativo"
  - "El ancho de banda de la red"
  - "El tipo de mouse utilizado"
respuesta: "El rol del usuario y sus permisos"
explicacion: "Los bugs relacionados con RBAC (Role-Based Access Control) requieren especificar el contexto del usuario para ser reproducidos correctamente."
```

### 18 — Datos de Entrada (Input Data)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["datos", "input", "caso de prueba"]
tipo: completar
enunciado: "Si el bug depende de un dato específico (ej. fecha futura), se debe adjuntar o listar los:"
respuesta: "datos de prueba"
respuestas_validas:
  - "datos de prueba"
  - "test data"
  - "datos de entrada"
  - "input data"
explicacion: "Proporcionar los datos exactos permite al desarrollador recrear la condición sin adivinar los valores críticos."
```

### 19 — Bug Report en Móvil
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["movil", "dispositivo", "responsive"]
tipo: mc
enunciado: "Al reportar un bug en una app móvil, el campo 'Entorno' debe incluir obligatoriamente:"
opciones_explicitas:
  - "La marca y modelo del dispositivo y la versión del SO"
  - "La resolución del monitor"
  - "El tipo de teclado físico"
  - "La velocidad del procesador"
respuesta: "La marca y modelo del dispositivo y la versión del SO"
explicacion: "Los comportamientos visuales y de rendimiento varían enormemente entre dispositivos y versiones de iOS/Android."
```

### 20 — Validación de Corrección (Retest)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["validacion", "retest", "calidad"]
tipo: completar
enunciado: "Al verificar una corrección, el QA no solo debe probar el bug original, sino también realizar pruebas de:"
respuesta: "regresion"
respuestas_validas:
  - "regresion"
  - "regresión"
  - "impacto"
  - "afectados"
explicacion: "Es crucial asegurar que la corrección no haya introducido nuevos errores en funcionalidades relacionadas (regresión)."
```

### 21 — Comentarios y Discusión
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["comunicacion", "historial", "jira"]
tipo: mc
enunciado: "Las discusiones técnicas sobre la solución del bug deben realizarse:"
opciones_explicitas:
  - "En el chat de la empresa para mayor rapidez"
  - "En los comentarios del ticket para mantener el historial centralizado"
  - "Por correo electrónico al desarrollador"
  - "En la documentación externa"
respuesta: "En los comentarios del ticket para mantener el historial centralizado"
explicacion: "Todo el contexto de la decisión y el diagnóstico debe quedar registrado en el ticket para futuros audits o referencias."
```

### 22 — Bug Report de Seguridad
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["seguridad", "vulnerabilidad", "privacidad"]
tipo: completar
enunciado: "Un bug de seguridad (ej. SQL Injection) debe reportarse con la etiqueta de:"
respuesta: "critico"
respuestas_validas:
  - "critico"
  - "crítico"
  - "security"
  - "seguridad"
  - "vulnerabilidad"
explicacion: "Los bugs de seguridad tienen impacto máximo en la integridad y privacidad, clasificándose siempre como críticos."
```

### 23 — Pasos para Reproducir (Ambigüedad)
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["claridad", "ambiguedad", "pasos"]
tipo: vf
enunciado: "Es aceptable usar frases como 'Luego de un tiempo' o 'A veces' en los pasos para reproducir."
respuesta: falso
explicacion: "Los pasos deben ser deterministas y precisos. 'A veces' o 'Luego de un tiempo' son ambiguos e inutilizables para la depuración técnica."
uno_de(["Es aceptable", "No es aceptable"])
```

### 24 — Campo 'Asignado a'
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["workflow", "asignacion", "responsabilidad"]
tipo: mc
enunciado: "Inicialmente, el campo 'Asignado a' en un nuevo reporte de bug suele estar:"
opciones_explicitas:
  - "En blanco o asignado al equipo de QA/Desarrollo general"
  - "En el desarrollador que lo encontró"
  - "En el gerente de proyecto"
  - "En soporte técnico"
respuesta: "En blanco o asignado al equipo de QA/Desarrollo general"
explicacion: "El QA reporta y el sistema o el triage asigna al desarrollador responsable del módulo afectado."
```

### 25 — Cierre por "No Reproducible"
```yaml
metadata:
  materia: "qa-testing"
  tema: "reporte-de-bugs"
  nivel: "intermedio"
  tags: ["cierre", "no reproducible", "workflow"]
tipo: completar
enunciado: "Si tras múltiples intentos en el entorno correcto el bug no ocurre, el estado final suele ser:"
respuesta: "no reproducible"
respuestas_validas:
  - "no reproducible"
  - "cannot reproduce"
  - "no se puede reproducir"
  - "unable to reproduce"
explicacion: "Se cierra con esta resolución pero se deja la puerta abierta si reaparece, documentando los intentos fallidos."
```