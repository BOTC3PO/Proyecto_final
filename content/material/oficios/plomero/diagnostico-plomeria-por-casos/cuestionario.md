# Oficios — Plomero — Diagnóstico de plomería por casos (cuestionario, 18 preguntas VBLang)

> Cierre del oficio (`OF2`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de plomería —
> cada pregunta validada con parse+lint+compile+generate real de
> packages/vblang antes de guardarse.

---

### 1 — El método de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "distinguir si el problema es general o puntual, y buscar la explicación más simple antes de la más invasiva"
tipo: mc
opciones_explicitas: ["distinguir si el problema es general o puntual, y buscar la explicación más simple antes de la más invasiva", "romper la pared apenas aparece una duda", "cambiar todas las cañerías de la casa ante cualquier síntoma"]

enunciado: "Según la teoría, ¿cuál es el método correcto frente a un síntoma de plomería ambiguo?"

explicacion: |
  Distinguir si el problema es general o puntual, y buscar la
  explicación más simple antes de la más invasiva.
```

### 2 — Baja presión en un solo punto de la casa

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  causa: uno_de(["una obstrucción parcial (sarro acumulado)", "una válvula parcialmente cerrada en ese ramal"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para que un artefacto puntual tenga poca presión mientras el resto de la casa funciona normal."

explicacion: |
  Ambas son causas mencionadas en el caso 1, acotadas al tramo
  específico de ese artefacto.
```

### 3 — Dónde buscar primero en el caso 1

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "en el tramo específico de ese artefacto, no en el tanque o la presión general"
tipo: mc
opciones_explicitas: ["en el tramo específico de ese artefacto, no en el tanque o la presión general", "en el tanque de reserva, siempre primero", "en la presión de la red pública"]

enunciado: "Si sólo un artefacto puntual tiene baja presión y el resto de la casa funciona bien, ¿dónde conviene buscar la causa primero?"

explicacion: |
  El problema está acotado a ese tramo específico; no tiene sentido
  revisar el tanque o la presión general si el resto de la casa
  funciona con normalidad.
```

### 4 — Baja presión en toda la casa

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

respuesta: falso
tipo: vf

enunciado: "Si la baja presión afecta por igual a todos los artefactos de la casa, conviene empezar revisando cada tramo individual antes que la fuente (red, bomba o tanque)."

explicacion: |
  Falso. Es la lógica inversa: cuando afecta a toda la casa por igual,
  la causa está más arriba en el sistema (red, bomba o nivel del
  tanque), conviene revisar la fuente primero.
```

### 5 — Diferencia entre el caso 1 y el caso 2

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "si afecta a un solo punto (tramo específico) o a toda la casa por igual (la fuente)"
tipo: mc
opciones_explicitas: ["si afecta a un solo punto (tramo específico) o a toda la casa por igual (la fuente)", "el color del agua que sale", "la hora del día en que se nota el síntoma"]

enunciado: "¿Qué dato distingue si una baja presión hay que buscarla en un tramo puntual o en la fuente general?"

explicacion: |
  Si afecta a un solo artefacto, el problema es puntual; si afecta a
  toda la casa por igual, el problema está en la fuente.
```

### 6 — Olor a gas de desagüe sin fuga visible

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "un sifón sin agua, que dejó de sellar el paso de los gases del desagüe"
tipo: mc
opciones_explicitas: ["un sifón sin agua, que dejó de sellar el paso de los gases del desagüe", "una rotura de cañería en algún punto de la pared", "un problema en la red pública de agua"]

enunciado: "Aparece olor a cloaca dentro de la casa sin ninguna fuga de agua visible. La causa más probable, según la teoría, es..."

explicacion: |
  Un artefacto sin uso prolongado puede perder el agua que sella su
  sifón por evaporación, dejando subir los gases del desagüe.
```

### 7 — Cómo se soluciona el caso 3

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "La solución al caso 3 (sifón sin agua) es simplemente volver a usar el artefacto para que el sifón se llene de agua de nuevo, sin necesidad de ninguna reparación."

explicacion: |
  No es una falla física que requiera reparación, sino la ausencia
  temporal del sello de agua por falta de uso.
```

### 8 — Por qué el olor de un sifón sin agua no es una fuga

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "El sello de agua de un sifón es lo que normalmente impide que los gases del sistema de desagüe suban hacia el ambiente; sin ese sello, esos gases suben libremente aunque no haya ninguna rotura."

explicacion: |
  Es la explicación técnica de por qué aparece olor a cloaca sin
  ninguna fuga real involucrada.
```

### 9 — Humedad en una pared sin fuga visible

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "intermedio"
  tags: ["caso 4"]

variables:
  n: uno_de([1, 1])

respuesta: "una fuga en una cañería embutida, frecuentemente en una unión que falló con el tiempo"
tipo: mc
opciones_explicitas: ["una fuga en una cañería embutida, frecuentemente en una unión que falló con el tiempo", "condensación normal del ambiente, sin relación con la plomería", "un problema exclusivo de la pintura de la pared"]

enunciado: "Aparece una mancha de humedad en una pared sin ninguna fuga visible en la superficie. La causa más probable es..."

explicacion: |
  Suele ser una fuga en una cañería embutida, frecuentemente en una
  unión soldada o roscada que falló con el tiempo.
```

### 10 — Qué hacer antes de romper la pared del caso 4

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "intermedio"
  tags: ["caso 4"]

respuesta: verdadero
tipo: vf

enunciado: "Antes de romper la pared para buscar la fuga del caso 4, conviene usar un detector de fugas para acotar la zona exacta."

explicacion: |
  Usar el instrumento adecuado minimiza el daño de la reparación,
  evitando romper \"a ciegas\" buscando la fuga.
```

### 11 — Tipos de detector de fugas mencionados

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "intermedio"
  tags: ["caso 4"]

variables:
  tipo_detector: uno_de(["acústico", "térmico"])

respuesta: verdadero
tipo: vf

enunciado: "El detector de fugas de tipo \"{tipo_detector}\" es uno de los mencionados en la teoría para ubicar una fuga embutida en una pared."

explicacion: |
  El detector acústico detecta el sonido del agua escapando bajo
  presión; el térmico, la diferencia de temperatura que genera la
  humedad.
```

### 12 — La lógica inversa entre caso 1 y caso 2

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, la lógica de diagnóstico del caso 2 (baja presión general) es inversa a la del caso 1 (baja presión puntual): en el caso 1 se busca en el tramo específico, en el caso 2 se busca en la fuente."

explicacion: |
  Es la comparación explícita que hace la teoría entre ambos casos.
```

### 13 — Buscar la explicación más simple primero

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, conviene buscar la explicación más simple de un síntoma antes que la más invasiva."

explicacion: |
  El ejemplo citado en la teoría es el caso 3: un sifón sin agua se
  resuelve usando la canilla, no rompiendo una pared.
```

### 14 — Instrumento antes de intervenir físicamente

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "usar el instrumento adecuado (como un detector de fugas) antes de intervenir físicamente"
tipo: mc
opciones_explicitas: ["usar el instrumento adecuado (como un detector de fugas) antes de intervenir físicamente", "intervenir físicamente de inmediato en cualquier caso", "esperar a que el síntoma empeore antes de actuar"]

enunciado: "Cuando la causa de un síntoma no es evidente a simple vista, el método de la teoría recomienda..."

explicacion: |
  Es el tercer paso del método resumido: usar el instrumento adecuado
  antes de intervenir físicamente cuando la causa no es evidente.
```

### 15 — El caso menos invasivo de resolver

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 3 (olor por sifón sin agua)"
tipo: mc
opciones_explicitas: ["el caso 3 (olor por sifón sin agua)", "el caso 4 (humedad en la pared)", "el caso 2 (baja presión general)"]

enunciado: "De los cuatro casos de esta teoría, ¿cuál se resuelve sin ninguna reparación física, sólo con el uso normal del artefacto?"

explicacion: |
  El caso 3 se soluciona simplemente usando el artefacto para que el
  sifón vuelva a llenarse de agua.
```

### 16 — Por qué distinguir general vs. puntual importa

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Distinguir si un problema de plomería es general (afecta a toda la instalación) o puntual (un solo artefacto o tramo) es el primer paso del método de diagnóstico según la teoría."

explicacion: |
  Es el primer paso resumido al final de la teoría, común a todos los
  casos.
```

### 17 — El plomero pasa más tiempo diagnosticando que reemplazando

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, un plomero pasa más tiempo diagnosticando que reemplazando piezas, ya que la mayoría de los llamados empiezan con un síntoma ambiguo con varias causas posibles."

explicacion: |
  Es la idea de apertura de todo el tema de diagnóstico.
```

### 18 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "plomero_diagnostico_plomeria_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los cuatro casos de este tema comparten la misma lógica: distinguir general vs. puntual, buscar la explicación más simple primero, y usar el instrumento adecuado antes de intervenir físicamente cuando la causa no es evidente."

explicacion: |
  Es la síntesis final del método de diagnóstico de plomería de todo
  el tema.
```
