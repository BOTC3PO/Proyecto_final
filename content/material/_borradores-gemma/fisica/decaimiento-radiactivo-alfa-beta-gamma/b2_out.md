### 1 — Identificación de radiación alfa
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["nucleica", "particulas"]

enunciado: "Una partícula alfa consiste en un núcleo de helio. Por lo tanto, una partícula alfa está compuesta por ___ neutrones y ___ protones."

respuestas_validas: ["2", "2"]

respuesta: ["2", "2"]
tipo: completar

explicacion: |
  Una partícula alfa ($\alpha$) es idéntica al núcleo de un átomo de Helio-4, lo que significa que contiene 2 protones y 2 neutrones (carga +2 y masa 4).
```

### 2 — Decaimiento Beta negativa
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["beta", "nucleica"]

variables:
  escenario: uno_de([
    ["14", "14", "15", "14"],
    ["238", "238", "239", "238"],
    ["12", "12", "13", "12"]
  ])

enunciado: "Un núcleo radiactivo de un isótopo con número de masa {escenario[0]} emite una partícula beta negativa ($\beta^-$). ¿Cuál será el número de masa del nuevo núcleo resultante?"

opciones_explicitas: ["{escenario[0]}", "{escenario[2]}", "{escenario[1]}", "1"]

respuesta: "{escenario[0]}"
tipo: mc

explicacion: |
  En el decaimiento $\beta^-$, un neutrón se transforma en un protón y emite un electrón. El número de masa ($A$) permanece constante porque la suma de protones y neutrones no cambia.
```

### 3 — Vida media y decaimiento
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["calculo", "vida_media"]

variables:
  datos: uno_de([
    [100, 10, 50],
    [80, 5, 40],
    [200, 20, 100]
  ])

enunciado: "Una muestra contiene {datos[0]} gramos de una sustancia con una vida media de {datos[1]} años. ¿Cuánta masa de la sustancia permanecerá después de transcurridos {datos[1]} años (es decir, una vida media)?"

respuesta: datos[2]
tipo: input
tolerancia_abs: 0.001

pasos:
  - "Identificar la masa inicial ($N_0$): {datos[0]} g"
  - "Identificar el tiempo transcurrido ($t$): {datos[1]} años"
  - "Identificar la vida media ($T_{1/2}$): {datos[1]} años"
  - "Aplicar la fórmula de decaimiento: $N(t) = N_0 \cdot (1/2)^{(t/T_{1/2})}$"
  - "Calcular: $N(t) = {datos[0]} \cdot (1/2)^{1} = {datos[2]}$"

explicacion: |
  Después de transcurrir una vida media, la cantidad de la sustancia se reduce exactamente a la mitad de su valor inicial.
```

### 4 --- Diferencia entre radiación Gamma y Alfa
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "radiacion"]

enunciado: "¿Es correcto afirmar que la radiación gamma ($\gamma$) tiene masa y carga eléctrica?"

respuesta: falso
tipo: vf

explicacion: |
  La radiación gamma es una onda electromagnética (fotones de alta energía), por lo tanto, no posee masa ni carga eléctrica, a diferencia de las partículas alfa o beta.
```

### 5 --- Secuencia de desintegración
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["secuencia", "nucleica"]

enunciado: "Ordene los siguientes procesos de desintegración según el orden en que se produce el cambio en el número de masa ($A$): \n1. Emisión de partícula alfa ($\alpha$)\n2. Emisión de partícula beta ($\beta^-$)\n3. Emisión de radiación gamma ($\gamma$)"

opciones_explicitas: ["Alfa (A-4)", "Beta (A)", "Gamma (A)"]

respuesta: ["Alfa (A-4)", "Beta (A)", "Gamma (A)"]
tipo: ordenar

explicacion: |
  - La partícula alfa reduce el número de masa en 4 unidades.
  - La partícula beta mantiene el número de masa constante.
  - La radiación gamma mantiene el número de masa constante.
```