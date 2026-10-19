# Oficios — Mecánico — Inyección electrónica y sensores (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `motor/, sistemas-electricos-vehiculo/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-automotor-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Del carburador a la computadora

En los motores de nafta modernos, la mezcla de aire y combustible la controla una computadora, la **unidad de control del motor** (ECU). Recibe información de sensores, la compara con mapas guardados en su memoria y decide cuánto combustible inyectar y cuándo hacer saltar la chispa. La inyección se hace con **inyectores**, válvulas electromagnéticas que pulverizan combustible a presión; la ECU controla cuánto tiempo permanecen abiertos, y ese tiempo, medido en milisegundos, determina la cantidad inyectada.

## La relación aire-combustible

Para quemar completamente la nafta se necesitan unos 14,7 kg de aire por cada kilo de combustible. Esa proporción se llama **estequiométrica** y corresponde a lambda igual a 1. Con lambda menor que 1 la mezcla es rica, con exceso de combustible; con lambda mayor que 1 es pobre, con exceso de aire. El catalizador de tres vías funciona mejor cuando la mezcla oscila muy cerca de lambda 1, y por eso la ECU la corrige continuamente.

## Los sensores principales

El **sensor de posición del cigüeñal** informa el régimen y la posición exacta del motor; sin esta señal, la ECU no inyecta ni da chispa y el motor no arranca. El **sensor de fase** (árbol de levas) identifica en qué ciclo está cada cilindro. Para saber cuánto aire entra, se usa un **sensor de presión del múltiple** (MAP) o un **medidor de caudal de masa de aire** (MAF). El **sensor de posición de la mariposa** indica cuánto pide el conductor. El **sensor de temperatura del refrigerante** permite enriquecer la mezcla en frío, y el de temperatura del aire de admisión corrige por densidad. La **sonda lambda**, instalada en el escape, mide el oxígeno que sobra y le dice a la ECU si la mezcla salió rica o pobre; con esa información la ECU hace correcciones de corto y largo plazo. Un sensor de detonación (knock) escucha vibraciones del bloque y permite retrasar el encendido para proteger al motor.

## Qué hace la ECU con esos datos

La ECU calcula la carga del motor, busca en su mapa el tiempo de inyección base y lo corrige según temperatura, lambda y otras condiciones. En ralentí controla el régimen mediante una válvula o con la propia mariposa electrónica. Si una señal está fuera de rango o es incoherente, la ECU guarda un **código de falla** y, según el caso, enciende la luz de falla del tablero y pasa a un modo de emergencia con valores sustitutos.

## Cómo se relaciona con los códigos OBD

La interfaz de diagnóstico a bordo permite leer esos códigos con un escáner. Los códigos que empiezan con P corresponden al motor y la transmisión. Un código señala **dónde** el sistema detectó una anomalía, no necesariamente **qué pieza está rota**. Por ejemplo, un código de mezcla pobre puede deberse a una toma de aire falsa, un inyector tapado, baja presión de combustible o un medidor de caudal sucio, y no siempre a una sonda lambda defectuosa. Cambiar piezas por intuición es caro y suele fallar.

## Método de diagnóstico

Un diagnóstico ordenado empieza por lo simple: revisar el estado de la batería y sus bornes, el nivel de combustible, filtros y mangueras de admisión. Luego se lee la memoria de fallas y los **datos en vivo**: temperaturas, correcciones de combustible, régimen y señal de la sonda. Se compara con valores esperados, se identifica el sistema sospechoso y recién entonces se mide con multímetro u osciloscopio. Finalmente, se repara, se borran los códigos y se verifica con una prueba de ruta. Es importante anotar los códigos antes de borrarlos.

## Mantenimiento que previene fallas

Los inyectores se ensucian con combustibles de mala calidad; el filtro de combustible y el de aire cumplen una función real; los conectores se sulfatan con la humedad; y las masas flojas generan señales erráticas. Antes de condenar un componente caro, conviene revisar cableado, conectores y masas, que son la causa más frecuente de fallas intermitentes.
