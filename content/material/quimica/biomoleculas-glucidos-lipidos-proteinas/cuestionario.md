# Química — Biomoléculas: glúcidos, lípidos, proteínas (cuestionario, 20 preguntas VBLang)

> Temas: `QUa/b/c`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Estructura de los glúcidos

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["glucidos", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "Los glúcidos poseen múltiples grupos hidroxilo (-OH) y un grupo carbonilo (C=O) en su estructura."

explicacion: |
  Los glúcidos se caracterizan por un carbono con grupo carbonilo (aldehído o cetona) y varios hidroxilos.
```

### 2 — Clasificación de glúcidos

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["clasificacion", "glucidos"]

variables:
  escenario: [["monosacarido", "glucosa"], ["disacarido", "sacarosa"], ["polisacarido", "almidon"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["glucosa", "sacarosa", "almidon"]

enunciado: "¿Cuál es un ejemplo de {escenario[idx][0]}?"

explicacion: |
  Un ejemplo de {escenario[idx][0]} es {escenario[idx][1]}.
```

### 3 — Reserva energética animal

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["glucogeno", "reserva_energetica"]

respuesta: verdadero
tipo: vf

enunciado: "El glucógeno es la molécula de reserva de energía de los glúcidos en los animales."

explicacion: |
  El glucógeno es un polisacárido de reserva, principalmente en hígado y músculos.
```

### 4 — Función de la celulosa

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["celulosa", "almidon", "funcion"]

respuesta: falso
tipo: vf

enunciado: "La celulosa cumple una función energética en las plantas, igual que el almidón."

explicacion: |
  Falso. El almidón es reserva energética; la celulosa es estructural (pared celular).
```

### 5 — Función de los glúcidos

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["funcion", "energia"]

respuesta: "energetica"
tipo: completar
respuestas_validas:
  - "energetica"
  - "energética"

enunciado: "La función principal de los glúcidos es la ___ rápida."

explicacion: |
  Los glúcidos son la fuente de energía inmediata para el metabolismo celular.
```

### 6 — Hidrofobicidad de los lípidos

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["lipidos", "solubilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Los lípidos no se disuelven en agua: son moléculas hidrofóbicas."

explicacion: |
  Al ser moléculas no polares, no forman puentes de hidrógeno con el agua.
```

### 7 — Composición de un triglicérido

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["lipidos", "trigliceridos"]

respuesta: "grasos"
tipo: completar
respuestas_validas:
  - "grasos"

enunciado: "Un triglicérido está formado por 1 glicerol y 3 ácidos ___."

explicacion: |
  Los triglicéridos son ésteres de glicerol con 3 ácidos grasos.
```

### 8 — Estructura de los fosfolípidos

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["lipidos", "membrana_celular"]

respuesta: verdadero
tipo: vf

enunciado: "Los fosfolípidos forman las membranas celulares, con cabeza hidrofílica y colas hidrofóbicas."

explicacion: |
  Su carácter anfipático hace que se organicen en bicapa, colas hacia adentro, cabezas hacia el medio acuoso.
```

### 9 — Densidad energética de los lípidos

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["lipidos", "energia"]

respuesta: falso
tipo: vf

enunciado: "Los lípidos almacenan menos energía por gramo que los glúcidos."

explicacion: |
  Falso. Los lípidos aportan ~9 kcal/g, los glúcidos ~4 kcal/g: los lípidos son más densos energéticamente.
```

### 10 — Naturaleza de las proteínas

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["proteinas", "aminoacidos"]

respuesta: verdadero
tipo: vf

enunciado: "Las proteínas son cadenas de aminoácidos unidos por enlaces peptídicos."

explicacion: |
  Correcto. Los aminoácidos forman largas cadenas polipeptídicas vía enlace peptídico.
```

### 11 — Diversidad de aminoácidos

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["aminoacidos", "proteinas"]

respuesta: verdadero
tipo: vf

enunciado: "Existen 20 aminoácidos distintos que se combinan para formar las proteínas."

explicacion: |
  Correcto: 20 aminoácidos estándar componen las proteínas.
```

### 12 — Funciones proteicas

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["funciones", "proteinas"]

variables:
  escenario: [["estructural", "colágeno"], ["transporte", "hemoglobina"], ["enzimática", "cataliza reacciones"], ["defensa", "anticuerpos"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["colágeno", "hemoglobina", "cataliza reacciones", "anticuerpos"]

enunciado: "¿Cuál es un ejemplo de proteína con función {escenario[idx][0]}?"

explicacion: |
  La proteína con función {escenario[idx][0]} es {escenario[idx][1]}.
```

### 13 — Función energética de las proteínas

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["metabolismo", "proteinas"]

respuesta: falso
tipo: vf

enunciado: "A diferencia de glúcidos y lípidos, las proteínas son principalmente la fuente de combustible energético del organismo."

explicacion: |
  Falso. Su función principal es estructural, enzimática, de transporte o defensa — glúcidos y lípidos son las fuentes de energía primarias.
```

### 14 — Unidad básica de biomoléculas

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["biomoleculas", "monomeros"]

variables:
  escenario: [["glucidos", "monosacarido"], ["lipidos", "glicerol y acidos grasos"], ["proteinas", "aminoacido"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["monosacarido", "glicerol y acidos grasos", "aminoacido", "nucleotido"]

enunciado: "¿Cuál es la unidad básica de construcción de los {escenario[idx][0]}?"

explicacion: |
  La unidad básica de {escenario[idx][0]} es: {escenario[idx][1]}.
```

### 15 — Tipos de enlaces químicos

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["enlaces", "biomoleculas"]

variables:
  escenario: [["glucidos", "glucosidico"], ["lipidos", "ester"], ["proteinas", "peptidico"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["glucosidico", "ester", "peptidico", "ionico"]

enunciado: "¿Qué tipo de enlace une a los monómeros de {escenario[idx][0]}?"

explicacion: |
  El enlace característico de {escenario[idx][0]} es el {escenario[idx][1]}.
```

### 16 — Composición de la sacarosa

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "basico"
  tags: ["glucidos", "sacarosa"]

respuesta: verdadero
tipo: vf

enunciado: "La sacarosa (azúcar de mesa) está formada por glucosa y fructosa unidas."

explicacion: |
  Verdadero. La sacarosa es un disacárido de glucosa + fructosa.
```

### 17 — Formación del enlace peptídico

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["proteinas", "enlace_peptidico"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace peptídico se forma entre un grupo amino y un grupo carboxilo, con pérdida de una molécula de agua."

explicacion: |
  Verdadero, es una síntesis por deshidratación.
```

### 18 — Sabor dulce y estructura química

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "avanzado"
  tags: ["glucidos", "aplicacion"]

respuesta: "sus grupos hidroxilo, que interactúan con los receptores de dulzura de la lengua"
tipo: mc
opciones_explicitas: ["sus grupos hidroxilo, que interactúan con los receptores de dulzura de la lengua", "su color blanco", "su temperatura de fusión", "que siempre son sólidos a temperatura ambiente"]

enunciado: "¿Qué característica estructural de los monosacáridos y disacáridos se relaciona con su sabor dulce?"

explicacion: |
  Los múltiples grupos -OH de los glúcidos son claves para que encajen en los receptores de sabor dulce.
```

### 19 — Membranas celulares: por qué doble capa

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "avanzado"
  tags: ["lipidos", "membrana_celular"]

respuesta: verdadero
tipo: vf

enunciado: "Los fosfolípidos forman una bicapa (doble capa) en las membranas porque así las colas hidrofóbicas quedan protegidas del agua, tanto de adentro como de afuera de la célula."

explicacion: |
  Correcto. Las cabezas hidrofílicas miran hacia el agua (intra y extracelular), y las colas hidrofóbicas quedan resguardadas en el medio.
```

### 20 — Proteínas como enzimas

```
metadata:
  materia: "quimica"
  tema: "biomoleculas_glucidos_lipidos_proteinas"
  nivel: "intermedio"
  tags: ["proteinas", "enzimas"]

respuesta: verdadero
tipo: vf

enunciado: "Las enzimas, que aceleran reacciones químicas en los seres vivos, son en su mayoría proteínas."

explicacion: |
  Correcto. La función enzimática (catalítica) es una de las funciones más importantes de las proteínas.
```
