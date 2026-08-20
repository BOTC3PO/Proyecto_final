# Biología — Conservación y áreas protegidas (cuestionario, 25 preguntas VBLang)

> Tema: `BS`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: `metadata.tema` con typos
> (`conservacion_areas_protectedas`, `conservacion_areas_protected`)
> — normalizado a `conservacion_areas_protegidas`; varias preguntas
> de blank `___` etiquetadas `tipo: vf` y/o sin campo `respuesta:`
> (sólo `respuestas_validas`) — reclasificadas a `completar` con
> `respuesta:` agregado; dos preguntas `completar` con **múltiples**
> blancos en el `enunciado` pero una sola `respuesta:` en forma de
> array — recortadas a un solo blanco; tres preguntas `mc` sin campo
> `explicacion:` — agregado.

---

### 1 — Fragmentación de hábitat

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["biodiversidad", "habitat"]

enunciado: "La construcción de una carretera que divide un bosque en dos partes menores se conoce como ___ de hábitat."

respuestas_validas:
  - "fragmentación"
  - "fragmentacion"
respuesta: "fragmentación"
tipo: completar

explicacion: |
  La fragmentación ocurre cuando un hábitat continuo es dividido en parches más pequeños, dificultando el movimiento de las especies y aumentando el efecto de borde.
```

### 2 — Especies invasoras (definición)

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["especies_invasoras", "biodiversidad"]

enunciado: "Cuando una especie introducida en un ecosistema se reproduce sin control y desplaza a las especies nativas, se dice que es una especie ___."

respuestas_validas:
  - "invasora"
respuesta: "invasora"
tipo: completar

explicacion: |
  Las especies invasoras pueden alterar los ciclos de nutrientes, competir por alimento y depredar a las especies locales, reduciendo la biodiversidad.
```

### 3 — Sobreexplotación de recursos

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["recursos", "sobreexplotacion"]

enunciado: "Si la tasa de captura de una especie de pez es mayor que su tasa de reproducción natural, estamos ante un caso de ___."

respuestas_validas:
  - "sobreexplotación"
  - "sobreexplotacion"
respuesta: "sobreexplotación"
tipo: completar

explicacion: |
  La sobreexplotación ocurre cuando el ser humano extrae recursos naturales de una población a un ritmo más rápido de lo que la población puede recuperarse.
```

### 4 — Contaminación ambiental

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["contaminacion", "ecosistemas"]

enunciado: "La introducción de sustancias químicas, plásticos o exceso de nutrientes en un ecosistema que altera su equilibrio se denomina ___."

respuestas_validas:
  - "contaminación"
  - "contaminacion"
respuesta: "contaminación"
tipo: completar

explicacion: |
  La contaminación puede ser química, física o biológica, y afecta la supervivencia de los organismos en diversos niveles tróficos.
```

### 5 — Cambio climático

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["clima", "biodiversidad"]

enunciado: "El aumento global de la temperatura media de la atmósfera y los océanos, causado principalmente por el efecto invernadero, es el ___."

respuestas_validas:
  - "cambio climático"
  - "cambio climatico"
respuesta: "cambio climático"
tipo: completar

explicacion: |
  El cambio climático altera los ciclos fenológicos (como las épocas de floración) y los rangos de distribución de las especies, forzándolas a migrar o enfrentar la extinción.
```

### 6 — Concepto de área protegida

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["conservacion", "biodiversidad"]

tipo: mc
opciones_explicitas: ["Un espacio geográfico con límites definidos legalmente para proteger la biodiversidad y sus procesos naturales.", "Un terreno privado donde el dueño decide qué especies cuidar.", "Un parque recreativo diseñado exclusivamente para el turismo masivo.", "Una zona de producción agrícola intensiva con control de plagas."]

respuesta: "Un espacio geográfico con límites definidos legalmente para proteger la biodiversidad y sus procesos naturales."

enunciado: "¿Cuál es la definición técnica de un área protegida?"

explicacion: |
  Un área protegida es un espacio geográfico claramente definido, reconocido y gestionado, mediante medios legales u otros medios eficaces, para lograr la conservación a largo plazo de la naturaleza y sus servicios ecosistémicos.
```

### 7 — Protección estricta

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["parque_nacional", "proteccion_estricta"]

tipo: completar
respuestas_validas:
  - "Parque Nacional"
  - "parque nacional"
respuesta: "Parque Nacional"

enunciado: "Un área de protección estricta, donde las actividades humanas están limitadas casi exclusivamente a la investigación científica y el turismo de bajo impacto, se denomina generalmente: ___"

explicacion: |
  En los Parques Nacionales, el objetivo principal es la preservación de los ecosistemas en su estado natural, restringiendo actividades extractivas o de asentamiento humano permanente.
```

### 8 — Niveles de restricción: uso sostenible

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["uso_sostenible", "reserva"]

tipo: mc
opciones_explicitas: ["Permite la extracción de recursos de manera controlada para satisfacer necesidades de comunidades locales.", "Prohíbe totalmente cualquier tipo de presencia humana.", "Sólo permite la actividad minera a cielo abierto.", "Es un área sin límites legales donde prima la explotación comercial."]

respuesta: "Permite la extracción de recursos de manera controlada para satisfacer necesidades de comunidades locales."

enunciado: "Una reserva de uso sostenible se diferencia de un área de protección estricta porque:"

explicacion: |
  Las áreas de uso sostenible permiten la interacción humana y el aprovechamiento de recursos naturales, siempre que se haga de forma que no comprometa la integridad del ecosistema a largo plazo.
```

### 9 — Objetivo de la conservación

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["objetivos", "biodiversidad"]

tipo: completar
respuestas_validas:
  - "conservar"
respuesta: "conservar"

enunciado: "El objetivo principal de establecer áreas protegidas es ___ la biodiversidad y los servicios ecosistémicos."

explicacion: |
  La conservación busca proteger la diversidad biológica y asegurar que los procesos naturales (como el ciclo del agua o la polinización) continúen funcionando.
```

### 10 — Comparación de gestión

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "avanzado"
  tags: ["gestion", "impacto_humano"]

tipo: mc
opciones_explicitas: ["Protección estricta: impacto humano mínimo / Uso sostenible: impacto humano controlado.", "Protección estricta: impacto humano máximo / Uso sostenible: sin impacto humano.", "Protección estricta: sólo agricultura / Uso sostenible: sólo minería.", "Protección estricta: no hay leyes / Uso sostenible: leyes muy severas."]

respuesta: "Protección estricta: impacto humano mínimo / Uso sostenible: impacto humano controlado."

enunciado: "Al comparar los niveles de restricción, ¿cuál es la diferencia fundamental en la gestión del impacto humano?"

explicacion: |
  La diferencia radica en la intensidad de la intervención permitida: mientras que en la protección estricta se busca la mínima huella humana, en el uso sostenible se permite la presencia de comunidades que interactúan con el entorno de forma regulada.
```

### 11 — Concepto de corredor biológico

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["ecologia", "conservacion"]

respuesta: "flujo génico"
tipo: completar
respuestas_validas:
  - "flujo génico"
  - "flujo genico"

enunciado: "Los corredores biológicos permiten el movimiento de individuos entre fragmentos de hábitat, lo que facilita el ___ entre las poblaciones."

explicacion: |
  El flujo génico es el intercambio de genes entre poblaciones, lo cual es vital para mantener la diversidad genética y evitar la endogamia en áreas protegidas aisladas.
```

### 12 — El problema del aislamiento

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["fragmentacion", "islas"]

respuesta: "islas"
tipo: completar
respuestas_validas:
  - "islas"

enunciado: "Cuando un hábitat es fragmentado por actividades humanas (como carreteras o agricultura), las áreas protegidas pueden quedar funcionando como ___ biológicas, donde las poblaciones quedan aisladas."

explicacion: |
  El término "islas biológicas" se usa para describir fragmentos de ecosistemas rodeados de un "mar" de entornos degradados que impiden el movimiento de las especies.
```

### 13 — Función de los corredores

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["conectividad", "biodiversidad"]

respuesta: "conectar"
tipo: completar
respuestas_validas:
  - "conectar"

enunciado: "Los corredores biológicos tienen como objetivo principal ___ áreas protegidas que de otro modo quedarían aisladas entre sí."

explicacion: |
  La conectividad estructural y funcional es la base de los corredores para asegurar que las especies puedan migrar, alimentarse y reproducirse en diferentes parches de vegetación.
```

### 14 — Consecuencias de la falta de conectividad

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "avanzado"
  tags: ["genetica", "extincion"]

respuesta: "endogamia"
tipo: completar
respuestas_validas:
  - "endogamia"

enunciado: "Si una población queda totalmente aislada en un fragmento pequeño sin corredores, aumenta el riesgo de ___ debido al apareamiento entre individuos estrechamente emparentados."

explicacion: |
  La endogamia reduce la aptitud biológica de una población y puede llevar a la extinción local al aumentar la expresión de genes recesivos perjudiciales.
```

### 15 — Elementos de un corredor: la matriz

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["paisaje", "ecologia"]

respuesta: "matriz"
tipo: completar
respuestas_validas:
  - "matriz"

enunciado: "El área de terreno que rodea a los parches de hábitat y que un corredor debe atravesar de forma permeable para funcionar bien se llama ___."

explicacion: |
  La matriz es el área que rodea a los parches de hábitat; si la matriz es permeable (por ejemplo, un bosque secundario en lugar de un cultivo intensivo), el corredor funciona mejor.
```

### 16 — El efecto de la deriva genética en fragmentos

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["genetica", "poblaciones"]

tipo: mc
opciones_explicitas: ["Aumento de la diversidad genética", "Pérdida de alelos por azar", "Aumento del flujo génico", "Reducción de la tasa de mutación"]
respuesta: "Pérdida de alelos por azar"

enunciado: "En una población pequeña y aislada, la deriva genética tiene un impacto mayor porque..."

explicacion: |
  Con pocos individuos, un evento aleatorio (quién sobrevive, quién se reproduce) pesa mucho más sobre las frecuencias génicas — el mismo mecanismo visto en `deriva-genetica-flujo-genico/`, ahora aplicado a un área protegida chica.
```

### 17 — Conectividad y flujo génico

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["conectividad", "flujo_genico"]

tipo: completar
respuestas_validas:
  - "flujo génico"
  - "flujo genico"
respuesta: "flujo génico"

enunciado: "Cuando dos áreas protegidas están separadas por una matriz hostil (como una ciudad), se impide el ___ entre las poblaciones, lo que aumenta el riesgo de endogamia."

explicacion: |
  El flujo génico es el movimiento de genes entre poblaciones. Si las áreas están aisladas, las poblaciones no pueden intercambiar individuos, lo que reduce la variabilidad genética.
```

### 18 — Riesgo de extinción en fragmentos pequeños

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "avanzado"
  tags: ["fragmentacion", "extincion"]

tipo: mc
opciones_explicitas: ["Aumenta la resiliencia ante cambios ambientales", "Disminuye la probabilidad de extinción", "Aumenta el riesgo de extinción por eventos estocásticos", "Favorece la selección natural"]
respuesta: "Aumenta el riesgo de extinción por eventos estocásticos"

enunciado: "Una población pequeña contenida en un área protegida muy pequeña es más vulnerable a la extinción debido a eventos aleatorios (como un incendio o una enfermedad) porque..."

explicacion: |
  Cuantos menos individuos hay, más fácil es que un solo evento catastrófico elimine a una parte suficientemente grande de la población como para comprometer su viabilidad futura.
```

### 19 — El problema de la endogamia

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["endogamia", "fitness"]

tipo: completar
respuestas_validas:
  - "depresión por endogamia"
  - "depresion por endogamia"
respuesta: "depresión por endogamia"

enunciado: "El apareamiento entre individuos estrechamente emparentados en poblaciones pequeñas y aisladas suele provocar la ___ debido a la expresión de alelos recesivos deletéreos."

explicacion: |
  La endogamia aumenta la homocigosis, lo que suele reducir la aptitud biológica (fitness) de la población.
```

### 20 — Diseño de corredores biológicos

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "avanzado"
  tags: ["corredores", "diseño_ecologico"]

tipo: mc
opciones_explicitas: ["Aumentar el tamaño de la población efectiva", "Reducir la tasa de reproducción", "Aislar más las especies", "Eliminar la competencia intraespecífica"]
respuesta: "Aumentar el tamaño de la población efectiva"

enunciado: "Para mitigar los efectos de la fragmentación, los biólogos proponen la creación de corredores biológicos con el fin de..."

explicacion: |
  Al conectar poblaciones antes aisladas, un corredor efectivamente aumenta el número de individuos que pueden cruzarse entre sí, reduciendo la deriva genética y la endogamia.
```

### 21 — Identificar la causa: deforestación

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["biodiversidad", "deforestacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["se talaron bosques nativos para plantar soja", "la expansión de la frontera agrícola avanzó sobre un bosque nativo"]]

enunciado: "En un ecosistema donde {escenarios[0][escenario_idx]}, la causa principal de la pérdida de biodiversidad es la ___."

opciones_explicitas: ["deforestación", "especies exóticas", "cambio climático", "contaminación"]
respuesta: "deforestación"
tipo: mc

explicacion: |
  La eliminación de la cubierta vegetal para actividades productivas como la agricultura reduce el espacio disponible para las especies nativas.
```

### 22 — Identificar la causa: especies invasoras

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["especies_exoticas", "ecosistema"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["se introdujo un pez depredador en un lago sin depredadores naturales", "un felino no nativo fue liberado en una isla"]]

enunciado: "Cuando {escenarios[0][escenario_idx]}, el factor que altera el equilibrio ecológico es la presencia de una ___."

respuestas_validas:
  - "especie invasora"
respuesta: "especie invasora"
tipo: completar

explicacion: |
  Las especies introducidas en nuevos ambientes pueden actuar como invasoras si no tienen controles naturales, desplazando a las especies autóctonas.
```

### 23 — Identificar la causa: sobrepesca

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "basico"
  tags: ["recursos_naturales", "pesca"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["se capturaron ejemplares de una especie por debajo de su edad reproductiva", "se extrajeron individuos de una población de peces de forma masiva"]]

enunciado: "En el escenario donde {escenarios[0][escenario_idx]}, el proceso que pone en riesgo la supervivencia de la especie es la ___."

respuestas_validas:
  - "sobrepesca"
respuesta: "sobrepesca"
tipo: completar

explicacion: |
  La extracción de individuos a un ritmo superior al de su reproducción natural agota las poblaciones de peces.
```

### 24 — Identificar la causa: fragmentación de hábitat

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["fragmentacion", "corredores_biologicos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["una carretera divide un bosque en dos sectores aislados", "una red eléctrica atraviesa una reserva natural dividiéndola en dos"]]

enunciado: "Si {escenarios[0][escenario_idx]}, el efecto directo sobre la biodiversidad es la ___."

opciones_explicitas: ["fragmentación de hábitat", "contaminación del suelo", "erosión", "especie invasora"]
respuesta: "fragmentación de hábitat"
tipo: mc

explicacion: |
  La fragmentación impide el flujo génico entre poblaciones al crear barreras físicas que los animales no pueden cruzar.
```

### 25 — Identificar la causa: contaminación por agroquímicos

```
metadata:
  materia: "biologia"
  tema: "conservacion_areas_protegidas"
  nivel: "intermedio"
  tags: ["contaminacion", "agroquimicos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["se utilizan pesticidas en campos vecinos a una reserva", "se filtran fertilizantes hacia un arroyo cercano a una reserva"]]

enunciado: "Ante el escenario donde {escenarios[0][escenario_idx]}, la causa del declive de la fauna local es la ___."

respuestas_validas:
  - "contaminación por agroquímicos"
  - "contaminacion por agroquimicos"
respuesta: "contaminación por agroquímicos"
tipo: completar

explicacion: |
  El uso de sustancias químicas en la agricultura puede llegar a ecosistemas protegidos mediante el escurrimiento de agua o el viento.
```
