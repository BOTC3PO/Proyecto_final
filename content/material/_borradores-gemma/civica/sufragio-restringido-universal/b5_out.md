### 1 — El sufragio en la Constitución de 1853
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["historia", "derechos"]

variables:
  escenario: uno_de([["Constitución de 1853", "restringido"], ["Ley de Ciudadanía (1892)", "restringido"]])
  idx: uno_de([0, 1])

enunciado: "En el contexto de la Constitución de 1853, el sufragio era de carácter ___."

opciones_explicitas: ["universal", "restringido", "proporcional"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  Durante la primera etapa de la organización nacional, el sufragio era indirecto y restringido, no cumpliendo con los estándares de universalidad modernos.
```

### 2 — Cronología de la ampliación del voto
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["historia", "ordenamiento"]

variables:
  hito: uno_de([
    ["Ley Sáenz Peña", "1912"],
    ["Voto Femenino (Ley 14.243)", "1947"],
    ["Sufragio Universal (Ley 18.640)", "1972"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Ordena cronológicamente los hitos del sufragio en Argentina, partiendo desde el más antiguo al más reciente."

opciones_explicitas: ["Ley Sáenz Peña", "Voto Femenino (Ley 14.243)", "Sufragio Universal (Ley 18.640)"]
respuesta: ["Ley Sáenz Peña", "Voto Femenino (Ley 14.243)", "Sufragio Universal (Ley 18.640)"]
tipo: ordenar

explicacion: |
  La evolución fue: 1912 (Ley Sáenz Peña - voto secreto y obligatorio), 1947 (Voto Femenino) y 1972 (Ampliación definitiva de la base electoral).
```

### 3 — El año de la Ley Sáenz Peña
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["fechas", "leyes"]

variables:
  datos: [["Ley Sáenz Peña", "1912"], ["Ley de Ciudadanía", "1892"]]
  idx: uno_de([0, 1])

enunciado: "La implementación del voto universal, secreto y obligatorio en Argentina ocurrió en el año ___."

respuestas_validas: ["1912", "1892"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La Ley 8.830, conocida como Ley Sáenz Peña, fue sancionada en 1912 para terminar con el fraude electoral.
```

### 4 — Carácter del voto en 1853
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  caso: uno_de([["1853", "restringido"], ["1912", "universal"]])
  idx: uno_de([0, 1])

enunciado: "Si comparamos el sistema de ___ con el de 1912, el primero era de tipo ___."

opciones_explicitas: ["1853", "1912"]
respuesta: caso[idx][1]
tipo: mc

explicacion: |
  El sistema de 1853 era restringido (por género, alfabetismo y propiedad en la práctica), mientras que 1912 introdujo el carácter universal/secreto.
```

### 5 — El hito de 1947
```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["derechos_mujer", "historia"]

variables:
  evento: uno_de([["Voto Femenino", "1947"], ["Ley Sáenz Peña", "1912"]])
  idx: uno_de([0, 1])

enunciado: "El hito histórico que permitió el ejercicio del voto por parte de las mujeres en Argentina fue el ___ en el año ___."

respuestas_validas: ["Voto Femenino", "1947"]
tipo: completar

explicacion: |
  La Ley 14.243 sancionada en 1947 garantizó la participación política de las mujeres en el sufragio argentino.
```