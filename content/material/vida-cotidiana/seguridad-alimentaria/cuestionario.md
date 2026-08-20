# Vida Cotidiana — Seguridad alimentaria (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Contenido mayormente
> conceptual — predominan `vf` y `mc`.

---

### 1 — Qué es la zona de peligro

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "basico"
  tags: ["seguridad_alimentaria", "vocabulario"]

enunciado: "¿Qué es la \"zona de peligro\" en seguridad alimentaria?"
tipo: mc
opciones_explicitas:
  - "El rango de temperatura (5°C-60°C) donde las bacterias patógenas se multiplican más rápido"
  - "La parte de la cocina donde se guardan los cuchillos"
  - "El tiempo máximo que puede durar un alimento en el freezer"
respuesta: "El rango de temperatura (5°C-60°C) donde las bacterias patógenas se multiplican más rápido"

explicacion: |
  Es un concepto de temperatura, no de espacio ni de tiempo de
  almacenamiento.
```

### 2 — El rango es 5°C a 60°C

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "basico"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La zona de peligro de los alimentos va de 5°C a 60°C."

explicacion: |
  Fuera de ese rango (más frío o más caliente), las bacterias se
  multiplican mucho más lento o directamente mueren.
```

### 3 — Las bacterias se multiplican más rápido ahí

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "basico"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dentro de la zona de peligro, las bacterias patógenas (como Salmonella o E. coli) se multiplican más rápido que a otras temperaturas."

explicacion: |
  Es justamente lo que la hace peligrosa: es el rango donde más crecen.
```

### 4 — Pueden duplicarse cada 20 minutos

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En condiciones favorables dentro de la zona de peligro, las bacterias pueden duplicarse en apenas 20 minutos."

explicacion: |
  Es un crecimiento muy rápido: en pocas horas, una cantidad chica de
  bacterias puede volverse una cantidad peligrosa.
```

### 5 — El frío no elimina las bacterias

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Por debajo de 5°C, el frío frena mucho el crecimiento bacteriano, pero no elimina las bacterias que ya están presentes."

explicacion: |
  Por eso refrigerar retrasa que un alimento se eche a perder, sin
  hacerlo seguro para siempre.
```

### 6 — El calor mata bacterias

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Por encima de 60°C, y sobre todo a partir de 65°C, el calor empieza a matar bacterias."

explicacion: |
  Es la razón por la que cocinar bien un alimento (o mantenerlo bien
  caliente, no tibio) lo hace más seguro.
```

### 7 — La regla de las dos horas

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "vocabulario"]

enunciado: "Según la regla práctica estándar, ¿cuánto tiempo acumulado como máximo debería quedar un alimento perecedero dentro de la zona de peligro?"
tipo: mc
opciones_explicitas:
  - "2 horas"
  - "30 minutos"
  - "12 horas"
respuesta: "2 horas"

explicacion: |
  Pasado ese límite, conviene refrigerar, recalentar bien o descartar el
  alimento.
```

### 8 — No dejar comida perecedera más de 2 horas

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "basico"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un alimento perecedero no debería quedarse dentro de la zona de peligro por más de 2 horas acumuladas."

explicacion: |
  Es una regla práctica para limitar el tiempo en que las bacterias
  tienen condiciones ideales para multiplicarse.
```

### 9 — Verificar si se superó el límite de tiempo

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "problema"]

variables:
  minutos_fuera: random(30, 200)

respuesta: (minutos_fuera > 120)
tipo: vf

enunciado: "Una comida recién cocinada quedó {minutos_fuera} minutos sobre la mesada, sin refrigerar. ¿Superó el límite de las 2 horas dentro de la zona de peligro?"

explicacion: |
  2 horas equivalen a 120 minutos — hay que comparar contra ese límite.
```

### 10 — Qué es la contaminación cruzada

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "basico"
  tags: ["seguridad_alimentaria", "vocabulario"]

enunciado: "¿Qué es la contaminación cruzada?"
tipo: mc
opciones_explicitas:
  - "La transferencia de agentes contaminantes de un alimento contaminado a otro que no lo está"
  - "El proceso de cocinar dos alimentos al mismo tiempo en el horno"
  - "Mezclar ingredientes de distintos platos en la misma olla"
respuesta: "La transferencia de agentes contaminantes de un alimento contaminado a otro que no lo está"

explicacion: |
  Es la definición que usa la OMS para este concepto de seguridad
  alimentaria.
```

### 11 — Directa o indirecta

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La contaminación cruzada puede ser directa (contacto directo entre alimentos) o indirecta (a través de un intermediario, como manos o utensilios)."

explicacion: |
  Son las dos formas en que un contaminante puede pasar de un alimento a
  otro.
```

### 12 — Ejemplo de contaminación cruzada directa

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo de contaminación cruzada DIRECTA?"
tipo: mc
opciones_explicitas:
  - "Carne cruda apoyada directamente sobre una ensalada ya lista para comer"
  - "Usar el mismo cuchillo para cortar pollo crudo y después una fruta, sin lavarlo"
  - "No lavarse las manos después de tocar carne cruda"
respuesta: "Carne cruda apoyada directamente sobre una ensalada ya lista para comer"

explicacion: |
  Es directa porque los dos alimentos se tocan entre sí, sin ningún
  intermediario de por medio.
```

### 13 — Ejemplo de contaminación cruzada indirecta

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo de contaminación cruzada INDIRECTA?"
tipo: mc
opciones_explicitas:
  - "Usar la misma tabla para cortar pollo crudo y después verdura, sin lavarla entre medio"
  - "Servir pollo crudo directamente sobre una ensalada"
  - "Dejar dos alimentos crudos distintos tocándose entre sí en la heladera"
respuesta: "Usar la misma tabla para cortar pollo crudo y después verdura, sin lavarla entre medio"

explicacion: |
  Es indirecta porque el contaminante pasa a través de un intermediario
  (la tabla), no por contacto directo entre los dos alimentos.
```

### 14 — Riesgo de no lavar la tabla entre usos

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "basico"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Usar la misma tabla para cortar carne cruda y después verdura, sin lavarla entre medio, es un riesgo real de contaminación cruzada indirecta."

explicacion: |
  La tabla actúa de intermediario entre los dos alimentos.
```

### 15 — Lavarse las manos reduce el riesgo

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "basico"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Lavarse las manos después de manipular alimentos crudos, antes de tocar alimentos ya listos para comer, reduce el riesgo de contaminación cruzada."

explicacion: |
  Las manos son uno de los intermediarios más comunes de contaminación
  cruzada indirecta.
```

### 16 — Separar crudos de cocidos en la heladera

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "basico"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Guardar los alimentos crudos separados de los alimentos ya cocidos en la heladera reduce el riesgo de contaminación cruzada."

explicacion: |
  Evita que un líquido o resto de un alimento crudo termine en contacto
  con uno que ya está listo para comer.
```

### 17 — Una olla grande tarda más en enfriarse

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "avanzado"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una olla grande de comida tarda más en enfriarse que una porción chica, así que puede pasar más tiempo dentro de la zona de peligro si no se toman medidas para enfriarla más rápido."

explicacion: |
  Es la misma idea de que el tiempo de cocción (o enfriado) no escala
  linealmente con la cantidad, ya vista al escalar una receta.
```

### 18 — Repartir en recipientes chicos para enfriar más rápido

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Repartir una olla grande de comida recién cocinada en varios recipientes chicos ayuda a que se enfríe más rápido, reduciendo el tiempo dentro de la zona de peligro."

explicacion: |
  Más superficie expuesta en relación al volumen ayuda a que el calor se
  disipe más rápido.
```

### 19 — Ordenar temperaturas por seguridad

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "basico"
  tags: ["seguridad_alimentaria", "orden"]

tipo: ordenar
enunciado: "Ordená estas temperaturas de un alimento de más segura a menos segura (de menor a mayor riesgo de crecimiento bacteriano)."
opciones_explicitas:
  - "30°C (dentro de la zona de peligro)"
  - "2°C (heladera)"
  - "70°C (recién cocinado, muy caliente)"
respuesta_orden: ["2°C (heladera)", "70°C (recién cocinado, muy caliente)", "30°C (dentro de la zona de peligro)"]

explicacion: |
  Frío y muy caliente son las opciones más seguras; el rango intermedio
  (la zona de peligro) es donde más rápido crecen las bacterias.
```

### 20 — Verificar un escenario de seguridad alimentaria

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "intermedio"
  tags: ["seguridad_alimentaria", "verificacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto dejar una olla de comida recién cocinada sobre la mesada, a temperatura ambiente, durante 5 horas antes de guardarla en la heladera?"

explicacion: |
  5 horas superan ampliamente el límite recomendado de 2 horas dentro de
  la zona de peligro.
```

### 21 — No es sólo cocinar bien

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "basico"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La seguridad alimentaria no depende sólo de cocinar bien un alimento: también depende de cómo se lo maneja antes y después de cocinarlo (temperatura, tiempo, contacto entre alimentos)."

explicacion: |
  Un alimento bien cocinado igual puede volverse riesgoso si después se
  maneja mal (mucho tiempo en la zona de peligro, contaminación
  cruzada).
```

### 22 — Seguridad alimentaria (cierre)

```
metadata:
  materia: "vida-cotidiana"
  tema: "seguridad_alimentaria"
  nivel: "basico"
  tags: ["seguridad_alimentaria", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La zona de peligro (5°C-60°C) es donde más rápido crecen las bacterias, y la contaminación cruzada es cómo un alimento contaminado transfiere ese riesgo a otro — dos cuidados distintos, pero parte de la misma seguridad alimentaria."

explicacion: |
  Es la idea central de todo el tema.
```
