# Dibujo técnico — Dibujo asistido por computadora (CAD) (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/dibujo-asistido-por-computadora-cad`. Depende de `../acotacion-normalizada/` y `../escalas-numericas-y-graficas/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se dibuja en computadora: 2D, 3D, capas, bloques y salida a plano.

---

## 1. Del papel a la pantalla

**CAD** son las siglas en inglés de *Computer-Aided Design* (diseño asistido por computadora), y también se habla de dibujo asistido. La computadora no cambia las reglas del dibujo técnico: las líneas, las vistas, las cotas, las escalas y los rótulos siguen las mismas normas. Cambia el modo de trabajar: es más rápido corregir, copiar, reutilizar y compartir, y los dibujos tienen medidas exactas. Hay programas comerciales y también libres, como FreeCAD (modelado 3D) y LibreCAD (2D).

## 2. CAD 2D

En 2D se dibuja como en el papel pero con comandos: línea, círculo, arco, polilínea, rectángulo; y se modifica con recortar, extender, desfasar (offset), simetría, matriz, empalme (fillet) y chaflán, que son las construcciones de `geometria-constructiva-tangencias-y-enlaces/` automatizadas.

Conceptos clave:

- **Precisión por coordenadas**: se ingresan valores numéricos exactos (por coordenadas absolutas, relativas o polares) o se usan **referencias a objetos** (snap): punto final, medio, centro, perpendicular, tangente, intersección. Dibujar "a ojo" en pantalla produce errores invisibles.
- **Escala 1:1**: se dibuja siempre a tamaño real (en las unidades elegidas, milímetros, centímetros o metros) y la escala se aplica solo al imprimir o al armar la hoja.
- **Capas**: cada elemento se asigna a una capa (contorno, cotas, ejes, texto, rayado), con su color, tipo y grosor de línea. Permiten mostrar, ocultar y modificar grupos y garantizan que las líneas respeten la jerarquía normalizada.
- **Bloques**: grupos de objetos reutilizables, como una puerta, un tornillo o un símbolo eléctrico. Si se modifica la definición, se actualizan todas las copias.
- **Estilos de cota**: configuran flechas, tamaño de texto y unidades para acotar de manera consistente.
- **Plantillas**: archivos con unidades, capas, estilos y rótulo ya configurados.

## 3. CAD 3D

En 3D se construye un **modelo** de la pieza. Hay varios tipos:

- **Alámbrico**: solo aristas.
- **Superficies**: la cáscara de la pieza.
- **Sólido**: volumen con propiedades físicas. Es el más usado en mecánica. Se crea a partir de un boceto 2D al que se aplica una operación: **extrusión**, **revolución**, **barrido**, entre otras, y se modifica con cortes, agujeros, redondeos y patrones.
- **Paramétrico**: las medidas y relaciones se guardan como parámetros, de modo que cambiar una cota actualiza todo el modelo.

Del modelo 3D se obtienen automáticamente las **vistas, cortes y secciones** del plano, y se generan listas de piezas. También sirve para simular, calcular masas y volúmenes y producir la pieza con impresión 3D o máquinas CNC.

## 4. Salida a plano

El trabajo termina en una hoja: se elige el formato (`tipos-de-linea-formatos-y-rotulo/`), se coloca el rótulo, se disponen las vistas con su escala, se completan las cotas, se revisa y se exporta, habitualmente a PDF para imprimir o compartir. Existen formatos de intercambio, como DXF y DWG para 2D, y STEP para 3D, que permiten abrir modelos en programas distintos.

## 5. Ventajas y cuidados

Ventajas: velocidad, precisión, reutilización, trabajo en equipo y versiones. Cuidados: depender de la computadora no reemplaza entender el dibujo técnico; un dibujo mal acotado o con escala errónea sale mal aunque se vea prolijo; y hay que hacer copias de seguridad y controlar versiones.

## N. Conexión con lo que sigue

El CAD es la herramienta con la que se hacen hoy los planos de `dibujo-arquitectonico-plantas-cortes-y-fachadas/` y `dibujo-electrico-y-esquemas-de-instalaciones/`.
