# Oficios — Agricultor — Diagnóstico agrícola por casos (cuestionario, 18 preguntas VBLang)

> Cierre del oficio (`OF12`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico agrícola —
> cada pregunta validada con parse+lint+compile+generate real de
> packages/vblang antes de guardarse.

---

### 1 — Cuatro familias de causas para un mismo síntoma

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "carencia nutricional, plaga, enfermedad o estrés hídrico"
tipo: mc
opciones_explicitas: ["carencia nutricional, plaga, enfermedad o estrés hídrico", "sólo el clima, sin ninguna otra causa posible", "siempre falta de agua, sin excepción"]

enunciado: "Según la teoría, ¿cuáles son las cuatro familias de causas posibles para un síntoma visible en una planta (hoja amarilla, manchada, marchita)?"

explicacion: |
  Carencia nutricional, plaga, enfermedad o estrés hídrico son las
  cuatro familias mencionadas en la teoría.
```

### 2 — Amarillamiento uniforme

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "una carencia nutricional, frecuentemente de nitrógeno"
tipo: mc
opciones_explicitas: ["una carencia nutricional, frecuentemente de nitrógeno", "siempre una plaga de insectos", "una enfermedad fúngica, exclusivamente"]

enunciado: "Cuando el amarillamiento de las hojas es uniforme, afecta a hojas de distintas edades por igual, y no hay manchas ni insectos visibles, ¿cuál es la causa probable según la teoría?"

explicacion: |
  Es una carencia nutricional, frecuentemente de nitrógeno, el
  nutriente más asociado al color verde de las hojas.
```

### 3 — Confirmar la carencia nutricional

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "Un análisis de suelo confirma qué nutriente específico falta, antes de aplicar cualquier fertilizante \"a ciegas\", según la teoría."

explicacion: |
  Es la recomendación del caso 1: confirmar con análisis antes de
  fertilizar sin certeza.
```

### 4 — Manchas con bordes definidos

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "una enfermedad, generalmente fúngica o bacteriana"
tipo: mc
opciones_explicitas: ["una enfermedad, generalmente fúngica o bacteriana", "siempre una carencia nutricional", "un exceso de riego, exclusivamente"]

enunciado: "Manchas con bordes definidos, a veces con un halo de color distinto, que aparecen primero en hojas específicas antes de extenderse, suelen indicar..."

explicacion: |
  Suelen indicar una enfermedad (fúngica o bacteriana) más que una
  carencia nutricional.
```

### 5 — Diferencia entre caso 1 y caso 2

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, las carencias nutricionales tienden a ser más uniformes y graduales, mientras que las enfermedades suelen presentarse como manchas puntuales con bordes marcados."

explicacion: |
  Es la distinción explícita que hace la teoría entre el patrón del
  caso 1 y el del caso 2.
```

### 6 — Perforaciones o bordes mordidos

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "una plaga, insectos u otros animales alimentándose del follaje"
tipo: mc
opciones_explicitas: ["una plaga, insectos u otros animales alimentándose del follaje", "siempre una carencia de fósforo", "un exceso de fertilizante nitrogenado"]

enunciado: "Cuando aparecen agujeros irregulares o bordes de hoja comidos, concentrados en algunas plantas o zonas, la causa apunta a..."

explicacion: |
  Apunta a una plaga: insectos u otros animales alimentándose del
  follaje.
```

### 7 — Cómo confirmar una plaga

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de una enfermedad o carencia, el patrón del caso 3 (plaga) suele tener un origen físico visible si se inspecciona de cerca, como el propio insecto o sus rastros."

explicacion: |
  Es la diferencia práctica que da la teoría para confirmar el
  diagnóstico del caso 3.
```

### 8 — Marchitamiento con suelo húmedo

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

variables:
  n: uno_de([1, 1])

respuesta: "un problema que impide que la planta absorba o transporte el agua disponible"
tipo: mc
opciones_explicitas: ["un problema que impide que la planta absorba o transporte el agua disponible", "siempre falta de agua real en el suelo", "un exceso de luz solar directa"]

enunciado: "Una planta marchita, con el suelo alrededor visiblemente húmedo, señala..."

explicacion: |
  No señala falta de agua, sino un problema que impide que la planta
  absorba o transporte el agua disponible (raíz dañada o enfermedad
  vascular).
```

### 9 — Causas del caso 4

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

variables:
  causa: uno_de(["una raíz dañada por hongos o encharcamiento previo", "una enfermedad vascular que obstruye el transporte interno de agua"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para el marchitamiento con suelo húmedo del caso 4."

explicacion: |
  Ambas son causas mencionadas en el caso 4 para explicar por qué la
  planta no puede aprovechar el agua disponible.
```

### 10 — Regar más en el caso 4

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, regar más una planta marchita con suelo ya húmedo es la solución correcta en el caso 4."

explicacion: |
  Falso. Regar más no soluciona nada y, si el problema es de exceso de
  humedad previa, puede empeorarlo.
```

### 11 — Observar el patrón antes de asumir una causa

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "observar el patrón exacto del síntoma antes de asumir una categoría de causa"
tipo: mc
opciones_explicitas: ["observar el patrón exacto del síntoma antes de asumir una categoría de causa", "aplicar fertilizante ante cualquier síntoma, sin más análisis", "aplicar un insecticida ante cualquier síntoma, sin más análisis"]

enunciado: "Según el método resumido de la teoría, ¿cuál es el primer paso frente a un síntoma en una planta?"

explicacion: |
  Observar el patrón exacto del síntoma (uniforme o localizado, con o
  sin bordes definidos, con o sin evidencia física) es el primer paso
  del método resumido.
```

### 12 — El mismo síntoma, orígenes opuestos

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, el mismo síntoma superficial (\"planta que no se ve bien\") puede tener orígenes completamente distintos que exigen intervenciones opuestas."

explicacion: |
  Es la síntesis final del método de diagnóstico agrícola de todo el
  tema, ejemplificada con \"más agua no siempre es la respuesta\".
```

### 13 — Nitrógeno y color verde

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

respuesta: verdadero
tipo: vf

enunciado: "El nitrógeno es el nutriente más asociado al color verde de las hojas, según la teoría."

explicacion: |
  Es la razón por la que la carencia de nitrógeno se manifiesta
  típicamente como amarillamiento uniforme (caso 1).
```

### 14 — Diferencia entre caso 2 y caso 3

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 2", "caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 2 es manchas con bordes definidos (enfermedad); el caso 3 es perforaciones o bordes mordidos (plaga)"
tipo: mc
opciones_explicitas: ["el caso 2 es manchas con bordes definidos (enfermedad); el caso 3 es perforaciones o bordes mordidos (plaga)", "son exactamente el mismo síntoma con dos nombres distintos", "el caso 2 sólo ocurre en hortalizas, el caso 3 sólo en árboles frutales"]

enunciado: "¿Cuál es la diferencia central entre el caso 2 (manchas con bordes definidos) y el caso 3 (perforaciones o bordes mordidos)?"

explicacion: |
  El caso 2 apunta a una enfermedad (fúngica o bacteriana); el caso 3
  apunta a una plaga (insectos u otros animales).
```

### 15 — Por qué distinguir las causas es crucial

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "basico"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, el tratamiento correcto para una de las cuatro familias de causas es, muchas veces, inútil o incluso contraproducente para otra."

explicacion: |
  Es la idea de apertura de todo el tema de diagnóstico agrícola.
```

### 16 — Plaga en zonas concentradas

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "El daño por plaga suele concentrarse más en algunas plantas o zonas del cultivo que en otras, según la teoría."

explicacion: |
  Es una característica distintiva del patrón del caso 3, a diferencia
  de patrones más uniformes como el del caso 1.
```

### 17 — Enfermedad vascular

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "avanzado"
  tags: ["caso 4"]

respuesta: verdadero
tipo: vf

enunciado: "Una enfermedad vascular que obstruye el transporte interno de agua dentro de la planta puede causar marchitamiento aunque el suelo esté húmedo."

explicacion: |
  Es una de las causas mencionadas en el caso 4 para explicar el
  marchitamiento con suelo húmedo.
```

### 18 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "agricultor_diagnostico_agricola_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los cuatro casos de este tema comparten la misma lógica: observar el patrón exacto del síntoma antes de asumir una causa, distinguiendo carencia, enfermedad, plaga y estrés hídrico."

explicacion: |
  Es la síntesis final del método de diagnóstico agrícola de todo el
  tema.
```
