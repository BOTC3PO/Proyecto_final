### 1 — Diferencia entre Corriente y Carga
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["carga", "corriente", "conceptos"]

respuesta: "corriente"
tipo: "completar"
respuestas_validas: ["corriente"]

enunciado: "Mientras que la carga eléctrica es una propiedad intrínseca de las partículas, la ___ es la medida del flujo de carga que atraviesa una sección transversal por unidad de tiempo."

explicacion: |
  La carga eléctrica es una propiedad estática, mientras que la corriente eléctrica es una magnitud dinámica que describe el movimiento de dichas cargas.
```

### 2 — Intensidad de corriente vs. Voltaje
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["voltaje", "corriente", "diferencia"]

variables:
  escenario: uno_de([
    ["un cable conectado a una batería de 9V", "9", "0.5"],
    ["un cable conectado a una batería de 12V", "12", "0.8"],
    ["un cable conectado a una batería de 5V", "5", "0.3"]
  ])

respuesta: escenario[2]
tipo: "mc"
opciones_explicitas: ["escenario[1]", "escenario[2]", "escenario[0]"]

enunciado: "Si mantenemos la resistencia constante, ¿cuál es la intensidad de corriente que circula por el circuito dado el voltaje de {escenario[0]}?"

pasos:
  - "Identificar el voltaje: {escenario[1]} V"
  - "Identificar la resistencia (asumida constante para el ejemplo)"
  - "Calcular I = V / R"

explicacion: |
  La intensidad de corriente es directamente proporcional al voltaje según la Ley de Ohm. Al aumentar el voltaje, la corriente aumenta proporcionalmente.
```

### 3 — Corriente Continua vs. Alterna
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["cc", "ca", "tipo_corriente"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es cierto que en la corriente continua (CC) la dirección y magnitud del flujo de carga cambian periódicamente con el tiempo, a diferencia de la corriente alterna (CA)?"

explicacion: |
  Es falso. Es al revés: en la corriente alterna (CA) el flujo cambia de dirección periódicamente, mientras que en la corriente continua (CC) el flujo es constante en dirección y magnitud.
```

### 4 — Unidades de medida
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

respuesta: "amperio"
tipo: "mc"
opciones_explicitas: ["voltio", "amperio", "ohmio", "culombio"]

enunciado: "La magnitud de la corriente eléctrica se mide en ___."

explicacion: |
  El amperio (A) es la unidad de intensidad de corriente en el SI, mientras que el voltio mide potencial y el ohmio la resistencia.
```

### 5 — Componentes de la corriente eléctrica
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["flujo", "carga", "orden"]

respuesta: ["carga", "movimiento", "corriente"]
tipo: "ordenar"
opciones_explicitas: ["carga", "movimiento", "corriente"]

enunciado: "Ordena los conceptos para describir el proceso físico que da origen a la corriente eléctrica: primero la existencia de ___, luego el ___ de estas a través de un conductor, y finalmente el fenómeno resultante llamado ___."

explicacion: |
  El proceso lógico es: 1. Presencia de carga, 2. Movimiento de carga, 3. Corriente eléctrica.
```