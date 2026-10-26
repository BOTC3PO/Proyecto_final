# Matemática — Regla de tres directa (cuestionario, 24 preguntas VBLang)

> Tema: `N10` (mitad). Ver `teoria.md` en esta misma carpeta. Los
> problemas se arman al revés (se elige la respuesta primero y se
> construyen los datos a partir de ella) para garantizar que el resultado
> sea exacto.

---

### 1 — Resolver una regla de tres directa (abstracta)

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(2, 30)
  c: random(2, 9)

respuesta: (b * c) / a
tipo: input
tolerancia_abs: 0.01

enunciado: "Resolvé la regla de tres directa: {a} es a {b} como {c} es a x. ¿Cuánto vale x?"

pasos:
  - "x = ({b} × {c}) ÷ {a} = {b * c} ÷ {a} = {(b * c) / a}"

explicacion: |
  Se multiplican los dos términos que están cruzados con la incógnita, y
  se divide por el tercero.
```

### 2 — Problema: precio según cantidad

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  kilos_base: random(2, 6)
  precio_base: kilos_base * random(100, 500)
  kilos_nuevo: random(2, 15)

respuesta: (precio_base * kilos_nuevo) / kilos_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Si {kilos_base} kg de manzanas cuestan ${precio_base}, ¿cuánto cuestan {kilos_nuevo} kg (a precio proporcional)?"

pasos:
  - "x = ({precio_base} × {kilos_nuevo}) ÷ {kilos_base}"

explicacion: |
  Más kilos, más precio: es una relación directamente proporcional.
```

### 3 — Problema: distancia a velocidad constante

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(1, 4)
  km_base: horas_base * random(40, 100)
  horas_nueva: random(2, 10)

respuesta: (km_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {km_base} km en {horas_base} horas, a velocidad constante. ¿Cuántos km recorre en {horas_nueva} horas?"

explicacion: |
  A velocidad constante, más horas significa más distancia recorrida:
  relación directa.
```

### 4 — Problema: sueldo según horas trabajadas

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(2, 8)
  sueldo_base: horas_base * random(500, 2000)
  horas_nueva: random(3, 12)

respuesta: (sueldo_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Por {horas_base} horas de trabajo se cobran ${sueldo_base}. Manteniendo la misma paga por hora, ¿cuánto se cobra por {horas_nueva} horas?"

explicacion: |
  Más horas trabajadas, más plata cobrada: relación directa.
```

### 5 — Problema: ingredientes de una receta

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  personas_base: random(2, 6)
  huevos_base: personas_base * random(1, 3)
  personas_nueva: random(3, 20)

respuesta: (huevos_base * personas_nueva) / personas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Una receta para {personas_base} personas usa {huevos_base} huevos. Manteniendo la proporción, ¿cuántos huevos hacen falta para {personas_nueva} personas?"

explicacion: |
  Más personas, más ingredientes en la misma proporción: relación
  directa.
```

### 6 — Problema: combustible según distancia

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  km_base: random(50, 200)
  litros_base: random(4, 20)
  km_nuevo: random(100, 600)

respuesta: (litros_base * km_nuevo) / km_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto gasta {litros_base} litros cada {km_base} km. ¿Cuántos litros gasta en {km_nuevo} km?"

explicacion: |
  Más kilómetros recorridos, más combustible consumido: relación directa.
```

### 7 — Problema: conversión de moneda

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  dolares_base: random(1, 10)
  pesos_base: dolares_base * random(800, 1200)
  dolares_nuevo: random(5, 100)

respuesta: (pesos_base * dolares_nuevo) / dolares_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Si {dolares_base} dólar(es) equivalen a ${pesos_base}, ¿cuántos pesos equivalen a {dolares_nuevo} dólares (mismo tipo de cambio)?"

explicacion: |
  El tipo de cambio se mantiene constante: más dólares, más pesos en la
  misma proporción.
```

### 8 — Problema: producción a ritmo constante

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(1, 5)
  piezas_base: horas_base * random(10, 40)
  horas_nueva: random(2, 12)

respuesta: (piezas_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Una máquina produce {piezas_base} piezas en {horas_base} horas, a ritmo constante. ¿Cuántas piezas produce en {horas_nueva} horas?"

explicacion: |
  Más horas de producción a ritmo constante, más piezas: relación
  directa.
```

### 9 — Reconocer una relación directa

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Más horas trabajadas, más plata cobrada\" es un ejemplo de relación directamente proporcional."

explicacion: |
  Las dos magnitudes suben juntas: es directa.
```

### 10 — Reconocer que un caso NO es directo

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "\"Más obreros trabajando, más días tarda en terminarse la obra\" es un ejemplo de relación directamente proporcional."

explicacion: |
  Acá pasa lo contrario: más obreros, MENOS días (terminan antes) — es
  una relación inversa, no directa.
```

### 11 — Reconocer otra relación directa

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Más kilos de fruta comprados, más se paga\" es una relación directamente proporcional."

explicacion: |
  Las dos magnitudes (kilos y precio) aumentan juntas.
```

### 12 — El criterio para reconocer la regla directa

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

enunciado: "¿Cómo se reconoce que un problema es de regla de tres directa?"
tipo: mc
opciones_explicitas:
  - "Las dos magnitudes aumentan (o disminuyen) juntas"
  - "Una magnitud siempre vale el doble de la otra"
  - "Los números del problema son todos pares"
respuesta: "Las dos magnitudes aumentan (o disminuyen) juntas"

explicacion: |
  Si al aumentar una también aumenta la otra (y al disminuir una también
  disminuye la otra), es directa.
```

### 13 — Armar la proporción correcta

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto: (b * c) / a

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b * c
  - (a * b) / c

enunciado: "En la regla de tres directa {a}—{b} / {c}—x, ¿cuál es la fórmula correcta para x?"

explicacion: |
  x se calcula multiplicando los dos términos cruzados con la incógnita
  ({b} y {c}) y dividiendo por el tercero ({a}).
```

### 14 — Verificar una regla de tres resuelta (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "verificacion"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto: (b * c) / a
  error: uno_de([0, 0, 0, a, -a])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien resuelta esta regla de tres? {a} es a {b} como {c} es a {mostrado}."

explicacion: |
  Se verifica volviendo a aplicar la fórmula x = (b × c) ÷ a.
```

### 15 — Completar el término que falta

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)

tipo: completar
enunciado: "Completá: {a} es a {b} como {c} es a ___."
respuestas_validas:
  - (b * c) / a

explicacion: |
  Se aplica la fórmula de la regla de tres directa.
```

### 16 — Problema: agua para varias plantas

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  plantas_base: random(2, 6)
  litros_base: plantas_base * random(1, 3)
  plantas_nueva: random(3, 20)

respuesta: (litros_base * plantas_nueva) / plantas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Regar {plantas_base} plantas usa {litros_base} litros de agua. Manteniendo la misma cantidad por planta, ¿cuántos litros hacen falta para {plantas_nueva} plantas?"

explicacion: |
  Más plantas, más agua necesaria en la misma proporción: relación
  directa.
```

### 17 — Problema: entradas para un evento

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  entradas_base: random(2, 8)
  recaudado_base: entradas_base * random(500, 3000)
  entradas_nueva: random(5, 100)

respuesta: (recaudado_base * entradas_nueva) / entradas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Vendiendo {entradas_base} entradas se recaudaron ${recaudado_base}. Al mismo precio, ¿cuánto se recauda vendiendo {entradas_nueva} entradas?"

explicacion: |
  Más entradas vendidas, más dinero recaudado: relación directa.
```

### 18 — Elegir el resultado correcto (con distractor de regla inversa)

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "avanzado"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(2, 9)
  b: random(10, 90)
  c: random(2, 9)
  correcto_directa: (b * c) / a
  formula_inversa: (a * b) / c

restricciones:
  - correcto_directa != formula_inversa

respuesta: correcto_directa
tipo: mc
opciones_explicitas:
  - correcto_directa
  - formula_inversa

enunciado: "En una regla de tres DIRECTA, {a} es a {b} como {c} es a x. ¿Cuál de estos dos valores es x?"

explicacion: |
  La segunda opción usa la fórmula de la regla de tres inversa (que no
  aplica acá): hay que usar la fórmula directa.
```

### 19 — Problema: kilómetros y horas de un tren

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  horas_base: random(1, 3)
  km_base: horas_base * random(60, 120)
  horas_nueva: random(4, 10)

respuesta: (km_base * horas_nueva) / horas_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Un tren recorre {km_base} km en {horas_base} horas, a velocidad constante. ¿Cuántos km recorre en {horas_nueva} horas?"

explicacion: |
  Misma idea que un auto: a velocidad constante, distancia y tiempo son
  directamente proporcionales.
```

### 20 — Regla de tres con números que no son "redondos"

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "avanzado"
  tags: ["regla_de_tres_directa"]

variables:
  a: random(3, 9)
  b: random(3, 9)
  c: random(3, 9)

respuesta: (b * c) / a
tipo: input
tolerancia_abs: 0.01

enunciado: "{a} es a {b} como {c} es a x. ¿Cuánto vale x (puede no ser un número entero)?"

explicacion: |
  La regla de tres no siempre da un resultado entero: hay que aceptar
  también resultados con decimales.
```

### 21 — Ordenar resultados de distintas reglas de tres

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "orden"]

tipo: ordenar
enunciado: "Resolvé estas tres reglas de tres directas y ordenalas de menor a mayor resultado."
opciones_explicitas:
  - "2 es a 10 como 5 es a x"
  - "4 es a 8 como 3 es a x"
  - "3 es a 30 como 1 es a x"
respuesta_orden: ["3 es a 30 como 1 es a x", "4 es a 8 como 3 es a x", "2 es a 10 como 5 es a x"]

explicacion: |
  Primero se resuelve cada una (x=10, x=6, x=25) y recién ahí se ordenan.
```

### 22 — Problema: pintura para paredes

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "problema"]

variables:
  m2_base: random(5, 20)
  litros_base: random(1, 8)
  m2_nuevo: random(20, 100)

respuesta: (litros_base * m2_nuevo) / m2_base
tipo: input
tolerancia_abs: 0.01

enunciado: "Se necesitan {litros_base} litros de pintura para {m2_base} m². ¿Cuántos litros hacen falta para {m2_nuevo} m²?"

explicacion: |
  Más superficie a pintar, más pintura necesaria en la misma proporción.
```

### 23 — Reconocer relación directa en un gráfico conceptual

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "intermedio"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una relación directamente proporcional, si se duplica una magnitud, la otra también se duplica."

explicacion: |
  Es la esencia de la proporcionalidad directa: la razón entre las dos
  magnitudes se mantiene siempre constante.
```

### 24 — Qué es la regla de tres directa (cierre)

```
metadata:
  materia: "matematicas"
  tema: "regla_de_tres_directa"
  nivel: "basico"
  tags: ["regla_de_tres_directa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de tres directa sirve para encontrar un valor desconocido cuando dos magnitudes son directamente proporcionales."

explicacion: |
  Es la idea central de todo el tema: aplicar la propiedad fundamental de
  la proporción a un problema concreto.
```
