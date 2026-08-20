# Historia Profunda — Escritura primeras ciudades (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Origen de la escritura

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "sumerios", "cuneiforme"]

respuesta: "Mesopotamia"
tipo: completar
respuestas_validas:
  - "Mesopotamia"

enunciado: "La escritura surgió en la región de ___ hace aproximadamente 5000 años."

explicacion: |
  La escritura se desarrolló en Mesopotamia, en la región de Sumer, para satisfacer necesidades de registro.
```

### 2 — Propósito inicial

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["contabilidad", "administracion"]

respuesta: "administrativos"
tipo: mc
opciones_explicitas: ["poéticos", "administrativos", "religiosos", "militares"]

enunciado: "Originalmente, la escritura no se inventó para la literatura, sino para llevar registros ___."

explicacion: |
  Las primeras tablillas se utilizaban principalmente para la contabilidad y la administración de recursos en las ciudades-estado.
```

### 3 — El sistema cuneiforme

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cuneiforme", "sumerios"]

variables:
  datos: [["sumerios", "cuneiforme"], ["egipcios", "jeroglíficos"], ["fenicios", "alfabeto"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cuneiforme", "jeroglíficos", "alfabeto"]

enunciado: "El pueblo de {datos[idx][0]} desarrolló el sistema de escritura conocido como {datos[idx][1]}."

explicacion: |
  Los sumerios en Mesopotamia crearon la escritura cuneiforme, caracterizada por marcas en forma de cuña sobre arcilla.
```

### 4 — Evolución de la escritura

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["proceso", "evolucion"]

respuesta_orden: ["Pictogramas", "Ideogramas", "Fonogramas"]
tipo: ordenar
opciones_explicitas: ["Pictogramas", "Ideogramas", "Fonogramas"]

enunciado: "Ordena cronológicamente la evolución conceptual de los signos en la escritura antigua:"

explicacion: |
  La escritura evolucionó desde dibujos de objetos (pictogramas), pasando por conceptos (ideogramas), hasta representar sonidos (fonogramas).
```

### 5 — Cronología de la escritura

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["tiempo", "mesopotamia"]

respuesta: 5000
tipo: completar
tolerancia_abs: 100

enunciado: "Se estima que la escritura surgió hace aproximadamente ___ años."

explicacion: |
  La invención de la escritura en Mesopotamia se sitúa hace unos 5000 años, marcando el inicio de la Edad Antigua.
```

### 6 — El hito de la escritura

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["escritura", "prehistoria", "historia"]

respuesta: "historia"
tipo: completar
respuestas_validas:
  - "historia"

enunciado: "La aparición de la escritura marca la transición de la prehistoria al inicio de la ___."

explicacion: |
  La prehistoria se define por la ausencia de registros escritos. Con la invención de la escritura, los seres humanos pueden dejar testimonios directos de sus leyes, mitos y transacciones, permitiendo el estudio de la historia documentada.
```

### 7 — Evidencia arqueológica vs. escrita

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["arqueologia", "metodologia"]

variables:
  escenario: uno_de([["restos materiales (huesos, herramientas)", "arqueología"], ["registros escritos (tablillas, papiros)", "historia"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["arqueología", "historia"]

enunciado: "Si un investigador encuentra una serie de tablillas de arcilla con nombres y cantidades de grano, está estudiando principalmente la ___."

explicacion: |
  El uso de registros escritos permite pasar de la reconstrucción basada en restos materiales (arqueología) al análisis de la historia documentada.
```

### 8 — El cambio de paradigma

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cronologia", "transicion"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿La escritura permite conocer la mentalidad de una civilización de forma directa, a diferencia de los restos materiales que requieren interpretación indirecta?"

explicacion: |
  Verdadero. Los objetos nos dicen qué tenían o cómo vivían, pero los textos nos dicen qué pensaban, qué leyes tenían y cómo se llamaban a sí mismos.
```

### 9 — El proceso de registro

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["metodologia", "transicion"]

respuesta: "documental"
tipo: completar
respuestas_validas:
  - "documental"

enunciado: "Cuando un historiador utiliza textos antiguos para reconstruir un evento, está realizando un análisis de tipo ___."

explicacion: |
  El análisis documental se basa en el uso de fuentes escritas (documentos) para la reconstrucción de procesos sociales y políticos.
```

### 10 — Evolución de la evidencia

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["evidencia", "metodologia"]

respuesta_orden: ["restos materiales", "escritura", "historia documentada"]
tipo: ordenar
opciones_explicitas: ["restos materiales", "escritura", "historia documentada"]

enunciado: "Ordena los niveles de evidencia según el grado de complejidad en la reconstrucción de la vida social, desde lo más material hasta lo más intelectual/directo:"

explicacion: |
  La escala comienza con la cultura material (objetos), sigue con la capacidad de registrar (escritura) y culmina en la capacidad de estudiar la historia a través de testimonios directos.
```

### 11 — El origen de la escritura

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "escritura", "uruk"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas:
  - "excedente"

enunciado: "El surgimiento de las primeras ciudades en Mesopotamia, como Uruk, estuvo estrechamente ligado a la capacidad de producir un ___ agrícola que permitía sostener a poblaciones no dedicadas a la agricultura."

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que parte de la población se especializara en otras tareas (artesanos, escribas, sacerdotes), dando origen a la estructura urbana y la necesidad de registrar estas cantidades mediante la escritura.
```

### 12 — Factores de la urbanización

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["causalidad", "sociedad"]

respuesta: "excedente agrícola"
tipo: "mc"
opciones_explicitas: ["excedente agrícola", "escritura", "estratificación social"]

enunciado: "En el contexto de las primeras ciudades mesopotámicas, la aparición de la escritura fue una respuesta directa a la necesidad de gestionar el ___."

explicacion: |
  La escritura no nació como un medio de expresión literaria, sino como una herramienta contable para registrar el excedente agrícola y los bienes que entraban en los templos o palacios.
```

### 13 — La evolución de la administración

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["estado", "jerarquia"]

respuesta: "estatal"
tipo: "completar"
respuestas_validas:
  - "estatal"

enunciado: "La gestión de los recursos excedentes y la redistribución de bienes exigieron una organización ___ compleja, lo que consolidó el poder de las élites en las primeras ciudades."

explicacion: |
  La complejidad de la vida urbana y la gestión de excedentes impulsaron la creación de estructuras de poder centralizadas o estados primordiales.
```

### 14 — Relación entre escritura y control

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["contabilidad", "uruk"]

respuesta: "contabilidad"
tipo: "completar"
respuestas_validas:
  - "contabilidad"

enunciado: "Antes de convertirse en un sistema de escritura fonética, los primeros signos en las ciudades de Mesopotamia servían para la ___ de bienes y ganado."

explicacion: |
  Los proto-escrituras (tokens o fichas de arcilla) eran herramientas de contabilidad para llevar el control de los inventarios en los centros de redistribución.
```

### 15 — El ciclo de la civilización urbana

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["secuencia", "causalidad"]

respuesta_orden: ["excedente agrícola", "especialización del trabajo", "aparición de la escritura"]
tipo: "ordenar"
opciones_explicitas: ["excedente agrícola", "especialización del trabajo", "aparición de la escritura"]

enunciado: "Ordena cronológicamente los fenómenos que permitieron el desarrollo de la civilización urbana en Mesopotamia:"

explicacion: |
  Primero se produce el excedente (producción de más comida de la necesaria), esto permite que no todos tengan que cultivar (especialización), y esa especialización genera la necesidad de registrar la producción (escritura).
```

### 16 — El impacto de la escritura

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["escritura", "sociedad", "memoria"]

tipo: mc
opciones_explicitas: ["Permitió la transmisión de conocimiento más allá de la memoria oral", "Eliminó la necesidad de la comunicación verbal", "Redujo el tamaño de las poblaciones", "Hizo que la historia fuera irrelevante"]
respuesta: "Permitió la transmisión de conocimiento más allá de la memoria oral"

enunciado: "La invención de la escritura en las primeras civilizaciones permitió que el conocimiento fuera ___________."

explicacion: |
  La escritura permitió que la información no dependiera únicamente de la memoria de los individuos, facilitando la acumulación de saber a través de las generaciones.
```

### 17 — Administración y complejidad

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["administracion", "burocracia", "estado"]

tipo: completar
respuestas_validas:
  - "administrar"
  - "controlar"

enunciado: "El desarrollo de sistemas de escritura fue fundamental para poder ___________ las excedentes de producción y los tributos en sociedades cada vez más complejas."

explicacion: |
  La complejidad social de las primeras ciudades requería un registro preciso de recursos, lo que impulsó la creación de sistemas de contabilidad y administración.
```

### 18 — Evolución de la comunicación

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["evolucion", "comunicacion"]

tipo: ordenar
opciones_explicitas: ["Tradición oral", "Signos pictográficos", "Escritura fonética"]

enunciado: "Ordena cronológicamente la evolución de los sistemas de registro de información en las primeras civilizaciones:"

explicacion: |
  La evolución comenzó con la comunicación oral, pasó por representaciones de objetos (pictogramas) y finalmente hacia sistemas que representaban sonidos (fonética).
respuesta_orden: ["Tradición oral", "Signos pictográficos", "Escritura fonética"]
```

### 19 — El rol de la escritura en el Estado

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["estado", "leyes", "orden"]

variables:
  datos: [["leyes escritas", "orden social"], ["leyes orales", "caos"]]
  idx: uno_de([0, 1])

tipo: mc
respuesta: "Estabilidad y orden social"
opciones_explicitas: ["Estabilidad y orden social", "Inestabilidad constante", "Desigualdad extrema"]

enunciado: "Cuando las sociedades pasaron de leyes orales a {datos[idx][0]}, el resultado principal fue la ___________."

explicacion: |
  La codificación de leyes por escrito permitió una aplicación más uniforme y predecible de la justicia, contribuyendo a la estabilidad del Estado.
```

### 20 — La memoria histórica

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["memoria", "registro", "tiempo"]

tipo: completar
tolerancia_abs: 0

enunciado: "Antes de la escritura, la historia dependía de la memoria. Con la escritura, la historia se convierte en un ___ que trasciende el tiempo."

respuesta: "registro"

explicacion: |
  La escritura transformó la memoria humana en un registro físico, permitiendo que la historia fuera un objeto de estudio permanente y no algo sujeto al olvido biológico.
```

### 21 — Escritura Cuneiforme

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "sumerios"]

variables:
  datos: [["cuneiforme", "Mesopotamia"], ["jeroglíficos", "Egipto"], ["logogramas", "China"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mesopotamia", "Egipto", "China", "India"]

enunciado: "El sistema de escritura basado en marcas en forma de cuña se desarrolló en la región de {datos[idx][0]}."

explicacion: |
  La escritura cuneiforme fue desarrollada por los sumerios en la antigua Mesopotamia alrededor del 3200 a.C.
```

### 22 — Jeroglíficos Egipcios

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["egipto", "jeroglíficos"]

variables:
  datos: [["jeroglíficos", "Egipto"], ["cuneiforme", "Mesopotamia"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Egipto", "Mesopotamia", "Fenicia", "China"]

enunciado: "Los {datos[idx][0]} fueron utilizados por las civilizaciones del valle del Nilo."

explicacion: |
  Los jeroglíficos egipcios combinaban logogramas y signos fonéticos para representar el lenguaje.
```

### 23 — Origen de la Escritura

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cronologia", "origen"]

variables:
  datos: [["Mesopotamia", "Sumerios"], ["Egipto", "Egipcios"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Sumerios", "Egipcios"]

enunciado: "La escritura en la región de {datos[idx][0]} fue desarrollada originalmente por los {datos[idx][1]}."

explicacion: |
  La transición de la proto-escritura a sistemas complejos fue fundamental para la administración de las primeras ciudades-estado.
```

### 24 — Evolución de Sistemas

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["orden", "evolucion"]

variables:
  datos: [["Tokens", "Escritura Cuneiforme", "Tablillas"], ["Pictogramas", "Jeroglíficos", "Papiro"]]
  idx: uno_de([0,1])

respuesta_orden: ["Tokens", "Escritura Cuneiforme", "Tablillas"]
tipo: ordenar
opciones_explicitas: ["Tokens", "Escritura Cuneiforme", "Tablillas"]

enunciado: "Ordena la evolución de los soportes y formas de registro en el contexto de {datos[idx][0]} (si es el caso):"

explicacion: |
  El proceso comenzó con objetos de arcilla (tokens) para contar, evolucionando hacia signos abstractos en tablillas.
```

### 25 — El Alfabeto Fenicio

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["fenicia", "alfabeto"]

variables:
  datos: [["alfabético", "Fenicia"], ["logográfico", "China"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Fenicia", "China", "Mesopotamia", "Egipto"]

enunciado: "A diferencia de los sistemas complejos, el sistema {datos[idx][0]} fue perfeccionado por los fenicios en la región de {datos[idx][1]}."

explicacion: |
  El alfabeto fenicio fue un sistema fonético que facilitó el comercio y fue la base de muchos alfabetos modernos.
```
