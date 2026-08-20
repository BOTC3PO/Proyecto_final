# Examen jefe — Maestro del movimiento y calor

> Logro #170. Analizaste con precisión el tiro oblicuo, la transferencia térmica y los fenómenos severos para aprobar este parcial. Pool agregado de los `cuestionario.md` ya validados de sus 7 temas. **180 preguntas totales** en 7/7 secciones.

---

## Sección: tension-diferencia-potencial (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "potencial", "definicion"]

tipo: mc
opciones_explicitas: ["La diferencia de energía potencial por unidad de carga", "La velocidad de los electrones en un cable", "La resistencia que ofrece un material al paso de corriente", "La cantidad de electrones en un conductor"]

respuesta: "La diferencia de energía potencial por unidad de carga"

enunciado: "La diferencia de potencial eléctrico entre dos puntos se define físicamente como ___."

explicacion: |
  La diferencia de potencial (V) es el trabajo realizado por unidad de carga para mover una carga de prueba desde un punto a otro.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["unidades", "voltios"]

tipo: completar
respuestas_validas: ["Voltio", "Volt"]

respuesta: "Voltio"

enunciado: "La unidad de medida de la diferencia de potencial en el Sistema Internacional es el ___."

explicacion: |
  El Voltio (V) es la unidad estándar para medir la tensión o diferencia de potencial eléctrico.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["trabajo", "carga", "formula"]

variables:
  escenario: uno_de([[10, 20], [50, 100]])

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se realiza un trabajo de {escenario[0]} Joules para mover una carga de {escenario[1]} Coulombs entre dos puntos. ¿Cuál es la diferencia de potencial en Voltios?"

pasos:
  - "Identificar el trabajo (W) y la carga (Q)."
  - "Aplicar la fórmula V = W / Q."

respuesta: "escenario[0] / escenario[1]"

explicacion: |
  Usando la fórmula V = W/Q: {escenario[0]}J / {escenario[1]}C = {escenario[0]/escenario[1]} V.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["movimiento", "cargas"]

tipo: vf

enunciado: "Para que exista una corriente eléctrica en un conductor, debe existir una diferencia de potencial entre sus extremos."

respuesta: verdadero

explicacion: |
  Verdadero. La diferencia de potencial es la "fuerza" o presión que impulsa a las cargas a moverse a través del circuito.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["conceptos", "vocabulario"]

tipo: mc
opciones_explicitas: ["Voltaje", "Resistencia", "Intensidad"]

respuesta: "Voltaje"

enunciado: "En el lenguaje cotidiano, el término ___ se utiliza frecuentemente como sinónimo de diferencia de potencial eléctrica."

explicacion: |
  Aunque técnicamente son conceptos distintos, en el uso común se emplea 'voltaje' para referirse a la tensión eléctrica.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "potencial", "teoria"]

respuesta: "V"
tipo: mc
opciones_explicitas: ["A", "V", "W", "Ω"]

enunciado: "La unidad de medida de la diferencia de potencial eléctrico en el Sistema Internacional es el ___."

explicacion: |
  La diferencia de potencial (tensión) se mide en Voltios (V), que representa la energía por unidad de carga.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["carga", "energia", "calculo"]

variables:
  escenario: uno_de([[12, 24, 36], ["12V", "24V", "36V"]])
  valor_carga: 3
  resultado_energia: escenario[0] * escenario[1]

respuesta: resultado_energia
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una carga de {valor_carga} C se desplaza entre dos puntos con una diferencia de potencial de {escenario[1]}, ¿cuánta energía eléctrica (en Joules) realiza el campo sobre la carga?"

pasos:
  - "Identificar la fórmula: Trabajo (Energía) = Carga (Q) × Diferencia de Potencial (V)"
  - "Sustituir valores: W = 3 C × {escenario[1]} V"
  - "Calcular el producto: 3 * {escenario[0]} = {resultado_energia} J"

explicacion: |
  La energía (W) es el producto de la carga (Q) por el potencial (V). En este caso, {valor_carga} * {escenario[0]} = {resultado_energia} Joules.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["polaridad", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "¿Si una carga positiva se mueve de un punto A (10V) a un punto B (25V), el campo eléctrico realiza un trabajo positivo sobre la carga?"

explicacion: |
  Verdadero. Al moverse de un potencial menor a uno mayor, la carga gana energía potencial, lo que implica que el campo realiza un trabajo positivo sobre ella.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["calculo", "potencial"]

variables:
  puntos: [[10, 50], [5, 20], [100, 10]]
  idx: uno_de([0, 1, 2])
  v_a: puntos[idx][0]
  v_b: puntos[idx][1]
  v_diff: abs(v_a - v_b)

respuesta: v_diff
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se tienen dos puntos en un campo eléctrico con potenciales de {v_a} V y {v_b} V respectivamente. ¿Cuál es la magnitud de la diferencia de potencial entre ambos puntos?"

pasos:
  - "Restar los valores de potencial: |{v_a} - {v_b}|"
  - "Calcular la diferencia absoluta: {v_diff} V"

explicacion: |
  La diferencia de potencial es la resta de los potenciales: |{v_a} - {v_b}| = {v_diff} V.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "avanzado"
  tags: ["trabajo", "carga", "completo"]

variables:
  datos: [[2, 10, 20], [5, 4, 20], [10, 2, 20]]
  idx: uno_de([0, 1, 2])
  q: datos[idx][0]
  v: datos[idx][1]
  w: datos[idx][2]

respuesta: [0, 1, 2]
tipo: completar
respuestas_validas: ["20", "20", "20"]

enunciado: "Si una carga de {q} C requiere un trabajo de {w} J para ser trasladada entre dos puntos, la diferencia de potencial entre dichos puntos es de ___ V."

explicacion: |
  Usando la fórmula V = W / Q, tenemos {w} / {q} = {v} V.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "concepto"]

respuesta: "trabajo"
tipo: completar
respuestas_validas: ["trabajo"]

enunciado: "La diferencia de potencial eléctrico entre dos puntos se define como el ___ realizado por unidad de carga para mover una carga desde un punto a otro."

explicacion: |
  La diferencia de potencial (voltaje) es la energía o trabajo por unidad de carga necesaria para mover una carga entre dos puntos del campo eléctrico.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["corriente", "voltaje", "analogia"]

respuesta: "falso"
tipo: completar
enunciado: "Si una batería tiene una diferencia de potencial (voltaje) de 12V, esto significa que siempre hay una corriente fluyendo a través de cualquier cable conectado a ella, incluso si el circuito está abierto."

explicacion: |
  Falso. El voltaje es la "presión" o potencial disponible, pero la corriente requiere un camino cerrado (circuito) para fluir. En un circuito abierto, el voltaje existe pero la corriente es cero.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["calculo", "potencial"]

variables:
  escenario: uno_de([[10.0, 5.0], [20.0, 10.0], [5.0, 2.0]])

respuesta: escenario[0] * escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se requiere realizar un trabajo de {escenario[0]} Joules para mover una carga de {escenario[1]} Coulombs entre dos puntos de un conductor. ¿Cuál es la diferencia de potencial en Voltios?"

pasos:
  - "Calcular el voltaje usando la fórmula: V = W / q"

explicacion: |
  Usando la fórmula V = W/q: {escenario[0]} J / {escenario[1]} C = {escenario[0]/escenario[1]} V.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "medicion"]

respuesta: "en_paralelo"
tipo: mc
opciones_explicitas: ["en_serie", "en_paralelo", "en_circuito_abierto"]

enunciado: "Para medir correctamente la diferencia de potencial entre dos puntos de un componente, un voltímetro debe conectarse ___ al componente."

explicacion: |
  El voltímetro tiene una resistencia interna muy alta y debe conectarse en paralelo para medir la caída de potencial sin desviar la corriente del circuito principal.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["ordenar", "conceptos"]

respuesta: ["Fuente de potencial", "Conductor", "Carga/Resistencia"]
tipo: ordenar
opciones_explicitas: ["Carga/Resistencia", "Fuente de potencial", "Conductor"]

enunciado: "Ordena los elementos de un sistema de flujo de carga desde que se genera el potencial hasta que se consume la energía:"

explicacion: |
  El flujo comienza en la fuente (diferencia de potencial), viaja a través de los conductores y finalmente entrega energía al componente o carga.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["potencial", "campo_electrico"]

respuesta: "campo_electrico"
tipo: mc
opciones_explicitas: ["potencial_electrico", "campo_electrico", "corriente_electrica", "resistencia"]

enunciado: "Mientras que la diferencia de potencial describe la energía por unidad de carga entre dos puntos, el concepto que describe la fuerza por unidad de carga que actúa sobre una carga puntual en un punto del espacio es el ___."

explicacion: |
  La diferencia de potencial (voltaje) es una medida escalar relacionada con la energía, mientras que el campo eléctrico es una magnitud vectorial que indica la fuerza ejercida sobre una carga.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["trabajo", "potencial"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0.5, 2.0], [1.5, 5.0]]

respuesta: datos[escenario_idx][1
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se requiere mover una carga de {datos[escenario_idx][0]} C de un punto A a un punto B. Si la diferencia de potencial entre ambos puntos es de {datos[escenario_idx][1]} V, el trabajo eléctrico realizado es de ___ J."

pasos:
  - "Calcular el trabajo usando la fórmula W = q * ΔV"
  - "Sustituir la carga q = {datos[escenario_idx][0]} C y el voltaje ΔV = {datos[escenario_idx][1]} V"

explicacion: |
  El trabajo eléctrico es el producto de la carga por la diferencia de potencial: W = q * ΔV. En este caso, {datos[escenario_idx][0]} * {datos[escenario_idx][1]} = {datos[escenario_idx][0] * datos[escenario_idx][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["ley_ohm", "corriente"]

respuesta: verdadero
tipo: vf

enunciado: "Si se mantiene constante la resistencia de un conductor, un aumento en la diferencia de potencial (tensión) provocará un aumento en la intensidad de la corriente eléctrica."

explicacion: |
  Según la Ley de Ohm (I = V/R), la corriente es directamente proporcional a la diferencia de potencial cuando la resistencia permanece constante.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["circuito_serie", "voltaje"]

respuesta: ["Pila", "Interruptor", "Resistencia", "Cable"]
tipo: ordenar

opciones_explicitas: ["Pila", "Interruptor", "Resistencia", "Cable"]

enunciado: "Ordena los elementos de un circuito simple desde la fuente de energía hasta el dispositivo de carga, siguiendo el flujo de la corriente:"

explicacion: |
  En un circuito básico, la energía sale de la fuente (Pila), pasa por el control (Interruptor), atraviesa el elemento de consumo (Resistencia) y cierra el camino mediante los conductores (Cable).
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "avanzado"
  tags: ["conductor", "equilibrio"]

respuesta: "cero"
tipo: completar

respuestas_validas: ["cero", "0", "0.0"]

enunciado: "En un conductor metálico en equilibrio electrostático, la diferencia de potencial entre cualquier par de puntos del mismo conductor es ___."

explicacion: |
  En equilibrio electrostático, el campo eléctrico dentro del conductor es nulo, lo que implica que el potencial eléctrico es constante en todo el volumen del conductor. Por lo tanto, la diferencia de potencial es cero.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "electronica", "aplicacion"]

variables:
  escenario: uno_de([["5.0", "5.0"], ["9.0", "9.0"], ["12.0", "12.0"]])

enunciado: "Un cargador de carga rápida suministra una diferencia de potencial de {escenario[0]} voltios a un dispositivo móvil. ¿Cuál es el valor de la tensión eléctrica suministrada?"

opciones_explicitas: ["4.5 V", "5.0 V", "9.0 V", "12.0 V"]
respuesta: escenario[1
tipo: mc

explicacion: |
  La diferencia de potencial (tensión) se mide en voltios (V) y representa la energía por unidad de carga que impulsa a los electrones a través de un circuito.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["circuito", "interruptor"]

variables:
  estado: uno_de([[true, "hay_paso"], [false, "no_hay_paso"]])

enunciado: "En un circuito de una lámpara, si el interruptor está abierto, la diferencia de potencial entre los terminales de la bombilla es de ___ voltios si no hay corriente circulando por el resto del circuito cerrado."

respuestas_validas: ["0"]
respuesta: "0"
tipo: completar

explicacion: |
  Si el circuito está abierto, no hay flujo de carga y la diferencia de potencial medida a través de los componentes en serie puede ser cero o la tensión de la fuente dependiendo de la configuración, pero en un interruptor abierto que interrumpe el paso principal, la corriente es nula.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["pilas", "voltaje"]

variables:
  datos: uno_de([
    [["1.5V", "1.5V", "1.5V"], "4.5V"],
    [["9V", "9V"], "18V"],
    [["1.5V", "1.5V"], "3.0V"]
  ])

enunciado: "Se conectan {largo(datos[0])} pilas en serie, cada una con una tensión de {datos[0][0]}. ¿Cuál es la tensión total del conjunto?"

opciones_explicitas: ["3.0V", "4.5V", "6.0V", "9.0V"]
respuesta: datos[1
tipo: mc

explicacion: |
  En una conexión en serie, las diferencias de potencial de cada componente se suman para obtener la tensión total del circuito.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["carga", "energia"]

variables:
  caso: uno_de([
    [["0.002", "2.0"], ["0.005", "5.0"], ["0.010", "10.0"]]
  ])

enunciado: "Si se realiza un trabajo de {caso[0][0]} Joules para mover una carga de {caso[0][0]} Coulombs entre dos puntos, la diferencia de potencial es de ___ voltios."

respuestas_validas: ["2.0", "5.0", "10.0"]
respuesta: caso[0][1
tipo: completar

explicacion: |
  La diferencia de potencial (V) se define como el trabajo (W) realizado por unidad de carga (Q): V = W / Q.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["bateria", "voltaje"]

variables:
  es_mayor: uno_de([[true, "mayor"], [false, "menor"]])

enunciado: "Si la tensión del cargador es de 5V y la tensión de la batería es de 3.7V, ¿es la tensión del cargador mayor que la de la batería? {es_mayor}"

opciones_explicitas: ["verdadero", "falso"]
respuesta: es_mayor
tipo: completar
explicacion: |
  Para que la carga fluya hacia la batería, la diferencia de potencial del cargador debe ser superior a la de la batería.
```

## Sección: tiro-oblicuo (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["tiro_oblicuo", "vocabulario"]

enunciado: "¿Qué es un tiro oblicuo?"
tipo: mc
opciones_explicitas:
  - "Un lanzamiento con velocidad inicial que forma un ángulo con la horizontal (ni 0° ni 90°)"
  - "Un lanzamiento estrictamente vertical"
  - "Un lanzamiento estrictamente horizontal desde el piso"
respuesta: "Un lanzamiento con velocidad inicial que forma un ángulo con la horizontal (ni 0° ni 90°)"

explicacion: |
  Combina avance horizontal (MRU) con subida y bajada (MRUV), a
  diferencia del tiro vertical o el MRU puro.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo", "completar"]

tipo: completar
enunciado: "Completá: la componente horizontal de la velocidad inicial es v₀ₓ = v₀ × ___(θ)."
respuestas_validas:
  - "cos"
  - "coseno"

explicacion: |
  Es la parte de v₀ que apunta en la dirección de avance.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo", "completar"]

tipo: completar
enunciado: "Completá: la componente vertical de la velocidad inicial es v₀ᵥ = v₀ × ___(θ)."
respuestas_validas:
  - "sen"
  - "seno"

explicacion: |
  Es la parte de v₀ que hace que el objeto suba antes de empezar a caer.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "Ignorando la resistencia del aire, la componente horizontal de la velocidad se mantiene constante durante todo el vuelo."

explicacion: |
  Nada la acelera ni la frena en ese eje — es MRU puro.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: falso
tipo: vf

enunciado: "La componente vertical de la velocidad se mantiene constante durante todo el vuelo."

explicacion: |
  La gravedad la frena en la subida y la acelera en la bajada — es
  MRUV con a=−g.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["tiro_oblicuo"]

enunciado: "¿Qué tipo de movimiento describe el eje horizontal en un tiro oblicuo?"
tipo: mc
opciones_explicitas:
  - "MRU (velocidad constante)"
  - "MRUV (aceleración constante)"
  - "Ninguno, el eje horizontal no se mueve"
respuesta: "MRU (velocidad constante)"

explicacion: |
  x(t) = v₀ₓ × t, la misma fórmula del MRU.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["tiro_oblicuo"]

enunciado: "¿Qué tipo de movimiento describe el eje vertical en un tiro oblicuo?"
tipo: mc
opciones_explicitas:
  - "MRUV con a=−g (igual que un tiro vertical)"
  - "MRU (velocidad constante)"
  - "No tiene aceleración"
respuesta: "MRUV con a=−g (igual que un tiro vertical)"

explicacion: |
  y(t) = v₀ᵥ×t − ½×g×t², exactamente el caso de `../tiro-vertical/`.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])

respuesta: redondear(v0 * cos_deg(angulo), 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m/s"

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° sobre la horizontal. ¿Cuál es la componente horizontal de su velocidad inicial?"

pasos:
  - "v₀ₓ = v₀ × cos(θ) = {v0} × cos({angulo}°) = {redondear(v0 * cos_deg(angulo), 2)} m/s"

explicacion: |
  Se descompone v₀ con coseno para el eje horizontal.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])

respuesta: redondear(v0 * sin_deg(angulo), 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m/s"

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° sobre la horizontal. ¿Cuál es la componente vertical de su velocidad inicial?"

pasos:
  - "v₀ᵥ = v₀ × sen(θ) = {v0} × sen({angulo}°) = {redondear(v0 * sin_deg(angulo), 2)} m/s"

explicacion: |
  Se descompone v₀ con seno para el eje vertical.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])
  v0y: redondear(v0 * sin_deg(angulo), 2)

respuesta: redondear(v0y / 10, 2)
tipo: input
tolerancia_abs: 0.2
unidad: "s"

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° (g=10 m/s²). Su componente vertical de velocidad inicial es v₀ᵥ={v0y} m/s. ¿Cuánto tarda en llegar a la altura máxima?"

pasos:
  - "t_subida = v₀ᵥ / g = {v0y} ÷ 10 = {redondear(v0y / 10, 2)} s"

explicacion: |
  La altura máxima ocurre cuando la velocidad vertical llega a cero.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])
  v0y: redondear(v0 * sin_deg(angulo), 2)

respuesta: redondear(v0y ^ 2 / (2 * 10), 2)
tipo: input
tolerancia_abs: 0.5
unidad: "m"

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° (g=10 m/s²). Su componente vertical de velocidad inicial es v₀ᵥ={v0y} m/s. ¿Cuál es la altura máxima que alcanza?"

pasos:
  - "h_max = v₀ᵥ² / (2×g) = {v0y}² / 20 = {redondear(v0y ^ 2 / (2 * 10), 2)} m"

explicacion: |
  Es la misma fórmula que la altura máxima de un tiro vertical, usando
  sólo la componente vertical de la velocidad.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])
  v0y: redondear(v0 * sin_deg(angulo), 2)

respuesta: redondear(2 * v0y / 10, 2)
tipo: input
tolerancia_abs: 0.3
unidad: "s"

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° (g=10 m/s²) y cae a la misma altura de la que salió. Su componente vertical de velocidad inicial es v₀ᵥ={v0y} m/s. ¿Cuánto dura todo el vuelo?"

pasos:
  - "t_vuelo = 2 × v₀ᵥ / g = 2 × {v0y} ÷ 10 = {redondear(2 * v0y / 10, 2)} s"

explicacion: |
  Por simetría, el tiempo de bajada es igual al de subida — el tiempo
  total es el doble del tiempo de subida.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 50)
  angulo: uno_de([30, 37, 45, 53, 60])
  v0x: redondear(v0 * cos_deg(angulo), 2)
  v0y: redondear(v0 * sin_deg(angulo), 2)
  t_vuelo: redondear(2 * v0y / 10, 2)

respuesta: redondear(v0x * t_vuelo, 2)
tipo: input
tolerancia_abs: 1

enunciado: "Un proyectil se lanza a {v0} m/s con un ángulo de {angulo}° (g=10 m/s²), con v₀ₓ={v0x} m/s y un tiempo de vuelo total de {t_vuelo} s. ¿Cuál es su alcance horizontal?"

pasos:
  - "alcance = v₀ₓ × t_vuelo = {v0x} × {t_vuelo} = {redondear(v0x * t_vuelo, 2)} m"

explicacion: |
  El alcance combina lo que avanza (eje horizontal, constante) con
  cuánto tiempo pasa en el aire (que depende del eje vertical).
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "Si el proyectil cae a la misma altura de la que salió, el tiempo que tarda en subir hasta el punto más alto es igual al tiempo que tarda en bajar desde ahí."

explicacion: |
  Es la misma simetría que ya se vio en tiro vertical.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

enunciado: "Para una misma rapidez inicial v₀, ¿con qué ángulo se logra el mayor alcance horizontal?"
tipo: mc
opciones_explicitas:
  - "45°"
  - "90°"
  - "0°"
respuesta: "45°"

explicacion: |
  Ni tan horizontal (poco tiempo en el aire) ni tan vertical (poco
  avance) — 45° reparte v₀ por igual entre los dos ejes.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "Si el ángulo de lanzamiento es 90° (tiro vertical), el alcance horizontal es cero."

explicacion: |
  A 90°, v₀ₓ = v₀ × cos(90°) = 0 — no hay avance horizontal.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "Si el ángulo de lanzamiento es 0° (tiro horizontal puro), la altura máxima adicional por encima del punto de lanzamiento es cero."

explicacion: |
  A 0°, v₀ᵥ = v₀ × sen(0°) = 0 — el objeto empieza a caer de
  inmediato, sin fase de ascenso.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "ordenar"]

enunciado: "Ordená los pasos típicos para resolver un problema de tiro oblicuo."
tipo: ordenar
opciones_explicitas:
  - "Combinar el tiempo obtenido con v₀ₓ para calcular el alcance horizontal"
  - "Descomponer v₀ en v₀ₓ (coseno) y v₀ᵥ (seno)"
  - "Resolver el eje vertical con las fórmulas de MRUV (tiempo de subida, altura máxima o tiempo de vuelo)"
respuesta_orden:
  - "Descomponer v₀ en v₀ₓ (coseno) y v₀ᵥ (seno)"
  - "Resolver el eje vertical con las fórmulas de MRUV (tiempo de subida, altura máxima o tiempo de vuelo)"
  - "Combinar el tiempo obtenido con v₀ₓ para calcular el alcance horizontal"

explicacion: |
  El eje horizontal y el vertical se resuelven por separado y se
  combinan sólo al final, a través del tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["tiro_oblicuo", "aplicacion"]

enunciado: "¿Cuál de estos es un ejemplo real de tiro oblicuo?"
tipo: mc
opciones_explicitas:
  - "Un lanzamiento de bala en atletismo"
  - "Una piedra que cae en caída libre desde el reposo"
  - "Un auto que viaja en línea recta a velocidad constante"
respuesta: "Un lanzamiento de bala en atletismo"

explicacion: |
  Se lanza con un ángulo y una velocidad inicial — combina avance y
  subida/bajada, el caso general de tiro oblicuo.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "avanzado"
  tags: ["tiro_oblicuo", "problema"]

variables:
  v0: random(20, 40)
  angulo: uno_de([30, 45, 60])

respuesta: redondear(v0 ^ 2 * sin_deg(2 * angulo) / 10, 2)
tipo: input
tolerancia_abs: 1
unidad: "m"

enunciado: "Usando la fórmula compacta alcance = v₀² × sen(2θ) / g, con v₀={v0} m/s, θ={angulo}° y g=10 m/s², ¿cuál es el alcance?"

pasos:
  - "alcance = v₀² × sen(2×{angulo}°) / g = {v0}² × sen({2 * angulo}°) / 10 = {redondear(v0 ^ 2 * sin_deg(2 * angulo) / 10, 2)} m"

explicacion: |
  Es la misma fórmula de siempre (v₀ₓ × t_vuelo) reescrita en una sola
  expresión usando la identidad sen(2θ) = 2×sen(θ)×cos(θ).
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "La trayectoria de un tiro oblicuo (posición y en función de x) tiene forma de parábola."

explicacion: |
  Sale de combinar x(t) lineal en t con y(t) cuadrático en t —
  despejando t de la primera y reemplazando en la segunda, y queda
  como función cuadrática de x.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo", "completar"]

tipo: completar
enunciado: "Completá: un tiro oblicuo con θ = 90° es exactamente el caso ya visto en el módulo de tiro ___."
respuestas_validas:
  - "vertical"

explicacion: |
  Sin componente horizontal, es tiro vertical puro.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo", "completar"]

tipo: completar
enunciado: "Completá: un tiro oblicuo con θ = 0° tiene, en el eje horizontal, exactamente el movimiento ya visto en el módulo de ___."
respuestas_validas:
  - "MRU"

explicacion: |
  Sin componente vertical inicial, el eje horizontal es MRU puro (y el
  objeto cae en caída libre desde ese instante).
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["tiro_oblicuo"]

enunciado: "En muchos problemas de secundaria se usa g=10 m/s² en vez del valor real (≈9,8 m/s²). ¿Por qué?"
tipo: mc
opciones_explicitas:
  - "Simplifica las cuentas manuales sin cambiar el razonamiento del problema"
  - "Porque 9,8 m/s² es un valor incorrecto"
  - "Porque la gravedad terrestre real es exactamente 10 m/s²"
respuesta: "Simplifica las cuentas manuales sin cambiar el razonamiento del problema"

explicacion: |
  Es una convención pedagógica frecuente; en un cálculo de precisión
  real se usa 9,8 m/s² (o el valor local exacto).
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "intermedio"
  tags: ["tiro_oblicuo"]

respuesta: verdadero
tipo: vf

enunciado: "El movimiento horizontal y el movimiento vertical de un proyectil son independientes entre sí: lo que pasa en un eje no afecta lo que pasa en el otro."

explicacion: |
  Es la clave que permite resolver cada eje por separado con las
  fórmulas de MRU y MRUV ya conocidas.
```

```
metadata:
  materia: "fisica"
  tema: "tiro_oblicuo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el tiro oblicuo?"
tipo: mc
opciones_explicitas:
  - "Para predecir la trayectoria, el alcance y el tiempo de vuelo de cualquier objeto lanzado con un ángulo"
  - "Sólo aplica a objetos lanzados exactamente hacia arriba"
  - "Sólo aplica si no hay gravedad"
respuesta: "Para predecir la trayectoria, el alcance y el tiempo de vuelo de cualquier objeto lanzado con un ángulo"

explicacion: |
  Es la combinación de MRU y MRUV (visto por separado antes) aplicada
  en simultáneo a los dos ejes de un mismo movimiento.
```

## Sección: tiro-vertical (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["velocidad"]

variables:
  v0: random(2, 10) * 5
  g: 10
  t: random(1, 3)

respuesta: v0 - g * t
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²). ¿Cuál es su velocidad en t={t} s?"

explicacion: |
  v(t) = {v0} − {g}×{t} = {v0 - g * t}.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["velocidad", "verdadero_falso"]

variables:
  v0: random(4, 10) * 5
  g: 10
  t: random(1, 4)

respuesta: ((v0 - g * t) < 0)
tipo: vf

enunciado: "v₀={v0} m/s (g=10 m/s²). ¿Ya está bajando el objeto en t={t} s (o sea, v(t) es negativa)?"

explicacion: |
  v(t) = {v0}−{g}×{t} = {v0 - g * t} — negativa significa que ya pasó el
  punto más alto y está descendiendo.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["tiempo_subida"]

variables:
  g: 10
  t_sol: random(1, 8)
  v0: g * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²). ¿Cuánto tarda en llegar a la altura máxima?"

pasos:
  - "t_subida = v₀/g = {v0}/{g} = {t_sol}"

explicacion: |
  En la altura máxima, v=0 — se despeja el tiempo de esa condición.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["altura_maxima"]

variables:
  g: 10
  t_sol: random(1, 8)
  v0: g * t_sol

respuesta: (v0 ^ 2) / (2 * g)
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²), desde el nivel del piso. ¿Cuál es la altura máxima?"

pasos:
  - "y_max = v₀²/(2g) = {v0 ^ 2}/{2 * g} = {(v0 ^ 2) / (2 * g)}"

explicacion: |
  y_max = v₀²/(2g).
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["altura_maxima"]

variables:
  g: 10
  t_sol: random(1, 6)
  v0: g * t_sol
  y0: random(1, 20)

respuesta: y0 + (v0 ^ 2) / (2 * g)
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s desde una altura y₀={y0} m (g=10 m/s²). ¿Cuál es la altura máxima total?"

explicacion: |
  Se suma la altura inicial a lo que sube: y₀ + v₀²/(2g).
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["tiempo_vuelo"]

variables:
  g: 10
  t_subida: random(1, 8)
  v0: g * t_subida

respuesta: 2 * t_subida
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s (g=10 m/s²), y vuelve al mismo nivel de partida. ¿Cuánto tiempo está en el aire en total?"

pasos:
  - "Por simetría, tiempo total = 2×tiempo de subida = 2×{t_subida} = {2 * t_subida}"

explicacion: |
  El tiempo de bajada es igual al de subida, si vuelve al mismo nivel.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  v0: random(10, 50)

respuesta: -v0
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s, y vuelve al mismo nivel de partida. ¿Cuál es su velocidad justo al volver?"

explicacion: |
  Misma magnitud que la inicial, pero de signo opuesto (ahora bajando):
  −{v0}.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["caida_libre"]

variables:
  g: 10
  t: random(1, 8)

respuesta: -g * t
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde el reposo (g=10 m/s²). ¿Cuál es su velocidad en t={t} s?"

explicacion: |
  v(t) = −gt = −{g}×{t} = {-g * t} (negativa: cae, hacia abajo).
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["caida_libre"]

variables:
  g: 10
  t: random(1, 6)

respuesta: (g * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde el reposo (g=10 m/s²). ¿Qué distancia cayó en t={t} s?"

explicacion: |
  distancia = ½gt² = {g}×{t}²/2 = {(g * t ^ 2) / 2}.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["caida_libre"]

variables:
  g: 10
  t_sol: random(1, 2) * 2
  y0: (g * t_sol ^ 2) / 2

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se suelta desde {y0} m de altura (g=10 m/s²). ¿Cuánto tarda en llegar al piso?"

pasos:
  - "{y0} = ½×{g}×t² → t² = {2 * y0 / g} → t = {t_sol}"

explicacion: |
  Se despeja t de la fórmula de caída libre.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En el punto más alto de un tiro vertical, la velocidad vertical del objeto es 0."

explicacion: |
  Es el instante exacto en que deja de subir y empieza a bajar.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En el punto más alto, tanto la velocidad como la aceleración del objeto son 0."

explicacion: |
  Sólo la velocidad es 0 ahí — la aceleración de la gravedad sigue
  actuando todo el tiempo, incluido ese instante.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El tiempo de subida y el tiempo total de vuelo (hasta volver al punto de partida) son siempre el mismo número."

explicacion: |
  El tiempo total es el DOBLE del tiempo de subida (por la simetría
  subida/bajada), no el mismo número.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El tiro vertical es exactamente un MRUV, con a=−g."

explicacion: |
  Usa las mismas fórmulas de `../mruv/`, con la aceleración fija en −g.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la convención 'arriba positivo', la aceleración de la gravedad se escribe con signo negativo (−g)."

explicacion: |
  La gravedad siempre tira hacia abajo, en sentido contrario a la
  convención elegida como positiva.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  g: 10
  t_sol: random(1, 8)
  v0: g * t_sol
  real: (v0 ^ 2) / (2 * g)
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Se lanza un objeto con v₀={v0} m/s (g=10 m/s²). ¿Es correcto que la altura máxima sea {propuesto} m?"

explicacion: |
  La altura máxima correcta es v₀²/(2g) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["posicion"]

variables:
  g: 10
  v0: random(20, 60)
  t: random(1, 3)

respuesta: v0 * t - (g * t ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Se lanza un objeto hacia arriba con v₀={v0} m/s desde el piso (g=10 m/s²). ¿A qué altura está en t={t} s?"

pasos:
  - "y(t) = {v0}t − ½×{g}t² = {v0 * t} − {(g * t ^ 2) / 2}"

explicacion: |
  Se usa la fórmula completa de posición del MRUV, con a=−g.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto en tiro vertical pasa por la misma altura dos veces (una subiendo, otra bajando), con la misma rapidez (magnitud de velocidad) en las dos, pero sentidos opuestos."

explicacion: |
  Es una consecuencia de la simetría del movimiento respecto al punto
  más alto.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula t_total=2v₀/g sólo vale si el objeto vuelve exactamente al mismo nivel desde el que se lanzó — si cae más abajo (o más arriba), hay que resolver la ecuación cuadrática completa."

explicacion: |
  El atajo de la simetría no aplica cuando el punto de llegada es
  distinto del de partida.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  g: 10
  k: random(1, 5)
  v0: g * k
  subida: (v0 ^ 2) / (2 * g)
  altura_balcon: random(5, 30)

respuesta: subida + (subida + altura_balcon)
tipo: input
tolerancia_abs: 0

enunciado: "Desde un balcón de {altura_balcon} m se lanza un objeto hacia arriba con v₀={v0} m/s. Sube, y después cae hasta el piso (nivel 0). ¿Qué distancia TOTAL recorrió (subida + bajada), sumando ambos tramos?"

pasos:
  - "Sube {subida} m hasta el punto más alto"
  - "Desde ahí baja {subida}+{altura_balcon} m hasta el piso (el punto más alto queda a {subida}+{altura_balcon} m del piso)"
  - "Total: {subida} + ({subida}+{altura_balcon}) = {subida + (subida + altura_balcon)}"

explicacion: |
  La distancia TOTAL recorrida suma los dos tramos por separado — no es
  lo mismo que el desplazamiento neto (balcón hasta el piso), que sería
  sólo {altura_balcon} m.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  v0: random(10, 50)

respuesta: verdadero
tipo: vf

enunciado: "Si se lanza un objeto hacia arriba con v₀={v0} m/s y vuelve a pasar por el punto de lanzamiento, su rapidez en ese instante vuelve a ser {v0} m/s (aunque el sentido sea el opuesto)."

explicacion: |
  La energía se conserva en ausencia de rozamiento — la rapidez al
  volver al mismo nivel es igual a la inicial.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  g: 10
  t: random(1, 6)
  real: (g * t ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "Un objeto cae libremente durante {t} s (g=10 m/s²). ¿Es correcto que cayó {propuesto} m?"

explicacion: |
  La distancia correcta es ½gt² = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En ausencia de resistencia del aire, dos objetos de distinta masa soltados desde la misma altura llegan al piso al mismo tiempo."

explicacion: |
  La aceleración de la gravedad no depende de la masa del objeto — es
  el mismo g para cualquiera.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "intermedio"
  tags: ["problema"]

variables:
  g: 10
  t_subida: random(1, 6)
  v0: g * t_subida

respuesta: 2 * t_subida
tipo: input
tolerancia_abs: 0

enunciado: "Una pelota pateada hacia arriba con v₀={v0} m/s vuelve al mismo nivel del piso. ¿Cuánto tiempo estuvo en el aire?"

explicacion: |
  Mismo cálculo de siempre: t_total = 2v₀/g.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  v0_a: random(10, 30)
  v0_b: random(31, 60)

respuesta: ((v0_b ^ 2) > (v0_a ^ 2))
tipo: vf

enunciado: "Un objeto se lanza con v₀={v0_a} m/s, y otro con v₀={v0_b} m/s. ¿Alcanza mayor altura el segundo?"

explicacion: |
  La altura máxima crece con el CUADRADO de v₀ — mayor velocidad
  inicial siempre da mayor altura.
```

```
metadata:
  materia: "matematicas"
  tema: "tiro_vertical"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber en qué instante(s) un objeto en tiro vertical pasa por una altura específica (que no sea la máxima), hay que resolver una ecuación cuadrática en t, que en general tiene dos soluciones (subiendo y bajando)."

explicacion: |
  y(t)=y₀+v₀t−½gt² es cuadrática en t — la fórmula resolvente de
  `../../matematica/ecuacion-cuadratica/` da las dos soluciones (dos
  instantes distintos a la misma altura).
```

## Sección: tormentas-y-fenomenos-severos (24 preguntas)

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "basico"
  tags: ["fenomenos_severos", "vocabulario"]

enunciado: "¿Qué tienen en común las tormentas eléctricas, los tornados, los huracanes y el granizo severo?"
tipo: mc
opciones_explicitas:
  - "Una gran cantidad de energía atmosférica se concentra en un área chica y se libera de golpe"
  - "Todos ocurren únicamente en invierno"
  - "Ninguno tiene relación con la temperatura del aire"
respuesta: "Una gran cantidad de energía atmosférica se concentra en un área chica y se libera de golpe"

explicacion: |
  Cuanta más energía concentrada, más severo el fenómeno.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "basico"
  tags: ["tormenta_electrica"]

respuesta: verdadero
tipo: vf

enunciado: "Una tormenta eléctrica se forma dentro de un cumulonimbo, una nube de desarrollo vertical muy intensa."

explicacion: |
  Las corrientes de aire fuertes dentro de esa nube son la base del
  mecanismo.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "intermedio"
  tags: ["tormenta_electrica", "cargas_electricas"]

enunciado: "¿Qué hace que se separen las cargas eléctricas dentro de un cumulonimbo?"
tipo: mc
opciones_explicitas:
  - "La fricción entre gotitas de agua y cristales de hielo, arrastrados por corrientes de aire fuertes"
  - "El calor del suelo directamente"
  - "La luz del sol reflejada en las gotas"
respuesta: "La fricción entre gotitas de agua y cristales de hielo, arrastrados por corrientes de aire fuertes"

explicacion: |
  La parte superior de la nube queda cargada positiva, la inferior
  negativa.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "basico"
  tags: ["tormenta_electrica"]

enunciado: "¿Qué es el rayo?"
tipo: mc
opciones_explicitas:
  - "La descarga eléctrica que ocurre cuando la diferencia de carga en la nube es suficiente"
  - "El sonido que produce una tormenta"
  - "Un tipo de granizo muy grande"
respuesta: "La descarga eléctrica que ocurre cuando la diferencia de carga en la nube es suficiente"

explicacion: |
  El trueno es el sonido de esa misma descarga, no un fenómeno aparte.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "intermedio"
  tags: ["tormenta_electrica"]

enunciado: "¿Qué es el trueno?"
tipo: mc
opciones_explicitas:
  - "El sonido de la descarga del rayo, que calienta y expande el aire violentamente"
  - "Un segundo rayo que ocurre después del primero"
  - "El viento que genera la tormenta"
respuesta: "El sonido de la descarga del rayo, que calienta y expande el aire violentamente"

explicacion: |
  El calentamiento casi instantáneo del aire alrededor del rayo genera
  la onda sonora.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "basico"
  tags: ["tornado"]

enunciado: "¿Qué es un tornado?"
tipo: mc
opciones_explicitas:
  - "Una columna de aire en rotación muy violenta que conecta la base de un cumulonimbo con el suelo"
  - "Un tipo de huracán muy pequeño"
  - "Un frente frío que se mueve muy rápido"
respuesta: "Una columna de aire en rotación muy violenta que conecta la base de un cumulonimbo con el suelo"

explicacion: |
  Se forma por cizalladura del viento dentro de la tormenta.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "avanzado"
  tags: ["tornado"]

enunciado: "¿Qué es la cizalladura del viento, clave en la formación de un tornado?"
tipo: mc
opciones_explicitas:
  - "Una fuerte diferencia de velocidad o dirección del viento entre distintas alturas"
  - "El viento que sopla siempre en la misma dirección a toda altura"
  - "La ausencia total de viento dentro de la tormenta"
respuesta: "Una fuerte diferencia de velocidad o dirección del viento entre distintas alturas"

explicacion: |
  Hace girar horizontalmente una masa de aire, que luego una corriente
  ascendente fuerte puede inclinar hasta la vertical.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "basico"
  tags: ["tornado", "escalas"]

enunciado: "¿Con qué escala se mide la intensidad de un tornado?"
tipo: mc
opciones_explicitas:
  - "La escala Fujita mejorada (EF), de EF0 a EF5"
  - "La escala Saffir-Simpson, de categoría 1 a 5"
  - "La escala Richter"
respuesta: "La escala Fujita mejorada (EF), de EF0 a EF5"

explicacion: |
  Saffir-Simpson es para huracanes; Richter es para terremotos.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "avanzado"
  tags: ["tornado", "escalas"]

respuesta: verdadero
tipo: vf

enunciado: "La escala Fujita mejorada estima la velocidad del viento de un tornado a partir del daño causado en construcciones y árboles, no midiendo el viento directamente."

explicacion: |
  Es indirecta: se observa el daño después del paso del tornado.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "intermedio"
  tags: ["tornado", "escalas"]

tipo: ordenar
opciones_explicitas:
  - "EF0 (daño leve)"
  - "EF2 (daño significativo)"
  - "EF5 (daño increíble)"
respuesta:
  - "EF0 (daño leve)"
  - "EF2 (daño significativo)"
  - "EF5 (daño increíble)"

enunciado: "Ordená estas categorías de tornado de menor a mayor intensidad."

explicacion: |
  La escala EF va de EF0 (más leve) a EF5 (más severo).
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "basico"
  tags: ["huracan"]

enunciado: "¿Qué es un huracán?"
tipo: mc
opciones_explicitas:
  - "Un sistema de tormentas organizado en espiral alrededor de un centro de baja presión, alimentado por un océano cálido"
  - "Un tornado que ocurre sobre el mar"
  - "Una tormenta eléctrica sin lluvia"
respuesta: "Un sistema de tormentas organizado en espiral alrededor de un centro de baja presión, alimentado por un océano cálido"

explicacion: |
  Necesita agua tibia como combustible, por eso nunca se forma sobre
  tierra ni sobre agua fría.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "intermedio"
  tags: ["huracan"]

respuesta: verdadero
tipo: vf

enunciado: "Huracán, tifón y ciclón tropical son exactamente el mismo fenómeno físico, y sólo cambia el nombre según la región del mundo donde ocurre."

explicacion: |
  Huracán en América, tifón en Asia (Pacífico noroccidental), ciclón en
  el Índico y Pacífico sur.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "intermedio"
  tags: ["huracan"]

enunciado: "¿En qué región se le llama \"tifón\" a este mismo fenómeno?"
tipo: mc
opciones_explicitas:
  - "El Pacífico noroccidental (Asia)"
  - "El océano Atlántico"
  - "El sur de Europa"
respuesta: "El Pacífico noroccidental (Asia)"

explicacion: |
  En América se llama huracán, en el Índico/Pacífico sur se llama
  ciclón.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "basico"
  tags: ["huracan", "escalas"]

enunciado: "¿Con qué escala se mide la categoría de un huracán?"
tipo: mc
opciones_explicitas:
  - "La escala Saffir-Simpson, de categoría 1 a 5"
  - "La escala Fujita mejorada, de EF0 a EF5"
  - "La escala Richter"
respuesta: "La escala Saffir-Simpson, de categoría 1 a 5"

explicacion: |
  Se basa en la velocidad sostenida del viento del huracán.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "intermedio"
  tags: ["huracan", "escalas"]

enunciado: "¿A partir de qué categoría Saffir-Simpson se considera \"huracán mayor\" por su potencial de daño?"
tipo: mc
opciones_explicitas:
  - "Categoría 3"
  - "Categoría 1"
  - "Categoría 5 únicamente"
respuesta: "Categoría 3"

explicacion: |
  Las categorías 3 a 5 se consideran huracán mayor.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "intermedio"
  tags: ["huracan", "escalas"]

variables:
  viento_huracan_a: random(120, 150)
  viento_huracan_b: random(210, 250)

respuesta: "el huracán B"
tipo: mc
opciones_explicitas:
  - "el huracán B"
  - "el huracán A"
  - "los dos son de la misma categoría"

enunciado: "El huracán A tiene vientos sostenidos de {viento_huracan_a} km/h y el huracán B de {viento_huracan_b} km/h. ¿Cuál de los dos es de mayor categoría en la escala Saffir-Simpson?"

explicacion: |
  A mayor velocidad sostenida del viento, mayor categoría.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "intermedio"
  tags: ["granizo"]

enunciado: "¿Cuándo se considera \"severo\" el granizo?"
tipo: mc
opciones_explicitas:
  - "Cuando las piedras superan aproximadamente los 2 cm de diámetro"
  - "Cuando cae junto con lluvia"
  - "Sólo si dura más de una hora"
respuesta: "Cuando las piedras superan aproximadamente los 2 cm de diámetro"

explicacion: |
  Indica que las corrientes internas de la tormenta son muy intensas.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "avanzado"
  tags: ["granizo"]

respuesta: verdadero
tipo: vf

enunciado: "Para que una piedra de granizo crezca mucho, la tormenta necesita corrientes internas muy intensas que la sostengan en el aire el tiempo suficiente."

explicacion: |
  Es el mismo mecanismo de capas sucesivas visto en Precipitación,
  llevado al extremo.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "basico"
  tags: ["huracan", "vocabulario"]

tipo: completar
respuestas_validas:
  - "ciclón"
  - "ciclon"
  - "ciclón tropical"

enunciado: "En el océano Índico y el Pacífico sur, a este mismo fenómeno (huracán/tifón) se le llama ____."

explicacion: |
  Es el mismo sistema de tormentas en espiral, con nombre regional
  distinto.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "avanzado"
  tags: ["huracan"]

respuesta: verdadero
tipo: vf

enunciado: "Un huracán se alimenta del calor y la humedad de un océano cálido, por eso nunca se forma sobre tierra ni sobre agua fría."

explicacion: |
  Al perder esa fuente de energía (por ejemplo, al tocar tierra), el
  huracán se debilita.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "avanzado"
  tags: ["fenomenos_severos", "cambio_climatico"]

enunciado: "¿Por qué los eventos severos (huracanes, tornados, granizo) se usan como dato para el estudio del cambio climático?"
tipo: mc
opciones_explicitas:
  - "Un cambio en su frecuencia o intensidad promedio a lo largo de muchos años es una señal de que el clima cambió"
  - "Porque cada evento puntual, individualmente, prueba que el clima ya cambió"
  - "No tienen ninguna relación con el estudio del clima"
respuesta: "Un cambio en su frecuencia o intensidad promedio a lo largo de muchos años es una señal de que el clima cambió"

explicacion: |
  Un solo evento no prueba nada por la variabilidad natural; el promedio
  a largo plazo sí es una señal relevante.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "avanzado"
  tags: ["fenomenos_severos", "cambio_climatico"]

respuesta: falso
tipo: vf

enunciado: "Cada tornado o huracán puntual que ocurre es, por sí solo, prueba directa de que el cambio climático ya está pasando."

explicacion: |
  La variabilidad natural del clima siempre existió; lo que se analiza
  es la tendencia de frecuencia/intensidad a largo plazo.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "intermedio"
  tags: ["fenomenos_severos", "sintesis"]

enunciado: "¿Por qué tormentas eléctricas, tornados, huracanes y granizo severo se agrupan en un solo tema, en vez de separarse en módulos distintos?"
tipo: mc
opciones_explicitas:
  - "Porque todos son ejemplos de la misma categoría: energía atmosférica concentrada que se libera violentamente"
  - "Porque en realidad son el mismo fenómeno físico exacto"
  - "Porque ninguno tiene relación con las masas de aire y frentes"
respuesta: "Porque todos son ejemplos de la misma categoría: energía atmosférica concentrada que se libera violentamente"

explicacion: |
  Son variantes de un mismo principio, no habilidades separables como
  las tres leyes de Newton.
```

```
metadata:
  materia: "fisica"
  tema: "tormentas_y_fenomenos_severos"
  nivel: "avanzado"
  tags: ["fenomenos_severos", "sintesis"]

enunciado: "¿Cuál resume mejor la diferencia entre un tornado y un huracán?"
tipo: mc
opciones_explicitas:
  - "El tornado es una columna de aire en rotación conectada a un cumulonimbo puntual; el huracán es un sistema de tormentas en espiral, mucho más grande, alimentado por un océano cálido"
  - "Son exactamente el mismo fenómeno, sólo cambia el nombre según el país"
  - "El huracán siempre es menos intenso que un tornado"
respuesta: "El tornado es una columna de aire en rotación conectada a un cumulonimbo puntual; el huracán es un sistema de tormentas en espiral, mucho más grande, alimentado por un océano cálido"

explicacion: |
  A diferencia de huracán/tifón/ciclón (que sí son el mismo fenómeno con
  distinto nombre), tornado y huracán son fenómenos distintos entre sí.
```

## Sección: trabajo-de-una-fuerza (26 preguntas)

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "basico"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Qué es el trabajo de una fuerza, en física?"
tipo: mc
opciones_explicitas:
  - "La transferencia de energía que ocurre cuando una fuerza actúa sobre un objeto que se desplaza"
  - "El esfuerzo muscular necesario para sostener algo"
  - "Otro nombre para la fuerza misma"
respuesta: "La transferencia de energía que ocurre cuando una fuerza actúa sobre un objeto que se desplaza"

explicacion: |
  Sin desplazamiento, no hay trabajo físico, aunque haya esfuerzo.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "basico"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿En qué unidad se mide el trabajo?"
tipo: mc
opciones_explicitas:
  - "Joule (J)"
  - "Newton (N)"
  - "Kilogramo (kg)"
respuesta: "Joule (J)"

explicacion: |
  1 J = 1 N × 1 m.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "completar"]

tipo: completar
enunciado: "Completá: 1 Joule = 1 Newton × 1 ___."
respuestas_validas:
  - "metro"
  - "m"

explicacion: |
  Es el trabajo de 1 N desplazando un objeto 1 m en su misma dirección.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "problema"]

variables:
  fuerza: uno_de([10, 20, 30])
  distancia: uno_de([5, 10])

respuesta: fuerza * distancia
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza de {fuerza} N actúa exactamente en la misma dirección que el desplazamiento de {distancia} m. ¿Cuál es el trabajo realizado?"

pasos:
  - "{fuerza} × {distancia} × cos(0°) = {fuerza} × {distancia} × 1 = {fuerza * distancia} J"

explicacion: |
  Con ángulo 0°, cos(0°) = 1: el trabajo es simplemente fuerza por
  distancia.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  fuerza: uno_de([20, 40])
  distancia: uno_de([5, 10])
  cos_60: 0.5

respuesta: fuerza * distancia * cos_60
tipo: input
tolerancia_abs: 1

enunciado: "Una fuerza de {fuerza} N forma un ángulo de 60° con el desplazamiento de {distancia} m (cos 60° = 0,5). ¿Cuál es el trabajo realizado?"

pasos:
  - "{fuerza} × {distancia} × 0,5 = {fuerza * distancia * cos_60} J"

explicacion: |
  Sólo la componente de la fuerza en la dirección del movimiento
  contribuye al trabajo.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "problema"]

variables:
  fuerza: random(10, 100)
  distancia: random(1, 20)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza de {fuerza} N actúa exactamente perpendicular al desplazamiento de {distancia} m. ¿Cuál es el trabajo realizado?"

pasos:
  - "{fuerza} × {distancia} × cos(90°) = {fuerza} × {distancia} × 0 = 0 J"

explicacion: |
  Una fuerza perpendicular al desplazamiento nunca hace trabajo, sin
  importar cuán grande sea.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Cuándo el trabajo de una fuerza es positivo?"
tipo: mc
opciones_explicitas:
  - "Cuando la fuerza tiene una componente en la misma dirección que el desplazamiento (ángulo menor a 90°)"
  - "Siempre que la fuerza sea muy grande"
  - "Sólo cuando la fuerza es vertical"
respuesta: "Cuando la fuerza tiene una componente en la misma dirección que el desplazamiento (ángulo menor a 90°)"

explicacion: |
  La fuerza "ayuda" al movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Cuándo el trabajo de una fuerza es negativo?"
tipo: mc
opciones_explicitas:
  - "Cuando la fuerza se opone al desplazamiento (ángulo mayor a 90°)"
  - "Cuando la fuerza es muy chica"
  - "El trabajo nunca puede ser negativo"
respuesta: "Cuando la fuerza se opone al desplazamiento (ángulo mayor a 90°)"

explicacion: |
  Como el rozamiento, que siempre se opone al movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Cuándo el trabajo de una fuerza es exactamente cero?"
tipo: mc
opciones_explicitas:
  - "Cuando la fuerza es perpendicular al desplazamiento, o cuando no hay desplazamiento"
  - "Sólo cuando la fuerza vale cero"
  - "El trabajo nunca puede ser cero si hay una fuerza actuando"
respuesta: "Cuando la fuerza es perpendicular al desplazamiento, o cuando no hay desplazamiento"

explicacion: |
  Son dos casos distintos que dan trabajo nulo.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "basico"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "Sin ningún desplazamiento, no hay trabajo físico, sin importar cuán grande sea la fuerza aplicada."

explicacion: |
  d = 0 hace que W = F×d×cos(θ) sea siempre 0.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "problema"]

variables:
  fuerza: random(50, 200)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Una persona sostiene una bolsa de {fuerza} N parada, sin moverse durante 2 minutos. ¿Cuánto trabajo físico realiza sobre la bolsa?"

explicacion: |
  Sin desplazamiento (d = 0), el trabajo es cero, aunque la persona se
  canse.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "El cansancio muscular de sostener algo quieto no es lo mismo que el trabajo físico definido en Física: ese trabajo mecánico sobre el objeto sostenido es cero."

explicacion: |
  El cuerpo gasta energía biológica internamente, pero no transfiere
  trabajo mecánico al objeto si éste no se desplaza.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  fuerza: random(30, 100)
  distancia: random(5, 20)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Una persona camina en línea recta horizontal {distancia} m, sosteniendo una bolsa con una fuerza vertical de {fuerza} N (para no dejarla caer). ¿Cuál es el trabajo que esa fuerza vertical realiza sobre la bolsa?"

explicacion: |
  La fuerza (vertical) es perpendicular al desplazamiento (horizontal):
  el trabajo de esa fuerza es cero, aunque la bolsa se traslade.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Por qué la fuerza centrípeta, que mantiene a un objeto girando en círculo, no realiza trabajo?"
tipo: mc
opciones_explicitas:
  - "Porque es siempre perpendicular a la velocidad del objeto en cada instante"
  - "Porque los objetos en movimiento circular no tienen energía cinética"
  - "En realidad sí hace trabajo, y por eso el objeto frena con el tiempo"
respuesta: "Porque es siempre perpendicular a la velocidad del objeto en cada instante"

explicacion: |
  Por eso el movimiento circular uniforme mantiene la rapidez constante,
  aunque la dirección cambie todo el tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "En un movimiento circular uniforme, la energía cinética del objeto no cambia, porque la fuerza centrípeta no realiza trabajo."

explicacion: |
  Sin trabajo neto, no hay cambio de energía cinética (teorema
  trabajo-energía).
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "La fuerza de rozamiento, al oponerse siempre al movimiento, realiza trabajo negativo sobre un objeto que se desliza."

explicacion: |
  El ángulo entre el rozamiento y el desplazamiento es siempre 180°:
  cos(180°) = -1.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  friccion: uno_de([10, 20, 30])
  distancia: uno_de([5, 10])

respuesta: 0 - (friccion * distancia)
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se desliza {distancia} m, con una fuerza de rozamiento de {friccion} N oponiéndose al movimiento en todo momento. ¿Cuál es el trabajo realizado por el rozamiento?"

pasos:
  - "{friccion} × {distancia} × cos(180°) = {friccion} × {distancia} × (-1) = {0 - (friccion * distancia)} J"

explicacion: |
  El signo negativo indica que el rozamiento le quita energía al
  movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "El trabajo total sobre un objeto se puede calcular sumando el trabajo de cada fuerza por separado, o calculando directamente el trabajo de la fuerza neta — ambos caminos dan el mismo resultado."

explicacion: |
  Es consecuencia de que el trabajo (como producto escalar) se
  distribuye sobre sumas de vectores.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Qué dice el teorema trabajo-energía?"
tipo: mc
opciones_explicitas:
  - "El trabajo neto sobre un objeto es igual al cambio en su energía cinética"
  - "El trabajo siempre es igual a la energía potencial del objeto"
  - "No existe ninguna relación entre trabajo y energía"
respuesta: "El trabajo neto sobre un objeto es igual al cambio en su energía cinética"

explicacion: |
  W_neto = Ec_final − Ec_inicial.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  ec_inicial: uno_de([50, 100, 150])
  trabajo_neto: uno_de([20, 30, 50])

respuesta: ec_inicial + trabajo_neto
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto tiene una energía cinética inicial de {ec_inicial} J. Sobre él se realiza un trabajo neto de {trabajo_neto} J. ¿Cuál es su energía cinética final?"

pasos:
  - "{ec_inicial} + {trabajo_neto} = {ec_inicial + trabajo_neto} J"

explicacion: |
  Ec_final = Ec_inicial + W_neto.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "ordenar"]

enunciado: "Ordená los pasos para calcular el trabajo de una fuerza sobre un objeto que se desplaza."
tipo: ordenar
opciones_explicitas:
  - "El resultado, en Joule, es el trabajo realizado"
  - "Identificar el ángulo entre la fuerza y el desplazamiento"
  - "Multiplicar la fuerza, la distancia y el coseno de ese ángulo"
respuesta_orden:
  - "Identificar el ángulo entre la fuerza y el desplazamiento"
  - "Multiplicar la fuerza, la distancia y el coseno de ese ángulo"
  - "El resultado, en Joule, es el trabajo realizado"

explicacion: |
  W = F × d × cos(θ).
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  fuerza: uno_de([20, 40])
  distancia: uno_de([5, 10])
  cos_120: -0.5

respuesta: fuerza * distancia * cos_120
tipo: input
tolerancia_abs: 1

enunciado: "Una fuerza de {fuerza} N forma un ángulo de 120° con el desplazamiento de {distancia} m (cos 120° = -0,5). ¿Cuál es el trabajo realizado?"

pasos:
  - "{fuerza} × {distancia} × (-0,5) = {fuerza * distancia * cos_120} J"

explicacion: |
  Con un ángulo obtuso, el trabajo da negativo: la fuerza frena más de
  lo que ayuda al movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "El trabajo es una magnitud escalar (un número con signo), no una magnitud vectorial."

explicacion: |
  Es consecuencia directa de ser un producto escalar entre dos
  vectores.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  trabajo_motor: uno_de([100, 200, 300])
  trabajo_friccion: uno_de([20, 40, 60])

respuesta: trabajo_motor - trabajo_friccion
tipo: input
tolerancia_abs: 0

enunciado: "Un auto recibe un trabajo de {trabajo_motor} J de parte del motor, mientras el rozamiento le realiza un trabajo de -{trabajo_friccion} J. ¿Cuál es el trabajo neto sobre el auto?"

pasos:
  - "{trabajo_motor} + (-{trabajo_friccion}) = {trabajo_motor - trabajo_friccion} J"

explicacion: |
  Se suman los trabajos de todas las fuerzas, respetando su signo.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "vocabulario"]

enunciado: "Al levantar una caja verticalmente hacia arriba, ¿por qué el trabajo que se realiza sobre ella es positivo?"
tipo: mc
opciones_explicitas:
  - "Porque la fuerza aplicada (hacia arriba) tiene la misma dirección que el desplazamiento (hacia arriba)"
  - "Porque toda fuerza vertical siempre hace trabajo positivo, sin excepción"
  - "El trabajo de levantar algo en realidad siempre es negativo"
respuesta: "Porque la fuerza aplicada (hacia arriba) tiene la misma dirección que el desplazamiento (hacia arriba)"

explicacion: |
  θ = 0° entre fuerza y desplazamiento: cos(0°) = 1, trabajo máximo
  positivo para esa fuerza y distancia.
```

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el concepto de trabajo de una fuerza?"
tipo: mc
opciones_explicitas:
  - "Para calcular cuánta energía transfiere una fuerza a un objeto que se desplaza, conectando fuerza, movimiento y energía"
  - "Sólo sirve para medir el esfuerzo muscular de una persona"
  - "Sólo aplica a fuerzas que actúan durante un movimiento circular"
respuesta: "Para calcular cuánta energía transfiere una fuerza a un objeto que se desplaza, conectando fuerza, movimiento y energía"

explicacion: |
  Es el puente directo hacia el estudio de la energía, que se retoma en
  módulos futuros.
```

## Sección: transmision-calor-conduccion-conveccion-radiacion (27 preguntas)

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación", "Las tres son correctas"]

enunciado: "El mecanismo de transferencia de calor que ocurre a través del contacto directo entre partículas de un material sin que haya desplazamiento de la materia es la ___."

respuesta: "Conducción"

explicacion: |
  La conducción es la transferencia de energía térmica mediante colisiones moleculares en un medio material (generalmente sólidos).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["radiacion", "vacio"]

tipo: vf

enunciado: "La radiación térmica es el único mecanismo de transferencia de calor que puede ocurrir en el vacío, ya que no requiere de un medio material para propagarse."

respuesta: falso

explicacion: |
  Es verdadero que la radiación no requiere medio, pero la pregunta afirma que es el "único" mecanismo para eso, lo cual es correcto. Sin embargo, en el contexto de la lógica de la pregunta, la afirmación es verdadera. (Nota: Si el usuario debe responder si la afirmación es verdadera o falsa, el valor es verdadero).

# Corrección para seguir la regla de booleano literal:
respuesta: verdadero

explicacion: |
  La radiación se propaga mediante ondas electromagnéticas, por lo que puede viajar por el vacío (como la luz del Sol).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conveccion", "fluidos"]

tipo: completar
respuestas_validas: ["convección"]

enunciado: "La transferencia de calor por ___ ocurre mediante el movimiento macroscópico de corrientes de un fluido (líquido o gas) debido a diferencias de densidad."

respuesta: "convección"

explicacion: |
  En la convección, el fluido caliente (menos denso) sube y el fluido frío (más denso) baja, creando una corriente.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación"]

variables:
  idx: uno_de([0, 1, 2])

enunciado: "Considerando el escenario donde el calor se transmite a través de una corriente de aire en una habitación, el mecanismo predominante es la {escenario}."

pasos:
  - "Identificar si el medio es sólido, fluido o vacío."
  - "Determinar si hay movimiento de masa o solo vibración."

variables_contexto:
  escenarios: [["Conducción", "Conducción"], ["Convección", "Convección"], ["Radiación", "Radiación"]]

# Re-estructurando para cumplir estrictamente la regla de un solo uno_de y evitar desincronización
# Usaremos un array de pares para asegurar que la respuesta sea coherente con el enunciado sorteado.

enunciado: "Si el calor se transmite mediante el movimiento de un fluido, estamos ante la {tipo}."

respuesta: tabla[idx][1

tipo_variable:
  idx: uno_de([0, 1, 2])
  tabla: [["Conducción", "Conducción"], ["Convección", "Convección"], ["Radiación", "Radiación"]]

# Ajuste final al formato estricto solicitado:
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

variables:
  idx: uno_de([0, 1])
  datos: [["Convección", "movimiento de fluidos"], ["Conducción", "contacto sólido"]]

enunciado: "El proceso que se caracteriza por el {caracteristica} es la {proceso}."

respuesta: datos[idx][0

explicacion: |
  La respuesta depende del sorteo realizado en la variable 'idx'.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación"]

enunciado: "El mecanismo que implica el transporte de masa debido a gradientes de temperatura en un fluido es:"

respuesta: "Convección"

explicacion: |
  La convección requiere el movimiento físico de las partículas del fluido.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["orden", "mecanismos"]

tipo: ordenar
opciones_explicitas: ["Conducción", "Convección", "Radiación"]
respuesta: ["Conducción", "Convección", "Radiación"]

enunciado: "Ordene los mecanismos de transferencia de calor según su dependencia de un medio material, desde el que requiere contacto sólido (más restrictivo) hasta el que no requiere medio (más general):"

explicacion: |
  La conducción requiere contacto/medio sólido; la convección requiere fluido; la radiación no requiere nada.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_conduccion"
  nivel: "intermedio"
  tags: ["conduccion", "ley_de_fourier", "calculo"]

variables:
  area: 0.5
  espesor: 0.02
  k: 400
  dT: 30
  calor_flujo: (k * area * dT) / espesor

respuesta: calor_flujo
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una barra de cobre tiene una sección transversal de {area} m² y un espesor de {espesor} m. Si la diferencia de temperatura entre sus extremos es de {dT} °C y la conductividad térmica del cobre es de {k} W/(m·K), ¿cuál es el flujo de calor (W) que atraviesa la barra?"

pasos:
  - "Identificar los datos: Área (A) = 0.5 m², Espesor (L) = 0.02 m, Conductividad (k) = 400 W/(m·K), Diferencia de temperatura (ΔT) = 30 °C."
  - "Aplicar la Ley de Fourier: Q = (k * A * ΔT) / L"
  - "Calcular: Q = (400 * 0.5 * 30) / 0.02 = 6000 / 0.02 = 300000 W."

explicacion: |
  El flujo de calor por conducción se calcula con la Ley de Fourier. En este caso, el resultado es 300,000 W.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_radiacion"
  nivel: "basico"
  tags: ["radiacion", "vacuo"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que el calor se transmita por conducción a través del vacío absoluto?"

explicacion: |
  Falso. La conducción y la convección requieren un medio material (átomos o moléculas) para transferir energía mediante colisiones o movimiento de fluidos. La radiación es el único mecanismo que puede ocurrir en el vacío mediante ondas electromagnéticas.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_conveccion"
  nivel: "basico"
  tags: ["conveccion", "fluidos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un metal sólido", "un fluido como el aire"], ["conducción", "convección"]]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["conducción", "convección"]

enunciado: "El movimiento de las partículas de un fluido (líquido o gas) debido a diferencias de densidad causadas por cambios de temperatura es el mecanismo de: ___"

explicacion: |
  La convección implica el transporte de materia (fluido) para transferir energía térmica.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_radiacion"
  nivel: "avanzado"
  tags: ["radiacion", "stefan_boltzmann"]

variables:
  emision: 0.8
  area: 2.0
  temp_k: 300
  sigma: 5.67e-8
  potencia: emision * sigma * area * (temp_k^2)

respuesta: potencia
tipo: completar
tolerancia_abs: 1.0

enunciado: "Un objeto negro ideal con una emisividad de {emision} tiene una superficie de {area} m². Si su temperatura es de {temp_k} K, ¿cuánta potencia radiada (W) emite? (Usa σ = 5.67e-8 W/m²K⁴)"

pasos:
  - "La fórmula de la potencia radiada es: P = ε * σ * A * T⁴"
  - "Sustituir valores: P = 0.8 * 5.67e-8 * 2.0 * (300^4)"
  - "Calcular: P = 0.8 * 5.67e-8 * 2.0 * 8100000000 = 734.88 W"

explicacion: |
  Utilizando la Ley de Stefan-Boltzmann, la potencia radiada es aproximadamente 734.88 W.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_conceptos"
  nivel: "basico"
  tags: ["conceptos", "ordenar"]

opciones_explicitas: ["Conducción", "Convección", "Radiación"]
respuesta: ["Conducción", "Convección", "Radiación"]
tipo: ordenar

enunciado: "Ordena los mecanismos de transferencia de calor según el medio necesario, de mayor dependencia de la materia (contacto directo) a menor dependencia (no requiere materia):"

explicacion: |
  1. Conducción: Requiere contacto directo entre partículas sólidas o fluidos.
  2. Convección: Requiere el movimiento de un fluido.
  3. Radiación: No requiere medio material.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["radiacion", "vacuo"]

tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion", "conduccion y conveccion"]

enunciado: "A diferencia de la conducción y la convección, la radiación térmica puede transferir energía a través del vacío porque no requiere un medio material. ¿Cuál es este mecanismo?"

respuesta: "radiacion"

explicacion: |
  La radiación térmica ocurre mediante ondas electromagnéticas y no necesita partículas para propagarse, lo que permite que el calor viaje por el vacío (como la radiación solar).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion", "conduccion"]

variables:
  es_fluido: true

tipo: vf

enunciado: "En un fluido (como el aire o el agua) en reposo, el mecanismo predominante de transferencia de calor es la conducción térmica. ¿Es esto verdadero o falso?"

respuesta: falso

explicacion: |
  Aunque la conducción ocurre en fluidos, la transferencia de calor en fluidos suele estar dominada por la convección, que involucra el movimiento macroscópico de las masas de fluido.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion", "conduccion", "radiacion"]

tipo: ordenar

opciones_explicitas: ["Convección del líquido", "Conducción a través de las paredes", "Radiación hacia el ambiente"]

enunciado: "Ordena los mecanismos de transferencia de calor de una taza de café caliente, desde el que ocurre principalmente en el cuerpo del líquido hasta el que ocurre hacia el espacio exterior."

respuesta: ["Convección del líquido", "Conducción a través de las paredes", "Radiación hacia el ambiente"]

explicacion: |
  1. La convección mueve el líquido caliente hacia arriba dentro de la taza. 
  2. La conducción transporta calor a través de las paredes sólidas. 
  3. La radiación emite energía electromagnética hacia el entorno.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [
    ["El calor que viaja por una barra de metal", "conduccion"],
    ["El aire caliente que sube al calentarse", "conveccion"],
    ["El calor que sentimos del sol", "radiacion"]
  ]

tipo: completar

enunciado: "En el escenario seleccionado: {escenarios[escenario_idx][0]}, el mecanismo principal es la ___."

respuestas_validas: ["conduccion", "conveccion", "radiacion"]
respuesta: "{escenarios[escenario_idx][1]}"

explicacion: |
  Cada mecanismo tiene una naturaleza distinta: la conducción requiere contacto directo en sólidos, la convección requiere movimiento de fluidos, y la radiación requiere ondas electromagnéticas.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["radiacion", "ley_stefan"]

variables:
  temp_k: 300

tipo: completar

enunciado: "Si un objeto emite radiación térmica, la cantidad de energía emitida por unidad de área es proporcional a la temperatura elevada a la cuarta potencia (T^4). Si la temperatura absoluta es de {temp_k} K, ¿cuál es el valor de la temperatura elevada a la cuarta potencia?"

pasos:
  - "Elevar la temperatura absoluta al exponente 4."

respuesta: 8100000000000.0
tolerancia_abs: 0.1

explicacion: |
  Según la ley de Stefan-Boltzmann, la potencia irradiada es proporcional a T^4. Para 300 K, el cálculo es 300^4 = 8,100,000,000,000.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["La conducción requiere un medio material para transferir energía", "La radiación depende de la densidad del medio para ocurrir", "La convección es la transferencia de energía mediante contacto directo", "La radiación requiere contacto físico entre cuerpos"]

enunciado: "La principal diferencia entre la radiación y los otros dos mecanismos de transferencia de calor es que..."

explicacion: |
  La conducción y la convección requieren un medio material (sólido, líquido o gas) para propagar el calor. La radiación, en cambio, se produce mediante ondas electromagnéticas y puede ocurrir en el vacío.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["conduccion", "mecanismos"]

tipo: completar
respuestas_validas: ["vibraciones", "colisiones"]

enunciado: "En un sólido, la conducción térmica ocurre principalmente debido a las ___ de las partículas y las colisiones entre electrones libres."

explicacion: |
  La conducción en sólidos se debe al movimiento de los electrones libres y a las vibraciones de la red cristalina (fonones) que transmiten la energía cinética de las zonas calientes a las frías.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "intermedio"
  tags: ["conveccion", "fluidos"]

variables:
  escenario: uno_de([
    ["agua hirviendo en una olla", "convección"],
    ["aire caliente subiendo en una habitación", "convección"],
    ["el movimiento de magma en el manto terrestre", "convección"]
  ])

tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "El fenómeno descrito en el escenario de {escenario[0]} es un ejemplo de..."

explicacion: |
  La convección es la transferencia de calor en fluidos (líquidos o gases) causada por la diferencia de densidad en las corrientes de fluido provocadas por cambios de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["radiacion", "vacio"]

tipo: vf

enunciado: "La transferencia de calor por radiación puede ocurrir en el vacío absoluto, como ocurre con la energía que llega del Sol a la Tierra."

respuesta: verdadero

explicacion: |
  A diferencia de la conducción y la convección, la radiación no necesita un medio material, ya que se transporta mediante ondas electromagnéticas.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "intermedio"
  tags: ["ordenar", "mecanismos"]

tipo: ordenar
opciones_explicitas: ["Radiación", "Convección", "Conducción"]

enunciado: "Ordene los mecanismos de transferencia de calor de mayor a menor dependencia de la presencia de un medio material (desde el que no requiere medio hasta el que requiere contacto directo):"

respuesta: ["Radiación", "Convección", "Conducción"]

explicacion: |
  1. Radiación: No requiere medio (puede ser en vacío).
  2. Convección: Requiere un fluido (líquido o gas).
  3. Conducción: Es el mecanismo predominante en sólidos (contacto directo entre partículas).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Un termo de café con doble pared de vacío", "radiacion"],
    ["Una cuchara de metal en el café caliente", "conduccion"]
  ]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "En el escenario seleccionado: {datos[escenario_idx][0]}, el mecanismo de transferencia de calor predominante que se intenta evitar o que ocurre es la {datos[escenario_idx][1]}."

explicacion: |
  La conducción requiere contacto directo entre partículas, la convección requiere un fluido en movimiento y la radiación se transmite mediante ondas electromagnéticas (como en el vacío de un termo).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

respuesta: verdadero
tipo: vf

enunciado: "En la convección, el calor se transfiere mediante el movimiento macroscópico de un fluido (líquido o gas) debido a diferencias de densidad."

explicacion: |
  Correcto. Las corrientes de convección se originan porque el fluido caliente es menos denso y sube, mientras que el frío es más denso y baja.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  caso_idx: uno_de([0, 1, 2])
  casos: [
    ["El sol calentando la Tierra", "radiacion"],
    ["El calor de una estufa calentando el aire de una habitación", "conveccion"],
    ["El mango de una sartén que se calienta al fuego", "conduccion"]
  ]

respuesta: casos[caso_idx][1
tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "Analiza el caso: {casos[caso_idx][0]}. ¿Qué mecanismo de transferencia de calor es el principal?"

explicacion: |
  Cada caso representa un mecanismo distinto: contacto (conducción), movimiento de fluido (convección) u ondas electromagnéticas (radiación).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["secuencia", "transferencia"]

respuesta: ["radiacion", "conveccion", "conduccion"]
tipo: ordenar

opciones_explicitas: ["radiacion", "conveccion", "conduccion"]

enunciado: "Ordena los mecanismos de transferencia de calor según su capacidad para propagarse en el vacío, desde el que puede hacerlo sin necesidad de materia hasta el que requiere contacto sólido directo."

explicacion: |
  La radiación no requiere medio (puede viajar en el vacío), la convección requiere un fluido y la conducción requiere contacto entre sólidos o fluidos.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["radiacion", "emision"]

variables:
  propiedad_idx: uno_de([0, 1])
  propiedades: [
    ["superficie negra y rugosa", "mayor"],
    ["superficie blanca y pulida", "menor"]
  ]

respuesta: propiedades[propiedad_idx][1
tipo: completar
respuestas_validas: ["mayor", "menor"]

enunciado: "Una superficie con una propiedad de absorción/emisión de tipo {propiedades[propiedad_idx][0]} presentará una tasa de transferencia por radiación ___ que una superficie reflectante."

explicacion: |
  Los cuerpos negros son los mejores emisores y absorbedores de radiación térmica. Las superficies blancas o brillantes reflejan la mayor parte de la energía.
```

## Sección: velocidad-aceleracion-instantaneas (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  c: random(-10, 10)
  t: random(1, 6)

respuesta: 2 * a * t + b
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² + {b}t + {c} (posición, metros). ¿Cuál es la velocidad instantánea en t={t}?"

pasos:
  - "v(t) = x'(t) = {2 * a}t + {b}"
  - "v({t}) = {2 * a}×{t} + {b} = {2 * a * t + b}"

explicacion: |
  La velocidad instantánea es la derivada de la posición.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["velocidad"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  c: random(-10, 10)
  t: random(1, 4)

respuesta: 3 * a * t ^ 2 + 2 * b * t + c
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t² + {c}t (posición, metros). ¿Cuál es la velocidad instantánea en t={t}?"

pasos:
  - "v(t) = x'(t) = {3 * a}t² + {2 * b}t + {c}"

explicacion: |
  Con posición cúbica, la velocidad ya no es constante ni lineal — es
  cuadrática.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["aceleracion"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  c: random(-10, 10)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² + {b}t + {c}. ¿Cuál es la aceleración instantánea (constante, en este caso)?"

pasos:
  - "v(t) = {2 * a}t + {b}. a(t) = v'(t) = {2 * a}"

explicacion: |
  Con posición cuadrática, la aceleración es constante (mismo caso que
  MRUV).
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["aceleracion"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  t: random(1, 5)

respuesta: 6 * a * t + 2 * b
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t² (posición). ¿Cuál es la aceleración instantánea en t={t}?"

pasos:
  - "v(t) = {3 * a}t² + {2 * b}t. a(t) = v'(t) = {6 * a}t + {2 * b}"
  - "a({t}) = {6 * a}×{t} + {2 * b} = {6 * a * t + 2 * b}"

explicacion: |
  Con posición cúbica, la aceleración cambia con el tiempo — hay que
  evaluarla en el instante pedido, no asumirla constante.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["punto_critico"]

variables:
  a: random(1, 8)
  t_sol: random(1, 10)
  b: -2 * a * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² + {b}t. ¿En qué instante t la velocidad instantánea es 0?"

pasos:
  - "v(t) = {2 * a}t + {b} = 0 → t = {t_sol}"

explicacion: |
  Es el mismo procedimiento que hallar un punto crítico en
  `../../matematica/optimizacion/`.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  t_sol: random(1, 5)
  c: -(3 * a * t_sol ^ 2) - (2 * b * t_sol)

respuesta: ((6 * a * t_sol + 2 * b) != 0)
tipo: vf

enunciado: "x(t) = {a}t³ + {b}t² + {c}t tiene v({t_sol})=0. ¿Es también 0 la aceleración en ese mismo instante?"

explicacion: |
  En general, v=0 no implica a=0 — son valores independientes, salvo en
  casos particulares como el reposo total.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["velocidad_media"]

variables:
  a: random(1, 5)
  t1: random(1, 4)
  t2: random(5, 10)

respuesta: a * (t1 + t2)
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² (posición). ¿Cuál es la velocidad MEDIA entre t={t1} y t={t2}?"

pasos:
  - "v_media = (x({t2})−x({t1}))/({t2}−{t1}) = ({a}×{t2}²−{a}×{t1}²)/({t2}−{t1}) = {a}×({t1}+{t2})"

explicacion: |
  La velocidad media usa el cociente incremental completo, no la
  derivada puntual.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 5)
  t1: random(1, 4)
  t2: random(5, 10)

respuesta: ((a * (t1 + t2)) != (2 * a * t1))
tipo: vf

enunciado: "x(t) = {a}t². ¿Es la velocidad media entre t={t1} y t={t2} igual a la velocidad instantánea en t={t1}?"

explicacion: |
  En general son distintas — sólo coinciden en el caso especial de
  velocidad constante (MRU).
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La velocidad instantánea es la derivada de la posición respecto del tiempo."

explicacion: |
  v(t) = x'(t) — la definición central del tema.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La aceleración instantánea es la derivada de la velocidad respecto del tiempo (o la derivada segunda de la posición)."

explicacion: |
  a(t) = v'(t) = x''(t).
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un MRU (x(t) lineal en t), la aceleración instantánea es 0 en todo momento."

explicacion: |
  La derivada de una función lineal es constante, y la derivada de esa
  constante es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un MRUV (x(t) cuadrática en t), la aceleración instantánea es constante (pero distinta de 0)."

explicacion: |
  La derivada segunda de una función cuadrática es siempre la misma
  constante — mismo resultado ya visto en
  `../../matematica/optimizacion/`.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si x(t) es un polinomio de grado 3 (o mayor), la aceleración instantánea ya no es constante — cambia con el tiempo."

explicacion: |
  La derivada segunda de un cúbico es lineal en t, no una constante.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Calcular (x(t₂)−x(t₁))/(t₂−t₁) da directamente la velocidad instantánea en cualquiera de los dos instantes."

explicacion: |
  Eso da la velocidad MEDIA en el intervalo — la instantánea es un
  límite (la derivada), no ese cociente directo.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si la velocidad instantánea es 0 en un instante, la aceleración también tiene que ser 0 en ese mismo instante."

explicacion: |
  No, son cantidades independientes — en el punto más alto de un tiro
  vertical, v=0 pero a=−g, distinto de 0.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  v0: random(10, 50)
  t: random(1, 5)

respuesta: v0 - 10 * t
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {v0}t − 5t² (tiro vertical, g=10). ¿Cuál es la velocidad instantánea en t={t}?"

pasos:
  - "v(t) = y'(t) = {v0} − 10t"

explicacion: |
  Es la misma fórmula v(t)=v₀−gt de `../tiro-vertical/`, obtenida ahora
  derivando la posición en vez de plantearla directo.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  t: random(1, 6)
  real: 2 * a * t + b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {a}t² + {b}t. ¿Es correcto que la velocidad en t={t} sea {propuesto}?"

explicacion: |
  El valor correcto es v({t}) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La rapidez es el valor absoluto de la velocidad — dos objetos con velocidades +10 m/s y −10 m/s tienen la misma rapidez, pero direcciones opuestas."

explicacion: |
  Velocidad incluye dirección (signo); rapidez es sólo la magnitud.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  c: random(-10, 10)

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t² + {c}t. ¿Cuál es la velocidad instantánea en t=0?"

explicacion: |
  v(0) = 3{a}(0)² + 2{b}(0) + {c} = {c} — el coeficiente del término
  lineal es directamente la velocidad inicial.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para llegar de la posición a la aceleración, hay que derivar DOS veces (posición→velocidad→aceleración), no una sola."

explicacion: |
  Derivar una sola vez desde la posición da la velocidad, no la
  aceleración.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["aceleracion"]

variables:
  a: random(1, 5)
  b: random(1, 8)

respuesta: 2 * b
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t². ¿Cuál es la aceleración instantánea en t=0?"

explicacion: |
  a(t) = {6 * a}t + {2 * b} → a(0) = {2 * b}.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El instante donde a(t) cambia de signo marca un cambio en cómo actúa la aceleración (de frenar a acelerar en el sentido del movimiento, o viceversa), no necesariamente un cambio en la dirección del movimiento en sí (eso lo marca el signo de v)."

explicacion: |
  v y a son señales independientes — cada una responde una pregunta
  distinta sobre el movimiento.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  t: random(1, 5)
  real: 6 * a * t + 2 * b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {a}t³ + {b}t². ¿Es correcto que la aceleración en t={t} sea {propuesto}?"

explicacion: |
  El valor correcto es a({t}) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La velocidad instantánea puede dar negativa — significa que, en ese instante, el objeto se mueve en el sentido negativo elegido como referencia."

explicacion: |
  El signo de v(t) indica dirección, no un error de cálculo.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  t1: random(1, 4)
  t2: random(5, 10)

respuesta: ((2 * a * t2 + b) > (2 * a * t1 + b))
tipo: vf

enunciado: "x(t) = {a}t² + {b}t (con a positivo). ¿Es mayor la velocidad instantánea en t={t2} que en t={t1}?"

explicacion: |
  Con aceleración constante positiva, la velocidad crece con el tiempo
  — el instante posterior siempre tiene mayor velocidad.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Posición, velocidad y aceleración forman una cadena de derivadas: cada una es la derivada de la anterior respecto del tiempo."

explicacion: |
  x(t) → (derivar) → v(t) → (derivar) → a(t).
```
