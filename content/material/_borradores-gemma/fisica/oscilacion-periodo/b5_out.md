### 1 — El péndulo del reloj
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["pendulo", "periodo"]

variables:
  escenario: uno_de([["un péndulo de 1 metro", 2.0], ["un péndulo de 0.25 metros", 1.0]])
  idx: uno_de([0, 1])
  datos: [["un péndulo de 1 metro", 2.0], ["un péndulo de 0.25 metros", 1.0]]

enunciado: "En un reloj antiguo, observamos que {datos[idx][0]} completa un ciclo de vaivén en {datos[idx][1]} segundos. ¿Cuál es el periodo de este movimiento?"

respuesta: datos[idx][1]
tipo: input
tolerancia_abs: 0.1

explicacion: |
  El periodo (T) es el tiempo necesario para completar un ciclo completo de movimiento. En este caso, el tiempo dado es el periodo.
```

### 2 — El ritmo del corazón
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["frecuencia", "ritmo_cardiaco"]

variables:
  frecuencia_corazon: uno_de([60, 75, 120])

enunciado: "Un atleta tiene una frecuencia cardíaca de {frecuencia_corazon} latidos por minuto. Si consideramos cada latido como un ciclo de oscilación, ¿cuántos segundos tarda en realizar un solo latido (periodo)?"

pasos:
  - "Convertir la frecuencia de latidos/minuto a latidos/segundo: {frecuencia_corazon} / 60"
  - "Calcular el periodo como el inverso de la frecuencia: 1 / (frecuencia_corazon / 60)"

respuesta: 60 / frecuencia_corazon
tipo: input
tolerancia_abs: 0.01

explicacion: |
  El periodo es el inverso de la frecuencia. Si el atleta tiene {frecuencia_corazon} latidos por minuto, el periodo es 60/{frecuencia_corazon} segundos.
```

### 3 — El vaivén de un columpio
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["oscilacion", "conceptos"]

enunciado: "Si un niño en un columpio completa 10 oscilaciones completas en un tiempo total de 20 segundos, ¿cuál es el periodo de la oscilación?"

opciones_explicitas: ["0.5 s", "2.0 s", "20 s", "200 s"]
respuesta: "2.0 s"
tipo: mc

explicacion: |
  El periodo T se calcula dividiendo el tiempo total entre el número de oscilaciones: T = tiempo / n = 20s / 10 = 2.0 s.
```

### 4 — Conceptos de movimiento periódico
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "basico"
  tags: ["teoria"]

enunciado: "Un movimiento se considera periódico si se repite en intervalos de tiempo iguales. Si un objeto realiza un ciclo completo, ¿el tiempo transcurrido es el periodo?"

respuesta: verdadero
tipo: vf

explicacion: |
  Exactamente. Por definición, el periodo es el tiempo requerido para que el sistema complete una oscilación o ciclo completo.
```

### 5 — Fases del ciclo de un pistón
```
metadata:
  materia: "fisica"
  tema: "oscilacion_y_periodo"
  nivel: "intermedio"
  tags: ["fases", "ciclo"]

variables:
  estado_inicial: uno_de(["máximo desplazamiento positivo", "máximo desplazamiento negativo"])
  idx: uno_de([0, 1])
  secuencia: [["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"], ["máximo desplazamiento negativo", "punto de equilibrio", "máximo desplazamiento positivo", "punto de equilibrio"]]

enunciado: "Un pistón de motor realiza un movimiento oscilatorio. Si su estado inicial es {estado_inicial[idx]}, ordene los eventos que marcan un ciclo completo de oscilación."

opciones_explicitas: ["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"]
respuesta: ["máximo desplazamiento positivo", "punto de equilibrio", "máximo desplazamiento negativo", "punto de equilibrio"]
tipo: ordenar

explicacion: |
  Un ciclo completo debe pasar por todos los puntos de la trayectoria y regresar al punto de partida para ser considerado una oscilación cerrada.
```