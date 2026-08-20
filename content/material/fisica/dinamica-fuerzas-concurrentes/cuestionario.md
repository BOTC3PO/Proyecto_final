# Física — Dinámica: fuerzas concurrentes (cuestionario, 27 preguntas VBLang)

> Tema: `F5`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué son las fuerzas concurrentes

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "basico"
  tags: ["fuerzas_concurrentes", "vocabulario"]

enunciado: "¿Qué son las fuerzas concurrentes?"
tipo: mc
opciones_explicitas:
  - "Dos o más fuerzas cuyas líneas de acción se cruzan en un mismo punto, actuando sobre un mismo objeto"
  - "Fuerzas que actúan siempre en la misma dirección"
  - "Fuerzas que sólo existen en objetos en movimiento"
respuesta: "Dos o más fuerzas cuyas líneas de acción se cruzan en un mismo punto, actuando sobre un mismo objeto"

explicacion: |
  Es el caso más común: rara vez actúa una sola fuerza sobre algo.
```

### 2 — Qué es un diagrama de cuerpo libre

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["diagrama_cuerpo_libre", "vocabulario"]

enunciado: "¿Qué es un diagrama de cuerpo libre?"
tipo: mc
opciones_explicitas:
  - "Un dibujo del objeto reducido a un punto, con todas las fuerzas que actúan sobre él como vectores"
  - "Un dibujo técnico a escala del objeto completo"
  - "Una tabla con los valores numéricos de las fuerzas, sin dibujo"
respuesta: "Un dibujo del objeto reducido a un punto, con todas las fuerzas que actúan sobre él como vectores"

explicacion: |
  Es la herramienta central para resolver cualquier problema de
  dinámica.
```

### 3 — Si falta una fuerza en el diagrama, el resultado está mal

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["diagrama_cuerpo_libre"]

respuesta: verdadero
tipo: vf

enunciado: "Si en un diagrama de cuerpo libre falta dibujar alguna fuerza real, el resultado del cálculo va a estar mal."

explicacion: |
  La fuerza neta depende de TODAS las fuerzas presentes, no de las que
  se recuerden dibujar.
```

### 4 — Ordenar: pasos para resolver fuerzas concurrentes

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes", "ordenar"]

enunciado: "Ordená los pasos para resolver un sistema de fuerzas concurrentes."
tipo: ordenar
opciones_explicitas:
  - "Sumar todas las componentes x y todas las componentes y por separado, para obtener la fuerza neta"
  - "Dibujar el diagrama de cuerpo libre con todas las fuerzas"
  - "Descomponer cada fuerza en sus componentes x e y"
respuesta_orden: ["Dibujar el diagrama de cuerpo libre con todas las fuerzas", "Descomponer cada fuerza en sus componentes x e y", "Sumar todas las componentes x y todas las componentes y por separado, para obtener la fuerza neta"]
explicacion: |
  Es la misma secuencia de
  `../../matematica/suma-de-vectores-y-descomposicion/`, aplicada a
  fuerzas.
```

### 5 — Problema: suma de componentes x de dos fuerzas

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  fx1: random(5, 20)
  fx2: random(5, 20)

respuesta: fx1 + fx2
tipo: input
tolerancia_abs: 0

enunciado: "Dos fuerzas actúan sobre un objeto. La primera tiene componente horizontal {fx1} N, y la segunda {fx2} N (ambas hacia la derecha). ¿Cuál es la componente horizontal de la fuerza neta?"

pasos:
  - "{fx1} + {fx2} = {fx1 + fx2} N"

explicacion: |
  Se suman las componentes horizontales de todas las fuerzas.
```

### 6 — Problema: suma de componentes y de dos fuerzas

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  fy1: random(10, 30)
  fy2: random(5, 15)

respuesta: fy1 - fy2
tipo: input
tolerancia_abs: 0

enunciado: "Dos fuerzas actúan sobre un objeto. La primera tiene componente vertical {fy1} N hacia arriba, y la segunda {fy2} N hacia abajo. ¿Cuál es la componente vertical de la fuerza neta (positiva hacia arriba)?"

pasos:
  - "{fy1} − {fy2} = {fy1 - fy2} N"

explicacion: |
  Se restan porque apuntan en sentidos opuestos sobre el mismo eje.
```

### 7 — Problema: módulo de la fuerza neta

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  k: random(1, 6)
  fx: 3 * k
  fy: 4 * k

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "La fuerza neta sobre un objeto tiene componentes ({fx} N, {fy} N). ¿Cuál es su módulo?"

pasos:
  - "√({fx}² + {fy}²) = {5 * k} N"

explicacion: |
  Es el teorema de Pitágoras aplicado a las componentes de la fuerza
  neta.
```

### 8 — Fuerza neta cero significa equilibrio

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes"]

respuesta: verdadero
tipo: vf

enunciado: "Si la fuerza neta sobre un objeto es cero, el objeto está en equilibrio."

explicacion: |
  Es la primera ley de Newton aplicada al resultado de sumar todas las
  fuerzas.
```

### 9 — Fuerza neta distinta de cero significa aceleración

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes"]

respuesta: verdadero
tipo: vf

enunciado: "Si la fuerza neta sobre un objeto no es cero, el objeto acelera en la dirección de esa fuerza neta."

explicacion: |
  Es la segunda ley de Newton aplicada al resultado de sumar todas las
  fuerzas.
```

### 10 — Problema: aceleración dada la fuerza neta

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  k: random(1, 5)
  fx: 3 * k
  fy: 4 * k
  masa: uno_de([1, 5])

respuesta: redondear((5 * k) / masa, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "La fuerza neta sobre un objeto de {masa} kg tiene componentes ({fx} N, {fy} N). ¿Cuál es la magnitud de su aceleración?"

pasos:
  - "Módulo de la fuerza neta: √({fx}² + {fy}²) = {5 * k} N"
  - "{5 * k} ÷ {masa} = {redondear((5 * k) / masa, 2)} m/s²"

explicacion: |
  Primero se halla el módulo de la fuerza neta, y recién después se
  aplica F=ma para obtener la aceleración.
```

### 11 — Qué es la tensión

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "basico"
  tags: ["tension", "vocabulario"]

enunciado: "¿Qué es la tensión de una cuerda?"
tipo: mc
opciones_explicitas:
  - "La fuerza que ejerce una cuerda, cable o cadena tirando de un objeto"
  - "El peso de la propia cuerda"
  - "La resistencia de la cuerda a romperse"
respuesta: "La fuerza que ejerce una cuerda, cable o cadena tirando de un objeto"

explicacion: |
  Aparece en casi todos los problemas clásicos de fuerzas concurrentes.
```

### 12 — En qué dirección actúa la tensión

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["tension", "vocabulario"]

enunciado: "¿En qué dirección actúa la tensión de una cuerda sobre el objeto del que tira?"
tipo: mc
opciones_explicitas:
  - "A lo largo de la propia cuerda"
  - "Siempre en dirección vertical, sin importar cómo esté la cuerda"
  - "Siempre perpendicular a la cuerda"
respuesta: "A lo largo de la propia cuerda"

explicacion: |
  Si la cuerda está inclinada, la tensión también está inclinada.
```

### 13 — El ejemplo clásico de la lámpara

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes", "vocabulario"]

enunciado: "En el problema clásico de una lámpara colgada de dos cables, ¿qué fuerzas actúan sobre la lámpara?"
tipo: mc
opciones_explicitas:
  - "Su peso hacia abajo, y la tensión de cada uno de los dos cables"
  - "Sólo su peso"
  - "Sólo la tensión de los cables, sin peso"
respuesta: "Su peso hacia abajo, y la tensión de cada uno de los dos cables"

explicacion: |
  Son tres fuerzas concurrentes en total.
```

### 14 — Problema: dos cables verticales simétricos

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["tension", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])

respuesta: peso / 2
tipo: input
tolerancia_abs: 0

enunciado: "Una lámpara de {peso} N cuelga en equilibrio de dos cables verticales idénticos, cada uno soportando la misma tensión. ¿Cuánto vale la tensión de cada cable?"

pasos:
  - "{peso} ÷ 2 = {peso / 2} N"

explicacion: |
  En este caso simétrico, cada cable soporta exactamente la mitad del
  peso total.
```

### 15 — En el caso simétrico, cada cable soporta la mitad del peso

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["tension"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una lámpara cuelga en equilibrio de dos cables verticales idénticos, cada cable soporta exactamente la mitad del peso total."

explicacion: |
  Por simetría, ambas tensiones son iguales, y juntas deben igualar al
  peso total.
```

### 16 — Problema: tercera fuerza para el equilibrio

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  f1: random(10, 30)
  f2: random(10, 30)

respuesta: f1 + f2
tipo: input
tolerancia_abs: 0

enunciado: "Sobre un objeto actúan dos fuerzas horizontales de {f1} N y {f2} N, ambas hacia la izquierda. ¿Qué fuerza hacia la derecha hace falta agregar para que el objeto quede en equilibrio horizontal?"

pasos:
  - "{f1} + {f2} = {f1 + f2} N hacia la derecha"

explicacion: |
  La tercera fuerza tiene que cancelar exactamente la suma de las otras
  dos.
```

### 17 — La suma horizontal debe dar cero para equilibrio horizontal

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes"]

respuesta: verdadero
tipo: vf

enunciado: "Para que un objeto esté en equilibrio horizontal, la suma de las componentes horizontales de todas las fuerzas tiene que dar cero."

explicacion: |
  Es la condición de equilibrio aplicada sólo al eje horizontal.
```

### 18 — Qué pasa si la suma vertical no iguala al peso

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "vocabulario"]

enunciado: "Si la suma de las tensiones verticales que sostienen un objeto NO iguala exactamente a su peso, ¿qué pasa?"
tipo: mc
opciones_explicitas:
  - "El objeto acelera verticalmente (sube o baja), según la segunda ley"
  - "No pasa nada, el objeto queda igual en reposo"
  - "El peso del objeto cambia automáticamente para compensar"
respuesta: "El objeto acelera verticalmente (sube o baja), según la segunda ley"

explicacion: |
  Sin fuerza neta cero, no hay equilibrio: el objeto se mueve según
  F=ma.
```

### 19 — Problema: dos fuerzas perpendiculares concurrentes

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  k: random(1, 6)
  f1: 5 * k
  f2: 12 * k

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Dos fuerzas perpendiculares entre sí, de {f1} N y {f2} N, actúan sobre un mismo punto. ¿Cuál es el módulo de la fuerza neta?"

pasos:
  - "√({f1}² + {f2}²) = {13 * k} N"

explicacion: |
  Al ser perpendiculares, cada una es directamente una componente de la
  fuerza neta: se aplica Pitágoras sin necesitar descomponer más.
```

### 20 — Por qué se descompone antes de sumar

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes", "vocabulario"]

enunciado: "¿Por qué hace falta descomponer las fuerzas en componentes antes de sumarlas, cuando no están todas alineadas con los mismos ejes?"
tipo: mc
opciones_explicitas:
  - "Porque no se pueden sumar directamente magnitudes de fuerzas que apuntan en direcciones distintas"
  - "No hace falta descomponer nunca, siempre alcanza con sumar los módulos"
  - "Porque las fuerzas concurrentes no se pueden sumar de ninguna forma"
respuesta: "Porque no se pueden sumar directamente magnitudes de fuerzas que apuntan en direcciones distintas"

explicacion: |
  Es la misma razón por la que se descomponen vectores en general.
```

### 21 — Problema: tensión de un cable vertical único

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "basico"
  tags: ["tension", "problema"]

variables:
  masa: uno_de([2, 5, 8, 10])

respuesta: masa * 10
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto de {masa} kg cuelga en equilibrio de un único cable vertical. ¿Cuál es la tensión del cable? (usá g = 10 m/s²)"

pasos:
  - "En equilibrio, la tensión iguala al peso: {masa} × 10 = {masa * 10} N"

explicacion: |
  Con un solo cable vertical, toda la tensión tiene que igualar al peso
  completo.
```

### 22 — Un objeto puede tener 3 o más fuerzas concurrentes

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "basico"
  tags: ["fuerzas_concurrentes"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto puede tener tres, cuatro o más fuerzas concurrentes actuando sobre él al mismo tiempo, no sólo dos."

explicacion: |
  El procedimiento (descomponer y sumar) funciona igual sin importar
  cuántas fuerzas haya.
```

### 23 — Problema combinado: descomposición y segunda ley

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "avanzado"
  tags: ["fuerzas_concurrentes", "problema"]

variables:
  fx1: uno_de([10, 20])
  fx2: uno_de([30, 40])
  masa: uno_de([2, 5])

respuesta: redondear((fx1 + fx2) / masa, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Sobre un objeto de {masa} kg actúan dos fuerzas horizontales en la misma dirección: {fx1} N y {fx2} N. ¿Cuál es su aceleración?"

pasos:
  - "Fuerza neta: {fx1} + {fx2} = {fx1 + fx2} N"
  - "{fx1 + fx2} ÷ {masa} = {redondear((fx1 + fx2) / masa, 2)} m/s²"

explicacion: |
  Primero se suman las fuerzas (al estar alineadas, no hace falta
  descomponer), y después se aplica F=ma.
```

### 24 — Aplicación real: una grúa

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Para qué sirve el análisis de fuerzas concurrentes al diseñar una grúa o una estructura con cables?"
tipo: mc
opciones_explicitas:
  - "Para calcular la tensión que va a soportar cada cable, y verificar que la estructura aguante el peso sin romperse"
  - "Sólo sirve para calcular el color de la pintura de la grúa"
  - "No tiene ninguna aplicación en ingeniería real"
respuesta: "Para calcular la tensión que va a soportar cada cable, y verificar que la estructura aguante el peso sin romperse"

explicacion: |
  Es exactamente el mismo análisis que el ejemplo de la lámpara, a
  escala más grande.
```

### 25 — El diagrama de cuerpo libre no dibuja los objetos que ejercen las fuerzas

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["diagrama_cuerpo_libre"]

respuesta: verdadero
tipo: vf

enunciado: "Un diagrama de cuerpo libre dibuja únicamente las fuerzas (como vectores), no los objetos que las ejercen (la cuerda, el piso, el aire)."

explicacion: |
  Es lo que lo hace "libre": se aísla el objeto de estudio de todo lo
  demás, dejando sólo las fuerzas que actúan sobre él.
```

### 26 — Fuerzas concurrentes reusa la descomposición de vectores

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "intermedio"
  tags: ["fuerzas_concurrentes"]

respuesta: verdadero
tipo: vf

enunciado: "El procedimiento para resolver fuerzas concurrentes es exactamente el mismo que sumar y descomponer vectores, aplicado a fuerzas en vez de a vectores genéricos."

explicacion: |
  Las fuerzas SON vectores: todo lo aprendido sobre suma y
  descomposición se aplica directo.
```

### 27 — Cierre: para qué sirve el análisis de fuerzas concurrentes

```
metadata:
  materia: "fisica"
  tema: "dinamica_fuerzas_concurrentes"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el análisis de fuerzas concurrentes?"
tipo: mc
opciones_explicitas:
  - "Para calcular el efecto neto de varias fuerzas reales actuando sobre un mismo objeto, y predecir si está en equilibrio o va a acelerar"
  - "Sólo sirve para objetos que ya están en equilibrio"
  - "Sólo aplica cuando hay exactamente dos fuerzas involucradas"
respuesta: "Para calcular el efecto neto de varias fuerzas reales actuando sobre un mismo objeto, y predecir si está en equilibrio o va a acelerar"

explicacion: |
  Es la aplicación práctica de las tres leyes de Newton juntas.
```
