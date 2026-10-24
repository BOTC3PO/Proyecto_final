# Lengua — Debate: refutar en vivo (cuestionario, 20 preguntas VBLang)

> Tema: `COM2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Refutar en vivo aplica detectar falacias bajo presión de tiempo

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["debate", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Refutar en vivo exige reconocer errores de razonamiento, igual que en detectar-falacias, pero sin tiempo para revisar y corregir como en un texto escrito."

pasos:
  - "Ver `../detectar-falacias/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito de Lengua.
```

### 2 — Identificar la etapa de apertura de un debate

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["estructura_del_debate", "apertura"]

variables:
  n: uno_de([1, 1])

respuesta: "apertura"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que cada parte presenta su tesis y sus argumentos principales se llama..."

pasos:
  - "Es la primera etapa de la estructura básica de un debate formal."

explicacion: |
  La apertura presenta la postura inicial de cada parte.
```

### 3 — Identificar la etapa de refutación

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["estructura_del_debate", "refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: "refutación"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que cada parte responde a los argumentos de la otra, señalando falacias o premisas débiles, se llama..."

pasos:
  - "Es la etapa central del debate, donde se aplica directamente el vocabulario de falacias."

explicacion: |
  La refutación es el momento de responder críticamente a los
  argumentos del rival.
```

### 4 — Identificar la etapa de réplica

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["estructura_del_debate", "replica"]

variables:
  n: uno_de([1, 1])

respuesta: "réplica"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que se responde a la refutación recibida se llama..."

pasos:
  - "Sigue a la refutación, cerrando el intercambio directo de argumentos."

explicacion: |
  La réplica responde a la refutación que se recibió previamente.
```

### 5 — Identificar el cierre de un debate

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["estructura_del_debate", "cierre"]

variables:
  n: uno_de([1, 1])

respuesta: "cierre"
tipo: mc
opciones_explicitas: ["apertura", "refutación", "réplica", "cierre"]

enunciado: "La etapa del debate en la que cada parte resume su postura y por qué resiste la refutación del rival se llama..."

pasos:
  - "Es la última etapa de la estructura básica del debate."

explicacion: |
  El cierre resume la postura final de cada parte del debate.
```

### 6 — Orden de las etapas del debate

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["estructura_del_debate", "orden"]

enunciado: "Ordená las cuatro etapas básicas de un debate formal."
tipo: ordenar
opciones_explicitas:
  - "Apertura"
  - "Refutación"
  - "Réplica"
  - "Cierre"
respuesta_orden: ["Apertura", "Refutación", "Réplica", "Cierre"]
explicacion: |
  El orden sigue la secuencia lógica del debate: presentar, refutar,
  replicar y cerrar.
```

### 7 — Señalar la falacia por su nombre

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["tecnicas_de_refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Nombrar con precisión la falacia del rival (\"eso es un ataque a la persona, no una respuesta a mi argumento\") es más contundente que decir vagamente \"eso no tiene sentido\"."

pasos:
  - "Ver `../detectar-falacias/`: nombrar el error con precisión demuestra dominio del vocabulario técnico."

explicacion: |
  Verdadero: es una de las técnicas de refutación en vivo más
  efectivas descritas en la teoría.
```

### 8 — Pedir evidencia concreta en el momento

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["tecnicas_de_refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el rival da una cifra o un dato sin fuente, pedirla en el momento pone en evidencia la debilidad del argumento."

pasos:
  - "Es la misma lógica de cifras sin sustento ya vista en `../detectar-falacias/`, aplicada en vivo."

explicacion: |
  Verdadero: es otra de las técnicas de refutación descritas en la
  teoría.
```

### 9 — Distinguir la parte válida de la débil de un argumento

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["tecnicas_de_refutacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Señalar específicamente cuál parte de un argumento es floja (en vez de descartar todo el argumento en bloque) es más preciso y más difícil de rebatir para el rival."

pasos:
  - "Un argumento del rival puede tener una parte razonable y otra débil al mismo tiempo."

explicacion: |
  Verdadero: es la técnica más sofisticada de refutación descrita en
  la teoría.
```

### 10 — Escuchar activamente, no sólo esperar el turno

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["escucha_activa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un error común en un debate es preparar la respuesta propia mientras el rival todavía está hablando, sin escuchar realmente lo que dice."

pasos:
  - "Eso lleva a responder a un argumento distinto del que realmente se hizo."

explicacion: |
  Verdadero: es el error central que describe la falta de escucha
  activa en un debate.
```

### 11 — Responder a un argumento distorsionado es una forma de espantapájaros

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["escucha_activa", "espantapajaros"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "No escuchar activamente al rival y responder a una versión imaginada de su argumento es, en la práctica, una forma involuntaria de la falacia del espantapájaros."

pasos:
  - "Ver `../detectar-falacias/`: es la misma falacia, ahora aplicada de forma no intencional por falta de atención."

explicacion: |
  Verdadero: es la conexión directa entre la falta de escucha activa
  y una falacia ya conocida.
```

### 12 — Escuchar activamente permite refutar el argumento real

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["escucha_activa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escuchar activamente es lo que permite refutar el argumento real del rival, no una versión distorsionada o imaginada de él."

pasos:
  - "Es la razón concreta por la que la escucha activa es central en un debate en vivo."

explicacion: |
  Verdadero: es la conclusión práctica de por qué la escucha activa
  importa tanto en este contexto.
```

### 13 — Mantener la calma bajo presión

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["manejo_de_presion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Perder la calma o subir el tono durante un debate no fortalece un argumento, y puede hacer que la audiencia perciba menos credibilidad en quien lo pierde."

pasos:
  - "El manejo emocional bajo presión es parte de la habilidad de debatir en vivo, más allá del contenido argumentativo."

explicacion: |
  Verdadero: es la razón por la que el manejo de la calma es una
  habilidad central del debate en vivo.
```

### 14 — Un debate genera presión de tiempo real

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "basico"
  tags: ["debate", "presion_de_tiempo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un debate en vivo genera presión de tiempo, a diferencia de un texto escrito que se puede revisar y corregir con calma antes de presentarlo."

pasos:
  - "Es la diferencia central entre refutar en un texto y refutar en vivo."

explicacion: |
  Verdadero: es la diferencia de contexto que define este tema frente
  a `../detectar-falacias/`.
```

### 15 — Clasificar la técnica de refutación en un ejemplo

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["tecnicas_de_refutacion", "practica"]

variables:
  situaciones: ["decir \"eso es una apelación a la popularidad, no una razón real\"", "pedir la fuente exacta de un dato citado sin referencia"]
  tecnicas: ["señalar la falacia por su nombre", "pedir evidencia concreta"]
  idx: uno_de([0, 1])

respuesta: tecnicas[idx]
tipo: mc
opciones_explicitas: ["señalar la falacia por su nombre", "pedir evidencia concreta", "distinguir la parte válida de la débil"]

enunciado: "La acción de \"{situaciones[idx]}\" corresponde a la técnica de refutación de..."

pasos:
  - "Cada acción concreta corresponde a una de las técnicas de refutación descritas en la teoría."

explicacion: |
  Reconocer qué técnica se está usando ayuda a aplicarlas de forma
  deliberada durante un debate.
```

### 16 — Debate como base de la negociación

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "negociacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Debatir y refutar en vivo es la base directa de la negociación, que agrega el objetivo de llegar a un acuerdo, no sólo \"ganar\" el intercambio."

pasos:
  - "Ver `../negociacion/`: es el prerrequisito directo del siguiente tema de la subrama."

explicacion: |
  Verdadero: es la relación de prerrequisito con el tema siguiente.
```

### 17 — Debate como base de persuasión ética vs. manipulación

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "persuasion_etica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema también es prerrequisito de persuasión ética vs. manipulación, que distingue técnicas legítimas de manipulación en este mismo contexto de debate en vivo."

pasos:
  - "Ver `../persuasion-etica-vs-manipulacion/`: comparte este tema como uno de sus dos prerrequisitos."

explicacion: |
  Verdadero: es otra de las relaciones de prerrequisito de este tema
  dentro de la subrama.
```

### 18 — Ordenar el proceso de refutación durante un debate

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "intermedio"
  tags: ["debate", "metodo"]

enunciado: "Ordená los pasos para refutar un argumento en vivo durante un debate."
tipo: ordenar
opciones_explicitas:
  - "Escuchar activamente el argumento completo del rival, sin preparar la respuesta antes de tiempo"
  - "Identificar si hay una falacia o una premisa débil en ese argumento"
  - "Nombrar con precisión el error encontrado"
  - "Responder de forma clara y calmada, sin perder el foco por la presión del momento"
respuesta_orden: ["Escuchar activamente el argumento completo del rival, sin preparar la respuesta antes de tiempo", "Identificar si hay una falacia o una premisa débil en ese argumento", "Nombrar con precisión el error encontrado", "Responder de forma clara y calmada, sin perder el foco por la presión del momento"]
explicacion: |
  El proceso va de escuchar activamente a identificar el error y
  responder con calma y precisión.
```

### 19 — El debate no requiere ganar a cualquier costo

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "etica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Refutar bien en un debate no significa usar cualquier técnica para \"ganar\" a toda costa, incluidas las falacias — significa señalar con precisión errores reales de razonamiento."

pasos:
  - "Es un anticipo del tema siguiente sobre persuasión ética vs. manipulación."

explicacion: |
  Verdadero: refutar honestamente, no manipular, es el estándar
  esperado en un debate bien conducido.
```

### 20 — Aplicación: participar en un debate escolar

```
metadata:
  materia: "lengua"
  tema: "debate_refutar_en_vivo"
  nivel: "avanzado"
  tags: ["debate", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al participar en un debate escolar, conviene escuchar activamente al rival, identificar falacias con precisión y responder con calma, en vez de interrumpir o subir el tono para tratar de \"ganar\"."

pasos:
  - "Es la aplicación práctica directa de las técnicas estudiadas en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en un contexto
  escolar real de debate.
```
