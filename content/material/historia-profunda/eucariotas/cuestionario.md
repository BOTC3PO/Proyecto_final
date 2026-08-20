# Historia Profunda — Eucariotas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — La distinción fundamental

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["celulas", "nucleo"]

tipo: mc
respuesta: "Presencia de núcleo definido"
opciones_explicitas: ["Presencia de núcleo definido", "Presencia de pared celular de peptidoglicano", "Ausencia de organelas", "ADN circular libre"]

enunciado: "La principal característica que define a una célula eucariota frente a una procariota es la ___."

explicacion: |
  Las células eucariotas poseen un núcleo rodeado por una membrana nuclear que contiene el material genético, mientras que las procariotas tienen el ADN disperso en el citoplasma.
```

### 2 — Componentes celulares

```
metadata:
  materia: "biologia"
  tema: "organelas_celulares"
  nivel: "basico"
  tags: ["organelas", "membrana"]

tipo: completar
respuestas_validas:
  - "organelas membranosas"

enunciado: "A diferencia de los procariotas, las células eucariotas presentan un sistema complejo de ___."

explicacion: |
  Los eucariotas cuentan con compartimentos internos delimitados por membranas, como mitocondrias, retículo endoplasmático y aparato de Golgi.
```

### 3 — Comparativa de estructuras

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["estructura", "comparacion"]

variables:
  escenario: uno_de([["mitocondria", "respiración celular"], ["cloroplasto", "fotosíntesis"], ["lisosoma", "digestión celular"]])

tipo: mc
opciones_explicitas: ["respiración celular", "fotosíntesis", "digestión celular", "transporte de proteínas"]

enunciado: "En una célula eucariota, la función de {escenario[0]} está asociada a la ___."

respuesta: escenario[1]

explicacion: |
  La estructura {escenario[0]} es una organela membranosa cuya función principal es la {escenario[1]}.
```

### 4 — Orden de complejidad

```
metadata:
  materia: "biologia"
  tema: "evolucion_celular"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

tipo: ordenar
opciones_explicitas: ["ADN libre en el citoplasma", "Formación de la membrana nuclear", "Aparición de organelas membranosas", "Organismo multicelular complejo"]

enunciado: "Ordena cronológicamente la complejidad estructural desde una célula procariota simple hasta un organismo eucariota complejo:"

explicacion: |
  La evolución celular implicó primero la compartimentación del material genético, luego la especialización de organelas y finalmente la organización multicelular.
respuesta_orden: ["ADN libre en el citoplasma", "Formación de la membrana nuclear", "Aparición de organelas membranosas", "Organismo multicelular complejo"]
```

### 5 — El núcleo celular

```
metadata:
  materia: "biologia"
  tema: "nucleo_eucariota"
  nivel: "basico"
  tags: ["nucleo", "membrana"]

tipo: vf

enunciado: "La presencia de una membrana nuclear que delimita el material genético es una característica exclusiva de las células eucariotas."

respuesta: verdadero

explicacion: |
  Es verdadero. Los procariotas no poseen una envoltura nuclear que separe el ADN del resto del citoplasma.
```

### 6 — Origen de las mitocondrias

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "basico"
  tags: ["eucariotas", "mitocondrias", "endosimbiosis"]

tipo: mc
opciones_explicitas: ["una bacteria aeróbica", "un virus", "un fragmento de núcleo", "un ribosoma"]
respuesta: "una bacteria aeróbica"

enunciado: "Según la teoría endosimbiótica, las mitocondrias se originaron a partir de la integración de una ___ que era capaz de realizar la respiración celular."

explicacion: |
  La teoría endosimbiótica propone que las mitocondrias fueron originalmente bacterias aeróbicas que fueron fagocitadas por una célula huésped, estableciendo una relación simbiótica.
```

### 7 — El proceso de endosimbiosis

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "intermedio"
  tags: ["evolucion", "endosimbiosis"]

variables:
  escenario: uno_de([["bacteria aeróbica", "mitocondria"], ["bacteria fotosintética", "cloroplasto"]])

tipo: completar
respuestas_validas:
  - escenario[0]

enunciado: "Si una célula eucariota primitiva engloba a una ___, el resultado evolutivo es la formación de un(a) ___."

explicacion: |
  El proceso de endosimbiosis implica que un organismo complejo absorbe a uno más pequeño que, en lugar de ser digerido, se convierte en un orgánulo especializado.
```

### 8 — Evidencia del origen bacteriano

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "avanzado"
  tags: ["evidencia", "adn", "membrana"]

tipo: mc
opciones_explicitas: ["Poseen su propio ADN circular y ribosomas similares a los procariotas", "Tienen un núcleo rodeado de membrana", "Se originan en el retículo endoplasmático", "No poseen membrana propia"]
respuesta: "Poseen su propio ADN circular y ribosomas similares a los procariotas"
enunciado: "Una de las principales evidencias de que los cloroplastos y mitocondrias fueron bacterias libres es que:"
explicacion: |
  Tanto mitocondrias como cloroplastos poseen su propio material genético en forma de ADN circular, muy similar al de las bacterias actuales, y sus ribosomas son de tipo procariota.
```

### 9 — Secuencia evolutiva de la célula eucariota

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

tipo: ordenar
opciones_explicitas: ["Célula procariota con membrana flexible", "Fagocitosis de una bacteria aeróbica", "Establecimiento de simbiosis", "Célula eucariota con mitocondrias"]

enunciado: "Ordene los eventos que explican la aparición de la célula eucariota con mitocondrias:"

explicacion: |
  La evolución fue un proceso gradual: primero la célula huésped, luego la captura de la bacteria, la convivencia simbiótica y finalmente la especialización del orgánulo.
respuesta_orden: ["Célula procariota con membrana flexible", "Fagocitosis de una bacteria aeróbica", "Establecimiento de simbiosis", "Célula eucariota con mitocondrias"]
```

### 10 — El papel de los cloroplastos

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosa"
  nivel: "basico"
  tags: ["cloroplastos", "fotosintesis"]

tipo: vf
enunciado: "Los cloroplastos se originaron a partir de la endosimbiosis de una bacteria fotosintética (cianobacteria)."
respuesta: verdadero
explicacion: |
  Es verdadero. La capacidad de realizar fotosíntesis en las plantas y algas se debe a la incorporación de cianobacterias que se convirtieron en cloroplastos.
```

### 11 — Origen mitocondrial

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "basico"
  tags: ["mitocondria", "evolucion"]

variables:
  escenario: uno_de([["ADN circular", "ADN lineal"], ["fisión binaria", "mitosis"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["ADN circular", "ADN lineal", "fisión binaria", "mitosis"]

enunciado: "La evidencia de que las mitocondrias fueron bacterias es que poseen un tipo de ADN ___ y se reproducen mediante ___."

explicacion: |
  Las mitocondrias poseen ADN circular y se dividen por fisión binaria, características típicas de las procariotas.
```

### 12 — Evidencia genética

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "intermedio"
  tags: ["adn", "cloroplastos"]

variables:
  tipo_adn: uno_de(["circular", "lineal"])

respuesta: tipo_adn
tipo: completar
respuestas_validas:
  - "circular"
  - "lineal"

enunciado: "A diferencia del ADN del núcleo celular, el ADN de los cloroplastos es de forma ___."

explicacion: |
  El ADN de los organelos semiautónomos es circular, similar al de las bacterias actuales.
```

### 13 — El proceso de división

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "basico"
  tags: ["reproduccion", "organelos"]

respuesta: "fisión binaria"
tipo: completar
respuestas_validas:
  - "fisión binaria"
  - "mitosis"
  - "meiosis"

enunciado: "El mecanismo de reproducción de las mitocondrias es la ___."

explicacion: |
  Las mitocondrias no se crean de la nada, sino que se dividen mediante fisión binaria, igual que los procariontes.
```

### 14 — Comparativa estructural

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "intermedio"
  tags: ["membrana", "evolucion"]

variables:
  membrana_tipo: uno_de(["doble", "simple"])

respuesta: membrana_tipo
tipo: mc
opciones_explicitas: ["doble", "simple"]

enunciado: "La teoría endosimbiótica sugiere que los organelos como los cloroplastos poseen una ___ membrana, la cual sería el remanente de la membrana de la bacteria original."

explicacion: |
  La presencia de una doble membrana es una evidencia clave de la captura de una célula por otra.
```

### 15 — Secuencia evolutiva

```
metadata:
  materia: "biologia"
  tema: "teoria_endosimbiosis"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

respuesta_orden: ["Célula procariota", "Fagocitosis", "Célula eucariota con mitocondria"]
tipo: ordenar
opciones_explicitas: ["Célula procariota", "Fagocitosis", "Célula eucariota con mitocondria"]

enunciado: "Ordena los eventos que explican la aparición de la mitocondria según la teoría endosimbiótica:"

pasos:
  - "Una bacteria aeróbica es ingerida por una célula hospedadora."
  - "Se establece una relación de simbiosis."
  - "La bacteria se convierte en un organelo permanente."

explicacion: |
  El proceso implica la ingestión (fagocitosis) de una bacteria que, al no ser digerida, establece una simbiosis que da origen al organelo.
```

### 16 — Origen temporal de los eucariotas

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["evolucion", "cronologia"]

respuesta: "1500 millones de años"
tipo: mc
opciones_explicitas: ["3800 millones de años", "2000 millones de años", "1500 millones de años", "500 millones de años"]

enunciado: "Los procariotas aparecieron hace aproximadamente 3800 millones de años, mientras que los eucariotas aparecieron mucho después, hace unos ___."

explicacion: |
  La vida procariota es mucho más antigua, con registros de hace unos 3800 millones de años, mientras que la complejidad celular eucariota surgió mucho después.
```

### 17 — Comparativa de antigüedad

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: "mucho después"
tipo: completar
respuestas_validas:
  - "mucho después"
  - "antes"
  - "al mismo tiempo"

enunciado: "En la línea de tiempo de la vida, los eucariotas aparecieron ___ que los procariotas."

explicacion: |
  Los procariotas dominaron la Tierra durante casi 2000 millones de años antes de la aparición de las células eucariotas.
```

### 18 — Cronología evolutiva

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "intermedio"
  tags: ["ordenar", "evolucion"]

opciones_explicitas: ["Aparición de procariotas", "Aparición de eucariotas", "Aparición de organismos multicelulares"]
respuesta_orden: ["Aparición de procariotas", "Aparición de eucariotas", "Aparición de organismos multicelulares"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes hitos biológicos, desde el más antiguo al más reciente:"

explicacion: |
  Primero aparecieron las células procariotas simples, luego las eucariotas con núcleo, y finalmente la multicelularidad compleja.
```

### 19 — Estimación de la brecha temporal

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "avanzado"
  tags: ["calculo", "tiempo"]

variables:
  t_proc: 3800
  t_euc: 1750

respuesta: t_proc - t_euc
tipo: completar
tolerancia_abs: 100

enunciado: "Si los procariotas aparecieron hace {t_proc} millones de años y los eucariotas hace {t_euc} millones de años, ¿cuántos millones de años de ventaja temporal tuvieron los procariotas sobre los eucariotas?"

explicacion: |
  La diferencia es de {t_proc - t_euc} millones de años.
```

### 20 — Verdad o Falso: Aparición de la complejidad

```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["logica"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que los eucariotas y los procariotas aparecieron en la Tierra en el mismo periodo geológico inicial?"

explicacion: |
  Es falso. Los procariotas precedieron a los eucariotas por un margen de aproximadamente 2000 millones de años.
```

### 21 — Clasificación celular básica

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["celulas", "nucleo"]

variables:
  datos: [["presencia de nucleo definido", "eucariota"], ["ausencia de nucleo definido", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si una célula presenta {datos[idx][0]}, se trata de una célula tipo ___."

explicacion: |
  Las células eucariotas se caracterizan por tener su material genético rodeado por una membrana nuclear, mientras que las procariotas lo tienen libre en el citoplasma.
```

### 22 — Organelos membranosos

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "basico"
  tags: ["organelos", "mitocondria"]

variables:
  datos: [["mitocondria", "eucariota"], ["ribosomas sin membrana", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "La presencia de {datos[idx][0]} es una característica propia de la célula ___."

explicacion: |
  Los organelos membranosos como las mitocondrias son exclusivos de las células eucariotas. Las procariotas carecen de compartimentos internos delimitados por membranas.
```

### 23 — Complejidad estructural

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["estructura", "complejidad"]

variables:
  datos: [["organelos complejos", "eucariota"], ["estructura simple", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "eucariota"
  - "procariota"

enunciado: "Una célula con {datos[idx][0]} se clasifica como ___."

explicacion: |
  La complejidad estructural y la compartimentación celular son los rasgos distintivos de los organismos eucariotas.
```

### 24 — Tamaño y escala

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "intermedio"
  tags: ["tamaño", "escala"]

variables:
  datos: [["10-100 micrometros", "eucariota"], ["1-5 micrometros", "procariota"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si observamos una célula con un diámetro de {datos[idx][0]}, estamos ante una célula ___."

explicacion: |
  Las células eucariotas son generalmente mucho más grandes (10-100 µm) que las procariotas (1-5 µm) debido a su mayor complejidad interna.
```

### 25 — Secuencia evolutiva

```
metadata:
  materia: "biologia"
  tema: "eucariotas_vs_procariotas"
  nivel: "avanzado"
  tags: ["evolucion", "linaje"]

variables:
  orden: ["procariota", "eucariota"]
  idx: uno_de([0, 1])

respuesta_orden: orden

tipo: ordenar
opciones_explicitas: ["procariota", "eucariota"]

enunciado: "Ordena los tipos celulares según la aparición evolutiva (de la más antigua a la más reciente):"

explicacion: |
  Las células procariotas aparecieron primero en la historia de la vida, seguidas por la aparición de las células eucariotas mediante procesos como la endosimbiosis.
```
