# Historia Profunda — Radiacion mamiferos (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El vacío ecológico

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["extincion", "nichos", "evolucion"]

respuesta: "radiación adaptativa"
tipo: completar
respuestas_validas:
  - "radiación adaptativa"

enunciado: "Tras la extinción de los dinosaurios hace 66 millones de años, los mamíferos experimentaron un proceso de diversificación rápida para ocupar nuevos nichos, proceso conocido como ________."

explicacion: |
  La extinción de los dinosaurios eliminó a los grandes depredadores y herbívoros, permitiendo que los mamíferos, que antes eran mayormente pequeños, ocuparan esos roles ecológicos mediante la radiación adaptativa.
```

### 2 — Cronología de la transición

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["tiempo", "geologia", "paleontologia"]

variables:
  escenario: uno_de([["66 millones de años", "Cenomaniense"], ["230 millones de años", "Triásico"], ["66 millones de años", "Cretácico-Paleógeno"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["66 millones de años", "230 millones de años", "66 millones de años", "100 millones de años"]

enunciado: "La gran extinción que permitió la radiación de los mamíferos ocurrió hace aproximadamente {escenario[0]}."

explicacion: |
  El evento de extinción masiva del Cretácico-Paleógeno ocurrió hace unos 66 millones de años, marcando el inicio de la era de los mamíferos.
```

### 3 — El rol de los nichos

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["ecologia", "nichos"]

respuesta: "vacíos"
tipo: mc
opciones_explicitas: ["llenos", "vacíos", "estables", "competitivos"]

enunciado: "La disponibilidad de nichos ecológicos ________ fue el factor clave que permitió la rápida diversificación de los mamíferos tras la extinción masiva."

explicacion: |
  Al desaparecer los grandes reptiles, quedaron nichos (roles en el ecosistema) vacíos que fueron aprovechados por los mamíferos.
```

### 4 — Secuencia de la radiación

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["proceso", "evolucion"]

respuesta_orden: ["Extinción masiva", "Ocupación de nichos", "Radiación adaptativa", "Diversificación moderna"]
tipo: ordenar
opciones_explicitas: ["Extinción masiva", "Ocupación de nichos", "Radiación adaptativa", "Diversificación moderna"]

enunciado: "Ordena cronológicamente los eventos que permitieron la dominancia de los mamíferos:"

explicacion: |
  Primero ocurre el evento de extinción, luego los supervivientes ocupan los espacios vacíos, lo que dispara la radiación adaptativa y finalmente resulta en la diversidad de formas que conocemos.
```

### 5 — El estado de los mamíferos pre-extinción

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["comparativa", "evolucion"]

respuesta: "pequeños"
tipo: mc
opciones_explicitas: ["gigantes", "pequeños", "acuáticos", "voladores"]

enunciado: "Antes de la radiación post-extinción, la mayoría de los mamíferos se caracterizaban por ser animales de tamaño ________."

explicacion: |
  Durante el Mesozoico, los mamíferos coexistieron con los dinosaurios y, para evitar la competencia y la depredación, la mayoría mantuvo tamaños reducidos.
```

### 6 — Origen de los mamíferos

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["evolucion", "dinosaurios"]

tipo: mc
opciones_explicitas: ["Eran grandes y dominantes", "Eran pequeños y nocturnos", "Eran reptiles gigantes", "Eran exclusivamente acuáticos"]
respuesta: "Eran pequeños y nocturnos"

enunciado: "Durante la era de los dinosaurios, los ancestros de los mamíferos se caracterizaban por ser ___."

explicacion: |
  Hace aproximadamente 200 millones de años, los mamíferos coexistieron con los dinosaurios, pero ocupaban nichos ecológicos pequeños y evitaban la luz del día para no ser depredados.
```

### 7 — El gran cambio tras la extinción

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["extincion_kp", "adaptacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Extinción K-Pg", "Diversificación"], ["Evento de extinción", "Radiación"]]

tipo: completar
respuestas_validas:
  - "Diversificación"
  - "Radiación"

enunciado: "Tras la extinción masiva del Cretácico-Paleógeno (K-Pg), los mamíferos experimentaron una gran ___ en tamaño y forma."

pasos:
  - "Identificar el evento geológico mencionado."
  - "Relacionar la desaparición de los dinosaurios con la apertura de nichos vacíos."

explicacion: |
  La desaparición de los dinosaurios no solo eliminó competidores, sino que permitió que los mamíferos ocuparan nuevos roles ecológicos, llevando a una rápida evolución.
```

### 8 — Cronología evolutiva

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["cronologia", "geologia"]

tipo: ordenar
opciones_explicitas: ["Aparición de mamíferos pequeños", "Dominio de los dinosaurios", "Extinción K-Pg", "Diversificación de mamíferos modernos"]

enunciado: "Ordene cronológicamente los siguientes eventos históricos:"

explicacion: |
  Primero aparecieron los mamíferos (coexistiendo con dinosaurios), luego ocurrió la extinción masiva, lo que finalmente permitió la radiación de los mamíferos actuales.
respuesta_orden: ["Aparición de mamíferos pequeños", "Dominio de los dinosaurios", "Extinción K-Pg", "Diversificación de mamíferos modernos"]
```

### 9 — Nichos ecológicos

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["ecologia", "evolucion"]

tipo: mc
opciones_explicitas: ["Diurno", "Nocturno", "Subterráneo", "Acuático"]
respuesta: "Nocturno"

enunciado: "Para evitar la competencia y la depredación por parte de los dinosaurios, la mayoría de los mamíferos primitivos adoptaron un estilo de vida ___."

explicacion: |
  La vida nocturna fue una estrategia adaptativa clave que permitió a los mamíferos sobrevivir y prosperar en un mundo dominado por grandes reptiles.
```

### 10 — El impacto de la extinción

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["ecologia", "evolucion"]

variables:
  caso_idx: uno_de([0, 1])
  info: [["K-Pg", "liberó nichos"], ["Extinción", "permitió la radiación"]]

tipo: completar
tolerancia_abs: 0

enunciado: "El evento de extinción ___ fue el catalizador que permitió la expansión de los mamíferos."

respuesta: "K-Pg"

explicacion: |
  La extinción K-Pg eliminó a los grandes depredadores y herbívoros dominantes, dejando el camino libre para que los mamíferos evolucionaran hacia formas más grandes y diversas.
```

### 11 — Concepto de radiación adaptativa

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["evolucion", "adaptacion"]

tipo: mc
opciones_explicitas: ["Un cambio lento y gradual de una especie", "La diversificación rápida de un linaje al ocupar nuevos nichos", "La extinción masiva de un grupo de especies", "La mutación de un solo gen en un individuo"]
respuesta: "La diversificación rápida de un linaje al ocupar nuevos nichos"
enunciado: "En biología evolutiva, ¿qué describe mejor el proceso de una radiación adaptativa?"
explicacion: |
  La radiación adaptativa ocurre cuando un linaje ancestral se diversifica rápidamente en una gran variedad de formas para aprovechar diferentes recursos o nichos ecológicos disponibles.
```

### 12 — Factores que impulsan la radiación

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["ecologia", "nichos"]

variables:
  escenario: uno_de([["aparición de nuevas islas volcánicas", "colonización de hábitats vacíos"], ["extinción masiva de competidores", "disponibilidad de nuevos nichos ecológicos"], ["cambio climático global", "apertura de nuevos espacios adaptativos"]])

tipo: completar
respuesta: escenario[1]

enunciado: "La radiación adaptativa suele ser desencadenada por la {escenario[0]}, lo que permite la ___."

explicacion: |
  Cuando aparecen nuevos entornos o se liberan nichos (por ejemplo, tras una extinción masiva), los linajes sobrevivientes pueden diversificarse rápidamente para ocupar esos espacios.
```

### 13 — El caso de los mamíferos post-extinción

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["paleontologia", "k-pg"]

tipo: mc
opciones_explicitas: ["Los dinosaurios no pudieron adaptarse", "La extinción de los dinosaurios permitió la radiación de los mamíferos", "Los mamíferos ya eran gigantes antes de la extinción", "La radiación ocurrió por la aparición de las plantas"]
respuesta: "La extinción de los dinosaurios permitió la radiación de los mamíferos"
enunciado: "Tras la extinción masiva del Cretácico-Paleógeno, ¿por qué los mamíferos experimentaron una radiación adaptativa tan marcada?"
explicacion: |
  La desaparición de los dinosaurios no avianos liberó una enorme cantidad de nichos ecológicos, permitiendo que los mamíferos, que antes eran mayormente pequeños, se diversificaran en una multitud de formas.
```

### 14 — Secuencia de un proceso adaptativo

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["proceso", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Aparición de nuevos nichos o hábitats", "Colonización de los nuevos entornos", "Diversificación en múltiples especies con rasgos distintos"]

enunciado: "Ordena cronológicamente los pasos típicos de una radiación adaptativa:"

explicacion: |
  Primero debe existir una oportunidad ecológica (nicho), luego el linaje debe colonizar ese espacio y finalmente la selección natural debe favorecer la especialización en diferentes formas.
respuesta_orden: ["Aparición de nuevos nichos o hábitats", "Colonización de los nuevos entornos", "Diversificación en múltiples especies con rasgos distintos"]
```

### 15 — Cálculo de tasa de especiación (Simulación)

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["matematica", "especiacion"]

variables:
  datos: uno_de([[10, 5], [100, 50], [1000, 500]])

tipo: completar
respuesta: datos[1]
tolerancia_abs: 0

enunciado: "Si un linaje de mamíferos experimenta una radiación adaptativa en la que se generan {datos[0]} especies nuevas en total, y la tasa de especiación efectiva equivale a la mitad de ese total, ¿cuántas especies representa la tasa de especiación efectiva en este escenario?"

pasos:
  - "Identificar el número total de especies nuevas en el escenario: {datos[0]}"
  - "Calcular la mitad de ese valor para obtener la respuesta."

explicacion: |
  En este ejercicio hipotético, si el total de nuevas especies es {datos[0]}, la tasa de especiación efectiva es la mitad de ese valor, es decir, {datos[1]}.
```

### 16 — Diversificación Cenozoica

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["cenozoico", "evolucion", "placentarios"]

respuesta: "Cenozoico"
tipo: completar
respuestas_validas:
  - "Cenozoico"

enunciado: "La gran radiación de los mamíferos placentarios, que dio lugar a los órdenes actuales como primates y carnívoros, ocurrió principalmente durante la era ___."

explicacion: |
  Tras la extinción de los dinosaurios al final del Cretácico, el Cenozoico permitió que los mamíferos ocuparan nichos ecológicos vacantes, diversificándose rápidamente.
```

### 17 — Clasificación de Mamíferos

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["taxonomia", "ordenes"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["Primates", "Primates"], ["Carnivora", "Carnívoros"], ["Cetacea", "Cetáceos"]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Primates", "Carnivora", "Cetacea", "Ungulata"]

enunciado: "Si consideramos al orden de los {datos[idx][1]}, ¿cuál es su nombre científico correcto?"

explicacion: |
  El orden mencionado es {datos[idx][1]}, cuya nomenclatura taxonómica es {datos[idx][0]}.
```

### 18 — Adaptaciones de los Ungulados

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["ungulados", "adaptacion"]

respuesta: "puntas"
tipo: completar
respuestas_validas:
  - "puntas"
  - "puntas"

enunciado: "Durante la expansión de las praderas en el Cenozoico, muchos ungulados desarrollaron ___ extremidades para una carrera más eficiente."

explicacion: |
  La transición de bosques a pastizales favoreció la selección de extremidades alargadas y dedos especializados para la locomoción rápida.
```

### 19 — Árbol Filogenético

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["filogenia", "ordenar"]

respuesta_orden: ["Euteria", "Primates", "Carnivora", "Cetacea"]
tipo: ordenar
opciones_explicitas: ["Euteria", "Primates", "Carnivora", "Cetacea"]

enunciado: "Ordene de mayor a menor nivel taxonómico (de lo más general a lo más específico) la siguiente jerarquía de un humano: [Primates, Euteria, Carnivora, Cetacea] (Nota: El usuario debe identificar la jerarquía correcta de un orden específico dentro de los Euterios, pero para este ejercicio de ordenamiento use la secuencia de niveles de un ancestro común a los órdenes)."

# Nota: El prompt pide ordenar una secuencia real. Reajustando para evitar ambigüedad:
# El usuario debe ordenar la jerarquía de un grupo específico.
# Como "ordenar" requiere la lista completa, usaré la jerarquía de un Cetáceo.

# Re-haciendo pregunta 4 para cumplir estrictamente con el tipo "ordenar" (secuencia real):
```

### 20 — Jerarquía de un Cetáceo

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["taxonomia", "ordenar"]

respuesta_orden: ["Mammalia", "Eutheria", "Cetartiodactyla", "Cetacea"]
tipo: ordenar
opciones_explicitas: ["Mammalia", "Eutheria", "Cetartiodactyla", "Cetacea"]

enunciado: "Ordene la jerarquía taxonómica de una ballena desde la Clase hasta el Orden:"

explicacion: |
  La secuencia correcta es Clase Mammalia, Subclase Eutheria, Orden Cetartiodactyla y finalmente el Orden Cetacea.
```

### 21 — Relación de Grupos

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["relaciones", "evolucion"]

variables:
  idx: uno_de([0, 1])
  escenarios: [["Cetáceos", "acuáticos"], ["Primates", "arbóreos"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["acuáticos", "arbóreos", "terrestres", "voladores"]

enunciado: "La radiación de los {escenarios[idx][0]} durante el Cenozoico permitió la especialización en nichos {escenarios[idx][1]}."

explicacion: |
  Los {escenarios[idx][0]} son ejemplos clave de la diversificación de nichos durante el Cenozoico, adaptándose a entornos {escenarios[idx][1]}.
```

### 22 — El vacío ecológico

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["extincion", "nichos", "evolucion"]

variables:
  datos: [["La extinción masiva del Cretácico-Paleógeno eliminó a los grandes reptiles...", "liberó nichos ecológicos"], ["La desaparición de los dinosaurios no avianos...", "permitió la diversificación de los mamíferos"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["liberó nichos ecológicos", "permitió la diversificación de los mamíferos", "causó la extinción de insectos", "no tuvo impacto"]

enunciado: "Según el escenario planteado: {datos[idx][0]}"

explicacion: |
  La extinción de los dinosaurios eliminó a los principales depredadores y herbívoros dominantes, dejando nichos ecológicos vacíos que los mamíferos, anteriormente pequeños y nocturnos, pudieron ocupar rápidamente.
```

### 23 — El cambio de tamaño corporal

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["morfologia", "evolucion"]

variables:
  datos: [["Antes de la extinción, la mayoría de los mamíferos eran...", "pequeños"], ["Tras la radiación, los mamíferos pudieron alcanzar...", "grandes tamaños"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["pequeños", "grandes tamaños", "tamaño medio", "tamaño insectívoro"]

enunciado: "Considerando el proceso evolutivo: {datos[idx][0]}"

explicacion: |
  La ausencia de competencia con grandes reptiles permitió que los mamíferos experimentaran una rápida diversificación morfológica, incluyendo un aumento significativo en el tamaño corporal promedio.
```

### 24 — Causas de la radiación

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["causa_efecto"]

variables:
  datos: [["La extinción de los dinosaurios fue la ___ de la radiación de los mamíferos.", "causa"], ["La radiación de los mamíferos fue la ___ de la extinción de los dinosaurios.", "consecuencia"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "causa"
  - "consecuencia"

enunciado: "Analizando la relación temporal: {datos[idx][0]}"

explicacion: |
  La extinción de los dinosaurios actuó como el evento desencadenante (causa) que permitió la expansión de los mamíferos (consecuencia).
```

### 25 — Secuencia de eventos

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["cronologia"]

variables:
  secuencia: ["Impacto del asteroide", "Extinción de dinosaurios", "Ocupación de nichos por mamíferos", "Diversificación de órdenes modernos"]

respuesta_orden: secuencia
tipo: ordenar
opciones_explicitas: ["Impacto del asteroide", "Extinción de dinosaurios", "Ocupación de nichos por mamíferos", "Diversificación de órdenes modernos"]

enunciado: "Ordene cronológicamente los eventos que llevaron a la actual biodiversidad de mamíferos:"

explicacion: |
  El proceso comienza con el evento catastrófico, seguido de la extinción de los grupos dominantes, la colonización de los espacios vacíos y, finalmente, la especiación y diversificación.
```

### 26 — El factor de competencia

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["competencia", "ecologia"]

variables:
  datos: [["Sin la presión de los dinosaurios, los mamíferos habrían sido...", "menos diversos"], ["La radiación ocurrió porque los mamíferos eran...", "menos diversos"]]
  idx: uno_de([0, 1])

respuesta: "menos diversos"
tipo: completar
respuestas_validas:
  - "menos diversos"
  - "más grandes"

enunciado: "{datos[idx][0]} ___"

explicacion: |
  La competencia por recursos y la depredación por parte de los dinosaurios habrían limitado la diversificación y el tamaño de los mamíferos durante el Mesozoico.
```
