# Química — Pilas y celdas galvánicas (cuestionario, 20 preguntas VBLang)

> Tema: `QX`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma, en paralelo) y
> corregido a mano. Sin bugs funcionales esta tanda.

---

### 1 — Funcionamiento de la pila

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["redox", "espontaneidad"]

respuesta: verdadero
tipo: vf

enunciado: "Una pila aprovecha una reacción redox espontánea para generar corriente eléctrica."

explicacion: |
  La energía liberada por la reacción espontánea desplaza electrones por un circuito externo.
```

### 2 — Disposición de los procesos redox

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electrodo", "separacion"]

respuesta: falso
tipo: vf

enunciado: "En una pila, los procesos de oxidación y reducción ocurren mezclados en el mismo lugar, sin separación física."

explicacion: |
  Falso. Se separan físicamente en ánodo (oxidación) y cátodo (reducción) para que los electrones tengan que pasar por un circuito.
```

### 3 — Reacción directa vs. celda galvánica

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "intermedio"
  tags: ["energia", "calor"]

respuesta: verdadero
tipo: vf

enunciado: "Si se mezclan directamente el agente reductor y el oxidante sin una celda de por medio, la energía se libera principalmente como calor, no como electricidad útil."

explicacion: |
  Sin un camino externo para los electrones, la energía se disipa como calor.
```

### 4 — Terminología de la celda

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["nomenclatura"]

respuesta: "galvanica"
tipo: completar
respuestas_validas:
  - "galvanica"
  - "galvánica"
  - "voltaica"

enunciado: "Otro nombre para una pila es celda ___."

explicacion: |
  Celda galvánica o voltaica: convierte energía química en eléctrica mediante una reacción espontánea.
```

### 5 — Proceso en el ánodo

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electroquimica", "anodo"]

respuesta: "oxidacion"
tipo: mc
opciones_explicitas: ["oxidacion", "reduccion", "ninguna reaccion", "ambas"]

enunciado: "En el ánodo de una celda galvánica ocurre la..."

explicacion: |
  En el ánodo ocurre siempre la oxidación.
```

### 6 — Proceso en el cátodo

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electroquimica", "catodo"]

respuesta: "reduccion"
tipo: mc
opciones_explicitas: ["reduccion", "oxidacion", "ninguna reaccion", "ambas"]

enunciado: "En el cátodo de una celda galvánica ocurre la..."

explicacion: |
  En el cátodo ocurre siempre la reducción.
```

### 7 — Polaridad del ánodo

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["polaridad", "anodo"]

respuesta: verdadero
tipo: vf

enunciado: "En una pila galvánica, el ánodo es el polo negativo."

explicacion: |
  El ánodo libera electrones (fuente de electrones): es el polo negativo.
```

### 8 — Polaridad del cátodo

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["polaridad", "catodo"]

respuesta: verdadero
tipo: vf

enunciado: "En una pila galvánica, el cátodo es el polo positivo."

explicacion: |
  El cátodo recibe electrones (los consume en la reducción): es el polo positivo.
```

### 9 — Transferencia de electrones en el ánodo

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electrones", "anodo"]

respuesta: falso
tipo: vf

enunciado: "En el ánodo, el electrodo gana electrones."

explicacion: |
  Falso. En el ánodo el electrodo libera (pierde) electrones — es donde ocurre la oxidación.
```

### 10 — Función del puente salino

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["puente_salino"]

respuesta: verdadero
tipo: vf

enunciado: "El puente salino permite el paso de iones para mantener la neutralidad eléctrica de cada solución."

explicacion: |
  Evita la acumulación de carga que frenaría la reacción, dejando pasar iones entre las semiceldas.
```

### 11 — Consecuencia de la falta de puente salino

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "intermedio"
  tags: ["puente_salino"]

respuesta: verdadero
tipo: vf

enunciado: "Si se retira el puente salino de una pila, la reacción se detiene porque las soluciones acumulan cargas desbalanceadas."

explicacion: |
  Sin el flujo de iones, se genera un potencial opuesto que frena el paso de electrones.
```

### 12 — Dirección de los electrones (circuito externo)

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electrones"]

respuesta: verdadero
tipo: vf

enunciado: "En una celda galvánica, los electrones viajan desde el ánodo hacia el cátodo a través del cable externo."

explicacion: |
  El ánodo libera electrones, el cátodo los consume: fluyen ánodo→cátodo por el cable.
```

### 13 — Medio de transporte de electrones (error común)

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "intermedio"
  tags: ["electrones", "puente_salino"]

respuesta: falso
tipo: vf

enunciado: "Los electrones viajan del cátodo al ánodo a través del puente salino."

explicacion: |
  Falso, doble error: los electrones van por el cable (no el puente salino, que es sólo para iones), y en la dirección ánodo→cátodo.
```

### 14 — Oxidación en la pila de Daniell

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["redox", "anodo", "daniell"]

respuesta: verdadero
tipo: vf

enunciado: "En la pila de Daniell, el zinc metálico se disuelve como Zn2+ en el ánodo."

explicacion: |
  Zn(s) → Zn2+(ac) + 2e−.
```

### 15 — Reducción en la pila de Daniell

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["redox", "catodo", "daniell"]

respuesta: verdadero
tipo: vf

enunciado: "En la pila de Daniell, se deposita cobre metálico nuevo en el cátodo."

explicacion: |
  Cu2+(ac) + 2e− → Cu(s).
```

### 16 — Identificación del ánodo en Daniell

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electrodos", "daniell"]

respuesta: "Zn"
tipo: mc
opciones_explicitas: ["Zn", "Cu", "ambos", "ninguno"]

enunciado: "En la pila de Daniell, ¿cuál electrodo es el ánodo?"

explicacion: |
  El Zn se oxida: es el ánodo.
```

### 17 — Identificación del cátodo en Daniell

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "basico"
  tags: ["electrodos", "daniell"]

respuesta: "Cu"
tipo: mc
opciones_explicitas: ["Cu", "Zn", "ambos", "ninguno"]

enunciado: "En la pila de Daniell, ¿cuál electrodo es el cátodo?"

explicacion: |
  El Cu2+ se reduce sobre el electrodo de cobre: es el cátodo.
```

### 18 — Cálculo de electrones transferidos

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "intermedio"
  tags: ["estequiometria", "electrones"]

variables:
  electrones_por_reaccion: 2
  moles_zn: uno_de([1, 2, 3])

respuesta: moles_zn * electrones_por_reaccion
tipo: input
tolerancia_abs: 0.01

enunciado: "Si reaccionan {moles_zn} moles de Zn, ¿cuántos moles de electrones se liberan en total?"

pasos:
  - "Zn → Zn2+ + 2e−"

explicacion: |
  {moles_zn} × 2 moles de electrones.
```

### 19 — Comparación con la electrólisis

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "avanzado"
  tags: ["comparacion", "electrolisis"]

respuesta: falso
tipo: vf

enunciado: "Al igual que en la electrólisis, en una pila hace falta aportar energía eléctrica externa para que la reacción ocurra."

explicacion: |
  Falso. En una pila la reacción es espontánea (produce energía); en la electrólisis (ver ../electrolisis/) hace falta aportar energía externa porque la reacción no es espontánea.
```

### 20 — Vida útil de una pila

```
metadata:
  materia: "quimica"
  tema: "pilas_celdas_galvanicas"
  nivel: "intermedio"
  tags: ["aplicacion", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Una pila deja de funcionar cuando se agota alguno de los reactivos de su reacción redox (por ejemplo, se consume todo el metal del ánodo)."

explicacion: |
  Correcto. Sin reactivo disponible para oxidarse o reducirse, la reacción se detiene y la pila ya no genera corriente.
```
