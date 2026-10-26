### 1 — Redundancia de datos
```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["redundancia", "integridad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Nombre del Cliente", "Dirección del Cliente"], ["Nombre del Producto", "Precio del Producto"]]
  error_tipo: uno_de([0, 1])
  errores: [["Inconsistencia", "Anomalía de actualización"], ["Inconsistencia", "Anomalía de inserción"]]

respuesta: escenarios[escenario_idx][error_tipo]
tipo: mc
opciones_explicitas: ["Inconsistencia", "Anomalía de actualización", "Anomalía de inserción", "Pérdida de integridad"]

enunciado: "Si en una tabla de ventas repetimos el {escenario_idx} para cada producto vendido, y el cliente cambia de domicilio pero solo actualizamos una fila, generamos una anomalía de tipo: ___"

explicacion: |
  La redundancia de datos provoca que la información se repita innecesariamente, lo que deriva en anomalías de actualización cuando los datos no se mantienen sincronizados en todos los registros.
```

### 2 — El objetivo de la normalización
```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["objetivo", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo principal de la normalización es minimizar la redundancia de datos para evitar anomalías de inserción, actualización y borrado."

explicacion: |
  Correcto. La normalización busca estructurar las tablas para que cada dato se almacene en un único lugar, garantizando la integridad de la información.
```

### 3 — Anomalía de Inserción
```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["anomalia", "insercion"]

variables:
  caso_idx: uno_de([0])
  casos: [["No podemos registrar un nuevo curso si no hay alumnos inscritos", "No podemos registrar un proveedor si no tiene productos"]]

respuesta: casos[caso_idx][0]
tipo: completar
respuestas_validas: ["No podemos registrar un nuevo curso si no hay alumnos inscritos", "No podemos registrar un nuevo proveedor si no tiene productos"]

enunciado: "En una tabla desnormalizada que combina 'Estudiantes' y 'Cursos', si intentamos agregar un curso que aún no tiene alumnos inscritos y la clave primaria depende de ambos, nos enfrentamos a una: ___"

explicacion: |
  Esto se conoce como anomalía de inserción: la imposibilidad de añadir información porque falta un dato que forma parte de la clave primaria.
```

### 4 — Secuencia de Normalización
```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta: ["1FN", "2FN", "3FN"]
tipo: ordenar
opciones_explicitas: ["3FN", "1FN", "2FN"]

enunciado: "Ordena los pasos lógicos para alcanzar la Tercera Forma Normal (3FN) partiendo de una tabla no normalizada:"

explicacion: |
  El proceso de normalización es iterativo y jerárquico: primero se asegura la atomicidad (1FN), luego la dependencia funcional completa (2FN) y finalmente se eliminan las dependencias transitivas (3FN).
```

### 5 — Dependencia Funcional
```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["dependencia", "funcional"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["ID_Empleado -> Nombre_Empleado", "ID_Producto -> Fecha_Venta"], ["ID_Cliente -> Dirección_Cliente", "ID_Pedido -> ID_Cliente"]]

respuesta: ejemplos[ejemplo_idx][0]
tipo: mc
opciones_explicitas: ["ID_Empleado -> Nombre_Empleado", "ID_Producto -> Fecha_Venta", "ID_Cliente -> Dirección_Cliente", "ID_Pedido -> ID_Cliente"]

enunciado: "Para cumplir con la Segunda Forma Normal (2FN), debemos asegurar que todos los atributos no clave dependan de la clave primaria completa. Un ejemplo de una dependencia funcional válida es: ___"

explicacion: |
  En la 2FN, cada atributo que no es parte de la clave debe depender de toda la clave primaria, no solo de una parte de ella (evitando dependencias parciales).
```