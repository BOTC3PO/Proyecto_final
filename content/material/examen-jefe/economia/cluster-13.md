# Examen jefe — [PENDIENTE #778]

> Logro #778. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **139 preguntas totales** en 5/5 secciones.

---

## Sección: ambiente-interno-y-externo-organizacion (28 preguntas)

```
metadata:
  materia: "Economía"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["ambiente_interno", "definicion"]

variables:
  control_directo: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "El ambiente interno de una organización está compuesto por factores sobre los cuales la empresa tiene control directo."

explicacion: |
  El ambiente interno incluye recursos humanos, materiales, naturales y de conocimiento que la organización gestiona directamente.
```

```
metadata:
  materia: "Economía"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["ambiente_interno", "recursos"]

variables:
  recurso: uno_de(["humano", "material", "natural", "de conocimiento"])

respuesta: "recursos " + recurso
tipo: completar

enunciado: "Los factores que componen el ambiente interno se denominan recursos {recurso}."

explicacion: |
  La teoría clasifica los elementos internos en cuatro tipos principales: humanos, materiales, naturales y de conocimiento.
```

```
metadata:
  materia: "Economía"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["recursos_humanos", "activos"]

variables:
  activo: uno_de(["el más importante", "el secundario", "el irrelevante"])

respuesta: "recursos humanos"
tipo: completar

enunciado: "Los {activo} de una organización son los recursos humanos, debido a sus habilidades y experiencia."

explicacion: |
  Los recursos humanos son considerados el activo más valioso porque incluyen la cultura laboral y la capacidad de innovación.
```

```
metadata:
  materia: "Economía"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["ambiente_externo", "control"]

respuesta: falso
tipo: vf

enunciado: "Una organización tiene control directo sobre las condiciones del ambiente externo."

explicacion: |
  El ambiente externo abarca fuerzas fuera de la organización que no puede controlar directamente, solo adaptar su estrategia a ellas.
```

```
metadata:
  materia: "Economía"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "avanzado"
  tags: ["recursos_conocimiento", "patentes"]

variables:
  elemento: uno_de(["patentes", "procesos documentados", "cultura organizacional"])

respuesta: "recursos de conocimiento"
tipo: completar

enunciado: "Las {elemento} forman parte de los recursos de conocimiento dentro de la organización."

explicacion: |
  Los recursos de conocimiento abarcan el saber hacer, patentes y procesos documentados que potencian la ventaja competitiva.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["definiciones", "ambiente_interno"]

variables:
  respuesta_correcta: "ambiente interno"

respuesta: "ambiente interno"
tipo: completar

enunciado: "Los factores, recursos y condiciones que están dentro de la organización y sobre los cuales tiene control directo se denominan: ___"

explicacion: |
  El ambiente interno abarca todos los elementos internos de la organización, como la estructura, los recursos humanos y la cultura corporativa, sobre los cuales la empresa tiene influencia directa.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["ambiente_externo", "micro_macro"]

variables:
  micro: "microambiente"
  macro: "macroambiente"

respuesta: "microambiente y macroambiente"
tipo: completar

enunciado: "El ambiente externo se divide generalmente en dos capas: el ___ y el ___."

explicacion: |
  El ambiente externo se clasifica en microambiente (actores directos como clientes y proveedores) y macroambiente (factores generales como leyes, economía y tecnología).
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["recursos_humanos", "ambiente_interno"]

variables:
  activo_clave: "recursos humanos"

respuesta: "recursos humanos"
tipo: completar

enunciado: "Según la teoría, quizás el activo más importante dentro del ambiente interno son los: ___"

explicacion: |
  Los recursos humanos incluyen habilidades, experiencia y cultura laboral, siendo fundamentales para la competitividad y la innovación interna.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["sistemas_abiertos", "teoria"]

variables:
  tipo_sistema: "sistemas abiertos"

respuesta: "sistemas abiertos"
tipo: completar

enunciado: "Las organizaciones se consideran ___ porque interactúan constantemente con su entorno."

explicacion: |
  Al ser sistemas abiertos, las organizaciones intercambian materia, energía e información con su entorno, por lo que no pueden operar en el vacío.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["recursos_naturales", "gestion"]

variables:
  contexto: "inventario almacenado"

respuesta: "ambiente interno"
tipo: completar

enunciado: "Cuando una organización gestiona directamente su inventario de materias primas almacenadas, estos recursos naturales forman parte del: ___"

explicacion: |
  Aunque los recursos naturales existen en el exterior, cuando son adquiridos y gestionados como inventario interno, pasan a ser parte del ambiente interno de la organización.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "avanzado"
  tags: ["estrategia", "riesgo"]

variables:
  consecuencia: "obsoleta"

respuesta: "obsoleta"
tipo: completar

enunciado: "Si una empresa ignora los cambios en el ambiente externo, como los gustos de los consumidores, puede volverse: ___"

explicacion: |
  La falta de adaptación a las fuerzas externas puede llevar a la obsolescencia del producto o servicio, perdiendo competitividad en el mercado.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["recursos_conocimiento", "intangible"]

variables:
  componentes: "patentes, procesos, cultura"

respuesta: "patentes, procesos documentados y cultura organizacional"
tipo: completar

enunciado: "Los recursos de conocimiento abarcan el saber hacer, las ___ y los procesos documentados."

explicacion: |
  Los recursos de conocimiento incluyen activos intangibles como patentes, know-how y la cultura que permea la organización.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["clasificacion", "definiciones"]

variables:
  micro: "microambiente"
  macro: "macroambiente"

respuesta: "microambiente"
tipo: completar

enunciado: "El ambiente externo que incluye a los actores directos como clientes, proveedores y competidores se denomina: ___"

explicacion: |
  El microambiente (o específico) afecta directamente a la organización y está compuesto por actores con los que interactúa frecuentemente.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["importancia", "decisiones"]

variables:
  objetivo: "decisiones informadas"

respuesta: "decisiones más informadas y estratégicas"
tipo: completar

enunciado: "Comprender la dualidad entre ambiente interno y externo permite a los líderes tomar: ___"

explicacion: |
  El análisis de ambos ambientes es vital para la toma de decisiones estratégicas, permitiendo aprovechar oportunidades y mitigar amenazas.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["recursos_materiales", "infraestructura"]

variables:
  elementos: "edificios, maquinaria"

respuesta: "recursos materiales"
tipo: completar

enunciado: "La infraestructura física, como edificios y maquinaria, corresponde a los: ___"

explicacion: |
  Los recursos materiales son los activos físicos que determinan la capacidad productiva de la organización.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["estrategia", "adaptacion"]

variables:
  accion: "adaptar estrategia"

respuesta: "adaptar su estrategia"
tipo: completar

enunciado: "A las fuerzas del ambiente externo, la organización no puede controlarlas directamente, solo puede: ___"

explicacion: |
  Dado que el ambiente externo es incontrolable, la respuesta estratégica adecuada es la adaptación de la organización a dichas fuerzas.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["cultura", "recursos_humanos"]

variables:
  factor: "colaboración e innovación"

respuesta: "colaboración e innovación"
tipo: completar

enunciado: "Un ambiente interno sano fomenta la ___ y la innovación."

explicacion: |
  La cultura organizacional y el clima laboral positivo son pilares del ambiente interno que impulsan la productividad y la creatividad.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["macroambiente", "factores"]

variables:
  ejemplos: "leyes, economia, tecnologia"

respuesta: "leyes, economía y tecnología"
tipo: completar

enunciado: "El macroambiente incluye factores generales como las ___, la situación económica y los avances tecnológicos."

explicacion: |
  El macroambiente abarca fuerzas amplias que afectan a todas las industrias, como el marco legal, el contexto económico y el desarrollo tecnológico.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "avanzado"
  tags: ["sinergia", "eficiencia"]

variables:
  caracteristica: "bien integrados y potenciados"

respuesta: "bien integrados y se potencian entre sí"
tipo: completar

enunciado: "Un ambiente interno fuerte es aquel donde los recursos están: ___"

explicacion: |
  La efectividad del ambiente interno depende de la integración sinérgica de sus recursos humanos, materiales y de conocimiento.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["recursos_naturales", "diferenciacion"]

variables:
  ubicacion: "macroambiente"

respuesta: "macroambiente"
tipo: completar

enunciado: "Los recursos naturales no gestionados directamente por la organización se consideran parte del: ___"

explicacion: |
  Los recursos naturales en su estado original son parte del entorno externo (macroambiente), solo pasan al interno cuando son adquiridos y gestionados.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

variables:
  concepto: "sistemas abiertos"

respuesta: "sistemas abiertos"
tipo: completar

enunciado: "Para entender cómo funciona una organización, es fundamental recordar que son ___ que interactúan con el entorno."

explicacion: |
  La teoría de sistemas clasifica a las organizaciones como abiertas debido a su constante intercambio con el ambiente externo.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["competitividad", "eficiencia"]

variables:
  condicion: "gestionar bien el ambiente interno"

respuesta: "gestionar bien su ambiente interno"
tipo: completar

enunciado: "Si una organización no gestiona bien su ambiente interno, no podrá competir ni aprovechar las oportunidades del exterior."

explicacion: |
  Una gestión interna deficiente debilita la capacidad de la empresa para responder eficazmente a las oportunidades externas.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["definiciones", "microambiente"]

variables:
  nombre: "microambiente"

respuesta: "microambiente"
tipo: completar

enunciado: "La capa del ambiente externo que incluye a los actores directos se llama: ___"

explicacion: |
  El microambiente, también llamado específico, está compuesto por los actores con los que la organización tiene interacción directa.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["importancia", "estrategia"]

variables:
  razon: "vital"

respuesta: "vital"
tipo: completar

enunciado: "La distinción entre ambiente interno y externo es ___ para entender el funcionamiento de la organización."

explicacion: |
  Distinguir ambas dimensiones es vital para la planificación estratégica y la supervivencia de la organización en el mercado.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "basico"
  tags: ["recursos_materiales", "clasificacion"]

variables:
  ejemplo: "computadoras"

respuesta: "recursos materiales"
tipo: completar

enunciado: "Las computadoras y la maquinaria son ejemplos de: ___"

explicacion: |
  Los recursos materiales son los activos físicos tangibles utilizados en el proceso productivo.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "intermedio"
  tags: ["influencia", "estrategia"]

variables:
  efecto: "influyen pero no controlan"

respuesta: "influyen, pero no pueden controlar directamente"
tipo: completar

enunciado: "Las fuerzas del ambiente externo ___ a la organización, aunque la organización no las controla."

explicacion: |
  El ambiente externo influye en los resultados y decisiones de la empresa, pero estas fuerzas son externas al control directo de la misma.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "avanzado"
  tags: ["recursos", "integracion"]

variables:
  resultado: "potenciarse mutuamente"

respuesta: "se potencian entre sí"
tipo: completar

enunciado: "En un ambiente interno fuerte, los recursos están integrados y: ___"

explicacion: |
  La integración efectiva hace que los recursos internos se refuercen mutuamente, aumentando la eficiencia y la capacidad competitiva.
```

```
metadata:
  materia: "economia"
  tema: "ambiente_interno_y_externo_organizacion"
  nivel: "avanzado"
  tags: ["estrategia", "resumen"]

variables:
  clave: "comprender la dualidad"

respuesta: "comprender esta dualidad"
tipo: completar

enunciado: "Para tomar decisiones estratégicas informadas, es necesario: ___"

explicacion: |
  Comprender la dualidad entre lo interno (controlable) y lo externo (influyente) es la base de la estrategia organizacional efectiva.
```

## Sección: cultura-organizacional (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "valores, creencias, normas y hábitos compartidos"
tipo: mc
opciones_explicitas: ["valores, creencias, normas y hábitos compartidos", "sólo el organigrama de la empresa", "el edificio y el equipamiento físico"]

enunciado: "La cultura organizacional se define como el conjunto de..."

explicacion: |
  Es la "personalidad" invisible de la organización, distinta de lo
  tangible como edificios o equipamiento.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "intermedio"
  tags: ["control informal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La cultura organizacional actúa como un mecanismo de control informal que reduce la necesidad de supervisión constante."

explicacion: |
  Cuando todos comparten los mismos códigos, la coordinación del
  trabajo se vuelve más fluida sin necesidad de vigilar cada paso.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "intermedio"
  tags: ["cultura vs estructura"]

variables:
  n: uno_de([1, 1])

respuesta: "los cargos y las jerarquías"
tipo: mc
opciones_explicitas: ["los cargos y las jerarquías", "el clima laboral y las expectativas de comportamiento", "los valores personales de cada empleado"]

enunciado: "A diferencia de la cultura, la estructura formal de una organización define principalmente..."

explicacion: |
  La estructura define quién reporta a quién; la cultura define cómo se
  hacen las cosas realmente, el clima y las expectativas.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "intermedio"
  tags: ["cultura vs estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una organización puede tener un organigrama perfecto en papel, pero si su cultura fomenta la desconfianza o la burocracia, su desempeño económico se ve afectado negativamente."

explicacion: |
  La estructura formal no garantiza buen desempeño si la cultura real
  no acompaña con confianza y eficiencia.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "avanzado"
  tags: ["recurso intangible"]

variables:
  n: uno_de([1, 1])

respuesta: "un recurso intangible que puede ser una ventaja competitiva sostenible"
tipo: mc
opciones_explicitas: ["un recurso intangible que puede ser una ventaja competitiva sostenible", "un gasto fijo que no aporta valor económico", "un recurso material como la maquinaria"]

enunciado: "Según la teoría, la cultura organizacional funciona como..."

explicacion: |
  Al igual que el conocimiento técnico o la experiencia del personal,
  la cultura es un recurso intangible que puede diferenciar a una
  empresa de sus competidores.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "intermedio"
  tags: ["talento"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una cultura fuerte y alineada con los objetivos estratégicos atrae y retiene talento."

explicacion: |
  Los empleados buscan entornos donde sus valores personales coincidan
  con los institucionales, lo que ayuda a retener talento.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "intermedio"
  tags: ["costos"]

variables:
  n: uno_de([1, 1])

respuesta: "reduce la rotación de personal y los costos de reclutamiento"
tipo: mc
opciones_explicitas: ["reduce la rotación de personal y los costos de reclutamiento", "aumenta siempre los costos operativos", "no tiene ningún efecto económico medible"]

enunciado: "Una cultura orientada a la seguridad y el respeto mutuo, según la teoría..."

explicacion: |
  Al reducir la rotación de personal, también bajan los costos
  asociados al reclutamiento y entrenamiento de nuevos empleados.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "basico"
  tags: ["aprendizaje"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una cultura que valora el aprendizaje continuo fomenta la capacitación de sus trabajadores, mejorando la calidad del producto o servicio."

explicacion: |
  La cultura influye directamente en la gestión de recursos humanos,
  incluida la capacitación.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "intermedio"
  tags: ["toma de decisiones"]

variables:
  n: uno_de([1, 1])

respuesta: "se centralizan en la alta dirección, lo que puede ralentizar la respuesta"
tipo: mc
opciones_explicitas: ["se centralizan en la alta dirección, lo que puede ralentizar la respuesta", "se distribuyen siempre entre todos los empleados por igual", "se toman al azar sin ningún criterio"]

enunciado: "En culturas jerárquicas y rígidas, las decisiones suelen..."

explicacion: |
  La centralización en la alta dirección puede hacer más lenta la
  respuesta de la organización ante cambios del mercado.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "intermedio"
  tags: ["toma de decisiones"]

variables:
  n: uno_de([1, 1])

respuesta: "empoderan a los equipos para resolver problemas en tiempo real"
tipo: mc
opciones_explicitas: ["empoderan a los equipos para resolver problemas en tiempo real", "eliminan por completo la necesidad de líderes", "sólo funcionan en empresas muy grandes"]

enunciado: "En culturas más horizontales o participativas, las organizaciones..."

explicacion: |
  Esto es crucial en industrias dinámicas como la tecnología o el
  comercio electrónico, donde la respuesta rápida es clave.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "intermedio"
  tags: ["sostenibilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una organización con cultura de responsabilidad social y ambiental tiende a implementar prácticas de sostenibilidad, optimizando insumos y minimizando residuos."

explicacion: |
  La cultura también media la relación de la organización con los
  recursos naturales y materiales.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "basico"
  tags: ["ejemplo argentino"]

variables:
  n: uno_de([1, 1])

respuesta: "solidaridad y toma de decisiones colectiva"
tipo: mc
opciones_explicitas: ["solidaridad y toma de decisiones colectiva", "jerarquía extrema y decisiones individuales", "ausencia total de valores compartidos"]

enunciado: "Según la teoría, muchas cooperativas del sector agroindustrial argentino desarrollaron una cultura basada en..."

explicacion: |
  Esto les permite resistir mejor las crisis de precios internacionales,
  priorizando la estabilidad de los socios sobre la ganancia inmediata.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "basico"
  tags: ["ejemplo argentino"]

variables:
  n: uno_de([1, 1])

respuesta: "culturas ágiles, planes flexibles y énfasis en la innovación"
tipo: mc
opciones_explicitas: ["culturas ágiles, planes flexibles y énfasis en la innovación", "culturas rígidas y jerárquicas tradicionales", "ausencia total de cultura organizacional"]

enunciado: "Las startups del sector tecnológico de Buenos Aires suelen tener, según la teoría..."

explicacion: |
  Esa cultura ágil les permite competir en el mercado global de
  servicios digitales.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "avanzado"
  tags: ["privatizacion"]

variables:
  n: uno_de([1, 1])

respuesta: "cambiar la cultura interna hacia la eficiencia y la orientación al cliente"
tipo: mc
opciones_explicitas: ["cambiar la cultura interna hacia la eficiencia y la orientación al cliente", "sólo actualizar la tecnología utilizada", "mantener exactamente la misma cultura de antes"]

enunciado: "En procesos de privatización de empresas estatales argentinas con culturas burocráticas, el principal desafío según la teoría fue..."

explicacion: |
  No bastaba con cambiar la tecnología: había que modificar la cultura
  interna para volverla más eficiente y orientada al cliente.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "avanzado"
  tags: ["cultura como elemento dinamico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La cultura organizacional es un elemento dinámico que puede ser gestionado estratégicamente para mejorar el desempeño económico."

explicacion: |
  El ejemplo de las privatizaciones argentinas muestra que la cultura
  no es fija: puede transformarse deliberadamente.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "basico"
  tags: ["naturaleza intangible"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La cultura organizacional es algo tangible, como los edificios o el equipamiento de una empresa."

explicacion: |
  Es una "personalidad" invisible, un recurso intangible, a diferencia
  de los bienes materiales de la organización.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "intermedio"
  tags: ["productividad"]

variables:
  n: uno_de([1, 1])

respuesta: "mayor productividad y adaptación al mercado"
tipo: mc
opciones_explicitas: ["mayor productividad y adaptación al mercado", "menor productividad siempre", "ninguna relación con el desempeño económico"]

enunciado: "Culturas que promueven la innovación y la confianza suelen generar..."

explicacion: |
  Estas culturas contrastan con las que fomentan desconfianza o
  burocracia excesiva, que afectan negativamente el desempeño.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "basico"
  tags: ["campo de estudio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Entender la cultura organizacional es relevante en el contexto de la economía y la administración."

explicacion: |
  La cultura afecta directamente costos operativos, rentabilidad y
  eficiencia, por eso es tema de economía además de sociología.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "intermedio"
  tags: ["factor economico"]

variables:
  n: uno_de([1, 1])

respuesta: "un factor económico que impacta en costos operativos y rentabilidad a largo plazo"
tipo: mc
opciones_explicitas: ["un factor económico que impacta en costos operativos y rentabilidad a largo plazo", "un tema exclusivamente social sin efecto en las finanzas", "algo irrelevante para la gestión empresarial"]

enunciado: "Según la teoría, la cultura organizacional es, además de un tema social..."

explicacion: |
  La rotación de personal, la capacitación y la eficiencia interna, todas
  influidas por la cultura, tienen impacto económico directo.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "avanzado"
  tags: ["regulaciones"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las prácticas de sostenibilidad de una organización responden cada vez más tanto a las demandas del consumidor como a regulaciones ambientales."

explicacion: |
  La cultura de responsabilidad ambiental se convierte en un elemento
  central de la estrategia económica moderna por esas dos presiones.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "basico"
  tags: ["clima laboral"]

variables:
  n: uno_de([1, 1])

respuesta: "cómo se hacen las cosas realmente"
tipo: mc
opciones_explicitas: ["cómo se hacen las cosas realmente", "quién ocupa cada cargo formal", "el organigrama oficial de la empresa"]

enunciado: "La cultura organizacional define el clima laboral, es decir..."

explicacion: |
  A diferencia del organigrama (estructura formal), la cultura describe
  la dinámica real de comportamiento dentro de la organización.
```

```
metadata:
  materia: "economia"
  tema: "cultura_organizacional"
  nivel: "intermedio"
  tags: ["cooperativas"]

variables:
  n: uno_de([1, 1])

respuesta: "la estabilidad de los socios sobre la maximización inmediata de ganancias"
tipo: mc
opciones_explicitas: ["la estabilidad de los socios sobre la maximización inmediata de ganancias", "las ganancias inmediatas por encima de todo", "la eliminación total de la toma de decisiones colectiva"]

enunciado: "Las cooperativas agroindustriales argentinas mencionadas en la teoría priorizan..."

explicacion: |
  Esa cultura solidaria les permite resistir mejor las crisis de precios
  internacionales, sacrificando ganancia inmediata por estabilidad.
```

## Sección: estructura-organizacional (28 preguntas)

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["organigrama", "definicion", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "Un organigrama es una representación gráfica que muestra la estructura formal de una organización, incluyendo la jerarquía y las relaciones de autoridad entre sus miembros."

explicacion: |
  El organigrama funciona como el 'esqueleto' visual de la empresa. Permite identificar quiénes reportan a quién, delimitando la cadena de mando y facilitando la comprensión de cómo se distribuyen las responsabilidades y la autoridad dentro del sistema organizacional.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["jerarquia", "niveles", "autoridad"]

respuesta: 1
tipo: input

variables:
  nivel_superior: random(1, 3)
  nivel_medio: random(4, 6)
  nivel_inferior: random(7, 10)

enunciado: "En un organigrama vertical tradicional, si los niveles se numeran del 1 al 10, ¿cuál es el nivel más alto que corresponde a la alta dirección?"

explicacion: |
  La jerarquía se representa mediante niveles verticales. La parte superior (números bajos en este ejemplo, como el 1) corresponde a la alta dirección (directorios, gerentes generales), mientras que los niveles inferiores (números altos) incluyen mandos medios y personal operativo.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["especializacion", "departamentos", "eficiencia"]

respuesta: "Permite enfocarse en tareas específicas y aprovechar economías de escala."
tipo: completar

variables:
  area: uno_de(["Finanzas", "Marketing", "Producción", "Recursos Humanos"])

enunciado: "La agrupación de personas en departamentos como {area} se basa en la especialización. ¿Cuál es el principal beneficio económico de esta división del trabajo?"

explicacion: |
  La especialización o división del trabajo permite que cada unidad se enfoque en su tarea principal. Esto aprovecha las economías de escala y la expertise técnica, mejorando la eficiencia y reduciendo la duplicidad de esfuerzos.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["relaciones", "asesoria", "coordinacion"]

respuesta: verdadero
tipo: vf

enunciado: "En un organigrama, las líneas punteadas que conectan cuadros suelen indicar relaciones de autoridad formal directa, mientras que las líneas rectas indican asesoría."

explicacion: |
  Es falso. Generalmente, las líneas rectas indican relaciones de autoridad formal (quién manda a quién), mientras que las líneas punteadas o discontinuas representan relaciones de asesoría, coordinación o comunicación informal entre unidades.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["funciones", "clarity", "coordination"]

respuesta: "Delimitar las funciones"
tipo: completar

variables:
  beneficio: uno_de(["Delimitar las funciones", "Aumentar la burocracia", "Reducir la comunicación", "Eliminar la jerarquía"])

enunciado: "Una estructura clara ayuda a reducir la ambigüedad en la organización. ¿Qué acción clave permite esto según la teoría?"

explicacion: |
  Al definir claramente quién hace qué, la estructura delimita las funciones. Esto reduce la ambigüedad sobre las responsabilidades de cada miembro, mejora la coordinación y evita vacíos o duplicidades en la ejecución de tareas.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "avanzado"
  tags: ["recursos", "asignacion", "eficiencia"]

respuesta: "Una estructura bien definida permite una asignación más racional de los recursos."
tipo: completar

variables:
  recurso: uno_de(["humanos", "materiales", "de conocimiento"])

enunciado: "Sin una estructura clara, los recursos {recurso} se dispersarían. ¿Qué facilita una estructura bien definida en el contexto económico?"

explicacion: |
  Una estructura bien definida permite una asignación más racional de los recursos (humanos, materiales o de conocimiento). Esto facilita la toma de decisiones, evita la dispersión de esfuerzos y mejora la evaluación del desempeño individual y grupal.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["cadena de mando", "reportes", "flujo"]

respuesta: verdadero
tipo: vf

enunciado: "La cadena de mando se refiere a la secuencia de autoridad desde la alta dirección hasta el nivel operativo, mostrando quién le reporta a quién."

explicacion: |
  Verdadero. El organigrama permite comprender la cadena de mando, es decir, la ruta formal a través de la cual fluye la autoridad y la responsabilidad, definiendo claramente las líneas de reporte dentro de la compañía.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["tipos", "representacion", "flexibilidad"]

respuesta: "Dependiendo de la complejidad y el tamaño."
tipo: completar

variables:
  factor: uno_de(["complejidad", "tamaño", "industria", "ubicación"])

enunciado: "Existen diferentes formas de representar la estructura organizacional. La elección del tipo de organigrama suele depender de la {factor} de la organización."

explicacion: |
  La elección del tipo de organigrama (vertical, horizontal, matricial, etc.) depende de factores como la complejidad, el tamaño y la naturaleza de las operaciones de la organización, buscando la representación más clara y útil para su gestión.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["evaluacion", "desempeño", "gestión"]

respuesta: "Facilita la evaluación del desempeño individual y grupal."
tipo: completar

variables:
  ambito: uno_de(["individual", "grupal", "departamental", "corporativo"])

enunciado: "Más allá de la autoridad, la estructura organizacional es fundamental para la gestión. ¿Qué facilita directamente respecto al {ambito}?"

explicacion: |
  Una estructura clara facilita la evaluación del desempeño individual y grupal. Al conocerse las responsabilidades y los reportes, es posible medir la eficiencia y eficacia de cada miembro o unidad en el cumplimiento de los objetivos organizacionales.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["mandos medios", "intermediarios", "nivel"]

respuesta: falso
tipo: vf

enunciado: "En la jerarquía tradicional, los mandos medios se ubican en la parte superior del organigrama, junto a la alta dirección."

explicacion: |
  Falso. Los mandos medios se ubican en los niveles intermedios del organigrama, actuando como enlace entre la alta dirección (parte superior) y el personal operativo (parte inferior). Su rol es traducir las estrategias superiores en operaciones concretas.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["división del trabajo", "especialización", "departamentos"]

respuesta: "Departamentos o áreas funcionales"
tipo: completar

variables:
  criterio: uno_de(["habilidades", "conocimientos", "ubicación", "antigüedad"])

enunciado: "Los organigramas agrupan a las personas en {criterio} específicos. ¿En qué se basan principalmente estas agrupaciones?"

explicacion: |
  Las agrupaciones se basan en habilidades y conocimientos específicos, creando departamentos o áreas funcionales (como Finanzas, Marketing, etc.). Esto permite que cada unidad se especialice y aproveche su expertise técnica.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["sistema", "objetivos", "eficiencia"]

respuesta: verdadero
tipo: vf

enunciado: "Las organizaciones son sistemas diseñados para alcanzar objetivos específicos de manera eficiente, no grupos caóticos de personas."

explicacion: |
  Verdadero. La estructura organizacional existe precisamente para transformar un grupo de individuos en un sistema coherente y eficiente, orientado al logro de metas comunes mediante la coordinación de recursos y actividades.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["alta dirección", "dirección", "gerencia"]

respuesta: "Directorio o gerente general"
tipo: completar

variables:
  cargo: uno_de(["directorio", "gerente general", "presidente", "CEO"])

enunciado: "La parte superior del organigrama suele corresponder a la alta dirección. ¿Quiénes ocupan típicamente estos puestos?"

explicacion: |
  La alta dirección incluye cargos como el directorio, el gerente general, el presidente o el CEO. Son los responsables de la toma de decisiones estratégicas y la dirección general de la organización.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["personal operativo", "ejecución", "nivel inferior"]

respuesta: "Personal operativo"
tipo: completar

variables:
  nivel: uno_de(["operativo", "táctico", "estratégico", "administrativo"])

enunciado: "Los niveles inferiores del organigrama incluyen a los mandos medios y a los {nivel}."

explicacion: |
  Los niveles inferiores corresponden al personal operativo. Son quienes ejecutan las tareas diarias y las instrucciones derivadas de las estrategias definidas por la alta dirección y coordinadas por los mandos medios.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["integración", "coherencia", "recursos"]

respuesta: "Para funcionar como un todo coherente."
tipo: completar

variables:
  objetivo: uno_de(["funcionar como un todo coherente", "reducir costos", "aumentar ventas", "expandirse"])

enunciado: "Las líneas de conexión en el organigrama muestran cómo se integran los diferentes recursos de la organización. ¿Cuál es el propósito final de esta integración?"

explicacion: |
  El propósito es que la organización funcione como un todo coherente. La integración de recursos humanos, materiales y de conocimiento a través de la estructura permite sinergias y un logro más efectivo de los objetivos.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "avanzado"
  tags: ["economías de escala", "eficiencia", "costos"]

respuesta: verdadero
tipo: vf

enunciado: "La especialización en departamentos permite aprovechar las economías de escala al concentrar tareas similares."

explicacion: |
  Verdadero. Al agrupar tareas similares en departamentos especializados, la organización puede optimizar el uso de recursos, reducir costos unitarios y mejorar la eficiencia operativa gracias a las economías de escala.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["expertise", "conocimiento", "especialización"]

respuesta: "Aprovechando la expertise técnica."
tipo: completar

variables:
  ventaja: uno_de(["explotando la expertise técnica", "ignorando la experiencia", "centralizando todo", "descentralizando la autoridad"])

enunciado: "La división del trabajo no solo organiza, sino que también busca {ventaja} de cada unidad."

explicacion: |
  La división del trabajo busca aprovechar la expertise técnica de cada unidad. Al enfocarse en áreas específicas, los empleados desarrollan mayor competencia y eficiencia en sus tareas asignadas.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["toma de decisiones", "rapidez", "claridad"]

respuesta: "Facilita la toma de decisiones."
tipo: completar

variables:
  proceso: uno_de(["facilita la toma de decisiones", "complica la comunicación", "aumenta la burocracia", "reduce la autoridad"])

enunciado: "Una estructura bien definida tiene un impacto directo en la gestión. ¿Qué facilita principalmente?"

explicacion: |
  Una estructura bien definida facilita la toma de decisiones. Al conocerse los roles y las líneas de autoridad, los responsables pueden actuar con mayor rapidez y certeza, evitando confusiones sobre quién tiene la competencia para decidir.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["duplicidad", "eficiencia", "recursos"]

respuesta: "Evita la duplicidad de tareas."
tipo: completar

variables:
  riesgo: uno_de(["evita la duplicidad de tareas", "promueve la competencia interna", "aumenta los costos", "reduce la calidad"])

enunciado: "Sin una estructura clara, los recursos se dispersarían. ¿Qué ayuda a prevenir una estructura definida?"

explicacion: |
  Una estructura definida ayuda a prevenir la duplicidad de tareas y los vacíos de responsabilidad. Al delimitar claramente las funciones, se asegura que cada tarea sea cubierta por una persona o unidad específica sin solapamientos innecesarios.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["información", "flujo", "comunicación"]

respuesta: "Cómo fluye la información dentro de la compañía."
tipo: completar

variables:
  elemento: uno_de(["cómo fluye la información dentro de la compañía", "cuánto gana cada empleado", "qué productos se venden", "dónde está la sede"])

enunciado: "El organigrama no es solo un dibujo; es una herramienta visual que permite comprender la cadena de mando y {elemento}."

explicacion: |
  El organigrama permite comprender cómo fluye la información dentro de la compañía. Entender los canales formales de comunicación es crucial para la coordinación y la eficiencia operativa.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["representación", "gráfica", "visual"]

respuesta: verdadero
tipo: vf

enunciado: "Un organigrama es una representación gráfica de la estructura de una organización."

explicacion: |
  Verdadero. Esta es la definición fundamental. Es la herramienta visual primaria para entender la arquitectura interna de la empresa, mostrando sus componentes y sus interrelaciones.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["responsabilidad", "vacíos", "delimitación"]

respuesta: "Vacíos de responsabilidad."
tipo: completar

variables:
  problema: uno_de(["vacíos de responsabilidad", "excedentes de presupuesto", "falta de innovación", "baja moral"])

enunciado: "Sin una estructura clara, los recursos se dispersarían, generando duplicidad de tareas o {problema}."

explicacion: |
  La falta de estructura genera vacíos de responsabilidad, donde nadie se siente encargado de ciertas tareas críticas. La delimitación clara de funciones en el organigrama previene este riesgo.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["autoridad", "formal", "poder"]

respuesta: "Refleja el poder formal y la autoridad para tomar decisiones."
tipo: completar

variables:
  concepto: uno_de(["refleja el poder formal y la autoridad para tomar decisiones", "muestra la amistad entre empleados", "indica los salarios", "describe la cultura"])

enunciado: "La disposición vertical en el organigrama {concepto}."

explicacion: |
  La disposición vertical refleja el poder formal y la autoridad para tomar decisiones. Los niveles superiores tienen mayor autoridad jerárquica sobre los inferiores, estableciendo el orden de mando.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["coordinación", "eficiencia", "trabajo en equipo"]

respuesta: "Mejora la coordinación."
tipo: completar

variables:
  beneficio: uno_de(["mejora la coordinación", "reduce la comunicación", "aísla los departamentos", "elimina la jerarquía"])

enunciado: "Al delimitar las funciones, la estructura organizacional {beneficio} entre los miembros del equipo."

explicacion: |
  Delimitar las funciones mejora la coordinación. Cuando cada miembro conoce su rol y el de los demás, se facilita el trabajo conjunto y se reducen los conflictos por superposición de funciones.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["líneas", "conexión", "relaciones"]

respuesta: "Las líneas que conectan los cuadros indican las relaciones de autoridad o de asesoría."
tipo: completar

variables:
  elemento: uno_de(["las líneas que conectan los cuadros indican las relaciones de autoridad o de asesoría", "los colores indican el presupuesto", "el tamaño indica el salario", "las formas indican la antigüedad"])

enunciado: "Además de los cuadros, {elemento}."

explicacion: |
  Las líneas que conectan los cuadros son esenciales para interpretar el organigrama. Indican las relaciones formales de autoridad (líneas rectas) o de asesoría/coordinación (líneas punteadas), mostrando la dinámica de la organización.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["analogía", "esqueleto", "mapa"]

respuesta: verdadero
tipo: vf

enunciado: "Se puede imaginar el organigrama como el 'esqueleto' o el mapa de una empresa."

explicacion: |
  Verdadero. Esta analogía ayuda a visualizar su función: así como el esqueleto da soporte y forma al cuerpo, el organigrama da soporte y forma a la estructura interna de la empresa, permitiendo su funcionamiento.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["miembros", "equipo", "composición"]

respuesta: "Muestra quiénes son los miembros del equipo, en qué departamentos están agrupados y cómo se relacionan entre sí."
tipo: completar

variables:
  contenido: uno_de(["muestra quiénes son los miembros del equipo, en qué departamentos están agrupados y cómo se relacionan entre sí", "indica los horarios de trabajo", "describe la decoración de la oficina", "lista los proveedores"])

enunciado: "El organigrama muestra {contenido}."

explicacion: |
  El organigrama muestra quiénes son los miembros del equipo, en qué departamentos están agrupados y cómo se relacionan entre sí en términos de autoridad y responsabilidad. Es un mapa de la composición y la dinámica interna.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "avanzado"
  tags: ["comprensión", "teoría", "aplicación"]

respuesta: verdadero
tipo: vf

enunciado: "Entender cómo se organiza el trabajo es tan importante como conocer los recursos que se utilizan en el estudio de la economía y la administración de empresas."

explicacion: |
  Verdadero. La estructura organizacional es fundamental porque determina cómo se utilizan los recursos. Sin una organización eficiente, incluso los mejores recursos pueden ser mal gestionados, llevando al fracaso de los objetivos económicos.
```

## Sección: objetivos-y-metas (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos"]

tipo: mc
opciones_explicitas: ["Un objetivo es un resultado específico y cuantificable, mientras que una meta es una aspiración amplia.", "Un objetivo es una aspiración amplia y cualitativa, mientras que una meta es un resultado específico y cuantificable.", "Ambos términos son sinónimos y se usan indistintamente en la administración.", "El objetivo es el camino y la meta es el destino final."]

enunciado: "En el ámbito de la administración, ¿cuál es la diferencia fundamental entre un objetivo y una meta?"

respuesta: "Un objetivo es una aspiración amplia y cualitativa, mientras que una meta es un resultado específico y cuantificable."

explicacion: |
  Los objetivos suelen ser declaraciones amplias de lo que se desea lograr (ej. 'Ser líderes en el mercado'), mientras que las metas son pasos específicos, medibles y con un tiempo determinado para alcanzar esos objetivos (ej. 'Aumentar las ventas un 10% en el primer trimestre').
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["metas", "smart"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Incrementar la satisfacción del cliente en un 15% para diciembre de 2024.", "Mejorar la calidad del servicio."], ["Reducir los costos operativos en un 5% durante el próximo semestre.", "Gastar menos dinero."]]

tipo: vf
respuesta: verdadero

enunciado: "Analice el siguiente enunciado: '{escenarios[escenario_idx][0]}' es un ejemplo de una meta concreta y medible."

explicacion: |
  Para que una meta sea efectiva, debe ser específica, medible, alcanzable, relevante y con un tiempo definido (SMART). El enunciado cumple con tener un indicador (15% o 5%) y un plazo determinado.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "cuantificable"
tipo: completar
respuestas_validas:
  - "cuantificable"

enunciado: "Para que una meta sea considerada efectiva, debe ser __________, es decir, debe poder medirse a través de indicadores numéricos."

explicacion: |
  La cuantificación es lo que permite saber si se ha alcanzado la meta o qué tan cerca se está de lograrla. Sin medición, no hay control administrativo.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["planificacion", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Misión de la empresa", "Objetivo estratégico", "Meta operativa", "Acción diaria"]

enunciado: "Ordene los siguientes elementos desde el nivel más macro (estratégico/filosófico) hasta el nivel más micro (ejecución):"

explicacion: |
  La planificación sigue una cascada: la Misión define la razón de ser, los Objetivos estratégicos marcan el rumbo a largo plazo, las Metas operativas desglosan esos objetivos en términos medibles, y las Acciones son las tareas concretas del día a día.
respuesta_orden: ["Misión de la empresa", "Objetivo estratégico", "Meta operativa", "Acción diaria"]
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["coherencia", "logica"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Objetivo: 'Ser la empresa más rentable del sector'. Meta: 'Aumentar el margen de utilidad neta del 5% al 8% en un año'.", "Verdadero"], ["Objetivo: 'Mejorar el clima laboral'. Meta: 'Reducir la rotación de personal en un 20% para fin de año'.", "Verdadero"]]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]
respuesta: casos[caso_idx][1]

enunciado: "Determine si la relación entre el objetivo y la meta presentados en el caso es coherente: '{casos[caso_idx][0]}'"

explicacion: |
  En el caso 0, la meta de aumentar el margen de utilidad neta es coherente y directamente medible respecto al objetivo de rentabilidad. En el caso 1, la meta de reducir la rotación es un indicador directo y medible para alcanzar la mejora del clima laboral.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos"]

respuesta: "meta"
tipo: "mc"
opciones_explicitas: ["objetivo", "meta", "estrategia", "plan"]

enunciado: "Un enunciado que describe un propósito amplio y aspiracional, como 'Ser la empresa líder en el sector de calzado en el país', se define como un ___."

explicacion: |
  El objetivo general es el fin último y amplio (la visión), mientras que la meta es el paso específico, medible y con un tiempo determinado para alcanzar dicho objetivo.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["metas_SMART", "medicion"]

variables:
  escenario: uno_de([["Aumentar las ventas totales", "Aumentar las ventas en un 15% durante el segundo semestre de 2024"], ["Mejorar la satisfacción del cliente", "Lograr un puntaje de 9/10 en las encuestas de satisfacción para diciembre"], ["Reducir costos operativos", "Disminuir los gastos de logística en un 5% mensual durante el próximo trimestre"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: [escenario[0], escenario[1], "Reducir la rotación de personal"]

enunciado: "Dada la siguiente lista de declaraciones, selecciona aquella que represente una META concreta y medible (SMART) en lugar de un objetivo general: {escenario[0]}"

explicacion: |
  Una meta debe ser cuantificable y tener un plazo. Mientras que '{escenario[0]}' es una intención general, '{escenario[1]}' proporciona un número (15%) y un tiempo (segundo semestre), permitiendo su medición real.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["logica", "metas"]

respuesta: falso
tipo: "vf"

enunciado: "Un objetivo general puede ser evaluado de forma inmediata y precisa mediante un indicador numérico sin necesidad de desglosarlo en metas."

explicacion: |
  Falso. Los objetivos generales suelen ser cualitativos o demasiado amplios. Para poder medirlos, es indispensable transformarlos en metas específicas, medibles y con un plazo determinado.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["pasos", "planificacion"]

respuesta_orden: ["Definir el objetivo general", "Establecer metas específicas", "Asignar recursos y tiempos", "Ejecutar y monitorear"]
tipo: "ordenar"
opciones_explicitas: ["Definir el objetivo general", "Establecer metas específicas", "Asignar recursos y tiempos", "Ejecutar y monitorear"]

enunciado: "Ordena lógicamente los pasos para pasar de una visión empresarial a la ejecución de una estrategia de gestión:"

explicacion: |
  La planificación estratégica siempre comienza con la visión macro (objetivo), se desglosa en pasos accionables y medibles (metas), se asignan los medios para lograrlas y finalmente se controla el proceso.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["calculo", "indicadores"]

variables:
  datos: [["Ventas actuales: 100.000 USD", "120.000 USD", "20%"], ["Clientes actuales: 500", "600", "20%"], ["Producción actual: 1000 unidades", "1100", "10%"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: "completar"
respuestas_validas:
  - datos[idx][2]

enunciado: "Si el objetivo general es 'Incrementar la facturación anual', y actualmente se facturan {datos[idx][0]}, una meta concreta para este año sería alcanzar los {datos[idx][1]} USD, lo que representa un incremento del ___."

explicacion: |
  Para convertir un objetivo en meta, debemos calcular la diferencia porcentual o absoluta. En este caso, el incremento respecto al valor base definido en el escenario sorteado.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["El objetivo es el fin último y la meta es el paso cuantificable", "El objetivo es el paso cuantificable y la meta es el fin último", "Son sinónimos en la práctica administrativa", "La meta es cualitativa y el objetivo es cuantitativo"]
respuesta: "El objetivo es el fin último y la meta es el paso cuantificable"

enunciado: "En el proceso de planificación estratégica, ¿cuál es la distinción principal entre un objetivo general y una meta?"

explicacion: |
  Un objetivo general describe un estado deseado a largo plazo (el "qué"), mientras que una meta es un punto de referencia específico, medible y con un tiempo determinado que ayuda a alcanzar ese objetivo (el "cuánto" y "cuándo").
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["planificacion", "errores_comunes"]

tipo: vf
enunciado: "Si una empresa establece como objetivo 'Aumentar la satisfacción del cliente', esto se considera una meta SMART porque es específica y medible."

respuesta: falso

explicacion: |
  Falso. 'Aumentar la satisfacción del cliente' es un objetivo general. Para ser una meta, debería ser algo como: 'Aumentar el índice de satisfacción de 75% a 85% en los próximos 6 meses'.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["estructura", "jerarquia"]

variables:
  ejemplo_idx: uno_de([0, 1])
  escenarios: [["Ser el líder del mercado regional", "Incrementar la cuota de mercado del 15% al 25% en un año"], ["Reducir la huella de carbono", "Disminuir las emisiones de CO2 en un 10% para diciembre de 2025"]]

tipo: completar
respuestas_validas:
  - escenarios[ejemplo_idx][1]
respuesta: escenarios[ejemplo_idx][1]

enunciado: "Dado el siguiente objetivo general: '{escenarios[ejemplo_idx][0]}', la meta concreta correspondiente es: ___"

explicacion: |
  La meta debe transformar la intención cualitativa en un dato cuantitativo y temporal. En el primer caso es la cuota de mercado; en el segundo, la reducción de emisiones con fecha límite.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["metas_smart", "errores"]

tipo: mc
opciones_explicitas: ["Falta de temporalidad", "Falta de cuantificación", "Falta de relevancia", "Todas las anteriores son errores comunes"]
respuesta: "Todas las anteriores son errores comunes"

enunciado: "Un error crítico al transformar un objetivo en meta es presentar una declaración que no permite saber si se ha logrado o no. Esto sucede principalmente por:"

explicacion: |
  Para que una meta sea efectiva, debe ser medible (cuantificación) y tener un plazo (temporalidad). Sin estos elementos, la meta es ambigua y no permite el control administrativo.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Definir la visión y misión de la empresa", "Establecer los objetivos generales estratégicos", "Determinar las metas tácticas y medibles", "Diseñar el plan de acción para ejecutar las metas"]

enunciado: "Ordene correctamente los pasos del proceso de planificación, desde la visión macro hasta la ejecución operativa:"

respuesta_orden: ["Definir la visión y misión de la empresa", "Establecer los objetivos generales estratégicos", "Determinar las metas tácticas y medibles", "Diseñar el plan de acción para ejecutar las metas"]

explicacion: |
  La planificación sigue un flujo descendente: primero se define la identidad (visión/misión), luego el rumbo (objetivos), después los hitos concretos (metas) y finalmente el cómo (plan de acción).
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "planificacion"]

respuesta: "meta"
tipo: "mc"
opciones_explicitas: ["objetivo", "meta", "estrategia", "plan"]

enunciado: "Mientras que un objetivo es una declaración amplia de lo que se desea lograr a largo plazo, una ___ es un paso específico, cuantificable y con un tiempo determinado para alcanzarlo."

explicacion: |
  Los objetivos son la dirección general (ej. "Ser líderes en el mercado"), mientras que las metas son los hitos medibles (ej. "Aumentar las ventas un 10% en el primer trimestre").
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["metodologia", "medicion"]

respuesta: falso
tipo: "vf"

enunciado: "Un objetivo general se distingue de una meta concreta principalmente porque el objetivo debe ser necesariamente cuantificable y tener una fecha de vencimiento estricta."

explicacion: |
  Falso. Es la meta la que debe ser cuantificable y tener un plazo. El objetivo es la aspiración cualitativa o el fin último.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["jerarquia", "procesos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Incrementar la rentabilidad", "Aumentar el margen de beneficio neto en un 5% anual"], ["Expandir la presencia de marca", "Abrir 3 nuevas sucursales en la región norte antes de diciembre"]]

respuesta: datos[escenario_idx][1]
tipo: "completar"
respuestas_validas:
  - datos[escenario_idx][1]

enunciado: "Considere el siguiente objetivo general: '{datos[escenario_idx][0]}'. Una meta concreta que represente este objetivo sería: ___"

pasos:
  - "Identificar el fin último (objetivo)."
  - "Transformar el fin en una acción medible con tiempo y cantidad (meta)."

explicacion: |
  La meta debe desglosar el objetivo en términos de 'cuánto', 'cuándo' y 'cómo' de forma que se pueda verificar su cumplimiento.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["caracteristicas"]

respuesta: "específica, medible, alcanzable, relevante y con tiempo"
tipo: "completar"
respuestas_validas:
  - "específica, medible, alcanzable, relevante y con tiempo"

enunciado: "Para que una meta sea efectiva y se diferencie de un deseo vago, se recomienda que cumpla con el criterio SMART, lo que significa que debe ser ___."

explicacion: |
  El acrónimo SMART (Specific, Measurable, Achievable, Relevant, Time-bound) es el estándar para transformar objetivos en metas operativas.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["secuencia", "logica"]

respuesta_orden: ["Definir misión", "Establecer objetivos", "Determinar metas", "Diseñar tácticas"]
tipo: "ordenar"
opciones_explicitas: ["Definir misión", "Establecer objetivos", "Determinar metas", "Diseñar tácticas"]

enunciado: "Ordene los siguientes elementos según la jerarquía lógica de la planificación estratégica, desde lo más abstracto a lo más concreto:"

explicacion: |
  La planificación comienza con la identidad (misión), sigue con la dirección (objetivos), se desglosa en hitos (metas) y finalmente en la ejecución táctica.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Aumentar la presencia en el mercado nacional", "Incrementar las ventas en un 15% durante el primer semestre de 2024"], ["Mejorar la satisfacción del cliente", "Reducir el tiempo de espera en atención al cliente a menos de 2 minutos para diciembre"]]

enunciado: "En el escenario '{escenarios[escenario_idx][0]}', la expresión '{escenarios[escenario_idx][1]}' representa una: ___"

respuesta: "meta"
respuestas_validas:
  - "meta"
tipo: completar

explicacion: |
  El primer elemento es un objetivo general (aspiracional y amplio), mientras que el segundo es una meta (específica, medible y con un plazo determinado).
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "metas"]

variables:
  caso_idx: uno_de([0,1,2])
  casos: [["Reducir costos operativos", "Reducir costos operativos", "Reducir costos operativos"], ["Incrementar la rentabilidad", "Incrementar la rentabilidad", "Incrementar la rentabilidad"], ["Expandir la marca", "Expandir la marca", "Expandir la marca"]]
  metas: ["Reducir costos operativos en un 5% mensual", "Incrementar la rentabilidad en un 10% anual", "Expandir la marca abriendo 3 sucursales en junio"]

enunciado: "Si el objetivo es '{casos[caso_idx]}', ¿cuál de las siguientes opciones constituye una meta válida y medible?"

opciones_explicitas: ["Reducir costos operativos en un 5% mensual", "Incrementar la rentabilidad en un 10% anual", "Expandir la marca abriendo 3 sucursales en junio"]
tipo: mc
respuesta: metas[caso_idx]

explicacion: |
  Una meta debe ser cuantificable y tener un tiempo definido para poder ser medida frente al objetivo general.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["conceptos", "logica"]

enunciado: "Un objetivo general es una meta concreta y medible que define un resultado específico en un tiempo determinado. ¿Es esto verdadero o falso?"

respuesta: falso
tipo: vf

explicacion: |
  Es falso. La definición dada corresponde a una 'meta'. El 'objetivo general' es el propósito amplio y cualitativo.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["proceso", "planificacion"]

enunciado: "Ordene los pasos lógicos para la planificación estratégica de una empresa:"

opciones_explicitas: ["Definir la visión y misión", "Establecer objetivos generales", "Diseñar metas específicas y medibles", "Ejecutar y monitorear resultados"]
tipo: ordenar

respuesta_orden: ["Definir la visión y misión", "Establecer objetivos generales", "Diseñar metas específicas y medibles", "Ejecutar y monitorear resultados"]

explicacion: |
  La planificación comienza con la filosofía organizacional (visión/misión), sigue con los propósitos amplios (objetivos), luego se desglosan en acciones cuantificables (metas) y finalmente se ejecutan.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["analisis", "metas"]

variables:
  dato_idx: uno_de([0,1])
  datos: [["Objetivo: Ser líderes en calidad. Meta: Lograr 95/100 en encuestas de satisfacción en diciembre.", 95], ["Objetivo: Crecimiento sostenido. Meta: Alcanzar 1.000 nuevos usuarios activos en 3 meses.", 1000]]

enunciado: "Para el escenario '{datos[dato_idx][0]}', el valor numérico que permite medir el cumplimiento de la meta es: ___"

respuesta: datos[dato_idx][1]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Las metas proporcionan el indicador numérico (KPI) necesario para evaluar si el objetivo general se está cumpliendo.
```

## Sección: tipos-de-proyecto (36 preguntas)

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "clasificación"]

variables:
  caso: "huerta comunitaria"

respuesta: "social"
tipo: input

enunciado: "Una {caso} se clasifica como un proyecto de tipo social."

explicacion: |
  Las huertas comunitarias buscan seguridad alimentaria y lazo social, no lucro.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "clasificación"]

variables:
  caso: "fábrica de calzado"

respuesta: "productivo"
tipo: input

enunciado: "Una {caso} se clasifica como un proyecto de tipo productivo."

explicacion: |
  La fabricación de bienes para la venta es la esencia del proyecto productivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["evaluación", "indicadores"]

variables:
  tipo_indicador: uno_de(["financieros", "sociales", "fisicos"])

respuesta: "sociales"
tipo: completar

enunciado: "Para proyectos sociales, los indicadores de {tipo_indicador} son prioritarios sobre los financieros."

explicacion: |
  El impacto real en la vida de las personas es la métrica clave.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["evaluación", "rentabilidad"]

variables:
  tipo_indicador: uno_de(["financieros", "sociales", "ambientales"])

respuesta: "financieros"
tipo: completar

enunciado: "En proyectos productivos, la rentabilidad se mide principalmente por indicadores {tipo_indicador}."

explicacion: |
  El balance de ganancias y pérdidas determina el éxito financiero.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["producto", "bien"]

variables:
  naturaleza: uno_de(["intangible", "intercambiable", "material"])

respuesta: "intangible"
tipo: completar

enunciado: "El 'producto' de un proyecto social suele ser un bienestar {naturaleza} o una mejora en la calidad de vida."

explicacion: |
  El beneficio social es a menudo intangible (ej. salud, educación) comparado con bienes físicos.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["producto", "mercado"]

variables:
  naturaleza: uno_de(["intangible", "intercambiable", "local"])

respuesta: "intercambiable"
tipo: completar

enunciado: "Los proyectos productivos crean bienes o servicios {naturaleza} en el mercado."

explicacion: |
  La capacidad de intercambio comercial define al producto productivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["beneficiarios", "comunidad"]

variables:
  grupo: uno_de(["sectores vulnerables", "inversores", "accionistas"])

respuesta: "sectores vulnerables"
tipo: completar

enunciado: "Los proyectos sociales buscan garantizar acceso a servicios a {grupo}."

explicacion: |
  El foco está en quienes tienen menos acceso a recursos básicos.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["beneficiarios", "clientes"]

variables:
  grupo: uno_de(["la comunidad", "el mercado", "el gobierno"])

respuesta: "el mercado"
tipo: completar

enunciado: "Los proyectos productivos buscan satisfacer las necesidades de {grupo} a través de la venta."

explicacion: |
  El cliente final es quien determina la viabilidad del proyecto productivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["temporalidad", "definición"]

variables:
  duracion: uno_de(["eterna", "temporal", "cíclica"])

respuesta: "temporal"
tipo: completar

enunciado: "Todo proyecto, sea social o productivo, tiene una duración {duracion} definida."

explicacion: |
  Los proyectos tienen inicio y fin claros, a diferencia de las operaciones continuas.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "salud"]

variables:
  proyecto: "campaña de vacunación"

respuesta: "social"
tipo: input

enunciado: "Una {proyecto} es un ejemplo típico de proyecto social."

explicacion: |
  La salud pública es un bien común que busca el bienestar colectivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "tecnología"]

variables:
  proyecto: "startup tecnológica"

respuesta: "productivo"
tipo: input

enunciado: "Una {proyecto} es un ejemplo típico de proyecto productivo."

explicacion: |
  Las startups buscan crear valor económico y escalar en el mercado.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["completar", "tejido social"]

variables:
  accion: uno_de(["debilitar", "fortalecer", "ignorar"])

respuesta: "fortalecer"
tipo: completar

enunciado: "Los proyectos sociales buscan {accion} el tejido social de la comunidad."

explicacion: |
  La cohesión social es un resultado deseado de las intervenciones sociales.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["completar", "costos"]

variables:
  accion: uno_de(["ignorar", "cubrir", "maximizar"])

respuesta: "cubrir"
tipo: completar

enunciado: "Los proyectos productivos deben generar ingresos suficientes para {accion} los costos de producción."

explicacion: |
  Cubrir costos es el primer paso para la sostenibilidad económica.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "avanzado"
  tags: ["completar", "escala"]

variables:
  escala: uno_de(["únicamente pequeña", "pequeña, mediana o gran", "exclusivamente internacional"])

respuesta: "pequeña, mediana o gran"
tipo: completar

enunciado: "Los proyectos productivos pueden ser de escala {escala}."

explicacion: |
  No hay límite de escala inherente al modelo productivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["completar", "necesidades"]

variables:
  tipo_necesidad: uno_de(["de lujo", "básicas", "exclusivas"])

respuesta: "básicas"
tipo: completar

enunciado: "Los proyectos sociales suelen enfocarse en resolver {tipo_necesidad} necesidades."

explicacion: |
  El foco está en lo esencial para la dignidad humana.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["proyecto_social", "definicion"]

variables:
  objetivo: uno_de(["bienestar_comunitario", "ganancia_economica", "produccion_masiva", "exportacion"])

respuesta: verdadero
tipo: vf

enunciado: "Los proyectos sociales buscan principalmente el {objetivo} de la comunidad, no el lucro directo."

explicacion: |
  Los proyectos sociales se definen por su objetivo de mejorar la calidad de vida y el bienestar de un grupo, a diferencia de los productivos que buscan ganancias.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["financiamiento", "proyecto_social"]

variables:
  fuente: uno_de(["ventas_en_mercado", "donaciones_y_recursos_publicos", "inversion_privada", "bancos_comerciales"])

respuesta: verdadero
tipo: vf

enunciado: "Es característico que los proyectos sociales se financien comúnmente con {fuente}."

explicacion: |
  A diferencia de los proyectos productivos que dependen de la inversión privada o préstamos bancarios, los sociales suelen apoyarse en fondos públicos y donaciones.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["metricas", "proyecto_productivo"]

variables:
  indicador: uno_de(["impacto_social", "ganancia_financiera", "satisfaccion_vecinal", "cohesion_comunitaria"])

respuesta: verdadero
tipo: vf

enunciado: "En un proyecto productivo, el éxito se mide principalmente por la obtención de {indicador}."

explicacion: |
  La lógica central de los proyectos productivos es la sostenibilidad económica, por lo que la ganancia financiera es el indicador clave de viabilidad.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["definicion", "proyecto"]

variables:
  tipo_actividad: uno_de(["rutinaria", "repetitiva", "unica", "ciclica"])

respuesta: verdadero
tipo: vf

enunciado: "Un proyecto se distingue de la operación rutinaria porque es una iniciativa {tipo_actividad}."

explicacion: |
  La definición fundamental de proyecto implica que es una acción planificada, única y con un fin específico, no una actividad repetitiva.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["financiamiento", "proyecto_social"]

variables:
  a: "Recursos públicos y donaciones"
  b: "Inversión de capital privado"
  c: "Préstamos bancarios tradicionales"
  d: "Ventas al por mayor"

respuesta: a
tipo: mc

enunciado: "¿Cuál es la fuente de financiamiento típica de un proyecto social?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Los proyectos sociales suelen financiarse con recursos públicos, impuestos o donaciones, no con capital privado de retorno.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["financiamiento", "proyecto_productivo"]

variables:
  a: "Donaciones internacionales"
  b: "Impuestos municipales"
  c: "Inversión privada y préstamos"
  d: "Subsidios gubernamentales"

respuesta: c
tipo: mc

enunciado: "¿De dónde obtienen usualmente los recursos los proyectos productivos?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Los proyectos productivos buscan rentabilidad y se financian mediante inversión privada y créditos para cubrir costos y generar ganancias.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["metricas", "proyecto_social"]

variables:
  a: "Ganancia neta"
  b: "Cuota de mercado"
  c: "Impacto social"
  d: "Retorno de inversión"

respuesta: c
tipo: mc

enunciado: "En un proyecto social, el éxito se evalúa principalmente por:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El éxito social se mide por indicadores de impacto (ej. familias beneficiadas), no por indicadores financieros.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["logica", "proyecto_productivo"]

variables:
  a: "Solidaridad"
  b: "Sostenibilidad económica"
  c: "Ayuda humanitaria"
  d: "Voluntariado"

respuesta: b
tipo: mc

enunciado: "¿Cuál es la lógica central de los proyectos productivos?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  La sostenibilidad económica es clave: deben generar ingresos para cubrir costos y obtener beneficios.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "proyecto_social"]

variables:
  caso: "huerta_comunitaria"

respuesta: verdadero
tipo: vf

enunciado: "Una huerta comunitaria es un ejemplo clásico de proyecto social."

explicacion: |
  Las huertas comunitarias buscan acceso a alimentos y cohesión social, no lucro, siendo un ejemplo típico de proyecto social.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "proyecto_productivo"]

variables:
  caso: "fabrica_calzado"

respuesta: verdadero
tipo: vf

enunciado: "Una fábrica de calzado que busca vender en el mercado es un proyecto productivo."

explicacion: |
  Al generar bienes para la comercialización y obtener ganancias, se clasifica como proyecto productivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["beneficiarios", "proyecto_social"]

variables:
  a: "Accionistas"
  b: "Socios inversores"
  c: "Comunidad o grupo vulnerable"
  d: "Clientes minoristas"

respuesta: c
tipo: mc

enunciado: "¿Quiénes son los principales beneficiarios directos de un proyecto social?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El foco está en el grupo o comunidad, especialmente aquellos con necesidades básicas no cubiertas.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["viabilidad", "proyecto_productivo"]

variables:
  a: "Voluntad política"
  b: "Mercado"
  c: "Donantes externos"
  d: "Voluntarios"

respuesta: b
tipo: mc

enunciado: "En los proyectos productivos, ¿quién es el 'juez principal' de la viabilidad?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El mercado determina si el producto es deseado y si el proyecto es financieramente viable.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["escala", "proyecto_productivo"]

variables:
  a: "Solo grandes corporaciones"
  b: "Solo microempresas"
  c: "Pequeña, mediana o gran escala"
  d: "Exclusivamente escala local"

respuesta: c
tipo: mc

enunciado: "Los proyectos productivos pueden ser de:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  No hay restricción de escala; pueden ser emprendimientos individuales hasta grandes industrias.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["metricas", "proyecto_social"]

variables:
  afirmacion: "medicion_unicamente_financiera"

respuesta: falso
tipo: vf

enunciado: "El éxito de un proyecto social se mide únicamente por indicadores financieros."

explicacion: |
  Se mide por indicadores de impacto social, como bienestar o acceso a derechos, no solo dinero.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["objetivo", "proyecto_social"]

variables:
  a: "Maximizar dividendos"
  b: "Transformar la realidad comunitaria"
  c: "Aumentar la cuota de mercado"
  d: "Reducir costos operativos"

respuesta: b
tipo: mc

enunciado: "¿Qué buscan transformar los proyectos sociales?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Su objetivo es mejorar la calidad de vida y la realidad social de un grupo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["ganancias", "proyecto_productivo"]

variables:
  a: "Distribuir entre voluntarios"
  b: "Reinvertir o distribuir entre socios"
  c: "Donar completamente a ONGs"
  d: "Guardar en cuentas sin interés"

respuesta: b
tipo: mc

enunciado: "Las ganancias de un proyecto productivo suelen destinarse a:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El beneficio obtenido permite reinvertir en el proyecto o distribuirse entre los socios/inversores.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "proyecto_social"]

variables:
  caso: "acceso_salud"

respuesta: verdadero
tipo: vf

enunciado: "Garantizar acceso a salud para sectores vulnerables es un objetivo de proyectos sociales."

explicacion: |
  Los proyectos sociales cubren necesidades básicas como salud, educación y vivienda.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "avanzado"
  tags: ["financiamiento", "complejidad"]

variables:
  a: "Exclusivamente público"
  b: "Exclusivamente privado"
  c: "Público, donaciones o fondos internacionales"
  d: "Solo ventas al consumidor"

respuesta: c
tipo: mc

enunciado: "Los proyectos sociales pueden financiarse con:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  La combinación de fondos públicos, donaciones y fondos internacionales es común en el sector social.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["producto", "proyecto_productivo"]

variables:
  a: "No intercambiable"
  b: "Intercambiable en el mercado"
  c: "Solo para uso interno"
  d: "Exclusivo para el gobierno"

respuesta: b
tipo: mc

enunciado: "Los productos de un proyecto productivo son:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Se generan bienes o servicios con el fin de ser comercializados e intercambiados.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["definicion", "proyecto"]

variables:
  afirmacion: "proyecto_rutinario"

respuesta: falso
tipo: vf

enunciado: "Un proyecto es una actividad rutinaria y repetitiva."

explicacion: |
  Los proyectos son iniciativas únicas, no rutinarias. Las actividades repetitivas son operaciones.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "avanzado"
  tags: ["contexto", "politicas_publicas"]

variables:
  a: "Ignorar ambos tipos"
  b: "Analizar críticamente ambos tipos"
  c: "Solo apoyar proyectos productivos"
  d: "Solo apoyar proyectos sociales"

respuesta: b
tipo: mc

enunciado: "Entender esta distinción ayuda a analizar críticamente:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Permite comprender cómo se organizan las iniciativas y las estrategias empresariales o públicas.
```

