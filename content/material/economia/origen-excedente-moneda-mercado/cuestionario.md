# Economia — Origen excedente moneda mercado (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El origen del intercambio

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["excedente", "intercambio"]

respuesta: "trueque"
tipo: "completar"
respuestas_validas:
  - "trueque"

enunciado: "Cuando una sociedad agrícola comienza a producir más de lo que consume, el excedente genera la necesidad de realizar un proceso de intercambio llamado ___."

explicacion: |
  El excedente agrícola permitió que las personas no solo sobrevivieran, sino que pudieran intercambiar sus sobras por otros bienes necesarios, dando inicio al comercio.
```

### 2 — La limitación del intercambio directo

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["trueque", "limitaciones"]

variables:
  escenario: uno_de([["trigo", "herramientas de piedra"], ["lana", "cerámica"], ["fruta", "pieles"]])

respuesta: "doble coincidencia de necesidades"
tipo: "mc"
opciones_explicitas: ["doble coincidencia de necesidades", "especialización del trabajo", "inflación de bienes", "escasez de recursos"]

enunciado: "Un agricultor tiene un excedente de {escenario[0]} y desea obtener {escenario[1]}, pero para lograrlo necesita encontrar a alguien que tenga {escenario[1]} y que, además, necesite exactamente {escenario[0]}. A este problema se le conoce como:"

explicacion: |
  La 'doble coincidencia de necesidades' es la principal dificultad del trueque, ya que requiere que ambas partes coincidan en el tiempo y en el objeto de intercambio.
```

### 3 — Evolución de los medios de cambio

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["moneda", "trueque"]

tipo: vf
respuesta: verdadero

enunciado: "¿El paso del trueque a la moneda fue impulsado por la dificultad de encontrar una doble coincidencia de necesidades?"

explicacion: |
  Correcto. La moneda surge como una solución para evitar la dificultad de encontrar a alguien que quiera exactamente lo que nosotros ofrecemos y que tenga lo que nosotros buscamos.
```

### 4 — Factores del comercio primitivo

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["comercio", "excedente"]

tipo: "ordenar"
opciones_explicitas: ["Producción de excedentes", "Dificultad del trueque", "Aparición de la moneda"]
respuesta_orden: ["Producción de excedentes", "Dificultad del trueque", "Aparición de la moneda"]

enunciado: "Ordena cronológicamente los hitos que permitieron la evolución del sistema de intercambio:"

explicacion: |
  Primero aparece el excedente, luego se detecta que el trueque es ineficiente por la doble coincidencia de necesidades, y finalmente se crea la moneda para facilitar el intercambio.
```

### 5 — El valor en el intercambio

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["valor", "intercambio"]

variables:
  caso: uno_de([["5 sacos de grano", "2 hachas de cobre"], ["3 cabras", "1 manta de lana"], ["10 cestas de fruta", "2 vasijas de barro"]])

respuesta: "valor_relativo"
tipo: "mc"
opciones_explicitas: ["valor_relativo", "valor_absoluto", "costo_de_produccion", "precio_fijo"]

enunciado: "En un sistema de trueque, si un agricultor intercambia {caso[0]} por {caso[1]}, el valor de los bienes se determina de forma ___ (es decir, depende de la relación entre las necesidades de ambos)."

explicacion: |
  En el trueque, el valor no es absoluto, sino relativo a la utilidad que cada parte le asigne al bien en ese momento específico de intercambio.
```

### 6 — El problema del trueque

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["trueque", "intercambio"]

respuesta: "doble coincidencia de deseos"
tipo: completar
respuestas_validas:
  - "doble coincidencia de deseos"

enunciado: "Para que el trueque sea efectivo, es necesaria la ___ de deseos, lo que significa que ambas partes deben querer intercambiar exactamente lo que el otro ofrece."

explicacion: |
  El trueque requiere que cada persona encuentre a otra que tenga lo que necesita y que, además, necesite lo que ella ofrece, un proceso ineficiente llamado doble coincidencia de deseos.
```

### 7 — Funciones de la moneda

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["funciones_moneda", "teoria_monetaria"]

respuesta: "medio de cambio"
tipo: mc
opciones_explicitas: ["unidad de cuenta", "medio de cambio", "reserva de valor"]

enunciado: "Si un comerciante utiliza una moneda para facilitar la transacción inmediata de un bien, está utilizando la moneda como: ___"

explicacion: |
  La función de medio de cambio permite que la moneda actúe como un intermediario en el intercambio, eliminando la necesidad de buscar una coincidencia exacta de bienes.
```

### 8 — Evolución de los medios de intercambio

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["evolucion_moneda", "historia_economica"]

respuesta_orden: ["Trueque", "Dinero Mercancía", "Dinero Papel", "Dinero Fiduciario"]
tipo: ordenar

opciones_explicitas: ["Trueque", "Dinero Mercancía", "Dinero Papel", "Dinero Fiduciario"]

enunciado: "Ordena cronológicamente la evolución de los medios de intercambio en una economía de mercado:"

explicacion: |
  La economía evolucionó desde el intercambio directo de bienes (trueque) hacia mercancías con valor intrínseco (sal, oro), luego hacia representaciones físicas (papel moneda) y finalmente hacia sistemas basados en la confianza (fiduciario).
```

### 9 — El valor de la moneda

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["valor", "moneda"]

respuesta: 13
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una unidad de medida de valor (unidad de cuenta) establece que un saco de trigo vale 5 monedas y un saco de cebada vale 8 monedas, ¿cuántas monedas se requieren para intercambiar ambos sacos de forma equivalente?"

pasos:
  - "Identificar el valor de cada bien en la unidad de cuenta."
  - "Sumar los valores de ambos bienes."

explicacion: |
  La función de unidad de cuenta permite expresar los valores de distintos bienes en términos comunes, facilitando la suma y comparación de precios.
```

### 10 — La función de reserva de valor

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["reserva_valor", "ahorro"]

respuesta: "reserva de valor"
tipo: mc
opciones_explicitas: ["medio de cambio", "unidad de cuenta", "reserva de valor"]

enunciado: "Cuando una persona decide guardar parte de sus ingresos en moneda para realizar una compra importante en el futuro, está utilizando la moneda como:"

explicacion: |
  La función de reserva de valor permite transferir poder adquisitivo del presente al futuro, permitiendo el ahorro.
```

### 11 — El valor de las conchas

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["moneda_mercado", "dinero_mercado", "historia_economica"]

variables:
  escenario: uno_de([["conchas cauri", "conchas"], ["sal", "sal"]])

enunciado: "En diversas culturas antiguas, antes de la existencia de monedas acuñadas, se utilizaban objetos con valor intrínseco como medio de cambio. Un ejemplo común es el uso de {escenario[0]}."

opciones_explicitas: ["conchas", "sal", "piedras", "madera"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  Antes de la moneda metálica, se utilizaban bienes de consumo o decorativos que tenían valor por su escasez o utilidad, como las conchas cauri o la sal.
```

### 12 — Propiedades del dinero mercancía

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["dinero_mercado", "propiedades_dinero"]

respuestas_validas:
  - "durabilidad"
  - "divisibilidad"
  - "escasez"
respuesta: "durabilidad"
tipo: completar

enunciado: "Para que un objeto funcione eficazmente como dinero mercancía, debe poseer ciertas propiedades. La capacidad de resistir el paso del tiempo y el uso sin degradarse se denomina ___."

explicacion: |
  La durabilidad es esencial para que el valor se preserve a través de las transacciones y el tiempo.
```

### 13 — Evolución del intercambio

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["trueque", "moneda_mercado"]

variables:
  orden_pasos: [["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"], ["Trueque directo", "Uso de metales preciosos", "Moneda acuñada"], ["Trueque directo", "Uso de sal", "Moneda acuñada"]]

enunciado: "Ordene cronológicamente la evolución de los medios de intercambio en una economía en desarrollo."

opciones_explicitas: ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"]
respuesta_orden: ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"]
tipo: ordenar

explicacion: |
  La economía evoluciona desde el intercambio directo de bienes (trueque), pasando por objetos con valor intrínseco (dinero mercancía), hasta la estandarización con monedas metálicas.
```

### 14 — Metales preciosos y valor

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["metales_preciosos", "valor_intrínseco"]

variables:
  metal_idx: uno_de([0, 1])
  metal_datos: [["oro", "oro"], ["plata", "plata"]]

enunciado: "El uso de {metal_datos[metal_idx][0]} como medio de cambio se debió a su valor intrínseco y su facilidad de transporte."

respuesta: metal_datos[metal_idx][1]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Los metales preciosos fueron fundamentales para la transición hacia la moneda debido a su escasez y homogeneidad.
```

### 15 — El problema del trueque

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["trueque", "costos_transaccion"]

variables:
  problema_idx: uno_de([0, 1])
  problema_datos: [["doble coincidencia de deseos", "falta de divisibilidad"], ["doble coincidencia de deseos", "falta de durabilidad"]]

enunciado: "Uno de los principales obstáculos del trueque que impulsó la creación del dinero fue la ___."

opciones_explicitas: ["doble coincidencia de deseos", "falta de divisibilidad", "exceso de oferta"]
respuesta: problema_datos[problema_idx][0]
tipo: mc

explicacion: |
  El trueque requiere que dos personas quieran exactamente lo que el otro ofrece en el mismo momento, lo cual es ineficiente y da origen a la necesidad de un medio de cambio.
```

### 16 — El origen del intercambio

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["intercambio", "excedente", "neolítico"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas:
  - "excedente"
  - "excedente_productivo"

enunciado: "Cuando una sociedad logra producir más de lo que necesita para su subsistencia inmediata, se genera un ___ que permite el inicio del intercambio."

explicacion: |
  El excedente es la base del comercio: al sobrar productos, las comunidades pueden intercambiar lo que les sobra por lo que les falta.
```

### 17 — Especialización y mercado

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["especializacion", "division_del_trabajo"]

variables:
  escenario: uno_de([["agricultor", "trigo"], ["pastor", "lana"], ["alfarero", "cerámica"]])

respuesta: "mercado"
tipo: "completar"
respuestas_validas:
  - "mercado"

enunciado: "En una economía con división del trabajo, un {escenario[0]} produce un excedente de {escenario[1]}. Si este desea obtener un bien diferente, debe acudir al ___ para realizar un intercambio."

explicacion: |
  La especialización permite que cada individuo se concentre en una actividad, generando excedentes específicos que se intercambian en el mercado.
```

### 18 — Evolución del intercambio

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["barter", "trueque", "moneda"]

tipo: ordenar
opciones_explicitas: ["trueque", "moneda", "dinero_fiduciario"]
respuesta_orden: ["trueque", "moneda", "dinero_fiduciario"]

enunciado: "Ordena cronológicamente las formas de intercambio según la complejidad del medio de cambio:"

explicacion: |
  El proceso evolutivo comenzó con el trueque directo, pasó por el uso de mercancías como dinero (moneda mercancía) y llegó al dinero fiduciario actual.
```

### 19 — La función de la moneda

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["moneda", "liquidez", "intercambio"]

variables:
  caso: uno_de(["sal", "conchas", "metales"])

respuesta: "unidad de cuenta"
tipo: "mc"
opciones_explicitas: ["unidad de cuenta", "medio de cambio", "reserva de valor"]

enunciado: "Para facilitar el comercio de excedentes, se utilizan objetos como medio de cambio. Si usamos {caso} para expresar y comparar el valor de otros bienes, estamos usando esa mercancía como:"

explicacion: |
  La moneda actúa como un estándar de valor que resuelve la dificultad de coincidencia de necesidades del trueque.
```

### 20 — El mercado como espacio

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["mercado", "abstracto", "social"]

tipo: vf
respuesta: falso

enunciado: "El mercado es estrictamente un lugar físico (como una plaza o feria) y no puede existir de forma abstracta o virtual."

explicacion: |
  El mercado es un concepto institucional y social que define las reglas de intercambio; puede ser físico (un mercado de abastos) o abstracto (el mercado de divisas).
```

### 21 — La limitación del trueque

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["trueque", "moneda", "intercambio"]

variables:
  datos: [["Un agricultor tiene manzanas y busca zapatos, pero el zapatero solo quiere trigo", "falta de coincidencia de necesidades"], ["Un pescador tiene peces y quiere madera, pero el carpintero solo quiere lana", "falta de coincidencia de necesidades"], ["Un artesano tiene vasijas y quiere carne, pero el carnicero solo quiere herramientas", "falta de coincidencia de necesidades"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["falta de liquidez", "falta de coincidencia de necesidades", "exceso de oferta", "escasez de valor"]

enunciado: "En el siguiente escenario: {datos[idx][0]}, ¿cuál es la principal limitación del sistema de trueque que impide el intercambio?"

explicacion: |
  El trueque requiere que ambas partes deseen exactamente lo que el otro ofrece en el mismo momento, lo que se conoce como la "doble coincidencia de deseos" o "falta de coincidencia de necesidades". La moneda resuelve esto actuando como un medio de cambio universal.
```

### 22 — El problema de la divisibilidad

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["divisibilidad", "moneda", "valor"]

variables:
  datos: [["Comprar una manzana con una vaca", "divisibilidad"], ["Comprar un pan con un caballo", "divisibilidad"], ["Comprar un clavo con una oveja", "divisibilidad"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "divisibilidad"

enunciado: "Si un comerciante desea comprar un objeto de bajo valor utilizando un bien de alto valor (como un animal), se enfrenta al problema de la ___."

explicacion: |
  Muchos bienes son indivisibles (no puedes partir un animal a la mitad sin destruir su valor). La moneda permite fraccionar el valor de forma exacta para transacciones de cualquier escala.
```

### 23 — El costo de la búsqueda

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["costos_transaccion", "eficiencia"]

variables:
  datos: [["Buscar un intercambio específico requiere mucho tiempo", "costos de transacción"], ["Perder horas buscando quién quiera el producto", "costos de transacción"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["costos de transacción", "inflación", "escasez", "desequilibrio"]

enunciado: "El tiempo y esfuerzo invertidos en encontrar a alguien que quiera intercambiar sus bienes por los nuestros se denomina: {datos[idx][0]}."

explicacion: |
  El trueque aumenta los costos de transacción debido a la dificultad de encontrar la pareja de intercambio ideal. La moneda reduce estos costos al estandarizar el medio de intercambio.
```

### 24 — Ordenar la evolución del intercambio

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["evolucion", "historia_moneda"]

respuesta_orden: ["Trueque", "Dinero Mercancía", "Dinero Fiat"]
tipo: ordenar
opciones_explicitas: ["Dinero Fiat", "Trueque", "Dinero Mercancía"]

enunciado: "Ordena cronológicamente las etapas de la evolución de los medios de intercambio, desde el sistema más primitivo al más moderno:"

explicacion: |
  Primero existió el trueque directo, luego se usaron mercancías con valor intrínseco (sal, oro) y finalmente el dinero fiat (basado en la confianza y ley).
```

### 25 — El valor de la unidad de cuenta

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["unidad_cuenta", "precio"]

variables:
  datos: [["Comparar el precio de 10 productos distintos en trueque", "complejidad de precios"], ["Determinar el valor relativo de bienes diversos", "complejidad de precios"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["complejidad de precios", "estabilidad de valor", "liquidez inmediata", "escasez"]

enunciado: "Sin una moneda, establecer un precio estándar para todos los bienes es extremadamente difícil debido a la {datos[idx][0]}."

explicacion: |
  En un sistema de trueque, el número de precios relativos crece exponencialmente con la cantidad de bienes. La moneda actúa como una "unidad de cuenta" que simplifica la medición del valor.
```
