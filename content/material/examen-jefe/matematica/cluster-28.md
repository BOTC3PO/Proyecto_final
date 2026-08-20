# Examen jefe — Maestro de las conversiones y series

> Logro #79. Resolviste el parcial integrando sistemas de ecuaciones, sucesiones y conversiones métricas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **152 preguntas totales** en 5/5 secciones.

---

## Sección: sistema-metrico-y-conversiones (32 preguntas)

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

## Sección: sistemas-dos-ecuaciones (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(2, 5)
  x_sol: random(1, 15)
  k: random(1, 10)
  y_sol: m * x_sol + k
  a: random(2, 6)
  c: a * x_sol + y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; {a}x + y = {c}. ¿Cuánto vale x?"

pasos:
  - "Reemplazar y en la segunda ecuación: {a}x + ({m}x + {k}) = {c}"
  - "Resolver: {a + m}x + {k} = {c} → x = {(c - k) / (a + m)}"

explicacion: |
  Se reemplaza la y ya despejada en la otra ecuación, y queda una
  ecuación de una sola incógnita.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(2, 5)
  x_sol: random(1, 15)
  k: random(1, 10)
  y_sol: m * x_sol + k
  a: random(2, 6)
  c: a * x_sol + y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; {a}x + y = {c}. ¿Cuánto vale y?"

explicacion: |
  Una vez hallado x, se reemplaza en y = {m}x + {k} para obtener y.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(1, 4)
  x_sol: random(1, 20)
  k: random(-10, 10)
  y_sol: m * x_sol + k
  b: random(2, 6)
  c: random(1, 5) * x_sol + b * y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; x + {b}y = {c}. ¿Cuánto vale x?"

explicacion: |
  Reemplazar y = {m}x + {k} en la segunda ecuación reduce el sistema a
  una ecuación de una sola incógnita.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["sustitucion"]

variables:
  m: random(1, 4)
  x_sol: random(1, 20)
  k: random(-10, 10)
  y_sol: m * x_sol + k
  b: random(2, 6)
  c: random(1, 5) * x_sol + b * y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por sustitución: y = {m}x + {k}; x + {b}y = {c}. ¿Cuánto vale y?"

explicacion: |
  y = {m}x + {k}, con el x ya encontrado.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["igualacion"]

variables:
  m1: random(2, 6)
  x_sol: random(1, 15)
  k1: random(1, 15)
  m2: random(1, 4)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale x?"

pasos:
  - "Igualar: {m1}x + {k1} = {m2}x + {k2}"
  - "Resolver: {m1 - m2}x = {k2 - k1} → x = {(k2 - k1) / (m1 - m2)}"

explicacion: |
  Como las dos ecuaciones ya tienen y despejada, se igualan directamente
  entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["igualacion"]

variables:
  m1: random(2, 6)
  x_sol: random(1, 15)
  k1: random(1, 15)
  m2: random(1, 4)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale y?"

explicacion: |
  Con x ya encontrado, se reemplaza en cualquiera de las dos ecuaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["igualacion"]

variables:
  m1: random(1, 3)
  x_sol: random(1, 20)
  k1: random(-15, 15)
  m2: random(4, 8)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale x?"

explicacion: |
  {m1}x + {k1} = {m2}x + {k2}, y se despeja x igual que cualquier
  ecuación de primer grado.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["igualacion"]

variables:
  m1: random(1, 3)
  x_sol: random(1, 20)
  k1: random(-15, 15)
  m2: random(4, 8)
  y_sol: m1 * x_sol + k1
  k2: y_sol - m2 * x_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé el sistema por igualación: y = {m1}x + {k1}; y = {m2}x + {k2}. ¿Cuánto vale y?"

explicacion: |
  y = {m1}x + {k1}, con el x ya encontrado.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(2, 8)
  c1: a1 * x_sol + y_sol
  a2: random(2, 8)
  c2: a2 * x_sol - y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + y = {c1}; {a2}x − y = {c2}. ¿Cuánto vale x?"

pasos:
  - "Los coeficientes de y ya son opuestos (+1 y −1): sumar las dos ecuaciones"
  - "{a1 + a2}x = {c1 + c2} → x = {(c1 + c2) / (a1 + a2)}"

explicacion: |
  Sumando las dos ecuaciones completas, la y se cancela.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(2, 8)
  c1: a1 * x_sol + y_sol
  a2: random(2, 8)
  c2: a2 * x_sol - y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + y = {c1}; {a2}x − y = {c2}. ¿Cuánto vale y?"

explicacion: |
  Con x ya encontrado, se reemplaza en cualquiera de las dos ecuaciones
  para hallar y.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(2, 6)
  b1: random(2, 6)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 6)
  c2: a2 * x_sol + b1 * y_sol - y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b1 - 1}y = {c2}. ¿Cuánto vale x?"

pasos:
  - "Restar la segunda ecuación a la primera para que los coeficientes de y (que difieren en exactamente 1) se reduzcan a uno solo: {a1 - a2}x + y = {c1 - c2}"

explicacion: |
  Cuando los coeficientes de una letra no son iguales ni opuestos, se
  resta directamente si eso ya cancela parte del trabajo, o se multiplica
  una ecuación entera para emparejarlos.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(2, 6)
  b1: random(2, 6)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 6)
  c2: a2 * x_sol + b1 * y_sol - y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b1 - 1}y = {c2}. ¿Cuánto vale y?"

explicacion: |
  Con x ya encontrado, se reemplaza en cualquiera de las dos ecuaciones
  para hallar y.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  a1: random(2, 5)
  b1: random(2, 5)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 5)
  b2: random(2, 5)
  c2: a2 * x_sol + b2 * y_sol

restricciones:
  - (a1 * b2 - a2 * b1) != 0

respuesta: (c1 * b2 - c2 * b1) / (a1 * b2 - a2 * b1)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}. ¿Cuánto vale x?"

pasos:
  - "Multiplicar la primera por {b2} y la segunda por {b1} para igualar los coeficientes de y, y restar"

explicacion: |
  Cuando ningún coeficiente coincide directamente, se multiplican las dos
  ecuaciones enteras por los números que hagan falta antes de sumar o
  restar.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["eliminacion"]

variables:
  x_sol: random(1, 12)
  y_sol: random(1, 12)
  a1: random(2, 5)
  b1: random(2, 5)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(2, 5)
  b2: random(2, 5)
  c2: a2 * x_sol + b2 * y_sol

restricciones:
  - (a1 * b2 - a2 * b1) != 0

respuesta: (a1 * c2 - a2 * c1) / (a1 * b2 - a2 * b1)
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé por eliminación: {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}. ¿Cuánto vale y?"

explicacion: |
  Se despeja y con el mismo método, eliminando ahora la x.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  adulto_sol: random(5, 20)
  nino_sol: random(2, 10)
  na: random(2, 5)
  nn: random(2, 5)
  total1: na * adulto_sol + nn * nino_sol
  na2: random(1, 4)
  nn2: random(1, 4)
  total2: na2 * adulto_sol + nn2 * nino_sol

restricciones:
  - (na * nn2 - na2 * nn) != 0

respuesta: adulto_sol
tipo: input
tolerancia_abs: 0

enunciado: "{na} entradas de adulto y {nn} de niño cuestan {total1} en total. {na2} entradas de adulto y {nn2} de niño cuestan {total2}. ¿Cuánto cuesta una entrada de adulto?"

pasos:
  - "Plantear el sistema: {na}·a + {nn}·n = {total1}; {na2}·a + {nn2}·n = {total2}, y resolver por eliminación"

explicacion: |
  Mismo procedimiento de eliminación, aplicado a un problema con nombres
  en vez de x e y.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  adulto_sol: random(5, 20)
  nino_sol: random(2, 10)
  na: random(2, 5)
  nn: random(2, 5)
  total1: na * adulto_sol + nn * nino_sol
  na2: random(1, 4)
  nn2: random(1, 4)
  total2: na2 * adulto_sol + nn2 * nino_sol

restricciones:
  - (na * nn2 - na2 * nn) != 0

respuesta: nino_sol
tipo: input
tolerancia_abs: 0

enunciado: "{na} entradas de adulto y {nn} de niño cuestan {total1} en total. {na2} entradas de adulto y {nn2} de niño cuestan {total2}. ¿Cuánto cuesta una entrada de niño?"

explicacion: |
  Una vez hallado el precio de adulto, se reemplaza en cualquiera de las
  dos ecuaciones para despejar el de niño.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["problema"]

variables:
  x_sol: random(5, 30)
  y_sol: random(1, 20)
  suma: x_sol + y_sol
  resta: x_sol - y_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "La suma de dos números es {suma} y su diferencia es {resta}. ¿Cuál es el número mayor?"

pasos:
  - "x + y = {suma}; x − y = {resta}. Sumando las dos: 2x = {suma + resta} → x = {(suma + resta) / 2}"

explicacion: |
  Es el caso más directo de eliminación: los coeficientes de y ya son
  opuestos.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["problema"]

variables:
  x_sol: random(5, 30)
  y_sol: random(1, 20)
  suma: x_sol + y_sol
  resta: x_sol - y_sol

respuesta: y_sol
tipo: input
tolerancia_abs: 0

enunciado: "La suma de dos números es {suma} y su diferencia es {resta}. ¿Cuál es el número menor?"

explicacion: |
  Restando las dos ecuaciones en vez de sumarlas se cancela la x: 2y =
  {suma - resta} → y = {(suma - resta) / 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(1, 8)
  b1: random(1, 8)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 8)
  b2: random(1, 8)
  c2: a2 * x_sol + b2 * y_sol
  error_x: uno_de([0, 0, 1, -1])
  error_y: uno_de([0, 0, 1, -1])
  val_x: x_sol + error_x
  val_y: y_sol + error_y

respuesta: (((a1 * val_x + b1 * val_y - c1) ^ 2) + ((a2 * val_x + b2 * val_y - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({val_x}, {val_y}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Tiene que cumplir las DOS ecuaciones a la vez — si falla en cualquiera
  de las dos, no es solución del sistema.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(1, 8)
  b1: random(1, 8)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 8)
  b2: random(1, 8)
  c2: a2 * x_sol + b2 * y_sol
  error_x: uno_de([0, 0, 2, -2])
  error_y: uno_de([0, 0, 1, -1])
  val_x: x_sol + error_x
  val_y: y_sol + error_y

respuesta: (((a1 * val_x + b1 * val_y - c1) ^ 2) + ((a2 * val_x + b2 * val_y - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({val_x}, {val_y}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Se reemplaza x e y en las dos ecuaciones y se comprueba que las dos
  dan verdadero.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 15)
  y_sol: random(1, 15)
  a1: random(1, 6)
  b1: random(1, 6)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 6)
  b2: random(1, 6)
  c2: a2 * x_sol + b2 * y_sol
  val_x: x_sol
  val_y: y_sol + 1

respuesta: (((a1 * val_x + b1 * val_y - c1) ^ 2) + ((a2 * val_x + b2 * val_y - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({val_x}, {val_y}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Cumplir sólo una de las dos ecuaciones no alcanza: acá x sí sirve, pero
  y está corrida en 1, así que no es solución del sistema completo.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x_sol: random(1, 20)
  y_sol: random(1, 20)
  a1: random(1, 8)
  b1: random(1, 8)
  c1: a1 * x_sol + b1 * y_sol
  a2: random(1, 8)
  b2: random(1, 8)
  c2: a2 * x_sol + b2 * y_sol

respuesta: (((a1 * x_sol + b1 * y_sol - c1) ^ 2) + ((a2 * x_sol + b2 * y_sol - c2) ^ 2)) == 0
tipo: vf

enunciado: "¿(x, y) = ({x_sol}, {y_sol}) es solución del sistema {a1}x + {b1}y = {c1}; {a2}x + {b2}y = {c2}?"

explicacion: |
  Es exactamente el par con el que se armó el sistema, así que cumple
  las dos ecuaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "problema", "verdadero_falso"]

variables:
  x_sol: random(5, 25)
  y_sol: random(1, 15)
  suma: x_sol + y_sol
  resta: x_sol - y_sol
  error: uno_de([0, 0, 3, -3])
  val_x: x_sol + error
  val_y: suma - val_x

respuesta: ((val_x - val_y - resta) ^ 2) == 0
tipo: vf

enunciado: "La suma de dos números es {suma} y su diferencia es {resta}. ¿Es correcto que los números sean {val_x} y {val_y}?"

explicacion: |
  Los dos números tienen que cumplir a la vez que suman {suma} y que
  restan {resta}.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La solución de un sistema de dos ecuaciones es cualquier par (x, y) que cumpla al menos una de las dos ecuaciones."

explicacion: |
  Tiene que cumplir LAS DOS al mismo tiempo, no alcanza con una sola.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "casos_especiales", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si las dos ecuaciones de un sistema representan rectas paralelas, el sistema no tiene solución."

explicacion: |
  Dos rectas paralelas nunca se cruzan, así que no hay ningún par (x, y)
  que cumpla las dos ecuaciones a la vez.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "casos_especiales", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si las dos ecuaciones de un sistema son, en el fondo, la misma recta escrita de otra forma, hay infinitas soluciones."

explicacion: |
  Cualquier punto de esa recta cumple las dos ecuaciones a la vez, porque
  son la misma condición repetida.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "basico"
  tags: ["concepto", "sustitucion", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En el método de sustitución, conviene reemplazar la variable despejada en la misma ecuación de la que se despejó."

explicacion: |
  Hay que reemplazarla en la OTRA ecuación — en la misma no aporta
  información nueva (queda una igualdad siempre verdadera, tipo 0=0).
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["metodo", "opcion_multiple"]

respuesta: "Sustitución"
tipo: mc
opciones_explicitas:
  - "Sustitución"
  - "Igualación"
  - "Eliminación"

enunciado: "Para el sistema y = 4x + 3; 2x + y = 15, ¿qué método es más directo?"

explicacion: |
  Ya hay una variable despejada en una de las dos ecuaciones — conviene
  sustituirla directamente en la otra.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["metodo", "opcion_multiple"]

respuesta: "Igualación"
tipo: mc
opciones_explicitas:
  - "Sustitución"
  - "Igualación"
  - "Eliminación"

enunciado: "Para el sistema y = 3x − 1; y = x + 5, ¿qué método es más directo?"

explicacion: |
  Las dos ecuaciones ya tienen y despejada — conviene igualarlas
  directamente entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "sistemas_dos_ecuaciones"
  nivel: "intermedio"
  tags: ["metodo", "opcion_multiple"]

respuesta: "Eliminación"
tipo: mc
opciones_explicitas:
  - "Sustitución"
  - "Igualación"
  - "Eliminación"

enunciado: "Para el sistema 3x + 2y = 16; 3x − 2y = 4, ¿qué método es más directo?"

explicacion: |
  Ninguna variable está despejada, pero los coeficientes de y ya son
  opuestos — sumando las dos ecuaciones se cancela directamente.
```

## Sección: sucesiones-aritmeticas (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

enunciado: "¿Qué es una sucesión aritmética?"
tipo: mc
opciones_explicitas:
  - "Una lista de números donde siempre se suma la misma cantidad para pasar al siguiente"
  - "Una lista de números en cualquier orden"
  - "Una lista donde cada número es el doble del anterior"
respuesta: "Una lista de números donde siempre se suma la misma cantidad para pasar al siguiente"

explicacion: |
  Esa cantidad fija que se suma se llama diferencia común (d).
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(4, 10)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale el término {n} (aₙ)?"

pasos:
  - "aₙ = a₁ + (n−1)×d = {a1} + ({n}−1)×{d} = {a1 + (n - 1) * d}"

explicacion: |
  Se aplica la fórmula del término general, sin tener que sumar la
  diferencia término por término.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 15)
  n: random(15, 40)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale a{n}?"

explicacion: |
  La fórmula sirve igual (y ahorra mucho más trabajo) para términos
  lejanos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(50, 200)
  d: -random(2, 10)
  n: random(4, 10)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d} (decreciente), ¿cuánto vale a{n}?"

pasos:
  - "aₙ = {a1} + ({n}−1)×({d}) = {a1 + (n - 1) * d}"

explicacion: |
  Con d negativo, la fórmula funciona igual: el término va bajando.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 30)
  d: random(2, 15)
  a2: a1 + d

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética, dos términos consecutivos son {a1} y {a2}. ¿Cuál es la diferencia común (d)?"

explicacion: |
  La diferencia es, directamente, el término siguiente menos el anterior.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(3, 8)
  an: a1 + (n - 1) * d

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética, a₁ = {a1} y a{n} = {an}. ¿Cuál es la diferencia común?"

pasos:
  - "d = (a{n} − a₁) ÷ (n−1) = ({an} − {a1}) ÷ ({n}−1) = {(an - a1) / (n - 1)}"

explicacion: |
  Se despeja d de la fórmula del término general.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 30)
  d: random(2, 10)
  n: random(3, 8)
  an: a1 + (n - 1) * d

respuesta: a1
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con d = {d}, el término {n} vale {an} (a{n} = {an}). ¿Cuál es a₁?"

pasos:
  - "a₁ = a{n} − (n−1)×d = {an} − ({n}−1)×{d} = {an - (n - 1) * d}"

explicacion: |
  Se despeja a₁ de la fórmula del término general.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  a2: a1 + d
  a3: a2 + d
  a4: a3 + d

respuesta: verdadero
tipo: vf

enunciado: "¿Es aritmética la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  La diferencia entre cada par de términos consecutivos es siempre {d}.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  a2: a1 + d
  a3: a2 + d
  a4: a3 + d + 1

respuesta: falso
tipo: vf

enunciado: "¿Es aritmética la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  La diferencia entre los primeros pares es {d}, pero entre los últimos
  dos términos cambia: no es una diferencia constante.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(4, 10)
  correcto: a1 + (n - 1) * d

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a1 + n * d
  - a1 * n * d

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale a{n}?"

explicacion: |
  El error común es multiplicar por n en vez de (n−1): el primer término
  no suma ninguna diferencia todavía.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "verificacion"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(4, 10)
  correcto: a1 + (n - 1) * d
  error: uno_de([0, 0, 0, d, -d])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "En una sucesión con a₁ = {a1} y d = {d}, ¿está bien calculado que a{n} = {mostrado}?"

explicacion: |
  Se vuelve a aplicar la fórmula y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  a2: a1 + d
  a4: a1 + 3 * d

tipo: completar
enunciado: "Completá el término que falta: {a1}, {a2}, ___, {a4}."
respuestas_validas:
  - a1 + 2 * d

explicacion: |
  El término que falta sigue el mismo salto d que el resto de la
  sucesión.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 30)
  d: random(2, 15)
  a2: a1 + d

tipo: completar
enunciado: "En la sucesión {a1}, {a2}, ..., completá la diferencia común (d)."
respuestas_validas:
  - d

explicacion: |
  d es la distancia entre dos términos consecutivos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  inicial: random(500, 2000)
  ahorro_mensual: random(200, 1000)
  meses: random(4, 12)

respuesta: inicial + (meses - 1) * ahorro_mensual
tipo: input
tolerancia_abs: 0

enunciado: "El primer mes ahorraste ${inicial}, y cada mes siguiente ahorrás ${ahorro_mensual} más que el mes anterior (en total, no adicional). ¿Cuánto ahorraste en el mes {meses}?"

explicacion: |
  Es una sucesión aritmética: a₁ = {inicial}, d = {ahorro_mensual}.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  primera_fila: random(10, 30)
  incremento: random(2, 8)
  fila: random(5, 15)

respuesta: primera_fila + (fila - 1) * incremento
tipo: input
tolerancia_abs: 0

enunciado: "La primera fila de un teatro tiene {primera_fila} asientos, y cada fila siguiente tiene {incremento} asientos más que la anterior. ¿Cuántos asientos tiene la fila {fila}?"

explicacion: |
  Es una sucesión aritmética aplicada a la cantidad de asientos por fila.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  inicial: random(15, 30)
  baja_por_hora: random(1, 4)
  hora: random(4, 10)

respuesta: inicial - (hora - 1) * baja_por_hora
tipo: input
tolerancia_abs: 0

enunciado: "A la hora 1, la temperatura era {inicial}°C, y baja {baja_por_hora} grados cada hora. ¿Qué temperatura hay en la hora {hora} (puede dar negativa)?"

explicacion: |
  Es una sucesión aritmética con diferencia negativa (decreciente).
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una sucesión aritmética, la diferencia entre cualquier par de términos consecutivos es siempre la misma."

explicacion: |
  Es la propia definición de sucesión aritmética.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "casos_especiales"]

respuesta: verdadero
tipo: vf

enunciado: "Si la diferencia común (d) de una sucesión aritmética es 0, todos los términos de la sucesión son iguales."

explicacion: |
  Sumar 0 en cada paso no cambia nada: la sucesión queda constante.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "casos_especiales"]

variables:
  a1: random(1, 999)
  n: random(2, 50)

respuesta: a1
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = 0, ¿cuánto vale a{n}?"

explicacion: |
  Con d = 0, todos los términos son iguales al primero.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(3, 12)
  an: a1 + (n - 1) * d

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, el término {an} (a? = {an}), ¿en qué posición está?"

pasos:
  - "n = (a? − a₁) ÷ d + 1 = ({an} − {a1}) ÷ {d} + 1 = {(an - a1) / d + 1}"

explicacion: |
  Se despeja n de la fórmula del término general.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  a1: random(3, 10)
  d: random(2, 6)
  n: random(4, 10)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "La figura 1 de un patrón usa {a1} baldosas, y cada figura siguiente usa {d} baldosas más que la anterior. ¿Cuántas baldosas usa la figura {n}?"

explicacion: |
  Los patrones de figuras que crecen de a lo mismo son sucesiones
  aritméticas.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas", "comparacion"]

variables:
  d1: random(2, 8)
  d2: random(2, 8)

restricciones:
  - d1 != d2

respuesta: (d1 > d2)
tipo: vf

enunciado: "Una sucesión aritmética tiene d = {d1} y otra tiene d = {d2}. ¿Crece más rápido la primera?"

explicacion: |
  A mayor diferencia común, más rápido crece la sucesión, sin importar
  cuál sea el primer término.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas", "orden"]

tipo: ordenar
enunciado: "Calculá el término 5 (a₅) de cada sucesión aritmética y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "a₁=1, d=5"
  - "a₁=10, d=1"
  - "a₁=5, d=3"
  - "a₁=0, d=4"
respuesta_orden: ["a₁=10, d=1", "a₁=0, d=4", "a₁=5, d=3", "a₁=1, d=5"]

explicacion: |
  a₅ = a₁ + 4d en cada caso: 14, 16, 17, 21 — hay que calcular cada una
  antes de poder ordenarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: -random(1, 20)
  d: random(2, 10)
  n: random(3, 8)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale a{n}?"

explicacion: |
  La fórmula funciona igual aunque el primer término sea negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

enunciado: "¿Cuál es la fórmula del término general de una sucesión aritmética?"
tipo: mc
opciones_explicitas:
  - "aₙ = a₁ + (n − 1) × d"
  - "aₙ = a₁ × n × d"
  - "aₙ = a₁ + n × d"
respuesta: "aₙ = a₁ + (n − 1) × d"

explicacion: |
  El (n−1) es clave: el primer término no suma ninguna diferencia
  todavía.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una sucesión aritmética es una lista de números donde cada uno se obtiene sumando siempre la misma diferencia al anterior."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: sucesiones-y-series (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

enunciado: "¿Qué es una serie?"
tipo: mc
opciones_explicitas:
  - "La suma de los términos de una sucesión"
  - "Otra forma de llamar a una sucesión"
  - "El primer término de una sucesión"
respuesta: "La suma de los términos de una sucesión"

explicacion: |
  Una serie toma los términos de una sucesión y los suma todos juntos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series"]

variables:
  n: random(4, 20)
  a1: random(1, 20)
  d: random(2, 10)
  an: a1 + (n - 1) * d

respuesta: n * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión aritmética con a₁ = {a1} y a{n} = {an}."

pasos:
  - "Sₙ = n × (a₁+aₙ) ÷ 2 = {n} × ({a1}+{an}) ÷ 2 = {n * (a1 + an) / 2}"

explicacion: |
  Es el promedio del primer y último término, multiplicado por la
  cantidad de términos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(5, 15)
  an: a1 + (n - 1) * d

respuesta: n * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión aritmética con a₁ = {a1} y d = {d}."

pasos:
  - "Primero el último término: a{n} = {a1} + ({n}-1)×{d} = {an}. Después la suma: {n} × ({a1}+{an}) ÷ 2 = {n * (a1 + an) / 2}"

explicacion: |
  Primero hay que hallar el último término con la fórmula del término
  general, y recién después aplicar la fórmula de la suma.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "casos_especiales"]

variables:
  n: random(5, 100)

respuesta: n * (n + 1) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto suman los primeros {n} números naturales (1+2+3+...+{n})?"

pasos:
  - "n × (n+1) ÷ 2 = {n} × ({n}+1) ÷ 2 = {n * (n + 1) / 2}"

explicacion: |
  Es el caso especial con a₁=1 y d=1: la fórmula se simplifica a
  n×(n+1)÷2.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El truco de Gauss para sumar el 1 al 100 rápido consiste en emparejar el primero con el último (1+100), el segundo con el anteúltimo (2+99), y así — todos esos pares suman lo mismo."

explicacion: |
  Es la idea detrás de la fórmula de la suma de una serie aritmética.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "verificacion"]

variables:
  n: random(4, 20)
  a1: random(1, 20)
  d: random(2, 10)
  an: a1 + (n - 1) * d
  correcto: n * (a1 + an) / 2
  error: uno_de([0, 0, 0, n, -n])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculada esta suma? Los primeros {n} términos (a₁={a1}, d={d}) suman {mostrado}."

explicacion: |
  Se vuelve a calcular con la fórmula y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series"]

variables:
  n: random(4, 20)
  a1: random(1, 20)
  d: random(2, 10)
  an: a1 + (n - 1) * d
  correcto: n * (a1 + an) / 2

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a1 + an
  - n * an

enunciado: "Sumá los primeros {n} términos de una sucesión con a₁ = {a1} y a{n} = {an}."

explicacion: |
  Las otras opciones se olvidan de multiplicar por la cantidad de
  términos, o de dividir por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series"]

variables:
  n: random(4, 20)

tipo: completar
enunciado: "La suma de los primeros ___ números naturales es {n * (n + 1) / 2}. Completá cuántos números se sumaron."
respuestas_validas:
  - n

explicacion: |
  Se despeja n de la fórmula n×(n+1)÷2, probando valores hasta encontrar
  el que da esa suma.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(500, 2000)
  d: random(200, 800)
  meses: random(4, 10)
  an: a1 + (meses - 1) * d

respuesta: meses * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "El primer mes ahorraste ${a1}, y cada mes siguiente ${d} más que el anterior. ¿Cuánto ahorraste en TOTAL entre los {meses} meses?"

explicacion: |
  Se suma toda la serie de ahorros mensuales, no sólo el último mes.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(10, 30)
  d: random(2, 8)
  filas: random(5, 15)
  an: a1 + (filas - 1) * d

respuesta: filas * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "La fila 1 de un teatro tiene {a1} asientos, y cada fila siguiente tiene {d} asientos más. Si el teatro tiene {filas} filas en total, ¿cuántos asientos tiene en total?"

explicacion: |
  Se suman los asientos de todas las filas, aplicando la fórmula de la
  serie.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(3, 10)
  d: random(2, 6)
  figuras: random(4, 10)
  an: a1 + (figuras - 1) * d

respuesta: figuras * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "La figura 1 de un patrón usa {a1} baldosas, y cada figura siguiente usa {d} baldosas más. Si se construyen las primeras {figuras} figuras, ¿cuántas baldosas se usan en total?"

explicacion: |
  Se suma toda la serie, no sólo la última figura.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series"]

variables:
  a1: random(50, 200)
  d: -random(2, 10)
  n: random(4, 10)
  an: a1 + (n - 1) * d

respuesta: n * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión con a₁ = {a1} y d = {d} (decreciente)."

explicacion: |
  La fórmula funciona igual con una sucesión decreciente.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula de la suma de una serie aritmética es, literalmente, el promedio del primer y el último término, multiplicado por la cantidad de términos."

explicacion: |
  Sₙ = n × (a₁+aₙ) ÷ 2: (a₁+aₙ)÷2 es el promedio de los dos extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series", "orden"]

tipo: ordenar
enunciado: "Calculá la suma de los primeros 5 términos de cada serie (a₁ y d dados) y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "a₁=1, d=1"
  - "a₁=10, d=0"
  - "a₁=0, d=2"
  - "a₁=2, d=3"
respuesta_orden: ["a₁=1, d=1", "a₁=0, d=2", "a₁=2, d=3", "a₁=10, d=0"]

explicacion: |
  Sumas: 15, 20, 40, 50 — hay que calcular cada una con la fórmula antes
  de poder ordenarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "casos_especiales"]

variables:
  a1: random(2, 50)
  n: random(3, 10)

respuesta: a1 * n
tipo: input
tolerancia_abs: 0

enunciado: "Sumá los primeros {n} términos de una sucesión con a₁ = {a1} y d = 0."

pasos:
  - "Todos los términos valen {a1}: sumar {n} veces {a1} es {a1} × {n} = {a1 * n}"

explicacion: |
  Con d=0, todos los términos son iguales al primero: la suma es,
  simplemente, ese valor multiplicado por la cantidad de términos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series", "comparacion"]

variables:
  n: random(4, 10)
  a1_1: random(1, 20)
  d1: random(2, 10)
  an_1: a1_1 + (n - 1) * d1
  a1_2: random(1, 20)
  d2: random(2, 10)
  an_2: a1_2 + (n - 1) * d2

restricciones:
  - (n * (a1_1 + an_1) / 2) != (n * (a1_2 + an_2) / 2)

respuesta: ((n * (a1_1 + an_1) / 2) > (n * (a1_2 + an_2) / 2))
tipo: vf

enunciado: "Sumando {n} términos de cada una: ¿la serie con a₁={a1_1}, d={d1} suma más que la de a₁={a1_2}, d={d2}?"

explicacion: |
  Hay que calcular las dos sumas completas antes de poder compararlas.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "casos_especiales"]

respuesta: 5050
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto suman los números del 1 al 100?"

explicacion: |
  Es el ejemplo histórico de Gauss: 100 × 101 ÷ 2 = 5.050.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(5, 20)
  d: random(2, 8)
  dias: random(5, 15)
  an: a1 + (dias - 1) * d

respuesta: dias * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "El día 1 de una colecta se juntaron {a1} kg de alimentos, y cada día se juntan {d} kg más que el anterior. Después de {dias} días, ¿cuántos kg se juntaron en total?"

explicacion: |
  Se suma toda la serie de los {dias} días, no sólo el último día.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

enunciado: "¿Cuál es la fórmula de la suma de los primeros n términos de una sucesión aritmética?"
tipo: mc
opciones_explicitas:
  - "Sₙ = n × (a₁ + aₙ) ÷ 2"
  - "Sₙ = a₁ + aₙ"
  - "Sₙ = n × a₁ × aₙ"
respuesta: "Sₙ = n × (a₁ + aₙ) ÷ 2"

explicacion: |
  Es el promedio del primer y último término, multiplicado por la
  cantidad de términos.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series"]

variables:
  a1: random(1, 50)
  d: random(2, 20)
  a2: a1 + d

respuesta: a1 + a2
tipo: input
tolerancia_abs: 0

enunciado: "Sumá los primeros 2 términos de una sucesión con a₁ = {a1} y d = {d}."

pasos:
  - "Con sólo 2 términos, la fórmula da lo mismo que sumarlos directo: {a1} + {a2} = {a1 + a2}"

explicacion: |
  Con pocos términos, la fórmula coincide con la suma directa — la
  ventaja de la fórmula se nota con series largas.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series", "verificacion", "problema"]

variables:
  a1: random(10, 30)
  d: random(2, 8)
  filas: random(5, 15)
  an: a1 + (filas - 1) * d
  correcto: filas * (a1 + an) / 2
  error: uno_de([0, 0, 0, filas, -filas])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "Un teatro tiene {filas} filas (a₁={a1} asientos, {d} más por fila). ¿Es correcto decir que tiene {mostrado} asientos en total?"

explicacion: |
  Se vuelve a calcular la suma completa y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(5, 15)
  an: a1 + (n - 1) * d
  correcto: n * (a1 + an) / 2

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - an

enunciado: "¿Cuánto SUMAN los primeros {n} términos de una sucesión con a₁={a1}, d={d} (no sólo el último término)?"

explicacion: |
  {an} es sólo el último término (aₙ); la serie pide la suma de TODOS
  los términos, no sólo uno.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una sucesión es la lista de términos; una serie es el resultado de sumarlos todos."

explicacion: |
  Son conceptos relacionados pero distintos: la sucesión es la lista, la
  serie es la suma de esa lista.
```

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los primeros n términos de una sucesión aritmética se puede calcular con una fórmula directa, sin sumar término por término."

explicacion: |
  Es la idea central de todo el tema: Sₙ = n × (a₁+aₙ) ÷ 2.
```

## Sección: suma (40 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "sin_llevar"]

variables:
  a: random(0, 9)
  b: random(0, 9)

restricciones:
  - (a + b) <= 9

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

explicacion: |
  Sumar sin llevar es contar hacia adelante desde el primer sumando tantas
  veces como indica el segundo.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "sin_llevar", "problema"]

variables:
  a: random(1, 9)
  b: random(1, 9)

restricciones:
  - (a + b) <= 9

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Tenés {a} caramelos y te regalan {b} más. ¿Cuántos caramelos tenés ahora?"

explicacion: |
  "Tener y que te den más" es sumar: el total junta lo que ya tenías con lo
  que se agregó.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "sin_llevar"]

variables:
  da: random(1, 8)
  au: random(0, 9)
  db: random(1, 8)
  bu: random(0, 9)
  a: da * 10 + au
  b: db * 10 + bu

restricciones:
  - (au + bu) <= 9
  - (da + db) <= 9

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "Unidades: {au} + {bu} = {au + bu}. Decenas: {da} + {db} = {da + db}."

explicacion: |
  Sin llevar, cada columna (unidades, decenas) se suma por separado y no
  hay que ajustar nada entre ellas.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "calculo_mental"]

variables:
  da: random(1, 8)
  db: random(1, 8)
  a: da * 10
  b: db * 10

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "Sumar decenas completas es sumar las decenas y agregar el cero: {da} + {db} = {da + db}, entonces {a} + {b} = {a + b}"

explicacion: |
  Cuando ambos números son "redondos" (terminan en cero), alcanza con sumar
  las cifras significativas y agregar los ceros al final.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "con_llevada"]

variables:
  da: random(1, 8)
  au: random(1, 9)
  db: random(1, 8)
  bu: random(1, 9)
  a: da * 10 + au
  b: db * 10 + bu

restricciones:
  - (au + bu) >= 10

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "Unidades: {au} + {bu} = {au + bu} → se escribe {(au + bu) - 10} y se lleva 1 a las decenas"

explicacion: |
  Cuando la suma de una columna da 10 o más, se escribe sólo la cifra de
  las unidades de ese resultado y se lleva 1 a la columna siguiente.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "con_llevada"]

variables:
  da: random(5, 9)
  au: random(0, 4)
  db: random(5, 9)
  bu: random(0, 4)
  a: da * 10 + au
  b: db * 10 + bu

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

pasos:
  - "Decenas: {da} + {db} = {da + db} → el resultado pasa a tener 3 cifras"

explicacion: |
  La llevada no es sólo cosa de las unidades: si la columna de las decenas
  también suma 10 o más, se lleva 1 a las centenas.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "con_llevada", "problema"]

variables:
  au: random(5, 9)
  da: random(1, 8)
  bu: random(5, 9)
  db: random(1, 8)
  a: da * 10 + au
  b: db * 10 + bu

restricciones:
  - (au + bu) >= 10

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "En un colectivo suben {a} pasajeros en una parada y {b} en la siguiente. ¿Cuántos pasajeros subieron en total?"

explicacion: |
  El planteo es el mismo que una suma numérica; el contexto sólo dice qué
  representa cada sumando.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "con_llevada"]

variables:
  ca: random(1, 8)
  da: random(0, 9)
  au: random(1, 9)
  cb: random(1, 8)
  db: random(0, 9)
  bu: random(1, 9)
  a: ca * 100 + da * 10 + au
  b: cb * 100 + db * 10 + bu

restricciones:
  - (au + bu) >= 10

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

explicacion: |
  Con 3 cifras el procedimiento es el mismo, columna por columna, sólo que
  la llevada puede seguir de las unidades a las decenas y de ahí a las
  centenas.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "avanzado"
  tags: ["suma", "con_llevada"]

variables:
  ca: random(1, 8)
  da: random(5, 9)
  au: random(5, 9)
  cb: random(1, 8)
  db: random(5, 9)
  bu: random(5, 9)
  a: ca * 100 + da * 10 + au
  b: cb * 100 + db * 10 + bu

restricciones:
  - (au + bu) >= 10
  - (da + db) >= 9

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b}?"

explicacion: |
  Acá la llevada de las unidades empuja también a las decenas a llevarse:
  hay que arrastrar el 1 de una columna a la otra sin perderlo.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "con_llevada", "problema"]

variables:
  a: random(150, 899)
  b: random(150, 899)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Gastaste ${a} en el supermercado y ${b} en la farmacia. ¿Cuánto gastaste en total?"

explicacion: |
  Sumar montos de dinero es sumar los números igual que siempre; el signo
  $ no cambia el procedimiento.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "varios_sumandos"]

variables:
  a: random(1, 90)
  b: random(1, 90)
  c: random(1, 90)

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} + {c}?"

pasos:
  - "Se puede sumar de a dos, en cualquier orden: ({a} + {b}) + {c} = {a + b + c}"

explicacion: |
  Sumar tres o más números es sumar de a dos, empezando por cualquier par
  (propiedad asociativa).
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "varios_sumandos", "calculo_mental"]

variables:
  a: random(1, 8) * 10
  b: random(1, 8)
  c: random(1, 8) * 10

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} + {c}?"

pasos:
  - "Conviene sumar primero las dos decenas redondas: {a} + {c} = {a + c}, y después sumar {b}: {a + c} + {b} = {a + b + c}"

explicacion: |
  La propiedad asociativa permite elegir qué par sumar primero: agrupar los
  números "más fáciles" ahorra trabajo mental.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "avanzado"
  tags: ["suma", "varios_sumandos"]

variables:
  a: random(100, 400)
  b: random(100, 400)
  c: random(100, 400)

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} + {c}?"

explicacion: |
  Con más cifras el procedimiento no cambia: se suma de a dos hasta usar
  todos los sumandos.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "propiedades"]

variables:
  a: random(1, 90)
  b: random(1, 90)

restricciones:
  - a != b

respuesta: a + b
tipo: mc
opciones_explicitas:
  - b + a
  - a + b + 1
  - a + b - 1

enunciado: "¿Cuál de estas opciones da el mismo resultado que {a} + {b}?"

explicacion: |
  Cambiar el orden de los sumandos no cambia el resultado (propiedad
  conmutativa): {a} + {b} es exactamente lo mismo que {b} + {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "Cambiar el orden de los sumandos no cambia el resultado de una suma."

explicacion: |
  Es la propiedad conmutativa: a + b siempre da lo mismo que b + a.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "propiedades"]

variables:
  a: random(1, 30)
  b: random(1, 30)
  c: random(1, 30)

respuesta: ((a + b) + c == a + (b + c))
tipo: vf

enunciado: "¿Es cierto que ({a} + {b}) + {c} da lo mismo que {a} + ({b} + {c})?"

explicacion: |
  Es la propiedad asociativa: no importa qué par de sumandos se sume
  primero, el resultado final es siempre el mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "Agrupar los sumandos de otra manera (por ejemplo, sumar primero el segundo y el tercero en vez del primero y el segundo) cambia el resultado final de la suma."

explicacion: |
  Justamente al revés: agrupar distinto no cambia nada (propiedad
  asociativa); el resultado final es siempre el mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "propiedades"]

variables:
  a: random(1, 999)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + 0?"

explicacion: |
  Sumar 0 no agrega ni quita nada: el resultado es siempre el mismo número
  con el que se empezó.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "Sumarle 0 a cualquier número da como resultado ese mismo número, sin cambiarlo."

explicacion: |
  El 0 es el elemento neutro de la suma: no aporta ni resta nada.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "vocabulario"]

enunciado: "En la suma 8 + 5 = 13, ¿cómo se llama el 13?"
tipo: mc
opciones_explicitas:
  - "Total"
  - "Sumando"
  - "Resto"
respuesta: "Total"

explicacion: |
  El resultado de una suma se llama total (o suma); los números que se
  suman son los sumandos.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "vocabulario"]

enunciado: "En la suma 8 + 5 = 13, ¿cómo se llaman el 8 y el 5?"
tipo: mc
opciones_explicitas:
  - "Sumandos"
  - "Totales"
  - "Restos"
respuesta: "Sumandos"

explicacion: |
  Los números que se suman se llaman sumandos; el resultado es el total.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "estimacion"]

variables:
  a: random(11, 988)
  b: random(11, 988)
  ra: redondear(a / 10, 0) * 10
  rb: redondear(b / 10, 0) * 10

respuesta: ra + rb
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {a} y {b} a la decena más cercana, y sumá esos redondeos. ¿Cuánto da la estimación?"

pasos:
  - "{a} redondea a {ra}. {b} redondea a {rb}. {ra} + {rb} = {ra + rb}"

explicacion: |
  Estimar una suma es redondear cada sumando por separado antes de sumar,
  para tener una idea rápida del resultado sin hacer la cuenta exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "estimacion"]

variables:
  a: random(101, 9888)
  b: random(101, 9888)
  ra: redondear(a / 100, 0) * 100
  rb: redondear(b / 100, 0) * 100

respuesta: ra + rb
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {a} y {b} a la centena más cercana, y sumá esos redondeos. ¿Cuánto da la estimación?"

pasos:
  - "{a} redondea a {ra}. {b} redondea a {rb}. {ra} + {rb} = {ra + rb}"

explicacion: |
  Con números más grandes conviene redondear a la centena (en vez de la
  decena) para que la estimación sea más rápida de calcular.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "estimacion"]

respuesta: falso
tipo: vf

enunciado: "Una estimación siempre tiene que dar exactamente el mismo número que la cuenta exacta."

explicacion: |
  Una estimación es sólo un valor aproximado, útil para controlar que la
  cuenta exacta no tenga un error grosero — no tiene por qué coincidir al
  dígito con el resultado real.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "sumando_faltante"]

variables:
  a: random(1, 90)
  x: random(1, 90)
  total: a + x

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número hay que sumarle a {a} para obtener {total}?"

pasos:
  - "{total} - {a} = {total - a}"

explicacion: |
  Buscar el sumando que falta es, en realidad, hacer la resta entre el
  total y el sumando conocido.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "sumando_faltante"]

variables:
  a: random(100, 800)
  x: random(50, 199)
  total: a + x

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué número hay que sumarle a {a} para obtener {total}?"

explicacion: |
  El procedimiento es el mismo con números más grandes: restar el sumando
  conocido al total.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "sumando_faltante"]

variables:
  a: random(1, 90)
  x: random(1, 90)
  total: a + x

tipo: completar
enunciado: "Completá: ___ + {a} = {total}."
respuestas_validas:
  - x

explicacion: |
  El número que falta es el que, sumado a {a}, completa exactamente
  {total}.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "verificacion"]

variables:
  a: random(1, 9)
  b: random(1, 9)
  correcto: a + b
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta suma? {a} + {b} = {mostrado}"

explicacion: |
  Para verificar una suma hay que volver a calcularla y comparar el
  resultado, no alcanza con que el número "parezca" razonable.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "verificacion"]

variables:
  a: random(10, 90)
  b: random(10, 90)
  correcto: a + b
  error: uno_de([0, 0, 0, 1, -1, 10])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta suma? {a} + {b} = {mostrado}"

explicacion: |
  Un error típico al sumar en columna es olvidarse de la llevada: por eso
  conviene siempre volver a revisar columna por columna.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "avanzado"
  tags: ["suma", "verificacion"]

variables:
  a: random(100, 800)
  b: random(100, 800)
  correcto: a + b
  error: uno_de([0, 0, 0, 1, -1, 100])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta suma? {a} + {b} = {mostrado}"

explicacion: |
  Con más cifras hay más columnas donde puede haber un error: conviene
  verificar de derecha a izquierda, igual que al resolver.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "problema"]

variables:
  a: random(5, 40)
  b: random(5, 40)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "En un salón hay {a} varones y {b} mujeres. ¿Cuántas personas hay en total?"

explicacion: |
  Juntar dos grupos distintos en un solo total es sumar sus cantidades.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "problema"]

variables:
  a: random(100, 500)
  b: random(50, 300)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Un colectivo recorrió {a} metros hasta la primera parada y {b} metros más hasta la segunda. ¿Cuántos metros recorrió en total?"

explicacion: |
  Sumar dos tramos de un recorrido da la distancia total recorrida.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "calculo_mental"]

variables:
  a: random(1, 988)
  unidad: a - floor(a / 10) * 10
  falta: 10 - unidad

restricciones:
  - unidad != 0

respuesta: falta
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto le falta a {a} para llegar al próximo múltiplo de 10?"

pasos:
  - "La cifra de las unidades de {a} es {unidad}; falta {falta} para completar la decena"

explicacion: |
  Encontrar cuánto falta para "redondear hacia arriba" es una suma
  disfrazada de resta: se busca el número que, sumado, completa el
  múltiplo de 10 más cercano.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "calculo_mental"]

variables:
  a: random(1, 9888)
  resto: a - floor(a / 100) * 100
  falta: 100 - resto

restricciones:
  - resto != 0

respuesta: falta
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto le falta a {a} para llegar al próximo múltiplo de 100?"

explicacion: |
  Mismo razonamiento que con los múltiplos de 10, mirando ahora las dos
  últimas cifras del número.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "intermedio"
  tags: ["suma", "problema"]

variables:
  a: random(100, 900)
  meta: a + random(50, 400)

respuesta: meta - a
tipo: input
tolerancia_abs: 0

enunciado: "Tenés ahorrados ${a} y tu meta es juntar ${meta}. ¿Cuánto te falta ahorrar?"

explicacion: |
  Lo ahorrado más lo que falta tiene que dar exactamente la meta: por eso
  lo que falta es la meta menos lo ya ahorrado.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "orden"]

tipo: ordenar
enunciado: "Ordená estas sumas de menor a mayor resultado (sin calcularlas todas de una)."
opciones_explicitas:
  - "6 + 7"
  - "3 + 2"
  - "9 + 9"
  - "5 + 4"
respuesta_orden: ["3 + 2", "5 + 4", "6 + 7", "9 + 9"]

explicacion: |
  3+2=5, 5+4=9, 6+7=13, 9+9=18: hay que resolver cada suma antes de poder
  ordenarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "algoritmo_columna"]

variables:
  da: random(1, 8)
  au: random(1, 8)
  db: random(1, 8)
  bu: random(0, 9 - au)
  a: da * 10 + au
  b: db * 10 + bu
  suma: a + b

tipo: completar
enunciado: "Completá el resultado: {a} + {b} = ___."
respuestas_validas:
  - suma

explicacion: |
  Se resuelve la suma en columna, de derecha a izquierda, y se completa
  con el resultado final.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "sumando_faltante", "problema"]

variables:
  a: random(10, 80)
  total: random(90, 150)

restricciones:
  - total > a

respuesta: total - a
tipo: input
tolerancia_abs: 0

enunciado: "Llevás {a} puntos y necesitás llegar a {total} para ganar. ¿Cuántos puntos más tenés que sumar?"

explicacion: |
  Lo que ya tenés más lo que falta tiene que dar el total buscado.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "calculo_mental", "varios_sumandos"]

variables:
  a: random(1, 9) * 100
  b: random(1, 9) * 100
  c: random(1, 9) * 100

respuesta: a + b + c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} + {b} + {c}?"

pasos:
  - "Al ser todos números redondos, alcanza con sumar las centenas: {a / 100} + {b / 100} + {c / 100} = {a / 100 + b / 100 + c / 100}, y agregar los ceros"

explicacion: |
  Sumar números redondos (que terminan en cero) es más rápido: se suman
  las cifras significativas y se agregan los ceros al final.
```

```
metadata:
  materia: "matematicas"
  tema: "suma"
  nivel: "basico"
  tags: ["suma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar es juntar dos o más cantidades en una sola."

explicacion: |
  Es la idea central de la suma: combinar cantidades separadas en un único
  total.
```
