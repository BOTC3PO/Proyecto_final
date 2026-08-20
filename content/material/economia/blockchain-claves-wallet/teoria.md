# Economía — Blockchain, claves y wallet (teoria)

> Tema del MAPA: `E29` (Tronco 1 — Numérico). Cuelga de
> `CRIPTO1["Criptografía (Informática)"]` en `troncos.md` — esa carpeta
> (`material/informatica/criptografia/`) todavía no existe en este
> repo (ver `../dependencias.md`), así que acá se introduce desde cero
> el par de claves pública/privada que hace falta para entender el
> tema. Contenido puramente técnico: cómo funciona la tecnología, sin
> evaluar si conviene invertir en criptomonedas (eso no es parte de
> este tema).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — cómo se guarda información sin que nadie la pueda
alterar después, y cómo se prueba que algo es tuyo sin depender de
ningún banco.

---

## El problema que resuelve una blockchain

Un banco tradicional guarda un registro central de cuánta plata tiene
cada cuenta: si el banco dice que algo pasó, se confía en el banco. Una
**blockchain** (cadena de bloques) resuelve el mismo problema —llevar
un registro confiable de transacciones— pero **sin ningún banco ni
autoridad central**: el registro lo mantienen, de forma coordinada,
miles de computadoras (nodos) repartidas por el mundo, y todas tienen
una copia idéntica.

## Qué es un bloque, y por qué forman una cadena

Un **bloque** agrupa un conjunto de transacciones confirmadas en un
período de tiempo. Cada bloque nuevo incluye, además de sus propias
transacciones, el **hash** (una especie de huella digital única) del
bloque anterior — así se forma la **cadena**: cada bloque está
literalmente enlazado al que vino antes.

## El hash: una huella digital de la información

Un **hash** es el resultado de pasar cualquier información por una
función matemática que devuelve siempre un texto de longitud fija,
como una huella digital de esos datos:

- Los mismos datos de entrada **siempre** producen el mismo hash.
- Cambiar **un solo carácter** de los datos de entrada cambia el hash
  **por completo** (no de forma parecida — completamente distinto).
- No hay forma práctica de "adivinar" qué datos originaron un hash
  dado, ni de encontrar dos datos distintos que den el mismo hash.

## Por qué la cadena es difícil de alterar

Como cada bloque incluye el hash del anterior, alterar una transacción
de un bloque viejo cambiaría su hash — y ese cambio "rompería" el
enlace con todos los bloques posteriores, porque cada uno de ellos
guardó el hash ORIGINAL del bloque que se intentó modificar. Para que
la alteración pase desapercibida, habría que recalcular también todos
los bloques siguientes, en la mayoría de las copias de la red al mismo
tiempo — en la práctica, extremadamente costoso cuanto más vieja es la
transacción que se quiere alterar.

## El par de claves: pública y privada

Para probar que una transacción es tuya, sin depender de ningún banco
que te reconozca, se usa un par de claves matemáticamente relacionadas
(**criptografía asimétrica**):

- **Clave privada**: un número secreto, que **nunca** se comparte con
  nadie. Es la que prueba que sos el dueño de algo.
- **Clave pública**: se genera matemáticamente A PARTIR de la clave
  privada, y **sí** se puede compartir libremente — sirve para que
  cualquiera pueda verificar algo firmado con tu clave privada, sin
  necesitar conocer la clave privada en sí.

Es una relación de un solo sentido: de la clave privada se puede
calcular la clave pública, pero no al revés — no hay forma práctica de
reconstruir la clave privada a partir de la pública.

## Firmar una transacción

Cuando alguien envía una transacción, la **firma digitalmente** con su
clave privada. Cualquier nodo de la red puede usar la clave pública
correspondiente para verificar que esa firma es válida — confirmando
que quien envió la transacción realmente tiene la clave privada
correspondiente, sin que esa clave privada se revele en ningún momento
del proceso.

## Qué es una wallet ("billetera")

Una **wallet** no "guarda" criptomonedas como si fueran monedas
físicas adentro de un cajón: guarda las **claves privadas** que prueban
la propiedad sobre los movimientos ya registrados en la blockchain. La
**dirección** de una wallet (lo que se comparte para recibir fondos) se
deriva, a su vez, de la clave pública — es una versión más corta y
manejable de esa clave pública.

> **Consecuencia real e irreversible**: si alguien pierde su clave
> privada (y no guardó una copia de respaldo, la "frase semilla"), no
> existe ningún "recuperar contraseña" posible: nadie —ni siquiera el
> creador de la blockchain— puede restaurar el acceso. Es la
> contracara directa de no depender de una autoridad central.

## Dónde aparece en la vida real

- Cuando una wallet muestra tu "dirección" para que alguien te envíe
  fondos, en realidad te está mostrando un derivado de tu clave
  pública.
- Cuando confirmás una transacción desde una wallet, por atrás se está
  firmando esa transacción con tu clave privada.
- Que una transacción confirmada hace meses en una blockchain grande y
  activa se considere "prácticamente imposible de revertir" es una
  consecuencia directa de cómo funciona el encadenamiento de hashes.
