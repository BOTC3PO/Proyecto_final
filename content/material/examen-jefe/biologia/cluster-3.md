# Examen jefe — Maestro de la Dinámica Evolutiva

> Logro #151. Completaste el examen jefe dominando los mecanismos de cambio poblacional y molecular. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **131 preguntas totales** en 5/5 secciones.

---

## Sección: cruce-dihibrido (31 preguntas)

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "En un cruce monohíbrido se estudia la herencia de un solo gen a la vez."

explicacion: |
  Correcto. "Mono" indica un solo par de alelos bajo estudio.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Un cruce dihíbrido es aquel en el que se estudian dos genes distintos simultáneamente."

explicacion: |
  Correcto, el prefijo "di-" indica dos genes a la vez.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: "color y forma de la semilla"
tipo: mc
opciones_explicitas: ["color y forma de la semilla", "solo el color de la semilla", "solo la forma de la semilla", "ningún rasgo"]

enunciado: "Si se estudia la herencia del color Y la forma de la semilla al mismo tiempo, ¿qué tipo de cruce es?"

explicacion: |
  Dos características a la vez: cruce dihíbrido.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: falso
tipo: vf

enunciado: "El cruce dihíbrido es más simple que el cruce monohíbrido porque involucra menos genes."

explicacion: |
  Falso, es más complejo: involucra dos pares de genes en vez de uno.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos genes están en cromosomas distintos, se heredan de forma independiente uno del otro."

explicacion: |
  Correcto. Segundo principio de Mendel.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: falso
tipo: vf

enunciado: "Que un descendiente reciba el alelo dominante del gen 1 influye en el alelo que recibe del gen 2."

explicacion: |
  Falso, si los genes son independientes no se influyen.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: "independiente"
tipo: completar
respuestas_validas: ["independiente"]

enunciado: "La ley que dice que los genes en cromosomas distintos se heredan sin influirse entre sí se llama ley de segregación ___."

explicacion: |
  Ley de segregación independiente (2ª ley de Mendel).
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "La segregación independiente permite tratar cada gen como un sorteo aparte y combinar sus probabilidades multiplicándolas."

explicacion: |
  Correcto, es la regla del producto para eventos independientes.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "gametos"]

respuesta: verdadero
tipo: vf

enunciado: "Un individuo con genotipo AaBb puede producir 4 tipos de gametos diferentes."

explicacion: |
  Combina A/a con B/b: AB, Ab, aB, ab.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "gametos"]

respuesta: "AB, Ab, aB, ab"
tipo: mc
opciones_explicitas: ["AB, Ab, aB, ab", "Solo AB y ab", "Aa y Bb", "AABB y aabb"]

enunciado: "Un individuo AaBb produce los siguientes tipos de gametos:"

explicacion: |
  Las 4 combinaciones posibles: AB, Ab, aB, ab.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "gametos"]

respuesta: verdadero
tipo: vf

enunciado: "Un individuo AABB (homocigota para ambos genes) produce un solo tipo de gameto (AB)."

explicacion: |
  Al ser homocigota, todos sus gametos llevan A y B.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "combinatoria"]

variables:
  genes: uno_de([1, 2, 3])

respuesta: 2 ^ genes
tipo: input
tolerancia_abs: 0.01

enunciado: "Un individuo heterocigoto para {genes} genes produce 2 elevado a n tipos de gametos. ¿Cuántos tipos produce?"

pasos:
  - "2^n, con n = {genes}"

explicacion: |
  2^{genes}.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "punnett"]

respuesta: verdadero
tipo: vf

enunciado: "El cuadro de Punnett para un cruce dihíbrido tiene 16 casillas (matriz 4×4)."

explicacion: |
  Cada progenitor aporta 4 tipos de gametos: 4×4=16.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "punnett"]

respuesta: falso
tipo: vf

enunciado: "El cuadro de Punnett para un cruce monohíbrido tiene 16 casillas, igual que el dihíbrido."

explicacion: |
  Falso. El monohíbrido tiene 4 casillas (2×2); 16 es exclusivo del dihíbrido.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "punnett"]

respuesta: "Cada progenitor produce 4 tipos de gametos diferentes"
tipo: mc
opciones_explicitas: ["Cada progenitor produce 4 tipos de gametos diferentes", "Hay 4 alelos en total en el sistema", "El cruce siempre produce 4 hijos en la descendencia", "No tiene una razón particular, es una convención"]

enunciado: "¿Por qué el cuadro de Punnett de un cruce dihíbrido tiene 4 filas y 4 columnas?"

explicacion: |
  Porque cada progenitor produce 4 tipos de gametos posibles.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Al cruzar AaBb × AaBb, la proporción fenotípica clásica es 9:3:3:1."

explicacion: |
  Correcto, es la proporción clásica del cruce dihíbrido.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "En la proporción 9:3:3:1, el 9/16 corresponde a dominante en ambos genes."

explicacion: |
  Correcto, es el grupo mayoritario.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: falso
tipo: vf

enunciado: "En la proporción 9:3:3:1, el 1/16 corresponde a dominante en ambos genes."

explicacion: |
  Falso, el 1/16 es recesivo en ambos genes.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: "1"
tipo: completar
respuestas_validas: ["1", "un"]

enunciado: "En la proporción 9:3:3:1, la fracción recesiva en ambos genes es ___ dieciseisavos."

explicacion: |
  1/16 es la fracción doble recesiva.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["genetica", "mendel"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las 4 fracciones de la proporción 9:3:3:1 (9+3+3+1) da 16."

explicacion: |
  Correcto, es el total de casillas del cuadro dihíbrido.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["mendel", "probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Como los genes son independientes, se puede resolver cada gen por separado (3:1) y multiplicar, en vez de armar las 16 casillas."

explicacion: |
  Correcto, es un atajo válido por la segregación independiente.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["probabilidad", "genetica"]

variables:
  p1: uno_de([3, 1])
  p2: uno_de([3, 1])

respuesta: (p1 / 4) * (p2 / 4)
tipo: input
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb, P(dominante gen1) = {p1}/4 y P(dominante gen2) = {p2}/4. ¿Cuál es la probabilidad combinada?"

pasos:
  - "Multiplicar ambas probabilidades"

explicacion: |
  ({p1}/4) × ({p2}/4).
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar probabilidades de eventos independientes es la misma lógica de la probabilidad compuesta."

explicacion: |
  Correcto — ver ../../matematica/probabilidad-compuesta/.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["mendel", "monohibridismo"]

respuesta: "3/4"
tipo: mc
opciones_explicitas: ["3/4", "1/4", "1/2", "1"]

enunciado: "En Aa × Aa, ¿cuál es la probabilidad de fenotipo dominante en un descendiente?"

explicacion: |
  AA (1/4) + Aa (2/4) = 3/4 con fenotipo dominante.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "probabilidad"]

variables:
  total: uno_de([16, 32, 48, 64])

respuesta: total * 9 / 16
tipo: input
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb con {total} descendientes totales, ¿cuántos se esperan con fenotipo dominante en ambos genes?"

explicacion: |
  {total} × 9/16.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "probabilidad"]

variables:
  total: uno_de([16, 32, 48, 64])

respuesta: total * 1 / 16
tipo: input
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb con {total} descendientes totales, ¿cuántos se esperan con fenotipo recesivo en ambos genes?"

explicacion: |
  {total} × 1/16.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["genetica", "probabilidad"]

variables:
  total: uno_de([16, 32, 48, 64])

respuesta: total * 3 / 16
tipo: input
tolerancia_abs: 0.01

enunciado: "En AaBb × AaBb con {total} descendientes totales, ¿cuántos se esperan con fenotipo dominante en el gen 1 y recesivo en el gen 2?"

explicacion: |
  {total} × 3/16.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "basico"
  tags: ["mendel"]

respuesta: verdadero
tipo: vf

enunciado: "Mendel usó guisantes con forma de semilla (lisa/rugosa) y color (amarillo/verde) como los 2 genes de su cruce dihíbrido clásico."

explicacion: |
  Correcto, es el experimento clásico de Mendel.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["mendel", "proporciones"]

respuesta: verdadero
tipo: vf

enunciado: "La semilla lisa y amarilla (dominante en ambos) es el fenotipo más común, con 9/16 de la descendencia."

explicacion: |
  Correcto, es la proporción mayoritaria.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "intermedio"
  tags: ["mendel", "proporciones"]

respuesta: verdadero
tipo: vf

enunciado: "La semilla rugosa y verde (recesiva en ambos) es la menos común, con 1/16 de la descendencia."

explicacion: |
  Correcto, es la proporción minoritaria.
```

```
metadata:
  materia: "biologia"
  tema: "cruce_dihibrido"
  nivel: "avanzado"
  tags: ["mendel", "segregacion_independiente"]

respuesta: falso
tipo: vf

enunciado: "El cruce dihíbrido de Mendel confirmó que los genes de forma y color se heredan de manera dependiente entre sí."

explicacion: |
  Falso. Confirmó que se heredan de forma INDEPENDIENTE.
```

## Sección: deriva-genetica-flujo-genico (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["genetica", "evolucion", "azar"]

respuesta: "azar"
tipo: completar
respuestas_validas: ["azar"]

enunciado: "La deriva genética se define como el cambio en las frecuencias alélicas de una población debido a eventos de ___."

explicacion: |
  A diferencia de la selección natural, donde los rasgos se heredan por su ventaja adaptativa, la deriva genética es un proceso estocástico (al azar) que afecta la composición genética de la población sin importar si el rasgo es beneficioso o perjudicial.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["poblacion", "tamaño", "deriva"]

variables:
  escenario: uno_de([["una isla pequeña con pocos individuos", "pequeña"], ["un continente con millones de individuos", "grande"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["pequeña", "grande"]

enunciado: "La deriva genética tiene un impacto mucho más significativo y es más notoria en una población de tamaño ___."

explicacion: |
  En poblaciones grandes, el azar tiende a compensarse y las frecuencias se mantienen estables. En poblaciones pequeñas, un evento aleatorio (como la muerte accidental de un individuo) puede cambiar drásticamente el porcentaje de un alelo en la siguiente generación.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["variabilidad", "polimorfismo", "extincion"]

respuesta: "disminuye"
tipo: completar
respuestas_validas: ["disminuye"]

enunciado: "Debido a que los alelos pueden desaparecer de la población por puro azar, la deriva genética generalmente hace que la variabilidad genética ___."

explicacion: |
  Al perderse alelos de forma aleatoria (especialmente en poblaciones pequeñas), la diversidad genética de la población se reduce, lo que puede limitar la capacidad de adaptación de la especie a cambios ambientales futuros.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["efecto_fundador", "colonizacion"]

respuesta: "fundador"
tipo: completar
respuestas_validas: ["fundador"]

enunciado: "Cuando un grupo muy pequeño de individuos coloniza un nuevo hábitat, se produce un fenómeno de deriva genética conocido como efecto ___."

explicacion: |
  El efecto fundador ocurre cuando una nueva población se establece a partir de un número reducido de individuos. La composición genética de los nuevos colonizadores puede ser muy distinta a la de la población original debido al azar.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["comparacion", "seleccion_natural"]

respuesta: verdadero
tipo: vf

enunciado: "Si un alelo aumenta su frecuencia en una población porque otorga una ventaja de supervivencia, ese cambio es producto de la selección natural, no de la deriva genética."

explicacion: |
  Correcto. La deriva genética es, por definición, un proceso que ocurre independientemente de la ventaja o desventaja del rasgo — si hay una ventaja de por medio, el mecanismo en juego es la selección natural.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["genetica", "evolucion", "deriva_genetica"]

tipo: mc
opciones_explicitas: ["Un grupo pequeño coloniza una nueva zona, llevando sólo una parte de la variabilidad", "Un grupo grande se mezcla con una población residente", "La selección natural favorece a los individuos más fuertes", "Un evento catastrófico mata a la mayoría de los individuos de una población"]
respuesta: "Un grupo pequeño coloniza una nueva zona, llevando sólo una parte de la variabilidad"

enunciado: "El efecto fundador ocurre cuando ___."

explicacion: |
  El efecto fundador es un tipo de deriva genética que sucede cuando un pequeño número de individuos se separa de una población original para establecer una nueva colonia. La nueva población tendrá una composición genética muy distinta a la original porque el grupo fundador no representa la diversidad total de la población madre.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["variabilidad", "polimorfismo"]

variables:
  escenario: [["un grupo de 5 mariposas", "Disminución de la variabilidad genética"], ["un grupo de 10 mariposas", "Disminución de la variabilidad genética"]]
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["Aumento de la variabilidad genética", "Disminución de la variabilidad genética", "No hay cambios en la frecuencia alélica", "Aumento del tamaño poblacional"]
respuesta: escenario[idx][1]

enunciado: "Si {escenario[idx][0]} coloniza una isla desierta, ¿cuál es la consecuencia más probable para la variabilidad genética de la nueva población?"

explicacion: |
  Al ser un grupo tan reducido, muchos alelos presentes en la población original pueden no estar presentes en los fundadores, lo que reduce la riqueza genética de la nueva población.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["frecuencia_alelica", "deriva_genetica"]

tipo: completar
respuesta: "alta"
respuestas_validas: ["alta"]

enunciado: "Si por azar uno de los pocos individuos fundadores porta un alelo que era raro en la población original, ese alelo puede terminar con una frecuencia ___ en la nueva población, muy distinta a su frecuencia original."

explicacion: |
  Debido al azar del muestreo con tan pocos individuos, un alelo raro puede volverse desproporcionadamente común (o directamente desaparecer) en la población fundadora.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "avanzado"
  tags: ["analisis", "deriva_genetica"]

variables:
  datos: [["Un grupo de 10 escarabajos llega a una isla y se establece", "Efecto fundador"], ["Un incendio mata al 90% de los leones de una población ya establecida", "Cuello de botella"]]
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["Efecto fundador", "Cuello de botella", "Selección natural", "Mutación"]
respuesta: datos[idx][1]

enunciado: "{datos[idx][0]}. ¿Cómo se llama este fenómeno?"

explicacion: |
  La clave es distinguir colonización de un espacio nuevo por un grupo reducido (efecto fundador) de una mortalidad masiva sobre una población ya establecida (cuello de botella).
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["tamaño_poblacional", "deriva_genetica"]

tipo: vf
respuesta: verdadero

enunciado: "El efecto fundador tiene un impacto mucho mayor en la composición genética de una población si el tamaño del grupo colonizador es muy pequeño."

explicacion: |
  Verdadero. Cuanto más pequeño sea el número de individuos fundadores, mayor es el error de muestreo y, por lo tanto, mayor es la deriva genética respecto a la población original.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["evolucion", "deriva_genetica"]

tipo: mc
opciones_explicitas: ["Aumento de la variabilidad genética", "Reducción de la diversidad genética", "Aumento del tamaño de la población", "Selección natural dirigida"]
respuesta: "Reducción de la diversidad genética"

enunciado: "Un incendio forestal destruye la mayor parte de una población de escarabajos, dejando vivos sólo a unos pocos individuos al azar. Este evento de 'cuello de botella' provoca principalmente una ___."

explicacion: |
  El cuello de botella reduce drásticamente el tamaño de la población. Como los sobrevivientes son una muestra aleatoria, la diversidad de alelos disminuye, lo que limita la capacidad de la población para adaptarse en el futuro.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["deriva_genetica", "cuello_de_botella"]

tipo: vf
respuesta: falso

enunciado: "En un evento de cuello de botella, los individuos que sobreviven lo hacen porque poseen características físicamente superiores que les permiten adaptarse mejor al desastre."

explicacion: |
  Falso. En la deriva genética (como el cuello de botella), la supervivencia es producto del azar y no de la adaptación. Los sobrevivientes no son necesariamente los "más aptos", sino los que tuvieron suerte.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["genetica_de_poblaciones", "cuello_de_botella"]

tipo: mc
opciones_explicitas: ["Aumento de la endogamia", "Aumento de la tasa de mutación", "Eliminación de la selección natural", "Aumento de la frecuencia de alelos raros"]
respuesta: "Aumento de la endogamia"

enunciado: "Cuando una población pasa por un cuello de botella, la reducción drástica del número de individuos suele llevar a un aumento de la ___ debido a la reproducción entre parientes cercanos."

explicacion: |
  Al haber pocos individuos, la probabilidad de que se crucen parientes aumenta, lo que incrementa la endogamia y puede manifestar rasgos recesivos perjudiciales.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["deriva_genetica"]

tipo: vf
respuesta: verdadero

enunciado: "La deriva genética por cuello de botella es un mecanismo de la evolución que actúa de forma aleatoria, independientemente de si los rasgos son beneficiosos o no."

explicacion: |
  Verdadero. A diferencia de la selección natural, la deriva genética se basa en eventos aleatorios (catástrofes, desastres) que cambian las frecuencias alélicas sin considerar la adaptación.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["biodiversidad", "cuello_de_botella"]

tipo: mc
opciones_explicitas: ["La población recupera su diversidad original inmediatamente", "La diversidad genética se mantiene igual", "La diversidad genética se reduce significativamente", "La población se vuelve inmune a cambios ambientales"]
respuesta: "La diversidad genética se reduce significativamente"

enunciado: "Si una población de 1000 individuos es reducida a sólo 10 sobrevivientes por un desastre natural, ¿qué ocurre con la diversidad genética de la nueva población?"

explicacion: |
  La diversidad se reduce significativamente porque los 10 sobrevivientes sólo llevan consigo una pequeña fracción de la información genética que existía en la población original.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["genetica", "poblaciones"]

respuesta: "migración"
tipo: completar
respuestas_validas: ["migración", "migracion"]

enunciado: "El movimiento de genes entre poblaciones, causado por la ___ de individuos que se reproducen en un nuevo grupo, se conoce como flujo génico."

explicacion: |
  El flujo génico ocurre cuando individuos de una población se desplazan a otra y se reproducen, introduciendo nuevos alelos o cambiando las frecuencias existentes.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["homogeneizacion", "frecuencias"]

respuesta: "homogeneizar"
tipo: completar
respuestas_validas: ["homogeneizar", "homogeneizacion", "homogeneización"]

enunciado: "Uno de los efectos principales del flujo génico constante entre dos poblaciones es que tiende a ___ sus frecuencias alélicas, haciéndolas más similares entre sí."

explicacion: |
  Al intercambiar individuos, las diferencias genéticas entre las poblaciones disminuyen, lo que reduce la divergencia genética y las hace más parecidas (homogéneas).
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["comparacion", "deriva"]

respuesta: "reducir"
tipo: completar
respuestas_validas: ["reducir", "disminuir"]

enunciado: "Mientras que la deriva genética tiende a aumentar la diferenciación entre poblaciones, el flujo génico tiende a ___ esa diferenciación entre ellas."

explicacion: |
  La deriva genética es un proceso aleatorio que aumenta la diferencia entre poblaciones, mientras que el flujo génico actúa como una fuerza cohesiva que las iguala.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["variabilidad", "alelos"]

respuesta: "aumentar"
tipo: completar
respuestas_validas: ["aumentar", "incrementar"]

enunciado: "Cuando un grupo de individuos llega a una población que es genéticamente muy similar, el flujo génico puede servir para ___ la variabilidad genética dentro de esa población receptora."

explicacion: |
  Al introducir nuevos alelos que no estaban presentes o que eran raros, la diversidad genética dentro de la población local aumenta.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "avanzado"
  tags: ["aislamiento", "reproduccion"]

respuesta: falso
tipo: vf

enunciado: "El flujo génico es posible si las poblaciones están completamente aisladas reproductivamente (por ejemplo, por una barrera geográfica infranqueable)."

explicacion: |
  Falso. Para que exista flujo génico debe haber transferencia de genes, lo cual requiere que los individuos se desplacen y logren reproducirse exitosamente en la nueva población.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["evolucion", "mecanismos"]

tipo: mc
opciones_explicitas: ["Selección natural", "Deriva genética", "Flujo génico"]
respuesta: "Deriva genética"

enunciado: "Un incendio accidental elimina a la mayoría de los individuos de una pequeña población de escarabajos, cambiando la frecuencia de un alelo por puro azar. Este proceso se denomina:"

explicacion: |
  La deriva genética es un cambio aleatorio en las frecuencias alélicas de una población, generalmente más impactante en poblaciones pequeñas, donde el azar determina qué individuos sobreviven o se reproducen, independientemente de su adaptación.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["flujo_genico", "especies"]

tipo: completar
respuesta: "homogeneización"
respuestas_validas: ["homogeneización", "homogeneizacion"]

enunciado: "El flujo génico (migración) actúa como un agente de ___, ya que introduce nuevos alelos en una población pero tiende a hacer que las poblaciones sean más similares entre sí."

explicacion: |
  El flujo génico es el movimiento de genes entre poblaciones. Al intercambiar individuos, las diferencias genéticas entre poblaciones disminuyen, lo que impide la especiación al mantener el acervo genético conectado.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["comparacion", "seleccion"]

tipo: mc
opciones_explicitas: ["La selección natural es dirigida por el ambiente y la deriva es azarosa.", "La selección natural es azarosa y la deriva es dirigida por el ambiente.", "Ambas son procesos puramente azarosos.", "Ambas dependen de la migración de individuos."]
respuesta: "La selección natural es dirigida por el ambiente y la deriva es azarosa."

enunciado: "¿Cuál es la diferencia fundamental entre la selección natural y la deriva genética?"

explicacion: |
  La selección natural favorece rasgos que aumentan la supervivencia y reproducción en un ambiente específico (no es azarosa), mientras que la deriva genética cambia las frecuencias de alelos por eventos fortuitos (azar).
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "avanzado"
  tags: ["especiacion", "flujo_genico"]

tipo: completar
respuesta: "baja"
respuestas_validas: ["baja", "menor"]

enunciado: "Si el flujo génico entre dos poblaciones de plantas es muy alto y constante, la probabilidad de que estas poblaciones se conviertan en especies distintas es ___, debido a que el intercambio de genes mantiene la similitud genética."

explicacion: |
  Para que ocurra la especiación, suele ser necesario el aislamiento (reproductivo o geográfico). El flujo génico constante actúa como un "pegamento" genético que contrarresta la divergencia que podrían causar la selección o la deriva.
```

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["poblacion", "deriva"]

tipo: mc
opciones_explicitas: ["En poblaciones grandes", "En poblaciones pequeñas", "En poblaciones con mucho flujo génico", "En poblaciones con alta selección natural"]
respuesta: "En poblaciones pequeñas"

enunciado: "El efecto de la deriva genética sobre las frecuencias alélicas es significativamente mayor en:"

explicacion: |
  En poblaciones grandes, los cambios azarosos en un individuo tienen poco impacto en la frecuencia total. En poblaciones pequeñas, la pérdida o ganancia de un solo individuo puede alterar drásticamente la composición genética del grupo.
```

## Sección: dinamica-poblacional-capacidad-carga (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["poblacion", "definicion"]

respuesta: "grupo de individuos de la misma especie que habitan en un mismo lugar y tiempo"
tipo: completar
respuestas_validas: ["grupo de individuos de la misma especie que habitan en un mismo lugar y tiempo"]

enunciado: "En biología, una población se define como un ___."

explicacion: |
  Una población es un conjunto de organismos de la misma especie que coexisten en un área determinada y en un momento específico, permitiendo la interacción entre sus miembros.
```

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
respuestas_validas: ["2", "3"]

enunciado: "Si una población de {datos[escenario_idx][0]} se duplica en cada intervalo de tiempo, y empezamos con una unidad, el crecimiento sigue un modelo exponencial donde el factor de multiplicación por intervalo es ___."

explicacion: |
  En el modelo de crecimiento exponencial, la tasa de crecimiento es proporcional al número de individuos presentes, lo que genera una curva en forma de 'J'.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["factores_limitantes", "recursos"]

respuesta: "recursos"
tipo: completar
respuestas_validas: ["recursos"]

enunciado: "El crecimiento exponencial teórico asume que no existen limitaciones por ___ como alimento o espacio."

explicacion: |
  El modelo exponencial es un modelo idealizado donde los recursos son infinitos, lo que permite que la población crezca sin frenos.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["curva_j", "curva_s"]

respuesta: "J"
tipo: completar
respuestas_validas: ["J"]

enunciado: "Cuando una población crece de manera exponencial sin restricciones, la representación gráfica de su crecimiento tiene forma de letra ___."

explicacion: |
  La forma de 'J' representa la aceleración constante del crecimiento conforme la base de individuos aumenta.
```

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
respuestas_validas: ["0.5", "0.8", "1.2", "1.5"]

enunciado: "En un modelo de crecimiento exponencial, la tasa de crecimiento intrínseca para el caso seleccionado es de ___ por individuo por unidad de tiempo."

explicacion: |
  En el modelo exponencial, la tasa de crecimiento per cápita se mantiene constante, lo que provoca que el número total de individuos crezca cada vez más rápido.
```

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

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["ecologia", "poblaciones"]

respuesta: "K"
tipo: completar
respuestas_validas: ["K"]

enunciado: "El valor máximo de individuos de una especie que un entorno puede sostener de forma indefinida se denomina capacidad de carga, y se representa con la letra ___."

explicacion: |
  La capacidad de carga, representada frecuentemente con la letra K, es el límite de población que los recursos de un ecosistema pueden soportar.
```

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
respuestas_validas: ["comida", "agua", "espacio", "refugio"]

enunciado: "La capacidad de carga de un ecosistema está determinada por la disponibilidad de recursos esenciales. Si el recurso considerado en este caso es {recurso}, escribí ese mismo recurso como respuesta: ___."

explicacion: |
  Los recursos limitantes (comida, agua, espacio y refugio) son los que impiden que una población crezca infinitamente.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["variabilidad", "entorno"]

respuesta: "fijo"
tipo: completar
respuestas_validas: ["fijo"]

enunciado: "La capacidad de carga no es un número ___, ya que puede cambiar si las condiciones ambientales o la disponibilidad de recursos varían."

explicacion: |
  Si hay un incendio o una sequía, la capacidad de carga disminuye; si hay abundancia de lluvias, puede aumentar. Por eso no es un valor constante.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "avanzado"
  tags: ["ecologia", "factores_ambientales"]

respuesta: "cambia"
tipo: completar
respuestas_validas: ["cambia", "disminuye"]

enunciado: "Si un ecosistema sufre una degradación de su suelo que reduce la disponibilidad de plantas, la capacidad de carga de los herbívoros en ese lugar ___."

explicacion: |
  Al reducirse la base de recursos (comida), el entorno puede sostener a menos individuos, por lo tanto, la capacidad de carga disminuye.
```

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["dinamica", "equilibrio"]

respuesta: "recursos"
tipo: completar
respuestas_validas: ["recursos"]

enunciado: "Cuando una población alcanza su capacidad de carga, se establece un equilibrio dinámico determinado por la disponibilidad de ___."

explicacion: |
  El equilibrio se alcanza cuando la tasa de natalidad y mortalidad se estabilizan debido a la limitación de los recursos disponibles en el medio.
```

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

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["mortalidad", "recursos"]

tipo: completar
respuesta: "ambas"
respuestas_validas: ["ambas"]

enunciado: "Cuando una población supera ampliamente su capacidad de carga, aumenta la mortalidad y disminuye la natalidad — es decir, ocurren ___ cosas a la vez."

explicacion: |
  Al exceder la capacidad de carga, la competencia por recursos se vuelve intensa. Esto provoca un aumento en la mortalidad por falta de alimento o refugio, y una disminución en la natalidad debido al estrés nutricional y ambiental.
```

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

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "basico"
  tags: ["factores_densidad"]

tipo: completar
respuesta: "factores dependientes de la densidad"
respuestas_validas: ["factores dependientes de la densidad"]

enunciado: "El aumento de la competencia por recursos cuando la población supera su capacidad de carga es un ejemplo de: ___"

explicacion: |
  Los factores dependientes de la densidad (como la competencia, la depredación o la enfermedad) son aquellos cuya intensidad aumenta a medida que la población crece, regulando así el tamaño poblacional cerca de K.
```

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

```
metadata:
  materia: "biologia"
  tema: "dinamica_poblacional_capacidad_carga"
  nivel: "intermedio"
  tags: ["capacidad_de_carga", "modelo_logistico"]

respuesta: "500"
tipo: completar
respuestas_validas: ["500"]

enunciado: "En un modelo de crecimiento logístico, la variable K representa la capacidad de carga del ecosistema. Si un ambiente tiene recursos que sólo permiten sostener a un máximo de 500 individuos de una especie, ¿cuál es el valor de K?"

explicacion: |
  La capacidad de carga (K) es el número máximo de individuos de una especie que un entorno puede sustentar indefinidamente, considerando los recursos disponibles.
```

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
respuestas_validas: ["dependiente de la densidad"]

enunciado: "Factores como {factor} actúan sobre la población de manera ___ (más fuerte cuanto más densa está la población)."

explicacion: |
  Los factores que afectan la tasa de crecimiento a medida que la población aumenta (como la comida o el espacio) se denominan factores dependientes de la densidad.
```

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

## Sección: enzimas-proteina-sustrato-ph (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["catalizador", "velocidad"]

respuesta: "acelerar"
tipo: completar
respuestas_validas: ["acelerar"]

enunciado: "Las enzimas son biomoléculas que permiten ___ las reacciones químicas en los seres vivos."

explicacion: |
  Las enzimas actúan como catalizadores biológicos, lo que significa que aumentan la velocidad de las reacciones químicas sin consumirse en el proceso.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["proteinas", "composición"]

respuesta: "proteínas"
tipo: completar
respuestas_validas: ["proteínas", "proteinas"]

enunciado: "Desde el punto de vista químico, la gran mayoría de las enzimas son ___."

explicacion: |
  Las enzimas son macromoléculas compuestas por cadenas de aminoácidos, es decir, son proteínas especializadas en la catálisis.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["sustrato", "sitio_activo"]

respuesta: "sustrato"
tipo: completar
respuestas_validas: ["sustrato"]

enunciado: "La molécula sobre la cual actúa una enzima para transformarla en un producto se denomina ___."

explicacion: |
  El sustrato es la molécula que se une al sitio activo de la enzima para llevar a cabo la reacción química.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["ph", "desnaturalización"]

respuesta: "óptimo"
tipo: completar
respuestas_validas: ["óptimo", "optimo"]

enunciado: "Cada enzima tiene un pH ___ en el cual su actividad es máxima; si el pH cambia drásticamente, la enzima puede desnaturalizarse."

explicacion: |
  Las enzimas son muy sensibles a los cambios de pH. Cada una tiene un rango ideal; fuera de este rango, su estructura tridimensional se pierde (desnaturalización) y pierde su función.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["resultado", "velocidad"]

respuesta: "igual"
tipo: completar
respuestas_validas: ["igual", "el mismo"]

enunciado: "Aunque las enzimas aumentan la velocidad de una reacción, el resultado final de la reacción química (los productos obtenidos) será ___ que si la reacción ocurriera sin la enzima."

explicacion: |
  La enzima sólo cambia la velocidad de la reacción (la hace más rápida), pero no altera el equilibrio químico ni cambia los productos finales.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["enzimas", "sitio_activo", "proteinas"]

tipo: mc
opciones_explicitas: ["El lugar de la enzima donde se une el sustrato", "El centro de energía de la proteína", "La parte de la enzima que se descompone", "El medio donde ocurre la reacción"]
respuesta: "El lugar de la enzima donde se une el sustrato"

enunciado: "En el modelo de llave-cerradura, ¿qué es el sitio activo de una enzima?"

explicacion: |
  El sitio activo es una región específica de la enzima con una forma tridimensional complementaria al sustrato, permitiendo que la reacción química ocurra de manera eficiente.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["especificidad", "sustrato"]

tipo: completar
respuestas_validas: ["especificidad"]
respuesta: "especificidad"

enunciado: "La propiedad por la cual una enzima sólo puede actuar sobre un sustrato determinado debido a su forma geométrica se denomina ___."

explicacion: |
  La especificidad es la característica fundamental que permite que las enzimas no reaccionen con cualquier molécula, sino sólo con aquellas que encajan en su sitio activo.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["modelo", "llave_cerradura"]

tipo: mc
opciones_explicitas: ["El sustrato cambia su forma para adaptarse a la enzima", "La enzima y el sustrato tienen formas complementarias", "La enzima se destruye tras un solo uso", "El sustrato debe ser siempre más grande que la enzima"]
respuesta: "La enzima y el sustrato tienen formas complementarias"

enunciado: "Según el modelo de 'llave-cerradura', ¿cuál es la relación entre la enzima y el sustrato?"

explicacion: |
  Este modelo clásico postula que la enzima tiene una forma rígida y el sustrato debe encajar perfectamente en ella, tal como una llave en su cerradura.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["complejo", "reaccion"]

tipo: completar
respuestas_validas: ["complejo enzima-sustrato"]
respuesta: "complejo enzima-sustrato"

enunciado: "Cuando el sustrato se une al sitio activo de la enzima, se forma un ___."

explicacion: |
  La unión física y temporal entre la enzima y el sustrato se conoce como complejo enzima-sustrato, paso previo a la formación de los productos.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["ph", "desnaturalizacion"]

tipo: mc
opciones_explicitas: ["No afecta la función de la enzima", "Puede cambiar la forma del sitio activo y anular la función", "Aumenta la velocidad de reacción de forma infinita", "Sólo afecta a las enzimas que no son proteínas"]
respuesta: "Puede cambiar la forma del sitio activo y anular la función"

enunciado: "Si una enzima se encuentra en un pH muy alejado de su valor óptimo, ¿qué sucede con su capacidad catalítica?"

explicacion: |
  Los cambios extremos de pH alteran las cargas eléctricas y la estructura de la proteína (desnaturalización), lo que modifica el sitio activo y evita que el sustrato pueda unirse.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["enzimas", "homeostasis", "temperatura"]

enunciado: "Las enzimas humanas funcionan de manera óptima a una temperatura corporal aproximada de ___ °C."

respuestas_validas: ["37"]
respuesta: "37"
tipo: completar

explicacion: |
  La temperatura corporal humana estándar es de 37°C, donde las enzimas metabólicas mantienen su estructura y actividad máxima.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["desnaturalizacion", "proteinas"]

enunciado: "Cuando una enzima se somete a un calor excesivo, su estructura tridimensional se altera, proceso conocido como ___."

respuestas_validas: ["desnaturalización", "desnaturalizacion"]
respuesta: "desnaturalización"
tipo: completar

explicacion: |
  La desnaturalización es la pérdida de la conformación espacial de la proteína, lo que impide que el sustrato se una al sitio activo.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["desnaturalizacion", "irreversible"]

enunciado: "Si una enzima se desnaturaliza por exceso de calor, este cambio en su forma es generalmente ___."

respuestas_validas: ["irreversible"]
respuesta: "irreversible"
tipo: completar

explicacion: |
  Al romperse los enlaces que mantienen la forma tridimensional de la enzima, la proteína pierde su función de manera permanente.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["sitio_activo", "forma"]

enunciado: "La función de una enzima depende estrictamente de su ___."

respuestas_validas: ["forma tridimensional"]
respuesta: "forma tridimensional"
tipo: completar

explicacion: |
  La especificidad de una enzima radica en que su sitio activo tiene una forma complementaria al sustrato; si la forma cambia, la función se pierde.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "avanzado"
  tags: ["curva_actividad", "optimo"]

enunciado: "En un gráfico de actividad enzimática vs. temperatura, el punto más alto de la curva representa la temperatura ___."

respuestas_validas: ["óptima", "optima"]
respuesta: "óptima"
tipo: completar

explicacion: |
  La temperatura óptima es aquella donde la velocidad de la reacción enzimática es máxima antes de que comience la desnaturalización.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["enzimas", "digestión", "ph"]

tipo: mc
opciones_explicitas: ["pH 2 (muy ácido)", "pH 7 (neutro)", "pH 9 (básico)"]
respuesta: "pH 2 (muy ácido)"

enunciado: "La pepsina es una enzima presente en el estómago humano encargada de la digestión de proteínas. ¿En qué rango de pH presenta su actividad máxima?"

explicacion: |
  La pepsina actúa en el estómago, donde el ácido clorhídrico mantiene un ambiente muy ácido para facilitar la digestión.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["desnaturalizacion", "estructura"]

tipo: vf
respuesta: verdadero

enunciado: "Si una enzima se encuentra en un entorno con un pH extremadamente alejado de su punto óptimo, su estructura tridimensional se altera, perdiendo su función biológica. Este proceso se conoce como desnaturalización."

explicacion: |
  Las enzimas son proteínas y su forma tridimensional es crucial para que el sustrato encaje en el sitio activo. Cambios bruscos de pH rompen los enlaces que mantienen esa forma.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["amilasa", "saliva", "ph"]

tipo: mc
opciones_explicitas: ["pH 2", "pH 7", "pH 12"]
respuesta: "pH 7"

enunciado: "La amilasa salival actúa en la boca para degradar el almidón. Dado que la saliva tiene un pH cercano a la neutralidad, ¿cuál es el pH óptimo aproximado para esta enzima?"

explicacion: |
  La boca mantiene un ambiente neutro, por lo que las enzimas que allí actúan, como la amilasa, están adaptadas a ese nivel de acidez.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["actividad_enzimatica", "grafico"]

tipo: vf
respuesta: falso

enunciado: "Si una enzima tiene un pH óptimo de 8, su actividad enzimática será la misma si se encuentra en un pH de 2 que si se encuentra en un pH de 8."

explicacion: |
  Falso. La actividad enzimática es máxima en el pH óptimo y disminuye drásticamente a medida que el pH se aleja de ese valor debido a la desnaturalización.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["comparacion", "enzimas"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["estómago", "ácido"], ["intestino delgado", "básico"]]

tipo: mc
opciones_explicitas: ["ácido", "básico", "neutro"]
respuesta: datos[escenario_idx][1]

enunciado: "Considerando que las enzimas del {datos[escenario_idx][0]} funcionan en el ambiente propio de ese órgano, ¿cuál es la naturaleza de su pH óptimo?"

explicacion: |
  Cada enzima ha evolucionado para funcionar en el compartimento específico donde se encuentra, adaptando su pH óptimo a las condiciones de ese órgano.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["temperatura", "homeostasis"]

respuesta: "desnaturalización"
tipo: mc

opciones_explicitas: ["activación", "desnaturalización", "saturación", "hidrólisis"]

enunciado: "Cuando una persona tiene una fiebre alta de 39,5°C (por encima de los 37°C normales), las enzimas del cuerpo pueden sufrir un proceso de ___ debido al exceso de calor, lo que impide que cumplan su función biológica."

explicacion: |
  Las enzimas son proteínas cuya forma tridimensional es crítica para su función. Temperaturas muy elevadas rompen los enlaces que mantienen su estructura, causando la desnaturalización.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["ph", "digestión", "pepsina", "tripsina"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["estómago", "2", "pepsina"], ["intestino delgado", "8", "tripsina"]]

respuesta: datos[escenario_idx][2]
tipo: completar
respuestas_validas: ["pepsina", "tripsina"]

enunciado: "En el {datos[escenario_idx][0]}, donde el pH ronda {datos[escenario_idx][1]}, la enzima digestiva que actúa predominantemente es la ___."

explicacion: |
  La pepsina requiere un ambiente altamente ácido (pH bajo) como el del estómago para funcionar, mientras que la tripsina requiere un ambiente básico como el del intestino delgado.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["actividad_enzimatica", "temperatura"]

respuesta: "40°C"
tipo: mc
opciones_explicitas: ["20°C", "40°C", "70°C"]

enunciado: "Si comparamos una reacción enzimática humana a 20°C, a 40°C y a 70°C, ¿a cuál de esas temperaturas se espera la mayor actividad enzimática?"

explicacion: |
  La actividad enzimática aumenta con la temperatura hasta alcanzar un punto óptimo cercano a los 37-40°C. A partir de ahí, el calor excesivo (como 70°C) desnaturaliza la enzima y la actividad cae a cero.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["sustrato", "especificidad"]

respuesta: "sustrato"
tipo: completar
respuestas_validas: ["sustrato"]

enunciado: "El modelo de 'llave-cerradura' sugiere que la enzima tiene una forma única que sólo encaja con una molécula específica llamada ___."

explicacion: |
  La especificidad enzimática es la capacidad de una enzima para reconocer y unirse sólo a un sustrato determinado debido a la complementariedad de sus formas.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "avanzado"
  tags: ["ph", "optimo"]

respuesta: "7.5"
tipo: completar
respuestas_validas: ["7.5", "7,5"]

enunciado: "Una enzima intestinal tiene su pH óptimo de trabajo en ___ (valor numérico aproximado)."

explicacion: |
  Cada enzima tiene un rango de pH donde su actividad es máxima. Para las enzimas del intestino delgado, este valor suele ser cercano a la neutralidad o ligeramente básico.
```

## Sección: especiacion (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["definicion", "reproduccion"]

respuesta: "fértil"
tipo: completar
respuestas_validas: ["fértil", "fertil"]

enunciado: "Según el concepto biológico de especie, los individuos de una misma especie pueden reproducirse entre sí y producir descendencia ___."

explicacion: |
  El criterio biológico de especie establece que una especie es un grupo de poblaciones cuyos individuos pueden reproducirse entre sí y dejar descendencia fértil.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["definicion", "origen"]

respuesta: "dos o más"
tipo: completar
respuestas_validas: ["dos o más", "dos o mas"]

enunciado: "La especiación es el proceso mediante el cual una población original da origen a ___ especies distintas."

explicacion: |
  La especiación ocurre cuando la variabilidad genética y el aislamiento permiten que una población se divida en dos o más linajes separados.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["aislamiento", "reproduccion"]

respuesta: "barreras"
tipo: completar

enunciado: "Para que ocurra la especiación, deben existir ___ reproductivas que impidan el flujo de genes entre los grupos de individuos."

respuestas_validas: ["barreras"]

explicacion: |
  Las barreras (ya sean geográficas, conductuales o mecánicas) son fundamentales para que los grupos dejen de intercambiar material genético y diverjan.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["diversidad", "evolucion"]

respuesta: "distintas"
tipo: completar
respuestas_validas: ["distintas"]

enunciado: "Cuando un proceso de especiación se completa con éxito, los nuevos grupos de organismos se consideran especies ___."

explicacion: |
  Una vez que el aislamiento es total y no pueden producir descendencia fértil entre sí, se consideran especies distintas.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["reproduccion", "descendencia"]

respuesta: "fértil"
tipo: completar

enunciado: "Si dos poblaciones se cruzan pero su descendencia es estéril, no se ha cumplido el criterio de reproducción para formar una nueva especie, ya que no se produce descendencia ___."

respuestas_validas: ["fértil", "fertil"]

explicacion: |
  La clave del concepto biológico es que la descendencia sea capaz de seguir reproduciéndose (fértil) para mantener el linaje.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["aislamiento", "flujo_genico"]

tipo: mc
opciones_explicitas: ["Barrera geográfica", "Mutación espontánea", "Selección natural", "Deriva genética"]
respuesta: "Barrera geográfica"

enunciado: "Para que ocurra la especiación alopátrica, es fundamental que exista una ___ que impida el flujo génico entre dos poblaciones."

explicacion: |
  El aislamiento geográfico (como una montaña o un río) impide que los individuos se crucen, permitiendo que las poblaciones acumulen diferencias genéticas por separado.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["flujo_genico", "evolucion"]

tipo: vf
respuesta: falso

enunciado: "¿El flujo génico constante entre dos poblaciones puede favorecer la especiación al impedir que se diferencien genéticamente?"

explicacion: |
  Falso. El flujo génico actúa como una "fuerza homogeneizadora". Para que haya especiación, el flujo génico debe ser interrumpido o reducido drásticamente.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["aislamiento_reproductivo", "mecanismos"]

tipo: mc
opciones_explicitas: ["Aislamiento precigótico", "Aislamiento postcigótico", "Mutación puntual", "Selección sexual"]
respuesta: "Aislamiento precigótico"

enunciado: "Cuando los mecanismos que impiden la formación de un cigoto (como la diferencia en los periodos de celo o la incompatibilidad de órganos genitales) actúan, estamos ante un mecanismo de aislamiento ___."

explicacion: |
  Los mecanismos precigóticos impiden la fecundación, asegurando que no haya intercambio de material genético entre poblaciones que ya han comenzado a divergir.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["divergencia", "genetica"]

tipo: vf
respuesta: verdadero

enunciado: "Si dos poblaciones de una misma especie quedan aisladas reproductivamente de forma permanente, la acumulación de cambios genéticos puede dar lugar a la formación de nuevas especies."

explicacion: |
  Verdadero. La falta de intercambio genético permite que la selección natural y la deriva genética actúen de forma independiente en cada grupo.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["aislamiento_ecologico", "reproduccion"]

tipo: mc
opciones_explicitas: ["Aislamiento temporal", "Aislamiento por hábitat", "Aislamiento mecánico", "Aislamiento gamético"]
respuesta: "Aislamiento por hábitat"

enunciado: "Dos poblaciones de insectos que viven en la misma zona pero una habita en el dosel de los árboles y la otra en el suelo, presentan un tipo de aislamiento llamado ___."

explicacion: |
  Aunque ocupen el mismo espacio geográfico, al no encontrarse debido a sus preferencias de hábitat, se produce un aislamiento ecológico que corta el flujo génico.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["conceptos", "evolucion"]

tipo: mc
opciones_explicitas: ["El surgimiento de nuevas especies", "La extinción de una especie", "La mutación de un solo gen", "El cambio de hábitat de un individuo"]
respuesta: "El surgimiento de nuevas especies"

enunciado: "El proceso mediante el cual una población existente da lugar a una o más especies nuevas se denomina:"

explicacion: |
  La especiación es el proceso evolutivo que da lugar a la formación de especies distintas a partir de un ancestro común.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["especiacion_alopatrica", "aislamiento"]

tipo: vf
respuesta: verdadero

enunciado: "En la especiación alopátrica, una barrera física (como un río o una montaña) impide el flujo de genes entre dos poblaciones de la misma especie."

explicacion: |
  Exacto. La barrera física actúa como un mecanismo de aislamiento que impide que los individuos se reproduzcan entre sí, permitiendo que las poblaciones evolucionen de forma independiente.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["ejemplo", "gran_cañon"]

tipo: mc
opciones_explicitas: ["la formación de dos especies distintas", "la extinción inmediata de ambas", "la mezcla de las poblaciones", "ninguna de las anteriores"]
respuesta: "la formación de dos especies distintas"

enunciado: "En el Gran Cañón, la formación del cañón separó por millones de años a una población original de ardillas (Kaibab en un borde, Abert en el otro). ¿Cuál fue el resultado a largo plazo?"

explicacion: |
  Al quedar separadas por el cañón, las poblaciones de ardillas dejaron de reproducirse entre sí, acumulando diferencias genéticas hasta convertirse en especies diferentes.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["mecanismos", "reproduccion"]

tipo: completar
respuesta: "geográfico"
respuestas_validas: ["geográfico", "geografico"]

enunciado: "Cuando una barrera física separa a dos poblaciones, hablamos de un aislamiento ___ — el primer paso de la especiación alopátrica."

explicacion: |
  El aislamiento geográfico es el primer paso en la especiación alopátrica, pero el aislamiento reproductivo (que las poblaciones ya no puedan cruzarse incluso si se reencuentran) es lo que define finalmente la existencia de una nueva especie.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["flujo_genico", "genetica"]

tipo: mc
opciones_explicitas: ["Se detiene el flujo de genes", "Aumenta la variabilidad dentro de la población original", "Se produce la fusión de las dos poblaciones", "Las mutaciones dejan de ocurrir"]
respuesta: "Se detiene el flujo de genes"

enunciado: "Cuando ocurre una especiación alopátrica debido a una barrera física, ¿qué sucede con el flujo de genes entre las poblaciones separadas?"

explicacion: |
  El flujo de genes es el intercambio de material genético entre poblaciones. Al haber una barrera física, este intercambio se interrumpe, permitiendo la divergencia genética.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["conceptos", "evolucion"]

tipo: mc
opciones_explicitas: ["Ocurre cuando las poblaciones están separadas por una barrera geográfica como una montaña.", "Ocurre cuando nuevas especies surgen dentro de una misma área geográfica sin barreras físicas.", "Ocurre sólo cuando una población se divide en dos por un río.", "Ocurre por la migración de individuos a un nuevo continente."]
respuesta: "Ocurre cuando nuevas especies surgen dentro de una misma área geográfica sin barreras físicas."

enunciado: "La especiación simpátrica se define como el proceso en el cual..."

explicacion: |
  A diferencia de la especiación alopátrica (donde hay una barrera física), en la simpátrica el aislamiento reproductivo ocurre en el mismo territorio, por ejemplo, debido a cambios en el comportamiento o la dieta.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["mecanismos", "aislamiento"]

tipo: completar
respuesta: "temporal"
respuestas_validas: ["temporal"]

enunciado: "Si dos poblaciones de la misma especie habitan en el mismo lugar, pero una se reproduce en primavera y la otra en otoño, el mecanismo de aislamiento se llama aislamiento ___."

explicacion: |
  Cuando las diferencias en los periodos de actividad o reproducción impiden que las poblaciones se crucen, estamos ante un mecanismo de aislamiento temporal, un tipo de aislamiento precigótico.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["nicho", "recursos"]

tipo: mc
opciones_explicitas: ["La especialización en un nuevo recurso alimenticio dentro del mismo hábitat.", "El desplazamiento de la población hacia un clima más frío.", "La mutación de un cromosoma que impide la fecundación.", "La formación de una montaña que divide el bosque."]
respuesta: "La especialización en un nuevo recurso alimenticio dentro del mismo hábitat."

enunciado: "Un ejemplo clásico de especiación simpátrica es cuando un grupo de individuos comienza a utilizar un nuevo recurso (como un fruto distinto) que los separa del resto de la población. Esto se conoce como..."

explicacion: |
  La explotación de un nuevo nicho ecológico permite que los individuos se especialicen, reduciendo la competencia y favoreciendo el aislamiento reproductivo sin necesidad de barreras físicas.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "avanzado"
  tags: ["comportamiento", "etologia"]

tipo: completar
respuesta: "etológico"
respuestas_validas: ["etológico", "etologico"]

enunciado: "Cuando las diferencias en los rituales de cortejo o en los cantos de apareamiento impiden que dos grupos se reproduzcan entre sí, estamos ante un aislamiento ___."

explicacion: |
  El aislamiento etológico (o de comportamiento) es un mecanismo precigótico donde las diferencias en el comportamiento impiden el reconocimiento entre parejas de diferentes grupos.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["factores", "evolucion"]

tipo: mc
opciones_explicitas: ["Barreras físicas como glaciares o desiertos.", "Cambios en los patrones de apareamiento o preferencias de hábitat.", "La fragmentación de un bosque por la actividad humana.", "La deriva genética por aislamiento geográfico."]
respuesta: "Cambios en los patrones de apareamiento o preferencias de hábitat."

enunciado: "¿Cuál de los siguientes factores es un motor principal de la especiación simpátrica?"

explicacion: |
  Dado que no hay una barrera física (como un glaciar o un desierto), la especiación debe ocurrir mediante mecanismos biológicos como cambios en el comportamiento, la dieta o la selección sexual.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["concepto", "reproduccion"]

respuesta: "reproductivo"
tipo: completar
respuestas_validas: ["reproductivo"]

enunciado: "El criterio biológico más utilizado para definir si dos individuos pertenecen a la misma especie es su capacidad de tener descendencia con éxito ___."

explicacion: |
  El concepto biológico de especie se basa en la capacidad de los individuos para cruzarse y producir descendencia fértil. Si no pueden hacerlo, se consideran especies distintas.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["flujo_genico", "aislamiento"]

variables:
  escenario: uno_de([
    ["una montaña que divide un bosque", "aislamiento geográfico"],
    ["un cambio en el comportamiento de apareamiento", "aislamiento etológico"],
    ["una diferencia en la época de celo", "aislamiento temporal"]
  ])

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["aislamiento geográfico", "aislamiento etológico", "aislamiento temporal"]

enunciado: "Cuando una población queda dividida por {escenario[0]}, ocurre un tipo de barrera reproductiva llamada ___."

explicacion: |
  La ausencia de flujo génico es fundamental para la especiación. Cualquiera sea el mecanismo (geográfico, etológico, temporal), lo que importa es que impida el cruce entre las poblaciones.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "avanzado"
  tags: ["seleccion_natural", "deriva_genetica"]

respuesta: "selección natural"
tipo: completar
respuestas_validas: ["selección natural", "seleccion natural"]

enunciado: "Si una población, aislada de otra, cambia sus rasgos debido a la presión por sobrevivir en un ambiente específico, el proceso responsable de ese cambio se llama ___."

explicacion: |
  La selección natural actúa sobre la variabilidad existente, favoreciendo ciertos rasgos que aumentan la supervivencia y reproducción, lo que con el tiempo, sumado al aislamiento, puede llevar a la especiación.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["deriva_genetica", "azar"]

respuesta: "azar"
tipo: completar
respuestas_validas: ["azar"]

enunciado: "A diferencia de la selección natural, la deriva genética provoca cambios en las frecuencias alélicas de una población debido al ___."

explicacion: |
  La deriva genética es un proceso estocástico (aleatorio) que afecta principalmente a poblaciones pequeñas, cambiando la composición genética sin que necesariamente haya una ventaja adaptativa.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["flujo_genico", "especiacion"]

respuesta: "interrumpido"
tipo: completar
respuestas_validas: ["interrumpido", "cortado"]

enunciado: "Para que la especiación ocurra, el flujo génico entre dos poblaciones debe estar ___."

explicacion: |
  Si el flujo génico continúa, los genes se mezclan constantemente y las poblaciones se mantienen genéticamente similares. La especiación requiere que el intercambio de genes cese para que las diferencias se acumulen.
```
