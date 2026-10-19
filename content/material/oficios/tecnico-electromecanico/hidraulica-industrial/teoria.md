# Oficios — Electromecánico — Hidráulica industrial (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `elementos-de-maquinas-y-fluidos/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-electromecanico-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Transmitir fuerza con un líquido

La **hidráulica** usa un líquido a presión, generalmente aceite, para transmitir energía y producir fuerzas muy grandes con componentes compactos. Es la tecnología detrás de las prensas, las excavadoras, los autoelevadores, los frenos y los aparatos de elevación. Se basa en el **principio de Pascal**: la presión aplicada a un fluido encerrado se transmite con igual intensidad en todas las direcciones.

## Presión, fuerza y caudal

La relación fundamental es **F = p × A**: la fuerza que entrega un cilindro es la presión por el área del émbolo. Con una presión de 100 bar (10 MPa) sobre un émbolo de 50 cm² se obtienen 50.000 N, unos 5.000 kilogramos fuerza. La **velocidad** del cilindro depende del **caudal** que le llega, dividido por el área. Es decir, la presión determina cuánta fuerza, y el caudal cuánta velocidad. La potencia hidráulica es el producto de presión por caudal.

## Los componentes de un circuito

El **depósito** almacena el aceite, lo enfría y deja separar aire e impurezas. La **bomba** convierte la energía mecánica del motor en caudal; no crea presión, la presión aparece cuando hay resistencia a ese caudal. Los tipos más comunes son de **engranajes**, de **paletas** y de **pistones**, estas últimas de mayor presión y rendimiento. El **motor eléctrico** o térmico acciona la bomba. Las **válvulas** controlan el circuito: las **direccionales** (por ejemplo 4/3, cuatro vías y tres posiciones) deciden hacia qué lado va el aceite; las **de alivio** o de seguridad abren cuando la presión supera un valor, y protegen al sistema; las **reguladoras de caudal** controlan la velocidad; las **antirretorno** dejan pasar el aceite en un solo sentido. Los **actuadores** transforman la energía hidráulica en movimiento: **cilindros** (movimiento lineal, de simple o doble efecto) y **motores hidráulicos** (giratorio). Los **filtros** retienen partículas; los **acumuladores** almacenan energía y amortiguan golpes de presión.

## El fluido

El aceite hidráulico transmite energía, pero también **lubrica, refrigera y protege contra la corrosión**. Se elige por su **viscosidad** (por ejemplo, grados ISO VG) según la temperatura de trabajo. La contaminación es la primera causa de fallas: partículas desgastan bombas y válvulas, y el agua y el aire degradan el aceite. Por eso se filtra, se respetan las periodicidades de cambio y se evita abrir circuitos sin limpieza.

## Los símbolos y los esquemas

Los circuitos se representan con símbolos normalizados (la familia de normas ISO 1219), que muestran cada componente y su función sin dibujar su forma real. Leer un esquema hidráulico es una competencia básica del técnico: permite seguir el recorrido del aceite en cada posición de las válvulas.

## Fallas típicas

Falta de presión: el alivio abierto o mal regulado, bomba desgastada, fugas internas. Falta de velocidad: caudal insuficiente, filtro tapado, aceite muy frío o muy caliente. Golpes y vibraciones: aire en el circuito. Recalentamiento: exceso de caída de presión a través de válvulas, enfriador sucio, aceite de viscosidad inadecuada. Fugas en mangueras y racores: no se aprietan con el sistema presurizado.

## Seguridad

La hidráulica trabaja con presiones que pueden **penetrar la piel**: un chorro fino de aceite a presión puede inyectarse en la mano y causar una lesión grave; **nunca se busca una fuga con la mano**, se usa un cartón. Antes de abrir cualquier línea, se **descarga la presión** del circuito y de los acumuladores, y se **bloquea y etiqueta** la energía. Las cargas suspendidas por cilindros deben quedar apoyadas mecánicamente. El aceite caliente quema, y el aceite derramado es riesgo de resbalón y residuo especial.
