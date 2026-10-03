# Examen jefe — [PENDIENTE #686]

> Logro #686. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: eucariotas (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["celulas", "nucleo"]

tipo: mc
respuesta: "Presencia de núcleo definido"
opciones_explicitas: ["Presencia de núcleo definido", "Presencia de pared celular de peptidoglicano", "Ausencia de organelas", "ADN circular libre"]

enunciado: "La principal característica que define a una célula eucariota frente a una procariota es la ___."

explicacion: |
  Las células eucariotas poseen un núcleo rodeado por una membrana nuclear que contiene el material genético, mientras que las procariotas tienen el ADN disperso en el citoplasma.
```

```
metadata:
  materia: "biologia"
  tema: "organelas_celulares"
  nivel: "basico"
  tags: ["organelas", "membrana"]

tipo: completar
respuestas_validas:
  - "organelas membranosas"

enunciado: "A diferencia de los procariotas, las células eucariotas presentan un sistema complejo de ___."

explicacion: |
  Los eucariotas cuentan con compartimentos internos delimitados por membranas, como mitocondrias, retículo endoplasmático y aparato de Golgi.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["estructura", "comparacion"]

variables:
  escenario: uno_de([["mitocondria", "respiración celular"], ["cloroplasto", "fotosíntesis"], ["lisosoma", "digestión celular"]])

tipo: mc
opciones_explicitas: ["respiración celular", "fotosíntesis", "digestión celular", "transporte de proteínas"]

enunciado: "En una célula eucariota, la función de {escenario[0]} está asociada a la ___."

respuesta: escenario[1]

explicacion: |
  La estructura {escenario[0]} es una organela membranosa cuya función principal es la {escenario[1]}.
```

```
metadata:
  materia: "biologia"
  tema: "evolucion_celular"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

tipo: ordenar
opciones_explicitas: ["ADN libre en el citoplasma", "Formación de la membrana nuclear", "Aparición de organelas membranosas", "Organismo multicelular complejo"]

enunciado: "Ordena cronológicamente la complejidad estructural desde una célula procariota simple hasta un organismo eucariota complejo:"

explicacion: |
  La evolución celular implicó primero la compartimentación del material genético, luego la especialización de organelas y finalmente la organización multicelular.
respuesta_orden: ["ADN libre en el citoplasma", "Formación de la membrana nuclear", "Aparición de organelas membranosas", "Organismo multicelular complejo"]
```

```
metadata:
  materia: "biologia"
  tema: "nucleo_eucariota"
  nivel: "basico"
  tags: ["nucleo", "membrana"]

tipo: vf

enunciado: "La presencia de una membrana nuclear que delimita el material genético es una característica exclusiva de las células eucariotas."

respuesta: verdadero

explicacion: |
  Es verdadero. Los procariotas no poseen una envoltura nuclear que separe el ADN del resto del citoplasma.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "basico"
  tags: ["eucariotas", "mitocondrias", "endosimbiosis"]

tipo: mc
opciones_explicitas: ["una bacteria aeróbica", "un virus", "un fragmento de núcleo", "un ribosoma"]
respuesta: "una bacteria aeróbica"

enunciado: "Según la teoría endosimbiótica, las mitocondrias se originaron a partir de la integración de una ___ que era capaz de realizar la respiración celular."

explicacion: |
  La teoría endosimbiótica propone que las mitocondrias fueron originalmente bacterias aeróbicas que fueron fagocitadas por una célula huésped, estableciendo una relación simbiótica.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "intermedio"
  tags: ["evolucion", "endosimbiosis"]

variables:
  escenario: uno_de([["bacteria aeróbica", "mitocondria"], ["bacteria fotosintética", "cloroplasto"]])

tipo: completar
respuestas_validas:
  - escenario[0]

enunciado: "Si una célula eucariota primitiva engloba a una ___, el resultado evolutivo es la formación de un(a) {escenario[1]}."

explicacion: |
  El proceso de endosimbiosis implica que un organismo complejo absorbe a uno más pequeño que, en lugar de ser digerido, se convierte en un orgánulo especializado.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "avanzado"
  tags: ["evidencia", "adn", "membrana"]

tipo: mc
opciones_explicitas: ["Poseen su propio ADN circular y ribosomas similares a los procariotas", "Tienen un núcleo rodeado de membrana", "Se originan en el retículo endoplasmático", "No poseen membrana propia"]
respuesta: "Poseen su propio ADN circular y ribosomas similares a los procariotas"
enunciado: "Una de las principales evidencias de que los cloroplastos y mitocondrias fueron bacterias libres es que:"
explicacion: |
  Tanto mitocondrias como cloroplastos poseen su propio material genético en forma de ADN circular, muy similar al de las bacterias actuales, y sus ribosomas son de tipo procariota.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

tipo: ordenar
opciones_explicitas: ["Célula procariota con membrana flexible", "Fagocitosis de una bacteria aeróbica", "Establecimiento de simbiosis", "Célula eucariota con mitocondrias"]

enunciado: "Ordene los eventos que explican la aparición de la célula eucariota con mitocondrias:"

explicacion: |
  La evolución fue un proceso gradual: primero la célula huésped, luego la captura de la bacteria, la convivencia simbiótica y finalmente la especialización del orgánulo.
respuesta_orden: ["Célula procariota con membrana flexible", "Fagocitosis de una bacteria aeróbica", "Establecimiento de simbiosis", "Célula eucariota con mitocondrias"]
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "basico"
  tags: ["cloroplastos", "fotosintesis"]

tipo: vf
enunciado: "Los cloroplastos se originaron a partir de la endosimbiosis de una bacteria fotosintética (cianobacteria)."
respuesta: verdadero
explicacion: |
  Es verdadero. La capacidad de realizar fotosíntesis en las plantas y algas se debe a la incorporación de cianobacterias que se convirtieron en cloroplastos.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "basico"
  tags: ["mitocondria", "evolucion"]

respuesta: "fisión binaria"
tipo: mc
opciones_explicitas: ["ADN circular", "ADN lineal", "fisión binaria", "mitosis"]

enunciado: "La evidencia de que las mitocondrias fueron bacterias es que poseen un tipo de ADN circular y se reproducen mediante ___."

explicacion: |
  Las mitocondrias poseen ADN circular y se dividen por fisión binaria, características típicas de las procariotas.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "intermedio"
  tags: ["adn", "cloroplastos"]

respuesta: "circular"
tipo: completar
respuestas_validas:
  - "circular"

enunciado: "A diferencia del ADN del núcleo celular, el ADN de los cloroplastos es de forma ___."

explicacion: |
  El ADN de los organelos semiautónomos es circular, similar al de las bacterias actuales.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "basico"
  tags: ["reproduccion", "organelos"]

respuesta: "fisión binaria"
tipo: completar
respuestas_validas:
  - "fisión binaria"

enunciado: "El mecanismo de reproducción de las mitocondrias es la ___."

explicacion: |
  Las mitocondrias no se crean de la nada, sino que se dividen mediante fisión binaria, igual que los procariontes.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "intermedio"
  tags: ["membrana", "evolucion"]

respuesta: "doble"
tipo: mc
opciones_explicitas: ["doble", "simple"]

enunciado: "La teoría endosimbiótica sugiere que los organelos como los cloroplastos poseen una ___ membrana, la cual sería el remanente de la membrana de la bacteria original."

explicacion: |
  La presencia de una doble membrana es una evidencia clave de la captura de una célula por otra.
```

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

respuesta_orden: ["Célula procariota", "Fagocitosis", "Célula eucariota con mitocondria"]
tipo: ordenar
opciones_explicitas: ["Célula procariota", "Fagocitosis", "Célula eucariota con mitocondria"]

enunciado: "Ordena los eventos que explican la aparición de la mitocondria según la teoría endosimbiótica:"

pasos:
  - "Una bacteria aeróbica es ingerida por una célula hospedadora."
  - "Se establece una relación de simbiosis."
  - "La bacteria se convierte en un organelo permanente."

explicacion: |
  El proceso implica la ingestión (fagocitosis) de una bacteria que, al no ser digerida, establece una simbiosis que da origen al organelo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["evolucion", "cronologia"]

respuesta: "1500 millones de años"
tipo: mc
opciones_explicitas: ["3800 millones de años", "2000 millones de años", "1500 millones de años", "500 millones de años"]

enunciado: "Los procariotas aparecieron hace aproximadamente 3800 millones de años, mientras que los eucariotas aparecieron mucho después, hace unos ___."

explicacion: |
  La vida procariota es mucho más antigua, con registros de hace unos 3800 millones de años, mientras que la complejidad celular eucariota surgió mucho después.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: "mucho después"
tipo: completar
respuestas_validas:
  - "mucho después"
  - "antes"
  - "al mismo tiempo"

enunciado: "En la línea de tiempo de la vida, los eucariotas aparecieron ___ que los procariotas."

explicacion: |
  Los procariotas dominaron la Tierra durante casi 2000 millones de años antes de la aparición de las células eucariotas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "intermedio"
  tags: ["ordenar", "evolucion"]

opciones_explicitas: ["Aparición de procariotas", "Aparición de eucariotas", "Aparición de organismos multicelulares"]
respuesta_orden: ["Aparición de procariotas", "Aparición de eucariotas", "Aparición de organismos multicelulares"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes hitos biológicos, desde el más antiguo al más reciente:"

explicacion: |
  Primero aparecieron las células procariotas simples, luego las eucariotas con núcleo, y finalmente la multicelularidad compleja.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "avanzado"
  tags: ["calculo", "tiempo"]

variables:
  t_proc: 3800
  t_euc: 1750

respuesta: t_proc - t_euc
tipo: completar
tolerancia_abs: 100

enunciado: "Si los procariotas aparecieron hace {t_proc} millones de años y los eucariotas hace {t_euc} millones de años, ¿cuántos millones de años de ventaja temporal tuvieron los procariotas sobre los eucariotas?"

explicacion: |
  La diferencia es de {t_proc - t_euc} millones de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["logica"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que los eucariotas y los procariotas aparecieron en la Tierra en el mismo periodo geológico inicial?"

explicacion: |
  Es falso. Los procariotas precedieron a los eucariotas por un margen de aproximadamente 2000 millones de años.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["celulas", "nucleo"]

variables:
  datos: [["presencia de nucleo definido", "eucariota"], ["ausencia de nucleo definido", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si una célula presenta {datos[idx][0]}, se trata de una célula tipo ___."

explicacion: |
  Las células eucariotas se caracterizan por tener su material genético rodeado por una membrana nuclear, mientras que las procariotas lo tienen libre en el citoplasma.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["organelos", "mitocondria"]

variables:
  datos: [["mitocondria", "eucariota"], ["ribosomas sin membrana", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "La presencia de {datos[idx][0]} es una característica propia de la célula ___."

explicacion: |
  Los organelos membranosos como las mitocondrias son exclusivos de las células eucariotas. Las procariotas carecen de compartimentos internos delimitados por membranas.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["estructura", "complejidad"]

variables:
  datos: [["organelos complejos", "eucariota"], ["estructura simple", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "eucariota"
  - "procariota"

enunciado: "Una célula con {datos[idx][0]} se clasifica como ___."

explicacion: |
  La complejidad estructural y la compartimentación celular son los rasgos distintivos de los organismos eucariotas.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["tamaño", "escala"]

variables:
  datos: [["10-100 micrometros", "eucariota"], ["1-5 micrometros", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si observamos una célula con un diámetro de {datos[idx][0]}, estamos ante una célula ___."

explicacion: |
  Las células eucariotas son generalmente mucho más grandes (10-100 µm) que las procariotas (1-5 µm) debido a su mayor complejidad interna.
```

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "avanzado"
  tags: ["evolucion", "linaje"]

variables:
  orden: ["procariota", "eucariota"]
  idx: uno_de([0, 1])

respuesta_orden: orden

tipo: ordenar
opciones_explicitas: ["procariota", "eucariota"]

enunciado: "Ordena los tipos celulares según la aparición evolutiva (de la más antigua a la más reciente):"

explicacion: |
  Las células procariotas aparecieron primero en la historia de la vida, seguidas por la aparición de las células eucariotas mediante procesos como la endosimbiosis.
```

## Sección: fotosintesis-cambio-atmosfera-nivel2 (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["cianobacterias", "oxigeno", "evolucion"]

tipo: mc
opciones_explicitas: ["Dióxido de carbono", "Nitrógeno", "Oxígeno", "Metano"]
respuesta: "Oxígeno"

enunciado: "Durante la fotosíntesis oxigénica realizada por las cianobacterias, se produce la fotólisis del agua, liberando como subproducto gaseoso el ___."

explicacion: |
  Las cianobacterias utilizan la luz solar para romper moléculas de agua (H2O), liberando oxígeno (O2) como residuo de este proceso metabólico.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["gran_oxidacion", "atmosfera", "cianobacterias"]

tipo: mc
respuesta: "La atmósfera se volvió oxidante"
opciones_explicitas: ["La atmósfera se volvió oxidante", "La atmósfera se volvió reductora", "La atmósfera se volvió rica en metano", "La atmósfera se volvió rica en nitrógeno"]

enunciado: "El aumento de la concentración de oxígeno atmosférico debido a la actividad de las cianobacterias provocó que la atmósfera dejara de ser reductora. ¿En qué se convirtió?"

explicacion: |
  La Gran Oxidación (o Evento de la Gran Oxidación) transformó la atmósfera primitiva de un estado reductor (rico en gases como CH4 y NH3) a uno oxidante, debido a la acumulación de O2.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["extincion", "anaerobios", "evolucion"]

tipo: completar
respuestas_validas:
  - "anaerobios"

enunciado: "La acumulación de oxígeno en la atmósfera fue un evento catastrófico para las formas de vida ___ que dominaban la Tierra primitiva."

explicacion: |
  Para los organismos anaerobios estrictos, el oxígeno era un gas altamente reactivo y tóxico, lo que provocó una extinción masiva antes de que la vida evolucionara hacia la respiración aeróbica.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["secuencia", "procesos", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Evolución de la fotosíntesis oxigénica", "Liberación de O2 por cianobacterias", "Saturación de sumideros de hierro", "Aumento de O2 atmosférico"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la Gran Oxidación:"

explicacion: |
  Primero surge la fotosíntesis oxigénica; el oxígeno producido es inicialmente absorbido por minerales (como el hierro en los océanos); una vez saturados estos sumideros, el oxígeno comienza a acumularse en la atmósfera.
respuesta_orden: ["Evolución de la fotosíntesis oxigénica", "Liberación de O2 por cianobacterias", "Saturación de sumideros de hierro", "Aumento de O2 atmosférico"]
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["metano", "clima", "oxidacion"]

tipo: completar
tolerancia_abs: 0

enunciado: "Antes de la Gran Oxidación, la atmósfera era rica en metano. La introducción de oxígeno causó que la concentración de este gas ___ drásticamente, afectando el efecto invernadero global."

explicacion: |
  El metano (CH4) es un potente gas de efecto invernadero. La oxidación del metano por el nuevo oxígeno atmosférico redujo el efecto invernadero, lo que posiblemente contribuyó a la primera glaciación global (Glaciación Huronesiana).

respuesta: "disminuir"
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["fotosintesis", "ecuacion", "quimica"]

enunciado: "En el proceso de la fotosíntesis, los organismos autótrofos utilizan la energía lumínica para transformar el dióxido de carbono (CO2) y el agua (H2O) en un producto orgánico esencial y un subproducto gaseoso. El producto orgánico es ___ y el subproducto es ___."

respuestas_validas:
  - "glucosa"
  - "O2"
tipo: completar

explicacion: |
  La ecuación general es: 6CO2 + 6H2O + luz -> C6H12O6 + 6O2.
  La glucosa (C6H12O6) es la molécula orgánica que almacena la energía química, mientras que el oxígeno (O2) es liberado como subproducto.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["evolucion", "oxigeno", "geologia"]

enunciado: "Durante el Gran Evento de Oxidación, antes de que el oxígeno se acumulara masivamente en la atmósfera, ¿qué sucedió principalmente con el O2 producido por las cianobacterias?"

opciones_explicitas: ["el oxígeno se acumuló en los océanos", "el oxígeno se acumuló en la atmósfera", "el oxígeno reaccionó con el metano"]
respuesta: "el oxígeno se acumuló en los océanos"
tipo: mc

explicacion: |
  Antes de la acumulación atmosférica, el oxígeno liberado fue consumido por agentes reductores en los océanos (como el hierro ferroso) y por la oxidación de gases como el metano. Solo cuando estos "sumideros" se saturaron, el O2 comenzó a acumularse en la atmósfera.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["estequiometria", "fotosintesis"]

enunciado: "Si un organismo realiza la fotosíntesis de manera eficiente, por cada molécula de glucosa (C6H12O6) producida, ¿cuántas moléculas de oxígeno (O2) se liberan a la atmósfera?"

opciones_explicitas: ["1", "2", "6", "12"]
respuesta: "6"
tipo: mc

explicacion: |
  Según la estequiometría de la reacción: 6CO2 + 6H2O -> C6H12O6 + 6O2. Por cada mol de glucosa se liberan 6 moles de O2.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["geologia", "oxigenacion"]

enunciado: "La acumulación de oxígeno en la atmósfera fue un proceso extremadamente lento debido a la existencia de sumideros. Un ejemplo principal fue el hierro disuelto en el agua."

opciones_explicitas: ["el hierro disuelto en el agua", "la presencia de metano atmosférico"]
respuesta: "el hierro disuelto en el agua"
tipo: mc

explicacion: |
  La oxidación del hierro disuelto (Fe2+) en los océanos dio lugar a la formación de capas de hierro bandeado (BIFs), consumiendo el oxígeno producido por la fotosíntesis antes de que este pudiera escapar a la atmósfera.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["evolucion", "oxigenacion", "secuencia"]

enunciado: "Ordena cronológicamente los eventos que permitieron la oxigenación de la atmósfera terrestre:"

opciones_explicitas: ["Aparición de fotosíntesis oxigénica", "Oxidación de hierro disuelto en océanos", "Saturación de sumideros de metano", "Acumulación masiva de O2 atmosférico"]
respuesta_orden: ["Aparición de fotosíntesis oxigénica", "Oxidación de hierro disuelto en océanos", "Saturación de sumideros de metano", "Acumulación masiva de O2 atmosférico"]
tipo: ordenar

explicacion: |
  1. Primero surge la fotosíntesis oxigénica.
  2. El O2 producido se usa para oxidar el hierro en los mares (formando BIFs).
  3. El O2 restante reacciona con gases reductores como el metano.
  4. Una vez agotados los sumideros, el O2 se acumula en la atmósfera.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["evolucion", "oxigeno", "extincion"]

respuesta: "tóxico"
tipo: completar
respuestas_validas:
  - "tóxico"
  - "venenoso"
  - "mortal"

enunciado: "La acumulación de oxígeno en la atmósfera primitiva fue ___ para los organismos anaeróbicos dominantes de esa época."

explicacion: |
  El aumento de oxígeno atmosférico (Gran Oxidación) causó una extinción masiva de organismos anaeróbicos, ya que el oxígeno es altamente reactivo y dañino para sus procesos metabólicos sin enzimas antioxidantes.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["fotosintesis", "oxigeno", "atmosfera"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El oxígeno liberado por la fotosíntesis fue un veneno para los anaerobios.", "tóxico"], ["El oxígeno permitió la aparición de la respiración aeróbica.", "beneficioso"]]

opciones_explicitas: ["tóxico", "beneficioso", "neutro"]
respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "Considerando el impacto de la fotosíntesis en la atmósfera primitiva, ¿cuál fue el efecto principal del oxígeno sobre los organismos anaeróbicos existentes?"

explicacion: |
  {escenarios[escenario_idx][0]}
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion", "oxigeno"]

opciones_explicitas: ["Aparición de fotosíntesis oxigénica", "Acumulación de O2 atmosférico", "Extinción de anaerobios dominantes"]
respuesta_orden: ["Aparición de fotosíntesis oxigénica", "Acumulación de O2 atmosférico", "Extinción de anaerobios dominantes"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos que llevaron a la Gran Oxidación:"

pasos:
  - "Primer paso: la producción de oxígeno por cianobacterias."
  - "Segundo paso: el oxígeno se acumula en la atmósfera."
  - "Tercer paso: la toxicidad del oxígeno causa la extinción de anaerobios."

explicacion: |
  La fotosíntesis oxigénica produjo el oxígeno, que luego se acumuló en la atmósfera, provocando finalmente la extinción de los organismos anaeróbicos dominantes.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["metabolismo", "anaerobio", "oxidacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Si el organismo es anaerobio estricto, el O2 es ___.", "mortal"], ["Si el organismo es aeróbico, el O2 es ___.", "esencial"]]

opciones_explicitas: ["mortal", "esencial", "neutro"]
respuesta: casos[caso_idx][1]
tipo: mc

enunciado: "Analiza el escenario: {casos[caso_idx][0]}"

explicacion: |
  La capacidad de utilizar o resistir el oxígeno determinó la supervivencia de las especies durante la transición hacia una atmósfera oxidante.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["oxigeno", "atmosfera"]

respuesta: 21.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si la fotosíntesis aumentó la concentración de oxígeno de 0% a 21%, ¿en qué porcentaje aumentó la presencia de este gas en la atmósfera (en puntos porcentuales)?"

explicacion: |
  El aumento es la diferencia directa entre el estado final (21%) y el inicial (0%), resultando en 21 puntos porcentuales.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["ozono", "oxigeno", "fotosintesis"]

respuesta: "oxigeno"
tipo: mc
opciones_explicitas: ["nitrogeno", "oxigeno", "metano", "dióxido de carbono"]

enunciado: "La formación de la capa de ozono en la atmósfera terrestre fue posible gracias a la acumulación de ___ liberado por la fotosíntesis oxigénica."

explicacion: |
  La fotosíntesis oxigénica libera oxígeno molecular (O2). La interacción de este oxígeno con la radiación ultravioleta permite la formación de ozono (O3), el cual constituye la capa protectora de la Tierra.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["radiacion_uv", "proteccion"]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que sin la fotosíntesis oxigénica la radiación ultravioleta habría afectado la vida terrestre de forma mucho más severa debido a la falta de una capa de ozono?"

explicacion: |
  Correcto. La capa de ozono actúa como un escudo contra la radiación UV. Sin la producción masiva de oxígeno por parte de los organismos fotosintéticos, esta capa no se habría formado.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

respuesta_orden: ["Fotosíntesis oxigénica", "Acumulación de O2", "Formación de O3 (Ozono)", "Protección UV"]
tipo: ordenar
opciones_explicitas: ["Formación de O3 (Ozono)", "Fotosíntesis oxigénica", "Protección UV", "Acumulación de O2"]

enunciado: "Ordena cronológicamente los procesos que permitieron la protección de la vida terrestre contra la radiación ultravioleta:"

explicacion: |
  El orden correcto es: 1. Fotosíntesis (produce O2) -> 2. Acumulación de O2 en la atmósfera -> 3. Fotólisis del O2 para formar O3 -> 4. Creación de la capa de ozono protectora.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["oxigeno", "ozono"]

respuesta: "O3"
tipo: completar
respuestas_validas:
  - "O3"
  - "ozono"

enunciado: "La presencia de oxígeno (O2) en la atmósfera permitió la formación de la molécula de ___ mediante la acción de la radiación solar."

explicacion: |
  El oxígeno molecular (O2) se descompone por la radiación UV para formar átomos de oxígeno libres, que luego se combinan con otros O2 para formar ozono (O3).
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["radiacion", "consecuencia"]

respuesta: "Aumento de la radiación UV en la superficie"
tipo: mc
opciones_explicitas: ["Aumento de la radiación UV en la superficie", "Disminución de la radiación UV en la superficie", "Aumento del efecto invernadero", "Disminución del oxígeno atmosférico"]

enunciado: "Si los organismos fotosintéticos oxigénicos nunca hubieran evolucionado, ¿cuál sería la consecuencia directa sobre la radiación ultravioleta en la superficie terrestre?"

explicacion: |
  Sin la producción de oxígeno, no habría formación de la capa de ozono, lo que resultaría en un aumento letal de la radiación ultravioleta llegando a la superficie.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["fotosintesis", "oxigeno", "evolucion"]

respuesta: "oxigeno"
tipo: mc
opciones_explicitas: ["oxigeno", "metano", "dióxido de carbono", "nitrógeno"]

enunciado: "Durante el Gran Evento de Oxidación, la actividad de las cianobacterias liberó un gas que transformó la atmósfera primitiva. ¿Qué gas fue?"

explicacion: |
  La aparición de organismos fotosintéticos como las cianobacterias permitió la liberación masiva de oxígeno como subproducto, cambiando la química atmosférica.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["redox", "fotosintesis", "oxigeno"]

respuesta: "O2"
tipo: mc
opciones_explicitas: ["O2", "CO2", "H2", "CH4"]

enunciado: "En la fase luminosa de la fotosíntesis, la fotólisis del agua produce el gas que permitió la vida aeróbica. El balance simplificado es: CO2 + H2O -> ___ + glucosa."

explicacion: |
  La fotólisis del agua libera O2, el cual es fundamental para la respiración celular aeróbica posterior.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["respiracion", "oxigeno", "metabolismo"]

respuesta: "fermentacion"
tipo: completar
respuestas_validas:
  - "fermentacion"

enunciado: "La acumulación de oxígeno en la atmósfera permitió que los organismos pasaran de la ___ a la utilización de aceptores de electrones más eficientes."

explicacion: |
  La disponibilidad de O2 permitió la evolución de la respiración aeróbica, un proceso mucho más eficiente energéticamente que la fermentación.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion", "oxigeno"]

respuesta_orden: ["Fotosíntesis oxigénica", "Oxidación de metano", "Acumulación de O2 atmosférico", "Explosión de la vida aeróbica"]
tipo: ordenar
opciones_explicitas: ["Fotosíntesis oxigénica", "Oxidación de metano", "Acumulación de O2 atmosférico", "Explosión de la vida aeróbica"]

enunciado: "Ordena cronológicamente los eventos que permitieron la transición de una atmósfera reductora a una oxidante:"

explicacion: |
  Primero ocurre la fotosíntesis, luego el oxígeno reacciona con gases reductores (como el metano), luego se acumula en la atmósfera y finalmente permite la vida aeróbica.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["causa", "efecto", "oxigeno"]

variables:
  datos: [["aumento de O2", "vida aerobia"], ["disminución de O2", "extinciones masivas"], ["aumento de CO2", "calentamiento global"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["vida aerobia", "extinciones masivas", "calentamiento global"]

enunciado: "Considerando el impacto biológico: Un {datos[idx][0]} en la atmósfera fue la causa directa de la aparición de la ___."

explicacion: |
  El {datos[idx][0]} permitió la evolución de procesos metabólicos que utilizan oxígeno como aceptor final de electrones.
```

## Sección: multicelularidad (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["celulas", "organismos"]

respuesta: "cooperan y se especializan en funciones distintas"
tipo: completar
respuestas_validas:
  - "cooperan y se especializan en funciones distintas"

enunciado: "La multicelularidad se define como la organización de organismos formados por múltiples células que ___ en vez de vivir cada una de forma independiente."

explicacion: |
  En los organismos multicelulares, las células no solo coexisten, sino que trabajan juntas y desarrollan funciones específicas para asegurar la supervivencia del individuo.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["comparacion", "unicelulares"]

opciones_explicitas: ["Las células funcionan de forma totalmente independiente", "Las células cooperan y se especializan", "Las células son siempre idénticas", "Las células no tienen ADN"]

respuesta: "Las células cooperan y se especializan"
tipo: mc

enunciado: "¿Cuál es la característica principal que distingue a un organismo multicelular de uno unicelular?"

explicacion: |
  A diferencia de los unicelulares, donde una sola célula realiza todas las funciones vitales, los multicelulares dividen el trabajo mediante la especialización celular.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["jerarquia", "organos"]

opciones_explicitas: ["Célula -> Tejido -> Órgano -> Sistema"]

respuesta_orden: ["Célula -> Tejido -> Órgano -> Sistema"]
tipo: ordenar

enunciado: "Ordena correctamente los niveles de organización biológica que surgen gracias a la especialización en organismos multicelulares complejos:"

explicacion: |
  La especialización permite que las células se agrupen en tejidos, los tejidos en órganos, y los órganos en sistemas de órganos.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["especializacion", "funciones"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un grupo de 100 células que solo se dividen", "reproducción"], ["un grupo de 100 células con formas distintas", "especialización"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["reproducción", "especialización"]

enunciado: "Si en un organismo multicelular las células han adquirido formas y funciones diferentes para optimizar el trabajo del individuo, estamos ante un proceso de {escenario[idx][0]}."

explicacion: |
  La especialización es el pilar de la multicelularidad, permitiendo que el organismo sea más eficiente que una colonia de células independientes.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que en un organismo multicelular cada célula puede realizar todas las funciones vitales de manera totalmente independiente de las demás?"

explicacion: |
  Falso. Aunque algunas células pueden ser versátiles, la esencia de la multicelularidad es la interdependencia y la división de funciones.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "intermedio"
  tags: ["evolucion", "linajes"]

respuesta: "independiente"
tipo: completar
respuestas_validas:
  - "independiente"

enunciado: "La evidencia filogenética sugiere que la multicelularidad evolucionó de forma ___ en distintos linajes de la vida."

explicacion: |
  La multicelularidad no es un rasgo que surgió una sola vez en un ancestro común de todos los eucariotas; en su lugar, ocurrió múltiples veces de forma convergente en animales, plantas, hongos y algas.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "basico"
  tags: ["linajes", "taxonomia"]

variables:
  escenario: uno_de([["Animales", "Metazoa", "con células especializadas"], ["Plantas", "Viridiplantae", "con paredes de celulosa"], ["Hongos", "Fungi", "con paredes de quitina"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Metazoa", "Viridiplantae", "Fungi", "Protista"]

enunciado: "Si observamos el linaje de las {escenario[0]}, este se caracteriza por la presencia de {escenario[2]}."

explicacion: |
  Cada uno de estos grupos representa un evento de transición hacia la multicelularidad en un momento distinto de la historia evolutiva.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "basico"
  tags: ["convergencia", "evolucion"]

respuesta: falso
tipo: vf

enunciado: "La multicelularidad es un carácter derivado único que define a todos los organismos complejos en un solo evento evolutivo."

explicacion: |
  Esto es falso. La evolución de la multicelularidad es un ejemplo clásico de evolución convergente, donde diferentes grupos resolvieron el mismo problema biológico por separado.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "intermedio"
  tags: ["algas", "organismos"]

respuesta_orden: ["Animales", "Plantas", "Hongos", "Algas"]
tipo: ordenar

opciones_explicitas: ["Animales", "Plantas", "Hongos", "Algas"]

enunciado: "Ordena los siguientes grupos según su capacidad de haber desarrollado multicelularidad de forma independiente (de mayor a menor complejidad estructural común en la historia evolutiva):"

pasos:
  - "Identificar los linajes clave"
  - "Reconocer la independencia de sus orígenes"

explicacion: |
  Aunque todos son multicelulares, cada uno pertenece a un supergrupo eucariota distinto, lo que confirma que la transición ocurrió de forma independiente.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "avanzado"
  tags: ["algas", "evolucion"]

variables:
  caso: uno_de([["rojas", "Rhodophyta"], ["verdes", "Chlorophyta"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["Rhodophyta", "Chlorophyta", "Oomycota"]

enunciado: "El nombre científico (taxón) del linaje de las algas {caso[0]} es:"

explicacion: |
  Incluso dentro de los grupos que parecen similares, como las algas, la multicelularidad ha surgido en múltiples linajes distintos (algas rojas, verdes, pardas, etc.).
```

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "evolucion"]

tipo: mc
opciones_explicitas: ["Mayor tamaño corporal", "Menor consumo de energía", "Aumento de la superficie de contacto con el medio", "Simplificación de procesos metabólicos"]
respuesta: "Mayor tamaño corporal"

enunciado: "Una de las principales ventajas evolutivas de la multicelularidad es que permite a los organismos alcanzar un ___."

explicacion: |
  El aumento de tamaño corporal permite una mejor interacción con el entorno y una mayor capacidad de almacenamiento de recursos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["biologia", "evolucion"]

variables:
  escenario: uno_de([["digestión", "digestiva"], ["movimiento", "motora"], ["sensorial", "sensorial"]])

tipo: completar
respuestas_validas:
  - "digestiva"
  - "motora"
  - "sensorial"
respuesta: escenario[1]

enunciado: "La división del trabajo permite que existan células con funciones específicas. Si un grupo de células se especializa en el movimiento, se dice que tiene una función ___."

explicacion: |
  La especialización celular permite que diferentes tejidos realicen tareas distintas de manera eficiente, permitiendo la complejidad biológica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "evolucion"]

tipo: mc
opciones_explicitas: ["Ser más visibles para los depredadores", "Ser más difíciles de ingerir para los depredadores", "Reducir la necesidad de alimento", "Aumentar la tasa de evaporación"]
respuesta: "Ser más difíciles de ingerir para los depredadores"

enunciado: "El incremento en el tamaño corporal derivado de la multicelularidad ofrece una ventaja de supervivencia relacionada con:"

explicacion: |
  Los organismos más grandes suelen ser más difíciles de consumir para depredadores de pequeño tamaño, lo que aumenta sus posibilidades de supervivencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "avanzado"
  tags: ["biologia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Célula unicelular", "Agregación de células", "Colonia de células", "Organismo multicelular especializado"]

respuesta_orden: ["Célula unicelular", "Agregación de células", "Colonia de células", "Organismo multicelular especializado"]

enunciado: "Ordena los niveles de organización biológica desde la forma más simple hasta la más compleja en el proceso evolutivo de la multicelularidad:"

explicacion: |
  La evolución hacia la multicelularidad implica pasar de células aisladas a agrupaciones que luego desarrollan una división de funciones coordinada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["biologia", "evolucion"]

tipo: completar
tolerancia_abs: 0

enunciado: "En un organismo multicelular, la división del trabajo implica que las células ya no pueden realizar todas las funciones por sí mismas. Este proceso de especialización se conoce como ___."

respuesta: "diferenciación"

explicacion: |
  La diferenciación celular es el proceso mediante el cual las células adquieren formas y funciones específicas dentro de un organismo complejo.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["adhesion", "evolucion"]

tipo: mc
opciones_explicitas: ["proteínas de adhesión", "paredes celulares rígidas", "flagelos de locomoción", "vacuolas contráctiles"]
respuesta: "proteínas de adhesión"

enunciado: "Para que un grupo de células pase de ser una colonia a un organismo multicelular, es indispensable el desarrollo de mecanismos de ___ que permitan mantener la cohesión entre ellas."

explicacion: |
  La multicelularidad requiere que las células se mantengan unidas físicamente mediante proteínas de adhesión (como cadherinas o integrinas), algo que no es necesario en organismos unicelulares independientes.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["comunicacion", "señalización"]

tipo: mc
opciones_explicitas: ["comunicación química", "reproducción asexual", "fotosíntesis", "quimiotaxis"]
respuesta: "comunicación química"

enunciado: "En un organismo multicelular, para que exista una división del trabajo, las células deben coordinar sus procesos. Esto se logra mediante la ___."

explicacion: |
  A diferencia de los unicelulares que responden a estímulos externos, los multicelulares necesitan comunicarse entre sí (comunicación química/señalización) para actuar como una unidad funcional.
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["unicelulares", "multicelulares"]

tipo: completar
opciones_explicitas: ["adhesión", "comunicación", "metabolismo", "respiración"]
respuestas_validas:
  - "adhesión"
  - "comunicación"

enunciado: "Mientras que un organismo unicelular es una unidad autónoma, la multicelularidad requiere mecanismos de ___ y de ___ para funcionar como un todo integrado."

explicacion: |
  La transición a la multicelularidad implica dos pilares: la capacidad de pegarse (adhesión) y la capacidad de hablarse (comunicación).
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "avanzado"
  tags: ["evolucion", "procesos"]

tipo: ordenar
opciones_explicitas: ["Agrupamiento de células", "Especialización celular", "Diferenciación de tejidos", "Organización de órganos"]

enunciado: "Ordena los procesos evolutivos que permiten pasar de una colonia de células idénticas a un organismo complejo:"

explicacion: |
  Primero las células deben estar juntas (agrupamiento), luego adquieren funciones distintas (especialización/diferenciación) y finalmente se organizan en estructuras mayores (tejidos/órganos).
respuesta_orden: ["Agrupamiento de células", "Especialización celular", "Diferenciación de tejidos", "Organización de órganos"]
```

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["proteinas", "adhesion"]

variables:
  datos: [["cadherina", "unión célula-célula"], ["integrina", "unión célula-matriz"]]
  idx: uno_de([0, 1])

tipo: completar
tolerancia_abs: 0

enunciado: "Si una célula utiliza una {datos[idx][0]} para adherirse a su entorno, está ejerciendo una función de ___."

explicacion: |
  Las cadherinas median la unión célula-célula, mientras que las integrinas median la unión célula-matriz extracelular; ambas son clave para la cohesión de los tejidos en organismos multicelulares.

respuesta: datos[idx][1]
```

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "clasificacion"]

variables:
  datos: [["Amoeba proteus", "unicelular"], ["Homo sapiens", "multicelular"]]
  idx: uno_de([0, 1])

enunciado: "El organismo {datos[idx][0]} se caracteriza por ser un organismo ___________."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["unicelular", "multicelular"]

explicacion: |
  Los organismos unicelulares están formados por una sola célula que realiza todas las funciones vitales, mientras que los multicelulares están formados por múltiples células especializadas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["evolucion", "celulas"]

variables:
  datos: [["un grupo de algas verdes", "multicelulares"], ["una bacteria extremófila", "unicelulares"]]
  idx: uno_de([0, 1])

enunciado: "Considerando el ejemplo de {datos[idx][0]}, podemos clasificar a este grupo como ___________."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "unicelulares"
  - "multicelulares"

explicacion: |
  La multicelularidad implica la especialización celular y la división de funciones, algo que no ocurre en los organismos unicelulares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "taxonomia"]

variables:
  datos: [["Paramecium", "unicelular"], ["Fungi (hongo)", "multicelular"]]
  idx: uno_de([0, 1])

enunciado: "Si observamos un {datos[idx][0]}, su estructura es ___________."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["unicelular", "multicelular"]

explicacion: |
  La distinción fundamental radica en el número de células que componen el individuo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "avanzado"
  tags: ["evolucion", "orden"]

enunciado: "Ordena los niveles de organización biológica desde el más simple al más complejo:"

pasos:
  - "Organismo unicelular"
  - "Colonia de células"
  - "Organismo multicelular con tejidos"

respuesta_orden: ["Organismo unicelular", "Colonia de células", "Organismo multicelular con tejidos"]
tipo: ordenar
opciones_explicitas: ["Organismo unicelular", "Colonia de células", "Organismo multicelular con tejidos"]

explicacion: |
  La evolución hacia la multicelularidad implica pasar de células aisladas a agrupaciones con comunicación y especialización.
```

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["laboratorio", "observacion"]

variables:
  datos: [["una muestra de levadura", "unicelular"], ["una muestra de musgo", "multicelular"]]
  idx: uno_de([0, 1])

enunciado: "Al analizar {datos[idx][0]} bajo el microscopio, determinamos que es ___________."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "unicelular"
  - "multicelular"

explicacion: |
  La observación microscópica permite identificar si la unidad funcional es una célula individual o un conjunto de ellas organizadas.
```

## Sección: tectonica-placas-deriva-continental (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["wegener", "geologia", "historia"]

respuesta: "Alfred Wegener"
tipo: completar
respuestas_validas:
  - "Alfred Wegener"

enunciado: "El científico que propuso la teoría de la deriva continental en 1912 fue ___."

explicacion: |
  Alfred Wegener fue un meteorólogo y geofísico alemán que postuló que los continentes se desplazan sobre la superficie terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["evidencia", "geografia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["África", "Sudamérica"], ["India", "Antártida"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Sudamérica", "Antártida", "Australia", "Europa"]

enunciado: "Wegener observó que las costas de {datos[escenario_idx][0]} y {datos[escenario_idx][1]} encajaban casi perfectamente como piezas de un rompecabezas."

explicacion: |
  El encaje de los contornos continentales fue una de las observaciones iniciales más impactantes de la teoría de Wegener.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["evidencia", "fosiles"]

respuesta: "fósiles"
tipo: mc
opciones_explicitas: ["fósiles", "astros", "mareas", "viento"]

enunciado: "Además del encaje de las costas, la coincidencia de ___ de especies idénticas en continentes separados apoyó la teoría de la deriva continental."

explicacion: |
  El hallazgo de fósiles de animales y plantas que no podrían haber cruzado océanos actuales fue una prueba fundamental.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["cronologia", "historia"]

respuesta: 1912
tipo: completar
tolerancia_abs: 0

enunciado: "Wegener presentó su hipótesis de la deriva continental en el año ___."

explicacion: |
  En 1912, Wegener presentó su hipótesis que cambiaría la geología para siempre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["pangea", "geologia"]

variables:
  nombre_supercontinente: "Pangea"

respuesta: "Pangea"
tipo: completar
respuestas_validas:
  - "Pangea"

enunciado: "Wegener denominó al supercontinente que agrupaba a todas las masas de tierra actuales como ___."

explicacion: |
  El término Pangea (que significa "toda la Tierra") fue acuñado para describir la masa continental única de hace millones de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["pangea", "geologia"]

respuesta: "Pangea"
tipo: completar
respuestas_validas:
  - "Pangea"

enunciado: "El supercontinente que agrupaba a todas las masas terrestres hace aproximadamente 335 millones de años se denominaba ___."

explicacion: |
  Pangea fue un supercontinente que existió durante el período Pérmico y el Triásico, antes de su fragmentación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["fragmentacion", "oceanos"]

respuesta: "Panthalassa"
tipo: mc
opciones_explicitas: ["Panthalassa", "Tetis", "Atlántico", "Índico"]

enunciado: "Cuando Pangea comenzó a fragmentarse, el vasto océano que rodeaba a la masa continental se llamaba ___."

explicacion: |
  El océano global que rodeaba a Pangea era el Panthalassa. El Tetis era un océano más pequeño situado entre Laurasia y Gondwana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["movimiento", "tectonica"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["convergente", "divergente", "transformante", "estacionaria"]

enunciado: "El movimiento de las placas tectónicas que provoca que los continentes se separen es un movimiento de tipo ___."

explicacion: |
  Los límites divergentes ocurren cuando las placas se separan, permitiendo que el magma ascienda y cree nueva corteza oceánica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["secuencia", "geologia"]

respuesta_orden: ["Pangea", "Laurasia", "Gondwana", "Continentes actuales"]
tipo: ordenar
opciones_explicitas: ["Pangea", "Laurasia", "Gondwana", "Continentes actuales"]

enunciado: "Ordena cronológicamente los estados de la masa terrestre desde la unidad única hasta la configuración actual:"

explicacion: |
  Primero existió el supercontinente único (Pangea), luego se dividió en dos grandes masas (Laurasia al norte y Gondwana al sur) hasta llegar a la distribución actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["evidencias", "fósiles"]

respuesta: "Fósiles de Mesosaurus"
tipo: mc
opciones_explicitas: ["Fósiles de Mesosaurus", "Restos de dinosaurios", "Estructuras volcánicas", "Depósitos de carbón"]

enunciado: "La presencia de ___ en continentes separados como África y Sudamérica es una prueba clave de la deriva continental."

explicacion: |
  El Mesosaurus era un reptil de agua dulce cuyas huellas fósiles se encuentran tanto en África como en Sudamérica, lo que indica que ambos continentes estuvieron unidos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["geologia", "placas_tectonicas"]

tipo: mc
opciones_explicitas: ["Divergente", "Convergente", "Transformante"]

enunciado: "Cuando dos placas tectónicas se mueven en direcciones opuestas alejándose una de la otra, el tipo de borde formado es un borde ________."

respuesta: "Divergente"

explicacion: |
  Los bordes divergentes ocurren cuando las placas se separan, permitiendo que el magma ascienda y cree nueva corteza oceánica (como en la dorsal mesoatlántica).
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["subduccion", "convergencia"]

tipo: mc
opciones_explicitas: ["Subducción", "Rifting", "Deslizamiento lateral"]

enunciado: "En un borde tipo convergente, si una placa oceánica colisiona con una placa continental, el proceso por el cual la placa más densa se hunde hacia el manto se denomina ________."

respuesta: "Subducción"

explicacion: |
  En los bordes convergentes, la placa oceánica (más densa) se subduce bajo la continental, generando fosas marinas y actividad volcánica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["sismos", "transformante"]

tipo: mc
opciones_explicitas: ["Falla de San Andrés", "Dorsal Mesoatlántica", "Cordillera de los Andes"]

enunciado: "Los bordes transformantes se caracterizan por el deslizamiento lateral de las placas. Un ejemplo clásico de este tipo de movimiento es la ________."

respuesta: "Falla de San Andrés"

explicacion: |
  En los bordes transformantes las placas se deslizan lateralmente sin crear ni destruir corteza, acumulando tensión que se libera en forma de sismos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["montañas", "convergencia"]

tipo: completar
respuestas_validas:
  - "montañas"
  - "valles"

enunciado: "La colisión entre dos masas continentales en un borde convergente da lugar principalmente a la formación de ________."

respuesta: "montañas"

explicacion: |
  Cuando dos placas continentales chocan, la corteza se pliega y se eleva, formando grandes cordilleras como el Himalaya.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["ciclo_tectonico", "procesos"]

tipo: ordenar
opciones_explicitas: ["Separación de placas", "Ascenso de magma", "Creación de nueva corteza", "Expansión del fondo oceánico"]

enunciado: "Ordene correctamente la secuencia de eventos que ocurre en un borde divergente oceánico:"

respuesta_orden: ["Separación de placas", "Ascenso de magma", "Creación de nueva corteza", "Expansión del fondo oceánico"]

explicacion: |
  En los bordes divergentes, la separación de placas permite el ascenso de magma, el cual se solidifica creando nueva corteza y expandiendo el lecho marino.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "manto", "conveccion"]

respuesta: "corrientes de convección"
tipo: completar
respuestas_validas:
  - "corrientes de convección"
  - "convección"

enunciado: "El movimiento de las placas tectónicas es impulsado principalmente por las ___ en el manto terrestre."

explicacion: |
  El calor interno de la Tierra genera corrientes de convección en el manto, donde el material caliente asciende y el frío desciende, moviendo las placas superficiales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["calor", "manto", "energia"]

respuesta: "El calor interno de la Tierra"
tipo: mc
opciones_explicitas: ["El calor interno de la Tierra", "La rotación del planeta", "La atracción lunar"]

enunciado: "¿Cuál es la causa fundamental que desencadena las corrientes de convección en el manto terrestre?"

explicacion: |
  El gradiente térmico (diferencia de temperatura) entre el núcleo y la corteza es la fuente de energía que mueve el manto.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["manto", "conveccion", "densidad"]

respuesta: "ascendente"
tipo: completar
respuestas_validas:
  - "ascendente"
  - "hacia arriba"

enunciado: "En una celda de convección, el material del manto que es menos denso debido al calor se desplaza de forma ___."

explicacion: |
  El material caliente es menos denso y asciende hacia la litosfera, mientras que el material frío y denso desciende.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["densidad", "termodinamica"]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿El aumento de la temperatura en el material del manto provoca una disminución de su densidad, facilitando el ascenso del material?"

explicacion: |
  Efectivamente, la expansión térmica reduce la densidad, lo que genera el movimiento ascendente característico de la convección.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["proceso", "secuencia", "conveccion"]

respuesta_orden: ["Calentamiento del manto", "Reducción de densidad", "Ascenso de material", "Desplazamiento de la placa"]
tipo: ordenar
opciones_explicitas: ["Calentamiento del manto", "Reducción de densidad", "Ascenso de material", "Desplazamiento de la placa"]

enunciado: "Ordena la secuencia lógica de un ciclo de convección que resulta en el movimiento de una placa tectónica:"

pasos:
  - "El núcleo transfiere calor al manto."
  - "El material se expande y se vuelve menos denso."
  - "El material caliente sube hacia la litosfera."
  - "La fricción y el arrastre mueven la placa superficial."

explicacion: |
  La secuencia comienza con la transferencia de calor, sigue con el cambio físico de las propiedades del material (densidad), el movimiento fluido (ascenso) y finalmente el efecto mecánico sobre la litosfera.
```

```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "bordes_divergentes"]

enunciado: "Se observa la formación de nueva corteza oceánica en un límite de tipo ___."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: "divergente"
tipo: mc

explicacion: |
  La formación de nueva corteza en las dorsales oceánicas ocurre en los bordes divergentes, donde las placas se separan.
```

```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "bordes_convergentes"]

variables:
  datos: [["cordillera de los Andes", "convergente"], ["dorsal mesoatlantica", "divergente"], ["falla de San Andrés", "transformante"]]
  idx: uno_de([0,1,2])

enunciado: "La presencia de la {datos[idx][0]} es característica de un límite de tipo ___."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Las cordilleras resultantes de la colisión o subducción son típicas de los bordes convergentes.
```

```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["tectonica", "bordes_transformantes"]

enunciado: "Un movimiento de deslizamiento lateral, como el de la falla de San Andrés, indica un borde de tipo ___."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: "transformante"
tipo: mc

explicacion: |
  Las fallas transformantes ocurren cuando las placas se deslizan horizontalmente una respecto a la otra.
```

```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["tectonica", "subduccion"]

enunciado: "La existencia de una fosa oceánica profunda es evidencia de un límite de placas tipo ___."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: "convergente"
tipo: mc

explicacion: |
  Las fosas oceánicas se forman en los límites convergentes por la subducción de una placa bajo otra.
```

```
metadata:
  materia: "geologia"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["tectonica", "procesos"]

variables:
  datos: [["creación de corteza", "divergente"], ["destrucción de corteza", "convergente"], ["desplazamiento lateral", "transformante"]]
  idx: uno_de([0,1,2])

enunciado: "El proceso de {datos[idx][0]} es el resultado principal de un borde ___."

opciones_explicitas: ["divergente", "convergente", "transformante"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Cada tipo de borde se define por el proceso geológico predominante: creación (divergente), destrucción (convergente) o deslizamiento (transformante).
```

## Sección: explosion-cambrica (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["paleontologia", "evolucion"]

respuesta: "541"
tipo: completar
tolerancia_abs: 1

enunciado: "La Explosión Cámbrica ocurrió hace aproximadamente ___ millones de años."

explicacion: |
  La Explosión Cámbrica comenzó hace unos 541 millones de años, marcando el inicio del periodo Cámbrico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["taxonomia", "evolucion"]

variables:
  escenario: uno_de([["la mayoría de los grupos corporales", "phyla"], ["la mayor parte de los animales", "phyla"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["phyla", "clases", "especies", "órdenes"]

enunciado: "Durante la Explosión Cámbrica, se produjo la aparición de la mayoría de los grandes grupos animales actuales, conocidos como ___."

explicacion: |
  Se refiere a los phyla (filos), que son las categorías taxonómicas más altas de los animales.
```

```
metadata:
  materia: "historia_profucha"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["tiempo_geologico"]

respuesta: 25
tipo: completar
tolerancia_abs: 5

enunciado: "Aunque fue un evento masivo, la Explosión Cámbrica fue un periodo relativamente breve en términos geológicos, durando aproximadamente ___ millones de años."

pasos:
  - "Identificar el rango de tiempo estimado para la diversificación de los filos."

explicacion: |
  Se estima que este evento de diversificación duró entre 20 y 25 millones de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["paleontologia", "fósiles"]

respuesta: "más complejos"
tipo: mc
opciones_explicitas: ["más complejos", "más simples", "idénticos", "menos diversos"]

enunciado: "En comparación con la biota de Ediacara que precedió al Cámbrico, los organismos de la Explosión Cámbrica eran ___."

explicacion: |
  La biota de Ediacara consistía en organismos de cuerpo blando y morfología menos especializada, mientras que el Cámbrico introdujo estructuras más complejas y con partes duras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["cronologia"]

opciones_explicitas: ["Precámbrico", "Cámbrico", "Ordovícico"]
respuesta_orden: ["Precámbrico", "Cámbrico", "Ordovícico"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes periodos/eones, empezando por el más antiguo:"

pasos:
  - "Ubicar el Precámbrico como la era anterior."
  - "Colocar el Cámbrico como el periodo de la explosión."
  - "Ubicar el Ordovícico como el periodo posterior."

explicacion: |
  La cronología correcta es Precámbrico (que incluye el Ediacárico), seguido del Cámbrico y luego el Ordovícico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["oxigeno", "geologia", "evolucion"]

enunciado: "¿Cuál de las siguientes teorías explica el desarrollo de organismos con metabolismos más complejos durante la explosión cámbrica?"

respuesta: "aumento de oxígeno"
tipo: mc
opciones_explicitas: ["aumento de oxígeno", "cambio en la salinidad", "descarga de metano"]

explicacion: |
  El aumento de la disponibilidad de oxígeno (oxigenación) fue crucial para sostener la alta demanda energética de los nuevos cuerpos complejos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["genetica", "hox", "desarrollo"]

enunciado: "La aparición de una familia de genes reguladores fundamentales para el plan corporal de los animales se denomina genes ___."

respuesta: "Hox"
respuestas_validas:
  - "Hox"
tipo: completar

explicacion: |
  Los genes Hox controlan el eje anteroposterior del embrión, permitiendo la segmentación y especialización de los cuerpos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["depredacion", "seleccion_natural"]

enunciado: "La aparición de la depredación actuó como una presión evolutiva masiva, obligando a los organismos a desarrollar conchas, esqueletos y sistemas sensoriales."

respuesta: "depredación"
tipo: mc
opciones_explicitas: ["depredación", "simbiósis", "filtración"]

explicacion: |
  La depredación creó un ciclo de retroalimentación: los depredadores necesitaban mejores sentidos y armas, y las presas, mejores defensas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["causas", "causalidad"]

opciones_explicitas: ["Aumento de O2", "Evolución de genes Hox", "Aparición de depredación"]

enunciado: "Ordena los factores que se consideran un modelo de causalidad en cascada para la explosión cámbrica (de la causa ambiental a la consecuencia biológica):"

respuesta_orden: ["Aumento de O2", "Evolución de genes Hox", "Aparición de depredación"]
tipo: ordenar

explicacion: |
  El modelo sugiere que el oxígeno permitió la vida compleja, los genes Hox permitieron la arquitectura corporal, y la depredación impulsó la diversificación rápida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["oxigeno", "quimica"]

enunciado: "Si el nivel de oxígeno en el océano aumenta, la probabilidad de que surjan organismos de gran tamaño es: ___"

respuesta: "mayor"
respuestas_validas:
  - "mayor"
tipo: completar

explicacion: |
  Los organismos grandes requieren más energía para mantener sus tejidos, la cual se obtiene mediante la respiración aeróbica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["ediacara", "precambrico"]

respuesta: "blandos"
tipo: completar
respuestas_validas:
  - "blandos"
  - "blandos"

enunciado: "Antes de la explosión cámbrica, los organismos que componían la fauna de Ediacara eran mayormente de cuerpo ___."

explicacion: |
  La fauna de Ediacara se caracteriza por organismos con estructuras corporales simples y, en su gran mayoría, sin partes endurecidas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["evolucion", "esqueletos"]

variables:
  escenario: uno_de([["aparición de esqueletos", "estructuras duras"], ["aparición de ojos", "órganos sensoriales"], ["aparición de depredadores", "planes complejos"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["estructuras duras", "órganos sensoriales", "planes complejos"]

enunciado: "Uno de los cambios biológicos más significativos durante la explosión cámbrica fue la aparición de {escenario[0]}."

explicacion: |
  La evolución de partes duras (conchas, esqueletos) y órganos sensoriales complejos como los ojos permitió una nueva dinámica de supervivencia y depredación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

opciones_explicitas: ["Organismos de Ediacara", "Aparición de esqueletos", "Diversificación de planos corporales"]
respuesta_orden: ["Organismos de Ediacara", "Aparición de esqueletos", "Diversificación de planos corporales"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos biológicos desde el Precámbrico hasta el Cámbrico:"

explicacion: |
  Primero dominaban los organismos de Ediacara; luego, la biomineralización permitió la aparición de esqueletos, lo que finalmente impulsó la diversificación de planos corporales complejos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["sensores", "evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "¿La aparición de ojos y sistemas sensoriales complejos fue una característica distintiva de la explosión cámbrica?"

explicacion: |
  Correcto. La capacidad de detectar movimiento y luz permitió el desarrollo de una red trófica mucho más activa y compleja.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  datos: [["Ediacara", "simples"], ["Cámbrico", "complejos"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["simples", "complejos"]

enunciado: "Si comparamos la era de Ediacara con la explosión cámbrica, los organismos del Cámbrico eran biológicamente más {datos[idx][0]}."

explicacion: |
  La explosión cámbrica marca el paso de formas de vida mayormente simples a formas con planes corporales altamente especializados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia", "paleontologia", "canada"]

respuesta: "Canadá"
tipo: completar
respuestas_validas:
  - "Canadá"

enunciado: "El famoso yacimiento de Burgess Shale, que documenta la diversidad de la fauna del Cámbrico, se encuentra ubicado en el país de ___."

explicacion: |
  El yacimiento de Burgess Shale está situado en las Montañas Rocosas de la provincia de Columbia Británica, en Canadá.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["preservacion", "fofiles"]

variables:
  tipo_preservacion: uno_de(["carbonización", "permineralización", "molde"])

respuesta: "carbonización"
tipo: mc
opciones_explicitas: ["carbonización", "permineralización", "molde"]

enunciado: "La preservación excepcional de los tejidos blandos en Burgess Shale se debe principalmente a un proceso de ___ de la materia orgánica."

explicacion: |
  La formación de películas delgadas de carbono (carbonización) permitió la preservación de estructuras blandas que normalmente no se fosilizan.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

opciones_explicitas: ["Explosión de la vida multicelular", "Aparición de los primeros organismos unicelulares", "Extinción masiva del Pérmico", "Aparición de las plantas terrestres"]
respuesta_orden: ["Aparición de los primeros organismos unicelulares", "Explosión de la vida multicelular", "Aparición de las plantas terrestres", "Extinción masiva del Pérmico"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes eventos biológicos/geológicos, desde el más antiguo al más reciente:"

explicacion: |
  La vida comenzó con organismos unicelulares, seguida por la explosión de diversidad del Cámbrico, la colonización de la tierra por plantas y, mucho después, las grandes extinciones masivas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["anomalocaris", "depredador"]

respuesta: verdadero
tipo: vf

enunciado: "Basándonos en la morfología de *Anomalocaris canadensis* hallado en Burgess Shale, se considera que era un depredador de ápice."

explicacion: |
  *Anomalocaris* es uno de los depredadores más conocidos del Cámbrico, con apéndices frontales diseñados para capturar presas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["biologia", "evolucion"]

respuesta: "alta"
tipo: completar
respuestas_validas:
  - "alta"

pasos:
  - "Identificar el periodo de la explosión cámbrica."
  - "Determinar el nivel de diversidad biológica observado en Burgess Shale."

enunciado: "La diversidad de filos animales documentada en Burgess Shale durante la explosión cámbrica se caracteriza por ser de una magnitud ___."

explicacion: |
  La explosión cámbrica representó un aumento drástico en la complejidad y diversidad de los cuerpos animales en el registro fósil.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia", "paleontologia"]

respuesta: "Paleozoico"
tipo: mc
opciones_explicitas: ["Paleozoico", "Proterozoico", "Mesozoico", "Cenozoico"]

enunciado: "La explosión cámbrica marca el inicio del eón Fanerozoico, específicamente de la era del ___."

explicacion: |
  La explosión cámbrica ocurrió hace unos 541 millones de años, marcando el inicio del eón Fanerozoico y la era Paleozoica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["escala_tiempo", "geologia"]

respuesta: "Ediacárico"
tipo: completar
respuestas_validas:
  - "Ediacárico"
  - "Ediacarano"

enunciado: "Si nos situamos inmediatamente antes de la explosión cámbrica, nos encontramos en el periodo ___."

explicacion: |
  El periodo Ediacárico precede a la explosión cámbrica, la cual da inicio al periodo Cámbrico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["orden", "escala_tiempo"]

variables:
  secuencia: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]

respuesta_orden: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]
tipo: ordenar
opciones_explicitas: ["Ediacarano", "Cámbrico", "Ordovícico", "Silúrico"]

enunciado: "Ordena cronológicamente los siguientes periodos/eras, comenzando desde el más antiguo antes de la explosión cámbrica:"

explicacion: |
  La secuencia correcta es: Ediacarano (Precambriano tardío), Cámbrico (inicio de la explosión), Ordovícico y Silúrico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["geologia", "eventos"]

respuesta: "Cambriano"
tipo: mc
opciones_explicitas: ["Cambriano", "Triásico", "Jurásico", "Permiano"]

enunciado: "La diversificación masiva de la vida animal, conocida como la explosión cámbrica, ocurrió hace aproximadamente 541 Ma, dando inicio al periodo ___."

explicacion: |
  La explosión cámbrica es el evento que define el inicio del periodo Cámbrico hace unos 541 millones de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["geologia"]

respuesta: "Cámbrico"
tipo: completar
respuestas_validas:
  - "Cámbrico"

enunciado: "La explosión cámbrica es el evento fundacional del periodo ___."

explicacion: |
  La explosión cámbrica marca el inicio del periodo Cámbrico dentro de la era Paleozoica.
```

