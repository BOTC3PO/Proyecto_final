### 1 — El electroimán de la grúa
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["electromagnetismo", "corrientes"]

variables:
  escenario: uno_de([[10, "aumenta"], [20, "disminuye"], [5, "se mantiene"]])
  idx: uno_de([0, 1, 2])
  valor_corriente: escenario[idx][0]
  efecto: escenario[idx][1]

enunciado: "En una planta de reciclaje, una grúa utiliza un electroimán para levantar chatarra. Si se duplica la intensidad de la corriente eléctrica que circula por la bobina del electroimán, la fuerza del campo magnético generado ___."

respuesta: efecto
tipo: completar
respuestas_validas: ["aumenta", "disminuye", "se mantiene"]

explicacion: |
  La intensidad del campo magnético ($B$) generado por una corriente eléctrica es directamente proporcional a la intensidad de dicha corriente ($I$). Al aumentar la corriente, aumenta la fuerza del campo magnético.
```

### 2 — Brújula y cables eléctricos
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["magnetismo", "brujula"]

variables:
  caso: uno_de([[true, "se desvía"], [false, "no cambia"]])
  idx: uno_de([0, 1])
  resultado: caso[idx][0]

enunciado: "Si acercas una brújula a un cable conductor por el cual circula una corriente eléctrica constante, la aguja de la brújula ___ de su posición de reposo."

respuesta: resultado
tipo: vf

explicacion: |
  Una corriente eléctrica genera un campo magnético a su alrededor. Este campo interactúa con el imán de la brújula, provocando que la aguja se alinee con las líneas de campo magnético.
```

### 3 — Polaridad de un electroimán
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["electromagnetismo", "polaridad"]

variables:
  config: uno_de([[1, "Norte"], [2, "Sur"]])
  idx: uno_de([0, 1])
  polo: config[idx][1]

enunciado: "Un estudiante construye un electroimán enrollando cable alrededor de un clavo de hierro. Si invierte el sentido de la corriente eléctrica en la bobina, el polo magnético que antes era ___ cambiará de polaridad."

respuesta: polo
tipo: mc
opciones_explicitas: ["Norte", "Sur", "No cambia"]

explicacion: |
  Según la regla de la mano derecha, el sentido de la corriente determina la dirección de las líneas de campo magnético. Si se invierte la corriente, se invierte la polaridad de los polos magnéticos.
```

### 4 — Componentes de un motor eléctrico
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["motor", "componentes"]

respuesta: "imán, cable, batería"
tipo: ordenar

enunciado: "Para construir un modelo simple de motor eléctrico (motor de corriente continua), se requiere ensamblar los siguientes componentes en el orden correcto para completar el circuito y generar movimiento:"

pasos:
  - "Colocar un imán permanente en la base."
  - "Conectar un cable conductor enrollado (bobina) al eje."
  - "Conectar la bobina a una batería para cerrar el circuito."

explicacion: |
  Un motor eléctrico requiere una fuente de energía (batería), un conductor (cable/bobina) y un campo magnético constante (imán) para producir la fuerza de Lorentz que genera el movimiento.
```

### 5 — Intensidad del campo magnético
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "avanzado"
  tags: ["calculo", "campo_magnetico"]

variables:
  datos: uno_de([[0.5, "0.001"], [2.0, "0.005"]])
  idx: uno_de([0, 1])
  distancia: datos[idx][0]
  resultado_teorico: datos[idx][1]

enunciado: "Considerando un cable conductor muy largo, la intensidad del campo magnético $B$ es inversamente proporcional a la distancia $r$ del cable. Si la distancia se reduce a la mitad, el valor de $B$ será ___ veces el valor original."

respuesta: resultado_teorico
tipo: input
tolerancia_abs: 0.001

explicacion: |
  La fórmula del campo magnético para un cable largo es $B = \mu_0 \cdot I / (2\pi \cdot r)$. Si la distancia $r$ se divide por 2, el campo $B$ se multiplica por 2.
```