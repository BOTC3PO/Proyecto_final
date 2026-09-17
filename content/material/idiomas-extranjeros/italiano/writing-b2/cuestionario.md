# Idiomas — Italiano — writing-b2 (cuestionario)

> Promovido desde el borrador (`../../../_borradores-gemma/idiomas-extranjeros/italiano/writing-b2/cuestionario_crudo.md`)
> con correcciones extensas. Todos los bloques tenían `explicacion:` sin comillas, se
> entrecomillaron; los 23 bloques carecían de `enunciado:`, se añadió una pregunta genérica. El
> bloque 24 estaba truncado a mitad de generación en el crudo original (la explicación cortaba
> en "usan tiempos" sin cierre); se completó. Se corrigieron seis errores reales de contenido:
> dos bloques (2, 3) daban como respuesta correcta una oración que no coincidía literalmente con
> ninguna de las opciones generadas (todas tenían algún error tipográfico); se sustituyó la
> opción más redundante por la oración realmente correcta. Un bloque llamaba "gerundio" a
> "camminavo" (imperfetto indicativo; el gerundio real sería "camminando"). Otro llamaba
> "condizionale passato" a "avessi" (en realidad congiuntivo imperfetto). Un bloque sobre
> "passato remoto" marcaba como correcta la forma de passato prossimo en vez de la de passato
> remoto que el propio tema evalúa; se corrigió. Un bloque sobre el pronombre relativo "cui" con
> el verbo "parlare" (que rige la preposición "con") marcaba como correcta la forma sin "con",
> contradiciendo su propia explicación; se corrigió. Dos bloques (19, 23) tenían una opción
> duplicada; se sustituyó por un distractor genuino.

---

### 1 — Soggetto e complemento
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["soggetto", "complemento"]
pasos:
  - "Identificar el sujeto y el complemento en la oración."
  - "Verificar que ambos elementos estén correctamente relacionados."
respuesta: "Il turista ha visitato le città storiche."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Il turista visita le città storiche."
  - "Il turista ha visitato le città storiche."
  - "Il turista visitò le città storiche."
tipo: mc
explicacion: "La opción correcta es la que utiliza el pretérito perfecto compuesto (ha + participio passato) para indicar una acción concluida en el pasado. Las otras opciones usan tiempos verbales incorrectos o inapropiados según el contexto."
```

### 2 — Uso dell'imperfetto per azioni simultanee
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["gerundio", "congiunzione"]
pasos:
  - "Identificar el uso correcto del gerundio en la oración."
  - "Verificar que se use para conectar acciones simultáneas."
respuesta: "Mentre camminavo, ho visto un uccello raro."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Mentre camminavo, ho visto un uccello raro."
  - "Mentre camminavo, vidi un uccello raro."
  - "Mentre camminavo, vedo un uccello raro."
tipo: mc
explicacion: "La opción correcta combina el imperfetto (camminavo, no gerundio -- el gerundio real sería 'camminando') con el pretérito perfecto compuesto (ho visto), indicando dos acciones simultáneas en el pasado. Las otras opciones usan tiempos verbales incoherentes."
```

### 3 — Concordancia de participios
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["participio", "concordanza"]
pasos:
  - "Identificar el sujeto y el verbo en la oración."
  - "Verificar que el participio concuerde en género y número con el sujeto."
respuesta: "Le foto sono state scattate ieri."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Le foto sono state scattate ieri."
  - "La foto sono state scattate ieri."
  - "Le foto sono stato scattate ieri."
tipo: mc
explicacion: "La opción correcta usa el participio passato 'scattate' que concuerda en femenino plural con 'foto'. Las otras opciones presentan errores de concordancia."
```

### 4 — Uso del condizionale
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["condizionale", "ipotesi"]
pasos:
  - "Identificar el uso del condizionale en la oración."
  - "Verificar que se use para expresar una hipótesis o deseos irrealizados."
respuesta: "Se avessi più tempo, andrei in vacanza."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Se avrò più tempo, andrò in vacanza."
  - "Se avessi più tempo, andrò in vacanza."
  - "Se avessi più tempo, andrei in vacanza."
tipo: mc
explicacion: "La opción correcta usa el congiuntivo imperfetto (avessi, no condizionale passato) en la prótasis con 'se', combinado con el condizionale presente (andrei) en la apódosis, para expresar una hipótesis irreal. Las otras opciones usan tiempos verbales incorrectos."
```

### 5 — Uso de "piuttosto che"
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["congiunzione", "alternativa"]
pasos:
  - "Identificar el uso correcto de 'piuttosto che' en la oración."
  - "Verificar que se use para expresar una preferencia o alternativa."
respuesta: "Preferisco andare in bicicletta piuttosto che prendere l'autobus."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Preferisco andare in bicicletta piuttosto che prendo l'autobus."
  - "Preferisco andare in bicicletta piuttosto che prenderei l'autobus."
  - "Preferisco andare in bicicletta piuttosto che prendere l'autobus."
tipo: mc
explicacion: "La opción correcta usa la estructura 'piuttosto che + infinitivo' para expresar preferencia. Las otras opciones presentan errores de concordancia verbal."
```

### 6 — Uso del passato prossimo
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["passato prossimo", "ausiliare"]
pasos:
  - "Identificar el uso correcto del passato prossimo."
  - "Verificar que se use con el auxiliar adecuado (avere o essere)."
respuesta: "La ragazza è andata al cinema ieri."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "La ragazza ha andato al cinema ieri."
  - "La ragazza andò al cinema ieri."
  - "La ragazza è andata al cinema ieri."
tipo: mc
explicacion: "La opción correcta usa el auxiliar 'è' (essere) con el participio passato 'andata', ya que el verbo 'andare' requiere essere en el passato prossimo cuando se refiere a un cambio de estado."
```

### 7 — Concordancia de adjectivos
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["adjectives", "concordanza"]
pasos:
  - "Identificar el adjetivo y su sustantivo en la oración."
  - "Verificar que concuerden en género y número."
respuesta: "Le ragazze sono molto brave."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Le ragazze sono molto brava."
  - "La ragazza è molto bravi."
  - "Le ragazze sono molto brave."
tipo: mc
explicacion: "La opción correcta usa el adjetivo 'brave' que concuerda en femenino plural con 'ragazze'. Las otras opciones presentan errores de concordancia."
```

### 8 — Uso del presente di verbo impersonale
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["verbi impersonali", "presente"]
pasos:
  - "Identificar el uso del presente de verbo impersonale."
  - "Verificar que se use para expresar una acción general o universal."
respuesta: "In Italia si mangia molto bene."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "In Italia si mangiava molto bene."
  - "In Italia si mangierà molto bene."
  - "In Italia si mangia molto bene."
tipo: mc
explicacion: "La opción correcta usa el presente de verbo impersonale para expresar una acción general. Las otras opciones usan tiempos verbales incorrectos."
```

### 9 — Uso del futuro semplice
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["futuro", "verbi"]
pasos:
  - "Identificar el uso correcto del futuro semplice."
  - "Verificar que se use para expresar una acción futura o hipotética."
respuesta: "Domani andrò al parco con gli amici."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Domani andrò al parco con gli amici."
  - "Domani andavo al parco con gli amici."
  - "Domani andrai al parco con gli amici."
tipo: mc
explicacion: "La opción correcta usa el futuro semplice (andrò) para expresar una acción futura. Las otras opciones usan tiempos verbales incorrectos."
```

### 10 — Uso de "ci" e "ne"
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["pronomi", "indiretti"]
pasos:
  - "Identificar el uso correcto de 'ci' o 'ne' en la oración."
  - "Verificar que se use para sustituir un complemento preposizionale."
respuesta: "Non ne ho bisogno."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Non ci ho bisogno."
  - "Non lo ho bisogno."
  - "Non ne ho bisogno."
tipo: mc
explicacion: "La opción correcta usa 'ne' para sustituir un complemento preposizionale (de). Las otras opciones presentan errores de uso de pronombres."
```

### 11 — Uso del passato remoto
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["passato remoto", "verbi"]
pasos:
  - "Identificar el uso correcto del passato remoto."
  - "Verificar que se use para narrar eventos pasados con cierta distancia temporal."
respuesta: "Ieri mangiai una pizza molto buona."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Ieri mangiai una pizza molto buona."
  - "Ieri mangio una pizza molto buona."
  - "Ieri ho mangiato una pizza molto buona."
tipo: mc
explicacion: "La opción correcta usa el passato remoto (mangiai), el tiempo que este bloque evalúa. En el italiano hablado moderno el passato prossimo ('ho mangiato') es más frecuente para eventos recientes, pero la forma de passato remoto sigue siendo 'mangiai', no 'ho mangiato'."
```

### 12 — Uso de "cui"
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["relativo", "cui"]
pasos:
  - "Identificar el uso correcto del pronombre relativo 'cui'."
  - "Verificar que se use para referirse a un complemento preposizionale."
respuesta: "La persona con cui parlavo è andata via."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "La persona che parlavo è andata via."
  - "La persona con cui parlavo è andata via."
  - "La persona cui parlavo è andata via."
tipo: mc
explicacion: "La opción correcta usa 'cui' para referirse al complemento preposizionale 'con'. Las otras opciones presentan errores de uso del pronombre relativo."
```

### 13 — Concordancia en oraciones subordinadas
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["subordinata", "concordanza"]
pasos:
  - "Identificar el uso correcto de concordancia en oraciones subordinadas."
  - "Verificar que se use el tiempo verbal adecuado según la regla del tempo indiretto."
respuesta: "Ho sentito che lui sarebbe venuto domani."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Ho sentito che lui verrà domani."
  - "Ho sentito che lui è venuto domani."
  - "Ho sentito che lui sarebbe venuto domani."
tipo: mc
explicacion: "La opción correcta usa el condizionale (sarebbe) en la oración subordinada para expresar una acción futura desde el punto de vista del sujeto principal."
```

### 14 — Uso del participio presente
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["participio", "presente"]
pasos:
  - "Identificar el uso correcto del participio presente."
  - "Verificar que se use para formar frasi con 'avere' o 'essere'."
respuesta: "Il libro che sto leggendo è molto interessante."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Il libro che stai leggendo è molto interessante."
  - "Il libro che ho letto è molto interessante."
  - "Il libro che sto leggendo è molto interessante."
tipo: mc
explicacion: "La opción correcta usa el participio presente (leggendo) con 'sto' para expresar una acción en curso. Las otras opciones usan tiempos verbales incorrectos."
```

### 15 — Uso de "dove"
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["avverbio", "dove"]
pasos:
  - "Identificar el uso correcto del avverbio 'dove'."
  - "Verificar que se use para referirse a un lugar."
respuesta: "Dove hai messo le chiavi?"
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Dove hai messo le chiave?"
  - "Dove hai messo la chiave?"
  - "Dove hai messo le chiavi?"
tipo: mc
explicacion: "La opción correcta usa el plural 'chiavi' que concuerda con el sujeto. Las otras opciones presentan errores de concordancia."
```

### 16 — Uso del participio passato
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["participio", "passato"]
pasos:
  - "Identificar el uso correcto del participio passato."
  - "Verificar que se use con el auxiliar adecuado (avere o essere)."
respuesta: "Le lettere sono state spedite ieri."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Le lettere è stato spedite ieri."
  - "La lettera sono state spedite ieri."
  - "Le lettere sono state spedite ieri."
tipo: mc
explicacion: "La opción correcta usa el participio passato 'spedite' que concuerde en femenino plural con 'lettere'. Las otras opciones presentan errores de concordancia."
```

### 17 — Uso del futuro anteriore
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["futuro", "anteriore"]
pasos:
  - "Identificar el uso correcto del futuro anteriore."
  - "Verificar que se use para expresar una acción futura que ocurrirá antes de otra."
respuesta: "Dopo che avrò finito il lavoro, andrò a casa."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Dopo che avrò finito il lavoro, andrà a casa."
  - "Dopo che avrò finito il lavoro, andrò a casa."
  - "Dopo che avrò finito il lavoro, andrai a casa."
tipo: mc
explicacion: "La opción correcta usa el futuro anteriore (avrò finito) seguido del futuro semplice (andrò). Las otras opciones presentan errores de concordancia verbal."
```

### 18 — Uso de "si" impersonale
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["si", "impersonale"]
pasos:
  - "Identificar el uso correcto del 'si' impersonale."
  - "Verificar que se use para expresar acciones generales o universales."
respuesta: "In questa città si parla molto bene l'inglese."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "In questa città si parla molto bene l'inglese."
  - "In questa città si parlò molto bene l'inglese."
  - "In questa città si parlerà molto bene l'inglese."
tipo: mc
explicacion: "La opción correcta usa el presente del 'si' impersonale para expresar una acción general. Las otras opciones usan tiempos verbales incorrectos."
```

### 19 — Uso de "per" e "a"
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["preposizioni", "durata"]
pasos:
  - "Identificar el uso correcto de 'per' e 'a' para expresar duración."
  - "Verificar que se use 'per' para períodos y 'a' para puntos en el tiempo."
respuesta: "Sono andato in vacanza per due settimane."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Sono andato in vacanza a due settimane."
  - "Sono andato in vacanza per due settimane."
  - "Sono andato in vacanza in due settimane."
tipo: mc
explicacion: "La opción correcta usa 'per' para indicar un período de tiempo (due settimane). Las otras opciones usan preposiciones incorrectas."
```

### 20 — Concordancia en oraciones relativas
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["relativo", "concordanza"]
pasos:
  - "Identificar el uso correcto de concordancia en oraciones relativas."
  - "Verificar que se use el tiempo verbal adecuado según la regla del tempo indiretto."
respuesta: "Ho visto il ragazzo che stava leggendo un libro."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Ho visto il ragazzo che stai leggendo un libro."
  - "Ho visto il ragazzo che ha letto un libro."
  - "Ho visto il ragazzo che stava leggendo un libro."
tipo: mc
explicacion: "La opción correcta usa el imperfetto (stava) en la oración subordinada para expresar una acción simultánea al sujeto principal."
```

### 21 — Uso del presente di verbo impersonale
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["verbi", "impersonale"]
pasos:
  - "Identificar el uso correcto del presente de verbo impersonale."
  - "Verificar que se use para expresar una acción general o universal."
respuesta: "In questa regione si mangia molto bene."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "In questa regione si mangiava molto bene."
  - "In questa regione si mangierà molto bene."
  - "In questa regione si mangia molto bene."
tipo: mc
explicacion: "La opción correcta usa el presente del verbo impersonale para expresar una acción general. Las otras opciones usan tiempos verbales incorrectos."
```

### 22 — Uso de "ci" e "ne"
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["pronomi", "indiretti"]
pasos:
  - "Identificar el uso correcto de 'ci' o 'ne' en la oración."
  - "Verificar que se use para sustituir un complemento preposizionale."
respuesta: "Non ne ho bisogno."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Non ci ho bisogno."
  - "Non lo ho bisogno."
  - "Non ne ho bisogno."
tipo: mc
explicacion: "La opción correcta usa 'ne' para sustituir un complemento preposizionale (di). Las otras opciones presentan errores de uso de pronombres."
```

### 23 — Uso del passato prossimo con "avere"
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["passato prossimo", "avere"]
pasos:
  - "Identificar el uso correcto del passato prossimo con 'avere'."
  - "Verificar que se use para acciones concluidas en el pasado."
respuesta: "Ho comprato un regalo per il compleanno."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Ho compri un regalo per il compleanno."
  - "Ho comprato un regalo per il compleanno."
  - "Ho comprando un regalo per il compleanno."
tipo: mc
explicacion: "La opción correcta usa el participio passato 'comprato' con el auxiliar 'ho' para formar el passato prossimo. Las otras opciones presentan errores de concordancia."
```

### 24 — Uso del condizionale passato
```yaml
metadata:
  materia: "idiomas-extranjeros/italiano"
  tema: "writing-b2"
  nivel: "B2"
  tags: ["condizionale", "passato"]
pasos:
  - "Identificar el uso correcto del condizionale passato."
  - "Verificar que se use para expresar deseos o hipótesis irrealizadas en el pasado."
respuesta: "Se fossi stato più attento, non avresti commesso l'errore."
enunciado: "¿Cuál es la oración correcta?"
opciones_explicitas:
  - "Se fossi stato più attento, non commetti l'errore."
  - "Se fossi stato più attento, non hai commesso l'errore."
  - "Se fossi stato più attento, non avresti commesso l'errore."
tipo: mc
explicacion: "La opción correcta usa el condizionale passato (avresti commesso) para expresar una hipótesis irreal en el pasado. Las otras opciones usan tiempos verbales que no corresponden a la apódosis de un período hipotético irreal."
```
