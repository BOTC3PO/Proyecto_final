### 1 — El enfoque de la mejora continua
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["conceptos", "filosofia_gestion"]

respuesta: falso
tipo: vf

enunciado: "La mejora continua (Kaizen) se define como un proyecto de optimización masiva que se ejecuta una sola vez para alcanzar un estado ideal de eficiencia."

explicacion: |
  Falso. La mejora continua se basa en cambios incrementales, constantes y sostenidos en el tiempo, no en intervenciones únicas o aisladas.
```

### 2 — El error de la optimización puntual
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["errores_comunes", "gestion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Una empresa implementa un software de gestión avanzado para resolver todos sus problemas de eficiencia de un solo golpe.", "software"],
    ["Un equipo de producción identifica pequeñas fallas diarias y ajusta sus procesos cada semana.", "ajustes"]
  ]

enunciado: "En el escenario de {escenarios[escenario_idx][0]}, ¿cuál es el enfoque predominante?"

opciones_explicitas: ["optimización puntual", "mejora continua"]

respuesta: "optimización puntual"
tipo: mc

explicacion: |
  El primer escenario describe un intento de solución única y masiva, lo cual es un error común que ignora la naturaleza incremental de la mejora continua.
```

### 3 — Elementos de la mejora constante
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "basico"
  tags: ["terminologia", "procesos"]

respuesta: "incremental"
tipo: completar
respuestas_validas: ["incremental"]

enunciado: "A diferencia de la innovación disruptiva, la mejora continua se caracteriza por ser de carácter ___________, buscando optimizar procesos mediante pequeños pasos sucesivos."

explicacion: |
  La mejora continua es incremental porque se enfoca en pequeñas mejoras constantes en lugar de cambios radicales o estructurales de una sola vez.
```

### 4 — Ciclo de la mejora
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "intermedio"
  tags: ["ciclo_pdca", "metodologia"]

respuesta: ["Planificar", "Hacer", "Verificar", "Actuar"]
tipo: ordenar

opciones_explicitas: ["Planificar", "Hacer", "Verificar", "Actuar"]

enunciado: "Para que la mejora sea continua, se debe seguir el ciclo PDCA. Ordene las fases de este ciclo en su secuencia lógica de ejecución:"

explicacion: |
  El ciclo PDCA (Plan-Do-Check-Act) es la base de la mejora continua: se planea, se ejecuta, se verifica el resultado y se actúa para estandarizar o ajustar.
```

### 5 — El mito de la perfección inmediata
```
metadata:
  materia: "economia"
  tema: "mejora_continua"
  nivel: "avanzado"
  tags: ["mentalidad", "eficiencia"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El gerente cree que una vez que el proceso es eficiente, el trabajo de mejora ha terminado.", "terminado"],
    ["El gerente cree que la mejora es un proceso infinito de refinamiento constante.", "infinito"]
  ]

enunciado: "Si un gerente adopta la visión del caso {casos[caso_idx][0]}, ¿está aplicando correctamente la filosofía de mejora continua?"

opciones_explicitas: ["Sí, la eficiencia es un estado de llegada.", "No, la mejora es un proceso cíclico sin fin."]

respuesta: "No, la mejora es un proceso cíclico sin fin."
tipo: mc

explicacion: |
  Uno de los errores más graves es pensar que la mejora tiene un punto final. La mejora continua asume que siempre hay una forma de optimizar un poco más.
```