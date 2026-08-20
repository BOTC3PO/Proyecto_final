# Dibujo Tecnico — Vistas frontal superior lateral (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Identificación de la vista principal

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

tipo: mc
opciones_explicitas: ["Vista Lateral", "Vista Superior", "Vista Frontal", "Vista Posterior"]

enunciado: "La vista que se obtiene al observar el objeto de frente y que representa su mayor detalle o forma principal se denomina vista ___."

respuesta: "Vista Frontal"

explicacion: |
  La vista frontal es la proyección principal de un objeto, elegida generalmente por ser la que contiene más información relevante para su representación.
```

### 2 — Verdadero o Falso: Orientación de la vista superior

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

tipo: vf

enunciado: "En el sistema de proyección ortogonal, la vista superior representa la cara del objeto que se encuentra en la parte más alta respecto al plano de proyección horizontal."

respuesta: falso

explicacion: |
  La vista superior representa la cara del objeto que se ve desde arriba (plano horizontal), no la cara más alta, sino la proyección de la parte superior sobre el plano.
```

### 3 — Completar: Terminología de las vistas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

variables:
  escenario: uno_de([["izquierda", "derecha"], ["frontal", "posterior"], ["superior", "inferior"]])

tipo: completar
respuestas_validas:
  - "izquierda"
  - "derecha"
  - "frontal"
  - "posterior"
  - "superior"
  - "inferior"

enunciado: "Si el objeto se observa desde un costado, la vista resultante se conoce como vista ___."

respuesta: escenario[0]

explicacion: |
  Dependiendo de qué lado se elija, la vista lateral puede ser derecha o izquierda, pero siempre se denomina vista lateral.
```

### 4 — Ordenar: Proceso de proyección

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["proyeccion", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Definir el objeto 3D", "Elegir la vista principal", "Proyectar las vistas en el plano", "Dibujar las líneas de construcción"]

respuesta_orden: ["Definir el objeto 3D", "Elegir la vista principal", "Proyectar las vistas en el plano", "Dibujar las líneas de construcción"]

enunciado: "Ordena los pasos lógicos para representar correctamente las vistas de un objeto técnico:"

explicacion: |
  Primero se entiende el objeto, luego se selecciona la vista frontal para orientar el dibujo, se proyectan las dimensiones y finalmente se trazan las líneas.
```

### 5 — Identificación de la vista lateral

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

tipo: mc
opciones_explicitas: ["Vista Superior", "Vista Frontal", "Vista Lateral", "Vista Isométrica"]

enunciado: "La vista que muestra el perfil del objeto (visto de lado) se denomina:"

respuesta: "Vista Lateral"

explicacion: |
  La vista lateral (o de perfil) muestra la altura y la profundidad del objeto, pero no su ancho frontal.
```

### 6 — Identificación de la vista principal

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

enunciado: "En un sistema de proyección ortogonal, la vista que muestra el objeto de frente y que se utiliza como referencia para ubicar las demás vistas se denomina vista ___."

respuestas_validas:
  - "frontal"
  - "alzada"
  - "principal"
tipo: completar

explicacion: |
  La vista frontal (también llamada alzada) es la vista principal que define la orientación del objeto y sirve de base para proyectar la vista superior (planta) y las vistas laterales.
```

### 7 — Relación de vistas (Caso: Cubo)

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["cubo", "vistas"]

variables:
  escenario: uno_de([["frontal", "superior", "lateral"], ["cuadrado", "cuadrado", "cuadrado"], ["visto de frente", "visto desde arriba", "visto de costado"]])

enunciado: "Si tenemos un cubo perfecto, la vista {escenario[2]} será un ___ que representa la cara ___."

opciones_explicitas: ["cuadrado", "triángulo", "rectángulo"]
tipo: mc

respuesta: "cuadrado"

explicacion: |
  Dado que un cubo tiene todas sus caras iguales y perpendiculares entre sí, cualquier vista ortogonal (frontal, superior o lateral) resultará en la proyección de un cuadrado.
```

### 8 — Verdad o Falso: Proyección y Dimensión

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "basico"
  tags: ["proyeccion", "dimensiones"]

enunciado: "¿Es correcto afirmar que la vista lateral de un objeto tridimensional es una representación bidimensional (2D) del mismo?"

tipo: vf

respuesta: verdadero

explicacion: |
  Correcto. Las vistas ortogonales son proyecciones bidimensionales que representan una de las caras del objeto, eliminando la profundidad para facilitar la medición y fabricación.
```

### 9 — Ordenar proceso de trazado

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "intermedio"
  tags: ["metodo", "trazado"]

opciones_explicitas: ["Dibujar la vista frontal", "Proyectar líneas auxiliares", "Dibujar la vista superior", "Dibujar la vista lateral"]
tipo: ordenar

respuesta_orden: ["Dibujar la vista frontal", "Proyectar líneas auxiliares", "Dibujar la vista superior", "Dibujar la vista lateral"]

enunciado: "Ordene los pasos del método estándar para trazar las vistas ortogonales de una pieza a partir de su vista frontal:"

explicacion: |
  El método estándar consiste en establecer primero la vista principal (frontal), luego trazar líneas de proyección (auxiliares) hacia arriba para la planta (superior) y hacia los lados para las laterales, asegurando la correspondencia de dimensiones.
```

### 10 — Cálculo de dimensiones en vistas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_ortogonales"
  nivel: "intermedio"
  tags: ["dimensiones", "proyeccion"]

variables:
  objeto: uno_de([[10, 5, 2, 20], [15, 8, 3, 30], [12, 6, 4, 25]])

enunciado: "Un prisma rectangular tiene las siguientes dimensiones: Largo = {objeto[0]}mm, Ancho = {objeto[1]}mm y Alto = {objeto[2]}mm. Si la vista superior muestra el largo y el ancho, ¿cuál es el área de dicha vista?"

tipo: completar
respuesta: 50
tolerancia_abs: 0.1

pasos:
  - "Identificar las dimensiones de la vista superior (Largo y Ancho)."
  - "Multiplicar Largo por Ancho: {objeto[0]} * {objeto[1]}."

explicacion: |
  La vista superior representa la planta del objeto. En este caso, el área es el producto del largo por el ancho: {objeto[0]} * {objeto[1]} = {objeto[0]*objeto[1]}.
```

### 11 — Proyección ortogonal y la vista frontal

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["proyeccion", "vistas"]

respuesta: "frontal"
tipo: mc
opciones_explicitas: ["frontal", "superior", "lateral", "isométrica"]

enunciado: "En el sistema de proyección diédrico, la vista que se elige como principal para definir la orientación y escala del objeto se denomina vista ___."

explicacion: |
  La vista frontal (o alzado) es la vista principal de un objeto; de ella dependen la ubicación y dimensiones de las demás vistas (superior y lateral).
```

### 12 — Relación espacial entre vistas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["relacion_vistas", "proyeccion"]

variables:
  idx: uno_de([0, 1])
  escenario: [["superior", "lateral"], ["lateral", "superior"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["superior", "lateral"]

enunciado: "Si estamos trabajando en el sistema de proyección europeo (ISO E), la vista {escenario[idx][0]} se sitúa debajo de la vista frontal, mientras que la vista {escenario[idx][1]} se sitúa a su derecha."

explicacion: |
  En el sistema europeo, la vista superior se proyecta debajo de la frontal, y la lateral izquierda se proyecta a la derecha de la frontal (y viceversa en el sistema americano).
```

### 13 — El error de la escala en vistas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["escala", "error_comun"]

respuesta: falso
tipo: vf

enunciado: "En un conjunto de vistas ortogonales de una misma pieza, la escala de la vista lateral debe ser diferente a la escala de la vista frontal si el objeto es asimétrico."

explicacion: |
  Falso. Todas las vistas de un mismo objeto deben mantener la misma escala para permitir la interpretación correcta de las dimensiones y proporciones.
```

### 14 — Secuencia de proyección

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["orden", "proyeccion"]

respuesta_orden: ["frontal", "superior", "lateral"]
tipo: ordenar
opciones_explicitas: ["frontal", "superior", "lateral"]

enunciado: "Ordena las vistas de un objeto siguiendo el orden estándar de lectura de un plano técnico (de arriba hacia abajo y de izquierda a derecha en el sistema europeo):"

pasos:
  - "Identificar la cara principal (alzado)"
  - "Proyectar la cara de arriba (planta)"
  - "Proyectar la cara de perfil (perfil)"

explicacion: |
  El orden estándar permite una lectura lógica de la geometría del objeto, partiendo de la vista principal.
```

### 15 — Coincidencia de dimensiones

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["dimensiones", "coincidencia"]

variables:
  dim_x: 50
  dim_y: 30

respuesta: dim_x
tipo: completar
respuestas_validas:
  - 50
  - "50"

enunciado: "Si la vista frontal de un cubo tiene una base que mide {dim_x} mm de ancho, la vista superior debe tener obligatoriamente un ancho de ___ mm para mantener la coherencia geométrica."

explicacion: |
  La dimensión de ancho en la vista frontal debe coincidir exactamente con la dimensión de ancho en la vista superior, ya que representan la misma arista del objeto.
```

### 16 — Diferencia entre planta y vista superior

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["vistas", "proyeccion"]

respuesta: "planta"
tipo: completar
respuestas_validas:
  - "planta"
  - "vista_superior"

enunciado: "En el lenguaje técnico, la vista que se obtiene al observar un objeto desde arriba se denomina comúnmente vista ____."

explicacion: |
  La vista superior es la representación de la cara superior del objeto, y en dibujo técnico se le denomina frecuentemente 'planta'.
```

### 17 — Relación entre vista frontal y alzada

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["terminologia", "vistas"]

respuesta: verdadero
tipo: vf
enunciado: "En el sistema de proyección ortogonal, el término 'vista frontal' es sinónimo de 'alzada'."

explicacion: |
  Es correcto. La vista frontal (o alzada) es la vista principal que define la forma y dimensiones básicas del objeto.
```

### 18 — Identificación de la vista lateral

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["vistas", "proyeccion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["perfil_izquierdo", "izquierda"], ["perfil_derecho", "derecha"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["izquierda", "derecha", "superior", "frontal"]

enunciado: "Si la vista principal es la frontal, la vista que se obtiene al observar el objeto desde su lado ____ es la vista lateral izquierda."

explicacion: |
  La vista lateral izquierda se obtiene proyectando la cara lateral izquierda del objeto sobre un plano paralelo.
```

### 19 — Orden de proyección ortogonal

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "intermedio"
  tags: ["orden", "proyeccion"]

respuesta_orden: ["frontal", "superior", "lateral"]
tipo: ordenar
opciones_explicitas: ["frontal", "superior", "lateral"]

enunciado: "Ordene las siguientes vistas de un objeto siguiendo la disposición estándar de una proyección ortogonal (Alzada, Planta y Perfil):"

explicacion: |
  El orden estándar para organizar las vistas en un plano es: la frontal (alzada) arriba, la superior (planta) abajo y la lateral (perfil) al lado.
```

### 20 — Distinción entre vista y perspectiva

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_principales"
  nivel: "basico"
  tags: ["proyeccion", "perspectiva"]

respuesta: "proyeccion_ortogonal"
tipo: completar
respuestas_validas:
  - "proyeccion_ortogonal"
  - "perspectiva"

enunciado: "A diferencia de una perspectiva, que muestra el objeto con profundidad visual, las vistas frontal, superior y lateral son representaciones de ____."

explicacion: |
  Las vistas principales son proyecciones ortogonales, lo que significa que no tienen fuga y mantienen las proporciones reales de las caras proyectadas.
```

### 21 — Identificación de la vista frontal

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "basico"
  tags: ["vistas", "frontal", "proyeccion"]

variables:
  datos: [["pieza_L_derecha", "frontal_L"], ["pieza_T_izquierda", "frontal_T"], ["bloque_centro", "frontal_B"]]
  idx: uno_de([0, 1, 2])

enunciado: "Se tiene una pieza con forma de {datos[idx][0]}. La vista que muestra el contorno principal de la pieza desde la perspectiva de mayor detalle se denomina vista ___."

respuestas_validas:
  - "frontal"
  - "superior"
  - "lateral"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  En dibujo técnico, la vista frontal es la vista principal que define la forma básica del objeto.
```

### 22 — Relación de vistas

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "basico"
  tags: ["vistas", "relacion"]

variables:
  caso: uno_de([["superior", "frontal"], ["frontal", "lateral"], ["lateral", "superior"]])

enunciado: "Si estamos proyectando un objeto y la vista que estamos dibujando es la vista {caso[0]}, la vista que se encuentra inmediatamente debajo de ella en un sistema de proyección diédrico estándar es la vista ___."

opciones_explicitas: ["frontal", "lateral", "superior"]

respuesta: caso[1]
tipo: mc

explicacion: |
  En el sistema de proyección diédrico, la vista frontal se sitúa en el plano vertical, y la vista superior se proyecta debajo de ella.
```

### 23 — Análisis de simetría

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "intermedio"
  tags: ["simetria", "vistas"]

variables:
  objeto: uno_de([["cilindro_vertical", "circular"], ["cubo_perfecto", "cuadrada"]])

enunciado: "Para un {objeto[0]}, la vista lateral y la vista frontal presentan la misma forma geométrica, la cual es ___."

opciones_explicitas: ["circular", "cuadrada", "rectangular"]

respuesta: objeto[1]
tipo: mc

explicacion: |
  Un cilindro tiene una sección transversal circular; por lo tanto, sus vistas laterales y frontales (si el eje es vertical) son rectángulos, pero si el eje es horizontal, muestran la forma circular. En este caso, se define la forma de la sección.
```

### 24 — Veracidad de proyecciones

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "basico"
  tags: ["verdadero", "falso"]

enunciado: "En una proyección ortogonal, la vista superior representa la planta del objeto vista desde arriba."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La vista superior (o planta) es la proyección del objeto sobre un plano horizontal situado por encima de este.
```

### 25 — Secuencia de proyección

```
metadata:
  materia: "dibujo-tecnico"
  tema: "vistas_proyeccion_ortogonal"
  nivel: "intermedio"
  tags: ["orden", "proyeccion"]

variables:
  secuencia: ["vista_frontal", "vista_superior", "vista_lateral_derecha"]

enunciado: "Ordene las vistas de un objeto estándar siguiendo el orden de lectura convencional en un plano de proyección (de arriba hacia abajo y de izquierda a derecha):"

opciones_explicitas: ["vista_frontal", "vista_superior", "vista_lateral_derecha"]

respuesta_orden: ["vista_frontal", "vista_superior", "vista_lateral_derecha"]
tipo: ordenar

explicacion: |
  El orden estándar de disposición de vistas permite una lectura lógica y coherente de la geometría del objeto.
```
