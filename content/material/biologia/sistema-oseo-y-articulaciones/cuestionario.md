# Biología — Sistema óseo y articulaciones (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Cuántos huesos tiene un adulto

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "basico"
  tags: ["cantidad"]

tipo: mc
enunciado: "¿Cuántos huesos tiene el esqueleto de un adulto?"
opciones_explicitas:
  - "206"
  - "150"
  - "300"
  - "412"
respuesta: "206"

explicacion: |
  Un recién nacido tiene más, alrededor de 300, porque varios se fusionan con el crecimiento.
```

### 2 — Bebés y huesos

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "basico"
  tags: ["cantidad"]

tipo: vf
enunciado: "Un recién nacido tiene más huesos que un adulto."
respuesta: verdadero

explicacion: |
  Muchos huesos del bebé se fusionan y el cartílago se transforma en hueso durante el crecimiento.
```

### 3 — Función de protección

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "basico"
  tags: ["funciones"]

tipo: mc
enunciado: "¿Qué órgano protege el cráneo?"
opciones_explicitas:
  - "El encéfalo"
  - "El corazón"
  - "Los pulmones"
  - "El hígado"
respuesta: "El encéfalo"

explicacion: |
  Las costillas protegen el corazón y los pulmones.
```

### 4 — Producción de sangre

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "basico"
  tags: ["funciones"]

tipo: mc
enunciado: "¿Dónde se fabrican los glóbulos rojos?"
opciones_explicitas:
  - "En la médula ósea"
  - "En el estómago"
  - "En el riñón"
  - "En el intestino delgado"
respuesta: "En la médula ósea"

explicacion: |
  También allí se producen los glóbulos blancos y las plaquetas.
```

### 5 — Mineral de reserva

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "basico"
  tags: ["funciones"]

tipo: completar
enunciado: "Los huesos almacenan minerales como el fósforo y el ___."
respuestas_validas:
  - "calcio"
respuesta: "calcio"

explicacion: |
  El calcio también es necesario para la contracción muscular y la transmisión nerviosa.
```

### 6 — Huesos como palancas

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "basico"
  tags: ["funciones"]

tipo: mc
enunciado: "¿Qué función cumplen los huesos junto con los músculos?"
opciones_explicitas:
  - "Funcionan como palancas para el movimiento"
  - "Digieren los alimentos"
  - "Filtran la sangre"
  - "Producen hormonas digestivas"
respuesta: "Funcionan como palancas para el movimiento"

explicacion: |
  Los músculos tiran de los huesos a través de los tendones.
```

### 7 — Esqueleto axial

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "basico"
  tags: ["regiones"]

tipo: mc
enunciado: "¿Cuál de estas estructuras pertenece al esqueleto axial?"
opciones_explicitas:
  - "La columna vertebral"
  - "El fémur"
  - "El húmero"
  - "La pelvis"
respuesta: "La columna vertebral"

explicacion: |
  El axial incluye cráneo, columna y caja torácica.
```

### 8 — Esqueleto apendicular

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "basico"
  tags: ["regiones"]

tipo: mc
enunciado: "¿Qué huesos forman el esqueleto apendicular?"
opciones_explicitas:
  - "Los de los miembros y las cinturas que los unen al tronco"
  - "El cráneo y las costillas"
  - "Solo las vértebras"
  - "Solo los huesos de la cara"
respuesta: "Los de los miembros y las cinturas que los unen al tronco"

explicacion: |
  Son 126 huesos en el adulto.
```

### 9 — Huesos del esqueleto

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  axial: 80
  apendicular: 126

tipo: input
respuesta: axial + apendicular
tolerancia_abs: 0.01
enunciado: "Si el esqueleto axial tiene {axial} huesos y el apendicular {apendicular}, ¿cuántos huesos tiene el esqueleto de un adulto en total?"

pasos:
  - "Total = axial + apendicular"

explicacion: |
  80 + 126 = 206.
```

### 10 — Vértebras cervicales

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "intermedio"
  tags: ["columna"]

tipo: mc
enunciado: "¿Cuántas vértebras cervicales hay en la columna?"
opciones_explicitas:
  - "7"
  - "12"
  - "5"
  - "4"
respuesta: "7"

explicacion: |
  Además hay 12 torácicas y 5 lumbares.
```

### 11 — Vértebras móviles

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  cervicales: 7
  toracicas: 12
  lumbares: 5

tipo: input
respuesta: cervicales + toracicas + lumbares
tolerancia_abs: 0.01
enunciado: "Una columna tiene {cervicales} vértebras cervicales, {toracicas} torácicas y {lumbares} lumbares. ¿Cuántas vértebras sueltas hay sin contar el sacro ni el cóccix?"

pasos:
  - "Se suman las tres regiones"

explicacion: |
  7 + 12 + 5 = 24.
```

### 12 — Hueso largo

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "intermedio"
  tags: ["clasificacion"]

tipo: mc
enunciado: "¿Cuál de estos huesos es un hueso largo?"
opciones_explicitas:
  - "El fémur"
  - "Una vértebra"
  - "El esternón"
  - "Un hueso de la muñeca"
respuesta: "El fémur"

explicacion: |
  Las vértebras son irregulares, el esternón es plano y los de la muñeca son cortos.
```

### 13 — Hueso compacto y esponjoso

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "intermedio"
  tags: ["estructura"]

tipo: mc
enunciado: "¿Qué característica tiene el hueso esponjoso?"
opciones_explicitas:
  - "Tiene espacios internos que lo hacen liviano y resistente"
  - "Es la capa más externa y totalmente maciza"
  - "Está formado solo por cartílago"
  - "No tiene células"
respuesta: "Tiene espacios internos que lo hacen liviano y resistente"

explicacion: |
  El hueso compacto es la capa externa, dura y densa.
```

### 14 — Membrana del hueso

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "intermedio"
  tags: ["estructura"]

tipo: completar
enunciado: "La membrana con vasos y nervios que recubre el hueso se llama ___."
respuestas_validas:
  - "periostio"
respuesta: "periostio"

explicacion: |
  Participa en la nutrición y en la reparación del hueso.
```

### 15 — Osteoblastos

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "intermedio"
  tags: ["celulas"]

tipo: mc
enunciado: "¿Qué células forman hueso nuevo?"
opciones_explicitas:
  - "Los osteoblastos"
  - "Los osteoclastos"
  - "Los glóbulos rojos"
  - "Las neuronas"
respuesta: "Los osteoblastos"

explicacion: |
  Los osteoclastos degradan hueso; los osteocitos lo mantienen.
```

### 16 — Osteoclastos

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "intermedio"
  tags: ["celulas"]

tipo: mc
enunciado: "¿Qué función tienen los osteoclastos?"
opciones_explicitas:
  - "Degradar el tejido óseo"
  - "Fabricar glóbulos rojos"
  - "Lubricar la articulación"
  - "Unir el músculo con el hueso"
respuesta: "Degradar el tejido óseo"

explicacion: |
  Junto con los osteoblastos permiten la remodelación.
```

### 17 — Hueso vivo

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "intermedio"
  tags: ["remodelacion"]

tipo: vf
enunciado: "El hueso es un tejido vivo que se remodela durante toda la vida."
respuesta: verdadero

explicacion: |
  Se forma y se degrada de manera continua y se repara tras una fractura.
```

### 18 — Clasificación de articulaciones

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "intermedio"
  tags: ["articulaciones"]

tipo: mc
enunciado: "¿Cuál es un ejemplo de articulación sinovial?"
opciones_explicitas:
  - "La rodilla"
  - "Las suturas del cráneo"
  - "El disco entre dos vértebras"
  - "El esternón"
respuesta: "La rodilla"

explicacion: |
  Las sinoviales son las más móviles y tienen líquido sinovial.
```

### 19 — Articulaciones fibrosas

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "avanzado"
  tags: ["articulaciones"]

tipo: mc
enunciado: "Las suturas entre los huesos del cráneo del adulto son articulaciones..."
opciones_explicitas:
  - "Fibrosas, casi sin movimiento"
  - "Sinoviales muy móviles"
  - "De la cadera"
  - "Cartilaginosas entre vértebras"
respuesta: "Fibrosas, casi sin movimiento"

explicacion: |
  En el bebé son parcialmente móviles.
```

### 20 — Ligamentos y tendones

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "avanzado"
  tags: ["articulaciones"]

tipo: mc
enunciado: "¿Qué une un tendón?"
opciones_explicitas:
  - "Un músculo con un hueso"
  - "Un hueso con otro hueso"
  - "Dos músculos entre sí"
  - "Una vértebra con otra"
respuesta: "Un músculo con un hueso"

explicacion: |
  Los ligamentos unen hueso con hueso.
```

### 21 — Esguince

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "avanzado"
  tags: ["lesiones"]

tipo: mc
enunciado: "¿Qué es un esguince?"
opciones_explicitas:
  - "Una lesión de los ligamentos de una articulación"
  - "La rotura de un hueso en dos partes"
  - "La pérdida de masa muscular"
  - "La salida de un hueso de su lugar"
respuesta: "Una lesión de los ligamentos de una articulación"

explicacion: |
  La salida de un hueso de su lugar es una luxación.
```

### 22 — Cuidado de los huesos

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "avanzado"
  tags: ["salud"]

tipo: mc
enunciado: "¿Qué hábito ayuda a tener huesos más sanos?"
opciones_explicitas:
  - "La actividad física con carga y una alimentación con calcio"
  - "Evitar siempre el movimiento"
  - "No exponerse nunca a la luz solar"
  - "Fumar con regularidad"
respuesta: "La actividad física con carga y una alimentación con calcio"

explicacion: |
  La vitamina D se fabrica con exposición moderada al sol.
```

### 23 — Golpe fuerte

```
metadata:
  materia: "biologia"
  tema: "sistema_oseo_y_articulaciones"
  nivel: "avanzado"
  tags: ["salud"]

tipo: mc
enunciado: "Después de un golpe con dolor intenso, deformidad e imposibilidad de mover una parte del cuerpo, ¿qué corresponde?"
opciones_explicitas:
  - "Inmovilizar y consultar de inmediato a un servicio de salud"
  - "Forzar el movimiento para comprobar"
  - "Esperar varios días"
  - "Aplicar cualquier ungüento y seguir con la actividad"
respuesta: "Inmovilizar y consultar de inmediato a un servicio de salud"

explicacion: |
  Pueden ser signos de fractura.
```
