### 1 — La limitación del trueque
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["trueque", "moneda", "intercambio"]

variables:
  escenario: uno_de([["Un agricultor tiene manzanas y busca zapatos, pero el zapatero solo quiere trigo", "falta de coincidencia de necesidades"], ["Un pescador tiene peces y quiere madera, pero el carpintero solo quiere lana", "falta de coincidencia de necesidades"], ["Un artesano tiene vasijas y quiere carne, pero el carnicero solo quiere herramientas", "falta de coincidencia de necesidades"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["falta de liquidez", "falta de coincidencia de necesidades", "exceso de oferta", "escasez de valor"]

enunciado: "En el siguiente escenario: {escenario[idx][0]}, ¿cuál es la principal limitación del sistema de trueque que impide el intercambio?"

explicacion: |
  El trueque requiere que ambas partes deseen exactamente lo que el otro ofrece en el mismo momento, lo que se conoce como la "doble coincidencia de deseos" o "falta de coincidencia de necesidades". La moneda resuelve esto actuando como un medio de cambio universal.
```

### 2 — El problema de la divisibilidad
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["divisibilidad", "moneda", "valor"]

variables:
  caso: uno_de([["Comprar una manzana con una vaca", "divisibilidad"], ["Comprar un pan con un caballo", "divisibilidad"], ["Comprar un clavo con una oveja", "divisibilidad"]])
  idx: uno_de([0,1,2])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["divisibilidad"]

enunciado: "Si un comerciante desea comprar un objeto de bajo valor utilizando un bien de alto valor (como un animal), se enfrenta al problema de la ___."

explicacion: |
  Muchos bienes son indivisibles (no puedes partir un animal a la mitad sin destruir su valor). La moneda permite fraccionar el valor de forma exacta para transacciones de cualquier escala.
```

### 3 — El costo de la búsqueda
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["costos_transaccion", "eficiencia"]

variables:
  situacion: uno_de([["Buscar un intercambio específico requiere mucho tiempo", "costos de transacción"], ["Perder horas buscando quién quiera el producto", "costos de transacción"]])
  idx: uno_de([0,1])

respuesta: situacion[idx][1]
tipo: mc
opciones_explicitas: ["costos de transacción", "inflación", "escasez", "desequilibrio"]

enunciado: "El tiempo y esfuerzo invertidos en encontrar a alguien que quiera intercambiar sus bienes por los nuestros se denomina: {situacion[idx][0]}."

explicacion: |
  El trueque aumenta los costos de transacción debido a la dificultad de encontrar la pareja de intercambio ideal. La moneda reduce estos costos al estandarizar el medio de intercambio.
```

### 4 — Ordenar la evolución del intercambio
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["evolucion", "historia_moneda"]

respuesta: ["Trueque", "Dinero Mercancía", "Dinero Fiat"]
tipo: ordenar
opciones_explicitas: ["Dinero Fiat", "Trueque", "Dinero Mercancía"]

enunciado: "Ordena cronológicamente las etapas de la evolución de los medios de intercambio, desde el sistema más primitivo al más moderno:"

explicacion: |
  Primero existió el trueque directo, luego se usaron mercancías con valor intrínseco (sal, oro) y finalmente el dinero fiat (basado en la confianza y ley).
```

### 5 — El valor de la unidad de cuenta
```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["unidad_cuenta", "precio"]

variables:
  escenario_precios: uno_de([["Comparar el precio de 10 productos distintos en trueque", "complejidad de precios"], ["Determinar el valor relativo de bienes diversos", "complejidad de precios"]])
  idx: uno_de([0,1])

respuesta: escenario_precios[idx][1]
tipo: mc
opciones_explicitas: ["complejidad de precios", "estabilidad de valor", "liquidez inmediata", "escasez"]

enunciado: "Sin una moneda, establecer un precio estándar para todos los bienes es extremadamente difícil debido a la {escenario_precios[idx][0]}."

explicacion: |
  En un sistema de trueque, el número de precios relativos crece exponencialmente con la cantidad de bienes. La moneda actúa como una "unidad de cuenta" que simplifica la medición del valor.
```