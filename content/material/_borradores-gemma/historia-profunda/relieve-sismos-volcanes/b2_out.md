### 1 — Origen de los sismos
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["placas_tectonicas", "sismos"]

tipo: mc
opciones_explicitas: ["Fricción entre placas", "Erosión eólica", "Movimiento de las mareas", "Ciclos solares"]

enunciado: "Los sismos se producen principalmente debido a la acumulación y posterior liberación repentina de energía causada por la ________ entre las placas tectónicas."

explicacion: |
  Los sismos ocurren cuando las fuerzas de fricción entre las placas tectónicas impiden su movimiento, acumulando energía elástica que se libera súbitamente en forma de ondas sísmicas.
```

### 2 — Localización sísmica
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["placas_tectonicas", "bordes_de_placas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["el Cinturón de Fuego del Pacífico", "bordes de placas tectónicas"],
    ["la zona central de una placa continental", "zonas de estabilidad tectónica"]
  ]

tipo: mc
opciones_explicitas: ["Bordes de placas tectónicas", "Zonas de estabilidad tectónica", "Cimas de las montañas", "Fondos oceánicos estables"]

enunciado: "Los terremotos ocurren mayormente en los {escenarios[escenario_idx][1]}."

explicacion: |
  La mayor actividad sísmica se concentra en los límites o bordes de las placas tectónicas, donde la interacción entre ellas es constante.
```

### 3 — Mecanismo de liberación
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["energia", "friccion"]

tipo: completar
respuestas_validas: ["energía", "fuerza"]

enunciado: "Durante un sismo, la energía acumulada por la fricción se libera de forma repentina en forma de ________ sísmica."

explicacion: |
  La liberación de la energía elástica acumulada es lo que genera las ondas que viajan a través de la litosfera.
```

### 4 — Causas de la actividad sísmica
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["placas_tectonicas", "friccion"]

tipo: ordenar
opciones_explicitas: ["Movimiento de las placas", "Acumulación de tensión por fricción", "Liberación repentina de energía", "Ondas sísmicas"]

enunciado: "Ordena el proceso físico que da lugar a un terremoto, desde el movimiento inicial hasta la propagación de las ondas:"

explicacion: |
  El proceso comienza con el movimiento de las placas, seguido de la fricción que acumula tensión, la ruptura que libera energía y finalmente la propagación de ondas.
```

### 5 — Relación tectónica
```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "avanzado"
  tags: ["placas_tectonicas", "friccion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["fricción", "movimiento constante"],
    ["presión", "estabilidad absoluta"]
  ]

tipo: input
tolerancia_abs: 0

enunciado: "Si las placas tectónicas se encuentran en un estado de {casos[caso_idx][0]}, la acumulación de tensión es mayor que en un estado de {casos[caso_idx][1]}."

explicacion: |
  A mayor fricción o resistencia al movimiento entre placas, mayor es la acumulación de energía elástica que, al liberarse, provoca sismos de mayor magnitud.
```