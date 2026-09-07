# Oficios — seguridad herreria (cuestionario, 35 preguntas VBLang)

> Tema: `oficios/herrero-forjador/seguridad-herreria`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["riesgos", "EPP", "quemaduras"]

variables:
  riesgo: uno_de(["quemaduras", "lesiones oculares", "intoxicaciones"])

respuesta: "quemaduras"
tipo: mc

enunciado: "¿Cuál es el accidente más común en la forja por exposición al calor radiante y salpicaduras?"

opciones_explicitas: ["quemaduras", "fracturas", "electricidad", "caídas"]

explicacion: |
  Las quemaduras son el accidente más frecuente debido al contacto con metal caliente, chispas y calor radiante.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["EPP", "guantes", "cuero"]

variables:
  material: uno_de(["cuero grueso", "tela de algodón", "plástico fino", "lana"])

respuesta: "cuero grueso"
tipo: mc

enunciado: "Los guantes de forja deben estar confeccionados preferentemente con:"

opciones_explicitas: ["cuero grueso", "tela de algodón", "plástico fino", "lana"]

explicacion: |
  El cuero grueso (de becerro o vacuno) es ignífugo y resistente al calor, protegiendo contra quemaduras y chispas.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["EPP", "ojos", "soplete"]

variables:
  tarea: uno_de(["trabajo con soplete", "golpeado en frío", "limpieza de taller", "almacenamiento"])

respuesta: "filtro solar adecuado"
tipo: mc

enunciado: "Cuando se trabaja con el soplete cerca de la fragua encendida, las gafas de seguridad deben tener:"

opciones_explicitas: ["filtro solar adecuado", "lentes transparentes simples", "gafas de sol comunes", "sin filtro"]

explicacion: |
  El filtro solar adecuado protege la retina de la radiación infrarroja y visible intensa generada por el fuego y el metal caliente.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["EPP", "botas", "pies"]

variables:
  objeto: random(10, 50)

respuesta: "proteger los pies de caídas de objetos pesados"
tipo: mc

enunciado: "Las botas de seguridad con puntera de acero sirven principalmente para:"

opciones_explicitas: ["proteger los pies de caídas de objetos pesados", "mantener los pies calientes", "mejorar el agarre en suelos resbaladizos", "aislar eléctricamente al trabajador"]

explicacion: |
  La puntera de acero está diseñada para soportar impactos y compresión de objetos pesados que puedan caer sobre los pies.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["fragua", "incendio", "explosión"]

variables:
  combustible: uno_de(["gas", "carbón", "leña", "electricidad"])

respuesta: "gas"
tipo: mc

enunciado: "El riesgo de incendio y explosión es real en la fragua, especialmente si se utilizan com"

opciones_explicitas: ["gas", "carbón", "leña", "electricidad"]

explicacion: |
  Los sistemas de gas requieren controles estrictos para evitar fugas que puedan causar explosiones.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["EPP", "cabeza", "chispas"]

variables:
  parte_cuerpo: uno_de(["cabello", "orejas", "cuello", "hombros"])

respuesta: "casco o gorra de cuero"
tipo: mc

enunciado: "¿Qué elemento protege el cabello y la parte superior del rostro de las chispas que saltan al golpear el metal?"

opciones_explicitas: ["casco o gorra de cuero", "sombrero de ala ancha", "pañuelo de algodón", "gorro de lana"]

explicacion: |
  El casco o gorra de cuero protege el cabello y la frente de chispas y proyecciones de metal caliente.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["cultura", "seguridad", "pilares"]

variables:
  pilar: random(1, 3)

respuesta: "conocimiento de los riesgos"
tipo: mc

enunciado: "La cultura de seguridad en los oficios metalúrgicos se basa en tres pilares. Uno de ellos es:"

opciones_explicitas: ["conocimiento de los riesgos", "rapidez en el trabajo", "cantidad de herramientas", "precio del material"]

explicacion: |
  Los tres pilares son: conocimiento de los riesgos, uso correcto del EPP y mantenimiento adecuado de herramientas/fragua.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "avanzado"
  tags: ["salud", "ojos", "radiación"]

variables:
  efecto: uno_de(["dañar la retina", "iluminar el taller", "calentar el aire", "secar la piel"])

respuesta: "dañar la retina"
tipo: mc

enunciado: "La radiación infrarroja de la fragua encendida puede:"

opciones_explicitas: ["dañar la retina", "iluminar el taller", "calentar el aire", "secar la piel"]

explicacion: |
  La radiación infrarroja es invisible pero intensa y puede causar daños severos a la retina si no se usa filtro adecuado.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["filosofía", "seguridad", "cuerpo"]

variables:
  elemento: uno_de(["su propio cuerpo", "el martillo", "la fragua", "el yunque"])

respuesta: "su propio cuerpo"
tipo: mc

enunciado: "Según la teoría, la herramienta más valiosa que tiene un profesional es:"

opciones_explicitas: ["su propio cuerpo", "el martillo", "la fragua", "el yunque"]

explicacion: |
  La seguridad no es solo un trámite, sino proteger la integridad física del trabajador, su recurso más importante.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["EPP", "botas", "suela"]

variables:
  caracteristica: uno_de(["resistente al calor", "delgada", "de goma blanda", "sin textura"])

respuesta: "resistente al calor"
tipo: mc

enunciado: "Las botas de seguridad deben tener suela:"

opciones_explicitas: ["resistente al calor", "delgada", "de goma blanda", "sin textura"]

explicacion: |
  La suela resistente al calor evita que el metal fundido o las brasas quemen la piel de los tobillos.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["calidad", "seguridad", "taller"]

variables:
  consecuencia: uno_de(["afectar la calidad", "mejorar la velocidad", "reducir costos", "aumentar producción"])

respuesta: ["afectar la calidad", "afectar la calidad del trabajo"]
tipo: completar

enunciado: "Ignorar los riesgos de seguridad no solo pone en peligro la integridad física, sino que también puede {consecuencia} y la sostenibilidad del taller."

respuestas_validas:
  - "afectar la calidad"
  - "afectar la calidad del trabajo"

explicacion: |
  La falta de seguridad afecta la calidad del trabajo y la sostenibilidad del taller a largo plazo.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["pilares", "seguridad"]

variables:
  pilar1: "conocimiento de los riesgos"
  pilar2: "uso correcto del EPP"
  pilar3: "mantenimiento adecuado"

respuesta: "conocimiento de los riesgos"
tipo: completar

enunciado: "Los tres pilares de la cultura de seguridad son: {pilar1}, {pilar2} y {pilar3}."

respuestas_validas:
  - "conocimiento de los riesgos"
  - "conocimiento de los riesgos,"

explicacion: |
  Los pilares son: conocimiento de los riesgos, uso correcto del EPP y mantenimiento adecuado.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["pilares", "seguridad"]

variables:
  pilar1: "conocimiento de los riesgos"
  pilar2: "uso correcto del EPP"
  pilar3: "mantenimiento adecuado"

respuesta: "uso correcto del EPP"
tipo: completar

enunciado: "Los tres pilares de la cultura de seguridad son: {pilar1}, {pilar2} y {pilar3}."

respuestas_validas:
  - "uso correcto del EPP"
  - "uso correcto del EPP,"

explicacion: |
  Los pilares son: conocimiento de los riesgos, uso correcto del EPP y mantenimiento adecuado.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["pilares", "seguridad"]

variables:
  pilar1: "conocimiento de los riesgos"
  pilar2: "uso correcto del EPP"
  pilar3: "mantenimiento adecuado"

respuesta: "mantenimiento adecuado"
tipo: completar

enunciado: "Los tres pilares de la cultura de seguridad son: {pilar1}, {pilar2} y {pilar3}."

respuestas_validas:
  - "mantenimiento adecuado"
  - "mantenimiento adecuado."

explicacion: |
  Los pilares son: conocimiento de los riesgos, uso correcto del EPP y mantenimiento adecuado.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["fragua", "riesgos"]

variables:
  riesgo1: "incendio"
  riesgo2: "explosión"

respuesta: "incendio"
tipo: completar

enunciado: "El riesgo de {riesgo1} y {riesgo2} es real en la fragua si no se maneja con rigor."

respuestas_validas:
  - "incendio"
  - "incendio "

explicacion: |
  Los riesgos principales son incendio y explosión, especialmente con gases.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["fragua", "riesgos"]

variables:
  riesgo1: "incendio"
  riesgo2: "explosión"

respuesta: "explosión"
tipo: completar

enunciado: "El riesgo de {riesgo1} y {riesgo2} es real en la fragua si no se maneja con rigor."

respuestas_validas:
  - "explosión"
  - "explosión"

explicacion: |
  Los riesgos principales son incendio y explosión, especialmente con gases.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["ojos", "protección"]

variables:
  elemento: "gafas de seguridad"
  filtro: "filtro solar adecuado"

respuesta: "filtro solar adecuado"
tipo: completar

enunciado: "Las {elemento} deben tener {filtro} para proteger la retina."

respuestas_validas:
  - "filtro solar adecuado"
  - "filtro solar adecuado."

explicacion: |
  El filtro solar adecuado protege la retina de la radiación infrarroja.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["guantes", "material"]

variables:
  material1: "cuero de becerro"
  material2: "cuero de vacuno"

respuesta: "cuero de becerro"
tipo: completar

enunciado: "Los guantes de forja son generalmente de {material1} o {material2}."

respuestas_validas:
  - "cuero de becerro"
  - "cuero de becerro "

explicacion: |
  Los guantes suelen ser de cuero de becerro o vacuno por su resistencia y flexibilidad.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["guantes", "material"]

variables:
  material1: "cuero de becerro"
  material2: "cuero de vacuno"

respuesta: "cuero de vacuno"
tipo: completar

enunciado: "Los guantes de forja son generalmente de {material1} o {material2}."

respuestas_validas:
  - "cuero de vacuno"
  - "cuero de vacuno"

explicacion: |
  Los guantes suelen ser de cuero de becerro o vacuno por su resistencia y flexibilidad.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["riesgos-termicos", "EPP", "quemaduras"]

variables:
  riesgo_principal: "quemaduras"

respuesta: "quemaduras"
tipo: completar

enunciado: "En el taller de herrería, el accidente más común y doloroso por exposición al calor radiante y salpicaduras es: {riesgo_principal}."

explicacion: |
  Las quemaduras son el riesgo primario en la forja debido al contacto con metal caliente, chispas y calor radiante. El EPP específico (guantes largos, ropa ignífuga) está diseñado para mitigar este riesgo.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["EPP", "guantes", "cuero"]

variables:
  material: "cuero"
  tipo_cuero: "becerro o vacuno"

respuesta: "cuero"
tipo: completar

enunciado: "Los guantes de forja deben ser confeccionados generalmente con {material} (de becerro o vacuno) para proteger muñecas y antebrazos de chispas."

explicacion: |
  El cuero grueso es resistente al calor y no se inflama ni se derrite fácilmente. Los guantes deben ser largos para cubrir las muñecas y antebrazos, zonas vulnerables a las chispas que suben por la manga.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["EPP", "ojos", "radiacion"]

variables:
  tipo_proteccion: "gafas de seguridad con filtro solar"

respuesta: "gafas de seguridad con filtro solar"
tipo: completar

enunciado: "Cuando se trabaja con el soplete o cerca de la fragua encendida, es indispensable usar {tipo_proteccion} para evitar daños a la retina por radiación infrarroja."

explicacion: |
  La radiación infrarroja puede dañar la retina. Las gafas de seguridad con filtro solar adecuado son obligatorias para proteger los ojos en estas situaciones específicas.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["EPP", "cabeza", "chispas"]

variables:
  elemento: "casco o gorra de cuero"
  funcion: "proteger el cabello y la parte superior del rostro"

respuesta: "proteger el cabello y la parte superior del rostro"
tipo: completar

enunciado: "El {elemento} tiene como función principal {funcion} de las chispas que saltan al golpear el metal."

explicacion: |
  Las chispas voladoras pueden causar quemaduras en el cuero cabelludo o iniciar incendios en el cabello. El casco o gorra de cuero actúa como barrera térmica para esta zona.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["EPP", "pies", "botas"]

variables:
  caracteristica_1: "puntera de acero"
  caracteristica_2: "suela resistente al calor"

respuesta: "puntera de acero"
tipo: completar

enunciado: "Las botas de seguridad para herreros deben tener {caracteristica_1} para evitar que caigan objetos pesados sobre los pies."

explicacion: |
  La puntera de acero protege los dedos de impactos de herramientas o piezas de metal. Además, la suela debe ser resistente al calor para evitar quemaduras por contacto con metal fundido o superficies calientes.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["EPP", "ropa", "ignifugo"]

variables:
  propiedad: "ignífuga"

respuesta: "ignífuga"
tipo: completar

enunciado: "La ropa de trabajo para herrería debe estar confeccionada con materiales {propiedad} que no se inflamen ni se derritan sobre la piel."

explicacion: |
  Los materiales sintéticos comunes pueden derretirse y adherirse a la piel, causando quemaduras graves. Los materiales ignífugos o cuero grueso son esenciales para la protección térmica.
```

### 26 — pregunta 26

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["cultura-seguridad", "pilares"]

variables:
  pilar_1: "conocimiento de los riesgos"
  pilar_2: "uso correcto del EPP"
  pilar_3: "mantenimiento adecuado de herramientas y fragua"

respuesta: "conocimiento de los riesgos"
tipo: completar

enunciado: "Uno de los tres pilares fundamentales de la cultura de seguridad en oficios metalúrgicos es el {pilar_1}."

explicacion: |
  La seguridad se basa en: 1) Conocer los riesgos, 2) Usar correctamente el EPP y 3) Mantener herramientas y fragua. Ignorar cualquiera de estos aumenta el riesgo de accidentes.
```

### 27 — pregunta 27

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "avanzado"
  tags: ["fragua", "riesgos", "explosion"]

variables:
  riesgo: "incendio y explosión"

respuesta: "incendio y explosión"
tipo: completar

enunciado: "El manejo incorrecto de la fragua, especialmente con ciertos combustibles, puede generar un riesgo real de {riesgo}."

explicacion: |
  La fragua es la fuente de calor, pero también de peligros si no se maneja con rigor. El riesgo de incendio y explosión es real, especialmente si se utilizan combustibles inadecuados o hay fugas.
```

### 28 — pregunta 28

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "intermedio"
  tags: ["matematicas", "logaritmo", "naturaleza"]

variables:
  base: "e"
  nombre_funcion: "log(x)"

respuesta: "log(x)"
tipo: input

enunciado: "En el contexto de cálculos técnicos, ¿qué función representa el logaritmo natural? (Escribe la función DSL: {nombre_funcion})"

explicacion: |
  En VBLang y matemáticas avanzadas, `log(x)` se refiere al logaritmo natural (base e). Para base 10 se usa `log10(x)`. Es importante distinguirlos en cálculos de transferencia de calor o eficiencia.
```

### 29 — pregunta 29

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "avanzado"
  tags: ["constantes", "fisica", "c"]

variables:
  constante: "c"
  valor_aprox: "300000"

respuesta: "300000"
tipo: input

enunciado: "La constante {constante} (velocidad de la luz en km/s) se aproxima a {valor_aprox} en cálculos físicos simplificados."

explicacion: |
  La constante `c` representa la velocidad de la luz en el vacío. En cálculos de radiación térmica o física aplicada a la forja, es una constante fundamental.
```

### 30 — pregunta 30

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["fragua", "funcion", "corazon"]

variables:
  funcion: "corazón del taller"

respuesta: "corazón del taller"
tipo: completar

enunciado: "La fragua es considerada el {funcion} del taller, pero también la fuente de mayores peligros si no se maneja con rigor."

explicacion: |
  La fragua es central en el proceso de forja, pero su manejo requiere estrictas normas de seguridad debido al riesgo de incendio y explosión.
```

### 31 — pregunta 31

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "avanzado"
  tags: ["matematicas", "temperatura", "random"]

variables:
  temp_inicial: random(20, 30)
  delta_temp: random(800, 1000)
  temp_final: temp_inicial + delta_temp

respuesta: temp_final
tipo: input

enunciado: "Si la temperatura ambiente es {temp_inicial}°C y se añade {delta_temp}°C en la fragua, la temperatura final es {temp_final}°C."

explicacion: |
  Cálculo simple de temperatura final. En herrería, controlar la temperatura es crucial para la calidad del metal y la seguridad del operario.
```

### 32 — pregunta 32

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["EPP", "guantes", "muñecas"]

variables:
  zona: "muñecas y antebrazos"

respuesta: "muñecas y antebrazos"
tipo: completar

enunciado: "Los guantes largos de forja protegen principalmente las {zona} de las chispas que suben por la manga."

explicacion: |
  Las chispas tienden a subir por la manga debido al calor y al movimiento. Los guantes largos cubren esta zona vulnerable, evitando quemaduras en muñecas y antebrazos.
```

### 33 — pregunta 33

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "avanzado"
  tags: ["matematicas", "factorial", "combinaciones"]

variables:
  n: 4
  resultado: factorial(n)

respuesta: resultado
tipo: input

enunciado: "Si hay {n} tipos de EPP críticos a inspeccionar, el número de permutaciones posibles de inspección es {resultado}."

explicacion: |
  El factorial de 4 (4!) es 24. Esto representa el número de formas de ordenar la inspección de 4 elementos distintos.
```

### 34 — pregunta 34

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "basico"
  tags: ["riesgos", "chispas", "fuego"]

variables:
  riesgo: "incendio"

respuesta: "incendio"
tipo: completar

enunciado: "Las chispas voladoras de la forja pueden iniciar un {riesgo} si entran en contacto con materiales inflamables."

explicacion: |
  Las chispas son fuentes de ignición potenciales. Mantener el área libre de materiales inflamables es una medida de seguridad básica para prevenir incendios.
```

### 35 — pregunta 35

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_seguridad_herreria"
  nivel: "avanzado"
  tags: ["matematicas", "logaritmo", "ruido"]

variables:
  intensidad: 1000
  resultado: log10(intensidad)

respuesta: resultado
tipo: input

enunciado: "Si la intensidad del ruido es {intensidad}, el nivel en decibelios (escala logarítmica base 10) es {resultado} dB."

explicacion: |
  `log10(1000)` es 3. En acústica, los decibelios se calculan usando logaritmos base 10. El ruido constante en la herrería requiere protección auditiva.
```
