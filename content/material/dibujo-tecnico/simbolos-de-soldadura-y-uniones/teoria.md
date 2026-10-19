# Dibujo técnico — Símbolos de soldadura y uniones (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/simbolos-de-soldadura-y-uniones`. Depende de `../interpretar-planos-de-piezas-y-conjuntos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo indica un plano qué soldadura hacer, dónde y cómo.

---

## 1. La soldadura como unión permanente

A diferencia de los tornillos, la soldadura une piezas de manera **permanente**, fundiendo el material en la zona de unión (con o sin aporte de otro). Se usa en estructuras metálicas, tuberías, carrocerías y maquinaria. Como no se puede desmontar, el plano debe indicar con precisión qué tipo de unión se pide, su tamaño y dónde va. Para eso existen **símbolos normalizados** (en la ISO 2553, y en la AWS A2.4 en Estados Unidos). Hay diferencias de forma entre ambas, así que conviene verificar cuál usa la empresa.

## 2. Tipos de unión y de cordón

- **Uniones**: a tope (dos piezas en el mismo plano), en T, en ángulo (esquina), a solape (una pieza sobre otra) y de canto.
- **Cordones frecuentes**: de **filete** (en la intersección de dos piezas, de sección triangular), **a tope** con distintos preparados de borde (en I, en V, en X, en U), de tapón o ranura, y por puntos.

## 3. Partes del símbolo

El símbolo de soldadura en el plano se compone de:

- **Flecha**: apunta a la unión que se debe soldar.
- **Línea de referencia**: línea horizontal unida a la flecha, sobre la que se escriben las indicaciones.
- **Símbolo elemental**: la forma del cordón, por ejemplo un triángulo para el cordón de filete, una V para el cordón a tope en V.
- **Dimensiones**: el tamaño del cordón, como el cateto o la garganta del filete, y la longitud, a la izquierda y derecha del símbolo según el caso.
- **Indicaciones complementarias**: un círculo en el vértice significa soldadura en todo el contorno; una bandera indica soldadura en obra y no en taller; y se puede agregar proceso, material de aporte y normas.

## 4. Lado de la flecha y lado opuesto

El símbolo se escribe **debajo** de la línea de referencia si la soldadura está del **lado de la flecha**, y **encima** si está del lado opuesto. Si se necesita de ambos lados, se coloca en los dos. La convención tiene variantes entre normas, por eso hay que interpretar el símbolo según la norma indicada en el plano.

## 5. Cómo se lee

1. Encontrar la flecha y qué unión señala.
2. Ver en qué lado de la línea está el símbolo (flecha u opuesto).
3. Reconocer la forma del cordón.
4. Leer dimensiones, longitud, repeticiones.
5. Ver las indicaciones: todo el contorno, en obra, proceso.

## 6. Otras uniones permanentes

Además de la soldadura, se representan el **remachado** (unión con remaches), el **pegado** (adhesivos) y el **bridado**. En el oficio de soldador se profundizan los procesos, posiciones y seguridad (`oficios/soldador/`); acá solo se aprende a leer lo que el plano pide.

## 7. Seguridad e inspección

El plano puede indicar ensayos no destructivos (por ejemplo, líquidos penetrantes, ultrasonido, radiografía) y niveles de calidad para soldaduras críticas. Esos requisitos no son opcionales: forman parte de la especificación.

## N. Conexión con lo que sigue

Cierra la parte de lectura de uniones. Para su aplicación práctica véase el oficio `oficios/soldador/`.
