# Oficios — Tornero — Cálculo (teoria)

> Tema del MAPA: `OF24.calculo-torneria` (`troncos.md`). Depende de ninguno (nodo raíz de esta rama) (ver `../dependencias.md`). Generado con qwen/qwen3.6-35b-a3b, revisión pendiente antes de considerarse final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Fundamentos del mecanizado en torno

El torno es una máquina herramienta fundamental en la industria, encargada de dar forma a piezas mediante el desgaste controlado de material. Para trabajar con seguridad y eficiencia, es crucial comprender cómo interactúan tres parámetros principales: la velocidad de corte, el avance y el ajuste de velocidades. La velocidad de corte ($V_c$) representa la velocidad relativa entre la herramienta y la pieza en el punto de contacto. No es lo mismo cortar acero que aluminio; cada material tiene una resistencia y conductividad térmica distintas que exigen velocidades diferentes para evitar que la herramienta se desgaste prematuramente o que la pieza se deforme por exceso de calor.

El avance ($f$) es la distancia que recede la herramienta por cada vuelta completa del husillo. Este parámetro define la rugosidad superficial de la pieza y el tiempo total de mecanizado. Un avance demasiado rápido puede romper la herramienta o dejar una superficie muy irregular, mientras que uno demasiado lento puede generar fricción excesiva sin remover material eficazmente. El ajuste de velocidades en la máquina consiste en seleccionar la combinación correcta de revoluciones por minuto (RPM) del husillo y la velocidad de desplazamiento del carro, asegurando que las condiciones de corte sean óptimas para el material y la geometría de la herramienta utilizada.

## Relación matemática entre velocidad y revoluciones

Para determinar las revoluciones correctas del husillo, utilizamos la fórmula fundamental del mecanizado. La velocidad de corte depende del diámetro de la pieza ($D$) y de las RPM ($n$). La relación se expresa mediante la ecuación:

$$ V_c = \frac{\pi \cdot D \cdot n}{1000} $$

Donde $V_c$ está en metros por minuto (m/min), $D$ en milímetros (mm) y $n$ en revoluciones por minuto (rpm). Despejando para encontrar las RPM necesarias, obtenemos:

$$ n = \frac{1000 \cdot V_c}{\pi \cdot D} $$

Esta fórmula nos indica que, a medida que el diámetro de la pieza disminuye, las RPM deben aumentar para mantener la misma velocidad de corte. Por ejemplo, al terminar un eje fino, si no ajustamos las revoluciones hacia arriba, la velocidad de corte caerá drásticamente, reduciendo la eficiencia. Por el contrario, en operaciones de desbaste con diámetros grandes, las RPM deben ser menores para evitar que la herramienta se sobrecaliente o vibre.

## Ajuste práctico y ejemplos en la industria argentina

En el taller de mecanizado, el ajuste de velocidades no es solo un cálculo teórico. Primero, se consulta la tabla de parámetros del fabricante de la herramienta o guías de corte estándar para el material específico. En la industria argentina, es común trabajar con aceros al carbono como el 1020 o aleados como el 4140. Para un acero 1020 con una herramienta de carburo de tungsteno, una velocidad de corte típica podría rondar los 200-250 m/min. Si debemos torneado un eje de 50 mm de diámetro, aplicando la fórmula anterior, obtendremos aproximadamente 1270 RPM.

Sin embargo, el ajuste final depende de la rigidez de la máquina y la potencia del motor. En talleres pequeños de la zona industrial de Córdoba o Buenos Aires, donde las máquinas pueden tener limitaciones de potencia, es recomendable reducir un 20% la velocidad calculada teórica para evitar parones o roturas de herramienta. Además, el avance se ajusta según el acabado deseado: para un acabado fino, se usa un avance menor (ej. 0.1 mm/rev), mientras que para el desbaste inicial, se emplea uno mayor (ej. 0.3-0.5 mm/rev) para remover material rápidamente. Siempre se debe verificar que la velocidad lineal del carro no exceda los límites mecánicos de la máquina, especialmente en tornos CNC antiguos o manuales, para garantizar la precisión y seguridad del operario.
