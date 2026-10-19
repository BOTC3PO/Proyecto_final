# Oficios — Electromecánico — Mantenimiento predictivo y gestión de órdenes de trabajo (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `mantenimiento-e-instrumentacion/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-electromecanico-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Tres maneras de mantener

El **mantenimiento correctivo** repara cuando algo falla: es el más caro porque la falla llega cuando menos se espera y detiene la producción. El **mantenimiento preventivo** se hace por calendario o por horas de uso, cambiando piezas antes de que fallen, a veces antes de lo necesario. El **mantenimiento predictivo** (o basado en condición) mide el estado real del equipo y decide intervenir cuando los datos muestran que la falla se aproxima. Una planta bien gestionada combina los tres según la importancia de cada equipo.

## Técnicas predictivas

La **termografía infrarroja** detecta puntos calientes en tableros, conexiones, motores y rodamientos, que indican malos contactos, sobrecargas o desgaste, sin parar la máquina. El **análisis de vibraciones** mide cómo vibra una máquina rotativa: cada falla (desbalanceo, desalineación, aflojamiento, rodamientos dañados) tiene un patrón característico, y su evolución en el tiempo anticipa el momento de intervenir. El **análisis de aceite** revela partículas de desgaste, contaminación y degradación del lubricante. El **ultrasonido** detecta fugas de aire comprimido y fallas de rodamientos. La **medición de corriente y aislación** de motores avisa sobre el deterioro de los bobinados. Todas estas técnicas requieren un valor de referencia: se compara cada medición con el estado normal del mismo equipo.

## La orden de trabajo

Una **orden de trabajo** es el documento que ordena una intervención. Registra qué equipo, cuál es el problema, quién lo pidió, quién lo hace, cuándo, qué repuestos y herramientas usó, cuánto tardó y qué encontró. Sin órdenes de trabajo no hay historia de las máquinas, y sin historia no se puede mejorar. El circuito básico es: se detecta la necesidad, se emite la orden, se prioriza, se programa, se ejecuta, se cierra con el informe y se actualiza el historial del equipo. En una planta se usan sistemas informáticos (CMMS) o planillas, pero lo importante es la disciplina de registrar.

## Indicadores

Dos indicadores muy usados son el **MTBF** (tiempo medio entre fallas), que indica cuánto funciona un equipo en promedio antes de fallar, y el **MTTR** (tiempo medio de reparación). La **disponibilidad** se calcula como MTBF dividido por la suma de MTBF y MTTR: si un equipo trabaja en promedio 190 horas entre fallas y tarda 10 horas en repararse, la disponibilidad es de 190 sobre 200, un 95 por ciento. Mejorar el mantenimiento significa alargar el MTBF y acortar el MTTR.

## Repuestos y almacén

Parar una línea porque falta un repuesto de bajo costo es un error caro. El almacén de repuestos se organiza por **criticidad**: los repuestos críticos (que detienen la producción y tardan en conseguirse) se mantienen en stock; los de rápida disponibilidad se piden cuando hacen falta. Cada repuesto se identifica, se codifica y se registra su consumo. Un stock excesivo inmoviliza dinero; uno escaso detiene la planta.

## Análisis de fallas

Cuando algo falla, repararlo es solo la mitad del trabajo: hay que preguntar **por qué falló**. Una técnica sencilla es la de los "cinco porqués": se repite la pregunta hasta llegar a la causa raíz. Un rodamiento que se rompe puede deberse a mala lubricación, desalineación, sobrecarga o instalación incorrecta; cambiarlo sin descubrir la causa garantiza que vuelva a fallar.

## Seguridad en el mantenimiento

Toda intervención sobre una máquina comienza con el **bloqueo y etiquetado** de las energías (eléctrica, hidráulica, neumática, mecánica): se corta, se bloquea con candado personal, se señaliza y se verifica la ausencia de energía antes de empezar. Esa regla protege a quien mantiene del arranque inesperado de la máquina.
