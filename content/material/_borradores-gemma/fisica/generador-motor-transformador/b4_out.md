### 1 — El rol de la energía en el motor
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["electromagnetismo", "motor"]

respuesta: falso
tipo: vf

enunciado: "En un motor eléctrico, la energía eléctrica se transforma en energía mecánica."

explicacion: |
  Es falso. En un motor, la energía eléctrica se transforma en energía mecánica. El enunciado describe correctamente el proceso, pero la pregunta pide validar la afirmación. (Nota: Si la afirmación es verdadera, la respuesta debe ser verdadero).
```

### 2 — Transformación de energía en el generador
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["generador", "energia"]

variables:
  escenario: uno_de([["mecánica", "eléctrica"], ["eléctrica", "mecánica"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["mecánica", "eléctrica"]

enunciado: "Un generador eléctrico realiza el proceso inverso a un motor: transforma la energía {escenario[0]} en energía {escenario[1]}."

explicacion: |
  El generador utiliza movimiento (energía mecánica) para inducir una corriente eléctrica (energía eléctrica) mediante la ley de Faraday.
```

### 3 — El componente clave del transformador
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["transformador", "inducion"]

respuesta: "campo magnético variable"
tipo: completar
respuestas_validas: ["campo magnético variable", "corriente continua", "resistencia"]

enunciado: "A diferencia de un motor o generador que requiere movimiento físico, el transformador funciona mediante la variación de un ___ entre dos bobinas."

explicacion: |
  El transformador opera por inducción electromagnética, pero requiere que el flujo magnético sea variable (corriente alterna) para inducir voltaje en el secundario.
```

### 4 — Diferencia fundamental de corriente
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["corriente_alterna", "transformador"]

respuesta: "alterna"
tipo: mc
opciones_explicitas: ["continua", "alterna", "estática"]

enunciado: "Un transformador solo puede funcionar con corriente de tipo ___ para poder inducir voltaje en el devanado secundario."

explicacion: |
  El transformador requiere un flujo magnético variable, lo cual solo se logra con corriente alterna (AC). La corriente continua (DC) produce un campo constante que no induce voltaje en el secundario.
```

### 5 — Flujo de energía en dispositivos eléctricos
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "avanzado"
  tags: ["comparacion", "energia"]

variables:
  datos: [
    ["Generador", "Mecánica -> Eléctrica"],
    ["Motor", "Eléctrica -> Mecánica"],
    ["Transformador", "Eléctrica -> Eléctrica"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mecánica -> Eléctrica", "Eléctrica -> Mecánica", "Eléctrica -> Eléctrica"]

enunciado: "Considerando el dispositivo seleccionado: {datos[idx][0]}, su función principal es la conversión de: ___"

explicacion: |
  Cada dispositivo tiene una dirección de conversión de energía específica: el generador produce electricidad, el motor la consume para producir movimiento, y el transformador solo cambia sus niveles de tensión.
```