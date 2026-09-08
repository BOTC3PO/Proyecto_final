# Historia Profunda — Tiempo geologico eones eras periodos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Jerarquía del tiempo geológico

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["jerarquia", "escala_temporal"]

tipo: mc
opciones_explicitas: ["Eón > Era > Período > Época", "Época > Período > Era > Eón", "Eón > Período > Era > Época", "Era > Eón > Época > Período"]
respuesta: "Eón > Era > Período > Época"

enunciado: "La escala de tiempo geológico es una estructura jerárquica. ¿Cuál de las siguientes secuencias representa correctamente el orden de mayor a menor duración?"

explicacion: |
  La escala geológica se organiza de lo macro a lo micro: los Eones son los bloques más grandes, que se dividen en Eras, estas en Períodos y estos en Épocas.
```

### 2 — El orden de las unidades

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Eón", "Era", "Período", "Época"]
respuesta_orden: ["Eón", "Era", "Período", "Época"]

enunciado: "Ordena las siguientes unidades de tiempo geológico de la más extensa (mayor duración) a la más breve (menor duración)."

explicacion: |
  La jerarquía correcta es: Eón (la unidad más grande), seguido de la Era, el Período y finalmente la Época.
```

### 3 — Identificación de la unidad menor

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["jerarquia", "terminologia"]

tipo: mc
opciones_explicitas: ["Período", "Época", "Eón", "Era"]
respuesta: "Período"

enunciado: "Si nos encontramos dentro de una Era geológica, la unidad de tiempo inmediatamente más pequeña que ella es un ___."

explicacion: |
  La estructura es: Eón $\rightarrow$ Era $\rightarrow$ Período $\rightarrow$ Época. Por lo tanto, después de una Era sigue un Período.
```

### 4 — Completar la jerarquía

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["completar", "jerarquia"]

tipo: completar
respuestas_validas:
  - "Período"
  - "Época"
respuesta: "Período"

enunciado: "En la jerarquía temporal, un Eón se divide en Eras, y una Era se divide en ___."

explicacion: |
  La división directa de una Era es el Período.
```

### 5 — Relación de escalas

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["logica", "jerarquia"]

tipo: vf

enunciado: "Considerando la jerarquía geológica, un Período es una subdivisión de una Época. ¿Es esto correcto?"

respuesta: falso

explicacion: |
  Es falso. Es al revés: una Época es una subdivisión de un Período. El Período es la unidad mayor.
```

### 6 — El dominio del Precámbrico

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["precambrico", "eones", "geologia"]

respuesta: "88%"
tipo: completar
respuestas_validas:
  - "88%"
  - "ochenta y ocho por ciento"

enunciado: "El Precámbrico, que abarca desde la formación de la Tierra hasta la aparición de organismos complejos, representa aproximadamente el ___ de la historia geológica del planeta."

explicacion: |
  El Precámbrico es un término que agrupa los eones Hadeico, Arcaico y Proterozoico. Aunque constituye la gran mayoría del tiempo terrestre, su registro es escaso debido a la falta de fósiles de partes duras (conchas, huesos) en esa época.
```

### 7 — Composición del Precámbrico

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["eones", "precambrico"]

variables:
  escenario: uno_de([["Hadeico", "formación de la Tierra y bombardeo intenso"], ["Arcaico", "aparición de las primeras células procariontes"], ["Proterozoico", "oxigenación de la atmósfera y células eucariotas"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["formación de la Tierra y bombardeo intenso", "aparición de las primeras células procariontes", "oxigenación de la atmósfera y células eucariotas"]

enunciado: "Si nos situamos en el eón {escenario[0]}, ¿cuál fue el evento característico de ese periodo?"

explicacion: |
  El eón {escenario[0]} se caracteriza por {escenario[1]}.
```

### 8 — Secuencia de los Eones

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["orden_cronologico", "eones"]

respuesta_orden: ["Hadeico", "Arcaico", "Proterozoico"]
tipo: ordenar
opciones_explicitas: ["Hadeico", "Arcaico", "Proterozoico"]

enunciado: "Ordena cronológicamente, desde el más antiguo al más reciente, los tres eones que conforman el Precámbrico:"

explicacion: |
  La secuencia correcta es Hadeico (formación), seguido del Arcaico (vida unicelular) y finalmente el Proterozoico (mayor complejidad y oxígeno).
```

### 9 — El registro fósil precámbrico

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["paleontologia", "precambrico"]

respuesta: "fósiles complejos"
tipo: completar
respuestas_validas:
  - "fósiles complejos"
  - "restos de organismos complejos"

enunciado: "Una de las razones por las cuales el Precámbrico suele ser menos detallado en los libros de texto es la escasez de ___."

explicacion: |
  Durante la mayor parte del Precámbrico, la vida estaba compuesta por organismos microscópicos o blandos que no dejaban huellas fósiles fácilmente preservables, a diferencia de la era Paleozoica en adelante.
```

### 10 — La gran transición química

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["oxigeno", "proterozoico"]

respuesta: "Oxigenación de la atmósfera"
tipo: mc
opciones_explicitas: ["Oxigenación de la atmósfera", "Aparición de la fotosíntesis oxigénica", "Condensación de la corteza terrestre"]

enunciado: "¿Cuál es el evento que constituye el hito fundamental que define al eón Proterozoico?"

explicacion: |
  Aunque la fotosíntesis comenzó antes, la acumulación masiva de oxígeno (Gran Evento de Oxidación) es el rasgo distintivo del Proterozoico.
```

### 11 — El gran límite de la vida

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["extincion", "permo_trias"]

respuesta: "extincion_masiva"
tipo: "mc"
opciones_explicitas: ["cambio_climatico", "extincion_masiva", "formacion_continentes", "tectonica_de_placas"]

enunciado: "Los límites entre eras y periodos geológicos suelen estar marcados por eventos de ___ que provocan cambios drásticos en el registro fósil."

explicacion: |
  La mayoría de los límites geológicos importantes (como el del Pérmico-Triásico) se definen por la desaparición repentina de grandes grupos de organismos en el registro fósil.
```

### 12 — El fin de los dinosaurios

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["cretacico_paleogeno", "asteroide"]

variables:
  escenario: uno_de([["Cretácico-Paleógeno", "impacto de asteroide"], ["Pérmico-Triásico", "erupciones masivas"]])

respuesta: escenario[1]
tipo: "completar"
respuestas_validas:
  - "impacto de asteroide"
  - "erupciones masivas"

enunciado: "El límite entre el periodo {escenario[0]} y el Paleógeno se asocia comúnmente con un ___."

explicacion: |
  El impacto del asteroide Chicxulub causó la extinción masiva que terminó con la era de los dinosaurios al final del Cretácico.
```

### 13 — Secuencia de la Era de los Reptiles

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["ordenar", "era_mesozoica"]

tipo: ordenar
opciones_explicitas: ["Triásico", "Jurásico", "Cretácico"]
respuesta_orden: ["Triásico", "Jurásico", "Cretácico"]

enunciado: "Ordena cronológicamente los periodos que conforman la Era Mesozoica, desde el más antiguo al más reciente."

explicacion: |
  La Era Mesozoica se divide en los periodos Triásico, Jurásico y Cretácico.
```

### 14 — El gran evento del Pérmico

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["permo_trias", "extincion"]

respuesta: "Triásico"
tipo: "completar"
respuestas_validas:
  - "Triásico"
  - "Jurásico"
  - "Cretácico"

enunciado: "La mayor extinción masiva de la historia de la Tierra ocurrió al final del periodo Pérmico, marcando el inicio del periodo ___."

explicacion: |
  La extinción del Pérmico-Triásico es conocida como 'La Gran Mortandad' y dio inicio a la era de los dinosaurios.
```

### 15 — Marcadores del registro fósil

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["geologia", "fosil"]

respuesta: verdadero
tipo: vf

enunciado: "Un cambio abrupto en la abundancia de fósiles en un estrato suele indicar que se está cruzando un límite de un periodo o era geológica. ¿Es esto correcto?"

explicacion: |
  Los límites de las unidades geológicas se definen precisamente por estos cambios abruptos en la fauna y flora fósil, muchas veces asociados a eventos de extinción masiva.
```

### 16 — El inicio del Fanerozoico

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["paleozoico", "fanerozoico"]

tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "El eón Fanerozoico se divide en tres eras principales. ¿Cuál es la primera era de este eón, caracterizada por la 'explosión de vida' en los mares?"

respuesta: "Paleozoico"

explicacion: |
  El Fanerozoico comenzó hace unos 541 millones de años con la era Paleozoica, donde la vida diversificó su complejidad de forma masiva.
```

### 17 — La era de los reptiles

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["mesozoico", "dinosaurios"]

tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "La era conocida como la 'Edad de los Reptiles' o de los dinosaurios es el ________."

respuesta: "Mesozoico"

explicacion: |
  El Mesozoico es la era intermedia del Fanerozoico, donde predominaron los dinosaurios y los primeros mamíferos.
```

### 18 — Secuencia de eras

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["orden_cronologico", "fanerozoico"]

tipo: ordenar
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "Ordena cronológicamente las tres eras del eón Fanerozoico, desde la más antigua a la más reciente:"

respuesta_orden: ["Paleozoico", "Mesozoico", "Cenozoico"]

explicacion: |
  La secuencia correcta es Paleozoico (vida antigua), Mesozoico (vida media) y Cenozoico (vida reciente).
```

### 19 — La era actual

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["cenozoico", "actualidad"]

tipo: completar
respuestas_validas:
  - "Cenozoico"

enunciado: "La era geológica en la que vivimos actualmente, marcada por la dominancia de los mamíferos, es el ________."

respuesta: "Cenozoico"

explicacion: |
  El Cenozoico comenzó tras la extinción masiva al final del Mesozoico y es la era actual.
```

### 20 — Identificación de eras

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["fanerozoico", "clasificacion"]

tipo: mc
opciones_explicitas: ["Mesozoico", "Paleozoico", "Cenozoico"]

enunciado: "Si estamos hablando de la era que precede al Cenozoico, ¿a qué era nos referimos?"

respuesta: "Mesozoico"

explicacion: |
  El Cenozoico es la era actual; la era inmediatamente anterior fue el Mesozoico.
```

### 21 — La explosión de la vida

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["paleontologia", "cambrian"]

variables:
  datos: [["Explosión Cámbrica", "Paleozoico"], ["Extinción masiva del Permo-Triásico", "Mesozoico"], ["Aparición de los mamíferos", "Cenozoico"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "El evento conocido como la {datos[idx][0]} marcó un hito evolutivo fundamental. ¿A qué era geológica pertenece este evento?"

explicacion: |
  El evento {datos[idx][0]} ocurrió durante la era {datos[idx][1]}.
```

### 22 — El reinado de los dinosaurios

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["dinosaurios", "mesozoico"]

variables:
  datos: [["dominio de los dinosaurios", "Mesozoico"], ["aparición de las plantas terrestres", "Paleozoico"], ["formación de la Luna", "Hadeano"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Mesozoico"
  - "Paleozoico"
  - "Hadeano"

enunciado: "El periodo caracterizado por el {datos[idx][0]} se sitúa en la era ___."

explicacion: |
  La era correspondiente al {datos[idx][0]} es la era {datos[idx][1]}.
```

### 23 — Secuencia de Eras

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["cronologia", "geologia"]

tipo: ordenar
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]
respuesta_orden: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "Ordena las siguientes eras desde la más antigua a la más reciente según la cronología geológica estándar."

explicacion: |
  El orden correcto de las eras es: Paleozoico, Mesozoico y Cenozoico.
```

### 24 — El origen de la vida

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["precambrico", "vida"]

variables:
  datos: [["aparición de las primeras células procariotas", "Precámbrico"], ["aparición de los primeros animales complejos", "Paleozoico"], ["extinción de los dinosaurios", "Mesozoico"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Precámbrico", "Paleozoico", "Mesozoico"]

enunciado: "La {datos[idx][0]} tuvo lugar durante el eón ___."

explicacion: |
  La {datos[idx][0]} es un evento característico del eón {datos[idx][1]}.
```

### 25 — El auge de los mamíferos

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["mamiferos", "cenozoico"]

variables:
  datos: [["dominio de los mamíferos", "Cenozoico"], ["dominio de los reptiles", "Mesozoico"], ["dominio de los peces", "Paleozoico"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar

enunciado: "El {datos[idx][0]} es un evento que define la era ___."

explicacion: |
  La era correcta es la {datos[idx][1]}.
```
