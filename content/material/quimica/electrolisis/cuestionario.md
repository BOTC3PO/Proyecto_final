# Química — Electrólisis (cuestionario, 20 preguntas VBLang)

> Tema: `QY`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma, en paralelo) y
> corregido a mano. Bug de esta tanda: `uno_de([...])[opcion_idx]` — de
> nuevo, indexar el resultado escalar de `uno_de(...)` — en una
> pregunta que además tenía respuesta fija, sin necesidad de sorteo.

---

### 1 — Naturaleza de la reacción en la electrólisis

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["redox", "espontaneidad"]

respuesta: verdadero
tipo: vf

enunciado: "En la electrólisis se usa una corriente eléctrica externa para forzar una reacción redox no espontánea."

explicacion: |
  A diferencia de las pilas (que liberan energía), en la electrólisis se suministra energía para forzar la reacción.
```

### 2 — Espontaneidad de la electrólisis

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["espontaneidad"]

respuesta: falso
tipo: vf

enunciado: "La electrólisis es un proceso que ocurre de forma espontánea, sin necesidad de una fuente de corriente externa."

explicacion: |
  Falso. Si fuera espontánea no haría falta aplicar electricidad — sería una pila galvánica.
```

### 3 — Relación entre pila y electrólisis

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: "el proceso opuesto (espejo) de la pila"
tipo: mc
opciones_explicitas: ["el proceso opuesto (espejo) de la pila", "un proceso idéntico a la pila", "un proceso no relacionado con la pila", "un proceso mucho más rápido que la pila"]

enunciado: "En términos de flujo de energía, la electrólisis es..."

explicacion: |
  La pila convierte energía química en eléctrica (espontánea); la electrólisis convierte energía eléctrica en química (no espontánea) — son procesos opuestos.
```

### 4 — Energía libre de Gibbs en electrólisis

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "intermedio"
  tags: ["termodinamica", "delta_g"]

respuesta: verdadero
tipo: vf

enunciado: "En una reacción de electrólisis, ΔG es mayor que cero (la reacción no es espontánea)."

explicacion: |
  ΔG > 0 caracteriza a las reacciones no espontáneas, que necesitan energía externa.
```

### 5 — Definición de ánodo en electrólisis

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "reacciones_redox"]

respuesta: verdadero
tipo: vf

enunciado: "En electrólisis, el ánodo sigue siendo el electrodo donde ocurre la oxidación, igual que en la pila."

explicacion: |
  El nombre "ánodo" siempre significa oxidación, sea pila o electrólisis.
```

### 6 — Polaridad del ánodo en electrólisis

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "polaridad"]

respuesta: verdadero
tipo: vf

enunciado: "En una celda electrolítica, el ánodo tiene polaridad POSITIVA, a diferencia de la pila (donde es negativo)."

explicacion: |
  En electrólisis, el ánodo se conecta al polo positivo de la fuente externa.
```

### 7 — Polaridad del cátodo en electrólisis

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "polaridad"]

respuesta: verdadero
tipo: vf

enunciado: "En electrólisis, el cátodo es el polo NEGATIVO de la celda."

explicacion: |
  El cátodo recibe electrones del polo negativo de la fuente externa.
```

### 8 — Reacción en el ánodo (verificación)

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "reacciones_redox"]

respuesta: falso
tipo: vf

enunciado: "En una celda de electrólisis, la reducción ocurre en el ánodo."

explicacion: |
  Falso. La reducción sigue ocurriendo en el cátodo; la oxidación en el ánodo — no cambia con la polaridad.
```

### 9 — Cátodo en la electrólisis del agua

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "catodo", "hidrogeno"]

respuesta: verdadero
tipo: vf

enunciado: "En la electrólisis del agua, en el cátodo se forma hidrógeno gaseoso."

explicacion: |
  En el cátodo ocurre la reducción, liberando H₂.
```

### 10 — Ánodo en la electrólisis del agua

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrolisis", "anodo", "oxigeno"]

respuesta: verdadero
tipo: vf

enunciado: "En la electrólisis del agua, en el ánodo se forma oxígeno gaseoso."

explicacion: |
  En el ánodo ocurre la oxidación, liberando O₂.
```

### 11 — Cálculo de volumen de H₂

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "intermedio"
  tags: ["estequiometria", "volumen", "gas"]

variables:
  volumen_o2: uno_de([1, 2, 3, 5])

respuesta: volumen_o2 * 2
tipo: input
tolerancia_abs: 0.01

enunciado: "En la electrólisis del agua la proporción H₂:O₂ es 2:1. Si se producen {volumen_o2} mL de O₂, ¿qué volumen de H₂ se produce?"

pasos:
  - "H2 = O2 × 2"

explicacion: |
  {volumen_o2} × 2 mL de H₂.
```

### 12 — Relación estequiométrica y fórmula

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["estequiometria", "formula_quimica"]

respuesta: verdadero
tipo: vf

enunciado: "La proporción 2:1 de H₂ a O₂ en la electrólisis del agua coincide con la fórmula química del agua (H₂O)."

explicacion: |
  Correcto: 2 átomos de H por cada 1 de O, igual que en la molécula.
```

### 13 — Aplicación de la electrólisis

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "intermedio"
  tags: ["aplicaciones", "procesos_industriales"]

variables:
  escenario: [["galvanoplastia", "recubrir un objeto con una capa fina de otro metal"], ["electrorrefinacion", "purificar metales como el cobre"], ["produccion de aluminio", "obtener el metal a partir del mineral"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["recubrir un objeto con una capa fina de otro metal", "purificar metales como el cobre", "obtener el metal a partir del mineral"]

enunciado: "¿Cuál es la descripción de la aplicación '{escenario[idx][0]}'?"

explicacion: |
  {escenario[idx][0]} consiste en: {escenario[idx][1]}.
```

### 14 — Uso de la galvanoplastia

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["galvanoplastia"]

respuesta: verdadero
tipo: vf

enunciado: "La galvanoplastia usa la electrólisis para cromar o platear objetos."

explicacion: |
  Correcto. La corriente deposita una capa metálica sobre la superficie del objeto.
```

### 15 — Termodinámica de la electrólisis

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "intermedio"
  tags: ["termodinamica", "energia"]

respuesta: falso
tipo: vf

enunciado: "La electrólisis no necesita energía externa porque ΔG de la reacción es negativo."

explicacion: |
  Falso. Necesita energía externa justamente porque ΔG es positivo (no espontánea).
```

### 16 — Electrorrefinación del cobre

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["electrorrefinacion", "cobre"]

respuesta: verdadero
tipo: vf

enunciado: "La electrorrefinación del cobre es un ejemplo de aplicación industrial de la electrólisis."

explicacion: |
  Correcto, se usa para purificar metales como el cobre.
```

### 17 — Fuente de la energía en electrólisis

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "una fuente eléctrica externa (batería o generador)"
tipo: mc
opciones_explicitas: ["una fuente eléctrica externa (batería o generador)", "la propia reacción química espontánea", "el calor ambiente", "la luz solar siempre"]

enunciado: "¿De dónde sale la energía que hace posible la electrólisis?"

explicacion: |
  Al no ser espontánea, la energía tiene que venir de afuera: una fuente eléctrica externa.
```

### 18 — Comparación de flujo de energía con la pila

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "avanzado"
  tags: ["comparacion", "pilas"]

respuesta: verdadero
tipo: vf

enunciado: "Mientras la pila transforma energía química en eléctrica, la electrólisis transforma energía eléctrica en química."

explicacion: |
  Correcto — son procesos con el flujo de energía invertido entre sí.
```

### 19 — Electrólisis y sales fundidas

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "avanzado"
  tags: ["aplicacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La electrólisis también se puede aplicar a sales fundidas (sin agua), no sólo a soluciones acuosas."

explicacion: |
  Correcto. Por ejemplo, la obtención industrial de sodio y cloro se hace por electrólisis de NaCl fundido, no en solución acuosa.
```

### 20 — Cantidad de corriente y cantidad de producto

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "avanzado"
  tags: ["conceptos", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanta más corriente eléctrica (y más tiempo) se aplique en una electrólisis, más producto se forma en los electrodos."

explicacion: |
  Correcto. La cantidad de electrones que pasan (carga total) determina cuánta sustancia se oxida o reduce — más corriente y tiempo, más producto.
```
