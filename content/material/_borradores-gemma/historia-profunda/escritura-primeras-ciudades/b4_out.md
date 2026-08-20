### 1 — El impacto de la escritura
```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["escritura", "sociedad", "memoria"]

tipo: mc
opciones_explicitas: ["Permitió la transmisión de conocimiento más allá de la memoria oral", "Eliminó la necesidad de la comunicación verbal", "Redujo el tamaño de las poblaciones", "Hizo que la historia fuera irrelevante"]

enunciado: "La invención de la escritura en las primeras civilizaciones permitió que el conocimiento fuera ___________."

explicacion: |
  La escritura permitió que la información no dependiera únicamente de la memoria de los individuos, facilitando la acumulación de saber a través de las generaciones.
```

### 2 — Administración y complejidad
```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["administracion", "burocracia", "estado"]

tipo: completar
respuestas_validas: ["administrar", "controlar"]

enunciado: "El desarrollo de sistemas de escritura fue fundamental para poder ___________ las excedentes de producción y los tributos en sociedades cada vez más complejas."

explicacion: |
  La complejidad social de las primeras ciudades requería un registro preciso de recursos, lo que impulsó la creación de sistemas de contabilidad y administración.
```

### 3 — Evolución de la comunicación
```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["evolucion", "comunicacion"]

tipo: ordenar
opciones_explicitas: ["Tradición oral", "Signos pictográficos", "Escritura fonética"]

enunciado: "Ordena cronológicamente la evolución de los sistemas de registro de información en las primeras civilizaciones:"

explicacion: |
  La evolución comenzó con la comunicación oral, pasó por representaciones de objetos (pictogramas) y finalmente hacia sistemas que representaban sonidos (fonética).
```

### 4 — El rol de la escritura en el Estado
```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["estado", "leyes", "orden"]

variables:
  escenario: uno_de([["leyes escritas", "orden social"], ["leyes orales", "caos"]])
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["Estabilidad y orden social", "Inestabilidad constante", "Desigualdad extrema"]

enunciado: "Cuando las sociedades pasaron de leyes orales a {escenario[idx]}, el resultado principal fue la ___________."

explicacion: |
  La codificación de leyes por escrito permitió una aplicación más uniforme y predecible de la justicia, contribuyendo a la estabilidad del Estado.
```

### 5 — La memoria histórica
```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["memoria", "registro", "tiempo"]

tipo: input
tolerancia_abs: 0

enunciado: "Antes de la escritura, la historia dependía de la memoria. Con la escritura, la historia se convierte en un ___________ que trasciende el tiempo."

pasos:
  - "Identificar el concepto de registro o documento"

explicacion: |
  La escritura transformó la memoria humana en un registro físico, permitiendo que la historia fuera un objeto de estudio permanente y no algo sujeto al olvido biológico.
```