# Examen jefe — [PENDIENTE #777]

> Logro #777. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **113 preguntas totales** en 5/5 secciones.

---

## Sección: tipos-de-organizaciones (24 preguntas)

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  num_personas: random(5, 20)

respuesta: "agrupamiento"
tipo: completar

enunciado: "Una organización se define como un {num_personas} o más personas estructuradas con un propósito común."

explicacion: |
  Las organizaciones surgen porque es difícil satisfacer necesidades individuales por separado. Requieren estructura y objetivos compartidos.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["factores_produccion", "empresa"]

variables:
  factor1: "trabajo"
  factor2: "capital"
  factor3: "tierra"

respuesta: "trabajo, capital y tierra"
tipo: completar

enunciado: "Para crear bienes o servicios, la empresa combina factores como el {factor1}, el {factor2} y la {factor3}."

explicacion: |
  La empresa transforma estos tres factores de producción para generar valor económico.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  n_personas: random(5, 20)

respuesta: "un grupo de personas estructuradas con un propósito común"
tipo: completar

enunciado: "Según la teoría, una organización se define como {n_personas} o más personas agrupadas para:"

explicacion: |
  Las organizaciones surgen porque rara vez podemos satisfacer todas nuestras necesidades individualmente. Se trata de un conjunto de personas estructuradas con un propósito común para trabajar en conjunto y compartir recursos.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["factores", "empresa"]

variables:
  f1: "trabajo"
  f2: "capital"
  f3: "tierra"

respuesta: "trabajo, capital y tierra"
tipo: completar

enunciado: "Para crear bienes o prestar servicios, la empresa combina los factores de producción: {f1}, {f2} y {f3}."

explicacion: |
  La empresa combina tres factores clave de producción: el trabajo (mano de obra), el capital (dinero, maquinaria) y la tierra (recursos naturales) para generar productos o servicios.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["riesgo", "propietarios"]

variables:
  resultado: uno_de(["ganancia", "pérdida"])

respuesta: "propietarios"
tipo: completar

enunciado: "En una empresa, si el resultado es una {resultado}, el riesgo y la recompensa recaen directamente en los:"

explicacion: |
  Lo que distingue a la empresa es que el riesgo y la recompensa (ganancias o pérdidas) recaen directamente en sus propietarios o accionistas, no en el Estado ni en los socios de una cooperativa.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["estado", "bienestar"]

variables:
  fin: "bienestar general de la sociedad"

respuesta: "bienestar general de la sociedad"
tipo: completar

enunciado: "La administración pública tiene como fin el:"

explicacion: |
  Mientras la empresa busca ganancias, la administración pública (gestionada por el Estado) tiene como fin el bienestar general de la sociedad, proveiendo servicios esenciales.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["financiamiento", "impuestos"]

variables:
  fuente: "impuestos"

respuesta: "impuestos"
tipo: completar

enunciado: "Las organizaciones de la administración pública se financian principalmente a través de los {fuente} que pagan los ciudadanos."

explicacion: |
  El Estado financia sus organizaciones (hospitales, escuelas, policía) principalmente mediante los impuestos que recauda de los ciudadanos, ya que no buscan generar lucro.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["pyme", "economia_argentina"]

variables:
  rol: "corazón de la economía argentina"

respuesta: "corazón de la economía argentina"
tipo: completar

enunciado: "Las pequeñas y medianas empresas (PyMEs) son consideradas el {rol}, ofreciendo empleo local y productos específicos."

explicacion: |
  En la economía argentina, las PyMEs son fundamentales. Aunque existen grandes corporaciones, las PyMEs constituyen el corazón de la economía al ofrecer empleo local y productos específicos.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["eficiencia", "competencia"]

variables:
  clave: "eficiencia"

respuesta: "eficiencia"
tipo: completar

enunciado: "La {clave} es la clave de la empresa: debe producir de la mejor manera posible para ofrecer precios competitivos y seguir siendo rentable."

explicacion: |
  Para sobrevivir y ser rentable, la empresa debe basarse en la eficiencia. Debe producir de la mejor manera posible para ofrecer precios competitivos en el mercado.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["ong", "sin_animo_de_lucro"]

variables:
  fin: "ayudar a la comunidad sin ánimo de lucro"

respuesta: "ayudar a la comunidad sin ánimo de lucro"
tipo: completar

enunciado: "Las organizaciones no gubernamentales (ONG) existen para:"

explicacion: |
  Las ONG son organizaciones que buscan ayudar a la comunidad sin ánimo de lucro. Su objetivo es social o benéfico, no económico.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["ejemplo", "servicios_publicos"]

variables:
  gestion: "administración pública"

respuesta: "administración pública"
tipo: completar

enunciado: "Para entender cómo se financian los hospitales públicos, debemos mirar a la {gestion}, que provee servicios esenciales."

explicacion: |
  Los hospitales públicos son un ejemplo de servicios provistos por la administración pública. Su financiamiento proviene de impuestos, no de ventas al consumidor final con fin de lucro.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "avanzado"
  tags: ["ejemplo", "problemas_economicos"]

variables:
  razon: "lógica diferente"

respuesta: "lógica diferente"
tipo: completar

enunciado: "Algunos clubes deportivos tienen problemas económicos mientras otros prosperan debido a que tienen una {razon} para generar riqueza o distribuir bienes."

explicacion: |
  La diversidad en los tipos de organizaciones (clubes, empresas, ONG) implica que cada una tiene una lógica diferente para generar riqueza o distribuir bienes, lo que explica sus distintos resultados económicos.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["clasificacion", "sector_privado"]

variables:
  sector: "sector privado"

respuesta: "sector privado"
tipo: completar

enunciado: "La empresa es la organización más común en el {sector}."

explicacion: |
  La empresa pertenece al sector privado. Es la unidad básica de la economía de mercado, dedicada a la producción de bienes y servicios con fines de lucro.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["riesgo", "propietarios"]

variables:
  quien: "propietarios o accionistas"

respuesta: "propietarios o accionistas"
tipo: completar

enunciado: "En una empresa, si fracasa, las pérdidas las asumen los {quien}."

explicacion: |
  Una característica distintiva de la empresa es que los propietarios o accionistas asumen personalmente las pérdidas si la empresa fracasa, a diferencia de otros tipos de organizaciones.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["bien_publico", "estado"]

variables:
  quien: "el Estado"

respuesta: "el Estado"
tipo: completar

enunciado: "Los bienes y servicios públicos esenciales son provistos por {quien}."

explicacion: |
  El Estado (a través de la administración pública) es responsable de proveer bienes y servicios públicos esenciales que el mercado por sí solo no proveería eficientemente.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["clasificacion", "fin"]

variables:
  criterio: "su fin principal"

respuesta: "su fin principal"
tipo: completar

enunciado: "Las organizaciones se pueden clasificar según {criterio}."

explicacion: |
  Una de las formas principales de clasificar las organizaciones es según su fin principal: generar ganancias, ayudar a la comunidad o proveer servicios públicos.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["eficiencia", "precio"]

variables:
  objetivo: "precios competitivos"

respuesta: "precios competitivos"
tipo: completar

enunciado: "La eficiencia permite a la empresa ofrecer {objetivo} y seguir siendo rentable."

explicacion: |
  La eficiencia productiva es crucial para que la empresa pueda ofrecer precios competitivos en el mercado, lo cual es necesario para mantenerse rentable.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["ong", "objetivo"]

variables:
  objetivo: "ayudar a la comunidad"

respuesta: "ayudar a la comunidad"
tipo: completar

enunciado: "El objetivo de las ONG es {objetivo} sin ánimo de lucro."

explicacion: |
  Las organizaciones no gubernamentales (ONG) tienen como objetivo principal ayudar a la comunidad, operando sin fines de lucro.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["mercado", "sociedad"]

variables:
  concepto: "sociedad moderna"

respuesta: "sociedad moderna"

enunciado: "La diversidad de tipos de organizaciones permite que funcione la {concepto}."

explicacion: |
  La existencia de diferentes tipos de organizaciones (empresas, estado, ONG) con lógicas distintas es lo que permite que funcione la sociedad moderna.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["riesgo", "recompensa"]

variables:
  quien: "propietarios"

respuesta: "propietarios"

enunciado: "En la empresa, el riesgo y la recompensa recaen directamente en los {quien}."

explicacion: |
  Una característica clave de la empresa es que los propietarios (o accionistas) asumen directamente tanto el riesgo de pérdida como la recompensa de ganancia.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["financiamiento", "estado"]

variables:
  fuente: "impuestos"

respuesta: "impuestos"

enunciado: "La administración pública se financia principalmente a través de los {fuente}."

explicacion: |
  El Estado financia sus operaciones y servicios públicos principalmente mediante la recaudación de impuestos de los ciudadanos.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "intermedio"
  tags: ["pyme", "empleo"]

variables:
  rol: "corazón de la economía argentina"

respuesta: "corazón de la economía argentina"

enunciado: "Las PyMEs son consideradas el {rol} porque ofrecen empleo local."

explicacion: |
  Las PyMEs son el corazón de la economía argentina debido a su capacidad para ofrecer empleo local y productos específicos, diferenciándose de las grandes corporaciones.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "basico"
  tags: ["comparacion", "fin"]

respuesta: "falso"

enunciado: "Verdadero o Falso: Todas las organizaciones buscan lo mismo y lo hacen de la misma manera."

explicacion: |
  Falso. Las organizaciones no todas buscan lo mismo ni lo hacen de la misma manera. Algunas buscan ganancias, otras bienestar social, y otras servicios públicos.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_organizaciones"
  nivel: "avanzado"
  tags: ["resumen", "clasificacion"]

variables:
  tipo1: "empresa"
  tipo2: "administración pública"
  tipo3: "ONG"

respuesta: "empresa, administración pública y ONG"

enunciado: "Las tres categorías principales de organizaciones mencionadas son: {tipo1}, {tipo2} y {tipo3}."

explicacion: |
  El texto clasifica las organizaciones principalmente en tres tipos: la empresa (sector privado con fin de lucro), la administración pública (Estado con fin social) y las ONG (sin ánimo de lucro).
```

## Sección: deuda-publica-externa (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es la deuda pública externa?"
tipo: mc
opciones_explicitas:
  - "La parte de la deuda de un Estado contraída con acreedores de afuera del país, típicamente en moneda extranjera"
  - "La deuda que un Estado tiene con sus propios bancos comerciales"
  - "El total de impuestos que un país no logró cobrar en un año"
respuesta: "La parte de la deuda de un Estado contraída con acreedores de afuera del país, típicamente en moneda extranjera"

explicacion: |
  Es la definición central del tema, en contraste con la deuda
  interna.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo típico de acreedor de deuda pública externa?"
tipo: mc
opciones_explicitas:
  - "El Fondo Monetario Internacional (FMI)"
  - "Un fondo de pensión que sólo invierte en bonos del propio país"
  - "Un banco comercial local, exclusivamente"
respuesta: "El Fondo Monetario Internacional (FMI)"

explicacion: |
  Es uno de los acreedores externos habituales mencionados en la
  teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Por qué la moneda en la que está denominada la deuda externa es tan relevante?"
tipo: mc
opciones_explicitas:
  - "Porque el Estado no puede emitir esa moneda extranjera para pagarla, a diferencia de lo que puede intentar con deuda en moneda propia"
  - "Porque la moneda extranjera no tiene ningún valor real"
  - "En realidad no tiene ninguna relevancia especial"
respuesta: "Porque el Estado no puede emitir esa moneda extranjera para pagarla, a diferencia de lo que puede intentar con deuda en moneda propia"

explicacion: |
  Es la diferencia estructural central frente a la deuda interna.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿De qué formas puede un país conseguir la moneda extranjera necesaria para pagar deuda externa?"
tipo: mc
opciones_explicitas:
  - "Usando reservas, generando superávit comercial, o pidiendo un préstamo nuevo para pagar el vencimiento anterior"
  - "Emitiendo esa moneda extranjera directamente con su propio banco central"
  - "No existe ninguna forma de conseguir moneda extranjera"
respuesta: "Usando reservas, generando superávit comercial, o pidiendo un préstamo nuevo para pagar el vencimiento anterior"

explicacion: |
  Son las tres vías mencionadas en la teoría, todas conectadas con
  temas anteriores de esta sub-rama.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "Si la moneda local se devalúa, ¿qué pasa con el costo (medido en moneda local) de pagar una deuda externa en dólares?"
tipo: mc
opciones_explicitas:
  - "Aumenta: hace falta más moneda local para juntar la misma cantidad de dólares que antes"
  - "Disminuye: hace falta menos moneda local para pagar la misma deuda"
  - "No cambia en absoluto"
respuesta: "Aumenta: hace falta más moneda local para juntar la misma cantidad de dólares que antes"

explicacion: |
  Es la conexión directa con `devaluacion/`: la deuda externa es
  sensible al tipo de cambio.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda externa en moneda extranjera es más sensible a los movimientos del tipo de cambio que la deuda interna denominada en moneda propia."

explicacion: |
  Es la diferencia clave entre los dos tipos de deuda pública.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cuál es el riesgo específico central de la deuda externa?"
tipo: mc
opciones_explicitas:
  - "Que el país necesite conseguir suficiente moneda extranjera al vencimiento, sin controlar directamente esa moneda"
  - "Que la deuda externa nunca genera intereses"
  - "Que sólo puede pagarse en la moneda del propio país"
respuesta: "Que el país necesite conseguir suficiente moneda extranjera al vencimiento, sin controlar directamente esa moneda"

explicacion: |
  Es el riesgo estructural que distingue a la deuda externa de la
  interna.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "basico"
  tags: ["deuda_publica", "problema"]

enunciado: "Un país recibe un préstamo del FMI, en dólares. ¿Qué tipo de deuda es esta?"
tipo: mc
opciones_explicitas:
  - "Deuda pública externa"
  - "Deuda pública interna"
  - "No es deuda: es una donación"
respuesta: "Deuda pública externa"

explicacion: |
  Acreedor de afuera, en moneda extranjera: es exactamente la
  definición de deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un bono emitido \"bajo ley de Nueva York\", vendido a inversores extranjeros en dólares, es un ejemplo real de deuda pública externa."

explicacion: |
  Es el ejemplo concreto citado en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "problema"]

enunciado: "Una noticia dice \"el país tiene vencimientos de deuda externa por U$S 2.000 millones el año que viene\". ¿Qué está informando esa cifra?"
tipo: mc
opciones_explicitas:
  - "Cuánta moneda extranjera necesita conseguir el país en ese plazo para cumplir sus pagos"
  - "Cuánto va a recaudar el país en impuestos ese año"
  - "El tamaño total del PBI del país"
respuesta: "Cuánta moneda extranjera necesita conseguir el país en ese plazo para cumplir sus pagos"

explicacion: |
  Es la lectura directa de un vencimiento de deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "calculo"]

variables:
  capital_usd: random(1, 20) * 100
  tasa_pct: uno_de([4, 5, 8])
  anios: uno_de([1, 2])

respuesta: capital_usd * (1 + tasa_pct / 100) ^ anios
tipo: input
tolerancia_abs: 1

enunciado: "Un país toma un préstamo externo de U$S {capital_usd} millones, a una tasa anual del {tasa_pct}%, a devolver en {anios} año(s), con interés compuesto anual. ¿Cuántos millones de dólares tiene que devolver en total?"

explicacion: |
  Misma fórmula de interés compuesto que en `deuda-publica-interna/`,
  ahora en dólares en vez de moneda local.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los inversores privados de otros países que compran bonos de un Estado en moneda extranjera (\"bonistas\") son un tipo habitual de acreedor de deuda externa."

explicacion: |
  Es uno de los tres tipos de acreedores externos mencionados en la
  teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un Estado no puede emitir dólares (u otra moneda extranjera) para pagar su deuda externa: sólo puede emitir su propia moneda local."

explicacion: |
  Es la limitación estructural central que distingue a la deuda
  externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las reservas del banco central son una de las formas con las que un país puede afrontar un vencimiento de deuda externa."

explicacion: |
  Es la conexión directa con `reservas-banco-central/`.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "intermedio"
  tags: ["deuda_publica", "problema"]

enunciado: "Un gobierno le pide un préstamo en euros a otro país europeo. ¿Qué tipo de deuda pública está tomando?"
tipo: mc
opciones_explicitas:
  - "Deuda pública externa"
  - "Deuda pública interna"
  - "No es deuda pública: es deuda privada"
respuesta: "Deuda pública externa"

explicacion: |
  Acreedor de otro país, en moneda extranjera (euros): es deuda
  externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país puede pedir un préstamo externo nuevo específicamente para pagar el vencimiento de un préstamo externo anterior — el mismo mecanismo de rollover, ahora en moneda extranjera."

explicacion: |
  Es la misma lógica de refinanciación ya vista en
  `deuda-publica-interna/`, aplicada a deuda en moneda extranjera.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de lo que puede pasar cuando se acerca un vencimiento grande de deuda externa."
opciones_explicitas:
  - "Si no los consigue, el país queda en riesgo de no poder pagar en la fecha comprometida"
  - "Se acerca la fecha de un vencimiento grande de deuda en dólares"
  - "Si consigue los dólares, paga el vencimiento a tiempo"
  - "El país busca conseguir esos dólares: con reservas, superávit comercial o un préstamo nuevo"
respuesta_orden: ["Se acerca la fecha de un vencimiento grande de deuda en dólares", "El país busca conseguir esos dólares: con reservas, superávit comercial o un préstamo nuevo", "Si consigue los dólares, paga el vencimiento a tiempo", "Si no los consigue, el país queda en riesgo de no poder pagar en la fecha comprometida"]

explicacion: |
  Es la secuencia de riesgo central de la deuda externa, que conecta
  directo con el tema siguiente (`default-deuda/`).
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país con superávit comercial sostenido tiene más facilidad para conseguir la moneda extranjera necesaria para pagar su deuda externa, que uno con déficit comercial persistente."

explicacion: |
  Es la conexión directa con `balanza-comercial/`: más dólares
  entrando por exportaciones, más margen para afrontar deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "basico"
  tags: ["deuda_publica"]

tipo: completar
enunciado: "Completá: a diferencia de la deuda interna, la deuda pública externa está contraída con acreedores de ___ (dentro o fuera) del país."
respuestas_validas:
  - "fuera"
  - "afuera"

explicacion: |
  Es el criterio central que distingue a la deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_externa"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda pública externa está contraída con acreedores de afuera del país, típicamente en moneda extranjera que el Estado no puede emitir por su cuenta, lo que la hace más sensible al tipo de cambio que la deuda interna."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: deuda-publica-interna (20 preguntas)

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cómo hace un Estado para pedir dinero prestado?"
tipo: mc
opciones_explicitas:
  - "Emite títulos de deuda (bonos), que promete pagar con interés en fechas determinadas"
  - "Sólo puede pedir dinero directamente al Fondo Monetario Internacional"
  - "No existe ningún mecanismo para que un Estado se endeude"
respuesta: "Emite títulos de deuda (bonos), que promete pagar con interés en fechas determinadas"

explicacion: |
  Es el mecanismo central de endeudamiento de cualquier Estado.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es la deuda pública interna?"
tipo: mc
opciones_explicitas:
  - "La parte de la deuda de un Estado contraída con acreedores dentro del propio país"
  - "La deuda que un Estado tiene con organismos internacionales exclusivamente"
  - "El total de impuestos que recauda un Estado en un año"
respuesta: "La parte de la deuda de un Estado contraída con acreedores dentro del propio país"

explicacion: |
  Es la definición central del tema.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo típico de acreedor de deuda pública interna?"
tipo: mc
opciones_explicitas:
  - "Un fondo de pensión local que compra bonos del propio país"
  - "Un turista extranjero de visita"
  - "Un organismo internacional exclusivamente"
respuesta: "Un fondo de pensión local que compra bonos del propio país"

explicacion: |
  Es uno de los acreedores internos habituales mencionados en la
  teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda pública reutiliza la misma matemática del interés compuesto ya vista para un crédito personal, sólo que quien pide prestado es un Estado en vez de una familia."

explicacion: |
  Es la conexión directa con `interes-compuesto/`.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es el \"rollover\" de deuda pública?"
tipo: mc
opciones_explicitas:
  - "Emitir un título nuevo para juntar el dinero y pagar un vencimiento anterior, refinanciando en vez de cancelar de una vez"
  - "Cancelar toda la deuda de una sola vez con lo recaudado en un año"
  - "Dejar de pagar la deuda por completo"
respuesta: "Emitir un título nuevo para juntar el dinero y pagar un vencimiento anterior, refinanciando en vez de cancelar de una vez"

explicacion: |
  Es la práctica habitual de la mayoría de los Estados con su deuda.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En la práctica, los Estados rara vez pagan toda su deuda de una sola vez con lo recaudado en un año: lo habitual es refinanciar, estirando el pago en el tiempo."

explicacion: |
  Es la práctica estándar de gestión de deuda pública.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "Si la deuda interna está en la propia moneda del país, ¿qué opción tiene el Estado que no tiene con deuda en moneda extranjera?"
tipo: mc
opciones_explicitas:
  - "En principio, podría pedirle al banco central que emita más moneda para pagarla"
  - "Puede pagarla automáticamente sin ningún costo, sin excepción"
  - "Puede eliminarla por decreto sin ninguna consecuencia"
respuesta: "En principio, podría pedirle al banco central que emita más moneda para pagarla"

explicacion: |
  Es una opción real que sólo existe para deuda en moneda propia.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Emitir moneda sin respaldo en más producción para pagar deuda tiende a generar inflación — no es una salida sin costo."

explicacion: |
  Es la conexión con `pbi-e-inflacion/`: emitir de más presiona los
  precios generales al alza.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un banco central con autonomía respecto del gobierno suele resistirse a financiar el pago de deuda emitiendo moneda sin límite, justamente por el riesgo de inflación que eso implica."

explicacion: |
  Es la conexión con la independencia del banco central vista en
  `reservas-banco-central/`.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "problema"]

enunciado: "Un gobierno emite un bono en su propia moneda y lo vende a bancos e inversores del propio país. ¿Qué tipo de deuda está tomando?"
tipo: mc
opciones_explicitas:
  - "Deuda pública interna"
  - "Deuda pública externa"
  - "No es deuda: es un impuesto nuevo"
respuesta: "Deuda pública interna"

explicacion: |
  Acreedores dentro del país, en moneda local: es exactamente la
  definición de deuda interna.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es un título de deuda (bono) emitido por un Estado?"
tipo: mc
opciones_explicitas:
  - "Una promesa de pago: el Estado se compromete a devolver el capital prestado más un interés en fechas determinadas"
  - "Un impuesto obligatorio que paga toda la población"
  - "Un tipo de moneda extranjera"
respuesta: "Una promesa de pago: el Estado se compromete a devolver el capital prestado más un interés en fechas determinadas"

explicacion: |
  Es la definición básica de un bono estatal.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "calculo"]

variables:
  capital: random(1, 20) * 100000
  tasa_pct: uno_de([5, 10, 20])
  anios: uno_de([1, 2])

respuesta: capital * (1 + tasa_pct / 100) ^ anios
tipo: input
tolerancia_abs: 1

enunciado: "Un Estado emite un bono por ${capital}, a una tasa de interés anual del {tasa_pct}%, a devolver en {anios} año(s), capitalizando el interés cada año. ¿Cuánto tiene que devolver en total?"

explicacion: |
  Es la misma fórmula de interés compuesto ya vista en
  `interes-compuesto/`, aplicada a deuda estatal: Monto = Capital ×
  (1 + tasa)^tiempo.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El propio banco central de un país puede ser, en algunos casos, un acreedor de la deuda pública interna, cuando compra deuda emitida por el Tesoro."

explicacion: |
  Es uno de los acreedores internos mencionados en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "Si la deuda interna está denominada en moneda local, ¿la afecta directamente una devaluación de esa moneda, de la misma forma en que afecta a una deuda en dólares?"
tipo: mc
opciones_explicitas:
  - "No de la misma forma: al estar en moneda propia, el monto adeudado en esa misma moneda no cambia por una devaluación"
  - "Sí, exactamente igual que la deuda externa en dólares"
  - "La devaluación siempre cancela automáticamente la deuda interna"
respuesta: "No de la misma forma: al estar en moneda propia, el monto adeudado en esa misma moneda no cambia por una devaluación"

explicacion: |
  Es una diferencia clave con la deuda externa, que sí se ve afectada
  directo por el tipo de cambio (ver `deuda-publica-externa/`).
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de un rollover de deuda pública."
opciones_explicitas:
  - "La deuda queda refinanciada, estirada en el tiempo"
  - "Vence un título de deuda emitido hace tiempo"
  - "Con lo recaudado del título nuevo, se paga el vencimiento del título viejo"
  - "El Estado emite un título nuevo para juntar el dinero necesario"
respuesta_orden: ["Vence un título de deuda emitido hace tiempo", "El Estado emite un título nuevo para juntar el dinero necesario", "Con lo recaudado del título nuevo, se paga el vencimiento del título viejo", "La deuda queda refinanciada, estirada en el tiempo"]

explicacion: |
  Es la secuencia típica de cómo un Estado refinancia sus
  vencimientos.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la deuda interna en moneda propia tiene la opción de pagarse emitiendo dinero, esa opción tiene el costo real de la inflación — no está exenta de todo riesgo."

explicacion: |
  Es la aclaración explícita de la teoría: no es una salida
  \"gratis\".
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los bancos comerciales del propio país son uno de los tipos de acreedores habituales de la deuda pública interna."

explicacion: |
  Es uno de los ejemplos mencionados en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Cuál es el criterio central que distingue la deuda pública interna de la externa?"
tipo: mc
opciones_explicitas:
  - "Si el acreedor está dentro o fuera del país"
  - "El monto total de la deuda"
  - "La tasa de interés que paga"
respuesta: "Si el acreedor está dentro o fuera del país"

explicacion: |
  Es el criterio central de la distinción entre los dos tipos.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica"]

tipo: completar
enunciado: "Completá: cuando un Estado emite un título nuevo para pagar uno que vence, en vez de cancelarlo con lo recaudado, está haciendo un ___ (nombre en inglés usado para esta práctica)."
respuestas_validas:
  - "rollover"

explicacion: |
  Es el término técnico central del tema.
```

```
metadata:
  materia: "economia"
  tema: "deuda_publica_interna"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda pública interna es la parte de la deuda de un Estado con acreedores dentro del propio país, típicamente en moneda local, y suele refinanciarse en vez de pagarse toda de una vez."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: elementos-de-las-organizaciones (28 preguntas)

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["factores", "naturales", "clasificacion"]

variables:
  recurso: uno_de(["tierra", "agua", "minerales", "energía solar"])

respuesta: recurso
tipo: completar

enunciado: "La {recurso} es un ejemplo clásico de recurso natural porque la naturaleza la provee sin intervención humana directa."

explicacion: |
  Los recursos naturales incluyen la tierra, el agua, los minerales y la energía renovable. Se distinguen de los materiales porque no son fabricados por el hombre.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["capital", "físico", "recursos"]

variables:
  bien: uno_de(["máquinas industriales", "edificios", "herramientas", "inventario"])

respuesta: "capital físico"
tipo: completar

enunciado: "Las {bien} se clasifican como recursos materiales o capital físico, ya que son bienes creados por el hombre para producir otros bienes."

explicacion: |
  El capital físico (o recursos materiales) incluye máquinas, edificios e inventario. A diferencia de los recursos naturales, estos pueden ser acumulados y mejorados mediante inversión.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["capital humano", "talento"]

variables:
  concepto: "capital humano"

respuesta: concepto
tipo: completar

enunciado: "El {concepto} se refiere a las habilidades, conocimientos, salud y experiencia de las personas, no solo a la cantidad de empleados."

explicacion: |
  El capital humano valora la calidad de la fuerza laboral. Es crucial para adaptar tecnologías y mejorar procesos, diferenciándose de la simple cantidad de trabajadores.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["ingresos", "salarios", "distribución"]

variables:
  factor: "mano de obra"

respuesta: "salarios"
tipo: completar

enunciado: "El ingreso que recibe el factor de producción asociado a la {factor} por su trabajo se denomina salarios."

explicacion: |
  Cada factor de producción recibe un ingreso específico: salarios para el trabajo, rentas para la tierra, intereses para el capital y ganancias para el emprendimiento.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["ingresos", "rentas", "tierra"]

variables:
  factor: "recursos naturales"

respuesta: "rentas"
tipo: completar

enunciado: "El ingreso que corresponde al factor {factor} por su disponibilidad y uso se llama rentas."

explicacion: |
  Las rentas son la compensación económica por el uso de la tierra y otros recursos naturales. Su valor depende de la escasez y la productividad del recurso.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["ingresos", "intereses", "capital"]

variables:
  factor: "capital físico"

respuesta: "intereses"
tipo: completar

enunciado: "El ingreso que obtiene el propietario del {factor} por cederlo temporalmente a una empresa se denomina intereses."

explicacion: |
  Los intereses son el retorno por el capital financiero o físico prestado. Reflejan el costo de oportunidad de usar ese capital en producción en lugar de en otros usos.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["ingresos", "ganancias", "emprendimiento"]

variables:
  factor: "emprendimiento"

respuesta: "ganancias"
tipo: completar

enunciado: "El ingreso residual que recibe el factor {factor} por asumir los riesgos de la actividad económica se llama ganancias."

explicacion: |
  Las ganancias son el beneficio que queda después de pagar todos los demás factores (salarios, rentas, intereses). Compensan la incertidumbre y la innovación del emprendedor.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["definición", "factores", "insumos"]

variables:
  termino: "factores de producción"

respuesta: termino
tipo: completar

enunciado: "Los {termino} son los insumos necesarios para crear valor y generar bienes y servicios."

explicacion: |
  Los factores de producción son los recursos (naturales, materiales, humanos) combinados para producir bienes y servicios.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["factores", "naturales", "clasificacion"]

variables:
  recurso: uno_de(["tierra", "agua", "minerales", "viento", "sol"])
  recurso_clase: "recurso natural"

respuesta: "recurso natural"
tipo: completar

enunciado: "La {recurso} es un ejemplo de {recurso_clase} porque proviene directamente de la naturaleza sin intervención humana directa."

explicacion: |
  Los recursos naturales son aquellos proveídos por la naturaleza sin intervención humana directa, como la tierra, el agua o los minerales.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["capital", "diferenciacion"]

variables:
  bien: uno_de(["maquina", "edificio", "herramienta", "inventario"])
  clasificacion: "capital fisico"

respuesta: "capital fisico"
tipo: completar

enunciado: "Las {bien} son bienes creados por el hombre para producir otros bienes, por lo tanto se clasifican como {clasificacion}."

explicacion: |
  Los recursos materiales o capital físico son bienes creados por el hombre (máquinas, edificios) que se utilizan para producir otros bienes.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["capital humano", "definicion"]

variables:
  concepto: "capital humano"
  definicion: "habilidades, conocimientos, salud y experiencia"

respuesta: "capital humano"
tipo: completar

enunciado: "Las {definicion} de las personas que trabajan en una organización se denominan {concepto}."

explicacion: |
  El capital humano se refiere a las habilidades, conocimientos, salud y experiencia de los trabajadores, no solo a su cantidad.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["costos", "valor", "calculos"]

variables:
  tierra: random(10, 50)
  trabajo: random(20, 100)
  capital: random(30, 150)
  total: redondear(tierra + trabajo + capital, 0)

respuesta: total
tipo: input

enunciado: "Si una organización utiliza recursos naturales valorados en {tierra}, capital humano en {trabajo} y capital físico en {capital}, ¿cuál es el valor total de los elementos combinados?"

explicacion: |
  Se suman los valores de los diferentes factores de producción para obtener el costo total de los insumos.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["argentina", "agricultura", "ventaja comparativa"]

variables:
  region: "pampa humeda"
  factor: "recurso natural"

respuesta: "recurso natural"
tipo: completar

enunciado: "La {region} es un {factor} clave para la producción agrícola argentina debido a su fertilidad natural."

explicacion: |
  La pampa húmeda es un recurso natural fundamental que otorga ventaja comparativa a la agricultura argentina.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["conocimiento", "tecnologia", "adaptacion"]

variables:
  ventaja: "adaptar tecnologias"

respuesta: "adaptar tecnologias"
tipo: completar

enunciado: "El capital humano permite a las organizaciones {ventaja} y mejorar los procesos productivos."

explicacion: |
  El capital humano es crucial porque permite adaptar las tecnologías y mejorar la eficiencia de los procesos.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["litio", "recursos naturales", "argentina"]

variables:
  recurso: "litio"
  region: "noroeste"
  uso: "industria tecnologica"

respuesta: "litio"
tipo: completar

enunciado: "Los yacimientos de {recurso} en el {region} son vitales para la {uso} mundial."

explicacion: |
  El litio es un recurso natural estratégico extraído en el noroeste argentino, esencial para la tecnología.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "avanzado"
  tags: ["escasez", "precios", "dinamica de mercado"]

variables:
  condicion: "escasez"
  efecto: "afecta los precios"

respuesta: "afecta los precios"
tipo: completar

enunciado: "La {condicion} de ciertos recursos {efecto} en el mercado."

explicacion: |
  La escasez de recursos influye directamente en los costos y, por ende, en los precios finales de los bienes y servicios.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "basico"
  tags: ["insumos", "definicion"]

variables:
  termino: "factores de produccion"
  definicion: "insumos necesarios para crear valor"

respuesta: "factores de produccion"
tipo: completar

enunciado: "Los {termino} son los {definicion} para crear bienes y servicios."

explicacion: |
  Los factores de producción son los insumos necesarios para generar valor económico.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["ventaja comparativa", "geografia"]

variables:
  factor: "disponibilidad geografica"
  efecto: "influencia directamente"

respuesta: "influencia directamente"
tipo: completar

enunciado: "La {factor} de los recursos naturales {efecto} en la ventaja comparativa de cada región."

explicacion: |
  La ubicación y disponibilidad de recursos naturales definen las ventajas comparativas de las regiones.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["costos", "estructura"]

variables:
  concepto: "estructura de costos"
  utilidad: "entender la dinamica del mercado"

respuesta: "entender la dinamica del mercado"
tipo: completar

enunciado: "Identificar los elementos de producción permite entender la {concepto} y {utilidad}."

explicacion: |
  Separar la producción en categorías claras ayuda a analizar costos y la dinámica del mercado.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["capital humano", "calidad"]

variables:
  aspecto: "calidad"
  contraste: "cantidad"

respuesta: "calidad"
tipo: completar

enunciado: "El capital humano se refiere a la {aspecto} de la formación, no solo a la {contraste} de empleados."

explicacion: |
  El capital humano valora la calidad (habilidades, salud) más que la simple cantidad de trabajadores.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["inventario", "capital fisico"]

variables:
  elemento: "inventario"
  clasificacion: "capital fisico"

respuesta: "capital fisico"
tipo: completar

enunciado: "El {elemento} de productos terminados se considera parte del {clasificacion}."

explicacion: |
  El inventario, junto con máquinas y edificios, forma parte del capital físico o recursos materiales.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "avanzado"
  tags: ["competitividad", "globalizacion"]

variables:
  factor: "comprender esta division"
  resultado: "analizar la eficiencia economica"

respuesta: "analizar la eficiencia economica"
tipo: completar

enunciado: "{factor} es fundamental para {resultado} y la competitividad en un mundo globalizado."

explicacion: |
  Entender la división de factores es clave para analizar la eficiencia y competitividad en la economía global.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "avanzado"
  tags: ["emprendimiento", "ganancia"]

variables:
  factor: "emprendimiento"
  ingreso: "ganancia"

respuesta: "ganancia"
tipo: completar

enunciado: "El factor de producción 'emprendimiento' recibe como ingreso la {ingreso}."

explicacion: |
  El emprendimiento o capacidad empresarial se remuneda con ganancias.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["diferenciacion", "tierra", "maquina"]

variables:
  recurso1: "tierra"
  recurso2: "maquina"
  diferencia: "intervencion humana"

respuesta: "intervencion humana"
tipo: completar

enunciado: "La principal diferencia entre {recurso1} y {recurso2} es el grado de {diferencia} requerida para su obtención."

explicacion: |
  La tierra es un recurso natural (poca intervención), mientras que la máquina es capital físico (alta intervención).
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["capital humano", "salud"]

variables:
  elemento: "salud"
  categoria: "capital humano"

respuesta: "capital humano"
tipo: completar

enunciado: "La salud de los trabajadores es un componente del {categoria}."

explicacion: |
  El capital humano incluye la salud, conocimientos y habilidades de las personas.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "avanzado"
  tags: ["escasez", "valor"]

variables:
  concepto: "escasez"
  efecto: "determina el valor"

respuesta: "determina el valor"
tipo: completar

enunciado: "La {concepto} de los recursos {efecto} en el mercado."

explicacion: |
  La escasez es un principio económico fundamental que determina el valor y precio de los recursos.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "intermedio"
  tags: ["conocimiento", "acumulacion"]

variables:
  recurso: "conocimiento"
  capacidad: "puede ser acumulado"

respuesta: "puede ser acumulado"
tipo: completar

enunciado: "El {recurso} es un activo intangible que {capacidad} con el tiempo y la educación."

explicacion: |
  El conocimiento y el capital humano pueden acumularse y mejorarse mediante la educación y la experiencia.
```

```
metadata:
  materia: "economia"
  tema: "elementos_de_las_organizaciones"
  nivel: "avanzado"
  tags: ["sintesis", "organizacion"]

variables:
  numero_factores: 4
  factores: "naturales, materiales, humanos y conocimiento"

respuesta: "naturales, materiales, humanos y conocimiento"
tipo: completar

enunciado: "Los principales elementos de las organizaciones se dividen en factores {factores}."

explicacion: |
  Los factores de producción se clasifican generalmente en recursos naturales, materiales (capital físico), humanos y conocimiento.
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
  sensibles de esta materia (ver el bloque de corrientes de
  pensamiento económico, `../liberalismo-clasico-y-escuela-austriaca/`
  y afines).
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

