### 1 — Requisitos Funcionales vs No Funcionales
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "requisitos"]

tipo: mc
opciones_explicitas: ["El sistema debe procesar pagos con tarjeta", "El sistema debe responder en menos de 2 segundos", "El sistema debe tener una interfaz intuitiva", "El sistema debe estar disponible el 99.9% del tiempo"]

enunciado: "Un requisito funcional describe una acción específica que el sistema debe realizar. ¿Cuál de los siguientes es un ejemplo de requisito funcional?"

explicacion: |
  Los requisitos funcionales definen las funciones y servicios que el sistema debe ejecutar (el "qué"). Los otros ejemplos corresponden a requisitos no funcionales (rendimiento, usabilidad y disponibilidad).
```

### 2 — La naturaleza de los requisitos no funcionales
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "basico"
  tags: ["ingenieria_software", "conceptos"]

tipo: vf
respuesta: falso

enunciado: "Los requisitos no funcionales se centran en el 'cómo' debe comportarse el sistema (como la seguridad o la velocidad), mientras que los funcionales se centran en el 'qué' hace el sistema."

explicacion: |
  La afirmación es falsa porque la definición es exactamente al revés: los funcionales definen el "qué" y los no funcionales el "cómo".
```

### 3 — Clasificación de atributos de calidad
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["atributos_calidad", "no_funcionales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El sistema debe cifrar los datos con AES-256", "El sistema debe soportar 1000 usuarios concurrentes"], ["Seguridad", "Rendimiento"]]

tipo: completar
respuestas_validas: ["Seguridad", "Rendimiento"]
respuesta: escenarios[escenario_idx][1]

enunciado: "Analiza el siguiente requisito: '{escenarios[escenario_idx][0]}'. Este es un ejemplo de un requisito de tipo: ___"

explicacion: |
  El requisito mencionado se refiere a la protección de la información (Seguridad) o a la capacidad de carga (Rendimiento), según el caso sorteado.
```

### 4 — Orden de derivación de requisitos
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ingenieria_requisitos"]

tipo: ordenar
opciones_explicitas: ["Identificación de necesidades del usuario", "Definición de requisitos funcionales", "Definición de requisitos no funcionales", "Validación del sistema"]

enunciado: "Ordena las etapas lógicas en el proceso de ingeniería de requisitos para un nuevo software:"

explicacion: |
  Primero se entienden las necesidades, luego se definen las funciones (funcionales), luego las restricciones de calidad (no funcionales) y finalmente se validan.
```

### 5 — El impacto de los requisitos no funcionales
```
metadata:
  materia: "informatica"
  tema: "requisitos_software"
  nivel: "avanzado"
  tags: ["arquitectura", "no_funcionales"]

tipo: input
tolerancia_abs: 0
respuesta: 1

enunciado: "Si un sistema cumple con todos sus requisitos funcionales pero tarda 30 segundos en cargar una pantalla, ¿ha fallado en sus requisitos (0) funcionales o en sus requisitos (1) no funcionales?"

explicacion: |
  El tiempo de respuesta es un atributo de calidad (rendimiento), por lo tanto, es un requisito no funcional.
```