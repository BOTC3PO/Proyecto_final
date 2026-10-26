# QA y Testing — Reporte de bugs (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Para qué

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Para que otra persona entienda y pueda arreglar el problema", "Para criticar al programador", "Para llenar un formulario", "Para borrar el defecto"]
respuesta: "Para que otra persona entienda y pueda arreglar el problema"

enunciado: "¿Para qué sirve un reporte de bug?"

explicacion: |
  Debe ser claro y objetivo.
```

### 2 — Título

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["titulo"]

tipo: mc
opciones_explicitas: ["\"Al pagar con una tarjeta vencida, la app se cierra\"", "\"No anda\"", "\"Problema grave!!!\"", "\"Bug 1\""]
respuesta: "\"Al pagar con una tarjeta vencida, la app se cierra\""

enunciado: "¿Cuál es un buen título de reporte?"

explicacion: |
  Es corto y específico.
```

### 3 — Pasos

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["pasos"]

tipo: mc
opciones_explicitas: ["Numerados, mínimos y claros", "En un párrafo largo", "Sin orden", "Solo \"hacer lo de siempre\""]
respuesta: "Numerados, mínimos y claros"

enunciado: "¿Cómo deben escribirse los pasos para reproducir?"

explicacion: |
  Quien los lea debe poder repetirlos sin preguntar.
```

### 4 — Esperado y obtenido

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["resultados"]

tipo: mc
opciones_explicitas: ["El esperado y el obtenido", "El bueno y el malo", "El de ayer y el de hoy", "El del programador y el del cliente"]
respuesta: "El esperado y el obtenido"

enunciado: "¿Qué dos resultados se describen en un reporte?"

explicacion: |
  La diferencia entre ambos es el defecto.
```

### 5 — Entorno

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["entorno"]

tipo: mc
opciones_explicitas: ["Versión del producto, navegador o dispositivo, sistema operativo y usuario o rol", "Solo el nombre del tester", "El sueldo", "El horario"]
respuesta: "Versión del producto, navegador o dispositivo, sistema operativo y usuario o rol"

enunciado: "¿Qué incluye el entorno?"

explicacion: |
  Algunos defectos solo ocurren en ciertos entornos.
```

### 6 — Frecuencia

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["frecuencia"]

tipo: mc
opciones_explicitas: ["Para indicar si ocurre siempre o a veces (por ejemplo, 3 de 3)", "Para sumar", "Para decorar", "No hace falta"]
respuesta: "Para indicar si ocurre siempre o a veces (por ejemplo, 3 de 3)"

enunciado: "¿Por qué se anota la frecuencia?"

explicacion: |
  Los defectos intermitentes son más difíciles de arreglar.
```

### 7 — Evidencia

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["evidencia"]

tipo: mc
opciones_explicitas: ["Capturas, grabaciones y logs", "Rumores", "Opiniones", "Ninguna"]
respuesta: "Capturas, grabaciones y logs"

enunciado: "¿Qué evidencia ayuda en un reporte?"

explicacion: |
  Muestra exactamente lo ocurrido.
```

### 8 — Severidad

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["severidad"]

tipo: mc
opciones_explicitas: ["Cuán grave es el efecto técnico del defecto", "Qué tan pronto hay que arreglarlo", "Quién lo encontró", "Cuánto cuesta"]
respuesta: "Cuán grave es el efecto técnico del defecto"

enunciado: "¿Qué mide la severidad?"

explicacion: |
  La prioridad mide la urgencia.
```

### 9 — Prioridad

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["prioridad"]

tipo: mc
opciones_explicitas: ["Qué tan pronto conviene arreglarlo, según el negocio", "Cuán feo es", "Cuántas líneas de código", "El tamaño del archivo"]
respuesta: "Qué tan pronto conviene arreglarlo, según el negocio"

enunciado: "¿Qué mide la prioridad?"

explicacion: |
  Es una decisión de negocio.
```

### 10 — Severidad crítica

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["severidad"]

tipo: mc
opciones_explicitas: ["Se pierden datos o el sistema no se puede usar", "Un texto con una letra mal", "Un color distinto", "Una alineación"]
respuesta: "Se pierden datos o el sistema no se puede usar"

enunciado: "¿Cuál es un defecto de severidad crítica?"

explicacion: |
  Es el nivel más alto.
```

### 11 — Baja y alta

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "intermedio"
  tags: ["prioridad"]

tipo: mc
opciones_explicitas: ["Un error de ortografía en el nombre de la empresa en la página principal", "Una caída del servidor", "Una pérdida de datos", "Un bloqueo de pagos"]
respuesta: "Un error de ortografía en el nombre de la empresa en la página principal"

enunciado: "¿Cuál es un ejemplo de severidad baja y prioridad alta?"

explicacion: |
  Es cosmético, pero muy visible.
```

### 12 — Un reporte por defecto

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Para poder asignarlo, corregirlo y cerrarlo por separado", "Para tener más reportes", "Por costumbre", "No conviene"]
respuesta: "Para poder asignarlo, corregirlo y cerrarlo por separado"

enunciado: "¿Por qué conviene reportar un solo defecto por reporte?"

explicacion: |
  Mezclar defectos complica el seguimiento.
```

### 13 — Duplicados

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["duplicados"]

tipo: mc
opciones_explicitas: ["Verificar que no esté ya reportado", "Reportar sin mirar", "Esperar una semana", "Borrar la lista"]
respuesta: "Verificar que no esté ya reportado"

enunciado: "¿Qué conviene hacer antes de reportar?"

explicacion: |
  Evita duplicados.
```

### 14 — Pasos mínimos

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "intermedio"
  tags: ["pasos"]

tipo: mc
opciones_explicitas: ["Quitar lo que no hace falta para que ocurra", "Escribir poco aunque falte", "Escribir todo", "Escribir solo el título"]
respuesta: "Quitar lo que no hace falta para que ocurra"

enunciado: "¿Qué significa dejar \"pasos mínimos\"?"

explicacion: |
  Facilita la reproducción.
```

### 15 — Datos sensibles

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["privacidad"]

tipo: mc
opciones_explicitas: ["Datos reales o sensibles, como claves y datos personales", "Capturas", "Pasos", "El título"]
respuesta: "Datos reales o sensibles, como claves y datos personales"

enunciado: "¿Qué se evita incluir en un reporte?"

explicacion: |
  Se usan datos de prueba y se oculta lo privado.
```

### 16 — Tono

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["tono"]

tipo: mc
opciones_explicitas: ["Neutro y basado en hechos", "Agresivo", "Irónico", "Con culpables"]
respuesta: "Neutro y basado en hechos"

enunciado: "¿Qué tono conviene usar?"

explicacion: |
  "La función devuelve 0" y no "el código está mal hecho".
```

### 17 — Intermitente

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "intermedio"
  tags: ["intermitente"]

tipo: mc
opciones_explicitas: ["Reportarlo indicando cuántas veces ocurrió", "No reportarlo", "Esperar a que sea constante", "Negarlo"]
respuesta: "Reportarlo indicando cuántas veces ocurrió"

enunciado: "¿Qué se hace con un defecto intermitente?"

explicacion: |
  Se anota la frecuencia y las condiciones.
```

### 18 — Estado final

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "intermedio"
  tags: ["ciclo"]

tipo: mc
opciones_explicitas: ["Verifica el arreglo y busca regresiones alrededor", "Cierra sin mirar", "Lo reabre siempre", "Lo borra"]
respuesta: "Verifica el arreglo y busca regresiones alrededor"

enunciado: "Un bug pasó a \"Corregido\". ¿Qué hace quien probó?"

explicacion: |
  El ciclo continúa hasta "Verificado" y "Cerrado".
```

### 19 — Reabrir

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["ciclo"]

tipo: mc
opciones_explicitas: ["Cuando el arreglo no resolvió el problema", "Cuando pasa mucho tiempo", "Cuando cambia el equipo", "Nunca"]
respuesta: "Cuando el arreglo no resolvió el problema"

enunciado: "¿Cuándo se reabre un bug?"

explicacion: |
  Vuelve al estado de corrección.
```

### 20 — Sin pasos

```
metadata:
  materia: "qa-testing"
  tema: "reporte_de_bugs"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Un reporte sin pasos para reproducir es suficiente si el título es claro."

explicacion: |
  Sin pasos, quien lo arregla no puede repetir el problema.
```

