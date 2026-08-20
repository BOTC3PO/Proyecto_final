# Examen jefe — Maestro del Átomo y Biomoléculas

> Logro #141. Demuestra dominio de partículas subatómicas, balanceo de ecuaciones, biomoléculas, tetravalencia del carbono y cinética de reacciones. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **110 preguntas totales** en 5/5 secciones.

---

## Sección: atomo-particulas-subatomicas (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "neutrones", "electrones", "carga"]

variables:
  escenario: uno_de([["proton", "+1"], ["neutron", "0"], ["electron", "-1"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["+1", "0", "-1"]

enunciado: "La partícula seleccionada es un {escenario[0]}. ¿Cuál es su carga eléctrica?"

explicacion: |
  El {escenario[0]} tiene una carga de {escenario[1]}.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["masa", "electron"]

respuesta: verdadero
tipo: vf

enunciado: "La masa del electrón es casi despreciable comparada con la masa del protón."

explicacion: |
  Es verdadero. La masa del electrón es aproximadamente 1/1836 de la masa de un protón.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleo", "neutron"]

respuesta: "neutron"
tipo: completar
respuestas_validas: ["neutron", "neutrón"]

enunciado: "La partícula sin carga eléctrica, ubicada en el núcleo, es el ___."

explicacion: |
  El neutrón es la partícula subatómica sin carga eléctrica situada en el núcleo atómico.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ubicacion", "nucleo", "nube"]

variables:
  escenario: uno_de([["proton", "nucleo"], ["neutron", "nucleo"], ["electron", "nube alrededor del nucleo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["nucleo", "nube alrededor del nucleo"]

enunciado: "La partícula seleccionada es un {escenario[0]}. ¿En qué parte del átomo se ubica?"

explicacion: |
  El {escenario[0]} se encuentra en el/la {escenario[1]}.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["masa", "nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Los protones y neutrones concentran casi toda la masa del átomo?"

explicacion: |
  Verdadero. Como la masa del electrón es despreciable, la masa atómica reside casi totalmente en el núcleo (protones y neutrones).
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "electrones", "neutralidad"]

respuesta: verdadero
tipo: vf

enunciado: "Un átomo neutro tiene el mismo número de protones que de electrones."

explicacion: |
  En un átomo neutro, la carga positiva de los protones se compensa exactamente con la carga negativa de los electrones.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["cation", "carga", "electrones"]

respuesta: "positiva"
tipo: mc
opciones_explicitas: ["positiva", "negativa", "neutra"]

enunciado: "Si un átomo pierde electrones, ¿qué carga resultante queda?"

explicacion: |
  Al perder electrones (cargas negativas), el átomo queda con un exceso de protones, resultando en una carga positiva. A este ion se lo llama catión.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["anion", "carga", "electrones"]

respuesta: "negativa"
tipo: mc
opciones_explicitas: ["negativa", "positiva", "neutra"]

enunciado: "Si un átomo gana electrones, ¿qué carga resultante queda?"

explicacion: |
  Al ganar electrones (cargas negativas), el átomo tiene más electrones que protones, resultando en una carga negativa. A este ion se lo llama anión.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ion", "terminologia"]

respuesta: "ion"
tipo: completar
respuestas_validas: ["ion"]

enunciado: "Un átomo cargado eléctricamente, por ganar o perder electrones, se llama ___."

explicacion: |
  Un ion es un átomo (o molécula) que ganó o perdió electrones, adquiriendo así una carga eléctrica neta.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "intermedio"
  tags: ["protones", "elemento", "identidad"]

respuesta: falso
tipo: vf

enunciado: "Para cambiar la identidad de un elemento químico, hay que cambiar el número de electrones y no el de protones."

explicacion: |
  La identidad de un elemento está determinada exclusivamente por su número de protones (número atómico). Cambiar los electrones sólo cambia la carga (ion), pero cambiar los protones crea un elemento distinto.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "elemento"]

respuesta: verdadero
tipo: vf

enunciado: "El número de protones de un átomo define de qué elemento se trata."

explicacion: |
  El número atómico (Z), la cantidad de protones, es lo que identifica a un elemento químico.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["isotopos", "neutrones"]

respuesta: "isótopos"
tipo: mc
opciones_explicitas: ["isótopos", "iones", "isómeros", "alótropos"]

enunciado: "¿Cómo se llaman dos átomos del mismo elemento con distinto número de neutrones?"

explicacion: |
  Los isótopos son átomos de un mismo elemento (mismo número de protones) que difieren en su número de neutrones, lo que cambia su masa atómica.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleones", "masa"]

respuesta: "nucleones"
tipo: completar
respuestas_validas: ["nucleones"]

enunciado: "Los protones y neutrones juntos se llaman ___."

explicacion: |
  El conjunto de protones y neutrones que forman el núcleo atómico se denomina nucleones.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["isotopos", "masa"]

respuesta: verdadero
tipo: vf

enunciado: "Los isótopos de un mismo elemento tienen el mismo número de protones pero distinta masa."

explicacion: |
  Al tener distinto número de neutrones, la masa atómica (protones + neutrones) varía entre isótopos del mismo elemento.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "intermedio"
  tags: ["protones", "identidad"]

respuesta: "se convierte en otro elemento"
tipo: mc
opciones_explicitas: ["se convierte en otro elemento", "sigue siendo el mismo elemento", "se vuelve un ion", "se vuelve un isótopo"]

enunciado: "Si un átomo cambia su número de protones, ¿qué ocurre?"

explicacion: |
  Como el número de protones define la identidad del elemento, cualquier cambio en esa cantidad transforma el átomo en un elemento distinto.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["protones", "electrones", "neutro"]

variables:
  protones: random(1, 20)

respuesta: protones
tipo: input
tolerancia_abs: 0

enunciado: "Un átomo neutro tiene {protones} protones. ¿Cuántos electrones tiene este átomo?"

explicacion: |
  En un átomo neutro, la cantidad de protones (carga positiva) es igual a la cantidad de electrones (carga negativa): las cargas se cancelan.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleo", "volumen", "estructura"]

respuesta: falso
tipo: vf

enunciado: "El núcleo ocupa la mayor parte del volumen del átomo."

explicacion: |
  Falso. El núcleo es extremadamente pequeño comparado con el volumen total del átomo; la mayor parte del volumen es el espacio donde se mueven los electrones.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["nucleo", "particulas"]

respuesta: "electrón"
tipo: mc
opciones_explicitas: ["electrón", "protón", "neutrón", "nucleón"]

enunciado: "¿Cuál de las siguientes partículas NO se encuentra en el núcleo del átomo?"

explicacion: |
  El núcleo contiene protones y neutrones (llamados nucleones juntos). El electrón está en la nube electrónica, alrededor del núcleo.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ion", "cation", "carga"]

respuesta: "positiva"
tipo: completar
respuestas_validas: ["positiva"]

enunciado: "Un catión tiene carga ___ porque perdió electrones."

explicacion: |
  Al perder electrones (cargas negativas), el átomo queda con exceso de protones (cargas positivas), resultando en una carga neta positiva.
```

```
metadata:
  materia: "quimica"
  tema: "atomo_particulas_subatomicas"
  nivel: "basico"
  tags: ["ion", "anion", "carga"]

respuesta: "negativa"
tipo: completar
respuestas_validas: ["negativa"]

enunciado: "Un anión tiene carga ___ porque ganó electrones."

explicacion: |
  Al ganar electrones (cargas negativas), el átomo tiene más electrones que protones, resultando en una carga neta negativa.
```

## Sección: balanceo-ecuaciones (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: __H₂ + O₂ → __H₂O (con O₂ ya con coeficiente 1). ¿Qué coeficiente va delante del H₂?"

pasos:
  - "Balance de O: hacen falta 2 O en productos (2 H₂O), y O₂ ya aporta 2 — coincide"
  - "Balance de H: 2 H₂O tiene 4 H, así que hacen falta 2 H₂ (2×2=4)"

explicacion: |
  2H₂ + O₂ → 2H₂O es la ecuación balanceada clásica.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2H₂ + O₂ → __H₂O. ¿Qué coeficiente va delante del H₂O?"

explicacion: |
  Con 4 átomos de H en los reactivos (2×2), hacen falta 2 H₂O (2×2=4)
  para que coincida.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["balanceo"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: N₂ + __H₂ → 2NH₃. ¿Qué coeficiente va delante del H₂?"

pasos:
  - "2NH₃ tiene 6 átomos de H, así que hacen falta 3 H₂ (3×2=6)"

explicacion: |
  N₂ + 3H₂ → 2NH₃ (síntesis de Haber-Bosch).
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: N₂ + 3H₂ → __NH₃. ¿Qué coeficiente va delante del NH₃?"

explicacion: |
  Con 2 átomos de N en los reactivos (de N₂), hacen falta 2 NH₃.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: CH₄ + __O₂ → CO₂ + 2H₂O. ¿Qué coeficiente va delante del O₂?"

pasos:
  - "Productos: CO₂ aporta 2 O, 2H₂O aporta 2 O más — total 4 O"
  - "4 O en productos necesitan 2 O₂ (2×2=4)"

explicacion: |
  CH₄ + 2O₂ → CO₂ + 2H₂O.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: CH₄ + 2O₂ → CO₂ + __H₂O. ¿Qué coeficiente va delante del H₂O?"

explicacion: |
  CH₄ tiene 4 átomos de H, así que hacen falta 2 H₂O (2×2=4).
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2Mg + O₂ → __MgO. ¿Qué coeficiente va delante del MgO?"

explicacion: |
  Con 2 átomos de Mg en los reactivos, hacen falta 2 MgO.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 4Fe + __O₂ → 2Fe₂O₃. ¿Qué coeficiente va delante del O₂?"

pasos:
  - "2Fe₂O₃ tiene 6 átomos de O, así que hacen falta 3 O₂ (3×2=6)"

explicacion: |
  4Fe + 3O₂ → 2Fe₂O₃ (la fórmula clásica del óxido de hierro/herrumbre).
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 4Fe + 3O₂ → __Fe₂O₃. ¿Qué coeficiente va delante del Fe₂O₃?"

explicacion: |
  Con 4 átomos de Fe en los reactivos, hacen falta 2 Fe₂O₃ (2×2=4).
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: __Na + Cl₂ → 2NaCl. ¿Qué coeficiente va delante del Na?"

explicacion: |
  Con 2 átomos de Cl en Cl₂, hacen falta 2 NaCl, y por lo tanto 2 Na.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: __H₂O₂ → 2H₂O + O₂. ¿Qué coeficiente va delante del H₂O₂?"

pasos:
  - "Productos: 2H₂O (2 O) + O₂ (2 O) = 4 O en total"
  - "Cada H₂O₂ aporta 2 O, así que hacen falta 2 H₂O₂ (2×2=4)"

explicacion: |
  2H₂O₂ → 2H₂O + O₂.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2KClO₃ → 2KCl + __O₂. ¿Qué coeficiente va delante del O₂?"

pasos:
  - "2KClO₃ tiene 6 átomos de O, así que hacen falta 3 O₂ (3×2=6)"

explicacion: |
  2KClO₃ → 2KCl + 3O₂.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 7
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2C₂H₆ + __O₂ → 4CO₂ + 6H₂O. ¿Qué coeficiente va delante del O₂?"

pasos:
  - "Productos: 4CO₂ (8 O) + 6H₂O (6 O) = 14 O en total"
  - "14 O necesitan 7 O₂ (7×2=14)"

explicacion: |
  2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2C₂H₆ + 7O₂ → __CO₂ + 6H₂O. ¿Qué coeficiente va delante del CO₂?"

explicacion: |
  2C₂H₆ tiene 4 átomos de C, así que hacen falta 4 CO₂.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2Al + __H₂SO₄ → Al₂(SO₄)₃ + 3H₂. ¿Qué coeficiente va delante del H₂SO₄?"

pasos:
  - "Al₂(SO₄)₃ necesita 3 grupos sulfato, así que hacen falta 3 H₂SO₄"

explicacion: |
  2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["balanceo"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: CaCO₃ → CaO + __CO₂. ¿Qué coeficiente va delante del CO₂?"

explicacion: |
  Ya está balanceada con todos los coeficientes en 1 — no todas las
  ecuaciones necesitan números grandes.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["contar_atomos"]

variables:
  coef: random(1, 12)

respuesta: coef * 2
tipo: input
tolerancia_abs: 0

enunciado: "En {coef} H₂O, ¿cuántos átomos de H hay en total?"

explicacion: |
  Cada H₂O aporta 2 átomos de H: {coef}×2 = {coef * 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["contar_atomos"]

variables:
  coef: random(1, 12)

respuesta: coef
tipo: input
tolerancia_abs: 0

enunciado: "En {coef} H₂O, ¿cuántos átomos de O hay en total?"

explicacion: |
  Cada H₂O aporta 1 átomo de O: {coef}×1 = {coef}.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["contar_atomos"]

variables:
  coef: random(1, 12)

respuesta: coef * 2
tipo: input
tolerancia_abs: 0

enunciado: "En {coef} CO₂, ¿cuántos átomos de O hay en total?"

explicacion: |
  Cada CO₂ aporta 2 átomos de O: {coef}×2 = {coef * 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["contar_atomos"]

variables:
  coef: random(1, 10)

respuesta: coef * 2
tipo: input
tolerancia_abs: 0

enunciado: "En {coef} Fe₂O₃, ¿cuántos átomos de Fe hay en total?"

explicacion: |
  Cada Fe₂O₃ aporta 2 átomos de Fe (por el subíndice 2): {coef}×2 =
  {coef * 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["contar_atomos"]

variables:
  coef: random(1, 8)

respuesta: coef * 3
tipo: input
tolerancia_abs: 0

enunciado: "En {coef} Al₂(SO₄)₃, ¿cuántos átomos de S hay en total?"

explicacion: |
  Cada Al₂(SO₄)₃ tiene 3 grupos sulfato (subíndice 3 fuera del
  paréntesis), cada uno con 1 S: {coef}×3 = {coef * 3}.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["escalar"]

variables:
  n: random(2, 10)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "2H₂ + O₂ → 2H₂O. Si se necesitan {n} O₂ completos, ¿cuántos H₂ hacen falta (manteniendo la misma proporción)?"

pasos:
  - "La proporción es 2 H₂ por cada 1 O₂: {n}×2 = {2 * n}"

explicacion: |
  Escalar una ecuación balanceada mantiene siempre la misma proporción
  entre coeficientes.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["escalar"]

variables:
  n: random(2, 10)

respuesta: 3 * n
tipo: input
tolerancia_abs: 0

enunciado: "N₂ + 3H₂ → 2NH₃. Si se usan {n} N₂ completos, ¿cuántos H₂ hacen falta?"

explicacion: |
  Proporción 1 N₂ : 3 H₂ → {n}×3 = {3 * n}.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al balancear una ecuación química, se pueden cambiar tanto los coeficientes como los subíndices de las fórmulas."

explicacion: |
  Sólo los coeficientes se pueden cambiar — cambiar un subíndice
  convertiría la sustancia en otra distinta.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Balancear una ecuación química refleja que la cantidad de átomos de cada elemento no cambia entre reactivos y productos."

explicacion: |
  Es la ley de conservación de la masa: los átomos se reorganizan, no
  se crean ni se destruyen.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Alcanza con balancear uno o dos elementos de la ecuación para darla por completa."

explicacion: |
  Hay que revisar TODOS los elementos que aparecen — dejar uno sin
  chequear puede dejar la ecuación mal balanceada.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "4H₂ + 2O₂ → 4H₂O está tan bien balanceada como 2H₂ + O₂ → 2H₂O, y da lo mismo cuál usar."

explicacion: |
  Aunque los átomos coinciden en las dos, la convención es usar siempre
  los coeficientes enteros MÁS CHICOS posibles — hay que simplificar.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El método algebraico de balanceo plantea una ecuación por cada elemento (átomos en reactivos = átomos en productos), y resuelve el sistema resultante."

explicacion: |
  Es exactamente aplicar `../../matematica/sistemas-dos-ecuaciones/` a
  un problema de química.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si al resolver el sistema algebraico un coeficiente queda fraccionario, se puede multiplicar TODA la ecuación por un número para que todos los coeficientes queden enteros."

explicacion: |
  Es el último paso del método algebraico — un coeficiente fraccionario
  no es una respuesta final, es un paso intermedio.
```

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  propuesto: uno_de([2, 1, 3])

respuesta: (propuesto == 2)
tipo: vf

enunciado: "2Mg + O₂ → __MgO. ¿Es correcto que el coeficiente del MgO sea {propuesto}?"

explicacion: |
  El coeficiente correcto es 2 (para que coincidan los 2 átomos de Mg de
  los reactivos).
```

## Sección: biomoleculas-glucidos-lipidos-proteinas (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["glucidos", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "Los glúcidos poseen múltiples grupos hidroxilo (-OH) y un grupo carbonilo (C=O) en su estructura."

explicacion: |
  Los glúcidos se caracterizan por un carbono con grupo carbonilo (aldehído o cetona) y varios hidroxilos.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["clasificacion", "glucidos"]

variables:
  escenario: [["monosacarido", "glucosa"], ["disacarido", "sacarosa"], ["polisacarido", "almidon"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["glucosa", "sacarosa", "almidon"]

enunciado: "¿Cuál es un ejemplo de {escenario[idx][0]}?"

explicacion: |
  Un ejemplo de {escenario[idx][0]} es {escenario[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["glucogeno", "reserva_energetica"]

respuesta: verdadero
tipo: vf

enunciado: "El glucógeno es la molécula de reserva de energía de los glúcidos en los animales."

explicacion: |
  El glucógeno es un polisacárido de reserva, principalmente en hígado y músculos.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["celulosa", "almidon", "funcion"]

respuesta: falso
tipo: vf

enunciado: "La celulosa cumple una función energética en las plantas, igual que el almidón."

explicacion: |
  Falso. El almidón es reserva energética; la celulosa es estructural (pared celular).
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["funcion", "energia"]

respuesta: "energetica"
tipo: completar
respuestas_validas: ["energetica", "energética"]

enunciado: "La función principal de los glúcidos es la ___ rápida."

explicacion: |
  Los glúcidos son la fuente de energía inmediata para el metabolismo celular.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["lipidos", "solubilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Los lípidos no se disuelven en agua: son moléculas hidrofóbicas."

explicacion: |
  Al ser moléculas no polares, no forman puentes de hidrógeno con el agua.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["lipidos", "trigliceridos"]

respuesta: "grasos"
tipo: completar
respuestas_validas: ["grasos"]

enunciado: "Un triglicérido está formado por 1 glicerol y 3 ácidos ___."

explicacion: |
  Los triglicéridos son ésteres de glicerol con 3 ácidos grasos.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["lipidos", "membrana_celular"]

respuesta: verdadero
tipo: vf

enunciado: "Los fosfolípidos forman las membranas celulares, con cabeza hidrofílica y colas hidrofóbicas."

explicacion: |
  Su carácter anfipático hace que se organicen en bicapa, colas hacia adentro, cabezas hacia el medio acuoso.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["lipidos", "energia"]

respuesta: falso
tipo: vf

enunciado: "Los lípidos almacenan menos energía por gramo que los glúcidos."

explicacion: |
  Falso. Los lípidos aportan ~9 kcal/g, los glúcidos ~4 kcal/g: los lípidos son más densos energéticamente.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["proteinas", "aminoacidos"]

respuesta: verdadero
tipo: vf

enunciado: "Las proteínas son cadenas de aminoácidos unidos por enlaces peptídicos."

explicacion: |
  Correcto. Los aminoácidos forman largas cadenas polipeptídicas vía enlace peptídico.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["aminoacidos", "proteinas"]

respuesta: verdadero
tipo: vf

enunciado: "Existen 20 aminoácidos distintos que se combinan para formar las proteínas."

explicacion: |
  Correcto: 20 aminoácidos estándar componen las proteínas.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["funciones", "proteinas"]

variables:
  escenario: [["estructural", "colágeno"], ["transporte", "hemoglobina"], ["enzimática", "cataliza reacciones"], ["defensa", "anticuerpos"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["colágeno", "hemoglobina", "cataliza reacciones", "anticuerpos"]

enunciado: "¿Cuál es un ejemplo de proteína con función {escenario[idx][0]}?"

explicacion: |
  La proteína con función {escenario[idx][0]} es {escenario[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["metabolismo", "proteinas"]

respuesta: falso
tipo: vf

enunciado: "A diferencia de glúcidos y lípidos, las proteínas son principalmente la fuente de combustible energético del organismo."

explicacion: |
  Falso. Su función principal es estructural, enzimática, de transporte o defensa — glúcidos y lípidos son las fuentes de energía primarias.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["biomoleculas", "monomeros"]

variables:
  escenario: [["glucidos", "monosacarido"], ["lipidos", "glicerol y acidos grasos"], ["proteinas", "aminoacido"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["monosacarido", "glicerol y acidos grasos", "aminoacido", "nucleotido"]

enunciado: "¿Cuál es la unidad básica de construcción de los {escenario[idx][0]}?"

explicacion: |
  La unidad básica de {escenario[idx][0]} es: {escenario[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["enlaces", "biomoleculas"]

variables:
  escenario: [["glucidos", "glucosidico"], ["lipidos", "ester"], ["proteinas", "peptidico"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["glucosidico", "ester", "peptidico", "ionico"]

enunciado: "¿Qué tipo de enlace une a los monómeros de {escenario[idx][0]}?"

explicacion: |
  El enlace característico de {escenario[idx][0]} es el {escenario[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["glucidos", "sacarosa"]

respuesta: verdadero
tipo: vf

enunciado: "La sacarosa (azúcar de mesa) está formada por glucosa y fructosa unidas."

explicacion: |
  Verdadero. La sacarosa es un disacárido de glucosa + fructosa.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["proteinas", "enlace_peptidico"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace peptídico se forma entre un grupo amino y un grupo carboxilo, con pérdida de una molécula de agua."

explicacion: |
  Verdadero, es una síntesis por deshidratación.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "avanzado"
  tags: ["glucidos", "aplicacion"]

respuesta: "sus grupos hidroxilo, que interactúan con los receptores de dulzura de la lengua"
tipo: mc
opciones_explicitas: ["sus grupos hidroxilo, que interactúan con los receptores de dulzura de la lengua", "su color blanco", "su temperatura de fusión", "que siempre son sólidos a temperatura ambiente"]

enunciado: "¿Qué característica estructural de los monosacáridos y disacáridos se relaciona con su sabor dulce?"

explicacion: |
  Los múltiples grupos -OH de los glúcidos son claves para que encajen en los receptores de sabor dulce.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "avanzado"
  tags: ["lipidos", "membrana_celular"]

respuesta: verdadero
tipo: vf

enunciado: "Los fosfolípidos forman una bicapa (doble capa) en las membranas porque así las colas hidrofóbicas quedan protegidas del agua, tanto de adentro como de afuera de la célula."

explicacion: |
  Correcto. Las cabezas hidrofílicas miran hacia el agua (intra y extracelular), y las colas hidrofóbicas quedan resguardadas en el medio.
```

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["proteinas", "enzimas"]

respuesta: verdadero
tipo: vf

enunciado: "Las enzimas, que aceleran reacciones químicas en los seres vivos, son en su mayoría proteínas."

explicacion: |
  Correcto. La función enzimática (catalítica) es una de las funciones más importantes de las proteínas.
```

## Sección: carbono-tetravalencia-cadenas (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["carbono", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "El átomo de carbono siempre forma 4 enlaces covalentes para alcanzar la estabilidad."

explicacion: |
  El carbono tiene 4 electrones de valencia y necesita formar 4 enlaces covalentes para completar su octeto.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["catenacion", "propiedades"]

respuesta: "catenacion"
tipo: completar
respuestas_validas: ["catenacion"]

enunciado: "La propiedad del carbono de formar largas cadenas consigo mismo se llama ___."

explicacion: |
  La catenación permite formar cadenas lineales, ramificadas o anillos.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["electrones", "valencia"]

respuesta: "4"
tipo: mc
opciones_explicitas: ["2", "4", "6", "8"]

enunciado: "El átomo de carbono posee en su capa de valencia:"

explicacion: |
  El carbono está en el grupo 14: tiene 4 electrones en su capa más externa.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["octeto", "electrones"]

respuesta: verdadero
tipo: vf

enunciado: "Al átomo de carbono le faltan 4 electrones para completar su octeto de valencia."

explicacion: |
  Con 4 electrones propios y 4 que le faltan, alcanza los 8 de la configuración de gas noble.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["quimica_organica", "carbono"]

variables:
  tipos: [["lineal", "sin ramificaciones, C-C-C-C"], ["ramificada", "con brazos laterales"], ["ciclica", "la cadena se cierra sobre si misma"]]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx][1]
tipo: mc
opciones_explicitas: ["sin ramificaciones, C-C-C-C", "con brazos laterales", "la cadena se cierra sobre si misma"]

enunciado: "Una cadena de carbono de tipo {tipos[idx][0]} se caracteriza porque..."

explicacion: |
  Una cadena {tipos[idx][0]} es: {tipos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["quimica_organica", "carbono"]

respuesta: verdadero
tipo: vf

enunciado: "Una cadena de carbono cíclica es aquella que se cierra sobre sí misma formando un anillo."

explicacion: |
  Correcto, esa es la definición de cadena cíclica.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["quimica_organica", "carbono"]

respuesta: falso
tipo: vf

enunciado: "El átomo de carbono tiene la capacidad de formar únicamente cadenas lineales, sin posibilidad de ramificaciones o ciclos."

explicacion: |
  Falso. El carbono forma lineales, ramificadas y cíclicas.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["enlaces", "carbono"]

variables:
  escenario: [["simple (C-C)", 1], ["doble (C=C)", 2], ["triple (C-triple-C)", 3]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [1, 2, 3]

enunciado: "Si un enlace entre dos átomos de carbono es de tipo {escenario[idx][0]}, ¿cuántos pares de electrones comparten?"

explicacion: |
  Un enlace simple comparte 1 par, uno doble 2 pares, y uno triple 3 pares.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["enlaces", "carbono"]

respuesta: verdadero
tipo: vf

enunciado: "En un enlace doble (C=C), cada átomo de carbono usa 2 de sus 4 enlaces de valencia con el mismo vecino."

explicacion: |
  Correcto: comparten dos pares de electrones, consumiendo dos de los cuatro enlaces disponibles de cada carbono.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["enlaces", "carbono"]

respuesta: falso
tipo: vf

enunciado: "En un enlace triple, cada átomo de carbono usa sólo 1 de sus 4 enlaces de valencia con el vecino."

explicacion: |
  Falso. En un enlace triple usa 3 de sus 4 enlaces con ese vecino.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["hidrocarburos"]

respuesta: "alcanos"
tipo: completar
respuestas_validas: ["alcanos"]

enunciado: "La distinción entre enlace simple, doble y triple entre carbonos es lo que separa a los ___, alquenos y alquinos."

explicacion: |
  Alcanos (simple), alquenos (doble), alquinos (triple).
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["enlaces", "catenacion"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace C-C es fuerte y estable, lo que permite la catenación (formar cadenas largas)."

explicacion: |
  Esa fuerza y estabilidad del enlace C-C es la base de la catenación.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["definicion", "quimica_organica"]

respuesta: verdadero
tipo: vf

enunciado: "La química orgánica es la rama de la química dedicada casi exclusivamente a los compuestos de carbono."

explicacion: |
  Correcto (con excepciones como carbonatos o CO2, que se estudian como química inorgánica).
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["hidrocarburos", "diversidad"]

respuesta: "millones de moléculas distintas"
tipo: mc
opciones_explicitas: ["millones de moléculas distintas", "solo una molécula", "a lo sumo 10 moléculas", "ninguna molécula estable"]

enunciado: "Con sólo carbono e hidrógeno se pueden formar..."

explicacion: |
  Por la tetravalencia y los enlaces simples/dobles/triples, la variedad de hidrocarburos es enorme.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["diversidad", "tabla_periodica"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún otro elemento de la tabla periódica genera tanta diversidad estructural como el carbono."

explicacion: |
  La catenación con enlaces estables es una propiedad casi exclusiva del carbono en la práctica.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["carbono", "ramificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un átomo de carbono en el medio de una cadena ramificada puede estar unido a 3 o 4 átomos de carbono distintos al mismo tiempo, sin dejar de tener 4 enlaces en total."

explicacion: |
  Correcto: sus 4 enlaces se reparten entre varios vecinos de carbono (más eventualmente H u otros átomos), formando la ramificación.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "avanzado"
  tags: ["comparacion", "silicio"]

respuesta: falso
tipo: vf

enunciado: "El enlace Si-Si (silicio-silicio) es igual de fuerte y estable que el C-C, por eso el silicio también forma cadenas tan largas y variadas como el carbono."

explicacion: |
  Falso. El enlace Si-Si es más débil que el C-C, así que el silicio no cataniza tan bien — de ahí que la química orgánica sea "del carbono" y no "del silicio".
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["carbono", "anillos"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando la cadena de carbono se cierra en un anillo, cada carbono del anillo sigue teniendo 4 enlaces en total, repartidos entre sus vecinos del anillo y (si sobra) átomos de hidrógeno."

explicacion: |
  Correcto, la tetravalencia se mantiene siempre, ya sea en cadena abierta o cerrada (anillo).
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "la tetravalencia y la catenación del carbono"
tipo: mc
opciones_explicitas: ["la tetravalencia y la catenación del carbono", "la alta electronegatividad del carbono", "que el carbono es un metal", "que el carbono siempre forma enlaces iónicos"]

enunciado: "¿Qué propiedad del carbono explica por qué existe toda una rama de la química (orgánica) dedicada casi solo a sus compuestos?"

explicacion: |
  La combinación de 4 enlaces disponibles y la capacidad de encadenarse consigo mismo (catenación) genera la enorme diversidad de compuestos orgánicos.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "avanzado"
  tags: ["comparacion", "tetravalencia"]

respuesta: falso
tipo: vf

enunciado: "El carbono es el único elemento de la tabla periódica que puede formar 4 enlaces covalentes."

explicacion: |
  Falso. Otros elementos del grupo 14 (como el silicio) también son tetravalentes; lo distintivo del carbono no es sólo la tetravalencia, sino combinarla con enlaces C-C muy estables (catenación fuerte).
```

## Sección: cinetica-reaccion (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "La cinética química estudia qué tan rápido ocurre una reacción, no si esta libera o absorbe energía."

explicacion: |
  La cinética se ocupa de la velocidad y los mecanismos de reacción; la termoquímica estudia los cambios de energía.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["definiciones"]

respuesta: "tiempo"
tipo: completar
respuestas_validas: ["tiempo"]

enunciado: "La velocidad de reacción se mide como el cambio de concentración dividido el cambio de ___."

explicacion: |
  v = Δ[concentración] / Δt.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "La termoquímica dice hasta dónde llega una reacción y el equilibrio dice qué tan rápido pasa."

explicacion: |
  Incorrecto — es al revés: el equilibrio dice hasta dónde llega, y la cinética (no la termoquímica) dice qué tan rápido.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["calculo", "velocidad_media"]

variables:
  datos: [[10, 2], [20, 4], [40, 5]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0] / datos[idx][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la velocidad media de una reacción si el cambio de concentración es {datos[idx][0]} unidades y el intervalo de tiempo es {datos[idx][1]} segundos."

pasos:
  - "v = Δ[concentración] / Δt"

explicacion: |
  v = {datos[idx][0]} / {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["cinetica", "energia_activacion"]

respuesta: "activacion"
tipo: completar
respuestas_validas: ["activacion"]

enunciado: "La energía mínima que necesitan las partículas para reaccionar al chocar se llama energía de ___."

explicacion: |
  La energía de activación es la barrera que los reactivos deben superar para transformarse en productos.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["cinetica", "velocidad_reaccion"]

respuesta: falso
tipo: vf

enunciado: "Una reacción con energía de activación ALTA es más rápida que una con energía de activación baja."

explicacion: |
  Falso. A mayor energía de activación, menos partículas la superan en cada choque: la reacción es más lenta.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["termodinamica", "cinetica"]

respuesta: falso
tipo: vf

enunciado: "La energía de activación depende de si la reacción es endotérmica o exotérmica."

explicacion: |
  Falso. Son propiedades independientes: la energía de activación es cinética (velocidad), y endo/exotérmica es termodinámico (ΔH).
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["cinetica", "exotermica"]

respuesta: verdadero
tipo: vf

enunciado: "Una reacción muy exotérmica puede ser igual de lenta si su energía de activación es alta."

explicacion: |
  Verdadero. Ejemplo: la combustión del papel es muy exotérmica pero necesita una chispa para superar su energía de activación — no arranca sola.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["cinetica", "factores_reaccion"]

variables:
  escenario: [["aumentar la temperatura", "mas particulas alcanzan la energia de activacion"], ["aumentar la concentracion", "mas choques por segundo"], ["aumentar la superficie de contacto", "mas particulas expuestas a la vez"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["mas particulas alcanzan la energia de activacion", "mas choques por segundo", "mas particulas expuestas a la vez"]

enunciado: "Si se {escenario[idx][0]}, ¿por qué aumenta la velocidad de la reacción?"

explicacion: |
  {escenario[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["superficie_contacto", "estado_de_agregacion"]

respuesta: verdadero
tipo: vf

enunciado: "Moler un sólido en polvo aumenta la velocidad de reacción respecto al mismo sólido entero, porque aumenta la superficie de contacto."

explicacion: |
  Al pulverizar el sólido, hay más partículas expuestas para colisionar al mismo tiempo.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["temperatura"]

respuesta: falso
tipo: vf

enunciado: "Bajar la temperatura de una reacción la hace más rápida."

explicacion: |
  Falso. Al bajar la temperatura, menos partículas superan la energía de activación: la reacción se hace más lenta.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["factores_reaccion"]

respuesta: "bajar la concentracion de los reactivos"
tipo: mc
opciones_explicitas: ["bajar la concentracion de los reactivos", "subir la temperatura", "agregar un catalizador", "aumentar la superficie de contacto"]

enunciado: "¿Cuál de estos factores NO acelera una reacción química?"

explicacion: |
  Bajar la concentración reduce la frecuencia de choques: hace más lenta la reacción, no más rápida.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["catalizadores", "energia_activacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un catalizador aumenta la velocidad de una reacción al disminuir la energía de activación, abriendo un camino alternativo."

explicacion: |
  Correcto. El catalizador ofrece una ruta con menor barrera energética, así que más partículas la superan.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["catalizadores", "equilibrio_quimico"]

respuesta: falso
tipo: vf

enunciado: "Un catalizador modifica el valor de la constante de equilibrio (Kc) de una reacción."

explicacion: |
  Falso. El catalizador acelera la reacción directa E inversa por igual: no cambia Kc ni el ΔH, sólo llega más rápido al mismo equilibrio.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["catalizadores", "estequiometria"]

respuesta: falso
tipo: vf

enunciado: "Un catalizador se consume completamente durante la reacción, como si fuera un reactivo."

explicacion: |
  Falso. El catalizador participa del mecanismo pero se regenera al final: no se consume.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["catalizadores", "equilibrio_quimico"]

respuesta: "equilibrio"
tipo: completar
respuestas_validas: ["equilibrio"]

enunciado: "Un catalizador permite que una reacción alcance el ___ de forma más rápida, sin cambiar las concentraciones finales."

explicacion: |
  El catalizador acelera la velocidad, permitiendo llegar antes al mismo estado de equilibrio.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["conceptos", "comparacion"]

respuesta: "la velocidad"
tipo: mc
opciones_explicitas: ["la velocidad", "el calor liberado o absorbido", "hasta dónde llega la reacción", "la masa de los reactivos"]

enunciado: "¿Qué mide específicamente la cinética química, a diferencia de la termoquímica y el equilibrio?"

explicacion: |
  La termoquímica mide el intercambio de calor (ΔH) y el equilibrio mide hasta dónde llega la reacción (Kc); la cinética mide qué tan rápido ocurre todo eso.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "avanzado"
  tags: ["catalizadores", "equilibrio_quimico"]

respuesta: verdadero
tipo: vf

enunciado: "Un catalizador baja la energía de activación tanto de la reacción directa como de la inversa, por eso no altera la posición del equilibrio."

explicacion: |
  Correcto. Al acelerar ambos sentidos por igual, el sistema llega antes al equilibrio, pero ese equilibrio queda en el mismo punto que sin catalizador.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "intermedio"
  tags: ["conceptos", "choques"]

respuesta: falso
tipo: vf

enunciado: "Cualquier choque entre partículas de reactivos produce una reacción, sin importar la energía que tengan."

explicacion: |
  Falso. Sólo los choques con energía igual o mayor a la energía de activación (y con orientación adecuada) son "efectivos" y producen reacción.
```

```
metadata:
  materia: "quimica"
  tema: "cinetica_reaccion"
  nivel: "basico"
  tags: ["aplicacion", "temperatura"]

respuesta: verdadero
tipo: vf

enunciado: "Guardar comida en la heladera retrasa su descomposición porque baja la temperatura, y eso hace más lentas las reacciones químicas involucradas."

explicacion: |
  Correcto. A menor temperatura, menos partículas alcanzan la energía de activación necesaria para las reacciones de descomposición: todo va más lento.
```
