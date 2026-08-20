# Matemática — Dinero: monedas, billetes y vuelto (cuestionario, 26 preguntas VBLang)

> Tema: `N18`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Sumar montos de dinero

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "suma"]

variables:
  a: random(50, 900)
  b: random(50, 900)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Compraste algo de ${a} y otra cosa de ${b}. ¿Cuánto gastaste en total?"

explicacion: |
  Sumar dinero es sumar números, igual que siempre.
```

### 2 — Vuelto simple

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])

restricciones:
  - billete > precio

respuesta: billete - precio
tipo: input
tolerancia_abs: 0

enunciado: "Algo cuesta ${precio} y pagás con un billete de ${billete}. ¿Cuánto te dan de vuelto?"

explicacion: |
  El vuelto es lo entregado menos el precio.
```

### 3 — Vuelto (otro billete)

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(10, 90)
  billete: uno_de([100, 200, 500])

restricciones:
  - billete > precio

respuesta: billete - precio
tipo: input
tolerancia_abs: 0

enunciado: "Algo cuesta ${precio} y pagás con un billete de ${billete}. ¿Cuánto te dan de vuelto?"

explicacion: |
  Mismo procedimiento con otra denominación de billete.
```

### 4 — Cuántos billetes entran en un monto exacto

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  denominacion: uno_de([10, 20, 50, 100])
  cantidad: random(2, 15)
  monto: denominacion * cantidad

respuesta: cantidad
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos billetes de ${denominacion} hacen falta para juntar exactamente ${monto}?"

explicacion: |
  Se divide el monto total por el valor de cada billete.
```

### 5 — Cuántos billetes entran (con resto)

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  denominacion: uno_de([50, 100, 200])
  cantidad: random(2, 10)
  resto: random(1, denominacion - 1)
  monto: denominacion * cantidad + resto

respuesta: cantidad
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos billetes COMPLETOS de ${denominacion} entran en ${monto} (sin pasarse)?"

pasos:
  - "{monto} ÷ {denominacion} da {cantidad} billetes completos, y sobran {resto}"

explicacion: |
  Se toma la parte entera de dividir el monto por el valor del billete.
```

### 6 — Cuánto sobra después de sacar billetes de una denominación

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  denominacion: uno_de([50, 100, 200])
  cantidad: random(2, 10)
  resto: random(1, denominacion - 1)
  monto: denominacion * cantidad + resto

respuesta: resto
tipo: input
tolerancia_abs: 0

enunciado: "Después de sacar todos los billetes completos de ${denominacion} posibles de ${monto}, ¿cuánto queda sin poder formar otro billete de esa denominación?"

explicacion: |
  Es el resto de dividir el monto por el valor del billete.
```

### 7 — Verificar un vuelto (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "verificacion"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])
  correcto: billete - precio
  error: uno_de([0, 0, 0, 10, -10])
  mostrado: correcto + error

restricciones:
  - billete > precio

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien dado este vuelto? Precio ${precio}, pagaste con ${billete}, te dieron ${mostrado} de vuelto."

explicacion: |
  Se verifica sumando el vuelto al precio: tiene que dar exactamente lo
  que se pagó.
```

### 8 — Sumar varias denominaciones distintas

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  n1000: random(0, 3)
  n500: random(0, 3)
  n100: random(1, 4)

respuesta: n1000 * 1000 + n500 * 500 + n100 * 100
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {n1000} billete(s) de $1.000, {n500} de $500 y {n100} de $100. ¿Cuánto dinero tenés en total?"

explicacion: |
  Se multiplica cada denominación por su cantidad, y se suman los
  resultados.
```

### 9 — Completar con una denominación menor

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  billete_grande: 1000
  usados_grandes: random(1, 3)
  falta: random(50, 900)
  monto: billete_grande * usados_grandes + falta

respuesta: falta
tipo: input
tolerancia_abs: 0

enunciado: "Para juntar ${monto} usaste {usados_grandes} billete(s) de ${billete_grande}. ¿Cuánto más te falta juntar?"

explicacion: |
  Se resta lo ya juntado (billete grande × cantidad) al monto total.
```

### 10 — Comparar precios

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "comparacion"]

variables:
  a: random(100, 2000)
  b: random(100, 2000)

restricciones:
  - a != b

respuesta: (a < b)
tipo: vf

enunciado: "¿Es ${a} más barato que ${b}?"

explicacion: |
  Más barato es el precio menor.
```

### 11 — Problema: varios productos iguales y pagar con un billete

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  precio_unitario: random(20, 200)
  cantidad: random(2, 6)
  billete: uno_de([1000, 2000])

restricciones:
  - billete > (precio_unitario * cantidad)

respuesta: billete - (precio_unitario * cantidad)
tipo: input
tolerancia_abs: 0

enunciado: "Comprás {cantidad} caramelos a ${precio_unitario} cada uno, y pagás con un billete de ${billete}. ¿Cuánto te dan de vuelto?"

pasos:
  - "Costo total: {precio_unitario} × {cantidad} = {precio_unitario * cantidad}. Vuelto: {billete} - {precio_unitario * cantidad} = {billete - (precio_unitario * cantidad)}"

explicacion: |
  Primero se calcula el costo total, y recién después el vuelto.
```

### 12 — Problema: ahorrar con monedas de un solo valor

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  moneda: uno_de([10, 20, 50])
  meta: moneda * random(5, 30)

respuesta: meta / moneda
tipo: input
tolerancia_abs: 0

enunciado: "Querés juntar ${meta} ahorrando monedas de ${moneda}. ¿Cuántas monedas necesitás?"

explicacion: |
  Se divide la meta por el valor de cada moneda.
```

### 13 — El vuelto es lo entregado menos el precio

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El vuelto de una compra es lo que se entrega para pagar, menos el precio real."

explicacion: |
  vuelto = entregado − precio.
```

### 14 — No se puede pagar con un billete menor al precio

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vocabulario"]

variables:
  precio: random(500, 2000)
  billete: random(10, 499)

respuesta: falso
tipo: vf

enunciado: "¿Alcanza un billete de ${billete} para pagar algo que cuesta ${precio}?"

explicacion: |
  El billete entregado tiene que ser mayor o igual al precio; si no, no
  alcanza.
```

### 15 — Elegir el vuelto correcto

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])
  correcto: billete - precio

restricciones:
  - billete > precio

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - billete + precio
  - precio - billete

enunciado: "Algo cuesta ${precio} y pagás con ${billete}. ¿Cuál es el vuelto correcto?"

explicacion: |
  Las otras opciones suman en vez de restar, o restan al revés (dando un
  número negativo sin sentido acá).
```

### 16 — Completar el precio que falta

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "vuelto"]

variables:
  billete: uno_de([1000, 2000])
  vuelto: random(50, 500)

tipo: completar
enunciado: "Pagaste con ${billete} y te dieron ${vuelto} de vuelto. Completá cuánto costaba lo que compraste."
respuestas_validas:
  - billete - vuelto

explicacion: |
  precio = entregado − vuelto (la prueba de la resta, aplicada al revés).
```

### 17 — Ordenar precios de menor a mayor

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "orden"]

tipo: ordenar
enunciado: "Ordená estos precios de menor a mayor."
opciones_explicitas:
  - "$850"
  - "$120"
  - "$430"
  - "$99"
respuesta_orden: ["$99", "$120", "$430", "$850"]

explicacion: |
  Se ordenan como cualquier lista de números.
```

### 18 — Problema: total de una compra con productos distintos

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  pan: random(50, 300)
  leche: random(50, 300)
  fruta: random(50, 300)

respuesta: pan + leche + fruta
tipo: input
tolerancia_abs: 0

enunciado: "Comprás pan a ${pan}, leche a ${leche} y fruta a ${fruta}. ¿Cuánto es el total?"

explicacion: |
  Se suman los precios de todo lo comprado.
```

### 19 — Problema: completar una meta de ahorro

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  ya_ahorrado: random(500, 3000)
  meta: ya_ahorrado + random(200, 2000)

respuesta: meta - ya_ahorrado
tipo: input
tolerancia_abs: 0

enunciado: "Ya ahorraste ${ya_ahorrado} y tu meta es ${meta}. ¿Cuánto te falta ahorrar?"

explicacion: |
  Lo que falta es la meta menos lo ya ahorrado.
```

### 20 — Menos piezas es mejor: comparar dos combinaciones

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "billetes"]

variables:
  monto: uno_de([100, 200, 500]) * random(2, 6)

respuesta: verdadero
tipo: vf

enunciado: "Para juntar ${monto}, ¿conviene usar la menor cantidad posible de billetes/monedas, empezando por las denominaciones más grandes que entren?"

explicacion: |
  Es la estrategia práctica más común para armar un monto con el menor
  número de piezas.
```

### 21 — Verificar la prueba del vuelto

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "verificacion"]

variables:
  precio: random(50, 900)
  billete: uno_de([1000, 2000])
  vuelto: billete - precio

restricciones:
  - billete > precio

respuesta: (vuelto + precio == billete)
tipo: vf

enunciado: "Si pagaste ${billete} por algo de ${precio} y te dieron ${vuelto} de vuelto, ¿es cierto que ${vuelto} + ${precio} tiene que dar ${billete}?"

explicacion: |
  Es la prueba de la resta aplicada al vuelto: sumar el vuelto y el
  precio reconstruye lo entregado.
```

### 22 — Problema: repartir un vuelto entre dos personas

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "avanzado"
  tags: ["dinero", "problema"]

variables:
  precio: random(50, 500)
  billete: 1000
  vuelto: billete - precio

restricciones:
  - billete > precio
  - (vuelto - floor(vuelto / 2) * 2) == 0

respuesta: vuelto / 2
tipo: input
tolerancia_abs: 0

enunciado: "Dos amigos pagan juntos ${precio} con un billete de ${billete}, y se reparten el vuelto en partes iguales. ¿Cuánto le toca a cada uno?"

explicacion: |
  Se divide el vuelto total por la cantidad de personas.
```

### 23 — Elegir cuál combinación usa menos piezas

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "avanzado"
  tags: ["dinero", "billetes"]

variables:
  cant_grandes: random(1, 3)

respuesta: cant_grandes
tipo: mc
opciones_explicitas:
  - cant_grandes
  - cant_grandes * 10

enunciado: "Para juntar ${cant_grandes * 100}, ¿con cuántos billetes se arma más rápido: con {cant_grandes} billete(s) de $100, o con {cant_grandes * 10} billetes de $10?"

explicacion: |
  Con la misma cantidad de dinero, usar billetes más grandes siempre
  necesita menos piezas.
```

### 24 — Problema: cuánto cuesta cada unidad

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "problema"]

variables:
  cantidad: random(2, 9)
  precio_unitario: random(20, 200)
  total: cantidad * precio_unitario

respuesta: precio_unitario
tipo: input
tolerancia_abs: 0

enunciado: "Pagaste ${total} por {cantidad} unidades iguales. ¿Cuánto cuesta cada una?"

explicacion: |
  Se divide el total pagado por la cantidad de unidades.
```

### 25 — Elegir el vuelto correcto en dinero (otro caso)

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "intermedio"
  tags: ["dinero", "vuelto"]

variables:
  precio: random(200, 1900)
  billete: 2000

restricciones:
  - billete > precio

respuesta: billete - precio
tipo: input
tolerancia_abs: 0

enunciado: "Algo cuesta ${precio} y pagás con un billete de $2.000. ¿Cuánto te dan de vuelto?"

explicacion: |
  vuelto = entregado − precio, con montos más grandes.
```

### 26 — Operar con dinero (cierre)

```
metadata:
  materia: "matematicas"
  tema: "dinero"
  nivel: "basico"
  tags: ["dinero", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar, restar, multiplicar y dividir montos de dinero funciona exactamente igual que con cualquier otro número: el signo $ no cambia el procedimiento."

explicacion: |
  Es la idea central de todo el tema: el dinero es una aplicación
  práctica de la aritmética ya aprendida, no una cuenta nueva.
```
