# Química — Equilibrio de solubilidad: Ksp (cuestionario, 20 preguntas VBLang)

> Tema: `QKSP`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma) y corregido a mano.
> Bug de esta tanda: `respuesta` envuelta en array (`["solubilidad"]`)
> otra vez. También se limpió LaTeX crudo (`$K_{sp} = s^2$`) a texto
> plano en varias preguntas.

---

### 1 — Concepto de Ksp

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["equilibrio", "ksp", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Ksp es un caso particular de Kc, aplicado al equilibrio de una sal disolviéndose en un solvente."

explicacion: |
  Correcto. Ksp es la constante de equilibrio de la reacción de disolución de un sólido poco soluble.
```

### 2 — Definición de Ksp

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "solubilidad"
tipo: completar
respuestas_validas:
  - "solubilidad"

enunciado: "Ksp significa producto de ___."

explicacion: |
  Ksp es el producto de las concentraciones molares de los iones en solución, elevadas a sus coeficientes.
```

### 3 — Cálculo de Ksp

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["calculo", "estequiometria"]

variables:
  a: uno_de([1, 2, 3, 4])
  b: uno_de([1, 2, 3])

respuesta: a * b
tipo: input
tolerancia_abs: 0.01

enunciado: "Para AB ⇌ A+ + B-, Ksp = [A+] × [B-]. Si [A+] = {a} M y [B-] = {b} M, ¿cuál es el valor de Ksp?"

explicacion: |
  Ksp = {a} × {b}.
```

### 4 — El sólido en la expresión de Ksp

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["reglas_ksp"]

respuesta: verdadero
tipo: vf

enunciado: "En la expresión de Ksp, el sólido puro (AB) no se incluye, porque su actividad es constante (se toma como 1)."

explicacion: |
  Correcto, igual que en Kc: los sólidos puros no aparecen explícitamente en la expresión de la constante.
```

### 5 — Expresión de Ksp para AB2

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "solubilidad"]

respuesta: "[A2+]*[B-]^2"
tipo: mc
opciones_explicitas: ["[A2+]*[B-]^2", "[A2+]*[B-]", "[A2+]^2*[B-]", "[A2+]+2[B-]"]

enunciado: "Para AB2(s) ⇌ A2+(ac) + 2B-(ac), la expresión correcta de Ksp es..."

explicacion: |
  Cada concentración se eleva a su coeficiente: 1 para A2+ y 2 para B-, entonces Ksp = [A2+]×[B-]².
```

### 6 — Cálculo de Ksp para AB2

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["ksp", "calculo"]

variables:
  a2: uno_de([1, 2, 3, 4])
  b: uno_de([2, 3, 4, 5])

respuesta: a2 * (b ^ 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para AB2(s) ⇌ A2+(ac) + 2B-(ac), con [A2+] = {a2} M y [B-] = {b} M en el equilibrio, calculá Ksp."

pasos:
  - "Ksp = [A2+] × [B-]²"

explicacion: |
  Ksp = {a2} × ({b}²).
```

### 7 — Regla de los coeficientes en Ksp

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["teoria", "ksp"]

respuesta: verdadero
tipo: vf

enunciado: "En la expresión de Ksp, cada concentración iónica se eleva a la potencia de su coeficiente en la ecuación balanceada."

explicacion: |
  Verdadero, mismo patrón que Kc: exponente = coeficiente estequiométrico.
```

### 8 — Cálculo de Ksp desde s (sal 1:1)

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["ksp", "solubilidad"]

variables:
  s: uno_de([2, 3, 4, 5])

respuesta: s * s
tipo: input
tolerancia_abs: 0.01

enunciado: "Para una sal AB (1:1), Ksp = s², con s la solubilidad molar. Si s = {s} mol/L, ¿cuál es Ksp?"

pasos:
  - "AB ⇌ A+ + B-, entonces [A+]=[B-]=s"
  - "Ksp = s × s = s²"

explicacion: |
  Ksp = {s} × {s}.
```

### 9 — Cálculo de solubilidad molar desde Ksp

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["ksp", "solubilidad"]

variables:
  ksp: uno_de([4, 9, 16, 25])

respuesta: sqrt(ksp)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para una sal AB (1:1), Ksp = s². Si Ksp = {ksp}, ¿cuál es la solubilidad molar s?"

pasos:
  - "s = raíz cuadrada de Ksp"

explicacion: |
  s = √{ksp}.
```

### 10 — Estequiometría de solubilidad en AB2

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["estequiometria", "solubilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Para una sal AB2 que se disocia en A2+ + 2B-, si se disuelven s moles de la sal, la concentración de B- es el doble que la de A2+."

explicacion: |
  Verdadero. Por cada mol de AB2 disuelto se forma 1 mol de A2+ pero 2 moles de B-.
```

### 11 — Fórmula de Ksp para sal 1:1

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "solubilidad"]

respuesta: "2"
tipo: completar
respuestas_validas:
  - "2"

enunciado: "Para una sal AB (1:1), la fórmula que relaciona Ksp con la solubilidad molar s es Ksp = s elevado a la ___."

explicacion: |
  Como la disociación produce dos iones (uno de cada tipo), Ksp = s × s = s².
```

### 12 — Solubilidad y valor de Ksp

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "solubilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Un valor de Ksp muy pequeño, como 10⁻¹⁰, indica que la sal es muy poco soluble en agua."

explicacion: |
  Correcto. Cuanto menor el Ksp, menos iones se disuelven antes de saturar la solución.
```

### 13 — Estado de saturación: Q menor a Ksp

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["producto_ionico", "saturacion"]

respuesta: "la solución no está saturada, no precipita"
tipo: mc
opciones_explicitas: ["la solución no está saturada, no precipita", "la solución está sobresaturada y precipita", "la solución está exactamente en equilibrio", "no se puede saber"]

enunciado: "Si el producto iónico Q es MENOR que Ksp, la solución..."

explicacion: |
  Q < Ksp significa que hay menos iones disueltos de los que el equilibrio permite: la solución no está saturada.
```

### 14 — Estado de saturación: Q mayor a Ksp

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["producto_ionico", "precipitacion"]

respuesta: "la solución está sobresaturada, el exceso precipita"
tipo: mc
opciones_explicitas: ["la solución está sobresaturada, el exceso precipita", "la solución está saturada", "la solución no está saturada", "la solución está exactamente en equilibrio"]

enunciado: "Si el producto iónico Q es MAYOR que Ksp, la solución..."

explicacion: |
  Q > Ksp significa que hay más iones de los que el equilibrio permite: el exceso precipita hasta que Q vuelva a igualar Ksp.
```

### 15 — Equilibrio de saturación: Q igual a Ksp

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["ksp", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto iónico Q es igual a Ksp, la solución está exactamente saturada, en equilibrio."

explicacion: |
  Correcto. Q = Ksp es la definición misma del punto de saturación.
```

### 16 — Ksp no cambia con la cantidad de sólido

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Agregar más sólido sin disolver a una solución ya saturada aumenta el valor de Ksp."

explicacion: |
  Falso. Ksp depende sólo de la temperatura, no de cuánto sólido en exceso haya en el fondo del recipiente.
```

### 17 — Comparación de solubilidad entre dos sales

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "avanzado"
  tags: ["comparacion", "ksp"]

respuesta: "la sal con Ksp = 1x10^-3"
tipo: mc
opciones_explicitas: ["la sal con Ksp = 1x10^-3", "la sal con Ksp = 1x10^-12", "ambas son igual de solubles", "no se puede comparar sin más datos"]

enunciado: "Entre dos sales del mismo tipo (AB 1:1), una con Ksp = 1×10⁻³ y otra con Ksp = 1×10⁻¹², ¿cuál es más soluble?"

explicacion: |
  A mayor Ksp, mayor solubilidad (para sales del mismo tipo estequiométrico): 1×10⁻³ es mucho más grande que 1×10⁻¹².
```

### 18 — Efecto de un ion común

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "avanzado"
  tags: ["ion_comun", "le_chatelier"]

respuesta: verdadero
tipo: vf

enunciado: "Si a una solución saturada de AB se le agrega más B- (de otra fuente, ej. otra sal soluble con el mismo anión), la solubilidad de AB disminuye."

explicacion: |
  Verdadero (efecto del ion común). Por Le Chatelier, agregar más B- desplaza el equilibrio AB ⇌ A+ + B- hacia la izquierda, precipitando más AB sólido.
```

### 19 — Precipitación al mezclar soluciones

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "avanzado"
  tags: ["aplicacion", "precipitacion"]

respuesta: "sí precipita, porque Q supera a Ksp"
tipo: mc
opciones_explicitas: ["sí precipita, porque Q supera a Ksp", "no precipita nunca, porque son soluciones diluidas", "sólo precipita si se calienta la mezcla", "depende únicamente del color de los iones"]

enunciado: "Al mezclar dos soluciones cuyos iones forman una sal poco soluble, ¿cuándo precipita esa sal?"

explicacion: |
  Precipita cuando el producto iónico Q de la mezcla resultante supera el Ksp de esa sal — el mismo criterio Q vs. Ksp de siempre.
```

### 20 — Unidades de Ksp

```
metadata:
  materia: "quimica"
  tema: "equilibrio_solubilidad_ksp"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Ksp siempre tiene las mismas unidades para cualquier tipo de sal, sin importar su estequiometría."

explicacion: |
  Falso. Las unidades de Ksp dependen de los exponentes (coeficientes) de la sal: no es lo mismo M² (sal 1:1) que M³ (sal tipo AB2), por ejemplo.
```
