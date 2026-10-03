# Examen jefe — [PENDIENTE #737]

> Logro #737. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: estructura-del-nucleo-atomico (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "neutrones"]

respuesta: "protones"
tipo: mc
opciones_explicitas: ["protones", "electrones", "neutrones", "fotones"]

enunciado: "Las partículas con carga eléctrica positiva que se encuentran en el núcleo de un átomo son los ___."

explicacion: |
  El núcleo atómico está compuesto por protones (carga positiva) y neutrones (carga neutra). Los electrones orbitan alrededor del núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleones", "definicion"]

respuesta: verdadero
tipo: vf
enunciado: "A las partículas que forman el núcleo (protones y neutrones) se las denomina colectivamente como nucleones."

explicacion: |
  Correcto. El término 'nucleón' se utiliza para referirse tanto a protones como a neutrones cuando se habla de su comportamiento en el núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_fuerte", "interaccion"]

respuesta: "fuerza_fuerte"
tipo: completar
respuestas_validas:
  - "fuerza_fuerte"

enunciado: "La interacción que mantiene unidos a los protones y neutrones en el núcleo, venciendo la repulsión electromagnética entre protones, es la ___."

explicacion: |
  La fuerza nuclear fuerte es una interacción de corto alcance que actúa entre nucleones y es la responsable de la estabilidad del núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["carga", "electromagnetismo"]

respuesta: falso
tipo: vf
enunciado: "Debido a que los protones tienen carga positiva, la fuerza electromagnética entre ellos es de atracción, lo que ayuda a mantener unido el núcleo."

explicacion: |
  Falso. La fuerza electromagnética entre protones es de repulsión. Es la fuerza nuclear fuerte la que contrarresta esta repulsión para mantener el núcleo unido.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["particulas", "orden"]

respuesta_orden: ["protones", "neutrones"]
tipo: ordenar
opciones_explicitas: ["protones", "neutrones"]

enunciado: "Ordena las siguientes partículas según su presencia en el núcleo atómico, de mayor a menor relevancia en la determinación de la identidad del elemento (número atómico):"

pasos:
  - "El número atómico (Z) define el elemento y está determinado por los protones."
  - "El número de neutrones (N) determina los isótopos pero no la identidad química."

explicacion: |
  El orden correcto para definir la identidad del átomo es primero los protones (número atómico) y luego los neutrones (que definen el isótopo).
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "neutrones"]

respuesta: "protones"
tipo: mc
opciones_explicitas: ["protones", "neutrones", "electrones", "fotones"]

enunciado: "La carga eléctrica positiva que se encuentra en el núcleo de un átomo está compuesta por los ___."

explicacion: |
  El núcleo atómico está compuesto por nucleones: protones (carga positiva) y neutrones (carga neutra). Los electrones orbitan alrededor del núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["masa_atomica", "nucleones"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Litio-7", 3, 4], ["Carbono-14", 6, 8]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["Litio-7", "Carbono-14", "Helio-4", "Oxigeno-16"]

enunciado: "Si un átomo de {datos[escenario_idx][0]} tiene {datos[escenario_idx][1]} protones y {datos[escenario_idx][2]} neutrones, su número de masa (A) es igual a la suma de ambos. ¿Cuál es el nombre del isótopo?"

pasos:
  - "Identificar el número de protones (Z)."
  - "Identificar el número de neutrones (N)."
  - "Sumar Z + N para obtener la masa A."

explicacion: |
  La masa atómica (A) se calcula sumando el número de protones (Z) y el número de neutrones (N). 
  En este caso: {datos[escenario_idx][1]} + {datos[escenario_idx][2]} = {datos[escenario_idx][0]}.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear", "interacciones"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la fuerza nuclear fuerte la responsable de mantener unidos a los protones y neutrones en el núcleo, venciendo la repulsión electromagnética entre protones?"

explicacion: |
  Verdadero. La fuerza nuclear fuerte es una interacción de corto alcance que actúa entre nucleones, permitiendo que los protones (que se repelen por su carga) permanezcan unidos en el núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["neutrones", "calculo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[12, 6], [23, 11]]

respuesta: datos[escenario_idx][0] - datos[escenario_idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo tiene un número de masa (A) de {datos[escenario_idx][0]} y un número atómico (Z) de {datos[escenario_idx][1]}. El número de neutrones es ___."

pasos:
  - "Restar el número atómico (Z) del número de masa (A)."
  - "N = A - Z."

explicacion: |
  Para hallar los neutrones, restamos el número de protones (Z) de la masa total (A).
  Cálculo: {datos[escenario_idx][0]} - {datos[escenario_idx][1]} = {datos[escenario_idx][0] - datos[escenario_idx][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "avanzado"
  tags: ["ordenar", "nucleones"]

respuesta_orden: ["Protones", "Neutrones", "Fuerza Nuclear Fuerte"]
tipo: ordenar
opciones_explicitas: ["Protones", "Neutrones", "Fuerza Nuclear Fuerte"]

enunciado: "Ordene los elementos según el proceso lógico de formación y estabilidad de un núcleo atómico: primero los componentes de carga, luego los componentes neutros y finalmente la interacción que los mantiene unidos."

explicacion: |
  1. Los protones definen la identidad del elemento.
  2. Los neutrones aportan estabilidad y masa.
  3. La fuerza nuclear fuerte actúa para mantener a ambos unidos en el núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "identidad"]

respuesta: "protones"
tipo: completar
respuestas_validas:
  - "protones"

enunciado: "Un átomo es identificado químicamente por su número atómico, el cual corresponde a la cantidad de ___ en su núcleo."

explicacion: |
  El número atómico (Z) indica la cantidad de protones. Cambiar el número de protones cambia el elemento químico, mientras que cambiar el número de neutrones crea un isótopo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear", "alcance", "interacciones"]

respuesta: falso
tipo: vf
enunciado: "¿Es la fuerza nuclear fuerte una interacción de largo alcance, similar a la fuerza electromagnética o la gravedad?"

explicacion: |
  Falso. La fuerza nuclear fuerte es de muy corto alcance (actúa solo a distancias de aproximadamente 1-3 femtómetros). Si fuera de largo alcance, todo el universo colapsaría en un núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["isótopos", "neutrones"]

respuesta: "7"
tipo: mc
opciones_explicitas: ["6", "7", "8", "9"]

enunciado: "Si tenemos un átomo de Carbono-12 (6 protones y 6 neutrones) y queremos formar un isótopo con el mismo número atómico pero con 7 neutrones, ¿cuántos neutrones tendrá el nuevo isótopo?"

explicacion: |
  Los isótopos tienen el mismo número de protones pero diferente número de neutrones. En este caso, el Carbono-13 tiene 7 neutrones.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "avanzado"
  tags: ["estabilidad", "fuerza_electromagnetica", "fuerza_nuclear"]

respuesta: "fuerza_nuclear_fuerte"
tipo: completar
respuestas_validas:
  - "fuerza_nuclear_fuerte"

enunciado: "En un núcleo con muchos protones, existe una tensión constante entre la repulsión electromagnética de los protones y la ___ que mantiene unido al núcleo."

explicacion: |
  La fuerza nuclear fuerte es la que contrarresta la repulsión electrostática entre protones cargados positivamente, permitiendo la cohesión del núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleones", "particulas"]

respuesta: "electrones"
tipo: mc

opciones_explicitas: ["protones", "neutrones", "electrones"]

enunciado: "¿Cuál de las siguientes partículas NO es un nucleón (no forma parte del núcleo atómico)?"

explicacion: |
  Los nucleones son las partículas que componen el núcleo (protones y neutrones). Los electrones orbitan alrededor del núcleo en la corteza atómica.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "neutrones"]

respuesta: "positivo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "neutro", "variable"]

enunciado: "A diferencia de los neutrones, que no poseen carga eléctrica, los protones dentro del núcleo tienen una carga de signo ___."

explicacion: |
  El núcleo atómico está compuesto por protones (carga positiva) y neutrones (carga neutra). La interacción entre protones es de repulsión electrostática, la cual es contrarrestada por la fuerza nuclear fuerte.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear_fuerte", "alcance"]

respuesta: "corto"
tipo: completar
respuestas_validas:
  - "corto"

enunciado: "La fuerza nuclear fuerte es una interacción de ___ alcance, lo que la distingue de la fuerza electromagnética que actúa a distancias mayores."

explicacion: |
  La fuerza nuclear fuerte es extremadamente poderosa pero solo actúa a distancias muy cortas (aproximadamente $10^{-15}$ metros). Si los nucleones se separan más allá de ese rango, la fuerza cae drásticamente.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["isótopos", "nucleones"]

variables:
  escenario: uno_de([["6 protones", "6 neutrones", "12"], ["17 protones", "8 neutrones", "25"], ["8 protones", "8 neutrones", "16"]])

tipo: completar
respuesta: escenario[2]
respuestas_validas:
  - "12"
  - "25"
  - "16"

enunciado: "Un átomo tiene {escenario[0]} y {escenario[1]}. El número de nucleones totales es ___."

pasos:
  - "Identificar el número de protones."
  - "Identificar el número de neutrones."
  - "Sumar protones + neutrones para obtener el número de masa (A)."

explicacion: |
  El número de nucleones (número de masa A) es la suma de protones (Z) y neutrones (N).
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "avanzado"
  tags: ["estabilidad", "fuerza_nuclear"]

respuesta: "fuerza_nuclear_fuerte"
tipo: mc
opciones_explicitas: ["fuerza_electromagnetica", "fuerza_nuclear_fuerte", "gravedad", "fuerza_debil"]

enunciado: "Mientras que la fuerza electromagnética tiende a separar a los protones debido a su repulsión, ¿qué fuerza es la responsable de mantener unido el núcleo atómico?"

explicacion: |
  La fuerza nuclear fuerte actúa como el "pegamento" que mantiene unidos a los protones y neutrones, venciendo la repulsión eléctrica entre los protones.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleones", "orden"]

respuesta_orden: ["protones", "neutrones"]
tipo: ordenar
opciones_explicitas: ["protones", "neutrones"]

enunciado: "Ordena los siguientes componentes según su ubicación: primero los que definen la identidad del elemento y luego los que aportan masa pero no carga (en un núcleo de hidrógeno pesado o deuterio)."

explicacion: |
  En el orden solicitado, los protones definen el número atómico (Z) y los neutrones son los acompañantes que no tienen carga. Los electrones se encuentran fuera del núcleo.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "neutrones"]

variables:
  datos: [["Carbono-14", 6, 8], ["Oxigeno-18", 8, 10], ["Uranio-238", 92, 146]]
  idx: uno_de([0, 1, 2])
  dato: datos[idx]

enunciado: "Un científico analiza una muestra de {dato[0]}. Sabiendo que este isótopo tiene {dato[1]} protones, ¿cuántos neutrones posee en su núcleo?"

respuestas_validas:
  - dato[2]
respuesta: dato[2]
tipo: completar
tolerancia_abs: 0

explicacion: |
  El número de neutrones se calcula restando el número atómico (protones) de la masa atómica. 
  En el caso de {dato[0]}, tenemos {dato[1]} protones y {dato[2]} neutrones.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["carga", "electrones", "protones"]

variables:
  datos: [["un átomo neutro de Helio", 2, 2, "neutro"], ["un ion de Litio con 3 protones y 2 electrones", 3, 2, "positivo"], ["un ion de Magnesio con 12 protones y 10 electrones", 12, 10, "positivo"]]
  idx: uno_de([0, 1, 2])
  dato: datos[idx]

respuesta: dato[3]
tipo: mc
opciones_explicitas: ["positivo", "negativo", "neutro"]

enunciado: "Considerando {dato[0]}, si el núcleo tiene {dato[1]} protones y {dato[2]} electrones, la carga eléctrica neta del átomo es ___."

explicacion: |
  La carga total depende de la diferencia entre protones (positivos) y electrones (negativos). 
  En el caso de {dato[0]}, la carga es {dato[3]} debido a la diferencia de cargas.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear_fuerte", "estabilidad", "protones"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la fuerza nuclear fuerte la responsable de mantener unidos a los protones dentro del núcleo, venciendo la repulsión electromagnética entre ellos?"

explicacion: |
  Verdadero. La fuerza nuclear fuerte es una interacción de corto alcance que actúa entre nucleones (protones y neutrones) y es mucho más intensa que la repulsión eléctrica a distancias nucleares.
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["particulas", "nucleones", "neutrones"]

variables:
  datos: [["un núcleo con 11 protones y 12 neutrones", "Sodio-23"], ["un núcleo con 1 proton y 0 neutrones", "Hidrógeno-1"], ["un núcleo con 1 proton y 1 neutrón", "Deuterio"]]
  idx: uno_de([0, 1, 2])
  dato: datos[idx]

respuesta: dato[1]
tipo: completar
respuestas_validas:
  - "Sodio-23"
  - "Hidrógeno-1"
  - "Deuterio"

enunciado: "Un detector de partículas identifica un núcleo con {dato[0]}. El nombre de este isótopo es ___."

explicacion: |
  El nombre se determina por el número de protones (número atómico) y la suma de protones más neutrones (masa atómica).
```

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["particulas", "masa", "ordenar"]

opciones_explicitas: ["Protones", "Neutrones", "Electrones"]
respuesta_orden: ["Protones", "Neutrones", "Electrones"]
tipo: ordenar

enunciado: "Ordena las siguientes partículas según su masa aproximada, de mayor a menor (considerando que protones y neutrones tienen masas similares y el electrón es mucho más ligero):"

explicacion: |
  Los protones y neutrones tienen masas de aproximadamente 1 u, mientras que los electrones tienen una masa de aproximadamente 1/1836 u.
```

## Sección: estatica/equilibrio-de-cuerpo-rigido (24 preguntas)

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué dos condiciones tienen que cumplirse A LA VEZ para que un cuerpo rígido esté en equilibrio completo?"
tipo: mc
opciones_explicitas:
  - "Fuerza neta cero (ΣF=0) Y momento neto cero (ΣM=0)"
  - "Sólo fuerza neta cero"
  - "Sólo momento neto cero"
respuesta: "Fuerza neta cero (ΣF=0) Y momento neto cero (ΣM=0)"

explicacion: |
  Ninguna de las dos alcanza sola — un cuerpo puede no acelerar pero
  seguir girando, o no girar pero seguir acelerando.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "Si la fuerza neta sobre un cuerpo es cero, ese cuerpo está necesariamente en equilibrio completo (sin ningún tipo de aceleración)."

explicacion: |
  Puede tener momento neto distinto de cero y estar girando cada vez
  más rápido (aceleración angular), aunque no se desplace.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "Si el momento neto sobre un cuerpo (respecto de su centro de gravedad) es cero, ese cuerpo está necesariamente en equilibrio completo."

explicacion: |
  Puede tener fuerza neta distinta de cero y estar acelerando en línea
  recta, aunque no esté girando.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica", "aplicacion"]

enunciado: "En una balanza (sube y baja) en equilibrio, ¿qué condición es la que determina si está balanceada?"
tipo: mc
opciones_explicitas:
  - "El momento neto respecto del punto de apoyo es cero"
  - "El peso total de ambos lados es cero"
  - "La velocidad de ambos lados es la misma"
respuesta: "El momento neto respecto del punto de apoyo es cero"

explicacion: |
  Los momentos de los dos lados (peso × distancia al apoyo) se
  cancelan.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(10, 40)
  d1: random_float(0.5, 2, 2)
  m2: random(10, 40)

respuesta: redondear(m1 * d1 / m2, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "En una balanza, una masa de {m1} kg está a {d1} m del punto de apoyo. ¿A qué distancia del apoyo hay que poner una masa de {m2} kg, del otro lado, para que quede en equilibrio?"

pasos:
  - "m₁×d₁ = m₂×d₂  →  d₂ = m₁×d₁ / m₂ = {m1}×{d1} / {m2} = {redondear(m1 * d1 / m2, 2)} m"

explicacion: |
  El momento de un lado tiene que igualar al del otro lado.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(10, 40)
  d1: random_float(0.5, 2, 2)
  d2: random_float(0.5, 2, 2)

respuesta: redondear(m1 * d1 / d2, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "kg"

enunciado: "En una balanza, una masa de {m1} kg está a {d1} m del punto de apoyo. ¿Qué masa hay que poner a {d2} m del apoyo, del otro lado, para que quede en equilibrio?"

pasos:
  - "m₁×d₁ = m₂×d₂  →  m₂ = m₁×d₁ / d₂ = {m1}×{d1} / {d2} = {redondear(m1 * d1 / d2, 2)} kg"

explicacion: |
  Es el mismo despeje que la pregunta anterior, ahora para la masa en
  vez de la distancia.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "La condición ΣM=0 vale para el momento calculado respecto de CUALQUIER punto — no tiene que ser necesariamente el centro de gravedad."

explicacion: |
  Si un cuerpo está en equilibrio, el momento neto es cero respecto de
  cualquier punto que se elija como referencia.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "¿Por qué conviene elegir como punto de referencia, al plantear ΣM=0, un punto donde actúa una fuerza desconocida?"
tipo: mc
opciones_explicitas:
  - "Porque el brazo de palanca de esa fuerza respecto de ese punto es cero, así que desaparece de la ecuación y queda una sola incógnita"
  - "Porque así la fuerza desconocida se hace más grande"
  - "No hay ninguna ventaja real, es sólo costumbre"
respuesta: "Porque el brazo de palanca de esa fuerza respecto de ese punto es cero, así que desaparece de la ecuación y queda una sola incógnita"

explicacion: |
  Es un truco algebraico válido porque ΣM=0 vale para cualquier punto —
  conviene elegir el que simplifica más las cuentas.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: la condición de equilibrio rotacional se escribe ΣM = ___."
respuestas_validas:
  - 0

explicacion: |
  La suma de todos los momentos (con su signo según el sentido de
  giro) tiene que ser cero.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: la condición de equilibrio traslacional se escribe ΣF = ___."
respuestas_validas:
  - 0

explicacion: |
  La suma vectorial de todas las fuerzas tiene que ser cero.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  L: uno_de([4, 5, 6, 8, 10])
  x_cg: random(1, L - 1)
  W: random(50, 200)

respuesta: redondear(W * x_cg / L, 2)
tipo: input
tolerancia_abs: 0.5
unidad: "N"

enunciado: "Una viga de {L} m de largo, apoyada en sus dos extremos, tiene un peso de {W} N actuando a {x_cg} m del extremo izquierdo. ¿Cuál es la reacción de apoyo en el extremo DERECHO?"

pasos:
  - "Tomando momentos respecto del extremo izquierdo: R_der × L = W × x_cg"
  - "R_der = W × x_cg / L = {W} × {x_cg} / {L} = {redondear(W * x_cg / L, 2)} N"

explicacion: |
  Al tomar momentos respecto del extremo izquierdo, la reacción de ese
  lado no aparece en la ecuación (brazo de palanca cero).
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  L: uno_de([4, 5, 6, 8, 10])
  x_cg: random(1, L - 1)
  W: random(50, 200)
  R_der: redondear(W * x_cg / L, 2)

respuesta: redondear(W - R_der, 2)
tipo: input
tolerancia_abs: 0.5
unidad: "N"

enunciado: "La misma viga de {L} m, con peso {W} N a {x_cg} m del extremo izquierdo, tiene una reacción de {R_der} N en el extremo derecho. ¿Cuál es la reacción en el extremo IZQUIERDO?"

pasos:
  - "Por ΣF=0: R_izq + R_der = W"
  - "R_izq = W − R_der = {W} − {R_der} = {redondear(W - R_der, 2)} N"

explicacion: |
  Entre las dos reacciones tienen que sostener todo el peso de la
  viga.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "En una viga apoyada en dos puntos, la suma de las dos reacciones de apoyo es siempre igual al peso total de la viga (y de lo que cargue encima)."

explicacion: |
  Es la condición ΣF=0 aplicada al eje vertical.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si el peso de la viga actúa exactamente en el punto medio entre los dos apoyos, las dos reacciones de apoyo son iguales entre sí."

explicacion: |
  Con x_cg = L/2, R_der = W×(L/2)/L = W/2, y por lo tanto R_izq también
  es W/2.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué es un 'par de fuerzas' (el caso donde ΣF=0 pero ΣM≠0)?"
tipo: mc
opciones_explicitas:
  - "Dos fuerzas de igual magnitud y sentido opuesto, aplicadas en puntos distintos de un cuerpo (se cancelan como fuerza, pero generan un momento neto)"
  - "Dos fuerzas iguales aplicadas en el mismo punto"
  - "Una sola fuerza muy grande"
respuesta: "Dos fuerzas de igual magnitud y sentido opuesto, aplicadas en puntos distintos de un cuerpo (se cancelan como fuerza, pero generan un momento neto)"

explicacion: |
  Es el ejemplo clásico de por qué ΣF=0 no alcanza para el equilibrio
  completo — el cuerpo no se desplaza, pero gira.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "ordenar"]

enunciado: "Ordená los pasos típicos para resolver un problema de equilibrio de cuerpo rígido con reacciones desconocidas."
tipo: ordenar
opciones_explicitas:
  - "Plantear ΣF=0 para despejar la incógnita que falte"
  - "Identificar todas las fuerzas que actúan (pesos, reacciones de apoyo, tensiones) y sus puntos de aplicación"
  - "Elegir un punto de referencia (conviene uno donde actúe una incógnita) y plantear ΣM=0 para despejar otra incógnita"
respuesta_orden: ["Identificar todas las fuerzas que actúan (pesos, reacciones de apoyo, tensiones) y sus puntos de aplicación", "Elegir un punto de referencia (conviene uno donde actúe una incógnita) y plantear ΣM=0 para despejar otra incógnita", "Plantear ΣF=0 para despejar la incógnita que falte"]
explicacion: |
  Primero se agota lo que da la ecuación de momentos (eligiendo bien el
  pivote), y con lo que quede sin resolver se usa la ecuación de
  fuerzas.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Qué tiene que cumplirse para que una escalera apoyada contra una pared no se caiga ni resbale?"
tipo: mc
opciones_explicitas:
  - "Que la fuerza neta sobre ella sea cero (no resbale) Y el momento neto sea cero (no rote/vuelque)"
  - "Sólo que sea muy pesada"
  - "Sólo que esté apoyada en ángulo de 90°"
respuesta: "Que la fuerza neta sobre ella sea cero (no resbale) Y el momento neto sea cero (no rote/vuelque)"

explicacion: |
  Es el mismo par de condiciones aplicado a un caso muy concreto y
  cotidiano.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Un cuerpo puede tener fuerza neta cero (no acelera en línea recta) y sin embargo estar girando cada vez más rápido, si el momento neto sobre él no es cero."

explicacion: |
  Es exactamente el caso del par de fuerzas.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Qué principio físico garantiza que un puente sostenga su propio peso y el de los vehículos que pasan por él?"
tipo: mc
opciones_explicitas:
  - "El equilibrio de cuerpo rígido: las reacciones de sus apoyos se ajustan para que se cumplan ΣF=0 y ΣM=0"
  - "Que el puente no tiene peso propio"
  - "Que los vehículos no ejercen ninguna fuerza sobre el puente"
respuesta: "El equilibrio de cuerpo rígido: las reacciones de sus apoyos se ajustan para que se cumplan ΣF=0 y ΣM=0"

explicacion: |
  Es la misma idea de la viga apoyada en dos puntos, aplicada a una
  estructura real.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Para resolver un problema de equilibrio de cuerpo rígido hace falta saber calcular momentos de una fuerza Y saber dónde está el centro de gravedad de los pesos involucrados."

explicacion: |
  Es la combinación directa de `../momento-de-una-fuerza/` y
  `../centro-de-gravedad/`.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Al plantear ΣM=0, hay que sumar los momentos con signo (positivo para un sentido de giro, negativo para el opuesto), no sólo sus magnitudes."

explicacion: |
  Si se ignorara el signo, momentos que en realidad se cancelan
  parecerían sumarse.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  L: uno_de([4, 5, 6, 8])
  x_cg: random(1, L - 1)
  R_der: random(20, 80)

respuesta: redondear(R_der * L / x_cg, 2)
tipo: input
tolerancia_abs: 0.5
unidad: "N"

enunciado: "Una viga de {L} m apoyada en sus dos extremos tiene su peso W actuando a {x_cg} m del extremo izquierdo. La reacción en el extremo derecho es de {R_der} N. ¿Cuál es el peso W de la viga?"

pasos:
  - "R_der = W × x_cg / L  →  W = R_der × L / x_cg = {R_der} × {L} / {x_cg} = {redondear(R_der * L / x_cg, 2)} N"

explicacion: |
  Es el mismo despeje de siempre, ahora resolviendo para el peso en vez
  de para la reacción.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "¿Por qué el equilibrio de cuerpo rígido es una condición más exigente que sólo 'la fuerza neta es cero' (que ya se usaba en fuerzas concurrentes)?"
tipo: mc
opciones_explicitas:
  - "Porque un cuerpo extendido (no un punto) también puede girar, y hace falta además que el momento neto sea cero"
  - "No es más exigente, son exactamente la misma condición"
  - "Porque los cuerpos rígidos no tienen masa"
respuesta: "Porque un cuerpo extendido (no un punto) también puede girar, y hace falta además que el momento neto sea cero"

explicacion: |
  `../../dinamica-fuerzas-concurrentes/` trataba las fuerzas como
  aplicadas en un punto (sin posibilidad de girar) — un cuerpo rígido
  real tiene tamaño, y por eso aparece la condición extra.
```

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el equilibrio de cuerpo rígido?"
tipo: mc
opciones_explicitas:
  - "Para calcular fuerzas de apoyo, tensiones y condiciones de balance en estructuras reales (vigas, escaleras, balanzas, palancas)"
  - "Sólo sirve para objetos que no tienen peso"
  - "Sólo aplica a objetos en movimiento circular"
respuesta: "Para calcular fuerzas de apoyo, tensiones y condiciones de balance en estructuras reales (vigas, escaleras, balanzas, palancas)"

explicacion: |
  Es la combinación de todo lo visto en Estática, y la base directa
  para entender por qué funcionan las máquinas simples
  (`../../maquinas-simples/`).
```

## Sección: decaimiento-radiactivo-alfa-beta-gamma (23 preguntas)

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["nucleo", "alfa"]

respuesta: "núcleo de helio"
tipo: completar
respuestas_validas:
  - "núcleo de helio"
  - "particula alfa"

enunciado: "La radiación alfa consiste en la emisión de un ___."

explicacion: |
  Una partícula alfa es idéntica al núcleo de un átomo de helio, compuesta por dos protones y dos neutrones.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["beta", "electrones"]

respuesta: "negativa"
tipo: mc
opciones_explicitas: ["positiva", "negativa", "neutra"]

enunciado: "En el decaimiento beta menos ($\\beta^-$), un neutrón se transforma en un protón y se emite una partícula de carga ___."

explicacion: |
  En el decaimiento beta menos, el neutrón se convierte en protón y emite un electrón (carga negativa).
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

respuesta: verdadero
tipo: vf

enunciado: "¿La radiación gamma está compuesta por fotones de alta energía y no posee carga eléctrica ni masa?"

explicacion: |
  Correcto. A diferencia de las partículas alfa y beta, la radiación gamma es energía electromagnética pura (fotones).
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["alcance", "radiacion"]

variables:
  datos: [["alfa", "muy corto"], ["beta", "moderado"], ["gamma", "muy alto"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["muy corto", "moderado", "muy alto"]

enunciado: "El alcance de la radiación tipo {datos[idx][0]} en el aire es ___."

explicacion: |
  La partícula alfa tiene un alcance muy corto (se detiene con una hoja de papel), la beta un alcance moderado y la gamma un alcance muy alto.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["secuencia", "nucleo"]

respuesta_orden: ["emisión de partículas alfa", "emisión de partículas beta", "emisión de radiación gamma"]
tipo: ordenar
opciones_explicitas: ["emisión de partículas alfa", "emisión de partículas beta", "emisión de radiación gamma"]

enunciado: "Ordene las siguientes emisiones según su capacidad de penetración (de menor a mayor):"

explicacion: |
  La radiación alfa tiene la menor capacidad de penetración, seguida por la beta, mientras que la gamma es la más penetrante.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["nucleica", "particulas"]

enunciado: "Una partícula alfa consiste en un núcleo de helio. Por lo tanto, una partícula alfa está compuesta por ___ neutrones y ___ protones."

respuestas_validas:
  - "2"
  - "2"

respuesta: ["2", "2"]
tipo: completar

explicacion: |
  Una partícula alfa ($\alpha$) es idéntica al núcleo de un átomo de Helio-4, lo que significa que contiene 2 protones y 2 neutrones (carga +2 y masa 4).
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["beta", "nucleica"]

variables:
  escenario: uno_de([[14, 15], [238, 239], [12, 13]])

enunciado: "Un núcleo radiactivo de un isótopo con número de masa {escenario[0]} emite una partícula beta negativa ($\\beta^-$). ¿Cuál será el número de masa del nuevo núcleo resultante?"

opciones_explicitas: [escenario[0], escenario[1], 1]

respuesta: escenario[0]
tipo: mc

explicacion: |
  En el decaimiento $\beta^-$, un neutrón se transforma en un protón y emite un electrón. El número de masa ($A$) permanece constante porque la suma de protones y neutrones no cambia.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["calculo", "vida_media"]

variables:
  datos: uno_de([[100, 10, 50], [80, 5, 40], [200, 20, 100]])

enunciado: "Una muestra contiene {datos[0]} gramos de una sustancia con una vida media de {datos[1]} años. ¿Cuánta masa de la sustancia permanecerá después de transcurridos {datos[1]} años (es decir, una vida media)?"

respuesta: datos[2]
tipo: completar
tolerancia_abs: 0.001

pasos:
  - "Identificar la masa inicial: {datos[0]} g"
  - "Identificar el tiempo transcurrido: {datos[1]} años"
  - "Identificar la vida media: {datos[1]} años"
  - "Aplicar la fórmula de decaimiento: N(t) = N0 * (1/2)^(t/T1/2)"
  - "Calcular: N(t) = {datos[0]} * (1/2)^1 = {datos[2]}"

explicacion: |
  Después de transcurrir una vida media, la cantidad de la sustancia se reduce exactamente a la mitad de su valor inicial.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["particulas", "alfa"]

respuesta: "particula_alfa"
tipo: mc
opciones_explicitas: ["particula_alfa", "particula_beta", "fotón_gamma"]

enunciado: "Un núcleo emite una partícula con carga eléctrica +2 y masa equivalente a dos nucleones. ¿Qué tipo de radiación es?"

explicacion: |
  La radiación alfa consiste en núcleos de helio (2 protones y 2 neutrones), por lo que su carga es +2.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

respuesta: falso
tipo: vf

enunciado: "¿La radiación gamma consiste en la emisión de partículas con masa y carga eléctrica?"

explicacion: |
  Falso. La radiación gamma es radiación electromagnética (fotones), por lo tanto, no tiene masa ni carga eléctrica.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["beta", "nucleidos"]

variables:
  datos: [[6, 7], [11, 12], [26, 27]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo de número atómico {datos[idx][0]} sufre un decaimiento beta menos (emisión de un electrón). El nuevo número atómico será ___."

respuestas_validas:
  - "7"
  - "12"
  - "27"

explicacion: |
  En el decaimiento beta menos, un neutrón se transforma en un protón, aumentando el número atómico en 1.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetracion", "radiacion"]

respuesta_orden: ["alfa", "beta", "gamma"]
tipo: ordenar

opciones_explicitas: ["alfa", "beta", "gamma"]

enunciado: "Ordena las siguientes radiaciones de MENOR a MAYOR capacidad de penetración en la materia:"

explicacion: |
  La radiación alfa es detenida por una hoja de papel; la beta requiere algo más denso (como aluminio) y la gamma requiere materiales muy densos como plomo o concreto.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["gamma", "emision"]

respuesta: "fotón"
tipo: mc
opciones_explicitas: ["fotón", "electrón", "neutrón"]

enunciado: "A menudo se confunde la emisión de partículas con la emisión de energía pura. ¿Cuál de estas emisiones es puramente energía electromagnética sin masa?"

explicacion: |
  La radiación gamma es la emisión de energía en forma de fotones, a diferencia de las partículas alfa o beta que poseen masa.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["alfa", "particula", "carga"]

enunciado: "La radiación alfa está compuesta por un núcleo de helio, lo que significa que posee una carga eléctrica de ___."

respuestas_validas:
  - "+2"
  - "+2"
  - "+2"
respuesta: "+2"
tipo: completar

explicacion: |
  Una partícula alfa consiste en 2 protones y 2 neutrones, resultando en una carga de +2.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetración", "alfa", "beta", "gamma"]

opciones_explicitas: ["La radiación gamma tiene mayor capacidad de penetración que la beta", "La radiación alfa tiene mayor capacidad de penetración que la gamma", "La radiación beta tiene mayor capacidad de penetración que la alfa"]

enunciado: "Considerando la capacidad de atravesar la materia, ¿cuál de las siguientes afirmaciones es correcta?"

respuesta: "La radiación gamma tiene mayor capacidad de penetración que la beta"
tipo: mc

explicacion: |
  La radiación gamma, al ser una onda electromagnética de alta energía sin masa ni carga, atraviesa la materia con mucha más facilidad que las partículas alfa o beta.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

enunciado: "¿Es la radiación gamma una partícula con masa y carga eléctrica?"

respuesta: falso
tipo: vf

explicacion: |
  A diferencia de las partículas alfa y beta, la radiación gamma es radiación electromagnética (fotones) y no posee masa ni carga.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["beta", "neutrino", "nucleo"]

enunciado: "En un decaimiento beta negativo, un neutrón se transforma en un protón y emite una partícula tipo ___ para conservar la carga."

pasos:
  - "Identificar la partícula emitida en el decaimiento beta-"
  - "Comparar con la composición del núcleo"

respuestas_validas:
  - "electrón"
  - "electrón"
respuesta: "electrón"
tipo: completar

explicacion: |
  En el decaimiento beta menos, un neutrón se convierte en un protón, emitiendo un electrón (partícula beta) y un antineutrino.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["interacción", "materia", "orden"]

opciones_explicitas: ["Gamma", "Beta", "Alfa"]

enunciado: "Ordena las radiaciones de mayor a menor capacidad de penetración (de la que más atraviesa a la que menos atraviesa):"

respuesta_orden: ["Gamma", "Beta", "Alfa"]
tipo: ordenar

explicacion: |
  El orden de penetración es: Gamma (máxima, atraviesa casi todo), Beta (media, requiere láminas de aluminio) y Alfa (mínima, es detenida por una hoja de papel).
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["alfa", "particulas", "radiactividad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["un detector de humo detecta una partícula con carga +2 y masa de 4 unidades de masa atómica", "particula_alfa"], ["un emisor de partículas emite un núcleo de helio", "particula_alfa"]]

enunciado: "En el siguiente escenario: {escenarios[escenario_idx][0]}, la radiación emitida es una ___."

respuestas_validas:
  - "particula_alfa"

respuesta: escenarios[escenario_idx][1]
tipo: completar

explicacion: |
  La radiación alfa consiste en núcleos de helio (2 protones y 2 neutrones), por lo que tienen carga +2.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetracion", "gamma", "alfa"]

variables:
  tipo_rad: uno_de([0,1,2])
  datos: [["alfa", "papel"], ["beta", "aluminio"], ["gamma", "plomo"]]

enunciado: "Si nos enfrentamos a una radiación tipo {datos[tipo_rad][0]}, el material necesario para detenerla es aproximadamente una lámina de {datos[tipo_rad][1]}."

opciones_explicitas: ["papel", "aluminio", "plomo"]

respuesta: datos[tipo_rad][1]
tipo: mc

explicacion: |
  Las partículas alfa son detenidas por una hoja de papel; las beta por aluminio delgado y los rayos gamma requieren materiales densos como el plomo.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["beta", "electrones"]

enunciado: "¿Es correcto afirmar que la radiación beta consiste en la emisión de un electrón de alta energía?"

respuesta: verdadero
tipo: vf

explicacion: |
  La radiación beta negativa es la emisión de un electrón, mientras que la beta positiva es la emisión de un positrón.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["secuencia", "nucleidos"]

enunciado: "Ordene los pasos de un decaimiento alfa para un núcleo de Uranio-238 (U-238) hacia su descendiente inmediato:"

opciones_explicitas: ["Emisión de 2 protones", "Emisión de 2 neutrones", "Transformación en Torio-234"]

respuesta_orden: ["Emisión de 2 protones", "Emisión de 2 neutrones", "Transformación en Torio-234"]
tipo: ordenar

explicacion: |
  En el decaimiento alfa, el núcleo pierde 2 protones y 2 neutrones, reduciendo su número atómico en 2.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["gamma", "fotones"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["un núcleo excitado libera energía sin cambiar su número atómico", "fotones"], ["la emisión de energía electromagnética pura", "fotones"]]

enunciado: "En el caso de {casos[caso_idx][0]}, lo que se emite es radiación gamma, la cual está compuesta por ___."

respuestas_validas:
  - "fotones"

respuesta: casos[caso_idx][1]
tipo: completar

explicacion: |
  A diferencia de las partículas alfa o beta, la radiación gamma no tiene masa ni carga, es energía electromagnética (fotones).
```

## Sección: formulas-con-literales (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["fuerza"]

variables:
  m: random(2, 50)
  a: random(2, 20)

respuesta: m * a
tipo: input
tolerancia_abs: 0

enunciado: "F = m·a. Si m = {m} kg y a = {a} m/s², ¿cuánto vale F (en N)?"

explicacion: |
  F = {m}×{a} = {m * a}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["fuerza", "denominador"]

variables:
  a: random(2, 20)
  m_sol: random(2, 50)
  F: a * m_sol

respuesta: F / a
tipo: input
tolerancia_abs: 0

enunciado: "F = m·a. Si F = {F} N y a = {a} m/s², ¿cuánto vale m?"

explicacion: |
  m = F/a = {F}/{a} = {F / a}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["fuerza", "denominador"]

variables:
  m: random(2, 50)
  a_sol: random(2, 20)
  F: m * a_sol

respuesta: F / m
tipo: input
tolerancia_abs: 0

enunciado: "F = m·a. Si F = {F} N y m = {m} kg, ¿cuánto vale a?"

explicacion: |
  a = F/m = {F}/{m} = {F / m}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["trabajo"]

variables:
  Fz: random(2, 100)
  d: random(1, 30)

respuesta: Fz * d
tipo: input
tolerancia_abs: 0

enunciado: "W = F·d. Si F = {Fz} N y d = {d} m, ¿cuánto vale W (en J)?"

explicacion: |
  W = {Fz}×{d} = {Fz * d}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["trabajo", "denominador"]

variables:
  d: random(1, 30)
  F_sol: random(2, 100)
  W: d * F_sol

respuesta: W / d
tipo: input
tolerancia_abs: 0

enunciado: "W = F·d. Si W = {W} J y d = {d} m, ¿cuánto vale F?"

explicacion: |
  F = W/d = {W}/{d} = {W / d}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["trabajo", "denominador"]

variables:
  Fz: random(2, 100)
  d_sol: random(1, 30)
  W: Fz * d_sol

respuesta: W / Fz
tipo: input
tolerancia_abs: 0

enunciado: "W = F·d. Si W = {W} J y F = {Fz} N, ¿cuánto vale d?"

explicacion: |
  d = W/F = {W}/{Fz} = {W / Fz}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["energia"]

variables:
  m: random(2, 4) * 2
  v: random(2, 15)

respuesta: (m * v ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Ec = ½mv². Si m = {m} kg y v = {v} m/s, ¿cuánto vale Ec (en J)?"

pasos:
  - "Ec = {m}×{v}²/2 = {m}×{v ^ 2}/2 = {(m * v ^ 2) / 2}"

explicacion: |
  Primero se eleva v al cuadrado, después se multiplica por m y se
  divide por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["energia", "denominador"]

variables:
  v: random(2, 10)
  m_sol: random(2, 20)
  Ec: (m_sol * v ^ 2) / 2

respuesta: (2 * Ec) / (v ^ 2)
tipo: input
tolerancia_abs: 0

enunciado: "Ec = ½mv². Si Ec = {Ec} J y v = {v} m/s, ¿cuánto vale m?"

pasos:
  - "Despejando: m = 2Ec/v² = {2 * Ec}/{v ^ 2} = {(2 * Ec) / (v ^ 2)}"

explicacion: |
  Primero se pasa el ½ multiplicando (queda 2Ec), y después se divide
  por v² (no se saca raíz, porque v² ya está calculado).
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["energia"]

variables:
  m: random(1, 50)
  h: random(1, 20)
  g: 10

respuesta: m * g * h
tipo: input
tolerancia_abs: 0

enunciado: "Ep = m·g·h (con g=10 m/s²). Si m = {m} kg y h = {h} m, ¿cuánto vale Ep (en J)?"

explicacion: |
  Ep = {m}×{g}×{h} = {m * g * h}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["energia", "denominador"]

variables:
  h: random(1, 20)
  g: 10
  m_sol: random(1, 50)
  Ep: m_sol * g * h

respuesta: Ep / (g * h)
tipo: input
tolerancia_abs: 0

enunciado: "Ep = m·g·h (con g=10 m/s²). Si Ep = {Ep} J y h = {h} m, ¿cuánto vale m?"

pasos:
  - "m = Ep/(g·h) = {Ep}/({g}×{h}) = {Ep / (g * h)}"

explicacion: |
  Hay que dividir por las dos letras que multiplican (g y h), no sólo
  por una.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["energia", "denominador"]

variables:
  m: random(1, 50)
  g: 10
  h_sol: random(1, 20)
  Ep: m * g * h_sol

respuesta: Ep / (g * m)
tipo: input
tolerancia_abs: 0

enunciado: "Ep = m·g·h (con g=10 m/s²). Si Ep = {Ep} J y m = {m} kg, ¿cuánto vale h?"

explicacion: |
  h = Ep/(g·m) = {Ep}/({g}×{m}) = {Ep / (g * m)}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["potencia"]

variables:
  W: random(10, 500)
  t: random(1, 20)

respuesta: W / t
tipo: input
tolerancia_abs: 0

enunciado: "Pot = W/t. Si W = {W} J y t = {t} s, ¿cuánto vale Pot (en W)?"

explicacion: |
  Pot = {W}/{t} = {W / t}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["potencia"]

variables:
  Pot: random(5, 100)
  t: random(1, 20)

respuesta: Pot * t
tipo: input
tolerancia_abs: 0

enunciado: "Pot = W/t. Si Pot = {Pot} W y t = {t} s, ¿cuánto vale W?"

explicacion: |
  W = Pot×t = {Pot}×{t} = {Pot * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["potencia", "denominador"]

variables:
  Pot: random(5, 50)
  t_sol: random(1, 20)
  W: Pot * t_sol

respuesta: W / Pot
tipo: input
tolerancia_abs: 0

enunciado: "Pot = W/t. Si Pot = {Pot} W y W = {W} J, ¿cuánto vale t?"

pasos:
  - "Pasar t multiplicando: Pot·t = W → t = W/Pot"

explicacion: |
  Mismo caso de siempre: la letra que divide se pasa multiplicando
  primero.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["presion"]

variables:
  Fz: random(10, 200)
  A: random(1, 20)

respuesta: Fz / A
tipo: input
tolerancia_abs: 0

enunciado: "P = F/A. Si F = {Fz} N y A = {A} m², ¿cuánto vale P (en Pa)?"

explicacion: |
  P = {Fz}/{A} = {Fz / A}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["presion", "denominador"]

variables:
  P: random(5, 50)
  A_sol: random(1, 20)
  Fz: P * A_sol

respuesta: Fz / P
tipo: input
tolerancia_abs: 0

enunciado: "P = F/A. Si P = {P} Pa y F = {Fz} N, ¿cuánto vale A?"

explicacion: |
  A = F/P = {Fz}/{P} = {Fz / P}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["velocidad"]

variables:
  d: random(10, 300)
  t: random(1, 20)

respuesta: d / t
tipo: input
tolerancia_abs: 0

enunciado: "v = d/t. Si d = {d} m y t = {t} s, ¿cuánto vale v (en m/s)?"

explicacion: |
  v = {d}/{t} = {d / t}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["encadenar"]

variables:
  d: random(10, 100)
  t: random(2, 10)
  m: random(1, 3) * 2

respuesta: (m * (d / t) ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto de {m} kg recorre {d} m en {t} s a velocidad constante. ¿Cuál es su energía cinética?"

pasos:
  - "Primero v = d/t = {d}/{t} = {d / t} m/s"
  - "Después Ec = ½mv² = {m}×{d / t}²/2 = {(m * (d / t) ^ 2) / 2}"

explicacion: |
  Hay que usar una fórmula para hallar un dato intermedio (v) antes de
  poder aplicar la segunda fórmula (Ec).
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["encadenar"]

variables:
  m: random(2, 30)
  a: random(1, 10)
  d: random(1, 20)

respuesta: (m * a) * d
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza acelera un objeto de {m} kg a {a} m/s², y lo desplaza {d} m. ¿Cuál es el trabajo realizado?"

pasos:
  - "Primero F = m·a = {m}×{a} = {m * a} N"
  - "Después W = F·d = {m * a}×{d} = {(m * a) * d}"

explicacion: |
  Se encadena F=ma con W=F·d.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "opcion_multiple"]

respuesta: "F = m·a"
tipo: mc
opciones_explicitas:
  - "F = m·a"
  - "W = F·d"
  - "P = F/A"

enunciado: "¿Qué fórmula relaciona la fuerza con la masa y la aceleración?"

explicacion: |
  Es la segunda ley de Newton.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Ec = ½mv²"
tipo: mc
opciones_explicitas:
  - "Ec = ½mv²"
  - "Ep = m·g·h"
  - "Pot = W/t"

enunciado: "¿Qué fórmula da la energía asociada al movimiento (velocidad) de un objeto?"

explicacion: |
  La energía cinética depende de la masa y la velocidad; la potencial
  depende de la altura.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Despejar una variable de una fórmula de Física usa exactamente el mismo procedimiento que despejar una fórmula matemática cualquiera."

explicacion: |
  No hay una técnica especial "de Física" — es álgebra aplicada a
  fórmulas con nombres y unidades distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para que el resultado de una fórmula física dé un número correcto, las unidades de los datos tienen que ser consistentes entre sí (por ejemplo, todo en el sistema SI)."

explicacion: |
  Mezclar km/h con segundos, o gramos con metros cúbicos, da un
  resultado numérico sin sentido, aunque el álgebra esté bien hecha.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  m: random(2, 50)
  a: random(2, 20)
  real: m * a
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "F = m·a. Con m = {m} kg y a = {a} m/s², ¿es correcto que F sea {propuesto} N?"

explicacion: |
  El valor correcto es F = {m}×{a} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  m: random(2, 4) * 2
  v: random(2, 15)
  real: (m * v ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Ec = ½mv². Con m = {m} kg y v = {v} m/s, ¿es correcto que Ec sea {propuesto} J?"

explicacion: |
  El valor correcto es Ec = {m}×{v}²/2 = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un problema real, puede pedirse despejar cualquiera de las letras de la fórmula, no siempre la que ya está sola de un lado."

explicacion: |
  Por eso hace falta saber despejar cualquier variable, no memorizar
  sólo la forma en que la fórmula "viene escrita" en el libro.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "intermedio"
  tags: ["potencia", "problema"]

variables:
  Fz: random(10, 100)
  d: random(1, 20)
  t: random(1, 10)

respuesta: (Fz * d) / t
tipo: input
tolerancia_abs: 0

enunciado: "Una máquina aplica una fuerza de {Fz} N a lo largo de {d} m, en {t} s. ¿Cuál es su potencia?"

pasos:
  - "Primero W = F·d = {Fz}×{d} = {Fz * d} J"
  - "Después Pot = W/t = {Fz * d}/{t} = {(Fz * d) / t}"

explicacion: |
  Se encadena W=F·d con Pot=W/t.
```

```
metadata:
  materia: "matematicas"
  tema: "formulas_con_literales"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Este módulo no enseña ninguna técnica algebraica nueva — aplica lo ya aprendido en despejar-formula a un catálogo más grande de fórmulas reales de Física."

explicacion: |
  Es exactamente el motivo por el que este tema depende de
  `../../matematica/despejar-formula/` y no al revés.
```

## Sección: fision-y-fusion-nuclear (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "fision_nuclear"
  nivel: "basico"
  tags: ["nucleo", "fision", "energia"]

respuesta: "fision"
tipo: completar
respuestas_validas:
  - "fision"
  - "fisión"

enunciado: "El proceso mediante el cual un núcleo pesado se divide en dos o más núcleos más pequeños, liberando una gran cantidad de energía, se denomina ___."

explicacion: |
  La fisión nuclear ocurre cuando un núcleo pesado (como el Uranio-235) absorbe un neutrón y se divide, liberando energía y más neutrones.
```

```
metadata:
  materia: "fisica"
  tema: "fusion_nuclear"
  nivel: "basico"
  tags: ["fusion", "masa", "energia"]

respuesta: falso
tipo: vf
enunciado: "¿En un proceso de fusión nuclear, la masa de los núcleos resultantes es mayor que la masa de los núcleos originales?"

explicacion: |
  Falso. En la fusión (y en la fisión), la masa de los productos es menor que la de los reactivos. Esa diferencia de masa se convierte en energía según la ecuación de Einstein.
```

```
metadata:
  materia: "fisica"
  tema: "defecto_de_masa"
  nivel: "intermedio"
  tags: ["einstein", "relatividad", "energia"]

respuesta: "E=mc^2"
tipo: mc
opciones_explicitas: ["E=mc^2", "E=m/c^2", "E=m+c^2", "E=mc"]

enunciado: "La relación matemática que describe cómo la pérdida de masa (defecto de masa) se transforma en energía es:"

explicacion: |
  La famosa ecuación de Albert Einstein establece que la energía (E) es igual a la masa (m) multiplicada por la velocidad de la luz al cuadrado (c²).
```

```
metadata:
  materia: "fisica"
  tema: "defecto_de_masa"
  nivel: "intermedio"
  tags: ["masa", "energia", "nucleo"]

respuesta: "defecto de masa"
tipo: completar
respuestas_validas:
  - "defecto de masa"
  - "defecto de masa"

enunciado: "La diferencia entre la masa de los nucleones individuales y la masa del núcleo unido se conoce como ___."

explicacion: |
  Esta diferencia es la que se libera en forma de energía de enlace durante los procesos nucleares.
```

```
metadata:
  materia: "fisica"
  tema: "fision_vs_fusion"
  nivel: "basico"
  tags: ["comparacion", "fision", "fusion"]

respuesta_orden: ["Fisión", "Fusión"]
tipo: ordenar

opciones_explicitas: ["Fusión", "Fisión"]

enunciado: "Ordena los siguientes procesos desde el que ocurre en núcleos pesados hasta el que ocurre en núcleos muy ligeros:"

pasos:
  - "Proceso en núcleos pesados (ej. Uranio)"
  - "Proceso en núcleos ligeros (ej. Hidrógeno)"

explicacion: |
  La fisión divide núcleos pesados, mientras que la fusión une núcleos ligeros.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["einstein", "relatividad", "energia"]

variables:
  m_defecto_kg: 0.000000000000000000001

respuesta: m_defecto_kg * c * c
tipo: completar
tolerancia_abs: 1e-20

enunciado: "Si en un proceso nuclear se pierde una cantidad de masa de {m_defecto_kg} kg, ¿cuánta energía se libera en Joules según la ecuación de Einstein?"

pasos:
  - "Identificar la masa perdida (defecto de masa): m = 1e-21 kg"
  - "Utilizar la fórmula E = m * c²"
  - "Sustituir c ≈ 3e8 m/s: E = 1e-21 * (3e8)² = 1e-21 * 9e16"
  - "Resultado: 9e-5 J"

explicacion: |
  La energía liberada proviene del defecto de masa. Al convertir esa masa perdida en energía mediante E = mc², obtenemos la energía liberada en el proceso.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["conceptos", "nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el defecto de masa la diferencia entre la masa de los nucleones individuales y la masa del núcleo resultante?"

explicacion: |
  Correcto. La masa de un núcleo atómico es siempre menor que la suma de las masas de sus protones y neutrones por separado. Esa diferencia es lo que se convierte en energía de enlace.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["fision", "fusion"]

respuesta: "fusion"
tipo: mc
opciones_explicitas: ["fision", "fusion"]

enunciado: "El proceso que consiste en la unión de dos núcleos ligeros para formar uno más pesado se denomina ___."

explicacion: |
  La fusión une núcleos ligeros (como el hidrógeno) y la fisión divide núcleos pesados (como el uranio).
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["calculo", "fusion"]

respuesta: "4.5e14"
tipo: completar
respuestas_validas:
  - "4.5e14"

enunciado: "En una reacción de fusión, la masa inicial es de 1.005 kg y la masa final es de 1.000 kg. La energía liberada es de ___ J."

pasos:
  - "Calcular el defecto de masa: Δm = 1.005 - 1.000 = 0.005 kg (usando el valor del ejemplo)"
  - "Aplicar E = Δm * c²"
  - "E = 0.005 * (3e8)^2 = 4.5e14 J"

explicacion: |
  El cálculo depende del valor de la masa perdida. Para un defecto de 0.005 kg, la energía es 4.5e14 J.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["orden", "procesos"]

respuesta_orden: ["Fisión", "Fusión"]
tipo: ordenar
opciones_explicitas: ["Fisión", "Fusión"]

enunciado: "Ordena estos procesos según el tipo de núcleo que utilizan: 1. División de un núcleo pesado. 2. Unión de núcleos ligeros."

explicacion: |
  La fisión implica la división de un núcleo grande y pesado, mientras que la fusión implica la unión de núcleos muy pequeños y ligeros.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["energia", "materia", "relatividad"]

variables:
  masa_nucleo_padre: 235.0
  masa_nucleo_hijo: 235.0

respuesta: "defecto de masa"
tipo: completar
respuestas_validas:
  - "defecto de masa"
  - "pérdida de masa"
  - "masa faltante"

enunciado: "En un proceso de fisión nuclear, la suma de las masas de los fragmentos resultantes es ligeramente menor que la masa del núcleo original. Esta diferencia se conoce como ___."

explicacion: |
  La diferencia de masa entre los reactivos y los productos se convierte en energía cinética y radiación, según la ecuación de Einstein E=mc².
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["conceptos", "reaccion"]

respuesta: verdadero
tipo: vf
enunciado: "En la fusión nuclear, núcleos ligeros se combinan para formar un núcleo más pesado, liberando energía en el proceso. ¿Es esto correcto?"

explicacion: |
  Correcto. La fusión implica la unión de núcleos ligeros (como el hidrógeno) para formar elementos más pesados (como el helio), liberando una enorme cantidad de energía.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["e_mc2", "relatividad"]

variables:
  escenario: uno_de(["fision", "fusion"])
  masa_inicial: 10.0
  masa_final: 9.9

respuesta: "la masa disminuye"
tipo: mc

opciones_explicitas: ["la masa disminuye", "la masa aumenta", "la masa se mantiene igual"]

enunciado: "Si un proceso nuclear libera energía hacia el entorno, según la equivalencia masa-energía de Einstein, ¿qué sucede con la masa total del sistema nuclear?"

explicacion: |
  Para que se libere energía (E > 0), la masa final debe ser menor que la masa inicial. La masa "perdida" se transforma en la energía liberada.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["conservacion", "materia"]

respuesta: "la masa no se conserva de forma absoluta en procesos nucleares"
tipo: mc

opciones_explicitas: ["la masa no se conserva de forma absoluta en procesos nucleares", "la masa se conserva perfectamente", "la masa aumenta siempre"]

enunciado: "En física nuclear, cuando ocurre una reacción que libera energía, la ley de conservación de la masa se interpreta de forma distinta a la física clásica. ¿Cuál es la afirmación correcta?"

explicacion: |
  En procesos nucleares, la masa y la energía son dos caras de la misma moneda. La masa total disminuye porque parte de ella se ha transformado en energía.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

opciones_explicitas: ["Unión de núcleos", "Aumento de energía cinética", "Disminución de masa total"]
respuesta_orden: ["Unión de núcleos", "Disminución de masa total", "Aumento de energía cinética"]
tipo: ordenar

enunciado: "Ordena los eventos que ocurren en una reacción de fusión nuclear desde el inicio hasta la liberación de energía:"

pasos:
  - "Los núcleos ligeros se aproximan y se unen."
  - "La masa de los productos es menor que la de los reactivos."
  - "Se libera energía en forma de movimiento o radiación."

explicacion: |
  Primero los núcleos se fusionan, esto genera un defecto de masa (la masa total baja) y esa diferencia de masa se manifiesta como la energía liberada.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["energia", "masa", "relatividad"]

respuesta: "defecto de masa"
tipo: "completar"
respuestas_validas:
  - "defecto de masa"
  - "defecto de masa"

enunciado: "Tanto en la fisión como en la fusión nuclear, la energía liberada proviene de la conversión de una pequeña parte de la masa de los núcleos en energía, fenómeno conocido como ___."

explicacion: |
  La masa de los productos resultantes es menor que la masa de los reactivos originales. Esa diferencia de masa se convierte en energía según la ecuación de Einstein $E=mc^2$.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["comparacion", "nucleos"]

respuesta: "La fisión divide núcleos pesados y la fusión une núcleos ligeros, ambas liberando energía"
tipo: "mc"
opciones_explicitas: ["La fisión divide núcleos pesados y la fusión une núcleos ligeros, ambas liberando energía", "La fisión une núcleos ligeros y la fusión divide núcleos pesados, ambas liberando energía", "Tanto la fisión como la fusión dividen núcleos pesados", "Tanto la fisión como la fusión unen núcleos ligeros"]

enunciado: "Considerando los procesos nucleares, ¿cuál de las siguientes afirmaciones describe correctamente la diferencia entre ambos?"

explicacion: |
  La fisión consiste en la división de un núcleo pesado (como el Uranio-235) en fragmentos más pequeños, mientras que la fusión es la unión de núcleos ligeros (como el Hidrógeno) para formar uno más pesado.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["relatividad", "e_mc2"]

respuesta: falso
tipo: "vf"

enunciado: "En un proceso de fusión nuclear, la suma de las masas de los núcleos finales es exactamente igual a la suma de las masas de los núcleos iniciales, ya que la energía no afecta la masa."

explicacion: |
  Falso. Si la masa se mantuviera constante, no habría liberación de energía. La energía liberada proviene precisamente de que la masa final es menor que la inicial (defecto de masa).
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["magnitud", "energia"]

respuesta: "La fusión libera más energía por unidad de masa que la fisión"
tipo: "mc"
opciones_explicitas: ["La fisión libera más energía por unidad de masa que la fusión", "La fusión libera más energía por unidad de masa que la fisión", "Ambos liberan la misma cantidad de energía por nucleón", "La fisión requiere temperaturas mucho más altas que la fusión"]

enunciado: "Analizando la eficiencia energética de ambos procesos, ¿cuál es la distinción principal respecto a la energía liberada por unidad de masa?"

explicacion: |
  Aunque la fisión es muy potente, la fusión nuclear (como la que ocurre en las estrellas) libera una cantidad significativamente mayor de energía por cada nucleón involucrado.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["pasos", "energia"]

respuesta_orden: ["Reactivos con masa total mayor", "Transformación por interacción nuclear", "Productos con masa total menor", "Liberación de energía (E=mc²)"]
tipo: "ordenar"
opciones_explicitas: ["Reactivos con masa total mayor", "Transformación por interacción nuclear", "Productos con masa total menor", "Liberación de energía (E=mc²)"]

enunciado: "Ordena los pasos que explican la liberación de energía en un proceso de fusión o fisión nuclear:"

explicacion: |
  El proceso comienza con los reactivos, ocurre la interacción que rompe o une los núcleos, la masa resultante es menor debido al defecto de masa, y esa diferencia se manifiesta como energía liberada.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["energia", "relatividad", "masa"]

respuesta: "fision"
tipo: mc
opciones_explicitas: ["fision", "fusion", "combustion", "desintegracion"]

enunciado: "En una central nuclear convencional, se utiliza Uranio-235 para liberar energía. Este proceso se denomina:"

explicacion: |
  Las centrales nucleares convencionales se basan en la fisión, donde un núcleo pesado (como el Uranio-235) se divide. La fusión, en cambio, aún no es una tecnología comercial madura.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["defecto_de_masa", "einstein"]

variables:
  datos: [["1.005", "0.005"], ["1.010", "0.010"], ["0.998", "0.002"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "0.005"
  - "0.010"
  - "0.002"

enunciado: "Si la masa de los fragmentos resultantes tras un proceso nuclear es de ___ unidades de masa atómica menos que la masa de los núcleos originales, ese valor se conoce como defecto de masa."

pasos:
  - "Identificar la masa inicial de los reactivos."
  - "Identificar la masa final de los productos."
  - "Calcular la diferencia para hallar el defecto de masa."

explicacion: |
  La diferencia de masa (defecto de masa) se convierte en energía según la ecuación de Einstein.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["verdad_falso", "estrellas"]

respuesta: verdadero
tipo: vf
enunciado: "La fusión nuclear es el proceso que alimenta a las estrellas, como el Sol, donde núcleos ligeros se unen para formar uno más pesado."

explicacion: |
  Es verdadero. En el Sol, la fusión de núcleos de hidrógeno libera la energía que percibimos como luz y calor.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["e_mc2", "calculo"]

variables:
  valores: [["1.0e-30", "9.0e-14"], ["2.0e-30", "1.8e-13"], ["5.0e-30", "4.5e-13"]]
  idx: uno_de([0,1,2])

respuesta: valores[idx][1]
tipo: completar
tolerancia_abs: 0.00001e-13

enunciado: "Si un proceso nuclear libera una cantidad de masa $\\Delta m$ de {valores[idx][0]} kg, ¿cuánta energía $E$ se libera en Joules (usando $c = 3 \\times 10^8$ m/s)? (Expresa el resultado en notación científica, ej: 1.5e-10)"

pasos:
  - "Utilizar la fórmula $E = \\Delta m \\cdot c^2$."
  - "Sustituir $\\Delta m$ por el valor dado."
  - "Elevar la velocidad de la luz al cuadrado ($9 \\times 10^{16}$)."

explicacion: |
  Aplicando $E = mc^2$, la energía liberada es {valores[idx][1]} J.
```

```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["ordenar", "proceso"]

respuesta_orden: ["Masa de reactivos", "Defecto de masa", "Energía liberada"]
tipo: ordenar
opciones_explicitas: ["Masa de reactivos", "Defecto de masa", "Energía liberada"]

enunciado: "Ordena los conceptos según el orden lógico en el que ocurren para explicar la liberación de energía en un proceso nuclear:"

explicacion: |
  Primero tenemos la masa inicial, luego la diferencia (defecto) que se convierte en energía.
```

