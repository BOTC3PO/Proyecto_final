# Matemática — Correlación no es causalidad (teoria)

> Tema del MAPA: `C3` (Tronco 4.b). Depende de `../regresion-lineal/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — las tres explicaciones alternativas a una
correlación, más el método para probar causalidad de verdad,
conviene mostrarlos como pasos separados.

---

## El principio

`../regresion-lineal/` terminó con una advertencia: que una recta
ajuste muy bien a los datos (un coeficiente de correlación `r` alto)
**no prueba** que una variable **cause** a la otra. Es uno de los
errores de razonamiento más comunes al leer estadísticas — y tiene
nombre propio: **correlación no implica causalidad**.

Cuando dos variables `A` y `B` están correlacionadas, hay varias
explicaciones posibles, y "A causa B" es sólo una de ellas.

## Explicación 1: causalidad real

A veces sí es cierto: `A` efectivamente causa `B` (fumar y cáncer de
pulmón, por ejemplo). Pero la correlación sola **no lo distingue** de
las otras explicaciones — hace falta evidencia adicional.

## Explicación 2: causalidad inversa

A veces la dirección está invertida: no es que `A` cause `B`, sino que
`B` causa `A`. Ejemplo clásico: "la gente feliz sonríe más" — ¿sonreír
causa felicidad, o la felicidad causa que la gente sonría más? La
correlación entre "sonreír" y "ser feliz" no distingue por sí sola
cuál es la causa y cuál el efecto.

## Explicación 3: una tercera variable (variable de confusión)

Muchas veces ninguna de las dos causa a la otra — ambas son efecto de
una **tercera variable** que las mueve a la vez. El ejemplo clásico:
**las ventas de helado y los ahogamientos en piletas están
correlacionados** (ambos suben juntos). No es que comer helado cause
ahogamientos — la tercera variable es el **calor del verano**: hace
que más gente compre helado, y también que más gente vaya a nadar
(aumentando el riesgo de ahogamiento).

## Explicación 4: coincidencia (correlación espuria)

Con suficientes variables comparadas al azar, es matemáticamente
esperable que algunas den una correlación fuerte por **pura
casualidad**, sin ninguna relación real de por medio. El sitio
"Spurious Correlations" (Tyler Vigen) recopila ejemplos absurdos con
datos reales — como el consumo per cápita de queso mozzarella
correlacionando fuertemente con la cantidad de doctorados otorgados en
ingeniería civil en Estados Unidos, año a año. No hay ningún mecanismo
real que conecte ambas cosas: es coincidencia estadística.

## Cómo se prueba causalidad de verdad

Un estudio puramente **observacional** (medir variables tal como
ocurren, sin intervenir) nunca puede, por sí solo, probar causalidad
— siempre queda abierta la posibilidad de una tercera variable o de
causalidad inversa. La forma estándar de probar causalidad es el
**experimento controlado y aleatorizado**: dividir al azar a los
participantes en un **grupo que recibe el tratamiento** y un **grupo
de control** que no lo recibe (o recibe un placebo), y comparar los
resultados. La aleatorización reparte parejo cualquier tercera
variable posible entre ambos grupos, así que si hay una diferencia de
resultado, es mucho más razonable atribuirla al tratamiento.

## Para qué sirve

Es la herramienta de pensamiento crítico esencial para leer noticias,
estudios y estadísticas: cada vez que un titular dice "el estudio
encontró que A está relacionado con B", vale preguntarse si hay
evidencia de causalidad real (experimento controlado) o sólo
correlación observacional, que podría explicarse por causalidad
inversa, una tercera variable, o pura coincidencia.
