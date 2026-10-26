# Biología — Partes de una planta y germinación (cuestionario, 20 preguntas VBLang)

> Tema: `BA1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Función de una parte de la planta

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["botanica", "anatomia_vegetal"]

variables:
  datos: [["raiz", "absorbe agua y nutrientes del suelo"], ["tallo", "sostiene la planta y transporta agua"], ["hojas", "fabrican el alimento por fotosintesis"], ["flor", "organo reproductivo, produce semillas"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["absorbe agua y nutrientes del suelo", "sostiene la planta y transporta agua", "fabrican el alimento por fotosintesis", "organo reproductivo, produce semillas"]

enunciado: "¿Cuál es la función principal de {datos[idx][0]}?"

explicacion: |
  La función de {datos[idx][0]} es: {datos[idx][1]}.
```

### 2 — El fruto y la semilla

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["fruto", "semilla"]

respuesta: verdadero
tipo: vf

enunciado: "El fruto envuelve y protege a la semilla."

explicacion: |
  Correcto, y en muchos casos ayuda a dispersarla.
```

### 3 — Composición de la semilla

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semilla", "embrion"]

respuesta: verdadero
tipo: vf

enunciado: "La semilla contiene el embrión de una nueva planta y su reserva de alimento."

explicacion: |
  Correcto, el embrión y su reserva (cotiledones/endospermo) están dentro de la semilla.
```

### 4 — Fotosíntesis y raíces

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["fotosintesis", "raiz"]

respuesta: falso
tipo: vf

enunciado: "La raíz fabrica el alimento de la planta por fotosíntesis."

explicacion: |
  Falso, eso ocurre en las hojas, donde están los cloroplastos.
```

### 5 — Condiciones para la germinación

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semillas"]

respuesta: "Agua, temperatura adecuada y oxígeno"
tipo: mc
opciones_explicitas: ["Agua, temperatura adecuada y oxígeno", "Luz, tierra y agua", "Solo temperatura y luz", "Solo agua y tierra"]

enunciado: "¿Cuáles son las 3 condiciones básicas para que una semilla germine?"

explicacion: |
  Agua (hidrata), temperatura adecuada (activa enzimas) y oxígeno (respiración celular).
```

### 6 — Función del agua en la semilla

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semillas", "agua"]

respuesta: verdadero
tipo: vf

enunciado: "El agua ablanda la cubierta de la semilla y activa las reacciones químicas internas."

explicacion: |
  Correcto, ese proceso se llama imbibición.
```

### 7 — Requisito de luz en la germinación

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "intermedio"
  tags: ["semillas", "luz"]

respuesta: falso
tipo: vf

enunciado: "La luz es siempre absolutamente necesaria para que una semilla germine."

explicacion: |
  Falso. Muchas semillas germinan bajo tierra en la oscuridad.
```

### 8 — El rol del oxígeno

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semillas", "respiracion"]

respuesta: verdadero
tipo: vf

enunciado: "El oxígeno es necesario para la respiración celular del embrión durante la germinación."

explicacion: |
  Correcto, el embrión necesita energía para empezar a crecer.
```

### 9 — Etapa inicial de la germinación

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semilla", "agua"]

respuesta: "imbibicion"
tipo: completar
respuestas_validas:
  - "imbibicion"

enunciado: "La primera etapa, donde la semilla absorbe agua y se hincha, se llama ___."

explicacion: |
  Es la imbibición, que activa el metabolismo de la semilla.
```

### 10 — Orden de emergencia de estructuras

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["raiz", "tallo"]

respuesta: verdadero
tipo: vf

enunciado: "La radícula (primera raíz) sale antes que el tallo."

explicacion: |
  Correcto, primero se ancla y absorbe agua.
```

### 11 — Dirección de crecimiento

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["crecimiento"]

respuesta: falso
tipo: vf

enunciado: "El tallo emerge hacia abajo y la raíz hacia arriba."

explicacion: |
  Falso, es al revés: tallo hacia arriba, raíz hacia abajo.
```

### 12 — Secuencia de la germinación

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "intermedio"
  tags: ["etapas", "secuencia"]

variables:
  escenarios: [["imbibicion", 1], ["activacion de reservas", 2], ["emergencia de la radicula", 3], ["emergencia del tallo", 4]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: [1, 2, 3, 4]

enunciado: "¿En qué número de orden ocurre la etapa '{escenarios[idx][0]}' de la germinación?"

explicacion: |
  {escenarios[idx][0]} es la etapa número {escenarios[idx][1]}.
```

### 13 — El inicio de la vida

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["germinacion", "radicula"]

respuesta: verdadero
tipo: vf

enunciado: "La radícula sale primero porque la planta necesita anclarse y absorber agua antes de crecer hacia arriba."

explicacion: |
  Correcto, es prioridad para la supervivencia inicial.
```

### 14 — Importancia de la raíz

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["raiz", "brote"]

respuesta: verdadero
tipo: vf

enunciado: "Sin la raíz, el brote que sale hacia arriba no tendría cómo sostenerse ni alimentarse una vez agotada la reserva de la semilla."

explicacion: |
  Correcto, la raíz da soporte y absorción a largo plazo.
```

### 15 — Definición de germinación

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["definicion"]

respuesta: verdadero
tipo: vf

enunciado: "La germinación es el proceso por el cual la semilla comienza a crecer una nueva planta."

explicacion: |
  Correcto, esa es la definición del proceso.
```

### 16 — Origen del alimento embrionario

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "basico"
  tags: ["semilla", "embrion"]

respuesta: falso
tipo: vf

enunciado: "La reserva de alimento inicial del embrión viene de afuera de la semilla, no de la semilla misma."

explicacion: |
  Falso. Viene de dentro de la propia semilla (endospermo o cotiledones).
```

### 17 — La flor y la polinización

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "intermedio"
  tags: ["flor", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "La flor produce semillas después de que ocurre la polinización."

explicacion: |
  Correcto: polinización → fecundación → formación de semilla.
```

### 18 — Transporte en el tallo

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "intermedio"
  tags: ["tallo", "transporte"]

respuesta: verdadero
tipo: vf

enunciado: "El tallo transporta agua y nutrientes entre la raíz y las hojas."

explicacion: |
  Correcto, es la vía de conexión entre ambos extremos de la planta.
```

### 19 — Plantas sin semillas (excepción)

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "avanzado"
  tags: ["excepciones"]

respuesta: verdadero
tipo: vf

enunciado: "No todas las plantas se reproducen por semillas (por ejemplo, los helechos se reproducen por esporas), aunque las semillas sean el método más común y estudiado en este nivel."

explicacion: |
  Correcto — este módulo se enfoca en el caso más común (plantas con semilla), pero hay excepciones en el reino vegetal.
```

### 20 — Por qué las hojas necesitan la raíz

```
metadata:
  materia: "biologia"
  tema: "partes_planta_germinacion"
  nivel: "intermedio"
  tags: ["integracion", "partes"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque las hojas fabrican el alimento por fotosíntesis, necesitan igual el agua que la raíz absorbe del suelo para poder hacer ese proceso."

explicacion: |
  Correcto. La fotosíntesis usa agua (y CO2) como materia prima — sin la raíz absorbiendo agua, las hojas no podrían fotosintetizar.
```
