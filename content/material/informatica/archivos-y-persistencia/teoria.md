# Informática — Archivos y persistencia (teoría)

> Tema del MAPA: `informatica/archivos-y-persistencia`. Depende de conceptos basicos de datos (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Explicación sobre cómo se almacenan y recuperan datos en dispositivos informáticos.

---

## 1. Concepto de persistencia

La **persistencia de datos** es la capacidad que tiene un sistema para guardar información en un medio físico (como un disco duro, una memoria USB o una base de datos) de forma permanente. Esto permite que los datos sigan existiendo incluso cuando el programa que los usó se cierra o la computadora se apaga. Por ejemplo, cuando guardas un documento de texto, ese archivo queda almacenado en tu computadora para accederlo más tarde, sin importar si reinicias el equipo.

La persistencia es clave para cualquier aplicación que necesite recordar información entre sesiones: desde una lista de tareas hasta datos de usuarios en una plataforma online. Sin ella, todo lo que hagas se perdería al terminar la ejecución del programa.

---

## 2. Formatos de intercambio de datos

Cuando los programas necesitan compartir información con otros sistemas o aplicaciones, usan **formatos estandarizados** para estructurar esos datos. Dos ejemplos comunes son **JSON** y **XML**, que se utilizan ampliamente en la web moderna.

- **JSON (JavaScript Object Notation)** es un formato basado en pares clave-valor, escrito con llaves `{}` y corchetes `[]`. Es ligero y fácil de leer para humanos y máquinas. Por ejemplo:  
  ```json
  {"nombre": "Ana", "edad": 25}
  ```
  Se usa mucho en APIs para enviar datos entre servidores y aplicaciones móviles.

- **XML (eXtensible Markup Language)** es un formato basado en etiquetas, como `<tag>contenido</tag>`. Permite estructuras jerárquicas complejas:  
  ```xml
  <persona>
    <nombre>Ana</nombre>
    <edad>25</edad>
  </persona>
  ```
  Es útil cuando se necesita un formato con reglas muy definidas, como en documentos oficiales o intercambio entre sistemas empresariales.

Ambos formatos permiten que los datos se transmitan de forma ordenada y comprensible para cualquier sistema que los reciba.

---

## 3. Extensiones de archivos

Las **extensiones de archivos** son sufijos que aparecen después del punto en el nombre de un archivo, como `.txt`, `.jpg` o `.csv`. Estas extensiones indican qué tipo de datos contiene el archivo y qué programa se necesita para abrirla.

Un ejemplo común es el formato **.csv**, que significa *Comma-Separated Values* (Valores Separados por Comas). Este formato almacena datos en forma de tablas, donde cada línea representa un registro y los valores están separados por comas. Por ejemplo:  
```
nombre,apellido,edad
Ana,López,25
Carlos,Rodríguez,30
```

Los archivos .csv son útiles para importar o exportar listas de datos en programas como Excel, bases de datos o aplicaciones de contabilidad. También se usan en ciencia de datos para analizar grandes volúmenes de información.

---

## 4. Medios de almacenamiento

La persistencia no solo depende del formato, sino también del **medio físico** donde los datos se guardan. Los dispositivos como discos duros, USB, SSD o nubes online son ejemplos de medios no volátiles (es decir, que conservan la información incluso sin energía eléctrica). Cada uno tiene ventajas y desventajas:  
- **Discos duros** ofrecen mucha capacidad, pero pueden ser lentos.  
- **SSD** son más rápidos, pero costosos.  
- **Nubes** permiten acceso remoto, pero dependen de internet.

La elección del medio depende del uso que se le dará a los datos: si se necesita rapidez, seguridad o capacidad de almacenamiento.

---

## N. Conexión con lo que sigue

Este tema conecta con bases de datos, donde se profundizará en cómo las estructuras de persistencia se organizan para manejar grandes volúmenes de información de forma eficiente.