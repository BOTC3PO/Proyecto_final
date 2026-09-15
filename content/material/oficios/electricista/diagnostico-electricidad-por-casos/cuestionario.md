# Oficios — Electricista — Diagnóstico de instalaciones por casos (cuestionario, 20 preguntas VBLang)

> Cierre del oficio (`OF1`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de fallas
> eléctricas — cada pregunta validada con parse+lint+compile+generate
> real de packages/vblang antes de guardarse.

---

### 1 — El método de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "medir antes de suponer, aislando la variable"
tipo: mc
opciones_explicitas: ["medir antes de suponer, aislando la variable", "cambiar piezas al azar hasta que funcione", "ignorar el problema si no se repite enseguida"]

enunciado: "Según la teoría, ¿cuál es el método correcto frente a una falla eléctrica?"

explicacion: |
  Identificar si el problema es general o puntual, medir antes de
  suponer, y aislar la variable probando el mismo elemento en otro
  punto cuando sea posible.
```

### 2 — Disyuntor que salta al restablecerlo sin nada conectado

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "una fuga a tierra real en la instalación fija"
tipo: mc
opciones_explicitas: ["una fuga a tierra real en la instalación fija", "un electrodoméstico específico dañado", "una térmica mal calibrada"]

enunciado: "Si el disyuntor diferencial salta de inmediato al restablecerlo, sin ningún artefacto conectado, la causa más probable es..."

explicacion: |
  Casi siempre es una fuga a tierra en la instalación fija, no un
  problema de un electrodoméstico en particular.
```

### 3 — Cómo ubicar la fuga del caso 1

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "desconectar los circuitos uno por uno y restablecer el disyuntor después de cada uno"
tipo: mc
opciones_explicitas: ["desconectar los circuitos uno por uno y restablecer el disyuntor después de cada uno", "cambiar el disyuntor directamente por uno nuevo", "aumentar la capacidad del disyuntor"]

enunciado: "Para ubicar en qué circuito está la fuga a tierra del caso anterior, el método correcto es..."

explicacion: |
  El circuito que, al desconectarlo, permite que el disyuntor quede
  arriba sin saltar, es el que tiene la fuga.
```

### 4 — Disyuntor que salta solo con un artefacto puntual

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Si el disyuntor salta específicamente al encender un electrodoméstico puntual, la fuga suele estar en ese artefacto, no en la instalación fija."

explicacion: |
  Probar el mismo artefacto en otro tomacorriente de otro circuito
  confirma si la falla está en el artefacto: si vuelve a hacer saltar
  el disyuntor ahí también, el problema es del artefacto.
```

### 5 — Cómo confirmar el diagnóstico del caso 2

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "probar el mismo artefacto en un tomacorriente de otro circuito"
tipo: mc
opciones_explicitas: ["probar el mismo artefacto en un tomacorriente de otro circuito", "medir la tensión de toda la casa con un telurómetro", "esperar a que el problema se repita solo"]

enunciado: "¿Cómo se confirma que la falla del caso 2 está en el artefacto y no en la instalación?"

explicacion: |
  Si el artefacto vuelve a hacer saltar el disyuntor en otro circuito,
  la falla es del artefacto, no de la instalación fija.
```

### 6 — Térmica que salta con varios artefactos de alto consumo

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: falso
tipo: vf

enunciado: "Cuando la protección termomagnética salta al usar varios artefactos de alto consumo al mismo tiempo, generalmente hay una falla real de aislación en la instalación."

explicacion: |
  Falso. Generalmente no hay ninguna falla real: la corriente demandada
  supera la capacidad calibrada de la protección o la sección del
  cable, no hay ningún cortocircuito ni fuga.
```

### 7 — Qué NO hacer frente al caso 3

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, la solución correcta frente al caso 3 es poner una térmica de mayor capacidad, sin necesidad de verificar antes si el cable soporta esa corriente mayor."

explicacion: |
  Falso. Hacer eso sin verificar el cable convierte un disparo seguro
  (la protección cortando a tiempo) en un riesgo de recalentamiento
  silencioso del conductor.
```

### 8 — Una zona de la casa sin luz, el resto funciona

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "basico"
  tags: ["caso 4"]

variables:
  n: uno_de([1, 1])

respuesta: "revisar sólo el circuito de esa zona, no el tablero general"
tipo: mc
opciones_explicitas: ["revisar sólo el circuito de esa zona, no el tablero general", "revisar el tablero general primero, siempre", "cortar la luz de toda la casa antes de diagnosticar"]

enunciado: "Si se corta la luz sólo en un dormitorio mientras el resto de la casa funciona con normalidad, el diagnóstico correcto empieza por..."

explicacion: |
  El problema está acotado a ese circuito específico; no tiene sentido
  revisar el tablero general si el resto de los circuitos funciona
  bien.
```

### 9 — Posibles causas del caso 4

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "intermedio"
  tags: ["caso 4"]

variables:
  causa: uno_de(["la protección de ese circuito disparada", "un empalme flojo en una caja de paso de ese tramo", "una lámpara o interruptor con falla puntual"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para que una sola zona de la casa se quede sin luz mientras el resto funciona."

explicacion: |
  Las tres son causas mencionadas para el caso 4, todas acotadas al
  circuito específico de esa zona.
```

### 10 — Tomacorriente sin tensión, circuito "bien"

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "avanzado"
  tags: ["caso 5"]

variables:
  n: uno_de([1, 1])

respuesta: "un empalme flojo o cortado en el tramo que alimenta a ese tomacorriente"
tipo: mc
opciones_explicitas: ["un empalme flojo o cortado en el tramo que alimenta a ese tomacorriente", "una falla general del tablero principal", "una sobrecarga de toda la instalación"]

enunciado: "Un tomacorriente puntual no tiene tensión, la protección de su circuito no saltó, y otros tomacorrientes del mismo circuito sí funcionan. La causa más probable es..."

explicacion: |
  Suele ser un empalme flojo o cortado específicamente en el tramo que
  alimenta a ese tomacorriente, no un problema del circuito en
  general.
```

### 11 — Cómo ubicar la falla del caso 5

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "avanzado"
  tags: ["caso 5"]

respuesta: verdadero
tipo: vf

enunciado: "Medir con el multímetro punto por punto, desde el tablero hacia el tomacorriente, permite ubicar exactamente en qué tramo se corta la continuidad del caso 5."

explicacion: |
  Es el método de aislar la variable tramo por tramo, en vez de
  suponer dónde está el corte.
```

### 12 — Primer paso ante cualquier síntoma

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "identificar si el problema es general o puntual"
tipo: mc
opciones_explicitas: ["identificar si el problema es general o puntual", "cambiar el disyuntor directamente", "avisar que la instalación entera está mal"]

enunciado: "Según el método resumido de la teoría, el primer paso frente a cualquier síntoma eléctrico es..."

explicacion: |
  Identificar si el problema es general (todo el tablero, todo un
  circuito) o puntual (un artefacto, un tomacorriente) orienta todo el
  resto del diagnóstico.
```

### 13 — Diferencial vs. termomagnética: qué detecta cada una

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "intermedio"
  tags: ["diferenciacion"]

respuesta: verdadero
tipo: vf

enunciado: "El disyuntor diferencial y la protección termomagnética (térmica) cumplen funciones distintas: el diferencial detecta fugas de corriente, la térmica detecta sobrecarga o cortocircuito."

explicacion: |
  Por eso el caso 1/2 (fuga real) hace saltar al diferencial, mientras
  que el caso 3 (exceso de consumo simultáneo) hace saltar a la
  térmica — son síntomas distintos con causas distintas.
```

### 14 — Cambiar piezas sin medir

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, cambiar piezas sin medir es una forma confiable y económica de solucionar una falla eléctrica."

explicacion: |
  Falso. Es la forma más cara y menos confiable de \"solucionar\" una
  falla, porque no identifica la causa real.
```

### 15 — Diagnóstico es un proceso de eliminación

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "El diagnóstico eléctrico es un proceso de eliminación: se parte de un síntoma visible y se descartan causas posibles con mediciones concretas."

explicacion: |
  Es la idea central del enfoque de diagnóstico de todo el oficio.
```

### 16 — Por qué el caso 1 y el caso 2 se distinguen

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "si el disyuntor salta sin nada conectado (instalación) o sólo al usar un artefacto puntual (el artefacto)"
tipo: mc
opciones_explicitas: ["si el disyuntor salta sin nada conectado (instalación) o sólo al usar un artefacto puntual (el artefacto)", "el color del cable involucrado", "la hora del día en que ocurre la falla"]

enunciado: "¿Qué dato distingue si una fuga a tierra está en la instalación fija (caso 1) o en un artefacto puntual (caso 2)?"

explicacion: |
  Si salta sin nada conectado, la fuga es de la instalación; si salta
  sólo al usar un artefacto específico, la fuga está en ese artefacto.
```

### 17 — Nombre técnico de la protección que corta por sobrecorriente

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "intermedio"
  tags: ["vocabulario"]

variables:
  n: uno_de([1, 1])

respuesta: "termomagnética"
tipo: completar

enunciado: "La protección que corta el circuito al detectar sobrecorriente (antes de que el cable se caliente peligrosamente) se llama protección ___."

respuestas_validas:
  - "termomagnética"
  - "termo magnetica"

explicacion: |
  Es la que interviene en el caso 3, distinta del disyuntor
  diferencial que interviene en los casos 1 y 2.
```

### 18 — Aislar la variable

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "intermedio"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Probar el mismo elemento sospechoso en otro punto de la instalación, cuando es posible, es parte del método de diagnóstico que propone la teoría."

explicacion: |
  Es el tercer paso del método resumido: aislar la variable probando
  el mismo elemento en otro punto.
```

### 19 — El caso más difícil de ubicar sin medir

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "avanzado"
  tags: ["caso 5"]

respuesta: verdadero
tipo: vf

enunciado: "En el caso 5 (tomacorriente puntual sin tensión), el circuito en general no muestra ningún síntoma (la protección no salta, otros tomacorrientes funcionan), lo que hace necesario medir tramo por tramo para encontrar la falla."

explicacion: |
  A diferencia de los casos 1-3, acá no hay disparo de protección que
  oriente el diagnóstico — sólo la medición punto por punto lo
  resuelve.
```

### 20 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "electricista_diagnostico_electricidad_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los cinco casos de este tema comparten la misma lógica: distinguir si el problema es general o puntual, medir antes de suponer, y aislar la variable."

explicacion: |
  Es la síntesis final del método de diagnóstico eléctrico de todo el
  tema.
```
