# Química — Equilibrio químico y Kc (cuestionario, 20 preguntas VBLang)

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
