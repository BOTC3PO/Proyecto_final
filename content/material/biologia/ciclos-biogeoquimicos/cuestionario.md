# Biología — Ciclos biogeoquímicos (cuestionario, 24 preguntas VBLang)

> Tema: `BI`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Concepto de ciclo biogeoquímico

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Un ciclo biogeoquímico describe cómo un elemento se mueve entre los seres vivos y el ambiente físico no vivo."

explicacion: |
  Correcto, permite el reciclaje de elementos esenciales para la vida.
```

### 2 — Conservación de la materia

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["ley_conservacion"]

respuesta: falso
tipo: vf

enunciado: "En un ciclo biogeoquímico, el elemento se pierde para siempre después de usarse una vez."

explicacion: |
  Falso, cambia de forma y lugar pero permanece circulando en el sistema.
```

### 3 — Etimología: prefijo bio

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["etimologia"]

respuesta: "vivos"
tipo: completar
respuestas_validas:
  - "vivos"

enunciado: "El prefijo 'bio' en biogeoquímico se refiere a los seres ___."

explicacion: |
  Del griego "bios" (vida).
```

### 4 — Etimología: prefijo geo

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["etimologia"]

respuesta: "fisico"
tipo: completar
respuestas_validas:
  - "fisico"
  - "no vivo"

enunciado: "El prefijo 'geo' en biogeoquímico se refiere al ambiente ___."

explicacion: |
  Del griego "geo" (tierra): suelo, aire, agua.
```

### 5 — Etapa del ciclo del agua

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["ciclo_del_agua"]

variables:
  etapas: [["evaporacion", "agua liquida se convierte en vapor"], ["condensacion", "vapor de agua forma nubes"], ["precipitacion", "nubes liberan lluvia o nieve"], ["escorrentia", "el agua vuelve a rios y mares o se filtra al subsuelo"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: etapas[idx][1]
tipo: mc
opciones_explicitas: ["agua liquida se convierte en vapor", "vapor de agua forma nubes", "nubes liberan lluvia o nieve", "el agua vuelve a rios y mares o se filtra al subsuelo"]

enunciado: "¿Cuál es la descripción de la etapa de {etapas[idx][0]}?"

explicacion: |
  {etapas[idx][0]}: {etapas[idx][1]}.
```

### 6 — Transpiración vegetal

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["transpiracion"]

respuesta: verdadero
tipo: vf

enunciado: "Las plantas también liberan vapor de agua a la atmósfera mediante la transpiración."

explicacion: |
  Correcto, a través de los estomas de las hojas.
```

### 7 — Concepto de condensación

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["condensacion"]

respuesta: falso
tipo: vf

enunciado: "La condensación es el proceso mediante el cual el agua líquida se convierte en vapor."

explicacion: |
  Falso, eso es evaporación. Condensación es vapor pasando a líquido (nubes).
```

### 8 — Fotosíntesis y fijación de carbono

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["carbono"]

respuesta: verdadero
tipo: vf

enunciado: "Los productores fijan carbono del CO2 atmosférico en glucosa mediante la fotosíntesis."

explicacion: |
  Correcto — ver ../fotosintesis-respiracion-celular/.
```

### 9 — Respiración celular y liberación de CO2

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["carbono"]

respuesta: verdadero
tipo: vf

enunciado: "La respiración celular devuelve CO2 a la atmósfera."

explicacion: |
  Correcto, cierra parte del ciclo.
```

### 10 — Origen de los combustibles fósiles

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["combustibles_fosiles"]

respuesta: verdadero
tipo: vf

enunciado: "Los combustibles fósiles son carbono atrapado de organismos muertos hace millones de años."

explicacion: |
  Correcto, carbono orgánico transformado bajo presión geológica.
```

### 11 — Ritmo de liberación de carbono fósil

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["combustibles_fosiles"]

respuesta: falso
tipo: vf

enunciado: "Quemar combustibles fósiles libera ese carbono a la atmósfera mucho más lento de lo que se acumuló originalmente."

explicacion: |
  Falso, es mucho más rápido: millones de años de acumulación se liberan en décadas/siglos.
```

### 12 — Composición del aire

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno"]

respuesta: verdadero
tipo: vf

enunciado: "El nitrógeno (N2) constituye aproximadamente el 78% del aire."

explicacion: |
  Correcto, es el gas más abundante de la atmósfera.
```

### 13 — Uso del nitrógeno atmosférico

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno"]

respuesta: falso
tipo: vf

enunciado: "La mayoría de los seres vivos puede usar el N2 atmosférico directamente, sin necesidad de fijarlo."

explicacion: |
  Falso, casi ninguno puede usarlo directo; hace falta fijarlo primero.
```

### 14 — Proceso de conversión inicial

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["nitrogeno", "bacterias"]

respuesta: "fijacion"
tipo: completar
respuestas_validas:
  - "fijacion"
  - "fijación"

enunciado: "El proceso por el cual bacterias especializadas convierten el N2 atmosférico en formas utilizables se llama ___."

explicacion: |
  Fijación de nitrógeno.
```

### 15 — Simbiosis en leguminosas

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["nitrogeno", "leguminosas"]

respuesta: verdadero
tipo: vf

enunciado: "Algunas bacterias fijadoras de nitrógeno viven en simbiosis en las raíces de leguminosas, como el poroto."

explicacion: |
  Correcto, las Rhizobium forman nódulos en esas raíces.
```

### 16 — Retorno a la atmósfera

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "avanzado"
  tags: ["nitrogeno", "bacterias"]

respuesta: "desnitrificacion"
tipo: completar
respuestas_validas:
  - "desnitrificacion"
  - "desnitrificación"

enunciado: "El proceso por el cual bacterias convierten formas fijadas de nitrógeno de vuelta a N2 gaseoso se llama ___."

explicacion: |
  Desnitrificación, cierra el ciclo del nitrógeno.
```

### 17 — Absorción de nitrógeno por plantas

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno", "nutricion_vegetal"]

respuesta: verdadero
tipo: vf

enunciado: "Las plantas absorben las formas fijadas de nitrógeno y las incorporan en la síntesis de proteínas."

explicacion: |
  Correcto, absorben nitratos y amonio del suelo.
```

### 18 — Obtención de nitrógeno en animales

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno", "cadena_alimentaria"]

respuesta: verdadero
tipo: vf

enunciado: "Los animales obtienen el nitrógeno que necesitan comiendo plantas u otros animales."

explicacion: |
  Correcto, no pueden fijar nitrógeno del aire.
```

### 19 — Acción de los descomponedores

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno", "descomposicion"]

respuesta: verdadero
tipo: vf

enunciado: "Al morir un organismo, los descomponedores liberan el nitrógeno de sus tejidos de vuelta al suelo."

explicacion: |
  Correcto, transforman nitrógeno orgánico en formas inorgánicas.
```

### 20 — El rol de las bacterias en el ciclo

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["nitrogeno", "bacterias"]

respuesta: falso
tipo: vf

enunciado: "El ciclo del nitrógeno no tiene ninguna relación con las bacterias, opera únicamente a través de las plantas."

explicacion: |
  Falso, las bacterias son clave en la fijación y la desnitrificación.
```

### 21 — Materia en los ciclos

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["materia"]

respuesta: verdadero
tipo: vf

enunciado: "Los ciclos biogeoquímicos son la prueba concreta de que la materia siempre vuelve a estar disponible en algún punto del ciclo."

explicacion: |
  Correcto — ver ../flujo-materia-energia/.
```

### 22 — Flujo de energía (contraste)

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["energia"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la materia, la energía se disipa y necesita reposición constante desde el sol."

explicacion: |
  Correcto, la energía no se recicla como la materia.
```

### 23 — Elemento principal del ciclo

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "intermedio"
  tags: ["identificacion"]

variables:
  escenarios: [["ciclo del agua", "H2O"], ["ciclo del carbono", "carbono/CO2"], ["ciclo del nitrogeno", "nitrogeno/N2"]]
  idx: uno_de([0, 1, 2])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["H2O", "carbono/CO2", "nitrogeno/N2"]

enunciado: "¿Cuál es el elemento principal del {escenarios[idx][0]}?"

explicacion: |
  El elemento principal del {escenarios[idx][0]} es {escenarios[idx][1]}.
```

### 24 — Continuidad de la materia

```
metadata:
  materia: "biologia"
  tema: "ciclos_biogeoquimicos"
  nivel: "basico"
  tags: ["materia"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres ciclos (agua, carbono, nitrógeno) son ejemplos de cómo la materia circula sin perderse."

explicacion: |
  Correcto, los átomos se reorganizan pero permanecen en el sistema.
```
