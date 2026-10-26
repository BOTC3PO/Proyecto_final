# Economía — Intercambio descentralizado (DEX) y swap (cuestionario, 21 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. DEX: plataforma. Swap: la
> operación de intercambiar un token por otro dentro de un DEX, contra
> un pool de liquidez, sin custodio.

---

### 1 — Cómo funciona un exchange centralizado

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cómo funciona un exchange centralizado (CEX) de criptomonedas?"
tipo: mc
opciones_explicitas:
  - "La empresa custodia el dinero de los usuarios y hace de intermediaria en cada operación"
  - "No existe ninguna empresa: todo pasa directo entre dos usuarios"
  - "Sólo permite comprar, nunca vender"
respuesta: "La empresa custodia el dinero de los usuarios y hace de intermediaria en cada operación"

explicacion: |
  Funciona parecido a un banco o casa de cambio tradicional.
```

### 2 — Qué es un DEX

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un DEX (exchange descentralizado)?"
tipo: mc
opciones_explicitas:
  - "Un conjunto de contratos inteligentes que permite intercambiar criptomonedas directo desde la wallet de cada persona, sin custodio"
  - "Una empresa que reemplaza a los bancos tradicionales"
  - "Un tipo especial de criptomoneda"
respuesta: "Un conjunto de contratos inteligentes que permite intercambiar criptomonedas directo desde la wallet de cada persona, sin custodio"

explicacion: |
  Es la definición central: contratos inteligentes, sin custodia de
  una empresa.
```

### 3 — Qué es un swap

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un \"swap\"?"
tipo: mc
opciones_explicitas:
  - "La operación de intercambiar un token por otro dentro de un DEX"
  - "El nombre de una wallet especial para DEX"
  - "Un tipo de contrato inteligente distinto de los demás"
respuesta: "La operación de intercambiar un token por otro dentro de un DEX"

explicacion: |
  El DEX es la plataforma; el swap es la operación puntual que se
  hace en ella.
```

### 4 — DEX y swap no son dos cosas separadas

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un swap no es un concepto distinto de un DEX: es, literalmente, la acción que un DEX ejecuta."

explicacion: |
  Son el mismo objeto visto desde dos nombres: la plataforma y la
  operación.
```

### 5 — Quién custodia los fondos en un DEX

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "En un DEX, ¿quién custodia los fondos de un usuario mientras NO está haciendo un swap?"
tipo: mc
opciones_explicitas:
  - "El propio usuario, en su wallet"
  - "La empresa que creó el DEX"
  - "Un banco asociado al DEX"
respuesta: "El propio usuario, en su wallet"

explicacion: |
  Ninguna empresa custodia los fondos: siguen en la wallet del usuario
  hasta el instante del intercambio.
```

### 6 — Contra quién intercambia un swap

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "Cuando alguien hace un swap en un DEX, ¿contra quién intercambia sus tokens?"
tipo: mc
opciones_explicitas:
  - "Contra un pool de liquidez, un fondo compartido aportado por muchos usuarios"
  - "Contra otra persona específica, elegida de un libro de órdenes"
  - "Contra el banco central del país donde vive"
respuesta: "Contra un pool de liquidez, un fondo compartido aportado por muchos usuarios"

explicacion: |
  A diferencia de un CEX (que empareja compradores y vendedores), un
  DEX intercambia contra un pool automático.
```

### 7 — Diferencia central con un exchange tradicional

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cuál es la diferencia central entre operar en un CEX y operar en un DEX?"
tipo: mc
opciones_explicitas:
  - "En el CEX se confía la custodia de los fondos a una empresa; en el DEX los fondos quedan en la wallet propia salvo en el instante del swap"
  - "El DEX sólo permite operar con una sola criptomoneda"
  - "El CEX no tiene ningún costo por operar"
respuesta: "En el CEX se confía la custodia de los fondos a una empresa; en el DEX los fondos quedan en la wallet propia salvo en el instante del swap"

explicacion: |
  Es la diferencia estructural central entre los dos modelos.
```

### 8 — La ventaja de un DEX

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ventaja central de un DEX es que nadie más controla los fondos de un usuario en ningún momento, salvo el instante exacto del intercambio."

explicacion: |
  Elimina la necesidad de confiar en una empresa custodia.
```

### 9 — El riesgo de un DEX

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "Si un usuario comete un error operando en un DEX (por ejemplo, aprueba mal una operación), ¿a quién puede reclamarle para revertirla?"
tipo: mc
opciones_explicitas:
  - "A nadie: no hay una empresa ni soporte técnico que pueda revertir la operación"
  - "Al soporte técnico del DEX, que revierte cualquier error"
  - "Al banco central del país"
respuesta: "A nadie: no hay una empresa ni soporte técnico que pueda revertir la operación"

explicacion: |
  Es la contracara del mismo mecanismo que da la ventaja de no
  depender de una empresa custodia.
```

### 10 — "Not your keys, not your coins"

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un usuario que prefiere no dejar sus fondos en manos de un exchange tradicional suele operar directamente en un DEX, para mantener el control de sus propias claves."

explicacion: |
  Es la misma idea de autocustodia ya vista en el tema de wallets,
  aplicada a la elección de dónde operar.
```

### 11 — Quién ejecuta el intercambio en un DEX

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué ejecuta materialmente el intercambio de tokens en un DEX?"
tipo: mc
opciones_explicitas:
  - "El código del contrato inteligente"
  - "Un empleado de la plataforma, de forma manual"
  - "Un banco intermediario"
respuesta: "El código del contrato inteligente"

explicacion: |
  Un DEX es, en esencia, un conjunto de contratos inteligentes que
  ejecutan la operación.
```

### 12 — El precio puede variar entre DEX

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es una práctica habitual comparar el precio de un mismo par de tokens entre distintos DEX antes de operar, porque cada pool puede tener un precio levemente distinto en un momento dado."

explicacion: |
  Cada pool fija su propio precio según su propia composición interna
  (tema siguiente: `pools-liquidez-amm/`).
```

### 13 — Identificar una operación como swap

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "problema"]

enunciado: "Alguien intercambia 100 unidades de un token por otro token distinto, directamente desde su wallet, sin pasar por ninguna empresa. ¿Cómo se llama esa operación?"
tipo: mc
opciones_explicitas:
  - "Un swap"
  - "Un depósito en garantía (escrow)"
  - "Una devaluación"
respuesta: "Un swap"

explicacion: |
  Es exactamente la definición de swap: intercambiar un token por
  otro dentro de un DEX.
```

### 14 — Ordenar el proceso de un swap

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo funciona un swap en un DEX."
opciones_explicitas:
  - "El usuario recibe el nuevo token directo en su wallet"
  - "El contrato inteligente intercambia los tokens contra el pool de liquidez"
  - "El usuario elige qué token quiere entregar y cuál quiere recibir"
  - "El usuario aprueba la operación desde su propia wallet"
respuesta_orden: ["El usuario elige qué token quiere entregar y cuál quiere recibir", "El usuario aprueba la operación desde su propia wallet", "El contrato inteligente intercambia los tokens contra el pool de liquidez", "El usuario recibe el nuevo token directo en su wallet"]

explicacion: |
  Cada paso depende del anterior: sin elección no hay nada que
  aprobar, sin aprobación el contrato no puede ejecutar el swap.
```

### 15 — Ningún tercero emparejador

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de un CEX, un DEX no necesita emparejar la orden de un comprador con la de un vendedor específico: intercambia directo contra el pool."

explicacion: |
  Es la diferencia con el libro de órdenes tradicional de un exchange
  centralizado.
```

### 16 — El DEX corre sobre contratos inteligentes

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un DEX es, en su base, un conjunto de contratos inteligentes que corren sobre una blockchain."

explicacion: |
  Reutiliza directo el concepto ya visto en `contratos-inteligentes/`.
```

### 17 — Distinguir CEX de DEX en un ejemplo

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "Una plataforma te pide transferir tus criptomonedas a una cuenta que ella administra antes de poder operar. ¿Es un DEX o un CEX?"
tipo: mc
opciones_explicitas:
  - "Un CEX: te está pidiendo custodiar tus fondos"
  - "Un DEX: los fondos siempre quedan en tu propia wallet"
  - "Ninguno de los dos: ese modelo no existe"
respuesta: "Un CEX: te está pidiendo custodiar tus fondos"

explicacion: |
  Pedir custodia de los fondos es justamente lo que caracteriza a un
  exchange centralizado, no a un DEX.
```

### 18 — Por qué un DEX no necesita confianza en una empresa

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Por qué operar en un DEX no requiere confiar en una empresa, a diferencia de un CEX?"
tipo: mc
opciones_explicitas:
  - "Porque el código del contrato inteligente, público y verificable, ejecuta la operación en vez de una empresa"
  - "Porque los DEX son gratis y los CEX no"
  - "Porque los DEX sólo operan con una moneda estable"
respuesta: "Porque el código del contrato inteligente, público y verificable, ejecuta la operación en vez de una empresa"

explicacion: |
  Reemplaza la confianza en una empresa por confianza en un código
  auditable.
```

### 19 — Completar la relación DEX-swap

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi"]

tipo: completar
enunciado: "Completá: el DEX es la ___ (plataforma), y el swap es la operación que se hace en ella."
respuestas_validas:
  - "plataforma"

explicacion: |
  Es la relación central entre los dos términos del tema.
```

### 20 — Qué reemplaza al libro de órdenes

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué reemplaza al \"libro de órdenes\" de un exchange tradicional, dentro de un DEX?"
tipo: mc
opciones_explicitas:
  - "El pool de liquidez, que actúa como contraparte automática de cualquier swap"
  - "Un empleado que empareja manualmente cada operación"
  - "Nada: los DEX también usan un libro de órdenes idéntico"
respuesta: "El pool de liquidez, que actúa como contraparte automática de cualquier swap"

explicacion: |
  Es el puente hacia el tema siguiente: cómo ese pool fija el precio
  se explica en `pools-liquidez-amm/`.
```

### 21 — Cierre del tema

```
metadata:
  materia: "economia"
  tema: "dex_swap"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un DEX permite hacer swap de un token por otro directo desde la propia wallet, sin que ninguna empresa custodie los fondos, intercambiando contra un pool de liquidez en vez de contra otra persona específica."

explicacion: |
  Es la idea central de todo el tema.
```
