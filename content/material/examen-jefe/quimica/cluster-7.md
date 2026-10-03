# Examen jefe — [PENDIENTE #847]

> Logro #847. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **100 preguntas totales** en 5/5 secciones.

---

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
respuestas_validas:
  - "energetica"
  - "energética"

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
respuestas_validas:
  - "grasos"

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

## Sección: mol-masa-molar (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["mol", "particulas"]

respuesta: verdadero
tipo: vf

enunciado: "1 mol de cualquier sustancia contiene exactamente 6,022×10²³ partículas."

explicacion: |
  El mol es la unidad que define la cantidad de sustancia y equivale al número de Avogadro de partículas.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["avogadro", "constante"]

respuesta: "6.022x10^23"
tipo: mc
opciones_explicitas: ["6.022x10^23", "3.14", "9.8", "1.6x10^-19"]

enunciado: "El número de Avogadro es aproximadamente:"

explicacion: |
  El número de Avogadro es la cantidad de entidades elementales que hay en 1 mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["avogadro", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "El número de Avogadro cambia dependiendo de la sustancia que se esté midiendo."

explicacion: |
  Falso. El número de Avogadro es una constante universal; lo que cambia según la sustancia es la MASA de un mol (la masa molar).
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["constante", "nomenclatura"]

respuesta: "N_A"
tipo: completar
respuestas_validas:
  - "N_A"

enunciado: "En VBLang, la constante del número de Avogadro ya está precargada con el nombre ___."

explicacion: |
  El identificador `N_A` está disponible como constante global, sin necesidad de declararlo.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["masa_molar", "elementos"]

respuesta: "masa atómica de la tabla periódica"
tipo: mc
opciones_explicitas: ["masa atómica de la tabla periódica", "número atómico", "número de neutrones", "número de oxidación"]

enunciado: "La masa molar de un elemento coincide numéricamente con su..."

explicacion: |
  La masa molar de un elemento (en g/mol) es numéricamente igual a su masa atómica de la tabla periódica (en u).
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "agua"]

variables:
  h: 1
  masa_o: 16

respuesta: 2 * h + masa_o
tipo: completar
tolerancia_abs: 0

enunciado: "Calcula la masa molar del agua (H2O) si la masa atómica del H es {h} y la del O es {masa_o}."

pasos:
  - "Multiplicar la masa del H por 2 (hay 2 átomos de H): 2 × {h}"
  - "Sumar la masa del O: (2 × {h}) + {masa_o}"

explicacion: |
  La masa molar de H2O es (2 × 1) + 16 = 18 g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "dioxido_de_carbono"]

variables:
  c: 12
  masa_o: 16

respuesta: c + 2 * masa_o
tipo: completar
tolerancia_abs: 0

enunciado: "Calcula la masa molar del dióxido de carbono (CO2) si la masa atómica del C es {c} y la del O es {masa_o}."

pasos:
  - "Sumar la masa de un átomo de C: {c}"
  - "Sumar la masa de dos átomos de O: 2 × {masa_o}"

explicacion: |
  La masa molar de CO2 es 12 + (2 × 16) = 44 g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "sal_comun"]

variables:
  na: 23
  cl: 35.5

respuesta: na + cl
tipo: completar
tolerancia_abs: 0.1

enunciado: "Calcula la masa molar del cloruro de sodio (NaCl) si la masa atómica del Na es {na} y la del Cl es {cl}."

explicacion: |
  La masa molar de NaCl es 23 + 35,5 = 58,5 g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La masa molar de un compuesto es la suma de las masas atómicas de todos los átomos de su fórmula."

explicacion: |
  Correcto. Para un compuesto se suman las masas atómicas de cada átomo, según su cantidad en la fórmula.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "moles"]

variables:
  masa_molar: uno_de([2, 4, 5, 10, 20, 25, 50])
  moles_deseados: random(1, 10)
  masa: masa_molar * moles_deseados

respuesta: moles_deseados
tipo: completar
tolerancia_abs: 0

enunciado: "Una muestra contiene {masa} g de una sustancia cuya masa molar es {masa_molar} g/mol. ¿Cuántos moles hay en la muestra?"

explicacion: |
  n = m / M = {masa} / {masa_molar} = {moles_deseados} moles.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  masa_molar: uno_de([2, 4, 5, 10, 20, 25, 50])
  moles: random(1, 10)

respuesta: masa_molar * moles
tipo: completar
tolerancia_abs: 0

enunciado: "Si hay {moles} moles de una sustancia con masa molar {masa_molar} g/mol, ¿cuál es la masa de la muestra en gramos?"

explicacion: |
  m = n × M = {moles} × {masa_molar} g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["teoria", "formula"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula para calcular el número de moles (n) es n = masa / masa molar."

explicacion: |
  Correcto. n = m / M relaciona la masa de una muestra con su masa molar para obtener la cantidad de sustancia.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["unidades", "conceptos"]

respuesta: "mol"
tipo: completar
respuestas_validas:
  - "mol"

enunciado: "La unidad de la masa molar es gramos por ___."

explicacion: |
  La masa molar es la masa de un mol de sustancia, así que su unidad es g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["avogadro", "mol"]

respuesta: N_A
tipo: completar
tolerancia_abs: 1000000000000000000

enunciado: "¿Cuántas partículas (átomos o moléculas) hay en exactamente 1 mol de cualquier sustancia?"

explicacion: |
  Por definición, 1 mol contiene N_A partículas (aproximadamente 6,022×10²³), sin importar de qué sustancia se trate.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["moles", "agua", "calculo"]

variables:
  masa_molar_agua: 18
  gramos: uno_de([18, 36, 54, 72, 90])

respuesta: gramos / masa_molar_agua
tipo: completar
tolerancia_abs: 0.001

enunciado: "Una muestra de agua tiene {gramos} gramos. ¿Cuántos moles de agua hay? (masa molar del agua = {masa_molar_agua} g/mol)"

pasos:
  - "Identificar la masa de la muestra."
  - "Dividir la masa por la masa molar del agua."

explicacion: |
  n = m / M = {gramos} / {masa_molar_agua} moles.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["relacion", "particulas"]

respuesta: verdadero
tipo: vf

enunciado: "Cuantos más moles de una sustancia tengo, más partículas (átomos o moléculas) hay en la muestra."

explicacion: |
  Verdadero. El número de partículas se relaciona con los moles mediante N = n × N_A.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["simbologia", "notacion"]

respuesta: "M"
tipo: mc
opciones_explicitas: ["M", "m", "n", "N"]

enunciado: "¿Cuál es la abreviatura convencional de la masa molar en las fórmulas de este tema?"

explicacion: |
  La masa molar se representa con "M" (mayúscula). "m" es la masa en gramos, "n" son los moles, y "N" es el número de partículas.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["calculo", "sodio"]

variables:
  masa_atomica_na: 23

respuesta: masa_atomica_na
tipo: completar
tolerancia_abs: 0

enunciado: "Si la masa atómica del sodio (Na) en la tabla periódica es {masa_atomica_na}, ¿cuál es su masa molar en g/mol?"

explicacion: |
  Para un elemento, la masa molar coincide numéricamente con la masa atómica: {masa_atomica_na} g/mol.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["conceptos", "diferencia"]

respuesta: falso
tipo: vf

enunciado: "La masa molar (M) y el número de moles (n) son la misma magnitud, sólo que con nombres distintos."

explicacion: |
  Falso. La masa molar (M) es una propiedad fija de cada sustancia (g/mol); el número de moles (n) depende de cuánta cantidad de esa sustancia hay en la muestra.
```

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "avanzado"
  tags: ["calculo", "co2"]

variables:
  c: 12
  masa_o: 16
  masa_molar_co2: c + 2 * masa_o
  gramos_co2: uno_de([44, 88, 132, 176])

respuesta: gramos_co2 / masa_molar_co2
tipo: completar
tolerancia_abs: 0.001

enunciado: "El CO2 tiene masa molar {masa_molar_co2} g/mol (C={c}, O={masa_o}). Si hay {gramos_co2} g de CO2, ¿cuántos moles son?"

explicacion: |
  n = m / M = {gramos_co2} / {masa_molar_co2} moles.
```

## Sección: oxidacion-reduccion (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "electrones"]

respuesta: "pierde electrones"
tipo: mc
opciones_explicitas: ["pierde electrones", "gana electrones", "ni pierde ni gana", "pierde protones"]

enunciado: "En química, la oxidación es el proceso en el que un átomo o ion..."

explicacion: |
  La oxidación es la pérdida de electrones.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "electrones"]

respuesta: "gana electrones"
tipo: mc
opciones_explicitas: ["gana electrones", "pierde electrones", "ni pierde ni gana", "gana protones"]

enunciado: "En química, la reducción es el proceso en el que un átomo o ion..."

explicacion: |
  La reducción es la ganancia de electrones.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "numero_de_oxidacion"]

respuesta: verdadero
tipo: vf

enunciado: "Al oxidarse, el número de oxidación de un elemento aumenta (se vuelve más positivo)."

explicacion: |
  Como pierde cargas negativas (electrones), su número de oxidación sube.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "numero_de_oxidacion"]

respuesta: falso
tipo: vf

enunciado: "Al reducirse, el número de oxidación de un elemento aumenta (se vuelve más positivo)."

explicacion: |
  Falso. Al ganar electrones, su número de oxidación DISMINUYE.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La oxidación y la reducción siempre ocurren juntas en una reacción redox."

explicacion: |
  Si una especie se oxida (pierde electrones), otra debe reducirse (ganarlos): se conserva la carga total.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["mnemotecnica"]

respuesta: "Gain"
tipo: completar
respuestas_validas:
  - "Gain"

enunciado: "OIL RIG: Oxidation Is Loss, Reduction Is ___."

explicacion: |
  OIL RIG: Oxidation Is Loss (de electrones), Reduction Is Gain (de electrones).
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["agente_oxidante"]

respuesta: verdadero
tipo: vf

enunciado: "El agente oxidante es la sustancia que provoca que otra sustancia se oxide."

explicacion: |
  Correcto. El agente oxidante acepta electrones de la otra sustancia, provocando su oxidación.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["agente_oxidante"]

respuesta: falso
tipo: vf

enunciado: "El agente oxidante, durante la reacción, se oxida a sí mismo."

explicacion: |
  Falso. El agente oxidante gana electrones, así que se REDUCE a sí mismo.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["agente_reductor"]

respuesta: verdadero
tipo: vf

enunciado: "El agente reductor es la sustancia que provoca que otra se reduzca, y en el proceso se oxida a sí mismo."

explicacion: |
  Correcto. Cede electrones (se oxida) para que la otra sustancia se reduzca.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["nomenclatura", "agentes"]

respuesta: falso
tipo: vf

enunciado: "El nombre 'agente oxidante' describe lo que le sucede a la sustancia misma, no lo que le hace al otro reactivo."

explicacion: |
  Falso. El nombre describe la acción que ejerce sobre el otro reactivo (lo oxida), aunque él mismo se reduzca.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "estado_de_oxidacion"]

respuesta: verdadero
tipo: vf

enunciado: "En Zn + Cu2+ -> Zn2+ + Cu, el zinc pasa de número de oxidación 0 a +2: se oxida."

explicacion: |
  Pierde electrones, sube su número de oxidación: se oxida.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "estado_de_oxidacion"]

respuesta: verdadero
tipo: vf

enunciado: "En Zn + Cu2+ -> Zn2+ + Cu, el cobre pasa de +2 a 0: se reduce."

explicacion: |
  Gana electrones, baja su número de oxidación: se reduce.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "agente_reductor"]

respuesta: "Zn"
tipo: mc
opciones_explicitas: ["Zn", "Cu2+", "Zn2+", "Cu"]

enunciado: "En Zn + Cu2+ -> Zn2+ + Cu, ¿quién es el agente reductor?"

explicacion: |
  El Zn se oxida y provoca la reducción del Cu2+: es el agente reductor.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "agente_oxidante"]

respuesta: "Cu2+"
tipo: mc
opciones_explicitas: ["Cu2+", "Zn", "Zn2+", "Cu"]

enunciado: "En Zn + Cu2+ -> Zn2+ + Cu, ¿quién es el agente oxidante?"

explicacion: |
  El Cu2+ se reduce y provoca la oxidación del Zn: es el agente oxidante.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "electrones"]

variables:
  carga_inicial: 0
  carga_final: uno_de([2, 3])

respuesta: carga_final - carga_inicial
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un átomo pasa de una carga de {carga_inicial} a {carga_final}, ¿cuántos electrones perdió?"

explicacion: |
  Electrones perdidos = {carga_final} - {carga_inicial}.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "electrones"]

respuesta: verdadero
tipo: vf

enunciado: "Los electrones que un elemento pierde al oxidarse son exactamente los que otro elemento gana al reducirse."

explicacion: |
  Los electrones cedidos por el agente reductor igualan a los aceptados por el agente oxidante.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["pilas", "espontaneidad"]

respuesta: verdadero
tipo: vf

enunciado: "Las pilas aprovechan una reacción redox espontánea para generar corriente eléctrica."

explicacion: |
  Correcto — ver ../pilas-celdas-galvanicas/.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["electrolisis", "energia"]

respuesta: verdadero
tipo: vf

enunciado: "La electrólisis usa corriente eléctrica para forzar una reacción redox que no ocurriría sola."

explicacion: |
  Correcto — ver ../electrolisis/, requiere energía externa (proceso no espontáneo).
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "basico"
  tags: ["redox", "electrones"]

respuesta: falso
tipo: vf

enunciado: "En una reacción redox, los electrones simplemente desaparecen, no se transfieren de un elemento a otro."

explicacion: |
  Falso. Por conservación de la carga, los electrones se transfieren, no desaparecen.
```

```
metadata:
  materia: "quimica"
  tema: "oxidacion_reduccion"
  nivel: "intermedio"
  tags: ["redox", "identificacion"]

variables:
  escenario: [["+3 a +2", "reduccion"], ["-1 a 0", "oxidacion"], ["0 a +1", "oxidacion"], ["+4 a +1", "reduccion"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["oxidacion", "reduccion"]

enunciado: "Si el número de oxidación de un elemento pasa de {escenario[idx][0]}, ¿ese elemento se oxidó o se redujo?"

explicacion: |
  Si el número de oxidación sube, es oxidación; si baja, es reducción.
```

## Sección: gases-ideales (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["leyes", "gases"]

variables:
  escenario: [["Boyle", "temperatura"], ["Charles", "presion"], ["Gay-Lussac", "volumen"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["temperatura", "presion", "volumen"]

enunciado: "En la ley de {escenario[idx][0]}, ¿qué variable se mantiene constante?"

explicacion: |
  La ley de {escenario[idx][0]} mantiene constante la {escenario[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["boyle", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de Boyle dice que la presión y el volumen son inversamente proporcionales a temperatura constante."

explicacion: |
  Verdadero. La ley de Boyle establece que P × V = constante cuando la temperatura no cambia.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["charles", "relacion"]

respuesta: falso
tipo: vf

enunciado: "La ley de Charles dice que el volumen y la temperatura son inversamente proporcionales a presión constante."

explicacion: |
  Falso. Son directamente proporcionales: si la temperatura sube, el volumen también sube (a presión constante).
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["gay_lussac", "completar"]

respuesta: "Gay-Lussac"
tipo: completar
respuestas_validas:
  - "Gay-Lussac"

enunciado: "La ley que relaciona presión y temperatura a volumen constante es la ley de ___."

explicacion: |
  La ley de Gay-Lussac dice que la presión es directamente proporcional a la temperatura absoluta cuando el volumen es constante.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["ley_de_gases", "calculo"]

variables:
  datos_n: [1, 2, 4]
  datos_t: [100, 200, 400]
  n_idx: uno_de([0, 1, 2])
  t_idx: uno_de([0, 1, 2])
  r: 0.0821

respuesta: datos_n[n_idx] * r * datos_t[t_idx]
tipo: completar
tolerancia_abs: 0.5

enunciado: "Calculá el producto PV usando PV=nRT, con n = {datos_n[n_idx]} mol y T = {datos_t[t_idx]} K (R = {r})."

pasos:
  - "PV = n × R × T"

explicacion: |
  PV = {datos_n[n_idx]} × {r} × {datos_t[t_idx]}.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["despeje", "moles"]

variables:
  p_vals: [1, 2]
  v_vals: [10, 20, 40]
  t_vals: [100, 200]
  p_idx: uno_de([0, 1])
  v_idx: uno_de([0, 1, 2])
  t_idx: uno_de([0, 1])
  r: 0.0821

respuesta: (p_vals[p_idx] * v_vals[v_idx]) / (r * t_vals[t_idx])
tipo: completar
tolerancia_abs: 0.2

enunciado: "Con P = {p_vals[p_idx]} atm, V = {v_vals[v_idx]} L y T = {t_vals[t_idx]} K (R = {r}), calculá el número de moles (n)."

pasos:
  - "n = PV / RT"

explicacion: |
  n = ({p_vals[p_idx]} × {v_vals[v_idx]}) / ({r} × {t_vals[t_idx]}).
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "En la ecuación PV=nRT, la temperatura T siempre debe estar en la escala absoluta (Kelvin), no en grados Celsius."

explicacion: |
  Correcto. Usar Celsius directamente da un resultado incorrecto — hay que convertir a Kelvin siempre.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["conversiones"]

respuesta: "273"
tipo: completar
respuestas_validas:
  - "273"

enunciado: "La conversión de grados Celsius a Kelvin es: K = C + ___."

explicacion: |
  Se suma 273 (más precisamente 273,15) para pasar de Celsius a la escala absoluta.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["gases", "condiciones_normales"]

respuesta: verdadero
tipo: vf

enunciado: "En condiciones normales (1 atm, 273 K), 1 mol de cualquier gas ideal ocupa 22,4 litros."

explicacion: |
  Correcto. Por definición, el volumen molar de un gas ideal en CNPT es 22,4 L/mol.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["calculo", "volumen"]

variables:
  moles_lista: [1, 2, 3, 5]
  idx: uno_de([0, 1, 2, 3])

respuesta: moles_lista[idx] * 22.4
tipo: completar
tolerancia_abs: 0.5

enunciado: "En condiciones normales, ¿qué volumen ocupan {moles_lista[idx]} moles de un gas ideal?"

pasos:
  - "V = n × 22,4 L/mol"

explicacion: |
  V = {moles_lista[idx]} × 22,4 L.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "1 atm y 273 K"
tipo: mc
opciones_explicitas: ["1 atm y 273 K", "2 atm y 300 K", "1 atm y 298 K", "0.5 atm y 273 K"]

enunciado: "¿Cuáles son las condiciones normales de presión y temperatura (CNPT)?"

explicacion: |
  Las condiciones normales son 1 atm de presión y 273 K (0°C) de temperatura.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["temperatura", "kelvin"]

respuesta: falso
tipo: vf

enunciado: "Usar 25 grados Celsius directamente en la fórmula PV=nRT (sin convertir a Kelvin) da un resultado correcto."

explicacion: |
  Falso. Hay que convertir siempre a Kelvin (25°C = 298 K); usar el 25 directo da un resultado muy distinto al real.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["constante_r", "teoria"]

respuesta: "R"
tipo: completar
respuestas_validas:
  - "R"

enunciado: "La constante de los gases ideales ya está precargada en VBLang con el nombre ___."

explicacion: |
  El identificador `R` está disponible como constante global en el DSL.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["despeje", "formula"]

respuesta: "P = nRT/V"
tipo: mc
opciones_explicitas: ["P = nRT/V", "P = nRT*V", "P = V/nRT", "P = nR/VT"]

enunciado: "Si se despeja la presión (P) de PV = nRT, la fórmula queda:"

explicacion: |
  Pasando V al otro lado dividiendo: P = nRT/V.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["calculo", "volumen"]

variables:
  p_val: uno_de([2, 4])
  n_val: uno_de([1, 2])
  t_val: uno_de([200, 300])
  r: 0.0821

respuesta: n_val * r * t_val / p_val
tipo: completar
tolerancia_abs: 0.5

enunciado: "Calculá el volumen (V) de un gas ideal con P = {p_val} atm, n = {n_val} mol, R = {r} L·atm/(K·mol) y T = {t_val} K."

pasos:
  - "V = nRT / P"

explicacion: |
  V = ({n_val} × {r} × {t_val}) / {p_val}.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["leyes", "gay_lussac"]

respuesta: verdadero
tipo: vf

enunciado: "En la ecuación de los gases ideales, si la temperatura sube y el volumen se mantiene constante, la presión también sube."

explicacion: |
  Correcto (Ley de Gay-Lussac): a volumen constante, presión y temperatura son directamente proporcionales.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["despeje", "formula"]

respuesta: "T = PV/(nR)"
tipo: mc
opciones_explicitas: ["T = PV/(nR)", "T = PVnR", "T = nR/(PV)", "T = PV+nR"]

enunciado: "Si se despeja la temperatura (T) de PV = nRT, la fórmula queda:"

explicacion: |
  Despejando T: T = PV / (n × R).
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["boyle", "aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si la presión sobre un gas aumenta y la temperatura se mantiene constante, el volumen del gas disminuye."

explicacion: |
  Correcto (Ley de Boyle): a temperatura constante, presión y volumen son inversamente proporcionales.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["constante_r", "unidades"]

respuesta: "L·atm/(mol·K)"
tipo: mc
opciones_explicitas: ["L·atm/(mol·K)", "g/mol", "atm/L", "mol/L"]

enunciado: "¿Cuáles son las unidades de la constante R usada en PV=nRT (con P en atm y V en L)?"

explicacion: |
  R = 0,0821 L·atm/(mol·K) es la forma de R consistente con presión en atmósferas y volumen en litros.
```

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "El estado de un gas ideal se puede describir completamente conociendo sólo su volumen, sin necesidad de presión ni temperatura."

explicacion: |
  Falso. Un mismo volumen de gas puede tener distinta cantidad de moles según la presión y la temperatura — hacen falta las 4 variables (P, V, n, T) relacionadas por PV=nRT.
```

## Sección: electrolisis (20 preguntas)

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

```
metadata:
  materia: "quimica"
  tema: "electrolisis"
  nivel: "intermedio"
  tags: ["estequiometria", "volumen", "gas"]

variables:
  volumen_o2: uno_de([1, 2, 3, 5])

respuesta: volumen_o2 * 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "En la electrólisis del agua la proporción H₂:O₂ es 2:1. Si se producen {volumen_o2} mL de O₂, ¿qué volumen de H₂ se produce?"

pasos:
  - "H2 = O2 × 2"

explicacion: |
  {volumen_o2} × 2 mL de H₂.
```

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

