### 1 — Selección de material para recubrimiento térmico
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["ceramicos", "propiedades"]

variables:
  escenario: uno_de([["un horno industrial de alta temperatura", "cerámicos"], ["un cable eléctrico de alta conductividad", "metales"], ["un envase de plástico ligero para alimentos", "polímeros"]])
  idx: uno_de([0,1,2])

opciones_explicitas: ["metales", "cerámicos", "polímeros"]

enunciado: "Se requiere un material para {"escenario[0]} debido a su excelente resistencia al calor y su naturaleza aislante. El tipo de material adecuado es: ___"

respuestas_validas: ["cerámicos"]

respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  Los materiales cerámicos se caracterizan por su alto punto de fusión y su capacidad de actuar como aislantes térmicos y eléctricos, lo que los hace ideales para aplicaciones de alta temperatura.
```

### 2 — Conductividad en aplicaciones eléctricas
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "basico"
  tags: ["metales", "electricidad"]

variables:
  propiedad: uno_de(["alta conductividad eléctrica", "baja conductividad eléctrica", "aislamiento total"])
  es_metal: uno_de([true, false])

enunciado: "Los metales se distinguen principalmente por su {propiedad} debido a la movilidad de sus electrones de valencia."

respuesta: es_metal
tipo: vf

explicacion: |
  Los metales poseen un "mar de electrones" libres que permite el transporte eficiente de carga eléctrica, lo que define su alta conductividad.
```

### 3 — Identificación de polímeros
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["polimeros", "densidad"]

variables:
  caso: uno_de([["un neumático de automóvil", "caucho"], ["una botella de PET", "polímero"], ["una viga de acero", "metal"]])
  idx: uno_de([0,1,2])

opciones_explicitas: ["metal", "polímero", "cerámico"]

enunciado: "Analizando el caso de {"caso[0]}, observamos un material con baja densidad y gran flexibilidad. Este pertenece a la familia de los: ___"

respuesta: caso[idx][1]
tipo: mc

explicacion: |
  Los polímeros son macromoléculas formadas por unidades repetitivas (monómeros) que generalmente presentan baja densidad y alta ductilidad/flexibilidad en comparación con metales o cerámicos.
```

### 4 — Componentes de un material compuesto
```
metadata:
  materia: "materiales"
  tema: "familias_de_materiales"
  nivel: "intermedio"
  tags: ["compuestos", "estructura"]

variables:
  componente_matriz: uno_de(["resina epóxica", "cemento", "aluminio"])
  componente_refuerzo: uno_de(["fibra de carbono", "arena", "magnesio"])
  es_compuesto: true

enunciado: "Un material compuesto se define por la combinación de dos o más fases. Si combinamos una matriz de {"componente_matriz} con un refuerzo de {"componente_refuerzo}, estamos creando un material de tipo compuesto."

respuesta: true
tipo: vf

explicacion: |
  Los materiales compuestos (como el CFRP) combinan una matriz (que da forma y transfiere cargas) y un refuerzo (que aporta rigidez/resistencia), logrando propiedades superiores a sus componentes por separado.
```

### 5 — Secuencia de procesamiento de un polímero termoplástico
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

respuesta: ["Calentamiento del polímero", "Moldeo por inyección", "Enfriamiento y desmolde"]
tipo: ordenar

explicacion: |
  En los termoplásticos, el material debe fundirse primero (calentamiento), ser forzado en el molde (moldeo) y finalmente solidificarse para recuperar su forma (enfriamiento).
```