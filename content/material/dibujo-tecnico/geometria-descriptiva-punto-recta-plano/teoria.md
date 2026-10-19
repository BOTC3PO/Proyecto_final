# Dibujo técnico — Geometría descriptiva: punto, recta y plano (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/geometria-descriptiva-punto-recta-plano`. Depende de `../sistemas-de-proyeccion/` y `../../matematica/rectas-paralelas-y-perpendiculares/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — El método de doble proyección ortogonal para resolver problemas en el espacio.

---

## 1. Resolver el espacio con dibujos planos

La **geometría descriptiva** estudia cómo representar en el plano los elementos del espacio (puntos, rectas, planos, cuerpos) y cómo resolver con construcciones gráficas problemas como la distancia entre dos rectas, la intersección de dos planos o la verdadera magnitud de un segmento. Su creador, **Gaspard Monge**, la sistematizó a fines del siglo XVIII. Es la base científica de las vistas del dibujo técnico.

## 2. El método de Monge

Se usan dos planos de proyección perpendiculares: el **horizontal** (H) y el **vertical** (V). Su intersección es la **línea de tierra**. Un punto del espacio se proyecta ortogonalmente sobre ambos planos y se obtienen sus proyecciones horizontal y vertical. Luego se **abate** el plano horizontal girándolo 90° hasta coincidir con el vertical, y así las dos proyecciones quedan en una misma hoja, alineadas sobre una perpendicular a la línea de tierra (la **línea de referencia**).

La posición de un punto queda dada por:
- su **distancia al plano horizontal** (cota), visible en la proyección vertical como la distancia a la línea de tierra;
- su **distancia al plano vertical** (alejamiento), visible en la proyección horizontal;
- su ubicación lateral, común a las dos.

## 3. Punto

Un punto tiene sus proyecciones P' (vertical) y P (horizontal). Según su posición puede estar en el primer, segundo, tercer o cuarto diedro, que son las cuatro regiones en que los planos dividen al espacio. El dibujo técnico trabaja habitualmente en el primer diedro (sistema europeo, método E de las normas IRAM e ISO) o en el tercero (sistema americano).

## 4. Recta

Una recta queda definida por dos puntos; se proyecta uniendo sus proyecciones. Según su posición:

- **Horizontal**: paralela al plano horizontal; se ve en verdadera magnitud en la proyección horizontal.
- **Frontal**: paralela al plano vertical; se ve en verdadera magnitud en la proyección vertical.
- **De perfil**: contenida en un plano perpendicular a la línea de tierra.
- **Oblicua**: no paralela a ningún plano; ambas proyecciones están acortadas.
- **Vertical**: perpendicular al plano horizontal; se proyecta como un punto en él.

La **verdadera magnitud** de una recta oblicua no se ve directamente; se obtiene girándola hasta ponerla paralela a un plano, o por el método del triángulo rectángulo (se construye un triángulo con la diferencia de cotas y la proyección horizontal como catetos; su hipotenusa es la longitud real, usando el teorema de Pitágoras de `matematica/teorema-de-pitagoras/`).

## 5. Plano

Un plano queda definido por tres puntos no alineados, una recta y un punto, o dos rectas que se cortan o son paralelas. También se representa por sus **trazas**, las rectas donde corta a los planos de proyección. Los planos pueden ser horizontales, frontales, verticales, de canto, proyectantes u oblicuos, y la verdadera forma de una figura plana se obtiene mediante un cambio de plano de proyección o un abatimiento, lo mismo que una vista auxiliar (`vistas-auxiliares-y-detalles/`).

## 6. Problemas típicos

Pertenencia de un punto a una recta o plano, paralelismo y perpendicularidad, intersección de recta y plano, intersección de dos planos, distancias y ángulos. Cada uno se resuelve con construcciones auxiliares sobre las dos proyecciones.

## N. Conexión con lo que sigue

Es el fundamento teórico de las vistas y los cortes y se aplica en el trazado de desarrollos, intersecciones de cuerpos y en la geometría 3D del CAD (`dibujo-asistido-por-computadora-cad/`).
