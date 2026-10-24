# UX y diseño — Evaluación heurística y métodos sin usuarios (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Método de inspección

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Un método de inspección es aquel en que..."
tipo: mc
opciones_explicitas:
  - "Especialistas revisan la interfaz sin participantes"
  - "Los usuarios prueban la interfaz"
  - "Se imprime la interfaz"
respuesta: "Especialistas revisan la interfaz sin participantes"

explicacion: |
  Es más barato que reunir usuarios.
```

### 2 — Reemplaza pruebas

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "basico"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Una evaluación heurística reemplaza por completo las pruebas con usuarios."

explicacion: |
  Detecta muchos problemas, pero no todos.
```

### 3 — Cantidad

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Nielsen recomienda que evalúen..."
tipo: mc
opciones_explicitas:
  - "Entre tres y cinco evaluadores"
  - "Un único evaluador"
  - "Cien evaluadores"
respuesta: "Entre tres y cinco evaluadores"

explicacion: |
  Cada uno encuentra problemas distintos.
```

### 4 — Por separado

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "¿Por qué los evaluadores trabajan por separado al principio?"
tipo: mc
opciones_explicitas:
  - "Para que las opiniones no se contagien"
  - "Para terminar antes"
  - "Porque no tienen la lista de heurísticas"
respuesta: "Para que las opiniones no se contagien"

explicacion: |
  Después se consolidan los resultados.
```

### 5 — Dos pasadas

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "En la evaluación heurística, cada evaluador suele recorrer la interfaz..."
tipo: mc
opciones_explicitas:
  - "Dos veces: una para entender el flujo y otra para revisar cada elemento"
  - "Una sola vez, rápido"
  - "Solo con el teclado"
respuesta: "Dos veces: una para entender el flujo y otra para revisar cada elemento"

explicacion: |
  Facilita una revisión más ordenada.
```

### 6 — Registro

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Cada hallazgo se registra con..."
tipo: mc
opciones_explicitas:
  - "Pantalla, problema, heurística violada y captura"
  - "Solo el nombre del evaluador"
  - "Una opinión general"
respuesta: "Pantalla, problema, heurística violada y captura"

explicacion: |
  Permite priorizar y justificar.
```

### 7 — Consolidar

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Consolidar los hallazgos significa..."
tipo: mc
opciones_explicitas:
  - "Juntar las listas, quitar duplicados y discutir desacuerdos"
  - "Borrar los hallazgos graves"
  - "Elegir el de un solo evaluador"
respuesta: "Juntar las listas, quitar duplicados y discutir desacuerdos"

explicacion: |
  Es el paso previo a priorizar.
```

### 8 — Factores gravedad

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "¿Qué tres factores se combinan para puntuar la gravedad?"
tipo: mc
opciones_explicitas:
  - "Frecuencia, impacto y persistencia"
  - "Costo, color y tamaño"
  - "Edad, género y país"
respuesta: "Frecuencia, impacto y persistencia"

explicacion: |
  Cuánta gente, cuánto cuesta superarlo y si molesta siempre.
```

### 9 — Escala

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "La escala de gravedad de Nielsen va de 0 a ___."
respuestas_validas:
  - "4"

explicacion: |
  El 4 es catastrófico.
```

### 10 — Cosmético

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un botón levemente desalineado sería un problema de gravedad..."
tipo: mc
opciones_explicitas:
  - "1 (cosmético)"
  - "4 (catastrófico)"
  - "0 (no es problema)"
respuesta: "1 (cosmético)"

explicacion: |
  Se arregla si hay tiempo.
```

### 11 — Catastrófico

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un proceso de pago que falla en un navegador muy usado sería gravedad..."
tipo: mc
opciones_explicitas:
  - "4 (catastrófico)"
  - "1 (cosmético)"
  - "0"
respuesta: "4 (catastrófico)"

explicacion: |
  Hay que corregirlo antes de lanzar.
```

### 12 — Cero

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Un hallazgo puntuado con 0 es un problema de usabilidad muy grave."

explicacion: |
  El 0 significa que no es un problema de usabilidad.
```

### 13 — Recorrido cognitivo

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "basico"
  tags: ["ux"]

enunciado: "El recorrido cognitivo se concentra en..."
tipo: mc
opciones_explicitas:
  - "Qué tan fácil es aprender el producto con el uso"
  - "El color de la marca"
  - "La velocidad del servidor"
respuesta: "Qué tan fácil es aprender el producto con el uso"

explicacion: |
  Se piensa desde una persona nueva.
```

### 14 — Preguntas

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "En un recorrido cognitivo, en cada paso se pregunta si la persona..."
tipo: mc
opciones_explicitas:
  - "Sabrá qué hacer y verá que su acción lleva al objetivo"
  - "Pagará más"
  - "Cambiará de dispositivo"
respuesta: "Sabrá qué hacer y verá que su acción lleva al objetivo"

explicacion: |
  Cada respuesta negativa marca un problema.
```

### 15 — Competidores

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El análisis de competidores consiste en..."
tipo: mc
opciones_explicitas:
  - "Revisar cómo resuelven lo mismo otros productos"
  - "Copiar sus logotipos"
  - "Criticar a su equipo"
respuesta: "Revisar cómo resuelven lo mismo otros productos"

explicacion: |
  Es un método sin usuarios.
```

### 16 — Automática

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Una revisión de accesibilidad con herramientas automáticas es un método sin usuarios."

explicacion: |
  Se complementa con revisión manual.
```

### 17 — Falso positivo

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Un falso positivo en una evaluación heurística es..."
tipo: mc
opciones_explicitas:
  - "Un problema marcado que a las personas no les afecta"
  - "Un problema que nadie vio"
  - "Un error de imprenta"
respuesta: "Un problema marcado que a las personas no les afecta"

explicacion: |
  Los evaluadores no son los usuarios.
```

### 18 — Punto ciego

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Un punto ciego de los evaluadores es..."
tipo: mc
opciones_explicitas:
  - "Un problema real que pasan por alto"
  - "Un problema inventado"
  - "Un tipo de botón"
respuesta: "Un problema real que pasan por alto"

explicacion: |
  Por eso se combinan métodos.
```

### 19 — Orden

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "¿Qué orden de trabajo es razonable?"
tipo: mc
opciones_explicitas:
  - "Primero inspeccionar y corregir lo evidente, después probar con personas"
  - "Probar con personas antes de tener un diseño"
  - "No corregir nada"
respuesta: "Primero inspeccionar y corregir lo evidente, después probar con personas"

explicacion: |
  Se aprovecha mejor el tiempo de los participantes.
```

### 20 — Un evaluador

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Un único evaluador suele detectar la mayoría de los problemas."

explicacion: |
  Detecta solo una parte; varios aumentan la cobertura.
```

### 21 — Alcance

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Antes de empezar una evaluación hay que definir..."
tipo: mc
opciones_explicitas:
  - "El alcance: qué pantallas, flujos y perfil de usuario"
  - "El presupuesto de marketing"
  - "El idioma del código"
respuesta: "El alcance: qué pantallas, flujos y perfil de usuario"

explicacion: |
  Delimita la revisión.
```

### 22 — Heurísticas

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "basico"
  tags: ["ux"]

enunciado: "La lista de referencia en una evaluación heurística es la de..."
tipo: mc
opciones_explicitas:
  - "Las diez heurísticas de usabilidad"
  - "Los colores del arco iris"
  - "Las leyes de Newton"
respuesta: "Las diez heurísticas de usabilidad"

explicacion: |
  Se usa como guía del análisis.
```

### 23 — Prioridad

```
metadata:
  materia: "diseño"
  tema: "evaluacion_heuristica_y_metodos_sin_usuarios"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Se pueden priorizar los problemas por gravedad y proponer soluciones."

explicacion: |
  Es el paso final.
```
