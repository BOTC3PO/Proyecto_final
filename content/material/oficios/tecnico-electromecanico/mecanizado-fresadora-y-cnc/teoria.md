# Oficios — Técnico Electromecánico — Mecanizado: fresadora y control numérico CNC (teoria)

> Tema propuesto en `../../../_plan-faltantes/confirmar-oficios-2.md` y `confirmar-oficios-5.md` (el torno vive en `../../tornero/`; acá solo fresadora y CNC). Sin ID en `troncos.md` todavía. Depende de `materiales-y-mecanizado-electromecanica/` (ver `../../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Qué hace una fresadora

El torno hace girar la pieza y deja quieta la herramienta. La fresadora hace lo contrario: gira la herramienta, la **fresa**, y la pieza se sujeta y se mueve debajo de ella. Por eso sirve para superficies planas, ranuras, escalones, agujeros ubicados con precisión y formas que un torno no puede hacer. El torno (cilindrado, roscado, taladrado, refrigeración) está en `../../tornero/`.

Según la posición del husillo, la fresadora puede ser **vertical** (la fresa apunta hacia abajo, ideal para ranuras, agujeros y caras planas) u **horizontal** (la fresa gira sobre un eje horizontal, común en trabajos de ranurado profundo). La mesa se desplaza en los tres ejes: **X** (izquierda-derecha), **Y** (adelante-atrás) y **Z** (arriba-abajo).

## Herramientas y operaciones

Una fresa tiene varios filos, llamados dientes, y cada uno corta un poco por cada vuelta. Las más comunes son la **fresa frontal** (para planear caras anchas), la **fresa de vástago** o de punta (para ranuras, escalones y contornos) y la **fresa de disco** (para ranuras rectas). El material del filo puede ser acero rápido, que es más económico y tolerante, o metal duro, que aguanta más velocidad y calor.

## Parámetros de corte

Igual que en el torno, hay tres decisiones: la velocidad de corte, el avance y la profundidad. La **velocidad de corte** (vc, en metros por minuto) depende del material de la pieza y del de la herramienta, y se toma de las recomendaciones del fabricante de la fresa. Lo que se regula en la máquina son las **revoluciones por minuto** (n). La relación es:

vc = π × D × n ÷ 1000, con D en milímetros (el diámetro de la fresa), n en rpm y vc en m/min.

Despejando, n = vc × 1000 ÷ (π × D). El **avance por diente** (fz, en mm por diente) también lo indica el fabricante. La **velocidad de avance de la mesa** (vf, en mm/min) resulta de multiplicar fz por la cantidad de dientes z y por las revoluciones: vf = fz × z × n. Con material más duro se baja la velocidad.

## Sentido de corte

En el fresado **concordante** la fresa gira en el mismo sentido en que avanza la pieza en la zona de corte: el filo entra con el espesor máximo de viruta y lo reduce hasta cero, lo que da buen acabado pero exige una mesa sin holgura. En el **convencional** (o discordante) el sentido es el contrario: el filo empieza con viruta casi nula y la va aumentando. En máquinas manuales con holgura se prefiere el convencional; en máquinas rígidas y CNC suele preferirse el concordante.

## Sujeción de la pieza

Una pieza mal sujeta se mueve, vibra y puede salir despedida. Se sujeta con **morsa** (la más usada) o con **bridas y bulones** a la mesa. Debe apoyar bien, sin torcerse al apretar, y la fresa nunca debe tocar la morsa.

## Control numérico CNC

En una máquina **CNC** (control numérico computarizado) el movimiento de los ejes lo comanda un programa en lugar de las manos del operario. El programa se escribe en **código G**, un lenguaje de líneas simples. Las instrucciones básicas:

- **G00**: movimiento rápido de posicionamiento, sin cortar.
- **G01**: movimiento en línea recta cortando, con avance programado (F).
- **G02** y **G03**: arcos de circunferencia, en sentido horario (G02) y antihorario (G03); hay que indicar el punto final y el centro del arco (con I y J). Los controles pueden diferir: se consulta siempre el manual de la máquina.
- **M03** enciende el husillo en sentido horario y **M05** lo detiene.
- **G90** trabaja en coordenadas absolutas (respecto del origen) y **G91** en coordenadas incrementales (respecto de la posición actual).

El **cero de pieza** es el punto de origen del programa sobre la pieza. Se lo registra en la máquina como una compensación de origen (en muchos controles, G54 y siguientes; depende del control). También se cargan las **compensaciones de herramienta** (largo y diámetro), porque cada fresa mide distinto.

## Antes de cortar: simulación y primera pieza

Antes de mecanizar se **simula** el programa para ver que el recorrido no choque contra la morsa ni salga de los límites. Después se hace la primera pasada con el avance reducido y una mano sobre la parada de emergencia. Los errores más graves son un cero mal tomado, una herramienta mal medida y un G00 que baja en rápido contra la pieza.

## Seguridad

Rigen la Ley 19.587 de higiene y seguridad en el trabajo y su Decreto Reglamentario 351/79, que obligan a proteger las partes móviles de las máquinas. En una fresadora, la regla es: máquina detenida para sujetar, medir o cambiar herramienta; protecciones y puertas cerradas al cortar; las virutas se sacan con pincel o gancho, nunca con la mano; y no se usan guantes ni pulseras ni cabello suelto cerca del husillo, porque pueden quedar atrapados. Se usan anteojos de protección y calzado de seguridad.

## Conexión con lo que sigue

Se apoya en `../materiales-y-mecanizado-electromecanica/`, se complementa con `../../tornero/` y con `../seguridad-electromecanica/`.
