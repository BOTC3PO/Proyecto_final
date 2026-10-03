# Examen jefe — [PENDIENTE #747]

> Logro #747. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

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
respuestas_validas:
  - "Voltio"
  - "Volt"

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

respuesta: escenario[0] / escenario[1]

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
  voltajes: [12, 24, 36]
  escenario: uno_de(voltajes)
  valor_carga: 3
  resultado_energia: valor_carga * escenario

respuesta: resultado_energia
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una carga de {valor_carga} C se desplaza entre dos puntos con una diferencia de potencial de {escenario} V, ¿cuánta energía eléctrica (en Joules) realiza el campo sobre la carga?"

pasos:
  - "Identificar la fórmula: Trabajo (Energía) = Carga (Q) × Diferencia de Potencial (V)"
  - "Sustituir valores: W = {valor_carga} C × {escenario} V"
  - "Calcular el producto: {valor_carga} * {escenario} = {resultado_energia} J"

explicacion: |
  La energía (W) es el producto de la carga (Q) por el potencial (V). En este caso, {valor_carga} * {escenario} = {resultado_energia} Joules.
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

respuesta: v
tipo: completar
tolerancia_abs: 0.01

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
respuestas_validas:
  - "trabajo"

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

respuesta: falso
tipo: vf
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

respuesta: escenario[0] / escenario[1]
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

respuesta_orden: ["Fuente de potencial", "Conductor", "Carga/Resistencia"]
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

respuesta: datos[escenario_idx][1]
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

respuesta_orden: ["Pila", "Interruptor", "Resistencia", "Cable"]
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

respuestas_validas:
  - "cero"
  - "0"
  - "0.0"

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
  escenario: uno_de([5.0, 9.0, 12.0])

enunciado: "Un cargador de carga rápida suministra una diferencia de potencial de {escenario} voltios a un dispositivo móvil. ¿Cuál es el valor de la tensión eléctrica suministrada (en voltios)?"

opciones_explicitas: [4.5, 5.0, 9.0, 12.0]
respuesta: escenario
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
  estado: uno_de(["hay_paso", "no_hay_paso"])

enunciado: "En un circuito de una lámpara, si el interruptor está abierto, la diferencia de potencial entre los terminales de la bombilla es de ___ voltios si no hay corriente circulando por el resto del circuito cerrado."

respuestas_validas:
  - "0"
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
  idx: uno_de([0, 1, 2])
  cantidades: [3, 2, 2]
  voltajes: [1.5, 9, 1.5]

enunciado: "Se conectan {cantidades[idx]} pilas en serie, cada una con una tensión de {voltajes[idx]}V. ¿Cuál es la tensión total del conjunto?"

opciones_explicitas: [4.5, 18, 3.0, 6.0]
respuesta: cantidades[idx] * voltajes[idx]
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
  idx: uno_de([0, 1, 2])
  trabajos: [0.004, 0.025, 0.1]
  cargas: [0.002, 0.005, 0.010]
  w: trabajos[idx]
  q: cargas[idx]

enunciado: "Si se realiza un trabajo de {w} Joules para mover una carga de {q} Coulombs entre dos puntos, la diferencia de potencial es de ___ voltios."

respuesta: w / q
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La diferencia de potencial (V) se define como el trabajo (W) realizado por unidad de carga (Q): V = W / Q.
```

```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["bateria", "voltaje"]

respuesta: verdadero
tipo: vf
enunciado: "Si la tensión del cargador es de 5V y la tensión de la batería es de 3.7V, ¿es la tensión del cargador mayor que la de la batería?"

explicacion: |
  Para que la carga fluya hacia la batería, la diferencia de potencial del cargador debe ser superior a la de la batería.
```

## Sección: entropia-segunda-ley-termodinamica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "entropia", "desorden"]

respuesta: "desorden"
tipo: completar
respuestas_validas:
  - "desorden"
  - "caos"

enunciado: "En términos macroscópicos, la entropía se asocia comúnmente con el grado de ___ de un sistema."

explicacion: |
  La entropía es una medida del desorden o la aleatoriedad de un sistema. Según la segunda ley, en un sistema aislado, la entropía tiende a aumentar con el tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["calor", "segunda_ley"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[100, 20], [50, 10]]

opciones_explicitas: ["Del cuerpo más caliente al más frío", "Del cuerpo más frío al más caliente", "No hay flujo de calor"]

respuesta: "Del cuerpo más caliente al más frío"
tipo: mc

enunciado: "Considerando un sistema con dos cuerpos a temperaturas de {datos[escenario_idx][0]}°C y {datos[escenario_idx][1]}°C, el calor fluirá espontáneamente ___."

explicacion: |
  El calor siempre fluye de forma espontánea desde el cuerpo con mayor temperatura al de menor temperatura, un proceso que incrementa la entropía total del universo.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["sistemas_aislados", "segunda_ley"]

respuesta: falso

tipo: vf

enunciado: "En un sistema aislado, la entropía total puede disminuir espontáneamente durante un proceso irreversible."

explicacion: |
  Falso. La Segunda Ley de la Termodinámica establece que en un sistema aislado, la entropía siempre aumenta o permanece constante (en procesos reversibles), pero nunca disminuye.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["entropia", "procesos"]

opciones_explicitas: ["Hielo derritiéndose", "Agua líquida congelándose", "Vapor de agua condensándose"]

respuesta_orden: ["Hielo derritiéndose", "Agua líquida congelándose", "Vapor de agua condensándose"]
tipo: ordenar

enunciado: "Ordena los siguientes procesos de mayor a menor desorden (entropía) de sus estados de agregación:"

explicacion: |
  El orden de desorden (entropía) es: Gas (Vapor) > Líquido (Agua) > Sólido (Hielo). El ejercicio pide ordenar los estados de mayor a menor desorden.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["microestados", "probabilidad"]

variables:
  escenario: uno_de([["ordenado", "baja"], ["desordenado", "alta"]])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["baja", "alta", "nula"]

enunciado: "Un estado con una configuración altamente {escenario[0]} tiene una probabilidad estadística más {escenario[1]} de ocurrir espontáneamente."

explicacion: |
  Los sistemas evolucionan hacia estados con mayor número de microestados posibles (mayor desorden), ya que estos son estadísticamente mucho más probables.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley"
  nivel: "intermedio"
  tags: ["termodinamica", "entropia", "calor"]

variables:
  Q: 5000.0
  T_caliente: 400.0
  T_frio: 300.0
  delta_S: Q / T_frio - Q / T_caliente

respuesta: delta_S
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un foco caliente a {T_caliente} K cede {Q} J de calor a un foco frío a {T_frio} K. ¿Cuál es el cambio de entropía total del universo en este proceso? (Expresar en J/K)"

pasos:
  - "Calcular la entropía perdida por el foco caliente: ΔS_caliente = -Q / T_caliente"
  - "Calcular la entropía ganada por el foco frío: ΔS_frio = +Q / T_frio"
  - "Sumar ambos valores para obtener el cambio total: ΔS_total = ΔS_frio - ΔS_caliente en magnitud, es decir Q/T_frio - Q/T_caliente"

explicacion: |
  ΔS_caliente = -5000 / 400 = -12.5 J/K (el foco caliente pierde entropía al ceder calor).
  ΔS_frio = +5000 / 300 = 16.666... J/K (el foco frío gana más entropía de la que pierde el caliente, por estar a menor temperatura).
  ΔS_total = 16.666 - 12.5 = 4.166... J/K, un valor positivo, consistente con la Segunda Ley (la entropía del universo aumenta en un proceso espontáneo de transferencia de calor).
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley"
  nivel: "basico"
  tags: ["termodinamica", "segunda_ley"]

respuesta: "de caliente a frío"
tipo: mc
opciones_explicitas: ["de frío a caliente", "de caliente a frío", "de igual temperatura", "no tiene dirección"]

enunciado: "Según la Segunda Ley de la Termodinámica, el calor fluye espontáneamente de un cuerpo ___ a otro cuerpo ___."

explicacion: |
  La entropía de un sistema aislado siempre aumenta en un proceso espontáneo. El flujo de calor de un cuerpo caliente a uno frío aumenta la entropía total del universo.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley"
  nivel: "basico"
  tags: ["conceptos", "entropia"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema aislado, la entropía tiende a aumentar con el tiempo en todos los procesos espontáneos."

explicacion: |
  Correcto. Este es el enunciado fundamental de la Segunda Ley de la Termodinámica.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley"
  nivel: "intermedio"
  tags: ["calculo", "termodinamica"]

variables:
  Q: 1200.0
  T: 300.0
  dS: Q / T

respuesta: 4.0
tipo: completar
respuestas_validas:
  - 4.0

enunciado: "Si un sistema recibe ___ J de calor a una temperatura constante de ___ K, el cambio de entropía es de ___ J/K."

explicacion: |
  Usando la fórmula ΔS = Q / T:
  ΔS = 1200 / 300 = 4.0 J/K.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley"
  nivel: "intermedio"
  tags: ["metodologia", "termodinamica"]

opciones_explicitas: ["Calcular ΔS del sistema", "Calcular ΔS del entorno", "Sumar ΔS_sis + ΔS_ent", "Verificar si ΔS_total > 0"]

respuesta_orden: ["Calcular ΔS del sistema", "Calcular ΔS del entorno", "Sumar ΔS_sis + ΔS_ent", "Verificar si ΔS_total > 0"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar si un proceso termodinámico es espontáneo analizando la entropía del universo:"

explicacion: |
  Para determinar la espontaneidad, primero calculamos los cambios individuales de entropía y luego su suma. Si la suma es mayor a cero, el proceso es espontáneo.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "calor", "entropia"]

tipo: completar
enunciado: "En un sistema aislado, según la segunda ley de la termodinamica, el flujo espontáneo de calor ocurre siempre desde un cuerpo con mayor ___ hacia uno con menor ___."
respuesta: "temperatura"
explicacion: |
  La segunda ley de la termodinámica establece que el calor fluye espontáneamente de los cuerpos con mayor temperatura a los de menor temperatura, aumentando la entropía total del universo.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["entropia", "desorden", "probabilidad"]

tipo: vf
respuesta: falso

enunciado: "La entropía se puede definir estrictamente como una medida del 'desorden' visual de las partículas en un sistema."

explicacion: |
  Aunque coloquialmente se usa la palabra 'desorden', la entropía es una medida de la cantidad de estados microscópicos (microestados) compatibles con un estado macroscópico dado. El término 'desorden' es una analogía útil pero físicamente imprecisa.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["entropia", "sistemas_abiertos", "orden"]

tipo: completar
respuestas_validas:
  - "aumenta"
respuesta: "aumenta"

enunciado: "Si un sistema abierto (como un ser vivo) crea orden interno reduciendo su entropía local, la entropía total del universo ___ debido a la energía disipada en forma de calor."

explicacion: |
  Para que un sistema local disminuya su entropía (cree orden), debe realizar un trabajo o intercambiar energía con el entorno, lo que inevitablemente genera más entropía en el entorno de la que se reduce en el sistema.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["ciclos", "entropia", "termodinamica"]

tipo: mc
opciones_explicitas: ["La entropía total del universo siempre disminuye en un ciclo ideal.", "La entropía total del universo aumenta en un ciclo real debido a la irreversibilidad.", "La entropía de un sistema cerrado se mantiene constante en cualquier proceso.", "La entropía de un sistema aumenta si el proceso es reversible."]
enunciado: "En un motor real (irreversible), la variación de la entropía total del universo es siempre:"
respuesta: "La entropía total del universo aumenta en un ciclo real debido a la irreversibilidad."
explicacion: |
  Debido a la irreversibilidad (fricción, turbulencias, transferencias de calor finitas), la entropía total del universo siempre aumenta en procesos reales.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["entropia", "procesos", "termodinamica"]

tipo: ordenar
opciones_explicitas: ["Un gas se expande espontáneamente ocupando todo el recipiente.", "Un gas se comprime espontáneamente ocupando solo una esquina del recipiente."]

respuesta_orden: ["Un gas se expande espontáneamente ocupando todo el recipiente.", "Un gas se comprime espontáneamente ocupando solo una esquina del recipiente."]

enunciado: "Ordena los siguientes eventos según la probabilidad estadística y la tendencia natural hacia el aumento de la entropía (de lo más probable/natural a lo menos probable/natural):"

explicacion: |
  La termodinámica se basa en la probabilidad: es extremadamente probable que las partículas ocupen todo el volumen disponible (mayor número de microestados) y extremadamente improbable que se concentren en un solo punto sin intervención externa.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "entropia"]

respuesta: "aumentar"
tipo: completar
respuestas_validas:
  - "aumentar"
  - "crecer"

enunciado: "En un sistema aislado, la entropía total siempre tiende a ___ o permanecer constante según la segunda ley de la termodinamica."

explicacion: |
  La segunda ley de la termodinámica establece que en un sistema aislado, la entropía (el desorden) siempre aumenta en procesos espontáneos, lo que significa que el universo tiende hacia un estado de mayor probabilidad y desorden.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["calor", "entropia"]

variables:
  caso: uno_de([0, 1])
  caso_datos: ["un cuerpo a 80°C en contacto con uno a 20°C", "un cuerpo a 15°C en contacto con uno a 90°C"]

respuesta: "El calor fluye de un cuerpo caliente a uno frío"
tipo: mc

opciones_explicitas: ["El calor fluye de un cuerpo frío a uno caliente", "El calor fluye de un cuerpo caliente a uno frío", "El calor fluye en ambas direcciones con igual probabilidad", "No hay flujo de calor entre cuerpos en equilibrio"]

enunciado: "Considerando el caso de {caso_datos[caso]}, ¿cuál es la dirección espontánea del flujo de calor según la segunda ley?"

pasos:
  - "Identificar la temperatura de ambos cuerpos."
  - "Aplicar la segunda ley de la termodinámica sobre la dirección del flujo térmico."

explicacion: |
  El calor fluye espontáneamente de un cuerpo con mayor temperatura a uno de menor temperatura para aumentar la entropía total del sistema.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["energia", "entropia"]

respuesta: "desorden"
tipo: completar
respuestas_validas:
  - "desorden"
  - "caos"

enunciado: "Mientras que la energía se conserva según la primera ley, la entropía mide el grado de ___ de un sistema."

explicacion: |
  La energía no se crea ni se destruye (Primera Ley), pero la entropía cuantifica la parte de la energía que ya no es disponible para realizar trabajo útil debido al desorden generado.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["irreversibilidad", "procesos"]

respuesta: verdadero
tipo: vf

enunciado: "Un proceso natural (espontáneo) es siempre irreversible porque implica un aumento neto de la entropía del universo."

explicacion: |
  Los procesos irreversibles son aquellos que ocurren de forma espontánea y aumentan la entropía total, marcando la "flecha del tiempo" en la termodinámica.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["orden", "desorden"]

respuesta_orden: ["Cristal puro", "Líquido", "Gas", "Plasma"]
tipo: ordenar

opciones_explicitas: ["Gas", "Cristal puro", "Plasma", "Líquido"]

enunciado: "Ordena los estados de la materia de MENOR a MAYOR entropía (menor desorden a mayor desorden):"

explicacion: |
  En un cristal (sólido perfecto), las partículas están altamente ordenadas (baja entropía). A medida que pasamos a líquido, gas y finalmente plasma, el movimiento y la libertad de las partículas aumentan, incrementando el desorden y la entropía.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["calor", "entropia", "termodinamica"]

variables:
  datos: [["una taza de café caliente en una habitación fría", "aumenta"], ["un cubo de hielo en un vaso de agua tibia", "aumenta"]]
  idx: uno_de([0, 1])

enunciado: "Si dejamos reposar {datos[idx][0]}, la entropía total del sistema y su entorno tiende a {datos[idx][1]}."

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["calor", "segunda_ley"]

enunciado: "De acuerdo con la segunda ley de la termodinámica, en un proceso espontáneo, el calor fluye de forma natural desde un cuerpo de mayor temperatura hacia uno de menor temperatura. ¿Es esto cierto?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["orden", "desorden", "entropia"]

variables:
  datos: [["gas", "alta"], ["sólido", "baja"], ["líquido", "media"]]
  idx: uno_de([0, 1, 2])

enunciado: "Considerando la estructura molecular, un estado de la materia en forma de {datos[idx][0]} presenta una entropía de magnitud {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "alta"
  - "baja"
  - "media"
explicacion: |
  La entropía es una medida del desorden en un sistema. En el estado sólido, las partículas tienen poca libertad de movimiento, lo que corresponde a una baja entropía. En el líquido, hay más desorden que en el sólido pero menos que en el gas. Por último, en el estado gaseoso, las partículas están completamente desordenadas, lo que implica una alta entropía.
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["maquinas_termicas", "eficiencia"]

enunciado: "Para que una máquina térmica funcione de forma cíclica, debe transferir parte del calor de la fuente caliente a la fuente fría. Ordena los pasos de un ciclo de Carnot ideal:"

opciones_explicitas: ["Expansión isotérmica", "Expansión adiabática", "Compresión isotérmica", "Compresión adiabática"]
respuesta_orden: ["Expansión isotérmica", "Expansión adiabática", "Compresión isotérmica", "Compresión adiabática"]
tipo: ordenar
```

```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["cosmologia", "entropia"]

enunciado: "Si la entropía de un sistema aislado siempre aumenta o permanece constante, ¿qué sucede con la entropía del universo según la segunda ley?"

opciones_explicitas: ["disminuye", "se mantiene constante", "aumenta"]
respuesta: "aumenta"
tipo: mc
```

## Sección: resistencia-electrica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: "oposicion"
tipo: completar
respuestas_validas:
  - "oposicion"
  - "oposición"

enunciado: "La resistencia eléctrica se define como la ___ al flujo de carga eléctrica a través de un conductor."

explicacion: |
  La resistencia es la propiedad de un material que se opone al paso de la corriente eléctrica.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["unidades"]

respuesta: "ohm"
tipo: mc
opciones_explicitas: ["voltio", "ohm", "amperio", "vatio"]

enunciado: "¿Cuál es la unidad de medida de la resistencia eléctrica en el Sistema Internacional?"

explicacion: |
  La unidad de medida de la resistencia es el ohm (Ω).
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["simbolos"]

respuesta: "Ω"
tipo: mc
opciones_explicitas: ["Ω", "V", "A", "W"]

enunciado: "¿Qué símbolo se utiliza para representar el ohm?"

explicacion: |
  El símbolo del ohm es la letra griega omega mayúscula (Ω).
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["materiales"]

respuesta: "conductor"
tipo: mc
opciones_explicitas: ["aislante", "conductor", "dieléctrico", "semiconductor"]

enunciado: "Un material que presenta una resistencia muy baja al paso de la corriente se denomina material ___."

explicacion: |
  Los conductores (como el cobre) tienen baja resistencia, mientras que los aislantes tienen una resistencia muy alta.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf
enunciado: "Si la resistencia de un circuito aumenta (manteniendo el voltaje constante), la intensidad de la corriente disminuirá."

explicacion: |
  Según la Ley de Ohm, la corriente es inversamente proporcional a la resistencia.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["formula", "geometria"]

respuesta: "el doble"
tipo: mc
opciones_explicitas: ["el doble", "el triple", "la mitad", "la cuarta parte"]

enunciado: "Si la longitud de un conductor se duplica, su resistencia será ___."

explicacion: |
  La resistencia es directamente proporcional a la longitud (R ∝ L).
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["formula", "geometria"]

respuesta: "el doble"
tipo: mc
opciones_explicitas: ["la mitad", "la cuarta parte", "el doble", "el cuádruple"]

enunciado: "Si el área de la sección transversal de un cable se reduce a la mitad, su resistencia será ___."

explicacion: |
  La resistencia es inversamente proporcional al área de la sección (R ∝ 1/A). Si el área se reduce a la mitad, la resistencia se duplica.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["calculo"]

respuesta: 4.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un conductor tiene un voltaje de 20V y una corriente de 5A. ¿Cuál es su resistencia en ohms?"

pasos:
  - "Identificar voltaje (V) e intensidad (I)."
  - "Aplicar la fórmula R = V / I."

explicacion: |
  R = 20V / 5A = 4 Ω.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["propiedades"]

respuesta: "material"
tipo: completar
respuestas_validas:
  - "material"
  - "naturaleza"

enunciado: "La resistividad es una propiedad intrínseca que depende del ___ del conductor."

explicacion: |
  La resistividad ($\rho$) depende de la naturaleza del material (cobre, plata, etc.) y de la temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["temperatura"]

respuesta: verdadero
tipo: vf
enunciado: "En la mayoría de los metales, la resistencia eléctrica aumenta cuando aumenta la temperatura."

explicacion: |
  El aumento de temperatura incrementa la agitación térmica de los átomos, dificultando el paso de electrones.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["error_comun"]

respuesta: verdadero
tipo: vf
enunciado: "Si el radio de un cable se duplica, su resistencia se reduce a la cuarta parte."

explicacion: |
  Como el área depende del cuadrado del radio ($A = \pi \cdot r^2$), duplicar el radio cuadruplica el área, reduciendo la resistencia a 1/4.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "menor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual", "nula"]

enunciado: "Un cable de cobre tiene una resistencia ___ que un cable de hierro de la misma longitud y sección."

explicacion: |
  El cobre tiene una resistividad menor que el hierro, por lo tanto, ofrece menos resistencia.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["grafico"]

respuesta: "lineal"
tipo: mc
opciones_explicitas: ["lineal", "inversa", "cuadrática", "exponencial"]

enunciado: "Si graficamos la resistencia (R) frente a la longitud (L) de un cable uniforme, la relación es ___."

explicacion: |
  La relación es directamente proporcional ($R = \rho \cdot L / A$), lo que resulta en una línea recta que pasa por el origen.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["unidades"]

respuesta: falso
tipo: vf
enunciado: "La unidad de la resistencia eléctrica es el Amperio."

explicacion: |
  El Amperio es la unidad de la intensidad de corriente eléctrica.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["geometria"]

respuesta: "inversa"
tipo: mc
opciones_explicitas: ["directa", "inversa", "nula", "logarítmica"]

enunciado: "La relación entre la resistencia y el área de la sección transversal es ___."

explicacion: |
  A mayor área, menor resistencia. Es una relación inversamente proporcional.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["ordenar"]

opciones_explicitas: ["Mayor longitud", "Menor sección", "Mayor resistividad"]
respuesta_orden: ["Mayor longitud", "Menor sección", "Mayor resistividad"]
tipo: ordenar

enunciado: "Ordena estas condiciones de mayor a menor resistencia eléctrica:"

explicacion: |
  Para maximizar la resistencia: aumentar longitud, disminuir sección y aumentar resistividad.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: 50
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un cable tiene una resistencia de 100 $\\Omega$. Si se corta a la mitad de su longitud, su nueva resistencia será ___ $\\Omega$."

explicacion: |
  Al reducir la longitud a la mitad, la resistencia también se reduce a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf
enunciado: "La resistencia eléctrica es una propiedad que depende de la forma del objeto."

explicacion: |
  Sí, la resistencia depende de la geometría (longitud y sección).
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["geometria"]

respuesta: verdadero
tipo: vf
enunciado: "Un cable más grueso (mayor sección) presenta menos resistencia que uno más delgado."

explicacion: |
  A mayor sección transversal, hay más espacio para que fluyan los electrones, disminuyendo la resistencia.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["resumen"]

respuesta: verdadero
tipo: vf
enunciado: "La resistencia eléctrica depende de la longitud, el área de sección y la resistividad del material."

explicacion: |
  Estas son las tres variables que componen la fórmula $R = \rho \cdot L / A$.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["calculo"]

respuesta: 1.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un cable de 2m de longitud y 1 $m^2$ de sección tiene una resistividad de 0.5 $\\Omega \\cdot m$, su resistencia es ___ $\\Omega$."

pasos:
  - "Identificar $\\rho = 0.5$, $L = 2$, $A = 1$."
  - "Calcular $R = 0.5 \\cdot 2 / 1$."

explicacion: |
  R = 0.5 * 2 / 1 = 1.0 $\Omega$.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "basico"
  tags: ["ley_ohm"]

respuesta: "voltaje"
tipo: completar
respuestas_validas:
  - "voltaje"
  - "tensión"

enunciado: "Si la corriente es constante, la resistencia es proporcional al ___."

explicacion: |
  De la Ley de Ohm ($V = I \cdot R$), si $I$ es constante, $R$ es proporcional a $V$.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Un cable de 10m tiene una resistencia ___ que un cable del mismo material y sección de 5m."

explicacion: |
  A mayor longitud, mayor resistencia.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "avanzado"
  tags: ["conceptos"]

respuesta: falso
tipo: vf
enunciado: "Si aumentamos el área de la sección transversal, la densidad de corriente aumenta si el voltaje es constante."

explicacion: |
  Falso. Al aumentar el área (A), la resistencia baja (R = ρL/A) y la corriente sube proporcionalmente (I = V/R ∝ A), por lo que la densidad de corriente J = I/A se mantiene CONSTANTE, no aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "resistencia_electrica"
  nivel: "intermedio"
  tags: ["aplicacion"]

respuesta: verdadero
tipo: vf
enunciado: "Para reducir la resistencia de un cable sin cambiar el material, se puede aumentar su sección transversal."

explicacion: |
  Correcto, al aumentar el área $A$ en el denominador de $R = \rho \cdot L / A$, la resistencia disminuye.
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
respuesta_orden: ["Descomponer v₀ en v₀ₓ (coseno) y v₀ᵥ (seno)", "Resolver el eje vertical con las fórmulas de MRUV (tiempo de subida, altura máxima o tiempo de vuelo)", "Combinar el tiempo obtenido con v₀ₓ para calcular el alcance horizontal"]
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

## Sección: ley-de-ohm (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["conceptos", "corriente"]

respuesta: "intensidad_de_corriente"
tipo: completar

enunciado: "La magnitud física que mide la cantidad de carga eléctrica que fluye por unidad de tiempo a través de una sección de un conductor se denomina ___."

respuestas_validas:
  - "intensidad_de_corriente"
  - "corriente_electrica"

explicacion: |
  La intensidad de corriente eléctrica ($I$) se define como el flujo de carga eléctrica por unidad de tiempo ($I = dQ/dt$).
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["proporcionalidad", "teoria"]

opciones_explicitas: ["Directamente proporcional", "Inversamente proporcional", "No tiene relación"]
respuesta: "Directamente proporcional"
tipo: mc

enunciado: "Según la Ley de Ohm, manteniendo la resistencia constante, la diferencia de potencial (voltaje) es ___ a la intensidad de la corriente."

explicacion: |
  La Ley de Ohm establece que $V = I \cdot R$. Si $R$ es constante, si aumentamos $V$, aumenta $I$ en la misma proporción.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["unidades", "ohm"]

variables:
  idx: uno_de([0, 1])
  datos: [["Voltaje", "Voltios"], ["Resistencia", "Ohmios"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Voltios", "Amperios", "Ohmios", "Watts"]

enunciado: "La unidad de medida en el Sistema Internacional para la {datos[idx][0]} es ___."

explicacion: |
  La unidad de la {datos[idx][0]} es el {datos[idx][1]}.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso
tipo: vf

enunciado: "Si la resistencia de un circuito aumenta y el voltaje se mantiene constante, la intensidad de la corriente también aumentará."

explicacion: |
  Falso. De la fórmula $I = V/R$, se observa que la corriente es inversamente proporcional a la resistencia. Si $R$ sube, $I$ baja.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "despeje"]

respuesta: "R = V / I"
tipo: mc
opciones_explicitas: ["I = V / R", "R = V / I", "V = I / R", "R = I / V"]

enunciado: "Para hallar la resistencia ($R$) en un circuito donde conocemos el voltaje ($V$) y la intensidad ($I$), la expresión correcta es ___."

explicacion: |
  Partiendo de $V = I \cdot R$, despejamos $R$ pasando la $I$ dividiendo al otro lado: $R = V / I$.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "V = I * R"
tipo: completar
respuestas_validas:
  - "V = I * R"
  - "V = R * I"

enunciado: "La Ley de Ohm establece que la diferencia de potencial (V) es igual al producto de la intensidad de corriente (I) por la resistencia (R). La expresión matemática es: ___"

explicacion: |
  La Ley de Ohm indica que la tensión es directamente proporcional a la corriente para una resistencia constante.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["calculo"]

variables:
  escenario: uno_de([[2, 5, 10], [6, 5, 30], [5, 10, 50]])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: [10, 30, 50, 60]

enunciado: "Si una resistencia de {escenario[1]} Ω es atravesada por una corriente de {escenario[0]} A, ¿cuál es la diferencia de potencial aplicada (en voltios)?"

pasos:
  - "Identificar los datos: I = {escenario[0]} A, R = {escenario[1]} Ω"
  - "Aplicar la fórmula: V = I * R"
  - "Calcular: V = {escenario[0]} * {escenario[1]} = {escenario[2]} V"

explicacion: |
  Usando la fórmula V = I * R, multiplicamos la corriente por la resistencia para obtener la tensión.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  escenario: uno_de([[12, 4], [220, 110], [10, 5]])

respuesta: escenario[0] / escenario[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una bombilla está conectada a una fuente de {escenario[0]} V y tiene una resistencia interna de {escenario[1]} Ω. ¿Cuál es la intensidad de la corriente que circula por ella (en Amperes)?"

pasos:
  - "Despejar la fórmula de Ohm para la corriente: I = V / R"
  - "Sustituir valores: I = {escenario[0]} / {escenario[1]}"
  - "Resultado: I = {escenario[0] / escenario[1]} A"

explicacion: |
  Para hallar la corriente cuando conocemos la tensión y la resistencia, despejamos la fórmula original obteniendo I = V / R.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si mantenemos la tensión (V) constante y aumentamos la resistencia (R), la intensidad de la corriente (I) debe disminuir."

explicacion: |
  Es verdadero. Según la Ley de Ohm, la corriente es inversamente proporcional a la resistencia cuando la tensión es constante.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  escenario: uno_de([[10, 2, 5], [24, 3, 8], [100, 10, 10]])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: [5, 8, 10, 20]

enunciado: "Un dispositivo electrónico consume una corriente de {escenario[1]} A cuando se conecta a una batería de {escenario[0]} V. ¿Cuál es el valor de su resistencia (en ohmios)?"

pasos:
  - "Identificar datos: V = {escenario[0]} V, I = {escenario[1]} A"
  - "Despejar R de la fórmula V = I * R: R = V / I"
  - "Calcular: R = {escenario[0]} / {escenario[1]} = {escenario[2]} Ω"

explicacion: |
  Para encontrar la resistencia, dividimos la tensión aplicada entre la intensidad de la corriente que circula por el circuito.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["ley_de_ohm", "relaciones_proporcionales"]

respuesta: "reducirse a la mitad"
tipo: completar
respuestas_validas:
  - "reducirse a la mitad"
  - "disminuir a la mitad"
  - "la mitad"

enunciado: "Si mantenemos el voltaje constante y duplicamos la resistencia, la intensidad de corriente debe ___ para mantener la igualdad de la Ley de Ohm."

pasos:
  - "Identificar que el voltaje es constante."
  - "Aplicar la relación $I = V / R$."
  - "Observar que al aumentar el denominador (R), el resultado (I) disminuye."

explicacion: |
  La Ley de Ohm establece que $V = I \cdot R$. Si el voltaje ($V$) no cambia, la corriente ($I$) y la resistencia ($R$) son inversamente proporcionales. Si la resistencia se duplica, la corriente se reduce a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["unidades", "error_comun"]

respuesta: "mA"
tipo: mc
opciones_explicitas: ["A", "mA", "kΩ", "V"]

enunciado: "Un error común es no convertir las unidades antes de operar. Si tienes un voltaje de 5 V y una resistencia de 1 kΩ, el resultado de I = V / R es 0.005 A. ¿En qué unidad se expresa este valor si queremos evitar el uso de decimales muy pequeños?"

explicacion: |
  Para evitar errores de escala, es común trabajar con múltiplos. 0.005 A es equivalente a 5 mA (miliamperios).
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["proporcionalidad_directa"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito con una resistencia fija, si aumentamos el voltaje aplicado, la intensidad de corriente que circula por el conductor también aumentará proporcionalmente."

explicacion: |
  Verdadero. Según $I = V / R$, si $R$ es constante, $I$ es directamente proporcional a $V$.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "resistencia"]

variables:
  idx: uno_de([0, 1])
  escenario: [[24.0, 12.0, 2.0], [40.0, 8.0, 5.0]]

respuesta: escenario[idx][2]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito tiene un voltaje de {escenario[idx][0]} V y una corriente de {escenario[idx][1]} A. ¿Cuál es el valor de su resistencia (en $\\Omega$)?"

pasos:
  - "Usar la fórmula despejada: $R = V / I$."
  - "Sustituir los valores: $R = {escenario[idx][0]} / {escenario[idx][1]}$."

explicacion: |
  Utilizando $R = V / I$, dividimos el voltaje por la corriente para hallar la resistencia: $R = {escenario[idx][0]} / {escenario[idx][1]} = {escenario[idx][2]}$ Ω.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["despeje", "formula"]

respuesta_orden: ["V = I * R", "I = V / R", "R = V / I"]
tipo: ordenar

opciones_explicitas: ["V = I * R", "I = V / R", "R = V / I"]

enunciado: "Ordena las fórmulas de la Ley de Ohm empezando por la fórmula original (definición de voltaje) y luego sus dos despejes para corriente y resistencia respectivamente."

explicacion: |
  Las tres formas de la Ley de Ohm son equivalentes, pero el orden correcto de despeje estándar es la definición, luego el despeje de la variable del denominador y finalmente el de la variable del numerador.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["ohm", "voltaje", "corriente"]

tipo: mc
opciones_explicitas: ["Proporcional", "Inversamente proporcional", "No tiene relación", "Exponencial"]

enunciado: "Según la Ley de Ohm, si la resistencia de un circuito se mantiene constante y se aumenta el voltaje, la intensidad de la corriente será ___ a la del voltaje."

respuesta: "Proporcional"

explicacion: |
  La Ley de Ohm establece que $V = I \cdot R$. Si $R$ es constante, $V$ y $I$ son directamente proporcionales.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["resistencia", "ohm", "voltaje"]

tipo: vf

enunciado: "Si mantenemos un voltaje constante en un circuito, un aumento en la resistencia provocará un aumento en la intensidad de la corriente."

respuesta: falso

explicacion: |
  Falso. De la Ley de Ohm $I = V / R$, se observa que la corriente es inversamente proporcional a la resistencia cuando el voltaje es constante.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "ohm", "resistencia"]

variables:
  escenario: uno_de([[2, 10], [5, 20], [12, 4]])

tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito tiene una diferencia de potencial de {escenario[0]} V y una corriente que circula por él es de {escenario[1]} A. ¿Cuál es el valor de la resistencia en Ohmios ($\\Omega$)?"

respuesta: escenario[0] / escenario[1]

explicacion: |
  Usando la fórmula $R = V / I$:
  Para el caso sorteado: $R = {escenario[0]} / {escenario[1]} = {escenario[0]/escenario[1]} \Omega$.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["conceptos", "voltaje", "corriente"]

tipo: completar

enunciado: "Mientras que el voltaje se mide en ___ y representa la diferencia de potencial, la intensidad de corriente se mide en ___ y representa el flujo de carga."

respuestas_validas:
  - "Voltios"
  - "Amperios"

respuesta: ["Voltios", "Amperios"]

explicacion: |
  El voltaje (V) es la fuerza que impulsa las cargas, e intensidad (I) es la cantidad de carga que circula por unidad de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["formula", "orden"]

tipo: completar

enunciado: "Para despejar la intensidad de corriente (I) de la Ley de Ohm ($V = I \\cdot R$), la operación matemática correcta es dividir el voltaje por la ___."

respuestas_validas:
  - "resistencia"

respuesta: "resistencia"

explicacion: |
  Despejando la fórmula original $V = I \cdot R$, pasamos la $R$ dividiendo al otro lado: $I = V / R$.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["voltaje", "corriente", "resistencia"]

variables:
  escenario: uno_de([[120.0, "2.0", "60.0"], [220.0, "5.0", "44.0"], [12.0, "0.5", "24.0"]])
  v: escenario[0]
  i: escenario[1]
  r: escenario[2]

respuesta: r
tipo: completar
respuestas_validas:
  - "60.0"
  - "44.0"
  - "24.0"

enunciado: "Un dispositivo eléctrico se conecta a una fuente de tensión de {v} V y por él circula una corriente de {i} A. ¿Cuál es el valor de la resistencia del dispositivo?"

explicacion: |
  Aplicando la Ley de Ohm: R = V / I.
  En este caso: {v} / {i} = {r} Ω.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["corriente", "voltaje", "resistencia"]

variables:
  escenario: uno_de([[9.0, "0.2", "45.0"], [12.0, "0.5", "24.0"], [3.0, "1.0", "3.0"]])
  v: escenario[0]
  r: escenario[1]
  i: escenario[2]

respuesta: i
tipo: mc
opciones_explicitas: ["45.0", "24.0", "3.0"]

enunciado: "Una linterna funciona con una batería de {v} V y tiene una resistencia interna de {r} Ω. ¿Qué intensidad de corriente circula por el circuito?"

explicacion: |
  Usamos la fórmula I = V / R.
  I = {v} / {r} = {i} A.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([[10.0, 2.0, 5.0], [20.0, 4.0, 5.0], [50.0, 10.0, 5.0]])
  v: escenario[0]
  i: escenario[1]
  r: escenario[2]

respuesta: verdadero
tipo: vf

enunciado: "Si mantenemos una resistencia constante de {r} Ω, al duplicar el voltaje de {v} V a {v*2} V, la corriente debe duplicarse de {i} A a {i*2} A. ¿Es esto correcto?"

explicacion: |
  Verdadero. Según la Ley de Ohm (V = I·R), el voltaje y la corriente son directamente proporcionales cuando la resistencia es constante.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["voltaje", "corriente", "resistencia"]

variables:
  escenario: uno_de([[5.0, "0.1", "0.5"], [10.0, "2.0", "20.0"], [12.0, "0.5", "6.0"]])
  r: escenario[0]
  i: escenario[1]
  v: escenario[2]

respuesta: v
tipo: completar
respuestas_validas:
  - "0.5"
  - "20.0"
  - "6.0"

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω y es atravesado por una corriente de {i} A. ¿Qué voltaje se aplica a dicho componente?"

explicacion: |
  La fórmula es V = I · R.
  V = {i} * {r} = {v} V.
```

```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

respuesta_orden: ["Identificar datos", "Seleccionar fórmula", "Realizar cálculo"]
tipo: ordenar
opciones_explicitas: ["Identificar datos", "Seleccionar fórmula", "Realizar cálculo"]

enunciado: "Ordena los pasos lógicos para resolver un problema de Ley de Ohm donde conoces la resistencia y la corriente para hallar el voltaje:"

explicacion: |
  Para resolver problemas físicos de forma sistemática se debe:
  1. Identificar los datos conocidos.
  2. Seleccionar la fórmula adecuada (V=I·R, I=V/R o R=V/I).
  3. Realizar el cálculo matemático.
```

