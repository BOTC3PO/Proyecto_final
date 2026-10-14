# Diseño gráfico — Prototipado de interfaces (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../vectorial/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/diseno-grafico/prototipado/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es un prototipo

Un **prototipo** es una **simulación** de un producto digital (una aplicación, un sitio) que permite **probar la idea** antes de programarla. Sirve para **validar con usuarios**, **comunicar** lo que se piensa construir y **detectar problemas** cuando todavía **cuesta poco** cambiarlos.

Hay niveles de **fidelidad**:

| Nivel | Qué es | Para qué |
|:--|:--|:--|
| **Boceto** | dibujo rápido en papel | explorar ideas |
| **Wireframe** | esquema en **blanco y negro**, sin diseño visual | definir **estructura y contenido** |
| **Mockup** | **diseño visual** completo (colores, tipografía, imágenes), estático | definir el **aspecto** |
| **Prototipo interactivo** | **pantallas conectadas** que se pueden **tocar** | simular el **recorrido** |

---

## 2. Proceso

1. **Entender** al usuario y el problema (investigación).
2. **Bocetar** y definir el **flujo** (qué pantallas y en qué orden).
3. Armar **wireframes**.
4. Diseñar la **interfaz** (mockups).
5. **Conectar** las pantallas (prototipo).
6. **Probar** con personas reales y **mejorar**.
7. **Entregar** al equipo de desarrollo (medidas, estados, recursos).

---

## 3. Herramientas

**Figma**, **Adobe XD**, **Sketch**, **Penpot** (libre), **Balsamiq** (wireframes), o **papel y lápiz**. Muchas trabajan **en línea y en colaboración**.

Conceptos en Figma (y similares):

- **Frame (marco):** una pantalla o contenedor, con un tamaño de dispositivo.
- **Componentes:** elementos **reutilizables** (un botón); al cambiar el original, **cambian todas las copias**.
- **Variantes:** estados de un componente (normal, presionado, deshabilitado).
- **Auto layout:** el contenedor **se adapta** al contenido.
- **Estilos** de color, texto y efectos; **variables** para temas.
- **Cuadrículas y restricciones:** ayudan a **alinear** y a que el diseño se **adapte** a distintos tamaños.

---

## 4. Interacciones

Un prototipo conecta **elementos** con **destinos**, con:

- **Disparador:** al hacer clic o tocar, al pasar el mouse (*hover*), al arrastrar, después de un tiempo.
- **Acción:** ir a otra pantalla, abrir una ventana superpuesta, volver, cambiar de estado.
- **Animación:** transiciones (deslizar, disolver, **animación inteligente** entre estados).

Las **micro-interacciones** (el botón que se hunde, el corazón que se llena) dan **respuesta** al usuario. **Que sean breves** (de décimas de segundo a unos 500 ms) y **con sentido**.

---

## 5. Principios de buen diseño de interfaces

- **Jerarquía visual:** lo más importante se ve primero (tamaño, color, posición).
- **Consistencia:** los mismos elementos se ven y se comportan igual.
- **Retroalimentación:** el sistema **responde** a cada acción (carga, éxito, error).
- **Simplicidad:** una **acción principal** por pantalla.
- **Espaciado** con una **cuadrícula** (por ejemplo, múltiplos de 8).
- **Tamaño de los botones táctiles:** de unos **44 a 48 puntos** como mínimo.
- **Contraste suficiente** (relación mínima de **4,5:1** para el texto normal, según las pautas WCAG AA).
- **No depender solo del color** para transmitir información.
- **Textos claros** y mensajes de error que **ayudan** a corregir.

---

## 6. Probar con usuarios

- Pedir a **personas reales** que hagan **tareas** ("encontrá y comprá un producto") **sin explicarles** cómo.
- **Observar** dónde dudan o se equivocan y **escuchar** lo que dicen.
- Con **unas 5 personas** ya se detectan muchos de los problemas principales; se repite después de mejorar.
- **No guiar ni defender** el diseño: **tomar notas** y **corregir**.
- Cuidar la **privacidad** y pedir **permiso** si se graba.

---

## 7. Entrega

Al pasar al desarrollo se entregan: **pantallas y flujos**, **componentes y estados**, **medidas y colores** (Figma permite inspeccionarlos), **recursos exportados** (íconos, imágenes) y **notas** de comportamiento. Una buena **comunicación** con quienes programan evita malentendidos.
