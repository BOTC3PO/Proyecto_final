# Oficios — Cocina/Gastronomía — Compras, inventario y gestión de cocina (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Escrito por Claude; no obligatorio para el logro del oficio (ver `../../dependencias.md`).

---

### 1 — Ficha técnica

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "basico"
  tags: ["ficha"]

enunciado: "¿Qué es la ficha técnica de un plato?"
tipo: mc
opciones_explicitas:
  - "El documento con ingredientes, cantidades, rendimiento, alérgenos y costo"
  - "Un menú impreso para el cliente"
  - "Un registro de temperaturas"
respuesta: "El documento con ingredientes, cantidades, rendimiento, alérgenos y costo"

explicacion: |
  Permite repetir el plato y calcular su costo.
```

### 2 — Actualizar

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "basico"
  tags: ["ficha"]

respuesta: verdadero
tipo: vf

enunciado: "La ficha técnica se actualiza cuando cambian los precios o la receta."

explicacion: |
  Si no, los costos calculados quedan desactualizados.
```

### 3 — Proveedores

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "basico"
  tags: ["compras"]

enunciado: "¿Qué conviene tener por cada rubro de compra?"
tipo: mc
opciones_explicitas:
  - "Más de un proveedor para comparar"
  - "Un único proveedor sin alternativas"
  - "Ninguno fijo"
respuesta: "Más de un proveedor para comparar"

explicacion: |
  Se comparan precio, calidad, pago y plazo de entrega.
```

### 4 — Comprar mucho

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "intermedio"
  tags: ["compras"]

respuesta: falso
tipo: vf

enunciado: "Comprar mucha cantidad por un descuento siempre conviene."

explicacion: |
  Solo conviene si se consume antes de que se estropee.
```

### 5 — Recepción

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "basico"
  tags: ["recepcion"]

enunciado: "¿Qué se verifica en la recepción?"
tipo: mc
opciones_explicitas:
  - "Que coincida con el remito y el pedido, la temperatura y el estado"
  - "Solo el precio"
  - "Solo el color de la caja"
respuesta: "Que coincida con el remito y el pedido, la temperatura y el estado"

explicacion: |
  Es el momento de rechazar lo que no cumple.
```

### 6 — Guardar

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "basico"
  tags: ["recepcion"]

enunciado: "Después de recibir mercadería refrigerada, ¿qué se hace?"
tipo: mc
opciones_explicitas:
  - "Guardarla enseguida y etiquetarla"
  - "Dejarla en la mesada hasta el servicio"
  - "Lavarla y dejarla afuera"
respuesta: "Guardarla enseguida y etiquetarla"

explicacion: |
  La cadena de frío no se interrumpe.
```

### 7 — PEPS

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "basico"
  tags: ["almacen"]

tipo: completar
enunciado: "El método de rotación PEPS significa primero en entrar, primero en ___."
respuestas_validas:
  - "salir"

explicacion: |
  Lo más viejo se usa primero.
```

### 8 — Orden

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "basico"
  tags: ["almacen"]

enunciado: "¿Cómo se guarda lo crudo respecto de lo cocido?"
tipo: mc
opciones_explicitas:
  - "Debajo y tapado"
  - "Arriba y destapado"
  - "No importa"
respuesta: "Debajo y tapado"

explicacion: |
  Evita la contaminación cruzada.
```

### 9 — Inventario

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "basico"
  tags: ["inventario"]

enunciado: "¿Qué es el inventario?"
tipo: mc
opciones_explicitas:
  - "El recuento periódico de lo que hay"
  - "La lista de proveedores"
  - "El precio de venta de los platos"
respuesta: "El recuento periódico de lo que hay"

explicacion: |
  Puede ser semanal o mensual.
```

### 10 — Fórmula consumo

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "intermedio"
  tags: ["inventario"]

enunciado: "¿Cómo se calcula el consumo de un período?"
tipo: mc
opciones_explicitas:
  - "Inventario inicial + compras − inventario final"
  - "Compras − ventas"
  - "Inventario final − inventario inicial"
respuesta: "Inventario inicial + compras − inventario final"

explicacion: |
  Se compara con lo que debería haberse usado.
```

### 11 — Diferencia grande

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "intermedio"
  tags: ["inventario"]

enunciado: "Si el consumo real es mucho mayor que el teórico, ¿qué indica?"
tipo: mc
opciones_explicitas:
  - "Un problema de mermas, porciones, recepción o recetas"
  - "Que el local vende más"
  - "Que los precios bajaron"
respuesta: "Un problema de mermas, porciones, recepción o recetas"

explicacion: |
  Hay que investigar la causa.
```

### 12 — Valor del inventario

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "basico"
  tags: ["inventario", "calculo"]

variables:
  kg: random(5, 40)
  precio: random(500, 4000)

respuesta: kg * precio
tipo: input
tolerancia_abs: 1

enunciado: "En la despensa hay {kg} kg de un producto que cuesta ${precio} el kilo. ¿Cuánto vale ese stock, en pesos?"

pasos:
  - "Valor = cantidad × costo unitario"
  - "{kg} × {precio}"

explicacion: |
  El inventario se valoriza multiplicando cantidad por costo unitario.
```

### 13 — Consumo del período

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "intermedio"
  tags: ["inventario", "calculo"]

variables:
  ini: random(20, 60)
  comp: random(30, 100)
  fin: random(10, 50)

respuesta: ini + comp - fin
tipo: input
tolerancia_abs: 0

enunciado: "El inventario inicial de un producto era {ini} kg, se compraron {comp} kg y el inventario final fue {fin} kg. ¿Cuál fue el consumo, en kg?"

pasos:
  - "Consumo = inicial + compras − final"
  - "{ini} + {comp} − {fin}"

explicacion: |
  Se suma lo que había con lo que entró y se resta lo que quedó.
```

### 14 — Punto de pedido

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "avanzado"
  tags: ["stock", "calculo"]

variables:
  consumo: random(2, 12)
  dias: random(2, 7)
  seguridad: random(3, 15)

respuesta: consumo * dias + seguridad
tipo: input
tolerancia_abs: 0

enunciado: "Se consumen {consumo} kg por día, el proveedor tarda {dias} días en entregar y el stock de seguridad es de {seguridad} kg. ¿A qué nivel de stock (en kg) hay que hacer el pedido?"

pasos:
  - "Punto de pedido = consumo diario × días de entrega + stock de seguridad"

explicacion: |
  Cubre el consumo durante la espera más el colchón de seguridad.
```

### 15 — Stock de seguridad

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "intermedio"
  tags: ["stock"]

enunciado: "¿Para qué sirve el stock de seguridad?"
tipo: mc
opciones_explicitas:
  - "Para cubrir imprevistos"
  - "Para vencer más rápido"
  - "Para bajar el precio"
respuesta: "Para cubrir imprevistos"

explicacion: |
  Es un colchón.
```

### 16 — Food cost

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "intermedio"
  tags: ["costos", "calculo"]

variables:
  costo: random(200, 900)
  venta: random(1000, 4000)

respuesta: redondear(costo / venta * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Un plato tiene ingredientes por ${costo} y se vende a ${venta}. ¿Cuál es el porcentaje de costo de mercadería? (redondeá a un decimal)"

pasos:
  - "Food cost % = costo / precio de venta × 100"

explicacion: |
  Es la parte del precio que se va en ingredientes.
```

### 17 — Precio mínimo

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "avanzado"
  tags: ["costos", "calculo"]

variables:
  costo: uno_de([300, 450, 600, 900])
  pct: uno_de([25, 30, 40, 50])

respuesta: redondear(costo / (pct / 100), 0)
tipo: input
tolerancia_abs: 1

enunciado: "Un plato cuesta ${costo} en ingredientes y el objetivo de costo de mercadería es {pct}%. ¿Cuál es el precio de venta mínimo, en pesos?"

pasos:
  - "Precio = costo / porcentaje objetivo"

explicacion: |
  Se divide el costo por el porcentaje expresado como decimal.
```

### 18 — Costo por porción

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "intermedio"
  tags: ["costos", "calculo"]

variables:
  total: random(2000, 9000)
  porc: uno_de([4, 5, 8, 10])

respuesta: redondear(total / porc, 0)
tipo: input
tolerancia_abs: 1

enunciado: "Una receta de {porc} porciones cuesta ${total} en total. ¿Cuánto cuesta cada porción, en pesos? (redondeá al entero)"

pasos:
  - "Costo por porción = costo total / porciones"

explicacion: |
  Se reparte el costo entre las porciones.
```

### 19 — Costo por kilo útil

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "avanzado"
  tags: ["costos", "calculo"]

variables:
  precio: random(800, 3000)
  util: uno_de([50, 60, 70, 80, 90])

respuesta: redondear(precio / (util / 100), 0)
tipo: input
tolerancia_abs: 2

enunciado: "Un kilo de verdura cuesta ${precio} y solo se aprovecha el {util}% después de limpiarla. ¿Cuánto cuesta el kilo útil, en pesos? (redondeá al entero)"

pasos:
  - "Costo útil = precio / rendimiento"

explicacion: |
  Cuanto menos se aprovecha, más cuesta el kilo realmente usable.
```

### 20 — Otros costos

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "avanzado"
  tags: ["costos"]

respuesta: verdadero
tipo: vf

enunciado: "El precio de venta debe cubrir también personal, alquiler y servicios, no solo la mercadería."

explicacion: |
  Esos costos no entran en el costo de mercadería.
```

### 21 — Porciones

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "basico"
  tags: ["control"]

respuesta: verdadero
tipo: vf

enunciado: "Controlar las porciones con balanza o utensilios medidores evita desvíos."

explicacion: |
  Las porciones excesivas aumentan el costo.
```

### 22 — Objetivo

```
metadata:
  materia: "oficios"
  tema: "cocina_compras_inventario_y_gestion_de_cocina"
  nivel: "intermedio"
  tags: ["gestion"]

enunciado: "¿Qué busca la gestión de cocina?"
tipo: mc
opciones_explicitas:
  - "Que el dinero se transforme en platos servidos y no en residuos"
  - "Reducir la calidad"
  - "Comprar siempre lo más barato"
respuesta: "Que el dinero se transforme en platos servidos y no en residuos"

explicacion: |
  No busca recortar calidad.
```
