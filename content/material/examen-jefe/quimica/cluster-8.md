# Examen jefe — [PENDIENTE #848]

> Logro #848. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 7 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **164 preguntas totales** en 7/7 secciones.

---

## Sección: petroleo-como-recurso-energetico (40 preguntas)

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["hidrocarburos", "composicion"]

variables:
  elemento1: "uno_de(['carbono', 'hidrogeno'])"
  elemento2: "uno_de(['carbono', 'hidrogeno'])"

respuesta: "hidrocarburos"
tipo: completar

enunciado: "El petróleo es una mezcla compleja compuesta principalmente por átomos de {elemento1} y {elemento2}. La denominación química general para estos compuestos es: ___"

explicacion: |
  El petróleo está formado por hidrocarburos, que son compuestos orgánicos formados esencialmente por carbono e hidrógeno.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["origen", "materia_organica"]

variables:
  origen: "uno_de(['plancton', 'minerales', 'metales'])"

respuesta: verdadero
tipo: vf

enunciado: "El petróleo se origina a partir de la acumulación y transformación de materia orgánica como {origen} y algas en mares antiguos."

explicacion: |
  El petróleo proviene de la descomposición de materia orgánica (plancton, algas) bajo altas presiones y temperaturas durante millones de años.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["refinamiento", "destilacion"]

variables:
  propiedad: "uno_de(['temperatura de ebullicion', 'densidad', 'pH'])"

respuesta: "temperatura de ebullicion"
tipo: completar

enunciado: "En la torre de refinamiento, la separación de los componentes del crudo se basa en la diferencia de su {propiedad}."

explicacion: |
  La destilación fraccionada separa los hidrocarburos según sus diferentes temperaturas de ebullición.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["renovable", "clasificacion"]

variables:
  recurso: "uno_de(['petroleo', 'energia solar', 'energia eolica'])"

respuesta: "no renovable"
tipo: completar

enunciado: "El {recurso} es considerado un recurso energético de tipo '___' porque su formación tarda millones de años."

explicacion: |
  A diferencia de las energías renovables, el petróleo no se regenera a escala humana, por lo que es no renovable.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["alcanos", "estructura"]

variables:
  estructura: "uno_de(['cadena lineal', 'anillo', 'cadena ramificada'])"

respuesta: "cadena lineal"
tipo: completar

enunciado: "Los alcanos presentes en el petróleo pueden tener estructura de {estructura} o ramificada, a diferencia de los cicloalcanos que forman anillos."

explicacion: |
  Los alcanos son hidrocarburos saturados que pueden presentarse como cadenas lineales o ramificadas.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["fracking", "extraccion"]

variables:
  yacimiento: "uno_de(['convencional', 'no convencional'])"

respuesta: "fracking"
tipo: completar

enunciado: "Para extraer petróleo de yacimientos {yacimiento} atrapados en rocas impermeables, se utiliza la técnica de ___."

explicacion: |
  El fracking (fracturamiento hidráulico) es necesario para liberar hidrocarburos de rocas impermeables en yacimientos no convencionales.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "avanzado"
  tags: ["aromaticos", "benceno"]

variables:
  compuesto: "uno_de(['benceno', 'metano', 'etano'])"

respuesta: "benceno"
tipo: completar

enunciado: "Un ejemplo clásico de hidrocarburo aromático encontrado en el petróleo es el {compuesto}, que posee una estructura de anillo con deslocalización electrónica."

explicacion: |
  El benceno es un hidrocarburo aromático clave presente en el crudo, distinto a los alcanos y cicloalcanos.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["argentina", "vaca_muerta"]

variables:
  provincia: "uno_de(['Neuquen', 'Buenos Aires', 'Cordoba'])"

respuesta: "Neuquen"
tipo: completar

enunciado: "La importante formación de petróleo no convencional y gas conocida como Vaca Muerta se encuentra en la provincia de {provincia}."

explicacion: |
  Vaca Muerta es una formación geológica en Neuquén, Argentina, rica en hidrocarburos no convencionales.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "avanzado"
  tags: ["alcanos", "saturacion"]

variables:
  tipo_hc: "uno_de(['alcanos', 'alquenos', 'alquinos'])"

respuesta: "alcanos"
tipo: completar

enunciado: "Los {tipo_hc} son hidrocarburos saturados, es decir, contienen solo enlaces simples entre átomos de carbono."

explicacion: |
  Los alcanos son los hidrocarburos más simples y saturados, con fórmula general CnH2n+2.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["quimica_aplicada", "fracking"]

variables:
  componente: "uno_de(['agua', 'arena', 'glicerina'])"

respuesta: "agua"
tipo: completar

enunciado: "El fracking consiste en inyectar {componente} a alta presión junto con aditivos químicos para crear grietas en la roca."

explicacion: |
  La mezcla principal para la fracturación hidráulica es agua a alta presión, arena (proppant) y químicos.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["geopolitica", "importancia"]

variables:
  pais: "uno_de(['Arabia Saudita', 'Argentina', 'Uruguay'])"

respuesta: "Arabia Saudita"
tipo: completar

enunciado: "Entre los países con las mayores reservas probadas de petróleo se encuentra {pais}."

explicacion: |
  Arabia Saudita es uno de los principales productores y poseedores de reservas de petróleo mundial.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["origen", "biologia"]

variables:
  organismo: "uno_de(['plancton', 'dinosaurios', 'arboles'])"

respuesta: "plancton"
tipo: completar

enunciado: "La materia orgánica que dio origen al petróleo incluía principalmente {organismo} y algas de mares antiguos."

explicacion: |
  El plancton marino es la fuente principal de la materia orgánica que se transformó en petróleo.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "avanzado"
  tags: ["quimica_organica", "benceno"]

variables:
  atomo_c: "random(6,6)"
  atomo_h: "random(6,6)"

respuesta: "C6H6"
tipo: input

enunciado: "La fórmula molecular del benceno, un hidrocarburo aromático clave, es {atomo_c} carbonos y {atomo_h} hidrógenos. Escribela como C6H6:"

explicacion: |
  El benceno tiene la fórmula C6H6, con un anillo hexagonal de carbonos e hidrógenos unidos.
```

```
metadata:
  materia: "quimica"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["geopolitica", "paises"]

variables:
  pais: "uno_de(['Rusia', 'España', 'Chile'])"

respuesta: "Rusia"
tipo: completar

enunciado: "Además de Arabia Saudita y Estados Unidos, {pais} posee una de las mayores reservas probadas de petróleo."

explicacion: |
  Rusia es uno de los tres principales poseedores de reservas de petróleo a nivel mundial.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["hidrocarburos", "composicion"]

variables:
  elementos: uno_de(["carbono e hidrogeno", "carbono y oxigeno", "hidrogeno y nitrogeno", "azufre y oxigeno"])

respuesta: "carbono e hidrogeno"
tipo: mc
opciones_explicitas: ["carbono e hidrogeno", "carbono y oxigeno", "hidrogeno y nitrogeno", "azufre y oxigeno"]

enunciado: "El petróleo es una mezcla compleja de hidrocarburos. ¿Cuáles son los dos elementos químicos principales que lo componen?"

explicacion: |
  Los hidrocarburos, por definición, están formados principalmente por átomos de carbono e hidrógeno. El petróleo es una mezcla de este tipo de compuestos.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["origen", "materia_organica"]

variables:
  origen: uno_de(["plancton y algas", "restos de dinosaurios", "minerales volcánicos", "raíces de árboles gigantes"])

respuesta: "plancton y algas"
tipo: mc
opciones_explicitas: ["plancton y algas", "restos de dinosaurios", "minerales volcánicos", "raíces de árboles gigantes"]

enunciado: "El petróleo se origina a partir de la acumulación y transformación de materia orgánica. ¿Qué organismos fueron los principales contribuyentes?"

explicacion: |
  El petróleo proviene de la acumulación de plancton y algas marinos que vivieron en mares antiguos hace millones de años, no de dinosaurios o vegetación terrestre.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["refinamiento", "destilacion"]

variables:
  propiedad: "temperatura de ebullicion"

respuesta: "temperatura de ebullicion"
tipo: input

enunciado: "El proceso clave para separar los componentes del crudo es la destilación fraccionada. ¿Qué propiedad física de los hidrocarburos aprovecha este proceso para separarlos?"

explicacion: |
  La destilación fraccionada separa los hidrocarburos aprovechando sus diferentes temperaturas de ebullicion. Al calentar el crudo, cada fracción se vaporiza a una temperatura distinta.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["argentina", "yacimientos", "vaca_muerta"]

variables:
  provincia: "neuquen"

respuesta: "neuquen"
tipo: input

enunciado: "En Argentina, ¿en qué provincia se encuentra la formación de Vaca Muerta, una de las reservas de petróleo no convencional (shale oil) y gas más importantes del mundo?"

explicacion: |
  La formación de Vaca Muerta se ubica en la provincia de Neuquén. Su explotación ha transformado la matriz energética nacional en las últimas décadas.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["fracking", "explotacion", "no_convencional"]

variables:
  tecnica: "fracturamiento_hidraulico"

respuesta: "fracturamiento_hidraulico"
tipo: input

enunciado: "Para extraer petróleo atrapado en rocas impermeables (yacimientos no convencionales), se utiliza una técnica que inyecta agua a alta presión con aditivos químicos. ¿Cómo se llama esta técnica?"

explicacion: |
  La técnica se llama fracturamiento hidráulico (fracking). Consiste en crear grietas en la roca para liberar el hidrocarburo atrapado.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["sostenibilidad", "clasificacion"]

variables:
  clasificacion: "falso"

respuesta: falso
tipo: vf

enunciado: "El petróleo es considerado un recurso energético renovable porque se regenera rápidamente en la naturaleza."

explicacion: |
  Falso. El petróleo es un recurso no renovable porque su formación toma millones de años, a un ritmo mucho más lento que su consumo actual.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["reservas", "definicion"]

variables:
  concepto: "reservas"

respuesta: "reservas"
tipo: input

enunciado: "¿Qué término se utiliza para definir las cantidades de petróleo que pueden extraerse económicamente con la tecnología actual?"

explicacion: |
  Se utilizan las "reservas" probadas. Este concepto depende tanto de la existencia física del recurso como de la viabilidad económica y tecnológica de su extracción.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["composicion", "aromaticos"]

variables:
  ejemplo: "benceno"

respuesta: "benceno"
tipo: input

enunciado: "Entre los componentes químicos del petróleo se encuentran los hidrocarburos aromáticos. ¿Cuál es un ejemplo clásico de este tipo de compuesto?"

explicacion: |
  El benceno es un ejemplo clásico de hidrocarburo aromático, caracterizado por tener un anillo de átomos de carbono con enlaces dobles conjugados.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["uso", "transporte"]

variables:
  razon: "falso"

respuesta: falso
tipo: vf

enunciado: "El petróleo ha sido la columna vertebral del transporte mundial principalmente porque es una energía renovable y limpia."

explicacion: |
  Falso. Su importancia en el transporte se debe a su alta densidad energética y facilidad de almacenamiento y transporte, no a ser renovable o limpio.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["clasificacion", "calidad"]

variables:
  factor: "falso"

respuesta: falso
tipo: vf

enunciado: "La proporción de alcanos, cicloalcanos y aromáticos determina si el petróleo es ligero o pesado, pero no afecta su calidad para ser refinado."

explicacion: |
  Falso. La proporción de estos componentes determina tanto la densidad (ligero/pesado) como la calidad y facilidad para ser refinado en productos útiles.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["explotacion", "convencional"]

variables:
  mecanismo: "presion_interna"

respuesta: "presion_interna"
tipo: input

enunciado: "En los yacimientos convencionales, el petróleo suele fluir naturalmente hacia los pozos. ¿Qué fuerza principal impulsa este flujo sin necesidad de técnicas complejas de extracción?"

explicacion: |
  La presión interna del yacimiento es la fuerza principal. Esta presión natural empuja el crudo hacia la superficie cuando se perfora el pozo.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "avanzado"
  tags: ["geopolitica", "reservas"]

variables:
  pais: "arabia_saudita"

respuesta: "arabia_saudita"
tipo: input

enunciado: "¿Qué país posee una de las mayores reservas probadas de petróleo a nivel mundial, siendo un actor clave en la geopolítica energética global?"

explicacion: |
  Arabia Saudita es uno de los países con las mayores reservas probadas de petróleo, lo que le otorga una gran influencia en el mercado energético mundial.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["propiedades", "energia"]

variables:
  ventaja: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de muchas energías renovables intermitentes, el petróleo puede almacenarse y transportarse con relativa facilidad."

explicacion: |
  Verdadero. El petróleo es un líquido denso en energía que se puede almacenar en tanques y transportar por oleoductos o barcos cisterna de manera eficiente.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["composicion", "cicloalcanos"]

variables:
  estructura: "anillos"

respuesta: "anillos"
tipo: input

enunciado: "Los cicloalcanos son uno de los tipos de hidrocarburos presentes en el petróleo. ¿Cómo se describen sus estructuras químicas?"

explicacion: |
  Los cicloalcanos se describen como hidrocarburos cuyas cadenas de carbono forman anillos cerrados.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["shale", "no_convencional"]

variables:
  traduccion: "petroleo_de_esquistos"

respuesta: "petroleo_de_esquistos"
tipo: input

enunciado: "El término inglés 'shale oil' se refiere al petróleo extraído de rocas impermeables. ¿Cómo se traduce comúnmente al español en el contexto energético?"

explicacion: |
  Se traduce como "petróleo de esquistos". Es un tipo de petróleo no convencional que requiere técnicas como el fracking para su extracción.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["propiedades", "energia"]

variables:
  caracteristica: "densa"

respuesta: "densa"
tipo: input

enunciado: "El petróleo es una fuente de energía ______. ¿Qué palabra describe su capacidad de almacenar mucha energía en un volumen pequeño?"

explicacion: |
  El petróleo es una fuente de energía densa. Esto significa que libera una gran cantidad de energía por unidad de masa o volumen al quemarse.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["fracking", "quimica"]

variables:
  componente: "agua"

respuesta: "agua"
tipo: input

enunciado: "El fracturamiento hidráulico consiste en inyectar ______ a alta presión con aditivos químicos para crear grietas en la roca. ¿Cuál es el líquido principal utilizado?"

explicacion: |
  El líquido principal es el agua. Se mezcla con arena y aditivos químicos para mantener las grietas abiertas y facilitar el flujo del hidrocarburo.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["reservas", "distribucion"]

variables:
  distribucion: "falso"

respuesta: falso
tipo: vf

enunciado: "Las reservas de petróleo están distribuidas uniformemente en todo el planeta."

explicacion: |
  Falso. Las reservas no están distribuidas uniformemente; se concentran en regiones específicas como Medio Oriente, Rusia y América del Sur.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["refinamiento", "equipos"]

variables:
  equipo: "torre"

respuesta: "torre"
tipo: input

enunciado: "Durante la refinación, el crudo se calienta en una ______ de destilación. ¿Cómo se llama el equipo vertical principal donde ocurre la separación por fracciones?"

explicacion: |
  Se llama torre de destilación. Es un equipo vertical donde los vapores se condensan a diferentes alturas según su temperatura de ebullición.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["origen", "tiempo_geologico"]

variables:
  periodo: "millones_de_anos"

respuesta: "millones_de_anos"
tipo: input

enunciado: "La materia orgánica que originó el petróleo vivió en mares antiguos hace ______. ¿Qué escala de tiempo describe la formación del petróleo?"

explicacion: |
  Hace millones de años. La transformación de la materia orgánica en petróleo es un proceso geológico extremadamente lento.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["fracking", "fisica"]

variables:
  condicion: "alta"

respuesta: "alta"
tipo: input

enunciado: "Para fracturar la roca impermeable en yacimientos no convencionales, el agua se inyecta a presión ______. ¿Qué adjetivo describe la magnitud de la presión necesaria?"

explicacion: |
  La presión debe ser alta. Solo con presiones muy elevadas se pueden generar las grietas necesarias en la roca dura.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["definicion", "quimica"]

variables:
  definicion: "hidrocarburos"

respuesta: "hidrocarburos"
tipo: input

enunciado: "El petróleo es una mezcla compleja de ______. ¿Cómo se llaman los compuestos químicos formados por carbono e hidrógeno?"

explicacion: |
  Se llaman hidrocarburos. Son los compuestos orgánicos básicos que constituyen la mayor parte del petróleo crudo.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["propiedades_fisicas"]

variables:
  estado: "viscoso"

respuesta: "viscoso"
tipo: input

enunciado: "El petróleo es un líquido ______ y oscuro que se encuentra en el subsuelo. ¿Qué palabra describe su resistencia a fluir?"

explicacion: |
  El petróleo es viscoso. Esta propiedad física varía según la composición, pero generalmente es más espeso que el agua.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["uso", "industria"]

variables:
  sector: "quimica"

respuesta: "quimica"
tipo: input

enunciado: "El petróleo no solo es fuente de energía, sino también la columna vertebral de la industria ______. ¿Qué sector industrial depende del petróleo como materia prima?"

explicacion: |
  La industria química. El petróleo es la materia prima para producir plásticos, fertilizantes, medicamentos y muchos otros productos.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "intermedio"
  tags: ["refinamiento", "proceso"]

variables:
  principio: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La destilación fraccionada separa los componentes del petróleo calentándolo y aprovechando que cada hidrocarburo se vaporiza a una temperatura distinta."

explicacion: |
  Verdadero. Este es el principio fundamental de la destilación fraccionada: la separación se basa en las diferentes temperaturas de ebullición.
```

```
metadata:
  materia: "Química"
  tema: "petroleo_como_recurso_energetico"
  nivel: "basico"
  tags: ["clasificacion", "sostenibilidad"]

variables:
  clasificacion: "no_renovable"

respuesta: "no_renovable"
tipo: input

enunciado: "El petróleo es un recurso ______. ¿Qué término indica que su tasa de consumo es mucho mayor que su tasa de formación natural?"

explicacion: |
  Es un recurso no renovable. Esto significa que una vez agotado, no puede ser reemplazado en un plazo de tiempo humano útil.
```

## Sección: pilas-celdas-galvanicas (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["redox", "espontaneidad"]

respuesta: verdadero
tipo: vf

enunciado: "Una pila aprovecha una reacción redox espontánea para generar corriente eléctrica."

explicacion: |
  La energía liberada por la reacción espontánea desplaza electrones por un circuito externo.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electrodo", "separacion"]

respuesta: falso
tipo: vf

enunciado: "En una pila, los procesos de oxidación y reducción ocurren mezclados en el mismo lugar, sin separación física."

explicacion: |
  Falso. Se separan físicamente en ánodo (oxidación) y cátodo (reducción) para que los electrones tengan que pasar por un circuito.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "intermedio"
  tags: ["energia", "calor"]

respuesta: verdadero
tipo: vf

enunciado: "Si se mezclan directamente el agente reductor y el oxidante sin una celda de por medio, la energía se libera principalmente como calor, no como electricidad útil."

explicacion: |
  Sin un camino externo para los electrones, la energía se disipa como calor.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["nomenclatura"]

respuesta: "galvanica"
tipo: completar
respuestas_validas:
  - "galvanica"
  - "galvánica"
  - "voltaica"

enunciado: "Otro nombre para una pila es celda ___."

explicacion: |
  Celda galvánica o voltaica: convierte energía química en eléctrica mediante una reacción espontánea.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electroquimica", "anodo"]

respuesta: "oxidacion"
tipo: mc
opciones_explicitas: ["oxidacion", "reduccion", "ninguna reaccion", "ambas"]

enunciado: "En el ánodo de una celda galvánica ocurre la..."

explicacion: |
  En el ánodo ocurre siempre la oxidación.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electroquimica", "catodo"]

respuesta: "reduccion"
tipo: mc
opciones_explicitas: ["reduccion", "oxidacion", "ninguna reaccion", "ambas"]

enunciado: "En el cátodo de una celda galvánica ocurre la..."

explicacion: |
  En el cátodo ocurre siempre la reducción.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["polaridad", "anodo"]

respuesta: verdadero
tipo: vf

enunciado: "En una pila galvánica, el ánodo es el polo negativo."

explicacion: |
  El ánodo libera electrones (fuente de electrones): es el polo negativo.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["polaridad", "catodo"]

respuesta: verdadero
tipo: vf

enunciado: "En una pila galvánica, el cátodo es el polo positivo."

explicacion: |
  El cátodo recibe electrones (los consume en la reducción): es el polo positivo.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electrones", "anodo"]

respuesta: falso
tipo: vf

enunciado: "En el ánodo, el electrodo gana electrones."

explicacion: |
  Falso. En el ánodo el electrodo libera (pierde) electrones — es donde ocurre la oxidación.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["puente_salino"]

respuesta: verdadero
tipo: vf

enunciado: "El puente salino permite el paso de iones para mantener la neutralidad eléctrica de cada solución."

explicacion: |
  Evita la acumulación de carga que frenaría la reacción, dejando pasar iones entre las semiceldas.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "intermedio"
  tags: ["puente_salino"]

respuesta: verdadero
tipo: vf

enunciado: "Si se retira el puente salino de una pila, la reacción se detiene porque las soluciones acumulan cargas desbalanceadas."

explicacion: |
  Sin el flujo de iones, se genera un potencial opuesto que frena el paso de electrones.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electrones"]

respuesta: verdadero
tipo: vf

enunciado: "En una celda galvánica, los electrones viajan desde el ánodo hacia el cátodo a través del cable externo."

explicacion: |
  El ánodo libera electrones, el cátodo los consume: fluyen ánodo→cátodo por el cable.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "intermedio"
  tags: ["electrones", "puente_salino"]

respuesta: falso
tipo: vf

enunciado: "Los electrones viajan del cátodo al ánodo a través del puente salino."

explicacion: |
  Falso, doble error: los electrones van por el cable (no el puente salino, que es sólo para iones), y en la dirección ánodo→cátodo.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["redox", "anodo", "daniell"]

respuesta: verdadero
tipo: vf

enunciado: "En la pila de Daniell, el zinc metálico se disuelve como Zn2+ en el ánodo."

explicacion: |
  Zn(s) → Zn2+(ac) + 2e−.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["redox", "catodo", "daniell"]

respuesta: verdadero
tipo: vf

enunciado: "En la pila de Daniell, se deposita cobre metálico nuevo en el cátodo."

explicacion: |
  Cu2+(ac) + 2e− → Cu(s).
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electrodos", "daniell"]

respuesta: "Zn"
tipo: mc
opciones_explicitas: ["Zn", "Cu", "ambos", "ninguno"]

enunciado: "En la pila de Daniell, ¿cuál electrodo es el ánodo?"

explicacion: |
  El Zn se oxida: es el ánodo.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electrodos", "daniell"]

respuesta: "Cu"
tipo: mc
opciones_explicitas: ["Cu", "Zn", "ambos", "ninguno"]

enunciado: "En la pila de Daniell, ¿cuál electrodo es el cátodo?"

explicacion: |
  El Cu2+ se reduce sobre el electrodo de cobre: es el cátodo.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "intermedio"
  tags: ["estequiometria", "electrones"]

variables:
  electrones_por_reaccion: 2
  moles_zn: uno_de([1, 2, 3])

respuesta: moles_zn * electrones_por_reaccion
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si reaccionan {moles_zn} moles de Zn, ¿cuántos moles de electrones se liberan en total?"

pasos:
  - "Zn → Zn2+ + 2e−"

explicacion: |
  {moles_zn} × 2 moles de electrones.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "avanzado"
  tags: ["comparacion", "electrolisis"]

respuesta: falso
tipo: vf

enunciado: "Al igual que en la electrólisis, en una pila hace falta aportar energía eléctrica externa para que la reacción ocurra."

explicacion: |
  Falso. En una pila la reacción es espontánea (produce energía); en la electrólisis (ver ../electrolisis/) hace falta aportar energía externa porque la reacción no es espontánea.
```

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "intermedio"
  tags: ["aplicacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Una pila deja de funcionar cuando se agota alguno de los reactivos de su reacción redox (por ejemplo, se consume todo el metal del ánodo)."

explicacion: |
  Correcto. Sin reactivo disponible para oxidarse o reducirse, la reacción se detiene y la pila ya no genera corriente.
```

## Sección: polimeros-naturales-sinteticos (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["polimeros", "monomeros"]

respuesta: verdadero
tipo: vf

enunciado: "Un polímero es una molécula gigante formada por la repetición de un monómero."

explicacion: |
  Correcto. Los polímeros son macromoléculas formadas por la unión de muchas unidades (monómeros).
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["polimerizacion"]

respuesta: "polimerizacion"
tipo: completar
respuestas_validas:
  - "polimerizacion"
  - "polimerización"

enunciado: "El proceso de unir monómeros para formar un polímero se llama ___."

explicacion: |
  La polimerización combina los monómeros en una cadena.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["tamaño", "estructura"]

respuesta: falso
tipo: vf

enunciado: "El monómero es más grande que el polímero que forma."

explicacion: |
  Falso. El monómero es la unidad chica; el polímero es la estructura gigante que resulta de repetirlo.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["estructura", "monomeros"]

respuesta: "entre cientos y millones de monómeros repetidos"
tipo: mc
opciones_explicitas: ["entre cientos y millones de monómeros repetidos", "siempre exactamente 2 monómeros", "siempre exactamente 10 monómeros", "1 solo monómero"]

enunciado: "Un polímero puede tener..."

explicacion: |
  Los polímeros pueden llegar a tener desde cientos hasta millones de unidades repetidas.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["polimeros", "biologia"]

variables:
  datos: [["almidon", "glucosa"], ["proteinas", "aminoacidos"], ["ADN", "nucleotidos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["glucosa", "aminoacidos", "nucleotidos"]

enunciado: "¿Cuál es el monómero del polímero natural {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]} tiene como monómero: {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["proteinas", "polimeros"]

respuesta: verdadero
tipo: vf

enunciado: "Las proteínas son un ejemplo de polímero natural, con aminoácidos como monómero."

explicacion: |
  Correcto. Las proteínas son cadenas de aminoácidos unidos por enlace peptídico.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["caucho", "isopreno"]

respuesta: verdadero
tipo: vf

enunciado: "El caucho natural (látex) tiene como monómero al isopreno."

explicacion: |
  Correcto: el caucho natural es un polímero de isopreno.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["adn", "nucleotidos"]

respuesta: falso
tipo: vf

enunciado: "El ADN es un polímero de aminoácidos."

explicacion: |
  Falso. El ADN es un polímero de nucleótidos; los aminoácidos son el monómero de las proteínas.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["polimeros", "sinteticos"]

variables:
  datos: [["polietileno", "etileno"], ["PVC", "cloruro de vinilo"], ["poliestireno", "estireno"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["etileno", "cloruro de vinilo", "estireno"]

enunciado: "¿Cuál es el monómero del polímero sintético {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]} se obtiene polimerizando {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["petroleo", "sinteticos"]

respuesta: verdadero
tipo: vf

enunciado: "Los polímeros sintéticos generalmente se fabrican a partir de derivados del petróleo."

explicacion: |
  Verdadero. La mayoría de los plásticos vienen de hidrocarburos derivados del petróleo.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["nylon", "clasificacion"]

respuesta: falso
tipo: vf

enunciado: "El nylon es un polímero natural, no sintético."

explicacion: |
  Falso. El nylon es sintético, producido industrialmente.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["poliestireno", "telgopor"]

respuesta: "poliestireno"
tipo: mc
opciones_explicitas: ["poliestireno", "PVC", "nylon", "celulosa"]

enunciado: "¿Cuál de estos polímeros se usa comúnmente para fabricar telgopor?"

explicacion: |
  El poliestireno expandido es el material del telgopor.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "Las propiedades físicas de un polímero (dureza, flexibilidad) dependen de cuántos monómeros tiene la cadena y de cómo se entrelazan."

explicacion: |
  La longitud de cadena y el entrelazado determinan las propiedades mecánicas.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["polietileno", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "El mismo monómero (etileno) puede dar polietileno de baja densidad (flexible) o de alta densidad (rígido), según cómo se arme la cadena."

explicacion: |
  El grado de ramificación afecta qué tan compactamente empaquetan las cadenas, cambiando densidad y rigidez.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "basico"
  tags: ["ambiente", "degradacion"]

respuesta: falso
tipo: vf

enunciado: "Los polímeros sintéticos suelen ser fáciles de degradar naturalmente, por eso no contaminan."

explicacion: |
  Falso. Sus enlaces estables son difíciles de romper por microorganismos: persisten mucho tiempo en el ambiente.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["enlace_quimico", "ambiente"]

respuesta: "estable"
tipo: completar
respuestas_validas:
  - "estable"

enunciado: "El mismo enlace ___ que hace prácticos a los polímeros sintéticos es el que los hace persistentes en el ambiente."

explicacion: |
  La estabilidad de los enlaces da durabilidad, pero también impide su degradación biológica.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "avanzado"
  tags: ["biomoleculas", "polimeros"]

respuesta: verdadero
tipo: vf

enunciado: "Muchas biomoléculas (almidón, proteínas, ADN) son en realidad polímeros, aunque no se las llame así en el uso cotidiano."

explicacion: |
  Correcto. Todas cumplen la definición: cadenas largas de un monómero repetido.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["ambiente", "reciclaje"]

respuesta: verdadero
tipo: vf

enunciado: "El reciclaje de plásticos busca reutilizar el material del polímero, en vez de esperar a que se degrade naturalmente (lo cual puede tardar siglos)."

explicacion: |
  Correcto. Dado que se degradan muy lentamente, reciclar evita que se acumulen como basura por mucho tiempo.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "avanzado"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "El agua (H2O) es un ejemplo de polímero, porque está formada por la repetición de átomos de hidrógeno y oxígeno."

explicacion: |
  Falso. Un polímero es la repetición de un MONÓMERO (una unidad molecular completa) muchas veces, no simplemente una molécula chica con varios átomos.
```

```
metadata:
  materia: "quimica"
  tema: "polimeros_naturales_sinteticos"
  nivel: "intermedio"
  tags: ["polietileno", "hidrocarburos"]

respuesta: verdadero
tipo: vf

enunciado: "El monómero del polietileno (etileno) es también el hidrocarburo insaturado más simple de la familia de los alquenos."

explicacion: |
  Correcto. El eteno/etileno (C2H4) es el primer alqueno de la serie — ver ../hidrocarburos-alcanos-alquenos-alquinos/.
```

## Sección: presiones-parciales (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["gases", "ley_de_dalton"]

respuesta: verdadero
tipo: vf

enunciado: "La presión total de una mezcla de gases es la suma de las presiones parciales de cada componente."

explicacion: |
  Según la Ley de Dalton, la presión total de una mezcla de gases que no reaccionan entre sí es la suma de las presiones que cada gas ejercería si ocupara solo todo el volumen.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "parcial"
tipo: completar
respuestas_validas:
  - "parcial"

enunciado: "La presión que ejercería un gas si estuviera solo, ocupando todo el volumen, se llama presión ___."

explicacion: |
  Esa presión hipotética es la presión parcial del gas dentro de la mezcla.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_dalton"]

variables:
  p1: uno_de([1, 2, 3])
  p2: uno_de([1, 2])
  p3: uno_de([1, 2, 3])

respuesta: p1 + p2 + p3
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una mezcla de tres gases tiene presiones parciales P1 = {p1} atm, P2 = {p2} atm y P3 = {p3} atm. ¿Cuál es la presión total de la mezcla?"

pasos:
  - "P_total = P1 + P2 + P3"

explicacion: |
  P_total = {p1} + {p2} + {p3} atm.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Cada gas de una mezcla se comporta como si estuviera solo ocupando todo el volumen, a la misma temperatura."

explicacion: |
  Es un postulado de la Ley de Dalton para gases ideales: cada gas se comporta de forma independiente de los demás.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["fraccion_molar", "conceptos"]

respuesta: "totales"
tipo: completar
respuestas_validas:
  - "totales"

enunciado: "La fracción molar de un gas es sus moles dividido los moles ___."

explicacion: |
  La fracción molar (Xi) es el cociente entre los moles de ese componente (ni) y los moles totales de la mezcla (n_total).
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["fraccion_molar", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de todas las fracciones molares de una mezcla siempre da 1."

explicacion: |
  Como cada fracción molar es una proporción respecto al total, la suma de todas las partes siempre es 1.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["calculo", "fraccion_molar"]

variables:
  datos: [[1, 4], [2, 5], [3, 10]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0] / datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá la fracción molar de un componente con {datos[idx][0]} moles, en una mezcla de {datos[idx][1]} moles totales."

explicacion: |
  Xi = ni / n_total = {datos[idx][0]} / {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["ley_de_dalton", "presion_parcial"]

respuesta: "Pi = Xi * P_total"
tipo: mc
opciones_explicitas: ["Pi = Xi * P_total", "Pi = Xi + P_total", "Pi = Xi / P_total", "Pi = P_total / Xi"]

enunciado: "¿Cuál es la fórmula para calcular la presión parcial (Pi) de un gas en una mezcla?"

explicacion: |
  Pi = Xi × P_total: la presión parcial es la fracción molar multiplicada por la presión total.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["ley_dalton", "gases"]

variables:
  n_n2: 2
  n_o2: 1
  p_total: 3

respuesta: (n_n2 / (n_n2 + n_o2)) * p_total
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una mezcla tiene 2 moles de N2 y 1 mol de O2, con presión total de 3 atm. ¿Cuál es la presión parcial del N2?"

pasos:
  - "n_total = n_n2 + n_o2"
  - "X_N2 = n_n2 / n_total"
  - "P_N2 = X_N2 × P_total"

explicacion: |
  P_N2 = (2 / (2+1)) × 3 = (2/3) × 3 = 2 atm.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["ley_dalton", "gases"]

variables:
  n_n2: 2
  n_o2: 1
  p_total: 3

respuesta: (n_o2 / (n_n2 + n_o2)) * p_total
tipo: completar
tolerancia_abs: 0.01

enunciado: "Con la misma mezcla (2 mol de N2, 1 mol de O2, presión total 3 atm), ¿cuál es la presión parcial del O2?"

pasos:
  - "X_O2 = n_o2 / n_total"
  - "P_O2 = X_O2 × P_total"

explicacion: |
  P_O2 = (1 / (2+1)) × 3 = 1 atm.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["ley_dalton", "gases"]

respuesta: verdadero
tipo: vf

enunciado: "En la mezcla anterior (2 mol N2, 1 mol O2, 3 atm totales), la presión parcial del N2 (2 atm) es mayor que la del O2 (1 atm)."

explicacion: |
  Verdadero. Al haber más moles de N2, su fracción molar (y por lo tanto su presión parcial) es mayor.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["ley_dalton", "gases"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las presiones parciales de todos los gases de una mezcla debe dar exactamente la presión total."

explicacion: |
  Verdadero. Es la definición misma de la Ley de Dalton: P_total = P1 + P2 + ... + Pn.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["ley_de_dalton", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "Para calcular la presión parcial de un gas en una mezcla, hace falta conocer la cantidad de moles de TODOS los otros gases presentes por separado."

explicacion: |
  Falso. Alcanza con conocer los moles de ese gas y el total de moles de la mezcla (o su fracción molar) — no hace falta la composición detallada de cada uno de los demás.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["gas_ideal", "mezclas"]

respuesta: "la ecuación de estado de los gases ideales (PV=nRT)"
tipo: mc
opciones_explicitas: ["la ley de Boyle", "la ley de Charles", "la ecuación de estado de los gases ideales (PV=nRT)", "ninguna de las anteriores"]

enunciado: "En una mezcla de gases ideales, cada componente sigue su propia..."

explicacion: |
  Cada gas se comporta como si fuera el único presente, siguiendo PV=nRT con su propia presión parcial.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_dalton"]

variables:
  n_a: uno_de([2, 3, 4])
  n_b: uno_de([1, 2])
  p_total: uno_de([6, 9, 12])

respuesta: (n_a / (n_a + n_b)) * p_total
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un recipiente tiene el gas A con {n_a} moles y el gas B con {n_b} moles. Si la presión total es {p_total} atm, ¿cuál es la presión parcial del gas A?"

pasos:
  - "n_total = n_a + n_b"
  - "X_A = n_a / n_total"
  - "P_A = X_A × P_total"

explicacion: |
  P_A = ({n_a} / ({n_a} + {n_b})) × {p_total}.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["simbolos", "fraccion_molar"]

respuesta: "X"
tipo: completar
respuestas_validas:
  - "X"

enunciado: "El símbolo típico para representar la fracción molar de un componente es la letra ___ (en mayúscula)."

explicacion: |
  La fracción molar se representa comúnmente con "X" (por ejemplo, X_A para el componente A).
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["conceptos", "ley_dalton"]

respuesta: verdadero
tipo: vf

enunciado: "A igual presión total, el gas con más moles en la mezcla tiene la presión parcial más alta."

explicacion: |
  Verdadero. La presión parcial es proporcional a la fracción molar, así que más moles de un gas implican mayor presión parcial de ese gas.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["aplicacion", "aire"]

respuesta: "N2 (nitrógeno), porque es el componente mayoritario del aire"
tipo: mc
opciones_explicitas: ["N2 (nitrógeno), porque es el componente mayoritario del aire", "O2 (oxígeno), porque es el que respiramos", "CO2, porque es el más pesado", "Todos tienen la misma presión parcial"]

enunciado: "En el aire (mezcla de N2, O2, CO2 y otros gases), ¿cuál gas tiene la presión parcial más alta?"

explicacion: |
  El aire es ~78% N2 en moles, así que su fracción molar (y su presión parcial) es la más alta de todos los componentes.
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Un gas que está presente en una mezcla, aunque sea en muy poca cantidad, tiene presión parcial igual a cero."

explicacion: |
  Falso. Mientras haya al menos una fracción molar mayor que cero de ese gas, su presión parcial también es mayor que cero (aunque sea chica).
```

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["conceptos", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos gases en una mezcla tienen la misma fracción molar, entonces tienen la misma presión parcial."

explicacion: |
  Verdadero. Como Pi = Xi × P_total, si Xi es igual para dos gases, Pi también es igual (mismo P_total para toda la mezcla).
```

## Sección: superconductividad (24 preguntas)

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["resistencia", "definicion"]

respuesta: 0
tipo: input

enunciado: "¿Cuál es el valor numérico de la resistencia eléctrica (en ohmios) de un material en estado superconductor ideal?"

explicacion: |
  La definición fundamental de superconductividad es la ausencia total de resistencia eléctrica. Por lo tanto, el valor es 0.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["historia", "mercurio"]

variables:
  tc_mercurio: 4.2

respuesta: 4.2
tipo: input

enunciado: "El primer material en el que se observó superconductividad fue el mercurio. ¿A qué temperatura (en Kelvin) ocurre esta transición?"

explicacion: |
  Heike Kamerlingh Onnes descubrió la superconductividad en el mercurio a 4.2 K en 1911.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["mecanismo", "cooper"]

respuesta: verdadero
tipo: vf

enunciado: "La superconductividad convencional se explica mediante la formación de pares de Cooper, donde dos electrones se acoplan a pesar de su repulsión coulombiana."

explicacion: |
  Verdadero. La interacción con las vibraciones de la red cristalina (fonones) permite esta atracción efectiva que forma los pares de Cooper.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["conversión", "temperatura"]

variables:
  tc_k: random(10, 20)

respuesta: "{redondear(tc_k - 273.15, 2)}"
tipo: input

enunciado: "Si un superconductor tiene una temperatura crítica de {tc_k} K, ¿cuál es esa temperatura aproximada en grados Celsius?"

explicacion: |
  Para convertir Kelvin a Celsius se resta 273.15. Ejemplo: 15 K - 273.15 = -258.15 °C.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["clasificacion", "ceramica"]

respuesta: verdadero
tipo: vf

enunciado: "Los superconductores de alta temperatura suelen ser cerámicas basadas en óxidos de cobre (cupratos)."

explicacion: |
  Verdadero. A diferencia de los metales puros, los primeros superconductores de alta Tc descubiertos eran cerámicas complejas.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["magnetismo", "meissner"]

respuesta: falso
tipo: vf

enunciado: "Un superconductor perfecto permite que el campo magnético interno sea igual al campo magnético externo aplicado."

explicacion: |
  Falso. Esto describe un material diamagnético débil o paramagnético. Un superconductor exhibe el efecto Meissner, expulsando completamente el campo magnético de su interior (diamagnetismo perfecto).
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["fisica", "energia"]

variables:
  masa: random(1, 5)
  velocidad: random(10, 50)

respuesta: "{0.5 * masa * velocidad * velocidad}"
tipo: input

enunciado: "Si un par de Cooper tuviera una masa efectiva equivalente a {masa} unidades y se moviera a {velocidad} unidades de velocidad, ¿cuál sería su energía cinética clásica?"

explicacion: |
  La energía cinética clásica es $E_k = \frac{1}{2}mv^2$. Sustituyendo los valores dados.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["comportamiento", "grafica"]

respuesta: verdadero
tipo: vf

enunciado: "En un conductor normal, la resistencia eléctrica disminuye al bajar la temperatura, pero nunca llega a cero antes de la superconductividad."

explicacion: |
  Verdadero. En metales normales, la resistencia baja progresivamente, pero la transición abrupta a cero solo ocurre si el material es superconductor.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["limites", "corriente"]

respuesta: falso
tipo: vf

enunciado: "La superconductividad puede mantenerse indefinidamente incluso si la corriente que pasa por el material supera la densidad de corriente crítica."

explicacion: |
  Falso. Si la corriente, el campo magnético o la temperatura superan sus valores críticos ($J_c$, $H_c$, $T_c$), el material vuelve al estado normal (resistivo).
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["clasificacion", "tipo1"]

respuesta: verdadero
tipo: vf

enunciado: "Los superconductores de tipo I expulsan completamente el campo magnético hasta un valor crítico $H_c$, momento en el cual pierden súbitamente la superconductividad."

explicacion: |
  Verdadero. Esta transición es abrupta y característica de los superconductores tipo I (generalmente metales puros).
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["teoria", "cooper"]

respuesta: verdadero
tipo: vf

enunciado: "La longitud de coherencia define la distancia sobre la cual la función de onda de los pares de Cooper varía significativamente."

explicacion: |
  Verdadero. Es un parámetro clave que, junto con la longitud de penetración de London, determina si un superconductor es de tipo I o II.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["aplicacion", "medicina"]

respuesta: verdadero
tipo: vf

enunciado: "Los electroimanes superconductores son esenciales en los equipos de Resonancia Magnética (MRI) por su capacidad de generar campos magnéticos intensos sin disipación de energía."

explicacion: |
  Verdadero. Permiten corrientes muy altas sin calentamiento óhmico, generando campos estables y potentes.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["fisica", "energia"]

variables:
  resistencia: 0

respuesta: 0
tipo: input

enunciado: "Si un cable superconductor transporta una corriente de 100 A, ¿cuánta energía se disipa en forma de calor por efecto Joule en 1 segundo?"

explicacion: |
  La potencia disipada es $P = I^2 R$. Como $R=0$ en estado superconductor, la disipación es 0.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["criogenia", "nitrogeno"]

respuesta: verdadero
tipo: vf

enunciado: "El uso de nitrógeno líquido permite enfriar superconductores de alta temperatura, reduciendo significativamente el costo operativo comparado con el helio líquido."

explicacion: |
  Verdadero. El nitrógeno líquido hierve a 77 K, lo cual es suficiente para muchos cupratos, y es mucho más barato y abundante que el helio.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["teoria", "bcs"]

respuesta: verdadero
tipo: vf

enunciado: "La teoría BCS (Bardeen-Cooper-Schrieffer) explica la superconductividad convencional mediante la interacción electrón-fonón."

explicacion: |
  Verdadero. Esta teoría ganó el Nobel y describe cómo los fonones median la atracción entre electrones formando pares de Cooper.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["teoria", "gap"]

respuesta: verdadero
tipo: vf

enunciado: "Existe una 'brecha de energía' (energy gap) entre el estado fundamental superconductor y los estados excitados, lo que protege a los pares de Cooper de dispersiones menores."

explicacion: |
  Verdadero. Esta brecha es necesaria para romper los pares de Cooper y volver al estado normal.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["materiales", "niobio"]

respuesta: verdadero
tipo: vf

enunciado: "El niobio y sus aleaciones (como NbTi) son ampliamente utilizados en la fabricación de imanes superconductores comerciales."

explicacion: |
  Verdadero. El niobio tiene una $T_c$ relativamente alta (9.2 K) y es un superconductor de tipo II, ideal para aplicaciones de alto campo.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["magnetismo", "diamagnetismo"]

respuesta: verdadero
tipo: vf

enunciado: "La expulsión del campo magnético implica que la susceptibilidad magnética de un superconductor es -1 (en unidades SI)."

explicacion: |
  Verdadero. $\chi = -1$ indica diamagnetismo perfecto, que es la característica definitoria del efecto Meissner.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["futuro", "investigacion"]

respuesta: falso
tipo: vf

enunciado: "Actualmente existen superconductores comerciales estables que operan a temperatura ambiente y presión ambiente de manera rutinaria."

explicacion: |
  Falso. Aunque hay investigaciones prometedoras (hidruros a alta presión), no hay superconductores a temperatura ambiente y presión ambiente disponibles comercialmente.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["fisica", "vortices"]

respuesta: verdadero
tipo: vf

enunciado: "En el estado mixto de un superconductor de tipo II, el campo magnético penetra en forma de cuantos de flujo discretos llamados vórtices."

explicacion: |
  Verdadero. Cada vórtice lleva un cuanto de flujo magnético $\Phi_0 = h/2e$.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "basico"
  tags: ["aplicacion", "transporte"]

respuesta: verdadero
tipo: vf

enunciado: "Los trenes de levitación magnética (Maglev) utilizan superconductores para lograr la levitación y reducir la fricción."

explicacion: |
  Verdadero. La levitación se logra mediante la interacción entre los imanes superconductores y los imanes en la vía.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["dispositivo", "squid"]

respuesta: verdadero
tipo: vf

enunciado: "Un SQUID (Dispositivo Superconductor de Interferencia Cuántica) es un sensor extremadamente sensible de campos magnéticos basado en uniones Josephson."

explicacion: |
  Verdadero. Se utiliza en magnetoeleencefalografía (MEG) y otras mediciones de alta precisión.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "avanzado"
  tags: ["efecto", "josephson"]

respuesta: verdadero
tipo: vf

enunciado: "El efecto Josephson permite el paso de corriente entre dos superconductores separados por un aislante delgado sin aplicar voltaje."

explicacion: |
  Verdadero. Es un efecto túnel cuántico de pares de Cooper y es la base de los SQUIDs y los qubits superconductores.
```

```
metadata:
  materia: "Química"
  tema: "superconductividad"
  nivel: "intermedio"
  tags: ["ingenieria", "costo"]

respuesta: verdadero
tipo: vf

enunciado: "Una de las principales barreras para la adopción masiva de la superconductividad es el costo y la complejidad de los sistemas de refrigeración criogénica."

explicacion: |
  Verdadero. Mantener temperaturas criogénicas requiere infraestructura costosa y compleja, lo que limita su uso a aplicaciones de alto valor.
```

## Sección: termoquimica (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["calor", "entalpia"]

respuesta: "exotermica"
tipo: mc
opciones_explicitas: ["exotermica", "endotermica", "neutra", "isotermica"]

enunciado: "Una reacción que LIBERA calor al entorno se llama..."

explicacion: |
  Las reacciones exotérmicas liberan energía en forma de calor hacia el entorno.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["calor", "entalpia"]

respuesta: "endotermica"
tipo: mc
opciones_explicitas: ["endotermica", "exotermica", "neutra", "isotermica"]

enunciado: "Una reacción que ABSORBE calor del entorno se llama..."

explicacion: |
  Las reacciones endotérmicas absorben energía del entorno para llevarse a cabo.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["entalpia", "delta_h"]

respuesta: verdadero
tipo: vf

enunciado: "Una reacción exotérmica tiene ΔH negativo."

explicacion: |
  El sistema pierde energía en una exotérmica, así que la entalpía final es menor que la inicial: ΔH < 0.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["entalpia", "delta_h"]

respuesta: falso
tipo: vf

enunciado: "Una reacción endotérmica tiene ΔH negativo."

explicacion: |
  Falso. En una endotérmica el sistema absorbe calor, así que ΔH es positivo.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["ejemplos", "entalpia"]

variables:
  escenarios: [["combustion", "exotermica"], ["fotosintesis", "endotermica"], ["neutralizacion acido-base tipica", "exotermica"]]
  idx: uno_de([0, 1, 2])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["exotermica", "endotermica"]

enunciado: "El proceso de {escenarios[idx][0]} es de tipo..."

explicacion: |
  El tipo de reacción para {escenarios[idx][0]} es {escenarios[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["entalpia", "reaccion"]

respuesta: "reactivos"
tipo: completar
respuestas_validas:
  - "reactivos"

enunciado: "La fórmula de la entalpía de reacción es ΔH_reacción = ΔH_productos - ΔH ___."

explicacion: |
  La entalpía de reacción es la diferencia entre la entalpía de los productos y la de los reactivos.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["entalpia_formacion", "elementos"]

respuesta: verdadero
tipo: vf

enunciado: "La entalpía de formación de un elemento en su estado más estable (como O2 gas) es 0 por definición."

explicacion: |
  Por convención, los elementos en su estado estándar tienen entalpía de formación cero — son el punto de referencia.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["calculo", "entalpia"]

variables:
  dh_productos: uno_de([-100, -50, 0, 50])
  dh_reactivos: uno_de([-80, -30, 20, 40])

respuesta: dh_productos - dh_reactivos
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá la entalpía de reacción si la entalpía de los productos es {dh_productos} kJ/mol y la de los reactivos es {dh_reactivos} kJ/mol."

pasos:
  - "ΔH_reacción = ΔH_productos - ΔH_reactivos"

explicacion: |
  {dh_productos} - {dh_reactivos} kJ/mol.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["signo", "calor"]

respuesta: verdadero
tipo: vf

enunciado: "El signo de ΔH indica si el sistema libera o absorbe calor, no cuánto calor hay en total."

explicacion: |
  El signo marca la dirección (exotérmico/endotérmico); el valor absoluto es la magnitud del cambio.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["ley_de_hess", "entalpia"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de Hess dice que el ΔH total de una reacción no depende del camino seguido, sólo de los estados inicial y final."

explicacion: |
  Correcto. La entalpía es una función de estado: sólo depende de las condiciones iniciales y finales.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["ley_de_hess", "calculo"]

variables:
  datos: [[10, -5], [20, -10], [30, 15]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0] + datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una reacción A→C se puede escribir como A→B (ΔH1 = {datos[idx][0]} kJ) y B→C (ΔH2 = {datos[idx][1]} kJ). ¿Cuál es el ΔH total de A→C?"

pasos:
  - "ΔH_total = ΔH1 + ΔH2"

explicacion: |
  Según la Ley de Hess, el ΔH global es la suma de las etapas: {datos[idx][0]} + {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["ley_de_hess", "aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿La ley de Hess permite calcular el ΔH de una reacción difícil de medir directamente, combinando otras reacciones conocidas?"

explicacion: |
  Verdadero. Es la aplicación práctica principal de la ley de Hess.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["ley_de_hess", "conceptos"]

respuesta: "estado"
tipo: completar
respuestas_validas:
  - "estado"

enunciado: "La propiedad que hace que ΔH dependa sólo de los estados inicial y final, y no del camino, se llama función de ___."

explicacion: |
  La entalpía es una función de estado: depende únicamente de las condiciones inicial y final del sistema.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["diagramas_energia", "exotermica"]

respuesta: verdadero
tipo: vf

enunciado: "En una reacción exotérmica, el nivel de energía de los productos es más bajo que el de los reactivos."

explicacion: |
  El sistema libera energía, así que la entalpía de los productos queda por debajo de la de los reactivos (ΔH < 0).
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["diagramas_energia", "endotermica"]

respuesta: falso
tipo: vf

enunciado: "En una reacción endotérmica, el nivel de energía de los productos es más bajo que el de los reactivos."

explicacion: |
  Falso. El sistema absorbe energía, así que los productos quedan en un nivel más alto (ΔH > 0).
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["entalpia", "diagramas_energia"]

respuesta: "el calor liberado"
tipo: mc
opciones_explicitas: ["el calor liberado", "el calor absorbido", "la energía de activación", "la velocidad de reacción"]

enunciado: "En un diagrama de energía de una reacción exotérmica, la diferencia de energía entre reactivos y productos representa..."

explicacion: |
  Esa diferencia de entalpía (ΔH) es la energía que sale del sistema como calor.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "intermedio"
  tags: ["energia_activacion", "cinetica"]

respuesta: falso
tipo: vf

enunciado: "La energía de activación (la 'joroba' del diagrama de energía) es un concepto propio de la termoquímica, no de la cinética de reacción."

explicacion: |
  Falso. La energía de activación es tema de cinética química: define la barrera energética que determina la velocidad de la reacción.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["aplicacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Tocar el exterior de un vaso donde se disolvió una sal endotérmica se siente frío, porque la reacción absorbió calor del entorno (incluyendo el vaso)."

explicacion: |
  Correcto. Una disolución endotérmica saca energía del entorno inmediato, lo que se percibe como una bajada de temperatura.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "avanzado"
  tags: ["entalpia", "coeficientes"]

respuesta: verdadero
tipo: vf

enunciado: "Al calcular la entalpía de reacción a partir de entalpías de formación, hay que multiplicar cada ΔH_f por el coeficiente de esa sustancia en la ecuación balanceada."

explicacion: |
  Correcto. Si hay 2 moles de un producto, su contribución es 2 × ΔH_f, no sólo ΔH_f una vez.
```

```
metadata:
  materia: "quimica"
  tema: "termoquimica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "El ΔH de una reacción es una propiedad fija que no depende de cuántos moles reaccionen."

explicacion: |
  Falso. El ΔH tabulado corresponde a la reacción tal como está balanceada (con esos coeficientes); si reacciona el doble de moles, el calor total intercambiado también se duplica.
```

## Sección: energia-libre-gibbs (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "entropia"]

respuesta: "entropia"
tipo: completar
respuestas_validas:
  - "entropía"
  - "entropia"

enunciado: "La medida del desorden o dispersión de energía de un sistema se llama ___."

explicacion: |
  La entropía (S) mide el grado de desorden de un sistema.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "entropia", "soluciones"]

respuesta: verdadero
tipo: vf

enunciado: "Si un sólido se disuelve en un líquido, la entropía del sistema aumenta."

explicacion: |
  Al disolverse, las partículas pasan de una estructura cristalina ordenada a una distribución más desordenada: aumenta la entropía.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "segunda_ley"]

respuesta: falso
tipo: vf

enunciado: "El universo en conjunto tiende siempre a DISMINUIR su entropía."

explicacion: |
  Falso. Según la segunda ley de la termodinámica, la entropía total del universo siempre tiende a AUMENTAR.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entropia", "espontaneidad"]

respuesta: falso
tipo: vf

enunciado: "Cada reacción individual está obligada a aumentar su propia entropía."

explicacion: |
  Falso. Una reacción puede disminuir su propia entropía (ej.: la formación de hielo) siempre que el entorno compense con un aumento mayor, de modo que la entropía TOTAL del universo aumente.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "calculo"]

variables:
  datos: [[-40, 100, 0.1], [-20, 200, 0.2], [20, 300, 0.1], [40, 100, 0.2]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][0] - datos[idx][1] * datos[idx][2]
tipo: completar
tolerancia_abs: 0.5

enunciado: "Calculá ΔG para una reacción con ΔH = {datos[idx][0]} kJ/mol, T = {datos[idx][1]} K y ΔS = {datos[idx][2]} kJ/(K·mol)."

pasos:
  - "ΔG = ΔH - T × ΔS"

explicacion: |
  ΔG = {datos[idx][0]} - ({datos[idx][1]} × {datos[idx][2]}).
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "espontaneidad"]

respuesta: "espontanea"
tipo: mc
opciones_explicitas: ["espontanea", "no espontanea", "esta en equilibrio", "imposible"]

enunciado: "Si ΔG es negativo, la reacción es..."

explicacion: |
  ΔG < 0 indica que el proceso es termodinámicamente espontáneo.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "espontaneidad"]

respuesta: "no espontanea"
tipo: mc
opciones_explicitas: ["no espontanea", "espontanea", "esta en equilibrio", "imposible"]

enunciado: "Si ΔG es positivo, la reacción es..."

explicacion: |
  ΔG > 0 indica que la reacción directa no es espontánea (la inversa sí lo sería).
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Si ΔG es igual a 0, el sistema está en equilibrio."

explicacion: |
  Cuando ΔG = 0, no hay tendencia neta hacia reactivos ni hacia productos: equilibrio.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: verdadero
tipo: vf

enunciado: "Si una reacción tiene ΔH negativo (libera calor) y ΔS positivo (más desorden), es espontánea a cualquier temperatura."

explicacion: |
  ΔG = ΔH - TΔS: con ΔH negativo y -TΔS también negativo (porque ΔS>0), la suma siempre da ΔG < 0, sin importar T.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: verdadero
tipo: vf

enunciado: "Si una reacción tiene ΔH positivo (absorbe calor) y ΔS negativo (más orden), nunca es espontánea."

explicacion: |
  ΔH positivo y -TΔS también positivo (porque ΔS<0): la suma siempre da ΔG > 0, para cualquier temperatura.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: "solo a temperaturas bajas"
tipo: mc
opciones_explicitas: ["solo a temperaturas altas", "solo a temperaturas bajas", "siempre", "nunca"]

enunciado: "Para una reacción con ΔH < 0 y ΔS < 0, ¿cuándo es espontánea?"

explicacion: |
  El término -TΔS es positivo (compite contra el ΔH negativo). A temperaturas bajas ese término pesa poco y gana el ΔH negativo: ΔG < 0.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "entalpia", "entropia"]

respuesta: "solo a temperaturas altas"
tipo: mc
opciones_explicitas: ["solo a temperaturas altas", "solo a temperaturas bajas", "siempre", "nunca"]

enunciado: "Para una reacción con ΔH > 0 y ΔS > 0, ¿cuándo es espontánea?"

explicacion: |
  El término -TΔS es negativo y crece con la temperatura. A temperaturas altas ese término supera al ΔH positivo: ΔG < 0.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["termodinamica", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más negativo es el ΔG° estándar, mayor es la constante de equilibrio Kc de esa reacción."

explicacion: |
  ΔG° = -RT×ln(Kc): un ΔG° muy negativo implica un ln(Kc) grande y positivo, entonces Kc es grande.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["equilibrio", "termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "En el equilibrio químico, ΔG es igual a 0."

explicacion: |
  En el equilibrio no hay tendencia espontánea al cambio en ninguna dirección: ΔG = 0.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica"]

respuesta: "S"
tipo: completar
respuestas_validas:
  - "S"
  - "entropia"

enunciado: "La ecuación de Gibbs es ΔG = ΔH - T × Δ___."

explicacion: |
  ΔG = ΔH - T×ΔS, donde ΔS es el cambio de entropía del sistema.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "basico"
  tags: ["termodinamica", "unidades"]

respuesta: verdadero
tipo: vf

enunciado: "La temperatura T en la ecuación de Gibbs debe expresarse en Kelvin."

explicacion: |
  Igual que en las otras fórmulas termodinámicas de este tronco, T siempre va en la escala absoluta.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "avanzado"
  tags: ["comparacion", "espontaneidad"]

respuesta: "la reacción con ΔG = -50 kJ/mol"
tipo: mc
opciones_explicitas: ["la reacción con ΔG = -50 kJ/mol", "la reacción con ΔG = +10 kJ/mol", "ambas son igual de espontáneas", "ninguna es espontánea"]

enunciado: "Entre dos reacciones, una con ΔG = -50 kJ/mol y otra con ΔG = +10 kJ/mol, ¿cuál es espontánea?"

explicacion: |
  Sólo la que tiene ΔG negativo (-50 kJ/mol) es espontánea. La de +10 kJ/mol necesita energía externa para ocurrir.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Una reacción exotérmica (ΔH negativo) siempre es espontánea, sin importar el valor de ΔS."

explicacion: |
  Falso. Si ΔS también es negativo, a temperaturas muy altas el término -TΔS puede volverse más positivo que lo que ΔH aporta de negativo, haciendo ΔG > 0.
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "avanzado"
  tags: ["conceptos", "reversibilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si una reacción directa tiene ΔG > 0 (no espontánea), la reacción inversa tiene ΔG < 0 (sí es espontánea)."

explicacion: |
  Verdadero. El ΔG de la reacción inversa es el opuesto exacto del de la reacción directa (mismo valor absoluto, signo contrario).
```

```
metadata:
  materia: "quimica"
  tema: "energia_libre_gibbs"
  nivel: "avanzado"
  tags: ["conceptos", "cinetica"]

respuesta: falso
tipo: vf

enunciado: "Una reacción espontánea (ΔG < 0) siempre ocurre rápido, en la práctica."

explicacion: |
  Falso. Espontaneidad (termodinámica) y velocidad (cinética) son cosas distintas — ver ../cinetica-reaccion/. La oxidación del hierro es espontánea pero muy lenta.
```

