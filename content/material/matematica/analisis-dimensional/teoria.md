# Matemática — Análisis dimensional (teoría)

> Tema del MAPA: `M11` (Tronco 3.a — Geometría: de la forma a la medida).
> Depende de `../sistema-metrico-y-conversiones/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** alcanza — es una idea chica que se apoya fuerte en el módulo
anterior (conversión de unidades), sin necesitar mucho contenido nuevo.

---

## Qué es el análisis dimensional

El **análisis dimensional** es la técnica de revisar las unidades de una
fórmula o de un resultado para verificar que tengan sentido, ANTES incluso
de mirar los números. Sirve para detectar errores: si en algún paso de un
cálculo las unidades no coinciden con lo que se busca, hay un error en la
fórmula o en el planteo, aunque los números "cierren".

## Unidades derivadas: combinar magnitudes básicas

Muchas magnitudes se obtienen combinando otras con una operación, y sus
unidades se combinan de la misma forma:

- **Velocidad** = distancia ÷ tiempo → unidades: m/s, km/h.
- **Área** = longitud × longitud → unidades: m² (metro cuadrado).
- **Volumen** = longitud × longitud × longitud → unidades: m³ (metro
  cúbico).
- **Densidad** = masa ÷ volumen → unidades: kg/m³, g/cm³.
- **Aceleración** = velocidad ÷ tiempo → unidades: m/s² (metros por
  segundo, por segundo).

Fijate el patrón: la unidad del resultado siempre se arma con las mismas
operaciones (× o ÷) que se aplicaron a los números.

## La regla de oro: no se pueden sumar o restar unidades distintas

Se puede sumar 3 m + 5 m = 8 m (mismas unidades). Pero **3 m + 5 s no
significa nada** — son magnitudes distintas (longitud y tiempo), no se
pueden combinar con suma o resta. Antes de sumar o restar dos cantidades,
hay que asegurarse de que estén en la misma unidad (convertir si hace
falta, ver `../sistema-metrico-y-conversiones/`).

En cambio, **sí se pueden multiplicar o dividir** magnitudes distintas
entre sí — de ahí nacen las unidades derivadas de arriba (m/s, m², kg/m³).

## Verificar una fórmula por sus unidades

Cuando una fórmula da un resultado, sus unidades tienen que coincidir con
lo que se está calculando. Ejemplo: si la fórmula del área de un
rectángulo es `base × altura`, y base y altura están en metros, el
resultado va a estar en m × m = m² — que es justo la unidad esperada para
un área. Si un cálculo diera como resultado una unidad "rara" (como m/s
para lo que se supone que es un área), eso es una señal de que la fórmula
o el planteo tiene un error.

## Para qué sirve en la práctica

- Detectar que a una fórmula "se le olvidó" un término o una división.
- Elegir con qué unidades conviene trabajar antes de operar (convertir
  todo a la misma base primero).
- Verificar que el resultado de un problema con contexto (velocidad,
  densidad, caudal) tenga sentido antes de mirar si el número "parece"
  razonable.
