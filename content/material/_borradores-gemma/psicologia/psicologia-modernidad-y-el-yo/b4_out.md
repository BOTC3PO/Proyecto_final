### 1 — El Yo Moderno vs. El Yo Premoderno
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["modernidad", "identidad", "historia_psicologia"]

respuesta: "individualismo"
tipo: "completar"
respuestas_validas: ["individualismo"]

enunciado: "Mientras que en la era premoderna la identidad estaba definida por el estatus social y el grupo, la modernidad introdujo la noción de un yo basado en el ___________."

explicacion: |
  La modernidad desplazó la identidad colectiva (estatus, linaje, gremio) hacia una identidad centrada en el individuo autónomo y su subjetividad interna.
```

### 2 — La autonomía del sujeto moderno
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["autonomia", "sujeto"]

respuesta: "verdadero"
tipo: "vf"

enunciado: "La noción moderna de 'yo' presupone que el individuo es un agente autónomo capaz de autogobernarse, diferenciándose de la visión medieval donde el orden era dictado por la tradición y la divinidad."

explicacion: |
  La autonomía es un pilar de la modernidad; el sujeto se reconoce como origen de sus propias leyes y decisiones.
```

### 3 — Contraste de la identidad histórica
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["identidad", "comparacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["identidad colectiva", "identidad individual"],
    ["orden social estático", "orden social dinámico"]
  ]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["identidad colectiva", "identidad individual", "orden social estático", "orden social dinámico"]

enunciado: "En el contexto de la transición a la modernidad, el cambio fundamental radica en el paso de una {datos[escenario_idx][0]} a una {datos[escenario_idx][1]}."

explicacion: |
  El paso de lo colectivo a lo individual es el núcleo del cambio en la construcción del 'yo' moderno.
```

### 4 — Evolución del concepto de identidad
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

respuesta: ["Identidad colectiva/estática", "Surgimiento del individuo", "Autonomía del yo moderno"]
tipo: "ordenar"
opciones_explicitas: ["Identidad colectiva/estática", "Surgimiento del individuo", "Autonomía del yo moderno"]

enunciado: "Ordene cronológicamente la evolución de la noción de identidad según el proceso de modernización:"

explicacion: |
  La secuencia lógica parte de la pertenencia al grupo, pasa por el proceso de individuación y culmina en la autonomía del sujeto moderno.
```

### 5 — El Yo frente a la Tradición
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["tradicion", "modernidad"]

respuesta: "La modernidad enfatiza la subjetividad interna, mientras que la tradición enfatiza el rol social externo."
tipo: "mc"
opciones_explicitas: ["La modernidad enfatiza la subjetividad interna, mientras que la tradición enfatiza el rol social externo.", "La tradición enfatiza la subjetividad interna, mientras que la modernidad enfatiza el rol social externo.", "Ambos conceptos consideran que la identidad es puramente externa.", "La modernidad y la tradición son conceptos idénticos en la psicología."]

explicacion: |
  El contraste principal es que la modernidad "interioriza" la identidad, buscando la verdad en el yo, mientras que la tradición la encontraba en el lugar que el individuo ocupaba en el orden social.
```