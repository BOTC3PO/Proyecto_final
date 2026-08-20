# Cívica — Alcoholemia y conducción (cuestionario, 20 preguntas VBLang)

> Tema: `C18c`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Por qué se mide alcohol en sangre y no "estar borracho"

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "basico"
  tags: ["fundamento"]

enunciado: "¿Por qué la ley usa un límite objetivo de gramos de alcohol por litro de sangre, en vez de evaluar si la persona 'está borracha'?"
tipo: mc
opciones_explicitas:
  - "Porque los reflejos y la capacidad de reacción se reducen incluso con niveles bajos, antes de un estado de ebriedad evidente"
  - "Porque no existe forma de medir el alcohol en sangre"
  - "Porque la ley considera irrelevante el efecto del alcohol al conducir"
respuesta: "Porque los reflejos y la capacidad de reacción se reducen incluso con niveles bajos, antes de un estado de ebriedad evidente"

explicacion: |
  El límite objetivo evita depender de una apreciación subjetiva de
  "cuánto se siente" el efecto.
```

### 2 — Unidad de medida del alcohol en sangre

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "basico"
  tags: ["fundamento"]

enunciado: "¿En qué unidad se mide el límite legal de alcohol en sangre?"
tipo: mc
opciones_explicitas:
  - "Gramos de alcohol por litro de sangre (g/l)"
  - "Miligramos por litro de aire"
  - "Porcentaje de volumen corporal"
respuesta: "Gramos de alcohol por litro de sangre (g/l)"

explicacion: |
  El alcoholímetro mide el aire espirado y lo traduce a esta
  equivalencia.
```

### 3 — Ley que regula el límite de alcoholemia

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "intermedio"
  tags: ["marco_normativo"]

enunciado: "¿Qué ley argentina, en su versión original, fija el límite de alcoholemia para conductores?"
tipo: mc
opciones_explicitas:
  - "Ley de Tránsito 24.449"
  - "Ley 26.529"
  - "Ley 26.061"
respuesta: "Ley de Tránsito 24.449"

explicacion: |
  Misma ley que regula las prioridades de paso, ver
  `../prioridades-de-paso/`.
```

### 4 — Límite original para conductores particulares

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "intermedio"
  tags: ["marco_normativo"]

enunciado: "¿Cuál es el límite original de la Ley 24.449 para conductores de vehículos particulares?"
tipo: mc
opciones_explicitas:
  - "0,5 g/l"
  - "0,0 g/l"
  - "1,0 g/l"
respuesta: "0,5 g/l"

explicacion: |
  Límite más estricto para motociclistas y conductores profesionales.
```

### 5 — Qué es la política de "alcohol cero"

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "basico"
  tags: ["marco_normativo"]

enunciado: "¿Qué significa la política de 'alcohol cero' adoptada por algunas jurisdicciones?"
tipo: mc
opciones_explicitas:
  - "Un límite de 0,0 g/l para todos los conductores, sin distinción de tipo de vehículo"
  - "Un límite de 0,5 g/l igual al de la ley original"
  - "La prohibición total de vender alcohol en esa jurisdicción"
respuesta: "Un límite de 0,0 g/l para todos los conductores, sin distinción de tipo de vehículo"

explicacion: |
  Política más estricta que el límite original de 0,5 g/l de la Ley
  24.449.
```

### 6 — Jurisdicciones que adoptaron alcohol cero

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "avanzado"
  tags: ["marco_normativo"]

enunciado: "¿Cuál de estas jurisdicciones NO adoptó la política de alcohol cero, manteniendo el límite de 0,5 g/l para autos particulares?"
tipo: mc
opciones_explicitas:
  - "Ciudad de Buenos Aires, Santa Fe, Mendoza, Misiones, Corrientes y San Juan"
  - "Ninguna, todo el país tiene el mismo límite obligatorio"
  - "Sólo la Patagonia adoptó un límite distinto"
respuesta: "Ciudad de Buenos Aires, Santa Fe, Mendoza, Misiones, Corrientes y San Juan"

explicacion: |
  Estas jurisdicciones mantienen vigente el límite de 0,5 g/l para
  autos particulares, a diferencia de otras que sí adoptaron alcohol
  cero.
```

### 7 — Límite en rutas nacionales

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "intermedio"
  tags: ["marco_normativo"]

enunciado: "¿Cuál es el límite de alcoholemia obligatorio en todas las rutas nacionales de Argentina?"
tipo: mc
opciones_explicitas:
  - "0,0 g/l (alcohol cero), independientemente de la jurisdicción"
  - "0,5 g/l, igual en toda ruta nacional"
  - "No existe ningún límite específico para rutas nacionales"
respuesta: "0,0 g/l (alcohol cero), independientemente de la jurisdicción"

explicacion: |
  Aplica aunque la provincia atravesada mantenga el límite de 0,5 g/l
  para sus calles internas.
```

### 8 — Qué pasa si una provincia tiene 0,5 g/l pero se circula en ruta nacional

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "avanzado"
  tags: ["marco_normativo"]

enunciado: "Si una provincia mantiene el límite de 0,5 g/l, pero se conduce por una ruta nacional que la atraviesa, ¿qué límite aplica?"
tipo: mc
opciones_explicitas:
  - "0,0 g/l, porque las rutas nacionales tienen alcohol cero independientemente del límite provincial"
  - "0,5 g/l, el límite provincial siempre prevalece"
  - "No hay ningún control en rutas nacionales"
respuesta: "0,0 g/l, porque las rutas nacionales tienen alcohol cero independientemente del límite provincial"

explicacion: |
  El límite depende del tipo de vía, no sólo de la jurisdicción.
```

### 9 — Instrumento de medición

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "basico"
  tags: ["mecanismo_de_control"]

enunciado: "¿Con qué instrumento se controla la alcoholemia de un conductor?"
tipo: mc
opciones_explicitas:
  - "Un alcoholímetro (etilómetro)"
  - "Un tensiómetro"
  - "Un radar de velocidad"
respuesta: "Un alcoholímetro (etilómetro)"

explicacion: |
  Mide la concentración de alcohol en el aire espirado y la traduce a
  gramos por litro de sangre.
```

### 10 — Qué mide directamente el alcoholímetro

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "intermedio"
  tags: ["mecanismo_de_control"]

enunciado: "¿Qué mide directamente un alcoholímetro?"
tipo: mc
opciones_explicitas:
  - "La concentración de alcohol en el aire espirado"
  - "La concentración de alcohol directamente en una muestra de sangre"
  - "La velocidad de reacción del conductor"
respuesta: "La concentración de alcohol en el aire espirado"

explicacion: |
  El resultado se traduce después a una equivalencia de gramos por
  litro de sangre.
```

### 11 — Qué sanciones puede generar dar positivo

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "intermedio"
  tags: ["mecanismo_de_control"]

enunciado: "¿Qué tipo de sanciones puede generar dar positivo por encima del límite de alcoholemia?"
tipo: mc
opciones_explicitas:
  - "Multas, retención del vehículo e inhabilitación para conducir"
  - "Ninguna sanción real, es sólo un registro informativo"
  - "Únicamente la pérdida del DNI de forma permanente"
respuesta: "Multas, retención del vehículo e inhabilitación para conducir"

explicacion: |
  Las sanciones concretas varían según la provincia y la gravedad de
  la infracción.
```

### 12 — Por qué las sanciones no tienen un monto único

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "avanzado"
  tags: ["mecanismo_de_control"]

enunciado: "¿Por qué este módulo no da un monto único de multa por dar positivo en alcoholemia?"
tipo: mc
opciones_explicitas:
  - "Porque las sanciones varían según la provincia y la gravedad, por la misma razón de variabilidad jurisdiccional del límite"
  - "Porque no existen sanciones reales en ningún lugar del país"
  - "Porque el monto es siempre exactamente el mismo en toda Argentina"
respuesta: "Porque las sanciones varían según la provincia y la gravedad, por la misma razón de variabilidad jurisdiccional del límite"

explicacion: |
  Mismo criterio que con el límite de g/l: se enseña la estructura, no
  una cifra puntual que cambia según jurisdicción.
```

### 13 — Por qué depende de documentos y trámites

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "intermedio"
  tags: ["fundamento"]

enunciado: "¿Por qué este módulo depende de `../documentos-y-tramites/`?"
tipo: mc
opciones_explicitas:
  - "Porque el control de alcoholemia se hace, en la práctica, junto con el control de la documentación del conductor"
  - "Porque el DNI reemplaza al alcoholímetro"
  - "Porque no tiene relación con ese módulo"
respuesta: "Porque el control de alcoholemia se hace, en la práctica, junto con el control de la documentación del conductor"

explicacion: |
  Mismo criterio que los otros 2 módulos de educación vial.
```

### 14 — Por qué el tema está "en debate legislativo activo"

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "avanzado"
  tags: ["marco_normativo"]

enunciado: "¿Por qué este módulo describe el límite de alcoholemia como un tema 'en debate legislativo activo', en vez de dar un único número?"
tipo: mc
opciones_explicitas:
  - "Porque no hay un único límite vigente en todo el país, depende de jurisdicción y tipo de vía"
  - "Porque el límite de alcoholemia no existe legalmente en Argentina"
  - "Porque el tema no tiene ninguna regulación, cada conductor decide su propio límite"
respuesta: "Porque no hay un único límite vigente en todo el país, depende de jurisdicción y tipo de vía"

explicacion: |
  Se enseña la lógica de la variabilidad, no un número fijo que podría
  quedar desactualizado o ser incorrecto según la jurisdicción.
```

### 15 — Verdadero o falso: el límite es igual en toda Argentina

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "intermedio"
  tags: ["marco_normativo"]

enunciado: "El límite legal de alcoholemia para conducir es exactamente el mismo en todas las jurisdicciones argentinas."
tipo: vf
respuesta: falso

explicacion: |
  Varía según la provincia haya adoptado o no la política de alcohol
  cero, y según el tipo de vía (ruta nacional vs. calle provincial).
```

### 16 — Verdadero o falso: motociclistas tienen el mismo límite que autos

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "intermedio"
  tags: ["marco_normativo"]

enunciado: "Según la Ley 24.449 original, los motociclistas tienen exactamente el mismo límite de alcoholemia que los conductores de autos particulares."
tipo: vf
respuesta: falso

explicacion: |
  El límite es más estricto para motociclistas y conductores
  profesionales que para autos particulares.
```

### 17 — Verdadero o falso: en rutas nacionales rige el límite provincial

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "avanzado"
  tags: ["marco_normativo"]

enunciado: "En las rutas nacionales rige siempre el límite de alcoholemia de la provincia que se está atravesando."
tipo: vf
respuesta: falso

explicacion: |
  Las rutas nacionales tienen alcohol cero obligatorio, sin importar el
  límite provincial.
```

### 18 — Completar: instrumento de control

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "basico"
  tags: ["mecanismo_de_control"]

enunciado: "El instrumento que mide la concentración de alcohol en el aire espirado se llama ______."
tipo: completar
respuestas_validas:
  - "alcoholimetro"
  - "alcoholímetro"
  - "etilometro"
  - "etilómetro"

explicacion: |
  También se lo conoce como etilómetro.
```

### 19 — Completar: límite en rutas nacionales

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "intermedio"
  tags: ["marco_normativo"]

enunciado: "En todas las rutas nacionales de Argentina rige el límite de alcohol ______, sin importar la jurisdicción."
tipo: completar
respuestas_validas:
  - "cero"

explicacion: |
  0,0 g/l obligatorio en rutas nacionales.
```

### 20 — Ordenar: de menor a mayor restricción

```
metadata:
  materia: "civica"
  tema: "alcoholemia_y_conduccion"
  nivel: "avanzado"
  tags: ["sintesis"]

enunciado: "Ordená estas 3 situaciones según el nivel creciente de restricción de alcohol permitido."
tipo: ordenar
opciones_explicitas:
  - "Auto particular en provincia con límite original (0,5 g/l)"
  - "Auto particular en jurisdicción con alcohol cero (0,0 g/l)"
  - "Cualquier conductor en ruta nacional (0,0 g/l obligatorio, sin excepción)"
respuesta_orden: ["Auto particular en provincia con límite original (0,5 g/l)", "Auto particular en jurisdicción con alcohol cero (0,0 g/l)", "Cualquier conductor en ruta nacional (0,0 g/l obligatorio, sin excepción)"]
explicacion: |
  El límite original de 0,5 g/l es el menos restrictivo; el alcohol
  cero jurisdiccional y el de rutas nacionales llegan al mismo número
  pero con distinto alcance (uno es decisión provincial, el otro es
  obligatorio en todo el país en esas vías).
```
