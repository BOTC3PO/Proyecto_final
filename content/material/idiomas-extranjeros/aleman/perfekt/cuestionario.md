# Idiomas — Alemán — perfekt (cuestionario)

> Promovido desde el borrador (`../../../_borradores-gemma/idiomas-extranjeros/aleman/perfekt/cuestionario_crudo.md`)
> con correcciones extensas: el crudo tenía un fence vacío suelto al inicio del archivo y, tras
> cada uno de los 9 primeros bloques, un par adicional de fences vacíos ` ``` ` ` ``` ` sin
> contenido, lo que inflaba el conteo real de 25 preguntas a 36 "bloques" para el validador; se
> eliminaron. Los campos `respuestas_validas:`/`opciones_explicitas:` usaban listas en línea
> (`["a", "b"]`), formato no soportado por el parser, y se convirtieron a listas indentadas; se
> quitó también el campo opcional `variables: []` vacío, que causaba el mismo error de parseo.
> Catorce bloques (10, 12, 14-25) carecían por completo de `enunciado:`, se redactó una oración
> para cada uno. Se corrigieron además dos errores reales de contenido: dos bloques (15, 21)
> dabas "ist" como respuesta para el verbo "essen", que no indica movimiento ni cambio de estado
> y por tanto usa el auxiliar "haben", no "sein" — se corrigió a "hat"; y dos bloques (17, 23)
> declaraban la respuesta "hat" (tercera persona) pero la explicación mencionaba erróneamente el
> sujeto "Ich" (primera persona, que requeriría "habe") — se corrigió el enunciado para usar un
> sujeto de tercera persona coherente con la respuesta.

---

### 1 — Bilden Sie das Perfekt  
```
metadata:  
  materia: "idiomas-extranjeros/aleman"  
  tema: "perfekt"  
  nivel: "A1"  
  tags: ["haben", "gehen"]  
pasos:  
  - "Identifique la forma correcta del verbo en Perfekt."  
explicacion: "El Perfekt se construye con el auxiliar 'haben' o 'sein' + participio pasado. El verbo 'gehen' usa 'sein', por lo que la forma correcta es 'bin gegangen'."  
tipo: completar  
enunciado: "Ich ___ gegangen."  
respuestas_validas:
  - "bin"
  - "Bin"  
```  

### 2 — Wählen Sie die richtige Form  
```
metadata:  
  materia: "idiomas-extranjeros/aleman"  
  tema: "perfekt"  
  nivel: "A1"  
  tags: ["haben", "schreiben"]  
pasos:  
  - "Elija la opción que completa correctamente la oración."  
explicacion: "El verbo 'schreiben' usa el auxiliar 'haben', por lo que la forma correcta es 'habe geschrieben'."  
tipo: mc  
enunciado: "Er ___ einen Brief geschrieben."  
opciones_explicitas:
  - "hat"
  - "ist"
  - "wird"  
respuesta: "hat"  
```  

### 3 — Füllen Sie den Lücke aus  
```
metadata:  
  materia: "idiomas-extranjeros/aleman"  
  tema: "perfekt"  
  nivel: "A2"  
  tags: ["sein", "kommen"]  
pasos:  
  - "Complete el espacio con la forma correcta del auxiliar."  
explicacion: "El verbo 'kommen' requiere el auxiliar 'sein', por lo que la forma correcta es 'bin gekommen'."  
tipo: completar  
enunciado: "Sie ___ gestern gekommen."  
respuestas_validas:
  - "sind"
  - "Sind"  
```  

### 4 — Entscheiden Sie die richtige Antwort  
```
metadata:  
  materia: "idiomas-extranjeros/aleman"  
  tema: "perfekt"  
  nivel: "A1"  
  tags: ["haben", "machen"]  
pasos:  
  - "Elija la opción que completa correctamente la oración."  
explicacion: "'Machen' usa 'haben', por lo que la forma correcta es 'habe gemacht'."  
tipo: mc  
enunciado: "Wir ___ die Aufgabe gemacht."  
opciones_explicitas:
  - "haben"
  - "sind"
  - "werden"  
respuesta: "haben"  
```  

### 5 — Bilden Sie das Perfekt  
```
metadata:  
  materia: "idiomas-extranjeros/aleman"  
  tema: "perfekt"  
  nivel: "A1"  
  tags: ["sein", "fahren"]  
pasos:  
  - "Complete el espacio con la forma correcta del auxiliar."  
explicacion: "'Fahren' requiere 'sein', por lo que la forma es 'bin gefahren'."  
tipo: completar  
enunciado: "Ich ___ gestern gefahren."  
respuestas_validas:
  - "bin"
  - "Bin"  
```  

### 6 — Wählen Sie die richtige Form  
```
metadata:  
  materia: "idiomas-extranjeros/aleman"  
  tema: "perfekt"  
  nivel: "A2"  
  tags: ["haben", "essen"]  
pasos:  
  - "Elija la opción que completa correctamente la oración."  
explicacion: "'Essen' usa 'haben', por lo que la forma correcta es 'habe gegessen'."  
tipo: mc  
enunciado: "Er ___ heute Mittag gegessen."  
opciones_explicitas:
  - "hat"
  - "ist"
  - "wird"  
respuesta: "hat"  
```  

### 7 — Füllen Sie den Lücke aus  
```
metadata:  
  materia: "idiomas-extranjeros/aleman"  
  tema: "perfekt"  
  nivel: "A1"  
  tags: ["sein", "gehen"]  
pasos:  
  - "Complete el espacio con la forma correcta del auxiliar."  
explicacion: "'Gehen' requiere 'sein', por lo que la forma es 'bin gegangen'."  
tipo: completar  
enunciado: "Du ___ ins Kino gegangen."  
respuestas_validas:
  - "bist"
  - "Bist"  
```  

### 8 — Entscheiden Sie die richtige Antwort  
```
metadata:  
  materia: "idiomas-extranjeros/aleman"  
  tema: "perfekt"  
  nivel: "A1"  
  tags: ["haben", "trinken"]  
pasos:  
  - "Elija la opción que completa correctamente la oración."  
explicacion: "'Trinken' usa 'haben', por lo que la forma correcta es 'habe getrunken'."  
tipo: mc  
enunciado: "Sie ___ Wasser getrunken."  
opciones_explicitas:
  - "hat"
  - "ist"
  - "wird"  
respuesta: "hat"  
```  

### 9 — Bilden Sie das Perfekt  
```
metadata:  
  materia: "idiomas-extranjeros/aleman"  
  tema: "perfekt"  
  nivel: "A2"  
  tags: ["sein", "kommen"]  
pasos:  
  - "Complete el espacio con la forma correcta del auxiliar."  
explicacion: "'Kommen' requiere 'sein', por lo que la forma es 'sind gekommen'."  
tipo: completar  
enunciado: "Wir ___ gestern gekommen."  
respuestas_validas:
  - "sind"
  - "Sind"  
```  

### 10 — Wählen Sie die richtige Form  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A1"
  tags: ["haben", "schreiben"]
pasos:
  - "Identificar el verbo principal y su partícipe pasado."
  - "Elegir la forma correcta del auxiliar 'haben' según el sujeto."
respuesta: "hat"
opciones_explicitas:
  - "hat"
  - "habe"
  - "hatte"
tipo: mc
enunciado: "Er ___ eine E-Mail geschrieben."
explicacion: "El verbo principal es 'geschrieben', que requiere el auxiliar 'haben'. El sujeto 'Er' usa la tercera persona singular, por lo que se usa 'hat'."
```

### 11 — Füllen Sie den Lücke aus  
```
metadata:  
  materia: "idiomas-extranjeros/aleman"  
  tema: "perfekt"  
  nivel: "A2"  
  tags: ["sein", "fahren"]  
pasos:  
  - "Complete el espacio con la forma correcta del auxiliar."  
explicacion: "'Fahren' requiere 'sein', por lo que la forma es 'sind gefahren'."  
tipo: completar  
enunciado: "Sie ___ ins Restaurant gefahren."  
respuestas_validas:
  - "sind"
  - "Sind"  
```  

### 12 — Entscheiden Sie die richtige Antwort  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A1"
  tags: ["sein", "fahren"]
pasos:
  - "Identificar si el verbo indica movimiento o cambio de estado."
  - "Usar 'sein' como auxiliar en este caso."
respuesta: "ist"
opciones_explicitas:
  - "ist"
  - "haben"
  - "seit"
tipo: mc
enunciado: "Sie ___ mit dem Auto gefahren."
explicacion: "El verbo 'fahren' indica movimiento, por lo que se usa 'sein' como auxiliar. El sujeto 'Sie' requiere la tercera persona singular, 'ist'."
```

### 13 — Bilden Sie das Perfekt  
```
metadata:  
  materia: "idiomas-extranjeros/aleman"  
  tema: "perfekt"  
  nivel: "A1"  
  tags: ["sein", "gehen"]  
pasos:  
  - "Complete el espacio con la forma correcta del auxiliar."  
explicacion: "'Gehen' requiere 'sein', por lo que la forma es 'ist gegangen'."  
tipo: completar  
enunciado: "Er ___ ins Kino gegangen."  
respuestas_validas:
  - "ist"
  - "Ist"  
```  

### 14 — Wählen Sie die richtige Form  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A2"
  tags: ["gestern", "haben"]
pasos:
  - "Identificar el verbo principal y su partícipe pasado."
  - "Elegir la forma correcta del auxiliar 'haben' según el tiempo 'gestern'."
respuestas_validas:
  - "habe"
  - "Habe"
tipo: completar
enunciado: "Ich ___ gestern lange gearbeitet."
explicacion: "El sujeto 'Ich' usa la primera persona singular, por lo que el auxiliar es 'habe'. El tiempo 'gestern' no cambia la forma del auxiliar."
```

### 15 — Füllen Sie den Lücke aus  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A1"
  tags: ["sein", "essen"]
pasos:
  - "Determinar si el verbo requiere 'haben' o 'sein'."
  - "Elegir la forma correcta del auxiliar según el sujeto."
respuesta: "hat"
opciones_explicitas:
  - "ist"
  - "hat"
  - "seit"
tipo: mc
enunciado: "Sie ___ einen Apfel gegessen."
explicacion: "'Essen' no indica movimiento ni cambio de estado, por lo que usa 'haben', no 'sein'. El sujeto 'Sie' en tercera persona singular usa 'hat'."
```

### 16 — Entscheiden Sie die richtige Antwort  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A1"
  tags: ["haben", "machen"]
pasos:
  - "Identificar el verbo principal y su partícipe pasado."
  - "Elegir la forma correcta del auxiliar 'haben'."
respuestas_validas:
  - "hat"
  - "Hat"
tipo: completar
enunciado: "Er ___ die Hausaufgaben gemacht."
explicacion: "El verbo 'gemacht' (hecho) requiere el auxiliar 'haben'. El sujeto 'Er' usa la tercera persona singular, por lo que se escribe 'hat'."
```

### 17 — Bilden Sie das Perfekt  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A2"
  tags: ["vor einer Stunde", "haben"]
pasos:
  - "Identificar el verbo principal y su partícipe pasado."
  - "Elegir la forma correcta del auxiliar 'haben' según el tiempo."
respuesta: "hat"
opciones_explicitas:
  - "hat"
  - "habe"
  - "hatte"
tipo: mc
enunciado: "Er ___ vor einer Stunde ein Buch gelesen."
explicacion: "El sujeto 'Er' requiere la tercera persona singular, por lo que se usa 'hat'. El tiempo 'vor einer Stunde' no afecta la forma del auxiliar."
```

### 18 — Wählen Sie die richtige Form  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A1"
  tags: ["sein", "gehen"]
pasos:
  - "Identificar si el verbo requiere 'haben' o 'sein'."
  - "Elegir la forma correcta del auxiliar según el sujeto."
respuestas_validas:
  - "ist"
  - "Ist"
tipo: completar
enunciado: "Er ___ nach Hause gegangen."
explicacion: "El verbo 'gegangen' (ido) requiere 'sein'. El sujeto está en tercera persona del singular, por lo que se usa 'ist'."
```

### 19 — Füllen Sie den Lücke aus  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A2"
  tags: ["haben", "schreiben"]
pasos:
  - "Identificar el verbo principal y su partícipe pasado."
  - "Elegir la forma correcta del auxiliar 'haben' según el sujeto."
respuesta: "hat"
opciones_explicitas:
  - "hat"
  - "habe"
  - "hatte"
tipo: mc
enunciado: "Er ___ einen Roman geschrieben."
explicacion: "El verbo 'geschrieben' (escrito) requiere 'haben'. El sujeto 'Er' usa la tercera persona singular, por lo que se escribe 'hat'."
```

### 20 — Entscheiden Sie die richtige Antwort  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A1"
  tags: ["gestern", "haben"]
pasos:
  - "Identificar el verbo principal y su partícipe pasado."
  - "Elegir la forma correcta del auxiliar 'haben' según el tiempo."
respuestas_validas:
  - "habe"
  - "Habe"
tipo: completar
enunciado: "Ich ___ gestern das Auto repariert."
explicacion: "El sujeto 'Ich' requiere la primera persona singular, por lo que se usa 'habe'. El tiempo 'gestern' no cambia la forma del auxiliar."
```

### 21 — Bilden Sie das Perfekt  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A2"
  tags: ["sein", "essen"]
pasos:
  - "Determinar si el verbo requiere 'haben' o 'sein'."
  - "Elegir la forma correcta del auxiliar según el sujeto."
respuesta: "hat"
opciones_explicitas:
  - "ist"
  - "hat"
  - "seit"
tipo: mc
enunciado: "Sie ___ eine Suppe gegessen."
explicacion: "'Essen' no indica movimiento ni cambio de estado, por lo que usa 'haben', no 'sein'. El sujeto 'Sie' en tercera persona singular usa 'hat'."
```

### 22 — Wählen Sie die richtige Form  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A1"
  tags: ["haben", "machen"]
pasos:
  - "Identificar el verbo principal y su partícipe pasado."
  - "Elegir la forma correcta del auxiliar 'haben' según el tiempo."
respuestas_validas:
  - "hat"
  - "Hat"
tipo: completar
enunciado: "Er ___ das Essen gemacht."
explicacion: "El verbo 'gemacht' (hecho) requiere 'haben'. El sujeto 'Er' usa la tercera persona singular, por lo que se escribe 'hat'."
```

### 23 — Füllen Sie den Lücke aus  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A2"
  tags: ["vor einer Stunde", "haben"]
pasos:
  - "Identificar el verbo principal y su partícipe pasado."
  - "Elegir la forma correcta del auxiliar 'haben' según el tiempo."
respuesta: "hat"
opciones_explicitas:
  - "hat"
  - "habe"
  - "hatte"
tipo: mc
enunciado: "Er ___ vor einer Stunde angerufen."
explicacion: "El sujeto 'Er' requiere la tercera persona singular, por lo que se usa 'hat'. El tiempo 'vor einer Stunde' no afecta la forma del auxiliar."
```

### 24 — Entscheiden Sie die richtige Antwort  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A1"
  tags: ["sein", "gehen"]
pasos:
  - "Identificar si el verbo requiere 'haben' o 'sein'."
  - "Elegir la forma correcta del auxiliar según el sujeto."
respuestas_validas:
  - "ist"
  - "Ist"
tipo: completar
enunciado: "Sie ___ nach Hause gegangen."
explicacion: "El verbo 'gegangen' (ido) requiere 'sein'. El sujeto está en tercera persona del singular, por lo que se usa 'ist'."
```

### 25 — Bilden Sie das Perfekt  
```yaml
metadata:
  materia: "alemán"
  tema: "Perfekt"
  nivel: "A2"
  tags: ["haben", "schreiben"]
pasos:
  - "Identificar el verbo principal y su partícipe pasado."
  - "Elegir la forma correcta del auxiliar 'haben' según el sujeto."
respuesta: "hat"
opciones_explicitas:
  - "hat"
  - "habe"
  - "hatte"
tipo: mc
enunciado: "Er ___ eine Postkarte geschrieben."
explicacion: "El verbo 'geschrieben' (escrito) requiere 'haben'. El sujeto 'Er' usa la tercera persona singular, por lo que se escribe 'hat'."
```
