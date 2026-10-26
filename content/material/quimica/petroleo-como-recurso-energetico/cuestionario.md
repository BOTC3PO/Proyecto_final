# Quimica — petroleo como recurso energetico (cuestionario, 40 preguntas VBLang)

> Tema: `quimica/petroleo-como-recurso-energetico`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

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

### 2 — pregunta 2

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

### 3 — pregunta 3

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

### 4 — pregunta 4

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

### 5 — pregunta 5

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

### 6 — pregunta 6

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

### 7 — pregunta 7

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

### 8 — pregunta 8

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

### 9 — pregunta 9

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

### 10 — pregunta 10

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

### 11 — pregunta 11

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

### 12 — pregunta 12

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

### 13 — pregunta 13

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

### 14 — pregunta 14

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

### 15 — pregunta 15

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

### 16 — pregunta 16

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

### 17 — pregunta 17

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

### 18 — pregunta 18

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

### 19 — pregunta 19

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

### 20 — pregunta 20

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

### 21 — pregunta 21

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

### 22 — pregunta 22

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

### 23 — pregunta 23

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

### 24 — pregunta 24

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

### 25 — pregunta 25

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

### 26 — pregunta 26

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

### 27 — pregunta 27

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

### 28 — pregunta 28

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

### 29 — pregunta 29

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

### 30 — pregunta 30

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

### 31 — pregunta 31

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

### 32 — pregunta 32

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

### 33 — pregunta 33

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

### 34 — pregunta 34

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

### 35 — pregunta 35

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

### 36 — pregunta 36

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

### 37 — pregunta 37

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

### 38 — pregunta 38

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

### 39 — pregunta 39

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

### 40 — pregunta 40

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
