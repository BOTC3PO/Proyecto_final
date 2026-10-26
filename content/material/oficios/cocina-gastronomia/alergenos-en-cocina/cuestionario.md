# Oficios — Cocina/Gastronomía — Alérgenos en cocina (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Escrito por Claude; no obligatorio para el logro del oficio (ver `../../dependencias.md`).

---

### 1 — Qué es una alergia

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "basico"
  tags: ["alergia"]

enunciado: "¿Qué es una alergia alimentaria?"
tipo: mc
opciones_explicitas:
  - "Una reacción del sistema inmunológico frente a una proteína de un alimento"
  - "Un malestar por comer demasiado"
  - "Un gusto personal por ciertos platos"
respuesta: "Una reacción del sistema inmunológico frente a una proteína de un alimento"

explicacion: |
  Puede dispararse con cantidades muy pequeñas.
```

### 2 — Anafilaxia

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "basico"
  tags: ["alergia"]

enunciado: "¿Cómo se llama la reacción alérgica grave que compromete la respiración y la circulación?"
tipo: mc
opciones_explicitas:
  - "Anafilaxia"
  - "Indigestión"
  - "Intolerancia"
respuesta: "Anafilaxia"

explicacion: |
  Es una emergencia médica.
```

### 3 — Intolerancia

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "basico"
  tags: ["alergia"]

respuesta: falso
tipo: vf

enunciado: "La intolerancia a la lactosa es una reacción del sistema inmunológico igual que una alergia a la leche."

explicacion: |
  La intolerancia no involucra al sistema inmunológico; la alergia sí.
```

### 4 — Celiaquía

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "basico"
  tags: ["celiaquia"]

enunciado: "¿Qué le ocurre a una persona celíaca cuando consume gluten?"
tipo: mc
opciones_explicitas:
  - "Se daña su intestino delgado"
  - "Tiene una indigestión pasajera"
  - "Nada, si es poca cantidad"
respuesta: "Se daña su intestino delgado"

explicacion: |
  Es una condición autoinmune.
```

### 5 — TACC

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "basico"
  tags: ["celiaquia"]

tipo: completar
enunciado: "La sigla TACC designa trigo, avena, cebada y ___."
respuestas_validas:
  - "centeno"

explicacion: |
  Son los cereales que contienen gluten.
```

### 6 — Ley celiaquía

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "intermedio"
  tags: ["normativa"]

enunciado: "¿Qué ley argentina regula la atención de la celiaquía?"
tipo: mc
opciones_explicitas:
  - "La 26.588"
  - "La 25.326"
  - "La 27.642"
respuesta: "La 26.588"

explicacion: |
  Declara de interés nacional la detección y atención de la celiaquía.
```

### 7 — Lista oficial

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "intermedio"
  tags: ["normativa"]

respuesta: verdadero
tipo: vf

enunciado: "El cocinero debe basarse en la lista de alérgenos de la normativa argentina vigente y no en la de otro país."

explicacion: |
  El Código Alimentario y las guías del INAL-ANMAT fijan la referencia local.
```

### 8 — Ingredientes ocultos

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "intermedio"
  tags: ["ingredientes"]

enunciado: "¿Cuál es un ejemplo de alérgeno escondido en una preparación?"
tipo: mc
opciones_explicitas:
  - "Harina usada para espesar una salsa"
  - "Agua mineral"
  - "Sal fina"
respuesta: "Harina usada para espesar una salsa"

explicacion: |
  La harina contiene gluten aunque no se vea en el plato.
```

### 9 — Huevo oculto

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "intermedio"
  tags: ["ingredientes"]

enunciado: "¿En cuál de estas preparaciones suele haber huevo aunque no se note?"
tipo: mc
opciones_explicitas:
  - "Pasta fresca"
  - "Arroz blanco hervido"
  - "Agua con limón"
respuesta: "Pasta fresca"

explicacion: |
  Muchas masas llevan huevo.
```

### 10 — Receta sin harina

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "intermedio"
  tags: ["celiaquia"]

respuesta: falso
tipo: vf

enunciado: "Un plato apto para celíacos es simplemente uno cuya receta no lleva harina."

explicacion: |
  También importa que se cocine y se sirva sin contacto con gluten.
```

### 11 — Aceite de fritura

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "intermedio"
  tags: ["contaminacion"]

enunciado: "¿Qué problema tiene freír una porción sin gluten en el mismo aceite que un rebozado?"
tipo: mc
opciones_explicitas:
  - "Se transfieren trazas de gluten"
  - "Se acelera la cocción"
  - "Cambia el color del aceite solamente"
respuesta: "Se transfieren trazas de gluten"

explicacion: |
  Lo mismo pasa con planchas y utensilios compartidos.
```

### 12 — Utensilios

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "intermedio"
  tags: ["contaminacion"]

enunciado: "Para preparar un plato sin alérgenos, ¿qué conviene hacer?"
tipo: mc
opciones_explicitas:
  - "Usar utensilios y superficies limpios y separados, y prepararlo primero"
  - "Usar los mismos utensilios que el resto sin lavarlos"
  - "Cocinarlo al final del servicio sobre la plancha de siempre"
respuesta: "Usar utensilios y superficies limpios y separados, y prepararlo primero"

explicacion: |
  La separación es la medida central.
```

### 13 — Ficha técnica

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "basico"
  tags: ["comunicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Registrar los alérgenos en la ficha técnica de cada receta ayuda a informar con precisión."

explicacion: |
  La información no debe depender de la memoria de una sola persona.
```

### 14 — Cliente avisa

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "basico"
  tags: ["comunicacion"]

enunciado: "Un cliente avisa que tiene alergia. ¿Qué debe hacer el mozo?"
tipo: mc
opciones_explicitas:
  - "Consultar con cocina, que revisa los ingredientes del plato"
  - "Responder de memoria si cree que está bien"
  - "Decir que un poco no hace nada"
respuesta: "Consultar con cocina, que revisa los ingredientes del plato"

explicacion: |
  No se responde por intuición.
```

### 15 — Un poquito

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "intermedio"
  tags: ["comunicacion"]

respuesta: falso
tipo: vf

enunciado: "Decir 'tiene un poquito nomás' es una respuesta aceptable frente a una alergia."

explicacion: |
  En una alergia no hay cantidad que se pueda estimar sin riesgo.
```

### 16 — No se puede garantizar

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "avanzado"
  tags: ["comunicacion"]

enunciado: "Si hay dudas sobre un plato para una persona alérgica, ¿qué es lo correcto?"
tipo: mc
opciones_explicitas:
  - "Decir con honestidad que no se puede garantizar"
  - "Servirlo igual"
  - "Cambiar el nombre del plato"
respuesta: "Decir con honestidad que no se puede garantizar"

explicacion: |
  Es preferible no ofrecerlo a arriesgar.
```

### 17 — Reacción grave

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "intermedio"
  tags: ["emergencia"]

enunciado: "Si un cliente muestra dificultad para respirar e hinchazón de labios tras comer, ¿qué corresponde?"
tipo: mc
opciones_explicitas:
  - "Llamar de inmediato a emergencias"
  - "Esperar a ver si se le pasa"
  - "Ofrecerle agua y un postre"
respuesta: "Llamar de inmediato a emergencias"

explicacion: |
  No se espera para ver si pasa.
```

### 18 — Medicación

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "intermedio"
  tags: ["emergencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la persona tiene medicación de emergencia indicada por su médico, se la puede ayudar a usarla."

explicacion: |
  Además se avisa a emergencias y a quien esté a cargo.
```

### 19 — Cambio de marca

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "avanzado"
  tags: ["gestion"]

respuesta: verdadero
tipo: vf

enunciado: "Un producto puede cambiar su fórmula, por eso hay que revisar los rótulos cuando se cambia de marca o proveedor."

explicacion: |
  Es una tarea permanente.
```

### 20 — Sulfitos

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "avanzado"
  tags: ["ingredientes"]

enunciado: "Los sulfitos, usados como conservante, ¿pueden causar reacciones?"
tipo: mc
opciones_explicitas:
  - "Sí, en personas sensibles"
  - "No, nunca"
  - "Solo en niños"
respuesta: "Sí, en personas sensibles"

explicacion: |
  Por eso figuran entre las sustancias que se declaran.
```

### 21 — Eslabón

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "avanzado"
  tags: ["haccp"]

enunciado: "¿Con qué tema se une el control de alérgenos en la gestión de la cocina?"
tipo: mc
opciones_explicitas:
  - "HACCP, donde son un peligro con puntos de control y registros"
  - "Con el costeo de platos"
  - "Con el emplatado"
respuesta: "HACCP, donde son un peligro con puntos de control y registros"

explicacion: |
  Se trata como un peligro más.
```

### 22 — Dónde consultar

```
metadata:
  materia: "oficios"
  tema: "cocina_alergenos_en_cocina"
  nivel: "intermedio"
  tags: ["normativa"]

enunciado: "¿Dónde se consulta la lista vigente de alérgenos de declaración obligatoria?"
tipo: mc
opciones_explicitas:
  - "En el Código Alimentario Argentino y las guías del INAL-ANMAT"
  - "En una receta de internet"
  - "En el menú de otro restaurante"
respuesta: "En el Código Alimentario Argentino y las guías del INAL-ANMAT"

explicacion: |
  La lista se actualiza.
```
