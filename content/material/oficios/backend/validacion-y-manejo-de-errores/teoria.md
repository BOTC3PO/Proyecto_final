# Backend — Validación y manejo de errores (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de `../apis-rest/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Nunca confiar en la entrada

Todo dato que llega al servidor desde afuera puede ser incorrecto, incompleto o malicioso: el cuerpo de una petición, los parámetros de la URL, las cabeceras, los archivos subidos. Validar significa comprobar que cumple lo esperado antes de usarlo. Aunque el formulario del navegador ya controle los campos, esa validación del cliente es solo una comodidad: cualquiera puede enviar peticiones sin pasar por la interfaz, así que el servidor siempre valida por su cuenta.

Una buena validación comprueba el tipo, el formato, el rango, el largo y la obligatoriedad de cada campo. Conviene hacerlo lo antes posible, en el borde del sistema, para que el resto del código trabaje con datos ya confiables.

## 2. Qué validar y cómo

Se define un esquema que describe cada campo: un correo debe tener forma de correo, una edad debe ser un número entero dentro de un rango razonable, un nombre no puede ser vacío ni tener un largo desmedido. Se prefiere la lista de lo permitido por sobre la lista de lo prohibido, porque es imposible prever todo lo que alguien podría enviar.

Validar no es lo mismo que sanear. Validar acepta o rechaza; sanear transforma el dato, por ejemplo recortando espacios. También hay validaciones del negocio que dependen del estado del sistema, como que no exista ya un usuario con ese correo o que haya stock disponible, y no pueden resolverse mirando solo el formato.

## 3. Errores esperados e inesperados

No todos los errores son iguales. Un error esperado forma parte del funcionamiento normal: faltó un campo, el usuario no existe, la contraseña es incorrecta. Se detecta, se informa con claridad y el servidor sigue funcionando. Un error inesperado es una falla del propio sistema: una base caída, un fallo de programación, una conexión que se corta. Ahí el cliente no puede hacer nada, y lo correcto es registrar los detalles internamente y responder de manera genérica.

Mezclar ambos tipos genera problemas. Si todo se trata como inesperado, se llena el registro de ruido; si todo se trata como esperado, las fallas reales pasan desapercibidas. En el código se usan excepciones o resultados de error explícitos, y un manejador central en el servidor se encarga de convertirlos en respuestas.

## 4. Códigos de estado y mensajes coherentes

La respuesta debe usar el código HTTP adecuado. Los errores del cliente van en la familia 4xx: 400 para una petición mal formada, 401 cuando falta autenticación, 403 cuando no hay permiso, 404 cuando el recurso no existe, 409 por conflicto con el estado actual y 422 cuando los datos están bien formados pero no son válidos. Los errores del servidor van en la familia 5xx, y el más común es el 500.

El cuerpo de la respuesta debe tener siempre la misma estructura, por ejemplo un código de error propio, un mensaje legible y, si corresponde, la lista de campos con problemas. Un mensaje útil dice qué corregir. Pero nunca debe revelar detalles internos: ni el texto de la consulta, ni el rastro de la pila de llamadas, ni la versión del software, porque eso le sirve a quien busca vulnerabilidades.

## 5. Un ejemplo completo

Una petición para crear un usuario llega sin correo. El servidor la rechaza en la validación con un 400 o 422 y un mensaje que indica el campo faltante. Si el correo ya existe, devuelve un 409. Si la base de datos está caída, devuelve un 500 con un mensaje genérico, mientras que en el registro interno queda el detalle técnico con un identificador. Ese identificador puede mostrarse al cliente, de modo que si reporta el problema, el equipo encuentra rápido el caso.
