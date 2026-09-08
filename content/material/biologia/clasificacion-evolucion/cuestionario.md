# Biología — Clasificación y evolución (cuestionario, 20 preguntas VBLang)

> Tema: `BJ`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Especificidad de la especie

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["taxonomia", "especie"]

respuesta: verdadero
tipo: vf

enunciado: "La especie es la categoría taxonómica más específica de la jerarquía biológica."

explicacion: |
  Correcto, los individuos de una misma especie pueden reproducirse entre sí y dejar descendencia fértil.
```

### 2 — Relación reino-especie

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["taxonomia", "reino"]

respuesta: falso
tipo: vf

enunciado: "El reino es una categoría taxonómica más específica que la especie."

explicacion: |
  Falso. El reino es mucho más amplio: contiene múltiples filos, clases, órdenes y especies.
```

### 3 — Comparación de jerarquías

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "intermedio"
  tags: ["taxonomia", "jerarquia"]

variables:
  datos: [["especie", "genero"], ["familia", "orden"], ["clase", "filo"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["especie", "genero", "familia", "orden", "clase", "filo"]

enunciado: "Entre {datos[idx][0]} y {datos[idx][1]}, ¿cuál es la categoría más general?"

explicacion: |
  {datos[idx][1]} engloba a {datos[idx][0]}, así que es la más general.
```

### 4 — Orden taxonómico

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "intermedio"
  tags: ["taxonomia", "jerarquia"]

respuesta: "dominio"
tipo: completar
respuestas_validas:
  - "dominio"

enunciado: "El orden de la jerarquía taxonómica de más específica a más general es: especie, género, familia, orden, clase, filo, reino y ___."

explicacion: |
  El dominio es la categoría más amplia, por encima del reino.
```

### 5 — Nomenclatura binomial

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["nomenclatura"]

respuesta: verdadero
tipo: vf

enunciado: "Cada especie tiene un nombre científico compuesto por dos partes: el género y el epíteto específico."

explicacion: |
  Correcto, es la nomenclatura binomial de Linneo.
```

### 6 — Identificación de especies

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["homo_sapiens"]

respuesta: verdadero
tipo: vf

enunciado: "El nombre científico Homo sapiens corresponde al ser humano."

explicacion: |
  Correcto, es el nombre científico universal de nuestra especie.
```

### 7 — Universalidad del nombre científico

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "intermedio"
  tags: ["nomenclatura", "universalidad"]

respuesta: falso
tipo: vf

enunciado: "Los nombres científicos cambian según el idioma o la región, igual que los nombres comunes."

explicacion: |
  Falso, son iguales en cualquier idioma para evitar confusiones.
```

### 8 — Análisis de nombre científico

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["panthera_leo"]

respuesta: "Panthera"
tipo: mc
opciones_explicitas: ["Panthera", "leo", "ambas", "ninguna"]

enunciado: "En Panthera leo, ¿cuál palabra representa el género?"

explicacion: |
  La primera palabra del nombre binomial siempre es el género.
```

### 9 — Definición de evolución

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "La evolución se define como el cambio en las características heredables de una población a lo largo de las generaciones."

explicacion: |
  Correcto, es la definición central de evolución.
```

### 10 — Nivel de la evolución

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["poblacion"]

respuesta: falso
tipo: vf

enunciado: "La evolución es un proceso que ocurre a nivel de un individuo aislado, no de una población."

explicacion: |
  Falso, ocurre a nivel de población.
```

### 11 — Evolución individual

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["genetica"]

respuesta: falso
tipo: vf

enunciado: "Un individuo puede evolucionar durante su propia vida, cambiando sus genes para adaptarse al entorno."

explicacion: |
  Falso, nace con las características que tiene; la evolución es a nivel poblacional.
```

### 12 — Temporalidad de la evolución

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["tiempo"]

respuesta: verdadero
tipo: vf

enunciado: "La evolución es un proceso que ocurre a lo largo de muchas generaciones, no de un día para el otro."

explicacion: |
  Correcto.
```

### 13 — Evidencia de la evolución

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "intermedio"
  tags: ["evidencias"]

variables:
  escenario: [["fosiles", "cambios graduales de formas de vida a lo largo del tiempo geologico"], ["anatomia comparada", "estructuras homologas que sugieren un ancestro comun"], ["embriologia comparada", "embriones de especies distintas se parecen mas entre si de jovenes que de adultos"], ["biologia molecular", "comparar ADN muestra que tan emparentadas estan las especies"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["cambios graduales de formas de vida a lo largo del tiempo geologico", "estructuras homologas que sugieren un ancestro comun", "embriones de especies distintas se parecen mas entre si de jovenes que de adultos", "comparar ADN muestra que tan emparentadas estan las especies"]

enunciado: "¿Qué muestra la evidencia de {escenario[idx][0]}?"

explicacion: |
  {escenario[idx][0]} muestra: {escenario[idx][1]}.
```

### 14 — Estructuras homólogas

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["anatomia", "homologia"]

respuesta: verdadero
tipo: vf

enunciado: "Las estructuras homólogas tienen el mismo origen evolutivo pero distinta función."

explicacion: |
  Correcto, comparten estructura básica por un ancestro común.
```

### 15 — Esquema óseo en mamíferos

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["anatomia"]

respuesta: verdadero
tipo: vf

enunciado: "El brazo humano, el ala del murciélago y la aleta de la ballena tienen el mismo esquema óseo básico."

explicacion: |
  Correcto, son homólogos.
```

### 16 — Similitud de ADN y parentesco

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "intermedio"
  tags: ["genetica", "molecular"]

respuesta: verdadero
tipo: vf

enunciado: "Más similitud de ADN entre dos especies indica un ancestro común más reciente."

explicacion: |
  Correcto, menos tiempo desde la divergencia significa menos mutaciones acumuladas distintas.
```

### 17 — Importancia de la taxonomía

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["taxonomia"]

respuesta: verdadero
tipo: vf

enunciado: "La clasificación taxonómica ayuda a organizar y comunicar sobre millones de especies distintas."

explicacion: |
  Correcto.
```

### 18 — Alcance del módulo

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["mecanismos"]

respuesta: verdadero
tipo: vf

enunciado: "Los mecanismos concretos de cómo ocurre la evolución (selección natural, deriva genética, especiación) se desarrollan en módulos aparte."

explicacion: |
  Correcto — ver ../seleccion-natural/, ../deriva-genetica-flujo-genico/, ../especiacion/.
```

### 19 — Contenido del módulo

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["alcance"]

respuesta: verdadero
tipo: vf

enunciado: "Este módulo da el vocabulario y la idea general, pero no profundiza en los mecanismos evolutivos detallados."

explicacion: |
  Correcto, es la base conceptual para lo que sigue.
```

### 20 — Nomenclatura binomial (cantidad de partes)

```
metadata:
  materia: "biologia"
  tema: "clasificacion_evolucion"
  nivel: "basico"
  tags: ["nomenclatura"]

respuesta: "2"
tipo: mc
opciones_explicitas: ["1", "2", "3", "4"]

enunciado: "¿Cuántas partes tiene el nombre científico de una especie según la nomenclatura binomial?"

explicacion: |
  Dos: género y epíteto específico.
```
