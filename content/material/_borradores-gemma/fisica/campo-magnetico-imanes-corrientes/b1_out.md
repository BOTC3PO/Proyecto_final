### 1 — Definición de imán
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "basico"
  tags: ["imanes", "magnetismo"]

respuesta: "polo"
tipo: "completar"
respuestas_validas: ["polo"]

enunciado: "Las regiones de un imán donde la fuerza magnética es más intensa se denominan ___ magnéticos."

explicacion: |
  Un imán posee dos regiones de máxima intensidad de campo denominadas polos (norte y sur).
```

### 2 — Origen del campo magnético
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "basico"
  tags: ["corriente_electrica", "electromagnetismo"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que una carga eléctrica en reposo genera un campo magnético a su alrededor?"

explicacion: |
  Falso. Según la ley de Biot-Savart, el campo magnético es generado por cargas en movimiento (corrientes eléctricas). Una carga estática solo genera un campo eléctrico.
```

### 3 — Componentes de un electroimán
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["electroimanes", "componentes"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["Núcleo ferromagnético", "Material aislante", "Resistencia eléctrica"]

enunciado: "En un electroimán típico, para aumentar la intensidad del campo magnético se suele utilizar un {escenario_datos[escenario_idx][0]} que concentre las líneas de flujo."

variables:
  escenario_datos: [["núcleo de hierro", "Núcleo ferromagnético"], ["bobina de cobre", "Núcleo ferromagnético"]]

explicacion: |
  El núcleo ferromagnético (como el hierro) aumenta significativamente la intensidad del campo magnético del electroimán al canalizar las líneas de campo.
```

### 4 — Regla de la mano derecha
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["regla_mano_derecha", "corriente"]

respuesta: "el pulgar indica la dirección de la corriente y los dedos el campo"
tipo: "completar"
respuestas_validas: ["el pulgar indica la dirección de la corriente y los dedos el campo"]

enunciado: "Al aplicar la regla de la mano derecha en un conductor recto, si el pulgar apunta en la dirección de la corriente, entonces los dedos curvos representan ___."

explicacion: |
  La regla de la mano derecha es una convención para determinar la dirección del campo magnético circular alrededor de un conductor con corriente.
```

### 5 — Elementos de un circuito electromagnético
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "basico"
  tags: ["ordenar", "componentes"]

respuesta: ["Fuente de energía", "Conductor", "Bobina"]
tipo: "ordenar"
opciones_explicitas: ["Fuente de energía", "Conductor", "Bobina"]

enunciado: "Ordene los elementos necesarios para construir un electroimán simple, desde el suministro de energía hasta el elemento que genera el campo:"

explicacion: |
  Para un electroimán básico se requiere una fuente (pila), un conductor (cable) para transportar la corriente y una bobina (solenoide) para concentrar el campo.
```