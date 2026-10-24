### 1 — Identificación de partículas
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

### 2 — Cálculo de masa atómica
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["masa_atomica", "nucleones"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Litio-7", 3, 4],
    ["Carbono-14", 6, 8]
  ]

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

### 3 — Fuerza nuclear fuerte
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

### 4 — Determinación de neutrones
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["neutrones", "calculo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["12", 6],
    ["23", 11]
  ]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["4", "12"]

enunciado: "Un átomo tiene un número de masa (A) de {datos[escenario_idx][0]} y un número atómico (Z) de {datos[escenario_idx][1]}. El número de neutrones es ___."

pasos:
  - "Restar el número atómico (Z) del número de masa (A)."
  - "N = A - Z."

explicacion: |
  Para hallar los neutrones, restamos el número de protones (Z) de la masa total (A).
  Cálculo: {datos[escenario_idx][0]} - {datos[escenario_idx][1]} = {datos[escenario_idx][1]}.
```

### 5 — Secuencia de composición nuclear
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "avanzado"
  tags: ["ordenar", "nucleones"]

respuesta: ["Protones", "Neutrones", "Fuerza Nuclear Fuerte"]
tipo: ordenar
opciones_explicitas: ["Protones", "Neutrones", "Fuerza Nuclear Fuerte"]

enunciado: "Ordene los elementos según el proceso lógico de formación y estabilidad de un núcleo atómico: primero los componentes de carga, luego los componentes neutros y finalmente la interacción que los mantiene unidos."

explicacion: |
  1. Los protones definen la identidad del elemento.
  2. Los neutrones aportan estabilidad y masa.
  3. La fuerza nuclear fuerte actúa para mantener a ambos unidos en el núcleo.
```