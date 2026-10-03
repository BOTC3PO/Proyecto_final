# Examen jefe — [PENDIENTE #845]

> Logro #845. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **100 preguntas totales** en 5/5 secciones.

---

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
respuestas_validas:
  - "seguridad"

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
respuestas_validas:
  - "periodos"

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
respuestas_validas:
  - "grupos"

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
respuestas_validas:
  - "nobles"

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
respuestas_validas:
  - "nuevo"

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
respuestas_validas:
  - "combinan"

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
respuestas_validas:
  - "solo"

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

## Sección: enlace-quimico-polaridad (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["estabilidad", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "Los átomos se enlazan para alcanzar una configuración más estable, generalmente con 8 electrones de valencia."

explicacion: |
  Los átomos buscan una configuración de baja energía, que en la mayoría de los elementos corresponde a 8 electrones en su capa de valencia (configuración de gas noble).
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["regla_del_octeto"]

respuesta: "octeto"
tipo: completar
respuestas_validas:
  - "octeto"

enunciado: "La regla que dice que los átomos buscan 8 electrones de valencia se llama regla del ___."

explicacion: |
  La regla del octeto establece que los átomos tienden a ganar, perder o compartir electrones para completar ocho en su nivel más externo.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["estabilidad", "electrones"]

respuesta: "ceder, ganar o compartir electrones"
tipo: mc
opciones_explicitas: ["ceder, ganar o compartir electrones", "crear o destruir electrones", "cambiar de protones", "fusionar núcleos"]

enunciado: "Para lograr estabilidad, un átomo puede:"

explicacion: |
  Los átomos interactúan transfiriendo (cediendo/ganando) o compartiendo electrones de valencia para alcanzar estabilidad electrónica.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["gases_nobles", "reactividad"]

respuesta: falso
tipo: vf

enunciado: "Un átomo con la capa de valencia ya completa (como un gas noble) tiende a formar muchos enlaces."

explicacion: |
  Los átomos con la capa de valencia completa son muy estables y de baja reactividad: tienden a NO formar enlaces.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace", "electrones"]

variables:
  escenario: uno_de([["ionico", "se transfieren completamente de un atomo a otro"], ["covalente polar", "se comparten de forma desigual"], ["covalente no polar", "se comparten de forma igual"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["se transfieren completamente de un atomo a otro", "se comparten de forma desigual", "se comparten de forma igual"]

enunciado: "En un enlace de tipo {escenario[0]}, ¿qué sucede con los electrones?"

explicacion: |
  El tipo de enlace determina cómo se distribuyen los electrones de valencia entre los núcleos.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_ionico", "metal", "no_metal"]

respuesta: verdadero
tipo: vf

enunciado: "En un enlace iónico, un metal cede electrones y un no metal los gana."

explicacion: |
  Correcto. La transferencia de electrones desde el átomo de baja electronegatividad (metal) hacia el de alta (no metal) genera iones con cargas opuestas que se atraen.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "intermedio"
  tags: ["electronegatividad", "enlace_ionico"]

respuesta: "ionico"
tipo: mc
opciones_explicitas: ["ionico", "covalente polar", "covalente no polar", "metalico"]

enunciado: "Un enlace entre dos átomos con una gran diferencia de electronegatividad es predominantemente:"

explicacion: |
  Una diferencia de electronegatividad alta (generalmente > 1,7) indica que un átomo tiene tanta fuerza sobre los electrones que se los arranca al otro: enlace iónico.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_metalico", "mar_de_electrones"]

respuesta: "mar"
tipo: completar
respuestas_validas:
  - "mar"

enunciado: "En el enlace metálico, los electrones de valencia se deslocalizan formando un ___ de electrones."

explicacion: |
  Los electrones de valencia de los metales no están ligados a un átomo específico: forman un "mar" que rodea a todos los núcleos positivos.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "intermedio"
  tags: ["electronegatividad", "caracter_ionico"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más grande es la diferencia de electronegatividad entre dos átomos, más iónico es el enlace."

explicacion: |
  La diferencia de electronegatividad es el indicador del carácter iónico: a mayor diferencia, mayor transferencia de carga.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["electronegatividad", "enlace_covalente"]

respuesta: "negativa (delta menos)"
tipo: mc
opciones_explicitas: ["negativa (delta menos)", "positiva (delta mas)", "neutra"]

enunciado: "En un enlace covalente polar, el átomo más electronegativo atrae con más fuerza el par de electrones compartidos, quedando con carga parcial ___."

explicacion: |
  El átomo más electronegativo tiene mayor afinidad por los electrones, así que la densidad electrónica se desplaza hacia él: carga parcial negativa (δ−).
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_no_polar", "simetria"]

respuesta: verdadero
tipo: vf

enunciado: "Un enlace entre dos átomos idénticos (por ejemplo, H-H) es siempre covalente no polar porque la diferencia de electronegatividad es cero."

explicacion: |
  Al ser átomos del mismo elemento, ambos atraen los electrones con la misma fuerza, así que el par se comparte parejo.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "intermedio"
  tags: ["geometria_molecular", "momento_dipolar"]

respuesta: falso
tipo: vf

enunciado: "Una molécula que tiene enlaces polares es siempre una molécula polar en su conjunto."

explicacion: |
  No necesariamente. Depende de la geometría molecular: si los momentos dipolares de los enlaces se cancelan por simetría (como en el CO₂), la molécula es apolar.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["electronegatividad", "carga_parcial"]

respuesta: "positiva (delta mas)"
tipo: completar
respuestas_validas:
  - "positiva (delta mas)"
  - "positiva (delta más)"

enunciado: "En un enlace covalente polar, el átomo menos electronegativo queda con carga parcial ___."

explicacion: |
  Al tener menos electronegatividad, ese átomo retiene con menos fuerza los electrones compartidos: carga parcial positiva (δ+).
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["electronegatividad", "enlace_ionico", "enlace_covalente"]

respuesta: "la diferencia de electronegatividad entre los átomos"
tipo: mc
opciones_explicitas: ["la diferencia de electronegatividad entre los átomos", "el tamaño de los átomos", "la cantidad de neutrones", "el color del elemento"]

enunciado: "¿Qué factor determina si un enlace es iónico, covalente polar o covalente no polar?"

explicacion: |
  La diferencia de electronegatividad (ΔEN) indica cómo se comparten los electrones: alta → iónico, intermedia → covalente polar, baja o nula → covalente no polar.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "intermedio"
  tags: ["enlace", "sustancias"]

variables:
  escenario: uno_de([["NaCl", "ionico"], ["H2O", "covalente polar"], ["O2", "covalente no polar"], ["Cu (cobre metálico)", "metalico"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["ionico", "covalente polar", "covalente no polar", "metalico"]

enunciado: "¿Cuál es el tipo de enlace predominante en {escenario[0]}?"

explicacion: |
  {escenario[0]} tiene un enlace de tipo {escenario[1]}.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_metalico"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace metálico ocurre entre dos átomos metálicos."

explicacion: |
  Verdadero. En los metales, los átomos forman una red donde los electrones de valencia se deslocalizan en un "mar de electrones" que los mantiene unidos.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_covalente", "enlace_ionico"]

respuesta: falso
tipo: vf

enunciado: "En un enlace covalente, los electrones se transfieren completamente de un átomo a otro."

explicacion: |
  Falso. En el enlace covalente los electrones se comparten. La transferencia completa es la característica del enlace iónico.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "intermedio"
  tags: ["electronegatividad", "enlace_ionico"]

respuesta: "ionico"
tipo: mc
opciones_explicitas: ["ionico", "covalente polar", "covalente no polar", "metalico"]

enunciado: "¿Qué tipo de enlace se da típicamente entre un metal y un no metal con gran diferencia de electronegatividad?"

explicacion: |
  Cuando la diferencia de electronegatividad es muy alta, el átomo más electronegativo le arranca el electrón al otro: enlace iónico.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["enlace_metalico", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace metálico explica por qué los metales son buenos conductores eléctricos: los electrones del \"mar\" se mueven con libertad."

explicacion: |
  Correcto. Como los electrones de valencia no están fijos a un átomo particular, se desplazan con facilidad cuando se aplica un campo eléctrico — de ahí la buena conductividad de los metales.
```

```
metadata:
  materia: "quimica"
  tema: "enlace_quimico_polaridad"
  nivel: "basico"
  tags: ["covalente_no_polar", "ejemplos"]

respuesta: "O2 (oxígeno diatómico)"
tipo: mc
opciones_explicitas: ["O2 (oxígeno diatómico)", "NaCl (cloruro de sodio)", "HCl (ácido clorhídrico)", "MgO (óxido de magnesio)"]

enunciado: "¿Cuál de las siguientes sustancias tiene un enlace covalente NO polar?"

explicacion: |
  O₂ es un enlace entre dos átomos idénticos (misma electronegatividad, diferencia cero): covalente no polar. Los otros tres tienen electronegatividades distintas entre sus átomos.
```

## Sección: carbono-tetravalencia-cadenas (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["carbono", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "El átomo de carbono siempre forma 4 enlaces covalentes para alcanzar la estabilidad."

explicacion: |
  El carbono tiene 4 electrones de valencia y necesita formar 4 enlaces covalentes para completar su octeto.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["catenacion", "propiedades"]

respuesta: "catenacion"
tipo: completar
respuestas_validas:
  - "catenacion"

enunciado: "La propiedad del carbono de formar largas cadenas consigo mismo se llama ___."

explicacion: |
  La catenación permite formar cadenas lineales, ramificadas o anillos.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["electrones", "valencia"]

respuesta: "4"
tipo: mc
opciones_explicitas: ["2", "4", "6", "8"]

enunciado: "El átomo de carbono posee en su capa de valencia:"

explicacion: |
  El carbono está en el grupo 14: tiene 4 electrones en su capa más externa.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["octeto", "electrones"]

respuesta: verdadero
tipo: vf

enunciado: "Al átomo de carbono le faltan 4 electrones para completar su octeto de valencia."

explicacion: |
  Con 4 electrones propios y 4 que le faltan, alcanza los 8 de la configuración de gas noble.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["quimica_organica", "carbono"]

variables:
  tipos: [["lineal", "sin ramificaciones, C-C-C-C"], ["ramificada", "con brazos laterales"], ["ciclica", "la cadena se cierra sobre si misma"]]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx][1]
tipo: mc
opciones_explicitas: ["sin ramificaciones, C-C-C-C", "con brazos laterales", "la cadena se cierra sobre si misma"]

enunciado: "Una cadena de carbono de tipo {tipos[idx][0]} se caracteriza porque..."

explicacion: |
  Una cadena {tipos[idx][0]} es: {tipos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["quimica_organica", "carbono"]

respuesta: verdadero
tipo: vf

enunciado: "Una cadena de carbono cíclica es aquella que se cierra sobre sí misma formando un anillo."

explicacion: |
  Correcto, esa es la definición de cadena cíclica.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["quimica_organica", "carbono"]

respuesta: falso
tipo: vf

enunciado: "El átomo de carbono tiene la capacidad de formar únicamente cadenas lineales, sin posibilidad de ramificaciones o ciclos."

explicacion: |
  Falso. El carbono forma lineales, ramificadas y cíclicas.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["enlaces", "carbono"]

variables:
  escenario: [["simple (C-C)", 1], ["doble (C=C)", 2], ["triple (C-triple-C)", 3]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [1, 2, 3]

enunciado: "Si un enlace entre dos átomos de carbono es de tipo {escenario[idx][0]}, ¿cuántos pares de electrones comparten?"

explicacion: |
  Un enlace simple comparte 1 par, uno doble 2 pares, y uno triple 3 pares.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["enlaces", "carbono"]

respuesta: verdadero
tipo: vf

enunciado: "En un enlace doble (C=C), cada átomo de carbono usa 2 de sus 4 enlaces de valencia con el mismo vecino."

explicacion: |
  Correcto: comparten dos pares de electrones, consumiendo dos de los cuatro enlaces disponibles de cada carbono.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["enlaces", "carbono"]

respuesta: falso
tipo: vf

enunciado: "En un enlace triple, cada átomo de carbono usa sólo 1 de sus 4 enlaces de valencia con el vecino."

explicacion: |
  Falso. En un enlace triple usa 3 de sus 4 enlaces con ese vecino.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["hidrocarburos"]

respuesta: "alcanos"
tipo: completar
respuestas_validas:
  - "alcanos"

enunciado: "La distinción entre enlace simple, doble y triple entre carbonos es lo que separa a los ___, alquenos y alquinos."

explicacion: |
  Alcanos (simple), alquenos (doble), alquinos (triple).
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["enlaces", "catenacion"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace C-C es fuerte y estable, lo que permite la catenación (formar cadenas largas)."

explicacion: |
  Esa fuerza y estabilidad del enlace C-C es la base de la catenación.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["definicion", "quimica_organica"]

respuesta: verdadero
tipo: vf

enunciado: "La química orgánica es la rama de la química dedicada casi exclusivamente a los compuestos de carbono."

explicacion: |
  Correcto (con excepciones como carbonatos o CO2, que se estudian como química inorgánica).
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["hidrocarburos", "diversidad"]

respuesta: "millones de moléculas distintas"
tipo: mc
opciones_explicitas: ["millones de moléculas distintas", "solo una molécula", "a lo sumo 10 moléculas", "ninguna molécula estable"]

enunciado: "Con sólo carbono e hidrógeno se pueden formar..."

explicacion: |
  Por la tetravalencia y los enlaces simples/dobles/triples, la variedad de hidrocarburos es enorme.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["diversidad", "tabla_periodica"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún otro elemento de la tabla periódica genera tanta diversidad estructural como el carbono."

explicacion: |
  La catenación con enlaces estables es una propiedad casi exclusiva del carbono en la práctica.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["carbono", "ramificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un átomo de carbono en el medio de una cadena ramificada puede estar unido a 3 o 4 átomos de carbono distintos al mismo tiempo, sin dejar de tener 4 enlaces en total."

explicacion: |
  Correcto: sus 4 enlaces se reparten entre varios vecinos de carbono (más eventualmente H u otros átomos), formando la ramificación.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "avanzado"
  tags: ["comparacion", "silicio"]

respuesta: falso
tipo: vf

enunciado: "El enlace Si-Si (silicio-silicio) es igual de fuerte y estable que el C-C, por eso el silicio también forma cadenas tan largas y variadas como el carbono."

explicacion: |
  Falso. El enlace Si-Si es más débil que el C-C, así que el silicio no cataniza tan bien — de ahí que la química orgánica sea "del carbono" y no "del silicio".
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["carbono", "anillos"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando la cadena de carbono se cierra en un anillo, cada carbono del anillo sigue teniendo 4 enlaces en total, repartidos entre sus vecinos del anillo y (si sobra) átomos de hidrógeno."

explicacion: |
  Correcto, la tetravalencia se mantiene siempre, ya sea en cadena abierta o cerrada (anillo).
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "la tetravalencia y la catenación del carbono"
tipo: mc
opciones_explicitas: ["la tetravalencia y la catenación del carbono", "la alta electronegatividad del carbono", "que el carbono es un metal", "que el carbono siempre forma enlaces iónicos"]

enunciado: "¿Qué propiedad del carbono explica por qué existe toda una rama de la química (orgánica) dedicada casi solo a sus compuestos?"

explicacion: |
  La combinación de 4 enlaces disponibles y la capacidad de encadenarse consigo mismo (catenación) genera la enorme diversidad de compuestos orgánicos.
```

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "avanzado"
  tags: ["comparacion", "tetravalencia"]

respuesta: falso
tipo: vf

enunciado: "El carbono es el único elemento de la tabla periódica que puede formar 4 enlaces covalentes."

explicacion: |
  Falso. Otros elementos del grupo 14 (como el silicio) también son tetravalentes; lo distintivo del carbono no es sólo la tetravalencia, sino combinarla con enlaces C-C muy estables (catenación fuerte).
```

