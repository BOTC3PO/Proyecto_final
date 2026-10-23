# Física — Movimiento armónico simple y ondas estacionarias (teoría)

> Tema propuesto en `../../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Dependencias: ver `../dependencias.md`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Resorte, péndulo, energía del oscilador; armónicos en cuerdas y tubos.

---

## 1. Oscilaciones que se repiten igual

En `../oscilacion-periodo/` y `../frecuencia/` aprendiste qué son el período y la frecuencia. Acá estudiamos el movimiento oscilatorio más simple: el **movimiento armónico simple (MAS)**, en el que la fuerza que tira del cuerpo hacia el equilibrio es **proporcional al desplazamiento** (ley de Hooke, `F = −k·x`). Un resorte con una masa y, para ángulos chicos, un péndulo se comportan así.

## 2. Magnitudes del MAS

- **Amplitud (A):** el máximo desplazamiento desde el equilibrio.
- **Período (T):** tiempo de una oscilación completa. **Frecuencia (f):** oscilaciones por segundo, `f = 1/T`, en hertz.
- **Posición:** `x(t) = A·cos(ω·t + φ)`, con `ω = 2π·f` la frecuencia angular.

La velocidad es máxima al pasar por el equilibrio (`v_max = A·ω`) y nula en los extremos, donde la aceleración es máxima.

## 3. Resorte y péndulo

- **Masa en un resorte:** `T = 2π·√(m/k)`. Más masa, período mayor; resorte más duro (`k` grande), período menor.
- **Péndulo simple (ángulos pequeños):** `T = 2π·√(L/g)`. No depende de la masa ni de la amplitud (mientras sea chica): solo del largo `L` y de la gravedad `g`. Por eso los relojes de péndulo funcionaron durante siglos.

## 4. Energía en el MAS

La energía mecánica total de un oscilador con resorte es `E = ½·k·A²` y se mantiene constante (sin rozamiento): en los extremos es toda potencial elástica y en el equilibrio es toda cinética. Si duplicás la amplitud, la energía se cuadruplica.

## 5. Ondas estacionarias

Cuando dos ondas iguales viajan en sentidos opuestos (por ejemplo, una onda que se refleja en el extremo de una cuerda), se superponen y forman una **onda estacionaria**. Es un patrón que no avanza, con puntos que no se mueven (**nodos**) y puntos de máxima oscilación (**antinodos** o vientres).

**Cuerda fija en ambos extremos** (guitarra, violín). Solo entran ondas con nodos en los extremos, de modo que `L = n·λ/2` y las frecuencias permitidas son:

`f_n = n·v/(2L)`, con `n = 1, 2, 3, …`

`n = 1` es la frecuencia **fundamental**; `n = 2, 3, …` son los armónicos. Cada armónico tiene `n` antinodos.

**Tubos sonoros.** Un tubo **abierto en ambos extremos** tiene antinodos de desplazamiento en las dos bocas y produce los mismos armónicos `f_n = n·v/(2L)`. Un tubo **cerrado en un extremo** (como una botella o un clarinete) tiene un nodo en el extremo cerrado y un antinodo en el abierto: `L = (2n − 1)·λ/4`, con `f_n = (2n − 1)·v/(4L)`; solo aparecen los armónicos impares. Con la velocidad del sonido en el aire, unos 340 m/s a temperatura ambiente, un tubo cerrado de 0,17 m suena en 500 Hz.

## 6. Resonancia y música

Un instrumento resuena cuando se lo excita en una de sus frecuencias naturales (`../resonancia-frecuencia-natural/`). El **timbre** de una nota depende de cuántos armónicos tiene y con qué intensidad (`../sonido-timbre-altura-intensidad/`). Apretar un dedo en el mástil de una guitarra acorta `L` y sube la frecuencia fundamental.
