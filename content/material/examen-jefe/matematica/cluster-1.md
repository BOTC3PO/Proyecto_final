# Examen jefe — Domina Trigonometría y Conjuntos

> Logro #601. Aplicaste razones trigonométricas y el teorema del seno y del coseno, y trabajaste pertenencia de conjuntos, conteo y el valor posicional en un mismo parcial. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **157 preguntas totales** en 5/5 secciones.

---

## Sección: razones-trigonometricas (28 preguntas)

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

## Sección: teorema-del-seno-y-del-coseno (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "basico"
  tags: ["oblicuos", "vocabulario"]

enunciado: "¿Qué es un triángulo oblicuo?"
tipo: mc
opciones_explicitas:
  - "Un triángulo que no tiene ningún ángulo de 90°"
  - "Un triángulo con los tres lados iguales"
  - "Otro nombre para el triángulo rectángulo"
respuesta: "Un triángulo que no tiene ningún ángulo de 90°"

explicacion: |
  Ahí ni Pitágoras ni las razones trigonométricas simples se pueden
  aplicar directo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["oblicuos", "vocabulario"]

enunciado: "¿Por qué el teorema de Pitágoras no se puede usar directamente en un triángulo oblicuo?"
tipo: mc
opciones_explicitas:
  - "Porque Pitágoras exige un ángulo recto, y un triángulo oblicuo no tiene ninguno"
  - "Porque los triángulos oblicuos no tienen hipotenusa nombrada"
  - "En realidad sí se puede usar exactamente igual"
respuesta: "Porque Pitágoras exige un ángulo recto, y un triángulo oblicuo no tiene ninguno"

explicacion: |
  Por eso hacen falta el teorema del seno y del coseno.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "completar"]

tipo: completar
enunciado: "Completá el teorema del seno: a / sen(A) = b / sen(B) = ___."
respuestas_validas:
  - "c / sen(C)"
  - "c/sen(C)"

explicacion: |
  Los tres cocientes lado/seno(ángulo opuesto) son siempre iguales entre
  sí.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "vocabulario"]

enunciado: "¿Qué dice el teorema del seno?"
tipo: mc
opciones_explicitas:
  - "Que cada lado de un triángulo es proporcional al seno de su ángulo opuesto, con la misma razón para los tres"
  - "Que la suma de los tres lados es igual al seno del ángulo mayor"
  - "Que sólo aplica a triángulos rectángulos"
respuesta: "Que cada lado de un triángulo es proporcional al seno de su ángulo opuesto, con la misma razón para los tres"

explicacion: |
  Vale para cualquier triángulo, no sólo los rectángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno", "problema"]

variables:
  a: uno_de([10, 20, 30, 40])
  sen_A: 0.5
  sen_B: 1

respuesta: (a / sen_A) * sen_B
tipo: input
tolerancia_abs: 0.5

enunciado: "En un triángulo, el lado a = {a} es opuesto al ángulo A = 30° (sen 30° = 0,5). El lado b es opuesto al ángulo B = 90° (sen 90° = 1). ¿Cuánto mide el lado b?"

pasos:
  - "{a} ÷ 0,5 = {a / sen_A} (la razón constante del triángulo)"
  - "b = {a / sen_A} × 1 = {(a / sen_A) * sen_B}"

explicacion: |
  Se usa la razón a/sen(A), que es la misma para los tres lados del
  triángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno", "problema"]

variables:
  b: uno_de([10, 14, 20])
  sen_B: 0.71
  sen_A: 0.5

respuesta: redondear((b / sen_B) * sen_A, 1)
tipo: input
tolerancia_abs: 1

enunciado: "En un triángulo, el lado b = {b} es opuesto al ángulo B = 45° (sen 45° ≈ 0,71). El lado a es opuesto al ángulo A = 30° (sen 30° = 0,5). ¿Cuánto mide el lado a, aproximadamente?"

pasos:
  - "{b} ÷ 0,71 ≈ {redondear(b / sen_B, 2)} (razón constante)"
  - "a ≈ {redondear(b / sen_B, 2)} × 0,5 ≈ {redondear((b / sen_B) * sen_A, 1)}"

explicacion: |
  Mismo procedimiento: primero se halla la razón constante, después se
  aplica al ángulo del lado buscado.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "vocabulario"]

enunciado: "¿Cuándo conviene usar el teorema del seno para resolver un triángulo?"
tipo: mc
opciones_explicitas:
  - "Cuando se conoce un ángulo y su lado opuesto, más otro ángulo o lado"
  - "Cuando se conocen sólo los tres lados, sin ningún ángulo"
  - "Nunca, sólo sirve para triángulos rectángulos"
respuesta: "Cuando se conoce un ángulo y su lado opuesto, más otro ángulo o lado"

explicacion: |
  Ese par lado-ángulo opuesto es lo que permite fijar la razón
  constante.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "completar"]

tipo: completar
enunciado: "Completá el teorema del coseno: c² = a² + b² − ___."
respuestas_validas:
  - "2ab·cos(C)"
  - "2ab cos(C)"
  - "2*a*b*cos(C)"

explicacion: |
  C es el ángulo comprendido entre los lados a y b.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "¿Qué relación tiene el teorema del coseno con el teorema de Pitágoras?"
tipo: mc
opciones_explicitas:
  - "Pitágoras es el caso particular del teorema del coseno cuando el ángulo C es de 90°"
  - "No tienen ninguna relación entre sí"
  - "El teorema del coseno reemplaza completamente a Pitágoras, que ya no se usa"
respuesta: "Pitágoras es el caso particular del teorema del coseno cuando el ángulo C es de 90°"

explicacion: |
  Con cos(90°) = 0, el último término del teorema del coseno desaparece.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno"]

respuesta: verdadero
tipo: vf

enunciado: "Si el ángulo C de un triángulo es 90°, el teorema del coseno se reduce exactamente a c² = a² + b² (el teorema de Pitágoras)."

explicacion: |
  Porque cos(90°) = 0, y el término -2ab·cos(C) se anula.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: 3
  b: 4
  cos_90: 0

respuesta: 25
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene lados a = 3 y b = 4, con el ángulo C entre ellos de 90° (cos 90° = 0). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "c² = 3² + 4² − 2×3×4×0 = 9 + 16 − 0 = 25"

explicacion: |
  Da exactamente el mismo resultado que Pitágoras: 3² + 4² = 25.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: uno_de([4, 6, 8])
  b: uno_de([4, 6, 8])
  cos_60: 0.5

respuesta: (a * a) + (b * b) - (2 * a * b * cos_60)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un triángulo tiene lados a = {a} y b = {b}, con un ángulo C = 60° entre ellos (cos 60° = 0,5). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "{a}² + {b}² − 2×{a}×{b}×0,5 = {(a * a) + (b * b) - (2 * a * b * cos_60)}"

explicacion: |
  Se reemplazan los valores directamente en la fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: uno_de([4, 5, 6])
  b: uno_de([4, 5, 6])
  cos_120: -0.5

respuesta: (a * a) + (b * b) - (2 * a * b * cos_120)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un triángulo tiene lados a = {a} y b = {b}, con un ángulo obtuso C = 120° entre ellos (cos 120° = -0,5). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "{a}² + {b}² − 2×{a}×{b}×(-0,5) = {(a * a) + (b * b) - (2 * a * b * cos_120)}"

explicacion: |
  Con coseno negativo, el término se SUMA en vez de restarse: el lado c
  queda más largo que si el ángulo fuera agudo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "¿Cuándo conviene usar el teorema del coseno para resolver un triángulo?"
tipo: mc
opciones_explicitas:
  - "Cuando se conocen dos lados y el ángulo entre ellos, o los tres lados"
  - "Cuando se conoce sólo un lado, sin ningún ángulo"
  - "Nunca, sólo sirve para triángulos rectángulos"
respuesta: "Cuando se conocen dos lados y el ángulo entre ellos, o los tres lados"

explicacion: |
  Es el caso LAL (lado-ángulo-lado) o LLL (los tres lados).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["vocabulario"]

enunciado: "¿Cuál es la diferencia clave entre cuándo usar el teorema del seno y cuándo el del coseno?"
tipo: mc
opciones_explicitas:
  - "El seno necesita un ángulo con su lado opuesto ya conocidos; el coseno necesita dos lados y el ángulo entre ellos (o los tres lados)"
  - "El seno sólo sirve para ángulos agudos; el coseno sólo para obtusos"
  - "Son intercambiables, da lo mismo cuál se use"
respuesta: "El seno necesita un ángulo con su lado opuesto ya conocidos; el coseno necesita dos lados y el ángulo entre ellos (o los tres lados)"

explicacion: |
  Es la clave para decidir cuál aplicar según los datos disponibles.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del coseno funciona igual de bien con ángulos obtusos (mayores a 90°), no sólo con agudos."

explicacion: |
  El coseno de un ángulo obtuso es simplemente negativo, y la fórmula
  lo maneja sin ningún ajuste extra.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: 6
  b: 8
  cos_60: 0.5

respuesta: redondear(sqrt((a * a) + (b * b) - (2 * a * b * cos_60)), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un terreno triangular tiene dos lados de {a} m y {b} m, con un ángulo de 60° entre ellos. ¿Cuánto mide el tercer lado? Redondeá a 2 decimales."

pasos:
  - "c² = {a}² + {b}² − 2×{a}×{b}×0,5 = {(a * a) + (b * b) - (2 * a * b * cos_60)}"
  - "c = √{(a * a) + (b * b) - (2 * a * b * cos_60)} ≈ {redondear(sqrt((a * a) + (b * b) - (2 * a * b * cos_60)), 2)} m"

explicacion: |
  Se calcula c² con el teorema del coseno, y recién al final se saca
  raíz cuadrada para obtener c.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "ordenar"]

enunciado: "Ordená los pasos para hallar el lado c con el teorema del coseno, conociendo a, b y el ángulo C entre ellos."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de c² para obtener c"
  - "Reemplazar a, b y cos(C) en la fórmula c² = a² + b² − 2ab·cos(C)"
  - "Calcular el valor numérico de c²"
respuesta_orden: ["Reemplazar a, b y cos(C) en la fórmula c² = a² + b² − 2ab·cos(C)", "Calcular el valor numérico de c²", "Sacar raíz cuadrada de c² para obtener c"]
explicacion: |
  La raíz cuadrada siempre va al final, no antes de tener c² completo.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "ordenar"]

enunciado: "Ordená los pasos para hallar un lado desconocido con el teorema del seno."
tipo: ordenar
opciones_explicitas:
  - "El resultado es el lado buscado"
  - "Calcular la razón lado/sen(ángulo opuesto) con el par de datos ya conocido"
  - "Multiplicar esa razón por el seno del ángulo opuesto al lado buscado"
respuesta_orden: ["Calcular la razón lado/sen(ángulo opuesto) con el par de datos ya conocido", "Multiplicar esa razón por el seno del ángulo opuesto al lado buscado", "El resultado es el lado buscado"]
explicacion: |
  La razón constante es el puente entre el par conocido y el
  desconocido.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del seno también se puede usar al revés: para hallar un ángulo desconocido, si se conocen los dos lados involucrados y un ángulo opuesto ya conocido."

explicacion: |
  La misma proporción se puede despejar para cualquiera de sus cuatro
  términos (dos lados, dos ángulos).
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Para qué se usan estos dos teoremas en topografía?"
tipo: mc
opciones_explicitas:
  - "Para calcular distancias o alturas inaccesibles, midiendo sólo algunos ángulos y una distancia de referencia"
  - "Sólo para calcular el área de un terreno cuadrado"
  - "No tienen ninguna aplicación práctica fuera del aula"
respuesta: "Para calcular distancias o alturas inaccesibles, midiendo sólo algunos ángulos y una distancia de referencia"

explicacion: |
  Es la base de la triangulación: no hace falta que el triángulo
  formado tenga un ángulo recto.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del seno y del coseno también son válidos para triángulos rectángulos, aunque ahí ya alcance con Pitágoras y las razones trigonométricas simples."

explicacion: |
  Son herramientas más generales; simplemente no hace falta usarlas
  cuando hay una forma más rápida disponible.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  lado: 5

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo equilátero tiene los tres lados iguales a {lado}, y sus tres ángulos son de 60°. ¿Es consistente que la razón lado/sen(ángulo opuesto) dé el mismo valor para los tres lados (teorema del seno)?"

explicacion: |
  Al ser equilátero, los tres pares lado-ángulo son idénticos entre sí:
  la razón tiene que coincidir por simetría.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "Si se conocen los tres lados de un triángulo (LLL) pero ningún ángulo, ¿qué teorema conviene usar para hallar un ángulo?"
tipo: mc
opciones_explicitas:
  - "El teorema del coseno, despejando cos(C) de la fórmula"
  - "El teorema del seno, porque siempre es más simple"
  - "Ninguno de los dos sirve sin conocer al menos un ángulo de entrada"
respuesta: "El teorema del coseno, despejando cos(C) de la fórmula"

explicacion: |
  cos(C) = (a² + b² − c²) / (2ab): se puede despejar sin conocer ningún
  ángulo de entrada.
```

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven el teorema del seno y del coseno en conjunto?"
tipo: mc
opciones_explicitas:
  - "Para resolver cualquier triángulo, tenga o no un ángulo recto, según qué datos estén disponibles"
  - "Sólo sirven para triángulos equiláteros"
  - "Son redundantes entre sí, alcanza con saber uno solo"
respuesta: "Para resolver cualquier triángulo, tenga o no un ángulo recto, según qué datos estén disponibles"

explicacion: |
  Entre los dos, y sumados a Pitágoras para el caso rectángulo, cubren
  cualquier triángulo posible.
```

## Sección: conjuntos-pertenencia-e-inclusion (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué es un conjunto en matemática?"
tipo: mc
opciones_explicitas:
  - "Una colección de objetos bien definida, sin importar el orden y sin repetir elementos"
  - "Una lista de números que siempre debe estar ordenada"
  - "Un conjunto sólo puede tener números, nunca letras u objetos"
respuesta: "Una colección de objetos bien definida, sin importar el orden y sin repetir elementos"

explicacion: |
  {2, 4, 6} y {6, 4, 2} son el mismo conjunto — el orden no importa.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Cómo se llama cada objeto que forma parte de un conjunto?"
tipo: mc
opciones_explicitas:
  - "Elemento"
  - "Subconjunto"
  - "Universo"
respuesta: "Elemento"

explicacion: |
  Un conjunto está formado por sus elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el símbolo que indica que un elemento SÍ pertenece a un conjunto es ___."
respuestas_validas:
  - "∈"

explicacion: |
  3 ∈ {1, 2, 3} se lee "3 pertenece al conjunto".
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el símbolo que indica que un elemento NO pertenece a un conjunto es ___."
respuestas_validas:
  - "∉"

explicacion: |
  5 ∉ {1, 2, 3} se lee "5 no pertenece al conjunto".
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "problema"]

enunciado: "Dado el conjunto A = {3, 6, 9, 12, 15}, ¿el número 10 pertenece a A?"
tipo: vf
respuesta: falso

explicacion: |
  10 no está en la lista de elementos de A — no cumple ninguna
  propiedad especial, simplemente no fue incluido.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "El conjunto vacío (∅) es un conjunto válido, con cardinalidad 0 — no es lo mismo que 'no tener conjunto'."

explicacion: |
  ∅ es una colección válida (dos llaves sin nada adentro), simplemente sin elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el conjunto vacío se representa con el símbolo ___ o con dos llaves sin nada adentro."
respuestas_validas:
  - "∅"

explicacion: |
  También se acepta escribirlo con dos llaves sin nada adentro.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué mide la cardinalidad de un conjunto, escrita |A|?"
tipo: mc
opciones_explicitas:
  - "La cantidad de elementos que tiene el conjunto"
  - "El elemento más grande del conjunto"
  - "La suma de todos los elementos del conjunto"
respuesta: "La cantidad de elementos que tiene el conjunto"

explicacion: |
  |{2, 4, 6, 8}| = 4, sin importar cuáles sean esos elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "problema"]

enunciado: "¿Cuál es la cardinalidad del conjunto A = {10, 20, 30, 40, 50, 60}?"
tipo: input
respuesta: 6

explicacion: |
  Se cuentan los elementos listados, sin importar su valor: hay 6.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos"]

respuesta: 0
tipo: input

enunciado: "¿Cuál es la cardinalidad del conjunto vacío, |∅|?"

explicacion: |
  No tiene ningún elemento, así que su cardinalidad es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Cuándo se dice que B es subconjunto de A (B ⊆ A)?"
tipo: mc
opciones_explicitas:
  - "Cuando TODOS los elementos de B también son elementos de A"
  - "Cuando B y A tienen la misma cantidad de elementos"
  - "Cuando B tiene al menos un elemento en común con A"
respuesta: "Cuando TODOS los elementos de B también son elementos de A"

explicacion: |
  Con que un solo elemento de B no esté en A, ya no es subconjunto.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "completar"]

tipo: completar
enunciado: "Completá: el símbolo que indica que B es subconjunto de A se escribe B ___ A."
respuestas_validas:
  - "⊆"

explicacion: |
  Se lee "B está incluido en A" o "B es subconjunto de A".
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "Todo conjunto A es subconjunto de sí mismo (A ⊆ A), aunque no sea subconjunto PROPIO."

explicacion: |
  Todos los elementos de A están, obviamente, en A — cumple la
  definición, aunque no agregue nada nuevo.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "El conjunto vacío (∅) es subconjunto de cualquier conjunto A, sin excepción."

explicacion: |
  No hay ningún elemento en ∅ que pueda faltar en A (no hay ninguno),
  así que la condición se cumple siempre, vacuamente.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué diferencia a un subconjunto PROPIO (B ⊂ A) de un subconjunto cualquiera (B ⊆ A)?"
tipo: mc
opciones_explicitas:
  - "En el propio, A tiene además al menos un elemento que B no tiene (son distintos)"
  - "En el propio, B y A tienen que ser exactamente iguales"
  - "No hay ninguna diferencia real entre ambos símbolos"
respuesta: "En el propio, A tiene además al menos un elemento que B no tiene (son distintos)"

explicacion: |
  Si B = A, entonces B ⊆ A pero B NO es subconjunto propio de A.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

enunciado: "A = {2, 4, 6, 8, 10}. ¿B = {4, 8, 12} es subconjunto de A?"
tipo: vf
respuesta: falso

explicacion: |
  12 es un elemento de B que NO está en A — alcanza con ese uno solo
  para que B no sea subconjunto de A.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Qué es el conjunto universal (U) en un problema de conjuntos?"
tipo: mc
opciones_explicitas:
  - "El conjunto de referencia que contiene a todos los elementos posibles en ese contexto"
  - "El conjunto con más elementos que existe en matemática"
  - "Un sinónimo del conjunto vacío"
respuesta: "El conjunto de referencia que contiene a todos los elementos posibles en ese contexto"

explicacion: |
  Por ejemplo, si el problema habla de los días de la semana, U son
  esos 7 días — cualquier otro conjunto del problema es subconjunto de U.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos", "vocabulario"]

enunciado: "¿Cuál de estas dos formas escribe un conjunto 'por extensión'?"
tipo: mc
opciones_explicitas:
  - "A = {2, 4, 6, 8}"
  - "A = {x : x es par y 0 < x < 10}"
  - "Ambas son la misma forma, sólo cambia el nombre"
respuesta: "A = {2, 4, 6, 8}"

explicacion: |
  Por extensión se listan los elementos uno por uno; por comprensión
  se describe la propiedad que cumplen.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos", "ordenar"]

enunciado: "Ordená los pasos para verificar si un conjunto B es subconjunto de un conjunto A."
tipo: ordenar
opciones_explicitas:
  - "Si en algún momento se encuentra un elemento de B que no está en A, se concluye que B NO es subconjunto de A"
  - "Tomar cada elemento de B, uno por uno"
  - "Revisar si ese elemento también pertenece a A"
respuesta_orden: ["Tomar cada elemento de B, uno por uno", "Revisar si ese elemento también pertenece a A", "Si en algún momento se encuentra un elemento de B que no está en A, se concluye que B NO es subconjunto de A"]
explicacion: |
  Alcanza con UN elemento de B ausente en A para descartar la inclusión.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "Dos conjuntos son iguales si y sólo si tienen exactamente los mismos elementos (sin importar el orden en que se escriban)."

explicacion: |
  {1, 2, 3} y {3, 1, 2} son el mismo conjunto.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "intermedio"
  tags: ["conjuntos"]

respuesta: verdadero
tipo: vf

enunciado: "{2, 2, 4, 4, 4, 6} representa el mismo conjunto que {2, 4, 6} — un conjunto nunca repite elementos, aunque se los escriba repetidos."

explicacion: |
  Por definición, un conjunto no tiene elementos duplicados.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["conjuntos", "aplicacion"]

enunciado: "¿Dónde se usa la misma idea de pertenencia e inclusión de conjuntos, fuera de la matemática pura?"
tipo: mc
opciones_explicitas:
  - "En bases de datos (una fila 'pertenece' a una tabla que cumple ciertas condiciones) y en lógica proposicional"
  - "Sólo en geometría, para clasificar triángulos"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "En bases de datos (una fila 'pertenece' a una tabla que cumple ciertas condiciones) y en lógica proposicional"

explicacion: |
  Es el mismo vocabulario de fondo que usan las consultas de bases de
  datos y la lógica proposicional de Filosofía.
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "avanzado"
  tags: ["conjuntos", "problema"]

variables:
  limite: uno_de([10, 15, 20, 25, 30])

respuesta: floor(limite / 2)
tipo: input

enunciado: "¿Cuántos elementos tiene el conjunto A = {{x : x es un número par positivo y x ≤ {limite}}}?"

pasos:
  - "Los pares positivos hasta {limite} son 2, 4, 6, ..., hasta el mayor par ≤ {limite}"
  - "Cantidad = {limite} ÷ 2 (redondeado hacia abajo) = {floor(limite / 2)}"

explicacion: |
  Cada 2 números hay exactamente un par, así que la cantidad de pares
  hasta un límite es ese límite dividido 2 (redondeado hacia abajo si
  el límite es impar).
```

```
metadata:
  materia: "matematicas"
  tema: "conjuntos_pertenencia_e_inclusion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el vocabulario de pertenencia e inclusión de conjuntos?"
tipo: mc
opciones_explicitas:
  - "Es la base formal sobre la que se construyen las operaciones entre conjuntos, los diagramas de Venn y toda la combinatoria de este tronco"
  - "Sólo sirve para clasificar números pares e impares"
  - "Sólo se usa en un único ejercicio de examen"
respuesta: "Es la base formal sobre la que se construyen las operaciones entre conjuntos, los diagramas de Venn y toda la combinatoria de este tronco"

explicacion: |
  Sin esta base, "unión" e "intersección" (próximo módulo) serían sólo
  palabras sueltas, sin una definición formal detrás.
```

## Sección: conteo (40 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(0, 8)
  siguiente: a + 1

respuesta: siguiente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el sucesor de {a}?"

pasos:
  - "El sucesor de un número es el que sigue: {a} + 1 = {siguiente}"

explicacion: |
  El sucesor de un número n es n + 1, el próximo en la secuencia de conteo.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(10, 98)
  siguiente: a + 1

respuesta: siguiente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el sucesor de {a}?"

pasos:
  - "{a} + 1 = {siguiente}"

explicacion: |
  El sucesor es siempre el número anterior más 1, aunque haya que cruzar
  una decena (ej.: el sucesor de 29 es 30).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(100, 998)
  siguiente: a + 1

respuesta: siguiente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el sucesor de {a}?"

pasos:
  - "{a} + 1 = {siguiente}"

explicacion: |
  Igual que con números más chicos: se suma 1, aunque se cruce una centena
  (ej.: el sucesor de 399 es 400).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(1, 9)
  anterior: a - 1

respuesta: anterior
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el antecesor de {a}?"

pasos:
  - "El antecesor es el número anterior: {a} - 1 = {anterior}"

explicacion: |
  El antecesor de un número n es n − 1, el que viene justo antes en la
  secuencia de conteo.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(11, 99)
  anterior: a - 1

respuesta: anterior
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el antecesor de {a}?"

pasos:
  - "{a} - 1 = {anterior}"

explicacion: |
  Se resta 1, aunque haya que bajar de decena (ej.: el antecesor de 40 es 39).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(101, 999)
  anterior: a - 1

respuesta: anterior
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el antecesor de {a}?"

pasos:
  - "{a} - 1 = {anterior}"

explicacion: |
  Se resta 1, aunque haya que bajar de centena (ej.: el antecesor de 500 es
  499).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "sucesor"]

variables:
  a: random(1, 500)
  b: a + uno_de([1, 1, 2, -1, 0])

respuesta: (b == a + 1)
tipo: vf

enunciado: "¿Es {b} el sucesor de {a}?"

explicacion: |
  El sucesor de {a} es {a} + 1. Hay que comparar ese resultado con el número
  propuesto, no alcanza con que "esté cerca".
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "antecesor"]

variables:
  a: random(2, 500)
  b: a - uno_de([1, 1, 2, -1, 0])

respuesta: (b == a - 1)
tipo: vf

enunciado: "¿Es {b} el antecesor de {a}?"

explicacion: |
  El antecesor de {a} es {a} − 1. Se compara ese resultado exacto con el
  número propuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 20) * 2
  n: random(3, 8)
  termino: inicio + 2 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 2 en 2 desde {inicio}, ¿qué número decís en el lugar {n}° (contando {inicio} como el 1°)?"

pasos:
  - "Cada paso suma 2. Del 1° al {n}° hay {n} - 1 pasos: {inicio} + 2 × ({n} - 1) = {termino}"

explicacion: |
  Contar salteado de a 2 es sumar siempre 2 al número anterior. El término
  en el lugar n es inicio + 2×(n − 1).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 20) * 5
  n: random(3, 8)
  termino: inicio + 5 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 5 en 5 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 5 × ({n} - 1) = {termino}"

explicacion: |
  Contar de 5 en 5 es la base de la tabla del 5: cada salto suma 5 al
  anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 50) * 10
  n: random(3, 8)
  termino: inicio + 10 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 10 en 10 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 10 × ({n} - 1) = {termino}"

explicacion: |
  Contar de 10 en 10 sólo cambia la cifra de las decenas (o más arriba); las
  unidades quedan fijas.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 30) * 3
  n: random(3, 8)
  termino: inicio + 3 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 3 en 3 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 3 × ({n} - 1) = {termino}"

explicacion: |
  Igual que con otros saltos: se suma siempre el mismo número (acá, 3) al
  anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(0, 30) * 4
  n: random(3, 8)
  termino: inicio + 4 * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de 4 en 4 desde {inicio}, ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + 4 × ({n} - 1) = {termino}"

explicacion: |
  El salto de 4 en 4 es la base de la tabla del 4.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "conteo_salteado"]

variables:
  inicio: random(1, 97)
  paso: uno_de([2, 3, 5, 10])
  n: random(3, 6)
  termino: inicio + paso * (n - 1)

respuesta: termino
tipo: input
tolerancia_abs: 0

enunciado: "Contando de {paso} en {paso} desde {inicio} (sin que {inicio} sea necesariamente múltiplo de {paso}), ¿qué número decís en el lugar {n}°?"

pasos:
  - "{inicio} + {paso} × ({n} - 1) = {termino}"

explicacion: |
  El conteo salteado funciona igual aunque el número de inicio no sea
  "redondo": el salto se suma siempre desde el propio inicio, no desde el
  múltiplo más cercano.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

variables:
  inicio: random(20, 999)
  pasos_atras: random(3, 9)
  resultado: inicio - pasos_atras

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Contando hacia atrás de 1 en 1 desde {inicio}, ¿qué número decís después de {pasos_atras} pasos?"

pasos:
  - "{inicio} - {pasos_atras} = {resultado}"

explicacion: |
  Contar hacia atrás de a 1 es restar 1 en cada paso, tantas veces como
  pasos se cuenten.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

variables:
  inicio: random(20, 200) * 2
  pasos_atras: random(2, 6)
  resultado: inicio - 2 * pasos_atras

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Contando hacia atrás de 2 en 2 desde {inicio}, ¿qué número decís después de {pasos_atras} pasos?"

pasos:
  - "{inicio} - 2 × {pasos_atras} = {resultado}"

explicacion: |
  Igual que la cuenta regresiva de a 1, pero restando 2 en cada paso.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

variables:
  inicio: random(20, 100) * 10
  pasos_atras: random(2, 6)
  resultado: inicio - 10 * pasos_atras

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Contando hacia atrás de 10 en 10 desde {inicio}, ¿qué número decís después de {pasos_atras} pasos?"

pasos:
  - "{inicio} - 10 × {pasos_atras} = {resultado}"

explicacion: |
  La cuenta regresiva de 10 en 10 sólo mueve la cifra de las decenas (o
  superior).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cuenta_regresiva"]

respuesta: verdadero
tipo: vf

enunciado: "Al contar hacia atrás (cuenta regresiva), cada número que se dice es menor que el anterior."

explicacion: |
  Contar hacia atrás es restar en cada paso: por eso la secuencia siempre
  desciende, nunca sube ni se repite.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)

respuesta: (a > b)
tipo: vf

enunciado: "¿Es {a} mayor que {b}?"

explicacion: |
  Un número es mayor que otro si aparece más adelante en la secuencia de
  conteo (más lejos del cero).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)

respuesta: (a < b)
tipo: vf

enunciado: "¿Es {a} menor que {b}?"

explicacion: |
  Un número es menor que otro si aparece antes en la secuencia de conteo
  (más cerca del cero).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 200)
  b: uno_de([a, a, random(1, 200)])

respuesta: (a == b)
tipo: vf

enunciado: "¿{a} es igual a {b}?"

explicacion: |
  Dos cantidades son iguales sólo si representan exactamente el mismo
  número, no alcanza con estar cerca.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)

restricciones:
  - a != b

respuesta: max(a, b)
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "¿Cuál de estos dos números es mayor: {a} o {b}?"

explicacion: |
  Para comparar dos números se los ubica mentalmente en la secuencia de
  conteo: el que se dice más tarde es el mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)
  c: random(1, 999)

respuesta: max(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el mayor entre {a}, {b} y {c}?"

explicacion: |
  Se comparan de a pares hasta quedarse con el más grande de los tres.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "comparacion"]

variables:
  a: random(1, 999)
  b: random(1, 999)
  c: random(1, 999)

respuesta: min(a, b, c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el menor entre {a}, {b} y {c}?"

explicacion: |
  Se comparan de a pares hasta quedarse con el más chico de los tres.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "23"
  - "7"
  - "41"
  - "16"
respuesta_orden: ["7", "16", "23", "41"]

explicacion: |
  Ordenar de menor a mayor es ubicar los números según su lugar en la
  secuencia de conteo, del más cercano al cero al más lejano.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de mayor a menor."
opciones_explicitas:
  - "8"
  - "34"
  - "12"
  - "50"
respuesta_orden: ["50", "34", "12", "8"]

explicacion: |
  Ordenar de mayor a menor es el mismo criterio que de menor a mayor, pero
  arrancando por el que está más lejos del cero.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "67"
  - "19"
  - "88"
  - "45"
  - "31"
respuesta_orden: ["19", "31", "45", "67", "88"]

explicacion: |
  Con más números conviene ir descartando de a uno el menor (o el mayor)
  restante, en vez de compararlos todos de una sola vez.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de mayor a menor."
opciones_explicitas:
  - "402"
  - "218"
  - "990"
  - "125"
respuesta_orden: ["990", "402", "218", "125"]

explicacion: |
  Con números de más cifras, primero se compara la cantidad de cifras (más
  cifras es siempre mayor) y recién después, si empatan, cifra por cifra de
  izquierda a derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(1, 96)

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+1}, ___, {a+3}."
respuestas_validas:
  - a + 2

explicacion: |
  La secuencia avanza de 1 en 1: el número que falta es el anterior más 1.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(0, 90) * 2

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+2}, ___, {a+6}."
respuestas_validas:
  - a + 4

explicacion: |
  La secuencia avanza de 2 en 2: cada término es el anterior más 2.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(0, 180) * 5

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+5}, ___, {a+15}."
respuestas_validas:
  - a + 10

explicacion: |
  La secuencia avanza de 5 en 5: cada término es el anterior más 5.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "secuencia"]

variables:
  a: random(0, 90) * 10

tipo: completar
enunciado: "Completá el número que falta: {a}, {a+10}, ___, {a+30}."
respuestas_validas:
  - a + 20

explicacion: |
  La secuencia avanza de 10 en 10: cada término es el anterior más 10.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "secuencia", "cuenta_regresiva"]

variables:
  a: random(20, 999)

tipo: completar
enunciado: "Completá el número que falta: {a}, {a-1}, ___, {a-3}."
respuestas_validas:
  - a - 2

explicacion: |
  En una secuencia descendente cada término es el anterior menos el salto
  (acá, menos 1).
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "cardinalidad"]

variables:
  a: random(1, 100)
  b: a + random(5, 40)

respuesta: b - a + 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números hay entre {a} y {b}, contando a los dos extremos?"

pasos:
  - "Cantidad = {b} - {a} + 1 = {b - a + 1} (se suma 1 porque {a} también se cuenta)"

explicacion: |
  Si se cuentan los dos extremos, la cantidad de números entre A y B es
  B − A + 1, no B − A: hay que sumar 1 porque el propio A ya es el primero
  que se cuenta.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "avanzado"
  tags: ["conteo", "cardinalidad", "pares"]

variables:
  a: random(1, 100)
  b: a + random(10, 50)
  pares: floor(b / 2) - floor((a - 1) / 2)

respuesta: pares
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números pares hay entre {a} y {b}, contando a los dos extremos si son pares?"

pasos:
  - "Se cuentan los múltiplos de 2 hasta {b} y se descartan los que ya pasaron antes de {a}: {pares} números pares"

explicacion: |
  Contar los pares en un rango es contar los múltiplos de 2 salteados, igual
  que en el conteo salteado de 2 en 2, pero acotado entre dos extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "avanzado"
  tags: ["conteo", "cardinalidad", "impares"]

variables:
  a: random(1, 100)
  b: a + random(10, 50)
  total: b - a + 1
  pares: floor(b / 2) - floor((a - 1) / 2)
  impares: total - pares

respuesta: impares
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos números impares hay entre {a} y {b}, contando a los dos extremos si son impares?"

pasos:
  - "Total de números en el rango: {total}. De esos, {pares} son pares, así que {impares} son impares."

explicacion: |
  Los impares de un rango son los que no son pares: alcanza con contar el
  total de números del rango y restarle la cantidad de pares.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "basico"
  tags: ["conteo", "cardinalidad"]

variables:
  lista: mezclar([3, 7, 12, 5, 9, 18, 2, 14, 6, 11])
  cantidad_mostrada: random(4, 9)
  elegidos: n_de(lista, cantidad_mostrada)

respuesta: largo(elegidos)
tipo: input
tolerancia_abs: 0

enunciado: "Contá cuántos números hay en esta lista: {elegidos}."

pasos:
  - "Se cuenta un elemento por vez, sin saltear ni repetir: en total son {largo(elegidos)}"

explicacion: |
  Contar los elementos de una lista es aplicar directamente la
  correspondencia uno a uno: un número de la secuencia de conteo por cada
  elemento de la lista.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "conteo_salteado", "problema"]

variables:
  inicial: random(0, 20)
  paso: uno_de([2, 3, 5, 10])
  veces: random(2, 6)
  total: inicial + paso * veces

respuesta: veces
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {inicial} figuritas y le vas agregando de a {paso} por vez. ¿Cuántas veces tenés que agregar {paso} figuritas para llegar a {total}?"

pasos:
  - "Hay que juntar {total} - {inicial} = {total - inicial} figuritas más, de a {paso}: ({total} - {inicial}) / {paso} = {veces} veces"

explicacion: |
  Agregar siempre la misma cantidad es contar salteado: la cantidad de
  veces que hay que agregar es la diferencia total dividida por el salto.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "conteo_salteado", "problema"]

variables:
  paso: uno_de([2, 3, 5, 10])
  cantidad_saltos: random(3, 8)
  llegada: paso * cantidad_saltos

respuesta: cantidad_saltos + 1
tipo: input
tolerancia_abs: 0

enunciado: "Contando de {paso} en {paso} empezando en 0 (0, {paso}, {paso*2}, ...) hasta llegar a {llegada}, ¿cuántos números dijiste en total, contando el 0?"

pasos:
  - "Del 0 a {llegada} hay {cantidad_saltos} saltos de {paso}; como el 0 también se cuenta, en total son {cantidad_saltos} + 1 = {cantidad_saltos + 1} números"

explicacion: |
  Igual que contar los elementos de un rango: hay que sumar 1 porque el
  primer número dicho (el 0) también cuenta como uno de los números.
```

```
metadata:
  materia: "matematicas"
  tema: "conteo"
  nivel: "intermedio"
  tags: ["conteo", "cardinalidad", "ordinalidad"]

variables:
  inicio: random(1, 10)
  posicion: random(2, 8)
  resultado: inicio + posicion - 1

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Si contás de uno en uno empezando en {inicio} (o sea, {inicio} es el 1°), ¿qué número decís en el lugar {posicion}°?"

pasos:
  - "El lugar {posicion}° está {posicion} - 1 pasos después del inicio: {inicio} + ({posicion} - 1) = {resultado}"

explicacion: |
  Distingue la cardinalidad (cuántos hay) de la ordinalidad (qué lugar
  ocupa): el número en el lugar k, empezando a contar desde "inicio", es
  inicio + (k − 1).
```

## Sección: valor-posicional (40 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: u
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las unidades?"

pasos:
  - "Las unidades son la cifra más a la derecha de {numero}: {u}"

explicacion: |
  La cifra de las unidades es siempre la última, la que está más a la
  derecha del número.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las decenas?"

pasos:
  - "Las decenas son la segunda cifra desde la derecha de {numero}: {d}"

explicacion: |
  La cifra de las decenas es la que está un lugar a la izquierda de las
  unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las centenas?"

pasos:
  - "Las centenas son la tercera cifra desde la derecha de {numero}: {c}"

explicacion: |
  La cifra de las centenas es la que está dos lugares a la izquierda de las
  unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las unidades de mil?"

pasos:
  - "Las unidades de mil son la cuarta cifra desde la derecha de {numero}: {m}"

explicacion: |
  Cada vez que se agrega un lugar más a la izquierda, el valor de la
  posición se multiplica por 10: unidades → decenas → centenas →
  unidades de mil.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  dm: random(1, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: dm
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las decenas de mil?"

pasos:
  - "Las decenas de mil son la quinta cifra desde la derecha de {numero}: {dm}"

explicacion: |
  Con 5 cifras, la primera de la izquierda es la de las decenas de mil.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  cm: random(1, 9)
  dm: random(0, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: cm * 100000 + dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: cm
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de las centenas de mil?"

pasos:
  - "Las centenas de mil son la sexta cifra desde la derecha de {numero}: {cm}"

explicacion: |
  Con 6 cifras, la primera de la izquierda es la de las centenas de mil.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  c: random(1, 9)
  d: random(1, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: d * 10
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto VALE la cifra de las decenas (no cuál es, sino cuánto vale)?"

pasos:
  - "La cifra de las decenas es {d}, y en ese lugar vale {d} × 10 = {d * 10}"

explicacion: |
  No es lo mismo la cifra que su valor: la cifra es sólo el dígito (0-9); el
  valor es ese dígito multiplicado por lo que vale su posición.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  m: random(1, 9)
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: c * 100
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto vale la cifra de las centenas?"

pasos:
  - "La cifra de las centenas es {c}, y en ese lugar vale {c} × 100 = {c * 100}"

explicacion: |
  El valor de una cifra es siempre el dígito multiplicado por la potencia de
  10 que le corresponde a su lugar.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "valor_de_cifra"]

variables:
  dm: random(1, 9)
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: m * 1000
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuánto vale la cifra de las unidades de mil?"

pasos:
  - "La cifra de las unidades de mil es {m}, y en ese lugar vale {m} × 1.000 = {m * 1000}"

explicacion: |
  A partir de las unidades de mil, cada lugar vale 1.000 veces más que el
  dígito solo, antes de seguir multiplicando por 10 hacia la izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "descomposicion"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Componer un número es la operación inversa a descomponerlo: se suman los
  valores de cada cifra en su lugar.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {m} unidades de mil + {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{m} × 1.000 + {c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Cada término de la descomposición aporta el valor de su cifra en su
  lugar; sumados dan el número completo.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  dm: random(1, 9)
  m: random(0, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: dm * 10000 + m * 1000 + c * 100 + d * 10 + u

respuesta: numero
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número resulta de {dm} decenas de mil + {m} unidades de mil + {c} centenas + {d} decenas + {u} unidades?"

pasos:
  - "{dm} × 10.000 + {m} × 1.000 + {c} × 100 + {d} × 10 + {u} = {numero}"

explicacion: |
  Con más cifras el procedimiento es el mismo: sumar el valor posicional de
  cada una.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "comparacion"]

variables:
  a: random(10, 999)
  b: random(10, 999)

respuesta: (longitud(concatenar(a)) > longitud(concatenar(b)))
tipo: vf

enunciado: "¿Tiene {a} más cifras que {b}?"

explicacion: |
  Antes de mirar cifra por cifra, conviene contar cuántas cifras tiene cada
  número: el que tiene más cifras es siempre el mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "comparacion"]

variables:
  a: random(1, 9999)
  b: random(1, 9999)

restricciones:
  - longitud(concatenar(a)) != longitud(concatenar(b))

respuesta: max(a, b)
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "¿Cuál de estos dos números tiene más cifras: {a} o {b}?"

explicacion: |
  La cantidad de cifras decide directamente cuál número es mayor, sin
  necesidad de comparar cifra por cifra.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  c: random(1, 9)
  d1: random(0, 9)
  d2: random(0, 9)
  u1: random(0, 9)
  u2: random(0, 9)
  a: c * 100 + d1 * 10 + u1
  b: c * 100 + d2 * 10 + u2

restricciones:
  - d1 != d2

respuesta: (a > b)
tipo: vf

enunciado: "{a} y {b} tienen la misma cifra de centenas. ¿Es {a} mayor que {b}?"

explicacion: |
  Cuando dos números tienen la misma cantidad de cifras y coinciden en la
  primera, hay que seguir comparando la próxima cifra hacia la derecha
  hasta encontrar una diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  m: random(1, 9)
  resto1: random(0, 999)
  resto2: random(0, 999)
  a: m * 1000 + resto1
  b: m * 1000 + resto2

restricciones:
  - resto1 != resto2

respuesta: max(a, b)
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "{a} y {b} tienen la misma cifra de unidades de mil. ¿Cuál de los dos es mayor?"

explicacion: |
  Si la primera cifra empata, la decisión queda en manos de las cifras
  siguientes, comparadas en el mismo orden (de izquierda a derecha).
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "comparacion"]

variables:
  c: random(1, 9)
  d1: random(0, 8)
  d2: random(0, 8)
  u: random(0, 9)
  a: c * 100 + d1 * 10 + u
  b: c * 100 + d2 * 10 + u

restricciones:
  - d1 != d2

respuesta: (a < b)
tipo: vf

enunciado: "{a} y {b} tienen la misma cifra de centenas y de unidades, sólo cambia la de decenas ({d1} contra {d2}). ¿Es {a} menor que {b}?"

explicacion: |
  Cuando todas las demás cifras coinciden, el número menor es el que tiene
  la cifra más chica en la primera posición donde difieren.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(11, 988)
  resultado: redondear(numero / 10, 0) * 10

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la decena más cercana."

pasos:
  - "Se mira la cifra de las unidades de {numero} para decidir si la decena sube o queda igual: resultado {resultado}"

explicacion: |
  Se mira la cifra que está un lugar a la derecha de la posición a
  redondear (acá, las unidades): 5 o más, la decena sube; menos de 5, queda
  igual.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  base: random(1, 98)
  numero: base * 10 + 5
  resultado: redondear(numero / 10, 0) * 10

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la decena más cercana."

pasos:
  - "La cifra de las unidades es 5: por convención, la decena sube. {numero} → {resultado}"

explicacion: |
  Cuando la cifra que decide el redondeo es exactamente 5, la regla es que
  la posición anterior sube (no se deja igual).
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(101, 9888)
  resultado: redondear(numero / 100, 0) * 100

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la centena más cercana."

pasos:
  - "Se mira la cifra de las decenas de {numero} para decidir: resultado {resultado}"

explicacion: |
  Igual que redondear a la decena, pero mirando la cifra de las decenas
  (un lugar a la derecha de las centenas).
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  base: random(1, 98)
  numero: base * 100 + 50
  resultado: redondear(numero / 100, 0) * 100

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} a la centena más cercana."

pasos:
  - "La cifra de las decenas es 5: la centena sube. {numero} → {resultado}"

explicacion: |
  Mismo criterio que con las decenas: en el caso frontera (cifra 5), la
  posición objetivo sube.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "redondeo"]

variables:
  numero: random(1001, 98888)
  resultado: redondear(numero / 1000, 0) * 1000

respuesta: resultado
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {numero} al millar (unidad de mil) más cercano."

pasos:
  - "Se mira la cifra de las centenas de {numero} para decidir: resultado {resultado}"

explicacion: |
  El mismo criterio de siempre, ahora mirando la cifra de las centenas para
  decidir si la unidad de mil sube o queda igual.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "decimales"]

variables:
  entero: random(1, 99)
  t: random(1, 9)
  h: random(0, 9)
  numero: entero + t / 10 + h / 100

respuesta: t
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de los décimos?"

pasos:
  - "Los décimos son la primera cifra después de la coma: {t}"

explicacion: |
  Del otro lado de la coma la lógica se invierte: la primera posición
  (décimos) vale ÷10, no ×10.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "decimales"]

variables:
  entero: random(1, 99)
  t: random(0, 9)
  h: random(1, 9)
  numero: entero + t / 10 + h / 100

respuesta: h
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿qué cifra ocupa el lugar de los centésimos?"

pasos:
  - "Los centésimos son la segunda cifra después de la coma: {h}"

explicacion: |
  Los centésimos valen ÷100: cada lugar después de la coma sigue dividiendo
  por 10 respecto al anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "avanzado"
  tags: ["valor_posicional", "decimales", "valor_de_cifra"]

variables:
  entero: random(1, 99)
  t: random(1, 9)
  h: random(0, 9)
  numero: entero + t / 10 + h / 100

respuesta: t / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "En el número {numero}, ¿cuánto vale la cifra de los décimos?"

pasos:
  - "La cifra de los décimos es {t}, y en ese lugar vale {t} ÷ 10 = {t / 10}"

explicacion: |
  Igual que del lado entero: el valor es la cifra multiplicada (acá,
  dividida) por lo que vale su posición.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "cantidad_de_cifras"]

variables:
  numero: random(100, 98765)

respuesta: longitud(concatenar(numero))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras tiene el número {numero}?"

explicacion: |
  Se cuentan todos los dígitos del número, de izquierda a derecha, sin
  saltear ninguno.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "cantidad_de_cifras"]

variables:
  numero: random(1000000, 987654321)

respuesta: longitud(concatenar(numero))
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras tiene el número {numero}?"

explicacion: |
  El procedimiento es el mismo con números grandes: contar los dígitos, uno
  por uno.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "identificar_cifra"]

variables:
  m: random(1, 9)
  c: random(0, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "En el número {numero}, ¿cuál es la cifra que ocupa el lugar de mayor valor (la que más vale)?"

pasos:
  - "La cifra de mayor valor es siempre la primera de la izquierda: {m}"

explicacion: |
  La cifra de mayor valor posicional es la más a la izquierda: es la que
  está multiplicada por la potencia de 10 más grande.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

enunciado: "¿Cómo se llama el lugar de la 3ª cifra contando desde la derecha de un número?"
tipo: mc
opciones_explicitas:
  - "Unidades"
  - "Decenas"
  - "Centenas"
respuesta: "Centenas"

explicacion: |
  Contando desde la derecha: 1ª unidades, 2ª decenas, 3ª centenas.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

enunciado: "¿Cómo se llama el lugar de la cifra que está más a la derecha en cualquier número entero?"
tipo: mc
opciones_explicitas:
  - "Unidades"
  - "Decenas"
  - "Centenas"
respuesta: "Unidades"

explicacion: |
  La cifra más a la derecha de un número entero siempre ocupa el lugar de
  las unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el número 4.257, la cifra 2 vale 200."

explicacion: |
  El 2 de 4.257 está en el lugar de las centenas: 2 × 100 = 200.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En el número 4.257, la cifra 5 vale 5."

explicacion: |
  El 5 de 4.257 está en el lugar de las decenas, no de las unidades: vale
  5 × 10 = 50, no 5.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  c: random(1, 9)
  d: random(1, 9)
  u: random(0, 9)
  numero: c * 100 + d * 10 + u

tipo: completar
enunciado: "Completá: {c} × 100 + ___ × 10 + {u} = {numero}."
respuestas_validas:
  - d

explicacion: |
  El hueco es la cifra de las decenas: la única que hace que la suma dé
  exactamente el número de la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  m: random(1, 9)
  c: random(1, 9)
  d: random(0, 9)
  u: random(0, 9)
  numero: m * 1000 + c * 100 + d * 10 + u

tipo: completar
enunciado: "Completá: {m} × 1.000 + ___ × 100 + {d} × 10 + {u} = {numero}."
respuestas_validas:
  - c

explicacion: |
  Se despeja la cifra que falta viendo cuál hace que la suma total coincida
  con el número dado.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "orden"]

tipo: ordenar
enunciado: "Ordená estas cifras de menor a mayor."
opciones_explicitas:
  - "7"
  - "2"
  - "9"
  - "4"
respuesta_orden: ["2", "4", "7", "9"]

explicacion: |
  Ordenar cifras sueltas es comparar dígitos, sin que ningún lugar
  posicional entre en juego todavía.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "composicion"]

variables:
  par: n_de([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
  d1: primero(par)
  d2: ultimo(par)
  menor_digito: primero(ordenar(par))
  mayor_digito: ultimo(ordenar(par))

restricciones:
  - d1 != d2

respuesta: mayor_digito * 10 + menor_digito
tipo: input
tolerancia_abs: 0

enunciado: "Con las cifras {d1} y {d2}, ¿cuál es el mayor número de 2 cifras que se puede formar (usando cada cifra una sola vez)?"

pasos:
  - "Para que sea el mayor posible, la cifra más grande va en las decenas: {mayor_digito} decenas + {menor_digito} unidades = {mayor_digito * 10 + menor_digito}"

explicacion: |
  Para armar el número más grande posible con cifras dadas, la cifra más
  grande siempre va en el lugar de mayor valor.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "composicion"]

variables:
  par: n_de([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
  d1: primero(par)
  d2: ultimo(par)
  menor_digito: primero(ordenar(par))
  mayor_digito: ultimo(ordenar(par))

restricciones:
  - d1 != d2

respuesta: menor_digito * 10 + mayor_digito
tipo: input
tolerancia_abs: 0

enunciado: "Con las cifras {d1} y {d2}, ¿cuál es el menor número de 2 cifras que se puede formar (usando cada cifra una sola vez)?"

pasos:
  - "Para que sea el menor posible, la cifra más chica va en las decenas: {menor_digito} decenas + {mayor_digito} unidades = {menor_digito * 10 + mayor_digito}"

explicacion: |
  Al revés que para el mayor número: la cifra más chica va en el lugar de
  mayor valor, para que pese lo menos posible.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  numero: random(1001, 98765)

respuesta: floor(numero / 1000)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas unidades de mil completas tiene el número {numero}?"

pasos:
  - "{numero} ÷ 1.000, tomando sólo la parte entera: {floor(numero / 1000)}"

explicacion: |
  Es lo mismo que preguntar por las cifras que quedan a la izquierda del
  lugar de las centenas, leídas como un solo número.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "intermedio"
  tags: ["valor_posicional", "descomposicion"]

variables:
  numero: random(101, 9876)

respuesta: floor(numero / 100)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas centenas completas tiene el número {numero}?"

pasos:
  - "{numero} ÷ 100, tomando sólo la parte entera: {floor(numero / 100)}"

explicacion: |
  Son las cifras que quedan a la izquierda del lugar de las decenas, leídas
  como un solo número.
```

```
metadata:
  materia: "matematicas"
  tema: "valor_posicional"
  nivel: "basico"
  tags: ["valor_posicional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor de una cifra depende del lugar que ocupa dentro del número, no sólo de qué dígito es."

explicacion: |
  Es la idea central de todo el tema: el mismo dígito vale distinto según
  esté en el lugar de las unidades, las decenas, las centenas, etc.
```

