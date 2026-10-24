# Lengua — Voz activa y pasiva (cuestionario, 20 preguntas VBLang)

> Tema: `P7B`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Reconocer voz activa

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "basico"
  tags: ["voz_activa"]

variables:
  frases: ["Juan compró el pan", "María leyó el libro", "El pan fue comprado por Juan", "El libro fue leído por María"]
  voces: ["activa", "activa", "pasiva", "pasiva"]
  idx: uno_de([0, 1, 2, 3])

respuesta: voces[idx]
tipo: mc
opciones_explicitas: ["activa", "pasiva"]

enunciado: "La oración \"{frases[idx]}\" está en voz..."

pasos:
  - "Si el sujeto realiza la acción, es activa. Si el sujeto la recibe (ser + participio), es pasiva."

explicacion: |
  Voz activa: el sujeto hace la acción. Voz pasiva: el sujeto la
  recibe, con "ser + participio".
```

### 2 — Identificar el sujeto de la pasiva

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_pasiva", "sujeto"]

variables:
  frases: ["El pan fue comprado por Juan", "La ventana fue rota por el viento", "El examen fue corregido por la profesora"]
  sujetos: ["El pan", "La ventana", "El examen"]
  idx: uno_de([0, 1, 2])

respuesta: sujetos[idx]
tipo: completar

enunciado: "En la oración pasiva \"{frases[idx]}\", ¿cuál es el sujeto?"

pasos:
  - "El sujeto de la pasiva es lo que RECIBE la acción, no quien la realiza."

explicacion: |
  El sujeto de la pasiva es el que antes era el objeto directo de la
  activa correspondiente.
```

### 3 — Identificar el complemento agente

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_pasiva", "complemento_agente"]

variables:
  frases: ["El pan fue comprado por Juan", "La ventana fue rota por el viento", "El examen fue corregido por la profesora"]
  agentes: ["por Juan", "por el viento", "por la profesora"]
  idx: uno_de([0, 1, 2])

respuesta: agentes[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el complemento agente?"

pasos:
  - "El complemento agente indica quién realizó la acción y se introduce con \"por\"."

explicacion: |
  El complemento agente equivale al sujeto que tendría la misma
  oración en voz activa.
```

### 4 — Pasar de activa a pasiva

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "activa_a_pasiva"]

variables:
  activas: ["Juan compró el pan", "María leyó el libro", "El chef preparó la cena"]
  pasivas: ["El pan fue comprado por Juan", "El libro fue leído por María", "La cena fue preparada por el chef"]
  idx: uno_de([0, 1, 2])

respuesta: pasivas[idx]
tipo: mc
opciones_explicitas: [pasivas[idx], "Juan fue comprado por el pan", "El pan compró a Juan"]

enunciado: "¿Cuál es la versión en voz pasiva de \"{activas[idx]}\"?"

pasos:
  - "El OD de la activa pasa a sujeto; el sujeto de la activa pasa a complemento agente."

explicacion: |
  El objeto directo de la activa se convierte en sujeto de la
  pasiva, y el sujeto original pasa a complemento agente con "por".
```

### 5 — Pasar de pasiva a activa

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "pasiva_a_activa"]

variables:
  pasivas: ["El pan fue comprado por Juan", "El libro fue leído por María"]
  activas: ["Juan compró el pan", "María leyó el libro"]
  idx: uno_de([0, 1])

respuesta: activas[idx]
tipo: completar

enunciado: "Reescribí en voz activa: \"{pasivas[idx]}\""

pasos:
  - "El complemento agente pasa a ser sujeto; el sujeto de la pasiva pasa a ser OD."

explicacion: |
  Se invierte la transformación: agente → sujeto, sujeto pasivo → OD.
```

### 6 — El verbo cambia de forma

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "basico"
  tags: ["voz_pasiva", "estructura_verbal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La voz pasiva se construye con el verbo \"ser\" conjugado más el participio del verbo principal."

pasos:
  - "\"fue comprado\": \"fue\" (ser) + \"comprado\" (participio de comprar)."

explicacion: |
  Verdadero: ser + participio es la estructura fija de la voz pasiva.
```

### 7 — Verbos sin voz pasiva

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "intransitivos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un verbo sin objeto directo (como \"dormir\" o \"llegar\") no se puede pasivizar."

pasos:
  - "Sin OD no hay nada que convertir en sujeto de la pasiva."

explicacion: |
  Verdadero: la pasiva necesita un OD en la activa para transformarlo
  en sujeto. Los intransitivos no tienen OD.
```

### 8 — El complemento agente es opcional

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_pasiva", "complemento_agente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"El pan fue comprado\" es una oración pasiva válida, aunque no diga quién lo compró."

pasos:
  - "El complemento agente se puede omitir cuando no importa o no se sabe quién hizo la acción."

explicacion: |
  Verdadero: la pasiva sin agente es muy común (típica de noticias:
  \"el edificio fue inaugurado ayer\").
```

### 9 — Identificar el participio

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "basico"
  tags: ["voz_pasiva", "participio"]

variables:
  infinitivos: ["comprar", "romper", "corregir", "escribir"]
  participios: ["comprado", "roto", "corregido", "escrito"]
  idx: uno_de([0, 1, 2, 3])

respuesta: participios[idx]
tipo: completar

enunciado: "El participio del verbo \"{infinitivos[idx]}\" es..."

pasos:
  - "La mayoría termina en -ado/-ido, pero hay participios irregulares (roto, escrito, visto, hecho...)."

explicacion: |
  Algunos participios son irregulares y no siguen la terminación
  regular -ado/-ido.
```

### 10 — Diferenciar activa de pasiva por el verbo

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_activa", "voz_pasiva", "diferenciacion"]

variables:
  frases: ["Ana pintó el cuadro", "El cuadro fue pintado por Ana"]
  voces: ["activa", "pasiva"]
  idx: uno_de([0, 1])

respuesta: voces[idx]
tipo: mc
opciones_explicitas: ["activa", "pasiva"]

enunciado: "\"{frases[idx]}\" está en voz..."

pasos:
  - "Un solo verbo conjugado normal → activa. \"Ser\" + participio → pasiva."

explicacion: |
  El indicio más rápido es la forma del verbo: un verbo simple es
  activa, ser+participio es pasiva.
```

### 11 — Uso real: noticias

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "uso"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En textos periodísticos es común usar la voz pasiva para poner el foco en el hecho o en quien lo recibe, sin nombrar primero al responsable."

pasos:
  - "\"El puente fue inaugurado ayer\" pone el foco en el puente, no en la autoridad que lo inauguró."

explicacion: |
  Verdadero: la pasiva permite despersonalizar o postergar la
  mención del agente, muy usado en noticias e informes.
```

### 12 — Ordenar la transformación activa → pasiva

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "metodo"]

enunciado: "Ordená los pasos para pasar una oración de voz activa a voz pasiva."
tipo: ordenar
opciones_explicitas:
  - "Identificar el objeto directo de la oración activa"
  - "Convertir ese objeto directo en el nuevo sujeto"
  - "Cambiar el verbo a \"ser\" (en el mismo tiempo) + participio"
  - "Convertir el sujeto original en complemento agente con \"por\""
respuesta_orden: ["Identificar el objeto directo de la oración activa", "Convertir ese objeto directo en el nuevo sujeto", "Cambiar el verbo a \"ser\" (en el mismo tiempo) + participio", "Convertir el sujeto original en complemento agente con \"por\""]
explicacion: |
  El orden lógico va del OD (lo que se transforma en sujeto) al
  verbo, y termina con el sujeto original convertido en agente.
```

### 13 — Diferenciar sujeto de pasiva vs. objeto directo de activa

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "objeto_directo", "relacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El sujeto de una oración pasiva es siempre lo mismo que el objeto directo de la oración activa equivalente."

pasos:
  - "\"El pan\" es OD en \"Juan compró el pan\" y sujeto en \"El pan fue comprado por Juan\"."

explicacion: |
  Verdadero: es exactamente la misma transformación descrita en la
  teoría — OD activo se convierte en sujeto pasivo.
```

### 14 — Reconocer que no toda oración con "ser" es pasiva

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Cualquier oración que use el verbo \"ser\" está en voz pasiva."

pasos:
  - "\"Juan es alto\" usa \"ser\" pero no tiene participio ni describe una acción recibida: es un predicado nominal, no una pasiva."

explicacion: |
  Falso: la pasiva necesita específicamente \"ser + participio\" de
  un verbo de acción, no cualquier uso de \"ser\".
```

### 15 — Tiempo verbal se mantiene en la transformación

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "tiempo_verbal"]

variables:
  activas: ["Juan compra el pan", "Juan compró el pan"]
  pasivas: ["El pan es comprado por Juan", "El pan fue comprado por Juan"]
  idx: uno_de([0, 1])

respuesta: pasivas[idx]
tipo: completar

enunciado: "Pasá a voz pasiva manteniendo el mismo tiempo verbal: \"{activas[idx]}\""

pasos:
  - "Presente activa → \"es\" + participio. Pretérito activa → \"fue\" + participio."

explicacion: |
  El tiempo del verbo \"ser\" en la pasiva coincide con el tiempo del
  verbo original en la activa.
```

### 16 — Complemento agente vs. circunstancial

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["complemento_agente", "circunstancial", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El complemento agente (\"por Juan\") es lo mismo que un circunstancial de causa."

pasos:
  - "El complemento agente sólo aparece en oraciones pasivas y equivale al sujeto de la activa, no responde \"¿por qué?\" como una causa."

explicacion: |
  Falso: aunque ambos usan \"por\", el complemento agente identifica
  quién REALIZA la acción en una pasiva; el CC de causa explica el
  motivo de la acción.
```

### 17 — Múltiples oraciones, misma transformación

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "practica"]

variables:
  activas: ["El profesor explicó la lección", "Los alumnos entregaron el trabajo", "La empresa contrató al ingeniero"]
  pasivas: ["La lección fue explicada por el profesor", "El trabajo fue entregado por los alumnos", "El ingeniero fue contratado por la empresa"]
  idx: uno_de([0, 1, 2])

respuesta: pasivas[idx]
tipo: completar

enunciado: "Pasá a voz pasiva: \"{activas[idx]}\""

pasos:
  - "OD → sujeto, verbo → ser+participio, sujeto → complemento agente."

explicacion: |
  Se aplica el mismo procedimiento sin importar el sujeto/OD
  concretos de la oración.
```

### 18 — Sujeto pasivo puede ser plural

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "concordancia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando el objeto directo de la activa es plural, el verbo \"ser\" de la pasiva también debe concordar en plural."

pasos:
  - "\"Compró los panes\" (OD plural) → \"Los panes fueron comprados\" (ser en plural)."

explicacion: |
  Verdadero: el verbo \"ser\" concuerda en número y persona con el
  nuevo sujeto (el antiguo OD).
```

### 19 — La pasiva no cambia el significado del hecho

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_activa", "voz_pasiva", "significado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Juan compró el pan\" y \"El pan fue comprado por Juan\" describen el mismo hecho, sólo cambia qué elemento se destaca primero."

pasos:
  - "El sujeto/agente y el OD/sujeto pasivo son las mismas personas y cosas en ambas versiones."

explicacion: |
  Verdadero: activa y pasiva son formas alternativas de contar el
  mismo evento, con distinto foco (quién actúa vs. qué se recibe).
```

### 20 — Aplicación: elegir la voz según el foco

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_activa", "voz_pasiva", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si se quiere poner el foco en el resultado (\"el puente\") y no en quién lo construyó, conviene usar la voz pasiva."

pasos:
  - "\"El puente fue construido en 1990\" destaca el puente; \"La empresa construyó el puente en 1990\" destaca a la empresa."

explicacion: |
  Verdadero: elegir activa o pasiva es una decisión de estilo según
  qué elemento se quiere destacar primero en la oración.
```
