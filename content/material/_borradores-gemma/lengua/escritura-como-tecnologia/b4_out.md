### 1 — El salto de la oralidad a la escritura
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["historia", "comunicacion"]

tipo: mc
opciones_explicitas: ["Permitió la transmisión de conocimientos sin depender de la memoria humana", "Hizo que el lenguaje fuera más complejo y difícil de entender", "Eliminó la necesidad de hablar para comunicarse", "Solo sirve para registrar leyes y no ideas"]

enunciado: "Antes de la invención de la escritura, la transmisión de la cultura dependía exclusivamente de la memoria de los oradores. ¿Cuál fue el principal impacto tecnológico de la escritura en este proceso?"

explicacion: |
  La escritura actúa como un soporte externo que permite 'fijar' el lenguaje, liberando a la memoria humana de la carga de retener todo el saber de forma exacta, permitiendo que el conocimiento trascienda el tiempo y el espacio.
```

### 2 — La persistencia del mensaje
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["memoria", "tecnologia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un consejo de un abuelo a su nieto"], ["una receta médica escrita en un papiro"]]
  consecuencia: ["la información se pierde si el nieto olvida el consejo", "la información se mantiene intacta aunque el médico no esté presente"]

tipo: mc
opciones_explicitas: ["La información se pierde si el nieto olvida el consejo", "La información se mantiene intacta aunque el médico no esté presente", "La escritura no cambia la naturaleza de la comunicación"]

enunciado: "Considera el siguiente caso: {escenarios[escenario_idx]}. Si aplicamos la tecnología de la escritura, ¿qué sucede con la información?"

explicacion: |
  La escritura funciona como una 'memoria externa'. Mientras que en la oralidad la información es volátil, la escritura permite que el mensaje sea independiente del emisor original.
```

### 3 — Componentes de la tecnología de la escritura
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["conceptos"]

tipo: completar
respuestas_validas: ["soporte", "signo", "código"]

enunciado: "Para que la escritura funcione como tecnología, se requiere de un ___ (donde se plasma el mensaje), un ___ (que representa la idea) y un ___ (el sistema de reglas que los une)."

explicacion: |
  La escritura requiere un soporte físico (piedra, papel, pantalla), un signo gráfico y un código lingüístico que permita la decodificación por parte de otro individuo.
```

### 4 — Evolución de la transmisión del saber
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["evolucion", "conocimiento"]

tipo: ordenar
opciones_explicitas: ["Cultura puramente oral", "Aparición de la escritura", "Acumulación de conocimiento complejo"]

enunciado: "Ordena cronológicamente los procesos que describen la evolución de la transmisión del conocimiento humano gracias a la tecnología de la escritura."

explicacion: |
  La escritura permite la acumulación: al no tener que dedicar todo el esfuerzo cognitivo a recordar, la humanidad puede dedicar más recursos a la innovación y la complejidad, construyendo sobre lo ya escrito.
```

### 5 — La escritura como extensión de la mente
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["tecnologia", "cognicion"]

tipo: input
tolerancia_abs: 0

enunciado: "Si la oralidad es la comunicación en tiempo real, la escritura es una tecnología de comunicación ___ (escribe la palabra que describe la capacidad de la escritura de durar en el tiempo)."

explicacion: |
  La escritura permite la comunicación asincrónica; es decir, el emisor y el receptor no necesitan estar presentes al mismo tiempo para que el mensaje sea transmitido con éxito.
```