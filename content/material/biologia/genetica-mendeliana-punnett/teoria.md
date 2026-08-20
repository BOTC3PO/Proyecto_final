# Biología — Genética mendeliana: cuadro de Punnett (teoria)

> Tema del MAPA: `B2` (Tronco 4.b → Biología). Depende de
> `../../matematica/probabilidad-compuesta/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — vocabulario, el cuadro en sí y su relación con
probabilidad son tres pasos separables.

---

## Vocabulario básico

- **Alelo**: cada una de las versiones alternativas de un gen (por
  ejemplo, "semilla lisa" o "semilla rugosa").
- **Dominante** (se escribe con mayúscula, `A`): el alelo que se
  manifiesta en el fenotipo aunque esté presente una sola copia.
- **Recesivo** (minúscula, `a`): el alelo que sólo se manifiesta si
  están presentes las DOS copias (ninguna dominante que lo tape).
- **Genotipo**: la combinación de alelos que tiene un individuo
  (`AA`, `Aa`, o `aa`).
- **Fenotipo**: cómo se ve/expresa ese genotipo (por ejemplo, "semilla
  lisa" para `AA` o `Aa`; "semilla rugosa" sólo para `aa`).
- **Homocigota**: tiene las dos copias iguales (`AA` o `aa`).
  **Heterocigota**: tiene una de cada (`Aa`).

## El cuadro de Punnett

El **cuadro de Punnett** es una tabla que cruza los alelos que puede
aportar cada progenitor, para predecir las proporciones de genotipos
posibles en la descendencia. Cruzando dos heterocigotas (`Aa × Aa`):

```
        A       a
    ┌───────┬───────┐
 A  │  AA   │  Aa   │
    ├───────┼───────┤
 a  │  Aa   │  aa   │
    └───────┴───────┘
```

Resultado: `1 AA : 2 Aa : 1 aa` (genotipo) — que en fenotipo, si `A`
es dominante, es `3 dominante : 1 recesivo` (la proporción clásica
3:1 de Mendel).

## Por qué cada casilla es probabilidad compuesta

Cada casilla del cuadro **es**, literalmente, `../../matematica/probabilidad-compuesta/`
con otra notación: heredar el alelo del padre y heredar el alelo de la
madre son eventos **independientes**, así que la probabilidad de cada
combinación se **multiplica**:

```
P(Aa, heredando A del padre y a de la madre) = P(A del padre) × P(a de la madre) = 1/2 × 1/2 = 1/4
```

El cuadro completo no es más que las 4 combinaciones posibles (2
alelos del padre × 2 de la madre) dibujadas una por una — el mismo
**principio multiplicativo de conteo** que ya arma un diagrama de
árbol.

## El testcross

Cuando el genotipo de un individuo con fenotipo dominante es
desconocido (podría ser `AA` o `Aa`), se lo cruza con un homocigota
recesivo conocido (`aa`) — un **testcross**. Si aparece **algún**
descendiente con fenotipo recesivo, el individuo original era `Aa`
(heterocigota); si **todos** los descendientes son dominantes, era
`AA`.

## Para qué sirve

Es la herramienta estándar para predecir (en términos de probabilidad,
no de certeza) cómo se van a repartir los rasgos hereditarios en la
descendencia — la base de `../herencia-ligada-al-sexo/` y
`../grupos-sanguineos/` (los módulos que siguen), que aplican la misma
lógica a mecanismos genéticos más específicos.
