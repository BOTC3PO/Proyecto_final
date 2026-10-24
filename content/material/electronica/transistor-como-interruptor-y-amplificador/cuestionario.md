# Electrónica — Transistor como interruptor y amplificador (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Terminales

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

### 2 — Idea central

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

### 3 — Letra de ganancia

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

### 4 — Corriente de colector

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

### 5 — Corriente de base

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

### 6 — Corriente de emisor

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

### 7 — Corte

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

### 8 — Saturación

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

### 9 — Región activa

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

### 10 — Unión base-emisor

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

### 11 — Resistencia de base

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

### 12 — Base mínima para saturar

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

### 13 — Potencia en el transistor

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

### 14 — Resistencia de base

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

### 15 — Beta constante

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

### 16 — Cargas inductivas

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

### 17 — Uso como interruptor

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

### 18 — Punto de trabajo

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

### 19 — Ganancia de tensión

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

### 20 — Tipos

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

### 21 — Emisor

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

### 22 — Región apagada

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
