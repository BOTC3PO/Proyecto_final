### 1 — ¿Qué define la identidad del elemento?
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleo", "protones", "identidad"]

respuesta: "protones"
tipo: completar
respuestas_validas: ["protones"]

enunciado: "Un átomo es identificado químicamente por su número atómico, el cual corresponde a la cantidad de ___ en su núcleo."

explicacion: |
  El número atómico (Z) indica la cantidad de protones. Cambiar el número de protones cambia el elemento químico, mientras que cambiar el número de neutrones crea un isótopo.
```

### 2 — La fuerza nuclear fuerte y su alcance
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "intermedio"
  tags: ["fuerza_nuclear", "alcance", "interacciones"]

variables:
  es_larga_distancia: falso

respuesta: es_larga_distancia
tipo: vf

enunciado: "¿Es la fuerza nuclear fuerte una interacción de largo alcance, similar a la fuerza electromagnética o la gravedad?"

explicacion: |
  Falso. La fuerza nuclear fuerte es de muy corto alcance (actúa solo a distancias de aproximadamente 1-3 femtómetros). Si fuera de largo alcance, todo el universo colapsaría en un núcleo.
```

### 3 — Composición de un isótopo
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["isótopos", "neutrones"]

variables:
  datos: [[6, 6], [6, 7], [6, 8], [6, 9]]
  idx: uno_de([0,1,2,3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["6", "7", "8", "9"]

enunciado: "Si tenemos un átomo de Carbono-12 (6 protones y 6 neutrones) y queremos formar un isótopo con el mismo número atómico pero con 7 neutrones, ¿cuántos neutrones tendrá el nuevo isótopo?"

explicacion: |
  Los isótopos tienen el mismo número de protones pero diferente número de neutrones. En este caso, el Carbono-13 tiene 7 neutrones.
```

### 4 — Estabilidad nuclear y fuerzas en conflicto
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "avanzado"
  tags: ["estabilidad", "fuerza_electromagnetica", "fuerza_nuclear"]

respuesta: "fuerza_nuclear_fuerte"
tipo: completar
respuestas_validas: ["fuerza_nuclear_fuerte"]

enunciado: "En un núcleo con muchos protones, existe una tensión constante entre la repulsión electromagnética de los protones y la ___ que mantiene unido al núcleo."

explicacion: |
  La fuerza nuclear fuerte es la que contrarresta la repulsión electrostática entre protones cargados positivamente, permitiendo la cohesión del núcleo.
```

### 5 — Componentes del núcleo
```
metadata:
  materia: "fisica"
  tema: "estructura_del_nucleo_atomico"
  nivel: "basico"
  tags: ["nucleones", "particulas"]

respuesta: ["protones", "neutrones"]
tipo: ordenar

opciones_explicitas: ["protones", "neutrones", "electrones"]

explicacion: |
  Los nucleones son las partículas que componen el núcleo (protones y neutrones). Los electrones orbitan alrededor del núcleo en la corteza atómica.
```