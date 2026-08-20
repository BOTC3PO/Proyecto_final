# Biología — Pirámide de biomasas (cuestionario, 20 preguntas VBLang)

> Tema: `BH2`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bug de esta tanda: `respuesta: uno_de(opciones[0])`
> — `uno_de()` espera una lista, no un string único; era una pregunta
> de respuesta fija sin necesidad de sorteo.

---

### 1 — Definición de biomasa

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["biomasa"]

respuesta: verdadero
tipo: vf

enunciado: "La biomasa se define como la masa total de materia viva presente en un nivel trófico determinado."

explicacion: |
  Correcto, es la cantidad de materia orgánica de todos los organismos de ese nivel.
```

### 2 — Representación de la biomasa

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["representacion"]

respuesta: verdadero
tipo: vf

enunciado: "Al representar la biomasa de cada nivel trófico con barras apiladas, la figura resultante suele tener forma de pirámide."

explicacion: |
  Correcto, la biomasa disminuye hacia los niveles superiores.
```

### 3 — Geometría de la pirámide

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["piramide", "forma"]

respuesta: falso
tipo: vf

enunciado: "En una pirámide de biomasa típica, la base es angosta y la punta es ancha."

explicacion: |
  Falso, es al revés: base ancha (productores), punta angosta (últimos consumidores).
```

### 4 — Causa de la forma piramidal

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["regla_del_10"]

respuesta: falso
tipo: vf

enunciado: "La forma piramidal de la biomasa es una coincidencia visual, sin relación con la regla del 10%."

explicacion: |
  Falso, es consecuencia directa de esa regla de transferencia de energía.
```

### 5 — Cálculo del siguiente nivel

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  biomasa_productores: uno_de([1000, 5000, 10000, 20000])

respuesta: biomasa_productores * 0.10
tipo: input
tolerancia_abs: 0.1

enunciado: "La biomasa de productores es {biomasa_productores} kg. Con la regla del 10%, ¿cuál es la biomasa aproximada del siguiente nivel?"

explicacion: |
  {biomasa_productores} × 0,10.
```

### 6 — Transferencia en múltiples niveles

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "avanzado"
  tags: ["calculo", "niveles_troficos"]

variables:
  biomasa_productores: uno_de([10000, 20000])

respuesta: biomasa_productores * 0.10 * 0.10
tipo: input
tolerancia_abs: 0.1

enunciado: "Si la biomasa de los productores (nivel 1) es {biomasa_productores} kg, ¿cuál es la biomasa aproximada de los consumidores secundarios (2 niveles arriba), aplicando la regla del 10% dos veces?"

pasos:
  - "Nivel 2 (consumidores primarios) = {biomasa_productores} × 0,10"
  - "Nivel 3 (consumidores secundarios) = eso × 0,10"

explicacion: |
  {biomasa_productores} × 0,10 × 0,10.
```

### 7 — Eficiencia de la pirámide

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["ejemplo"]

respuesta: verdadero
tipo: vf

enunciado: "10.000 kg de pasto (productores) sostienen aproximadamente 1.000 kg de consumidores primarios, asumiendo una eficiencia del 10%."

explicacion: |
  Correcto, 10% de 10.000 es 1.000.
```

### 8 — Eficiencia energética en la pirámide

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["energia"]

respuesta: verdadero
tipo: vf

enunciado: "Debido a la pérdida de ~90% de la energía en cada transferencia, después de 4 o 5 niveles ya no alcanza para sostener una población viable."

explicacion: |
  Correcto, la energía se disipa como calor en cada nivel.
```

### 9 — Longitud de las pirámides reales

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["niveles_troficos"]

respuesta: verdadero
tipo: vf

enunciado: "Las pirámides tróficas reales rara vez tienen más de 4 o 5 niveles."

explicacion: |
  Correcto, por la baja eficiencia de transferencia.
```

### 10 — Ciclo de materia vs. flujo de energía

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["ciclos_biogeoquimicos"]

respuesta: verdadero
tipo: vf

enunciado: "La materia se recicla indefinidamente, pero la energía fluye en una sola dirección y se agota rápido al subir de nivel."

explicacion: |
  Correcto — ver ../flujo-materia-energia/.
```

### 11 — Niveles tróficos máximos

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["niveles_troficos"]

respuesta: "4 a 5"
tipo: mc
opciones_explicitas: ["4 a 5", "20 a 30", "infinitos", "siempre exactamente 2"]

enunciado: "¿Cuántos niveles tróficos suele tener como máximo una pirámide real, aproximadamente?"

explicacion: |
  La limitación energética impone un tope de entre 4 y 5 niveles.
```

### 12 — Tipos de pirámides ecológicas

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["piramides"]

respuesta: verdadero
tipo: vf

enunciado: "Además de la pirámide de biomasa, existen la pirámide de números (cantidad de individuos) y la pirámide de energía."

explicacion: |
  Correcto, son 3 formas de representar lo mismo.
```

### 13 — Medición de la biomasa

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["biomasa"]

respuesta: verdadero
tipo: vf

enunciado: "La pirámide de biomasa es la más común porque es más fácil de medir (pesar) que contar individuos o medir energía directamente."

explicacion: |
  Correcto, pesar es más directo que otras mediciones.
```

### 14 — Inversión de la pirámide de números

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["piramides"]

respuesta: falso
tipo: vf

enunciado: "La pirámide de números nunca se invierte, siempre tiene forma piramidal perfecta."

explicacion: |
  Falso, a veces se invierte: un árbol grande puede sostener miles de insectos.
```

### 15 — Definición de biomasa (completar)

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["biomasa"]

respuesta: "biomasa"
tipo: completar
respuestas_validas:
  - "biomasa"

enunciado: "La masa total de materia viva en un nivel trófico se llama ___."

explicacion: |
  Se llama biomasa.
```

### 16 — Cálculo de biomasa en el segundo nivel

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  biomasa_base: uno_de([100000, 500000, 1000000])

respuesta: biomasa_base * 0.1
tipo: input
tolerancia_abs: 1

enunciado: "Si la biomasa de productores es {biomasa_base} kg, ¿cuánta se estima en el segundo nivel trófico (regla del 10%)?"

explicacion: |
  {biomasa_base} × 0,1.
```

### 17 — Relación con flujo de energía

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 10% que determina la forma piramidal de la biomasa es la misma regla vista en el flujo de materia y energía."

explicacion: |
  Correcto, es el mismo concepto aplicado visualmente.
```

### 18 — Biomasa y nivel trófico

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más alto es el nivel trófico en la pirámide, menos biomasa disponible hay en ese nivel."

explicacion: |
  Correcto, por la pérdida progresiva de energía.
```

### 19 — Estimación de consumidores secundarios

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "intermedio"
  tags: ["calculo"]

respuesta: "100 kg"
tipo: mc
opciones_explicitas: ["100 kg", "1000 kg", "10000 kg", "5000 kg"]

enunciado: "Si un ecosistema tiene 10.000 kg de productores, ¿cuánta biomasa aproximada podría sostener en el nivel de consumidores secundarios (dos niveles arriba)?"

pasos:
  - "Nivel 2: 10.000 × 0,1 = 1.000 kg"
  - "Nivel 3: 1.000 × 0,1 = 100 kg"

explicacion: |
  10.000 × 0,1 × 0,1 = 100 kg.
```

### 20 — Pirámide de energía vs. de biomasa

```
metadata:
  materia: "biologia"
  tema: "piramide_biomasas"
  nivel: "avanzado"
  tags: ["comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "La pirámide de energía casi nunca se invierte (siempre tiene la forma piramidal clásica), a diferencia de la pirámide de números, que sí puede invertirse en algunos casos."

explicacion: |
  Correcto. Como la energía siempre disminuye en cada transferencia (ley de la termodinámica), la pirámide de energía es la más consistente de las tres.
```
