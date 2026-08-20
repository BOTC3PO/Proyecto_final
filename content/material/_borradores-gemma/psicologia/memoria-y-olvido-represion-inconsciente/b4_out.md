### 1 — Represión vs. Olvido común
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["psicoanalisis", "represion", "inconsciente"]

respuesta: "represion"
tipo: "completar"
respuestas_validas: ["represion", "represión"]

enunciado: "Mientras que el olvido común es un proceso de pérdida de información por falta de consolidación o interferencia, la ________ es un mecanismo de defensa que consiste en la expulsión de contenidos dolorosos de la conciencia hacia el inconsciente."

explicacion: |
  La represión es un proceso dinámico donde el yo intenta mantener fuera de la conciencia aquellos pensamientos o impulsos que resultan inaceptables o angustiantes.
```

### 2 — Naturaleza del contenido reprimido
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "represion"]

variables:
  es_inconsciente: true

respuesta: es_inconsciente
tipo: "vf"

enunciado: "Según el psicoanálisis, los contenidos reprimidos permanecen en el inconsciente y pueden manifestarse a través de síntomas o sueños, manteniendo su carga afectiva."

explicacion: |
  Correcto. El contenido reprimido no es simplemente "olvidado", sino que permanece activo en la psique, buscando una vía de expresión.
```

### 3 — Diferencia entre Inconsciente y Preconsciente
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "avanzado"
  tags: ["inconsciente", "preconsciente", "freud"]

opciones_explicitas: ["El preconsciente es accesible con esfuerzo, mientras que el inconsciente es inaccesible por naturaleza.", "El inconsciente es solo memoria a corto plazo.", "El preconsciente y el inconsciente son términos sin distinción funcional."]

respuesta: opciones_explicitas[0]
tipo: "mc"

enunciado: "¿Cuál es la principal distinción entre el contenido preconsciente y el contenido inconsciente en la teoría freudiana?"

explicacion: |
  El preconsciente contiene información que no está en la conciencia en este momento pero que puede ser recuperada fácilmente (como un número de teléfono), mientras que el inconsciente contiene contenidos reprimidos de difícil acceso.
```

### 4 — Dinámica del mecanismo de defensa
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["mecanismos_de_defensa", "represion"]

variables:
  escenario: uno_de(["angustia", "conflicto"])
  escenario_desc: uno_de(["la angustia", "el conflicto"])

respuesta: "represion"
tipo: "completar"
respuestas_validas: ["represion", "represión"]

enunciado: "Cuando un individuo experimenta {escenario} debido a un {escenario_desc} entre un impulso y una norma moral, el yo utiliza la ________ para evitar el malestar."

pasos:
  - "Identificar el conflicto psíquico."
  - "Reconocer la función de defensa del yo."

explicacion: |
  La represión actúa como un escudo ante la angustia que produciría la consciencia de un deseo incompatible con la moralidad.
```

### 5 — Procesos de la memoria según el psicoanálisis
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["procesos", "inconsciente", "represion"]

opciones_explicitas: ["Represión -> Inconsciente -> Síntoma", "Olvido -> Conciencia -> Recuerdo", "Represión -> Conciencia -> Olvido"]

respuesta: opciones_explicitas[0]
tipo: "ordenar"

enunciado: "Ordene la secuencia lógica del proceso dinámico que explica cómo un trauma se manifiesta en la clínica psicoanalítica:"

explicacion: |
  El proceso comienza con la represión del trauma (envío al inconsciente), lo que genera un conflicto que finalmente se manifiesta a través de un síntoma.
```