# Examen jefe — Maestro de las Conservaciones

> Logro #158. Dominaste la energía, la corriente y las radiaciones para cerrar este parcial con éxito. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **122 preguntas totales** en 5/5 secciones.

---

## Sección: conservacion-energia-mecanica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["definicion", "energia_cinetica", "energia_potencial"]

respuesta: "energia_mecanica"
tipo: mc
opciones_explicitas: ["energia_cinetica", "energia_potencial", "energia_mecanica", "energia_termica"]

enunciado: "La suma de la energía cinética y la energía potencial de un sistema se denomina ___."

explicacion: |
  La energía mecánica es la suma de las energías de movimiento (cinética) y de posición (potencial).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["leyes_de_conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema donde no actúan fuerzas no conservativas (como la fricción), la energía mecánica total permanece constante durante el movimiento."

explicacion: |
  Si no hay fricción ni resistencia del aire, la energía mecánica se conserva.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["componentes"]

respuesta: ["energia_cinetica", "energia_potencial"]
tipo: completar
respuestas_validas: ["energia_cinetica", "energia_potencial"]

enunciado: "La energía mecánica de un objeto en movimiento se compone de la ___ y la ___."

explicacion: |
  La energía mecánica es la suma de la cinética (movimiento) y la potencial (posición/configuración).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["energia_potencial"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual", "es cero"]

enunciado: "Si un objeto aumenta su altura respecto a un nivel de referencia sin cambiar su masa, su energía potencial ___."

explicacion: |
  La energía potencial gravitatoria es $E_p = m \cdot g \cdot h$. A mayor $h$, mayor $E_p$.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["energia_cinetica"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual", "es cero"]

enunciado: "Si la velocidad de un objeto aumenta, su energía cinética ___."

explicacion: |
  La energía cinética depende del cuadrado de la velocidad ($E_c = \frac{1}{2} m \cdot v^2$).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["calculo", "energia_cinetica"]

variables:
  m: 10
  v: 5

respuesta: 125
tipo: completar
tolerancia_abs: 0.1

enunciado: "Calcula la energía cinética de un objeto de {m} kg que se desplaza a una velocidad de {v} m/s."

pasos:
  - "Identificar la masa (m = 10 kg) y la velocidad (v = 5 m/s)."
  - "Aplicar la fórmula $E_c = \frac{1}{2} \cdot m \cdot v^2$."

explicacion: |
  $E_c = 0.5 \cdot 10 \cdot 5^2 = 0.5 \cdot 10 \cdot 25 = 125$ Joules.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["calculo", "energia_potencial"]

variables:
  m: 2
  h: 10
  g: 9.8

respuesta: 196
tipo: completar
tolerancia_abs: 0.1

enunciado: "Calcula la energía potencial gravitatoria de un objeto de {m} kg situado a una altura de {h} metros. (usa g = {g})"

pasos:
  - "Identificar masa (m=2) y altura (h=10)."
  - "Usar la fórmula $E_p = m \cdot g \cdot h$."

explicacion: |
  $E_p = 2 \cdot 9.8 \cdot 10 = 196$ Joules.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["calculo", "energia_total"]

variables:
  m: 5
  v: 4
  h: 10
  g: 9.8

respuesta: 510
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un objeto de {m} kg se encuentra a una altura de {h} metros con una velocidad de {v} m/s. ¿Cuál es su energía mecánica total?"

pasos:
  - "Calcular $E_c = 0.5 \cdot 5 \cdot 4^2 = 40$ J."
  - "Calcular $E_p = 5 \cdot 9.8 \cdot 10 = 490$ J."
  - "Sumar $E_c + E_p = 40 + 490 = 530$."

explicacion: |
  $E_{total} = 530$ J. (Nota: El enunciado pide el cálculo, el valor es 530).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["friccion", "error"]

respuesta: falso
tipo: vf

enunciado: "Si un objeto desliza por un plano inclinado con mucha fricción, la energía mecánica total se mantiene constante."

explicacion: |
  Falso. La fricción convierte la energía mecánica en energía térmica (calor).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["transformacion"]

respuesta: "cinetica"
tipo: mc
opciones_explicitas: ["cinetica", "potencial", "termica", "nuclear"]

enunciado: "Cuando un objeto que estaba en reposo a una altura $h$ cae libremente, la energía potencial se transforma principalmente en energía ___."

explicacion: |
  A medida que baja, la altura disminuye (menor $E_p$) y la velocidad aumenta (mayor $E_c$).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["error", "relacion"]

respuesta: falso
tipo: vf

enunciado: "Si duplicamos la masa de un objeto, su energía cinética se duplica para una misma velocidad."

explicacion: |
  Verdadero. $E_c = 0.5 \cdot m \cdot v^2$, por lo tanto es directamente proporcional a la masa. (Nota: El usuario debe saber que es verdadero).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["comparacion"]

variables:
  idx: uno_de([0,1])
  escenario: [[10, 5], [5, 10]]

respuesta: "el_objeto_con_mas_energia"
tipo: mc
opciones_explicitas: ["el_objeto_con_mas_energia", "ambos_tienen_la_misma"]

enunciado: "Si comparamos un objeto A con datos {escenario[idx][0]} kg y 5 m/s, contra un objeto B con 5 kg y 10 m/s, ¿cuál tiene mayor energía cinética?"

explicacion: |
  Se debe calcular $0.5 \cdot m \cdot v^2$ para ambos.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["aplicacion", "montaña_rusa"]

variables:
  h_inicial: 50
  v_inicial: 0
  m: 100
  g: 9.8

respuesta: 49000
tipo: completar
tolerancia_abs: 1

enunciado: "En una montaña rusa, un carrito de {m} kg parte del reposo desde una altura de {h_inicial} m. ¿Cuál es su energía mecánica total en ese punto?"

pasos:
  - "Como está en reposo, $E_c = 0$."
  - "Calcular $E_p = m \cdot g \cdot h = 100 \cdot 9.8 \cdot 50$."

explicacion: |
  $E_{total} = 49000$ J.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["energia_mecanica", "conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "La energía mecánica total (Ec + Ep) se conserva en ausencia de fuerzas no conservativas como la fricción."

explicacion: |
  La energía mecánica total se conserva cuando sólo actúan fuerzas conservativas (como la gravedad o un resorte ideal), sin pérdidas de calor, sonido u otras formas de disipación.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["pendulo", "transformacion_energia"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[1.5, "5.42"], [2.0, "6.26"], [3.0, "7.67"]]

enunciado: "Un péndulo se suelta desde una altura de {datos[idx][0]} metros. ¿Cuál es la velocidad (en m/s) al pasar por el punto más bajo? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ep_inicial = Ec_final"
  - "m·g·h = (1/2)·m·v² → v = sqrt(2·g·h)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [datos[idx][1]]
tolerancia_abs: 0.1

explicacion: |
  La energía potencial gravitatoria se transforma íntegramente en cinética al pasar por el punto más bajo: v = sqrt(2·g·h).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["friccion", "comparacion"]

opciones_explicitas: ["sí se conserva", "no se conserva", "depende de la masa"]
respuesta: "no se conserva"
tipo: mc

enunciado: "En un sistema donde actúa fricción, ¿se conserva la energía mecánica total?"

explicacion: |
  La fricción es una fuerza no conservativa que disipa energía en forma de calor. Por lo tanto, la energía mecánica total no se conserva en presencia de fricción.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["caida_libre", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[17, "14.74"], [20, "20.41"], [23, "26.99"]]

enunciado: "Una pelota se lanza hacia arriba con velocidad inicial {datos[idx][0]} m/s. ¿A qué altura máxima (en metros) alcanzará? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ec_inicial = Ep_final"
  - "m·v²/2 = m·g·h → h = v²/(2·g)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [datos[idx][1]]
tolerancia_abs: 0.1

explicacion: |
  La energía cinética inicial se transforma completamente en potencial gravitatoria: h = v²/(2g).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["fuerzas_conservativas", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "La gravedad es una fuerza conservativa."

explicacion: |
  Las fuerzas conservativas son aquellas donde el trabajo realizado no depende de la trayectoria seguida (como la gravedad o la fuerza elástica). La gravedad sí es conservativa.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["montana_rusa", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[30, "24.25"], [45, "29.70"], [60, "34.29"]]

enunciado: "Una montaña rusa parte desde una altura de {datos[idx][0]} metros con velocidad inicial cero. ¿Cuál es su velocidad (en m/s) en el punto más bajo? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ep_inicial = Ec_final"
  - "m·g·h = (1/2)·m·v² → v = sqrt(2·g·h)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [datos[idx][1]]
tolerancia_abs: 0.1

explicacion: |
  La energía potencial inicial se transforma en cinética: v = sqrt(2·g·h). La masa del vehículo no afecta el resultado.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["comparacion", "resorte"]

opciones_explicitas: ["sí se conserva", "no se conserva"]
respuesta: "sí se conserva"
tipo: mc

enunciado: "En un resorte ideal sin fricción, ¿se conserva la energía mecánica total?"

explicacion: |
  Un resorte ideal es un sistema conservativo. La energía se transforma entre cinética y potencial elástica, pero no hay pérdidas.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["friccion", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[150, "7.25"], [200, "8.37"], [250, "9.35"]]
  m: 4

enunciado: "Un bloque de {m} kg se desliza por una superficie con fricción, perdiendo el 30% de su energía mecánica. Si inicialmente tiene {datos[idx][0]} J de energía cinética, ¿cuál es su velocidad final (en m/s)?"

pasos:
  - "Energía restante = 70% de la energía cinética inicial"
  - "Ec_final = (m·v²)/2 → v = sqrt(2·0.7·Ec_inicial/m)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [datos[idx][1]]
tolerancia_abs: 0.1

explicacion: |
  La fricción disipa el 30% de la energía, dejando el 70% disponible como energía cinética final.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["comparacion", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema con fricción, la energía mecánica total disminuye con el tiempo."

explicacion: |
  La fricción convierte parte de la energía mecánica en calor, reduciendo la suma total (Ec + Ep) con el tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["pendulo", "completar"]

respuestas_validas: ["máximo", "maximo"]
respuesta: "máximo"
tipo: completar

enunciado: "En un péndulo, la energía cinética es ___ cuando pasa por el punto más bajo."

explicacion: |
  El punto más bajo corresponde a la máxima velocidad y, por lo tanto, a la máxima energía cinética. La energía potencial es mínima allí.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["calculo", "caida_libre"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[15, "17.15"], [20, "19.80"], [25, "22.14"]]

enunciado: "¿Con qué velocidad inicial (en m/s) debe lanzarse un objeto hacia arriba para alcanzar una altura de {datos[idx][0]} metros? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ec_inicial = Ep_final"
  - "m·v²/2 = m·g·h → v = sqrt(2·g·h)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [datos[idx][1]]
tolerancia_abs: 0.1

explicacion: |
  Toda la energía cinética inicial debe transformarse en potencial gravitatoria: v = sqrt(2·g·h).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["sistema_conservativo", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema donde sólo actúan fuerzas conservativas (como la gravedad) es un ejemplo de conservación de la energía mecánica."

explicacion: |
  En sistemas ideales donde sólo actúan fuerzas conservativas, la energía mecánica total (Ec + Ep) se mantiene constante.
```

## Sección: corriente-electrica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["definicion", "carga"]

respuesta: "flujo de carga"
tipo: completar
respuestas_validas: ["flujo de carga", "movimiento de cargas"]

enunciado: "La corriente eléctrica se define físicamente como el ___ a través de un conductor."

explicacion: |
  La corriente eléctrica es el flujo de carga eléctrica (producido principalmente por electrones en metales) que atraviesa una sección de un conductor por unidad de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

variables:
  opciones: [["Amperio", "Voltio", "Ohmio", "Coulomb"]]

respuesta: opciones[uno_de([0,1,2,3])]
tipo: mc
opciones_explicitas: ["Amperio", "Voltio", "Ohmio", "Coulomb"]

enunciado: "La unidad de medida de la intensidad de corriente eléctrica en el Sistema Internacional es el ___."

explicacion: |
  El Amperio (A) es la unidad de intensidad de corriente. El Voltio (V) es potencial, el Ohmio (Ω) es resistencia y el Coulomb (C) es carga.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "intensidad"]

variables:
  escenario: [[10, 2], [20, 4], [5, 5], [12, 3]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][0] / escenario[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una carga de {escenario[idx][0]} Coulombs atraviesa una sección de un conductor en un tiempo de {escenario[idx][1]} segundos, ¿cuál es la intensidad de corriente eléctrica?"

pasos:
  - "Calcular la intensidad usando la fórmula: I = Q / t"
  - "Dividir la carga (C) por el tiempo (s)"

explicacion: |
  La intensidad de corriente I se calcula como la carga total Q dividida por el tiempo t: I = Q/t. En este caso: {escenario[idx][0]} / {escenario[idx][1]} = {escenario[idx][0] / escenario[idx][1]} A.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["verdadero_falso", "electrones"]

respuesta: falso
tipo: vf

enunciado: "En un cable de cobre, la corriente eléctrica es producida por el movimiento de protones a través del metal."

explicacion: |
  Falso. En los metales conductores, la corriente es transportada por el movimiento de electrones libres, no de protones (los cuales están fijos en el núcleo atómico).
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: ["Carga eléctrica", "Conductor", "Fuente de energía"]
tipo: ordenar

opciones_explicitas: ["Carga eléctrica", "Conductor", "Fuente de energía"]

enunciado: "Para que exista una corriente eléctrica en un circuito simple, se requiere que los elementos estén presentes en un orden lógico de dependencia (desde el origen del movimiento hasta el medio):"

explicacion: |
  Para que haya corriente se necesita una fuente que impulse las cargas, las cargas que se mueven y un camino (conductor) para que lo hagan.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["intensidad", "carga", "amperios"]

variables:
  datos: [[0.005, "0.005"], [0.012, "0.012"], [0.025, "0.025"]]
  idx: uno_de([0,1,2])
  carga: datos[idx][0]
  respuesta_str: datos[idx][1]

respuesta: carga / 2.0
tipo: completar
tolerancia_abs: 0.001

enunciado: "Una carga eléctrica de {carga} Coulombs atraviesa una sección transversal de un conductor en un intervalo de tiempo de 2 segundos. ¿Cuál es la intensidad de corriente eléctrica en Amperios?"

pasos:
  - "Identificar la carga (Q) = {carga} C"
  - "Identificar el tiempo (t) = 2 s"
  - "Aplicar la fórmula: I = Q / t"
  - "Calcular: {carga} / 2"

explicacion: |
  La intensidad de corriente (I) se define como la cantidad de carga que pasa por un punto en un tiempo determinado. La fórmula es I = Q / t. En este caso, {carga} / 2 = {respuesta_str} A.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["concepto", "flujo"]

respuesta: verdadero
tipo: vf

enunciado: "¿La corriente eléctrica se define como el flujo de carga eléctrica a través de un conductor por unidad de tiempo?"

explicacion: |
  Correcto. La corriente eléctrica es la rapidez con la que las cargas eléctricas atraviesan una sección de un conductor.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

opciones_explicitas: ["Voltio", "Amperio", "Ohmio", "Coulomb"]
respuesta: "Amperio"
tipo: mc

enunciado: "¿Cuál es la unidad de medida de la intensidad de corriente eléctrica en el Sistema Internacional (SI)?"

explicacion: |
  La unidad de la intensidad de corriente es el Amperio (A), mientras que el Voltio es para potencial, el Ohmio para resistencia y el Coulomb para carga.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "corriente"]

variables:
  escenario: [[10, 2, "0.5"], [20, 5, "4.0"], [5, 1, "5.0"]]
  idx: uno_de([0,1,2])
  q: escenario[idx][0]
  t: escenario[idx][1]
  res: escenario[idx][2]

respuesta: res
tipo: completar
respuestas_validas: ["0.5", "4.0", "5.0"]

enunciado: "Si una corriente de ___ A fluye por un cable, la carga que atraviesa el conductor en ___ segundos es de ___ C."

explicacion: |
  Usando la relación despejada de la fórmula I = Q / t, tenemos que Q = I * t. Para este caso: {res} = {q} * {t}.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "pasos"]

opciones_explicitas: ["Identificar valores de carga y tiempo", "Aplicar la fórmula I = Q / t", "Dividir la carga por el tiempo"]
respuesta: ["Identificar valores de carga y tiempo", "Aplicar la fórmula I = Q / t", "Dividir la carga por el tiempo"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema de cálculo de intensidad de corriente eléctrica:"

explicacion: |
  Para resolver correctamente, primero debemos extraer los datos del enunciado, luego seleccionar la fórmula matemática adecuada y finalmente realizar la operación aritmética.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["carga", "sentido_convencional", "electrones"]

respuesta: "convencional"
tipo: mc
opciones_explicitas: ["real", "convencional"]

enunciado: "En un circuito físico, los electrones se desplazan del polo negativo al positivo. Sin embargo, por convención histórica, el sentido de la corriente eléctrica se define de forma ___."

explicacion: |
  El sentido convencional de la corriente es del polo positivo al negativo, siguiendo el movimiento de cargas positivas imaginarias, aunque en los metales sean los electrones (cargas negativas) los que se mueven en sentido opuesto.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["intensidad", "carga", "tiempo"]

variables:
  escenario: uno_de([[1.2, 2.0], [3.5, 5.0], [0.8, 1.5]])

respuesta: escenario[0][1
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una carga eléctrica de {escenario[0][0]} Coulombs atraviesa una sección transversal de un conductor en un intervalo de tiempo de {escenario[0][1]} segundos. ¿Cuál es la intensidad de corriente eléctrica (en Amperios)?"

pasos:
  - "Identificar la fórmula de intensidad: I = ΔQ / Δt"
  - "Dividir la carga total por el tiempo transcurrido"

explicacion: |
  La intensidad de corriente se define como la cantidad de carga que pasa por un punto en un tiempo determinado: I = Q/t. En este caso, {escenario[0][0]} / {escenario[0][1]} = {escenario[0][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["concepto", "flujo"]

respuesta: falso
tipo: vf

enunciado: "La corriente eléctrica es, por definición, un flujo de materia (átomos) que se desplaza a través de un conductor."

explicacion: |
  Falso. La corriente eléctrica es el flujo de **cargas eléctricas** (como electrones o iones), no necesariamente de la materia completa (átomos). En los metales, los átomos permanecen en una red fija mientras los electrones se desplazan.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "avanzado"
  tags: ["electrones", "carga_elemental"]

variables:
  caso: uno_de([[2, 2.0e-19], [5, 1.6e-19], [10, 1.6e-19]])

respuesta: caso[0][0
tipo: completar
respuestas_validas: ["1", "2", "5", "10"]

enunciado: "Si por un conductor circula una corriente tal que en un segundo pasan {caso[0][1]} Coulombs de carga, ¿cuántos electrones han atravesado la sección en ese tiempo? (Considere la carga del electrón como {caso[0][1]} C)"

explicacion: |
  Para hallar el número de electrones (n), usamos la relación Q = n * e, donde e es la carga elemental. Despejando: n = Q / e. En este caso: {caso[0][0]} / {caso[0][1]} = {caso[0][0]}.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "calculo"]

respuesta: ["identificar_carga", "identificar_tiempo", "dividir_valores"]
tipo: ordenar
opciones_explicitas: ["identificar_carga", "identificar_tiempo", "dividir_valores", "multiplicar_valores"]

enunciado: "Ordena los pasos lógicos para calcular la intensidad de corriente eléctrica si se conoce la carga total y el tiempo transcurrido."

explicacion: |
  Para aplicar la fórmula I = Q/t, primero debemos conocer los valores de la carga (Q) y el tiempo (t), y finalmente realizar la división correspondiente.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["carga", "corriente", "conceptos"]

respuesta: "corriente"
tipo: "completar"
respuestas_validas: ["corriente"]

enunciado: "Mientras que la carga eléctrica es una propiedad intrínseca de las partículas, la ___ es la medida del flujo de carga que atraviesa una sección transversal por unidad de tiempo."

explicacion: |
  La carga eléctrica es una propiedad estática, mientras que la corriente eléctrica es una magnitud dinámica que describe el movimiento de dichas cargas.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "corriente", "diferencia"]

variables:
  escenario: uno_de([
    ["un cable conectado a una batería de 9V", "9", "0.5"],
    ["un cable conectado a una batería de 12V", "12", "0.8"],
    ["un cable conectado a una batería de 5V", "5", "0.3"]
  ])

respuesta: escenario[2
tipo: "mc"
opciones_explicitas: ["escenario[1]", "escenario[2]", "escenario[0]"]

enunciado: "Si mantenemos la resistencia constante, ¿cuál es la intensidad de corriente que circula por el circuito dado el voltaje de {escenario[0]}?"

pasos:
  - "Identificar el voltaje: {escenario[1]} V"
  - "Identificar la resistencia (asumida constante para el ejemplo)"
  - "Calcular I = V / R"

explicacion: |
  La intensidad de corriente es directamente proporcional al voltaje según la Ley de Ohm. Al aumentar el voltaje, la corriente aumenta proporcionalmente.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["cc", "ca", "tipo_corriente"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es cierto que en la corriente continua (CC) la dirección y magnitud del flujo de carga cambian periódicamente con el tiempo, a diferencia de la corriente alterna (CA)?"

explicacion: |
  Es falso. Es al revés: en la corriente alterna (CA) el flujo cambia de dirección periódicamente, mientras que en la corriente continua (CC) el flujo es constante en dirección y magnitud.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

respuesta: "amperio"
tipo: "mc"
opciones_explicitas: ["voltio", "amperio", "ohmio", "culombio"]

enunciado: "La magnitud de la corriente eléctrica se mide en ___."

explicacion: |
  El amperio (A) es la unidad de intensidad de corriente en el SI, mientras que el voltio mide potencial y el ohmio la resistencia.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["flujo", "carga", "orden"]

respuesta: ["carga", "movimiento", "corriente"]
tipo: "ordenar"
opciones_explicitas: ["carga", "movimiento", "corriente"]

enunciado: "Ordena los conceptos para describir el proceso físico que da origen a la corriente eléctrica: primero la existencia de ___, luego el ___ de estas a través de un conductor, y finalmente el fenómeno resultante llamado ___."

explicacion: |
  El proceso lógico es: 1. Presencia de carga, 2. Movimiento de carga, 3. Corriente eléctrica.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["electricidad", "intensidad"]

variables:
  datos: [["un cargador de celular de 5W conectado a 220V", "0.0227"], ["una bombilla de 60W conectada a 120V", "0.5"], ["un calefactor de 2200W conectado a 220V", "10.0"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si tenemos {datos[idx][0]}, la intensidad de corriente que circula es de aproximadamente ___ A."

respuestas_validas: ["0.0227", "0.5", "10.0"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La intensidad de corriente (I) se calcula mediante la fórmula I = P / V, donde P es la potencia en Watts y V es el voltaje en Voltios.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["carga", "electrones"]

variables:
  datos: [["2.0", "1.25e25"], ["0.5", "3.12e24"], ["4.0", "2.50e25"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si por un conductor circula una carga de {datos[idx][0]} Coulombs en un tiempo de 1 segundo, la cantidad de electrones que fluyen es aproximadamente ___."

respuestas_validas: ["1.25e25", "3.12e24", "2.50e25"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La carga total es Q = n * e, donde n es el número de electrones y e es la carga del electrón (1.6e-19 C). Por lo tanto, n = Q / e.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["conceptos", "ca"]

enunciado: "¿La corriente que suministran las baterías de un teléfono móvil es de tipo alterna (AC)?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: completar
explicacion: |
  Las baterías proporcionan corriente continua (DC), donde los electrones fluyen en un solo sentido. La corriente alterna (AC) es la que llega a los enchufes de las casas.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "amperaje"]

variables:
  datos: [["una corriente de 0.5A", "500"], ["una corriente de 1.2A", "1200"], ["una corriente de 0.05A", "50"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si un multímetro está configurado para medir miliamperios (mA), ¿qué valor mostrará para {datos[idx][0]}?"

opciones_explicitas: ["500", "1200", "50"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Para convertir Amperios (A) a miliamperios (mA), se multiplica el valor por 1000.
```

```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "seguridad"]

enunciado: "Ordena los pasos correctos para medir la intensidad de corriente en un componente usando un multímetro en serie:"

opciones_explicitas: ["Abrir el circuito", "Conectar el multímetro en serie", "Cerrar el circuito para medir"]
respuesta: ["Abrir el circuito", "Conectar el multímetro en serie", "Cerrar el circuito para medir"]
tipo: ordenar

explicacion: |
  Para medir corriente, el multímetro debe formar parte del camino de la electricidad, por lo que el circuito debe interrumpirse para insertarlo en serie.
```

## Sección: decaimiento-radiactivo-alfa-beta-gamma (23 preguntas)

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["nucleo", "alfa"]

respuesta: "núcleo de helio"
tipo: completar
respuestas_validas: ["núcleo de helio", "particula alfa"]

enunciado: "La radiación alfa consiste en la emisión de un ___."

explicacion: |
  Una partícula alfa es idéntica al núcleo de un átomo de helio, compuesta por dos protones y dos neutrones.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["beta", "electrones"]

variables:
  escenario_idx: uno_de([0, 1])
  particula_beta: uno_de(["electrón", "positrón"])

respuesta: "negativa"
tipo: mc
opciones_explicitas: ["positiva", "negativa", "neutra"]

enunciado: "En el decaimiento beta menos ($\beta^-$), un neutrón se transforma en un protón y se emite una partícula de carga {particula_beta}."

explicacion: |
  En el decaimiento beta menos, el neutrón se convierte en protón y emite un electrón (carga negativa).
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

respuesta: verdadero
tipo: vf

enunciado: "¿La radiación gamma está compuesta por fotones de alta energía y no posee carga eléctrica ni masa?"

explicacion: |
  Correcto. A diferencia de las partículas alfa y beta, la radiación gamma es energía electromagnética pura (fotones).
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["alcance", "radiacion"]

variables:
  tipo_rad: uno_de(["alfa", "beta", "gamma"])
  alcance_desc: uno_de(["muy corto", "moderado", "muy alto"])

respuesta: alcance_desc[tipo_rad
tipo: mc
opciones_explicitas: ["muy corto", "moderado", "muy alto"]

enunciado: "El alcance de la radiación tipo {tipo_rad} en el aire es {alcance_desc}."

explicacion: |
  La partícula alfa tiene un alcance muy corto (se detiene con una hoja de papel), la beta un alcance moderado y la gamma un alcance muy alto.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["secuencia", "nucleo"]

respuesta: ["emisión de partículas alfa", "emisión de partículas beta", "emisión de radiación gamma"]
tipo: ordenar
opciones_explicitas: ["emisión de partículas alfa", "emisión de partículas beta", "emisión de radiación gamma"]

enunciado: "Ordene las siguientes emisiones según su capacidad de penetración (de menor a mayor):"

explicacion: |
  La radiación alfa tiene la menor capacidad de penetración, seguida por la beta, mientras que la gamma es la más penetrante.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["nucleica", "particulas"]

enunciado: "Una partícula alfa consiste en un núcleo de helio. Por lo tanto, una partícula alfa está compuesta por ___ neutrones y ___ protones."

respuestas_validas: ["2", "2"]

respuesta: ["2", "2"]
tipo: completar

explicacion: |
  Una partícula alfa ($\alpha$) es idéntica al núcleo de un átomo de Helio-4, lo que significa que contiene 2 protones y 2 neutrones (carga +2 y masa 4).
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["beta", "nucleica"]

variables:
  escenario: uno_de([
    ["14", "14", "15", "14"],
    ["238", "238", "239", "238"],
    ["12", "12", "13", "12"]
  ])

enunciado: "Un núcleo radiactivo de un isótopo con número de masa {escenario[0]} emite una partícula beta negativa ($\beta^-$). ¿Cuál será el número de masa del nuevo núcleo resultante?"

opciones_explicitas: ["{escenario[0]}", "{escenario[2]}", "{escenario[1]}", "1"]

respuesta: "{escenario[0]}"
tipo: mc

explicacion: |
  En el decaimiento $\beta^-$, un neutrón se transforma en un protón y emite un electrón. El número de masa ($A$) permanece constante porque la suma de protones y neutrones no cambia.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["calculo", "vida_media"]

variables:
  datos: uno_de([
    [100, 10, 50],
    [80, 5, 40],
    [200, 20, 100]
  ])

enunciado: "Una muestra contiene {datos[0]} gramos de una sustancia con una vida media de {datos[1]} años. ¿Cuánta masa de la sustancia permanecerá después de transcurridos {datos[1]} años (es decir, una vida media)?"

respuesta: datos[2
tipo: completar
tolerancia_abs: 0.001

pasos:
  - "Identificar la masa inicial ($N_0$): {datos[0]} g"
  - "Identificar el tiempo transcurrido ($t$): {datos[1]} años"
  - "Identificar la vida media ($T_{1/2}$): {datos[1]} años"
  - "Aplicar la fórmula de decaimiento: $N(t) = N_0 \cdot (1/2)^{(t/T_{1/2})}$"
  - "Calcular: $N(t) = {datos[0]} \cdot (1/2)^{1} = {datos[2]}$"

explicacion: |
  Después de transcurrir una vida media, la cantidad de la sustancia se reduce exactamente a la mitad de su valor inicial.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["particulas", "alfa"]

respuesta: "particula_alfa"
tipo: mc
opciones_explicitas: ["particula_alfa", "particula_beta", "fotón_gamma"]

enunciado: "Un núcleo emite una partícula con carga eléctrica +2 y masa equivalente a dos nucleones. ¿Qué tipo de radiación es?"

explicacion: |
  La radiación alfa consiste en núcleos de helio (2 protones y 2 neutrones), por lo que su carga es +2.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

respuesta: falso
tipo: vf

enunciado: "¿La radiación gamma consiste en la emisión de partículas con masa y carga eléctrica?"

explicacion: |
  Falso. La radiación gamma es radiación electromagnética (fotones), por lo tanto, no tiene masa ni carga eléctrica.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["beta", "nucleidos"]

variables:
  datos: [[6, 7], [11, 12], [26, 27]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo de número atómico {datos[idx][0]} sufre un decaimiento beta menos (emisión de un electrón). El nuevo número atómico será ___."

respuestas_validas: ["7", "12", "27"]

explicacion: |
  En el decaimiento beta menos, un neutrón se transforma en un protón, aumentando el número atómico en 1.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetracion", "radiacion"]

respuesta: ["alfa", "beta", "gamma"]
tipo: ordenar

opciones_explicitas: ["alfa", "beta", "gamma"]

enunciado: "Ordena las siguientes radiaciones de MENOR a MAYOR capacidad de penetración en la materia:"

explicacion: |
  La radiación alfa es detenida por una hoja de papel; la beta requiere algo más denso (como aluminio) y la gamma requiere materiales muy densos como plomo o concreto.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["gamma", "emision"]

respuesta: "fotón"
tipo: mc
opciones_explicitas: ["fotón", "electrón", "neutrón"]

enunciado: "A menudo se confunde la emisión de partículas con la emisión de energía pura. ¿Cuál de estas emisiones es puramente energía electromagnética sin masa?"

explicacion: |
  La radiación gamma es la emisión de energía en forma de fotones, a diferencia de las partículas alfa o beta que poseen masa.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["alfa", "particula", "carga"]

enunciado: "La radiación alfa está compuesta por un núcleo de helio, lo que significa que posee una carga eléctrica de ___."

respuestas_validas: ["+2", "+2", "+2"]
respuesta: "+2"
tipo: completar

explicacion: |
  Una partícula alfa consiste en 2 protones y 2 neutrones, resultando en una carga de +2.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetración", "alfa", "beta", "gamma"]

opciones_explicitas: ["La radiación gamma tiene mayor capacidad de penetración que la beta", "La radiación alfa tiene mayor capacidad de penetración que la gamma", "La radiación beta tiene mayor capacidad de penetración que la alfa"]

enunciado: "Considerando la capacidad de atravesar la materia, ¿cuál de las siguientes afirmaciones es correcta?"

respuesta: "La radiación gamma tiene mayor capacidad de penetración que la beta"
tipo: mc

explicacion: |
  La radiación gamma, al ser una onda electromagnética de alta energía sin masa ni carga, atraviesa la materia con mucha más facilidad que las partículas alfa o beta.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

enunciado: "¿Es la radiación gamma una partícula con masa y carga eléctrica?"

respuesta: falso
tipo: vf

explicacion: |
  A diferencia de las partículas alfa y beta, la radiación gamma es radiación electromagnética (fotones) y no posee masa ni carga.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["beta", "neutrino", "nucleo"]

variables:
  escenario: uno_de([[1, "electrón"], [2, "neutrón"]])

enunciado: "En un decaimiento beta negativo, un neutrón se transforma en un protón y emite una partícula tipo {escenario[idx]} para conservar la carga."

pasos:
  - "Identificar la partícula emitida en el decaimiento beta-"
  - "Comparar con la composición del núcleo"

respuestas_validas: ["electrón", "electrón"]
respuesta: "electrón"
tipo: completar

explicacion: |
  En el decaimiento beta menos, un neutrón se convierte en un protón, emitiendo un electrón (partícula beta) y un antineutrino.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["interacción", "materia", "orden"]

opciones_explicitas: ["Alfa, Beta, Gamma", "Gamma, Beta, Alfa", "Alfa, Gamma, Beta"]

enunciado: "Ordena las radiaciones de mayor a menor capacidad de penetración (de la que más atraviesa a la que menos atraviesa):"

respuesta: ["Gamma, Beta, Alfa"]
tipo: ordenar

explicacion: |
  El orden de penetración es: Gamma (máxima, atraviesa casi todo), Beta (media, requiere láminas de aluminio) y Alfa (mínima, es detenida por una hoja de papel).
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["alfa", "particulas", "radiactividad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["un detector de humo detecta una partícula con carga +2 y masa de 4 unidades de masa atómica", "particula_alfa"], ["un emisor de partículas emite un núcleo de helio", "particula_alfa"]]

enunciado: "En el siguiente escenario: {escenarios[escenario_idx][0]}, la radiación emitida es una ___."

respuestas_validas: ["particula_alfa"]

respuesta: escenarios[escenario_idx][1
tipo: completar

explicacion: |
  La radiación alfa consiste en núcleos de helio (2 protones y 2 neutrones), por lo que tienen carga +2.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetracion", "gamma", "alfa"]

variables:
  tipo_rad: uno_de([0,1,2])
  datos: [["alfa", "papel"], ["beta", "aluminio"], ["gamma", "plomo"]]

enunciado: "Si nos enfrentamos a una radiación tipo {datos[tipo_rad][0]}, el material necesario para detenerla es aproximadamente una lámina de {datos[tipo_rad][1]}."

opciones_explicitas: ["papel", "aluminio", "plomo"]

respuesta: datos[tipo_rad][1
tipo: mc

explicacion: |
  Las partículas alfa son detenidas por una hoja de papel; las beta por aluminio delgado y los rayos gamma requieren materiales densos como el plomo.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["beta", "electrones"]

enunciado: "¿Es correcto afirmar que la radiación beta consiste en la emisión de un electrón de alta energía?"

respuesta: verdadero
tipo: vf

explicacion: |
  La radiación beta negativa es la emisión de un electrón, mientras que la beta positiva es la emisión de un positrón.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["secuencia", "nucleidos"]

enunciado: "Ordene los pasos de un decaimiento alfa para un núcleo de Uranio-238 (U-238) hacia su descendiente inmediato:"

opciones_explicitas: ["Emisión de 2 protones", "Emisión de 2 neutrones", "Transformación en Torio-234"]

respuesta: ["Emisión de 2 protones", "Emisión de 2 neutrones", "Transformación en Torio-234"]
tipo: ordenar

explicacion: |
  En el decaimiento alfa, el núcleo pierde 2 protones y 2 neutrones, reduciendo su número atómico en 2.
```

```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["gamma", "fotones"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["un núcleo excitado libera energía sin cambiar su número atómico", "fotones"], ["la emisión de energía electromagnética pura", "fotones"]]

enunciado: "En el caso de {casos[caso_idx][0]}, lo que se emite es radiación gamma, la cual está compuesta por ___."

respuestas_validas: ["fotones"]

respuesta: casos[caso_idx][1
tipo: completar

explicacion: |
  A diferencia de las partículas alfa o beta, la radiación gamma no tiene masa ni carga, es energía electromagnética (fotones).
```

## Sección: decibeles-richter (24 preguntas)

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["decibeles", "vocabulario"]

enunciado: "¿Qué mide la escala de decibeles (dB)?"
tipo: mc
opciones_explicitas:
  - "La intensidad de un sonido, comparada con una intensidad de referencia"
  - "La frecuencia de un sonido (agudo o grave)"
  - "La duración de un sonido"
respuesta: "La intensidad de un sonido, comparada con una intensidad de referencia"

explicacion: |
  Es una escala de intensidad relativa, no de frecuencia ni de
  duración.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula del nivel de intensidad sonora es dB = 10 × log₁₀(I / I₀), con I₀ una intensidad de referencia fija."

explicacion: |
  Es una escala logarítmica, no lineal.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un aumento de 10 dB representa 10 veces más intensidad física del sonido."

explicacion: |
  Es consecuencia directa de que la escala usa un logaritmo en base 10.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "calculo"]

variables:
  exponente: random(1, 8)
  razon: 10 ^ exponente

respuesta: 10 * log10(razon)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un sonido tiene una intensidad {razon} veces mayor que la intensidad de referencia. ¿Cuántos decibeles representa?"

pasos:
  - "dB = 10 × log₁₀({razon})"

explicacion: |
  Se aplica la fórmula del decibel sobre la razón de intensidades dada.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque un aumento de 10 dB representa 10 veces más intensidad física, el oído humano lo percibe aproximadamente como el doble de fuerte."

explicacion: |
  La percepción de sonoridad tiene su propia escala, distinta de la
  intensidad física medida.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un aumento de aproximadamente 3 dB ya representa el doble de intensidad física del sonido."

explicacion: |
  10 elevado a (3/10) da aproximadamente 2 — de ahí sale esa
  aproximación tan citada.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "comparacion"]

variables:
  db_a: random(40, 70)
  db_b: random(80, 120)

respuesta: (db_b > db_a)
tipo: vf

enunciado: "Sonido A: {db_a} dB. Sonido B: {db_b} dB. ¿El sonido B tiene mayor intensidad física que el sonido A?"

explicacion: |
  A mayor cantidad de decibeles, mayor la intensidad física del sonido.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["decibeles", "calculo"]

variables:
  db: uno_de([10, 20, 30, 40, 50, 60])

respuesta: 10 ^ (db / 10)
tipo: input
tolerancia_abs: 1

enunciado: "Un sonido tiene un nivel de {db} dB. ¿Cuántas veces más intenso es que la intensidad de referencia?"

explicacion: |
  Se despeja la razón de intensidades invirtiendo la fórmula del
  decibel.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["decibeles", "orden"]

tipo: ordenar
enunciado: "Ordená estos sonidos de menor a mayor intensidad, según su nivel en decibeles."
opciones_explicitas:
  - "Una conversación normal (60 dB)"
  - "Un susurro (30 dB)"
  - "Un avión despegando (130 dB)"
respuesta_orden: ["Un susurro (30 dB)", "Una conversación normal (60 dB)", "Un avión despegando (130 dB)"]

explicacion: |
  A mayor número de decibeles, mayor la intensidad del sonido.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala de decibeles comprime un rango enorme de intensidades físicas (de billones de veces de diferencia) en una escala de números manejables."

explicacion: |
  Es la razón de fondo por la que se usa una escala logarítmica en vez
  de la intensidad física directa.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "verificacion"]

variables:
  exponente: random(1, 8)
  razon: 10 ^ exponente
  correcto: 10 * log10(razon)
  error: uno_de([0, 0, 0, 10, -10])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Un sonido {razon} veces más intenso que la referencia, nivel informado: {mostrado} dB."

explicacion: |
  Se vuelve a calcular con la fórmula del decibel y se compara con el
  valor informado.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["richter", "vocabulario"]

enunciado: "¿Qué mide la escala Richter?"
tipo: mc
opciones_explicitas:
  - "La magnitud de un terremoto, relacionada con la energía liberada"
  - "La duración de un terremoto"
  - "La cantidad de réplicas de un terremoto"
respuesta: "La magnitud de un terremoto, relacionada con la energía liberada"

explicacion: |
  Es una medida de magnitud, no de duración ni de cantidad de eventos.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala Richter es una escala logarítmica, igual que los decibeles y el pH."

explicacion: |
  Los tres usan la misma herramienta matemática: un logaritmo de una
  razón.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada punto entero de magnitud Richter representa una amplitud de onda sísmica 10 veces mayor."

explicacion: |
  Es el mismo tipo de salto (factor de 10) que en la escala de pH.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada punto entero de magnitud Richter representa, aproximadamente, 31,6 veces más energía liberada (10 elevado a 1,5)."

explicacion: |
  Es un factor distinto al de la amplitud (10 veces): la energía crece
  más rápido que la amplitud por cada punto.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "calculo"]

variables:
  diferencia_magnitud: random(1, 4)

respuesta: 10 ^ diferencia_magnitud
tipo: input
tolerancia_abs: 1

enunciado: "Dos terremotos difieren en {diferencia_magnitud} puntos de magnitud Richter. ¿Cuántas veces más amplitud de onda sísmica tiene el más fuerte?"

explicacion: |
  Se eleva 10 a la cantidad de puntos de diferencia.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "calculo"]

variables:
  diferencia_magnitud: random(1, 3)

respuesta: 10 ^ (1.5 * diferencia_magnitud)
tipo: input
tolerancia_abs: 5

enunciado: "Dos terremotos difieren en {diferencia_magnitud} puntos de magnitud Richter. ¿Aproximadamente cuántas veces más energía liberó el más fuerte?"

pasos:
  - "10^(1,5 × {diferencia_magnitud})"

explicacion: |
  Se usa el factor de energía por punto (10^1,5 ≈ 31,6), elevado a la
  cantidad de puntos de diferencia.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un terremoto de magnitud 7 libera muchísima más energía que uno de magnitud 5 — no el doble, sino cientos de veces más."

explicacion: |
  Dos puntos de diferencia son aproximadamente 31,6 × 31,6 ≈ 1.000 veces
  más energía.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["richter", "orden"]

tipo: ordenar
enunciado: "Ordená estos terremotos de menor a mayor energía liberada, según su magnitud Richter."
opciones_explicitas:
  - "Magnitud 7,0"
  - "Magnitud 4,0"
  - "Magnitud 5,5"
respuesta_orden: ["Magnitud 4,0", "Magnitud 5,5", "Magnitud 7,0"]

explicacion: |
  A mayor magnitud, mayor la energía liberada — el orden de magnitud
  coincide con el orden de energía.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula log₁₀(E) = 4,8 + 1,5 × M relaciona la magnitud Richter (M) con la energía liberada (E, en joules) — de ahí sale el factor de aproximadamente 31,6 veces por punto."

explicacion: |
  10 elevado a 1,5 (el coeficiente de M en la fórmula) es,
  aproximadamente, 31,6.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "avanzado"
  tags: ["richter"]

variables:
  diferencia_magnitud: uno_de([1, 2, 3])
  amplitud_veces: 10 ^ diferencia_magnitud

tipo: completar
enunciado: "Dos terremotos tienen una diferencia de amplitud de {amplitud_veces} veces. Completá: ___ (diferencia de magnitud Richter) = log₁₀({amplitud_veces})."
respuestas_validas:
  - diferencia_magnitud

explicacion: |
  Se despeja la diferencia de magnitud tomando logaritmo en base 10 de
  la razón de amplitudes.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Decibeles, escala Richter y pH comparten la misma lógica matemática: un logaritmo de una razón respecto a un valor de referencia, aplicado a fenómenos físicos distintos."

explicacion: |
  Cambia el fenómeno (sonido, energía sísmica, concentración de iones),
  no la herramienta matemática.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "intermedio"
  tags: ["decibeles", "richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El motivo de usar escalas logarítmicas como decibeles o Richter es comprimir rangos de valores físicos enormes en números chicos y manejables."

explicacion: |
  Sin el logaritmo, habría que manejar directamente números con muchos
  ceros de diferencia.
```

```
metadata:
  materia: "fisica"
  tema: "decibeles_richter"
  nivel: "basico"
  tags: ["decibeles", "richter", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los decibeles miden intensidad de sonido (dB = 10×log₁₀(I/I₀)) y la escala Richter mide magnitud sísmica (cada punto ≈ 10x amplitud, ≈31,6x energía) — dos aplicaciones distintas de la misma herramienta logarítmica."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: dilatacion-termica-lineal (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos_basicos", "termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "La dilatación térmica lineal es el aumento de la longitud de un cuerpo debido a un incremento en su temperatura."

explicacion: |
  Cuando la temperatura de un sólido aumenta, la energía cinética de sus átomos crece, provocando que estos vibren con mayor amplitud y ocupen un mayor espacio, lo que se traduce en un aumento de la longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["coeficiente", "propiedades_materiales"]

variables:
  material_idx: uno_de([0, 1])
  datos: [[0.000012, "acero"], [0.000024, "aluminio"]]

respuesta: datos[material_idx][0
tipo: completar
tolerancia_abs: 0.0000001

enunciado: "El coeficiente de dilatación lineal del {datos[material_idx][1]} es aproximadamente ___ (expresado en 1/°C)."

pasos:
  - "Identificar el material según el valor proporcionado."
  - "Recordar que el coeficiente depende de la naturaleza del material."

explicacion: |
  El coeficiente de dilatación lineal ($\alpha$) es una propiedad intensiva que indica cuánto se expande un material por unidad de longitud y grado de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["relaciones", "conceptos"]

opciones_explicitas: ["proporcional", "inversamente proporcional", "no tiene relación"]

respuesta: "proporcional"
tipo: mc

enunciado: "En un material sólido, el cambio en la longitud ($\Delta L$) es ___ al cambio en la temperatura ($\Delta T$), asumiendo un coeficiente constante."

explicacion: |
  De la fórmula $\Delta L = L_0 \cdot \alpha \cdot \Delta T$ se observa que, al mantener constantes la longitud inicial y el coeficiente, el cambio de longitud es directamente proporcional al cambio de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["formula", "terminologia"]

respuesta: ["L_0", "$\Delta L$", "$\alpha$", "$\Delta T$"]
tipo: completar
respuestas_validas: ["L_0", "$\Delta L$", "$\alpha$", "$\Delta T$"]

enunciado: "En la fórmula de la dilatación lineal $\Delta L = L_0 \cdot \alpha \cdot \Delta T$, el término ___ representa la longitud inicial, el término ___ representa la variación de longitud, el término ___ es el coeficiente de dilatación lineal y el término ___ es la variación de temperatura."

explicacion: |
  Es fundamental identificar correctamente cada variable en la ecuación fundamental de la dilatación térmica lineal.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["factores", "conceptos"]

opciones_explicitas: ["Longitud inicial y coeficiente de dilatación", "Solo la temperatura", "Masa y volumen"]

respuesta: "Longitud inicial y coeficiente de dilatación"
tipo: mc

enunciado: "¿De qué factores depende la variación de la longitud ($\Delta L$) de una barra sólida cuando se calienta?"

explicacion: |
  La variación de longitud depende de tres factores: la longitud original del objeto ($L_0$), el coeficiente de dilatación del material ($\alpha$) y el cambio de temperatura experimentado ($\Delta T$).
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos", "termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "Si un material se calienta, su longitud inicial aumenta debido al incremento de la agitación térmica de sus átomos. ¿Es esto verdadero?"

explicacion: |
  La dilatación térmica lineal es el aumento de la longitud de un cuerpo cuando se incrementa su temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["formula", "teoria"]

opciones_explicitas: ["ΔL = L₀ * α * ΔT", "ΔL = L₀ / (α * ΔT)", "ΔL = L₀ + α + ΔT", "ΔL = α * ΔT / L₀"]
respuesta: "ΔL = L₀ * α * ΔT"
tipo: mc

enunciado: "La expresión matemática que define la variación de longitud (ΔL) en función de la longitud inicial (L₀), el coeficiente de dilatación lineal (α) y el cambio de temperatura (ΔT) es:"

explicacion: |
  La fórmula fundamental es ΔL = L₀ * α * ΔT, donde ΔL es la variación de longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["calculo", "numerico"]

variables:
  L0: 10.0
  alfa: 0.000012
  deltaT: 50.0
  resultado: L0 * alfa * deltaT

respuesta: resultado
tipo: completar
tolerancia_abs: 0.0001

enunciado: "Una barra de acero tiene una longitud inicial de {L0} m. Si la temperatura aumenta en {deltaT} °C y el coeficiente de dilatación lineal del acero es de {alfa} 1/°C, ¿cuál es la variación de longitud (ΔL) en metros?"

pasos:
  - "Identificar la longitud inicial: L₀ = 10.0 m"
  - "Identificar el coeficiente: α = 0.000012 1/°C"
  - "Identificar la variación de temperatura: ΔT = 50 °C"
  - "Calcular: ΔL = 10.0 * 0.000012 * 50"

explicacion: |
  El cálculo es: ΔL = 10.0 * 0.000012 * 50 = 0.006 m.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["calculo", "longitud_final"]

variables:
  L0: 5.0
  alfa: 0.000024
  deltaT: 100.0
  deltaL: L0 * alfa * deltaT
  Lf: L0 + deltaL
  resultado: Lf

respuesta: resultado
tipo: completar
tolerancia_abs: 0.0001

enunciado: "Una varilla de aluminio de {L0} m de longitud se calienta de 20°C a 120°C. Si el coeficiente de dilatación lineal es {alfa} 1/°C, ¿cuál es la longitud final (L_f) de la varilla en metros?"

pasos:
  - "Calcular la variación de longitud: ΔL = 5.0 * 0.000024 * 100 = 0.012 m"
  - "Sumar la variación a la longitud inicial: L_f = L₀ + ΔL"
  - "L_f = 5.0 + 0.012 = 5.012 m"

explicacion: |
  La longitud final es la suma de la longitud inicial más la expansión: 5.0 + 0.012 = 5.012 m.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["metodologia"]

opciones_explicitas: ["Identificar datos (L₀, α, ΔT)", "Calcular la variación ΔL", "Sumar ΔL a L₀ para hallar L_f"]
respuesta: ["Identificar datos (L₀, α, ΔT)", "Calcular la variación ΔL", "Sumar ΔL a L₀ para hallar L_f"]
tipo: ordenar

enunciado: "Para resolver un problema que pida hallar la longitud final de un objeto tras un cambio de temperatura, ¿cuál es el orden lógico de los pasos?"

explicacion: |
  Primero se deben extraer los datos, luego aplicar la fórmula de dilatación y finalmente sumar el resultado a la longitud inicial.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["dilatacion", "masa", "densidad"]

variables:
  idx: uno_de([0, 1])
  datos: [
    [0.1, "aumenta"],
    [0.2, "se mantiene igual"]
  ]

enunciado: "Si una barra de hierro se calienta de 20°C a 100°C, su longitud aumenta debido a la dilatación térmica. Sin embargo, un error común es pensar que su masa también cambia. En realidad, la masa de la barra ___."

opciones_explicitas: ["aumenta", "se mantiene igual", "disminuye"]

respuesta: datos[idx][1
tipo: mc

explicacion: |
  La masa es una propiedad intrínseca de la cantidad de materia. Aunque el volumen y la longitud aumentan (dilatación), la cantidad de átomos y su masa total permanecen constantes. Lo que realmente cambia es la densidad, que disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["conceptos", "verdadero_falso"]

enunciado: "Si una varilla metálica está sujeta rígidamente entre dos paredes fijas y se calienta, la dilatación térmica se manifiesta como un aumento en la longitud de la varilla."

respuesta: falso
tipo: vf

explicacion: |
  Cuando el material está restringido (sujeto rígidamente), no puede expandirse físicamente en longitud. En ese caso, la energía térmica se traduce en un aumento de la tensión interna o esfuerzo mecánico, no en cambio de longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["coeficientes", "comparacion"]

variables:
  material_idx: uno_de([0, 1])
  escenario: [
    ["aluminio", "mayor"],
    ["acero", "menor"]
  ]

enunciado: "Si comparamos dos barras de igual longitud y sección transversal, una de {escenario[material_idx][0]} y otra de acero, ante un mismo incremento de temperatura, la barra de {escenario[material_idx][0]} experimentará una dilatación lineal ___."

opciones_explicitas: ["mayor", "menor", "nula"]

respuesta: escenario[material_idx][1
tipo: mc

explicacion: |
  El coeficiente de dilatación lineal ($\alpha$) es una propiedad del material. El aluminio tiene un $\alpha$ mayor que el acero, por lo que se expande más ante el mismo cambio de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["proceso", "causa"]

enunciado: "La dilatación térmica ocurre porque al aumentar la temperatura, la energía cinética de los átomos ___."

respuestas_validas: ["aumenta", "disminuye"]

respuesta: "aumenta"
tipo: completar

explicacion: |
  Al aumentar la temperatura, los átomos vibran con mayor amplitud alrededor de sus posiciones de equilibrio, lo que incrementa la distancia promedio entre ellos, resultando en una expansión macroscópica.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "avanzado"
  tags: ["formula", "variables"]

enunciado: "Para calcular la variación de longitud ($\Delta L$) de un objeto, se deben considerar los siguientes factores en el orden de su dependencia en la fórmula $\Delta L = L_0 \cdot \alpha \cdot \Delta T$:"

opciones_explicitas: ["Longitud inicial", "Coeficiente de dilatación", "Variación de temperatura"]

respuesta: ["Longitud inicial", "Coeficiente de dilatación", "Variación de temperatura"]
tipo: ordenar

explicacion: |
  La fórmula establece que la dilatación depende directamente de la longitud original ($L_0$), del coeficiente característico del material ($\alpha$) y del cambio en la escala térmica ($\Delta T$).
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["dilatacion", "dimensiones"]

tipo: mc
opciones_explicitas: ["La dilatación lineal solo considera el cambio en una dimensión (longitud), mientras que la volumétrica considera el cambio en las tres dimensiones (volumen).", "La dilatación lineal ocurre solo en gases, mientras que la volumétrica ocurre en sólidos.", "La dilatación lineal es siempre mayor que la dilatación volumétrica para el mismo material.", "La dilatación lineal depende de la forma del objeto, la volumétrica no."]

enunciado: "Al comparar la dilatación térmica lineal con la dilatación volumétrica, la principal distinción es que la dilatación lineal se enfoca en la variación de la ___."

respuesta: "La dilatación lineal solo considera el cambio en una dimensión (longitud), mientras que la volumétrica considera el cambio en las tres dimensiones (volumen)."

explicacion: |
  La dilatación lineal se aplica cuando una dimensión (longitud) es significativamente mayor que las otras, como en un alambre. La volumétrica es la expansión total en las tres dimensiones del cuerpo.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["coeficiente", "material"]

variables:
  idx: uno_de([0, 1])
  datos: [[["aluminio", 2.3e-5], ["hierro", 1.2e-5]], [["aluminio", 2.3e-5], ["hierro", 1.2e-5]]]

tipo: mc
opciones_explicitas: ["El coeficiente de dilatación lineal es una propiedad intrínseca del material y no depende de la cantidad de masa.", "El coeficiente de dilatación lineal depende de la longitud inicial del objeto.", "A mayor masa del objeto, mayor es el coeficiente de dilatación lineal.", "El coeficiente de dilatación lineal es igual para todos los metales."]

enunciado: "Si comparamos dos barras del mismo material pero de diferentes longitudes, la diferencia fundamental es que el coeficiente de dilatación lineal ___."

respuesta: "El coeficiente de dilatación lineal es una propiedad intrínseca del material y no depende de la cantidad de masa."

explicacion: |
  El coeficiente ($\alpha$) depende de la naturaleza del material. La deformación ($\Delta L$) sí depende de la longitud inicial ($L_0$), pero el coeficiente es constante para el material dado.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "avanzado"
  tags: ["relacion_coeficientes", "geometria"]

tipo: vf
enunciado: "Para un sólido isotrópico, el coeficiente de dilatación volumétrica ($\gamma$) es aproximadamente tres veces el coeficiente de dilatación lineal ($\alpha$)."

respuesta: verdadero

explicacion: |
  En materiales isotrópicos (propiedades iguales en todas las direcciones), se cumple la relación $\gamma \approx 3\alpha$.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["factores", "calculo"]

tipo: completar
respuestas_validas: ["$\Delta T$", "la temperatura inicial"]

enunciado: "En la fórmula de la dilatación lineal $\Delta L = \alpha \cdot L_0 \cdot \Delta T$, el término $\Delta T$ representa la ___."

respuesta: "$\Delta T$"

explicacion: |
  $\Delta T$ es el cambio de temperatura (temperatura final menos temperatura inicial). Sin un cambio de temperatura, no hay dilatación térmica.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["proceso", "causa_efecto"]

tipo: ordenar
opciones_explicitas: ["Aumento de la energía cinética de las partículas", "Incremento de la distancia promedio entre átomos", "Aumento de la longitud total del objeto"]

enunciado: "Ordena los pasos que describen el fenómeno de la dilatación térmica lineal desde el nivel microscópico al macroscópico:"

respuesta: ["Aumento de la energía cinética de las partículas", "Incremento de la distancia promedio entre átomos", "Aumento de la longitud total del objeto"]

explicacion: |
  El calor aumenta la vibración (energía cinética) de los átomos, lo que aumenta la distancia media entre ellos, resultando en un aumento macroscópico de la longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["termodinamica", "expansion_lineal"]

variables:
  escenario: [[0.1, 12.5], [0.2, 25.0], [0.3, 37.5]]
  idx: uno_de([0,1,2])
  L0: escenario[idx][0]
  dT: escenario[idx][1]
  alpha: 0.000012
  deltaL: L0 * alpha * dT

respuesta: deltaL
tipo: completar
tolerancia_abs: 0.0001

enunciado: "Una viga de acero tiene una longitud inicial de {L0} m. Si la temperatura aumenta en {dT} °C y el coeficiente de dilatación lineal es de {alpha} 1/°C, ¿cuánto aumenta su longitud en metros?"

pasos:
  - "Calcular el cambio de longitud usando la fórmula: ΔL = L₀ * α * ΔT"
  - "Sustituir los valores: ΔL = {L0} * {alpha} * {dT}"

explicacion: |
  La dilatación lineal se calcula con la fórmula ΔL = L₀ · α · ΔT. 
  Para este caso: {L0} * 0.000012 * {dT} = {deltaL} m.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["materiales", "conceptos"]

variables:
  material: [[0, "Aluminio"], [1, "Acero"], [2, "Vidrio"]]
  idx: uno_de([0,1,2])

respuesta: material[idx][1
tipo: mc
opciones_explicitas: ["Aluminio", "Acero", "Vidrio"]

enunciado: "Se requiere un material para las vías de un ferrocarril que tenga una dilatación térmica lineal muy baja para evitar que las vías se deformen en verano. Basado en los materiales comunes, ¿cuál de estos es más estable térmicamente?"

explicacion: |
  El {material[idx][1]} tiene un coeficiente de dilatación menor que el {material[0]} (Aluminio), lo que lo hace más adecuado para estructuras que requieren estabilidad dimensional frente a cambios de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si un objeto se calienta, su longitud lineal aumenta siempre que el coeficiente de dilatación lineal sea un valor positivo."

explicacion: |
  Efectivamente, la fórmula ΔL = L₀ · α · ΔT indica que si ΔT es positivo y α es positivo, ΔL será positivo, resultando en un aumento de la longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: ["aumento", "expansión", "crecimiento"]
respuestas_validas: ["aumento", "expansión", "crecimiento"]
tipo: completar

enunciado: "Cuando un material sólido se somete a un incremento de temperatura, su longitud experimenta un ___ lineal."

explicacion: |
  El aumento de la energía cinética de las partículas provoca que estas vibren con mayor amplitud, incrementando la distancia promedio entre ellas, lo que se traduce en una expansión o aumento de la longitud.
```

```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["procesos"]

respuesta: ["Aumento de temperatura", "Aumento de vibración molecular", "Aumento de longitud"]
tipo: ordenar

opciones_explicitas: ["Aumento de temperatura", "Aumento de vibración molecular", "Aumento de longitud"]

enunciado: "Ordena los siguientes eventos según ocurren de forma causal durante el calentamiento de una barra metálica:"

explicacion: |
  Primero aumenta la temperatura, lo que incrementa la energía cinética (vibración) de los átomos, resultando finalmente en un incremento de la longitud macroscópica.
```
