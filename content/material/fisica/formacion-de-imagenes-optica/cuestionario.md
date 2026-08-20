# Fisica — Formacion de imagenes optica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Naturaleza de la imagen

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["optica", "imagen-virtual", "imagen-real"]

respuesta: verdadero
tipo: vf

enunciado: "Una imagen es virtual cuando los rayos de luz parecen provenir de un punto situado detrás de la pantalla o plano de observación."

explicacion: |
  Las imágenes virtuales se forman por la intersección de las prolongaciones de los rayos de luz, por lo que no pueden proyectarse en una pantalla.
```

### 2 — Tipos de imágenes según su proyección

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["optica", "terminologia"]

opciones_explicitas: ["real", "virtual", "imaginaria", "teórica"]
respuesta: "real"
tipo: mc

enunciado: "Cuando los rayos de luz realmente convergen en un punto y pueden ser captados por una pantalla, la imagen formada es de tipo ___."

explicacion: |
  Las imágenes reales se forman por la convergencia real de los rayos luminosos.
```

### 3 — Posición del objeto y tipo de imagen

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "intermedio"
  tags: ["espejos", "lentes", "posicion-objeto"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [[10, "virtual"], [5, "real"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "virtual"
  - "real"

enunciado: "Si un objeto se coloca a una distancia de {datos[escenario_idx][0]} cm de un espejo convexo, la imagen resultante será ___."

explicacion: |
  En los espejos convexos, la imagen siempre es virtual, derecha y de menor tamaño, sin importar la posición del objeto.
```

### 4 — Características de la imagen virtual

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "basico"
  tags: ["propiedades", "imagen-virtual"]

respuesta: falso
tipo: vf

enunciado: "Una característica fundamental de las imágenes virtuales es que siempre son invertidas respecto al objeto."

explicacion: |
  Las imágenes virtuales suelen ser derechas (como en un espejo plano). Las imágenes invertidas suelen ser reales.
```

### 5 — Secuencia de formación de imagen real

```
metadata:
  materia: "fisica"
  tema: "formacion-de-imagenes-optica"
  nivel: "intermedio"
  tags: ["proceso", "formacion-imagen"]

opciones_explicitas: ["Emisión de luz por el objeto", "Propagación de rayos hacia la lente", "Convergencia de rayos en un punto", "Proyección en una pantalla"]
respuesta_orden: ["Emisión de luz por el objeto", "Propagación de rayos hacia la lente", "Convergencia de rayos en un punto", "Proyección en una pantalla"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos necesarios para la formación de una imagen real mediante una lente convergente:"

explicacion: |
  Para que una imagen sea real, los rayos deben viajar desde el objeto, pasar por la lente, converger en un punto y finalmente ser captados por una superficie (pantalla).
```

### 6 — Naturaleza de la imagen

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos", "imágenes", "virtual"]

enunciado: "Si un objeto se coloca a una distancia mayor que el doble de la distancia focal de un espejo cóncavo (d > 2f), la imagen formada es ___."

opciones_explicitas: ["real", "virtual", "imaginaria"]
respuestas_validas:
  - "real"

respuesta: "real"
tipo: "mc"

explicacion: |
  Cuando el objeto está más allá del centro de curvatura (2f), los rayos reflejados divergen después de cruzarse, formando una imagen real, invertida y de menor tamaño.
```

### 7 — Cálculo de la distancia de imagen

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos", "convergentes", "calculo"]

variables:
  f: 15
  d_objeto: 30

enunciado: "Un objeto se sitúa a {d_objeto} cm de un espejo cóncavo con una distancia focal de {f} cm. ¿A qué distancia del espejo se forma la imagen?"

pasos:
  - "Utilizar la ecuación de los espejos: 1/f = 1/d_objeto + 1/d_imagen"
  - "Despejar la distancia de la imagen: d_imagen = (f * d_objeto) / (d_objeto - f)"
  - "Calcular: (15 * 30) / (30 - 15) = 450 / 15 = 30"

respuesta: 30
tipo: "input"
tolerancia_abs: 0

explicacion: |
  Aplicando la fórmula: 1/15 = 1/30 + 1/d_imagen. 
  Esto nos da 1/d_imagen = 1/15 - 1/30 = 1/30. 
  Por lo tanto, d_imagen = 30 cm.
```

### 8 — Verdad o Falso: Imágenes Virtuales

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["conceptos", "espejos"]

enunciado: "¿Una imagen virtual puede ser proyectada sobre una pantalla?"

respuesta: falso
tipo: "vf"

explicacion: |
  Las imágenes virtuales se forman por la intersección de rayos prolongados y no por la intersección de rayos reales, por lo que no pueden ser proyectadas.
```

### 9 — Magnificación de la imagen

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["magnitud", "espejos"]

variables:
  f: 10
  d_obj: 5

enunciado: "Un objeto de 5 cm de altura se coloca a {d_obj} cm de un espejo cóncavo con foco de {f} cm. ¿Cuál es la altura de la imagen formada?"

pasos:
  - "Calcular la distancia de la imagen: 1/10 = 1/5 + 1/d_img => d_img = -10 cm"
  - "Calcular la magnificación (m): m = -d_img / d_obj = -(-10) / 5 = 2"
  - "Calcular la altura de la imagen (h_img): h_img = m * h_objeto = 2 * 5 = 10"

respuesta: 10
tipo: "input"
tolerancia_abs: 0

explicacion: |
  Como el objeto está entre el foco y el espejo, la imagen es virtual y derecha.
  d_img = (10 * 5) / (5 - 10) = 50 / -5 = -10 cm.
  m = -(-10) / 5 = 2.
  Altura = 2 * 5 = 10 cm.
```

### 10 — Orden de formación de imagen

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["procesos", "óptica"]

enunciado: "Ordena los pasos para determinar si una imagen es real o virtual usando el signo de la distancia de la imagen (d_img):"

opciones_explicitas: ["Calcular d_img con la ecuación de Gauss", "Determinar si el signo de d_img es positivo o negativo", "Concluir si la imagen es real o virtual"]

respuesta_orden: ["Calcular d_img con la ecuación de Gauss", "Determinar si el signo de d_img es positivo o negativo", "Concluir si la imagen es real o virtual"]
tipo: "ordenar"

explicacion: |
  Primero se obtiene el valor numérico de la distancia, luego se analiza su signo (positivo para real, negativo para virtual) y finalmente se da la conclusión.
```

### 11 — Naturaleza de la imagen virtual

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "espejos", "imágenes"]

respuesta: falso
tipo: vf

enunciado: "Una imagen es siempre real si los rayos de luz convergen en un punto físico después de reflejarse o refractarse."

explicacion: |
  Una imagen es real cuando los rayos de luz se cruzan físicamente en el espacio. Una imagen es virtual cuando los rayos parecen provenir de un punto, pero no pasan por él (como en un espejo plano).
```

### 12 — El error de la imagen invertida

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos_curvos", "imágenes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, "real", "invertida"], [5, "virtual", "derecha"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["real", "virtual"]

enunciado: "Si un objeto se coloca entre el foco y el centro de curvatura de un espejo cóncavo, la imagen resultante es de tipo ___."

explicacion: |
  Para un espejo cóncavo, cuando el objeto está más allá del foco (entre F y C), los rayos convergen frente al espejo, formando una imagen real e invertida.
```

### 13 — Relación posición y tipo de imagen

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["espejos", "lentes"]

variables:
  caso: uno_de([0, 1])
  datos: [[15, "grande"], [5, "pequeña"]]

respuesta: datos[caso][1]
tipo: completar
respuestas_validas:
  - "grande"
  - "pequeña"

enunciado: "En un espejo convexo, la imagen siempre es ___ respecto al objeto."

explicacion: |
  Los espejos convexos siempre producen imágenes virtuales, derechas y de menor tamaño que el objeto, independientemente de la posición.
```

### 14 — Propiedades de la imagen en espejo plano

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos_planos"]

respuesta: "derecha"
tipo: completar
respuestas_validas:
  - "derecha"
  - "invertida"

enunciado: "En un espejo plano, la imagen que se observa es siempre de orientación ___."

explicacion: |
  En un espejo plano, la imagen es virtual, de igual tamaño y mantiene la misma orientación (derecha), aunque presenta inversión lateral (enantiomorfismo).
```

### 15 — Secuencia de formación de imagen (Lente Convergente)

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["lentes", "proceso"]

opciones_explicitas: ["Objeto frente a la lente", "Lente refracta los rayos", "Intersección de rayos divergentes", "Formación de imagen real"]
respuesta_orden: ["Objeto frente a la lente", "Lente refracta los rayos", "Intersección de rayos divergentes", "Formación de imagen real"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos para la formación de una imagen real con una lente convergente cuando el objeto está fuera del foco:"

explicacion: |
  Primero el objeto emite luz, luego la lente refracta esos rayos, estos se cruzan en un punto real y finalmente se percibe la imagen.
```

### 16 — Naturaleza de la imagen

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "imagen_real", "imagen_virtual"]

respuesta: "real"
tipo: "mc"
opciones_explicitas: ["real", "virtual"]

enunciado: "Una imagen que puede ser proyectada sobre una pantalla porque los rayos de luz realmente convergen en un punto se denomina imagen _______."

explicacion: |
  Las imágenes reales se forman por la convergencia real de los rayos de luz y pueden proyectarse. Las imágenes virtuales se forman cuando los rayos parecen provenir de un punto, pero no pasan por él.
```

### 17 — Características de la imagen virtual

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["optica", "imagen_virtual"]

variables:
  es_derecha: uno_de([verdadero, falso])

respuesta: es_derecha
tipo: "vf"

enunciado: "En el caso de una imagen virtual formada por un espejo plano, la imagen es siempre derecha respecto al objeto."

explicacion: |
  Las imágenes virtuales producidas por espejos planos son siempre derechas y de igual tamaño que el objeto, pero se encuentran detrás del espejo.
```

### 18 — Comparación de orientación

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["optica", "orientacion"]

variables:
  caso: uno_de([0, 1])
  tabla: [["derecha", "derecha"], ["invertida", "invertida"]]

respuesta: tabla[caso][1]
tipo: "completar"

enunciado: "Si una imagen es real, su orientación respecto al objeto será _______, mientras que si la imagen es virtual en un espejo plano, será _______."

explicacion: |
  Las imágenes reales suelen ser invertidas (en lentes o espejos convexos/cóncavos según posición), mientras que las imágenes virtuales en espejos planos son siempre derechas.
```

### 19 — Orden de formación de rayos

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "avanzado"
  tags: ["optica", "rayos_luz"]

opciones_explicitas: ["Rayos convergen en un punto real", "Rayos divergen y parecen provenir de un punto", "Rayos se propagan en línea recta sin interacción"]
respuesta_orden: ["Rayos convergen en un punto real", "Rayos divergen y parecen provenir de un punto", "Rayos se propagan en línea recta sin interacción"]
tipo: "ordenar"

enunciado: "Ordene los procesos físicos que describen la formación de una imagen real, una imagen virtual y la propagación de la luz, respectivamente."

explicacion: |
  1. La imagen real requiere convergencia de rayos en un punto físico.
  2. La imagen virtual ocurre cuando los rayos divergen pero su prolongación parece originar un punto.
  3. La propagación es la base de la trayectoria de los rayos.
```

### 20 — Distinción por proyección

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["optica", "proyeccion"]

respuesta: "0"
tipo: "mc"
opciones_explicitas: ["0", "1"]

enunciado: "Si una imagen NO puede ser capturada en una pantalla física, ¿qué valor representa si la imagen es virtual? (1 para Sí, 0 para No)"

explicacion: |
  La capacidad de proyección es la diferencia fundamental: las imágenes reales se proyectan, las virtuales no.
```

### 21 — Naturaleza de la imagen en un espejo plano

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejos", "imagen_virtual"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["un espejo plano", "virtual"], ["una lupa (lupa)", "virtual"]]

enunciado: "Al colocar un objeto frente a {datos[escenario_idx][0]}, la imagen que se observa es de tipo ___."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "virtual"
  - "real"

explicacion: |
  En un espejo plano, los rayos de luz parecen provenir de un punto detrás del espejo, por lo que la imagen es virtual.
```

### 22 — El caso del proyector de cine

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["proyeccion", "imagen_real"]

variables:
  tipo_proyector_idx: uno_de([0,1])
  configuracion: [["objeto entre F y 2F", "real"], ["objeto más allá de 2F", "real"]]

enunciado: "Para que un proyector de cine pueda formar una imagen en la pantalla, la imagen debe ser de tipo ___."

opciones_explicitas: ["real", "virtual", "derecha", "invertida"]
respuesta: "real"
tipo: mc

explicacion: |
  Para que una imagen pueda ser proyectada en una pantalla física, los rayos de luz deben converger realmente en un punto, lo que define a una imagen real.
```

### 23 — Lupa y la imagen ampliada

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["lupa", "lente_convergente"]

variables:
  distancia_idx: uno_de([0,1])
  caso: [["objeto entre F y l", "virtual"], ["objeto más allá de 2F", "real"]]

enunciado: "Si usamos una lupa (lente convergente) y colocamos el objeto a una distancia ___, la imagen resultante será ___."

opciones_explicitas: ["virtual", "real"]
respuesta: "virtual"
tipo: mc

explicacion: |
  Cuando el objeto está entre el foco (F) y el centro óptico (l), los rayos divergen tras la lente y la imagen es virtual, derecha y de mayor tamaño.
```

### 24 — Propiedades de la imagen real

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "intermedio"
  tags: ["propiedades_imagen"]

enunciado: "Una imagen real se caracteriza por ser ___ respecto a la dirección de los rayos de luz."

opciones_explicitas: ["derecha", "invertida"]
respuesta: "invertida"
tipo: mc

explicacion: |
  Las imágenes reales formadas por una sola lente o espejo siempre presentan una inversión respecto al objeto.
```

### 25 — Veracidad de la imagen en un espejo convexo

```
metadata:
  materia: "fisica"
  tema: "formacion_de_imagenes_optica"
  nivel: "basico"
  tags: ["espejo_convexo", "seguridad"]

enunciado: "¿Es cierto que un espejo convexo (como los de los autos) siempre produce una imagen virtual?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. Los espejos convexos siempre divergen los rayos, por lo que la imagen siempre es virtual, derecha y de menor tamaño.
```
