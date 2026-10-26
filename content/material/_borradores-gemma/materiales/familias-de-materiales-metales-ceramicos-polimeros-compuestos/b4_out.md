### 1 — Clasificación de materiales por estructura
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

### 2 — Propiedades de los cerámicos
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["ceramicos", "propiedades"]

variables:
  es_ceramico_fragil: true

respuesta: es_ceramico_fragil
tipo: vf

enunciado: "A diferencia de los metales, los materiales cerámicos se caracterizan por ser altamente frágiles ante la aplicación de cargas mecánicas."

explicacion: |
  Los cerámicos poseen enlaces iónicos o covalentes muy fuertes que impiden el movimiento de dislocaciones, resultando en una baja tenacidad y alta fragilidad.
```

### 3 — Composición de los materiales compuestos
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["compuestos", "definicion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["fibra de carbono", "resina epoxi"],
    ["arena", "cemento"]
  ]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["resina epoxi", "cemento"]

enunciado: "Un material compuesto se distingue de una aleación porque combina dos o más fases distintas. Por ejemplo, en un material reforzado con fibras de {datos[escenario_idx][0]}, la fase continua es la {datos[escenario_idx][1]}."

explicacion: |
  En un compuesto, la fase continua (matriz) rodea a la fase dispersa (refuerzo) para combinar propiedades que ninguna de las fases posee por separado.
```

### 4 — Estructura molecular de los polímeros
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["polimeros", "moleculas"]

respuesta: "cadenas largas de macromoléculas"
tipo: completar
respuestas_validas: ["cadenas largas de macromoléculas", "átomos en red cúbica"]

enunciado: "Lo que distingue fundamentalmente a los polímeros de los metales y cerámicos es que su estructura está formada por ___."

explicacion: |
  Los polímeros están constituidos por unidades repetitivas (monómeros) que se unen para formar largas cadenas, lo que determina su baja densidad y flexibilidad.
```

### 5 — Jerarquía de complejidad en materiales
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "avanzado"
  tags: ["orden", "jerarquia"]

respuesta: ["átomos", "moléculas", "microestructura", "material compuesto"]
tipo: ordenar
opciones_explicitas: ["átomos", "moléculas", "microestructura", "material compuesto"]

enunciado: "Ordene de lo más simple a lo más complejo la jerarquía de organización de la materia, desde el nivel atómico hasta la formación de un material compuesto funcional."

explicacion: |
  La jerarquía comienza en los átomos, que forman moléculas (en polímeros) o redes (en cerámicos/metales), cuya organización forma la microestructura, la cual es la base para diseñar materiales compuestos con propiedades específicas.
```