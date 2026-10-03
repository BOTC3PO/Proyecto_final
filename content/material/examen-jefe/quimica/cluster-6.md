# Examen jefe — [PENDIENTE #846]

> Logro #846. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **102 preguntas totales** en 5/5 secciones.

---

## Sección: geometria-molecular-vsepr (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["teoria", "vsepr"]

respuesta: verdadero
tipo: vf

enunciado: "La teoría VSEPR establece que los pares de electrones alrededor de un átomo central se repelen entre sí y se acomodan lo más lejos posible para minimizar la repulsión."

explicacion: |
  Correcto. La repulsión electrónica es el principio que determina la forma de las moléculas.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["geometria", "vsepr"]

variables:
  datos: [[2, "lineal"], [3, "trigonal plana"], [4, "tetraédrica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["lineal", "trigonal plana", "tetraédrica"]

enunciado: "Si un átomo central tiene {datos[idx][0]} pares de electrones enlazantes y ningún par libre, la geometría resultante es..."

explicacion: |
  La geometría depende del número de dominios electrónicos. Con {datos[idx][0]} dominios, la forma es {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["geometria", "angulos"]

respuesta: "lineal"
tipo: completar
respuestas_validas:
  - "lineal"

enunciado: "La geometría con 2 pares de electrones alrededor del centro y un ángulo de enlace de 180 grados es la ___."

explicacion: |
  Con dos dominios electrónicos, la máxima separación posible es un ángulo de 180°: geometría lineal.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["moleculas", "co2"]

respuesta: verdadero
tipo: vf

enunciado: "La molécula de dióxido de carbono (CO2) posee una geometría molecular lineal."

explicacion: |
  El carbono central tiene dos dobles enlaces con los oxígenos y ningún par libre, lo que da una geometría lineal.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["angulos", "tetraedrica"]

respuesta: "109.5 grados"
tipo: mc
opciones_explicitas: ["109.5 grados", "180 grados", "120 grados", "90 grados"]

enunciado: "¿Cuál es el ángulo de enlace típico en una molécula con geometría tetraédrica perfecta?"

explicacion: |
  En una geometría tetraédrica, los cuatro pares de electrones se orientan hacia los vértices de un tetraedro, con ángulo de 109,5°.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["vsepr", "repulsion"]

respuesta: verdadero
tipo: vf

enunciado: "Un par de electrones libre (no enlazante) ocupa espacio alrededor del átomo central igual que un enlace."

explicacion: |
  Correcto — y además, los pares libres repelen con MÁS fuerza que los enlazantes, ocupando incluso un poco más de volumen.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["geometria", "vsepr"]

variables:
  escenario: [["NH3", "piramidal trigonal"], ["H2O", "angular"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["piramidal trigonal", "angular", "lineal", "tetraédrica"]

enunciado: "Dada la molécula {escenario[idx][0]}, ¿cuál es su geometría molecular?"

explicacion: |
  La molécula {escenario[idx][0]} tiene geometría {escenario[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["h2o", "geometria"]

respuesta: falso
tipo: vf

enunciado: "La molécula de agua (H2O) tiene una geometría lineal."

explicacion: |
  Falso. El oxígeno tiene dos pares enlazantes y dos pares libres, lo que da una geometría angular.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["h2o", "electrones"]

respuesta: "libres"
tipo: completar
respuestas_validas:
  - "libres"

enunciado: "El oxígeno del agua tiene 4 pares de electrones alrededor: 2 enlaces O-H y 2 pares ___."

explicacion: |
  Los dos pares que no forman enlaces se llaman pares de electrones libres.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["vsepr", "angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Los pares libres repelen con más fuerza que los pares enlazantes, por eso el ángulo de una molécula como el agua es menor al de un tetraedro puro."

explicacion: |
  Correcto. La mayor repulsión de los pares libres "empuja" a los pares enlazantes, reduciendo el ángulo de enlace observado.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["vsepr", "polaridad", "co2"]

respuesta: verdadero
tipo: vf

enunciado: "El CO2 tiene enlaces polares (C=O) pero la molécula en conjunto es no polar, debido a su geometría lineal simétrica."

explicacion: |
  Aunque los enlaces C=O son polares, la geometría lineal hace que los vectores de momento dipolar se cancelen: momento dipolar neto cero.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["vsepr", "polaridad", "h2o"]

respuesta: verdadero
tipo: vf

enunciado: "El agua (H2O) tiene enlaces polares y es una molécula polar en su conjunto, debido a su geometría angular asimétrica."

explicacion: |
  La geometría angular del agua impide que los momentos dipolares de los enlaces O-H se cancelen: queda un momento dipolar neto.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "avanzado"
  tags: ["vsepr", "co2", "dipolo"]

respuesta: "Los dipolos de los enlaces C=O se cancelan debido a la geometría lineal simétrica."
tipo: mc
opciones_explicitas: ["Los dipolos de los enlaces C=O se cancelan debido a la geometría lineal simétrica.", "La electronegatividad del carbono es igual a la del oxígeno.", "Los electrones se distribuyen de forma uniforme en toda la molécula.", "La geometría es angular y no lineal."]

enunciado: "¿Por qué el CO2 NO es polar, a pesar de tener enlaces polares?"

explicacion: |
  Para que una molécula con enlaces polares sea no polar, la disposición espacial debe ser tal que los vectores de los momentos dipolares se anulen entre sí — eso pasa en el CO2 por su simetría lineal.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["polaridad", "dipolo"]

respuesta: "cancelan"
tipo: completar
respuestas_validas:
  - "cancelan"

enunciado: "Una molécula es polar en conjunto cuando sus momentos dipolares individuales no se ___."

explicacion: |
  Si los momentos dipolares de los enlaces no se cancelan por la geometría de la molécula, queda un momento dipolar neto: la molécula es polar.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["vsepr", "polaridad", "enlace_polar"]

respuesta: falso
tipo: vf

enunciado: "Cualquier molécula que posea al menos un enlace polar es, por definición, una molécula polar."

explicacion: |
  Falso. Depende también de la geometría: si es muy simétrica (como CO2 o CH4), los enlaces polares se pueden cancelar entre sí.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["teoria", "vsepr"]

respuesta: "Repulsión de pares de electrones de la capa de valencia"
tipo: mc
opciones_explicitas: ["Repulsión de pares de electrones de la capa de valencia", "Velocidad de electrones en la capa de valencia", "Vibración de electrones en la capa de valencia", "Valencia de electrones por repulsión"]

enunciado: "¿Qué significa la sigla VSEPR (RPECV en español) respecto a la disposición de los electrones en una molécula?"

explicacion: |
  VSEPR = "Valence Shell Electron Pair Repulsion". Los pares de electrones de la capa de valencia se repelen y buscan la máxima distancia posible entre sí.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["geometria", "angulos"]

respuesta: "plana"
tipo: completar
respuestas_validas:
  - "plana"

enunciado: "La geometría con 3 pares de electrones enlazantes y un ángulo de 120 grados es la trigonal ___."

explicacion: |
  Con 3 grupos de electrones, la forma que minimiza la repulsión es un triángulo equilátero en un plano: trigonal plana.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["molecula", "metano"]

respuesta: verdadero
tipo: vf

enunciado: "¿El metano (CH4) tiene una geometría molecular tetraédrica?"

explicacion: |
  Verdadero. El carbono tiene 4 pares enlazantes con los hidrógenos y ningún par libre: tetraedro perfecto, ángulos de 109,5°.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "avanzado"
  tags: ["vsepr", "calculo"]

variables:
  escenario: [[4, 1, "piramidal trigonal"], [4, 2, "angular"], [4, 0, "tetraedrica"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][2]
tipo: mc
opciones_explicitas: ["piramidal trigonal", "angular", "tetraedrica"]

enunciado: "Si una molécula tiene {escenario[idx][0]} pares de electrones en total alrededor del átomo central, de los cuales {escenario[idx][1]} son pares libres, ¿cuál es su geometría molecular?"

explicacion: |
  Con 4 pares totales: 1 libre da piramidal trigonal (NH₃), 2 libres dan angular (H₂O), 0 libres dan tetraédrica (CH₄).
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["polaridad", "ejemplos"]

respuesta: "NH3 (amoníaco)"
tipo: mc
opciones_explicitas: ["NH3 (amoníaco)", "CO2 (dióxido de carbono)", "CH4 (metano)", "BF3 (trifluoruro de boro)"]

enunciado: "¿Cuál de las siguientes moléculas es polar debido a una geometría asimétrica (piramidal trigonal, con un par libre)?"

explicacion: |
  El NH₃ tiene geometría piramidal trigonal (asimétrica, por el par libre del nitrógeno), lo que deja un momento dipolar neto. CO2, CH4 y BF3 son todas geometrías simétricas que cancelan la polaridad.
```

## Sección: hidrocarburos-alcanos-alquenos-alquinos (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["hidrocarburos", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Un hidrocarburo es un compuesto orgánico formado exclusivamente por átomos de carbono e hidrógeno."

explicacion: |
  Correcto. Por definición, los hidrocarburos contienen únicamente C y H.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "alcanos"]

respuesta: "ano"
tipo: completar
respuestas_validas:
  - "ano"

enunciado: "Los alcanos, con un solo tipo de enlace entre carbonos, terminan con el sufijo ___."

explicacion: |
  Se nombran con la terminación -ano (metano, etano, propano...).
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["alcanos", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "Los alcanos se caracterizan por tener únicamente enlaces sencillos (simples) entre sus átomos de carbono."

explicacion: |
  Correcto. Son hidrocarburos saturados: todos sus enlaces C-C son simples.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["alcanos", "formula", "calculo"]

variables:
  n: uno_de([1, 2, 3, 4, 5])

respuesta: 2 * n + 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá la cantidad de átomos de hidrógeno en un alcano con {n} átomos de carbono."

pasos:
  - "Fórmula general: CnH(2n+2)"

explicacion: |
  H = 2×{n} + 2.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["alcanos", "nomenclatura", "formula"]

variables:
  datos: [["metano", "CH4"], ["etano", "C2H6"], ["propano", "C3H8"], ["butano", "C4H10"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["CH4", "C2H6", "C3H8", "C4H10"]

enunciado: "¿Cuál es la fórmula molecular del {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]} tiene fórmula {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "alquenos"]

respuesta: "eno"
tipo: completar
respuestas_validas:
  - "eno"

enunciado: "Los alquenos, con al menos un doble enlace, terminan con el sufijo ___."

explicacion: |
  Los alquenos son insaturados: al menos un doble enlace C=C, sufijo "-eno".
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["estructura", "alquenos"]

respuesta: verdadero
tipo: vf

enunciado: "Un alqueno tiene al menos un enlace doble entre carbonos."

explicacion: |
  Correcto. Esa es la característica que distingue alquenos de alcanos (simple) y alquinos (triple).
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["formula_molecular", "alquenos"]

variables:
  n: uno_de([2, 3, 4, 5])

respuesta: 2 * n
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá la cantidad de hidrógenos de un alqueno con {n} carbonos y 1 doble enlace."

pasos:
  - "Fórmula: CnH2n"

explicacion: |
  H = 2×{n}.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["eteno", "biologia"]

respuesta: verdadero
tipo: vf

enunciado: "El eteno (C2H4) también se llama etileno y es la hormona vegetal responsable de la maduración de las frutas."

explicacion: |
  Verdadero. El eteno regula naturalmente la maduración en plantas.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "alquinos"]

respuesta: "ino"
tipo: completar
respuestas_validas:
  - "ino"

enunciado: "Los alquinos, con al menos un triple enlace, terminan con el sufijo ___."

explicacion: |
  Sufijo "-ino" para hidrocarburos con al menos un triple enlace C≡C.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["estructura", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un alquino tiene al menos un enlace triple entre carbonos?"

explicacion: |
  Correcto. Es la característica definitoria de los alquinos.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["formula_molecular", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5])

respuesta: 2 * n - 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá la cantidad de hidrógenos de un alquino lineal con {n} carbonos."

pasos:
  - "Fórmula: CnH(2n-2)"

explicacion: |
  H = 2×{n} - 2.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "usos"]

respuesta: verdadero
tipo: vf

enunciado: "¿El etino (C2H2) también se llama acetileno y se usa comúnmente en soldadura?"

explicacion: |
  Verdadero. Su combustión alcanza temperaturas muy altas, útil en sopletes de soldadura.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["alcanos", "saturados"]

respuesta: verdadero
tipo: vf

enunciado: "Los alcanos se llaman saturados porque tienen la máxima cantidad posible de hidrógenos en su estructura."

explicacion: |
  Correcto. Con enlaces simples no queda lugar para más hidrógenos sin romper la cadena de carbonos.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["alquenos", "alquinos", "insaturados"]

respuesta: falso
tipo: vf

enunciado: "Los alquenos y alquinos se llaman insaturados porque tienen MÁS hidrógenos que el alcano equivalente."

explicacion: |
  Falso. Tienen MENOS hidrógenos que el alcano de igual número de carbonos, por los enlaces dobles o triples.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "enlaces"]

variables:
  tabla: [["-ano", "simple"], ["-eno", "doble"], ["-ino", "triple"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["simple", "doble", "triple"]

enunciado: "El sufijo {tabla[idx][0]} indica que el hidrocarburo tiene un enlace de tipo..."

explicacion: |
  -ano (simple), -eno (doble), -ino (triple).
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["alquenos", "hidrogenos"]

respuesta: verdadero
tipo: vf

enunciado: "Un alqueno con 2 dobles enlaces tendría aún menos hidrógenos que uno con sólo 1 doble enlace, para el mismo número de carbonos."

explicacion: |
  Verdadero. Cada enlace múltiple adicional resta 2 hidrógenos más.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["comparacion", "formula"]

variables:
  n: uno_de([3, 4, 5, 6])

respuesta: (2 * n + 2) - (2 * n - 2)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para {n} carbonos, ¿cuántos hidrógenos MÁS tiene el alcano que el alquino (con 1 triple enlace)?"

pasos:
  - "H alcano = 2n+2, H alquino = 2n-2"

explicacion: |
  Diferencia = (2×{n}+2) - (2×{n}-2) = 4, siempre — la diferencia entre alcano y alquino de igual n es constante.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "avanzado"
  tags: ["clasificacion", "formula"]

respuesta: "alqueno"
tipo: mc
opciones_explicitas: ["alqueno", "alcano", "alquino", "no es un hidrocarburo"]

enunciado: "Una molécula con 4 carbonos y 8 hidrógenos (C4H8), ¿a qué familia pertenece?"

explicacion: |
  Para n=4, un alcano tendría 10 H, un alquino 6 H — 8 H coincide con la fórmula de alqueno (2n = 8).
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["metano", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "El metano (CH4) puede existir como alqueno o alquino, dependiendo de las condiciones de reacción."

explicacion: |
  Falso. Con un solo carbono no hay otro carbono con el que formar un enlace doble o triple — el metano es siempre un alcano.
```

## Sección: nanotecnologia (22 preguntas)

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["comparacion", "escala"]

variables:
  escala: uno_de(["macro", "micro", "nano"])

respuesta: falso
tipo: vf

enunciado: "Las propiedades de los materiales a nanoescala son idénticas a las que observamos a escala macroscópica."

explicacion: |
  Falso. A nanoescala, los materiales exhiben propiedades físicas, químicas y biológicas únicas debido a efectos cuánticos y al aumento drástico de la relación superficie-volumen.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "catalisis"]

variables:
  rol: "catalizador"

respuesta: verdadero
tipo: vf

enunciado: "Las nanopartículas se utilizan frecuentemente en catálisis porque su alta superficie específica permite acelerar reacciones sin consumirse en el proceso."

explicacion: |
  Verdadero. La mayor área superficial facilita el contacto con los reactivos, aumentando la eficiencia de la reacción sin alterar la naturaleza del catalizador.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fuerzas", "fisica"]

variables:
  fuerza_gravedad: "dominante"
  fuerza_electrica: "dominante"

respuesta: fuerza_electrica
tipo: input

enunciado: "A escalas nanométricas, las fuerzas de Van der Waals y las interacciones electrostáticas dominan sobre la ___."

explicacion: |
  Gravedad. A esta escala, la masa es tan pequeña que las fuerzas gravitatorias son insignificantes comparadas con las interacciones electromagnéticas.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["diseño", "ingenieria"]

variables:
  enfoque: "naturaleza"
  enfoque_nano: "a_medida"

respuesta: enfoque_nano
tipo: input

enunciado: "La nanotecnología permite diseñar materiales ___ en lugar de buscar propiedades existentes en la naturaleza."

explicacion: |
  A medida (o a la medida). Los científicos pueden construir materiales átomo por átomo para obtener características específicas como conductividad o resistencia.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["definicion", "escala"]

variables:
  nano: 1000000000
  micro: 1000000

respuesta: 1000
tipo: input

enunciado: "¿Cuántas veces más pequeña es una escala nanométrica (1 nm) comparada con una micrométrica (1 µm)?"

explicacion: |
  1000 veces. Un micrómetro es $10^{-6}$ m y un nanómetro es $10^{-9}$ m. La diferencia es un factor de $10^3$.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "medicina"]

variables:
  vehiculo: "nanoparticulas_lipidicas"

respuesta: vehiculo
tipo: input

enunciado: "En el ámbito médico, se investigan las ___ para administrar fármacos de manera dirigida y eficiente."

explicacion: |
  Nanopartículas lipídicas. Estas estructuras pueden encapsular fármacos y liberarlos en sitios específicos del cuerpo, reduciendo efectos secundarios.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["propiedades", "opticas"]

variables:
  fenomeno: "resonancia_plasmon_superficial"

respuesta: fenomeno
tipo: input

enunciado: "El cambio de color en nanopartículas metálicas se explica mediante el fenómeno de resonancia de plasmón ___."

explicacion: |
  Superficial. Es la oscilación colectiva de los electrones libres en la superficie del metal cuando interactúan con la luz.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "opticas"]

variables:
  electrones: "superficie"
  electrones_bulk: "interior"

respuesta: electrones
tipo: input

enunciado: "La resonancia de plasmón superficial implica la interacción de la luz con los electrones de la ___ de la nanopartícula."

explicacion: |
  Superficie. A diferencia de los metales macroscópicos donde los electrones están confinados en el volumen, en la nanoescala los de superficie son clave para la respuesta óptica.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "catalisis"]

variables:
  area: "alta"
  area: "baja"

respuesta: area
tipo: input

enunciado: "Las nanopartículas son excelentes catalizadores porque poseen un área superficial ___ en relación con su volumen."

explicacion: |
  Alta. Un mayor área superficial expone más sitios activos para que ocurran las reacciones químicas.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["definicion", "escala"]

variables:
  atomos: random(10, 100)

respuesta: verdadero
tipo: vf

enunciado: "Una nanopartícula típicamente contiene entre 100 y 100.000 átomos."

explicacion: |
  Verdadero. La definición de nanopartícula suele abarcar estructuras que van desde unos pocos átomos hasta unos pocos cientos de nanómetros de diámetro.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fuerzas", "interacciones"]

variables:
  fuerza: "Van_der_Waals"

respuesta: fuerza
tipo: input

enunciado: "A nanoescala, las fuerzas de ___ juegan un papel crucial en la estabilidad y agregación de las partículas."

explicacion: |
  Van der Waals. Estas fuerzas de atracción débiles, normalmente insignificantes a gran escala, se vuelven dominantes cuando la masa es pequeña.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "industria"]

variables:
  sector: "agro"
  sector: "farmaceutico"

respuesta: sector
tipo: input

enunciado: "En Argentina, la nanotecnología tiene aplicaciones relevantes en el sector agroindustrial, por ejemplo en la liberación controlada de ___."

explicacion: |
  Fertilizantes o pesticidas. Las nanopartículas permiten una entrega más eficiente y menos contaminante de insumos agrícolas.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "electricas"]

variables:
  propiedad: "conductividad"

respuesta: propiedad
tipo: input

enunciado: "La nanotecnología permite modificar la ___ eléctrica de los materiales, creando nuevos conductores o aislantes."

explicacion: |
  Conductividad. Al cambiar la estructura y el tamaño, se altera el comportamiento de los electrones, modificando cómo fluye la corriente.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "mecanicas"]

variables:
  propiedad: "resistencia"

respuesta: propiedad
tipo: input

enunciado: "Los nanomateriales como los nanotubos de carbono se destacan por su extrema ___ mecánica."

explicacion: |
  Resistencia. La estructura atómica ordenada y la falta de defectos macroscópicos les confieren una resistencia muy superior a la del acero.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["matematica", "conversion"]

variables:
  nm: 5
  um: 0.005

respuesta: um
tipo: input

enunciado: "5 nanómetros equivalen a ___ micrómetros."

explicacion: |
  0.005. Para convertir nanómetros a micrómetros, se divide por 1000 ($5 / 1000 = 0.005$).
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fuerzas", "estabilidad"]

variables:
  fuerza: "electrostatica"

respuesta: fuerza
tipo: input

enunciado: "La repulsión ___ entre nanopartículas cargadas ayuda a evitar su agregación y mantiene la suspensión estable."

explicacion: |
  Electrostatica. Las cargas superficiales generan fuerzas de repulsión que contrarrestan las fuerzas de atracción de Van der Waals.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["definicion", "concepto"]

variables:
  campo: "nanotecnologia"

respuesta: campo
tipo: input

enunciado: "La ___ es el campo que manipula la materia a escala nanométrica."

explicacion: |
  Nanotecnología. Se define por la capacidad de controlar la materia átomo por átomo o molécula por molécula.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "opticas"]

variables:
  propiedad: "color"

respuesta: propiedad
tipo: input

enunciado: "Un ejemplo clásico de propiedad única a nanoescala es el cambio de ___ en el oro."

explicacion: |
  Color. El oro nano puede ser rojo, púrpura o azul, a diferencia del amarillo macroscópico.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "filtracion"]

variables:
  aplicacion: "filtracion_agua"

respuesta: aplicacion
tipo: input

enunciado: "Las membranas con nanocanales se utilizan para la ___ de contaminantes y virus."

explicacion: |
  Filtración de agua. Los poros a escala nanométrica permiten el paso del agua pero retienen impurezas y microorganismos.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fisica", "cuantica"]

variables:
  efecto: "cuantico"

respuesta: efecto
tipo: input

enunciado: "A escalas muy pequeñas, los efectos ___ comienzan a dominar el comportamiento de los materiales."

explicacion: |
  Cuánticos. La física clásica deja de ser suficiente para describir el comportamiento de la materia a esta escala.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["diseño", "ingenieria"]

variables:
  metodo: "atomico"

respuesta: metodo
tipo: input

enunciado: "La nanotecnología permite construir materiales ___ por átomo o molécula."

explicacion: |
  A medida. Esto permite obtener características específicas que no existen en la naturaleza.
```

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "superficie"]

variables:
  razon: "superficie"

respuesta: razon
tipo: input

enunciado: "La alta reactividad de las nanopartículas se debe a que una gran fracción de átomos está en la ___."

explicacion: |
  Superficie. Las reacciones químicas ocurren en la superficie, por lo que más superficie significa mayor reactividad.
```

## Sección: grupos-funcionales (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "Un grupo funcional es un átomo o grupo de átomos que le da a la molécula un comportamiento químico característico."

explicacion: |
  Correcto. Los grupos funcionales determinan las propiedades químicas y la reactividad de una molécula orgánica.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["hidroxilo", "alcoholes"]

respuesta: "hidroxilo"
tipo: mc
opciones_explicitas: ["hidroxilo", "carbonilo", "carboxilo", "amino"]

enunciado: "El grupo funcional -OH se denomina..."

explicacion: |
  El grupo -OH (oxígeno + hidrógeno) se llama grupo hidroxilo.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["nomenclatura", "alcoholes"]

respuesta: "ol"
tipo: completar
respuestas_validas:
  - "ol"

enunciado: "Los compuestos con grupo hidroxilo (-OH) se nombran con el sufijo ___."

explicacion: |
  El sufijo -ol indica un alcohol (metanol, etanol...).
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["etanol", "alcoholes"]

respuesta: verdadero
tipo: vf

enunciado: "El etanol es un ejemplo de alcohol, ya que posee un grupo funcional hidroxilo (-OH)."

explicacion: |
  Correcto. El etanol (CH3CH2OH) es el alcohol más común.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["aldehido", "cetona", "carbonilo"]

respuesta: verdadero
tipo: vf

enunciado: "El aldehído y la cetona comparten el mismo grupo carbonilo (C=O), pero en distinta posición."

explicacion: |
  En el aldehído el carbono está en un extremo de la cadena; en la cetona, unido a otros dos carbonos.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["aldehido", "cetona", "estructura"]

respuesta: "aldehído"
tipo: mc
opciones_explicitas: ["aldehído", "cetona", "ácido carboxílico", "amina"]

enunciado: "Si el carbono del grupo carbonilo está en la PUNTA de la cadena, es un..."

explicacion: |
  El grupo C=O en un extremo de la cadena define un aldehído.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["cetona", "estructura"]

respuesta: "cetona"
tipo: mc
opciones_explicitas: ["cetona", "aldehído", "ácido carboxílico", "amina"]

enunciado: "Si el carbono del grupo carbonilo está en el MEDIO de la cadena, es una..."

explicacion: |
  El carbonilo unido a dos carbonos vecinos define una cetona.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["acido_carboxilico", "nomenclatura"]

respuesta: "carboxilo"
tipo: mc
opciones_explicitas: ["carboxilo", "carbonilo", "hidroxilo", "amino"]

enunciado: "El grupo funcional -COOH se llama..."

explicacion: |
  El grupo carboxilo combina un carbonilo (C=O) y un hidroxilo (-OH) en el mismo carbono.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["acido_acetico", "vinagre"]

respuesta: verdadero
tipo: vf

enunciado: "El ácido acético (vinagre) tiene grupo funcional carboxilo."

explicacion: |
  El ácido acético (CH3COOH) es un ácido carboxílico.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["quimica_organica"]

respuesta: "amino"
tipo: mc
opciones_explicitas: ["amino", "carboxilo", "ester", "hidroxilo"]

enunciado: "El grupo funcional -NH2 se llama..."

explicacion: |
  El grupo -NH2 es el grupo amino, característico de las aminas.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["reactividad", "generalizacion"]

respuesta: verdadero
tipo: vf

enunciado: "Dos moléculas distintas que comparten el mismo grupo funcional reaccionan de forma parecida."

explicacion: |
  Verdadero. El grupo funcional determina el comportamiento químico principal de la molécula.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: falso
tipo: vf

enunciado: "Para predecir el comportamiento de un compuesto orgánico hace falta memorizar cada molécula por separado, sin poder generalizar por grupo funcional."

explicacion: |
  Falso. La química orgánica se apoya justamente en generalizar por grupo funcional.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["reacciones", "esterificacion"]

respuesta: "ester"
tipo: completar
respuestas_validas:
  - "ester"

enunciado: "El grupo funcional que se forma cuando un ácido reacciona con un alcohol se llama ___."

explicacion: |
  Esa reacción (esterificación) produce un éster y agua.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["quimica_organica"]

variables:
  datos: [["hidroxilo", "-OH"], ["carboxilo", "-COOH"], ["amino", "-NH2"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["-OH", "-COOH", "-NH2"]

enunciado: "¿Cuál es la fórmula del grupo funcional {datos[idx][0]}?"

explicacion: |
  El grupo {datos[idx][0]} tiene fórmula {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["proteinas", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace peptídico que une aminoácidos en las proteínas se forma por la reacción entre un grupo amino y un grupo carboxilo."

explicacion: |
  Correcto. La deshidratación entre el -NH2 de un aminoácido y el -COOH de otro forma el enlace peptídico.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["glucidos"]

respuesta: verdadero
tipo: vf

enunciado: "Los glúcidos se caracterizan por tener muchos grupos hidroxilo y un grupo carbonilo (aldehído o cetona)."

explicacion: |
  Correcto. Los glúcidos son polihidroxialdehídos o polihidroxicetonas.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["proteinas"]

respuesta: "hidroxilo"
tipo: mc
opciones_explicitas: ["hidroxilo", "amino", "carboxilo", "enlace peptidico"]

enunciado: "¿Cuál de estos NO es un componente estructural básico de un aminoácido?"

explicacion: |
  Los aminoácidos tienen grupo amino y grupo carboxilo. El hidroxilo es propio de alcoholes/glúcidos, no la base de un aminoácido.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "avanzado"
  tags: ["carboxilo", "carbonilo"]

respuesta: verdadero
tipo: vf

enunciado: "El grupo carboxilo (-COOH) contiene un grupo carbonilo (C=O) dentro de su estructura."

explicacion: |
  Correcto. El carboxilo combina un carbonilo y un hidroxilo sobre el mismo átomo de carbono.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "avanzado"
  tags: ["comparacion", "acidez"]

respuesta: "un ácido carboxílico (-COOH)"
tipo: mc
opciones_explicitas: ["un ácido carboxílico (-COOH)", "un alcohol (-OH)", "una amina (-NH2)", "un éster"]

enunciado: "¿Cuál de estos grupos funcionales le da a la molécula propiedades ácidas (puede donar un H+ fácilmente)?"

explicacion: |
  El grupo carboxilo es el que da carácter ácido a la molécula — de ahí el nombre "ácido" carboxílico.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "El nombre de la familia de un compuesto orgánico (alcohol, ácido, amina, etc.) se define por su grupo funcional, no por el largo de su cadena de carbono."

explicacion: |
  Correcto. El largo de la cadena cambia el nombre específico (etanol, propanol...) pero la familia (alcohol) la define el grupo -OH presente.
```

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
respuestas_validas:
  - "metal"

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
respuestas_validas:
  - "elemento"

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
respuestas_validas:
  - "ferr"

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
respuestas_validas:
  - "cupr"

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

