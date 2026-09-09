# Oficios — tecnicas confeccion (cuestionario, 24 preguntas VBLang)

> Tema: `oficios/modista-corte-y-confeccion/tecnicas-confeccion`. Ver `teoria.md` en esta misma carpeta. Revisado manualmente: las 24 preguntas del archivo interpolaban directamente la propia variable-respuesta en una oración declarativa fija sin ningún hueco `___` — corregido añadiendo el hueco real en cada bloque (Q21 además reformulada como pregunta real por tener dos variables fijas mostrando ambas partes de la respuesta). Typo "costinas"→"costuras" y "costas"→"costuras" en dos explicaciones.

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "basico"
  tags: ["patronaje", "definicion", "fundamentos"]

respuesta: "plantilla"
tipo: completar

enunciado: "El patronaje consiste en crear una ___, generalmente de papel o cartulina, que representa las piezas planas del diseño final."

explicacion: |
  El patronaje es la base del proceso de confección. Actúa como un "molde" o guía exacta que indica la forma que debe tener cada parte de la tela para que, al unirla, la prenda tenga la estructura y el ajuste deseado.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["corte", "urdimbre", "trama"]

respuesta: "urdimbre"
tipo: completar

enunciado: "Para lograr resultados profesionales, es esencial colocar los patrones sobre el tejido siguiendo la dirección de la ___ (el hilo longitudinal) y la trama."

explicacion: |
  La orientación de la tela es crítica. Se debe respetar la dirección de la urdimbre (hilo longitudinal) y la trama (hilo transversal) para garantizar que la prenda tenga la caída natural y la estabilidad adecuada.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["corte", "fijacion", "alfileres"]

respuesta: "alfileres"
tipo: completar

enunciado: "Se recomienda fijar los patrones con ___ de cabeza grande o pesas especiales para evitar que se muevan durante el corte."

explicacion: |
  Para evitar que el patrón se desplace y garantizando que cada pieza sea idéntica a la plantilla, se deben usar alfileres de cabeza grande o pesas especiales. Esto asegura precisión en el corte.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "basico"
  tags: ["costuras", "definicion", "ensamble"]

respuesta: "uniones"
tipo: completar

enunciado: "Las costuras son las ___ que dan forma y resistencia a la prenda."

explicacion: |
  Las costuras son fundamentales porque unen las diferentes piezas de tela. Esta unión no solo da forma a la prenda, sino que también le proporciona la resistencia necesaria para soportar el uso diario.
```

### 5 — pregunta 5

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "basico"
  tags: ["costura_recta", "tecnicas"]

respuesta: "recta"
tipo: completar

enunciado: "La costura ___ es la base de todo ensamble y consiste en unir dos piezas de tela por sus bordes con una línea de puntadas continua."

explicacion: |
  La costura recta es la más básica y utilizada. Consiste en unir bordes con una línea continua de puntadas. Es la base sobre la cual se construye gran parte de la ropa.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["margen", "resistencia", "costura"]

variables:
  margen_min: 1
  margen_max: 2

respuesta: margen_min + " a " + margen_max
tipo: completar

enunciado: "Para que la costura sea resistente, es necesario dejar un margen de costura adecuado, generalmente de ___ centímetros."

explicacion: |
  El margen de costura (generalmente de 1 a 2 cm) es crucial para la durabilidad. Si es muy pequeño, la costura puede abrirse; si es muy grande, puede ser innecesariamente gruesa o complicada.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["ensamble", "orden", "construccion"]

respuesta: "hombros"
tipo: completar

enunciado: "Por lo general, se comienza por las costuras principales, como los ___ y los laterales, para dar volumen a la prenda."

explicacion: |
  El ensamble sigue un orden lógico. Comenzar por hombros y laterales permite dar volumen y estructura básica a la prenda antes de proceder con detalles más finos.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["planchado", "acabado", "profesional"]

respuesta: "planchar"
tipo: completar

enunciado: "Es importante ___ cada costura inmediatamente después de coserla para darle un aspecto limpio y profesional."

explicacion: |
  Planchar las costuras inmediatamente después de coserlas es una técnica clave. Esto aplan las costuras, evita arrugas y facilita el ajuste de las siguientes uniones, mejorando el acabado final.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["costuras", "tipos", "clasificacion"]

variables:
  costo_1: "recta"
  costo_2: "francesa"
  costo_3: "sobrehilvanada"

respuesta: costo_1 + ", " + costo_2 + " y " + costo_3
tipo: completar

enunciado: "Las costuras más utilizadas en la enseñanza básica son ___."

explicacion: |
  Estas tres son fundamentales en la enseñanza básica. La recta para uniones generales, la francesa para acabados limpios por dentro, y la sobrehilvanada para rematar bordes y evitar deshilachados.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "basico"
  tags: ["telas", "materiales", "argentina"]

variables:
  tela_1: "algodón"
  tela_2: "lino"

respuesta: tela_1 + " y " + tela_2
tipo: completar

enunciado: "En la confección argentina, es común utilizar telas de ___ o mezclas sintéticas para prendas de uso diario."

explicacion: |
  El algodón y el lino son fibras naturales muy populares en Argentina por su comodidad y transpirabilidad. Las mezclas sintéticas también son frecuentes por su durabilidad y facilidad de cuidado.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "basico"
  tags: ["patronaje", "objetivo", "ajuste"]

respuesta: "ajuste"
tipo: completar

enunciado: "El patrón actúa como guía exacta para que, al unir las piezas, la prenda tenga la estructura y el ___ deseado."

explicacion: |
  El objetivo principal del patrón es garantizar que la prenda tenga el ajuste correcto. Sin esta guía, la prenda podría quedar holgada, ajustada o asimétrica.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["caida", "tejido", "orientacion"]

respuesta: "vital"
tipo: completar

enunciado: "Respetar el sentido del tejido es ___ para la caída natural de la prenda."

explicacion: |
  Si la tela se corta fuera del hilo (urdimbre/trama), la prenda puede torcerse o tener una caída irregular. Respetar el sentido del tejido asegura que la prenda se comporte como se espera.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "basico"
  tags: ["herramientas", "corte", "pesas"]

respuesta: "pesas"
tipo: completar

enunciado: "Además de los alfileres, se pueden usar ___ especiales para fijar los patrones sin dañar la tela."

explicacion: |
  Las pesas son útiles para telas delicadas o gruesas donde los alfileres podrían dejar marcas o no sujetar bien. Permiten una fijación segura sin perforar el tejido.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["costura_francesa", "acabado", "interior"]

respuesta: "limpio por el interior"
tipo: completar

enunciado: "La costura francesa se utiliza comúnmente porque deja un acabado ___."

explicacion: |
  La costura francesa encierra los bordes de la tela dentro de la propia costura. Esto es ideal para telas que se deshilachan fácilmente o para prendas de lujo donde el interior debe verse bien.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["sobrehilvanada", "remate", "deshilachado"]

respuesta: "evitar"
tipo: completar

enunciado: "La costura sobrehilvanada se usa para el remate de los bordes con el fin de ___ que la tela se deshilache."

explicacion: |
  Esta costura cubre el borde de la tela con puntadas en zigzag o similares, sellando las fibras para que no se suelten con el uso o el lavado.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "avanzado"
  tags: ["acabados", "decoracion", "diseno"]

respuesta: "decorativos"
tipo: completar

enunciado: "En la moda local, es común ver acabados visibles que forman parte del diseño, como costuras ___."

explicacion: |
  Algunos acabados no solo son funcionales sino también estéticos. Las costuras decorativas, por ejemplo, son visibles y contribuyen al estilo de la prenda.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["margen", "variacion", "tela"]

respuesta: "tipo"
tipo: completar

enunciado: "El margen de costura adecuado depende del ___ de tela y la máquina utilizada."

explicacion: |
  No todos los márgenes son iguales. Telas gruesas pueden requerir márgenes más grandes para mayor seguridad, mientras que telas delgadas pueden usar márgenes más pequeños para reducir volumen.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "basico"
  tags: ["costura_recta", "identificacion", "puntadas"]

respuesta: "continua"
tipo: completar

enunciado: "La costura recta se caracteriza por unir las piezas con una línea de puntadas ___."

explicacion: |
  La continuidad de las puntadas es lo que define a la costura recta. Es simple, directa y efectiva para la mayoría de las uniones básicas.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["ensamble", "volumen", "estructura"]

respuesta: "volumen"
tipo: completar

enunciado: "Unir los hombros y los laterales permite dar ___ a la prenda."

explicacion: |
  Antes de añadir detalles, la prenda necesita tomar su forma tridimensional. Las costuras de hombro y lateral son las que transforman las piezas planas en una prenda que se puede usar.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "basico"
  tags: ["acabados", "bordes", "remate"]

respuesta: "remate"
tipo: completar

enunciado: "Los acabados incluyen el ___ de los bordes para evitar que la tela se deshilache."

explicacion: |
  El remate de bordes es una operación de acabado esencial. Sin él, los bordes cortados de la tela se desharían con el tiempo y el lavado.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["patronaje", "corte", "diferencia"]

respuesta: "el patronaje"
tipo: completar

enunciado: "¿Qué se realiza primero en el proceso de confección: el patronaje o el corte de la tela?"

explicacion: |
  El orden es estricto: primero se crea la guía (patrón) y luego se corta el material (corte). Invertir este proceso haría imposible saber qué forma cortar.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["calidad", "percepcion", "acabados"]

respuesta: "acabados"
tipo: completar

enunciado: "Los ___ definen la calidad percibida de la prenda por el usuario final."

explicacion: |
  Aunque la estructura interna sea fuerte, si los acabados (dobladillos, costuras visibles, etc.) son pobres, la prenda se percibirá como de baja calidad.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "intermedio"
  tags: ["durabilidad", "resistencia", "acabados"]

respuesta: "acabados"
tipo: completar

enunciado: "Los ___ también contribuyen directamente a la durabilidad de la prenda."

explicacion: |
  Un buen acabado protege las costuras y los bordes del desgaste prematuro. Por ejemplo, un dobladillo bien hecho no se deshilachará fácilmente.
```

### 24 — pregunta 24

```
metadata:
  materia: "Oficios"
  tema: "modista_corte_y_confeccion_tecnicas_confeccion"
  nivel: "basico"
  tags: ["ensamble", "uniones", "piezas"]

respuesta: "unir"
tipo: completar

enunciado: "El ensamble es el proceso de ___ todas las piezas cortadas siguiendo un orden lógico."

explicacion: |
  El ensamble es la fase donde las piezas individuales toman forma de prenda. Seguir un orden lógico evita errores y facilita la construcción.
```
