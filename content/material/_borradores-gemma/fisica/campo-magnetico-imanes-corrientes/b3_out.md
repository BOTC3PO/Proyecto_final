### 1 — Origen del campo magnético
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "basico"
  tags: ["magnetismo", "conceptos_fundamentales"]

respuesta: verdadero
tipo: vf

enunciado: "Un imán permanente genera un campo magnético debido al movimiento de las cargas eléctricas (electrones) dentro de sus átomos."

explicacion: |
  Correcto. El magnetismo en materiales ferromagnéticos surge del movimiento orbital y del espín de los electrones, que actúan como pequeñas corrientes eléctricas.
```

### 2 — Comparación de fuentes
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["imanes", "electroimanes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10.0, "un imán de neodimio"], [15.0, "un electroimán de núcleo de hierro"]]
  opciones: ["Un campo magnético constante", "Un campo magnético que depende de la corriente", "Un campo magnético que no existe"]

respuesta: opciones[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Un campo magnético constante", "Un campo magnético que depende de la corriente", "Un campo magnético que no existe"]

enunciado: "Si observamos {datos[escenario_idx][0]}, el campo magnético producido es ___."

explicacion: |
  En el caso del imán, el campo es permanente. En el caso del electroimán, la intensidad y dirección dependen directamente de la intensidad de la corriente eléctrica que circula por el conductor.
```

### 3 — La regla de la mano derecha
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["regla_mano_derecha", "corriente"]

respuesta: "hacia arriba"
tipo: completar
respuestas_validas: ["hacia arriba", "hacia abajo"]

enunciado: "Si aplicamos la regla de la mano derecha para un cable conductor vertical, donde el pulgar apunta hacia arriba (dirección de la corriente), los dedos se curvan indicando que las líneas de campo magnético circulan en un plano horizontal en dirección ___."

explicacion: |
  La regla de la mano derecha establece que el pulgar indica la dirección de la corriente y la curvatura de los dedos indica la dirección de las líneas de campo magnético.
```

### 4 — Polaridad en electroimanes
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "basico"
  tags: ["electroimanes", "polaridad"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un imán natural, los polos de un electroimán pueden invertirse simplemente cambiando la dirección de la corriente eléctrica."

explicacion: |
  Exacto. Al invertir la corriente, el sentido de las líneas de campo cambia, lo que resulta en una inversión de la polaridad de los polos norte y sur.
```

### 5 — Componentes de un electroimán
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["electroimanes", "componentes"]

respuesta: ["Alambre conductor", "Núcleo ferromagnético", "Fuente de corriente"]
tipo: ordenar
opciones_explicitas: ["Alambre conductor", "Núcleo ferromagnético", "Fuente de corriente"]

enunciado: "Para construir un electroimán funcional, se deben ensamblar sus componentes siguiendo este orden lógico de construcción (desde la base hasta el componente que genera el campo):"

pasos:
  - "Se enrolla el conductor sobre el material que concentra el flujo."
  - "Se proporciona la energía necesaria para que el sistema funcione."
  - "Se prepara el material que será magnetizado por la bobina."

explicacion: |
  Para un electroimán efectivo, primero se necesita el núcleo (material ferromagnético), luego se enrolla el alambre (bobina conductora) y finalmente se conecta a una fuente de corriente.
```