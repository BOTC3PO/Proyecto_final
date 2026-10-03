# Examen jefe — [PENDIENTE #771]

> Logro #771. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **120 preguntas totales** en 5/5 secciones.

---

## Sección: contabilidad-como-sistema-de-informacion (26 preguntas)

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["sistema_informacion", "definicion"]

variables:
  analogia: uno_de(["sistema nervioso", "corazón", "estómago"])

respuesta: "sistema nervioso"
tipo: completar

enunciado: "En la analogía corporativa, la contabilidad funciona como el {analogia} de la empresa, llevando información vital a quienes toman decisiones."

explicacion: |
  La contabilidad se compara con el sistema nervioso y circulatorio porque transporta datos financieros cruciales para la "salud" y decisión empresarial.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["objetivo", "informacion"]

variables:
  dato_crudo: random(1, 100)
  conocimiento: redondear(dato_crudo / 10, 1)

respuesta: "conocimiento"
tipo: completar

enunciado: "La contabilidad transforma datos crudos como ventas o compras en {conocimiento} útil para la gestión."

explicacion: |
  El proceso clave es la transformación de datos operativos en información procesada que permite la toma de decisiones.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ciclo_comercial", "comercio"]

variables:
  ejemplo: uno_de(["supermercado", "fábrica de autos", "panadería"])
  accion: "compra y venta de bienes ya terminados"

respuesta: "compra y venta de bienes ya terminados"
tipo: completar

enunciado: "En el ciclo comercial, típico de empresas como {ejemplo}, la actividad central es la {accion}."

explicacion: |
  El ciclo comercial implica intermediación: comprar productos terminados y venderlos sin alterar su forma física.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["costos", "industrial"]

variables:
  costo1: "materiales directos"
  costo2: "mano de obra directa"
  costo3: "gastos generales de fabricación"

respuesta: "gastos generales de fabricación"
tipo: completar

enunciado: "La contabilidad industrial rastrea materiales directos, mano de obra directa y {costo3}."

explicacion: |
  Los tres componentes esenciales del costo de producción son materiales, mano de obra y gastos indirectos o generales.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["informes", "balance"]

variables:
  informe: "Balance General"

respuesta: "Balance General"
tipo: completar

enunciado: "Uno de los principales informes que actúan como 'informes médicos' de la compañía es el {informe}."

explicacion: |
  El Balance General muestra la situación patrimonial (activos, pasivos y patrimonio) en un momento dado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["informes", "resultados"]

variables:
  informe: "Estado de Resultados"

respuesta: "Estado de Resultados"
tipo: completar

enunciado: "El {informe} muestra la capacidad de generar ganancias o pérdidas en un período."

explicacion: |
  El Estado de Resultados (o de Ganancias y Pérdidas) resume ingresos y egresos del periodo.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["comercio", "inventario"]

variables:
  foco: "control de inventarios"

respuesta: "control de inventarios"
tipo: completar

enunciado: "En el ciclo comercial, la contabilidad se centra en el {foco} de mercadería."

explicacion: |
  Para los comerciantes, el manejo preciso del stock es vital para calcular el margen de ganancia.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ejemplos", "industria"]

variables:
  ejemplo: uno_de(["fábrica de muebles", "supermercado", "agencia de viajes"])

respuesta: "fábrica de muebles"
tipo: completar

enunciado: "Un ejemplo clásico de ciclo industrial es una {ejemplo}."

explicacion: |
  Las fábricas transforman madera en muebles, requiriendo contabilidad de costos compleja.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ejemplos", "comercio"]

variables:
  ejemplo: uno_de(["tienda de ropa", "planta de alimentos", "taller mecánico"])

respuesta: "tienda de ropa"
tipo: completar

enunciado: "Un ejemplo clásico de ciclo comercial es una {ejemplo}."

explicacion: |
  Las tiendas de ropa compran prendas terminadas y las venden, sin manufacturarlas.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion", "sistema_informacion"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad se define fundamentalmente como un sistema de información diseñado para captar, procesar y comunicar datos económicos, más que como un simple conjunto de cálculos numéricos."

explicacion: |
  Correcto. La contabilidad funciona como el 'sistema nervioso' de la empresa, transformando datos crudos en información útil para la toma de decisiones.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["clasificacion", "ciclo_industrial"]

variables:
  caso: uno_de(["fabrica_de_muebles", "planta_de_alimentos", "taller_de_autos"])

respuesta: verdadero
tipo: vf

enunciado: "Una {caso} opera bajo el ciclo industrial porque transforma materias primas en productos terminados."

explicacion: |
  Correcto. La transformación física del producto es la marca distintiva del ciclo industrial frente al comercial.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["gastos", "industrial"]

respuesta: verdadero
tipo: vf

enunciado: "El alquiler de un galpón de producción se considera un gasto general de fabricación en el ciclo industrial."

explicacion: |
  Correcto. Los gastos indirectos necesarios para la producción, como el alquiler de la fábrica, son gastos generales.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["materia_prima", "industrial"]

variables:
  materia: uno_de(["madera", "cuero", "harina"])

respuesta: verdadero
tipo: vf

enunciado: "{materia} es un ejemplo de materia prima directa en una fábrica de muebles."

explicacion: |
  La madera es el insumo principal que se transforma en el producto final en una carpintería.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["analogia", "comunicacion"]

respuesta: verdadero
tipo: vf

enunciado: "En la analogía, la contabilidad también funciona como el sistema circulatorio, distribuyendo la información a los stakeholders."

explicacion: |
  La analogía completa incluye el sistema nervioso (captación) y circulatorio (distribución) de la información.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["accountability", "ética"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad facilita la rendición de cuentas (accountability) a dueños e inversores."

explicacion: |
  Permite verificar que los recursos se usen conforme a lo esperado y reportar resultados reales.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["ejemplo", "industrial"]

variables:
  planta: uno_de(["planta_de_alimentos", "fábrica_de_textiles", "fundición"])

respuesta: verdadero
tipo: vf

enunciado: "{planta} es un ejemplo de entidad que opera en el ciclo industrial."

explicacion: |
  Estas plantas transforman materias primas en productos finales mediante procesos productivos.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["transparencia", "confianza"]

respuesta: verdadero
tipo: vf

enunciado: "La transparencia financiera promovida por la contabilidad ayuda a atraer socios e inversores."

explicacion: |
  Los inversores confían en empresas con informes claros y auditables.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion", "sistema_informacion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad se define fundamentalmente como un sistema de información diseñado para captar, procesar y comunicar datos económicos, más que como un mero conjunto de cálculos numéricos."

explicacion: |
  La contabilidad es el sistema nervioso de la empresa. Su función principal es transformar datos crudos en información útil para la toma de decisiones, asegurando transparencia y rendición de cuentas.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["analogia", "funcion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "En la analogía propuesta, la contabilidad funciona como el sistema nervioso y circulatorio de la empresa, llevando información vital sobre su salud financiera a los decisores."

explicacion: |
  Sin este flujo de información, dueños e inversores navegarían a ciegas. La contabilidad permite saber si hay ganancias, cuánto se debe y cómo se usan los recursos.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La diferencia estructural clave entre ciclo comercial e industrial es la existencia de un proceso de transformación de materias primas en el industrial."

explicacion: |
  El comercial solo mueve bienes terminados. El industrial los crea, lo que exige un sistema de costos más complejo.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["transparencia"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad es la herramienta básica para la transparencia y la rendición de cuentas en el mundo de los negocios."

explicacion: |
  Permite a los externos (inversores, bancos) y internos verificar el estado real de la organización y la gestión de los recursos.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["complejidad"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad del ciclo industrial es más compleja que la del ciclo comercial debido al rastreo de tres tipos de costos."

explicacion: |
  La necesidad de imputar costos indirectos y calcular el costo de producción hace que el sistema contable industrial sea más robusto y detallado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["impacto"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La claridad en los informes contables determina la capacidad de la empresa para conseguir créditos y atraer socios."

explicacion: |
  Los terceros externos confían en la información contable para evaluar el riesgo y la solvencia de la empresa antes de prestar dinero o invertir.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["consecuencias"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "Sin el sistema de información contable, los dueños e inversores navegarían a ciegas respecto a la salud financiera."

explicacion: |
  La falta de información impide detectar problemas a tiempo, optimizar recursos o justificar la gestión ante los stakeholders.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["estructura_costos"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "En el ciclo industrial, la diferencia clave es la necesidad de rastrear materiales directos, mano de obra y gastos generales."

explicacion: |
  Esta triple estructura de costos es lo que distingue contablemente a la industria del comercio puro.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad NO es simplemente una obligación tributaria, sino un sistema de información clave."

explicacion: |
  Aunque tiene fines fiscales, su esencia es la gestión interna y la comunicación externa de la realidad económica de la empresa.
```

## Sección: costo-de-oportunidad (30 preguntas)

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad se define como el valor de la mejor alternativa a la que se renuncia al tomar una decisión."

explicacion: |
  Esta es la definición fundamental. El costo no es lo que se gasta, sino lo que se deja de obtener por elegir otra opción.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["intangibles", "tiempo"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad puede incluir factores intangibles como el tiempo o la satisfacción personal, no solo dinero."

explicacion: |
  Correcto. El tiempo dedicado a una actividad es tiempo que no se puede usar en otra, generando un costo de oportunidad.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["escasez", "fundamento"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad existe porque los recursos son limitados y los deseos humanos son prácticamente ilimitados."

explicacion: |
  La escasez es la condición necesaria para que exista el costo de oportunidad. Si todo fuera abundante, no habría que renunciar a nada.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["mitos", "confusion_comun"]

respuesta: falso
tipo: vf

enunciado: "El costo de oportunidad es igual al dinero que se gasta en la opción elegida."

explicacion: |
  Falso. El dinero gastado es el costo contable o explícito. El costo de oportunidad es el valor de la alternativa renuncada.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["frontera_posibilidades", "grafico"]

respuesta: verdadero
tipo: vf

enunciado: "En la Frontera de Posibilidades de Producción (FPP), el costo de oportunidad se representa por la pendiente de la curva."

explicacion: |
  La pendiente de la FPP indica cuánto de un bien hay que dejar de producir para obtener una unidad adicional del otro bien.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["tiempo_libre", "satisfaccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si elegís leer un libro en lugar de dormir la siesta, el costo de oportunidad es la satisfacción del descanso perdido."

explicacion: |
  Correcto. El costo de oportunidad es el beneficio de la mejor alternativa no elegida, en este caso, el descanso.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["costos_ocultos", "contabilidad"]

respuesta: falso
tipo: vf

enunciado: "El costo de oportunidad siempre es un costo explícito que aparece en los libros contables."

explicacion: |
  Falso. El costo de oportunidad es un costo implícito (no monetario directo) que no aparece en la contabilidad tradicional.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["consumo", "decision_financiera"]

respuesta: "el valor del auto usado"
tipo: completar

enunciado: "Si comprás un auto nuevo, el costo de oportunidad es el valor del auto usado que podrías haber comprado con ese mismo dinero."

explicacion: |
  El dinero gastado en el auto nuevo no puede usarse para comprar el auto usado. Ese es el sacrificio realizado.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["analisis_marginal", "decision_limite"]

respuesta: verdadero
tipo: vf

enunciado: "Las decisiones marginales se toman comparando el beneficio marginal con el costo de oportunidad marginal."

explicacion: |
  Correcto. Una decisión racional se toma hasta que el beneficio marginal es igual al costo marginal (que incluye el costo de oportunidad).
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["subjetividad", "valor_personal"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad es subjetivo porque depende del valor que el individuo asigna a las alternativas."

explicacion: |
  Correcto. Dos personas pueden tener diferentes costos de oportunidad para la misma decisión según sus preferencias y circunstancias.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["politica_publica", "bien_comun"]

respuesta: verdadero
tipo: vf

enunciado: "El costo de oportunidad de mantener la paz es la infraestructura militar que no se puede construir con esos recursos."

explicacion: |
  Correcto. Los recursos destinados a la paz (o a otros bienes civiles) no pueden usarse para fines militares.
```

```
metadata:
  materia: "economia"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["condicion_necesaria", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Si no existe ninguna alternativa viable, el costo de oportunidad de la decisión es cero."

explicacion: |
  Correcto. Sin alternativas, no hay nada que renunciar, por lo tanto, el costo de oportunidad es nulo.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["costo_explicito", "costo_implicito"]

variables:
  costo_alquiler: random(50000, 100000)
  ganancia_potencial: random(120000, 200000)

respuesta: ganancia_potencial
tipo: input

enunciado: "Un empresario deja de ganar {ganancia_potencial} pesos por su sueldo anterior para abrir su negocio. El alquiler del local cuesta {costo_alquiler}. ¿Cuál es el costo de oportunidad de la primera decisión (abrir el negocio) respecto a su empleo anterior?"

explicacion: |
  El costo de oportunidad de la decisión principal es la mejor alternativa renunciada (el sueldo), no el costo contable del alquiler.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["ejemplo_cotidiano", "mc"]

variables:
  opcion_a: "El dinero gastado en la comida"
  opcion_b: "El tiempo y disfrute de ver la película"
  opcion_c: "El precio del transporte"
  opcion_d: "El ahorro que dejaste de tener"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "Si decidís ver una película en casa en lugar de ir al trabajo, el costo de oportunidad es:"

explicacion: |
  El costo de oportunidad es el beneficio de la mejor alternativa no elegida, en este caso, el salario del trabajo.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["inversiones", "intereses"]

variables:
  capital: random(100000, 500000)
  tasa_otro_banco: random(5, 15)
  tasa_actual: 0

respuesta: "{capital * tasa_otro_banco / 100}"
tipo: input

enunciado: "Tenés {capital} pesos. Si los dejás en tu cuenta corriente (0% interés) en lugar de invertirlos en un bono que paga {tasa_otro_banco}% anual, ¿cuánto dinero dejás de ganar en un año?"

explicacion: |
  El costo de oportunidad es el rendimiento perdido al no elegir la mejor alternativa de inversión.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["comparacion", "racionalidad"]

variables:
  valor_opcion_a: random(100, 500)
  valor_opcion_b: random(200, 600)
  valor_opcion_c: random(50, 300)

respuesta: uno_de(["opcion_b", "opcion_a", "opcion_c"])
opciones_explicitas: ["opcion_b", "opcion_a", "opcion_c"]
tipo: mc

enunciado: "Si elegís la opción A (valor 100) en lugar de la B (valor 200) y la C (valor 50), ¿cuál fue el costo de oportunidad de tu decisión?"

explicacion: |
  El costo de oportunidad es el valor de la MEJOR alternativa no elegida. Entre B y C, la mejor es B.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["educacion", "tiempo"]

variables:
  horas_estudio: random(2, 5)
  salario_hora: random(800, 1200)

respuesta: "{horas_estudio * salario_hora}"
tipo: input

enunciado: "Si dedicas {horas_estudio} horas a estudiar y podrías haber trabajado a {salario_hora} pesos/hora, tu costo de oportunidad monetario es:"

explicacion: |
  Multiplicamos el tiempo dedicado a la actividad no remunerada por el salario de la mejor alternativa laboral.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["definicion_tecnica", "mc"]

variables:
  opcion_a: "El costo total de producción"
  opcion_b: "El beneficio de la mejor alternativa renunciada"
  opcion_c: "El gasto fijo"
  opcion_d: "El ingreso marginal"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "En economía, el costo de oportunidad es:"

explicacion: |
  Es el beneficio de la mejor alternativa a la que se renuncia.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["politica_publica", "presupuesto"]

variables:
  presupuesto: random(1000000000, 5000000000)
  hospitales: 5
  escuelas: 10

respuesta: "{presuesto / escuelas}"
tipo: input

enunciado: "Con un presupuesto de {presupuesto}, un gobierno puede construir {escuelas} escuelas o {hospitales} hospitales. ¿Cuál es el costo de oportunidad de construir una escuela en términos de hospitales?"

explicacion: |
  Primero calculamos el costo de una escuela (presupuesto/escuelas) y luego cuántos hospitales se pueden construir con ese monto (costo escuela / costo hospital). Nota: La respuesta correcta requiere calcular el valor relativo. Aquí simplificamos a la proporción directa si los costos unitarios fueran iguales, pero en realidad es (Presupuesto/Escuelas) / (Presupuesto/Hospitales) = Hospitales/Escuelas. Corrigiendo lógica: Costo 1 escuela = P/E. Costo 1 hospital = P/H. Cuántos hospitales con P/E? (P/E) / (P/H) = H/E.
```

```
variables:
  presupuesto: random(1000000000, 5000000000)
  hospitales: 5
  escuelas: 10

respuesta: "{hospitales / escuelas}"
tipo: input

enunciado: "Con un presupuesto de {presupuesto}, un gobierno puede construir {escuelas} escuelas o {hospitales} hospitales. ¿Cuántos hospitales se dejan de construir por cada escuela construida?"

explicacion: |
  La proporción de intercambio es Hospitales/Escuelas. Por cada escuela, renunciamos a 0.5 hospitales.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["distractor", "relevancia"]

variables:
  costo_pasaje: random(200, 500)
  tiempo_viaje: 1
  salario_hora: 1000

respuesta: costo_pasaje
tipo: input

enunciado: "Si vas al trabajo, gastas {costo_pasaje} en pasaje y tardas {tiempo_viaje} hora. Si quedás en casa, ahorrás el pasaje pero perdés el salario de {salario_hora}. Si tu decisión es ir al trabajo, ¿cuál es el costo de oportunidad de QUEDARTE en casa?"

explicacion: |
  Si te quedás en casa, el costo es el salario perdido. El pasaje es un costo de ir al trabajo, no de quedarte.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["distractor", "relevancia"]

variables:
  costo_pasaje: random(200, 500)
  tiempo_viaje: 1
  salario_hora: 1000

respuesta: salario_hora
tipo: input

enunciado: "Si vas al trabajo, gastas {costo_pasaje} en pasaje. Si quedás en casa, ahorrás el pasaje pero perdés el salario de {salario_hora}. Si tu opción elegida es 'quedarse en casa', ¿cuál es el costo de oportunidad monetario?"

explicacion: |
  El costo de oportunidad de quedarse en casa es el ingreso que dejás de ganar trabajando.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["tiempo", "mc"]

variables:
  opcion_a: "El sueño perdido"
  opcion_b: "El salario de la hora no trabajada"
  opcion_c: "El precio del café"
  opcion_d: "El tiempo de preparación del café"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "Si te tomás un café de 15 minutos en lugar de trabajar, el costo de oportunidad es:"

explicacion: |
  El costo de oportunidad es el valor de la mejor alternativa, es decir, el salario que dejás de ganar en esos 15 minutos.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["educacion_superior", "costo_total"]

variables:
  matricula: random(10000, 50000)
  mensualidad: random(5000, 20000)
  salario_anual: random(2000000, 4000000)
  anos: 4

respuesta: "{matricula + (mensualidad * 12 * anos) + (salario_anual * anos)}"
tipo: input

enunciado: "Para estudiar una carrera de {anos} años, pagás {matricula} de matrícula y {mensualidad} mensuales. Además, dejás de ganar {salario_anual} anuales. ¿Cuál es el costo de oportunidad total de la carrera?"

explicacion: |
  El costo de oportunidad total incluye los costos directos (matrícula y mensualidades) más el ingreso perdido (salario).
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["definicion", "mc"]

variables:
  opcion_a: "Cualquier alternativa"
  opcion_b: "La alternativa con menor costo monetario"
  opcion_c: "La mejor alternativa disponible"
  opcion_d: "La primera alternativa pensada"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "El costo de oportunidad se calcula considerando:"

explicacion: |
  Solo la MEJOR alternativa disponible. Las otras opciones no elegidas no cuentan.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["tiempo_libre", "ejemplo"]

variables:
  horas_libres: random(2, 4)
  valor_hora_diversion: random(500, 1000)

respuesta: "{horas_libres * valor_hora_diversion}"
tipo: input

enunciado: "Si valorás tu hora de diversión en {valor_hora_diversion} pesos y decidís trabajar por {horas_libres} horas en lugar de divertirte, ¿cuál es el costo de oportunidad de trabajar?"

explicacion: |
  El costo de oportunidad es el valor subjetivo de la diversión perdida.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["costo_implicito", "mc"]

variables:
  opcion_a: "El alquiler del local"
  opcion_b: "El salario que el dueño deja de ganar"
  opcion_c: "La luz del negocio"
  opcion_d: "El sueldo de los empleados"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "En un negocio propio, ¿cuál de estos es un costo de oportunidad implícito?"

explicacion: |
  El salario que el dueño deja de ganar trabajando en otra parte es un costo implícito. Los otros son costos explícitos.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "intermedio"
  tags: ["tierra", "uso_suelo"]

variables:
  opcion_a: "El precio de venta de la tierra"
  opcion_b: "El cultivo que se deja de sembrar"
  opcion_c: "El costo de la maquinaria"
  opcion_d: "El salario del agricultor"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "Si usás una tierra para construir casas en lugar de sembrar trigo, el costo de oportunidad es:"

explicacion: |
  El beneficio que hubieras obtenido con la siembra de trigo.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "basico"
  tags: ["transporte", "tiempo"]

variables:
  tiempo_auto: 60
  tiempo_bus: 90
  salario_hora: 1000

respuesta: "{(tiempo_bus - tiempo_auto) * salario_hora / 60}"
tipo: input

enunciado: "El auto tarda {tiempo_auto} minutos y el bus {tiempo_bus} minutos. Si tu hora vale {salario_hora} pesos, ¿cuánto dinero perdés de tiempo si elegís el bus en lugar del auto?"

explicacion: |
  La diferencia de tiempo multiplicada por el valor de tu hora.
```

```
metadata:
  materia: "Economía"
  tema: "costo_de_oportunidad"
  nivel: "avanzado"
  tags: ["naturaleza", "subjetivo"]

variables:
  opcion_a: "Objetivo y contable"
  opcion_b: "Subjetivo y basado en preferencias"
  opcion_c: "Fijo e inmutable"
  opcion_d: "Irrelevante para la decisión"

respuesta: uno_de([opcion_a, opcion_b, opcion_c, opcion_d])
opciones_explicitas: [opcion_a, opcion_b, opcion_c, opcion_d]
tipo: mc

enunciado: "El costo de oportunidad es fundamentalmente:"

explicacion: |
  Subjetivo, ya que depende de las preferencias y valoraciones individuales de la mejor alternativa.
```

## Sección: indices-financieros (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "corriente"]

variables:
  ac: random(100, 500)
  pc: random(50, 150)
  resultado: redondear(ac / pc, 2)

respuesta: resultado
tipo: input

enunciado: "Una empresa tiene Activos Corrientes de {ac} y Pasivos Corrientes de {pc}. Calculá el índice de Liquidez Corriente. Redondeá a 2 decimales."

explicacion: |
  La Liquidez Corriente se calcula dividiendo los Activos Corrientes entre los Pasivos Corrientes.
  Fórmula: AC / PC.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "stock"]

variables:
  costo: random(1000, 5000)
  inventario: random(100, 500)
  resultado: redondear(costo / inventario, 2)

respuesta: resultado
tipo: input

enunciado: "El Costo de Mercadería Vendida es {costo} y el Inventario Promedio es {inventario}. Calculá la rotación de stock."

explicacion: |
  La rotación de stock mide cuántas veces se renueva el inventario. Se calcula como Costo de Mercadería Vendida / Inventario Promedio.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["balance", "activos"]

variables:
  ac: random(100, 300)
  af: random(400, 900)
  resultado: ac + af

respuesta: resultado
tipo: input

enunciado: "Los Activos Corrientes son {ac} y los Activos Fijos son {af}. ¿Cuál es el total de Activos?"

explicacion: |
  Activos Totales = Activos Corrientes + Activos Fijos.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["liquidez", "acida"]

variables:
  ac: random(200, 500)
  inventario: random(50, 150)
  pc: random(100, 300)
  numerador: ac - inventario
  resultado: redondear(numerador / pc, 2)

respuesta: resultado
tipo: input

enunciado: "Activos Corrientes: {ac}, Inventario: {inventario}, Pasivos Corrientes: {pc}. Calculá la Liquidez Ácida."

explicacion: |
  Liquidez Ácida = (Activos Corrientes - Inventario) / Pasivos Corrientes.
  Elimina el inventario porque es el activo menos líquido.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["conceptos", "costo"]

variables:
  tasa: random(5, 15)
  monto: random(1000, 5000)
  interes: redondear(monto * (tasa / 100), 0)

respuesta: interes
tipo: completar

enunciado: "Si inviertes {monto} a una tasa del {tasa}% anual, el rendimiento futuro es {interes}. Este monto representa el costo de oportunidad de no tener el dinero disponible hoy."

explicacion: |
  El costo de oportunidad en finanzas suele referirse al retorno perdido al elegir una alternativa sobre otra. Aquí se calcula el interés generado.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "cuentas_cobrar"]

variables:
  ventas_credito: random(10000, 50000)
  cuentas_cobrar: random(1000, 5000)
  dias: 360
  rotacion: ventas_credito / cuentas_cobrar
  resultado: floor(dias / rotacion)

respuesta: resultado
tipo: input

enunciado: "Ventas a Crédito: {ventas_credito}, Cuentas por Cobrar: {cuentas_cobrar}. Usando un año de 360 días, calculá el período promedio de cobro en días."

explicacion: |
  Período de Cobro = 360 / (Ventas a Crédito / Cuentas por Cobrar).
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["valor_tiempo", "vp"]

variables:
  vf: random(1000, 5000)
  tasa: random(5, 10)
  anios: uno_de([1, 2, 3])
  resultado: redondear(vf / ((1 + tasa/100) ^ anios), 2)

respuesta: resultado
tipo: input

enunciado: "Un valor futuro de {vf} dentro de {anios} años, con una tasa de descuento del {tasa}%, tiene un Valor Presente de aproximadamente:"

explicacion: |
  VP = VF / (1 + r)^n.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "efectivo"]

variables:
  caja: random(100, 500)
  bancos: random(200, 800)
  resultado: caja + bancos

respuesta: resultado
tipo: input

enunciado: "Caja: {caja}, Bancos: {bancos}. ¿Cuál es el total de Efectivo y Equivalentes de Efectivo?"

explicacion: |
  Efectivo = Caja + Bancos. Es el activo más líquido.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["costo", "capital"]

variables:
  dividendo: random(2, 10)
  precio: random(20, 50)
  crecimiento: random(2, 8)
  costo: redondear((dividendo / precio) + (crecimiento / 100), 4)

respuesta: costo
tipo: input

enunciado: "Dividendo esperado: {dividendo}, Precio de la acción: {precio}, Tasa de crecimiento: {crecimiento}%. Calculá el Costo de Capital Accionario (Modelo Gordon)."

explicacion: |
  Ke = (D1 / P0) + g.
  Donde D1 es dividendo, P0 precio y g tasa de crecimiento.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["costos", "equilibrio"]

variables:
  costos_fijos: random(1000, 5000)
  precio: random(100, 300)
  costo_variable: random(40, 80)
  resultado: floor(costos_fijos / (precio - costo_variable))

respuesta: resultado
tipo: input

enunciado: "Costos Fijos: {costos_fijos}, Precio de Venta: {precio}, Costo Variable Unitario: {costo_variable}. Calculá el punto de equilibrio en unidades."

explicacion: |
  Punto de Equilibrio = Costos Fijos / (Precio - Costo Variable Unitario).
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["valor_tiempo", "vf"]

variables:
  pv: random(1000, 5000)
  tasa: random(5, 10)
  anios: uno_de([1, 2, 3])
  resultado: redondear(pv * ((1 + tasa/100) ^ anios), 2)

respuesta: resultado
tipo: input

enunciado: "Si inviertes {pv} hoy a una tasa del {tasa}% anual durante {anios} años, el Valor Futuro será:"

explicacion: |
  VF = PV * (1 + r)^n.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["liquidez", "inmediata"]

variables:
  efectivo: random(50, 200)
  pc: random(100, 400)
  resultado: redondear(efectivo / pc, 2)

respuesta: resultado
tipo: input

enunciado: "Efectivo y Equivalentes: {efectivo}, Pasivos Corrientes: {pc}. Calculá la Liquidez Inmediata."

explicacion: |
  Liquidez Inmediata = Efectivo / Pasivos Corrientes.
  Mide la capacidad de pago sin vender inventario.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["recuperacion", "inversion"]

variables:
  inversion: random(5000, 15000)
  flujo_anual: random(1000, 3000)
  resultado: floor(inversion / flujo_anual)

respuesta: resultado
tipo: input

enunciado: "Inversión Inicial: {inversion}, Flujo de Caja Anual Constante: {flujo_anual}. Calculá el periodo de recuperación simple en años."

explicacion: |
  Periodo de Recuperación = Inversión Inicial / Flujo de Caja Anual.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["wacc", "capital"]

variables:
  deuda_ratio: 0.4
  eq_ratio: 0.6
  costo_deuda: 0.08
  costo_equity: 0.12
  impuesto: 0.30
  wacc: redondear((deuda_ratio * costo_deuda * (1 - impuesto)) + (eq_ratio * costo_equity), 4)

respuesta: wacc
tipo: input

enunciado: "Estructura de Capital: 40% Deuda, 60% Equity. Costo Deuda: 8%, Costo Equity: 12%, Impuesto: 30%. Calculá el WACC."

explicacion: |
  WACC = (Wd * Kd * (1-T)) + (We * Ke).
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "interpretacion"]

variables:
  ac: random(100, 300)
  pc: random(301, 500)

respuesta: falso
tipo: vf

enunciado: "Si una empresa tiene Activos Corrientes de {ac} y Pasivos Corrientes de {pc}, su Liquidez Corriente indica que tiene holgura para pagar sus deudas a corto plazo."

explicacion: |
  Falso. Al ser {ac} < {pc}, el índice es menor a 1 ({redondear(ac/pc, 2)}), lo que indica dificultad potencial para cubrir obligaciones a corto plazo.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "eficiencia"]

variables:
  costo_ventas: random(1000, 5000)
  inventario: random(100, 500)

respuesta: verdadero
tipo: vf

enunciado: "Un índice de rotación de inventario alto indica que la empresa vende su mercadería rápidamente y la mantiene poco tiempo en almacén."

explicacion: |
  Verdadero. Una rotación alta significa que el inventario se renueva frecuentemente, lo que suele ser un signo de buena gestión y demanda.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["estructura", "riesgo"]

variables:
  ratio: uno_de([0.3, 0.4, 0.5, 0.6, 0.7])

respuesta: falso
tipo: vf

enunciado: "Un ratio de endeudamiento del {ratio} se considera generalmente de muy bajo riesgo financiero para cualquier tipo de empresa."

explicacion: |
  Falso. Un ratio de {ratio} ({ratio*100}%) indica que el 40-70% de los activos está financiado con deuda, lo que representa un nivel de riesgo moderado a alto, dependiendo del sector.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["rentabilidad", "interpretacion"]

variables:
  margen: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un margen neto del {margen*100}% significa que por cada peso vendido, la empresa se queda con {redondear(margen*100, 1)} centavos de ganancia después de todos los gastos."

explicacion: |
  Verdadero. El margen neto refleja la eficiencia global de la empresa en la conversión de ventas en ganancias.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["estructura", "riesgo"]

variables:
  ratio: uno_de([0.5, 0.8, 1.2, 1.5, 2.0])

respuesta: falso
tipo: vf

enunciado: "Un ratio Deuda/Patrimonio de {ratio} indica que la empresa está financiada principalmente con recursos propios (patrimonio)."

explicacion: |
  Falso. Si el ratio es mayor a 1 (como {ratio}), significa que la deuda es mayor que el patrimonio, por lo que la financiación es principalmente ajena.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["rentabilidad", "interpretacion"]

variables:
  margen: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un margen operativo del {margen*100}% indica la eficiencia de la empresa en la gestión de sus costos y gastos operativos antes de impuestos e intereses."

explicacion: |
  Verdadero. El margen operativo refleja la rentabilidad del negocio principal, excluyendo efectos financieros y tributarios.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rentabilidad", "interpretacion"]

variables:
  roe: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un ROE del {roe*100}% indica que por cada peso invertido por los accionistas, la empresa generó {redondear(roe*100, 1)} centavos de ganancia."

explicacion: |
  Verdadero. El ROE es una medida clave de la rentabilidad desde la perspectiva del accionista.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "interpretacion"]

variables:
  rotacion: uno_de([0.5, 1.0, 1.5, 2.0, 3.0])

respuesta: verdadero
tipo: vf

enunciado: "Una rotación de activo total de {rotacion} indica que la empresa genera {rotacion} pesos de ventas por cada peso de activo que posee."

explicacion: |
  Verdadero. Este ratio refleja la eficiencia en el uso de los activos para generar ingresos.
```

## Sección: division-formal-microeconomia-macroeconomia (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["interdependencia"]

respuesta: falso
tipo: vf

enunciado: "La microeconomía y la macroeconomía son mundos completamente separados que no se influyen mutuamente."

explicacion: |
  Falso. Ambas son lentes diferentes de la misma realidad y están interconectadas. Las decisiones micro afectan a la macro y viceversa.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["interdependencia", "politica-monetaria"]

variables:
  decision_macro: "aumento de tasas de interés"
  efecto_micro: "encarecimiento de préstamos"

respuesta: verdadero
tipo: vf

enunciado: "Una decisión macroeconómica como el aumento de tasas de interés por parte del Banco Central afecta directamente el costo de oportunidad de ahorrar vs consumir para las familias."

explicacion: |
  Correcto. La política macro cambia los incentivos y costos para los agentes microeconómicos.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["complementariedad"]

respuesta: verdadero
tipo: vf

enunciado: "Las decisiones de millones de individuos (micro) terminan definiendo los grandes indicadores nacionales (macro)."

explicacion: |
  Verdadero. La macroeconomía es la suma agregada de comportamientos microeconómicos.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["perspectiva"]

respuesta: verdadero
tipo: vf

enunciado: "La micro y la macroeconomía son lentes diferentes para observar la misma realidad económica."

explicacion: |
  Verdadero. No son mundos separados, sino perspectivas complementarias.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["interdependencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si el Banco Central sube las tasas, el costo de oportunidad de consumir hoy aumenta para las familias."

explicacion: |
  Correcto. Ahorrar se vuelve más atractivo (mayor retorno) y consumir más caro (crédito costoso).
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["ejemplo-clasico"]

respuesta: verdadero
tipo: vf

enunciado: "Explicar por qué sube el precio del pan en una panadería específica es un problema microeconómico."

explicacion: |
  Sí, porque se refiere a un mercado y agente específico, no al nivel general de precios.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["costo-oportunidad", "macro"]

variables:
  ejemplo: "política monetaria"

respuesta: falso

tipo: vf

enunciado: "El costo de oportunidad es un concepto exclusivo de la microeconomía y no aplica a la macroeconomía."

explicacion: |
  El costo de oportunidad es fundamental en ambas ramas; la macro también evalúa renuncias al tomar políticas.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["interdependencia", "politica-monetaria"]

variables:
  decision_macro: "aumento de tasas de interés"
  efecto_micro: uno_de(["mayor costo de endeudamiento para familias", "disminución del ahorro", "aumento del consumo inmediato"])

respuesta: "mayor costo de endeudamiento para familias"
tipo: mc

opciones_explicitas: ["mayor costo de endeudamiento para familias", "disminución del ahorro", "aumento del consumo inmediato", "reducción de impuestos"]

enunciado: "Si el Banco Central toma una decisión macroeconómica de {decision_macro}, ¿cuál es un efecto directo en el comportamiento microeconómico de las familias?"

explicacion: |
  Las tasas de interés más altas encarecen los préstamos, afectando directamente la decisión de consumo o ahorro de las familias.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["costo-oportunidad", "micro"]

variables:
  recurso: "tiempo"
  alternativa: uno_de(["estudiar", "trabajar", "descansar"])

respuesta: "la mejor alternativa no elegida"
tipo: completar

enunciado: "El costo de oportunidad de dedicar {recurso} a {alternativa} es:"

explicacion: |
  El costo de oportunidad se define como el valor de la mejor alternativa a la que se renuncia al tomar una decisión.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["interdependencia", "agregacion"]

variables:
  decision_micro: "reducir la producción"
  resultado_macro: uno_de(["caída del PBI agregado", "aumento de la inflación", "devaluación del peso"])

respuesta: "caída del PBI agregado"
tipo: mc

opciones_explicitas: ["caída del PBI agregado", "aumento de la inflación", "devaluación del peso", "reducción del desempleo"]

enunciado: "Si todas las empresas del país toman una decisión microeconómica de {decision_micro}, ¿qué consecuencia macroeconómica es probable?"

explicacion: |
  La suma de reducciones de producción individual (micro) se traduce en una contracción de la actividad económica total (macro).
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["conceptos-basicos", "vf"]

variables:
  afirmacion: "micro y macro son mundos completamente separados"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La micro y la macroeconomía son mundos completamente separados e independientes."

explicacion: |
  Falso. Son lentes complementarios para observar la misma realidad; las decisiones de uno afectan al otro.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["microeconomia", "enfoque"]

variables:
  analogia: "los árboles"
  analogia_macro: "el bosque"

respuesta: "los árboles"
tipo: completar

enunciado: "Se dice que la microeconomía estudia '{analogia}', mientras que la macroeconomía estudia '{analogia_macro}'."

explicacion: |
  La analogía clásica: la micro se enfoca en los detalles individuales (árboles) y la macro en el panorama general (bosque).
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["costo-oportunidad", "calculo"]

variables:
  ganancia_trabajo: random(10000, 50000)
  ganancia_estudio: 0

respuesta: ganancia_trabajo
tipo: input

enunciado: "Si un estudiante deja de trabajar para estudiar y pierde una ganancia potencial de ${ganancia_trabajo}, ¿cuál es el costo de oportunidad monetario directo?"

explicacion: |
  El costo de oportunidad es el beneficio de la mejor alternativa no elegida (en este caso, el salario dejado de percibir).
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["politica-fiscal", "interdependencia"]

variables:
  politica: "subida de impuestos corporativos"
  efecto_agregado: uno_de(["reducción del consumo agregado", "aumento de la productividad", "disminución de la inflación"])

respuesta: "reducción del consumo agregado"
tipo: mc

opciones_explicitas: ["reducción del consumo agregado", "aumento de la productividad", "disminución de la inflación", "incremento de las exportaciones"]

enunciado: "Una política fiscal macroeconómica de {politica} puede llevar a un efecto microeconómico que, agregado, resulta en:"

explicacion: |
  Al reducirse el ingreso disponible o las ganancias de las empresas, el consumo y la inversión individuales bajan, afectando el agregado.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["conceptos-basicos", "escasez"]

variables:
  concepto: "recursos escasos"
  necesidad: "necesidades ilimitadas"

respuesta: "escasa"
tipo: completar

enunciado: "La economía estudia cómo administrar {concepto} para satisfacer {necesidad}."

explicacion: |
  La definición fundamental de la economía gira en torno a la escasez de recursos frente a deseos ilimitados.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["conceptos-basicos", "vf"]

variables:
  lente: "macroeconomía"
  objeto: "el comportamiento de una familia"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: El lente de la {lente} es el adecuado para analizar el comportamiento específico de una familia."

explicacion: |
  Falso. El comportamiento individual de una familia es objeto de estudio de la microeconomía.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["politica-monetaria", "costo-oportunidad"]

variables:
  cambio_macro: "aumento de tasas de interés"
  cambio_costo: "el costo de oportunidad de gastar"
  direccion: uno_de(["aumenta", "disminuye", "se mantiene"])

respuesta: "aumenta"
tipo: mc

opciones_explicitas: ["aumenta", "disminuye", "se mantiene", "es irrelevante"]

enunciado: "Si hay un {cambio_macro}, el {cambio_costo} de gastar dinero en lugar de ahorrar:"

explicacion: |
  Con tasas más altas, el interés que se deja de ganar por gastar (costo de oportunidad) es mayor.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["macroeconomia", "definicion", "vf"]

variables:
  definicion: "estudio de unidades individuales"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La macroeconomía se define como el {definicion}."

explicacion: |
  Falso. Eso es la microeconomía. La macro estudia el conjunto.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["microeconomia", "definicion", "vf"]

variables:
  definicion: "estudio de unidades individuales"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La microeconomía se define como el {definicion}."

explicacion: |
  Verdadero. Se enfoca en familias, trabajadores y empresas.
```

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["costo-oportunidad", "vf"]

variables:
  concepto: "costo de oportunidad"
  definicion: "lo que se gana al elegir una opción"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: El {concepto} es {definicion}."

explicacion: |
  Falso. Es lo que se RENUNCIA (pierde) al elegir una opción.
```

## Sección: oferta-y-demanda (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

enunciado: "Según la ley de la demanda, ¿qué pasa con la cantidad demandada cuando sube el precio de un bien?"
tipo: mc
opciones_explicitas:
  - "Baja"
  - "Sube"
  - "No cambia nunca"
respuesta: "Baja"

explicacion: |
  A mayor precio, menos gente está dispuesta a comprar esa cantidad.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

enunciado: "Según la ley de la oferta, ¿qué pasa con la cantidad ofrecida cuando sube el precio de un bien?"
tipo: mc
opciones_explicitas:
  - "Sube"
  - "Baja"
  - "No cambia nunca"
respuesta: "Sube"

explicacion: |
  A mayor precio, a los vendedores les conviene más producir y
  vender.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

enunciado: "¿Qué es el precio de equilibrio?"
tipo: mc
opciones_explicitas:
  - "El precio donde la cantidad demandada es igual a la cantidad ofrecida"
  - "El precio más alto que alguien pagaría por un bien"
  - "El precio fijado por el gobierno para todos los bienes"
respuesta: "El precio donde la cantidad demandada es igual a la cantidad ofrecida"

explicacion: |
  Es el punto donde las dos curvas (oferta y demanda) se cruzan.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de la demanda dice que, en general, cuando el precio de un bien sube, la cantidad demandada baja."

explicacion: |
  Es la relación inversa entre precio y cantidad demandada.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de la oferta dice que, en general, cuando el precio de un bien sube, la cantidad ofrecida también sube."

explicacion: |
  Es la relación directa entre precio y cantidad ofrecida.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "Si el precio de un bien está POR ENCIMA de su precio de equilibrio, ¿qué ocurre?"
tipo: mc
opciones_explicitas:
  - "Exceso de oferta: sobra mercadería sin vender"
  - "Exceso de demanda: falta mercadería"
  - "El mercado se vacía exactamente"
respuesta: "Exceso de oferta: sobra mercadería sin vender"

explicacion: |
  A ese precio los vendedores quieren ofrecer más de lo que los
  compradores quieren llevarse.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "Si el precio de un bien está POR DEBAJO de su precio de equilibrio, ¿qué ocurre?"
tipo: mc
opciones_explicitas:
  - "Exceso de demanda: falta mercadería"
  - "Exceso de oferta: sobra mercadería"
  - "El mercado se vacía exactamente"
respuesta: "Exceso de demanda: falta mercadería"

explicacion: |
  A ese precio los compradores quieren llevarse más de lo que los
  vendedores quieren ofrecer.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "problema"]

enunciado: "Una tienda de ropa liquida la colección de invierno porque quedó mucho stock sin vender. ¿Qué situación describe mejor esto?"
tipo: mc
opciones_explicitas:
  - "Exceso de oferta al precio original"
  - "Exceso de demanda al precio original"
  - "El precio original ya era el de equilibrio"
respuesta: "Exceso de oferta al precio original"

explicacion: |
  Si sobró stock sin vender, es porque a ese precio se ofrecía más de
  lo que se demandaba.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "problema"]

enunciado: "Las entradas de un recital, a precio fijo, se agotan en minutos y queda mucha gente sin poder comprar. ¿Qué situación describe mejor esto?"
tipo: mc
opciones_explicitas:
  - "Exceso de demanda al precio fijado"
  - "Exceso de oferta al precio fijado"
  - "El precio fijado ya era el de equilibrio"
respuesta: "Exceso de demanda al precio fijado"

explicacion: |
  Si mucha gente se queda sin comprar, es porque a ese precio se
  demanda más de lo que se ofrece.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "vocabulario"]

enunciado: "Si SÓLO cambia el precio de un bien (nada más), y con eso cambia la cantidad demandada, ¿cómo se describe ese cambio?"
tipo: mc
opciones_explicitas:
  - "Un movimiento a lo largo de la misma curva de demanda"
  - "Un desplazamiento de toda la curva de demanda"
  - "Ninguno de los dos: no hay cambio real"
respuesta: "Un movimiento a lo largo de la misma curva de demanda"

explicacion: |
  La curva no se mueve: sólo cambia el punto sobre ella, siguiendo la
  misma ley.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "vocabulario"]

enunciado: "Una sequía reduce la cosecha disponible de un cultivo, y eso mueve el propio precio de equilibrio hacia arriba, incluso antes de que cambie ningún otro precio. ¿Cómo se describe este efecto?"
tipo: mc
opciones_explicitas:
  - "Un desplazamiento de la curva de oferta"
  - "Un movimiento a lo largo de la curva de oferta"
  - "No tiene relación con oferta y demanda"
respuesta: "Un desplazamiento de la curva de oferta"

explicacion: |
  Cambió algo distinto del precio (la cantidad disponible para
  cosechar): eso desplaza toda la curva, no sólo mueve un punto sobre
  ella.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "calculo"]

variables:
  precio_eq: random(10, 40)
  cantidad_eq: random(100, 400)
  pendiente_demanda: random(2, 8)
  ordenada_demanda: cantidad_eq + pendiente_demanda * precio_eq
  precio_prueba: precio_eq - random(1, 5)

respuesta: ordenada_demanda - pendiente_demanda * precio_prueba
tipo: input
tolerancia_abs: 0

enunciado: "La cantidad demandada de un bien sigue esta fórmula: Qd = {ordenada_demanda} - {pendiente_demanda} × Precio. Si el precio es ${precio_prueba}, ¿cuál es la cantidad demandada?"

explicacion: |
  Se reemplaza el precio en la fórmula y se calcula Qd directo.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "calculo"]

variables:
  precio_eq: random(10, 40)
  cantidad_eq: random(100, 400)
  pendiente_oferta: random(2, 8)
  ordenada_oferta: cantidad_eq - pendiente_oferta * precio_eq
  precio_prueba: precio_eq + random(1, 5)

respuesta: ordenada_oferta + pendiente_oferta * precio_prueba
tipo: input
tolerancia_abs: 0

enunciado: "La cantidad ofrecida de un bien sigue esta fórmula: Qs = {ordenada_oferta} + {pendiente_oferta} × Precio. Si el precio es ${precio_prueba}, ¿cuál es la cantidad ofrecida?"

explicacion: |
  Se reemplaza el precio en la fórmula y se calcula Qs directo.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "calculo"]

variables:
  precio_eq: random(10, 40)
  cantidad_eq: random(100, 400)
  pendiente_demanda: random(2, 8)
  pendiente_oferta: random(2, 8)
  ordenada_demanda: cantidad_eq + pendiente_demanda * precio_eq
  ordenada_oferta: cantidad_eq - pendiente_oferta * precio_eq
  qd: ordenada_demanda - pendiente_demanda * precio_eq
  qs: ordenada_oferta + pendiente_oferta * precio_eq

respuesta: (qd == qs)
tipo: vf

enunciado: "Con Qd = {ordenada_demanda} - {pendiente_demanda} × Precio y Qs = {ordenada_oferta} + {pendiente_oferta} × Precio, al precio ${precio_eq}: ¿es correcto decir que la cantidad demandada es igual a la ofrecida (o sea, que ese es el precio de equilibrio)?"

explicacion: |
  Se evalúan las dos fórmulas al mismo precio y se comparan los
  resultados.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "calculo"]

variables:
  qd: random(100, 300)
  qs: qd + random(20, 80)

respuesta: (qs > qd)
tipo: vf

enunciado: "A un precio determinado, la cantidad demandada es {qd} unidades y la cantidad ofrecida es {qs} unidades. ¿Es correcto decir que hay exceso de oferta a ese precio?"

explicacion: |
  Se ofrece más de lo que se demanda: exceso de oferta.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "calculo"]

variables:
  qs: random(100, 300)
  qd: qs + random(20, 80)

respuesta: (qd > qs)
tipo: vf

enunciado: "A un precio determinado, la cantidad ofrecida es {qs} unidades y la cantidad demandada es {qd} unidades. ¿Es correcto decir que hay exceso de demanda a ese precio?"

explicacion: |
  Se demanda más de lo que se ofrece: exceso de demanda.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "En un mercado libre, si hay exceso de oferta (sobra mercadería), ¿qué tiende a pasar con el precio?"
tipo: mc
opciones_explicitas:
  - "Tiende a bajar, para vender lo que sobra"
  - "Tiende a subir, para compensar la pérdida"
  - "Se queda fijo siempre"
respuesta: "Tiende a bajar, para vender lo que sobra"

explicacion: |
  Los vendedores bajan el precio para deshacerse del stock excedente,
  acercándose de nuevo al equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "En un mercado libre, si hay exceso de demanda (falta mercadería), ¿qué tiende a pasar con el precio?"
tipo: mc
opciones_explicitas:
  - "Tiende a subir, porque hay compradores dispuestos a pagar más"
  - "Tiende a bajar, para atraer más compradores"
  - "Se queda fijo siempre"
respuesta: "Tiende a subir, porque hay compradores dispuestos a pagar más"

explicacion: |
  Los vendedores suben el precio al ver que hay demanda dispuesta a
  pagarlo, acercándose de nuevo al equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo un mercado libre se ajusta hacia el precio de equilibrio, partiendo de un precio demasiado bajo."
opciones_explicitas:
  - "El mercado se acerca al precio de equilibrio"
  - "Los vendedores suben el precio"
  - "El precio está por debajo del equilibrio"
  - "Se genera exceso de demanda (falta mercadería)"
respuesta_orden: ["El precio está por debajo del equilibrio", "Se genera exceso de demanda (falta mercadería)", "Los vendedores suben el precio", "El mercado se acerca al precio de equilibrio"]

explicacion: |
  El desequilibrio inicial genera la señal (falta de mercadería) que
  empuja el precio de vuelta hacia el equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "Si más gente quiere comprar dólares informales de la que quiere venderlos a un precio dado, el precio del dólar informal tiende a subir."

explicacion: |
  Es exceso de demanda a ese precio: empuja el precio hacia arriba,
  igual que en cualquier otro mercado.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado"]

variables:
  cantidad_eq: random(100, 400)

tipo: completar
enunciado: "En el precio de equilibrio, la cantidad demandada es igual a la cantidad ___ (misma palabra que describe lo que ponen a la venta los vendedores)."
respuestas_validas:
  - "ofrecida"
  - "ofertada"

explicacion: |
  Es la definición misma de precio de equilibrio: demanda = oferta.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La oferta y la demanda son dos fuerzas que reaccionan al precio en sentidos opuestos, y el precio de equilibrio es el punto exacto donde ambas coinciden."

explicacion: |
  Es la idea central de todo el tema.
```

