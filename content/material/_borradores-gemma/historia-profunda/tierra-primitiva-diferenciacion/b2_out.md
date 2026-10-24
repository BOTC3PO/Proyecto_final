### 1 — El núcleo planetario
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["diferenciacion", "nucleo", "densidad"]

respuesta: "hierro y níquel"
tipo: completar
respuestas_validas: ["hierro y níquel", "hierro, níquel"]

enunciado: "Durante la etapa de océano de magma, los elementos más densos como el ___ se hundieron hacia el centro para formar el núcleo."

explicacion: |
  Debido a la gravedad, los materiales con mayor densidad (metales pesados) migraron hacia el centro del planeta, proceso conocido como diferenciación por gravedad.
```

### 2 — Capas de la Tierra
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["capas", "silicatos", "manto"]

respuesta: "silicatos"
tipo: mc
opciones_explicitas: ["silicatos", "hierro", "níquel", "magnesio"]

enunciado: "¿Qué tipo de materiales predominan en las capas externas (manto y corteza) debido a su baja densidad en comparación con los metales?"

explicacion: |
  Los silicatos son minerales menos densos que los metales, por lo que flotaron hacia la superficie durante la diferenciación planetaria.
```

### 3 — Proceso de diferenciación
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["proceso", "magma", "gravedad"]

respuesta: ["Estado fundido", "Diferenciación por densidad", "Formación de capas"]
tipo: ordenar
opciones_explicitas: ["Estado fundido", "Diferenciación por densidad", "Formación de capas"]

enunciado: "Ordena cronológicamente los eventos que permitieron la estructura actual de la Tierra:"

explicacion: |
  Primero la Tierra debe estar fundida (oceano de magma), luego la gravedad actúa separando materiales por peso, resultando en la estructura de capas.
```

### 4 — Densidad y posición
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["densidad", "correlacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["núcleo", "alta densidad", "hierro"], ["corteza", "baja densidad", "silicatos"]]

respuesta: datos[escenario_idx][2]
tipo: mc
opciones_explicitas: ["hierro", "silicatos", "magnesio", "aluminio"]

enunciado: "Si analizamos la {datos[escenario_idx][0]}, que se caracteriza por tener una {datos[escenario_idx][1]}, el elemento principal que la compone es el ___."

explicacion: |
  La posición de un material en la Tierra primitiva dependía directamente de su densidad: lo más denso abajo, lo menos denso arriba.
```

### 5 — El océano de magma
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["estado_fisico", "condicion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es verdadero o falso que la diferenciación planetaria requiere que la Tierra se encuentre en un estado fundido o parcialmente fundido para que los materiales se muevan por gravedad?"

explicacion: |
  Sin un estado líquido o viscoso (magma), los materiales sólidos no podrían migrar a través de la masa planetaria para separarse por densidad.
```