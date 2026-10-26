### 1 — Energía cinética vs. Energía potencial
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["energia", "conceptos"]

respuesta: "cinetica"
tipo: completar
respuestas_validas: ["cinetica"]

enunciado: "Mientras que la energía potencial es la energía que un objeto posee debido a su posición o configuración, la energía que un objeto posee debido a su movimiento se denomina energía ___."

explicacion: |
  La energía cinética es la energía asociada al movimiento de un cuerpo, definida como $E_c = \frac{1}{2}mv^2$.
```

### 2 — Dependencia de la masa y la velocidad
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["relacion", "variables"]

variables:
  escenario: uno_de([
    [2, 4],
    [5, 10],
    [10, 20]
  ])

respuesta: "cuadriplica"
tipo: mc
opciones_explicitas: ["se duplica", "se triplica", "cuadriplica", "se mantiene igual"]

enunciado: "Si un objeto aumenta su velocidad al doble (2x) manteniendo su masa constante, su energía cinética ___."

explicacion: |
  Como la fórmula es $E_c = \frac{1}{2}mv^2$, la velocidad está elevada al cuadrado. Si la velocidad se multiplica por 2, la energía se multiplica por $2^2 = 4$.
```

### 3 — Trabajo y Energía Cinética
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "intermedio"
  tags: ["teorema", "trabajo"]

respuesta: falso
tipo: vf

enunciado: "Según el teorema del trabajo y la energía, si el trabajo neto realizado sobre un objeto es cero, su energía cinética debe haber cambiado necesariamente."

explicacion: |
  El teorema establece que el trabajo neto es igual al cambio en la energía cinética ($\Delta E_c$). Si el trabajo es cero, $\Delta E_c = 0$, lo que significa que la energía cinética se mantiene constante.
```

### 4 — Comparación de energías en un objeto
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "avanzado"
  tags: ["calculo", "comparacion"]

variables:
  datos: uno_de([
    [2.0, 10.0],
    [4.0, 5.0],
    [1.0, 20.0]
  ])

respuesta: 100.0
tipo: input
tolerancia_abs: 0.1

enunciado: "Un objeto de masa {datos[0]} kg se desplaza con una velocidad de {datos[1]} m/s. Calcula su energía cinética en Joules."

pasos:
  - "Identificar la masa: m = {datos[0]} kg"
  - "Identificar la velocidad: v = {datos[1]} m/s"
  - "Aplicar la fórmula: Ec = 0.5 * m * v^2"

explicacion: |
  Usando la fórmula $E_c = \frac{1}{2} \cdot {datos[0]} \cdot ({datos[1]})^2$, el resultado es {datos[2]} J.
```

### 5 — Componentes de la energía mecánica
```
metadata:
  materia: "fisica"
  tema: "energia_cinetica"
  nivel: "basico"
  tags: ["energia_mecanica", "suma"]

respuesta: ["energia_cinetica", "energia_potencial"]
tipo: ordenar

opciones_explicitas: ["energia_cinetica", "energia_potencial"]

enunciado: "En un sistema conservativo, la energía mecánica total es la suma de dos componentes fundamentales. Ordena estas dos componentes:"

explicacion: |
  La energía mecánica total ($E_m$) es la suma de la energía cinética (movimiento) y la energía potencial (posición).
```