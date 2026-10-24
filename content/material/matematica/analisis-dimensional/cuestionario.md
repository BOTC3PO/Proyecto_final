# Matemática — Análisis dimensional (cuestionario, 22 preguntas VBLang)

> Tema: `M11`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el análisis dimensional

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

enunciado: "¿Qué es el análisis dimensional?"
tipo: mc
opciones_explicitas:
  - "Revisar las unidades de una fórmula o resultado para verificar que tengan sentido"
  - "Contar cuántos dígitos tiene un número"
  - "Medir el tamaño de una figura con una regla"
respuesta: "Revisar las unidades de una fórmula o resultado para verificar que tengan sentido"

explicacion: |
  Sirve para detectar errores de planteo antes de mirar los números.
```

### 2 — Para qué sirve

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

enunciado: "¿Para qué sirve principalmente el análisis dimensional?"
tipo: mc
opciones_explicitas:
  - "Para detectar errores en una fórmula, aunque los números parezcan cerrar"
  - "Para hacer las cuentas más rápido"
  - "Para redondear resultados"
respuesta: "Para detectar errores en una fórmula, aunque los números parezcan cerrar"

explicacion: |
  Si las unidades no coinciden con lo esperado, hay un error en el
  planteo.
```

### 3 — No se pueden sumar unidades distintas

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Se pueden sumar directamente 3 metros más 5 segundos, porque son sólo números."

explicacion: |
  Metros y segundos son magnitudes distintas (longitud y tiempo): no se
  pueden combinar con suma o resta.
```

### 4 — Sí se pueden sumar unidades iguales

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Se pueden sumar 3 metros más 5 metros, porque tienen la misma unidad."

explicacion: |
  Con la misma unidad, la suma tiene sentido: 3 m + 5 m = 8 m.
```

### 5 — Se pueden multiplicar unidades distintas

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la suma, sí se pueden multiplicar o dividir magnitudes con unidades distintas (por ejemplo, distancia dividido tiempo)."

explicacion: |
  De ahí nacen las unidades derivadas: velocidad (m/s), área (m²),
  densidad (kg/m³).
```

### 6 — Unidades de la velocidad

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "La velocidad se calcula como distancia ÷ tiempo. ¿Cuál de estas es una unidad válida de velocidad?"
tipo: mc
opciones_explicitas:
  - "km/h"
  - "kg/h"
  - "m²"
respuesta: "km/h"

explicacion: |
  Distancia (km) dividido tiempo (h) da km/h.
```

### 7 — Unidades del área

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "El área se calcula multiplicando dos longitudes. Si ambas están en metros, ¿en qué unidad queda el área?"
tipo: mc
opciones_explicitas:
  - "m²"
  - "m"
  - "m³"
respuesta: "m²"

explicacion: |
  Longitud × longitud = m × m = m² (metro cuadrado).
```

### 8 — Unidades del volumen

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "El volumen se calcula multiplicando tres longitudes. Si las tres están en metros, ¿en qué unidad queda el volumen?"
tipo: mc
opciones_explicitas:
  - "m³"
  - "m²"
  - "m"
respuesta: "m³"

explicacion: |
  Longitud × longitud × longitud = m³ (metro cúbico).
```

### 9 — Unidades de la densidad

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "La densidad se calcula como masa ÷ volumen. ¿Cuál de estas es una unidad válida de densidad?"
tipo: mc
opciones_explicitas:
  - "kg/m³"
  - "kg·m³"
  - "m/kg²"
respuesta: "kg/m³"

explicacion: |
  Masa (kg) dividido volumen (m³) da kg/m³.
```

### 10 — Unidades de la aceleración

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "La aceleración se calcula como velocidad ÷ tiempo. Si la velocidad está en m/s y el tiempo en s, ¿en qué unidad queda la aceleración?"
tipo: mc
opciones_explicitas:
  - "m/s²"
  - "m/s"
  - "s/m"
respuesta: "m/s²"

explicacion: |
  (m/s) ÷ s = m/s² — "metros por segundo, por segundo".
```

### 11 — Detectar una fórmula dimensionalmente incorrecta

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

enunciado: "¿Cuál de estas operaciones NO tiene sentido dimensionalmente?"
tipo: mc
opciones_explicitas:
  - "5 metros + 3 segundos"
  - "5 metros × 3 metros"
  - "10 km ÷ 2 horas"
respuesta: "5 metros + 3 segundos"

explicacion: |
  Sumar longitud con tiempo no tiene sentido; multiplicar o dividir
  magnitudes distintas sí (da una unidad derivada).
```

### 12 — Si las unidades no coinciden, la ecuación está mal

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si en una fórmula las unidades de ambos lados de la igualdad no coinciden, la fórmula tiene un error."

explicacion: |
  Es justo la base del análisis dimensional: usar las unidades como
  chequeo antes de confiar en los números.
```

### 13 — Verificar el área de un rectángulo por sus unidades

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

enunciado: "Una fórmula calcula el área de un rectángulo como base + altura (sumando, no multiplicando), con base y altura en metros. ¿Qué unidad da ese resultado?"
tipo: mc
opciones_explicitas:
  - "m (no m², así que la fórmula está mal para calcular un área)"
  - "m² (está bien)"
  - "m³ (está bien)"
respuesta: "m (no m², así que la fórmula está mal para calcular un área)"

explicacion: |
  Sumar dos longitudes da otra longitud (m), no un área (m²): el
  análisis dimensional detecta que la fórmula "base + altura" no puede
  ser el área.
```

### 14 — Problema: calcular una velocidad y verificar su unidad

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "problema"]

variables:
  distancia_km: random(60, 400)
  horas: random(2, 8)

respuesta: distancia_km / horas
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {distancia_km} km en {horas} horas. ¿Cuál es su velocidad, en km/h?"

pasos:
  - "{distancia_km} km ÷ {horas} h = {distancia_km / horas} km/h"

explicacion: |
  Distancia (km) dividido tiempo (h) da directamente la unidad esperada,
  km/h — eso confirma que la fórmula está bien planteada.
```

### 15 — Problema: convertir antes de calcular una densidad

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "problema"]

variables:
  masa_kg: random(1, 5)
  volumen_cm3: random(200, 900)

respuesta: (masa_kg * 1000) / volumen_cm3
tipo: input
tolerancia_abs: 0.01

enunciado: "Un objeto tiene {masa_kg} kg de masa y ocupa {volumen_cm3} cm³. Para calcular la densidad en g/cm³, primero hay que convertir la masa a gramos. ¿Cuál es la densidad, en g/cm³?"

pasos:
  - "{masa_kg} kg = {masa_kg * 1000} g. {masa_kg * 1000} g ÷ {volumen_cm3} cm³ = {(masa_kg * 1000) / volumen_cm3} g/cm³."

explicacion: |
  Antes de dividir, ambas magnitudes tienen que quedar en unidades
  compatibles con lo que se pide (g y cm³, no kg y cm³) — es la conexión
  directa con `../sistema-metrico-y-conversiones/`.
```

### 16 — Detectar unidad "rara" en un resultado

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si un cálculo que debía dar un área termina en una unidad como m/s, eso es una señal clara de que hay un error en el planteo."

explicacion: |
  m/s no es una unidad de área (que debería ser m²): el resultado avisa
  que algo está mal antes de mirar el número.
```

### 17 — Elegir la unidad correcta para un caudal

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "El caudal de una canilla se calcula como volumen de agua ÷ tiempo. Si el volumen está en litros y el tiempo en minutos, ¿en qué unidad queda el caudal?"
tipo: mc
opciones_explicitas:
  - "l/min"
  - "min/l"
  - "l · min"
respuesta: "l/min"

explicacion: |
  Volumen (l) dividido tiempo (min) da l/min — litros por minuto.
```

### 18 — Completar: unidad de un área con base en cm

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "completar"]

tipo: completar
enunciado: "Completá: si un área se calcula multiplicando dos longitudes en centímetros, la unidad del resultado es cm___ (con el número del exponente)."
respuestas_validas:
  - 2

explicacion: |
  cm × cm = cm² (centímetro cuadrado).
```

### 19 — Completar: unidad de un volumen en cm

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "completar"]

tipo: completar
enunciado: "Completá: si un volumen se calcula multiplicando tres longitudes en centímetros, la unidad del resultado es cm___ (con el número del exponente)."
respuestas_validas:
  - 3

explicacion: |
  cm × cm × cm = cm³ (centímetro cúbico).
```

### 20 — Ordenar el chequeo dimensional de una fórmula

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "orden"]

tipo: ordenar
enunciado: "Ordená los pasos para verificar una fórmula por análisis dimensional."
opciones_explicitas:
  - "Si no coinciden, revisar la fórmula: algo está mal planteado"
  - "Identificar las unidades de cada variable de la fórmula"
  - "Comparar la unidad resultante con la unidad esperada"
  - "Combinar esas unidades con las mismas operaciones (× o ÷) que usa la fórmula"
respuesta_orden: ["Identificar las unidades de cada variable de la fórmula", "Combinar esas unidades con las mismas operaciones (× o ÷) que usa la fórmula", "Comparar la unidad resultante con la unidad esperada", "Si no coinciden, revisar la fórmula: algo está mal planteado"]
explicacion: |
  Es el mismo procedimiento en todos los casos: seguir las unidades a
  través de las operaciones, no sólo los números.
```

### 21 — El análisis dimensional NO reemplaza verificar los números

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que las unidades de una fórmula cierren no garantiza que el número esté bien calculado: sólo descarta un tipo de error (el de planteo), no errores aritméticos."

explicacion: |
  Una fórmula puede tener las unidades correctas y aun así tener un error
  de cuenta (por ejemplo, un factor mal multiplicado) — el análisis
  dimensional es un chequeo más, no el único.
```

### 22 — Cierre: por qué importa el análisis dimensional

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Revisar las unidades de una fórmula antes de confiar en el resultado numérico es una forma rápida de detectar errores de planteo."

explicacion: |
  Es la idea central de todo el módulo: las unidades cuentan una historia
  que los números solos no cuentan.
```
