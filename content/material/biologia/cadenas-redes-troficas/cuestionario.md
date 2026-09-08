# Biología — Cadenas y redes tróficas (cuestionario, 24 preguntas VBLang)

> Tema: `BH`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Identificación de nivel trófico

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["niveles_troficos"]

variables:
  tabla: [["1", "productores/autotrofos"], ["2", "consumidores primarios/herbivoros"], ["3", "consumidores secundarios/carnivoros que comen herbivoros"], ["4", "consumidores terciarios/carnivoros que comen carnivoros"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["productores/autotrofos", "consumidores primarios/herbivoros", "consumidores secundarios/carnivoros que comen herbivoros", "consumidores terciarios/carnivoros que comen carnivoros"]

enunciado: "Un organismo que ocupa el nivel trófico {tabla[idx][0]}, ¿cómo se le denomina?"

explicacion: |
  El nivel trófico {tabla[idx][0]} corresponde a: {tabla[idx][1]}.
```

### 2 — Productores y nivel inicial

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["productores"]

respuesta: verdadero
tipo: vf

enunciado: "Los productores ocupan el nivel trófico 1."

explicacion: |
  Correcto, inician la cadena.
```

### 3 — El conejo en la cadena

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["consumidores"]

respuesta: verdadero
tipo: vf

enunciado: "Un conejo que se alimenta de pasto es un consumidor primario."

explicacion: |
  Correcto, se alimenta directo de un productor.
```

### 4 — El zorro y su nivel

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["consumidores"]

respuesta: falso
tipo: vf

enunciado: "Un zorro que come conejos es un consumidor primario, igual que el conejo."

explicacion: |
  Falso, es consumidor secundario (come al herbívoro).
```

### 5 — Definición de cadena trófica

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "Una cadena trófica es una secuencia lineal de quién come a quién."

explicacion: |
  Correcto, representa un flujo lineal de energía.
```

### 6 — Dirección del flujo de energía

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["flujo_energia"]

respuesta: verdadero
tipo: vf

enunciado: "En pasto → conejo → zorro, cada flecha indica la dirección del flujo de energía."

explicacion: |
  Correcto, del organismo comido hacia el que come.
```

### 7 — Diferencia entre cadena y red

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["red_trofica"]

respuesta: falso
tipo: vf

enunciado: "Una cadena trófica se caracteriza por presentar ramificaciones y cruces complejos entre múltiples especies."

explicacion: |
  Falso, eso describe una red trófica. La cadena es lineal.
```

### 8 — Ejemplo de secuencia

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["ejemplos"]

respuesta: "cadena"
tipo: completar
respuestas_validas:
  - "cadena"

enunciado: "La secuencia pasto → conejo → zorro → águila es un ejemplo de ___ trófica."

explicacion: |
  Es lineal y unidireccional: una cadena trófica.
```

### 9 — Diversidad alimentaria

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["alimentacion"]

respuesta: verdadero
tipo: vf

enunciado: "En la realidad, casi ningún organismo come una sola cosa o es comido por un solo depredador."

explicacion: |
  Correcto, la mayoría tiene dietas más variadas.
```

### 10 — Definición de red trófica

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["red_trofica"]

respuesta: verdadero
tipo: vf

enunciado: "Una red trófica es el conjunto de varias cadenas tróficas entrecruzadas."

explicacion: |
  Correcto, representa mejor la complejidad de un ecosistema real.
```

### 11 — Estabilidad del ecosistema

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["estabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Una red trófica es más estable que una cadena aislada, porque hay rutas alternativas si desaparece una especie."

explicacion: |
  Correcto, la redundancia da resiliencia.
```

### 12 — Impacto en la cadena trófica

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["flujo_energia"]

respuesta: falso
tipo: vf

enunciado: "En una cadena trófica simple, si se elimina un eslabón del medio, esto no afecta el flujo de energía hacia los niveles superiores."

explicacion: |
  Falso, corta el flujo hacia los niveles siguientes.
```

### 13 — Función de los descomponedores

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["descomponedores"]

respuesta: verdadero
tipo: vf

enunciado: "Los descomponedores (hongos, bacterias) se alimentan de materia orgánica muerta."

explicacion: |
  Correcto.
```

### 14 — Ciclo de nutrientes

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["nutrientes"]

respuesta: verdadero
tipo: vf

enunciado: "Los descomponedores devuelven nutrientes simples al ambiente, disponibles de nuevo para los productores."

explicacion: |
  Correcto, cierran el ciclo de la materia.
```

### 15 — Importancia de la descomposición

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["ciclo_nutrientes"]

respuesta: verdadero
tipo: vf

enunciado: "Sin descomponedores, los nutrientes quedarían atrapados para siempre en los cuerpos de los organismos muertos."

explicacion: |
  Correcto, el ciclo de la materia se detendría.
```

### 16 — Nivel trófico de los descomponedores

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["clasificacion"]

respuesta: falso
tipo: vf

enunciado: "Los descomponedores encajan exactamente en el nivel trófico 2, igual que los herbívoros."

explicacion: |
  Falso, no encajan en los niveles 1-4 tradicionales; procesan materia de cualquier nivel.
```

### 17 — Dirección del flujo de energía (flecha)

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["flujo_energia"]

respuesta: verdadero
tipo: vf

enunciado: "La flecha en un diagrama trófico indica la dirección en la que se mueve la energía."

explicacion: |
  Correcto.
```

### 18 — Sentido de la flecha (presa a depredador)

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["flujo_energia"]

respuesta: verdadero
tipo: vf

enunciado: "La flecha va desde la presa (que tenía la energía) hacia el depredador (que la absorbe al comerla)."

explicacion: |
  Correcto.
```

### 19 — Significado de la flecha (no jerarquía)

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "La flecha en un diagrama trófico indica jerarquía de poder o 'quién manda', no flujo de energía."

explicacion: |
  Falso, indica flujo de energía, no dominancia.
```

### 20 — Dirección en un ejemplo práctico

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["ejemplos"]

respuesta: "hacia el conejo, porque la energia va del pasto al conejo"
tipo: mc
opciones_explicitas: ["hacia el conejo, porque la energia va del pasto al conejo", "hacia el pasto", "no tiene direccion", "indica quien es mas fuerte"]

enunciado: "En pasto → conejo, ¿hacia dónde apunta la flecha?"

explicacion: |
  La energía fluye del productor al consumidor: la flecha apunta hacia el conejo.
```

### 21 — Nivel trófico de un organismo dado

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["ejemplos"]

variables:
  escenario: [["pasto", "productor"], ["conejo", "consumidor primario"], ["zorro", "consumidor secundario"], ["hongo descomponiendo un tronco", "descomponedor"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["productor", "consumidor primario", "consumidor secundario", "descomponedor"]

enunciado: "¿Cuál es el nivel trófico de {escenario[idx][0]}?"

explicacion: |
  {escenario[idx][0]} es: {escenario[idx][1]}.
```

### 22 — El ser humano en la red trófica

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["ser_humano"]

respuesta: verdadero
tipo: vf

enunciado: "El ser humano puede ocupar distintos niveles tróficos según su dieta."

explicacion: |
  Correcto, es omnívoro: primario si come plantas, secundario o más si come carne.
```

### 23 — Red vs. cadena trófica

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "basico"
  tags: ["redes_troficas"]

respuesta: verdadero
tipo: vf

enunciado: "Una red trófica representa mejor un ecosistema real que una sola cadena trófica aislada."

explicacion: |
  Correcto, es un modelo más realista.
```

### 24 — Flujo de energía y niveles tróficos

```
metadata:
  materia: "biologia"
  tema: "cadenas_redes_troficas"
  nivel: "intermedio"
  tags: ["energia"]

respuesta: verdadero
tipo: vf

enunciado: "Los niveles tróficos y el flujo de energía están directamente conectados: cada nivel recibe menos energía que el anterior."

explicacion: |
  Correcto — ver ../flujo-materia-energia/ (regla del 10%).
```
