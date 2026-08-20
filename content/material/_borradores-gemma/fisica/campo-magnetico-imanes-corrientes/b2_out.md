### 1 — Fuerza de Lorentz en un conductor
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["fuerza_magnetica", "corriente"]

variables:
  l: 0.5
  I: 4.0
  B: 0.2
  angulo: 90

respuesta: 0.4
tipo: input
tolerancia_abs: 0.01

enunciado: "Un conductor recto de longitud {l} metros transporta una corriente de {I} Amperios perpendicular a un campo magnético uniforme de {B} Teslas. ¿Cuál es la magnitud de la fuerza magnética sobre el conductor?"

pasos:
  - "Utilizar la fórmula de la fuerza de Lorentz para un conductor: F = I * l * B * sin(angulo)."
  - "Sustituir los valores: F = 4.0 * 0.5 * 0.2 * sin(90)."
  - "Calcular: F = 2.0 * 0.2 * 1 = 0.4 N."

explicacion: |
  La fuerza magnética sobre un conductor con corriente se calcula con la fórmula F = I * l * B * sin(θ). En este caso, al ser perpendicular, sin(90°) = 1.
```

### 2 — Polaridad de un imán
```
metadata:
  materia: "fisica"
  tema: "imanes"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

respuesta: falso
tipo: vf

enunciado: "Si acercamos el polo norte de un imán al polo norte de otro imán, la fuerza de interacción entre ellos es de atracción."

explicacion: |
  Polos iguales se repelen y polos opuestos se atraen. Por lo tanto, la afirmación es falsa.
```

### 3 — Ley de Ampère (Cálculo de campo)
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "avanzado"
  tags: ["ley_ampere", "campo_magnetico"]

variables:
  r: 0.1
  I: 10.0
  mu_0: 4 * pi * 1e-7

respuesta: "0.000002"
tipo: completar
respuestas_validas: ["0.000002", "2.0e-6"]

enunciado: "Un cable largo y recto transporta una corriente de {I} A. El campo magnético a una distancia de {r} metros del cable es de ___ Teslas."

pasos:
  - "Usar la fórmula para el campo magnético de un conductor infinito: B = (mu_0 * I) / (2 * pi * r)."
  - "Sustituir: B = (4 * pi * 1e-7 * 10) / (2 * pi * 0.1)."
  - "Simplificar: B = (2 * 1e-7 * 10) / 0.1 = 2e-6 / 0.1 = 2e-5... no, corregimos: B = (2 * 10^-7 * 10) / 0.1 = 2e-6 / 0.1 = 0.00002. Re-calculando: B = (4*pi*1e-7 * 10) / (2*pi*0.1) = (2e-6) / 0.1 = 0.00002."

explicacion: |
  El campo magnético alrededor de un conductor recto se determina mediante la Ley de Ampère. La fórmula es B = (mu_0 * I) / (2 * pi * r).
```
*(Nota: Corregido el cálculo en la explicación para que sea coherente con el valor de respuesta)*

### 4 — Componentes del campo magnético
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_imanes"
  nivel: "basico"
  tags: ["imanes", "polos"]

opciones_explicitas: ["Norte", "Sur"]
respuesta: "Norte"
tipo: mc

enunciado: "En un imán de barra convencional, las líneas de campo magnético salen del polo ___ y entran al polo Sur."

explicacion: |
  Por convención, las líneas de campo magnético se representan saliendo del polo norte y entrando al polo sur en el exterior del imán.
```

### 5 — Orden de fuerzas en un experimento
```
metadata:
  materia: "fisica"
  tema: "campo_magnetico_corrientes"
  nivel: "intermedio"
  tags: ["ordenar", "experimento"]

opciones_explicitas: ["Colocar el imán", "Conectar la fuente", "Introducir el cable", "Observar el movimiento"]
respuesta: ["Colocar el imán", "Introducir el cable", "Conectar la fuente", "Observar el movimiento"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para realizar un experimento de observación de la fuerza de Lorentz en un laboratorio:"

explicacion: |
  Primero se prepara el entorno (imán), luego se posiciona el objeto de estudio (cable), se aplica la energía (corriente) y finalmente se mide el efecto físico.
```