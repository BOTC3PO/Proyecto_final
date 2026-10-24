# Oficios — Cálculo de jardinería (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Superficie rectangular

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "basico"
  tags: ["calculo"]

variables:
  a: random(3, 20)
  b: random(3, 20)

respuesta: a * b
tipo: input
tolerancia_abs: 0.1
unidad: "m2"

enunciado: "Un terreno rectangular mide {a} m por {b} m. ¿Cuántos metros cuadrados tiene?"

pasos:
  - "Superficie = base × altura"

explicacion: |
  Se multiplica base por altura.
```

### 2 — Superficie circular

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  r: random(1, 6)

respuesta: redondear(pi * r ^ 2, 1)
tipo: input
tolerancia_abs: 0.2
unidad: "m2"

enunciado: "Un cantero circular tiene {r} m de radio. ¿Cuántos metros cuadrados tiene? (redondeá a un decimal)"

pasos:
  - "Superficie = pi × radio al cuadrado"

explicacion: |
  Usá pi = 3,14159.
```

### 3 — Superficie triangular

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  b: random(2, 12)
  h: random(2, 12)

respuesta: b * h / 2
tipo: input
tolerancia_abs: 0.1
unidad: "m2"

enunciado: "Un cantero triangular tiene base {b} m y altura {h} m. ¿Cuántos metros cuadrados tiene?"

pasos:
  - "Superficie = base × altura / 2"

explicacion: |
  La mitad del rectángulo.
```

### 4 — Volumen de cantero

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "basico"
  tags: ["calculo"]

variables:
  a: random(2, 8)
  b: random(1, 4)
  p: uno_de([0.2, 0.25, 0.3, 0.4])

respuesta: redondear(a * b * p, 2)
tipo: input
tolerancia_abs: 0.02
unidad: "m3"

enunciado: "Un cantero de {a} m por {b} m se rellena hasta {p} m de profundidad. ¿Cuántos metros cúbicos de tierra hacen falta?"

pasos:
  - "Volumen = largo × ancho × profundidad"

explicacion: |
  Todas las medidas en metros.
```

### 5 — Litros de sustrato

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  v: random(1, 5)

respuesta: v * 1000
tipo: input
tolerancia_abs: 1
unidad: "L"

enunciado: "Si necesitás {v} m3 de sustrato, ¿a cuántos litros equivale?"

pasos:
  - "1 m3 = 1.000 litros"

explicacion: |
  Es una conversión directa.
```

### 6 — Volumen con asentamiento

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  v: random(2, 8)
  extra: uno_de([10, 15])

respuesta: redondear(v * (1 + extra / 100), 2)
tipo: input
tolerancia_abs: 0.05
unidad: "m3"

enunciado: "El cálculo da {v} m3 de tierra y querés pedir un {extra}% más por el asentamiento. ¿Cuántos m3 pedís?"

pasos:
  - "Pedido = volumen × (1 + porcentaje / 100)"

explicacion: |
  Los materiales sueltos se asientan.
```

### 7 — Dosis de nitrógeno

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  nut: random(3, 8)
  pct: uno_de([10, 20, 25])

respuesta: redondear(nut * 100 / pct, 1)
tipo: input
tolerancia_abs: 0.2
unidad: "g"

enunciado: "Querés aplicar {nut} g de nitrógeno por m2 y el fertilizante tiene {pct}% de nitrógeno. ¿Cuántos gramos de producto por m2?"

pasos:
  - "Producto = nutriente / (porcentaje / 100)"

explicacion: |
  Se divide por la proporción.
```

### 8 — Producto total

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  sup: random(30, 150)
  nut: random(2, 6)
  pct: uno_de([10, 20, 25])

respuesta: redondear(sup * nut * 100 / pct, 0)
tipo: input
tolerancia_abs: 1
unidad: "g"

enunciado: "Para {sup} m2 con una dosis de {nut} g de nitrógeno por m2 y un fertilizante al {pct}% de nitrógeno, ¿cuántos gramos de producto necesitás en total?"

pasos:
  - "Nitrógeno total = superficie × dosis"
  - "Producto = nitrógeno / (porcentaje / 100)"

explicacion: |
  Se calcula primero el nutriente total.
```

### 9 — Litros de gotero

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "basico"
  tags: ["calculo"]

variables:
  c: uno_de([2, 4, 8])
  h: random(1, 5)

respuesta: c * h
tipo: input
tolerancia_abs: 0.1
unidad: "L"

enunciado: "Un gotero entrega {c} litros por hora y funciona {h} horas. ¿Cuántos litros entrega?"

pasos:
  - "Litros = caudal × horas"

explicacion: |
  Es una multiplicación.
```

### 10 — Cantidad de goteros

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  fuente: uno_de([300, 600, 900, 1200])
  c: uno_de([2, 4, 8])

respuesta: floor(fuente / c)
tipo: input
tolerancia_abs: 0

enunciado: "La fuente da {fuente} L/h y cada gotero entrega {c} L/h. ¿Cuántos goteros como máximo?"

pasos:
  - "Cantidad = caudal de la fuente / caudal de cada gotero"

explicacion: |
  En la práctica se deja un margen.
```

### 11 — Plantas por m2

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  d: uno_de([0.2, 0.25, 0.5])

respuesta: redondear(1 / (d * d), 0)
tipo: input
tolerancia_abs: 1

enunciado: "Si plantás en grilla cuadrada a {d} m de distancia, ¿cuántas plantas entran por m2?"

pasos:
  - "Plantas = 1 / distancia al cuadrado"

explicacion: |
  Redondeá al entero más cercano.
```

### 12 — Plantas en un cantero

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  sup: random(2, 12)
  d: uno_de([0.25, 0.5])

respuesta: redondear(sup / (d * d), 0)
tipo: input
tolerancia_abs: 1

enunciado: "Un cantero de {sup} m2 se planta en grilla cuadrada a {d} m. ¿Cuántas plantas hacen falta?"

pasos:
  - "Plantas = superficie / distancia al cuadrado"

explicacion: |
  Se multiplica por la cantidad por m2.
```

### 13 — Semilla de césped

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  sup: random(40, 200)
  dosis: uno_de([30, 40, 50])

respuesta: sup * dosis
tipo: input
tolerancia_abs: 1
unidad: "g"

enunciado: "Para sembrar {sup} m2 con una dosis de {dosis} g de semilla por m2, ¿cuántos gramos hacen falta?"

pasos:
  - "Semilla = superficie × dosis"

explicacion: |
  La dosis la indica el envase.
```

### 14 — Tiempo de aspersión

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  tasa: uno_de([6, 10, 12, 15])
  lam: uno_de([3, 5, 6])

respuesta: redondear(lam * 60 / tasa, 0)
tipo: input
tolerancia_abs: 1
unidad: "min"

enunciado: "Un aspersor aplica {tasa} mm por hora. ¿Cuántos minutos debe funcionar para aplicar {lam} mm?"

pasos:
  - "Minutos = lámina / tasa × 60"

explicacion: |
  Un mm equivale a un litro por m2.
```

### 15 — Mezclar unidades

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "basico"
  tags: ["tema"]

enunciado: "¿Cuál es un error frecuente al calcular?"
tipo: mc
opciones_explicitas:
  - "Mezclar centímetros con metros"
  - "Dibujar el plano"
  - "Medir dos veces"
respuesta: "Mezclar centímetros con metros"

explicacion: |
  Hay que pasar todo a la misma unidad.
```

### 16 — Restar superficies

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "intermedio"
  tags: ["tema"]

enunciado: "Si hay una pileta dentro del terreno, ¿qué se hace con su superficie?"
tipo: mc
opciones_explicitas:
  - "Se resta de la superficie a cultivar"
  - "Se suma"
  - "Se ignora"
respuesta: "Se resta de la superficie a cultivar"

explicacion: |
  Solo se calcula lo que se cultiva.
```

### 17 — Asentamiento

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "intermedio"
  tags: ["tema"]

respuesta: verdadero
tipo: vf

enunciado: "Los materiales sueltos se asientan, por eso se suele pedir algo más."

explicacion: |
  Entre 10 y 15 por ciento más.
```

### 18 — Dosis y envase

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "basico"
  tags: ["tema"]

respuesta: verdadero
tipo: vf

enunciado: "Conviene contrastar el cálculo de dosis con lo que indica el envase."

explicacion: |
  Evita errores.
```

### 19 — Presupuesto

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "basico"
  tags: ["tema"]

enunciado: "¿Qué incluye un presupuesto?"
tipo: mc
opciones_explicitas:
  - "Materiales, mano de obra, transporte y margen"
  - "Solo los materiales"
  - "Solo la mano de obra"
respuesta: "Materiales, mano de obra, transporte y margen"

explicacion: |
  Con vigencia de precios.
```

### 20 — Área del círculo

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "intermedio"
  tags: ["tema"]

enunciado: "¿Cuál es la fórmula del área de un círculo?"
tipo: mc
opciones_explicitas:
  - "pi por el radio al cuadrado"
  - "2 por pi por el radio"
  - "radio por altura"
respuesta: "pi por el radio al cuadrado"

explicacion: |
  La segunda es el perímetro.
```

### 21 — Metro cúbico

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "basico"
  tags: ["tema"]

tipo: completar
enunciado: "Un metro cúbico equivale a 1.000 ___."
respuestas_validas:
  - "litros"

explicacion: |
  Sirve para convertir volúmenes.
```

### 22 — Lámina

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "avanzado"
  tags: ["tema"]

respuesta: verdadero
tipo: vf

enunciado: "Un milímetro de lámina de agua equivale a un litro por metro cuadrado."

explicacion: |
  Es una equivalencia útil.
```

### 23 — Más no es mejor

```
metadata:
  materia: "jardinero_paisajista"
  tema: "calculo_de_jardineria"
  nivel: "basico"
  tags: ["tema"]

enunciado: "¿Por qué no se pasa de la dosis indicada?"
tipo: mc
opciones_explicitas:
  - "Quema y contamina"
  - "Sale más barato"
  - "Ahorra tiempo"
respuesta: "Quema y contamina"

explicacion: |
  El exceso daña la planta y el ambiente.
```
