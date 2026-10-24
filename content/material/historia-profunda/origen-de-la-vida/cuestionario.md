# Historia Profunda — Origen de la vida (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El caldo primordial

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["abiogenesis", "hipotesis_oparin"]

enunciado: "Según la hipótesis de Oparin y Haldane, la atmósfera primitiva de la Tierra carecía de ciertos gases que hoy son comunes. ¿Cuál de los siguientes gases NO formaba parte de esa atmósfera reductora?"

opciones_explicitas: ["Metano", "Amoníaco", "Oxígeno", "Hidrógeno"]
respuesta: "Oxígeno"
tipo: "mc"

explicacion: |
  La atmósfera primitiva era reductora y carecía de oxígeno libre (O2), ya que este solo apareció masivamente después de la fotosíntesis oxigénica.
```

### 2 — Experimento de Miller-Urey

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["miller_urey", "aminoacidos"]

enunciado: "En el famoso experimento de Miller y Urey, se simularon las condiciones de la Tierra primitiva mediante descargas eléctricas. ¿Cuál fue el resultado principal a partir de sustancias inorgánicas?"

respuesta: "aminoácidos"
tipo: "mc"
opciones_explicitas: ["aminoácidos", "nucleótidos"]

explicacion: |
  El experimento demostró que la síntesis de moléculas orgánicas simples como los aminoácidos es posible a partir de gases inorgánicos y energía.
```

### 3 — El mundo del ARN

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["rna_world", "genetica"]

enunciado: "La hipótesis del 'Mundo del ARN' sugiere que antes de la aparición del ADN y las proteínas, el ___ cumplía la función de almacenar información genética y catalizar reacciones químicas."

respuestas_validas:
  - "ARN"
respuesta: "ARN"
tipo: "completar"

explicacion: |
  Se cree que el ARN fue la primera molécula autorreplicante debido a su capacidad de actuar tanto como material genético como enzima (ribozimas).
```

### 4 — Secuencia de la complejidad química

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["evolucion_quimica", "orden"]

enunciado: "Ordena correctamente los procesos de la evolución química, desde la materia más simple hasta la vida:"

opciones_explicitas: ["Moléculas inorgánicas", "Monómeros orgánicos", "Polímeros complejos", "Protobiontes"]
respuesta_orden: ["Moléculas inorgánicas", "Monómeros orgánicos", "Polímeros complejos", "Protobiontes"]
tipo: "ordenar"

explicacion: |
  La evolución química implica un aumento gradual de la complejidad: de átomos y gases a moléculas pequeñas, luego cadenas largas y finalmente estructuras con membrana.
```

### 5 — El primer metabolismo

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["quimiosintesis", "metabolismo"]

enunciado: "En las fuentes hidrotermales del fondo oceánico, la vida pudo haber comenzado mediante un proceso de ___ que utilizaba la energía química de los minerales."

tipo: completar
respuesta: "quimiosíntesis"

explicacion: |
  Antes de la fotosíntesis, los primeros organismos probablemente obtenían energía de las reacciones redox de compuestos inorgánicos en las chimeneas hidrotermales.
```

### 6 — La sopa primordial

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["miller_urey", "sopa_primordial"]

respuesta: "Miller-Urey"
tipo: completar
respuestas_validas:
  - "Miller-Urey"
  - "Miller-Urey"

enunciado: "El experimento diseñado para probar la hipótesis de la 'sopa primordial' en charcos superficiales fue el de ___."

explicacion: |
  El experimento de Miller-Urey (1953) demostró que se podían formar moléculas orgánicas simples (aminoácidos) a partir de gases inorgánicos mediante descargas eléctricas.
```

### 7 — Fuentes hidrotermales

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["fuentes_hidrotermales", "quimiosintesis"]

respuesta: "protección de la radiación UV"
tipo: mc
opciones_explicitas: ["exposición a radiación UV", "protección de la radiación UV", "alta radiación solar", "ausencia de calor"]

enunciado: "A diferencia de la hipótesis de la sopa primordial, la teoría de las fuentes hidrotermales sugiere que la vida pudo originarse en el fondo oceánico debido a la ___."

explicacion: |
  Las fuentes hidrotermales ofrecen un ambiente protegido de la radiación UV superficial y proporcionan gradientes térmicos y químicos esenciales para la síntesis de moléculas complejas.
```

### 8 — Comparación de entornos

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["hipotesis", "comparacion"]

respuesta: "quimiosintesis"
tipo: completar
respuestas_validas:
  - "quimiosintesis"
  - "quimiosintesis"

enunciado: "Mientras que la sopa primordial se basa en la energía solar y descargas, las fuentes hidrotermales proponen un metabolismo basado en la ___."

explicacion: |
  En las fuentes hidrotermales, la energía proviene de las reacciones químicas entre los fluidos alcalinos y el agua de mar, un proceso conocido como quimiosíntesis.
```

### 9 — Elementos de la sopa primordial

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["miller_urey", "moléculas"]

respuesta_orden: ["Metano", "Amoníaco", "Hidrógeno", "Agua"]
tipo: ordenar
opciones_explicitas: ["Metano", "Amoníaco", "Hidrógeno", "Agua"]

enunciado: "Ordene los componentes gaseosos y líquidos que se utilizaron en el aparato de Miller-Urey para simular la atmósfera y el océano primitivo:"

explicacion: |
  El experimento utilizó una mezcla de metano (CH4), amoníaco (NH3), hidrógeno (H2) y vapor de agua (H2O) para simular las condiciones de la Tierra primitiva.
```

### 10 — El factor energía

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["energia", "hipotesis"]

respuesta: "descargas eléctricas"
tipo: mc
opciones_explicitas: ["descargas eléctricas", "gradientes térmicos", "radiación gamma", "energía cinética"]

enunciado: "En el modelo de la sopa primordial, ¿cuál es el motor energético propuesto para la síntesis de moléculas orgánicas?"

explicacion: |
  En el modelo de Miller-Urey, las descargas eléctricas (simulando rayos) proporcionan la energía necesaria para romper los enlaces de los gases y formar nuevas moléculas.
```

### 11 — El concepto de LUCA

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["biologia", "evolucion", "luca"]

tipo: mc
opciones_explicitas: ["Un organismo pluricelular complejo", "El último ancestro común de todos los organismos actuales", "Un organismo que vivió solo en la atmósfera", "La primera célula que apareció en la Tierra"]
respuesta: "El último ancestro común de todos los organismos actuales"

enunciado: "El término LUCA hace referencia a un concepto fundamental en la biología evolutiva. ¿Qué significa exactamente?"

explicacion: |
  LUCA (Last Universal Common Ancestor) no fue el primer ser vivo, sino el ancestro común más reciente del cual descendieron todas las formas de vida actuales (Arqueas, Bacterias y Eucariotas).
```

### 12 — Características de LUCA

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["biologia", "bioquimica"]

tipo: completar
respuestas_validas:
  - "quimiosíntesis"
respuesta: "quimiosíntesis"

enunciado: "Se postula que LUCA habitaba en entornos extremos, como fuentes hidrotermales, y que su principal fuente de energía era la ___."

explicacion: |
  Debido a la ausencia de oxígeno en la Tierra primitiva, se cree que LUCA dependía de procesos químicos inorgánicos (quimiosíntesis) para obtener energía, antes de la aparición de la fotosíntesis.
```

### 13 — El árbol de la vida

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["filogenia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["LUCA", "Primeras células procariotas", "Células eucariotas", "Organismos pluricelulares"]

enunciado: "Ordena cronológicamente estos hitos evolutivos, desde el ancestro común hasta la complejidad actual:"

explicacion: |
  La evolución biológica siguió una progresión desde un ancestro común unicelular, pasando por la especialización procariota y eucariota, hasta la complejidad de la pluricelularidad.
respuesta_orden: ["LUCA", "Primeras células procariotas", "Células eucariotas", "Organismos pluricelulares"]
```

### 14 — Evidencia genética

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["genetica", "adn"]

variables:
  mol_idx: uno_de([0, 1])
  mol_datos: [["ATP", "energía celular"], ["ADN", "información genética"]]
  mol_nombre: mol_datos[mol_idx][0]
  mol_funcion: mol_datos[mol_idx][1]
  respuesta_correcta: mol_datos[mol_idx][0]

tipo: mc
respuesta: respuesta_correcta
opciones_explicitas: ["ATP", "ADN", "ARN", "Proteínas"]

enunciado: "La existencia de {mol_nombre} en todos los dominios de la vida es una evidencia clave de que todos los seres vivos comparten un ancestro común, ya que cumple la función de {mol_funcion}."

explicacion: |
  El hecho de que todos los seres vivos utilicen la misma molécula para almacenar información genética (ADN/ARN) y la misma para transferir energía (ATP) es la prueba más fuerte de un origen común.
```

### 15 — El papel del ARN

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["bioquimica", "evolucion"]

tipo: mc
opciones_explicitas: ["Almacenar información genética y actuar como catalizador", "Solo almacenar información genética", "Solo actuar como catalizador enzimático", "Transportar aminoácidos a los ribosomas"]
respuesta: "Almacenar información genética y actuar como catalizador"

enunciado: "La hipótesis del 'mundo de ARN' sugiere que esta molécula fue clave en el origen de la vida debido a que puede ___."

explicacion: |
  El ARN es una molécula versátil que puede realizar dos funciones críticas: almacenar la información genética (como el ADN) y actuar como una enzima (ribozima) para catalizar reacciones químicas.
```

### 16 — Comparación de funciones

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["adn", "arn", "proteinas"]

tipo: completar
respuestas_validas:
  - "ADN"
  - "proteínas"

enunciado: "En la hipótesis del mundo de ARN, se postula que el ARN precedió tanto al ___ como a las ___ en la evolución biológica."

explicacion: |
  Se cree que el ARN fue la molécula central antes de que el ADN se especializara en el almacenamiento de información a largo plazo y las proteínas en la catálisis estructural y funcional.
```

### 17 — El concepto de ribozima

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["ribozima", "catalisis"]

tipo: mc
opciones_explicitas: ["Capacidad de catalizar reacciones químicas", "Capacidad de replicarse sin proteínas", "Capacidad de formar dobles hélices estables", "Capacidad de almacenar aminoácidos"]
respuesta: "Capacidad de catalizar reacciones químicas"

enunciado: "Una de las propiedades fundamentales que permite al ARN ser el protagonista del 'mundo de ARN' es su capacidad de actuar como una ___."

explicacion: |
  Las ribozimas son moléculas de ARN con actividad catalítica, lo que permite que el ARN pueda acelerar reacciones químicas sin necesidad de proteínas.
```

### 18 — Orden cronológico hipotético

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["evolucion", "secuencia"]

tipo: ordenar
opciones_explicitas: ["ARN", "ADN", "Proteínas"]

enunciado: "Según la hipótesis del mundo de ARN, ¿cuál sería el orden evolutivo más probable de las macromoléculas funcionales?"

explicacion: |
  El ARN habría servido como la molécula 'todo en uno' que permitió la aparición de la autorreplicación, antes de la especialización funcional del ADN y las proteínas.
respuesta_orden: ["ARN", "ADN", "Proteínas"]
```

### 19 — El dilema de la autorreplicación

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["paradoja", "evolucion"]

variables:
  escenario: uno_de(["plantilla", "catalizador"])

tipo: mc
opciones_explicitas: ["La estabilidad del ADN", "La velocidad de la proteína", "La dualidad funcional del ARN", "La complejidad del núcleo"]
respuesta: "La dualidad funcional del ARN"

enunciado: "El 'dilema de la replicación' se resuelve con el ARN porque este puede resolver la necesidad de un {escenario} mediante su estructura química."

explicacion: |
  Si el escenario es la necesidad de una plantilla, el ARN sirve como molde. Si es la necesidad de un catalizador, el ARN actúa como enzima. Esto permite que la vida comience sin depender de un sistema complejo de tres moléculas distintas.
```

### 20 — El experimento de Miller-Urey

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["quimica_prebiotica", "experimento", "miller_urey"]

variables:
  escenario: [[["metano", "amoniaco", "hidrogeno", "vapor de agua"], "aminoácidos"], [["metano", "amoniaco", "hidrogeno", "vapor de agua"], "azúcares"], [["metano", "amoniaco", "hidrogeno", "vapor de agua"], "lípidos"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["aminoácidos", "azúcares", "lípidos"]

enunciado: "En el experimento de Miller-Urey, al aplicar descargas eléctricas a una mezcla de gases que simulaba la atmósfera primitiva, se obtuvo como producto principal la formación de ___."

explicacion: |
  El experimento demostró que la síntesis abiótica de moléculas orgánicas (como los aminoácidos) era posible bajo las condiciones atmosféricas propuestas.
```

### 21 — Gases de la atmósfera primitiva

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["atmosfera", "gases"]

respuesta: "metano"
tipo: mc
opciones_explicitas: ["metano", "oxígeno", "nitrógeno"]

enunciado: "Según el modelo de Miller-Urey, la atmósfera primitiva era rica en gases reductores. ¿Cuál de estos gases era uno de los componentes fundamentales en su montaje experimental?"

explicacion: |
  Miller utilizó metano (CH4), amoníaco (NH3), hidrógeno (H2) y vapor de agua (H2O) para simular la atmósfera reductora.
```

### 22 — El componente eléctrico

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["energia", "descarga"]

respuesta: "descargas eléctricas"
tipo: completar
respuestas_validas:
  - "descargas eléctricas"

enunciado: "Para simular la energía disponible en la atmósfera primitiva, el aparato de Miller utilizó ___ entre los gases."

explicacion: |
  Las descargas eléctricas simulaban la actividad de los rayos durante las tormentas en la Tierra primitiva.
```

### 23 — El ciclo del agua en el experimento

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["ciclo_del_agua", "condensación"]

variables:
  proceso: [["condensación", "evaporación"], ["condensación", "sublimación"], ["condensación", "fusión"]]
  idx: uno_de([0,1,2])

respuesta: proceso[idx][0]
tipo: mc
opciones_explicitas: ["condensación", "evaporación", "sublimación", "fusión"]

enunciado: "En el montaje, el vapor de agua se enfriaba para que los compuestos orgánicos formados se disolvieran en el líquido. Este proceso físico es la ___."

explicacion: |
  El enfriamiento del vapor permite la condensación, permitiendo que las moléculas orgánicas se concentren en la fase líquida.
```

### 24 — Secuencia de componentes

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["montaje", "componentes"]

respuesta_orden: ["gases", "descargas", "condensación"]
tipo: ordenar
opciones_explicitas: ["gases", "descargas", "condensación"]

enunciado: "Ordena los elementos o procesos según el flujo lógico de la síntesis química en el experimento de Miller:"

explicacion: |
  El experimento requiere primero la mezcla de gases, luego la aplicación de energía (descargas) y finalmente la recuperación de productos mediante condensación.
```
