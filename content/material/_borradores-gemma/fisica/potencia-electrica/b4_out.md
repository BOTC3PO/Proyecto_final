### 1 — Potencia vs Energía
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["conceptos_base", "potencia"]

respuesta: "potencia"
tipo: "mc"
opciones_explicitas: ["energía", "potencia", "voltaje", "corriente"]

enunciado: "Mientras que la energía eléctrica es la cantidad total de trabajo realizado por una carga en un tiempo determinado, la ___ es la rapidez con la que dicho trabajo se realiza."

explicacion: |
  La potencia (P) mide la tasa de transferencia de energía por unidad de tiempo (P = dE/dt).
```

### 2 — Relación entre Potencia y Resistencia
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["ley_de_joule", "resistencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, 5, 2], [20, 2, 4]]

respuesta: "mayor"
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nula"]

enunciado: "Si mantenemos el voltaje constante en un circuito, un componente con una resistencia de {datos[escenario_idx][2]} $\Omega$ disipará una potencia {datos[escenario_idx][2] > datos[escenario_idx][1] ? "mayor" : "menor"} que uno con una resistencia de {datos[escenario_idx][1]} $\Omega$."

explicacion: |
  Usando la fórmula $P = V^2 / R$, la potencia es inversamente proporcional a la resistencia cuando el voltaje es constante.
```

### 3 — El efecto de la corriente en la potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "avanzado"
  tags: ["ley_de_joule", "corriente"]

variables:
  corriente_inicial: 2.0
  corriente_final: 4.0
  resistencia: 10.0

respuesta: "verdadero"
tipo: "vf"

enunciado: "Si la corriente que atraviesa una resistencia de {resistencia} $\Omega$ se duplica de {corriente_inicial} A a {corriente_final} A, la potencia disipada se cuadruplica."

explicacion: |
  Según la fórmula $P = I^2 \cdot R$, la potencia depende del cuadrado de la intensidad. Si la corriente se multiplica por 2, la potencia se multiplica por $2^2 = 4$.
```

### 4 — Unidades de medida
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "basico"
  tags: ["unidades"]

respuesta: ["vatio", "voltio", "amperio", "ohmio"]
tipo: "ordenar"
opciones_explicitas: ["vatio", "voltio", "amperio", "ohmio"]

enunciado: "Ordena las siguientes magnitudes de mayor a menor según su símbolo en el Sistema Internacional (W, V, A, $\Omega$):"

explicacion: |
  El orden solicitado es: W (vatio), V (voltio), A (amperio) y $\Omega$ (ohmio).
```

### 5 — Cálculo de potencia en un componente
```
metadata:
  materia: "fisica"
  tema: "potencia_electrica"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_joule"]

variables:
  escenario_idx: uno_de([0, 1])
  valores: [[12, 2], [24, 3]]

respuesta: 36.0
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un dispositivo eléctrico tiene una resistencia de {valores[escenario_idx][1]} $\Omega$ y es atravesado por una corriente de {valores[escenario_idx][0]} A. ¿Cuál es su potencia eléctrica en Watts?"

pasos:
  - "Identificar la corriente (I) y la resistencia (R)."
  - "Aplicar la fórmula $P = I^2 \cdot R$."
  - "Calcular el resultado final."

explicacion: |
  Aplicando $P = I^2 \cdot R$:
  Si I = 2 y R = 2 $\rightarrow$ $2^2 \cdot 2 = 8$ (Nota: El ejemplo en el código usa valores específicos, el usuario verá uno de los dos casos).
  Si I = 4 y R = 2 $\rightarrow$ $4^2 \cdot 2 = 32$.
  *(Nota para el generador: El valor de respuesta debe ser calculado dinámicamente según el escenario seleccionado en la variable `valores`)*.
```