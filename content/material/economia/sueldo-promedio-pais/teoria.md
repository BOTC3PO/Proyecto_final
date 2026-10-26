# Economía — El sueldo promedio de un país (teoria)

> Tema del MAPA: `C1` (Tronco 4.b). Depende de
> `../../matematica/cual-miente-y-cuando/` (ver `../dependencias.md`).
> Ángulo MECÁNICO — el ángulo de uso político de esta cifra está en
> `../../civica/sueldo-promedio-pais/`.

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una aplicación concreta de una idea ya vista
(`../../matematica/cual-miente-y-cuando/`), no necesita varias
diapositivas.

---

## La distribución de ingresos no es simétrica

`../../matematica/cual-miente-y-cuando/` ya explicó, en general, que
la media se deja arrastrar por valores atípicos. La distribución de **ingresos** de cualquier país real es el ejemplo más
citado de este problema, porque tiene una forma particular. La mayoría de la
gente gana ingresos bajos o medios, y una minoría chica gana muchísimo más.
Eso forma una **cola larga hacia la derecha**, a diferencia de la campana
simétrica de `../../matematica/distribucion-normal/`.

## Por qué la media siempre queda por encima de la mediana

Con esa forma asimétrica, la media **siempre** da un valor más alto
que la mediana — nunca al revés. La cola de ingresos muy altos "tira"
del promedio hacia arriba, aunque sean relativamente pocas personas.

**Ejemplo numérico simplificado**: en un grupo de 10 personas, 9 ganan
$500.000 y 1 gana $10.000.000.

```
Media = (9×500.000 + 10.000.000) / 10 = 14.500.000/10 = 1.450.000
Mediana = 500.000 (el valor del medio, ordenando los 10 sueldos)
```

La media (**$1.450.000**) casi triplica lo que gana el **90% de las
personas del grupo** ($500.000) — el promedio no representa a "la
persona típica" en absoluto. La mediana, en cambio, sí describe bien
lo que gana la mayoría.

## Por qué se usan percentiles y deciles, no sólo un promedio

Para describir la distribución de ingresos de un país de forma más completa
que un único promedio, se suelen usar **percentiles** o **deciles**
(`../../matematica/tablas-de-frecuencia-cuartiles-percentiles-y-varianza/`).
Por ejemplo, "el ingreso del decil 5" (la persona justo en la mitad,
equivalente a la mediana) frente a "el ingreso del decil 9" (el 10% que más
gana). Comparar esos puntos da una imagen mucho más honesta de cómo se
reparten los ingresos que un solo número promedio.

## El coeficiente de Gini

Existe, además, una medida estándar para resumir en un solo número **qué tan
desigual** es una distribución de ingresos: el **coeficiente de Gini**. Va
de 0 (igualdad perfecta: todos ganan exactamente lo mismo) a 1 (desigualdad
total: una sola persona concentra todo el ingreso). No se documenta acá el valor de Gini de ningún país en particular, porque
cambia con el tiempo y con la fuente. Lo que importa es la **estructura**:
un Gini más alto significa una cola de ingresos altos más "estirada", con
más distancia entre media y mediana.

## Para qué sirve

Entender esta mecánica evita una trampa común al leer noticias económicas.
"El sueldo promedio subió" puede ser matemáticamente cierto y, al mismo
tiempo, no implicar que la mayoría de la gente esté ganando más. Un aumento
grande en los ingresos más altos alcanza para subir el promedio, sin que el
ingreso "típico" (la mediana) se haya movido casi nada. Cómo se **usa** (y a veces se tergiversa) esta cifra
en el debate público y el discurso político es el tema de
`../../civica/sueldo-promedio-pais/`, el módulo que sigue.
