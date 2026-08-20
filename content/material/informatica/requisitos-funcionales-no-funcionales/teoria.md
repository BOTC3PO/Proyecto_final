# Informática — Requisitos funcionales y no funcionales (teoría)

> Tema del MAPA: `informatica/requisitos-funcionales-no-funcionales`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Diferencia entre lo que debe hacer un sistema y cómo debe hacerlo.

---

## 1. ¿Qué son los requisitos funcionales?

Los requisitos funcionales describen **qué hace el sistema**, es decir, las acciones o funciones concretas que debe cumplir para satisfacer a sus usuarios. Por ejemplo: "El sistema debe permitir al usuario crear una cuenta", "Deberá mostrar un historial de transacciones" o "Generar informes mensuales". Estos requisitos se centran en el **comportamiento del software** desde la perspectiva del usuario final.

Son los elementos que definen las tareas esenciales del sistema, sin importar cómo se logren. Se suelen expresar de manera operativa y concretas, como verbos o acciones ("permitir", "guardar", "calcular").

[IMAGEN: Tabla comparando requisitos funcionales (ejemplo: "Crear usuario") vs. no funcionales (ejemplo: "Tiempo máximo de respuesta 2 segundos")]

---

## 2. ¿Qué son los requisitos no funcionales?

Los requisitos no funcionales definen **cómo debe hacer lo que hace el sistema**, es decir, atributos de calidad o restricciones técnicas que garantizan su correcto funcionamiento. Incluyen aspectos como rendimiento ("El sistema debe responder en menos de 2 segundos"), seguridad ("Las contraseñas deben estar encriptadas"), disponibilidad ("El servicio debe estar operativo el 99,5% del tiempo") o usabilidad ("La interfaz debe ser accesible para personas con discapacidad visual").

Aunque no describen funciones específicas, son críticos para que el sistema sea confiable, escalable y aceptado por los usuarios. Por ejemplo: una aplicación podría cumplir con un requisito funcional de "guardar datos", pero si su rendimiento es lento (requisito no funcional), la experiencia del usuario se verá afectada.

---

## 3. Ejemplos claros de ambos tipos

- **Requisito funcional**:  
  *"El sistema debe permitir al administrador eliminar un producto del catálogo."*  
  Aquí se describe una acción específica que el software debe ejecutar.

- **Requisito no funcional**:  
  *"La eliminación de productos debe realizarse en menos de 500 milisegundos bajo carga máxima."*  
  Se refiere a un límite de rendimiento, no a la acción en sí.

Otro ejemplo:  
- Funcional: "El usuario puede pagar con tarjeta de crédito".  
- No funcional: "El proceso de pago debe ser seguro según estándares PCI-DSS".

---

## 4. ¿Por qué distinguir entre ambos?

La separación entre requisitos funcionales y no funcionales permite **planificar el desarrollo** de manera más eficiente. Los primeros guían la implementación de funcionalidades, mientras que los segundos influyen en decisiones técnicas (ej.: elegir un framework escalable o un protocolo seguro). Además, ayuda a evitar ambigüedades: si solo se define lo que debe hacer el sistema, sin considerar cómo debe hacerlo, puede resultar inoperante o poco confiable.

Por ejemplo, un requisito funcional como "El sistema debe enviar notificaciones" no especifica si es por correo electrónico, mensaje de texto o push notification. Un requisito no funcional podría indicar: "Las notificaciones deben entregarse en menos de 10 segundos".

---

## N. Conexión con lo que sigue

Este tema se vincula directamente con el análisis de requisitos y la documentación técnica del software, temas clave para entender cómo se estructura un proyecto en ingenieria software.