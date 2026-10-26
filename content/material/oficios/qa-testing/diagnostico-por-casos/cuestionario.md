# QA y Testing — Diagnóstico por casos en QA (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Primer paso

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Reproducir el problema con pasos claros", "Ignorarlo", "Reinstalar todo", "Culpar al usuario"]
respuesta: "Reproducir el problema con pasos claros"

enunciado: "Un usuario dice \"se rompió\". ¿Qué se hace primero?"

explicacion: |
  Sin reproducción no se puede analizar.
```

### 2 — Aislar

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["aislar"]

tipo: mc
opciones_explicitas: ["Averiguar en qué condiciones ocurre (datos, navegador, usuario)", "Desconectar la computadora", "Borrar los datos", "Esconder el problema"]
respuesta: "Averiguar en qué condiciones ocurre (datos, navegador, usuario)"

enunciado: "¿Qué significa aislar un defecto?"

explicacion: |
  Reduce las posibles causas.
```

### 3 — Intermitente

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["intermitente"]

tipo: mc
opciones_explicitas: ["Qué cambia entre las veces que ocurre y las que no", "Nada, es suerte", "Solo cuándo fue la última vez", "Reiniciar siempre"]
respuesta: "Qué cambia entre las veces que ocurre y las que no"

enunciado: "Un defecto \"a veces\" aparece. ¿Qué se busca?"

explicacion: |
  Datos, hora, orden de pasos, estado previo, red.
```

### 4 — En mi equipo no pasa

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["entorno"]

tipo: mc
opciones_explicitas: ["Comparar los entornos (versión, configuración, datos)", "Cerrar el reporte", "Insistir sin pruebas", "Cambiar el título"]
respuesta: "Comparar los entornos (versión, configuración, datos)"

enunciado: "El programador dice \"en mi equipo funciona\". ¿Qué conviene hacer?"

explicacion: |
  La diferencia entre entornos suele explicar el defecto.
```

### 5 — Regresión

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["regresion"]

tipo: mc
opciones_explicitas: ["Repetirlo con la versión anterior para confirmar la regresión", "Esperar", "Revertir todo sin probar", "Ignorarlo"]
respuesta: "Repetirlo con la versión anterior para confirmar la regresión"

enunciado: "Tras una versión nueva, algo dejó de funcionar. ¿Qué conviene?"

explicacion: |
  Identifica qué cambió.
```

### 6 — Móvil

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["compatibilidad"]

tipo: mc
opciones_explicitas: ["De compatibilidad o de diseño adaptable", "De base de datos", "De seguridad", "De red"]
respuesta: "De compatibilidad o de diseño adaptable"

enunciado: "Una pantalla se ve distinta en el celular. ¿Qué tipo de problema es probable?"

explicacion: |
  Se prueba con otros tamaños y navegadores.
```

### 7 — Lento

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["rendimiento"]

tipo: mc
opciones_explicitas: ["¿Desde cuándo? ¿Con cuánta información? ¿En qué paso? ¿A cuántos usuarios afecta?", "¿De qué color es?", "¿Quién lo usa?", "¿Cómo se llama el servidor?"]
respuesta: "¿Desde cuándo? ¿Con cuánta información? ¿En qué paso? ¿A cuántos usuarios afecta?"

enunciado: "Un sistema \"está lento\". ¿Qué preguntas ayudan?"

explicacion: |
  Se busca identificar el cuello de botella.
```

### 8 — Cálculo distinto

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["calculo"]

tipo: mc
opciones_explicitas: ["Redondeos y tipos de datos (entero, decimal)", "La conexión", "La contraseña", "El color"]
respuesta: "Redondeos y tipos de datos (entero, decimal)"

enunciado: "Un cálculo da un resultado distinto al esperado por centavos. ¿Qué se revisa?"

explicacion: |
  Los redondeos y los flotantes son una causa frecuente.
```

### 9 — Fechas

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["fechas"]

tipo: mc
opciones_explicitas: ["Zonas horarias", "El tamaño del disco", "Los colores", "El teclado"]
respuesta: "Zonas horarias"

enunciado: "Un informe muestra una fecha un día corrida. ¿Qué causa es frecuente?"

explicacion: |
  Guardar y mostrar fechas con distintas zonas horarias genera desfases.
```

### 10 — Dato perdido

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["datos"]

tipo: mc
opciones_explicitas: ["Si llegó a guardarse y si hubo un error silencioso o una modificación por otro usuario", "Si el usuario es amable", "Si la pantalla es grande", "Nada"]
respuesta: "Si llegó a guardarse y si hubo un error silencioso o una modificación por otro usuario"

enunciado: "\"Se perdió un dato\". ¿Qué se verifica primero?"

explicacion: |
  Se sigue el recorrido del dato.
```

### 11 — Requisito ambiguo

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["requisito"]

tipo: mc
opciones_explicitas: ["Preguntar antes de decidir", "Reportarlo como grave", "Ignorarlo", "Resolverlo a ojo"]
respuesta: "Preguntar antes de decidir"

enunciado: "Se duda si algo es defecto porque el requisito no es claro. ¿Qué se hace?"

explicacion: |
  El requisito es el oráculo.
```

### 12 — No es defecto

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["clasificar"]

tipo: mc
opciones_explicitas: ["Un mal uso o una limitación conocida", "Una pérdida de datos", "Un cierre inesperado", "Un error de cálculo"]
respuesta: "Un mal uso o una limitación conocida"

enunciado: "¿Cuál de estos casos NO es necesariamente un defecto?"

explicacion: |
  Se decide con base en el requisito.
```

### 13 — Cambio solicitado

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["clasificar"]

tipo: mc
opciones_explicitas: ["Un cambio solicitado, no un defecto", "Un defecto crítico", "Una regresión", "Un error de usuario"]
respuesta: "Un cambio solicitado, no un defecto"

enunciado: "Un comportamiento \"inesperado\" fue pedido por el cliente la semana pasada. ¿Qué es?"

explicacion: |
  Conviene revisar los cambios de requisitos.
```

### 14 — Alternativa

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["severidad"]

tipo: mc
opciones_explicitas: ["Porque afecta la severidad y la prioridad", "No importa", "Solo para el título", "Para el color"]
respuesta: "Porque afecta la severidad y la prioridad"

enunciado: "¿Por qué importa saber si hay alternativa al problema?"

explicacion: |
  Si hay una alternativa razonable, la severidad baja.
```

### 15 — A cuántos afecta

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["prioridad"]

tipo: mc
opciones_explicitas: ["Porque ayuda a decidir la prioridad", "Porque es obligatorio", "Para escribir menos", "No importa"]
respuesta: "Porque ayuda a decidir la prioridad"

enunciado: "¿Por qué importa a cuántas personas afecta un defecto?"

explicacion: |
  Un defecto que afecta a todos suele tener prioridad alta.
```

### 16 — Riesgo

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["riesgo"]

tipo: mc
opciones_explicitas: ["Lo que más daña si falla: datos, dinero, seguridad y funciones muy usadas", "Lo más fácil", "Lo más lindo", "Lo más nuevo"]
respuesta: "Lo que más daña si falla: datos, dinero, seguridad y funciones muy usadas"

enunciado: "Con poco tiempo, ¿qué se prueba primero?"

explicacion: |
  Se prioriza por riesgo.
```

### 17 — Cosmético

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["riesgo"]

tipo: mc
opciones_explicitas: ["Normalmente no", "Siempre", "Solo si es grande", "Solo los viernes"]
respuesta: "Normalmente no"

enunciado: "¿Un defecto cosmético detiene una versión?"

explicacion: |
  Una pérdida de datos sí la detendría.
```

### 18 — Datos reales

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["privacidad"]

tipo: mc
opciones_explicitas: ["Datos de ejemplo anonimizados", "Los datos reales completos sin cuidado", "Nada", "La contraseña del cliente"]
respuesta: "Datos de ejemplo anonimizados"

enunciado: "El error solo aparece con datos reales de un cliente. ¿Qué conviene pedir?"

explicacion: |
  Se cuida la privacidad.
```

### 19 — Falta información

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["reporte"]

tipo: mc
opciones_explicitas: ["Pedir más información a quien lo envió", "Cerrarlo sin explicar", "Arreglar a ciegas", "Ignorarlo"]
respuesta: "Pedir más información a quien lo envió"

enunciado: "El reporte no trae pasos. ¿Qué se hace?"

explicacion: |
  Un reporte incompleto se completa, no se descarta.
```

### 20 — Una cosa

```
metadata:
  materia: "qa-testing"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Cambiar una sola condición por vez", "Cambiar todo junto", "No cambiar nada", "Cambiar al azar"]
respuesta: "Cambiar una sola condición por vez"

enunciado: "Al probar una hipótesis, ¿cuál es el mejor método?"

explicacion: |
  Así se sabe qué produjo el efecto.
```

