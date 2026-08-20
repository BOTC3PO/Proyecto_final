# Historia Profunda — Fotosintesis cambio atmosfera nivel2 (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El subproducto de la fotosíntesis

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

### 2 — El evento de la Gran Oxidación

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["gran_oxidacion", "atmosfera", "cianobacterias"]

variables:
  escenario: uno_de([["La liberación masiva de O2", "La extinción de organismos anaerobios"], ["La acumulación de metano", "La formación de la capa de ozono"]])

tipo: mc
respuesta: "La atmósfera se volvió oxidante"
opciones_explicitas: ["La atmósfera se volvió oxidante", "La atmósfera se volvió reductora", "La atmósfera se volvió rica en metano", "La atmósfera se volvió rica en nitrógeno"]

enunciado: "El aumento de la concentración de oxígeno atmosférico debido a la actividad de las cianobacterias provocó que la atmósfera dejara de ser reductora para convertirse en {escenario[0]}."

explicacion: |
  La Gran Oxidación (o Evento de la Gran Oxidación) transformó la atmósfera primitiva de un estado reductor (rico en gases como CH4 y NH3) a uno oxidante, debido a la acumulación de O2.
```

### 3 — Impacto en la vida primitiva

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

### 4 — Secuencia del cambio atmosférico

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

### 5 — El papel del metano

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["metano", "clima", "oxidacion"]

variables:
  factor: uno_de(["metano", "dióxido de carbono"])

tipo: completar
tolerancia_abs: 0

enunciado: "Antes de la Gran Oxidación, la atmósfera era rica en {factor}. La introducción de oxígeno causó que la concentración de este gas ___ drásticamente, afectando el efecto invernadero global."

explicacion: |
  El metano (CH4) es un potente gas de efecto invernadero. La oxidación del metano por el nuevo oxígeno atmosférico redujo el efecto invernadero, lo que posiblemente contribuyó a la primera glaciación global (Glaciación Huronesiana).

respuesta: "disminuir"
```

### 6 — La ecuación de la fotosíntesis

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

### 7 — El gran evento de la oxidación

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["evolucion", "oxigeno", "geologia"]

variables:
  escenario: uno_de([["el oxígeno se acumuló en los océanos", "el oxígeno se acumuló en la atmósfera", "el oxígeno reaccionó con el metano"], ["el oxígeno se acumuló en los océanos", "el oxígeno se acumuló en la atmósfera", "el oxígeno reaccionó con el metano"]])

enunciado: "Durante el Gran Evento de Oxidación, antes de que el oxígeno se acumulara masivamente en la atmósfera, ¿qué sucedió principalmente con el O2 producido por las cianobacterias? {escenario[0]}"

opciones_explicitas: ["el oxígeno se acumuló en los océanos", "el oxígeno se acumuló en la atmósfera", "el oxígeno reaccionó con el metano"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  Antes de la acumulación atmosférica, el oxígeno liberado fue consumido por agentes reductores en los océanos (como el hierro ferroso) y por la oxidación de gases como el metano. Solo cuando estos "sumideros" se saturaron, el O2 comenzó a acumularse en la atmósfera.
```

### 8 — Balance de masa en la fotosíntesis

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

### 9 — El papel de los sumideros geológicos

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["geologia", "oxigenacion"]

variables:
  caso: uno_de([["el hierro disuelto en el agua", "la presencia de metano atmosférico"], ["el hierro disuelto en el agua", "la presencia de metano atmosférico"]])

enunciado: "La acumulación de oxígeno en la atmósfera fue un proceso extremadamente lento debido a la existencia de sumideros. Un ejemplo principal fue {caso[0]}."

opciones_explicitas: ["el hierro disuelto en el agua", "la presencia de metano atmosférico"]
respuesta: caso[0]
tipo: mc

explicacion: |
  La oxidación del hierro disuelto (Fe2+) en los océanos dio lugar a la formación de capas de hierro bandeado (BIFs), consumiendo el oxígeno producido por la fotosíntesis antes de que este pudiera escapar a la atmósfera.
```

### 10 — Secuencia de la oxigenación planetaria

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

### 11 — El impacto del oxígeno

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

### 12 — El Gran Evento de Oxidación

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

### 13 — Secuencia de la Gran Oxidación

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

### 14 — Metabolismo y Oxígeno

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

### 15 — El valor del oxígeno

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["oxigeno", "atmosfera"]

respuesta: 0.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si la fotosíntesis aumentó la concentración de oxígeno de 0% a 21%, ¿en qué porcentaje aumentó la presencia de este gas en la atmósfera (en puntos porcentuales)?"

explicacion: |
  El aumento es la diferencia directa entre el estado final (21%) y el inicial (0%), resultando en 21 puntos porcentuales.
```

### 16 — Origen de la capa de ozono

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

### 17 — Radiación UV y vida

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "basico"
  tags: ["radiacion_uv", "proteccion"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que sin la fotosíntesis oxigénica la radiación ultravioleta no habría afectado la vida terrestre de la misma manera debido a la falta de una capa de ozono?"

explicacion: |
  Correcto. La capa de ozono actúa como un escudo contra la radiación UV. Sin la producción masiva de oxígeno por parte de los organismos fotosintéticos, esta capa no se habría formado.
```

### 18 — Secuencia de eventos atmosféricos

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

### 19 — El papel del oxígeno

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

### 20 — Consecuencia de la ausencia de fotosíntesis

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

### 21 — Origen del oxígeno

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["fotosintesis", "oxigeno", "evolucion"]

variables:
  datos: [["cianobacterias", "oxigeno"], ["plantas", "oxigeno"], ["algas", "oxigeno"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["oxigeno", "metano", "dióxido de carbono", "nitrógeno"]

enunciado: "Durante el Gran Evento de Oxidación, la actividad de las {datos[idx][0]} liberó un gas que transformó la atmósfera primitiva. ¿Qué gas fue?"

explicacion: |
  La aparición de organismos fotosintéticos como las {datos[idx][0]} permitió la liberación masiva de oxígeno como subproducto, cambiando la química atmosférica.
```

### 22 — El cambio redox

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["redox", "fotosintesis", "oxigeno"]

variables:
  datos: [["CO2 + H2O", "O2"], ["CH4 + O2", "CO2"], ["H2O + CO2", "H2"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["O2", "CO2", "H2", "CH4"]

enunciado: "En la fase luminosa de la fotosíntesis, la fotólisis del agua produce el gas que permitió la vida aeróbica. El balance simplificado es: {datos[idx][0]} -> ___ + glucosa."

explicacion: |
  La fotólisis del agua libera {datos[idx][1]}, el cual es fundamental para la respiración celular aeróbica posterior.
```

### 23 — Impacto en la vida aeróbica

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["respiracion", "oxigeno", "metabolismo"]

variables:
  datos: [["presencia de O2", "respiracion aerobia"], ["ausencia de O2", "fermentacion"], ["exceso de O2", "respiracion aerobia"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "respiracion aerobia"
  - "fermentacion"

enunciado: "La acumulación de oxígeno en la atmósfera permitió que los organismos pasaran de la ___ a la utilización de aceptores de electrones más eficientes."

explicacion: |
  La disponibilidad de O2 permitió la evolución de la respiración aeróbica, un proceso mucho más eficiente energéticamente que la fermentación.
```

### 24 — Secuencia de eventos geológicos

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

### 25 — Relación causa-efecto

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
