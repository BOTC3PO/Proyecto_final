# Economía — Recibo de sueldo (general) (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Los porcentajes de descuento acá
> son genéricos (no las alícuotas reales de ningún país) — eso vive en
> `../argentina/`.

---

### 1 — Qué es el sueldo básico

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Qué es el sueldo básico?"
tipo: mc
opciones_explicitas:
  - "El monto acordado en el contrato o convenio, antes de cualquier ajuste"
  - "Lo que efectivamente se cobra al final"
  - "El total de los descuentos"
respuesta: "El monto acordado en el contrato o convenio, antes de cualquier ajuste"

explicacion: |
  Es el punto de partida, antes de sumar adicionales o restar
  descuentos.
```

### 2 — Qué es el sueldo bruto

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Qué es el sueldo bruto?"
tipo: mc
opciones_explicitas:
  - "El básico más los adicionales, antes de descontar nada"
  - "Lo que efectivamente se cobra"
  - "Sólo los descuentos"
respuesta: "El básico más los adicionales, antes de descontar nada"

explicacion: |
  Bruto = Básico + Adicionales.
```

### 3 — Qué es el sueldo neto

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

enunciado: "¿Qué es el sueldo neto?"
tipo: mc
opciones_explicitas:
  - "Lo que efectivamente se cobra, después de los descuentos"
  - "El monto acordado en el contrato"
  - "El bruto sin ningún ajuste"
respuesta: "Lo que efectivamente se cobra, después de los descuentos"

explicacion: |
  Neto = Bruto − Descuentos.
```

### 4 — Calcular el bruto

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  basico: random(20, 90) * 1000
  adicional: random(2, 20) * 1000

respuesta: basico + adicional
tipo: input
tolerancia_abs: 0

enunciado: "El básico es ${basico} y los adicionales suman ${adicional}. ¿Cuál es el sueldo bruto?"

explicacion: |
  Se suma el básico más los adicionales.
```

### 5 — Calcular el neto

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(30, 150) * 1000
  descuentos: random(3, 25) * 1000

respuesta: bruto - descuentos
tipo: input
tolerancia_abs: 0

enunciado: "El sueldo bruto es ${bruto} y los descuentos suman ${descuentos}. ¿Cuál es el sueldo neto?"

explicacion: |
  Se resta el total de descuentos al bruto.
```

### 6 — Calcular el descuento total

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(30, 150) * 1000
  neto: bruto - random(3, 25) * 1000

respuesta: bruto - neto
tipo: input
tolerancia_abs: 0

enunciado: "El sueldo bruto es ${bruto} y el neto es ${neto}. ¿Cuánto suman los descuentos?"

explicacion: |
  Descuentos = Bruto − Neto (la misma resta, mirada al revés).
```

### 7 — Calcular un descuento como porcentaje del bruto

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  bruto: random(30, 150) * 1000
  porcentaje: uno_de([5, 10, 15, 20])

respuesta: bruto * porcentaje / 100
tipo: input
tolerancia_abs: 0.01

enunciado: "El sueldo bruto es ${bruto} y un descuento puntual es del {porcentaje}%. ¿Cuánto es ese descuento en pesos?"

explicacion: |
  Se calcula el porcentaje del bruto, igual que cualquier cálculo de
  porcentaje.
```

### 8 — Sumar varios adicionales

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "calculo"]

variables:
  basico: random(20, 90) * 1000
  antiguedad: random(1, 10) * 1000
  presentismo: random(1, 8) * 1000

respuesta: basico + antiguedad + presentismo
tipo: input
tolerancia_abs: 0

enunciado: "Básico ${basico}, más antigüedad ${antiguedad}, más presentismo ${presentismo}. ¿Cuál es el sueldo bruto?"

explicacion: |
  Se suman todos los componentes: básico y cada adicional.
```

### 9 — Bruto = básico + adicionales (verdadero/falso)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El sueldo bruto es la suma del básico más todos los adicionales."

explicacion: |
  Es la fórmula central del primer paso del recibo.
```

### 10 — Neto = bruto - descuentos (verdadero/falso)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El sueldo neto es el bruto menos todos los descuentos."

explicacion: |
  Es la fórmula central del segundo paso del recibo.
```

### 11 — El neto nunca es mayor que el bruto

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El sueldo neto nunca puede ser mayor que el sueldo bruto."

explicacion: |
  Los descuentos restan (o, como mucho, no restan nada): el neto nunca
  supera al bruto.
```

### 12 — Lo que la gente suele llamar "sueldo"

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando alguien dice \"gano tanto por mes\", casi siempre se refiere al sueldo neto (lo que ve reflejado en su cuenta)."

explicacion: |
  El bruto es más el número que figura en ofertas de trabajo o
  negociaciones, no el que la gente usa en la conversación cotidiana.
```

### 13 — Elegir el resultado correcto

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo"]

variables:
  bruto: random(30, 150) * 1000
  descuentos: random(3, 25) * 1000
  correcto: bruto - descuentos

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - bruto + descuentos
  - descuentos - bruto

enunciado: "Bruto ${bruto}, descuentos ${descuentos}. ¿Cuál es el neto?"

explicacion: |
  Las otras opciones suman en vez de restar, o restan al revés.
```

### 14 — Verificar un cálculo (con error a veces)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "verificacion"]

variables:
  bruto: random(30, 150) * 1000
  descuentos: random(3, 25) * 1000
  correcto: bruto - descuentos
  error: uno_de([0, 0, 0, 1000, -1000])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? Bruto ${bruto}, descuentos ${descuentos}, neto ${mostrado}."

explicacion: |
  Se vuelve a restar y se compara.
```

### 15 — Completar el básico que falta

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo"]

variables:
  basico: random(20, 90) * 1000
  adicional: random(2, 20) * 1000
  bruto: basico + adicional

tipo: completar
enunciado: "Completá: ___ (básico) + ${adicional} (adicionales) = ${bruto} (bruto)."
respuestas_validas:
  - basico

explicacion: |
  Se despeja restando: bruto − adicionales = básico.
```

### 16 — Problema: neto con un descuento porcentual genérico

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "problema"]

variables:
  bruto: random(30, 150) * 1000
  porcentaje: uno_de([10, 15, 20])

respuesta: bruto * (1 - porcentaje / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "El sueldo bruto es ${bruto}, y los descuentos suman un {porcentaje}% del bruto. ¿Cuál es el neto?"

pasos:
  - "{bruto} × (1 - {porcentaje}/100) = {bruto * (1 - porcentaje / 100)}"

explicacion: |
  Descontar un porcentaje es multiplicar por (1 − porcentaje/100).
```

### 17 — Problema: dos descuentos distintos

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "avanzado"
  tags: ["recibo_de_sueldo", "problema"]

variables:
  bruto: random(30, 150) * 1000
  p1: uno_de([5, 10])
  p2: uno_de([3, 5])

respuesta: bruto - (bruto * p1 / 100) - (bruto * p2 / 100)
tipo: input
tolerancia_abs: 0.01

enunciado: "El sueldo bruto es ${bruto}, con dos descuentos calculados por separado sobre el bruto: uno del {p1}% y otro del {p2}%. ¿Cuál es el neto?"

pasos:
  - "{bruto} - ({bruto}×{p1}/100) - ({bruto}×{p2}/100) = {bruto - (bruto * p1 / 100) - (bruto * p2 / 100)}"

explicacion: |
  Cuando cada descuento se calcula sobre el bruto (no en cadena), se
  pueden restar por separado.
```

### 18 — Comparar el bruto de dos personas

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "comparacion"]

variables:
  a: random(30, 150) * 1000
  b: random(30, 150) * 1000

restricciones:
  - a != b

respuesta: (a > b)
tipo: vf

enunciado: "¿Es ${a} de sueldo bruto mayor que ${b}?"

explicacion: |
  Se comparan directamente los montos.
```

### 19 — Ordenar sueldos netos

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "orden"]

tipo: ordenar
enunciado: "Ordená estos sueldos netos de menor a mayor."
opciones_explicitas:
  - "$85.000"
  - "$62.000"
  - "$120.000"
  - "$45.000"
respuesta_orden: ["$45.000", "$62.000", "$85.000", "$120.000"]

explicacion: |
  Se ordenan como cualquier lista de montos.
```

### 20 — Para qué sirven los descuentos

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los descuentos del sueldo suelen financiar sistemas colectivos (como jubilación futura o cobertura de salud), no son sólo \"plata perdida\"."

explicacion: |
  El detalle concreto de qué se financia varía según el país y el
  sistema — pero la lógica de fondo es esa.
```

### 21 — Los adicionales no son universales (verdadero/falso)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "intermedio"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Qué adicionales tiene un sueldo (antigüedad, presentismo, horas extra...) depende de cada trabajo y convenio puntual, no es igual en todos los empleos."

explicacion: |
  Lo universal es la fórmula (básico + adicionales = bruto), no la lista
  específica de adicionales.
```

### 22 — Los tres números del sueldo (cierre)

```
metadata:
  materia: "economia"
  tema: "recibo_de_sueldo_general"
  nivel: "basico"
  tags: ["recibo_de_sueldo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Básico, bruto y neto son tres números distintos de un mismo sueldo, y confundirlos es un error común."

explicacion: |
  Es la idea central de todo el tema.
```
