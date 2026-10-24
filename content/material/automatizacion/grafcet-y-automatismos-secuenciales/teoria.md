# Automatizacion — GRAFCET y automatismos secuenciales (teoría)

> Tema del MAPA: `automatizacion/grafcet-y-automatismos-secuenciales`. Depende de `plc-lenguaje-ladder-contactos-y-bobinas/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo describir con etapas, transiciones y acciones un automatismo secuencial antes de programarlo.

---

## 1. Qué es el GRAFCET

El GRAFCET (siglas de GRAphe Fonctionnel de Commande Étapes-Transitions) es un método gráfico para describir cómo debe comportarse un automatismo secuencial. Surgió en Francia en la década de 1970 y está normalizado en la IEC 60848. En la norma IEC 61131-3 su equivalente para programar un PLC es el **diagrama funcional secuencial** (SFC). Su valor está en que permite ponerse de acuerdo en qué debe hacer el sistema antes de escribir el programa, con un lenguaje que entienden tanto el ingeniero como el operador.

## 2. Los elementos

- **Etapa**: un estado del automatismo, dibujado como un cuadrado con un número. La etapa inicial, donde arranca el sistema, se dibuja con un cuadrado doble.
- **Transición**: la condición para pasar de una etapa a la siguiente, dibujada como una barrita transversal sobre la línea que las une. A su lado se escribe la **receptividad**: la condición lógica, por ejemplo "sensor de pieza = 1" o "t/X2/3s" (3 segundos desde que se activó la etapa 2).
- **Acción**: lo que el sistema hace mientras la etapa está activa, escrito en un rectángulo pegado a la etapa, por ejemplo "bajar cilindro".
- **Enlace orientado**: las líneas que conectan etapas y transiciones, de arriba hacia abajo salvo indicación contraria.

Una etapa se dice **activa** cuando el sistema se encuentra en ese estado. Las acciones solo se ejecutan mientras la etapa está activa.

## 3. Reglas de evolución

El comportamiento queda definido por unas pocas reglas:

1. Al comenzar, solo están activas las etapas iniciales.
2. Una transición está **habilitada** cuando todas las etapas que la preceden están activas.
3. Una transición se **franquea** cuando está habilitada y su receptividad es verdadera.
4. Al franquearse, se activan las etapas siguientes y se desactivan las anteriores.
5. Si una misma etapa debe activarse y desactivarse a la vez, prevalece la activación.

Estas reglas son suficientes para describir secuencias de cualquier tamaño.

## 4. Estructuras básicas

- **Secuencia única**: una etapa detrás de otra, sin bifurcaciones.
- **Selección de secuencia** (divergencia en O): después de una etapa el sistema elige uno de varios caminos según las condiciones, por ejemplo clasificar piezas grandes y chicas.
- **Secuencias simultáneas** (divergencia en Y): varias ramas avanzan en paralelo y luego se esperan entre sí para continuar.
- **Salto y repetición**: se vuelve a una etapa anterior para repetir un ciclo, o se saltea una etapa.

## 5. Un ejemplo completo

Una estampadora: etapa 0 (reposo), la inicial. Cuando el operador presiona el pulsador y hay una pieza, se pasa a la etapa 1 (bajar cilindro). Al llegar al final de carrera inferior, se pasa a la etapa 2 (esperar 2 s). Con el temporizador cumplido, se va a la etapa 3 (subir cilindro). Con el final de carrera superior, se vuelve a la 0.

Una vez dibujado, el esquema permite verificar con el cliente que el comportamiento es el esperado, ver si falta alguna condición y detectar casos peligrosos antes de programar.

## 6. Del GRAFCET al PLC

Hay varias formas de convertirlo en programa: usar directamente SFC si el PLC lo admite, o traducirlo a ladder con un bit interno por cada etapa. Ese bit de etapa se activa por el franqueo de la transición anterior y se desactiva cuando se activa la etapa siguiente. Las salidas se programan como condiciones de los bits de etapa.

## 7. Buenas prácticas

- Mantener cada etapa con una sola finalidad.
- Asignar a cada transición una condición clara y observable.
- Prever siempre un camino de parada y de retorno al reposo.
- Evitar condiciones que no se puedan cumplir y bloquearían la secuencia: agregar tiempos de vigilancia (timeouts).
