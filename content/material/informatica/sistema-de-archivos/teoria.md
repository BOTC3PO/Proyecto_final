# Informática — Sistema de archivos (teoría)

> Tema del MAPA: `informatica/sistema-de-archivos`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación del funcionamiento interno del almacenamiento digital y su organización.

---

## 1. ¿Qué es un sistema de archivos?

Un sistema de archivos es el **software** que permite al sistema operativo gestionar cómo los datos se guardan, organizan y recuperan en dispositivos como discos duros, pendrives o tarjetas SD. Sin él, no sería posible navegar por carpetas, abrir documentos ni incluso guardar una imagen: todo estaría desordenado como un cajón lleno de papeles sin etiquetas.

Este software define reglas sobre cómo se estructuran los datos en el disco, qué información se guarda junto con cada archivo (como su tamaño o quién lo creó) y cómo se accede a ellos. Por ejemplo, cuando guardás un texto en tu computadora, el sistema de archivos decide dónde ubicarlo físicamente en el disco, cuánto espacio ocupa y si otros usuarios pueden verlo o modificarlo.

---

## 2. Estructura jerárquica de directorios

La forma más común en que los sistemas operativos organizan la información es mediante una **estructura jerárquica**, similar a un árbol. Todo comienza con una raíz (por ejemplo, `C:\` en Windows o `/` en Linux), desde donde se ramifican directorios y subdirectorios como carpetas dentro de otras carpetas.

Esta organización permite agrupar archivos según su uso: imágenes en una carpeta, documentos en otra, y así evitar que todo esté mezclado. Por ejemplo, un usuario podría tener la estructura:

```
C:\
  Usuarios\
    Ana\
      Documentos\
        informe.docx
      Imágenes\
        vacaciones.jpg
```

Para acceder a un archivo, se usa una **ruta** (path) que indica su posición desde la raíz. Estas rutas pueden ser absolutas (`C:\Usuarios\Ana\Documentos\informe.docx`) o relativas (como `Documentos\informe.docx` si ya estás en `Usuarios\Ana`).

[IMAGEN: Árbol jerárquico con raíz, directorios y archivos]

---

## 3. Metadatos y atributos de los archivos

Además del contenido mismo, cada archivo tiene **metadatos**, que son "datos sobre los datos". Estos incluyen información como:

- **Tamaño**: cuánto espacio ocupa el archivo en el disco.
- **Fecha de creación/modificación**: para saber cuándo se generó o editó por última vez.
- **Permisos de acceso**: quién puede leer, escribir o ejecutar el archivo (por ejemplo, solo el dueño, todos los usuarios del sistema, etc.).

Los metadatos no son visibles cuando abrís un archivo, pero son esenciales para que el sistema operativo funcione. Por ejemplo, si un archivo tiene permisos de lectura solamente, nadie podrá editarlo aunque lo vea.

[IMAGEN: Tabla comparando atributos de dos archivos distintos]

---

## 4. Tipos de sistemas de archivos

Existen diferentes **formatos** de sistema de archivos, cada uno con reglas específicas para organizar datos. Algunos ejemplos son:

- **NTFS**: usado en Windows, permite permisos complejos y compatibilidad con grandes discos.
- **FAT32**: más antiguo, compatible con muchos dispositivos pero limitado en tamaño de archivos.
- **ext4**: común en Linux, optimizado para rendimiento y seguridad.

El tipo de sistema de archivos determina qué funciones están disponibles. Por ejemplo, FAT32 no soporta cifrado de datos como lo hace NTFS, mientras que ext4 puede manejar discos de varios terabytes sin problemas.

---

## N. Conexión con lo que sigue

Este tema es clave para entender cómo se gestiona la información en el sistema operativo, lo cual conecta directamente con el estudio de **operaciones básicas de archivos** y **seguridad digital**, temas desarrollados en gestion de archivos.