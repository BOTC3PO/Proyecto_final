# Matemática — Diagramas de Venn (cuestionario, 25 preguntas VBLang)

> Tema: `CJ3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un diagrama de Venn

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "vocabulario"]

enunciado: "¿Qué es un diagrama de Venn?"
tipo: mc
opciones_explicitas:
  - "La representación visual de conjuntos (como círculos) y sus operaciones (superposición = intersección)"
  - "Una tabla de números ordenados de menor a mayor"
  - "Un gráfico de barras para comparar cantidades"
respuesta: "La representación visual de conjuntos (como círculos) y sus operaciones (superposición = intersección)"

explicacion: |
  Es la forma visual de las operaciones ya definidas entre conjuntos.
```

### 2 — Qué representa el rectángulo exterior

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "vocabulario"]

enunciado: "¿Qué representa el rectángulo que envuelve a todos los círculos en un diagrama de Venn?"
tipo: mc
opciones_explicitas:
  - "El conjunto universal U"
  - "El conjunto vacío"
  - "La intersección de todos los conjuntos"
respuesta: "El conjunto universal U"

explicacion: |
  Contiene a todos los elementos posibles en el contexto del problema.
```

### 3 — Qué representa la superposición de dos círculos

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "vocabulario"]

enunciado: "En un diagrama de Venn con dos círculos A y B, ¿qué representa la zona donde se superponen?"
tipo: mc
opciones_explicitas:
  - "La intersección, A ∩ B"
  - "La unión, A ∪ B"
  - "El conjunto universal"
respuesta: "La intersección, A ∩ B"

explicacion: |
  Es la zona que pertenece a ambos círculos a la vez.
```

### 4 — Completar: región de A sin superposición

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "completar"]

tipo: completar
enunciado: "Completá: la parte del círculo A que NO se superpone con B representa el conjunto ___."
respuestas_validas:
  - "A - B"
  - "A−B"

explicacion: |
  Son los elementos de A que no comparte con B.
```

### 5 — La unión es todo lo que está dentro de cualquiera de los dos círculos

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "En un diagrama de Venn, A ∪ B es toda la zona cubierta por cualquiera de los dos círculos (las tres regiones: sólo A, sólo B, y la intersección)."

explicacion: |
  Es la superficie total ocupada por al menos uno de los dos conjuntos.
```

### 6 — Fuera de los círculos

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: falso
tipo: vf

enunciado: "La zona fuera de ambos círculos, pero dentro del rectángulo U, representa elementos que pertenecen a A o a B."

explicacion: |
  Es exactamente lo opuesto: son los elementos que NO pertenecen ni a
  A ni a B.
```

### 7 — Problema: cuántos no tienen ninguna de las dos características

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(20, 35)
  b: random(20, 35)
  interseccion: random(1, min(a, b))
  extra: random(5, 20)
  total: a + b - interseccion + extra

respuesta: extra
tipo: input

enunciado: "En una encuesta a {total} personas, {a} tienen perro, {b} tienen gato, y {interseccion} tienen ambos. ¿Cuántas personas no tienen ni perro ni gato?"

pasos:
  - "Tienen perro o gato (unión) = {a} + {b} − {interseccion} = {a + b - interseccion}"
  - "Ninguno = total − unión = {total} − {a + b - interseccion} = {extra}"

explicacion: |
  Primero se calcula cuántos tienen al menos una de las dos cosas, y
  se resta ese número del total.
```

### 8 — Problema: región 'sólo A'

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  a: random(20, 50)
  interseccion: random(1, 15)

respuesta: a - interseccion
tipo: input

enunciado: "En un diagrama de Venn, el conjunto A tiene {a} elementos en total, y {interseccion} de ellos están también en B. ¿Cuántos elementos hay en la región 'sólo A' (dentro del círculo A, pero fuera de la superposición)?"

pasos:
  - "Sólo A = |A| − |A∩B| = {a} − {interseccion} = {a - interseccion}"

explicacion: |
  La región 'sólo A' es lo que queda del círculo A después de sacarle
  la parte compartida con B.
```

### 9 — Problema: región 'sólo B'

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  b: random(20, 50)
  interseccion: random(1, 15)

respuesta: b - interseccion
tipo: input

enunciado: "En un diagrama de Venn, el conjunto B tiene {b} elementos en total, y {interseccion} de ellos están también en A. ¿Cuántos elementos hay en la región 'sólo B'?"

pasos:
  - "Sólo B = |B| − |A∩B| = {b} − {interseccion} = {b - interseccion}"

explicacion: |
  El mismo razonamiento que 'sólo A', ahora para el círculo B.
```

### 10 — Ordenar: pasos para completar un diagrama de Venn con datos de encuesta

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "ordenar"]

enunciado: "Ordená los pasos para completar un diagrama de Venn de dos conjuntos, a partir de los datos de una encuesta."
tipo: ordenar
opciones_explicitas:
  - "Calcular las regiones 'sólo A' y 'sólo B', restando la intersección a cada total"
  - "Anotar primero la cantidad de la intersección (el centro del diagrama)"
  - "Calcular la región 'ninguno', restando el total de la unión al total de encuestados"
respuesta_orden: ["Anotar primero la cantidad de la intersección (el centro del diagrama)", "Calcular las regiones 'sólo A' y 'sólo B', restando la intersección a cada total", "Calcular la región 'ninguno', restando el total de la unión al total de encuestados"]
explicacion: |
  Empezar por el centro es clave: las otras regiones se calculan
  restando esa cantidad de los totales dados.
```

### 11 — Problema: hallar la intersección a partir de la encuesta completa

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(20, 35)
  b: random(20, 35)
  interseccion_real: random(1, min(a, b))
  ninguno: random(5, 20)
  total: a + b - interseccion_real + ninguno

respuesta: interseccion_real
tipo: input

enunciado: "En una encuesta a {total} personas, {a} usan transporte público, {b} usan bicicleta, y {ninguno} no usan ninguno de los dos. ¿Cuántas personas usan AMBOS medios?"

pasos:
  - "Usan al menos uno = total − ninguno = {total} − {ninguno} = {total - ninguno}"
  - "|A∩B| = |A| + |B| − (usan al menos uno) = {a} + {b} − {total - ninguno} = {interseccion_real}"

explicacion: |
  Se calcula primero la unión (todos menos los que no usan ninguno), y
  de ahí se despeja la intersección.
```

### 12 — Por qué se empieza completando el centro

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

enunciado: "¿Por qué conviene completar primero la intersección al resolver un diagrama de Venn de dos conjuntos?"
tipo: mc
opciones_explicitas:
  - "Porque las demás regiones (sólo A, sólo B) se calculan restando la intersección de los totales dados"
  - "Porque la intersección siempre es la región más grande"
  - "No hay ninguna razón particular, es sólo costumbre"
respuesta: "Porque las demás regiones (sólo A, sólo B) se calculan restando la intersección de los totales dados"

explicacion: |
  Sin la intersección, no se puede calcular ninguna de las otras
  regiones a partir de los totales de A y B.
```

### 13 — Sin operaciones de conjuntos, el diagrama es sólo un dibujo

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "Sin conocer las operaciones de unión, intersección y diferencia, un diagrama de Venn es sólo un dibujo de círculos superpuestos, sin significado matemático."

explicacion: |
  El diagrama es la forma visual de esas operaciones — no las
  reemplaza.
```

### 14 — Problema: total de la unión a partir de las tres regiones

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  solo_a: random(10, 30)
  solo_b: random(10, 30)
  ambos: random(5, 20)

respuesta: solo_a + solo_b + ambos
tipo: input

enunciado: "En un diagrama de Venn: la región 'sólo A' tiene {solo_a} elementos, 'sólo B' tiene {solo_b}, y la intersección tiene {ambos}. ¿Cuántos elementos tiene A ∪ B en total?"

pasos:
  - "|A∪B| = sólo A + sólo B + ambos = {solo_a} + {solo_b} + {ambos} = {solo_a + solo_b + ambos}"

explicacion: |
  La unión son las tres regiones sumadas: lo exclusivo de cada
  conjunto más lo compartido.
```

### 15 — La región 'sólo A' es |A| menos la intersección

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "La cantidad de elementos en la región 'sólo A' es igual a |A| menos |A∩B|."

explicacion: |
  Es el total de A menos la parte que comparte con B.
```

### 16 — La región 'sólo B' es |B| menos la intersección

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "La cantidad de elementos en la región 'sólo B' es igual a |B| menos |A∩B|."

explicacion: |
  El mismo razonamiento que 'sólo A', para el otro conjunto.
```

### 17 — Problema: encuesta clásica de idiomas

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(25, 40)
  b: random(25, 40)
  interseccion: random(5, 15)
  extra: random(10, 25)
  total: a + b - interseccion + extra

respuesta: total - extra
tipo: input

enunciado: "De {total} estudiantes, {a} hablan inglés, {b} hablan portugués, y {interseccion} hablan ambos idiomas. ¿Cuántos estudiantes hablan AL MENOS uno de los dos idiomas?"

pasos:
  - "Al menos uno = |A∪B| = {a} + {b} − {interseccion} = {a + b - interseccion}"

explicacion: |
  'Al menos uno' es exactamente la definición de unión.
```

### 18 — Problema: mismo enunciado, ninguno de los dos idiomas

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn", "problema"]

variables:
  a: random(25, 40)
  b: random(25, 40)
  interseccion: random(5, 15)
  extra: random(10, 25)
  total: a + b - interseccion + extra

respuesta: extra
tipo: input

enunciado: "De {total} estudiantes, {a} hablan inglés, {b} hablan portugués, y {interseccion} hablan ambos idiomas. ¿Cuántos estudiantes NO hablan ninguno de los dos?"

pasos:
  - "Al menos uno = {a} + {b} − {interseccion} = {a + b - interseccion}"
  - "Ninguno = {total} − {a + b - interseccion} = {extra}"

explicacion: |
  Es el mismo problema que el anterior, completando la última región
  del diagrama.
```

### 19 — Aplicación real: clasificación en Biología

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "aplicacion"]

enunciado: "¿Para qué se usan los diagramas de Venn en Biología, por ejemplo al comparar especies?"
tipo: mc
opciones_explicitas:
  - "Para mostrar visualmente qué características comparten dos o más grupos, y cuáles son exclusivas de cada uno"
  - "Sólo para medir el tamaño de los animales"
  - "No tienen ninguna aplicación en Biología"
respuesta: "Para mostrar visualmente qué características comparten dos o más grupos, y cuáles son exclusivas de cada uno"

explicacion: |
  Es la misma lógica de conjuntos, aplicada a categorías biológicas en
  vez de números.
```

### 20 — Aplicación real: probabilidad simple

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["venn", "aplicacion"]

enunciado: "¿Para qué sirve un diagrama de Venn al estudiar probabilidad simple?"
tipo: mc
opciones_explicitas:
  - "Para clasificar visualmente el espacio muestral en casos que cumplen una condición, otra, ambas, o ninguna"
  - "Para calcular directamente el promedio de un conjunto de datos"
  - "No se usa en probabilidad, sólo en geometría"
respuesta: "Para clasificar visualmente el espacio muestral en casos que cumplen una condición, otra, ambas, o ninguna"

explicacion: |
  Es la base visual sobre la que se construye la probabilidad de
  sucesos combinados.
```

### 21 — Círculos que no se tocan

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

respuesta: verdadero
tipo: vf

enunciado: "Si en un diagrama de Venn dos círculos se dibujan sin tocarse (sin superposición), representan dos conjuntos disjuntos."

explicacion: |
  Sin superposición no hay intersección — es exactamente lo que
  significa ser disjuntos.
```

### 22 — Problema: unión de conjuntos disjuntos en el diagrama

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn", "problema"]

variables:
  a: random(15, 30)
  b: random(15, 30)
  ninguno: random(5, 20)

respuesta: a + b
tipo: input

enunciado: "En un diagrama de Venn, los círculos A ({a} elementos) y B ({b} elementos) NO se superponen (son disjuntos). ¿Cuántos elementos tiene A ∪ B?"

pasos:
  - "Sin intersección que restar: |A∪B| = |A| + |B| = {a} + {b} = {a + b}"

explicacion: |
  Al no compartir nada, la unión es simplemente la suma de los dos.
```

### 23 — Tres regiones básicas dentro de la unión

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "intermedio"
  tags: ["venn"]

enunciado: "¿Cuáles son las tres regiones en las que un diagrama de Venn de dos conjuntos divide a la unión A ∪ B?"
tipo: mc
opciones_explicitas:
  - "Sólo A, sólo B, y la intersección (A∩B)"
  - "El conjunto universal completo"
  - "Sólo la intersección, dividida en dos mitades"
respuesta: "Sólo A, sólo B, y la intersección (A∩B)"

explicacion: |
  Esas tres regiones sumadas son exactamente A ∪ B.
```

### 24 — El diagrama no reemplaza el cálculo, lo ilustra

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "avanzado"
  tags: ["venn"]

respuesta: falso
tipo: vf

enunciado: "Dibujar un diagrama de Venn alcanza por sí solo para resolver un problema de conteo, sin necesidad de aplicar ninguna fórmula."

explicacion: |
  El diagrama ayuda a organizar visualmente los datos, pero las
  cantidades de cada región siempre se calculan con las fórmulas de
  unión/intersección/diferencia.
```

### 25 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "diagramas_de_venn"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el diagrama de Venn?"
tipo: mc
opciones_explicitas:
  - "Para representar visualmente conjuntos y sus operaciones, y organizar el cálculo de cuántos elementos hay en cada región"
  - "Sólo sirve para dibujar figuras geométricas"
  - "Sólo aplica a conjuntos de menos de 3 elementos"
respuesta: "Para representar visualmente conjuntos y sus operaciones, y organizar el cálculo de cuántos elementos hay en cada región"

explicacion: |
  Es el puente visual entre las operaciones de conjuntos y el próximo
  módulo: contar sin enumerar (principio multiplicativo de conteo).
```
