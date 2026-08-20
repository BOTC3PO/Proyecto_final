# Examen jefe — Maestro de la Química

> Logro #148. Completaste el examen integrando conceptos atmosféricos, termodinámicos y de laboratorio. Pool agregado de los `cuestionario.md` ya validados de sus 7 temas. **149 preguntas totales** en 7/7 secciones.

---

## Sección: quimica-de-la-atmosfera (25 preguntas)

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

## Sección: reactivo-limitante-rendimiento (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["analogia", "estequiometria"]

respuesta: "3"
tipo: mc
opciones_explicitas: ["3", "5", "10", "13"]

enunciado: "Para armar un sándwich necesitas 2 rodajas de pan y 1 de queso. Si tenés 10 rodajas de pan y 3 de queso, ¿cuántos sándwiches podés armar como máximo?"

explicacion: |
  Con 10 panes (2 por sándwich): 10/2 = 5 sándwiches posibles. Con 3 quesos (1 por sándwich): 3/1 = 3 sándwiches posibles. El queso se agota primero: sólo se pueden armar 3.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "El reactivo limitante es aquel que sobra al final de la reacción química."

explicacion: |
  Falso. El reactivo limitante es el que se agota primero y detiene la reacción. El que sobra es el reactivo en exceso.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "exceso"
tipo: completar
respuestas_validas: ["exceso"]

enunciado: "El reactivo que sobra al final de la reacción se llama reactivo en ___."

explicacion: |
  El reactivo que no se consume totalmente se llama reactivo en exceso.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "El reactivo limitante determina la cantidad máxima de producto que se puede formar en una reacción química."

explicacion: |
  Verdadero. Como el reactivo limitante se agota primero, la reacción se detiene ahí y limita la producción total.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "moles"]

variables:
  moles_h2: uno_de([4, 6, 8, 10])

respuesta: moles_h2 / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "En la reacción 2 H2 + O2 → 2 H2O, si hay {moles_h2} moles de H2, ¿cuál es el cociente moles/coeficiente del H2?"

pasos:
  - "Coeficiente de H2 en la ecuación: 2"
  - "Cociente: {moles_h2} / 2"

explicacion: |
  El cociente se calcula dividiendo los moles disponibles por el coeficiente estequiométrico de esa sustancia.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "moles"]

variables:
  moles_o2: uno_de([1, 2, 3])

respuesta: moles_o2
tipo: input
tolerancia_abs: 0.01

enunciado: "En la reacción 2 H2 + O2 → 2 H2O, si hay {moles_o2} moles de O2, ¿cuál es el cociente moles/coeficiente del O2?"

pasos:
  - "Coeficiente de O2 en la ecuación: 1"
  - "Cociente: {moles_o2} / 1"

explicacion: |
  Como el coeficiente del O2 es 1, el cociente es igual a la cantidad de moles disponibles.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿El reactivo con el cociente menor (moles dividido coeficiente) entre todos los reactivos es el reactivo limitante?"

explicacion: |
  Correcto. El reactivo limitante se identifica porque su cociente moles/coeficiente es el valor mínimo entre todos los reactivos.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["procedimiento"]

respuesta: "coeficiente"
tipo: completar
respuestas_validas: ["coeficiente", "coeficientes"]

enunciado: "Para encontrar el reactivo limitante hay que dividir los moles de cada reactivo por su ___ en la ecuación balanceada."

explicacion: |
  El coeficiente estequiométrico indica la proporción en la que reaccionan los reactivos; dividir los moles reales por él permite compararlos.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "ejercicio"]

respuesta: "O2"
tipo: mc
opciones_explicitas: ["O2", "H2", "H2O", "Ninguno"]

enunciado: "Dada la reacción 2 H2 + O2 → 2 H2O, si hay 6 moles de H2 y 2 moles de O2, ¿cuál es el reactivo limitante?"

pasos:
  - "Cociente de H2: 6 / 2 = 3"
  - "Cociente de O2: 2 / 1 = 2"
  - "El menor (2) corresponde al O2."

explicacion: |
  El cociente del H2 es 3 y el del O2 es 2. Como 2 es menor, el oxígeno se agota antes: es el reactivo limitante.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "calculo"]

variables:
  rendimiento_teorico: uno_de([20, 40, 50, 80, 100])
  porcentaje: uno_de([50, 75, 80, 90])
  rendimiento_real: rendimiento_teorico * porcentaje / 100

respuesta: porcentaje
tipo: input
tolerancia_abs: 0.1

enunciado: "El rendimiento teórico de una reacción es de {rendimiento_teorico} g y el rendimiento real obtenido en el laboratorio es de {rendimiento_real} g. ¿Cuál es el porcentaje de rendimiento?"

pasos:
  - "Dividir el rendimiento real por el teórico y multiplicar por 100."

explicacion: |
  % rendimiento = ({rendimiento_real} / {rendimiento_teorico}) × 100 = {porcentaje}%.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["teoria", "formula"]

respuesta: "teorico"
tipo: completar
respuestas_validas: ["teorico"]

enunciado: "La fórmula del rendimiento porcentual es (rendimiento real dividido rendimiento ___) por 100."

explicacion: |
  El rendimiento porcentual compara lo obtenido experimentalmente (real) contra la cantidad máxima predicha por la estequiometría (teórico).
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El rendimiento real de una reacción en la práctica es casi siempre menor al 100%."

explicacion: |
  Por reacciones secundarias, pérdidas de material en el proceso, etc., el rendimiento real suele ser menor al teórico.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria"]

respuesta: "el reactivo limitante"
tipo: mc
opciones_explicitas: ["el reactivo limitante", "el reactivo en exceso", "el promedio de ambos reactivos", "el producto final medido"]

enunciado: "El rendimiento teórico de una reacción se calcula a partir de:"

explicacion: |
  Siempre se basa en el reactivo limitante, porque es el que determina la cantidad máxima de producto posible.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso
tipo: vf

enunciado: "Un rendimiento mayor al 100% siempre es físicamente posible en condiciones normales, sin ningún error de medición."

explicacion: |
  Falso. No se puede obtener más producto del que la estequiometría permite; un rendimiento >100% indica errores experimentales (impurezas, humedad, pesada incorrecta).
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["estequiometria", "conceptos_clave"]

respuesta: verdadero
tipo: vf

enunciado: "Los cálculos de la cantidad de producto formado se hacen a partir de los moles del reactivo LIMITANTE, no del reactivo en exceso."

explicacion: |
  Correcto. El reactivo limitante determina la cantidad máxima de producto posible.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["analogia", "conceptos_clave"]

respuesta: "queda en exceso, sin usarse"
tipo: mc
opciones_explicitas: ["queda en exceso, sin usarse", "se usa igual", "se destruye", "se convierte en queso"]

enunciado: "En la analogía de los sándwiches (2 panes + 1 queso por sándwich), si el queso es el reactivo limitante, ¿qué pasa con el pan sobrante?"

explicacion: |
  El reactivo en exceso es el que sobra una vez que el limitante se agotó por completo — no se transforma en nada, simplemente no reacciona.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "avanzado"
  tags: ["calculo", "rendimiento"]

variables:
  datos: [[10, 5], [20, 10], [25, 15], [50, 20]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1] / datos[idx][0] * 100
tipo: input
tolerancia_abs: 0.1

enunciado: "El rendimiento teórico de una reacción es de {datos[idx][0]} gramos y el rendimiento real obtenido es de {datos[idx][1]} gramos. ¿Cuál es el porcentaje de rendimiento?"

explicacion: |
  % rendimiento = ({datos[idx][1]} / {datos[idx][0]}) × 100.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["procedimiento", "estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "Para encontrar el reactivo limitante, el primer paso es convertir todas las cantidades de los reactivos a moles."

explicacion: |
  Correcto. La estequiometría trabaja en proporciones molares; no se pueden comparar masas directamente sin pasar antes por moles.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "intermedio"
  tags: ["estequiometria", "ejercicio"]

respuesta: "H2"
tipo: mc
opciones_explicitas: ["H2", "O2", "H2O", "Ninguno"]

enunciado: "Dada la reacción 2 H2 + O2 → 2 H2O, si hay 4 moles de H2 y 3 moles de O2, ¿cuál es el reactivo limitante?"

explicacion: |
  Cociente de H2: 4/2 = 2. Cociente de O2: 3/1 = 3. El menor es 2 (H2), así que el H2 es el limitante.
```

```
metadata:
  materia: "quimica"
  tema: "reactivo_limitante_rendimiento"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Si se agrega más cantidad del reactivo que YA está en exceso, la cantidad de producto formado no aumenta (mientras el limitante siga siendo el mismo)."

explicacion: |
  Verdadero. Agregar más del reactivo en exceso no cambia nada: el límite lo sigue poniendo el reactivo limitante, que no varió.
```

## Sección: seguridad-laboratorio (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "pictogramas"]

variables:
  tabla: [["llama", "inflamable"], ["calavera", "toxico agudo"], ["corrosion", "corrosivo, quema tejido o metal"], ["signo de exclamacion", "irritante o dañino en menor grado"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["inflamable", "toxico agudo", "corrosivo, quema tejido o metal", "irritante o dañino en menor grado"]

enunciado: "El pictograma de {tabla[idx][0]} significa..."

explicacion: |
  El pictograma de {tabla[idx][0]} indica que la sustancia es {tabla[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "estandar"]

respuesta: verdadero
tipo: vf

enunciado: "El GHS es un estándar internacional para etiquetar sustancias químicas peligrosas con símbolos reconocibles sin importar el idioma."

explicacion: |
  Correcto. El Sistema Globalmente Armonizado estandariza la comunicación de peligros mundialmente.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "explosivo"]

respuesta: falso
tipo: vf

enunciado: "El pictograma de una bomba explotando indica que la sustancia es inflamable, no explosiva."

explicacion: |
  Falso. Ese pictograma indica específicamente que la sustancia es explosiva.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "medio_ambiente"]

respuesta: "peligro para el ambiente"
tipo: mc
opciones_explicitas: ["peligro para el ambiente", "toxico agudo", "corrosivo", "inflamable"]

enunciado: "El pictograma de medio ambiente (pez y árbol muerto) indica:"

explicacion: |
  Indica peligro para el ambiente (toxicidad acuática, daño ecológico, etc.).
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "visual"]

respuesta: verdadero
tipo: vf

enunciado: "Los pictogramas GHS se reconocen de un vistazo sin depender de leer texto."

explicacion: |
  El objetivo de estos símbolos es la identificación rápida y visual del peligro.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["epp", "seguridad"]

variables:
  tabla: [["guantes", "contacto de la piel con sustancias corrosivas o toxicas"], ["gafas de seguridad", "salpicaduras en los ojos"], ["guardapolvo/bata", "salpicaduras en la ropa y piel"], ["campana extractora", "inhalacion de vapores toxicos"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["contacto de la piel con sustancias corrosivas o toxicas", "salpicaduras en los ojos", "salpicaduras en la ropa y piel", "inhalacion de vapores toxicos"]

enunciado: "¿De qué protege principalmente {tabla[idx][0]}?"

explicacion: |
  {tabla[idx][0]} protege de: {tabla[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["epp"]

respuesta: verdadero
tipo: vf

enunciado: "La campana extractora protege de la inhalación de vapores tóxicos."

explicacion: |
  Correcto. Evacúa vapores, gases y polvos hacia afuera, evitando la inhalación.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["epp"]

respuesta: falso
tipo: vf

enunciado: "Los guantes protegen contra la inhalación de vapores."

explicacion: |
  Falso. Protegen las manos del contacto directo con sustancias, no la vía respiratoria.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["buenas_practicas"]

respuesta: verdadero
tipo: vf

enunciado: "Para oler una sustancia química, hay que abanicar el vapor hacia la nariz con la mano desde una distancia prudencial, sin acercar el recipiente directo."

explicacion: |
  Acercar el recipiente directo puede causar irritación o intoxicación por vapores concentrados.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["pipeteo"]

respuesta: falso
tipo: vf

enunciado: "Si no hay pera de goma o propipeta disponible, se permite pipetear con la boca para asegurar la precisión del volumen."

explicacion: |
  Falso. Nunca se pipetea con la boca — riesgo de ingerir sustancias tóxicas o corrosivas.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["reacciones_exotermicas"]

respuesta: verdadero
tipo: vf

enunciado: "Al diluir un ácido concentrado, el procedimiento seguro es verter siempre el ácido sobre el agua, lentamente."

explicacion: |
  Correcto. El calor generado se disipa en el gran volumen de agua; al revés, la reacción puede salpicar ácido concentrado.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["reacciones_exotermicas"]

respuesta: falso
tipo: vf

enunciado: "Agregar agua a un ácido concentrado es una práctica segura, porque ayuda a que el ácido se diluya más rápido."

explicacion: |
  Falso. Genera una reacción exotérmica violenta que puede provocar ebullición instantánea y salpicaduras peligrosas.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["normativas"]

respuesta: "seguridad"
tipo: completar
respuestas_validas: ["seguridad"]

enunciado: "Antes de manipular una sustancia química nueva, hay que leer siempre la hoja de ___ (MSDS/FDS)."

explicacion: |
  Esa hoja contiene información sobre toxicidad, reactividad, primeros auxilios y EPP necesario.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["pictogramas", "ghs"]

respuesta: "Llama sobre un círculo (Comburente)"
tipo: mc
opciones_explicitas: ["Llama simple (Inflamable)", "Llama sobre un círculo (Comburente)", "Corrosivo", "Bomba explotando (Explosivo)"]

enunciado: "Un pictograma que favorece la combustión de otros materiales, sin ser inflamable por sí mismo, es..."

explicacion: |
  El pictograma "comburente" (llama sobre círculo) indica sustancias que facilitan la combustión de otras, aunque ellas mismas no ardan.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["sustancias", "comburente"]

respuesta: verdadero
tipo: vf

enunciado: "El peróxido de hidrógeno concentrado es un ejemplo de sustancia comburente."

explicacion: |
  Verdadero, es un fuerte agente oxidante que alimenta la combustión de otros materiales.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["benceno", "cancerigeno"]

respuesta: verdadero
tipo: vf

enunciado: "El benceno tiene pictograma de peligro para la salud, porque está clasificado como cancerígeno."

explicacion: |
  Correcto, es un tóxico crónico clasificado como cancerígeno.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "basico"
  tags: ["ghs", "normativa"]

respuesta: verdadero
tipo: vf

enunciado: "El diseño de los pictogramas GHS (rombo con borde rojo) es igual en todos los países que adoptan el sistema."

explicacion: |
  Correcto, es justamente el objetivo del estándar internacional.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "avanzado"
  tags: ["aplicacion"]

respuesta: "trabajar bajo la campana extractora"
tipo: mc
opciones_explicitas: ["trabajar bajo la campana extractora", "oler el frasco directamente", "abrirlo lejos de cualquier equipo de protección", "guardarlo sin etiqueta"]

enunciado: "Si un frasco tiene el pictograma de tóxico agudo (calavera) y libera vapores, ¿qué medida es la más adecuada al manipularlo?"

explicacion: |
  Ante riesgo de inhalación de un tóxico, hay que trabajar bajo campana extractora, que evacúa los vapores.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "intermedio"
  tags: ["pictogramas", "comparacion"]

respuesta: falso
tipo: vf

enunciado: "El pictograma de corrosivo y el de irritante (signo de exclamación) significan exactamente lo mismo, sólo cambia el dibujo."

explicacion: |
  Falso. El corrosivo indica daño severo (quemaduras en piel/metal); el irritante indica un daño más leve — son niveles de peligro distintos.
```

```
metadata:
  materia: "quimica"
  tema: "seguridad_laboratorio"
  nivel: "avanzado"
  tags: ["reacciones_exotermicas", "aplicacion"]

respuesta: "el gran volumen de agua absorbe y disipa el calor liberado de a poco"
tipo: mc
opciones_explicitas: ["el gran volumen de agua absorbe y disipa el calor liberado de a poco", "el ácido se vuelve inofensivo al tocar el agua", "no hay ninguna razón real, es sólo una costumbre", "el agua reacciona más lento que el ácido"]

enunciado: "¿Por qué es más seguro agregar ácido al agua (de a poco) en vez de agua al ácido?"

explicacion: |
  Al agregar poco a poco ácido a mucha agua, el calor liberado se reparte en todo ese volumen; al revés, el calor se concentra de golpe en poca agua y puede hervir violentamente, salpicando ácido.
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

## Sección: tabla-periodica-tendencias (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["tabla_periodica", "periodos"]

respuesta: verdadero
tipo: vf

enunciado: "Los periodos (filas) de la tabla periódica indican el número de niveles de energía ocupados por los electrones de un átomo."

explicacion: |
  Correcto. El número de fila (periodo) indica la cantidad de niveles de energía que tiene la configuración electrónica del elemento.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["tabla_periodica", "grupos"]

respuesta: verdadero
tipo: vf

enunciado: "Los elementos que pertenecen al mismo grupo (columna) comparten la misma cantidad de electrones en su capa de valencia."

explicacion: |
  Correcto. Compartir la cantidad de electrones de valencia es lo que da propiedades químicas similares a los elementos de un mismo grupo.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["tabla_periodica", "orden"]

respuesta: "número atómico creciente"
tipo: mc
opciones_explicitas: ["número atómico creciente", "masa atómica creciente", "orden alfabético", "año de descubrimiento"]

enunciado: "La tabla periódica moderna ordena los elementos según su..."

explicacion: |
  La tabla periódica moderna se organiza en orden creciente de número atómico (Z), la cantidad de protones — no por masa, como se ordenaba antes de conocerse el protón.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["tabla_periodica", "nombres"]

respuesta: "periodos"
tipo: completar
respuestas_validas: ["periodos"]

enunciado: "Las filas horizontales de la tabla periódica se llaman ___."

explicacion: |
  Las filas horizontales se denominan periodos.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["tabla_periodica", "nombres"]

respuesta: "grupos"
tipo: completar
respuestas_validas: ["grupos"]

enunciado: "Las columnas verticales de la tabla periódica se llaman ___."

explicacion: |
  Las columnas verticales se denominan grupos o familias.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["elementos", "electrones"]

variables:
  escenario: uno_de([["metal", "perder electrones (forma cationes)"], ["no metal", "ganar electrones (forma aniones)"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["perder electrones (forma cationes)", "ganar electrones (forma aniones)"]

enunciado: "Un elemento de tipo {escenario[0]} tiene la tendencia a..."

explicacion: |
  Los metales tienden a perder electrones y formar cationes. Los no metales tienden a ganar electrones y formar aniones.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["metaloides"]

respuesta: verdadero
tipo: vf

enunciado: "Los metaloides tienen propiedades intermedias entre metales y no metales."

explicacion: |
  Los metaloides (como el silicio o el germanio) comparten características físicas y químicas con metales y no metales.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["gases_nobles"]

respuesta: "nobles"
tipo: completar
respuestas_validas: ["nobles"]

enunciado: "El grupo 18 de la tabla periódica son los gases ___."

explicacion: |
  El grupo 18 está formado por los gases nobles (helio, neón, argón, etc.).
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["gases_nobles", "reactividad"]

respuesta: falso
tipo: vf

enunciado: "Los gases nobles son muy reactivos porque tienen la capa de valencia incompleta."

explicacion: |
  Falso. Los gases nobles son poco reactivos (inertes) justamente porque su capa de valencia está completa.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["ubicacion", "tabla_periodica"]

respuesta: "arriba a la derecha"
tipo: mc
opciones_explicitas: ["arriba a la derecha", "a la izquierda", "en el centro", "abajo a la izquierda"]

enunciado: "¿Dónde están ubicados los no metales en la tabla periódica?"

explicacion: |
  Los metales ocupan la mayor parte de la tabla (izquierda y centro); los no metales se ubican en la parte superior derecha.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["radio_atomico", "grupos"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual"]

enunciado: "Al bajar en un grupo de la tabla periódica, el radio atómico..."

explicacion: |
  Al bajar en un grupo se agrega un nuevo nivel de energía por cada fila, lo que aumenta el tamaño del átomo.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["radio_atomico", "periodos"]

respuesta: "disminuye"
tipo: mc
opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

enunciado: "Al avanzar en un periodo de izquierda a derecha, el radio atómico..."

explicacion: |
  Al aumentar el número atómico en el mismo periodo, la carga nuclear efectiva aumenta y atrae los electrones con más fuerza, reduciendo el radio.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "intermedio"
  tags: ["energia_ionizacion", "grupos"]

respuesta: "disminuye"
tipo: mc
opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

enunciado: "Al bajar en un grupo de la tabla periódica, la energía de ionización..."

explicacion: |
  Al bajar en un grupo, el electrón externo está en un nivel más lejano y menos atraído por el núcleo, así que cuesta menos energía sacarlo.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "intermedio"
  tags: ["electronegatividad", "periodos"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual"]

enunciado: "Al avanzar en un periodo de izquierda a derecha, la electronegatividad..."

explicacion: |
  La mayor carga nuclear efectiva en el mismo nivel de energía aumenta la capacidad del núcleo de atraer electrones de un enlace.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["electronegatividad", "fluor"]

respuesta: verdadero
tipo: vf

enunciado: "El flúor (F) es el elemento con mayor electronegatividad de toda la tabla periódica."

explicacion: |
  El flúor es el más electronegativo de la tabla por su alta carga nuclear efectiva combinada con su radio atómico chico.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "intermedio"
  tags: ["radio_atomico", "periodo"]

respuesta: "El radio disminuye porque el núcleo tiene más protones y atrae con más fuerza a los electrones de valencia"
tipo: mc
opciones_explicitas: ["El radio aumenta porque hay menos electrones", "El radio disminuye porque el núcleo tiene más protones y atrae con más fuerza a los electrones de valencia", "El radio disminuye porque los electrones se alejan del núcleo", "El radio aumenta porque aumenta el número de niveles de energía"]

enunciado: "¿Por qué el radio atómico disminuye al avanzar de izquierda a derecha en un mismo periodo?"

explicacion: |
  El número atómico aumenta (más protones) sin sumar niveles de energía nuevos: la carga nuclear efectiva sube y atrae a los electrones con más fuerza, achicando el átomo.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["radio_atomico", "grupo"]

respuesta: "nuevo"
tipo: completar
respuestas_validas: ["nuevo"]

enunciado: "Al bajar en un grupo de la tabla periódica se agrega un nivel de energía ___, lo que hace que el radio atómico aumente."

explicacion: |
  Cada vez que se baja un grupo se completa una capa electrónica más, agregando un nuevo nivel de energía y aumentando el tamaño del átomo.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["electrones_valencia", "grupo"]

respuesta: verdadero
tipo: vf

enunciado: "Dos elementos situados en el mismo grupo de la tabla periódica tienen la misma cantidad de electrones de valencia."

explicacion: |
  Los elementos de un mismo grupo comparten la misma configuración en su capa más externa, así que tienen el mismo número de electrones de valencia.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "intermedio"
  tags: ["energia_ionizacion", "propiedades"]

respuesta: "Energía de ionización"
tipo: mc
opciones_explicitas: ["Electronegatividad", "Energía de ionización", "Radio atómico", "Afinidad electrónica"]

enunciado: "¿Cuál es la propiedad que mide la energía necesaria para arrancarle un electrón a un átomo en estado gaseoso?"

explicacion: |
  La energía de ionización mide el costo de remover un electrón. La electronegatividad mide la tendencia a atraer electrones en un enlace; la afinidad electrónica, la energía liberada al captar uno.
```

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["metales", "conductividad"]

respuesta: verdadero
tipo: vf

enunciado: "Los metales son en general buenos conductores eléctricos, mientras que los no metales suelen ser malos conductores."

explicacion: |
  Los electrones de valencia de los metales están débilmente unidos y se mueven con facilidad, lo que permite la conducción eléctrica. En los no metales, los electrones están más fuertemente retenidos.
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
respuestas_validas: ["reactivos"]

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
tipo: input
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
tipo: input
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
respuestas_validas: ["estado"]

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

## Sección: tipos-reacciones-quimicas (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["sintesis", "conceptos_basicos"]

respuesta: "1"
tipo: mc
opciones_explicitas: ["1", "2", "3", "depende de los reactivos"]

enunciado: "En una reacción de síntesis (A + B → AB), ¿cuántos productos se forman?"

explicacion: |
  En una síntesis, dos o más sustancias se combinan para formar un único producto más complejo.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["sintesis"]

respuesta: verdadero
tipo: vf

enunciado: "En la reacción 2H2 + O2 → 2H2O, dos sustancias simples se combinan en una sola, por lo tanto, es una reacción de síntesis."

explicacion: |
  Verdadero. Hidrógeno y oxígeno se combinan para formar una única sustancia: agua.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["sintesis", "completar"]

respuesta: "combinan"
tipo: completar
respuestas_validas: ["combinan"]

enunciado: "En una reacción de síntesis, dos o más sustancias se ___ para formar una sola más compleja."

explicacion: |
  Los reactivos se combinan para formar un producto nuevo, único.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["sintesis"]

respuesta: falso
tipo: vf

enunciado: "Una reacción de síntesis se caracteriza por tener un solo reactivo y varios productos."

explicacion: |
  Falso. Es al revés: una síntesis tiene varios reactivos y un solo producto.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["descomposicion"]

respuesta: "1"
tipo: mc
opciones_explicitas: ["1", "2", "3", "depende"]

enunciado: "En una reacción de descomposición (AB → A + B), ¿cuántos reactivos hay al inicio?"

explicacion: |
  En una descomposición, un solo reactivo complejo se separa en dos o más productos más simples.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["descomposicion", "sintesis"]

respuesta: verdadero
tipo: vf

enunciado: "¿La reacción de descomposición es el proceso inverso a una reacción de síntesis?"

explicacion: |
  Correcto. En la síntesis varias sustancias se combinan en un producto; en la descomposición, un reactivo se separa en varios.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["electrolisis", "descomposicion"]

respuesta: falso
tipo: vf

enunciado: "La electrólisis del agua (2H2O → 2H2 + O2) es un ejemplo de una reacción de síntesis."

explicacion: |
  Falso. Es descomposición: una sola sustancia (H2O) se separa en sus componentes (H2 y O2).
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["energia", "descomposicion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Las reacciones de descomposición requieren frecuentemente energía externa (como calor o electricidad) para ocurrir?"

explicacion: |
  Verdadero. Romper enlaces cuesta energía: muchas descomposiciones son endotérmicas.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["desplazamiento"]

respuesta: "reemplaza al elemento B dentro del compuesto BC"
tipo: mc
opciones_explicitas: ["se combina con el compuesto BC entero", "reemplaza al elemento B dentro del compuesto BC", "se descompone en sus elementos", "no reacciona con el compuesto BC"]

enunciado: "En A + BC → AC + B, ¿qué hace el elemento A?"

explicacion: |
  A reemplaza a B dentro del compuesto, ocupando su lugar.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["desplazamiento", "zinc"]

respuesta: verdadero
tipo: vf

enunciado: "En Zn + 2HCl → ZnCl2 + H2, el zinc desplaza al hidrógeno del ácido clorhídrico."

explicacion: |
  Verdadero. El zinc es más reactivo que el hidrógeno, así que lo desplaza del HCl.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "intermedio"
  tags: ["reactividad", "desplazamiento"]

respuesta: falso
tipo: vf

enunciado: "Para que una reacción de desplazamiento ocurra, el elemento que desplaza debe ser MENOS reactivo que el elemento desplazado."

explicacion: |
  Falso. Tiene que ser MÁS reactivo para poder desplazarlo.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["desplazamiento", "completar"]

respuesta: "solo"
tipo: completar
respuestas_validas: ["solo"]

enunciado: "En una reacción de desplazamiento aparece un elemento ___ (sin combinar) tanto en reactivos como en productos, pero con distinto compañero."

explicacion: |
  El elemento desplazado queda libre en los productos, y el que desplaza toma su lugar en el compuesto.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "intermedio"
  tags: ["patrones"]

variables:
  tabla: [["sintesis", "varios reactivos, un solo producto"], ["descomposicion", "un solo reactivo, varios productos"], ["desplazamiento", "un elemento solo mas un compuesto, en ambos lados"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["varios reactivos, un solo producto", "un solo reactivo, varios productos", "un elemento solo mas un compuesto, en ambos lados"]

enunciado: "En una reacción de tipo {tabla[idx][0]}, ¿cuál es el patrón de reactivos y productos?"

explicacion: |
  El patrón de {tabla[idx][0]} es: {tabla[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "intermedio"
  tags: ["ecuaciones", "clasificacion"]

variables:
  tabla: [["2H2 + O2 -> 2H2O", "sintesis"], ["2H2O -> 2H2 + O2", "descomposicion"], ["Zn + 2HCl -> ZnCl2 + H2", "desplazamiento"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["sintesis", "descomposicion", "desplazamiento"]

enunciado: "¿A qué tipo de reacción pertenece {tabla[idx][0]}?"

explicacion: |
  Esa ecuación es de tipo {tabla[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Para distinguir entre síntesis, descomposición y desplazamiento, la clave es contar cuántas sustancias hay de cada lado de la ecuación."

explicacion: |
  Correcto. La cantidad de reactivos y productos (y si hay un elemento solo) define el tipo de reacción.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Una reacción química con un solo reactivo y dos productos es una reacción de síntesis."

explicacion: |
  Falso. Un solo reactivo que se divide en varios productos es descomposición, no síntesis.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Una reacción con tres reactivos que se combinan en un solo producto es una reacción de síntesis."

explicacion: |
  Verdadero. El patrón "varios reactivos, un solo producto" es síntesis, sin importar si son 2, 3 o más reactivos.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "intermedio"
  tags: ["desplazamiento", "reconocimiento"]

respuesta: verdadero
tipo: vf

enunciado: "Si una ecuación tiene un elemento solo (sin combinar) del lado de los reactivos, y otro elemento solo del lado de los productos, probablemente es una reacción de desplazamiento."

explicacion: |
  Correcto. Esa es la señal característica del desplazamiento: un elemento libre "cambia de compañero" dentro de un compuesto.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: falso
tipo: vf

enunciado: "Descomposición y desplazamiento son el mismo tipo de reacción con distinto nombre."

explicacion: |
  Falso. En la descomposición hay 1 reactivo y varios productos, sin un elemento libre reemplazando a otro; en el desplazamiento siempre hay un elemento libre que cambia de compañero.
```

```
metadata:
  materia: "quimica"
  tema: "tipos_reacciones_quimicas"
  nivel: "basico"
  tags: ["ejemplos", "sintesis"]

respuesta: verdadero
tipo: vf

enunciado: "La reacción N2 + 3H2 → 2NH3 (síntesis del amoníaco) es una reacción de síntesis, porque dos reactivos se combinan en un solo producto."

explicacion: |
  Verdadero. Nitrógeno e hidrógeno (2 reactivos) se combinan para formar amoníaco (1 producto): patrón típico de síntesis.
```
