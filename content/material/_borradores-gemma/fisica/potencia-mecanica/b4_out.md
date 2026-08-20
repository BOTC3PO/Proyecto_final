### 1 — Potencia vs Trabajo
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "velocidad"
tipo: completar
respuestas_validas: ["velocidad", "rapidez", "aceleracion"]

enunciado: "Mientras que el trabajo describe la transferencia de energía en un proceso, la potencia describe la ___ con la que se realiza dicho trabajo."

explicacion: |
  La potencia es la rapidez con la que se realiza un trabajo o se transfiere energía. Se define matemáticamente como el trabajo realizado dividido por el tiempo empleado ($P = W/t$).
```

### 2 — Relación entre Trabajo y Tiempo
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([["Realiza 100J en 2s", 20, 50], ["Realiza 100J en 5s", 20, 20], ["Realiza 100J en 10s", 20, 10]])
  valor_w: escenario[0]
  valor_t: escenario[1]
  valor_p: escenario[2]

respuesta: valor_p
tipo: mc
opciones_explicitas: [20, 50, 10, 100]

enunciado: "Si un sistema realiza un trabajo de {valor_w} Joules en un tiempo de {valor_t} segundos, su potencia mecánica es de ___ Watts."

explicacion: |
  Aplicando la fórmula $P = W/t$, tenemos que $P = {valor_w} / {valor_t} = {valor_p}$ W.
```

### 3 — Potencia y Tiempo (Verdadero o Falso)
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos", "tiempo"]

respuesta: falso
tipo: vf

enunciado: "Si se realiza el mismo trabajo en el doble de tiempo, la potencia mecánica resultante será el doble de la potencia original."

explicacion: |
  Falso. Como la potencia es inversamente proporcional al tiempo ($P \propto 1/t$), si el tiempo se duplica, la potencia se reduce a la mitad.
```

### 4 — Unidades de Medida
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

respuesta: "W"
tipo: mc
opciones_explicitas: ["J", "W", "N", "m/s"]

enunciado: "En el Sistema Internacional (SI), la unidad de potencia mecánica es el ___ (Watt), que equivale a un Joule por segundo."

explicacion: |
  El Watt (W) es la unidad derivada que combina la unidad de trabajo (Joule) y la de tiempo (segundo).
```

### 5 — Comparación de Escenarios
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["comparacion", "calculo"]

variables:
  caso: uno_de([[100, 2, 50], [200, 5, 40], [50, 10, 5]])
  w: caso[0]
  t: caso[1]
  p: caso[2]

respuesta: p
tipo: input
tolerancia_abs: 0

enunciado: "Un motor realiza un trabajo de {w} J en un intervalo de tiempo de {t} s. ¿Cuál es su potencia en Watts?"

pasos:
  - "Identificar el trabajo (W) y el tiempo (t)."
  - "Dividir el trabajo por el tiempo: P = W / t."

explicacion: |
  El cálculo realizado es $P = {w} / {t} = {p}$ W.
```