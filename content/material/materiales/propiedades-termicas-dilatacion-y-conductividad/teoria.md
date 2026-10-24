# Materiales — Propiedades térmicas: dilatación y conductividad (teoría)

> Tema del MAPA: `materiales/propiedades-termicas-dilatacion-y-conductividad`. Depende de `../fisica/transmision-calor-conduccion-conveccion-radiacion/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se dilatan y cómo conducen el calor los materiales, y qué son el choque térmico y la fluencia lenta.

---

## 1. Qué pasa cuando cambia la temperatura

Todo material responde al calor. Algunas de esas respuestas son cuestión de diseño: un puente se alarga en verano, una taza de vidrio se rompe si se le echa agua hirviendo, un motor funciona mal si sus partes se dilatan distinto. Las propiedades térmicas dicen cómo se comporta un material frente al calor y a los cambios de temperatura.

## 2. Dilatación térmica

La mayoría de los materiales se **dilata** al calentarse y se contrae al enfriarse, porque la vibración de los átomos aumenta con la temperatura y la distancia media entre ellos crece. El cambio de longitud es, para una barra:

ΔL = α · L0 · ΔT

donde α es el **coeficiente de dilatación lineal** (en 1/°C), L0 la longitud inicial y ΔT el cambio de temperatura. Valores aproximados de α, en millonésimos por grado: acero 12, cobre 17, aluminio 23, vidrio común 9, borosilicato (vidrio de laboratorio) alrededor de 3,3 y un acero especial llamado Invar, cerca de 1,2.

Los materiales de enlaces fuertes, como los cerámicos, se dilatan poco; los polímeros, mucho.

Consecuencias en la práctica:

- **Juntas de dilatación** en puentes, rieles y pavimentos, para que la estructura pueda alargarse sin deformarse.
- **Uniones entre materiales distintos**: si dos materiales con distinta dilatación están unidos, el calor genera tensión en la unión (como en una lámina bimetálica, que se curva al calentarse).
- **Precisión**: instrumentos de medición y piezas de relojería se fabrican con materiales de baja dilatación como el Invar.

Si la dilatación está impedida (la pieza está empotrada), aparece una tensión térmica: σ = E · α · ΔT. Por eso los cambios de temperatura pueden romper piezas rígidas.

## 3. Conductividad térmica

La **conductividad térmica (k)** mide la facilidad con que un material transmite el calor, en W/(m·K). Valores aproximados: cobre 400, aluminio 235, acero 50, vidrio 1, madera 0,15, aire 0,026. Los metales conducen muy bien porque los electrones libres transportan el calor; los cerámicos y polímeros, que no los tienen, aíslan mejor. Los **aislantes** como la lana de vidrio y el poliestireno expandido tienen conductividades muy bajas porque contienen aire atrapado.

Aplicaciones: ollas y disipadores de calor, con materiales de alta k; mangos de ollas, ventanas y paredes, con materiales de baja k.

## 4. Capacidad calorífica y calor específico

El **calor específico** es la energía necesaria para elevar un grado la temperatura de un kilogramo de material. Se usa en el cálculo Q = m · c · ΔT. Los materiales con alto calor específico, como el agua, almacenan mucho calor con poca variación de temperatura.

## 5. Choque térmico

Cuando una pieza se calienta o enfría muy rápido, el exterior cambia antes que el interior y se generan tensiones. Si superan la resistencia del material, se rompe. Es el **choque térmico**. Los cerámicos y los vidrios son especialmente sensibles porque son frágiles y malos conductores. El vidrio de borosilicato, con su baja dilatación, soporta bien los cambios bruscos, y por eso se usa en material de laboratorio y en fuentes de horno.

## 6. Resistencia a alta temperatura y fluencia lenta

A temperaturas altas, los materiales pierden resistencia. Además aparece la **fluencia lenta** (creep): una deformación que crece con el tiempo bajo carga constante, aunque la tensión sea menor que el límite elástico. Se vuelve importante por encima de aproximadamente 0,4 veces la temperatura de fusión en kelvin. Afecta a álabes de turbinas, tuberías de vapor y calderas. Para estos casos se usan superaleaciones de níquel, aceros especiales y cerámicos.

## 7. Selección por comportamiento térmico

Al elegir un material se mira la temperatura máxima de servicio, la dilatación (sobre todo si se une a otros), la conductividad y la resistencia al choque térmico. En el uso doméstico: una olla de acero inoxidable con base de cobre o aluminio combina resistencia con buena conducción del calor.
