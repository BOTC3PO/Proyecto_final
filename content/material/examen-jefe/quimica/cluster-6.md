# Examen jefe — Domina la nomenclatura y el pH

> Logro #146. Completaste el parcial integrando conceptos de nomenclatura, redox, petróleo y equilibrio ácido-base. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **123 preguntas totales** en 5/5 secciones.

---

## Sección: nomenclatura-compuestos (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "estado_de_oxidacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un elemento en estado elemental (como O2 o Fe) tiene un número de oxidación de 0."

explicacion: |
  En su forma pura, sin combinar con otros elementos, el número de oxidación es siempre 0.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "oxigeno"]

respuesta: "-2"
tipo: mc
opciones_explicitas: ["-2", "+1", "-1", "+2"]

enunciado: "¿Cuál es el número de oxidación habitual del oxígeno en la mayoría de los compuestos?"

explicacion: |
  En la gran mayoría de los óxidos y compuestos, el oxígeno actúa con número de oxidación -2.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "hidrogeno"]

respuesta: "+1"
tipo: mc
opciones_explicitas: ["+1", "-2", "-1", "0"]

enunciado: "¿Cuál es el número de oxidación habitual del hidrógeno en la mayoría de los compuestos?"

explicacion: |
  Cuando el hidrógeno se combina con no metales, su número de oxidación es +1.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "reglas_calculo"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los números de oxidación de todos los átomos en un compuesto neutro debe ser igual a 0."

explicacion: |
  Por electroneutralidad, la carga total de un compuesto neutro tiene que ser cero.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "metales"]

respuesta: falso
tipo: vf

enunciado: "Todos los metales tienen un único número de oxidación posible."

explicacion: |
  Falso. Muchos metales tienen valencias variables, como el hierro (Fe), que puede actuar con +2 o +3.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "sales", "binarios"]

variables:
  datos: [["NaCl", "cloruro de sodio"], ["KBr", "bromuro de potasio"], ["MgCl2", "cloruro de magnesio"], ["CaF2", "fluoruro de calcio"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cloruro de sodio", "bromuro de potasio", "cloruro de magnesio", "fluoruro de calcio"]

enunciado: "Escribe el nombre correcto para la fórmula química {datos[idx][0]}."

explicacion: |
  El nombre de una sal binaria se forma con el no metal terminado en "-uro", seguido de "de" y el nombre del metal.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "reglas"]

respuesta: "metal"
tipo: completar
respuestas_validas: ["metal"]

enunciado: "El nombre general de un compuesto binario metal + no metal sigue el patrón \"[no metal]uro de ___\"."

explicacion: |
  En la nomenclatura de sales, el segundo componente del nombre es el metal.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "intermedio"
  tags: ["nomenclatura", "stock"]

variables:
  datos: [["FeCl2", "cloruro de hierro (II)"], ["FeCl3", "cloruro de hierro (III)"], ["CuO", "oxido de cobre (II)"], ["Cu2O", "oxido de cobre (I)"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cloruro de hierro (II)", "cloruro de hierro (III)", "oxido de cobre (II)", "oxido de cobre (I)"]

enunciado: "Indica el nombre correcto según la nomenclatura de Stock para el compuesto {datos[idx][0]}."

explicacion: |
  La nomenclatura Stock usa números romanos entre paréntesis para indicar el número de oxidación del metal cuando tiene más de uno posible.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando un metal tiene un solo número de oxidación posible, no hace falta especificar ningún número en el nombre (por ejemplo, el sodio siempre es +1)."

explicacion: |
  Si el metal tiene un único número de oxidación, indicarlo es redundante y se omite en la nomenclatura Stock.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "oxidos", "metal"]

variables:
  datos: [["Na2O", "oxido de sodio"], ["CaO", "oxido de calcio"], ["Al2O3", "oxido de aluminio"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["oxido de sodio", "oxido de calcio", "oxido de aluminio"]

enunciado: "Indica el nombre correcto para la fórmula {datos[idx][0]}."

explicacion: |
  En óxidos de metales con un solo número de oxidación posible, se usa la forma "óxido de [metal]" sin más aclaración.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "oxidos", "no_metal"]

variables:
  datos: [["CO2", "dioxido de carbono"], ["CO", "monoxido de carbono"], ["SO3", "trioxido de azufre"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["dioxido de carbono", "monoxido de carbono", "trioxido de azufre"]

enunciado: "Aplica la nomenclatura sistemática (prefijos griegos) para la fórmula {datos[idx][0]}."

explicacion: |
  La nomenclatura sistemática usa prefijos como mono-, di-, tri-, etc. para indicar la cantidad de átomos de cada elemento.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "oxidos"]

respuesta: verdadero
tipo: vf

enunciado: "En los óxidos de no metales se usan prefijos griegos (mono-, di-, tri-) en lugar de números romanos."

explicacion: |
  Correcto. La nomenclatura Stock usa números romanos para metales; la sistemática usa prefijos para no metales.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["nomenclatura", "oxidos"]

respuesta: "elemento"
tipo: completar
respuestas_validas: ["elemento"]

enunciado: "Un compuesto binario formado por un ___ (metal o no metal) combinado con oxígeno se llama, en general, óxido."

explicacion: |
  Un óxido es la combinación binaria de cualquier elemento con oxígeno.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "intermedio"
  tags: ["nomenclatura", "sistemas"]

variables:
  datos: [["Stock", "número romano entre paréntesis"], ["Tradicional", "sufijo -oso (menor) o -ico (mayor)"], ["Sistemático", "prefijos griegos mono-, di-, tri-"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["número romano entre paréntesis", "sufijo -oso (menor) o -ico (mayor)", "prefijos griegos mono-, di-, tri-"]

enunciado: "En el sistema {datos[idx][0]}, ¿cómo se indica el número de oxidación del metal?"

explicacion: |
  Stock usa números romanos, Tradicional usa sufijos -oso/-ico, y Sistemático (para no metales) usa prefijos griegos.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["tradicional", "sufijos"]

respuesta: "-oso"
tipo: mc
opciones_explicitas: ["-oso", "-ico", "-uro", "-ato"]

enunciado: "En la nomenclatura tradicional, cuando un metal actúa con su número de oxidación MENOR, se usa el sufijo ___."

explicacion: |
  El sufijo -oso corresponde al número de oxidación más bajo de los dos posibles.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["tradicional", "sufijos"]

respuesta: "-ico"
tipo: mc
opciones_explicitas: ["-ico", "-oso", "-uro", "-ato"]

enunciado: "En la nomenclatura tradicional, cuando un metal actúa con su número de oxidación MAYOR, se usa el sufijo ___."

explicacion: |
  El sufijo -ico corresponde al número de oxidación más alto de los dos posibles.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "intermedio"
  tags: ["equivalencia", "nomenclatura"]

respuesta: verdadero
tipo: vf

enunciado: "'Cloruro ferroso' y 'cloruro de hierro (II)' nombran exactamente el mismo compuesto, usando sistemas de nomenclatura distintos."

explicacion: |
  Correcto. "Ferroso" (tradicional) y "(II)" (Stock) indican el mismo número de oxidación menor del hierro.
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "intermedio"
  tags: ["raices", "nomenclatura"]

respuesta: "ferr"
tipo: completar
respuestas_validas: ["ferr"]

enunciado: "En la nomenclatura tradicional, la raíz latina usada para el hierro es ___ (como en ferroso/férrico)."

explicacion: |
  La raíz latina del hierro es "ferr-" (del latín ferrum).
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "intermedio"
  tags: ["raices", "nomenclatura"]

respuesta: "cupr"
tipo: completar
respuestas_validas: ["cupr"]

enunciado: "En la nomenclatura tradicional, la raíz latina usada para el cobre es ___ (como en cuproso/cúprico)."

explicacion: |
  La raíz latina del cobre es "cupr-" (del latín cuprum).
```

```
metadata:
  materia: "quimica"
  tema: "nomenclatura_compuestos"
  nivel: "basico"
  tags: ["oxidos", "sales", "diferencia"]

respuesta: falso
tipo: vf

enunciado: "El compuesto CaCl2 se nombra como un óxido de calcio, porque el calcio siempre forma óxidos."

explicacion: |
  Falso. CaCl2 combina calcio con cloro (no con oxígeno), así que es una sal binaria: "cloruro de calcio", no un óxido.
```

## Sección: numero-atomico-masico (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["atomos", "protones"]

respuesta: verdadero
tipo: vf

enunciado: "El número atómico (Z) representa la cantidad de protones presentes en el núcleo de un átomo."

explicacion: |
  Correcto. El número atómico define la identidad del elemento químico.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["masa", "nucleo"]

respuesta: falso
tipo: vf

enunciado: "El número másico (A) incluye la masa de los electrones en el cálculo total."

explicacion: |
  Falso. El número másico es la suma de protones y neutrones; la masa de los electrones es despreciable y no se cuenta.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["calculo", "neutrones"]

respuesta: "neutrones"
tipo: completar
respuestas_validas: ["neutrones"]

enunciado: "El número másico es igual a la suma de protones más ___."

explicacion: |
  El número másico (A) se calcula sumando los protones (Z) y los neutrones (N).
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["simbolos", "teoria"]

respuesta: "Z"
tipo: mc
opciones_explicitas: ["Z", "A", "N", "M"]

enunciado: "¿Qué letra se utiliza convencionalmente para representar el número atómico?"

explicacion: |
  La letra "Z" representa el número atómico; "A" representa el número másico.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["simbolos", "teoria"]

respuesta: "A"
tipo: mc
opciones_explicitas: ["A", "Z", "N", "M"]

enunciado: "¿Qué letra se utiliza convencionalmente para representar el número másico?"

explicacion: |
  La letra "A" representa el número másico (protones + neutrones).
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["nucleos", "neutrones", "calculo"]

variables:
  protones: random(1, 30)
  neutrones: random(0, 20)
  masico: protones + neutrones

respuesta: neutrones
tipo: input
tolerancia_abs: 0

enunciado: "Un átomo tiene un número atómico (Z) de {protones} y un número másico (A) de {masico}. ¿Cuántos neutrones tiene?"

explicacion: |
  N = A - Z = {masico} - {protones} = {neutrones}.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["nucleos", "masa_atomica", "calculo"]

variables:
  protones: random(1, 30)
  neutrones: random(0, 20)
  masico: protones + neutrones

respuesta: masico
tipo: input
tolerancia_abs: 0

enunciado: "Un átomo tiene {protones} protones y {neutrones} neutrones. ¿Cuál es su número másico (A)?"

explicacion: |
  A = Z + N = {protones} + {neutrones} = {masico}.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["nucleos", "numero_atomico", "calculo"]

variables:
  protones: random(1, 30)
  neutrones: random(0, 20)
  masico: protones + neutrones

respuesta: protones
tipo: input
tolerancia_abs: 0

enunciado: "Un átomo tiene un número másico (A) de {masico} y contiene {neutrones} neutrones. ¿Cuál es su número atómico (Z)?"

explicacion: |
  Z = A - N = {masico} - {neutrones} = {protones}.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["electrones", "atomos_neutros"]

respuesta: verdadero
tipo: vf

enunciado: "En un átomo neutro, el número de electrones es igual al número atómico Z."

explicacion: |
  Correcto. En un átomo neutro, la carga de los protones se compensa exactamente con la de los electrones, así que Z = electrones.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "Z"
tipo: completar
respuestas_validas: ["Z", "el numero atomico"]

enunciado: "La fórmula para calcular el número de neutrones (N) es N = A - ___."

explicacion: |
  La fórmula es N = A - Z, donde A es el número másico y Z el número atómico (cantidad de protones).
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["notacion", "simbolo_quimico"]

respuesta: "Arriba a la izquierda del símbolo"
tipo: mc
opciones_explicitas: ["Arriba a la izquierda del símbolo", "Abajo a la izquierda del símbolo", "Arriba a la derecha del símbolo", "Abajo a la derecha del símbolo"]

enunciado: "En la notación isotópica ᴬ_Z X (A arriba, Z abajo, junto al símbolo del elemento), ¿en qué posición se ubica el número másico (A)?"

explicacion: |
  El número másico (A) se escribe como superíndice a la izquierda del símbolo; el número atómico (Z) va como subíndice, también a la izquierda.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["calculo", "protones", "neutrones"]

variables:
  Z: random(1, 20)
  N: random(0, 20)

respuesta: Z + N
tipo: input
tolerancia_abs: 0

enunciado: "Un átomo tiene {Z} protones y {N} neutrones. ¿Cuál es su número másico (A)?"

explicacion: |
  El número másico (A) es la suma de protones y neutrones: A = {Z} + {N} = {Z + N}.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["identidad", "numero_atomico"]

respuesta: verdadero
tipo: vf

enunciado: "Si un átomo cambia su número atómico (Z), ¿se convierte en un elemento químico distinto?"

explicacion: |
  Verdadero. El número atómico (Z) define la identidad del elemento; cambiar la cantidad de protones cambia de qué elemento se trata.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "avanzado"
  tags: ["isobaros", "masa"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es posible que dos átomos de elementos distintos tengan el mismo número másico (A) pero distinto número atómico (Z)?"

explicacion: |
  Verdadero. Esos átomos se llaman isóbaros: tienen la misma masa total pero son elementos diferentes (a diferencia de los isótopos, que son el mismo elemento con distinta masa).
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["notacion", "isotopos"]

respuesta: "masico"
tipo: completar
respuestas_validas: ["masico", "másico"]

enunciado: "En la notación abreviada, una expresión como 'Carbono-14' indica el nombre del elemento seguido de su número ___."

explicacion: |
  El número que acompaña al nombre del elemento en esta notación hace referencia al número másico (protones + neutrones).
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["atomos", "electrones", "protones"]

variables:
  protones: random(1, 30)

respuesta: protones
tipo: input
tolerancia_abs: 0

enunciado: "Dado un átomo neutro con {protones} protones, ¿cuántos electrones tiene?"

explicacion: |
  En un átomo neutro la carga total es cero, así que la cantidad de electrones es igual a la de protones.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["numero_atomico", "teoria"]

respuesta: "cantidad de neutrones"
tipo: mc
opciones_explicitas: ["identidad del elemento", "cantidad de protones", "cantidad de electrones (si es neutro)", "cantidad de neutrones"]

enunciado: "Dado sólo el número atómico Z de un elemento, ¿qué información NO se puede obtener directamente?"

explicacion: |
  Z define la identidad, los protones, y (si es neutro) los electrones. Para los neutrones hace falta además el número másico A, ya que N = A - Z.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["neutrones", "formula"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber cuántos neutrones tiene un átomo hace falta conocer tanto el número atómico (Z) como el número másico (A)."

explicacion: |
  Correcto. La relación es N = A - Z; sin ambos valores no se puede determinar la cantidad de neutrones.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["calculo", "neutrones"]

variables:
  z: 17
  a: 35

respuesta: a - z
tipo: completar
respuestas_validas: [18]

enunciado: "Si Z = {z} y A = {a}, el átomo tiene ___ neutrones."

explicacion: |
  El número de neutrones se calcula restando el número atómico al número másico: 35 - 17 = 18.
```

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "avanzado"
  tags: ["isotopos", "isobaros"]

respuesta: "mismo Z, distinto A"
tipo: mc
opciones_explicitas: ["mismo Z, distinto A", "distinto Z, mismo A", "mismo Z, mismo A", "distinto Z, distinto A"]

enunciado: "Dos isótopos del mismo elemento tienen..."

explicacion: |
  Los isótopos comparten el número atómico Z (son el mismo elemento) pero difieren en el número másico A (distinta cantidad de neutrones).
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
respuestas_validas: ["Gain"]

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
tipo: input
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

## Sección: petroleo-como-recurso-energetico (40 preguntas)

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["hidrocarburos", "composicion"]

variables:
  elemento1: "uno_de(['carbono', 'hidrogeno'])"
  elemento2: "uno_de(['carbono', 'hidrogeno'])"

respuesta: "hidrocarburos"
tipo: completar

enunciado: "El petróleo es una mezcla compleja compuesta principalmente por átomos de {elemento1} y {elemento2}. La denominación química general para estos compuestos es: ___"

explicacion: |
  El petróleo está formado por hidrocarburos, que son compuestos orgánicos formados esencialmente por carbono e hidrógeno.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["origen", "materia_organica"]

variables:
  origen: "uno_de(['plancton', 'minerales', 'metales'])"

respuesta: verdadero
tipo: vf

enunciado: "El petróleo se origina a partir de la acumulación y transformación de materia orgánica como {origen} y algas en mares antiguos."

explicacion: |
  El petróleo proviene de la descomposición de materia orgánica (plancton, algas) bajo altas presiones y temperaturas durante millones de años.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["refinamiento", "destilacion"]

variables:
  propiedad: "uno_de(['temperatura de ebullicion', 'densidad', 'pH'])"

respuesta: "temperatura de ebullicion"
tipo: completar

enunciado: "En la torre de refinamiento, la separación de los componentes del crudo se basa en la diferencia de su {propiedad}."

explicacion: |
  La destilación fraccionada separa los hidrocarburos según sus diferentes temperaturas de ebullición.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["renovable", "clasificacion"]

variables:
  recurso: "uno_de(['petroleo', 'energia solar', 'energia eolica'])"

respuesta: "no renovable"
tipo: completar

enunciado: "El {recurso} es considerado un recurso energético de tipo '___' porque su formación tarda millones de años."

explicacion: |
  A diferencia de las energías renovables, el petróleo no se regenera a escala humana, por lo que es no renovable.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["alcanos", "estructura"]

variables:
  estructura: "uno_de(['cadena lineal', 'anillo', 'cadena ramificada'])"

respuesta: "cadena lineal"
tipo: completar

enunciado: "Los alcanos presentes en el petróleo pueden tener estructura de {estructura} o ramificada, a diferencia de los cicloalcanos que forman anillos."

explicacion: |
  Los alcanos son hidrocarburos saturados que pueden presentarse como cadenas lineales o ramificadas.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["fracking", "extraccion"]

variables:
  yacimiento: "uno_de(['convencional', 'no convencional'])"

respuesta: "fracking"
tipo: completar

enunciado: "Para extraer petróleo de yacimientos {yacimiento} atrapados en rocas impermeables, se utiliza la técnica de ___."

explicacion: |
  El fracking (fracturamiento hidráulico) es necesario para liberar hidrocarburos de rocas impermeables en yacimientos no convencionales.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "avanzado"
  tags: ["aromaticos", "benceno"]

variables:
  compuesto: "uno_de(['benceno', 'metano', 'etano'])"

respuesta: "benceno"
tipo: completar

enunciado: "Un ejemplo clásico de hidrocarburo aromático encontrado en el petróleo es el {compuesto}, que posee una estructura de anillo con deslocalización electrónica."

explicacion: |
  El benceno es un hidrocarburo aromático clave presente en el crudo, distinto a los alcanos y cicloalcanos.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["argentina", "vaca_muerta"]

variables:
  provincia: "uno_de(['Neuquen', 'Buenos Aires', 'Cordoba'])"

respuesta: "Neuquen"
tipo: completar

enunciado: "La importante formación de petróleo no convencional y gas conocida como Vaca Muerta se encuentra en la provincia de {provincia}."

explicacion: |
  Vaca Muerta es una formación geológica en Neuquén, Argentina, rica en hidrocarburos no convencionales.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "avanzado"
  tags: ["alcanos", "saturacion"]

variables:
  tipo_hc: "uno_de(['alcanos', 'alquenos', 'alquinos'])"

respuesta: "alcanos"
tipo: completar

enunciado: "Los {tipo_hc} son hidrocarburos saturados, es decir, contienen solo enlaces simples entre átomos de carbono."

explicacion: |
  Los alcanos son los hidrocarburos más simples y saturados, con fórmula general CnH2n+2.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["quimica_aplicada", "fracking"]

variables:
  componente: "uno_de(['agua', 'arena', 'glicerina'])"

respuesta: "agua"
tipo: completar

enunciado: "El fracking consiste en inyectar {componente} a alta presión junto con aditivos químicos para crear grietas en la roca."

explicacion: |
  La mezcla principal para la fracturación hidráulica es agua a alta presión, arena (proppant) y químicos.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["geopolitica", "importancia"]

variables:
  pais: "uno_de(['Arabia Saudita', 'Argentina', 'Uruguay'])"

respuesta: "Arabia Saudita"
tipo: completar

enunciado: "Entre los países con las mayores reservas probadas de petróleo se encuentra {pais}."

explicacion: |
  Arabia Saudita es uno de los principales productores y poseedores de reservas de petróleo mundial.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["origen", "biologia"]

variables:
  organismo: "uno_de(['plancton', 'dinosaurios', 'arboles'])"

respuesta: "plancton"
tipo: completar

enunciado: "La materia orgánica que dio origen al petróleo incluía principalmente {organismo} y algas de mares antiguos."

explicacion: |
  El plancton marino es la fuente principal de la materia orgánica que se transformó en petróleo.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "avanzado"
  tags: ["quimica_organica", "benceno"]

variables:
  atomo_c: "random(6,6)"
  atomo_h: "random(6,6)"

respuesta: "C6H6"
tipo: input

enunciado: "La fórmula molecular del benceno, un hidrocarburo aromático clave, es {atomo_c} carbonos y {atomo_h} hidrógenos. Escribela como C6H6:"

explicacion: |
  El benceno tiene la fórmula C6H6, con un anillo hexagonal de carbonos e hidrógenos unidos.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["geopolitica", "paises"]

variables:
  pais: "uno_de(['Rusia', 'España', 'Chile'])"

respuesta: "Rusia"
tipo: completar

enunciado: "Además de Arabia Saudita y Estados Unidos, {pais} posee una de las mayores reservas probadas de petróleo."

explicacion: |
  Rusia es uno de los tres principales poseedores de reservas de petróleo a nivel mundial.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["hidrocarburos", "composicion"]

variables:
  elementos: uno_de(["carbono e hidrogeno", "carbono y oxigeno", "hidrogeno y nitrogeno", "azufre y oxigeno"])

respuesta: "carbono e hidrogeno"
tipo: mc
opciones_explicitas: ["carbono e hidrogeno", "carbono y oxigeno", "hidrogeno y nitrogeno", "azufre y oxigeno"]

enunciado: "El petróleo es una mezcla compleja de hidrocarburos. ¿Cuáles son los dos elementos químicos principales que lo componen?"

explicacion: |
  Los hidrocarburos, por definición, están formados principalmente por átomos de carbono e hidrógeno. El petróleo es una mezcla de este tipo de compuestos.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["origen", "materia_organica"]

variables:
  origen: uno_de(["plancton y algas", "restos de dinosaurios", "minerales volcánicos", "raíces de árboles gigantes"])

respuesta: "plancton y algas"
tipo: mc
opciones_explicitas: ["plancton y algas", "restos de dinosaurios", "minerales volcánicos", "raíces de árboles gigantes"]

enunciado: "El petróleo se origina a partir de la acumulación y transformación de materia orgánica. ¿Qué organismos fueron los principales contribuyentes?"

explicacion: |
  El petróleo proviene de la acumulación de plancton y algas marinos que vivieron en mares antiguos hace millones de años, no de dinosaurios o vegetación terrestre.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["refinamiento", "destilacion"]

variables:
  propiedad: "temperatura de ebullicion"

respuesta: "temperatura de ebullicion"
tipo: input

enunciado: "El proceso clave para separar los componentes del crudo es la destilación fraccionada. ¿Qué propiedad física de los hidrocarburos aprovecha este proceso para separarlos?"

explicacion: |
  La destilación fraccionada separa los hidrocarburos aprovechando sus diferentes temperaturas de ebullicion. Al calentar el crudo, cada fracción se vaporiza a una temperatura distinta.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["argentina", "yacimientos", "vaca_muerta"]

variables:
  provincia: "neuquen"

respuesta: "neuquen"
tipo: input

enunciado: "En Argentina, ¿en qué provincia se encuentra la formación de Vaca Muerta, una de las reservas de petróleo no convencional (shale oil) y gas más importantes del mundo?"

explicacion: |
  La formación de Vaca Muerta se ubica en la provincia de Neuquén. Su explotación ha transformado la matriz energética nacional en las últimas décadas.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["fracking", "explotacion", "no_convencional"]

variables:
  tecnica: "fracturamiento_hidraulico"

respuesta: "fracturamiento_hidraulico"
tipo: input

enunciado: "Para extraer petróleo atrapado en rocas impermeables (yacimientos no convencionales), se utiliza una técnica que inyecta agua a alta presión con aditivos químicos. ¿Cómo se llama esta técnica?"

explicacion: |
  La técnica se llama fracturamiento hidráulico (fracking). Consiste en crear grietas en la roca para liberar el hidrocarburo atrapado.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["sostenibilidad", "clasificacion"]

variables:
  clasificacion: "falso"

respuesta: falso
tipo: vf

enunciado: "El petróleo es considerado un recurso energético renovable porque se regenera rápidamente en la naturaleza."

explicacion: |
  Falso. El petróleo es un recurso no renovable porque su formación toma millones de años, a un ritmo mucho más lento que su consumo actual.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["reservas", "definicion"]

variables:
  concepto: "reservas"

respuesta: "reservas"
tipo: input

enunciado: "¿Qué término se utiliza para definir las cantidades de petróleo que pueden extraerse económicamente con la tecnología actual?"

explicacion: |
  Se utilizan las "reservas" probadas. Este concepto depende tanto de la existencia física del recurso como de la viabilidad económica y tecnológica de su extracción.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["composicion", "aromaticos"]

variables:
  ejemplo: "benceno"

respuesta: "benceno"
tipo: input

enunciado: "Entre los componentes químicos del petróleo se encuentran los hidrocarburos aromáticos. ¿Cuál es un ejemplo clásico de este tipo de compuesto?"

explicacion: |
  El benceno es un ejemplo clásico de hidrocarburo aromático, caracterizado por tener un anillo de átomos de carbono con enlaces dobles conjugados.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["uso", "transporte"]

variables:
  razon: "falso"

respuesta: falso
tipo: vf

enunciado: "El petróleo ha sido la columna vertebral del transporte mundial principalmente porque es una energía renovable y limpia."

explicacion: |
  Falso. Su importancia en el transporte se debe a su alta densidad energética y facilidad de almacenamiento y transporte, no a ser renovable o limpio.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["clasificacion", "calidad"]

variables:
  factor: "falso"

respuesta: falso
tipo: vf

enunciado: "La proporción de alcanos, cicloalcanos y aromáticos determina si el petróleo es ligero o pesado, pero no afecta su calidad para ser refinado."

explicacion: |
  Falso. La proporción de estos componentes determina tanto la densidad (ligero/pesado) como la calidad y facilidad para ser refinado en productos útiles.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["explotacion", "convencional"]

variables:
  mecanismo: "presion_interna"

respuesta: "presion_interna"
tipo: input

enunciado: "En los yacimientos convencionales, el petróleo suele fluir naturalmente hacia los pozos. ¿Qué fuerza principal impulsa este flujo sin necesidad de técnicas complejas de extracción?"

explicacion: |
  La presión interna del yacimiento es la fuerza principal. Esta presión natural empuja el crudo hacia la superficie cuando se perfora el pozo.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "avanzado"
  tags: ["geopolitica", "reservas"]

variables:
  pais: "arabia_saudita"

respuesta: "arabia_saudita"
tipo: input

enunciado: "¿Qué país posee una de las mayores reservas probadas de petróleo a nivel mundial, siendo un actor clave en la geopolítica energética global?"

explicacion: |
  Arabia Saudita es uno de los países con las mayores reservas probadas de petróleo, lo que le otorga una gran influencia en el mercado energético mundial.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["propiedades", "energia"]

variables:
  ventaja: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de muchas energías renovables intermitentes, el petróleo puede almacenarse y transportarse con relativa facilidad."

explicacion: |
  Verdadero. El petróleo es un líquido denso en energía que se puede almacenar en tanques y transportar por oleoductos o barcos cisterna de manera eficiente.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["composicion", "cicloalcanos"]

variables:
  estructura: "anillos"

respuesta: "anillos"
tipo: input

enunciado: "Los cicloalcanos son uno de los tipos de hidrocarburos presentes en el petróleo. ¿Cómo se describen sus estructuras químicas?"

explicacion: |
  Los cicloalcanos se describen como hidrocarburos cuyas cadenas de carbono forman anillos cerrados.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["shale", "no_convencional"]

variables:
  traduccion: "petroleo_de_esquistos"

respuesta: "petroleo_de_esquistos"
tipo: input

enunciado: "El término inglés 'shale oil' se refiere al petróleo extraído de rocas impermeables. ¿Cómo se traduce comúnmente al español en el contexto energético?"

explicacion: |
  Se traduce como "petróleo de esquistos". Es un tipo de petróleo no convencional que requiere técnicas como el fracking para su extracción.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["propiedades", "energia"]

variables:
  caracteristica: "densa"

respuesta: "densa"
tipo: input

enunciado: "El petróleo es una fuente de energía ______. ¿Qué palabra describe su capacidad de almacenar mucha energía en un volumen pequeño?"

explicacion: |
  El petróleo es una fuente de energía densa. Esto significa que libera una gran cantidad de energía por unidad de masa o volumen al quemarse.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["fracking", "quimica"]

variables:
  componente: "agua"

respuesta: "agua"
tipo: input

enunciado: "El fracturamiento hidráulico consiste en inyectar ______ a alta presión con aditivos químicos para crear grietas en la roca. ¿Cuál es el líquido principal utilizado?"

explicacion: |
  El líquido principal es el agua. Se mezcla con arena y aditivos químicos para mantener las grietas abiertas y facilitar el flujo del hidrocarburo.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["reservas", "distribucion"]

variables:
  distribucion: "falso"

respuesta: falso
tipo: vf

enunciado: "Las reservas de petróleo están distribuidas uniformemente en todo el planeta."

explicacion: |
  Falso. Las reservas no están distribuidas uniformemente; se concentran en regiones específicas como Medio Oriente, Rusia y América del Sur.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["refinamiento", "equipos"]

variables:
  equipo: "torre"

respuesta: "torre"
tipo: input

enunciado: "Durante la refinación, el crudo se calienta en una ______ de destilación. ¿Cómo se llama el equipo vertical principal donde ocurre la separación por fracciones?"

explicacion: |
  Se llama torre de destilación. Es un equipo vertical donde los vapores se condensan a diferentes alturas según su temperatura de ebullición.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["origen", "tiempo_geologico"]

variables:
  periodo: "millones_de_anos"

respuesta: "millones_de_anos"
tipo: input

enunciado: "La materia orgánica que originó el petróleo vivió en mares antiguos hace ______. ¿Qué escala de tiempo describe la formación del petróleo?"

explicacion: |
  Hace millones de años. La transformación de la materia orgánica en petróleo es un proceso geológico extremadamente lento.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["fracking", "fisica"]

variables:
  condicion: "alta"

respuesta: "alta"
tipo: input

enunciado: "Para fracturar la roca impermeable en yacimientos no convencionales, el agua se inyecta a presión ______. ¿Qué adjetivo describe la magnitud de la presión necesaria?"

explicacion: |
  La presión debe ser alta. Solo con presiones muy elevadas se pueden generar las grietas necesarias en la roca dura.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["definicion", "quimica"]

variables:
  definicion: "hidrocarburos"

respuesta: "hidrocarburos"
tipo: input

enunciado: "El petróleo es una mezcla compleja de ______. ¿Cómo se llaman los compuestos químicos formados por carbono e hidrógeno?"

explicacion: |
  Se llaman hidrocarburos. Son los compuestos orgánicos básicos que constituyen la mayor parte del petróleo crudo.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["propiedades_fisicas"]

variables:
  estado: "viscoso"

respuesta: "viscoso"
tipo: input

enunciado: "El petróleo es un líquido ______ y oscuro que se encuentra en el subsuelo. ¿Qué palabra describe su resistencia a fluir?"

explicacion: |
  El petróleo es viscoso. Esta propiedad física varía según la composición, pero generalmente es más espeso que el agua.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["uso", "industria"]

variables:
  sector: "quimica"

respuesta: "quimica"
tipo: input

enunciado: "El petróleo no solo es fuente de energía, sino también la columna vertebral de la industria ______. ¿Qué sector industrial depende del petróleo como materia prima?"

explicacion: |
  La industria química. El petróleo es la materia prima para producir plásticos, fertilizantes, medicamentos y muchos otros productos.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["refinamiento", "proceso"]

variables:
  principio: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La destilación fraccionada separa los componentes del petróleo calentándolo y aprovechando que cada hidrocarburo se vaporiza a una temperatura distinta."

explicacion: |
  Verdadero. Este es el principio fundamental de la destilación fraccionada: la separación se basa en las diferentes temperaturas de ebullición.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["clasificacion", "sostenibilidad"]

variables:
  clasificacion: "no_renovable"

respuesta: "no_renovable"
tipo: input

enunciado: "El petróleo es un recurso ______. ¿Qué término indica que su tasa de consumo es mucho mayor que su tasa de formación natural?"

explicacion: |
  Es un recurso no renovable. Esto significa que una vez agotado, no puede ser reemplazado en un plazo de tiempo humano útil.
```

## Sección: ph-poh (23 preguntas)

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

enunciado: "¿Qué mide el pH de una solución?"
tipo: mc
opciones_explicitas:
  - "Qué tan ácida o básica es, a partir de la concentración de iones hidrógeno (H+)"
  - "La temperatura de la solución"
  - "Cuánta sal tiene disuelta la solución"
respuesta: "Qué tan ácida o básica es, a partir de la concentración de iones hidrógeno (H+)"

explicacion: |
  Es una medida de acidez/basicidad, no de temperatura ni de salinidad.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El pH se calcula como pH = -log₁₀[H⁺], el logaritmo en base 10 de la concentración de H⁺, con el signo cambiado."

explicacion: |
  Es la fórmula que conecta el pH con la concentración real de iones
  hidrógeno.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala de pH va de 0 a 14."

explicacion: |
  Es el rango habitual usado para clasificar soluciones acuosas.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una solución con pH menor a 7 es ácida."

explicacion: |
  A menor pH, mayor concentración de H⁺, más ácida.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una solución con pH igual a 7 es neutra, como el agua pura a 25°C."

explicacion: |
  Es el punto medio de la escala de 0 a 14.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una solución con pH mayor a 7 es básica (o alcalina)."

explicacion: |
  A mayor pH, menor concentración de H⁺.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "calculo"]

variables:
  exponente: random(1, 6)
  concentracion_h: 1 / 10 ^ exponente

respuesta: -log10(concentracion_h)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una solución tiene una concentración de H⁺ de {concentracion_h} mol/L. ¿Cuál es su pH?"

pasos:
  - "pH = -log₁₀({concentracion_h})"

explicacion: |
  Se aplica la fórmula del pH directamente sobre la concentración dada.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

enunciado: "¿Qué mide el pOH de una solución?"
tipo: mc
opciones_explicitas:
  - "La concentración de iones hidroxilo (OH-), con la misma lógica logarítmica que el pH"
  - "Lo mismo que el pH, con otro nombre"
  - "La cantidad de oxígeno disuelto"
respuesta: "La concentración de iones hidroxilo (OH-), con la misma lógica logarítmica que el pH"

explicacion: |
  Es la contraparte del pH, para el otro ion relevante del agua.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El pOH se calcula como pOH = -log₁₀[OH⁻]."

explicacion: |
  Misma estructura que la fórmula del pH, aplicada al ion hidroxilo.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A 25°C, el pH y el pOH de cualquier solución acuosa siempre suman 14."

explicacion: |
  Conociendo uno de los dos, el otro se obtiene directamente sin
  necesitar la concentración de iones.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "calculo"]

variables:
  ph: random(1, 13)

respuesta: 14 - ph
tipo: input
tolerancia_abs: 0

enunciado: "Una solución tiene un pH de {ph}. ¿Cuál es su pOH?"

explicacion: |
  Se resta el pH de 14.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "calculo"]

variables:
  poh: random(1, 13)

respuesta: 14 - poh
tipo: input
tolerancia_abs: 0

enunciado: "Una solución tiene un pOH de {poh}. ¿Cuál es su pH?"

explicacion: |
  Se resta el pOH de 14.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada unidad de diferencia en el pH representa un cambio de 10 veces en la concentración de H⁺."

explicacion: |
  Es consecuencia directa de que la escala de pH es logarítmica en base
  10.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "avanzado"
  tags: ["ph", "calculo"]

enunciado: "Una solución de pH 3 comparada con una de pH 5 (dos unidades más de pH), ¿cuántas veces más concentración de H⁺ tiene la de pH 3?"
tipo: mc
opciones_explicitas:
  - "100 veces más"
  - "2 veces más"
  - "10 veces más"
respuesta: "100 veces más"

explicacion: |
  Dos unidades de diferencia son 10 × 10 = 100 veces, no una simple
  resta.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "avanzado"
  tags: ["ph", "calculo"]

variables:
  ph: random(1, 8)

respuesta: 1 / 10 ^ ph
tipo: input
tolerancia_abs: 0.001

enunciado: "Una solución tiene un pH de {ph}. ¿Cuál es su concentración de H⁺, en mol/L?"

pasos:
  - "[H⁺] = 10^(-{ph})"

explicacion: |
  Se despeja la concentración invirtiendo la fórmula del pH.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El agua pura tiene un pH cercano a 7, a 25°C — el punto neutro de la escala."

explicacion: |
  Es el ejemplo de referencia más habitual para \"neutro\".
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La relación entre pH y concentración de H⁺ es inversa: a menor pH, mayor concentración de H⁺ (más ácido)."

explicacion: |
  Es por el signo negativo en la fórmula del pH — un punto que suele
  confundir si no se lo tiene en cuenta.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "comparacion"]

variables:
  ph_a: random(1, 4)
  ph_b: random(8, 13)

respuesta: (ph_a < ph_b)
tipo: vf

enunciado: "Una solución con pH {ph_a} y otra con pH {ph_b}: ¿la primera es más ácida que la segunda?"

explicacion: |
  Cuanto menor el número de pH, más ácida es la solución.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "orden"]

tipo: ordenar
enunciado: "Ordená estas sustancias de menor a mayor pH (de más ácida a más básica)."
opciones_explicitas:
  - "Agua pura (pH 7)"
  - "Lejía (pH 13)"
  - "Jugo de limón (pH 2)"
respuesta_orden: ["Jugo de limón (pH 2)", "Agua pura (pH 7)", "Lejía (pH 13)"]

explicacion: |
  A menor pH, más ácida; a mayor pH, más básica.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "verificacion"]

variables:
  ph: random(1, 13)
  correcto: 14 - ph
  error: uno_de([0, 0, 0, 2, -2])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.5)
tipo: vf

enunciado: "¿Está bien calculado esto? pH de {ph}, pOH informado: {mostrado}."

explicacion: |
  Se vuelve a calcular 14 - pH y se compara con el valor informado.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph"]

variables:
  ph: random(1, 13)
  poh: 14 - ph

tipo: completar
enunciado: "Una solución tiene pH {ph}. Completá: ___ (pOH) = 14 - {ph}."
respuestas_validas:
  - poh

explicacion: |
  Se resta el pH de 14 para obtener el pOH.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "intermedio"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala de pH es logarítmica, no lineal: \"bajar 2 puntos de pH\" es un cambio de 100 veces en la concentración de H⁺, no un cambio chico."

explicacion: |
  Es el mismo tipo de escala logarítmica que aparece en decibeles y en
  la escala Richter.
```

```
metadata:
  materia: "quimica"
  tema: "ph_poh"
  nivel: "basico"
  tags: ["ph", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El pH mide la acidez con una escala logarítmica de 0 a 14, el pOH hace lo mismo con el ion hidroxilo, y ambos suman siempre 14 a 25°C."

explicacion: |
  Es la idea central de todo el tema.
```
