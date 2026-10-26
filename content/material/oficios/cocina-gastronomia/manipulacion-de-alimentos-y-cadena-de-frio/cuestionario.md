# Oficios — Cocina/Gastronomía — Manipulación de alimentos y cadena de frío (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Escrito por Claude; no obligatorio para el logro del oficio (ver `../../dependencias.md`).

---

### 1 — Principal vector

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["higiene", "manos"]

enunciado: "¿Cuál es el principal vehículo por el que los microorganismos llegan a un plato?"
tipo: mc
opciones_explicitas:
  - "Las manos de quien manipula"
  - "El tipo de cocina que se usa"
  - "El color del delantal"
respuesta: "Las manos de quien manipula"

explicacion: |
  Por eso el lavado de manos es la medida de higiene más importante.
```

### 2 — Esmalte y uñas

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["higiene"]

respuesta: verdadero
tipo: vf

enunciado: "En una cocina profesional las uñas se llevan cortas y sin esmalte."

explicacion: |
  Las uñas largas o con esmalte acumulan suciedad y pueden desprender fragmentos.
```

### 3 — Quién no manipula

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["higiene", "salud"]

respuesta: falso
tipo: vf

enunciado: "Una persona con diarrea o vómitos puede manipular alimentos siempre que se lave bien las manos."

explicacion: |
  Debe apartarse de la manipulación de alimentos mientras tenga síntomas.
```

### 4 — Carnet de manipulador

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["normativa"]

enunciado: "En la Argentina, ¿qué se obtiene aprobando un curso reconocido por la autoridad sanitaria?"
tipo: mc
opciones_explicitas:
  - "El carnet de manipulador de alimentos"
  - "El título de chef"
  - "La habilitación del local"
respuesta: "El carnet de manipulador de alimentos"

explicacion: |
  El Código Alimentario lo exige; cada jurisdicción fija el trámite.
```

### 5 — Contaminación cruzada

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["contaminacion"]

enunciado: "¿Qué es la contaminación cruzada?"
tipo: mc
opciones_explicitas:
  - "El pasaje de microorganismos de un alimento crudo a uno listo para comer"
  - "La cocción despareja de una pieza"
  - "El vencimiento de un producto"
respuesta: "El pasaje de microorganismos de un alimento crudo a uno listo para comer"

explicacion: |
  Puede ser directa o a través de tablas, cuchillos, trapos o manos.
```

### 6 — Tablas por color

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["contaminacion"]

respuesta: verdadero
tipo: vf

enunciado: "Usar tablas de colores distintos para crudos y cocidos ayuda a evitar la contaminación cruzada."

explicacion: |
  El código de colores evita depender de la memoria durante el servicio.
```

### 7 — Orden en la heladera

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "intermedio"
  tags: ["contaminacion", "almacenamiento"]

enunciado: "¿Cómo se ubican los alimentos en la heladera para evitar la contaminación cruzada?"
tipo: mc
opciones_explicitas:
  - "Lo cocido y listo para comer arriba, lo crudo abajo y tapado"
  - "Lo crudo arriba para que se enfríe más rápido"
  - "No importa el orden"
respuesta: "Lo cocido y listo para comer arriba, lo crudo abajo y tapado"

explicacion: |
  Así lo crudo no gotea sobre lo que ya no se va a cocinar.
```

### 8 — Limpiar y sanitizar

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "intermedio"
  tags: ["limpieza"]

enunciado: "¿Cuál es el orden correcto de limpieza de una superficie?"
tipo: mc
opciones_explicitas:
  - "Primero limpiar con detergente y agua, después sanitizar"
  - "Primero sanitizar y después limpiar"
  - "Solo enjuagar con agua"
respuesta: "Primero limpiar con detergente y agua, después sanitizar"

explicacion: |
  Sanitizar sobre suciedad pierde eficacia.
```

### 9 — Zona de peligro

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["temperatura"]

tipo: completar
enunciado: "La zona de peligro va aproximadamente de los 5 °C a los ___ °C."
respuestas_validas:
  - "60"

explicacion: |
  Es el rango donde las bacterias se multiplican más rápido.
```

### 10 — Heladera

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["temperatura"]

tipo: completar
enunciado: "La heladera debe mantenerse por debajo de ___ °C."
respuestas_validas:
  - "5"

explicacion: |
  Se controla con termómetro, no a ojo.
```

### 11 — Freezer

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["temperatura"]

tipo: completar
enunciado: "El freezer se mantiene a unos -___ °C."
respuestas_validas:
  - "18"

explicacion: |
  A esa temperatura las bacterias no se multiplican, pero tampoco mueren.
```

### 12 — Congelar mata

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "intermedio"
  tags: ["temperatura"]

respuesta: falso
tipo: vf

enunciado: "Congelar un alimento mata las bacterias que tenía."

explicacion: |
  Las detiene; al descongelar se reactivan.
```

### 13 — Tiempo ambiente

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["temperatura"]

enunciado: "¿Cuánto tiempo máximo puede un alimento perecedero estar a temperatura ambiente?"
tipo: mc
opciones_explicitas:
  - "Dos horas"
  - "Seis horas"
  - "Doce horas"
respuesta: "Dos horas"

explicacion: |
  Es la regla general de las guías sanitarias.
```

### 14 — Enfriar lo cocido

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "intermedio"
  tags: ["enfriado"]

enunciado: "¿Cómo se enfría correctamente un guiso grande que se va a guardar?"
tipo: mc
opciones_explicitas:
  - "En porciones chicas y recipientes bajos, rápido, y luego a la heladera"
  - "Dejándolo toda la noche sobre la mesada"
  - "Tapándolo caliente y metiéndolo en el freezer entero"
respuesta: "En porciones chicas y recipientes bajos, rápido, y luego a la heladera"

explicacion: |
  Reducir el tiempo en la zona de peligro es el objetivo.
```

### 15 — Descongelar

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "intermedio"
  tags: ["descongelado"]

enunciado: "¿Cuál es la forma segura de descongelar un alimento?"
tipo: mc
opciones_explicitas:
  - "En la parte baja de la heladera"
  - "Sobre la mesada toda la noche"
  - "Al sol"
respuesta: "En la parte baja de la heladera"

explicacion: |
  A temperatura ambiente la superficie entra en la zona de peligro mientras el centro sigue congelado.
```

### 16 — Carne picada

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "intermedio"
  tags: ["coccion"]

tipo: completar
enunciado: "La carne picada debe alcanzar en el centro ___ °C."
respuestas_validas:
  - "71"

explicacion: |
  El picado reparte la contaminación de la superficie por toda la masa.
```

### 17 — Aves

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "intermedio"
  tags: ["coccion"]

enunciado: "¿Qué temperatura interna se usa como referencia para las aves?"
tipo: mc
opciones_explicitas:
  - "74 °C"
  - "45 °C"
  - "55 °C"
respuesta: "74 °C"

explicacion: |
  Medida con termómetro en la parte más gruesa.
```

### 18 — Color no alcanza

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "intermedio"
  tags: ["coccion"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber si una carne está cocida de forma segura conviene usar un termómetro y no guiarse solo por el color."

explicacion: |
  El color no siempre refleja la temperatura interna.
```

### 19 — PEPS

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["stock"]

enunciado: "¿Qué significa PEPS o FIFO?"
tipo: mc
opciones_explicitas:
  - "Primero en entrar, primero en salir"
  - "Producto envasado para servir"
  - "Plato elaborado para servicio"
respuesta: "Primero en entrar, primero en salir"

explicacion: |
  Lo más viejo se usa primero.
```

### 20 — Etiquetar

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "basico"
  tags: ["stock"]

respuesta: verdadero
tipo: vf

enunciado: "Los envases abiertos o las preparaciones guardadas deben llevar etiqueta con el contenido y la fecha."

explicacion: |
  Evita usar algo vencido u olvidado.
```

### 21 — Recepción

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "intermedio"
  tags: ["recepcion"]

enunciado: "Si un proveedor entrega un alimento refrigerado que llega tibio, ¿qué corresponde hacer?"
tipo: mc
opciones_explicitas:
  - "Controlar la temperatura y rechazarlo si está fuera de rango"
  - "Guardarlo igual para no perder tiempo"
  - "Lavarlo antes de guardarlo"
respuesta: "Controlar la temperatura y rechazarlo si está fuera de rango"

explicacion: |
  La cadena de frío empieza en la recepción.
```

### 22 — Recalentar

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "intermedio"
  tags: ["coccion"]

respuesta: verdadero
tipo: vf

enunciado: "Un plato recalentado debe estar bien caliente en todo el centro y no conviene recalentarlo más de una vez."

explicacion: |
  Cada ciclo de enfriado y calentado da otra oportunidad a las bacterias.
```

### 23 — Responsable

```
metadata:
  materia: "oficios"
  tema: "cocina_manipulacion_de_alimentos_y_cadena_de_frio"
  nivel: "avanzado"
  tags: ["responsabilidad"]

enunciado: "Si un comensal se enferma por un plato mal manipulado, ¿quién responde?"
tipo: mc
opciones_explicitas:
  - "El establecimiento"
  - "Siempre el proveedor"
  - "Nadie"
respuesta: "El establecimiento"

explicacion: |
  Por eso las rutinas se cumplen aunque el servicio apure.
```
