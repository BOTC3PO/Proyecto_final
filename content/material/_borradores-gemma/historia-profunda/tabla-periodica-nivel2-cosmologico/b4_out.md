### 1 — Origen estelar
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["astroquimica", "elementos"]

variables:
  elemento_idx: uno_de([0, 1, 2])
  elementos: ["carbono", "oxígeno", "hierro"]

respuesta: elementos[elemento_idx]
tipo: mc
opciones_explicitas: ["carbono", "oxígeno", "hierro", "helio"]

enunciado: "El {elementos[elemento_idx]} que forma parte de las moléculas orgánicas de tu cuerpo se originó mediante la fusión en el núcleo de una estrella masiva."

explicacion: |
  La nucleosíntesis estelar es el proceso mediante el cual los elementos más pesados que el hidrógeno y el helio se crean por fusión en el interior de las estrellas.
```

### 2 — La muerte de las estrellas
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["supernova", "nucleosintesis"]

variables:
  tipo_estrella_idx: uno_de([0, 1])
  escenarios: [
    ["supernova de tipo II", "el hierro"],
    ["enanas blancas", "el carbono"]
  ]

respuesta: escenarios[tipo_estrella_idx][1]
tipo: completar
respuestas_validas: ["el hierro", "el carbono"]

enunciado: "Cuando una estrella masiva colapsa en una supernova, libera en el espacio elementos pesados como ___."

explicacion: |
  Las estrellas masivas sintetizan elementos hasta el hierro antes de explotar en una supernova, dispersando estos elementos por el cosmos.
```

### 3 — Composición química estelar
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "basico"
  tags: ["elementos", "polvo_de_estrellas"]

respuesta: "fusión"
tipo: completas
respuestas_validas: ["fusión", "fisión", "combustión"]

enunciado: "Los átomos de los elementos pesados en nuestro cuerpo fueron creados mediante el proceso de ___ nuclear en el interior de estrellas antiguas."

explicacion: |
  La fusión nuclear es el proceso donde núcleos ligeros se unen para formar núcleos más pesados, liberando energía.
```

### 4 — Secuencia de nucleosíntesis
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "avanzado"
  tags: ["secuencia", "fusión"]

opciones_explicitas: ["Helio -> Carbono -> Oxígeno -> Hierro", "Hidrógeno -> Helio -> Oxígeno -> Hidrógeno", "Helio -> Hidrógeno -> Carbono -> Hierro"]

respuesta: "Helio -> Carbono -> Oxígeno -> Hierro"
tipo: ordenar

enunciado: "Ordena la secuencia lógica de la nucleosíntesis estelar que permite la formación de elementos pesados en una estrella masiva:"

explicacion: |
  Las estrellas comienzan fusionando hidrógeno a helio, luego helio a carbono, y continúan con elementos cada vez más pesados hasta llegar al hierro.
```

### 5 — Relación masa-elemento
```
metadata:
  materia: "quimica"
  tema: "nucleosintesis_estelar"
  nivel: "intermedio"
  tags: ["hierro", "estrellas"]

variables:
  is_heavy: uno_de([true, falso])
  elemento_pesado: "hierro"
  elemento_ligero: "helio"

respuesta: is_heavy

tipo: mc
opciones_explicitas: [true, falso]

enunciado: "Considerando que el {is_heavy == true ? elemento_pesado : elemento_ligero} es un elemento producido por la fusión estelar, ¿es cierto que su origen es estelar? (Responde con verdadero o falso)"

explicacion: |
  Tanto el helio (en el Big Bang y estrellas) como el hierro (en estrellas masivas) tienen orígenes nucleares/estelares.
```