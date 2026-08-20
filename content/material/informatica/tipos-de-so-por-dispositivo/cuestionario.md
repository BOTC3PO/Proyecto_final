# Informática — Tipos de SO por dispositivo (cuestionario, 22 preguntas VBLang)

> Tema: `informatica/tipos-de-so-por-dispositivo`. Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["concepto"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Todos los dispositivos usan el mismo tipo de sistema operativo, sin importar su función."

explicacion: |
  Los SO no son "talla única": están diseñados según las necesidades de
  hardware y objetivos de cada tipo de dispositivo.
```

### 2 — pregunta 2

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["mainframes"]

variables:
  n: uno_de([1, 1])

respuesta: "procesar volúmenes masivos de datos con disponibilidad casi ininterrumpida"
tipo: mc
opciones_explicitas: ["procesar volúmenes masivos de datos con disponibilidad casi ininterrumpida", "ofrecer la mejor interfaz gráfica para el usuario", "consumir la menor batería posible"]

enunciado: "Los mainframes están diseñados principalmente para..."

explicacion: |
  Son el corazón de instituciones financieras, aerolíneas y gobiernos:
  priorizan la integridad de datos y el procesamiento en bloque.
```

### 3 — pregunta 3

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["servidores"]

variables:
  ejemplo_so: uno_de(["Linux", "Windows Server"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ejemplo_so}\" es mencionado en la teoría como ejemplo de sistema operativo típico de un servidor."

explicacion: |
  Ambos son SO reales usados en servidores, enfocados en gestión de
  redes, seguridad perimetral y entrega de recursos.
```

### 4 — pregunta 4

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["servidores"]

variables:
  n: uno_de([1, 1])

respuesta: "escalabilidad: aumentar capacidad según demanda sin detenerse"
tipo: mc
opciones_explicitas: ["escalabilidad: aumentar capacidad según demanda sin detenerse", "una interfaz gráfica vistosa para el usuario final", "un consumo energético mínimo"]

enunciado: "Una característica clave de los SO de servidor, según la teoría, es..."

explicacion: |
  A diferencia de un mainframe aislado, un servidor debe poder crecer en
  capacidad según la demanda sin interrumpir el servicio.
```

### 5 — pregunta 5

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["diferencia mainframe servidor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los mainframes suelen ser sistemas aislados y centralizados, mientras que los servidores operan en entornos distribuidos."

explicacion: |
  Es una diferencia clave entre ambos: el mainframe centraliza, el
  servidor se conecta y distribuye recursos a otros equipos por red.
```

### 6 — pregunta 6

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["pcs"]

variables:
  so: uno_de(["Windows", "macOS", "distribuciones de Linux"])

respuesta: verdadero
tipo: vf

enunciado: "\"{so}\" es mencionado en la teoría como sistema operativo típico de una computadora personal (PC)."

explicacion: |
  Los tres priorizan la experiencia del usuario, la interfaz gráfica y
  la compatibilidad con periféricos.
```

### 7 — pregunta 7

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["pcs"]

variables:
  n: uno_de([1, 1])

respuesta: "facilitar la interacción humana con interfaz gráfica y multitarea ligera"
tipo: mc
opciones_explicitas: ["facilitar la interacción humana con interfaz gráfica y multitarea ligera", "garantizar respuesta en milisegundos para sistemas críticos", "controlar un único hardware específico con consumo mínimo"]

enunciado: "El objetivo principal de un SO para PC es..."

explicacion: |
  A diferencia de los sistemas embebidos o de tiempo real, la PC busca
  facilitar la interacción del usuario con aplicaciones diversas.
```

### 8 — pregunta 8

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["tiempo real"]

variables:
  ejemplo: uno_de(["control industrial", "aviónica", "equipos médicos"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ejemplo}\" es un ámbito donde los sistemas operativos de tiempo real son vitales, según la teoría."

explicacion: |
  En estos ámbitos, un retraso de milisegundos puede ser catastrófico,
  así que se necesita una respuesta estrictamente predecible.
```

### 9 — pregunta 9

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["tiempo real"]

variables:
  n: uno_de([1, 1])

respuesta: "que una tarea se complete dentro de un plazo estricto y predecible"
tipo: mc
opciones_explicitas: ["que una tarea se complete dentro de un plazo estricto y predecible", "que el usuario tenga la mejor experiencia visual", "que el dispositivo consuma la menor batería posible"]

enunciado: "Un sistema operativo de tiempo real garantiza principalmente..."

explicacion: |
  La predictibilidad del tiempo de respuesta es la característica
  central de estos sistemas, no la interfaz ni el consumo energético.
```

### 10 — pregunta 10

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["embebidos"]

variables:
  dispositivo: uno_de(["lavadoras", "televisores inteligentes", "controles de acceso"])

respuesta: verdadero
tipo: vf

enunciado: "\"{dispositivo}\" es un ejemplo de dispositivo con sistema operativo embebido mencionado en la teoría."

explicacion: |
  Los sistemas embebidos son SO livianos integrados en dispositivos
  cotidianos con función específica y bajo consumo energético.
```

### 11 — pregunta 11

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["embebidos"]

variables:
  n: uno_de([1, 1])

respuesta: "controlar un hardware específico con consumo energético muy bajo"
tipo: mc
opciones_explicitas: ["controlar un hardware específico con consumo energético muy bajo", "permitir instalar cualquier programa arbitrario", "procesar millones de transacciones financieras"]

enunciado: "La función de un sistema embebido es..."

explicacion: |
  Tienen capacidades mínimas porque su rol es controlar un hardware
  puntual, sin necesidad de interfaces complejas ni gran potencia.
```

### 12 — pregunta 12

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "embebido"
tipo: mc
opciones_explicitas: ["embebido", "mainframe", "servidor"]

enunciado: "La pantalla digital de un microondas usa un sistema operativo..."

explicacion: |
  Es un ejemplo claro de sistema embebido: no se le instalan programas
  arbitrarios, sólo controla el hardware específico del microondas.
```

### 13 — pregunta 13

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "tiempo real"
tipo: mc
opciones_explicitas: ["tiempo real", "para PC", "embebido"]

enunciado: "El sistema que controla un airbag en un auto, garantizando respuesta inmediata ante una señal de peligro, es de tipo..."

explicacion: |
  Necesita una respuesta predecible en milisegundos, algo que un SO de
  PC común no puede garantizar con la misma fiabilidad.
```

### 14 — pregunta 14

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "servidor"
tipo: mc
opciones_explicitas: ["servidor", "embebido", "tiempo real"]

enunciado: "Cuando accedés a la plataforma de tu escuela y ves datos que residen en otra máquina remota, esos datos están gestionados por un SO de tipo..."

explicacion: |
  El servidor asegura que la información llegue a todos los usuarios de
  forma segura, gestionando la red y los recursos remotos.
```

### 15 — pregunta 15

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "para PC"
tipo: mc
opciones_explicitas: ["para PC", "mainframe", "tiempo real"]

enunciado: "Cuando abrís tu notebook para hacer una tarea, estás usando un sistema operativo..."

explicacion: |
  Está diseñado para la interacción directa del usuario: es un SO de PC.
```

### 16 — pregunta 16

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "avanzado"
  tags: ["criterios de eleccion"]

variables:
  n: uno_de([1, 1])

respuesta: "la eficiencia, la seguridad y la capacidad de respuesta del dispositivo"
tipo: mc
opciones_explicitas: ["la eficiencia, la seguridad y la capacidad de respuesta del dispositivo", "únicamente el precio de venta del hardware", "el color de la carcasa del dispositivo"]

enunciado: "Según la teoría, la elección del tipo de SO determina principalmente..."

explicacion: |
  No es una decisión estética: afecta directamente la eficiencia,
  seguridad y capacidad de respuesta según el contexto de uso.
```

### 17 — pregunta 17

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["funcion comun"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aunque su implementación varía drásticamente, todos los tipos de SO comparten la función básica de gestionar recursos."

explicacion: |
  Mainframes, servidores, PCs, sistemas de tiempo real y embebidos
  gestionan recursos de forma distinta, pero esa función básica es
  compartida por todos.
```

### 18 — pregunta 18

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["mainframes"]

variables:
  institucion: uno_de(["instituciones financieras", "aerolíneas", "gobiernos"])

respuesta: verdadero
tipo: vf

enunciado: "\"{institucion}\" son mencionadas en la teoría como usuarias típicas de mainframes."

explicacion: |
  Los mainframes son el corazón de este tipo de instituciones, que
  necesitan procesar grandes volúmenes de datos de forma confiable.
```

### 19 — pregunta 19

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "embebido"
tipo: mc
opciones_explicitas: ["embebido", "servidor", "mainframe"]

enunciado: "El sistema operativo de un celular es, según la teoría, de tipo..."

explicacion: |
  El celular es mencionado explícitamente como ejemplo de dispositivo
  con sistema embebido, sin acceso directo a instalar cualquier
  programa arbitrario.
```

### 20 — pregunta 20

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "avanzado"
  tags: ["comparacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un SO de PC común puede garantizar la misma fiabilidad de respuesta inmediata que un sistema de tiempo real."

explicacion: |
  Los sistemas de tiempo real están diseñados específicamente para
  respuestas predecibles en milisegundos; un SO de PC no ofrece esa
  garantía.
```

### 21 — pregunta 21

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["ejemplo cotidiano"]

variables:
  n: uno_de([1, 1])

respuesta: "tren"
tipo: completar

enunciado: "El sistema de control de un ___ (mencionado junto al airbag) es un ejemplo de sistema de tiempo real en la teoría."

respuestas_validas:
  - "tren"

explicacion: |
  Tanto el sistema de un tren como el airbag de un auto necesitan
  respuestas inmediatas y predecibles: son ejemplos de tiempo real.
```

### 22 — pregunta 22

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["embebidos vs pc"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En un sistema embebido, a diferencia de una PC, no se puede instalar programas arbitrarios porque su función es controlar un hardware específico."

explicacion: |
  Un microondas o un celular no permiten instalar cualquier software:
  están limitados a la función para la que fueron fabricados.
```

