# Examen jefe — Experto en Transistores, Operacionales y Señales

> Logro #945. Completaste el parcial dominando el transistor como interruptor y amplificador, el amplificador operacional, las señales analógicas y digitales con ADC y DAC y el temporizador 555 y el prototipado en protoboard con soldadura y seguridad. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **114 preguntas totales** en 5/5 secciones.

---

## Sección: prototipado-protoboard-soldadura-y-seguridad (25 preguntas)

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["prototipado"]

enunciado: "El orden habitual para construir un circuito es..."
tipo: mc
opciones_explicitas:
  - "Prototipo en protoboard, verificación y luego soldadura"
  - "Soldadura directa y luego verificación"
  - "Verificación sin armarlo"
respuesta: "Prototipo en protoboard, verificación y luego soldadura"

explicacion: |
  Primero se prueba y después se hace definitivo.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["protoboard"]

enunciado: "La protoboard sirve para..."
tipo: mc
opciones_explicitas:
  - "Armar circuitos de prueba sin soldar"
  - "Soldar componentes de forma definitiva"
  - "Medir tensión"
respuesta: "Armar circuitos de prueba sin soldar"

explicacion: |
  Los componentes se pueden cambiar fácilmente.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["protoboard"]

enunciado: "En la zona central de una protoboard, las filas de cinco agujeros alineados verticalmente..."
tipo: mc
opciones_explicitas:
  - "Están conectadas entre sí"
  - "Están aisladas entre sí"
  - "Están conectadas a la red"
respuesta: "Están conectadas entre sí"

explicacion: |
  Cada columna de cinco agujeros es un nodo.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["protoboard"]

enunciado: "El canal central de la protoboard está pensado para..."
tipo: mc
opciones_explicitas:
  - "Insertar circuitos integrados"
  - "Colocar los cables de alimentación"
  - "Colocar el multímetro"
respuesta: "Insertar circuitos integrados"

explicacion: |
  Así las patas de cada lado quedan en filas distintas.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["protoboard"]

enunciado: "Los rieles de alimentación de los bordes sirven para..."
tipo: mc
opciones_explicitas:
  - "Llevar el positivo y la masa a todo el circuito"
  - "Conectar los pulsadores"
  - "Soldar"
respuesta: "Llevar el positivo y la masa a todo el circuito"

explicacion: |
  Están conectados a lo largo de la placa.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "avanzado"
  tags: ["protoboard"]

respuesta: verdadero
tipo: vf

enunciado: "Algunas protoboards tienen los rieles interrumpidos a la mitad, lo que conviene verificar con el multímetro."

explicacion: |
  Sino, parte del circuito queda sin alimentación.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["protoboard"]

respuesta: falso
tipo: vf

enunciado: "Los contactos de una protoboard son aptos para corrientes elevadas."

explicacion: |
  Están pensados para señales y corrientes bajas.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["protoboard", "calculo"]

variables:
  cols: uno_de([10, 20, 30, 63])
  n: cols * 2

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una protoboard tiene {cols} columnas, cada una con dos grupos de cinco agujeros (uno a cada lado del canal central). ¿Cuántos grupos de cinco agujeros conectados entre sí hay en total?"

pasos:
  - "Columnas × 2"

explicacion: |
  Cada mitad tiene un grupo por columna.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["protoboard", "buenas_practicas"]

enunciado: "Una buena práctica al armar un circuito es..."
tipo: mc
opciones_explicitas:
  - "Usar cables de colores y cortos"
  - "Usar cables largos y del mismo color"
  - "Conectar la alimentación primero"
respuesta: "Usar cables de colores y cortos"

explicacion: |
  Rojo para positivo, negro para masa; la alimentación se conecta al final.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["soldadura"]

enunciado: "Soldar es unir piezas metálicas con..."
tipo: mc
opciones_explicitas:
  - "Una aleación fundida, el estaño"
  - "Pegamento"
  - "Cinta aisladora"
respuesta: "Una aleación fundida, el estaño"

explicacion: |
  Forma una unión eléctrica y mecánica.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["soldadura"]

enunciado: "El fundente del núcleo de la soldadura..."
tipo: mc
opciones_explicitas:
  - "Limpia las superficies y ayuda a que el estaño fluya"
  - "Enfría la unión"
  - "Aumenta la tensión"
respuesta: "Limpia las superficies y ayuda a que el estaño fluya"

explicacion: |
  Mejora la unión.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["soldadura"]

enunciado: "Para soldar correctamente se calientan primero..."
tipo: mc
opciones_explicitas:
  - "El terminal y la isla de cobre"
  - "Solo el estaño"
  - "Solo el componente"
respuesta: "El terminal y la isla de cobre"

explicacion: |
  Luego se acerca el estaño a la unión, no a la punta.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["soldadura"]

enunciado: "El estaño se acerca..."
tipo: mc
opciones_explicitas:
  - "A la unión caliente, no a la punta del soldador"
  - "A la punta del soldador"
  - "A cualquier lado"
respuesta: "A la unión caliente, no a la punta del soldador"

explicacion: |
  Debe fundirse por el calor de la unión.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["soldadura"]

respuesta: verdadero
tipo: vf

enunciado: "Una soldadura fría puede parecer conectada pero fallar con el tiempo."

explicacion: |
  Suele verse opaca, granulosa o con forma de bolita.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["soldadura"]

enunciado: "Una soldadura fría se repara..."
tipo: mc
opciones_explicitas:
  - "Volviendo a calentar y agregando estaño o fundente"
  - "Dejándola así"
  - "Con cinta"
respuesta: "Volviendo a calentar y agregando estaño o fundente"

explicacion: |
  Hasta que quede brillante y cónica.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["esd"]

enunciado: "La descarga electrostática puede dañar..."
tipo: mc
opciones_explicitas:
  - "Circuitos integrados y transistores"
  - "Solo los cables"
  - "Solo las resistencias"
respuesta: "Circuitos integrados y transistores"

explicacion: |
  Aunque la persona no sienta la descarga.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["esd"]

tipo: completar
enunciado: "Para evitar daños por descarga electrostática se usa una pulsera ___."
respuestas_validas:
  - "antiestática"
  - "antiestatica"

explicacion: |
  Se conecta a masa.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "El soldador debe apoyarse siempre en su soporte, y nunca tocar su punta."

explicacion: |
  La punta alcanza temperaturas muy altas.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["seguridad"]

enunciado: "Al soldar conviene..."
tipo: mc
opciones_explicitas:
  - "Trabajar en un lugar ventilado"
  - "Respirar cerca de la unión"
  - "Tapar las ventanas"
respuesta: "Trabajar en un lugar ventilado"

explicacion: |
  Para no inhalar el humo del fundente.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "Los circuitos de prueba conviene alimentarlos con fuentes de baja tensión y aisladas de la red."

explicacion: |
  Con tensión de red el riesgo es mucho mayor.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "avanzado"
  tags: ["seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "Los capacitores grandes pueden retener carga después de apagar el circuito."

explicacion: |
  Hay que descargarlos con cuidado.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["buenas_practicas"]

enunciado: "Antes de energizar un circuito conviene..."
tipo: mc
opciones_explicitas:
  - "Revisar polaridades y comprobar que no haya cortocircuito"
  - "Conectarlo directamente"
  - "Quitar el multímetro"
respuesta: "Revisar polaridades y comprobar que no haya cortocircuito"

explicacion: |
  Con el multímetro, entre alimentación y masa.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["buenas_practicas"]

enunciado: "Si un circuito no funciona, se revisa de forma ordenada..."
tipo: mc
opciones_explicitas:
  - "Alimentación, conexiones, componentes y señales"
  - "Solo los componentes"
  - "Al azar"
respuesta: "Alimentación, conexiones, componentes y señales"

explicacion: |
  De la entrada hacia la salida.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["buenas_practicas"]

respuesta: verdadero
tipo: vf

enunciado: "Los diodos, LED y capacitores electrolíticos tienen polaridad que hay que respetar."

explicacion: |
  Conectados al revés pueden no funcionar o dañarse.
```

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["prototipado"]

enunciado: "Una vez verificado el prototipo, la versión definitiva se hace sobre..."
tipo: mc
opciones_explicitas:
  - "Una placa perforada o un circuito impreso"
  - "La misma protoboard"
  - "Un cartón"
respuesta: "Una placa perforada o un circuito impreso"

explicacion: |
  Con los componentes soldados.
```

## Sección: senales-analogicas-y-digitales-adc-dac (22 preguntas)

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

enunciado: "Una señal analógica es aquella que..."
tipo: mc
opciones_explicitas:
  - "Puede tomar cualquier valor en un rango y varía continuamente"
  - "Solo toma dos valores"
  - "Solo existe en computadoras"
respuesta: "Puede tomar cualquier valor en un rango y varía continuamente"

explicacion: |
  Una digital toma un conjunto finito de valores.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

enunciado: "Una señal digital binaria toma..."
tipo: mc
opciones_explicitas:
  - "Dos valores"
  - "Infinitos valores"
  - "Tres valores"
respuesta: "Dos valores"

explicacion: |
  Alto y bajo, 1 y 0.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

enunciado: "Un conversor ADC..."
tipo: mc
opciones_explicitas:
  - "Convierte una tensión en un número"
  - "Convierte un número en tensión"
  - "Amplifica una señal"
respuesta: "Convierte una tensión en un número"

explicacion: |
  El DAC hace lo contrario.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

enunciado: "Un conversor DAC..."
tipo: mc
opciones_explicitas:
  - "Convierte un número en una tensión"
  - "Mide temperatura"
  - "Elimina el ruido"
respuesta: "Convierte un número en una tensión"

explicacion: |
  Hace el camino inverso al ADC.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc"]

enunciado: "Las dos operaciones básicas de un ADC son..."
tipo: mc
opciones_explicitas:
  - "Muestreo y cuantización"
  - "Rectificación y filtrado"
  - "Amplificación y atenuación"
respuesta: "Muestreo y cuantización"

explicacion: |
  Primero se toman valores en el tiempo y después se redondean a niveles.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc", "calculo"]

variables:
  n: uno_de([4, 6, 8, 10, 12])
  niveles: 2 ^ n

respuesta: niveles
tipo: input
tolerancia_abs: 0.5

enunciado: "Un ADC tiene {n} bits. ¿Cuántos niveles distintos puede distinguir?"

pasos:
  - "Niveles = 2^n"

explicacion: |
  Cada bit duplica la cantidad de niveles.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "calculo"]

variables:
  n: uno_de([8, 10, 12])
  vref: uno_de([3.3, 5])
  res: redondear(vref / 2 ^ n * 1000, 2)

respuesta: res
tipo: input
tolerancia_abs: 0.02

enunciado: "Un ADC de {n} bits tiene una referencia de {vref} V. ¿Cuál es su resolución, en mV? (redondeá a dos decimales)"

pasos:
  - "Resolución = Vref / 2^n"
  - "Pasar V a mV"

explicacion: |
  Es el escalón de tensión más pequeño que distingue.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "calculo"]

variables:
  n: uno_de([8, 10])
  vref: 5
  vin: uno_de([1, 2, 2.5, 4])
  cod: floor(vin / vref * 2 ^ n)

respuesta: cod
tipo: input
tolerancia_abs: 1

enunciado: "Un ADC de {n} bits con referencia de 5 V mide una entrada de {vin} V. ¿Qué código entrega (entero, sin redondear hacia arriba)?"

pasos:
  - "Código = Vin / Vref × 2^n"
  - "Truncar al entero"

explicacion: |
  El código es proporcional a la fracción del rango.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "calculo"]

variables:
  n: 8
  cod: uno_de([64, 128, 192, 255])
  vref: 5
  vout: redondear(cod / 2 ^ n * vref, 2)

respuesta: vout
tipo: input
tolerancia_abs: 0.03

enunciado: "Un DAC de {n} bits con referencia de 5 V recibe el código {cod}. ¿Qué tensión entrega, en V? (redondeá a dos decimales)"

pasos:
  - "Vout = código / 2^n × Vref"

explicacion: |
  La salida es proporcional al código.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "avanzado"
  tags: ["adc", "calculo"]

variables:
  niv: uno_de([16, 64, 256, 1024])
  n: log10(niv) / log10(2)

respuesta: n
tipo: input
tolerancia_abs: 0.1

enunciado: "Se necesitan distinguir {niv} niveles. ¿Cuántos bits debe tener, como mínimo, el ADC?"

pasos:
  - "n = log2(niveles)"

explicacion: |
  2 elevado al número de bits da la cantidad de niveles.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "calculo"]

variables:
  f: uno_de([500, 1000, 5000, 20000])
  fs: 2 * f

respuesta: fs
tipo: input
tolerancia_abs: 1

enunciado: "Una señal contiene componentes hasta {f} Hz. ¿Cuál es el valor mínimo (límite) que debe superar la frecuencia de muestreo, en Hz, según Nyquist?"

pasos:
  - "fs > 2 × fmax"

explicacion: |
  La frecuencia de muestreo debe superar el doble de la máxima.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "nyquist"]

enunciado: "Para poder reconstruir una señal, la frecuencia de muestreo debe ser..."
tipo: mc
opciones_explicitas:
  - "Mayor que el doble de su frecuencia máxima"
  - "Igual a su frecuencia máxima"
  - "Menor que su frecuencia mínima"
respuesta: "Mayor que el doble de su frecuencia máxima"

explicacion: |
  Es el teorema de Nyquist-Shannon.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "nyquist"]

tipo: completar
enunciado: "El efecto que aparece al muestrear demasiado lento, donde las altas frecuencias se confunden con bajas, se llama ___."
respuestas_validas:
  - "aliasing"
  - "alias"

explicacion: |
  Se evita con un filtro pasa bajos antes del ADC.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "nyquist"]

enunciado: "Para evitar el aliasing se coloca antes del ADC un filtro..."
tipo: mc
opciones_explicitas:
  - "Pasa bajos"
  - "Pasa altos"
  - "Rectificador"
respuesta: "Pasa bajos"

explicacion: |
  Elimina las componentes de frecuencia demasiado alta.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

respuesta: verdadero
tipo: vf

enunciado: "Agregar un bit a un ADC duplica la cantidad de niveles."

explicacion: |
  Niveles = 2^n.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

respuesta: verdadero
tipo: vf

enunciado: "A mayor cantidad de bits, la resolución del ADC mejora (el escalón es más chico)."

explicacion: |
  Resolución = Vref / 2^n.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc"]

respuesta: falso
tipo: vf

enunciado: "El error de cuantización se puede eliminar completamente aumentando la frecuencia de muestreo."

explicacion: |
  Depende de la resolución en bits, no del muestreo.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

respuesta: verdadero
tipo: vf

enunciado: "Las magnitudes del mundo físico, como la temperatura, son por naturaleza analógicas."

explicacion: |
  Por eso se necesitan conversores.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "avanzado"
  tags: ["adc", "nyquist"]

enunciado: "El audio de un CD se muestrea a 44,1 kHz porque..."
tipo: mc
opciones_explicitas:
  - "Hay que superar el doble de los 20 kHz que oye una persona"
  - "Es la frecuencia de la red"
  - "Es la que usa un teléfono"
respuesta: "Hay que superar el doble de los 20 kHz que oye una persona"

explicacion: |
  20 kHz × 2 = 40 kHz.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "aplicaciones"]

enunciado: "En un sistema típico de control, el orden es..."
tipo: mc
opciones_explicitas:
  - "Sensor, acondicionamiento, ADC, microcontrolador, actuador"
  - "Actuador, ADC, sensor, microcontrolador"
  - "Microcontrolador, sensor, actuador, ADC"
respuesta: "Sensor, acondicionamiento, ADC, microcontrolador, actuador"

explicacion: |
  El sensor mide, el ADC convierte, el micro decide, el actuador actúa.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "avanzado"
  tags: ["adc"]

enunciado: "Muchos microcontroladores sin DAC producen una tensión variable usando..."
tipo: mc
opciones_explicitas:
  - "PWM más un filtro"
  - "Un transformador"
  - "Un diodo Zener"
respuesta: "PWM más un filtro"

explicacion: |
  El filtro promedia el ancho de los pulsos.
```

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "avanzado"
  tags: ["adc"]

respuesta: verdadero
tipo: vf

enunciado: "Un ADC de 10 bits entrega códigos de 0 a 1023."

explicacion: |
  2^10 = 1024 niveles; el código máximo es 2^n − 1.
```

## Sección: temporizador-555-y-osciladores (22 preguntas)

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555"]

enunciado: "El circuito integrado 555 se usa principalmente para..."
tipo: mc
opciones_explicitas:
  - "Generar pulsos y temporizaciones"
  - "Rectificar la red"
  - "Almacenar datos"
respuesta: "Generar pulsos y temporizaciones"

explicacion: |
  Con pocas resistencias y un capacitor.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "monoestable"]

enunciado: "En modo monoestable, el 555..."
tipo: mc
opciones_explicitas:
  - "Genera un solo pulso de duración fija al dispararse"
  - "Genera una onda cuadrada continua"
  - "No hace nada"
respuesta: "Genera un solo pulso de duración fija al dispararse"

explicacion: |
  Tiene un único estado estable.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "astable"]

enunciado: "En modo astable, el 555..."
tipo: mc
opciones_explicitas:
  - "Genera una onda cuadrada continua"
  - "Genera un solo pulso"
  - "Amplifica una señal"
respuesta: "Genera una onda cuadrada continua"

explicacion: |
  No tiene estado estable.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "monoestable", "calculo"]

variables:
  r: uno_de([10000, 47000, 100000, 220000])
  c: uno_de([1, 10, 47, 100])
  t: redondear(1.1 * r * c / 1000000, 3)

respuesta: t
tipo: input
tolerancia_abs: 0.01

enunciado: "Un 555 monoestable tiene R = {r} Ω y C = {c} µF. ¿Cuánto dura el pulso, en segundos? (redondeá a tres decimales)"

pasos:
  - "T = 1,1 × R × C"
  - "Pasar µF a F"

explicacion: |
  T = 1,1 R C.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "avanzado"
  tags: ["555", "monoestable", "calculo"]

variables:
  c: uno_de([10, 100])
  t: uno_de([1.1, 2.2, 5.5, 11])
  r: redondear(t / (1.1 * c / 1000000), 0)

respuesta: r
tipo: input
tolerancia_abs: 10

enunciado: "Se quiere un pulso de {t} s con un capacitor de {c} µF. ¿Qué resistencia hace falta, en Ω?"

pasos:
  - "R = T / (1,1 × C)"

explicacion: |
  Se despeja R de T = 1,1 R C.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "avanzado"
  tags: ["555", "monoestable", "calculo"]

variables:
  r: uno_de([10000, 100000])
  t: uno_de([1.1, 2.2, 5.5])
  c: redondear(t / (1.1 * r) * 1000000, 1)

respuesta: c
tipo: input
tolerancia_abs: 0.5

enunciado: "Se quiere un pulso de {t} s con R = {r} Ω. ¿Qué capacidad hace falta, en µF?"

pasos:
  - "C = T / (1,1 × R)"

explicacion: |
  Se despeja C de T = 1,1 R C.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "astable", "calculo"]

variables:
  r1: uno_de([1000, 4700, 10000])
  r2: uno_de([10000, 47000, 100000])
  c: uno_de([0.1, 1, 10])
  f: redondear(1.44 / ((r1 + 2 * r2) * c / 1000000), 1)

respuesta: f
tipo: input
tolerancia_abs: 0.5

enunciado: "Un 555 astable tiene R1 = {r1} Ω, R2 = {r2} Ω y C = {c} µF. ¿Qué frecuencia genera, en Hz? (redondeá a un decimal)"

pasos:
  - "f = 1,44 / ((R1 + 2 R2) × C)"

explicacion: |
  Se aplica la fórmula del modo astable.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "astable", "calculo"]

variables:
  r1: uno_de([1000, 4700, 10000])
  r2: uno_de([10000, 47000, 100000])
  d: redondear((r1 + r2) / (r1 + 2 * r2) * 100, 1)

respuesta: d
tipo: input
tolerancia_abs: 0.3

enunciado: "Un 555 astable tiene R1 = {r1} Ω y R2 = {r2} Ω. ¿Cuál es el ciclo de trabajo, en %? (redondeá a un decimal)"

pasos:
  - "D = (R1 + R2) / (R1 + 2 R2)"

explicacion: |
  Es la proporción del período en alto.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "calculo"]

variables:
  f: uno_de([1, 2, 4, 5, 10])
  t: redondear(1 / f * 1000, 1)

respuesta: t
tipo: input
tolerancia_abs: 0.1

enunciado: "Una señal tiene una frecuencia de {f} Hz. ¿Cuál es su período, en milisegundos?"

pasos:
  - "T = 1 / f"

explicacion: |
  El período es la inversa de la frecuencia.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "calculo"]

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
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "funcionamiento"]

variables:
  vcc: uno_de([5, 9, 12, 15])
  u: redondear(2 * vcc / 3, 2)

respuesta: u
tipo: input
tolerancia_abs: 0.02

enunciado: "Un 555 se alimenta con {vcc} V. ¿Qué tensión de umbral superior vigila el comparador, en V? (redondeá a dos decimales)"

pasos:
  - "Umbral superior = 2 Vcc / 3"

explicacion: |
  Dos tercios de la alimentación.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "funcionamiento"]

variables:
  vcc: uno_de([6, 9, 12, 15])
  u: redondear(vcc / 3, 2)

respuesta: u
tipo: input
tolerancia_abs: 0.02

enunciado: "Un 555 se alimenta con {vcc} V. ¿Qué tensión de umbral inferior vigila el comparador, en V? (redondeá a dos decimales)"

pasos:
  - "Umbral inferior = Vcc / 3"

explicacion: |
  Un tercio de la alimentación.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "avanzado"
  tags: ["555", "astable"]

respuesta: verdadero
tipo: vf

enunciado: "En la configuración astable clásica del 555, el ciclo de trabajo es siempre mayor que 50 %."

explicacion: |
  Porque R1 suma tiempo en alto pero no en bajo.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "funcionamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El 555 tiene un divisor interno de tres resistencias iguales."

explicacion: |
  Define los umbrales de Vcc/3 y 2Vcc/3.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555"]

enunciado: "La versión más común del 555 tiene..."
tipo: mc
opciones_explicitas:
  - "Ocho patas"
  - "Cuatro patas"
  - "Dieciséis patas"
respuesta: "Ocho patas"

explicacion: |
  Se presenta en encapsulado DIP-8.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "funcionamiento"]

enunciado: "En el modo astable, el capacitor se descarga a través de..."
tipo: mc
opciones_explicitas:
  - "R2"
  - "R1 solamente"
  - "Ninguna resistencia"
respuesta: "R2"

explicacion: |
  Por eso el tiempo en bajo depende solo de R2.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "aplicaciones"]

enunciado: "Un uso típico del 555 es..."
tipo: mc
opciones_explicitas:
  - "Hacer destellar un LED"
  - "Convertir alterna en continua"
  - "Medir temperatura"
respuesta: "Hacer destellar un LED"

explicacion: |
  También generar tonos y temporizar luces.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "avanzado"
  tags: ["555", "aplicaciones"]

enunciado: "Para una frecuencia muy precisa, como la de un microcontrolador, se usa..."
tipo: mc
opciones_explicitas:
  - "Un oscilador a cristal de cuarzo"
  - "Un 555 con potenciómetro"
  - "Un diodo Zener"
respuesta: "Un oscilador a cristal de cuarzo"

explicacion: |
  El cuarzo es mucho más estable.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "monoestable"]

respuesta: verdadero
tipo: vf

enunciado: "El 555 monoestable necesita un pulso de disparo para generar su pulso de salida."

explicacion: |
  Sin disparo permanece en su estado estable.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "intermedio"
  tags: ["555", "vocabulario"]

tipo: completar
enunciado: "La proporción del período durante la cual la salida está en alto se llama ciclo de ___."
respuestas_validas:
  - "trabajo"
  - "servicio"
  - "útil"

explicacion: |
  También se llama duty cycle.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "basico"
  tags: ["555", "vocabulario"]

enunciado: "Una frecuencia de 1 kHz equivale a un período de..."
tipo: mc
opciones_explicitas:
  - "1 ms"
  - "1 s"
  - "1 µs"
respuesta: "1 ms"

explicacion: |
  T = 1 / 1000 Hz.
```

```
metadata:
  materia: "electronica"
  tema: "temporizador_555_y_osciladores"
  nivel: "avanzado"
  tags: ["555", "funcionamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Dentro del 555 hay dos comparadores que vigilan la tensión del capacitor externo."

explicacion: |
  Uno detecta Vcc/3 y el otro 2Vcc/3.
```

## Sección: transistor-como-interruptor-y-amplificador (22 preguntas)

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt"]

enunciado: "Los tres terminales de un transistor bipolar son..."
tipo: mc
opciones_explicitas:
  - "Base, colector y emisor"
  - "Ánodo, cátodo y puerta"
  - "Entrada, salida y masa"
respuesta: "Base, colector y emisor"

explicacion: |
  B, C y E.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt"]

enunciado: "La idea central de un transistor bipolar es que..."
tipo: mc
opciones_explicitas:
  - "Una corriente pequeña de base controla una corriente grande de colector"
  - "Almacena carga como un capacitor"
  - "Convierte alterna en continua"
respuesta: "Una corriente pequeña de base controla una corriente grande de colector"

explicacion: |
  La relación entre ambas es la ganancia β.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt"]

tipo: completar
enunciado: "La ganancia de corriente de un transistor se representa con la letra griega ___."
respuestas_validas:
  - "beta"
  - "β"

explicacion: |
  IC = β × IB.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt", "calculo"]

variables:
  ib: uno_de([0.05, 0.1, 0.2, 0.5])
  beta: uno_de([50, 100, 150, 200])
  ic: redondear(ib * beta, 2)

respuesta: ic
tipo: input
tolerancia_abs: 0.05

enunciado: "Un transistor en región activa tiene β = {beta} y una corriente de base de {ib} mA. ¿Cuánto vale la corriente de colector, en mA?"

pasos:
  - "IC = β × IB"

explicacion: |
  La corriente de colector es β veces la de base.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt", "calculo"]

variables:
  ic: uno_de([10, 20, 50, 100])
  beta: uno_de([50, 100, 200])
  ib: redondear(ic / beta, 3)

respuesta: ib
tipo: input
tolerancia_abs: 0.002

enunciado: "Un transistor con β = {beta} debe conducir {ic} mA de colector. ¿Qué corriente de base necesita, en mA?"

pasos:
  - "IB = IC / β"

explicacion: |
  Se despeja IB.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "intermedio"
  tags: ["bjt", "calculo"]

variables:
  ic: uno_de([10, 20, 50, 100])
  ib: uno_de([0.1, 0.2, 0.5, 1])
  ie: redondear(ic + ib, 2)

respuesta: ie
tipo: input
tolerancia_abs: 0.02

enunciado: "Un transistor tiene IC = {ic} mA e IB = {ib} mA. ¿Cuánto vale IE, en mA?"

pasos:
  - "IE = IC + IB"

explicacion: |
  La corriente de emisor es la suma de las otras dos.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt", "regiones"]

enunciado: "En la región de corte, el transistor se comporta como..."
tipo: mc
opciones_explicitas:
  - "Un interruptor abierto"
  - "Un interruptor cerrado"
  - "Un amplificador"
respuesta: "Un interruptor abierto"

explicacion: |
  No hay corriente de base ni de colector.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt", "regiones"]

enunciado: "En saturación, el transistor se comporta como..."
tipo: mc
opciones_explicitas:
  - "Un interruptor cerrado"
  - "Un interruptor abierto"
  - "Una resistencia alta"
respuesta: "Un interruptor cerrado"

explicacion: |
  VCE queda muy baja.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt", "regiones"]

enunciado: "El transistor funciona como amplificador en la región..."
tipo: mc
opciones_explicitas:
  - "Activa"
  - "De corte"
  - "De saturación"
respuesta: "Activa"

explicacion: |
  Allí IC = β × IB.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt"]

enunciado: "Para que un NPN de silicio conduzca, la unión base-emisor necesita aproximadamente..."
tipo: mc
opciones_explicitas:
  - "0,7 V"
  - "5 V"
  - "0,07 V"
respuesta: "0,7 V"

explicacion: |
  Igual que un diodo de silicio.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "intermedio"
  tags: ["bjt", "calculo"]

variables:
  vin: uno_de([3.3, 5, 9, 12])
  ib: uno_de([0.5, 1, 2, 5])
  rb: redondear((vin - 0.7) / (ib / 1000), 0)

respuesta: rb
tipo: input
tolerancia_abs: 2

enunciado: "Un transistor se maneja con una señal de {vin} V y se quiere una corriente de base de {ib} mA. ¿Qué resistencia de base hace falta, en Ω?"

pasos:
  - "RB = (Vin − 0,7 V) / IB"
  - "Convertir mA a A"

explicacion: |
  Se resta la caída base-emisor y se aplica Ohm.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "avanzado"
  tags: ["bjt", "calculo"]

variables:
  ic: uno_de([50, 100, 200])
  beta: uno_de([50, 100])
  ibmin: redondear(ic / beta, 2)

respuesta: ibmin
tipo: input
tolerancia_abs: 0.02

enunciado: "Para encender una carga de {ic} mA con un transistor de β = {beta}, ¿cuál es la corriente de base mínima, en mA?"

pasos:
  - "IB = IC / β"

explicacion: |
  En la práctica se usa el doble para asegurar la saturación.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "avanzado"
  tags: ["bjt", "calculo"]

variables:
  vce: uno_de([2, 4, 6, 8])
  ic: uno_de([0.05, 0.1, 0.2])
  p: redondear(vce * ic * 1000, 0)

respuesta: p
tipo: input
tolerancia_abs: 1

enunciado: "Un transistor tiene VCE = {vce} V e IC = {ic} A. ¿Qué potencia disipa, en mW?"

pasos:
  - "P = VCE × IC"
  - "Convertir W a mW"

explicacion: |
  La potencia es el producto de VCE por IC.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt"]

respuesta: verdadero
tipo: vf

enunciado: "Sin resistencia de base, la corriente en la unión base-emisor puede destruir el transistor."

explicacion: |
  La resistencia limita la corriente de base.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "intermedio"
  tags: ["bjt"]

respuesta: falso
tipo: vf

enunciado: "El valor de β es exactamente el mismo para todos los transistores del mismo modelo."

explicacion: |
  Varía mucho entre ejemplares y con la temperatura.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "intermedio"
  tags: ["bjt", "proteccion"]

enunciado: "Si el transistor maneja un relé, conviene colocar..."
tipo: mc
opciones_explicitas:
  - "Un diodo en paralelo con la bobina"
  - "Un capacitor en serie"
  - "Otra resistencia en la base"
respuesta: "Un diodo en paralelo con la bobina"

explicacion: |
  Protege al transistor de los picos al apagar.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "intermedio"
  tags: ["bjt", "aplicaciones"]

enunciado: "Un microcontrolador puede encender un motor pequeño usando un transistor porque..."
tipo: mc
opciones_explicitas:
  - "La señal débil de un pin controla una corriente mayor"
  - "El pin entrega corriente ilimitada"
  - "El motor genera la señal"
respuesta: "La señal débil de un pin controla una corriente mayor"

explicacion: |
  Los pines entregan poca corriente.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "avanzado"
  tags: ["bjt", "amplificador"]

enunciado: "Polarizar un transistor amplificador significa..."
tipo: mc
opciones_explicitas:
  - "Fijarle un punto de trabajo en la región activa"
  - "Conectarlo a la red eléctrica"
  - "Quitarle la base"
respuesta: "Fijarle un punto de trabajo en la región activa"

explicacion: |
  Normalmente con un divisor de tensión en la base.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "intermedio"
  tags: ["bjt", "amplificador"]

respuesta: verdadero
tipo: vf

enunciado: "La ganancia de tensión de un amplificador compara la variación de la salida con la de la entrada."

explicacion: |
  Es la relación entre ambas.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt"]

enunciado: "Los dos tipos de transistor bipolar son..."
tipo: mc
opciones_explicitas:
  - "NPN y PNP"
  - "AND y OR"
  - "N y P únicamente en diodos"
respuesta: "NPN y PNP"

explicacion: |
  Se diferencian en la polaridad.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "avanzado"
  tags: ["bjt"]

respuesta: falso
tipo: vf

enunciado: "La corriente de emisor es siempre menor que la de colector."

explicacion: |
  IE = IC + IB, entonces es mayor.
```

```
metadata:
  materia: "electronica"
  tema: "transistor_como_interruptor_y_amplificador"
  nivel: "basico"
  tags: ["bjt", "regiones"]

tipo: completar
enunciado: "Cuando no hay corriente de base, el transistor está en la región de ___."
respuestas_validas:
  - "corte"

explicacion: |
  No conduce.
```

## Sección: amplificador-operacional (23 preguntas)

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "Un amplificador operacional tiene..."
tipo: mc
opciones_explicitas:
  - "Una entrada inversora y una no inversora"
  - "Una sola entrada"
  - "Tres entradas iguales"
respuesta: "Una entrada inversora y una no inversora"

explicacion: |
  Amplifica la diferencia entre ambas.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "En el modelo ideal, la ganancia del operacional (sin realimentación) es..."
tipo: mc
opciones_explicitas:
  - "Muy grande, tendiendo a infinito"
  - "Igual a uno"
  - "Cero"
respuesta: "Muy grande, tendiendo a infinito"

explicacion: |
  Por eso se usa realimentación.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "En el modelo ideal, la resistencia de entrada es..."
tipo: mc
opciones_explicitas:
  - "Muy alta"
  - "Muy baja"
  - "Igual a la de salida"
respuesta: "Muy alta"

explicacion: |
  Casi no toma corriente de la señal.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "En el modelo ideal, la resistencia de salida es..."
tipo: mc
opciones_explicitas:
  - "Muy baja"
  - "Muy alta"
  - "Infinita"
respuesta: "Muy baja"

explicacion: |
  Puede entregar su tensión sin que la carga la altere.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "La realimentación negativa conecta..."
tipo: mc
opciones_explicitas:
  - "Una parte de la salida a la entrada inversora"
  - "La salida a la alimentación"
  - "Las dos entradas a masa"
respuesta: "Una parte de la salida a la entrada inversora"

explicacion: |
  Así la ganancia depende de las resistencias externas.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp"]

respuesta: verdadero
tipo: vf

enunciado: "Con realimentación negativa y operación lineal, las dos entradas del operacional ideal quedan al mismo potencial."

explicacion: |
  Es el llamado cortocircuito virtual.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp", "calculo"]

variables:
  rf: uno_de([10000, 20000, 47000, 100000])
  rin: uno_de([1000, 2000, 10000])
  av: redondear(-rf / rin, 2)

respuesta: av
tipo: input
tolerancia_abs: 0.05

enunciado: "Un amplificador inversor tiene Rf = {rf} Ω y Rin = {rin} Ω. ¿Cuánto vale su ganancia? (con signo)"

pasos:
  - "Av = −Rf / Rin"

explicacion: |
  La ganancia es negativa porque invierte la señal.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp", "calculo"]

variables:
  rf: uno_de([10000, 20000, 50000])
  rin: uno_de([1000, 2000, 5000, 10000])
  vin: uno_de([0.1, 0.2, 0.5])
  vo: redondear(-rf / rin * vin, 2)

respuesta: vo
tipo: input
tolerancia_abs: 0.02

enunciado: "Un amplificador inversor con Rf = {rf} Ω y Rin = {rin} Ω recibe {vin} V. ¿Cuánto vale la salida, en V? (con signo)"

pasos:
  - "Vo = −Rf / Rin × Vin"

explicacion: |
  Se multiplica la ganancia por la entrada.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp", "calculo"]

variables:
  rf: uno_de([9000, 10000, 20000, 47000])
  rg: uno_de([1000, 2000, 10000])
  av: redondear(1 + rf / rg, 2)

respuesta: av
tipo: input
tolerancia_abs: 0.05

enunciado: "Un amplificador no inversor tiene Rf = {rf} Ω y Rg = {rg} Ω. ¿Cuánto vale su ganancia?"

pasos:
  - "Av = 1 + Rf / Rg"

explicacion: |
  Siempre es mayor o igual que 1.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp", "calculo"]

variables:
  rf: uno_de([9000, 10000, 20000])
  rg: uno_de([1000, 2000, 10000])
  vin: uno_de([0.1, 0.2, 0.5])
  vo: redondear((1 + rf / rg) * vin, 2)

respuesta: vo
tipo: input
tolerancia_abs: 0.02

enunciado: "Un amplificador no inversor con Rf = {rf} Ω y Rg = {rg} Ω recibe {vin} V. ¿Cuánto vale la salida, en V?"

pasos:
  - "Vo = (1 + Rf / Rg) × Vin"

explicacion: |
  La salida está en fase con la entrada.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "avanzado"
  tags: ["opamp", "calculo"]

variables:
  rin: uno_de([1000, 2000, 5000])
  g: uno_de([5, 10, 20])
  rf: rin * g

respuesta: rf
tipo: input
tolerancia_abs: 1

enunciado: "Se quiere un amplificador inversor de ganancia −{g} con Rin = {rin} Ω. ¿Qué Rf hace falta, en Ω?"

pasos:
  - "Rf = |Av| × Rin"

explicacion: |
  Se despeja Rf de la fórmula de ganancia.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "El seguidor de tensión tiene una ganancia de..."
tipo: mc
opciones_explicitas:
  - "1"
  - "10"
  - "0"
respuesta: "1"

explicacion: |
  Copia la entrada y aísla etapas.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp"]

respuesta: verdadero
tipo: vf

enunciado: "El seguidor de tensión sirve para aislar etapas porque toma muy poca corriente de la fuente de señal."

explicacion: |
  Tiene una resistencia de entrada muy alta.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

respuesta: falso
tipo: vf

enunciado: "La salida de un amplificador inversor está en fase con la entrada."

explicacion: |
  Está invertida respecto de la entrada.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp"]

respuesta: falso
tipo: vf

enunciado: "Un amplificador no inversor puede tener una ganancia menor que 1."

explicacion: |
  Av = 1 + Rf / Rg es siempre mayor o igual que 1.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp", "comparador"]

enunciado: "Un operacional sin realimentación que compara dos tensiones se llama..."
tipo: mc
opciones_explicitas:
  - "Comparador"
  - "Seguidor"
  - "Integrador"
respuesta: "Comparador"

explicacion: |
  Su salida satura en uno u otro extremo.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp", "comparador"]

enunciado: "En un comparador, si la entrada no inversora es mayor que la inversora, la salida..."
tipo: mc
opciones_explicitas:
  - "Satura hacia la tensión positiva"
  - "Satura hacia la negativa"
  - "Vale cero"
respuesta: "Satura hacia la tensión positiva"

explicacion: |
  Por la ganancia enorme sin realimentación.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp"]

enunciado: "Si el cálculo da una salida mayor que la alimentación, en la práctica..."
tipo: mc
opciones_explicitas:
  - "La señal se recorta"
  - "El operacional amplifica más"
  - "La alimentación aumenta"
respuesta: "La señal se recorta"

explicacion: |
  La salida no puede superar las tensiones de alimentación.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "avanzado"
  tags: ["opamp", "calculo"]

variables:
  vcc: uno_de([5, 9, 12])
  vo: vcc

respuesta: vo
tipo: input
tolerancia_abs: 0.1

enunciado: "Un amplificador con ganancia alta recibe una señal que calcularía una salida de 20 V, pero se alimenta con {vcc} V (salida positiva máxima aproximada igual a la alimentación). ¿Cuánto vale la salida, en V?"

pasos:
  - "La salida no supera la alimentación"

explicacion: |
  El operacional real satura cerca de la tensión de alimentación.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "avanzado"
  tags: ["opamp"]

enunciado: "Con varias entradas conectadas a través de resistencias a la entrada inversora, se obtiene un..."
tipo: mc
opciones_explicitas:
  - "Sumador inversor"
  - "Seguidor"
  - "Comparador"
respuesta: "Sumador inversor"

explicacion: |
  Suma las entradas con sus ganancias.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

tipo: completar
enunciado: "Para que la ganancia dependa de los componentes externos se usa realimentación ___."
respuestas_validas:
  - "negativa"

explicacion: |
  Estabiliza y fija la ganancia.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "avanzado"
  tags: ["opamp"]

respuesta: falso
tipo: vf

enunciado: "La ganancia de un operacional real se mantiene igual en todas las frecuencias."

explicacion: |
  Se reduce a frecuencias altas.
```

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp", "aplicaciones"]

enunciado: "Un uso típico del operacional es..."
tipo: mc
opciones_explicitas:
  - "Acondicionar la señal de un sensor"
  - "Rectificar la red"
  - "Almacenar datos"
respuesta: "Acondicionar la señal de un sensor"

explicacion: |
  Amplifica y adapta señales pequeñas.
```

