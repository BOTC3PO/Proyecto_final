# Diseño gráfico — Componentes y sistemas de diseño (cuestionario, 22 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta.

---
### 1 — Sistema

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "basico"
  tags: ["sistema"]

tipo: mc
opciones_explicitas: ["La incoherencia entre pantallas y el trabajo repetido", "La falta de usuarios", "El precio del servidor", "La velocidad de internet"]
respuesta: "La incoherencia entre pantallas y el trabajo repetido"

enunciado: "¿Qué problema resuelve un sistema de diseño?"

explicacion: |
  Reúne piezas y reglas reutilizables.
```

### 2 — Sistema

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "basico"
  tags: ["sistema"]

tipo: vf
respuesta: falso

enunciado: "Un sistema de diseño es solo una colección de imágenes decorativas."

explicacion: |
  Incluye principios, componentes, patrones, reglas y documentación.
```

### 3 — Sistema

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "basico"
  tags: ["sistema"]

tipo: mc
opciones_explicitas: ["Quienes diseñan y quienes programan", "Solo el área contable", "Solo los clientes", "Nadie"]
respuesta: "Quienes diseñan y quienes programan"

enunciado: "¿Quiénes comparten el sistema de diseño?"

explicacion: |
  Es una herramienta común.
```

### 4 — Componentes

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "basico"
  tags: ["componentes"]

tipo: mc
opciones_explicitas: ["Una pieza reutilizable de la interfaz", "Un tipo de impresora", "Un manual", "Un archivo de audio"]
respuesta: "Una pieza reutilizable de la interfaz"

enunciado: "¿Qué es un componente?"

explicacion: |
  Por ejemplo, un botón o una tarjeta.
```

### 5 — Componentes

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "intermedio"
  tags: ["componentes"]

tipo: vf
respuesta: verdadero

enunciado: "Si se modifica el componente original, todos sus usos se actualizan."

explicacion: |
  Evita inconsistencias.
```

### 6 — Componentes

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "basico"
  tags: ["componentes"]

tipo: mc
opciones_explicitas: ["Versiones distintas de un mismo componente", "Errores de diseño", "Distintos proyectos", "Tipos de papel"]
respuesta: "Versiones distintas de un mismo componente"

enunciado: "¿Qué son las variantes?"

explicacion: |
  Por ejemplo, botón principal, secundario y deshabilitado.
```

### 7 — Componentes

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "intermedio"
  tags: ["componentes"]

tipo: mc
opciones_explicitas: ["Presionado", "Mayúscula", "Rojo vino", "Panorámico"]
respuesta: "Presionado"

enunciado: "¿Cuál de estos es un estado de un botón?"

explicacion: |
  Hay también foco, deshabilitado y error.
```

### 8 — Componentes

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "intermedio"
  tags: ["componentes"]

tipo: vf
respuesta: falso

enunciado: "Diseñar todos los estados es un detalle prescindible."

explicacion: |
  El usuario los encuentra continuamente.
```

### 9 — Componentes

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "intermedio"
  tags: ["componentes"]

tipo: mc
opciones_explicitas: ["Combinando componentes pequeños", "Dibujándolo de cero siempre", "Copiando una foto", "Con un solo píxel"]
respuesta: "Combinando componentes pequeños"

enunciado: "¿Cómo se forma un componente más grande, como un formulario?"

explicacion: |
  Un campo, una etiqueta y un botón.
```

### 10 — Tokens

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "basico"
  tags: ["tokens"]

tipo: mc
opciones_explicitas: ["Valores con nombre que guardan decisiones de diseño", "Monedas de un videojuego", "Contraseñas", "Tipos de archivo"]
respuesta: "Valores con nombre que guardan decisiones de diseño"

enunciado: "¿Qué son los tokens de diseño?"

explicacion: |
  Colores, tamaños, espaciados, sombras.
```

### 11 — Tokens

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "intermedio"
  tags: ["tokens"]

tipo: mc
opciones_explicitas: ["Un cambio se propaga a todo el sistema", "Se pierde el color", "Se ve más pequeño", "No sirve en pantallas"]
respuesta: "Un cambio se propaga a todo el sistema"

enunciado: "¿Qué ventaja tiene usar un token en lugar de un código de color suelto?"

explicacion: |
  Se modifica en un solo lugar.
```

### 12 — Tokens

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "avanzado"
  tags: ["tokens"]

tipo: mc
opciones_explicitas: ["Uno que expresa la función, como el color para errores", "Uno que solo guarda un número", "Uno sin nombre", "Uno de impresión"]
respuesta: "Uno que expresa la función, como el color para errores"

enunciado: "¿Qué es un token semántico?"

explicacion: |
  Se asigna a un valor básico.
```

### 13 — Tokens

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "avanzado"
  tags: ["tokens"]

tipo: vf
respuesta: verdadero

enunciado: "Los tokens facilitan ofrecer un modo oscuro sin rediseñar cada pantalla."

explicacion: |
  Se reasignan los valores.
```

### 14 — Tokens

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "intermedio"
  tags: ["tokens"]

tipo: mc
opciones_explicitas: ["Para mantener un ritmo uniforme", "Para que los números sean más grandes", "Para ahorrar tinta", "Para evitar los componentes"]
respuesta: "Para mantener un ritmo uniforme"

enunciado: "¿Por qué se usa una escala de espaciado, como múltiplos de 4 u 8?"

explicacion: |
  Facilita la coherencia.
```

### 15 — Documentacion

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "intermedio"
  tags: ["documentacion"]

tipo: mc
opciones_explicitas: ["Propósito, cuándo usarlo, variantes, ejemplos y accesibilidad", "Solo su color", "Nada", "Solo el nombre del autor"]
respuesta: "Propósito, cuándo usarlo, variantes, ejemplos y accesibilidad"

enunciado: "¿Qué debería incluir la documentación de un componente?"

explicacion: |
  Para que el sistema se use bien.
```

### 16 — Documentacion

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "basico"
  tags: ["documentacion"]

tipo: vf
respuesta: verdadero

enunciado: "Un sistema que nadie entiende termina sin usarse."

explicacion: |
  La documentación es clave.
```

### 17 — Documentacion

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "intermedio"
  tags: ["documentacion"]

tipo: mc
opciones_explicitas: ["Para registrar qué cambió y avisar a los equipos", "Para ocultar cambios", "Para borrar componentes", "Para aumentar la resolución"]
respuesta: "Para registrar qué cambió y avisar a los equipos"

enunciado: "¿Por qué se versiona un sistema de diseño?"

explicacion: |
  Es un sistema vivo con responsables.
```

### 18 — Handoff

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "basico"
  tags: ["handoff"]

tipo: mc
opciones_explicitas: ["El traspaso del diseño a quienes lo programan", "Un tipo de tinta", "Un logotipo", "Un contrato de alquiler"]
respuesta: "El traspaso del diseño a quienes lo programan"

enunciado: "¿Qué es el handoff?"

explicacion: |
  Incluye especificaciones y comportamiento.
```

### 19 — Handoff

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "intermedio"
  tags: ["handoff"]

tipo: mc
opciones_explicitas: ["Archivos ordenados, especificaciones, componentes y descripción del comportamiento", "Solo una captura de pantalla", "Solo un correo", "Nada"]
respuesta: "Archivos ordenados, especificaciones, componentes y descripción del comportamiento"

enunciado: "¿Qué debería incluir un buen handoff?"

explicacion: |
  También los recursos exportados.
```

### 20 — Handoff

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "intermedio"
  tags: ["handoff"]

tipo: mc
opciones_explicitas: ["Que diseño y desarrollo usen el mismo vocabulario y componentes", "Que no se hablen", "Que cada uno invente nombres", "Que se evite revisar"]
respuesta: "Que diseño y desarrollo usen el mismo vocabulario y componentes"

enunciado: "¿Qué mejora la fidelidad de la implementación?"

explicacion: |
  La conversación temprana es clave.
```

### 21 — Handoff

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "intermedio"
  tags: ["handoff"]

tipo: vf
respuesta: verdadero

enunciado: "Tras construir, conviene revisar el resultado contra el diseño y corregir las diferencias."

explicacion: |
  Así lo probado es lo construido.
```

### 22 — Tokens

```
metadata:
  materia: "diseno_grafico"
  tema: "componentes_y_sistemas_de_diseno"
  nivel: "basico"
  tags: ["tokens"]

tipo: completar
enunciado: "Los valores con nombre que guardan decisiones de diseño se llaman ___ de diseño."
respuestas_validas:
  - "tokens"

explicacion: |
  Son la base de un sistema.
```
