# Materiales — Familias de materiales metales ceramicos polimeros compuestos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Clasificación de materiales

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["clasificacion", "metales"]

tipo: mc
opciones_explicitas: ["Metales", "Cerámicos", "Polímeros", "Compuestos"]
respuesta: "Metales"

enunciado: "Los materiales que se caracterizan por tener un enlace metálico, alta conductividad eléctrica y térmica, y alta ductilidad, pertenecen a la familia de los ___."

explicacion: |
  Los metales poseen una red de cationes inmersos en un "mar de electrones" que permite el movimiento de carga y calor, otorgándoles su conductividad característica.
```

### 2 — Propiedades de los cerámicos

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["ceramicos", "propiedades"]

tipo: vf
respuesta: falso

enunciado: "¿Los materiales cerámicos se caracterizan por ser altamente dúctiles y tener una excelente conductividad eléctrica?"

explicacion: |
  Falso. Los cerámicos son materiales generalmente frágiles (no dúctiles) y actúan como excelentes aislantes eléctricos debido a sus enlaces iónicos o covalentes.
```

### 3 — Composición de polímeros

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["polimeros", "estructura"]

tipo: completar
respuestas_validas:
  - "macromoléculas"
  - "monómeros"
respuesta: "macromoléculas"

enunciado: "Los polímeros son materiales formados por la unión de largas cadenas de ___."

explicacion: |
  Las macromoléculas o polímeros se forman mediante la repetición de unidades estructurales más pequeñas llamadas monómeros.
```

### 4 — Materiales compuestos

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["compuestos", "definicion"]

tipo: mc
opciones_explicitas: ["Una sola fase pura", "Dos o más fases distintas", "Una mezcla homogénea de átomos", "Unión de metales y cerámicos únicamente"]
respuesta: "Dos o más fases distintas"

enunciado: "Un material compuesto se define como aquel que está constituido por:"

explicacion: |
  Los materiales compuestos combinan dos o más componentes (fase matriz y fase refuerzo) para obtener propiedades que ninguno de los componentes posee por separado.
```

### 5 — Secuencia de procesamiento de polímeros

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["polimeros", "procesamiento"]

tipo: ordenar
opciones_explicitas: ["Monómero", "Polímero", "Producto final"]
respuesta_orden: ["Monómero", "Polímero", "Producto final"]

enunciado: "Ordene las etapas de formación de un material polimérico desde la unidad básica hasta el objeto terminado:"

explicacion: |
  El proceso comienza con la unidad química básica (monómero), que mediante la polimerización forma la cadena (polímero), que luego se procesa para obtener el producto.
```

### 6 — Clasificación de materiales por su estructura

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["clasificacion", "metales"]

respuesta: "metales"
tipo: mc
opciones_explicitas: ["metales", "cerámicos", "polímeros", "compuestos"]

enunciado: "Un cable de cobre utilizado para transmitir electricidad en una instalación doméstica posee alta conductividad eléctrica y ductilidad. Por sus propiedades, este material pertenece a la familia de los ________."

explicacion: |
  Los metales se caracterizan por tener enlaces metálicos que permiten el movimiento libre de electrones, lo que les otorga alta conductividad eléctrica y térmica, además de ser generalmente dúctiles.
```

### 7 — Propiedades de los cerámicos

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["cerámicos", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "Los materiales cerámicos, debido a sus enlaces iónicos o covalentes, presentan una alta ductilidad y son excelentes conductores de electricidad a temperatura ambiente."

explicacion: |
  Falso. Los cerámicos son materiales mayoritariamente aislantes eléctricos y presentan una alta fragilidad (no son dúctiles), ya que sus enlaces fuertes impiden el deslizamiento de planos atómicos.
```

### 8 — Composición de materiales compuestos

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["compuestos", "estructura"]

respuesta: "fibra de vidrio"
tipo: completar
respuestas_validas:
  - "fibra de vidrio"

enunciado: "En un material compuesto reforzado (como la fibra de vidrio), la fase que aporta resistencia mecánica se denomina fase ________, mientras que la fase que mantiene la forma y transfiere la carga es la matriz."

explicacion: |
  En los materiales compuestos, la fase de refuerzo (como la fibra) es la que soporta la mayor parte de la carga, mientras que la matriz (como la resina) rodea y protege al refuerzo.
```

### 9 — Procesamiento de polímeros

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["polímeros", "estructuras"]

respuesta: "polímeros"
tipo: completar
respuestas_validas:
  - "polímeros"

enunciado: "Las macromoléculas formadas por la unión de largas cadenas de unidades repetitivas llamadas monómeros se conocen como ________."

explicacion: |
  Los polímeros (del griego 'muchos') son materiales cuyas moléculas son cadenas muy largas, lo que les confiere propiedades como la flexibilidad y baja densidad.
```

### 10 — Secuencia de degradación de un polímero termoplástico

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["polímeros", "procesamiento"]

respuesta_orden: ["calentamiento", "moldeo", "enfriamiento", "solidificación"]
tipo: ordenar
opciones_explicitas: ["calentamiento", "moldeo", "enfriamiento", "solidificación"]

enunciado: "Para fabricar una pieza mediante inyección de un polímero termoplástico, se debe seguir un orden lógico de transformación térmica. Ordena los pasos:"

pasos:
  - "El material se eleva su temperatura hasta alcanzar el estado viscoso."
  - "El material fundido se introduce en la cavidad del molde."
  - "Se reduce la temperatura para recuperar la rigidez."
  - "El material toma su forma final tras el cambio de fase."

explicacion: |
  Los termoplásticos se caracteran por poder fundirse y moldearse repetidamente mediante ciclos de calentamiento (fusión) y enfriamiento (solidificación) sin que su estructura química cambie drásticamente.
```

### 11 — Naturaleza de los enlaces en cerámicos

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "basico"
  tags: ["enlaces", "ceramicos"]

respuesta: "iónico o covalente"
tipo: completar
respuestas_validas:
  - "iónico o covalente"
  - "iónico"
  - "covalente"

enunciado: "A diferencia de los metales, cuyos átomos se mantienen unidos por un mar de electrones, los materiales cerámicos se caracterizan por tener enlaces de tipo ___."

explicacion: |
  Los cerámicos presentan enlaces iónicos (transferencia de electrones) o covalentes (compartición de electrones), lo que les otorga su alta temperatura de fusión y fragilidad.
```

### 12 — Conductividad en polímeros

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "basico"
  tags: ["polimeros", "conductividad"]

variables:
  es_conductor: falso

respuesta: es_conductor
tipo: completar
enunciado: "Un error común es pensar que todos los polímeros son conductores debido a su flexibilidad; sin embargo, la mayoría de los polímeros son aislantes eléctricos."

explicacion: |
  Los polímeros son generalmente aislantes debido a que sus electrones están localizados en enlaces covalentes, a diferencia de los metales.
```

### 13 — Composición de materiales compuestos

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "intermedio"
  tags: ["compuestos", "matriz"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["fibra de carbono", "resina epoxi"], ["grafitos", "polietileno"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: [datos[escenario_idx][0], datos[escenario_idx][1], "una mezcla homogénea de ambos"]

enunciado: "En un material compuesto, la fase que rodea y mantiene unidas a las partículas o fibras se denomina ___."

explicacion: |
  En el ejemplo de {datos[escenario_idx][0]} y {datos[escenario_idx][1]}, la segunda componente actúa como la matriz que da forma al compuesto.
```

### 14 — Propiedades mecánicas: Metales vs Cerámicos

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "intermedio"
  tags: ["ductilidad", "fragilidad"]

respuesta_orden: ["Ductilidad", "Fragilidad"]
tipo: ordenar

opciones_explicitas: ["Ductilidad", "Fragilidad"]

enunciado: "Ordena las siguientes propiedades mecánicas de mayor a menor capacidad de deformación plástica antes de la rotura, comparando un metal típico frente a una cerámica típica."

explicacion: |
  Los metales son generalmente dúctiles (pueden deformarse), mientras que los cerámicos son frágiles (se rompen sin deformación previa significativa).
```

### 15 — El concepto de aleación

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales_metales_ceramicos_polimeros_compuestos"
  nivel: "basico"
  tags: ["metales", "aleaciones"]

respuesta: verdadero

tipo: vf

enunciado: "Una aleación metálica es un material compuesto donde la fase dispersa es otro metal."

explicacion: |
  Falso. Una aleación es una solución sólida (o mezcla) donde los elementos están distribuidos a nivel atómico, no es un material compuesto con fases claramente separadas como en los compuestos reforzados.
```

### 16 — Clasificación de materiales por estructura

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["clasificacion", "metales"]

respuesta: "metales"
tipo: mc
opciones_explicitas: ["metales", "cerámicos", "polímeros", "compuestos"]

enunciado: "Los materiales que se caracterizan por tener enlaces metálicos, alta conductividad térmica y eléctrica, y ser generalmente dúctiles, pertenecen a la familia de los ___."

explicacion: |
  Los metales se distinguen por su nube de electrones deslocalizados, lo que permite la conducción eléctrica y la deformación plástica sin rotura inmediata.
```

### 17 — Propiedades de los cerámicos

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["ceramicos", "propiedades"]

variables:
  es_ceramico_fragil: verdadero

respuesta: verdadero
tipo: vf
enunciado: "A diferencia de los metales, los materiales cerámicos se caracterizan por ser altamente frágiles ante la aplicación de cargas mecánicas."

explicacion: |
  Los cerámicos poseen enlaces iónicos o covalentes muy fuertes que impiden el movimiento de dislocaciones, resultando en una baja tenacidad y alta fragilidad.
```

### 18 — Composición de los materiales compuestos

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["compuestos", "definicion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["fibra de carbono", "resina epoxi"], ["arena", "cemento"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "resina epoxi"
  - "cemento"

enunciado: "Un material compuesto se distingue de una aleación porque combina dos o más fases distintas. Por ejemplo, en un material reforzado con fibras de {datos[escenario_idx][0]}, la fase continua es la {datos[escenario_idx][1]}."

explicacion: |
  En un compuesto, la fase continua (matriz) rodea a la fase dispersa (refuerzo) para combinar propiedades que ninguna de las fases posee por separado.
```

### 19 — Estructura molecular de los polímeros

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["polimeros", "moleculas"]

respuesta: "cadenas largas de macromoléculas"
tipo: completar
respuestas_validas:
  - "cadenas largas de macromoléculas"
  - "átomos en red cúbica"

enunciado: "Lo que distingue fundamentalmente a los polímeros de los metales y cerámicos es que su estructura está formada por ___."

explicacion: |
  Los polímeros están constituidos por unidades repetitivas (monómeros) que se unen para formar largas cadenas, lo que determina su baja densidad y flexibilidad.
```

### 20 — Jerarquía de complejidad en materiales

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "avanzado"
  tags: ["orden", "jerarquia"]

respuesta_orden: ["átomos", "moléculas", "microestructura", "material compuesto"]
tipo: ordenar
opciones_explicitas: ["átomos", "moléculas", "microestructura", "material compuesto"]

enunciado: "Ordene de lo más simple a lo más complejo la jerarquía de organización de la materia, desde el nivel atómico hasta la formación de un material compuesto funcional."

explicacion: |
  La jerarquía comienza en los átomos, que forman moléculas (en polímeros) o redes (en cerámicos/metales), cuya organización forma la microestructura, la cual es la base para diseñar materiales compuestos con propiedades específicas.
```

### 21 — Selección de material para recubrimiento térmico

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["ceramicos", "propiedades"]

variables:
  datos: [["un horno industrial de alta temperatura", "cerámicos"], ["un cable eléctrico de alta conductividad", "metales"], ["un envase de plástico ligero para alimentos", "polímeros"]]
  idx: uno_de([0,1,2])

opciones_explicitas: ["metales", "cerámicos", "polímeros"]

enunciado: "Se requiere un material para {datos[idx][0]} debido a su excelente resistencia al calor y su naturaleza aislante. El tipo de material adecuado es: ___"

respuestas_validas:
  - datos[idx][1]

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Los materiales cerámicos se caracterizan por su alto punto de fusión y su capacidad de actuar como aislantes térmicos y eléctricos, lo que los hace ideales para aplicaciones de alta temperatura.
```

### 22 — Conductividad en aplicaciones eléctricas

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["metales", "electricidad"]

variables:
  propiedad: uno_de(["alta conductividad eléctrica", "baja conductividad eléctrica", "aislamiento total"])
  es_metal: uno_de([verdadero, falso])

enunciado: "Los metales se distinguen principalmente por su {propiedad} debido a la movilidad de sus electrones de valencia."

respuesta: verdadero
tipo: vf
explicacion: |
  Los metales poseen un "mar de electrones" libres que permite el transporte eficiente de carga eléctrica, lo que define su alta conductividad.
```

### 23 — Identificación de polímeros

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["polimeros", "densidad"]

variables:
  datos: [["un neumático de automóvil", "polímero"], ["una botella de PET", "polímero"], ["una viga de acero", "metal"]]
  idx: uno_de([0,1,2])

opciones_explicitas: ["metal", "polímero", "cerámico"]

enunciado: "Analizando el caso de {datos[idx][0]}, observamos un material con baja densidad y gran flexibilidad. Este pertenece a la familia de los: ___"

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Los polímeros son macromoléculas formadas por unidades repetitivas (monómeros) que generalmente presentan baja densidad y alta ductilidad/flexibilidad en comparación con metales o cerámicos.
```

### 24 — Componentes de un material compuesto

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["compuestos", "estructura"]

variables:
  componente_matriz: uno_de(["resina epóxica", "cemento", "aluminio"])
  componente_refuerzo: uno_de(["fibra de carbono", "arena", "magnesio"])

enunciado: "Un material compuesto se define por la combinación de dos o más fases. Si combinamos una matriz de {componente_matriz} con un refuerzo de {componente_refuerzo}, estamos creando un material de tipo compuesto."

respuesta: "compuesto"
tipo: completar
explicacion: |
  Los materiales compuestos (como el CFRP) combinan una matriz (que da forma y transfiere cargas) y un refuerzo (que aporta rigidez/resistencia), logrando propiedades superiores a sus componentes por separado.
```

### 25 — Secuencia de procesamiento de un polímero termoplástico

```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "avanzado"
  tags: ["polimeros", "procesamiento"]

variables:
  pasos_correctos: ["Calentamiento del polímero", "Moldeo por inyección", "Enfriamiento y desmolde"]

opciones_explicitas: ["Calentamiento del polímero", "Moldeo por inyección", "Enfriamiento y desmolde"]

enunciado: "Para fabricar una pieza mediante moldeo por inyección de un polímero termoplástico, el orden lógico de los pasos es:"

respuesta_orden: ["Calentamiento del polímero", "Moldeo por inyección", "Enfriamiento y desmolde"]
tipo: ordenar

explicacion: |
  En los termoplásticos, el material debe fundirse primero (calentamiento), ser forzado en el molde (moldeo) y finalmente solidificarse para recuperar su forma (enfriamiento).
```
