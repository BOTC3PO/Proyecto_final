### 1 — Ritmo vs. Pulso
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["ritmo", "pulso", "conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "En la danza, el ritmo y el pulso son conceptos idénticos que se mueven siempre de la misma manera en el tiempo."

explicacion: |
  Falso. El pulso es la unidad básica de tiempo (el latido constante), mientras que el ritmo es la organización de acentos y silencios sobre ese pulso. El ritmo puede ser complejo y cambiar, mientras que el pulso suele ser la referencia constante.
```

### 2 — El error de la expresión corporal
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["expresion_corporal", "lenguaje_artistico"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un bailarín que solo mueve los brazos sin mirar al público", "una comunicación efectiva"],
    ["Un bailarín que utiliza todo su cuerpo para transmitir una emoción", "una comunicación efectiva"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["una comunicación efectiva", "una expresión mecánica", "un error de coordinación", "una falta de técnica"]

enunciado: "Si un bailarín realiza el siguiente movimiento: {escenarios[escenario_idx][0]}, esto se considera ___."

explicacion: |
  La expresión corporal requiere la integración de todo el cuerpo y la intención comunicativa para ser considerada un lenguaje artístico completo.
```

### 3 — Secuencia de la percepción rítmica
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "intermedio"
  tags: ["secuencia", "percepcion", "ritmo"]

opciones_explicitas: ["Escuchar el sonido", "Sentir el pulso", "Ejecutar el movimiento rítmico"]
respuesta: ["Escuchar el sonido", "Sentir el pulso", "Ejecutar el movimiento rítmico"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que sigue un bailarín para interpretar una pieza musical de forma rítmica:"

explicacion: |
  Primero se debe percibir el estímulo sonoro, luego internalizar la pulsación (pulso) para luego poder traducir eso en movimiento coordinado.
```

### 4 — La confusión del tiempo musical
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "avanzado"
  tags: ["tiempo_musical", "acento", "ritmo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El acento cae en el tiempo débil", "un ritmo irregular"],
    ["El acento cae en el tiempo fuerte", "un ritmo regular"]
  ]

respuesta: casos[caso_idx][1]
tipo: completar
respuestas_validas: ["un ritmo irregular", "un ritmo regular"]

enunciado: "Si en una danza el acento rítmico se desplaza y ___, estamos ante ___."

explicacion: |
  La regularidad rítmica depende de la consistencia de los acentos en los tiempos fuertes. Si el acento se desplaza, la percepción del tiempo cambia.
```

### 5 — El cuerpo como instrumento
```
metadata:
  materia: "arte"
  tema: "danza_ritmo_tiempo_expresion_corporal"
  nivel: "basico"
  tags: ["expresion_corporal", "lenguaje"]

respuesta: "lenguaje"
tipo: completar
respuestas_validas: ["lenguaje", "ruido", "movimiento", "instinto"]

enunciado: "Cuando la danza utiliza el cuerpo para transmitir ideas, emociones o conceptos sin necesidad de palabras, el cuerpo actúa como un ___ artístico."

explicacion: |
  La expresión corporal es la capacidad del cuerpo para funcionar como un sistema de comunicación no verbal, transformando el movimiento en lenguaje.
```