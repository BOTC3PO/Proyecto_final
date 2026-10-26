# Geografía — Mapa, plano y escala (cuestionario, 20 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. El cálculo de escala (regla de
> tres) se practica en `../escala-de-mapa/`; acá el foco es conceptual.

---

### 1 — Diferencia entre plano y mapa

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["plano_vs_mapa"]

enunciado: "¿Cuál es la diferencia principal entre un plano y un mapa?"
tipo: mc
opciones_explicitas:
  - "El plano representa un espacio chico donde la curvatura terrestre no importa; el mapa representa un espacio grande donde sí"
  - "El plano usa colores y el mapa no"
  - "No hay diferencia, son sinónimos exactos"
respuesta: "El plano representa un espacio chico donde la curvatura terrestre no importa; el mapa representa un espacio grande donde sí"

explicacion: |
  Un plano de una casa o un barrio puede tratar la superficie como
  plana; un mapa de un país o el mundo tiene que lidiar con la
  curvatura real de la Tierra.
```

### 2 — Ejemplo de plano

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["plano_vs_mapa"]

enunciado: "¿Cuál de estos ejemplos es más probable que se represente con un plano en vez de un mapa?"
tipo: mc
opciones_explicitas:
  - "El interior de un shopping"
  - "Los países de Sudamérica"
  - "El mundo entero"
respuesta: "El interior de un shopping"

explicacion: |
  Un espacio chico y de detalle fino (un edificio, un barrio) se
  representa con un plano.
```

### 3 — Mapa político

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["tipos_de_mapa"]

enunciado: "¿Qué muestra principalmente un mapa político?"
tipo: mc
opciones_explicitas:
  - "Límites entre países o provincias y sus capitales"
  - "El relieve del terreno"
  - "La densidad de población"
respuesta: "Límites entre países o provincias y sus capitales"

explicacion: |
  El mapa político representa la división administrativa del espacio,
  no su forma natural ni datos estadísticos.
```

### 4 — Mapa físico

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["tipos_de_mapa"]

enunciado: "¿Qué muestra principalmente un mapa físico?"
tipo: mc
opciones_explicitas:
  - "El relieve: montañas, llanuras, ríos y costas"
  - "Los límites entre países"
  - "El resultado de una elección por región"
respuesta: "El relieve: montañas, llanuras, ríos y costas"

explicacion: |
  El mapa físico muestra la forma natural del terreno, sin límites
  administrativos.
```

### 5 — Mapa temático

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["tipos_de_mapa"]

enunciado: "Un mapa que muestra la densidad de población de cada provincia con distintos colores es un ejemplo de mapa..."
tipo: mc
opciones_explicitas:
  - "Temático"
  - "Físico"
  - "Político"
respuesta: "Temático"

explicacion: |
  Un mapa temático muestra un dato específico distribuido en el
  espacio — en este caso, densidad de población.
```

### 6 — Verdadero o falso: un mapa muestra todo a la vez

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["tipos_de_mapa"]

enunciado: "Un buen mapa siempre muestra toda la información posible del territorio (relieve, límites políticos, población, clima) a la vez."
tipo: vf
respuesta: falso

explicacion: |
  Cada tipo de mapa elige qué información representar y descarta el
  resto — mostrar todo a la vez saturaría la lectura.
```

### 7 — Qué es la escala

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["escala", "vocabulario"]

enunciado: "¿Qué es la escala de un mapa?"
tipo: mc
opciones_explicitas:
  - "La relación entre el tamaño representado en el mapa y el tamaño real del territorio"
  - "La cantidad de colores usados en el mapa"
  - "El año en que se hizo el mapa"
respuesta: "La relación entre el tamaño representado en el mapa y el tamaño real del territorio"

explicacion: |
  Todo mapa reduce el territorio real para que entre en una hoja o
  pantalla; la escala indica en qué proporción.
```

### 8 — Escala numérica

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["escala"]

enunciado: "Una escala escrita como 1:100.000 significa que..."
tipo: mc
opciones_explicitas:
  - "1 unidad en el mapa equivale a 100.000 de esas mismas unidades en la realidad"
  - "El mapa tiene 100.000 kilómetros de ancho"
  - "El mapa se hizo con 100.000 mediciones distintas"
respuesta: "1 unidad en el mapa equivale a 100.000 de esas mismas unidades en la realidad"

explicacion: |
  Es una razón: por cada unidad de longitud en el papel, hay 100.000
  unidades iguales en el territorio real.
```

### 9 — Escala gráfica

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["escala"]

enunciado: "¿Qué es una escala gráfica?"
tipo: mc
opciones_explicitas:
  - "Una barra dibujada en el mapa con marcas de distancias reales"
  - "Un número que indica cuántos colores tiene el mapa"
  - "La cantidad de países que aparecen en el mapa"
respuesta: "Una barra dibujada en el mapa con marcas de distancias reales"

explicacion: |
  Es una representación visual de la escala, útil porque se agranda o
  achica junto con el mapa si éste cambia de tamaño.
```

### 10 — Ventaja de la escala gráfica sobre la numérica

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["escala"]

enunciado: "¿Por qué una escala gráfica sigue siendo correcta después de fotocopiar el mapa agrandado, mientras que la escala numérica deja de serlo?"
tipo: mc
opciones_explicitas:
  - "Porque la barra gráfica se agranda junto con el mapa; el número de la escala numérica no cambia solo"
  - "Porque la escala gráfica no depende del tamaño del mapa"
  - "Porque la escala numérica es siempre más precisa"
respuesta: "Porque la barra gráfica se agranda junto con el mapa; el número de la escala numérica no cambia solo"

explicacion: |
  Al fotocopiar agrandado, la barra dibujada crece en la misma
  proporción que todo el mapa y sigue midiendo lo correcto; el "1:100.000"
  escrito queda igual aunque el mapa ya no sea ese tamaño.
```

### 11 — Verdadero o falso: existe una proyección perfecta

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["proyecciones"]

enunciado: "Existe una forma de proyectar la superficie curva de la Tierra sobre un papel plano sin distorsionar nada."
tipo: vf
respuesta: falso

explicacion: |
  Es matemáticamente imposible: toda proyección distorsiona algo (forma,
  tamaño relativo, distancia o dirección) — no hay una perfecta.
```

### 12 — Qué distorsiona la proyección Mercator

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["proyecciones"]

enunciado: "La proyección Mercator prioriza mantener las formas correctas (útil para navegación). ¿Qué distorsiona a cambio?"
tipo: mc
opciones_explicitas:
  - "El tamaño relativo de las áreas, agrandando mucho las zonas cercanas a los polos"
  - "Los límites políticos entre países"
  - "El nombre de los océanos"
respuesta: "El tamaño relativo de las áreas, agrandando mucho las zonas cercanas a los polos"

explicacion: |
  Por eso en un mapa Mercator Groenlandia se ve casi tan grande como
  África, cuando África es unas 14 veces más grande en la realidad.
```

### 13 — Groenlandia vs. África en Mercator

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["proyecciones"]

enunciado: "En la proyección Mercator, Groenlandia se ve casi del mismo tamaño que África. En la realidad, ¿cuál es más grande?"
tipo: mc
opciones_explicitas:
  - "África, ampliamente"
  - "Groenlandia, ampliamente"
  - "Son del mismo tamaño real"
respuesta: "África, ampliamente"

explicacion: |
  África es real unas 14 veces más grande que Groenlandia — la
  Mercator distorsiona el tamaño relativo para preservar las formas.
```

### 14 — Por qué un plano no necesita corregir la curvatura

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["plano_vs_mapa"]

enunciado: "¿Por qué el plano de un barrio no necesita ninguna proyección especial para la curvatura terrestre, pero un mapa del mundo sí?"
tipo: mc
opciones_explicitas:
  - "Porque en un área tan chica la curvatura de la Tierra es imperceptible"
  - "Porque los barrios no tienen curvatura"
  - "Porque los planos siempre son más precisos que los mapas"
respuesta: "Porque en un área tan chica la curvatura de la Tierra es imperceptible"

explicacion: |
  A escala de un barrio o ciudad, tratar la superficie como plana no
  genera un error perceptible; a escala de un continente, sí.
```

### 15 — Rosa de los vientos en un mapa

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["lectura_de_mapas"]

enunciado: "¿Para qué sirve que un mapa incluya una rosa de los vientos o una flecha marcando el norte?"
tipo: mc
opciones_explicitas:
  - "Para poder relacionar lo dibujado con la orientación real del territorio"
  - "Para decorar el mapa"
  - "Para indicar la escala"
respuesta: "Para poder relacionar lo dibujado con la orientación real del territorio"

explicacion: |
  Sin esa referencia, un mapa girado respecto al terreno sería
  ilegible aunque tuviera toda la información correcta — por eso este
  tema depende de `../orientacion-puntos-cardinales/`.
```

### 16 — Elegir el tipo de mapa correcto

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["tipos_de_mapa"]

enunciado: "Para planificar una ruta de trekking por zonas montañosas, ¿qué tipo de mapa es más útil?"
tipo: mc
opciones_explicitas:
  - "Un mapa físico, que muestra el relieve"
  - "Un mapa político, que muestra límites de países"
  - "Un mapa temático de resultados electorales"
respuesta: "Un mapa físico, que muestra el relieve"

explicacion: |
  El relieve (montañas, pendientes, ríos) es justo lo que un mapa
  físico representa.
```

### 17 — Elegir el tipo de mapa correcto (2)

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["tipos_de_mapa"]

enunciado: "Para saber a qué provincia pertenece una ciudad, ¿qué tipo de mapa es más útil?"
tipo: mc
opciones_explicitas:
  - "Un mapa político"
  - "Un mapa físico"
  - "Un mapa temático de clima"
respuesta: "Un mapa político"

explicacion: |
  Los límites administrativos (provincias, países) son lo que muestra
  un mapa político.
```

### 18 — Verdadero o falso: escala numérica y tamaño del mapa

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["escala"]

enunciado: "Si un mapa con escala numérica 1:50.000 se fotocopia agrandado al doble, ese \"1:50.000\" impreso sigue siendo la escala correcta de la fotocopia."
tipo: vf
respuesta: falso

explicacion: |
  Al agrandar el papel, la relación real entre lo dibujado y el
  territorio cambió, pero el número impreso quedó igual — por eso la
  escala numérica deja de ser confiable después de una ampliación o
  reducción, a diferencia de la gráfica.
```

### 19 — Qué prioriza cada tipo de proyección

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["proyecciones"]

enunciado: "¿Existe una proyección cartográfica objetivamente \"mejor\" que las demás?"
tipo: mc
opciones_explicitas:
  - "No: cada una es un compromiso distinto entre qué preservar (forma o tamaño relativo) y qué sacrificar"
  - "Sí, la Mercator es la mejor en todos los casos"
  - "Sí, cualquier proyección moderna elimina toda distorsión"
respuesta: "No: cada una es un compromiso distinto entre qué preservar (forma o tamaño relativo) y qué sacrificar"

explicacion: |
  No existe una proyección perfecta — la elección depende de para qué
  se va a usar el mapa (navegar, comparar superficies, etc.).
```

### 20 — Plano, mapa o mapamundi

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["plano_vs_mapa"]

enunciado: "Un dibujo que muestra las habitaciones de una casa con sus medidas es..."
tipo: mc
opciones_explicitas:
  - "Un plano"
  - "Un mapa físico"
  - "Un mapa temático"
respuesta: "Un plano"

explicacion: |
  Representa un espacio chico con nivel de detalle fino: es un plano,
  no un mapa.
```
