# Materiales — Elasticidad: Ley de Hooke y Módulo de Young (teoría)

> Tema del MAPA: `elasticidad_ley_de_hooke_modulo_young`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Estudia cómo los materiales responden a fuerzas externas y qué parámetros definen su comportamiento elástico.

---

## 1. La Ley de Hooke: relación entre fuerza y deformación

La Ley de Hooke describe la relación lineal que existe entre la fuerza aplicada a un material y la deformación que experimenta, siempre que no se exceda su límite elástico. Esto significa que, dentro de ese rango, si duplicamos la fuerza, la deformación también se duplicará, manteniéndose proporcional. La fórmula más conocida es $ F = -kx $, donde $ F $ es la fuerza aplicada, $ k $ es una constante que depende del material y de su geometría, y $ x $ es el desplazamiento o alargamiento producido. El signo negativo indica que la fuerza de recuperación actúa en sentido opuesto a la deformación.

Esta ley no se aplica solo a resortes, sino a cualquier cuerpo elástico, como cables, vigas o incluso tejidos biológicos, siempre y cuando las cargas no provoquen daños permanentes. Su validez es fundamental para diseñar estructuras que resistan tensiones sin deformarse de manera irreversible.

---

## 2. El Módulo de Young: medida de rigidez

El Módulo de Young (E), también llamado módulo de elasticidad, cuantifica la resistencia de un material a ser deformado por esfuerzos normales (tensión o compresión). Se calcula como el cociente entre el esfuerzo ($ \sigma $) aplicado y la deformación unitaria ($ \epsilon $):  
$$ E = \frac{\sigma}{\epsilon} $$  

El esfuerzo es la fuerza dividida por la sección transversal del material, mientras que la deformación unitaria es el cambio de longitud dividido por su longitud original. Un material con un valor alto de E (como el acero) se deforma poco bajo carga, mientras que uno con un E bajo (como el caucho) se estira fácilmente.

Este parámetro permite comparar la rigidez entre materiales y es clave en ingeniería para elegir materiales según su uso: por ejemplo, estructuras necesitan altos valores de E, mientras que amortiguadores requieren bajos.

---

## 3. Esfuerzo, deformación y el Módulo de Young

Para aplicar la Ley de Hooke a escalas macroscópicas, se introduce el concepto de esfuerzo y deformación unitaria. El esfuerzo ($ \sigma $) mide la fuerza por unidad de área, mientras que la deformación unitaria ($ \epsilon $) es la relación entre el cambio de longitud y su tamaño original. Estas variables son fundamentales para calcular el Módulo de Young, ya que este último define cómo un material distribuye las tensiones internas ante una carga externa.

La fórmula del Módulo de Young se usa en ingeniería para predecir comportamientos: si un cable tiene un E conocido y se le aplica una fuerza determinada, se puede calcular cuánto se estirá. Esto es crítico en diseño de puentes, cables de elevadores o incluso en textiles que necesitan resistencia específica.

---

## 4. El límite elástico: cuando la proporcionalidad falla

La Ley de Hooke solo es válida dentro del **límite elástico** del material. Si se supera este punto, la deformación ya no es reversible: el material entra en un régimen plástico, donde las capas moleculares se deslizan y no recuperan su forma original. Este límite varía según el material y su tratamiento térmico o mecánico.

Determinar el límite elástico es crucial para evitar fallos estructurales. Por ejemplo, en un edificio, si las vigas se deforman más allá de este umbral bajo carga, podría colapsar. En laboratorios, se usan ensayos de tracción para medir este valor y garantizar que los materiales cumplan con estándares de seguridad.

---

## N. Conexión con lo que sigue

Este tema forma la base para entender conceptos como la **plasticidad** o el **módulo de corte**, que se exploran en `../modulo_de_corte/` y en análisis de fallos estructurales.