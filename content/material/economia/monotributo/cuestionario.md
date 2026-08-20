# Economía — Monotributo (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Sin montos en pesos concretos
> (las escalas cambian con frecuencia) — el foco es la estructura.

---

### 1 — Qué es el monotributo

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué es el monotributo?"
tipo: mc
opciones_explicitas:
  - "Un régimen simplificado con una única cuota mensual fija, para quienes trabajan de forma independiente"
  - "Un impuesto exclusivo para empleados en relación de dependencia"
  - "Una multa por no pagar impuestos a tiempo"
respuesta: "Un régimen simplificado con una única cuota mensual fija, para quienes trabajan de forma independiente"

explicacion: |
  Reemplaza tener que liquidar IVA y Ganancias por separado, con un solo
  pago mensual.
```

### 2 — Cuántas categorías tiene el monotributo

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

respuesta: 11
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas categorías tiene el monotributo en total (de la A a la K)?"

explicacion: |
  De la A a la K son 11 letras, y por lo tanto 11 categorías.
```

### 3 — La categoría más baja

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

enunciado: "¿Cuál es la categoría más baja del monotributo?"
tipo: mc
opciones_explicitas:
  - "A"
  - "K"
  - "1"
respuesta: "A"

explicacion: |
  Las categorías van de la A (la más baja) a la K (la más alta).
```

### 4 — La categoría más alta

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

enunciado: "¿Cuál es la categoría más alta del monotributo?"
tipo: mc
opciones_explicitas:
  - "K"
  - "A"
  - "Z"
respuesta: "K"

explicacion: |
  Superar el tope de la categoría K obliga a pasar al régimen general.
```

### 5 — A mayor categoría, mayor la cuota

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A medida que sube la categoría (más cerca de la K), la cuota mensual a pagar es más cara."

explicacion: |
  Cada componente de la cuota sube junto con la categoría.
```

### 6 — Qué determina la categoría

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué parámetros determinan la categoría de un monotributista?"
tipo: mc
opciones_explicitas:
  - "Facturación anual, superficie afectada, energía consumida y alquileres devengados, entre otros"
  - "Sólo la edad del monotributista"
  - "Sólo si tiene empleados en relación de dependencia"
respuesta: "Facturación anual, superficie afectada, energía consumida y alquileres devengados, entre otros"

explicacion: |
  Son varios parámetros a la vez, no sólo la facturación.
```

### 7 — Superar el tope más alto saca del monotributo

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un monotributista supera el tope de la categoría K, tiene que salir del monotributo e inscribirse en el régimen general."

explicacion: |
  La K es la categoría techo: no hay una categoría más alta dentro del
  monotributo.
```

### 8 — Los tres componentes de la cuota

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué tres componentes integra la cuota mensual del monotributo?"
tipo: mc
opciones_explicitas:
  - "Impuesto integrado, aporte jubilatorio y aporte a obra social"
  - "Sólo el impuesto integrado"
  - "IVA, Ganancias y Bienes Personales por separado"
respuesta: "Impuesto integrado, aporte jubilatorio y aporte a obra social"

explicacion: |
  Es un pago único que empaqueta los tres conceptos.
```

### 9 — La cuota incluye un aporte jubilatorio

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Parte de la cuota del monotributo es un aporte jubilatorio, el mismo tipo de aporte que hace un empleado en relación de dependencia."

explicacion: |
  Un monotributista también construye derechos jubilatorios, sólo que
  con un monto fijo en vez de un porcentaje del sueldo.
```

### 10 — La cuota incluye un aporte a obra social

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Parte de la cuota del monotributo da acceso a una obra social."

explicacion: |
  Igual que el aporte del 3% de un empleado, sólo que empaquetado dentro
  de la cuota fija.
```

### 11 — La cuota reemplaza IVA y Ganancias

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El \"impuesto integrado\" de la cuota del monotributo reemplaza tener que liquidar IVA y Ganancias por separado."

explicacion: |
  Es la simplificación central del régimen: un solo pago en vez de varios
  impuestos separados.
```

### 12 — Cada cuántos meses se revisa la categoría

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo"]

respuesta: 6
tipo: input
tolerancia_abs: 0

enunciado: "¿Cada cuántos meses hay que revisar (recategorizar) la categoría del monotributo?"

explicacion: |
  Dos veces al año: cada 6 meses.
```

### 13 — La recategorización mira los últimos 12 meses

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al recategorizarse, se mira la facturación (y otros parámetros) de los últimos 12 meses, no sólo del último semestre."

explicacion: |
  La ventana de revisión son los últimos 12 meses completos, aunque la
  recategorización se haga cada 6 meses.
```

### 14 — Qué es el monotributo social

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

enunciado: "¿Qué es el monotributo social?"
tipo: mc
opciones_explicitas:
  - "Una categoría especial, más económica, para actividades de baja escala en situación de vulnerabilidad económica"
  - "Un monotributo exclusivo para empleados públicos"
  - "Una categoría más cara que la K"
respuesta: "Una categoría especial, más económica, para actividades de baja escala en situación de vulnerabilidad económica"

explicacion: |
  Tiene requisitos y beneficios distintos al monotributo general.
```

### 15 — Diferencia con estar en relación de dependencia

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un monotributista paga una cuota fija mensual, en vez de tener un porcentaje descontado de un sueldo bruto como un empleado en relación de dependencia."

explicacion: |
  Son dos esquemas distintos: descuento variable sobre el bruto (empleado)
  vs. cuota fija según categoría (monotributista).
```

### 16 — Elegir la definición correcta de categoría

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo"]

enunciado: "¿Cuál definición corresponde a la categoría del monotributo?"
tipo: mc
opciones_explicitas:
  - "El nivel (de la A a la K) que determina cuánto se paga de cuota, según parámetros como la facturación"
  - "El tipo de actividad económica únicamente, sin relación con lo que se paga"
  - "Un número aleatorio que asigna AFIP"
respuesta: "El nivel (de la A a la K) que determina cuánto se paga de cuota, según parámetros como la facturación"

explicacion: |
  Es directamente la variable que fija cuánto se termina pagando de
  cuota.
```

### 17 — Cada componente sube con la categoría

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los tres componentes de la cuota (impuesto integrado, aporte jubilatorio, obra social) suben todos junto con la categoría, no sólo uno de ellos."

explicacion: |
  Es un aumento conjunto de los tres, no de uno solo.
```

### 18 — Subir de categoría no es gratis

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Subir de categoría significa pagar una cuota más cara, no más barata."

explicacion: |
  Refleja que la actividad creció (más facturación, más consumo
  eléctrico, etc.).
```

### 19 — Comparar dos categorías

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "intermedio"
  tags: ["monotributo", "comparacion"]

enunciado: "Entre la categoría D y la categoría H del monotributo, ¿cuál paga una cuota más cara?"
tipo: mc
opciones_explicitas:
  - "H"
  - "D"
respuesta: "H"

explicacion: |
  H está más cerca de la K (la más alta): representa más actividad, y
  por lo tanto una cuota más cara.
```

### 20 — AFIP es el organismo que administra el régimen

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El monotributo se paga estando inscripto ante AFIP (el organismo de recaudación nacional)."

explicacion: |
  Es el mismo organismo que administra el régimen general de impuestos.
```

### 21 — No recategorizarse a tiempo tiene consecuencias

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "avanzado"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un monotributista no se recategoriza cuando corresponde, puede quedar pagando una categoría que ya no refleja su actividad real, con las consecuencias que eso implique."

explicacion: |
  La recategorización no es sólo un trámite formal: mantiene alineada la
  cuota con la actividad real.
```

### 22 — Qué es el monotributo (cierre)

```
metadata:
  materia: "economia"
  tema: "monotributo"
  nivel: "basico"
  tags: ["monotributo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El monotributo simplifica varios pagos (impuesto, jubilación, obra social) en una única cuota mensual fija, definida por la categoría de cada contribuyente."

explicacion: |
  Es la idea central de todo el tema: categoría y cuota son dos caras de
  la misma moneda.
```
