# Oficios — Técnico Electromecánico — Mecanizado: fresadora y control numérico CNC (cuestionario, 31 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué gira en la fresadora

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["fresadora"]

tipo: mc
enunciado: "¿Qué elemento gira en una fresadora?"
opciones_explicitas:
  - "La herramienta (la fresa)"
  - "La pieza"
  - "Siempre la mesa completa"
respuesta: "La herramienta (la fresa)"

explicacion: |
  A diferencia del torno, en la fresadora gira la fresa y la pieza se sujeta y se desplaza.
```

### 2 — Ejes de la mesa

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["fresadora", "ejes"]

tipo: mc
enunciado: "En una fresadora vertical, ¿qué eje corresponde al movimiento arriba-abajo?"
opciones_explicitas:
  - "Z"
  - "X"
  - "Y"
respuesta: "Z"

explicacion: |
  X es izquierda-derecha, Y es adelante-atrás y Z es arriba-abajo.
```

### 3 — Fresadora vertical

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["fresadora"]

tipo: mc
enunciado: "En una fresadora vertical, ¿hacia dónde apunta la fresa?"
opciones_explicitas:
  - "Hacia abajo"
  - "Hacia el costado"
  - "Hacia el operario"
respuesta: "Hacia abajo"

explicacion: |
  Es el tipo ideal para ranuras, agujeros y caras planas.
```

### 4 — Fresa para planear

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["herramientas"]

tipo: mc
enunciado: "¿Qué fresa se usa habitualmente para planear una cara ancha?"
opciones_explicitas:
  - "Fresa frontal"
  - "Fresa de disco"
  - "Broca helicoidal"
respuesta: "Fresa frontal"

explicacion: |
  La frontal tiene varios dientes y corta una cara plana de buen ancho.
```

### 5 — Material del filo

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["herramientas"]

tipo: mc
enunciado: "¿Qué ventaja tiene el metal duro frente al acero rápido en una fresa?"
opciones_explicitas:
  - "Aguanta más velocidad y calor"
  - "Es más barato y tolerante a golpes"
  - "No necesita sujeción"
respuesta: "Aguanta más velocidad y calor"

explicacion: |
  El acero rápido es más económico y tolerante; el metal duro permite velocidades mayores.
```

### 6 — Fórmula de vc

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["parametros"]

tipo: completar
enunciado: "La velocidad de corte en fresado se calcula con vc = π × D × n ÷ ___ (D en mm, n en rpm, vc en m/min)."
respuestas_validas:
  - "1000"
  - "1.000"
  - "mil"

explicacion: |
  Dividir por 1000 convierte milímetros por minuto a metros por minuto.
```

### 7 — Revoluciones a partir de la velocidad de corte

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["parametros", "calculo"]

variables:
  D: uno_de([10, 12, 16, 20, 25])
  vc: uno_de([60, 80, 100, 120])

respuesta: redondear(vc * 1000 / (pi * D), 0)
tipo: input
tolerancia_abs: 3

enunciado: "Una fresa de {D} mm de diámetro debe trabajar a una velocidad de corte de {vc} m/min. ¿A cuántas rpm hay que regular el husillo? (redondeá a un número entero)"

pasos:
  - "n = vc × 1000 ÷ (π × D)"

explicacion: |
  Se despeja n de la fórmula de la velocidad de corte.
```

### 8 — Velocidad de corte a partir de las rpm

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["parametros", "calculo"]

variables:
  D: uno_de([8, 10, 16, 20, 32])
  n: uno_de([800, 1000, 1200, 1500, 2000])

respuesta: redondear(pi * D * n / 1000, 1)
tipo: input
tolerancia_abs: 0.3

enunciado: "Una fresa de {D} mm gira a {n} rpm. ¿Cuál es la velocidad de corte, en m/min? (redondeá a un decimal)"

pasos:
  - "vc = π × D × n ÷ 1000"

explicacion: |
  Aplicación directa de la fórmula.
```

### 9 — Avance de la mesa

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["parametros", "calculo"]

variables:
  z: uno_de([2, 3, 4, 6])
  fz: uno_de([0.04, 0.05, 0.08, 0.1])
  n: uno_de([800, 1000, 1200, 1500])

respuesta: redondear(fz * z * n, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "Una fresa de {z} dientes trabaja con un avance de {fz} mm por diente a {n} rpm. ¿Cuál es la velocidad de avance de la mesa, en mm/min?"

pasos:
  - "vf = fz × z × n"

explicacion: |
  La velocidad de avance resulta de multiplicar el avance por diente, la cantidad de dientes y las rpm.
```

### 10 — Tiempo de una pasada

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["parametros", "calculo"]

variables:
  L: uno_de([120, 200, 300, 480])
  vf: uno_de([240, 300, 400, 600])

respuesta: redondear(L / vf, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Para fresar una cara de {L} mm de largo con una velocidad de avance de {vf} mm/min, ¿cuántos minutos dura una pasada? (redondeá a dos decimales, sin contar entrada ni salida)"

pasos:
  - "t = L ÷ vf"

explicacion: |
  El tiempo es la longitud recorrida dividida por la velocidad de avance.
```

### 11 — Más velocidad no siempre es mejor

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["parametros"]

respuesta: verdadero
tipo: vf

enunciado: "Subir la velocidad de corte por encima de lo recomendado puede acortar mucho la vida de la herramienta."

explicacion: |
  Un exceso de velocidad genera calor y desgaste rápido del filo.
```

### 12 — Fresado concordante

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["sentido de corte"]

tipo: mc
enunciado: "En el fresado concordante, ¿cómo entra el filo en la pieza?"
opciones_explicitas:
  - "Con el espesor máximo de viruta, que se reduce hasta cero"
  - "Con viruta casi nula, que va aumentando"
  - "Sin cortar, solo rozando"
respuesta: "Con el espesor máximo de viruta, que se reduce hasta cero"

explicacion: |
  En el convencional ocurre al revés: la viruta empieza casi en cero.
```

### 13 — Máquinas con holgura

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["sentido de corte"]

tipo: mc
enunciado: "En una fresadora manual con holgura en la mesa, ¿qué sentido de corte suele preferirse?"
opciones_explicitas:
  - "Convencional"
  - "Concordante"
  - "Da lo mismo"
respuesta: "Convencional"

explicacion: |
  El concordante puede tirar de la mesa hacia la fresa si hay holgura y provocar golpes.
```

### 14 — Sujeción

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["sujecion"]

tipo: mc
enunciado: "¿Cuál es el medio de sujeción más usado en fresadora para piezas chicas?"
opciones_explicitas:
  - "La morsa"
  - "El plato de tres garras"
  - "Los dedos del operario"
respuesta: "La morsa"

explicacion: |
  Las piezas grandes se fijan con bridas y bulones a la mesa.
```

### 15 — Fresa y morsa

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["sujecion"]

respuesta: verdadero
tipo: vf

enunciado: "La fresa nunca debe tocar la morsa durante el recorrido de corte."

explicacion: |
  Un contacto rompe la herramienta, daña la morsa y es peligroso.
```

### 16 — Qué significa CNC

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["cnc"]

tipo: completar
enunciado: "En una máquina CNC, el movimiento de los ejes lo comanda un ___ en lugar de la mano del operario."
respuestas_validas:
  - "programa"
  - "código"
  - "programa de control"

explicacion: |
  CNC significa control numérico computarizado.
```

### 17 — G00

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["cnc", "codigo g"]

tipo: mc
enunciado: "¿Qué hace la instrucción G00?"
opciones_explicitas:
  - "Movimiento rápido de posicionamiento, sin cortar"
  - "Movimiento recto cortando con avance"
  - "Arco en sentido horario"
respuesta: "Movimiento rápido de posicionamiento, sin cortar"

explicacion: |
  G01 es la interpolación lineal cortando, con avance programado.
```

### 18 — G01

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["cnc", "codigo g"]

tipo: mc
enunciado: "¿Qué instrucción mueve la herramienta en línea recta cortando, con un avance programado?"
opciones_explicitas:
  - "G01"
  - "G00"
  - "M05"
respuesta: "G01"

explicacion: |
  El avance se indica con la letra F.
```

### 19 — Arcos

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["cnc", "codigo g"]

tipo: mc
enunciado: "Según la convención más difundida, ¿qué instrucción genera un arco en sentido horario?"
opciones_explicitas:
  - "G02"
  - "G03"
  - "G01"
respuesta: "G02"

explicacion: |
  G03 es antihorario. Algunos controles difieren: se consulta siempre el manual de la máquina.
```

### 20 — Husillo

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["cnc", "codigo g"]

tipo: mc
enunciado: "¿Qué instrucción detiene el husillo?"
opciones_explicitas:
  - "M05"
  - "M03"
  - "G91"
respuesta: "M05"

explicacion: |
  M03 lo enciende en sentido horario.
```

### 21 — Absoluto o incremental

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["cnc", "codigo g"]

tipo: mc
enunciado: "¿Qué modo programa los movimientos como desplazamientos respecto de la posición actual?"
opciones_explicitas:
  - "G91 (incremental)"
  - "G90 (absoluto)"
  - "G00"
respuesta: "G91 (incremental)"

explicacion: |
  G90 usa coordenadas respecto del origen.
```

### 22 — Posición con coordenadas incrementales

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["cnc", "codigo g"]

variables:
  x0: uno_de([10, 20, 30, 40])
  a: uno_de([25, 35, 50])
  b: uno_de([5, 10, 15])

respuesta: x0 + a - b
tipo: input
tolerancia_abs: 0

enunciado: "Con el control en modo incremental (G91), la herramienta está en X = {x0} mm. Se ejecuta un movimiento de X + {a} mm y luego otro de X - {b} mm. ¿En qué posición X queda, en mm?"

pasos:
  - "Posición final = inicial + a - b"

explicacion: |
  En modo incremental los desplazamientos se suman a la posición actual.
```

### 23 — Tiempo de un movimiento G01

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "avanzado"
  tags: ["cnc", "calculo"]

variables:
  L: uno_de([50, 80, 100, 150])
  F: uno_de([100, 200, 300])

respuesta: redondear(L / F * 60, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Un bloque G01 recorre {L} mm con un avance programado F = {F} mm/min. ¿Cuántos segundos tarda? (redondeá a un decimal)"

pasos:
  - "t = L ÷ F en minutos, por 60 para pasar a segundos"

explicacion: |
  El avance está en mm/min: se divide la longitud por el avance y se pasa a segundos.
```

### 24 — Cero de pieza

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "intermedio"
  tags: ["cnc", "origen"]

tipo: mc
enunciado: "¿Qué es el cero de pieza en un programa CNC?"
opciones_explicitas:
  - "El punto de origen del programa sobre la pieza"
  - "El punto más alto del husillo"
  - "La posición de la parada de emergencia"
respuesta: "El punto de origen del programa sobre la pieza"

explicacion: |
  Se registra en la máquina como una compensación de origen; en muchos controles se usa G54 y siguientes.
```

### 25 — Compensación de herramienta

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "avanzado"
  tags: ["cnc", "herramientas"]

tipo: mc
enunciado: "¿Por qué se cargan las compensaciones de herramienta (largo y diámetro) antes de correr un programa?"
opciones_explicitas:
  - "Porque cada fresa mide distinto y el programa debe corregirse"
  - "Para que la máquina no necesite lubricación"
  - "Para elegir el sentido de giro del husillo"
respuesta: "Porque cada fresa mide distinto y el programa debe corregirse"

explicacion: |
  Una herramienta mal medida arruina la pieza o choca contra ella.
```

### 26 — Simulación

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["cnc", "seguridad"]

tipo: mc
enunciado: "¿Para qué se simula un programa CNC antes de mecanizar?"
opciones_explicitas:
  - "Para ver que el recorrido no choque ni salga de los límites"
  - "Para ahorrar material de la fresa"
  - "Para saltear la medición del cero"
respuesta: "Para ver que el recorrido no choque ni salga de los límites"

explicacion: |
  Después de simular se hace la primera pasada con avance reducido.
```

### 27 — Primera pieza

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "avanzado"
  tags: ["cnc", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "Conviene hacer la primera pasada con el avance reducido y una mano sobre la parada de emergencia."

explicacion: |
  Los errores graves de un programa nuevo se detectan en esa primera pasada.
```

### 28 — Error grave

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "avanzado"
  tags: ["cnc", "seguridad"]

tipo: mc
enunciado: "¿Cuál es un error grave típico en CNC?"
opciones_explicitas:
  - "Un G00 que baja en rápido contra la pieza"
  - "Usar mucho refrigerante"
  - "Simular el programa"
respuesta: "Un G00 que baja en rápido contra la pieza"

explicacion: |
  El rápido no corta a velocidad controlada y puede romper herramienta, pieza o máquina.
```

### 29 — Normativa

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
enunciado: "¿Qué normas generales obligan a proteger las partes móviles de las máquinas en Argentina?"
opciones_explicitas:
  - "La Ley 19.587 y su Decreto Reglamentario 351/79"
  - "La Ley de Contrato de Trabajo exclusivamente"
  - "Solo el reglamento interno de cada taller"
respuesta: "La Ley 19.587 y su Decreto Reglamentario 351/79"

explicacion: |
  Es el marco de higiene y seguridad en el trabajo.
```

### 30 — Virutas

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
enunciado: "¿Cómo se retiran las virutas de una fresadora?"
opciones_explicitas:
  - "Con pincel o gancho, con la máquina detenida"
  - "Con la mano, rápido"
  - "Con un trapo, mientras la fresa gira"
respuesta: "Con pincel o gancho, con la máquina detenida"

explicacion: |
  Las virutas calientes y filosas cortan y pueden quedar atrapadas.
```

### 31 — Guantes

```
metadata:
  materia: "oficios"
  tema: "tecnico_electromecanico_mecanizado_fresadora_y_cnc"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
enunciado: "¿Por qué no se usan guantes cerca del husillo?"
opciones_explicitas:
  - "Porque pueden quedar atrapados por la herramienta que gira"
  - "Porque ensucian la pieza"
  - "Porque la fresa no corta con guantes"
respuesta: "Porque pueden quedar atrapados por la herramienta que gira"

explicacion: |
  Lo mismo vale para pulseras, anillos y cabello suelto.
```
