# Química — Cinética de reacción (cuestionario, 26 preguntas VBLang)

> Tema: `QQ`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de cinética química

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "La cinética química estudia qué tan rápido ocurre una reacción, no si esta libera o absorbe energía."

explicacion: |
  La cinética se ocupa de la velocidad y los mecanismos de reacción; la termoquímica estudia los cambios de energía.
```

### 2 — Definición de velocidad de reacción

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["definiciones"]

respuesta: "tiempo"
tipo: completar
respuestas_validas:
  - "tiempo"

enunciado: "La velocidad de reacción se mide como el cambio de concentración dividido el cambio de ___."

explicacion: |
  v = Δ[concentración] / Δt.
```

### 3 — Diferencia entre termoquímica y equilibrio

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "La termoquímica dice hasta dónde llega una reacción y el equilibrio dice qué tan rápido pasa."

explicacion: |
  Incorrecto — es al revés: el equilibrio dice hasta dónde llega, y la cinética (no la termoquímica) dice qué tan rápido.
```

### 4 — Cálculo de velocidad media

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["calculo", "velocidad_media"]

variables:
  datos: [[10, 2], [20, 4], [40, 5]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0] / datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá la velocidad media de una reacción si el cambio de concentración es {datos[idx][0]} unidades y el intervalo de tiempo es {datos[idx][1]} segundos."

pasos:
  - "v = Δ[concentración] / Δt"

explicacion: |
  v = {datos[idx][0]} / {datos[idx][1]}.
```

### 5 — Energía de activación

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["cinetica", "energia_activacion"]

respuesta: "activacion"
tipo: completar
respuestas_validas:
  - "activacion"

enunciado: "La energía mínima que necesitan las partículas para reaccionar al chocar se llama energía de ___."

explicacion: |
  La energía de activación es la barrera que los reactivos deben superar para transformarse en productos.
```

### 6 — Velocidad y energía de activación

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["cinetica", "velocidad_reaccion"]

respuesta: falso
tipo: vf

enunciado: "Una reacción con energía de activación ALTA es más rápida que una con energía de activación baja."

explicacion: |
  Falso. A mayor energía de activación, menos partículas la superan en cada choque: la reacción es más lenta.
```

### 7 — Naturaleza de la reacción y energía de activación

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["termodinamica", "cinetica"]

respuesta: falso
tipo: vf

enunciado: "La energía de activación depende de si la reacción es endotérmica o exotérmica."

explicacion: |
  Falso. Son propiedades independientes: la energía de activación es cinética (velocidad), y endo/exotérmica es termodinámico (ΔH).
```

### 8 — Relación entre exotermia y velocidad

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["cinetica", "exotermica"]

respuesta: verdadero
tipo: vf

enunciado: "Una reacción muy exotérmica puede ser igual de lenta si su energía de activación es alta."

explicacion: |
  Verdadero. Ejemplo: la combustión del papel es muy exotérmica pero necesita una chispa para superar su energía de activación — no arranca sola.
```

### 9 — Por qué acelera cada factor

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["cinetica", "factores_reaccion"]

variables:
  escenario: [["aumentar la temperatura", "mas particulas alcanzan la energia de activacion"], ["aumentar la concentracion", "mas choques por segundo"], ["aumentar la superficie de contacto", "mas particulas expuestas a la vez"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["mas particulas alcanzan la energia de activacion", "mas choques por segundo", "mas particulas expuestas a la vez"]

enunciado: "Si se {escenario[idx][0]}, ¿por qué aumenta la velocidad de la reacción?"

explicacion: |
  {escenario[idx][1]}.
```

### 10 — Superficie de contacto

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["superficie_contacto", "estado_de_agregacion"]

respuesta: verdadero
tipo: vf

enunciado: "Moler un sólido en polvo aumenta la velocidad de reacción respecto al mismo sólido entero, porque aumenta la superficie de contacto."

explicacion: |
  Al pulverizar el sólido, hay más partículas expuestas para colisionar al mismo tiempo.
```

### 11 — Efecto de la temperatura

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["temperatura"]

respuesta: falso
tipo: vf

enunciado: "Bajar la temperatura de una reacción la hace más rápida."

explicacion: |
  Falso. Al bajar la temperatura, menos partículas superan la energía de activación: la reacción se hace más lenta.
```

### 12 — Factor que no acelera la reacción

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["factores_reaccion"]

respuesta: "bajar la concentracion de los reactivos"
tipo: mc
opciones_explicitas: ["bajar la concentracion de los reactivos", "subir la temperatura", "agregar un catalizador", "aumentar la superficie de contacto"]

enunciado: "¿Cuál de estos factores NO acelera una reacción química?"

explicacion: |
  Bajar la concentración reduce la frecuencia de choques: hace más lenta la reacción, no más rápida.
```

### 13 — Función del catalizador

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["catalizadores", "energia_activacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un catalizador aumenta la velocidad de una reacción al disminuir la energía de activación, abriendo un camino alternativo."

explicacion: |
  Correcto. El catalizador ofrece una ruta con menor barrera energética, así que más partículas la superan.
```

### 14 — Efecto del catalizador en Kc

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["catalizadores", "equilibrio_quimico"]

respuesta: falso
tipo: vf

enunciado: "Un catalizador modifica el valor de la constante de equilibrio (Kc) de una reacción."

explicacion: |
  Falso. El catalizador acelera la reacción directa E inversa por igual: no cambia Kc ni el ΔH, sólo llega más rápido al mismo equilibrio.
```

### 15 — Consumo del catalizador

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["catalizadores", "estequiometria"]

respuesta: falso
tipo: vf

enunciado: "Un catalizador se consume completamente durante la reacción, como si fuera un reactivo."

explicacion: |
  Falso. El catalizador participa del mecanismo pero se regenera al final: no se consume.
```

### 16 — Catalizador y velocidad de llegada al equilibrio

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["catalizadores", "equilibrio_quimico"]

respuesta: "equilibrio"
tipo: completar
respuestas_validas:
  - "equilibrio"

enunciado: "Un catalizador permite que una reacción alcance el ___ de forma más rápida, sin cambiar las concentraciones finales."

explicacion: |
  El catalizador acelera la velocidad, permitiendo llegar antes al mismo estado de equilibrio.
```

### 17 — Qué mide la cinética vs. termoquímica

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["conceptos", "comparacion"]

respuesta: "la velocidad"
tipo: mc
opciones_explicitas: ["la velocidad", "el calor liberado o absorbido", "hasta dónde llega la reacción", "la masa de los reactivos"]

enunciado: "¿Qué mide específicamente la cinética química, a diferencia de la termoquímica y el equilibrio?"

explicacion: |
  La termoquímica mide el intercambio de calor (ΔH) y el equilibrio mide hasta dónde llega la reacción (Kc); la cinética mide qué tan rápido ocurre todo eso.
```

### 18 — Efecto de un catalizador sobre la energía de activación directa e inversa

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "avanzado"
  tags: ["catalizadores", "equilibrio_quimico"]

respuesta: verdadero
tipo: vf

enunciado: "Un catalizador baja la energía de activación tanto de la reacción directa como de la inversa, por eso no altera la posición del equilibrio."

explicacion: |
  Correcto. Al acelerar ambos sentidos por igual, el sistema llega antes al equilibrio, pero ese equilibrio queda en el mismo punto que sin catalizador.
```

### 19 — Choques efectivos

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["conceptos", "choques"]

respuesta: falso
tipo: vf

enunciado: "Cualquier choque entre partículas de reactivos produce una reacción, sin importar la energía que tengan."

explicacion: |
  Falso. Sólo los choques con energía igual o mayor a la energía de activación (y con orientación adecuada) son "efectivos" y producen reacción.
```

### 20 — Aplicación: refrigeración de alimentos

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["aplicacion", "temperatura"]

respuesta: verdadero
tipo: vf

enunciado: "Guardar comida en la heladera retrasa su descomposición porque baja la temperatura, y eso hace más lentas las reacciones químicas involucradas."

explicacion: |
  Correcto. A menor temperatura, menos partículas alcanzan la energía de activación necesaria para las reacciones de descomposición: todo va más lento.
```

### 21 — Velocidad media de reacción

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["calculo", "velocidad"]

variables:
  v: uno_de([0.01, 0.02, 0.05, 0.1])
  t: uno_de([5, 10, 20])
  c2: uno_de([0.1, 0.2, 0.3])
  c1: c2 + v * t

respuesta: v
tipo: input
unidad: "M/s"
tolerancia: 1%

enunciado: "La concentración de un reactivo baja de {c1 | 2} M a {c2} M en {t} segundos. ¿Cuál es la velocidad media de la reacción, en M/s?"

pasos:
  - "velocidad = Δ[concentración] / Δt"
  - "velocidad = ({c1 | 2} − {c2}) / {t} = {v * t | 2} / {t} = {v} M/s"

explicacion: |
  La velocidad mide cuánto cambia la concentración por cada segundo.
```

### 22 — Cuánto tarda

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["calculo", "tiempo"]

variables:
  v: uno_de([0.01, 0.02, 0.05])
  t: random(5, 40)
  dc: v * t

respuesta: t
tipo: input
unidad: "s"
tolerancia: 1%

enunciado: "Una reacción consume un reactivo a una velocidad media de {v} M/s. ¿Cuántos segundos tarda en bajar su concentración {dc | 2} M?"

pasos:
  - "Δt = Δ[concentración] / velocidad"
  - "Δt = {dc | 2} / {v} = {t} s"

explicacion: |
  Con la velocidad y el cambio de concentración se despeja el tiempo.
```

### 23 — Concentración después de un tiempo

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["calculo", "concentracion"]

variables:
  c0: uno_de([1, 1.5, 2])
  v: uno_de([0.01, 0.02])
  t: random(5, 40)

respuesta: c0 - v * t
tipo: input
unidad: "M"
tolerancia: 1%

enunciado: "Un reactivo empieza en {c0} M y se consume a una velocidad media de {v} M/s. ¿Qué concentración queda después de {t} segundos?"

pasos:
  - "Se consumió: {v} × {t} = {v * t | 2} M"
  - "Queda: {c0} − {v * t | 2} = {c0 - v * t | 2} M"

explicacion: |
  Velocidad por tiempo da cuánto reactivo se gastó.
```

### 24 — Regla de los 10 grados

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["calculo", "temperatura"]

variables:
  n: random(1, 4)
  t1: uno_de([10, 20, 25])

respuesta: 2 ^ n
tipo: input
unidad: "veces"
tolerancia_abs: 0

enunciado: "Si cada aumento de 10 °C duplica la velocidad de una reacción, ¿cuántas veces más rápida es a {t1 + 10 * n} °C que a {t1} °C?"

pasos:
  - "Saltos de 10 °C: ({t1 + 10 * n} − {t1}) / 10 = {n}"
  - "Factor: 2^{n} = {2 ^ n}"

explicacion: |
  Cada salto multiplica por 2, así que los saltos se acumulan como potencias de 2.
```

### 25 — La heladera

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["calculo", "cotidiano"]

variables:
  d: uno_de([1, 2, 3])

respuesta: d * 4
tipo: input
unidad: "días"
tolerancia_abs: 0

enunciado: "Un alimento se echa a perder en {d} día(s) a 25 °C. Si cada 10 °C menos las reacciones van a la mitad de velocidad, ¿cuántos días dura en la heladera a 5 °C?"

pasos:
  - "De 25 °C a 5 °C hay 2 saltos de 10 °C: la velocidad se divide por 2 × 2 = 4."
  - "Dura 4 veces más: {d} × 4 = {d * 4} días"

explicacion: |
  Es una estimación: cada alimento tiene sus propias reacciones, pero la idea de enfriar para frenarlas es la misma.
```

### 26 — El catalizador

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["catalizador", "verdadero_falso"]

variables:
  ea: random(80, 150)
  eac: random(30, 70)

respuesta: eac < ea
tipo: vf

enunciado: "Sin catalizador, una reacción tiene una energía de activación de {ea} kJ/mol; con catalizador, de {eac} kJ/mol. ¿El catalizador hace más rápida la reacción?"

pasos:
  - "Compará: {eac} kJ/mol con catalizador contra {ea} kJ/mol sin él."

explicacion: |
  Con menos energía de activación, más choques entre moléculas alcanzan para reaccionar: la reacción va más rápido.
```
