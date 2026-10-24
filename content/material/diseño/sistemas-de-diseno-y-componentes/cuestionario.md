# UX y diseño — Sistemas de diseño y componentes (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un sistema de diseño es..."
tipo: mc
opciones_explicitas:
  - "Un conjunto de decisiones, componentes y reglas compartidas"
  - "Un software para programar bases de datos"
  - "Un tipo de tipografía"
respuesta: "Un conjunto de decisiones, componentes y reglas compartidas"

explicacion: |
  Evita la deriva entre pantallas.
```

### 2 — Problema

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "basico"
  tags: ["ux"]

enunciado: "¿Qué problema resuelve un sistema de diseño?"
tipo: mc
opciones_explicitas:
  - "La inconsistencia al crecer un producto"
  - "La falta de internet"
  - "La lentitud del servidor"
respuesta: "La inconsistencia al crecer un producto"

explicacion: |
  Mantiene todo coherente.
```

### 3 — Token

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un token de diseño es..."
tipo: mc
opciones_explicitas:
  - "Un valor con nombre que guarda una decisión básica"
  - "Una moneda digital"
  - "Una contraseña"
respuesta: "Un valor con nombre que guarda una decisión básica"

explicacion: |
  Por ejemplo, un color o un espacio.
```

### 4 — Cambio central

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Con tokens, si la marca cambia de color basta modificarlo en un solo lugar."

explicacion: |
  Es una de sus ventajas principales.
```

### 5 — Nombre por función

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "¿Qué nombre de token es mejor?"
tipo: mc
opciones_explicitas:
  - "color-error"
  - "rojo-claro-3"
  - "fff1"
respuesta: "color-error"

explicacion: |
  Se nombra por función, no por aspecto.
```

### 6 — Componentes

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un componente es..."
tipo: mc
opciones_explicitas:
  - "Una pieza reutilizable como un botón o un campo"
  - "Una foto"
  - "El nombre de una empresa"
respuesta: "Una pieza reutilizable como un botón o un campo"

explicacion: |
  Define variantes y estados.
```

### 7 — Variantes

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un botón tiene variantes como primario, secundario y..."
tipo: mc
opciones_explicitas:
  - "Desactivado"
  - "Invisible siempre"
  - "Ilegible"
respuesta: "Desactivado"

explicacion: |
  Las variantes y estados están definidos.
```

### 8 — Patrón

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un patrón es..."
tipo: mc
opciones_explicitas:
  - "Una combinación de componentes que resuelve una situación común"
  - "Un dibujo repetido de fondo"
  - "Un estilo de letra"
respuesta: "Una combinación de componentes que resuelve una situación común"

explicacion: |
  Por ejemplo, un formulario de inicio de sesión.
```

### 9 — Documentación

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "La documentación de un componente debería explicar..."
tipo: mc
opciones_explicitas:
  - "Cuándo usarlo, cuándo no y reglas de accesibilidad"
  - "Solo su color"
  - "La biografía de quien lo diseñó"
respuesta: "Cuándo usarlo, cuándo no y reglas de accesibilidad"

explicacion: |
  Es lo que lo vuelve utilizable por otros.
```

### 10 — Quién Atomic

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El Atomic Design fue propuesto por..."
tipo: mc
opciones_explicitas:
  - "Brad Frost"
  - "Jakob Nielsen"
  - "Ethan Marcotte"
respuesta: "Brad Frost"

explicacion: |
  Organiza la interfaz por niveles.
```

### 11 — Átomo

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "basico"
  tags: ["ux"]

enunciado: "En Atomic Design, un átomo es..."
tipo: mc
opciones_explicitas:
  - "La unidad más simple, como un botón o una etiqueta"
  - "Una página completa"
  - "Un conjunto de páginas"
respuesta: "La unidad más simple, como un botón o una etiqueta"

explicacion: |
  Las moléculas combinan átomos.
```

### 12 — Molécula

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una molécula en Atomic Design es..."
tipo: mc
opciones_explicitas:
  - "Un grupo simple de átomos, como campo con etiqueta y ayuda"
  - "Una página"
  - "Un token"
respuesta: "Un grupo simple de átomos, como campo con etiqueta y ayuda"

explicacion: |
  Los organismos combinan moléculas.
```

### 13 — Organismo

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un encabezado con logotipo, menú y buscador es un ejemplo de..."
tipo: mc
opciones_explicitas:
  - "Organismo"
  - "Átomo"
  - "Token"
respuesta: "Organismo"

explicacion: |
  Es un grupo complejo de moléculas y átomos.
```

### 14 — Regla rígida

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Atomic Design es una regla rígida que todo proyecto debe seguir al pie de la letra."

explicacion: |
  Es una forma de ordenar lo simple y lo compuesto.
```

### 15 — Beneficio

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un beneficio de un sistema de diseño es..."
tipo: mc
opciones_explicitas:
  - "Velocidad, porque no se rediseña lo que ya existe"
  - "Menos comunicación entre equipos"
  - "Mayor cantidad de pantallas inconsistentes"
respuesta: "Velocidad, porque no se rediseña lo que ya existe"

explicacion: |
  También mejora la consistencia.
```

### 16 — Accesibilidad heredada

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Incorporar la accesibilidad en los componentes hace que todas las pantallas que los usan la hereden."

explicacion: |
  Se resuelve una vez y se reutiliza.
```

### 17 — Riesgo

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Un riesgo de los sistemas de diseño es..."
tipo: mc
opciones_explicitas:
  - "Volverse un museo si no se mantienen actualizados"
  - "Reducir siempre la calidad"
  - "Eliminar a los diseñadores"
respuesta: "Volverse un museo si no se mantienen actualizados"

explicacion: |
  Requieren responsables y mantenimiento.
```

### 18 — Rigidez

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Si un sistema de diseño es demasiado rígido..."
tipo: mc
opciones_explicitas:
  - "Puede frenar la innovación"
  - "Mejora siempre el producto"
  - "Reduce la consistencia"
respuesta: "Puede frenar la innovación"

explicacion: |
  Necesita un proceso para proponer cambios.
```

### 19 — Ejemplos públicos

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "basico"
  tags: ["ux"]

enunciado: "¿Cuál es un sistema de diseño público conocido?"
tipo: mc
opciones_explicitas:
  - "Material Design"
  - "Atomic Bomb"
  - "Word Style"
respuesta: "Material Design"

explicacion: |
  Otros son Carbon, de IBM.
```

### 20 — Copiar tal cual

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Copiar tal cual el sistema de diseño de otra organización siempre es la mejor idea."

explicacion: |
  Cada sistema responde a las necesidades de su producto.
```

### 21 — Consistencia

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "Un sistema de diseño ayuda sobre todo a mantener la ___ entre pantallas."
respuestas_validas:
  - "consistencia"

explicacion: |
  Es la heurística que se protege.
```

### 22 — Principios

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Los principios de un sistema de diseño son..."
tipo: mc
opciones_explicitas:
  - "La filosofía del producto, por ejemplo 'claro antes que ingenioso'"
  - "Los colores"
  - "La lista de componentes"
respuesta: "La filosofía del producto, por ejemplo 'claro antes que ingenioso'"

explicacion: |
  Guían las decisiones.
```

### 23 — Estados

```
metadata:
  materia: "diseño"
  tema: "sistemas_de_diseno_y_componentes"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Cada componente debería definir sus estados, como..."
tipo: mc
opciones_explicitas:
  - "Normal, foco, desactivado y error"
  - "Solo el normal"
  - "Ninguno"
respuesta: "Normal, foco, desactivado y error"

explicacion: |
  Evita pantallas confusas.
```
