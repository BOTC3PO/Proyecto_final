### 1 — El concepto de inconsciente
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: verdadero
tipo: vf

enunciado: "En el psicoanálisis, el inconsciente se define como el conjunto de contenidos mentales que, aunque no son accesibles a la conciencia de forma inmediata, ejercen influencia sobre la conducta."

explicacion: |
  Efectivamente, para el psicoanálisis, el inconsciente no es solo lo que "no sabemos", sino una estructura dinámica con contenidos reprimidos que afectan nuestra vida psíquica.
```

### 2 — Mecanismo de defensa
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["represion", "defensa"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["un deseo conflictivo", "represión"],
    ["un recuerdo traumático", "represión"]
  ]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["proyección", "sublimación", "represión", "negación"]

enunciado: "Cuando el aparato psíquico expulsa de la conciencia un pensamiento o impulso que resulta intolerable para el yo, está utilizando el mecanismo de la {datos[escenario_idx][0]}."

explicacion: |
  La represión es el proceso mediante el cual se desplazan contenidos de la conciencia al inconsciente para evitar el malestar.
```

### 3 — Elementos del proceso de olvido
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["represion", "terminologia"]

respuesta: ["represión", "olvido", "inconsciente"]
tipo: completar
respuestas_validas: ["represión", "olvido", "inconsciente"]

enunciado: "El proceso de ___ consiste en el desplazamiento de contenidos hacia el ___ para evitar el dolor, lo que genera un ___ que no es por falta de capacidad de almacenamiento, sino por una barrera psíquica."

pasos:
  - "Identificar el mecanismo de defensa."
  - "Identificar el lugar donde se alojan los contenidos."
  - "Identificar la consecuencia en la conciencia."

explicacion: |
  La represión es el mecanismo que envía contenidos al inconsciente, resultando en un olvido que no es amnésico (biológico), sino dinámico (psicológico).
```

### 4 — Naturaleza del inconsciente
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "basico"
  tags: ["inconsciente", "conceptos"]

respuesta: "dinámico"
tipo: mc
opciones_explicitas: ["estático", "dinámico", "pasivo", "inexistente"]

enunciado: "A diferencia de una simple 'falta de conciencia', el inconsciente psicoanalítico es considerado ________ porque está en constante movimiento y lucha con las fuerzas de la conciencia."

explicacion: |
  Se considera dinámico porque los contenidos reprimidos intentan emerger constantemente, generando tensión psíquica.
```

### 5 — Orden de procesos en la represión
```
metadata:
  materia: "psicologia"
  tema: "memoria_y_olvido_represion_inconsciente"
  nivel: "intermedio"
  tags: ["proceso", "represion"]

respuesta: ["Conflicto", "Represión", "Síntoma"]
tipo: ordenar
opciones_explicitas: ["Conflicto", "Represión", "Síntoma"]

enunciado: "Ordene la secuencia lógica de la formación de un síntoma desde la perspectiva psicoanalítica:"

explicacion: |
  Primero surge un conflicto (deseo vs. moral), luego el yo utiliza la represión para alejar el deseo, y finalmente el deseo reprimido retorna de forma deformada como un síntoma.
```