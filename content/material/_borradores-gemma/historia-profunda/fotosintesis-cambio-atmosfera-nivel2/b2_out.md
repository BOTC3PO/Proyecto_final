### 1 — La ecuación de la fotosíntesis
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["fotosintesis", "ecuacion", "quimica"]

enunciado: "En el proceso de la fotosíntesis, los organismos autótrofos utilizan la energía lumínica para transformar el dióxido de carbono (CO2) y el agua (H2O) en un producto orgánico esencial y un subproducto gaseoso. El producto orgánico es ___ y el subproducto es ___."

respuestas_validas: ["glucosa", "O2"]
tipo: completar

explicacion: |
  La ecuación general es: 6CO2 + 6H2O + luz -> C6H12O6 + 6O2.
  La glucosa (C6H12O6) es la molécula orgánica que almacena la energía química, mientras que el oxígeno (O2) es liberado como subproducto.
```

### 2 — El gran evento de la oxidación
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["evolucion", "oxigeno", "geologia"]

variables:
  escenario: uno_de([
    ["el oxígeno se acumuló en los océanos", "el oxígeno se acumuló en la atmósfera", "el oxígeno reaccionó con el metano"],
    ["el oxígeno se acumuló en los océanos", "el oxígeno se acumuló en la atmósfera", "el oxígeno reaccionó con el metano"]
  ])

enunciado: "Durante el Gran Evento de Oxidación, antes de que el oxígeno se acumulara masivamente en la atmósfera, ¿qué sucedió principalmente con el O2 producido por las cianobacterias? {escenario[0]}"

opciones_explicitas: ["el oxígeno se acumuló en los océanos", "el oxígeno se acumuló en la atmósfera", "el oxígeno reaccionó con el metano"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  Antes de la acumulación atmosférica, el oxígeno liberado fue consumido por agentes reductores en los océanos (como el hierro ferroso) y por la oxidación de gases como el metano. Solo cuando estos "sumideros" se saturaron, el O2 comenzó a acumularse en la atmósfera.
```

### 3 — Balance de masa en la fotosíntesis
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["estequiometria", "fotosintesis"]

enunciado: "Si un organismo realiza la fotosíntesis de manera eficiente, por cada molécula de glucosa (C6H12O6) producida, ¿cuántas moléculas de oxígeno (O2) se liberan a la atmósfera?"

opciones_explicitas: ["1", "2", "6", "12"]
respuesta: "6"
tipo: mc

explicacion: |
  Según la estequiometría de la reacción: 6CO2 + 6H2O -> C6H12O6 + 6O2. Por cada mol de glucosa se liberan 6 moles de O2.
```

### 4 — El papel de los sumideros geológicos
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["geologia", "oxigenacion"]

variables:
  caso: uno_de([
    ["el hierro disuelto en el agua", "la presencia de metano atmosférico"],
    ["el hierro disuelto en el agua", "la presencia de metano atmosférico"]
  ])

enunciado: "La acumulación de oxígeno en la atmósfera fue un proceso extremadamente lento debido a la existencia de sumideros. Un ejemplo principal fue {caso[0]}."

opciones_explicitas: ["el hierro disuelto en el agua", "la presencia de metano atmosférico"]
respuesta: caso[0]
tipo: mc

explicacion: |
  La oxidación del hierro disuelto (Fe2+) en los océanos dio lugar a la formación de capas de hierro bandeado (BIFs), consumiendo el oxígeno producido por la fotosíntesis antes de que este pudiera escapar a la atmósfera.
```

### 5 — Secuencia de la oxigenación planetaria
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["evolucion", "oxigenacion", "secuencia"]

enunciado: "Ordena cronológicamente los eventos que permitieron la oxigenación de la atmósfera terrestre:"

opciones_explicitas: ["Aparición de fotosíntesis oxigénica", "Oxidación de hierro disuelto en océanos", "Saturación de sumideros de metano", "Acumulación masiva de O2 atmosférico"]
respuesta: ["Aparición de fotosíntesis oxigénica", "Oxidación de hierro disuelto en océanos", "Saturación de sumideros de metano", "Acumulación masiva de O2 atmosférico"]
tipo: ordenar

explicacion: |
  1. Primero surge la fotosíntesis oxigénica.
  2. El O2 producido se usa para oxidar el hierro en los mares (formando BIFs).
  3. El O2 restante reacciona con gases reductores como el metano.
  4. Una vez agotados los sumideros, el O2 se acumula en la atmósfera.
```