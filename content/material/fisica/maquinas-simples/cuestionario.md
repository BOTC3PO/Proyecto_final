# Física — Máquinas simples: ventaja mecánica (cuestionario, 26 preguntas VBLang)

> Tema: `F14`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la ventaja mecánica

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["maquinas_simples", "vocabulario"]

enunciado: "¿Qué mide la ventaja mecánica de una máquina simple?"
tipo: mc
opciones_explicitas:
  - "La relación entre la carga que hay que mover y el esfuerzo (fuerza aplicada) necesario para moverla"
  - "La velocidad máxima que puede alcanzar la máquina"
  - "La cantidad de energía que la máquina crea"
respuesta: "La relación entre la carga que hay que mover y el esfuerzo (fuerza aplicada) necesario para moverla"

explicacion: |
  VM = carga / esfuerzo.
```

### 2 — Completar: fórmula de la ventaja mecánica

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "completar"]

tipo: completar
enunciado: "Completá: VM = carga / ___."
respuestas_validas:
  - "esfuerzo"

explicacion: |
  El esfuerzo es la fuerza que aplica la persona (o el motor); la
  carga es la fuerza que hay que vencer.
```

### 3 — VM mayor a 1

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

respuesta: verdadero
tipo: vf

enunciado: "Si la ventaja mecánica de una máquina es mayor a 1, se necesita menos esfuerzo que la carga que se está moviendo."

explicacion: |
  VM = carga/esfuerzo > 1 implica carga > esfuerzo.
```

### 4 — Las máquinas simples no crean energía

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

respuesta: falso
tipo: vf

enunciado: "Una máquina simple ideal (sin rozamiento) puede reducir el esfuerzo necesario SIN que aumente la distancia recorrida al aplicar ese esfuerzo."

explicacion: |
  Es falso: por conservación del trabajo, si baja la fuerza necesaria,
  sube proporcionalmente la distancia — el trabajo total no cambia.
```

### 5 — Problema: ventaja mecánica básica

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "problema"]

variables:
  carga: random(100, 500)
  esfuerzo: random(20, 80)

respuesta: redondear(carga / esfuerzo, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una máquina simple permite mover una carga de {carga} N aplicando un esfuerzo de sólo {esfuerzo} N. ¿Cuál es su ventaja mecánica?"

pasos:
  - "VM = carga / esfuerzo = {carga} / {esfuerzo} = {redondear(carga / esfuerzo, 2)}"

explicacion: |
  Sin unidad propia — es un cociente entre dos fuerzas, un número puro.
```

### 6 — Palanca de primera clase

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "palanca"]

enunciado: "¿Qué caracteriza a una palanca de PRIMERA clase (como una balanza o unas tijeras)?"
tipo: mc
opciones_explicitas:
  - "El punto de apoyo (pivote) está entre el esfuerzo y la carga"
  - "La carga está entre el pivote y el esfuerzo"
  - "El esfuerzo está entre el pivote y la carga"
respuesta: "El punto de apoyo (pivote) está entre el esfuerzo y la carga"

explicacion: |
  Su VM puede ser mayor o menor a 1, según qué brazo sea más largo.
```

### 7 — Palanca de segunda clase

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "palanca"]

enunciado: "¿Qué caracteriza a una palanca de SEGUNDA clase (como una carretilla)?"
tipo: mc
opciones_explicitas:
  - "La carga está entre el pivote y el esfuerzo, y siempre tiene VM > 1"
  - "El pivote está entre el esfuerzo y la carga"
  - "El esfuerzo está entre el pivote y la carga, y siempre tiene VM < 1"
respuesta: "La carga está entre el pivote y el esfuerzo, y siempre tiene VM > 1"

explicacion: |
  El brazo del esfuerzo siempre es más largo que el de la carga en
  este arreglo, así que la VM siempre es mayor a 1.
```

### 8 — Palanca de tercera clase

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "palanca"]

enunciado: "¿Qué caracteriza a una palanca de TERCERA clase (como unas pinzas o una caña de pescar)?"
tipo: mc
opciones_explicitas:
  - "El esfuerzo está entre el pivote y la carga, y siempre tiene VM < 1"
  - "El pivote está entre el esfuerzo y la carga"
  - "La carga está entre el pivote y el esfuerzo, y siempre tiene VM > 1"
respuesta: "El esfuerzo está entre el pivote y la carga, y siempre tiene VM < 1"

explicacion: |
  Se sacrifica fuerza a cambio de más velocidad o distancia en el
  extremo donde está la carga.
```

### 9 — Problema: VM de una palanca por sus brazos

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "palanca", "problema"]

variables:
  d_esfuerzo: random_float(1, 3, 2)
  d_carga: random_float(0.2, 0.9, 2)

respuesta: redondear(d_esfuerzo / d_carga, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "En una palanca, el brazo del esfuerzo mide {d_esfuerzo} m y el brazo de la carga mide {d_carga} m. ¿Cuál es su ventaja mecánica?"

pasos:
  - "VM = d_esfuerzo / d_carga = {d_esfuerzo} / {d_carga} = {redondear(d_esfuerzo / d_carga, 2)}"

explicacion: |
  Sale directo de la condición de equilibrio de momentos, sin
  necesidad de conocer las fuerzas.
```

### 10 — Problema: esfuerzo necesario en una palanca

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "palanca", "problema"]

variables:
  d_esfuerzo: random_float(1, 3, 2)
  d_carga: random_float(0.2, 0.9, 2)
  carga: random(50, 300)

respuesta: redondear(carga * d_carga / d_esfuerzo, 2)
tipo: input
tolerancia_abs: 1
unidad: "N"

enunciado: "En una palanca con brazo de esfuerzo {d_esfuerzo} m y brazo de carga {d_carga} m, se quiere mover una carga de {carga} N. ¿Qué esfuerzo hace falta aplicar?"

pasos:
  - "F_esfuerzo × d_esfuerzo = F_carga × d_carga"
  - "F_esfuerzo = {carga} × {d_carga} / {d_esfuerzo} = {redondear(carga * d_carga / d_esfuerzo, 2)} N"

explicacion: |
  Es la misma condición de equilibrio de `../estatica/equilibrio-de-cuerpo-rigido/`,
  despejando el esfuerzo.
```

### 11 — La ecuación de la palanca ES la condición ΣM=0

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "estatica"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación de equilibrio de una palanca, F_esfuerzo×d_esfuerzo = F_carga×d_carga, es exactamente la condición ΣM=0 ya vista en equilibrio de cuerpo rígido, tomando el pivote como punto de referencia."

explicacion: |
  Los dos momentos (esfuerzo y carga, respecto del pivote) tienen que
  cancelarse para que la palanca esté en equilibrio.
```

### 12 — Polea fija

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "polea"]

enunciado: "¿Cuál es la ventaja mecánica de una polea FIJA (la que sólo cambia la dirección de la cuerda, sin moverse junto con la carga)?"
tipo: mc
opciones_explicitas:
  - "VM = 1 (no reduce el esfuerzo, sólo cambia la dirección de la fuerza)"
  - "VM = 2"
  - "VM = 0"
respuesta: "VM = 1 (no reduce el esfuerzo, sólo cambia la dirección de la fuerza)"

explicacion: |
  Es útil (por ejemplo, para tirar hacia abajo en vez de levantar hacia
  arriba), pero no reduce la fuerza necesaria.
```

### 13 — Polea móvil

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "polea"]

enunciado: "¿Cuál es la ventaja mecánica de una polea MÓVIL (la que se mueve junto con la carga)?"
tipo: mc
opciones_explicitas:
  - "VM = 2"
  - "VM = 1"
  - "VM = 0,5"
respuesta: "VM = 2"

explicacion: |
  Dos tramos de cuerda sostienen la carga, así que el esfuerzo
  necesario se reduce a la mitad.
```

### 14 — Problema: sistema de poleas

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "polea", "problema"]

variables:
  tramos: uno_de([2, 3, 4, 5])
  carga: random(100, 400)

respuesta: redondear(carga / tramos, 2)
tipo: input
tolerancia_abs: 1
unidad: "N"

enunciado: "Un sistema de poleas sostiene una carga de {carga} N con {tramos} tramos de cuerda que la sujetan directamente. ¿Qué esfuerzo hace falta aplicar (ideal, sin rozamiento)?"

pasos:
  - "VM ideal = {tramos} (un tramo de cuerda por cada esfuerzo que se reparte la carga)"
  - "esfuerzo = carga / VM = {carga} / {tramos} = {redondear(carga / tramos, 2)} N"

explicacion: |
  La VM ideal de un sistema de poleas es igual a la cantidad de tramos
  de cuerda que sostienen la carga.
```

### 15 — Plano inclinado como máquina simple

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "plano_inclinado"]

enunciado: "¿Cómo se calcula la ventaja mecánica ideal de un plano inclinado?"
tipo: mc
opciones_explicitas:
  - "VM = longitud del plano / altura que se sube"
  - "VM = altura / longitud del plano"
  - "VM = ángulo de inclinación en grados"
respuesta: "VM = longitud del plano / altura que se sube"

explicacion: |
  Un plano más largo (para la misma altura) reduce la fuerza necesaria
  para subir la carga.
```

### 16 — Problema: VM de un plano inclinado

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "plano_inclinado", "problema"]

variables:
  altura: random(1, 3)
  longitud: random(4, 10)

respuesta: redondear(longitud / altura, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una rampa de {longitud} m de longitud se usa para subir una carga a {altura} m de altura. ¿Cuál es su ventaja mecánica ideal?"

pasos:
  - "VM = longitud / altura = {longitud} / {altura} = {redondear(longitud / altura, 2)}"

explicacion: |
  A mayor longitud para la misma altura, menor la pendiente y menor la
  fuerza necesaria (aunque haya que recorrer más distancia).
```

### 17 — Más longitud, menos fuerza

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples", "plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Para subir una carga a la misma altura, una rampa más larga necesita menos fuerza que una rampa más corta."

explicacion: |
  Mayor longitud (para la misma altura) implica mayor VM, y por lo
  tanto menos esfuerzo necesario.
```

### 18 — Rueda y eje

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

enunciado: "¿Cómo se calcula la ventaja mecánica ideal de una rueda y eje (por ejemplo, un volante de dirección)?"
tipo: mc
opciones_explicitas:
  - "VM = radio de la rueda / radio del eje"
  - "VM = radio del eje / radio de la rueda"
  - "VM = radio de la rueda + radio del eje"
respuesta: "VM = radio de la rueda / radio del eje"

explicacion: |
  Cuanto más grande la rueda respecto del eje, menos fuerza hace falta
  aplicar en el borde de la rueda.
```

### 19 — Problema: VM de rueda y eje

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "problema"]

variables:
  R: random(10, 30)
  r: random(1, 5)

respuesta: redondear(R / r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un volante de dirección tiene un radio de {R} cm, y el eje que gira tiene un radio de {r} cm. ¿Cuál es la ventaja mecánica ideal de este sistema?"

pasos:
  - "VM = R / r = {R} / {r} = {redondear(R / r, 2)}"

explicacion: |
  Es la misma idea que la palanca, con el pivote en el centro del eje.
```

### 20 — Menos fuerza a cambio de más distancia

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "intermedio"
  tags: ["maquinas_simples"]

respuesta: verdadero
tipo: vf

enunciado: "Las máquinas simples permiten hacer el mismo trabajo con menos fuerza, pero a costa de recorrer más distancia aplicando esa fuerza."

explicacion: |
  Es la consecuencia de que el trabajo (F×d) se conserva en el caso
  ideal sin rozamiento.
```

### 21 — Por qué no "ahorran" trabajo

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples"]

enunciado: "¿Por qué se dice que las máquinas simples no 'ahorran' trabajo, sólo lo redistribuyen entre fuerza y distancia?"
tipo: mc
opciones_explicitas:
  - "Porque W=F×d se mantiene igual (en el caso ideal): si F baja, d sube en la misma proporción"
  - "Porque en realidad sí ahorran trabajo, generan energía extra"
  - "Porque el trabajo no depende de la fuerza aplicada"
respuesta: "Porque W=F×d se mantiene igual (en el caso ideal): si F baja, d sube en la misma proporción"

explicacion: |
  Es la misma conservación de trabajo ya vista en
  `../trabajo-de-una-fuerza/`.
```

### 22 — Ordenar: pasos para calcular la VM de una palanca

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples", "ordenar"]

enunciado: "Ordená los pasos para identificar y calcular la ventaja mecánica de una palanca dada."
tipo: ordenar
opciones_explicitas:
  - "Calcular VM = d_esfuerzo / d_carga"
  - "Identificar dónde está el pivote, dónde se aplica el esfuerzo y dónde actúa la carga"
  - "Medir (o calcular) el brazo de palanca del esfuerzo y el brazo de palanca de la carga"
respuesta_orden: ["Identificar dónde está el pivote, dónde se aplica el esfuerzo y dónde actúa la carga", "Medir (o calcular) el brazo de palanca del esfuerzo y el brazo de palanca de la carga", "Calcular VM = d_esfuerzo / d_carga"]
explicacion: |
  Sin identificar primero los tres elementos (pivote, esfuerzo, carga)
  no hay brazos que medir.
```

### 23 — Aplicación real: destornillador como palanca

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["maquinas_simples", "aplicacion"]

enunciado: "¿Por qué un destornillador con mango más ancho permite aflojar un tornillo con menos esfuerzo?"
tipo: mc
opciones_explicitas:
  - "Funciona como una rueda y eje: un mango más ancho (mayor radio) aumenta la ventaja mecánica"
  - "Porque los mangos anchos pesan menos"
  - "No hay relación real, es sólo cómodo para la mano"
respuesta: "Funciona como una rueda y eje: un mango más ancho (mayor radio) aumenta la ventaja mecánica"

explicacion: |
  Un carpintero o mecánico usa esta ventaja mecánica todos los días,
  sin necesariamente nombrarla así.
```

### 24 — Completar: esfuerzo y carga

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["maquinas_simples", "completar"]

tipo: completar
enunciado: "Completá: en una máquina simple, la fuerza que aplica la persona (o el motor) se llama ___; la fuerza que hay que superar se llama carga (o resistencia)."
respuestas_validas:
  - "esfuerzo"

explicacion: |
  Esfuerzo y carga son los dos términos que compara la ventaja
  mecánica.
```

### 25 — El rozamiento reduce la VM real

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "avanzado"
  tags: ["maquinas_simples"]

respuesta: falso
tipo: vf

enunciado: "La ventaja mecánica real de una máquina simple (medida en la práctica) siempre es exactamente igual a la ventaja mecánica ideal (calculada sólo con la geometría), sin importar el rozamiento."

explicacion: |
  El rozamiento (`../plano-inclinado-y-rozamiento/`) siempre consume
  parte del esfuerzo, así que la VM real queda por debajo de la ideal.
```

### 26 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "fisica"
  tema: "maquinas_simples"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender las máquinas simples y la ventaja mecánica?"
tipo: mc
opciones_explicitas:
  - "Para entender cómo palancas, poleas, planos inclinados y ruedas permiten mover cargas grandes con menos esfuerzo, a cambio de más distancia recorrida"
  - "Sólo sirve para máquinas eléctricas"
  - "Sólo aplica a objetos sin peso"
respuesta: "Para entender cómo palancas, poleas, planos inclinados y ruedas permiten mover cargas grandes con menos esfuerzo, a cambio de más distancia recorrida"

explicacion: |
  Es el puente real entre toda la Física de fuerzas y momentos ya
  vista, y las herramientas que un carpintero o mecánico usa todos los
  días.
```
