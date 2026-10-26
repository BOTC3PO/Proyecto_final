# Lengua — subordinada sustantiva de complemento circunstancial (cuestionario, 22 preguntas VBLang)

> Tema: `lengua/subordinada-sustantiva-de-complemento-circunstancial`. Ver `teoria.md` en esta misma carpeta. Reescrito 2026-09-07: el crudo generado con qwen/qwen3.6-35b-a3b (y sus 25 preguntas) nunca testeaban la función de Complemento Circunstancial (CC) que da nombre al tema — solo sujeto/CD/atributo/CR — y dos preguntas tenían razonamiento del modelo filtrado en la explicación. Cada pregunta validada con parse+lint+compile+generate real de packages/vblang.

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["definicion", "sustitucion"]

variables:
  op_a: "por un adverbio simple, como 'entonces'"
  op_b: "por una preposición más un pronombre demostrativo, como 'por eso'"
  op_c: "por el pronombre 'lo' sin preposición"
  op_d: "por otro sustantivo cualquiera"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "Una subordinada sustantiva de complemento circunstancial (de causa, finalidad, condición o concesión) se reconoce porque puede sustituirse..."

explicacion: |
  Se sustituye por "preposición + eso/ello" ('por eso', 'para eso', 'a pesar de eso'), no por un adverbio simple. Esa sustitución nominal es la prueba de que, aunque cumpla un papel circunstancial, es sintácticamente una sustantiva.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["causa", "sustitucion"]

variables:
  causa: uno_de(["comió mal", "no durmió bien", "tomó frío"])

respuesta: "por eso"
tipo: completar

enunciado: "'Se enfermó porque {causa}' se puede parafrasear como 'Se enfermó ___'."

explicacion: |
  La subordinada de causa se sustituye por 'por eso', confirmando que es una sustantiva de CC de causa, no un adverbio.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["finalidad", "sustitucion"]

variables:
  objetivo: uno_de(["aprobaran todos", "nadie se quejara", "el equipo mejorara"])

respuesta: "para eso"
tipo: completar

enunciado: "'El profesor explicó de nuevo para que {objetivo}' se puede parafrasear como 'El profesor explicó de nuevo ___'."

explicacion: |
  La subordinada de finalidad se sustituye por 'para eso'. Esa sustitución con preposición + pronombre demostrativo (no un adverbio) revela su naturaleza sustantiva.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["distincion", "regimen"]

variables:
  op_a: "La preposición del CC tiene un significado circunstancial propio (causa, fin); la del CR es una exigencia arbitraria del verbo, sin ese significado."
  op_b: "No hay ninguna diferencia real entre CC y CR."
  op_c: "El CR siempre lleva la preposición 'para' y el CC siempre 'de'."
  op_d: "El CC nunca lleva preposición y el CR siempre sí."

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cuál es la diferencia real entre una subordinada sustantiva de CC y una de complemento de régimen (CR)?"

explicacion: |
  En el CR ('insisto EN que vayas', 'me arrepiento DE haber mentido') la preposición es una exigencia fija del verbo, sin aportar significado circunstancial. En el CC ('lo hizo POR que lo despidieran') la preposición sí expresa una circunstancia real (causa, fin, etc.).
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["regimen", "identificacion"]

variables:
  verbo_regimen: uno_de(["Insisto en", "Confío en", "Me arrepiento de"])
  subordinada: uno_de(["que vayas", "que ganes", "haber mentido"])

respuesta: falso
tipo: vf

enunciado: "En '{verbo_regimen} {subordinada}', la preposición aporta un significado circunstancial de causa o finalidad, por lo que es una subordinada sustantiva de CC."

explicacion: |
  Falso. Verbos como 'insistir en', 'confiar en' o 'arrepentirse de' exigen esa preposición de forma fija, sin que aporte significado circunstancial: es un complemento de régimen (CR), no un CC.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["condicion", "identificacion"]

variables:
  condicion: uno_de(["me invitan", "hay lugar", "llueve"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Vendré si {condicion}', la subordinada 'si {condicion}' puede analizarse como una sustantiva en función de complemento circunstancial de condición."

explicacion: |
  Correcto. La gramática moderna reanaliza las tradicionales 'adverbiales de condición' como sustantivas de CC de condición, ya que no se sustituyen por un adverbio simple sino por una expresión equivalente a 'en ese caso'.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["concesion", "sustitucion"]

variables:
  obstaculo: uno_de(["llueva", "haga frío", "esté cansado"])

respuesta: "a pesar de eso"
tipo: completar

enunciado: "'Iremos al partido aunque {obstaculo}' se puede parafrasear como 'Iremos al partido ___'."

explicacion: |
  La subordinada de concesión se sustituye por 'a pesar de eso', mostrando que se comporta como una sustantiva con preposición, no como un adverbio simple.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["distincion", "adverbial_genuina"]

variables:
  lugar: uno_de(["nació", "vivió de chico", "estudió"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Volvió a donde {lugar}', la subordinada se sustituye por un adverbio simple ('allí'), por lo que es una adverbial de lugar genuina y NO una sustantiva de CC."

explicacion: |
  Correcto. 'Volvió allí' funciona con un adverbio simple, sin necesidad de preposición + pronombre demostrativo. Eso la distingue de las sustantivas de CC de causa/fin/condición/concesión.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "avanzado"
  tags: ["causa", "prueba"]

variables:
  causa: uno_de(["se cortó la luz", "hubo una huelga", "llovió mucho"])

respuesta: falso
tipo: vf

enunciado: "En 'No pudimos entrar porque {causa}', la subordinada 'porque {causa}' se sustituye mejor por el adverbio 'entonces' que por 'por eso'."

explicacion: |
  Falso. Se sustituye naturalmente por 'por eso' ('No pudimos entrar por eso'), no por 'entonces'. Esa sustitución con preposición + pronombre es justamente la prueba de que es una subordinada sustantiva, no una adverbial genuina.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["finalidad", "identificacion"]

variables:
  op_a: "Causa"
  op_b: "Finalidad"
  op_c: "Condición"
  op_d: "Concesión"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "En 'Bajaron los impuestos para que bajara la inflación', ¿qué tipo de circunstancia expresa la subordinada sustantiva de CC?"

explicacion: |
  Expresa finalidad: el propósito de bajar los impuestos era que bajara la inflación. Se sustituye por 'para eso'.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "avanzado"
  tags: ["regimen_vs_cc", "identificacion"]

variables:
  frase: uno_de(["Confío en que ganes", "Insisto en que vengas"])

respuesta: falso
tipo: vf

enunciado: "En '{frase}', la preposición que acompaña a 'que' expresa una circunstancia de causa o finalidad (CC), y no una exigencia fija del verbo (CR)."

explicacion: |
  Falso. 'Confiar en' e 'insistir en' rigen la preposición 'en' de forma fija y arbitraria, sin significado circunstancial propio: es complemento de régimen (CR), no CC.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["repaso", "funciones"]

variables:
  op_a: "Sujeto, complemento directo, atributo y complemento de régimen."
  op_b: "Solo complemento directo."
  op_c: "Solo sujeto y atributo."
  op_d: "Ninguna otra función; el CC es la única posible."

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "Además de complemento circunstancial, ¿qué otras funciones puede cumplir una subordinada sustantiva?"

explicacion: |
  Puede ser sujeto ('Que llueva molesta'), complemento directo ('Quiero que vengas'), atributo ('El problema es que no hay tiempo') o complemento de régimen ('Me arrepiento de haber mentido'), además de CC.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["condicion", "sustitucion"]

variables:
  condicion: uno_de(["estudias", "practicás todos los días", "pedís ayuda"])

respuesta: "en ese caso"
tipo: completar

enunciado: "'Aprobarás si {condicion}' se puede parafrasear como 'Aprobarás ___'."

explicacion: |
  La subordinada condicional se parafrasea como 'en ese caso', una expresión nominal (preposición + pronombre), coherente con su análisis como sustantiva de CC de condición.
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "avanzado"
  tags: ["distincion", "adverbial_genuina"]

variables:
  modo: uno_de(["mejor pudo", "quiso", "le pareció correcto"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Lo hizo como {modo}', la subordinada se sustituye por el adverbio 'así', por lo que es una adverbial de modo genuina, distinta de las sustantivas de CC vistas en este tema."

explicacion: |
  Correcto. 'Lo hizo así' usa un adverbio simple. Esto la distingue de las subordinadas de causa/finalidad/condición/concesión, que se sustituyen por preposición + pronombre ('por eso', 'para eso').
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["concesion", "identificacion"]

variables:
  obstaculo: uno_de(["el equipo estaba cansado", "el clima era malo", "faltaba tiempo"])

respuesta: verdadero
tipo: vf

enunciado: "En 'El técnico cambió la formación aunque {obstaculo}', la subordinada concesiva puede analizarse como sustantiva de CC, sustituible por 'a pesar de eso'."

explicacion: |
  Correcto. Es sustituible por 'a pesar de eso' (preposición + pronombre), lo que confirma su naturaleza sustantiva pese a expresar una circunstancia (concesión).
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["causa", "identificacion"]

variables:
  op_a: "Causa"
  op_b: "Lugar"
  op_c: "Sujeto"
  op_d: "Complemento directo"

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "En 'No fuimos a la cancha porque se suspendió el partido', ¿qué tipo de circunstancia expresa la subordinada?"

explicacion: |
  Expresa causa ('se sustituye por 'por eso''). Es una subordinada sustantiva de CC de causa.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "avanzado"
  tags: ["regimen", "prueba"]

variables:
  verbo: uno_de(["insistir", "confiar", "arrepentirse"])

respuesta: falso
tipo: vf

enunciado: "El verbo '{verbo}' exige una preposición que aporta un significado circunstancial (causa, finalidad, etc.), por lo que su complemento es un CC."

explicacion: |
  Falso. Estos verbos exigen su preposición ('en' o 'de') de forma arbitraria, sin significado circunstancial propio: su complemento es de régimen (CR), no CC.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["repaso", "distincion"]

variables:
  op_a: "Se sustituye por preposición + 'eso' (CC de causa/fin/condición/concesión) o por adverbio simple (adverbial genuina de tiempo/lugar/modo)."
  op_b: "Ambas se sustituyen siempre por 'lo', sin diferencia posible."
  op_c: "La adverbial genuina siempre lleva 'que' y la sustantiva de CC nunca."
  op_d: "No existe ninguna diferencia entre ambas categorías."

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cómo se distingue una subordinada sustantiva de CC de una adverbial genuina (de tiempo, lugar o modo)?"

explicacion: |
  La prueba de sustitución es la clave: la sustantiva de CC se reemplaza por preposición + 'eso' ('por eso', 'para eso'); la adverbial genuina se reemplaza por un adverbio simple ('entonces', 'allí', 'así').
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["finalidad", "sustitucion"]

variables:
  fin: uno_de(["nadie se lastimara", "todos entendieran", "el proyecto avanzara"])

respuesta: falso
tipo: vf

enunciado: "En 'Organizó todo para que {fin}', la subordinada se sustituye mejor por el adverbio 'así' que por 'para eso'."

explicacion: |
  Falso. Se sustituye naturalmente por 'para eso', no por 'así'. Esa sustitución nominal confirma que es sustantiva de CC de finalidad.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "avanzado"
  tags: ["sintesis", "clasificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Las subordinadas de causa, finalidad, condición y concesión comparten el rasgo de sustituirse por una preposición más un pronombre demostrativo, lo que justifica analizarlas como sustantivas de complemento circunstancial."

explicacion: |
  Correcto. 'Por eso' (causa), 'para eso' (finalidad), 'en ese caso' (condición) y 'a pesar de eso' (concesión) son todas construcciones nominales, no adverbios simples — de ahí su clasificación como sustantivas de CC.
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "intermedio"
  tags: ["regimen", "distincion"]

variables:
  verbo_cr: uno_de(["Me arrepiento de", "Confío en", "Insisto en"])

respuesta: "complemento de régimen"
tipo: completar

enunciado: "'{verbo_cr} que vengas' — la parte introducida por la preposición funciona como:"

explicacion: |
  Es complemento de régimen (CR): la preposición es exigida arbitrariamente por el verbo, sin aportar un significado circunstancial de causa, fin, condición o concesión.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "subordinada_sustantiva_de_complemento_circunstancial"
  nivel: "basico"
  tags: ["condicion", "clasificacion"]

variables:
  op_a: "Complemento circunstancial de condición"
  op_b: "Complemento directo"
  op_c: "Sujeto"
  op_d: "Complemento de régimen"

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "En 'Aprobarás si estudiás', ¿qué función cumple la subordinada 'si estudiás', según el análisis moderno?"

explicacion: |
  Cumple la función de complemento circunstancial de condición: se parafrasea como 'en ese caso', una construcción nominal.
```
