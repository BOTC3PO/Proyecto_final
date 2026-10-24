### 1 — El fin de la dictadura
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "dictadura", "argentina"]

respuesta: "democracia"
tipo: completar
respuestas_validas: ["democracia"]

enunciado: "Tras el fin de la última dictadura militar en Argentina, las elecciones de 1983 marcaron el retorno a la ________."

explicacion: |
  Las elecciones de octubre de 1983 pusieron fin a la última dictadura cívico-militar, devolviendo el poder a los representantes elegidos por el pueblo.
```

### 2 — El primer presidente electo
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["alfonsin", "presidencia", "1983"]

opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Alfonsín", "Raúl Alfonsín"]
respuesta: "Raúl Alfonsín"
tipo: mc

enunciado: "El primer presidente elegido mediante el sufragio universal tras el fin de la dictadura fue:"

explicacion: |
  Raúl Alfonsín, de la Unión Cívica Radical, asumió la presidencia el 10 de diciembre de 1983.
```

### 3 — El juicio histórico
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "derechos_humanos", "juicio_a_las_juntas"]

opciones_explicitas: ["Juicio a las Juntas", "Juicio a los Militares", "Juicio a las Dictaduras", "Juicio a las Juntas"]
respuesta: "Juicio a las Juntas"
tipo: mc

enunciado: "El proceso judicial de 1985 para juzgar a las cúpulas militares se conoce como el:"

explicacion: |
  El Juicio a las Juntas fue un hito histórico en la justicia argentina y un precedente mundial en el juzgamiento de crímenes de lesa humanidad.
```

### 4 — Secuencia de la transición
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["transicion", "procesos", "orden"]

opciones_explicitas: ["Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín", "Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín"]
respuesta: ["Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes hitos del proceso de democratización:"

explicacion: |
  Primero terminó la dictadura, luego se realizaron las elecciones y finalmente el presidente electo asumió su cargo.
```

### 5 — El concepto de Memoria
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["derechos_humanos", "etica", "memoria"]

variables:
  escenario: uno_de([
    ["reparación", "reparación"],
    ["olvido", "olvido"],
    ["justicia", "justicia"]
  ])

respuesta: "justicia"
tipo: mc
opciones_explicitas: ["reparación", "olvido", "justicia"]

enunciado: "En el marco de los Derechos Humanos, la política de Estado para evitar la repetición de los crímenes de la dictadura se basa en el trípode: Memoria, Verdad y {escenario[0]}."

explicacion: |
  El lema "Memoria, Verdad y Justicia" es el pilar fundamental de los organismos de Derechos Humanos en Argentina para la reconstrucción del tejido social.
```