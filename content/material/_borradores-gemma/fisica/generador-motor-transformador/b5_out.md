### 1 — Conversión de energía en un motor
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["electromagnetismo", "motor"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["un ventilador de techo", "energía eléctrica"], ["un taladro de mano", "energía eléctrica"]]
  salida: [["energía mecánica", "movimiento"], ["energía mecánica", "rotación"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["energía mecánica", "energía térmica", "energía química"]

enunciado: "Un motor eléctrico, como el de {datos[escenario_idx][0]}, funciona transformando {datos[escenario_idx][1]} en {datos[escenario_idx][1]}."

explicacion: |
  El motor eléctrico consume energía eléctrica para producir movimiento (energía mecánica).
```

### 2 — El papel del transformador
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["transformador", "voltaje"]

variables:
  caso_idx: uno_de([0,1])
  info: [["aumentar el voltaje", "bajar el voltaje"], ["aumentar el voltaje", "bajar el voltaje"]]

respuesta: info[caso_idx][0]
tipo: mc
opciones_explicitas: ["aumentar el voltaje", "bajar el voltaje", "cambiar la frecuencia"]

enunciado: "Un transformador conectado a una red de alta tensión se utiliza principalmente para {info[caso_idx][0]} antes de distribuirla a las casas."

explicacion: |
  Los transformadores permiten elevar o disminuir el voltaje para optimizar la transmisión y el uso doméstico.
```

### 3 — Generador y Ley de Faraday
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "avanzado"
  tags: ["induccion", "generador"]

variables:
  tipo_gen: uno_de([0,1])
  principio: [["movimiento mecánico", "energía eléctrica"], ["energía eléctrica", "energía mecánica"]]

respuesta: principio[tipo_gen][1]
tipo: vf

enunciado: "En un generador eléctrico, la conversión de {principio[tipo_gen][0]} en {principio[tipo_gen][1]} se basa en la inducción electromagnética."

explicacion: |
  El generador convierte energía mecánica (movimiento) en energía eléctrica mediante un campo magnético variable.
```

### 4 — Componentes de un transformador
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["componentes", "transformador"]

respuesta: ["Núcleo ferromagnético", "Bobina primaria", "Bobina secundaria"]
tipo: ordenar

opciones_explicitas: ["Núcleo ferromagnético", "Bobina primaria", "Bobina secundaria"]

enunciado: "Ordena los componentes esenciales de un transformador ideal desde el que recibe la energía hasta el que la entrega, pasando por el medio de transmisión:"

explicacion: |
  La energía entra por la bobina primaria, se transmite a través del núcleo ferromagnético y sale por la bobina secundaria.
```

### 5 — Diferencia fundamental de flujo
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["flujo_energia"]

variables:
  tipo_dispositivo: uno_de([0,1])
  flujo: [["Eléctrica $\\rightarrow$ Mecánica", "Mecánica $\\rightarrow$ Eléctrica"], ["Eléctrica $\\rightarrow$ Mecánica", "Mecánica $\\rightarrow$ Eléctrica"]]

respuesta: flujo[tipo_dispositivo][0]
tipo: completar
respuestas_validas: ["Eléctrica $\\rightarrow$ Mecánica", "Mecánica $\\rightarrow$ Eléctrica"]

enunciado: "La dirección del flujo de energía en un motor es ___."

explicacion: |
  El motor toma electricidad y la convierte en movimiento. El generador hace lo opuesto.
```