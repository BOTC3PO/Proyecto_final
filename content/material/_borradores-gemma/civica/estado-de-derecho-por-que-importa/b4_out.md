### 1 — El rol del Poder Judicial
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "basico"
  tags: ["instituciones", "justicia"]

tipo: mc
opciones_explicitas: ["Garantizar que las leyes se apliquen por igual a todos", "Asegurar que el Presidente tome todas las decisiones", "Permitir que el Congreso cambie las leyes sin supervisión", "Garantizar que solo un partido político gobierne"]

enunciado: "Para que exista un Estado de derecho, el Poder Judicial debe ser independiente. Esto significa que su función principal es:"

explicacion: |
  La independencia judicial asegura que los jueces puedan aplicar la ley sin temor a represalias del poder político, garantizando la igualdad ante la ley.
```

### 2 — La importancia de la prensa
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "intermedio"
  tags: ["prensa", "libertad_de_expresion"]

tipo: completar
opciones_explicitas: ["transparencia", "censura", "autoritarismo"]
respuestas_validas: ["transparencia"]

enunciado: "Una prensa libre es fundamental para el Estado de derecho porque actúa como un mecanismo de control que aporta _______ a las acciones del gobierno."

explicacion: |
  La prensa libre investiga y comunica los actos de los gobernantes, permitiendo que la ciudadanía conozca la realidad y exija rendición de cuentas.
```

### 3 — Mecanismos de control
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "intermedio"
  tags: ["controles", "poder_ejecutivo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El Presidente decide ignorar una ley aprobada por el Congreso.", "El Poder Ejecutivo actúa por encima de la ley"],
    ["Un juez anula un decreto que viola la Constitución.", "El Poder Judicial controla al Ejecutivo"]
  ]

tipo: mc
opciones_explicitas: ["Fomentar el autoritarismo", "Debilitar la democracia", "Mantener el equilibrio de poderes", "Eliminar la necesidad de leyes"]

enunciado: "Cuando existen controles efectivos sobre el Poder Ejecutivo, como en el caso de: {escenarios[escenario_idx][0]}, se está protegiendo el principio de:"

explicacion: |
  Los sistemas de pesos y contrapesos evitan la concentración excesiva de poder en una sola rama del Estado.
```

### 4 — El proceso electoral
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "basico"
  tags: ["elecciones", "democracia"]

tipo: ordenar
opciones_explicitas: ["Convocatoria a elecciones", "Campaña electoral transparente", "Votación secreta y universal", "Escrutinio y proclamación de resultados"]

enunciado: "Para asegurar que las elecciones sean un pilar del Estado de derecho, se debe seguir un orden lógico de procesos democráticos:"

explicacion: |
  El orden garantiza que la voluntad popular sea expresada de manera legítima, transparente y sin coacciones.
```

### 5 — La alternancia en el poder
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "avanzado"
  tags: ["elecciones", "alternancia"]

tipo: input
tolerancia_abs: 0

enunciado: "En un Estado de derecho, la realización de elecciones periódicas asegura la _______ del poder, evitando que un grupo se perpetúe en el mando."

explicacion: |
  La alternancia permite que diferentes sectores de la sociedad participen en el gobierno mediante el voto, renovando la legitimidad del mando.
```

*(Nota: Para la pregunta 5, el usuario debe ingresar la palabra "alternancia")*