# Biología — Herencia ligada al sexo (cuestionario, 20 preguntas VBLang)

> Tema: `B3` (mitad 1/2). Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué son los genes ligados al X

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

### 2 — Por qué un varón expresa el rasgo con una sola copia

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

### 3 — Rasgos recesivos ligados al X son más comunes en varones

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

### 4 — Qué es una mujer portadora

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

### 5 — Problema: probabilidad de un hijo varón afectado

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

### 6 — Problema: probabilidad de una hija afectada

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

### 7 — Problema: probabilidad de una hija portadora

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

### 8 — Condicionar sobre el sexo cambia la probabilidad

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

### 9 — Ejemplos reales de rasgos ligados al X

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

### 10 — Problema: madre afectada, todos los hijos varones afectados

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

### 11 — Problema: madre afectada, ninguna hija afectada

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

### 12 — Aplicación real: por qué el daltonismo es más común en varones

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

### 13 — Problema: probabilidad total (sin condicionar el sexo)

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

### 14 — Por qué las mujeres necesitan dos copias

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

### 15 — Problema: padre afectado, madre no portadora

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

### 16 — Problema: todas las hijas de un padre afectado son portadoras

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

### 17 — Un padre nunca transmite su X a sus hijos varones

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

### 18 — Aplicación: árbol genealógico y asesoramiento genético

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

### 19 — Problema: madre portadora, padre afectado

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

### 20 — Cierre: para qué sirve este módulo

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
