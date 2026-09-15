# Oficios — Técnico en Automatización y Robótica — Diagnóstico de robot por casos (cuestionario, 18 preguntas VBLang)

> Cierre del oficio (`OF16`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de robótica —
> cada pregunta validada con parse+lint+compile+generate real de
> packages/vblang antes de guardarse.

---

### 1 — El diagnóstico de un robot es multivariable

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, un mismo síntoma en un robot puede originarse en capas muy distintas (mecánica, eléctrica, sensores, software), y varias causas pueden combinarse a la vez."

explicacion: |
  Es la idea de apertura de todo el tema, retomando el mismo enfoque
  multivariable ya usado en Técnico Electromecánico.
```

### 2 — Hipótesis para el caso 1

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  causa: uno_de(["un error de calibración", "un error en la cinemática inversa aplicada", "un problema mecánico"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una hipótesis mencionada en la teoría para que un brazo robótico no llegue a la posición correcta."

explicacion: |
  Las tres son hipótesis principales mencionadas en el caso 1.
```

### 3 — Verificación simple del caso 1

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "mover el brazo a una posición conocida y comparar el ángulo real (del encoder) contra el ángulo esperado"
tipo: mc
opciones_explicitas: ["mover el brazo a una posición conocida y comparar el ángulo real (del encoder) contra el ángulo esperado", "reiniciar el sistema sin ninguna otra verificación", "medir únicamente la temperatura de los motores"]

enunciado: "Según la teoría, ¿cuál es la primera verificación simple recomendada ante un caso de brazo que no llega a la posición correcta?"

explicacion: |
  Mover el brazo a una posición conocida y comparar el ángulo real
  (encoder) contra el esperado es la prueba simple del caso 1.
```

### 4 — Qué distingue esa verificación

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "un problema de calibración/mecánico de un problema de cálculo de cinemática inversa"
tipo: mc
opciones_explicitas: ["un problema de calibración/mecánico de un problema de cálculo de cinemática inversa", "un problema de software de un problema de comunicación", "ninguna de las causas del caso 1, sólo confirma que el robot enciende"]

enunciado: "Según la teoría, ¿qué distingue la verificación del caso 1 (comparar ángulo real contra esperado)?"

explicacion: |
  Si el ángulo real no coincide con lo pedido, el problema es de
  calibración o mecánico; si coincide pero la posición resultante no
  es la deseada, el problema es de cálculo de cinemática inversa.
```

### 5 — Hipótesis para el caso 2

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  causa: uno_de(["un sensor con falla física", "un problema de comunicación entre el sensor y el sistema de control", "un problema de software en el algoritmo de interpretación"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una hipótesis mencionada en la teoría para que un robot móvil no detecte un obstáculo que debería haber detectado."

explicacion: |
  Las tres son hipótesis principales mencionadas en el caso 2.
```

### 6 — Verificación simple del caso 2

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "revisar si el valor crudo del sensor llega al sistema, sin pasar todavía por el algoritmo de interpretación"
tipo: mc
opciones_explicitas: ["revisar si el valor crudo del sensor llega al sistema, sin pasar todavía por el algoritmo de interpretación", "reemplazar directamente el sensor sin verificar nada más", "aumentar la velocidad del robot para forzar la detección"]

enunciado: "Según la teoría, ¿cómo se separa un problema de hardware/comunicación de un problema puramente de software en el caso 2?"

explicacion: |
  Revisando si el dato crudo del sensor llega al sistema antes de
  pasar por el algoritmo de interpretación, según la teoría.
```

### 7 — Hipótesis para el caso 3

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

variables:
  causa: uno_de(["una alimentación eléctrica inestable", "una interferencia o pérdida intermitente de comunicación", "un algoritmo de control mal ajustado"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una hipótesis mencionada en la teoría para que un robot se comporte de forma distinta en ejecuciones aparentemente idénticas."

explicacion: |
  Las tres son hipótesis principales mencionadas en el caso 3.
```

### 8 — Cómo abordar el caso 3

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "revisar registros (logs) del sistema a lo largo de varias ejecuciones para encontrar el patrón que distingue las que fallan"
tipo: mc
opciones_explicitas: ["revisar registros (logs) del sistema a lo largo de varias ejecuciones para encontrar el patrón que distingue las que fallan", "repetir una sola vez más la misma ejecución y confiar en ese resultado", "reemplazar todos los componentes del robot preventivamente"]

enunciado: "Según la teoría, ¿cómo se aborda un comportamiento errático o inconsistente en el caso 3, dado que rara vez tiene una causa obvia a simple vista?"

explicacion: |
  Revisando registros (logs) del sistema a lo largo de varias
  ejecuciones para encontrar el patrón que distingue las que fallan de
  las que no.
```

### 9 — Síntesis del método

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "revisar sistemáticamente cada capa del sistema con verificaciones simples, en vez de asumir de entrada una única causa"
tipo: mc
opciones_explicitas: ["revisar sistemáticamente cada capa del sistema con verificaciones simples, en vez de asumir de entrada una única causa", "reiniciar siempre el software, sin importar el síntoma", "cambiar todos los sensores hasta que el problema desaparezca"]

enunciado: "Según el método resumido de la teoría, ¿cuál es la lógica común a los tres casos de diagnóstico de robótica?"

explicacion: |
  Revisar sistemáticamente cada capa del sistema con verificaciones
  simples, en vez de asumir de entrada una única causa, es la lógica
  común a los tres casos.
```

### 10 — Causas combinadas

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, un problema de calibración y un problema de comunicación no son mutuamente excluyentes: pueden combinarse en un mismo robot."

explicacion: |
  Es parte de la síntesis final del método de diagnóstico de todo el
  tema.
```

### 11 — Origen del enfoque multivariable

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "intermedio"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, el enfoque multivariable del diagnóstico de robótica retoma el mismo usado en `Técnico Electromecánico` (`OF11`)."

explicacion: |
  Es la conexión explícita que hace la teoría con el oficio del que
  Robótica hereda gran parte del camino.
```

### 12 — Diferencia entre caso 1 y caso 2

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 1 es un error de posicionamiento del propio brazo; el caso 2 es una falla en la detección de algo externo al robot"
tipo: mc
opciones_explicitas: ["el caso 1 es un error de posicionamiento del propio brazo; el caso 2 es una falla en la detección de algo externo al robot", "son exactamente el mismo síntoma con dos nombres distintos", "el caso 1 sólo ocurre en robots móviles, el caso 2 sólo en brazos fijos"]

enunciado: "¿Cuál es la diferencia central entre el caso 1 (el brazo no llega a la posición correcta) y el caso 2 (el robot no detecta un obstáculo)?"

explicacion: |
  El caso 1 es un error de posicionamiento del propio brazo; el caso 2
  es una falla en percibir algo externo al robot.
```

### 13 — Encoder y calibración

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "intermedio"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "El encoder, ya presentado en `../actuadores-y-sensores-robotica/`, mide la posición o velocidad de rotación de un eje — el dato que se compara contra el ángulo esperado en el caso 1."

explicacion: |
  Es la conexión directa entre este tema y la lección de actuadores y
  sensores, donde se define el encoder.
```

### 14 — LIDAR y el caso 2

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "intermedio"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "El LIDAR, ya presentado en `../actuadores-y-sensores-robotica/`, es un tipo de sensor cuya falla física es una de las hipótesis mencionadas en el caso 2."

explicacion: |
  Es contexto ya presentado que se retoma directamente en el caso 2
  del diagnóstico.
```

### 15 — Alimentación eléctrica inestable

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, una alimentación eléctrica inestable afecta más a motores y sensores sensibles que a la lógica digital del microcontrolador."

explicacion: |
  Es una precisión explícita de la teoría dentro de la hipótesis de
  alimentación eléctrica del caso 3.
```

### 16 — No asumir la causa de entrada

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, se recomienda revisar sistemáticamente cada capa del sistema en vez de asumir de entrada dónde está el problema."

explicacion: |
  Es parte del primer paso del método resumido de todo el tema.
```

### 17 — Cinemática inversa y el caso 1

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "avanzado"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "La cinemática inversa, ya presentada en `../cinematica-y-dinamica-robotica/`, calcula los ángulos de articulación necesarios para una posición deseada del efector final — un error ahí es una de las hipótesis del caso 1."

explicacion: |
  Es la conexión directa entre este tema y la lección de cinemática y
  dinámica.
```

### 18 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "tecnico_en_automatizacion_y_robotica_diagnostico_robotica_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres casos de este tema comparten la misma lógica: revisar sistemáticamente cada capa del sistema (mecánica, eléctrica, sensores, comunicación, software) en vez de adivinar dónde está el problema."

explicacion: |
  Es la síntesis final del método de diagnóstico de todo el tema.
```
