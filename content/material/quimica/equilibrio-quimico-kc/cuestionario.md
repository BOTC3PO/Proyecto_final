# Química — Equilibrio químico y Kc (cuestionario, 26 preguntas VBLang)

> Tema: `QP`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Naturaleza del equilibrio químico

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["equilibrio", "cinetica"]

respuesta: falso
tipo: vf

enunciado: "En el equilibrio químico, la reacción se detiene por completo y no hay movimiento de partículas."

explicacion: |
  Falso. El equilibrio es dinámico: las reacciones directa e inversa siguen ocurriendo, pero a la misma velocidad, así que las concentraciones no cambian.
```

### 2 — Velocidades de reacción

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["equilibrio", "velocidad"]

respuesta: verdadero
tipo: vf

enunciado: "El equilibrio se alcanza cuando la velocidad de la reacción directa se iguala a la velocidad de la reacción inversa."

explicacion: |
  Verdadero. Esa igualdad de velocidades es la condición para que las concentraciones dejen de variar.
```

### 3 — Concepto de equilibrio dinámico

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "dinamico"
tipo: completar
respuestas_validas:
  - "dinamico"

enunciado: "Por eso el equilibrio químico se llama equilibrio ___."

explicacion: |
  Se llama dinámico porque, aunque las concentraciones no cambian, las reacciones directa e inversa siguen sucediendo constantemente.
```

### 4 — Concentraciones en el equilibrio

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "En el estado de equilibrio, las concentraciones de reactivos y productos dejan de cambiar con el tiempo."

explicacion: |
  Verdadero. Al ser iguales las velocidades directa e inversa, la cantidad neta de cada especie se mantiene constante.
```

### 5 — Cálculo de la constante Kc

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["equilibrio", "calculo"]

variables:
  a: uno_de([1, 2, 4])
  b: uno_de([1, 2])
  c: uno_de([2, 4, 8])

respuesta: c / (a * b)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para la reacción A + B ⇌ C en equilibrio, con [A] = {a} M, [B] = {b} M y [C] = {c} M, calculá la constante de equilibrio Kc."

pasos:
  - "Kc = [C] / ([A] × [B])"

explicacion: |
  Kc = {c} / ({a} × {b}).
```

### 6 — Exponentes en la expresión de Kc

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["teoria", "ley_accion_masas"]

respuesta: verdadero
tipo: vf

enunciado: "En la expresión de Kc, los exponentes de cada concentración molar corresponden a los coeficientes de la ecuación balanceada."

explicacion: |
  Correcto. Para aA + bB ⇌ cC + dD, Kc = [C]^c × [D]^d / ([A]^a × [B]^b).
```

### 7 — Sólidos y líquidos en la expresión de Kc

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["teoria", "fases"]

respuesta: falso
tipo: vf

enunciado: "En la expresión de Kc, los sólidos puros y los líquidos puros se incluyen usando su concentración molar como un término más."

explicacion: |
  Falso. Su "concentración" es constante (se considera 1), así que se omiten de la expresión de Kc.
```

### 8 — Significado de [X] en Kc

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

respuesta: "equilibrio"
tipo: completar
respuestas_validas:
  - "equilibrio"

enunciado: "En la expresión de Kc, la notación [X] representa la concentración de X en el ___ (no la inicial)."

explicacion: |
  Kc se calcula con las concentraciones en el momento en que el sistema ya alcanzó el equilibrio.
```

### 9 — Predominancia de productos

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["equilibrio", "constante_equilibrio"]

respuesta: "los productos"
tipo: mc
opciones_explicitas: ["los reactivos", "los productos", "cantidades iguales", "ninguno"]

enunciado: "Si Kc es mucho mayor que 1, en el equilibrio predominan..."

explicacion: |
  Un Kc muy grande indica que la relación productos/reactivos es alta: la reacción se desplazó casi hasta el final.
```

### 10 — Predominancia de reactivos

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["equilibrio", "constante_equilibrio"]

respuesta: "los reactivos"
tipo: mc
opciones_explicitas: ["los reactivos", "los productos", "cantidades iguales", "ninguno"]

enunciado: "Si Kc es mucho menor que 1, en el equilibrio predominan..."

explicacion: |
  Un Kc muy chico indica que la concentración de reactivos es mucho mayor que la de productos: la reacción casi no avanzó.
```

### 11 — Dependencia de la temperatura

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["temperatura", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "Kc depende exclusivamente de la temperatura y no cambia si se aumenta la concentración de un reactivo en un sistema ya en equilibrio."

explicacion: |
  Correcto. Cambiar concentraciones desplaza el equilibrio (Le Chatelier), pero mientras la temperatura no varíe, Kc se mantiene igual.
```

### 12 — Efecto de la concentración sobre Kc

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["concentracion", "le_chatelier"]

respuesta: falso
tipo: vf

enunciado: "Si se agrega más reactivo a un sistema en equilibrio, el valor de Kc cambia para compensar el exceso de sustancia."

explicacion: |
  Falso. Al agregar reactivo, cambian las concentraciones (el sistema se reacomoda), pero el cociente vuelve a dar el mismo Kc si la temperatura no cambió.
```

### 13 — Desplazamiento por concentración

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["le_chatelier", "equilibrio"]

respuesta: "los productos"
tipo: mc
opciones_explicitas: ["los productos", "los reactivos", "no se mueve", "se detiene"]

enunciado: "Si se agrega más reactivo a un sistema en equilibrio, el equilibrio se desplaza hacia..."

explicacion: |
  Según Le Chatelier, el sistema consume el exceso desplazándose hacia la formación de productos.
```

### 14 — Efecto de la temperatura en reacciones exotérmicas

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["le_chatelier", "termoquimica"]

respuesta: "los reactivos"
tipo: mc
opciones_explicitas: ["los reactivos", "los productos", "no se mueve", "se detiene"]

enunciado: "Si se aumenta la temperatura en una reacción EXOTÉRMICA en equilibrio, el equilibrio se desplaza hacia..."

explicacion: |
  En una exotérmica, el calor "funciona" como un producto más. Al subir la temperatura, el sistema se desplaza hacia los reactivos (el lado que absorbe ese calor extra).
```

### 15 — Efecto de la presión en sistemas gaseosos

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["le_chatelier", "presion"]

respuesta: "menos moles de gas"
tipo: mc
opciones_explicitas: ["menos moles de gas", "más moles de gas", "igual cantidad de moles", "no se mueve"]

enunciado: "Si se aumenta la presión en un sistema gaseoso en equilibrio, el equilibrio se desplaza hacia el lado con..."

explicacion: |
  Aumentar la presión favorece el lado con menos moles de gas, para achicar el volumen que ocupan.
```

### 16 — Remoción de productos

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["le_chatelier", "concentracion"]

respuesta: verdadero
tipo: vf

enunciado: "Quitar producto de un sistema en equilibrio desplaza el equilibrio hacia los productos, para reponer lo que se quitó."

explicacion: |
  Verdadero. Al bajar la concentración de un producto, el sistema se desplaza hacia la derecha para compensar esa pérdida.
```

### 17 — Kc y coeficientes de la ecuación balanceada

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["conceptos", "balanceo"]

respuesta: verdadero
tipo: vf

enunciado: "Para escribir la expresión de Kc de una reacción, primero hay que tener la ecuación química balanceada."

explicacion: |
  Correcto. Los coeficientes balanceados son los exponentes que van en la expresión de Kc.
```

### 18 — Quitar reactivo del sistema

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["le_chatelier", "concentracion"]

respuesta: "los reactivos"
tipo: mc
opciones_explicitas: ["los reactivos", "los productos", "no se mueve", "se detiene"]

enunciado: "Si se quita reactivo de un sistema en equilibrio, el equilibrio se desplaza hacia..."

explicacion: |
  El sistema se desplaza hacia los reactivos (favoreciendo la reacción inversa) para reponer parte de lo que se quitó.
```

### 19 — Kc igual a 1

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["interpretacion", "kc"]

respuesta: verdadero
tipo: vf

enunciado: "Si Kc es aproximadamente 1, hay cantidades comparables de reactivos y productos en el equilibrio."

explicacion: |
  Verdadero. Un Kc cercano a 1 indica que ni los reactivos ni los productos predominan claramente.
```

### 20 — Reacción endotérmica y temperatura

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "avanzado"
  tags: ["le_chatelier", "termoquimica"]

respuesta: "los productos"
tipo: mc
opciones_explicitas: ["los productos", "los reactivos", "no se mueve", "se detiene"]

enunciado: "Si se aumenta la temperatura en una reacción ENDOTÉRMICA en equilibrio, ¿hacia dónde se desplaza el equilibrio?"

explicacion: |
  En una endotérmica, el calor "funciona" como reactivo. Subir la temperatura favorece que se consuma ese calor extra, desplazando el equilibrio hacia los productos — al revés que en una exotérmica.
```

### 21 — Kc de una reacción simple (A ⇌ B)

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["calculo", "kc"]

variables:
  A: uno_de([0.1, 0.2, 0.25, 0.5, 1])
  B: uno_de([0.1, 0.5, 1, 2])

respuesta: B / A
tipo: input
unidad: ""
tolerancia: 1%

enunciado: "Para la reacción A ⇌ B, en el equilibrio [A] = {A} M y [B] = {B} M. ¿Cuánto vale Kc?"

pasos:
  - "Kc = [B] / [A]"
  - "Kc = {B} / {A} = {B / A | 2}"

explicacion: |
  Productos arriba, reactivos abajo, cada uno elevado a su coeficiente (acá, 1).
```

### 22 — Kc con dos reactivos (A + B ⇌ C)

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["calculo", "kc"]

variables:
  A: uno_de([0.2, 0.5, 1])
  B: uno_de([0.1, 0.4, 2])
  C: uno_de([0.2, 0.8, 1.6])

respuesta: C / (A * B)
tipo: input
unidad: ""
tolerancia: 1%

enunciado: "Para A + B ⇌ C, en el equilibrio [A] = {A} M, [B] = {B} M y [C] = {C} M. ¿Cuánto vale Kc? (podés redondear a dos decimales)"

pasos:
  - "Kc = [C] / ([A] × [B])"
  - "Kc = {C} / ({A} × {B}) = {C} / {A * B | 3} ≈ {C / (A * B) | 2}"

explicacion: |
  Las concentraciones de los reactivos se multiplican en el denominador.
```

### 23 — Kc con un coeficiente 2

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["calculo", "kc", "coeficientes"]

variables:
  A: uno_de([0.1, 0.2, 0.5])
  B: uno_de([0.2, 0.3, 0.6])

respuesta: B ^ 2 / A
tipo: input
unidad: ""
tolerancia: 1%

enunciado: "Para la reacción A ⇌ 2 B, en el equilibrio [A] = {A} M y [B] = {B} M. ¿Cuánto vale Kc? (podés redondear a dos decimales)"

pasos:
  - "Kc = [B]² / [A] (el coeficiente 2 pasa a ser exponente)"
  - "Kc = {B}² / {A} = {B ^ 2 | 3} / {A} ≈ {B ^ 2 / A | 2}"

explicacion: |
  Los coeficientes de la ecuación balanceada son los exponentes de Kc.
```

### 24 — Concentración que falta

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "avanzado"
  tags: ["calculo", "kc"]

variables:
  K: uno_de([2, 4, 5, 10])
  A: uno_de([0.1, 0.2, 0.5])

respuesta: K * A
tipo: input
unidad: "M"
tolerancia: 1%

enunciado: "Para A ⇌ B, Kc = {K}. Si en el equilibrio [A] = {A} M, ¿cuánto vale [B]?"

pasos:
  - "Kc = [B] / [A] → [B] = Kc × [A]"
  - "[B] = {K} × {A} = {K * A} M"

explicacion: |
  Conociendo Kc se puede predecir la concentración de equilibrio.
```

### 25 — Kc y el agua en el sólido

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "intermedio"
  tags: ["calculo", "solidos", "cotidiano"]

variables:
  co2: uno_de([0.01, 0.02, 0.05])

respuesta: co2
tipo: input
unidad: ""
tolerancia: 1%

enunciado: "En un horno de cal, CaCO₃ (sólido) ⇌ CaO (sólido) + CO₂ (gas). En el equilibrio [CO₂] = {co2} M. ¿Cuánto vale Kc?"

pasos:
  - "Los sólidos puros no entran en Kc."
  - "Kc = [CO₂] = {co2}"

explicacion: |
  Así se fabrica la cal: al sacar el CO₂ del horno, el equilibrio se desplaza y sigue produciendo CaO.
```

### 26 — ¿Predominan los productos?

```
metadata:
  materia: "quimica"
  tema: "equilibrio_quimico_kc"
  nivel: "basico"
  tags: ["interpretacion", "verdadero_falso"]

variables:
  K: uno_de([0.001, 0.05, 0.5, 20, 1000, 100000])

respuesta: K > 1
tipo: vf

enunciado: "Una reacción tiene Kc = {K}. ¿En el equilibrio predominan los productos?"

pasos:
  - "Kc > 1: predominan los productos; Kc < 1: predominan los reactivos. Acá Kc = {K}."

explicacion: |
  Kc compara cuánto hay de productos con cuánto hay de reactivos en el equilibrio.
```
