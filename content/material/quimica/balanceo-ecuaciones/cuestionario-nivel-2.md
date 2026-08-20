# Química — Balanceo de ecuaciones (cuestionario, nivel 2, 16 preguntas VBLang)

> Continúa `cuestionario.md` (nivel 1, 30 preguntas). Cubre la
> profundidad de `QI` dentro del Tronco 7: MCM con 3+ elementos,
> ecuación molecular/iónica/iónica neta, iones espectadores, y la
> conexión con `../tipos-reacciones-quimicas/`.
>
> Borrador generado por lotes con LM Studio (Gemma) y corregido a mano.
> Esta tanda salió limpia — sin bugs funcionales.

---

### 1 — Coeficiente del CO2 (combustión del propano)

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["balanceo", "combustion", "propano"]

respuesta: 3
tipo: completar
respuestas_validas: [3]

enunciado: "Al balancear C3H8 + O2 -> CO2 + H2O, el coeficiente del CO2 es ___."

explicacion: |
  Hay 3 átomos de C en el reactivo (C3H8), así que hacen falta 3 CO2 para igualar el carbono en productos.
```

### 2 — Coeficiente del H2O (combustión del propano)

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["balanceo", "combustion", "propano"]

respuesta: 4
tipo: completar
respuestas_validas: [4]

enunciado: "Al balancear C3H8 + O2 -> CO2 + H2O, el coeficiente del H2O es ___."

explicacion: |
  Hay 8 átomos de H en el reactivo; 4 H2O dan 8 hidrógenos (4×2=8) en productos.
```

### 3 — Coeficiente del O2 (combustión del propano)

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["balanceo", "combustion", "propano"]

respuesta: 5
tipo: completar
respuestas_validas: [5]

enunciado: "Al balancear C3H8 + O2 -> CO2 + H2O, el coeficiente del O2 es ___."

explicacion: |
  Oxígenos en productos: (3×2 del CO2) + (4×1 del H2O) = 10. Hacen falta 5 O2 (5×2=10).
```

### 4 — Estrategia de balanceo con varios elementos

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["estrategia", "balanceo"]

respuesta: verdadero
tipo: vf

enunciado: "Al balancear una ecuación con 3 o más elementos, conviene balancear primero el elemento que aparece en MENOS fórmulas."

explicacion: |
  Empezar por el elemento más restringido simplifica los pasos siguientes.
```

### 5 — Ecuación molecular

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "basico"
  tags: ["ecuaciones", "reacciones_quimicas"]

respuesta: "molecular"
tipo: mc
opciones_explicitas: ["molecular", "ionica completa", "ionica neta", "balanceada"]

enunciado: "La ecuación que escribe las fórmulas completas de reactivos y productos, sin disociar nada, se llama ecuación..."

explicacion: |
  La ecuación molecular muestra las sustancias como unidades completas, sin representar la disociación en solución.
```

### 6 — Ecuación iónica completa

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "basico"
  tags: ["ecuaciones", "reacciones_quimicas"]

respuesta: "ionica completa"
tipo: mc
opciones_explicitas: ["ionica completa", "molecular", "ionica neta", "empirica"]

enunciado: "La ecuación que separa en iones todo lo soluble que se disocia en agua se llama ecuación..."

explicacion: |
  La ecuación iónica completa muestra todos los iones presentes en la solución, incluidos los que no reaccionan.
```

### 7 — Iones espectadores

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["ecuaciones", "iones"]

respuesta: "espectadores"
tipo: completar
respuestas_validas: ["espectadores"]

enunciado: "Los iones que aparecen igual de los dos lados de una ecuación iónica, sin participar realmente, se llaman iones ___."

explicacion: |
  Los iones espectadores no cambian su estado ni reaccionan: se omiten en la ecuación iónica neta.
```

### 8 — Ecuación iónica neta

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "basico"
  tags: ["ecuaciones", "reacciones_quimicas"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación iónica neta elimina los iones espectadores de la ecuación iónica completa, mostrando sólo las especies que reaccionan."

explicacion: |
  Verdadero. Se queda con las especies que realmente forman el producto nuevo.
```

### 9 — Identificación de iones espectadores

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["reacciones_ionicas", "iones_espectadores"]

respuesta: "Na+ y NO3-"
tipo: mc
opciones_explicitas: ["Ag+ y Cl-", "Na+ y NO3-", "Na+ y Cl-", "Ag+ y NO3-"]

enunciado: "En AgNO3 + NaCl → AgCl(s) + NaNO3, ¿cuáles son los iones espectadores?"

explicacion: |
  Ag+ y Cl- reaccionan formando AgCl sólido; Na+ y NO3- quedan disueltos sin cambiar: son los espectadores.
```

### 10 — Ecuación iónica neta del ejemplo

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["ecuacion_ionica", "precipitacion"]

respuesta: verdadero
tipo: vf

enunciado: "En AgNO3 + NaCl → AgCl(s) + NaNO3, la ecuación iónica neta es Ag+ + Cl- → AgCl(s)."

explicacion: |
  Correcto. Se eliminan Na+ y NO3-, que no participan en formar el precipitado.
```

### 11 — Coeficientes y nivel de detalle

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["estequiometria", "conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "El balanceo de coeficientes cambia según se use la versión molecular, iónica completa o iónica neta de la misma reacción."

explicacion: |
  Falso. Es la misma reacción; sólo cambia cuánto detalle se muestra (moléculas completas vs. iones), no la proporción real.
```

### 12 — Cantidad de iones espectadores

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["estequiometria", "precipitacion"]

respuesta: "2"
tipo: mc
opciones_explicitas: ["2", "0", "4", "1"]

enunciado: "¿Cuántos iones espectadores hay típicamente en una reacción de precipitación simple como AgNO3 + NaCl?"

explicacion: |
  Uno del catión de la primera sal y otro del anión de la segunda: en este caso, Na+ y NO3-.
```

### 13 — Tipo de reacción y forma de la ecuación

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["balanceo", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Reconocer el tipo de reacción (síntesis, descomposición o desplazamiento) antes de balancear ayuda a anticipar la forma de la ecuación."

explicacion: |
  Saber el patrón (cuántos reactivos/productos) reduce las formas posibles antes de tantear coeficientes.
```

### 14 — Síntesis: un solo producto

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["balanceo", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Una reacción de síntesis balanceada siempre termina con un solo producto."

explicacion: |
  Por definición, en la síntesis varias sustancias se combinan en un único producto.
```

### 15 — Descomposición: un solo reactivo

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "intermedio"
  tags: ["balanceo", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Una reacción de descomposición balanceada siempre parte de un solo reactivo."

explicacion: |
  Correcto: un reactivo se separa en dos o más productos.
```

### 16 — Coeficientes correctos según ejemplo

```
metadata:
  materia: "quimica"
  tema: "balanceo_ecuaciones_nivel_2"
  nivel: "avanzado"
  tags: ["balanceo", "estequiometria"]

variables:
  datos: [["Fe + O2 -> Fe2O3", "4,3,2"], ["N2 + H2 -> NH3", "1,3,2"], ["KClO3 -> KCl + O2", "2,2,3"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["4,3,2", "1,3,2", "2,2,3", "2,1,2"]

enunciado: "¿Cuáles son los coeficientes correctos para balancear: {datos[idx][0]}?"

explicacion: |
  Los coeficientes correctos para esa ecuación son {datos[idx][1]}.
```
