### 1 — El origen de la escritura
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "escritura", "uruk"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas: ["excedente"]

enunciado: "El surgimiento de las primeras ciudades en Mesopotamia, como Uruk, estuvo estrechamente ligado a la capacidad de producir un ___ agrícola que permitía sostener a poblaciones no dedicadas a la agricultura."

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que parte de la población se especializara en otras tareas (artesanos, escribas, sacerdotes), dando origen a la estructura urbana y la necesidad de registrar estas cantidades mediante la escritura.
```

### 2 — Factores de la urbanización
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["causalidad", "sociedad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["excedente agrícola", "escritura", "estratificación social"], ["organización estatal", "irrigación", "especialización"]]]

respuesta: datos[escenario_idx][0][1]
tipo: "mc"
opciones_explicitas: ["datos[escenario_idx][0][0]", "datos[escenario_idx][0][1]", "datos[escenario_idx][0][2]"]

enunciado: "En el contexto de las primeras ciudades mesopotámicas, la aparición de la escritura fue una respuesta directa a la necesidad de gestionar el {datos[escenario_idx][0][0]}."

explicacion: |
  La escritura no nació como un medio de expresión literaria, sino como una herramienta contable para registrar el excedente agrícola y los bienes que entraban en los templos o palacios.
```

### 3 — La evolución de la administración
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["estado", "jerarquia"]

respuesta: "estatal"
tipo: "completar"
respuestas_validas: ["estatal"]

enunciado: "La gestión de los recursos excedentes y la redistribución de bienes exigieron una organización ___ compleja, lo que consolidó el poder de las élites en las primeras ciudades."

explicacion: |
  La complejidad de la vida urbana y la gestión de excedentes impulsaron la creación de estructuras de poder centralizadas o estados primordiales.
```

### 4 — Relación entre escritura y control
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["contabilidad", "uruk"]

respuesta: "contabilidad"
tipo: "completar"
respuestas_validas: ["contabilidad"]

enunciado: "Antes de convertirse en un sistema de escritura fonética, los primeros signos en las ciudades de Mesopotamia servían para la ___ de bienes y ganado."

explicacion: |
  Los proto-escrituras (tokens o fichas de arcilla) eran herramientas de contabilidad para llevar el control de los inventarios en los centros de redistribución.
```

### 5 — El ciclo de la civilización urbana
```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["secuencia", "causalidad"]

respuesta: ["excedente agrícola", "especialización del trabajo", "aparición de la escritura"]
tipo: "ordenar"
opciones_explicitas: ["excedente agrícola", "especialización del trabajo", "aparición de la escritura"]

enunciado: "Ordena cronológicamente los fenómenos que permitieron el desarrollo de la civilización urbana en Mesopotamia:"

explicacion: |
  Primero se produce el excedente (producción de más comida de la necesaria), esto permite que no todos tengan que cultivar (especialización), y esa especialización genera la necesidad de registrar la producción (escritura).
```