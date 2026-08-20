# Diseño — Accesibilidad WCAG: contraste y lectores de pantalla (teoría)

> Tema del MAPA: `diseño/accesibilidad-wcag-contraste-lectores-de-pantalla`. Depende de accesibilidad wcag conceptos (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Explicación de los requisitos técnicos para garantizar la accesibilidad en interfaces digitales.

---

## 1. WCAG: el marco global de accesibilidad

WCAG son las *Web Content Accessibility Guidelines*, o Pautas de Accesibilidad para el Contenido Web, un estándar internacional que define cómo hacer contenido digital usable por personas con discapacidades visuales, auditivas, motoras o cognitivas. Estas pautas no solo regulan la legibilidad del texto, sino también la compatibilidad con tecnologías de asistencia como los lectores de pantalla y las herramientas de navegación alternativas. Su implementación es clave para cumplir con normativas legales en muchos países, incluido Argentina.

---

## 2. Contraste de color: más que una cuestión estética

El contraste entre texto y fondo no es un detalle decorativo: es una condición técnica fundamental. Para garantizar la legibilidad, el ratio de contraste debe ser al menos de **4.5:1** para textos normales (como párrafos) y **3:1** para elementos grandes como títulos o botones. Un texto gris claro sobre fondo blanco [IMAGEN: herramienta de medición de contraste con ejemplo de texto en gris y fondo blanco] falla este requisito, mientras que el negro sobre blanco cumple. Este contraste no solo beneficia a usuarios con baja visión, sino también a quienes usan dispositivos en entornos brillantes o con pantallas pequeñas.

---

## 3. Lectores de pantalla: la semántica del HTML

Los lectores de pantalla son herramientas que traducen el contenido web a audio o braille para usuarios con discapacidad visual. Para funcionar correctamente, necesitan que el código HTML tenga una estructura lógica y semántica. Por ejemplo, usar `<h1>` para títulos principales, `<p>` para párrafos y `<nav>` para menús no solo organiza mejor la información del navegador, sino que también permite a los lectores de pantalla navegar por el contenido de forma coherente. Un uso incorrecto (como colocar un `<h2>` dentro de un `<div>`) puede confundir a estos usuarios.

---

## 4. El balance entre estética y accesibilidad

A menudo, diseñadores priorizan colores llamativos o estructuras visuales innovadoras sin considerar su impacto en la accesibilidad. Por ejemplo, usar gradientes de color para resaltar elementos puede mejorar la estética, pero si no se respeta el contraste mínimo requerido, inhabilita a usuarios con discapacidad visual. Lo mismo ocurre al depender exclusivamente de imágenes para transmitir información: un lector de pantalla no podrá interpretar una flecha roja en lugar de un texto explicativo como "Siguiente".

---

## N. Conexión con lo que sigue

Este tema conecta con niveles wcag (ver `../dependencias.md`) para entender cómo los requisitos de contraste y semántica se integran dentro de los cuatro niveles de cumplimiento WCAG (A, AA, AAA).