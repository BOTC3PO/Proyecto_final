# Matemática — Función inversa y composición (cuestionario, 24 preguntas VBLang)

> Tema: `FUNC1c` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

---

### 1 — Composición (f∘g)(x): lineal con cuadrática

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x: random(1, 10)

respuesta: m * (x ^ 2) + b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}, g(x) = x². ¿Cuánto vale (f∘g)({x})?"

pasos:
  - "Primero g({x}) = {x}² = {x ^ 2}"
  - "Después f({x ^ 2}) = {m}×{x ^ 2} + {b} = {m * (x ^ 2) + b}"

explicacion: |
  (f∘g)(x) = f(g(x)): primero se aplica g, y el resultado entra a f.
```

### 2 — Composición (g∘f)(x): mismo par, orden invertido

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x: random(1, 10)

respuesta: (m * x + b) ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}, g(x) = x². ¿Cuánto vale (g∘f)({x})?"

pasos:
  - "Primero f({x}) = {m}×{x} + {b} = {m * x + b}"
  - "Después g({m * x + b}) = ({m * x + b})² = {(m * x + b) ^ 2}"

explicacion: |
  Acá el orden es al revés: primero f, después g — da un resultado
  distinto al ejercicio anterior.
```

### 3 — Composición de dos funciones lineales

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion"]

variables:
  m1: random(2, 6)
  b1: random(1, 10)
  m2: random(2, 6)
  b2: random(1, 10)
  x: random(1, 15)

respuesta: m1 * (m2 * x + b2) + b1
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m1}x + {b1}, g(x) = {m2}x + {b2}. ¿Cuánto vale (f∘g)({x})?"

explicacion: |
  Se calcula g({x}) primero, y ese resultado se usa como entrada de f.
```

### 4 — Composición de dos funciones lineales, orden invertido

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion"]

variables:
  m1: random(2, 6)
  b1: random(1, 10)
  m2: random(2, 6)
  b2: random(1, 10)
  x: random(1, 15)

respuesta: m2 * (m1 * x + b1) + b2
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m1}x + {b1}, g(x) = {m2}x + {b2}. ¿Cuánto vale (g∘f)({x})?"

explicacion: |
  Ahora se calcula f primero — el resultado, en general, es distinto al
  de (f∘g).
```

### 5 — Composición con la misma función dos veces

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion"]

variables:
  m: random(2, 5)
  b: random(1, 10)
  x: random(1, 15)

respuesta: m * (m * x + b) + b
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Cuánto vale (f∘f)({x})?"

pasos:
  - "Primero f({x}) = {m * x + b}"
  - "Después f({m * x + b}) = {m} × {m * x + b} + {b} = {m * (m * x + b) + b}"

explicacion: |
  Componer una función consigo misma es aplicarla dos veces seguidas.
```

### 6 — Composición: verificar el valor

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["composicion", "verificacion", "verdadero_falso"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x: random(1, 10)
  real: m * (x ^ 2) + b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = {m}x + {b}, g(x) = x². ¿Es correcto que (f∘g)({x}) = {propuesto}?"

explicacion: |
  El valor correcto es f(g({x})) = {real}.
```

### 7 — Concepto: la composición no es conmutativa

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En general, (f∘g)(x) es igual a (g∘f)(x)."

explicacion: |
  El orden en que se componen dos funciones cambia el resultado, salvo
  casos particulares.
```

### 8 — Hallar la inversa: evaluarla en un punto

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x_sol: random(1, 20)
  oy: m * x_sol + b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x + {b}. ¿Cuánto vale f⁻¹({oy})?"

pasos:
  - "f⁻¹(y) deshace lo que hace f: buscar qué x cumple {m}x + {b} = {oy}"
  - "x = ({oy} − {b}) / {m} = {(oy - b) / m}"

explicacion: |
  f⁻¹({oy}) es el x que, aplicado a f, da {oy} — el mismo cálculo que
  despejar x en la ecuación {m}x + {b} = {oy}.
```

### 9 — Hallar la inversa: otro caso

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  m: random(2, 10)
  b: random(1, 20)
  x_sol: random(1, 15)
  oy: m * x_sol - b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {m}x − {b}. ¿Cuánto vale f⁻¹({oy})?"

explicacion: |
  x = ({oy} + {b}) / {m}.
```

### 10 — Hallar la inversa: coeficiente 1

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "basico"
  tags: ["inversa"]

variables:
  b: random(1, 20)
  x_sol: random(1, 30)
  oy: x_sol + b

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x + {b}. ¿Cuánto vale f⁻¹({oy})?"

explicacion: |
  Si f suma {b}, f⁻¹ resta {b}: x = {oy} − {b}.
```

### 11 — Verificar f(f⁻¹(x)) = x

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["inversa", "verificacion", "verdadero_falso"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x_sol: random(1, 20)
  oy: m * x_sol + b
  inv_y: (oy - b) / m

respuesta: ((m * inv_y + b) == oy)
tipo: vf

enunciado: "f(x) = {m}x + {b}. Si f⁻¹({oy}) = {inv_y}, ¿f({inv_y}) da de vuelta {oy}?"

explicacion: |
  Aplicar f y después f⁻¹ (o al revés) tiene que devolver el valor
  original — es la definición misma de función inversa.
```

### 12 — Verificar f⁻¹(f(x)) = x

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["inversa", "verificacion", "verdadero_falso"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x: random(1, 20)
  fx: m * x + b

respuesta: (((fx - b) / m) == x)
tipo: vf

enunciado: "f(x) = {m}x + {b}. Si f({x}) = {fx}, ¿f⁻¹({fx}) da de vuelta {x}?"

explicacion: |
  f⁻¹ deshace exactamente lo que hizo f.
```

### 13 — Elegir la fórmula correcta de la inversa

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["inversa", "opcion_multiple"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x: random(1, 20)

respuesta: (x - b) / m
tipo: mc
opciones_explicitas:
  - (x - b) / m
  - (x + b) / m
  - m * x - b

enunciado: "f(x) = {m}x + {b}. ¿Cuál es f⁻¹({x})?"

explicacion: |
  Se despeja x de y = {m}x + {b}: x = (y − {b}) / {m}. Cambiar el signo
  del −{b} o no dividir por {m} son los errores típicos.
```

### 14 — Concepto: f⁻¹ no es 1/f

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "f⁻¹(x) significa lo mismo que 1/f(x)."

explicacion: |
  f⁻¹ es la función inversa (deshace la operación de f); 1/f(x) es el
  recíproco numérico del resultado — son cosas distintas.
```

### 15 — Concepto: no toda función tiene inversa

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "No toda función tiene inversa: hace falta que sea biyectiva (cada entrada con una salida distinta, y se alcancen todos los valores de llegada)."

explicacion: |
  Por ejemplo, f(x) = x² no es invertible en todo su dominio, porque
  f(2) y f(−2) dan el mismo resultado.
```

### 16 — Concepto: definición de función inversa

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "f(f⁻¹(x)) tiene que dar x, para cualquier x del dominio de f⁻¹."

explicacion: |
  Es exactamente la definición: aplicar una función y su inversa
  devuelve el valor original.
```

### 17 — Concepto: composición con función identidad

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  m: random(2, 10)
  b: random(1, 20)
  x: random(1, 20)

respuesta: ((m * x + b) == (m * x + b))
tipo: vf

enunciado: "f(x) = {m}x + {b}, id(x) = x (la función identidad). ¿(f∘id)({x}) es igual a f({x})?"

explicacion: |
  Componer con la identidad no cambia nada: id no modifica su entrada
  antes de pasarla a f.
```

### 18 — Composición en contexto: descuento y envío

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["composicion", "problema"]

variables:
  desc: random(1, 20)
  envio: random(5, 30)
  precio: random(50, 200)

respuesta: precio - desc + envio
tipo: input
tolerancia_abs: 0

enunciado: "d(p) = p − {desc} (aplica un descuento fijo), e(p) = p + {envio} (agrega el envío). Si el precio de lista es {precio} y se aplica primero el descuento y después se suma el envío, ¿cuál es el precio final? (Esto es (e∘d)({precio}))"

explicacion: |
  (e∘d)(p) = e(d(p)): primero se descuenta, y al resultado se le suma el
  envío — el mismo orden que las operaciones se hacen en la vida real.
```

### 19 — Hallar la inversa en contexto: temperatura

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["inversa", "problema"]

variables:
  m: random(2, 5)
  b: random(10, 40)
  temp_sol: random(1, 30)
  resultado: m * temp_sol + b

respuesta: temp_sol
tipo: input
tolerancia_abs: 0

enunciado: "Una fórmula de conversión es f(t) = {m}t + {b}. Si el resultado de aplicarla fue {resultado}, ¿cuál era el valor original de t (o sea, f⁻¹({resultado}))?"

explicacion: |
  Se despeja t de {m}t + {b} = {resultado}, el mismo procedimiento de
  siempre para hallar la inversa evaluada en un punto.
```

### 20 — Verificación con error: inversa mal calculada

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["verificacion", "error_comun", "verdadero_falso"]

variables:
  m: random(2, 8)
  b: random(1, 15)
  x_sol: random(1, 20)
  oy: m * x_sol + b
  inv_mal: (oy + b) / m

respuesta: ((m * inv_mal + b) == oy)
tipo: vf

enunciado: "f(x) = {m}x + {b}. Si por error se calcula f⁻¹({oy}) como ({oy}+{b})/{m} (con el signo cambiado), ¿el resultado de f en ese valor sigue dando {oy}?"

explicacion: |
  No: con el signo equivocado, f(f⁻¹({oy})) ya no da {oy} — la
  verificación es exactamente lo que detecta este tipo de error.
```

### 21 — Composición: tres números distintos, chequeo de orden

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["composicion", "verdadero_falso"]

variables:
  m1: random(2, 6)
  b1: random(1, 10)
  m2: random(2, 6)
  b2: random(1, 10)
  x: random(1, 10)

respuesta: ((m1 * (m2 * x + b2) + b1) == (m2 * (m1 * x + b1) + b2))
tipo: vf

enunciado: "f(x) = {m1}x + {b1}, g(x) = {m2}x + {b2}. ¿(f∘g)({x}) es igual a (g∘f)({x})?"

explicacion: |
  Salvo coincidencia numérica puntual, componer en órdenes distintos da
  resultados distintos — por eso siempre hay que fijarse cuál función va
  primero.
```

### 22 — Concepto: composición triple

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "avanzado"
  tags: ["composicion"]

variables:
  a: random(1, 5)
  b: random(1, 5)
  c: random(1, 5)
  x: random(1, 10)

respuesta: x + a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x + {a}, g(x) = x + {b}, h(x) = x + {c}. ¿Cuánto vale (f∘g∘h)({x})?"

pasos:
  - "h({x}) = {x + c}, g({x + c}) = {x + c + b}, f({x + c + b}) = {x + a + b + c}"

explicacion: |
  Componer más de dos funciones se hace de a pasos, de adentro hacia
  afuera.
```

### 23 — Concepto: inversa de la inversa

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La inversa de f⁻¹ es la propia f."

explicacion: |
  Deshacer lo que deshace f vuelve a hacer lo que hacía f — (f⁻¹)⁻¹ = f.
```

### 24 — Hallar la inversa: verificar cuál fórmula corresponde

```
metadata:
  materia: "matematicas"
  tema: "funcion_inversa_composicion"
  nivel: "intermedio"
  tags: ["inversa", "opcion_multiple"]

variables:
  b: random(1, 20)
  x: random(1, 30)

respuesta: x - b
tipo: mc
opciones_explicitas:
  - x - b
  - x + b
  - -x - b

enunciado: "f(x) = x + {b}. ¿Cuál es f⁻¹({x})?"

explicacion: |
  Si f suma {b}, la inversa resta {b}: f⁻¹(x) = x − {b}.
```
