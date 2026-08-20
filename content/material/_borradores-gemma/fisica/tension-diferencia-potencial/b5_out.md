### 1 — El cargador de un smartphone
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
respuesta: escenario[1]
tipo: mc

explicacion: |
  La diferencia de potencial (tensión) se mide en voltios (V) y representa la energía por unidad de carga que impulsa a los electrones a través de un circuito.
```

### 2 — El interruptor de la luz
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

### 3 — Pilas en serie
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
respuesta: datos[1]
tipo: mc

explicacion: |
  En una conexión en serie, las diferencias de potencial de cada componente se suman para obtener la tensión total del circuito.
```

### 4 — Relación carga y potencial
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
respuesta: caso[0][1]
tipo: completar

explicacion: |
  La diferencia de potencial (V) se define como el trabajo (W) realizado por unidad de carga (Q): V = W / Q.
```

### 5 — El proceso de carga de una batería
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
tipo: vf

explicacion: |
  Para que la carga fluya hacia la batería, la diferencia de potencial del cargador debe ser superior a la de la batería.
```