# QA y Testing — Caso feliz y casos borde (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Caso feliz

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["feliz"]

tipo: mc
opciones_explicitas: ["El camino en el que todo sale como se espera, con datos válidos", "El caso con más errores", "El caso con datos inválidos", "Un caso de prueba automático"]
respuesta: "El camino en el que todo sale como se espera, con datos válidos"

enunciado: "¿Qué es el caso feliz (happy path)?"

explicacion: |
  Es la primera prueba que se hace.
```

### 2 — Primero

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["feliz"]

tipo: mc
opciones_explicitas: ["Porque si falla lo básico, no tiene sentido probar casos raros", "Porque es más corto", "Porque es obligatorio", "Porque no tiene errores"]
respuesta: "Porque si falla lo básico, no tiene sentido probar casos raros"

enunciado: "¿Por qué se prueba primero el caso feliz?"

explicacion: |
  Verifica que lo principal funcione.
```

### 3 — Borde

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["borde"]

tipo: mc
opciones_explicitas: ["Casos en los límites de lo permitido", "Casos con nombres largos", "Casos que ya se probaron", "Casos que no importan"]
respuesta: "Casos en los límites de lo permitido"

enunciado: "¿Qué son los casos borde?"

explicacion: |
  Ahí se concentran muchos errores.
```

### 4 — Por qué ahí

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "intermedio"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["Por confundir `<` con `<=` y por errores de \"uno más o uno menos\"", "Porque los límites son raros", "Porque no se pueden probar", "Porque no hay requisitos"]
respuesta: "Por confundir `<` con `<=` y por errores de \"uno más o uno menos\""

enunciado: "¿Por qué muchos errores aparecen en los límites?"

explicacion: |
  Una comparación mal escrita se nota solo en el borde.
```

### 5 — Valores límite

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["17, 18, 19, 98, 99 y 100", "1, 50 y 100", "Solo 50", "18 y 99 solamente"]
respuesta: "17, 18, 19, 98, 99 y 100"

enunciado: "Para una edad válida de 18 a 99, ¿qué valores se prueban con análisis de valores límite?"

explicacion: |
  Se prueba el límite y los valores inmediatamente de cada lado.
```

### 6 — Debajo

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["Rechazarlo", "Aceptarlo", "Un error del sistema", "Redondearlo a 18"]
respuesta: "Rechazarlo"

enunciado: "Para el rango 18–99, ¿qué se espera al ingresar 17?"

explicacion: |
  Está justo debajo del mínimo permitido.
```

### 7 — Límite incluido

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["Aceptarlo", "Rechazarlo", "Pedir confirmación", "Cambiarlo a 100"]
respuesta: "Aceptarlo"

enunciado: "Para el rango 18–99 (ambos incluidos), ¿qué se espera con 99?"

explicacion: |
  El límite superior pertenece al rango.
```

### 8 — Arriba

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["Rechazarlo", "Aceptarlo", "Aceptarlo con advertencia", "Cambiarlo a 99"]
respuesta: "Rechazarlo"

enunciado: "Para el rango 18–99, ¿qué se espera con 100?"

explicacion: |
  Está justo arriba del máximo.
```

### 9 — Equivalencia

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "intermedio"
  tags: ["equivalencia"]

tipo: mc
opciones_explicitas: ["Un grupo de valores que el sistema debería tratar igual", "Un grupo de usuarios", "Una tabla de resultados", "Un tipo de error"]
respuesta: "Un grupo de valores que el sistema debería tratar igual"

enunciado: "¿Qué es una clase de equivalencia?"

explicacion: |
  Se prueba un representante de cada clase.
```

### 10 — Representante

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["equivalencia"]

tipo: mc
opciones_explicitas: ["Cualquiera del rango, por ejemplo 40", "Solo 18", "Solo 99", "Ninguno"]
respuesta: "Cualquiera del rango, por ejemplo 40"

enunciado: "Para la clase de edades válidas 18–99, ¿qué valor sirve de representante?"

explicacion: |
  Se supone que el comportamiento es el mismo para todos.
```

### 11 — Clases inválidas

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "intermedio"
  tags: ["equivalencia"]

tipo: mc
opciones_explicitas: ["Dos: menos de 18 y más de 99", "Una", "Cero", "Tres"]
respuesta: "Dos: menos de 18 y más de 99"

enunciado: "Para el rango 18–99, ¿cuántas clases inválidas hay?"

explicacion: |
  Cada lado del rango válido es una clase.
```

### 12 — Vacío

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["vacio"]

tipo: mc
opciones_explicitas: ["Campo en blanco y solo espacios", "Nada, no se puede", "Solo mayúsculas", "Solo números"]
respuesta: "Campo en blanco y solo espacios"

enunciado: "¿Qué entrada vacía conviene probar en un formulario?"

explicacion: |
  Un campo vacío es un caso borde clásico.
```

### 13 — Fechas

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["fechas"]

tipo: mc
opciones_explicitas: ["29 de febrero y fin de mes", "Un martes", "Una fecha cualquiera", "Un feriado solamente"]
respuesta: "29 de febrero y fin de mes"

enunciado: "¿Qué fecha es un buen caso borde?"

explicacion: |
  Los años bisiestos y los fines de mes generan errores.
```

### 14 — Listas

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["listas"]

tipo: mc
opciones_explicitas: ["Vacía, con un elemento y con muchos", "Solo con tres", "Solo vacía", "Solo con diez"]
respuesta: "Vacía, con un elemento y con muchos"

enunciado: "En una función que procesa una lista, ¿qué tamaños conviene probar?"

explicacion: |
  Los casos extremos revelan errores.
```

### 15 — Caracteres especiales

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["texto"]

tipo: mc
opciones_explicitas: ["Texto muy largo, acentos, emojis y caracteres especiales", "Solo letras simples", "Solo números", "Nada especial"]
respuesta: "Texto muy largo, acentos, emojis y caracteres especiales"

enunciado: "¿Qué conviene probar en un campo de texto?"

explicacion: |
  Pueden romper el almacenamiento o la validación.
```

### 16 — Tiempo

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "intermedio"
  tags: ["concurrencia"]

tipo: mc
opciones_explicitas: ["Doble clic, dos usuarios simultáneos, conexión cortada", "Solo uno a la vez", "Solo conexión perfecta", "Solo de día"]
respuesta: "Doble clic, dos usuarios simultáneos, conexión cortada"

enunciado: "¿Qué escenarios de tiempo y concurrencia conviene probar?"

explicacion: |
  Muchos defectos solo aparecen con situaciones simultáneas o lentas.
```

### 17 — Registro

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["registro"]

tipo: mc
opciones_explicitas: ["Entrada, resultado esperado y resultado obtenido", "Solo el nombre", "Solo el resultado", "Solo la fecha"]
respuesta: "Entrada, resultado esperado y resultado obtenido"

enunciado: "¿Qué datos se registran en cada caso?"

explicacion: |
  Con eso se puede repetir y comparar.
```

### 18 — Justificar

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "intermedio"
  tags: ["registro"]

tipo: mc
opciones_explicitas: ["Para que se entienda qué riesgo cubre y no se borre por error", "Para llenar espacio", "Para que sea más largo", "No conviene"]
respuesta: "Para que se entienda qué riesgo cubre y no se borre por error"

enunciado: "¿Por qué conviene anotar por qué se eligió un caso borde?"

explicacion: |
  Una prueba sin motivo claro se pierde con el tiempo.
```

### 19 — Un solo caso

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Si el caso feliz funciona, se puede dar por probado el campo."

explicacion: |
  Falta probar límites, valores inválidos y vacíos.
```

### 20 — Representante

```
metadata:
  materia: "qa-testing"
  tema: "caso_feliz_y_casos_borde"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Probar todos los valores de una clase de equivalencia es indispensable."

explicacion: |
  Basta un representante, más los valores límite.
```

