# Historia Profunda — Conquista tierra firme (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
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
  escenario: uno_de([["plantas", "470"], ["artrópodos", "428"], ["tetrápodos", "365"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["plantas", "artrópodos", "tetrápodos"]

enunciado: "De acuerdo con el registro fósil, ¿qué grupo colonizó la tierra firme hace aproximadamente {escenario[1]} millones de años?"

explicacion: |
  El orden de colonización fue: 1° Plantas (~470 Ma), 2° Artrópodos (~428 Ma) y 3° Tetrápodos (~365 Ma).
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

respuesta: "esqueleto interno"
tipo: mc
opciones_explicitas: ["esqueleto interno", "flotabilidad", "flotabilidad neutra", "soporte hidrostático"]

enunciado: "En el medio acuático, el empuje compensa el peso. Sin embargo, al pasar a vivir en tierra firme, los organismos necesitan estructuras de soporte para vencer la gravedad, como un ___."

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

respuesta: "pulmones"
tipo: completar
respuestas_validas:
  - "pulmones"

enunciado: "Si un organismo evoluciona de un medio de agua a uno de aire, su sistema de intercambio gaseoso debe pasar de tener branquias a tener ___."

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

### 21 — El pionero terrestre entre los artrópodos

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "avanzado"
  tags: ["artropodos", "silurico", "paleontologia"]

respuesta: "428"
tipo: completar
tolerancia_abs: 5

enunciado: "El fósil de miriápodo Pneumodesmus newmani, considerado el animal terrestre que respira aire más antiguo conocido, data de hace aproximadamente ___ millones de años (período Silúrico)."

explicacion: |
  Los artrópodos colonizaron la tierra firme mucho antes que los tetrápodos, ya en el Silúrico (hace ~428 millones de años), no recién hacia el final del Devónico.
```

### 22 — Las primeras plantas terrestres

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["plantas", "briofitas", "evolucion"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que las primeras plantas terrestres ya poseían raíces verdaderas y tejido vascular desarrollado, similares a los árboles actuales?"

explicacion: |
  Falso. Las primeras plantas terrestres eran simples, parecidas a musgos y hepáticas, sin raíces verdaderas ni sistema vascular complejo; estas estructuras se desarrollaron más tarde, en plantas vasculares posteriores.
```

### 23 — Reproducción de las plantas pioneras

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["plantas", "esporas", "reproduccion"]

respuesta: "esporas"
tipo: completar
respuestas_validas:
  - "esporas"

enunciado: "Las primeras plantas terrestres se reprodujeron principalmente mediante ___, estructuras resistentes a la desecación que les permitían dispersarse sin depender de un medio acuático constante."

explicacion: |
  A diferencia de las semillas (una innovación posterior), las esporas fueron el mecanismo reproductivo de las plantas pioneras, permitiéndoles colonizar ambientes terrestres secos.
```

### 24 — El exoesqueleto como ventaja

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["artropodos", "exoesqueleto", "adaptacion"]

respuesta: "exoesqueleto"
tipo: completar
respuestas_validas:
  - "exoesqueleto"

enunciado: "La estructura externa rígida y cerosa que permitió a los artrópodos resistir la deshidratación al colonizar la tierra firme se denomina ___."

explicacion: |
  El exoesqueleto de quitina, recubierto por una capa cerosa, reduce la pérdida de agua por evaporación, una de las principales amenazas para los primeros animales terrestres.
```

### 25 — El vacío de Romer

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "avanzado"
  tags: ["tetrapodos", "diversificacion", "paleontologia"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que, inmediatamente después de la aparición de los primeros tetrápodos en el Devónico, existe un registro fósil abundante y continuo de su diversificación en tierra?"

explicacion: |
  Falso. Existe un período con muy pocos fósiles de tetrápodos justo después de su aparición, conocido como el 'vacío de Romer' (Romer's Gap), que dificulta rastrear en detalle su diversificación temprana en el Carbonífero inicial.
```
