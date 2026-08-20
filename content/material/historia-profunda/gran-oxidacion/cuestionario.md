# Historia Profunda — Gran oxidacion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El origen del oxígeno

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["biologia", "atmosfera"]

tipo: mc
opciones_explicitas: ["Cianobacterias", "Dinosaurios", "Volcanes", "Asteroides"]
respuesta: "Cianobacterias"

enunciado: "La Gran Oxidación fue causada por la actividad de un grupo de organismos fotosintéticos conocidos como ___."

explicacion: |
  Las cianobacterias fueron los primeros organismos capaces de realizar la fotosíntesis oxigénica, liberando oxígeno como subproducto.
```

### 2 — El destino del oxígeno inicial

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["geologia", "quimica"]

variables:
  escenario: uno_de([["el oxígeno reaccionó con el hierro disuelto en los océanos", "se formaron formaciones de hierro bandeado (BIF)"], ["el oxígeno se acumuló rápidamente en la atmósfera", "se produjo un efecto invernadero masivo"]])

tipo: mc
opciones_explicitas: ["Escenario A", "Escenario B"]

enunciado: "Durante el inicio de la Gran Oxidación, el oxígeno liberado no fue a la atmósfera inmediatamente, sino que primero {escenario[0]}."

respuesta: "Escenario A"

explicacion: |
  Antes de que el oxígeno se acumulara en la atmósfera, reaccionó con el hierro disuelto en los océanos, depositándolo en el fondo marino como hierro bandeado.
```

### 3 — El impacto climático

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["clima", "extincion"]

tipo: completar
respuestas_validas:
  - "Glaciación"
  - "calentamiento"

enunciado: "La acumulación de oxígeno en la atmósfera provocó la oxidación del metano (un potente gas de efecto invernadero), lo que derivó en una de las mayores ___ de la historia de la Tierra."

explicacion: |
  La reducción de gases de efecto invernadero como el metano provocó un enfriamiento global extremo, conocido como la Glaciación Huronesiana.
```

### 4 — Secuencia de eventos

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["cronologia"]

tipo: ordenar
opciones_explicitas: ["Fotosíntesis oxigénica", "Oxidación de hierro disuelto", "Acumulación de O2 atmosférico", "Glaciación global"]

enunciado: "Ordena cronológicamente los eventos que caracterizaron el periodo de la Gran Oxidación:"

explicacion: |
  Primero surge la fotosíntesis, luego el oxígeno reacciona con el hierro (BIF), luego el oxígeno llega a la atmósfera y finalmente causa el enfriamiento global.
respuesta_orden: ["Fotosíntesis oxigénica", "Oxidación de hierro disuelto", "Acumulación de O2 atmosférico", "Glaciación global"]
```

### 5 — El estado de la atmósfera

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["atmosfera"]

tipo: completar
tolerancia_abs: 0

enunciado: "Antes de la Gran Oxidación, la atmósfera terrestre era predominantemente ________ (escribe 'anóxica' o 'rica' según corresponda)."

respuesta: "anóxica"

explicacion: |
  La atmósfera primordial era anóxica, es decir, carecía de niveles significativos de oxígeno libre.
```

### 6 — La Gran Oxidación

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["extincion", "oxigeno", "anaerobico"]

respuesta: "extinción masiva"
tipo: completar
respuestas_validas:
  - "extinción masiva"

enunciado: "El aumento repentino de oxígeno en la atmósfera terrestre durante la Gran Oxidación es considerado la primera ___ de la historia."

explicacion: |
  La acumulación de oxígeno, producto de la fotosíntesis oxigénica, fue letal para la mayoría de los organismos anaeróbicos que dominaban la Tierra primitiva.
```

### 7 — Organismos afectados

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["anaerobico", "oxigeno"]

variables:
  tipo_organismo: uno_de(["anaeróbicos", "aeróbicos"])

tipo: mc
opciones_explicitas: ["anaeróbicos", "aeróbicos", "fotosintéticos", "eucariotas"]
respuesta: "anaeróbicos"

enunciado: "Antes de la Gran Oxidación, la atmósfera era rica en gases reductores y la vida estaba compuesta mayoritariamente por organismos de tipo {tipo_organismo}."

explicacion: |
  Los organismos anaeróbicos no poseen mecanismos para neutralizar el oxígeno, por lo que este actuó como un veneno oxidante para ellos.
```

### 8 — Causas de la liberación de oxígeno

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["fotosintesis", "cianobacterias"]

respuesta: "cianobacterias"
tipo: mc
opciones_explicitas: ["cianobacterias", "volcanes", "asteroides", "metano"]

enunciado: "La principal causa biológica del aumento de oxígeno atmosférico fue la aparición de las:"

explicacion: |
  Las cianobacterias desarrollaron la fotosíntesis oxigénica, liberando oxígeno como subproducto, lo que alteró la química global del planeta.
```

### 9 — Secuencia de la crisis

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["secuencia", "oxigeno", "vida"]

tipo: ordenar
respuesta_orden: ["producción de oxígeno", "acumulación de oxígeno", "extinción de anaerobios", "aparición de la vida aeróbica"]
opciones_explicitas: ["producción de oxígeno", "acumulación de oxígeno", "extinción de anaerobios", "aparición de la vida aeróbica"]

enunciado: "Ordena cronológicamente los eventos que caracterizaron la Gran Oxidación:"

explicacion: |
  Primero se produjo el oxígeno, luego se acumuló en la atmósfera tras saturar los sumideros químicos, provocando la muerte masiva de anaerobios y permitiendo finalmente la evolución de la respiración aeróbica.
```

### 10 — Efecto químico

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["quimica_atmosferica", "oxigeno"]

variables:
  estado_oxigeno: uno_de(["tóxico", "vital"])

respuesta: "tóxico"
tipo: mc
opciones_explicitas: ["tóxico", "vital", "neutro", "incoloro"]

enunciado: "Para la vida predominante en el Arcaico, el oxígeno atmosférico no era un elemento vital, sino un agente ___."

explicacion: |
  Debido a la ausencia de enzimas antioxidantes en los organismos de la época, el oxígeno libre causaba daños oxidativos letales en sus estructuras celulares.
```

### 11 — Consecuencia biológica de la Gran Oxidación

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["evolucion", "oxigeno"]

respuesta: "aeróbicos"
tipo: completar
respuestas_validas:
  - "aeróbicos"

enunciado: "La acumulación de oxígeno en la atmósfera tras la Gran Oxidación permitió la evolución de organismos de tipo ___."

explicacion: |
  La presencia de oxígeno libre permitió que los organismos desarrollaran la respiración aeróbica, un proceso mucho más eficiente para obtener energía que la fermentación.
```

### 12 — Impacto en la complejidad de la vida

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["complejidad", "oxigeno"]

opciones_explicitas: ["Organismos unicelulares simples", "Formas de vida más complejas y de mayor tamaño", "Vida basada exclusivamente en el metano", "Ausencia total de vida orgánica"]

respuesta: "Formas de vida más complejas y de mayor tamaño"
tipo: mc

enunciado: "El oxígeno liberado durante la Gran Oxidación sentó las bases para el surgimiento de:"

explicacion: |
  Al ser la respiración aeróbica mucho más eficiente energéticamente, permitió que los organismos tuvieran el excedente de energía necesario para mantener estructuras corporales más grandes y complejas.
```

### 13 — El rol del oxígeno en la evolución

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["metabolismo", "oxigeno"]

variables:
  resultado: uno_de(["Limitación energética", "Aumento de la eficiencia energética"])

respuesta: resultado
tipo: mc
opciones_explicitas: ["Limitación energética", "Aumento de la eficiencia energética", "Reducción del tamaño celular", "Extinción de la vida multicelular"]

enunciado: "Considerando el impacto metabólico de la Gran Oxidación, el oxígeno permitió un {resultado}."

pasos:
  - "Analizar la diferencia entre metabolismo anaeróbico y aeróbico."
  - "Relacionar la eficiencia energética con el tamaño del organismo."

explicacion: |
  La oxidación de la glucosa en presencia de oxígeno produce muchísima más energía (ATP) que los procesos anaeróbicos, permitiendo la multicelularidad.
```

### 14 — Secuencia de la Gran Oxidación

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

opciones_explicitas: ["Producción de oxígeno", "Acumulación de oxígeno en la atmósfera", "Evolución de organismos aeróbicos", "Aparición de vida compleja"]

respuesta_orden: ["Producción de oxígeno", "Acumulación de oxígeno en la atmósfera", "Evolución de organismos aeróbicos", "Aparición de vida compleja"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos derivados de la actividad de los cianobacterias:"

explicacion: |
  Primero se produce el oxígeno por fotosíntesis, luego este se acumula en la atmósfera al saturarse los sumideros químicos, lo que permite la respiración aeróbica y finalmente la complejidad biológica.
```

### 15 — El cambio en la atmósfera

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["atmosfera", "oxigeno"]

respuesta: "oxígeno"
tipo: completar
respuestas_validas:
  - "oxígeno"

enunciado: "El gas liberado masivamente que transformó la química de la Tierra fue el ___."

explicacion: |
  La liberación de oxígeno por parte de los organismos fotosintéticos cambió la composición química de la atmósfera primitiva.
```

### 16 — Identificación de la formación

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["geologia", "oxigeno"]

tipo: mc
opciones_explicitas: ["Formaciones de hierro bandeado (BIF)", "Capas de esquisto negro", "Depósitos de carbón", "Calizas de magnesio"]
respuesta: "Formaciones de hierro bandeado (BIF)"

enunciado: "Las evidencias geológicas de la Gran Oxidación se manifiestan principalmente en las llamadas Formaciones de hierro bandeado (BIF)."

explicacion: |
  Las Formaciones de Hierro Bandeado (BIF, por sus siglas en inglés) son capas de roca ricas en óxidos de hierro que se depositaron cuando el oxígeno liberado por la fotosíntesis reaccionó con el hierro disuelto en los océanos.
```

### 17 — Proceso de precipitación

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["quimica_prebiotica", "oceanos"]

variables:
  elemento_reactivo: "uno_de(['hierro disuelto', 'azufre líquido', 'silicato de magnesio'])"
  idx: "uno_de([0, 1, 2])"

tipo: completar
respuestas_validas:
  - "hierro disuelto"

enunciado: "Durante la Gran Oxidación, el ___ en los océanos reaccionó con el oxígeno molecular, provocando su precipitación en el fondo marino."

explicacion: |
  El hierro estaba disuelto en los océanos en forma de Fe(II). Al aparecer el oxígeno (O2), este oxidó el hierro a Fe(III), el cual es insoluble y precipitó como óxido de hierro.
```

### 18 — Secuencia de la oxidación oceánica

```
metadata:
  materia: "historia_profucha"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["secuencia", "geologia"]

tipo: ordenar
opciones_explicitas: ["Producción de O2 por cianobacterias", "Oxidación de hierro disuelto en el océano", "Precipitación de óxidos de hierro (BIF)", "Aumento de la oxigenación atmosférica"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la formación de los depósitos de hierro bandeado y la oxigenación atmosférica:"

explicacion: |
  Primero la vida fotosintética produce oxígeno; luego este oxida el hierro disponible en el agua; esto genera los depósitos BIF; finalmente, una vez saturado el sumidero de hierro, el oxígeno comienza a acumularse en la atmósfera.
respuesta_orden: ["Producción de O2 por cianobacterias", "Oxidación de hierro disuelto en el océano", "Precipitación de óxidos de hierro (BIF)", "Aumento de la oxigenación atmosférica"]
```

### 19 — El papel de los sumideros

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["sumideros", "oxigeno"]

tipo: vf

enunciado: "La formación de las BIF actuó como un 'sumidero' que retrasó la acumulación masiva de oxígeno en la atmósfera durante millones de años."

respuesta: verdadero

explicacion: |
  Verdadero. El oxígeno producido se consumía rápidamente oxidando el hierro y otros compuestos en el océano antes de poder escapar a la atmósfera.
```

### 20 — Cálculo de saturación (Simulación)

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["geoquimica", "oxigeno"]

variables:
  concentracion_oxigeno: "random_float(0.0, 0.01)"
  umbral_saturacion: "0.05"
  respuesta_correcta: "0.05 - concentracion_oxigeno"

tipo: completar
tolerancia_abs: 0.001

enunciado: "Si la concentración de oxígeno en el océano es de {concentracion_oxigeno} moles/m³ y el umbral de saturación de los sumideros de hierro es de {umbral_saturacion} moles/m³, ¿cuál es la diferencia respecto al umbral?"

pasos:
  - "Calcular la diferencia absoluta entre el umbral y la concentración actual."

explicacion: |
  La diferencia es el margen que faltaba para que el oxígeno comenzara a acumularse en la atmósfera tras saturar los sumideros químicos.

respuesta: respuesta_correcta
```

### 21 — El origen del oxígeno

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["biologia", "atmosfera"]

variables:
  datos: [["cianobacterias", "fotosíntesis"], ["cianobacterias", "fotosíntesis"]]
  idx: uno_de([0,1])

enunciado: "El evento conocido como la Gran Oxidación fue impulsado por la aparición de organismos capaces de realizar la {datos[idx][1]}."

respuesta: "fotosíntesis"
tipo: mc
opciones_explicitas: ["fotosíntesis", "quimiosíntesis", "respiración", "fermentación"]

explicacion: |
  Las cianobacterias fueron los primeros organismos en desarrollar la fotosíntesis oxigénica, liberando oxígeno como subproducto.
```

### 22 — Consecuencias químicas

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["quimica", "oxigeno"]

variables:
  datos: [["oxígeno", "oxidación de metano"], ["oxígeno", "oxidación de metano"]]
  idx: uno_de([0,1])

enunciado: "La acumulación de {datos[idx][0]} en la atmósfera provocó la ___ de gases reductores como el metano."

respuesta: "oxidación de metano"
tipo: completar
respuestas_validas:
  - "oxidación de metano"

explicacion: |
  El oxígeno atmosférico reaccionó con el metano (un gas de efecto invernadero), alterando la química global.
```

### 23 — El impacto en la vida anaeróbica

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["extincion", "biologia"]

variables:
  caso: uno_de([["oxígeno", "extinción masiva"], ["oxígeno", "extinción masiva"]])
  tipo_efecto: uno_de(["extinción masiva", "explosión de vida"])

enunciado: "Para los organismos anaerobios de la época, el aumento de ___ representó una ___."

respuesta: "extinción masiva"
tipo: mc
opciones_explicitas: ["extinción masiva", "explosión de vida", "estabilidad climática", "mutación acelerada"]

explicacion: |
  El oxígeno era tóxico para la mayoría de las formas de vida predominantes en ese entonces, causando una extinción masiva.
```

### 24 — Secuencia del evento

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["secuencia", "procesos"]

variables:
  pasos_correctos: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera"]

enunciado: "Ordene los eventos que llevaron a la Gran Oxidación:"

respuesta_orden: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera"]
tipo: ordenar
opciones_explicitas: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera"]

explicacion: |
  Primero se produjo el oxígeno, luego este fue absorbido por minerales (hierro) y finalmente se acumuló en la atmósfera.
```

### 25 — El cambio en el potencial redox

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["quimica", "atmosfera"]

variables:
  datos: [["oxígeno", "oxidante", "oxidante"], ["oxígeno", "oxidante", "oxidante"]]
  idx: uno_de([0,1])

enunciado: "La transición de una atmósfera reductora a una oxidante fue causada por la liberación de ___ que actuó como un potente ___."

respuesta: "oxidante"
tipo: completar
respuestas_validas:
  - "oxidante"

explicacion: |
  El oxígeno es un agente oxidante fuerte que cambió radicalmente el potencial redox de la atmósfera terrestre.
```
