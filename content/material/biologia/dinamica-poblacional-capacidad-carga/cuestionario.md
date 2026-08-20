# Biología — Dinámica poblacional: crecimiento y capacidad de carga (cuestionario, 25 preguntas VBLang)

> Tema: `BP`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); un
> `recurso: uno_de([...])` (ya devuelve un string escalar) indexado
> después como `recurso[idx]` (indexación inválida de un escalar) —
> corregido a uso directo de la variable; `tipo: vf`/`completar` con
> `opciones_explicitas`/`respuestas_validas` conteniendo más de una
> opción "válida" cuando sólo una lo era — recortado a la correcta;
> un bloque con `tipo: input` (tipo no confirmado en el DSL, nunca
> usado en el resto del mapa) — normalizado a `completar`; `tipo:`
> entrecomillado en varios bloques — sin comillas.

---

### 1 — Definición de población

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["poblacion", "definicion"]

respuesta: "grupo de individuos de la misma especie que habitan en un mismo lugar y tiempo"
tipo: completar
respuestas_validas:
  - "grupo de individuos de la misma especie que habitan en un mismo lugar y tiempo"

enunciado: "En biología, una población se define como un ___."

explicacion: |
  Una población es un conjunto de organismos de la misma especie que coexisten en un área determinada y en un momento específico, permitiendo la interacción entre sus miembros.
```

### 2 — Crecimiento exponencial

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["crecimiento_exponencial", "curva_j"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["bacteria", "2"], ["levadura", "3"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "2"
  - "3"

enunciado: "Si una población de {datos[escenario_idx][0]} se duplica en cada intervalo de tiempo, y empezamos con una unidad, el crecimiento sigue un modelo exponencial donde el factor de multiplicación por intervalo es ___."

explicacion: |
  En el modelo de crecimiento exponencial, la tasa de crecimiento es proporcional al número de individuos presentes, lo que genera una curva en forma de 'J'.
```

### 3 — Factores limitantes ausentes en el modelo exponencial

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["factores_limitantes", "recursos"]

respuesta: "recursos"
tipo: completar
respuestas_validas:
  - "recursos"

enunciado: "El crecimiento exponencial teórico asume que no existen limitaciones por ___ como alimento o espacio."

explicacion: |
  El modelo exponencial es un modelo idealizado donde los recursos son infinitos, lo que permite que la población crezca sin frenos.
```

### 4 — Curva de crecimiento exponencial

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["curva_j", "curva_s"]

respuesta: "J"
tipo: completar
respuestas_validas:
  - "J"

enunciado: "Cuando una población crece de manera exponencial sin restricciones, la representación gráfica de su crecimiento tiene forma de letra ___."

explicacion: |
  La forma de 'J' representa la aceleración constante del crecimiento conforme la base de individuos aumenta.
```

### 5 — Tasa de crecimiento intrínseca

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "avanzado"
  tags: ["tasa_crecimiento", "modelo_exponencial"]

variables:
  caso_idx: uno_de([0, 1])
  valores: [["0.5", "0.8"], ["1.2", "1.5"]]

respuesta: valores[caso_idx][0]
tipo: completar
respuestas_validas:
  - "0.5"
  - "0.8"
  - "1.2"
  - "1.5"

enunciado: "En un modelo de crecimiento exponencial, la tasa de crecimiento intrínseca para el caso seleccionado es de ___ por individuo por unidad de tiempo."

explicacion: |
  En el modelo exponencial, la tasa de crecimiento per cápita se mantiene constante, lo que provoca que el número total de individuos crezca cada vez más rápido.
```

### 6 — Curva de crecimiento logístico

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["crecimiento_logistico", "curva_S"]

tipo: mc
opciones_explicitas: ["Curva exponencial", "Curva en forma de J", "Curva en forma de S", "Curva de decaimiento"]
respuesta: "Curva en forma de S"

enunciado: "El crecimiento logístico de una población se caracteriza por presentar una curva con forma de ___ debido a la limitación de recursos."

explicacion: |
  A diferencia del crecimiento exponencial (forma de J), el crecimiento logístico se estabiliza cuando la población alcanza la capacidad de carga, resultando en una curva sigmoidea o en forma de S.
```

### 7 — Competencia como freno del crecimiento

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["factores_limitantes", "competencia"]

tipo: vf
respuesta: verdadero

enunciado: "La competencia por recursos como alimento y espacio es uno de los factores que frena el crecimiento poblacional en un modelo logístico."

explicacion: |
  Verdadero. En el modelo logístico, a medida que la población aumenta, la disponibilidad de recursos por individuo disminuye, lo que reduce la tasa de crecimiento hasta que se estabiliza.
```

### 8 — Concepto de capacidad de carga

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["capacidad_carga", "K"]

tipo: mc
opciones_explicitas: ["La tasa máxima de natalidad", "El número máximo de individuos que un ambiente puede sostener", "La velocidad de extinción de una especie", "El número total de nacimientos en un año"]
respuesta: "El número máximo de individuos que un ambiente puede sostener"

enunciado: "En dinámica de poblaciones, el término 'Capacidad de Carga' (K) se refiere a:"

explicacion: |
  La capacidad de carga es el límite superior de población que un ecosistema determinado puede mantener de forma sostenible, considerando los recursos disponibles.
```

### 9 — Comportamiento de la tasa de crecimiento

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "avanzado"
  tags: ["tasa_crecimiento", "logistica"]

tipo: vf
respuesta: falso

enunciado: "En un modelo de crecimiento logístico, la tasa de crecimiento de la población es máxima cuando la población es igual a la capacidad de carga (K)."

explicacion: |
  Falso. La tasa de crecimiento es máxima cuando la población alcanza la mitad de la capacidad de carga (K/2). Cuando la población se acerca a K, la tasa de crecimiento tiende a cero.
```

### 10 — Estabilización poblacional

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["estabilizacion", "recursos"]

tipo: mc
opciones_explicitas: ["La población crece indefinidamente", "La población se estabiliza cerca de la capacidad de carga", "La población se divide en dos especies distintas", "La población entra en un ciclo de extinción inmediata"]
respuesta: "La población se estabiliza cerca de la capacidad de carga"

enunciado: "Cuando una población alcanza el equilibrio con su entorno en un modelo logístico, ¿qué sucede con el tamaño de la población?"

explicacion: |
  La población tiende a estabilizarse alrededor de la capacidad de carga (K), donde la tasa de natalidad y la tasa de mortalidad se equilibran.
```

### 11 — Concepto de capacidad de carga (símbolo K)

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["ecologia", "poblaciones"]

respuesta: "K"
tipo: completar
respuestas_validas:
  - "K"

enunciado: "El valor máximo de individuos de una especie que un entorno puede sostener de forma indefinida se denomina capacidad de carga, y se representa con la letra ___."

explicacion: |
  La capacidad de carga, representada frecuentemente con la letra K, es el límite de población que los recursos de un ecosistema pueden soportar.
```

### 12 — Recursos que determinan la capacidad de carga

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["recursos", "factores_limitantes"]

variables:
  recurso: uno_de(["comida", "agua", "espacio", "refugio"])

respuesta: recurso
tipo: completar
respuestas_validas:
  - "comida"
  - "agua"
  - "espacio"
  - "refugio"

enunciado: "La capacidad de carga de un ecosistema está determinada por la disponibilidad de recursos esenciales. Si el recurso considerado en este caso es {recurso}, escribí ese mismo recurso como respuesta: ___."

explicacion: |
  Los recursos limitantes (comida, agua, espacio y refugio) son los que impiden que una población crezca infinitamente.
```

### 13 — K no es un número fijo

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["variabilidad", "entorno"]

respuesta: "fijo"
tipo: completar
respuestas_validas:
  - "fijo"

enunciado: "La capacidad de carga no es un número ___, ya que puede cambiar si las condiciones ambientales o la disponibilidad de recursos varían."

explicacion: |
  Si hay un incendio o una sequía, la capacidad de carga disminuye; si hay abundancia de lluvias, puede aumentar. Por eso no es un valor constante.
```

### 14 — Efecto de la degradación ambiental sobre K

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "avanzado"
  tags: ["ecologia", "factores_ambientales"]

respuesta: "cambia"
tipo: completar
respuestas_validas:
  - "cambia"
  - "disminuye"

enunciado: "Si un ecosistema sufre una degradación de su suelo que reduce la disponibilidad de plantas, la capacidad de carga de los herbívoros en ese lugar ___."

explicacion: |
  Al reducirse la base de recursos (comida), el entorno puede sostener a menos individuos, por lo tanto, la capacidad de carga disminuye.
```

### 15 — Equilibrio poblacional en K

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["dinamica", "equilibrio"]

respuesta: "recursos"
tipo: completar
respuestas_validas:
  - "recursos"

enunciado: "Cuando una población alcanza su capacidad de carga, se establece un equilibrio dinámico determinado por la disponibilidad de ___."

explicacion: |
  El equilibrio se alcanza cuando la tasa de natalidad y mortalidad se estabilizan debido a la limitación de los recursos disponibles en el medio.
```

### 16 — El concepto de capacidad de carga (síntesis)

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["ecologia", "capacidad_de_carga"]

tipo: mc
opciones_explicitas: ["El número máximo de individuos que un ambiente puede sostener indefinidamente", "El número total de individuos que nacen en un año", "El límite físico donde la población se extingue inmediatamente", "La cantidad de alimento disponible en un ecosistema"]
respuesta: "El número máximo de individuos que un ambiente puede sostener indefinidamente"

enunciado: "En ecología, ¿qué representa el concepto de capacidad de carga (K)?"

explicacion: |
  La capacidad de carga (K) es el número máximo de individuos de una especie que un entorno específico puede sostener de manera sostenible, considerando los recursos disponibles como alimento, agua y espacio.
```

### 17 — Superación de la capacidad de carga

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["mortalidad", "recursos"]

tipo: completar
respuesta: "ambas"
respuestas_validas:
  - "ambas"

enunciado: "Cuando una población supera ampliamente su capacidad de carga, aumenta la mortalidad y disminuye la natalidad — es decir, ocurren ___ cosas a la vez."

explicacion: |
  Al exceder la capacidad de carga, la competencia por recursos se vuelve intensa. Esto provoca un aumento en la mortalidad por falta de alimento o refugio, y una disminución en la natalidad debido al estrés nutricional y ambiental.
```

### 18 — Naturaleza dinámica de K

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["equilibrio", "K"]

tipo: mc
opciones_explicitas: ["K es un techo absoluto que la población nunca puede tocar", "K es un punto de equilibrio dinámico donde la población oscila", "K es el número de individuos que mueren en cada ciclo", "K es la velocidad de reproducción de la especie"]

respuesta: "K es un punto de equilibrio dinámico donde la población oscila"

enunciado: "Sobre la relación entre la población real (N) y la capacidad de carga (K), es correcto afirmar que:"

explicacion: |
  La capacidad de carga no es un muro infranqueable, sino un punto de equilibrio. La población suele oscilar alrededor de K debido a las retroalimentaciones entre la disponibilidad de recursos y el tamaño poblacional.
```

### 19 — Factores dependientes de la densidad

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["factores_densidad"]

tipo: completar
respuesta: "factores dependientes de la densidad"
respuestas_validas:
  - "factores dependientes de la densidad"

enunciado: "El aumento de la competencia por recursos cuando la población supera su capacidad de carga es un ejemplo de: ___"

explicacion: |
  Los factores dependientes de la densidad (como la competencia, la depredación o la enfermedad) son aquellos cuya intensidad aumenta a medida que la población crece, regulando así el tamaño poblacional cerca de K.
```

### 20 — Overshoot y vuelta al equilibrio

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "avanzado"
  tags: ["caida_poblacional", "recursos"]

tipo: mc
opciones_explicitas: ["La población cae por debajo de K y luego se estabiliza", "La población crece exponencialmente sin detenerse", "La población se mantiene constante por encima de K", "La población se mantiene en un crecimiento lineal"]

respuesta: "La población cae por debajo de K y luego se estabiliza"

enunciado: "Si una población experimenta un crecimiento explosivo que sobrepasa la capacidad de carga (overshoot), ¿cuál es la respuesta típica del sistema?"

explicacion: |
  El exceso de individuos agota los recursos, provocando una caída en la población (a menudo por debajo de K debido al daño ambiental causado), para luego estabilizarse nuevamente en un ciclo de equilibrio.
```

### 21 — Crecimiento inicial de especies introducidas

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["crecimiento_exponencial", "especies_invasoras"]

variables:
  escenario: uno_de(["una especie de ratones en una isla sin depredadores", "una población de bacterias en un medio con nutrientes ilimitados"])

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["exponencial", "logístico", "estacionario", "decreciente"]

enunciado: "En el caso de {escenario}, durante las primeras etapas de colonización, el modelo de crecimiento que mejor describe la dinámica poblacional es el de tipo ___."

explicacion: |
  Cuando una especie llega a un nuevo hábitat sin depredadores ni competencia significativa, los recursos son abundantes y la población crece de forma exponencial (J) antes de que los factores limitantes actúen.
```

### 22 — Valor concreto de K

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["capacidad_de_carga", "modelo_logistico"]

respuesta: "500"
tipo: completar
respuestas_validas:
  - "500"

enunciado: "En un modelo de crecimiento logístico, la variable K representa la capacidad de carga del ecosistema. Si un ambiente tiene recursos que sólo permiten sostener a un máximo de 500 individuos de una especie, ¿cuál es el valor de K?"

explicacion: |
  La capacidad de carga (K) es el número máximo de individuos de una especie que un entorno puede sustentar indefinidamente, considerando los recursos disponibles.
```

### 23 — Curva de crecimiento logístico (repaso)

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["curva_logistica", "forma_de_S"]

respuesta: "forma de S"
tipo: mc
opciones_explicitas: ["forma de J", "forma de S", "línea recta", "curva descendente"]

enunciado: "A diferencia del crecimiento exponencial, el crecimiento logístico se caracteriza por presentar una curva con ___ debido a la presencia de factores limitantes."

explicacion: |
  El modelo logístico muestra un crecimiento rápido al principio que se desacelera a medida que la población se acerca a la capacidad de carga, formando una curva sigmoidea o en forma de S.
```

### 24 — Factores dependientes de la densidad (variantes)

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["factores_limitantes", "densidad_dependiente"]

variables:
  factor: uno_de(["la disponibilidad de alimento", "la acumulación de desechos tóxicos", "la competencia por espacio"])

respuesta: "dependiente de la densidad"
tipo: completar
respuestas_validas:
  - "dependiente de la densidad"

enunciado: "Factores como {factor} actúan sobre la población de manera ___ (más fuerte cuanto más densa está la población)."

explicacion: |
  Los factores que afectan la tasa de crecimiento a medida que la población aumenta (como la comida o el espacio) se denominan factores dependientes de la densidad.
```

### 25 — Comparación de modelos: el más realista

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "avanzado"
  tags: ["comparacion_modelos", "recursos"]

variables:
  condicion: uno_de(["recursos limitados", "recursos limitados"])

respuesta: "logístico"
tipo: mc
opciones_explicitas: ["exponencial", "logístico"]

enunciado: "Si consideramos que en un ecosistema real los {condicion} son la norma, el modelo de crecimiento más realista para representar la población a largo plazo es el modelo ___."

explicacion: |
  Aunque el modelo exponencial es útil para entender fases iniciales, el modelo logístico es más preciso para la naturaleza porque reconoce que los recursos son finitos.
```
