# QA y Testing — Testing exploratorio (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Se diseña, se ejecuta y se aprende a la vez, sin un guion fijo", "Se sigue un guion rígido", "Se ejecuta con una herramienta automática", "No tiene objetivo"]
respuesta: "Se diseña, se ejecuta y se aprende a la vez, sin un guion fijo"

enunciado: "¿Qué caracteriza al testing exploratorio?"

explicacion: |
  Cada hallazgo orienta la siguiente prueba.
```

### 2 — No improvisado

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Tiene un objetivo, un tiempo y un registro", "Nada", "Que lo hace un programador", "Que dura más"]
respuesta: "Tiene un objetivo, un tiempo y un registro"

enunciado: "¿Qué diferencia al testing exploratorio de \"andar clickeando\"?"

explicacion: |
  Sin registro no se puede repetir ni auditar.
```

### 3 — Complemento

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["complemento"]

tipo: mc
opciones_explicitas: ["Se complementan: el guion cubre lo conocido; la exploración busca lo imprevisto", "Se reemplazan", "Se contradicen", "No se pueden combinar"]
respuesta: "Se complementan: el guion cubre lo conocido; la exploración busca lo imprevisto"

enunciado: "¿Cómo se relaciona con las pruebas guionadas?"

explicacion: |
  Cada una encuentra tipos de defectos distintos.
```

### 4 — Cuándo

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["cuando"]

tipo: mc
opciones_explicitas: ["Con funciones nuevas, poco tiempo o requisitos incompletos", "Cuando ya está todo automatizado", "Nunca", "Solo al final del proyecto"]
respuesta: "Con funciones nuevas, poco tiempo o requisitos incompletos"

enunciado: "¿Cuándo es especialmente útil la exploración?"

explicacion: |
  Ahí hay pocos casos escritos.
```

### 5 — Qué encuentra

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["hallazgos"]

tipo: mc
opciones_explicitas: ["Combinaciones raras y problemas de usabilidad", "Solo errores de ortografía", "Solo errores de carga", "Ninguno"]
respuesta: "Combinaciones raras y problemas de usabilidad"

enunciado: "¿Qué tipo de problemas suele encontrar mejor la exploración?"

explicacion: |
  Salirse del guion revela situaciones no previstas.
```

### 6 — Sesión

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["sesion"]

tipo: mc
opciones_explicitas: ["Con un tiempo acotado y una carta (charter)", "Sin tiempo", "Con un guion de 200 pasos", "Con una herramienta de carga"]
respuesta: "Con un tiempo acotado y una carta (charter)"

enunciado: "¿Cómo se organiza una sesión exploratoria?"

explicacion: |
  Por ejemplo, 60 a 90 minutos.
```

### 7 — Carta

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["charter"]

tipo: mc
opciones_explicitas: ["El objetivo de la sesión: qué explorar, con qué y para descubrir qué", "Una carta al cliente", "El resultado final", "El informe de un error"]
respuesta: "El objetivo de la sesión: qué explorar, con qué y para descubrir qué"

enunciado: "¿Qué es una carta (charter)?"

explicacion: |
  Orienta sin dictar los pasos exactos.
```

### 8 — Ejemplo

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "intermedio"
  tags: ["charter"]

tipo: mc
opciones_explicitas: ["Explorar el formulario de pago con datos inválidos para descubrir cómo se manejan los errores", "Probar todo", "Ver si anda", "Hacer clic en todo"]
respuesta: "Explorar el formulario de pago con datos inválidos para descubrir cómo se manejan los errores"

enunciado: "¿Cuál es una buena carta?"

explicacion: |
  Es concreta y acotada.
```

### 9 — Qué se anota

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["registro"]

tipo: mc
opciones_explicitas: ["Qué se probó, qué se encontró y qué quedó pendiente", "Solo los errores", "Nada", "Solo la hora"]
respuesta: "Qué se probó, qué se encontró y qué quedó pendiente"

enunciado: "¿Qué se anota durante la sesión?"

explicacion: |
  Permite repetir y entender la sesión.
```

### 10 — Debrief

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "intermedio"
  tags: ["debrief"]

tipo: mc
opciones_explicitas: ["Un breve resumen al final de la sesión", "Un tipo de error", "Un informe de 50 páginas", "Una prueba automática"]
respuesta: "Un breve resumen al final de la sesión"

enunciado: "¿Qué es el debrief?"

explicacion: |
  Se comparten hallazgos y próximos pasos.
```

### 11 — Variar

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["heuristicas"]

tipo: mc
opciones_explicitas: ["Variar los recorridos", "Probar con datos fijos", "Repetir exactamente", "Borrar los datos"]
respuesta: "Variar los recorridos"

enunciado: "¿Qué heurística consiste en cambiar el orden de los pasos, volver atrás o recargar?"

explicacion: |
  Los usuarios reales no siguen siempre el recorrido ideal.
```

### 12 — Interrumpir

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["heuristicas"]

tipo: mc
opciones_explicitas: ["Qué pasa al cerrar, cortar la conexión o cambiar de pestaña en medio de una operación", "La velocidad del teclado", "El color", "El tamaño de la letra"]
respuesta: "Qué pasa al cerrar, cortar la conexión o cambiar de pestaña en medio de una operación"

enunciado: "¿Qué se prueba al \"interrumpir\"?"

explicacion: |
  Revela problemas de estado y de recuperación.
```

### 13 — Roles

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["roles"]

tipo: mc
opciones_explicitas: ["Para descubrir problemas que cada tipo de usuario provocaría", "Para cambiar la contraseña", "Para acelerar", "Para cumplir un trámite"]
respuesta: "Para descubrir problemas que cada tipo de usuario provocaría"

enunciado: "¿Para qué se cambia de rol (novato, administrador, malintencionado)?"

explicacion: |
  Cada perfil explora el sistema de otro modo.
```

### 14 — Seguir datos

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "intermedio"
  tags: ["heuristicas"]

tipo: mc
opciones_explicitas: ["Ver cómo un dato ingresado en un lugar aparece en el resto del sistema", "Contar los datos", "Borrar los datos", "Cifrar los datos"]
respuesta: "Ver cómo un dato ingresado en un lugar aparece en el resto del sistema"

enunciado: "¿Qué es \"seguir los datos\"?"

explicacion: |
  Detecta incoherencias entre pantallas o reportes.
```

### 15 — Preguntas

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["heuristicas"]

tipo: mc
opciones_explicitas: ["Preguntarse \"¿qué pasaría si...?\" y probarlo", "Ignorarlo", "Pasar a otra cosa", "Cerrar el programa"]
respuesta: "Preguntarse \"¿qué pasaría si...?\" y probarlo"

enunciado: "Algo parece raro durante la exploración. ¿Qué conviene hacer?"

explicacion: |
  La curiosidad guía la exploración.
```

### 16 — Evidencia

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["evidencia"]

tipo: mc
opciones_explicitas: ["Capturas o grabación de pantalla y los pasos", "Nada", "Solo el nombre", "Solo la hora"]
respuesta: "Capturas o grabación de pantalla y los pasos"

enunciado: "Aparece un problema. ¿Qué evidencia conviene guardar?"

explicacion: |
  Con eso se puede reportar y repetir.
```

### 17 — Reporte

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["reporte"]

tipo: mc
opciones_explicitas: ["Reportarlo con pasos para repetirlo", "Corregirlo sin avisar", "Olvidarlo", "Esperar a que alguien lo note"]
respuesta: "Reportarlo con pasos para repetirlo"

enunciado: "¿Qué se hace al encontrar un defecto?"

explicacion: |
  Un defecto sin pasos es difícil de arreglar.
```

### 18 — Limitaciones

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "intermedio"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["Depende de la habilidad y del registro de quien lo hace", "Es muy lento siempre", "Solo funciona con automatización", "No encuentra errores"]
respuesta: "Depende de la habilidad y del registro de quien lo hace"

enunciado: "¿Cuál es una limitación del testing exploratorio?"

explicacion: |
  Por eso se registra y se comparte con el equipo.
```

### 19 — Sin guion

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "El testing exploratorio no necesita ningún objetivo."

explicacion: |
  Tiene una carta, un tiempo y un registro.
```

### 20 — Después del arreglo

```
metadata:
  materia: "qa-testing"
  tema: "testing_exploratorio"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "Tras corregir un defecto, explorar alrededor puede ayudar a encontrar problemas cercanos."

explicacion: |
  Un arreglo puede romper algo cercano o dejar casos parecidos.
```

