# Arte — Composición y proporción (cuestionario, 24 preguntas VBLang)

> Tema: `AR1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la composición

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué es la composición en una obra de arte?"
tipo: mc
opciones_explicitas:
  - "Cómo se organizan los elementos dentro del espacio disponible de la obra"
  - "El tema o motivo que se representa"
  - "La técnica material usada (óleo, acuarela, fotografía)"
respuesta: "Cómo se organizan los elementos dentro del espacio disponible de la obra"

explicacion: |
  No es sólo qué se representa, sino dónde se ubica cada elemento.
```

### 2 — Qué es la proporción en arte

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué es la proporción, aplicada a una obra visual?"
tipo: mc
opciones_explicitas:
  - "La relación de tamaño entre las partes de la obra entre sí, y con el todo"
  - "La cantidad de colores distintos usados"
  - "El tiempo que lleva realizar la obra"
respuesta: "La relación de tamaño entre las partes de la obra entre sí, y con el todo"

explicacion: |
  Es la misma idea de razón y proporción de Matemática, aplicada al
  espacio visual.
```

### 3 — Qué es la regla de tercios

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿En qué consiste la regla de tercios?"
tipo: mc
opciones_explicitas:
  - "Dividir el espacio de la obra con dos líneas horizontales y dos verticales, en una cuadrícula de 3×3"
  - "Usar sólo tres colores en toda la obra"
  - "Dividir la obra en tres partes iguales, una al lado de la otra"
respuesta: "Dividir el espacio de la obra con dos líneas horizontales y dos verticales, en una cuadrícula de 3×3"

explicacion: |
  Forma una cuadrícula de nueve celdas, con cuatro líneas y cuatro
  intersecciones.
```

### 4 — Problema: dividir un ancho en tercios

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "problema"]

variables:
  ancho: uno_de([900, 1200, 1500, 1800, 2100])

respuesta: ancho / 3
tipo: input
tolerancia_abs: 0

enunciado: "Una foto mide {ancho} px de ancho. Para trazar las dos líneas verticales de la regla de tercios, hay que ubicarlas cada ¿cuántos píxeles?"

pasos:
  - "{ancho} ÷ 3 = {ancho / 3} px"

explicacion: |
  El ancho se divide en 3 partes iguales; las líneas van en esos puntos
  de división.
```

### 5 — El punto de interés no va en el centro exacto

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion"]

respuesta: falso
tipo: vf

enunciado: "Según la regla de tercios, el punto de interés principal de una imagen conviene ubicarlo siempre en el centro exacto."

explicacion: |
  Al contrario: se recomienda ubicarlo sobre una de las líneas o
  intersecciones de la cuadrícula, no en el centro.
```

### 6 — Dónde conviene ubicar el punto de interés

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "vocabulario"]

enunciado: "Según la regla de tercios, ¿dónde conviene ubicar el elemento de mayor interés de una imagen?"
tipo: mc
opciones_explicitas:
  - "Sobre una de las líneas de la cuadrícula, o mejor aún, en una de las cuatro intersecciones"
  - "Siempre en la esquina superior izquierda"
  - "Da exactamente igual, la posición no afecta la composición"
respuesta: "Sobre una de las líneas de la cuadrícula, o mejor aún, en una de las cuatro intersecciones"

explicacion: |
  Suele generar una composición más dinámica que centrar todo.
```

### 7 — Qué es la proporción áurea

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué es la proporción áurea?"
tipo: mc
opciones_explicitas:
  - "Una relación de proporción de ≈1,618, usada históricamente en arte y arquitectura"
  - "La proporción exacta 1:1, es decir, partes iguales"
  - "Una técnica para mezclar colores dorados"
respuesta: "Una relación de proporción de ≈1,618, usada históricamente en arte y arquitectura"

explicacion: |
  Se representa con la letra griega φ (phi).
```

### 8 — Problema: lado mayor de un rectángulo áureo

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "avanzado"
  tags: ["composicion", "problema"]

variables:
  lado_menor: uno_de([10, 20, 30, 50])

respuesta: redondear(lado_menor * 1.618, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "En un rectángulo áureo, el lado menor mide {lado_menor} cm. ¿Cuánto mide aproximadamente el lado mayor? (usá la proporción áurea ≈1,618)"

pasos:
  - "{lado_menor} × 1,618 = {redondear(lado_menor * 1.618, 2)} cm"

explicacion: |
  El lado mayor es el lado menor multiplicado por la proporción áurea.
```

### 9 — Problema: lado menor de un rectángulo áureo

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "avanzado"
  tags: ["composicion", "problema"]

variables:
  lado_mayor: uno_de([161.8, 323.6, 809])

respuesta: redondear(lado_mayor / 1.618, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "En un rectángulo áureo, el lado mayor mide {lado_mayor} cm. ¿Cuánto mide aproximadamente el lado menor?"

pasos:
  - "{lado_mayor} ÷ 1,618 = {redondear(lado_mayor / 1.618, 1)} cm"

explicacion: |
  Se despeja el lado menor dividiendo por la proporción áurea.
```

### 10 — La proporción áurea aparece en la naturaleza

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion"]

respuesta: verdadero
tipo: vf

enunciado: "La proporción áurea aparece de forma recurrente en formas de la naturaleza, como la disposición de las semillas de un girasol."

explicacion: |
  Es una de las razones por las que se la considera una proporción
  visualmente "agradable".
```

### 11 — Qué es el punto focal

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué es el punto focal de una obra?"
tipo: mc
opciones_explicitas:
  - "El elemento o zona que primero capta la atención del ojo"
  - "El punto exacto donde se firma la obra"
  - "El centro geométrico exacto de la imagen"
respuesta: "El elemento o zona que primero capta la atención del ojo"

explicacion: |
  No tiene por qué coincidir con el centro geométrico de la obra.
```

### 12 — Qué recursos generan un punto focal

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Con qué recursos se puede generar un punto focal en una composición?"
tipo: mc
opciones_explicitas:
  - "Posición estratégica, contraste (de color, tamaño o nitidez), o dejarlo como lo único distinto entre elementos repetidos"
  - "Usando siempre el color rojo"
  - "Ubicándolo siempre en el borde de la imagen"
respuesta: "Posición estratégica, contraste (de color, tamaño o nitidez), o dejarlo como lo único distinto entre elementos repetidos"

explicacion: |
  Son varias herramientas distintas, no una receta única.
```

### 13 — El formato de una obra afecta la composición posible

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion"]

respuesta: verdadero
tipo: vf

enunciado: "El formato de una obra (horizontal, vertical o cuadrado) condiciona directamente qué composiciones son posibles."

explicacion: |
  Es de las primeras decisiones que toma quien compone una imagen, no
  un detalle técnico menor.
```

### 14 — Formato horizontal, típico de qué

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Para qué tipo de escena se usa típicamente el formato horizontal (apaisado)?"
tipo: mc
opciones_explicitas:
  - "Paisajes, escenas amplias"
  - "Retratos de una sola persona"
  - "Nunca se usa en obras reales"
respuesta: "Paisajes, escenas amplias"

explicacion: |
  El ancho mayor que el alto se adapta mejor a escenas que se extienden
  de lado a lado.
```

### 15 — Formato vertical, típico de qué

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Para qué tipo de obra se usa típicamente el formato vertical?"
tipo: mc
opciones_explicitas:
  - "Retratos de una persona u objeto alto"
  - "Panorámicas de paisaje"
  - "Nunca se usa en fotografía"
respuesta: "Retratos de una persona u objeto alto"

explicacion: |
  El alto mayor que el ancho se adapta mejor a sujetos verticales.
```

### 16 — Qué transmite una composición simétrica

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué sensación suele transmitir una composición simétrica?"
tipo: mc
opciones_explicitas:
  - "Formalidad, orden y estabilidad"
  - "Caos y desorden"
  - "Movimiento acelerado"
respuesta: "Formalidad, orden y estabilidad"

explicacion: |
  La distribución en espejo respecto de un eje da una sensación de
  equilibrio formal.
```

### 17 — Qué transmite una composición asimétrica

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "vocabulario"]

enunciado: "¿Qué sensación suele transmitir una composición asimétrica bien balanceada?"
tipo: mc
opciones_explicitas:
  - "Dinamismo y naturalidad"
  - "Rigidez y formalidad extrema"
  - "Ninguna sensación distinta a la simétrica"
respuesta: "Dinamismo y naturalidad"

explicacion: |
  El balance se logra de otra forma (por ejemplo, un elemento grande de
  un lado compensado por varios chicos del otro), no con espejo exacto.
```

### 18 — La composición simétrica usa el concepto de reflexión

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "avanzado"
  tags: ["composicion"]

respuesta: verdadero
tipo: vf

enunciado: "Una composición simétrica se basa en la misma idea de reflexión (eje de simetría) ya vista en las transformaciones geométricas."

explicacion: |
  Los elementos de un lado del eje son, en esencia, el reflejo de los
  del otro lado.
```

### 19 — Ordenar: pasos para aplicar la regla de tercios

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "ordenar"]

enunciado: "Ordená los pasos para aplicar la regla de tercios a una composición."
tipo: ordenar
opciones_explicitas:
  - "Ubicar ese elemento sobre una línea, o en una de las cuatro intersecciones"
  - "Dividir el espacio de la obra en una cuadrícula de 3×3, con dos líneas horizontales y dos verticales"
  - "Identificar el elemento de mayor interés de la escena"
respuesta_orden: ["Dividir el espacio de la obra en una cuadrícula de 3×3, con dos líneas horizontales y dos verticales", "Identificar el elemento de mayor interés de la escena", "Ubicar ese elemento sobre una línea, o en una de las cuatro intersecciones"]
explicacion: |
  Primero se traza la cuadrícula, y recién después se decide dónde va el
  punto de interés dentro de ella.
```

### 20 — Problema: intersecciones en una cuadrícula de tercios

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion", "problema"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos puntos de intersección tienen las líneas de una cuadrícula de regla de tercios (2 líneas horizontales y 2 verticales)?"

explicacion: |
  Cada línea horizontal cruza a cada línea vertical: 2 × 2 = 4
  intersecciones.
```

### 21 — La proporción en arte es la misma idea que la razón matemática

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "intermedio"
  tags: ["composicion"]

respuesta: verdadero
tipo: vf

enunciado: "La proporción en una obra visual es la misma idea de razón y proporción de Matemática, aplicada al espacio en vez de a números sueltos."

explicacion: |
  Por eso este tema depende del área ya construida en
  `../../matematica/perimetro-y-area/`.
```

### 22 — Problema: proporción entre dos partes de una obra

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "avanzado"
  tags: ["composicion", "problema"]

variables:
  cielo: uno_de([60, 70, 75])
  paisaje: 100 - cielo

respuesta: cielo / paisaje
tipo: input
tolerancia_abs: 0.05

enunciado: "En una foto de paisaje, el cielo ocupa el {cielo}% de la imagen y el paisaje el {paisaje}% restante. ¿Cuál es la razón (cielo : paisaje), expresada como número decimal?"

pasos:
  - "{cielo} ÷ {paisaje} = {redondear(cielo / paisaje, 2)}"

explicacion: |
  Es la misma razón matemática ya vista en `../../matematica/razon/`,
  aplicada a dos áreas de una composición.
```

### 23 — Componer no es lo mismo que elegir el tema

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["composicion"]

respuesta: verdadero
tipo: vf

enunciado: "La misma escena o el mismo tema, compuesto de dos formas distintas, puede transmitir sensaciones completamente diferentes."

explicacion: |
  Es la idea central del módulo: el "qué" y el "cómo se organiza" son
  decisiones distintas.
```

### 24 — Cierre: para qué sirve la composición

```
metadata:
  materia: "arte"
  tema: "composicion_y_proporcion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la composición y la proporción en una obra?"
tipo: mc
opciones_explicitas:
  - "Es la base para organizar cualquier obra visual de forma efectiva, antes de entrar en el vocabulario específico de elementos y principios"
  - "Sólo sirve para pintura al óleo"
  - "No tiene relación con la fotografía ni el diseño digital"
respuesta: "Es la base para organizar cualquier obra visual de forma efectiva, antes de entrar en el vocabulario específico de elementos y principios"

explicacion: |
  Los módulos siguientes (`../elementos-del-arte/` y
  `../principios-de-diseno/`) se apoyan en esta base.
```
