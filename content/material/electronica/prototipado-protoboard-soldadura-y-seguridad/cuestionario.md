# Electrónica — Prototipado: protoboard, soldadura y seguridad (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Etapas

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["prototipado"]

enunciado: "El orden habitual para construir un circuito es..."
tipo: mc
opciones_explicitas:
  - "Prototipo en protoboard, verificación y luego soldadura"
  - "Soldadura directa y luego verificación"
  - "Verificación sin armarlo"
respuesta: "Prototipo en protoboard, verificación y luego soldadura"

explicacion: |
  Primero se prueba y después se hace definitivo.
```

### 2 — Protoboard

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["protoboard"]

enunciado: "La protoboard sirve para..."
tipo: mc
opciones_explicitas:
  - "Armar circuitos de prueba sin soldar"
  - "Soldar componentes de forma definitiva"
  - "Medir tensión"
respuesta: "Armar circuitos de prueba sin soldar"

explicacion: |
  Los componentes se pueden cambiar fácilmente.
```

### 3 — Filas conectadas

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["protoboard"]

enunciado: "En la zona central de una protoboard, las filas de cinco agujeros alineados verticalmente..."
tipo: mc
opciones_explicitas:
  - "Están conectadas entre sí"
  - "Están aisladas entre sí"
  - "Están conectadas a la red"
respuesta: "Están conectadas entre sí"

explicacion: |
  Cada columna de cinco agujeros es un nodo.
```

### 4 — Canal central

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["protoboard"]

enunciado: "El canal central de la protoboard está pensado para..."
tipo: mc
opciones_explicitas:
  - "Insertar circuitos integrados"
  - "Colocar los cables de alimentación"
  - "Colocar el multímetro"
respuesta: "Insertar circuitos integrados"

explicacion: |
  Así las patas de cada lado quedan en filas distintas.
```

### 5 — Rieles

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["protoboard"]

enunciado: "Los rieles de alimentación de los bordes sirven para..."
tipo: mc
opciones_explicitas:
  - "Llevar el positivo y la masa a todo el circuito"
  - "Conectar los pulsadores"
  - "Soldar"
respuesta: "Llevar el positivo y la masa a todo el circuito"

explicacion: |
  Están conectados a lo largo de la placa.
```

### 6 — Rieles interrumpidos

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "avanzado"
  tags: ["protoboard"]

respuesta: verdadero
tipo: vf

enunciado: "Algunas protoboards tienen los rieles interrumpidos a la mitad, lo que conviene verificar con el multímetro."

explicacion: |
  Sino, parte del circuito queda sin alimentación.
```

### 7 — Corrientes elevadas

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["protoboard"]

respuesta: falso
tipo: vf

enunciado: "Los contactos de una protoboard son aptos para corrientes elevadas."

explicacion: |
  Están pensados para señales y corrientes bajas.
```

### 8 — Nodos de la protoboard

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["protoboard", "calculo"]

variables:
  cols: uno_de([10, 20, 30, 63])
  n: cols * 2

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Una protoboard tiene {cols} columnas, cada una con dos grupos de cinco agujeros (uno a cada lado del canal central). ¿Cuántos grupos de cinco agujeros conectados entre sí hay en total?"

pasos:
  - "Columnas × 2"

explicacion: |
  Cada mitad tiene un grupo por columna.
```

### 9 — Cables

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["protoboard", "buenas_practicas"]

enunciado: "Una buena práctica al armar un circuito es..."
tipo: mc
opciones_explicitas:
  - "Usar cables de colores y cortos"
  - "Usar cables largos y del mismo color"
  - "Conectar la alimentación primero"
respuesta: "Usar cables de colores y cortos"

explicacion: |
  Rojo para positivo, negro para masa; la alimentación se conecta al final.
```

### 10 — Qué es soldar

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["soldadura"]

enunciado: "Soldar es unir piezas metálicas con..."
tipo: mc
opciones_explicitas:
  - "Una aleación fundida, el estaño"
  - "Pegamento"
  - "Cinta aisladora"
respuesta: "Una aleación fundida, el estaño"

explicacion: |
  Forma una unión eléctrica y mecánica.
```

### 11 — Fundente

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["soldadura"]

enunciado: "El fundente del núcleo de la soldadura..."
tipo: mc
opciones_explicitas:
  - "Limpia las superficies y ayuda a que el estaño fluya"
  - "Enfría la unión"
  - "Aumenta la tensión"
respuesta: "Limpia las superficies y ayuda a que el estaño fluya"

explicacion: |
  Mejora la unión.
```

### 12 — Cómo soldar

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["soldadura"]

enunciado: "Para soldar correctamente se calientan primero..."
tipo: mc
opciones_explicitas:
  - "El terminal y la isla de cobre"
  - "Solo el estaño"
  - "Solo el componente"
respuesta: "El terminal y la isla de cobre"

explicacion: |
  Luego se acerca el estaño a la unión, no a la punta.
```

### 13 — Acercar el estaño

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["soldadura"]

enunciado: "El estaño se acerca..."
tipo: mc
opciones_explicitas:
  - "A la unión caliente, no a la punta del soldador"
  - "A la punta del soldador"
  - "A cualquier lado"
respuesta: "A la unión caliente, no a la punta del soldador"

explicacion: |
  Debe fundirse por el calor de la unión.
```

### 14 — Soldadura fría

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["soldadura"]

respuesta: verdadero
tipo: vf

enunciado: "Una soldadura fría puede parecer conectada pero fallar con el tiempo."

explicacion: |
  Suele verse opaca, granulosa o con forma de bolita.
```

### 15 — Reparar

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["soldadura"]

enunciado: "Una soldadura fría se repara..."
tipo: mc
opciones_explicitas:
  - "Volviendo a calentar y agregando estaño o fundente"
  - "Dejándola así"
  - "Con cinta"
respuesta: "Volviendo a calentar y agregando estaño o fundente"

explicacion: |
  Hasta que quede brillante y cónica.
```

### 16 — Descarga electrostática

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["esd"]

enunciado: "La descarga electrostática puede dañar..."
tipo: mc
opciones_explicitas:
  - "Circuitos integrados y transistores"
  - "Solo los cables"
  - "Solo las resistencias"
respuesta: "Circuitos integrados y transistores"

explicacion: |
  Aunque la persona no sienta la descarga.
```

### 17 — Prevención

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["esd"]

tipo: completar
enunciado: "Para evitar daños por descarga electrostática se usa una pulsera ___."
respuestas_validas:
  - "antiestática"
  - "antiestatica"

explicacion: |
  Se conecta a masa.
```

### 18 — Soldador

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "El soldador debe apoyarse siempre en su soporte, y nunca tocar su punta."

explicacion: |
  La punta alcanza temperaturas muy altas.
```

### 19 — Humo

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["seguridad"]

enunciado: "Al soldar conviene..."
tipo: mc
opciones_explicitas:
  - "Trabajar en un lugar ventilado"
  - "Respirar cerca de la unión"
  - "Tapar las ventanas"
respuesta: "Trabajar en un lugar ventilado"

explicacion: |
  Para no inhalar el humo del fundente.
```

### 20 — Red eléctrica

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "Los circuitos de prueba conviene alimentarlos con fuentes de baja tensión y aisladas de la red."

explicacion: |
  Con tensión de red el riesgo es mucho mayor.
```

### 21 — Capacitores

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "avanzado"
  tags: ["seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "Los capacitores grandes pueden retener carga después de apagar el circuito."

explicacion: |
  Hay que descargarlos con cuidado.
```

### 22 — Antes de energizar

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["buenas_practicas"]

enunciado: "Antes de energizar un circuito conviene..."
tipo: mc
opciones_explicitas:
  - "Revisar polaridades y comprobar que no haya cortocircuito"
  - "Conectarlo directamente"
  - "Quitar el multímetro"
respuesta: "Revisar polaridades y comprobar que no haya cortocircuito"

explicacion: |
  Con el multímetro, entre alimentación y masa.
```

### 23 — Depurar

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "intermedio"
  tags: ["buenas_practicas"]

enunciado: "Si un circuito no funciona, se revisa de forma ordenada..."
tipo: mc
opciones_explicitas:
  - "Alimentación, conexiones, componentes y señales"
  - "Solo los componentes"
  - "Al azar"
respuesta: "Alimentación, conexiones, componentes y señales"

explicacion: |
  De la entrada hacia la salida.
```

### 24 — Polaridad

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["buenas_practicas"]

respuesta: verdadero
tipo: vf

enunciado: "Los diodos, LED y capacitores electrolíticos tienen polaridad que hay que respetar."

explicacion: |
  Conectados al revés pueden no funcionar o dañarse.
```

### 25 — Placa definitiva

```
metadata:
  materia: "electronica"
  tema: "prototipado_protoboard_soldadura_y_seguridad"
  nivel: "basico"
  tags: ["prototipado"]

enunciado: "Una vez verificado el prototipo, la versión definitiva se hace sobre..."
tipo: mc
opciones_explicitas:
  - "Una placa perforada o un circuito impreso"
  - "La misma protoboard"
  - "Un cartón"
respuesta: "Una placa perforada o un circuito impreso"

explicacion: |
  Con los componentes soldados.
```
