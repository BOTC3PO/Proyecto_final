### 1 — La relación entre voltaje y potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["potencia", "voltaje", "corriente"]

respuesta: "aumenta"
tipo: completar
respuestas_validas: ["aumenta"]

enunciado: "Si mantenemos la resistencia de un componente constante y aumentamos el voltaje aplicado, la potencia eléctrica consumida por dicho componente ___."

explicacion: |
  De la fórmula $P = V^2 / R$, se observa que la potencia es directamente proporcional al cuadrado del voltaje. Si el voltaje aumenta, la potencia aumenta.
```

### 2 — El error de la resistencia en serie
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["resistencia", "serie", "potencia"]

variables:
  escenario: uno_de([
    ["R1", "R2", "R3", "R1+R2+R3"],
    ["10", "20", "30", "60"]
  ])

respuesta: "R1+R2+R3"
tipo: mc
opciones_explicitas: ["R1", "R2", "R3", "R1+R2+R3"]

enunciado: "En un circuito en serie con tres resistencias, la resistencia equivalente que determina la potencia total entregada por la fuente es ___."

explicacion: |
  En un circuito en serie, la resistencia total es la suma de las resistencias individuales. La potencia total se calcula usando esta resistencia equivalente.
```

### 3 — ¿La potencia depende de la corriente?
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["booleano", "corriente", "potencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la resistencia de un conductor se mantiene constante y la corriente eléctrica se duplica, la potencia disipada en el conductor se cuadruplica."

explicacion: |
  Usando la fórmula $P = I^2 \cdot R$, si la corriente se multiplica por 2, la potencia se multiplica por $2^2 = 4$. Por lo tanto, es verdadero.
```

### 4 — Cálculo de potencia con caída de tensión
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_ohm"]

variables:
  datos: uno_de([
    [12, 2],
    [220, 5],
    [12, 0.5]
  ])

respuesta: 24.0
tipo: input
tolerancia_abs: 0.1

enunciado: "Un dispositivo eléctrico está conectado a una fuente de {datos[0]} V y por él circula una corriente de {datos[1]} A. ¿Cuál es su potencia eléctrica en Watts?"

pasos:
  - "Identificar el voltaje (V) y la corriente (I)."
  - "Aplicar la fórmula P = V * I."

explicacion: |
  La potencia se calcula multiplicando el voltaje por la intensidad: $P = 12\text{V} \cdot 2\text{A} = 24\text{W}$.
```

### 5 — Pasos para hallar potencia desde la resistencia
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["procedimiento", "resistencia", "voltaje"]]

opciones_explicitas: ["Calcular la corriente usando Ohm", "Multiplicar voltaje por corriente", "Calcular potencia final"]
respuesta: ["Calcular la corriente usando Ohm", "Multiplicar voltaje por corriente", "Calcular potencia final"]
tipo: ordenar

enunciado: "Si conoces el voltaje (V) y la resistencia (R) de una bombilla, pero no la corriente (I), ¿cuál es el orden lógico para hallar la potencia usando $P = V \cdot I$?"

explicacion: |
  Primero debes hallar la incógnita faltante ($I = V/R$) y luego aplicar la fórmula de potencia.
```