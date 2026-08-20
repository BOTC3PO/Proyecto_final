# Quimica — nanotecnologia (cuestionario, 22 preguntas VBLang)

> Tema: `quimica/nanotecnologia`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["comparacion", "escala"]

variables:
  escala: uno_de(["macro", "micro", "nano"])

respuesta: falso
tipo: vf

enunciado: "Las propiedades de los materiales a nanoescala son idénticas a las que observamos a escala macroscópica."

explicacion: |
  Falso. A nanoescala, los materiales exhiben propiedades físicas, químicas y biológicas únicas debido a efectos cuánticos y al aumento drástico de la relación superficie-volumen.
```

### 2 — pregunta 2

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "catalisis"]

variables:
  rol: "catalizador"

respuesta: verdadero
tipo: vf

enunciado: "Las nanopartículas se utilizan frecuentemente en catálisis porque su alta superficie específica permite acelerar reacciones sin consumirse en el proceso."

explicacion: |
  Verdadero. La mayor área superficial facilita el contacto con los reactivos, aumentando la eficiencia de la reacción sin alterar la naturaleza del catalizador.
```

### 3 — pregunta 3

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fuerzas", "fisica"]

variables:
  fuerza_gravedad: "dominante"
  fuerza_electrica: "dominante"

respuesta: fuerza_electrica
tipo: input

enunciado: "A escalas nanométricas, las fuerzas de Van der Waals y las interacciones electrostáticas dominan sobre la ___."

explicacion: |
  Gravedad. A esta escala, la masa es tan pequeña que las fuerzas gravitatorias son insignificantes comparadas con las interacciones electromagnéticas.
```

### 4 — pregunta 4

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["diseño", "ingenieria"]

variables:
  enfoque: "naturaleza"
  enfoque_nano: "a_medida"

respuesta: enfoque_nano
tipo: input

enunciado: "La nanotecnología permite diseñar materiales ___ en lugar de buscar propiedades existentes en la naturaleza."

explicacion: |
  A medida (o a la medida). Los científicos pueden construir materiales átomo por átomo para obtener características específicas como conductividad o resistencia.
```

### 5 — pregunta 5

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["definicion", "escala"]

variables:
  nano: 1000000000
  micro: 1000000

respuesta: 1000
tipo: input

enunciado: "¿Cuántas veces más pequeña es una escala nanométrica (1 nm) comparada con una micrométrica (1 µm)?"

explicacion: |
  1000 veces. Un micrómetro es $10^{-6}$ m y un nanómetro es $10^{-9}$ m. La diferencia es un factor de $10^3$.
```

### 6 — pregunta 6

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "medicina"]

variables:
  vehiculo: "nanoparticulas_lipidicas"

respuesta: vehiculo
tipo: input

enunciado: "En el ámbito médico, se investigan las ___ para administrar fármacos de manera dirigida y eficiente."

explicacion: |
  Nanopartículas lipídicas. Estas estructuras pueden encapsular fármacos y liberarlos en sitios específicos del cuerpo, reduciendo efectos secundarios.
```

### 7 — pregunta 7

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["propiedades", "opticas"]

variables:
  fenomeno: "resonancia_plasmon_superficial"

respuesta: fenomeno
tipo: input

enunciado: "El cambio de color en nanopartículas metálicas se explica mediante el fenómeno de resonancia de plasmón ___."

explicacion: |
  Superficial. Es la oscilación colectiva de los electrones libres en la superficie del metal cuando interactúan con la luz.
```

### 8 — pregunta 8

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "opticas"]

variables:
  electrones: "superficie"
  electrones_bulk: "interior"

respuesta: electrones
tipo: input

enunciado: "La resonancia de plasmón superficial implica la interacción de la luz con los electrones de la ___ de la nanopartícula."

explicacion: |
  Superficie. A diferencia de los metales macroscópicos donde los electrones están confinados en el volumen, en la nanoescala los de superficie son clave para la respuesta óptica.
```

### 9 — pregunta 9

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "catalisis"]

variables:
  area: "alta"
  area: "baja"

respuesta: area
tipo: input

enunciado: "Las nanopartículas son excelentes catalizadores porque poseen un área superficial ___ en relación con su volumen."

explicacion: |
  Alta. Un mayor área superficial expone más sitios activos para que ocurran las reacciones químicas.
```

### 10 — pregunta 10

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["definicion", "escala"]

variables:
  atomos: random(10, 100)

respuesta: verdadero
tipo: vf

enunciado: "Una nanopartícula típicamente contiene entre 100 y 100.000 átomos."

explicacion: |
  Verdadero. La definición de nanopartícula suele abarcar estructuras que van desde unos pocos átomos hasta unos pocos cientos de nanómetros de diámetro.
```

### 11 — pregunta 11

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fuerzas", "interacciones"]

variables:
  fuerza: "Van_der_Waals"

respuesta: fuerza
tipo: input

enunciado: "A nanoescala, las fuerzas de ___ juegan un papel crucial en la estabilidad y agregación de las partículas."

explicacion: |
  Van der Waals. Estas fuerzas de atracción débiles, normalmente insignificantes a gran escala, se vuelven dominantes cuando la masa es pequeña.
```

### 12 — pregunta 12

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "industria"]

variables:
  sector: "agro"
  sector: "farmaceutico"

respuesta: sector
tipo: input

enunciado: "En Argentina, la nanotecnología tiene aplicaciones relevantes en el sector agroindustrial, por ejemplo en la liberación controlada de ___."

explicacion: |
  Fertilizantes o pesticidas. Las nanopartículas permiten una entrega más eficiente y menos contaminante de insumos agrícolas.
```

### 13 — pregunta 13

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "electricas"]

variables:
  propiedad: "conductividad"

respuesta: propiedad
tipo: input

enunciado: "La nanotecnología permite modificar la ___ eléctrica de los materiales, creando nuevos conductores o aislantes."

explicacion: |
  Conductividad. Al cambiar la estructura y el tamaño, se altera el comportamiento de los electrones, modificando cómo fluye la corriente.
```

### 14 — pregunta 14

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "mecanicas"]

variables:
  propiedad: "resistencia"

respuesta: propiedad
tipo: input

enunciado: "Los nanomateriales como los nanotubos de carbono se destacan por su extrema ___ mecánica."

explicacion: |
  Resistencia. La estructura atómica ordenada y la falta de defectos macroscópicos les confieren una resistencia muy superior a la del acero.
```

### 15 — pregunta 15

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["matematica", "conversion"]

variables:
  nm: 5
  um: 0.005

respuesta: um
tipo: input

enunciado: "5 nanómetros equivalen a ___ micrómetros."

explicacion: |
  0.005. Para convertir nanómetros a micrómetros, se divide por 1000 ($5 / 1000 = 0.005$).
```

### 16 — pregunta 16

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fuerzas", "estabilidad"]

variables:
  fuerza: "electrostatica"

respuesta: fuerza
tipo: input

enunciado: "La repulsión ___ entre nanopartículas cargadas ayuda a evitar su agregación y mantiene la suspensión estable."

explicacion: |
  Electrostatica. Las cargas superficiales generan fuerzas de repulsión que contrarrestan las fuerzas de atracción de Van der Waals.
```

### 17 — pregunta 17

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "basico"
  tags: ["definicion", "concepto"]

variables:
  campo: "nanotecnologia"

respuesta: campo
tipo: input

enunciado: "La ___ es el campo que manipula la materia a escala nanométrica."

explicacion: |
  Nanotecnología. Se define por la capacidad de controlar la materia átomo por átomo o molécula por molécula.
```

### 18 — pregunta 18

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "opticas"]

variables:
  propiedad: "color"

respuesta: propiedad
tipo: input

enunciado: "Un ejemplo clásico de propiedad única a nanoescala es el cambio de ___ en el oro."

explicacion: |
  Color. El oro nano puede ser rojo, púrpura o azul, a diferencia del amarillo macroscópico.
```

### 19 — pregunta 19

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["aplicaciones", "filtracion"]

variables:
  aplicacion: "filtracion_agua"

respuesta: aplicacion
tipo: input

enunciado: "Las membranas con nanocanales se utilizan para la ___ de contaminantes y virus."

explicacion: |
  Filtración de agua. Los poros a escala nanométrica permiten el paso del agua pero retienen impurezas y microorganismos.
```

### 20 — pregunta 20

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "avanzado"
  tags: ["fisica", "cuantica"]

variables:
  efecto: "cuantico"

respuesta: efecto
tipo: input

enunciado: "A escalas muy pequeñas, los efectos ___ comienzan a dominar el comportamiento de los materiales."

explicacion: |
  Cuánticos. La física clásica deja de ser suficiente para describir el comportamiento de la materia a esta escala.
```

### 21 — pregunta 21

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["diseño", "ingenieria"]

variables:
  metodo: "atomico"

respuesta: metodo
tipo: input

enunciado: "La nanotecnología permite construir materiales ___ por átomo o molécula."

explicacion: |
  A medida. Esto permite obtener características específicas que no existen en la naturaleza.
```

### 22 — pregunta 22

```
metadata:
  materia: "quimica"
  tema: "nanotecnologia"
  nivel: "intermedio"
  tags: ["propiedades", "superficie"]

variables:
  razon: "superficie"

respuesta: razon
tipo: input

enunciado: "La alta reactividad de las nanopartículas se debe a que una gran fracción de átomos está en la ___."

explicacion: |
  Superficie. Las reacciones químicas ocurren en la superficie, por lo que más superficie significa mayor reactividad.
```
