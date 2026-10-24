### 1 — El motor eléctrico
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["electromagnetismo", "motor"]

respuesta: "convertir energía eléctrica en energía mecánica"
tipo: completar
respuestas_validas: ["convertir energía eléctrica en energía mecánica", "transformar electricidad en movimiento"]

enunciado: "La función principal de un motor eléctrico es ___."

explicacion: |
  Un motor eléctrico utiliza la fuerza de Lorentz (interacción entre un campo magnético y una corriente) para producir movimiento a partir de electricidad.
```

### 2 — El transformador
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["transformador", "inducion"]

opciones_explicitas: ["Aumenta o disminuye el voltaje", "Convierte corriente continua en alterna", "Produce movimiento mecánico"]
respuesta: "Aumenta o disminuye el voltaje"
tipo: mc

enunciado: "¿Cuál es la función principal de un transformador ideal?"

explicacion: |
  El transformador opera mediante inducción electromagnética para cambiar los niveles de tensión (voltaje) y corriente, manteniendo la frecuencia constante.
```

### 3 — El generador eléctrico
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["generador", "inducion"]

respuesta: verdadero
tipo: vf

enunciado: "Un generador eléctrico transforma energía mecánica en energía eléctrica mediante la inducción electromagnética."

explicacion: |
  Correcto. El movimiento de un conductor dentro de un campo magnético (o viceversa) induce una fuerza electromotriz (FEM) según la Ley de Faraday.
```

### 4 — Componentes de un motor
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["componentes", "motor"]

opciones_explicitas: ["Estator y Rotor", "Primario y Secundario", "Bobina y Núcleo"]
respuesta: "Estator y Rotor"
tipo: mc

enunciado: "En un motor eléctrico, las partes fijas y móviles se denominan respectivamente:"

explicacion: |
  El estator es la parte que permanece inmóvil, mientras que el rotor es la parte que gira para producir el trabajo mecánico.
```

### 5 — Flujo de energía
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["energia", "flujo"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [
    ["Generador", "Mecánica -> Eléctrica"],
    ["Motor", "Eléctrica -> Mecánica"],
    ["Transformador", "Eléctrica -> Eléctrica"]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Mecánica -> Eléctrica", "Eléctrica -> Mecánica", "Eléctrica -> Eléctrica"]

enunciado: "Si estamos ante un {escenario[idx][0]}, el flujo de energía es: ___."

explicacion: |
  Cada dispositivo tiene una conversión de energía distinta: el generador produce electricidad, el motor la consume para moverse, y el transformador solo cambia sus niveles.
```