# Historia Profunda — Procariotas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Origen de la vida

```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["origen", "evolucion"]

respuesta: 3800000000
tipo: completar
tolerancia_abs: 100000000

enunciado: "Se estima que las primeras formas de vida procariota aparecieron hace aproximadamente ___ años."

explicacion: |
  Los registros fósiles y evidencia química sugieren que la vida procariota surgió hace unos 3800 millones de años.
```

### 2 — Características estructurales

```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["estructura", "celula"]

opciones_explicitas: ["con núcleo definido y organelas", "sin núcleo definido ni organelas membranosas", "con núcleo definido pero sin organelas", "sin núcleo definido pero con organelas"]

respuesta: "sin núcleo definido ni organelas membranosas"
tipo: mc

enunciado: "Una característica fundamental que define a las células procariotas es que carecen de:"

explicacion: |
  A diferencia de las eucariotas, los procariotas no poseen un núcleo delimitado por una membrana ni organelas complejas como mitocondrias o cloroplastos.
```

### 3 — Clasificación celular

```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["clasificacion", "eucariotas"]

variables:
  datos: [["procariota", "sin núcleo"], ["eucariota", "con núcleo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "sin núcleo"
  - "con núcleo"

enunciado: "Si observamos una célula que no posee un núcleo definido, estamos ante una célula de tipo ___."

explicacion: |
  La presencia o ausencia de un núcleo definido es el criterio principal para distinguir entre células procariotas y eucariotas.
```

### 4 — Orden de aparición biológica

```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["evolucion", "orden"]

opciones_explicitas: ["Procariotas", "Eucariotas", "Multicelulares"]

respuesta_orden: ["Procariotas", "Eucariotas", "Multicelulares"]
tipo: ordenar

enunciado: "Ordena cronológicamente la aparición de las siguientes formas de vida, de la más antigua a la más reciente:"

explicacion: |
  La evolución biológica comenzó con organismos procariotas unicelulares, seguidos por células eucariotas más complejas y, finalmente, la vida multicelular.
```

### 5 — Verdadero o Falso: Organelas

```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["estructura", "membranas"]

opciones_explicitas: ["Verdadero", "Falso"]

respuesta: "Verdadero"
tipo: mc

enunciado: "¿Es correcto afirmar que las células procariotas poseen organelas membranosas como el retículo endoplasmático?"

explicacion: |
  Es falso. Las organelas membranosas son una característica exclusiva de las células eucariotas.
```

### 6 — Dominios Procariotas

```
metadata:
  materia: "biologia"
  tema: "dominios_procariotas"
  nivel: "basico"
  tags: ["biologia", "taxonomia", "procariotas"]

tipo: mc
opciones_explicitas: ["Bacterias y Arqueas", "Bacterias y Eucariotas", "Arqueas y Eucariotas", "Procariotas y Eucariotas"]
respuesta: "Bacterias y Arqueas"

enunciado: "Aunque ambos son organismos procariotas, la vida se divide en tres dominios. Los dos dominios que agrupan a los procariotas son ___ y ___."

explicacion: |
  Los procariotas se dividen en dos dominios distintos: Bacteria y Archaea. Aunque comparten la ausencia de núcleo, sus composiciones químicas y genéticas son muy diferentes.
```

### 7 — Diferencias en la membrana

```
metadata:
  materia: "biologia"
  tema: "bioquimica_celular"
  nivel: "intermedio"
  tags: ["membrana", "arqueas", "bacterias"]

variables:
  escenario: uno_de([["enlaces éter", "enlaces éster"], ["enlaces éster", "enlaces éter"]])

tipo: completar
respuestas_validas:
  - "enlaces éter"
  - "enlaces éster"

enunciado: "Una diferencia fundamental en la composición de la membrana plasmática es que las Arqueas poseen lípidos unidos por ___ , mientras que las Bacterias utilizan ___ ."

pasos:
  - "Identificar el tipo de enlace en Arqueas"
  - "Identificar el tipo de enlace en Bacterias"

explicacion: |
  Las Arqueas presentan enlaces éter en sus lípidos de membrana, lo que les otorga mayor estabilidad (especialmente en ambientes extremos), mientras que las Bacterias poseen enlaces éster.
```

### 8 — El genoma procariota

```
metadata:
  materia: "biologia"
  tema: "genetica_procariota"
  nivel: "intermedio"
  tags: ["adn", "transcripcion", "arqueas"]

tipo: mc
opciones_explicitas: ["Más similar a las Eucariotas", "Más similar a las Bacterias", "No tiene similitudes con ningún dominio"]
respuesta: "Más similar a las Eucariotas"
enunciado: "A pesar de su morfología procariota, el proceso de transcripción y replicación del ADN en las Arqueas es molecularmente ___ ."
explicacion: |
  Aunque son procariotas, las Arqueas comparten maquinaria de replicación y transcripción mucho más cercana a la de las Eucariotas que a la de las Bacterias.
```

### 9 — Clasificación de organismos

```
metadata:
  materia: "biologia"
  tema: "taxonomia_procariota"
  nivel: "basico"
  tags: ["clasificacion", "taxonomia"]

tipo: ordenar
opciones_explicitas: ["Dominio Bacteria", "Dominio Archaea", "Dominio Eukarya"]

enunciado: "Ordena los tres dominios de la vida de menor a mayor complejidad estructural (considerando la presencia de núcleo y organelos):"

explicacion: |
  El orden correcto es Bacteria y Archaea (ambos procariotas, sin núcleo) seguidos por Eukarya (eucariotas, con núcleo complejo).
respuesta_orden: ["Dominio Bacteria", "Dominio Archaea", "Dominio Eukarya"]
```

### 10 — Extremófilos

```
metadata:
  materia: "biologia"
  tema: "ecologia_microbiana"
  nivel: "avanzado"
  tags: ["arqueas", "extremofilos"]

variables:
  caso: uno_de([["un ambiente con pH extremo", "temperaturas de ebullición"], ["temperaturas de ebullición", "un ambiente con pH extremo"]])

tipo: completar
tolerancia_abs: 0

enunciado: "Si un organismo procariota es capaz de sobrevivir en {caso[0]}, es muy probable que pertenezca al dominio ___ ."

respuestas_validas:
  - "Archaea"
  - "Arqueas"

explicacion: |
  Las Arqueas son famosas por ser extremófilas, capaces de habitar en condiciones de salinidad, temperatura o pH que serían letales para la mayoría de las Bacterias.
```

### 11 — ¿Qué son los estromatolitos?

```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "basico"
  tags: ["estromatolitos", "cianobacterias", "fósiles"]

tipo: mc
opciones_explicitas: ["Estructuras minerales formadas por la actividad de colonias de microorganismos", "Restos fósiles de animales marinos del periodo Cámbrico", "Células procariotas individuales preservadas en ámbar", "Depósitos de azufre volcánico de origen abiótico"]
respuesta: "Estructuras minerales formadas por la actividad de colonias de microorganismos"

enunciado: "Los estromatolitos se definen como ___."

explicacion: |
  Los estromatolitos son estructuras sedimentarias compuestas por capas de carbonato de calcio, formadas por la actividad de comunidades de microorganismos, principalmente cianobacterias, que atrapan sedimentos y precipitan minerales.
```

### 12 — Evidencia de vida temprana

```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["evidencia", "fósiles", "precámbrico"]

variables:
  datos: [["Estructuras laminares de carbonato", "Estructuras laminares de carbonato"], ["Microfósiles de algas", "Microfósiles de algas"]]
  escenario_idx: uno_de([0, 1])
  estructura: datos[escenario_idx][0]

respuesta: "Estructuras laminares de carbonato"
tipo: mc
opciones_explicitas: ["Estructuras laminares de carbonato", "Huellas de trilobites", "Fósiles de plantas vasculares", "Células con núcleo definido"]

enunciado: "En el registro fósil, la presencia de {estructura} es una de las principales evidencias de la existencia de vida procariota en la Tierra primitiva."

pasos:
  - "Identificar el tipo de estructura fósil mencionada."
  - "Relacionar la estructura con el tipo de organismo que la originó."

explicacion: |
  Las estructuras laminares de carbonato (estromatolitos) son la evidencia más antigua de actividad biológica, indicando la presencia de organismos fotosintéticos en el Precámbrico.
```

### 13 — El rol de la fotosíntesis

```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["fotosíntesis", "oxígeno", "atmósfera"]

tipo: completar
respuestas_validas:
  - "oxígeno"
  - "CO2"
  - "nitrógeno"

enunciado: "La actividad fotosintética de las cianobacterias en los estromatolitos fue responsable de la acumulación de ___ en la atmósfera primitiva."

explicacion: |
  La fotosíntesis oxigénica realizada por las cianobacterias permitió la Gran Oxidación, cambiando la composición química de la atmósfera terrestre.
```

### 14 — Cronología de la vida procariota

```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "avanzado"
  tags: ["cronología", "evolución", "estromatolitos"]

tipo: ordenar
opciones_explicitas: ["Aparición de vida procariota", "Formación de los primeros estromatolitos", "Gran Oxidación atmosférica", "Aparición de células eucariotas"]

enunciado: "Ordene cronológicamente los siguientes eventos en la historia de la vida procariota y la atmósfera:"

explicacion: |
  La secuencia correcta comienza con la vida procariota simple, seguida de la formación de estromatolitos que permitieron la fotosíntesis masiva, lo que llevó a la Gran Oxidación, permitiendo finalmente la evolución de células más complejas.
respuesta_orden: ["Aparición de vida procariota", "Formación de los primeros estromatolitos", "Gran Oxidación atmosférica", "Aparición de células eucariotas"]
```

### 15 — Composición de un estromatolito

```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["composición", "biología", "geología"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un estromatolito está compuesto por una matriz de carbonato de calcio y una capa de sedimentos, ¿cuántos componentes principales se mencionan en esta descripción simple? (Responda con el número entero)"

explicacion: |
  En la descripción se mencionan dos componentes: carbonato de calcio y sedimentos.

respuesta: 2
```

### 16 — El núcleo celular

```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "basico"
  tags: ["procariota", "eucariota", "nucleo"]

respuesta: "sin núcleo"
tipo: completar
respuestas_validas:
  - "sin núcleo"
  - "sin nucleo"

enunciado: "La principal diferencia estructural es que una célula procariota se caracteriza por no poseer ___."

explicacion: |
  Las células procariotas carecen de una envoltura nuclear, por lo que su material genético se encuentra libre en el citoplasma (en una región llamada nucleoide).
```

### 17 — Clasificación celular

```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "basico"
  tags: ["clasificacion", "eucariota", "procariota"]

variables:
  idx: uno_de([0, 1])
  escenario: [[0, "procariota", "bacteria"], [1, "eucariota", "animal"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["procariota", "eucariota"]

enunciado: "Si observamos una célula con un núcleo definido y organelos membranosos, estamos ante una célula de tipo {escenario[idx][2]}."

explicacion: |
  Las células eucariotas (como las animales o vegetales) poseen un núcleo que contiene el ADN, a diferencia de las procariotas.
```

### 18 — Organización interna

```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "intermedio"
  tags: ["organelos", "membranas", "procariota"]

respuesta: "menor complejidad"
tipo: mc
opciones_explicitas: ["mayor complejidad", "menor complejidad", "igual complejidad"]

enunciado: "En términos de organización interna y presencia de organelos membranosos, la célula procariota presenta una ___ en comparación con la eucariota."

explicacion: |
  Las procariotas son mucho más simples y no poseen organelos rodeados por membranas como mitocondrias o cloroplastos.
```

### 19 — Secuencia de complejidad

```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "intermedio"
  tags: ["evolucion", "orden", "estructuras"]

respuesta_orden: ["nucleoide", "citoplasma", "membrana"]
tipo: ordenar
opciones_explicitas: ["nucleoide", "citoplasma", "membrana"]

enunciado: "Ordena las estructuras de una célula procariota desde el área donde se encuentra el material genético hacia el límite externo de la célula:"

explicacion: |
  En una procariota, el ADN está en el nucleoide, rodeado por el citoplasma, y todo está contenido por la membrana plasmática.
```

### 20 — Determinación de tipo celular

```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "avanzado"
  tags: ["diagnostico", "nucleo", "organelos"]

variables:
  caso: uno_de([["tiene núcleo", "eucariota"], ["no tiene núcleo", "procariota"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si al analizar una muestra celular se determina que la célula {caso[0]}, su clasificación es:"

explicacion: |
  La presencia o ausencia de un núcleo definido es el criterio fundamental para distinguir entre procariotas y eucariotas.
```

### 21 — Clasificación Celular

```
metadata:
  materia: "biologia"
  tema: "clasificacion_celular"
  nivel: "basico"
  tags: ["procariotas", "eucariotas"]

variables:
  datos: [["Bacteria subtilis", "procariota"], ["Saccharomyces cerevisiae", "eucariota"], ["Escherichia coli", "procariota"]]
  idx: uno_de([0, 1, 2])

enunciado: "El organismo {datos[idx][0]} presenta una organización celular caracterizada por ser {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["procariota", "eucariota"]

explicacion: |
  Los organismos procariotas carecen de un núcleo definido, mientras que los eucariotas poseen un núcleo rodeado por una membrana.
```

### 22 — Estructura del Material Genético

```
metadata:
  materia: "biologia"
  tema: "estructura_celular"
  nivel: "intermedio"
  tags: ["adn", "nucleo"]

variables:
  datos: [["ADN circular libre en el citoplasma", "procariota"], ["ADN lineal dentro de un núcleo", "eucariota"]]
  idx: uno_de([0, 1])

enunciado: "Si observamos un organismo cuyo material genético es {datos[idx][0]}, podemos clasificarlo como un organismo ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "procariota"
  - "eucariota"

explicacion: |
  La presencia de un núcleo con ADN lineal es la característica distintiva de las células eucariotas.
```

### 23 — Organelos Celulares

```
metadata:
  materia: "biologia"
  tema: "organelos"
  nivel: "basico"
  tags: ["organelos", "mitocondria"]

variables:
  datos: [["presencia de mitocondrias", "eucariota"], ["ausencia de organelos membranosos", "procariota"]]
  idx: uno_de([0, 1])

enunciado: "La {datos[idx][0]} es un indicador de que la célula es de tipo ___."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

explicacion: |
  Las células procariotas no poseen organelos rodeados por membranas como las mitocondrias o el retículo endoplasmático.
```

### 24 — Tamaño y Complejidad

```
metadata:
  materia: "biologia"
  tema: "morfologia_celular"
  nivel: "basico"
  tags: ["tamaño", "complejidad"]

variables:
  datos: [["1.0 micrometros", "procariota"], ["100 micrometros", "eucariota"]]
  idx: uno_de([0, 1])

enunciado: "Un organismo con un diámetro de {datos[idx][0]} suele ser un organismo ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "procariota"
  - "eucariota"

explicacion: |
  Las células procariotas son generalmente mucho más pequeñas (1-5 µm) que las eucariotas (10-100 µm).
```

### 25 — Orden de Complejidad Evolutiva

```
metadata:
  materia: "biologia"
  tema: "evolucion_celular"
  nivel: "avanzado"
  tags: ["evolucion", "linajes"]

variables:
  secuencia: [["Procariota", "Eucariota", "Multicelularidad"]]
  idx: uno_de([0, 1, 2])

enunciado: "Ordena los niveles de complejidad biológica desde el más simple al más complejo según la escala evolutiva:"

respuesta_orden: ["Procariota", "Eucariota", "Multicelularidad"]
tipo: ordenar
opciones_explicitas: ["Procariota", "Eucariota", "Multicelularidad"]

explicacion: |
  La evolución biológica muestra una progresión desde células simples sin núcleo (procariotas) hacia células complejas (eucariotas) y finalmente organismos multicelulares.
```
