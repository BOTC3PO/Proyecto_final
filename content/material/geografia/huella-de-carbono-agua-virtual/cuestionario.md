# Geografía — Huella de carbono y agua virtual (cuestionario, 25 preguntas VBLang)

> Tema: `AM2`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: **un lote entero (5 preguntas)
> traía un corchete `]` sobrante al final de cada `respuesta:`**
> (sintaxis inválida) — eliminado en las 5; en ese mismo lote, varias
> `variables:` tenían listas de un solo elemento indexadas con un
> `idx` de rango mayor (fuera de rango) — reescritas con listas planas
> correctamente indexadas; una pregunta llamaba a `uno_de(...)`
> directamente dentro del `enunciado` (sorteo independiente del que
> definía la `respuesta:`, podían desincronizarse) — corregida a un
> solo sorteo; varias preguntas de blank `___` etiquetadas `tipo: vf`
> (reclasificadas a `completar`); dos preguntas con `respuesta:` en
> forma de array para dos blancos — recortadas a un solo blanco; una
> pregunta con `tabla:` fuera del bloque `variables:` y una variable
> `escenario_idx` filtrándose como texto literal en el `enunciado`
> (`"(escenario_idx)"`) — reescrita.

---

### 1 — Definición de huella de carbono

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos", "gases_efecto_invernadero"]

respuesta: "gases de efecto invernadero"
tipo: completar
respuestas_validas:
  - "gases de efecto invernadero"

enunciado: "La huella de carbono es la totalidad de ___ emitidos por un individuo, organización, evento o producto, expresados en toneladas de CO2 equivalente."

explicacion: |
  La huella de carbono mide la cantidad de gases de efecto invernadero (GEI) que liberamos a la atmósfera como consecuencia de nuestras actividades diarias o procesos productivos.
```

### 2 — La regla del 10% y la energía

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["ecologia", "niveles_troficos"]

respuesta: "10%"
tipo: completar
respuestas_validas:
  - "10%"

enunciado: "En una cadena alimentaria, según la regla del diez por ciento, sólo aproximadamente el ___ de la energía de un nivel trófico se transfiere al siguiente nivel."

explicacion: |
  Debido a que la mayor parte de la energía se pierde en forma de calor y procesos metabólicos durante la transferencia entre niveles, se requiere mucha más biomasa vegetal para producir una cantidad pequeña de carne, lo que aumenta la huella de carbono de los productos animales.
```

### 3 — Comparación de huella: carne vs. vegetales

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["alimentacion", "impacto_ambiental"]

respuesta: "la carne"
tipo: completar
respuestas_validas:
  - "la carne"

enunciado: "Debido a la pérdida de energía entre los niveles tróficos, la huella de carbono de ___ es significativamente mayor que la de las verduras."

explicacion: |
  Para producir un kilo de carne se necesita alimentar al animal con muchos kilos de plantas. Como la energía se reduce drásticamente en cada paso (regla del 10%), el proceso de producción de carne requiere más recursos y emite más gases que la producción directa de vegetales.
```

### 4 — El papel del metano

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["gases_efecto_invernadero", "ganaderia"]

respuesta: "metano"
tipo: completar
respuestas_validas:
  - "metano"

enunciado: "Además del dióxido de carbono, la ganadería intensiva contribuye significativamente a la huella de carbono mediante la emisión de ___ durante la digestión de los rumiantes."

explicacion: |
  El metano (CH4) es un gas de efecto invernadero muy potente. Las emisiones de metano provenientes del ganado son uno de los factores principales que elevan la huella de carbono de los productos de origen animal.
```

### 5 — Impacto de la dieta en la huella de carbono

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo_responsable", "ecologia"]

respuesta: "reducir"
tipo: completar
respuestas_validas:
  - "reducir"

enunciado: "Para disminuir nuestra huella de carbono personal, es recomendable ___ el consumo de productos de origen animal y aumentar el de alimentos de origen vegetal."

explicacion: |
  Al consumir más productos vegetales, aprovechamos la energía de los productores primarios de forma más directa, evitando las ineficiencias de la cadena trófica y reduciendo la emisión de gases asociados a la ganadería.
```

### 6 — Definición de agua virtual

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos", "recursos_naturales"]

tipo: mc
opciones_explicitas: ["El agua que contiene un producto y que podemos beber directamente.", "El volumen total de agua utilizada en todo el proceso de producción de un bien.", "La cantidad de agua que se evapora de los océanos debido al calentamiento global.", "El agua que se utiliza exclusivamente para la limpieza de las fábricas."]

respuesta: "El volumen total de agua utilizada en todo el proceso de producción de un bien."

enunciado: "El concepto de 'agua virtual' se refiere a..."

explicacion: |
  El agua virtual es el volumen total de agua dulce que se consume en todas las etapas de producción de un producto (desde la extracción de materia prima hasta el procesamiento), aunque el producto final no parezca contener agua líquida.
```

### 7 — Comparación de huella hídrica: carne vs. café

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["comparacion", "consumo"]

tipo: mc
opciones_explicitas: ["El café consume mucha más agua que un kilo de carne.", "La carne vacuna requiere una cantidad de agua significativamente mayor que el café.", "Ambos consumen la misma cantidad de agua por unidad.", "El café es un producto con huella hídrica nula."]

respuesta: "La carne vacuna requiere una cantidad de agua significativamente mayor que el café."

enunciado: "Considerando los valores promedio (café: ~140 litros/taza, carne vacuna: ~15.000 litros/kg), ¿cuál es la diferencia principal entre ambas huellas hídricas?"

explicacion: |
  La producción de carne vacuna requiere aproximadamente 15.000 litros de agua por kilo, mientras que una taza de café requiere cerca de 140 litros. La diferencia es masiva debido a la cantidad de agua necesaria para cultivar el forraje y el mantenimiento del ganado.
```

### 8 — Identificación de productos de alto consumo

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["ejemplos", "consumo_masivo"]

tipo: mc
opciones_explicitas: ["hamburguesa", "arroz", "café", "carne vacuna"]

enunciado: "De la siguiente lista, ¿cuál es el producto que requiere aproximadamente 2.500 litros de agua por kilo?"

respuesta: "arroz"

explicacion: |
  El arroz es un cultivo que requiere una gran cantidad de agua para su crecimiento en campos inundados, lo que resulta en una huella hídrica de aproximadamente 2.500 litros por kilo.
```

### 9 — Análisis de huella hídrica en alimentos

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["calculo", "impacto"]

tipo: mc
opciones_explicitas: ["Una hamburguesa tiene una huella hídrica menor que un kilo de arroz.", "La huella hídrica de una hamburguesa es de aproximadamente 2500 litros.", "El consumo de carne no afecta la huella hídrica global.", "El agua virtual sólo se mide en productos industriales, no en alimentos."]

respuesta: "La huella hídrica de una hamburguesa es de aproximadamente 2500 litros."

enunciado: "Si analizamos el impacto del consumo de alimentos procesados, ¿cuál de estas afirmaciones es correcta?"

explicacion: |
  Una hamburguesa representa un producto de alto impacto hídrico, con una huella de aproximadamente 2500 litros, debido a la suma de la producción de carne, cereales y otros ingredientes.
```

### 10 — El concepto de huella oculta

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "El concepto de agua virtual implica que, aunque no veamos agua en un paquete de arroz, se han utilizado miles de litros para su producción."

explicacion: |
  Es verdadero. El agua virtual es el agua "oculta" que se utiliza en la agricultura y la industria para crear productos que consumimos habitualmente.
```

### 11 — Concepto de agua virtual (por qué "virtual")

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos", "recursos_naturales"]

respuesta: "virtual"
tipo: completar
respuestas_validas:
  - "virtual"

enunciado: "El término ___ se utiliza para referirse al volumen de agua que no se ve directamente pero que se utilizó en el proceso de producción de un bien o servicio."

explicacion: |
  Se llama "virtual" porque el agua no se consume en el sentido de desaparecer del planeta, sino que se utiliza en un proceso productivo y luego vuelve a la naturaleza a través del ciclo hidrológico.
```

### 12 — El ciclo del agua y la producción

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["ciclo_del_agua", "produccion"]

respuesta: "ciclo del agua"
tipo: completar
respuestas_validas:
  - "ciclo del agua"
  - "ciclo hidrológico"

enunciado: "El agua utilizada en la agricultura o la industria no deja de existir tras la producción; simplemente se integra nuevamente en el ___."

explicacion: |
  El concepto de agua virtual resalta que el agua sigue fluyendo en el ciclo natural, pero su uso en la producción "desplaza" o "compromete" ese recurso para otros usos.
```

### 13 — Diferencia entre consumo y compromiso

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo", "recursos"]

variables:
  idx: uno_de([0, 1])
  tabla: [["carne de vaca", "alto"], ["trigo", "bajo"]]

respuesta: tabla[idx][1]
tipo: completar
respuestas_validas:
  - "alto"
  - "bajo"

enunciado: "En la producción de {tabla[idx][0]}, el nivel de agua comprometida (agua virtual) para ese producto es ___."

explicacion: |
  El término "virtual" enfatiza que el agua está comprometida en la cadena de valor: la carne de vaca compromete mucha más agua que el trigo.
```

### 14 — Implicancia del concepto

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["impacto", "recursos"]

respuesta: "comprometida"
tipo: completar
respuestas_validas:
  - "comprometida"

enunciado: "En lugar de decir que el agua es 'consumida' por un producto, se prefiere decir que es agua ___ en su proceso de fabricación."

explicacion: |
  Decir "consumida" daría la falsa idea de que el agua desaparece del planeta, mientras que "comprometida" indica que se ha utilizado para un fin específico.
```

### 15 — Relación con el comercio internacional

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["comercio", "globalizacion"]

respuesta: "importar"
tipo: completar
respuestas_validas:
  - "importar"

enunciado: "Cuando un país compra productos de una región con escasez hídrica, en realidad está realizando una acción de ___ agua virtual."

explicacion: |
  El comercio internacional permite a las naciones "importar" agua de forma indirecta a través de los productos que adquieren de otros países.
```

### 16 — El dilema del aguacate

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo_responsable", "recursos_naturales"]

enunciado: "Un productor de aguacates en una zona con escasez de agua decide utilizar tecnología de riego por goteo muy eficiente para reducir el uso de agua. Sin embargo, para mantener la cadena de frío y el transporte internacional hacia Europa, utiliza barcos y camiones que queman grandes cantidades de combustibles fósiles. En este escenario, el producto presenta una ___ huella hídrica pero una ___ huella de carbono."

opciones_explicitas: ["baja / alta", "alta / baja", "alta / alta", "baja / baja"]

respuesta: "baja / alta"
tipo: mc

explicacion: |
  El uso de riego eficiente reduce la huella hídrica, pero el transporte de larga distancia y la refrigeración incrementan la huella de carbono. Mirar ambos indicadores permite ver que la eficiencia en un recurso no compensa el impacto en otro.
```

### 17 — El caso de la carne de res

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo_responsable", "recursos_naturales"]

enunciado: "Si analizamos la producción de carne de res, observamos que el proceso requiere grandes extensiones de tierra para pasturas y una cantidad masiva de agua para el riego de forraje y el consumo animal, además de las emisiones de metano. Por lo tanto, la carne de res se caracteriza por tener:"

opciones_explicitas: ["Baja huella de carbono y baja huella hídrica", "Baja huella de carbono y alta huella hídrica", "Alta huella de carbono y baja huella hídrica", "Alta huella de carbono y alta huella hídrica"]

respuesta: "Alta huella de carbono y alta huella hídrica"
tipo: mc

explicacion: |
  La producción ganadera intensiva o extensiva suele impactar ambos indicadores: el agua necesaria para el ciclo de vida del animal y los gases de efecto invernadero producidos por el ganado y el cambio de uso de suelo.
```

### 18 — ¿Por qué analizar ambos indicadores?

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["metodologia", "sustentabilidad"]

enunciado: "Al evaluar el impacto ambiental de un producto importado, ¿cuál es la razón principal por la que es necesario mirar la huella de carbono Y la huella de agua de forma conjunta?"

opciones_explicitas: ["Porque un producto puede ser eficiente en un recurso pero altamente costoso en otro.", "Porque la huella de carbono siempre es mayor que la huella hídrica.", "Porque sólo así se puede calcular el precio final del producto.", "Porque la huella hídrica sólo se aplica a productos agrícolas."]

respuesta: "Porque un producto puede ser eficiente en un recurso pero altamente costoso en otro."
tipo: mc

explicacion: |
  El análisis integral evita mostrar una imagen parcial: un producto puede parecer ecológico por su baja emisión de CO2, pero estar agotando acuíferos críticos (costo ambiental oculto).
```

### 19 — El concepto de costo oculto

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["conceptos_clave"]

enunciado: "Cuando consumimos un producto que ha sido producido en una región con estrés hídrico extremo, aunque su transporte sea local y emita poco CO2, estamos consumiendo un ___ costo ambiental relacionado con el agua."

respuestas_validas:
  - "alto"
  - "elevado"
  - "significativo"

respuesta: "alto"
tipo: completar

explicacion: |
  El concepto de "agua virtual" se refiere al agua que no vemos pero que se utilizó para producir un bien. Si esa agua proviene de zonas con escasez, el costo ambiental es muy alto para esa región.
```

### 20 — Comparación de textiles

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["industria", "impacto"]

enunciado: "Considerá dos productos textiles: A (algodón convencional con riego intensivo en zona seca) y B (poliéster derivado del petróleo con transporte transoceánico). Si comparamos sus impactos, es correcto afirmar que:"

opciones_explicitas: ["El producto A tiene mayor huella hídrica y el B mayor huella de carbono.", "El producto B tiene mayor huella hídrica y el A mayor huella de carbono.", "Ambos tienen la misma huella en ambos indicadores.", "Ninguno de los dos tiene impacto ambiental significativo."]

respuesta: "El producto A tiene mayor huella hídrica y el B mayor huella de carbono."
tipo: mc

explicacion: |
  El algodón requiere cantidades masivas de agua para su cultivo (huella hídrica), mientras que el poliéster es un plástico derivado de combustibles fósiles cuya producción y transporte global elevan su huella de carbono.
```

### 21 — Huella de carbono del transporte

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["transporte", "emisiones", "consumo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["10 kg CO2"], ["50 kg CO2"], ["100 kg CO2"]]

enunciado: "Un consumidor elige un producto importado cuyo transporte genera una huella de carbono de {datos[idx][0]}. Si decide cambiar a un producto local, la huella se reduce significativamente. ¿Cuál es la huella de carbono del producto importado según el escenario actual?"

opciones_explicitas: ["10 kg CO2", "50 kg CO2", "100 kg CO2"]
respuesta: datos[idx][0]
tipo: mc

explicacion: |
  La huella de carbono del transporte depende de la distancia y el medio de transporte. Los productos locales reducen estas emisiones.
```

### 22 — Agua virtual en la producción de carne (vaca vs. pollo)

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["agua_virtual", "consumo_responsable", "recursos_naturales"]

variables:
  idx: uno_de([0, 1])
  datos: [["carne de vaca", "15000 litros"], ["carne de pollo", "4000 litros"]]

enunciado: "El concepto de agua virtual se refiere al agua utilizada para producir un bien. Para producir 1 kg de {datos[idx][0]} se requieren aproximadamente ___."

respuestas_validas:
  - "15000 litros"
  - "4000 litros"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La producción de carne roja requiere una cantidad significativamente mayor de agua (para riego de forraje y bebida del animal) que la carne blanca.
```

### 23 — Impacto de la dieta en la huella hídrica

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["dieta", "huella_hídrica", "impacto_ambiental"]

variables:
  idx: uno_de([0, 1])
  datos: [["alta en proteína animal", "Mayor huella de agua"], ["basada en vegetales", "Menor huella de agua"]]

enunciado: "Si una persona mantiene una dieta {datos[idx][0]}, su huella de agua virtual será ___ en comparación con una dieta equilibrada."

opciones_explicitas: ["Mayor huella de agua", "Menor huella de agua", "Igual", "Nula"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Las dietas con alto contenido de productos de origen animal suelen tener una huella de agua virtual mucho más elevada debido a los procesos de producción ganadera.
```

### 24 — Comparativa de productos procesados

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["procesados", "emisiones", "ciclo_de_vida"]

variables:
  idx: uno_de([0, 1])
  datos: [["muy procesado", "2.5 kg CO2"], ["mínimamente procesado", "0.8 kg CO2"]]

enunciado: "Un producto {datos[idx][0]} tiene una huella de carbono de ___ por unidad."

opciones_explicitas: ["2.5 kg CO2", "0.8 kg CO2", "5.0 kg CO2", "1.2 kg CO2"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Los productos altamente procesados suelen tener una huella de carbono más alta debido a las etapas de transformación industrial y empaquetado.
```

### 25 — El concepto de agua virtual (repaso final)

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["definiciones", "agua_virtual"]

enunciado: "La cantidad de agua que se utiliza para producir un bien o servicio, incluyendo el agua utilizada en la extracción de materias primas y el procesamiento, se denomina ___."

respuestas_validas:
  - "agua virtual"
  - "huella hídrica"
respuesta: "agua virtual"
tipo: completar

explicacion: |
  El "agua virtual" es el volumen de agua que no vemos pero que se ha consumido para fabricar un producto (por ejemplo, para cultivar el algodón de una camiseta).
```
