# Examen jefe — [PENDIENTE #687]

> Logro #687. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: ciclo-de-las-rocas (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["geologia", "rocas_igneas"]

respuesta: "ígnea"
tipo: mc
opciones_explicitas: ["sedimentaria", "metamórfica", "ígnea"]

enunciado: "Las rocas que se forman a partir de la solidificación del magma o la lava se denominan rocas _______."

explicacion: |
  Las rocas ígneas se forman cuando el material fundido (magma o lava) se enfría y se solidifica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["geologia", "sedimentacion"]

respuesta: "sedimentos"
tipo: completar
respuestas_validas:
  - "sedimentos"

enunciado: "El proceso de litificación ocurre cuando los _______ se compactan y cementan para formar nuevas rocas."

explicacion: |
  La acumulación y compactación de sedimentos es el proceso fundamental para la formación de rocas sedimentarias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["geologia", "metamorfismo"]

respuesta: "metamórfica"
tipo: mc
opciones_explicitas: ["ígnea", "sedimentaria", "metamórfica"]

enunciado: "Cuando una roca preexistente es sometida a altas temperaturas y presiones sin llegar a fundirse, se transforma en una roca:"

explicacion: |
  El metamorfismo es el proceso de transformación de rocas en estado sólido debido a cambios en las condiciones de presión y temperatura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "avanzado"
  tags: ["geologia", "procesos"]

respuesta_orden: ["magma", "roca ígnea", "sedimentos", "roca sedimentaria", "roca metamórfica"]
tipo: ordenar
opciones_explicitas: ["magma", "roca ígnea", "sedimentos", "roca sedimentaria", "roca metamórfica"]

enunciado: "Ordena la secuencia lógica de procesos que describe la transformación desde el material fundido hasta la formación de rocas metamórficas:"

pasos:
  - "Solidificación del magma"
  - "Erosión y depósito"
  - "Litificación"
  - "Metamorfismo"

explicacion: |
  El ciclo es un proceso continuo: el magma se solidifica (ígnea), se erosiona (sedimentos), se compacta (sedimentaria) y se transforma por presión/calor (metamórfica).
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["geologia", "fusión"]

respuesta: "fusión"
tipo: completar
respuestas_validas:
  - "fusión"

enunciado: "Para que una roca metamórfica o sedimentaria vuelva a convertirse en magma, debe experimentar un proceso de _______."

explicacion: |
  La fusión es el proceso por el cual la roca sólida se funde debido a temperaturas extremadamente altas, reiniciando el ciclo desde el magma.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["roca_igneas", "sedimentacion"]

tipo: mc
opciones_explicitas: ["Erosión y sedimentación", "Calor y presión", "Fusión parcial", "Cristalización"]
respuesta: "Erosión y sedimentación"

enunciado: "Una roca ígnea que queda expuesta en la superficie sufre procesos de desgaste y acumulación de partículas. ¿Cuál es el proceso principal para transformarse en una roca sedimentaria?"

explicacion: |
  La erosión desintegra la roca, el transporte mueve los sedimentos, la deposición los acumula y la litificación (compactación y cementación) los convierte en roca sedimentaria.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["roca_metamorfica", "presion_calor"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["roca ígnea", "roca sedimentaria"], ["granito", "caliza"]]

tipo: completar
respuestas_validas:
  - "metamórfica"

enunciado: "Cuando una {escenarios[escenario_idx][0]} es sometida a altas temperaturas y presiones extremas sin llegar a fundirse, se transforma en una roca ___."

explicacion: |
  El metamorfismo ocurre cuando las condiciones de presión y temperatura cambian la estructura mineral de una roca sólida sin llegar a la fusión (que sería magma).
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "avanzado"
  tags: ["procesos_geologicos"]

tipo: ordenar
opciones_explicitas: ["Erosión", "Transporte", "Sedimentación", "Litificación"]

enunciado: "Ordene cronológicamente las etapas que transforman una roca ígnea en una roca sedimentaria:"

explicacion: |
  Primero la roca se rompe (erosión), luego los fragmentos se mueven (transporte), luego se asientan (sedimentación) y finalmente se compactan (litificación).
respuesta_orden: ["Erosión", "Transporte", "Sedimentación", "Litificación"]
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["metamorfismo"]

tipo: mc
opciones_explicitas: ["Calor y presión", "Erosión y transporte", "Fusión y enfriamiento", "Sedimentación y compactación"]
respuesta: "Calor y presión"

enunciado: "¿Qué agentes físicos son los responsables de la formación de una roca metamórfica a partir de una roca preexistente?"

explicacion: |
  El metamorfismo es la transformación de una roca debido a cambios en la presión y la temperatura, sin que la roca llegue a fundirse.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["roca_igneas", "fusión"]

respuesta: "ígnea"
respuestas_validas:
  - "ígnea"
  - "ignea"
  - "magmática"
  - "magmatica"
tipo: completar
tolerancia_abs: 0

enunciado: "Si una roca metamórfica se funde completamente debido al calor extremo, se convierte en magma. Si este magma se enfría y cristaliza, el tipo de roca resultante es una roca ___."

explicacion: |
  El enfriamiento del magma (ya sea intrusivo o extrusivo) da lugar a la formación de rocas ígneas.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "roca_igneas"]

variables:
  tipo_roca: uno_de(["granito", "basalto", "obsidiana"])

enunciado: "Cuando una roca se funde completamente debido al calor extremo en el manto, se convierte en ___."

respuesta: "magma"
tipo: completar
respuestas_validas:
  - "magma"

explicacion: |
  El proceso de fusión de cualquier tipo de roca (sedimentaria, metamórfica o ígnea) da lugar al magma. Al enfriarse, este magma dará origen a una nueva roca ígnea.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["ciclo_geologico", "fusione"]

variables:
  roca_origen: uno_de(["sedimentaria", "metamorfica", "igneas"])

enunciado: "Si una roca de tipo {roca_origen} es sometida a temperaturas lo suficientemente altas como para fundirse, el material resultante es magma. Si este magma se enfría, el ciclo se reinicia produciendo una roca ___."

respuesta: "igneas"
tipo: completar
respuestas_validas:
  - "igneas"

explicacion: |
  Cualquier roca, sin importar su origen, puede fundirse. El producto de la solidificación de ese magma siempre será una roca ígnea.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "solidificacion"]

enunciado: "El proceso mediante el cual el magma se enfría y solidifica para formar nuevas rocas se denomina:"

opciones_explicitas: ["Meteorización", "Cristalización", "Erosión", "Sedimentación"]
respuesta: "Cristalización"
tipo: mc

explicacion: |
  La cristalización es el proceso de formación de cristales durante el enfriamiento del magma, dando lugar a las rocas ígneas.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["ciclo_geologico", "secuencia"]

enunciado: "Ordena la secuencia lógica que describe el reinicio del ciclo cuando una roca ígnea es fundida:"

opciones_explicitas: ["Roca ígnea", "Magma", "Enfriamiento", "Nueva roca ígnea"]
respuesta_orden: ["Roca ígnea", "Magma", "Enfriamiento", "Nueva roca ígnea"]
tipo: ordenar

explicacion: |
  El ciclo es continuo: la roca existente se funde (magma), el magma se enfría y se solidifica (enfriamiento) para formar una nueva roca.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "estado_fisico"]

enunciado: "Un material que ha pasado de ser una roca sólida a un estado fundido debido al calor extremo se encuentra en estado ___."

opciones_explicitas: ["sólido", "líquido", "gaseoso"]
respuesta: "líquido"
tipo: mc

explicacion: |
  El magma es roca fundida, por lo tanto, se encuentra en estado líquido. Una vez que este líquido se enfría, vuelve al estado sólido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["conceptos_basicos", "dinamica_terrestre"]

tipo: mc
opciones_explicitas: ["Un punto de inicio definido", "Un proceso lineal con un final", "Un ciclo continuo sin principio ni fin", "Un evento único ocurrido en el pasado"]
respuesta: "Un ciclo continuo sin principio ni fin"

enunciado: "Sobre la naturaleza del ciclo de las rocas, se afirma que este es..."

explicacion: |
  El ciclo de las rocas es un proceso continuo y dinámico. No existe un punto de partida o de finalización, ya que la materia se recicla constantemente a través de procesos internos y externos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["procesos_geologicos", "tectonica"]

tipo: completar
respuestas_validas:
  - "erosión"

enunciado: "El ciclo de las rocas es impulsado por la tectónica de placas y el calor interno como fuerzas internas, y por la ___ y el clima como fuerzas externas."

pasos:
  - "Identifica los procesos internos (endógenos) que mueven el material desde el interior."
  - "Identifica los procesos externos (exógenos) que modelan la superficie."

explicacion: |
  Los procesos internos (como la tectónica y el calor) mueven y transforman la materia desde el interior, mientras que los procesos externos (clima y erosión) actúan sobre la superficie.
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "intermedio"
  tags: ["rocas_magmaticas", "rocas_sedimentarias"]

tipo: mc
opciones_explicitas: ["Magma", "Sedimento", "Roca metamórfica", "Lava"]
respuesta: "Roca metamórfica"

enunciado: "Cuando una roca se somete a altas presiones y temperaturas sin llegar a fundirse, se transforma en una..."

explicacion: |
  La presión y el calor transforman las rocas existentes en rocas metamórficas antes de que puedan fundirse y volver a ser magma.
```

```
metadata:
  materia: "historia_profucha"
  tema: "ciclo_de_las_rocas"
  nivel: "avanzado"
  tags: ["sedimentacion", "procesos_externos"]

tipo: ordenar
opciones_explicitas: ["Meteorización", "Transporte", "Sedimentación", "Litificación"]

enunciado: "Ordena correctamente las etapas que ocurren desde la degradación de una roca en la superficie hasta la formación de una nueva roca sedimentaria:"

explicacion: |
  La roca se rompe (meteorización), es movida (transporte), se deposita (sedimentación) y finalmente se compacta (litificación).
respuesta_orden: ["Meteorización", "Transporte", "Sedimentación", "Litificación"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "cristalizacion"]

respuesta: "ígnea"
respuestas_validas:
  - "ígnea"
  - "ignea"
  - "magmática"
  - "magmatica"
tipo: completar
tolerancia_abs: 0

enunciado: "Cuando el magma se enfría y se solidifica, da origen a una roca de tipo ___."

explicacion: |
  El enfriamiento del magma (ya sea bajo la superficie o en la superficie como lava) produce rocas ígneas o magmáticas.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_de_las_rocas"
  nivel: "basico"
  tags: ["magma", "roca_ignea"]

respuesta: "roca intrusiva"
tipo: mc
opciones_explicitas: ["roca intrusiva", "roca extrusiva", "roca sedimentaria", "roca metamórfica"]

enunciado: "Si el magma se enfría lentamente bajo la superficie terrestre, el proceso de cristalización produce una ___."

explicacion: |
  El enfriamiento lento permite el desarrollo de cristales grandes, formando rocas ígneas intrusivas (plutónicas).
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "basico"
  tags: ["sedimento", "litificacion"]

respuesta: "roca sedimentaria"
tipo: mc
opciones_explicitas: ["roca sedimentaria", "roca metamórfica", "roca ígnea", "magma"]

enunciado: "La acumulación, compactación y cementación de sedimentos acumulados en el fondo de un lago da lugar a una ___."

explicacion: |
  La litificación de sedimentos es el proceso mediante el cual se forman las rocas sedimentarias.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "intermedio"
  tags: ["metamorfismo", "presion"]

respuesta: "roca metamórfica"
tipo: mc
opciones_explicitas: ["roca metamórfica", "roca ígnea", "roca sedimentaria", "magma"]

enunciado: "Cuando una roca ígnea sometida a altas presiones y temperaturas experimenta cambios físicos sin llegar a fundirse, se transforma en una ___."

explicacion: |
  El metamorfismo es la transformación de rocas preexistentes debido a cambios en la presión y temperatura.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "intermedio"
  tags: ["erosion", "sedimentos"]

respuesta: "sedimentos"
tipo: mc
opciones_explicitas: ["sedimentos", "magma", "roca metamórfica", "cristales"]

enunciado: "La meteorización y erosión de una roca sólida expuesta a la lluvia y el viento producen partículas sueltas llamadas ___."

explicacion: |
  La erosión rompe las rocas en fragmentos más pequeños llamados sedimentos.
```

```
metadata:
  materia: "geologia"
  tema: "ciclo_las_rocas"
  nivel: "avanzado"
  tags: ["fusion", "magma"]

variables:
  idx: uno_de([0, 1])
  materiales: ["una roca metamórfica", "una roca sedimentaria"]

respuesta: "magma"
tipo: mc
opciones_explicitas: ["magma", "roca ígnea", "roca metamórfica", "sedimento"]

enunciado: "Si {materiales[idx]} alcanza su punto de fusión por calor extremo, el material resultante es ___."

explicacion: |
  La fusión completa de cualquier tipo de roca produce magma, que es el origen de las rocas ígneas.
```

## Sección: conquista-tierra-firme (25 preguntas)

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

## Sección: distribucion-biomas (25 preguntas)

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["conceptos", "ecologia"]

tipo: mc
opciones_explicitas: ["Una agrupación de especies animales y vegetales en un área determinada.", "Una gran región con clima, vegetación y fauna característicos.", "Un conjunto de suelos con propiedades químicas similares.", "La suma de todos los ecosistemas de un continente."]

enunciado: "Un bioma se define como ___."

respuesta: "Una gran región con clima, vegetación y fauna característicos."

explicacion: |
  Un bioma es una unidad ecológica de gran escala que se caracteriza por tener un clima, un tipo de vegetación y una fauna específicos que se repiten en diferentes partes del planeta.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores_climaticos"]

tipo: mc
opciones_explicitas: ["La altitud y la presión atmosférica.", "La latitud y el clima.", "La distancia a la costa y la humedad.", "La actividad volcánica y el relieve."]
enunciado: "La distribución de los biomas en la superficie terrestre está determinada principalmente por:"
respuesta: "La latitud y el clima."
explicacion: |
  La latitud determina la radiación solar recibida, lo cual, junto con la humedad y la temperatura (clima), define el tipo de vegetación y el bioma resultante.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["ejemplos", "clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Selva Tropical", "Desierto"], ["Altas precipitaciones y calor constante", "Escasez extrema de agua y temperaturas extremas"]]

tipo: completar
respuestas_validas:
  - "Selva Tropical"
  - "Desierto"

enunciado: "El bioma caracterizado por {escenarios[escenario_idx][1]} es la {escenarios[escenario_idx][0]}."

explicacion: |
  El usuario debe identificar el bioma basado en la descripción climática proporcionada.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["clima", "vegetacion"]

tipo: completar
respuestas_validas:
  - "Tundra"

enunciado: "El bioma de clima frío, con suelos congelados (permafrost) y vegetación de musgos y líquenes, se denomina ___."

explicacion: |
  La Tundra se caracteriza por condiciones climáticas extremas de frío y la presencia de permafrost, lo que impide el crecimiento de árboles grandes.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["jerarquia", "ecologia"]

tipo: ordenar
opciones_explicitas: ["Individuo", "Población", "Comunidad", "Ecosistema", "Bioma"]

enunciado: "Ordene de menor a mayor complejidad los niveles de organización ecológica que conforman la estructura de un bioma:"

explicacion: |
  La jerarquía parte desde el organismo individual, pasa por grupos de la misma especie (población), interacciones entre especies (comunidad), la relación con el medio físico (ecosistema) y finalmente la escala global (bioma).
respuesta_orden: ["Individuo", "Población", "Comunidad", "Ecosistema", "Bioma"]
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["latitud", "clima"]

respuesta: "latitud"
tipo: mc
opciones_explicitas: ["latitud", "altitud", "densidad_poblacion", "geologia"]

enunciado: "La distribución de los biomas en la superficie terrestre sigue patrones principales determinados por la ___, debido a la inclinación del eje terrestre y el ángulo de incidencia de la radiación solar."

explicacion: |
  La latitud determina la cantidad de radiación solar que recibe una superficie, creando franjas climáticas que definen los biomas.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["altitud", "gradiente_termico"]

respuesta: "disminución de temperatura"
tipo: completar
respuestas_validas:
  - "disminución de temperatura"

enunciado: "Al aumentar la altitud en una montaña, se produce un gradiente térmico donde ocurre una ___."

explicacion: |
  A mayor altitud, la presión atmosférica disminuye y la temperatura desciende, lo que puede cambiar el bioma local (piso térmico).
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["latitud", "zonas_climaticas"]

variables:
  datos: uno_de([["Ecuador", "Selva Tropical"], ["Zonas Templadas", "Bosques Caducifolios"], ["Polos", "Tundra"]])

respuesta: datos[1]
tipo: mc
opciones_explicitas: ["Selva Tropical", "Bosques Caducifolios", "Tundra", "Desierto"]

enunciado: "En las zonas de {datos[0]}, el bioma predominante suele ser el de {datos[1]}."

explicacion: |
  La radiación solar constante en el ecuador permite el desarrollo de biomas con alta biodiversidad y precipitaciones abundantes.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["altitud", "zonas_verticales"]

respuesta_orden: ["Bosque de niebla", "Páramo", "Superpáramo", "Nieves perpetuas"]
tipo: ordenar
opciones_explicitas: ["Bosque de niebla", "Páramo", "Superpáramo", "Nieves perpetuas"]

enunciado: "Ordene los siguientes biomas de montaña desde la menor hasta la mayor altitud (de la base a la cima):"

explicacion: |
  La altitud genera una zonificación vertical donde la vegetación cambia según la temperatura y la presión.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores", "clima"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si sumamos los dos factores principales que determinan la distribución de biomas: la latitud (1) y la altitud (1), el resultado es: ___"

explicacion: |
  Ambos factores modifican la temperatura y la humedad, elementos clave para la vida vegetal.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["selva", "tropical", "ecuador"]

tipo: mc
opciones_explicitas: ["Ecuador", "Sahara", "Antártida", "Siberia"]

enunciado: "La selva tropical es un bioma caracterizado por altas temperaturas y precipitaciones constantes. Un ejemplo de región donde este bioma es predominante es ___."

respuesta: "Ecuador"

explicacion: |
  La selva tropical, como la de Ecuador, se encuentra en zonas ecuatoriales con alta humedad y calor todo el año.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["desierto", "subtropical", "clima"]

tipo: completar
respuestas_validas:
  - "seco"

enunciado: "Los desiertos se localizan generalmente en zonas subtropicales y se caracterizan por tener un clima muy ___."

respuesta: "seco"

explicacion: |
  El desierto se define por la escasez de precipitaciones, lo que resulta en un clima extremadamente seco.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["tundra", "polar", "latitud"]

variables:
  datos: [["Tundra", "Zonas polares"], ["Bosque templado", "Zonas de latitudes medias"]]
  escenario_idx: uno_de([0, 1])
  bioma: datos[escenario_idx][0]
  ubicacion: datos[escenario_idx][1]

tipo: mc
opciones_explicitas: ["Tundra", "Bosque templado", "Selva tropical", "Desierto"]

enunciado: "Considerando el bioma de {bioma}, este se encuentra ubicado típicamente en {ubicacion}."

respuesta: bioma

explicacion: |
  La tundra se caracteriza por condiciones climáticas extremas en las zonas polares.
  El bosque templado se ubica en zonas de latitudes medias.
  La selva tropical en zonas ecuatoriales.
  El desierto en zonas áridas.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["orden", "latitud", "clima"]

tipo: ordenar
opciones_explicitas: ["Selva tropical", "Bosque templado", "Tundra"]

respuesta_orden: ["Selva tropical", "Bosque templado", "Tundra"]

enunciado: "Ordena los siguientes biomas de mayor a menor temperatura (del más cálido al más frío):"

explicacion: |
  La temperatura disminuye a medida que nos alejamos del ecuador hacia los polos.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["bosque", "templado", "estaciones"]

tipo: completar
tolerancia_abs: 0

enunciado: "El bosque templado se distingue de la selva por presentar estaciones del año bien marcadas. Si la temperatura media anual es de 15 grados, el valor numérico es ___."

respuesta: 15

explicacion: |
  El bosque templado presenta variaciones estacionales significativas en su temperatura.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["biogeografia", "tectonica_de_placas"]

variables:
  escenario: uno_de([["Pangea", "Pangea"], ["Gondwana", "Gondwana"], ["Laurasia", "Laurasia"]])

enunciado: "La distribución actual de biomas y especies está influenciada por la fragmentación de {escenario[0]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Pangea", "Gondwana", "Laurasia", "Panthalassa"]

explicacion: |
  La fragmentación de Pangea permitió que las especies evolucionaran de forma aislada en diferentes masas continentales, determinando la distribución actual de biomas y la biodiversidad regional.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["biogeografia", "aislamiento"]

enunciado: "La separación de Australia permitió que la fauna evolucionara de manera única (el aislamiento de los marsupiales), un proceso clave en la biogeografía histórica."

respuesta: "Australia"
tipo: mc
opciones_explicitas: ["Australia", "América del Sur", "África", "Antártida"]

explicacion: |
  El aislamiento geográfico prolongado impide el flujo genético, permitiendo que especies específicas evolucionen en biomas exclusivos de esa región.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores_climaticos", "biomas"]

variables:
  factor: uno_de([["latitud", "la distancia respecto al ecuador"], ["altitud", "la altura sobre el nivel del mar"]])

enunciado: "La distribución de los biomas no solo depende de la tectónica, sino también de factores climáticos como la {factor[0]}."

respuesta: factor[0]
tipo: mc
opciones_explicitas: ["latitud", "altitud", "presión", "salinidad"]

explicacion: |
  La latitud determina la radiación solar recibida, lo cual es un factor determinante para la clasificación de biomas (tropicales, templados, polares).
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["historia_geologica", "procesos"]

enunciado: "Ordena cronológicamente los procesos que influyen en la distribución de la vida en la Tierra:"

pasos:
  - "Formación de supercontinentes (ej. Pangea)"
  - "Fragmentación de las masas continentales"
  - "Evolución y especiación por aislamiento"
  - "Establecimiento de biomas actuales"

respuesta_orden: ["Formación de supercontinentes (ej. Pangea)", "Fragmentación de las masas continentales", "Evolución y especiación por aislamiento", "Establecimiento de biomas actuales"]
tipo: ordenar
opciones_explicitas: ["Formación de supercontinentes (ej. Pangea)", "Fragmentación de las masas continentales", "Evolución y especiación por aislamiento", "Establecimiento de biomas actuales"]

explicacion: |
  La estructura geológica establece la base física, la fragmentación crea barreras, el aislamiento permite la especiación y el clima finaliza la configuración de los biomas.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["biogeografia", "tectonica"]

enunciado: "La relación entre la tectónica de placas y la biogeografía es ___________."

respuesta: "directa"
tipo: completar
opciones_explicitas: ["directa", "inversa"]
respuestas_validas:
  - "directa"

pasos:
  - "Analizar cómo el movimiento de placas crea o destruye barreras físicas."
  - "Considerar cómo estas barreras afectan la migración de especies."

explicacion: |
  Es una relación directa: el movimiento de las placas tectónicas crea montañas, océanos y separa continentes, lo que dicta las rutas de migración y el aislamiento de las especies.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "latitud", "selva"]

enunciado: "Un ecosistema con temperaturas elevadas durante todo el año, precipitaciones constantes y una biodiversidad extrema se encuentra en la zona de latitud ecuatorial. ¿Qué bioma es?"

respuesta: "Selva Tropical"
tipo: mc
opciones_explicitas: ["Selva Tropical", "Tundra", "Desierto"]

explicacion: |
  La selva tropical se caracteriza por su clima cálido y húmedo, situado cerca del ecuador.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "precipitacion"]

enunciado: "Si un área presenta precipitaciones prácticamente nulas y una evaporación muy superior a la precipitación, el bioma es un ___."

respuesta: "Desierto"
tipo: completar
respuestas_validas:
  - "Desierto"

explicacion: |
  Los desiertos se definen por la escasez extrema de agua y la alta tasa de evaporación.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["latitud", "secuencia", "clima"]

enunciado: "Ordene los siguientes biomas desde la zona ecuatorial hacia los polos (de mayor a menor temperatura):"

respuesta_orden: ["Selva Tropical", "Bosque Templado", "Tundra"]
tipo: ordenar
opciones_explicitas: ["Selva Tropical", "Bosque Templado", "Tundra"]

explicacion: |
  La temperatura disminuye a medida que nos alejamos del ecuador hacia los polos.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["clima", "suelo", "tundra"]

enunciado: "Un bioma caracterizado por el permafrost permanente y la presencia de musgos y líquenes es la ___."

respuesta: "Tundra"
tipo: completar
respuestas_validas:
  - "Tundra"

explicacion: |
  La tundra se define por el permafrost, un suelo que permanece congelado casi todo el año.
```

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "estaciones"]

enunciado: "Un ecosistema con estaciones bien definidas y árboles que pierden sus hojas en otoño es un ___."

respuesta: "Bosque Templado"
tipo: mc
opciones_explicitas: ["Bosque Templado", "Desierto", "Selva"]

explicacion: |
  El bosque templado se distingue por la marcada estacionalidad de sus climas.
```

## Sección: cinco-extinciones-masivas (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["geologia", "paleontologia"]

tipo: mc
opciones_explicitas: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Cretácico-Paleógeno"]

enunciado: "La primera de las cinco grandes extinciones masivas de la historia de la Tierra ocurrió durante el periodo ___."

respuesta: "Ordovícico-Silúrico"

explicacion: |
  La extinción del Ordovícico-Silúrico (hace ~444 millones de años) fue causada principalmente por una glaciación intensa que redujo los niveles del mar y la oxigenación de los océanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["permico", "extincion"]

tipo: mc
opciones_explicitas: ["Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

enunciado: "El evento conocido como 'La Gran Mortandad' ocurrió durante la extinción ___."

respuesta: "Pérmico-Triásico"

explicacion: |
  La extinción del Pérmico-Triásico fue la más severa de la historia, eliminando aproximadamente el 96% de las especies marinas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["asteroide", "dinosaurios"]

tipo: completar
tolerancia_abs: 0.1

enunciado: "La extinción del Cretácico-Paleógeno es frecuentemente asociada al impacto de un asteroide en la península de Yucatán. ¿Cuántos millones de años aproximadamente ocurrió este evento? (Escribe el número entero)"

respuesta: 66

explicacion: |
  Hace aproximadamente 66 millones de años, el impacto del asteroide Chicxulub marcó el fin de la era de los dinosaurios no avianos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["cronologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

enunciado: "Ordena cronológicamente las cinco grandes extinciones masivas, desde la más antigua a la más reciente."

respuesta_orden: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

explicacion: |
  El orden correcto sigue la escala de tiempo geológico: Ordovícico (444 Ma), Devónico (375 Ma), Pérmico (252 Ma), Triásico (201 Ma) y Cretácico (66 Ma).
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["devonico", "oceanos"]

tipo: completar
respuestas_validas:
  - "anoxia"

enunciado: "Se cree que la extinción del Devónico fue causada por cambios en los niveles de ___ en los océanos, debido a la proliferación de plantas terrestres que aumentaron la escorrentía de nutrientes."

respuesta: "anoxia"

explicacion: |
  La expansión de la vegetación terrestre aumentó el aporte de nutrientes a los mares, provocando eutrofización y la posterior anoxia (falta de oxígeno) en las aguas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["permerico", "triasico", "extincion"]

respuesta: "96%"
tipo: completar
respuestas_validas:
  - "96%"
  - "95%"
  - "90%"

enunciado: "La extinción del Pérmico-Triásico es conocida como 'la Gran Mortandad' debido a que se estima que causó la desaparición de hasta un ___ de las especies marinas."

explicacion: |
  Fue el evento de extinción más severo de la historia de la Tierra, eliminando la gran mayoría de la vida marina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["permerico", "triasico", "magnitud"]

respuesta: "Pérmico-Triásico"
tipo: mc
opciones_explicitas: ["Pérmico-Triásico", "Cretácico-Paleógeno", "Ordovícico-Silúrico", "Devónico-Carbonífero"]

enunciado: "La extinción que ocurrió hace aproximadamente 252 millones de años y fue la más devastadora de la historia es la del periodo ___."

explicacion: |
  El evento Pérmico-Triásico es el punto de extinción más grande registrado en el registro fósil.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["causas", "volcanismo", "permico"]

respuesta: "Siberian Traps"
tipo: completar
tolerancia_abs: 0

enunciado: "Se cree que la causa principal de la extinción del Pérmico-Triásico fue el vulcanismo masivo asociado a los llamados ___."

explicacion: |
  Las erupciones de los Traps de Siberia liberaron enormes cantidades de gases de efecto invernadero, provocando un calentamiento global extremo y acidificación de los océanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["secuencia", "procesos"]

respuesta_orden: ["Erupción masiva", "Calentamiento global", "Acidificación oceánica", "Extinción masiva"]
tipo: ordenar
opciones_explicitas: ["Erupción masiva", "Calentamiento global", "Acidificación oceánica", "Extinción masiva"]

enunciado: "Ordena la secuencia probable de eventos que desencadenaron la Gran Mortandad:"

pasos:
  - "Inicio del vulcanismo masivo"
  - "Aumento de la temperatura global"
  - "Cambio químico en los océanos"
  - "Colapso de la biodiversidad"

explicacion: |
  El ciclo comenzó con el vulcanismo extremo, que alteró la atmósfera y los océanos, llevando al colapso de los ecosistemas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["oceanos", "biodiversidad"]

respuesta: "96%"
tipo: mc
opciones_explicitas: ["96%", "50%", "75%", "10%"]

enunciado: "El impacto en la biodiversidad marina durante el evento del Pérmico-Triásico fue de aproximadamente un ___ de especies extinguidas."

explicacion: |
  La acidificación y la anoxia (falta de oxígeno) en los océanos fueron fatales para la mayoría de los organismos marinos de la época.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["cretacico", "asteroide", "chicxulub"]

tipo: mc
opciones_explicitas: ["Impacto de un asteroide", "Erupción volcánica masiva", "Cambio climático gradual", "Fragmentación de un planeta"]
respuesta: "Impacto de un asteroide"

enunciado: "La extinción del Cretácico-Paleógeno, que ocurrió hace aproximadamente 66 millones de años, fue causada principalmente por ___."

explicacion: |
  El impacto de un asteroide en la península de Yucatán (cráter de Chicxulub) desencadenó cambios climáticos catastróficos que finalizaron el reinado de los dinosaurios no aviares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["dinosaurios", "extincion"]

tipo: completar
respuestas_validas:
  - "no aviares"
  - "no-aviares"

enunciado: "La extinción masiva del Cretácico-Paleógeno acabó con la mayoría de los dinosaurios, con la excepción de los dinosaurios ___."

explicacion: |
  Los dinosaurios aviares (ancestros de las aves actuales) lograron sobrevivir a la catástrofe, mientras que los dinosaurios no aviares se extinguieron.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["secuencia", "causa_efecto"]

tipo: ordenar
opciones_explicitas: ["Impacto del asteroide", "Nube de escombros global", "Bloqueo de la luz solar", "Colapso de la fotosíntesis"]

enunciado: "Ordena cronológicamente los eventos que desencadenaron la extinción tras el impacto de Chicxulub:"

explicacion: |
  El impacto lanzó material al espacio que luego regresó a la atmósfera, bloqueando la luz solar y deteniendo la fotosíntesis, lo que colapsó las redes tróficas.
respuesta_orden: ["Impacto del asteroide", "Nube de escombros global", "Bloqueo de la luz solar", "Colapso de la fotosíntesis"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["geologia", "crater"]

tipo: completar

enunciado: "El cráter formado por el impacto que causó la extinción del Cretácico-Paleógeno se localiza en Yucatán, México y se conoce como cráter de ___."

respuesta: "Chicxulub"

explicacion: |
  El cráter de Chicxulub en México es la evidencia geológica principal de este evento de extinción masiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["clima", "quimica_atmosferica"]

tipo: completar
tolerancia_abs: 0.1

enunciado: "Tras el impacto inicial y el invierno de impacto, la liberación de gases como el CO2 provocó un efecto de calentamiento global. Si un registro geológico muestra un aumento drástico de carbono, ¿cuántos millones de años aproximadamente ocurrió este evento de extinción? (Responde con el número entero)"

pasos:
  - "Identificar el periodo de la extinción (66 Ma)."
  - "Escribir el valor numérico sin texto."

explicacion: |
  La extinción ocurrió hace 66 millones de años, marcando el límite entre el período Cretácico y el Paleógeno.

respuesta: 66
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["asteroides", "impacto", "dinodinos"]

enunciado: "Se cree que la extinción masiva del Cretácico-Paleógeno, que eliminó a los dinosaurios no avianos, fue causada principalmente por el impacto de un asteroide en la península de Yucatán. ¿Cuál fue la consecuencia inmediata más devastadora para la fotosíntesis?"

opciones_explicitas: ["Aumento de la temperatura global", "Bloqueo de la luz solar por polvo y cenizas", "Aumento del nivel del mar", "Acidificación extrema de los océanos"]

respuesta: "Bloqueo de la luz solar por polvo y cenizas"
tipo: "mc"

explicacion: |
  El impacto lanzó enormes cantidades de material en la atmósfera, bloqueando la luz solar durante meses o años, lo que detuvo la fotosíntesis y colapsó las cadenas alimentarias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["volcanismo", "trapp", "extincion"]

enunciado: "Durante la extinción del Pérmico-Triásico, la actividad de los Siberian Traps liberó enormes cantidades de gases de efecto invernadero, provocando un cambio climático abrupto. ¿Qué fenómeno climático fue el principal responsable de la anoxia oceánica?"

opciones_explicitas: ["Enfriamiento global", "Calentamiento global extremo", "Glaciación masiva", "Ciclo de hielo y deshielo"]

respuesta: "Calentamiento global extremo"
tipo: "mc"

explicacion: |
  El aumento masivo de CO2 causó un calentamiento global extremo, lo que redujo la solubilidad del oxígeno en los océanos, provocando condiciones de anoxia (falta de oxígeno) que mataron la vida marina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["nivel_del_mar", "plataformas_continentales"]

enunciado: "En varios eventos de extinción masiva, la variación del nivel del mar afectó la biodiversidad. Cuando el nivel del mar desciende drásticamente, las plataformas continentales quedan expuestas. Esto reduce el área de hábitat para los organismos que viven en aguas poco profundas.\n\nEl descenso del nivel del mar provoca la pérdida de hábitats en las plataformas continentales, lo que resulta en una disminución de la ___________ marina."

respuestas_validas:
  - "biodiversidad"

respuesta: "biodiversidad"
tipo: "completar"

explicacion: |
  La reducción del área de las plataformas continentales elimina los hábitats más productivos y diversos del océano, afectando directamente la biodiversidad marina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["glaciación", "ordovícico"]

enunciado: "La extinción del Ordovícico-Devónico está fuertemente asociada con una glaciación intensa. Ordena las consecuencias climáticas de este evento de mayor a menor impacto en la extinción de especies marinas:"

opciones_explicitas: ["Glaciación global masiva", "Expansión de los polos de hielo", "Caída drástica del nivel del mar", "Reducción de hábitats costeros"]

respuesta_orden: ["Glaciación global masiva", "Expansión de los polos de hielo", "Caída drástica del nivel del mar", "Reducción de hábitats costeros"]
tipo: "ordenar"

explicacion: |
  La formación de grandes capas de hielo atrapó agua, haciendo que el nivel del mar bajara drásticamente y eliminara los hábitats de las plataformas continentales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["causas", "resumen"]

enunciado: "Las extinciones masivas suelen ser el resultado de cambios ambientales rápidos. Si un evento volcánico masivo libera grandes cantidades de CO2, el efecto inmediato en la temperatura es el ___________."

respuestas_validas:
  - "calentamiento"

respuesta: "calentamiento"
tipo: "completar"

explicacion: |
  El CO2 es un gas de efecto invernadero; su liberación masiva atrapa más calor en la atmósfera, elevando la temperatura global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["precambrico", "oxigeno"]

respuesta: "oxigenación"
tipo: mc
opciones_explicitas: ["oxigenación", "impacto", "vulcanismo"]

enunciado: "La extinción del evento del Gran Oxígeno fue causada principalmente por la acumulación de oxígeno atmosférico tras la fotosíntesis de cianobacterias, un proceso de ___."

explicacion: |
  El aumento de oxígeno libre en la atmósfera fue tóxico para la mayoría de los organismos anaerobios de la época.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["paleozoico", "clima"]

respuesta: "enfriamiento"
tipo: completar
respuestas_validas:
  - "enfriamiento"
  - "nivel del mar"

enunciado: "Durante la extinción del Ordovícico-Devónico, el factor determinante fue el ___ climático que provocó la glaciación."

explicacion: |
  Cambios climáticos y fluctuaciones en el nivel del mar afectaron drásticamente la vida marina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["la_gran_muerte", "trapp"]

variables:
  idx: uno_de([0,1,2])
  escenarios: [["La gran muerte del Pérmico-Triásico fue causada por...", "vulcanismo"], ["El grupo que sufrió la mayor pérdida fue el de los...", "insectos"], ["El efecto invernadero fue provocado por...", "metano"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["vulcanismo", "insectos", "metano"]

enunciado: "En el evento del Pérmico-Triásico, {escenarios[idx][0]}."

explicacion: |
  Conocida como "La Gran Muerte", fue la extinción más severa de la historia de la Tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["dinosaurios", "pangea"]

variables:
  idx: uno_de([0,1,2])
  datos: [["La fragmentación de Pangea liberó gases que causaron...", "calentamiento"], ["El grupo que comenzó a dominar tras la extinción fue el de los...", "dinosaurios"], ["La causa principal fue un aumento en el...", "CO2"]]
  respuestas: [["calentamiento", "dinosaurios", "CO2"]]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "calentamiento"
  - "dinosaurios"
  - "CO2"

enunciado: "Tras la extinción del Triásico-Jurásico, el mundo cambió debido al {datos[idx][1]}."

explicacion: |
  La ruptura del supercontinente Pangea alteró el clima global y permitió la expansión de los dinosaurios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["asteroide", "dinosaurios"]

respuesta: "luz solar"
tipo: mc
opciones_explicitas: ["dinosaurios", "luz solar", "reptiles"]

enunciado: "El evento del Cretácico-Paleógeno se caracteriza por la reducción drástica de la ___, causada por el polvo y las cenizas liberadas tras el impacto del asteroide."

explicacion: |
  El impacto de un asteroide bloqueó la luz solar, colapsando la fotosíntesis y las cadenas alimentarias.
```

## Sección: paleoclima-glaciaciones (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["definicion", "introduccion"]

respuesta: "paleoclima"
tipo: completar
respuestas_validas:
  - "paleoclima"

enunciado: "El estudio de los climas de la Tierra en el pasado geológico se denomina ___."

explicacion: |
  El paleoclima es la ciencia que reconstruye las condiciones climáticas de épocas pasadas utilizando diversos indicadores naturales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["metodos", "reconstruccion"]

respuesta: "núcleos de hielo"
tipo: mc
opciones_explicitas: ["núcleos de hielo", "sedimentos marinos", "anillos de árboles", "fósiles de insectos"]

enunciado: "Un método común para reconstruir el paleoclima mediante el análisis de capas de precipitación congelada es el uso de ___."

explicacion: |
  Los núcleos de hielo almacenan burbujas de aire y partículas que permiten conocer la composición atmosférica de hace miles de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["indicadores", "fósiles"]

respuesta: "fósiles"
tipo: mc
opciones_explicitas: ["fósiles", "satélites", "termómetros", "instrumentos de medición"]

enunciado: "Cuando no hay hielo o sedimentos disponibles, los científicos utilizan ___ de especies extintas para inferir temperaturas antiguas."

explicacion: |
  Los fósiles (como corales o plantas) actúan como indicadores biológicos de las condiciones ambientales en las que vivieron.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["metodologia", "proceso"]

respuesta_orden: ["extracción", "datación", "análisis químico"]
tipo: ordenar
opciones_explicitas: ["extracción", "datación", "análisis químico"]

enunciado: "Ordena los pasos típicos para reconstruir un clima antiguo a partir de una muestra de sedimento:"

pasos:
  - "Obtención de la muestra del terreno."
  - "Determinación de la edad de la capa sedimentaria."
  - "Estudio de la composición de la muestra en laboratorio."

explicacion: |
  Primero se extrae el material, luego se determina su edad (datación) y finalmente se analizan sus componentes químicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["dendrocronologia", "anillos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: ["ancho", "estrecho"]
  resultado: ["clima favorable", "clima adverso"]

respuesta: resultado[caso_idx]
tipo: mc
opciones_explicitas: ["clima favorable", "clima adverso"]

enunciado: "En dendrocronología, si un anillo de crecimiento es {escenarios[caso_idx]}, esto suele indicar un {resultado[caso_idx]} durante ese año."

explicacion: |
  Anillos anchos sugieren condiciones óptimas de temperatura y humedad, mientras que anillos estrechos indican estrés ambiental.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["astronomia", "clima", "milankovitch"]

respuesta: "excentricidad"
tipo: mc

enunciado: "La variación en la forma de la órbita terrestre alrededor del Sol, que oscila entre una forma casi circular y una elíptica, se denomina:"

opciones_explicitas: ["oblicuidad", "precesión", "excentricidad", "nutación"]

explicacion: |
  La excentricidad describe qué tan "achatada" es la órbita terrestre. Este ciclo tiene periodos de aproximadamente 100,000 y 400,000 años y afecta la cantidad de radiación solar que llega a la Tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["oblicuidad", "inclinacion", "clima"]

respuesta: 22.1
tipo: completar
tolerancia_abs: 0.1

enunciado: "La inclinación del eje terrestre (oblicuidad) varía periódicamente entre aproximadamente 22.1° y 24.5°. Si la inclinación aumenta hacia el valor máximo de 24.5 grados, ¿cuál es el valor aproximado de la inclinación mínima que alcanza en el ciclo?"

pasos:
  - "Identificar el valor máximo de inclinación proporcionado."
  - "Identificar el valor mínimo de inclinación del ciclo real (22.1°-24.5°)."

explicacion: |
  La oblicuidad influye en la estacionalidad. Una mayor inclinación genera estaciones más marcadas, mientras que una menor inclinación (22.1 grados) tiende a favorecer la glaciación al hacer los veranos menos intensos en las altas latitudes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["precesion", "eje_terrestre"]

respuesta: "el eje de rotación"
tipo: completar
respuestas_validas:
  - "el eje de rotación"
  - "la órbita"
  - "el sol"

enunciado: "La precesión es el movimiento de bamboleo de ___ terrestre, similar al de un trompo, que cambia la orientación de los polos respecto a la eclíptica."

explicacion: |
  La precesión afecta la dirección en la que apunta la Tierra respecto a las estrellas y determina en qué época del año ocurre el solsticio o el equinoccio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["causas", "glaciaciones"]

respuesta_orden: ["excentricidad", "oblicuidad", "precesión"]
tipo: ordenar

opciones_explicitas: ["excentricidad", "oblicuidad", "precesión"]

enunciado: "Ordene los tres ciclos de Milankovitch desde el que tiene el periodo de duración más largo al más corto:"

explicacion: |
  El orden correcto de duración es: Excentricidad (~100k-400k años), Oblicuidad (~41k años) y Precesión (~21k-26k años).
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["radiacion", "insolacion"]

respuesta: "glaciación"
tipo: mc

enunciado: "Si los ciclos de Milankovitch provocan que la insolación estival en las altas latitudes sea significativamente menor, el efecto resultante en el clima global es una:"

opciones_explicitas: ["glaciación", "interglaciar", "estabilidad térmica"]

explicacion: |
  Para que se formen grandes capas de hielo, los veranos deben ser lo suficientemente frescos como para que la nieve del invierno no se derrita completamente, permitiendo la acumulación de hielo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["precambrico", "glaciacion", "teoria"]

respuesta: "Tierra bola de nieve"
tipo: completar
respuestas_validas:
  - "Tierra bola de nieve"
  - "Snowball Earth"

enunciado: "La hipótesis que propone que, durante el Precámbrico, la Tierra estuvo casi totalmente cubierta por capas de hielo se denomina ___."

explicacion: |
  La hipótesis de la 'Tierra bola de nieve' sugiere que el planeta experimentó periodos de glaciación global donde incluso el ecuador estaba cubierto de hielo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["evidencia", "sedimentos"]

variables:
  escenario_idx: uno_de([0, 1])
  evidencias: [["diamictitas", "depósitos de tilita"], ["capas de carbonatos", "depósitos de hierro bandeado"]]
  respuesta_correcta: evidencias[escenario_idx][0]

respuesta: respuesta_correcta
tipo: mc
opciones_explicitas: ["diamictitas", "capas de carbonatos", "depósitos de hierro bandeado", "depósitos de tilita"]

enunciado: "En el registro geológico, la presencia de ___ es una evidencia clave que sugiere la existencia de glaciaciones intensas en latitudes bajas durante el Precámbrico."

pasos:
  - "Identificar el tipo de sedimento glacial."
  - "Relacionar el sedimento con la hipótesis de congelamiento global."

explicacion: |
  Las diamictitas (o tilitas) son rocas sedimentarias con matriz de grano fino que contiene clastos de diversos tamaños, características de la erosión glacial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["albedo", "retroalimentacion", "clima"]

respuesta: "albedo"
tipo: completar
respuestas_validas:
  - "albedo"
  - "efecto invernadero"

enunciado: "El principal mecanismo de retroalimentación positiva que acelera el enfriamiento en la hipótesis de la Tierra bola de nieve es el aumento del ___ terrestre."

explicacion: |
  Al extenderse el hielo, la superficie refleja más radiación solar (mayor albedo) en lugar de absorberla, lo que reduce la temperatura y permite que el hielo crezca aún más.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["volcanismo", "co2", "deshielo"]

respuesta: "volcanismo"
tipo: mc
opciones_explicitas: ["tectónica de placas", "volcanismo", "actividad solar", "cambios en la órbita"]

enunciado: "¿Qué proceso geológico se considera el principal responsable de liberar grandes cantidades de CO2 para romper el estado de 'bola de nieve' y provocar un efecto invernadero extremo?"

explicacion: |
  El vulcanismo continuo durante el periodo de congelación acumula gases de efecto invernadero en la atmósfera, ya que el ciclo de carbonato-silicato (que normalmente consume CO2) se detiene por la falta de meteorización líquida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["secuencia", "clima", "precambrico"]

respuesta_orden: ["Glaciación global", "Acumulación de gases volcánicos", "Efecto invernadero extremo", "Deshielo masivo"]
tipo: ordenar
opciones_explicitas: ["Glaciación global", "Acumulación de gases volcánicos", "Efecto invernadero extremo", "Deshielo masivo"]

enunciado: "Ordena cronológicamente los eventos que llevan a la transición de una Tierra bola de nieve a un estado de clima cálido."

pasos:
  - "Establecer el estado inicial de congelamiento."
  - "Identificar la fuente de gases en la atmósfera."
  - "Determinar la consecuencia térmica."
  - "Indicar el resultado final del proceso."

explicacion: |
  La secuencia comienza con la glaciación, sigue con la acumulación de CO2 por vulcanismo (al no haber meteorización), lo que genera un efecto invernadero que finalmente provoca el deshielo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["cuaternario", "glaciaciones"]

respuesta: "Pleistoceno"
tipo: completar
respuestas_validas:
  - "Pleistoceno"

enunciado: "El periodo geológico que comprende la mayor parte del Cuaternario y que se caracteriza por ciclos de glaciaciones es el ___________."

explicacion: |
  El Pleistoceno abarca desde hace aproximadamente 2.58 millones de años hasta hace 11,700 años, marcando la era de las grandes glaciaciones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["glaciacion", "tiempo"]

respuesta: 11700
tipo: completar
tolerancia_abs: 500

enunciado: "La última glaciación (LGM - Last Glacial Maximum) terminó hace aproximadamente ________ años, dando inicio al Holoceno."

explicacion: |
  Hace unos 11,700 años el clima se estabilizó, permitiendo el florecimiento de las civilizaciones humanas actuales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["milankovitch", "ciclos"]

tipo: mc
opciones_explicitas: ["Excentricidad", "Precesión", "Oblicuidad", "Efecto Coriolis"]
respuesta: "Excentricidad"

enunciado: "El ciclo de Milankovitch que altera la forma de la órbita terrestre, haciéndola pasar de casi circular a más elíptica y viceversa a lo largo de miles de años, se conoce como:"

explicacion: |
  La Excentricidad es uno de los tres ciclos astronómicos principales (junto con la Precesión y la Oblicuidad) que modulan la insolación terrestre, con un período aproximado de 100.000 años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["secuencia", "clima"]

respuesta_orden: ["Interglaciar actual (Holoceno)", "Enfriamiento gradual", "Máximo glacial", "Deshielo hacia el siguiente interglaciar"]
tipo: ordenar
opciones_explicitas: ["Interglaciar actual (Holoceno)", "Enfriamiento gradual", "Máximo glacial", "Deshielo hacia el siguiente interglaciar"]

enunciado: "Ordena las etapas de un ciclo climático típico del Cuaternario, comenzando desde el interglaciar actual:"

explicacion: |
  El Cuaternario se caracteriza por la alternancia entre periodos fríos (glaciaciones) y periodos cálidos (interglaciares).
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["holoceno", "clima"]

respuesta: "Holoceno"
tipo: mc
opciones_explicitas: ["Pleistoceno", "Holoceno", "Eoceno", "Mioceno"]

enunciado: "El periodo interglaciar actual, en el que nos encontramos y que comenzó tras la última gran glaciación, se denomina:"

explicacion: |
  El Holoceno es el periodo de clima estable y cálido que ha permitido el desarrollo de la agricultura y la civilización humana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["milankovitch", "astronomia"]

respuesta: "cambios en la órbita terrestre"
tipo: mc
opciones_explicitas: ["cambios en la órbita terrestre", "inclinación del eje terrestre", "balanceo del eje terrestre"]

enunciado: "La variación en la forma de la órbita terrestre alrededor del Sol, conocida como ciclo de excentricidad, consiste en:"

explicacion: |
  La excentricidad describe qué tan elíptica es la órbita, afectando la distancia promedio al Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["volcanes", "clima"]

respuesta: "enfriamiento"
tipo: mc
opciones_explicitas: ["enfriamiento", "calentamiento"]

enunciado: "Una erupción volcánica masiva inyecta ceniza y aerosoles en la estratosfera. El efecto inmediato de estas partículas sobre la temperatura global es de ___."

explicacion: |
  Las erupciones grandes suelen causar enfriamiento temporal debido al efecto albedo de los aerosoles.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["carbono", "geoquimica"]

respuesta: "secuestro de CO2"
tipo: completar
respuestas_validas:
  - "secuestro de CO2"

enunciado: "Durante un periodo de glaciación, la actividad biológica y la sedimentación oceánica provocan una ___ de carbono atmosférico."

explicacion: |
  El secuestro de carbono en el fondo marino reduce el efecto invernadero, favoreciendo el enfriamiento.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

respuesta_orden: ["Aumento de radiación solar", "Derretimiento de glaciares", "Aumento del nivel del mar"]
tipo: ordenar
opciones_explicitas: ["Aumento de radiación solar", "Derretimiento de glaciares", "Aumento del nivel del mar"]

enunciado: "Ordene cronológicamente la reacción en cadena ante un aumento en la insolación solar:"

explicacion: |
  El aumento de radiación calienta la superficie, lo que derrite el hielo y finalmente eleva el nivel del mar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["escalas", "tiempo"]

respuesta: "Ciclos orbitales"
tipo: mc
opciones_explicitas: ["Ciclos orbitales", "Variaciones milenarias"]

enunciado: "Las variaciones climáticas de escala geológica, como las glaciaciones, están impulsadas principalmente por los ciclos de Milankovitch, es decir, por:"

explicacion: |
  Los ciclos de Milankovitch operan en escalas de decenas de miles de años.
```

