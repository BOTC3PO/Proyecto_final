### 1 — El origen ígneo
```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "roca_igneas"]

variables:
  tipo_roca: uno_de(["granito", "basalto", "obsidiana"])

enunciado: "Cuando una roca se funde completamente debido al calor extremo en el manto, se convierte en ___."

respuesta: "magma"
tipo: completar
respuestas_validas: ["magma"]

explicacion: |
  El proceso de fusión de cualquier tipo de roca (sedimentaria, metamórfica o ígnea) da lugar al magma. Al enfriarse, este magma dará origen a una nueva roca ígnea.
```

### 2 — El retorno al magma
```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["ciclo_geologico", "fusione"]

variables:
  roca_origen: uno_de(["sedimentaria", "metamorfica", "igneas"])

enunciado: "Si una roca de tipo {roca_origen} es sometida a temperaturas lo suficientemente altas como para fundirse, el material resultante es magma. Si este magma se enfría, el ciclo se reinicia produciendo una roca ___."

respuesta: "igneas"
tipo: completar
respuestas_validas: ["igneas"]

explicacion: |
  Cualquier roca, sin importar su origen, puede fundirse. El producto de la solidificación de ese magma siempre será una roca ígnea.
```

### 3 — Clasificación de la fusión
```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "solidificacion"]

enunciado: "El proceso mediante el cual el magma se enfría y solidifica para formar nuevas rocas se denomina:"

opciones_explicitas: ["Meteorización", "Cristalización", "Erosión", "Sedimentación"]
respuesta: "Cristalización"
tipo: mc

explicacion: |
  La cristalización es el proceso de formación de cristales durante el enfriamiento del magma, dando lugar a las rocas ígneas.
```

### 4 — Secuencia del ciclo
```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["ciclo_geologico", "secuencia"]

enunciado: "Ordena la secuencia lógica que describe el reinicio del ciclo cuando una roca ígnea es fundida:"

opciones_explicitas: ["Roca ígnea", "Magma", "Enfriamiento", "Nueva roca ígnea"]
respuesta: ["Roca ígnea", "Magma", "Enfriamiento", "Nueva roca ígnea"]
tipo: ordenar

explicacion: |
  El ciclo es continuo: la roca existente se funde (magma), el magma se enfría y se solidifica (enfriamiento) para formar una nueva roca.
```

### 5 — El estado fundido
```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "estado_fisico"]

enunciado: "Un material que ha pasado de ser una roca sólida a un estado fundido debido al calor extremo se encuentra en estado ___."

opciones_explicitas: ["sólido", "líquido", "gaseoso"]
respuesta: "líquido"
tipo: mc

explicacion: |
  El magma es roca fundida, por lo tanto, se encuentra en estado líquido. Una vez que este líquido se enfría, vuelve al estado sólido.
```