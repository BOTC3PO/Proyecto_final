# Vida Cotidiana — Identificar una fibra por combustión (burn test) (cuestionario, 22 preguntas VBLang)

> Tema: `vida-cotidiana/identificacion-de-fibras-por-combustion`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "burn test"
tipo: completar

enunciado: "La técnica de acercar una llama a un hilo suelto para identificar de qué está hecha una tela se llama ___ (en inglés) o prueba de combustión."

respuestas_validas:
  - "burn test"

explicacion: |
  Es una técnica real y confiable cuando la etiqueta de la prenda se
  perdió o es ilegible.
```

### 2 — pregunta 2

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "basico"
  tags: ["origen vegetal"]

variables:
  fibra: uno_de(["algodón", "lino"])

respuesta: "vegetal"
tipo: mc
opciones_explicitas: ["vegetal", "animal", "sintético"]

enunciado: "La fibra \"{fibra}\" tiene origen..."

explicacion: |
  Algodón y lino son fibras de origen vegetal, celulosa vegetal como el
  papel.
```

### 3 — pregunta 3

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "basico"
  tags: ["origen animal"]

variables:
  fibra: uno_de(["lana", "seda"])

respuesta: "animal"
tipo: mc
opciones_explicitas: ["vegetal", "animal", "sintético"]

enunciado: "La fibra \"{fibra}\" tiene origen..."

explicacion: |
  Lana y seda son de origen animal, ricas en queratina (proteína con
  azufre).
```

### 4 — pregunta 4

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "basico"
  tags: ["origen sintetico"]

variables:
  fibra: uno_de(["poliéster", "acrílico", "nailon"])

respuesta: "sintético"
tipo: mc
opciones_explicitas: ["vegetal", "animal", "sintético"]

enunciado: "La fibra \"{fibra}\" tiene origen..."

explicacion: |
  Son polímeros derivados del petróleo, químicamente son plásticos.
```

### 5 — pregunta 5

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "intermedio"
  tags: ["olor vegetal"]

variables:
  n: uno_de([1, 1])

respuesta: "papel quemado"
tipo: mc
opciones_explicitas: ["papel quemado", "pelo o cuerno quemado", "plástico quemado"]

enunciado: "Una fibra de origen vegetal (algodón, lino) al quemarse huele a..."

explicacion: |
  Tiene sentido porque el papel también es celulosa vegetal, igual que
  el algodón.
```

### 6 — pregunta 6

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "intermedio"
  tags: ["olor animal"]

variables:
  n: uno_de([1, 1])

respuesta: "pelo o cuerno quemado"
tipo: mc
opciones_explicitas: ["papel quemado", "pelo o cuerno quemado", "plástico quemado"]

enunciado: "Una fibra de origen animal (lana, seda) al quemarse huele a..."

explicacion: |
  La queratina animal tiene azufre, el mismo compuesto que da ese olor
  característico al pelo humano al quemarse.
```

### 7 — pregunta 7

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "intermedio"
  tags: ["olor sintetico"]

variables:
  n: uno_de([1, 1])

respuesta: "plástico quemado o ligeramente químico"
tipo: mc
opciones_explicitas: ["papel quemado", "plástico quemado o ligeramente químico", "pelo quemado"]

enunciado: "Una fibra sintética (poliéster, acrílico, nailon) al quemarse huele a..."

explicacion: |
  Tiene sentido: químicamente son polímeros derivados del petróleo, el
  mismo tipo de molécula que otros plásticos.
```

### 8 — pregunta 8

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "avanzado"
  tags: ["residuo vegetal"]

variables:
  n: uno_de([1, 1])

respuesta: "ceniza gris suave que se desmenuza con los dedos"
tipo: mc
opciones_explicitas: ["ceniza gris suave que se desmenuza con los dedos", "una perla dura que no se desmenuza", "una bolita negra quebradiza"]

enunciado: "El residuo que deja una fibra vegetal al quemarse es..."

explicacion: |
  A diferencia de la perla dura sintética o la bolita quebradiza
  animal, el residuo vegetal es una ceniza gris fácil de desmenuzar.
```

### 9 — pregunta 9

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "avanzado"
  tags: ["residuo sintetico"]

variables:
  n: uno_de([1, 1])

respuesta: "una perla o gota dura al enfriarse, que no se desmenuza"
tipo: mc
opciones_explicitas: ["una perla o gota dura al enfriarse, que no se desmenuza", "una ceniza gris que se desmenuza fácil", "no queda ningún residuo"]

enunciado: "El residuo que deja una fibra sintética al quemarse es..."

explicacion: |
  Se derrite como un plástico y forma una gota que se endurece al
  enfriarse, sin desmenuzarse.
```

### 10 — pregunta 10

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "intermedio"
  tags: ["autoextincion"]

variables:
  n: uno_de([1, 1])

respuesta: "animal"
tipo: mc
opciones_explicitas: ["vegetal", "animal", "sintético"]

enunciado: "La fibra que tiende a autoextinguirse sola al retirar la llama, por la humedad natural de la proteína, es de origen..."

explicacion: |
  La lana y la seda tienden a apagarse solas al alejar el fuego, a
  diferencia de la vegetal que sigue ardiendo.
```

### 11 — pregunta 11

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "intermedio"
  tags: ["persistencia del fuego"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una fibra vegetal (algodón, lino) no se autoextingue: sigue ardiendo aunque se retire la llama."

explicacion: |
  A diferencia de la fibra animal, la vegetal arde con facilidad y no se
  apaga sola.
```

### 12 — pregunta 12

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "basico"
  tags: ["donde sacar el hilo"]

variables:
  n: uno_de([1, 1])

respuesta: "de una costura interna"
tipo: mc
opciones_explicitas: ["de una costura interna", "del frente visible de la prenda", "de un botón"]

enunciado: "Para hacer el burn test, se recomienda sacar un hilo suelto..."

explicacion: |
  Sacarlo de una costura interna evita dañar visiblemente la prenda.
```

### 13 — pregunta 13

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "avanzado"
  tags: ["quimica sintetico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las fibras sintéticas como el poliéster son químicamente polímeros derivados del petróleo, el mismo tipo de molécula que otros plásticos."

explicacion: |
  Por eso se comportan como un plástico al quemarse: se derriten en vez
  de arder limpiamente.
```

### 14 — pregunta 14

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "intermedio"
  tags: ["aplicacion lavado"]

variables:
  n: uno_de([1, 1])

respuesta: "una fibra sintética tolera mal el calor porque puede derretirse o deformarse"
tipo: mc
opciones_explicitas: ["una fibra sintética tolera mal el calor porque puede derretirse o deformarse", "todas las fibras toleran el calor igual de bien", "el algodón se derrite con calor y las sintéticas no"]

enunciado: "Conocer el origen de una fibra ayuda a decidir la técnica de lavado porque..."

explicacion: |
  El algodón tolera bien el calor; una sintética puede derretirse o
  deformarse, por eso la técnica de lavado debe ser distinta.
```

### 15 — pregunta 15

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "avanzado"
  tags: ["seguridad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Se recomienda usar ropa de fibra natural cerca de una fuente de calor o llama abierta, porque ciertos sintéticos pueden derretirse sobre la piel."

explicacion: |
  Es una aplicación de seguridad real del conocimiento de las fibras: el
  riesgo de quemadura por plástico derretido.
```

### 16 — pregunta 16

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "basico"
  tags: ["por que hace falta"]

variables:
  n: uno_de([1, 1])

respuesta: "cuando la etiqueta de la prenda se perdió o es ilegible"
tipo: mc
opciones_explicitas: ["cuando la etiqueta de la prenda se perdió o es ilegible", "sólo por curiosidad sin ningún uso práctico", "para elegir el color de una prenda nueva"]

enunciado: "El burn test es útil especialmente..."

explicacion: |
  Separar la ropa por tipo de tela da por sentado que se sabe de qué
  está hecha, pero eso no siempre es así.
```

### 17 — pregunta 17

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "intermedio"
  tags: ["comportamiento sintetico"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Las fibras sintéticas arden con la misma rapidez y facilidad que las fibras vegetales."

explicacion: |
  Las sintéticas no arden tanto como se derriten, un comportamiento
  distinto al de las vegetales, que sí arden rápido y con facilidad.
```

### 18 — pregunta 18

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "basico"
  tags: ["ejemplos vegetales"]

variables:
  n: uno_de([1, 1])

respuesta: "algodón y lino"
tipo: mc
opciones_explicitas: ["algodón y lino", "lana y seda", "poliéster y nailon"]

enunciado: "Los ejemplos de fibras de origen vegetal mencionados en la teoría son..."

explicacion: |
  Ambas son celulosa vegetal, por eso comparten el olor a papel quemado
  al hacer el burn test.
```

### 19 — pregunta 19

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "intermedio"
  tags: ["desmenuzable"]

variables:
  n: uno_de([1, 1])

respuesta: "vegetal"
tipo: mc
opciones_explicitas: ["vegetal", "animal", "sintético"]

enunciado: "El residuo que se desmenuza más fácilmente con los dedos corresponde a una fibra de origen..."

explicacion: |
  La ceniza gris suave de la fibra vegetal se desmenuza fácil, a
  diferencia de la perla dura sintética o la bolita quebradiza animal.
```

### 20 — pregunta 20

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "basico"
  tags: ["tres familias"]

variables:
  origen: uno_de(["vegetal", "animal", "sintético"])

respuesta: verdadero
tipo: vf

enunciado: "El origen \"{origen}\" es una de las tres familias de fibras que distingue el burn test, según la teoría."

explicacion: |
  Las tres familias (vegetal, animal, sintético) se comportan muy
  distinto al quemarse: ese comportamiento es lo que permite
  identificarlas.
```

### 21 — pregunta 21

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "avanzado"
  tags: ["ejemplo residuo animal"]

variables:
  n: uno_de([1, 1])

respuesta: "una cuenta o bolita negra fácil de aplastar"
tipo: mc
opciones_explicitas: ["una cuenta o bolita negra fácil de aplastar", "una perla dura que no se desmenuza", "no deja ningún residuo visible"]

enunciado: "El residuo característico de una fibra animal (lana, seda) al quemarse es..."

explicacion: |
  Es quebradizo, distinto tanto de la ceniza suave vegetal como de la
  perla dura sintética.
```

### 22 — pregunta 22

```
metadata:
  materia: "vida_cotidiana"
  tema: "identificar_una_fibra_por_combustion_burn_test"
  nivel: "intermedio"
  tags: ["comportamiento animal"]

variables:
  n: uno_de([1, 1])

respuesta: "más lento y tiende a autoextinguirse"
tipo: mc
opciones_explicitas: ["más lento y tiende a autoextinguirse", "más rápido y nunca se apaga", "se derrite como un plástico"]

enunciado: "Comparado con una fibra vegetal, una fibra animal arde..."

explicacion: |
  La humedad natural de la proteína hace que la fibra animal arda más
  lento y tienda a apagarse sola.
```

