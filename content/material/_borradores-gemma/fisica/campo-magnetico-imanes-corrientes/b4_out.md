### 1 — Origen del campo magnético
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["magnetismo", "corrientes"]

respuesta: "imanes"
tipo: "completar"
respuestas_validas: ["imanes", "imán"]

enunciado: "A diferencia de las corrientes eléctricas que generan campos magnéticos mediante el movimiento de cargas, los campos magnéticos estáticos pueden ser generados por ___."

explicación: |
  Los imanes permanentes poseen un campo magnético debido al alineamiento del espín de los electrones en sus átomos, mientras que las corrientes eléctricas generan campos debido al movimiento macroscópico de cargas.
```

### 2 — Comparación de la intensidad del campo
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["electroimanes", "magnetismo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[10, "aumentar la corriente"], [5, "acercar el imán"]]

respuesta: escenario[idx][1]
tipo: "mc"
opciones_explicitas: ["aumentar la corriente", "acercar el imán", "cambiar el material del cable", "disminuir la tensión"]

enunciado: "En un electroimán, ¿qué acción permite ___ para incrementar la intensidad del campo magnético generado?"

explicación: |
  La intensidad del campo magnético en un electroimán es directamente proporcional a la intensidad de la corriente que circula por el conductor.
```

### 3 — Naturaleza de los polos
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["polos", "imanes"]

respuesta: falso
tipo: "vf"

enunciado: "A diferencia de las cargas eléctricas, donde las cargas iguales se repelen y las distintas se atraen, los polos de un imán pueden ser monopolos magnéticos aislados (es decir, un polo norte sin un polo sur)."

explicación: |
  Falso. Los polos magnéticos siempre vienen en pares (dipolos). No existen monopolos magnéticos aislados conocidos en la naturaleza; si cortas un imán, obtienes dos imanes más pequeños con sus propios polos.
```

### 4 — Dependencia de la distancia
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["ley_ampere", "distancia"]

variables:
  idx: uno_de([0, 1])
  datos: [[0.5, "se reduce"], [2.0, "se mantiene"]]

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["se reduce", "se mantiene", "se duplica", "se anula"]

enunciado: "Si comparamos un imán con un cable conductor, en ambos casos, al aumentar la distancia desde el centro del conductor o del imán, la intensidad del campo magnético ___."

explicación: |
  Tanto para un imán dipolar como para un conductor rectilíneo, la intensidad del campo magnético disminuye a medida que la distancia al origen del campo aumenta.
```

### 5 — Componentes de un electroimán
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["electroimanes", "componentes"]

respuesta: ["Núcleo ferromagnético", "Bobina de conductor", "Fuente de corriente"]
tipo: "ordenar"
opciones_explicitas: ["Núcleo ferromagnético", "Bobina de conductor", "Fuente de corriente"]

enunciado: "Para construir un electroimán funcional, ordene los componentes desde el que concentra el flujo magnético hacia el que proporciona la energía:"

explicación: |
  El núcleo ferromagnético concentra las líneas de campo, la bobina (solenoide) es donde circula la corriente que crea el campo, y la fuente de corriente es la que permite el flujo de carga.
```