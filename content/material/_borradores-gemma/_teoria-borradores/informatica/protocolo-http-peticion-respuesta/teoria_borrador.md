# Informática — Protocolo HTTP: petición y respuesta  

> Tema del MAPA: `protocolo_http_peticion_respuesta`. Depende de: a determinar (ver dependencias.md).  

## Tipo de teoría (si esto se carga al sistema)  

**Presentación** — Explicación del funcionamiento básico del protocolo HTTP en la comunicación entre cliente y servidor.  

---

## 1. El modelo cliente-servidor  

En internet, todo intercambio de información se basa en una relación de *cliente* y *servidor*. El **cliente** es el dispositivo (como un navegador web) que solicita un recurso, mientras que el **servidor** es la computadora que almacena o procesa ese recurso. Por ejemplo, cuando abres una página web, tu navegador envía una solicitud al servidor donde está alojada esa página. El servidor responde enviando los datos necesarios para mostrarla en tu dispositivo.  

Este modelo no es exclusivo del HTTP, pero es clave para entender cómo funciona la web: siempre hay un **iniciador** (el cliente) y un **receptor** (el servidor), con una interacción de ida y vuelta.  

---

## 2. Estructura de una petición HTTP  

Cada solicitud que el cliente envía al servidor sigue un formato estándar. La estructura básica incluye tres partes:  

1. **Método HTTP**: Indica la acción que se quiere realizar. Los más comunes son `GET` (solicitar datos), `POST` (enviar información) y `PUT` (actualizar recursos).  
2. **URL**: La dirección del recurso solicitado, como `https://ejemplo.com/pagina.html`.  
3. **Cabeceras y cuerpo**: Información adicional, como tipo de contenido o credenciales.  

Por ejemplo: una petición para cargar un artículo podría ser:  
```
GET /articulo/123 HTTP/1.1
Host: www.revista.com
Accept: text/html
```  
El método `GET` le dice al servidor que debe devolver el recurso `/articulo/123`, y las cabeceras indican qué tipo de contenido espera el cliente.  

---

## 3. Flujo de comunicación HTTP  

La interacción entre cliente y servidor sigue un ciclo predecible:  

1. **El cliente envía una petición**: Por ejemplo, al escribir una dirección en la barra del navegador.  
2. **El servidor procesa la solicitud**: Busca el recurso solicitado, valida permisos o ejecuta scripts necesarios.  
3. **El servidor responde con un estado y contenido**: Si todo va bien, envía un código `200 OK` junto con los datos (como una página HTML).  
4. **El cliente recibe y muestra el resultado**: El navegador renderiza la página o procesa los datos recibidos.  

Este proceso ocurre en milisegundos, incluso si hay errores: por ejemplo, si un recurso no existe, el servidor devuelve un `404 Not Found`.  

---

## 4. La respuesta HTTP y sus significados  

Una respuesta HTTP siempre incluye dos elementos clave:  

- **Código de estado**: Un número de tres dígitos que indica si la petición fue exitosa o no.  
  - `2xx`: Éxito (ej: `200 OK`, `201 Created`).  
  - `4xx`: Error del cliente (ej: `404 Not Found`, `403 Forbidden`).  
  - `5xx`: Error del servidor (ej: `500 Internal Server Error`).  

- **Contenido**: Los datos solicitados, como texto HTML, imágenes o JSON. Las cabeceras de la respuesta también pueden incluir información sobre el tipo de contenido (`Content-Type`) o si se debe cachear.  

Estos códigos ayudan a los desarrolladores a diagnosticar problemas y a los usuarios a entender qué sucede cuando una página no carga correctamente.  

---

## N. Conexión con lo que sigue  

Este tema es base para entender protocolos más avanzados, como **HTTPS** (que agrega cifrado) o el funcionamiento de las **APIs** (interfaz de programación de aplicaciones), donde se usan peticiones HTTP para intercambiar datos entre servicios.