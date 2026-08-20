# Oficios — apertura de emergencia sin destruccion (cuestionario, 27 preguntas VBLang)

> Tema: `oficios/cerrajero/apertura-de-emergencia-sin-destruccion`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "basico"
  tags: ["etica", "identidad", "dni"]

variables:
  tiene_dni: verdadero
  tiene_contrato: falso

respuesta: verdadero
tipo: vf

enunciado: "Para verificar la identidad de un cliente que solicita una apertura de emergencia, ¿es suficiente con mostrar solo el Documento Nacional de Identidad (DNI)?"

explicacion: |
  No. Aunque el DNI es fundamental, generalmente se requiere además prueba de titularidad o tenencia (como contrato de alquiler o factura de servicios) para confirmar que la persona tiene derecho a acceder al lugar.
```

### 2 — pregunta 2

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "basico"
  tags: ["etica", "tenencia", "contrato"]

variables:
  es_propietario: falso
  tiene_contrato: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Si el cliente no es propietario pero presenta un contrato de alquiler vigente a su nombre, esto puede servir como prueba de tenencia válida para proceder con la apertura."

explicacion: |
  Correcto. El contrato de alquiler vigente es un documento legal que acredita la tenencia del inmueble y permite al cerrajero verificar el derecho de acceso del solicitante.
```

### 3 — pregunta 3

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "intermedio"
  tags: ["etica", "documentacion", "facturas"]

variables:
  tipo_servicio: uno_de(["luz", "gas", "agua"])
  a_nombre: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Una factura de {tipo_servicio} a nombre del solicitante es un documento aceptable para demostrar la relación con el inmueble durante una apertura de emergencia."

explicacion: |
  Sí. Las facturas de servicios básicos a nombre del cliente son pruebas comunes y válidas de tenencia o propiedad cuando no se cuenta con otros documentos inmediatos.
```

### 4 — pregunta 4

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "basico"
  tags: ["etica", "negativa", "procedimiento"]

variables:
  cliente_sin_pruebas: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Si el cliente no puede acreditar su identidad ni su relación con el inmueble, el cerrajero debe negarse a realizar la apertura."

explicacion: |
  Correcto. Sin prueba de titularidad o tenencia, el cerrajero no puede garantizar que el solicitante tiene derecho de acceso, lo que podría implicar complicidades con allanamientos.
```

### 5 — pregunta 5

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "intermedio"
  tags: ["legal", "allanamiento", "riesgo"]

variables:
  ignorar_verificacion: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Ignorar la verificación de identidad convierte al cerrajero en cómplice potencial de delitos como el allanamiento de morada."

explicacion: |
  Sí. El cerrajero tiene la obligación legal y ética de verificar que quien solicita el servicio no esté cometiendo un delito. Ignorar esto lo hace responsable penalmente.
```

### 6 — pregunta 6

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "intermedio"
  tags: ["herramientas", "grapadora", "puerta_giratoria"]

variables:
  tipo_puerta: "giratoria"
  herramienta: "grapadora"

respuesta: verdadero
tipo: vf

enunciado: "La grapadora de alambre es una herramienta útil para abrir puertas giratorias con cerradura de pestillo sin dañar la hoja."

explicacion: |
  Correcto. Se introduce entre la hoja y el marco para empujar el pestillo hacia adentro, permitiendo el giro de la puerta sin necesidad de forzar la cerradura.
```

### 7 — pregunta 7

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "intermedio"
  tags: ["herramientas", "placa", "resorte"]

variables:
  tipo_cerradura: "pestillo_resorte"

respuesta: verdadero
tipo: vf

enunciado: "La placa de abrelatas se utiliza principalmente para cerraduras de pestillo de resorte, comprimiendo el resorte para retraer el pestillo."

explicacion: |
  Sí. Esta herramienta flexible se inserta en la ranura de la puerta y empuja el pestillo hacia adentro, liberando el cierre sin dañar la cerradura.
```

### 8 — pregunta 8

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "intermedio"
  tags: ["herramientas", "llave_tubular", "cerraduras_bosch"]

variables:
  tipo_cerradura: "tubular"

respuesta: verdadero
tipo: vf

enunciado: "La llave de tubo o llave maestra tubular es específica para abrir cerraduras de perfiles cilíndricos, comunes en puertas de seguridad o vehículos."

explicacion: |
  Correcto. Estas cerraduras tienen pines dispuestos en círculo. La llave tubular tiene pines que las activan simultáneamente, imitando la llave original.
```

### 9 — pregunta 9

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "avanzado"
  tags: ["herramientas", "carton", "truco"]

variables:
  situacion: "emergencia_sencilla"

respuesta: verdadero
tipo: vf

enunciado: "En casos muy específicos y simples, un trozo de cartón rígido puede comprimir el pestillo de una cerradura de resorte básica."

explicacion: |
  Sí. Aunque no es profesional ni fiable para todas las cerraduras, es un método de emergencia conocido para cerraduras de pestillo simple en puertas que ceden ligeramente.
```

### 10 — pregunta 10

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "avanzado"
  tags: ["tecnica", "lifting", "picking"]

variables:
  tecnica: "lifting"

respuesta: verdadero
tipo: vf

enunciado: "El lifting o picking consiste en manipular los pines internos de la cerradura con herramientas finas hasta que se alinean y permiten el giro."

explicacion: |
  Correcto. Es una técnica de alta precisión que requiere experiencia y herramientas específicas (gancho y tensión) para abrir cerraduras de pines sin dañarlas.
```

### 11 — pregunta 11

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "avanzado"
  tags: ["tecnica", "bumping", "golpeteo"]

variables:
  tecnica: "bumping"

respuesta: verdadero
tipo: vf

enunciado: "El bumping o golpeteo utiliza una llave modificada (bump key) golpeada para vibrar los pines y permitir el giro momentáneo del cilindro."

explicacion: |
  Sí. Esta técnica explota la tolerancia mecánica de las cerraduras estándar. La vibración hace que los pines salten brevemente a la línea de corte, permitiendo el giro.
```

### 12 — pregunta 12

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "avanzado"
  tags: ["tecnica", "shimming", "laminado"]

variables:
  tecnica: "shimming"

respuesta: verdadero
tipo: vf

enunciado: "El shimming o laminado implica insertar una lámina delgada entre el cilindro y la carcasa para desactivar el mecanismo de bloqueo."

explicacion: |
  Correcto. Se usa en cerraduras de perfiles europeos o de seguridad donde se puede acceder a la ranura entre el cilindro y la base para manipular el retenedor.
```

### 13 — pregunta 13

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "intermedio"
  tags: ["limitaciones", "alta_seguridad", "resistencia"]

variables:
  tipo_cerradura: "alta_seguridad"

respuesta: verdadero
tipo: vf

enunciado: "Las cerraduras de alta seguridad, con pines de seguridad o mecanismos anti-bumping, son resistentes a la mayoría de las técnicas de apertura sin destrucción."

explicacion: |
  Sí. Estas cerraduras están diseñadas específicamente para resistir el picking, bumping y shimming, requiriendo a menudo la intervención del fabricante o técnicas más especializadas.
```

### 14 — pregunta 14

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "intermedio"
  tags: ["limitaciones", "electronica", "acceso"]

variables:
  tipo_cerradura: "electronica"

respuesta: verdadero
tipo: vf

enunciado: "Las cerraduras electrónicas o inteligentes no pueden abrirse con técnicas mecánicas tradicionales como el lifting o el bumping."

explicacion: |
  Correcto. Estas cerraduras dependen de circuitos y códigos. La apertura sin destrucción requiere acceso a la parte mecánica de respaldo (si existe) o métodos electrónicos autorizados.
```

### 15 — pregunta 15

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "basico"
  tags: ["etica", "confidencialidad", "privacidad"]

variables:
  deber_profesional: "confidencialidad"

respuesta: verdadero
tipo: vf

enunciado: "El cerrajero debe mantener la confidencialidad sobre la situación del cliente y la técnica utilizada, respetando su privacidad."

explicacion: |
  Sí. La ética profesional exige no divulgar detalles de la apertura, la ubicación o la identidad del cliente a terceros no autorizados.
```

### 16 — pregunta 16

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "basico"
  tags: ["etica", "integridad", "honestidad"]

variables:
  valor_profesional: "integridad"

respuesta: verdadero
tipo: vf

enunciado: "La integridad implica que el cerrajero no debe aprovecharse de la vulnerabilidad del cliente para cobrar precios excesivos o innecesarios."

explicacion: |
  Correcto. Aunque es un servicio de emergencia, el profesional debe actuar con honestidad y transparencia en los costos y el trabajo realizado.
```

### 17 — pregunta 17

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "documentacion", "informe"]

variables:
  accion_requerida: "documentar"

respuesta: verdadero
tipo: vf

enunciado: "Es recomendable que el cerrajero documente la apertura, incluyendo la identificación del cliente y el método utilizado, para fines legales y de garantía."

explicacion: |
  Sí. La documentación protege tanto al cliente como al profesional, demostrando que la apertura fue legítima y realizada por un experto.
```

### 18 — pregunta 18

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "basico"
  tags: ["procedimiento", "policia", "seguridad"]

variables:
  situacion: "sospechosa"

respuesta: verdadero
tipo: vf

enunciado: "Si el cerrajero sospecha que el solicitante no es el legítimo dueño, debe negarse a trabajar y recomendar contactar a la policía."

explicacion: |
  Correcto. Ante la duda sobre la legitimidad del acceso, la única opción segura y legal es involucrar a las autoridades para validar la situación.
```

### 19 — pregunta 19

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "intermedio"
  tags: ["herramientas", "llave_maestra", "universidad"]

variables:
  tipo_llave: "maestra"

respuesta: verdadero
tipo: vf

enunciado: "Las llaves maestras o universales pueden abrir múltiples cerraduras de un mismo sistema sin dañar el mecanismo."

explicacion: |
  Sí. Estas llaves están diseñadas para coincidir con los pines de varias cerraduras del mismo fabricante o línea, permitiendo el acceso rápido y sin daño.
```

### 20 — pregunta 20

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "avanzado"
  tags: ["tecnica", "pestillo_seguridad", "mecanismo"]

variables:
  elemento: "pestillo_seguridad"

respuesta: verdadero
tipo: vf

enunciado: "Algunas técnicas de apertura sin destrucción se centran en manipular o retraer el pestillo de seguridad desde el exterior."

explicacion: |
  Correcto. El pestillo de seguridad es el elemento que bloquea la puerta. Si se logra retraer o desactivar, la puerta se puede abrir sin tocar el cilindro principal.
```

### 21 — pregunta 21

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "intermedio"
  tags: ["tecnica", "corredera", "guia"]

variables:
  tipo_puerta: "corredera"

respuesta: verdadero
tipo: vf

enunciado: "Para puertas correderas, a veces es posible levantar la hoja para desengancharla de la guía inferior si la cerradura lo permite."

explicacion: |
  Sí. En algunos modelos, levantar la puerta rompe temporalmente el enganche con el riel inferior, permitiendo deslizarla y acceder a la cerradura o al pestillo.
```

### 22 — pregunta 22

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "avanzado"
  tags: ["tecnica", "imanes", "magnetica"]

variables:
  tipo_cerradura: "magnetica"

respuesta: verdadero
tipo: vf

enunciado: "Las cerraduras magnéticas o de seguridad con componentes magnéticos pueden ser vulneradas con imanes de alta potencia en ciertas condiciones."

explicacion: |
  Correcto. Aunque no es común en viviendas estándar, algunas cerraduras de seguridad utilizan mecanismos magnéticos que pueden ser interferidos por campos magnéticos fuertes.
```

### 23 — pregunta 23

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "basico"
  tags: ["etica", "respeto", "inmueble"]

variables:
  principio: "respeto"

respuesta: verdadero
tipo: vf

enunciado: "El cerrajero debe tratar el inmueble con el mayor respeto posible, evitando marcas innecesarias en la puerta o el marco durante la apertura."

explicacion: |
  Sí. Aunque es un servicio de emergencia, el profesional debe minimizar el impacto visual y estructural en la propiedad del cliente.
```

### 24 — pregunta 24

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "basico"
  tags: ["etica", "no_juzgar", "profesionalismo"]

variables:
  actitud: "no_juzgar"

respuesta: verdadero
tipo: vf

enunciado: "El cerrajero debe mantener una actitud profesional y no juzgar al cliente por haberse quedado fuera, independientemente de las circunstancias."

explicacion: |
  Correcto. El estrés y la vulnerabilidad son parte de la situación. El profesional debe enfocarse en la solución técnica y ética, no en la culpa.
```

### 25 — pregunta 25

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "cambio", "recomendacion"]

variables:
  accion_post_apertura: "cambiar_cerradura"

respuesta: verdadero
tipo: vf

enunciado: "Tras una apertura por pérdida de llave, se recomienda al cliente cambiar la cerradura para garantizar la seguridad futura."

explicacion: |
  Sí. Si la llave perdida está en manos de desconocidos, mantener la cerradura actual implica un riesgo de seguridad. El cambio es la medida preventiva adecuada.
```

### 26 — pregunta 26

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "basico"
  tags: ["procedimiento", "garantia", "calidad"]

variables:
  elemento: "garantia"

respuesta: verdadero
tipo: vf

enunciado: "Un cerrajero profesional debe ofrecer garantía sobre el trabajo realizado, asegurando que la cerradura funciona correctamente tras la apertura."

explicacion: |
  Correcto. La garantía asegura al cliente que la técnica no dañó el mecanismo y que, si surge un problema, el cerrajero lo resolverá sin costo adicional.
```

### 27 — pregunta 27

```
metadata:
  materia: "oficios"
  tema: "cerrajero_apertura_de_emergencia_sin_destruccion"
  nivel: "avanzado"
  tags: ["limitaciones", "blindada", "dificultad"]

variables:
  tipo_puerta: "blindada"

respuesta: verdadero
tipo: vf

enunciado: "Las puertas blindadas suelen tener cerraduras reforzadas y marcos resistentes, lo que hace más difícil la apertura sin destrucción."

explicacion: |
  Sí. La construcción robusta de las puertas blindadas y la calidad de sus cerraduras aumentan la resistencia a técnicas de apertura rápida, requiriendo más tiempo y especialización.
```
