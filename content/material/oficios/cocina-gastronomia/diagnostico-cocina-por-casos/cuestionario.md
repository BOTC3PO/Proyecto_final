# Oficios — Cocina/Gastronomía — Diagnóstico de cocina por casos (cuestionario, 18 preguntas VBLang)

> Cierre del oficio (`OF19`). Ver `teoria.md` en esta misma carpeta.
> Escrito a mano (Claude), casos técnicos de diagnóstico de cocina —
> cada pregunta validada con parse+lint+compile+generate real de
> packages/vblang antes de guardarse.

---

### 1 — El diagnóstico combina varias etapas

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, un plato que sale mal puede tener su origen en cualquiera de las etapas previas: materia prima, mise en place, técnica de cocción o sazón."

explicacion: |
  Es la idea de apertura de todo el tema de diagnóstico de cocina.
```

### 2 — Hipótesis para una salsa que se corta

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  causa: uno_de(["la grasa se incorporó demasiado rápido", "la temperatura fue demasiado alta y rompió la emulsión"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una hipótesis mencionada en la teoría para que una salsa emulsionada se corte."

explicacion: |
  Ambas son las dos hipótesis principales mencionadas en el caso 1.
```

### 3 — Cómo recuperar una salsa cortada

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

variables:
  n: uno_de([1, 1])

respuesta: "empezar de nuevo con una base chica e incorporar de a poco la salsa cortada"
tipo: mc
opciones_explicitas: ["empezar de nuevo con una base chica e incorporar de a poco la salsa cortada", "agregar mucha más grasa de golpe a la salsa cortada", "subir la temperatura hasta que vuelva a unirse"]

enunciado: "Según la teoría, ¿cómo se recupera una salsa emulsionada que se cortó?"

explicacion: |
  Empezando de nuevo con una base chica (una yema o una cucharada de
  líquido) e incorporando de a poco la salsa cortada, en vez de
  agregar más grasa directamente.
```

### 4 — Qué NO hacer con una salsa cortada

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "intermedio"
  tags: ["caso 1"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, la forma correcta de arreglar una salsa cortada es agregarle más grasa directamente."

explicacion: |
  Falso. Esa no es la solución que propone la teoría; hay que empezar
  de nuevo con una base chica e incorporar de a poco la salsa cortada.
```

### 5 — Por qué un guiso queda soso

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "intermedio"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "la sal se agregó en un solo momento en vez de en capas a lo largo de la cocción"
tipo: mc
opciones_explicitas: ["la sal se agregó en un solo momento en vez de en capas a lo largo de la cocción", "se usó demasiada sal desde el principio", "el corte de carne elegido no tenía suficiente grasa"]

enunciado: "Según la teoría, ¿cuál es la causa más común de que un guiso o salsa quede soso pese a llevar sal?"

explicacion: |
  Salar en un solo momento (generalmente al final) en vez de en capas
  a lo largo de toda la cocción deja sabor en la superficie, pero no
  integrado al interior ni al líquido de cocción.
```

### 6 — Qué pierde salar sólo al final

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, salar sólo al final deja sabor en la superficie del plato, pero no en el interior del alimento ni integrado al líquido de cocción."

explicacion: |
  Es la razón central por la que salar en capas da mejor resultado que
  salar en un solo momento.
```

### 7 — Sal y reducción

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "avanzado"
  tags: ["caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "un líquido que se reduce concentra la sal ya agregada, y el plato puede terminar demasiado salado"
tipo: mc
opciones_explicitas: ["un líquido que se reduce concentra la sal ya agregada, y el plato puede terminar demasiado salado", "reducir un líquido nunca cambia la percepción de sal", "reducir siempre diluye la sal ya agregada"]

enunciado: "Según la teoría, ¿qué riesgo hay al agregar sal antes de una reducción larga?"

explicacion: |
  Un líquido que se reduce (se evapora, concentra sabor) también
  concentra la sal ya agregada, por eso conviene rectificar de a poco
  probando en cada paso.
```

### 8 — Hipótesis para una carne que queda dura

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "intermedio"
  tags: ["caso 3"]

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, una carne que queda dura pese a cocinarse mucho tiempo casi siempre indica que se usó un método de cocción incorrecto para ese corte."

explicacion: |
  Es la hipótesis principal mencionada en el caso 3: el método, no
  sólo el tiempo, es lo que hay que revisar primero.
```

### 9 — Por qué un corte con colágeno queda duro con calor seco

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "el colágeno no tuvo el calor húmedo ni el tiempo necesarios para transformarse en gelatina"
tipo: mc
opciones_explicitas: ["el colágeno no tuvo el calor húmedo ni el tiempo necesarios para transformarse en gelatina", "la carne perdió toda su grasa antes de empezar a cocinarse", "la sal usada fue insuficiente para ablandar la fibra"]

enunciado: "Un corte con mucho colágeno (como paleta u osobuco) cocinado con calor seco y rápido se pone duro porque..."

explicacion: |
  El colágeno necesita calor húmedo y tiempo prolongado para
  transformarse en gelatina; con calor seco y rápido eso no llega a
  pasar y el corte queda duro.
```

### 10 — La solución correcta para el caso 3

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

variables:
  n: uno_de([1, 1])

respuesta: "cambiar a un método de cocción húmedo y lento, como la brasa"
tipo: mc
opciones_explicitas: ["cambiar a un método de cocción húmedo y lento, como la brasa", "cocinar todavía más tiempo con el mismo método seco", "bajar la cantidad de sal usada en la cocción"]

enunciado: "Según la teoría, ¿cuál es la solución correcta cuando una carne queda dura por haber usado calor seco en un corte con mucho colágeno?"

explicacion: |
  Cambiar a un método de cocción húmedo y lento (brasa), que es
  justamente el que ablanda ese tipo de corte transformando el
  colágeno en gelatina.
```

### 11 — La solución incorrecta para el caso 3

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "avanzado"
  tags: ["caso 3"]

respuesta: falso
tipo: vf

enunciado: "Según la teoría, la solución correcta al caso 3 (carne dura) es cocinar todavía más tiempo manteniendo el mismo método de cocción seco."

explicacion: |
  Falso. El corte necesita cambiar a un método húmedo y lento (brasa),
  no simplemente más tiempo con el mismo método seco.
```

### 12 — El método, resumido

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "basico"
  tags: ["metodo"]

variables:
  n: uno_de([1, 1])

respuesta: "identificar en qué etapa del proceso se originó el problema, usando pruebas simples y concretas"
tipo: mc
opciones_explicitas: ["identificar en qué etapa del proceso se originó el problema, usando pruebas simples y concretas", "ajustar siempre la sazón, sin importar el síntoma", "repetir la receta exactamente igual hasta que funcione"]

enunciado: "Según el método resumido de la teoría, ¿cuál es la lógica común a los tres casos de diagnóstico de cocina?"

explicacion: |
  Identificar en qué etapa del proceso se originó el problema, usando
  pruebas simples y concretas, es la lógica común a los tres casos.
```

### 13 — Ajustar la etapa correcta

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, cambiar la sazón no soluciona un problema que se originó en el método de cocción, y viceversa."

explicacion: |
  Es la síntesis final del método de diagnóstico de cocina de todo el
  tema.
```

### 14 — Conexión con fundamentos: la ficha técnica

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "intermedio"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Según `../fundamentos-cocina/`, la ficha técnica (o receta estándar) fija de antemano las cantidades exactas por porción para que un plato salga igual sin importar quién lo cocine."

explicacion: |
  Es contexto ya presentado en la lección de fundamentos, relevante
  para entender por qué escalar mal una receta también puede arruinar
  un plato, no sólo un error de cocción.
```

### 15 — Conexión con seguridad e higiene: la zona de peligro

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "intermedio"
  tags: ["contexto"]

respuesta: verdadero
tipo: vf

enunciado: "Según `../seguridad-e-higiene-cocina/`, la zona de peligro (aproximadamente entre 5°C y 60°C) es el rango de temperatura donde las bacterias se multiplican más rápido en un alimento perecedero."

explicacion: |
  Es contexto ya presentado en la lección de seguridad e higiene,
  relevante para no confundir un problema de sabor o textura con un
  problema de seguridad alimentaria.
```

### 16 — Diferencia entre caso 1 y caso 2

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "avanzado"
  tags: ["caso 1", "caso 2"]

variables:
  n: uno_de([1, 1])

respuesta: "el caso 1 es un problema de técnica de emulsión; el caso 2 es un problema de cuándo y cómo se agregó la sal"
tipo: mc
opciones_explicitas: ["el caso 1 es un problema de técnica de emulsión; el caso 2 es un problema de cuándo y cómo se agregó la sal", "son exactamente el mismo síntoma con dos nombres distintos", "el caso 1 sólo ocurre con salsas frías, el caso 2 sólo con salsas calientes"]

enunciado: "¿Cuál es la diferencia central entre el caso 1 (una salsa se corta) y el caso 2 (un guiso queda soso)?"

explicacion: |
  El caso 1 es una falla de técnica en cómo se emulsiona una salsa; el
  caso 2 es una falla de método en cuándo y cómo se incorpora la sal
  durante la cocción.
```

### 17 — No adivinar la causa

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Según el método resumido de la teoría, se recomienda usar pruebas simples y concretas en vez de adivinar la causa de un problema de cocina."

explicacion: |
  Es parte del primer paso del método resumido de todo el tema.
```

### 18 — Síntesis del enfoque de diagnóstico

```
metadata:
  materia: "oficios"
  tema: "cocina_diagnostico_cocina_por_casos"
  nivel: "basico"
  tags: ["metodo"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres casos de este tema comparten la misma lógica: reconstruir en qué etapa del proceso se originó el problema, en vez de sólo describir cómo salió el plato."

explicacion: |
  Es la síntesis final del método de diagnóstico de cocina de todo el
  tema.
```
