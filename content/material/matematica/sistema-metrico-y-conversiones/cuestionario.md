# Matemática — Sistema métrico y conversiones (cuestionario, 32 preguntas VBLang)

> Tema: `M2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el sistema métrico decimal

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["sistema_metrico", "vocabulario"]

enunciado: "¿Qué es el sistema métrico decimal?"
tipo: mc
opciones_explicitas:
  - "Un sistema que organiza las unidades en múltiplos y submúltiplos de 10 de una unidad base"
  - "Un sistema que usa siempre la misma unidad para todo"
  - "Un sistema exclusivo para medir masa"
respuesta: "Un sistema que organiza las unidades en múltiplos y submúltiplos de 10 de una unidad base"

explicacion: |
  Por eso convertir siempre es multiplicar o dividir por una potencia de
  10: todo el sistema está armado alrededor del 10.
```

### 2 — Unidad base de longitud

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["sistema_metrico", "vocabulario"]

enunciado: "¿Cuál es la unidad base de LONGITUD en el sistema métrico?"
tipo: mc
opciones_explicitas:
  - "El metro"
  - "El gramo"
  - "El litro"
respuesta: "El metro"

explicacion: |
  Kilómetro, centímetro, milímetro: todas se definen a partir del metro.
```

### 3 — Unidad base de masa

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["sistema_metrico", "vocabulario"]

enunciado: "¿Cuál es la unidad base de MASA en el sistema métrico?"
tipo: mc
opciones_explicitas:
  - "El gramo"
  - "El kilogramo"
  - "El metro"
respuesta: "El gramo"

explicacion: |
  El kilogramo (1000 g) es el que más se usa en la vida diaria, pero la
  unidad base del sistema es el gramo.
```

### 4 — Unidad base de capacidad

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["sistema_metrico", "vocabulario"]

enunciado: "¿Cuál es la unidad base de CAPACIDAD en el sistema métrico?"
tipo: mc
opciones_explicitas:
  - "El litro"
  - "El metro"
  - "El gramo"
respuesta: "El litro"

explicacion: |
  Mililitro y kilolitro se definen a partir del litro.
```

### 5 — Cuántos metros hay en 1 km

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos metros hay en 1 kilómetro?"

explicacion: |
  kilo- significa "mil veces": 1 km = 1000 m.
```

### 6 — Cuántos centímetros hay en 1 metro

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: 100
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos centímetros hay en 1 metro?"

explicacion: |
  centi- significa "un centésimo": entran 100 centímetros en 1 metro.
```

### 7 — Cuántos milímetros hay en 1 metro

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos milímetros hay en 1 metro?"

explicacion: |
  mili- significa "un milésimo": entran 1000 milímetros en 1 metro.
```

### 8 — Cuántos milímetros hay en 1 centímetro

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: 10
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos milímetros hay en 1 centímetro?"

explicacion: |
  1 cm = 10 mm.
```

### 9 — Convertir km a m

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

variables:
  km: random(1, 30)

respuesta: km * 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos metros equivalen {km} km?"

pasos:
  - "{km} × 1000 = {km * 1000}"

explicacion: |
  De una unidad más grande a una más chica, se multiplica por el factor.
```

### 10 — Convertir m a km

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "longitud"]

variables:
  km_original: random(1, 30)
  m: km_original * 1000

respuesta: km_original
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos kilómetros equivalen {m} m?"

pasos:
  - "{m} ÷ 1000 = {m / 1000}"

explicacion: |
  De una unidad más chica a una más grande, se divide por el factor.
```

### 11 — Convertir m a cm

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

variables:
  m: random(1, 50)

respuesta: m * 100
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos centímetros equivalen {m} m?"

explicacion: |
  Se multiplica por 100.
```

### 12 — Convertir cm a m

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "longitud"]

variables:
  m_original: random(1, 50)
  cm: m_original * 100

respuesta: m_original
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos metros equivalen {cm} cm?"

explicacion: |
  Se divide por 100.
```

### 13 — Convertir cm a mm

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

variables:
  cm: random(1, 80)

respuesta: cm * 10
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos milímetros equivalen {cm} cm?"

explicacion: |
  Se multiplica por 10.
```

### 14 — Convertir km a cm (varios escalones)

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "avanzado"
  tags: ["conversion", "longitud"]

variables:
  km: random(1, 5)

respuesta: km * 100000
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos centímetros equivalen {km} km?"

pasos:
  - "{km} km × 1000 = {km * 1000} m. {km * 1000} m × 100 = {km * 100000} cm."

explicacion: |
  Conviene convertir en dos pasos: primero a metros, después a
  centímetros.
```

### 15 — Convertir kg a g

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "masa"]

variables:
  kg: random(1, 40)

respuesta: kg * 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos gramos equivalen {kg} kg?"

explicacion: |
  1 kg = 1000 g.
```

### 16 — Convertir g a kg

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "masa"]

variables:
  kg_original: random(1, 40)
  g: kg_original * 1000

respuesta: kg_original
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos kilogramos equivalen {g} g?"

explicacion: |
  Se divide por 1000.
```

### 17 — Convertir g a mg

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "masa"]

variables:
  g: random(1, 60)

respuesta: g * 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos miligramos equivalen {g} g?"

explicacion: |
  1 g = 1000 mg.
```

### 18 — Convertir toneladas a kg

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "masa"]

variables:
  toneladas: random(1, 12)

respuesta: toneladas * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un camión transporta {toneladas} toneladas de carga. ¿Cuántos kilogramos son?"

explicacion: |
  1 tonelada = 1000 kg.
```

### 19 — Convertir l a ml

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "capacidad"]

variables:
  l: random(1, 20)

respuesta: l * 1000
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos mililitros equivalen {l} litros?"

explicacion: |
  1 l = 1000 ml.
```

### 20 — Convertir ml a l

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "capacidad"]

variables:
  l_original: random(1, 20)
  ml: l_original * 1000

respuesta: l_original
tipo: input
tolerancia_abs: 0

enunciado: "¿A cuántos litros equivalen {ml} ml?"

explicacion: |
  Se divide por 1000.
```

### 21 — Problema: capacidad de una botella

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "capacidad", "problema"]

variables:
  botellas: random(2, 10)
  ml_por_botella: 500

respuesta: botellas * ml_por_botella / 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Hay {botellas} botellas de {ml_por_botella} ml cada una. ¿Cuántos litros son en total?"

pasos:
  - "{botellas} × {ml_por_botella} = {botellas * ml_por_botella} ml. {botellas * ml_por_botella} ÷ 1000 = {botellas * ml_por_botella / 1000} l."

explicacion: |
  Primero se calcula el total en ml, y después se convierte a litros.
```

### 22 — De más grande a más chica: multiplicar

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "vocabulario"]

enunciado: "Al convertir de una unidad MÁS GRANDE a una MÁS CHICA (por ejemplo, de km a m), ¿se multiplica o se divide?"
tipo: mc
opciones_explicitas:
  - "Se multiplica"
  - "Se divide"
respuesta: "Se multiplica"

explicacion: |
  Si la unidad de destino es más chica, entran más veces: el número
  resultado es mayor, así que se multiplica.
```

### 23 — De más chica a más grande: dividir

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "vocabulario"]

enunciado: "Al convertir de una unidad MÁS CHICA a una MÁS GRANDE (por ejemplo, de cm a m), ¿se multiplica o se divide?"
tipo: mc
opciones_explicitas:
  - "Se divide"
  - "Se multiplica"
respuesta: "Se divide"

explicacion: |
  Si la unidad de destino es más grande, entran menos veces: el número
  resultado es menor, así que se divide.
```

### 24 — 1 km = 1000 m

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: verdadero
tipo: vf

enunciado: "1 km equivale a 1000 m."

explicacion: |
  kilo- significa mil veces la unidad base.
```

### 25 — 1 kg NO son 100 g

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "masa"]

respuesta: falso
tipo: vf

enunciado: "1 kg equivale a 100 g."

explicacion: |
  Es un error común: 1 kg equivale a 1000 g, no a 100 g.
```

### 26 — 1 litro = 1000 ml

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "capacidad"]

respuesta: verdadero
tipo: vf

enunciado: "1 litro equivale a 1000 ml."

explicacion: |
  1 l = 1000 ml.
```

### 27 — 1 m NO son 10 cm

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "longitud"]

respuesta: falso
tipo: vf

enunciado: "1 metro equivale a 10 cm."

explicacion: |
  1 metro equivale a 100 cm, no a 10 cm (que sería 1 decímetro).
```

### 28 — Litro y decímetro cúbico

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "capacidad", "volumen"]

respuesta: verdadero
tipo: vf

enunciado: "1 litro ocupa exactamente el mismo espacio que 1 decímetro cúbico (1 l = 1 dm³)."

explicacion: |
  Es la relación que conecta capacidad con volumen — se retoma en
  `../volumen-y-capacidad/`.
```

### 29 — Completar: kilo- significa

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "completar"]

tipo: completar
enunciado: "Completá: el prefijo kilo- significa multiplicar la unidad base por ___."
respuestas_validas:
  - 1000

explicacion: |
  kilo- = mil veces.
```

### 30 — Completar: mili- significa

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "basico"
  tags: ["conversion", "completar"]

tipo: completar
enunciado: "Completá: el prefijo mili- significa dividir la unidad base por ___."
respuestas_validas:
  - 1000

explicacion: |
  mili- = un milésimo.
```

### 31 — Elegir la conversión correcta

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "intermedio"
  tags: ["conversion", "longitud"]

variables:
  km: random_float(1, 9, 1)
  correcto: km * 1000

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - km * 100
  - km / 1000

enunciado: "¿Cuántos metros son {km} km?"

explicacion: |
  Se multiplica por 1000, no por 100 (eso confundiría con centímetros) ni
  se divide (eso sería para ir de m a km).
```

### 32 — Ordenar longitudes de menor a mayor

```
metadata:
  materia: "matematicas"
  tema: "sistema_metrico_y_conversiones"
  nivel: "avanzado"
  tags: ["conversion", "orden", "longitud"]

tipo: ordenar
enunciado: "Ordená estas longitudes de menor a mayor: 500 mm, 2 m, 30 cm, 0,001 km."
opciones_explicitas:
  - "2 m"
  - "500 mm"
  - "0,001 km"
  - "30 cm"
respuesta_orden: ["30 cm", "500 mm", "0,001 km", "2 m"]

pasos:
  - "Todo pasado a cm: 30 cm; 500 mm = 50 cm; 0,001 km = 100 cm; 2 m = 200 cm."

explicacion: |
  Conviene pasar todas las medidas a la misma unidad antes de comparar:
  30 cm < 50 cm < 100 cm < 200 cm.
```
