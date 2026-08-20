# Cívica — Sistema de salud (cuestionario, 21 preguntas VBLang)

> Tema: `C19a`/`C19b`/`C19c`. Ver `teoria.md` en esta misma carpeta.
> Tratamiento neutral: se describe cada modelo sin tomar postura.

---

### 1 — Cómo se financia el modelo público universal

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["publico"]

enunciado: "¿Cómo se financia el sistema de salud público universal?"
tipo: mc
opciones_explicitas:
  - "Con impuestos, garantizando acceso a todos sin costo directo en la atención"
  - "Con el pago mensual de un seguro privado"
  - "No se financia, funciona por donaciones voluntarias"
respuesta: "Con impuestos, garantizando acceso a todos sin costo directo en la atención"

explicacion: |
  El Estado paga con los impuestos que ya explicó `../impuestos/` y
  garantiza atención sin costo directo en el hospital público.
```

### 2 — Argumento a favor del modelo público

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["publico"]

enunciado: "¿Cuál es el argumento a favor del modelo público universal?"
tipo: mc
opciones_explicitas:
  - "Nadie queda sin atención por no poder pagarla, la salud es un derecho garantizado"
  - "Es el modelo con mayor competencia entre prestadores"
  - "Es el modelo con menor costo total para el Estado"
respuesta: "Nadie queda sin atención por no poder pagarla, la salud es un derecho garantizado"

explicacion: |
  Se trata la salud como derecho garantizado, no como producto de
  mercado.
```

### 3 — Cómo se financia el modelo privado de mercado

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["privado"]

enunciado: "¿Cómo se financia el sistema de salud privado de mercado?"
tipo: mc
opciones_explicitas:
  - "Con seguros y prepagas que compiten por cobertura, pagados por cada persona o su empleador"
  - "Con impuestos generales, igual que el modelo público"
  - "Con un aporte obligatorio único, sin posibilidad de elegir plan"
respuesta: "Con seguros y prepagas que compiten por cobertura, pagados por cada persona o su empleador"

explicacion: |
  Cada persona elige y paga por el plan que contrata.
```

### 4 — Corriente asociada a la crítica radical del hospital público

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "avanzado"
  tags: ["privado"]

enunciado: "¿Con qué corriente de pensamiento económico se asocia la crítica más radical al hospital público como 'modelo de negocio obsoleto'?"
tipo: mc
opciones_explicitas:
  - "La escuela austriaca"
  - "El keynesianismo"
  - "El marxismo"
respuesta: "La escuela austriaca"

explicacion: |
  Misma corriente ya nombrada en
  `../../economia/corrientes-pensamiento-economico/`.
```

### 5 — Argumento radical de la escuela austriaca sobre salud

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "avanzado"
  tags: ["privado"]

enunciado: "Según la versión más radical de esta crítica, ¿qué pasaría con los servicios de salud en un mercado sin regulación estatal?"
tipo: mc
opciones_explicitas:
  - "Se desagregarían en oferentes especializados y competitivos, en vez de concentrarse en un hospital"
  - "Desaparecerían por completo"
  - "Se concentrarían todos en un único hospital estatal más grande"
respuesta: "Se desagregarían en oferentes especializados y competitivos, en vez de concentrarse en un hospital"

explicacion: |
  El argumento sostiene que la competencia entre oferentes
  especializados sería más eficiente que un monopolio estatal
  centralizado.
```

### 6 — Argumento a favor del modelo privado

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["privado"]

enunciado: "¿Cuál es el argumento a favor del modelo privado de mercado?"
tipo: mc
opciones_explicitas:
  - "La competencia entre prestadores mejora la calidad y baja los costos"
  - "Garantiza acceso igual para todos sin importar cuánto paguen"
  - "Es gratuito para toda la población"
respuesta: "La competencia entre prestadores mejora la calidad y baja los costos"

explicacion: |
  El argumento de mercado sostiene que la competencia beneficia al
  consumidor.
```

### 7 — Las 3 capas del modelo mixto argentino

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["mixto"]

enunciado: "¿Cuáles son las 3 capas que conviven en el sistema de salud mixto argentino?"
tipo: mc
opciones_explicitas:
  - "Hospital público, obra social y prepaga"
  - "Sólo hospital público y prepaga, sin obra social"
  - "Sólo obra social, financiada íntegramente por impuestos"
respuesta: "Hospital público, obra social y prepaga"

explicacion: |
  Las 3 capas conviven al mismo tiempo en el sistema argentino real.
```

### 8 — Cómo se financia la obra social

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["mixto"]

enunciado: "¿Cómo se financia la obra social dentro del modelo mixto argentino?"
tipo: mc
opciones_explicitas:
  - "Con el aporte obligatorio del sueldo, ligado al empleo formal"
  - "Con impuestos generales, igual que el hospital público"
  - "Con el pago voluntario de una prepaga"
respuesta: "Con el aporte obligatorio del sueldo, ligado al empleo formal"

explicacion: |
  Ya visto en detalle en
  `../../economia/descuentos-obligatorios/obra-social/`.
```

### 9 — Cómo se accede a una prepaga en el modelo mixto

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["mixto"]

enunciado: "¿Cómo se accede típicamente a una prepaga en el sistema mixto argentino?"
tipo: mc
opciones_explicitas:
  - "De forma voluntaria, con pago adicional por encima de la obra social"
  - "Es obligatoria para todos los trabajadores formales"
  - "Sólo el Estado puede contratarla en nombre del ciudadano"
respuesta: "De forma voluntaria, con pago adicional por encima de la obra social"

explicacion: |
  Quien busca cobertura por encima de la obra social paga la diferencia
  para acceder a una prepaga.
```

### 10 — Qué es la desregulación de obra social a prepaga

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "avanzado"
  tags: ["mixto"]

enunciado: "¿Qué mecanismo permite pasar el aporte de obra social a una prepaga en Argentina?"
tipo: mc
opciones_explicitas:
  - "La desregulación"
  - "La coparticipación federal"
  - "El régimen de monotributo"
respuesta: "La desregulación"

explicacion: |
  Permite que una persona derive su aporte de obra social hacia una
  prepaga, pagando la diferencia.
```

### 11 — El sistema argentino como ejemplo real

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["mixto"]

enunciado: "¿Qué modelo describe con mayor precisión al sistema de salud argentino real?"
tipo: mc
opciones_explicitas:
  - "Mixto, con las 3 capas conviviendo"
  - "Público universal puro, sin ninguna capa privada"
  - "Privado de mercado puro, sin hospital público"
respuesta: "Mixto, con las 3 capas conviviendo"

explicacion: |
  Argentina es el ejemplo real más citado de modelo mixto en convivencia
  de las 3 capas.
```

### 12 — La pregunta clave para comparar modelos

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["fundamento"]

enunciado: "¿Cuál es la pregunta clave que distingue a los 3 modelos de sistema de salud entre sí?"
tipo: mc
opciones_explicitas:
  - "Quién paga y quién decide qué cobertura recibe cada persona"
  - "Cuántos hospitales tiene cada país"
  - "Qué idioma se habla en cada sistema"
respuesta: "Quién paga y quién decide qué cobertura recibe cada persona"

explicacion: |
  Cada modelo responde distinto a esta misma pregunta de fondo.
```

### 13 — Quién decide la cobertura en el modelo público

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["publico"]

enunciado: "En el modelo público universal, ¿quién decide qué cobertura recibe cada persona?"
tipo: mc
opciones_explicitas:
  - "El Estado, de forma igual para todos"
  - "El mercado, según lo que cada quien puede pagar"
  - "Cada empresa privada, de forma independiente"
respuesta: "El Estado, de forma igual para todos"

explicacion: |
  A diferencia del modelo privado, la decisión no depende de la
  capacidad de pago individual.
```

### 14 — Por qué este módulo depende de Impuestos

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "avanzado"
  tags: ["fundamento"]

enunciado: "¿Por qué este módulo depende de `../impuestos/`?"
tipo: mc
opciones_explicitas:
  - "Porque la salud pública se financia, en definitiva, con el mismo dinero que ese módulo ya explicó de dónde sale"
  - "Porque no tiene ninguna relación, es sólo una dependencia formal sin contenido"
  - "Porque los impuestos financian exclusivamente la salud privada"
respuesta: "Porque la salud pública se financia, en definitiva, con el mismo dinero que ese módulo ya explicó de dónde sale"

explicacion: |
  El financiamiento del hospital público es, en el fondo, la misma
  recaudación impositiva ya vista.
```

### 15 — Neutralidad del tratamiento

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["fundamento"]

enunciado: "¿Qué criterio sigue este módulo al presentar los 3 modelos de sistema de salud?"
tipo: mc
opciones_explicitas:
  - "Describe cada modelo y su argumento, sin tomar postura sobre cuál es mejor"
  - "Recomienda directamente el modelo mixto como el correcto"
  - "Descarta el modelo privado por considerarlo inválido"
respuesta: "Describe cada modelo y su argumento, sin tomar postura sobre cuál es mejor"

explicacion: |
  Mismo criterio de neutralidad usado en
  `../../economia/corrientes-pensamiento-economico/`.
```

### 16 — Verdadero o falso: el hospital público cobra en el punto de atención

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["publico"]

enunciado: "En el modelo público universal, el hospital público cobra un costo directo al paciente en el momento de la atención."
tipo: vf
respuesta: falso

explicacion: |
  El acceso es sin costo directo en el punto de atención, financiado
  por impuestos ya recaudados.
```

### 17 — Verdadero o falso: obra social es parte del modelo mixto

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["mixto"]

enunciado: "La obra social es una de las 3 capas del modelo mixto argentino."
tipo: vf
respuesta: verdadero

explicacion: |
  Junto con el hospital público y la prepaga, forma las 3 capas del
  sistema mixto.
```

### 18 — Verdadero o falso: el modelo privado no tiene competencia

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "intermedio"
  tags: ["privado"]

enunciado: "El modelo privado de mercado se basa en un único prestador sin competencia."
tipo: vf
respuesta: falso

explicacion: |
  Se basa justamente en varios seguros y prepagas compitiendo por
  cobertura.
```

### 19 — Completar: modelo del sistema argentino real

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["mixto"]

enunciado: "El sistema de salud argentino real se describe como un modelo ______ (con 3 capas conviviendo)."
tipo: completar
respuestas_validas:
  - "mixto"

explicacion: |
  Combina hospital público, obra social y prepaga al mismo tiempo.
```

### 20 — Completar: fuente de financiamiento del modelo público

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "basico"
  tags: ["publico"]

enunciado: "El modelo de salud público universal se financia principalmente con ______."
tipo: completar
respuestas_validas:
  - "impuestos"

explicacion: |
  Ese es el mecanismo de financiamiento, sin costo directo al paciente.
```

### 21 — Ordenar: de más estatal a más privado

```
metadata:
  materia: "civica"
  tema: "sistema_de_salud"
  nivel: "avanzado"
  tags: ["sintesis"]

enunciado: "Ordená estos 3 modelos según el peso creciente de la lógica de mercado sobre la lógica estatal."
tipo: ordenar
opciones_explicitas:
  - "Público universal"
  - "Mixto"
  - "Privado de mercado"
respuesta_orden: ["Público universal", "Mixto", "Privado de mercado"]
explicacion: |
  El público universal es el de menor peso de mercado; el mixto combina
  ambas lógicas; el privado de mercado es el de mayor peso de mercado.
```
