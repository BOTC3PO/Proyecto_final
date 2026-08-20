# Historia Profunda — Conquista tierra firme (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Colonización vegetal

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["evolucion", "plantas"]

respuesta: "plantas"
tipo: completar
respuestas_validas:
  - "plantas"

enunciado: "Las primeras formas de vida en colonizar la tierra firme fueron las ___."

explicacion: |
  Hace aproximadamente 470 millones de años, las plantas fueron las pioneras en la transición del medio acuático al terrestre.
```

### 2 — Cronología de la conquista

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["cronologia", "evolucion"]

variables:
  escenario: uno_de([["plantas", "470", "artrópodos"], ["artrópodos", "370", "plantas"], ["tetrápodos", "370", "artrópodos"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["plantas", "artrópodos", "tetrápodos"]

enunciado: "De acuerdo con el registro fósil, ¿qué grupo fue el primero en colonizar la tierra firme hace {escenario[2]} millones de años?"

explicacion: |
  El orden de colonización fue: 1° Plantas (~470 Ma), 2° Artrópodos y 3° Tetrápodos (~370 Ma).
```

### 3 — El ascenso de los tetrápodos

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["tetrapodos", "evolucion"]

respuesta: 370
tipo: completar
tolerancia_abs: 5

enunciado: "Los primeros tetrápodos comenzaron su expansión por tierra firme hace aproximadamente ___ millones de años."

pasos:
  - "Identificar el grupo de vertebrados con cuatro extremidades."
  - "Localizar su aparición en la línea de tiempo de la conquista terrestre."

explicacion: |
  Los tetrápodos aparecieron en el registro fósil hace unos 370 millones de años, mucho después de las plantas y los artrópodos.
```

### 4 — Orden evolutivo terrestre

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "avanzado"
  tags: ["orden", "evolucion"]

respuesta_orden: ["plantas", "artrópodos", "tetrápodos"]
tipo: ordenar
opciones_explicitas: ["plantas", "artrópodos", "tetrápodos"]

enunciado: "Ordene cronológicamente los grupos que colonizaron la tierra firme, desde el más antiguo al más reciente:"

explicacion: |
  La secuencia correcta es: Plantas (470 Ma) -> Artrópodos -> Tetrápodos (370 Ma).
```

### 5 — Relación temporal

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["comparacion", "tiempo"]

variables:
  datos: uno_de([["plantas", "artrópodos"], ["artrópodos", "tetrápodos"], ["plantas", "tetrápodos"]])

respuesta: datos[1]
tipo: mc
opciones_explicitas: ["plantas", "artrópodos", "tetrápodos"]

enunciado: "Si las {datos[0]} colonizaron la tierra hace 470 millones de años, ¿qué grupo colonizó después de ellas pero antes que los tetrápodos?"

explicacion: |
  El orden cronológico es: Plantas -> Artrópodos -> Tetrápodos.
```

### 6 — Adaptación contra la deshidratación

```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "basico"
  tags: ["cuticula", "deshidratacion"]

respuesta: "cuticula"
tipo: completar
respuestas_validas:
  - "cuticula"

enunciado: "Para evitar la pérdida excesiva de agua por evaporación en ambientes terrestres, muchos organismos han desarrollado una capa protectora externa llamada ___."

explicacion: |
  La cutícula es una capa cerosa e impermeable que sella la superficie del organismo, permitiendo la vida en medios secos al minimizar la deshidratación.
```

### 7 — Soporte en medios terrestres

```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "intermedio"
  tags: ["soporte", "esqueleto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["agua", "flotabilidad"], ["aire", "gravedad"]]

respuesta: uno_de(["esqueleto interno", "flotabilidad"])
tipo: mc
opciones_explicitas: ["esqueleto interno", "flotabilidad", "flotabilidad neutra", "soporte hidrostático"]

enunciado: "En el medio acuático, el empuje compensa el peso. Sin embargo, al pasar a vivir en el {datos[escenario_idx][0]}, los organismos necesitan estructuras de soporte para vencer la {datos[escenario_idx][1]}."

explicacion: |
  En tierra, la gravedad actúa directamente sobre el cuerpo sin la ayuda del empuje hidrostático, lo que requiere estructuras rígidas (como esqueletos) para mantener la forma y permitir el movimiento.
```

### 8 — El desafío de la respiración aérea

```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "basico"
  tags: ["respiracion", "pulmones"]

respuesta: "pulmones"
tipo: mc
opciones_explicitas: ["branquias", "pulmones", "piel desnuda", "estomas"]

enunciado: "A diferencia de las branquias, que extraen oxígeno disuelto en agua, los animales terrestres suelen desarrollar ___ para captar el oxígeno presente en el aire."

explicacion: |
  Los pulmones o estructuras similares (como los traqueal en insectos) permiten la difusión de gases en un medio gaseoso sin que las superficies respiratorias se colapsen por falta de soporte líquido.
```

### 9 — Relación entre medio y estructura

```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "avanzado"
  tags: ["evolucion", "respiracion"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["branquias", "agua"], ["pulmones", "aire"]]

respuesta: uno_de(["branquias", "pulmones"])
tipo: completar
respuestas_validas:
  - "branquias"
  - "pulmones"

enunciado: "Si un organismo evoluciona de un medio de {escenarios[caso_idx][1]} a uno de aire, su sistema de intercambio gaseoso debe pasar de tener {escenarios[caso_idx][0]} a tener ___."

explicacion: |
  La transición del agua al aire exige un cambio radical: de estructuras que dependen de la humedad constante (branquias) a órganos protegidos que eviten el colapso y la sequedad (pulmones).
```

### 10 — Secuencia de adaptaciones terrestres

```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "avanzado"
  tags: ["evolucion", "secuencia"]

respuesta_orden: ["cuticula", "soporte", "pulmones"]
tipo: ordenar
opciones_explicitas: ["cuticula", "soporte", "pulmones"]

enunciado: "Ordena las adaptaciones necesarias para colonizar la tierra firme, desde la prevención de la sequedad hasta la locomoción y la respiración:"

pasos:
  - "Primero: Evitar la deshidratación."
  - "Segundo: Mantener la forma contra la gravedad."
  - "Tercero: Obtener oxígeno del medio gaseoso."

explicacion: |
  La colonización de la tierra requirió primero evitar la muerte por sequedad (cutícula), luego desarrollar estructuras que sostengan el peso (soporte/esqueleto) y finalmente optimizar la captura de oxígeno (pulmones).
```

### 11 — El origen de los tetrápodos

```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "intermedio"
  tags: ["evolucion", "tetrapodos", "sarcopterigios"]

respuesta: "sarcopterigios"
tipo: completar
respuestas_validas:
  - "sarcopterigios"
  - "peces de aletas lobuladas"

enunciado: "Los tetrápodos evolucionaron a partir de un grupo específico de peces con aletas lobuladas conocidos como ___."

explicacion: |
  Los sarcopterigios (del griego 'sarcopteryx', aleta carnosa) son peces que poseen aletas con una estructura ósea similar a la de los miembros de los tetrápodos, lo que permitió la transición hacia la vida terrestre.
```

### 12 — El eslabón perdido: Tiktaalik

```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "intermedio"
  tags: ["tiktaalik", "transicion", "paleontologia"]

variables:
  escenario: uno_de([["Tiktaalik roseae", "un fósil que muestra una transición entre peces y anfibios"], ["Eusthenopteron", "un pez sarcopterigio más primitivo"], ["Panderichthys", "un pez que muestra características de transición"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["un fósil que muestra una transición entre peces y anfibios", "un pez sarcopterigio más primitivo", "un pez que muestra características de transición"]

enunciado: "El fósil {escenario[0]} es fundamental para la paleontología porque se considera {escenario[1]}."

explicacion: |
  Tiktaalik es un ejemplo clásico de morfología de transición, poseyendo características de peces (escamas, branquias) y de tetrápodos (cuello, articulaciones en las aletas para soportar peso).
```

### 13 — Características de la transición

```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "avanzado"
  tags: ["morfologia", "transicion"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que los primeros tetrápodos aparecieron de forma súbita sin formas de transición con aletas lobuladas?"

explicacion: |
  La evidencia fósil demuestra una transición gradual donde las estructuras de soporte en las aletas de los sarcopterigios se modificaron para permitir el movimiento en ambientes poco profundos o terrestres.
```

### 14 — Secuencia evolutiva

```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "intermedio"
  tags: ["orden_evolutivo"]

opciones_explicitas: ["Peces Actinopterigios", "Peces Sarcopterigios", "Tetrápodos"]
respuesta_orden: ["Peces Actinopterigios", "Peces Sarcopterigios", "Tetrápodos"]
tipo: ordenar

enunciado: "Ordena cronológicamente la línea evolutiva que lleva de los peces comunes a los vertebrados con cuatro extremidades:"

pasos:
  - "Identifica el grupo de peces con aletas radiadas (no lobuladas)."
  - "Identifica el grupo con aletas carnosas (base de la evolución)."
  - "Identifica el grupo con extremidades articuladas."

explicacion: |
  La evolución muestra un paso de la radiación de las aletas (actinopterigios) hacia la especialización de la base de la aleta (sarcopterigios) y finalmente el desarrollo de miembros (tetrápodos).
```

### 15 — Anatomía de la transición

```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "basico"
  tags: ["anatomia", "extremidades"]

variables:
  caracteristica: uno_de([["presencia de cuello", "permite mover la cabeza independientemente del tronco"], ["presencia de escamas", "protección contra la desecación"], ["presencia de branquias", "respiración acuática"]])

respuesta: caracteristica[0]
tipo: mc
opciones_explicitas: ["presencia de cuello", "presencia de escamas", "presencia de branquias"]

enunciado: "Una de las innovaciones morfológicas clave observada en fósiles de transición como Tiktaalik fue la {caracteristica}."

explicacion: |
  A diferencia de los peces, que tienen la cabeza fusionada al tronco, los primeros tetrápodos y sus ancestros de transición desarrollaron un cuello, permitiendo mayor movilidad para alimentarse y navegar en aguas someras.
```

### 16 — El impacto de la vegetación en el paisaje

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["botanica", "paleoecologia", "ciclo_del_agua"]

variables:
  escenario: uno_de(["bosque_denso", "estepa_abierta"])
  tipo_suelo: uno_de(["suelo_desnudo", "suelo_cubierto"])

enunciado: "Durante la conquista de Tierra Firme, la expansión de la vegetación tipo {escenario} sobre un {tipo_suelo} modificó drásticamente la escorrentía superficial."

opciones_explicitas:
  - "Aumentó la escorrentía"
  - "Disminuyó la escorrentía"
  - "No hubo cambios"

respuesta: "Disminuyó la escorrentía"
tipo: mc

explicacion: |
  La presencia de plantas y la cobertura vegetal actúan como una barrera física que intercepta la lluvia y permite la infiltración en el suelo, reduciendo la velocidad del agua superficial y, por ende, la escorrentía.
```

### 17 — El ciclo del carbono y la biomasa

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "avanzado"
  tags: ["carbono", "fotosintesis", "biomasa"]

variables:
  valor_carbono: random_float(100.0, 500.0)

enunciado: "Si una masa forestal emergente en Tierra Firme secuestra aproximadamente {valor_carbono} unidades de carbono por hectárea, el balance neto de la atmósfera durante este periodo de colonización vegetal fue de un valor ___ (positivo/negativo) en términos de almacenamiento de carbono."

respuestas_validas:
  - "positivo"

respuesta: "positivo"
tipo: completar

explicacion: |
  La colonización de las masas continentales por las plantas permitió un secuestro masivo de CO2 atmosférico en forma de biomasa orgánica, transformando el ciclo del carbono de un estado de equilibrio a uno de almacenamiento neto.
```

### 18 — Secuencia de colonización de ecosistemas

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["ecologia", "sucesion", "animales"]

tipo: ordenar
opciones_explicitas: ["Aparición de plantas pioneras", "Estabilización del suelo y ciclo del agua", "Colonización por animales terrestres"]
respuesta_orden: ["Aparición de plantas pioneras", "Estabilización del suelo y ciclo del agua", "Colonización por animales terrestres"]
enunciado: "Ordená la secuencia correcta de la sucesión ecológica primaria."
explicacion: |
  La sucesión ecológica comenzó con la colonización de sustratos desnudos por plantas pioneras, lo que permitió la formación de suelos y la regulación hídrica, creando finalmente el hábitat necesario para la fauna terrestre.
```

### 19 — La regulación del ciclo del agua

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["agua", "evapotranspiracion", "clima"]

enunciado: "El aumento de la cobertura vegetal en Tierra Firme incrementó la tasa de ___ (evapotranspiración/precipitación) hacia la atmósfera, alterando los patrones climáticos locales."

respuestas_validas:
  - "evapotranspiración"

respuesta: "evapotranspiración"
tipo: completar

explicacion: |
  Las plantas no solo retienen agua en el suelo, sino que la devuelven a la atmósfera a través de la transpiración, un proceso clave que regula la humedad atmosférica en los nuevos continentes.
```

### 20 — Preparación del terreno para la fauna

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["fauna", "hábitat", "nutrientes"]

variables:
  factor_clave: uno_de(["nutrientes", "refugio", "alimento"])

enunciado: "La transformación del paisaje mediante la vegetación proporcionó a los animales terrestres un factor crítico para su expansión: {factor_clave}."

opciones_explicitas:
  - "Nutrientes"
  - "Refugio"
  - "Alimento"

respuesta: uno_de(["Nutrientes", "Refugio", "Alimento"])
tipo: mc

explicacion: |
  La vegetación no solo provee alimento, sino que estabiliza el suelo (nutrientes) y crea estructuras físicas para la protección (refugio), permitiendo la diversificación de nichos para la fauna.
```

### 21 — El primer contacto en Tierra Firme

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["conquista", "exploracion"]

variables:
  datos: [["expedición de Colón", "1492"], ["expedición de Cortés", "1519"], ["expedición de Pizarro", "1532"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1492", "1519", "1532"]

enunciado: "El año en que se produjo el evento de la {datos[idx][0]} fue en el año ___."

explicacion: |
  El año mencionado corresponde al inicio de la era de exploración y conquista según el escenario seleccionado.
```

### 22 — Cronología de la Conquista

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_ferme"
  nivel: "intermedio"
  tags: ["ordenar", "cronologia"]

variables:
  eventos: [["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"], ["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"]]

respuesta_orden: ["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"]
tipo: ordenar
opciones_explicitas: ["Llegada a las Antillas", "Llegada a México", "Conquista del Imperio Inca"]

enunciado: "Ordena cronológicamente los hitos de la conquista española en Tierra Firme:"

explicacion: |
  La secuencia correcta comienza con las Antillas, sigue con la caída de los Aztecas y finaliza con la conquista de los Incas.
```

### 23 — Identificación de Conquistadores

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["personajes"]

variables:
  parejas: [["Hernán Cortés", "Imperio Azteca"], ["Francisco Pizarro", "Imperio Inca"], ["Diego Velázquez", "Cuba"]]
  idx: uno_de([0,1,2])

respuesta: parejas[idx][1]
tipo: mc
opciones_explicitas: ["Imperio Azteca", "Imperio Inca", "Cuba"]

enunciado: "El conquistador {parejas[idx][0]} lideró la expedición contra el ___."

explicacion: |
  Cada conquistador estuvo vinculado a una región o imperio específico durante la expansión española.
```

### 24 — El impacto de la conquista

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "avanzado"
  tags: ["consecuencias"]

variables:
  datos: [["caída demográfica", "positiva"], ["encuentro cultural", "positiva"], ["colonización", "positiva"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "positiva"

enunciado: "Históricamente, el proceso de la {datos[idx][0]} se analiza como una consecuencia de carácter ___."

explicacion: |
  El término utilizado depende de la perspectiva historiográfica aplicada al evento seleccionado.
```

### 25 — El orden de las expediciones

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["ordenar", "cronologia"]

variables:
  secuencia: ["Exploración de las Antillas", "Conquista de México", "Conquista del Perú"]

respuesta_orden: ["Exploración de las Antillas", "Conquista de México", "Conquista del Perú"]
tipo: ordenar
opciones_explicitas: ["Exploración de las Antillas", "Conquista de México", "Conquista del Perú"]

enunciado: "Ordena los procesos de expansión territorial en orden cronológico:"

explicacion: |
  La expansión se movió desde el Caribe hacia el continente (México) y luego hacia el sur (Perú).
```
