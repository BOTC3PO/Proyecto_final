# Fisica — Estructura del nucleo atomico (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Partículas del núcleo

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

### 2 — Composición nuclear

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleones", "definicion"]

respuesta: "verdadero"
tipo: completar
enunciado: "A las partículas que forman el núcleo (protones y neutrones) se las denomina colectivamente como nucleones."

explicacion: |
  Correcto. El término 'nucleón' se utiliza para referirse tanto a protones como a neutrones cuando se habla de su comportamiento en el núcleo.
```

### 3 — Fuerza nuclear fuerte

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

### 4 — Estabilidad y carga

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["carga", "electromagnetismo"]

respuesta: "falso"
tipo: completar
enunciado: "Debido a que los protones tienen carga positiva, la fuerza electromagnética entre ellos es de atracción, lo que ayuda a mantener unido el núcleo."

explicacion: |
  Falso. La fuerza electromagnética entre protones es de repulsión. Es la fuerza nuclear fuerte la que contrarresta esta repulsión para mantener el núcleo unido.
```

### 5 — Componentes del núcleo

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

### 6 — Identificación de partículas

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

### 7 — Cálculo de masa atómica

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

### 8 — Fuerza nuclear fuerte

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

### 9 — Determinación de neutrones

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["neutrones", "calculo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["12", 6], ["23", 11]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "4"
  - "12"

enunciado: "Un átomo tiene un número de masa (A) de {datos[escenario_idx][0]} y un número atómico (Z) de {datos[escenario_idx][1]}. El número de neutrones es ___."

pasos:
  - "Restar el número atómico (Z) del número de masa (A)."
  - "N = A - Z."

explicacion: |
  Para hallar los neutrones, restamos el número de protones (Z) de la masa total (A).
  Cálculo: {datos[escenario_idx][0]} - {datos[escenario_idx][1]} = {datos[escenario_idx][1]}.
```

### 10 — Secuencia de composición nuclear

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

### 11 — ¿Qué define la identidad del elemento?

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

### 12 — La fuerza nuclear fuerte y su alcance

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear", "alcance", "interacciones"]

variables:
  es_larga_distancia: falso

respuesta: es_larga_distancia
tipo: completar
enunciado: "¿Es la fuerza nuclear fuerte una interacción de largo alcance, similar a la fuerza electromagnética o la gravedad?"

explicacion: |
  Falso. La fuerza nuclear fuerte es de muy corto alcance (actúa solo a distancias de aproximadamente 1-3 femtómetros). Si fuera de largo alcance, todo el universo colapsaría en un núcleo.
```

### 13 — Composición de un isótopo

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

### 14 — Estabilidad nuclear y fuerzas en conflicto

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

### 15 — Componentes del núcleo

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

### 16 — Carga del núcleo

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

### 17 — Alcance de la fuerza nuclear fuerte

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear_fuerte", "alcance"]

variables:
  es_corta: verdadero

respuesta: es_corta
tipo: completar
enunciado: "La fuerza nuclear fuerte es una interacción de ___ alcance, lo que la distingue de la fuerza electromagnética que actúa a distancias mayores."

explicacion: |
  La fuerza nuclear fuerte es extremadamente poderosa pero solo actúa a distancias muy cortas (aproximadamente $10^{-15}$ metros). Si los nucleones se separan más allá de ese rango, la fuerza cae drásticamente.
```

### 18 — Composición del isótopo

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

### 19 — Estabilidad nuclear

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

### 20 — Componentes del núcleo

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

### 21 — Composición del núcleo de un isótopo

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

### 22 — Carga eléctrica neta

```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["carga", "electrones", "protones"]

variables:
  datos: [["un átomo neutro de Helio", 2, 2], ["un ion de Litio con 3 protones y 2 electrones", 3, 2], ["un ion de Magnesio con 12 protones y 10 electrones", 12, 10]]
  idx: uno_de([0, 1, 2])
  dato: datos[idx]

respuesta: "positivo"
tipo: mc
opciones_explicitas: ["positivo", "negativo", "neutro"]

enunciado: "Considerando {dato[0]}, si el núcleo tiene {dato[1]} protones y {dato[2]} electrones, la carga eléctrica neta del átomo es ___."

explicacion: |
  La carga total depende de la diferencia entre protones (positivos) y electrones (negativos). 
  En el caso de {dato[0]}, la carga es ___ debido a la diferencia de cargas.
```

### 23 — Estabilidad nuclear y fuerza fuerte

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

### 24 — Identificación de partículas

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

### 25 — Componentes del núcleo en orden de masa

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
