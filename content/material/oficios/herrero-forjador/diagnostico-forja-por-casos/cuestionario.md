# Oficios — diagnostico forja por casos (cuestionario, 43 preguntas VBLang)

> Tema: `oficios/herrero-forjador/diagnostico-forja-por-casos`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["temperatura", "sobrecalentamiento", "grietas"]

variables:
  temp_base: random(1200, 1300)
  incremento: random(50, 150)
  temp_final: temp_base + incremento

respuesta: "sobrecalentamiento"
tipo: input

enunciado: "Si un herrero eleva la temperatura de un acero al carbono de {temp_base} °C a {temp_final} °C, acercándose peligrosamente al punto de fusión, ¿qué defecto térmico principal corre riesgo de aparecer?"

explicacion: |
  Al superar ciertos límites térmicos, los límites de grano se debilitan o funden parcialmente. Este fenómeno se denomina sobrecalentamiento (o quema), lo que provoca fracturas internas al forjar porque el material ya no se deforma plásticamente de manera uniforme.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "avanzado"
  tags: ["fibras", "granos", "dirección"]

variables:
  direccion_fibra: "laminación_previa"

respuesta: "perpendicular"
tipo: input

enunciado: "En ciertos aceros, forjar {direccion_fibra}mente a la dirección de las fibras puede facilitar la apertura de grietas. ¿Qué dirección de forja es la peligrosa en este contexto específico?"

explicacion: |
  Forjar perpendicularmente a la dirección de las fibras (granos) puede facilitar la apertura de grietas, ya que se está cortando la continuidad del flujo de material que le da resistencia.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["temperatura", "cálculo", "margen"]

variables:
  temp_optima: random(1200, 1250)
  margen_error: random(20, 50)
  temp_min: temp_optima - margen_error
  temp_max: temp_optima + margen_error

respuesta: temp_min
tipo: input

enunciado: "Si la temperatura óptima para forjar un acero es {temp_optima} °C y se permite un margen de error de ±{margen_error} °C para evitar grietas por frío, ¿cuál es el límite inferior de temperatura seguro?"

explicacion: |
  El límite inferior se calcula restando el margen de error a la temperatura óptima: {temp_optima} - {margen_error} = {temp_min}. Bajar de este punto aumenta drásticamente la resistencia al flujo.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "basico"
  tags: ["soldadura", "definición", "sin relleno"]

variables:
  material_relleno: "ninguno"

respuesta: "sin agregar material de relleno"
tipo: input

enunciado: "La soldadura de forja se define como el proceso de unir dos piezas mediante calor y martillado {material_relleno}."

explicacion: |
  A diferencia de la soldadura por arco o oxicorte, la soldadura de forja no utiliza varilla o material de aporte externo. La unión se logra puramente por la fusión y compactación de las bases metálicas.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["temperatura", "inicio", "forja"]

variables:
  temp_max: random(1250, 1300)
  temp_min: random(900, 1000)
  temp_actual: random(temp_min, temp_max)

respuesta: "demasiado_frío"
tipo: input

enunciado: "Si el rango ideal de forja es entre {temp_min} °C y {temp_max} °C, y la pieza está actualmente a {temp_actual} °C (asumiendo que {temp_actual} es menor que el inicio ideal de 1100 °C), ¿cómo se clasifica el estado térmico?"

explicacion: |
  Si la temperatura está por debajo del rango de trabajo seguro (ej. 1100 °C para muchos aceros), se considera "demasiado frío". Forzar en este estado genera grietas por alta resistencia.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "avanzado"
  tags: ["velocidad", "deformación", "grietas"]

variables:
  velocidad: "alta"

respuesta: "velocidad_de_deformación"
tipo: input

enunciado: "Dos factores principales causan grietas: temperatura y {velocidad}. ¿Cuál es el segundo factor crítico mencionado en la teoría?"

explicacion: |
  La velocidad de deformación. Un golpe demasiado rápido o una deformación excesiva en un tiempo muy corto puede superar la capacidad del material para fluir, generando grietas.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["temperatura", "enfriamiento", "cálculo"]

variables:
  temp_inicial: random(1200, 1250)
  enfriamiento: random(150, 300)
  temp_final: temp_inicial - enfriamiento

respuesta: temp_final
tipo: input

enunciado: "Una pieza se calienta a {temp_inicial} °C. Si se enfría {enfriamiento} °C antes de ser golpeada, ¿cuál es su temperatura actual?"

explicacion: |
  La temperatura actual es la inicial menos el enfriamiento: {temp_inicial} - {enfriamiento} = {temp_final}. Este valor debe compararse con el rango de forja seguro para determinar si es seguro trabajar.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["soldadura", "temperatura_desigual", "causa"]

variables:
  pieza_caliente: "A"
  pieza_fria: "B"

respuesta: "temperatura_desigual"
tipo: input

enunciado: "Si la pieza {pieza_caliente} está a 1300 °C y la pieza {pieza_fria} está a 1000 °C, ¿qué defecto térmico impide la soldadura?"

explicacion: |
  La temperatura desigual entre las piezas es una causa frecuente de fallo. Una zona se sobrecalienta mientras la otra no alcanza la plasticidad necesaria para la unión.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "avanzado"
  tags: ["fibras", "laminación", "granos"]

variables:
  proceso: "laminación"

respuesta: "laminación"
tipo: input

enunciado: "La dirección de las fibras del metal corresponde a la dirección en la que fluyen los granos durante el proceso de {proceso} o forja previa."

explicacion: |
  Las fibras siguen la dirección del flujo de material durante la manufactura previa (como la laminación). Forjar perpendicularmente a esta dirección puede ser peligroso en aceros sensibles.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["temperatura", "fusión", "cálculo"]

variables:
  temp_fusion_acero: 1500
  temp_sobrecalentamiento: random(1350, 1450)

respuesta: "sobrecalentamiento"
tipo: input

enunciado: "Si el punto de fusión del acero es 1500 °C y se trabaja a {temp_sobrecalentamiento} °C, ¿qué estado peligroso se ha alcanzado?"

explicacion: |
  Se ha alcanzado el estado de sobrecalentamiento o quema. Aunque no se ha fundido completamente, los límites de grano se han debilitado significativamente, risking fractura.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["tensión", "grieta", "causa"]

variables:
  causa: "tensión_interna"

respuesta: "tensión_interna"
tipo: input

enunciado: "Forzar la deformación con calor insuficiente genera {causa} que superan la resistencia del metal, provocando grietas."

explicacion: |
  Las tensiones internas generadas por la deformación en frío o con calor insuficiente no pueden ser aliviadas por el flujo plástico del metal, resultando en fractura.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "basico"
  tags: ["diagnóstico", "experiencia", "defectos"]

variables:
  experto: "herrero_experimental"

respuesta: "defectos"
tipo: input

enunciado: "Un herrero experimentado sabe que la pieza 'habla' a través de sus {experto}. ¿Qué es lo que la pieza muestra?"

explicacion: |
  La pieza muestra sus defectos (grietas, fallos de unión). Identificar la causa raíz de estos defectos permite corregir el proceso térmico o mecánico.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["temperatura", "seguridad", "cálculo"]

variables:
  temp_min_segura: random(900, 1000)
  temp_actual: random(800, 899)

respuesta: "peligroso"
tipo: input

enunciado: "Si la temperatura mínima segura para forjar es {temp_min_segura} °C y la pieza está a {temp_actual} °C, ¿cómo se clasifica la situación?"

explicacion: |
  Es peligroso. La temperatura está por debajo del límite seguro, lo que implica una alta resistencia al flujo y riesgo inminente de grietas por deformación en frío.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "basico"
  tags: ["limpieza", "fallo", "causa"]

variables:
  impureza: "escoria"

respuesta: "escoria"
tipo: input

enunciado: "La {impureza} que se forma en la superficie debe ser removida o fundida con flux antes de calentar para la soldadura."

explicacion: |
  La escoria (óxido) actúa como barrera. Si no se elimina, impide la unión metálica directa entre las piezas.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["temperatura", "soldadura", "cálculo"]

variables:
  temp_fusion: 1500
  temp_soldadura: random(1300, 1400)

respuesta: temp_soldadura
tipo: input

enunciado: "Para soldar, la temperatura debe estar cercana al punto de fusión (1500 °C) pero sin fundirse. Si se elige una temperatura de {temp_soldadura} °C, ¿es adecuada para evitar la quema?"

explicacion: |
  Sí, si está por debajo del punto de fusión pero alta suficiente para la plasticidad. Sin embargo, debe vigilarse para no acercarse demasiado a los límites de grano que se funden.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "avanzado"
  tags: ["dirección", "grieta", "diagnóstico"]

variables:
  direccion_peligrosa: "perpendicular"

respuesta: "perpendicular"
tipo: input

enunciado: "Forjar {direccion_peligrosa}mente a las fibras en ciertos aceros facilita la apertura de grietas. ¿Cuál es esa dirección?"

explicacion: |
  La dirección perpendicular a las fibras corta la continuidad del material, facilitando la propagación de grietas.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["temperatura", "diferencia", "soldadura"]

variables:
  temp_pieza1: random(1250, 1300)
  temp_pieza2: random(1100, 1200)
  diferencia: temp_pieza1 - temp_pieza2

respuesta: diferencia
tipo: input

enunciado: "Si la pieza A está a {temp_pieza1} °C y la pieza B a {temp_pieza2} °C, ¿cuál es la diferencia de temperatura que puede causar fallo en la soldadura?"

explicacion: |
  La diferencia es {diferencia} °C. Esta desigualdad térmica es una causa frecuente de que la soldadura no prenda, ya que una zona no alcanza la plasticidad adecuada.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["temperatura", "grieta", "frío", "cálculo"]

variables:
  temp_min_forja: 900
  temp_actual: random(700, 899)

respuesta: "grieta"
tipo: input

enunciado: "Si la temperatura mínima para forjar es {temp_min_forja} °C y la pieza está a {temp_actual} °C, ¿qué defecto es probable que aparezca al golpear?"

explicacion: |
  Es probable que aparezca una grieta. La temperatura está por debajo del rango de forja, aumentando la resistencia y generando tensiones internas que superan la resistencia del metal.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["temperatura", "sobrecalentamiento", "quema"]

variables:
  temp_base: random(1200, 1300)
  margen_sobrecalentamiento: random(50, 100)

respuesta: "{temp_base + margen_sobrecalentamiento}"
tipo: input

enunciado: "Un acero al carbono tiene su punto de inicio de sobrecalentamiento a {temp_base} °C. Si el herrero supera este límite en {margen_sobrecalentamiento} °C, se produce la 'quema'. ¿A qué temperatura exacta ocurrió el fallo?"

explicacion: |
  La quema ocurre cuando los límites de grano se debilitan o funden parcialmente. Esto sucede al superar la temperatura crítica de trabajo segura. La respuesta es la suma de la temperatura base de inicio de sobrecalentamiento más el margen excedente.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["soldadura", "flux", "bórax", "limpieza"]

variables:
  componentes_flux: uno_de(["bórax y agua", "sílice y carbonato", "sulfato y magnesio"])
  temp_fusion_flux: random(600, 700)

respuesta: componentes_flux
tipo: completar

enunciado: "Para remover el óxido y proteger la superficie del oxígeno antes de calentar para una soldadura, se usa un flux compuesto principalmente por {componentes_flux}. Este funde a una temperatura aproximada de {temp_fusion_flux} °C."

explicacion: |
  El flux (comúnmente bórax y agua) se utiliza porque funde a menor temperatura que el acero. Esto permite limpiar las superficies de óxido y escoria, protegiéndolas del oxígeno atmosférico para que los metales limpios puedan fusionarse.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "avanzado"
  tags: ["fibras", "dirección", "aceros"]

variables:
  direccion_forjado: uno_de(["paralelo", "perpendicular", "oblicuo"])
  riesgo_grieta: "alto"

respuesta: direccion_forjado
tipo: completar

enunciado: "Forjar {direccion_forjado} a las fibras del metal en ciertos aceros puede facilitar la apertura de grietas, ya que se opone a la dirección natural de los granos cristalinos."

explicacion: |
  La dirección de las fibras (flujo de granos) debe considerarse. Forjar perpendicularmente a estas fibras en ciertos aceros puede facilitar la apertura de grietas, ya que se rompe la continuidad del material en su dirección de mayor resistencia.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["soldadura", "tiempo", "temperatura"]

variables:
  tiempo_minimo: random(5, 10)
  tiempo_maximo: random(15, 20)

respuesta: tiempo_minimo + " a " + tiempo_maximo
tipo: completar

enunciado: "Para que la soldadura de forja prenda correctamente, las piezas deben mantenerse en el punto crítico durante un tiempo adecuado, típicamente entre {tiempo_minimo} y {tiempo_maximo} segundos, dependiendo del grosor."

explicacion: |
  La falta de tiempo en el punto crítico es una causa frecuente de soldadura fallida. Las superficies deben alcanzar una temperatura homogénea y cercana al punto de fusión sin llegar a fundirse, lo que requiere un tiempo suficiente de mantenimiento térmico.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "basico"
  tags: ["sobrecalentamiento", "síntomas", "granos"]

variables:
  efecto_granos: "debilitamiento"

respuesta: efecto_granos
tipo: completar

enunciado: "El sobrecalentamiento provoca que los límites de los granos cristalinos experimenten {efecto_granos} o se fundan parcialmente, lo que lleva a la fractura interna al golpear."

explicacion: |
  El sobrecalentamiento debilita los límites de grano. Al golpear el metal en este estado, no se deforma plásticamente de manera uniforme, sino que se fractura internamente debido a la pérdida de cohesión entre los granos.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "basico"
  tags: ["soldadura", "definición", "técnica"]

variables:
  nombre_tecnica: "soldadura de forja"

respuesta: nombre_tecnica
tipo: completar

enunciado: "El proceso que consiste en unir dos piezas de metal mediante calor y martillado, sin agregar material de relleno, se denomina {nombre_tecnica}."

explicacion: |
  La soldadura de forja (o soldadura en caliente) une el metal base mediante calor y presión mecánica (martillado), sin filler. Esto diferencia a esta técnica de la soldadura por arco o gas, que utilizan material de aportación.
```

### 25 — pregunta 25

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["tensión", "deformación", "fractura"]

variables:
  resistencia_inicial: random(200, 300)
  factor_aumento: random(1.5, 2.0)

respuesta: "{redondear(resistencia_inicial * factor_aumento, 0)}"
tipo: input

enunciado: "Si la resistencia inicial del metal a deformarse es {resistencia_inicial} MPa y al enfriarse la resistencia aumenta por un factor de {factor_aumento}, ¿cuál es la nueva resistencia que debe superar el herrero para evitar grietas?"

explicacion: |
  La resistencia al flujo del material aumenta drásticamente si el metal está demasiado frío. Forzar la deformación genera tensiones internas que pueden superar la resistencia del metal, provocando grietas. El cálculo es la resistencia inicial multiplicada por el factor de aumento.
```

### 26 — pregunta 26

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["óxido", "escoria", "barrera"]

variables:
  tipo_barrera: "óxido, escoria o grasa"

respuesta: tipo_barrera
tipo: completar

enunciado: "Las superficies deben estar limpias porque el {tipo_barrera} actúa como una barrera física que impide la unión directa de los metales."

explicacion: |
  La falta de limpieza es una causa frecuente de soldadura fallida. El óxido, la escoria o la grasa actúan como barrera entre las superficies metálicas, impidiendo que se fusionen incluso a altas temperaturas.
```

### 27 — pregunta 27

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "basico"
  tags: ["martillado", "presión", "unión"]

variables:
  accion_martillo: "expulsar escoria y unir"

respuesta: accion_martillo
tipo: completar

enunciado: "El martillado en la soldadura de forja cumple dos funciones principales: {accion_martillo} las superficies para lograr la unión metálica."

explicacion: |
  El martillado no solo forma la pieza, sino que en la soldadura sirve para expulsar la escoria residual y forzar la unión íntima de los granos metálicos limpios, permitiendo la difusión atómica.
```

### 28 — pregunta 28

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["seguridad", "temperatura", "margen"]

variables:
  temp_max_segura: random(1250, 1350)
  temp_real: random(1100, 1200)

respuesta: "{temp_max_segura - temp_real}"
tipo: input

enunciado: "Si la temperatura máxima segura para forjar es {temp_max_segura} °C y la temperatura actual de la pieza es {temp_real} °C, ¿cuánto margen de calentamiento queda antes de riesgo de sobrecalentamiento?"

explicacion: |
  El margen de seguridad es la diferencia entre la temperatura máxima segura y la temperatura actual. Mantenerse dentro de este rango evita el sobrecalentamiento o la quema del material.
```

### 29 — pregunta 29

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["tiempo", "fallo", "unión"]

variables:
  problema: "falta de tiempo"

respuesta: problema
tipo: completar

enunciado: "Si las piezas se separan antes de que la difusión atómica se complete, la causa probable es la {problema} en el punto crítico."

explicacion: |
  La falta de tiempo en el punto crítico es una causa frecuente de soldadura fallida. La unión requiere que las superficies estén a temperatura adecuada durante el tiempo necesario para que los átomos se difundan y creen un enlace sólido.
```

### 30 — pregunta 30

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "avanzado"
  tags: ["fibras", "dirección", "resistencia"]

variables:
  efecto: "facilita apertura"

respuesta: efecto
tipo: completar

enunciado: "Forjar perpendicularmente a las fibras del metal en ciertos aceros puede {efecto} de grietas, comprometiendo la integridad estructural."

explicacion: |
  La dirección de las fibras debe considerarse. Forjar perpendicularmente a estas fibras puede facilitar la apertura de grietas, ya que se opone a la dirección natural de los granos, debilitando la cohesión del material.
```

### 31 — pregunta 31

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["quema", "defecto", "granos"]

variables:
  defecto: "quema"

respuesta: defecto
tipo: completar

enunciado: "Cuando los límites de los granos cristalinos se funden parcialmente, el defecto resultante se conoce como {defecto}."

explicacion: |
  La quema es un defecto grave que ocurre cuando el metal se calienta demasiado cerca de su punto de fusión. Los límites de grano se debilitan o funden, causando fractura interna al forjar.
```

### 32 — pregunta 32

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "basico"
  tags: ["grieta", "frío", "tensión"]

variables:
  causa: "tensiones internas"

respuesta: causa
tipo: completar

enunciado: "Forzar la deformación con calor insuficiente genera {causa} que superan la resistencia del metal, provocando grietas repentinas."

explicacion: |
  Si el metal está demasiado frío, la resistencia al flujo aumenta. Forzar la deformación genera tensiones internas que superan la resistencia del metal, provocando grietas repentinas.
```

### 33 — pregunta 33

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "basico"
  tags: ["limpieza", "superficie", "soldadura"]

variables:
  requisito: "superficies limpias"

respuesta: requisito
tipo: completar

enunciado: "Para que la soldadura prenda, es fundamental que las {requisito} estén libres de óxido, escoria o grasa."

explicacion: |
  La limpieza superficial es crítica. Cualquier contaminante actúa como barrera para la unión metálica, impidiendo la difusión atómica necesaria para una soldadura fuerte.
```

### 34 — pregunta 34

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["temperatura", "rango", "trabajo"]

variables:
  temp_min: random(800, 900)
  temp_max: random(1100, 1200)

respuesta: temp_min + " a " + temp_max
tipo: completar

enunciado: "El rango de temperatura de trabajo seguro para muchos aceros al carbono está entre {temp_min} °C y {temp_max} °C, dependiendo del tipo de acero."

explicacion: |
  El herrero debe trabajar dentro de un rango específico. Por debajo, el metal es demasiado resistente; por encima, se sobrecalienta o quema. Este rango varía según la composición del acero.
```

### 35 — pregunta 35

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["óxido", "barrera", "oxígeno"]

variables:
  barrera: "óxido"

respuesta: barrera
tipo: completar

enunciado: "El {barrera} que se forma en la superficie debe ser removido porque actúa como una barrera contra el oxígeno y la unión metálica."

explicacion: |
  El óxido (escoria) debe ser removido con flux. Protege la superficie del oxígeno atmosférico y permite que los metales limpios se fusionen durante la soldadura.
```

### 36 — pregunta 36

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["fractura", "sobrecalentamiento", "granos"]

variables:
  causa: "debilitamiento de límites de grano"

respuesta: causa
tipo: completar

enunciado: "La fractura interna al golpear se debe al {causa} por sobrecalentamiento."

explicacion: |
  El sobrecalentamiento debilita los límites de grano. Al golpear, el material no se deforma uniformemente, sino que se fractura internamente debido a la pérdida de cohesión entre los granos.
```

### 37 — pregunta 37

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["homogeneidad", "temperatura", "unión"]

variables:
  requisito: "temperatura homogénea"

respuesta: requisito
tipo: completar

enunciado: "Ambas superficies deben alcanzar una {requisito} y cercana al punto de fusión, pero sin llegar a fundirse."

explicacion: |
  La homogeneidad térmica es crucial. Si una pieza está más fría que la otra, la unión será débil o fallará, ya que la difusión atómica requiere temperaturas similares en ambos lados.
```

### 38 — pregunta 38

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["diferencia", "temperatura", "fallo"]

variables:
  temp_pieza_a: random(1100, 1200)
  temp_pieza_b: random(1000, 1100)

respuesta: "{abs(temp_pieza_a - temp_pieza_b)}"
tipo: input

enunciado: "Si la pieza A está a {temp_pieza_a} °C y la pieza B a {temp_pieza_b} °C, ¿cuál es la diferencia de temperatura que puede causar una soldadura fallida?"

explicacion: |
  La temperatura insuficiente o desigual entre las piezas es una causa frecuente de fallo. La diferencia calculada indica la heterogeneidad térmica que puede impedir la unión correcta.
```

### 39 — pregunta 39

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "basico"
  tags: ["grieta", "frío", "resistencia"]

variables:
  defecto: "grieta por frío"

respuesta: defecto
tipo: completar

enunciado: "La {defecto} se produce cuando la resistencia al flujo del material aumenta drásticamente por calor insuficiente."

explicacion: |
  El frío excesivo aumenta la resistencia del metal. Forzar la deformación en estas condiciones genera tensiones internas que superan la resistencia del metal, provocando grietas.
```

### 40 — pregunta 40

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "basico"
  tags: ["flux", "función", "protección"]

variables:
  funcion: "fundir y proteger"

respuesta: funcion
tipo: completar

enunciado: "El flux tiene la función de {funcion} las superficies metálicas del oxígeno y limpiar el óxido."

explicacion: |
  El flux funde a menor temperatura que el acero, limpiando las superficies y formando una capa protectora contra el oxígeno, permitiendo la fusión de los metales limpios.
```

### 41 — pregunta 41

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["tiempo", "mantenimiento", "soldadura"]

variables:
  tiempo_base: random(10, 15)
  factor_grosor: random(1.5, 2.0)

respuesta: "{redondear(tiempo_base * factor_grosor, 0)}"
tipo: input

enunciado: "Si el tiempo base de mantenimiento es {tiempo_base} segundos y el grosor de la pieza requiere un factor de {factor_grosor}, ¿cuánto tiempo total se debe mantener la temperatura?"

explicacion: |
  El tiempo de mantenimiento depende del grosor. Se calcula multiplicando el tiempo base por un factor que refleja la masa térmica a uniformar, asegurando la difusión atómica completa.
```

### 42 — pregunta 42

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "avanzado"
  tags: ["dirección", "fibras", "grieta"]

variables:
  causa: "dirección perpendicular"

respuesta: causa
tipo: completar

enunciado: "La grieta puede facilitarse si el forjado se realiza en {causa} a las fibras del metal."

explicacion: |
  Forjar perpendicularmente a las fibras en ciertos aceros facilita la apertura de grietas, ya que se opone a la dirección natural de los granos, debilitando la cohesión del material.
```

### 43 — pregunta 43

```
metadata:
  materia: "Oficios"
  tema: "herrero_forjador_diagnostico_forja_por_casos"
  nivel: "intermedio"
  tags: ["quema", "síntoma", "fractura"]

variables:
  sintoma: "fractura interna"

respuesta: sintoma
tipo: completar

enunciado: "El síntoma principal de la quema es la {sintoma} al golpear el metal sobrecalentado."

explicacion: |
  La quema provoca que los límites de grano se debiliten o fundan. Al golpear, el material no se deforma uniformemente, sino que se fractura internamente, comprometiendo la integridad de la pieza.
```
