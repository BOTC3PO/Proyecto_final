# Fisica — Campo magnetico imanes corrientes (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de imán

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "basico"
  tags: ["imanes", "magnetismo"]

respuesta: "polo"
tipo: "completar"
respuestas_validas:
  - "polo"

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
  escenario_datos: [["núcleo de hierro", "Núcleo ferromagnético"], ["bobina de cobre", "Núcleo ferromagnético"]]
  escenario_idx: uno_de([0, 1])
  respuesta_correcta: escenario_datos[escenario_idx][1]

tipo: "mc"
opciones_explicitas: ["Núcleo ferromagnético", "Material aislante", "Resistencia eléctrica"]
respuesta: respuesta_correcta

enunciado: "En un electroimán típico, para aumentar la intensidad del campo magnético se suele utilizar un {escenario_datos[escenario_idx][0]} que concentre las líneas de flujo."

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
respuestas_validas:
  - "el pulgar indica la dirección de la corriente y los dedos el campo"

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

tipo: ordenar
opciones_explicitas: ["Fuente de energía", "Conductor", "Bobina"]
respuesta_orden: ["Fuente de energía", "Conductor", "Bobina"]

enunciado: "Ordene los elementos necesarios para construir un electroimán simple, desde el suministro de energía hasta el elemento que genera el campo:"

explicacion: |
  Para un electroimán básico se requiere una fuente (pila), un conductor (cable) para transportar la corriente y una bobina (solenoide) para concentrar el campo.
```

### 6 — Fuerza de Lorentz en un conductor

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["fuerza_magnetica", "corriente"]

variables:
  l: 0.5
  I: 4.0
  B: 0.2
  angulo: 90

respuesta: 0.4
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un conductor recto de longitud {l} metros transporta una corriente de {I} Amperios perpendicular a un campo magnético uniforme de {B} Teslas. ¿Cuál es la magnitud de la fuerza magnética sobre el conductor?"

pasos:
  - "Utilizar la fórmula de la fuerza de Lorentz para un conductor: F = I * l * B * sin(angulo)."
  - "Sustituir los valores: F = 4.0 * 0.5 * 0.2 * sin(90)."
  - "Calcular: F = 2.0 * 0.2 * 1 = 0.4 N."

explicacion: |
  La fuerza magnética sobre un conductor con corriente se calcula con la fórmula F = I * l * B * sin(θ). En este caso, al ser perpendicular, sin(90°) = 1.
```

### 7 — Polaridad de un imán

```
metadata:
  materia: "fisica"
  tema: "imanes"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

respuesta: falso
tipo: vf

enunciado: "Si acercamos el polo norte de un imán al polo norte de otro imán, la fuerza de interacción entre ellos es de atracción."

explicacion: |
  Polos iguales se repelen y polos opuestos se atraen. Por lo tanto, la afirmación es falsa.
```

### 8 — Ley de Ampère (Cálculo de campo)

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "avanzado"
  tags: ["ley_ampere", "campo_magnetico"]

variables:
  r: 0.1
  I: 10.0
  mu_0: 4 * pi * 1e-7

respuesta: "0.000002"
tipo: completar
respuestas_validas:
  - "0.000002"
  - "2.0e-6"

enunciado: "Un cable largo y recto transporta una corriente de {I} A. El campo magnético a una distancia de {r} metros del cable es de ___ Teslas."

pasos:
  - "Usar la fórmula para el campo magnético de un conductor infinito: B = (mu_0 * I) / (2 * pi * r)."
  - "Sustituir: B = (4 * pi * 1e-7 * 10) / (2 * pi * 0.1)."
  - "Simplificar: B = (2 * 1e-7 * 10) / 0.1 = 2e-6 / 0.1 = 2e-5... no, corregimos: B = (2 * 10^-7 * 10) / 0.1 = 2e-6 / 0.1 = 0.00002. Re-calculando: B = (4*pi*1e-7 * 10) / (2*pi*0.1) = (2e-6) / 0.1 = 0.00002."

explicacion: |
  El campo magnético alrededor de un conductor recto se determina mediante la Ley de Ampère. La fórmula es B = (mu_0 * I) / (2 * pi * r).
```

### 9 — Componentes del campo magnético

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes"
  nivel: "basico"
  tags: ["imanes", "polos"]

opciones_explicitas: ["Norte", "Sur"]
respuesta: "Norte"
tipo: mc

enunciado: "En un imán de barra convencional, las líneas de campo magnético salen del polo ___ y entran al polo Sur."

explicacion: |
  Por convención, las líneas de campo magnético se representan saliendo del polo norte y entrando al polo sur en el exterior del imán.
```

### 10 — Orden de fuerzas en un experimento

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["ordenar", "experimento"]

opciones_explicitas: ["Colocar el imán", "Conectar la fuente", "Introducir el cable", "Observar el movimiento"]
respuesta_orden: ["Colocar el imán", "Introducir el cable", "Conectar la fuente", "Observar el movimiento"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para realizar un experimento de observación de la fuerza de Lorentz en un laboratorio:"

explicacion: |
  Primero se prepara el entorno (imán), luego se posiciona el objeto de estudio (cable), se aplica la energía (corriente) y finalmente se mide el efecto físico.
```

### 11 — Origen del campo magnético

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

### 12 — Comparación de fuentes

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["imanes", "electroimanes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10.0, "un imán de neodimio"], [15.0, "un electroimán de núcleo de hierro"]]
  resultados_texto: ["Un campo magnético constante", "Un campo magnético que depende de la corriente"]

respuesta: resultados_texto[escenario_idx]
tipo: mc
opciones_explicitas: ["Un campo magnético constante", "Un campo magnético que depende de la corriente", "Un campo magnético que no existe"]

enunciado: "Si observamos {datos[escenario_idx][0]}, el campo magnético producido es ___."

explicacion: |
  En el caso del imán, el campo es permanente. En el caso del electroimán, la intensidad y dirección dependen directamente de la intensidad de la corriente eléctrica que circula por el conductor.
```

### 13 — La regla de la mano derecha

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["regla_mano_derecha", "corriente"]

respuesta: "hacia arriba"
tipo: completar
respuestas_validas:
  - "hacia arriba"
  - "hacia abajo"

enunciado: "Si aplicamos la regla de la mano derecha para un cable conductor vertical, donde el pulgar apunta hacia arriba (dirección de la corriente), los dedos se curvan indicando que las líneas de campo magnético circulan en un plano horizontal en dirección ___."

explicacion: |
  La regla de la mano derecha establece que el pulgar indica la dirección de la corriente y la curvatura de los dedos indica la dirección de las líneas de campo magnético.
```

### 14 — Polaridad en electroimanes

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

### 15 — Componentes de un electroimán

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes_corrientes"
  nivel: "intermedio"
  tags: ["electroimanes", "componentes"]

respuesta_orden: ["Alambre conductor", "Núcleo ferromagnético", "Fuente de corriente"]
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

### 16 — Origen del campo magnético

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["magnetismo", "corrientes"]

respuesta: "imanes"
tipo: "completar"
respuestas_validas:
  - "imanes"
  - "imán"

enunciado: "A diferencia de las corrientes eléctricas que generan campos magnéticos mediante el movimiento de cargas, los campos magnéticos estáticos pueden ser generados por ___."

explicacion: |
  Los imanes permanentes poseen un campo magnético debido al alineamiento del espín de los electrones en sus átomos, mientras que las corrientes eléctricas generan campos debido al movimiento macroscópico de cargas.
```

### 17 — Comparación de la intensidad del campo

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

explicacion: |
  La intensidad del campo magnético en un electroimán es directamente proporcional a la intensidad de la corriente que circula por el conductor.
```

### 18 — Naturaleza de los polos

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["polos", "imanes"]

respuesta: falso
tipo: "vf"

enunciado: "A diferencia de las cargas eléctricas, donde las cargas iguales se repelen y las distintas se atraen, los polos de un imán pueden ser monopolos magnéticos aislados (es decir, un polo norte sin un polo sur)."

explicacion: |
  Falso. Los polos magnéticos siempre vienen en pares (dipolos). No existen monopolos magnéticos aislados conocidos en la naturaleza; si cortas un imán, obtienes dos imanes más pequeños con sus propios polos.
```

### 19 — Dependencia de la distancia

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

explicacion: |
  Tanto para un imán dipolar como para un conductor rectilíneo, la intensidad del campo magnético disminuye a medida que la distancia al origen del campo aumenta.
```

### 20 — Componentes de un electroimán

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["electroimanes", "componentes"]

respuesta_orden: ["Núcleo ferromagnético", "Bobina de conductor", "Fuente de corriente"]
tipo: "ordenar"
opciones_explicitas: ["Núcleo ferromagnético", "Bobina de conductor", "Fuente de corriente"]

enunciado: "Para construir un electroimán funcional, ordene los componentes desde el que concentra el flujo magnético hacia el que proporciona la energía:"

explicacion: |
  El núcleo ferromagnético concentra las líneas de campo, la bobina (solenoide) es donde circula la corriente que crea el campo, y la fuente de corriente es la que permite el flujo de carga.
```

### 21 — El electroimán de la grúa

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["electromagnetismo", "corrientes"]

variables:
  datos: [[10, "aumenta"], [20, "disminuye"], [5, "se mantiene"]]
  idx: uno_de([0, 1, 2])
  valor_corriente: datos[idx][0]
  efecto: datos[idx][1]

enunciado: "En una planta de reciclaje, una grúa utiliza un electroimán para levantar chatarra. Si se duplica la intensidad de la corriente eléctrica que circula por la bobina del electroimán, la fuerza del campo magnético generado ___."

respuesta: efecto
tipo: completar
respuestas_validas:
  - "aumenta"
  - "disminuye"
  - "se mantiene"

explicacion: |
  La intensidad del campo magnético ($B$) generado por una corriente eléctrica es directamente proporcional a la intensidad de dicha corriente ($I$). Al aumentar la corriente, aumenta la fuerza del campo magnético.
```

### 22 — Brújula y cables eléctricos

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["magnetismo", "brujula"]

variables:
  datos: [[verdadero, "se desvía"], [falso, "no cambia"]]
  idx: uno_de([0, 1])
  resultado: datos[idx][1]

enunciado: "Si acercas una brújula a un cable conductor por el cual circula una corriente eléctrica constante, la aguja de la brújula ___ de su posición de reposo."

respuestas_validas:
  - resultado
respuesta: resultado
tipo: completar
explicacion: |
  Una corriente eléctrica genera un campo magnético a su alrededor. Este campo interactúa con el imán de la brújula, provocando que la aguja se alinee con las líneas de campo magnético.
```

### 23 — Polaridad de un electroimán

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["electromagnetismo", "polaridad"]

variables:
  datos: [[1, "Norte"], [2, "Sur"]]
  idx: uno_de([0, 1])
  polo: datos[idx][1]

enunciado: "Un estudiante construye un electroimán enrollando cable alrededor de un clavo de hierro. Si invierte el sentido de la corriente eléctrica en la bobina, el polo magnético que antes era ___ cambiará de polaridad."

respuesta: polo
tipo: mc
opciones_explicitas: ["Norte", "Sur", "No cambia"]

explicacion: |
  Según la regla de la mano derecha, el sentido de la corriente determina la dirección de las líneas de campo magnético. Si se invierte la corriente, se invierte la polaridad de los polos magnéticos.
```

### 24 — Componentes de un motor eléctrico

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "basico"
  tags: ["motor", "componentes"]

respuesta_orden: ["imán", "cable", "batería"]
tipo: ordenar
opciones_explicitas: ["imán", "cable", "batería"]

enunciado: "Para construir un modelo simple de motor eléctrico (motor de corriente continua), se requiere ensamblar los siguientes componentes en el orden correcto para completar el circuito y generar movimiento:"

pasos:
  - "Colocar un imán permanente en la base."
  - "Conectar un cable conductor enrollado (bobina) al eje."
  - "Conectar la bobina a una batería para cerrar el circuito."

explicacion: |
  Un motor eléctrico requiere una fuente de energía (batería), un conductor (cable/bobina) y un campo magnético constante (imán) para producir la fuerza de Lorentz que genera el movimiento.
```

### 25 — Intensidad del campo magnético

```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "avanzado"
  tags: ["calculo", "campo_magnetico"]

variables:
  datos: [[0.5, "0.001"], [2.0, "0.005"]]
  idx: uno_de([0, 1])
  distancia: datos[idx][0]
  resultado_teorico: datos[idx][1]

enunciado: "Considerando un cable conductor muy largo, la intensidad del campo magnético $B$ es inversamente proporcional a la distancia $r$ del cable. Si la distancia se reduce a la mitad, el valor de $B$ será ___ veces el valor original."

respuestas_validas:
  - resultado_teorico
respuesta: resultado_teorico
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  La fórmula del campo magnético para un cable largo es $B = \mu_0 \cdot I / (2\pi \cdot r)$. Si la distancia $r$ se divide por 2, el campo $B$ se multiplica por 2.
```
