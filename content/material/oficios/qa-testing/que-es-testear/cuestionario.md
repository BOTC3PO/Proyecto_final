# QA y Testing — Qué es testear (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Ejecutar o revisar el producto para encontrar diferencias entre lo esperado y lo obtenido", "Escribir su código", "Demostrar que no tiene errores", "Instalarlo en la computadora"]
respuesta: "Ejecutar o revisar el producto para encontrar diferencias entre lo esperado y lo obtenido"

enunciado: "¿Qué es testear un software?"

explicacion: |
  Probar da información sobre la calidad del producto.
```

### 2 — Ausencia de errores

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["principios"]

tipo: mc
opciones_explicitas: ["Que con esas pruebas no se encontraron errores, no que no existan", "Que el producto no tiene errores", "Que el producto es perfecto", "Que no hace falta probar más"]
respuesta: "Que con esas pruebas no se encontraron errores, no que no existan"

enunciado: "¿Qué se puede afirmar si las pruebas no encontraron errores?"

explicacion: |
  Probar muestra la presencia de defectos, no su ausencia.
```

### 3 — Error

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "intermedio"
  tags: ["vocabulario"]

tipo: mc
opciones_explicitas: ["Una equivocación humana al pensar o escribir", "Un cartel en pantalla", "Un caso de prueba", "Un tipo de prueba"]
respuesta: "Una equivocación humana al pensar o escribir"

enunciado: "En el vocabulario de testing, ¿qué es un \"error\"?"

explicacion: |
  El error humano puede dejar un defecto en el código.
```

### 4 — Defecto

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "intermedio"
  tags: ["vocabulario"]

tipo: mc
opciones_explicitas: ["El problema que queda en el código o el diseño", "La equivocación de la persona", "El resultado esperado", "El informe"]
respuesta: "El problema que queda en el código o el diseño"

enunciado: "¿Qué es un defecto (bug)?"

explicacion: |
  Cuando se activa, produce una falla.
```

### 5 — Falla

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "intermedio"
  tags: ["vocabulario"]

tipo: mc
opciones_explicitas: ["Lo que se observa cuando un defecto se activa y el sistema se comporta mal", "La causa en el código", "La documentación", "Un requisito"]
respuesta: "Lo que se observa cuando un defecto se activa y el sistema se comporta mal"

enunciado: "¿Qué es una falla?"

explicacion: |
  Error → defecto → falla.
```

### 6 — Caso de prueba

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["caso"]

tipo: mc
opciones_explicitas: ["Entradas, pasos y resultado esperado", "Solo el código", "Solo el resultado obtenido", "El nombre del tester"]
respuesta: "Entradas, pasos y resultado esperado"

enunciado: "¿Qué incluye un caso de prueba?"

explicacion: |
  Con eso se puede repetir y comparar.
```

### 7 — Esperado vs obtenido

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["caso"]

tipo: mc
opciones_explicitas: ["El resultado esperado con el resultado obtenido", "Dos pantallas", "Dos programadores", "El precio y el costo"]
respuesta: "El resultado esperado con el resultado obtenido"

enunciado: "¿Qué se compara al probar?"

explicacion: |
  Si difieren, hay un posible defecto.
```

### 8 — Oráculo

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "avanzado"
  tags: ["oraculo"]

tipo: mc
opciones_explicitas: ["La fuente que indica cuál es el resultado correcto", "Un programa que escribe código", "El nombre de una herramienta", "Un tipo de falla"]
respuesta: "La fuente que indica cuál es el resultado correcto"

enunciado: "¿Qué es un oráculo de pruebas?"

explicacion: |
  Puede ser un requisito, una especificación o el propio usuario.
```

### 9 — QA y testing

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["qa"]

tipo: mc
opciones_explicitas: ["QA abarca el proceso para prevenir defectos; testing es probar el producto", "Son lo mismo", "Testing es más amplio que QA", "QA solo se usa en videojuegos"]
respuesta: "QA abarca el proceso para prevenir defectos; testing es probar el producto"

enunciado: "¿Cuál es la diferencia entre QA y testing?"

explicacion: |
  El testing es una de las actividades de QA.
```

### 10 — Costo

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["costo"]

tipo: mc
opciones_explicitas: ["Cuanto más tarde se encuentra, más cuesta arreglarlo", "Cuesta siempre lo mismo", "Cuesta menos al final", "Depende del color del tema"]
respuesta: "Cuanto más tarde se encuentra, más cuesta arreglarlo"

enunciado: "¿Cómo cambia el costo de corregir un defecto según cuándo se encuentre?"

explicacion: |
  Por eso se prueba temprano.
```

### 11 — Regresión

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["regresion"]

tipo: mc
opciones_explicitas: ["Un cambio que rompe algo que ya funcionaba", "Una función nueva", "Una mejora de velocidad", "Un requisito"]
respuesta: "Un cambio que rompe algo que ya funcionaba"

enunciado: "¿Qué es una regresión?"

explicacion: |
  Se detectan repitiendo pruebas después de los cambios.
```

### 12 — Verificación

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "intermedio"
  tags: ["verificacion"]

tipo: mc
opciones_explicitas: ["¿Construimos el producto correctamente (según la especificación)?", "¿Le gusta al usuario?", "¿Se vende bien?", "¿Es el producto correcto?"]
respuesta: "¿Construimos el producto correctamente (según la especificación)?"

enunciado: "¿Qué pregunta responde la verificación?"

explicacion: |
  La validación responde si es el producto correcto para el usuario.
```

### 13 — Validación

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "intermedio"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["¿Construimos el producto correcto, el que el usuario necesita?", "¿Está bien escrito el código?", "¿Compila?", "¿Cumple el estilo?"]
respuesta: "¿Construimos el producto correcto, el que el usuario necesita?"

enunciado: "¿Qué pregunta responde la validación?"

explicacion: |
  Un producto puede cumplir la especificación y aun así no servir.
```

### 14 — Probar todo

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["principios"]

tipo: mc
opciones_explicitas: ["Porque las combinaciones posibles son prácticamente infinitas; se prioriza por riesgo", "Porque no hay herramientas", "Porque está prohibido", "Porque no hace falta"]
respuesta: "Porque las combinaciones posibles son prácticamente infinitas; se prioriza por riesgo"

enunciado: "¿Por qué no se puede probar todo?"

explicacion: |
  Se eligen las pruebas más importantes.
```

### 15 — Agrupación

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "intermedio"
  tags: ["principios"]

tipo: mc
opciones_explicitas: ["Pocas partes del sistema concentran la mayoría de los defectos", "Los defectos son uniformes", "Los defectos no existen", "Cada módulo tiene el mismo número"]
respuesta: "Pocas partes del sistema concentran la mayoría de los defectos"

enunciado: "¿Qué indica el principio de agrupación de defectos?"

explicacion: |
  Conviene concentrar las pruebas en las zonas más riesgosas o con más historial.
```

### 16 — Paradoja del pesticida

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "avanzado"
  tags: ["principios"]

tipo: mc
opciones_explicitas: ["Repetir siempre las mismas pruebas deja de encontrar errores nuevos", "Los pesticidas dañan el software", "Hay que probar menos", "Las pruebas automáticas fallan"]
respuesta: "Repetir siempre las mismas pruebas deja de encontrar errores nuevos"

enunciado: "¿Qué dice la paradoja del pesticida?"

explicacion: |
  Hay que renovar y variar las pruebas.
```

### 17 — Contexto

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["contexto"]

tipo: mc
opciones_explicitas: ["Porque el riesgo y el contexto son distintos", "Porque usan otro lenguaje", "Porque uno no tiene errores", "Porque el médico no tiene pantalla"]
respuesta: "Porque el riesgo y el contexto son distintos"

enunciado: "¿Por qué un videojuego y un sistema médico no se prueban igual?"

explicacion: |
  La profundidad de las pruebas depende de las consecuencias de un fallo.
```

### 18 — Otra persona

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["quien"]

tipo: mc
opciones_explicitas: ["Porque ve errores que quien lo escribió pasa por alto", "Porque es más barato", "Porque el programador no sabe probar", "Porque es obligatorio por ley"]
respuesta: "Porque ve errores que quien lo escribió pasa por alto"

enunciado: "¿Por qué conviene que alguien distinto a quien programó pruebe el producto?"

explicacion: |
  Quien desarrolla tiende a probar lo que sabe que funciona.
```

### 19 — Sin errores

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Si el producto no tiene errores, entonces seguro es útil para el usuario."

explicacion: |
  Un producto sin defectos puede no resolver la necesidad del usuario: por eso existe la validación.
```

### 20 — Los usuarios prueban

```
metadata:
  materia: "qa-testing"
  tema: "que_es_testear"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "Los usuarios finales también \"prueban\" el producto, aunque no sea su trabajo."

explicacion: |
  Si no se detectaron los defectos antes, los usuarios los encuentran, con un costo mayor.
```

