# Oficios — Tapicero — Diagnóstico de tapicería por casos (cuestionario, 22 preguntas VBLang)

> Tema: `oficios/tapicero/diagnostico-tapiceria-por-casos`. Cierre de la ruta del oficio (Sección 6). Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), casos técnicos que requieren distinguir origen real de fallas (muelle/tela/espuma) — cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "basico"
  tags: ["fundamentos"]

variables:
  n: uno_de([1, 1])

respuesta: "comprender la interacción entre materiales y estructura"
tipo: mc
opciones_explicitas: ["comprender la interacción entre materiales y estructura", "sólo identificar qué parte está rota", "cambiar toda la tela sin revisar nada más"]

enunciado: "El diagnóstico en tapicería consiste principalmente en..."

explicacion: |
  No basta con ver qué está roto: hay que entender el sistema mecánico
  completo para garantizar la durabilidad del mueble.
```

### 2 — pregunta 2

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "avanzado"
  tags: ["caso"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Si un sillón hace ruido (chirrido), cambiar sólo la tela soluciona el problema porque la tela es la fuente del sonido."

explicacion: |
  El chirrido viene de la fricción metálica interna de los muelles;
  cambiar la tela no ataca la causa real del ruido.
```

### 3 — pregunta 3

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "intermedio"
  tags: ["muelle que suena"]

variables:
  causa: uno_de(["falta de lubricación", "rotura de la goma de sujeción", "holgura en los puntos de anclaje al bastidor"])

respuesta: verdadero
tipo: vf

enunciado: "\"{causa}\" es una causa mencionada en la teoría para un muelle que suena."

explicacion: |
  El metal frotando contra metal o madera sin amortiguación genera el
  ruido característico por cualquiera de estas tres causas.
```

### 4 — pregunta 4

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "intermedio"
  tags: ["tela destensada"]

variables:
  n: uno_de([1, 1])

respuesta: "las grampas o tachuelas perdieron agarre, o la tela de soporte se relajó"
tipo: mc
opciones_explicitas: ["las grampas o tachuelas perdieron agarre, o la tela de soporte se relajó", "la espuma es de mejor calidad que antes", "el bastidor de madera creció de tamaño"]

enunciado: "Cuando la tela exterior de un sillón está destensada y se deforma, la causa suele ser que..."

explicacion: |
  La pérdida de agarre en grampas/tachuelas o la relajación de la tela
  de soporte (lienzo o malla) por humedad o uso permiten esa
  deformación.
```

### 5 — pregunta 5

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "basico"
  tags: ["espuma degradada"]

variables:
  factor: uno_de(["la luz solar directa", "la humedad"])

respuesta: verdadero
tipo: vf

enunciado: "\"{factor}\" es un factor que acelera la pérdida de elasticidad celular de la espuma de poliuretano, según la teoría."

explicacion: |
  La exposición prolongada a estos factores hace que la espuma pierda
  elasticidad más rápido de lo habitual.
```

### 6 — pregunta 6

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "avanzado"
  tags: ["consecuencia"]

variables:
  n: uno_de([1, 1])

respuesta: "el usuario siente el bastidor o los muelles directamente, acelerando el desgaste general"
tipo: mc
opciones_explicitas: ["el usuario siente el bastidor o los muelles directamente, acelerando el desgaste general", "el mueble se vuelve más cómodo con el tiempo", "no tiene ningún efecto sobre la tela o los puntos de fijación"]

enunciado: "Cuando la espuma se colapsa por degradación, la consecuencia estructural es que..."

explicacion: |
  Al perder amortiguación, aumenta la presión sobre la tela y los
  puntos de fijación, acelerando el desgaste de toda la estructura.
```

### 7 — pregunta 7

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "basico"
  tags: ["primer paso"]

variables:
  n: uno_de([1, 1])

respuesta: "una prueba de carga y movimiento"
tipo: mc
opciones_explicitas: ["una prueba de carga y movimiento", "reemplazar toda la tela sin más análisis", "pintar el mueble para disimular fallas"]

enunciado: "Al recibir un mueble para diagnosticar, el primer paso según la teoría es realizar..."

explicacion: |
  Sentarse o aplicar presión en zonas sospechosas ayuda a escuchar el
  origen exacto del chirrido antes de decidir cualquier reparación.
```

### 8 — pregunta 8

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "intermedio"
  tags: ["prueba de espuma"]

variables:
  n: uno_de([1, 1])

respuesta: "no recupera su forma original o se desmorona en fragmentos"
tipo: mc
opciones_explicitas: ["no recupera su forma original o se desmorona en fragmentos", "vuelve a su forma inmediatamente sin marcas", "cambia de color al presionarla"]

enunciado: "Al presionar la espuma bajo un cojín, una señal de degradación avanzada es que..."

explicacion: |
  Si la espuma no recupera su forma o se desmorona, la degradación es
  avanzada y requiere relleno total, no un parche.
```

### 9 — pregunta 9

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "intermedio"
  tags: ["verificacion de tension"]

variables:
  n: uno_de([1, 1])

respuesta: "la tela de soporte (lienzo o malla elástica) probablemente esté rota"
tipo: mc
opciones_explicitas: ["la tela de soporte (lienzo o malla elástica) probablemente esté rota", "el mueble es de excelente calidad", "no hay ningún problema real"]

enunciado: "Si al tirar suavemente de la tela ésta cede más de lo permitido por su elasticidad natural, la teoría indica que..."

explicacion: |
  Esa cesión excesiva es la señal de que la tela de soporte interna
  está dañada, no sólo la tela visible exterior.
```

### 10 — pregunta 10

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "intermedio"
  tags: ["gomas de muelle"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si las gomas de sujeción de los muelles están rotas o duras, deben reemplazarse por nuevas de la misma medida."

explicacion: |
  No reemplazarlas puede hacer que el muelle se desplace y dañe la
  estructura de madera del mueble.
```

### 11 — pregunta 11

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "basico"
  tags: ["tipos de mantenimiento"]

variables:
  tipo_mantenimiento: uno_de(["correctivo", "preventivo"])

respuesta: verdadero
tipo: vf

enunciado: "El mantenimiento \"{tipo_mantenimiento}\" es una de las dos opciones que puede decidir un tapicero tras un diagnóstico correcto, según la teoría."

explicacion: |
  Correctivo (reparar lo dañado) y preventivo (reforzar zonas de
  estrés) son las dos estrategias posibles tras un buen diagnóstico.
```

### 12 — pregunta 12

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "avanzado"
  tags: ["reparacion final"]

variables:
  n: uno_de([1, 1])

respuesta: "que la tensión de la nueva tela sea uniforme, para evitar pliegues futuros"
tipo: mc
opciones_explicitas: ["que la tensión de la nueva tela sea uniforme, para evitar pliegues futuros", "que la tela nueva quede lo más floja posible", "que se use cualquier tela disponible sin medir"]

enunciado: "Al reemplazar materiales tras confirmar la falla estructural, hay que asegurar..."

explicacion: |
  Una tensión pareja evita que se formen pliegues o zonas débiles con
  el uso posterior del mueble.
```

### 13 — pregunta 13

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "basico"
  tags: ["tres sintomas principales"]

variables:
  sintoma: uno_de(["muelle que suena", "tela destensada", "espuma degradada"])

respuesta: verdadero
tipo: vf

enunciado: "\"{sintoma}\" es uno de los tres síntomas principales de falla en tapicería mencionados en la teoría."

explicacion: |
  Muelle que suena, tela destensada y espuma degradada son los tres
  síntomas centrales que suelen coexistir.
```

### 14 — pregunta 14

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "avanzado"
  tags: ["diagnostico erroneo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un diagnóstico erróneo en tapicería lleva a reparaciones superficiales que no resuelven la causa raíz del problema."

explicacion: |
  Por eso es clave identificar cuál de los tres elementos (muelle,
  tela, espuma) falló primero antes de reparar.
```

### 15 — pregunta 15

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "intermedio"
  tags: ["herramienta de diagnostico"]

variables:
  n: uno_de([1, 1])

respuesta: "un destornillador o herramienta plana"
tipo: mc
opciones_explicitas: ["un destornillador o herramienta plana", "un martillo de goma", "un secador de pelo"]

enunciado: "Según la teoría, para levantar ligeramente la tela en las costuras o debajo de los cojines conviene usar..."

explicacion: |
  Un destornillador o una herramienta plana permite revisar espuma y
  costuras sin romper la tela.
```

### 16 — pregunta 16

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "basico"
  tags: ["confort y estetica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según la teoría, el confort y la estética de un mueble tapizado son el resultado final de un sistema mecánico complejo."

explicacion: |
  No son elementos aislados: dependen de cómo interactúan muelles,
  espuma y tela como conjunto.
```

### 17 — pregunta 17

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "intermedio"
  tags: ["origen de fallas"]

variables:
  n: uno_de([1, 1])

respuesta: "un desgaste progresivo o una instalación incorrecta en etapas anteriores"
tipo: mc
opciones_explicitas: ["un desgaste progresivo o una instalación incorrecta en etapas anteriores", "un defecto de fábrica de la madera exclusivamente", "un problema sin ninguna causa identificable"]

enunciado: "Según la teoría, las fallas en un mueble tapizado rara vez son aisladas; suelen ser consecuencia de..."

explicacion: |
  Entender esto es clave para no tratar cada síntoma como un problema
  independiente y desconectado.
```

### 18 — pregunta 18

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "avanzado"
  tags: ["caso integral"]

variables:
  n: uno_de([1, 1])

respuesta: "identificar cuál de los tres elementos (muelle, tela, espuma) falló primero"
tipo: mc
opciones_explicitas: ["identificar cuál de los tres elementos (muelle, tela, espuma) falló primero", "reemplazar los tres elementos sin diagnóstico previo", "ignorar la espuma si la tela está bien"]

enunciado: "Para una reparación integral en tapicería, la teoría indica que es clave..."

explicacion: |
  Como los tres síntomas suelen coexistir, hay que entender el orden
  causal para reparar la fuente real del problema.
```

### 19 — pregunta 19

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "basico"
  tags: ["material espuma"]

variables:
  n: uno_de([1, 1])

respuesta: "poliuretano"
tipo: completar

enunciado: "El tipo de espuma que pierde elasticidad celular con el tiempo, mencionado en la teoría, es la espuma de ___."

respuestas_validas:
  - "poliuretano"

explicacion: |
  La espuma de poliuretano es la que se degrada especialmente por luz
  solar directa o humedad.
```

### 20 — pregunta 20

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "intermedio"
  tags: ["inspeccion de muelles"]

variables:
  n: uno_de([1, 1])

respuesta: "retirar la base temporalmente para inspeccionar las gomas de sujeción"
tipo: mc
opciones_explicitas: ["retirar la base temporalmente para inspeccionar las gomas de sujeción", "aplicar aceite sobre la tela exterior", "ignorar el ruido si el mueble se ve bien"]

enunciado: "En casos de muelles sueltos, según la teoría, es necesario..."

explicacion: |
  Sólo revisando directamente las gomas de sujeción se puede confirmar
  si están rotas o duras y necesitan reemplazo.
```

### 21 — pregunta 21

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "avanzado"
  tags: ["orden de trabajo"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Según la teoría, conviene sustituir materiales antes de confirmar cuál es la falla estructural real."

explicacion: |
  Es al revés: sólo tras confirmar la falla estructural se procede a la
  sustitución de materiales, para no reparar lo que no estaba roto.
```

### 22 — pregunta 22

```
metadata:
  materia: "oficios"
  tema: "tapicero_diagnostico_tapiceria_por_casos"
  nivel: "basico"
  tags: ["material de soporte"]

variables:
  material: uno_de(["lienzo", "malla elástica"])

respuesta: verdadero
tipo: vf

enunciado: "\"{material}\" es un tipo de tela de soporte mencionado en la teoría para sostener la tela exterior de un mueble."

explicacion: |
  El lienzo y la malla elástica son las telas de soporte internas que,
  al relajarse, permiten que la tela exterior se deforme.
```

