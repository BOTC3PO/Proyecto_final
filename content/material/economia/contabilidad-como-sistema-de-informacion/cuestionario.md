# Economia — contabilidad como sistema de informacion (cuestionario, 26 preguntas VBLang)

> Tema: `economia/contabilidad-como-sistema-de-informacion`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["sistema_informacion", "definicion"]

variables:
  analogia: uno_de(["sistema nervioso", "corazón", "estómago"])

respuesta: "sistema nervioso"
tipo: completar

enunciado: "En la analogía corporativa, la contabilidad funciona como el {analogia} de la empresa, llevando información vital a quienes toman decisiones."

explicacion: |
  La contabilidad se compara con el sistema nervioso y circulatorio porque transporta datos financieros cruciales para la "salud" y decisión empresarial.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["objetivo", "informacion"]

variables:
  dato_crudo: random(1, 100)
  conocimiento: redondear(dato_crudo / 10, 1)

respuesta: "conocimiento"
tipo: completar

enunciado: "La contabilidad transforma datos crudos como ventas o compras en {conocimiento} útil para la gestión."

explicacion: |
  El proceso clave es la transformación de datos operativos en información procesada que permite la toma de decisiones.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ciclo_comercial", "comercio"]

variables:
  ejemplo: uno_de(["supermercado", "fábrica de autos", "panadería"])
  accion: "compra y venta de bienes ya terminados"

respuesta: "compra y venta de bienes ya terminados"
tipo: completar

enunciado: "En el ciclo comercial, típico de empresas como {ejemplo}, la actividad central es la {accion}."

explicacion: |
  El ciclo comercial implica intermediación: comprar productos terminados y venderlos sin alterar su forma física.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["costos", "industrial"]

variables:
  costo1: "materiales directos"
  costo2: "mano de obra directa"
  costo3: "gastos generales de fabricación"

respuesta: "gastos generales de fabricación"
tipo: completar

enunciado: "La contabilidad industrial rastrea materiales directos, mano de obra directa y {costo3}."

explicacion: |
  Los tres componentes esenciales del costo de producción son materiales, mano de obra y gastos indirectos o generales.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["informes", "balance"]

variables:
  informe: "Balance General"

respuesta: "Balance General"
tipo: completar

enunciado: "Uno de los principales informes que actúan como 'informes médicos' de la compañía es el {informe}."

explicacion: |
  El Balance General muestra la situación patrimonial (activos, pasivos y patrimonio) en un momento dado.
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["informes", "resultados"]

variables:
  informe: "Estado de Resultados"

respuesta: "Estado de Resultados"
tipo: completar

enunciado: "El {informe} muestra la capacidad de generar ganancias o pérdidas en un período."

explicacion: |
  El Estado de Resultados (o de Ganancias y Pérdidas) resume ingresos y egresos del periodo.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["comercio", "inventario"]

variables:
  foco: "control de inventarios"

respuesta: "control de inventarios"
tipo: completar

enunciado: "En el ciclo comercial, la contabilidad se centra en el {foco} de mercadería."

explicacion: |
  Para los comerciantes, el manejo preciso del stock es vital para calcular el margen de ganancia.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ejemplos", "industria"]

variables:
  ejemplo: uno_de(["fábrica de muebles", "supermercado", "agencia de viajes"])

respuesta: "fábrica de muebles"
tipo: completar

enunciado: "Un ejemplo clásico de ciclo industrial es una {ejemplo}."

explicacion: |
  Las fábricas transforman madera en muebles, requiriendo contabilidad de costos compleja.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ejemplos", "comercio"]

variables:
  ejemplo: uno_de(["tienda de ropa", "planta de alimentos", "taller mecánico"])

respuesta: "tienda de ropa"
tipo: completar

enunciado: "Un ejemplo clásico de ciclo comercial es una {ejemplo}."

explicacion: |
  Las tiendas de ropa compran prendas terminadas y las venden, sin manufacturarlas.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion", "sistema_informacion"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad se define fundamentalmente como un sistema de información diseñado para captar, procesar y comunicar datos económicos, más que como un simple conjunto de cálculos numéricos."

explicacion: |
  Correcto. La contabilidad funciona como el 'sistema nervioso' de la empresa, transformando datos crudos en información útil para la toma de decisiones.
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["clasificacion", "ciclo_industrial"]

variables:
  caso: uno_de(["fabrica_de_muebles", "planta_de_alimentos", "taller_de_autos"])

respuesta: verdadero
tipo: vf

enunciado: "Una {caso} opera bajo el ciclo industrial porque transforma materias primas en productos terminados."

explicacion: |
  Correcto. La transformación física del producto es la marca distintiva del ciclo industrial frente al comercial.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["gastos", "industrial"]

respuesta: verdadero
tipo: vf

enunciado: "El alquiler de un galpón de producción se considera un gasto general de fabricación en el ciclo industrial."

explicacion: |
  Correcto. Los gastos indirectos necesarios para la producción, como el alquiler de la fábrica, son gastos generales.
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["materia_prima", "industrial"]

variables:
  materia: uno_de(["madera", "cuero", "harina"])

respuesta: verdadero
tipo: vf

enunciado: "{materia} es un ejemplo de materia prima directa en una fábrica de muebles."

explicacion: |
  La madera es el insumo principal que se transforma en el producto final en una carpintería.
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["analogia", "comunicacion"]

respuesta: verdadero
tipo: vf

enunciado: "En la analogía, la contabilidad también funciona como el sistema circulatorio, distribuyendo la información a los stakeholders."

explicacion: |
  La analogía completa incluye el sistema nervioso (captación) y circulatorio (distribución) de la información.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["accountability", "ética"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad facilita la rendición de cuentas (accountability) a dueños e inversores."

explicacion: |
  Permite verificar que los recursos se usen conforme a lo esperado y reportar resultados reales.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["ejemplo", "industrial"]

variables:
  planta: uno_de(["planta_de_alimentos", "fábrica_de_textiles", "fundición"])

respuesta: verdadero
tipo: vf

enunciado: "{planta} es un ejemplo de entidad que opera en el ciclo industrial."

explicacion: |
  Estas plantas transforman materias primas en productos finales mediante procesos productivos.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["transparencia", "confianza"]

respuesta: verdadero
tipo: vf

enunciado: "La transparencia financiera promovida por la contabilidad ayuda a atraer socios e inversores."

explicacion: |
  Los inversores confían en empresas con informes claros y auditables.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion", "sistema_informacion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad se define fundamentalmente como un sistema de información diseñado para captar, procesar y comunicar datos económicos, más que como un mero conjunto de cálculos numéricos."

explicacion: |
  La contabilidad es el sistema nervioso de la empresa. Su función principal es transformar datos crudos en información útil para la toma de decisiones, asegurando transparencia y rendición de cuentas.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["analogia", "funcion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "En la analogía propuesta, la contabilidad funciona como el sistema nervioso y circulatorio de la empresa, llevando información vital sobre su salud financiera a los decisores."

explicacion: |
  Sin este flujo de información, dueños e inversores navegarían a ciegas. La contabilidad permite saber si hay ganancias, cuánto se debe y cómo se usan los recursos.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La diferencia estructural clave entre ciclo comercial e industrial es la existencia de un proceso de transformación de materias primas en el industrial."

explicacion: |
  El comercial solo mueve bienes terminados. El industrial los crea, lo que exige un sistema de costos más complejo.
```

### 21 — pregunta 21

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["transparencia"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad es la herramienta básica para la transparencia y la rendición de cuentas en el mundo de los negocios."

explicacion: |
  Permite a los externos (inversores, bancos) y internos verificar el estado real de la organización y la gestión de los recursos.
```

### 22 — pregunta 22

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["complejidad"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad del ciclo industrial es más compleja que la del ciclo comercial debido al rastreo de tres tipos de costos."

explicacion: |
  La necesidad de imputar costos indirectos y calcular el costo de producción hace que el sistema contable industrial sea más robusto y detallado.
```

### 23 — pregunta 23

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["impacto"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La claridad en los informes contables determina la capacidad de la empresa para conseguir créditos y atraer socios."

explicacion: |
  Los terceros externos confían en la información contable para evaluar el riesgo y la solvencia de la empresa antes de prestar dinero o invertir.
```

### 24 — pregunta 24

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["consecuencias"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "Sin el sistema de información contable, los dueños e inversores navegarían a ciegas respecto a la salud financiera."

explicacion: |
  La falta de información impide detectar problemas a tiempo, optimizar recursos o justificar la gestión ante los stakeholders.
```

### 25 — pregunta 25

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["estructura_costos"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "En el ciclo industrial, la diferencia clave es la necesidad de rastrear materiales directos, mano de obra y gastos generales."

explicacion: |
  Esta triple estructura de costos es lo que distingue contablemente a la industria del comercio puro.
```

### 26 — pregunta 26

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad NO es simplemente una obligación tributaria, sino un sistema de información clave."

explicacion: |
  Aunque tiene fines fiscales, su esencia es la gestión interna y la comunicación externa de la realidad económica de la empresa.
```
