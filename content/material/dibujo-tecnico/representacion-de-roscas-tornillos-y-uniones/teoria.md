# Dibujo técnico — Representación de roscas, tornillos y uniones (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/representacion-de-roscas-tornillos-y-uniones`. Depende de `../cortes-y-secciones/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se dibujan, designan y acotan las roscas y los elementos de unión desmontable.

---

## 1. Roscas: una hélice que une

Una **rosca** es un surco helicoidal tallado en un cilindro (rosca exterior, la de un tornillo) o en un agujero (rosca interior, la de una tuerca). Convierte un giro en un avance y permite unir piezas de forma desmontable o transmitir movimiento (un gato de auto, un tornillo de banco). Dibujar el filete real de una rosca sería lento y confuso, por eso se usa una **representación convencional** normalizada.

## 2. Elementos de una rosca

- **Diámetro exterior (nominal)**: el mayor diámetro de la rosca; es el que da nombre a la medida.
- **Diámetro interior (de fondo o núcleo)**: el menor diámetro, en el fondo del filete.
- **Paso**: la distancia entre dos crestas consecutivas medida a lo largo del eje. Cuando se da una vuelta completa, el tornillo avanza un paso (en rosca de una sola entrada).
- **Ángulo del filete**: en las roscas métricas ISO es de 60°.
- **Sentido**: derecha (la más común: se aprieta girando en sentido horario) o izquierda.

## 3. Designación

Las roscas métricas ISO se designan con la letra **M** seguida del diámetro nominal en milímetros: **M10** es una rosca de 10 mm de diámetro. Para cada diámetro hay un paso normal ("grueso"), que no se escribe: M6 tiene paso 1 mm, M8 1,25 mm, M10 1,5 mm, M12 1,75 mm, M16 2 mm y M20 2,5 mm. Si se usa un paso fino se aclara: M10 × 1 significa diámetro 10 y paso 1 mm. Las roscas de tuberías (como las gas) y las de los tornillos para madera tienen otras designaciones.

## 4. Representación convencional

En una vista lateral de una rosca exterior: el diámetro exterior se dibuja con **línea continua gruesa** y el diámetro interior con **línea continua fina**. En la vista frontal (de punta) la línea fina se traza como un arco de aproximadamente tres cuartos de circunferencia. Una rosca interior (en un agujero) se dibuja al revés: el diámetro del núcleo con línea gruesa y el exterior con línea fina. El límite de la parte roscada se marca con una línea gruesa perpendicular al eje. En corte, el rayado llega hasta la línea gruesa que corresponde al núcleo en roscas exteriores.

En el plano se acota el diámetro nominal con su designación (por ejemplo M10), la longitud roscada y, cuando haga falta, el paso.

## 5. Elementos de unión

- **Tornillo**: se rosca en una pieza (en un agujero con rosca).
- **Perno**: se pasa por agujeros lisos y se ajusta con tuerca.
- **Tuerca**: pieza con rosca interior.
- **Arandela**: reparte la presión y evita aflojamientos.
- **Prisionero**, **bulón**, **remache** y **chaveta**: otros elementos de unión o ubicación.

Los tornillos y tuercas son piezas normalizadas: no se dibuja su plano de fabricación, se indican en la lista de piezas con su designación comercial, por ejemplo "Tornillo hexagonal M8 × 30".

## 6. Dibujo en conjuntos

En un corte de conjunto, un tornillo no se corta ni se raya (`cortes-y-secciones/`). Los agujeros de paso son un poco mayores que el diámetro del tornillo para que pase. La unión por tornillo es **desmontable**, a diferencia de la soldadura o el remachado, que son permanentes.

## N. Conexión con lo que sigue

La lectura de uniones en conjuntos se retoma en `interpretar-planos-de-piezas-y-conjuntos/` y la unión permanente, en `simbolos-de-soldadura-y-uniones/`.
