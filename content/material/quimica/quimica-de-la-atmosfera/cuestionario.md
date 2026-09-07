# Quimica — quimica de la atmosfera (cuestionario, 25 preguntas VBLang)

> Tema: `quimica/quimica-de-la-atmosfera`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "estratosfera", "radiacion_uv"]

variables:
  funcion: uno_de(["absorbe", "filtra"])
  tipo_radiacion: "ultravioleta"

respuesta: "{funcion} la radiación {tipo_radiacion}"
tipo: completar

enunciado: "En la estratosfera, la capa de ozono tiene la función principal de {funcion} la radiación {tipo_radiacion} del sol."

explicacion: |
  El ozono estratosférico actúa como un escudo natural absorbiendo la mayor parte de la radiación ultravioleta (UV) dañina, protegiendo a los seres vivos de sus efectos mutagénicos.
```

### 2 — pregunta 2

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["lluvia_acida", "so2", "combustibles_fosiles"]

variables:
  gas: "SO2"
  nombre: "dióxido de azufre"

respuesta: "{nombre}"
tipo: completar

enunciado: "Uno de los principales precursores de la lluvia ácida, emitido por la quema de combustibles fósiles que contienen impurezas de azufre, es el {nombre} ({gas})."

explicacion: |
  El dióxido de azufre ($SO_2$) reacciona con el agua y el oxígeno atmosférico para formar ácido sulfúrico ($H_2SO_4$), principal componente de la lluvia ácida.
```

### 3 — pregunta 3

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "acido_sulfurico"]

variables:
  formula: "H2SO4"

respuesta: "{formula}"
tipo: input

enunciado: "Escribe la fórmula química del ácido fuerte formado cuando el dióxido de azufre reacciona con el vapor de agua y el oxígeno en la atmósfera."

explicacion: |
  La reacción del $SO_2$ conduce a la formación de ácido sulfúrico ($H_2SO_4$), que al precipitar acidifica los suelos y cuerpos de agua.
```

### 4 — pregunta 4

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["esmog", "fotoquimico", "luz_solar"]

variables:
  energia: "radiación ultravioleta"

respuesta: "{energia}"
tipo: completar

enunciado: "El esmog fotoquímico se forma cuando los óxidos de nitrógeno y los compuestos orgánicos volátiles (COV) reaccionan en presencia de {energia}."

explicacion: |
  El término "fotoquímico" indica que la luz solar (específicamente la radiación UV) actúa como catalizador o fuente de energía para impulsar estas reacciones.
```

### 5 — pregunta 5

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["esmog", "nox", "cov"]

variables:
  gas1: "NOx"
  gas2: "COV"
  nombre1: "óxidos de nitrógeno"
  nombre2: "compuestos orgánicos volátiles"

respuesta: "{nombre1} y {nombre2}"
tipo: completar

enunciado: "Los dos grupos principales de contaminantes que interactúan para formar el esmog fotoquímico son los {nombre1} y los {nombre2}."

explicacion: |
  La interacción entre los óxidos de nitrógeno ($NO_x$) emitidos por vehículos e industria, y los compuestos orgánicos volátiles (COV), en presencia de luz solar, genera esmog.
```

### 6 — pregunta 6

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "aluminio", "toxicidad"]

variables:
  metal: "aluminio"

respuesta: "{metal}"
tipo: input

enunciado: "La acidificación de los suelos causada por la lluvia ácida puede liberar metales pesados. ¿Qué metal, comúnmente presente en arcillas, se vuelve soluble y tóxico para las plantas?"

explicacion: |
  El aluminio ($Al$) es liberado de los minerales del suelo al bajar el pH. En forma soluble, es tóxico para las raíces de las plantas y la vida acuática.
```

### 7 — pregunta 7

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "paradoja", "ubicacion"]

variables:
  capa_buena: "estratosfera"
  capa_mala: "troposfera"

respuesta: "{capa_buena} y {capa_mala}"
tipo: completar

enunciado: "El ozono es beneficioso en la {capa_buena}, pero actúa como contaminante en la {capa_mala}."

explicacion: |
  Esta es la paradoja del ozono: protege de la radiación UV arriba (estratosfera) pero irrita los pulmones abajo (troposfera).
```

### 8 — pregunta 8

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "acido_nitrico"]

variables:
  formula: "HNO3"

respuesta: "{formula}"
tipo: input

enunciado: "Además del ácido sulfúrico, la lluvia ácida contiene ácido nítrico. Escribe su fórmula química."

explicacion: |
  El ácido nítrico ($HNO_3$) se forma a partir de los óxidos de nitrógeno ($NO_x$) que reaccionan con el agua atmosférica.
```

### 9 — pregunta 9

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["esmog", "urbano", "densidad"]

variables:
  lugar: "áreas urbanas"

respuesta: "{lugar}"
tipo: input

enunciado: "El esmog fotoquímico es particularmente relevante y frecuente en {lugar} debido a la alta densidad vehicular y emisiones industriales."

explicacion: |
  La concentración de vehículos y la topografía de muchas ciudades favorecen la acumulación de los precursores necesarios para el esmog.
```

### 10 — pregunta 10

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "oxigeno", "alotropia"]

variables:
  nombre: "alótropos"

respuesta: "{nombre}"
tipo: input

enunciado: "El oxígeno molecular ($O_2$) y el ozono ($O_3$) son {nombre} del elemento oxígeno."

explicacion: |
  Son formas alotrópicas, es decir, distintas estructuras moleculares del mismo elemento químico con propiedades diferentes.
```

### 11 — pregunta 11

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "ecosistemas_acuaticos"]

variables:
  efecto: "acidificar"

respuesta: "{efecto}"
tipo: input

enunciado: "Al precipitar, los ácidos formados en la lluvia ácida tienen la capacidad de {efecto} los cuerpos de agua, poniendo en riesgo la vida acuática."

explicacion: |
  La bajada del pH del agua mata peces, anfibios y altera la cadena alimentaria al liberar metales tóxicos como el aluminio.
```

### 12 — pregunta 12

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["esmog", "producto"]

variables:
  producto: "ozono troposférico"

respuesta: "{producto}"
tipo: input

enunciado: "Una de las principales consecuencias de la reacción fotoquímica entre $NO_x$ y COV es la generación de {producto}."

explicacion: |
  El esmog fotoquímico se caracteriza por altos niveles de ozono a nivel del suelo, a diferencia del ozono estratosférico protector.
```

### 13 — pregunta 13

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["nox", "combustion", "temperatura"]

variables:
  fuente: "vehículos"

respuesta: "{fuente}"
tipo: input

enunciado: "Los óxidos de nitrógeno ($NO_x$) se generan principalmente por la combustión a alta temperatura en {fuente} e industrias."

explicacion: |
  El nitrógeno del aire reacciona con el oxígeno a altas temperaturas (motores de combustión interna), formando $NO$ y $NO_2$.
```

### 14 — pregunta 14

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "propiedades_quimicas"]

variables:
  propiedad: "inestable"

respuesta: "{propiedad}"
tipo: input

enunciado: "A diferencia del $O_2$, el ozono ($O_3$) es un gas químicamente {propiedad} y altamente reactivo."

explicacion: |
  Su inestabilidad le permite actuar como un fuerte agente oxidante, lo que explica su toxicidad en bajas altitudes y su capacidad de absorber UV en altas altitudes.
```

### 15 — pregunta 15

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "metales_pesados"]

variables:
  categoria: "metales pesados"

respuesta: "{categoria}"
tipo: input

enunciado: "La lluvia ácida libera de los suelos y sedimentos {categoria} que son tóxicos para la vida terrestre y acuática."

explicacion: |
  Entre ellos destaca el aluminio, pero también pueden movilizarse plomo, mercurio y otros dependiendo de la geología local.
```

### 16 — pregunta 16

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "proteccion_biologica"]

variables:
  proteccion: "escudo natural"

respuesta: "{proteccion}"
tipo: input

enunciado: "La capa de ozono actúa como un {proteccion} natural contra la radiación ultravioleta solar."

explicacion: |
  Sin esta capa, la radiación UV alcanzaría la superficie en niveles que causarían daños masivos al ADN de los organismos vivos.
```

### 17 — pregunta 17

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["lluvia_acida", "precipitacion"]

variables:
  forma: "ácidos fuertes"

respuesta: "{forma}"
tipo: input

enunciado: "Los óxidos de nitrógeno y azufre reaccionan con el vapor de agua para formar {forma} que luego precipitan."

explicacion: |
  Se forman principalmente ácido nítrico ($HNO_3$) y ácido sulfúrico ($H_2SO_4$), que son ácidos fuertes que bajan drásticamente el pH de la lluvia.
```

### 18 — pregunta 18

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["esmog", "cov"]

variables:
  siglas: "COV"
  nombre: "compuestos orgánicos volátiles"

respuesta: "{nombre}"
tipo: input

enunciado: "Las siglas COV se refieren a los {nombre}, precursoes clave del esmog."

explicacion: |
  Son hidrocarburos y otros compuestos orgánicos que se evaporan fácilmente a temperatura ambiente, provenientes de combustibles, disolventes y vegetación.
```

### 19 — pregunta 19

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "formula"]

variables:
  formula: "O3"

respuesta: "{formula}"
tipo: input

enunciado: "Escribe la fórmula molecular del ozono."

explicacion: |
  El ozono está compuesto por tres átomos de oxígeno, por lo que su fórmula es $O_3$.
```

### 20 — pregunta 20

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "transporte_atmosferico"]

variables:
  alcance: "distantes"

respuesta: "{alcance}"
tipo: input

enunciado: "La lluvia ácida puede tener consecuencias devastadoras en ecosistemas {alcance} a la fuente de emisión de contaminantes."

explicacion: |
  Los vientos transportan los gases ($SO_2$, $NO_x$) a grandes distancias antes de que precipiten, haciendo que la contaminación sea un problema transfronterizo.
```

### 21 — pregunta 21

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["esmog", "salud"]

variables:
  organo: "pulmones"

respuesta: "{organo}"
tipo: input

enunciado: "El ozono troposférico presente en el esmog irrita principalmente los {organo} de las personas."

explicacion: |
  Al ser un oxidante fuerte, daña el tejido pulmonar, causando tos, dolor de garganta y agravando el asma.
```

### 22 — pregunta 22

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["definicion", "reactor"]

variables:
  concepto: "reactor químico"

respuesta: "{concepto}"
tipo: input

enunciado: "La atmósfera puede ser conceptualizada como un gigante {concepto} donde ocurren reacciones constantes."

explicacion: |
  Es un sistema dinámico donde gases, partículas y radiación interactúan químicamente, determinando la calidad del aire y el clima.
```

### 23 — pregunta 23

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["lluvia_acida", "nox"]

variables:
  nombre: "óxidos de nitrógeno"

respuesta: "{nombre}"
tipo: input

enunciado: "Los {nombre} ($NO_x$) son emitidos por la combustión y contribuyen a la formación de lluvia ácida."

explicacion: |
  Incluyen principalmente monóxido de nitrógeno ($NO$) y dióxido de nitrógeno ($NO_2$), que son precursores del ácido nítrico.
```

### 24 — pregunta 24

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "intermedio"
  tags: ["esmog", "catalizador"]

variables:
  rol: "catalizador"

respuesta: "{rol}"
tipo: input

enunciado: "En la formación del esmog fotoquímico, la luz solar actúa como {rol} de las transformaciones químicas."

explicacion: |
  Proporciona la energía necesaria (fotones UV) para romper enlaces en las moléculas precursoras e iniciar la cadena de reacciones.
```

### 25 — pregunta 25

```
metadata:
  materia: "quimica"
  tema: "quimica_de_la_atmosfera"
  nivel: "basico"
  tags: ["ozono", "estratosfera"]

variables:
  capa: "estratosfera"

respuesta: "{capa}"
tipo: input

enunciado: "La capa de ozono protectora se encuentra ubicada en la {capa}."

explicacion: |
  La estratosfera es la capa de la atmósfera que se encuentra entre los 10 y 50 km de altitud, donde la concentración de ozono es máxima.
```
