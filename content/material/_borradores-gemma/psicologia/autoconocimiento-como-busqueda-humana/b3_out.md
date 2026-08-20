### 1 — ¿Es el autoconocimiento un destino?
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["procesos", "identidad", "dinamismo"]

respuesta: falso
tipo: vf

enunciado: "El autoconocimiento es un estado estático que se alcanza una vez que se descubren todos los rasgos de la personalidad, por lo tanto, una vez logrado, el proceso termina."

explicacion: |
  El autoconocimiento es un proceso dinámico y continuo. Debido a que los seres humanos somos seres en constante cambio (biológico, emocional y socialmente), la búsqueda de la identidad es una construcción permanente, no un dato fijo o un destino final.
```

### 2 — La trampa de la etiqueta
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["etiquetas", "identidad", "cambio"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Soy una persona extremadamente tímida y siempre lo seré.", "Soy una persona muy ansiosa ante el estrés."],
    ["Soy un líder nato y no puedo cambiar mi forma de actuar.", "Soy alguien que siempre reacciona con ira."]
  ]

enunciado: "Un error común en la búsqueda del autoconocimiento es confundir un rasgo o comportamiento actual con una etiqueta inmutable. Por ejemplo: {escenarios[escenario_idx][0]}"

opciones_explicitas:
  - "La etiqueta es una descripción esencial de mi ser."
  - "La etiqueta es una descripción de un comportamiento actual que puede evolucionar."
  - "La etiqueta es una verdad absoluta e inamovible."

respuesta: "La etiqueta es una descripción de un comportamiento actual que puede evolucionar."
tipo: mc

explicacion: |
  Etiquetarse a uno mismo ("Soy así") cierra la puerta al crecimiento. El autoconocimiento busca entender los procesos detrás de la conducta, no fijar categorías que impidan la transformación personal.
```

### 3 — Elementos del proceso de introspección
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["metodologia", "introspeccion", "reflexion"]

opciones_explicitas:
  - "Reconocimiento de emociones"
  - "Juicio crítico y autocrítica"
  - "Identificación de patrones de conducta"
  - "Aceptación de la propia historia"

respuesta: ["Reconocimiento de emociones", "Identificación de patrones de conducta", "Juicio crítico y autocrítica", "Aceptación de la propia historia"]
tipo: ordenar

enunciado: "Para que el autoconocimiento sea un proceso de crecimiento y no una simple observación superficial, se requiere integrar ciertos elementos en un orden de profundidad psicológica (de lo más inmediato a lo más estructural):"

explicacion: |
  El proceso comienza con la percepción de la emoción inmediata, sigue con la identificación de cómo se repiten esas emociones (patrones), requiere un juicio sobre la raíz de esos comportamientos y culmina con la integración y aceptación de la propia historia personal.
```

### 4 — El mito de la "verdadera esencia"
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["esencia", "construccion", "identidad"]

respuesta: "construcción"
tipo: completar
respuestas_validas: ["construcción"]

enunciado: "A diferencia de la visión esencialista que sugiere que debemos 'encontrar' un yo preexistente, la psicología contemporánea sugiere que la identidad es una ___ constante a través de la experiencia y la interacción."

explicacion: |
  El error es creer que el "yo" es un objeto escondido que solo hay que desenterrar. El autoconocimiento es más bien el proceso de entender cómo nos estamos construyendo a través de nuestras decisiones y vivencias.
```

### 5 — ¿Es el autoconocimiento un proceso de descubrimiento o de creación?
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["dualidad", "identidad", "crecimiento"]

respuesta: "ambos"
tipo: mc

opciones_explicitas:
  - "Es solo un descubrimiento de lo que ya está ahí."
  - "Es solo una creación de lo que queremos ser."
  - "Es ambos: descubrimos potencialidades y creamos nuevas formas de ser."

explicacion: |
  El autoconocimiento es una danza entre lo que descubrimos (nuestro temperamento, historia y predisposiciones) y lo que creamos (nuestra voluntad, valores y la forma en que decidimos actuar frente a nuestra naturaleza).
```