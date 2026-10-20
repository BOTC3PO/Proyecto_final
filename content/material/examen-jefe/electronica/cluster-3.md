# Examen jefe — Maestro de la Lógica Digital y los Microcontroladores

> Logro #944. Completaste el parcial dominando los instrumentos de medición: multímetro y osciloscopio, la lógica combinacional con sumadores y multiplexores, la lógica secuencial con flip-flops y contadores y las entradas y salidas digitales del microcontrolador y la comunicación serie UART, I2C y SPI. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **116 preguntas totales** en 5/5 secciones.

---

## Sección: instrumentos-de-medicion-multimetro-y-osciloscopio (23 preguntas)

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro"]

enunciado: "La tensión entre dos puntos se mide conectando el instrumento..."
tipo: mc
opciones_explicitas:
  - "En paralelo"
  - "En serie"
  - "Con el circuito abierto"
respuesta: "En paralelo"

explicacion: |
  Se compara el potencial entre dos puntos.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro"]

enunciado: "La corriente de una rama se mide conectando el instrumento..."
tipo: mc
opciones_explicitas:
  - "En serie"
  - "En paralelo"
  - "Sin conectarlo"
respuesta: "En serie"

explicacion: |
  La corriente debe atravesarlo.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro"]

enunciado: "Para medir una resistencia se debe..."
tipo: mc
opciones_explicitas:
  - "Desconectar la alimentación"
  - "Dejar el circuito energizado"
  - "Conectar el instrumento en serie con la fuente"
respuesta: "Desconectar la alimentación"

explicacion: |
  Otros elementos y la fuente falsean la lectura.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro"]

enunciado: "La punta negra de un multímetro se conecta, normalmente, al borne..."
tipo: mc
opciones_explicitas:
  - "COM"
  - "De corriente"
  - "De continuidad solamente"
respuesta: "COM"

explicacion: |
  COM es el borne común.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["multimetro", "errores"]

enunciado: "Dejar las puntas en la posición de corriente al medir tensión puede..."
tipo: mc
opciones_explicitas:
  - "Provocar un cortocircuito y dañar el instrumento o el circuito"
  - "No tener ningún efecto"
  - "Mejorar la medición"
respuesta: "Provocar un cortocircuito y dañar el instrumento o el circuito"

explicacion: |
  La posición de corriente casi cortocircuita.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro", "errores"]

respuesta: falso
tipo: vf

enunciado: "Se puede medir resistencia con el circuito energizado."

explicacion: |
  Hay que desconectar la alimentación.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["multimetro", "errores"]

respuesta: falso
tipo: vf

enunciado: "Medir corriente conectando el instrumento en paralelo con una fuente es seguro."

explicacion: |
  Es casi un cortocircuito.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro"]

enunciado: "La función de continuidad suena cuando..."
tipo: mc
opciones_explicitas:
  - "Hay un camino conductor entre las puntas"
  - "Hay tensión alterna"
  - "La batería está cargada"
respuesta: "Hay un camino conductor entre las puntas"

explicacion: |
  Sirve para revisar cables y fusibles.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["multimetro"]

enunciado: "Si no se conoce el valor aproximado de lo que se mide, conviene empezar con..."
tipo: mc
opciones_explicitas:
  - "El rango más alto"
  - "El rango más bajo"
  - "Cualquier rango"
respuesta: "El rango más alto"

explicacion: |
  Y bajar de a poco.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["incertidumbre"]

enunciado: "Un resultado de medición se escribe..."
tipo: mc
opciones_explicitas:
  - "Con su incertidumbre"
  - "Sin decimales"
  - "Solo con el nombre del instrumento"
respuesta: "Con su incertidumbre"

explicacion: |
  Ninguna medición es exacta.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["incertidumbre"]

respuesta: verdadero
tipo: vf

enunciado: "Repetir una medición ayuda a detectar errores groseros."

explicacion: |
  Los valores muy distintos delatan un error.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["osciloscopio"]

enunciado: "En la pantalla de un osciloscopio, el eje horizontal representa..."
tipo: mc
opciones_explicitas:
  - "El tiempo"
  - "La tensión"
  - "La corriente"
respuesta: "El tiempo"

explicacion: |
  El vertical es la tensión.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["osciloscopio"]

enunciado: "La escala vertical se indica en..."
tipo: mc
opciones_explicitas:
  - "Voltios por división"
  - "Segundos por división"
  - "Hertz por división"
respuesta: "Voltios por división"

explicacion: |
  La base de tiempo está en s/div.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["osciloscopio", "calculo"]

variables:
  div: uno_de([2, 3, 4, 5])
  esc: uno_de([1, 2, 5, 10])
  t: div * esc

respuesta: t
tipo: input
tolerancia_abs: 0.1

enunciado: "En un osciloscopio, un ciclo completo ocupa {div} divisiones horizontales y la base de tiempo es de {esc} ms por división. ¿Cuál es el período, en ms?"

pasos:
  - "T = divisiones × escala"

explicacion: |
  Se multiplica el ancho del ciclo por la escala.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["osciloscopio", "calculo"]

variables:
  div: uno_de([2, 4, 5])
  esc: uno_de([1, 2, 5])
  t: div * esc
  f: redondear(1000 / t, 1)

respuesta: f
tipo: input
tolerancia_abs: 0.1

enunciado: "Un ciclo ocupa {div} divisiones y la base de tiempo es de {esc} ms por división. ¿Cuál es la frecuencia, en Hz?"

pasos:
  - "T = divisiones × escala, en ms"
  - "f = 1 / T"

explicacion: |
  La frecuencia es la inversa del período.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["osciloscopio", "calculo"]

variables:
  div: uno_de([2, 3, 4, 6])
  esc: uno_de([0.5, 1, 2, 5])
  vpp: div * esc

respuesta: vpp
tipo: input
tolerancia_abs: 0.1

enunciado: "Una señal ocupa {div} divisiones verticales de pico a pico y la escala vertical es {esc} V por división. ¿Cuánto vale Vpp, en V?"

pasos:
  - "Vpp = divisiones × escala"

explicacion: |
  Se cuentan las divisiones entre el valor máximo y el mínimo.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["osciloscopio", "calculo"]

variables:
  vpp: uno_de([2, 4, 6, 10, 20])
  vp: vpp / 2

respuesta: vp
tipo: input
tolerancia_abs: 0.05

enunciado: "Una señal senoidal tiene Vpp = {vpp} V. ¿Cuánto vale su tensión de pico, en V?"

pasos:
  - "Vp = Vpp / 2"

explicacion: |
  El pico es la mitad de la tensión pico a pico.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "avanzado"
  tags: ["osciloscopio", "calculo"]

variables:
  vp: uno_de([5, 10, 12, 20, 50])
  vrms: redondear(vp / sqrt(2), 2)

respuesta: vrms
tipo: input
tolerancia_abs: 0.03

enunciado: "Una señal senoidal tiene una tensión de pico de {vp} V. ¿Cuánto vale su valor eficaz (Vrms), en V? (redondeá a dos decimales)"

pasos:
  - "Vrms = Vp / √2"

explicacion: |
  El valor eficaz de una senoide es el pico dividido √2.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["osciloscopio", "calculo"]

variables:
  t: uno_de([2, 4, 5, 10, 20])
  f: redondear(1000 / t, 1)

respuesta: f
tipo: input
tolerancia_abs: 0.1

enunciado: "Una señal tiene un período de {t} ms. ¿Cuál es su frecuencia, en Hz?"

pasos:
  - "f = 1 / T"

explicacion: |
  La frecuencia es la inversa del período.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "avanzado"
  tags: ["osciloscopio"]

enunciado: "Para una senoide, el valor eficaz es..."
tipo: mc
opciones_explicitas:
  - "El pico dividido √2"
  - "El pico a pico"
  - "El doble del pico"
respuesta: "El pico dividido √2"

explicacion: |
  Vrms = Vp / √2.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "avanzado"
  tags: ["osciloscopio", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "La masa del osciloscopio suele estar conectada a tierra, por lo que hay que conectar con cuidado su cable de masa."

explicacion: |
  Una conexión descuidada puede crear un cortocircuito.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "intermedio"
  tags: ["seguridad"]

enunciado: "Para trabajos con la red eléctrica conviene..."
tipo: mc
opciones_explicitas:
  - "Respetar la categoría y tensión máxima del instrumento"
  - "Usar cualquier instrumento"
  - "Tocar las partes metálicas de las puntas"
respuesta: "Respetar la categoría y tensión máxima del instrumento"

explicacion: |
  Y usar puntas en buen estado.
```

```
metadata:
  materia: "electronica"
  tema: "instrumentos_de_medicion_multimetro_y_osciloscopio"
  nivel: "basico"
  tags: ["multimetro", "vocabulario"]

tipo: completar
enunciado: "El instrumento que mide tensión, corriente y resistencia con un solo aparato se llama ___."
respuestas_validas:
  - "multímetro"
  - "multimetro"
  - "tester"

explicacion: |
  También se lo llama tester.
```

## Sección: logica-combinacional-sumadores-multiplexores (23 preguntas)

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["combinacional"]

enunciado: "En un circuito combinacional, la salida depende..."
tipo: mc
opciones_explicitas:
  - "Solo de las entradas actuales"
  - "De las entradas actuales y pasadas"
  - "Solo del reloj"
respuesta: "Solo de las entradas actuales"

explicacion: |
  No tiene memoria.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador"]

enunciado: "En un semisumador, la salida de suma equivale a..."
tipo: mc
opciones_explicitas:
  - "Una compuerta XOR"
  - "Una compuerta AND"
  - "Una compuerta NOT"
respuesta: "Una compuerta XOR"

explicacion: |
  S = A ⊕ B.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador"]

enunciado: "En un semisumador, el acarreo equivale a..."
tipo: mc
opciones_explicitas:
  - "Una compuerta AND"
  - "Una compuerta XOR"
  - "Una compuerta NOR"
respuesta: "Una compuerta AND"

explicacion: |
  C = A · B.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador"]

respuesta: falso
tipo: vf

enunciado: "Un semisumador admite un acarreo de entrada."

explicacion: |
  Eso lo hace el sumador completo.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador"]

enunciado: "El sumador completo suma..."
tipo: mc
opciones_explicitas:
  - "Tres bits: A, B y el acarreo de entrada"
  - "Dos bits únicamente"
  - "Cuatro bits"
respuesta: "Tres bits: A, B y el acarreo de entrada"

explicacion: |
  Tiene salidas de suma y acarreo.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  s: abs(a - b)
  c: a * b

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "En un semisumador con A = {a} y B = {b}, ¿cuánto vale la salida de suma S (0 o 1)?"

pasos:
  - "S = A XOR B"

explicacion: |
  La suma coincide con una XOR.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  c: a * b

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "En un semisumador con A = {a} y B = {b}, ¿cuánto vale el acarreo C (0 o 1)?"

pasos:
  - "C = A AND B"

explicacion: |
  El acarreo es 1 solo si ambos son 1.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["sumador", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  cin: uno_de([0, 1])
  s: (a + b + cin) - 2 * floor((a + b + cin) / 2)

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "En un sumador completo con A = {a}, B = {b} y Cin = {cin}, ¿cuánto vale la suma S (0 o 1)?"

pasos:
  - "S es el bit menos significativo de A + B + Cin"

explicacion: |
  Se suman los tres bits y se toma el bit menos significativo.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["sumador", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  cin: uno_de([0, 1])
  cout: floor((a + b + cin) / 2)

respuesta: cout
tipo: input
tolerancia_abs: 0

enunciado: "En un sumador completo con A = {a}, B = {b} y Cin = {cin}, ¿cuánto vale el acarreo de salida Cout (0 o 1)?"

pasos:
  - "Cout es 1 si la suma de los tres bits es 2 o más"

explicacion: |
  El acarreo es 1 cuando hay al menos dos unos.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["sumador", "calculo"]

variables:
  a: random(0, 15)
  b: random(0, 15)
  s: a + b

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "Un sumador de 4 bits suma {a} y {b}. ¿Cuánto vale el resultado, en decimal (incluyendo el acarreo final)?"

pasos:
  - "{a} + {b}"

explicacion: |
  El resultado puede necesitar un quinto bit.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["sumador"]

enunciado: "El resultado de sumar dos números de 4 bits puede necesitar hasta..."
tipo: mc
opciones_explicitas:
  - "5 bits"
  - "4 bits"
  - "8 bits"
respuesta: "5 bits"

explicacion: |
  15 + 15 = 30, que requiere 5 bits.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["sumador"]

respuesta: verdadero
tipo: vf

enunciado: "En un sumador de acarreo en cascada, el acarreo de salida de cada etapa entra a la siguiente."

explicacion: |
  Por eso se propaga por toda la cadena.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "avanzado"
  tags: ["sumador"]

enunciado: "La principal desventaja del sumador de acarreo en cascada es..."
tipo: mc
opciones_explicitas:
  - "La velocidad limitada por la propagación del acarreo"
  - "El consumo nulo"
  - "La imposibilidad de sumar"
respuesta: "La velocidad limitada por la propagación del acarreo"

explicacion: |
  Para ser más rápido se usa acarreo anticipado.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "avanzado"
  tags: ["sumador"]

enunciado: "La resta con circuitos sumadores se obtiene sumando..."
tipo: mc
opciones_explicitas:
  - "El complemento a dos del segundo número"
  - "El número negado dos veces"
  - "Un cero adicional"
respuesta: "El complemento a dos del segundo número"

explicacion: |
  Es la forma habitual en procesadores.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["mux"]

enunciado: "Un multiplexor..."
tipo: mc
opciones_explicitas:
  - "Elige una entre varias entradas según las líneas de selección"
  - "Suma dos números"
  - "Activa varias salidas a la vez"
respuesta: "Elige una entre varias entradas según las líneas de selección"

explicacion: |
  Es un conmutador digital.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["mux", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5])
  entradas: 2 ^ n

respuesta: entradas
tipo: input
tolerancia_abs: 0

enunciado: "Un multiplexor tiene {n} líneas de selección. ¿Cuántas entradas de datos puede elegir?"

pasos:
  - "Entradas = 2^n"

explicacion: |
  Cada línea duplica las posibilidades.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["mux", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5])
  entradas: 2 ^ n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere un multiplexor de {entradas} entradas. ¿Cuántas líneas de selección necesita?"

pasos:
  - "n = log2(entradas)"

explicacion: |
  2 elevado a n da la cantidad de entradas.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["mux"]

enunciado: "Un multiplexor de 4 a 1 necesita..."
tipo: mc
opciones_explicitas:
  - "2 líneas de selección"
  - "1 línea de selección"
  - "4 líneas de selección"
respuesta: "2 líneas de selección"

explicacion: |
  2^2 = 4.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["mux"]

enunciado: "Un demultiplexor..."
tipo: mc
opciones_explicitas:
  - "Lleva una entrada a una de varias salidas"
  - "Elige una de varias entradas"
  - "Suma bits"
respuesta: "Lleva una entrada a una de varias salidas"

explicacion: |
  Es lo opuesto del multiplexor.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["decodificador"]

enunciado: "Un decodificador de 2 a 4 activa..."
tipo: mc
opciones_explicitas:
  - "Una de cuatro salidas según un código de 2 bits"
  - "Cuatro salidas a la vez"
  - "Una entrada de cuatro"
respuesta: "Una de cuatro salidas según un código de 2 bits"

explicacion: |
  Selecciona una salida entre 2^n.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "avanzado"
  tags: ["decodificador"]

enunciado: "Un uso típico de un decodificador es..."
tipo: mc
opciones_explicitas:
  - "Seleccionar una memoria o un dispositivo"
  - "Amplificar una señal"
  - "Rectificar"
respuesta: "Seleccionar una memoria o un dispositivo"

explicacion: |
  También manejar displays.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "avanzado"
  tags: ["comparador"]

enunciado: "La igualdad de dos bits se detecta con una compuerta..."
tipo: mc
opciones_explicitas:
  - "XNOR"
  - "NAND de una entrada"
  - "NOT"
respuesta: "XNOR"

explicacion: |
  La XNOR da 1 cuando son iguales.
```

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador"]

tipo: completar
enunciado: "El bit que se traslada a la posición siguiente al sumar 1 + 1 se llama ___."
respuestas_validas:
  - "acarreo"
  - "carry"

explicacion: |
  En inglés, carry.
```

## Sección: microcontrolador-entradas-y-salidas-digitales (23 preguntas)

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io"]

enunciado: "Un pin digital de un microcontrolador puede configurarse como..."
tipo: mc
opciones_explicitas:
  - "Entrada o salida"
  - "Solo entrada"
  - "Solo salida"
respuesta: "Entrada o salida"

explicacion: |
  Se define en la configuración.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io"]

enunciado: "Un pin digital de salida en nivel alto entrega aproximadamente..."
tipo: mc
opciones_explicitas:
  - "La tensión de alimentación"
  - "0 V"
  - "Una tensión negativa"
respuesta: "La tensión de alimentación"

explicacion: |
  Por ejemplo 5 V o 3,3 V.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io"]

enunciado: "En Arduino, la función que lee un pin digital es..."
tipo: mc
opciones_explicitas:
  - "digitalRead"
  - "digitalWrite"
  - "pinMode"
respuesta: "digitalRead"

explicacion: |
  digitalWrite escribe y pinMode configura.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "limites"]

enunciado: "Los pines de un microcontrolador entregan..."
tipo: mc
opciones_explicitas:
  - "Corrientes pequeñas"
  - "Corrientes de varios amperios"
  - "Corriente ilimitada"
respuesta: "Corrientes pequeñas"

explicacion: |
  Por eso las cargas exigentes se manejan con un transistor.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "limites"]

respuesta: falso
tipo: vf

enunciado: "Es correcto conectar un motor de potencia directamente a un pin del microcontrolador."

explicacion: |
  Se usa un transistor o un driver.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "calculo"]

variables:
  vcc: uno_de([3.3, 5])
  vled: uno_de([1.8, 2, 2.2])
  i: uno_de([5, 10, 15])
  r: redondear((vcc - vled) / (i / 1000), 0)

respuesta: r
tipo: input
tolerancia_abs: 1

enunciado: "Un pin de {vcc} V maneja un LED de {vled} V con {i} mA. ¿Qué resistencia en serie corresponde, en Ω?"

pasos:
  - "R = (V − Vled) / I"

explicacion: |
  Se divide la tensión sobrante por la corriente.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "pullup"]

enunciado: "Un pin de entrada sin conexión definida, al aire, se llama..."
tipo: mc
opciones_explicitas:
  - "Flotante"
  - "Saturado"
  - "Cortado"
respuesta: "Flotante"

explicacion: |
  Puede leer valores aleatorios por ruido.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "pullup"]

respuesta: falso
tipo: vf

enunciado: "Un pin de entrada flotante lee siempre 0."

explicacion: |
  Su lectura es indeterminada y puede variar con el ruido.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "pullup"]

enunciado: "Con una resistencia pull-up y un pulsador a masa, en reposo el pin lee..."
tipo: mc
opciones_explicitas:
  - "1"
  - "0"
  - "Un valor aleatorio"
respuesta: "1"

explicacion: |
  Al presionar, el pin va a masa y lee 0.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "pullup"]

enunciado: "Con una resistencia pull-down, en reposo el pin lee..."
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "Un valor aleatorio"
respuesta: "0"

explicacion: |
  Al presionar el pulsador a la alimentación, lee 1.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "pullup"]

respuesta: verdadero
tipo: vf

enunciado: "Muchos microcontroladores tienen resistencias pull-up internas activables por software."

explicacion: |
  Así no hace falta agregar una externa.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "pullup"]

enunciado: "En un pulsador con pull-up, el nivel que indica 'presionado' es..."
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "Indefinido"
respuesta: "0"

explicacion: |
  El pulsador conecta el pin a masa.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "rebote"]

enunciado: "El rebote de un pulsador consiste en que..."
tipo: mc
opciones_explicitas:
  - "Los contactos generan varios cambios rápidos antes de estabilizarse"
  - "El pulsador se rompe"
  - "El pin se quema"
respuesta: "Los contactos generan varios cambios rápidos antes de estabilizarse"

explicacion: |
  Dura unos pocos milisegundos.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "rebote"]

enunciado: "Si el programa no filtra el rebote, un solo toque puede interpretarse como..."
tipo: mc
opciones_explicitas:
  - "Varias pulsaciones"
  - "Ninguna pulsación"
  - "Una pulsación larga"
respuesta: "Varias pulsaciones"

explicacion: |
  El programa cuenta cada cambio.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "rebote"]

enunciado: "Una solución por hardware contra el rebote es..."
tipo: mc
opciones_explicitas:
  - "Un capacitor que filtre los cambios rápidos"
  - "Un transformador"
  - "Un diodo en serie"
respuesta: "Un capacitor que filtre los cambios rápidos"

explicacion: |
  Es un filtro RC.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "rebote"]

enunciado: "Una solución por software contra el rebote es..."
tipo: mc
opciones_explicitas:
  - "Ignorar los cambios durante unos milisegundos tras detectar uno"
  - "Leer el pin más rápido"
  - "Apagar el microcontrolador"
respuesta: "Ignorar los cambios durante unos milisegundos tras detectar uno"

explicacion: |
  Es el antirrebote o debounce.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "programa"]

enunciado: "Un programa típico de microcontrolador tiene..."
tipo: mc
opciones_explicitas:
  - "Una configuración inicial y un bucle que se repite"
  - "Solo una línea"
  - "Una instrucción por pin"
respuesta: "Una configuración inicial y un bucle que se repite"

explicacion: |
  Leer, decidir y escribir.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "avanzado"
  tags: ["io", "programa"]

enunciado: "Para temporizar acciones sin que el resto del programa se detenga conviene..."
tipo: mc
opciones_explicitas:
  - "Medir el tiempo transcurrido"
  - "Usar una pausa larga"
  - "Apagar las salidas"
respuesta: "Medir el tiempo transcurrido"

explicacion: |
  Una pausa bloquea todo.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "pwm"]

tipo: completar
enunciado: "La modulación por ancho de pulso se conoce por la sigla ___."
respuestas_validas:
  - "PWM"
  - "pwm"

explicacion: |
  Pulse Width Modulation.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "pwm", "calculo"]

variables:
  vcc: uno_de([3.3, 5])
  d: uno_de([10, 25, 50, 75])
  v: redondear(vcc * d / 100, 2)

respuesta: v
tipo: input
tolerancia_abs: 0.03

enunciado: "Un pin PWM con {vcc} V de alimentación tiene un ciclo de trabajo de {d} %. ¿Cuál es el valor medio de la tensión, en V? (redondeá a dos decimales)"

pasos:
  - "Vmedio = Vcc × ciclo de trabajo"

explicacion: |
  El valor medio es proporcional al ciclo.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "avanzado"
  tags: ["io", "pwm", "calculo"]

variables:
  vcc: 5
  v: uno_de([1, 2, 2.5, 4])
  d: redondear(v / vcc * 100, 1)

respuesta: d
tipo: input
tolerancia_abs: 0.3

enunciado: "Con una alimentación de 5 V se quiere un valor medio de {v} V con PWM. ¿Qué ciclo de trabajo hace falta, en %?"

pasos:
  - "D = Vmedio / Vcc × 100"

explicacion: |
  Se despeja el ciclo de trabajo.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "pwm"]

enunciado: "Una aplicación típica del PWM es..."
tipo: mc
opciones_explicitas:
  - "Regular el brillo de un LED"
  - "Rectificar la red"
  - "Almacenar datos"
respuesta: "Regular el brillo de un LED"

explicacion: |
  También controlar la velocidad de un motor.
```

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "avanzado"
  tags: ["io", "pwm"]

respuesta: verdadero
tipo: vf

enunciado: "Un pin con PWM sigue siendo digital, aunque el efecto sobre muchas cargas sea el de una tensión analógica."

explicacion: |
  Solo alterna entre nivel alto y bajo.
```

## Sección: logica-secuencial-flip-flops-y-contadores (23 preguntas)

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["secuencial"]

enunciado: "En un circuito secuencial, la salida depende..."
tipo: mc
opciones_explicitas:
  - "De las entradas y del estado anterior"
  - "Solo de las entradas"
  - "Solo del reloj"
respuesta: "De las entradas y del estado anterior"

explicacion: |
  Tiene memoria.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["secuencial"]

enunciado: "La memoria de un circuito secuencial se basa en..."
tipo: mc
opciones_explicitas:
  - "Un lazo de realimentación"
  - "Un transformador"
  - "Un divisor de tensión"
respuesta: "Un lazo de realimentación"

explicacion: |
  La salida vuelve a la entrada.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["latch"]

enunciado: "En un latch SR, activar la entrada S hace que Q pase a..."
tipo: mc
opciones_explicitas:
  - "1"
  - "0"
  - "Quedar igual"
respuesta: "1"

explicacion: |
  S es Set.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["latch"]

enunciado: "En un latch SR, activar la entrada R hace que Q pase a..."
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "Quedar igual"
respuesta: "0"

explicacion: |
  R es Reset.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["latch"]

respuesta: verdadero
tipo: vf

enunciado: "En un latch SR, activar S y R a la vez es una combinación inválida."

explicacion: |
  Deja el estado indefinido al soltarlas.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["latch"]

enunciado: "Si S y R están inactivas, el latch..."
tipo: mc
opciones_explicitas:
  - "Mantiene el valor anterior"
  - "Pasa a 1"
  - "Pasa a 0"
respuesta: "Mantiene el valor anterior"

explicacion: |
  Esa es la función de memoria.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["flipflop"]

enunciado: "Un flip-flop cambia de estado..."
tipo: mc
opciones_explicitas:
  - "En el flanco de la señal de reloj"
  - "Siempre que cambia la entrada"
  - "Solo cuando se lo apaga"
respuesta: "En el flanco de la señal de reloj"

explicacion: |
  Entre flancos, ignora la entrada.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["flipflop"]

enunciado: "El flanco de subida del reloj es el paso de..."
tipo: mc
opciones_explicitas:
  - "0 a 1"
  - "1 a 0"
  - "Alta a baja frecuencia"
respuesta: "0 a 1"

explicacion: |
  El de bajada es de 1 a 0.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["flipflop"]

enunciado: "Un flip-flop D, en cada flanco activo..."
tipo: mc
opciones_explicitas:
  - "Copia a Q el valor de D"
  - "Invierte Q"
  - "Pone Q a 0 siempre"
respuesta: "Copia a Q el valor de D"

explicacion: |
  Sirve para guardar un bit.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["flipflop", "calculo"]

variables:
  d: uno_de([0, 1])
  q: d

respuesta: q
tipo: input
tolerancia_abs: 0

enunciado: "Un flip-flop D recibe D = {d} y llega un flanco activo. ¿Cuánto vale Q después (0 o 1)?"

pasos:
  - "Q copia a D"

explicacion: |
  Q toma el valor de D.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["flipflop", "calculo"]

variables:
  qa: uno_de([0, 1])
  q: 1 - qa

respuesta: q
tipo: input
tolerancia_abs: 0

enunciado: "Un flip-flop JK con J = K = 1 tiene Q = {qa} y llega un flanco activo. ¿Cuánto vale Q después (0 o 1)?"

pasos:
  - "Con J = K = 1, la salida se invierte"

explicacion: |
  Es el modo toggle.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["flipflop", "calculo"]

variables:
  qa: uno_de([0, 1])
  t: 1
  q: 1 - qa

respuesta: q
tipo: input
tolerancia_abs: 0

enunciado: "Un flip-flop T con T = 1 tiene Q = {qa} y llega un flanco activo. ¿Cuánto vale Q después (0 o 1)?"

pasos:
  - "Con T = 1 cambia de estado"

explicacion: |
  La salida alterna en cada flanco.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["flipflop"]

enunciado: "Un flip-flop T con T = 1 divide la frecuencia del reloj por..."
tipo: mc
opciones_explicitas:
  - "2"
  - "4"
  - "10"
respuesta: "2"

explicacion: |
  La salida cambia una vez por flanco: hace un ciclo cada dos ciclos del reloj.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["flipflop", "calculo"]

variables:
  f: uno_de([1000, 2000, 4000, 8000])
  n: uno_de([1, 2, 3])
  fo: f / 2 ^ n

respuesta: fo
tipo: input
tolerancia_abs: 0.5

enunciado: "Un reloj de {f} Hz pasa por {n} flip-flops T en cascada (cada uno divide por 2). ¿Cuál es la frecuencia de salida final, en Hz?"

pasos:
  - "Cada flip-flop divide por 2"
  - "fo = f / 2^n"

explicacion: |
  Cada etapa divide por 2.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["contador", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5, 8])
  est: 2 ^ n

respuesta: est
tipo: input
tolerancia_abs: 0

enunciado: "Un contador tiene {n} flip-flops. ¿Cuántos estados distintos puede tener?"

pasos:
  - "Estados = 2^n"

explicacion: |
  Cada flip-flop duplica los estados posibles.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["contador", "calculo"]

variables:
  n: uno_de([3, 4, 5, 6, 8])
  mx: 2 ^ n - 1

respuesta: mx
tipo: input
tolerancia_abs: 0

enunciado: "Un contador binario tiene {n} flip-flops y parte de cero. ¿Hasta qué número cuenta antes de volver a cero?"

pasos:
  - "Máximo = 2^n − 1"

explicacion: |
  Cuenta de 0 a 2^n − 1.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "avanzado"
  tags: ["contador", "calculo"]

variables:
  n: uno_de([3, 4, 5, 6])
  estados: 2 ^ n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Se necesita un contador de {estados} estados. ¿Cuántos flip-flops hacen falta?"

pasos:
  - "n = log2(estados)"

explicacion: |
  2 elevado a n da la cantidad de estados.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["registro"]

enunciado: "Un registro de 8 bits guarda..."
tipo: mc
opciones_explicitas:
  - "Un byte"
  - "Un kilobyte"
  - "Un solo bit"
respuesta: "Un byte"

explicacion: |
  Son 8 flip-flops con un mismo reloj.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["registro"]

enunciado: "En un registro de desplazamiento, en cada pulso de reloj los bits..."
tipo: mc
opciones_explicitas:
  - "Avanzan una posición"
  - "Se borran"
  - "Se duplican"
respuesta: "Avanzan una posición"

explicacion: |
  Se usa para convertir entre serie y paralelo.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["contador"]

enunciado: "En un contador sincrónico, todos los flip-flops..."
tipo: mc
opciones_explicitas:
  - "Comparten el mismo reloj"
  - "Reciben distinto reloj"
  - "No usan reloj"
respuesta: "Comparten el mismo reloj"

explicacion: |
  Es más rápido y confiable que el asincrónico.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["contador"]

respuesta: verdadero
tipo: vf

enunciado: "En un contador asincrónico, cada flip-flop recibe como reloj la salida del anterior."

explicacion: |
  Es simple, pero más lento.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "intermedio"
  tags: ["contador", "aplicaciones"]

enunciado: "Un uso típico de los contadores es..."
tipo: mc
opciones_explicitas:
  - "Dividir frecuencias y medir tiempos"
  - "Rectificar la red"
  - "Amplificar señales"
respuesta: "Dividir frecuencias y medir tiempos"

explicacion: |
  También armar relojes digitales.
```

```
metadata:
  materia: "electronica"
  tema: "logica_secuencial_flip_flops_y_contadores"
  nivel: "basico"
  tags: ["secuencial", "vocabulario"]

tipo: completar
enunciado: "A la información que un circuito secuencial recuerda se la llama ___."
respuestas_validas:
  - "estado"

explicacion: |
  La salida depende de las entradas y del estado.
```

## Sección: comunicacion-serie-uart-i2c-spi (24 preguntas)

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["serie"]

enunciado: "En la comunicación serie, los bits se envían..."
tipo: mc
opciones_explicitas:
  - "Uno tras otro por una línea"
  - "Todos a la vez por varias líneas"
  - "Solo en forma de pulsos largos"
respuesta: "Uno tras otro por una línea"

explicacion: |
  La paralela envía varios bits a la vez.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["serie"]

enunciado: "Una ventaja de la comunicación serie frente a la paralela es..."
tipo: mc
opciones_explicitas:
  - "Usa pocos conductores"
  - "Es siempre más rápida"
  - "No necesita masa"
respuesta: "Usa pocos conductores"

explicacion: |
  Es lo que la hace práctica para distancias largas.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["serie"]

enunciado: "En una comunicación asíncrona..."
tipo: mc
opciones_explicitas:
  - "No hay línea de reloj y ambos acuerdan la velocidad"
  - "Hay una línea de reloj compartida"
  - "No hay velocidad definida"
respuesta: "No hay línea de reloj y ambos acuerdan la velocidad"

explicacion: |
  La UART es asíncrona.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["serie"]

enunciado: "En una comunicación síncrona..."
tipo: mc
opciones_explicitas:
  - "Hay una línea de reloj compartida"
  - "No hay reloj"
  - "Solo hay un conductor"
respuesta: "Hay una línea de reloj compartida"

explicacion: |
  I2C y SPI son síncronos.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["uart"]

enunciado: "La UART usa las líneas..."
tipo: mc
opciones_explicitas:
  - "TX y RX"
  - "SDA y SCL"
  - "MOSI y MISO"
respuesta: "TX y RX"

explicacion: |
  SDA y SCL son de I2C; MOSI y MISO, de SPI.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["uart"]

respuesta: verdadero
tipo: vf

enunciado: "En una conexión UART, el TX de un dispositivo se conecta al RX del otro."

explicacion: |
  Lo que uno transmite, el otro lo recibe.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["uart"]

tipo: completar
enunciado: "La velocidad de una comunicación UART se mide en bits por segundo y se llama tasa de ___."
respuestas_validas:
  - "baudios"
  - "baud"

explicacion: |
  Por ejemplo, 9600 o 115200.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["uart", "calculo"]

variables:
  b: 10

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "En una trama 8N1 de UART (1 bit de inicio, 8 de datos, 0 de paridad y 1 de parada), ¿cuántos bits se transmiten por cada byte?"

pasos:
  - "1 + 8 + 0 + 1"

explicacion: |
  Cada byte lleva 10 bits en la línea.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["uart", "calculo"]

variables:
  baud: uno_de([9600, 19200, 115200])
  t: redondear(10 / baud * 1000, 3)

respuesta: t
tipo: input
tolerancia_abs: 0.002

enunciado: "A {baud} baudios con trama 8N1 (10 bits por byte), ¿cuánto tarda en enviarse un byte, en milisegundos? (redondeá a tres decimales)"

pasos:
  - "Tiempo = 10 bits / baudios"
  - "Pasar s a ms"

explicacion: |
  Cada byte ocupa 10 bits.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["uart", "calculo"]

variables:
  baud: uno_de([9600, 19200, 115200])
  bps: baud / 10

respuesta: bps
tipo: input
tolerancia_abs: 0.5

enunciado: "A {baud} baudios con trama 8N1, ¿cuántos bytes de datos se transmiten por segundo?"

pasos:
  - "baudios / 10"

explicacion: |
  Cada byte ocupa 10 bits.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["uart", "calculo"]

variables:
  baud: uno_de([9600, 115200])
  n: uno_de([10, 50, 100])
  t: redondear(n * 10 / baud * 1000, 2)

respuesta: t
tipo: input
tolerancia_abs: 0.02

enunciado: "A {baud} baudios con trama 8N1, ¿cuánto tarda en enviarse un mensaje de {n} bytes, en milisegundos? (redondeá a dos decimales)"

pasos:
  - "Bits = bytes × 10"
  - "Tiempo = bits / baudios"

explicacion: |
  Se multiplica por los 10 bits de cada byte.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["i2c"]

enunciado: "El bus I2C usa las líneas..."
tipo: mc
opciones_explicitas:
  - "SDA y SCL"
  - "TX y RX"
  - "MOSI y MISO"
respuesta: "SDA y SCL"

explicacion: |
  Datos y reloj.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["i2c"]

enunciado: "En I2C, el maestro elige con qué esclavo hablar mediante..."
tipo: mc
opciones_explicitas:
  - "Su dirección"
  - "Una línea CS"
  - "La velocidad"
respuesta: "Su dirección"

explicacion: |
  Cada esclavo tiene una dirección de 7 bits.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["i2c", "calculo"]

variables:
  d: 7
  n: 2 ^ d

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Con direcciones de {d} bits, ¿cuántas direcciones distintas existen en teoría en un bus I2C?"

pasos:
  - "2^7"

explicacion: |
  Algunas están reservadas, pero en teoría son 128.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["i2c"]

respuesta: verdadero
tipo: vf

enunciado: "El bus I2C necesita resistencias pull-up en SDA y SCL."

explicacion: |
  Las líneas son de colector abierto.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["i2c"]

enunciado: "La ventaja principal del I2C es..."
tipo: mc
opciones_explicitas:
  - "Conectar muchos dispositivos con solo dos líneas"
  - "Ser el más veloz"
  - "No necesitar masa"
respuesta: "Conectar muchos dispositivos con solo dos líneas"

explicacion: |
  Agrega dispositivos sin sumar pines.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["spi"]

enunciado: "El SPI usa las líneas..."
tipo: mc
opciones_explicitas:
  - "SCLK, MOSI, MISO y CS"
  - "SDA y SCL"
  - "TX y RX"
respuesta: "SCLK, MOSI, MISO y CS"

explicacion: |
  Cuatro líneas.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["spi"]

respuesta: verdadero
tipo: vf

enunciado: "En SPI se puede enviar y recibir datos al mismo tiempo."

explicacion: |
  Hay una línea de datos en cada sentido (full dúplex).
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["spi"]

enunciado: "En SPI, el maestro elige a qué esclavo hablar mediante..."
tipo: mc
opciones_explicitas:
  - "Una línea CS por cada esclavo"
  - "Una dirección de 7 bits"
  - "La tasa de baudios"
respuesta: "Una línea CS por cada esclavo"

explicacion: |
  No hay direcciones.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["spi", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5])
  p: 3 + n

respuesta: p
tipo: input
tolerancia_abs: 0

enunciado: "Un maestro SPI maneja {n} esclavos, cada uno con su propia línea CS (SCLK, MOSI y MISO son compartidas). ¿Cuántos pines usa en total?"

pasos:
  - "3 líneas compartidas + n líneas CS"

explicacion: |
  Cada esclavo suma un pin.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["i2c", "calculo"]

variables:
  n: uno_de([2, 5, 8, 12])
  p: 2

respuesta: p
tipo: input
tolerancia_abs: 0

enunciado: "Un maestro I2C maneja {n} esclavos. ¿Cuántos pines usa para el bus?"

pasos:
  - "SDA y SCL, sin importar la cantidad"

explicacion: |
  El bus siempre ocupa dos pines.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["serie", "comparacion"]

enunciado: "Para una tarjeta SD, donde importa la velocidad, suele elegirse..."
tipo: mc
opciones_explicitas:
  - "SPI"
  - "UART"
  - "I2C"
respuesta: "SPI"

explicacion: |
  Es más rápido que el I2C.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["serie"]

respuesta: verdadero
tipo: vf

enunciado: "Conectar un dispositivo de 5 V directamente a otro de 3,3 V puede dañarlo."

explicacion: |
  Hay que respetar los niveles de tensión.
```

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["serie"]

enunciado: "Para que dos dispositivos se entiendan, ambos deben..."
tipo: mc
opciones_explicitas:
  - "Usar el mismo protocolo y la misma configuración"
  - "Tener la misma marca"
  - "Estar a menos de un metro"
respuesta: "Usar el mismo protocolo y la misma configuración"

explicacion: |
  Velocidad, formato de trama y niveles.
```

