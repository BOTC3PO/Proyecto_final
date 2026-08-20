# Examen jefe — Maestro de la Biología

> Logro #153. Completaste el examen jefe abarcando desde las adaptaciones en los hábitats hasta los procesos celulares y las enfermedades como el mal de Chagas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **105 preguntas totales** en 5/5 secciones.

---

## Sección: habitats-adaptacion (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["concepto", "habitat"]

respuesta: verdadero
tipo: vf

enunciado: "El hábitat es el lugar donde vive naturalmente una especie, con las condiciones que necesita para sobrevivir."

explicacion: |
  Correcto. Provee las condiciones ambientales que la especie necesita.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["concepto", "ecosistema"]

respuesta: falso
tipo: vf

enunciado: "Los términos 'hábitat' y 'ecosistema' son sinónimos y significan exactamente lo mismo."

explicacion: |
  Falso. El ecosistema incluye todos los seres vivos y el ambiente de una zona; el hábitat es la "dirección" de una especie puntual.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["condiciones"]

respuesta: verdadero
tipo: vf

enunciado: "Un hábitat incluye condiciones como temperatura, agua, alimento y refugio."

explicacion: |
  Correcto, son los recursos y condiciones esenciales para el ciclo vital.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["adaptacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una adaptación es una característica que ayuda a un ser vivo a sobrevivir y reproducirse mejor en su hábitat."

explicacion: |
  Correcto, son rasgos que aumentan las chances de supervivencia y reproducción.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["evolucion"]

respuesta: falso
tipo: vf

enunciado: "Una adaptación aparece de un día para el otro en un solo individuo, a propósito."

explicacion: |
  Falso. Se desarrolla a lo largo de muchas generaciones, no es un cambio voluntario individual.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["seleccion_natural"]

respuesta: verdadero
tipo: vf

enunciado: "Las adaptaciones están directamente relacionadas con el proceso de selección natural."

explicacion: |
  Correcto — ver ../seleccion-natural/.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["adaptacion"]

variables:
  tabla: [["estructural", "pico curvo de un aguila"], ["fisiologica", "hibernacion"], ["de comportamiento", "migracion de aves"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["pico curvo de un aguila", "hibernacion", "migracion de aves"]

enunciado: "¿Cuál es un ejemplo de adaptación de tipo {tabla[idx][0]}?"

explicacion: |
  Un ejemplo de adaptación {tabla[idx][0]} es: {tabla[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["camuflaje", "estructural"]

respuesta: verdadero
tipo: vf

enunciado: "El pelaje blanco de un oso polar (camuflaje) es una adaptación estructural."

explicacion: |
  Correcto, es una característica física del cuerpo.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["fisiologia"]

respuesta: falso
tipo: vf

enunciado: "La hibernación (bajar el metabolismo) es una adaptación de comportamiento, no fisiológica."

explicacion: |
  Falso. Es fisiológica, porque implica cambios en procesos internos del cuerpo.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["comportamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Vivir en manada para protegerse de depredadores es una adaptación de comportamiento."

explicacion: |
  Correcto, es una conducta que aumenta las chances de supervivencia.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "estructurales"
tipo: completar
respuestas_validas: ["estructurales"]

enunciado: "Las adaptaciones físicas se llaman adaptaciones ___."

explicacion: |
  Las adaptaciones anatómicas se denominan estructurales.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["adaptacion", "evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "Una adaptación beneficiosa en un hábitat puede resultar inútil o perjudicial en un hábitat distinto."

explicacion: |
  Correcto, las adaptaciones son específicas del entorno donde surgieron.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["evolucion"]

respuesta: falso
tipo: vf

enunciado: "Existe 'la adaptación perfecta', un conjunto de rasgos que sirven para sobrevivir en cualquier hábitat por igual."

explicacion: |
  Falso, no existe la adaptación universal — siempre son específicas a un hábitat.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["cactus", "desierto"]

respuesta: "almacenar agua"
tipo: mc
opciones_explicitas: ["almacenar agua", "atraer polinizadores", "defenderse de depredadores", "realizar fotosíntesis extra"]

enunciado: "En el cactus del desierto, ¿para qué sirve principalmente su tallo grueso?"

explicacion: |
  El tallo suculento almacena agua para las temporadas de sequía.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["cactus", "desierto"]

respuesta: "perder menos agua y defenderse"
tipo: mc
opciones_explicitas: ["perder menos agua y defenderse", "atraer más agua de lluvia", "producir más flores", "nada en particular"]

enunciado: "En el cactus, las hojas transformadas en espinas sirven principalmente para..."

explicacion: |
  Menos superficie foliar reduce la pérdida de agua por transpiración, y además funciona como defensa contra herbívoros.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["cactus", "desierto"]

respuesta: verdadero
tipo: vf

enunciado: "Las raíces extendidas y poco profundas del cactus le permiten aprovechar rápido las lluvias esporádicas del desierto."

explicacion: |
  Correcto, al ser tan extendidas cerca de la superficie, absorben agua de lluvia antes de que se evapore o se filtre profundo.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["aplicacion", "ejemplos"]

respuesta: "estructural"
tipo: mc
opciones_explicitas: ["estructural", "fisiologica", "de comportamiento"]

enunciado: "Las aletas de un pez, que le permiten nadar eficientemente, son un ejemplo de adaptación de tipo..."

explicacion: |
  Es una característica física del cuerpo: adaptación estructural.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "avanzado"
  tags: ["aplicacion", "ejemplos"]

respuesta: verdadero
tipo: vf

enunciado: "La capacidad del camaleón de cambiar de color según el entorno es una adaptación que combina lo estructural (piel con células especiales) y lo conductual (elige cuándo activarlo)."

explicacion: |
  Correcto, muchas adaptaciones no encajan en una sola categoría pura, sino que combinan varios tipos.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["comportamiento", "migracion"]

respuesta: verdadero
tipo: vf

enunciado: "La migración de las aves es una adaptación de comportamiento que responde a cambios estacionales del hábitat (disponibilidad de comida, temperatura)."

explicacion: |
  Correcto, viajan a zonas con mejores condiciones según la época del año.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "avanzado"
  tags: ["conceptos", "conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si el hábitat de una especie cambia muy rápido (por ejemplo, por acción humana), sus adaptaciones (desarrolladas para el hábitat anterior) pueden dejar de ser útiles, poniendo en riesgo a la especie."

explicacion: |
  Correcto. Las adaptaciones evolucionan lentamente, a lo largo de generaciones — un cambio de hábitat muy rápido no les da tiempo de "ponerse al día".
```

## Sección: herencia-ligada-al-sexo (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "basico"
  tags: ["ligado_x", "vocabulario"]

enunciado: "¿Qué significa que un gen esté 'ligado al X'?"
tipo: mc
opciones_explicitas:
  - "Que el gen está ubicado en el cromosoma X, así que su herencia depende de cuántas copias de X tiene cada sexo"
  - "Que el gen sólo existe en mujeres, nunca en varones"
  - "Que el gen determina directamente el sexo biológico del individuo"
respuesta: "Que el gen está ubicado en el cromosoma X, así que su herencia depende de cuántas copias de X tiene cada sexo"

explicacion: |
  Mujeres tienen XX (2 copias); varones tienen XY (1 sola copia de X).
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "intermedio"
  tags: ["ligado_x"]

enunciado: "¿Por qué un varón (XY) expresa un rasgo recesivo ligado al X con una sola copia del alelo recesivo, mientras que una mujer necesita dos?"
tipo: mc
opciones_explicitas:
  - "Porque el varón sólo tiene un cromosoma X — no hay un segundo X con una copia dominante que pueda 'tapar' al recesivo"
  - "Porque los alelos recesivos son más fuertes en varones que en mujeres"
  - "No hay ninguna diferencia real entre varones y mujeres para estos genes"
respuesta: "Porque el varón sólo tiene un cromosoma X — no hay un segundo X con una copia dominante que pueda 'tapar' al recesivo"

explicacion: |
  Es la razón cromosómica detrás de toda la asimetría de este tema.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "intermedio"
  tags: ["ligado_x"]

respuesta: verdadero
tipo: vf

enunciado: "Los rasgos recesivos ligados al X (como hemofilia o daltonismo) son mucho más comunes en varones que en mujeres."

explicacion: |
  Una mujer necesita las dos copias recesivas; un varón, sólo una.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "intermedio"
  tags: ["portadora", "vocabulario"]

enunciado: "¿Qué es una mujer 'portadora' de un rasgo recesivo ligado al X?"
tipo: mc
opciones_explicitas:
  - "Una mujer heterocigota (XᴬXᵃ): no expresa el rasgo (tiene la copia dominante), pero puede transmitir el alelo recesivo a su descendencia"
  - "Una mujer que ya expresa el rasgo de forma visible"
  - "Una mujer que no puede tener hijos"
respuesta: "Una mujer heterocigota (XᴬXᵃ): no expresa el rasgo (tiene la copia dominante), pero puede transmitir el alelo recesivo a su descendencia"

explicacion: |
  Es la aplicación de 'heterocigota' de `../genetica-mendeliana-punnett/`
  a un gen ligado al X.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Padre no afectado (XᴬY) × madre portadora (XᴬXᵃ). ¿Cuál es la probabilidad de que un hijo VARÓN esté afectado (P(afectado | varón))?"

pasos:
  - "Entre los hijos varones (XᴬY o XᵃY, cada uno 1/2 de probabilidad), la mitad está afectada"
  - "P(afectado | varón) = 0,5"

explicacion: |
  El padre sólo aporta Y a los varones; el alelo decisivo lo aporta la
  madre, que es portadora (1/2 de probabilidad de aportar el recesivo).
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0
tipo: input

enunciado: "Con el mismo cruce (padre XᴬY, madre XᴬXᵃ), ¿cuál es la probabilidad de que una hija MUJER esté afectada (P(afectada | mujer))?"

pasos:
  - "El padre siempre aporta Xᴬ a sus hijas — ninguna hija puede recibir dos copias recesivas"
  - "P(afectada | mujer) = 0"

explicacion: |
  Con un padre no afectado, ninguna hija puede estar afectada por este
  gen, sin importar el genotipo de la madre.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Con el mismo cruce (padre XᴬY, madre XᴬXᵃ), ¿cuál es la probabilidad de que una hija sea PORTADORA (P(portadora | mujer))?"

pasos:
  - "Entre las hijas (XᴬXᴬ o XᴬXᵃ, cada una 1/2), la mitad es portadora"
  - "P(portadora | mujer) = 0,5"

explicacion: |
  La condición 'portadora' depende de qué alelo aportó la madre —
  50/50, igual que cualquier alelo heterocigota.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["probabilidad_condicional"]

respuesta: verdadero
tipo: vf

enunciado: "P(afectado | hijo varón) y P(afectado | hija mujer) son dos probabilidades condicionales DISTINTAS sobre el mismo cruce — condicionar sobre el sexo del hijo cambia el resultado."

explicacion: |
  Es la aplicación directa de `../../matematica/probabilidad-condicional/`
  a este mecanismo genético: en el ejemplo de la teoría, una da 1/2 y
  la otra da 0.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Cuáles son ejemplos reales de rasgos recesivos ligados al X en humanos?"
tipo: mc
opciones_explicitas:
  - "Hemofilia y daltonismo (dificultad para distinguir colores)"
  - "Estatura y color de ojos"
  - "Grupo sanguíneo y factor Rh"
respuesta: "Hemofilia y daltonismo (dificultad para distinguir colores)"

explicacion: |
  Ambos son mucho más frecuentes en varones que en mujeres, por el
  mecanismo de este módulo. Los grupos sanguíneos son otro sistema,
  ver `../grupos-sanguineos/`.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 1
tipo: input

enunciado: "Madre AFECTADA (XᵃXᵃ) × padre no afectado (XᴬY). ¿Cuál es la probabilidad de que un hijo VARÓN esté afectado?"

pasos:
  - "La madre sólo puede aportar Xᵃ (es lo único que tiene); el padre aporta Y a sus hijos varones"
  - "Todos los hijos varones son XᵃY: P(afectado | varón) = 1"

explicacion: |
  Con una madre afectada, TODOS los hijos varones heredan el alelo
  recesivo — patrón clásico de la herencia ligada al X.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0
tipo: input

enunciado: "Con el mismo cruce (madre XᵃXᵃ, padre XᴬY), ¿cuál es la probabilidad de que una hija esté afectada?"

pasos:
  - "El padre siempre aporta Xᴬ a sus hijas; la madre sólo puede aportar Xᵃ"
  - "Todas las hijas son XᴬXᵃ (portadoras, no afectadas): P(afectada | mujer) = 0"

explicacion: |
  Aunque la madre esté afectada, ninguna hija lo está — pero todas
  quedan portadoras.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué el daltonismo (dificultad para distinguir colores) es mucho más común en varones que en mujeres?"
tipo: mc
opciones_explicitas:
  - "Porque es un rasgo recesivo ligado al X: un varón lo expresa con una sola copia del alelo, mientras que una mujer necesita las dos copias"
  - "Porque los ojos de los varones tienen una estructura biológica distinta a la de las mujeres"
  - "El daltonismo es igual de común en ambos sexos, no hay ninguna diferencia real"
respuesta: "Porque es un rasgo recesivo ligado al X: un varón lo expresa con una sola copia del alelo, mientras que una mujer necesita las dos copias"

explicacion: |
  Es la aplicación directa del mecanismo de este módulo a un caso
  real y común.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0.25
tipo: input

enunciado: "Padre no afectado (XᴬY) × madre portadora (XᴬXᵃ). Sin condicionar sobre el sexo, ¿cuál es la probabilidad de que un hijo (varón o mujer, cualquiera) nazca afectado?"

pasos:
  - "De las 4 combinaciones igual de probables (XᴬXᴬ, XᴬXᵃ, XᴬY, XᵃY), sólo 1 está afectada (XᵃY)"
  - "P(afectado) = 1/4 = 0,25"

explicacion: |
  Esta es la probabilidad SIN condicionar sobre el sexo — muy distinta
  de P(afectado|varón)=0,5 y P(afectado|mujer)=0 calculadas antes.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "intermedio"
  tags: ["ligado_x"]

respuesta: verdadero
tipo: vf

enunciado: "Una mujer necesita las DOS copias recesivas (XᵃXᵃ) para expresar un rasgo ligado al X, porque tiene dos cromosomas X y la copia dominante en cualquiera de los dos alcanza para tapar al recesivo."

explicacion: |
  Es la misma lógica de dominancia/recesividad de
  `../genetica-mendeliana-punnett/`, aplicada a un gen ligado al X.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0
tipo: input

enunciado: "Padre AFECTADO (XᵃY) × madre homocigota dominante, no portadora (XᴬXᴬ). ¿Cuál es la probabilidad de que un hijo VARÓN esté afectado?"

pasos:
  - "El padre sólo aporta Y a sus hijos varones (nunca su Xᵃ); la madre sólo puede aportar Xᴬ"
  - "Todos los hijos varones son XᴬY: P(afectado | varón) = 0"

explicacion: |
  Un padre nunca transmite su cromosoma X a sus hijos varones (les
  transmite el Y) — por eso un padre afectado no puede 'pasarle'
  directamente el rasgo a un hijo varón.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 1
tipo: input

enunciado: "Con el mismo cruce (padre XᵃY afectado, madre XᴬXᴬ), ¿cuál es la probabilidad de que una hija sea portadora?"

pasos:
  - "El padre siempre aporta Xᵃ a sus hijas; la madre siempre aporta Xᴬ"
  - "Todas las hijas son XᴬXᵃ: P(portadora | mujer) = 1"

explicacion: |
  Un padre afectado transmite el alelo recesivo a TODAS sus hijas
  (nunca a sus hijos varones) — todas quedan portadoras.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "intermedio"
  tags: ["ligado_x"]

respuesta: verdadero
tipo: vf

enunciado: "Un padre siempre transmite su cromosoma Y (no su X) a sus hijos varones — por eso un rasgo ligado al X del padre nunca pasa directamente de padre a hijo varón."

explicacion: |
  El hijo varón recibe su único X de la madre, no del padre.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Una familia con antecedentes de hemofilia quiere estimar el riesgo de que un futuro hijo esté afectado. ¿Qué información hace falta, además de si los padres son portadores o no?"
tipo: mc
opciones_explicitas:
  - "El sexo del futuro hijo, porque la probabilidad de estar afectado es distinta según sea varón o mujer"
  - "El sexo no importa: la probabilidad de estar afectado es siempre la misma para cualquier hijo"
  - "Ningún dato adicional es necesario más allá del genotipo de los padres"
respuesta: "El sexo del futuro hijo, porque la probabilidad de estar afectado es distinta según sea varón o mujer"

explicacion: |
  Es la aplicación real del asesoramiento genético: condicionar sobre
  el sexo cambia el riesgo calculado.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "avanzado"
  tags: ["ligado_x", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Padre AFECTADO (XᵃY) × madre PORTADORA (XᴬXᵃ). ¿Cuál es la probabilidad de que una hija esté afectada (XᵃXᵃ)?"

pasos:
  - "El padre siempre aporta Xᵃ a sus hijas; la madre aporta Xᴬ o Xᵃ con 1/2 cada uno"
  - "P(hija XᵃXᵃ) = 1 × 1/2 = 0,5"

explicacion: |
  Es el único tipo de cruce donde SÍ puede haber hijas afectadas: hace
  falta que el padre esté afectado Y que la madre aporte el recesivo.
```

```
metadata:
  materia: "biologia"
  tema: "herencia_ligada_al_sexo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la herencia ligada al sexo?"
tipo: mc
opciones_explicitas:
  - "Para explicar por qué ciertas condiciones genéticas afectan de forma desigual a varones y mujeres, y para calcular el riesgo real de un hijo según su sexo"
  - "Sólo tiene aplicación en plantas, no en humanos"
  - "Sólo sirve para determinar el sexo biológico de un futuro hijo"
respuesta: "Para explicar por qué ciertas condiciones genéticas afectan de forma desigual a varones y mujeres, y para calcular el riesgo real de un hijo según su sexo"

explicacion: |
  Es la aplicación de `../../matematica/probabilidad-condicional/` a
  un mecanismo genético real — `../grupos-sanguineos/` sigue con otro
  mecanismo distinto, también condicional.
```

## Sección: mal-de-chagas (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["ciclo_vida", "vector"]

variables:
  etapa1: "huevo"
  etapa2: "ninfa"
  etapa3: "adulto"
  lista_etapas: [etapa1, etapa2, etapa3]
  respuesta_correcta: "huevo, ninfa y adulto"

respuesta: "huevo, ninfa y adulto"
tipo: completar

enunciado: "El ciclo de vida de la vinchuca incluye las etapas: {respuesta_correcta}."

explicacion: |
  La vinchuca pasa por tres etapas principales: huevo, ninfa (que muda de piel varias veces) y adulto.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["agente_etiologico", "parasito"]

variables:
  respuesta_correcta: "Trypanosoma cruzi"

respuesta: "Trypanosoma cruzi"
tipo: completar

enunciado: "El agente etiológico principal de la enfermedad de Chagas es un parásito microscópico llamado {respuesta_correcta}."

explicacion: |
  La enfermedad de Chagas, o tripanosomiasis americana, es causada específicamente por el protozoo flagelado Trypanosoma cruzi.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["vector", "vinchuca"]

variables:
  vector_comun: "vinchuca"

respuesta: "vinchuca"
tipo: completar

enunciado: "El insecto vector más común en Argentina para la transmisión del Chagas es la {vector_comun}, también conocida como chinche del sur."

explicacion: |
  La vinchuca (familia Reduviidae) es el principal vector mecánico y biológico de Trypanosoma cruzi en la región.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["transmision", "defecacion"]

variables:
  evento_clave: "defecacion"

respuesta: "defecacion"
tipo: completar

enunciado: "El riesgo de infección aumenta cuando la vinchuca pica y {evento_clave} cerca de la herida, permitiendo que los parásitos ingresen al organismo."

explicacion: |
  La transmisión ocurre cuando las heces infectadas con parásitos se frotan en la picadura, los ojos o la boca.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["ciclo_vida", "insecto"]

variables:
  etapas: "huevo, ninfa y adulto"

respuesta: "huevo, ninfa y adulto"
tipo: completar

enunciado: "El ciclo de vida de la vinchuca incluye tres etapas principales: {etapas}."

explicacion: |
  La metamorfosis incompleta de la vinchuca pasa por huevo, ninfa (que muda varias veces) y adulto.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["habitat", "grietas"]

variables:
  refugio: "grietas"

respuesta: "grietas"
tipo: completar

enunciado: "Durante el día, la vinchuca suele esconderse en {refugio} de paredes de adobe, techos de paja o montones de leña."

explicacion: |
  Estas grietas y hendiduras ofrecen protección y proximidad a los hospedadores mamíferos para su alimentación nocturna.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "avanzado"
  tags: ["taxonomia", "reduviidae"]

variables:
  familia: "Reduviidae"

respuesta: "Reduviidae"
tipo: completar

enunciado: "La vinchuca pertenece a la familia de insectos hemípteros conocida como {familia}."

explicacion: |
  Los Reduviidae son conocidos como chinches asesinas, caracterizados por su probóscide larga y potente para chupar sangre.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["transmision", "rasgado"]

variables:
  accion: "rascarse"

respuesta: "rascarse"
tipo: completar

enunciado: "La picadura en sí no transmite el parásito; es común que la persona {accion} la zona, frotando las heces infectadas en la herida."

explicacion: |
  El rascamiento es el mecanismo involuntario que facilita la entrada de los tripomastigotas presentes en las heces de la vinchuca.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["epidemiologia", "zonas_rurales"]

variables:
  zona: "rurales"

respuesta: "rurales"
tipo: completar

enunciado: "Aunque ha disminuido, la enfermedad sigue siendo un desafío en zonas {zona} y periurbanas del norte argentino."

explicacion: |
  Las condiciones de vivienda precaria en áreas rurales facilitan la convivencia con el vector.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "avanzado"
  tags: ["nomenclatura", "vector"]

variables:
  nombre_cientifico: "Triatoma infestans"

respuesta: "Triatoma infestans"
tipo: completar

enunciado: "Una de las especies de vinchuca más importante y extendida en el Cono Sur, incluida Argentina, es {nombre_cientifico}."

explicacion: |
  Triatoma infestans es la principal especie vectora en la región del Gran Chaco y zonas aledañas.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["alimentacion", "sangre"]

variables:
  alimento: "sangre"

respuesta: "sangre"
tipo: completar

enunciado: "Tanto las ninfas como los adultos de la vinchuca deben alimentarse de {alimento} para crecer y reproducirse."

explicacion: |
  La alimentación hematófaga es esencial para el desarrollo del insecto y el ciclo de vida del parásito en su interior.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["sintomas", "chagoma"]

variables:
  sintoma: "chagoma"

respuesta: "chagoma"
tipo: completar

enunciado: "En la fase aguda, puede aparecer una inflamación local en el sitio de inoculación llamada {sintoma}."

explicacion: |
  El chagoma es una lesión cutánea indurada que se forma en el lugar donde los parásitos ingresaron al organismo.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["ciclo_vida", "longevidad"]

variables:
  duracion: "varios meses"

respuesta: "varios meses"
tipo: completar

enunciado: "Los insectos adultos de la vinchuca pueden vivir {duracion}, lo que aumenta el riesgo de exposición prolongada."

explicacion: |
  Su longevidad relativa permite múltiples oportunidades de picadura y transmisión a lo largo del tiempo.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "avanzado"
  tags: ["parasitologia", "intestino"]

variables:
  organo: "intestino"

respuesta: "intestino"
tipo: completar

enunciado: "El parásito Trypanosoma cruzi se desarrolla y multiplica dentro del {organo} del insecto vector."

explicacion: |
  El ciclo del parásito dentro de la vinchuca ocurre en el tracto digestivo, donde se transforma en metacíclico.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["salud_publica", "diagnostico"]

variables:
  objetivo: "evitar complicaciones"

respuesta: "evitar complicaciones"
tipo: completar

enunciado: "El diagnóstico temprano es clave para {objetivo} graves a largo plazo, como la cardiopatía chagásica crónica."

explicacion: |
  Tratar la fase aguda previene la progresión a la fase crónica, que puede ser devastadora para el corazón y el sistema digestivo.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["nomenclatura", "tripanosomiasis"]

variables:
  nombre_alt: "tripanosomiasis americana"

respuesta: "tripanosomiasis americana"
tipo: completar

enunciado: "La enfermedad de Chagas también es conocida como {nombre_alt}."

explicacion: |
  Este nombre refleja la naturaleza del parásito (tripanosoma) y su distribución geográfica original (América).
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["morfologia", "proboscide"]

variables:
  parte: "probóscide"

respuesta: "probóscide"
tipo: completar

enunciado: "La vinchuca se caracteriza por tener un cuerpo aplanado y una larga {parte} con la que se alimenta de sangre."

explicacion: |
  La probóscide es un órgano bucal piercing-sucking adaptado para penetrar la piel de los hospedadores.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["prevencion", "control"]

variables:
  estrategia: "control vectorial"

respuesta: "control vectorial"
tipo: completar

enunciado: "En las últimas décadas, los avances en {estrategia} han logrado reducir significativamente la transmisión de la enfermedad."

explicacion: |
  El fumigación de viviendas y la mejora de la infraestructura habitacional son pilares del control en Argentina.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["geografia", "america_latina"]

variables:
  region: "América Latina"

respuesta: "América Latina"
tipo: completar

enunciado: "La enfermedad de Chagas es endémica en gran parte de {region}, especialmente en zonas tropicales y subtropicales."

explicacion: |
  Desde el sur de México hasta el centro de Argentina y Chile, la enfermedad tiene presencia histórica.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "avanzado"
  tags: ["clinica", "cronica"]

variables:
  fase: "crónica"

respuesta: "crónica"
tipo: completar

enunciado: "Después de la fase aguda, la enfermedad entra en una fase {fase} que puede durar décadas y ser asintomática o causar daño orgánico."

explicacion: |
  La fase crónica se divide en indeterminada (asintomática) e indeterminada (con manifestaciones cardíacas o digestivas).
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["nomenclatura_regional", "vinchuca"]

variables:
  nombre_norte: "vinchuca"

respuesta: "vinchuca"
tipo: completar

enunciado: "En el norte argentino, al insecto vector se lo llama comúnmente {nombre_norte}."

explicacion: |
  En otras regiones de Sudamérica se le conoce como chinche del sur, chupador o barbeiro.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["transmision", "contaminacion"]

variables:
  sustancia: "excretas"

respuesta: "excretas"
tipo: completar

enunciado: "La transmisión requiere la contaminación de la herida con las {sustancia} de la vinchuca, no con su saliva."

explicacion: |
  Los parásitos están en las heces, no en la saliva. La picadura inocula saliva anticoagulante, pero la infección viene de las heces.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["salud_publica", "impacto"]

variables:
  impacto: "salud pública"

respuesta: "salud pública"
tipo: completar

enunciado: "El impacto histórico y actual del Chagas en Argentina lo convierte en un problema prioritario de {impacto}."

explicacion: |
  Debido a su prevalencia y gravedad, requiere programas nacionales e internacionales de vigilancia y control.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "intermedio"
  tags: ["desarrollo", "muda"]

variables:
  proceso: "mudar"

respuesta: "mudar"
tipo: completar

enunciado: "Las ninfas de la vinchuca deben alimentarse de sangre para crecer y {proceso} su piel hasta alcanzar la etapa adulta."

explicacion: |
  La muda es necesaria para el desarrollo morfológico del insecto durante su crecimiento.
```

```
metadata:
  materia: "biologia"
  tema: "mal_de_chagas"
  nivel: "basico"
  tags: ["prevencion", "higiene"]

variables:
  accion: "no rascarse"

respuesta: "no rascarse"
tipo: completar

enunciado: "Una medida preventiva simple es {accion} la picadura inmediatamente para evitar frotar las heces infectadas en los ojos o la boca."

explicacion: |
  Evitar el rascamiento reduce el riesgo de inoculación accidental de los parásitos presentes en las heces del vector.
```

## Sección: microbiologia-virus-inmunitario (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["bacterias", "celulas"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias son células procariotas."

explicacion: |
  Son organismos unicelulares sin núcleo definido: procariotas.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["bacterias", "salud"]

respuesta: falso
tipo: vf

enunciado: "Todas las bacterias son patógenas y causan enfermedades."

explicacion: |
  Falso. La mayoría son inofensivas o beneficiosas, como la microbiota intestinal.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["hongos"]

respuesta: verdadero
tipo: vf

enunciado: "Los hongos son células eucariotas."

explicacion: |
  Correcto, tienen núcleo definido.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["hongos", "cloroplastos"]

respuesta: falso
tipo: vf

enunciado: "Los hongos tienen cloroplastos, igual que las plantas."

explicacion: |
  Falso. No hacen fotosíntesis: no tienen cloroplastos.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "Un virus está compuesto únicamente por material genético envuelto en una cápsula de proteína (cápside)."

explicacion: |
  Correcto, esa es la estructura básica de un virus.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "metabolismo"]

respuesta: falso
tipo: vf

enunciado: "Un virus posee organelas y metabolismo propio, igual que una célula."

explicacion: |
  Falso. No tiene ninguna de las dos cosas.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "reproduccion"]

respuesta: falso
tipo: vf

enunciado: "Un virus puede reproducirse por sí solo, sin necesitar una célula huésped."

explicacion: |
  Falso, es un parásito intracelular obligado.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "estructura"]

respuesta: "capside"
tipo: completar
respuestas_validas: ["capside"]

enunciado: "La cápsula de proteína que envuelve el material genético del virus se llama ___."

explicacion: |
  Se llama cápside.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["virus", "ciclo_viral"]

variables:
  pasos: [["adhesion", "el virus se pega a la celula huesped"], ["inyeccion", "el virus inyecta el material genetico dentro de la celula"], ["secuestro", "el virus usa la maquinaria de la celula para fabricar copias"], ["lisis", "la celula se rompe liberando los virus nuevos"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: pasos[idx][1]
tipo: mc
opciones_explicitas: ["el virus se pega a la celula huesped", "el virus inyecta el material genetico dentro de la celula", "el virus usa la maquinaria de la celula para fabricar copias", "la celula se rompe liberando los virus nuevos"]

enunciado: "¿Qué ocurre en la etapa de {pasos[idx][0]}?"

explicacion: |
  En {pasos[idx][0]}: {pasos[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["lisis"]

respuesta: verdadero
tipo: vf

enunciado: "En la etapa de lisis, la célula infectada se rompe y libera los virus nuevos."

explicacion: |
  Correcto, es la fase final de liberación de nuevos viriones.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["ribosomas"]

respuesta: falso
tipo: vf

enunciado: "El virus fabrica copias de sí mismo utilizando sus propios ribosomas."

explicacion: |
  Falso. Usa los ribosomas de la célula huésped que secuestró.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["orden", "ciclo_viral"]

respuesta: "adhesion, inyeccion, secuestro, lisis"
tipo: mc
opciones_explicitas: ["adhesion, inyeccion, secuestro, lisis", "inyeccion, adhesion, secuestro, lisis", "adhesion, secuestro, inyeccion, lisis"]

enunciado: "¿Cuál es el orden cronológico correcto del ciclo de infección viral?"

explicacion: |
  Adhesión → inyección → secuestro (replicación) → lisis (liberación).
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["sistema_inmunitario"]

respuesta: "inespecifica/innata"
tipo: mc
opciones_explicitas: ["inespecifica/innata", "especifica/adaptativa", "ninguna", "ambas por igual"]

enunciado: "La defensa que actúa contra cualquier invasor, sin importar cuál sea, se llama..."

explicacion: |
  Es la inmunidad innata: responde igual ante cualquier agente extraño.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["anticuerpos"]

respuesta: verdadero
tipo: vf

enunciado: "La defensa específica produce anticuerpos hechos a medida para un invasor particular."

explicacion: |
  Correcto, la inmunidad adaptativa genera anticuerpos específicos.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["barreras"]

respuesta: verdadero
tipo: vf

enunciado: "La piel y las mucosas son ejemplos de defensa inespecífica."

explicacion: |
  Correcto, son barreras físicas generales.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["memoria_inmunitaria"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema inmunitario 'recuerda' a un invasor después de una infección, respondiendo más rápido la segunda vez."

explicacion: |
  Correcto, es la base de la inmunidad adaptativa.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["vacunas"]

respuesta: verdadero
tipo: vf

enunciado: "Una vacuna expone al cuerpo a una versión debilitada o fragmento del patógeno, para que el sistema inmunitario aprenda a reconocerlo."

explicacion: |
  Correcto, sin causar la enfermedad real.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["defensa_inespecifica"]

respuesta: verdadero
tipo: vf

enunciado: "La fiebre es una respuesta de defensa inespecífica: el cuerpo sube su temperatura para dificultar la reproducción de muchos patógenos."

explicacion: |
  Correcto, es parte de la inmunidad innata.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["fagocitosis", "defensa_inespecifica"]

respuesta: "engullen y destruyen invasores, sin importar cuáles sean"
tipo: mc
opciones_explicitas: ["engullen y destruyen invasores, sin importar cuáles sean", "sólo atacan a un invasor específico ya conocido", "producen anticuerpos a medida", "sólo actúan en la piel"]

enunciado: "¿Qué hacen los glóbulos blancos que realizan fagocitosis, como parte de la defensa inespecífica?"

explicacion: |
  "Comen" (engullen) cualquier invasor que encuentren, sin distinguir cuál es específicamente.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "avanzado"
  tags: ["vacunas", "aplicacion"]

respuesta: falso
tipo: vf

enunciado: "Las vacunas siempre usan el patógeno completo y activo, exactamente igual al que causa la enfermedad real."

explicacion: |
  Falso. Usan una versión debilitada, inactivada, o sólo un fragmento (como una proteína de la superficie) — suficiente para que el sistema inmunitario aprenda, sin causar la enfermedad.
```

## Sección: mitosis-meiosis (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["mitosis", "division_celular"]

respuesta: verdadero
tipo: vf

enunciado: "La mitosis produce 2 células hijas idénticas a la célula original."

explicacion: |
  La mitosis asegura que ambas células resultantes tengan la misma información genética que la célula madre.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["mitosis", "crecimiento"]

respuesta: verdadero
tipo: vf

enunciado: "La mitosis es el proceso detrás del crecimiento y la reparación de tejidos en organismos pluricelulares."

explicacion: |
  Permite aumentar de tamaño y sustituir células dañadas.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["mitosis", "cromosomas"]

respuesta: falso
tipo: vf

enunciado: "Las células hijas de la mitosis tienen la mitad de cromosomas que la célula original."

explicacion: |
  Falso. Tienen el mismo número (diploide); la reducción a la mitad ocurre en la meiosis.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["mitosis", "calculo"]

variables:
  cromosomas_originales: uno_de([2, 4, 6, 8])

respuesta: cromosomas_originales
tipo: input
tolerancia_abs: 0.01

enunciado: "Si una célula original tiene {cromosomas_originales} cromosomas, ¿cuántos tendrá cada célula hija tras la mitosis?"

pasos:
  - "La mitosis mantiene la dotación cromosómica original."

explicacion: |
  Cada hija tiene {cromosomas_originales} cromosomas, igual que la original.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis", "gametos"]

respuesta: verdadero
tipo: vf

enunciado: "La meiosis produce células sexuales (gametos) como óvulos y espermatozoides."

explicacion: |
  Es el proceso especializado en producir gametos para la reproducción sexual.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis", "cromosomas"]

respuesta: verdadero
tipo: vf

enunciado: "La meiosis produce 4 células hijas con la mitad de cromosomas que la célula original."

explicacion: |
  Correcto, reduce el número a haploide (n).
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis"]

respuesta: falso
tipo: vf

enunciado: "La meiosis ocurre en casi cualquier célula del cuerpo, igual que la mitosis."

explicacion: |
  Falso. Sólo ocurre en las células germinales de los órganos reproductivos.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["meiosis", "calculo"]

variables:
  cromosomas_originales: uno_de([4, 8, 12, 16])

respuesta: cromosomas_originales / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Si una célula somática tiene {cromosomas_originales} cromosomas, ¿cuántos tendrá cada célula hija tras la meiosis?"

explicacion: |
  De diploide (2n) a haploide (n): {cromosomas_originales} / 2.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["division_celular"]

variables:
  escenario: [["mitosis", 2], ["meiosis", 4]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [2, 4]

enunciado: "¿Cuántas células hijas se obtienen al finalizar el proceso de {escenario[idx][0]}?"

explicacion: |
  La {escenario[idx][0]} produce {escenario[idx][1]} células hijas.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["genetica", "variabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Las células hijas de la mitosis son idénticas entre sí, pero las de la meiosis no (por la recombinación genética)."

explicacion: |
  La mitosis busca replicación exacta; la meiosis busca variabilidad (crossing-over).
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["celulas_somaticas"]

respuesta: "mitosis"
tipo: mc
opciones_explicitas: ["mitosis", "meiosis", "ambos por igual", "ninguno"]

enunciado: "¿Cuál de estos procesos ocurre en casi cualquier célula del cuerpo, para crecimiento y reparación?"

explicacion: |
  La mitosis es la división de las células somáticas.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["gametogenesis"]

respuesta: "meiosis"
tipo: mc
opciones_explicitas: ["meiosis", "mitosis", "ambos por igual", "ninguno"]

enunciado: "¿Cuál de estos procesos ocurre exclusivamente en órganos reproductivos, para formar gametos?"

explicacion: |
  La meiosis ocurre en las gónadas, para producir óvulos y espermatozoides.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["genetica", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si los gametos tuvieran el número completo de cromosomas (diploide), la fecundación duplicaría el número de cromosomas en cada generación."

explicacion: |
  Correcto — por eso la meiosis reduce a la mitad antes de la fecundación.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "basico"
  tags: ["meiosis"]

respuesta: verdadero
tipo: vf

enunciado: "La meiosis existe fundamentalmente para evitar que el número de cromosomas se duplique en cada nueva generación."

explicacion: |
  Correcto, mantiene constante el número cromosómico de la especie.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["fecundacion"]

respuesta: verdadero
tipo: vf

enunciado: "La fecundación (unión de dos gametos haploides) restaura el número normal (diploide) de cromosomas en el nuevo organismo."

explicacion: |
  Correcto, n + n = 2n en el organismo resultante.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["evolucion", "variacion"]

respuesta: verdadero
tipo: vf

enunciado: "La variación genética generada durante la meiosis es importante para la selección natural, porque sin variabilidad no habría rasgos sobre los que actuar."

explicacion: |
  Correcto — ver ../seleccion-natural/.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "avanzado"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Antes de dividirse (sea mitosis o meiosis), la célula primero duplica todo su material genético, para que cada célula hija tenga una copia completa."

explicacion: |
  Correcto. Sin esa duplicación previa, no habría suficiente material para repartir entre las células hijas.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "intermedio"
  tags: ["mitosis", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "En organismos unicelulares, la mitosis también sirve como forma de reproducción (cada división crea un nuevo individuo)."

explicacion: |
  Correcto, en unicelulares dividirse ES reproducirse.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "avanzado"
  tags: ["reproduccion", "comparacion"]

respuesta: "meiosis"
tipo: mc
opciones_explicitas: ["meiosis", "mitosis", "ambas por igual", "ninguna"]

enunciado: "¿Cuál de los dos procesos está asociado a la reproducción SEXUAL (con dos progenitores aportando material genético)?"

explicacion: |
  La meiosis produce los gametos que se combinan en la reproducción sexual.
```

```
metadata:
  materia: "biologia"
  tema: "mitosis_meiosis"
  nivel: "avanzado"
  tags: ["aplicacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Un error durante la mitosis que hace que las células hijas se dividan sin control (sin detenerse) puede estar relacionado con el cáncer."

explicacion: |
  Correcto. El cáncer es, en esencia, una división celular descontrolada — un fallo en los mecanismos que regulan la mitosis.
```
