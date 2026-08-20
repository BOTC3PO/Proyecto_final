### 1 — Concepto de Productividad
```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "basico"
  tags: ["definicion", "productividad"]

respuesta: "productividad"
tipo: completar
respuestas_validas: ["productividad"]

enunciado: "La relación técnica entre la cantidad de productos obtenidos y la cantidad de recursos o insumos utilizados para su obtención se denomina ___."

explicacion: |
  La productividad mide la eficiencia con la que se transforman los insumos (materia prima, trabajo, capital) en bienes o servicios finales.
```

### 2 — Identificación de Insumos
```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "basico"
  tags: ["insumos", "factores_produccion"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Materia prima", "Precio de venta", "Insumo", "Demanda"]

enunciado: "De acuerdo a la definición de productividad, el factor utilizado en el proceso de transformación es un ___."

datos:
  - ["Materia prima", "Insumo"]
  - ["Precio de venta", "Insumo"]

explicacion: |
  Los insumos son todos aquellos elementos (materiales, energía, tiempo) que se consumen o utilizan en el proceso productivo.
```

### 3 — Relación Insumo-Producto
```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "intermedio"
  tags: ["eficiencia", "calculo"]

variables:
  escenario: uno_de([0, 1])

respuesta: datos[escenario][1]
tipo: vf

enunciado: "Si una empresa mantiene su producción constante pero logra reducir la cantidad de insumos necesarios para obtenerla, ¿ha aumentado su productividad?"

datos:
  - [true, true]
  - [false, false]

explicacion: |
  La productividad es una relación inversa respecto al insumo: a menor insumo para la misma producción, mayor es la productividad.
```

### 4 — Factores de la Productividad
```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: "eficiencia"
tipo: completar
respuestas_validas: ["eficiencia"]

enunciado: "Cuando una empresa utiliza la menor cantidad de recursos posibles para alcanzar un nivel de producción determinado, se dice que está operando con ___."

explicacion: |
  La eficiencia es la capacidad de alcanzar un objetivo (producción) optimizando el uso de los recursos (insumos).
```

### 5 — Componentes del Proceso
```
metadata:
  materia: "economia"
  tema: "productividad_produccion_insumos"
  nivel: "basico"
  tags: ["flujo_produccion"]

respuesta: ["Insumos", "Proceso", "Productos"]
tipo: ordenar
opciones_explicitas: ["Insumos", "Proceso", "Productos"]

enunciado: "Ordene cronológicamente las etapas del ciclo de producción que determinan la productividad:"

explicacion: |
  El flujo lógico comienza con la entrada de recursos (insumos), pasa por la transformación (proceso) y culmina en la salida (productos).
```