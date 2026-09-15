# Oficios — Mecánico — Diagnóstico automotor por casos (cuestionario, 18 preguntas VBLang)

> Cierre del oficio (`OF5`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico automotor —
> cada pregunta validada con parse+lint+compile+generate real de
> packages/vblang antes de guardarse.

---

### 1 — Un código de falla no es la respuesta final

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, un código de falla leído con el scanner OBD es el punto de partida de una hipótesis que hay que verificar, no la respuesta final."

explicacion: |
  El mismo código puede tener más de una causa real posible; el
  mecánico moderno combina la lectura electrónica con verificación
  física.
```

### 2 — Posibles causas del código de sensor de oxígeno

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  causa: uno_de(["el propio sensor de oxígeno roto", "una fuga de escape antes del sensor", "un problema real en la mezcla de combustible"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para un código de falla de sensor de oxígeno."

explicacion: |
  Las tres son causas posibles mencionadas en el caso 1, no sólo el
  sensor en sí.
```

### 3 — Reemplazar sin verificar

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "avanzado"
  tags: ["caso 1"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, reemplazar el sensor de oxígeno apenas aparece su código de falla, sin verificar la causa real, siempre resuelve el problema de fondo."

explicacion: |
  Falso. Puede \"resolver\" el código sin resolver el problema de
  fondo si la causa real era una fuga de escape o un problema de
  mezcla, no el sensor.
```

### 4 — Motor que arranca con dificultad en frío

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "bujías desgastadas o batería con capacidad reducida por el frío"
tipo: mc
opciones_explicitas: ["bujías desgastadas o batería con capacidad reducida por el frío", "un problema exclusivo del sistema de frenos", "una falla en la caja de cambios, únicamente"]

enunciado: "Si un motor cuesta arrancar específicamente en frío pero arranca bien caliente, ¿dónde se concentran las sospechas según la teoría?"

explicacion: |
  El sistema de encendido (bujías, chispa más débil) o la batería
  (menos capacidad efectiva con frío) son las dos sospechas
  principales del caso 2.
```

### 5 — Por qué el frío agrava el arranque

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, la batería pierde capacidad efectiva con el frío, entregando menos corriente de arranque justo cuando el motor frío exige más esfuerzo para moverse."

explicacion: |
  Es la explicación de por qué el arranque en frío es la condición más
  exigente para el sistema eléctrico del vehículo.
```

### 6 — Vibración anormal a cierta velocidad

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "un desbalanceo que se hace evidente sólo a esa frecuencia específica de giro"
tipo: mc
opciones_explicitas: ["un desbalanceo que se hace evidente sólo a esa frecuencia específica de giro", "una falla generalizada de todo el vehículo, sin relación con la velocidad", "un problema exclusivo del sistema eléctrico"]

enunciado: "Una vibración que aparece sólo en un rango específico de velocidad suele apuntar a..."

explicacion: |
  Un desbalanceo (rueda o conjunto motor-transmisión) se hace evidente
  a una frecuencia de giro específica, no de forma generalizada.
```

### 7 — Volante vs. vehículo entero

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Distinguir si la vibración se siente en el volante (más asociado a las ruedas delanteras) o en todo el vehículo (más asociado a transmisión o motor) orienta el diagnóstico del caso 3 antes de desarmar nada."

explicacion: |
  Es el criterio de diagnóstico propuesto en la teoría para el caso 3.
```

### 8 — Pérdida de potencia sin código evidente

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

variables:
  causa: uno_de(["un filtro de aire muy obstruido", "una obstrucción parcial en el sistema de escape", "un desgaste generalizado que reduce la compresión de los cilindros"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para pérdida de potencia sin ningún código de falla claro en el scanner."

explicacion: |
  Las tres son causas mencionadas en el caso 4, que no siempre generan
  un código específico.
```

### 9 — El scanner no reemplaza la verificación mecánica

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "basico"
  tags: ["caso 4"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, el scanner OBD es una herramienta poderosa, pero no reemplaza por completo la verificación mecánica directa."

explicacion: |
  Es la conclusión explícita del caso 4, y una idea que atraviesa todo
  el tema de diagnóstico.
```

### 10 — Diagnóstico automotor moderno: electrónica y mecánica

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, el diagnóstico automotor moderno combina electrónica y mecánica, nunca sólo una de las dos."

explicacion: |
  Es la síntesis final del método de diagnóstico automotor de todo el
  tema.
```

### 11 — El motor de arranque débil complica el caso 2

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Un motor de arranque débil complica el diagnóstico del caso 2 porque agrava tanto el escenario de bujías desgastadas como el de batería con poca capacidad."

explicacion: |
  Es la nota final del caso 2: un tercer elemento puede agravar los
  dos escenarios principales por igual.
```

### 12 — Verificar antes de reemplazar piezas caras

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "verificar físicamente antes de reemplazar piezas caras basándose sólo en el scanner"
tipo: mc
opciones_explicitas: ["verificar físicamente antes de reemplazar piezas caras basándose sólo en el scanner", "reemplazar siempre la pieza que señala el código sin más análisis", "ignorar el scanner y confiar sólo en la experiencia"]

enunciado: "Según el método resumido de la teoría, ¿qué se recomienda antes de reemplazar una pieza cara basándose en un código del scanner?"

explicacion: |
  Verificar físicamente antes de reemplazar piezas caras es el segundo
  paso del método resumido.
```

### 13 — Un código, más de una causa posible

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, un mismo código de falla puede tener más de una causa real posible."

explicacion: |
  Es la idea de apertura de todo el tema de diagnóstico automotor.
```

### 14 — Diferencia entre caso 1 y caso 4

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 4"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 1 tiene un código de falla claro con varias causas posibles; el caso 4 tiene un síntoma real sin código de falla evidente"
tipo: mc
opciones_explicitas: ["el caso 1 tiene un código de falla claro con varias causas posibles; el caso 4 tiene un síntoma real sin código de falla evidente", "son exactamente el mismo tipo de caso", "el caso 1 nunca requiere scanner, a diferencia del caso 4"]

enunciado: "¿Cuál es la diferencia central entre el caso 1 (código de sensor de oxígeno) y el caso 4 (pérdida de potencia sin código)?"

explicacion: |
  El caso 1 parte de un código claro con varias causas posibles; el
  caso 4 parte de un síntoma real sin ningún código que lo señale.
```

### 15 — Rango de velocidad y desbalanceo

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, una vibración que sólo aparece en un rango específico de velocidad suele indicar una falla generalizada de todo el vehículo, no un desbalanceo puntual."

explicacion: |
  Falso. Suele apuntar a un desbalanceo, no a una falla generalizada —
  eso es justamente lo que distingue este caso.
```

### 16 — La bujía y la chispa débil en frío

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Una bujía desgastada genera una chispa más débil, algo especialmente notorio en la condición más exigente del arranque en frío."

explicacion: |
  Es la explicación del caso 2 sobre por qué las bujías desgastadas se
  notan más en frío que en caliente.
```

### 17 — Recorrer física y electrónica juntas

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Un código o un síntoma se trata en la teoría como una hipótesis de partida que se combina con verificación física, nunca como una conclusión aislada."

explicacion: |
  Es el primer paso del método resumido, coherente con la idea de
  apertura del tema.
```

### 18 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "mecanico_diagnostico_automotor_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los cuatro casos de este tema comparten la misma lógica: tratar el código o síntoma como hipótesis de partida, verificar antes de reemplazar, y combinar electrónica con mecánica."

explicacion: |
  Es la síntesis final del método de diagnóstico automotor de todo el
  tema.
```
