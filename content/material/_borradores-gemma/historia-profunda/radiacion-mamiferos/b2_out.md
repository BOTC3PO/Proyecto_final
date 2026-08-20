### 1 — Origen de los mamíferos
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["evolucion", "dinosaurios"]

tipo: mc
opciones_explicitas: ["Eran grandes y dominantes", "Eran pequeños y nocturnos", "Eran reptiles gigantes", "Eran exclusivamente acuáticos"]

enunciado: "Durante la era de los dinosaurios, los ancestros de los mamíferos se caracterizaban por ser ___."

explicacion: |
  Hace aproximadamente 200 millones de años, los mamíferos coexistieron con los dinosaurios, pero ocupaban nichos ecológicos pequeños y evitaban la luz del día para no ser depredados.
```

### 2 — El gran cambio tras la extinción
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["extincion_kp", "adaptacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Extinción K-Pg", "Diversificación"], ["Evento de extinción", "Radiación"]]

tipo: completar
respuestas_validas: ["Diversificación", "Radiación"]

enunciado: "Tras la extinción masiva del Cretácico-Paleógeno (K-Pg), los mamíferos experimentaron una gran ___ en tamaño y forma."

pasos:
  - "Identificar el evento geológico mencionado."
  - "Relacionar la desaparición de los dinosaurios con la apertura de nichos vacíos."

explicacion: |
  La desaparición de los dinosaurios no solo eliminó competidores, sino que permitió que los mamíferos ocuparan nuevos roles ecológicos, llevando a una rápida evolución.
```

### 3 — Cronología evolutiva
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["cronologia", "geologia"]

tipo: ordenar
opciones_explicitas: ["Aparición de mamíferos pequeños", "Dominio de los dinosaurios", "Extinción K-Pg", "Diversificación de mamíferos modernos"]

enunciado: "Ordene cronológicamente los siguientes eventos históricos:"

explicacion: |
  Primero aparecieron los mamíferos (coexistiendo con dinosaurios), luego ocurrió la extinción masiva, lo que finalmente permitió la radiación de los mamíferos actuales.
```

### 4 — Nichos ecológicos
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["ecologia", "evolucion"]

tipo: mc
opciones_explicitas: ["Diurno", "Nocturno", "Subterráneo", "Acuático"]

enunciado: "Para evitar la competencia y la depredación por parte de los dinosaurios, la mayoría de los mamíferos primitivos adoptaron un estilo de vida ___."

explicacion: |
  La vida nocturna fue una estrategia adaptativa clave que permitió a los mamíferos sobrevivir y prosperar en un mundo dominado por grandes reptiles.
```

### 5 — El impacto de la extinción
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["ecologia", "evolucion"]

variables:
  caso_idx: uno_de([0, 1])
  info: [["K-Pg", "liberó nichos"], ["Extinción", "permitió la radiación"]]

tipo: input
tolerancia_abs: 0

enunciado: "El evento de extinción ___ fue el catalizador que permitió la expansión de los mamíferos."

explicacion: |
  La extinción K-Pg eliminó a los grandes depredadores y herbívoros dominantes, dejando el camino libre para que los mamíferos evolucionaran hacia formas más grandes y diversas.
```