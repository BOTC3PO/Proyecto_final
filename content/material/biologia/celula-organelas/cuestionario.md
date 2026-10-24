# Biología — Célula y organelas (cuestionario, 20 preguntas VBLang)

> Tema: `BB`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Unidad de la vida

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["celula", "teoria_celular"]

respuesta: verdadero
tipo: vf

enunciado: "La célula es la unidad básica de la vida."

explicacion: |
  La teoría celular establece que la célula es la unidad estructural, funcional y de origen de todos los seres vivos.
```

### 2 — Organismos unicelulares

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["unicelular", "clasificacion"]

respuesta: "unicelular"
tipo: mc
opciones_explicitas: ["unicelular", "pluricelular", "multicelular", "acelular"]

enunciado: "Un organismo formado por una sola célula se llama..."

explicacion: |
  Se llama unicelular (bacterias, protozoos).
```

### 3 — Organismos pluricelulares

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["pluricelular"]

respuesta: verdadero
tipo: vf

enunciado: "Las plantas y los animales son organismos pluricelulares."

explicacion: |
  Correcto, están compuestos por múltiples células especializadas.
```

### 4 — Clasificación de bacterias

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["bacterias"]

respuesta: falso
tipo: vf

enunciado: "Las bacterias son organismos pluricelulares complejos."

explicacion: |
  Falso. Son unicelulares procariotas.
```

### 5 — Característica de la célula procariota

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["procariota", "nucleo"]

respuesta: "no tener nucleo definido"
tipo: mc
opciones_explicitas: ["no tener nucleo definido", "tener nucleo definido", "no tener membrana", "no tener citoplasma"]

enunciado: "La célula procariota se caracteriza por..."

explicacion: |
  Su material genético está disperso en el citoplasma, sin membrana propia.
```

### 6 — El núcleo en células eucariotas

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["eucariota", "nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "La célula eucariota tiene el material genético encerrado en una membrana propia (el núcleo)."

explicacion: |
  Correcto, es la característica principal que la diferencia de la procariota.
```

### 7 — Clasificación de las bacterias

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["bacterias", "procariota"]

respuesta: "procariotas"
tipo: mc
opciones_explicitas: ["procariotas", "eucariotas", "ninguna de las dos", "ambas a la vez"]

enunciado: "Las bacterias son células..."

explicacion: |
  Son procariotas: estructura simple, sin núcleo definido.
```

### 8 — Células de plantas y animales

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["eucariota"]

respuesta: falso
tipo: vf

enunciado: "Las células de plantas y animales son procariotas."

explicacion: |
  Falso, son eucariotas.
```

### 9 — Función de las organelas

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "intermedio"
  tags: ["organelas"]

variables:
  datos: [["nucleo", "guarda el ADN y controla la actividad de la celula"], ["mitocondria", "produce energia"], ["ribosoma", "fabrica proteinas"], ["cloroplasto", "hace la fotosintesis"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["guarda el ADN y controla la actividad de la celula", "produce energia", "fabrica proteinas", "hace la fotosintesis"]

enunciado: "¿Cuál es la función de {datos[idx][0]}?"

explicacion: |
  La función de {datos[idx][0]} es: {datos[idx][1]}.
```

### 10 — El aparato de Golgi

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["golgi"]

respuesta: verdadero
tipo: vf

enunciado: "El aparato de Golgi empaqueta y distribuye proteínas."

explicacion: |
  Correcto, procesa, empaqueta y distribuye proteínas y lípidos.
```

### 11 — Retículo endoplasmático

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["reticulo"]

respuesta: verdadero
tipo: vf

enunciado: "El retículo endoplasmático transporta sustancias dentro de la célula."

explicacion: |
  Correcto, funciona como sistema de transporte y síntesis.
```

### 12 — Vacuolas en células

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["vacuola"]

respuesta: falso
tipo: vf

enunciado: "La vacuola es más grande en las células animales que en las vegetales."

explicacion: |
  Falso. Es mucho más grande en las vegetales.
```

### 13 — Pared celular y tipo celular

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["pared_celular"]

respuesta: verdadero
tipo: vf

enunciado: "La célula vegetal posee pared celular, mientras que la célula animal no la tiene."

explicacion: |
  Correcto, es una diferencia clave entre ambas.
```

### 14 — Presencia de cloroplastos

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["cloroplastos"]

respuesta: falso
tipo: vf

enunciado: "Los cloroplastos están presentes tanto en células animales como vegetales."

explicacion: |
  Falso, son exclusivos de células vegetales y algas.
```

### 15 — Función de la pared celular

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["pared_celular"]

respuesta: verdadero
tipo: vf

enunciado: "La pared celular da rigidez extra y protección, y está presente en plantas, hongos y bacterias, pero no en animales."

explicacion: |
  Correcto.
```

### 16 — Relación entre organelas

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "intermedio"
  tags: ["sistema_celular"]

respuesta: falso
tipo: vf

enunciado: "Cada organela funciona de forma totalmente aislada, sin relación con las demás."

explicacion: |
  Falso. Trabajan como sistema integrado (ej: retículo→Golgi para las proteínas).
```

### 17 — Función del ribosoma

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["ribosomas"]

respuesta: verdadero
tipo: vf

enunciado: "El ribosoma fabrica proteínas utilizando la información del ADN."

explicacion: |
  Correcto — ver ../adn-gen-proteina/.
```

### 18 — Membrana celular

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "basico"
  tags: ["membrana"]

respuesta: verdadero
tipo: vf

enunciado: "La membrana celular envuelve la célula y controla qué entra y sale de ella."

explicacion: |
  Correcto, es selectivamente permeable.
```

### 19 — Mitocondria como "central de energía"

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "intermedio"
  tags: ["mitocondria"]

respuesta: verdadero
tipo: vf

enunciado: "La mitocondria se conoce como la 'central de energía' de la célula porque produce la energía necesaria para sus procesos."

explicacion: |
  Correcto, mediante la respiración celular.
```

### 20 — Comparación integradora célula animal vs. vegetal

```
metadata:
  materia: "biologia"
  tema: "celula_organelas"
  nivel: "avanzado"
  tags: ["comparacion"]

respuesta: "pared celular, cloroplastos y vacuola grande central"
tipo: mc
opciones_explicitas: ["pared celular, cloroplastos y vacuola grande central", "núcleo y mitocondria", "membrana celular y ribosomas", "citoplasma y retículo endoplasmático"]

enunciado: "¿Cuáles son las 3 estructuras que tiene la célula vegetal y que la célula animal NO tiene?"

explicacion: |
  Núcleo, mitocondria, membrana, citoplasma, ribosomas y retículo están en ambas — lo exclusivo de la vegetal es pared celular, cloroplastos y la vacuola grande central.
```
