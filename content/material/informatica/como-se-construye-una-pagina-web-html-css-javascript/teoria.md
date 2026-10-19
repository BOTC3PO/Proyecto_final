# Informática — Cómo se construye una página web: HTML, CSS y JavaScript (teoría)

> Tema propuesto en `../../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Depende de `../protocolo-http-peticion-respuesta/` (ver `../dependencias.md`). Es la visión conceptual; el detalle técnico está en `../../oficios/frontend/html-semantico/` y `../../oficios/frontend/css-y-maquetacion/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — el recorrido de una página, los tres lenguajes y el DOM son secciones separables.

---

## 1. Qué pasa cuando abrís una página

Cuando escribís una dirección en el navegador ocurre este recorrido (ver `../protocolo-http-peticion-respuesta/` y `../direccionamiento-ip-dns/`):

1. El navegador consulta el **DNS** para traducir el nombre a una dirección IP.
2. Envía una **petición HTTP** al servidor.
3. El servidor responde con un archivo **HTML** (y otros recursos: estilos, imágenes, scripts).
4. El navegador **interpreta** el HTML, pide los demás archivos y **dibuja** la página.

El navegador es el programa que hace de cliente; el servidor es la computadora que guarda y entrega los archivos.

## 2. Tres lenguajes, tres funciones

Una página web combina tres tecnologías con tareas distintas:

| Lenguaje | Función | Metáfora |
|---|---|---|
| **HTML** | Estructura y contenido: títulos, párrafos, listas, enlaces, imágenes | El esqueleto |
| **CSS** | Presentación: colores, tipografía, tamaños, disposición | La ropa y el diseño |
| **JavaScript** | Comportamiento: reacciona a clics, valida formularios, actualiza contenido | Los músculos |

HTML y CSS **no son lenguajes de programación**: describen contenido y estilo, no tienen lógica de bucles ni condiciones. JavaScript sí es un lenguaje de programación.

## 3. HTML: etiquetas y estructura

HTML (*HyperText Markup Language*) usa **etiquetas** entre signos menor y mayor, que suelen abrirse y cerrarse: un párrafo es `<p>texto</p>`. Una etiqueta puede tener **atributos**: un enlace usa `<a href="...">` y una imagen `<img src="..." alt="...">`; el atributo `alt` es el texto alternativo que lee un lector de pantalla. Un documento básico tiene `<html>`, dentro `<head>` (información sobre la página, como el título) y `<body>` (lo que se ve). Usar las etiquetas por su significado (títulos con `<h1>` a `<h6>`, listas con `<ul>`, navegación con `<nav>`) es el **HTML semántico**, que ayuda a la accesibilidad y a los buscadores.

## 4. CSS: reglas de estilo

Una regla CSS tiene un **selector** (a qué elementos se aplica) y **declaraciones** con propiedad y valor. Por ejemplo, una regla que pinta de azul los párrafos y agranda su letra. Hay selectores por etiqueta, por **clase** (se escribe con punto) y por **identificador** (con numeral). Cada elemento se representa como una **caja** con contenido, relleno (*padding*), borde y margen. Cuando varias reglas chocan, decide la **cascada**: se compara la especificidad y el orden. Se puede escribir el CSS en un archivo aparte, que es lo recomendable, para reutilizarlo en muchas páginas.

## 5. JavaScript y el DOM

Cuando el navegador lee el HTML construye un **árbol de objetos** llamado **DOM** (*Document Object Model*), una representación de la página que se puede modificar. JavaScript accede al DOM para cambiar texto, agregar o quitar elementos y responder a **eventos** como un clic. Así una página deja de ser un documento fijo y pasa a ser una aplicación interactiva.

## 6. Páginas estáticas y dinámicas

- **Estática**: el servidor entrega siempre el mismo archivo.
- **Dinámica**: el contenido se arma según el usuario o los datos (por ejemplo desde una base, ver `../sql-consultas-joins-agregaciones/`), ya sea en el servidor o en el navegador.

## 7. Herramientas para explorar

Los navegadores traen **herramientas para desarrolladores** (suele abrirse con F12) que permiten ver el HTML, probar CSS y revisar los pedidos de red. Es una forma excelente de aprender mirando cómo están hechas las páginas.

## Conexión con lo que sigue

El desarrollo web profundiza en los oficios de programación (`../../oficios/frontend/html-semantico/`, `../../oficios/frontend/css-y-maquetacion/`, `../../oficios/frontend/javascript-fundamentos/`).
