# Materiales — Plasticidad y punto de fluencia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Revisado manualmente: correcciones de doble sorteo desincronizado
> del enunciado fijo (Q5, Q8, Q10, Q13, Q17, Q21, Q24) y una pregunta
> mal planteada (Q20).

---

### 1 — Definición de plasticidad

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["definicion", "deformacion"]

respuesta: "deformación permanente"
tipo: completar
respuestas_validas:
  - "deformación permanente"
  - "deformacion permanente"

enunciado: "La plasticidad es la propiedad de un material que le permite experimentar una ___ tras retirar la carga aplicada."

explicacion: |
  Cuando un material supera su límite elástico, los átomos se desplazan de sus posiciones originales y no regresan a ellas, resultando en una deformación permanente.
```

### 2 — El límite elástico

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["limite_elastico", "deformacion"]

opciones_explicitas: ["Límite elástico", "Punto de ruptura", "Módulo de Young", "Límite de fatiga"]
respuesta: "Límite elástico"
tipo: mc

enunciado: "El valor de tensión máxima en el que un material aún es capaz de recuperar su forma original sin sufrir cambios permanentes se denomina:"

explicacion: |
  Por debajo del límite elástico, el material se comporta de forma elástica (recuperable). Por encima, entra en el régimen plástico.
```

### 3 — Comportamiento elástico vs plástico

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["verdadero_falso", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "Si un material se encuentra en su zona de deformación elástica, cualquier carga aplicada será recuperada una vez que se retire la tensión."

explicacion: |
  Es falso. En la zona elástica, la deformación es reversible. La deformación permanente solo ocurre en la zona plástica.
```

### 4 — Secuencia de la curva tensión-deformación

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["curva_esfuerzo", "secuencia"]

opciones_explicitas: ["Deformación elástica", "Punto de fluencia", "Deformación plástica", "Rotura"]
respuesta_orden: ["Deformación elástica", "Punto de fluencia", "Deformación plástica", "Rotura"]
tipo: ordenar

enunciado: "Ordene las etapas que experimenta un material dúctil conforme aumenta la tensión aplicada:"

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego el material alcanza el punto de fluencia donde comienza la deformación plástica (irreversible), y finalmente llega a la rotura.
```

### 5 — El punto de fluencia

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["punto_de_fluencia", "definicion"]

respuesta: "plástica"
tipo: mc
opciones_explicitas: ["elástica", "plástica"]

enunciado: "Si un material supera su punto de fluencia, la deformación resultante será de tipo ___."

explicacion: |
  El punto de fluencia marca la transición entre el comportamiento elástico (reversible) y el comportamiento plástico (permanente).
```

### 6 — El límite elástico

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad"]

variables:
  es_elastico: verdadero

respuesta: verdadero
tipo: vf
enunciado: "Si un material se somete a una carga que no supera su límite elástico, al retirar la carga el material recuperará su forma original. ¿Es esto un comportamiento elástico?"

explicacion: |
  Correcto. El comportamiento elástico se caracteriza por la capacidad de un material de recuperar su forma original tras retirar la carga, siempre que no se haya superado el límite elástico.
```

### 7 — Identificación de la deformación

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["deformacion_permanente", "plasticidad"]

variables:
  datos: [["un resorte de acero", "elástica"], ["un clavo de hierro doblado", "plástica"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["elástica", "plástica"]

enunciado: "Analiza el siguiente caso: {datos[idx][0]}. El tipo de deformación que presenta es de naturaleza ________."

explicacion: |
  Si el material recupera su forma es elástico. Si el material mantiene la deformación (como el clavo doblado), ha entrado en el régimen plástico.
```

### 8 — Cálculo de la deformación unitaria

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["calculo", "deformacion_unitaria"]

respuesta: "0.005"
tipo: completar
respuestas_validas:
  - "0.005"

enunciado: "Un cilindro de aluminio se estira desde una longitud inicial de 100 mm hasta una longitud final de 100.5 mm. La deformación unitaria (ε) se calcula como (L_final - L_inicial) / L_inicial. El valor obtenido es ________."

pasos:
  - "Calcular la diferencia de longitud: 100.5 - 100 = 0.5 mm"
  - "Dividir por la longitud inicial: 0.5 / 100 = 0.005"

explicacion: |
  La deformación unitaria es una magnitud adimensional que relaciona el cambio de longitud con la longitud original.
```

### 9 — Secuencia de la prueba de tracción

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["ensayo_traccion", "procedimiento"]

respuesta_orden: ["Aplicar carga progresiva", "Observar límite elástico", "Superar punto de fluencia", "Medir deformación permanente"]
tipo: ordenar
opciones_explicitas: ["Aplicar carga progresiva", "Observar límite elástico", "Superar punto de fluencia", "Medir deformación permanente"]

enunciado: "Ordena los pasos lógicos para observar el paso de un comportamiento elástico a uno plástico en un ensayo de tracción:"

explicacion: |
  Primero se aplica la carga, luego se identifica el límite donde la deformación deja de ser proporcional a la carga (límite elástico), se cruza el punto de fluencia y finalmente se observa la deformación plástica residual.
```

### 10 — El punto de fluencia

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "avanzado"
  tags: ["punto_de_fluencia", "esfuerzo"]

respuesta: "fluencia"
tipo: mc
opciones_explicitas: ["fluencia", "elástico"]

enunciado: "En un diagrama Esfuerzo-Deformación, si observamos que el material experimenta un aumento de deformación sin necesidad de aumentar el esfuerzo, estamos ante un fenómeno de ________."

explicacion: |
  El fenómeno de fluencia (yielding) es la característica principal de los materiales dúctiles donde ocurre la deformación plástica significativa.
```

### 11 — El límite de la deformación elástica

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad", "limite_fluencia"]

respuesta: "elástica"
tipo: completar
respuestas_validas:
  - "elástica"

enunciado: "Cuando un material se somete a una carga y, al retirarla, recupera su forma original sin presentar deformación permanente, se dice que ha ocurrido una deformación ___."

explicacion: |
  La deformación elástica es aquella en la que los enlaces atómicos se estiran pero vuelven a su posición original al retirar la carga. Si se supera el límite de fluencia, entramos en el régimen plástico.
```

### 12 — ¿Qué ocurre tras el punto de fluencia?

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["deformacion_permanente", "plasticidad"]

opciones_explicitas: ["El material vuelve a su forma original", "El material sufre una deformación permanente", "El material se rompe instantáneamente"]
respuesta: "El material sufre una deformación permanente"
tipo: mc

enunciado: "Si un material es sometido a un esfuerzo que supera su punto de fluencia (yield point), ¿cuál es la consecuencia principal al retirar la carga?"

explicacion: |
  El punto de fluencia marca la transición entre el comportamiento elástico (reversible) y el comportamiento plástico (irreversible). Una vez superado, el material queda con una deformación residual.
```

### 13 — Relación Esfuerzo-Deformación

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["diagrama_esfuerzo_deformacion", "curva"]

respuesta: "un metal dúctil"
tipo: mc
opciones_explicitas: ["un metal dúctil", "un polímero"]

enunciado: "En un diagrama de esfuerzo-deformación, la presencia de una meseta horizontal donde la deformación aumenta sin aumento de carga es característica de ___."

explicacion: |
  Los metales con estructura FCC o BCC suelen mostrar una meseta de fluencia bien definida, mientras que otros materiales como polímeros o aleaciones específicas pueden tener una transición más gradual.
```

### 14 — Verdad o Falso: El límite de elasticidad

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: vf

enunciado: "El punto de fluencia es el esfuerzo máximo que un material puede soportar antes de romperse definitivamente."

explicacion: |
  Falso. El punto de fluencia es el inicio de la deformación plástica. El esfuerzo máximo se denomina 'resistencia a la tracción' (UTS) y ocurre mucho después del punto de fluencia.
```

### 15 — Secuencia de deformación en un ensayo de tracción

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["secuencia", "ensayo_traccion"]

opciones_explicitas: ["Deformación Elástica", "Punto de Fluencia", "Deformación Plástica", "Fractura"]
respuesta_orden: ["Deformación Elástica", "Punto de Fluencia", "Deformación Plástica", "Fractura"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas que experimenta una probeta de acero dulce durante un ensayo de tracción desde que se aplica carga hasta la rotura:"

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego se alcanza el punto de fluencia, seguido por la deformación plástica (permanente) y finalmente la rotura o fractura del material.
```

### 16 — Diferencia entre elasticidad y plasticidad

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad"]

respuesta: "deformación permanente"
tipo: completar
respuestas_validas:
  - "deformación permanente"
  - "deformación irreversible"

enunciado: "Mientras que la deformación elástica es reversible al retirar la carga, la deformación que ocurre tras superar el punto de fluencia se conoce como ___."

explicacion: |
  El punto de fluencia marca la transición entre el comportamiento elástico (donde el material vuelve a su forma original) y el plástico (donde el cambio es permanente).
```

### 17 — El límite de la elasticidad

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["punto_de_fluencia", "esfuerzo"]

opciones_explicitas: ["elástico", "plástico", "frágil"]
respuesta: "elástico"
tipo: mc

enunciado: "Si sometemos un material a un esfuerzo que es inferior al punto de fluencia, su comportamiento es ___."

explicacion: |
  Por debajo del punto de fluencia, las fuerzas interatómicas son capaces de mantener la estructura original, permitiendo que el material recupere su forma (comportamiento elástico).
```

### 18 — ¿Es la deformación plástica reversible?

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["booleano", "plasticidad"]

respuesta: falso
tipo: vf

enunciado: "La deformación plástica es aquella que puede ser recuperada totalmente al retirar la carga aplicada."

explicacion: |
  Falso. La característica definitoria de la plasticidad es precisamente la irreversibilidad de la deformación.
```

### 19 — Secuencia de la curva esfuerzo-deformación

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["curva_esfuerzo", "secuencia"]

opciones_explicitas: ["Región elástica", "Punto de fluencia", "Región plástica"]
respuesta_orden: ["Región elástica", "Punto de fluencia", "Región plástica"]
tipo: ordenar

enunciado: "Ordene las etapas de un material dúctil según aumenta la carga aplicada:"

explicacion: |
  Primero el material sigue la ley de Hooke (elástica), luego alcanza el límite donde la deformación aumenta sin aumentar proporcionalmente el esfuerzo (fluencia) y finalmente entra en la zona de deformación permanente (plástica).
```

### 20 — El rol del punto de fluencia

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["límite", "esfuerzo"]

opciones_explicitas: ["el límite de rotura", "la región elástica"]
respuesta: "la región elástica"
tipo: mc

enunciado: "En un diagrama de esfuerzo-deformación, el punto de fluencia marca el inicio de la deformación no reversible, a diferencia de ___, donde toda la deformación es recuperable."

explicacion: |
  El punto de fluencia es el umbral crítico que separa la región elástica (donde el material recupera su forma) de la región donde comienza la deformación plástica permanente.
```

### 21 — El límite de deformación

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad"]

variables:
  datos: ["un resorte de acero", "un clip de papel", "una banda elástica"]
  idx: uno_de([0,1,2])
  objeto: datos[idx]

respuesta: "plástico"
tipo: mc
opciones_explicitas: ["elástico", "plástico"]

enunciado: "Si sometemos {objeto} a una carga que supera su límite elástico, el comportamiento del material será ___."

explicacion: |
  Si la deformación supera el punto de fluencia, el material entra en el régimen plástico, donde la deformación es permanente.
```

### 22 — Identificación de la fase

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["punto_de_fluencia", "deformacion_permanente"]

variables:
  datos: [["un clavo siendo doblado con un martillo", "permanente"], ["una goma de borrar", "temporal"], ["un muelle de suspensión", "temporal"]]
  idx: uno_de([0,1,2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Al aplicar una fuerza sobre {datos[idx][0]}, la deformación resultante es ___."

explicacion: |
  La deformación permanente ocurre cuando el esfuerzo aplicado supera el punto de fluencia del material.
```

### 23 — Secuencia de deformación

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["curva_esfuerzo_deformacion", "etapas"]

respuesta_orden: ["Región elástica", "Punto de fluencia", "Región plástica", "Rotura"]
tipo: ordenar
opciones_explicitas: ["Región elástica", "Punto de fluencia", "Región plástica", "Rotura"]

enunciado: "Ordene las etapas de deformación de un material dúctil desde que se aplica una carga mínima hasta la falla total."

explicacion: |
  Primero el material se deforma elásticamente (recuperable), luego alcanza el punto de fluencia, entra en la zona plástica (permanente) y finalmente se rompe.
```

### 24 — Cálculo de esfuerzo de fluencia

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "avanzado"
  tags: ["esfuerzo", "calculo"]

respuesta: "250"
tipo: completar
respuestas_validas:
  - "250"

enunciado: "Un cilindro de sección transversal de 100 mm² sufre una fuerza de 25000 N antes de alcanzar su punto de fluencia. El esfuerzo de fluencia es de ___ MPa."

pasos:
  - "Calcular el esfuerzo: $\\sigma = F / A$"
  - "$\\sigma = 25000 / 100 = 250$"

explicacion: |
  El esfuerzo se calcula dividiendo la fuerza entre el área de la sección transversal.
```

### 25 — Comportamiento post-fluencia

```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["propiedades"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que en la región plástica el material recupera su forma original al retirar la carga?"

explicacion: |
  Falso. La característica principal de la región plástica es que la deformación es irreversible o permanente.
```
