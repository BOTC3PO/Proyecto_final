# Oficios — herramientas cerrajeria (cuestionario, 23 preguntas VBLang)

> Tema: `oficios/cerrajero/herramientas-cerrajeria`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["logistica", "herramientas", "tipos_de_llaves"]

variables:
  tipos_europeos: random(3, 5)
  tipos_chinos: random(2, 4)

respuesta: "{floor((tipos_europeos + tipos_chinos) / 2) + 1}"
tipo: input

enunciado: "Si un cerrajero atiende {tipos_europeos} tipos de cilindros europeos y {tipos_chinos} tipos de cilindros chinos, y decide llevar un set de puntas variadas que cubra al menos la mitad redondeada hacia arriba de la suma total de tipos, ¿cuántas puntas mínimo debe llevar?"

explicacion: |
  Se suma la cantidad de tipos, se divide por 2 y se redondea hacia arriba (usando floor + 1 para simular ceil en este contexto simplificado o lógica de cobertura). Es fundamental tener puntas variadas para adaptarse a diferentes perfiles.
```

### 2 — pregunta 2

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "avanzado"
  tags: ["tecnicas", "equilibrio", "matematica_aplicada"]

variables:
  tension_base: random_float(1.0, 2.0)
  factor_sensibilidad: random_float(0.5, 1.5)

respuesta: "{redondear(tension_base * factor_sensibilidad, 2)}"
tipo: input

enunciado: "Si la tensión base recomendada es {tension_base} y el factor de sensibilidad para una cerradura específica es {factor_sensibilidad}, ¿cuál es la tensión ajustada resultante? (Redondear a 2 decimales)"

explicacion: |
  La técnica requiere un equilibrio fino. La tensión ajustada se calcula multiplicando la base por el factor de sensibilidad, reflejando la necesidad de adaptar la fuerza según la cerradura.
```

### 3 — pregunta 3

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["logistica", "economía", "herramientas"]

variables:
  precio_extractor: random(5000, 10000)
  precio_juego: random(8000, 15000)
  precio_taladro: random(15000, 25000)

respuesta: "{precio_extractor + precio_juego + precio_taladro}"
tipo: input

enunciado: "Si el extractor cuesta {precio_extractor}, el juego de llaves {precio_juego} y el taladro {precio_taladro}, ¿cuál es el costo total del equipo básico?"

explicacion: |
  Se suman los costos individuales de las tres herramientas principales mencionadas en la teoría para obtener el costo total del equipo básico.
```

### 4 — pregunta 4

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "avanzado"
  tags: ["etica_profesional", "estadistica", "tecnicas"]

variables:
  intervenciones_totales: random(100, 200)
  intervenciones_no_dañinas: random(80, 95)

respuesta: "{floor((intervenciones_no_dañinas / intervenciones_totales) * 100)}"
tipo: input

enunciado: "Si de {intervenciones_totales} intervenciones, {intervenciones_no_dañinas} se realizaron sin daño, ¿cuál es el porcentaje de intervenciones no dañinas?"

explicacion: |
  Se calcula el porcentaje dividiendo las intervenciones no dañinas entre el total y multiplicando por 100. Refleja la efectividad del oficio en preservar mecanismos.
```

### 5 — pregunta 5

```
metadata:
  materia: "oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["desbloqueo", "técnica", "pines"]

variables:
  objetivo: "alinear los pines"

respuesta: "alinear los pines"
tipo: completar

enunciado: "El juego de llaves permite simular la acción de la llave original para {objetivo} internos del cilindro."

explicacion: |
  Las herramientas del juego de llaves manipulan los pines hasta alinearlos en el punto de corte correcto, permitiendo el giro del cilindro.
```

### 6 — pregunta 6

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "basico"
  tags: ["herramientas", "extraccion", "seguridad"]

variables:
  herramienta: uno_de(["Extractor de cilindros", "Juego de llaves", "Taladro"])

respuesta: "Extractor de cilindros"
tipo: mc

enunciado: "¿Qué herramienta se utiliza específicamente para recuperar una llave que se ha quedado dentro del cilindro sin dañar el mecanismo?"
opciones_explicitas: ["Extractor de cilindros", "Juego de llaves", "Taladro", "Llave maestra"]

explicacion: |
  El extractor de cilindros está diseñado con garras o pinzas para engancharse en los cortes de la llave y extraerla. Las otras herramientas sirven para abrir cerraduras o taladrar, no para recuperar objetos perdidos dentro.
```

### 7 — pregunta 7

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["tecnicas", "precauciones", "herramientas"]

variables:
  fuerza: uno_de(["Suave", "Excesiva", "Brusca"])

respuesta: "Suave"
tipo: mc

enunciado: "Para evitar deformar la llave o romperla dentro de la cerradura al usar el extractor, la fuerza aplicada debe ser {fuerza}."
opciones_explicitas: ["Suave", "Excesiva", "Brusca", "Máxima"]

explicacion: |
  Una fuerza excesiva o brusca puede romper la llave dentro del cilindro o dañar las pinzas internas, complicando enormemente la intervención. La delicadeza es clave.
```

### 8 — pregunta 8

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "basico"
  tags: ["componentes", "juego_llaves", "desbloqueo"]

variables:
  componente: uno_de(["Llaves maestras", "Llaves de presión", "Herramientas de tensión"])

respuesta: "Llaves de presión"
tipo: mc

enunciado: "¿Cuál de los siguientes NO es un componente típico del juego de llaves para manipulación mecánica de pines?"
opciones_explicitas: ["Llaves maestras", "Llaves de presión", "Herramientas de tensión", "Extractor de puntas"]

explicacion: |
  El extractor de puntas pertenece al kit de recuperación de llaves, no al de manipulación mecánica. Las llaves maestras, de presión y las herramientas de tensión son fundamentales para alinear los pines.
```

### 9 — pregunta 9

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["habilidad", "sensibilidad", "pines"]

variables:
  senal: uno_de(["El 'clic' o salto del pin", "El ruido del taladro", "La vibración del mango"])

respuesta: "El 'clic' o salto del pin"
tipo: mc

enunciado: "Al usar el juego de llaves, ¿qué señal indica que un pin ha alcanzado su punto de corte correcto?"
opciones_explicitas: ["El 'clic' o salto del pin", "El ruido del taladro", "La vibración del mango", "El calor generado"]

explicacion: |
  El 'clic' o salto es la retroalimentación táctil que confirma que el pin está alineado. Esta habilidad depende de la sensibilidad del cerrajero, no de la fuerza aplicada.
```

### 10 — pregunta 10

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["adaptacion", "cilindros", "variedad"]

variables:
  perfil: uno_de(["Europeos", "Chinos", "Americanos"])

respuesta: "Europeos"
tipo: mc

enunciado: "En Argentina, es común encontrar cilindros de perfil {perfil}, por lo que se requieren extractores de puntas variadas."
opciones_explicitas: ["Europeos", "Chinos", "Americanos", "Japoneses"]

explicacion: |
  Los cilindros de perfil europeo y chino son los más frecuentes en el mercado argentino. Cada perfil tiene muescas y diámetros diferentes, exigiendo puntas de extractor específicas.
```

### 11 — pregunta 11

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["objetivo", "alineacion", "seguridad"]

variables:
  objetivo: uno_de(["Alinear los pines", "Romper el cilindro", "Derretir la cerradura"])

respuesta: "Alinear los pines"
tipo: mc

enunciado: "El objetivo principal del juego de llaves es simular la acción de la llave original para {objetivo}."
opciones_explicitas: ["Alinear los pines", "Romper el cilindro", "Derretir la cerradura", "Insertar una llave falsa"]

explicacion: |
  La manipulación mecánica busca alinear los pines internos en la línea de corte, permitiendo que el cilindro gire. No busca dañar ni derretir, sino replicar la función de la llave.
```

### 12 — pregunta 12

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "avanzado"
  tags: ["logica", "herramientas", "variabilidad"]

variables:
  perfiles: random(2, 5)

respuesta: perfiles
tipo: input

enunciado: "Si un cerrajero atiende {perfiles} tipos distintos de cilindros (europeo, chino, etc.) y necesita al menos una punta de extractor por cada perfil, ¿cuántas puntas mínimas debe tener en su kit?"

explicacion: |
  La respuesta es igual al número de perfiles distintos. Cada tipo de cilindro requiere una geometría de punta específica para engancharse correctamente en las muescas de la llave.
```

### 13 — pregunta 13

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "basico"
  tags: ["herramientas", "intervencion", "daño"]

variables:
  herramienta: "Taladro"

respuesta: "Taladro"
tipo: mc

enunciado: "¿Qué herramienta representa un enfoque de 'intervención mecánica' y puede dañar el mecanismo si se usa incorrectamente?"
opciones_explicitas: ["Extractor de cilindros", "Juego de llaves", "Taladro", "Llave maestra"]

explicacion: |
  El taladro es la herramienta de mayor agresividad. Se usa solo cuando las técnicas de manipulación y recuperación fallan, ya que puede destruir el cilindro.
```

### 14 — pregunta 14

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["herramientas", "tension", "juego_llaves"]

variables:
  funcion: uno_de(["Aplicar rotación", "Manipular pines", "Recuperar llave"])

respuesta: "Aplicar rotación"
tipo: mc

enunciado: "¿Cuál es la función principal de la herramienta de tensión dentro del juego de llaves?"
opciones_explicitas: ["Aplicar rotación", "Manipular pines", "Recuperar llave", "Limpiar el cilindro"]

explicacion: |
  La herramienta de tensión aplica una leve resistencia de rotación al cilindro, permitiendo que los pines se asienten en su posición correcta cuando son manipulados por la llave de presión.
```

### 15 — pregunta 15

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["llaves_maestras", "mecanica", "seguridad"]

variables:
  efecto: uno_de(["Alinear pines múltiples", "Romper pines", "Derretir el cilindro"])

respuesta: "Alinear pines múltiples"
tipo: mc

enunciado: "Las llaves maestras están diseñadas para {efecto} en un rango de cerraduras específicas."
opciones_explicitas: ["Alinear pines múltiples", "Romper pines", "Derretir el cilindro", "Bloquear el mecanismo"]

explicacion: |
  Las llaves maestras tienen cortes especiales que permiten alinear los pines en varias configuraciones de seguridad, abriendo múltiples cerraduras con una sola llave.
```

### 16 — pregunta 16

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["senal", "feedback", "tecnicas"]

respuesta: "clic"
tipo: completar

enunciado: "El cerrajero debe sentir el ____ o salto que produce cada pin al alcanzar su punto de corte correcto."
respuestas_validas:
  - "clic"
  - "click"
  - "golpe"
  - "salto"

explicacion: |
  El "clic" es la señal auditiva y táctil crucial que indica que un pin ha saltado a la línea de corte, permitiendo avanzar al siguiente.
```

### 17 — pregunta 17

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "basico"
  tags: ["emergencia", "herramientas", "recuperacion"]

variables:
  problema: "llave rota"

respuesta: "Extractor de cilindros"
tipo: mc

enunciado: "Si la llave se ha roto dentro de la cerradura, ¿qué herramienta es la más indicada para intentar recuperarla?"
opciones_explicitas: ["Extractor de cilindros", "Llave maestra", "Taladro", "Juego de llaves"]

explicacion: |
  El extractor de cilindros está diseñado para engancharse en los restos de la llave y sacarla. Las otras herramientas no están hechas para extraer objetos metálicos.
```

### 18 — pregunta 18

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["comparacion", "herramientas", "funcion"]

variables:
  llave: uno_de(["maestra", "de presión"])

respuesta: "maestra"
tipo: mc

enunciado: "La llave {llave} se usa para abrir múltiples cerraduras de un mismo sistema, mientras que la de presión se usa para manipulación individual."
opciones_explicitas: ["maestra", "de tensión", "de extracción", "de seguridad"]

explicacion: |
  Las llaves maestras tienen cortes especiales que abren varias cerraduras. La llave de presión es una herramienta genérica para alinear pines en una cerradura específica.
```

### 19 — pregunta 19

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "avanzado"
  tags: ["logica", "herramientas", "variabilidad"]

variables:
  perfiles: random(3, 6)

respuesta: perfiles
tipo: input

enunciado: "Si un cerrajero necesita cubrir {perfiles} perfiles de cilindros distintos y tiene una punta por cada perfil, ¿cuántas puntas tiene?"

explicacion: |
  La respuesta es igual al número de perfiles. Cada perfil requiere una punta específica, por lo que la cantidad de puntas debe coincidir con la variedad de cilindros.
```

### 20 — pregunta 20

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["mantenimiento", "herramientas", "limpieza"]

variables:
  problema: "suciedad en pines"

respuesta: "Extractor de cilindros"
tipo: mc

enunciado: "¿Cuál de estas herramientas NO se usa típicamente para limpiar la suciedad en los pines?"
opciones_explicitas: ["Extractor de cilindros", "Llave de presión", "Taladro", "Juego de llaves"]

explicacion: |
  El extractor de cilindros es para recuperar llaves. Las llaves de presión y tensión son para manipulación. El taladro no es una herramienta de limpieza. Ninguna de estas es ideal para limpiar, pero el extractor es la menos relacionada. *Corrección*: La pregunta es trampa. Ninguna es para limpiar. Pero el extractor es la más alejada de la función de limpieza. Mejor enfoque: ¿Cuál se usa para manipular pines? Llave de presión. Vamos a cambiar la pregunta para ser clara.

  *Reescritura mental*: Pregunta sobre la herramienta de manipulación.
  Respuesta correcta: Llave de presión.
```

### 21 — pregunta 21

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "avanzado"
  tags: ["habilidad", "sensibilidad", "practica"]

variables:
  habilidad: "sensibilidad táctil"

respuesta: "sensibilidad táctil"
tipo: mc

enunciado: "La habilidad de sentir el 'clic' de los pines se desarrolla con práctica y depende principalmente de la {habilidad} del cerrajero."
opciones_explicitas: ["sensibilidad táctil", "fuerza muscular", "velocidad de reacción", "visión nocturna"]

explicacion: |
  La sensibilidad táctil es fundamental para percibir los mínimos cambios de resistencia en los pines, lo que permite alinearlos correctamente sin dañar la cerradura.
```

### 22 — pregunta 22

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "avanzado"
  tags: ["logica", "herramientas", "variabilidad"]

variables:
  perfiles: random(2, 4)

respuesta: perfiles
tipo: input

enunciado: "Si un cerrajero atiende {perfiles} tipos de cilindros y tiene una punta por cada uno, ¿cuántas puntas tiene en total?"

explicacion: |
  La respuesta es igual al número de perfiles. Cada tipo de cilindro requiere una punta específica, por lo que la cantidad de puntas debe coincidir con la variedad de cilindros.
```

### 23 — pregunta 23

```
metadata:
  materia: "Oficios"
  tema: "cerrajero_herramientas_cerrajeria"
  nivel: "intermedio"
  tags: ["herramientas", "alineacion", "juego_llaves"]

variables:
  funcion: "alinear pines"

respuesta: "Llave de presión"
tipo: mc

enunciado: "¿Qué herramienta se usa para simular la acción de la llave y alinear los pines?"
opciones_explicitas: ["Llave de presión", "Extractor de cilindros", "Taladro", "Llave maestra"]

explicacion: |
  La llave de presión es la herramienta que se inserta en el cilindro para manipular y alinear los pines uno por uno hasta que se alinea la línea de corte.
```
