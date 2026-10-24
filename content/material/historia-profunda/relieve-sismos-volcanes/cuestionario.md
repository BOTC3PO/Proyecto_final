# Historia Profunda — Relieve sismos volcanes (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Origen del relieve

```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "basico"
  tags: ["tectonica", "relieve"]

respuesta: "bordes"
tipo: completar
respuestas_validas:
  - "bordes"

enunciado: "El relieve terrestre, como la formación de montañas y fosas, es una consecuencia directa de la tectónica de placas y se produce principalmente en los ___ de las placas tectónicas."

explicacion: |
  El movimiento de las placas tectónicas genera tensiones y fricciones que se manifiestan principalmente en sus límites o bordes, dando lugar a la formación de nuevas estructuras geológicas.
```

### 2 — Tipos de límites

```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "intermedio"
  tags: ["placas", "limites"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["divergente", "se separan las placas", "creación de dorsales oceánicas"], ["convergente", "chocan las placas", "formación de cordilleras o fosas"], ["transformante", "se deslizan lateralmente", "fallas como la de San Andrés"]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "Si observamos un movimiento donde las placas tectónicas {escenarios[escenario_idx][1]} , estamos ante un límite de tipo {escenarios[escenario_idx][0]}."

explicacion: |
  En el escenario seleccionado ({escenarios[escenario_idx][0]}), el movimiento principal es {escenarios[escenario_idx][2]}.
```

### 3 — Formación de cordilleras

```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "basico"
  tags: ["cordilleras", "convergencia"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "¿Qué tipo de interacción entre placas es la responsable de la formación de grandes cordilleras como los Andes debido al choque de placas?"

explicacion: |
  Las cordilleras se forman en los límites convergentes, donde la compresión de las placas eleva la corteza terrestre.
```

### 4 — Secuencia de procesos geológicos

```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "avanzado"
  tags: ["procesos", "relieve"]

respuesta_orden: ["choque de placas", "subducción de la placa", "formación de fosa oceánica", "erupción volcánica"]
tipo: ordenar
opciones_explicitas: ["choque de placas", "subducción de la placa", "formación de fosa oceánica", "erupción volcánica"]

enunciado: "Ordena los eventos que ocurren típicamente en un límite convergente de subducción:"

explicacion: |
  El proceso comienza con el choque, seguido por la placa más densa se hunde (subducción), creando una fosa, y finalmente el magma asciende provocando volcanismo.
```

### 5 — Profundidad de las fosas

```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "intermedio"
  tags: ["fosas", "oceanos"]

variables:
  dato_fosa: [["Fosa de las Marianas", "subducción", "más profunda"], ["Fosa de Atacama", "subducción", "muy profunda"]]
  idx: uno_de([0, 1])

respuesta: dato_fosa[idx][1]
tipo: mc
opciones_explicitas: ["subducción", "divergencia", "transformación"]

enunciado: "La {dato_fosa[idx][0]} es una estructura extremadamente {dato_fosa[idx][2]} que se origina por un proceso de {dato_fosa[idx][1]}."

explicacion: |
  Las fosas oceánicas son zonas de subducción donde una placa se introduce bajo otra, creando depresiones profundas en el lecho marino.
```

### 6 — Origen de los sismos

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["placas_tectonicas", "sismos"]

tipo: mc
opciones_explicitas: ["Fricción entre placas", "Erosión eólica", "Movimiento de las mareas", "Ciclos solares"]
respuesta: "Fricción entre placas"

enunciado: "Los sismos se producen principalmente debido a la acumulación y posterior liberación repentina de energía causada por la ________ entre las placas tectónicas."

explicacion: |
  Los sismos ocurren cuando las fuerzas de fricción entre las placas tectónicas impiden su movimiento, acumulando energía elástica que se libera súbitamente en forma de ondas sísmicas.
```

### 7 — Localización sísmica

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["placas_tectonicas", "bordes_de_placas"]

tipo: mc
opciones_explicitas: ["Bordes de placas tectónicas", "Zonas de estabilidad tectónica", "Cimas de las montañas", "Fondos oceánicos estables"]
respuesta: "Bordes de placas tectónicas"

enunciado: "Los terremotos ocurren mayormente en los ___."

explicacion: |
  La mayor actividad sísmica se concentra en los límites o bordes de las placas tectónicas, donde la interacción entre ellas es constante.
```

### 8 — Mecanismo de liberación

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["energia", "friccion"]

tipo: completar
respuestas_validas:
  - "energía"
  - "fuerza"

enunciado: "Durante un sismo, la energía acumulada por la fricción se libera de forma repentina en forma de ________ sísmica."

explicacion: |
  La liberación de la energía elástica acumulada es lo que genera las ondas que viajan a través de la litosfera.
```

### 9 — Causas de la actividad sísmica

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["placas_tectonicas", "friccion"]

tipo: ordenar
opciones_explicitas: ["Movimiento de las placas", "Acumulación de tensión por fricción", "Liberación repentina de energía", "Ondas sísmicas"]

enunciado: "Ordena el proceso físico que da lugar a un terremoto, desde el movimiento inicial hasta la propagación de las ondas:"

explicacion: |
  El proceso comienza con el movimiento de las placas, seguido de la fricción que acumula tensión, la ruptura que libera energía y finalmente la propagación de ondas.
respuesta_orden: ["Movimiento de las placas", "Acumulación de tensión por fricción", "Liberación repentina de energía", "Ondas sísmicas"]
```

### 10 — Relación tectónica

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "avanzado"
  tags: ["placas_tectonicas", "friccion"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si las placas tectónicas se encuentran en un estado de ___, la acumulación de tensión es mayor que en un estado de estabilidad absoluta."

respuesta: "fricción"

explicacion: |
  A mayor fricción o resistencia al movimiento entre placas, mayor es la acumulación de energía elástica que, al liberarse, provoca sismos de mayor magnitud.
```

### 11 — Origen de los volcanes

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["volcanes", "tectonica"]

tipo: mc
opciones_explicitas: ["Zonas de subducción", "Zonas de divergencia", "Zonas de transformación", "Zonas de estabilidad"]
respuesta: "Zonas de subducción"

enunciado: "Los volcanes se forman típicamente en las zonas de ___ donde una placa tectónica se desplaza debajo de otra."

explicacion: |
  En las zonas de subducción (bordes convergentes), la placa que se hunde se funde y genera magma que asciende a la superficie.
```

### 12 — Bordes divergentes y magma

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["dorsales", "magma"]

tipo: mc
opciones_explicitas: ["Dorsales oceánicas", "Fallas transformantes", "Cinturones orogénicos", "Escudos continentales"]
respuesta: "Dorsales oceánicas"

enunciado: "El magma puede llegar a la superficie en los bordes divergentes, como ocurre en las ___."

explicacion: |
  Las dorsales oceánicas son bordes divergentes donde las placas se separan, permitiendo la salida de magma y la creación de nueva corteza.
```

### 13 — Movimiento de placas y volcanismo

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["bordes", "convergencia"]

variables:
  escenario: uno_de([["convergente", "subducción"], ["divergente", "separación"]])
  tipo_borde: escenario[0]
  proceso: escenario[1]

tipo: completar
respuestas_validas:
  - "subducción"
  - "separación"
respuesta: proceso

enunciado: "Si nos encontramos en un borde de tipo {tipo_borde}, el proceso geológico predominante es la ___."

explicacion: |
  En un borde convergente, el proceso es la subducción; en un borde divergente, es la separación de placas.
```

### 14 — El origen del magma

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["magma", "superficie"]

tipo: mc
opciones_explicitas: ["Llega a la superficie", "Se mantiene en el manto", "Se solidifica inmediatamente", "Se transforma en roca sólida"]
respuesta: "Llega a la superficie"

enunciado: "Tanto en zonas de subducción como en dorsales, el magma tiene la capacidad de ___."

explicacion: |
  La actividad volcánica ocurre precisamente porque el magma logra ascender desde el manto hasta la superficie terrestre.
```

### 15 — Secuencia de formación volcánica

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "avanzado"
  tags: ["procesos", "tectonica"]

tipo: ordenar
opciones_explicitas: ["Movimiento de placas", "Fusión de material", "Ascenso de magma", "Erupción volcánica"]
respuesta_orden: ["Movimiento de placas", "Fusión de material", "Ascenso de magma", "Erupción volcánica"]

enunciado: "Ordena los pasos que ocurren típicamente en una zona de subducción hasta la erupción:"

explicacion: |
  Primero ocurre el movimiento de las placas, lo que provoca la fusión del material en el manto, luego el magma asciende y finalmente ocurre la erupción.
```

### 16 — El Cinturón de Fuego

```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "basico"
  tags: ["tectonica_de_placas", "geologia"]

tipo: mc
opciones_explicitas: ["El océano Índico", "El océano Atlántico", "El océano Pacífico", "El océano Ártico"]
respuesta: "El océano Pacífico"

enunciado: "El Cinturón de Fuego es una zona de intensa actividad sísmica y volcánica que rodea el océano ________."

explicacion: |
  El Cinturón de Fuego del Pacífico es una zona de aproximadamente 40,000 km de longitud donde ocurre la mayor parte de la actividad sísmica y volcánica del mundo debido a la interacción de los bordes de las placas tectónicas.
```

### 17 — Placas y Sismos

```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "intermedio"
  tags: ["tectonica_de_placas", "sismos"]

variables:
  escenario: uno_de([["subducción", "una placa se desliza debajo de otra", "se produce un arco volcánico y fosas marinas"], ["divergencia", "las placas se separan", "se crea nueva corteza oceánica en dorsales"], ["transformación", "las placas se deslizan lateralmente", "se generan grandes fallas como la de San Andrés"]])

tipo: completar
respuesta: escenario[0]

enunciado: "Cuando en un límite de placas tectónicas {escenario[1]}, {escenario[2]}. Este tipo de límite se denomina límite de ___."

explicacion: |
  Los tres tipos principales de límites de placas tectónicas son divergentes (separación), convergentes o de subducción (una placa se hunde bajo otra) y transformantes (deslizamiento lateral). Cada uno genera fenómenos geológicos característicos, desde dorsales oceánicas hasta fosas y fallas.
```

### 18 — Concentración de Volcanes

```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "basico"
  tags: ["volcanes", "geografia_fisica"]

tipo: mc
opciones_explicitas: ["Baja", "Moderada", "Muy alta"]
respuesta: "Muy alta"

enunciado: "Debido a la constante interacción de los bordes de placas, la densidad de volcanes activos en el Cinturón de Fuego es ________."

explicacion: |
  La mayoría de los volcanes activos del mundo se encuentran en esta zona debido a la actividad tectónica constante.
```

### 19 — Orden de procesos tectónicos

```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "avanzado"
  tags: ["procesos_geologicos", "tectonica"]

tipo: ordenar
opciones_explicitas: ["Acumulación de tensión elástica", "Ruptura de la falla", "Liberación de energía (sismo)", "Movimiento de la placa"]
respuesta_orden: ["Acumulación de tensión elástica", "Ruptura de la falla", "Liberación de energía (sismo)", "Movimiento de la placa"]

enunciado: "Ordena cronológicamente los eventos que ocurren durante un terremoto causado por la interacción de placas en el Cinturón de Fuego:"

explicacion: |
  La tensión se acumula por el movimiento de las placas, llega un punto crítico donde la roca se rompe (ruptura), liberando energía en forma de ondas sísmicas.
```

### 20 — Cálculo de distancia sísmica

```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "intermedio"
  tags: ["sismos", "calculo"]

variables:
  datos: uno_de([[3000, 15.0], [5000, 25.0], [8000, 40.0]])

tipo: completar
respuesta: datos[1]
tolerancia_abs: 0.1

enunciado: "Si una onda sísmica detectada en el Cinturón de Fuego viaja a una velocidad constante de 200 km/min, ¿a cuántos minutos llegará al observador si el epicentro está a {datos[0]} km de distancia?"

pasos:
  - "Identificar la distancia: {datos[0]} km"
  - "Identificar la velocidad: 200 km/min"
  - "Dividir distancia / velocidad: {datos[0]} / 200"

explicacion: |
  El tiempo se calcula dividiendo la distancia recorrida por la velocidad: {datos[0]} km / 200 km/min = {datos[1]} minutos.
```

### 21 — Bordes Divergentes

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["tectonica", "placas"]

variables:
  datos: [["dorsal oceánica", "divergente"], ["valle de rift", "divergente"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "El fenómeno de la formación de una {datos[idx][0]} es característico de un límite de placas de tipo ________."

explicacion: |
  En los límites divergentes, las placas se separan, permitiendo la salida de magma que crea nuevo relieve, como las dorsales o los rifts.
```

### 22 — Zonas de Subducción

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["tectonica", "subduccion"]

variables:
  datos: [["trinchera oceánica", "convergente"], ["arco volcánico", "convergente"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "La presencia de una {datos[idx][0]} indica que las placas se encuentran en un límite de tipo ________."

explicacion: |
  Los límites convergentes ocurren cuando las placas colisionan, pudiendo subducir una debajo de otra (creando trincheras) o elevar cordilleras.
```

### 23 — Fallas Transformantes

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["tectonica", "fallas"]

variables:
  datos: [["falla de San Andrés", "transformante"], ["desplazamiento lateral", "transformante"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "El movimiento de {datos[idx][0]} es un ejemplo clásico de un límite de placas ________."

explicacion: |
  En los límites transformantes, las placas se deslizan lateralmente una respecto a la otra sin crear ni destruir litosfera.
```

### 24 — Relieve de Colisión

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "avanzado"
  tags: ["tectonica", "orogenesis"]

variables:
  datos: [["cordillera del Himalaya", "convergente"], ["doblamiento de corteza", "convergente"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "La formación de {datos[idx][0]} es el resultado de un proceso de colisión en un límite ________."

explicacion: |
  La colisión entre placas continentales (convergencia) produce el acortamiento y elevación de la corteza, formando grandes cordilleras.
```

### 25 — Expansión del Fondo Marino

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["tectonica", "oceanos"]

variables:
  datos: [["crecimiento de la dorsal", "divergente"], ["separación de placas", "divergente"]]
  idx: uno_de([0, 1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "El proceso de {datos[idx][0]} se asocia directamente con un borde de tipo ________."

explicacion: |
  La expansión del fondo marino ocurre en los límites divergentes donde el magma asciende para rellenar el espacio entre placas.
```
