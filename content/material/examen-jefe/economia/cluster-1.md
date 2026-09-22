# Examen jefe — [PENDIENTE #766]

> Logro #766. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **114 preguntas totales** en 5/5 secciones.

---

## Sección: balanza-comercial (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué mide la balanza comercial de un país?"
tipo: mc
opciones_explicitas:
  - "La diferencia entre lo que exporta y lo que importa"
  - "El total de dinero que tiene el banco central"
  - "El PBI total del país"
respuesta: "La diferencia entre lo que exporta y lo que importa"

explicacion: |
  Balanza comercial = Exportaciones - Importaciones.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué es una exportación?"
tipo: mc
opciones_explicitas:
  - "Un bien o servicio producido dentro del país, vendido a compradores de otros países"
  - "Un bien producido en otro país, comprado por residentes locales"
  - "Cualquier producto que se vende dentro del propio país"
respuesta: "Un bien o servicio producido dentro del país, vendido a compradores de otros países"

explicacion: |
  Se produce adentro, se vende afuera.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué es una importación?"
tipo: mc
opciones_explicitas:
  - "Un bien o servicio producido en otro país, comprado por residentes del propio país"
  - "Un bien producido dentro del país, vendido afuera"
  - "Cualquier producto fabricado por una empresa extranjera, sin importar dónde se vende"
respuesta: "Un bien o servicio producido en otro país, comprado por residentes del propio país"

explicacion: |
  Se produce afuera, se compra adentro.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuándo un país tiene superávit comercial?"
tipo: mc
opciones_explicitas:
  - "Cuando sus exportaciones son mayores que sus importaciones"
  - "Cuando sus importaciones son mayores que sus exportaciones"
  - "Cuando su PBI crece más del 3% anual"
respuesta: "Cuando sus exportaciones son mayores que sus importaciones"

explicacion: |
  La balanza da un resultado positivo cuando exporta más de lo que
  importa.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuándo un país tiene déficit comercial?"
tipo: mc
opciones_explicitas:
  - "Cuando sus importaciones son mayores que sus exportaciones"
  - "Cuando sus exportaciones son mayores que sus importaciones"
  - "Cuando su moneda se devalúa"
respuesta: "Cuando sus importaciones son mayores que sus exportaciones"

explicacion: |
  La balanza da un resultado negativo cuando importa más de lo que
  exporta.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "intermedio"
  tags: ["comercio_internacional", "calculo"]

variables:
  exportaciones: random(300, 800) * 1000
  importaciones: random(100, 250) * 1000

respuesta: exportaciones - importaciones
tipo: input
tolerancia_abs: 0

enunciado: "Un país exportó ${exportaciones} millones y le importó ${importaciones} millones en un año. ¿Cuál fue su balanza comercial de ese período?"

explicacion: |
  Balanza = Exportaciones - Importaciones.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "intermedio"
  tags: ["comercio_internacional", "calculo"]

variables:
  exportaciones: random(100, 300) * 1000
  importaciones: random(300, 600) * 1000

respuesta: falso
tipo: vf

enunciado: "Un país exportó ${exportaciones} millones e importó ${importaciones} millones en un año. ¿Es correcto decir que tuvo superávit comercial?"

explicacion: |
  Como importó más de lo que exportó, tuvo déficit, no superávit.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país puede tener déficit comercial por estar importando maquinaria para invertir en su propia producción futura — el número solo, sin contexto, no alcanza para juzgar si es \"bueno\" o \"malo\"."

explicacion: |
  Es la aclaración central del tema: el signo del resultado no dice
  todo por sí solo.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país puede tener superávit comercial simplemente porque atraviesa una recesión que hace caer fuerte sus importaciones — no necesariamente porque su economía esté fuerte."

explicacion: |
  Es el mismo principio de la pregunta anterior, visto desde el otro
  signo: superávit tampoco es automáticamente una buena noticia.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "intermedio"
  tags: ["comercio_internacional", "problema"]

enunciado: "Un país sube los aranceles a los productos importados, para que sea más caro comprarlos desde afuera. ¿Qué busca lograr con esto, en términos de balanza comercial?"
tipo: mc
opciones_explicitas:
  - "Reducir sus importaciones, para mejorar (o achicar el déficit de) su balanza comercial"
  - "Aumentar sus importaciones, para mejorar su balanza comercial"
  - "No tiene ninguna relación con la balanza comercial"
respuesta: "Reducir sus importaciones, para mejorar (o achicar el déficit de) su balanza comercial"

explicacion: |
  Encarecer lo importado busca, justamente, que se compre menos desde
  afuera.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuál es la relación entre la balanza comercial y la balanza de pagos?"
tipo: mc
opciones_explicitas:
  - "La balanza comercial es sólo una parte (bienes y servicios) de un cuadro más amplio, la balanza de pagos, que también incluye inversiones y préstamos"
  - "Son exactamente lo mismo, dos nombres para un mismo concepto"
  - "La balanza de pagos sólo existe para países sin moneda propia"
respuesta: "La balanza comercial es sólo una parte (bienes y servicios) de un cuadro más amplio, la balanza de pagos, que también incluye inversiones y préstamos"

explicacion: |
  La balanza comercial es la pieza más citada, pero no es todo el
  cuadro de las relaciones económicas de un país con el resto del
  mundo.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país que depende de exportar mayormente un solo producto tiene una balanza comercial muy sensible al precio internacional de ese producto puntual."

explicacion: |
  Si ese precio cae, las exportaciones caen con él, afectando directo
  el resultado de la balanza.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuándo se dice que la balanza comercial de un país está \"equilibrada\"?"
tipo: mc
opciones_explicitas:
  - "Cuando exportaciones e importaciones son iguales"
  - "Cuando las exportaciones son el doble de las importaciones"
  - "Cuando no hay ningún comercio internacional"
respuesta: "Cuando exportaciones e importaciones son iguales"

explicacion: |
  Es el caso intermedio entre superávit y déficit.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "calculo"]

variables:
  exportaciones: random(300, 800) * 1000
  balanza: random(-100, 100) * 1000

respuesta: exportaciones - balanza
tipo: input
tolerancia_abs: 0

enunciado: "Un país exportó ${exportaciones} millones en un año, y su balanza comercial de ese período fue de ${balanza} millones. ¿Cuánto importó?"

pasos:
  - "Balanza = Exportaciones - Importaciones"
  - "Importaciones = Exportaciones - Balanza = {exportaciones} - ({balanza})"

explicacion: |
  Se despeja Importaciones de la fórmula de la balanza comercial.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una noticia dice \"récord de exportaciones\" o \"el déficit comercial se amplió\", está hablando directamente del resultado de la balanza comercial."

explicacion: |
  Es el mismo concepto de este tema, en el lenguaje habitual de las
  noticias económicas.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "intermedio"
  tags: ["comercio_internacional", "problema"]

enunciado: "Una empresa local le vende software a clientes de otro país. ¿Cómo se registra esa venta en la balanza comercial del país donde está la empresa?"
tipo: mc
opciones_explicitas:
  - "Como una exportación"
  - "Como una importación"
  - "No se registra: los servicios no cuentan en la balanza comercial"
respuesta: "Como una exportación"

explicacion: |
  Se produjo dentro del país y se vendió a un comprador de otro país:
  es exactamente la definición de exportación (y los servicios sí
  cuentan, no sólo bienes físicos).
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La balanza comercial se mide durante un período determinado (normalmente un año), no como una foto de un instante puntual."

explicacion: |
  Es una medida de flujo (a lo largo de un tiempo), no de stock (en un
  momento puntual).
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de razonamiento sobre un arancel a productos importados."
opciones_explicitas:
  - "Baja la cantidad importada de ese producto"
  - "La balanza comercial mejora (o su déficit se achica), sólo por ese efecto puntual"
  - "El gobierno sube el arancel a un producto importado"
  - "Ese producto se vuelve más caro para los consumidores locales"
respuesta_orden: ["El gobierno sube el arancel a un producto importado", "Ese producto se vuelve más caro para los consumidores locales", "Baja la cantidad importada de ese producto", "La balanza comercial mejora (o su déficit se achica), sólo por ese efecto puntual"]

explicacion: |
  Cada paso es consecuencia del anterior: el arancel encarece, el
  precio más alto reduce la cantidad comprada, y eso mejora el
  resultado de la balanza.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La balanza comercial es la pieza más mencionada en el debate público, pero es sólo una parte del cuadro completo de las relaciones económicas de un país con el resto del mundo (la balanza de pagos)."

explicacion: |
  Es la aclaración de alcance del tema: no se confunde con el cuadro
  completo.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional"]

variables:
  exportaciones: random(300, 800) * 1000
  importaciones: random(100, 250) * 1000
  balanza: exportaciones - importaciones

tipo: completar
enunciado: "Completá: Balanza comercial = {exportaciones} - {importaciones} = ___ (balanza, en millones)."
respuestas_validas:
  - balanza

explicacion: |
  Es la aplicación directa de la fórmula de la balanza comercial.
```

```
metadata:
  materia: "economia"
  tema: "balanza_comercial"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La balanza comercial mide la diferencia entre exportaciones e importaciones de un país, y ni el superávit ni el déficit son, por sí solos, automáticamente buenos o malos."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: blockchain-claves-wallet (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué resuelve una blockchain, sin depender de ningún banco ni autoridad central?"
tipo: mc
opciones_explicitas:
  - "Llevar un registro confiable de transacciones, mantenido de forma coordinada por miles de computadoras repartidas"
  - "Calcular automáticamente el precio de cualquier producto"
  - "Reemplazar completamente la necesidad de tener una clave de acceso"
respuesta: "Llevar un registro confiable de transacciones, mantenido de forma coordinada por miles de computadoras repartidas"

explicacion: |
  Es la idea central: un registro confiable sin autoridad central
  única.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es un \"bloque\" en una blockchain?"
tipo: mc
opciones_explicitas:
  - "Un grupo de transacciones confirmadas en un período de tiempo"
  - "Una sola transacción individual"
  - "El nombre de una wallet"
respuesta: "Un grupo de transacciones confirmadas en un período de tiempo"

explicacion: |
  Cada bloque agrupa varias transacciones a la vez.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Por qué los bloques forman una \"cadena\"?"
tipo: mc
opciones_explicitas:
  - "Porque cada bloque nuevo incluye el hash del bloque anterior, enlazándolo con el que vino antes"
  - "Porque están ordenados alfabéticamente"
  - "Porque cada bloque contiene una copia completa de todos los bloques anteriores"
respuesta: "Porque cada bloque nuevo incluye el hash del bloque anterior, enlazándolo con el que vino antes"

explicacion: |
  El enlace es, literalmente, el hash del bloque previo guardado
  dentro del bloque nuevo.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es un hash?"
tipo: mc
opciones_explicitas:
  - "El resultado de una función matemática que actúa como huella digital única de unos datos"
  - "Una contraseña que elige el usuario"
  - "El nombre de una criptomoneda en particular"
respuesta: "El resultado de una función matemática que actúa como huella digital única de unos datos"

explicacion: |
  Es la pieza que permite detectar si algo cambió: mismos datos,
  mismo hash; datos distintos, hash distinto.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los mismos datos de entrada siempre producen exactamente el mismo hash."

explicacion: |
  Es una propiedad fundamental de las funciones de hash: son
  deterministas.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cambiar un solo carácter de los datos de entrada cambia el hash resultante por completo, no de forma parecida."

explicacion: |
  Es lo que hace que un hash sirva para detectar cualquier alteración,
  por mínima que sea.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Por qué es tan difícil alterar una transacción registrada en un bloque viejo de una blockchain activa?"
tipo: mc
opciones_explicitas:
  - "Porque cambiaría el hash de ese bloque, y habría que recalcular también todos los bloques posteriores en la mayoría de las copias de la red"
  - "Porque está prohibido por una ley específica en todos los países"
  - "Porque cada transacción tiene una contraseña individual distinta"
respuesta: "Porque cambiaría el hash de ese bloque, y habría que recalcular también todos los bloques posteriores en la mayoría de las copias de la red"

explicacion: |
  El encadenamiento de hashes es lo que hace tan costoso alterar el
  pasado.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es la clave privada?"
tipo: mc
opciones_explicitas:
  - "Un número secreto que nunca se comparte, y que prueba que sos el dueño de algo"
  - "Un número que se comparte libremente para recibir fondos"
  - "El nombre de usuario dentro de una wallet"
respuesta: "Un número secreto que nunca se comparte, y que prueba que sos el dueño de algo"

explicacion: |
  Es la mitad SECRETA del par de claves.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es la clave pública?"
tipo: mc
opciones_explicitas:
  - "Una clave generada a partir de la clave privada, que sí se puede compartir para que otros verifiquen firmas"
  - "La misma clave privada, sólo que escrita en otro formato"
  - "Una clave que cambia en cada transacción"
respuesta: "Una clave generada a partir de la clave privada, que sí se puede compartir para que otros verifiquen firmas"

explicacion: |
  Es la mitad PÚBLICA del par: se puede compartir sin comprometer la
  clave privada.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "De la clave privada se puede calcular la clave pública, pero no existe una forma práctica de calcular la clave privada a partir de la pública."

explicacion: |
  Es justamente lo que permite compartir la clave pública sin riesgo:
  la relación no se puede invertir en la práctica.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Para qué sirve firmar una transacción con la clave privada?"
tipo: mc
opciones_explicitas:
  - "Para que cualquier nodo pueda verificar, usando la clave pública, que quien envió la transacción realmente tiene la clave privada correspondiente"
  - "Para ocultar el monto de la transacción a toda la red"
  - "Para reducir el tamaño del bloque"
respuesta: "Para que cualquier nodo pueda verificar, usando la clave pública, que quien envió la transacción realmente tiene la clave privada correspondiente"

explicacion: |
  La verificación se hace con la clave pública, sin que la clave
  privada se revele en ningún momento.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al firmar y verificar una transacción, la clave privada nunca se revela ni se comparte en ningún momento del proceso."

explicacion: |
  Es lo que hace segura a la criptografía asimétrica: se prueba
  posesión sin exponer el secreto.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué guarda realmente una wallet?"
tipo: mc
opciones_explicitas:
  - "Las claves privadas que prueban la propiedad sobre movimientos ya registrados en la blockchain"
  - "Las monedas físicas, como si fuera una caja fuerte"
  - "Una copia completa de toda la blockchain"
respuesta: "Las claves privadas que prueban la propiedad sobre movimientos ya registrados en la blockchain"

explicacion: |
  No "contiene" criptomonedas como objetos: guarda la llave que
  prueba la propiedad sobre lo ya registrado en la cadena.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿De dónde se deriva la \"dirección\" de una wallet, la que se comparte para recibir fondos?"
tipo: mc
opciones_explicitas:
  - "De la clave pública"
  - "De la clave privada, directamente"
  - "Del nombre elegido por el usuario"
respuesta: "De la clave pública"

explicacion: |
  La dirección es una versión más corta y manejable, derivada de la
  clave pública — nunca de la privada.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

enunciado: "Si alguien pierde su clave privada y no guardó ninguna copia de respaldo, ¿qué puede hacer para recuperar el acceso?"
tipo: mc
opciones_explicitas:
  - "Nada: no existe ningún mecanismo de \"recuperar contraseña\", ni siquiera el creador de la blockchain puede restaurar el acceso"
  - "Pedirle al soporte técnico de la blockchain que la resetee"
  - "Esperar a que la red le asigne una clave nueva automáticamente"
respuesta: "Nada: no existe ningún mecanismo de \"recuperar contraseña\", ni siquiera el creador de la blockchain puede restaurar el acceso"

explicacion: |
  Es la contracara directa de no depender de una autoridad central:
  nadie tiene el poder de restaurar el acceso por vos.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "No depender de un banco ni de ninguna autoridad central tiene como contracara que perder la clave privada es, en la práctica, irreversible."

explicacion: |
  Es la misma característica (sin autoridad central) vista desde su
  ventaja y desde su riesgo.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "problema"]

enunciado: "¿Cuál es la diferencia central entre cómo un banco tradicional lleva su registro de cuentas y cómo lo hace una blockchain?"
tipo: mc
opciones_explicitas:
  - "El banco mantiene un registro central único; la blockchain lo mantiene de forma coordinada entre miles de copias distribuidas"
  - "El banco usa hashes y la blockchain no"
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El banco mantiene un registro central único; la blockchain lo mantiene de forma coordinada entre miles de copias distribuidas"

explicacion: |
  Es la diferencia estructural central entre un sistema centralizado y
  uno descentralizado.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "problema"]

enunciado: "Alguien te pide su clave para poder enviarte fondos a su wallet. ¿Qué clave te debería compartir?"
tipo: mc
opciones_explicitas:
  - "Su clave pública (o la dirección derivada de ella)"
  - "Su clave privada"
  - "Ninguna: no hace falta ninguna clave para recibir fondos"
respuesta: "Su clave pública (o la dirección derivada de ella)"

explicacion: |
  La clave privada nunca se comparte, ni siquiera para recibir
  fondos: para eso alcanza con la pública.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo se procesa una transacción en una blockchain."
opciones_explicitas:
  - "La transacción se agrupa junto a otras en un bloque nuevo"
  - "El bloque nuevo incluye el hash del bloque anterior, quedando enlazado a la cadena"
  - "El emisor firma la transacción con su clave privada"
  - "Los nodos de la red verifican la firma con la clave pública del emisor"
respuesta_orden: ["El emisor firma la transacción con su clave privada", "Los nodos de la red verifican la firma con la clave pública del emisor", "La transacción se agrupa junto a otras en un bloque nuevo", "El bloque nuevo incluye el hash del bloque anterior, quedando enlazado a la cadena"]

explicacion: |
  Cada paso depende del anterior: sin firma no hay verificación, sin
  verificación no se agrupa en un bloque válido, y el bloque recién
  se encadena al final.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain"]

tipo: completar
enunciado: "Completá: cada bloque nuevo incluye el ___ (huella digital única) del bloque anterior, formando así la cadena."
respuestas_validas:
  - "hash"

explicacion: |
  Es el mecanismo exacto que enlaza un bloque con el siguiente.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La dirección de una wallet es una versión derivada (más corta) de la clave pública, no la clave pública en sí misma sin ningún procesamiento."

explicacion: |
  Son conceptos relacionados pero distintos: la dirección se calcula
  a partir de la clave pública.
```

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una blockchain usa hashes encadenados para hacer difícil alterar el pasado, y claves pública/privada para probar la propiedad de una transacción sin depender de ningún banco."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: business-model-canvas (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["gestion", "estrategia"]

tipo: mc
opciones_explicitas: ["Un esquema para analizar la viabilidad financiera de una empresa", "Una herramienta visual para describir y diseñar modelos de negocio", "Un software para la gestión de inventarios", "Un método para la contratación de personal"]
respuesta: "Una herramienta visual para describir y diseñar modelos de negocio"

enunciado: "El Business Model Canvas es ___."

explicacion: |
  El Business Model Canvas es una herramienta estratégica que permite visualizar los nueve módulos de un modelo de negocio en un solo lienzo.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["clientes", "segmentacion"]

tipo: vf
respuesta: falso

enunciado: "¿El bloque 'Segmentos de Clientes' se refiere exclusivamente a la lista de nombres de las personas que compran el producto?"

explicacion: |
  Falso. El bloque define los grupos de personas u organizaciones que una empresa pretende alcanzar y servir, caracterizándolos por sus necesidades, comportamientos o atributos.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["propuesta_de_valor", "clientes"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Software de gestión para contadores", "Optimizar el tiempo de cierre contable"], ["Cafetería de especialidad", "Ofrecer un espacio de coworking con café premium"]]

tipo: completar
respuestas_validas:
  - "Optimizar el tiempo de cierre contable"
  - "Ofrecer un espacio de coworking con café premium"
respuesta: escenarios[escenario_idx][1]

enunciado: "Si el segmento de cliente es {escenarios[escenario_idx][0]}, una propuesta de valor coherente sería: ___."

explicacion: |
  La propuesta de valor debe resolver un problema o satisfacer una necesidad específica del segmento de cliente elegido.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["vocabulario"]

tipo: mc
opciones_explicitas: ["Canales", "Presupuesto", "Organigrama", "Plan de Marketing"]
respuesta: "Organigrama"

enunciado: "¿Cuál de los siguientes NO es uno de los 9 bloques fundamentales del Business Model Canvas?"

explicacion: |
  Los 9 bloques son: Segmentos de clientes, Propuesta de valor, Canales, Relación con clientes, Flujos de ingresos, Recursos clave, Actividades clave, Alianzas clave y Estructura de costos.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["metodologia"]

tipo: ordenar
opciones_explicitas: ["Definir Segmentos de Clientes", "Definir Propuesta de Valor", "Definir Canales de Distribución", "Definir Fuentes de Ingresos"]
respuesta_orden: ["Definir Segmentos de Clientes", "Definir Propuesta de Valor", "Definir Canales de Distribución", "Definir Fuentes de Ingresos"]

enunciado: "Para construir un modelo de negocio coherente, se recomienda seguir un orden lógico de pensamiento. Ordena estos pasos desde el más fundamental al siguiente:"

explicacion: |
  Aunque el proceso puede ser iterativo, la lógica fundamental dicta que primero debes saber a quién le vendes (Segmentos), qué problema les resuelves (Propuesta de Valor), cómo les llegas (Canales) y cómo obtienes dinero (Ingresos).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["modelo_de_negocio", "propuesta_de_valor"]

variables:
  caso: uno_de([["Netflix", "Suscripción de streaming de películas y series"], ["Tesla", "Vehículos eléctricos de alto rendimiento y energía sostenible"]])

respuesta: "Propuesta de Valor"
tipo: mc
opciones_explicitas: ["Propuesta de Valor", "Segmentos de Clientes", "Canales", "Relación con Clientes"]

enunciado: "En el modelo de negocio de {caso[0]}, el elemento que describe el beneficio principal que se ofrece al cliente (en este caso, {caso[1]}) corresponde al bloque de: ___"

explicacion: |
  La Propuesta de Valor es el bloque que describe el conjunto de productos y servicios que crean valor para un segmento de clientes específico. En el caso de {caso[0]}, es {caso[1]}.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["segmentos", "clientes"]

respuesta: "B2C"
tipo: mc
opciones_explicitas: ["B2B", "B2C", "C2C", "B2G"]

enunciado: "Si una empresa de software vende sus licencias directamente a consumidores finales a través de una tienda online, ¿qué tipo de segmento de cliente está atacando principalmente?"

explicacion: |
  B2C (Business to Consumer) se refiere a la venta de productos o servicios de una empresa directamente al consumidor final.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["canales", "distribucion"]

respuesta: "Enviar al cliente"
tipo: completar
respuestas_validas:
  - "Enviar al cliente"
pasos:
  - "Paso 1: Crear el producto"
  - "Paso 2: Almacenar stock"
  - "Paso 3: ___"

enunciado: "Para un modelo de negocio basado en productos físicos, el proceso de entrega sigue este orden lógico:"

explicacion: |
  El tercer paso en la cadena de valor de distribución física es el envío o entrega al cliente final.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["costos", "ingresos"]

respuesta: falso
tipo: vf

enunciado: "En el Business Model Canvas, el bloque de 'Estructura de Costos' se refiere exclusivamente a los gastos de marketing y publicidad de la empresa."

explicacion: |
  Falso. La estructura de costos incluye todos los costos incurridos para operar el modelo de negocio, incluyendo costos fijos, variables, economías de escala y costos de adquisición.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "avanzado"
  tags: ["ingresos", "flujos"]

tipo: mc
opciones_explicitas: ["Venta de activos", "Tarifa de uso", "Licencia", "Alquiler"]

respuesta: "Tarifa de uso"

enunciado: "Si una empresa de software cobra por cada hora de uso de su plataforma, el flujo de ingresos se clasifica como: ___"

explicacion: |
  El modelo de 'Tarifa de uso' se basa en el consumo o tiempo de uso del servicio, a diferencia de la 'Venta de activos' donde la propiedad se transfiere permanentemente.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["propuesta_de_valor", "errores_comunes"]

respuesta: "propuesta de valor"
tipo: "completar"
respuestas_validas:
  - "propuesta de valor"

enunciado: "Un error común es confundir el producto o servicio físico con la ___ , la cual debe centrarse en la solución de un problema o la satisfacción de una necesidad del cliente."

explicacion: |
  La propuesta de valor no es el objeto en sí, sino el beneficio o valor que el cliente recibe al usarlo.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["segmentos_de_clientes", "errores_comunes"]

respuesta: verdadero
tipo: "vf"

enunciado: "Si una empresa intenta dirigirse a 'todo el mundo' sin definir características específicas, está cometiendo el error de no definir correctamente sus segmentos de clientes."

explicacion: |
  Intentar ser todo para todos suele diluir la propuesta de valor. La segmentación permite enfocar recursos y mensajes.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["canales", "comunicacion"]

opciones_explicitas: ["Canales", "Relación con clientes"]

respuesta: "Canales"
tipo: "mc"

enunciado: "Muchos emprendedores confunden la comunicación (cómo se enteran de la existencia de la marca) con los ___ (cómo se entrega el producto o servicio al cliente)."

explicacion: |
  Los canales incluyen la distribución, la logística y los puntos de venta, no solo la publicidad.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["flujos_de_ingresos", "errores_comunes"]

respuesta: "monetización"
tipo: "completar"
respuestas_validas:
  - "monetización"

enunciado: "Tener un producto exitoso no garantiza un modelo de negocio viable si no se define claramente la estrategia de ___."

explicacion: |
  El Business Model Canvas requiere entender cómo el valor se transforma en ingresos (suscripción, venta única, freemium, etc.).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "avanzado"
  tags: ["estructura_de_costos", "escalabilidad"]

enunciado: "En el modelo de consultoría tradicional, la estructura de costos suele ser variable y ligada al volumen (horas trabajadas), mientras que en el modelo de software SaaS, la estructura suele ser mayormente fija y escalable."

respuesta: verdadero
tipo: "vf"

explicacion: |
  En el modelo SaaS (Software as a Service), los costos marginales son muy bajos y la estructura es altamente escalable. En la consultoría, el costo principal es el tiempo humano (costo variable/escalabilidad limitada).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["estrategia", "gestion"]

respuesta: "Plan de Negocios"
tipo: completar
respuestas_validas:
  - "Plan de Negocios"

enunciado: "A diferencia del Business Model Canvas, que es una herramienta visual y dinámica para modelar hipótesis, el ___ es un documento detallado y extenso que describe la estrategia operativa y financiera a largo plazo."

explicacion: |
  El Business Model Canvas es una herramienta de síntesis visual (canvas), mientras que el Plan de Negocios es un documento formal y exhaustivo utilizado para buscar financiación o guiar la ejecución detallada.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["propuesta_de_valor", "segmentos"]

variables:
  escenario: uno_de([["Un software de gestión de turnos para peluquerías", "Propuesta de Valor"], ["Un servicio de entrega de comida a domicilio", "Propuesta de Valor"], ["Un gimnasio con entrenamiento personalizado", "Propuesta de Valor"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Segmentos de Cliente", "Propuesta de Valor", "Canales", "Relación con el Cliente"]

enunciado: "En el escenario de '{escenario[0]}', el elemento central que describe el beneficio o solución que se ofrece para resolver un problema específico del cliente es la: ___"

explicacion: |
  La Propuesta de Valor es el conjunto de productos y servicios que crean valor para un segmento de mercado específico, diferenciándose de los Segmentos de Cliente (quiénes son) o los Canales (cómo llegan).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["enfoque", "cliente"]

respuesta: falso

tipo: vf

enunciado: "El Business Model Canvas se centra primordialmente en la estructura de costos y la logística de producción, dejando el análisis de los segmentos de cliente para una etapa posterior del desarrollo del negocio."

explicacion: |
  Falso. El Canvas es una herramienta centrada en el cliente; los segmentos de clientes y la propuesta de valor son los pilares fundamentales sobre los que se construye el resto del modelo.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["estructura", "componentes"]

respuesta_orden: ["Segmentos de Cliente", "Propuesta de Valor", "Canales", "Relación con el Cliente", "Fuentes de Ingresos", "Recursos Clave", "Actividades Clave", "Asociaciones Clave", "Estructura de Costos"]
tipo: ordenar

opciones_explicitas: ["Segmentos de Cliente", "Propuesta de Valor", "Canales", "Relación con el Cliente", "Fuentes de Ingresos", "Recursos Clave", "Actividades Clave", "Asociaciones Clave", "Estructura de Costos"]

enunciado: "Ordene los siguientes elementos siguiendo el flujo lógico de generación de valor (desde el cliente hacia la infraestructura interna):"

explicacion: |
  El flujo lógico comienza con el mercado (Clientes, Propuesta, Canales, Relación, Ingresos) y termina con la base operativa (Recursos, Actividades, Socios y Costos).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["canales", "relacion"]

respuesta: "Canales"
tipo: mc
opciones_explicitas: ["Canales", "Relación con el Cliente", "Segmentos de Cliente", "Actividades Clave"]

enunciado: "Si una empresa se pregunta '¿Cómo entrego mi propuesta de valor al cliente?', está analizando sus: ___"

explicacion: |
  Los Canales se refieren a los puntos de contacto y medios de distribución para entregar el valor. La Relación con el Cliente se refiere al tipo de vínculo que se establece (asistencia personal, autoservicio, etc.).
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["segmentos", "clientes"]

variables:
  datos: [["App de paseo de perros para dueños ocupados", "Dueños de mascotas"], ["Software de contabilidad para freelancers", "Profesionales independientes"], ["Cafetería gourmet para estudiantes universitarios", "Estudiantes universitarios"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Dueños de mascotas", "Profesionales independientes", "Estudiantes universitarios", "Empresas de tecnología"]

enunciado: "En el modelo de negocio de una {datos[idx][0]}, ¿cuál es el segmento de clientes principal?"

explicacion: |
  El segmento de clientes define quiénes son los individuos o empresas que la empresa busca alcanzar y servir. En el caso de {datos[idx][0]}, el foco está en {datos[idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["propuesta_de_valor", "beneficios"]

variables:
  datos: [["Entrega de comida en 10 minutos", "Rapidez y conveniencia"], ["Consultoría financiera personalizada", "Confianza y experto asesoramiento"], ["Suscripción de streaming sin anuncios", "Entretenimiento sin interrupciones"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si el modelo de negocio se basa en {datos[idx][0]}, la propuesta de valor principal es ___."

explicacion: |
  La propuesta de valor es el conjunto de productos y servicios que crean valor para un segmento de clientes específico.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "basico"
  tags: ["canales", "comunicacion"]

variables:
  datos: [["Tienda de ropa online", "Redes sociales y web"], ["Taller mecánico físico", "Ubicación presencial"], ["Software SaaS", "Descarga digital"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Redes sociales y web"
  - "Ubicación presencial"
  - "Descarga digital"

enunciado: "Para una {datos[idx][0]}, el canal de comunicación y venta principal es ___."

explicacion: |
  Los canales describen cómo la empresa se comunica con sus clientes y cómo entrega su propuesta de valor.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "intermedio"
  tags: ["costos", "estructura"]

variables:
  datos: [["Fábrica de muebles", "Materia prima y mano de obra"], ["Consultora de marketing", "Salarios de especialistas"], ["Plataforma de streaming", "Servidores y licencias"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Materia prima y mano de obra", "Salarios de especialistas", "Servidores y licencias", "Alquiler de locales"]

enunciado: "Para una {datos[idx][0]}, el costo principal suele ser ___."

explicacion: |
  La estructura de costos describe todos los costos en los que se incurre para operar un modelo de negocio.
```

```
metadata:
  materia: "economia"
  tema: "business_model_canvas"
  nivel: "avanzado"
  tags: ["ingresos", "monetizacion"]

variables:
  datos: [["Gimnasio con membresía mensual", "Cuota recurrente"], ["Venta de un libro físico", "Transacción única"], ["Software con modelo freemium", "Combinación de modelos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Cuota recurrente", "Transacción única", "Combinación de modelos"]

enunciado: "Según el modelo de {datos[idx][0]}, ¿qué tipo de flujo de ingresos corresponde?"

explicacion: |
  El flujo de ingresos representa el efectivo que la empresa genera de cada segmento de clientes.
```

## Sección: capitalismo-industrial-trabajo-asalariado (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["propiedad_privada", "medios_produccion"]

tipo: mc
opciones_explicitas: ["La propiedad colectiva de los medios de producción", "La propiedad privada de los medios de producción y la búsqueda de ganancia", "La regulación estatal total de la economía", "La distribución equitativa de la riqueza sin excedentes"]

respuesta: "La propiedad privada de los medios de producción y la búsqueda de ganancia"

enunciado: "El capitalismo industrial se define fundamentalmente como un sistema económico basado en ___."

explicacion: |
  El capitalismo industrial se caracteriza por la propiedad privada de los medios de producción (fábricas, maquinaria, tierras) y la búsqueda de la acumulación de capital a través de la ganancia.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["trabajo_asalariado", "fuerza_de_trabajo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["el obrero vende su fuerza de trabajo a cambio de un salario", "salario"], ["el trabajador ofrece su tiempo para producir mercancías", "salario"]]

tipo: completar
respuestas_validas:
  - "salario"
respuesta: datos[escenario_idx][1]

enunciado: "En el sistema de capitalismo industrial, el trabajador que no posee medios de producción debe vender su fuerza de trabajo a cambio de un ___."

explicacion: |
  En este sistema, el trabajador solo posee su capacidad de trabajar (fuerza de trabajo), la cual alquila al capitalista a cambio de un salario para cubrir sus necesidades de subsistencia.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["factores_produccion", "capital"]

tipo: ordenar
opciones_explicitas: ["Tierra", "Trabajo", "Capital"]
respuesta_orden: ["Tierra", "Trabajo", "Capital"]

enunciado: "Para que se produzca la acumulación de capital en la era industrial, es necesario combinar los factores de producción en un orden lógico de recursos naturales, mano de obra y medios técnicos. Ordene los siguientes elementos: Tierra, Trabajo y Capital."

explicacion: |
  La producción industrial requiere la combinación de recursos naturales (tierra), la actividad humana (trabajo) y el conjunto de medios y dinero para producir (capital).
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["tecnologia", "mecanizacion"]

tipo: mc
opciones_explicitas: ["Aumentar la productividad y reducir costos", "Eliminar la necesidad de obtener ganancias", "Garantizar el empleo pleno de forma permanente", "Reducir la propiedad privada de las máquinas"]

respuesta: "Aumentar la productividad y reducir costos"

enunciado: "En el contexto de la Revolución Industrial, la introducción de maquinaria pesada en las fábricas tenía como objetivo principal ___."

explicacion: |
  La mecanización permitió aumentar la productividad (producir más en menos tiempo), lo que reduce los costos unitarios y maximiza la búsqueda de ganancia del capitalista.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["plusvalia", "valor", "trabajo"]

variables:
  valor_mercancia: 100
  salario_obrero: 40

tipo: completar
tolerancia_abs: 0.01

respuesta: valor_mercancia - salario_obrero

enunciado: "Si un trabajador produce una mercancía cuyo valor de mercado es de {valor_mercancia} y el capitalista le paga un salario de {salario_obrero}, la plusvalía (el valor excedente que retiene el capitalista) es de ___."

pasos:
  - "Identificar el valor total de la mercancía producida."
  - "Restar el salario pagado al trabajador."

explicacion: |
  La plusvalía es la diferencia entre el valor creado por el trabajador y el salario que recibe. En este caso: 100 - 40 = 60.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["trabajo", "salario", "capitalismo"]

tipo: mc
opciones_explicitas: ["La propiedad de los medios de producción", "La capacidad física y mental para trabajar", "El tiempo libre del trabajador", "El capital acumulado por el patrón"]

respuesta: "La capacidad física y mental para trabajar"

enunciado: "En el sistema de trabajo asalariado, lo que el trabajador vende al empleador para obtener un salario es su ___."

explicacion: |
  En el capitalismo, el trabajador no vende su producto ni sus medios de producción, sino su capacidad de trabajar (fuerza de trabajo) por un tiempo determinado.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["historia_economica", "servidumbre", "esclavitud"]

respuesta: "esclavo"
tipo: completar
respuestas_validas:
  - "esclavo"

enunciado: "A diferencia del trabajador asalariado, el ___ es aquel que es considerado una propiedad del amo."

pasos:
  - "Identificar la relación jurídica entre trabajador y dueño."

explicacion: |
  El sistema de esclavitud se caracteriza por la deshumanización del trabajador, quien es tratado como un objeto o propiedad, a diferencia del asalariado que vende su tiempo/capacidad.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["artesano", "produccion", "medios_produccion"]

tipo: mc
opciones_explicitas: ["El artesano posee sus herramientas y el asalariado no", "El artesano trabaja menos horas", "El asalariado es dueño de su tiempo", "No hay diferencia real"]

respuesta: "El artesano posee sus herramientas y el asalariado no"

enunciado: "Una diferencia clave entre el artesano independiente y el trabajador asalariado es que el artesano ___."

explicacion: |
  El artesano es dueño de sus medios de producción (herramientas, taller), mientras que el asalariado debe alquilar su fuerza de trabajo porque no posee los medios para producir por sí mismo.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["salario", "intercambio", "fuerza_de_trabajo"]

tipo: ordenar
opciones_explicitas: ["El trabajador ofrece su fuerza de trabajo", "El capitalista ofrece un salario", "Se produce la mercancía", "El trabajador recibe su compensación"]

enunciado: "Ordene cronológicamente las etapas de la relación de producción asalariada:"

explicacion: |
  El ciclo comienza con el acuerdo de la fuerza de trabajo por un salario, seguido de la actividad productiva y culminando con la compensación económica.
respuesta_orden: ["El trabajador ofrece su fuerza de trabajo", "El capitalista ofrece un salario", "Se produce la mercancía", "El trabajador recibe su compensación"]
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["plusvalia", "salario", "valor"]

variables:
  datos: [[100, 40], [150, 60], [200, 80]]
  idx: uno_de([0, 1, 2])
  valor_total: datos[idx][0]
  parte_salario: datos[idx][1]

tipo: completar
tolerancia_abs: 0
respuesta: valor_total - parte_salario

enunciado: "Si un trabajador genera un valor total de ${valor_total} en su jornada, pero su salario representa ${parte_salario}, ¿cuál es el valor de la plusvalía (la parte del valor que no se le paga al trabajador)?"

explicacion: |
  La plusvalía se calcula restando el salario del valor total producido: {valor_total} - {parte_salario} = {valor_total - parte_salario}.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["historia_economica", "clases_sociales"]

respuesta: "burguesía"
tipo: completar
respuestas_validas:
  - "burguesía"

enunciado: "En el sistema de capitalismo industrial, los dueños de los medios de producción (fábricas, maquinaria) pasaron a ser conocidos como la ___."

explicacion: |
  La burguesía industrial es la clase social que posee los medios de producción y emplea la fuerza de trabajo de otros para generar plusvalía.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["proletariado", "salario"]

variables:
  escenario: uno_de([["el control del tiempo de trabajo", "la subordinación del trabajador al ritmo de la máquina"], ["la propiedad de las herramientas", "la venta de la fuerza de trabajo a cambio de un salario"], ["la gestión de la producción", "la transformación del trabajo en una mercancía"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["la subordinación del trabajador al ritmo de la máquina", "la venta de la fuerza de trabajo a cambio de un salario", "la transformación del trabajo en una mercancía"]

enunciado: "La principal transformación en la relación laboral durante la Revolución Industrial fue ___."

explicacion: |
  El trabajador, al no poseer medios de producción, se ve obligado a vender su fuerza de trabajo como una mercancía a cambio de un salario para subsistir.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["proceso_productivo"]

respuesta: "proletariado"
tipo: completar
respuestas_validas:
  - "proletariado"

enunciado: "Aquella clase social que solo posee su fuerza de trabajo para vender en el mercado laboral se denomina ___."

explicacion: |
  El proletariado es la clase trabajadora que, carente de medios de producción, depende exclusivamente de la venta de su capacidad de trabajo.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["causas", "transformacion"]

respuesta_orden: ["acumulación de capital", "desplazamiento de población", "mecanización de la producción"]
tipo: ordenar
opciones_explicitas: ["acumulación de capital", "desplazamiento de población", "mecanización de la producción"]

enunciado: "Ordene cronológicamente los factores que permitieron la consolidación del sistema de trabajo asalariado industrial:"

explicacion: |
  Primero se requiere la acumulación de capital, luego el desplazamiento de la población rural a las ciudades (éxodo rural) y finalmente la implementación de la tecnología mecánica.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["plusvalia", "valor"]

variables:
  caso: uno_de([["el salario cubre solo el costo de subsistencia", "el excedente generado por el trabajador es apropiado por el capitalista"], ["el tiempo de trabajo es determinado por la necesidad humana", "el tiempo de trabajo es determinado por la necesidad de acumulación de capital"], ["la producción es artesanal y descentralizada", "la producción es masiva y centralizada en la fábrica"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["el excedente generado por el trabajador es apropiado por el capitalista", "el tiempo de trabajo es determinado por la necesidad de acumulación de capital", "la producción es masiva y centralizada en la fábrica"]

enunciado: "En el modelo de capitalismo industrial, la extracción de plusvalía se basa en ___."

explicacion: |
  La plusvalía surge cuando el valor creado por el trabajador durante su jornada excede el valor de su salario, siendo ese excedente capturado por el dueño de los medios de producción.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["revolucion_industrial", "condiciones_laborales"]

enunciado: "Durante el auge de la Revolución Industrial, era común que los obreros enfrentaran jornadas laborales de aproximadamente ___ diarias, lo que derivaba en un agotamiento físico extremo."

respuesta: "14 horas"
tipo: mc
opciones_explicitas: ["14 horas", "16 horas", "12 horas"]

explicacion: |
  Las jornadas de 14 a 16 horas eran la norma en las fábricas textiles y minas, lo que impulsó la lucha por la jornada de 8 horas.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["trabajo_infantil", "historia_economica"]

enunciado: "El trabajo infantil fue una práctica extendida en sectores como las ___, donde los niños eran empleados debido a su pequeño tamaño y bajos costos."

respuesta: "minas y textiles"
tipo: mc
opciones_explicitas: ["minas y textiles", "ferrocarriles y minas", "textiles y minería"]

explicacion: |
  Los niños eran utilizados en minas para entrar en túneles estrechos y en fábricas textiles para reparar maquinaria en movimiento.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["sindicatos", "lucha_de_clases"]

variables:
  causa_idx: uno_de([0, 1, 2])
  causas: ["la falta de regulación de salarios", "la falta de seguridad social", "la falta de límites a la jornada"]

enunciado: "La organización de los primeros sindicatos fue una respuesta directa a la precariedad, especialmente ante la ___."

respuesta: causas[causa_idx]
tipo: completar
respuestas_validas:
  - "la falta de regulación de salarios"
  - "la falta de seguridad social"
  - "la falta de límites a la jornada"

explicacion: |
  La unión de los trabajadores permitía negociar colectivamente para mejorar salarios y reducir las jornadas inhumanas.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["leyes_laborales", "estado"]

variables:
  orden_legal: ["prohibición de trabajo infantil", "limitación de jornada laboral", "derecho a la huelga"]

enunciado: "Ordena cronológicamente los hitos que marcaron la transición de la explotación absoluta hacia la regulación estatal del trabajo:"

pasos:
  - "Primero: Se prohibió el trabajo de niños menores de ciertas edades."
  - "Segundo: Se establecieron límites máximos de horas por día."
  - "Tercero: Se reconoció legalmente el derecho de los trabajadores a la huelga."

respuesta_orden: orden_legal
tipo: ordenar
opciones_explicitas: ["prohibición de trabajo infantil", "limitación de jornada laboral", "derecho a la huelga"]

explicacion: |
  La regulación comenzó con la protección de los más vulnerables (niños), siguió con la gestión del tiempo (jornada) y culminó con el reconocimiento de la acción colectiva (huelga).
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["salario_real", "pobreza"]

variables:
  situacion: uno_de([["subsistencia", "subsistencia", "subsistencia"]])

enunciado: "En el modelo de capitalismo industrial temprano, el salario pagado a la clase obrera se caracterizaba por ser de ___."

respuesta: situacion[0]
tipo: mc
opciones_explicitas: ["subsistencia", "competitivo", "alto"]

explicacion: |
  El salario de subsistencia apenas cubría las necesidades básicas de alimentación y vivienda, manteniendo a la clase obrera en un ciclo de pobreza.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["relaciones_de_produccion", "historia_economica"]

variables:
  datos: [["Un individuo es propiedad de otro, siendo tratado como una mercancía sin derechos legales.", "esclavo"], ["Un campesino está vinculado a la tierra y debe entregar parte de su producción al señor feudal.", "siervo"], ["Un trabajador vende su fuerza de trabajo a cambio de un salario para subsistir.", "asalariado"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["esclavo", "siervo", "asalariado"]

enunciado: "Analice la siguiente situación: {datos[idx][0]}"

explicacion: |
  La respuesta correcta es {datos[idx][1]}. En el sistema de {datos[idx][1]}, la característica principal es la naturaleza del vínculo con el medio de producción y la libertad del trabajador.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["plusvalia", "fuerza_de_trabajo"]

variables:
  datos: [["El trabajador vende su capacidad de trabajar por un tiempo determinado.", "fuerza de trabajo"], ["El trabajador vende el producto de su trabajo terminado.", "producto"], ["El trabajador vende su libertad personal.", "libertad"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "fuerza de trabajo"
  - "producto"
  - "libertad"

enunciado: "En el capitalismo industrial, lo que el trabajador vende al capitalista para obtener un salario es su ___."

explicacion: |
  En el sistema capitalista, el trabajador no vende el producto final, sino su {datos[idx][1]}.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["transicion_feudalismo_capitalismo"]

variables:
  secuencia: ["esclavismo", "feudalismo", "capitalismo"]
  idx: uno_de([0, 1, 2])

respuesta_orden: secuencia
tipo: ordenar
opciones_explicitas: ["esclavismo", "feudalismo", "capitalismo"]

enunciado: "Ordene cronológicamente las siguientes etapas de la organización del trabajo en la historia económica:"

explicacion: |
  La secuencia histórica estándar es: {secuencia[0]}, luego {secuencia[1]} y finalmente {secuencia[2]}.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["valor_trabajo", "salario"]

variables:
  par: [["El salario es un pago por la propiedad de la persona.", "falso"], ["El salario es un pago por el uso de la capacidad de trabajo.", "verdadero"], ["El salario es una parte del producto que pertenece al trabajador.", "falso"]]
  idx: uno_de([0, 1, 2])

respuesta: par[idx][1]
tipo: mc
opciones_explicitas: ["falso", "verdadero"]

enunciado: "Determine si la siguiente afirmación es verdadera o falsa: {par[idx][0]}"

explicacion: |
  La respuesta es {par[idx][1]}. En el trabajo asalariado, el capitalista paga por el uso de la capacidad de trabajo, no por la propiedad del individuo.
```

```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["propiedad_medios_produccion"]

variables:
  comparacion: [["El siervo tiene acceso limitado a la tierra pero no es propiedad.", "libertad_limitada"], ["El esclavo es propiedad total del amo.", "propiedad_total"], ["El asalariado es dueño de su fuerza de trabajo pero no de los medios.", "autonomia_parcial"]]
  idx: uno_de([0, 1, 2])

respuesta: comparacion[idx][1]
tipo: completar
respuestas_validas:
  - "libertad_limitada"
  - "propiedad_total"
  - "autonomia_parcial"

enunciado: "La diferencia fundamental en el caso del esclavo es su ___."

explicacion: |
  Según el escenario, la característica del esclavo es la {comparacion[idx][1]}.
```

## Sección: comercio-internacional-ventaja-comparativa (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué explica la teoría de la ventaja comparativa?"
tipo: mc
opciones_explicitas:
  - "Por qué un país se especializa en producir ciertos bienes y comercia con otros países, en vez de producir todo por su cuenta"
  - "Cómo se calcula el tipo de cambio de una moneda"
  - "Cómo funciona el banco central de un país"
respuesta: "Por qué un país se especializa en producir ciertos bienes y comercia con otros países, en vez de producir todo por su cuenta"

explicacion: |
  Es la pregunta central que responde este tema.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Quién formuló la teoría de la ventaja comparativa, en 1817?"
tipo: mc
opciones_explicitas:
  - "David Ricardo"
  - "Adam Smith"
  - "John Maynard Keynes"
respuesta: "David Ricardo"

explicacion: |
  Es el economista que formuló esta teoría específica.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué es tener \"ventaja absoluta\" en la producción de un bien?"
tipo: mc
opciones_explicitas:
  - "Producirlo con menos horas de trabajo que otro país, en términos absolutos"
  - "Tener menor costo de oportunidad al producirlo, sin importar las horas totales"
  - "Ser el único país que produce ese bien en el mundo"
respuesta: "Producirlo con menos horas de trabajo que otro país, en términos absolutos"

explicacion: |
  Es la idea intuitiva (y limitada) que la ventaja comparativa viene a
  superar.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un país fuera mejor que otro produciendo TODOS los bienes en términos absolutos, la lógica de la ventaja absoluta sugeriría, incorrectamente, que no le conviene comerciar con nadie."

explicacion: |
  Es justamente el problema que Ricardo resolvió con el concepto de
  costo de oportunidad.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "En el contexto de la ventaja comparativa, ¿qué es el costo de oportunidad de producir un bien?"
tipo: mc
opciones_explicitas:
  - "Cuánto hay que dejar de producir de otro bien para producir una unidad más del primero"
  - "El precio en dólares de ese bien"
  - "El impuesto que paga ese bien al exportarse"
respuesta: "Cuánto hay que dejar de producir de otro bien para producir una unidad más del primero"

explicacion: |
  Es el concepto central que reemplaza a la comparación absoluta de
  horas.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuándo tiene un país \"ventaja comparativa\" en un bien?"
tipo: mc
opciones_explicitas:
  - "Cuando su costo de oportunidad de producir ese bien es MENOR que el de otro país"
  - "Cuando produce ese bien con menos horas en términos absolutos que otro país"
  - "Cuando es el único país que exporta ese bien"
respuesta: "Cuando su costo de oportunidad de producir ese bien es MENOR que el de otro país"

explicacion: |
  Es la definición central del tema: comparar costos de oportunidad,
  no horas absolutas.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "En el ejemplo clásico de Ricardo (Inglaterra y Portugal, tela y vino), ¿qué característica tiene Portugal en términos absolutos?"
tipo: mc
opciones_explicitas:
  - "Es absolutamente mejor produciendo las dos cosas (tela y vino), necesita menos horas para ambas"
  - "Es absolutamente peor produciendo las dos cosas"
  - "Sólo puede producir vino, no tela"
respuesta: "Es absolutamente mejor produciendo las dos cosas (tela y vino), necesita menos horas para ambas"

explicacion: |
  Es el punto de partida del ejemplo: Portugal gana en términos
  absolutos en ambos bienes.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "En el ejemplo clásico de Ricardo, aunque Portugal sea absolutamente mejor en todo, ¿quién termina teniendo ventaja comparativa en tela?"
tipo: mc
opciones_explicitas:
  - "Inglaterra, porque su costo de oportunidad de producir tela (en términos de vino) es menor que el de Portugal"
  - "Portugal, porque produce tela con menos horas en términos absolutos"
  - "Ninguno de los dos: la ventaja comparativa no aplica en este ejemplo"
respuesta: "Inglaterra, porque su costo de oportunidad de producir tela (en términos de vino) es menor que el de Portugal"

explicacion: |
  Es el resultado central y contraintuitivo del ejemplo: la ventaja
  comparativa no depende de quién es mejor en términos absolutos.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "calculo"]

variables:
  horas_vino: random(2, 8)
  multiplicador: uno_de([2, 3, 4])
  horas_tela: horas_vino * multiplicador

respuesta: horas_tela / horas_vino
tipo: input
tolerancia_abs: 0

enunciado: "En un país, producir una unidad de tela lleva {horas_tela} horas, y producir una unidad de vino lleva {horas_vino} horas. ¿Cuántas unidades de vino se sacrifican (costo de oportunidad) por producir una unidad de tela?"

explicacion: |
  Costo de oportunidad de la tela (en vino) = horas de tela / horas de
  vino.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "calculo"]

variables:
  horas_tela_pais1: random(50, 150)
  horas_vino_pais1: random(50, 150)
  horas_tela_pais2: random(50, 150)
  horas_vino_pais2: random(50, 150)

respuesta: (horas_tela_pais1 / horas_vino_pais1 < horas_tela_pais2 / horas_vino_pais2)
tipo: vf

enunciado: "País 1: {horas_tela_pais1} horas por tela, {horas_vino_pais1} horas por vino. País 2: {horas_tela_pais2} horas por tela, {horas_vino_pais2} horas por vino. ¿Tiene el País 1 ventaja comparativa en tela (menor costo de oportunidad de tela que el País 2)?"

explicacion: |
  Se compara el costo de oportunidad de tela (horas de tela / horas de
  vino) de cada país; el menor tiene la ventaja comparativa en tela.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría de la ventaja comparativa, si cada país se especializa en el bien donde tiene ventaja comparativa y comercian entre sí, los dos pueden terminar con más de ambos bienes que si cada uno hubiera intentado producir todo por su cuenta."

explicacion: |
  Es la conclusión central de la teoría: la especialización y el
  comercio generan una ganancia conjunta.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país muy desarrollado, con salarios altos, puede seguir teniendo ventaja comparativa en ciertos productos frente a un país con salarios mucho más bajos, porque lo que importa es el costo de oportunidad relativo, no el nivel absoluto de desarrollo."

explicacion: |
  Es una consecuencia directa de que la ventaja comparativa se define
  en términos relativos dentro de cada país, no en comparación
  absoluta de niveles de desarrollo.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Qué tipo de razonamiento comparte la ventaja comparativa con el \"punto de equilibrio\" de Administración?"
tipo: mc
opciones_explicitas:
  - "El de \"por qué esta decisión y no otra\", comparando costos relativos en vez de valores absolutos"
  - "Los dos calculan exactamente la misma fórmula matemática"
  - "No comparten ningún tipo de razonamiento"
respuesta: "El de \"por qué esta decisión y no otra\", comparando costos relativos en vez de valores absolutos"

explicacion: |
  Es la analogía que hace la teoría del MAPA para explicar por qué
  esta idea cruza con Administración.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "problema"]

enunciado: "Un país con mucha tierra fértil pero poca industria pesada exporta productos agrícolas e importa maquinaria, en vez de fabricar su propia maquinaria con mucho esfuerzo relativo. ¿Qué principio explica mejor esta decisión?"
tipo: mc
opciones_explicitas:
  - "Ventaja comparativa: le conviene especializarse donde su costo de oportunidad es menor"
  - "Devaluación de su moneda"
  - "Déficit de su balanza comercial"
respuesta: "Ventaja comparativa: le conviene especializarse donde su costo de oportunidad es menor"

explicacion: |
  Es una aplicación directa del concepto central del tema.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando se argumenta a favor del libre comercio diciendo que \"cada país debería producir lo que sabe hacer mejor, en términos relativos\", se está citando, en esencia, la ventaja comparativa."

explicacion: |
  Es la aplicación más habitual de esta teoría en el debate de
  política comercial.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de razonamiento sobre la ventaja comparativa entre dos países."
opciones_explicitas:
  - "Los países comercian entre sí, terminando con más de ambos bienes que produciendo todo por su cuenta"
  - "Cada país se especializa en producir ese bien"
  - "Se calcula el costo de oportunidad de cada bien en cada país"
  - "Se identifica en qué bien tiene cada país el menor costo de oportunidad"
respuesta_orden: ["Se calcula el costo de oportunidad de cada bien en cada país", "Se identifica en qué bien tiene cada país el menor costo de oportunidad", "Cada país se especializa en producir ese bien", "Los países comercian entre sí, terminando con más de ambos bienes que produciendo todo por su cuenta"]

explicacion: |
  Es el proceso completo de razonamiento detrás de la teoría de la
  ventaja comparativa.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "avanzado"
  tags: ["comercio_internacional", "vocabulario"]

enunciado: "¿Cuál es la diferencia central entre \"ventaja absoluta\" y \"ventaja comparativa\"?"
tipo: mc
opciones_explicitas:
  - "La absoluta compara horas totales por unidad; la comparativa compara el costo de oportunidad relativo entre bienes"
  - "Son exactamente lo mismo, con nombres distintos"
  - "La comparativa sólo aplica quiénes tienen tipo de cambio fijo"
respuesta: "La absoluta compara horas totales por unidad; la comparativa compara el costo de oportunidad relativo entre bienes"

explicacion: |
  Es la distinción central de todo el tema.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el ejemplo clásico de Ricardo, Portugal termina con ventaja comparativa en vino, aunque sea absolutamente mejor que Inglaterra en ambos bienes."

explicacion: |
  Es el resultado complementario al de la tela (que quedaba en manos
  de Inglaterra).
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "intermedio"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la teoría de la ventaja comparativa se formuló en 1817, sigue siendo el argumento central que se usa hoy para explicar por qué los países se especializan y comercian entre sí."

explicacion: |
  Es una teoría económica clásica que sigue vigente en el debate
  actual sobre comercio internacional.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional"]

tipo: completar
enunciado: "Completá: un país tiene ventaja comparativa en un bien cuando su costo de ___ (lo que sacrifica de otro bien) de producirlo es menor que el de otro país."
respuestas_validas:
  - "oportunidad"

explicacion: |
  Es el concepto central de todo el tema.
```

```
metadata:
  materia: "economia"
  tema: "comercio_internacional_ventaja_comparativa"
  nivel: "basico"
  tags: ["comercio_internacional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ventaja comparativa explica por qué a un país le conviene especializarse y comerciar según su costo de oportunidad relativo, incluso si otro país es absolutamente mejor produciendo todo."

explicacion: |
  Es la idea central de todo el tema.
```

