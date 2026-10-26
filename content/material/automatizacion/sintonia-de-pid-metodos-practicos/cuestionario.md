# Automatizacion — Sintonía de PID: métodos prácticos (cuestionario, 24 preguntas VBLang)

> Tema: `automatizacion/sintonia-de-pid-metodos-practicos`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Qué es sintonizar un PID

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué es sintonizar un PID?"
tipo: mc
opciones_explicitas:
  - "Elegir sus parámetros (Kp, Ti, Td) para que el lazo responda bien"
  - "Conectar sus cables"
  - "Programarlo en ladder"
  - "Medir su consumo"
respuesta: "Elegir sus parámetros (Kp, Ti, Td) para que el lazo responda bien"

explicacion: |
  No hay valores universales: dependen del proceso.
```

### 2 — Subir Kp suele producir...

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

enunciado: "Subir Kp suele producir..."
tipo: mc
opciones_explicitas:
  - "Respuesta más rápida pero más sobreimpulso"
  - "Respuesta más lenta"
  - "Menos sobreimpulso siempre"
  - "Eliminación del ruido"
respuesta: "Respuesta más rápida pero más sobreimpulso"

explicacion: |
  Si se exagera, aparecen oscilaciones.
```

### 3 — La acción integral sirve principalmente para...

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

enunciado: "La acción integral sirve principalmente para..."
tipo: mc
opciones_explicitas:
  - "Eliminar el error residual"
  - "Amplificar el ruido"
  - "Frenar cambios bruscos"
  - "Medir la perturbación"
respuesta: "Eliminar el error residual"

explicacion: |
  Acumula el error hasta anularlo.
```

### 4 — La acción derivativa...

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

enunciado: "La acción derivativa..."
tipo: mc
opciones_explicitas:
  - "Anticipa la tendencia del error y amortigua, pero amplifica el ruido"
  - "Elimina el error en régimen"
  - "No tiene efectos"
  - "Siempre se recomienda al máximo"
respuesta: "Anticipa la tendencia del error y amortigua, pero amplifica el ruido"

explicacion: |
  Se usa con cuidado o se omite.
```

### 5 — En la sintonía por prueba y error, ¿cómo se suele empezar

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "En la sintonía por prueba y error, ¿cómo se suele empezar?"
tipo: mc
opciones_explicitas:
  - "Solo con acción proporcional"
  - "Con derivativa máxima"
  - "Con el integrador al máximo"
  - "Sin controlador"
respuesta: "Solo con acción proporcional"

explicacion: |
  Se agrega la integral después.
```

### 6 — Un Ti chico significa una integral...

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "Un Ti chico significa una integral..."
tipo: mc
opciones_explicitas:
  - "Fuerte, que corrige rápido pero puede oscilar"
  - "Débil"
  - "Nula"
  - "Derivativa"
respuesta: "Fuerte, que corrige rápido pero puede oscilar"

explicacion: |
  Un Ti grande es una integral suave.
```

### 7 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué es la ganancia crítica Ku en Ziegler-Nichols de lazo cerrado?"
tipo: mc
opciones_explicitas:
  - "La ganancia proporcional con la que el lazo oscila con amplitud constante"
  - "La ganancia mínima del sensor"
  - "La ganancia del actuador"
  - "La ganancia del PLC"
respuesta: "La ganancia proporcional con la que el lazo oscila con amplitud constante"

explicacion: |
  Es el límite de estabilidad.
```

### 8 — ¿Qué es el período crítico Pu

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué es el período crítico Pu?"
tipo: mc
opciones_explicitas:
  - "El período de la oscilación sostenida en la ganancia crítica"
  - "El tiempo de muestreo"
  - "La duración del ensayo"
  - "El retardo del sensor"
respuesta: "El período de la oscilación sostenida en la ganancia crítica"

explicacion: |
  Se mide sobre la gráfica de la salida.
```

### 9 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "avanzado"
  tags: ["pid", "sintonia"]

enunciado: "Para un PID, la tabla de Z-N de lazo cerrado da Kp igual a..."
tipo: mc
opciones_explicitas:
  - "0,6 · Ku"
  - "0,5 · Ku"
  - "1,2 · Ku"
  - "Pu / 2"
respuesta: "0,6 · Ku"

explicacion: |
  Ti = Pu / 2 y Td = Pu / 8.
```

### 10 — Para un controlador solo P, Z-N propone Kp igual a...

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "avanzado"
  tags: ["pid", "sintonia"]

enunciado: "Para un controlador solo P, Z-N propone Kp igual a..."
tipo: mc
opciones_explicitas:
  - "0,5 · Ku"
  - "0,6 · Ku"
  - "0,45 · Ku"
  - "Ku"
respuesta: "0,5 · Ku"

explicacion: |
  Es la mitad de la ganancia crítica.
```

### 11 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué desventaja tiene Z-N de lazo cerrado en una planta real?"
tipo: mc
opciones_explicitas:
  - "Obliga a llevar el lazo al borde de la inestabilidad"
  - "Requiere un PLC nuevo"
  - "No sirve para procesos lentos"
  - "Elimina la integral"
respuesta: "Obliga a llevar el lazo al borde de la inestabilidad"

explicacion: |
  Puede ser peligroso o inaceptable.
```

### 12 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "avanzado"
  tags: ["pid", "sintonia"]

enunciado: "El método de la curva de reacción (lazo abierto) obtiene sus datos..."
tipo: mc
opciones_explicitas:
  - "Con un escalón en la salida del controlador en manual"
  - "Haciendo oscilar el lazo"
  - "Con el controlador en automático"
  - "Sin registrar la respuesta"
respuesta: "Con un escalón en la salida del controlador en manual"

explicacion: |
  Se leen K, el retardo L y la constante de tiempo.
```

### 13 — ¿Qué es el windup

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué es el windup?"
tipo: mc
opciones_explicitas:
  - "Acumulación excesiva de la integral cuando el actuador está saturado"
  - "Un ruido del sensor"
  - "Una falla del PLC"
  - "Un exceso de derivativa"
respuesta: "Acumulación excesiva de la integral cuando el actuador está saturado"

explicacion: |
  Provoca un gran sobreimpulso al salir de la saturación.
```

### 14 — ¿Qué técnica combate el windup

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

enunciado: "¿Qué técnica combate el windup?"
tipo: mc
opciones_explicitas:
  - "Anti-windup: limitar o frenar la integral mientras el actuador está saturado"
  - "Subir Td"
  - "Apagar el sensor"
  - "Bajar la frecuencia de muestreo a cero"
respuesta: "Anti-windup: limitar o frenar la integral mientras el actuador está saturado"

explicacion: |
  La mayoría de los controladores industriales la incluye.
```

### 15 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "avanzado"
  tags: ["pid", "sintonia"]

enunciado: "¿Cuánto es aproximadamente el sobreimpulso que producen las reglas de Z-N?"
tipo: mc
opciones_explicitas:
  - "Alrededor del 25 %, por lo que se afinan después"
  - "Cero"
  - "Más del 100 %"
  - "Siempre menor al 1 %"
respuesta: "Alrededor del 25 %, por lo que se afinan después"

explicacion: |
  Son un punto de partida, no un resultado final.
```

### 16 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

respuesta: falso
tipo: vf

enunciado: "Un mismo conjunto de parámetros PID sirve para cualquier proceso."

explicacion: |
  Dependen de la dinámica de cada proceso.
```

### 17 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

respuesta: verdadero
tipo: vf

enunciado: "La sintonía por prueba y error puede llevar horas en procesos lentos."

explicacion: |
  Cada prueba exige esperar la respuesta.
```

### 18 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

respuesta: falso
tipo: vf

enunciado: "Con la saturación del actuador la integral deja de acumular por sí sola, sin necesidad de anti-windup."

explicacion: |
  Sin protección, sigue acumulando.
```

### 19 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "basico"
  tags: ["pid", "sintonia"]

respuesta: verdadero
tipo: vf

enunciado: "Una sintonía algo conservadora suele ser preferible cuando hay dudas."

explicacion: |
  Evita oscilaciones y riesgos.
```

### 20 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

tipo: completar
enunciado: "La sigla Kp designa la ganancia ___ (proporcional / integral)."
respuestas_validas:
  - "proporcional"

explicacion: |
  Reacciona al error presente.
```

### 21 — Ziegler y Nichols publicaron sus reglas en el año ___.

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

tipo: completar
enunciado: "Ziegler y Nichols publicaron sus reglas en el año ___."
respuestas_validas:
  - 1942

explicacion: |
  Es una receta empírica clásica.
```

### 22 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

variables:
  ku: random(4, 20)

respuesta: redondear(0.6 * ku, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "En un ensayo de Z-N, la ganancia crítica es Ku = {ku}. ¿Cuánto vale Kp para un controlador PID? (redondeá a dos decimales)"

pasos:
  - "Kp = 0,6 · Ku"

explicacion: |
  Tabla de Ziegler-Nichols de lazo cerrado.
```

### 23 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

variables:
  pu: uno_de([8, 10, 12, 16, 20, 24, 40])

respuesta: pu / 2
tipo: input
tolerancia_abs: 0

enunciado: "En un ensayo de Z-N, el período crítico es Pu = {pu} s. ¿Cuánto vale Ti para un PID, en segundos?"

pasos:
  - "Ti = Pu / 2"

explicacion: |
  Tabla de Ziegler-Nichols de lazo cerrado.
```

### 24 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "sintonia_de_pid_metodos_practicos"
  nivel: "intermedio"
  tags: ["pid", "sintonia"]

variables:
  pu: uno_de([8, 16, 24, 32, 40, 48])

respuesta: pu / 8
tipo: input
tolerancia_abs: 0

enunciado: "Con Pu = {pu} s, ¿cuánto vale Td para un PID de Z-N, en segundos?"

pasos:
  - "Td = Pu / 8"

explicacion: |
  Tabla de Ziegler-Nichols de lazo cerrado.
```
