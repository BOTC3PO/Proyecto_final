# Biología — Biotecnología: PCR, ADN recombinante, CRISPR (cuestionario, 24 preguntas VBLang)

> Temas: `BIOTEC1a/b/c`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 6 lotes concurrentes.
> Corregido a mano. Bug de esta tanda: `respuesta: 2^{ciclos}` — las
> llaves `{}` son sólo para interpolar texto en `enunciado`/`pasos`/
> `explicacion`; en `respuesta:` (una expresión, no texto) van sin
> llaves: `2^ciclos`.

---

### 1 — Concepto de PCR

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr", "adn"]

respuesta: verdadero
tipo: vf

enunciado: "La PCR permite hacer millones de copias de un fragmento específico de ADN."

explicacion: |
  Correcto. Es la técnica de amplificación de ADN más usada.
```

### 2 — Sensibilidad de la PCR

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr", "sensibilidad"]

respuesta: verdadero
tipo: vf

enunciado: "La PCR puede amplificar ADN partiendo de una cantidad mínima, incluso de una sola molécula."

explicacion: |
  Correcto, es extremadamente sensible.
```

### 3 — Ciclos térmicos en PCR

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr", "ciclos"]

respuesta: verdadero
tipo: vf

enunciado: "La PCR funciona con ciclos repetidos de calentamiento y enfriamiento."

explicacion: |
  Correcto, esos ciclos separan y vuelven a copiar la doble hélice.
```

### 4 — Cinética de la amplificación

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["pcr", "exponencial"]

respuesta: falso
tipo: vf

enunciado: "El crecimiento de las copias de ADN durante los ciclos de una PCR es lineal."

explicacion: |
  Falso, es exponencial: se duplica en cada ciclo.
```

### 5 — Significado de las siglas

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr", "terminologia"]

respuesta: "polimerasa"
tipo: completar
respuestas_validas:
  - "polimerasa"

enunciado: "La sigla PCR significa Reacción en Cadena de la ___."

explicacion: |
  Polymerase Chain Reaction.
```

### 6 — Uso de la PCR

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["pcr", "aplicaciones"]

variables:
  escenarios: [["diagnostico", "detectar si hay suficiente ADN de un virus o patogeno"], ["pruebas de paternidad", "comparar ADN entre personas"], ["medicina forense", "amplificar el poco ADN de una escena de crimen"]]
  idx: uno_de([0, 1, 2])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["detectar si hay suficiente ADN de un virus o patogeno", "comparar ADN entre personas", "amplificar el poco ADN de una escena de crimen"]

enunciado: "¿En qué consiste el uso de la PCR para {escenarios[idx][0]}?"

explicacion: |
  Para {escenarios[idx][0]}: {escenarios[idx][1]}.
```

### 7 — Crecimiento exponencial en PCR

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["pcr", "calculo"]

variables:
  ciclos: uno_de([1, 2, 3, 4])

respuesta: 2 ^ ciclos
tipo: input
tolerancia_abs: 0.01

enunciado: "Partiendo de 1 copia de ADN, si la PCR duplica en cada ciclo, ¿cuántas copias hay después de {ciclos} ciclos?"

pasos:
  - "N = 2^n, con n = {ciclos}"

explicacion: |
  2^{ciclos}.
```

### 8 — Aplicación forense de la PCR

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr", "forense"]

respuesta: verdadero
tipo: vf

enunciado: "La PCR es útil en medicina forense porque amplifica el poco ADN encontrado en una escena de crimen."

explicacion: |
  Correcto, permite obtener suficiente material para analizar.
```

### 9 — Construcción de ADN recombinante

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["adn_recombinante"]

respuesta: verdadero
tipo: vf

enunciado: "El ADN recombinante se construye cortando y pegando ADN de distintas fuentes."

explicacion: |
  Correcto, usando enzimas de corte y ligasas.
```

### 10 — Vectores de clonación

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["bacterias", "clonacion"]

respuesta: verdadero
tipo: vf

enunciado: "Para insertar un gen de interés en otro organismo, se suele usar una bacteria porque se reproduce rápido y es fácil de cultivar."

explicacion: |
  Correcto, las bacterias son el vector clásico.
```

### 11 — Expresión génica en organismos modificados

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["expresion_genica"]

respuesta: verdadero
tipo: vf

enunciado: "El organismo receptor de un gen insertado queda 'programado' para fabricar la proteína de ese gen."

explicacion: |
  Correcto, si tiene las secuencias reguladoras necesarias.
```

### 12 — Producción de insulina recombinante

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["insulina"]

respuesta: falso
tipo: vf

enunciado: "La insulina humana usada para tratar diabetes se extrae siempre de páncreas de cerdos y vacas."

explicacion: |
  Falso. Hoy se fabrica con bacterias modificadas con el gen humano de insulina.
```

### 13 — Edición de ADN con CRISPR

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["crispr"]

respuesta: verdadero
tipo: vf

enunciado: "CRISPR permite editar el ADN directamente, no sólo insertar un gen extra."

explicacion: |
  Correcto, permite cortes precisos para editar, eliminar o insertar material genético.
```

### 14 — El rol de la molécula guía

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["crispr", "arn_guia"]

respuesta: verdadero
tipo: vf

enunciado: "CRISPR usa una molécula guía que busca la secuencia exacta a editar."

explicacion: |
  Correcto, el ARN guía dirige la edición al lugar correcto.
```

### 15 — La enzima de corte

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["crispr", "cas9"]

respuesta: "Cas9"
tipo: completar
respuestas_validas:
  - "Cas9"

enunciado: "La proteína que corta el ADN en el punto indicado por la guía de CRISPR se llama ___."

explicacion: |
  Cas9, la "tijera molecular" del sistema.
```

### 16 — Precisión de la técnica

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["crispr", "precision"]

respuesta: falso
tipo: vf

enunciado: "CRISPR es una técnica menos precisa que el ADN recombinante clásico."

explicacion: |
  Falso, es más precisa: edita un punto exacto en vez de insertar al azar.
```

### 17 — Orden cronológico de la biotecnología

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["historia"]

respuesta: "PCR, ADN recombinante, CRISPR"
tipo: mc
opciones_explicitas: ["PCR, ADN recombinante, CRISPR", "CRISPR, PCR, ADN recombinante", "ADN recombinante, CRISPR, PCR", "no tienen un orden particular"]

enunciado: "¿Cuál es el orden cronológico de aparición de estas 3 técnicas?"

explicacion: |
  PCR (80s), ADN recombinante consolidado después, CRISPR-Cas9 mucho más reciente.
```

### 18 — Utilidad de la PCR en la cadena de técnicas

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["pcr"]

respuesta: verdadero
tipo: vf

enunciado: "La PCR es necesaria para obtener suficiente ADN con el que trabajar en otras técnicas."

explicacion: |
  Correcto, amplifica la cantidad de material disponible.
```

### 19 — ADN recombinante como demostración

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["adn_recombinante"]

respuesta: verdadero
tipo: vf

enunciado: "El ADN recombinante demostró que es posible modificar el material genético de un organismo insertando genes de otro."

explicacion: |
  Correcto.
```

### 20 — Precisión de CRISPR (en la secuencia)

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["crispr"]

respuesta: verdadero
tipo: vf

enunciado: "CRISPR permitió pasar de 'insertar genes en cualquier parte' (ADN recombinante clásico) a 'editar el punto exacto' del genoma."

explicacion: |
  Correcto, gracias al ARN guía de alta especificidad.
```

### 21 — Fundamentos de la biotecnología

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["adn", "fundamentos"]

respuesta: verdadero
tipo: vf

enunciado: "Las 3 técnicas (PCR, ADN recombinante, CRISPR) requieren conocer la estructura del ADN antes de poder entenderlas."

explicacion: |
  Correcto, todas operan sobre el ADN.
```

### 22 — Relación biotecnología y genética

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "basico"
  tags: ["genetica"]

respuesta: falso
tipo: vf

enunciado: "La biotecnología moderna es completamente independiente de la genética y el ADN."

explicacion: |
  Falso. Se basa directamente en la manipulación de la información genética.
```

### 23 — Función principal de cada técnica

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "intermedio"
  tags: ["tecnicas"]

variables:
  tabla: [["PCR", "copia/amplifica ADN"], ["ADN recombinante", "inserta un gen de un organismo en otro"], ["CRISPR", "edita el ADN en un punto exacto"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["copia/amplifica ADN", "inserta un gen de un organismo en otro", "edita el ADN en un punto exacto"]

enunciado: "¿Cuál es la función principal de {tabla[idx][0]}?"

explicacion: |
  {tabla[idx][0]}: {tabla[idx][1]}.
```

### 24 — Ética y CRISPR

```
metadata:
  materia: "biologia"
  tema: "biotecnologia_pcr_crispr"
  nivel: "avanzado"
  tags: ["etica"]

respuesta: verdadero
tipo: vf

enunciado: "La capacidad de cortar y editar ADN con CRISPR podría usarse tanto para corregir enfermedades genéticas como para otros fines controvertidos, lo que genera debate ético."

explicacion: |
  Correcto — ver ../transgenicos-bioetica/.
```
