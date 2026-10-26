# Matemática — Razones trigonométricas (cuestionario, 28 preguntas VBLang)

> Tema: `M7`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el cateto opuesto

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "vocabulario"]

enunciado: "En un triángulo rectángulo, respecto de un ángulo agudo elegido, ¿qué es el cateto opuesto?"
tipo: mc
opciones_explicitas:
  - "El cateto que no toca a ese ángulo, el que está 'enfrente'"
  - "El cateto que sí toca a ese ángulo"
  - "La hipotenusa"
respuesta: "El cateto que no toca a ese ángulo, el que está 'enfrente'"

explicacion: |
  El cateto adyacente es el que sí toca al ángulo elegido.
```

### 2 — Qué es el cateto adyacente

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "vocabulario"]

enunciado: "En un triángulo rectángulo, respecto de un ángulo agudo elegido, ¿qué es el cateto adyacente?"
tipo: mc
opciones_explicitas:
  - "El cateto que sí toca a ese ángulo (además de la hipotenusa)"
  - "El cateto que no toca a ese ángulo"
  - "La hipotenusa"
respuesta: "El cateto que sí toca a ese ángulo (además de la hipotenusa)"

explicacion: |
  El cateto opuesto es el que no lo toca.
```

### 3 — El opuesto de un ángulo es el adyacente del otro

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "El cateto opuesto de un ángulo agudo es, al mismo tiempo, el cateto adyacente del otro ángulo agudo del mismo triángulo."

explicacion: |
  Los nombres "opuesto" y "adyacente" dependen de qué ángulo se elija
  como referencia.
```

### 4 — Qué significa SOH-CAH-TOA

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "vocabulario"]

enunciado: "¿Qué representa la regla mnemotécnica SOH-CAH-TOA?"
tipo: mc
opciones_explicitas:
  - "Seno=Opuesto/Hipotenusa, Coseno=Adyacente/Hipotenusa, Tangente=Opuesto/Adyacente"
  - "Los nombres de los tres ángulos de cualquier triángulo"
  - "El orden en que se miden los lados de un triángulo"
respuesta: "Seno=Opuesto/Hipotenusa, Coseno=Adyacente/Hipotenusa, Tangente=Opuesto/Adyacente"

explicacion: |
  Es una forma de memorizar las tres razones sin confundir cuál lado va
  en el numerador y cuál en el denominador.
```

### 5 — Completar: fórmula del seno

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "completar"]

tipo: completar
enunciado: "Completá: seno = cateto opuesto / ___."
respuestas_validas:
  - "hipotenusa"

explicacion: |
  El coseno también divide por la hipotenusa, pero usa el cateto
  adyacente.
```

### 6 — Completar: fórmula del coseno

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "completar"]

tipo: completar
enunciado: "Completá: coseno = cateto ___ / hipotenusa."
respuestas_validas:
  - "adyacente"

explicacion: |
  El seno usa el cateto opuesto en el numerador.
```

### 7 — Completar: fórmula de la tangente

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "completar"]

tipo: completar
enunciado: "Completá: tangente = cateto opuesto / cateto ___."
respuestas_validas:
  - "adyacente"

explicacion: |
  A diferencia de seno y coseno, la tangente no usa la hipotenusa.
```

### 8 — Problema: seno con terna 3-4-5

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "problema"]

variables:
  k: random(1, 8)
  opuesto: 3 * k
  adyacente: 4 * k
  hipotenusa: 5 * k

respuesta: redondear(opuesto / hipotenusa, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo rectángulo tiene, respecto de un ángulo agudo α, cateto opuesto {opuesto}, cateto adyacente {adyacente} e hipotenusa {hipotenusa}. ¿Cuánto vale sen(α)?"

pasos:
  - "{opuesto} ÷ {hipotenusa} = {redondear(opuesto / hipotenusa, 2)}"

explicacion: |
  Seno es opuesto sobre hipotenusa.
```

### 9 — Problema: coseno con terna 3-4-5

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "problema"]

variables:
  k: random(1, 8)
  opuesto: 3 * k
  adyacente: 4 * k
  hipotenusa: 5 * k

respuesta: redondear(adyacente / hipotenusa, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo rectángulo tiene, respecto de un ángulo agudo α, cateto opuesto {opuesto}, cateto adyacente {adyacente} e hipotenusa {hipotenusa}. ¿Cuánto vale cos(α)?"

pasos:
  - "{adyacente} ÷ {hipotenusa} = {redondear(adyacente / hipotenusa, 2)}"

explicacion: |
  Coseno es adyacente sobre hipotenusa.
```

### 10 — Problema: tangente con terna 3-4-5

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "problema"]

variables:
  k: random(1, 8)
  opuesto: 3 * k
  adyacente: 4 * k

respuesta: redondear(opuesto / adyacente, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo rectángulo tiene, respecto de un ángulo agudo α, cateto opuesto {opuesto} y cateto adyacente {adyacente}. ¿Cuánto vale tan(α)?"

pasos:
  - "{opuesto} ÷ {adyacente} = {redondear(opuesto / adyacente, 2)}"

explicacion: |
  Tangente es opuesto sobre adyacente, sin usar la hipotenusa.
```

### 11 — Problema: razones con terna 5-12-13

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  k: random(1, 6)
  opuesto: 5 * k
  adyacente: 12 * k
  hipotenusa: 13 * k

respuesta: redondear(opuesto / hipotenusa, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo rectángulo tiene, respecto de un ángulo agudo β, cateto opuesto {opuesto}, cateto adyacente {adyacente} e hipotenusa {hipotenusa}. ¿Cuánto vale sen(β)? Redondeá a 3 decimales."

pasos:
  - "{opuesto} ÷ {hipotenusa} = {redondear(opuesto / hipotenusa, 3)}"

explicacion: |
  Esta vez la razón no da un número tan "redondo" como 3/5, pero se
  calcula exactamente igual.
```

### 12 — La razón no cambia si el triángulo se agranda

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "Si se agranda un triángulo rectángulo manteniendo el mismo ángulo agudo, el valor del seno de ese ángulo NO cambia."

explicacion: |
  Los triángulos son semejantes, así que la razón entre lados se
  mantiene igual.
```

### 13 — Problema: verificar que el seno no cambia al escalar

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  k1: random(1, 5)
  k2: k1 + random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo con catetos {3 * k1} y {4 * k1} (hipotenusa {5 * k1}) tiene el mismo ángulo agudo que otro con catetos {3 * k2} y {4 * k2} (hipotenusa {5 * k2}). ¿El seno de ese ángulo da el mismo valor (0,6) en ambos triángulos?"

explicacion: |
  {3 * k1}/{5 * k1} y {3 * k2}/{5 * k2} son ambos iguales a 3/5 = 0,6:
  son triángulos semejantes, misma razón.
```

### 14 — Por qué la razón no depende del tamaño

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "vocabulario"]

enunciado: "¿Por qué una razón trigonométrica da siempre el mismo valor para un ángulo dado, sin importar el tamaño del triángulo?"
tipo: mc
opciones_explicitas:
  - "Porque dos triángulos rectángulos con el mismo ángulo agudo son semejantes (criterio AA), y sus lados son proporcionales"
  - "Porque todos los triángulos rectángulos son congruentes entre sí"
  - "Es una coincidencia, sin explicación geométrica"
respuesta: "Porque dos triángulos rectángulos con el mismo ángulo agudo son semejantes (criterio AA), y sus lados son proporcionales"

explicacion: |
  Es la razón por la que este módulo depende de
  `../semejanza-y-teorema-de-thales/`.
```

### 15 — La tangente es el cociente de seno y coseno

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "La tangente de un ángulo es igual al seno de ese ángulo dividido su coseno (tan = sen / cos)."

explicacion: |
  Al dividir (opuesto/hipotenusa) por (adyacente/hipotenusa), la
  hipotenusa se simplifica y queda opuesto/adyacente.
```

### 16 — Problema: verificar tan = sen/cos

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  k: random(1, 8)

respuesta: redondear(0.6 / 0.8, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo α, sen(α) = 0,6 y cos(α) = 0,8. ¿Cuánto vale tan(α)?"

pasos:
  - "0,6 ÷ 0,8 = {redondear(0.6 / 0.8, 2)}"

explicacion: |
  Coincide con calcular directamente opuesto/adyacente = 3/4 = 0,75 en
  el triángulo 3-4-5.
```

### 17 — La identidad pitagórica de seno y coseno

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "vocabulario"]

enunciado: "¿Qué dice la identidad sen² + cos² = 1, para cualquier ángulo?"
tipo: mc
opciones_explicitas:
  - "Que el cuadrado del seno más el cuadrado del coseno de un mismo ángulo siempre suma 1"
  - "Que el seno y el coseno de cualquier ángulo son siempre iguales"
  - "Que la suma de seno y coseno siempre da 1, sin elevar al cuadrado"
respuesta: "Que el cuadrado del seno más el cuadrado del coseno de un mismo ángulo siempre suma 1"

explicacion: |
  Es consecuencia directa del teorema de Pitágoras aplicado a los
  catetos y la hipotenusa.
```

### 18 — Problema: verificar sen² + cos² = 1

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

respuesta: 1
tipo: input
tolerancia_abs: 0.01

enunciado: "Para el ángulo del triángulo 3-4-5, sen(α) = 0,6 y cos(α) = 0,8. ¿Cuánto da sen(α)² + cos(α)²?"

pasos:
  - "0,6² + 0,8² = 0,36 + 0,64 = 1"

explicacion: |
  Se cumple exactamente, porque 3² + 4² = 5² (el propio teorema de
  Pitágoras, dividido por 5² de los dos lados).
```

### 19 — Completar: valor del seno de 30°

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "completar"]

tipo: completar
enunciado: "Completá: sen(30°) = ___ (como número decimal)."
respuestas_validas:
  - "0.5"
  - "0,5"

explicacion: |
  Es uno de los valores notables que conviene memorizar.
```

### 20 — sen(30°) = cos(60°)

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "sen(30°) y cos(60°) valen exactamente lo mismo."

explicacion: |
  Los ángulos que suman 90° "intercambian" seno y coseno.
```

### 21 — sen(45°) = cos(45°)

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "sen(45°) y cos(45°) valen exactamente lo mismo."

explicacion: |
  Tiene sentido: 45° + 45° = 90°, así que se intercambian entre sí — y
  como son iguales, coinciden.
```

### 22 — tan(45°) = 1

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "tan(45°) vale exactamente 1."

explicacion: |
  Como sen(45°) = cos(45°), su cociente (la tangente) da 1.
```

### 23 — Problema: cateto opuesto usando sen(30°)

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  seno_30: 0.5
  hipotenusa: uno_de([10, 20, 30, 40])

respuesta: hipotenusa * seno_30
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene un ángulo de 30° y una hipotenusa de {hipotenusa}. ¿Cuánto mide el cateto opuesto a ese ángulo? (usá sen(30°) = 0,5)"

pasos:
  - "{hipotenusa} × 0,5 = {hipotenusa * seno_30}"

explicacion: |
  Cateto opuesto = hipotenusa × sen(ángulo).
```

### 24 — Problema: cateto adyacente usando cos(60°)

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  coseno_60: 0.5
  hipotenusa: uno_de([10, 20, 30, 40])

respuesta: hipotenusa * coseno_60
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene un ángulo de 60° y una hipotenusa de {hipotenusa}. ¿Cuánto mide el cateto adyacente a ese ángulo? (usá cos(60°) = 0,5)"

pasos:
  - "{hipotenusa} × 0,5 = {hipotenusa * coseno_60}"

explicacion: |
  Cateto adyacente = hipotenusa × cos(ángulo).
```

### 25 — Problema: catetos iguales con tan(45°)

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  adyacente: uno_de([5, 8, 10, 15])

respuesta: adyacente
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene un ángulo de 45° y un cateto adyacente de {adyacente}. ¿Cuánto mide el cateto opuesto a ese ángulo? (usá tan(45°) = 1)"

pasos:
  - "{adyacente} × 1 = {adyacente}"

explicacion: |
  En un triángulo con un ángulo de 45°, los dos catetos miden siempre
  lo mismo.
```

### 26 — Ordenar: pasos para hallar un lado con una razón trigonométrica

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "ordenar"]

enunciado: "Ordená los pasos para hallar un lado desconocido de un triángulo rectángulo, conociendo un ángulo agudo y otro lado."
tipo: ordenar
opciones_explicitas:
  - "Despejar el lado desconocido y calcular"
  - "Identificar qué lados están involucrados (opuesto, adyacente o hipotenusa) respecto del ángulo conocido"
  - "Elegir la razón trigonométrica correcta (seno, coseno o tangente) según esos dos lados"
respuesta_orden: ["Identificar qué lados están involucrados (opuesto, adyacente o hipotenusa) respecto del ángulo conocido", "Elegir la razón trigonométrica correcta (seno, coseno o tangente) según esos dos lados", "Despejar el lado desconocido y calcular"]
explicacion: |
  Elegir mal la razón (usar coseno cuando corresponde seno, por
  ejemplo) es el error más común.
```

### 27 — Aplicación real: altura de un edificio

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "vocabulario"]

enunciado: "¿Cómo se puede calcular la altura de un edificio sin medirla directamente, usando trigonometría?"
tipo: mc
opciones_explicitas:
  - "Midiendo el ángulo de elevación desde una distancia conocida, y usando la tangente de ese ángulo"
  - "Contando la cantidad de pisos y multiplicando por 3 metros siempre"
  - "No es posible calcular una altura sin medirla directamente"
respuesta: "Midiendo el ángulo de elevación desde una distancia conocida, y usando la tangente de ese ángulo"

explicacion: |
  La distancia horizontal es el cateto adyacente, la altura es el
  cateto opuesto: tan(ángulo) = altura / distancia.
```

### 28 — Cierre: para qué sirven las razones trigonométricas

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven las razones trigonométricas?"
tipo: mc
opciones_explicitas:
  - "Para calcular lados o ángulos de un triángulo rectángulo sin medirlos directamente, a partir de datos conocidos"
  - "Sólo sirven para triángulos equiláteros"
  - "Sólo tienen aplicación teórica, sin uso práctico"
respuesta: "Para calcular lados o ángulos de un triángulo rectángulo sin medirlos directamente, a partir de datos conocidos"

explicacion: |
  Desde la altura de un edificio hasta el diseño de una rampa, siempre
  que hay un ángulo y un triángulo rectángulo, aparecen estas razones.
```
