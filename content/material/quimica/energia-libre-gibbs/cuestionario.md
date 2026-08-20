# Química — Energía libre de Gibbs: por qué una reacción es espontánea (cuestionario, 20 preguntas VBLang)

> Tema: `QGIBBS`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma) y corregido a mano.
> Bugs grandes esta tanda: **un lote entero (4 preguntas) sin el campo
> `respuesta:`**, y dos preguntas con datos de `variables:` totalmente
> desalineados de `opciones_explicitas` (la respuesta calculada ni
> siquiera aparecía entre las opciones) — reescritas como preguntas
> fijas, ya que la respuesta correcta no dependía de ningún sorteo.

---

### 1 — Concepto de entropía

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "entropia"]

respuesta: "entropia"
tipo: completar
respuestas_validas:
  - "entropía"
  - "entropia"

enunciado: "La medida del desorden o dispersión de energía de un sistema se llama ___."

explicacion: |
  La entropía (S) mide el grado de desorden de un sistema.
```

### 2 — Disolución de sólidos

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "entropia", "soluciones"]

respuesta: verdadero
tipo: vf

enunciado: "Si un sólido se disuelve en un líquido, la entropía del sistema aumenta."

explicacion: |
  Al disolverse, las partículas pasan de una estructura cristalina ordenada a una distribución más desordenada: aumenta la entropía.
```

### 3 — Segunda ley de la termodinámica

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "segunda_ley"]

respuesta: falso
tipo: vf

enunciado: "El universo en conjunto tiende siempre a DISMINUIR su entropía."

explicacion: |
  Falso. Según la segunda ley de la termodinámica, la entropía total del universo siempre tiende a AUMENTAR.
```

### 4 — Entropía en reacciones individuales

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entropia", "espontaneidad"]

respuesta: falso
tipo: vf

enunciado: "Cada reacción individual está obligada a aumentar su propia entropía."

explicacion: |
  Falso. Una reacción puede disminuir su propia entropía (ej.: la formación de hielo) siempre que el entorno compense con un aumento mayor, de modo que la entropía TOTAL del universo aumente.
```

### 5 — Cálculo de la energía libre de Gibbs

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "calculo"]

variables:
  datos: [[-40, 100, 0.1], [-20, 200, 0.2], [20, 300, 0.1], [40, 100, 0.2]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][0] - datos[idx][1] * datos[idx][2]
tipo: input
tolerancia_abs: 0.5

enunciado: "Calculá ΔG para una reacción con ΔH = {datos[idx][0]} kJ/mol, T = {datos[idx][1]} K y ΔS = {datos[idx][2]} kJ/(K·mol)."

pasos:
  - "ΔG = ΔH - T × ΔS"

explicacion: |
  ΔG = {datos[idx][0]} - ({datos[idx][1]} × {datos[idx][2]}).
```

### 6 — Espontaneidad con ΔG negativo

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "espontaneidad"]

respuesta: "espontanea"
tipo: mc
opciones_explicitas: ["espontanea", "no espontanea", "esta en equilibrio", "imposible"]

enunciado: "Si ΔG es negativo, la reacción es..."

explicacion: |
  ΔG < 0 indica que el proceso es termodinámicamente espontáneo.
```

### 7 — Espontaneidad con ΔG positivo

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "espontaneidad"]

respuesta: "no espontanea"
tipo: mc
opciones_explicitas: ["no espontanea", "espontanea", "esta en equilibrio", "imposible"]

enunciado: "Si ΔG es positivo, la reacción es..."

explicacion: |
  ΔG > 0 indica que la reacción directa no es espontánea (la inversa sí lo sería).
```

### 8 — Equilibrio termodinámico

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Si ΔG es igual a 0, el sistema está en equilibrio."

explicacion: |
  Cuando ΔG = 0, no hay tendencia neta hacia reactivos ni hacia productos: equilibrio.
```

### 9 — Exotérmica y aumento de desorden

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: verdadero
tipo: vf

enunciado: "Si una reacción tiene ΔH negativo (libera calor) y ΔS positivo (más desorden), es espontánea a cualquier temperatura."

explicacion: |
  ΔG = ΔH - TΔS: con ΔH negativo y -TΔS también negativo (porque ΔS>0), la suma siempre da ΔG < 0, sin importar T.
```

### 10 — Endotérmica y disminución de desorden

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: verdadero
tipo: vf

enunciado: "Si una reacción tiene ΔH positivo (absorbe calor) y ΔS negativo (más orden), nunca es espontánea."

explicacion: |
  ΔH positivo y -TΔS también positivo (porque ΔS<0): la suma siempre da ΔG > 0, para cualquier temperatura.
```

### 11 — Exotérmica y disminución de desorden

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: "solo a temperaturas bajas"
tipo: mc
opciones_explicitas: ["solo a temperaturas altas", "solo a temperaturas bajas", "siempre", "nunca"]

enunciado: "Para una reacción con ΔH < 0 y ΔS < 0, ¿cuándo es espontánea?"

explicacion: |
  El término -TΔS es positivo (compite contra el ΔH negativo). A temperaturas bajas ese término pesa poco y gana el ΔH negativo: ΔG < 0.
```

### 12 — Endotérmica y aumento de desorden

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: "solo a temperaturas altas"
tipo: mc
opciones_explicitas: ["solo a temperaturas altas", "solo a temperaturas bajas", "siempre", "nunca"]

enunciado: "Para una reacción con ΔH > 0 y ΔS > 0, ¿cuándo es espontánea?"

explicacion: |
  El término -TΔS es negativo y crece con la temperatura. A temperaturas altas ese término supera al ΔH positivo: ΔG < 0.
```

### 13 — Relación entre ΔG° y Kc

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más negativo es el ΔG° estándar, mayor es la constante de equilibrio Kc de esa reacción."

explicacion: |
  ΔG° = -RT×ln(Kc): un ΔG° muy negativo implica un ln(Kc) grande y positivo, entonces Kc es grande.
```

### 14 — ΔG en el equilibrio

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["equilibrio", "termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "En el equilibrio químico, ΔG es igual a 0."

explicacion: |
  En el equilibrio no hay tendencia espontánea al cambio en ninguna dirección: ΔG = 0.
```

### 15 — La ecuación de Gibbs

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica"]

respuesta: "S"
tipo: completar
respuestas_validas:
  - "S"
  - "entropia"

enunciado: "La ecuación de Gibbs es ΔG = ΔH - T × Δ___."

explicacion: |
  ΔG = ΔH - T×ΔS, donde ΔS es el cambio de entropía del sistema.
```

### 16 — Unidades de temperatura en Gibbs

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "unidades"]

respuesta: verdadero
tipo: vf

enunciado: "La temperatura T en la ecuación de Gibbs debe expresarse en Kelvin."

explicacion: |
  Igual que en las otras fórmulas termodinámicas de este tronco, T siempre va en la escala absoluta.
```

### 17 — Comparación de dos reacciones por ΔG

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "avanzado"
  tags: ["comparacion", "espontaneidad"]

respuesta: "la reacción con ΔG = -50 kJ/mol"
tipo: mc
opciones_explicitas: ["la reacción con ΔG = -50 kJ/mol", "la reacción con ΔG = +10 kJ/mol", "ambas son igual de espontáneas", "ninguna es espontánea"]

enunciado: "Entre dos reacciones, una con ΔG = -50 kJ/mol y otra con ΔG = +10 kJ/mol, ¿cuál es espontánea?"

explicacion: |
  Sólo la que tiene ΔG negativo (-50 kJ/mol) es espontánea. La de +10 kJ/mol necesita energía externa para ocurrir.
```

### 18 — ΔG no depende sólo de ΔH

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Una reacción exotérmica (ΔH negativo) siempre es espontánea, sin importar el valor de ΔS."

explicacion: |
  Falso. Si ΔS también es negativo, a temperaturas muy altas el término -TΔS puede volverse más positivo que lo que ΔH aporta de negativo, haciendo ΔG > 0.
```

### 19 — El signo de ΔG y la reacción inversa

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "avanzado"
  tags: ["conceptos", "reversibilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si una reacción directa tiene ΔG > 0 (no espontánea), la reacción inversa tiene ΔG < 0 (sí es espontánea)."

explicacion: |
  Verdadero. El ΔG de la reacción inversa es el opuesto exacto del de la reacción directa (mismo valor absoluto, signo contrario).
```

### 20 — Espontaneidad no es lo mismo que velocidad

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "avanzado"
  tags: ["conceptos", "cinetica"]

respuesta: falso
tipo: vf

enunciado: "Una reacción espontánea (ΔG < 0) siempre ocurre rápido, en la práctica."

explicacion: |
  Falso. Espontaneidad (termodinámica) y velocidad (cinética) son cosas distintas — ver ../cinetica-reaccion/. La oxidación del hierro es espontánea pero muy lenta.
```
