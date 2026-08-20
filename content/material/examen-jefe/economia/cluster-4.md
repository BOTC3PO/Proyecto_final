# Examen jefe — Domina costos y balances

> Logro #190. Aprobaste el parcial integrando conceptos de costo marginal, cultura organizacional y análisis de deuda. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **114 preguntas totales** en 5/5 secciones.

---

## Sección: costo-marginal (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  a: random(1, 6)
  b: random(5, 30)
  costo_fijo: random(100, 1000)
  q: random(1, 30)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q={q}?"

pasos:
  - "Cmg(q) = C'(q) = {2 * a}q + {b}"
  - "Cmg({q}) = {2 * a}×{q} + {b} = {2 * a * q + b}"

explicacion: |
  El costo fijo ({costo_fijo}) desaparece al derivar — el costo marginal
  sólo refleja la parte variable.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  a: random(1, 5)
  b: random(5, 20)
  costo_fijo: random(200, 800)
  q: random(1, 20)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q={q}?"

explicacion: |
  Cmg(q) = {2 * a}q + {b}, evaluado en q={q}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  costo_fijo_1: random(100, 500)
  costo_fijo_2: random(501, 1000)
  a: random(1, 5)
  b: random(5, 20)
  q: random(1, 20)

respuesta: verdadero
tipo: vf

enunciado: "Dos empresas tienen la misma parte variable de costo ({a}q² + {b}q), pero costos fijos distintos ({costo_fijo_1} y {costo_fijo_2}). ¿Tienen el mismo costo marginal en q={q}?"

explicacion: |
  El costo fijo se anula al derivar — sólo importa la parte variable
  para el costo marginal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {b}q + {costo_fijo} (costo variable lineal). ¿Cuál es el costo marginal, para cualquier q?"

explicacion: |
  Cmg(q) = {b}, constante — no depende de q cuando el costo variable es
  lineal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  a: random(1, 8)
  b: random(5, 20)
  costo_fijo: random(100, 500)

respuesta: verdadero
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo} (con a>0). ¿Es creciente el costo marginal a medida que aumenta q?"

explicacion: |
  Cmg(q)={2 * a}q+{b} es una función lineal creciente en q, porque el
  coeficiente {2 * a} es positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 6)
  b: random(5, 20)
  q1: random(1, 10)
  q2: random(11, 30)

respuesta: ((2 * a * q2 + b) > (2 * a * q1 + b))
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + costo fijo. ¿Es mayor el costo marginal en q={q2} que en q={q1}?"

explicacion: |
  Con a positivo, el costo marginal crece con q — producir más caro cada
  vez la unidad siguiente.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal es, aproximadamente, cuánto cuesta producir una unidad adicional."

explicacion: |
  Es la definición central del tema.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cmg(q) = C'(q), la derivada de la función de costo total."

explicacion: |
  Es la definición formal, ya usada en las cuentas anteriores.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El costo marginal (Cmg=C') y el costo promedio (Cme=C/q) son exactamente el mismo cálculo."

explicacion: |
  Son cálculos distintos: el marginal mira la próxima unidad; el
  promedio reparte el costo total entre todas las unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["costo_promedio"]

variables:
  q: random(2, 10)
  m: random(5, 20)
  k: random(1, 20)
  costo_fijo: m * q
  costo_variable_total: k * q

respuesta: m + k
tipo: input
tolerancia_abs: 0

enunciado: "Producir {q} unidades cuesta un total de {costo_fijo + costo_variable_total} (fijo {costo_fijo} + variable {costo_variable_total}). ¿Cuál es el costo PROMEDIO por unidad?"

explicacion: |
  Cme = C(q)/q — reparte el costo total entre todas las unidades, algo
  distinto del costo marginal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El costo marginal incluye una parte proporcional de los costos fijos de la empresa."

explicacion: |
  No — el costo marginal sólo refleja el costo variable, porque la
  derivada de una constante (el costo fijo) es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cmg(q)=C'(q) es una aproximación de C(q+1)−C(q) (el costo real y exacto de producir una unidad más) — para funciones suaves, se parecen mucho, pero no son matemáticamente idénticos."

explicacion: |
  La derivada es un límite; C(q+1)−C(q) es una diferencia discreta —
  ideas relacionadas, no la misma cuenta exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  a: random(1, 5)
  b: random(5, 15)
  q: random(5, 20)

respuesta: a * (2 * q + 1) + b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q² + {b}q (sin costo fijo). ¿Cuánto vale C({q}+1) − C({q}) (el costo exacto de la unidad {q}+1)?"

pasos:
  - "C(q+1)−C(q) = {a}(2q+1) + {b}, evaluado en q={q}"

explicacion: |
  Esta es la diferencia EXACTA, distinta (aunque parecida) al costo
  marginal Cmg({q}) = {2 * a * q + b}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el costo marginal decrece con la cantidad producida, significa que cada unidad adicional cuesta menos que la anterior (economías de escala)."

explicacion: |
  Es lo opuesto a los rendimientos decrecientes — producir más se vuelve
  más eficiente por unidad.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 6)
  b: random(5, 30)
  costo_fijo: random(100, 1000)
  q: random(1, 30)
  real: 2 * a * q + b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + {costo_fijo}. ¿Es correcto que el costo marginal en q={q} sea {propuesto}?"

explicacion: |
  El valor correcto es Cmg({q}) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["aplicacion", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(10, 30)
  q: random(1, 20)
  precio_venta: random(50, 200)

respuesta: ((2 * a * q + b) < precio_venta)
tipo: vf

enunciado: "C(q) = {a}q² + {b}q + costo fijo. El precio de venta de cada unidad es {precio_venta}. En q={q}, ¿conviene producir una unidad más (el costo marginal es menor que el precio de venta)?"

explicacion: |
  Mientras el costo marginal sea menor que el precio de venta, producir
  una unidad más aumenta la ganancia.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el costo marginal supera al precio de venta, producir una unidad más reduce la ganancia total de la empresa, en vez de aumentarla."

explicacion: |
  Esa unidad cuesta más de lo que se puede vender — es un cálculo que
  conecta con `../../matematica/optimizacion/`: el punto óptimo de
  producción es donde Cmg se iguala al precio (o al ingreso marginal).
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["evaluar"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = 3q² + {b}q + {costo_fijo}. ¿Cuál es el costo marginal en q=0?"

explicacion: |
  Cmg(0) = 6×0+{b} = {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal se mide en unidades de moneda por unidad producida (por ejemplo, pesos por unidad), no en pesos totales."

explicacion: |
  Es una TASA de cambio del costo respecto a la cantidad, no un costo
  total.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["evaluar"]

variables:
  a: random(1, 3)
  b: random(1, 5)
  c: random(5, 20)
  q: random(1, 10)

respuesta: 3 * a * q ^ 2 + 2 * b * q + c
tipo: input
tolerancia_abs: 0

enunciado: "C(q) = {a}q³ + {b}q² + {c}q (costo con rendimientos que cambian). ¿Cuál es el costo marginal en q={q}?"

pasos:
  - "Cmg(q) = {3 * a}q² + {2 * b}q + {c}"

explicacion: |
  Con un término cúbico en el costo, el costo marginal mismo ya no es
  lineal — cambia de forma más compleja con q.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la mayoría de los modelos económicos razonables, el costo marginal es positivo — producir más siempre agrega algo de costo (aunque sea poco)."

explicacion: |
  Sería inusual (aunque matemáticamente posible en un modelo mal
  planteado) que producir más redujera el costo total.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Así como el costo marginal es la derivada del costo total, el 'ingreso marginal' (no cubierto en este módulo) sería la derivada del ingreso total — la misma idea aplicada al otro lado de la cuenta de una empresa."

explicacion: |
  Es el mismo patrón de "razón de cambio" aplicado a otra magnitud
  económica — la comparación de Cmg con el precio de venta ya adelantó
  esta idea.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  a: random(2, 6)
  b: random(10, 30)
  q: random(50, 100)

respuesta: 2 * a * q + b
tipo: input
tolerancia_abs: 0

enunciado: "Una fábrica cerca de su capacidad máxima tiene C(q) = {a}q² + {b}q + costo fijo (el término cuadrático refleja que cuesta cada vez más producir cerca del límite). ¿Cuál es el costo marginal al producir la unidad {q}?"

explicacion: |
  Es un ejemplo real de por qué el costo marginal creciente es común
  cerca de la capacidad instalada de una planta.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal en un punto es, geométricamente, la pendiente de la recta tangente al gráfico de C(q) en ese punto."

explicacion: |
  Es la misma interpretación geométrica de la derivada ya vista en
  `../../matematica/derivada/`.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "basico"
  tags: ["verificacion", "verdadero_falso"]

variables:
  b: random(10, 50)
  costo_fijo: random(100, 500)
  propuesto: uno_de([0, 1]) * costo_fijo + b

respuesta: (propuesto == b)
tipo: vf

enunciado: "C(q) = {b}q + {costo_fijo}. ¿Es correcto que el costo marginal sea {propuesto}?"

explicacion: |
  El costo marginal correcto es {b} — si el número propuesto incluye el
  costo fijo, está mal.
```

```
metadata:
  materia: "matematicas"
  tema: "costo_marginal"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El costo marginal es un ejemplo de cómo la derivada, entendida como 'razón de cambio', se aplica directamente a decisiones económicas reales de producción."

explicacion: |
  Es el mismo concepto matemático de `../../matematica/derivada/`,
  ahora con significado económico.
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

## Sección: cuota-credito-frances (23 preguntas)

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "¿Qué caracteriza al sistema francés de amortización de un crédito?"
tipo: mc
opciones_explicitas:
  - "La cuota es siempre la misma en pesos durante todo el préstamo"
  - "El capital se devuelve entero recién en la última cuota"
  - "La cantidad de cuotas cambia según cuánto se pague cada mes"
respuesta: "La cuota es siempre la misma en pesos durante todo el préstamo"

explicacion: |
  Es el sistema más usado en Argentina para préstamos personales y
  créditos hipotecarios, justamente por esa cuota fija y predecible.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el sistema francés, el monto de la cuota es el mismo en cada uno de los pagos, asumiendo tasa fija."

explicacion: |
  Ese es el rasgo que define al sistema francés frente a otros sistemas
  de amortización.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la cuota total no cambia, la proporción de interés y de amortización de capital dentro de cada cuota sí cambia mes a mes."

explicacion: |
  El interés se calcula sobre el saldo adeudado, que va bajando; la
  amortización es lo que queda de la cuota después de pagar ese interés.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "En las primeras cuotas de un préstamo con sistema francés, ¿qué componente de la cuota es mayor?"
tipo: mc
opciones_explicitas:
  - "El interés"
  - "La amortización de capital"
  - "Los dos son siempre iguales"
respuesta: "El interés"

explicacion: |
  Al principio el saldo adeudado es alto, así que el interés calculado
  sobre ese saldo también lo es.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "En las últimas cuotas de un préstamo con sistema francés, ¿qué componente de la cuota es mayor?"
tipo: mc
opciones_explicitas:
  - "La amortización de capital"
  - "El interés"
  - "Los dos son siempre iguales"
respuesta: "La amortización de capital"

explicacion: |
  Con el saldo adeudado ya bajo, el interés de esa cuota es chico, y casi
  toda la cuota amortiza capital.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "calculo"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n: random(6, 36)

respuesta: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)
tipo: input
tolerancia_abs: 2

enunciado: "Un préstamo de ${capital}, a una tasa mensual del {tasa}%, se paga en {n} cuotas con sistema francés. ¿Cuál es el monto de cada cuota?"

pasos:
  - "Cuota = C × i × (1+i)^n / ((1+i)^n - 1), con C = {capital}, i = {tasa/100}, n = {n}"

explicacion: |
  Se aplica la fórmula del sistema francés con la tasa mensual en forma
  decimal.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "calculo"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n: random(6, 36)
  cuota: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)

respuesta: cuota * n
tipo: input
tolerancia_abs: 2

enunciado: "Un préstamo con sistema francés tiene una cuota fija de ${redondear(cuota, 2)}, a pagar en {n} cuotas. ¿Cuánto se paga en total al final del préstamo?"

explicacion: |
  El total pagado es la cuota multiplicada por la cantidad de cuotas.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "avanzado"
  tags: ["cuota_credito", "calculo"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n: random(6, 36)
  cuota: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)

respuesta: cuota * n - capital
tipo: input
tolerancia_abs: 2

enunciado: "Un préstamo de ${capital} con sistema francés tiene una cuota fija de ${redondear(cuota, 2)}, en {n} cuotas. ¿Cuánto interés total se termina pagando (sin contar el capital)?"

pasos:
  - "Total pagado: {redondear(cuota, 2)} × {n} = {redondear(cuota * n, 2)}"
  - "Interés total: {redondear(cuota * n, 2)} - {capital}"

explicacion: |
  El interés total es la diferencia entre todo lo pagado y el capital
  originalmente prestado.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "comparacion"]

variables:
  capital: random(100, 2000) * 1000
  n: random(6, 36)
  tasa_a: random(2, 5)
  tasa_b: random(6, 10)

respuesta: ((capital * (tasa_b / 100) * (1 + tasa_b / 100) ^ n / ((1 + tasa_b / 100) ^ n - 1)) > (capital * (tasa_a / 100) * (1 + tasa_a / 100) ^ n / ((1 + tasa_a / 100) ^ n - 1)))
tipo: vf

enunciado: "Con el mismo capital de ${capital} y la misma cantidad de {n} cuotas, ¿una tasa mensual del {tasa_b}% da una cuota más alta que una del {tasa_a}%?"

explicacion: |
  A mayor tasa, mayor cuota, con capital y cantidad de cuotas fijos.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "comparacion"]

variables:
  tasa: random(2, 8)
  n: random(6, 36)
  capital_a: random(100, 500) * 1000
  capital_b: random(501, 1000) * 1000

respuesta: ((capital_b * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)) > (capital_a * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)))
tipo: vf

enunciado: "A la misma tasa mensual del {tasa}% y las mismas {n} cuotas, ¿un préstamo de ${capital_b} tiene una cuota mayor que uno de ${capital_a}?"

explicacion: |
  A mayor capital prestado, mayor cuota, con tasa y cantidad de cuotas
  fijas.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "avanzado"
  tags: ["cuota_credito", "comparacion"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n_a: random(6, 12)
  n_b: random(24, 36)

respuesta: ((capital * (tasa / 100) * (1 + tasa / 100) ^ n_b / ((1 + tasa / 100) ^ n_b - 1)) < (capital * (tasa / 100) * (1 + tasa / 100) ^ n_a / ((1 + tasa / 100) ^ n_a - 1)))
tipo: vf

enunciado: "Con el mismo capital de ${capital} y la misma tasa mensual del {tasa}%, ¿pagar en {n_b} cuotas da una cuota mensual más baja que pagar en {n_a} cuotas?"

explicacion: |
  A más cuotas, el mismo capital se reparte en más pagos, así que cada
  cuota individual es más baja.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "avanzado"
  tags: ["cuota_credito", "comparacion"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n_a: random(6, 12)
  n_b: random(24, 36)

respuesta: (((capital * (tasa / 100) * (1 + tasa / 100) ^ n_b / ((1 + tasa / 100) ^ n_b - 1)) * n_b - capital) > ((capital * (tasa / 100) * (1 + tasa / 100) ^ n_a / ((1 + tasa / 100) ^ n_a - 1)) * n_a - capital))
tipo: vf

enunciado: "Con el mismo capital de ${capital} y la misma tasa mensual del {tasa}%, ¿pagar en {n_b} cuotas termina generando más interés total que pagar en {n_a} cuotas?"

explicacion: |
  Aunque la cuota mensual sea más baja con más cuotas, se paga durante
  más tiempo, y cada mes extra suma interés sobre el saldo que todavía
  no se amortizó — el interés total termina siendo mayor.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "avanzado"
  tags: ["cuota_credito", "calculo"]

variables:
  tasa: random(2, 8)
  n: random(6, 36)
  capital: random(100, 2000) * 1000
  cuota: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)

respuesta: capital
tipo: input
tolerancia_abs: 5

enunciado: "Un préstamo con sistema francés, a una tasa mensual del {tasa}% en {n} cuotas, tiene una cuota fija de ${redondear(cuota, 2)}. ¿Cuál fue el capital prestado?"

explicacion: |
  Se despeja C de la fórmula de la cuota, con la tasa y la cantidad de
  cuotas ya conocidas.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n: random(6, 36)
  cuota: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)
  total_pagado: cuota * n
  interes_total: total_pagado - capital

tipo: completar
enunciado: "Un préstamo de ${capital} terminó pagando ${redondear(total_pagado, 2)} en total. Completá: ___ (interés total) = {redondear(total_pagado, 2)} (total pagado) - {capital} (capital)."
respuestas_validas:
  - interes_total

explicacion: |
  El interés total es lo que se pagó de más, por encima del capital
  prestado.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Además del sistema francés, existen otros sistemas de amortización de créditos, como el alemán y el americano."

explicacion: |
  El francés es el más común en Argentina, pero no el único que usan los
  bancos en el mundo.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "En el sistema alemán de amortización, ¿qué es lo que se mantiene constante en cada cuota?"
tipo: mc
opciones_explicitas:
  - "La amortización de capital (no la cuota total)"
  - "La cuota total (no la amortización de capital)"
  - "El interés (no la amortización de capital)"
respuesta: "La amortización de capital (no la cuota total)"

explicacion: |
  Es al revés que en el sistema francés: ahí lo fijo es la cuota; en el
  alemán, lo fijo es cuánto capital se amortiza cada vez.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "Como en el sistema alemán la amortización de capital es siempre la misma, y el interés se calcula sobre un saldo que baja siempre igual, ¿cómo resulta la cuota total a lo largo del préstamo?"
tipo: mc
opciones_explicitas:
  - "Decreciente: arranca más alta y termina más baja"
  - "Constante: igual en todas las cuotas"
  - "Creciente: arranca más baja y termina más alta"
respuesta: "Decreciente: arranca más alta y termina más baja"

explicacion: |
  El interés de cada cuota decrece mes a mes (porque el saldo baja
  siempre lo mismo), así que la cuota total también decrece.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "vocabulario"]

enunciado: "En el sistema americano de amortización, ¿qué se paga durante el préstamo y qué pasa con el capital?"
tipo: mc
opciones_explicitas:
  - "Sólo se pagan intereses en cada cuota; el capital completo se devuelve de una vez al final"
  - "Se paga capital e interés en partes iguales cada cuota, como en el francés"
  - "El capital se devuelve en la primera cuota y después sólo quedan intereses"
respuesta: "Sólo se pagan intereses en cada cuota; el capital completo se devuelve de una vez al final"

explicacion: |
  Es el sistema donde el capital no se va amortizando de a poco: queda
  entero hasta el vencimiento.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "De los tres sistemas de amortización (francés, alemán, americano), el americano es el menos común en préstamos personales que ofrecen los bancos."

explicacion: |
  Se usa en algunos bonos e instrumentos financieros puntuales, pero rara
  vez un banco se lo ofrece a una persona para un préstamo personal.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, el sistema francés es el más común para préstamos personales y créditos hipotecarios."

explicacion: |
  Por eso es el que corresponde estudiar en detalle, aunque no sea el
  único que existe.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "orden"]

tipo: ordenar
enunciado: "En un préstamo con sistema francés, ordená estos momentos del préstamo de menor a mayor proporción de amortización de capital dentro de la cuota."
opciones_explicitas:
  - "Última cuota"
  - "Cuota 1"
  - "Cuota del medio del préstamo"
respuesta_orden: ["Cuota 1", "Cuota del medio del préstamo", "Última cuota"]

explicacion: |
  La amortización de capital empieza baja (predomina el interés) y crece
  cuota a cuota, hasta ser casi toda la cuota al final del préstamo.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "intermedio"
  tags: ["cuota_credito", "verificacion"]

variables:
  capital: random(100, 2000) * 1000
  tasa: random(2, 8)
  n: random(6, 36)
  correcto: capital * (tasa / 100) * (1 + tasa / 100) ^ n / ((1 + tasa / 100) ^ n - 1)
  error: uno_de([0, 0, 0, 5000, -5000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 10)
tipo: vf

enunciado: "¿Está bien calculada esta cuota? Préstamo de ${capital}, tasa mensual {tasa}%, {n} cuotas, cuota mostrada: ${redondear(mostrado, 2)}."

explicacion: |
  Se vuelve a calcular con la fórmula del sistema francés y se compara
  con el valor mostrado.
```

```
metadata:
  materia: "economia"
  tema: "cuota_credito_frances"
  nivel: "basico"
  tags: ["cuota_credito", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el sistema francés la cuota es fija, pero dentro de cada cuota la proporción de interés baja y la de amortización de capital sube a medida que avanza el préstamo — y no es el único sistema de amortización que existe."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: debe-haber-balance (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el activo de una empresa?"
tipo: mc
opciones_explicitas:
  - "Todo lo que la empresa posee: bienes y derechos"
  - "Todo lo que la empresa debe a terceros"
  - "La ganancia del último mes"
respuesta: "Todo lo que la empresa posee: bienes y derechos"

explicacion: |
  Incluye dinero en caja, mercadería, inmuebles, y créditos a favor.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el pasivo de una empresa?"
tipo: mc
opciones_explicitas:
  - "Todo lo que la empresa debe a terceros: obligaciones y deudas"
  - "Todo lo que la empresa posee"
  - "El total de ventas del período"
respuesta: "Todo lo que la empresa debe a terceros: obligaciones y deudas"

explicacion: |
  Incluye préstamos, deudas con proveedores, sueldos por pagar.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el patrimonio neto de una empresa?"
tipo: mc
opciones_explicitas:
  - "Lo que le queda al dueño después de descontar todas las deudas (Activo - Pasivo)"
  - "El total de dinero en efectivo en caja"
  - "El total de mercadería en stock"
respuesta: "Lo que le queda al dueño después de descontar todas las deudas (Activo - Pasivo)"

explicacion: |
  Es la parte del activo que efectivamente le pertenece al dueño, libre
  de deudas.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación contable fundamental es: Activo = Pasivo + Patrimonio Neto."

explicacion: |
  Siempre tiene que estar en equilibrio, sin importar cuántos
  movimientos haya.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  activo: random(500, 5000) * 1000
  pasivo: random(100, 2000) * 1000

respuesta: activo - pasivo
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un activo de ${activo} y un pasivo de ${pasivo}. ¿Cuál es su patrimonio neto?"

explicacion: |
  Patrimonio Neto = Activo - Pasivo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  pasivo: random(100, 2000) * 1000
  patrimonio_neto: random(500, 3000) * 1000

respuesta: pasivo + patrimonio_neto
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un pasivo de ${pasivo} y un patrimonio neto de ${patrimonio_neto}. ¿Cuál es su activo?"

explicacion: |
  Se despeja de la ecuación contable: Activo = Pasivo + Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  activo: random(500, 5000) * 1000
  patrimonio_neto: random(300, 3000) * 1000

respuesta: activo - patrimonio_neto
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un activo de ${activo} y un patrimonio neto de ${patrimonio_neto}. ¿Cuál es su pasivo?"

explicacion: |
  Se despeja: Pasivo = Activo - Patrimonio Neto.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "En una cuenta contable, ¿qué es el \"Debe\"?"
tipo: mc
opciones_explicitas:
  - "La columna de la izquierda"
  - "La columna de la derecha"
  - "El resultado final de la cuenta"
respuesta: "La columna de la izquierda"

explicacion: |
  Es una convención de nomenclatura, no significa literalmente \"lo que
  se debe\".
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "En una cuenta contable, ¿qué es el \"Haber\"?"
tipo: mc
opciones_explicitas:
  - "La columna de la derecha"
  - "La columna de la izquierda"
  - "El total de gastos del mes"
respuesta: "La columna de la derecha"

explicacion: |
  Es la columna opuesta al Debe.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Debe\" y \"Haber\" son nombres técnicos de dos columnas contables, no significan literalmente \"lo que se debe\" y \"lo que se tiene\"."

explicacion: |
  Es una convención histórica del lenguaje contable.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Activo aumentan cuando se anota un importe en su Debe."

explicacion: |
  Es la convención básica para las cuentas de Activo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Activo disminuyen cuando se anota un importe en su Haber."

explicacion: |
  Es la contraparte de que el Activo aumente por el Debe.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Pasivo aumentan cuando se anota un importe en su Haber — al revés que el Activo."

explicacion: |
  Es esta regla \"opuesta\" entre Activo y Pasivo la que mantiene la
  ecuación contable equilibrada.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cuentas de Patrimonio Neto aumentan cuando se anota un importe en su Haber, igual que las de Pasivo."

explicacion: |
  Pasivo y Patrimonio Neto siguen la misma convención, opuesta a la del
  Activo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  total_debe: random(500, 3000) * 1000
  total_haber: random(100, 2000) * 1000

respuesta: total_debe - total_haber
tipo: input
tolerancia_abs: 0

enunciado: "La cuenta \"Caja\" (de Activo) tiene un total de ${total_debe} en el Debe y ${total_haber} en el Haber. ¿Cuál es su saldo?"

explicacion: |
  En una cuenta de Activo, el saldo es Debe menos Haber.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  total_haber: random(500, 3000) * 1000
  total_debe: random(100, 2000) * 1000

respuesta: total_haber - total_debe
tipo: input
tolerancia_abs: 0

enunciado: "La cuenta \"Préstamos a pagar\" (de Pasivo) tiene un total de ${total_haber} en el Haber y ${total_debe} en el Debe. ¿Cuál es su saldo?"

explicacion: |
  En una cuenta de Pasivo, el saldo es Haber menos Debe — al revés que
  en una cuenta de Activo.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "avanzado"
  tags: ["contabilidad", "comparacion"]

variables:
  activo_a: random(1000, 3000) * 1000
  pasivo_a: random(500, 900) * 1000
  activo_b: random(1000, 3000) * 1000
  pasivo_b: random(1500, 2900) * 1000

respuesta: ((activo_a - pasivo_a) > (activo_b - pasivo_b))
tipo: vf

enunciado: "Empresa A: activo ${activo_a}, pasivo ${pasivo_a}. Empresa B: activo ${activo_b}, pasivo ${pasivo_b}. ¿La empresa A tiene mayor patrimonio neto que la B?"

explicacion: |
  Hay que calcular el patrimonio neto de cada una (activo menos pasivo)
  antes de comparar — el activo solo no alcanza.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación Activo = Pasivo + Patrimonio Neto tiene que estar en equilibrio siempre, después de cada movimiento contable."

explicacion: |
  Si no se cumple, hay un error en el registro contable.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estas empresas de menor a mayor patrimonio neto."
opciones_explicitas:
  - "Activo $2.000.000, Pasivo $1.800.000"
  - "Activo $2.000.000, Pasivo $500.000"
  - "Activo $2.000.000, Pasivo $1.200.000"
respuesta_orden: ["Activo $2.000.000, Pasivo $1.800.000", "Activo $2.000.000, Pasivo $1.200.000", "Activo $2.000.000, Pasivo $500.000"]

explicacion: |
  A igual activo, menor pasivo significa mayor patrimonio neto.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad", "verificacion"]

variables:
  activo: random(500, 5000) * 1000
  pasivo: random(100, 2000) * 1000
  correcto: activo - pasivo
  error: uno_de([0, 0, 0, 100000, -100000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1000)
tipo: vf

enunciado: "¿Está bien calculado esto? Activo ${activo}, pasivo ${pasivo}, patrimonio neto informado: ${mostrado}."

explicacion: |
  Se vuelve a restar el pasivo del activo y se compara con el valor
  informado.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "intermedio"
  tags: ["contabilidad"]

variables:
  activo: random(500, 5000) * 1000
  patrimonio_neto: random(300, 3000) * 1000
  pasivo: activo - patrimonio_neto

tipo: completar
enunciado: "Una empresa tiene un activo de ${activo} y un patrimonio neto de ${patrimonio_neto}. Completá: ___ (pasivo) = {activo} - {patrimonio_neto}."
respuestas_validas:
  - pasivo

explicacion: |
  Se despeja el pasivo de la ecuación contable fundamental.
```

```
metadata:
  materia: "economia"
  tema: "debe_haber_balance"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Activo = Pasivo + Patrimonio Neto es la ecuación que siempre debe cumplirse; Debe y Haber son las dos columnas técnicas de una cuenta, con reglas de aumento opuestas entre Activo y Pasivo/Patrimonio Neto."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: default-deuda (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es un default de deuda pública?"
tipo: mc
opciones_explicitas:
  - "Cuando un Estado no cumple con los pagos comprometidos de su deuda (interés, capital, o ambos)"
  - "Cuando un Estado paga toda su deuda antes de lo previsto"
  - "Cuando un Estado sube los impuestos para financiar su deuda"
respuesta: "Cuando un Estado no cumple con los pagos comprometidos de su deuda (interés, capital, o ambos)"

explicacion: |
  Es la definición central del tema.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Por qué puede ocurrir un default?"
tipo: mc
opciones_explicitas:
  - "Porque el Estado no consigue el dinero o la moneda extranjera necesaria, o porque decide no pagar"
  - "Sólo puede ocurrir por un error administrativo, nunca por decisión ni por falta de fondos"
  - "Los Estados nunca entran en default: sólo les pasa a las empresas privadas"
respuesta: "Porque el Estado no consigue el dinero o la moneda extranjera necesaria, o porque decide no pagar"

explicacion: |
  Son las dos razones centrales mencionadas en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un default no siempre afecta a toda la deuda de un país por igual: puede ser sólo de deuda externa, sólo de deuda interna, o de ambas."

explicacion: |
  Es la razón por la que este tema depende de entender los dos tipos
  de deuda por separado.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "problema"]

enunciado: "Un país deja de pagarle a sus acreedores extranjeros, pero sigue pagando con normalidad a los acreedores locales de deuda en moneda propia. ¿Qué tipo de default es este?"
tipo: mc
opciones_explicitas:
  - "Default de deuda externa exclusivamente"
  - "Default de deuda interna exclusivamente"
  - "No es un default: es una reestructuración automática"
respuesta: "Default de deuda externa exclusivamente"

explicacion: |
  Sólo se dejó de pagar a los acreedores de afuera: es un default
  parcial, sólo de la deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué suele pasar con el acceso de un país al crédito internacional después de un default?"
tipo: mc
opciones_explicitas:
  - "Se vuelve mucho más difícil y más caro volver a pedir prestado"
  - "Mejora automáticamente, porque el país ya no debe nada"
  - "No tiene ningún efecto sobre el crédito futuro"
respuesta: "Se vuelve mucho más difícil y más caro volver a pedir prestado"

explicacion: |
  Los prestamistas exigen una tasa más alta para compensar el riesgo
  mayor que perciben tras un default.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es una \"reestructuración\" de deuda, después de un default?"
tipo: mc
opciones_explicitas:
  - "Una negociación con los acreedores para pagar menos del monto original (quita), extender los plazos, o ambas cosas"
  - "El pago inmediato y completo de toda la deuda original"
  - "La cancelación automática de la deuda sin ninguna negociación"
respuesta: "Una negociación con los acreedores para pagar menos del monto original (quita), extender los plazos, o ambas cosas"

explicacion: |
  Es el mecanismo habitual para salir de un default y volver a tener
  una relación de pago con los acreedores.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es una \"quita\", en el contexto de una reestructuración de deuda?"
tipo: mc
opciones_explicitas:
  - "Que los acreedores acepten cobrar menos del monto originalmente pactado"
  - "Que el Estado pague el 100% de lo que debía, sin ningún descuento"
  - "Un impuesto nuevo que se cobra a los acreedores"
respuesta: "Que los acreedores acepten cobrar menos del monto originalmente pactado"

explicacion: |
  Es uno de los dos componentes centrales de una reestructuración,
  junto con la extensión de plazos.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "calculo"]

variables:
  monto_original: random(1, 20) * 100
  quita_pct: uno_de([20, 25, 30, 50])

respuesta: monto_original * (1 - quita_pct / 100)
tipo: input
tolerancia_abs: 1

enunciado: "Un país reestructura un bono de U$S {monto_original} millones con una quita del {quita_pct}%. ¿Cuántos millones de dólares terminan cobrando los acreedores?"

explicacion: |
  Con una quita del X%, los acreedores cobran el (100 - X)% del monto
  original.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "En un default de deuda externa, ¿qué puede pasar con los acreedores que NO aceptan la reestructuración?"
tipo: mc
opciones_explicitas:
  - "Pueden llevar el reclamo a tribunales extranjeros, buscando cobrar el monto original por esa vía legal"
  - "Automáticamente pierden todo derecho a reclamar cualquier cosa"
  - "El Estado está obligado por ley internacional a pagarles el doble"
respuesta: "Pueden llevar el reclamo a tribunales extranjeros, buscando cobrar el monto original por esa vía legal"

explicacion: |
  Es un riesgo real y específico de la deuda externa, que no aplica de
  la misma forma a la deuda interna.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿En qué año declaró Argentina un default de su deuda externa, en medio de una crisis económica más amplia?"
tipo: mc
opciones_explicitas:
  - "2001"
  - "1991"
  - "2015"
respuesta: "2001"

explicacion: |
  Es el ejemplo histórico real citado en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Después del default de 2001, Argentina negoció una reestructuración con la mayoría de sus acreedores (con una quita importante), mientras que un grupo que no aceptó llevó el reclamo a tribunales de Estados Unidos."

explicacion: |
  Es el desenlace real de ese caso histórico, presentado con
  neutralidad: negociación con la mayoría, litigio con la minoría que
  no aceptó.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Este tema explica la mecánica de qué pasa en un default (consecuencias, reestructuración, litigios), sin evaluar si la decisión puntual de algún país de entrar en default fue correcta o no."

explicacion: |
  Es el mismo criterio de neutralidad ya aplicado a otros temas
  sensibles de esta materia (ver `corrientes-pensamiento-economico/`).
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "Cuando se informa que \"las calificadoras de riesgo bajaron la nota de un país\", ¿qué suelen estar reflejando?"
tipo: mc
opciones_explicitas:
  - "Un default reciente o una mayor probabilidad de que ocurra uno"
  - "Que el país acaba de tener superávit comercial"
  - "Que el país bajó su tasa de interés de referencia"
respuesta: "Un default reciente o una mayor probabilidad de que ocurra uno"

explicacion: |
  Es la lectura habitual de un cambio en la calificación crediticia de
  un país.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país que vuelve a pedir prestado después de un default suele pagar una tasa de interés más alta que antes, como consecuencia directa de la pérdida de confianza que generó ese default."

explicacion: |
  Es el costo futuro de haber entrado en default: no es gratis salir
  de un incumplimiento.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque es menos común que el default de deuda externa, un default (o canje forzoso) de deuda interna también puede ocurrir."

explicacion: |
  Es la aclaración explícita de la teoría: el default no es exclusivo
  de la deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de un default y su resolución."
opciones_explicitas:
  - "El país recupera acceso al crédito, generalmente a una tasa más alta que antes"
  - "El Estado negocia una reestructuración (quita y/o extensión de plazos) con sus acreedores"
  - "El Estado no puede cumplir un pago comprometido de su deuda"
  - "Se declara el default (cese de pagos)"
respuesta_orden: ["El Estado no puede cumplir un pago comprometido de su deuda", "Se declara el default (cese de pagos)", "El Estado negocia una reestructuración (quita y/o extensión de plazos) con sus acreedores", "El país recupera acceso al crédito, generalmente a una tasa más alta que antes"]

explicacion: |
  Es el ciclo típico completo: incumplimiento, default, negociación, y
  el costo futuro de haber pasado por eso.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Por qué este tema depende de entender tanto la deuda interna como la externa?"
tipo: mc
opciones_explicitas:
  - "Porque un default puede afectar a una, a la otra, o a ambas, con consecuencias y acreedores distintos en cada caso"
  - "Porque un default siempre afecta a las dos deudas exactamente igual"
  - "Porque la deuda interna y la externa son, en realidad, la misma cosa"
respuesta: "Porque un default puede afectar a una, a la otra, o a ambas, con consecuencias y acreedores distintos en cada caso"

explicacion: |
  Es la razón de la dependencia explicada al principio de la teoría.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El riesgo de litigios en tribunales extranjeros por parte de acreedores que no aceptan una reestructuración es un riesgo específico de la deuda externa."

explicacion: |
  La deuda interna, al estar bajo jurisdicción del propio país, no
  tiene ese mismo riesgo de litigio en tribunales de otro país.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica"]

tipo: completar
enunciado: "Completá: una reestructuración de deuda combina una ___ (pagar menos del monto original) con, muchas veces, una extensión de los plazos de pago."
respuestas_validas:
  - "quita"

explicacion: |
  Es el término central de una reestructuración.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un default es el cese de pagos de una deuda, que puede afectar a la deuda interna, la externa, o ambas, y que suele resolverse con una reestructuración negociada con los acreedores."

explicacion: |
  Es la idea central de todo el tema.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Desde la balanza comercial hasta el default de deuda, toda esta sub-rama sigue el mismo hilo: cómo un país se relaciona económicamente con el resto del mundo, y qué puede salir bien o mal en esa relación."

explicacion: |
  Es el cierre conceptual de toda la sub-rama de Economía
  Internacional (`E33`-`E37`).
```
