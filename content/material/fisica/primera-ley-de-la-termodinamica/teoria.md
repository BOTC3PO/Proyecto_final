# Física — Primera ley de la termodinámica (teoría)

> Tema propuesto en `../../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Dependencias: ver `../dependencias.md`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Energía interna, calor y trabajo; procesos de un gas; convención de signos.

---

## 1. La energía se conserva, también cuando hay calor

En `../conservacion-energia-mecanica/` viste que, sin rozamiento, la energía mecánica se mantiene. Pero un freno que se calienta o un motor que quema combustible muestran que la energía "desaparecida" aparece como calor. La **primera ley de la termodinámica** reúne todo en una sola afirmación: la energía no se crea ni se destruye, solo se transforma o se transfiere.

## 2. Energía interna, calor y trabajo

- **Energía interna (U):** suma de las energías cinéticas y potenciales de las partículas del sistema. Es una **función de estado**: depende solo del estado actual (temperatura, presión, cantidad de materia), no de cómo se llegó a él. En un gas ideal depende solo de la temperatura.
- **Calor (Q):** energía que se transfiere por una diferencia de temperatura.
- **Trabajo (W):** energía que se transfiere por una fuerza que produce desplazamiento, por ejemplo cuando un gas empuja un pistón.

Calor y trabajo **no son funciones de estado**: son maneras de intercambiar energía y su valor depende del proceso.

## 3. La ley y la convención de signos

Con la convención más usada en física e ingeniería:

`ΔU = Q − W`

- `Q > 0` si el sistema **recibe** calor; `Q < 0` si lo cede.
- `W > 0` si el sistema **realiza** trabajo sobre el entorno (por ejemplo, el gas se expande); `W < 0` si el entorno realiza trabajo sobre él (compresión).

Otros textos de química usan `ΔU = Q + W`, con `W` medido como trabajo hecho **sobre** el sistema. Es la misma ley con otro signo para el trabajo: conviene fijar siempre cuál se usa.

## 4. Procesos típicos de un gas

- **Isocórico (volumen constante):** `W = 0`, entonces `ΔU = Q`. Todo el calor recibido aumenta la energía interna.
- **Isobárico (presión constante):** `W = p·ΔV`. Si el gas se expande, realiza trabajo positivo.
- **Isotérmico (temperatura constante, gas ideal):** `ΔU = 0`, entonces `Q = W`. El calor recibido se convierte íntegramente en trabajo.
- **Adiabático (sin intercambio de calor):** `Q = 0`, entonces `ΔU = −W`. Si el gas se expande, se enfría; si se comprime, se calienta, como el aire que se calienta al inflar un neumático con una bomba.
- **Ciclo completo:** el sistema vuelve al estado inicial, así que `ΔU = 0` y el trabajo neto es igual al calor neto: `W = Q_recibido − Q_cedido`.

Para un gas ideal monoatómico, la energía interna es `U = (3/2)·n·R·T`, de modo que `ΔU = (3/2)·n·R·ΔT`, con `R ≈ 8,314 J/(mol·K)`.

## 5. Un poco de historia

James Prescott Joule, en la década de 1840, mostró con un experimento de paletas girando dentro de agua que una cantidad fija de trabajo mecánico produce siempre el mismo aumento de temperatura: calor y trabajo son dos formas de energía en tránsito. Esa equivalencia llevó a formular la primera ley a mediados del siglo XIX.

## 6. Consecuencia práctica

La primera ley impide el "móvil perpetuo de primera especie": una máquina que entregue más energía de la que recibe. Lo que no impide, y se estudia en `../entropia-segunda-ley-termodinamica/`, es que parte de la energía sea inutilizable para producir trabajo.
