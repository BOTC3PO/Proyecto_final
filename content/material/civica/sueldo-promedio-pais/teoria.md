# Cívica — El sueldo promedio de un país: uso político de la cifra (teoria)

> Tema del MAPA: `C1` (Tronco 4.b). Depende de
> `../../economia/sueldo-promedio-pais/` (ver `../dependencias.md`).
> Ángulo CÍVICO — el ángulo mecánico (por qué media y mediana difieren
> en ingresos) está en `../../economia/sueldo-promedio-pais/`.

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea (cómo se selecciona una estadística para
respaldar un argumento) con ejemplos aplicados, no necesita varias
diapositivas.

---

## La misma base de datos, dos titulares distintos

`../../economia/sueldo-promedio-pais/` mostró que media y mediana
pueden contar historias muy distintas sobre la misma distribución de
ingresos. Eso abre una puerta: frente a la **misma** base de datos
real, es posible construir dos afirmaciones **técnicamente
verdaderas** que dan impresiones opuestas — sin que ninguna de las dos
mienta con los números en sí.

**Ejemplo neutral** (sin atribuir esto a ningún partido o postura en
particular — el patrón se repite en cualquier color político, en
cualquier país): un gobierno anuncia "el salario promedio subió 8%
este año" como un logro de su gestión. Al mismo tiempo, un sector
crítico responde "el salario del trabajador típico (la mediana) casi
no se movió" — usando la misma base de datos, pero la medida que mejor
respalda cada argumento. **Las dos cifras pueden ser reales y
correctas a la vez** — el problema no es que alguna mienta, sino que
cada una elige la medida que más conviene a lo que quiere mostrar.

## Términos reales vs. términos nominales

Otra selección común (no exclusiva de ningún sector) es citar un
aumento de sueldo **en términos nominales** (el número tal cual, sin
ajustar) en vez de **en términos reales** (ajustado por inflación).
Un aumento nominal del 30% suena bien, pero si la inflación del mismo
período fue del 40%, el **poder adquisitivo real bajó** — el sueldo
compra menos cosas que antes, aunque el número en pesos haya subido.

```
aumento real (aprox.) ≈ aumento nominal − inflación del período
```

(Es una aproximación simple y suficiente para entender la dirección
del efecto — el cálculo exacto de "variación real" usa una fórmula
compuesta, no resta directa, pero para valores chicos la resta ya
muestra si el resultado es positivo o negativo.)

## Elegir el período favorable (el mismo patrón del eje truncado)

Otra forma de manipular la lectura, sin alterar ningún dato, es elegir
**qué período mostrar**: citar sólo el mejor mes o trimestre, ignorando
la tendencia completa de varios años. Es el mismo tipo de selección
sesgada de `../../matematica/grafico-eje-truncado/` — ahí se elegía
un rango del eje Y para exagerar una diferencia; acá se elige un rango
de tiempo para mostrar sólo la parte conveniente de una serie.

## Cómo leer una cifra de "sueldo promedio" citada en un discurso

Frente a cualquier cifra de este tipo, conviene preguntarse:

1. **¿Es promedio o mediana?** (cada una responde una pregunta
   distinta, ver `../../economia/sueldo-promedio-pais/`).
2. **¿Es en términos reales o nominales?** (ajustado por inflación o
   no).
3. **¿Qué período cubre?** ¿Es representativo, o el mejor caso
   posible dentro de una serie más larga y menos favorable?
4. **¿Cuál es la fuente primaria?** (organismo oficial de
   estadísticas, y no sólo la cita de un discurso sin referencia).

## Para qué sirve

No se trata de desconfiar de toda cifra política por sistema, sino de
tener las herramientas para **leerlas con cuidado**: que una
estadística sea técnicamente correcta no garantiza que la conclusión
que alguien saca de ella sea honesta. El mismo escepticismo aplicado
acá — mirar qué medida se citó, de qué período, y en qué términos — es
la misma actitud crítica de `../../matematica/correlacion-no-es-causalidad/`
y `../../matematica/grafico-eje-truncado/`, aplicada al debate público
sobre economía.
