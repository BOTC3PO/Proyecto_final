### 1 — Diferencia con el Derecho Civil
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["distincion", "civil_vs_penal"]

respuesta: "reparar el daño"
tipo: "completar"
respuestas_validas: ["reparar el daño", "reparación del daño", "reparación"]

enunciado: "Mientras que el Derecho Civil busca principalmente ___ causado por un incumplimiento contractual o un ilícito civil, el Derecho Penal busca sancionar una conducta que atenta contra la sociedad."

explicacion: |
  El Derecho Civil tiene un fin resarcitorio (reparar el daño patrimonial o moral), mientras que el Derecho Penal tiene un fin punitivo y de prevención social.
```

### 2 — El rol del Estado en el delito
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["estado", "sujeto_activo"]

variables:
  escenario: uno_de([["robo", "un individuo"], ["homicidio", "una persona"]])

respuesta: verdadero
tipo: "vf"

enunciado: "En el marco del Derecho Penal, cuando se comete un {escenario[1]}, es el Estado quien ejerce el 'ius puniendi' para imponer la sanción, independientemente de la voluntad de la víctima."

explicacion: |
  El Estado tiene el monopolio del ejercicio de la fuerza y la potestad de sancionar (ius puniendi) para mantener el orden social.
```

### 3 — Elementos del tipo penal
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["teoria_del_delito", "elementos"]

respuesta: "el elemento subjetivo"
tipo: "mc"
opciones_explicitas: ["el elemento subjetivo", "el elemento material", "el elemento procesal", "el elemento administrativo"]

enunciado: "Para que una conducta sea considerada delito, no basta con la acción física (tipicidad objetiva); también es fundamental determinar ___ (dolo o culpa), que define la intención del agente."

explicacion: |
  La distinción entre dolo (intención) y culpa (negligencia) es crucial para la aplicación de la pena en el Derecho Penal.
```

### 4 — Secuencia del proceso penal
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["proceso_penal", "orden"]

respuesta: ["investigación", "imputación", "juicio", "sentencia"]
tipo: "ordenar"
opciones_explicitas: ["investigación", "imputación", "juicio", "sentencia"]

enunciado: "Ordene cronológicamente las etapas fundamentales de un proceso penal típico:"

explicacion: |
  El proceso penal sigue una secuencia lógica que va desde la recolección de evidencia hasta la decisión final del juez.
```

### 5 — Naturaleza de la sanción
```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["penas", "sanciones"]

variables:
  tipo_sancion: uno_de([["multa", "económica"], ["prisión", "privativa de la libertad"]])

respuesta: "privativa de la libertad"
tipo: "mc"
opciones_explicitas: ["económica", "privativa de la libertad", "administrativa", "reparatoria"]

enunciado: "Si el delito cometido es un crimen grave, la sanción principal que busca la prevención especial es la pena {tipo_sancion[0]}, la cual es de naturaleza ___."

explicacion: |
  La pena privativa de la libertad es la sanción característica y más severa del Derecho Penal, diferenciándose de las multas administrativas o civiles.
```